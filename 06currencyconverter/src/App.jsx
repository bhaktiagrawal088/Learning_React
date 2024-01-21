import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usecurrencyInfo from './hooks/usecurrencyInfo'
import {Inputbox} from './component/Index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = usecurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(parseFloat(amount*currencyInfo[to]).toFixed(2));
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center 
    items-center bg-cover bg-no-repeat'
    style={{ backgroundImage: `url(https://i.pinimg.com/564x/e2/4f/eb/e24feb9118f26b7d10194aac6af73db7.jpg)` }}>
    <div className='w-full'>
      <div className='w-full max-w-md mx-auto border border-black rounded-lg p-5
      backdrop-blur-sm bg-blue-100'>
      <form onSubmit={(e)=>{
        e.preventDefault();
        convert()
      }}>
        <div className='w-full mb-1'>
        <Inputbox 
          label='from'
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=> setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}
          selectedCurrency={from}
        />
        </div>
        <div className='relative w-full h-0.5'>
        <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
        border-white rounded-md bg-yellow-500 text-white px-2 py-0.5'
        onClick={swap}
        >Swap</button>
        </div>
        <div className='w-full mb-1'>
        <Inputbox 
          label='to'
          currencyOptions={options}
          amount={convertedAmount}
          onCurrencyChange={(currency)=> setTo(currency)}
          selectedCurrency={to}
          amountDisabled
        />
        </div>
        <button
        type='submit' 
        className='w-full bg-red-400 text-white px-4 py-3 rounded-lg'
        >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </form>

      </div>
    </div>
    </div>
  )
}

export default App