import fs from "fs";
import path from "path";

export function saveBase64Image(base64, destination) {
    if (!base64?.startsWith("data:image")) {
        return null;
    }

    const match = base64.match(
        /^data:(image\/[a-zA-Z0-9+.-]+);base64,(.+)$/
    );

    if (!match) {
        return null;
    }

    const mimeType = match[1];
    const imageData = match[2];

    let extension = "png";

    if (mimeType.includes("jpeg")) {
        extension = "jpg";
    } else if (mimeType.includes("webp")) {
        extension = "webp";
    } else if (mimeType.includes("svg")) {
        extension = "svg";
    }

    const filePath = `${destination}.${extension}`;

    fs.writeFileSync(
        filePath,
        Buffer.from(imageData, "base64")
    );

    return path.basename(filePath);
}