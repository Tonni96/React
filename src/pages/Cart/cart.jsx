import { Button } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2"

const cart = () => {

    const {cart, clearCart, deleteProduct, getTotalPrice } = 
      useContext( CartContext);
    let total = getTotalPrice ();

    const handleDelete = (id) => {
      
      Swal.fire({
        title: "Estas seguro que quieres eliminar?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "eliminar",
        denyButtonText: `cancelar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          deleteProduct (id);
          Swal.fire("eliminado", "", "success");
        } else if (result.isDenied) {
          Swal.fire("no se eliminado", "", "info");
        }
      }); 
      
    }; 

  return (
    <div>
      {
        cart.map((elemento) => {
          return (
          <div 
            key={elemento.id}
            style={{ border: "1px, solid black", width: "210px", textAlign: "center", margin: "20px"}}
            >
              <h2>{elemento.title}</h2>
              <h2>{elemento.quantity}</h2>
              <h3>${elemento.price}.-</h3>
              <img src={elemento.img} alt="Relleno de nuez" width= "100px"/>
              <Button variant="text" onClick={() => handleDelete (elemento.id)
              }>Eliminar</Button>
          </div>

          );
        })}
        <h2 className= {cart.length > 0 ? "title" : "ocultar"}>
          El total a pagar es ${total}.-</h2>
      <Button onClick={clearCart }>Limpiar carrito</Button>
      <Link to="/checkout">
          <Button variant="text">Finalizar Compra  </Button>
      </Link>
    </div>
  )
}

export default cart