import { Container, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'

const BookList = ({ books }) => {
  if (!books || !Array.isArray(books)) {
    return <p>Nessun libro disponibile</p>
  }

  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col xs={12} md={6} lg={4} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BookList
