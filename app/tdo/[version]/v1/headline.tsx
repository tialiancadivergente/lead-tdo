import type { ReactNode } from "react";

interface IHeadline {
  id: number | string;
  isPicture: boolean;
  isLogo: boolean;
  title: ReactNode;
  text: ReactNode;
}

const description = (
  <p className="font-spectral text-[20px] leading-[135%] text-[#D3CAC0]">
    Descubra como AUMENTAR O SEU NÍVEL DE PERMISSÃO e melhorar seus resultados nas finanças, nos relacionamentos e na saúde.
  </p>
);

export const Headline: IHeadline[] = [
  {
    id: "h1",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="uppercase font-spectral font-extrabold text-[#D3CAC0] leading-[1.05]">
        Faça seu diagnóstico
        <br />
        <span className="text-[#C0964B]">
          de dependência
        </span>
        <br />
        <span className="text-[#C0964B]">
          emocional
        </span>{" "}
        gratuito
      </p>
    ),
    text: description,
  },
];