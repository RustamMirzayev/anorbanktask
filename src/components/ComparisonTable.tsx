import type { Product } from "../types/product";

interface Props {
    products: Product[];
    onRemove: (id: number) => void;
}

function ComparisonTable({ products, onRemove }: Props) {
    if (products.length === 0) {
        return <div className="empty-state">Select products to compare</div>;
    }

    const rows = [
        {
            label: "Brand",
            values: products.map((product) => product.brand),
        },
        {
            label: "Price",
            values: products.map((product) => `${product.price}`),
        },
        {
            label: "Color",
            values: products.map((product) => product.color),
        },
        {
            label: "Storage",
            values: products.map((product) => product.storage),
        },
        {
            label: "Display",
            values: products.map((product) => product.display),
        },
    ];

    const isDifferent = (values: string[]) => {
        return new Set(values).size > 1;
    };

    return (
        <div className="table-wrapper">
            <table className="comparison-table">
                <thead>
                    <tr>
                        <th>Feature</th>

                        {products.map((product) => (
                            <th key={product.id}>
                                <div className="table-header">
                                    <span>{product.name}</span>

                                    <button
                                        className="remove-btn"
                                        onClick={() => onRemove(product.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row) => (
                        <tr
                            key={row.label}
                            className={
                                isDifferent(row.values) ? "highlight" : ""
                            }
                        >
                            <td>
                                <strong>{row.label}</strong>
                            </td>

                            {row.values.map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ComparisonTable;
