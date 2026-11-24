import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "feat: skipped tests, code review, and the rollback plan — it's Friday, ship it straight to prod!";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
