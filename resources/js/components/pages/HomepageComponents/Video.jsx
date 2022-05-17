import { Row } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import { maxWidth } from '../../../helper';

const Container = styled.section`
    background-color: ${props => props.background};
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    padding: 100px 0px;
`;


const InformationContainer = styled.div`
    width: 50%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        margin-top: 150px;
        font-size: 40px;
        color: white;
        font-family: 'Playfair Display', serif;
    }

    p {
        font-size: 22px;
        opacity: .7;
        width: 80%;
        font-family: 'IBM Plex Serif', serif;
    }
`;

const VideoContainer = styled.div`
    width: 50%;

    video {
        cursor: pointer;
    }
`;

const Button = styled.div`

    span {
        text-transform: uppercase;
        color: white;
        padding: 10px 20px;
        background-color: rgba(255,255,255,.4);
        border-radius: 16px;
        flex: 1;
        display: inline;
    }
    
`;

function Video({ theme }) {
    return (
        <Container background={theme.darkGreen}>
            <Content>
                <Row type="flex" justify='space-around'>
                    <InformationContainer>
                        <Button><span>vídeo de apresentação</span></Button>
                        <div>
                            <h3>Meu título customizado</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ratione adipisci expedita necessitatibus?</p>
                        </div>
                    </InformationContainer>
                    <VideoContainer>
                        <video width="100%" controls poster="/image/homepage/apresentacao.png">
                            <source src="/image/homepage/apresentacao.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </VideoContainer>
                </Row>
            </Content>
        </Container>
    )
}

export default withTheme(Video)