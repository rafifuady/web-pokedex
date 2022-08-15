import {
  Button,
  Stack,
  //styled,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

import { useNavigate } from 'react-router-dom';

// import { BackgroundScreen } from '../common/components/BackgroundScreen';
import { createGradient } from '../common/utils/createGradient';
import { BackgroundScreen } from '../common/components/BackgroundScreen';

// const ButtonAction = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText('#ede6de'),
//   backgroundColor: '#ede6de',
//   '&:hover': {
//     backgroundColor: '#ebe7ca',
//   },
// }));

// const AccentPaper = styled(Paper)(({ theme }) => ({
//   color: theme.palette.getContrastText('#263a52'),
//   backgroundColor: '#263a52',
//   minWidth: '10em',
//   textAlign: 'center',
//   paddingInline: theme.spacing(3),
//   paddingBlock: theme.spacing(2),
// }));

// export const BackgroundScreen = styled(Paper)(({ theme }) => ({
//   color: theme.palette.getContrastText('#ede6de'),
//   backgroundColor: '#ede6de',
//   padding: '1em'
// }));

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Stack direction='row'>
      <Box
        sx={{
          minWidth: '100vw',
          minHeight: '100vh',
          background: createGradient('#ede6de', '#ff3b20'),
        }}
      >
        <Stack
          direction='row'
          p={2}
          sx={{
            minHeight: '50vh',
          }}
          justifyContent='space-around'
          alignItems='center'
          spacing={2}
        >
          <Box
            component='img'
            sx={{
              maxHeight: { xs: 233, md: 333 },
              padding: '2em',
            }}
            alt='Rotom Dex'
            src='/479Rotom-Pokédex.png'
          />
          <Stack
            p={2}
            sx={{
              minHeight: '50vh',
            }}
            direction='column'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
          >
            <BackgroundScreen elevation={5}>
              <Typography variant='h2' sx={{ fontWeight: 500 }}>
                POKEDEX
              </Typography>
            </BackgroundScreen>
            <BackgroundScreen elevation={5}>
              By: Rafi Fuady
              <br />
              github/rafifuady
            </BackgroundScreen>
            <Button
              size='large'
              variant='contained'
              onClick={() => navigate('pokedex')}
            >
              Open
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default LandingPage;
