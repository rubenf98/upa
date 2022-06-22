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
    width: 100%;
    padding: 0px 200px;
    box-sizing: border-box;
`;

const Background = styled.div`
    height: 100%;
    position: absolute;
    z-index: -1;
    width: 60%;
`;

const RightBackground = styled(Background)`
    right: 0;
    background: ${props => props.background};
`;

const LeftBackground = styled(Background)`
    left: 0;
    background: ${props => props.background};

`;

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%; 
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
        background: #ffd84be4;
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
    color: ${props => props.textColor};
    h2 {
        text-transform: uppercase;
        font-size: 26px;
        margin: 0px;
        color: inherit;
    }

    h3 {
        font-size: 72px;
        margin-top: 5px;
        margin-bottom: 50px;
        color: inherit;
        font-weight: 900;
    }

    p {
        color: inherit;
        font-size: 20px;
        margin-bottom: 30px;
        opacity: .9;
    }
`;

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
                    <LeftBackground background={themeContext.blue} />
                    <InfoContainer textColor={themeContext.text}>
                        <h2>bem vindos</h2>
                        <h3>Olá, Sou a Sandra Carvalho EDUCASÉNIOR </h3>

                        <p>Sou Mestre e licenciada em Ciências da Educação - Educação Sénior pela Universidade da Madeira. Possuo o Curso de Informática de Gestão e o Curso de Formador de Formadores. Ao nível dos conteúdos formativos, destaco igualmente o Curso de Criatividade e Espaço Lúdico e o Curso de Instrutores de Danças Sénior.</p>
                        <p>Colaborei com a Universidade da Madeira em algumas ações educativas: "A Animação Sociocultural em contexto sénior" e “Educação Permanente”. Possuo experiência como formadora na área de animação e fui promotora de vários Workshops no âmbito da estimulação cognitiva e motora, recursos musicais para aplicar com idosos e dança coreográfica sentada. Possuo 11 anos de experiência no exercício de funções de Educadora Sénior num Lar de Idosos e Centro de Convívio.</p>
                    </InfoContainer>
                </Content>
            </Section>
            <Section>
                <Content>
                    <RightBackground background={themeContext.blue} />
                    <InfoContainer textColor={themeContext.text}>
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