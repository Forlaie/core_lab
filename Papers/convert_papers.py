import bibtexparser
import json
from collections import defaultdict, OrderedDict

# Load the .bib file
with open("./Posters/posters.bib", encoding="utf-8") as bibtex_file:
    bib_database = bibtexparser.load(bibtex_file)

# Process entries to split authors
for entry in bib_database.entries:
    if 'author' in entry:
        authors = [a.strip() for a in entry['author'].split(' and ')]

        def flip_name(name):
            if ',' in name:
                last, first = name.split(',', 1)
                return first.strip() + ' ' + last.strip()
            else:
                return name.strip()

        entry['author'] = [flip_name(a) for a in authors]

# Group publications by year
# grouped_by_year = defaultdict(list)

# for entry in bib_database.entries:
#     year = entry.get('year', 'Unknown')
#     grouped_by_year[year].append(entry)

# # Sort years descending
# grouped_by_year_sorted = OrderedDict(
#     sorted(grouped_by_year.items(), key=lambda x: int(x[0]) if x[0].isdigit() else 0, reverse=True)
# )

# Write to JSON
with open("./Posters/poster_papers.json", "w") as json_file:
    json.dump(bib_database.entries, json_file, indent=4) # bib_database.entries