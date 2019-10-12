import React, {useState} from 'react';
import  Header from './components/Header'
import Formulario from './components/Formulario'
function App() {

  //State principal
  const [cuidad, guardarCuidad] = useState('');
  const [pais, guardarPais] = useState('');

  const datosConsulta = datos =>{
    //validar campos que no estén vacios
    if(datos.cuidad === '' || datos.pais === ''){
      //un error
      return
    }

    //cuidad y pais exiten agregarlos al State
    guardarCuidad(datos.cuidad);
    guardarPais(datos.pais);
  }

  return (
    <div className="App">
      <Header 
        titulo='Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                datosConsulta={datosConsulta}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
