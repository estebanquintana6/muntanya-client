import { Product } from "../utils/interfaces/product";

interface OwnProps {
    products: Product[];
}

export default function Gallery({ products } : OwnProps) {
    return (
        <section className="flex w-full flex-col">
            <div className="grid grid-cols-2 gap-x-[20vw] mx-auto">
            {products.map(({ title, photo_urls}) => (
                <article className="col-span-1 w-[20vw]">
                    <img src={photo_urls[0]} className="w-full" />
                    <div className="mt-4">
                        <h1 className="text-3xl font-zodiak-bold">{title}</h1>
                    </div>
                </article>
            ))}
            </div>
        </section>
    )
}