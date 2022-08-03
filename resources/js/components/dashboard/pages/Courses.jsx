import React, { useEffect } from 'react'
import styled, { withTheme } from "styled-components";
import { StyledButton } from '../../../styles';
import { fetchCourses } from "../../../redux/course/actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
 //
`;

const Title = styled.h1`
    font-size: 7vw;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    line-height: 100px;
    margin: 0px 0px 150px 0px;
`;

const Course = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: flex;
    width: 85%;
    margin: auto;
    margin-bottom: 100px;

    img {
        width: 50%;
    }

    .information {
        width: 50%;
        padding: 0px 30px;
        box-sizing: border-box;

        h3 {
            font-weight: bold;
            font-size: 24px;
        }
        h2 {
            font-weight: bold;
            font-size: 90px;
            margin: 0px 0px 50px 0px;
            line-height: 92px;
        }
        p {
            font-size: 20px;
        }
    }
`;

const ButtonContainer = styled.div`
    margin: 50px 0px;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    .buy-button {
        margin-left: 15px;
    }
`;

const CustomLink = styled(Link)`
    color: white;

    &:hover {
        color: white;
    }
`;


function Courses({ theme, fetchCourses, data, loading }) {

    useEffect(() => {
        fetchCourses();
    }, [])


    return (
        <Container>
            <Title>oferta formativa</Title>
            {data.map((course) => (
                <Course key={course.id}>
                    <img src={course.thumbnail} alt="course image" />
                    <div className='information'>
                        <h3>{course.subtitle}</h3>
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                        <ButtonContainer>
                            <StyledButton shadow={theme.blue}>
                                <CustomLink to={"sessao/" + course.id}>Saber Mais...</CustomLink>

                            </StyledButton>
                            {!course.bought &&
                                <StyledButton className='buy-button' background={theme.background} shadow={theme.blue}>
                                    Comprar
                                </StyledButton>
                            }

                        </ButtonContainer>
                    </div>
                </Course>

            ))}
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