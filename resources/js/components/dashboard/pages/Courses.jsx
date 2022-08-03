import React, { useEffect } from 'react'
import styled, { withTheme } from "styled-components";
import { StyledButton } from '../../../styles';
import { fetchCourses } from "../../../redux/course/actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Row } from 'antd';
import { borderRadius, maxWidth } from '../../../helper';

const Container = styled.div`
 //
`;

const Title = styled.h1`
    font-size: 6vw;
    font-weight: 900;
    text-align: center;
    text-transform: capitalize;
    margin: 0px 0px 100px 0px;
`;

const Course = styled.div`
    width: 40%;
    box-sizing: border-box;
    flex-wrap: wrap;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,.3);
    border-radius: ${borderRadius};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: ${borderRadius};
        border-top-right-radius: ${borderRadius};
    }

    .information {
        width: 100%;
        padding: 30px;
        box-sizing: border-box;

        h3 {
            font-size: 18px;
        }
        h2 {
            font-weight: bold;
            font-size: 28px;
            margin: 0px 0px 20px 0px;
            text-transform: capitalize;
        }
        p {
            font-size: 16px;
            opacity: .7;
        }
    }
`;

const ButtonContainer = styled.div`
    margin: 50px 0px 0px 0px;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    .buy-button {
        margin-left: 15px;
    }
`;

const CourseContainer = styled.div`
    margin: 50px auto;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    max-width: ${maxWidth};
    flex-wrap: wrap;
`;



function Courses({ theme, fetchCourses, data, loading }) {

    useEffect(() => {
        fetchCourses();
    }, [])


    return (
        <Container>
            <Title>oferta formativa</Title>
            <CourseContainer>
                {data.map((course) => (
                    <Course key={course.id}>
                        <img src={course.thumbnail} alt="imagem da sessão" />
                        <div className='information'>

                            <h2>{course.title}</h2>
                            <h3>{course.subtitle}</h3>
                            <p>{course.description}</p>
                            <ButtonContainer>
                                <Link to={"/painel/sessoes/" + course.id}>
                                    <StyledButton >
                                        Saber Mais...
                                    </StyledButton>
                                </Link>
                                {!course.bought &&

                                    <StyledButton className='buy-button' background={theme.background} shadow={theme.blue}>
                                        Adicionar ao carrinho
                                    </StyledButton>
                                }

                            </ButtonContainer>
                        </div>
                    </Course>

                ))}
            </CourseContainer>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCourses: () => dispatch(fetchCourses()),

    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.course.loading,
        data: state.course.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Courses));