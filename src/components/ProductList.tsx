import ProductCard from "./ProductCard";
import type { Product } from "../types/product";

interface Props {
    products: Product[];
    selectedProducts: Product[];
    onCompare: (product: Product) => void;
}

function ProductList({ products, selectedProducts, onCompare }: Props) {
    return (
        <div className="products-grid">
            {products.map((product) => {
                const selected = selectedProducts.some(
                    (p) => p.id === product.id,
                );

                return (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onCompare={onCompare}
                        disabled={selected}
                    />
                );
            })}
        </div>
    );
}

export default ProductList;
