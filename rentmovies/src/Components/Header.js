import React, { useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_MOVIE } from "./../redux/actionTypes";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
import { Link } from "react-router-dom";

function Header(props) {
  var Genre = useSelector((state) => state.Genres);
  var dispatch = useDispatch();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [modal, setModal] = useState(false);
  const { className } = props;
  const toggle = () => setModal(!modal);
  const createMovie = (e) => {
    e.preventDefault();
    if (name === "") setError("Name is Empty");
    if (genre === "") setError("Genre is Empty");
    if (image === "") setError("Image is Empty");
    console.log(error);
    if (error === "") {
      toggle();
      dispatch({
        type: CREATE_MOVIE,
        Movie: {
          name,
          image,
          description,
          genre,
        },
      });
    }
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
                onChange={(e) => setName(e.target.value)}
                placeholder="Movie Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Genres</Label>
              <Input
                type="select"
                onChange={(e) => setGenre(e.target.value)}
                name="selectMulti"
                id="exampleSelectMulti"
              >
                <option></option>
                {Genre &&
                  Genre.length > 0 &&
                  Genre.map((item, index) => {
                    return <option>{item.name}</option>;
                  })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="Image URL">Image URL</Label>
              <Input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                name="text"
                placeholder="Image"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input
                type="textarea"
                onChange={(e) => setDescription(e.target.value)}
                name="text"
                id="exampleText"
              />
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
      <Link to="/login">
        <AccountCircleIcon
          fontSize="large"
          className="login__icon"
        ></AccountCircleIcon>
      </Link>
    </div>
  );
}

export default Header;
