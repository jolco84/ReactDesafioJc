import './App.css';
import Header from './components/Header';
import Tarjeta from './components/Card';
import Pie from './components/Footer';
import img1 from './burger-4614022_640.jpg';
import img2 from './pizza-3007395_640.jpg';
import img3 from './sushi-roll-images-4395598_640.jpg';

function App() {
  return (
    <div className="App">
      <div>
        <Header title="Galería de Imágenes con React" />
      </div>
      <div className="card" style={{border: "0px solid" }}>
        <Tarjeta src={img1} titulo="Hamburguesa Gorumet" descripcion="Exquisita hamburguesa con los mejores y mas frecos ingredientes." />
        <Tarjeta src={img2} titulo="Pizza Italina" descripcion="Excelente pizza con Salsa de tomate hecha en casa, e ingredientes frescos." />
        <Tarjeta src={img3} titulo="Sushi Roll" descripcion="Combinación de sabores explosivos. " />
      </div>
      <div className='pie'>
        <Pie></Pie>
      </div>
    </div>
  );
}

export default App;
