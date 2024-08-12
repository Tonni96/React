import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import {useNavigate} from "react-router-dom";
import { toast } from "sonner";



const Checkout = () => {
  const navigate = useNavigate ();
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const {cart, getTotalPrice, clearCart} = useContext (CartContext);
  const [orderId, setOrderId] =useState ("");

  let total = getTotalPrice ();

  const [arrayCheckbox, setArrayCheckbox] = useState([]);
  console.log(arrayCheckbox);

  const envioDeFormulario = (event) => {
    event.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total: total
    }
    let ordersCollection = collection(db, "orders");
    let productcollection = collection(db, "products");
    addDoc (ordersCollection, order).then((res) =>{ setOrderId(res.id);
    toast.success(`Gracias por tu compra , tu ticket es: ${res.id} `);
    })
    .catch()
    .finally(() => {
      clearCart();
      navigate("/");
    });

    
    
    cart.forEach( elemento => {
      let refDoc = doc(productcollection, elemento.id)
      updateDoc(refDoc, {stock: elemento.stock - elemento.quantity})
    });

    

  };

  const capturarData = (event) => {
    // let { name, value } = event.target;
    // setUser({ ...user, [name]: value });
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  const handleRadio = (e) => {
    console.log(e.target.value);
  };
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setArrayCheckbox([...arrayCheckbox, value]);
    } else {
      let newArr = arrayCheckbox.filter((el) => el !== value);
      setArrayCheckbox(newArr);
    }
  };

  return (
    <div>
      <h1>Aca va el formulario</h1>
      {orderId ? 
      (<h2>Gracias por tu compra, tu id es: {orderId}</h2>) : (

        <form  onSubmit={envioDeFormulario}>
        

        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={capturarData}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingresa tu email"
          name="email"
          onChange={capturarData}
        />
        <input
          type="text"
          placeholder="Ingresa tu telefono"
          name="telefono"
          onChange={capturarData}
        />
        
        <button>enviar</button>
        <button type="button">cancelar</button>
      </form>
      )}
      
      </div>
  );
};

export default Checkout;