import React from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      message: data.get('message'),
    });
  };

  return (
    <div className='bg-gradient-to-br from-[#5F0F40] to-[#310E68] flex justify-around p-6'>
      <div>
        <img src={require('../assets/getiintouch.png')} alt="" className='h-96 w-96 mt-32 rotate-6' />
      </div>
      <div className='text-white ml-10'>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4" sx={{ color: 'white' }} className='font-extrabold text-3xl'>
              Get In Touch
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                margin="normal"
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                InputProps={{
                  style: { color: 'white', borderColor: 'white' },
                  classes: {
                    notchedOutline: 'MuiOutlinedInput-notchedOutline',
                  },
                }}
              />
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                margin="normal"
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                InputProps={{
                  style: { color: 'white', borderColor: 'white' },
                  classes: {
                    notchedOutline: 'MuiOutlinedInput-notchedOutline',
                  },
                }}
              />
              <TextField
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="number"
                id="phonenumber"
                autoComplete="tel"
                margin="normal"
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                InputProps={{
                  style: { color: 'white', borderColor: 'white' },
                  classes: {
                    notchedOutline: 'MuiOutlinedInput-notchedOutline',
                  },
                }}
              />
              <TextField
                required
                fullWidth
                name="message"
                label="Message"
                id="message"
                autoComplete="message"
                margin="normal"
                multiline
                rows={4}
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                InputProps={{
                  style: { color: 'white', borderColor: 'white' },
                  classes: {
                    notchedOutline: 'MuiOutlinedInput-notchedOutline',
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
