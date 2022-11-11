const express = require('express');
const server = express();
server.use(express.json());


const playlists = [
    {
      "id": 1,
      "estilo": "Metal",
      "nome": "Iron Maiden",
      "musicas": [
        {
          "nome": "The Trooper",
          "endereco": "../musica/iron1.mp3"
        }
      ]
    },
    {
      "id": 2,
      "estilo": "Reggae",
      "nome": "Bob Marley",
      "musicas": [
        {
          "nome": "Is this Love",
          "endereco": "../musica/bob1.mp3"
        },
        {
          "nome": "One Love",
          "endereco": "../musica/bob2.mp3"
        }
      ]
    },
    {
      "id": 3,
      "estilo": "Rock",
      "nome": "Indie e Nacional",
      "musicas": [
        {
          "nome": "Do I Wanna Know",
          "artista": "Arctic Monkeys",
          "endereco": "../musica/Do I Wanna Know.mp3"
        },
        {
          "nome": "Não Sei Viver Sem Ter Você",
          "endereco": "../musica/Não Sei Viver Sem Ter Você.mp3"
        },
        {
          "nome": "Sweater Weather",
          "endereco": "../musica/Sweater Weather.mp3"
        }
      ]
    }
  ]

const playlistsDeUsuarios = [
    {
      "id": 1,
      "idDoUsuario": 11,
      "estilo": "Matheus",
      "nome": "Pop Rock",
      "musicas": [
        {
          "idDaMusica": 4
        },
        {
          "idDaMusica": 3
        },
        {
          "idDaMusica": 7
        }
      ]
    },
    {
      "id": 2,
      "idDoUsuario": "10",
      "estilo": "Teste",
      "nome": "Musicas",
      "musicas": [
        {
          "idDaMusica": 1
        },
        {
          "idDaMusica": 2
        }
      ]
    },
    {
        "id": 3,
        "idDoUsuario": 13,
        "nome": "Minha",
        "estilo": "Cosme",
        "musicas": [
        {
          "idDaMusica": 7
        },
        {
          "idDaMusica": 5
        },
        {
          "idDaMusica": 3
        }
      ],
    }
]


const Usuarios = [
    {
        "id": 1,
        "usuario": "roberio",
        "email": "roberio@unifor",
        "senha": 123
    },
    {
        "id": 2,
        "usuario": "saulo",
        "email": "saulo@unifor",
        "senha": 123
    },
    {
        "id": 3,
        "usuario": "cosme",
        "email": "cosme@unifor",
        "senha": 123
    },
    {
        "id": 4,
        "usuario": "gabriel",
        "email": "gabriel@unifor",
        "senha": 123      
    }
]

const musicas = [{
    "id": 1,
    "nome": "Is this Love",
    "artista": "Bob Marley",
    "endereco": "../musica/bob1.mp3"
  },
  {
    "id": 2,
    "nome": "One Love",
    "artista": "Bob Marley",
    "endereco": "../musica/bob2.mp3"
  },
  {
    "id": 3,
    "nome": "The Trooper",
    "artista": "Iron Maiden",
    "endereco": "../musica/iron1.mp3"
  },
  {
    "id": 4,
    "nome": "Do I Wanna Know",
    "artista": "Arctic Monkeys",
    "endereco": "../musica/Do I Wanna Know.mp3"
  },
  {
    "id": 5,
    "nome": "Mulher de Fases",
    "artista": "Raimundos",
    "endereco": "../musica/Mulher de fases.mp3"
  }
]



server.get('/playlists', (req, res) => {   
    return res.json( playlists );
});

server.get('/playlist/:id', (req,res)=>{
    const {id} = req.params
    res.json(playlists[id-1])
});

server.get('/playlistsUser', (req, res) => {   
    return res.json(playlistsDeUsuarios);
});

server.get('/playlistsUser/:id', (req,res)=>{
    const {id} = req.params
    res.json(playlistsDeUsuarios[id-1])
});

server.post('/usuarios', (req, res) => {
    const user = req.body
    Usuarios.push(user)
    return res.status(200).json(Usuarios)
});

server.get('/usuarios', (req,res)=>{
    const {email} = req.query
    for (let i = 0; i<Usuarios.length ; i++){
      if(Usuarios[i].email == email){
        var usuario = Usuarios[i]
      }
    }
    return res.json(usuario)
})

server.put('/usuarios/:id', (req,res)=>{
    var {id} = req.params;
    id = parseInt(id)
    Usuarios[id-1] = req.body;
    return res.json(Usuarios);
})

server.listen(8000, function(req,res){
    console.log("Servidor Ligado");
});

server.post('/criarPlay', (req, res) => {
    const playlist = req.body
    playlistsDeUsuarios.push(playlist)
    return res.status(200).json(playlistsDeUsuarios)
});

server.get('/musicas', (req,res)=>{
  let array = []
  const {busca} = req.query
  for(let i=0;i<musicas.length;i++){
      if(musicas[i].nome.toLowerCase().indexOf(busca.toLowerCase())>-1){
          array.push(musicas[i])
      }
      else if(musicas[i].artista.toLowerCase().indexOf(busca.toLowerCase())>-1){
        array.push(musicas[i])
    }
  }
    return res.json(array)
})

server.get('/TodasAsMusicas', (req,res)=>{
    return res.json(musicas)
})


server.put('/playlistsUser/:id', (req,res)=>{
  var {id} = req.params;
  id = parseInt(id)
  playlistsDeUsuarios[id-1] = req.body;
  return res.json(playlistsDeUsuarios);
})