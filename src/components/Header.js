import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
	DropdownItem } from 'reactstrap';
	
	import logo from '../assets/images/logo.png';
 

export default class Header extends Component {
    constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false,
			isOpen: false
		};

		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		})
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		})
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	handleLogin(event) {
		this.toggleModal();
		event.preventDefault();
	}
  render() {
    return (
     
        <Navbar color="light" light expand="md" sticky={'top'} style={{ minHeight: 70 }}>
          <NavbarBrand href="/" className="ml-5"><img src={logo} height="57.6px" width="134.4px" alt="Jan-Elaaj-Logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-4" navbar>
              <NavItem>
                <NavLink href="#home" className="nav-link" style={{marginLeft: 15,
	marginRight: 15}} >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#services" className="nav-link" style={{marginLeft: 15,
	marginRight: 15}}>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about" className="nav-link" style={{marginLeft: 15,
	marginRight: 15}} >About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={navItem}>
                  For Providers
                </DropdownToggle>
                <DropdownMenu right>
								<DropdownItem> Option 1 </DropdownItem>
								<DropdownItem> Option 2 </DropdownItem>
								<DropdownItem divider />
								<DropdownItem> Reset </DropdownItem>
							</DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
							<NavLink to="/login" className="nav-link" style={{...navItem, ...loginButton}}>
							Login
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/components/" className="nav-link" style={navItem}>
								Signup
							</NavLink>
						</NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      
    );
  }
}
const navItem = {
	marginLeft: 15,
	marginRight: 15
};

const loginButton = {
	backgroundColor: '#25a8e3',
	borderRadius: 20,
	paddingLeft: 22,
	paddingRight: 22,
	color: 'white',
	fontSize: 15,
	fontWeight: 'bold',
	cursor: 'pointer'
};