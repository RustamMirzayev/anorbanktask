# Product Comparison Widget

## Description

Loyiha React va TypeScript yordamida yaratilgan mahsulotlarni taqqoslash vidjeti

Foydalanuvchi 3 tagacha mahsulot tanlaydi va ularni jadval ko‘rinishida taqqoslaydi

## Loyihaga qo'shilgan funksiyalar

- 6+ mahsulotdan iborat hardcoded data
- 3 tagacha mahsulotni taqqoslash imkoniyati
- Tanlangan mahsulotlarni jadval ko‘rinishida chiqarish
- Mahsulot xususiyatlarini qatorlarda ko‘rsatish
- Qiymatlari farq qiladigan qatorlarni vizual ajratish
- Mahsulotni taqqoslashdan olib tashlash imkoniyati
- Sahifa yangilanganda tanlangan mahsulotlarni saqlab qolish (LocalStorage)
- Responsive dizayn (desktop va mobile)

## Texnologiyalar

- React
- TypeScript
- Vite

## Loyiha quyidagicha ishga tushiriladi.

1. Repositoryni yuklab olasiz (git clone repository-url)
2. Loyihaga kirasiz (cd product-comparison-widget)
3. Dependencylarni o‘rnatasiz (npm install)
4. Development serverni ishga tushirasiz (npm run dev)

Loyiha (http://localhost:5173) da ochiladi


##COMPONENT ARXITEKTURASI

Loyihani kichik va qayta ishlatiladigan komponentlarga ajratdim:
  ProductList
  ProductCard
  ComparisonTable
Bu kodni o‘qishni va keyinchalik kengaytirishni osonlashtiradi.

##STATE MANAGEMENT

Bu loyiha uchun qo‘shimcha state management kutubxonalari (Redux va boshqalar) ishlatilmadi.
React useState va custom hook yordamida state boshqarildi.
Sababi loyiha hajmi kichik bo'lganligi uchun bu yechim yetarlich samara beradi.

##DATA PERSISTENCE

Tanlangan mahsulotlarni saqlash uchun LocalStorage ishlardim
Bu foydalanuvchi sahifani yangilaganda ham o‘z tanlovlarini yo‘qotmasligini ta'minlaydi.

##TYPESCRIPT USAGE

TypeScript interface orqali mahsulot strukturasini aniqlash uchun ishlatdim.
Bu kod xavfsizligi va xatolarni kamaytirishga yordam beradi.

##RESPONSIVE DESIGN

Mobil qurilmalar uchun responsive layout qo‘shdim.

Keyinchalik quyidagilarni qo'shish mumkin:
  API orqali real mahsulotlarni olish
  Search va filter
  Dark mode
  Animatsiyalar
  Pagination
