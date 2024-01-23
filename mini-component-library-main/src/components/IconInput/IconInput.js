import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const Input = size === "large" ? LargeInuput : SmallInput;
  return (
    <Wrapper  aria-label={label}>
      <InputIcon id={icon} size={size === "large" ? 24 : 16} strokeWidth={size === "large" ? 2 : 1} />
      <Input type="text" size={size} style={{width}} {...delegated}/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 0px;
`;

const Input = styled.input`  
  border: 0px solid black;

  color: inherit;
  font-family: Roboto;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: 0em;
  text-align: left;

  &:focus {
    color: ${COLORS.black};
    outline-offset: 2px;
    outline: 1px dotted #212121;
    outline: 1px auto -webkit-focus-ring-color;
  }
  &::placeholder {
    color: ${COLORS.gray500};
  }
`;

const LargeInuput = styled(Input)`
  height: 2.25rem;
  border-bottom-width: 2px;
  padding-left: 2.25rem;
  font-size: 1.25rem;
`;
const SmallInput = styled(Input)`
  height: 1.5rem;
  border-bottom-width: 1px;
  padding-left: 1.5rem;
  font-size: 0.875rem;
`;


export default IconInput;
