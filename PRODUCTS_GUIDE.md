# 🛍️ How to Update Your Products

This guide shows you exactly how to update products on your Threads By Maa website.

---

## Quick Reference

### File Location
Edit this file: `app/page.jsx`

### Find This Section
Look for the `const products = [` line (around line 30)

---

## Product Template

Here's the format for each product:

```javascript
{
  id: 1,                        // Unique number (1, 2, 3, etc.)
  name: 'Product Name Here',    // What it's called
  price: '₹599',                // Price with rupee symbol
  image: '/images/photo.jpg',   // Path to image in public/images/
  category: 'Flowers',          // Category: Flowers, Gifting, Accessories, Seasonal
  color: 'Rose'                 // Available colors/variants
}
```

---

## Step-by-Step: Adding Your Products

### Step 1: Upload Product Images

1. Create folder: `public/images/`
2. Upload your product photos
3. File names: 
   - ✅ `flower-bouquet.jpg`
   - ✅ `rakhi-set-multicolor.jpg`
   - ❌ Don't use spaces or special characters

**Recommended:** 1200x800px JPG images, 200-300KB each

### Step 2: Update Products in Code

Open `app/page.jsx` and find:

```javascript
const products = [
  { id: 1, name: 'Crochet Flower Bouquet', price: '₹599', image: '🌸', category: 'Flowers', color: 'Rose' },
  { id: 2, name: 'Colorful Rakhi Set', price: '₹299', image: '🎀', category: 'Seasonal', color: 'Multi' },
  // ... more products
];
```

### Step 3: Replace with Your Products

Example - you have 6 products:

```javascript
const products = [
  {
    id: 1,
    name: 'Red Rose Crochet Bouquet',
    price: '₹699',
    image: '/images/rose-bouquet.jpg',
    category: 'Flowers',
    color: 'Red'
  },
  {
    id: 2,
    name: 'Multicolor Rakhi Set (Pack of 5)',
    price: '₹399',
    image: '/images/rakhi-set.jpg',
    category: 'Seasonal',
    color: 'Multi-color'
  },
  {
    id: 3,
    name: 'Cute Amigurumi Toys',
    price: '₹299',
    image: '/images/amigurumi-toy.jpg',
    category: 'Gifting',
    color: 'Random'
  },
  {
    id: 4,
    name: 'Crochet Butterfly Hair Clips (Pair)',
    price: '₹149',
    image: '/images/hair-clips.jpg',
    category: 'Accessories',
    color: 'Assorted'
  },
  {
    id: 5,
    name: 'Custom Bridal Crochet Bouquet',
    price: '₹1,499',
    image: '/images/bridal-bouquet.jpg',
    category: 'Flowers',
    color: 'Custom'
  },
  {
    id: 6,
    name: 'Wedding Favor Gift Box',
    price: '₹599',
    image: '/images/gift-box.jpg',
    category: 'Gifting',
    color: 'Multiple'
  },
];
```

### Step 4: Save and Deploy

```bash
git add .
git commit -m "Updated products"
git push origin main
```

Vercel will automatically redeploy! ✨

---

## Real Product Examples

### Example 1: Flower Bouquet

```javascript
{
  id: 1,
  name: 'Rose Garden Crochet Bouquet (12 stems)',
  price: '₹799',
  image: '/images/rose-garden-bouquet.jpg',
  category: 'Flowers',
  color: 'Red, Pink, Coral'
}
```

### Example 2: Rakhi Set

```javascript
{
  id: 7,
  name: 'Handmade Rakhi Set - Premium Collection',
  price: '₹599',
  image: '/images/premium-rakhi.jpg',
  category: 'Seasonal',
  color: 'Gold, Silver, Multicolor'
}
```

### Example 3: Gift Item

```javascript
{
  id: 8,
  name: 'Crochet Flower Bookmark - Perfect Gift',
  price: '₹199',
  image: '/images/bookmark.jpg',
  category: 'Gifting',
  color: 'Assorted Colors'
}
```

### Example 4: Hair Accessory

```javascript
{
  id: 9,
  name: 'Decorative Crochet Hair Pin',
  price: '₹149',
  image: '/images/hair-pin.jpg',
  category: 'Accessories',
  color: 'Multi'
}
```

---

## Product Categories

Use EXACTLY these names:

- `Flowers` - Crochet flowers, bouquets, arrangements
- `Gifting` - Gift sets, gift boxes, special occasion items
- `Accessories` - Hair clips, bookmarks, small items
- `Seasonal` - Rakhi, Diwali, holiday collections

---

## Pricing Tips

- Use rupee symbol: `₹599` (not Rs. 599)
- Include quantity in name if needed: "Pack of 5"
- Show value: "Hand-crafted Premium"
- Special items higher price (e.g., custom bouquets `₹1,499`)

---

## Image Tips

### Good Product Photos
✅ Clean, well-lit
✅ Show product details
✅ Lifestyle shot (in use)
✅ Multiple colors visible
✅ 1200x800px or larger

### Bad Photos
❌ Blurry or dark
❌ Too small
❌ Cluttered background
❌ Unflattering angles

### File Organization
```
public/
  └── images/
      ├── rose-bouquet.jpg
      ├── rakhi-set.jpg
      ├── amigurumi-toy.jpg
      ├── hair-clips.jpg
      └── ...more images
```

---

## How Customer Sees It

When someone visits your site:

1. They see all 6 products in a beautiful grid
2. They hover over a product → it highlights
3. They click "Inquire Now"
4. WhatsApp opens with pre-filled message:
   ```
   Hi! I'm interested in the "Red Rose Crochet Bouquet". 
   Can you tell me more about customization options 
   and delivery time?
   ```
5. You get the inquiry in your WhatsApp! 💬

---

## Making Changes

### Add a New Product
1. Add new product object to the array
2. Increment `id` (if last was 6, new is 7)
3. Update image path
4. Save, commit, push

### Update a Product
1. Find product in list
2. Change name, price, or image
3. Save, commit, push

### Remove a Product
1. Delete entire product object
2. Keep the curly braces balanced!
3. Save, commit, push

---

## Common Mistakes to Avoid

❌ **Missing image file**
- Check spelling: `/images/rose-bouquet.jpg`
- Not `/images/Rose-Bouquet.jpg` (case sensitive on Vercel)
- Not `public/images/` in the path

❌ **Wrong category name**
- Must be exactly: Flowers, Gifting, Accessories, or Seasonal
- Not "Flowers & Bouquets" or "Gift Items"

❌ **Missing comma**
```javascript
// ❌ WRONG (missing comma after first product)
{
  id: 1,
  name: 'Product 1'
}
{
  id: 2,
  name: 'Product 2'
}

// ✅ RIGHT
{
  id: 1,
  name: 'Product 1'
},
{
  id: 2,
  name: 'Product 2'
}
```

❌ **Using emoji instead of image path**
```javascript
// ❌ WRONG (for real products - keep emoji for now while testing)
image: '🌸'

// ✅ RIGHT
image: '/images/rose-bouquet.jpg'
```

---

## For Now: Testing with Emoji

Until you upload images, you can use emoji:

```javascript
{
  id: 1,
  name: 'Crochet Flower Bouquet',
  price: '₹599',
  image: '🌸',     // OK for testing
  category: 'Flowers',
  color: 'Rose'
}
```

Then when you have images, replace:
```javascript
image: '/images/rose-bouquet.jpg'  // Switch to real image
```

---

## Verification Checklist

Before pushing to production:

- [ ] All products have unique IDs (1, 2, 3...)
- [ ] All product names are descriptive
- [ ] All prices include ₹ symbol
- [ ] All images exist in `public/images/`
- [ ] All image paths are correct
- [ ] All categories are valid (Flowers, Gifting, Accessories, Seasonal)
- [ ] All color descriptions are accurate
- [ ] No missing commas between products
- [ ] Website loads without errors

---

## Getting Help

**Website not updating?**
1. Make sure you saved the file
2. Commit and push to GitHub
3. Wait 2-3 minutes for Vercel to rebuild
4. Clear browser cache (Ctrl+Shift+Delete)
5. Refresh the page

**Images not showing?**
1. Check file name spelling
2. Check file exists in `public/images/`
3. Rebuild and deploy

**Still stuck?**
- Check the error in browser console (F12)
- Compare with example above
- Make sure syntax is correct (commas, quotes, brackets)

---

## Next Steps

1. ✅ Add your 5-10 current products
2. ✅ Upload product images to `public/images/`
3. ✅ Update prices and descriptions
4. ✅ Commit and push
5. ✅ Test website
6. ✅ Share with friends!

---

**You're doing great! Each product you add makes your website more real and more powerful. 💪🧶**
