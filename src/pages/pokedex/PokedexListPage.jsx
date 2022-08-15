import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import { PokedexListContainer } from '../../modules/pokedex/containers';
import PokedexDetailContainer from '../../modules/pokedex/containers/PokedexDetailContainer';

function PokedexListPage() {
  return (
    <Box>
      <Stack direction='row'  justifyContent='space-around' sx={{ height: '100vh' }}>
        <Container><PokedexDetailContainer /></Container>
        <Container sx={{ background: 'gray', overflowY: 'scroll' }}><PokedexListContainer /></Container>
      </Stack>
    </Box>
  );
}

export default PokedexListPage;
