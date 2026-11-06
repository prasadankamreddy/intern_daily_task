courses = [
    {
        "id": 1,
        "title": "Python Full Stack",
        "level": "Beginner",
        "duration": "3 Months"
    },
    {
        "id": 2,
        "title": "React Development",
        "level": "Intermediate",
        "duration": "2 Months"
    },
    {
        "id": 3,
        "title": "Web Development",
        "level": "Beginner",
        "duration": "4 Months"
    }
]


def format_course(course):

    print("----------------------------")
    print("Course:", course["title"])
    print("Level:", course["level"])
    print("Duration:", course["duration"])
    print("----------------------------")


def display_courses():

    for course in courses:
        format_course(course)


if __name__ == "__main__":
    display_courses()