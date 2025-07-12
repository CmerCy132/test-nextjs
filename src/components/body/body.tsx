'use client';
import React, { useState } from 'react';
import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Sidebar from './sidebar';
import CardList from './cardlist';
import { Item, dummyData } from './data';

const Body: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC' | ''>('');
  const [filterFavorite, setFilterFavorite] = useState<'yes' | 'no' | ''>('');

  let items: Item[] = [...dummyData];
    // console.log('Body items before sort/filter:', items); // Debugging line to check items
  // Apply sort
  if (sortOrder) {
    items.sort((a, b) =>
      sortOrder === 'ASC' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
  }

  // Apply filter
  if (filterFavorite === 'yes') {
    items = items.filter((item) => item.isFavorite);
  } else if (filterFavorite === 'no') {
    items = items.filter((item) => !item.isFavorite);
  }

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      minHeight="100vh"
      sx={{ pt: { xs: '56px', sm: '64px' }, px: { xs: 1, sm: 3 }, bgcolor: 'background.default' }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: 280 },
          minWidth: { md: 280 },
          flexShrink: 0,
          bgcolor: 'background.default',
          boxShadow: { md: 0 },
          p: { xs: 1.5, sm: 3 },
        }}
      >
        <Sidebar
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          filterFavorite={filterFavorite}
          setFilterFavorite={setFilterFavorite}
        />
      </Box>
      <Box
        flex={1}
        p={{ xs: 1.5, sm: 3 }}
        position="relative"
        width="100%"
        minWidth={0}
        sx={{
          bgcolor: 'background.default',
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 64px)',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: 400 }, // Match card width for desktop
            maxWidth: '100%',
            mx: 'auto', // Center the card list horizontally
          }}
        >
          <CardList items={items} />
        </Box>
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default Body;
