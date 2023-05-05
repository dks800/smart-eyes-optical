import {
  hugoBoss,
  montBlanc,
  dg,
  prada,
  tomFord,
  tommyH,
  fastrack,
} from "./imagesData";

let brandNames = [
  {
    id: 1,
    name: "Hugo Boss",
    path: "/brands/1",
    brandLogo: hugoBoss.hbBrandLogo,
    images: [
      {
        id: 1,
        url: hugoBoss.hb1,
        title: "SIGNATURE HARDWARE DETAIL",
      },
      {
        id: 2,
        url: hugoBoss.hb2,
        title: "SUNGLASSES WITH BI-LAYERED FRONT",
      },
      {
        id: 3,
        url: hugoBoss.hb3,
        title: "GREEN-ACETATE SUNGLASSES",
      },

      {
        id: 4,
        url: hugoBoss.hb4,
        title: "GRADIENT-LENS SUNGLASSES",
      },
      {
        id: 5,
        url: hugoBoss.hb5,
        title: "HAVANA-ACETATE SUNGLASSES",
      },
      {
        id: 6,
        url: hugoBoss.hb6,
        title: "BLACK-TITANIUM OPTICAL FRAMES",
      },
      {
        id: 7,
        url: hugoBoss.hb7,
        title: "CLEAR-ACETATE OPTICAL FRAMES",
      },
      {
        id: 8,
        url: hugoBoss.hb8,
        title: "BLUE-ACETATE OPTICAL FRAMES",
      },
      {
        id: 9,
        url: hugoBoss.hb9,
        title: "Blue-Acetate Optical Frames",
      },
      {
        id: 10,
        url: hugoBoss.hb10,
        title: "ROSE-GOLD FINISH AND FORKED DETAILS",
      },
    ],
  },
  {
    id: 2,
    name: "Mont Blanc",
    path: "/brands/2",
    brandLogo: montBlanc.mbBrandLogo,
    images: [
      {
        id: 1,
        url: montBlanc.mb1,
        title: "Gold-coloured Metal Frame",
      },
      {
        id: 2,
        url: montBlanc.mb2,
        title: "Black Coloured Acetate Frame",
      },
      {
        id: 3,
        url: montBlanc.mb3,
        title: "Bicolor Transparent and Havana Frame",
      },
      {
        id: 4,
        url: montBlanc.mb4,
        title: "Havana Coloured Acetate Frame",
      },
      {
        id: 5,
        url: montBlanc.mb5,
        title: "Black Coloured Acetate Frame",
      },
      {
        id: 6,
        url: montBlanc.mb6,
        title: "Gold-coloured Metal Frame and Grey Lenses",
      },
      {
        id: 7,
        url: montBlanc.mb7,
        title: "Grey Coloured Acetate Frame",
      },
      {
        id: 8,
        url: montBlanc.mb8,
        title: "Gold Coloured Metal Frame",
      },
      {
        id: 9,
        url: montBlanc.mb9,
        title: "Brown-coloured Injected Frame",
      },
      {
        id: 10,
        url: montBlanc.mb10,
        title: "Grey-coloured Injected Frame",
      },
    ],
  },
  {
    id: 3,
    name: "Dolce & Gabbana (D&G)",
    path: "/brands/3",
    brandLogo: dg.dgBrandLogo,
    images: [
      {
        id: 1,
        url: dg.dg1,
        title: "Dark Sicily Sunglasses",
      },
      {
        id: 2,
        url: dg.dg2,
        title: "DG Elastic Sunglasses",
      },
      {
        id: 3,
        url: dg.dg3,
        title: "DG Elastic Sunglasses White",
      },
      {
        id: 4,
        url: dg.dg4,
        title: "DG Elastic Sunglasses Yellow",
      },
      {
        id: 5,
        url: dg.dg5,
        title: "DG Elastic Sunglasses Pink",
      },
      {
        id: 6,
        url: dg.dg6,
        title: "DG Elastic Sunglasses Sky Blue",
      },
      {
        id: 7,
        url: dg.dg7,
        title: "DG Elastic Sunglasses Green",
      },
      {
        id: 8,
        url: dg.dg8,
        title: "Diagonal Cut Sunglasses",
      },
      {
        id: 9,
        url: dg.dg9,
        title: "Diagonal Cut Sunglasses Silver",
      },
      {
        id: 10,
        url: dg.dg10,
        title: "DG Plaque Sunglasses",
      },
    ],
  },
  {
    id: 4,
    name: "Prada",
    path: "/brands/4",
    brandLogo: prada.prBrandLogo,
    images: [
      {
        id: 1,
        url: prada.pr1,
        title: "Chalk White Acetate frame ",
      },
      {
        id: 2,
        url: prada.pr2,
        title: "Black Acetate frame",
      },
      {
        id: 3,
        url: prada.pr3,
        title: "Powder Beige Acetate frame",
      },
      {
        id: 4,
        url: prada.pr4,
        title: "Marble Gray/Black Acetate frame",
      },
      {
        id: 5,
        url: prada.pr5,
        title: "Honey Tortoiseshell Acetate frame",
      },
      {
        id: 6,
        url: prada.pr6,
        title: "Marbleized Black and Yellow Acetate frame",
      },
      {
        id: 7,
        url: prada.pr7,
        title: "Marbleized Etruscan Red Acetate frame",
      },
      {
        id: 8,
        url: prada.pr8,
        title: "Crystal Beige Acetate frame",
      },
      {
        id: 9,
        url: prada.pr9,
        title: "Black Acetate frame",
      },
      {
        id: 10,
        url: prada.pr10,
        title: "Marble Gray/Black Acetate frame",
      },
    ],
  },
  {
    id: 5,
    name: "Tom Ford",
    path: "/brands/5",
    brandLogo: tomFord.tfBrandLogo,
    images: [
      {
        id: 1,
        url: tomFord.tf1,
        title: "POLARIZED ARNAUD SUNGLASSES",
      },
      {
        id: 2,
        url: tomFord.tf2,
        title: "BRONSON SUNGLASSES",
      },
      {
        id: 3,
        url: tomFord.tf3,
        title: "RAOUL SUNGLASSES",
      },
      {
        id: 4,
        url: tomFord.tf4,
        title: "BLUE BLOCK BUTTERFLY OPTICALS",
      },
      {
        id: 5,
        url: tomFord.tf5,
        title: "DASHEL SUNGLASSES",
      },
      {
        id: 6,
        url: tomFord.tf6,
        title: "BLUE BLOCK ROUND OPTICALS",
      },
      {
        id: 7,
        url: tomFord.tf7,
        title: "TOM N.6",
      },
      {
        id: 8,
        url: tomFord.tf8,
        title: "TROY SUNGLASSES",
      },
      {
        id: 9,
        url: tomFord.tf9,
        title: "PHILIPPE SUNGLASSES",
      },
      {
        id: 10,
        url: tomFord.tf10,
        title: "BLUE BLOCK NAVIGATOR OPTICALS",
      },
    ],
  },
  {
    id: 6,
    name: "Tommy Hilfiger",
    path: "/brands/6",
    brandLogo: tommyH.thBrandLogo,
    images: [
      {
        id: 1,
        url: tommyH.th1,
        title: "Black Square Semi-Rimmed Eyeglasses",
      },
      {
        id: 2,
        url: tommyH.th2,
        title: "Brown Wayfarer Rimmed Eyeglasses",
      },
      {
        id: 3,
        url: tommyH.th3,
        title: "Black Cateye Rimmed Eyeglasses",
      },
      {
        id: 4,
        url: tommyH.th4,
        title: "Silver Square Rimmed Eyeglasses",
      },
      {
        id: 5,
        url: tommyH.th5,
        title: "Black Cateye Semi-Rimmed Eyeglasses",
      },
      {
        id: 6,
        url: tommyH.th6,
        title: "Black Rectangle Rimmed Eyeglasses",
      },
      {
        id: 7,
        url: tommyH.th7,
        title: "Gunmetal Rectangle Rimless Eyeglasses",
      },
      {
        id: 8,
        url: tommyH.th8,
        title: "Gold Rectangle Rimless Eyeglasses",
      },
      {
        id: 9,
        url: tommyH.th9,
        title: "Blue Rectangle Rimmed Eyeglasses",
      },
      {
        id: 10,
        url: tommyH.th10,
        title: "Brown Cateye Rimmed Eyeglasses",
      },
    ],
  },
  {
    id: 7,
    name: "Fastrack",
    path: "/brands/7",
    brandLogo: fastrack.fsBrandLogo,
    images: [
      {
        id: 1,
        url: fastrack.fs1,
        title: "Brown Sports Men Sunglasses",
      },
      {
        id: 2,
        url: fastrack.fs2,
        title: "Black Sports Men Sunglasses",
      },
      {
        id: 3,
        url: fastrack.fs3,
        title: "Black Sports Men Sunglasses",
      },
      {
        id: 4,
        url: fastrack.fs4,
        title: "White Sports Men Sunglasses",
      },
      {
        id: 5,
        url: fastrack.fs5,
        title: "Black and Green CatEye Computer Glasses",
      },
      {
        id: 6,
        url: fastrack.fs6,
        title: "Black Rectangle Rimmed Computer Glass",
      },
      {
        id: 7,
        url: fastrack.fs7,
        title: "Blue CatEye Rimmed Eyeglasses",
      },
      {
        id: 8,
        url: fastrack.fs8,
        title: "Blue Rectangle Rimmed Eyeglasses",
      },
      {
        id: 9,
        url: fastrack.fs9,
        title: "Black Wayfarer Men Sunglasses",
      },
      {
        id: 10,
        url: fastrack.fs10,
        title: "Brown Wayfarer Men Sunglasses",
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
