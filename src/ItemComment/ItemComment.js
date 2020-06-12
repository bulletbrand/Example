import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './itemComment.scss';

export default class ItemComment extends PureComponent {
    static propTypes = {
        elem: PropTypes.array
    };

    render() {
        const comments = this.props.elem;

        return comments.map(({comment, author, date}) => {
            return (
                <div key={comment} className="comments">
                    <div className="comments_info">
                        <span>{author}</span>
                        <time dateTime="2011-14-10">{date}</time>
                    </div>
                    <div className="comments_section">
                        <p>{comment}</p>
                    </div>
                </div>
            );
        });
    }
};