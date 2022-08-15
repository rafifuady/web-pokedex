import {
  Box,
  Container,
  LinearProgress,
  Stack,
  Typography,
  styled,
  Button,
  ListItem,
  ListItemText,
} from '@mui/material';
import React from 'react';
import ButtonTypingPokemon from '../../../common/components/ButtonTypingPokemon';
import { createGradient } from '../../../common/utils/createGradient';

const TitleBox = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '5vh',
  color: '#ede6de',
  backgroundColor: '#263a52',
  '&:hover': {
    backgroundColor: '#456479',
  },
  padding: theme.spacing(2),
}));

function PokedexDetailContainer() {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        background: createGradient('#ede6de', 'gray'),
        paddingY: '2em',
      }}
    >
      <Stack
        direction='column'
        alignItems='center'
        spacing={6}
        sx={{ padding: '2em', minHeight: '80vh' }}
      >
        <TitleBox>
          <Stack direction='row' spacing={6} justifyContent='center'>
            <Typography>#001</Typography>
            <Typography>{'bulbasaur'.toUpperCase()}</Typography>
          </Stack>
          <Stack
            direction='row'
            justifyContent='center'
            spacing={6}
            sx={{ paddingTop: '1em' }}
          >
            <ButtonTypingPokemon key={1} type={'grass'}>
              {'grass'.toUpperCase()}
            </ButtonTypingPokemon>
          </Stack>
        </TitleBox>
        <Box sx={{ maxHeight: '150', maxWidth: '150' }}>
          <img
            style={{ height: '146px', width: 'auto', padding: '1px' }}
            alt='front_default'
          />
        </Box>
      </Stack>
    </Container>
  );
}

export default PokedexDetailContainer;
