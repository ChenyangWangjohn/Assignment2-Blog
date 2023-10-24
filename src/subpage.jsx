import React from "react";

const Title = ({title}) => {
    return <h1>{title}</h1>
};


const Picture= ({imageURL, altText}) => {
    return <img src={imageURL} alt={altText}/>
};


const MainParagraph=({content}) => {
    return <p>content</p>
};


export default subpage;


