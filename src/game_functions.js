function dealDamage(){
    let health = document.getElementById("health").value
    let damageValue = document.getElementById("DamageP1").value
    health.value -= damageValue
}

function healDamage(){
    let health = document.getElementById("health").value
    let healValue = document.getElementById("HealP1").value
    health.value += healValue
}