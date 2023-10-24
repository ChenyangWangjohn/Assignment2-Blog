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


const Jaapan = () => {
    return (
        <MainContainer>
            <Title>Japanese Cuisine</Title>
            <ImageDiv>
                <img src="https://asianinspirations.com.au/wp-content/uploads/2019/02/Kaiseki-Dining-3-940x627.jpg" alt="Japanese food" />
            </ImageDiv>
            <Content>
                <p>Hello</p>
            </Content>

        </MainContainer>

    );
}

export default Jaapan;