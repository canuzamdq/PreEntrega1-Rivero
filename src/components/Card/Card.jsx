import "./card.css"



function Card(props){
    return (
        <div className="principal">
            <div className='cardCamiseta'>
            
                <h2>Camiseta de {props.pais}</h2>
                <h3>Talle: {props.talle}</h3>
                <h3>Precio: ${props.precio}</h3>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default Card