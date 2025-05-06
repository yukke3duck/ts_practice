// import { readFileSync } from "fs";
import { readFile } from "fs/promises";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = dirname(filePath)
const dataFile = join(fileDir, "../uhyo.txt")

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  })
}

const errorAfter10ms = async () => {
  await sleep(1);
  throw new Error("Timeout!")
}

// sleep(1).then(() => {
//   process.exit;
// })

// const data = await readFile(dataFile, { encoding: "utf8"});

const data = await Promise.race([
  readFile(dataFile, { encoding: "utf8"}),
  errorAfter10ms()
]).catch(() => {
  return ""
})

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
