import { styled, Paper } from '@mui/material';

export const BackgroundScreen = styled(Paper)(({ theme }) => ({
  color: theme.palette.getContrastText('#ede6de'),
  backgroundColor: '#ede6de',
  padding: '1em'
}));
