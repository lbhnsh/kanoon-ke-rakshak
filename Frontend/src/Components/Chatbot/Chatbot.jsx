import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoLibraryOutline } from "react-icons/io5";
import { GoSignIn } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { AiOutlineLink } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CgRemoveR } from "react-icons/cg";
import { AiOutlineUpload } from "react-icons/ai";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
function Chatbot() {
  const [chat, setChat] = useState(false);
  const onClickChat = () => {
    setChat(true);
  };
  return (
    <>
      <div className="flex bg-green-100">
        <section className="h-screen flex flex-col w-1/5 border-r-2 ml-4 border-black">
          <h2 className="text-5xl font-bold pl-4 pt-4">Project Title</h2>
          <div className="flex mt-8 ml-2 text-gray-500 justify-center">
            <div className="flex flex-col justify-center items-center mr-10 rounded-lg p-2 w-32 h-24 hover:bg-gray-200 hover:cursor-pointer ">
              <AiOutlineHome className="text-4xl" />
              <p className="text-3xl">Home</p>
            </div>
            <div className=" mr-10 rounded-lg p-2 w-32 h-24 hover:bg-gray-200 hover:cursor-pointer">
              <div className="flex flex-col justify-center items-center group">
                <IoIosAddCircleOutline className="text-4xl" />
                <p className="text-3xl">Add</p>
                {/* Add */}
                <div className="hidden group-hover:flex flex-col items-center bg-white text-black translate-x-48 -translate-y-24 rounded-lg px-3 py-4 w-56 shadow-lg">
                  <p className="text-2xl flex hover:bg-gray-200 hover:cursor-pointer px-1 py-2 rounded-lg">
                    <AiOutlineUpload className="mr-2 text-3xl" /> Upload PDF
                  </p>
                  <p className="text-2xl flex hover:bg-gray-200 hover:cursor-pointer px-1 py-2 rounded-lg">
                    OCR
                  </p>
                  <p className="group text-2xl flex mt-2 hover:bg-gray-200 hover:cursor-pointer px-1 py-2 rounded-lg">
                    <AiOutlineLink className="mr-2 text-3xl" />
                    Paste PDF URL
                  </p>
                  <div className="hidden group-hover:flex flex-col w-96 bg-white translate-x-50 px-2 py-3">
                    <p className="text-2xl font-bold">Paste PDF URL</p>
                    <p className="text-xl mt-2">
                      Kindly paste your URL below, ensuring that it directs to a
                      PDF file.
                    </p>
                    <input
                      type="text"
                      placeholder="Paste URL here"
                      className="mt-2 border-2 border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mr-10 rounded-lg px-3 py-2 w-32 h-24 hover:bg-gray-200 hover:cursor-pointer ">
              <IoLibraryOutline className="text-4xl" />
              <p className="text-3xl">Library</p>
            </div>
          </div>
          {/* <div className="block">
                <div className="hover:cursor-pointer hover:bg-gray-400">
                <button className="bg-green-500 text-white w-full">Sign in</button>
                <button className="border-green-200 rounded-lg"><GoSignIn /></button>
                </div>
            </div> */}
        </section>
        {!chat && (
          <section className="h-fit w-4/5 ml-4 z-0">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-7xl font-bold pl-4 pt-4">Project Title</h2>
              <p className="mt-10 text-4xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="mt-10 w-3/4 flex items-center justify-center mx-auto">
              <input
                name=""
                placeholder="Start chat here..."
                className=" w-full pl-6 py-4 text-4xl rounded-2xl border-6 border-gray-200 hover:border-green-500"
              />
            </div>
            <div className="text-xl ml-4 flex items-center mt-10">
              <p className="mr-4 text-3xl">
                Research digest tailored to your interest.
              </p>
              <button className="flex items-center font-bold text-3xl bg-white p-3 rounded-lg ">
                <CiEdit className="mr-3 text-4xl" />
                <p>Edit</p>
              </button>
            </div>
            <div className="bg-white p-4 mt-5 mx-4 rounded-xl">
              <div>
                {/* Logo */}
                <p className="text-2xl font-semibold">
                  A multiplexed control architecture for superconducting qubits
                  with row-column addressing
                </p>
              </div>
              <div className="flex space-x-2">
                <p className="text-lg flex items-center mt-2">
                  <IoPeopleOutline className="mr-2" /> Peng Zhao
                </p>
                <p className="text-lg flex items-center mt-2">
                  <IoMdTime className="mr-2" /> Updated 1 day ago
                </p>
                <p className="text-lg flex items-center mt-2">
                  <AiOutlineLink className="mr-2" /> Source
                </p>
              </div>
              <p className="text-xl mt-2">
                In state-of-the-art superconducting quantum processors, each
                qubit is controlled by at least one control line that delivers
                control pulses generated at room temperature to qubits operating
                at millikelvin temperatures. While this strategy has bee ...View
                More
              </p>
              <div className="flex space-x-2 mt-2 font-semibold">
                <button
                  className="text-lg flex border-2 border-gray-300 px-2 py-1 rounded-lg items-center"
                  onClick={onClickChat}
                >
                  <IoChatbubbleEllipsesOutline className="mr-2" /> Chat
                </button>
                <button className="text-lg flex items-center border-2 border-gray-300 px-2 py-1 rounded-lg">
                  <CgRemoveR className="mr-2" /> Remove from Library
                </button>
              </div>
            </div>
            <div className="bg-white p-4 mt-5 mx-4 rounded-xl">
              <div>
                {/* Logo */}
                <p className="text-2xl font-semibold">
                  A multiplexed control architecture for superconducting qubits
                  with row-column addressing
                </p>
              </div>
              <div className="flex space-x-2">
                <p className="text-lg flex items-center mt-2">
                  <IoPeopleOutline className="mr-2" /> Peng Zhao
                </p>
                <p className="text-lg flex items-center mt-2">
                  <IoMdTime className="mr-2" /> Updated 1 day ago
                </p>
                <p className="text-lg flex items-center mt-2">
                  <AiOutlineLink className="mr-2" /> Source
                </p>
              </div>
              <p className="text-xl mt-2">
                In state-of-the-art superconducting quantum processors, each
                qubit is controlled by at least one control line that delivers
                control pulses generated at room temperature to qubits operating
                at millikelvin temperatures. While this strategy has bee ...View
                More
              </p>
              <div className="flex space-x-2 mt-2 font-semibold">
                <button className="text-lg flex border-2 border-gray-300 px-2 py-1 rounded-lg items-center">
                  <IoChatbubbleEllipsesOutline className="mr-2" /> Chat
                </button>
                <button className="text-lg flex items-center border-2 border-gray-300 px-2 py-1 rounded-lg">
                  <CgRemoveR className="mr-2" /> Remove from Library
                </button>
              </div>
            </div>
            <div className="bg-white p-4 mt-5 mx-4 rounded-xl">
              <div>
                {/* Logo */}
                <p className="text-2xl font-semibold">
                  A multiplexed control architecture for superconducting qubits
                  with row-column addressing
                </p>
              </div>
              <div className="flex space-x-2">
                <p className="text-lg flex items-center mt-2">
                  <IoPeopleOutline className="mr-2" /> Peng Zhao
                </p>
                <p className="text-lg flex items-center mt-2">
                  <IoMdTime className="mr-2" /> Updated 1 day ago
                </p>
                <p className="text-lg flex items-center mt-2">
                  <AiOutlineLink className="mr-2" /> Source
                </p>
              </div>
              <p className="text-xl mt-2">
                In state-of-the-art superconducting quantum processors, each
                qubit is controlled by at least one control line that delivers
                control pulses generated at room temperature to qubits operating
                at millikelvin temperatures. While this strategy has bee ...View
                More
              </p>
              <div className="flex space-x-2 mt-2 font-semibold">
                <button className="text-lg flex border-2 border-gray-300 px-2 py-1 rounded-lg items-center">
                  <IoChatbubbleEllipsesOutline className="mr-2" /> Chat
                </button>
                <button className="text-lg flex items-center border-2 border-gray-300 px-2 py-1 rounded-lg">
                  <CgRemoveR className="mr-2" /> Remove from Library
                </button>
              </div>
            </div>
          </section>
        )}
        {chat && (
          <section className="flex bg-gray-200">
            <object data="../../Files/AIML_PS.pdf" type="application/pdf" width="100%" height="600px"/>
            <div className="w-1/2 text-3xl m-10 px-5 py-14 bg-green-200 rounded-xl ">
              <h2>Summary</h2>
              {/* Data */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur, maxime inventore quis ipsa nam, numquam deserunt
                temporibus quos facilis dolores voluptas quibusdam neque aliquid
                officiis! Mollitia labore qui, suscipit est voluptate sapiente
                quod. Vitae expedita sunt voluptatibus nihil alias deleniti
                autem quidem, laudantium sapiente aperiam reprehenderit id quae
                ipsam? Voluptas placeat quos ex atque, doloribus, numquam beatae
                eum minus, modi cumque mollitia consectetur delectus tenetur
                fuga! Ad minus distinctio neque earum harum quia temporibus
                optio, quam facere quidem fuga quas deleniti voluptatem sunt
                ullam, laudantium culpa. Quas expedita beatae, nisi ea maxime
                nemo, fuga eaque fugit suscipit quaerat vel ex.
              </p>
              <div className="flex justify-end">
                <FaRegThumbsUp className="mr-3 text-2xl" />
                <FaRegThumbsDown className="text-2xl" />
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default Chatbot;
