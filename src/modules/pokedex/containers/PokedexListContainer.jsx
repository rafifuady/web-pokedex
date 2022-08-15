import { CircularProgress, Container, Paper, Typography, styled, ButtonBase } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonTypingPokemon from '../../../common/components/ButtonTypingPokemon';
import { pokedexActions } from '../_redux/pokedex.actions';
import { BackgroundScreen } from '../../../common/components/BackgroundScreen';

const PokemonCard = styled(ButtonBase)(({ theme }) => ({
  width: '100%',
  minHeight: '10vh',
  color: theme.palette.getContrastText('#ede6de'),
  backgroundColor: '#ede6de',
  '&:hover': {
    backgroundColor: '#ebe7ca',
  },
  paddingInline: theme.spacing(2),
}));

function PokedexListContainer() {
  const pokedex = useSelector((state) => state.pokedex);
  const dispatch = useDispatch();
  const observer = useRef();

  const [pageNumber, setPageNumber] = useState(0);

  const lastBookElementRef = useCallback(
    (node) => {
      if (pokedex.isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pokedex.hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [pokedex.isLoading, pokedex.hasMore]
  );

  useEffect(() => {
    dispatch(
      pokedexActions.getList(
        {
          limit: 20,
          offset: pageNumber * 20,
        },
        pokedex.results
      )
    );
  }, [pageNumber]);

  return (
    <div>
      {pokedex.results.map((val, id) => (
        <BackgroundScreen
          key={id}
          sx={{ margin: '2em' }}
          ref={lastBookElementRef}
          onClick={() => dispatch(pokedexActions.getDetail(val.name))}
        >
          <PokemonCard>
            <Container>
              <Typography component='div'>{id+1}</Typography>
            </Container>
            <Container>
              <Typography component='div'>{val.name.toUpperCase()}</Typography>
            </Container>
          </PokemonCard>
        </BackgroundScreen>
      ))}
      {pokedex.isLoading && <CircularProgress />}
    </div>
  );
}

export default PokedexListContainer;
