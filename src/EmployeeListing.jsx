import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeListing = () => {

    const[employeeData, setEmployeeData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/POSTS').then((result) => {
            return result.json();
        }).then((e) => {setEmployeeData(e);}).catch((e) => {
            console.log(e.message())
        })
    }, []);

    const loadDetails = (id) => {
        navigate("/POSTS/details/" + id);
    }

    const loadEdit = (id) => {
        navigate("/POSTS/edit/" + id);
    }

    const removeRecord = (id) => {
        if(window.confirm("Do you want to remove this record?")) {
            fetch('http://localhost:3000/POSTS/' + id, {
                method: "DELETE",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify(employeeData)
            }).then(() => {
                alert("Record deleted successfully!");
                window.location.reload();
            }).catch((e) => {
                console.log(e.message);
            })
        }
    }

    return(
    <div className="container">
        <div className="card">
            <div className="card-title">
                <h1>Employee List</h1>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeeData && 
                            employeeData.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                    <td>
                                        <a className="btn btn-secondary" onClick={() => loadEdit(employee.id)}>Edit</a>
                                        <a className="btn btn-danger" onClick={() => removeRecord(employee.id)}>Delete</a>
                                        <a className="btn btn-primary" onClick={() => loadDetails(employee.id)}>Details</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <Link className="btn btn-success" to="POSTS/create">Add new</Link>
            </div>
        </div>
    </div>
    )
}
export default EmployeeListing;