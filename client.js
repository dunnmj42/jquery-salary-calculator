console.log("jS loaded");

let employees = [];

$(document).ready(handleReady);

// click handlers and initial DOM rendering 
function handleReady() {
  console.log("jQuery is loaded");

  renderToDom();
  calcTotal();

  $("#submitButton").on("click", handleSubmit);
  $("#employeeList").on("click", ".deleteButton", handleDelete);
}

// function to render to table
function renderToDom() {
  $("#employeeList").empty();

  for (let i = 0; i < employees.length; i++) {
    $("#employeeList").append(`
            <tr class="employeeRow">
             <td>${employees[i].firstName}</td>
             <td>${employees[i].lastName}</td>
             <td>${employees[i].idNumber}</td>
             <td>${employees[i].jobTitle}</td>
             <td>$${employees[i].annualSalary}</td>
             <td><button id="${i}" class="deleteButton btn btn-warning btn-sm">Delete</button></td>
             </tr>`);
  }
}

// value get and object constructor
function handleSubmit() {
  console.log("click");

  if (
    $("#firstName").val() === "" ||
    $("#lastName").val() === "" ||
    $("#idNumber").val() === "" ||
    $("#jobTitle").val() === "" ||
    $("#annualSalary").val() === ""
  ) {
    alert("Please make sure you have completed the entire form!");
  } else {
    let newEmployee = {
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      idNumber: $("#idNumber").val(),
      jobTitle: $("#jobTitle").val(),
      annualSalary: $("#annualSalary").val(),
    };

    console.log(newEmployee);
    employees.push(newEmployee);

    renderToDom(); // re-render
    clearInputs(); // clear form
    calcTotal(); // monthly cost math
  }
}

// delete button deleter
function handleDelete() {
  console.log("delete click");

  let removalTarget = this.id;

  console.log("Removal target id is:", removalTarget);

  employees.splice(removalTarget, 1);

  calcTotal();

  $(this).parent().parent().remove();
}

// monthly total math and monthly total appendation
function calcTotal() {
  let totalMonthly = 0;

  for (let employee of employees) {
    let monthlySalary = employee.annualSalary / 12;

    totalMonthly += monthlySalary;
  }

  let el = $("#totalMonthly");
  let elem = $(".appOutput");
  el.empty();
  if (totalMonthly <= 20000) {
    el.append(
      `<h2 id="totalMonthly">Total Monthly: $ ${Number.parseFloat(
        totalMonthly
      ).toFixed(2)}</h2>`
    );
    elem.css("background-color", "#e9ecef"); // standard color
  } else {
    el.append(
      `<h2 id="totalMonthly">Total Monthly: $ ${Number.parseFloat(
        totalMonthly
      ).toFixed(2)}</h2>`
    );
    elem.css("background-color", "#dc3545"); // overbudget color
  }
}

// clear input fields
function clearInputs() {
  $("#firstName").val("");
  $("#lastName").val("");
  $("#idNumber").val("");
  $("#jobTitle").val("");
  $("#annualSalary").val("");
}
