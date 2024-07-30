import SuggestionItem from './SuggestionItem'
const NavBarLeft = () =>{
    return(
        <aside className="max-w-80 h-screen px-6 border-l py-8">
            <ul className='list-none flex flex-col gap-6'>
                <li><SuggestionItem text="Switch"/></li>
                <li>
                    <div className='flex justify-between px-2 mt-8 items-center'>
                        <p>Suggested for you</p>
                        <a className='text-xs font-medium text-slate-800 hover:text-slate-300
                        cursor-pointer'>See All</a>
                    </div>
                </li>
            <li><SuggestionItem  text="Follow"/></li>
            <li><SuggestionItem  text="Follow"/></li>
            <li><SuggestionItem  text="Follow"/></li>
            <li><SuggestionItem  text="Follow"/></li>
            <li><SuggestionItem  text="Follow"/></li>
            </ul>
        </aside>
    )
}

export default NavBarLeft