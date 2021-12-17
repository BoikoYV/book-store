import React from 'react';
import {
  TableHead,
  Table,
  TableBody,
  useMediaQuery,
  TableRow,
} from '@mui/material';
import { useSelector } from 'react-redux';
import {
  StyledTableCellHead,
  StyledTableContainer,
  StyledTableRow,
  StyledTableTitle,
} from './Styled';
import theme from '../../../services/theme/theme';
// import Ebook from '../../icons/ElBookIcon';
// import CartonBook from '../../icons/PaperBookIcon';
// import AudioBook from '../../icons/AudioBookIcon';
import CartItem from '../CartItem/CartItem';

const CartProducts = () => {
  const orders = useSelector((data) => data.shoppingCart);
  // const [img, setImg] = useState(
  //   <Ebook width='24px' height='28px' fill='#000000' />,
  // );

  const collapseTableColumn = useMediaQuery(theme.breakpoints.up('md'));

  // const handleChange = (value) => {
  //   if (value.target.value === 1) {
  //     setImg(<Ebook width='24px' height='28px' fill='#000000' />);
  //   }
  //   if (value.target.value === 2) {
  //     setImg(<CartonBook width='24px' height='28px' fill='#000000' />);
  //   }
  //   if (value.target.value === 3) {
  //     setImg(<AudioBook width='24px' height='28px' fill='#000000' />);
  //   }
  // };

  const items = orders.map((cartItem) => (
    <CartItem cartItem={cartItem} key={cartItem.itemNo} />
  ));

  return (
    <StyledTableContainer>
      <Table
        sx={{ borderCollapse: 'separate' }}
        size='small'
        aria-label='a dense table'
      >
        <TableHead sx={{ borderCollapse: 'separate' }}>
          <StyledTableRow>
            <StyledTableCellHead align='left'>Products</StyledTableCellHead>
            {/* {collapseTableColumn && (
              <StyledTableCellHead align='center'>Format</StyledTableCellHead>
            )} */}
            {collapseTableColumn && (
              <StyledTableCellHead align='center'>Price</StyledTableCellHead>
            )}
            <StyledTableCellHead sx={{ minWidth: '80px' }} align='center'>
              Quantity
            </StyledTableCellHead>
            <StyledTableCellHead align='center'>Total</StyledTableCellHead>
            <StyledTableCellHead align='center'>Delete</StyledTableCellHead>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {orders.length ? (
            items
          ) : (
            <TableRow sx={{ position: 'relative' }}>
              <StyledTableTitle colSpan={5}>
                Your shopping cart is empty
              </StyledTableTitle>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default CartProducts;