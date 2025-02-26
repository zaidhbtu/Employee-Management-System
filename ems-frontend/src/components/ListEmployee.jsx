import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployee = () => {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        getAllEmployees();
    }, []);

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    function addNewEmployee() {
        navigate("/add-employee");
    }

    function updateEmployee(id){
        navigate(`/edit-employee/${id}`);
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.log(error);
        })
    }
  return (
    <div className='container mt-3'>
      
      <h2 className='text-center mb-2'>List of Employee</h2>
      <button className='btn btn-primary mb-2 ' onClick={addNewEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            {
                employees.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                            <button className='btn btn-danger ml-2' onClick={() => removeEmployee(employee.id)}
                                style={{marginLeft: '10px'}}
                            >Delete</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployee
