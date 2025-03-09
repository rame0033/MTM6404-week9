# Week 9
## Vite project
1. Create a new Vite project using npm

```
npm create vite@latest
```
Complete the initial set-up
```
cd my-app
npm install
npm run dev
```

## Bootstrap
1. Install Bootstrap as a dependency
```
npm install bootstrap
```
2. Import Bootstrap into main.jsx
```
import 'bootstrap/dist/css/bootstrap.min.css'
```

## Components
Use the Bootstrap grid system to create the Container, Row and Column components.
1. Create the 'components' folder
2. Create the Container component and export it
3. Import the Container component in the main componen App.jsx
4. Call the component in the main app
```
return (
    <Container>
      <h1>Hello</h1>
    </Container>
)
```
5. Do the same for Row and Column

## Alert
1. Create an Alert component. Customize the color and text by passing the values through props

## List
Implement the 'List Group' bootstrap element, share the values through props. Inverse the data flow to change the active value of the item.
1. Create the ListGroup and ListGroupItem components.
2. Create a new state variable in the main component App.jsx. Set the initial value with an array of objects
```
const [items, setItems] = useState([
    {id:0, name:'Milk', active:false},
    {id: 1, name:'Bread', active:true}
  ])
```
2. Display the list of items
```
<ListGroup>
  {
    items.map( item => <ListItem key={item.id}>{item.name}</ListItem> )
  }
</ListGroup>
```
3. Create the onClick and the clickHandler
```
<li className={className} onClick={clickHandler}>
    {props.children}
</li>
```
```
function clickHandler(){
        props.onItemClick(props.id)
    }
```
4. Create the onItemClick and the onClickHandler in the main component App.jsx
```
<ListGroupItem key={item.id} onItemClick={onClickHandler}>
  { item.text }
</ListGroupItem>
```
```
function onClickHandler(id){
    setItems( items.map( item => item.id === id ? {...item, active: !item.active} : {...item, active:false} ))
}
```