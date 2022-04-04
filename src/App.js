import logo from './logo.svg';
import './App.css';
import Carousel from './Components/Carousel';
import Item from './Components/CarouselItem';

function App() {
  return (
    <div className="App">
      <Carousel>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
      </Carousel>
    </div>
  );
}

export default App;
