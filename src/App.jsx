import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import SingleBook from  './components/SingleBook'
import BookList from './components/BookList'
import fantasy from './data/fantasy.json'

function App() {
  return (
    <>
     <div className="App">
      <BookList books={fantasy} /> {/* ✅ passa la prop correttamente */}
    </div>
      <MyNav/>
      <Container>
        <Welcome />
        <AllTheBooks />
        <SingleBook book={{asin: "0316389706", src: "https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg", title: "The Last Wish: Introducing the Witcher"}} />
      <BookList/>
      </Container>
      <MyFooter />
    </>
  )
}

export default App

