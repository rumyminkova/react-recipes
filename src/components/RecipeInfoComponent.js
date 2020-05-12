import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, 
  Button, Modal, ModalHeader, ModalBody,
    Label} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderRecipe({recipe}) {

    return( 
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={recipe.image} alt={recipe.name} />
                <CardBody>
                    <CardText>{recipe.name}</CardText>
                    <CardText>{recipe.description}</CardText>
                </CardBody>
            </Card>
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