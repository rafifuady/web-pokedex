import { combineReducers } from 'redux';
import { default as pokedex } from '../../modules/pokedex/_redux/pokedex.reducer';
/**
 * please make constant and action per module
 */

export const rootReducer = combineReducers({
  pokedex,
});
