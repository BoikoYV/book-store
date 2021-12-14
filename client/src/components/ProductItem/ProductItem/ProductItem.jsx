import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookImg from '../BookImg/BookImg';
import BookName from '../BookName';
import BookAuthor from '../BookAuthor';
import BookPrice from '../BookPrice';
import CartBtn from '../CartBtn';
import { StyledLink, StyledCardGrid, StyledItem } from './Styles';
import defaultimg from '../../../img/missing_image.jpg';

const ProductItem = ({
  name,
  url,
  price,
  author,
  salePrice,
  itemNo,
  categories,
  authorId,
  fromAuthor,
}) => {
  return (
    <StyledItem>
      <StyledLink
        as={Link}
        to={`/products/${itemNo}`}
        aria-label='move to book page'
      >
        <BookImg
          url={url}
          name={name}
          categories={categories}
          itemNo={itemNo}
          salePrice={salePrice}
        />
      </StyledLink>
      <BookName name={name} itemNo={itemNo} />
      <StyledCardGrid>
        {!fromAuthor && <BookAuthor authorId={authorId} author={author} />}
        <BookPrice price={price} salePrice={salePrice} />
        <CartBtn itemNo={itemNo} />
      </StyledCardGrid>
    </StyledItem>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  author: PropTypes.string,
  url: PropTypes.string,
  salePrice: PropTypes.number,
  itemNo: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  authorId: PropTypes.string,
  fromAuthor: PropTypes.bool,
};

ProductItem.defaultProps = {
  url: defaultimg,
  salePrice: null,
  author: '',
  authorId: '',
  fromAuthor: false,
};

export default ProductItem;
