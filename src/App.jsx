import { useState, useEffect } from 'react';

// High-fidelity custom outline vector icons for stickers
const StickerIcon = ({ id, className = "w-12 h-12" }) => {
  switch (id) {
    case 'cherries':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M50,25 C50,45 32,58 32,68" strokeLinecap="round" />
          <path d="M50,25 C50,45 68,58 68,68" strokeLinecap="round" />
          <path d="M38,25 C45,25 50,25 50,25" strokeLinecap="round" />
          <path d="M50,25 C53,12 62,18 50,25" fill="currentColor" opacity="0.3" />
          <circle cx="32" cy="72" r="10" fill="currentColor" fillOpacity="0.2" />
          <circle cx="68" cy="72" r="10" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case 'bow':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M50,50 C32,32 22,46 50,50 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M50,50 C68,32 78,46 50,50 Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
          <path d="M48,52 C38,68 32,82 28,88" strokeLinecap="round" />
          <path d="M52,52 C62,68 68,82 72,88" strokeLinecap="round" />
        </svg>
      );
    case 'discoball':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
          <circle cx="50" cy="50" r="32" fill="currentColor" fillOpacity="0.2" />
          <path d="M18,50 Q50,62 82,50" />
          <path d="M18,50 Q50,38 82,50" />
          <path d="M50,18 Q62,50 50,82" />
          <path d="M50,18 Q38,50 50,82" />
          <path d="M76,24 L80,28 M80,24 L76,28" strokeWidth="2" />
          <path d="M20,76 L24,80 M24,76 L20,80" strokeWidth="2" />
        </svg>
      );
    case 'wings':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M50,42 C50,28 32,22 32,42 C32,60 50,75 50,75 C50,75 68,60 68,42 C68,22 50,28 50,42 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M32,42 C12,38 8,48 18,58 C8,60 12,68 26,62" />
          <path d="M68,42 C88,38 92,48 82,58 C92,60 88,68 74,62" />
        </svg>
      );
    case 'cupid':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
          <circle cx="50" cy="28" r="8" />
          <path d="M42,30 C25,20 28,42 42,38" />
          <path d="M58,30 C75,20 72,42 58,38" />
          <path d="M46,38 L42,70 L58,70 L54,38 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M28,52 C28,44 36,44 36,52" />
          <line x1="32" y1="48" x2="46" y2="48" />
        </svg>
      );
    case 'swans':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M38,62 C38,45 46,36 49,45 C51,48 46,62 38,62 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M62,62 C62,45 54,36 51,45 C49,48 54,62 62,62 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M22,62 C22,58 32,54 38,62" />
          <path d="M78,62 C78,58 68,54 62,62" />
        </svg>
      );
    case 'match':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
          <rect x="22" y="32" width="46" height="32" rx="3" fill="currentColor" fillOpacity="0.2" />
          <rect x="36" y="36" width="38" height="32" rx="3" />
          <line x1="72" y1="50" x2="82" y2="50" strokeWidth="4" />
          <circle cx="82" cy="50" r="2.5" fill="currentColor" />
          <text x="26" y="52" fontSize="7" fontWeight="black" fill="currentColor" stroke="none" fontFamily="sans-serif">MATCH</text>
        </svg>
      );
    case 'wine':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M44,22 L56,22 L56,35 L64,45 L64,80 L36,80 L36,45 L44,35 Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="50" cy="38" r="3" fill="currentColor" />
          <path d="M46,38 C40,32 40,44 46,38" />
          <path d="M54,38 C60,32 60,44 54,38" />
        </svg>
      );
    case 'cocktail':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M28,28 L72,28 L50,52 Z" fill="currentColor" fillOpacity="0.2" />
          <line x1="50" y1="52" x2="50" y2="76" />
          <line x1="38" y1="76" x2="62" y2="76" />
          <circle cx="50" cy="35" r="4" fill="currentColor" />
        </svg>
      );
    case 'xoxo':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
          <path d="M22,32 L38,68 M38,32 L22,68" />
          <circle cx="52" cy="50" r="14" fill="currentColor" fillOpacity="0.2" />
          <path d="M68,32 L84,68 M84,32 L68,68" />
        </svg>
      );
    default:
      return null;
  }
};

const FIGMA_STICKERS = [
  { id: 'match', label: 'Matchbox' },
  { id: 'bow', label: 'Ribbon Bow' },
  { id: 'discoball', label: 'Disco Ball' },
  { id: 'wings', label: 'Wings Heart' },
  { id: 'cupid', label: 'Cupid Angel' },
  { id: 'swans', label: 'Swans Heart' },
  { id: 'cherries', label: 'Cherries' },
  { id: 'wine', label: 'Wine Bottle' },
  { id: 'cocktail', label: 'Cocktail' },
  { id: 'xoxo', label: 'XOXO' },
];

const LETTER_COLORS = [
  { name: 'Orange-50', hex: '#FFFCEB', bgClass: 'bg-[#FFFCEB]', textClass: 'text-zinc-900' },
  { name: 'Pink-200', hex: '#FBCFE8', bgClass: 'bg-[#FBCFE8]', textClass: 'text-pink-900' },
  { name: 'Purple-200', hex: '#E9D5FF', bgClass: 'bg-[#E9D5FF]', textClass: 'text-purple-900' },
  { name: 'Green-100', hex: '#D1FAE5', bgClass: 'bg-[#D1FAE5]', textClass: 'text-green-900' },
  { name: 'Orange-100', hex: '#FFEDD5', bgClass: 'bg-[#FFEDD5]', textClass: 'text-orange-950' },
  { name: 'Peach-100', hex: '#FEE2E2', bgClass: 'bg-[#FEE2E2]', textClass: 'text-red-950' },
];

const ENVELOPE_COLORS = [
  { name: 'Pink', hex: '#FBCFE8', bgClass: 'bg-[#FBCFE8]' },
  { name: 'Cream', hex: '#FFFCEB', bgClass: 'bg-[#FFFCEB]' },
  { name: 'Red', hex: '#EF4444', bgClass: 'bg-[#EF4444]' },
  { name: 'Lavender', hex: '#D8B4FE', bgClass: 'bg-[#D8B4FE]' },
];

const FONTS = [
  { id: 'caveat', name: 'Playful Script', class: 'font-caveat' },
  { id: 'newsreader', name: 'Elegant Serif', class: 'font-newsreader' },
  { id: 'boogaloo', name: 'Modern Sans', class: 'font-boogaloo' },
];

const WAX_SEALS = [
  { id: 'heart', emoji: '♡', label: 'Heart' },
  { id: 'star', emoji: '★', label: 'Star' },
  { id: 'monogram', emoji: 'L', label: 'Monogram' },
  { id: 'floral', emoji: '✿', label: 'Floral' },
];

const INK_COLORS = [
  { name: 'Charcoal', hex: '#18181B' },
  { name: 'Burgundy', hex: '#7F1D1D' },
  { name: 'Rose', hex: '#EC4899' },
  { name: 'Pink Light', hex: '#FBCFE8' },
  { name: 'Cream', hex: '#FFFCEB' },
  { name: 'Gold', hex: '#D97706' },
  { name: 'Purple Light', hex: '#C084FC' },
  { name: 'Green Forest', hex: '#166534' },
];

const TRANSLATIONS = {
  EN: {
    landingTitle: "Dear You",
    landingSlogan: "Digital letters with a physical soul.",
    startBtn: "Start Writing Your Letter",
    feature1Title: "Hand-Drawn Style",
    feature1Desc: "Every element is crafted to look like it came straight from your desk drawer.",
    feature2Title: "Sticker Studio",
    feature2Desc: "Dozens of custom-drawn stickers to decorate your feelings with digital craft.",
    feature3Title: "Fast Delivery",
    feature3Desc: "Send your finished masterpiece instantly to their inbox with a burst of confetti.",
    writeHeader: "Write Your Letter ♡",
    sendBtn: "Send ✉",
    previewBtn: "Preview →",
    toLabel: "TO:",
    bodyLabel: "BODY:",
    sigLabel: "SIGNATURE:",
    placeholderTo: "Your dearest...",
    placeholderBody: "Write your heart out... every word is a little piece of you.",
    placeholderSig: "With love, Jamie",
    templatesLabel: "Letter Templates",
    tabStickers: "Stickers ✦",
    tabFormat: "Format",
    tabDesign: "Design",
    stickersHint: "Tap a sticker to add. Drag to move, click '×' to delete.",
    fontStyleLabel: "Font Style ✦",
    textSizeLabel: "Text Size",
    textColorLabel: "Text Color",
    paperColorLabel: "Paper Color ✦",
    borderStyleLabel: "Border Style ✦",
    waxSealLabel: "Wax Seal ✦",
    envelopeColorLabel: "Envelope Color ✦",
    addStickerBtn: "Add Sticker to Letter ✦",
    saveDraftBtn: "Save Draft",
    clearBtn: "Clear",
    readyTitle: "Ready to Fly!",
    readyDesc: "Give your letter a final look before it finds its way home.",
    recipientNameLabel: "Recipient Name",
    senderNameLabel: "Sender Name",
    recipientEmailLabel: "Recipient Email",
    sealBtn: "Seal & Deliver",
    foldingTitle: "Folding your letter...",
    slidingTitle: "Sliding letter inside...",
    sealingTitle: "Sealing with hot wax...",
    readySendTitle: "Ready to Send",
    readySendDesc: "Your letter is sealed with wax and addressed.",
    sendWithLoveBtn: "SEND WITH LOVE ♡",
    readyFlyHint: "Your letter is ready to fly!",
    successTitle: "Sent with love!",
    successDesc: "Your digital letter has been beautifully folded, sealed in wax, and is now flying to its physical home!",
    successFrom: "From",
    successTo: "To",
    successEnv: "Envelope Color",
    successSeal: "Wax Seal Design",
    successStickers: "Stickers Placed",
    successWriteAnother: "Write Another Letter ✍️",
    aboutUsLink: "About Us",
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Service",
    aboutTitle: "About Dear You",
    aboutBody: "Dear You is a digital stationery shop with a physical soul. We believe that handwriting carries human connection. Our platform helps you customize digital cards with retro typography, custom-waxed seals, and line-drawn stickers, ready to be sent to your loved ones.",
    privacyTitle: "Privacy Policy",
    privacyBody: "Your letters are processed entirely inside your local browser. We do not store your secrets, names, or email addresses on our servers. When you send a letter, it opens in your local mail client, keeping your message completely private.",
    termsTitle: "Terms of Service",
    termsBody: "By using Dear You, you agree to create letters of kindness and love. Any content sent through our local mail redirect is the user's responsibility. Have fun customizing your letter!",
    closeBtn: "Close"
  },
  TR: {
    landingTitle: "Dear You",
    landingSlogan: "Fiziksel bir ruha sahip dijital mektuplar.",
    startBtn: "Mektubunu Yazmaya Başla",
    feature1Title: "El Çizimi Tarzı",
    feature1Desc: "Her eleman, doğrudan çalışma masanızın çekmecesinden çıkmış gibi görünecek şekilde tasarlandı.",
    feature2Title: "Sticker Stüdyosu",
    feature2Desc: "Duygularınızı dijital zanaatla süslemek için onlarca el yapımı çıkartma.",
    feature3Title: "Hızlı Gönderim",
    feature3Desc: "Tamamlanmış şaheserinizi konfeti yağmuru eşliğinde anında alıcının e-posta kutusuna gönderin.",
    writeHeader: "Mektubunu Yaz ♡",
    sendBtn: "Gönder ✉",
    previewBtn: "Önizleme →",
    toLabel: "ALICI:",
    bodyLabel: "METİN:",
    sigLabel: "İMZA:",
    placeholderTo: "Sevgilime...",
    placeholderBody: "İçinden geçenleri dök... Her kelime senden bir parçadır.",
    placeholderSig: "Sevgilerle, Jamie",
    templatesLabel: "Mektup Şablonları",
    tabStickers: "Stickers ✦",
    tabFormat: "Format",
    tabDesign: "Tasarım",
    stickersHint: "Eklemek için sticker'a dokun. Taşımak için sürükle, silmek için '×' işaretine bas.",
    fontStyleLabel: "Yazı Tipi ✦",
    textSizeLabel: "Metin Boyutu",
    textColorLabel: "Metin Rengi",
    paperColorLabel: "Kağıt Rengi ✦",
    borderStyleLabel: "Kenarlık Stili ✦",
    waxSealLabel: "Mum Mühür ✦",
    envelopeColorLabel: "Zarf Rengi ✦",
    addStickerBtn: "Mektuba Sticker Ekle ✦",
    saveDraftBtn: "Taslağı Kaydet",
    clearBtn: "Temizle",
    readyTitle: "Uçmaya Hazır!",
    readyDesc: "Mektubunuz yola çıkmadan önce ona son bir kez göz atın.",
    recipientNameLabel: "Alıcı İsmi",
    senderNameLabel: "Gönderen İsmi",
    recipientEmailLabel: "Alıcı E-postası",
    sealBtn: "Mühürle ve Gönder",
    foldingTitle: "Mektubunuz katlanıyor...",
    slidingTitle: "Zarfa yerleştiriliyor...",
    sealingTitle: "Sıcak balmumu ile mühürleniyor...",
    readySendTitle: "Gönderime Hazır",
    readySendDesc: "Mektubunuz mühürlendi ve adreslendi.",
    sendWithLoveBtn: "SEVGİYLE GÖNDER ♡",
    readyFlyHint: "Mektubunuz uçmaya hazır!",
    successTitle: "Sevgiyle gönderildi!",
    successDesc: "Dijital mektubunuz başarıyla katlandı, balmumu ile mühürlendi ve şimdi fiziksel evine doğru uçuyor!",
    successFrom: "Gönderen",
    successTo: "Alıcı",
    successEnv: "Zarf Rengi",
    successSeal: "Mühür Tasarımı",
    successStickers: "Yerleştirilen Çıkartmalar",
    successWriteAnother: "Başka Bir Mektup Yaz ✍️",
    aboutUsLink: "Hakkımızda",
    privacyLink: "Gizlilik Politikası",
    termsLink: "Kullanım Koşulları",
    aboutTitle: "Dear You Hakkında",
    aboutBody: "Dear You, fiziksel bir ruha sahip dijital bir kırtasiyedir. El yazısının samimi insan bağları taşıdığına inanıyoruz. Platformumuz, retro tipografi, özel balmumu mühürler ve el çizimi stickerlar ile sevdiklerinize gönderebileceğiniz mektuplar hazırlamanıza yardımcı olur.",
    privacyTitle: "Gizlilik Politikası",
    privacyBody: "Mektuplarınız tamamen yerel tarayıcınızın içinde işlenir. Sırlarınızı, isimlerinizi veya e-posta adreslerinizi sunucularımızda saklamıyoruz. Bir mektup gönderdiğinizde, yerel e-posta istemciniz açılır ve mesajınız tamamen gizli kalır.",
    termsTitle: "Kullanım Koşulları",
    termsBody: "By using Dear You, you agree to create letters of kindness and love. Any content sent through our local mail redirect is the user's responsibility. Have fun customizing your letter!",
    closeBtn: "Kapat"
  }
};

// Pure coordinate & details helper to conform to ESLint purity checks
const generateStickerDetails = (stickerId) => {
  const randomX = Math.floor(Math.random() * 60) + 15;
  const randomY = Math.floor(Math.random() * 45) + 30;
  const randomRotate = Math.floor(Math.random() * 40) - 20;
  return {
    id: Date.now() + Math.random(),
    stickerId,
    x: randomX,
    y: randomY,
    rotate: randomRotate,
  };
};

function BackgroundDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="absolute w-24 h-24 left-[5%] top-[8%] opacity-35 stroke-[#E11D48]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <svg className="absolute w-16 h-16 left-[40%] top-[4%] opacity-30 stroke-[#E11D48]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.25 2.25 0 01-2.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25h-.75a2.25 2.25 0 00-2.25 2.25v2.508a2.25 2.25 0 01-2.25 2.25l-1.135 1.135" />
      </svg>
      <svg className="absolute w-20 h-20 left-[75%] top-[6%] opacity-35 stroke-[#E11D48]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5a3 3 0 00-3 3M12 5a3 3 0 013 3M12 19a3 3 0 00-3-3M12 19a3 3 0 013-3M5 12a3 3 0 003-3M5 12a3 3 0 013 3M19 12a3 3 0 00-3-3M19 12a3 3 0 013 3" />
      </svg>
      <svg className="absolute w-24 h-28 left-[3%] top-[45%] opacity-30 stroke-[#E11D48]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z" />
      </svg>
      <svg className="absolute w-20 h-20 right-[5%] top-[40%] opacity-35 stroke-[#E11D48]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <svg className="absolute w-36 h-36 left-[4%] bottom-[5%] opacity-35 stroke-[#E11D48]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2a4 4 0 00-4 4v1a4 4 0 004-4zm0 20a4 4 0 00-4-4v-1a4 4 0 004 4zM2 12a4 4 0 004-4h1a4 4 0 00-4 4zm20 0a4 4 0 00-4-4h-1a4 4 0 004 4z" />
      </svg>
      <svg className="absolute w-28 h-28 right-[4%] bottom-[6%] opacity-35 stroke-[#E11D48]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-4-4v8" />
      </svg>
      <span className="absolute text-rose-500/20 text-xl left-[15%] top-[25%]">✦</span>
      <span className="absolute text-rose-500/20 text-2xl left-[85%] top-[28%]">✦</span>
      <span className="absolute text-rose-500/20 text-lg left-[25%] bottom-[20%]">♡</span>
      <span className="absolute text-rose-500/20 text-2xl right-[22%] bottom-[25%]">♡</span>
      <span className="absolute text-rose-500/20 text-xs font-bold right-[30%] bottom-[8%] font-archivo tracking-widest uppercase">Sending You Love</span>
    </div>
  );
}

function App() {
  // Navigation State: 'landing', 'editor', 'preview', 'sending-animation', 'sealed', 'success'
  const [currentStep, setCurrentStep] = useState('landing');
  const [lang, setLang] = useState('EN'); 
  const [activeModal, setActiveModal] = useState(null); 

  // Input states
  const [greeting, setGreeting] = useState('My Dearest,');
  const [letterText, setLetterText] = useState(
    'Write your heart out... every word is a little piece of you.\n\nDear friend, every word I write carries all the love in my heart. I wanted to take a moment to tell you how much you mean to me. Life is more beautiful when we share it with those who truly see us...'
  );
  const [senderName, setSenderName] = useState('With love ♡');
  const [customSenderName, setCustomSenderName] = useState('Jamie');
  const [senderEmail, setSenderEmail] = useState('love@dearyou.com');
  const [recipientName, setRecipientName] = useState('Your dearest...');

  // Customization choices
  const [selectedLetterColor, setSelectedLetterColor] = useState(LETTER_COLORS[0]);
  const [selectedFont, setSelectedFont] = useState(FONTS[1]); 
  const [selectedEnvelope, setSelectedEnvelope] = useState(ENVELOPE_COLORS[0]);
  const [selectedWaxSeal, setSelectedWaxSeal] = useState(WAX_SEALS[0]);
  const [placedStickers, setPlacedStickers] = useState([]);
  
  // Format variables
  const [textSize, setTextSize] = useState(20);
  const [selectedInk, setSelectedInk] = useState(INK_COLORS[0]);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [borderStyle, setBorderStyle] = useState('Plain');

  // Drag-and-drop state
  const [draggedStickerId, setDraggedStickerId] = useState(null);

  // Active sub-tab inside the editor
  const [activeTab, setActiveTab] = useState('Stickers');

  // Loading and sending state
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailProgress, setEmailProgress] = useState(0);

  // Automated unified folding/envelope animation
  const [animationPhase, setAnimationPhase] = useState('folding');

  // Unified global step index resolver
  const getActiveStepIndex = () => {
    if (currentStep === 'editor') return 1;
    if (currentStep === 'preview') return 2;
    if (currentStep === 'sending-animation' || currentStep === 'sealed') return 3;
    if (currentStep === 'success') return 4;
    return 0;
  };

  // Language toggle handler to safely update text without triggering effect loops
  const handleToggleLang = () => {
    const nextLang = lang === 'EN' ? 'TR' : 'EN';
    setLang(nextLang);
    if (nextLang === 'TR') {
      if (greeting === 'My Dearest,') setGreeting('Sevgili Dostum,');
      if (senderName === 'With love ♡') setSenderName('Sevgilerle ♡');
      if (letterText.startsWith('Write your heart out...') || letterText === '') {
        setLetterText('İçinden geçenleri dök... Her kelime senden bir parçadır.\n\nSevgili dostum, sana yazdığım her söz kalbimdeki tüm sevgiyi taşır. Hayat, bizi gerçekten görenlerle paylaştığımızda çok daha güzel...');
      }
    } else {
      if (greeting === 'Sevgili Dostum,') setGreeting('My Dearest,');
      if (senderName === 'Sevgilerle ♡') setSenderName('With love ♡');
      if (letterText.startsWith('İçinden geçenleri dök...') || letterText === '') {
        setLetterText('Write your heart out... every word is a little piece of you.\n\nDear friend, every word I write carries all the love in my heart. I wanted to take a moment to tell you how much you mean to me. Life is more beautiful when we share it with those who truly see us...');
      }
    }
  };

  // Automated unified folding/envelope animation
  useEffect(() => {
    if (currentStep === 'sending-animation') {
      const timer1 = setTimeout(() => {
        setAnimationPhase('sliding');
      }, 1400);
      
      const timer2 = setTimeout(() => {
        setAnimationPhase('sealing');
      }, 2800);
      
      const timer3 = setTimeout(() => {
        setCurrentStep('sealed');
      }, 4200);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [currentStep]);

  // Action methods
  const handleClear = () => {
    if (window.confirm(lang === 'TR' ? 'Mektup içeriğini temizlemek istediğinize emin misiniz?' : 'Are you sure you want to clear the letter?')) {
      setLetterText('');
      setPlacedStickers([]);
    }
  };

  const handleSave = () => {
    alert(lang === 'TR' ? "Taslak başarıyla kaydedildi! 💾" : "Draft saved successfully! 💾");
  };

  const handleReset = () => {
    setCurrentStep('landing');
    setGreeting(lang === 'TR' ? 'Sevgili Dostum,' : 'My Dearest,');
    setLetterText('');
    setSenderName(lang === 'TR' ? 'Sevgilerle ♡' : 'With love ♡');
    setCustomSenderName('Jamie');
    setSenderEmail('love@dearyou.com');
    setRecipientName('Your dearest...');
    setSelectedLetterColor(LETTER_COLORS[0]);
    setSelectedFont(FONTS[1]);
    setSelectedEnvelope(ENVELOPE_COLORS[0]);
    setSelectedWaxSeal(WAX_SEALS[0]);
    setPlacedStickers([]);
    setTextSize(20);
    setSelectedInk(INK_COLORS[0]);
    setIsBold(false);
    setIsItalic(false);
    setBorderStyle('Plain');
  };

  // Local mail redirect trigger
  const handleSendEmail = () => {
    const emailSubject = `Dear You - A special letter from ${customSenderName}`;
    const emailBody = `${greeting}\n\n${letterText}\n\n${senderName}\n\n(Sent via Dear You - Digital letters with a physical soul)`;
    const mailtoLink = `mailto:${senderEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    setIsSendingEmail(true);
    setEmailProgress(0);

    const interval = setInterval(() => {
      setEmailProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          window.location.href = mailtoLink;
          setIsSendingEmail(false);
          setCurrentStep('success');
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  const handleSelectTemplate = (templateType) => {
    if (templateType === 'Romantic') {
      if (lang === 'TR') {
        setLetterText("Her anım seninle rüya gibi. Kalbimin ritmi, dünyamın ışığısın...");
      } else {
        setLetterText("Every moment spent with you feels like a dream I never want to wake up from. You are the heartbeat in my song...");
      }
      setSelectedLetterColor(LETTER_COLORS[1]);
      setSelectedFont(FONTS[0]);
    } else if (templateType === 'Minimalist') {
      if (lang === 'TR') {
        setLetterText("Hayatıma girdiğin için teşekkürler. Desteğin benim için paha biçilemez.");
      } else {
        setLetterText("Thank you for being in my life. Your support means the world to me.");
      }
      setSelectedLetterColor(LETTER_COLORS[3]);
      setSelectedFont(FONTS[2]);
    } else {
      if (lang === 'TR') {
        setLetterText('İçinden geçenleri dök... Her kelime senden bir parçadır.\n\nSevgili dostum, sana yazdığım her söz kalbimdeki tüm sevgiyi taşır. Hayat, bizi gerçekten görenlerle paylaştığımızda çok daha güzel...');
      } else {
        setLetterText('Write your heart out... every word is a little piece of you.\n\nDear friend, every word I write carries all the love in my heart. I wanted to take a moment to tell you how much you mean to me. Life is more beautiful when we share it with those who truly see us...');
      }
      setSelectedLetterColor(LETTER_COLORS[0]);
      setSelectedFont(FONTS[1]);
    }
  };

  const handleAddSticker = (stickerId) => {
    const newSticker = generateStickerDetails(stickerId);
    setPlacedStickers((prev) => [...prev, newSticker]);
  };

  const handleDeleteSticker = (stickerId, e) => {
    e.stopPropagation();
    setPlacedStickers(placedStickers.filter(s => s.id !== stickerId));
  };

  // Sticker dragging mouse/touch handlers
  const handlePointerDown = (stickerId, e) => {
    e.stopPropagation();
    setDraggedStickerId(stickerId);
  };

  const handlePointerMove = (e) => {
    if (draggedStickerId === null) return;
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Support mouse drag + mobile touchscreen drag coordinates
    const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
    const clientY = (e.touches && e.touches.length > 0) ? e.touches[0].clientY : e.clientY;
    
    let x = ((clientX - rect.left) / rect.width) * 100;
    let y = ((clientY - rect.top) / rect.height) * 100;
    
    // Safety boundaries to keep stickers on paper
    x = Math.max(5, Math.min(95, x));
    y = Math.max(5, Math.min(95, y));
    
    setPlacedStickers(placedStickers.map(s => 
      s.id === draggedStickerId ? { ...s, x, y } : s
    ));
  };

  const handlePointerUpOrLeave = () => {
    setDraggedStickerId(null);
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-100 via-lime-50 via-[55%] to-pink-300 flex flex-col justify-start items-center overflow-x-hidden relative select-none">
      
      {/* HEADER CONTROLS (LANGUAGE & HELP) */}
      <div className="absolute top-4 left-6 z-45 flex items-center gap-4">
        <button 
          onClick={handleToggleLang}
          className="px-3.5 py-1.5 bg-white border-2 border-black rounded-xl font-bold font-archivo text-xs shadow-[2px_2px_0px_#000] cursor-pointer hover:bg-gray-50 active:translate-x-[1px] active:translate-y-[1px]"
        >
          🌐 {lang}
        </button>
      </div>

      {/* MODALS */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-6 animate-fadeIn">
          <div className="bg-white border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)] max-w-md w-full relative">
            <h3 className="text-2xl font-black text-black font-archivo uppercase mb-4">
              {activeModal === 'about' && t.aboutTitle}
              {activeModal === 'privacy' && t.privacyTitle}
              {activeModal === 'terms' && t.termsTitle}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed font-archivo mb-6">
              {activeModal === 'about' && t.aboutBody}
              {activeModal === 'privacy' && t.privacyBody}
              {activeModal === 'terms' && t.termsBody}
            </p>
            <button 
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 bg-black text-[#F9F6EE] border-2 border-black font-black text-xs rounded-xl tracking-wider hover:bg-gray-900 cursor-pointer"
            >
              {t.closeBtn}
            </button>
          </div>
        </div>
      )}

      {/* SCREEN 1: LANDING PAGE */}
      {currentStep === 'landing' && (
        <div className="w-full max-w-[1440px] min-h-[1024px] pb-28 bg-[#F6F5E1] flex flex-col justify-start items-center relative animate-fadeIn">
          {/* Minimal background decorations removed */}

          {/* Heading */}
          <div className="self-stretch pt-40 pb-24 relative flex flex-col justify-start items-center gap-8">
            <div className="flex flex-col justify-start items-center gap-2">
              <div className="justify-start text-red-600 text-9xl font-normal font-youngserif leading-none">{t.landingTitle}</div>
              <div className="origin-top-left -rotate-2 justify-start text-black text-5xl font-normal font-caveat">{t.landingSlogan}</div>
            </div>
            
            <div className="pt-6 inline-flex justify-start items-start">
              <button 
                onClick={() => setCurrentStep('editor')}
                className="px-8 py-4 origin-top-left -rotate-1 bg-pink-400 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1.00)] outline outline-[3px] outline-offset-[-3px] outline-black flex justify-center items-center cursor-pointer hover:bg-pink-500 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000] transition-all"
              >
                <div className="justify-start text-white text-lg font-extrabold font-archivo uppercase">{t.startBtn}</div>
              </button>
            </div>
          </div>

          {/* Landing Cards */}
          <div className="w-full max-w-[1200px] px-10 grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
            {/* Card 1 */}
            <div className="p-8 origin-top-left -rotate-2 bg-white rounded-[20px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1.00)] outline outline-[3px] outline-offset-[-3px] outline-black flex flex-col justify-start items-start gap-4 hover:scale-[1.02] transition-transform">
              <div className="w-16 h-16 bg-pink-300 rounded-[32px] flex justify-center items-center">
                <svg className="w-7 h-7 text-[#E20019]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </div>
              <div className="self-stretch justify-start text-black text-3xl font-normal font-youngserif">{t.feature1Title}</div>
              <div className="self-stretch justify-start text-black text-base font-normal font-archivo leading-6">{t.feature1Desc}</div>
            </div>

            {/* Card 2 */}
            <div className="p-8 origin-top-left rotate-1 bg-white rounded-[20px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1.00)] outline outline-[3px] outline-offset-[-3px] outline-black flex flex-col justify-start items-start gap-4 hover:scale-[1.02] transition-transform">
              <div className="w-16 h-16 bg-pink-300 rounded-[32px] flex justify-center items-center">
                <svg className="w-7 h-7 text-[#E20019]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
                </svg>
              </div>
              <div className="self-stretch justify-start text-black text-3xl font-normal font-youngserif">{t.feature2Title}</div>
              <div className="self-stretch justify-start text-black text-base font-normal font-archivo leading-6">{t.feature2Desc}</div>
            </div>

            {/* Card 3 */}
            <div className="p-8 origin-top-left rotate-2 bg-white rounded-[20px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1.00)] outline outline-[3px] outline-offset-[-3px] outline-black flex flex-col justify-start items-start gap-4 hover:scale-[1.02] transition-transform">
              <div className="w-16 h-16 bg-pink-300 rounded-[32px] flex justify-center items-center">
                <svg className="w-7 h-7 text-[#E20019]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </div>
              <div className="self-stretch justify-start text-black text-3xl font-normal font-youngserif">{t.feature3Title}</div>
              <div className="self-stretch justify-start text-black text-base font-normal font-archivo leading-6">{t.feature3Desc}</div>
            </div>
          </div>

          {/* Footer links */}
          <footer className="mt-28 flex gap-6 text-xs font-black uppercase text-gray-500 font-archivo relative z-10">
            <button onClick={() => setActiveModal('about')} className="hover:text-black cursor-pointer">{t.aboutUsLink}</button>
            <span>•</span>
            <button onClick={() => setActiveModal('privacy')} className="hover:text-black cursor-pointer">{t.privacyLink}</button>
            <span>•</span>
            <button onClick={() => setActiveModal('terms')} className="hover:text-black cursor-pointer">{t.termsLink}</button>
          </footer>
        </div>
      )}

      {/* SCREEN 2: LETTER EDITOR SCREEN */}
      {currentStep === 'editor' && (
        <div className="w-full max-w-[1440px] min-h-screen relative bg-[#5F1322] flex flex-col justify-start items-start animate-fadeIn border-4 border-black pb-24 select-text">
          {/* Outlined Watermarks */}
          <BackgroundDecorations />

          {/* Header Bar */}
          <div className="self-stretch h-20 px-6 md:px-10 bg-pink-950 border-b-[1.50px] border-red-200 flex justify-between items-center z-10 relative">
            <div className="w-36 flex justify-start items-center gap-3">
              <button 
                onClick={handleReset}
                className="w-9 h-9 bg-white/10 rounded-2xl flex justify-center items-center hover:bg-white/20 transition-all border border-red-200/20 text-white font-bold text-lg cursor-pointer"
              >
                ←
              </button>
            </div>
            
            <div className="justify-start text-white text-3xl font-normal font-youngserif tracking-wide select-none">
              Dear You
            </div>
            
            <div className="w-36 flex justify-end items-center">
              <button 
                onClick={() => {
                  if (letterText.trim() === '') {
                    alert(lang === 'TR' ? 'Mektup içeriği boş olamaz!' : 'Letter text cannot be empty!');
                    return;
                  }
                  setCurrentStep('preview');
                }}
                className="px-5 py-2.5 bg-rose-500 rounded-[100px] shadow-[0px_4px_12px_0px_rgba(232,50,90,0.33)] outline outline-[1.50px] outline-offset-[-1.50px] outline-rose-200 flex justify-start items-center gap-2 hover:bg-rose-600 transition-colors cursor-pointer"
              >
                <div className="justify-start text-white text-lg font-normal font-youngserif">{t.sendBtn}</div>
              </button>
            </div>
          </div>

          {/* Workspace Body */}
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-8 p-6 md:p-9 z-10 relative">
            
            {/* Left side: writing paper tools and canvas */}
            <div className="w-full lg:w-[60%] flex flex-col justify-start items-start gap-4">
              
              {/* Greeting toolbar */}
              <div className="w-full px-1 py-2 flex flex-wrap justify-start items-center gap-2">
                <div className="opacity-80 justify-start text-rose-200 text-base font-normal font-youngserif">Greeting:</div>
                <div className="pl-3.5 pr-2.5 py-1.5 bg-white/10 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/20 flex justify-start items-center gap-2">
                  <input 
                    type="text" 
                    value={greeting} 
                    onChange={(e) => setGreeting(e.target.value)}
                    className="bg-transparent border-none text-rose-200 text-base font-normal font-caveat focus:outline-none w-28"
                  />
                </div>
                <div className="flex-1 h-px"></div>
                <div className="justify-start text-rose-200/40 text-xs font-normal font-inter">{letterText.length} / 2000</div>
              </div>

              {/* Canvas: Writing Paper */}
              <div className="w-full flex justify-center relative">
                <div 
                  onMouseMove={handlePointerMove}
                  onTouchMove={handlePointerMove}
                  onMouseUp={handlePointerUpOrLeave}
                  onTouchEnd={handlePointerUpOrLeave}
                  onMouseLeave={handlePointerUpOrLeave}
                  className={`w-full max-w-[740px] aspect-[740/660] p-8 md:p-14 relative rounded-[20px] shadow-[0px_16px_48px_0px_rgba(0,0,0,0.13)] shadow-[0px_4px_16px_0px_rgba(107,21,40,0.19)] outline outline-[1.50px] outline-offset-[-1.50px] outline-zinc-900 flex flex-col justify-start items-start gap-4 md:gap-7 overflow-hidden transition-all duration-300 ${
                    borderStyle === 'Dotted' ? 'border-4 border-dashed border-black/40' : borderStyle === 'Floral' ? 'ring-8 ring-offset-4 ring-pink-300 border-2 border-black' : ''
                  }`}
                  style={{ backgroundColor: selectedLetterColor.hex }}
                >
                  
                  {/* Decorative corners */}
                  <div className="w-6 h-6 left-[22px] top-[22px] absolute text-xl select-none">♡</div>
                  <div className="w-6 h-6 right-[22px] top-[22px] absolute text-xl select-none">✦</div>
                  <div className="w-6 h-6 left-[22px] bottom-[22px] absolute text-xl select-none">❀</div>
                  <div className="w-6 h-6 right-[22px] bottom-[22px] absolute text-xl select-none">♡</div>

                  {/* Header salutation text */}
                  <div className="self-stretch justify-start text-zinc-900 text-4xl font-normal font-caveat">{greeting}</div>
                  
                  {/* Paper Text Area */}
                  <div className="self-stretch flex-1 bg-transparent flex flex-col justify-start items-start w-full">
                    <textarea
                      value={letterText}
                      onChange={(e) => setLetterText(e.target.value)}
                      placeholder={t.placeholderBody}
                      className={`self-stretch flex-1 bg-transparent border-none outline-none resize-none text-stone-900 leading-9 focus:outline-none placeholder-stone-400 ${selectedFont.class}`}
                      style={{ 
                        color: selectedInk.hex, 
                        fontSize: `${textSize}px`,
                        fontWeight: isBold ? 'bold' : 'normal',
                        fontStyle: isItalic ? 'italic' : 'normal'
                      }}
                    />
                  </div>

                  {/* Signature block */}
                  <div className="self-stretch inline-flex justify-end items-center gap-2.5 z-10">
                    <div className="pl-3 pr-2 py-1.5 bg-orange-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-300 flex justify-start items-center gap-1.5 shadow-sm">
                      <input 
                        type="text" 
                        value={senderName} 
                        onChange={(e) => setSenderName(e.target.value)}
                        className="bg-transparent border-none focus:outline-none text-zinc-900 text-3xl font-normal font-caveat w-48 text-right"
                      />
                    </div>
                  </div>

                  {/* Placed Interactive SVG Stickers (Draggable & Deletable) */}
                  {placedStickers.map((sticker) => (
                    <div
                      key={sticker.id}
                      onMouseDown={(e) => handlePointerDown(sticker.id, e)}
                      onTouchStart={(e) => handlePointerDown(sticker.id, e)}
                      className="absolute bg-white p-2.5 border-2 border-black rounded-2xl shadow-[3px_3px_0px_rgba(0,0,0,1)] select-none cursor-grab active:cursor-grabbing hover:scale-105 transition-transform z-20 group"
                      style={{
                        left: `${sticker.x}%`,
                        top: `${sticker.y}%`,
                        transform: `translate(-50%, -50%) rotate(${sticker.rotate}deg)`,
                      }}
                    >
                      {/* Delete icon badge */}
                      <button
                        onClick={(e) => handleDeleteSticker(sticker.id, e)}
                        className="absolute -top-3.5 -right-3.5 w-6 h-6 rounded-full bg-red-500 border border-black text-white text-[10px] flex items-center justify-center font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-30"
                        title="Delete Sticker"
                      >
                        ×
                      </button>
                      <StickerIcon id={sticker.stickerId} className="w-12 h-12 text-rose-500 pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Template Picker */}
              <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div className="opacity-95 justify-start text-[#FFFCEB] text-lg font-normal font-youngserif">{t.templatesLabel}</div>
                <div className="self-stretch inline-flex justify-start items-start gap-3">
                  
                  {/* Template 1: Classic */}
                  <button 
                    onClick={() => handleSelectTemplate('Classic')}
                    className="flex-1 inline-flex flex-col justify-start items-center gap-2 text-left cursor-pointer"
                  >
                    <div className="self-stretch h-20 p-2.5 bg-orange-50 rounded-[10px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.09)] outline outline-2 outline-offset-[-2px] outline-rose-500 flex flex-col justify-start items-start gap-1">
                      <div className="self-stretch h-[5px] bg-stone-300 rounded-xs"></div>
                      <div className="w-14 h-1 bg-stone-300 rounded-xs"></div>
                      <div className="self-stretch h-1 bg-stone-300 rounded-xs"></div>
                      <div className="self-stretch h-1 bg-stone-300 rounded-xs"></div>
                      <div className="w-20 h-1 bg-stone-300 rounded-xs"></div>
                    </div>
                    <div className="justify-start text-rose-200 text-xs font-normal font-youngserif">Classic</div>
                  </button>

                  {/* Template 2: Romantic */}
                  <button 
                    onClick={() => handleSelectTemplate('Romantic')}
                    className="flex-1 inline-flex flex-col justify-start items-center gap-2 text-left cursor-pointer"
                  >
                    <div className="self-stretch h-20 p-2.5 bg-rose-50 rounded-[10px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.06)] outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start gap-1">
                      <div className="self-stretch h-[3px] bg-red-300 rounded-xs"></div>
                      <div className="self-stretch h-1 bg-rose-200 rounded-xs"></div>
                      <div className="w-12 h-1 bg-rose-200 rounded-xs"></div>
                      <div className="self-stretch h-1 bg-rose-200 rounded-xs"></div>
                      <div className="self-stretch h-[3px] bg-red-300 rounded-xs"></div>
                    </div>
                    <div className="justify-start text-rose-200/50 text-xs font-normal font-youngserif">Romantic</div>
                  </button>

                  {/* Template 3: Minimalist */}
                  <button 
                    onClick={() => handleSelectTemplate('Minimalist')}
                    className="flex-1 inline-flex flex-col justify-start items-center gap-2 text-left cursor-pointer"
                  >
                    <div className="self-stretch h-20 p-2.5 bg-stone-50 rounded-[10px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.06)] outline outline-1 outline-offset-[-1px] outline-black/10 flex flex-col justify-start items-start gap-[5px]">
                      <div className="w-16 h-[3px] bg-stone-300 rounded-xs"></div>
                      <div className="self-stretch h-[3px] bg-zinc-300 rounded-xs"></div>
                      <div className="self-stretch h-[3px] bg-zinc-300 rounded-xs"></div>
                      <div className="w-14 h-[3px] bg-zinc-300 rounded-xs"></div>
                    </div>
                    <div className="justify-start text-rose-200/50 text-xs font-normal font-youngserif">Minimalist</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: Customization control panel */}
            <div className="w-full lg:w-[40%] flex flex-col justify-start items-start gap-4">
              <div className="w-full bg-orange-50 rounded-2xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.09)] flex flex-col justify-start items-start overflow-hidden border-2 border-black">
                
                {/* 3 tabs navigation */}
                <div className="self-stretch bg-stone-200 border-b border-stone-300 inline-flex justify-start items-start">
                  
                  {/* Tab 1: Stickers */}
                  <button 
                    onClick={() => setActiveTab('Stickers')}
                    className={`flex-1 pt-3.5 pb-2 transition-all flex flex-col justify-center items-center cursor-pointer ${
                      activeTab === 'Stickers' ? 'bg-orange-50 border-b-2 border-rose-500' : 'bg-stone-200 border-b border-transparent'
                    }`}
                  >
                    <div className={`justify-start text-base font-normal font-youngserif ${activeTab === 'Stickers' ? 'text-red-900 font-bold' : 'text-stone-400'}`}>{t.tabStickers}</div>
                  </button>

                  {/* Tab 2: Format */}
                  <button 
                    onClick={() => setActiveTab('Format')}
                    className={`flex-1 pt-3.5 pb-2 transition-all flex flex-col justify-center items-center cursor-pointer ${
                      activeTab === 'Format' ? 'bg-orange-50 border-b-2 border-rose-500' : 'bg-stone-200 border-b border-transparent'
                    }`}
                  >
                    <div className={`justify-start text-base font-normal font-youngserif ${activeTab === 'Format' ? 'text-red-900 font-bold' : 'text-stone-400'}`}>{t.tabFormat}</div>
                  </button>

                  {/* Tab 3: Design */}
                  <button 
                    onClick={() => setActiveTab('Design')}
                    className={`flex-1 pt-3.5 pb-2 transition-all flex flex-col justify-center items-center cursor-pointer ${
                      activeTab === 'Design' ? 'bg-orange-50 border-b-2 border-rose-500' : 'bg-stone-200 border-b border-transparent'
                    }`}
                  >
                    <div className={`justify-start text-base font-normal font-youngserif ${activeTab === 'Design' ? 'text-red-900 font-bold' : 'text-stone-400'}`}>{t.tabDesign}</div>
                  </button>
                </div>

                {/* Tab content space */}
                <div className="self-stretch p-5 flex flex-col justify-start items-start gap-4 min-h-[380px]">
                  
                  {/* SUB PANEL 1: STICKERS */}
                  {activeTab === 'Stickers' && (
                    <div className="self-stretch flex flex-col justify-start items-start gap-3 w-full animate-fadeIn">
                      <div className="justify-start text-stone-500 text-xs font-normal font-inter">{t.stickersHint}</div>
                      <div className="grid grid-cols-3 gap-3 w-full max-h-[360px] overflow-y-auto pr-1">
                        {FIGMA_STICKERS.map((sticker) => (
                          <button
                            key={sticker.id}
                            onClick={() => handleAddSticker(sticker.id)}
                            className="h-24 bg-orange-50 rounded-2xl shadow-[0px_2px_6px_0px_rgba(232,50,90,0.06)] outline outline-[1.50px] outline-offset-[-1.50px] outline-red-200 flex justify-center items-center hover:bg-rose-50 transition-all hover:scale-102 active:scale-95 border border-black/5 cursor-pointer text-rose-500"
                          >
                            <div className="inline-flex flex-col justify-center items-center gap-1">
                              <StickerIcon id={sticker.id} className="w-10 h-10" />
                              <div className="justify-start text-rose-400 text-[10px] font-normal font-youngserif uppercase tracking-wider">{sticker.label}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SUB PANEL 2: FORMAT */}
                  {activeTab === 'Format' && (
                    <div className="self-stretch flex flex-col justify-start items-start gap-4 w-full animate-fadeIn">
                      
                      {/* Font styles with real font pre-render naming */}
                      <div className="self-stretch flex flex-col justify-start items-start gap-2.5 w-full">
                        <div className="justify-start text-red-900 text-base font-normal font-youngserif">{t.fontStyleLabel}</div>
                        <div className="self-stretch flex flex-col gap-2 w-full">
                          {FONTS.map((font) => (
                            <button
                              key={font.id}
                              onClick={() => setSelectedFont(font)}
                              className={`h-14 w-full px-4 rounded-xl flex justify-between items-center transition-all cursor-pointer ${
                                selectedFont.id === font.id 
                                  ? 'bg-red-300 outline outline-2 outline-offset-[-2px] outline-rose-500 text-white font-bold' 
                                  : 'bg-white outline outline-[1.50px] outline-offset-[-1.50px] outline-stone-300 text-zinc-900 hover:bg-gray-50'
                              }`}
                            >
                              <span className="font-youngserif text-xs font-normal">{font.name}</span>
                              <span className={`text-xl ${font.class}`}>Aa Bb Cc</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Bold / Italic Toggles */}
                      <div className="self-stretch inline-flex justify-start items-center gap-3 w-full">
                        <div className="justify-start text-red-900 text-base font-normal font-youngserif">Text Style</div>
                        <div className="flex-1 h-px bg-stone-200"></div>
                        <div className="inline-flex gap-2">
                          <button
                            onClick={() => setIsBold(!isBold)}
                            className={`w-10 h-10 rounded-lg border-2 border-black flex justify-center items-center font-bold font-inter cursor-pointer transition-all ${
                              isBold ? 'bg-pink-400 text-white shadow-[2px_2px_0px_#000] -translate-y-0.5' : 'bg-white text-zinc-900 hover:bg-stone-50'
                            }`}
                          >
                            B
                          </button>
                          <button
                            onClick={() => setIsItalic(!isItalic)}
                            className={`w-10 h-10 rounded-lg border-2 border-black flex justify-center items-center italic font-inter cursor-pointer transition-all ${
                              isItalic ? 'bg-pink-400 text-white shadow-[2px_2px_0px_#000] -translate-y-0.5' : 'bg-white text-zinc-900 hover:bg-stone-50'
                            }`}
                          >
                            I
                          </button>
                        </div>
                      </div>

                      {/* Text size increments */}
                      <div className="self-stretch inline-flex justify-start items-center gap-3 w-full">
                        <div className="justify-start text-red-900 text-base font-normal font-youngserif">{t.textSizeLabel}</div>
                        <div className="flex-1 h-px bg-stone-200"></div>
                        <div className="bg-white rounded-[10px] outline outline-[1.50px] outline-offset-[-1.50px] outline-stone-300 flex justify-start items-center overflow-hidden">
                          <button 
                            onClick={() => setTextSize(Math.max(12, textSize - 2))}
                            className="w-9 h-9 bg-red-50 hover:bg-red-100 flex justify-center items-center text-red-900 text-lg font-normal font-inter cursor-pointer"
                          >
                            −
                          </button>
                          <div className="w-12 h-9 bg-white flex justify-center items-center">
                            <div className="justify-start text-zinc-900 text-base font-semibold font-inter">{textSize}</div>
                          </div>
                          <button 
                            onClick={() => setTextSize(Math.min(32, textSize + 2))}
                            className="w-9 h-9 bg-red-50 hover:bg-red-100 flex justify-center items-center text-red-900 text-lg font-normal font-inter cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Ink color palette */}
                      <div className="self-stretch pb-4 flex flex-col justify-start items-start gap-2.5 w-full">
                        <div className="justify-start text-red-900 text-base font-normal font-youngserif">{t.textColorLabel}</div>
                        <div className="self-stretch inline-flex justify-start items-start gap-2.5 flex-wrap">
                          {INK_COLORS.map((ink) => (
                            <button
                              key={ink.name}
                              onClick={() => setSelectedInk(ink)}
                              className={`w-9 h-9 rounded-2xl flex justify-center items-center transition-all cursor-pointer ${
                                selectedInk.name === ink.name ? 'outline outline-2 outline-offset-[-2px] outline-rose-500 scale-105' : 'hover:scale-105'
                              }`}
                            >
                              <div className="w-7 h-7 rounded-full border border-stone-300/20" style={{ backgroundColor: ink.hex }} />
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                  {/* SUB PANEL 3: DESIGN */}
                  {activeTab === 'Design' && (
                    <div className="self-stretch flex flex-col justify-start items-start gap-4 w-full animate-fadeIn">
                      
                      {/* Paper color selections */}
                      <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                        <div className="justify-start text-red-900 text-base font-normal font-youngserif">{t.paperColorLabel}</div>
                        <div className="self-stretch inline-flex justify-start items-start gap-3">
                          {LETTER_COLORS.map((color) => (
                            <button
                              key={color.name}
                              onClick={() => setSelectedLetterColor(color)}
                              className={`w-11 h-11 rounded-3xl flex justify-center items-center transition-all cursor-pointer ${
                                selectedLetterColor.name === color.name ? 'outline outline-2 outline-offset-[-2px] outline-rose-500 scale-105' : 'hover:scale-105'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-full border border-stone-300/25" style={{ backgroundColor: color.hex }} />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Paper borders */}
                      <div className="self-stretch flex flex-col justify-start items-start gap-2.5 w-full">
                        <div className="justify-start text-red-900 text-base font-normal font-youngserif">{t.borderStyleLabel}</div>
                        <div className="self-stretch inline-flex justify-start items-start gap-2.5 w-full">
                          {['Plain', 'Dotted', 'Floral'].map((style) => (
                            <button
                              key={style}
                              onClick={() => setBorderStyle(style)}
                              className={`flex-1 h-12 rounded-lg flex flex-col justify-center items-center transition-all cursor-pointer ${
                                borderStyle === style 
                                  ? 'bg-orange-100 border-2 border-rose-500 font-bold' 
                                  : 'bg-orange-50/50 border border-black/10 text-stone-500 hover:bg-orange-50'
                              }`}
                            >
                              {style === 'Floral' ? (
                                <div className="text-rose-400 text-sm font-normal font-caveat flex items-center gap-1">❀ <span className="text-stone-500 font-youngserif text-xs">Floral</span></div>
                              ) : (
                                <span className="font-youngserif text-xs">{style}</span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Wax seals */}
                      <div className="self-stretch flex flex-col justify-start items-start gap-2.5 w-full">
                        <div className="justify-start text-red-900 text-base font-normal font-youngserif">{t.waxSealLabel}</div>
                        <div className="self-stretch inline-flex justify-start items-start gap-3 w-full">
                          {WAX_SEALS.map((seal) => (
                            <button
                              key={seal.id}
                              onClick={() => setSelectedWaxSeal(seal)}
                              className={`w-12 h-12 rounded-3xl bg-red-600 flex justify-center items-center transition-all text-orange-50 text-xl font-normal font-caveat hover:scale-105 cursor-pointer ${
                                selectedWaxSeal.id === seal.id ? 'outline outline-2 outline-offset-[-2px] outline-rose-500 shadow-md scale-105' : 'opacity-70'
                              }`}
                            >
                              {seal.emoji}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Envelope color choices */}
                      <div className="self-stretch flex flex-col justify-start items-start gap-2.5 w-full">
                        <div className="justify-start text-red-900 text-base font-normal font-youngserif">{t.envelopeColorLabel}</div>
                        <div className="self-stretch inline-flex justify-start items-start gap-2.5 w-full">
                          {ENVELOPE_COLORS.map((env) => (
                            <button
                              key={env.name}
                              onClick={() => setSelectedEnvelope(env)}
                              className={`flex-1 inline-flex flex-col justify-start items-center gap-1.5 transition-all hover:scale-102 cursor-pointer ${
                                selectedEnvelope.name === env.name ? 'scale-102' : ''
                              }`}
                            >
                              <div className={`self-stretch h-12 rounded-[10px] border transition-all ${env.bgClass} ${
                                selectedEnvelope.name === env.name ? 'border-2 border-rose-500' : 'border-black/10'
                              }`} />
                              <div className={`text-xs font-normal font-youngserif uppercase ${
                                selectedEnvelope.name === env.name ? 'text-rose-600 font-bold' : 'text-neutral-600'
                              }`}>{env.name}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </div>

              {/* Action buttons at bottom of panel */}
              <div className="self-stretch flex flex-col gap-3 w-full">
                {/* Add sticker action */}
                <button
                  onClick={() => {
                    const randSticker = FIGMA_STICKERS[Math.floor(Math.random() * FIGMA_STICKERS.length)];
                    handleAddSticker(randSticker.id);
                  }}
                  className="self-stretch px-6 py-4 bg-rose-500 rounded-2xl shadow-[0px_6px_16px_0px_rgba(232,50,90,0.31)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.13)] outline outline-[1.50px] outline-offset-[-1.50px] outline-rose-200 inline-flex justify-center items-center gap-2.5 hover:bg-rose-600 transition-colors uppercase text-white text-lg font-normal font-youngserif cursor-pointer"
                >
                  {t.addStickerBtn}
                </button>

                {/* Save Draft / Clear Draft */}
                <div className="self-stretch inline-flex justify-start items-start gap-3">
                  <button
                    onClick={handleSave}
                    className="flex-1 px-4 py-3 bg-white/10 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 flex justify-center items-center gap-1.5 text-rose-200 text-sm font-normal font-youngserif hover:bg-white/20 cursor-pointer"
                  >
                    <div className="w-4 h-4 relative overflow-hidden">
                      <div className="w-3 h-3 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-rose-200"></div>
                    </div>
                    {t.saveDraftBtn}
                  </button>
                  <button
                    onClick={handleClear}
                    className="flex-1 px-4 py-3 bg-white/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 flex justify-center items-center gap-1.5 text-rose-200/40 text-sm font-normal font-youngserif hover:bg-white/10 cursor-pointer"
                  >
                    <div className="w-4 h-4 relative overflow-hidden">
                      <div className="w-3 h-3.5 left-[2px] top-[1.33px] absolute outline outline-2 outline-offset-[-1px] outline-rose-200/40"></div>
                    </div>
                    {t.clearBtn}
                  </button>
                </div>

                {/* Send Email action */}
                <button
                  onClick={() => {
                    const subject = encodeURIComponent('Your Letter from Dear You');
                    const body = encodeURIComponent(`Greeting: ${greeting}\n\n${letterText}\n\nFrom, ${senderName}`);
                    window.location.href = `mailto:?subject=${subject}&body=${body}`;
                  }}
                  className="self-stretch mt-3 px-6 py-4 bg-blue-600 rounded-2xl shadow-[0px_4px_8px_0px_rgba(0,0,50,0.2)] outline outline-[1.50px] outline-offset-[-1.50px] outline-blue-200 inline-flex justify-center items-center gap-2.5 hover:bg-blue-700 transition-colors uppercase text-white text-lg font-normal font-youngserif cursor-pointer"
                >
                  {t.sendEmailBtn || 'Send Email'}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* SCREEN 3: PREVIEW / READY TO FLY SCREEN */}
      {currentStep === 'preview' && (
        <div className="w-full max-w-[1440px] min-h-[1024px] pt-24 pb-28 relative bg-[#5F1322] flex flex-col justify-start items-center gap-14 animate-fadeIn border-4 border-black">
          <BackgroundDecorations />

          <div className="flex flex-col justify-start items-center gap-4 z-10">
            <div className="justify-start text-[#FFFCEB] text-6xl font-normal font-youngserif">{t.readyTitle}</div>
            <div className="opacity-70 justify-start text-[#FFFCEB] text-lg font-normal font-archivo text-center">{t.readyDesc}</div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-center w-full px-12 z-10">
            {/* Left Side: Mektup Kağıdı Önizleme */}
            <div 
              className={`w-[450px] h-[550px] p-12 origin-top-left rotate-2 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1.00)] outline outline-[3px] outline-offset-[-3px] outline-black flex flex-col justify-start items-start gap-4 relative overflow-hidden ${
                borderStyle === 'Dotted' ? 'border-4 border-dashed border-black/40' : borderStyle === 'Floral' ? 'ring-4 ring-offset-2 ring-pink-300 border border-black' : ''
              }`}
              style={{ backgroundColor: selectedLetterColor.hex }}
            >
              <div className="self-stretch justify-start text-black text-xl font-normal font-caveat truncate">{greeting} {recipientName !== 'Your dearest...' ? recipientName : ''}</div>
              <div className={`self-stretch justify-start text-black text-base font-normal leading-6 line-clamp-6 whitespace-pre-wrap ${selectedFont.class}`} style={{ color: selectedInk.hex }}>{letterText}</div>
              <div className="self-stretch flex-1 inline-flex justify-start items-end mt-auto w-full">
                <div className="justify-start text-red-600 text-2xl font-normal font-caveat">{senderName}</div>
              </div>

              {/* Placed stickers */}
              {placedStickers.map((sticker) => (
                <div
                  key={sticker.id}
                  className="absolute bg-white p-1.5 border-2 border-black rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,1)] select-none pointer-events-none"
                  style={{
                    left: `${sticker.x}%`,
                    top: `${sticker.y}%`,
                    transform: `translate(-50%, -50%) rotate(${sticker.rotate}deg)`,
                  }}
                >
                  <StickerIcon id={sticker.stickerId} className="w-8 h-8 text-rose-500" />
                </div>
              ))}
            </div>

            {/* Right Side: Gönderici Alıcı Formu */}
            <div className="w-[500px] max-w-full p-12 bg-white rounded-3xl shadow-[0px_12px_0px_0px_rgba(0,0,0,1.00)] outline outline-[3px] outline-offset-[-3px] outline-black flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                
                {/* Recipient Name Input */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="justify-start text-black text-sm font-bold font-archivo uppercase">{t.recipientNameLabel}</div>
                  <input
                    type="text"
                    value={recipientName === 'Your dearest...' ? '' : recipientName}
                    onChange={(e) => setRecipientName(e.target.value || 'Your dearest...')}
                    placeholder={t.recipientNameLabel}
                    className="self-stretch h-12 px-4 bg-white rounded-lg outline outline-[2.50px] outline-offset-[-2.50px] outline-black focus:outline-none focus:ring-2 focus:ring-pink-400 text-black text-base font-normal font-archivo"
                  />
                </div>

                {/* Sender Name Input */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="justify-start text-black text-sm font-bold font-archivo uppercase">{t.senderNameLabel}</div>
                  <input
                    type="text"
                    value={customSenderName}
                    onChange={(e) => setCustomSenderName(e.target.value)}
                    className="self-stretch h-12 px-4 bg-white rounded-lg outline outline-[2.50px] outline-offset-[-2.50px] outline-black focus:outline-none focus:ring-2 focus:ring-pink-400 text-black text-base font-normal font-archivo"
                  />
                </div>

                {/* Recipient Email Input */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="justify-start text-black text-sm font-bold font-archivo uppercase">{t.recipientEmailLabel}</div>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="self-stretch h-12 px-4 bg-white rounded-lg outline outline-[2.50px] outline-offset-[-2.50px] outline-black focus:outline-none focus:ring-2 focus:ring-pink-400 text-black text-base font-normal font-archivo"
                  />
                </div>
              </div>

              {/* Seal & Deliver Button */}
              <button 
                onClick={() => {
                  setAnimationPhase('folding');
                  setCurrentStep('sending-animation');
                }}
                className="w-full self-stretch px-8 py-4 origin-top-left rotate-[-1.50deg] bg-pink-400 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1.00)] outline outline-[3px] outline-offset-[-3px] outline-black inline-flex justify-center items-center hover:bg-pink-500 cursor-pointer transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000]"
              >
                <div className="justify-start text-white text-lg font-extrabold font-archivo uppercase">{t.sealBtn}</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SCREEN 4: UNIFIED AUTO-FOLDING AND SLIDING ANIMATION */}
      {currentStep === 'sending-animation' && (
        <div className="w-full max-w-[1440px] min-h-[1024px] flex flex-col items-center justify-center bg-[#5F1322] border-4 border-black p-6 relative overflow-hidden animate-fadeIn">
          <BackgroundDecorations />

          <div className="max-w-xl w-full flex flex-col items-center z-10">
            
            {/* Visual envelope container containing folding letter */}
            <div className="w-96 h-80 relative flex flex-col items-center justify-end select-none [perspective:1000px]">
              
              {/* Folding & sliding paper simulation */}
              <div 
                className={`w-72 border-2 border-black bg-[#FFFCEB] rounded-lg absolute transition-all duration-[1000ms] p-4 flex flex-col justify-between ${
                  animationPhase === 'folding' 
                    ? 'top-4 h-48 scale-y-100 opacity-100 rotate-0 shadow-lg' 
                    : animationPhase === 'sliding' 
                    ? 'top-16 h-28 scale-y-75 opacity-90 rotate-2 translate-y-8 z-0 shadow-md'
                    : 'top-24 h-16 scale-y-50 opacity-0 translate-y-16 z-0 shadow-sm'
                }`}
              >
                <div className="w-full border-b border-black/10 pb-2">
                  <span className="font-caveat text-lg font-bold text-zinc-950">{greeting}</span>
                </div>
                <span className="font-newsreader text-[10px] text-zinc-600 line-clamp-2">{letterText}</span>
                <span className="font-caveat text-right text-xs text-rose-500 font-bold">{senderName}</span>
              </div>

              {/* Envelope pocket representation */}
              <div 
                className={`w-full h-40 border-4 border-black rounded-b-2xl shadow-[4px_4px_0px_#000] relative z-10 flex items-center justify-center transition-all duration-500 ${
                  animationPhase === 'sealing' ? 'scale-102 ring-2 ring-pink-500' : ''
                }`}
                style={{ backgroundColor: selectedEnvelope.hex }}
              >
                {/* Envelope Flap */}
                <div 
                  className={`absolute left-0 right-0 h-16 border-x-4 border-black transition-all duration-[800ms] origin-top ${
                    animationPhase === 'sealing' 
                      ? '-top-[0px] border-b-4 rounded-t-none rotate-x-180 z-20 shadow-inner' 
                      : '-top-16 border-t-4 rotate-x-0'
                  }`}
                  style={{ 
                    backgroundColor: selectedEnvelope.hex,
                    clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)'
                  }}
                />
                
                {/* Red Wax seal drops down in sealing phase */}
                {animationPhase === 'sealing' && (
                  <div className="absolute z-30 animate-bounce w-14 h-14 rounded-full bg-red-600 border-2 border-black flex items-center justify-center text-white text-xl">
                    {selectedWaxSeal.emoji}
                  </div>
                )}

                <div className="font-black tracking-widest text-xs uppercase opacity-45 text-black font-archivo">
                  {selectedEnvelope.name} Envelope
                </div>
              </div>
            </div>

            {/* Dynamic visual progress text */}
            <div className="flex flex-col items-center mt-12 text-[#FFFCEB]">
              <h2 className="text-3xl font-normal font-caveat capitalize animate-pulse">
                {animationPhase === 'folding' && t.foldingTitle}
                {animationPhase === 'sliding' && t.slidingTitle}
                {animationPhase === 'sealing' && t.sealingTitle}
              </h2>
              <div className="text-rose-500 text-2xl mt-1 select-none animate-bounce">♡</div>
            </div>

            {/* Quick progress visual */}
            <div className="w-64 h-2 bg-white/20 border border-black rounded-full overflow-hidden mt-6">
              <div 
                className="h-full bg-pink-500 transition-all duration-[3800ms]"
                style={{ width: animationPhase === 'folding' ? '33%' : animationPhase === 'sliding' ? '66%' : '100%' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* SCREEN 5: ENVELOPE SEALED */}
      {currentStep === 'sealed' && (
        <div className="w-full max-w-[1440px] min-h-[1024px] flex flex-col items-center justify-center bg-[#5F1322] border-4 border-black p-6 relative overflow-hidden animate-fadeIn">
          <BackgroundDecorations />

          <div className="max-w-xl w-full flex flex-col items-center z-10 relative">
            
            {/* Modal for actual sending email */}
            {isSendingEmail && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 rounded-3xl flex flex-col items-center justify-center p-8 border-4 border-black shadow-2xl">
                <span className="text-6xl animate-bounce">🕊️</span>
                <h3 className="text-white text-2xl font-bold font-archivo mt-4">DISPATCHING LETTER</h3>
                <p className="text-gray-300 text-xs mt-2 font-archivo">Opening your email app to send to: {senderEmail}</p>
                <div className="w-64 h-3 bg-white/20 rounded-full mt-6 overflow-hidden border border-black">
                  <div className="h-full bg-pink-500 transition-all duration-300" style={{ width: `${emailProgress}%` }} />
                </div>
              </div>
            )}

            {/* Closed Envelope */}
            <div 
              className="w-[480px] aspect-[16/11] border-4 border-black rounded-3xl shadow-[8px_8px_0px_rgba(0,0,0,1)] relative flex flex-col items-center justify-center overflow-hidden p-6 transition-colors duration-300"
              style={{ backgroundColor: selectedEnvelope.hex }}
            >
              {/* Seams */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="50" y2="40" stroke="black" strokeWidth="2.5" />
                <line x1="100" y1="0" x2="50" y2="40" stroke="black" strokeWidth="2.5" />
              </svg>

              {/* Address label */}
              <div className="z-10 flex flex-col items-center justify-center text-center mt-8">
                <span className="text-zinc-900 text-2xl font-normal font-caveat border-b-2 border-zinc-900 px-4 pb-1">
                  To: {recipientName !== 'Your dearest...' ? recipientName : 'My Dearest'}
                </span>
              </div>

              {/* Wax Seal Stamp on the top fold */}
              <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-red-600 border-2 border-black shadow-md flex items-center justify-center text-orange-50 text-2xl font-normal font-caveat select-none">
                  {selectedWaxSeal.emoji}
                </div>
              </div>

              <div className="absolute bottom-4 right-4 text-[9px] font-black uppercase tracking-widest opacity-60 text-black font-archivo">
                Dear You Letters
              </div>
            </div>

            {/* SEND WITH LOVE ♡ glowing button */}
            <button 
              onClick={handleSendEmail}
              className="mt-12 px-8 py-4 bg-[#FF2E93] text-white border-4 border-black font-black text-sm rounded-full tracking-wider shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all uppercase glow-pulse cursor-pointer"
            >
              {t.sendWithLoveBtn}
            </button>

            <span className="text-xs text-rose-200 mt-3 font-archivo select-none uppercase tracking-widest font-bold">{t.readyFlyHint}</span>
          </div>
        </div>
      )}

      {/* SCREEN 6: SUCCESS SCREEN */}
      {currentStep === 'success' && (
        <div className="w-full max-w-[1440px] min-h-[1024px] flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-lime-50 via-[55%] to-pink-300 border-4 border-black p-6 relative overflow-hidden animate-fadeIn">
          <div className="max-w-md w-full bg-white border-4 border-black p-8 rounded-xl shadow-[8px_8px_0px_#000000] text-center flex flex-col items-center z-10">
            <span className="text-6xl animate-bounce-short">🕊️</span>
            <h2 className="text-3xl font-black mt-6 text-black font-youngserif leading-none">{t.successTitle}</h2>
            <p className="text-gray-600 text-sm mt-3 max-w-xs mx-auto leading-relaxed font-archivo">
              {t.successDesc}
            </p>

            <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 my-6 text-left text-xs text-gray-500 space-y-1.5 font-archivo">
              <div><strong>{t.successFrom}:</strong> {customSenderName} ({senderEmail})</div>
              <div><strong>{t.successTo}:</strong> {recipientName}</div>
              <div><strong>{t.successEnv}:</strong> {selectedEnvelope.name}</div>
              <div><strong>{t.successSeal}:</strong> {selectedWaxSeal.label} ({selectedWaxSeal.emoji})</div>
              <div><strong>{t.successStickers}:</strong> {placedStickers.length} stickers</div>
            </div>

            <button 
              onClick={handleReset}
              className="w-full py-4 bg-black text-[#F9F9F0] border-2 border-black font-black text-xs rounded-xl tracking-widest shadow-[3px_3px_0px_#FF2E93] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#FF2E93] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all uppercase cursor-pointer"
            >
              {t.successWriteAnother}
            </button>
          </div>
        </div>
      )}

      {/* 🚀 PREMIUM ANIMATED PROGRESS STEPPER */}
      {currentStep !== 'landing' && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-6 py-3.5 border-3 border-black rounded-2xl shadow-[4px_4px_0px_#000] z-40 flex items-center gap-6 max-w-[95vw] md:w-[600px] select-none justify-between overflow-hidden">
          {/* Progress bar line */}
          <div className="absolute top-[28px] left-[45px] right-[45px] h-[3px] bg-stone-200 z-0">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-rose-400 transition-all duration-700 ease-in-out"
              style={{ width: `${Math.max(0, ((getActiveStepIndex() - 1) / 3) * 100)}%` }}
            />
          </div>

          {[
            { id: 1, label: lang === 'TR' ? 'Yaz & Süsle' : 'Write & Decorate', stepId: 'editor' },
            { id: 2, label: lang === 'TR' ? 'Önizleme' : 'Preview', stepId: 'preview' },
            { id: 3, label: lang === 'TR' ? 'Mühürle' : 'Seal', stepId: 'sending-animation' },
            { id: 4, label: lang === 'TR' ? 'Uçur' : 'Fly', stepId: 'success' }
          ].map((item) => {
            const activeStep = getActiveStepIndex();
            const isActive = activeStep === item.id;
            const isCompleted = activeStep > item.id;
            const isClickable = item.id <= 2 && letterText.trim() !== ''; // Allow jumping back/forth between edit & preview
            
            return (
              <button
                key={item.id}
                disabled={!isClickable && !isActive}
                onClick={() => {
                  if (item.stepId === 'sending-animation') {
                    setAnimationPhase('folding');
                    setCurrentStep('sending-animation');
                  } else {
                    setCurrentStep(item.stepId);
                  }
                }}
                className={`flex flex-col items-center gap-1.5 z-10 transition-all focus:outline-none relative group ${
                  isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-default'
                }`}
              >
                {/* Circle step indicator */}
                <div 
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs transition-all duration-500 ${
                    isActive 
                      ? 'bg-pink-500 border-black text-white shadow-[0_0_10px_rgba(239,68,68,0.4)] scale-110' 
                      : isCompleted 
                      ? 'bg-rose-900 border-black text-rose-200' 
                      : 'bg-stone-100 border-stone-300 text-stone-400'
                  }`}
                >
                  {isCompleted ? '✓' : item.id}
                </div>

                {/* Text step label */}
                <span 
                  className={`text-[9px] md:text-[10px] font-black uppercase tracking-wider transition-colors duration-500 ${
                    isActive 
                      ? 'text-pink-600 font-extrabold' 
                      : isCompleted 
                      ? 'text-rose-900/70 font-semibold' 
                      : 'text-stone-400 font-normal'
                  }`}
                >
                  {item.label}
                </span>

                {/* Tooltip for clickable states */}
                {isClickable && !isActive && (
                  <span className="absolute -top-8 bg-black text-white text-[9px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
                    {lang === 'TR' ? 'Gitmek için tıklayın' : 'Click to jump'}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
}

export default App;
