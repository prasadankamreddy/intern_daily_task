function CourseCard({ course }) {
    const title = course.title || "Untitled Course";

    return (
        <div className="course-card">
            <h2>{title}</h2>
            <p>Level: {course.level || "Not specified"}</p>
            <p>Duration: {course.duration || "Not specified"}</p>
        </div>
    );
}

export default CourseCard;