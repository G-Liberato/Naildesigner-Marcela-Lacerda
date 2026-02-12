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
    <div className="app-container">
      
      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white p-2">
            <X size={32} />
          </button>
          <img 
            src={selectedImg} 
            alt="Preview" 
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl transition-all duration-300 scale-100" 
          />
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={EXPERT.heroImg} alt="Marcela Lacerda" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFB] via-transparent to-black/20" />
        </div>
        
        <div className="relative h-full flex flex-col justify-end p-8 pb-12">
          <div className="flex items-center gap-2 mb-6 bg-white/30 backdrop-blur-lg w-fit px-4 py-1.5 rounded-full border border-white/40 shadow-sm">
            <Sparkles size={14} className="text-amber-200" />
            <span className="text-[10px] text-white font-black tracking-widest uppercase">Expertise Premium</span>
          </div>
          
          <h1 className="text-4xl font-serif leading-tight mb-4 text-stone-900 drop-shadow-sm">
            Eu sou <span className="text-[#F56DB5] italic font-black">{EXPERT.name}</span>, especialista em fibra de vidro em <span className="underline decoration-[#F56DB5] decoration-2 underline-offset-8">Taquaralto</span>.
          </h1>
          
          <p className="text-stone-600 mb-8 leading-relaxed text-lg font-medium max-w-[90%]">
            Transformando o seu olhar para as suas mãos com a naturalidade e resistência que você busca.
          </p>

          <a 
            href={EXPERT.whatsappUrl} 
            target="_blank" 
            className="flex items-center justify-center gap-3 bg-[#F56DB5] py-5 rounded-2xl font-black text-white uppercase tracking-widest shadow-2xl shadow-[#F56DB5]/30 active:scale-95 transition-all"
          >
            <MessageCircle size={22} fill="currentColor" />
            AGENDAR VIA WHATSAPP
          </a>
          <p className="text-center text-[10px] text-stone-400 mt-4 uppercase tracking-[0.2em] font-bold">
            Atendimento Rápido • Personalizado
          </p>
        </div>
      </section>

      {/* 2. QUEM SOU EU (Autoridade) */}
      <section className="py-20 px-8 bg-white">
        <div className="flex flex-col gap-12">
          <div className="relative group">
            <img src={EXPERT.profileImg} alt="Perfil Marcela" className="w-full h-[480px] object-cover rounded-[3rem] shadow-2xl border-b-[12px] border-[#F56DB5]/20" />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-xl border border-stone-50">
              <Award size={40} className="text-[#F56DB5]" />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-stone-900 leading-tight">
              Excelência Técnica & <br/><span className="italic text-[#F56DB5]">Propósito</span>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              Minha missão é entregar unhas que unem beleza e saúde. Através da fibra de vidro, proporciono um resultado ultra-fino, resistente e com acabamento de joia.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Procedimento 100% Indolor",
                "Foco Total em Naturalidade",
                "Produtos de Alta Performance",
                "Certificação Especializada"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                  <CheckCircle2 className="text-[#F56DB5]" size={20} />
                  <span className="font-bold text-stone-700 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALERIA (Resultados) */}
      <section className="py-20 px-4 bg-[#F7F1E9]/40">
        <div className="text-center mb-12">
          <span className="text-[#F56DB5] font-black text-[11px] uppercase tracking-[0.4em] block mb-2">Portfolio</span>
          <h2 className="text-3xl font-serif text-stone-900">Resultados <span className="italic">Reais</span></h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {EXPERT.gallery.map((img, idx) => (
            <div 
              key={idx} 
              className="aspect-square overflow-hidden rounded-2xl shadow-md border-2 border-white cursor-pointer active:scale-95 transition-all duration-300"
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt={`Unha ${idx}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <p className="text-[10px] text-center text-stone-400 mt-10 italic px-6 leading-relaxed">
          *Fotos reais. Os resultados variam de acordo com o biotipo e cuidados pós-procedimento.
        </p>
      </section>

      {/* 4. DIFERENCIAIS */}
      <section className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-serif text-stone-900 mb-12 text-center italic">Sua melhor escolha</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex gap-5 p-6 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm">
            <div className="bg-white p-4 rounded-2xl shadow-sm"><ShieldCheck size={28} className="text-[#F56DB5]" /></div>
            <div>
              <h3 className="font-black text-stone-900 mb-1">Biossegurança</h3>
              <p className="text-sm text-stone-500">Materiais 100% descartáveis ou esterilizados para sua total segurança.</p>
            </div>
          </div>
          <div className="flex gap-5 p-6 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm">
            <div className="bg-white p-4 rounded-2xl shadow-sm"><Star size={28} className="text-[#F56DB5]" /></div>
            <div>
              <h3 className="font-black text-stone-900 mb-1">Acabamento Slim</h3>
              <p className="text-sm text-stone-500">Unhas finas como as naturais, mas com a resistência que só a fibra oferece.</p>
            </div>
          </div>
          <div className="flex gap-5 p-6 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm">
            <div className="bg-white p-4 rounded-2xl shadow-sm"><Clock size={28} className="text-[#F56DB5]" /></div>
            <div>
              <h3 className="font-black text-stone-900 mb-1">Sua Hora é VIP</h3>
              <p className="text-sm text-stone-500">Atendimento individual e pontual. Sem filas, sem esperas no studio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STUDIO (Bastidores) */}
      <section className="py-20 px-8 bg-[#1C1917] text-white rounded-t-[4rem]">
        <div className="text-center mb-12">
          <span className="text-white/30 text-xs uppercase tracking-[0.3em] font-black block mb-2">Nosso Espaço</span>
          <h2 className="text-3xl font-serif italic">Conforto & Sofisticação</h2>
        </div>
        <div className="space-y-4">
          {EXPERT.studioImgs.map((img, i) => (
            <img key={i} src={img} alt="Studio" className="w-full h-72 object-cover rounded-[2.5rem] shadow-2xl border border-white/5" />
          ))}
        </div>
        <div className="mt-10 bg-white/5 p-8 rounded-[2rem] border border-white/10 text-center">
          <p className="text-stone-300 italic text-lg leading-relaxed">
            "Um ambiente totalmente climatizado e pensado para que seu momento de beleza seja também um momento de descanso."
          </p>
        </div>
      </section>

      {/* 6. HOW TO SCHEDULE */}
      <section className="py-24 px-8 bg-white">
        <h2 className="text-3xl font-serif text-stone-900 text-center mb-16 italic">Processo Simples</h2>
        <div className="flex flex-col gap-10 max-w-[280px] mx-auto relative">
          <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-stone-100" />
          {[
            { step: "1", title: "WhatsApp", desc: "Clique no botão e inicie a conversa." },
            { step: "2", title: "Agenda", desc: "Escolha seu melhor dia e horário." },
            { step: "3", title: "Transformação", desc: "Venha viver a sua melhor versão." }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6 relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-[#F56DB5] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-[#F56DB5]/30">
                {item.step}
              </div>
              <div>
                <h4 className="font-black text-stone-900">{item.title}</h4>
                <p className="text-xs text-stone-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <a 
            href={EXPERT.whatsappUrl} 
            target="_blank" 
            className="flex items-center justify-center gap-3 bg-[#F56DB5] py-6 rounded-3xl font-black text-white uppercase tracking-widest shadow-2xl shadow-[#F56DB5]/30 active:scale-95 transition-all"
          >
            <Zap size={22} fill="currentColor" />
            RESERVAR AGORA
          </a>
        </div>
      </section>

      {/* 7. FINAL CALL */}
      <section className="py-24 px-8 bg-stone-50 text-center">
        <div className="inline-block p-6 bg-white rounded-full shadow-sm mb-8">
          <Heart size={48} className="text-[#F56DB5] fill-[#F56DB5]/10 animate-pulse" />
        </div>
        <h2 className="text-4xl font-serif text-stone-900 mb-6 leading-tight">
          Pronta para se <br/><span className="italic text-[#F56DB5]">apaixonar?</span>
        </h2>
        <p className="text-stone-500 mb-12 text-lg font-medium max-w-[300px] mx-auto">
          Agenda aberta. Fale comigo agora mesmo e garanta sua transformação.
        </p>
        <a 
          href={EXPERT.whatsappUrl} 
          target="_blank" 
          className="flex items-center justify-center gap-3 bg-[#F56DB5] py-7 rounded-3xl font-black text-white text-xl uppercase tracking-[0.2em] shadow-2xl shadow-[#F56DB5]/40 active:scale-95 transition-all"
        >
          WHATSAPP
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 py-20 px-8 text-center border-t border-white/5">
        <h3 className="font-serif text-3xl text-white mb-2">{EXPERT.name}</h3>
        <p className="text-[#F56DB5] font-black text-xs uppercase tracking-[0.3em] mb-10">{EXPERT.role}</p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a href={EXPERT.instagramUrl} target="_blank" className="p-5 bg-white/5 rounded-[2rem] text-stone-400 hover:text-white border border-white/10 transition-colors">
            <Instagram size={32} />
          </a>
          <a href={EXPERT.whatsappUrl} target="_blank" className="p-5 bg-white/5 rounded-[2rem] text-stone-400 hover:text-white border border-white/10 transition-colors">
            <MessageCircle size={32} />
          </a>
        </div>
        
        <p className="flex items-center justify-center gap-2 text-stone-500 font-bold text-sm mb-16">
          <MapPin size={18} className="text-[#F56DB5]" />
          {EXPERT.city}
        </p>
        
        <div className="pt-10 border-t border-white/10 text-[10px] text-stone-600 uppercase tracking-widest font-black">
          © {new Date().getFullYear()} • Marcela Lacerda Nails • Palmas/TO
        </div>
      </footer>

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] z-[60] animate-float-cta">
        <a 
          href={EXPERT.whatsappUrl} 
          target="_blank" 
          className="bg-[#F56DB5] text-white flex items-center justify-between px-8 py-5 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(245,109,181,0.6)] font-black text-xs tracking-[0.2em] uppercase"
        >
          <div className="flex items-center gap-3">
            <MessageCircle size={20} fill="currentColor" />
            <span>AGENDAR HORÁRIO</span>
          </div>
          <ChevronRight size={22} />
        </a>
      </div>

    </div>
  );
}