import React, { useState } from 'react';
import { 
  Instagram, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  Star, 
  Clock, 
  ShieldCheck, 
  Heart,
  ChevronRight,
  X,
  Sparkles
} from 'lucide-react';

// --- Constants & Data ---
const EXPERT = {
  name: "Marcela Lacerda",
  role: "Especialista em Alongamento Fibra de vidro",
  location: "Taquaralto, Palmas TO",
  whatsappUrl: "https://api.whatsapp.com/send?phone=5563991089254&text=Olá%20vim%20pela%20sua%20página.%20Gostaria%20de%20saber%20sobre%20os%20serviços%20oferecidos.",
  instagramUrl: "https://www.instagram.com/studio_marcela_lacerda/",
  heroImg: "https://i.imgur.com/en2uYLD.jpeg",
  expertImg: "https://i.imgur.com/tUI1ETT.jpeg",
  studioImgs: [
    "https://i.imgur.com/C3uQlEE.jpeg",
    "https://i.imgur.com/9drCJZc.jpeg"
  ],
  gallery: [
    "https://i.imgur.com/YOErhP4.jpeg",
    "https://i.imgur.com/a5dj3sV.jpeg",
    "https://i.imgur.com/N1CM2TH.jpeg",
    "https://i.imgur.com/t65Vdl2.jpeg",
    "https://i.imgur.com/N3HoX0p.jpeg",
    "https://i.imgur.com/nhAQapi.jpeg",
    "https://i.imgur.com/ni1XUJv.jpeg",
    "https://i.imgur.com/vBhJMyP.jpeg",
    "https://i.imgur.com/Ryc6G0c.jpeg",
    "https://i.imgur.com/GM1HNQE.jpeg",
    "https://i.imgur.com/GgEAz0b.jpeg",
    "https://i.imgur.com/gJweAEp.jpeg"
  ]
};

// --- Components ---

const Button: React.FC<{ 
  children: React.ReactNode, 
  className?: string, 
  href?: string
}> = ({ children, className, href }) => {
  const baseClasses = "flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold transition-all duration-300 transform active:scale-95 shadow-xl uppercase tracking-wider text-white";
  
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${className}`}>
      {children}
    </a>
  );
};

const Section: React.FC<{ children: React.ReactNode, className?: string, id?: string }> = ({ children, className, id }) => (
  <section id={id} className={`py-16 px-6 ${className}`}>
    {children}
  </section>
);

const Card: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-start gap-3 hover:shadow-md transition-shadow">
    <div className="text-stone-700 bg-stone-50 p-3 rounded-xl">
      {icon}
    </div>
    <h3 className="font-bold text-stone-900 text-lg">{title}</h3>
    <p className="text-stone-600 text-sm leading-relaxed">{text}</p>
  </div>
);

const Lightbox: React.FC<{ isOpen: boolean, image: string | null, onClose: () => void }> = ({ isOpen, image, onClose }) => {
  if (!isOpen || !image) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4" onClick={onClose}>
      <button className="absolute top-6 right-6 text-white p-2" aria-label="Fechar">
        <X size={32} />
      </button>
      <img src={image} alt="Resultado Ampliado" className="max-w-full max-h-full object-contain rounded-lg" />
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen max-w-md mx-auto relative overflow-x-hidden shadow-2xl bg-[#fdfcfb]">
      
      <Lightbox 
        isOpen={!!selectedImage} 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={EXPERT.heroImg} 
            alt={EXPERT.name} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>
        
        <div className="relative mt-auto p-6 pb-12 flex flex-col gap-4 text-white">
          <div className="inline-flex items-center gap-2 bg-stone-100/10 backdrop-blur-md px-3 py-1 rounded-full w-fit">
            <Sparkles size={14} className="text-amber-300" />
            <span className="text-xs font-medium uppercase tracking-widest text-stone-200">Expertise em Fibra</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight">
            Eu sou <span className="text-amber-200 italic">{EXPERT.name}</span>, sua especialista em alongamento em Taquaralto.
          </h1>
          <p className="text-lg text-stone-300 font-light leading-snug">
            Transformando o seu visual com a segurança e o brilho que suas mãos merecem.
          </p>
          
          <div className="mt-4 flex flex-col gap-2">
            <Button 
              href={EXPERT.whatsappUrl}
              className="bg-[#F56DB5]/80 backdrop-blur-md hover:bg-[#F56DB5] shadow-[#F56DB5]/40 border border-white/20"
            >
              <MessageCircle size={20} />
              Agendar via WhatsApp
            </Button>
            <p className="text-[10px] text-center text-stone-400 uppercase tracking-tighter">
              Resposta rápida • Atendimento personalizado
            </p>
          </div>
        </div>
      </section>

      {/* Who Am I Section */}
      <Section className="bg-white">
        <div className="flex flex-col gap-8">
          <div className="relative">
            <img 
              src={EXPERT.expertImg} 
              alt="Marcela Lacerda" 
              className="w-full h-80 object-cover rounded-3xl shadow-lg border-b-4 border-[#F56DB5]/30"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-stone-900 leading-tight">
              Excelência técnica com um toque humano.
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Trabalho com alongamentos em fibra de vidro para entregar resistência, naturalidade e um acabamento que reflete a sua personalidade. Meu foco não é proporcionar apenas um serviço, mas sim uma experiência única de autocuidado.
            </p>
            <ul className="grid grid-cols-1 gap-4">
              {[
                "Especialista certificada em Fibra de Vidro",
                "Foco em acabamento natural e ultra resistente",
                "Ambiente climatizado e confortável",
                "Atendimento exclusivo e individualizado"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                  <CheckCircle2 className="text-[#F56DB5] flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section className="bg-stone-50">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-bold">Portfólio Real</span>
          <h2 className="text-3xl font-serif mt-2 text-stone-900 italic">Resultados que encantam</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {EXPERT.gallery.map((img, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-xl shadow-sm active:opacity-75 transition-opacity cursor-pointer border border-stone-200"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Resultado ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <p className="text-[10px] text-center text-stone-400 mt-6 italic">
          *Os resultados podem variar de pessoa para pessoa. Fotos reais de atendimentos.
        </p>
      </Section>

      {/* Why Trust Me? Section */}
      <Section className="bg-white">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-bold">Diferenciais</span>
          <h2 className="text-3xl font-serif mt-2 text-stone-900">Por que me escolher?</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <Card 
            icon={<ShieldCheck size={24} />}
            title="Segurança e Higiene"
            text="Protocolos rigorosos de esterilização e materiais de primeira linha para sua proteção."
          />
          <Card 
            icon={<Star size={24} />}
            title="Avaliação Honesta"
            text="Analiso a saúde da sua unha natural para indicar o melhor procedimento."
          />
          <Card 
            icon={<Clock size={24} />}
            title="Pontualidade"
            text="Respeito o seu tempo. Atendimentos com horário marcado sem esperas desnecessárias."
          />
          <Card 
            icon={<Heart size={24} />}
            title="Foco no Natural"
            text="Alongamentos que não parecem artificiais. Curvatura e espessura impecáveis."
          />
        </div>
      </Section>

      {/* Steps Section */}
      <Section className="bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#F56DB5]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-4">Agende em 3 passos</h2>
            <p className="text-stone-400 text-sm">Prático, rápido e sem burocracia.</p>
          </div>
          
          <div className="flex flex-col gap-6 w-full max-w-xs">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#F56DB5] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">1</div>
              <p className="text-stone-200 font-medium">Clique no botão do WhatsApp</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#F56DB5] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">2</div>
              <p className="text-stone-200 font-medium">Escolha o melhor horário</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#F56DB5] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">3</div>
              <p className="text-stone-200 font-medium">Receba sua confirmação</p>
            </div>
          </div>

          <Button 
            href={EXPERT.whatsappUrl}
            className="bg-white !text-stone-900 w-full mt-4 flex justify-between shadow-white/10"
          >
            <span>Quero meu horário</span>
            <ChevronRight size={20} />
          </Button>
        </div>
      </Section>

      {/* Studio Section */}
      <Section className="bg-white">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-bold">O Studio</span>
          <h2 className="text-3xl font-serif mt-2 text-stone-900 italic">Um refúgio para você</h2>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {EXPERT.studioImgs.map((img, i) => (
              <img key={i} src={img} alt="Studio Interior" className="w-full h-64 object-cover rounded-2xl shadow-md" />
            ))}
          </div>
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
            <p className="text-stone-700 italic text-center">
              "Cada detalhe do nosso espaço foi planejado para oferecer o máximo aconchego. Aqui, você relaxa enquanto eu cuido da beleza das suas mãos."
            </p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-premium-gradient text-center">
        <h2 className="text-4xl font-serif text-stone-900 mb-6">
          Pronta para renovar sua autoestima?
        </h2>
        <p className="text-stone-600 mb-10 leading-relaxed px-4">
          Não deixe para depois a chance de ter unhas impecáveis e resistentes. Fale diretamente comigo agora.
        </p>
        
        <div className="animate-float">
          <Button 
            href={EXPERT.whatsappUrl}
            className="bg-[#F56DB5] text-white w-full py-6 text-xl shadow-[#F56DB5]/20 hover:bg-[#e05ea2]"
          >
            <MessageCircle size={24} />
            Agendar Agora
          </Button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-500 py-12 px-6 text-center text-sm">
        <h3 className="text-stone-100 font-serif text-xl mb-1">{EXPERT.name}</h3>
        <p className="text-stone-400 mb-6">{EXPERT.role}</p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href={EXPERT.instagramUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-800 rounded-full hover:text-white transition-colors" aria-label="Instagram">
            <span className="sr-only">Instagram</span>
            <Instagram size={24} />
          </a>
          <a href={EXPERT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-800 rounded-full hover:text-white transition-colors" aria-label="WhatsApp">
            <span className="sr-only">WhatsApp</span>
            <MessageCircle size={24} />
          </a>
        </div>
        
        <p className="flex items-center justify-center gap-1 mb-8">
          <MapPin size={14} />
          {EXPERT.location}
        </p>

        <div className="pt-8 border-t border-stone-800 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} • Todos os direitos reservados
        </div>
      </footer>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-40 md:hidden">
        <a 
          href={EXPERT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F56DB5] text-white flex items-center justify-center gap-3 py-4 rounded-full shadow-2xl animate-bounce hover:animate-none font-bold shadow-[#F56DB5]/30"
        >
          <MessageCircle size={20} />
          FALAR COM MARCELA
        </a>
      </div>

    </div>
  );
};

export default App;