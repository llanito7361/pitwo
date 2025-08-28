const {Router} = require('express')
const { sequelize } = require('../db')
const { getAllPets,postAPet,getASinglePet} = require('../controllers/pets.controller')


const petsRouter = Router()

petsRouter.get('/',getAllPets)

petsRouter.get('/:petId',getASinglePet)

petsRouter.post('/',postAPet)

// petsRouter.get('/:PetId',getASinglePet)


module.exports  = petsRouter