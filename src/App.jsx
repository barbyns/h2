import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'
import CommentArea from './components/CommentArea'
import fantasy from './data/fantasy.json'
import AddComment from './components/AddComment'


function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
        <CommentArea book={fantasy[0]}/>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
