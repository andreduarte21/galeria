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

const Footer = (images) => {

    const imagesArray = images.images
    const imageIndex = images.index

    const shareImage = async () => {
        const response = await fetch(imagesArray[imageIndex].src);
        console.log(response)
        const blob = await response.blob();
        const file = new File([blob], 'share.jpeg', { type: 'image/jpeg' });

        const shareData = {
            files: [file]
        };

        if (navigator.canShare && navigator.canShare(shareData)) {
            await navigator.share(shareData)
        } else {
            console.error("Browser not supported")
        }
    }

    return (
        <StyledFooter>
            <button className='button-share' onClick={shareImage}>Partilha esta imagem nas Redes Sociais</button>
        </StyledFooter>
    )
}

export default Footer

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
