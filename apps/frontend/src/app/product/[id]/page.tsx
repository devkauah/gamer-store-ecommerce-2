import { products } from "@/core"

export default function ProductPage(props:any) {
    const id = +props.params.id;
    const product = products.find((product) => product.id === id); 

    return (
        <div>
            <h1>Produto: {product?.name}</h1>
        </div>
    )
}