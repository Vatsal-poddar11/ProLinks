const mongoose = require("mongoose");

const linksSchema = new mongoose.Schema({
    LinkedIn:{
        type: String,
    },
    GitHub:{
        type: String,
    },
    GeeksForGeeks:{
        type: String,
    },
    Leetcode:{
        type: String,
    },
    CodeChef:{
        type: String,
    },
    CodeForces:{
        type: String,
    },
    AtCoder:{
        type: String,
    },
    CodeStudio:{
        type: String,
    },
    Medium:{
        type: String,
    },
    Other:{
        type: String,
    },
},
);

module.exports = mongoose.model("Links", linksSchema);

