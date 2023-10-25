import styled from 'styled-components';
// sample code is here
const MainContainer = styled.div`
    background-color: #E1D0BE;
    justify-content: center;
    align-items: center;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 60px;
    margin-top: 50px;
`;
const ImageDiv = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 50px;
    flex:1;


    img {
        width: 500px;;
        height: 300px;
    }
`;

const Content = styled.div`
    flex: 1;
    font-weight: 300;
    font-size: 20px;
    padding: 20px;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: -20px;

`;


const Jaapan = () => {
    return (
        <MainContainer>
            <Title>Japanese Cuisine</Title>
            <ImageDiv>
                <img src="https://asianinspirations.com.au/wp-content/uploads/2019/02/Kaiseki-Dining-3-940x627.jpg" alt="Japanese food" />
            </ImageDiv>
            <Content>
                <p>When I say Japanese food, what do you think of at first? I would assume Sushi is what most people would say.
                    I don't blame you, because if I were you I would probably say the same. But Japanese food is so much more than that. 
                    In japanese culinary culture, eating a meal is an immersive experience. Recognizing what different season brings different
                    food to the table and the "Omotenashi"(Appreciation of local hospitality) is just as important as the carefully crafted dishes
                    themselves. <br/>
                    <b>Admiring the Tableware</b><br/>
                    In japanese dining, how the dishes are presented is just as important as how the dishes tastes. Often times, the dishes shows
                    a part of nature, some seasonal representation, or some animals for good luck in the culture. In a lot of the traditional Japanese restaurant, 
                    the restaurant entertains the customers by replacing the plate every season. <br/>
                    <b>End Note</b><br/>
                    The way you hold different tableware and how to eat different dishes, I could go on and on about the culinary culture. 
                    From the ideologies 'Wabi-sabi' which means an appreciation of the delicate fleetingness of life and seasons, to the proud 'Omotenashi' style 
                    hospitality, experiencing a real Japanese meal is a precious lesson of the culture and the appreciation to the subtle things that we are not aware of in our day-to-day lives.  
                </p>
            </Content>

        </MainContainer>

    );
}

export default Jaapan;