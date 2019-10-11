import React, {useState} from 'react'

function Formulario(){

    //state del Componente
    //busqueda = state, guardarBusqueda = this.setState({})
    const [busqueda, guardarBusqueda] = useState({
        cuidad:'',
        pais:''
    })

    const handleChange = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
        console.log(busqueda);
    }
    return(
        <form>
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="cuidad"
                    id="cuidad"
                    onChange={handleChange}
                    />
                    <label htmlFor="cuidad" className="white-text">Cuidad:</label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange}>
                <option value="">Selecciona un país</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>
                </select> 
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Buscar Clima"/>
            </div>
        </form>
    )
}

export default Formulario;