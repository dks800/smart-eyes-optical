import {
  hugoBoss,
  montBlanc,
  dg,
  prada,
  tomFord,
  tommyH,
  fastrack,
} from "./imagesData";

const langUtils = {
  english: "en",
  portugese: "pt",
};

const brandNames = [
  {
    id: 1,
    name: {
      [langUtils.english]: "Hugo Boss",
      [langUtils.portugese]: "Hugo Boss",
    },
    path: "/brands/1",
    brandLogo: hugoBoss.hbBrandLogo,
    images: [
      {
        id: 1,
        url: hugoBoss.hb1,
        title: {
          [langUtils.english]: "SIGNATURE HARDWARE DETAIL",
          [langUtils.portugese]: "ASSINATURA DETALHE DE HARDWARE",
        },
      },
      {
        id: 2,
        url: hugoBoss.hb2,
        title: {
          [langUtils.english]: "SUNGLASSES WITH BI-LAYERED FRONT",
          [langUtils.portugese]: "ÓCULOS DE SOL COM FRENTE DE DUAS CAMADAS",
        },
      },
      {
        id: 3,
        url: hugoBoss.hb3,
        title: {
          [langUtils.english]: "GREEN-ACETATE SUNGLASSES",
          [langUtils.portugese]: "ÓCULOS DE SOL DE ACETATO VERDE",
        },
      },

      {
        id: 4,
        url: hugoBoss.hb4,
        title: {
          [langUtils.english]: "GRADIENT-LENS SUNGLASSES",
          [langUtils.portugese]: "ÓCULOS DE SOL DE LENTES GRADIENTES",
        },
      },
      {
        id: 5,
        url: hugoBoss.hb5,
        title: {
          [langUtils.english]: "HAVANA-ACETATE SUNGLASSES",
          [langUtils.portugese]: "ÓCULOS DE SOL HAVANA DE ACETATO",
        },
      },
      {
        id: 6,
        url: hugoBoss.hb6,
        title: {
          [langUtils.english]: "BLACK-TITANIUM OPTICAL FRAMES",
          [langUtils.portugese]: "ESTRUTURAS ÓPTICAS DE TITÂNIO PRETO",
        },
      },
      {
        id: 7,
        url: hugoBoss.hb7,
        title: {
          [langUtils.english]: "CLEAR-ACETATE OPTICAL FRAMES",
          [langUtils.portugese]: "ARMAÇÕES ÓPTICAS DE ACETATO CLARO",
        },
      },
      {
        id: 8,
        url: hugoBoss.hb8,
        title: {
          [langUtils.english]: "BLUE-ACETATE OPTICAL FRAMES",
          [langUtils.portugese]: "ARMAÇÕES ÓPTICAS DE ACETATO AZUL",
        },
      },
      {
        id: 9,
        url: hugoBoss.hb9,
        title: {
          [langUtils.english]: "Blue-Acetate Optical Frames",
          [langUtils.portugese]: "Armações Ópticas de Acetato Azul",
        },
      },
      {
        id: 10,
        url: hugoBoss.hb10,
        title: {
          [langUtils.english]: "ROSE-GOLD FINISH AND FORKED DETAILS",
          [langUtils.portugese]: "ACABAMENTO EM OURO ROSE E DETALHES BIFADOS",
        },
      },
    ],
  },
  {
    id: 2,
    name: {
      en: "Mont Blanc",
      pt: "Mont Blanc",
    },
    path: "/brands/2",
    brandLogo: montBlanc.mbBrandLogo,
    images: [
      {
        id: 1,
        url: montBlanc.mb1,
        title: {
          [langUtils.english]: "Gold-coloured Metal Frame",
          [langUtils.portugese]: "Armação de metal dourada",
        },
      },
      {
        id: 2,
        url: montBlanc.mb2,
        title: {
          [langUtils.english]: "Black Coloured Acetate Frame",
          [langUtils.portugese]: "Armação de acetato de cor preta",
        },
      },
      {
        id: 3,
        url: montBlanc.mb3,
        title: {
          [langUtils.english]: "Bicolor Transparent and Havana Frame",
          [langUtils.portugese]: "Bicolor Transparente e Armação Havana",
        },
      },
      {
        id: 4,
        url: montBlanc.mb4,
        title: {
          [langUtils.english]: "Havana Coloured Acetate Frame",
          [langUtils.portugese]: "Armação Acetato Cor Havana",
        },
      },
      {
        id: 5,
        url: montBlanc.mb5,
        title: {
          [langUtils.english]: "Black Coloured Acetate Frame",
          [langUtils.portugese]: "Armação de acetato de cor preta",
        },
      },
      {
        id: 6,
        url: montBlanc.mb6,
        title: {
          [langUtils.english]: "Gold-coloured Metal Frame and Grey Lenses",
          [langUtils.portugese]: "Armação de metal dourada e lentes cinza",
        },
      },
      {
        id: 7,
        url: montBlanc.mb7,
        title: {
          [langUtils.english]: "Grey Coloured Acetate Frame",
          [langUtils.portugese]: "Armação de acetato de cor cinza",
        },
      },
      {
        id: 8,
        url: montBlanc.mb8,
        title: {
          [langUtils.english]: "Gold Coloured Metal Frame",
          [langUtils.portugese]: "Armação de metal dourada",
        },
      },
      {
        id: 9,
        url: montBlanc.mb9,
        title: {
          [langUtils.english]: "Brown-coloured Injected Frame",
          [langUtils.portugese]: "Moldura Injetada Marrom",
        },
      },
      {
        id: 10,
        url: montBlanc.mb10,
        title: {
          [langUtils.english]: "Grey-coloured Injected Frame",
          [langUtils.portugese]: "Armação Injetada na cor Cinza",
        },
      },
    ],
  },
  {
    id: 3,
    name: {
      en: "Dolce & Gabbana (D&G)",
      pt: "Dolce & Gabbana (D&G)",
    },
    path: "/brands/3",
    brandLogo: dg.dgBrandLogo,
    images: [
      {
        id: 1,
        url: dg.dg1,
        title: {
          [langUtils.english]: "Dark Sicily Sunglasses",
          [langUtils.portugese]: "Óculos escuros da Sicília",
        },
      },
      {
        id: 2,
        url: dg.dg2,
        title: {
          [langUtils.english]: "DG Elastic Sunglasses",
          [langUtils.portugese]: "Óculos de sol elásticos DG",
        },
      },
      {
        id: 3,
        url: dg.dg3,
        title: {
          [langUtils.english]: "DG Elastic Sunglasses White",
          [langUtils.portugese]: "DG Elastic Óculos de Sol Branco",
        },
      },
      {
        id: 4,
        url: dg.dg4,
        title: {
          [langUtils.english]: "DG Elastic Sunglasses Yellow",
          [langUtils.portugese]: "Óculos de Sol DG Elastic Amarelo",
        },
      },
      {
        id: 5,
        url: dg.dg5,
        title: {
          [langUtils.english]: "DG Elastic Sunglasses Pink",
          [langUtils.portugese]: "DG Elástico Óculos De Sol Rosa",
        },
      },
      {
        id: 6,
        url: dg.dg6,
        title: {
          [langUtils.english]: "DG Elastic Sunglasses Sky Blue",
          [langUtils.portugese]: "Óculos de sol DG Elástico Azul Céu",
        },
      },
      {
        id: 7,
        url: dg.dg7,
        title: {
          [langUtils.english]: "DG Elastic Sunglasses Green",
          [langUtils.portugese]: "DG Elástico Óculos De Sol Verde",
        },
      },
      {
        id: 8,
        url: dg.dg8,
        title: {
          [langUtils.english]: "Diagonal Cut Sunglasses",
          [langUtils.portugese]: "Óculos de sol com corte diagonal",
        },
      },
      {
        id: 9,
        url: dg.dg9,
        title: {
          [langUtils.english]: "Diagonal Cut Sunglasses Silver",
          [langUtils.portugese]: "Óculos de sol com corte diagonal prateado",
        },
      },
      {
        id: 10,
        url: dg.dg10,
        title: {
          [langUtils.english]: "DG Plaque Sunglasses",
          [langUtils.portugese]: "Óculos de Sol DG Plaque",
        },
      },
    ],
  },
  {
    id: 4,
    name: {
      en: "Prada",
      pt: "Prada",
    },
    path: "/brands/4",
    brandLogo: prada.prBrandLogo,
    images: [
      {
        id: 1,
        url: prada.pr1,
        title: {
          [langUtils.english]: "Chalk White Acetate frame ",
          [langUtils.portugese]: "Armação de Acetato Branco Giz",
        },
      },
      {
        id: 2,
        url: prada.pr2,
        title: {
          [langUtils.english]: "Black Acetate frame",
          [langUtils.portugese]: "armação de acetato preto",
        },
      },
      {
        id: 3,
        url: prada.pr3,
        title: {
          [langUtils.english]: "Powder Beige Acetate frame",
          [langUtils.portugese]: "Armação em pó bege acetato",
        },
      },
      {
        id: 4,
        url: prada.pr4,
        title: {
          [langUtils.english]: "Marble Gray/Black Acetate frame",
          [langUtils.portugese]: "Armação em mármore cinza/preto acetato",
        },
      },
      {
        id: 5,
        url: prada.pr5,
        title: {
          [langUtils.english]: "Honey Tortoiseshell Acetate frame",
          [langUtils.portugese]: "Armação de acetato de tartaruga de mel",
        },
      },
      {
        id: 6,
        url: prada.pr6,
        title: {
          [langUtils.english]: "Marbleized Black and Yellow Acetate frame",
          [langUtils.portugese]:
            "Armação em acetato preto e amarelo marmorizado",
        },
      },
      {
        id: 7,
        url: prada.pr7,
        title: {
          [langUtils.english]: "Marbleized Etruscan Red Acetate frame",
          [langUtils.portugese]:
            "Armação em acetato vermelho etrusco marmorizado",
        },
      },
      {
        id: 8,
        url: prada.pr8,
        title: {
          [langUtils.english]: "Crystal Beige Acetate frame",
          [langUtils.portugese]: "Armação de Acetato Bege Cristal",
        },
      },
      {
        id: 9,
        url: prada.pr9,
        title: {
          [langUtils.english]: "Black Acetate frame",
          [langUtils.portugese]: "armação de acetato preto",
        },
      },
      {
        id: 10,
        url: prada.pr10,
        title: {
          [langUtils.english]: "Marble Gray/Black Acetate frame",
          [langUtils.portugese]: "Armação em mármore cinza/preto acetato",
        },
      },
    ],
  },
  {
    id: 5,
    name: {
      en: "Tom Ford",
      pt: "Tom Ford",
    },
    path: "/brands/5",
    brandLogo: tomFord.tfBrandLogo,
    images: [
      {
        id: 1,
        url: tomFord.tf1,
        title: {
          [langUtils.english]: "POLARIZED ARNAUD SUNGLASSES",
          [langUtils.portugese]: "ÓCULOS DE SOL ARNAUD POLARIZADOS",
        },
      },
      {
        id: 2,
        url: tomFord.tf2,
        title: {
          [langUtils.english]: "BRONSON SUNGLASSES",
          [langUtils.portugese]: "ÓCULOS DE SOL BRONSON",
        },
      },
      {
        id: 3,
        url: tomFord.tf3,
        title: {
          [langUtils.english]: "RAOUL SUNGLASSES",
          [langUtils.portugese]: "ÓCULOS DE SOL RAOUL",
        },
      },
      {
        id: 4,
        url: tomFord.tf4,
        title: {
          [langUtils.english]: "BLUE BLOCK BUTTERFLY OPTICALS",
          [langUtils.portugese]: "ÓTICA DE BLOCO AZUL DE BORBOLETA",
        },
      },
      {
        id: 5,
        url: tomFord.tf5,
        title: {
          [langUtils.english]: "DASHEL SUNGLASSES",
          [langUtils.portugese]: "ÓCULOS DE SOL DASHEL",
        },
      },
      {
        id: 6,
        url: tomFord.tf6,
        title: {
          [langUtils.english]: "BLUE BLOCK ROUND OPTICALS",
          [langUtils.portugese]: "ÓTICAS REDONDAS BLOCO AZUL",
        },
      },
      {
        id: 7,
        url: tomFord.tf7,
        title: {
          [langUtils.english]: "TOM N.6",
          [langUtils.portugese]: "TOM N.6",
        },
      },
      {
        id: 8,
        url: tomFord.tf8,
        title: {
          [langUtils.english]: "TROY SUNGLASSES",
          [langUtils.portugese]: "ÓCULOS DE SOL TROY",
        },
      },
      {
        id: 9,
        url: tomFord.tf9,
        title: {
          [langUtils.english]: "PHILIPPE SUNGLASSES",
          [langUtils.portugese]: "ÓCULOS DE SOL PHILIPPE",
        },
      },
      {
        id: 10,
        url: tomFord.tf10,
        title: {
          [langUtils.english]: "BLUE BLOCK NAVIGATOR OPTICALS",
          [langUtils.portugese]: "BLUE BLOCK NAVIGATOR OPTICALS",
        },
      },
    ],
  },
  {
    id: 6,
    name: {
      en: "Tommy Hilfiger",
      pt: "Tommy Hilfiger",
    },
    path: "/brands/6",
    brandLogo: tommyH.thBrandLogo,
    images: [
      {
        id: 1,
        url: tommyH.th1,
        title: {
          [langUtils.english]: "Black Square Semi-Rimmed Eyeglasses",
          [langUtils.portugese]: "Óculos de aro quadrado pretos",
        },
      },
      {
        id: 2,
        url: tommyH.th2,
        title: {
          [langUtils.english]: "Brown Wayfarer Rimmed Eyeglasses",
          [langUtils.portugese]: "Óculos de armação marrom Wayfarer",
        },
      },
      {
        id: 3,
        url: tommyH.th3,
        title: {
          [langUtils.english]: "Black Cateye Rimmed Eyeglasses",
          [langUtils.portugese]: "Óculos de aro preto cateye",
        },
      },
      {
        id: 4,
        url: tommyH.th4,
        title: {
          [langUtils.english]: "Silver Square Rimmed Eyeglasses",
          [langUtils.portugese]: "Óculos de aro quadrado prateado",
        },
      },
      {
        id: 5,
        url: tommyH.th5,
        title: {
          [langUtils.english]: "Black Cateye Semi-Rimmed Eyeglasses",
          [langUtils.portugese]: "Óculos de aro preto cateye",
        },
      },
      {
        id: 6,
        url: tommyH.th6,
        title: {
          [langUtils.english]: "Black Rectangle Rimmed Eyeglasses",
          [langUtils.portugese]: "Óculos pretos com armação retangular",
        },
      },
      {
        id: 7,
        url: tommyH.th7,
        title: {
          [langUtils.english]: "Gunmetal Rectangle Rimless Eyeglasses",
          [langUtils.portugese]: "Óculos retangulares sem aro de bronze",
        },
      },
      {
        id: 8,
        url: tommyH.th8,
        title: {
          [langUtils.english]: "Gold Rectangle Rimless Eyeglasses",
          [langUtils.portugese]: "Óculos retangulares dourados sem aro",
        },
      },
      {
        id: 9,
        url: tommyH.th9,
        title: {
          [langUtils.english]: "Blue Rectangle Rimmed Eyeglasses",
          [langUtils.portugese]: "Óculos de armação retangular azul",
        },
      },
      {
        id: 10,
        url: tommyH.th10,
        title: {
          [langUtils.english]: "Brown Cateye Rimmed Eyeglasses",
          [langUtils.portugese]: "Óculos de aro marrom Cateye",
        },
      },
    ],
  },
  {
    id: 7,
    name: {
      en: "Fastrack",
      pt: "Fastrack",
    },
    path: "/brands/7",
    brandLogo: fastrack.fsBrandLogo,
    images: [
      {
        id: 1,
        url: fastrack.fs1,
        title: {
          [langUtils.english]: "Brown Sports Men Sunglasses",
          [langUtils.portugese]: "Óculos de sol masculino esportivo marrom",
        },
      },
      {
        id: 2,
        url: fastrack.fs2,
        title: {
          [langUtils.english]: "Black Sports Men Sunglasses",
          [langUtils.portugese]: "Óculos de sol esportivos masculinos pretos",
        },
      },
      {
        id: 3,
        url: fastrack.fs3,
        title: {
          [langUtils.english]: "Black Sports Men Sunglasses",
          [langUtils.portugese]: "Óculos de sol esportivos masculinos pretos",
        },
      },
      {
        id: 4,
        url: fastrack.fs4,
        title: {
          [langUtils.english]: "White Sports Men Sunglasses",
          [langUtils.portugese]: "Óculos de sol masculinos esportivos brancos",
        },
      },
      {
        id: 5,
        url: fastrack.fs5,
        title: {
          [langUtils.english]: "Black and Green CatEye Computer Glasses",
          [langUtils.portugese]: "Óculos de computador CatEye preto e verde",
        },
      },
      {
        id: 6,
        url: fastrack.fs6,
        title: {
          [langUtils.english]: "Black Rectangle Rimmed Computer Glass",
          [langUtils.portugese]:
            "Vidro de computador com borda retangular preta",
        },
      },
      {
        id: 7,
        url: fastrack.fs7,
        title: {
          [langUtils.english]: "Blue CatEye Rimmed Eyeglasses",
          [langUtils.portugese]: "Óculos de aro azul cateye",
        },
      },
      {
        id: 8,
        url: fastrack.fs8,
        title: {
          [langUtils.english]: "Blue Rectangle Rimmed Eyeglasses",
          [langUtils.portugese]: "Óculos de armação retangular azul",
        },
      },
      {
        id: 9,
        url: fastrack.fs9,
        title: {
          [langUtils.english]: "Black Wayfarer Men Sunglasses",
          [langUtils.portugese]: "Óculos de sol pretos masculinos Wayfarer",
        },
      },
      {
        id: 10,
        url: fastrack.fs10,
        title: {
          [langUtils.english]: "Brown Wayfarer Men Sunglasses",
          [langUtils.portugese]: "Óculos de sol masculino Wayfarer marrom",
        },
      },
    ],
  },
];

if (window.innerWidth < 600) {
  for (let i = 0; i < brandNames.length; i++) {
    brandNames[i].images.length = 4;
  }
}

export { brandNames };
