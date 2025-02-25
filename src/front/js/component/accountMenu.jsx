import * as React from "react";
import jwt_decode from "jwt-decode";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <div className="userIconText" onClick={handleClick}>
          <i className="fas fa-user"></i>
          {localStorage.getItem("logged") ? (
            <p className="infoIcon">Perfil</p>
          ) : (
            <p className="infoIcon">Iniciar Sesión</p>
          )}
        </div>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {localStorage.getItem("logged") ? (
          <div>
            <MenuItem>
              <ListItemIcon>
                <Avatar />
              </ListItemIcon>
              <Link to={`/profile/${localStorage.getItem("user")}`}>
                <div className="menu">Perfil</div>
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Configuración
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <Link to="/" onClick={() => localStorage.clear()}>
                <div className="menu">Salir</div>
              </Link>
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem>
              <Link to="/login">
                <Avatar />
              </Link>
              <Link to="/login">
                <div className="menu">Iniciar Sesión</div>
              </Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              <Link to="/register">
                <div className="menu">Crear Cuenta</div>
              </Link>
            </MenuItem>
          </div>
        )}
      </Menu>
    </React.Fragment>
  );
}
