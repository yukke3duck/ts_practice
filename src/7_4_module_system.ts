import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = dirname(filePath)
const dataFile = join(fileDir, "../uhyo.txt")

const data = readFileSync(dataFile, { encoding: "utf8"});

const search_string = "uhyo";
let currentIndex = 0;
let count = 0;

while (true) {
  const nextIndex = data.indexOf(search_string, currentIndex)
  if (nextIndex > 0) {
    count++
    currentIndex = nextIndex + 1;
  } else {
    break;
  }
}

console.log(count);
