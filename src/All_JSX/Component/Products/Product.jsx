
import PropTypes from "prop-types";

const Product = ({ product }) => {
    
    return (
        <div className="card border rounded-lg overflow-hidden">
            <div className="px-10 pt-10 bg-gray-300">
                <img src={product.image} alt="Shoes" className="rounded-xl w-full h-[200px] object-cover" />
            </div>
            <div className="card-body items-center justify-between text-center">

                <div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="card-title font-bold md:text-2xl text-xl">{product.name}</h2>
                </div>

                <h3 className="text-[#FF3811] font-bold md:text-xl text-lg">${product.price}</h3>
            </div>
        </div>
    );
};

export default Product;

Product.propTypes = {
    product: PropTypes.object
}