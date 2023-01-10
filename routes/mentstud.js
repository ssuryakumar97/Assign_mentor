
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Student = require('../connect/models/student.model')
const Mentor = require('../connect/models/mentor.model')


// Assigning student to mentor
router.post('/newStudent',async (req, res)=> {
    try{
        const studentdata = await Student.findByIdAndUpdate(req.body.studentid)
        const mentordata = await Mentor.findByIdAndUpdate(req.body.mentorid)

    if(studentdata.mentorAssigned == 0 || studentdata.mentorAssigned == "null" || !studentdata.mentorAssigned){
        
        const arr = mentordata.studentsAssigned.length + 1
        console.log(arr)
        mentordata.studentsAssigned[arr-1] = req.body.studentid
        console.log(mentordata)
        await mentordata.save()

        studentdata.mentorAssigned = req.body.mentorid
        console.log(studentdata)
        await studentdata.save()
        res.status(201).send(mentordata)
    }else {
        res.send("Student already assigned to mentor")
    }} catch (e) {
        res.send(e)
    }
})


//Assigning mentor to student
        
router.post('/newMentor',async (req, res)=> {
   try{
    const studentdata = await Student.findByIdAndUpdate(req.body.studentid)

    const mentordata = await Mentor.findByIdAndUpdate(req.body.mentorid)
    
    const arr = mentordata.studentsAssigned.length + 1
    mentordata.studentsAssigned[arr-1] = req.body.studentid
    await mentordata.save()

    studentdata.mentorAssigned = req.body.mentorid
    await studentdata.save()
    res.status(201).send(studentdata)

  } catch (err) {
    res.send(err)
  }
}) 


module.exports = router;
