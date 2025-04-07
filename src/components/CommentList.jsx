import { ListGroup } from 'react-bootstrap'

const CommentsList = ({ comments }) => {
  return (
    <ListGroup>
      {comments.map((recensione) => (
        <ListGroup.Item key={recensione._id}>
          {recensione.comment} – {recensione.rate}/5
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default CommentsList
