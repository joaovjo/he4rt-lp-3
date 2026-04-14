import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Code, BookOpen, MessageSquare, ArrowRight, Github, Twitter, Instagram, Linkedin, ExternalLink, Terminal, Zap, Star } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  reading_time_minutes: number;
  tag_list: string[];
  published_at: string;
}

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(true);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=he4rt&per_page=6')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoadingArticles(false);
      })
      .catch(err => {
        console.error("Failed to fetch articles", err);
        setLoadingArticles(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white font-sans selection:bg-purple-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f0f11]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.svg" className="w-6 h-6 text-purple-500 fill-purple-500" />
            <span className="font-bold text-xl tracking-tight">He4rt Developers</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#inicio" className="hover:text-white transition-colors">Início</a>
            <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
            <a href="#artigos" className="hover:text-white transition-colors">Artigos</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md font-medium text-sm transition-colors flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Discord
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
          {/* Background Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 pointer-events-none z-0">
            <img src="/assets/logo.svg" alt="" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-8 border border-purple-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Comunidade ativa e crescendo
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight"
          >
            Desenvolva seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">potencial</span> na comunidade
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
          >
            A He4rt Developers é uma comunidade focada em ajudar pessoas a iniciarem na área de tecnologia, oferecendo suporte, projetos e muito aprendizado.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10 flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              Começar agora <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3 rounded-md font-semibold transition-colors flex items-center justify-center gap-2">
              <Github className="w-4 h-4" /> Nosso GitHub
            </button>
          </motion.div>
        </section>

        {/* Features */}
        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: 'Comunidade', desc: 'Faça networking e conheça pessoas incríveis.' },
                { icon: MessageSquare, title: 'Interação', desc: 'Troque ideias e tire suas dúvidas no Discord.' },
                { icon: BookOpen, title: 'Aprendizado', desc: 'Acesse materiais e cursos gratuitos.' },
                { icon: Code, title: 'Colaboração', desc: 'Participe de projetos open-source.' },
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transformando a jornada em desenvolvimento</h2>
              <p className="text-gray-400 text-lg mb-8">
                Acreditamos que o aprendizado em conjunto é a melhor forma de evoluir. Nossa comunidade oferece um ambiente seguro e acolhedor para você dar seus primeiros passos ou aprimorar suas habilidades.
              </p>
              <ul className="space-y-4">
                {[
                  'Mentorias com profissionais experientes',
                  'Desafios práticos para testar seus conhecimentos',
                  'Eventos e workshops exclusivos',
                  'Espaço para compartilhar suas conquistas'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3 text-purple-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-[#1a1a1f] border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                  <code>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{\n'}
                    {'  '}name: <span className="text-green-400">'Você'</span>,{'\n'}
                    {'  '}skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>],{'\n'}
                    {'  '}community: <span className="text-green-400">'He4rt Developers'</span>,{'\n'}
                    {'  '}status: <span className="text-green-400">'Evoluindo a cada dia'</span>{'\n'}
                    {'}'};{'\n\n'}
                    <span className="text-gray-500">// Junte-se a nós e escreva sua história</span>{'\n'}
                    <span className="text-blue-400">developer</span>.<span className="text-yellow-200">join</span>();
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projetos" className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Aprenda na prática</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">Conheça nossas iniciativas focadas em acelerar o seu aprendizado através de projetos reais e documentação de qualidade.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: '4Noobs', desc: 'Repositórios com conteúdos introdutórios sobre diversas tecnologias, criados de forma didática pela comunidade.', icon: Terminal },
                { title: 'He4rtLabs', desc: 'Projetos práticos e desafios para você colocar a mão na massa e construir seu portfólio.', icon: Code },
                { title: '100DiasDeCodigo', desc: 'Um desafio para manter a consistência nos estudos, programando um pouco todos os dias.', icon: Zap },
              ].map((project, i) => (
                <div key={i} className="group p-8 rounded-2xl bg-[#1a1a1f] border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                    <project.icon className="w-7 h-7 text-gray-300 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors">
                    Saiba mais <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section id="artigos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Artigos fodas da comunidade</h2>
              <p className="text-gray-400 text-lg">Conteúdos escritos por nossos membros para compartilhar conhecimento.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium">
              Ver todos <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadingArticles ? (
              [1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-video rounded-xl bg-white/5 border border-white/10 mb-4"></div>
                  <div className="h-4 bg-white/10 rounded w-1/3 mb-3"></div>
                  <div className="h-6 bg-white/10 rounded w-full mb-2"></div>
                  <div className="h-6 bg-white/10 rounded w-2/3 mb-4"></div>
                  <div className="h-4 bg-white/10 rounded w-full mb-1"></div>
                  <div className="h-4 bg-white/10 rounded w-4/5"></div>
                </div>
              ))
            ) : (
              articles.map((article) => (
                <a key={article.id} href={article.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                  <div className="aspect-video rounded-xl bg-white/5 border border-white/10 mb-4 overflow-hidden relative">
                    {article.cover_image ? (
                      <img src={article.cover_image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-purple-900/20">
                        <BookOpen className="w-8 h-8 text-purple-400/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-purple-400 font-medium mb-2">
                    <span>{article.tag_list[0] || 'Desenvolvimento'}</span>
                    <span>•</span>
                    <span>{article.reading_time_minutes} min de leitura</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {article.description}
                  </p>
                </a>
              ))
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que dizem nossos membros</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'João Silva', role: 'Frontend Developer', text: 'A He4rt foi fundamental no meu início de carreira. O apoio da comunidade me deu confiança para conseguir minha primeira vaga.' },
                { name: 'Maria Souza', role: 'Backend Developer', text: 'Os projetos do He4rtLabs me ajudaram a entender como as coisas funcionam no mundo real. Recomendo para todos!' },
                { name: 'Pedro Santos', role: 'Fullstack Developer', text: 'Mais do que código, encontrei amigos e mentores incríveis. A cultura de ajuda mútua é o diferencial.' },
              ].map((testimonial, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#1a1a1f] border border-white/10 relative">
                  <Star className="w-8 h-8 text-purple-500/20 absolute top-6 right-6 fill-purple-500/20" />
                  <p className="text-gray-300 mb-6 relative z-10">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <span className="text-xs text-gray-500">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="pt-20 pb-10 border-t border-white/10 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src="/assets/logo.svg" className="w-6 h-6 text-purple-500 fill-purple-500" />
                <span className="font-bold text-xl tracking-tight">He4rt Developers</span>
              </div>
              <p className="text-gray-400 max-w-md mb-8">
                Mais que uma comunidade, uma família de desenvolvedores apaixonados por tecnologia e aprendizado contínuo.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all text-gray-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all text-gray-400">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all text-gray-400">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all text-gray-400">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Links Úteis</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Projetos</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Artigos</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Regras da Comunidade</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Junte-se a nós</h4>
              <p className="text-gray-400 mb-4">Venha fazer parte do nosso discord e interagir com milhares de devs.</p>
              <button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Entrar no Discord
              </button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} He4rt Developers. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-300">Termos de Uso</a>
              <a href="#" className="hover:text-gray-300">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
