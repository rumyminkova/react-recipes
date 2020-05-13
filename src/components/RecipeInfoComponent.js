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

function RenderRecipe({ recipe }) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={recipe.image} alt={recipe.name} />
        <div className="overlay">{recipe.description}</div>
      </Card>
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
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div>
                  <h1 className="black">Ingredients</h1>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <h1 className="black">Directions</h1>
                  <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ol>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Nav>
    </div>
  );
}

function RecipeInfo(props) {
  // if (props.isLoading) {
  //     return (
  //         <div className="container">
  //             <div className="row">
  //                 <Loading />
  //             </div>
  //         </div>
  //     );
  // }
  // if (props.errMess) {
  //     return (
  //         <div className="container">
  //             <div className="row">
  //                 <div className="col">
  //                     <h4>{props.errMess}</h4>
  //                 </div>
  //             </div>
  //         </div>
  //     );
  // }

  if (props.recipe) {
    return (
      <div className="container">
        <div className="row">
          <RenderRecipe recipe={props.recipe} />
          {/* <RenderComments 
                        comments={props.comments}
                        addComment={props.addComment}
                        campsiteId={props.campsite.id}
                    /> */}
        </div>
      </div>
    );
  }
  return <div />;
}

export default RecipeInfo;
