import json
from pathlib import Path

file_path = Path(__file__).parent / "tasks.json"


def read_tasks():

    try:
        with open(file_path, "r") as file:
            tasks = json.load(file)

        total = len(tasks)

        completed = 0

        for task in tasks:
            if task.get("completed") is True:
                completed += 1
                

        pending = total - completed

        print("TASK REPORT")
        print("--------------------")
        print("Total Tasks:", total)
        print("Completed Tasks:", completed)
        print("Pending Tasks:", pending)

    except FileNotFoundError:
        print("Error: tasks.json file not found.")
        print("Please check whether the JSON file exists.")

    except json.JSONDecodeError:
        print("Error: Invalid JSON file.")


read_tasks()
