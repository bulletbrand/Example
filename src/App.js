import React from 'react';
import About from './About/About';
import Progressbar from './Progressbar/Progressbar';
import Comments from './Comments/Comments';
import CommentsForm from './CommentsForm/CommentsForm';
import { createDate } from './utils/utils';
import { initialComments } from './Progressbar/mock';

import './index.scss';

class App extends React.Component {
  state = {
    data: initialComments,
  };

  handleComment = (comment) => {
    this.setState({
      data: [
        ...this.state.data,
        { comment, author: 'User', date: createDate() },
      ],
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <About />
          <Progressbar />
          <Comments data={this.state.data} />
        </div>
        <CommentsForm handleClick={this.handleComment} />
      </div>
    );
  }
}

export default App;
