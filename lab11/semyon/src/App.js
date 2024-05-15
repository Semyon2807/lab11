import './App.css';
import ToDo from './components/Blokes';
import image_1 from "./images/img_pizza.jpg";
import image_2 from "./images/mag.jpg";

function App() {
  return (
    <div className="necessities">
        <ToDo title="Пепперони" image1={image_1} image2={image_2} text='Ничего лишнего! Томатный соус, колбаски пепперони и моцарелла!' rub='от 550₽' />
    </div>
  );
}

export default App;