import fs from "fs";
import path from "path";

export function cleanExports() {
    const exportsDir = path.resolve(
        process.cwd(),
        "exports"
    );

    if (!fs.existsSync(exportsDir)) {
        fs.mkdirSync(exportsDir, {
            recursive: true,
        });

        return;
    }

    for (const file of fs.readdirSync(exportsDir)) {
        fs.rmSync(
            path.join(exportsDir, file),
            {
                recursive: true,
                force: true,
            }
        );
    }
}