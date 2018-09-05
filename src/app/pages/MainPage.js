import React, { Component } from 'react';
import { MainPageContainer } from 'app/containers/'

class MainPage extends Component {
  render() {
    return (
      <div>
        <div>
          <MainPageContainer />
        </div>
        <div className="footer-wrap home">
          <span>©2018 ICON Foundation</span><span className="ver">{`Ver.${process.env.APP_VERSION}`}</span>
        </div>
      </div>
    );
  }
}

export default MainPage;
