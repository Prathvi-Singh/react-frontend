import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const defaultTheme = createTheme();
const BackgroundImage='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fdesktop-wallpaper-pffwx&psig=AOvVaw2xD6BWXcOL7etX5rGUFK6V&ust=1702273845482000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDYzLOWhIMDFQAAAAAdAAAAABAR'

export default function SignIn() {
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   try{
    console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
      if(data.get('email')==="" || data.get('password')==="" ) {
          alert("Please filled them");
          return;
      }
    
      const d={
        email: data.get('email'),
        password:data.get('password'),
       
      }
      console.log(d);
      const response = await axios.post('http://localhost:8000/login', d);
   
      if(response.status===200){
        window.location.href = 'https://psingh-portfolio.netlify.app/';
        alert("logged in successfully");
      }
      else{
        alert("already email exist or any other problem");
      }
   }
   catch(err){
     alert("wrong information");
   }

    
  };

  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: `url(${BackgroundImage})`, // Set background image
            backgroundSize: 'cover',
            height: '100vh', // Adjust the height as needed
           
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
  
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}