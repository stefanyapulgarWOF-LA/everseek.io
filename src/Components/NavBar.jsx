import { React, useState, useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  Container,
  Typography,
  Toolbar,
  Button,
  IconButton,
  MenuItem,
  Menu,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip, Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { langContext } from "../Lang/LangProvider";
import { FormattedMessage } from "react-intl";
import "../index.css"
/**
 * Componente que contiene el menu de navegación
 * @returns
 */
export default function NavBar({ service, contact, setNavBarHeight, anchoViewport, activeSection, nav }) {
  const { switchLanguage } = useContext(langContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [language, setLanguage] = useState("en-US");
  const [changeStyles, setChangeStyles] = useState(false);
  const [anchorLang, setAnchorLang] = useState(null);
  const location = useLocation();
  const open = Boolean(anchorLang);
  const handleClick = (event) => {
    setAnchorLang(event.currentTarget);
  };
  const handleClose = (e) => {  
   
    if(e.target.outerText === "EN"){
      setLanguage("en-US");
      switchLanguage("en-US");
    } else if(e.target.outerText === "ES"){
      setLanguage("es-ES");
      switchLanguage("es-ES");
    } else if(e.target.outerText === "BR"){
      setLanguage("br-BR");
      switchLanguage("br-BR");
    }
    setAnchorLang(null);
  };

  const changeStyle = () => {
    if (window.scrollY > 150) {
      setChangeStyles(true);
    } else {
      setChangeStyles(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeStyle);
  }, []);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

  let refApp = useRef(null);
  useEffect(() => {
    setNavBarHeight(refApp.current.offsetHeight)
  }, [refApp.current]);
  return (
    <Box>
      <AppBar
        ref={refApp}
        position="fixed"
        sx={{
          backgroundColor: changeStyles ? "#07293F" : "#fff",
          boxShadow: "none",
          borderBottom: {
            xs: "none",
            md: changeStyles ? "none" : "1px solid #b3b3b3",
          },
          transition: changeStyles ? "background-color .5s" : null,
        }}
      >
        <Container
          maxWidth={false}
          sx={{ "&.MuiContainer-root": { padding: "0 !important"} }}
        >
          <Toolbar
            disableGutters
            sx={{ justifyContent: { xs: "space-between", md: "none" } }}
          >
            {/*version mobile del menu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "#0060a6" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <FormattedMessage
                      id="nav.item1"
                      defaultMessage="nosotros"
                    />
                  </Typography>
                </MenuItem>
                <MenuItem
                  value={"services"}
                  onClick={(e) => {
                    handleCloseNavMenu(e);
                    service();
                  }}
                >
                  <Typography textAlign="center">
                      <FormattedMessage
                      id="nav.item2"
                      defaultMessage="experiencia"
                    />
                    
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <FormattedMessage
                      id="nav.item3"
                      defaultMessage="contacto"
                    />
                  </Typography>
                </MenuItem>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                </Box>
              </Menu>
            </Box>
            <Box onClick={nav} sx={{ marginLeft: "60px", marginY: "12px", width: "300px", cursor:'pointer' }}>
              <img
                src={
                  changeStyles
                    ? "/assets/Everseek-blanco.png"
                    : "/assets/Everseek-azul.png"
                }
                alt="logo"
                style={{ width: "100%", transition: "opacity 0.5s" }}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                width: "100%",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "55%",
                  justifyContent: "space-around",
                }}
              >
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {/* <img src="/icons/Forma E.png"  style={{width:anchoViewport*0.0119047619, height:anchoViewport*0.0052910053, visibility:activeSection === "main"?"visible":"hidden"}} alt=""/> */}
                 <Button
                  sx={{
                    my: 2,
                    color: changeStyles ? "#fff" : "#0060a6",
                    display: "block",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    width:'max-content '
                  }}
                >
                  <FormattedMessage id="nav.item1" defaultMessage="nosotros" />
                  <Divider  sx={{backgroundColor:'#EB783E', visibility:activeSection === "about"?"visible":"hidden"}}/>
                </Button> 
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {/* <img src="/icons/Forma E.png"  style={{width:anchoViewport*0.0119047619, height:anchoViewport*0.0052910053, visibility:activeSection === "services"?"visible":"hidden"}} alt=""/> */}
                <Button
                  onClick={service}
                  sx={{
                    my: 2,
                    color: changeStyles ? "#fff" : "#0060a6",
                    display: "block",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  <FormattedMessage
                    id="nav.item2"
                    defaultMessage="experiencia"
                  />
                    <Divider  sx={{backgroundColor:'#EB783E', visibility:activeSection === "services"?"visible":"hidden"}}/>
                </Button>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {/* <img src="/icons/Forma E.png"  style={{width:anchoViewport*0.0119047619, height:anchoViewport*0.0052910053, visibility:activeSection === "contact"?"visible":"hidden"}} alt=""/> */}
                <Button
                  onClick={contact}
                  sx={{
                    my: 2,
                    color: changeStyles ? "#fff" : "#0060a6",
                    display: "block",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  <FormattedMessage id="nav.item3" defaultMessage="contacto" />
                  <Divider  sx={{backgroundColor:'#EB783E', visibility:activeSection === "contact"?"visible":"hidden"}}/>
                </Button>
                </Box>
                <Box sx={{ visibility: { xs: "hidden", md: "visible" } }}>
                  <Tooltip title={<FormattedMessage id="nav.item4" defaultMessage="idioma" />}>
              <Button onClick={handleClick}  sx={{
                    my: 2,
                    color: changeStyles ? "#fff" : "#0060a6",
                    display: "block",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}>
                    {language.slice(0,2)}
                {/* <FormattedMessage id="nav.item" defaultMessage="idioma" /> */}
              </Button>
              </Tooltip>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="composition-button"
                disableScrollLock={true}
                anchorEl={anchorLang}
                open={open}
                onClose={(e) => handleClose(e)}
                transformOrigin={{ horizontal: "center", vertical: "top" }}
                anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
              >
                <MenuItem 
                sx={{"&.Mui-selected": {backgroundColor: "rgb(0, 96, 166, .5)"}}}
                value="en-US" selected={language==="en-US"?true:false} onClick={(e) => handleClose(e)}>
                  EN
                </MenuItem>
                <MenuItem 
                sx={{"&.Mui-selected": {backgroundColor: "rgb(0, 96, 166, .5)"}}}
                value="es-ES" selected={language==="es-ES"?true:false} onClick={(e) => handleClose(e)}>
                  ES
                </MenuItem>
                <MenuItem
                sx={{"&.Mui-selected": {backgroundColor: "rgb(0, 96, 166, .5)"}}}
                value="br-BR" selected={language==="br-BR"?true:false} onClick={(e) => handleClose(e)}>
                  BR
                </MenuItem>
              </Menu>
              {/* <ToggleButtonGroup
                  sx={{
                    ".css-d9c359-MuiButtonBase-root-MuiToggleButton-root": {
                      padding: "3px",
                      border: changeStyles?"1px solid #fff":"1px solid #0060a6",
                      color: changeStyles ? "#fff" : null,
                      fontFamily: "Source Sans Pro, sans-serif",
                    },
                    ".css-d9c359-MuiButtonBase-root-MuiToggleButton-root.Mui-selected": {color:'#FC7028', backgroundColor:"rgb(191, 191, 191, .3)"}
                  }}
                  color="primary"
                  value={language}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton value="en-US">EN</ToggleButton>
                  <ToggleButton value="es-ES">ES</ToggleButton>
                  <ToggleButton value="br-BR">BR</ToggleButton>
                </ToggleButtonGroup> */}
            </Box>
              </Box>

              {/*debe ser toggle */}
            </Box>
            
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
