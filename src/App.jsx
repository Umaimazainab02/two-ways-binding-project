import React, { useState } from 'react'

const App = () => {
  const [notes, setnotes] = useState('')
  const [detail, setdetail] = useState('')
  const [task, settask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({ notes, detail })
    settask(copyTask)
    setnotes('')
    setdetail('')
  }
    const deleteNote = (index) => {
  const copyTask = [...task]
  copyTask.splice(index, 1)
  settask(copyTask)

  }
  return (
    <div className="h-screen bg-black text-white ">
      <div className="flex flex-col lg:flex-row ">
        <div className='flex flex-col  w-full lg:w-1/2 mr-1 px-6 lg:px-0 lg:pl-8' >
          <h1 className="text-4xl font-bold mb-10 mt-5">
            Add Notes <br />
          </h1>


          {/* Left Side - Form */}
          <form onSubmit={submitHandler} className="flex flex-col gap-5 ">

            <input
              type="text"
              placeholder="Enter Notes Heading"
              className="border border-white w-full lg:w-[90%]  text-white p-3 rounded"
              value={notes}
              onChange={(e) => {
                setnotes(e.target.value)
              }}
            />

            <textarea
              placeholder="Write details"
              className="border border-white w-full lg:w-[90%]  text-white p-3 h-50 rounded"
              value={detail}
              onChange={(e) => {
                setdetail(e.target.value)
              }}
            />

            <button
              type="submit"
              className="bg-white text-black w-full lg:w-[90%] p-3 rounded hover:scale-102"
            >
              Add Notes
            </button>

          </form>
        </div>
        {/* Right Side - Recent Notes */}
<div className="w-full lg:w-1/2 h-screen lg:border-l-2 border-white pl-6 lg:pl-8">

  <h2 className="text-4xl font-bold mb-5 mt-5">
    Recent Notes
  </h2>

  <div className="flex flex-wrap gap-5 overflow-auto ">

    {task.map((item, index) => {
      return (
        
        <div
          key={index}
          className="h-55 w-68 lg:w-45 rounded-2xl  p-8 bg-center bg-no-repeat  justify-between bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGBdtlnnXXyXBQmyk4NtQd-Yt6ldulz8r5HrrkPmElQ&s=10')] text-black overflow-auto"
        >
          <h3 className="text-xl font-bold">
            {item.notes}
          </h3>

          <p className="mt-3">
            {item.detail}
          </p>
          <button onClick={() => deleteNote(index)} className='mt-20  w-fit px-5  cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
       </div>
      )
    })}

  </div>

</div>

</div>

</div>
)
}


export default App