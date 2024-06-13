import { Navbar } from "./Component/Navbar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
function App() {

  return (
    <div>
        <Navbar />
        <ItemListContainer greeting={"Hola como estas?"} />
    </div>
  )
}

export default App;

