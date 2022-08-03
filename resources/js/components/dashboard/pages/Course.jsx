import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from "../../../helper";

const Container = styled.div`
    margin: auto;
`;

const Title = styled.h1`
    font-size: 6vw;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    line-height: 100px;
    margin: 0px 0px 100px 0px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin: 0px auto 100px auto;
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
    padding-left: 30px;
    box-sizing: border-box;
`;

const ListItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 20px 0px;
    font-weight: ${props => props.active ? "bold" : "500"};

    &:hover {
        font-weight: bold;
    }
    

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

const TotalVideos = styled.div`
    margin-bottom: 50px;
`;

function Course({ title, id }) {
    const [currentVideo, setCurrentVideo] = useState({ id: 1, title: "Apresentação", duration: "1:53", path: "/video/sessao1/apresentacao.mp4" })

    const videos = [
        { id: 1, title: "Apresentação", duration: "1:53", path: "/video/sessao1/apresentacao.mp4" },
        { id: 2, title: "Balaio", duration: "5:00", path: "/video/sessao1/balaio.mp4" },
        { id: 3, title: "Círculo Siciliano", duration: "3:47", path: "/video/sessao1/apresentacao.mp4" },
        { id: 4, title: "Drei Temperamente", duration: "6:50", path: "/video/sessao1/apresentacao.mp4" },
        { id: 5, title: "Glencastle Polka", duration: "5:40", path: "/video/sessao1/apresentacao.mp4" },
        { id: 6, title: "Minoesjka", duration: "5:28", path: "/video/sessao1/apresentacao.mp4" },
        { id: 7, title: "Rosa Amarela", duration: "5:26", path: "/video/sessao1/apresentacao.mp4" },
        { id: 8, title: "STEP PLEASE", duration: "6:03", path: "/video/sessao1/apresentacao.mp4" },
        { id: 9, title: "Syncopated-clock", duration: "6:10", path: "/video/sessao1/apresentacao.mp4" },
        { id: 10, title: "Troika", duration: "3:41", path: "/video/sessao1/apresentacao.mp4" },
        { id: 11, title: "The Chimes of Dunkirk", duration: "6:13", path: "/video/sessao1/apresentacao.mp4" },
    ]
    return (
        <Container>
            <Title>Dança Coreográfica Sentada</Title>
            <Content>
                <VideoContainer key={currentVideo.id}>
                    <video controls>
                        <source src={currentVideo.path} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </VideoContainer>
                <VideoList>
                    <TotalVideos>{videos.length} vídeos (57 min)</TotalVideos>

                    {videos.map((video) => (
                        <ListItem onClick={() => setCurrentVideo(video)} key={video.id} active={currentVideo.id == video.id}>
                            <img src={currentVideo.id == video.id ? "/icon/pause.svg" : "/icon/play_dashboard.svg"} /><span className="video-title">{video.title}</span><span>{video.duration}</span>
                        </ListItem>
                    ))}
                </VideoList>
            </Content>
        </Container>
    )
}

export default Course