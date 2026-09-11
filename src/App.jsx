import React from 'react'

const App = () => {
  return (
    <div className='bg-black '>

    <form className='flex flex-col p-10 m-10 '>
      <input type="text" placeholder="Enter Notes Heading" className='border-white bg-gray-900 text-white' />
      <input type="text" placeholder="Write details" />
    </form>
    <button>Add notes</button>
    </div>
  )
}

export default App