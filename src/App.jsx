import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import Cart from "./pages/Cart/cart";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import Layout from "./Component/Layout/Layout";
function App() {

  return (
    <BrowserRouter>
      <Routes>

          <Route element={<Layout/>}>
            <Route path="/" element={<ItemListContainer/> }/>
            <Route path="/category/:name" element={<ItemListContainer/> }/>
            <Route path="/cart" element={<Cart/> }/>
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />}/>
            
          </Route>
        <Route path="*" element={<h1>404 Not found</h1>}/>


      </Routes>
    </BrowserRouter>
  ) 
}

export default App;

