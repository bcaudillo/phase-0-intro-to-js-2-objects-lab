// Write your solution in this file!
let employee ={name: 'Sam',
streetAddress: '11 Broadway'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let employeeU = {...employee};
    employeeU[key]=value;
    return employeeU
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee
}

function deleteFromEmployeeByKey(employee,key){
    delete employee.key
    return (Object.keys(employee))
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}