const STORAGE_KEY = "lp-autonomo";

/**
 * Salva dados no localStorage
 */
export function saveBusiness(data) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );
  } catch (error) {
    console.error(
      "Erro ao salvar dados:",
      error
    );
  }
}

/**
 * Carrega dados do localStorage
 */
export function loadBusiness() {
  try {
    const saved = localStorage.getItem(
      STORAGE_KEY
    );

    return saved
      ? JSON.parse(saved)
      : {};
  } catch (error) {
    console.error(
      "Erro ao carregar dados:",
      error
    );

    return {};
  }
}

/**
 * Remove os dados salvos
 */
export function clearBusiness() {
  localStorage.removeItem(
    STORAGE_KEY
  );
}

/**
 * Verifica se existe business.json
 * (utilizado na landing exportada)
 */
export async function loadBusinessFile() {
  try {
    const response = await fetch(
      "./business.json",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}