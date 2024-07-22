import { ProductCard } from "../../Component/productCard/productCard";

const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div style={{ display: "flex", gap: "20px", marginTop: "40px", textAlign: "center"}}>
        {items.map((elemento) => {
            return (
            <ProductCard
                key={elemento.id}
                title={elemento.title}
                description={elemento.description}
                price={elemento.price}
                id= {elemento.id}
                img={elemento.img}
            />
            );
        })}
        </div>
    );
};

export default ItemList;

