"use client";

import { useParams } from "next/navigation";
import SplashScreenOro from "@/app/components/SplashScreen/SplashScreenOro";
import Formv1 from "@/app/tdo/[version]/v1";

export default function Home() {
  const { version } = useParams();

  return (
    <SplashScreenOro>
      <Formv1 />
    </SplashScreenOro>
  );
}
