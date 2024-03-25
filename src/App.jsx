import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import person from "./assets/person.png";
import poster from "./assets/poster.png";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import speaking from './assets/speaking.png';
import listening from './assets/listening.png';
import reading from './assets/reading.png';
import writing from './assets/writing.png';
import vocabulary from './assets/vocabulary.png';
import classes from './assets/classes.png';
import book from './assets/book.png';
import students from './assets/student.png';
import consultant from './assets/consultunt.png';
import youtube from "./assets/youtube.png";
import ArrowCircleRight from './assets/ArrowCircleRight.png';
import checklist from './assets/checklist_2936769 1.png';
import whatsapp from './assets/whatsapp.png';
import poster2 from './assets/poster2.png';
import footer from './assets/footer.png';
function App() {
  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  useEffect(() => {
    const xAxisLabels = [5.0, 6.0, 6.5, 7.0, 7.5, 8.0];
    const yAxisLabels = [
      "17 Feb",
      "18 Feb",
      "19 Feb",
      "20 Feb",
      "21 Feb",
      "22 Feb",
    ];
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        if (chartInstance.current) {
          if (width <= 640) {
            chartInstance.current.options.aspectRatio = 2; // Adjust aspect ratio for smaller screens
          } else {
            chartInstance.current.options.aspectRatio = NaN; // Default aspect ratio for larger screens
          }
          chartInstance.current.resize();
        }
      }
    });

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const data = [
        { date: "16 Feb", value: 5.0 },
        { date: "17 Feb", value: 6.0 },
        { date: "18 Feb", value: 6.5 },
        { date: "19 Feb", value: 7.0 },
        { date: "20 Feb", value: 7.5 },
        // { date: '22 Feb', value: null },
      ];

      const chartData = {
        datasets: [
          {
            label: "Data",
            data: data.map((item) => ({ x: item.date, y: item.value })),
            borderColor: "blue",
            borderWidth: 2,
            pointRadius: 5,
            tension: 0.8,
            pointBackgroundColor: "#fff",
            borderDash: [],
          },
        ],
      };

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: chartData,
        options: {
          aspectRatio: NaN,
          scales: {
            x: {
              ticks: {
                callback: (value, index) => {
                  if (index < xAxisLabels.length) {
                    return xAxisLabels[index];
                  }
                  return value;
                },
                grid: {
                  // Hide y-axis gridlines
                  display: false,
                },
              },
            },
            y: {
              ticks: {
                callback: (value, index) => {
                  if (index < yAxisLabels.length) {
                    return yAxisLabels[index];
                  }
                  return value;
                },
              },
              grid: {
                // Hide y-axis gridlines
                display: false,
              },
              suggestedMax: 5.0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: true,
            },
          },
        },
      });

      resizeObserver.observe(chartRef.current.parentElement);
    }

    // Cleanup function
    return () => {
      // Destroy the chart instance when the component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="container h-full ">
      <Navbar />
      <div className="container flex flex-row ">
        <div className="sm:w-56 md:w-64 flex-none">
          <Sidebar />
        </div>
        <section className="flex-auto h-full mx-5 sm:mx-0 md:mx-0 lg:mx-0 ">
          <div className=" hidden sm:flex justify-end items-center mt-4">
            <img src={person} alt="Person" className="h-7 w-7 " />
          </div>
          <h1 className="hidden sm:block ml-3 md:ml-10 text-lg font-medium ">
            Your Progress Summary
          </h1>
          <div className="sm:hidden w-full h-10 mt-2 rounded-lg bg-white border-2 border-gradient shadow-lg flex justify-between items-center p-2">
            <h1 className="text-xs font-medium">How many Students we helped?</h1>
            <button className="text-xs font-medium text-orange-400 bg-orange-100 p-1 rounded-xl px-2 ">Check</button>
          </div>
          <div className="w-full sm:mt-2 mt-5 flex justify-between items-center mb-4">
            <div className="graph bg-white sm:mx-0 md:mx-0 sm:ml-3 md:ml-10 w-full sm:w-[65%] md:w-[65%] lg:w-[65%]  h-64 sm:h-60 rounded-md shadow-lg py-1 px-2">

              <h1 className="hidden sm:block bg-yellow-100 rounded-md p-1 text-sm">
                  {/* eslint-disable-next-line */}
                <span className=" text-teal-400 text-sm">Wow!</span> you're
                about to reach your targeted band{" "}
              </h1>
              <h1 className="sm:hidden text-sm font-medium mb-1  ">
               Your progress summary 
              </h1>
              <div className="md:h-52 md:w-full">
                <canvas ref={chartRef}></canvas>
              </div>
              <h1 className="sm:hidden bg-yellow-100 rounded-md p-1 text-xs mt-3 ">
                  {/* eslint-disable-next-line */}
                <span className=" text-teal-400 text-sm">Wow!</span> you're
                about to reach your targeted band{" "}
              </h1>
            </div>
            {/* poster */}
            <div
              className="poster w-[30%] h-48 sm:h-60 md:h-60 bg-cover bg-center hidden sm:flex flex-col justify-end items-center p-3 rounded-lg shadow-md  "
              style={{ backgroundImage: `url(${poster})` }}
            >
              <h1 className="text-white text-opacity-85 text-center font-serif text-xl">
                One Share can save{" "}
              </h1>
              <h1 className="text-white text-opacity-85 text-center font-serif text-xl">
                Many lives
              </h1>
              <h5 className="text-slate-100 text-opacity-50 text-center  text-xs mt-1">
                Your one share can unlock a world of
              </h5>
              <h5 className="text-slate-100 text-opacity-50 text-center  text-xs mb-1">
                education for unpriviledge
              </h5>
              <button className=" bg-white rounded-2xl py-1 md:px-7 text-xs font-medium">
                Share App
              </button>
            </div>
          </div>
          <h1 className="hidden sm:block ml-3 md:ml-10 mt-7 text-lg font-medium ">
            Prepare with ease
          </h1>
          <div className="w-full sm:mt-2 mt-5 gap-x-2 flex justify-between flex-col sm:flex-row mb-4 relative">
            <div className=" grid grid-cols-3 gap-2 sm:gap-3 md:gap-3 sm:grid-cols4 md:grid-cols-4 sm:mx-0 md:mx-0 sm:ml-3 md:ml-10 w-full sm:w-[65%] md:w-[65%] lg:w-[65%]  h-64 sm:h-60">
              <div className="flex justify-center items-center flex-col">
               <img src={speaking} alt="img" />
               <span className="text-center text-sm  font-medium">Speaking</span>
              </div>
              <div className="flex justify-center items-center flex-col">
               <img src={listening} alt="img" />
               <span className="text-center text-sm  font-medium">Listening</span>
              </div>
              <div className="flex justify-center items-center flex-col">
               <img src={reading} alt="img" />
               <span className="text-center text-sm  font-medium">Reading</span>
              </div>
              <div className="flex justify-center items-center flex-col">
               <img src={writing} alt="img" />
               <span className="text-center text-sm  font-medium">Writting</span>
              </div>
              <div className="flex justify-center items-center flex-col">
               <img src={vocabulary} alt="img" />
               <span className="text-center text-sm  font-medium">Vocabulary</span>
              </div>
              <div className="flex justify-center items-center flex-col">
               <img src={classes} alt="img" />
               <span className="text-center text-sm  font-medium">Classes</span>
              </div>
              <div className="flex justify-center items-center flex-col">
               <img src={book} alt="img" />
               <span className="text-center text-xs  font-medium">Book IELTS Exam</span>
              </div>
              <div className="flex justify-center items-center flex-col">
               <img src={students} alt="img" />
               <span className="text-center text-sm  font-medium">Student News</span>
              </div>
              <div className="sm:hidden">
               <img src={consultant} alt="img" />
               <span className="text-center text-sm  font-medium">Consultancy</span>
              </div>
            </div>
            
            <div className="sm:hidden w-full   mt-[8rem] rounded-lg bg-white border-2 border-gradient shadow-lg flex justify-between items-center p-2">
              <img src={checklist} alt="" className="h-8 w-8"/>
            <div className="flex flex-col ml-1">
            <h1 className="text-xs
             font-medium ">Practise Mock Test</h1>
             <h3 className="text-xs text-gray-400">Get the authentic IELTS exam experience with all four modules cover</h3>
            </div>
           <img src={ArrowCircleRight} alt="" className="h-7 w-7" />
          </div>    


          <div className="bg-[#c4cefc]  w-full mt-4 rounded-md sm:hidden relative pb-4">
            <div className="p-4">
              <p className="text-indigo-500 text-lg font-medium ">
                Explore Premium features with ease!
              </p>

            </div>
            <div className="space-y-1.5 px-4 ">
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
            <div className="absolute right-0 bottom-6 ">
              <p className="text-xs pl-4 font-medium mr-1">Only @ ₹ 299 </p>
              <div className="flex items-center justify-center gap-x-1 px-1 p-1.5 h-max rounded-l-2xl bg-[#5917f3] shadow-xl cursor-pointer w-full">
                <span className="text-white text-sm fon">Buy Now</span>
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
          </div>

          <h1 className="font-base mt-5 sm:hidden">Quick Actions</h1>
         
          <div className="w-full sm:hidden flex gap-x-3 justify-between items-center mt-2">
            <div className="flex items-center gap-x-1 w-1/2 bg-white p-2 shadow-md rounded-md">
              <img src={youtube} alt="img" className="h-5 w-5" />
              <h1 className="text-xs text-gray-500 font-medium">App Guid Video</h1>
            </div>
            <div className="flex items-center gap-x-1 w-1/2 bg-white p-2 shadow-md rounded-md">
            <img src={whatsapp} alt="img" className="h-5 w-5" />
              <h1 className="text-xs text-gray-500 font-medium">Help & support</h1>
            </div>
          </div>
          
          <div
              className="poster mt-3 h-48 sm:h-60 md:h-60 bg-cover bg-center sm:hidden flex flex-col justify-end items-center p-3 rounded-lg shadow-md  "
              style={{ backgroundImage: `url(${poster2})` }}
            >
            </div>
            
            <div className='mt-5 mb-5 sm:hidden'>
              <img src={footer} alt="" className="bg-cover bg-center rounded-md"/>
            </div>


         
            <div className="hidden sm:flex flex-col gap-y-3 w-[35%] h-auto mx-3 ">
             <div className="flex justify-center items-center gap-x-1 bg-white w-full h-10 rounded-lg shadow-md">
              <img src={youtube} alt="" className="h-5 w-5"/>
              <span className=" text-slate-500">App Guide Video</span>
             </div>
             <div className="w-full p-2.5 bg-white rounded-lg shadow-md">
              <h1 className="font-medium">Practice Mock Test</h1>
              <h4 className="text-xs text-gray-400 mt-1">Get the authentic IELTS exam</h4>
              <h4 className="text-xs text-gray-400">experience with all four modules</h4>
              <h4 className="text-xs text-gray-400">covered!</h4>
              <button className=" text-center rounded-2xl py-1 mb-1 mt-2 w-full bg-blue-600 text-white">Start</button>
             </div>
            </div>
            </div>
        
         
        </section>
      </div>
     
    </div>
  );
}

export default App;
