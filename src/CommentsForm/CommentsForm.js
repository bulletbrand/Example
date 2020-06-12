import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './commentsForm.scss';

export default class CommentsForm extends PureComponent {
    static propTypes = {
        handleClick: PropTypes.func.isRequired,
    }

    state = {
        comment: ""
    }

    setDown = (elem) => {
        if (elem.ctrlKey && elem.keyCode === 90) {
            this.props.handleClick(this.state.comment);
            this.setState({comment: ''});
        }
    };

    addComment = () => {
        this.props.handleClick(this.state.comment);
        this.setState({comment: ''});
    };

    onChange = (elem) => {
        this.setState({comment: elem.target.value})
    }

    render() {
        return (
            <div className="commentsForm">
                <div className="container">
                    <form>
          <textarea
              id="commentForm"
              name="formsForComment"
              rows="4"
              cols="60"
              value={this.state.comment}
              onKeyDown={this.setDown}
              onChange={this.onChange}
          />
                        <button type="button" onClick={this.addComment}>
                            Написать консультанту
                        </button>
                    </form>
                </div>
            </div>
        );
    }
};