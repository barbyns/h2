import { Card, Button } from 'react-bootstrap'

const SingleBook = ({ book }) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-3">
      <Card.Img
        variant="top"
        src={book.img}
        className="w-100"
        alt={"Immagine di " + book.title}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Button variant="primary">Dettagli</Button>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
