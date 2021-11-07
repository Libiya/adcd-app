import React from 'react'
export const Comment = ({ comment }) => (
  <article className="user-excerpt">
    <h2>{comment.title}</h2>
    <p>{comment.body.substring(0, 100)}</p>
  </article>
)
