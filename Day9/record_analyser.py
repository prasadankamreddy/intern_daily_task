
def add_record(records, name, category):

    name = name.strip()
    category = category.strip()

    if name == "" or category == "":
        print("Please enter valid details.")
        return

    records.append({
        "name": name,
        "category": category
    })

    print("Record added successfully!")


def analyse_records(records):

    if not records:
        print("No records found.")
        return

    print("\n--- Record Analysis ---")
    print("Total Records:", len(records))

    category_count = {}

    for item in records:
        category = item["category"]

        category_count[category] = category_count.get(category, 0) + 1

    print("\nCategory Summary:")

    for key in category_count:
        print(f"{key}: {category_count[key]}")


def main():

    records = []

    while True:

        print("\n--- Record Manager ---")
        print("1. Add Record")
        print("2. View Analysis")
        print("3. Exit")

        option = input("Choose an option: ")

        if option == "1":

            name = input("Record Name: ")
            category = input("Record Category: ")

            add_record(records, name, category)

        elif option == "2":

            analyse_records(records)

        elif option == "3":

            print("Thanks for visiting...! Program closed.")
            break

        else:
            print("Invalid option. Try again.")


if __name__ == "__main__":
    main()
