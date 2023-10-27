
import team from "../../../assets/icons/group.svg";
import person from "../../../assets/icons/person.svg";
import equipment from "../../../assets/icons/Wrench.svg";
import check from "../../../assets/icons/check.svg";
import delivery from "../../../assets/icons/deliveryt.svg";

const Features = () => {
    return (
        <div className="md:my-32 my-20">

            <div>
                <h3 className="text-[#FF3811] font-bold md:text-lg text-base text-center">Core Features</h3>
                <h1 className="md:text-5xl text-3xl font-bold text-center my-5">Why Choose Us</h1>
                <p className="text-center md:text-base text-sm leading-snug">the majority have suffered alteration in some form, by injected humour, or randomised <br />words which don&apos;t look even slightly believable. </p>
            </div>

            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 grid-flow-row gap-7 mt-12">
                <div className="flex flex-col justify-center items-center border px-3 py-7 space-y-4 rounded-lg font-bold">
                    <img src={team} alt="" />

                    <h3>Expert Team</h3>
                </div>

                <div className="flex flex-col justify-center items-center border px-3 py-7 space-y-4 rounded-lg font-bold">
                    <svg width="53" height="53" viewBox="0 0 53 53" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.2384 7.76171C40.2332 2.75652 33.5784 0 26.5 0C19.4216 0 12.7668 2.75652 7.7616 7.76171C2.75641 12.7669 0 19.4216 0 26.5C0 33.5784 2.75641 40.2332 7.7616 45.2383C12.7668 50.2434 19.4216 53 26.5 53C33.5784 53 40.2332 50.2435 45.2384 45.2383C50.2436 40.2331 53 33.5784 53 26.5C53 19.4216 50.2436 12.7668 45.2384 7.76171ZM26.5 47.7985C14.7558 47.7985 5.20145 38.2441 5.20145 26.5C5.20145 26.4807 5.20207 26.4617 5.20218 26.4427C5.20218 26.4378 5.20145 26.4331 5.20145 26.4283C5.20145 26.4201 5.20249 26.4122 5.2027 26.4041C5.25435 14.8008 14.6315 5.36045 26.2106 5.20518C26.2348 5.20404 26.2588 5.20156 26.2833 5.20156C26.298 5.20156 26.3123 5.20332 26.3269 5.20373C26.3847 5.20332 26.4422 5.20156 26.5001 5.20156C38.2443 5.20156 47.7986 14.756 47.7986 26.5001C47.7986 38.2442 38.2442 47.7985 26.5 47.7985Z" fill="black" />
                        <path d="M42.6781 27.7794C41.8121 27.7794 41.1101 27.0773 41.1101 26.2113C41.1101 25.3453 41.8121 24.6433 42.6781 24.6433H44.5682C43.6805 15.9401 36.6222 9.03591 27.8513 8.3877V10.0331C27.8513 10.8991 27.1492 11.6011 26.2832 11.6011C25.4172 11.6011 24.7152 10.8991 24.7152 10.0331V8.42517C16.0741 9.27193 9.19103 16.1994 8.41228 24.8599H10.105C10.971 24.8599 11.673 25.562 11.673 26.428C11.673 27.294 10.971 27.996 10.105 27.996H8.39944C9.12043 36.796 16.1415 43.8386 24.9319 44.5939V42.6061C24.9319 41.7401 25.634 41.0381 26.5 41.0381C27.366 41.0381 28.068 41.7401 28.068 42.6061V44.5939C36.9304 43.8324 43.9942 36.6801 44.6168 27.7794H42.6781ZM32.8476 22.3699L27.6088 27.6087C27.3148 27.9028 26.916 28.068 26.5001 28.068C26.0843 28.068 25.6853 27.9028 25.3913 27.6087L16.2723 18.4897C15.6599 17.8774 15.6599 16.8846 16.2723 16.2722C16.8846 15.6598 17.8774 15.6598 18.4898 16.2722L26.5002 24.2824L30.6303 20.1523C31.2425 19.54 32.2354 19.54 32.8478 20.1523C33.46 20.7646 33.46 21.7576 32.8476 22.3699Z" fill="red" />
                    </svg>


                    <h3>Expert Team</h3>
                </div>

                <div className="flex flex-col justify-center items-center border px-3 py-7 space-y-4 rounded-lg font-bold">
                    <img src={person} alt="" />

                    <h3>Expert Team</h3>
                </div>

                <div className="flex flex-col justify-center items-center border px-3 py-7 space-y-4 rounded-lg font-bold">
                    <img src={equipment} alt="" />

                    <h3>Expert Team</h3>
                </div>

                <div className="flex flex-col justify-center items-center border px-3 py-7 space-y-4 rounded-lg font-bold">
                    <img src={check} alt="" />

                    <h3>Expert Team</h3>
                </div>

                <div className="flex flex-col justify-center items-center border px-3 py-7 space-y-4 rounded-lg font-bold">
                    <img src={delivery} alt="" />

                    <h3>Expert Team</h3>
                </div>
            </div>
        </div>
    );
};

export default Features;