import { useQuery } from "@tanstack/react-query";
import Product from "./Product";

const Products = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['products'],
        queryFn: () =>
          fetch('http://localhost:5000/products').then(
            (res) => res.json(),
          ),
    });

    if(isPending) return <span className="loading loading-infinity loading-lg"></span>

    if(error) return <span className="h-full w-full flex justify-center text-4xl">Error...</span>
    
    return (
        <div>
            <div>
                <h3 className="text-[#FF3811] font-bold md:text-lg text-base text-center">Popular Product</h3>
                <h1 className="md:text-5xl text-3xl font-bold text-center my-5">Browser Our Products</h1>
                <p className="text-center md:text-base text-sm leading-snug">the majority have suffered alteration in some form, by injected humour, or randomised <br />words which don&apos;t look even slightly believable. </p>
            </div>

            <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-7">
                {
                    data?.map(item => <Product key={item._id} product={item}></Product>)
                }
            </div>

            <div className="flex justify-center md:mb-32 mb-20">
                <button className="inline-block duration-200 bg-[#FF3811] mt-14 py-3 px-6 rounded-lg text-white font-semibold md:text-base text-sm hover:bg-white hover:outline outline-black hover:text-[#FF3811]">More Service</button>
            </div>
        </div>
    );
};

export default Products;