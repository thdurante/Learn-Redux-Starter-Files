import React from 'react';

class Comments extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderComment = this.renderComment.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const { postId } = this.props.params;
        const { author, comment } = this.refs;
        this.props.addComment(postId, author.value, comment.value);
        this.refs.commentForm.reset();
    }

    renderComment(comment, index) {
        return (
            <div className="comment" key={index}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, index)}>&times;</button>
                </p>
            </div>
        )
    }

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

export default Comments;
