import {
  AppBar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);

const Navbar = () => {
  // style
  const classes = useStyles();
  // state
  const [position, setPosition] = useState<string>("Full-stack Developer");

  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer); //dep timer khi useeffect chay xong
  }, []); //cho update lien tuc UTC

  const onPositionChange = (event: ChangeEvent<{ value: unknown }>) =>
    setPosition(event.target.value as string);
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          width={1}
          py={2}
        >
          <Box textAlign="center" my={1}>
            <Typography variant="h6">My movies</Typography>
          </Box>

          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  className={classes.positionSelect}
                >
                  <MenuItem value="Full-stack Developer">
                    Full-stack Developer
                  </MenuItem>
                  <MenuItem value="Front-end Developer">
                    Front-end Developer
                  </MenuItem>
                  <MenuItem value="Back-end Developer">
                    Back-end Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
            <Button variant="contained">Login</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
