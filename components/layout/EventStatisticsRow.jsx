import React from "react";
import {
  MainFlexContainer,
  StyledFlexContainer,
  StyledFlexItem,
  StyledMiddleFlexItem,
} from "../styles/FlexCard.styled";

const EventStatisticsRow = () => {
  return (
    <MainFlexContainer>
      <h3>NASLOV</h3>
      <StyledFlexContainer>
        <StyledFlexItem>1</StyledFlexItem>
        <StyledMiddleFlexItem>2</StyledMiddleFlexItem>
        <StyledFlexItem>3</StyledFlexItem>
      </StyledFlexContainer>
    </MainFlexContainer>
  );
};

export default EventStatisticsRow;
