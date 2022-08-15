import { Box, CircularProgress, Container, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { PokedexListContainer } from '../../modules/pokedex/containers';
import PokedexDetailContainer from '../../modules/pokedex/containers/PokedexDetailContainer';

function PokedexListPage() {
  const pokedex = useSelector((state) => state.pokedex);
  return (
    <Box>
      <Stack
        direction='row'
        justifyContent='space-around'
        sx={{ height: '100vh' }}
      >
        <Container>
          {pokedex.isDetailLoading && <CircularProgress />}
          {pokedex.detail && <PokedexDetailContainer />}</Container>
        <Container sx={{ background: 'gray', overflowY: 'scroll' }}>
          <PokedexListContainer key={'1'} />
        </Container>
      </Stack>
    </Box>
  );
}

export default PokedexListPage;
