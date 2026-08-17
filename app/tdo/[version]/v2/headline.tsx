import type { ReactNode } from "react";

interface IHeadline {
  id: number | string;
  isPicture: boolean;
  isLogo: boolean;
  title: ReactNode;
  text: ReactNode;
}

const description = (
  <p className="w-full font-spectral text-[16px] leading-[135%] text-[#D3CAC0] md:text-[20px]">
    Participe gratuitamente do evento e entenda os fatores que geram bloqueios no momento em que sua vida profissional e pessoal precisa avançar. Cadastre-se abaixo para fazer sua inscrição.
  </p>
);

export const Headline: IHeadline[] = [
  {
    id: "h1",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral font-extrabold uppercase leading-[1.05] text-[#D3CAC0]">
        Faça sua análise de{" "}
        <span className="text-[#C0964B]">padrões emocionais</span> gratuita
      </p>
    ),
    text: description,
  },
  {
    id: "h2",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral font-extrabold uppercase leading-[1.05] text-[#D3CAC0]">
        Faça sua análise de{" "}
        <span className="text-[#C0964B]">teto financeiro</span> gratuita
      </p>
    ),
    text: description,
  },
  {
    id: "h3",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral font-extrabold uppercase leading-[1.05] text-[#D3CAC0]">
        Descubra como{" "}
        <span className="text-[#C0964B]">padrões emocionais</span> estão travando o seu crescimento financeiro.
      </p>
    ),
    text: description,
  },
  {
    id: "h4",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral font-extrabold uppercase leading-[1.05] text-[#D3CAC0]">
        Descubra quais{" "}
        <span className="text-[#C0964B]">padrões invisíveis</span> travam seu crescimento financeiro e aprenda{" "}
        <span className="whitespace-nowrap">a superá-los com</span> clareza e direção.
      </p>
    ),
    text: description,
  },
];