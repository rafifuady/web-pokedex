import { pokedexConstants } from './pokedex.constants';
import { pokedexService } from '../services/pokedexService';

const pokedexServiceInstance = new pokedexService();

const getList = (payload, prevData) => {
  return async (dispatch) => {
    dispatch({
      type: pokedexConstants.LIST_REQUEST,
      payload: {
        isLoading: true,
      },
    });
    const { isError, message, data } = await pokedexServiceInstance.getList(
      payload
    );

    if (data) {
      dispatch({
        type: pokedexConstants.LIST_SUCCESS,
        payload: {
          isLoading: false,
          results: [...new Set([...prevData, ...data.results])],
          count: data.count,
          previous: data.previous,
          next: data.next,
          hasMore: data.count > 0 ? true : false
        },
      });
    } else {
      dispatch({
        type: pokedexConstants.LIST_FAILED,
        payload: {
          isLoading: false,
          isError: isError,
          message: message,
        },
      });
    }
  };
};

export const pokedexActions = {
  getList
}
