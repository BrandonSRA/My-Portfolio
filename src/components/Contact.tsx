import {
  Container,
  DialogTitle,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { SideBar } from "./SideBar";
import { Link } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Mail from "@mui/icons-material/Mail";

const actions = [
  {
    icon: (
      <Link
        component={RouterLink}
        target="blank"
        to="https://github.com/BrandonSRA"
        style={{ color: "#a7a7a7" }}
      >
        <GitHubIcon sx={{ fontSize: "5rem" }} />
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
        style={{ color: "#a7a7a7" }}
      >
        <LinkedInIcon sx={{ fontSize: "5rem" }} />
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
        style={{ color: "#a7a7a7" }}
      >
        <WhatsApp sx={{ fontSize: "5rem" }} />
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
        style={{ color: "#a7a7a7" }}
      >
        <Mail sx={{ fontSize: "5rem" }} />
      </Link>
    ),
    name: "Email",
  },
];
export function Contact() {
  return (
    <>
      <Container
        id="contact"
        sx={{
          position: "sticky",
          overflow: "hidden",
          display: "flex",
          background:
            "linear-gradient(0deg, rgba(37,46,46,1) 0%, rgba(76,84,161,1) 100%)",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          maxWidth: "100%",
        }}
      >
        <SideBar />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          padding="5rem"
        >
          <Stack justifyContent="center" alignItems="center">
            <DialogTitle
              sx={{
                color: "#ffff",
                fontWeight: "700",
                fontSize: "5rem",
                lineHeight: "1",
              }}
            >
              Contact Me.
            </DialogTitle>
            <Typography
              color="#fff"
              fontSize="1.5rem"
              textAlign="center"
              padding="3rem"
            >
              Available for any remote job opportunity. Send me an email or
              contact me via instant message!
            </Typography>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              {actions.map((action) => (
                <Tooltip key={action.name} title={action.name}>
                  <Stack direction="column" alignItems="center">
                    {action.icon}
                    <Typography fontSize="2rem" color="#181818">
                      {action.name}
                    </Typography>
                  </Stack>
                </Tooltip>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
