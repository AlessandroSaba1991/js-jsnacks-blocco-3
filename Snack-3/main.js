/* 
Snack 3:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'pulcino', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cavallo', famiglia: 'equinidi', classe: 'mammiferi' },
    { nome: 'mosca', famiglia: 'insettinidi', classe: 'insetti' },
    { nome: 'zanzara', famiglia: 'insettinidi', classe: 'insetti' },
    { nome: 'zebra', famiglia: 'equinidi', classe: 'mammiferi' },
]

const mammiferi = animali.filter(mammifero => mammifero.classe === 'mammiferi')
console.log(mammiferi);

stamp_list('.cards', mammiferi)


/**
 * ###stampa una lista sul nodo della dom creato
 * @param {string} dom_element nodo della dom da creare e dove si vuole stampare la lista
 * @param {string} array lista da stampare
 */
function stamp_list(dom_element, array) {
    const element_cards = document.querySelector(dom_element)
    array.forEach(element => {
        const markup = mark_up(element, array)
        element_cards.insertAdjacentHTML('beforeend', markup)
    });
}

/**
 * ### Genera il markup 
 * @param {string} element array element
 * @param {string} array array
 * @returns markup
 */
function mark_up(element, array) {
    const markup = `
              <div class="card" style="width: calc(100% / ${array.length} - 2rem);background-color:green")>
                <h2>${element.nome}</h2>
                <p>${element.famiglia}</p>
                <p>${element.classe}</p>
              </div>
              `
    return markup
}