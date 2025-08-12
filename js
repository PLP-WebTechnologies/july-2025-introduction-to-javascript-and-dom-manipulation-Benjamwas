<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JS Assignment</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>JavaScript Assignment Demo</h1>
  </header>

  <main>
    <section>
      <h2>Variable Declarations & Conditionals</h2>
      <p id="condition-result">Condition result will appear here.</p>
    </section>

    <section>
      <h2>Custom Functions</h2>
      <button onclick="greetUser('Benjamin')">Greet Me</button>
      <button onclick="calculateSum(5, 10)">Calculate 5 + 10</button>
    </section>

    <section>
      <h2>Loops</h2>
      <p id="loop-output"></p>
    </section>

    <section>
      <h2>DOM Interactions</h2>
      <input type="text" id="nameInput" placeholder="Type your name" />
      <button id="changeTextBtn">Change Heading</button>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>


body {
  font-family: Arial, sans-serif;
  margin: 20px;
  line-height: 1.6;
}

header {
  background: #4cafef;
  color: white;
  padding: 10px;
  text-align: center;
}

section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

input {
  padding: 5px;
}

// =========================
// PART 1: VARIABLES & CONDITIONALS
// =========================
let bugCount = 3;
let statusMessage = bugCount > 0 ? "Bugs exist!" : "No bugs found!";
document.getElementById("condition-result").textContent = statusMessage;

// =========================
// PART 2: CUSTOM FUNCTIONS
// =========================
function greetUser(name) {
  alert(`Hello, ${name}! Welcome to the JavaScript Demo.`);
}

function calculateSum(a, b) {
  let sum = a + b;
  alert(`The sum is: ${sum}`);
}

// =========================
// PART 3: LOOPS
// =========================
let output = "";
for (let i = 1; i <= 5; i++) {
  output += `Bug ${i} logged<br>`;
}
let counter = 0;
while (counter < 3) {
  output += `Checking bug #${counter + 1}...<br>`;
  counter++;
}
document.getElementById("loop-output").innerHTML = output;

// =========================
// PART 4: DOM INTERACTIONS
// =========================
document.getElementById("changeTextBtn").addEventListener("click", () => {
  let name = document.getElementById("nameInput").value;
  document.querySelector("h1").textContent = `Hello, ${name || "User"}!`;
});

