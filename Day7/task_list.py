def show_menu():
    print("\n--- Task Manager Menu ---")
    print("1. Add task")
    print("2. List tasks")
    print("3. Complete task")
    print("4. Exit")

def main():
    tasks = []
    
    while True:
        show_menu()
        choice = input("Choose an option (1-4): ").strip()
        
        if choice == '1':
            title = input("Enter task title: ").strip()
            if title:
                tasks.append({"title": title, "completed": False})
                print(f"Task '{title}' added successfully!")
            else:
                print("Task title cannot be empty.")
                
        elif choice == '2':
            if not tasks:
                print("No tasks found.")
            else:
                print("\n--- Task List ---")
                for index, task in enumerate(tasks, start=1):
                    status = "Completed" if task["completed"] else "Pending"
                    print(f"{index}. {task['title']} - [{status}]")
                    
        elif choice == '3':
            if not tasks:
                print("No tasks to complete.")
            else:
                for index, task in enumerate(tasks, start=1):
                    status = "Completed" if task["completed"] else "Pending"
                    print(f"{index}. {task['title']} - [{status}]")
                try:
                    task_num = int(input("Enter task number to mark as complete: "))
                    if 1 <= task_num <= len(tasks):
                        tasks[task_num - 1]["completed"] = True
                        print(f"Task '{tasks[task_num - 1]['title']}' marked as completed!")
                    else:
                        print("Invalid task number.")
                except ValueError:
                    print("Please enter a valid number.")
                    
        elif choice == '4':
            print("Exiting Task List. Goodbye!")
            break
        else:
            print("Invalid choice. Please choose between 1 and 4.")

if __name__ == "__main__":
    main()