import React from 'react';
import "./article.css";


const Article = ({date,title,img}) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-img'>
        <img src={img} alt="blog thumbnail"  />
      </div>
      <div className='gpt3__article-content' >
        <div>
          <p>{date}</p>
          <h1>{title}</h1>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article