import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import CommentArea from './CommentArea'

{selected && <CommentArea book={book} />}
const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <Card
        style={{
          width: '18rem',
          border: selected ? '2px solid red' : 'none',
          cursor: 'pointer',
        }}
        className="mb-3"
        onClick={() => setSelected(!selected)}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={'Copertina di ' + book.title}
          className="w-100"
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Button variant="primary">Dettagli</Button>
        </Card.Body>
      </Card>

      {/* ✅ Mostra CommentArea solo se selected è true */}
      {selected && <CommentArea book={book} />}
    </>
  )
}

export default SingleBook
