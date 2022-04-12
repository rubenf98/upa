import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 40px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    margin: 50px auto;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;

    a {
        width: 20vw;
        height: 20vw;
        position: relative;
        background-color: black;

        &:hover {
            .instagram-logo {
                display: block;
            }

            .overlay {
                opacity: .5;
            }

        }

        .instagram-post {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .overlay {
            background: black;
            opacity: 0;
            position: absolute;
            top: 0px;bottom: 0px; left: 0px; right: 0px;
            transition: opacity .3s ease;
        }

        .instagram-logo {
            width: 30px;
            height: 30px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            display: none;
        }
    }

    
`;
const items = [
    { src: "instagram1.jpg", url: "https://www.instagram.com/p/CZkhqsQKliS/" },
    { src: "instagram2.jpg", url: "https://www.instagram.com/p/CZSTQ7AKY0T/" },
    { src: "instagram3.jpg", url: "https://www.instagram.com/p/CYB9Fq7KzdE/" },
    { src: "instagram4.jpg", url: "https://www.instagram.com/p/CYoiGbjKdFV/" },
    { src: "instagram5.jpg", url: "https://www.instagram.com/p/CX3jkZ8qZWC/" },
]


function Instagram() {
    return (
        <section>
            <Title>
                Follow us on Instagram
            </Title>

            <FlexContainer>
                {items.map((item) => (
                    <a href={item.url} target="_blank" rel="noreferrer">
                        <div className='overlay' />
                        <img className='instagram-post' src={"/image/homepage/" + item.src} alt="instagram post" />
                        <img className='instagram-logo' src="/icon/instagram.png" alt="" />
                    </a>
                ))}

            </FlexContainer>
        </section>
    )
}

export default Instagram