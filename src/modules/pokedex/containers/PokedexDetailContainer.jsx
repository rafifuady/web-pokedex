import { Box, Container, Stack, Typography, styled } from '@mui/material';
import { useSelector } from 'react-redux';
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
  const { detail } = useSelector((state) => state.pokedex);
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
            <Typography>#{detail.id}</Typography>
            <Typography>{detail.name?.toUpperCase()}</Typography>
          </Stack>
          <Stack
            direction='row'
            justifyContent='center'
            spacing={6}
            sx={{ paddingY: '1em' }}
          >
            {detail.types?.map((val, index) => (
              <ButtonTypingPokemon key={index} type={val.type.name} onClick={()=> console.log('asd')}>
                {val.type.name?.toUpperCase()}
              </ButtonTypingPokemon>
            ))}
          </Stack>
          <Stack direction='row' spacing={6} justifyContent='center'>
            {detail.abilities.map((val) => (
              <Typography key={val.ability.name}>
                {val.ability.name.toUpperCase()}
              </Typography>
            ))}
          </Stack>
        </TitleBox>
        <Box sx={{ maxHeight: '150', maxWidth: '150' }}>
          <img
            style={{ height: '146px', width: 'auto', padding: '1px' }}
            src={detail.sprites?.front_default}
            alt='front_default'
          />
        </Box>
      </Stack>
    </Container>
  );
}

export default PokedexDetailContainer;
