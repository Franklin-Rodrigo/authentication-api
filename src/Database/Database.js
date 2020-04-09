require('dotenv')
const mongoose = require('mongoose')

class Database {
  connection () {
    mongoose.connect("mongodb+srv://franklin:Apocalipse4@cluster0-ux1e8.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true
    })

    mongoose.set('useCreateIndex', true)
    mongoose.Promise = global.Promise

    if (process.env.NODE_ENV === 'dev') {
      mongoose.connection.on(
        'error',
        console.error.bind(console, 'Connection database error:')
      )
    }
  }
}

module.exports = new Database()
