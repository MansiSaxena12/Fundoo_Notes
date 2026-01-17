import React from 'react';
import { Box, Avatar, Typography, Button, IconButton, Paper, Stack, styled } from '@mui/material';
import { Close, Add, Logout, CameraAlt } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  padding: theme.spacing(2),
  textTransform: 'none',
  '&:hover': { backgroundColor: '#e8eaed' },
}));

const Popup = (props) => {
  const navigate=useNavigate()
  const handleSignout=()=>{
    navigate("/signin");
  }
  return (
    <Paper elevation={3} sx={{ width: 350, borderRadius: 7, p: 3, bgcolor: '#f0f4f9', textAlign: 'center', position: 'relative' }}>
      <IconButton size="small" sx={{ position: 'absolute', right: 12, top: 12 }}>
        {/* <Close fontSize="small" /> */}
      </IconButton>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}>
        <Box sx={{ position: 'relative' }}>
          <Avatar sx={{ width: props.w, height: props.h, background: props.color, fontSize: 32 }}>M</Avatar>
          <Box sx={{ position: 'absolute', bottom: 0, right: 0, bgcolor: 'white', borderRadius: '50%', p: 0.5, boxShadow: 1, display: 'flex' }}>
            <CameraAlt sx={{ fontSize: 14, color: '#5f6368' }} />
          </Box>
        </Box>
      </Box>

      <Typography variant="h6" fontWeight={400}>Hi, Mansi!</Typography>
      
      <Button variant="outlined" sx={{ my: 2, borderRadius: 10, textTransform: 'none', color: '#041e49', borderColor: '#747775', px: 3 }}>
        saxenamansi346@gmail.com
      </Button>

      <Stack direction="row" spacing={0.5}>
        <ActionButton fullWidth startIcon={<Add />} sx={{ borderRadius: '24px 4px 4px 24px' }}>
          Add account
        </ActionButton>
        <ActionButton onClick={handleSignout} fullWidth startIcon={<Logout />} sx={{ borderRadius: '4px 24px 24px 4px' }}>
          Sign out
        </ActionButton>
      </Stack>

      <Typography variant="caption" sx={{ display: 'block', mt: 2, color: '#5f6368' }}>
        Privacy Policy • Terms of Service
      </Typography>
    </Paper>
  );
};

export default Popup;