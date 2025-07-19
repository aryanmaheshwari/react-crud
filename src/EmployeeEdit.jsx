import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EmployeeEdit = () => {
    const { id } = useParams();
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/POSTS/' + id)
        .then((e) => {
            return e.json();
        })
        .then((employee) => {
            setName(employee.name);
            setEmail(employee.email);
            setPhone(employee.phone);
        })
        .catch((err) => console.log(err.message()));
    }, [])

    const updateEmployeeRecord = (e) => {
        e.preventDefault();
        console.log({id , name , email, phone});
        const employeeData = {name, email, phone};

        fetch('http://localhost:3000/POSTS/' + id, {
            method: "PUT",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(employeeData)
        }).then(() => {
            alert("Record updated successfully!");
            navigate("/");
        }).catch((e) => {
            console.log(e.message);
        })
    }

    return (
        <div>
            <form className="container" 
                    onSubmit={updateEmployeeRecord}>
                    <div className="card">
                        <div className="card-title">
                            <h1>Edit Employee Record</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="form-group">
                                    <label>ID</label>
                                    <input type="text" className="form-control" value={id} disabled="disabled"></input>
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" value={name} onChange={(newName) => {setName(newName.target.value)}}></input>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" value={email} onChange={(newEmail) => {setEmail(newEmail.target.value)}}></input>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" value={phone} onChange={(newPhone) => {setPhone(newPhone.target.value)}}></input>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success">Save</button>
                                    <Link to="/" className="btn btn-danger">Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    );
}
export default EmployeeEdit;