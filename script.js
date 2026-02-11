// Language data
const translations = {
	en: {
		nav: {
			features: 'Features',
			about: 'About',
			download: 'Download'
		},
		hero: {
			subtitle: 'Visualize your cycling, running, and fitness activities with beautiful statistics and AI coaching',
			download: 'Download on the App Store'
		},
		about: {
			title: 'About',
			content1: 'Cranq is an activity management app for iOS that beautifully visualizes your cycling, running, walking, and yoga activities. All data is managed through HealthKit, allowing seamless integration with other fitness apps.',
			content2: 'Track your workouts with GPS route mapping, elevation charts, and real-time weather information. Stay motivated with streak tracking and detailed statistics that help you understand your fitness journey.',
			content3: 'With the AI Coach feature, get personalized training advice powered by advanced AI. Your fitness data stays on your device — privacy-first, always.'
		},
		features: {
			title: 'Features',
			healthkit: {
				title: 'HealthKit Sync',
				desc: 'Seamlessly integrates with Apple HealthKit. All your workout data syncs automatically, and works alongside your favorite fitness apps.'
			},
			gps: {
				title: 'GPS Route Tracking',
				desc: 'View your workout routes on beautiful maps with elevation charts. Relive every ride, run, and walk with detailed route visualization.'
			},
			stats: {
				title: 'Activity Statistics',
				desc: 'Comprehensive charts and analytics for your workouts. Track calories, distance, duration, and more with beautiful visualizations.'
			},
			streak: {
				title: 'Streak Tracking',
				desc: 'Stay motivated with streak features that celebrate your consistency. Build healthy habits and track your progress over time.'
			},
			widget: {
				title: 'Home Screen Widgets',
				desc: 'Keep your fitness stats at a glance with beautiful home screen widgets. See your daily progress without opening the app.'
			},
			ai: {
				title: 'AI Coach',
				desc: 'Get personalized coaching advice powered by AI. Analyze your activities and receive tailored recommendations to improve your performance.'
			}
		},
		download: {
			title: 'Start Free Today',
			subtitle: 'Let Cranq support your fitness journey.'
		},
		footer: {
			support: {
				title: 'Support',
				page: 'Support Page',
				bug: 'Report Bug',
				feature: 'Feature Request'
			},
			legal: {
				title: 'Legal',
				terms: 'Terms of Service',
				privacy: 'Privacy Policy'
			}
		}
	},
	ja: {
		nav: {
			features: '機能',
			about: 'アプリについて',
			download: 'ダウンロード'
		},
		hero: {
			subtitle: 'サイクリング・ランニング・フィットネスの記録を美しい統計とAIコーチングで視覚化',
			download: 'App Storeからダウンロード'
		},
		about: {
			title: 'アプリについて',
			content1: 'Cranqは、サイクリング、ランニング、ウォーキング、ヨガなどのアクティビティを美しく視覚化するiOS向けアクティビティ管理アプリです。すべてのデータはHealthKitで管理されるため、他のフィットネスアプリと連携して使うことができます。',
			content2: 'GPSルートの地図表示、標高チャート、天気情報でワークアウトを詳細に記録。ストリーク機能と詳細な統計情報で、フィットネスの道のりを理解し、モチベーションを維持できます。',
			content3: 'AIコーチ機能では、高度なAIによるパーソナライズされたトレーニングアドバイスを受けることができます。フィットネスデータはデバイス上に保存され、プライバシーが常に守られます。'
		},
		features: {
			title: '主な機能',
			healthkit: {
				title: 'HealthKit連携',
				desc: 'Apple HealthKitとシームレスに連携。ワークアウトデータが自動同期され、お気に入りのフィットネスアプリと一緒に使えます。'
			},
			gps: {
				title: 'GPSルート記録',
				desc: '美しい地図上にワークアウトルートを表示、標高チャートも確認可能。すべてのライド、ラン、ウォーキングを詳細に振り返れます。'
			},
			stats: {
				title: 'アクティビティ統計',
				desc: 'ワークアウトの包括的なチャートと分析機能。カロリー、距離、時間などを美しいビジュアルで確認できます。'
			},
			streak: {
				title: 'ストリーク機能',
				desc: '継続を称えるストリーク機能でモチベーションを維持。健康的な習慣を築き、時間の経過とともに成長を実感できます。'
			},
			widget: {
				title: 'ホームスクリーンウィジェット',
				desc: '美しいホームスクリーンウィジェットでフィットネス統計を一目で確認。アプリを開かずに毎日の進捗をチェック。'
			},
			ai: {
				title: 'AIコーチ',
				desc: 'AIによるパーソナライズされたコーチングアドバイス。アクティビティを分析し、パフォーマンス向上のためのアドバイスを提供します。'
			}
		},
		download: {
			title: '今すぐ無料ではじめよう',
			subtitle: 'あなたのフィットネスライフを、Cranqがサポートします。'
		},
		footer: {
			support: {
				title: 'サポート',
				page: 'サポートページ',
				bug: 'バグ報告',
				feature: '機能リクエスト'
			},
			legal: {
				title: '法的情報',
				terms: '利用規約',
				privacy: 'プライバシーポリシー'
			}
		}
	}
};

// Current language (default English)
let currentLang = 'en';

// Detect browser language
const browserLang = navigator.language.split('-')[0];
if (translations[browserLang]) {
	currentLang = browserLang;
}

// Update meta tags based on language
function updateMetaTags() {
	document.documentElement.lang = currentLang;

	const metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		if (currentLang === 'ja') {
			metaDescription.setAttribute('content', 'Cranq - サイクリング・ランニング・フィットネスの記録を美しい統計とAIコーチングで視覚化するiOSアプリ');
		} else {
			metaDescription.setAttribute('content', 'Cranq - Visualize your cycling, running, and fitness activities with beautiful statistics and AI coaching');
		}
	}

	const metaOgTitle = document.querySelector('meta[property="og:title"]');
	if (metaOgTitle) {
		if (currentLang === 'ja') {
			metaOgTitle.setAttribute('content', 'Cranq - アクティビティ管理アプリ');
		} else {
			metaOgTitle.setAttribute('content', 'Cranq - Activity Tracking App');
		}
	}

	const metaOgDescription = document.querySelector('meta[property="og:description"]');
	if (metaOgDescription) {
		if (currentLang === 'ja') {
			metaOgDescription.setAttribute('content', 'サイクリング・ランニング・フィットネスの記録を美しい統計とAIコーチングで視覚化');
		} else {
			metaOgDescription.setAttribute('content', 'Visualize your cycling, running, and fitness activities with beautiful statistics and AI coaching');
		}
	}
}

// Update screenshot sources based on language
function updateScreenshots() {
	const screenshotFiles = [
		'01_history.png',
		'02_statistics_initial.png',
		'06_weather.png',
		'10_share_preview.png'
	];
	const lang = currentLang === 'ja' ? 'ja' : 'en';

	// Use Japanese screenshots as fallback when English screenshots are not available
	const basePath = 'images/screenshots/ja/iPhone_6-9';

	// Update hero carousel screenshots
	const carouselImages = document.querySelectorAll('.screenshot-carousel .screenshot-item img');
	carouselImages.forEach((img, index) => {
		if (screenshotFiles[index]) {
			img.src = `${basePath}/${screenshotFiles[index]}`;
		}
	});

	// Update about section image
	const aboutImg = document.querySelector('.about-image img');
	if (aboutImg) {
		aboutImg.src = `${basePath}/01_history.png`;
	}

	// Update all elements with data-lang attributes
	document.querySelectorAll('[data-lang-ja]').forEach(el => {
		if (el.tagName === 'TITLE' || el.getAttribute('property') || el.getAttribute('name')) return;
		const text = el.getAttribute(`data-lang-${lang}`);
		if (text) el.textContent = text;
	});
}

// Update all DOM text content based on current language
function updateTexts() {
	const t = translations[currentLang];

	// Navigation
	const navFeatures = document.querySelector('a[href="#features"]');
	const navAbout = document.querySelector('a[href="#about"]');
	const navDownload = document.querySelector('a[href="#download"]');
	if (navFeatures) navFeatures.textContent = t.nav.features;
	if (navAbout) navAbout.textContent = t.nav.about;
	if (navDownload) navDownload.textContent = t.nav.download;

	// Hero section
	const heroSubtitle = document.querySelector('.hero p');
	if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;

	const ctaButton = document.querySelector('.cta-button');
	if (ctaButton) ctaButton.textContent = t.hero.download;

	// About section
	const aboutTitle = document.querySelector('#about .section-title');
	if (aboutTitle) aboutTitle.innerHTML = `<i class="fas fa-info-circle"></i> ${t.about.title}`;

	const aboutContent = document.querySelector('.about-content');
	if (aboutContent) {
		aboutContent.innerHTML = `
			<p>${t.about.content1}</p>
			<p>${t.about.content2}</p>
			<p>${t.about.content3}</p>
		`;
	}

	// Features section
	const featuresTitle = document.querySelector('#features .section-title');
	if (featuresTitle) featuresTitle.innerHTML = `<i class="fas fa-star"></i> ${t.features.title}`;

	const featureCards = document.querySelectorAll('#features .feature-card');
	const features = [
		t.features.healthkit,
		t.features.gps,
		t.features.stats,
		t.features.streak,
		t.features.widget,
		t.features.ai
	];
	featureCards.forEach((card, index) => {
		if (features[index]) {
			const h3 = card.querySelector('h3');
			const p = card.querySelector('p');
			if (h3) h3.textContent = features[index].title;
			if (p) p.textContent = features[index].desc;
		}
	});

	// Download section
	const downloadTitle = document.querySelector('#download .section-title');
	if (downloadTitle) downloadTitle.innerHTML = `<i class="fas fa-download"></i> ${t.download.title}`;
	const downloadSubtitle = document.querySelector('.download-subtitle');
	if (downloadSubtitle) downloadSubtitle.textContent = t.download.subtitle;
	const downloadButton = document.querySelector('.cta-button-bottom');
	if (downloadButton) downloadButton.textContent = t.hero.download;

	// Footer
	const footerSections = document.querySelectorAll('.footer-section');
	if (footerSections.length >= 2) {
		// Support
		const supportH3 = footerSections[0].querySelector('h3');
		if (supportH3) supportH3.textContent = t.footer.support.title;
		const supportLinks = footerSections[0].querySelectorAll('a');
		if (supportLinks[0]) supportLinks[0].innerHTML = `<i class="fas fa-life-ring"></i>${t.footer.support.page}`;
		if (supportLinks[1]) supportLinks[1].innerHTML = `<i class="fas fa-bug"></i>${t.footer.support.bug}`;
		if (supportLinks[2]) supportLinks[2].innerHTML = `<i class="fas fa-lightbulb"></i>${t.footer.support.feature}`;

		// Legal
		const legalH3 = footerSections[1].querySelector('h3');
		if (legalH3) legalH3.textContent = t.footer.legal.title;
		const legalLinks = footerSections[1].querySelectorAll('a');
		if (legalLinks[0]) legalLinks[0].innerHTML = `<i class="fas fa-file-contract"></i>${t.footer.legal.terms}`;
		if (legalLinks[1]) legalLinks[1].innerHTML = `<i class="fas fa-shield-alt"></i>${t.footer.legal.privacy}`;

	}

	// Update meta tags
	updateMetaTags();

	// Update screenshots
	updateScreenshots();
}

// ============================================================
// Particle animation system for hero background
// ============================================================
function startParticleAnimation(containerId) {
	const container = document.getElementById(containerId);
	if (!container) return;

	const maxParticles = 30;
	const interval = 600;
	const colors = [
		'rgba(0, 212, 170, 0.6)',   // cyan #00D4AA
		'rgba(74, 144, 217, 0.6)',  // blue #4A90D9
		'rgba(255, 107, 53, 0.6)',  // orange #FF6B35
		'rgba(0, 191, 255, 0.6)'    // sky blue #00BFFF
	];

	// Create initial particles spread across the viewport
	for (let i = 0; i < 12; i++) {
		createParticle(container, colors, true);
	}

	let lastTime = 0;

	function animate(currentTime) {
		if (!lastTime) lastTime = currentTime;
		const deltaTime = currentTime - lastTime;

		if (deltaTime > interval && container.children.length < maxParticles) {
			createParticle(container, colors, false);
			lastTime = currentTime;
		}

		requestAnimationFrame(animate);
	}

	requestAnimationFrame(animate);
}

function createParticle(container, colors, isInitial) {
	const particle = document.createElement('div');
	particle.className = 'energy-particle';

	const color = colors[Math.floor(Math.random() * colors.length)];
	particle.style.setProperty('--particle-color', color);

	// Size: 3-8px
	const size = 3 + Math.random() * 5;
	particle.style.width = `${size}px`;
	particle.style.height = `${size}px`;

	// Horizontal position
	const startX = Math.random() * 100;
	particle.style.left = `${startX}%`;

	// Horizontal drift
	const drift = (Math.random() - 0.5) * 80;
	particle.style.setProperty('--drift', `${drift}px`);

	if (isInitial) {
		// Initial particles start at random vertical positions
		const startY = Math.random() * 100;
		particle.style.bottom = `${startY}%`;
		// Shorter duration since they start partway through
		const remainingRatio = 1 - (startY / 100);
		particle.style.animationDuration = `${(6 + Math.random() * 6) * remainingRatio}s`;
	} else {
		// New particles start from the bottom
		particle.style.bottom = '-10px';
		particle.style.animationDuration = `${6 + Math.random() * 6}s`;
	}

	container.appendChild(particle);

	particle.addEventListener('animationend', () => {
		particle.remove();
	}, { passive: true });

	return particle;
}

// ============================================================
// Screenshot carousel
// ============================================================
function initScreenshotCarousel() {
	const carousel = document.querySelector('.screenshot-carousel');
	const items = document.querySelectorAll('.screenshot-carousel .screenshot-item');
	const dotsContainer = document.querySelector('.screenshot-carousel .screenshot-dots');

	if (!carousel || items.length === 0 || !dotsContainer) return;

	let currentIndex = 0;
	let autoSlideTimer = null;

	// Show first slide
	items[0].classList.add('active');

	// Generate dots
	items.forEach((_, index) => {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (index === 0) dot.classList.add('active');
		dot.addEventListener('click', () => {
			goToSlide(index);
			resetAutoSlide();
		});
		dotsContainer.appendChild(dot);
	});

	const dots = dotsContainer.querySelectorAll('.dot');

	function updateDots() {
		dots.forEach((dot, index) => {
			dot.classList.toggle('active', index === currentIndex);
		});
	}

	function goToSlide(index) {
		items[currentIndex].classList.remove('active');
		currentIndex = index;
		items[currentIndex].classList.add('active');
		updateDots();
	}

	// Previous / Next buttons
	const prevButton = document.querySelector('.screenshot-carousel .prev-button');
	const nextButton = document.querySelector('.screenshot-carousel .next-button');

	if (prevButton) {
		prevButton.addEventListener('click', () => {
			goToSlide((currentIndex - 1 + items.length) % items.length);
			resetAutoSlide();
		});
	}

	if (nextButton) {
		nextButton.addEventListener('click', () => {
			goToSlide((currentIndex + 1) % items.length);
			resetAutoSlide();
		});
	}

	// Auto-scroll every 5 seconds
	function startAutoSlide() {
		autoSlideTimer = setInterval(() => {
			goToSlide((currentIndex + 1) % items.length);
		}, 5000);
	}

	function resetAutoSlide() {
		if (autoSlideTimer) clearInterval(autoSlideTimer);
		startAutoSlide();
	}

	startAutoSlide();
}

// ============================================================
// Intersection Observer for scroll-triggered animations
// ============================================================
function initScrollAnimations() {
	const sections = document.querySelectorAll('.section');
	const aboutContent = document.querySelector('.about-content');
	const aboutImage = document.querySelector('.about-image');

	const observerOptions = {
		threshold: 0.1
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, observerOptions);

	sections.forEach(section => observer.observe(section));
	if (aboutContent) observer.observe(aboutContent);
	if (aboutImage) observer.observe(aboutImage);

	// Also observe feature cards for staggered animation
	const featureCards = document.querySelectorAll('.feature-card');
	featureCards.forEach((card, index) => {
		card.style.transitionDelay = `${index * 0.1}s`;
		observer.observe(card);
	});
}

// ============================================================
// Smooth scrolling for anchor links
// ============================================================
function initSmoothScrolling() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href');
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				const headerOffset = 80;
				const elementPosition = targetElement.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});
			}
		});
	});
}

// ============================================================
// Initialize everything on DOMContentLoaded
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
	// Apply translations
	updateTexts();

	// Start particle animation
	startParticleAnimation('heroParticles');

	// Initialize screenshot carousel
	initScreenshotCarousel();

	// Initialize scroll animations
	initScrollAnimations();

	// Initialize smooth scrolling
	initSmoothScrolling();
});
