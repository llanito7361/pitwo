
const {Games} = require('../db')

 const getAllGames = async(req,res,next) => {
    try {
        const allGames = await Games.findAll()

        // return allGames
        res.status(200).send(allGames)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllGames}