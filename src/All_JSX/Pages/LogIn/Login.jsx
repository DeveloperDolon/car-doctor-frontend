
import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className="md:mt-20 mt-16 max-w-6xl mx-auto">
            <div className="hero-content grid md:grid-cols-2 grid-cols-1">
                <div className="text-center lg:text-left">
                   <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">

                    <h1 className="md:text-4xl text-2xl font-bold text-center pt-8">Login</h1>

                    <div>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#FF3811] text-white border-none">Sign In</button>
                            </div>
                        </form>

                        <h2 className="md:text-2xl font-semibold pb-5 text-center">Or Sign in With</h2>

                        <div className="px-8 pb-10">
                            <button className="w-full btn rounded-lg"><FcGoogle className="text-2xl"></FcGoogle>Google</button>
                        </div>

                        <div className="px-8 pb-16">
                            <h3>Don&apos;t have an account? <Link className="font-bold text-[#FF3811]" to="/register">Register</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;