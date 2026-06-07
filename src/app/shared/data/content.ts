export interface Pkg { name: string; tag: string; icon: string; price: string; features: string[]; highlight: boolean; }
export interface Service { title: string; desc: string; icon: string; }
export interface Work { title: string; category: string; behanceUrl: string; thumbnail: string; }

export const SERVICES: Service[] = [
  { title: 'Video Editing', desc: 'Professional editing that tells your story with impact and creativity.', icon: '🎬' },
  { title: 'Motion Graphics', desc: 'Dynamic animations that bring your ideas to life and grab attention.', icon: '✨' },
  { title: 'Brand Promos', desc: 'High-converting promo videos crafted to boost your brand presence.', icon: '📣' },
  { title: 'Social Media Content', desc: 'Reels, shorts and engaging content tailored for social platforms.', icon: '📱' },
  { title: 'Graphic Design', desc: 'Stunning designs for your brand’s digital and print communication.', icon: '🎨' },
  { title: 'YouTube Editing', desc: 'High-quality YouTube editing to grow your channel and audience.', icon: '▶️' },
  { title: 'Product Explainer', desc: 'Clear, compelling product explainers that drive understanding and sales.', icon: '📦' },
  { title: 'Thumbnail Design', desc: 'Eye-catching thumbnails that increase clicks and engagement.', icon: '🖼️' },
];

export const PACKAGES: Pkg[] = [
  { name: 'Social Media Starter', tag: 'Perfect for small businesses & personal brands', icon: '🚀', price: '9,999',
    features: ['8 Reels / Short Videos','Basic Video Editing','Trending Transitions & Music','8 Graphic Posts','Basic Motion Graphics','2 Revisions'], highlight: false },
  { name: 'Growth Package', tag: 'Best for growing brands & clinics', icon: '🎯', price: '14,999',
    features: ['15 Reels / Short Videos','Professional Video Editing','Motion Graphics & Captions','15 Social Media Posts','Brand-Focused Designs','Ad Promo Video (1)','Priority Support','3 Revisions'], highlight: true },
  { name: 'Premium Brand Package', tag: 'For businesses that want strong online presence', icon: '💎', price: '24,999',
    features: ['25 Reels / Short Videos','Cinematic Editing','Advanced Motion Graphics','20+ Creative Posts','Product / Brand Promo Videos','Social Media Strategy Support','Thumbnail & Banner Designs','Unlimited Minor Revisions'], highlight: false },
];

export const EXTRAS = [
  { name: 'Logo Design', price: '2,999' },
  { name: 'Motion Graphics Video', price: '4,999' },
  { name: 'YouTube Video Editing', price: '1,500 /video' },
  { name: 'Podcast Editing', price: '2,000 /video' },
  { name: 'Product Ad Video', price: '5,999' },
  { name: 'Thumbnail Design', price: '399' },
  { name: 'Social Media Poster', price: '499' },
];

// Behance Projects - Card Display
export const WORKS: Work[] = [
  { title: 'Client Portfolio', category: 'Promos', behanceUrl: 'https://www.behance.net/gallery/246816285/Client-Portfolio', thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c1fda2246816285.Y3JvcCw4MDgsNjMyLDAsMA.png' },
  { title: 'Motion Reels', category: 'Reels', behanceUrl: 'https://www.behance.net/gallery/246234115/Motion-Reels', thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/dd6a5b246234115.Y3JvcCw4MDgsNjMyLDAsMA.png' },
  { title: 'Product ADS Video', category: 'Promos', behanceUrl: 'https://www.behance.net/gallery/246233015/Product-ADS-Video', thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5eb3e7246233015.Y3JvcCw4MDgsNjMyLDAsMA.png' },
  { title: 'Thumbnail Design | High CTR', category: 'Design', behanceUrl: 'https://www.behance.net/gallery/246230457/Thumbnail-Design-High-CTR-YouTube', thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9a82d3246230457.Y3JvcCwxMzk5LDEwOTUsMCww.jpg' },
  { title: 'Video Editor Portfolio', category: 'Promos', behanceUrl: 'https://www.behance.net/gallery/234441721/Graphic-Designer-and-Video-Editor-Portfolio', thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8de592234441721.Y3JvcCwxNDAwLDEwOTUsMCw1Mzc.png' },
  { title: 'Thumbnail Designs', category: 'Design', behanceUrl: 'https://www.behance.net/gallery/224195765/Thumbnail', thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/dfe513224195765.Y3JvcCw5MjAsNzIwLDIxOCww.png' },
  { title: 'Creative Reel Videos', category: 'Reels', behanceUrl: 'https://www.behance.net/gallery/224194705/creative-Reel-Video-all-social-media', thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8314f7224194705.Y3JvcCw4MDgsNjMyLDAsMA.png' },
  { title: '2D Animation', category: 'Motion Graphics', behanceUrl: 'https://www.behance.net/gallery/163524005/2-D-Animation', thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3e6d08163524005.Y3JvcCw4MDgsNjMyLDAsMA.jpg' },
  { title: 'Wedding Invitation Videos', category: 'Motion Graphics', behanceUrl: 'https://www.behance.net/gallery/163522737/Wedding-Invitation-Videos', thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/76c7bc163522737.649ab3971923e.png' },
];

export const COMPANY = {
  email: 'info@morphixstudio.com',
  phone: '+91 7719759856',
  website: 'www.morphixstudio.in',
  location: 'Chandigarh, India',
  hours: 'Monday – Saturday, 10:00 AM – 7:00 PM',
};

export const STATS = [
  { n: '150+', l: 'Happy Clients' },
  { n: '500+', l: 'Projects Completed' },
  { n: '7+', l: 'Years Experience' },
  { n: '98%', l: 'Client Satisfaction' },
];

export const BRANDS = ['Park Hospital','The Wictory','Third Degree Podcast','Divine Soolutions','Cakes by Shiddat','Crafted by Priya'];

export const HERO_BADGES = [
  'Creative & Trend-Based Editing','High-Quality Visuals','Fast Delivery','Brand-Focused Content','Professional Support',
];

export const FEATURED_CONTENT = {
  videoEditorPortfolio: 'https://www.behance.net/gallery/234441721/Graphic-Designer-and-Video-Editor-Portfolio',
  clientPortfolio: 'https://www.behance.net/gallery/246816285/Client-Portfolio',
  motionReels: 'https://www.behance.net/gallery/246234115/Motion-Reels'
};
