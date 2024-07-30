
import {useRef, useState} from 'react'

const Login = ({addNewUser}) =>{
    const [username, setUsername]= useState('')
    const [password, setPassword] = useState('')

    const saveUser = () =>{
        const data ={
            username, password
        }
        console.log(data)
        addNewUser(data)
    }
    
    return(
        <div className="grid grid-cols-2 grid-rows-6 gap-y-12">
            <div className="max-w-md col-span-1 flex justify-end row-span-5">
               <img src="src/assets/insta-img.png" alt=""
               className="max-w-96 h-dvh"/>
            </div>
            <div className="max-w-md col-span-1 row-span-5 flex flex-col justify-center px-10 my-2">
                <div className="border flex flex-col items-center p-4 rounded-sm">
                    <img src="src/assets/Instagram-Logopng.png"
                     alt="" 
                     className="w-52"
                     />
                    <div
                    className="w-full flex flex-col p-6 justify-start"
                    >
                        <input type="text" 
                        placeholder="Telefone, nome do usuário ou email"
                        className="border py-2 px-4 outline-none text-slate-500 placeholder:text-sm rounded
                        mb-2"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        />
                        <input type="password" placeholder="senha"
                        className="border py-2 px-4 outline-none text-slate-500 placeholder:text-sm rounded"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <button
                        className="bg-sky-400 text-white text-sm font-medium py-2 rounded-md
                        mt-6 hover:bg-sky-500 cursor-pointer duration"
                        onClick={saveUser}
                        >Entrar</button>
                    </div>

                    <p className="mb-6"> 
                        <img src="src/assets/facebook.png" className="w-5 inline" alt="Facebbok icon" />
                        <a className="text-blue-950 font-medium"> Entrar com facebook</a>
                    </p>
                    <a className="text-xs text-blue-900">Esqueceu a senha?</a>
                </div>
                <div className="border mt-4 py-4 text-center">
                    <p className="text-sm">Não tem uma conta? <a className="text-sky-400">Cadastra-se</a></p>
                </div>
                <p className="text-center my-3">Obtenha o aplicativo</p>

                <div className="flex justify-center gap-2">
                    <img
                    className="w-32"
                    src="src/assets/apple.png" alt="" />
                    <img src="src/assets/google.png"
                    className="w-32"
                    alt="" />
                </div>
            </div>
            <div className="flex flex-col col-span-2 row-span-1 text-xs text-gray-600 px-5 items-center gap-4 mt-2">
                <ul className="flex gap-2">
                    <li>Meta</li>
                    <li>Sobre</li>
                    <li>Blog</li>
                    <li>Carreiras</li>
                    <li>Ajuda</li>
                    <li>API</li>
                    <li>Privacidade</li>
                    <li>Termos</li>
                    <li>Localizações</li>
                    <li>Instagram Lite</li>
                    <li>Threads</li>
                    <li>Carregamento de contatos e não usuários</li>
                    <li>Meta Verified</li>
                </ul>
                <ul className="flex gap-2 items-center">
                    <li>Português</li>
                    <li>© 2024 Instagram from Meta</li>
                </ul>
                
            </div>
        </div>
    )
}

export default Login