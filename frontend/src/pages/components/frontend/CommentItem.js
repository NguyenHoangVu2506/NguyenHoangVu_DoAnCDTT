function CommentItem(props) {
    return (
        <div class="container-comment">
            <img src={require("./../../../assets/images/user/bandmember.jpg")} alt="Avatar" style={{ width: 90 }} />
            <p><span>{props.comment.customer_name}</span>  {props.comment.review_date}</p>
            <p> {props.comment.coment}</p>
        </div>
    );

}
export default CommentItem