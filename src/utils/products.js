export function createEmptyProduct() {
  return {
    id: crypto.randomUUID(),
    name: "",
    description: "",
    price: 0,
    image: ""
  };
}