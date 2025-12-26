
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Home, Briefcase, FileText, Mail, Settings, 
  BarChart, Users, MessageSquare, ChevronRight, ArrowRight,
  Instagram, Globe, Linkedin, Facebook, Edit3, Trash2, PlusCircle,
  Save, Layout as LayoutIcon, Image as ImageIcon, Sparkles, CheckCircle2, AlertCircle
} from 'lucide-react';
import { SiteConfig, Post, ViewType } from './types.ts';
import { INITIAL_CONFIG, INITIAL_POSTS } from './constants.ts';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area 
} from 'recharts';

// --- Sub-components (extracted for readability) ---

const Navbar = ({ config, setView, activeView }: { config: SiteConfig, setView: (v: ViewType) => void, activeView: ViewType }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: '홈', view: 'home' as ViewType },
    { name: '서비스', view: 'services' as ViewType },
    { name: '소식/블로그', view: 'blog' as ViewType },
    { name: '문의하기', view: 'contact' as ViewType },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
            <span className="text-2xl font-bold tracking-tighter text-white">
              YUL<span className="text-purple-500">COMPANY</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => setView(item.view)}
                className={`text-sm font-medium transition-colors ${activeView === item.view ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => setView('admin')}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-semibold transition-all"
            >
              관리자
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 py-4 px-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => { setView(item.view); setIsOpen(false); }}
              className="block w-full text-left text-lg py-2 text-gray-300"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => { setView('admin'); setIsOpen(false); }}
            className="w-full py-3 bg-purple-600 text-white rounded-lg text-lg font-bold"
          >
            관리자 대시보드
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ config, setView }: { config: SiteConfig, setView: (v: ViewType) => void }) => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
    <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[128px] animate-pulse delay-1000"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 whitespace-pre-line tracking-tight">
          {config.heroTitle}
        </h1>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          {config.heroSub}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setView('services')}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-lg flex items-center justify-center group transition-all"
          >
            서비스 바로가기
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => setView('contact')}
            className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white rounded-lg font-bold text-lg transition-all"
          >
            무료 상담 신청
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ config }: { config: SiteConfig }) => (
  <footer className="bg-black border-t border-white/10 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">YUL<span className="text-purple-500">COMPANY</span></h2>
          <p className="text-gray-400 max-w-sm mb-6">
            기업의 가치를 높이고 성공적인 정부지원사업 파트너로서 함께합니다.
            전문가들의 밀착 컨설팅을 통해 확실한 성과를 약속합니다.
          </p>
          <div className="flex space-x-4">
            {config.socialLinks.instagram && <a href={config.socialLinks.instagram} className="text-gray-400 hover:text-purple-400"><Instagram size={24}/></a>}
            {config.socialLinks.linkedin && <a href={config.socialLinks.linkedin} className="text-gray-400 hover:text-purple-400"><Linkedin size={24}/></a>}
            {config.socialLinks.blog && <a href={config.socialLinks.blog} className="text-gray-400 hover:text-purple-400"><Globe size={24}/></a>}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6">Contact</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-2"><Mail size={16}/> {config.contactEmail}</li>
            <li className="flex items-center gap-2"><MessageSquare size={16}/> {config.contactPhone}</li>
            <li className="flex items-start gap-2"><Home size={16} className="mt-1"/> {config.address}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6">Link</h3>
          <ul className="space-y-4 text-gray-400">
            <li><button className="hover:text-purple-400">회사소개</button></li>
            <li><button className="hover:text-purple-400">개인정보처리방침</button></li>
            <li><button className="hover:text-purple-400">이용약관</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
        © 2024 Yul Company. All rights reserved.
      </div>
    </div>
  </footer>
);

// --- Admin Dashboard Components ---

const AdminDashboard = ({ 
  config, 
  setConfig, 
  posts, 
  setPosts 
}: { 
  config: SiteConfig, 
  setConfig: (c: SiteConfig) => void,
  posts: Post[],
  setPosts: (p: Post[]) => void
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'posts' | 'design'>('overview');
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const stats = [
    { label: '방문자', value: '1,284', change: '+12%', color: 'text-purple-400' },
    { label: '상담신청', value: '42', change: '+5%', color: 'text-blue-400' },
    { label: '게시글 수', value: posts.length.toString(), change: '0%', color: 'text-emerald-400' },
  ];

  const data = [
    { name: '월', count: 400 },
    { name: '화', count: 300 },
    { name: '수', count: 600 },
    { name: '목', count: 800 },
    { name: '금', count: 500 },
    { name: '토', count: 200 },
    { name: '일', count: 100 },
  ];

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    alert('설정이 저장되었습니다.');
  };

  const handleAddPost = () => {
    const newPost: Post = {
      id: Date.now().toString(),
      title: "새로운 게시글 제목",
      excerpt: "요약 내용을 입력하세요",
      content: "본문 내용을 입력하세요",
      category: "공지사항",
      date: new Date().toISOString().split('T')[0],
      image: "https://picsum.photos/800/400?random=" + Math.random()
    };
    setPosts([newPost, ...posts]);
    setEditingPost(newPost);
    setActiveTab('posts');
  };

  const deletePost = (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <BarChart size={18} /> 대시보드
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'content' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <LayoutIcon size={18} /> 콘텐츠 관리
          </button>
          <button 
            onClick={() => setActiveTab('posts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'posts' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <FileText size={18} /> 블로그/게시물
          </button>
          <button 
            onClick={() => setActiveTab('design')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'design' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Sparkles size={18} /> 디자인/SEO
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">운영 현황</h2>
                <span className="text-sm text-gray-500">업데이트: 방금 전</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <span className={`text-xs font-bold ${stat.color}`}>{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/5 h-80">
                <h3 className="text-sm font-medium text-gray-400 mb-6">주간 방문자 트렌드</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip contentStyle={{ background: '#171717', border: 'none', borderRadius: '8px' }} />
                    <Area type="monotone" dataKey="count" stroke="#7c3aed" fillOpacity={1} fill="url(#colorCount)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <form onSubmit={handleSaveConfig} className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">웹사이트 기본 정보 수정</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">웹사이트 이름</label>
                  <input 
                    type="text" 
                    value={config.name} 
                    onChange={e => setConfig({...config, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">이메일</label>
                  <input 
                    type="text" 
                    value={config.contactEmail} 
                    onChange={e => setConfig({...config, contactEmail: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-gray-400">메인 헤드라인</label>
                  <textarea 
                    value={config.heroTitle} 
                    onChange={e => setConfig({...config, heroTitle: e.target.value})}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-gray-400">메인 서브제목</label>
                  <textarea 
                    value={config.heroSub} 
                    onChange={e => setConfig({...config, heroSub: e.target.value})}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
              >
                <Save size={18} /> 변경사항 저장하기
              </button>
            </form>
          )}

          {activeTab === 'posts' && (
            <div className="space-y-6">
              {!editingPost ? (
                <>
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">게시물 관리</h2>
                    <button 
                      onClick={handleAddPost}
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all"
                    >
                      <PlusCircle size={18} /> 새 글 작성
                    </button>
                  </div>
                  <div className="space-y-4">
                    {posts.map(post => (
                      <div key={post.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex gap-4 items-center">
                          <img src={post.image} className="w-16 h-16 rounded-lg object-cover" alt="" />
                          <div>
                            <h4 className="font-bold">{post.title}</h4>
                            <p className="text-xs text-gray-400">{post.date} | {post.category}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => setEditingPost(post)} className="p-2 text-gray-400 hover:text-white transition-colors"><Edit3 size={18}/></button>
                          <button onClick={() => deletePost(post.id)} className="p-2 text-gray-400 hover:text-red-400 transition-colors"><Trash2 size={18}/></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">글 편집 중</h2>
                    <button onClick={() => setEditingPost(null)} className="text-sm text-gray-400 hover:text-white underline">목록으로 돌아가기</button>
                  </div>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      value={editingPost.title}
                      onChange={e => {
                        const newP = {...editingPost, title: e.target.value};
                        setEditingPost(newP);
                        setPosts(posts.map(p => p.id === editingPost.id ? newP : p));
                      }}
                      placeholder="제목을 입력하세요"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xl font-bold text-white focus:outline-none focus:border-purple-500"
                    />
                    <div className="flex gap-4">
                       <input 
                        type="text" 
                        value={editingPost.category}
                        onChange={e => {
                          const newP = {...editingPost, category: e.target.value};
                          setEditingPost(newP);
                          setPosts(posts.map(p => p.id === editingPost.id ? newP : p));
                        }}
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                      />
                      <input 
                        type="date" 
                        value={editingPost.date}
                        onChange={e => {
                          const newP = {...editingPost, date: e.target.value};
                          setEditingPost(newP);
                          setPosts(posts.map(p => p.id === editingPost.id ? newP : p));
                        }}
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                      />
                    </div>
                    <textarea 
                      value={editingPost.content}
                      onChange={e => {
                        const newP = {...editingPost, content: e.target.value};
                        setEditingPost(newP);
                        setPosts(posts.map(p => p.id === editingPost.id ? newP : p));
                      }}
                      rows={10}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                      placeholder="본문 내용을 입력하세요..."
                    />
                  </div>
                  <button 
                    onClick={() => { alert('성공적으로 저장되었습니다.'); setEditingPost(null); }}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold"
                  >
                    게시하기
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'design' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-6">디자인 및 마케팅 설정</h2>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                  <h3 className="font-bold mb-4 flex items-center gap-2 text-purple-400"><Sparkles size={18}/> 브랜드 테마 컬러</h3>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-600 cursor-pointer border-2 border-white"></div>
                    <div className="w-12 h-12 rounded-lg bg-indigo-600 cursor-pointer opacity-50"></div>
                    <div className="w-12 h-12 rounded-lg bg-blue-600 cursor-pointer opacity-50"></div>
                    <div className="w-12 h-12 rounded-lg bg-emerald-600 cursor-pointer opacity-50"></div>
                  </div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                  <h3 className="font-bold mb-4 flex items-center gap-2 text-purple-400"><Globe size={18}/> 검색 엔진 최적화 (SEO)</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-500">메타 설명 (Description)</label>
                      <input type="text" placeholder="검색결과에 표시될 설명을 입력하세요" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-gray-500">핵심 키워드</label>
                      <input type="text" placeholder="쉼표로 구분 예: 경영컨설팅, 정부지원사업" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Page Content Components ---

const BlogList = ({ posts, setView, setSelectedPost }: { posts: Post[], setView: (v: ViewType) => void, setSelectedPost: (p: Post) => void }) => (
  <section className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">소식 및 인사이트</h2>
        <p className="text-gray-400">율컴퍼니가 전해드리는 전문적인 컨설팅 뉴스</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map(post => (
          <div 
            key={post.id} 
            onClick={() => { setSelectedPost(post); setView('post-detail'); }}
            className="group cursor-pointer bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">{post.category}</span>
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{post.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServiceSection = () => {
  const services = [
    { title: "정부지원사업 컨설팅", desc: "예비/초기창업패키지, 혁신바우처 등 최적의 사업 매칭 및 사업계획서 대행", icon: <Briefcase /> },
    { title: "경영 전략 고도화", desc: "시장 분석, 핵심 역량 도출을 통한 비즈니스 모델 재설계 및 중장기 전략 수립", icon: <BarChart /> },
    { title: "R&D 국책과제 기획", desc: "기술성 평가 분석 및 R&D 사업 선정을 위한 밀착 가이드 및 기획 지원", icon: <Sparkles /> },
    { title: "마케팅 및 해외 판로", desc: "글로벌 시장 진출 전략 및 수출 바우처 사업 연계를 통한 매출 극대화", icon: <Globe /> },
  ];

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Core Services</h2>
          <p className="text-gray-400">기업의 단계별 성장을 위한 토탈 컨설팅 솔루션을 제공합니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-purple-600/20 text-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<ViewType>('home');
  const [config, setConfig] = useState<SiteConfig>(INITIAL_CONFIG);
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  
  // Form status state
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Persistence (Simulated via localStorage)
  useEffect(() => {
    const savedConfig = localStorage.getItem('yul_config');
    const savedPosts = localStorage.getItem('yul_posts');
    if (savedConfig) setConfig(JSON.parse(savedConfig));
    if (savedPosts) setPosts(JSON.parse(savedPosts));
  }, []);

  useEffect(() => {
    localStorage.setItem('yul_config', JSON.stringify(config));
    localStorage.setItem('yul_posts', JSON.stringify(posts));
  }, [config, posts]);

  // Handle Hash Changes for basic deep linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'blog', 'contact', 'admin'].includes(hash)) {
        setView(hash as ViewType);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedPost]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xojqqlwa", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const renderContent = () => {
    switch(view) {
      case 'home':
        return (
          <>
            <Hero config={config} setView={setView} />
            <ServiceSection />
            <BlogList posts={posts.slice(0, 3)} setView={setView} setSelectedPost={setSelectedPost} />
            <section className="py-24 bg-purple-600">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">지금 바로 전문가와 상의하세요.</h2>
                <button onClick={() => setView('contact')} className="px-10 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-neutral-900 transition-all">
                  컨설팅 상담 신청하기
                </button>
              </div>
            </section>
          </>
        );
      case 'services':
        return (
          <div className="pt-24 pb-20 px-4">
            <ServiceSection />
          </div>
        );
      case 'blog':
        return (
          <div className="pt-24 pb-20 px-4">
            <BlogList posts={posts} setView={setView} setSelectedPost={setSelectedPost} />
          </div>
        );
      case 'post-detail':
        return selectedPost ? (
          <article className="pt-32 pb-24 max-w-4xl mx-auto px-4">
            <button onClick={() => setView('blog')} className="flex items-center gap-2 text-purple-400 mb-8 hover:underline"><ChevronRight className="rotate-180" size={16}/> 목록으로</button>
            <div className="mb-12">
              <span className="text-purple-500 font-bold mb-4 block">{selectedPost.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{selectedPost.title}</h1>
              <p className="text-gray-500 mb-8">{selectedPost.date}</p>
              <img src={selectedPost.image} className="w-full h-[400px] object-cover rounded-3xl border border-white/10" alt="" />
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-loose whitespace-pre-line">
              {selectedPost.content}
            </div>
          </article>
        ) : setView('blog');
      case 'contact':
        return (
          <section className="pt-32 pb-24 px-4 bg-black">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">상담 신청</h2>
                <p className="text-gray-400">성공적인 파트너십의 시작, 율컴퍼니가 함께합니다.</p>
              </div>
              
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                {formStatus === 'success' ? (
                  <div className="py-20 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">신청이 완료되었습니다!</h3>
                    <p className="text-gray-400 mb-8">내용을 확인 후 신속하게 연락드리겠습니다.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="px-6 py-2 border border-white/10 hover:bg-white/5 rounded-lg transition-all"
                    >
                      새로운 문의 작성
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">이름</label>
                        <input 
                          name="name"
                          type="text" 
                          required
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500" 
                          placeholder="홍길동" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">연락처</label>
                        <input 
                          name="phone"
                          type="text" 
                          required
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500" 
                          placeholder="010-0000-0000" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <label className="text-sm text-gray-400">관심 서비스</label>
                      <select 
                        name="interest"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500"
                      >
                        <option>정부지원사업</option>
                        <option>경영 전략</option>
                        <option>R&D 기획</option>
                        <option>기타</option>
                      </select>
                    </div>
                    <div className="space-y-2 mb-8">
                      <label className="text-sm text-gray-400">상담 내용</label>
                      <textarea 
                        name="message"
                        rows={6} 
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500" 
                        placeholder="상담받고 싶으신 내용을 상세히 적어주세요."
                      ></textarea>
                    </div>

                    {formStatus === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl mb-4">
                        <AlertCircle size={18} />
                        <span className="text-sm">오류가 발생했습니다. 나중에 다시 시도해주세요.</span>
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center"
                    >
                      {formStatus === 'loading' ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : '신청하기'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        );
      case 'admin':
        return <AdminDashboard config={config} setConfig={setConfig} posts={posts} setPosts={setPosts} />;
      default:
        return <Hero config={config} setView={setView} />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-purple-500 selection:text-white">
      {view !== 'admin' && <Navbar config={config} setView={setView} activeView={view} />}
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 right-6 z-[60]">
        <button 
          onClick={() => setView('contact')}
          className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-600/50"
        >
          <Mail size={24} />
        </button>
      </div>

      <main>
        {renderContent()}
      </main>

      {view !== 'admin' && <Footer config={config} />}
    </div>
  );
}
