import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, DropdownToggle,UncontrolledDropdown, DropdownMenu, DropdownItem, Jumbotron, 
        Button, Modal, ModalHeader, ModalBody,
        Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { RecipesComponent } from './RecipesComponent';
import { RECIPES } from '../shared/recipes';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
          };
  
          this.toggleNav = this.toggleNav.bind(this);
          this.toggleModal = this.toggleModal.bind(this);
          this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row p-1">
                            <div className="col align-center">
                                <h1 className="display-3">Recipes</h1>
                                <h3>Healthy recipes for everyone!</h3>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar light sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="nav-fill text-center">
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                    All
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        Breakfast
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                         Main
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" onClick={RenderCat}>
                                        Desserts
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            OPTION1
                                        </DropdownItem>
                                        <DropdownItem>
                                            OPTION2 
                                        </DropdownItem>
                                        <DropdownItem>
                                             OPTION3   
                                        </DropdownItem>
                                        <DropdownItem>
                                            OPTION4
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                         </Collapse>
                        <div className="container">
                            <div className="coltext-center">
                                <Form>
                                    <div className="input-group">
                                        <Input type="text" className="form-control search-input" placeholder="Search ..." />
                                        <Button type="button" className="btn btn-white search-button"><i class="fa fa-search text-success fa-2x"></i></Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                        <div className="col-3 offset-9 m-0 text-right">
                            <Button onClick={this.toggleModal} className="btn btn-success">
                                <i className="fa fa-book fa-lg" /> My Cookbook
                                </Button>
                        </div>
                    </div>
                </Navbar>

            

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Sign in</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Sign in</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;