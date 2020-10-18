const morpionCarres = document.querySelectorAll(".carre")   // recupere tous les carres
const replayGame = document.getElementById('replayGame')

const logueurCaseJeux = 3

let joueur = true   // permet de savoir si c'est le joueur 1 ou le joueur 2
let win = false

// affiche le message de win
const winGame = (win) => {
    const modal = document.getElementById('myModal')
    const phraseRes = document.getElementById('phraseWinner')

    modal.style.display = 'block'

    if (win) {
        phraseRes.textContent = 'Les croix ont gagnés'
    }
    else {
        phraseRes.textContent = 'Les ronds ont gagnés'
    }
}

// verifie horizontalement
const verifHorizontal = caseClick => {
    let tabVerifs = []

    for (let i = 1; i <= logueurCaseJeux; i++) {
        tabVerifs.push(caseClick.getAttribute('id')[0] + i)
    }

    tabVerifs = tabVerifs
        .map( tabVerif => document.getElementById(tabVerif).textContent.toLowerCase() )
        .filter(tabVerif => tabVerif === 'x' || tabVerif === 'o')
    
    if (tabVerifs[0] === tabVerifs[1] && tabVerifs[0] === tabVerifs[2]) return true

    return false
}

// vérifie verticalement
const verifVertical = caseClick => {
    let tabVerifs = []
    const verticalCaseLettres = ['A', 'B', 'C']

    for (const verticalCaseLettre of verticalCaseLettres) {
        tabVerifs.push(verticalCaseLettre + caseClick.getAttribute('id')[1])
    }

    tabVerifs = tabVerifs
        .map( tabVerif => document.getElementById(tabVerif).textContent.toLowerCase() )
        .filter(tabVerif => tabVerif === 'x' || tabVerif === 'o')

    if (tabVerifs[0] === tabVerifs[1] && tabVerifs[0] === tabVerifs[2]) return true

    return false
}

// vérifie en diagonal
const verifDiagonal = () => {
    const tabVerifs1 = [ 
        document.getElementById('A1').textContent.toLowerCase(), 
        document.getElementById('B2').textContent.toLowerCase(), 
        document.getElementById('C3').textContent.toLowerCase() 
    ].filter(verif1 => verif1 !== '')

    const tabVerifs2 = [
        document.getElementById('C1').textContent.toLowerCase(),
        document.getElementById('B2').textContent.toLowerCase(), 
        document.getElementById('A3').textContent.toLowerCase()
    ].filter(verif2 => verif2 !== '')

    if (tabVerifs1.length === logueurCaseJeux || tabVerifs2.length === logueurCaseJeux) {
        if (tabVerifs1[0] === tabVerifs1[1] && tabVerifs1[0] === tabVerifs1[2]) return true
        if (tabVerifs2[0] === tabVerifs2[1] && tabVerifs2[0] === tabVerifs2[2]) return true
    }

    return false
}


morpionCarres.forEach(morpionCarre => {
    morpionCarre.addEventListener('click', () => {
        if (morpionCarre.textContent === '') {
            if (joueur) {
                morpionCarre.textContent = 'x'
                joueur = false
            } else {
                morpionCarre.textContent = 'o'
                joueur = true
            }
        }

        if (win === false) win = verifHorizontal(morpionCarre)
        if (win === false) win = verifVertical(morpionCarre)
        if (win === false) win = verifDiagonal(morpionCarre)

        if (win) winGame(win)
    })
});

// pour rejoueur
replayGame.addEventListener('click', () => document.location.reload(true)  )  // refresh la page