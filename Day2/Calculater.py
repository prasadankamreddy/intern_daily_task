num1 = int(input('Enter First Number : '))
operator = input('Enter Operators (+, -, *, /) :')
num2 = int(input('Enter Second Number : '))

if operator == '+':
    print('Answer : ', num1 + num2)

elif operator == '-':
    print('Answer : ', num1-num2)

elif operator =='*':
    print('Answer :', num1*num2)

elif operator == '/':
    if num2 == 0:
        print('Cannot Divided By Zero')

    else:
        print('Answer :', num1/num2)

else:
    print('Invalid Operator')