"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { CalendarDays, Smartphone } from "lucide-react";
import { getEventConfigFromSlug } from "@/lib/config/event-config";
import { LeadCaptureForm, type LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";

interface ContainerProps {
  titleRedLine: ReactNode | null;
  redLine: ReactNode | null;
  formName: string;
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  submitError?: string | null;
}

const marqueeItems = Array.from({ length: 8 });

export default function HeroSection({ titleRedLine, redLine, formName, onSubmit, submitError }: ContainerProps) {
  const params = useParams();
  const event = getEventConfigFromSlug(params.slug);
  const eventDate = event.region === "Brasil" ? "20, 21 e 22/07" : "24, 25 E 26/08";

  return (
    <section
      id="hero"
      className="flex h-[1100px] flex-col items-center md:justify-center justify-start overflow-hidden bg-[#071117] bg-[url('/images/oro/v5.1/bg_primeira_dobra_mobile.webp')] bg-cover bg-top px-4 pt-2 md:h-[902px] md:bg-[url('/images/oro/v5.1/bg_primeira_dobra_desktop.webp')] md:px-0"
    >
      <div className="flex w-full flex-col items-center justify-center pt-2 md:w-[1080px] md:flex-row md:items-start md:justify-start md:pt-6 mt-16">
        <div className="w-full max-w-[348px] md:max-w-[520px]">
          <div className="pointer-events-none">
            <Image
              src="/images/triunfo-dos-otimistas.png"
              alt="Resgate dos Otimistas"
              width={274}
              height={84}
              priority
              className="h-auto w-[274px] select-none object-contain"
            />
          </div>
          <div className="mt-3 flex h-[18px] w-full items-center gap-4 whitespace-nowrap font-raleway text-[14px] font-medium leading-[135%] text-[#F4F0E1] md:hidden">
            <div className="flex items-center gap-2">
              <CalendarDays className="shrink-0 text-[#C0964B]" size={14} />
              <span>{eventDate} | ÀS {event.time}</span>
            </div>

            <div className="flex items-center gap-2">
              <Smartphone className="shrink-0 text-[#C0964B]" size={14} />
              <span>Online e Gratuito</span>
            </div>
          </div>

          <div className="mt-3 hidden items-center gap-5 text-[#F4F0E1] md:flex">
            <div className="flex items-center gap-2 text-[14px] font-medium">
              <CalendarDays className="text-[#C0964B]" size={16} />
              <span>{eventDate} | ÀS {event.time}</span>
            </div>

            <div className="flex items-center gap-2 text-[14px] font-medium">
              <Smartphone className="text-[#C0964B]" size={16} />
              <span>Online e Gratuito</span>
            </div>
          </div>

          <div className="mt-4 h-[87px] w-full font-spectral text-[24px] font-extrabold uppercase leading-[120%] text-[#F4F0E1] md:hidden">
            Faça seu diagnóstico de dependência <span className="text-[#C0964B]">emocional</span> gratuito
          </div>

          <div className="mt-6 hidden text-left md:block">
            <div className="font-spectral text-[36px] font-extrabold leading-none text-[#F4F0E1]">{titleRedLine}</div>
          </div>

          <div className="mb-5 mt-3 h-[66px] w-full font-spectral text-[16px] font-normal leading-[135%] text-[#D3CAC0] md:hidden">
            Descubra quais padrões invisíveis travam o seu financeiro e aprenda como superá-los na{" "}
            <span className="font-bold text-[#C0964B]">Última Edição do Resgate dos Otimistas.</span>
          </div>

          <div className="mb-8 mt-4 hidden max-w-[460px] font-spectral text-[20px] leading-[135%] text-[#D3CAC0] md:block">
            {redLine || (
              <>
                Descubra como <span className="font-bold text-[#C0964B]">aumentar o seu nível de permissão</span> e melhorar seus resultados nas finanças, nos relacionamentos e na saúde.
              </>
            )}
          </div>

          <div className="w-full md:max-w-[460px]">
            <LeadCaptureForm
              formName={formName}
              onSubmit={onSubmit}
              submitError={submitError}
              submitLabel="PARTICIPAR GRATUITAMENTE"
              submittingLabel="ENVIANDO..."
              emailInputClassName="h-[58px] w-full rounded-full border border-[#D9D3BA] bg-[#F4F0E11A] px-5 text-[#F4F0E1] placeholder:text-[#F4F0E1]"
              ddiSelectClassName="h-[58px] rounded-l-full border border-r-0 border-[#D9D3BA] bg-[#F4F0E11A] pl-10 pr-2 text-[#F4F0E1] focus:outline-none [&>option]:bg-black [&>option]:text-white"
              phoneInputClassName="!h-[58px] w-full rounded-r-full border border-l-0 border-[#D9D3BA] bg-[#F4F0E11A] px-4 text-[#F4F0E1] placeholder:text-[#F4F0E1] focus:outline-none"
              buttonClassName="h-14 w-full rounded-full border-2 border-transparent px-6 font-raleway text-base font-extrabold uppercase text-black transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 [background:linear-gradient(88.53deg,_#FFD17E_0%,_#B37E21_100%)_padding-box,_linear-gradient(180deg,_#FFDA99_0%,_#AD7512_100%)_border-box] shadow-[0_6px_13px_rgba(179,126,33,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}