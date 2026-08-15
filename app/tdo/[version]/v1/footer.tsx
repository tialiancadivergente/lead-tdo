import Image from "next/image";

export default function Footer() {
	return (
		<div className="bg-[#031B22] bg-[radial-gradient(50%_75.08%_at_50%_100.2%,_rgba(16,68,72,0.5)_0%,_rgba(16,68,72,0.2)_34.73%,_rgba(16,68,72,0)_100%)] py-[60px] px-4">
			<footer className="container mx-auto lg:w-[1080px] w-full flex flex-col gap-10">

				<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">

					<div className="font-normal font-raleway text-[14px] text-white text-center lg:text-left order-2 lg:order-1">
						<p>
							Copyright © O Triunfo Dos Otimistas.
						</p>

						<p>
							Todos os direitos reservados.
						</p>
					</div>

					<div className="flex justify-center order-1 lg:order-2">
						<Image
							src="/images/v21/logo-alianca-divergente.png"
							alt="Logomarca Aliança Divergente"
							width={220}
							height={28}
							priority
							className="object-contain w-[180px] lg:w-[220px]"
						/>
					</div>

					<div className="font-normal font-raleway text-[14px] text-white text-center lg:text-right order-3">

						<div className="flex items-center justify-center lg:justify-end gap-3 flex-wrap">
							<a
								href="https://www.oresgatedosotimistas.com.br/politica-de-privacidade"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity"
							>
								Política de privacidade
							</a>

							<span>|</span>

							<a
								href="https://www.oresgatedosotimistas.com.br/termos-de-uso"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity"
							>
								Termos de uso
							</a>
						</div>

					</div>

				</div>
			</footer>
		</div>
	)
}