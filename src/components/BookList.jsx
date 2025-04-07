import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedBook: null,
  }
  handleBookSelect = (book) => {
    this.setState({selectedBook : book})
  }

  render() {
    const filteredBooks = this.props.books.filter((b) => b.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()
    ))
    return (
      <Container fluid>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md ={8}>
          <Row className="g-3">
            {filteredBooks.map((b)=>(
              <Col xs={12} sm={6} lg={4} key={b.asin}>
                <SingleBook book={b}
                isSelected={this.state.selectedBook?.asin === b.asin}
                onBookSelect={this.handleBookSelect}/>
              </Col>
            ))}
            </Row>
            </Col>
            <Col md ={4}>
            {this.state.selectedBook ? (
              <CommentArea asin={this.state.selectedBook.asin}/>
            ) : (
              <div className="text-muted">Seleziona un libro per vedere i commenti</div>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BookList
