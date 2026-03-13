/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { 
  ChevronRight, 
  Zap, 
  BarChart3, 
  Bot, 
  MessageSquare, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Users,
  Target,
  LineChart,
  ShieldCheck,
  Globe,
  Cpu,
  Layers
} from 'lucide-react';

// --- Animation Variants ---

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-2xl py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-black text-xl group-hover:rotate-12 transition-transform duration-500">E</div>
            <span className="text-xl font-light tracking-[0.2em] text-white uppercase">E&co.</span>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            {['Solução', 'Serviços', 'Jornada'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contato" 
              className="bg-white text-black px-8 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-orange-500 transition-colors"
            >
              Agendar Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div style={{ y: y1, opacity, scale }} className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] bg-orange-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[15%] w-[30vw] h-[30vw] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#02040a_100%)]" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10 opacity-20">
        <div className="grid grid-cols-8 h-full w-full">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-r border-white/5 h-full" />
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-12 backdrop-blur-md"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(245,130,31,1)]" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Enterprise Process Intelligence</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-[120px] font-light tracking-[-0.04em] mb-14 leading-[0.85] text-white"
        >
          Escale com <br/>
          <span className="font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-orange-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
            Inteligência
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="max-w-xl mx-auto text-lg text-gray-500 mb-20 font-light leading-relaxed tracking-wide"
        >
          Transformamos o caos operacional em fluxos previsíveis. A E&co. é o motor de eficiência para empresas que não aceitam o teto do manual.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <button className="group relative px-10 py-5 bg-orange-500 text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:pr-14">
            <span className="relative z-10">Agendar Demo</span>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={18} />
          </button>
          <button className="px-10 py-5 bg-transparent border border-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all">
            Ver Soluções
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  );
};

const RevealSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProblemSolution = () => {
  return (
    <section id="solucao" className="py-52 bg-[#02040a]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <RevealSection className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-red-500 font-bold text-[10px] tracking-[0.4em] uppercase">O Passado</h3>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
                O custo invisível do <span className="italic">manual</span>.
              </h2>
            </div>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-8"
            >
              {[
                "Decisões baseadas em intuição, não em dados estruturados.",
                "Processos que dependem de heróis, não de sistemas.",
                "Gargalos que consomem 40% da margem operacional."
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.01]"
                >
                  <div className="w-10 h-10 rounded-full border border-red-500/20 flex items-center justify-center text-red-500">
                    <AlertTriangle size={16} />
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </RevealSection>

          <RevealSection className="space-y-12 lg:mt-32">
            <div className="space-y-6">
              <h3 className="text-orange-500 font-bold text-[10px] tracking-[0.4em] uppercase">O Futuro</h3>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
                Escala através da <span className="italic">automação</span>.
              </h2>
            </div>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-8"
            >
              {[
                "Inteligência Artificial como camada de decisão em tempo real.",
                "Fluxos de trabalho autônomos que aprendem com a operação.",
                "Visibilidade total de KPIs em dashboards imersivos."
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-6 p-6 rounded-2xl border border-orange-500/10 bg-orange-500/[0.02]"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-gray-300 font-light leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "IA Generativa B2B",
      desc: "Agentes que compreendem seu negócio e atendem clientes com precisão humana.",
      icon: <Bot className="w-5 h-5" />
    },
    {
      title: "Data Intelligence",
      desc: "Transformamos Big Data em insights acionáveis para o C-Level.",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Process Mining",
      desc: "Mapeamento algorítmico de gargalos e oportunidades de automação.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: "Cloud Automation",
      desc: "Infraestrutura escalável que cresce junto com sua demanda operacional.",
      icon: <Cpu className="w-5 h-5" />
    }
  ];

  return (
    <section id="servicos" className="py-52 relative">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <RevealSection className="text-center mb-40">
          <h3 className="text-orange-500 font-bold text-[10px] tracking-[0.5em] uppercase mb-8">Expertise</h3>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-8">Nossas Verticais</h2>
          <div className="w-20 h-px bg-orange-500 mx-auto" />
        </RevealSection>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="p-10 border border-white/5 rounded-[2rem] bg-white/[0.01] hover:bg-white/[0.03] hover:border-orange-500/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/5 flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-light mb-4 text-white tracking-tight">{service.title}</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Journey = () => {
  const steps = [
    {
      title: "Discovery",
      desc: "Imersão técnica para entender a topologia dos seus processos atuais.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Blueprint",
      desc: "Desenho da arquitetura de IA e definição de KPIs de sucesso.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Scale",
      desc: "Implementação assistida e monitoramento de performance em tempo real.",
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  return (
    <section id="jornada" className="py-52 bg-[#05070a]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <RevealSection className="text-center mb-40">
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-6">A Jornada</h2>
          <p className="text-gray-500 font-light tracking-widest uppercase text-[10px]">Do diagnóstico à escala global</p>
        </RevealSection>

        <div className="grid lg:grid-cols-3 gap-24 relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden lg:block" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 text-center space-y-8"
            >
              <div className="w-20 h-20 bg-black border border-white/10 rounded-full flex items-center justify-center mx-auto text-orange-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                {step.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-white tracking-tight">{step.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contato" className="py-72 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <RevealSection className="space-y-12">
          <h2 className="text-6xl md:text-[100px] font-light tracking-tighter text-white leading-[0.9]">
            Pronto para o <br/>
            <span className="italic font-normal text-orange-500">próximo nível?</span>
          </h2>
          <p className="text-gray-500 font-light text-lg max-w-xl mx-auto leading-relaxed">
            Estamos selecionando apenas 4 novos parceiros estratégicos para este trimestre. Garanta sua vaga na vanguarda da automação.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-16 py-8 bg-white text-black text-[10px] font-bold uppercase tracking-[0.4em] rounded-full overflow-hidden transition-all"
          >
            <span className="relative z-10">Solicitar Demonstração</span>
            <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.button>
        </RevealSection>
      </div>
      
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[200px]" />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-32 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-black text-sm">E</div>
              <span className="text-lg font-light tracking-[0.2em] text-white uppercase">E&co.</span>
            </div>
            <p className="text-gray-600 font-light text-sm max-w-xs leading-relaxed">
              Intelligence Operations. <br/>
              A fronteira final da eficiência corporativa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-24">
            <div className="space-y-6">
              <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">Legal</h6>
              <ul className="space-y-3 text-xs text-gray-600 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">Social</h6>
              <ul className="space-y-3 text-xs text-gray-600 font-light">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">X / Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/5">
          <div className="text-[8px] text-gray-800 uppercase tracking-[1em] font-bold">
            © 2026 E&CO. DATA SYSTEMS INC.
          </div>
          <div className="flex gap-8">
            <Globe size={12} className="text-gray-800" />
            <Cpu size={12} className="text-gray-800" />
            <Layers size={12} className="text-gray-800" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#02040a] text-gray-100 antialiased font-sans selection:bg-orange-500 selection:text-black">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Services />
      <Journey />
      <CTA />
      <Footer />
    </div>
  );
}
