import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import theme from '../../../services/theme/theme';
import { StyledBookNameText } from '../../ProductItem/BookName/Styles';

export const StyledPromoTitle = styled(StyledBookNameText)`
  margin-bottom: 10px;
  -webkit-line-clamp: 1;
  min-height: auto;
  font-size: 24px;
  line-height: 24px;
  overflow: visible;
  // margin: 0 auto;
  color: ${theme.palette.text.main};
`;

export const StyledImageLink = styled(Link)`
  margin-bottom: 20px;
  display: block;
`;

export const StyledBooksLink = styled(Link)(() => ({
  color: [theme.palette.primary.main],
  textDecoration: 'none',
  transition: '0.3s linear',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const StyledItem = styled('li')`
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled('p')`
  color: ${theme.palette.text.primary};
  // margin: 0 auto;
`;
