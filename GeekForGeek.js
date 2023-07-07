
var client = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/admin';
client.connect(url,{ useNewUrlParser: true }, function(err,db)
{
     console.log("Connected");
     db.close();
});