import { Box, CircularProgress, Container, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { createGradientX } from '../../common/utils/createGradient';
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
        <Container sx={{ background: createGradientX('#EDFFFF', '#FFE6F1'), }}>
          {pokedex.isDetailLoading && <Stack justifyContent='center' alignItems='center'><CircularProgress /></Stack>}
          {pokedex.detail && <PokedexDetailContainer />}</Container>
        <Container sx={{ background: createGradientX('#FA7248', '#F4523B'), overflowY: 'scroll' }}>
          <PokedexListContainer key={'1'} />
        </Container>
      </Stack>
    </Box>
  );
}

export default PokedexListPage;
