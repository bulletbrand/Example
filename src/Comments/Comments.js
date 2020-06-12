import React, { PureComponent } from 'react';
import like from '../pictures/like.png';
import comment from '../pictures/comment.png';
import ItemComment from '../ItemComment/ItemComment';

import './comments.scss';

export default class Comments extends PureComponent {
  render() {
    return (
      <div className="commentsBlock">
        <div className="commentBlock_inner">
          <div className="commentsBlock_nav">
            <div className="commentsBlock_leftNav">
              <ul>
                <li>Последние отзывы</li>
                <li>
                  <span className="underline">Все отзывы</span>
                </li>
              </ul>
            </div>
            <div className="commentsBlock_rightNav">
              <ul>
                <li>
                  <img src={like} alt="logo" />
                  <span>131</span>
                </li>
                <li>
                  <img src={comment} alt="logo" />
                  <span>14</span>
                </li>
              </ul>
            </div>
          </div>
          <ItemComment elem={this.props.data} />
        </div>
      </div>
    );
  }
}
