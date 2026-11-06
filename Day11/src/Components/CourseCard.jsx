function CourseCard({ title, level, duration }) {
    return (
        <div className="course-card">
            <h2>{title}</h2>
            <p>Level: {level}</p>
            <p>Duration: {duration}</p>
        </div>
    );
}

export default CourseCard;