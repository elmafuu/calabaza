let score = 0;
let level = 1;
let timer = 20;
let timerId;
let total_score = 0;
timer_p = 20;

alert("dale a la calabaza unas " + timer_p)
 

function updateScore() {
    document.getElementById('score').textContent = `Puntos: ${score}`;
    document.getElementById('total_score').textContent = `Puntos totales: ${total_score}`;
}


function updateTimer() {
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = `Tiempo: ${timer}s`;
}

function createPumpkin() {
    const pumpkin = document.createElement('div');
    pumpkin.classList.add('pumpkin');

    // Obtener el tamaño del área de juego
    const gameArea = document.getElementById('gameArea');
    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;

    // Posición aleatoria dentro del área de juego
    const x = Math.random() * (areaWidth - 50); // 50 es el ancho de la calabaza
    const y = Math.random() * (areaHeight - 50); // 50 es la altura de la calabaza
    pumpkin.style.left = `${x}px`;
    pumpkin.style.top = `${y}px`;

    // Añadir el evento de clic
    pumpkin.addEventListener('click', () => {
        score++;
        total_score++;
        updateScore();
        pumpkin.remove(); // Elimina la calabaza al hacer clic
        createPumpkin(); // Crea una nueva calabaza
    });

    document.getElementById('gameArea').appendChild(pumpkin);
}

function startTimer() {
    timerId = setInterval(() => {
        timer--;
        updateTimer();
        if (timer <= 0) {
            clearInterval(timerId);
            endGame();
        }
    }, 1000);
}

function endGame() {
    alert(`¡Tiempo terminado! Puntaje final: ${score}`);
    alert("¡Tiempo terminado! Puntaje total: "+ total_score);
    if (score >= timer_p) {
        level++;
        if (level <= 3) {
            alert(`¡Pasas al nivel ${level}!`);
            resetGame();
            
        } else {
            alert('¡Felicidades! Has completado todos los niveles.');
        }
    } else {
        alert('No has alcanzado la puntuación necesaria. Intenta de nuevo.');
       resetGame() ;
       total_score = 0;
       document.getElementById('total_score').textContent = `Puntos totales: ${total_score}`;
    }
}

function resetGame() {
    score = 0;
    timer = 20 + (level - 1) * 10;
    timer_p = 20 + (level - 1) * 10; // Aumenta el tiempo por nivel
    document.getElementById('gameArea').innerHTML = ''; // Limpia el área de juego
    updateScore();
    updateTimer();
    createPumpkin(); // Crea la primera calabaza
    startTimer(); // Reinicia el temporizador
    
}
function restar_game()
{
    updateScore();
    updateTimer();
    createPumpkin(); // Crea la primera calabaza
    startTimer(); // Reinicia el temporizador   
}
// Inicia el juego
resetGame();
