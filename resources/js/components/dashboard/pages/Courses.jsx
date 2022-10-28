import React, { useEffect } from 'react'
import styled, { withTheme } from "styled-components";
import { StyledButton } from '../../../styles';
import { fetchCourses } from "../../../redux/course/actions";
import { fetchEbooks, downloadEbook } from "../../../redux/ebook/actions";
import { verifyAddToCart } from "../../../redux/cart/actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { borderRadius, dimensions, maxWidth } from '../../../helper';
import { Spin } from 'antd';

const Container = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;

    @media (max-width: ${maxWidth}) {
        padding: 0 20px;
        box-sizing: border-box;
    }
`;

const Title = styled.h1`
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    text-transform: capitalize;
    margin: 20px 0px 0px 0px;
`;

const Course = styled.div`
    width: 33%;
    box-sizing: border-box;  
    padding: 20px;

    @media (max-width: ${dimensions.md}) {
        width: 50%;
    }
    
    @media (max-width: ${dimensions.sm}) {
        width: 100%;
    }
    .course-content {
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,.1);
        border-radius: ${borderRadius};
    }

    img {
        width: 100%;
        height: auto;
        
    }

    .information {
        width: 100%;
        padding: 30px;
        box-sizing: border-box;

        h3 {
            font-size: 16px;
        }
        
        h2 {
            font-weight: bold;
            font-size: 22px;
            margin: 0px 0px 20px 0px;
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
`;

const CourseContainer = styled.div`
    margin: 50px auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
`;



function Courses({ theme, fetchCourses, fetchEbooks, courses, ebooks, verifyAddToCart, downloadEbook, loadingDownload }) {

    useEffect(() => {
        fetchCourses();
        fetchEbooks();
    }, [])

    const addToCart = (element) => {
        verifyAddToCart(element);
    };

    return (
        <Container>
            <Title>oferta formativa</Title>
            <CourseContainer>
                {courses.map((course) => (
                    <Course key={course.id}>
                        <div className='course-content'>
                            <img src={course.thumbnail} alt="imagem da sessão" />
                            <div className='information'>

                                <h2>{course.title}</h2>
                                <h3>{course.subtitle}</h3>
                                <p>{course.description}</p>
                                <ButtonContainer>
                                    {course.bought &&
                                        <Link to={"/painel/sessoes/" + course.id}>
                                            <StyledButton fontSize="16px">
                                                Visualizar
                                            </StyledButton>
                                        </Link>
                                    }
                                    {!course.bought &&

                                        <StyledButton
                                            onClick={() => addToCart({
                                                title: course.title,
                                                image: course.thumbnail,
                                                price: parseInt(course.price),
                                                type: "App\\Models\\Course",
                                                id: course.id,
                                            })}
                                            fontSize="16px"
                                            className='buy-button'
                                            background={theme.background}
                                            shadow={theme.blue}
                                        >
                                            Adicionar ao carrinho
                                        </StyledButton>
                                    }

                                </ButtonContainer>
                            </div>
                        </div>
                    </Course>

                ))}

            </CourseContainer>

            <Title>Ebooks</Title>
            <CourseContainer>

                {ebooks.map((course) => (
                    <Course key={course.id}>
                        <div className='course-content'>
                            <img src={course.thumbnail} alt="imagem da sessão" />
                            <div className='information'>

                                <h2>{course.title}</h2>
                                <h3>{course.subtitle}</h3>
                                <p>{course.description}</p>
                                <ButtonContainer>
                                    {course.bought &&
                                        <StyledButton onClick={() => downloadEbook(course.id)} fontSize="16px">
                                            Descarregar {loadingDownload && <Spin />}
                                        </StyledButton>
                                    }
                                    {!course.bought &&

                                        <StyledButton
                                            onClick={() => addToCart({
                                                title: course.title,
                                                image: course.thumbnail,
                                                price: parseInt(course.price),
                                                type: "App\\Models\\Ebook",
                                                id: course.id,
                                            })}
                                            fontSize="16px"
                                            className='buy-button'
                                            background={theme.background}
                                            shadow={theme.blue}
                                        >
                                            Adicionar ao carrinho
                                        </StyledButton>
                                    }

                                </ButtonContainer>
                            </div>
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
        fetchEbooks: () => dispatch(fetchEbooks()),
        verifyAddToCart: (element) => dispatch(verifyAddToCart(element)),
        downloadEbook: (id) => dispatch(downloadEbook(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loadingCourses: state.course.loading,
        courses: state.course.data,
        loadingEbooks: state.ebook.loading,
        ebooks: state.ebook.data,
        loadingDownload: state.ebook.loadingDownload
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Courses));