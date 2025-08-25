const dotenv= require('dotenv')
dotenv.config({quiet:true})
const app = require('./src/app')
const { sequelize:db } = require('./src/db')


const PORT = process.env.PORT || 3001

async function startServer(){

    try {
          await db.authenticate(
            // console.log('oli')
          );

        db.sync({force:true}).then(
        // db.authenticate();
            app.listen(PORT,()=>{
        db.authenticate();

    console.log(`server on port `,PORT)
})
        )
    } catch (error) {
       console.log(error) 
    }
}

startServer()
