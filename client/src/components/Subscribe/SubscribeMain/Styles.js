import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../Footer/FooterMain/StylesBreakpoints';

export const StyledBox = styled(Box)(() => ({
  backgroundColor: '#fbfbfb;',
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    // flexDirection: 'column',
    fontFamily: 'CeraPro Regular',
    // justifyContent: 'space-around',
  },
  //   [theme.breakpoints.up('dm')]: {},
}));
