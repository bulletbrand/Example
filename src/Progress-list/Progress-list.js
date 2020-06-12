import React, { PureComponent } from 'react';
import { initialProgress } from '../Progressbar/mock';
import './progress-list.scss';

export default class Progresslist extends PureComponent {
  render() {
    return initialProgress.map((el) => {
      return (
        <div className="progress" key={el.text}>
          <div
            className={`progress_show ${el.border}`}
            style={{ width: el.progress, background: el.background }}
          >
            <span>{el.text}</span>
            <span className="progress_count">{el.count}</span>
          </div>
        </div>
      );
    });
  }
}
