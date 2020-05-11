import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { StarRating } from '@thumbtack/thumbprint-react';

function RenderRecipeItem({recipe}) {
    return (
        <Card className="border-0 card-shadow mt-3">
            <Link to={`/recipe/${recipe.id}`}>
                <CardImg top src={recipe.image} alt={recipe.name} height="250"/>
                <CardBody className="text-center">
                    <CardSubtitle>
                        <StarRating rating={recipe.rating} size="medium" />
                    </CardSubtitle>
                    <CardTitle className="mt-3">{recipe.name}</CardTitle>
                 </CardBody>
            </Link>
        </Card>
    );
}


function Recipe(props) {

    const recipe = props.recipes.map(recipe => {
        return (
            <div key={recipe.id} className="col m-1">
                <RenderRecipeItem recipe={recipe}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row justify-content-center">
                {recipe}
            </div>
        </div>
    );
}

export default Recipe;