// Internationalization (i18n)
(function() {
  'use strict';

  // Translation dictionary
  const translations = {
    ko: {
      // Page title
      'page.title': 'LabMesh 치과기공소',

      // Navigation
      'nav.brand': 'LabMesh Laboratory',
      'nav.home': '홈',
      'nav.about': '소개',
      'nav.products': '제품',
      'nav.gallery': '갤러리',
      'nav.faq': 'FAQ',
      'nav.contact': '연락처',

      // Home page
      'home.hero.title': 'LabMesh 치과<br><em>기공소</em>',
      'home.hero.desc': '최고 품질의 치과 보철물 제작으로 환자의 미소를 되찾아드립니다',
      'home.hero.cta1': '제품 보기',
      'home.hero.cta2': '문의하기',

      'home.features.title': '우리의 강점',
      'home.features.subtitle': '최고의 기술과 품질로 완벽한 보철물을 제작합니다',

      'home.feature1.title': '최신 기술',
      'home.feature1.desc': 'CAD/CAM 시스템과 3D 프린터를 활용한 정밀 제작',

      'home.feature2.title': '엄격한 품질관리',
      'home.feature2.desc': '모든 제품은 철저한 품질 검사를 거쳐 출고됩니다',

      'home.feature3.title': '빠른 납품',
      'home.feature3.desc': '긴급한 케이스도 신속하게 처리해드립니다',

      // About page
      'about.title': '회사 소개',
      'about.subtitle': '최고의 기술력과 품질로 고객의 신뢰를 얻는 치과기공소',

      'about.intro.title': 'LabMesh 치과기공소',
      'about.intro.desc': '저희 LabMesh 치과기공소는 2010년 설립 이래 최신 CAD/CAM 시스템과 디지털 장비를 활용하여 최고 품질의 치과 보철물을 제작해왔습니다. 환자의 만족과 치과의사의 신뢰를 최우선으로 하며, 지속적인 기술 개발과 품질 향상에 힘쓰고 있습니다.',

      'about.vision.title': '비전',
      'about.vision.desc': '디지털 기술과 장인정신의 완벽한 조화를 통해 치과 보철 분야의 선두주자가 되겠습니다.',

      'about.mission.title': '미션',
      'about.mission.desc': '최고 품질의 제품과 신속한 서비스로 고객의 성공을 지원합니다.',

      'about.values.title': '핵심 가치',

      'about.value1.title': '품질',
      'about.value1.desc': '타협하지 않는 품질 관리',

      'about.value2.title': '혁신',
      'about.value2.desc': '최신 기술 도입과 연구개발',

      'about.value3.title': '신뢰',
      'about.value3.desc': '고객과의 약속 준수',

      // Products page
      'products.title': '제품 소개',
      'products.subtitle': '다양한 치과 보철물을 최고 품질로 제작합니다',

      'prod.zirconia.tag': '지르코니아',
      'prod.zirconia.title': '지르코니아 크라운',
      'prod.zirconia.desc': '자연치아와 유사한 심미성과 뛰어난 강도를 자랑하는 지르코니아 크라운',

      'prod.ibs.tag': '임플란트',
      'prod.ibs.title': 'IBS 크라운',
      'prod.ibs.desc': '임플란트 식립을 위한 정밀한 IBS 크라운',

      'prod.bridge.tag': '브릿지',
      'prod.bridge.title': '지르코니아 브릿지',
      'prod.bridge.desc': '여러 개의 치아를 연결하는 강력하고 심미적인 브릿지',

      'prod.inlay.tag': '인레이',
      'prod.inlay.title': '세라믹 인레이',
      'prod.inlay.desc': '부분 결손 부위를 정밀하게 수복하는 세라믹 인레이',

      'prod.denture.tag': '틀니',
      'prod.denture.title': '완전 틀니',
      'prod.denture.desc': '환자 맞춤형 완전 틀니 제작',

      'prod.partial.tag': '부분틀니',
      'prod.partial.title': '부분 틀니',
      'prod.partial.desc': '일부 치아 결손 시 사용하는 부분 틀니',

      // Gallery page
      'gallery.title': '작업 갤러리',
      'gallery.subtitle': '저희가 제작한 다양한 보철물을 확인해보세요',

      // FAQ page
      'faq.title': '자주 묻는 질문',
      'faq.subtitle': '고객님들이 자주 문의하시는 내용을 모았습니다',

      'faq.q1': '제작 기간은 얼마나 걸리나요?',
      'faq.a1': '일반적으로 3-5일 정도 소요됩니다. 긴급한 경우 당일 제작도 가능하니 문의해주세요.',

      'faq.q2': '어떤 재료를 사용하나요?',
      'faq.a2': '지르코니아, 세라믹, 금속 등 다양한 재료를 사용하며, 모두 국제 인증을 받은 고품질 재료입니다.',

      'faq.q3': '품질 보증은 어떻게 되나요?',
      'faq.a3': '모든 제품은 엄격한 품질 검사를 거치며, 문제 발생 시 즉시 재제작해드립니다.',

      'faq.q4': 'CAD/CAM 시스템을 사용하나요?',
      'faq.a4': '네, 최신 CAD/CAM 시스템과 3D 프린터를 활용하여 정밀하고 신속한 제작이 가능합니다.',

      'faq.q5': '방문 상담이 가능한가요?',
      'faq.a5': '사전 예약 후 방문하시면 상담 및 시설 견학이 가능합니다. 연락처로 문의해주세요.',

      // Contact page
      'contact.title': '연락처',
      'contact.subtitle': '궁금하신 사항이나 문의사항을 남겨주세요',

      'contact.info.title': '연락 정보',

      'contact.address.title': '주소',
      'contact.address.text': '서울시 강남구 테헤란로 123',

      'contact.phone.title': '전화',
      'contact.phone.text': '02-1234-5678',

      'contact.email.title': '이메일',
      'contact.email.text': 'info@labmesh.com',

      'contact.hours.title': '영업시간',
      'contact.hours.text': '평일: 09:00 - 18:00<br>주말: 휴무',

      'contact.form.title': '문의하기',
      'contact.form.name': '이름',
      'contact.form.email': '이메일',
      'contact.form.phone': '전화번호',
      'contact.form.message': '문의 내용',
      'contact.form.submit': '전송',
      'contact.form.success': '문의가 성공적으로 전송되었습니다!',

      // Footer
      'footer.company': '회사 정보',
      'footer.name': 'LabMesh 치과기공소',
      'footer.address': '서울시 강남구 테헤란로 123',
      'footer.quicklinks': '바로가기',
      'footer.hours': '영업시간',
      'footer.weekday': '평일: 09:00 - 18:00',
      'footer.weekend': '주말: 휴무',
      'footer.rights': '모든 권리 보유.'
    },

    en: {
      // Page title
      'page.title': 'LabMesh Dental Laboratory',

      // Navigation
      'nav.brand': 'LabMesh Laboratory',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.products': 'Products',
      'nav.gallery': 'Gallery',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',

      // Home page
      'home.hero.title': 'LabMesh Dental<br><em>Laboratory</em>',
      'home.hero.desc': 'Restoring smiles with the highest quality dental prosthetics',
      'home.hero.cta1': 'View Products',
      'home.hero.cta2': 'Contact Us',

      'home.features.title': 'Our Strengths',
      'home.features.subtitle': 'Creating perfect prosthetics with the best technology and quality',

      'home.feature1.title': 'Latest Technology',
      'home.feature1.desc': 'Precision manufacturing using CAD/CAM systems and 3D printers',

      'home.feature2.title': 'Strict Quality Control',
      'home.feature2.desc': 'All products undergo thorough quality inspection before delivery',

      'home.feature3.title': 'Fast Delivery',
      'home.feature3.desc': 'We handle urgent cases promptly',

      // About page
      'about.title': 'About Us',
      'about.subtitle': 'A dental laboratory earning customer trust with superior technology and quality',

      'about.intro.title': 'LabMesh Dental Laboratory',
      'about.intro.desc': 'Since our establishment in 2010, LabMesh Dental Laboratory has been creating the highest quality dental prosthetics using the latest CAD/CAM systems and digital equipment. We prioritize patient satisfaction and dentist trust, and are committed to continuous technological development and quality improvement.',

      'about.vision.title': 'Vision',
      'about.vision.desc': 'To become a leader in dental prosthetics through the perfect harmony of digital technology and craftsmanship.',

      'about.mission.title': 'Mission',
      'about.mission.desc': 'Supporting customer success with the highest quality products and prompt service.',

      'about.values.title': 'Core Values',

      'about.value1.title': 'Quality',
      'about.value1.desc': 'Uncompromising quality control',

      'about.value2.title': 'Innovation',
      'about.value2.desc': 'Adopting latest technology and R&D',

      'about.value3.title': 'Trust',
      'about.value3.desc': 'Keeping promises to customers',

      // Products page
      'products.title': 'Products',
      'products.subtitle': 'We manufacture various dental prosthetics with the highest quality',

      'prod.zirconia.tag': 'Zirconia',
      'prod.zirconia.title': 'Zirconia Crown',
      'prod.zirconia.desc': 'Zirconia crowns with natural tooth-like aesthetics and excellent strength',

      'prod.ibs.tag': 'Implant',
      'prod.ibs.title': 'IBS Crown',
      'prod.ibs.desc': 'Precision IBS crowns for implant placement',

      'prod.bridge.tag': 'Bridge',
      'prod.bridge.title': 'Zirconia Bridge',
      'prod.bridge.desc': 'Strong and aesthetic bridges connecting multiple teeth',

      'prod.inlay.tag': 'Inlay',
      'prod.inlay.title': 'Ceramic Inlay',
      'prod.inlay.desc': 'Ceramic inlays for precision restoration of partial defects',

      'prod.denture.tag': 'Denture',
      'prod.denture.title': 'Complete Denture',
      'prod.denture.desc': 'Custom-made complete dentures',

      'prod.partial.tag': 'Partial Denture',
      'prod.partial.title': 'Partial Denture',
      'prod.partial.desc': 'Partial dentures for missing some teeth',

      // Gallery page
      'gallery.title': 'Work Gallery',
      'gallery.subtitle': 'Explore the various prosthetics we have created',

      // FAQ page
      'faq.title': 'Frequently Asked Questions',
      'faq.subtitle': 'Common questions from our customers',

      'faq.q1': 'How long does production take?',
      'faq.a1': 'Typically 3-5 days. Same-day production is available for urgent cases. Please contact us.',

      'faq.q2': 'What materials do you use?',
      'faq.a2': 'We use various materials including zirconia, ceramic, and metal, all internationally certified high-quality materials.',

      'faq.q3': 'What is your quality guarantee?',
      'faq.a3': 'All products undergo strict quality inspection, and we will immediately remake if any issues occur.',

      'faq.q4': 'Do you use CAD/CAM systems?',
      'faq.a4': 'Yes, we use the latest CAD/CAM systems and 3D printers for precise and rapid production.',

      'faq.q5': 'Can I visit for consultation?',
      'faq.a5': 'Yes, you can visit for consultation and facility tour by appointment. Please contact us.',

      // Contact page
      'contact.title': 'Contact',
      'contact.subtitle': 'Leave us your questions or inquiries',

      'contact.info.title': 'Contact Information',

      'contact.address.title': 'Address',
      'contact.address.text': '123 Teheran-ro, Gangnam-gu, Seoul',

      'contact.phone.title': 'Phone',
      'contact.phone.text': '02-1234-5678',

      'contact.email.title': 'Email',
      'contact.email.text': 'info@labmesh.com',

      'contact.hours.title': 'Business Hours',
      'contact.hours.text': 'Weekdays: 09:00 - 18:00<br>Weekends: Closed',

      'contact.form.title': 'Send Inquiry',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.phone': 'Phone',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Submit',
      'contact.form.success': 'Your inquiry has been sent successfully!',

      // Footer
      'footer.company': 'Company Information',
      'footer.name': 'LabMesh Dental Laboratory',
      'footer.address': '123 Teheran-ro, Gangnam-gu, Seoul',
      'footer.quicklinks': 'Quick Links',
      'footer.hours': 'Business Hours',
      'footer.weekday': 'Weekdays: 09:00 - 18:00',
      'footer.weekend': 'Weekends: Closed',
      'footer.rights': 'All rights reserved.'
    }
  };

  // Current language
  let currentLang = localStorage.getItem('lang') || 'ko';

  // Apply translations
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[currentLang] && translations[currentLang][key]) {
        element.textContent = translations[currentLang][key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      if (translations[currentLang] && translations[currentLang][key]) {
        element.innerHTML = translations[currentLang][key];
      }
    });

    // Update page title
    const titleKey = document.querySelector('title')?.getAttribute('data-i18n');
    if (titleKey && translations[currentLang][titleKey]) {
      document.title = translations[currentLang][titleKey];
    }

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('lang-btn');
    const langMenu = document.getElementById('lang-menu');
    const langCurrent = document.getElementById('lang-current');

    if (!langBtn || !langMenu) return;

    // Update current language display
    langCurrent.textContent = currentLang.toUpperCase();

    // Apply translations
    applyTranslations();

    // Toggle language menu
    langBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      langMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function() {
      langMenu.classList.remove('active');
    });

    // Language selection
    langMenu.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation();
        const lang = this.getAttribute('data-lang');
        if (lang && lang !== currentLang) {
          currentLang = lang;
          localStorage.setItem('lang', lang);
          langCurrent.textContent = lang.toUpperCase();
          applyTranslations();
        }
        langMenu.classList.remove('active');
      });
    });
  });

  // Export for use in other scripts
  window.i18n = {
    get: function(key) {
      return translations[currentLang]?.[key] || key;
    },
    getCurrentLang: function() {
      return currentLang;
    },
    applyTranslations: applyTranslations
  };
})();
