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
  console.log(`Gold: ${gold}, Gold per click: ${goldPerClick}, Gold per second: ${goldPerSecond}`);
  goldCountDisplay.textContent = `Gold: ${gold}`;
  goldPerSecondDisplay.textContent = goldPerSecond;
  
  // Update button text and disable based on current gold
  clickUpgradeButton.textContent = `Upgrade Click (+1 Gold per Click) - Cost: ${clickUpgradeCost} Gold`;
  workerButton.textContent = `Hire Worker (+1 Gold per second) - Cost: ${workerCost} Gold`;

  // Disable buttons if not enough gold
  clickUpgradeButton.disabled = gold < clickUpgradeCost;
  workerButton.disabled = gold < workerCost;
}

// Handle the click button
clickButton.addEventListener('click', function() {
  console.log("Click button pressed");
  gold += goldPerClick;
  updateGoldDisplay();
});

// Handle the click upgrade button
clickUpgradeButton.addEventListener('click', function() {
  console.log("Click Upgrade button pressed");
  if (gold >= clickUpgradeCost) {
    console.log(`Upgrading click! Cost: ${clickUpgradeCost}`);
    gold -= clickUpgradeCost; // Deduct the cost
    goldPerClick += 1; // Increase gold per click
    clickUpgradeCost = Math.floor(clickUpgradeCost * 1.5); // Increase cost for the next upgrade
    updateGoldDisplay(); // Update the display after purchase
  } else {
    console.log("Not enough gold for upgrade");
  }
});

// Handle the worker button
workerButton.addEventListener('click', function() {
  console.log("Hire Worker button pressed");
  if (gold >= workerCost) {
    console.log(`Hiring worker! Cost: ${workerCost}`);
    gold -= workerCost; // Deduct the cost for hiring a worker
    workers += 1; // Increase the worker count
    goldPerSecond += 1; // Increase passive gold income
    workerCost = Math.floor(workerCost * 1.5); // Increase cost for the next worker
    updateGoldDisplay(); // Update the display after purchasing the worker
  } else {
    console.log("Not enough gold for worker");
  }
});

// Function to update passive income from workers
function updatePassiveIncome() {
  gold += goldPerSecond; // Add gold based on the workers' income
  updateGoldDisplay(); // Update display after passive income is added
}

// Start the worker interval for passive income
workerInterval = setInterval(updatePassiveIncome, 1000); // Every 1 second

// Initialize the display
updateGoldDisplay();

