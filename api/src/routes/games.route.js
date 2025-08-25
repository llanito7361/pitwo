const {Router} = require('express')
const { sequelize } = require('../db')
const { getAllGames } = require('../controllers/games.controller')


const gamesRouter = Router()

gamesRouter.get('/',getAllGames
    // (req,res)=>{
    // res.status(200).send('get para /games')
// }
)

module.exports  = gamesRouter