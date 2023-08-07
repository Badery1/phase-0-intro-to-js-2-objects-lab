const employee = {
    name: "billy",
    streetAddress: "blingbloom",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = employee;
    newObj[key] = value;
    return newObj;
}
function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObj = employee;
    delete newObj[key];
    return newObj;
}
