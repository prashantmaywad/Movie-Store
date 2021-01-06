import React, { useState } from "react";
import "./Header.css";
import axios from "axios";
import {
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function Header(props) {
  const [modal, setModal] = useState(false);
  const { className } = props;
  const toggle = () => setModal(!modal);
  const createMovie = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/movies/", { name: {} })
      .then((res) => {})
      .catch((ex) => {
        console.log(ex);
      });
  };

  return (
    <div className="header">
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create Movie</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="Name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Movie Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Genres</Label>
              <Input type="select" name="selectMulti" id="exampleSelectMulti">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="Image URL">Image URL</Label>
              <Input type="text" name="text" placeholder="Image" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={createMovie}>
            Create
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <h1 className="header__logo">Movies</h1>
      <Button
        onClick={toggle}
        className="header__createMovie_btn"
        color="primary"
      >
        Create Movie
      </Button>
    </div>
  );
}

export default Header;
