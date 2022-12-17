const { Router } = require("express");
const { PostJobsController, GetJobsController } = require("../Controller/jobs.controller");


const JobsRoute = Router();
JobsRoute.post("/", PostJobsController)
JobsRoute.get("/", GetJobsController)

module.exports = {
    JobsRoute
}