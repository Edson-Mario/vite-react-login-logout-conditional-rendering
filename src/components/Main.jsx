import Status from './Status'

const Main = () =>{
    return(
        <div className='col-span-2 max-full'>
            <div>
                <header className="overflow-auto h-40">
                    <div className='flex gap-4'>
                        <Status />
                        <Status />
                        <Status />
                        <Status />
                        <Status />
                        <Status />
                        <Status />
                    </div>
                </header>
            
            <main className='mt-10'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum suscipit? Quo sint cumque tempora enim cupiditate placeat </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum suscipit? Quo sint cumque tempora enim cupiditate placeat </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum suscipit? Quo sint cumque tempora enim cupiditate placeat </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum suscipit? Quo sint cumque tempora enim cupiditate placeat </p>
            </main>
        </div>
        </div>
        
        
    )
}

export default Main