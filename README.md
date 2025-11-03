<div align="center">

![ScayCute Logo](cute-cat.jpg)

# 🐾 ScayCute

**The Ultimate Cute-to-Scary Prank Web Application**  
*Modern • Interactive • Freaky • Fun*

[![Features](https://img.shields.io/badge/Features-Modern%20UI-blueviolet?style=for-the-badge&logo=ghost)](https://github.com/Scayar/ScayCute#-features)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](https://github.com/Scayar/ScayCute/blob/main/LICENSE)
[![Python](https://img.shields.io/badge/Python-3.8+-brightgreen?style=for-the-badge&logo=python)](https://www.python.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.info/)

[⭐ Star](https://github.com/Scayar/ScayCute/stargazers) • [🐛 Report Bug](https://github.com/Scayar/ScayCute/issues) • [💡 Request Feature](https://github.com/Scayar/ScayCute/issues)

---

</div>

## 📖 Table of Contents

- [📝 About](#-about)
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [📸 Screenshots](#-screenshots)
- [🏗️ Project Structure](#️-project-structure)
- [🔧 Installation](#-installation)
- [🎮 Usage](#-usage)
- [🎨 Advanced Configuration](#-advanced-configuration)
- [🏗️ Architecture Flow](#️-architecture-flow)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👤 Credits](#-credits)

---

## 📝 About

**ScayCute** is a modern, fully-responsive web application that combines deceptive charm with unexpected horror. It starts with an innocent, adorable cat interface but quickly transforms into a startling experience featuring animated device information displays, glitch effects, and jump scares.

### 🎯 Purpose
Perfect for:
- **Pranks & fun** with friends
- **Educational purposes** - learning web technologies
- **Creative UX/UI experiments**
- **Demonstrating responsive design**
- **Understanding browser APIs**

---

## ✨ Features

### 🎨 Frontend
- **🌈 Glassmorphic Design** - Modern glassmorphism UI with backdrop blur effects
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **🎭 Glitch Effects** - Animated text glitches and flicker animations
- **🎬 Jump Scare System** - Randomized scary face overlays with audio
- **⚡ Smooth Transitions** - CSS animations and fade effects

### 🔧 Backend
- **🐍 FastAPI Server** - Optional Python backend for advanced deployment
- **🌐 Static Hosting** - Works with any static file server
- **🔌 API Integration** - Optional IP geolocation and Telegram notifications

### 🛡️ Privacy & Security
- **🔒 100% Offline Mode** - Works without any APIs or external services
- **⚙️ Optional APIs** - Only when you explicitly configure them
- **🔐 No Data Collection** - Respects user privacy by default

### 📊 Device Information Display
- IP Address & Location (with API)
- Device Type (Mobile/Tablet/Desktop)
- Browser & Operating System
- Screen Resolution
- Language & Timezone
- Memory & CPU Cores
- Cookies & Referrer Information

---

## 🚀 Quick Start

### Prerequisites
- **Python 3.8+** (optional, for FastAPI server)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Option 1: Simple Python Server (Recommended for Beginners)
```bash
# Clone the repository
git clone https://github.com/Scayar/ScayCute.git
cd ScayCute

# Start the server
python -m http.server 8000 --bind 0.0.0.0

# Open in browser
# Visit: http://localhost:8000
```

### Option 2: FastAPI Server (For Production)
```bash
# Clone the repository
git clone https://github.com/Scayar/ScayCute.git
cd ScayCute

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn main:app --host 0.0.0.0 --port 8000

# Open in browser
# Visit: http://localhost:8000
```

### Option 3: Static Hosting
Simply upload all files to any static hosting service like:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

---

## 📸 Screenshots

<table align="center">
  <tr>
    <td align="center"><b>Landing Page</b></td>
    <td align="center"><b>Scary Reveal</b></td>
    <td align="center"><b>Telegram Alert</b></td>
  </tr>
  <tr>
    <td><img src="cat-landing.png" alt="Landing Page" width="100%"></td>
    <td><img src="scary-info.png" alt="Scary Info Page" width="100%"></td>
    <td><img src="telegram-example.png" alt="Telegram Example" width="100%"></td>
  </tr>
</table>

---

## 🏗️ Project Structure

```
ScayCute/
├── 📄 index.html          # Landing page with cute cat
├── 📄 scary.html          # Scary reveal page
├── 🎨 style.css           # All styles and animations
├── ⚙️ script.js           # Core functionality and logic
├── 🐍 main.py             # FastAPI server (optional)
├── 📋 requirements.txt    # Python dependencies
├── 🖼️ cute-cat.jpg        # Landing page background
├── 🎬 scary-video.mp4     # Background video
├── 🔊 scary-audio.mp3     # Scary sound effects
├── 📸 cat-landing.png     # Screenshot assets
├── 📸 scary-info.png      # Screenshot assets
├── 📸 telegram-example.png # Screenshot assets
├── 📝 README.md           # This file
└── 📜 LICENSE             # MIT License
```

---

## 🔧 Installation

### Detailed Setup Instructions

1. **Clone Repository**
   ```bash
   git clone https://github.com/Scayar/ScayCute.git
   cd ScayCute
   ```

2. **For Python Server** (Optional)
   ```bash
   # Create virtual environment (recommended)
   python -m venv venv
   
   # Activate virtual environment
   # Windows:
   venv\Scripts\activate
   # Linux/Mac:
   source venv/bin/activate
   
   # Install dependencies
   pip install -r requirements.txt
   ```

3. **Configure** (Optional - for API features)
   - Edit `script.js` and add your API keys (see Advanced Configuration)

4. **Run**
   ```bash
   # Simple server
   python -m http.server 8000
   
   # Or FastAPI
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```

---

## 🎮 Usage

### Basic Usage
1. Start the server
2. Open `http://localhost:8000` in your browser
3. Click the button on the landing page
4. Watch the magic happen! 👻

### Sharing with Friends
Use **ngrok** to create a public URL:

```bash
# Install ngrok from https://ngrok.com/download
ngrok http 8000

# Share the public URL it provides
# Example: https://abc123.ngrok.io
```

---

## 🎨 Advanced Configuration

### Enable IP Geolocation & Telegram Alerts

1. **Get API Keys:**
   - [ipgeolocation.io](https://ipgeolocation.io/) - For location data
   - [Telegram Bot](https://core.telegram.org/bots/tutorial) - For notifications

2. **Edit `script.js`** - Add your keys at the top:
   ```javascript
   const IPGEOLOCATION_API_KEY = "YOUR_API_KEY_HERE";
   const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE";
   const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE";
   ```

3. **Save and refresh** - Now features will work!

### Customization Options

#### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --main-bg: #181818;
    --accent: #ff003c;        /* Main accent color */
    --glitch1: #ff003c;       /* Glitch effect color 1 */
    --glitch2: #00fff7;       /* Glitch effect color 2 */
}
```

#### Modify Jump Scare Timing
In `script.js`, find:
```javascript
}, 5000 + Math.random() * 4000); // Random delay between 5-9s
```

---

## 🏗️ Architecture Flow

### User Interaction Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    🐱 Landing Page                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │           [Cute Cat Background]                     │   │
│  │                                                      │   │
│  │            ┌────────────────────┐                   │   │
│  │            │                    │                   │   │
│  │            │   [Click Here]     │  ← User Clicks    │   │
│  │            │                    │                   │   │
│  │            └────────────────────┘                   │   │
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│            💫 Transition Effect (600ms)                     │
│                 • Fade out animation                        │
│                 • Check for API keys                        │
│                 • Optional: Fetch IP data                   │
│                 • Optional: Send Telegram alert             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                  👻 Scary Reveal Page                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  • Animated background video                         │   │
│  │  • Device information display                        │   │
│  │  • Glitch effects on text                            │   │
│  │  • Flickering warnings                               │   │
│  └──────────────────────────────────────────────────────┘   │
│                              │                               │
│                              ▼                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Random Jump Scare (5-9 seconds)              │   │
│  │  • Red flash overlay                                 │   │
│  │  • Scary face popup                                  │   │
│  │  • Loud audio scream                                 │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Technical Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Frontend Stack                      │
├─────────────────────────────────────────────────────────┤
│  HTML5         │ Semantic markup, structure              │
│  CSS3          │ Glassmorphism, animations, responsive   │
│  JavaScript    │ DOM manipulation, fetch API, timing     │
└─────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
        ┌───────────▼───────────┐    ┌─▼──────────────────┐
        │   Simple HTTP Server  │    │ FastAPI Server     │
        │   (Python/Python Any) │    │ (Production Ready) │
        └───────────────────────┘    └───────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
        ┌───────────▼────────────┐   ┌─▼───────────────────┐
        │  ipgeolocation.io      │   │ Telegram Bot API    │
        │  (Optional External)   │   │ (Optional External) │
        └────────────────────────┘   └────────────────────┘
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Contributing Guidelines

1. **Fork the Repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make Your Changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test on multiple browsers

4. **Commit Changes**
   ```bash
   git commit -m "Add: Amazing new feature"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/AmazingFeature
   # Then create Pull Request on GitHub
   ```

### Code Style
- Use consistent indentation (spaces, not tabs)
- Add comments for complex sections
- Keep functions modular and reusable
- Test on Chrome, Firefox, and Safari

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Permissions:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

**Limitations:**
- ❌ Liability
- ❌ Warranty

---

## 👤 Credits

### Author

**Scayar**

<div align="center">

🌐 **Website:** [Scayar.com](https://scayar.com)

📧 **Email:** [Scayar.exe@gmail.com](mailto:Scayar.exe@gmail.com)

💬 **Telegram:** [@im_scayar](https://t.me/im_scayar)

☕️ **Support:** [Buy Me a Coffee](https://www.buymeacoffee.com/scayar)

</div>

---

<div align="center">

### ⭐ Star this Repository if you found it helpful!

**Made with ❤️ by [Scayar](https://scayar.com) for fun and learning!**

[⬆ Back to Top](#-scaycute)

</div>
