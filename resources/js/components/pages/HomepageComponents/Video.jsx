import { Modal } from 'antd';
import React, { useState } from 'react'
import styled, { withTheme } from "styled-components";
import { borderRadius, maxWidth } from '../../../helper';


const Thumbnail = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
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
        background-color: transparent;
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
        width: 100%;
        height: 100%;
        cursor: pointer;
        object-fit: cover;
    }
`;

function Video({ video = "/video/promocional.mp4", thumbnail = "/image/homepage/header.jpg" }) {
    const [videoVisibility, setVideoVisibility] = useState(false)
    return (
        <>

            <Thumbnail onClick={() => setVideoVisibility(true)}>
                <img className='thumbnail' src={thumbnail} />
                <img className='play' src="/icon/play.svg" />
            </Thumbnail>

            <VideoContainer maskStyle={{ background: "rgba(0,0,0,.7)" }} centered width={"80%"} footer={null} visible={videoVisibility} onCancel={() => setVideoVisibility(false)}>
                <video controlsList="nodownload" autoPlay muted controls width="100%" poster={thumbnail}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </VideoContainer>

        </>
    )
}

export default withTheme(Video)