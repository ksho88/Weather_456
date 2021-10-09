import { useState, useEffect } from 'react';

const CommentForm = ({ addComment, id, title, updateComment, setEdit }) => {
  const [comment, SetComment] = useState({ title: "", body: "" })

  useEffect( () => {
    if (id) {
      SetComment({ title, body })
      
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(id, comment)
      setEdit(false)
    } else {
      addComment(comment)
    }
    SetComment({ title: "", body: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="title"
          value={comment.title}
          onChange={(e) => setComment({...comment, title: e.target.value })}

          required
          placeholder="Comment title"
        />
        <input 
          name="body"
          value={comment.body}
          onChange={(e) => setComment({...comment, body: e.target.value })}

          required
          placeholder="Comment"
        />
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default CommentForm;
