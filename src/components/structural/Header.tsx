import * as React from "react";
import HeaderBar from "./HeaderBar";

export interface HeaderProps {
  logo: string;
  title: string;
  navLinks: any;
  contact?: any;
}

interface State {
  menu: boolean;
}

class Header extends React.Component<HeaderProps, State> {
  state: State = {
    menu: false,
  };

  toggleMenu = () => {
    this.setState({menu: !this.state.menu});
  }

  handleClose = () => {
    this.setState({menu: false});
  }

  render() {
    const { navLinks, logo, title, contact } = this.props;

    return (
      <HeaderBar
        navLinks={navLinks}
        title={title}
        logo={logo}
        contact={contact}
        toggleMenu={this.toggleMenu}
        handleClose={this.handleClose}
        open={this.state.menu}
      />
    );
  }
}

export default Header;
