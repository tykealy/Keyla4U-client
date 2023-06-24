import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="teal" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://.com/">
        Keyla4U
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function ContactUsForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: 'teal' }}>
              Contact US
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="fname"
                label="Firstname"
                type="text"
                name="fname"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lname"
                label="Lastname"
                type="text"
                name="lname"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="tel"
                label="Phone Number"
                type="tel"
                id="tel"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="text"
                label="Message"
                multiline
                rows={4}
                id="text"
                sx={{ color: 'teal' }}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: 'teal' }}>
                Submit
              </Button>
              <Copyright sx={{ color: 'teal' }} />
            </Box>
          </Box>
    </ThemeProvider>
  );
}