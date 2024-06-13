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

    const shareImage = async () => {
        const response = await fetch("nao-trouxeste-preservativo.jpeg");
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
            <LinkContainer>
                <WhatsappShareButton
                    url='https://galeria-xi.vercel.app/nao-trouxeste-preservativo.jpeg'
                >
                    <WhatsappIcon size={48} round />
                </WhatsappShareButton>
                <FacebookMessengerShareButton>
                    <FacebookMessengerIcon size={48} round />
                </FacebookMessengerShareButton>
                <FacebookShareButton
                    url="test">
                    <FacebookIcon size={48} round />
                </FacebookShareButton>
                <TelegramShareButton
                    url="test">
                    <TelegramIcon size={48} round />
                </TelegramShareButton>
                <TwitterShareButton
                    url="test">
                    <TwitterIcon size={48} round />
                </TwitterShareButton>
                <button onClick={shareImage}>Test</button>
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
