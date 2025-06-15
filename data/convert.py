import bibtexparser
import json

# Load the .bib file
with open("papers.bib", encoding="utf-8") as bibtex_file:
    bib_database = bibtexparser.load(bibtex_file)

# Process entries to split authors
for entry in bib_database.entries:
    if 'author' in entry:
        # Split authors by ' and ' (BibTeX uses "and" to separate authors)
        authors = [a.strip() for a in entry['author'].split(' and ')]
        # Flip "Last, First" to "First Last"
        def flip_name(name):
            if ',' in name:
                last, first = name.split(',', 1)
                return first.strip() + ' ' + last.strip()
            else:
                return name.strip()

        authors = [flip_name(a) for a in authors]
        
        entry['author'] = authors

# Sort entries by year, most recent first
def get_year(entry):
    try:
        return int(entry.get('year', 0))
    except ValueError:
        return 0

bib_database.entries = sorted(bib_database.entries, key=get_year, reverse=True)

# Write the modified entries to a .json file
with open("papers.json", "w") as json_file:
    json.dump(bib_database.entries, json_file, indent=4)