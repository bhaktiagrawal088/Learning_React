import React, { useEffect } from 'react'

function Github() {

    const [data , setdata] = React.useState([])
    useEffect(()=>{
        fetch('')
        .then((response)=> response.json())
        .then(data => {
            console.log(data);
            setdata(data)
        })
    })

  return (
    <div className='text-center bg-gray-700 text-white text-3xl p-4 m-4'>
      Github
    </div>
  )
}

export default Github
