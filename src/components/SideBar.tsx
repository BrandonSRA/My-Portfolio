import { Mail, WhatsApp } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AppBar, Button, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const actions = [
  {
    icon: (
      <Link
        component={RouterLink}
        target="blank"
        to="https://github.com/BrandonSRA"
        style={{ color: "inherit" }}
      >
        <GitHubIcon />
      </Link>
    ),
    name: "GitHub",
  },
  {
    icon: (
      <Link
        component={RouterLink}
        target="blank"
        to="https://www.linkedin.com/in/brandon-restrepo-alvarez-178baa241/"
        style={{ color: "inherit" }}
      >
        <LinkedInIcon />
      </Link>
    ),
    name: "LinkedIn",
  },
  {
    icon: (
      <Link
        component={RouterLink}
        target="blank"
        to="https://wa.link/qinbmd"
        style={{ color: "inherit" }}
      >
        <WhatsApp />
      </Link>
    ),
    name: "Contact",
  },
  {
    icon: (
      <Link
        component={RouterLink}
        target="blank"
        to="mailto:brandon33455@gmail.com"
        style={{ color: "inherit" }}
      >
        <Mail />
      </Link>
    ),
    name: "Email",
  },
];
const pages = [
  {
    name: "Home",
    component: (
      <ScrollLink to="home" spy={true} smooth={true} duration={500}>
        Home
      </ScrollLink>
    ),
  },
  {
    name: "Experience",
    component: (
      <ScrollLink to="experience" spy={true} smooth={true} duration={500}>
        Experience
      </ScrollLink>
    ),
  },
  {
    name: "Projects",
    component: (
      <ScrollLink to="projects" spy={true} smooth={true} duration={500}>
        Projects
      </ScrollLink>
    ),
  },
  {
    name: "contact",
    component: (
      <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
        Contact me
      </ScrollLink>
    ),
  },
];
export function SideBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="fixed">
      <Box sx={{ height: 70, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: "absolute", top: 7, left: 16 }}
          icon={
            <Avatar
              alt="User Avatar"
              src="Brandon.jpg"
              sx={{ width: 58, height: 58 }}
            />
          }
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="down"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
              tooltipPlacement="right"
            />
          ))}
        </SpeedDial>
        <Box
          justifyContent="center"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
        >
          {pages.map((page) => (
            <Button
              key={page.name}
              sx={{
                my: 3,
                color: "white",
                fontSize: { xs: "0.6rem", md: "0.8rem" },
              }}
            >
              {page.component}
            </Button>
          ))}
        </Box>
      </Box>
    </AppBar>
  );
}
