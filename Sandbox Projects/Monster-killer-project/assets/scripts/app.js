const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 15;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';


const enteredValue = prompt('Maximum life for you and the monster.', '100');

let battleLog = [];
let chosenMaxLife = parseInt(enteredValue);

if (isNaN (chosenMaxLife) || chosenMaxLife <= 0 || chosenMaxLife > 100) {
    chosenMaxLife = 100;
    alert('Sorry, you must choose valid Max Life Value. Automatically set to: 100');
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
    let logEntry;
    if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
        event: event,
        value: value,
        target = 'MONSTER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
        };
        
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (event === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (event === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: event,
            value: value,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    }
    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth)

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('Bonus life saved you!');
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth)
        reset();
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lose!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayerHealth)
        reset();
    }
    else if (currentPlayerHealth < 0 && currentMonsterHealth < 0) {
        alert('You have a draw!');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'DRAW',
            currentMonsterHealth,
            currentPlayerHealth)
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else{
        maxDamage = STRONG_ATTACK_VALUE;
    }
    endRound();
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster();
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}

function printLogHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('clicl', printLogHandler);
