//Database configuration
require('dotenv').config()

var mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//mongoose.connect('mongodb+srv://cs_admin_user:GYG4r7woav9ds02d@cspinupa-cluster.hqmdq.mongodb.n

