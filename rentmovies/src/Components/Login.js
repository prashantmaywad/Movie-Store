import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
} from "reactstrap";

function Login() {
  return (
    <div className="login">
      <Card className="login__card">
        <CardBody>
          <CardTitle tag="h5">Login </CardTitle>
          <hr />
          <Form>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="text" name="email" id="email" placeholder="email" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Password</Label>
              <Input type="password" name="" />
            </FormGroup>
          </Form>
          <div>
            <Button className="login__btn" color="primary">
              Login
            </Button>
            <Link to="/">
              {" "}
              <Button className="logincancel__btn" color="danger">
                Cancel
              </Button>
            </Link>
          </div>
        </CardBody>
        <CardFooter>
          Don't have Account? <Link to="/signin">Sign In</Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
