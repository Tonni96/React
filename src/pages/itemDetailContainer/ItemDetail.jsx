import CounterConteiner from "../../Component/Counter/counterContainer"
import "./itemDetail.css";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <>
      <div>
        <div className={"containerItemDetail"}>
          <div className={"containerImage"}>
            <img src={item.img} alt="" />
          </div>

          <div className={"containerDetail"}>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "23px" }}>Nombre:</span> {item.title}
            </h2>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
              {item.description}
            </h2>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "23px" }}>Precio:</span> ${item.price}.- (precio por 100g.)
              </h2>
          </div>
        </div>
        <CounterConteiner onAdd={onAdd} stock= {item.stock} initial={initial} />
      </div>
    </>
  );
};

export default ItemDetail;