function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter a task.");
    return;
  }

  const list = document.getElementById("taskList");

  const li = document.createElement("li");
  li.innerHTML = `
    ${value}
    <button onclick="this.parentElement.remove()">Remove</button>
  `;

  list.appendChild(li);
  input.value = ""; // Clear input
}
