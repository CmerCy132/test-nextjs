import React from 'react';
import { Grid } from '@mui/material';
import { Item } from './data';
import RecipeCard from './recipeCard';

interface CardListProps {
  items: Item[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item sm={12} key={item.id}> {/* Always one column */}
          <RecipeCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
