import { ProductCard } from "../productCard/productcard";
import { Button } from "@mui/material";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
    return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "100px",
        }}
      >
        <Button variant="outlined" onClick={restar}>
          Restar
        </Button>
        <h2> {contador} </h2>
        <Button variant="outlined" onClick={sumar}>
          Sumar
        </Button>
  
        <Button variant="text" onClick={() => onAdd(contador)}>
          Agregar al carrito
        </Button>
      </div>
    );
};