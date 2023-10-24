import styled from 'styled-components';
// sample code is here
const MainContainer = styled.div`
    background-color: #E1D0BE;
    justify-content: center;
    height: 100vh;
    align-items: center;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 60px;
    margin-top: 20px;
`;
const ImageDiv = styled.div`
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 50px;
    flex:1;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Content = styled.div`
    Padding = 20px;
    font-weight: 300;
    font-size: 25px;
`;


const China = () => {
    return (
        <MainContainer>
            <Title>Fu 1088: Traditinoal Shanghai Cuisine</Title>
            <ImageDiv>
                <img src="https://ak-d.tripcdn.com/images/010181200090bj2pk2BE7.jpg" alt="Chinese food" />
            </ImageDiv>
            <Content>
                <p>A beautiful tiled entrance, wood panelling and striking light fittings are just some of the original features of this 1920s townhouse. Its 16 traditionally furnished private rooms evoke old Shanghai charm. The food is equally sophisticated: river shrimp are made to order; the smoked mackerel belly dressed in a mildly sweet glaze is crisp but juicy. No meal here is complete without the cashew praline puff pastry.</p>
                <p>The reason of recommendations: In the modern time of Shanghai, the city devloped and grow in such as fast way that a lot of taste are lost. That made Fu 1088 such an important place: enjoying the old fashioned service, and having a great meal in the historical Bungalow from the 1920s. The price is also very reasonable so it is a must-go restaurant if you want to enjoy Shanghai traditional food </p>

            </Content>

        </MainContainer>

    );
}

export default China;