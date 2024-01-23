import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <SelectFront>
        {displayedValue}
        <Icon id="chevron-down" strokeWidth={2} size={16}></Icon>
      </SelectFront>
    </SelectWrapper>
  );
};

const SelectElement = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const SelectWrapper = styled.div`
  width: max-content;
  height: 43px;
  position: relative;

  background: ${COLORS.transparentGray15};
  border-width: 0;
  border-radius: 8px;
  padding: 12px 10px 12px 16px;

  color: ${COLORS.gray700};
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  &:has(${SelectElement}:focus) {
    outline: 1px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
  }

  &:has(${SelectElement}:hover) {
    color: ${COLORS.black};
  }
`;

const SelectFront = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 18px;
`;

export default Select;
