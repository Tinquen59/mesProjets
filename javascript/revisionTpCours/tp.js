const populations = [
    { id: 0, name: "Alan", jobs : ['dev junior', 'dev fullstack'], password : "tyeedsa00" },
    { id: 1, name: "Albert", jobs : [ 'doctor'], password : "tyeidii00" },
    { id: 2, name: "Jhon" , jobs : ['mathematician', 'doctor'], password : "xyuuuoi00"},
    { id: 3, name: "Brice", jobs : ['dev fullstack'] , password : "xytoiab00"},
    { id: 4, name: "Alexendra", jobs : ['dentist'],  password : "aaaoiab33" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" , jobs : ['lead dev', 'dev fullstack']},
    { id: 7, name: "Dallas" , jobs : [ 'dev fullstack']},
    { id: 8, name: "Dennis", jobs : ['integrator', 'dev fullstack'] },
    { id: 9, name: "Edgar", jobs : ['mathematician'] },
    { id: 10, name: "Erika", jobs : ['computer scientist', 'mathematician'] },
    { id: 11, name: "Isaac", jobs : ['doctor'], password : "Axgkj22Kl" },
    { id: 12, name: "Ian", password : "Axgkj00Kl" },
];

    // 1. Comptez tous les docteurs
const selectJob = 'doctor'
const numberJobSelect = populations
        .filter(population => population.jobs !== undefined && population.jobs.includes(selectJob)).length

// console.log( { [selectJob]: numberJobSelect } )




    // 2. Récupérez les noms des développeurs fullstack.
const jobSelect = 'dev fullstack'
const nameAndJobs = populations
        .filter(population => population.jobs !== undefined && population.jobs.includes(jobSelect))
        .map(population => ({ name: population.name, jobs: population.jobs }) )

// console.log(nameAndJobs)




    // 3. Récupérez les noms des personnes qui n'ont jamais travaillés.
const neverWork = populations
    .filter(population => population.jobs === undefined)
    .map(population => population.name)

// console.log(neverWork)




    // 4. Etudiez les mots de passe de chaque personne, comptez leurs occurences pour chaque lettre distincte.


const occurencesPhrases = (phrase) => {
    const tamponLettres = [ ...phrase ]
    const lettres = new Set(tamponLettres)

    const occurences = []

    for (const lettre of lettres) {
        const lenOccurences = tamponLettres.filter(tamponLettre => tamponLettre === lettre).length

        occurences.push( {lettre, lenOccurences} )
    }

    return occurences
}

// console.log( occurencesPhrases('Mississpi') )

// console.log( populations.filter(population => population.password !== undefined).map(population => population.test = 'rg' ) )

for (const population of populations) {
    if (population.password !== undefined) population.occurencesPassword = occurencesPhrases(population.password)
}

// console.log( populations )