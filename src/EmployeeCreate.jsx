import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeCreate = () => {

    const[id, setId] = useState('');
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');

    const navigate = useNavigate();

    const createEmployeeRecord = (e) => {
        e.preventDefault();
        console.log({id , name , email, phone});
        const employeeData = {name, email, phone};
        fetch('http://localhost:3000/POSTS', {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(employeeData)
        }).then(() => {
            alert("Record saved successfully!");
            navigate("/");
        }).catch((e) => {
            console.log(e.message);
        })
    }

    return(
        <div>
            <div className="row">
                <form className="container" 
                    onSubmit={createEmployeeRecord}>
                    <div className="card">
                        <div className="card-title">
                            <h1>Create Employee Record</h1>
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
        </div>
    )
}
export default EmployeeCreate;