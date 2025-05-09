document.addEventListener("DOMContentLoaded", () => {
  const dateInputs = document.querySelectorAll("input[type='date']");
  const today = new Date().toISOString().split("T")[0];

  dateInputs.forEach((dateInput) => {
    dateInput.value = today;
  });
});

function increment(inputId) {
  const input = document.getElementById(inputId);
  input.value = parseInt(input.value || 0) + 1;
}

function decrement(inputId) {
  inputId.value = Math.max(0, parseInt(inputId.value || 0) - 1);
  if (inputId.value == 0) {
    inputId.value = 0;
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("plus-button")) {
    const input = e.target.previousElementSibling;
    if (input && input.type === "number") {
      input.value = parseInt(input.value || 0) + 1;
    }
  }

  if (e.target.classList.contains("minus-button")) {
    const input = e.target.parentElement.querySelector("input[type='number']");
    if (input) {
      input.value = Math.max(0, parseInt(input.value || 0) - 1);
    }
  }
});

dropdown = document.querySelector(".dropdown");
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownButton.addEventListener("mouseenter", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("show");
});

// Close the dropdown if clicked outside
dropdown.addEventListener("mouseleave", () => {
  dropdownMenu.classList.remove("show");
});

document.getElementById("confirmYes1").addEventListener("click", () => {
  document.getElementById("customConfirm1").style.display = "none";
});

document.getElementById("customConfirm1").addEventListener("click", () => {
  document.getElementById("customConfirm1").style.display = "none";
});

//submit button & inputFields check
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("submit")) {
    e.preventDefault(); // Prevent default form submission

    // Find the closest form to the clicked submit button
    const form = e.target.closest("form");
    if (!form) return;

    // Get all input fields within the form
    const inputFields = Array.from(
      form.querySelectorAll(
        "input[type='number'], input[type='text'], input[type='date']"
      )
    );

    // Check if any input field is empty
    const isAnyEmpty = inputFields.some((input) => input.value.trim() === "");

    // Calculate the sum of all numeric fields (excluding specific ones if needed)
    const fieldsToSum = inputFields.filter(
      (input) =>
        input.name !== "trailerNumber" &&
        input.name !== "date" &&
        input.name !== "storeNumber"
    );
    const sum = fieldsToSum.reduce(
      (acc, input) => acc + (parseInt(input.value) || 0),
      0
    );

    // Handle validation and modal display
    if (isAnyEmpty) {
      document.getElementById("missedQuestion").style.display = "flex";
    } else if (sum === 0) {
      document.getElementById("customConfirm1").style.display = "flex";
    } else {
      document.getElementById("customConfirm2").style.display = "flex";
    }
  }
});

document.getElementById("confirmYes2").addEventListener("click", () => {
  const form = document.querySelector("form");
  document.getElementById("customConfirm2").style.display = "none";
  // Log form data to the console
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  form.submit();
});

document.getElementById("confirmNo2").addEventListener("click", () => {
  document.getElementById("customConfirm2").style.display = "none";
});

//missed questions modal
document.getElementById("missed").addEventListener("click", () => {
  document.getElementById("missedQuestion").style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".side-navbar a");
  const views = document.querySelectorAll(".view");

  navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior

      // Hide all views
      views.forEach((view) => {
        view.classList.add("hidden");
      });

      // Show the target view
      const targetId = button.getAttribute("href").substring(1); // Get the target ID
      const targetView = document.getElementById(targetId);
      if (targetView) {
        targetView.classList.remove("hidden");
      }
    });
  });
});
