import React from "react";
import { useSelector } from "react-redux";
import "./Movies.css";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  CardImg,
} from "reactstrap";

function Movies() {
  var Movies = useSelector((state) => state.Movies);
  return (
    <div className="movies">
      {Movies.map(({ name, description, image, genre, id }, index) => {
        return (
          <Card className="movie" key={index}>
            <CardBody>
              <CardImg className="cardImage" src={image}></CardImg>
              <CardTitle tag="h5">{name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Genre : {genre}
              </CardSubtitle>
              <CardText>{description}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default Movies;
