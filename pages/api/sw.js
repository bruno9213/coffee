// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function cenas(request, response){
  //const dynamicDate = new Date();

  const monsters = await fetch("https://swstats.info/api/monsters/?format=json");
  const monstersJSON = await monsters.json();
  const m = monstersJSON.results;

  let names = "";
  for (let i in m) {
    names += m[i].base_monster.name+", ";
  }

  response.json({
    //date: dynamicDate.toGMTString(),
    monsters: names
  })

}

export default cenas;