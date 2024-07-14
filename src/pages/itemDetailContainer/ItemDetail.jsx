import { Navbar } from "../../Component/Navbar";
import CounterConteiner from "../../Component/Counter/counterContainer"

const ItemDetail = ({ item }) => {
  return (
    <>
      <div>
        <h2>{item.title}</h2>
        <CounterConteiner />
      </div> 
    </>
  );
};

export default ItemDetail;