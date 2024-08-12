import { useState } from "react";
import { Counter } from "./counter";

const CounterContainer = ({onAdd, stock, initial = 1 }) => {
    const [contador, setContador] = useState(initial);
  
    const sumar = () => {
      if(contador < stock) {
        setContador(contador + 1);
      } else{
        alert("stock maximo")
      }
      
    };
  
    const restar = () => {
      if (contador > 1) {
        setContador(contador - 1);
      } else {
        alert("No puede haber menos de 1");
      }
    };
  
    return <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />;
  };

export default CounterContainer;