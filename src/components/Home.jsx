import NavBarRight from './NavBarRight'
import NavBarLeft from './NavBarLeft'
import Main from './Main'

const Home = ({addLogout}) =>{

    const sendLogout = (logout) =>{ 
        addLogout(logout)
    }

    return(
        <div className='grid grid-cols-4 justify-center'>
            <NavBarRight addLogout={sendLogout}  className="col-span-1"/>
            <Main/>
            <NavBarLeft className="col-span-1"/>
        </div>
    )
}

export default Home