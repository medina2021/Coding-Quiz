function displayScores () {
    const allScores = JSON.parse(localStorage.getItem('allScores')) || [];

    allScores.sort(function (a,b) {
        return b.score - a.score;
    });

    allScores.forEach(function (score) {
        
        const scoreEL = document.createElement('li');
        scoreEL.textContent = score.initials + '-'+score.score

        const scoreBoard = document.querySelector('#allScores');
        scoreBoard.appendChild(scoreEL);

    });
}
function clearScores() {
    localStorage.removeItem('allScores');
    window.location.reload();
}

document.querySelector('#clear').onclick= clearScores;

displayScores();