export async function loadBusinessData() {
    try {
        const response = await fetch("./business.json");

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch {
        return null;
    }
}