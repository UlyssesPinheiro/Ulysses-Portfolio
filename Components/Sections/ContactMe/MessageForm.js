import React from "react";
import Color from "../../Defaults/Color";
import styled from "styled-components";
import SmallButton from "../../Reusables/Buttons/SmallButton";
import Font from "../../Defaults/Font";
import PaperPlane from "../../Reusables/Icons/PaperPlane";
import PaperClip from "../../Reusables/Icons/PaperClip";
import MediaQuery from "../../Defaults/MediaQuery";
import { useState } from "react";

export default function MessageForm() {
  const [fileName, setFileName] = useState(<></>);
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    setFileName(<p>{fileUploaded?.name}</p>);
  };

  return (
    <FormOuterContainer>
      <FormContainer action="POST" data-netlify="true" className="form">
        <div className="field">
          <p>Your Email Address:</p>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="name@domain.com"
          />
        </div>
        <div className="field">
          <p>Message:</p>
          <textarea
            name="message"
            className="input messageField"
            placeholder="Write something nice here!"
          />
        </div>
        <div className="buttonSend">
          <SmallButton
            type="button"
            onClick={handleClick}
            color="light"
            icon={<PaperClip className="icon" fill={Color.white} />}
          >
            File
          </SmallButton>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }}
          />
          {fileName}
          <div className="rightButton">
            <SmallButton
              icon={<PaperPlane className="icon" fill={Color.white} />}
            >
              Send
            </SmallButton>
          </div>
        </div>
      </FormContainer>
    </FormOuterContainer>
  );
}

const FormOuterContainer = styled.div`
  padding: 2.5rem;

  @media (max-width: ${MediaQuery.notebook}) {
    padding: 1.7rem;
  }

  @media (max-width: ${MediaQuery.tablet}) {
    height: 27rem;
  }
  @media (max-width: ${MediaQuery.smartphone}) {
    height: 25rem;
    padding: 0;
  }
`;

const FormContainer = styled.form`
  box-shadow: 0 5px 30px ${Color.shadow};
  border-radius: 1rem;
  display: grid;
  grid-template-rows: auto 1fr;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 0.8rem;
  height: 100%;

  .buttonSend {
    display: flex;
    position: relative;
    justify-content: flex-start;
    gap: 0.5rem;

    .rightButton {
      position: absolute;
      right: 0;
      overflow: hidden;
    }
    p {
      align-self: center;
      font-size: ${Font.size[0] + "px"};
      overflow: hidden;
      line-height: 1rem;
      max-height: 2rem;
      max-width: 20rem;
      color: ${Color.primary700};

      @media (max-width: ${MediaQuery.smartphone}) {
        max-width: 5rem;
      }
    }
  }

  @media (max-width: ${MediaQuery.notebook}) {
    padding: 0.8rem 1.3rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    width: 1fr;

    p {
      color: ${Color.primary700};
    }

    .input {
      border: 1px solid ${Color.primary500};
      padding: 0.5rem;
      border-radius: 0.5rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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

    @media (max-width: ${MediaQuery.notebook}) {
      font-size: ${Font.size[2] + "px"};
      .input {
        font-size: ${Font.size[2] + "px"};
      }
    }
  }
`;
