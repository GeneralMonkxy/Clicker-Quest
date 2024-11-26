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
  clickUpgradeButton.textContent = `Upgrade Cl

