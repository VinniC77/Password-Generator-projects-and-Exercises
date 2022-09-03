let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

let stageEL = document.getElementById('stage');
let fightButton = document.getElementById('fightButton');

fightButton.addEventListener('click', () => {
    let player1 = fighters[Math.floor(Math.random() * fighters.length)];
    let player2 = fighters[Math.floor(Math.random() * fighters.length)];

    stageEL.textContent = `${player1} VS ${player2}`;
})