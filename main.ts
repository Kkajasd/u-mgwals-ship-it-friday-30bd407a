import * as fs from "fs";
import * as path from "path";

const LINE = "feat: skipped tests, code review, and the rollback plan — it's Friday, ship it straight to prod!";

function main(): void {
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (LINE.length < 1 || LINE.length > 159) {
    throw new Error(`entry length ${LINE.length} outside 1-159`);
  }
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync(path.join("/output", "entry.txt"), LINE, "utf8");
}

main();
