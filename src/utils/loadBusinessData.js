export async function loadBusinessData() {
    try {
        const response = await fetch(
            fetch(
                `${import.meta.env.BASE_URL}business.json`
            )
        );

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch {
        return null;
    }
}