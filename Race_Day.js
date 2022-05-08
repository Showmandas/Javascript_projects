let raceNumber = Math.floor(Math.random() * 1000);
var runner=true;
var runnerAge=18;

if(runnerAge>18){
  if(runner==true){
    console.log(raceNumber+=1000)
  }
}

if(runnerAge>18 && raceNumber>=1000){
  console.log(`they will race at 9:30 am and their racenumber is ${raceNumber}`)
}

else if(runnerAge>18 && raceNumber<1000){
    console.log(`they will race at 11:00 am and their racenumber is ${raceNumber}`)
}

else if(runnerAge<18){
    console.log(`they will race at 12:30 am and their racenumber is ${raceNumber}`)

}
else{
  console.log(`see the registration desk.`)
}