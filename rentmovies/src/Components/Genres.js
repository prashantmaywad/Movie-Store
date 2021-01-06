import React, { useState } from "react";
import { CREATE_GENRE, DELETE_GENRE } from "../redux/actionTypes";
import "./Genres.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  Form,
  Input,
  ListGroup,
  ListGroupItem,
  Container,
  InputGroup,
} from "reactstrap";

function Genres(props) {
  var genre = useSelector((state) => state.Genres);
  var dispatch = useDispatch();
  const [newGenre, setnewGenre] = useState("");
  const [genreError, setGenreError] = useState(null);
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  const creteGenre = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_GENRE,
      Genre: {
        name: newGenre,
      },
    });
    setnewGenre("");
  };

  const deleteGenre = (e) => {
    e.preventDefault();
    dispatch({
      type: DELETE_GENRE,
      Genre: {
        name: e.target.value,
      },
    });
  };
  return (
    <Container className="genres">
      <Form onSubmit={creteGenre}>
        <InputGroup>
          <Input
            type="text"
            placeholder="Genre Name"
            onChange={(e) => {
              setnewGenre(e.target.value);
            }}
            value={newGenre}
            name="genre"
          ></Input>
          <Button color="primary" type="submit">
            Create Genre
          </Button>
        </InputGroup>

        {genreError && (
          <Alert color="danger" isOpen={visible} toggle={onDismiss}>
            {genreError}
          </Alert>
        )}
      </Form>

      <ListGroup className="listgroup__genre">
        {genre &&
          genre.length > 0 &&
          genre.map((item, index) => {
            return (
              <ListGroupItem className="genres__name" key={index}>
                {item.name}
                <Button
                  color="danger"
                  value={item.name}
                  onClick={deleteGenre}
                  className="delete__genre"
                >
                  X
                </Button>
              </ListGroupItem>
            );
          })}
      </ListGroup>
    </Container>
  );
}

// const mapStoreToProps = (state) => {
//   return {
//     Genre: state.Genres,
//   };
// };
// const mapDispacherToProps = (dispatch) => {
//   return {
//     creteGenre: () => dispatch(),
//   };
// };

export default Genres;
