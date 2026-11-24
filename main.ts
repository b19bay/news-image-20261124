// news-image-20261124 entrypoint: copy the pre-rendered front page to the
// grader's output directory. Deterministic: the same bytes on every run.
// The image is a 1024x1024 broadsheet front page summing up Tuesday
// 24 November 2026 in 24 verified stories; it was composed in-session and
// ships in this repository as entry.png. Nothing is fetched or drawn here.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
