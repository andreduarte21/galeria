import React from 'react'
import styled from "styled-components";
import {
    WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
} from "react-share";

const Footer = (images, index) => {
    async function handleOnSubmit() {
        const response = await fetch(images[index].src);
        const blob = await response.blob();
        const file = new File([blob], 'share.jpeg', { type: blob.type });
        if (navigator.share) {
            await navigator.share({
                files: [file]
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error in sharing', error));
        } else {
            console.log(`system does not support sharing files.`);
        }
    }

    return (
        <StyledFooter>
            <LinkContainer>
                <WhatsappIcon size={48} round onClick={handleOnSubmit} style={{ cursor: 'pointer' }} />
                <FacebookMessengerIcon size={48} round />
                <FacebookIcon size={48} round />
                <TelegramIcon size={48} round />
                <TwitterIcon size={48} round />
            </LinkContainer>
        </StyledFooter>
    )
}

export default Footer


const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 0;
  background: rgb(0, 0, 0, 0.25);
  border-radius: 16px;
  width: 50%;
  padding: 10px
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0px 20px;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.pageBackgroundColor};
  color: ${({ theme }) => theme.pageContentFontColor};
`;