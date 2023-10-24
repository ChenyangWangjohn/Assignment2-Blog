import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    background-color: #FFEFD5;
    justify-content: center;
    align-items: center;
    align-items: stretch;
    height: 80vh;
    padding: 20px;
    box-sizing: border-box;
    gap: 16px;
`;

const LeftContainer = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
`;

const RightContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    background-color: #f5f5f5;
`;

const ImageDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 8px;

    img {
        width: 96%;
        height: 96%;
        object-fit: cover;
    }
`;


const Japan = () => {
    return (
        <MainContainer>
            <LeftContainer>
                <ImageDiv>
                    <a href="http://localhost:5173/china">
                        <img src="https://images.1111.com.tw/media/share/dd/ddb249993e45416dadc1f5bf449ff927.jpg" alt="Description of First Image" />
                    </a>
                </ImageDiv>
                <ImageDiv>
                    <a href="http://localhost:5173/japan">
                        <img src="https://myconciergejapan.com/wp-content/uploads/2019/07/ryugin_slider_2.jpg" alt="Description of Second Image" />
                    </a>
                </ImageDiv>
            </LeftContainer>
            <RightContainer>
                <h2>Mizuho & John&apos;s Food Guide</h2>
                <h1>Chinese & Japaese Cuisine</h1>
                <p>Read about our recommendations of Restaurants :)</p>
            </RightContainer>
        </MainContainer>

    );
}

  export default Japan;