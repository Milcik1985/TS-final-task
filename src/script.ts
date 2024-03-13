const addEmployeeButton = document.getElementById(
  "add-employee"
) as HTMLButtonElement;
const formContainer = document.getElementById(
  "form-container"
) as HTMLDivElement;

addEmployeeButton.addEventListener("click", () => {
  const nameInput = document.createElement("input") as HTMLInputElement;
  nameInput.placeholder = "Employee Name";
  nameInput.type = "text";
  const safetyTrainingDate = document.createElement(
    "input"
  ) as HTMLInputElement;
  safetyTrainingDate.placeholder = "Safety Training Date";
  safetyTrainingDate.type = "date";
  formContainer.append(nameInput);
  formContainer.append(safetyTrainingDate);
});
