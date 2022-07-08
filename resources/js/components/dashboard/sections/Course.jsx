import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from "../../../helper";

const Container = styled.div`
    margin: auto;
    width: 80%;
    max-width: ${maxWidth};
    padding: 50px 0px;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: 900;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;

const VideoContainer = styled.div`
    width: 60%;
    cursor: pointer;

    video {
        width: 100%;
        height: auto;
    }
`;


const VideoList = styled.div`
    width: 40%;
    padding-left: 50px;
    box-sizing: border-box;
`;

const ListItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 20px 0px;
    font-weight: ${props => props.active ? "bold" : "500"};
    

    img {
        width: 20px;
        margin-right: 5px;
        cursor: pointer;
    }

    .video-title {
        flex: 1;
        cursor: pointer;
    }
`;


function Course({ title, id }) {
    const [currentVideo, setCurrentVideo] = useState({ id: 1, title: "Apresentação", duration: "1:31", path: "/video/sessao1/apresentacao.mp4" })

    const videos = [
        { id: 1, title: "Apresentação", duration: "1:31", path: "/video/sessao1/apresentacao.mp4" },
        { id: 2, title: "Círculo  Siciliano", duration: "1:31", path: "/video/sessao1/apresentacao.mp4" },
        { id: 3, title: "Círculo  Siciliano", duration: "1:31", path: "/video/sessao1/apresentacao.mp4" },
        { id: 4, title: "Círculo  Siciliano", duration: "1:31", path: "/video/sessao1/apresentacao.mp4" },
        { id: 5, title: "Círculo  Siciliano", duration: "1:31", path: "/video/sessao1/apresentacao.mp4" },
        { id: 6, title: "Círculo  Siciliano", duration: "1:31", path: "/video/sessao1/apresentacao.mp4" },
        { id: 7, title: "Círculo  Siciliano", duration: "1:31", path: "/video/sessao1/apresentacao.mp4" },
    ]
    return (
        <Container>
            <Title>Dança Coreográfica Sentada</Title>
            <Content>
                <VideoContainer>
                    <video controls>
                        <source src="/video/sessao1/apresentacao.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </VideoContainer>
                <VideoList>
                    10 vídeos (32 min)

                    {videos.map((video) => (
                        <ListItem key={video.id} active={currentVideo.id == video.id}>
                            <img src={currentVideo.id == video.id ? "/icon/pause.svg" : "/icon/play_dashboard.svg"} /><span className="video-title">{video.title}</span><span>{video.duration}</span>
                        </ListItem>
                    ))}
                </VideoList>
            </Content>
        </Container>
    )
}

export default Course