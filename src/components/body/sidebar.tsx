import React from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

interface SidebarProps {
  sortOrder: 'ASC' | 'DESC' | '';
  setSortOrder: (value: 'ASC' | 'DESC' | '') => void;
  filterFavorite: 'yes' | 'no' | '';
  setFilterFavorite: (value: 'yes' | 'no' | '') => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sortOrder,
  setSortOrder,
  filterFavorite,
  setFilterFavorite,
}) => {
  return (
    <Box
      width={250}
      p={2}
      sx={{
        // bgcolor: '#f5f5f5', // Match the card background color
        //borderRight: '1px solid #ddd',
    }}
    >
      <Typography variant="h6" gutterBottom>Sort by Title</Typography>
      <FormControl fullWidth size="small" margin="normal">
        <InputLabel>Select</InputLabel>
        <Select
          value={sortOrder}
          label="Select"
          onChange={(e) => setSortOrder(e.target.value as 'ASC' | 'DESC')}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="ASC">ASC</MenuItem>
          <MenuItem value="DESC">DESC</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h6" mt={4} gutterBottom>Filter</Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={filterFavorite === 'yes'}
              onChange={() =>
                setFilterFavorite(filterFavorite === 'yes' ? '' : 'yes')
              }
            />
          }
          label="Favorites: Yes"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filterFavorite === 'no'}
              onChange={() =>
                setFilterFavorite(filterFavorite === 'no' ? '' : 'no')
              }
            />
          }
          label="Favorites: No"
        />
      </FormGroup>
    </Box>
  );
};

export default Sidebar;
