import { ProductCard } from "../productCard/productcard";

export const Counter = ({ restar, contador, sumar }) => {
    return (
    <div>
        <button onClick={restar}>Restar</button>
        <h2> {contador} </h2>
        <button onClick={sumar}>Sumar</button>
        <ProductCard title="una" description="dasda" price={contador} />
    </div>
    );
};