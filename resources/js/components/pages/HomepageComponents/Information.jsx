import React, { useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import { maxWidth } from '../../../helper';

const Container = styled.section`
    min-height: 100vh;
    width: 100%;
`;

const Section = styled.div`
    width: 100%;
    position: relative;
    margin: 100px 0px; 
`;

const Content = styled.div`
    max-width: ${maxWidth};
    width: 100%;
    padding: 50px 0px;   
    margin: auto; 
    box-sizing: border-box;
`;

const Background = styled.div`
    height: 100%;
    position: absolute;
    z-index: -2;
    width: 60%;
`;

const RightBackground = styled(Background)`
    right: 0;
    background: ${props => props.background};
    opacity: .5;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
`;

const LeftBackground = styled(Background)`
    left: 0;
    background: ${props => props.background};
    opacity: .5;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    opacity: .3;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%; 
`;

const ServiceContainer = styled.div`
    width: 20%;
    padding: 30px;
    box-sizing: border-box;
    text-align: center;
    background: white;
    border-radius: 16px;
    box-shadow: 14px 14px 120px 0 rgba(154, 154, 154, 0.301);

    h4 {
        font-size: 20px;
        font-weight: bold;
    }


    img {
        width: 50%;
        margin: 0px auto 30px auto;
        display: block;
    }
`;

const CourseContainer = styled.div`
    width: 50%;
    min-height: 400px;
    padding: 20px;
    box-sizing: border-box;
    background: transparent;
    position: relative;
    cursor: pointer;

    &:hover {
        h4 {
            opacity: 1;
        }
    }

    h4 {
        font-size: 24px;
        font-weight: bold;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: bold;
        opacity: 0;
        background: #ffc261e5;
        padding: 50px 30px;
        text-align: center;
        width: 100%;
        transition: opacity .3s ease;
    }


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: 0px 0px 20px 0 rgba(0, 0, 0, 0.2);
        border-radius: 16px;
    }
`;

const InfoContainer = styled.div`
    padding: 50px;
    box-sizing: border-box;

    h2 {
        text-transform: uppercase;
        font-size: 20px;
        margin: 0px;
        color: black;
    }

    h3 {
        font-size: 64px;
        margin-top: 5px;
        margin-bottom: 50px;
        width: 80%;
        color: black;
    }

    p {
        color: black;
        font-size: 18px;
        margin-bottom: 30px;
        opacity: .8;
    }
`;


const Service = ({ title, img }) => (
    <ServiceContainer>

        <img src={"/image/homepage/" + img + ".svg"} alt="" />

        <h4>{title}</h4>
    </ServiceContainer>
)

const Course = ({ title, img }) => (
    <CourseContainer>
        <img src={"/image/homepage/" + img + ".webp"} alt="" />

        <h4>{title}</h4>
    </CourseContainer>
)

function Information() {
    const themeContext = useContext(ThemeContext);
    return (
        <Container>
            <Section>
                <Content>
                    <LeftBackground background={themeContext.darkGreen} />
                    <InfoContainer titleColor={themeContext.darkGreen} subtitleColor={themeContext.lightText}>
                        <h2>bem vindos</h2>
                        <h3>Olá, Sou a Sandra Carvalho EDUCASÉNIOR </h3>

                        <p>Sou Mestre e licenciada em Ciências da Educação - Educação Sénior pela Universidade da Madeira. Possuo o Curso de Informática de Gestão e o Curso de Formador de Formadores. Ao nível dos conteúdos formativos, destaco igualmente o Curso de Criatividade e Espaço Lúdico e o Curso de Instrutores de Danças Sénior.</p>
                        <p>Colaborei com a Universidade da Madeira em algumas ações educativas: "A Animação Sociocultural em contexto sénior" e “Educação Permanente”. Possuo experiência como formadora na área de animação e fui promotora de vários Workshops no âmbito da estimulação cognitiva e motora, recursos musicais para aplicar com idosos e dança coreográfica sentada. Possuo 11 anos de experiência no exercício de funções de Educadora Sénior num Lar de Idosos e Centro de Convívio.</p>
                    </InfoContainer>
                    <FlexContainer>
                        <Service title="Jogos Musicais" img="musicalgames" />
                        <Service title="Dança Coreográfica" img="coreographydancing" />
                        <Service title="Educação Literária" img="literature" />
                    </FlexContainer>
                </Content>
            </Section>
            <Section>
                <Content>
                    <RightBackground background={themeContext.lightYellow} />
                    <InfoContainer titleColor={themeContext.darkGreen} subtitleColor={themeContext.lightText}>
                        <h2>oferta formativa</h2>
                        <h3>Conteúdos disponibilizados </h3>


                    </InfoContainer>
                    <FlexContainer>
                        <Course title="Jogos Musicais na mesa" img="placeholder" />
                        <Course title="Jogos Musicais com balão" img="placeholder" />
                    </FlexContainer>
                </Content>
            </Section>
        </Container>
    )
}

export default Information