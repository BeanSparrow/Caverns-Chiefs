function dealDamage(){
    const health = document.getElementById("health")
    const damageValue = parseInt(document.getElementById("DamageP1").value)
    const newHealth = health.value - damageValue
    health.setAttribute("value", newHealth)
}


function healDamage(){
    const health = document.getElementById("health")
    const healValue = parseInt(document.getElementById("HealP1").value)
    const newHealth = health.value + healValue
    health.setAttribute("value", newHealth)
}

function playerMaxHealth(playerNum){
    const playerMaxHealths = [240, 160, 160, 120, 160,100, 200, 160]
    return playerMaxHealths[playerNum -1]
}

function playerHealthBarID(playerNum){
    const playerHealthBarIDs = ["Player1Health", "Player2Health", "Player3Health", "Player4Health", "Player5Health", "Player6Health", "Player7Health", "Player8Health"]
    return playerHealthBarIDs[playerNum - 1]
}