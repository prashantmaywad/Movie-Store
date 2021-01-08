import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import { useDispatch } from "react-redux";
import registerUser from "../DB/SignIn";
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
  Alert,
} from "reactstrap";

function Signin() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  const signIn = () => {
    validateParameters() && dispatch(registerUser(name, email, password));
  };
  const validateParameters = (name, email, password) => {
    if (name === "" || email === "" || password === "") {
      setError("Please fill all field");
      return false;
    }
    return true;
  };
  return (
    <div className="signin">
      <Card className="signin__card">
        <CardBody>
          <CardTitle tag="h5">Sign In </CardTitle>
          <hr />
          <Form>
            <FormGroup>
              <Label for="Name">name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                id="name"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                type="text"
                name="email"
                value={email}
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <div>
              <Button onClick={signIn} className="signin__btn" color="primary">
                Sign In
              </Button>
              <Link to="/">
                <Button className="signincancel__btn" color="danger">
                  Cancel
                </Button>
              </Link>
            </div>
          </Form>
        </CardBody>
        {error && (
          <Alert color="danger" isOpen={visible} toggle={onDismiss}>
            {error}
          </Alert>
        )}
        <CardFooter>
          Already have an account? <Link to="/login">Login In</Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Signin;
