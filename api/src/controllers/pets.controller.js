const dogApi = require('../helpers/axios.instance')

const {Pet} = require('../db')
//service

const formateadorRespuesta = (arrayPets) => {
    return arrayPets.map( item => ({
        nombre: item.name,
        id: item.id,
        peso: item.weight.metric || 'no especificado',
        altura: item.height.metric || 'no especificado',
        criadoPara: item.bred_for || 'no especificado',
        grupoDeRaza: item.bred_group || 'no especificado' || 'no especificado',
        temperamento: item.temperament || 'no especificado',
        image: item.image?.url || null
        
    }))
}

const crearMascota = async ({nombre, peso, altura, criadoPara, grupoDeRaza, temperamento}) => {
        const newMascota = await Pet.create({nombre, peso, altura, criadoPara, grupoDeRaza, temperamento})
        if(!newMascota) throw new Error('algo se pudrio')
        return newMascota
      
}

const getPetsFromTheApi = async () => {
    try {
        let apiPets = []
        const res = await dogApi.get('/breeds',
            {
                params: {limit:20}    
            }
        )
        // const data = await res.json()
         apiPets = [...res.data]
         let arrayFormateado = formateadorRespuesta(apiPets)
                //   console.log(apiPets)
         return arrayFormateado
    } catch (error) {
console.log(error)        
        res.status(500).json({error:error.message})
    }
}

  const traerUnaMascota = async (id) => {
    const source = isNaN(id) ? 'db' : 'api'
    let retorno = null;
    if(source === 'db') {
       retorno = await Pet.findByPk(id)
    } else {
        const res = await dogApi.get(`/${id}`) 
        retorno = formateadorRespuesta([res.data])[0]
    }
    return retorno
}

 const getASinglePet = async (req,res,next) => {
    try {
        const {id} = req.params
        const singlePet = await traerUnaMascota(id)
        if (!singlePet) {
    return res.status(404).json({error: 'Mascota no encontrada'})
}
        res.status(200).send(singlePet)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}



const postAPet = async (req,res,next) => {
    try {
        const {nombre, peso, altura, criadoPara, grupoDeRaza, temperamento} = req.body
        const newPet = await crearMascota({nombre, peso, altura, criadoPara, grupoDeRaza, temperamento})
        res.status(200).send(newPet)
    } catch (error) {
        res.status(500).json({error:error.message})
        console.log(error)
    }
}

 const getAllPets = async(req,res,next) => {
    try {
       const lopets = await getPetsFromTheApi()
        const allPets = await Pet.findAll()
         console.log(lopets)

        // return allPets
        res.status(200).send(allPets)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllPets,postAPet, getASinglePet}