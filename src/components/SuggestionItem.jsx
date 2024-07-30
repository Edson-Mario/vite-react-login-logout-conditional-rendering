import UserPicture from './UserPicture'

const SuggestionItem = ({text})=>{
    return(
        <div className='flex gap-6 text-sm justify-between items-center px-2'>
            <div className='flex gap-4'>
                <UserPicture />
                    <div>
                        <a className='block cursor-pointer' >sonyuno.marioedson</a>
                        <a className='text-slate-600'>Adilson Mario</a>
                    </div>
            </div>
            <a className='text-blue-400 text-xs font-medium text-right 
                        hover:text-slate-400 cursor-pointer'>{text}</a>
        </div>  
    )
}

export default SuggestionItem