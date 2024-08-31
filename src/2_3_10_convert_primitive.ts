import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('文字列を入力してください:', (line) => {
  // console.log(`${line} が入力されました`);
  // const result = line + 1000;
  // console.log(result);
  const num = Number(line);
  console.log(num + 1000);
  rl.close();
});
