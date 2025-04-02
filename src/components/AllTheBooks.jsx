import { Container, Row, Col } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import SingleBook from './SingleBook'

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {fantasy.map((book) => (
          <Col xs={12} md={6} lg={4} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllTheBooks
