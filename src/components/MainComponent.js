import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { RECIPES } from '../shared/recipes';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: RECIPES
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home 
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                    p
                />
            );
        };

        const RecipeWithId = ({match}) => {
            return (
                <RecipeInfo 
                    recipe={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        };  

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer/>
            </div>
        );
    };
}

export default Main;