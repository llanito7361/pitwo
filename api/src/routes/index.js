const {Router} = require('express')
const petsRouter = require('./pets.route')

const mainRouter = Router()

mainRouter.use('/pets',petsRouter)

mainRouter.get('/',(req,res)=>res.send('oli desde / en plan root asi a guacha pelada'))

module.exports = mainRouter