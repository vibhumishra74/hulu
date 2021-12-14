import request from "../utils/request"
import {useRouter} from 'next/router'
function Nav() {
    const router = useRouter()
    return (
        <nav className='relative'>
            <div className='flex whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll text-2xl sm:px-20 px-10 scrollbar-hide'>
                {Object.entries(request).map(([key,{title,url}],i)=>(
                   <h2 key={i}
                   onClick={()=>router.push(`/?genre=${key}`)}
                   className='last:pr-24 cursor-pointer transition dusration-100 transform hover:scale-125 hover:text-white active:text-red-500 '
                   >{title}</h2>
                ))}
                
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
        </nav>
    )
}

export default Nav
