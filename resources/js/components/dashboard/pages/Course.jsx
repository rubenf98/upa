import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { dimensions, fonts, maxWidth } from "../../../helper";
import { fetchCourse } from "../../../redux/course/actions";
import { connect } from "react-redux";
import {
    useParams
} from "react-router-dom";
import {
    fetchVideo, downloadInstructions, downloadAudio
} from "../../../redux/media/actions";
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    margin: auto;
    position: relative;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InfoContainer = styled.div`
    margin-left: 20%;

    h1 {
        font-size: 16px;
        font-family: ${fonts.title};
        text-transform: capitalize;
        margin: 20px 0px 10px 0px;
    }

    h2 {
        font-size: 40px;
        font-family: ${fonts.title};
        text-transform: capitalize;
        margin: 0px 0px 30px 0px;
        line-height: 33px;
    }
    
    p {
        opacity: .7;    
        font-size: 16px;
        margin-top: 0px ;
    }

    .separator {
        width: 3px;
        height: 3px;
        background-color: black;
        border-radius: 3px;
        display: inline-block;
        margin: 0px 3px 3px 3px;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    max-width: ${maxWidth};
    margin: 0px auto 0px auto;
    padding: 50px 0px 0px 0px;
    box-sizing: border-box;
`;

const VideoContainer = styled.div`
    width: 60%;

    video {
        width: 100%;
        height: auto;
        padding: 0px 0px 0px 40px;
        box-sizing: border-box;
    }
`;


const VideoList = styled.div`
    width: 40%;
    padding: 0px 30px 30px 0px;
    box-sizing: border-box;
    max-height: calc(100vh - 140px);
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    h2 {
        font-size: 40px;
        font-family: ${fonts.title};
        text-transform: capitalize;
        line-height: 33px;
    }
`;

const ListItem = styled.div`
    width: 100%;
    display: flex;
    align-items: space-between;
    align-items: center;
    margin: 20px 0px;
    background-color: white;
    max-height: 80px;
    font-weight: ${props => props.active ? "bold" : "500"};
    padding-right: 10px;
    box-sizing: border-box;

    .thumbnail {
        height: 100%;
        max-height: 80px;
        width: auto;
        margin-right: 10px;
    }

    .control {
        width: 20px;
        margin-right: 5px;
        cursor: pointer;
    }

    .information {
        flex: 1;

        h3, p {
            margin: 0px;
        }
        p {
            opacity: .6;
        }

        .separator {
            width: 3px;
            height: 3px;
            background-color: black;
            border-radius: 3px;
            display: inline-block;
            margin: 0px 3px 3px 3px;
        }
    }
`;

const TotalVideos = styled.div`
    margin-bottom: 50px;
`;

const Background = styled.div`
    width: 50vw;
    height: calc(100vh - 100px);
    background: ${props => props.background};
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
`;


const DownloadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 10px 0px 0px 0px;

    .spacer {
        margin-left: 20px;
    }

    div {
        padding: 8px 16px;
        box-sizing: border-box;
        border: 1px solid #777;
        cursor: pointer;
        font-size: 16px;
        opacity: .7;
        transition: all .3s ease;
        display: flex;
        align-items: center;

        &:hover {
            opacity: 1;
            border: 1px solid #000;
        }

        img {
            margin-left: 5px;
            width: 15px;
        }
    }

    
`;



function Course({ course, theme, fetchCourse, downloadInstructions, downloadAudio }) {
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [currentVideo, setCurrentVideo] = useState(
        { index: 1, id: 1, title: "Introdução", filename: "0" + id + "_introduction", video_duration: 1.53, presentation: true }
    )
    var navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchCourse(id).then((response) => {
                if (!response.action.payload.data.data.bought) {
                    navigate("/painel/sessoes")
                }
                setCurrentVideo(response.action.payload.data.data.content[0]);
                setLoading(false);
            });
        }
    }, [id])


    return (
        <Container>
            {loading ? <h2>loading</h2> :
                <>

                    <Background background={theme.opacityLightAccent} />
                    <Content>

                        <VideoList>
                            <h2>Conteúdo da sessão</h2>
                            <TotalVideos>{course.content.length} vídeos (00:57 mins)</TotalVideos>

                            {course.content.map((video, index) => (
                                <ListItem onClick={() => setCurrentVideo({ ...video, index: index + 1 })} key={video.id} active={currentVideo.id == video.id}>
                                    <img loading="eager" className="thumbnail" src={'/image/thumbnail/' + video.filename + ".jpg"} />
                                    <div className="information">
                                        <h3 >{video.title}</h3>
                                        <p>Aula {index + 1} de {course.content.length} <span className="separator" /> {video.video_duration >= 10 ? "" : "0"}{Number(video.video_duration).toFixed(2)} mins</p>
                                    </div>

                                    <img className="control" src={currentVideo.id == video.id ? "/icon/pause.svg" : "/icon/play_dashboard.svg"} />
                                </ListItem>
                            ))}
                        </VideoList>
                        <VideoContainer key={currentVideo.id}>
                            <video preload="auto" poster={'/image/thumbnail/' + currentVideo.filename + ".jpg"} controls>
                                <source src={'/video/courses/' + currentVideo.filename + ".mp4"} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <InfoContainer>
                                <DownloadContainer>
                                    {currentVideo.has_instructions ? <div onClick={() => downloadInstructions(currentVideo.filename)}>Instruções<img src="/icon/download2.svg" /></div> : <></>}
                                    {currentVideo.has_audio ? <div onClick={() => downloadAudio(currentVideo.filename)} className="spacer">Aúdio<img src="/icon/download2.svg" /></div> : <></>}
                                </DownloadContainer>


                                <h1>Dança Coreográfica Sentada</h1>
                                <p>Aula {currentVideo.index ? currentVideo.index : 1} de {course.content.length} <span className="separator" /> {currentVideo.video_duration >= 10 ? "" : "0"}{Number(currentVideo.video_duration).toFixed(2)} mins</p>
                                <h2>{currentVideo.index < 10 && "0"}{currentVideo.index ? currentVideo.index : 1}. {currentVideo.title}</h2>



                            </InfoContainer>

                        </VideoContainer>
                    </Content>
                </>
            }
        </Container>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchCourse: (id) => dispatch(fetchCourse(id)),
        fetchVideo: (filename) => dispatch(fetchVideo(filename)),
        downloadInstructions: (filename) => dispatch(downloadInstructions(filename)),
        downloadAudio: (filename) => dispatch(downloadAudio(filename))
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.course.loading,
        course: state.course.current,
        reduxVideo: state.media.video
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Course));