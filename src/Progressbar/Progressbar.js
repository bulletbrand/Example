import React, { Component } from 'react';
import Progresslist from '../Progress-list/Progress-list';

import './progressbar.scss';

export default class Progressbar extends Component {
  render() {
    return (
      <div className="progressBar">
        <div className="progressBar_inner">
          <div className="progressBar_header">
            <span>Услуг</span>
          </div>
          <Progresslist />
          <div className="progressBar_footer">
            <span>Всего</span>
            <span id="progressAll">15</span>
          </div>
        </div>
      </div>
    );
  }
}





