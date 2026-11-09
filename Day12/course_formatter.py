courses = [
    {
        "id": 1,
        "title": "Python Basics",
        "level": "Beginner",
        "duration": "2 Months"
    },
    {
        "id": 2,
        "title": "React Development",
        "level": "Intermediate",
        "duration": "3 Months"
    }
]

results = []

def format_courses(courses):

    if not courses:
        return "No courses available."

    

    for i in courses:
        results.append(format_course(i))

    return "\n\n".join(results)

def format_course(course):
    title = course.get("title") or "Untitled Course"
    level = course.get("level") or "Not specified"
    duration = course.get("duration") or "Not specified"

    return (
        f"Title: {title}\n"
        f"Level: {level}\n"
        f"Duration: {duration}"
    )

print(format_courses(courses))
