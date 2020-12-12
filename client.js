console.log('jS loaded');

let employees = [];

$(document).ready(handleReady);

function handleReady() {
    console.log('jQuery is loaded');

    renderToDom();
    calcTotal();

    $('#submitButton').on('click', handleSubmit);
    $('#employeeList').on('click', '.deleteButton', handleDelete);
}

function renderToDom() {
    $('#employeeList').empty();

    for (let i = 0; i < employees.length; i++) {
        $('#employeeList').append(`
            <tr class="employeeRow">
             <td>${employees[i].firstName}</td>
             <td>${employees[i].lastName}</td>
             <td>${employees[i].idNumber}</td>
             <td>${employees[i].jobTitle}</td>
             <td>${employees[i].annualSalary}</td>
             <td><button id="${i}" class="deleteButton">Delete</button></td>
             </tr>`);
             
    }
}

function handleSubmit() {

    console.log('click');

    if ($('#firstName').val() === "" || 
        $('#lastName').val() === "" || 
        $('#idNumber').val() === "" || 
        $('#jobTitle').val() === "" || 
        $('#annualSalary').val() === "") {

        alert('Please make sure you have completed the entire form!')
    
    } else {

    let newEmployee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    }

    console.log(newEmployee);
    employees.push(newEmployee);

    renderToDom();
    clearInputs();
    calcTotal();

    }
}

function handleDelete() {
    console.log('delete click');

    let removalTarget = this.id

    console.log(removalTarget);

    employees.splice(removalTarget, 1);

    calcTotal();

    $(this).parent().parent().remove();

}

function calcTotal() {

    let totalMonthly = 0;

    for (let employee of employees) {
        let monthlySalary = (employee.annualSalary / 12);

        totalMonthly += monthlySalary
    }

    let el = $('#totalMonthly')
    el.empty();
    if (totalMonthly <= 20000) {
        el.append(`<h2 id="totalMonthly">Total Monthly: $ ${totalMonthly}</h2>`)
    } else {
        el.append(`<h2 id="totalMonthly" class="overBudget">Total Monthly: $ ${totalMonthly}</h2>`)
    }
    

}

function clearInputs() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}