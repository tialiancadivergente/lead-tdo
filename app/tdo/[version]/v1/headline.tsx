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
    Descubra o padrão que LIMITA OS SEUS GANHOS — e que reaparece quando a sua vida está prestes a dar certo.
  </p>
);

export const Headline: IHeadline[] = [
  {
    id: "h1",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="uppercase font-spectral font-extrabold text-[#D3CAC0] leading-[1.05]">
        Faça sua análise
        <br />
        <span className="text-[#C0964B]">
          de teto financeiro
        </span>
        gratuita
      </p>
    ),
    text: description,
  },
];