
import teamOne from "../../../assets/images/team/1.jpg";
import teamTow from "../../../assets/images/team/2.jpg";
import teamThree from "../../../assets/images/team/3.jpg";
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const Team = () => {
    return (
        <div className="text-center">
            <h4 className="md:text-lg font-bold text-base text-[#FF3811]">Team</h4>

            <h1 className="md:text-5xl text-3xl my-5 font-bold">Meet Our Team</h1>

            <p className="md:leading-loose leading-relaxed md:text-base text-sm">
                The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don&apos;t look even slightly believable.
            </p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 mt-10">
                <div className="card border rounded-lg overflow-hidden">
                    <div className="p-6 pb-0">
                        <img src={teamOne} alt="Shoes" className="rounded-xl w-full h-[300px] object-cover" />
                    </div>
                    <div className="card-body pb-0 items-center justify-between text-center">

                        <div>
                            <h2 className="card-title font-bold md:text-2xl text-xl">Car Engine Plug</h2>

                            <p className="md:text-base text-sm font-semibold my-1">Engine Expert</p>

                            <div className="flex text-3xl items-center justify-between my-5 flex-wrap">
                                <BsFacebook></BsFacebook>
                                <AiFillTwitterCircle className="text-[35px]"></AiFillTwitterCircle>
                                <TiSocialLinkedinCircular className="text-[38px]"></TiSocialLinkedinCircular>
                                <AiFillInstagram className="text-[35px]"></AiFillInstagram>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card border rounded-lg overflow-hidden">
                    <div className="p-6 pb-0">
                        <img src={teamTow} alt="Shoes" className="rounded-xl w-full h-[300px] object-cover" />
                    </div>
                    <div className="card-body pb-0 items-center justify-between text-center">

                        <div>
                            <h2 className="card-title font-bold md:text-2xl text-xl">Car Engine Plug</h2>

                            <p className="md:text-base text-sm font-semibold my-1">Engine Expert</p>

                            <div className="flex text-3xl items-center justify-between my-5 flex-wrap">
                                <BsFacebook></BsFacebook>
                                <AiFillTwitterCircle className="text-[35px]"></AiFillTwitterCircle>
                                <TiSocialLinkedinCircular className="text-[38px]"></TiSocialLinkedinCircular>
                                <AiFillInstagram className="text-[35px]"></AiFillInstagram>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card border rounded-lg overflow-hidden">
                    <div className="p-6 pb-0">
                        <img src={teamThree} alt="Shoes" className="rounded-xl w-full h-[300px] object-cover" />
                    </div>
                    <div className="card-body pb-0 items-center justify-between text-center">

                        <div>
                            <h2 className="card-title font-bold md:text-2xl text-xl">Car Engine Plug</h2>

                            <p className="md:text-base text-sm font-semibold my-1">Engine Expert</p>

                            <div className="flex text-3xl items-center justify-between my-5 flex-wrap">
                                <BsFacebook></BsFacebook>
                                <AiFillTwitterCircle className="text-[35px]"></AiFillTwitterCircle>
                                <TiSocialLinkedinCircular className="text-[38px]"></TiSocialLinkedinCircular>
                                <AiFillInstagram className="text-[35px]"></AiFillInstagram>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;