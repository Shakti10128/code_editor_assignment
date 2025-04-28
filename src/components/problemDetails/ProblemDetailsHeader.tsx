import logo from '../../assets/logo.png'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { TfiTimer } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ProblemDetailsHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="h-14 flex justify-between items-center bg-[#282828]">

            {/* logo */}
            <div className='w-1/3 h-full flex items-center justify-start'>
                <img src={logo} className='h-8 ml-2 lg:ml-6 cursor-pointer'
                onClick={()=>navigate("/")}
                />
            </div>

            {/* question navigation */}
            <div className='w-1/3 gap-3 h-full flex justify-center items-center cursor-pointer'>
                <button className='p-2 rounded-md bg-neutral-600 cursor-pointer'>
                    <FaChevronLeft/>
                </button>
                <div className='flex gap-1 justify-center items-center font-semibold'
                onClick={()=>navigate("/")}
                >
                    <IoMenu/>
                    <span>Problem List</span>
                </div>
                <button className='p-2 rounded-md bg-neutral-600 cursor-pointer'>
                    <FaChevronRight/>
                </button>
            </div>

            {/* user account details */}
            <div className='w-1/3 h-full flex justify-end items-center pr-2 lg:pr-5'>
                <div className='gap-5 flex justify-center items-center h-full'>
                    <TfiTimer className='h-8 w-8 font-bold cursor-pointer'/>
                    <CgProfile className='h-8 w-8 font-bold cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProblemDetailsHeader;