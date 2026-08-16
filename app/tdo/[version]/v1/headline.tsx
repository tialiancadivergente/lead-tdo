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
    Descubra o padrão que TRAVA O SEU DINHEIRO sempre no mesmo teto — e que reaparece toda vez que a sua vida está prestes a dar certo.
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
          de bloqueio
        </span>
        <br />
        <span className="text-[#C0964B]">
          de permissão
        </span>{" "}
        gratuito
      </p>
    ),
    text: description,
  },
];