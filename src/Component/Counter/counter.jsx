import { ProductCard } from "../productCard/productCard";

export const Counter = ({ restar, contador, sumar }) => {
    return (
    <div>
        <button onClick={sumar}>Sumar</button>
        <h2> {contador} </h2>
        <button onClick={restar}>Restar</button>
    </div>
    );
};