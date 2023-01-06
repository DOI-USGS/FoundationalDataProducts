# Use citation-js to convert the bibtext bibliography into a JSON-CSL bibliography.
# citation-js is a npm package
$NODE_PATH/citation-js/bin/cmd.js -i ardbib.bib > content/bibliography.json
