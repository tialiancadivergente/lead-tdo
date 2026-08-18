"use client";

import Image from "next/image";

export default function ThirdSection() {
  const handleScrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="terceira-dobra"
      aria-labelledby="terceira-dobra-titulo"
      className="relative h-[2499px] w-full overflow-hidden bg-[#071117] bg-[url('/images/tdo/v2/bg_mobile_terceira_dobra.png')] bg-cover bg-top bg-no-repeat md:h-[1307px] md:bg-[url('/images/tdo/v2/bg_desktop_terceira_dobra.png')]"
    >
      <div className="mx-auto flex h-full w-full max-w-[1264px] flex-col items-center pt-[20px] md:pt-[62px]">
        <h2
          id="terceira-dobra-titulo"
          className="w-[348px] font-spectral text-[28px] font-normal uppercase leading-[120%] text-[#D3CAC0] md:w-auto md:text-center md:text-[40px]"
        >
          <span className="md:hidden">
            <span className="block whitespace-nowrap">O QUE VOCÊ VAI</span>
            <span className="block whitespace-nowrap">
              APRENDER NO <span className="font-bold text-[#C0964B]">TRIUNFO</span>
            </span>
            <span className="block whitespace-nowrap font-bold text-[#C0964B]">
              DOS OTIMISTAS
            </span>
          </span>

          <span className="hidden md:block">
            O QUE VOCÊ VAI APRENDER
            <br />
            NO <span className="font-bold text-[#C0964B]">TRIUNFO DOS OTIMISTAS</span>
          </span>
        </h2>

        <div className="mt-[28px] flex w-full flex-col items-center gap-[12px] md:mt-[40px] md:flex-row md:items-start md:justify-center md:gap-[32px]">
          <article className="h-[825px] w-full max-w-[412px] border border-[#104448] bg-[#07242C] px-[32px] py-[32px] md:w-[400px]">
            <div className="flex h-[48px] w-full font-raleway text-[16px] font-extrabold leading-[24px]">
              <div className="flex w-1/2 items-center justify-center bg-[#C0964B] text-[#0C1C1A]">
                DIA 1
              </div>

              <div className="flex w-1/2 items-center justify-center border border-[#C0964B] bg-[#0C1C1A] text-[#C0964B]">
                24/08, 19h55
              </div>
            </div>

            <div className="relative mx-auto mt-[32px] h-[188px] w-[300px] overflow-hidden rounded-[16px] md:w-[296px]">
              <Image
                src="/images/tdo/v2/image.png"
                alt="Primeira aula do Triunfo dos Otimistas"
                fill
                sizes="(max-width: 767px) 300px, 296px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-[32px] w-full font-spectral text-[20px] font-bold leading-[135%] text-white">
              A Grande Descoberta — O que
              <br />
              REALMENTE te impede de ter
              <br />
              sucesso
            </h3>

            <div className="mt-[24px] w-full font-spectral text-[16px] font-medium leading-[140%] text-[#B1B1B1]">
              <p>
                Por que, mesmo tendo capacidade e disposição, você continua sem conseguir avançar na velocidade que gostaria?
              </p>

              <p className="mt-[16px] md:mt-[18px]">
                O que é essa trava invisível que te impede de prosperar mais, conquistar mais e finalmente alcançar seus objetivos?
              </p>

              <p className="mt-[16px] md:mt-[18px]">
                Na primeira aula do Triunfo dos Otimistas, você vai conhecer a fundo a Teoria da Permissão e entender como ela influencia seus resultados financeiros, seus relacionamentos e a construção da vida que você quer viver.
              </p>

              <p className="mt-[16px] md:mt-[18px]">
                Você vai descobrir por que esforço sozinho não é suficiente — e o que realmente está impedindo o seu sucesso.
              </p>
            </div>
          </article>

          <article className="h-[646px] w-full max-w-[412px] border border-[#104448] bg-[#07242C] px-[32px] py-[32px] md:h-[825px] md:w-[400px]">
            <div className="flex h-[48px] w-full font-raleway text-[16px] font-extrabold leading-[24px]">
              <div className="flex w-1/2 items-center justify-center bg-[#C0964B] text-[#0C1C1A]">
                DIA 2
              </div>

              <div className="flex w-1/2 items-center justify-center border border-[#C0964B] bg-[#0C1C1A] text-[#C0964B]">
                25/08, 19h55
              </div>
            </div>

            <div className="relative mx-auto mt-[32px] h-[188px] w-[300px] overflow-hidden rounded-[16px] md:w-[299px]">
              <Image
                src="/images/tdo/v2/image.png"
                alt="Segunda aula do Triunfo dos Otimistas"
                fill
                sizes="(max-width: 767px) 300px, 299px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-[32px] w-full font-spectral text-[20px] font-bold leading-[135%] text-white">
              <span className="md:hidden">
                Análise de Padrões e Os Perfis Controladores
              </span>

              <span className="hidden md:block">
                Análise de Padrões
                <br />
                e Os Perfis Controladores
              </span>
            </h3>

            <div className="mt-[24px] w-full font-spectral text-[16px] font-medium leading-[140%] text-[#B1B1B1]">
              <p>
                A aula em que você finalmente fará a sua Avaliação de Padrões e entenderá que relações, bloqueios e padrões estão travando a sua Permissão e impedindo os seus resultados.
              </p>

              <p className="mt-[16px] md:mt-[24px]">
                Você também vai identificar os perfis controladores que sugam sua energia, limitam suas decisões e te fazem permanecer preso na mesma vida de sempre.
              </p>
            </div>
          </article>

          <article className="h-[641px] w-full max-w-[412px] border border-[#104448] bg-[#07242C] px-[32px] py-[32px] md:h-[825px] md:w-[400px]">
            <div className="flex h-[48px] w-full font-raleway text-[16px] font-extrabold leading-[24px]">
              <div className="flex w-1/2 items-center justify-center bg-[#C0964B] text-[#0C1C1A]">
                DIA 3
              </div>

              <div className="flex w-1/2 items-center justify-center border border-[#C0964B] bg-[#0C1C1A] text-[#C0964B]">
                26/08, 19h55
              </div>
            </div>

            <div className="relative mx-auto mt-[32px] h-[188px] w-[300px] overflow-hidden rounded-[16px] md:w-[296px]">
              <Image
                src="/images/tdo/v2/image200.png"
                alt="Terceira aula do Triunfo dos Otimistas"
                fill
                sizes="(max-width: 767px) 300px, 296px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-[32px] w-full font-spectral text-[20px] font-bold leading-[135%] text-white">
              Como Destravar Seu Crescimento Financeiro
            </h3>

            <div className="mt-[14px] w-full font-spectral text-[16px] font-medium leading-[140%] text-[#B1B1B1] md:mt-[24px]">
              <p>A aula mais importante do Triunfo dos Otimistas.</p>

              <p className="mt-[2px] md:mt-[24px]">
                Você vai entender por que existe um limite financeiro que, por mais que você se esforce, parece difícil de ultrapassar.
              </p>

              <p className="mt-[2px] md:mt-[24px]">
                E, principalmente, como destravar sua Permissão para finalmente crescer financeiramente, evoluir sem culpa e construir uma vida próspera sem se autossabotar no caminho.
              </p>
            </div>
          </article>
        </div>

        <button
          type="button"
          onClick={handleScrollToHero}
          className="mt-[40px] flex h-[60px] w-[348px] items-center justify-center rounded-[43.56px] border-[1.74px] border-transparent px-[41.82px] py-[16px] font-raleway text-[14px] font-extrabold uppercase text-[#0C1C1A] transition-all hover:brightness-110 [background:linear-gradient(88.53deg,_#FFD17E_0%,_#B37E21_100%)_padding-box,_linear-gradient(180deg,_#FFDA99_0%,_#AD7512_100%)_border-box] md:mt-[48px] md:w-[446px]"
        >
          PARTICIPAR GRATUITAMENTE
        </button>
      </div>
    </section>
  );
}