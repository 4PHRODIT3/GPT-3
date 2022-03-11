import React from 'react';
import "./whatGPT3.css";
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  const features = [
    {title : "Chatbots",text : "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "},
    {title : "Knowledgebase",text : "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"},
    {title : "Education",text : "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}
  ];
  return (
    <div className='gpt3__whatgpt3 section__margin '>
      <div className="gpt3__whatgpt3-main-feature">
        <Feature title={"What is GPT-3"} text={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."} />
      </div>
      <div className='gpt3__whatgpt3-title'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
          {
            features.map(feature => {
              return (<Feature title={feature.title} text={feature.text} />);
            })
          }
      </div>
      
    </div>
  )
}

export default WhatGPT3