
import logo from "../assets/logo.png";
import stories from "../assets/stories.png";
import Storefront from "../assets/Storefront.png";
import messagesquare from "../assets/messagesquare.png";

import Users from "../assets/Users.png";

const Sidebar = () => {
  return (
    <div className="flex">
      
        <aside className="hidden sm:block mt-4 sm:mt-0 px-2 py-2 bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-900 h-full fixed top-0 left-0 sm:w-56 md:w-64">
          
          <div className="flex  items-center px-4">
            <div>
              <img src={logo} className="h-10 w-10" alt="Logo" />
            </div>
            <span className="text-lg  text-white"> BabyCode</span>
          </div>
          <ul className="pt-4 space-y-1 px-3">
            <li className="flex items-center gap-x-2 p-2 text-white bg-sky-100 bg-opacity-15 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </li>
            <li className="flex items-center gap-x-2 p-2 text-white hover:bg-sky-100 hover:bg-opacity-10 rounded-md">
              <img src={Users} className="h-5 w-5" alt="svg" />
              Community
            </li>
            <li className=" flex items-center gap-x-2 p-2 text-white hover:bg-sky-100 hover:bg-opacity-10 rounded-md">
              <img src={stories} className="h-5 w-5" alt="svg" /> Stories
            </li>
            <li className="flex gap-x-2 items-center p-2 text-white hover:bg-sky-100 hover:bg-opacity-10 rounded-md">
              <img src={Storefront} className="h-5 w-5" alt="svg" />
              Shop
            </li>
            <li className="flex items-center gap-x-2 p-2 text-white hover:bg-sky-100 hover:bg-opacity-10 rounded-md">
              <img
                src={messagesquare}
                className="h-[1.10rem] w-[1.10rem]"
                alt="svg"
              />
              Feedback
            </li>
          </ul>

          <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-100 md:h-56 sm:h-64 w-full mt-32 rounded-md ">
            <div className="p-4">
              <p className="text-indigo-500 text-base font-medium ">
                Explore Premium
              </p>
              <p className="text-violet-500 text-base font-medium ">
                features with ease!
              </p>
            </div>
            <div className="space-y-1.5 px-4 mb-4">
              <p className="flex items-center gap-x-1 text-xs text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Unlimited Speaking Test Access
              </p>
              <p className="flex items-center gap-x-1 text-xs text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Unlimited Writing Test Access
              </p>
              <p className="flex items-center gap-x-1 text-xs text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Analyze Your Answer
              </p>
              <p className="flex items-center gap-x-1 text-xs text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Check Band Score
              </p>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-xs pl-4 font-medium">Only @ ₹ 299</p>
              <div className="flex items-center justify-center gap-x-1  md:w-[45%] p-1.5 h-max rounded-l-2xl bg-[#5917f3] shadow-xl cursor-pointer">
                <span className="text-white text-sm sm:text-xs fon">Buy Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white font-semibold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>


            <div className="flex pl-5 mx-5 p-1 gap-x-2 md:mt-5 sm:mt-4 hover:bg-sky-100 hover:bg-opacity-10 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white rotate-90 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              <span className="text-white">Logout</span>
            </div>
          </div>
        </aside>
      
     
    </div>
  );
};

export default Sidebar;
