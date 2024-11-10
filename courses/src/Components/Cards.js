import React, { useState } from 'react';
import Card from './Card';

function Cards(props) {
    const courses = props.courses;
    const category = props.category;
    const[likedCourses,setLikedCourses] = useState([]);

    function getCourses() {
       if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(data => {
                    allCourses.push(data);
                });
            });
            return allCourses;
       }
       return courses[category];
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {getCourses().map(course => (
                <Card key={course.id} course={course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses}/>  // Add return statement here
            ))}
        </div>
    );
}

export default Cards;
