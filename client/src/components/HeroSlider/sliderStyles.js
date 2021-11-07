import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledLink = styled(Link)`
  display: block;
`;

export const SliderWrapper = styled(Box)`
  & .swiper-pagination-bullet {
    border-radius: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    line-height: 30px;
    font-size: 12px;
    opacity: 1;
    background: rgba(255, 185, 0, 0.5);
    display: inline-block;
    margin-right: 8px;
    cursor: pointer;
    transition: 0.2s;

    &-active {
      background: #ffb200;
      width: 25px;
      border-radius: 10px;
    }
  }
`;

export const ImageWrapper = styled(Box)`
  & img {
    width: 100%;
  }
`;
