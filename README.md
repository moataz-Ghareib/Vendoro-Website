# Vendora - Enterprise ERP Platform

صفحة هبوط احترافية لنظام ERP متقدم باسم Vendora، بناء على موارد من موقع 21st.dev.

## 🎨 مميزات التصميم

### نظام الألوان (Enterprise Dark Mode)
- **الخلفية الأساسية**: Matte Black (#0f172a)
- **النصوص**: Titanium Silver (#cbd5e1)
- **لون التركيز الأساسي**: Cyan Neon (#06b6d4)
- **لون التركيز الثانوي**: Electric Indigo (#6366f1)

### المكونات الرئيسية

#### 1. **Navbar** (`components/navbar.tsx`)
- شريط ملاحة لزج مع تأثير glassmorphism
- شعار Vendora مع gradient
- روابط الملاحة (Features, Solutions, Pricing)
- زر "Start Free Trial" بتأثير توهج
- قائمة الهاتف المحمول

#### 2. **Hero Section** (`components/hero.tsx`)
- عنوان رئيسي: "The Ultimate ERP Engineered for Growth"
- شرح فرعي عن النظام
- زري CTA رئيسيين
- معاينة لوحة التحكم مع تأثيرات حركية
- رسوم متحركة Framer Motion

#### 3. **Solutions Section** (`components/solutions.tsx`)
- أزرار تبديل (Tabs) للحلول المختلفة:
  - For Retail & Electronics (تتبع IMEI)
  - For Bakeries & F&B (تتبع انتهاء الصلاحية)
  - For Enterprise (عمليات متعددة الفروع)
  - High Performance (الأداء العالية)
- محتوى ديناميكي يتغير عند اختيار كل tab
- تأثيرات حركية سلسة

#### 4. **Features Section** (`components/features.tsx`)
- شبكة Bento Grid لـ 6 ميزات رئيسية:
  - Automated Ledger Wallets
  - Dynamic JSON Schemas
  - Multi-branch Ready
  - Enterprise Security
  - Lightning Performance
  - Advanced Analytics
- تأثيرات hover حركية
- أيقونات ملونة

#### 5. **Contact Form** (`components/contact-form.tsx`)
- نموذج الاتصال الاحترافي:
  - حقل الاسم
  - اختيار نوع الشركة
  - البريد الإلكتروني
  - رسالة
- زر الإرسال مع حالة التحميل
- التصميم يدعم Resend.js للرسائل

#### 6. **Footer** (`components/footer.tsx`)
- قسم العلامة التجارية
- روابط المنتج
- روابط الشركة
- روابط قانونية
- رموز وسائل التواصل الاجتماعي

## 🚀 التقنيات المستخدمة

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 مع PostCSS
- **الرسوم المتحركة**: Framer Motion
- **الأيقونات**: Lucide React
- **UI Components**: Shadcn/ui
- **TypeScript**: للأمان في الكتابة

## 📱 الاستجابة

- تصميم mobile-first
- استجابة كاملة للأجهزة اللوحية
- محسّن للشاشات الكبيرة
- قائمة ملاحة مخفية على الهاتف

## 🌍 دعم RTL (للعربية)

الصفحة جاهزة لدعم اللغة العربية:
- استخدام Tailwind logical properties (`start-*`, `end-*`, `ps-*`, `pe-*`)
- بنية HTML تدعم `dir="rtl"`
- يمكن إضافة i18n بسهولة

## 📦 البدء

```bash
# تثبيت المشروع
pnpm install

# تشغيل خادم التطوير
pnpm dev

# الفتح على http://localhost:3000
```

## 🎯 الأقسام الرئيسية

1. **قسم Hero**: يقدم منتج Vendora بشكل جذاب
2. **قسم الحلول**: يعرض كيفية توافق النظام مع صناعات مختلفة
3. **قسم الميزات**: يسرد المميزات الرئيسية في شبكة bento
4. **نموذج الاتصال**: لجمع استفسارات العملاء
5. **Footer**: معلومات وروابط إضافية

## 🎨 التخصيص

يمكن تخصيص الألوان بسهولة في:
- `app/globals.css` - متغيرات CSS الرئيسية
- `tailwind.config.ts` - إعدادات Tailwind

## 📄 الملفات الرئيسية

```
├── app/
│   ├── layout.tsx          # الملف الرئيسي للصفحة
│   ├── page.tsx            # الصفحة الرئيسية
│   └── globals.css         # الأنماط العامة
├── components/
│   ├── navbar.tsx          # شريط الملاحة
│   ├── hero.tsx            # قسم البطل
│   ├── solutions.tsx       # قسم الحلول
│   ├── features.tsx        # قسم الميزات
│   ├── contact-form.tsx    # نموذج الاتصال
│   └── footer.tsx          # الصفحة السفلية
└── package.json            # المشروع يعتمد
```

## 🔧 البنية التقنية

- Server Components للأداء الأفضل
- Framer Motion للرسوم المتحركة السلسة
- Tailwind مع دعم dark mode
- كود منظم وقابل للصيانة

## 📊 SEO

تم تحسين الصفحة لـ SEO:
- عناوين وصف واضحة
- Semantic HTML
- Meta tags مناسبة
- صور بدون تأثير الأداء

---

تم بناء الصفحة اتباعاً لمعايير enterprise مع استخدام أفضل الممارسات في التطوير الحديث.
