"use client";

export default function FourthSection() {
  const handleScrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="quarta-dobra"
      aria-labelledby="quarta-dobra-titulo"
      className="relative h-[1794px] w-full overflow-hidden bg-[#071117] bg-[url('/images/tdo/v2/bg_mobile_quarta_dobra.png')] bg-cover bg-top bg-no-repeat md:h-[1236px] md:bg-[url('/images/tdo/v2/bg_desktop_quarta_dobra.png')]"
    >
      <div className="relative mx-auto h-full w-full max-w-[1200px]">
        <div className="mx-auto w-[348px] pt-[650px] md:absolute md:right-[20px] md:top-[150px] md:mx-0 md:w-[512px] md:pt-0">
          <h2
            id="quarta-dobra-titulo"
            className="w-full font-spectral text-[32px] font-bold leading-[125%] text-[#D3CAC0]"
          >
            Quem vai ser o seu
            <br />
            mentor nessa jornada?
          </h2>

          <h3 className="mt-[16px] w-full font-spectral text-[24px] font-bold leading-[125%] text-[#C0964B]">
            Ramon Galimberti
          </h3>

          <div className="mt-[24px] w-full font-mulish text-[16px] font-medium leading-[145%] text-[#D3CAC0]">
            <p>
              Ramon Galimberti fez tudo o que disseram que daria certo. Estudou,
              se formou, foi até o mestrado. Tinha tudo o que deveria pra dar
              certo.
            </p>

            <p className="mt-[16px]">
              E mesmo assim, não dava.
            </p>

            <p className="mt-[16px]">
              Perto dos 30, se viu morando em cima da casa dos pais.
              Desempregado. Saindo de um relacionamento que tinha desabado.
              Usando o ticket do pai pra fazer compra no mercado e virar o mês.
              Diploma bonito na parede, mas o bolso vazio.
            </p>

            <p className="mt-[16px]">
              E foi nesse momento que ele pensou: &quot;o sucesso não é pra
              mim.&quot;
            </p>

            <p className="mt-[16px]">
              Até descobrir o que realmente travava tudo, e não tinha nada a ver
              com competência. Era Permissão.
            </p>

            <p className="mt-[16px]">
              Existia um padrão invisível que decidia o resultado por ele, antes
              que ele tivesse qualquer chance. Quando ele quebrou esse padrão,
              superou o limite financeiro que o prendia havia anos.
            </p>

            <p className="mt-[16px]">
              Hoje Ramon é o primeiro brasileiro autorizado a aplicar a Teoria
              da Permissão e guiou mais de 160 mil pessoas a enxergarem o mesmo
              padrão que as mantém presas: no dinheiro, na carreira e nas
              relações.
            </p>

            <p className="mt-[16px]">
              No Triunfo dos Otimistas, você vai entender que todo acontecimento
              ruim tem uma explicação, e a sua falta de resultado tem resposta.
              Uma resposta que você vai identificar, pra destravar o seu
              crescimento financeiro de forma consistente.
            </p>

            <p className="mt-[16px]">
              Você tem coragem de ver?
            </p>
          </div>

          <button
            type="button"
            onClick={handleScrollToHero}
            className="mt-[32px] flex h-[60px] w-[348px] items-center justify-center rounded-[43.56px] border-[1.74px] border-transparent px-[41.82px] py-[16px] font-raleway text-[14px] font-extrabold uppercase text-[#0C1C1A] transition-all hover:brightness-110 [background:linear-gradient(88.53deg,_#FFD17E_0%,_#B37E21_100%)_padding-box,_linear-gradient(180deg,_#FFDA99_0%,_#AD7512_100%)_border-box] md:mt-[32px] md:w-[446px]"
          >
            PARTICIPAR GRATUITAMENTE
          </button>
        </div>
      </div>
    </section>
  );
}