a = int(input('Enter marks : '))



if a<0 or a>100:
    print(a, "Invalid Marks")

elif a >= 90:
    print(a, "-> A")

elif a >= 75:
    print(a, "-> B")

elif a >=40 :
    print(a, "-> D")

else:
    print(a, '-> Fail')
