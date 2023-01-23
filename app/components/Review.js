import React from 'react'

function Review({allReview}) {
    // console.log(rate[2].reviews[0])
  return (
    <div>
        {allReview.map((item)=>{
            // subject = name
            return(<div>
                <h3>{item.subject}</h3>
                <h3>{item.review}</h3>
                <h3>{item.rating}</h3>
                </div>)
            
        })}
       </div>
  )
}

export default Review