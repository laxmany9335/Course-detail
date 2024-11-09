import React from 'react'
import { CiHeart } from "react-icons/ci";
function Card(props) {
    let course = props.course;
    return (
    <div>
         <div>
            <img src= {course.image.url} />
            <button>
                   <CiHeart />
            </button>
         </div>
         <div>
            <p>{course.title}</p>
            <p>{course.description}</p>
         </div>
    </div>
  )
}

export default Card