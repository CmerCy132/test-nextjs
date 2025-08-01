import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Item } from './data';

interface RecipeCardProps {
  item: Item;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ item }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        width: 700,           // Fixed width for all cards
        minWidth: 400,        // Prevent shrinking below fixed width
        maxWidth: 700,        // Prevent growing above fixed width
        boxSizing: 'border-box',
        p: 2,
        m: 'auto',            // Center card in grid cell
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 180, height: 130, borderRadius: 2, mr: 2 }}
        image={item.imageUrl}
        alt={item.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto', p: 0 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography component="div" variant="h6">
              {item.title}
            </Typography>
            <IconButton>
              {item.isFavorite ? <StarIcon color="warning" /> : <StarBorderIcon />}
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary" paragraph>
            {item.description}
          </Typography>
          <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
            See more
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 1 }}>
          <Typography variant="caption">Added by: {item.addedBy}</Typography>
          <Typography variant="caption">Date: {item.date}</Typography>
        </CardActions>
      </Box>
    </Card>
  );
};

export default RecipeCard;
