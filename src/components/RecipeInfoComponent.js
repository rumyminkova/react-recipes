import React, { useState } from "react";
import {
  Card,
  CardImg,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

function RenderIngredients({ ingredients }) {
  if (ingredients) {
    return (
      <div className="col-md-5 m-1">
        <ul>
          {ingredients.map(ingredient => {
            return (
              <div key={ingredient.id}>
                <li>{ingredient.ingredientName}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  return <div></div>;
}
function RenderDirections({ directions }) {
  if (directions) {
    return (
      <div className="col-md-5 m-1">
        <ol>
          {directions.map(direction => {
            return (
              <div key={direction.id}>
                <li>{direction.text}</li>
              </div>
            );
          })}
        </ol>
      </div>
    );
  }

  return <div></div>;
}
function RenderReviews({ reviews }) {
  if (reviews) {
    return (
      <div className="col-md-5 m-1">
          {reviews.map(review => {
            return (
              <div className="mt-4" key={review.id}>
                <p>{review.text}</p>
                <p>{review.author}</p>
                {review.date}
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
    <div className="col-md-5 m-1">
      <Card className="card">
        <CardImg top src={recipe.image} alt={recipe.name} />
        <div className="overlay">{recipe.description}</div>
      </Card>
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
      <React.Fragment>
        <RenderRecipe recipe={props.recipe} />
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
                  <h1 className="black">Ingredients</h1>
                  <RenderIngredients ingredients={props.ingredients} />

                  <h1 className="black">Directions</h1>
                  <RenderDirections directions={props.directions} />
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <RenderReviews reviews={props.reviews} />
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
  return <div />;
}

export default RecipeInfo;
