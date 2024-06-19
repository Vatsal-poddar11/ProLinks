const Links = require("../models/Links");
const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.updateLinks = async(req, res) => {
  try {
      console.log("Updating Links with incoming request : ", req.body);
      console.log("LinkedIn : ", req.body.LinkedIn);
      console.log("GitHub : ", req.body.GitHub);
      const {
        LinkedIn = "", 
        GitHub = "", 
        GeeksForGeeks = "", 
        Leetcode = "", 
        CodeChef = "",
        CodeForces = "", 
        AtCoder = "", 
        CodeStudio = "", 
        Medium = "", 
        Other = ""
      } = req.body;
      const id = req.user.id;

      // console.log("LinkedIn", LinkedIn);
      // console.log("Github", GitHub);

      const userDetails = await User.findById(id);
      console.log("User : ",userDetails);
      const profile = await Profile.findById(userDetails.additionalDetails).populate("profileLinks").exec();
      console.log("Profile : " ,profile);
      const allLinks = await Links.findById(profile.profileLinks);

      console.log("All Links : ", allLinks);

      // Update Links
      allLinks.LinkedIn = LinkedIn;
      allLinks.GitHub = GitHub;
      allLinks.GeeksForGeeks = GeeksForGeeks;
      allLinks.Leetcode = Leetcode;
      allLinks.CodeChef = CodeChef;
      allLinks.CodeForces = CodeForces;
      allLinks.AtCoder = AtCoder;
      allLinks.CodeStudio = CodeStudio;
      allLinks.Medium = Medium;
      allLinks.Other = Other;

      console.log(allLinks);
      console.log("LinkedIn : ", allLinks.LinkedIn);
      // consol.log("Github : ", allLinks?.GitHub);

      await allLinks.save();
      return res.status(200).json({
    success: true,
    message: "Links updated successfully",
  });
  } catch (error) {
      return res.status(500).json({
          success: false,
          message: "Unable to update links",
      })
  }
}

exports.updateProfile = async(req, res) => {
    try {
        
        const {dateOfBirth = "", gender = "", about , contactNumber} = req.body;
        const id = req.user.id;

        const userDetails = await User.findById(id);
        const profile = await Profile.findById(userDetails.additionalDetails).populate("profileLinks").exec();

        // Update Profile
        profile.dateOfBirth = dateOfBirth;
        profile.about = about;
        profile.gender = gender;
        profile.contactNumber = contactNumber;

        console.log(profile);

        const updatedProfile = await Profile.findById(profile._id).populate("profileLinks").exec();
        console.log("Updated Profile" ,updatedProfile);

        await profile.save();
        return res.status(200).json({
			success: true,
			message: "Profile updated successfully",
			profile: updatedProfile,
		});
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to update profile",
        })
    }
}

exports.getAllUserDetails = async (req, res) => {
	try {
		const id = req.user.id;
		const userDetails = await User.findById(id)
			.populate("additionalDetails")
			.exec();
        
        const profileDetails = await Profile.findById(userDetails.additionalDetails)
            .populate("profileLinks")
            .exec();  

		console.log(profileDetails);
		res.status(200).json({
			success: true,
			message: "User Data fetched successfully",
			data: profileDetails,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

exports.deleteAccount = async (req, res) => {
  try {
    const id = req.user.id;
    console.log(`Deleting user with ID: ${id}`);

    const user = await User.findById(id);
    if (!user) {
      console.log('User not found');
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    console.log(`Found user: ${user}`);

    const profileId = user.additionalDetails;
    console.log(`Associated profile ID: ${profileId}`);

    const profile = await Profile.findById(profileId).populate("profileLinks").exec();
    if (!profile) {
      console.log('Profile not found');
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }
    console.log(`Found profile: ${profile}`);

    if (profile.profileLinks && profile.profileLinks.length > 0) {
      console.log(`Deleting profile links: ${profile.profileLinks}`);
      const deleteLinksResult = await Links.findByIdAndDelete({ _id: { $in: profile.profileLinks._id } });
      console.log(`Deleted links result: ${deleteLinksResult}`);
    }

    const deleteProfileResult = await Profile.findByIdAndDelete(profileId);
    console.log(`Deleted profile result: ${deleteProfileResult}`);

    const deleteUserResult = await User.findByIdAndDelete(id);
    console.log(`Deleted user result: ${deleteUserResult}`);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "User cannot be deleted successfully" });
  }
};

exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      console.log(image);
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
};