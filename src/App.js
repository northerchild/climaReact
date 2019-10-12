import React, {useState, useEffect} from 'react';
import  Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
function App() {

  //State principal
  const [cuidad, guardarCuidad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false)
  const [resultado, guardarResultado]= useState()

  useEffect(() => {
    if(cuidad === '') return;

    //Consultar API
    const consultarApi = async ()=>{
      const appId = '47e410409633a41376e90bec6394d40d';
      const url = ` https://api.openweathermap.org/data/2.5/weather?q=${cuidad},${pais}&appid=${appId}`
      //Consultar URL
      const respuesta = await fetch(url);
      const resultado = await respuesta.json()
      guardarResultado(resultado);
    }


    consultarApi();
  }, [cuidad, pais]);

  const datosConsulta = datos =>{
    //validar campos que no estén vacios
    if(datos.cuidad === '' || datos.pais === ''){
      guardarError(true);
      return;
    }

    //cuidad y pais exiten agregarlos al State
    guardarCuidad(datos.cuidad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  
  //Cargar un componente Condicionalmente
  let componente;
  if(error){
    //Hay un error, mostrarlo
    componente = <Error mensaje="Ambos campos son obligatorios"/>
  }else{
    //Mostrar Clima
    componente = null;
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
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
