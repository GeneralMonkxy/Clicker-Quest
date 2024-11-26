let gold = 0;
let goldPerClick = 1;
let goldPerSecond = 0;
let clickUpgradeCost = 10;
let workerCost = 50;
let workers = 0;
let workerInterval;

// Get DOM elements
const goldCountDisplay = document.getElementById('goldCount');
const clickButton = document.getElementById('clickButton');
const clickUpgradeButton = document.getElementById('clickUpgradeButton');
const workerButton = document.getElementById('workerButton');
const goldPerSecondDisplay = document.getElementById('goldPerSecond');

// Function to update the gold display
function updateGoldDisplay() {
  goldCountDisplay.textContent = `Gold: ${gold}`;
  goldPerSecondDisplay.textContent = goldPerSecond;
  
  // Update button text and disable based on current gold
  clickUpgradeButton.textContent = `Upgrade Click (+1 Gold per Click) - Cost: ${clickUpgradeCost} Gold`;
  workerButton.textContent = `Hire Worker (+1 Gold per second) - Cost: ${workerCost} Gold`;

  clickUpgradeButton.disabled = gold < clickUpgradeCost;
  workerButton.disabled = gold < workerCost;
}

// Handle the click button
clickButton.addEventListener('click', function() {
  gold += goldPerClick;
  updateGoldDisplay();
});

// Handle the click upgrade button
clickUpgradeButton.addEventListener('click', function() {
  if (gold >= clickUpgradeCost) {
    gold -= clickUpgradeCost;
    goldPerClick += 1;
    clickUpgradeCost = Math.floor(clickUpgradeCost * 1.5); // Increase cost for next upgrade
    updateGoldDisplay();
  }
});

// Handle the worker button
workerButton.addEventListener('click', function() {
  if (gold >= workerCost) {
    gold -= workerCost;
    workers += 1;
    goldPerSecond += 1;
    workerCost = Math.floor(workerCost * 1.5); // Increase cost for next worker
    updateGoldDisplay();
  }
});

// Function to update passive income from workers
function updatePassiveIncome() {
  gold += goldPerSecond;
  updateGoldDisplay();
}

// Start the worker interval for passive income
workerInterval = setInterval(updatePassiveIncome, 1000);

// Initialize the display
updateGoldDisplay();

