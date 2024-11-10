import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';
function Card(props) {
   let likedCourses = props.likedCourses;
   let setLikedCourses = props.setLikedCourses;
   function clickHandler(){
         if(likedCourses.includes(course.id)){
            //pahle se liked hai agar id liked courses me padi h
             setLikedCourses( (prev)=> prev.filter((cid)=> (cid != course.id)) );
             toast.warning('like removed');
         }else{
            //pahle se liked nhi h 
            // to insert karna h ye courses liked courses me
            if(likedCourses.length == 0){
                  setLikedCourses([course.id]);
            }else{
                  setLikedCourses( (prev)=>[...prev, course.id]);
            }
            toast.success("liked Successfully");
         }
   }
    let course = props.course;
    return (
    <div className='w-[300px] bg-[#505459] rounded-ms overflow-hidden'>
         <div className='relative'>
            <img src= {course.image.url} />
           <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3
            grid place-items-center '>
               <button onClick={clickHandler}>
                  {
                     likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize = "1.75rem" />)
                  }
               </button>
           </div>
         </div>
         <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                   course.description.length > 100 ?
                   (course.description.substr(0,100)) + "..." : (course.description)
                }
            </p>
         </div>
    </div>
  )
}

export default Card