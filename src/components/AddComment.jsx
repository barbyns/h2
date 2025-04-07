import { Form, Button } from 'react-bootstrap'

const AddComment = ({ asin }) => {
  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label>Aggiungi un commento</Form.Label>
        <Form.Control type="text" placeholder="Scrivi qui..." />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Valutazione</Form.Label>
        <Form.Control type="number" min={1} max={5} />
      </Form.Group>
      <Button variant="primary">Invia</Button>
    </Form>
  )
}
export default AddComment
