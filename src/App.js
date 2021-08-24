import "./App.css";
import ProductList from "./components/Product-list";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CatalogueProvider>
          <CartProvider>
            <h3> Lista de Compras </h3>
            <ProductList type="catalogue" />
            <h3> Carrinho </h3>
            <ProductList type="cart" />
          </CartProvider>
        </CatalogueProvider>
      </header>
    </div>
  );
}

export default App;
