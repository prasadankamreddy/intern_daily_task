import json
import os

FILE_NAME = "data.json"


def load_records():
    if not os.path.exists(FILE_NAME):
        return []

    try:
        with open(FILE_NAME, "r") as file:
            data = json.load(file)

        return data if isinstance(data, list) else []

    except (json.JSONDecodeError, OSError):
        return []


def save_records(records):
    with open(FILE_NAME, "w") as file:
        json.dump(records, file, indent=4)


def record_name():
    records = load_records()

    name = input("Enter name: ").strip()
    category = input("Enter category: ").strip()

    if name =="" or category =="":
        print("Name and category are required.")
        return

    record = {
        "id": len(records) + 1,
        "name": name,
        "category": category
    }

    records.append(record)
    save_records(records)

    print("Record added successfully!")


def records_list():
    records = load_records()

    if not records:
        print("No records available.")
        return

    for record in records:
        print("\nID:", record["id"])
        print("Name:", record["name"])
        print("Category:", record["category"])


def delete_record():
    records = load_records()

    try:
        record_id = int(input("Enter record ID: "))
    except ValueError:
        print("Please enter a valid ID.")
        return

    updated_records = [
        record for record in records
        if record["id"] != record_id
    ]

    if len(updated_records) == len(records):
        print("Record not found.")
        return

    save_records(updated_records)
    print("Record deleted successfully!")


def main():
    while True:
        print("\n===== PYTHON RECORD TRACKER =====")
        print("1. Add Record")
        print("2. View Records")
        print("3. Delete Record")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            record_name()

        elif choice == "2":
            records_list()

        elif choice == "3":
            delete_record()

        elif choice == "4":
            print("Thank you!")
            break

        else:
            print("Invalid choice!")


if __name__ == "__main__":
    main()
