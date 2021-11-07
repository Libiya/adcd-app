import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchComments } from '../actions/commentactions'
import { Comment } from '../components/comment'

const CommentsPage = ({ dispatch, loading, comments, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchComments())
  }, [dispatch])

  // Show loading, error, or success state
  const renderComments = () => {
    if (loading) return <p>Loading comments...</p>
    if (hasErrors) return <p>Unable to display comments.</p>
    return comments.map((comment) => < Comment key={comment.id} comment={comment} />)
  }

  return (
    <section>
      <h1>Comments</h1>
      {renderComments()}
    </section>
  )
}

const mapStateToProps = (state) => ({
  loading: state.comments.loading,
  comments: state.comments.comments,
  hasErrors: state.comments.hasErrors,
})

export default connect(mapStateToProps)(CommentsPage)