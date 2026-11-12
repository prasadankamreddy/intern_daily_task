import unittest
import tempfile
import os
import json

import tracker


class TestRecordTracker(unittest.TestCase):

    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.original_file = tracker.FILE_NAME
        tracker.FILE_NAME = os.path.join(
            self.temp.name, "data.json"
        )

    def tearDown(self):
        tracker.FILE_NAME = self.original_file
        self.temp.cleanup()

    # Test 1
    def test_empty_records(self):
        self.assertEqual(tracker.load_records(), [])

    # Test 2
    def test_save_records(self):
        records = [
            {"id": 1, "name": "Prasad", "category": "Student"}
        ]
        tracker.save_records(records)
        self.assertEqual(tracker.load_records(), records)

    # Test 3
    def test_load_saved_records(self):
        data = [{"id": 1, "name": "Ravi", "category": "Developer"}]
        with open(tracker.FILE_NAME, "w") as file:
            json.dump(data, file)
        self.assertEqual(tracker.load_records(), data)

    # Test 4
    def test_missing_file(self):
        self.assertFalse(os.path.exists(tracker.FILE_NAME))
        self.assertEqual(tracker.load_records(), [])

    # Test 5
    def test_invalid_json(self):
        with open(tracker.FILE_NAME, "w") as file:
            file.write("invalid json")
        self.assertEqual(tracker.load_records(), [])

    # Test 6
    def test_multiple_records(self):
        records = [
            {"id": 1, "name": "A", "category": "Student"},
            {"id": 2, "name": "B", "category": "Developer"}
        ]
        tracker.save_records(records)
        self.assertEqual(len(tracker.load_records()), 2)

    # Test 7
    def test_delete_record_logic(self):
        records = [
            {"id": 1, "name": "A", "category": "Student"},
            {"id": 2, "name": "B", "category": "Developer"}
        ]

        updated = [r for r in records if r["id"] != 1]

        self.assertEqual(len(updated), 1)
        self.assertEqual(updated[0]["id"], 2)

    # Test 8
    def test_empty_list_save(self):
        tracker.save_records([])
        self.assertEqual(tracker.load_records(), [])


if __name__ == "__main__":
    unittest.main()
