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
            <Title>Chinese Cuisine</Title>
            <ImageDiv>
                <img src="https://assets.epicurious.com/photos/624d9590857fa7e509238b59/3:2/w_6948,h_4632,c_limit/RegionalChinese_HERO_033122_31320.jpg" alt="Chinese food" />
            </ImageDiv>
            <Content>
                <p>Hello</p>
            </Content>

        </MainContainer>

    );
}

export default China;