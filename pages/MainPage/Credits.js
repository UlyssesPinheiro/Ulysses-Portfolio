import React from "react";
import styled from "styled-components";
import FooterWrapper from "../../Components/Sections/Footer/FooterWrapper";
import Color from "../../Components/Defaults/Color";
import SmallButton from "../../Components/Reusables/Buttons/SmallButton";
import BuiltByMe from "../../Components/Sections/Footer/BuiltByMe";
import BuiltWith from "../../Components/Sections/Footer/BuiltWith";
import ImageCredits from "../../Components/Sections/Footer/ImageCredits";
import MediaQuery from "../../Components/Defaults/MediaQuery";
import Font from "../../Components/Defaults/Font";

export default function Credits() {
  return (
    <FooterWrapper color={Color.primary800}>
      <Grid>
        <BuiltWith className="div1" />
        <BuiltByMe className="div2" />
        <ImageCredits className="div3" />
      </Grid>
    </FooterWrapper>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  color: ${Color.white};

  @media (max-width: ${MediaQuery.tablet}) {
    grid-template-columns: 1fr 1fr;
    .div2 {
      order: -1;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    align-items: flex-end;
  }
`;
