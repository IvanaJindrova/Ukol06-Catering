//Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.
//Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.
//Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

/*const justFood = (pocetLidi) => {
    const cena = pocetLidi * 200
    document.body.innerHTML += `<h2>Catering od Just Food byl objednán pro ${pocetLidi} lidí za celkovou cenu ${cena} Kč</h2>`
}

justFood(150)

const yourMama = (pocetLidi) => {
    const cena = pocetLidi * 600
    document.body.innerHTML += `<h2>Catering od Just Food byl objednán pro ${pocetLidi} lidí za celkovou cenu ${cena} Kč</h2>`
}

yourMama(150)

const flavourHaven = (pocetLidi) => {
    const cena = pocetLidi * 2000
    document.body.innerHTML += `<h2>Catering od Just Food byl objednán pro ${pocetLidi} lidí za celkovou cenu ${cena} Kč</h2>`
}

flavourHaven(150)
*/
// Druhá část úkolu
const justFood = (pocetLidi) => {
    const cena = pocetLidi * 200
    return "Just Food"
}

const yourMama = (pocetLidi) => {
    const cena = pocetLidi * 600
    return "Your Mama"
}

const flavourHaven = (pocetLidi) => {
    const cena = pocetLidi * 2000
    return "Flavour Haven"
}

const createEvent = (udalost, pocetLidi, dodavatel) => {
    const cena = pocetLidi * 2000
    document.body.innerHTML += `<h3>Na událost ${udalost}, byl objednaný dodavatel jídla ${dodavatel} pro ${pocetLidi} lidí za celkovou cenu ${cena} Kč</h3>`
}


createEvent("svatba", 250, justFood(250))