# 🚀 Complete Setup Guide: GitHub → Vercel (For Beginners)

Your complete **threads-by-maa** folder is ready! Here's exactly how to get it live in 15 minutes.

---

## 📋 What You Need (Free!)

1. **GitHub Account** - https://github.com/signup (free)
2. **Vercel Account** - https://vercel.com/signup (free, linked to GitHub)
3. **Your Folder** - Download `threads-by-maa` from Claude outputs
4. **Git installed** - https://git-scm.com/download (free)

---

## ✅ PART 1: Create GitHub Repository (3 minutes)

### Step 1: Go to GitHub and Sign Up/Login
- Visit https://github.com
- Click "Sign Up" or "Sign In"
- Create account or login with email

### Step 2: Create New Repository
1. Click **+** (top-right) → **New repository**
2. Fill in details:
   - **Repository name:** `threads-by-maa`
   - **Description:** "Handmade crochet website"
   - **Public** (selected by default - good!)
   - ✅ Check "Add a README file"
   - Click **Create repository**

You now have an empty GitHub repository! ✅

### Step 3: Get Clone URL
1. On your new repo page, click **<> Code** (green button)
2. Copy the HTTPS URL (should look like: `https://github.com/YOUR_USERNAME/threads-by-maa.git`)
3. Save this somewhere - you'll need it!

---

## 💻 PART 2: Upload Files to GitHub (5 minutes)

### Option A: Using GitHub Desktop (EASIEST - Recommended for beginners)

#### Download GitHub Desktop
1. Go to https://desktop.github.com
2. Download and install (for Mac or Windows)
3. Sign in with your GitHub account

#### Upload Your Folder
1. Open **GitHub Desktop**
2. Click **File** → **Clone Repository**
3. Paste your repository URL (from Step 3 above)
4. Click **Choose** and select where to save (e.g., Desktop)
5. Click **Clone**

A new folder `threads-by-maa` will appear on your desktop!

#### Add Your Files
1. **Drag and drop** all files from the `threads-by-maa` folder I gave you into this new folder
   - Everything: package.json, app/, public/, etc.
   - Overwrite the README.md if asked

2. Go back to **GitHub Desktop**
3. You'll see all files listed (they should be blue/highlighted)
4. Bottom left, enter a message: `"Initial commit: Add Threads by Maa website"`
5. Click **Commit to main**
6. Click **Publish branch** (top right)

**Done!** Your files are now on GitHub! ✅

---

### Option B: Using Terminal/Command Line (For tech-savvy)

```bash
# Navigate to Desktop
cd Desktop

# Clone the repository
git clone https://github.com/YOUR_USERNAME/threads-by-maa.git

# Go into the folder
cd threads-by-maa

# Copy all your files from the threads-by-maa folder here
# (package.json, app/, public/, etc.)

# Add all files
git add .

# Commit with message
git commit -m "Initial commit: Add Threads by Maa website"

# Push to GitHub
git push origin main
```

Done! ✅

---

## 🌐 PART 3: Deploy to Vercel (5 minutes)

### Step 1: Sign Up for Vercel
1. Go to https://vercel.com
2. Click **Sign Up**
3. Click **Continue with GitHub**
4. Authorize Vercel to access your GitHub

### Step 2: Import Your Repository
1. After signing in, you'll see a dashboard
2. Click **New Project** or **Add New...**
3. Click **Import Git Repository**
4. Search for: `threads-by-maa`
5. Click on your repository to select it
6. Click **Import**

### Step 3: Configure Project
1. **Framework Preset:** Select `Next.js` (it auto-detects!)
2. **Root Directory:** Leave blank (it auto-detects!)
3. **Build Command:** Leave default
4. **Environment Variables:** Leave empty (skip for now)
5. Click **Deploy**

**Vercel will now build and deploy your site!** ⏳ (Takes 2-3 minutes)

### Step 4: Your Site is Live!
1. Wait for the deployment to finish (you'll see a checkmark)
2. Click **Visit** to see your live website!
3. You'll get a URL like: `https://threads-by-maa-xxxxx.vercel.app`

**Congratulations! Your website is LIVE!** 🎉

---

## 🎯 Connect Your Domain (Optional but Recommended)

You already have `www.threadsbymaa.com` - let's connect it!

### In Vercel:
1. Go to your project
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter: `threadsbymaa.com`
5. Follow the DNS instructions
6. Your domain will connect in a few minutes

Now your site is at: **https://www.threadsbymaa.com** ✅

---

## 📝 Next: Add Your Products

Once deployed, edit your products:

1. **Go to your GitHub repository**
2. Click on **app/page.jsx**
3. Click the **Edit** (pencil icon)
4. Find the `const products = [` section
5. **Replace the sample products with YOUR products** (see PRODUCTS_GUIDE.md)
6. Scroll down → Click **Commit changes**
7. Add a message: `"Update products"`
8. Click **Commit**

**Vercel will auto-redeploy!** Changes go live in 30 seconds! 🚀

---

## 🆘 Troubleshooting

### "I can't find my files on GitHub"
- Go to https://github.com/YOUR_USERNAME/threads-by-maa
- Click **<> Code** → **HTTPS**
- Make sure you're logged in

### "Deployment failed"
- Go to Vercel → Your project → **Deployments**
- Click on the failed deployment
- Scroll down to see the error
- Common fix: Make sure all files are there (check GitHub)

### "Website shows error"
- Vercel is still building (wait 2 minutes)
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh page

### "Domain not connecting"
- Wait 24-48 hours for DNS to update
- Check you used correct domain at Vercel → Settings → Domains

---

## 📱 Test Your Site

After deployment, test on:
1. **Desktop** - Open the Vercel URL in browser
2. **Mobile** - Open same URL on your phone
3. **WhatsApp** - Click "Chat Now" button - should open WhatsApp with your number

Everything working? Perfect! ✅

---

## 🔄 Updating Your Website (Future)

Every time you want to make changes:

**Using GitHub Desktop:**
1. Edit files in your computer folder
2. Open GitHub Desktop
3. You'll see changes listed
4. Write a message (e.g., "Update Rakhi prices")
5. Click **Commit to main**
6. Click **Push origin**
7. Vercel auto-deploys! (30 seconds)

**Using Web Editor:**
1. Go to GitHub.com → Your repo
2. Click file → Click edit (pencil icon)
3. Make changes
4. Commit changes
5. Vercel auto-deploys!

---

## ✨ Your Success Checklist

- [ ] Created GitHub account
- [ ] Created GitHub repository named `threads-by-maa`
- [ ] Downloaded GitHub Desktop
- [ ] Cloned repository to computer
- [ ] Copied all files to the cloned folder
- [ ] Committed and pushed files to GitHub
- [ ] Created Vercel account
- [ ] Imported repository to Vercel
- [ ] Clicked Deploy
- [ ] Waited for deployment to finish
- [ ] Visited your live site
- [ ] Added products (PRODUCTS_GUIDE.md)
- [ ] Tested WhatsApp button
- [ ] Shared with friends!

---

## 🎯 What Happens Next

```
RIGHT NOW:
You upload files → GitHub stores them

VERCEL SEES:
"New files on GitHub!" → Vercel builds website

YOU GET:
Live website at threadsbymaa.com ✨

NEXT TIME YOU EDIT:
Edit files → Push to GitHub → Vercel rebuilds → Site updates (30 sec)
```

Fully automated! No manual deploys needed!

---

## 💪 You've Got This!

**Timeline:**
- **Now:** Follow this guide (15 minutes)
- **In 15 mins:** Website is live!
- **Today:** Add your products
- **Tomorrow:** Share link with friends
- **This week:** First customers ordering!

---

## 📞 Quick Reference

| What | Where |
|------|-------|
| Edit code | GitHub.com or GitHub Desktop |
| Deploy changes | Automatic when you push to GitHub |
| View live site | Your Vercel URL or www.threadsbymaa.com |
| See errors | Vercel → Deployments → Click failed build |
| Add products | Edit app/page.jsx → see PRODUCTS_GUIDE.md |

---

## 🎉 Final Words

You're about to:
1. ✅ Launch a professional website
2. ✅ Start getting WhatsApp orders
3. ✅ Build your crochet brand
4. ✅ Reach customers in Delhi and beyond

**All from a simple folder of files!**

The setup is the hardest part. Once it's done, updating is super easy.

Let's go! 🚀🧶💕

---

**Made with ❤️ for Threads By Maa**

Got stuck? Re-read the section, Google the error, or ask in Reddit r/nextjs or GitHub discussions.

You're going to succeed! 💪
