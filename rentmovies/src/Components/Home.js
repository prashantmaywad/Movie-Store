import React, { useEffect } from "react";
import "./Home.css";
import axios from "axios";

import Genres from "./Genres";
import Movies from "./Movies";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { LOAD_GENRES, LOAD_MOVIES } from "../redux/actionTypes";

function Home() {
  var dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/genres/")
      .then((res) => {
        dispatch({
          type: LOAD_GENRES,
          Genre: res.data,
        });
      })
      .catch((ex) => console.log(ex));
    axios
      .get("http://localhost:5000/api/movies/")
      .then((res) => {
        dispatch({
          type: LOAD_MOVIES,
          Movies: res.data,
        });
      })
      .catch((ex) => console.log(ex));
  }, [dispatch]);

  return (
    <Container fluid className="home">
      <Row>
        <Col xs="4" className="home__left">
          <Genres />
        </Col>
        <Col xs="8" className="home__rigth">
          <Movies />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
