import json

# Load the JSON data
with open('A:/Teach/Teee-Edu/Gym/App/anytime/plans/4.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Function to convert exercise descriptions
def parse_exercise(exercise):
    parts = exercise.split(": ")
    name = parts[0]
    desc = parts[1] if len(parts) > 1 else ""
    sets, reps, weight = "", "", ""
    
    if "sets" in desc:
        desc, sets = desc.split("sets of ")
        sets = sets.split(" ")[0]
        desc = desc.strip()
    
    if "reps" in desc:
        reps = desc.split("reps")[0].split("of ")[-1].strip()
        desc = desc.split("reps")[1].strip()
    
    return {
        "name": name,
        "desc": desc,
        "sets": sets,
        "reps": reps,
        "weight": weight
    }

# Convert the data
converted_data = []
for day in data:
    exercises = []
    for exercise in day['exercises']:
        exercises.append(parse_exercise(exercise))
    converted_data.append({
        "id": day["id"],
        "title": day["title"],
        "exercises": exercises
    })

# Save the converted data to a new JSON file
with open('plan_4.json', 'w', encoding='utf-8') as file:
    json.dump(converted_data, file, ensure_ascii=False, indent=4)

print("Conversion complete!")
