  import { useState , useCallback, useEffect, useRef} from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'

  function App() {
    const [length , setlength] = useState(8);
    const[numberAllowed, setnumberAllowed] = useState(false);
    const [charAllowed, setcharAllowed] = useState(false);
    const [password , setpassword] = useState('');

    const passwdref = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += '0123456789';
    if(charAllowed) str += '!@#$%^&*()_+';

    for(let i=1; i<length; i++){
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass)
  },[length, numberAllowed, charAllowed])

  useEffect(()=>{
    generatePassword();
  },[length, numberAllowed, charAllowed])

  const copypasswordtoclipboard =  () =>{
    window.navigator.clipboard.writeText(password)
    passwdref.current?.select();
    // for specific suggestion
    //passwdref.current?.setSelectionRange(0,5)
  }

  return(
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8
    bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Passowrd Generator</h1>
    <div className='flex shandow rounded-lg overflow-hidden mb-4 '>
      <input 
      type='text' value={password}
      className='outline-none w-full  py-1 px-3 ' placeholder='password' readOnly 
      ref={passwdref}
      />
      <button onClick={copypasswordtoclipboard}
      className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'
      >Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type='range' min={6} max={50}
       value={length} className='cursor-pointer'
       onChange={(e) => setlength(e.target.value)}  
        name='' id=''/>
    <label htmlFor='length'>Length : {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
    <input type='checkbox' defaultChecked={numberAllowed}
    onChange={()=>setnumberAllowed((prev) => !prev)}
    name='' id='' />
    <label htmlFor='number' >Number</label>
    </div>
      <div className='flex items-center gap-x-1'>
      <input type='checkbox' defaultChecked={charAllowed}
      name='' id='CharacterInput'
      onChange={()=> {setcharAllowed((prev) => !prev)}}
      />
      <label htmlFor='CharacterInput'>Character</label>
    </div>
      </div>
    </div>
  )
  }

  export default App
