<<<<<<< HEAD
const itemList = ({greeting, numero, sumar}) => {
    
}; 

export default itemList;
=======
import { ProductCard } from "../../Component/productCard/productCard";

const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div style={{ display: "flex", gap: "20px" }}>
        {items.map((elemento) => {
            return (
            <ProductCard
                key={elemento.id}
                title={elemento.title}
                description={elemento.description}
                price={elemento.price}
            />
            );
        })}
        </div>
    );
};

export default ItemList;
>>>>>>> clase-6
