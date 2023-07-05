import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ProgressContext } from "../contexts/ProgressContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Login from "./Login";
import { AuthContext } from "../contexts/AuthContext";

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

  // useContext
  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  const {
    authInfo: { isAuthenticated },
    toggleAuth,
  } = useContext(AuthContext);

  // state
  const [position, setPosition] = useState<string>("Full-stack Developer");

  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer); //dep timer khi useeffect chay xong
  }, []); //cho update lien tuc UTC

  const onPositionChange = (event: ChangeEvent<{ value: unknown }>) =>
    setPosition(event.target.value as string);
  return (
    <Grid container>
      <AppBar position="static" color={theme}>
        <Toolbar>
          {/* <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={1}
            py={2}
          > */}
          <Grid item xs={2}>
            <Box textAlign="center" my={1}>
              <Typography variant="h6">My movies</Typography>
            </Box>
          </Grid>
          {/* end box */}
          <Grid item xs={7}>
            <Box textAlign="center">
              <WelcomeMessage position={position} />
              <Chip
                label={`Last time working on this project: ${lastTime} - Status: ${status}`}
              />
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
          </Grid>
          {/* end box */}
          <Grid item xs={3}>
            <Box textAlign="center">
              <Box my={1}>
                <Typography variant="h6">{time.toUTCString()}</Typography>
              </Box>
              <Button
                variant="contained"
                onClick={
                  isAuthenticated
                    ? toggleAuth.bind(this, "")
                    : setLoginOpen.bind(this, true)
                }
              >
                {isAuthenticated ? "Logout" : "Login"}
              </Button>
            </Box>
            <Login isOpen={loginOpen} handleClose={setLoginOpen} />
            {/* end box */}
          </Grid>
          {/* </Box> */}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
