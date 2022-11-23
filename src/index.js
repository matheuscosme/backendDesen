// const express = require('express');
// const server = express();
// const MONGO_URL = "mongodb+srv://cosme_tavares:password@cluster0.fr015va.mongodb.net/?retryWrites=true&w=majority"
// server.use(express.json());

const { MongoClient } = require('mongodb');

async function main(){
  const uri = "mongodb+srv://cosme_tavares:123456M@cluster0.fr015va.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  //await client.connect();

  try{
    await client.connect();

    await listDatabases(client);

  } catch(e){
    console.error(e);
  } finally{
    await client.close();
  }
} 

main().catch(console.error);

async function listDatabases(client){
  const databasesList = await client.db().admin().listDatabases();

  // console.log("Databases: ");
  // databasesList.databases.forEach(db => {
  //   console.log(`- ${db.name}`)
  // });

  const result = await client.db("spotify").collection("musicas").find().toArray();
  console.log(result)
}

// server.get('/playlists', (req, res) => {   
//     return res.json( playlists );
// });

// server.get('/playlist/:id', (req,res)=>{
//     const {id} = req.params
//     res.json(playlists[id-1])
// });

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

// server.listen(8000, function(req,res){
//     console.log("Servidor Ligado");
// });

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
