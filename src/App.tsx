import type { Product } from "./types/product";
import { products } from "./data/products";
import ProductList from "./components/ProductList";
import ComparisonTable from "./components/ComparisonTable";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
    const [selectedProducts, setSelectedProducts] = useLocalStorage<Product[]>(
        "comparison-products",
        [],
    );

    const addToCompare = (product: Product) => {
        const alreadyExists = selectedProducts.some(
            (item) => item.id === product.id,
        );

        if (alreadyExists) return;

        if (selectedProducts.length >= 3) {
            alert("Maximum 3 product ");
            return;
        }

        setSelectedProducts([...selectedProducts, product]);
    };

    const removeProduct = (id: number) => {
        setSelectedProducts(
            selectedProducts.filter((product) => product.id !== id),
        );
    };

    return (
        <div className="container">
            <h1>Product Comparison Widget</h1>

            <ProductList
                products={products}
                selectedProducts={selectedProducts}
                onCompare={addToCompare}
            />

            <div className="comparison-section">
                <h2>
                    Comparison ({selectedProducts.length}
                    /3)
                </h2>

                <ComparisonTable
                    products={selectedProducts}
                    onRemove={removeProduct}
                />
            </div>
        </div>
    );
}

export default App;
