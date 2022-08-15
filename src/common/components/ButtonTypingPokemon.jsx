import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function ButtonTypingPokemon({ type, ...props }) {
  let styleTyping = {};
  switch (type) {
    case 'normal':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#aa9',
        '&:hover': {
          backgroundColor: '#aa9',
        },
        color: 'white !important',
      };
      break;
    case 'fire':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#f42',
        '&:hover': {
          backgroundColor: '#f42',
        },
        color: 'white !important',
      };
      break;
    case 'water':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#39f',
        '&:hover': {
          backgroundColor: '#39f',
        },
        color: 'white !important',
      };
      break;
    case 'electric':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#fc3',
        '&:hover': {
          backgroundColor: '#fc3',
        },
        color: 'white !important',
      };
      break;
    case 'grass':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#7c5',
        '&:hover': {
          backgroundColor: '#7c5',
        },
        color: 'white !important',
      };
      break;
    case 'ice':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#6cf',
        '&:hover': {
          backgroundColor: '#7c5',
        },
        color: 'white !important',
      };
      break;
    case 'fighting':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#b54',
        '&:hover': {
          backgroundColor: '#b54',
        },
        color: 'white !important',
      };
      break;
    case 'poison':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#a59',
        '&:hover': {
          backgroundColor: '#a59',
        },
        color: 'white !important',
      };
      break;
    case 'ground':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#db5',
        '&:hover': {
          backgroundColor: '#db5',
        },
        color: 'white !important',
      };
      break;
    case 'flying':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#89f',
        '&:hover': {
          backgroundColor: '#89f',
        },
        color: 'white !important',
      };
      break;
    case 'psychic':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#f59',
        '&:hover': {
          backgroundColor: '#f59',
        },
        color: 'white !important',
      };
      break;
    case 'bug':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#ab2',
        '&:hover': {
          backgroundColor: '#ab2',
        },
        color: 'white !important',
      };
      break;
    case 'rock':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#ba6',
        '&:hover': {
          backgroundColor: '#ba6',
        },
        color: 'white !important',
      };
      break;
    case 'ghost':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#66b',
        '&:hover': {
          backgroundColor: '#66b',
        },
        color: 'white !important',
      };
      break;
    case 'dragon':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#76e',
        '&:hover': {
          backgroundColor: '#76e',
        },
        color: 'white !important',
      };
      break;
    case 'dark':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#754',
        '&:hover': {
          backgroundColor: '#754',
        },
        color: 'white !important',
      };
      break;
    case 'steel':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#aab',
        '&:hover': {
          backgroundColor: '#aab',
        },
        color: 'white !important',
      };
      break;
    case 'fairy':
      styleTyping = {
        minWidth: '7em',
        backgroundColor: '#e9e',
        '&:hover': {
          backgroundColor: '#e9e',
        },
        color: 'white !important',
      };
      break;
    default:
      styleTyping = {};
  }
  return <Button disableRipple sx={styleTyping} {...props} />;
}

ButtonTypingPokemon.propTypes = {
  type: PropTypes.string.isRequired
}

export default ButtonTypingPokemon;
