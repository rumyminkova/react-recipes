import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { StarRating } from "@thumbtack/thumbprint-react";
import CarouselFeature from "./CarouselComponent";

function RenderRecipeItem({ recipe }) {
  return (
    <Card top width="100%" className="border-0 card-shadow mt-3">
      <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none" }}>
        <CardImg width="100%" top src={recipe.image} alt={recipe.name} />
        <CardBody className="text-center">
          <CardText>
            <StarRating rating={recipe.rating} size="medium" />
          </CardText>
          <CardTitle className="card-name mt-3">{recipe.name}</CardTitle>
        </CardBody>
        <div className="overlay">{recipe.description}</div>
      </Link>
    </Card>
  );
}

function Recipes(props) {
  const recipe = props.recipes.map(recipe => {
    return (
      <div key={recipe.id} className="col-sm-5 col-lg-3 m-1">
        <RenderRecipeItem recipe={recipe} />
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row justify-content-center my-5">
        <div className="col-md-8 col-lg-7 mx-auto">
          <CarouselFeature />
          <hr />
        </div>
      </div>
      <div className="row my-5 justify-content-center bg-light">{recipe}</div>
    </div>
  );
}

export default Recipes;
