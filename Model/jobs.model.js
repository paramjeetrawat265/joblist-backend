const { default: mongoose } = require("mongoose");

const JobsSchema = mongoose.Schema({
    company: { type: String },
    postedAt: { type: String },
    city: { type: String },
    location: { type: String },
    role: { type: String },
    level: { type: String },
    contract: { type: String },
    position: { type: String },
    language: { type: String }
})

const JobsModel = mongoose.model("jobs", JobsSchema);

module.exports = {
    JobsModel
}