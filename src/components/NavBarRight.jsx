import {useState} from 'react'
import { IoMdHome } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { PiFilmReelLight } from "react-icons/pi";
import { BiMessageRounded } from "react-icons/bi"
import { IoMdHeartEmpty } from "react-icons/io";
import { VscDiffAdded } from "react-icons/vsc";
import { IoIosMenu } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import UserPicture from './UserPicture'

function NavBarRight({addLogout}){   
    
    const [logout, setLogout] = useState(false)

    const sendLogout = () =>{
        setLogout(!logout)
        const data = logout;
        addLogout(data)
    }

    const style = "flex gap-2 items-center hover:bg-zinc-100 py-2 ps-2 pe-14 rounded-md cursor-pointer hover:duration-300 "
    return(
        <aside className='max-w-72 h-screen px-6 border-r'>
            <div className='h-24 flex items-center justify-start'>
                <img src="src/assets/Instagram-Logopng.png" alt="" 
                className="w-30 h-14"/>
            </div>
            <nav>
                <ul className=' flex flex-col gap-1'>
                    <li className={style}><IoMdHome className="text-3xl" /><a>Home</a></li>
                    <li className={style}><IoSearchOutline  className="text-3xl"/><a>Search</a></li>
                    <li className={style}><MdOutlineExplore   className="text-3xl"/><a>Explore</a></li>
                    <li className={style}><PiFilmReelLight  className="text-3xl"/><a>Reel</a></li>
                    <li className={style}><BiMessageRounded  className="text-3xl"/><a>Messages</a></li>
                    <li className={style}><IoMdHeartEmpty  className="text-3xl"/><a>Notification</a></li>
                    <li className={style}><VscDiffAdded  className="text-3xl"/><a>Create</a></li>
                    <li className={style}><UserPicture /><a>Profile</a></li>
                    <li className={style}><IoIosMenu  className="text-3xl"/><a>More</a></li>
                    <li className={style} onClick={sendLogout}><IoIosLogOut className="text-3xl"/>
                    <a>Log out</a>
                    </li>
                </ul>  
            </nav>
        </aside>
    )
}

export default NavBarRight