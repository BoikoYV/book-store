import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledBox = styled(Box)(() => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  //   [theme.breakpoints.up('dm')]: {},
}));
