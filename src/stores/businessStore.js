import { reactive } from "vue";
import { loadBusiness } from "../utils/storage";

const savedData = loadBusiness();

const defaultData = {
  name: "Café & Sabor Confeitaria",
  description:
    "Café, doces e momentos inesquecíveis. Descubra o sabor da nossa confeitaria artesanal.",
  city: "Curitiba/PR",
  heroBadge:
    "Propiciando momentos especiais!",
  heroTitle:
    "Café & Sabor Confeitaria",
  heroSubtitle:
    "Café, doces e momentos inesquecíveis. Descubra o sabor da nossa confeitaria artesanal.",
  aboutTitle: "Sobre Nós",
  aboutDescription:
    "Nossa confeitaria nasceu do amor pela arte de fazer doces. Cada receita é cuidadosamente elaborada para proporcionar momentos de prazer e felicidade aos nossos clientes.",
  aboutImages: [],
  aboutFeatures: [
    {
      id: 1,
      title: "Qualidade",
      description:
        "Ingredientes cuidadosamente selecionados para garantir sabor e excelência em cada produto.",
      image: "",
    },
    {
      id: 2,
      title: "Frescor",
      description:
        "Produção diária para oferecer produtos sempre fresquinhos e saborosos.",
      image: "",
    },
    {
      id: 3,
      title: "Feito com Amor",
      description:
        "Cada detalhe é preparado com carinho para tornar seus momentos ainda mais especiais.",
      image: "",
    },
  ],
  contactTitle: "Onde nos encontrar",
  contactDescription:
    "Estamos localizados em um dos melhores bairros da cidade, com fácil acesso e estacionamento disponível.",
  contactAddress:
    "Rua das Flores, 123 - Centro, Curitiba/PR",
  contactEmail: "",
  whatsapp:
    "(41) 99999-9999",
  instagram:
    "cafeesaborctba",
  mapUrl: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.606657950286!2d-49.29038192382694!3d-25.451410733740794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce38137954ae9%3A0x7fbb1b18835907e1!2sCaf%C3%A9%20e%20Sabor!5e0!3m2!1spt-BR!2sbr!4v1791552078311!5m2!1spt-BR!2sbr' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='strict-origin-when-cross-origin'></iframe>",
  logo: "",
  products: [],
  gallery: [],
  step: 1,
};

export const businessStore = reactive({
  ...defaultData,
  ...savedData,
  exported: false,
});

/**
 * Atualiza a store inteira
 * usando os dados do business.json
 */
export function updateBusinessStore(
  data
) {
  Object.assign(
    businessStore,
    data
  );
}

/**
 * Restaura os valores padrão
 */
export function resetBusinessStore() {
  Object.assign(
    businessStore,
    structuredClone(defaultData)
  );
}