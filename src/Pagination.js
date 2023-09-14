import React from 'react'

function Pagination({gotoNextPage,gotoPrevPAge}) {
  return (
    <div className='navig'>
       {gotoPrevPAge && <button className='button' onClick={gotoPrevPAge}>Previous</button>}
        {gotoNextPage && <button  className='button' onClick={gotoNextPage}>Next</button>}
    </div>
  )
}

export default Pagination