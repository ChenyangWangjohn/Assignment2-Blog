import React from 'react';
import './subpage.css';
import subpage from './subpage.css'

function japan(){
    const blogTitle = "Japanese food (washoku)";
    const img = 'src/assets/j_food.jpeg';
    const altText = 'japanese food'
    const main= 'coming soon'

    return (
        <div className= "layout">
            <Title title={blogTitle}/>
            <Picture img={img} altText={altText}/>
            <MainParagraph content={main}/>
        </div>
    );

}

export default japan;