import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import { useAuthContext } from "../Hooks/useAuthContext";
import Lottie from "react-lottie";
import animationData from "../../Lotte/lottie.json";
import { GoLaw } from "react-icons/go";
export default function Home() {
  const { user } = useAuthContext();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="flex h-screen bg-HomeBg bg-cover bg-center">
        <div className="w-full flex justify-center items-center text-center">
          <div className="text-blue-100">
            <p className="text-4xl sm:text-5xl md:text-7xl 1500:text-8xl">
              PROJECT NAME
            </p>
            <p className="w-72 sm:w-96 lg:w-auto text-3xl md:text-4xl 1500:text-5xl my-12">
              PROJECT DESCRIPTION
            </p>
            {user ? (
              ""
            ) : (
              <Link to="/signup">
                <p className="sign_up text-xl md:text-3xl 1500:text-5xl px-7 rounded-lg py-4 no-underline hover:text-white">
                  Sign Up
                </p>
              </Link>
            )}
          </div>
        </div>
        {/* <div className='hidden lg:flex justify-end mx-auto'>
              <Lottie options={defaultOptions}/>
          </div> */}
      </div>

      {/* Features */}
      <section className="flex flex-col justify-center items-center bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div className="shadow-lg rounded-3xl overflow-hidden my-12 mr-10 bg-slate-700 h-750">
        <div className="p-4 flex flex-col items-center">
          <img src="./Images/Img1.png" className="w-36 h-36 bg-white p-3" alt="" />
          <h2 className="text-3xl mt-3 font-semibold text-white">Legal Chatbot</h2>
          <p className="mt-3 text-white text-xl">
Our legal chatbot is an AI-powered tool designed to assist users with legal inquiries, providing information, guidance, and basic legal advice on various topics such as contracts, immigration, or intellectual property.</p>
          <img src="./Images/img5.jpg" className="mt-5 w-80 h-80" alt="" />
        </div>
      </div>
      <div className="shadow-lg rounded-3xl overflow-hidden my-12 mr-10 bg-slate-700 h-750">
      <div className="p-4 flex flex-col items-center">
          <img src="./Images/img2.png" className="w-36 h-36 bg-white p-3" alt="" />
          <h2 className="text-3xl mt-3 font-semibold text-white">Document Drafter</h2>
          <p className="mt-3 text-white text-xl">Our document drafter automates the creation of legal documents, streamlining processes like contract drafting with templates and customization options. </p>
          <img src="./Images/img5.jpg" className="mt-5 w-80 h-80" alt="" />
        </div>
      </div>
      <div className="shadow-lg rounded-3xl overflow-hidden my-12 mr-10 bg-slate-700 h-750">
      <div className="p-4 flex flex-col items-center">
          <img src="./Images/img3.png" className="w-36 h-36 bg-white p-3" alt="" />
          <h2 className="text-3xl mt-3 font-semibold text-white">Legal Research</h2>
          <p className="mt-3 text-white text-xl">Our Legal research tools leverage AI to analyze vast databases, facilitating efficient retrieval of relevant case law and statutes.</p>
          <img src="./Images/img5.jpg" className="mt-5 w-80 h-80" alt="" />
        </div>
      </div>
      <div className="shadow-lg rounded-3xl overflow-hidden my-12 mr-10 bg-slate-700 h-750">
      <div className="p-4 flex flex-col items-center">
          <img src="./Images/img4.png" className="w-36 h-36 bg-white p-3" alt="" />
          <h2 className="text-3xl mt-3 font-semibold text-white">Case Analysis</h2>
          <p className="mt-3 text-white text-xl">Our Case analysis software aids lawyers in dissecting legal precedents and outcomes to inform strategic decision-making and argumentation in litigation.
</p>
          <img src="./Images/img5.jpg" className="mt-5 w-80 h-80" alt="" />
        </div>
      </div>
    </div>
      </section>
    </>
  );
}
