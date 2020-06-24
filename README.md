# pokemonDeck 


![Imgur](https://i.imgur.com/V26MRC3m.png)

## Find the best pokemon every battle. 

Technologies: 
- JSON-server
- React
- Node
- Express

Getting Started:
- Clone repo
- run npm install from inside the pokemondeck directory 
- run npm start
- go to http://localhost:3000/ in your chrome browser
- search by pokemon name or filter by type and weakness



Using create-react-app, or other preferred React boilerplate, create a new React project
with a dev server that can be run locally (on http://localhost:3000, for example.)
2. Fetch data from this open source JSON (based on the PokemonGO game):
https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json
3. Display the list of Pokemon however you like, making sure to show their “name,”
“num,” “type,” and “weaknesses.”
4. Make this list searchable via a search box. (External NPM libraries for search are equally
as good to use, here, as custom search implementations. Determine what works best for
you.)
 For simplicity, just search through the names of the Pokemon, only.
5. Also, make this list filterable via the “type” and “weaknesses” fields.
6. Multiple filters should be able to be applied, and they should narrow the search, instead
of expand it. This means that if I choose to filter for type “Grass” and type “Poison,” I
should only get Pokemon with both the “Grass” and “Poison” types. This also means
that if I choose to filter for type “Fire” and weakness “Ice,” I should only get Pokemon
who are both “Fire” type and who have a weakness for “Ice.”
 Note: Any solution to achieve selecting multiple filters is fine. Checkboxes would
work. Two dropdown selects would also work, as long as multiple options can be
selected within. Or any other solution you can think of or pre-made React
component from a library should be fine. You don’t need to win any gold medals
in usability or design, here. The main thing I want to see is how you implement
the filtering functionality, rather than how well you make it all look or feel.
Bonus: If you have time for it, it’d be nice to see the following implementations. You won’t be
negatively assessed if you do not have the next portions. It’s just a chance for us to see more of
your code and get a more accurate gauge of your abilities.
7. Create a generic “Details Page” component for Pokemon, showing a pokemon’s:
 “name”
 “num”
 Rendered “img”
o Make
