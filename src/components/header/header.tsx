'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  marginLeft: 'auto',
  width: '100%',
  maxWidth: 400,
  display: 'flex',
  alignItems: 'center',
  padding: '2px 8px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  width: '100%',
  marginLeft: theme.spacing(1),
}));

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3b4a89' }}>
      <Toolbar>
        <Search>
          <StyledInputBase placeholder="Search here..." inputProps={{ 'aria-label': 'search' }} />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export default Header;