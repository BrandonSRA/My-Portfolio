import { createGlobalStyle } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, DialogTitle, Stack, Typography } from "@mui/material";
import { SideBar } from "./SideBar";
import ParticlesBg from "particles-bg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiGraphql,
  SiNodedotjs,
} from "react-icons/si";

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

export function Experience() {
  return (
    <>
      <GlobalStyle />
      <Container
        id="experience"
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
        <ParticlesBg type="polygon" bg={true} />
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
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  lineHeight: "1",
                }}
              >
                Skills & Experience
              </DialogTitle>
              <Typography
                paddingLeft="50rem"
                paddingRight="50rem"
                pb="3rem"
                color="#A7A7A7"
                fontWeight="400"
                fontSize={{ xs: "1rem", md: "1rem" }}
                textAlign="left"
              >
                I have gained experience building personal projects for training
                and creativity, building various projects to suit different
                aspects <br /> of the client's business, doing code maintenance
                and refactoring on real websites, customer support, website
                creation.
                <br /> My main area of ​​expertise is front-end development
                using many technologies such as HTML, CSS, JS, Nexts.js, React
                and TypeScript,
                <br /> In back-end development I have experience in creating
                REST APIs using Node, MySql, GraphQl.
              </Typography>
              <Stack p={3} pt={0} direction="row" spacing={{ xs: 1, md: 2 }}>
                <SiHtml5 size="2em" color="#E34F26" />
                <SiCss3 size="2em" color="#1572B6" />
                <SiJavascript size="2em" color="#F7DF1E" />
                <SiTypescript size="2em" color="#3178C6" />
                <SiNextdotjs size="2em" color="#ffff" />
                <SiReact size="2em" color="#61DAFB" />
                <SiNodedotjs size="2em" color="#339933" />
                <SiMysql size="2em" color="#4479A1" />
                <SiGraphql size="2em" color="#E10098" />
              </Stack>
            </Stack>
            <Stack justifyContent="center" alignItems="center">
              <Typography color="#A7A7A7" fontSize="1.5rem" textAlign="left">
                (fullstack developer)
              </Typography>
              <DialogTitle
                sx={{
                  color: "#ffff",
                  fontWeight: "700",
                  fontSize: { xs: "2rem", md: "2.5rem" },

                  lineHeight: "1",
                }}
              >
                Star Solutions, Medellín,
                <br /> Colombia
              </DialogTitle>
              <Typography
                color="#A7A7A7"
                fontSize={{ xs: "1rem", md: "1rem" }}
                textAlign="left"
                paddingLeft="50rem"
                paddingRight="50rem"
                pb={3}
              >
                Some of my responsabilities:
                <br />
                ✓ Support in the professional growth of collaborators, teaching
                them best practices in development.
                <br />
                ✓ Development of web applications using frameworks such as
                NextJs and libraries such as ReactJs.
                <br />
                ✓ Development of web applications with responsive design,
                ensuring accessibility on a variety of devices and screen sizes.
                <br />
                ✓ Development of web interfaces from designs in Figma.
                <br />
                ✓ integration of APIS in rendering in tables, users and keys.
                <br />
                ✓ Project management using Trello to document user requirements.
                <br />✓ Use of version control system tools such as Github and
                Gitlab.
              </Typography>
            </Stack>
            <Stack justifyContent="center" alignItems="center">
              <Typography color="#A7A7A7" fontSize="1.5rem" textAlign="left">
                (fullStack hotbed)
              </Typography>
              <DialogTitle
                sx={{
                  color: "#ffff",
                  fontWeight: "700",
                  fontSize: { xs: "2rem", md: "2.5rem" },

                  lineHeight: "1",
                }}
              >
                XpertGrup, Medellín,
                <br /> Colombia
              </DialogTitle>
              <Typography
                color="#A7A7A7"
                fontSize={{ xs: "1rem", md: "1rem" }}
                textAlign="left"
                paddingLeft="50rem"
                paddingRight="50rem"
              >
                Some of my responsabilities:
                <br />
                ✓ Support for new members on the subject of servers and logic.
                <br />
                ✓ Support for code infrastructures with java, react,
                javasescript and python.
                <br />
                ✓ Project management using the SCRUM methodology.
                <br />
                ✓ Maintenance and bug fixes.
                <br /> ✓ Use of version control system tools such as Github.
              </Typography>
            </Stack>
            <Stack justifyContent="center" alignItems="center">
              <Typography color="#A7A7A7" fontSize="1.5rem" textAlign="left">
                (Technical Practices)
              </Typography>
              <DialogTitle
                sx={{
                  color: "#ffff",
                  fontWeight: "700",
                  fontSize: { xs: "2rem", md: "2.5rem" },

                  lineHeight: "1",
                }}
              >
                DigitalWare, Bogotá,
                <br /> Colombia
              </DialogTitle>
              <Typography
                color="#A7A7A7"
                fontSize={{ xs: "1rem", md: "1rem" }}
                textAlign="left"
                paddingLeft="50rem"
                paddingRight="50rem"
              >
                Some of my responsabilities:
                <br />
                ✓ I put Genexus17 technology into practice and built a user
                interface.
                <br />
                ✓ Support for code infrastructures with c++ and .net.
                <br />
                ✓ participate in the creation of a SQL database, where you
                perform the function of entering using unique keys.
                <br />
                ✓ Maintenance and error correction.
                <br /> ✓ Use of version control system tools such as Github.
              </Typography>
            </Stack>
          </Carousel>
        </Stack>
      </Container>
    </>
  );
}
