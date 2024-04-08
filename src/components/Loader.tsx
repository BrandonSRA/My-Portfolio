import { FC } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Loader: FC = () => {
  return (
    <Stack
      position="fixed"
      zIndex="modal"
      alignItems="center"
      justifyContent="center"
      bgcolor="#000"
      sx={{
        inset: 0,
      }}
    >
      <Typography
        fontSize="2rem"
        fontWeight={700}
        textAlign="center"
        overflow="hidden"
        sx={{
          color: "#fff",
          animation: "pulse 1s ease infinite",
          "@keyframes pulse": { "0%": { opacity: 0.25 }, "50%": { opacity: 1 }, "100%": { opacity: 0.25 } },
        }}
      >
        LOADING RESOURCES...
      </Typography>
    </Stack>
  );
};
