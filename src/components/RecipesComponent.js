import React from 'react';
import { Card, CardImg, CardBody, Breadcrumb, BreadcrumbItem,
    CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { StarRating } from '@thumbtack/thumbprint-react';
import CarouselFeature from './CarouselComponent'

function RenderRecipeItem({recipe}) {
    return (
        <Card top width="100%" className="border-0 card-shadow mt-3">
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none' }}>
                <CardImg width="100%" top src={recipe.image} alt={recipe.name}/>
                <CardBody className="text-center">
                    <CardText>
                        <StarRating rating={recipe.rating} size="medium" />
                    </CardText>
                    <CardTitle className="card-name mt-3">{recipe.name}</CardTitle>
                 </CardBody>
            </Link>
        </Card>
    );
}


function Recipes(props) {

    const recipe = props.recipes.map(recipe => {
        return (
            <div key={recipe.id} className="col-sm-5 col-lg-3 m-1">
                <RenderRecipeItem recipe={recipe}/>
            </div>
        );
    });

    return (
        <React.Fragment>
            <CarouselFeature/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/recipes">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Recipes</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Recipes</h2>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {recipe}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Recipes;