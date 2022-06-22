import React from "react";
import Color from "../../Defaults/Color";
import styled from "styled-components";
import SmallButton from "../../Reusables/Buttons/SmallButton";
import Font from "../../Defaults/Font";
import PaperPlane from "../../Reusables/Icons/PaperPlane";

export default function MessageForm() {
  return (
    <FormOuterContainer>
      <FormContainer className="form">
        <InputField>
          <p>Your Email Address:</p>
          <input className="input" />
        </InputField>
        <InputField>
          <p>Message:</p>
          <textarea className="input messageField" />
        </InputField>
        <div className="buttonSend">
          <SmallButton icon={<PaperPlane fill={Color.white} />}>
            Send
          </SmallButton>
        </div>
      </FormContainer>
    </FormOuterContainer>
  );
}

const FormOuterContainer = styled.div`
  padding: 2.5rem;
`;

const FormContainer = styled.div`
  box-shadow: 0 5px 30px ${Color.shadow};
  border-radius: 1rem;
  display: grid;
  grid-template-rows: auto 1fr;
  flex-direction: column;
  padding: 1.5rem;
  gap: 0.8rem;
  height: 100%;

  .buttonSend {
    display: flex;
    justify-content: flex-end;
  }
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${Color.primary700};
  }

  .input {
    border: 1px solid ${Color.primary500};
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: ${Font.size[3] + "px"};
    color: ${Color.gray700};
  }

  .input:focus {
    outline: 1px solid ${Color.primary700};
    border: 1px solid ${Color.primary700};
  }

  .messageField {
    height: 100%;
    resize: none;
  }
`;
