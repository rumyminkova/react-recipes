import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardImgOverlay,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import { StarRating } from '@thumbtack/thumbprint-react';

function RenderIngredients({ ingredients }) {
  if (ingredients) {
    return (
        <ul>
          {ingredients.map(ingredient => {
            return (
              <div key={ingredient.id}>
                <li>{ingredient.ingredientName}</li>
              </div>
            );
          })}
        </ul>
    );
  }

  return <div></div>;
}
function RenderDirections({ directions }) {
  if (directions) {
    return (
       <ol>
          {directions.map(direction => {
            return (
              <div key={direction.id}>
                <li>{direction.text}</li>
              </div>
            );
          })}
       </ol>
      );
  }

  return <div></div>;
}

function RenderReviews({ reviews }) {
  if (reviews) {
    return (
      <div>
          {reviews.map(review => {
            return (
              <div className="mt-4" key={review.id}>
                <StarRating rating={review.rating} size="small" />
                <p className="text-justify">{review.text}</p>
                <br />
                <p className="text-right font-italic">{review.author}, <small>
                                               {new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "2-digit"
                                }).format(new Date(Date.parse(review.date)))}</small>
                </p>
                <hr />
              </div>
            );
          })}
      </div>
    );
  }

  return <div></div>;
}

function RenderRecipe({ recipe }) {
  return (
    <div className="row m-2 justify-content-center">
      <div className="col col-sm-10 col-md-8">
        <Card className="card">
          <CardImg top src={recipe.image} alt={recipe.name} />
              <CardBody className="text-left bg-success">
                <StarRating rating={recipe.rating} size="small" />
                <CardTitle><h3 className="text-warning"> {recipe.name}</h3></CardTitle>
              </CardBody>
          {/* <div className="overlay">{recipe.description}</div> */}
        </Card>
        </div>
        <div className="row mt-5 mx-1">
            <div className="col-11 text-left">
              <h3 className="black">Description</h3>
              <h5>{recipe.description}</h5>
            </div>
        </div>
    </div>
   );
}

function RecipeInfo(props) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (props.recipe) {
    return (
        <div className="container-fluid">
          <RenderRecipe recipe={props.recipe} />
          <div className="row my-5 mx-1">
            <div className="col-11 text-left">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Recipe
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Reviews
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <div>
                        <h2 className="black mt-3">Ingredients</h2>
                        <RenderIngredients ingredients={props.ingredients} />

                        <h2 className="black">Directions</h2>
                        <RenderDirections directions={props.directions} />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <RenderReviews reviews={props.reviews} />
                  </Col>
                </Row>
                </TabPane>
              </TabContent>
          </div>
        </div>
      </div>
    );
  }
  return <div />;
}

export default RecipeInfo;
