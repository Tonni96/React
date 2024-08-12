import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import {collection, doc, getDoc} from "firebase/firestore";


const ItemDetailContainer = () => {

    const { addToCart, getQuantityById } =useContext( CartContext)

  const {id} = useParams (); 

  const [item, setItem] = useState({});

    let initial = getQuantityById(+id)
  useEffect(() => {
      let productsCollection = collection(db, "products");
      let refDoc = doc(productsCollection, id);
      let getProduct = getDoc(refDoc);
      getProduct.then((res) => setItem({...res.data(), id: res.id}));
    
  }, [id]);


  const onAdd = (quantity) => {
  let objetoFinal = { ...item, quantity: quantity };
  addToCart( objetoFinal);
  Swal.fire({
    title: "Agregaste este producto",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial}/>;
};

export default ItemDetailContainer; 