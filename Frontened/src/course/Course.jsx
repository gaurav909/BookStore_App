import Courses from "../components/Courses"
import Footer from "../components/Footer"
import Navabar from "../components/Navabar"




const Course = () => {
  
  return (
   <>
   <Navabar/>
   <div className="min-h-screen">
   <Courses />
   </div>
   <Footer/>
   </>
  )
}

export default Course