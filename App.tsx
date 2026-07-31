import { trioImg, dripImg } from "./images";

const WHATSAPP = "https://wa.me/5519995967311";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-espresso font-display text-[10px] font-black leading-none tracking-tight text-cream">
              KU
              <br />
              RU
              <br />
              BI
            </span>
            <span className="hidden font-display text-sm font-bold tracking-widest sm:inline">
              KRB · TORREFAÇÃO
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#torrefacao" className="hover:text-amber">Torrefação</a>
            <a href="#oferecemos" className="hover:text-amber">O que oferecemos</a>
            <a href="#rotulo" className="hover:text-amber">Rótulo próprio</a>
            <a href="#contato" className="hover:text-amber">Contato</a>
          </nav>
          <a
            href={WHATSAPP}
            className="inline-flex items-center gap-2 bg-espresso px-4 py-2 text-xs font-bold uppercase tracking-widest text-cream transition hover:bg-bean"
          >
            Orçamento
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:py-28 md:pb-24">
          <div className="flex flex-col justify-center">
            <span className="section-eyebrow">Café Kurubi · Campinas/SP</span>
            <h1 className="mt-5 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Torrefação
              <br />
              <span className="text-amber">personalizada</span>
              <br />
              para a sua marca.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              O Kurubi conta com uma fábrica especializada em torrefação,
              encapsulamento e envase de café para sua marca, garantindo uma
              experiência excepcional aos seus clientes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#oferecemos"
                className="bg-espresso px-6 py-3 text-xs font-bold uppercase tracking-widest text-cream transition hover:bg-bean"
              >
                O que oferecemos
              </a>
              <a
                href="#contato"
                className="border border-espresso px-6 py-3 text-xs font-bold uppercase tracking-widest text-espresso transition hover:bg-espresso hover:text-cream"
              >
                Fale com a fábrica
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
              <div>
                <div className="font-display text-3xl font-black text-espresso">60+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Anos de tradição</div>
              </div>
              <div>
                <div className="font-display text-3xl font-black text-espresso">4</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Perfis de café</div>
              </div>
              <div>
                <div className="font-display text-3xl font-black text-espresso">100%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">White label</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 bg-amber md:h-56 md:w-56" aria-hidden />
            <img
              src={trioImg}
              alt="Pacotes de café Kurubi em grãos torrados"
              className="relative z-10 w-full object-cover shadow-2xl"
              style={{ aspectRatio: "836/480" }}
            />
            <div className="absolute -bottom-6 -left-6 z-20 hidden bg-espresso px-5 py-4 text-cream md:block">
              <div className="font-display text-xs uppercase tracking-widest text-amber">Torrefação Kurubi</div>
              <div className="font-display text-lg font-bold">Campinas / SP</div>
            </div>
          </div>
        </div>

        {/* running strip */}
        <div className="border-y border-espresso/10 bg-espresso py-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 text-xs font-bold uppercase tracking-[0.24em] text-cream/90">
            <span>Cereja Descascada</span>
            <span className="text-amber">◆</span>
            <span>Moca</span>
            <span className="text-amber">◆</span>
            <span>Secagem Natural</span>
            <span className="text-amber">◆</span>
            <span>Bourbon</span>
            <span className="text-amber">◆</span>
            <span>Alta Mogiana</span>
          </div>
        </div>
      </section>

      {/* TORREFAÇÃO INTRO */}
      <section id="torrefacao" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <span className="section-eyebrow">A fábrica</span>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
              Uma fábrica especializada em cada etapa do café.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Da torra ao envase, controlamos processos próprios de torrefação,
              encapsulamento e embalagem — para a linha Kurubi e para marcas
              terceirizadas, sempre de forma personalizada.
            </p>
            <p>
              Trabalhamos com grãos especiais da nossa Fazenda Santo Antônio, em
              Pedregulho/SP (Alta Mogiana), ou com os grãos que o seu projeto
              exigir. Você define o perfil, nós entregamos a experiência.
            </p>
          </div>
        </div>
      </section>

      {/* O QUE OFERECEMOS */}
      <section id="oferecemos" className="bg-espresso py-20 text-cream md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="section-eyebrow">O que oferecemos</span>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-black leading-tight md:text-5xl">
                Cinco frentes de produção sob o mesmo teto.
              </h2>
            </div>
            <p className="max-w-md text-cream/70">
              Escolha o formato, o perfil sensorial e a apresentação. Fazemos do
              blend ao produto pronto para prateleira.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERS.map((o, i) => (
              <div key={o.title} className="flex flex-col gap-4 bg-espresso p-8 transition hover:bg-bean">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl font-black text-amber/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-cream/50">
                    {o.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold">{o.title}</h3>
                <ul className="mt-1 space-y-1.5 text-sm text-cream/75">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-amber">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="space-y-24">
          <ProductRow
            image={trioImg}
            eyebrow="Cápsulas padrão Nespresso®"
            title="Extração precisa, aroma preservado."
            body="As cápsulas Kurubi são projetadas para garantir uma extração precisa dos sabores e aromas do café. Com tecnologia avançada de envase, as cápsulas mantêm o café fresco e preservam suas características distintas até o momento de preparar a bebida."
            chip="Latas com 10 cápsulas"
            accent="bg-espresso text-cream"
          />
          <ProductRow
            image={dripImg}
            eyebrow="Drip Coffee"
            title="O café que dá para levar no bolso."
            body="O Drip Coffee Kurubi é fácil de preparar, e é uma ótima escolha para fazer café em casa, no escritório ou qualquer lugar. Sachets individuais desenvolvidos para uma extração limpa e rápida."
            chip="Caixas com 10 sachets ou unidades soltas"
            accent="bg-brick text-cream"
          />
        </div>
      </section>

      {/* RÓTULO PRÓPRIO */}
      <section id="rotulo" className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 -translate-x-6 translate-y-6 bg-espresso" aria-hidden />
            <img
              src={trioImg}
              alt="Embalagem White Label Kurubi personalizada"
              className="relative aspect-video w-full object-cover"
            />
          </div>
          <div className="order-1 flex flex-col justify-center md:order-2">
            <span className="section-eyebrow">Rótulo próprio · White Label</span>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
              Tenha o seu próprio rótulo.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Este modelo oferece vantagens como menor investimento inicial e
              personalização total do produto. Todos os itens da nossa linha
              podem receber a identidade da sua marca — do café à embalagem.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="tag-chip">Drip Coffee</span>
              <span className="tag-chip">Torrado e moído</span>
              <span className="tag-chip">Cápsulas padrão Nespresso®</span>
              <span className="tag-chip">Grãos</span>
            </div>

            <ul className="mt-8 grid gap-3 text-sm">
              {[
                "Menor investimento inicial",
                "Personalização total do produto",
                "Perfis: Cereja Descascada, Moca, Secagem Natural, Bourbon",
                "Use os nossos grãos ou traga os seus",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-1.5 w-6 bg-amber" aria-hidden />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP}
              className="mt-10 inline-flex w-fit items-center gap-2 bg-espresso px-6 py-3 text-xs font-bold uppercase tracking-widest text-cream transition hover:bg-bean"
            >
              Comece o seu rótulo
            </a>
          </div>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contato" className="bg-espresso py-20 text-cream md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="section-eyebrow">Fale com a fábrica</span>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-6xl">
                Descubra os sabores <br />
                <span className="italic text-amber">do Café Kurubi.</span>
              </h2>
              <p className="mt-6 max-w-xl text-cream/70">
                Envie o seu briefing: volume, formato e o perfil de café que
                combina com a sua marca. Retornamos com um orçamento
                personalizado.
              </p>
              <a
                href={WHATSAPP}
                className="mt-8 inline-flex items-center gap-2 bg-amber px-6 py-3 text-xs font-bold uppercase tracking-widest text-espresso transition hover:brightness-95"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="grid gap-6 text-sm">
              <div className="border-l-2 border-amber pl-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber">Torrefação</div>
                <div className="mt-2 font-display text-lg font-bold">
                  Rua Sebastião Pedro Franceschini, 65
                </div>
                <div className="text-cream/70">Parque Via Norte · Campinas/SP</div>
              </div>
              <div className="border-l-2 border-amber pl-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber">Cafeteria</div>
                <div className="mt-2 font-display text-lg font-bold">
                  Rua Barão Geraldo de Rezende, 100
                </div>
                <div className="text-cream/70">Botafogo · Campinas/SP</div>
              </div>
              <div className="border-l-2 border-amber pl-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber">Contato</div>
                <div className="mt-2 font-display text-lg font-bold">19 9959.6731 · 19 3203.0323</div>
                <a href="https://cafekurubi.com.br" className="text-cream/70 hover:text-amber">
                  cafekurubi.com.br · @cafekurubi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bean py-8 text-cream/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs sm:flex-row">
          <div className="font-display font-bold tracking-widest text-cream">KRB · CAFÉ KURUBI</div>
          <div>© {new Date().getFullYear()} Café Kurubi · Aproveite bons momentos.</div>
        </div>
      </footer>
    </div>
  );
}

type Offer = { title: string; tag: string; bullets: string[] };

const OFFERS: Offer[] = [
  {
    title: "Moído e Grãos",
    tag: "Formato",
    bullets: ["Pacotes de 250g e 500g", "Cereja Descascada / Moca / Secagem natural / Bourbon"],
  },
  {
    title: "Cápsulas padrão Nespresso®",
    tag: "Formato",
    bullets: ["Latas com 10 unidades", "Cereja Descascada / Moca / Secagem natural / Bourbon"],
  },
  {
    title: "Drip Coffee",
    tag: "Formato",
    bullets: ["Caixas com 10 sachets ou avulsos", "Cereja Descascada / Moca / Secagem natural"],
  },
  {
    title: "White Label personalizado",
    tag: "Serviço",
    bullets: [
      "Todos os itens podem ser personalizados",
      "Cereja Descascada / Moca / Secagem natural / Bourbon",
    ],
  },
  {
    title: "Torrefação",
    tag: "Serviço",
    bullets: ["Use os nossos grãos", "Traga os seus grãos"],
  },
  {
    title: "Envase & Encapsulamento",
    tag: "Serviço",
    bullets: ["Processos próprios da nossa fábrica", "Personalização completa para a sua marca"],
  },
];

function ProductRow({
  image,
  eyebrow,
  title,
  body,
  chip,
  accent,
  reverse,
}: {
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  chip: string;
  accent: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid gap-10 md:grid-cols-2 md:gap-16 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div className="relative">
        <img src={image} alt={title} className="aspect-video w-full object-cover" />
      </div>
      <div className={`flex flex-col justify-center p-8 md:p-12 ${accent}`}>
        <span className="text-[11px] font-bold uppercase tracking-[0.28em] opacity-80">{eyebrow}</span>
        <h3 className="mt-3 font-display text-3xl font-black leading-tight md:text-4xl">{title}</h3>
        <p className="mt-5 text-base leading-relaxed opacity-90">{body}</p>
        <span className="mt-8 inline-block w-fit border border-current px-4 py-2 text-xs font-bold uppercase tracking-widest">
          {chip}
        </span>
      </div>
    </div>
  );
}
