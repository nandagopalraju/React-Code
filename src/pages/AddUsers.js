import axios from 'axios';
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import UserConfirmation from './UserConfirmation';


function AddUsers(){

    
    const userName = useRef("");
    const userEmail = useRef("");
    const userPassword = useRef("");
    const userNumber = useRef("");
    const userDepartment = useRef("");
    const userEmployeeId = useRef("");
    const userRole = useRef("");
    const userLicense = useRef("");
    const userGender = useRef("");


    

    const navigate = useNavigate();

    
   

    const Url= "https://localhost:3000/confirm-user?email=" 

    function addUserHandler(){
        var payload = {
            name: userName.current.value ,
            email: userEmail.current.value,
            password: userPassword.current.value,
            number: userNumber.current.value,
            gender: userGender.current.value,
            department: userDepartment.current.value,
            employeeId: userEmployeeId.current.value,
            licenseImage: userLicense.current.value,
            role: userRole.current.value
        }
       
        const confirmUrl=Url+payload.email
        axios.post("https://localhost:7061/api/Signup/Signup", payload)
        .then((response) =>{
          navigate("/")

        })
    }



    return <>
    <legend>Add A New User</legend>
   
    <Form>
      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" ref={userName} />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formUserEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" ref={userEmail} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={userPassword} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserNumber">
        <Form.Label>Number</Form.Label>
        <Form.Control type="number" placeholder="Number" ref={userNumber}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserDepartment">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder="Department" ref={userDepartment}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserEmployeeId">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control type="text" placeholder="Employee ID" ref={userEmployeeId}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserRole">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="Role" ref={userRole}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserLicenseImage">
        <Form.Label>License</Form.Label>
        <Form.Control type="text" placeholder="lisceence image" ref={userLicense} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Gender" ref={userGender} />
      </Form.Group>
      
      {/* <Form.Group>
        <Form.Label>Gender</Form.Label>
      {['checkbox', 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Others"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>  

      ))}
      </Form.Group> */}




      <Button variant="primary" type="submit" onClick={addUserHandler }>
        Submit
      </Button>
    </Form></>
}
export default AddUsers;