
import aboutOne from "../../../assets/images/about_us/person.jpg";
import aboutTow from "../../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="md:my-36 my-20 grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
           <div className="relative mr-28">
                <img className="object-cover h-full w-full overflow-hidden rounded-2xl" src={aboutOne} alt="" />

                <img className="absolute h-[50%] object-cover w-[45%] -bottom-16 -right-12 outline-4 rounded-sm outline outline-white" src={aboutTow} alt="" />
           </div>

           <div>
                <h3 className="text-[#FF3811] font-bold md:text-lg text-base">About Us</h3>

                <h1 style={{lineHeight: "55px"}} className="font-bold md:text-5xl text-3xl my-6">
                    We are qualified <br /> & of experience <br />in this field
                </h1>

                <p style={{lineHeight: "28px"}} className="md:text-base text-sm">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. 
                </p>

                <p style={{lineHeight: "28px", marginTop: "20px"}} className="md:text-base text-sm">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. 
                </p>

                <button className="inline-block duration-200 bg-[#FF3811] mt-8 py-3 px-6 rounded-lg text-white font-semibold md:text-base text-sm hover:bg-white hover:text-[#FF3811]">Get More Info</button>
           </div>
        </div>
    );
};

export default About;