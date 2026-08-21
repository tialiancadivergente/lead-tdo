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
    Participe gratuitamente do evento e entenda os fatores que geram bloqueios
    no momento em que sua vida profissional e pessoal precisa avançar.
    Cadastre-se abaixo para fazer sua inscrição.
  </p>
);

export const Headline: IHeadline[] = [
  {
    id: "h1",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral text-[27px] font-extrabold uppercase leading-[1.05] text-[#D3CAC0] md:text-[32px]">
        Faça sua análise de
        <br />
        <span className="text-[#C0964B]">padrões invisíveis</span>
        <br />
        gratuita
      </p>
    ),
    text: description,
  },
  {
    id: "h2",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral text-[28px] font-extrabold uppercase leading-[1.05] text-[#D3CAC0] md:text-[36px]">
        Faça sua análise de
        <br />
        <span className="text-[#C0964B]">teto financeiro</span>
        <br />
        gratuita
      </p>
    ),
    text: description,
  },
  {
    id: "h3",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral text-[26px] font-extrabold uppercase leading-[1.05] text-[#D3CAC0] md:text-[32px]">
        Descubra como <span className="text-[#C0964B]">padrões</span>
        <br />
        <span className="text-[#C0964B]">invisíveis</span> estão travando
        <br />
        o seu crescimento
        <br />
        financeiro
      </p>
    ),
    text: description,
  },
  {
    id: "h4",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral text-[25px] font-extrabold uppercase leading-[1.05] text-[#D3CAC0] md:text-[36px]">
        Descubra quais
        <br />
        <span className="text-[#C0964B]">padrões invisíveis</span>
        <br />
        travam seu crescimento
        <br />
        financeiro e aprenda
        <br />
        a superá-los com
        <br />
        clareza e direção.
      </p>
    ),
    text: description,
  },
  {
    id: "h5",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral text-[27px] font-extrabold uppercase leading-[1.05] text-[#D3CAC0] md:text-[34px]">
        Descubra como
        <br />
        <span className="text-[#C0964B]">potencializar seus</span>
        <br />
        <span className="text-[#C0964B]">resultados</span> em 3 dias
      </p>
    ),
    text: (
      <p className="w-full font-spectral text-[16px] leading-[135%] text-[#D3CAC0] md:text-[20px]">
        Analise seus padrões comportamentais e identifique o que pode estar
        travando o seu crescimento financeiro.
      </p>
    ),
  },
  {
    id: "h6",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral text-[25px] font-extrabold uppercase leading-[1.05] text-[#D3CAC0] md:text-[32px]">
        Identifique os padrões
        <br />
        que impactam seu
        <br />
        <span className="text-[#C0964B]">crescimento financeiro</span>
        <br />
        em 3 aulas ao vivo
      </p>
    ),
    text: (
      <p className="w-full font-spectral text-[16px] leading-[135%] text-[#D3CAC0] md:text-[20px]">
        Participe gratuitamente do Triunfo dos Otimistas e descubra como ir
        mais longe financeiramente.
      </p>
    ),
  },
  {
    id: "h7",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral text-[25px] font-extrabold uppercase leading-[1.05] text-[#D3CAC0] md:text-[32px]">
        Você tem capacidade
        <br />
        e trabalha muito,
        <br />
        <span className="text-[#C0964B]">mas ainda não ganha bem?</span>
        <br />
        Existe um motivo.
      </p>
    ),
    text: (
      <p className="w-full font-spectral text-[16px] leading-[135%] text-[#D3CAC0] md:text-[20px]">
        Conheça a Teoria da Permissão por completo e identifique os padrões que
        podem estar te travando financeiramente.
      </p>
    ),
  },
  {
    id: "h8",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral text-[26px] font-extrabold uppercase leading-[1.05] text-[#D3CAC0] md:text-[32px]">
        Quando sobra dinheiro,
        <br />
        <span className="text-[#C0964B]">acontece alguma coisa?</span>
        <br />
        Isso não é coincidência.
      </p>
    ),
    text: (
      <p className="w-full font-spectral text-[16px] leading-[135%] text-[#D3CAC0] md:text-[20px]">
        Participe gratuitamente de três aulas ao vivo para fazer sua Análise de
        Padrões e descobrir como destravar sua vida financeira.
      </p>
    ),
  },
  {
    id: "h9",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral text-[24px] font-extrabold uppercase leading-[1.05] text-[#D3CAC0] md:text-[30px]">
        Descubra a utilidade
        <br />
        do seu problema financeiro
        <br />e <span className="text-[#C0964B]">supere os padrões</span>
        <br />
        <span className="text-[#C0964B]">que te prendem nesse lugar.</span>
      </p>
    ),
    text: (
      <p className="w-full font-spectral text-[16px] leading-[135%] text-[#D3CAC0] md:text-[20px]">
        3 aulas práticas, gratuitas e ao vivo para você identificar padrões
        relacionais e comportamentais ligados às suas finanças.
      </p>
    ),
  },
  {
    id: "h10",
    isPicture: false,
    isLogo: true,
    title: (
      <p className="font-spectral text-[28px] font-extrabold uppercase leading-[1.05] text-[#D3CAC0] md:text-[36px]">
        Faça seu diagnóstico de
        <br />
        <span className="text-[#C0964B]">teto financeiro</span>
        <br />
        gratuito
      </p>
    ),
    text: description,
  },
];