// Global
playerCount = 9
inventory = []
//End Global

//Event Listner
window.onload=function(){
    document.getElementById('dealDamage').addEventListener('click', function () {
        document.querySelector('#damageText.animatedText').classList.remove('animation');
        setTimeout(function(){
            document.querySelector('#damageText.animatedText').classList.add('animation')
        },0);
      })
    document.getElementById('healDamage').addEventListener('click', function () {
        document.querySelector('#healText.animatedText').classList.remove('animation');
        setTimeout(function(){
            document.querySelector('#healText.animatedText').classList.add('animation')
        },0);
      });
  }
//End Event Listner

// Deal Damage to Individual or All (on Click)
function dealDamage(){
    const playerNumString = document.getElementById("playerSelect").value
    const damageValue = parseInt(document.getElementById("damageValue").value)
    if (playerNumString !== "ALL"){
        const playerNum = parseInt(playerNumString) 
        const healthBarId = playerHealthBarID(playerNum) 
        const health = document.getElementById(healthBarId)
        const currentHealth = parseInt(health.value)
        const newHealth = currentHealth - damageValue
        health.setAttribute("value", newHealth)
        document.getElementById("damageText").innerHTML = ""
        document.getElementById("healText").innerHTML = ""
        document.getElementById("damageText").innerHTML = "Player " + playerNumString + " loses " + damageValue + " health!"
    }
    else {

        for (i = 1; i < playerCount; i++){
            const healthBarIdItr = playerHealthBarID(i) 
            const healthItr = document.getElementById(healthBarIdItr)
            const currentHealthItr = parseInt(healthItr.value)
            const damageValueItr = parseInt(document.getElementById("damageValue").value)
            const newHealthItr = currentHealthItr - damageValue
            healthItr.setAttribute("value", newHealthItr)
        }
        document.getElementById("damageText").innerHTML = ""
        document.getElementById("healText").innerHTML = ""
        document.getElementById("damageText").innerHTML = "Everyone loses " + damageValue + " health!"
    }
}

//Heal Damage to Individual or All (on Click)
function healDamage(){
    const playerNumString = document.getElementById("playerSelect").value
    const healValue = parseInt(document.getElementById("healValue").value)
    if (playerNumString !== "ALL"){
        const playerNum = parseInt(playerNumString)
        const healthBarId = playerHealthBarID(playerNum) 
        const health = document.getElementById(healthBarId)
        const currentHealth = parseInt(health.value)
        const newHealth = currentHealth + healValue
        const maxHealth = playerMaxHealth(playerNum)
        document.getElementById("damageText").innerHTML = ""
        document.getElementById("healText").innerHTML = ""
            if (newHealth >= maxHealth){
                health.setAttribute("value", maxHealth)
                document.getElementById("healText").innerHTML = "Player " + playerNumString + " is back to full health!" 
            }
            else{
                health.setAttribute("value", newHealth)
                document.getElementById("healText").innerHTML = "Player " + playerNumString + " gains " + healValue + " health!"
            }
    }
    else {
        for (i = 1; i < playerCount; i++){
            const healthBarIdItr = playerHealthBarID(i) 
            const healthItr = document.getElementById(healthBarIdItr)
            const currentHealthItr = parseInt(healthItr.value)
            const newHealthItr = currentHealthItr + healValue
            const maxHealthItr = playerMaxHealth(i)
            if (newHealthItr >= maxHealthItr){
                healthItr.setAttribute("value", maxHealthItr) 
            }
            else{
                healthItr.setAttribute("value", newHealthItr)
            }
        }
        document.getElementById("damageText").innerHTML = ""
        document.getElementById("healText").innerHTML = ""
        document.getElementById("healText").innerHTML = "Everyone gains " + healValue + " health!"
    }
}

//Returns Max Health of Player referenced
function playerMaxHealth(playerNum){
    const playerMaxHealths = [240, 160, 160, 120, 160,100, 200, 160]
    return playerMaxHealths[playerNum -1]
}

//Returns Health Bar HTML id of Player referenced
function playerHealthBarID(playerNum){
    const playerHealthBarIDs = ["p1Health", "p2Health", "p3Health", "p4Health", "p5Health", "p6Health", "p7Health", "p8Health"]
    return playerHealthBarIDs[playerNum - 1]
}

//Adds Gold to Group Gold Count
function addGold() {
    const currentGold = parseInt(document.getElementById("gold").textContent)
    const addGoldValue = parseInt(document.getElementById("GoldAmount").value)
    const newGold = currentGold + addGoldValue
    document.getElementById("gold").innerHTML = newGold.toString()
}

//Removes Gold from Group Gold Count
function subtractGold() {
    const currentGold = parseInt(document.getElementById("gold").textContent)
    const removeGoldValue = parseInt(document.getElementById("GoldAmount").value)
    const newGold = currentGold - removeGoldValue
    document.getElementById("gold").innerHTML = newGold.toString()
}

//Updates the HTML Select Form for Inventory Content
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

//Updates the Inventory list and Select form
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

//Adds input item to inventory list
function addInventory() {
    const newItem = document.getElementById("itemName").value
    inventory.push(newItem)
    updateInventory()
}

//Removes selected item from inventory list
function removeInventory() {
    const removeItem = document.getElementById("removeInventory").value
    inventory.splice((removeItem - 1),1)
    updateInventory()
}