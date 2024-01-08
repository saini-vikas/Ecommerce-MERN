import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import NavbarItem from "./NavbarItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  height: "90%",
  alignSelf: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.down("md")]: {
    flexGrow: "1",
    width: "90%",
    marginRight: theme.spacing(1),
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: theme.spacing(1),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "35ch",
    },
  },
}));

export default function Navbar({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState("");
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const items = [
    { href: "/", title: "Home" },
    { href: "/products", title: "Products" },
    { href: "/products/sales", title: "Sales" },
  ];

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleSignOut = () => {
    console.log("Sign Out Pressed!");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Drawer anchor="right" open={openDrawer} onClose={handleCloseDrawer}>
        <Box role="presentation">
          <List sx={{ width: "40vw" }}>
            {items.map((item, index) => (
              <NavbarItem
                key={index}
                onClose={handleCloseDrawer}
                title={item.title}
                href={item.href}
              />
            ))}
          </List>
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              justifyContent: { sm: "space-evenly", md: "space-between" },
              marginX: { lg: 6, md: 1 },
            }}
          >
            <Box
              sx={{
                flexGrow: 2,
                justifyContent: "flex-start",
                alignitems: "center",
                display: "inline-flex",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleOpenDrawer}
                sx={{ mr: 2, display: { sm: "block", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontFamily: "Zeyada",
                  fontSize: "24px",
                  alignSelf: "center",
                }}
              >
                ShopSphere
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box
              sx={{
                flexGrow: { md: 1, lg: 2 },
                justifyContent: "flex-end",
                alignitems: "center",
                display: "inline-flex",
              }}
            >
              <Box
                sx={{
                  justifyContent: "flex-end",
                  gap: "10px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {items.map((item, index) => (
                  <NavbarItem key={index} title={item.title} href={item.href} />
                ))}
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                {user ? (
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    onAbort={handleProfileMenuOpen}
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                ) : (
                  <NavbarItem
                    onClose={handleCloseDrawer}
                    title="Sign in"
                    href="/signin"
                  />
                )}
              </Box>

              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                {user ? (
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                ) : (
                  <NavbarItem
                    onClose={handleCloseDrawer}
                    title="Sign in"
                    href="/signin"
                  />
                )}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}
