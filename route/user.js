
const express = require("express")
const router = express.Router()
const {createEmployee, getEmployee, updateEmployee, deleteEmployee, getSingleEmployee} = require("../controller/user")

router.post("/user", createEmployee)
router.get("/user", getEmployee)
router.get("/user/:id", getSingleEmployee)
router.patch("/user/:id", updateEmployee)
router.delete("/user/:id", deleteEmployee)

module.exports = router;