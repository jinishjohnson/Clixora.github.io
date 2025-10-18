
import React from 'react'
import Counter from './Counter'

const CGrid = () => {
  return (
    <div className='w-full px-4 py-8 md:px-8 lg:px-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'> 
          <div>
            <Counter title={'Projects'} target={'1000'}  />
          </div>
          <div>
            <Counter title={'Clients'}  target={'500'} />
          </div>
          <div>
            <Counter title={'Followers'} target={'100'} />
          </div>
          <div>
            <Counter title={'Revenue'} target={'100'} />
          </div>
        </div>
    </div>
  )
}

export default CGrid
