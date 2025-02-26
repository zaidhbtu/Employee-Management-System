import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

//Get The Employee Data From Rest Api 
export const listEmployees = () => axios.get(REST_API_BASE_URL);

//Add New Employee To The Rest Api
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

//Update Employee Data on the Rest Api
export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee );

//Delete Employee Data from the Rest Api
export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);



