const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0-0ewd4.gcp.mongodb.net/test',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => 'db is connected')
.catch(err => console.log('db error: ',err));