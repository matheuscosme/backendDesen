const cors = require('cors');
const express = require('express');
const {ObjectId} = require('mongodb');
const server = express();
server.use(express.json());
server.use(cors());
const mongoClient = require('mongodb').MongoClient;

const APP_PORT = 8080;
const APP_HOST = 'localhost';
const MONGO_HOST = 'mongodb+srv://cosme_tavares:123456M@cluster0.fr015va.mongodb.net/?retryWrites=true&w=majority';
const MONGO_DB = 'spotify';
const MONGO_COLLECTION = 'playlists';


server.listen(APP_PORT, APP_HOST);

server.get('/playlists', (req, res) => {   
  mongoClient.connect(MONGO_HOST, (err, client) => {
    if (err) throw err
    const database = client.db(MONGO_DB);
    database.collection(MONGO_COLLECTION).find().toArray((err, result) => {
      if (err) throw err
      res.send(result);
    });
  });
});

server.get('/playlist/:id', (req,res)=>{
    const {id} = req.params
    mongoClient.connect(MONGO_HOST, (err, client) => {
      if (err) throw err
      const database = client.db(MONGO_DB);
      database.collection(MONGO_COLLECTION).findOne({ _id: ObjectId(id) }, (err, result) => {
        if (err) throw err
        res.send(result);
      });
    });
});

// server.get('/playlistsUser', (req, res) => {   
//     return res.json(playlistsDeUsuarios);
// });

// server.get('/playlistsUser/:id', (req,res)=>{
//     const {id} = req.params
//     res.json(playlistsDeUsuarios[id-1])
// });

// server.post('/usuarios', (req, res) => {
//     const user = req.body
//     Usuarios.push(user)
//     return res.status(200).json(Usuarios)
// });

// server.get('/usuarios', (req,res)=>{
//     const {email} = req.query
//     for (let i = 0; i<Usuarios.length ; i++){
//       if(Usuarios[i].email == email){
//         var usuario = Usuarios[i]
//       }
//     }
//     return res.json(usuario)
// })

// server.put('/usuarios/:id', (req,res)=>{
//     var {id} = req.params;
//     id = parseInt(id)
//     Usuarios[id-1] = req.body;
//     return res.json(Usuarios);
// })


// server.post('/criarPlay', (req, res) => {
//     const playlist = req.body
//     playlistsDeUsuarios.push(playlist)
//     return res.status(200).json(playlistsDeUsuarios)
// });

// server.get('/musicas', (req,res)=>{
//   let array = []
//   const {busca} = req.query
//   for(let i=0;i<musicas.length;i++){
//       if(musicas[i].nome.toLowerCase().indexOf(busca.toLowerCase())>-1){
//           array.push(musicas[i])
//       }
//       else if(musicas[i].artista.toLowerCase().indexOf(busca.toLowerCase())>-1){
//         array.push(musicas[i])
//     }
//   }
//     return res.json(array)
// })

// server.get('/TodasAsMusicas', (req,res)=>{
//     return res.json(musicas)
// })


// server.put('/playlistsUser/:id', (req,res)=>{
//   var {id} = req.params;
//   id = parseInt(id)
//   playlistsDeUsuarios[id-1] = req.body;
//   return res.json(playlistsDeUsuarios);
// })
