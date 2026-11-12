import json
import os

FILE_NAME = "tasks.json"


def load_tasks():
    if not os.path.exists(FILE_NAME):
        return []

    try:
        with open(FILE_NAME, "r") as file:
            return json.load(file)
    except (json.JSONDecodeError, OSError):
        return []


def save_tasks(tasks):
    with open(FILE_NAME, "w") as file:
        json.dump(tasks, file, indent=4)


def show_tasks(tasks):
    if not tasks:
        print("No tasks available.")
        return

    for task in tasks:
        status = "Completed" if task["completed"] else "Pending"

        print(
            f'ID: {task["id"]} | '
            f'Title: {task["title"]} | '
            f'Category: {task["category"]} | '
            f'Status: {status}'
        )


def add_task(tasks):
    title = input("Enter task title: ").strip()

    if not title:
        print("Title cannot be blank!")
        return

    category = input("Enter category: ").strip()

    new_task = {
        "id": max((task["id"] for task in tasks), default=0) + 1,
        "title": title,
        "category": category or "General",
        "completed": False
    }

    tasks.append(new_task)
    save_tasks(tasks)

    print("Task added successfully!")


def complete_task(tasks):
    show_tasks(tasks)

    try:
        task_id = int(input("Enter task ID: "))
    except ValueError:
        print("Please enter a valid ID.")
        return

    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = True
            save_tasks(tasks)
            print("Task completed successfully!")
            return

    print("Task not found.")


def main():
    tasks = load_tasks()

    while True:
        print("\n===== FILE TRACKER =====")
        print("1. Show Tasks")
        print("2. Add Task")
        print("3. Complete Task")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            show_tasks(tasks)

        elif choice == "2":
            add_task(tasks)

        elif choice == "3":
            complete_task(tasks)

        elif choice == "4":
            print("Program closed.")
            break

        else:
            print("Invalid choice. Try again.")


if __name__ == "__main__":
    main()
