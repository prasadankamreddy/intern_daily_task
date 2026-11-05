
def display_contact(name, phone, email, city):
    print("\n----------------------------")
    print("       CONTACT CARD")
    print("----------------------------")
    print(f"Name  : {name}")
    print(f"Phone : {phone}")
    print(f"Email : {email}")
    print(f"City  : {city}")
    print("----------------------------")


def contact_cards():

    contacts = [
        {
            "name": "Rahul",
            "phone": "9876543210",
            "email": "rahul@gmail.com",
            "city": "Hyderabad"
        },
        {
            "name": "Priya",
            "phone": "9876501234",
            "email": "priya@gmail.com",
            "city": "Vijayawada"
        },
        {
            "name": "Arjun",
            "phone": "9123456780",
            "email": "arjun@gmail.com",
            "city": "Rajahmundry"
        }
    ]

    for contact in contacts:
        display_contact(
            contact["name"],
            contact["phone"],
            contact["email"],
            contact["city"]
        )


if __name__ == "__main__":
    contact_cards()
