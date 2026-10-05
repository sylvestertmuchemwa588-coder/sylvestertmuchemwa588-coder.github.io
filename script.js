// ST Web & Innovation V5
// Replace this with your real WhatsApp number.
// South African international format: 27XXXXXXXXX (no +, spaces or brackets)
const ST_WHATSAPP_NUMBER = "o629133037";
const menuToggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const packages={"Barbershop":"R3,500 — Barbershop","Mobile / Phone Shop":"R4,000 — Mobile / Phone Shop","Restaurant":"R4,000 — Restaurant","Automotive":"R4,500 — Automotive","Engineering":"R5,000 — Engineering","General Business":"R3,500 — General Business","Custom / Advanced":"From R6,000 — Custom / Advanced"};
const typeSelect=document.getElementById('businessType'),packageSelect=document.getElementById('packagePrice');
document.querySelectorAll('.business-card').forEach(card=>card.querySelector('.select-btn').addEventListener('click',()=>{const type=card.dataset.type;typeSelect.value=type;packageSelect.value=packages[type]||'';document.getElementById('request').scrollIntoView({behavior:'smooth'});}));
document.getElementById('websiteForm').addEventListener('submit',e=>{e.preventDefault();const v=id=>document.getElementById(id).value.trim();const message=`ST WEB & INNOVATION
NEW WEBSITE REQUEST

CLIENT INFORMATION
Name: ${v('clientName')}
WhatsApp: ${v('clientPhone')}

BUSINESS
Business name: ${v('businessName')}
Business type: ${v('businessType')}

WEBSITE PACKAGE
${v('packagePrice')}

BUSINESS INFORMATION
Location: ${v('location')||'Not provided'}
Opening hours: ${v('hours')||'Not provided'}

PAGES NEEDED
${v('pages')||'Not provided'}

SERVICES / PRODUCTS
${v('services')||'Not provided'}

REQUESTED FEATURES
${v('features')||'Not provided'}

LOGO / PHOTOS
${v('assets')}

ADDITIONAL REQUIREMENTS
${v('description')||'Not provided'}

I would like to discuss this website project with ST Web & Innovation.`;window.open(`https://wa.me/${ST_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank');});
const quick=encodeURIComponent('Hi ST Web & Innovation, I would like to ask about getting a website for my business.');['navWhatsApp','heroWhatsApp','footerWhatsApp'].forEach(id=>{const el=document.getElementById(id);if(el)el.href=`https://wa.me/${ST_WHATSAPP_NUMBER}?text=${quick}`;});document.getElementById('year').textContent=new Date().getFullYear();
