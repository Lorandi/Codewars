//Welcome!

function greet(language) {
    switch(language) {        
        case 'czech' : return 'Vitejte'
        case 'danish' : return 'Velkomst'
        case 'dutch' : return 'Welkom'
        case 'estonian' : return 'Tere tulemast'
        case 'finnish' : return 'Tervetuloa'
        case 'flemish' : return 'Welgekomen'
        case 'french' : return 'Bienvenue'
        case 'german' : return 'Willkommen'
        case 'irish' : return 'Failte'
        case 'italian' : return 'Benvenuto'
        case 'latvian' : return 'Gaidits'
        case 'lithuanian' : return 'Laukiamas'
        case 'polish' : return 'Witamy'
        case 'spanish' : return 'Bienvenido'
        case 'swedish' : return 'Valkommen'
        case 'welsh' : return 'Croeso'
        default: return 'Welcome'
    }
  }

//   function greet(language) {
//     var GreetingsDB = {
//       english: 'Welcome',
//       czech: 'Vitejte',
//       danish: 'Velkomst',
//       dutch: 'Welkom',
//       estonian: 'Tere tulemast',
//       finnish: 'Tervetuloa',
//       flemish: 'Welgekomen',
//       french: 'Bienvenue',
//       german: 'Willkommen',
//       irish: 'Failte',
//       italian: 'Benvenuto',
//       latvian: 'Gaidits',
//       lithuanian: 'Laukiamas',
//       polish: 'Witamy',
//       spanish: 'Bienvenido',
//       swedish: 'Valkommen',
//       welsh: 'Croeso'
//     }, 
//     defaultLanguage = 'english';
//     return GreetingsDB[language] || GreetingsDB[defaultLanguage];
//   }

console.log(greet('english'));
console.log(greet('dutch'));
console.log(greet('IP_ADDRESS_INVALID'));
