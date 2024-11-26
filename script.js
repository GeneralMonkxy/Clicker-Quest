let gold = 0;
let goldPerClick = 1;
let upgradeCost = 10;

// Get elements
const goldCountDisplay = document.getElementById('goldCount');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');

// Update the displayed gold
function updateGoldDisplay() {
  goldCountDisplay.textContent = `Gold: ${gold}`;
  upgradeButton.textContent = `Upgrade (${upgradeCost} Gold)`;
  if (gold >= upgradeCost) {
    upgradeButton.disabled = false;
  } else {
    upgradeButton.disabled = true;
  }
}

// Handle click button
clickButton.addEventListener('click', function() {
  gold += goldPerClick;
  updateGoldDisplay();
});

// Handle upgrade button
upgradeButton.addEventListener('click', function() {
  if (gold >= upgradeCost) {
    gold -= upgradeCost;
    goldPerClick += 1;
    upgradeCost = Math.floor(upgradeCost * 1.5); // Increase cost for next upgrade
    updateGoldDisplay();
  }
});

// Initialize display
updateGoldDisplay();
