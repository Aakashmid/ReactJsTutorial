import React, { useState, useEffect } from 'react';

export default function LoadMoreData() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [pageCount, setPageCount] = useState(0);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${pageCount * 20}`);
            const data = await res.json();
            if (data && data.products.length > 0) {
                setProducts([...products, ...data.products]);
            }
            console.log(data)
        } catch (error) {
            setError(true);
        }
        finally {
            setLoading(false);
        }
    }

    const Product = ({ img, title, description }) => {
        const [imgLoading, setImgLoading] = useState(true);
        return (
            <>
                {imgLoading &&
                    <div className="overflow-hidden rounded-lg">
                        <div className="w-full bg-gray-300 animate-pulse h-[15rem] aspect-square">
                        </div>
                        <div className="p-2">
                            <div className=" mt-4 animate-pulse min-h-10 w-full bg-gray-300">fgsf</div>
                            <div className=" mt-2 animate-pulse min-h-20 w-full bg-gray-300">fgsf</div>
                        </div>
                    </div>
                }
                <div className={`product border rounded-lg ${imgLoading ? 'hidden' : 'block'}`}>
                    <img onError={() => setImgLoading(false)} onLoad={() => setImgLoading(false)} src={img} className='w-[200px] h-auto aspect-square' alt="..." />
                    <div className="p-2">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </>
        )
    }

    useEffect(() => {
        fetchProducts();
    }, [pageCount]);

    const handleLoadMore = () => {
        setPageCount(pageCount + 1);
    }

    return <div className="w-screen h-screen">
        <div className="pb-28 products-container grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {loading && <div className="loading mt-36 mx-auto w-fit">Loading...</div>}
            {!loading && products && products.length && products.map((prod, index) => {
                return <React.Fragment key={index}>
                    <Product img={prod.thumbnail} title={prod.title} description={prod.description} />
                </React.Fragment>
            })}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
                <button onClick={handleLoadMore} className="p-2 rounded-lg bg-gray-300 border border-blue-500 le">Load More data</button>
            </div>
        </div>
    </div>
}