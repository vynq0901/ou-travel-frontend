import React from "react";
import Comment from "../CommentComponent/Comment";
import './Comments.scss';


export default function Comments() {
  return (
    <div className="comments">
      <p style={{ fontSize: '2rem', fontWeight: '700', marginLeft: '20px' }}>Bình luận và đánh giá</p>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}
