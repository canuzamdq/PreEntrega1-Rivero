import "./itemlistcontainer.css"

function ItemListContainer(props, secondProp) {
    return (
        <container className= "container">
                <h1>{props.greeting}</h1>
                <h3>{props.description}</h3>
        </container>
    )
}

export default ItemListContainer;