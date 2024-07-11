<<<<<<< HEAD
import { useState, useEffect} from "react";
=======
import ItemList from "./itemList";
import { products } from "../../products";
import { useState, useEffect } from "react";
>>>>>>> clase-6

const ItemListContainer = () => {
  // una peticion que me traiga los productos del backend

<<<<<<< HEAD
const ItemListContainer = ({greeting}) => {
    
    const [numero, setNumero] = useState (0);
    
    useEffect (() => {
        console.log("hago una peticion para traer datos");

    }, []);

    const sumar = () => {
        setNumero(numero + 1 );

    };


return (
    <div>
        <h1> {greeting} </h1>
        <h1>{numero}</h1>
        <button onClick={sumar}>sumar</button>
    </div>  
);
};

export default ItemListContainer;    
=======
    const [items, setItems] = useState([]);
    const [error, setError] = useState({});

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
        let x = true;
        if (x) {
            resolve(products);
        } else {
            reject({ message: "error", codigo: "404" });
        }
        });

    // manejar la promesa
        getProducts
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            setError(error);
        });
    }, []);

    return <ItemList items={items} />;
};

export default ItemListContainer;
>>>>>>> clase-6
