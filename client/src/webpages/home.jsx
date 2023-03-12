import React from "react";
import LoginForm from "../components/authentication/login/login";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

const Home = () => {
  return (
    <MDBContainer>
      <div className="mt-3" >
        <h1>Login </h1>
      </div>
      <MDBRow className="mb-3 mt-5">
        <MDBCol md="6" offsetMd="3">
          <MDBCard>
            <MDBCardBody>
            <LoginForm />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
