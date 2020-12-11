console.log('jS loaded');

let employees = [];

$(document).ready(handleReady);

function handleReady() {
    console.log('jQuery is loaded');

    renderToDom();

    $('#submitButton').on('click', handleSubmit);
    $('#employeeList').on('click', '.deleteButton', handleDelete);
}

function renderToDom() {
    $('#employeeList').empty();

    for (let employee of employees) {
        $('#employeeList').append(`
            <tr class="employeeRow">
             <td>${employee.firstName}</td>
             <td>${employee.lastName}</td>
             <td>${employee.idNumber}</td>
             <td>${employee.jobTitle}</td>
             <td>${employee.annualSalary}</td>
             <td><button class="deleteButton">Delete</button></td>
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
    }
}

function handleDelete() {
    console.log('delete click');
    
    $(this).parent().parent().remove();

}

function clearInputs() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}