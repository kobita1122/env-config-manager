const configs = document.getElementById("configs");

function add() {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>API_KEY</td>
    <td>********</td>
    <td>Production</td>
  `;
  configs.appendChild(row);
}
