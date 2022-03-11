import React from 'react';
import "./brand.css";
import { atlassian, dropbox, google, shopify, slack } from './import'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="Brand" />
      </div>
      <div>
        <img src={slack} alt="Brand" />
      </div>
      <div>
        <img src={atlassian} alt="Brand" />
      </div>
      <div>
        <img src={dropbox} alt="Brand" />
      </div>
      <div>
        <img src={shopify} alt="Brand" />
      </div>
    </div>
  )
}

export default Brand