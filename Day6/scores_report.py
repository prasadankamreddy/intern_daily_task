
def calculate_average(scores):
    return sum(scores) / len(scores)


def display_report(scores):
    average = calculate_average(scores)

    print("\n----- Score Report -----")
    print("Scores:", scores)
    print("Average:", average)
    print("Highest:", max(scores))
    print("Lowest:", min(scores))


scores = []

count = int(input("How many scores? "))

for i in range(count):
    score = int(input(f"Enter score {i + 1}: "))
    scores.append(score)

if len(scores) > 0:
    display_report(scores)
else:
    print("No scores entered")
