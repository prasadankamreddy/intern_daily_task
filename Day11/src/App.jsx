import CourseCard from "./components/CourseCard";
import "./App.css";

function App() {

    const courses = [
        {
            id: 1,
            title: "Python Full Stack",
            level: "Beginner",
            duration: "3 Months"
        },
        {
            id: 2,
            title: "React Development",
            level: "Intermediate",
            duration: "2 Months"
        },
        {
            id: 3,
            title: "Web Development",
            level: "Beginner",
            duration: "4 Months"
        }
    ];

    return (
        <div className="container">
            <h1>Available Courses</h1>

            <div className="course-container">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        title={course.title}
                        level={course.level}
                        duration={course.duration}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;