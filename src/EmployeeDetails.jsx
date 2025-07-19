import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmployeeDetails = () => {
    const { id } = useParams();
    const [employeeData, setEmployeeData] = useState({});

    useEffect(() => {
        fetch('http://localhost:3000/POSTS/' + id)
            .then((result) => {
                return result.json();
            })
            .then((e) => { setEmployeeData(e); })
            .catch((e) => {
                console.log(e.message())
            })
    }, []);

    return (
        <div className="card">
            <div className="card-title">
                <h1>Employee Details</h1>
            </div>
            <div className="card-body">
                {
                    employeeData &&
                    <div>
                        <p>Name: {employeeData.name}</p>
                        <p>Email: {employeeData.email}</p>
                        <p>Phone: {employeeData.phone}</p>
                        <Link className="btn btn-danger" to="/">Back to Employee Listing</Link>
                    </div>
                }
            </div>
        </div>)
}
export default EmployeeDetails;