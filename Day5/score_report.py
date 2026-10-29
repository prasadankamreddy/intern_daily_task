scores = []

count = int(input("How many scores do you want to enter? : "))

for i in range(count):
    score = int(input(f"Enter score {i + 1}: "))
    scores.append(score)

if count > 0:
    average = sum(scores) / len(scores)
    highest = max(scores)
    lowest = min(scores)

    print("\nScore Report")
    print("Scores:", scores)
    print("\nAverage Score:", average)
    print("Highest Score:", highest)
    print("Lowest Score:", lowest)
else:
    print("Please enter at least one score.")