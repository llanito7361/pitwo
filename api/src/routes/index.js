const {Router} = require('express')
const gamesRouter = require('./games.route')

const mainRouter = Router()

mainRouter.use('/games',gamesRouter)

mainRouter.get('/',(req,res)=>res.send('oli desde / en plan root asi a guacha pelada'))

module.exports = mainRouter