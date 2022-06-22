import { Modal } from 'antd';
import React, { useState } from 'react'
import styled, { withTheme } from "styled-components";
import { borderRadius, maxWidth } from '../../../helper';

const Container = styled.section`
    
`;
const Thumbnail = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: 50px auto;
    border-radius: ${borderRadius};
    box-shadow: 0 0 20px 0 rgba(0,0,0,.2);
    cursor: pointer;
    position: relative;

    .thumbnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${borderRadius};
        transition: all .3s ease;
        filter: brightness(.9);
    }

    .play {
        width: 80px;
        height: 80px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        padding: 10px;
        box-sizing: border-box;
        transition: all .3s ease;
    }

    &:hover {
        .play {
            width: 90px;
            height: 90px;
        }
        .thumbnail {
            filter: brightness(.7);
        }

    }
`;

const VideoContainer = styled(Modal)`
    .ant-modal-body{
        padding: 0px;
    }

    .ant-modal-content {
        background-color: transparent;
    }

    video {
        cursor: pointer;
        object-fit: cover;
    }
`;

function Video({ theme }) {
    const [videoVisibility, setVideoVisibility] = useState(false)
    return (
        <Container background={theme.yellow}>

            <Thumbnail onClick={() => setVideoVisibility(true)}>
                <img className='thumbnail' src="/image/homepage/header.jpg" />
                <img className='play' src="/icon/play.svg" />
            </Thumbnail>

            <VideoContainer maskStyle={{ background: "rgba(0,0,0,.8)" }} centered width={"80%"} footer={null} visible={videoVisibility} onCancel={() => setVideoVisibility(false)}>
                <video autoPlay muted controls width="100%" poster="/video/thumbnail.png">
                    <source src="/video/promocional.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </VideoContainer>

        </Container>
    )
}

export default withTheme(Video)