import Card from './components/props';
import price from './components/data';

function createCard(price) {
  return (
    <Card 
        key = {price.id} 
        plan = {price.plan}
        price = {price.price}
        moneyBack = {price.moneyBack}
        storage = {price.storage}
        node = {price.node}
        database = {price.database}
        domain = {price.domain}
        free = {price.free}
        others = {price.others}
      />
  )
}


function App() {
  return (
    <div className = 'demo'>  
      {price.map(createCard)}
    </div>
  );
}

export default App;
