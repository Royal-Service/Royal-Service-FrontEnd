import React from 'react'

function Review({allReview}) {
    // console.log(rate[2].reviews[0])
  return (
    <div style={{maxHeight: "500px"}}>
        {allReview.map((item,index )=>{
            // subject = name
            return(<div >
                <h6 style={{textAlign :"left" }} >Review Number : {index +1}</h6>
                <br></br>
                <h3>User : {item.subject}</h3>
                <h3>Review : {item.review}</h3>
                <h3>Rating : {item.rating}</h3>
                <hr></hr>
                </div>)
            
        })}
       </div>
  )
}

export default Review