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
    border-width: 30px; 
    @media (max-width: 1440px) {
      padding-left: 20rem;
    }
    @media (min-width: 1441px) {
      padding-left: 10rem;
    }
  }
  .carousel .control-prev.control-arrow:before 
  {
    border-width: 30px; 
    @media (max-width: 1440px) {
      padding-right: 20rem;
    }
    @media (min-width: 1441px) {
      padding-right: 10rem;
    }
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
                  fontSize: { xs: "4rem", md: "2.5rem" },

                  lineHeight: "1",
                }}
              >
                Projects
              </DialogTitle>
              <Typography
                padding="3rem"
                pb="3rem"
                color="#A7A7A7"
                fontSize={{ xs: "1rem", md: "1rem" }}
                textAlign="left"
              >
                Here are some of the projects I have worked on.
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "left", md: "center" }}
              alignItems={{ xs: "center", md: "left" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              <Stack justifyContent="center">
                <Typography
                  color="#A7A7A7"
                  fontSize={{ xs: "0.8rem", md: "1rem" }}
                >
                  (Personal Project)
                </Typography>
                <DialogTitle
                  sx={{
                    padding: "0",
                    color: "#ffff",
                    fontWeight: "700",
                    fontSize: { xs: "2rem", md: "2rem" },
                  }}
                >
                  Shadient.co
                </DialogTitle>
                <Typography
                  color="#A7A7A7"
                  fontSize={{ xs: "0.8rem", md: "0.8rem" }}
                  pl={{ xs: "53rem", md: "0" }}
                  pr={{ xs: "53rem", md: "0" }}
                >
                  It is a page based on a design created by the figma community
                  to improve the layout.
                </Typography>
                <Stack
                  direction="row"
                  justifyContent={{ xs: "center", md: "left" }}
                  pt={1}
                  spacing={{ xs: 1, md: 2 }}
                >
                  <SiReact size="2em" color="#61DAFB" />
                  <SiTypescript size="2em" color="#3178C6" />
                  <SiFigma size="2em" color="#F24E1E" />
                  <SiMui size="2em" color="#0081CB" />
                  <SiVite size="2em" color="#646CFF" />
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
                sx={{
                  width: { xs: "40vh", md: "70vh" },
                  marginLeft: { xs: "0", md: "3em" },
                }}
                component={RouterLink}
                target="blank"
                to="https://shadient-co.vercel.app"
              >
                <img
                  src="Landing.png"
                  alt="Shadient.co"
                  style={{
                    borderRadius: "1rem",
                  }}
                />
              </Link>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "left", md: "center" }}
              alignItems={{ xs: "center", md: "left" }}
              textAlign={{ xs: "center", md: "left" }}
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
                    fontSize: { xs: "2rem", md: "2rem" },
                  }}
                >
                  CSS Course.
                </DialogTitle>
                <Typography
                  color="#A7A7A7"
                  fontSize={{ xs: "0.8rem", md: "0.8rem" }}
                  pl={{ xs: "53rem", md: "0" }}
                  pr={{ xs: "53rem", md: "0" }}
                >
                  This page is made after having seen a CSS course.
                </Typography>
                <Stack
                  direction="row"
                  justifyContent={{ xs: "center", md: "left" }}
                  p={1}
                  spacing={{ xs: 1, md: 2 }}
                >
                  <SiCss3 size="2em" color="#1572B6" />
                  <SiHtml5 size="2em" color="#E34F26" />
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
                sx={{
                  width: { xs: "40vh", md: "70vh" },
                  marginLeft: { xs: "0", md: "3em" },
                }}
                component={RouterLink}
                target="blank"
                to="https://brandonsra.github.io"
              >
                <img
                  src="CursoCss.png"
                  alt="Music app star Solutions"
                  style={{
                    borderRadius: "1rem",
                  }}
                />
              </Link>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "left", md: "center" }}
              alignItems={{ xs: "center", md: "left" }}
              textAlign={{ xs: "center", md: "left" }}
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
                    fontSize: { xs: "2rem", md: "2rem" },
                  }}
                >
                  Rick and Morty 
                </DialogTitle>
                <Typography
                  color="#A7A7A7"
                  fontSize={{ xs: "0.8rem", md: "0.8rem" }}
                  pl={{ xs: "53rem", md: "0" }}
                  pr={{ xs: "53rem", md: "0" }}
                >
                  This page consists of a list of characters from the Rick and
                  Morty series.
                </Typography>
                <Stack
                  direction="row"
                  justifyContent={{ xs: "center", md: "left" }}
                  p={1}
                  spacing={{ xs: 1, md: 2 }}
                >
                  <SiReact size="2em" color="#61DAFB" />
                  <SiJavascript size="2em" color="#F7DF1E" />
                  <SiCss3 size="2em" color="#1572B6" />
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
                  Explore to Rick and Morty
                </Link>
              </Stack>
              <Link
                paddingBottom="3rem"
                sx={{
                  width: { xs: "40vh", md: "70vh" },
                  marginLeft: { xs: "0", md: "3em" },
                }}
                component={RouterLink}
                target="blank"
                to="https://rick-and-morty-app-github-4zd860dfh-brandons-projects-26e7450d.vercel.app"
              >
                <img
                  src="RickAndMorty.png"
                  alt="Music app star Solutions"
                  style={{
                    borderRadius: "1rem",
                  }}
                />
              </Link>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "left", md: "center" }}
              alignItems={{ xs: "center", md: "left" }}
              textAlign={{ xs: "center", md: "left" }}
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
                    fontSize: { xs: "2rem", md: "2rem" },
                  }}
                >
                  Music app 
                </DialogTitle>
                <Typography
                  color="#A7A7A7"
                  fontSize={{ xs: "0.8rem", md: "0.8rem" }}
                  pl={{ xs: "53rem", md: "0" }}
                  pr={{ xs: "53rem", md: "0" }}
                >
                  This page consists of a list of singers that are added to the
                  table.
                </Typography>
                <Stack
                  direction="row"
                  justifyContent={{ xs: "center", md: "left" }}
                  p={1}
                  spacing={{ xs: 1, md: 2 }}
                >
                  <SiReact size="2em" color="#61DAFB" />
                  <SiTypescript size="2em" color="#3178C6" />
                  <SiNextdotjs size="2em" color="#ffff" />
                  <SiGraphql size="2em" color="#E10098" />
                  <SiMui size="2em" color="#0081CB" />
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
                sx={{
                  width: { xs: "40vh", md: "70vh" },
                  marginLeft: { xs: "0", md: "3em" },
                }}
                target="blank"
                to="https://music-app-soluciones-star.vercel.app"
              >
                <img
                  src="MusicApp.png"
                  alt="Music app star Solutions"
                  style={{
                    borderRadius: "1rem",
                  }}
                />
              </Link>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "left", md: "center" }}
              alignItems={{ xs: "center", md: "left" }}
              textAlign={{ xs: "center", md: "left" }}
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
                    fontSize: { xs: "2rem", md: "2rem" },
                  }}
                >
                  TradesForce
                </DialogTitle>
                <Typography
                  color="#A7A7A7"
                  fontSize={{ xs: "0.8rem", md: "0.8rem" }}
                  pl={{ xs: "53rem", md: "0" }}
                  pr={{ xs: "53rem", md: "0" }}
                >
                  It is a web platform where users can view cryptocurrency
                  information in real time,
                  <br /> with the possibility of modifying the information.
                </Typography>
                <Stack
                  direction="row"
                  justifyContent={{ xs: "center", md: "left" }}
                  p={1}
                  spacing={{ xs: 1, md: 2 }}
                >
                  <SiReact size="2em" color="#61DAFB" />
                  <SiMui size="2em" color="#0081CB" />
                  <SiVite size="2em" color="#646CFF" />
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
              <Link
                paddingBottom="3rem"
                sx={{
                  width: { xs: "40vh", md: "70vh" },
                  marginLeft: { xs: "0", md: "3em" },
                }}
                component={RouterLink}
                to="#"
              >
                <img
                  src="TradesForce.png"
                  alt="TradesForce app"
                  style={{
                    borderRadius: "1rem",
                  }}
                />
              </Link>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "left", md: "center" }}
              alignItems={{ xs: "center", md: "left" }}
              textAlign={{ xs: "center", md: "left" }}
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
                    fontSize: { xs: "2rem", md: "2rem" },
                  }}
                >
                  Bitnapse
                </DialogTitle>
                <Typography
                  textAlign={"left"}
                  color="#A7A7A7"
                  fontSize={{ xs: "0.8rem", md: "0.8rem" }}
                  pl={{ xs: "53rem", md: "0" }}
                  pr={{ xs: "53rem", md: "0" }}
                >
                  It is a web platform focused on connecting international
                  students to swap AUD into COP or vice versa.
                  <br /> The project aims to connect students and improve their
                  financial life.
                </Typography>
                <Stack
                  direction="row"
                  justifyContent={{ xs: "center", md: "left" }}
                  p={1}
                  spacing={{ xs: 1, md: 2 }}
                >
                  <SiReact size="2em" color="#61DAFB" />
                  <SiMui size="2em" color="#0081CB" />
                  <SiVite size="2em" color="#646CFF" />
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
                sx={{
                  width: { xs: "40vh", md: "70vh" },
                  marginLeft: { xs: "0", md: "3em" },
                }}
                component={RouterLink}
                target="blank"
                to="https://bitnapse.au"
              >
                <img
                  src="Bitnapse.png"
                  alt="Music app star Solutions"
                  style={{
                    borderRadius: "1rem",
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
