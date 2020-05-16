import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, DropdownToggle,UncontrolledDropdown, DropdownMenu, DropdownItem, Jumbotron, 
        Button, Modal, ModalHeader, ModalBody,
        Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


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
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/All">
                                        All
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Breakfast">
                                    Breakfast
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Main dishes">
                                    Main dishes                          </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/Desserts">
                                    Desserts
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            </Collapse>
                            <span className="navbar-text ml-auto mr-5">
                                <Form>
                                    <div className="input-group">
                                        <Input type="text" className="form-control search-input" placeholder="Search ..." />
                                        <Button color="success" type="button" className="btn btn-white search-button"><i class="fa fa-search fa-2x"></i></Button>
                                    </div>
                                </Form>
                            </span>
                            <span className="navbar-text ml-auto">
                                <Button  outline color="success" onClick={this.toggleModal}>
                                    <i className="fa fa-book fa-lg" /> My Cookbook
                                </Button>
                            </span>
   
                    </div>
                </Navbar>
  

            

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="modal-custom" toggle={this.toggleModal}>Sign in to your Cookbook</ModalHeader>
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
                            <Button className="modal-custom" type="submit" value="submit">Sign in</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;