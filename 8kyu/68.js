//Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump
 


 console.log(zeroFuel(50, 25, 2))//true);
 console.log(zeroFuel(100, 50, 1))//false);