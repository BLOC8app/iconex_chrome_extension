import React, { Component } from 'react';
import { LockPageContainer } from 'app/containers/'

class LockPage extends Component {
  render() {
    return (
      <div>
        <div className='content-wrap lock'>
          <LockPageContainer />
        </div>
        <div className="footer-wrap home">
          <span>©2018 ICON Foundation</span><span className="ver">{`Ver.${process.env.APP_VERSION}`}</span>
        </div>
      </div>
    );
  }
}

export default LockPage;
