import React, { useState, useEffect } from 'react';
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
  Sparkles,
  Award,
  Zap
} from 'lucide-react';

const EXPERT = {
  name: "Marcela Lacerda",
  role: "Especialista em Alongamento Fibra de Vidro",
  city: "Taquaralto, Palmas TO",
  whatsappUrl: "https://api.whatsapp.com/send?phone=5563991089254&text=Olá%20vim%20do%20Instagram.%20Gostaria%20de%20saber%20sobre%20os%20serviços%20oferecidos.",
  instagramUrl: "https://www.instagram.com/studio_marcela_lacerda/",
  heroImg: "https://i.imgur.com/en2uYLD.jpeg",
  profileImg: "https://i.imgur.com/tUI1ETT.jpeg",
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

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-12 px-6 ${className}`}>
    {children}
  </section>
);

const ButtonCTA = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a 
    href={EXPERT.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-2 w-full py-5 rounded-2xl font-bold text-white uppercase tracking-widest shadow-xl transition-all active:scale-95 bg-[#F56DB5] ${className}`}
  >
    {children}
  </a>
);

export default function App() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImg]);

  return (
    <div className="app-container overflow-x-hidden">
      
      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white"><X size={32} /></button>
          <img src={selectedImg} alt="Preview" className="max-w-full max-h-[80vh] rounded-lg object-contain shadow-2xl" />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <div className="absolute inset-0">
          <img src={EXPERT.heroImg} alt="Marcela Lacerda Hero" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB] via-transparent to-black/30" />
        </div>
        
        <div className="relative h-full flex flex-col justify-end p-8 pb-12">
          <div className="flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/30">
            <Sparkles size={14} className="text-amber-300" />
            <span className="text-[10px] text-white font-bold tracking-widest uppercase">Especialista em Fibra</span>
          </div>
          <h1 className="text-4xl font-serif leading-tight mb-4 text-stone-900">
            Eu sou <span className="text-[#F56DB5] italic font-bold">{EXPERT.name}</span>, especialista em alongamento de fibra de vidro em <span className="underline decoration-[#F56DB5] decoration-2 underline-offset-4">Taquaralto</span>.
          </h1>
          <p className="text-stone-600 mb-8 leading-relaxed text-lg font-medium">
            Unhas impecáveis, naturais e resistentes. O cuidado que você merece.
          </p>
          <ButtonCTA className="animate-cta">
            <MessageCircle size={20} fill="currentColor" />
            Agendar via WhatsApp
          </ButtonCTA>
          <p className="text-center text-[11px] text-stone-400 mt-4 uppercase tracking-wider font-bold">
            Resposta rápida • Atendimento exclusivo
          </p>
        </div>
      </section>

      {/* About Section */}
      <Section className="bg-white">
        <div className="flex flex-col gap-10">
          <div className="relative">
            <img src={EXPERT.profileImg} alt="Marcela" className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-2xl border-b-8 border-[#F56DB5]" />
            <div className="absolute -bottom-5 -right-5 bg-[#F56DB5] p-5 rounded-3xl shadow-xl text-white">
              <Award size={32} />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-stone-900 leading-tight">Autoridade & <br/><span className="italic text-[#F56DB5]">Paixão pela técnica</span></h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Trabalho com foco total na sua autoestima. Em meu studio, utilizo as técnicas mais avançadas para garantir que suas unhas fiquem finas, naturais e extremamente duradouras.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Atendimento 100% Personalizado",
                "Foco em Naturalidade e Saúde",
                "Materiais Premium de Alta Performance",
                "Ambiente Confortável e Seguro"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-700 font-semibold bg-stone-50 p-4 rounded-2xl border border-stone-100">
                  <CheckCircle2 className="text-[#F56DB5]" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section className="bg-[#F7F1E9]/50">
        <div className="text-center mb-10">
          <span className="text-[#F56DB5] font-black text-[10px] uppercase tracking-[0.3em]">Portfólio Real</span>
          <h2 className="text-3xl font-serif mt-2 text-stone-900">Resultados que <span className="italic">encantam</span></h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {EXPERT.gallery.map((img, idx) => (
            <div 
              key={idx} 
              className="aspect-square overflow-hidden rounded-2xl shadow-sm border-2 border-white cursor-pointer active:scale-95 transition-all"
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt={`Resultado ${idx}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <p className="text-[10px] text-center text-stone-400 mt-8 italic px-4">
          *Os resultados podem variar. Fotos reais de atendimentos realizados por Marcela Lacerda.
        </p>
      </Section>

      {/* Why Section */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-stone-900">Por que me escolher?</h2>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-start gap-4 p-6 rounded-3xl border border-stone-100 shadow-sm bg-white">
            <div className="text-[#F56DB5] bg-[#F56DB5]/10 p-3 rounded-2xl"><ShieldCheck size={28} /></div>
            <div>
              <h3 className="font-bold text-stone-900 text-lg mb-1">Biossegurança</h3>
              <p className="text-sm text-stone-500 leading-relaxed">Materiais rigorosamente esterilizados para sua total proteção e saúde.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-3xl border border-stone-100 shadow-sm bg-white">
            <div className="text-[#F56DB5] bg-[#F56DB5]/10 p-3 rounded-2xl"><Star size={28} /></div>
            <div>
              <h3 className="font-bold text-stone-900 text-lg mb-1">Acabamento Slim</h3>
              <p className="text-sm text-stone-500 leading-relaxed">Técnica exclusiva para unhas finas que parecem naturais, mas são ultra resistentes.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-3xl border border-stone-100 shadow-sm bg-white">
            <div className="text-[#F56DB5] bg-[#F56DB5]/10 p-3 rounded-2xl"><Clock size={28} /></div>
            <div>
              <h3 className="font-bold text-stone-900 text-lg mb-1">Sua Hora é Sagrada</h3>
              <p className="text-sm text-stone-500 leading-relaxed">Atendimento pontual e com o tempo necessário para a perfeição.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Studio Section */}
      <Section className="bg-[#1C1917] text-white rounded-t-[3rem]">
        <div className="text-center mb-12">
          <span className="text-white/40 text-xs uppercase tracking-[0.2em] font-bold">O Studio</span>
          <h2 className="text-3xl font-serif mt-2 text-white italic">Conforto & Aconchego</h2>
        </div>
        <div className="space-y-4 mb-8">
          {EXPERT.studioImgs.map((img, i) => (
            <img key={i} src={img} alt="Studio Interior" className="w-full h-72 object-cover rounded-[2rem] border-2 border-white/5 shadow-2xl" />
          ))}
        </div>
        <div className="bg-white/5 p-8 rounded-[2rem] backdrop-blur-md border border-white/10 text-center">
          <p className="text-stone-300 italic text-lg leading-relaxed">
            "Nosso espaço foi planejado para ser o seu refúgio. Um ambiente climatizado e moderno, focado em proporcionar a melhor experiência de Palmas."
          </p>
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-stone-900 italic">Simples e Rápido</h2>
        </div>
        <div className="flex flex-col gap-8 max-w-[300px] mx-auto">
          <div className="flex items-center gap-5">
            <div className="h-12 w-12 rounded-2xl bg-[#F56DB5] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-[#F56DB5]/30">1</div>
            <p className="text-stone-700 font-bold text-lg">WhatsApp</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="h-12 w-12 rounded-2xl bg-[#F56DB5] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-[#F56DB5]/30">2</div>
            <p className="text-stone-700 font-bold text-lg">Agendamento</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="h-12 w-12 rounded-2xl bg-[#F56DB5] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-[#F56DB5]/30">3</div>
            <p className="text-stone-700 font-bold text-lg">Execução VIP</p>
          </div>
        </div>
        <div className="mt-12">
          <ButtonCTA className="animate-cta">
            <Zap size={22} fill="currentColor" />
            GARANTIR MEU HORÁRIO
          </ButtonCTA>
          <p className="text-center text-xs text-stone-400 mt-4">Atendimento com hora marcada</p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-[#FDFCFB] text-center pt-24 pb-32">
        <div className="inline-block p-5 bg-[#F56DB5]/10 rounded-full mb-8">
          <Heart size={40} className="text-[#F56DB5] fill-[#F56DB5]/20 animate-pulse" />
        </div>
        <h2 className="text-4xl font-serif mb-6 text-stone-900">
          Suas unhas prontas para <span className="italic text-[#F56DB5]">qualquer ocasião.</span>
        </h2>
        <p className="text-stone-500 mb-10 text-lg max-w-[320px] mx-auto font-medium">
          Agenda aberta para novas clientes. Fale comigo agora e conquiste o seu visual dos sonhos.
        </p>
        <ButtonCTA className="py-7 text-xl shadow-[#F56DB5]/40">
          CONVERSAR AGORA
        </ButtonCTA>
      </Section>

      {/* Footer */}
      <footer className="bg-stone-50 py-16 px-8 text-center border-t border-stone-200">
        <h3 className="font-serif text-2xl text-stone-900 mb-2">{EXPERT.name}</h3>
        <p className="text-[#F56DB5] font-black text-xs uppercase tracking-[0.2em] mb-8">{EXPERT.role}</p>
        
        <div className="flex justify-center gap-4 mb-10">
          <a href={EXPERT.instagramUrl} target="_blank" className="p-5 bg-white rounded-3xl shadow-sm text-stone-400 hover:text-[#F56DB5] border border-stone-100 transition-all">
            <Instagram size={28} />
          </a>
          <a href={EXPERT.whatsappUrl} target="_blank" className="p-5 bg-white rounded-3xl shadow-sm text-stone-400 hover:text-[#F56DB5] border border-stone-100 transition-all">
            <MessageCircle size={28} />
          </a>
        </div>
        
        <p className="flex items-center justify-center gap-2 text-stone-500 font-bold text-sm mb-12">
          <MapPin size={18} className="text-[#F56DB5]" />
          {EXPERT.city}
        </p>
        
        <div className="pt-10 border-t border-stone-200 text-[10px] text-stone-300 uppercase tracking-widest font-black">
          © {new Date().getFullYear()} • Marcela Lacerda Nails
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[460px] z-40">
        <a 
          href={EXPERT.whatsappUrl}
          target="_blank"
          className="bg-[#F56DB5] text-white flex items-center justify-between px-7 py-5 rounded-[2rem] shadow-[0_20px_40px_rgba(245,109,181,0.4)] font-black text-sm tracking-widest group"
        >
          <div className="flex items-center gap-3">
            <MessageCircle size={22} fill="currentColor" />
            <span>AGENDAR HORÁRIO</span>
          </div>
          <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </div>
  );
}