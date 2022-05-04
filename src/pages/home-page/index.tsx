// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import React, { FC, useEffect, useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Typography from "@mui/material/Typography";
import { red, green } from "@mui/material/colors";

const HomePage: FC = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval: any;

    if (start) {
      interval = setInterval(() => {
        setTime((prevState) => prevState + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  const handleOnStart = () => {
    setStart(true);
  };

  const handleOnResume = () => {
    setStart(false);
  };

  const handleOnReset = () => {
    setTime(0);
    setStart(false);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
          {("0" + ((time / 10) % 100)).slice(-2)}
        </Typography>
        {!start && (
          <IconButton onClick={handleOnStart} sx={{ color: green[600] }}>
            <PlayCircleFilledIcon fontSize="large" />
          </IconButton>
        )}
        {start && (
          <IconButton onClick={handleOnResume} sx={{ color: red[600] }}>
            <PauseCircleIcon fontSize="large" />
          </IconButton>
        )}
        {!start && time > 0 && (
          <IconButton onClick={handleOnReset}>
            <RestartAltIcon fontSize="large" />
          </IconButton>
        )}
      </Box>
    </Container>
  );
};

export default HomePage;
