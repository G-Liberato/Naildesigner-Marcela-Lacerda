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
  Award
} from 'lucide-react';

// --- Configuration & Data ---
const DATA = {
  expert: {
    name: "Marcela Lacerda",
    specialty: "Especialista em Alongamento Fibra de Vidro",
    bio: "Sou Marcela Lacerda, apaixonada por realçar a beleza natural das unhas através da técnica de fibra de vidro. Em meu studio em Taquaralto, ofereço um atendimento exclusivo focado em durabilidade, naturalidade e na saúde da sua unha.",
    location: "Taquaralto, Palmas TO",
    whatsapp: "https://api.whatsapp.com/send?phone=5563991089254&text=Olá%20vim%20pelo%20site.%20Gostaria%20de%20agendar%20um%20horário.",
    instagram: "https://www.instagram.com/studio_marcela_lacerda/",
  },
  images: {
    hero: "https://i.imgur.com/en2uYLD.jpeg",
    expertProfile: "https://i.imgur.com/tUI1ETT.jpeg",
    studio: [
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
  },
  diffs: [
    { icon: <ShieldCheck className="text-[#F56DB5]" />, title: "Segurança Total", desc: "Processos de esterilização rigorosos e materiais de alta performance." },
    { icon: <Star className="text-[#F56DB5]" />, title: "Acabamento Slim", desc: "Unhas finas, resistentes e com curvatura natural impecável." },
    { icon: <Clock className="text-[#F56DB5]" />, title: "Agilidade", desc: "Técnica otimizada para você não perder o dia todo no salão." },
    { icon: <Award className="text-[#F56DB5]" />, title: "Especialista", desc: "Anos de experiência focados exclusivamente em fibra de vidro." }
  ]
};

// --- Atomic Components ---

const PremiumButton: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ href, children, className }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`
      flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-white
      bg-[#F56DB5] shadow-[0_10px_30px_rgba(245,109,181,0.3)] 
      hover:bg-[#e05ea2] active:scale-[0.98] transition-all duration-300
      ${className}
    `}
  >
    {children}
  </a>
);

const SectionTitle: React.FC<{ subtitle: string; title: string; light?: boolean }> = ({ subtitle, title, light }) => (
  <div className="mb-10 text-center">
    <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${light ? 'text-white/60' : 'text-stone-400'}`}>
      {subtitle}
    </span>
    <h2 className={`text-3xl font-serif mt-2 ${light ? 'text-white' : 'text-stone-900'}`}>
      {title}
    </h2>
  </div>
);

// --- Main Application ---

const App: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (activeImage) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [activeImage]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 max-w-[500px] mx-auto shadow-[0_0_100px_rgba(0,0,0,0.1)] relative">
      
      {/* Lightbox Overlay */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setActiveImage(null)}
        >
          <button className="absolute top-8 right-8 text-white"><X size={32} /></button>
          <img src={activeImage} alt="Preview" className="max-w-full max-h-[80vh] rounded-xl shadow-2xl object-contain" />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={DATA.images.hero} alt="Hero" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB] via-[#FDFCFB]/20 to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end p-8 pb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-[#F56DB5]" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#F56DB5]">Expert em Alongamentos</span>
          </div>
          <h1 className="text-5xl font-serif leading-none mb-6">
            Realce sua <br />
            <span className="italic text-[#F56DB5]">essência.</span>
          </h1>
          <p className="text-stone-600 mb-8 leading-relaxed max-w-[80%]">
            Transformando mãos em obras de arte com a técnica de fibra de vidro mais avançada de Palmas.
          </p>
          <PremiumButton href={DATA.expert.whatsapp}>
            <MessageCircle size={22} fill="currentColor" />
            AGENDAR AGORA
          </PremiumButton>
          <p className="mt-4 text-[10px] text-stone-400 text-center uppercase tracking-widest">
            Atendimento exclusivo em Taquaralto
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-8 bg-white rounded-t-[40px] -mt-10 relative z-10">
        <div className="flex flex-col gap-10">
          <div className="relative group">
            <div className="absolute -inset-2 bg-[#F56DB5]/10 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src={DATA.images.expertProfile} 
              alt="Marcela" 
              className="w-full h-[450px] object-cover rounded-[28px] shadow-xl relative"
            />
          </div>
          <div className="space-y-6">
            <SectionTitle subtitle="Conheça a Expert" title="Excelência em cada detalhe" />
            <p className="text-stone-600 text-lg leading-relaxed">
              Olá! Eu sou <strong className="text-stone-900">{DATA.expert.name}</strong>. Especialista em fibra de vidro, meu compromisso é entregar não apenas unhas lindas, mas uma experiência de bem-estar.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {["Unhas ultra-finas", "Resistência extrema", "Cutilagem impecável"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3 px-4 bg-[#FDFCFB] rounded-xl border border-stone-100">
                  <CheckCircle2 size={18} className="text-[#F56DB5]" />
                  <span className="font-medium text-stone-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-20 px-4 bg-[#F7F1E9]/30">
        <SectionTitle subtitle="Portfólio" title="Resultados Reais" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {DATA.images.gallery.map((img, i) => (
            <div 
              key={i} 
              className="aspect-square rounded-lg overflow-hidden cursor-pointer shadow-sm hover:opacity-90 transition-opacity"
              onClick={() => setActiveImage(img)}
            >
              <img src={img} alt={`Resultado ${i}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <p className="mt-6 text-[10px] text-center text-stone-400 italic">
          *A duração do alongamento depende dos cuidados e manutenção periódica.
        </p>
      </section>

      {/* Differences */}
      <section className="py-20 px-8 bg-white">
        <SectionTitle subtitle="Diferenciais" title="Por que nos escolher?" />
        <div className="grid grid-cols-1 gap-6">
          {DATA.diffs.map((item, i) => (
            <div key={i} className="flex gap-5 items-start p-6 rounded-2xl bg-[#FDFCFB] border border-stone-100">
              <div className="p-3 bg-white shadow-sm rounded-xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Studio */}
      <section className="py-20 px-8 bg-stone-900 text-white rounded-[40px] m-4">
        <SectionTitle subtitle="O Ambiente" title="Um Studio planejado para você" light />
        <p className="text-stone-400 text-center mb-10 -mt-6">
          Ambiente climatizado, café fresco e o máximo conforto.
        </p>
        <div className="flex flex-col gap-4">
          {DATA.images.studio.map((img, i) => (
            <img key={i} src={img} alt="Studio" className="w-full h-56 object-cover rounded-2xl shadow-lg border border-white/10" />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 text-center bg-white">
        <div className="inline-block p-4 bg-[#F56DB5]/5 rounded-full mb-6">
          <Heart size={32} className="text-[#F56DB5] animate-pulse" />
        </div>
        <h2 className="text-4xl font-serif mb-6 text-stone-900">
          Suas mãos merecem <br />esse cuidado.
        </h2>
        <p className="text-stone-500 mb-10 max-w-[280px] mx-auto">
          Poucos horários disponíveis para esta semana. Garanta o seu agora mesmo.
        </p>
        <PremiumButton href={DATA.expert.whatsapp} className="animate-float">
          RESERVAR MEU HORÁRIO
        </PremiumButton>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-[#FDFCFB] border-t border-stone-100 text-center">
        <div className="mb-8">
          <h4 className="font-serif text-2xl mb-1">{DATA.expert.name}</h4>
          <p className="text-stone-400 text-sm">{DATA.expert.specialty}</p>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <a href={DATA.expert.instagram} target="_blank" className="p-4 bg-white shadow-sm border border-stone-100 rounded-full text-stone-400 hover:text-[#F56DB5] transition-colors">
            <Instagram size={24} />
          </a>
          <a href={DATA.expert.whatsapp} target="_blank" className="p-4 bg-white shadow-sm border border-stone-100 rounded-full text-stone-400 hover:text-[#F56DB5] transition-colors">
            <MessageCircle size={24} />
          </a>
        </div>

        <p className="flex items-center justify-center gap-2 text-stone-400 text-sm mb-10">
          <MapPin size={16} className="text-[#F56DB5]" />
          {DATA.expert.location}
        </p>

        <div className="text-[10px] text-stone-300 uppercase tracking-widest pt-8 border-t border-stone-100">
          © {new Date().getFullYear()} • Todos os direitos reservados
        </div>
      </footer>

      {/* Floating Action Button (Sticky Bottom) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[450px] z-50">
        <a 
          href={DATA.expert.whatsapp} 
          target="_blank" 
          className="flex items-center justify-between px-6 py-4 bg-[#F56DB5] text-white rounded-full shadow-2xl font-bold group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <MessageCircle size={18} fill="currentColor" />
            </div>
            <span>AGENDAR VIA WHATSAPP</span>
          </div>
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </div>
  );
};

export default App;