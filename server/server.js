const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')



const DB = process.env.DATABASE.replace('Mohit123', process.env.DATABASE_PASSWORD)
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log('DB connection successful!'))





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})
