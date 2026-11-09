import CourseCard from "./components/CourseCard";
import "./App.css";

const courses = [
    {
        id: 1,
        title: "Python Basics",
        level: "Beginner",
        duration: "2 Months"
    },
    {
        id: 2,
        title: "React Development",
        level: "Intermediate",
        duration: "3 Months"
    },
    {
        id: 3,
        title: "Web Design",
        level: "Beginner",
        duration: "1 Month"
    },
    {
        id: 4,
        title: "Django Backend",
        level: "Advanced",
        duration: "4 Months"
    },
    {
        id: 5,
        title: "JavaScript Mastery",
        level: "Intermediate",
        duration: "2 Months"
    }
];

function App() {
    return (
        <div className="container">
            <h1>Course Catalogue</h1>

            <div className="course-container">
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))
                ) : (
                    <p>No courses available.</p>
                )}
            </div>
        </div>
    );
}

export default App;