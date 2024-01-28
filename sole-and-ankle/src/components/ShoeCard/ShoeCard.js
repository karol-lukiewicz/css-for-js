import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const PriceComponent = variant === "on-sale" ? PriceWithStrikethrough : Price;
  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          {variant === 'new-release' ? <JustReleaseFlag>Just Released!</JustReleaseFlag> : null}
          {variant === 'on-sale' ? <SaleFlag>Sale</SaleFlag> : null}
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <PriceComponent variant={variant}>{formatPrice(price)}</PriceComponent>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {variant === "on-sale" ? (
            <SalePrice>{formatPrice(salePrice)}</SalePrice>
          ) : null}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1 342px;
`;

const Wrapper = styled.article``;

const Flag = styled.span`
  position: absolute;
  right: -4px;
  top: 12px;
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  border-radius: 2px;
  
  font-size: 14px;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
`;

const JustReleaseFlag = styled(Flag)`
  background: #6868D9;
`;

const SaleFlag = styled(Flag)`
  background: #C5295D;

`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``

const PriceWithStrikethrough = styled(Price)`
  color: ${COLORS.gray[700]};
  text-decoration: line-through;
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
