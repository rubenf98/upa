import React, { useContext } from 'react'
import SectionTitle from '../../common/SectionTitle'
import styled, { ThemeContext } from "styled-components";
import { dimensions } from '../../../helper';

const Container = styled.section`
    min-height: 100vh;
    width: 100%;
    padding: 100px 0px;
    box-sizing: border-box;
`;

const ActivitiesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    h4 {
        color: ${props => props.titleColor};
    }
`;

const ActivityContainer = styled.div`
    width: 25%;
    padding: 30px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.lg}){
        width: 50%;
        margin-top: 0px !important;
    }

    @media (max-width: ${dimensions.md}){
        width: 100%;
    }

    .image-container {
        position: relative;
        height: 0px;
        padding-top: 150%;
        background: ${props => "url(" + props.background + ")"};
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        .overlay {
            background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
            position: absolute;
            top: 0px;bottom: 0px; left: 0px; right: 0px;
        }

        h4 {
            position: absolute;
            top: 40px;
            left: 50%;
            transform: translate(-50%, 0);
            text-transform: capitalize;
            font-size: 36px;
        }

        
    }

    p {
        text-align: center;
        font-size: 16px;
        width: 80%;
        margin: 20px auto 0px auto;
    }
`;

const Activity = ({ title, description, image, spacingTop = false }) => {
    const themeContext = useContext(ThemeContext);

    return (
        <ActivityContainer background={"/image/homepage/" + image + ".jpg"} descriptionColor={themeContext.lightText} style={{ marginTop: spacingTop ? "50px" : "0px" }}>
            <div className='image-container'>
                <div className='overlay' />
                <h4>{title}</h4>
            </div>

            <p>{description}</p>
        </ActivityContainer>
    )

}

function Activities() {
    const themeContext = useContext(ThemeContext);

    return (
        <Container>
            <SectionTitle title={(<>Get a glimpse of what you can <span>experience</span></>)} subtitle="Activities" />
            <ActivitiesContainer titleColor={themeContext.inverseText}>
                <Activity
                    title="canyoning"
                    description="Luxury family safaris and inspiring wildlife adventures with a positive impact."
                    image="canyoning"
                />
                <Activity
                    title="biking"
                    description="Luxury family safaris and inspiring wildlife adventures with a positive impact."
                    image="biking"
                    spacingTop
                />
                <Activity
                    title="coastering"
                    description="Luxury family safaris and inspiring wildlife adventures with a positive impact."
                    image="coastering"
                />
                <Activity
                    title="walking"
                    description="Luxury family safaris and inspiring wildlife adventures with a positive impact."
                    image="walking"
                    spacingTop
                />
            </ActivitiesContainer>
        </Container>
    )
}

export default Activities