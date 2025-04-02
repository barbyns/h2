import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import SingleBook from  './components/SingleBook'

function App() {
  return (
    <>
      <MyNav/>
      <Container>
        <Welcome />
        <AllTheBooks />
        <SingleBook book={{asin: "0316389706"}} src={{img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg"}}  title={{"title": "The Last Wish: Introducing the Witcher"}}/>
      </Container>
      <MyFooter />
    </>
  )
}

export default App

