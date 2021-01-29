// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sqlite from 'sqlite'

async function cenas(request, response){
  //const dynamicDate = new Date();

  const monsters = await fetch("https://swstats.info/api/monsters/?format=json");
  const monstersJSON = await monsters.json();
  const m = monstersJSON.results;

  const db = await sqlite.open('./mydb.sqlite');
  const counter = await db.all('SELECT * FROM Counter');


  let names = "";
  for (let i in m) {
    names += m[i].base_monster.name+", ";
  }

  response.json({
    //date: dynamicDate.toGMTString(),
    monsters: names,
    counter: counter.num
  })

}

export default cenas;