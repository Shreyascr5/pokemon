import React from 'react'

function Pagination({gotoNextPage,gotoPrevPAge}) {
  return (
    <div>
       {gotoPrevPAge && <button onClick={gotoPrevPAge}>Previous</button>}
        {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}

export default Pagination