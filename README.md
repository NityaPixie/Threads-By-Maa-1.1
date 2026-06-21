# 🧶 Threads By Maa - Premium Handmade Crochet Website

A beautiful, modern, and SEO-optimized website for your handmade crochet brand with WhatsApp integration for orders.

## ✨ Features

- **Stunning Design** - Warm, premium, artisanal aesthetic inspired by RareYou
- **WhatsApp Integration** - All inquiries go directly to your WhatsApp
- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **SEO Optimized** - Meta tags, schema markup, and fast loading
- **Product Showcase** - Beautiful grid with hover animations
- **Seasonal Collections** - Pre-orders, limited editions, festive campaigns
- **About Section** - Tell your story and build customer trust
- **Mobile First** - Designed for India's mobile-first market
- **No Backend Needed** - Static site, deployed on Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- GitHub account (already have it!)
- Vercel account (already have it!)

### Installation

1. **Clone or create the repository:**
```bash
git clone <your-repo-url>
cd threads-by-maa
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run locally:**
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

4. **Build for production:**
```bash
npm run build
npm start
```

### Deployment to Vercel

1. Push code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy
5. Your site is live! 🎉

**Your domain:** https://threadsbymaa.com (after connecting domain)

---

## 📝 Customization Guide

### Update Your Products

Edit `app/page.jsx` and update the products array:

```javascript
const products = [
  { 
    id: 1, 
    name: 'Your Product Name', 
    price: '₹599', 
    image: '/images/product.jpg', // Add your image
    category: 'Flowers', 
    color: 'Rose' 
  },
  // ... more products
];
```

**Adding Images:**
1. Create `public/images/` folder
2. Upload your product photos
3. Use path: `/images/photo.jpg`

### Update Your WhatsApp Number

Find this line and update:
```javascript
const whatsappNumber = '6386188825'; // Change to your number
```

### Customize Colors

Change accent colors throughout (currently warm amber):
- `amber-600` → `rose-600` (pink)
- `amber-600` → `orange-500` (orange)
- `amber-600` → `yellow-500` (yellow)

### Update Brand Story

Edit the "Our Story" section with your actual story, background, and mom's contribution.

### Seasonal Collections

Update Rakhi and Diwali sections with your actual dates and offerings.

---

## 📱 Project Structure

```
threads-by-maa/
├── app/
│   ├── page.jsx           # Main home page
│   ├── layout.jsx         # Root layout
│   └── globals.css        # Global styles
├── public/
│   ├── images/            # Your product images
│   └── favicon.ico        # Your brand icon
├── next.config.js         # Next.js config
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── package.json           # Dependencies
├── .gitignore            # Git ignore rules
└── DEPLOYMENT_GUIDE.md   # Full setup guide
```

---

## 🎨 Design System

### Colors
- **Primary Accent:** `#D4935B` (Warm Gold)
- **Deep Text:** `#2C1F18` (Brown)
- **Background:** `#F5EDE4` (Cream)
- **Secondary:** `#A8836D` (Taupe)

### Typography
- **Headings:** Playfair Display (serif, elegant)
- **Body:** Inter (clean, readable)
- **Accents:** Quicksand (handmade feel)

### Spacing
- Standard: 4px units (Tailwind)
- Sections: 80-120px padding
- Cards: 24px padding

---

## 🔍 SEO Tips

### Keyword Targets
- "handmade crochet flowers Delhi"
- "custom crochet gifts India"
- "artisanal crochet bouquets"
- "premium handmade gifts"
- "Rakhi crochet designs"

### How to Improve Rankings

1. **Add a Blog** (future enhancement)
   - Write about crochet care tips
   - Share your crafting process
   - Target keyword-rich content

2. **Build Backlinks**
   - Submit to local Delhi directories
   - Get featured in handmade/craft blogs
   - Social media links to website

3. **Local SEO**
   - Create Google Business Profile
   - Add your New Delhi location
   - Encourage customer reviews

4. **Social Integration**
   - Link Instagram profile
   - Share blog posts on social
   - Use consistent hashtags

---

## 💡 Tips for Success

### Content
- [ ] Upload 10-15 high-quality product images
- [ ] Write detailed product descriptions
- [ ] Share your crafting story
- [ ] Collect customer testimonials
- [ ] Add pricing for all items

### Marketing
- [ ] Share website link on Instagram
- [ ] Create seasonal campaigns (Rakhi, Diwali)
- [ ] Build email list (add newsletter signup)
- [ ] Partner with lifestyle bloggers
- [ ] Run Google ads targeting keywords

### Customer Service
- [ ] Respond to WhatsApp inquiries within 2 hours
- [ ] Share product videos showing craftsmanship
- [ ] Offer customization services
- [ ] Build repeat customer relationships
- [ ] Ask for reviews after delivery

---

## 📊 Analytics

Add Google Analytics (optional but recommended):

1. Create Google Analytics account
2. Get your Measurement ID
3. Add to `app/layout.jsx`:
```jsx
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
```

This helps you see:
- How many people visit
- Which products are popular
- Where visitors come from
- How long they spend on site

---

## 🛠️ Advanced Features (Future)

Want to add later?
- Email newsletter signup
- Customer reviews/ratings
- Blog section
- Product filtering
- Wishlist functionality
- Payment integration (Razorpay)
- Inventory management

All of these can be added without changing the current design!

---

## 📞 Support

- **WhatsApp Number:** 6386188825
- **Domain:** threadsbymaa.com
- **GitHub:** Your repository
- **Hosting:** Vercel

---

## 📄 License

This website is custom-built for Threads By Maa. All design and code are proprietary.

---

## 🎯 Your Journey

```
Week 1: Setup website, add 10 products
Week 2: Launch! Start getting inquiries
Week 3: Optimize based on customer feedback
Week 4: Plan seasonal campaigns
Month 2: Expand product range, build social
Month 3: Hit first 100 customers! 🎉
```

---

## 💪 You've Got This!

Remember: This website is just the beginning. The real magic happens when you respond to inquiries quickly, deliver amazing handmade products, and build relationships with customers.

Your story + Your craft + This beautiful website = 🚀 Success!

---

**Created with ❤️ for Threads By Maa**
**Last Updated: June 2026**
