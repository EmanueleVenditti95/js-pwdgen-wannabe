// - chiedere all'utente il suo nome:
//   - dichiarare una variabile
let name;
//   - assegnare alla variabile il valore restituito da un prompt
name = prompt('Quale è il tuo nome?');
console.log(name);

// - chiedere all'utente il suo cognome:
//   - dichiarare una variabile
let lastname;
//   - assegnare alla variabile il valore restituito da un prompt
lastname = prompt('Quale è il tuo cognome?');
console.log(lastname);

// - chiedere all'utente il suo colore preferito:
//   - dichiarare una variabile
let color;
//   - assegnare alla variabile il valore restituito da un prompt
color = prompt('Quale è il tuo colore preferito?');
console.log(color);

// - dichiarare una variabile con il numero 21
const number = 21;

// - concatenare il nome dell'utente,il cognome,il colore preferito e il numero 21 con la frase "La tua password è":
//   - dichiarare una variabile con la frase "La tua password è"
let yourPasswordIs='La tua password è'

//   - dichiarare una variabile per concatenare nome,cognome e colore e il numero 21
let password= name + lastname + color + number;
console.log(password)

//   - dichiarare una variabile dove concatenare "La tua password è" con "nome,cognome,colore,21"
let passwordMessage= yourPasswordIs + ' ' + password;

// - stampare il messaggio finale dentro un h1:
//   - inserire nell'html un tag h1 
//   - recuperare con js gli elementi del dom
const messageDomElement = document.getElementById('message')

//   - modificare l'innerHTML del h1 con il valore degli elementi presi dal dom
messageDomElement.innerHTML = passwordMessage