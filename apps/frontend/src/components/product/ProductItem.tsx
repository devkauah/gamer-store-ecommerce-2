import { Coin, MAX_QTY_INSTALLMENTS, Product } from "@/core";
import Link from "next/link";
import Image from "next/image";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import ScoreReview from "../shared/ScoreReview";

export  interface ProductItemProps {
    product:Product;
}

export default function ProductItem(props:ProductItemProps) {
    const { product } = props; 
    return (    
        <Link
            href={`/product/${product.id}`}
            className="flex flex-col bg-violet-dark border border-white/10 rounded-xl"
        >
            <div className="w-full h-48 relative">
                <div className="absolute flex justify-end top-2.5 right-2.5">    
                    <ScoreReview score={ product.score } />
                </div>
                <Image 
                    src={ product.image }
                    fill
                    className="object-contain"
                    alt="Imagem do produto"
                />
            </div>
            <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
                <span className="text-lg font-semibold">{ product.name }</span>
                <div className="self.start text-sm border-b border-dashed">
                    { product.specifications.highlight }
                </div>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">
                        de { Coin.format(product.priceable.basePrice) }
                    </span>
                    <span className="text-xl font-semibold text-emerald-400">
                        por { Coin.format(product.priceable.promotionalPrice) }
                    </span>
                    {/* <span>
                        até {MAX_QTY_INSTALLMENTS}x de{''}
                        {Coin.format()}
                    </span> */}
                </div>
                <button
                    className="
                        flex justify-center items-center gap-2 h-8 rounded-full
                        bg-violet-700 hover:border-2 border-emerald-400
                    "
                    // onClick={(e) => {
                    //     e.preventDefault()

                    //     console.log('Add in cart');
                    // }}
                >
                    <IconShoppingCartPlus size={20} />
                    <span>Adcionar</span>
                </button>
            </div>
        </Link>
    );
}