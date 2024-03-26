import  person   from "../assets/person.png"
import insta from "../assets/insta.png"
const Navbar = () => {
  return (
    <>
    <nav className="">
        <div className="sm:hidden  mt-auto h-28 w-full bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-900 ">
        <ul className="flex  items-center justify-between p-2 mx-5 ">
            <img src={person} className="block text-white hover:text-gray-800 h-10 w-10"/>
            <li className="block text-white hover:text-gray-800">Home</li>
            <img src={insta} className="block text-white hover:text-gray-800 h-10 w-10"/>
          </ul>
         <div className=" h-10 mx-24 pb-4">
         <div className="flex justify-between items-center rounded-3xl bg-slate-100 bg-opacity-10 p-1 list-none">
            <div className="bg-white px-3 py-1.5 rounded-3xl font-medium text-blue-600"> IELTS </div>
            <div className="text-white"> PTE</div>
            <span className="font-semibold text-white">|</span>
            <div className="text-white pr-1.5"> TOEFL</div>
           </div>
         </div>
        </div>
        </nav>

        </>
  )  
}

export default Navbar