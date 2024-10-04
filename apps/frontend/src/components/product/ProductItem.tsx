import { Product } from "@/core";

export  interface ProductItemProps {
    product:Product;
}

export default function ProductItem(props:ProductItemProps) {
    const { product } = props; 
    return <div>{ product.name }</div>
}