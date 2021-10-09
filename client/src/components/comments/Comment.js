import { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({ id, title, deleteComment, updateComment }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {title}
        <br />
        Complete: { complete ? "Complete" : "Not Complete" }
        {
          editing ?
          <>
            <CommentForm
              id={id}
              title={title}
              updateComment={updateComment}
              setEdit={setEdit}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteComment(id)}>Delete Comment</button>
      </li>
    </>
  )
}

export default Comment;