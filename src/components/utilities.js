import { importUrl } from "./imports";
import { brandNames } from "./data/brandData";
import { DeviceContext } from "../DeviceContext";
import { useContext } from "react";

export const langUtils = {
  english: "en",
  portugese: "pt",
};

export const getMultilingualValue = (eng, pt) => {
  return {
    [langUtils.english]: eng,
    [langUtils.portugese]: pt,
  };
};

export const services = [
  {
    title: getMultilingualValue("Eye Test", "Teste ocular"),
    url: importUrl.eyeExam,
  },
  {
    title: getMultilingualValue("Diagnosis", "Diagnóstico"),
    url: importUrl.diagnosis,
  },
  {
    title: getMultilingualValue("Contact Lenses", "Lentes de contato"),
    url: importUrl.contactlense,
  },
  {
    title: getMultilingualValue("Eyewears", "Óculos"),
    url: importUrl.eyewears,
  },
  {
    title: getMultilingualValue("Family Care", "Cuidados Familiares"),
    url: importUrl.familycare,
  },
  {
    title: getMultilingualValue("Eye Infections", "Infecções oculares"),
    url: importUrl.eyeinfection,
  },
];

export const gallaryImages = [
  importUrl.clinic1,
  importUrl.clinic2,
  importUrl.clinic3,
  importUrl.gallary1,
  importUrl.gallary2,
  importUrl.gallary4,
  importUrl.gallary5,
  importUrl.gallary6,
  importUrl.gallary7,
  importUrl.gallary9,
  importUrl.gallary10,
  importUrl.gallary11,
  importUrl.gallary12,
];

export const socialMedia = [
  {
    imgUrl: importUrl.fb,
    url: "https://www.facebook.com/842958123gyan",
    color: "#1877f2",
  },
  {
    imgUrl: importUrl.insta,
    url: "https://instagram.com/gyan.paliwal?igshid=YmMyMTA2M2Y=",
    color: "#db2c78",
  },
  {
    imgUrl: importUrl.wa,
    url: "https://wa.me/+919727622278",
    color: "#4ecc5c",
  },
  {
    imgUrl: importUrl.yt,
    url: "https://www.youtube.com",
    color: "#ff0000",
  },
  {
    imgUrl: importUrl.gmail,
    url: "mailto:deksharma800@gmail.com",
    color: "#ea4335",
  },
  {
    imgUrl: importUrl.call,
    url: "tel:+919727622278",
    color: "#1b1c1f",
  },
];

export const examImages = [
  importUrl.exam1,
  importUrl.exam6,
  importUrl.exam4,
  importUrl.exam7,
  importUrl.exam2,
  importUrl.exam5,
  importUrl.exam3,
];

export const examTypes = [
  {
    title: getMultilingualValue(
      "Visual Acuity Test",
      "Teste de Acuidade Visual"
    ),
    description: getMultilingualValue(
      "This test determines how well the patient can see at different distances and is used to diagnose nearsightedness, farsightedness, and astigmatism.",
      "Este teste determina o quão bem o paciente pode ver em diferentes distâncias e é usado para diagnosticar miopia, hipermetropia e astigmatismo."
    ),
    logo: importUrl.visual,
  },
  {
    title: getMultilingualValue("Refraction Test", "Teste de refração"),
    description: getMultilingualValue(
      "During this test, we use a Phoropter, a machine with lenses of varying strengths, and ask the patient to look through it while we change the lenses to find the ones that provide the clearest vision.",
      "Durante esse teste, usamos um Phoropter, uma máquina com lentes de diferentes intensidades, e pedimos ao paciente que olhe através dela enquanto trocamos as lentes para encontrar as que fornecem a visão mais nítida."
    ),
    logo: importUrl.refraction,
  },
  {
    title: getMultilingualValue("Eye Muscle Test", "Teste do Músculo Ocular"),
    description: getMultilingualValue(
      "This test examines the muscles that control eye movement and alignment. This helps in diagnosing conditions such as strabismus or amblyopia.",
      "Este teste examina os músculos que controlam o movimento e o alinhamento dos olhos. Isso ajuda no diagnóstico de condições como estrabismo ou ambliopia."
    ),
    logo: importUrl.muscle,
  },
  {
    title: getMultilingualValue("Eye Pressure Test", "Teste de pressão ocular"),
    description: getMultilingualValue(
      "The eye pressure test is used to measure intraocular pressure and detect glaucoma. This is usually done with a puff of air or a gentle touch to the eye.",
      "O teste de pressão ocular é usado para medir a pressão intraocular e detectar o glaucoma. Isso geralmente é feito com um sopro de ar ou um toque suave no olho."
    ),

    logo: importUrl.pressure,
  },
  {
    title: getMultilingualValue("Additional Tests", "Testes Adicionais"),
    description: getMultilingualValue(
      "Depending on the patient's history and symptoms, We may perform additional tests such as color vision testing or visual field testing.",
      "Dependendo do histórico e dos sintomas do paciente, podemos realizar testes adicionais, como teste de visão de cores ou teste de campo visual."
    ),
    logo: importUrl.extra,
  },
];

export const lensTypes = [
  {
    name: getMultilingualValue("Progressive Lens", "Lente Progressiva"),
    url: importUrl.progressiveLens,
    description: getMultilingualValue(
      "Progressive lenses, also called multi-focal lenses. These corrective lenses are used in eyeglasses to correct presbyopia and other disorders of accommodation.",
      "Lentes progressivas, também chamadas de lentes multifocais. Essas lentes corretivas são usadas em óculos para corrigir a presbiopia e outros distúrbios de acomodação."
    ),
  },
  {
    name: getMultilingualValue("Blue Cut Lens", "Lente cortada azul"),
    url: importUrl.blueCut,
    description: getMultilingualValue(
      "Glasses having blue cut lenses act as protective gear against blue light. It helps in reducing the adverse impact caused by the blue rays. It is essential to ensure that your computer glasses can provide the required protection.",
      "Os óculos com lentes de corte azul funcionam como um equipamento de proteção contra a luz azul. Ajudam a reduzir o impacto adverso causado pelos raios azuis. É essencial garantir que os óculos do seu computador ofereçam a proteção necessária."
    ),
  },
  {
    name: getMultilingualValue("Photochromic Lens", "Lente fotocromática"),
    url: importUrl.photochromic,
    description: getMultilingualValue(
      "A photochromic lens is an optical lens that darkens on exposure to light of sufficiently high frequency, most commonly ultraviolet radiation. In the absence of activating light, the lenses return to their clear state.",
      "Uma lente fotocrômica é uma lente óptica que escurece quando exposta à luz de frequência suficientemente alta, mais comumente à radiação ultravioleta. Na ausência de luz ativadora, as lentes retornam ao seu estado claro."
    ),
  },
  {
    name: getMultilingualValue("Anti Reflection Lens", "Lente anti-reflexo"),
    url: importUrl.antiReflect,
    description: getMultilingualValue(
      "Anti-reflective coating reduces reflective light—in other words, more light is able to pass through the glasses lens rather than bounce off of it.",
      "O revestimento antirreflexo reduz a luz reflexiva — em outras palavras, mais luz consegue passar pelas lentes dos óculos em vez de ricochetear."
    ),
  },
  {
    name: getMultilingualValue("Bifocal Lens", "Lente Bifocal"),
    url: importUrl.bifocalLens,
    description: getMultilingualValue(
      "Bifocals are eyeglasses with two distinct optical powers. Bifocals are commonly prescribed to people with presbyopia who also require a correction for myopia, hyperopia, and/or astigmatism.",
      "Bifocais são óculos com duas potências ópticas distintas. Bifocais são comumente prescritos para pessoas com presbiopia que também precisam de correção para miopia, hipermetropia e/ou astigmatismo."
    ),
  },
  {
    name: getMultilingualValue("High Index Lens", "Lente de alto índice"),
    url: importUrl.highIndexLens,
    description: getMultilingualValue(
      "High-index lenses are eyeglass lenses that are designed to be thinner and lighter than regular lenses. They are generally recommended for people who have significantly high refractive errors and strong prescriptions for nearsightedness, farsightedness, or astigmatism.",
      "As lentes de alto índice são lentes de óculos projetadas para serem mais finas e mais leves do que as lentes comuns. Elas geralmente são recomendadas para pessoas com erros de refração significativamente altos e prescrições fortes para miopia, hipermetropia ou astigmatismo."
    ),
  },
];

export const sunglasses = [
  importUrl.sunglass1,
  importUrl.sunglass2,
  importUrl.sunglass3,
  importUrl.sunglass4,
  importUrl.sunglass5,
  importUrl.sunglass6,
  importUrl.sunglass7,
  importUrl.sunglass9,
  importUrl.sunglass8,
  importUrl.sunglass10,
];

export const lensImages = [
  importUrl.lens1,
  importUrl.lens2,
  importUrl.lens3,
  importUrl.lens4,
];

export const footerNavigation = [
  {
    title: getMultilingualValue("Navigation", "Navegação"),
    items: [
      {
        path: "/",
        name: getMultilingualValue("Home", "Lar"),
      },
      {
        path: "/eyeglasses",
        name: getMultilingualValue("Eye Glasses", "Óculos"),
      },
      {
        path: "/sunglasses",
        name: getMultilingualValue("Sun Glasses", "Oculos de sol"),
      },
      {
        path: "/contact-lens",
        name: getMultilingualValue("Contact Lens", "Lentes de contato"),
      },
      {
        path: "/exam",
        name: getMultilingualValue("Eye Exam", "Exame óptico"),
      },
    ],
  },
  {
    title: getMultilingualValue("Brands", "Marcas"),
    items: brandNames,
  },
];

export const footerDetails = {
  address: getMultilingualValue("Address", "Endereço"),
  headOffice: getMultilingualValue(
    "<strong>Head Office:</strong> Av Doutor Nkutumula - Talhao 26, R/C - Loja - 1, Matola - A, Cidade Da Matola, Mozambique",
    "<strong>Sede:</strong> Av Doutor Nkutumula - Talhao 26, R/C - Loja - 1, Matola - A, Cidade Da Matola, Mozambique"
  ),
  branch: getMultilingualValue(
    "<strong>Branch:</strong> Av Das Industrias No. 773 Machava - Matola 879010412, Mozambique",
    "<strong>Filial:</strong> Av Das Industrias No. 773 Machava - Matola 879010412, Mozambique"
  ),
  phone: {
    title: getMultilingualValue("Phone", "Telefone"),
    numbers: ["+25 88 298 78361", "+25 88 467 82927"],
  },
  email: {
    title: getMultilingualValue("Email", "E-mail"),
    value: "smarteyesopticalmaputo@gmail.com",
  },
};

export const lensPageLang = {
  title: getMultilingualValue("Contact Lens", "Lentes de contato"),
  description: getMultilingualValue(
    "<strong>GYAN</strong>, Optometrist at Smart Eyes Optical is Contact Lens Specialist. He has over a decade of professional experience in this field.",
    "<strong>GYAN</strong>, optometrista da Smart Eyes Optical é especialista em lentes de contato. Ele tem mais de uma década de experiência profissional neste campo."
  ),
  getInTouch: getMultilingualValue(
    "Get in touch at our branch to know about special offers for you.",
    "Entre em contato em nossa filial para saber sobre ofertas especiais para você."
  ),
  clickHere: getMultilingualValue("Click here", "Clique aqui"),
  typeDescription: getMultilingualValue(
    "Types of Eyewear Lens",
    "Tipos de lentes para óculos"
  ),
};

export const sunglassLang = {
  title: getMultilingualValue("Sun Glasses", "Oculos de sol"),
  description: getMultilingualValue(
    "Buy Sunglasses through <strong>SMART EYES OPTICAL</strong> and choose from a wide range of Sunglasses. Available in different shapes, sizes, colors, and frames. We assure you the best Sunglasses shopping Experience.",
    "Compre Óculos de Sol através da <strong>SMART EYES OPTICAL</strong> e escolha entre uma vasta gama de Óculos de Sol. Disponível em diferentes formas, tamanhos, cores e molduras. Garantimos a melhor experiência de compra de óculos de sol."
  ),
};

export const examLang = {
  title: getMultilingualValue("Eye Exam", "Exame óptico"),
  description: getMultilingualValue(
    "With highly advance equipments at <strong> Smart Eyes Optical</strong>, we diagnose patients with various tests as follows:",
    "Com equipamentos altamente avançados no <strong>Smart Eyes Optical</strong>, diagnosticamos pacientes com vários testes como segue:"
  ),
  footerNote: getMultilingualValue(
    "After the exam, we discuss exam findings with the patient and recommend any necessary treatment or further testing. We may also provide a prescription for glasses or contact lenses if needed.&nbsp; <strong> Regular eye exams are important for maintaining good eye health and detecting any potential problems early.</strong>",
    "Após o exame, discutimos os resultados do exame com o paciente e recomendamos qualquer tratamento necessário ou testes adicionais. Também podemos fornecer uma receita para óculos ou lentes de contato, se necessário.&nbsp; <strong> Exames oftalmológicos regulares são importantes para manter uma boa saúde ocular e detectar precocemente quaisquer problemas potenciais.</strong>"
  ),
};

export const brandLang = {
  title: getMultilingualValue("Eyewear Brands", "Marcas de óculos"),
  description: getMultilingualValue(
    "Smart Eyes Optical, has a wide range of branded products. The top ranged brands are displayed below. You can choose your favorite brand from our store.",
    "Smart Eyes Optical, tem uma vasta gama de produtos de marca. As principais marcas classificadas são exibidas abaixo. Você pode escolher sua marca favorita em nossa loja."
  ),
};

export const eyeglassImages = [
  importUrl.eyeglass1,
  importUrl.eyeglass2,
  importUrl.eyeglass3,
  importUrl.eyeglass6,
  importUrl.eyeglass7,
  importUrl.eyeglass10,
  importUrl.eyeglass11,
  importUrl.eyeglass12,
  importUrl.eyeglass13,
  importUrl.eyeglass5,
  importUrl.eyeglass14,
  importUrl.eyeglass15,
  importUrl.eyeglass9,
  importUrl.eyeglass4,
];

export const eyeglassLang = {
  title: getMultilingualValue("Eyeglasses", "Óculos"),
  description: getMultilingualValue(
    "A pair of spectacles can redefine your personality, entirely. At <strong>Smart Eyes Optical</strong>, you will find a wide range of Specs frames to Buy Eyeglasses. From a vast collection of branded Spectacles To Choose From, Smart Eyes Optical gives you products that are High on Quality, Comfort as well as Performance.",
    "Um par de óculos pode redefinir completamente sua personalidade. Na <strong>Smart Eyes Optical</strong>, você encontrará uma ampla variedade de armações Specs para comprar óculos. De uma vasta coleção de óculos de marca para escolher, Smart Eyes Optical oferece produtos de alta qualidade, conforto e desempenho."
  ),
};
