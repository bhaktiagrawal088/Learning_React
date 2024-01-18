import React from 'react'

function Card({username="BA" , post="Not assigned yet"}) {
  //console.log(props);
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
    src="https://i.pinimg.com/236x/ff/a5/e2/ffa5e23764aadad0914be952ca4e6445.jpg" alt="" width="384" height="512" />
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. ”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          {/* {props.username} */}
          {username}
          
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          {post}
        </div>
      </figcaption>
    </div>
  </figure>
  )
}
export default Card
