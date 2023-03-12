import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";


const LoginForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const onHandleLogin = (event) => {
    event.preventDefault();
    console.log(formData);
    // setFormData({userName})
  };

  const onHandleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={onHandleLogin}>
      <MDBInput
        className="mb-4"
        type="email"
        id="userName"
        label="Email address" name="userName" placeholder="Username" value={formData.userName} onChange={e => onHandleChange(e)}
      />
      <MDBInput
        className="mb-4"
        type="password"
        id="password"
        label="Password" name="password" placeholder="Password" value={formData.password} onChange={e => onHandleChange(e)}
      />

      <MDBRow className="mb-4">
        <MDBCol className="d-flex justify-content-center">
          <MDBCheckbox id="form1Example3" label="Remember me" defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href="#!">Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type="submit" block>
        Sign in
      </MDBBtn>
    </form>
  );

  //   return (
  //     <Form onSubmit={onHandleLogin}>
  //       <Form.Group className="mb-3" controlId="formBasicEmail">
  //         <Form.Label>Username</Form.Label>
  //         <Form.Control type="email" name="userName" placeholder="Username" value={formData.userName} onChange={e => onHandleChange(e)}/>
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="formBasicPassword" >
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={e => onHandleChange(e)}/>
  //       </Form.Group>
  //       <Button variant="primary" type="submit">
  //         Login
  //       </Button>
  //     </Form>
  //   );
};

export default LoginForm;
