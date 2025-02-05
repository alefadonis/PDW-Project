const professorRouter = require('express').Router()
const professorController = require('../controller/ProfessorController')

professorRouter.route('/professor')
    .post(function (req, res, next) {
        const professorBody = req.body

        if( !professorBody.email ){
            
        }
    })