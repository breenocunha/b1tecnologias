import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">Esta página não existe.</h1>
      <p className="mt-4 max-w-md text-mist">O endereço não faz parte do ecossistema da B1.</p>
      <Link href="/" className="btn mt-8">
        Voltar ao início
      </Link>
    </div>
  );
}
