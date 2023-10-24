import React from "react";
import Title from "./subpage.jsx";
import Picture from "./subpage.jsx";
import MainParagraph from "./subpage.jsx";
import "./subpage.jsx";
import styled from 'styled-components';

const Main = styled.div`
  background-color: #E1D0BE
`;

const Japan = () => {
  const blogTitle = "Japanese food ";
  const imageUrl = "src/assets/j_food.jpeg"; // URL to your image
  const altText = "Japanese food";
  const mainContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.";

  return(
    <Main>
      <Title title={blogTitle} />
      <Picture imageUrl={imageUrl} altText={altText} />
      <MainParagraph content={mainContent} />
    </Main>
  );
  }
  
  export default Japan;