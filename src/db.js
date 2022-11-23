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
