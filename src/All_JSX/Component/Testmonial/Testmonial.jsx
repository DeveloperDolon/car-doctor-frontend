
import quote from "../../../assets/icons/quote.svg";


const Testimonial = () => {
    return (
        <div>
            <div>
                <h3 className="text-[#FF3811] font-bold md:text-lg text-base text-center">Testimonial</h3>
                <h1 className="md:text-5xl text-3xl font-bold text-center my-5">What Customer Says</h1>
                <p className="text-center md:text-base text-sm leading-snug">the majority have suffered alteration in some form, by injected humour, or randomised <br />words which don&apos;t look even slightly believable. </p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-28">
                <div className="border  py-16 px-10 rounded-lg">
                    <div className="flex justify-between">
                        <div className="flex gap-5">
                            <div className="avatar">
                                <div className="w-20 rounded-full">
                                    <img src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" />
                                </div>
                            </div>

                            <div>
                                <h2 className="md:text-2xl text-xl font-bold">Awlad Hossain</h2>
                                <p className="my-2 font-medium text-lg">Businessman</p>
                            </div>
                        </div>

                        <div>
                            <img className="sm:w-20 w-12" src={quote} alt="" />
                        </div>
                    </div>

                    <p className="my-7">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                    </p>

                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>

                <div className="border  py-16 px-10 rounded-lg">
                    <div className="flex justify-between">
                        <div className="flex gap-5">
                            <div className="avatar">
                                <div className="w-20 rounded-full">
                                    <img src="https://media.istockphoto.com/id/1440149723/photo/happy-man-social-media-phone-and-living-room-relax-typing-smartphone-and-online-communication.webp?b=1&s=170667a&w=0&k=20&c=G_u5nOP54j90M_S-qjoFxQi7E_sr4cgnKneIUy0agU0=" />
                                </div>
                            </div>

                            <div>
                                <h2 className="md:text-2xl text-xl font-bold">Awlad Hossain</h2>
                                <p className="my-2 font-medium text-lg">Businessman</p>
                            </div>
                        </div>

                        <div>
                            <img className="sm:w-20 w-12" src={quote} alt="" />
                        </div>
                    </div>

                    <p className="my-7">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
                    </p>

                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;