import React from "react";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  MenuItem,
  Menu,
  Avatar,
} from "@mui/material";
import useStyles from "./Navbar.style";

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarge);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar>
            <Grid className={classes.grow}>
              <Button className={[classes.mainLogo]}>
                <Avatar
                  src="https://uploads.codesandbox.io/uploads/user/3e41a372-fc65-4387-bca0-70a050914db8/VIR9-logo.jpg"
                  className={classes.avatar}
                />
              </Button>
            </Grid>
            <Button
              color="inherit"
              onClick={handleMenu}
              className={classes.buttonFontSize}
            >
              Discover
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
            <Button color="inherit" className={classes.buttonFontSize}>
              Profile
            </Button>
            <Button
              color="inherit"
              className={[classes.buttonFontSize, classes.loginButton]}
            >
              Login
            </Button>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navbar;
