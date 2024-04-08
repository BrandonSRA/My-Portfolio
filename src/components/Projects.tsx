import { Container, DialogTitle, Link, Stack, Typography } from "@mui/material";
import ParticlesBg from "particles-bg";
import {
  SiCss3,
  SiFigma,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
                  <SiVite size="3em" color="#646CFF" />
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
                  CSS Course.
                </DialogTitle>
                <Typography color="#A7A7A7" fontSize="1rem">
                  This page is made after having seen a CSS course.
                </Typography>
                <Stack direction="row" justifyContent="left" p={1} spacing={2}>
                  <SiCss3 size="3em" color="#1572B6" />
                  <SiHtml5 size="3em" color="#E34F26" />
                </Stack>
                <Link
                  component={RouterLink}
                  target="blank"
                  to="https://brandonsra.github.io"
                  style={{
                    color: "#FFC300 ",
                    fontSize: "1rem",
                    padding: "1rem",
                    paddingLeft: "0",
                  }}
                >
                  Explore to CSS Course
                </Link>
              </Stack>
              <Link
                paddingBottom="3rem"
                component={RouterLink}
                target="blank"
                to="https://brandonsra.github.io"
              >
                <img
                  src="CursoCss.png"
                  alt="Music app star Solutions"
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
                  Rick and Morty API.
                </DialogTitle>
                <Typography color="#A7A7A7" fontSize="1rem">
                  This page consists of a list of characters from the Rick and
                  Morty series.
                </Typography>
                <Stack direction="row" justifyContent="left" p={1} spacing={2}>
                  <SiReact size="3em" color="#61DAFB" />
                  <SiJavascript size="3em" color="#F7DF1E" />
                  <SiCss3 size="3em" color="#1572B6" />
                </Stack>
                <Link
                  component={RouterLink}
                  target="blank"
                  to="https://rick-and-morty-app-github-4zd860dfh-brandons-projects-26e7450d.vercel.app"
                  style={{
                    color: "#FFC300 ",
                    fontSize: "1rem",
                    padding: "1rem",
                    paddingLeft: "0",
                  }}
                >
                  Explore to Rick and Morty API.
                </Link>
              </Stack>
              <Link
                paddingBottom="3rem"
                component={RouterLink}
                target="blank"
                to="https://rick-and-morty-app-github-4zd860dfh-brandons-projects-26e7450d.vercel.app"
              >
                <img
                  src="RickAndMorty.png"
                  alt="Music app star Solutions"
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
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="left"
              textAlign="left"
            >
              <Stack justifyContent="center">
                <Typography color="#A7A7A7" fontSize="1rem">
                  (Star Solutions)
                </Typography>
                <DialogTitle
                  sx={{
                    padding: "0",
                    color: "#ffff",
                    fontWeight: "700",
                    fontSize: "3rem",
                  }}
                >
                  TradesForce
                </DialogTitle>
                <Typography color="#A7A7A7" fontSize="1rem">
                  It is a web platform where users can view cryptocurrency
                  information in real time,
                  <br /> with the possibility of modifying the information.
                </Typography>
                <Stack direction="row" justifyContent="left" p={1} spacing={2}>
                  <SiReact size="3em" color="#61DAFB" />
                  <SiMui size="3em" color="#0081CB" />
                  <SiVite size="3em" color="#646CFF" />
                </Stack>
                <Link
                  component={RouterLink}
                  to="#"
                  style={{
                    color: "#FFC300 ",
                    fontSize: "1rem",
                    padding: "1rem",
                    paddingLeft: "0",
                  }}
                >
                  Explore to TradesForce
                </Link>
              </Stack>
              <Link paddingBottom="3rem" component={RouterLink} to="#">
                <img
                  src="TradesForce.png"
                  alt="TradesForce app"
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
                  (Star Solutions)
                </Typography>
                <DialogTitle
                  sx={{
                    padding: "0",
                    color: "#ffff",
                    fontWeight: "700",
                    fontSize: "3rem",
                  }}
                >
                  Bitnapse
                </DialogTitle>
                <Typography color="#A7A7A7" fontSize="1rem">
                  It is a web platform focused on connecting international
                  students to swap AUD into COP or vice versa.
                  <br /> The project aims to connect students and improve their
                  financial life.
                </Typography>
                <Stack direction="row" justifyContent="left" p={1} spacing={2}>
                  <SiReact size="3em" color="#61DAFB" />
                  <SiMui size="3em" color="#0081CB" />
                  <SiVite size="3em" color="#646CFF" />
                </Stack>
                <Link
                  component={RouterLink}
                  target="blank"
                  to="https://bitnapse.au"
                  style={{
                    color: "#FFC300 ",
                    fontSize: "1rem",
                    padding: "1rem",
                    paddingLeft: "0",
                  }}
                >
                  Explore to Bitnapse
                </Link>
              </Stack>
              <Link
                paddingBottom="3rem"
                component={RouterLink}
                target="blank"
                to="https://bitnapse.au"
              >
                <img
                  src="Bitnapse.png"
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
