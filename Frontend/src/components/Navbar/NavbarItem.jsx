import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NavbarItem({ href, title, onClose }) {
  return (
    <ListItem sx={{ paddingX: 0 }}>
      <ListItemButton
        component={Link}
        onClick={onClose}
        to={href}
        underline="none"
        color="inherit"
        sx={{ borderRadius: "5px" }}
      >
        <ListItemText>{title}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default NavbarItem;
