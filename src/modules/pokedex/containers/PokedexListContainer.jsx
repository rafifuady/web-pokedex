import { Paper } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pokedexActions } from '../_redux/pokedex.actions';

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
        <Paper key={id} sx={{ margin: '2em' }} ref={lastBookElementRef}>
          {val.name}
        </Paper>
      ))}
    </div>
  );
}

export default PokedexListContainer;
