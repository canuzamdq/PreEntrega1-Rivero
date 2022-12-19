import iconCarrito from "./carrito.png"
import "./cartwidget.css"

function CartWidget() {
    return (
        <span className="d-flex"><img src={iconCarrito} alt="carrito"/><div className="cartItems">2</div></span>
    )
}

export default CartWidget;