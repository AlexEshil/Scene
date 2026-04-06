# Design Specification: Маруся Guest House
## Boutique Armenian Guest House Website — Kudepsta, Sochi

---

## 1. OVERVIEW

### Project Summary
A premium yet warm website for "Маруся" — a small Armenian family-run guest house in Kudepsta, Sochi. The design emphasizes authentic hospitality, Mediterranean-Armenian aesthetics, and the genuine warmth of a family business.

### Target Audience
- **Primary**: Russian-speaking families and couples seeking affordable, clean, authentic accommodation in Sochi
- **Demographics**: 25-55 years old, value-conscious but quality-seeking

### Language & Tone
- **Primary Language**: Russian
- **Tone**: Warm, welcoming, personal, authentic
- **Voice**: "Приезжайте как к себе домой" (Come as if coming home)

---

## 2. PAGE MANIFEST

| Page ID | Page Name | File Name | Is Entry | Notes |
|---------|-----------|-----------|----------|-------|
| index | Главная | index.html | YES | Hero + About + Rooms preview + Why Us + Reviews + Contact CTA |
| rooms | Номера | rooms.html | NO | Full room showcase with details and pricing |
| gallery | Галерея | gallery.html | NO | Immersive photo gallery with lightbox |
| location | Расположение | location.html | NO | Map, directions, nearby attractions |
| contact | Контакты | contact.html | NO | Contact form, phones, messengers, booking |

---

## 3. GLOBAL DESIGN SYSTEM

### 3.1 Color Palette

#### Primary Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Terracotta | `#C75B3A` | rgb(199, 91, 58) | Primary CTA buttons, accents, active states |
| Olive Green | `#6B7B4F` | rgb(107, 123, 79) | Secondary accents, icons, success states |
| Deep Olive | `#4A5A3A` | rgb(74, 90, 58) | Headings, footer background |

#### Neutral Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Cream | `#FAF7F2` | rgb(250, 247, 242) | Main background |
| Warm White | `#FFFFFF` | rgb(255, 255, 255) | Cards, content areas |
| Soft Sand | `#E8E0D5` | rgb(232, 224, 213) | Section backgrounds, dividers |
| Warm Gray | `#8B8175` | rgb(139, 129, 117) | Secondary text, captions |
| Charcoal | `#3D3A36` | rgb(61, 58, 54) | Primary text, headings |

#### Accent Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Gold | `#D4A84B` | rgb(212, 168, 75) | Highlights, stars, premium accents |
| Sea Blue | `#5A8A9C` | rgb(90, 138, 156) | Water/sea references, links |
| Blush | `#E8C4B8` | rgb(232, 196, 184) | Subtle warm accents |

### 3.2 Typography

#### Font Families
| Role | Font | Fallback | Weight Range |
|------|------|----------|--------------|
| Headings | Playfair Display | Georgia, serif | 400, 500, 600, 700 |
| Body | Inter | -apple-system, sans-serif | 300, 400, 500, 600 |
| Accent/Decorative | Cormorant Garamond | Times, serif | 400, 500, 600 (italic) |

#### Type Scale
| Element | Size (Desktop) | Size (Mobile) | Line Height | Weight | Letter Spacing |
|---------|----------------|---------------|-------------|--------|----------------|
| H1 (Hero) | 72px / 4.5rem | 40px / 2.5rem | 1.1 | 600 | -0.02em |
| H2 | 48px / 3rem | 32px / 2rem | 1.2 | 500 | -0.01em |
| H3 | 32px / 2rem | 24px / 1.5rem | 1.3 | 500 | 0 |
| H4 | 24px / 1.5rem | 20px / 1.25rem | 1.4 | 500 | 0 |
| Body Large | 20px / 1.25rem | 18px / 1.125rem | 1.6 | 400 | 0 |
| Body | 16px / 1rem | 16px / 1rem | 1.7 | 400 | 0 |
| Body Small | 14px / 0.875rem | 14px / 0.875rem | 1.6 | 400 | 0.01em |
| Caption | 12px / 0.75rem | 12px / 0.75rem | 1.5 | 500 | 0.05em |

### 3.3 Spacing System

#### Base Unit: 8px
| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Micro spacing, icon gaps |
| space-2 | 8px | Tight element spacing |
| space-3 | 16px | Standard element spacing |
| space-4 | 24px | Component padding |
| space-5 | 32px | Section internal spacing |
| space-6 | 48px | Large component gaps |
| space-7 | 64px | Section padding (mobile) |
| space-8 | 96px | Section padding (tablet) |
| space-9 | 128px | Section padding (desktop) |

### 3.4 Shadows
```css
--shadow-sm: 0 1px 2px rgba(61, 58, 54, 0.05);
--shadow-md: 0 4px 12px rgba(61, 58, 54, 0.08);
--shadow-lg: 0 8px 24px rgba(61, 58, 54, 0.12);
--shadow-xl: 0 16px 48px rgba(61, 58, 54, 0.15);
--shadow-glow: 0 0 24px rgba(199, 91, 58, 0.2);
```

### 3.5 Animation System

#### Easing Functions
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
```

#### Duration Scale
| Token | Value | Usage |
|-------|-------|-------|
| duration-fast | 150ms | Micro-interactions, hovers |
| duration-normal | 300ms | Standard transitions |
| duration-slow | 500ms | Entrance animations |
| duration-slower | 800ms | Hero animations |
| duration-slowest | 1200ms | Page transitions |

#### Animation Patterns

**Fade In Up (Standard Entrance)**
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
/* Usage: 500ms, ease-out, stagger 100ms */
```

**Hero Text Reveal**
```css
@keyframes textReveal {
  from { opacity: 0; transform: translateY(40px); filter: blur(4px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
/* Usage: 800ms, ease-out, stagger 150ms between lines */
```

**Image Ken Burns (Hero Background)**
```css
@keyframes kenBurns {
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.08) translate(-1%, -1%); }
}
/* Usage: 20000ms, linear, infinite alternate */
```

#### Hover States
| Element | Effect | Duration | Easing |
|---------|--------|----------|--------|
| Buttons | Scale 1.02, shadow increase | 200ms | ease-out |
| Cards | translateY(-8px), shadow-lg | 300ms | ease-out |
| Images | Scale 1.05 | 400ms | ease-out |
| Links | Underline grow from left | 300ms | ease-out |

---

## 4. PAGE SPECIFICATIONS

### 4.1 INDEX PAGE (index.html)

#### Section: Navigation
**Layout & Style:**
- Fixed position, transparent on hero, solid cream on scroll
- Height: 80px desktop, 64px mobile
- Logo left, nav center, CTA right
- Backdrop blur: 12px when scrolled

**Interactions:**
- Scroll > 100px: Background transitions to cream with shadow-sm
- Duration: 300ms, ease-out
- Mobile: Hamburger menu with slide-in drawer from right

**Content:**
- Logo: "Маруся" (text logo, Playfair Display, 24px)
- Nav items: Номера, Галерея, Расположение, Контакты
- CTA: "Забронировать" (terracotta button)

---

#### Section: Hero
**Layout & Style:**
- Full viewport height (100vh, min-height 700px)
- Background: Full-bleed cinematic image with gradient overlay
- Content centered vertically and horizontally
- Text container: max-width 800px, centered

**Interactions:**
- Background: Ken Burns zoom effect (20s, infinite)
- Text: Staggered fade-in-up on load (800ms, 150ms stagger)
- CTA buttons: Hover scale 1.02, glow shadow

**Content:**
- Tagline: "ГОСТЕВОЙ ДОМ В КУДЕПСТЕ"
- H1: "Маруся"
- Subtitle: "Уютный отдых у Чёрного моря"
- Description: "Семейный гостевой дом с армянским гостеприимством. До моря — 10 минут пешком."
- Primary CTA: "Забронировать"
- Secondary CTA: "Смотреть номера"

---

#### Section: About
**Layout & Style:**
- Two-column layout on desktop (image left, content right)
- Single column on mobile (image first)
- Background: Cream
- Padding: 128px vertical

**Interactions:**
- Images: Parallax effect on scroll (subtle, 20px movement)
- Content: Fade-in-up on scroll (500ms, ease-out)

**Content:**
- Label: "О НАС"
- H2: "Ваш дом вдали от дома"
- Body: "Гостевой дом «Маруся» — это семейное дело, которое мы ведём с любовью и заботой о каждом госте. Наш дом расположен в тихом районе Кудепста, всего в 10 минутах ходьбы от моря. Здесь вы найдёте всё для комфортного отдыха: чистые уютные номера, зелёный двор, общую кухню и мангал для вечерних посиделок."
- Features:
  1. "Чистота — наш приоритет" — "Идеальная чистота в каждом номере"
  2. "Удобное расположение" — "10 минут до моря, рядом магазины"
  3. "Семейная атмосфера" — "Тихо, спокойно, поют птички"
- Quote: "Приезжайте как к себе домой — мы всегда рады гостям!"

---

#### Section: Rooms Preview
**Layout & Style:**
- Background: Soft sand gradient
- Section header centered
- 3-column grid on desktop, single column on mobile
- Card aspect ratio: 4:3 image, content below

**Interactions:**
- Cards: Fade-in-scale on scroll, stagger 150ms
- Image hover: Scale 1.05 within container
- Card hover: translateY(-8px), shadow increase

**Content:**
- Label: "НОМЕРА"
- H2: "Уютные номера для отдыха"
- Description: "Все номера с удобствами, кондиционером и всем необходимым для комфортного проживания"

**Room Cards:**
1. **Двухместный стандарт** — "Уютный номер для двоих" — 2 гостя, кондиционер, холодильник, Wi-Fi — "от 2 500 ₽/ночь"
2. **Двухкомнатный семейный** — "Просторный номер для семьи" — 4 гостя, 2 комнаты, кухня, кондиционер — "от 4 000 ₽/ночь"
3. **Трёхместный** — "Для компании друзей" — 3 гостя, 3 кровати, холодильник, Wi-Fi — "от 3 200 ₽/ночь"

---

#### Section: Why Us (Advantages)
**Layout & Style:**
- Background: Deep olive (#4A5A3A)
- Text: Cream/white
- 4-column grid on desktop, 2x2 on tablet, single column on mobile

**Interactions:**
- Cards: Fade-in-up on scroll, stagger 100ms

**Content:**
- Label: "ПОЧЕМУ МЫ"
- H2: "Топ за свои деньги"

**Advantages:**
1. **Идеальная чистота** — "Чистота почти идеальная — так пишут наши гости. Мы следим за порядком каждый день."
2. **Удобное расположение** — "До моря 10 минут пешком. Рядом магазин Магнит и продуктовый рынок."
3. **Семейная атмосфера** — "Тихий уютный двор, зелёная территория, площадка для детей. Поют птички."
4. **Всё для комфорта** — "Кухня, стиральная машина, мангал, парковка. Всё необходимое есть."

---

#### Section: Reviews
**Layout & Style:**
- Background: Cream
- Carousel/slider on desktop, stacked cards on mobile
- Cards with quote styling
- Star rating display

**Interactions:**
- Slider: Auto-advance every 6s, pause on hover
- Cards: Fade transition between reviews (500ms)
- Touch/swipe enabled on mobile

**Content:**
- Label: "ОТЗЫВЫ"
- H2: "Что говорят наши гости"
- Rating: "4.8 из 5" based on reviews

**Featured Reviews:**
1. **Nata Marchenko** — "Очень приятная гостиница. Жили в двухкомнатном номере на первом этаже. Чистота почти идеальная. Полное соответствие фотографиям. Удобные кровати, за окном сад и всё время поют птички." — 5 stars
2. **Алёна Тихонова** — "Прекрасный отель! Останавливались с мужем в середине июня. Отдельная благодарность за чистоту. Постельное бельё, полотенца, всё в наилучшем виде." — 5 stars
3. **Денис Павлов** — "ПРЕКРАСНОЕ МЕСТО ДЛЯ ОТДЫХА И ХОРОШИЕ ХОЗЯЕВА КОТОРЫЕ ВСЕГДА РАДЫ ГОСТЯМ! ВСТРЕТЯТ РАЗМЕСТЯТ И НАКОРМЯТ! ТОП ЗА СВОИ ДЕНЬГИ! 5 ИЗ 5!" — 5 stars
4. **Ирина** — "Мы в восторге от отдыха в этом Гостевом доме!" — 5 stars
5. **ВИКТОР КАЛИННИКОВ** — "Очень классное местечко, советую посетить данный мини отель, частенько комфортно, обязательно ещё раз посетим вас, спасибо за чистоту комфорт!" — 5 stars

---

#### Section: Contact CTA
**Layout & Style:**
- Background: Terracotta with subtle pattern
- Centered content
- Large CTA buttons
- Contact info cards below

**Content:**
- H2: "Готовы к отдыху?"
- Subtitle: "Забронируйте номер прямо сейчас или свяжитесь с нами"
- Primary CTA: "Забронировать номер"
- Secondary: "Написать в WhatsApp" / "Telegram"

---

#### Section: Footer
**Layout & Style:**
- Background: Deep olive (#4A5A3A)
- Text: Cream/white
- 4-column grid on desktop
- Copyright bar at bottom

**Content:**
- Logo: "Маруся"
- Description: "Семейный гостевой дом в Кудепсте. Уют, чистота и армянское гостеприимство."
- Navigation: Номера, Галерея, Расположение, Контакты
- Contact: Phone, address, email
- Social: WhatsApp, Telegram, VK
- Copyright: "© 2024 Гостевой дом Маруся. Все права защищены."

---

### 4.2 ROOMS PAGE (rooms.html)

#### Section: Page Header
- Breadcrumb: Главная / Номера
- H1: "Наши номера"
- Subtitle: "Выберите идеальный номер для вашего отдыха"

#### Section: Room Cards (Full)
- 2-column grid on desktop

**Room 1: Двухместный стандарт**
- Price: от 2 500 ₽/ночь | Capacity: 2 гостя | Bed: Двуспальная кровать | Size: 18 м²
- Amenities: Кондиционер, холодильник, TV, Wi-Fi, душ, фен, комплект полотенец

**Room 2: Двухкомнатный семейный**
- Price: от 4 000 ₽/ночь | Capacity: 4 гостя | Beds: 2 двуспальные кровати | Size: 35 м²

**Room 3: Трёхместный**
- Price: от 3 200 ₽/ночь | Capacity: 3 гостя | Beds: 3 односпальные кровати | Size: 22 м²

**Room 4: Четырёхместный**
- Price: от 4 500 ₽/ночь | Capacity: 4 гостя | Beds: 4 односпальные кровати | Size: 28 м²

---

### 4.3 GALLERY PAGE (gallery.html)
- Masonry grid layout
- Categories: Все, Номера, Территория, Кухня, Детали
- Lightbox on click

---

### 4.4 LOCATION PAGE (location.html)
- H1: "Как нас найти"
- Map embed (Yandex/Google)
- Address: "Россия, Краснодарский край, г. Сочи, Александровский район, Кудепста"
- How to get there (from airport, train station, by car)
- Nearby attractions: Пляж Кудепста (10 мин), Магазин Магнит (5 мин), Продуктовый рынок (7 мин)

---

### 4.5 CONTACT PAGE (contact.html)
- H1: "Свяжитесь с нами"
- Form fields: Имя, Телефон, Email, Дата заезда, Дата выезда, Количество гостей, Сообщение
- Contact info: Phone, WhatsApp, Telegram, Email, Address

---

## 5. TECHNICAL REQUIREMENTS

### 5.1 CDN Libraries
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- GSAP for animations (optional) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
```

### 5.2 Browser Support
- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

### 5.3 Performance Requirements
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Images: WebP format with fallbacks, lazy loading

### 5.4 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Alt text for all images
- Color contrast ratio: minimum 4.5:1

---

## 6. IMAGE REQUIREMENTS

### 6.1 Hero Images
**hero_main.jpg**
- Ratio: 16:9, Resolution: 1920x1080
- Keywords: "cozy guest house courtyard mediterranean garden green terrace southern european architecture summer morning light warm atmosphere boutique hotel exterior"

### 6.2 About Section Images
**about_main.jpg**
- Ratio: 3:4, Resolution: 800x1067
- Keywords: "armenian hospitality family breakfast table fresh fruits traditional guest house interior warm lighting cozy dining room mediterranean decor"

**about_secondary.jpg**
- Ratio: 1:1, Resolution: 400x400
- Keywords: "guest house garden detail flowers in pot mediterranean courtyard terracotta pot green plants southern villa"

### 6.3 Room Images
**room_double.jpg** — Ratio: 4:3 — "boutique hotel double room interior clean white bedding modern minimalist design warm lighting comfortable bed"
**room_family.jpg** — Ratio: 4:3 — "family hotel room two rooms interior spacious living area bedroom separated clean comfortable warm colors"
**room_triple.jpg** — Ratio: 4:3 — "hotel triple room three single beds clean interior budget friendly simple design bright"

### 6.4 Gallery Images
- gallery_courtyard_1.jpg — "guest house courtyard garden green lawn trees shade peaceful quiet mediterranean garden"
- gallery_kitchen.jpg — "guest house shared kitchen modern clean white cabinets refrigerator cooking area"
- gallery_breakfast.jpg — "homemade breakfast fresh bread jam coffee morning light wooden table cozy"
- gallery_bathroom.jpg — "clean bathroom white tiles modern shower fresh towels hotel bathroom spotless"
- gallery_parking.jpg — "guest house parking area cars green trees shade secure parking"
- gallery_bbq.jpg — "outdoor barbecue area mangal grill guest house evening gathering"
- gallery_playground.jpg — "children playground kids area swing slide guest house family friendly"

### 6.5 Location Images
- location_beach.jpg — "black sea beach sochi russia summer vacation sandy shore waves blue water"
- location_market.jpg — "local food market fresh fruits vegetables sochi russia southern market"

---

## 7. NAVIGATION STRUCTURE

### 7.1 Main Navigation
| Label | Link | Position |
|-------|------|----------|
| Главная | index.html | Left (logo click) |
| Номера | rooms.html | Center |
| Галерея | gallery.html | Center |
| Расположение | location.html | Center |
| Контакты | contact.html | Center |
| Забронировать | contact.html#booking | Right (CTA) |

### 7.2 Footer Navigation
- Номера, Галерея, Расположение, Контакты, Политика конфиденциальности

### 7.3 Mobile Navigation
- Hamburger icon, slide-in drawer from right

---

## 8. COMPONENT SPECIFICATIONS

### 8.1 Primary Button
```css
background: #C75B3A;
color: white;
padding: 16px 32px;
border-radius: 8px;
font-weight: 500;
transition: all 200ms ease-out;
&:hover { transform: scale(1.02); box-shadow: 0 0 24px rgba(199, 91, 58, 0.2); }
```

### 8.2 Room Card
```css
background: white;
border-radius: 16px;
overflow: hidden;
box-shadow: 0 4px 12px rgba(61, 58, 54, 0.08);
transition: all 300ms ease-out;
&:hover { transform: translateY(-8px); box-shadow: 0 8px 24px rgba(61, 58, 54, 0.12); }
```

### 8.3 Input Field
```css
background: white;
border: 2px solid #E8E0D5;
border-radius: 8px;
padding: 16px;
&:focus { border-color: #C75B3A; outline: none; }
```

---

## 9. RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 640px | Single column, stacked layout, hamburger nav |
| Tablet | 640px - 1024px | 2 columns where applicable |
| Desktop | 1024px - 1280px | Full layout |
| Large Desktop | > 1280px | Max-width container centered |

---

## 10. MICRO-COPY & TEXT PATTERNS

### Button Labels
- Primary: "Забронировать", "Отправить", "Смотреть номера"
- Secondary: "Подробнее", "Посмотреть на карте", "Написать нам"

### Success/Error Messages
- Success: "Спасибо! Мы свяжемся с вами в ближайшее время."
- Error: "Пожалуйста, проверьте введённые данные."

---

*Document Version: 1.0*
*Created for: Маруся Guest House, Kudepsta, Sochi*
*Design System: Boutique Mediterranean-Armenian Hospitality*
