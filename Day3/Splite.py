bill = int(input('Enter the bill amount : '))
people = int(input('Enter the number of peoples : '))
per_percentage = float(input('Enter tip percentage : '))

if bill <=0 or per_percentage <=0 :
    print("Error: Bill and tip cannot be negative.")

elif people <=0:
    print("Error: Number of people must be greater than zero.")

else:
        tip = bill * per_percentage / 100
        total_bill = bill + tip
        per_person = total_bill / people

print('tip amount : ', tip)
print('total-amount : ', total_bill)
print('person-amount : ', per_person)