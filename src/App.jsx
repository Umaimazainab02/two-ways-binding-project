import React from 'react'

const App = () => {
  return (
    <div className="h-screen bg-black text-white ">
      <div className="flex flex-col lg:flex-row ">
        <div className='flex flex-col  w-full lg:w-1/2 mr-1 pl-8' >
          <h1 className="text-4xl font-bold mb-10 mt-5">
            Add Notes <br />
          </h1>


          {/* Left Side - Form */}
          <form className="flex flex-col gap-5 ">

            <input
              type="text"
              placeholder="Enter Notes Heading"
              className="border border-white w-full lg:w-[90%] bg-gray-900 text-white p-3 rounded"
            />

            <textarea
              placeholder="Write details"
              className="border border-white w-full lg:w-[90%] bg-gray-900 text-white p-3 h-50 rounded"
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
        <div className="w-full lg:w-3/5 h-screen border-l-2 border-white pl-5">

          <h2 className="text-3xl font-bold mb-5 mt-5 ">
            Recent Notes
          </h2>

          <div className="flex flex-wrap gap-5 overflow-auto">

            <div className="h-55 w-50 rounded-2xl bg-white"></div>

            <div className="h-55 w-50 rounded-2xl bg-white"></div>
            <div className="h-55 w-50 rounded-2xl bg-white"></div>
            <div className="h-55 w-50 rounded-2xl bg-white"></div>
            

          </div>

        </div>

      </div>

    </div>
  )
}

export default App