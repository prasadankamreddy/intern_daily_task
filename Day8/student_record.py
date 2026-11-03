def student_manager():
    students = {}

    while True:
        print("\n--- Student Records Menu ---")
        print("1. Add Student")
        print("2. Find Student")
        print("3. Show Class Average")
        print("4. Exit")
        
        choice = input("Choose an option (1-4): ").strip()
        
        if choice == '1':
            name = input("Enter student name: ").strip().title()
            if not name:
                print("Error: Name cannot be blank.")
                continue
            
            try:
                mark = float(input(f"Enter mark for {name} (0-100): ")) 
                if not (0 <= mark <= 100):
                    print("Error: Invalid mark! Must be between 0 and 100.")
                    continue
                students[name] = mark
                print(f"Success: Added {name} with mark {mark}.")
            except ValueError:
                print("Error: Please enter a valid numerical mark.")
                
        elif choice == '2':
            name = input("Enter student name to find: ").strip().title()
            if name in students:
                print(f"Found: {name} scored {students[name]}.")
            else:
                print(f"Test Result: Student '{name}' not found in records.")
                
        elif choice == '3':
            if not students:
                print("Class average: No records available yet.")
            else:
                avg = sum(students.values()) / len(students)
                print(f"Class Average Mark: {avg:.2f}")
                
        elif choice == '4':
            print("Exiting student records. Goodbye!")
            break
        else:
            print("Invalid choice. Please pick between 1 and 4.")

if __name__ == "__main__":
    student_manager()