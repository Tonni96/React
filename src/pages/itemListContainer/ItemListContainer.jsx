import ItemList from "./itemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";
import {db} from "../../firebaseConfig";
import {collection, getDocs, query, where} from "firebase/firestore"


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { name } = useParams();
  
    useEffect(() => {
      let productsCollection = collection (db, "products");
      let consulta = productsCollection;

      if (name){
        consulta = query(productsCollection, where("category", "==", name));

      }
      let getProducts= getDocs (consulta);
      getProducts.then ((res) => {
        let arrayValido = res.docs.map((product) =>{
          return {... product.data (), id: product.id };
        });
        setItems (arrayValido);
    });
    }, [name]);

    //const addProducts = () => {
    //let productsCollection = collection (db, "products");

    //products.forEach((elemento) => {
          //addDoc(productsCollection, elemento);
          
      
    


    

    return (
    <div>
    <ItemList items={items} />;
    </div> );
  };
  

  

    
export default ItemListContainer;