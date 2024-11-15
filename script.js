let count = 0;
const addUserButton = document.getElementById("addUserButton");
const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const employeeInfo = document.querySelector(".employeeInfo");
const successMessage = document.querySelector(".successMessage");

addUserButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const age = ageInput.value.trim();

  // Validate that all fields are filled
  if (name === "" || profession === "" || age === "") {
    employeeInfo.style.display = "block";
    successMessage.style.display = "none";
    return;
  }

  // Hide error message and show success message
  employeeInfo.style.display = "none";
  successMessage.style.display = "block";
  count = count + 1;

  // Create the employee box
  const employeeBox = document.createElement("div");
  employeeBox.classList.add("employeeBox");
  employeeBox.innerHTML = `
          <div class="employeeDetails">
            <span>${count}.</span>
            <span>Name: ${name}</span>
            <span>Profession: ${profession}</span>
            <span>Age: ${age}</span>
          </div>
          <button class="deleteBtn">Delete user</button>
        `;

  // Append the employee box to the employee list
  const employees = document.getElementById("employees");
  employees.appendChild(employeeBox);

  // Add the delete functionality
  const deleteBtn = employeeBox.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    employeeBox.remove();
  });

  // Clear the input fields after adding the user
  nameInput.value = "";
  professionInput.value = "";
  ageInput.value = "";
});
