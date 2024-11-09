import React from 'react';
import Card from './Card';

function Cards(props) {
    const courses = props.courses;

    function getCourses() {
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(data => {
                allCourses.push(data);
            });
        });
        return allCourses;
    }

    return (
        <div>
            {getCourses().map(course => (
                <Card key={course.id} course={course} />  // Add return statement here
            ))}
        </div>
    );
}

export default Cards;
