import { useState, useEffect} from "react";


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