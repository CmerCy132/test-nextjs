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
    <Box display="flex" minHeight="100vh">
      <Sidebar
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        filterFavorite={filterFavorite}
        setFilterFavorite={setFilterFavorite}
      />
      <Box flex={1} p={3} position="relative">
        <CardList item={items} />
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: 'fixed', bottom: 32, right: 32 }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default Body;
