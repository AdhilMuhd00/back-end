var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://adhilmuhd00:Adhil@cluster0.snkex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
    console.log('Failed to connect to MongoDB')
})