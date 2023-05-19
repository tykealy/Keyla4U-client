import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import { useRecoilState } from "recoil";
import { RecoilStates } from "../../state/state";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Keyla4U
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInForm() {
  const [loading, setLoading] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);
  //recoil states
  const { signupState, loginState, loggedInState } = RecoilStates;
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
  const [openLogin, setOpenLogin] = useRecoilState(loginState);
  const [signup, setSignup] = useRecoilState(signupState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.target);
    const req = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: data,
    }).catch((e) => {
      console.log(e);
    });
    req.status == 401 ? setLoginError(true) : setLoginError(false);
    const res = await req.json();
    if (req.status == 200) {
      localStorage.setItem("user", JSON.stringify(res));
      setLoggedIn(true);
      setOpenLogin(false);
    } else {
      localStorage.setItem("user", null);
      setLoggedIn(false);
    }
    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              sx={{ width: "100%" }}
              id="user_email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              sx={{ width: "100%" }}
              name="password"
              label="Password"
              type="password"
              id="user_password"
              autoComplete="current-password"
            />
            {loginError && (
              <Typography sx={{ margin: "auto" }} color="error">
                Invalid login credentials
              </Typography>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, width: "100%" }}
              disabled={loading}
            >
              Sign In {loading && <CircularProgress size={20} />}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Button
                  sx={{ fontSize: "0.7rem" }}
                  onClick={() => {
                    setOpenLogin(false);
                    setSignup(true);
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
