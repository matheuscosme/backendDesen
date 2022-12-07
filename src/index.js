const cors = require('cors');
const express = require('express');
const {ObjectId} = require('mongodb');
const server = express();
server.use(express.json());
server.use(cors());
const mongoClient = require('mongodb').MongoClient;

const APP_PORT = 3001;
const APP_HOST = 'localhost';
const MONGO_HOST = 'mongodb+srv://cosme_tavares:123456M@cluster0.fr015va.mongodb.net/?retryWrites=true&w=majority';
const MONGO_DB = 'spotify';
const COLLECTION_PLAYLISTS = 'playlists';
const COLLECTION_USERS = 'usuarios';
const COLLECTION_PLAY_USERS = 'playlistsDeUsuarios';
const COLLECTION_MUSICAS = 'musicas';


server.listen(APP_PORT, APP_HOST);

server.get('/users', (req, res) => {   
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_USERS).find().toArray((err, result) => {
      if (err) throw err
      res.send(result);
    });
  });
});


server.get('/users/:email', (req,res)=>{
  const {email} = req.params
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_USERS).findOne({ email: email }, (err, result) => {
      if (err) throw err
      res.send(result);
    });
  });
});


server.post('/users', (req, res) => {
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_USERS).insertOne(req.body, (err) => {
      if (err) throw err
      res.status(201);
      res.send();
    });
  });
});


server.put('/users/:id', (req, res) => {
  const {id} = req.params
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_USERS).updateOne({ _id: ObjectId(id) }, { $set: {"nome" : req.body.usuario , 
                                                                                    "email" : req.body.email ,
                                                                                    "senha" : req.body.senha} }, (err) => {
      if (err) throw err
      res.send();
    });
  });
});


server.get('/playlists', (req, res) => {   
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_PLAYLISTS).find().toArray((err, result) => {
      if (err) throw err
      res.send(result);
    });
  });
});

server.get('/playlistsDeUsuarios', (req, res) => {   
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_PLAY_USERS).find().toArray((err, result) => {
      if (err) throw err
      res.send(result);
    });
  });
});

server.get('/playlistsDeUsuarios/:id', (req,res)=>{
  const {id} = req.params
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_PLAY_USERS).findOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) throw err
      res.send(result);
    });
  });
});

server.post('/playlistsDeUsuarios', (req, res) => {
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_PLAY_USERS).insertOne(req.body, (err) => {
      if (err) throw err
      res.status(201);
      res.send();
    });
  });
});


server.get('/playlists/:id', (req,res)=>{
    const {id} = req.params
    mongoClient.connect(MONGO_HOST, (err, client) => {
      if (err) throw err
      const database = client.db(MONGO_DB);
      database.collection(COLLECTION_PLAYLISTS).findOne({ _id: ObjectId(id) }, (err, result) => {
        if (err) throw err
        res.send(result);
      });
    });
});


server.get('/todasAsMusicas', (req, res) => {   
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_MUSICAS).find().toArray((err, result) => {
      if (err) throw err
      res.send(result);
    });
  });
});


server.get('/todasAsMusicas/:busca', (req,res)=>{
  let array = []
  const {busca} = req.params
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_MUSICAS).find().toArray((err, result) => {
      for(let i=0;i<result.length;i++){
              if(result[i].nome.toLowerCase().indexOf(busca.toLowerCase())>-1){
                  array.push(result[i])
              }
              else if(result[i].artista.toLowerCase().indexOf(busca.toLowerCase())>-1){
                array.push(result[i])
            }
          }
      if (err) throw err
      res.send(array);
    });
  });
});


server.put('/playlistsDeUsuarios/:id', (req, res) => {
  const {id} = req.params
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_PLAY_USERS).updateOne({ _id: ObjectId(id) }, { $push: {musicas : req.body} }, (err) => {
      if (err) throw err
      res.send(req.body);
    });
  });
});


server.put('/playlistsDeUsuarios/delete/:id', (req, res) => {
  const {id} = req.params
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(COLLECTION_PLAY_USERS).updateOne({ _id: ObjectId(id) }, { $pull: {musicas : {idDaMusica: req.body.idDaMusica}} }, (err) => {
      if (err) throw err
      res.send();
    });
  });
});


// server.patch('/playlistsDeUsuarios/:id', (req, res) => {
//   const {id} = req.params
//   mongoClient.connect(MONGO_HOST, (err, client) => {
//     if (err) throw err
//     const database = client.db(MONGO_DB);
//     database.collection(COLLECTION_USERS).replaceOne({ _id: ObjectId(id) }, { $set: {"musicas" : req.body.musicas} }, (err) => {
//       if (err) throw err
//       res.send(req.body.musicas);
//     });
//   });
// });
