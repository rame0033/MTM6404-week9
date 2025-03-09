import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

//Components
import Container from './components/Container.jsx'
import Row from './components/Row.jsx'
import Col from './components/Col.jsx'
import ListGroup from './components/ListGroup.jsx'
import ListGroupItem from './components/ListGroupItem.jsx'
import Alert from './components/Alert.jsx'


function App() {

  const [items, setItems] = useState([
    { id: 1, text: 'Milk', active: true },
    { id: 2, text: 'Eggs', active: false },
    { id: 3, text: 'Bread', active: false }
  ])

  function onItemClickHandler (id) {
    setItems(prevState => prevState.map(item => 
      item.id === id ? { ...item, active:true } : { ...item, active:false }
    ))
  }

  return (
    <Container>
      <Row>
        <Col>
        Row 1 - Col 1
        </Col>
        <Col>
        Row 1 - Col 2
        </Col>
      </Row>
      <Row>
        <Col>
        Row 2 - Col 1
        </Col>
        <Col>
        Row 2 - Col 2
        </Col>
      </Row>

      <Row>
      <Alert variant="danger">
            Danger! Danger!
          </Alert>
          <Alert variant="success">
            It Works!
          </Alert>
      </Row>

      <Row>
        <ListGroup>
          {items.map(item => (
            <ListGroupItem key={item.id} active={item.active} id={item.id} onItemClick={onItemClickHandler}>
              {item.text}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Row>

    </Container>
  )

}

export default App
