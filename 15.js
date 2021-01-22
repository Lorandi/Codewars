//Super Duper Easy

function problem(x){
    return Number.isFinite(x) ? x*50 + 6: "Error"

    //return typeof x == 'string' ? 'Error' : (x * 50 + 6);
    //return typeof x === "number" ? x * 50 + 6 : "Error";
  }

  console.log(problem(1));  
  console.log(problem(5));
  console.log(problem("Olá"));