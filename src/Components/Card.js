import React from 'react'
import {FcLike , FcLikePlaceholder} from "react-icons/fc"
import {toast} from "react-toastify" 
const Card = (props) => {

  let likedCourses = props.likedCourses;
  let setlikedCourses= props.setlikedCourses;
  let course = props.course;

  function clickHandler() {
    if(likedCourses.includes(course.id)){
      //already liked
      setlikedCourses((prev)=> prev.filter((cid) => (cid !== course.id ) ) );
      toast.warning("Like Removed");
    }

    else {
      //not liked
      //insert this course into liked courses
      if(likedCourses.length === 0){
        setlikedCourses([course.id]);
      }

      else{
        //non empty
        setlikedCourses((prev) => [...prev , course.id]);
      }
      toast.success("Liked Success");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80">

      <div className="relative">
        <img src={course.image.url} alt=''></img>

      <div  className="rounded-full absolute w-[40px] h-[40px] 
      bg-white right-2 bottom-[-12px] grid place-items-center">

        <button onClick={clickHandler}>
         {
          !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) : (<FcLike fontSize="1.75rem" />)
        }
        </button>
      
      </div>

      </div>

      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="text-white mt-2 ">
        {
          course.description.length > 100 ? (course.description.substring(0,100)+"...") : (course.description)
        }
        </p>
      </div>
    
    </div>
  )
}

export default Card;