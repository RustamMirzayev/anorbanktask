import type { Product } from "../types/product";

interface Props {
    product: Product;
    onCompare: (product: Product) => void;
    disabled: boolean;
}

function ProductCard({ product, onCompare, disabled }: Props) {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>

            <p>
                <strong>Brand:</strong> {product.brand}
            </p>

            <p>
                <strong>Price:</strong> ${product.price}
            </p>

            <p>
                <strong>Storage:</strong> {product.storage}
            </p>

            <button onClick={() => onCompare(product)} disabled={disabled}>
                Compare
            </button>
        </div>
    );
}

export default ProductCard;
