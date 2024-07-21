const mongoose = require("mongoose")

const dbConect = async () =>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`data base is successfuly connected ,
            HOST ${connect.connection.host} ,
            DATABASE ${connect.connection.name}
            `)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = dbConect;