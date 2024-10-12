const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

database.connect();

const allowedOrigins = [
	'http://localhost:3000',  
	'https://pro-links.vercel.app/',
];

// CORS configuration
const corsOptions = {
	origin: function (origin, callback) {
		if (!origin) return callback(null, true);  // Allow requests with no origin (like Postman, curl)
		if (allowedOrigins.indexOf(origin) === -1) {
			const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	},
	credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
	optionsSuccessStatus: 200  // To handle legacy browsers that choke on 204 responses
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions)); 

// Other middlewares
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
	useTempFiles: true,
	tempFileDir: "/tmp",
}));

// Connect to Cloudinary
cloudinaryConnect();

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);

// Default route
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: 'Your server is up and running....'
	});
});

// Start the server
app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`);
});
