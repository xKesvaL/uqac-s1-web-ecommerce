import FlexSearch from "flexsearch";
import type { SteroidWithCategory } from "./types";

let steroidsIndex: FlexSearch.Index;
let steroids: SteroidWithCategory[];

export function createSteroidsIndex(data: SteroidWithCategory[]) {
  // create the streoids index
  steroidsIndex = new FlexSearch.Index({ tokenize: "full" });

  data.forEach((steroid, i) => {
    // index the name and desc together
    const item = `${steroid.name} ${steroid.description} ${steroid.Category?.name}`;
    // add the item to the index 👍️
    steroidsIndex.add(i, item);
  });

  steroids = data;
}

export function searchSteroidsIndex(searchTerm: string) {
  // escape special regex characters
  const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // return matching stereoids indexes 💪
  const results = steroidsIndex.search(match);

  return (
    results
      // filter the streoids based on the matched index
      .map((index) => steroids[index as number])
      // you can do whatever you want at this point 👌
      .map(({ name, description, id, Category, price }) => {
        return {
          id,
          // replace match in name with a marker
          name: replaceTextWithMarker(name, match),
          // match words in desc and replace matches with marker
          description: getMatches(description, match),
          category: Category,
          price: price,
        };
      })
  );
}

function getMatches(text: string, searchTerm: string, limit = 1) {
  // create dynamic regex 😎
  const regex = new RegExp(searchTerm, "gi");
  // word indexes
  const indexes = [];
  // matches count
  let matches = 0;
  // current match in loop
  let match;

  while ((match = regex.exec(text)) !== null && matches < limit) {
    // push that shit
    indexes.push(match.index);
    // increment matches
    matches++;
  }

  // take the word index...
  const matchedIndexes = indexes.map((index) => {
    // go back 20 characters
    const start = index - 20;
    // go forward 80 characters
    const end = index + 80;
    // yoink the text
    const excerpt = text.substring(start, end).trim();
    // return excerpt 🤝
    return `...${replaceTextWithMarker(excerpt, searchTerm)}...`;
  });

  return matchedIndexes.length > 0 ? matchedIndexes : [text.substring(0, 100)];
}

function replaceTextWithMarker(text: string, match: string) {
  // create dynamic regex 😎
  const regex = new RegExp(match, "gi");
  // preserves the text casing 🤙
  return text.replaceAll(regex, (match) => `<mark>${match}</mark>`);
}
