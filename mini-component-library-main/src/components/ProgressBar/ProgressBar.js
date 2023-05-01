import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const ProgressBar = ({ value, size = "large" }) => {
  const Wrapper =
    size === "large" ? ProgressBarLargeComponent : ProgressBarComponent;
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={SIZES[size]}
    >
      <ProgressBarValue value={value}></ProgressBarValue>
    </Wrapper>
  );
};

const ProgressBarComponent = styled.div`
  border-radius: 4px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressBarLargeComponent = styled(ProgressBarComponent)`
  border-radius: 8px;
  padding: 4px;
`;

const SIZES = {
  large: { "--progress-bar-value-height": "16px" },
  medium: { "--progress-bar-value-height": "12px" },
  small: { "--progress-bar-value-height": "8px" },
};

const ProgressBarValue = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px;
  height: var(--progress-bar-value-height);
  clip-path: inset(0 ${(props) => 100 - props.value}% 0 0);
`;

export default ProgressBar;
