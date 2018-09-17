import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
          counter: 0,
          anchorEl: null,

        }
        
    }
    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = () => {
      this.setState({ anchorEl: null });
    };
  render() {
    const open = Boolean(this.state.anchorEl);

    return (
      <div>
      <AppBar position="static" style={{ backgroundColor: '#C51162' }}>
        <Toolbar>
          <Typography className="flex" variant="title" color="inherit">
            QuizApp
          </Typography>
          {this.props.user && (

          <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
          )}
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.props.logOut}> Log Out</MenuItem>
              </Menu>
        </Toolbar>
        </AppBar>
       
    </div>
  );
}
}
export default NavBar;
