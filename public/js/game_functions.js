// Global
playerCount = 9
inventory = []
//End Global

function dealDamage(){
    const playerNumString = document.getElementById("playerSelect").value
    if (playerNumString !== "ALL"){
        const playerNum = parseInt(playerNumString)
        const healthBarId = playerHealthBarID(playerNum) 
        const health = document.getElementById(healthBarId)
        const currentHealth = parseInt(health.value)
        const damageValue = parseInt(document.getElementById("damageValue").value)
        const newHealth = currentHealth - damageValue
        health.setAttribute("value", newHealth)
    }
    else {
        for (i = 1; i < playerCount; i++){
            const healthBarIdItr = playerHealthBarID(i) 
            const healthItr = document.getElementById(healthBarIdItr)
            const currentHealthItr = parseInt(healthItr.value)
            const damageValueItr = parseInt(document.getElementById("damageValue").value)
            const newHealthItr = currentHealthItr - damageValueItr
            healthItr.setAttribute("value", newHealthItr)
        }
    }
}


function healDamage(){
    const playerNumString = document.getElementById("playerSelect").value
    if (playerNumString !== "ALL"){
        const playerNum = parseInt(playerNumString)
        const healthBarId = playerHealthBarID(playerNum) 
        const health = document.getElementById(healthBarId)
        const currentHealth = parseInt(health.value)
        const healValue = parseInt(document.getElementById("healValue").value)
        const newHealth = currentHealth + healValue
        const maxHealth = playerMaxHealth(i)
            if (newHealth >= maxHealth){
                health.setAttribute("value", maxHealth) 
            }
            else{
                health.setAttribute("value", newHealth)
            }
    }
    else {
        for (i = 1; i < playerCount; i++){
            const healthBarIdItr = playerHealthBarID(i) 
            const healthItr = document.getElementById(healthBarIdItr)
            const currentHealthItr = parseInt(healthItr.value)
            const healValueItr = parseInt(document.getElementById("healValue").value)
            const newHealthItr = currentHealthItr + healValueItr
            const maxHealthItr = playerMaxHealth(i)
            if (newHealthItr >= maxHealthItr){
                healthItr.setAttribute("value", maxHealthItr) 
            }
            else{
                healthItr.setAttribute("value", newHealthItr)
            }
        }
    }
}

function playerMaxHealth(playerNum){
    const playerMaxHealths = [240, 160, 160, 120, 160,100, 200, 160]
    return playerMaxHealths[playerNum -1]
}

function playerHealthBarID(playerNum){
    const playerHealthBarIDs = ["p1Health", "p2Health", "p3Health", "p4Health", "p5Health", "p6Health", "p7Health", "p8Health"]
    return playerHealthBarIDs[playerNum - 1]
}

function addGold() {
    const currentGold = parseInt(document.getElementById("gold").textContent)
    const addGoldValue = parseInt(document.getElementById("GoldAmount").value)
    const newGold = currentGold + addGoldValue
    document.getElementById("gold").innerHTML = newGold.toString()
}

function subtractGold() {
    const currentGold = parseInt(document.getElementById("gold").textContent)
    const removeGoldValue = parseInt(document.getElementById("GoldAmount").value)
    const newGold = currentGold - removeGoldValue
    document.getElementById("gold").innerHTML = newGold.toString()
}

function inventoryDropdownRefresh() {
    let select = document.getElementById("removeInventory")
	var selectParentNode = select.parentNode;
	var newSelectObj = select.cloneNode(false); // Make a shallow copy
	selectParentNode.replaceChild(newSelectObj, select);
    for (var i = 0; i < inventory.length; i++) {
        var optn = inventory[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = (i + 1);
        newSelectObj.appendChild(el);
    }
}

function updateInventory(){
    inventoryString = ""
    for (i=0; i < inventory.length; i++){
        inventoryString += "- "
        inventoryString += inventory[i] + " "
        if ((i % 2)-1 == 0){
            inventoryString += "<br/>"
        }
    }
    document.getElementById("inventoryList").innerHTML = inventoryString
    inventoryDropdownRefresh()
}

function addInventory() {
    const newItem = document.getElementById("itemName").value
    inventory.push(newItem)
    updateInventory()
}

function removeInventory() {
    const removeItem = document.getElementById("removeInventory").value
    inventory.splice((removeItem - 1),1)
    updateInventory()
}