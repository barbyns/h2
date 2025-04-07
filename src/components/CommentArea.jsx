import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    recensioni: [],
  }

  getComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMzg1NzM4MzRiZjAwMTUwMDA3MTgiLCJpYXQiOjE3NDM2ODAzNDIsImV4cCI6MTc0NDg4OTk0Mn0.2gHRKFCRrIh2Idm-SCCLg3eScqG2r42emOkGZslfcSc',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei commenti')
        }
      })
      .then((data) => {
        this.setState({ recensioni: data })
        console.log('DATA', data)
      })
      .catch((err) => {
        console.error('Errore nella fetch', err)
      })
  }

  componentDidMount = () => {
    this.getComments()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.book.asin !== this.props.book.asin) {
      this.getComments()
    }
  }

  render() {
    return (
      <Container className="mt-3">
        <h5>Commenti:</h5>
        <CommentsList comments={this.state.recensioni} />
        <AddComment asin={this.props.book.asin} />
      </Container>
    )
  }
}

export default CommentArea
