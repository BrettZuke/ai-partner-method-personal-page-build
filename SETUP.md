# Setup Guide

One-time setup. Takes 5 minutes. After this, building the site is fast.

---

## What you need

- **A computer** (Mac or Windows — these instructions are Mac-first; Windows steps in italics)
- **VS Code** — free code editor
- **Claude Code** — the AI extension that builds your site
- **GitHub account** — free, where your code lives
- **Vercel account** — free, where your site is hosted

---

## Step 1 — Install VS Code

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Click "Download for Mac" (or Windows)
3. Open the downloaded file and drag VS Code to Applications (Mac) / run installer (Windows)
4. Open VS Code

---

## Step 2 — Install Claude Code

1. In VS Code, click the **Extensions** icon in the left sidebar (looks like 4 squares, or press `Cmd + Shift + X`)
2. Search for: **Claude Code**
3. Click **Install** on the official Anthropic extension
4. After install, you'll see the Claude icon in the left sidebar — click it
5. Sign in with your Anthropic account
   - If you don't have one, sign up at [claude.ai](https://claude.ai) first

---

## Step 3 — Get this repo on your computer

### Easiest way (download as zip):

1. Click the green **Code** button at the top of this GitHub repo
2. Click **Download ZIP**
3. Unzip it
4. Move the folder to your **Desktop** (important — Vercel deploys easier from Desktop)
5. Rename the folder to your name, e.g. `alex-morgan-site`

### If you know git:

```bash
cd ~/Desktop
git clone https://github.com/BrettZuke/ai-partner-method-personal-page-build.git
mv ai-partner-method-personal-page-build alex-morgan-site
cd alex-morgan-site
```

---

## Step 4 — Open the folder in VS Code

1. Open VS Code
2. **File → Open Folder…**
3. Navigate to `Desktop/your-folder-name`
4. Click **Open**

You should see all the files in the left sidebar.

---

## Step 5 — Open Claude Code in this folder

1. Click the **Claude icon** in VS Code's left sidebar
2. Claude Code opens
3. You'll see a prompt input at the bottom

---

## Step 6 — Build your site

Type this exactly:

```
/build-my-site
```

Press Enter. Claude takes over from here.

Claude will:
1. Read its operating manual (`CLAUDE.md`)
2. Read the design reference
3. Ask you 7 questions
4. Build the site (3 files: `index.html`, `style.css`, `script.js`)
5. Show you a preview in your browser
6. Ask what to change
7. When you're happy, deploy to Vercel

---

## Step 7 — Set up GitHub (one time, before first deploy)

If you don't already have GitHub:

1. Go to [github.com](https://github.com)
2. Click **Sign up**
3. Pick a username (this becomes part of your repo URL — pick something professional)
4. Verify your email

When Claude is ready to push your site to GitHub, it'll ask for your username and walk you through creating the repo. You don't need to know git commands — Claude runs them.

---

## Step 8 — Set up Vercel (one time, before first deploy)

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign up**
3. Choose **Continue with GitHub** (simplest — connects automatically)
4. Authorize Vercel to read your GitHub repos

When Claude is ready to deploy, it'll walk you through:
1. Click "Add New Project"
2. Pick your repo from the list
3. Click "Deploy"
4. Wait 30 seconds. Your site is live.

Vercel gives you a URL like `your-name-site.vercel.app`. You can add a custom domain later for free.

---

## Optional — install git (only if you don't have it)

Most Macs have git pre-installed. To check, open **Terminal** and run:

```bash
git --version
```

If you see a version number, you're set.

If not (Mac):
```bash
xcode-select --install
```

If not (Windows):
Download from [git-scm.com](https://git-scm.com/download/win) and install with default settings.

---

## Optional — install Python (only if Claude says you need it)

If Claude wants to run a local preview and Python isn't available, install it:

**Mac:**
```bash
brew install python
```

(If you don't have Homebrew, install it first: [brew.sh](https://brew.sh))

**Windows:**
Download from [python.org](https://python.org/downloads) and install with "Add to PATH" checked.

---

## You're done

Now go back to the [README](./README.md) and start your first build.

If you get stuck at any step, paste the error into Claude — it'll fix it.
