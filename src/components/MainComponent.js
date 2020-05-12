import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Recipe from './RecipesComponent';
import RecipeInfo from './RecipeInfoComponent';
import {RECIPES } from '../shared/recipes';
import {REVIEWS} from '../shared/reviews';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: RECIPES,
            reviews: REVIEWS
        };
    }

    render() {

        const RecipeWithId = ({match}) => {
            return (
                <RecipeInfo 
                    recipe={this.state.recipes.filter(recipe => recipe.id === +match.params.recipeId)[0]}
                    // reviews={this.state.reviews.filter(review => review.recipeId === +match.params.recipeId)}
                />
            );
        };  

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/recipes' render={() => <Recipe recipes={this.state.recipes} />} />
                    <Route path='/recipes/:recipeId' component={RecipeWithId} />
                    <Redirect to='/recipes' render={() => <Recipe recipes={this.state.recipes} />} />
                    
                </Switch>
                <Footer/>
            </div>
        );
    };
}

export default  withRouter(Main);