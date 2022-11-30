const { MongoClient } = require('mongodb');

async function main(){
  const uri = "mongodb+srv://cosme_tavares:123456M@cluster0.fr015va.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);



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


  const result = await client.db("spotify").collection("usuarios").find().toArray();
  console.log(result)
}

