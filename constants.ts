
import { SiteConfig, Post } from './types';

export const INITIAL_CONFIG: SiteConfig = {
  name: "율컴퍼니",
  heroTitle: "미래를 설계하는 전문가 집단,\n율컴퍼니와 함께 도약하세요.",
  heroSub: "정부지원사업부터 경영 전략 컨설팅까지, 기업의 성장을 위한 최적의 파트너가 되어드립니다.",
  primaryColor: "#7c3aed", // Violet-600
  secondaryColor: "#000000",
  contactEmail: "contact@yulcompany.com",
  contactPhone: "02-1234-5678",
  address: "서울특별시 강남구 테헤란로 율빌딩 15층",
  socialLinks: {
    instagram: "https://instagram.com/yulcompany",
    blog: "https://blog.naver.com/yulcompany",
    linkedin: "https://linkedin.com/company/yulcompany"
  }
};

export const INITIAL_POSTS: Post[] = [
  {
    id: "1",
    title: "2024년 중소기업 혁신바우처 사업 안내",
    excerpt: "중소기업의 경쟁력 강화를 위한 혁신바우처 지원사업의 핵심 내용을 정리해드립니다.",
    content: "정부에서 지원하는 혁신바우처 사업은 제조 소기업을 대상으로 컨설팅, 기술지원, 마케팅 등을 지원하는 사업입니다. 율컴퍼니는 다년간의 노하우로 서류 준비부터 선정까지 모든 과정을 가이드해드립니다...",
    category: "정부지원사업",
    date: "2024-03-20",
    image: "https://picsum.photos/800/400?random=1"
  },
  {
    id: "2",
    title: "성공적인 경영 전략 수립의 5단계",
    excerpt: "변화하는 시장 환경에서 우리 기업이 살아남기 위한 전략적 로드맵 구축법.",
    content: "경영 전략은 단순히 목표를 정하는 것이 아니라, 한정된 자원을 어디에 집중할지 결정하는 프로세스입니다. 시장 분석부터 핵심 역량 도출까지 5단계 프레임워크를 소개합니다.",
    category: "경영컨설팅",
    date: "2024-03-15",
    image: "https://picsum.photos/800/400?random=2"
  },
  {
    id: "3",
    title: "R&D 기획 및 국책과제 선정 노하우",
    excerpt: "기술력은 있지만 자금이 부족한 스타트업을 위한 국책과제 합격 전략.",
    content: "연구개발 과제 선정의 핵심은 '차별성'과 '사업화 가능성'입니다. 기술성 평가에서 높은 점수를 받기 위한 사업계획서 작성 팁을 공개합니다.",
    category: "기술컨설팅",
    date: "2024-03-10",
    image: "https://picsum.photos/800/400?random=3"
  }
];
