const { JobsModel } = require("../Model/jobs.model");



const PostJobsController = async (req, res) => {
    const data = new JobsModel(req.body);
    data.save();
    res.send({ msg: "Job Listed Successfully" })
}
const GetJobsController = async (req, res) => {
    const data = await JobsModel.find();
    res.send({ msg: 'Data found', data: data })
}

module.exports = {
    PostJobsController, GetJobsController
}