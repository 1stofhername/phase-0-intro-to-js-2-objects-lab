const employee = {
    "name" : "Snoopy",
    "streetAddress" : "400 Peanuts Ln",
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newObj = {...employee};
    newObj [key] = value;
    return newObj; 
};

function destructivelyUpdateEmployeeWithKeyAndValue (object, key, value) {
    employee [key] = value;
    return employee;
};

function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee[key]};
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}