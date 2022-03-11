import React from 'react';
import "./blog.css";
import { blog01,blog02,blog03,blog04,blog05 } from './import';
import Article from '../../components/article/Article';


const Blog = () => {
  const data = [
    {title : "GPT-3 and Open  AI is the future. Let us exlore how it is?", date : "Sep 26, 2021"},
  ]
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-title'>
        <h1 className='gradient__text'>A lot is happening,<br /> We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container' >
        <div className='gpt3_blog-container-full-height'>
          <Article title={data[0].title} date={data[0].date} img={blog01} />
        </div>
        <div className='gpt3_blog-container-grid'>
          <Article title={data[0].title} date={data[0].date} img={blog02} />
          <Article title={data[0].title} date={data[0].date} img={blog03} />
          <Article title={data[0].title} date={data[0].date} img={blog04} />
          <Article title={data[0].title} date={data[0].date} img={blog05} />
        </div>
      </div>
    </div>
  )
}

export default Blog