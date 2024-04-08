import { Container, DialogTitle, Link, Stack, Typography } from "@mui/material";
import ParticlesBg from "particles-bg";
import {
  SiFigma,
  SiGraphql,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link as RouterLink } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { SideBar } from "./SideBar";

const GlobalStyle = createGlobalStyle`
.carousel .control-next.control-arrow:before  {
    border-width: 20px; 
   
    
  }
  .carousel .control-prev.control-arrow:before 
  {
    border-width: 20px; 
   
  }
`;

export function Projects() {
  return (
    <>
      <GlobalStyle />
      <Container
        id="projects"
        sx={{
          position: "sticky",
          overflow: "hidden",
          display: "flex",
          bgcolor: "#000",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          maxWidth: "100%",
        }}
      >
        <ParticlesBg type="square" bg={true} />
        <SideBar />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Carousel showThumbs={false} width={2000}>
            <Stack justifyContent="center" alignItems="center">
              <DialogTitle
                sx={{
                  color: "#ffff",
                  fontWeight: "700",
                  fontSize: "5rem",
                  lineHeight: "1",
                }}
              >
                Projects
              </DialogTitle>
              <Typography
                padding="3rem"
                pb="3rem"
                color="#A7A7A7"
                fontSize="1.5rem"
                textAlign="left"
              >
                Here are some of the projects I have worked on.
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="left"
              textAlign="left"
            >
              <Stack justifyContent="center">
                <Typography color="#A7A7A7" fontSize="1rem">
                  (Personal Project)
                </Typography>
                <DialogTitle
                  sx={{
                    padding: "0",
                    color: "#ffff",
                    fontWeight: "700",
                    fontSize: "3rem",
                  }}
                >
                  Shadient.co
                </DialogTitle>
                <Typography color="#A7A7A7" fontSize="1rem">
                  It is a page based on a design created by the figma community
                  to improve the layout.
                </Typography> 
                <Stack direction="row" justifyContent="left" p={1} spacing={2}>
                  <SiReact size="3em" color="#61DAFB" />
                  <SiTypescript size="3em" color="#3178C6" />
                  <SiFigma size="3em" color="#F24E1E" />
                  <SiMui size="3em" color="#0081CB" />
                </Stack>
                <Link
                  component={RouterLink}
                  target="blank"
                  to="https://shadient-co.vercel.app"
                  style={{
                    color: "#FFC300 ",
                    fontSize: "1rem",
                    padding: "1rem",
                    paddingLeft: "0",
                  }}
                >
                  Explore to Shadient.co
                </Link>
              </Stack>
              <Link
                paddingBottom="3rem"
                component={RouterLink}
                target="blank"
                to="https://shadient-co.vercel.app"
              >
                <img
                  src="Landing.png"
                  alt="Shadient.co"
                  style={{
                    borderRadius: "1rem",
                    marginLeft: "5rem",
                    width: "70vh",
                  }}
                />
              </Link>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="left"
              textAlign="left"
            >
              <Stack justifyContent="center">
                <Typography color="#A7A7A7" fontSize="1rem">
                  (Personal Project)
                </Typography>
                <DialogTitle
                  sx={{
                    padding: "0",
                    color: "#ffff",
                    fontWeight: "700",
                    fontSize: "3rem",
                  }}
                >
                  Music app star Solutions
                </DialogTitle>
                <Typography color="#A7A7A7" fontSize="1rem">
                  This page consists of a list of singers that are added to the
                  table.
                </Typography>
                <Stack direction="row" justifyContent="left" p={1} spacing={2}>
                  <SiReact size="3em" color="#61DAFB" />
                  <SiTypescript size="3em" color="#3178C6" />
                  <SiNextdotjs size="3em" color="#ffff" />
                  <SiGraphql size="3em" color="#E10098" />
                  <SiMui size="3em" color="#0081CB" />
                </Stack>
                <Link
                  component={RouterLink}
                  target="blank"
                  to="https://music-app-soluciones-star.vercel.app"
                  style={{
                    color: "#FFC300 ",
                    fontSize: "1rem",
                    padding: "1rem",
                    paddingLeft: "0",
                  }}
                >
                  Explore to Music app
                </Link>
              </Stack>
              <Link
                paddingBottom="3rem"
                component={RouterLink}
                target="blank"
                to="https://music-app-soluciones-star.vercel.app"
              >
                <img
                  src="MusicApp.png"
                  alt="Music app star Solutions"
                  style={{
                    borderRadius: "1rem",
                    marginLeft: "5rem",
                    width: "70vh",
                  }}
                />
              </Link>
            </Stack>
          </Carousel>
        </Stack>
      </Container>
    </>
  );
}
