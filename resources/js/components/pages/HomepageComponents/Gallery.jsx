import React from 'react'
import styled from "styled-components";
import { dimensions, fonts, maxWidth } from '../../../helper';
import Typewriter from 'typewriter-effect';
import { titleStyle } from '../../../styles';
import AnimationContainer from '../../common/AnimationContainer';

const Container = styled.section`
    max-width: ${maxWidth};
    width: 100%;
    margin: auto;
`;

const TypewriterContainer = styled.div`
    position: relative;
    width: 100%;

    margin: 100px 0px;

    @media (max-width: ${dimensions.md}) {
        margin: 50px 0px;
    }

    .Typewriter {
        margin: auto;
        padding: 0px 10px;
        min-height: 120px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.lg}) {
            min-height: 80px;
        }

        @media (max-width: ${dimensions.md}) {
            min-height: 0px;
            padding: 0px;
            margin: 50px auto;
            padding: 0px 20px;
            box-sizing: border-box;
        }

        .Typewriter__wrapper, .Typewriter__cursor {
            ${titleStyle};
        }
    }
`;


const GalleryContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }

    div {
        padding: 10px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.md}) {
            padding: 5px;
        }
    }

    .div1 { grid-area: 1 / 1 / 2 / 3; max-height: 400px;}
    .div2 { grid-area: 1 / 3 / 3 / 4; max-height: 800px;}
    .div3 { grid-area: 2 / 2 / 3 / 3; max-height: 400px;}
    .div4 { grid-area: 2 / 1 / 4 / 2; max-height: 800px;}
    .div5 { grid-area: 3 / 2 / 4 / 4; max-height: 400px;} 

`;


function Gallery() {
    return (
        <Container>
            <TypewriterContainer>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.pasteString('Atividades de estimulação com recurso a ')
                            .typeString('movimento')
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(500)
                            .deleteChars(5)
                            .typeString("ovimento")
                            .pauseFor(500)
                            .deleteChars(8)
                            .typeString("emória")
                            .pauseFor(500)
                            .deleteChars(6)
                            .typeString("úsica")
                            .pauseFor(1000)
                            .start();
                    }}
                />
            </TypewriterContainer>
            <AnimationContainer animation="fadeIn">
                <GalleryContainer>
                    <div className="div1"><img src="/image/homepage/gallery/v.jpg" /> </div>
                    <div className="div2"><img src="/image/homepage/gallery/vii.jpg" /></div>
                    <div className="div3"><img src="/image/homepage/gallery/vi.jpg" /></div>
                    <div className="div4"><img src="/image/homepage/gallery/ix.jpg" /></div>
                    <div className="div5"><img src="/image/homepage/gallery/x.jpg" /></div>
                </GalleryContainer>
            </AnimationContainer>
        </Container>
    )
}

export default Gallery