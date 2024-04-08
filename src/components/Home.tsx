import { Container, DialogTitle, Stack, Typography } from "@mui/material";
import { SideBar } from "./SideBar";
import ParticlesBg from "particles-bg";

export function Home() {
  return (
    <>
      <Container
        id="home"
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
        <ParticlesBg type="circle" bg={true} />
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
              Brandon Restrepo.
            </DialogTitle>
            <Typography color="#fff" fontSize="1.5rem" textAlign="center">
              Technician in software analysis and development.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
