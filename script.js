/* ============================================================
   CONFIGURACIÓN — edita solo esta sección para cambiar datos
   ============================================================ */
const CONFIG = {
  mapa: "https://maps.app.goo.gl/8eTKWrLWoKEeuajY7?g_st=ac",            // enlace de Google Maps
  whatsapp: "51966254191",                                             // número con código de país, sin + ni espacios
  mensajeWhatsapp: "Hola, Nelly. Muchas gracias por la invitación. Confirmo mi asistencia a tu celebración de cumpleaños.",
  volumen: 0.6,                                                        // música: 0 a 1
  // GALERÍA: guarda tus fotos en assets/ con estos nombres (o añade líneas). Las que no existan se omiten.
  galeria: ["assets/galeria-1.jpg","assets/galeria-2.jpg","assets/galeria-3.jpg", "assets/galeria-4.jpg"]
};

/* ============================================================
   DECORACIÓN FLORAL — ajusta aquí flores y ramas
   Cada línea: [sección, {c: composición (esq, esq2, lat, lat2), w: ancho en px, css: posición, fx/fy: voltear, s: variante, v: parallax}]
   Para quitar una flor borra su línea; para mover, cambia css (right/left/top/bottom).
   ============================================================ */
const DECOR = [
  // PORTADA: composición protagonista en esquinas opuestas + laterales; el centro queda libre para foto y nombre
  ['.portada',  {c:'esq', w:235,css:'right:-42px;top:-48px',s:1}],
  ['.portada',  {c:'esq2',w:215,css:'left:-10px;bottom:-52px',fx:1,fy:0,s:1}],
  ['.portada',  {c:'lat', w:90,css:'left:-42px;top:25%',fx:1,s:0}],
  ['.portada',  {c:'lat2',w:140,css:'right:-68px;top:54%',s:15}],
  // MENSAJE
  ['.mensaje',  {c:'esq', w:250,css:'right:-58px;top:-25px',s:3,v:.05}],
  ['.mensaje',  {c:'esq2',w:215,css:'left:-68px;bottom:-20px',fx:1,fy:1,s:4,v:.05}],
  ['.mensaje',  {c:'lat2',w:165,css:'right:-62px;top:46%',s:16,v:.07}],
  // EVENTO: fuera del panel, solapando solo sus esquinas
  ['.evento',   {c:'esq2',w:225,css:'left:-38px;top:-6px',fx:1,s:5}],
  ['.evento',   {c:'esq', w:225,css:'right:-38px;bottom:-6px',fy:1,s:6}],
  // CONFIRMACIÓN
  ['.confirma', {c:'esq', w:200,css:'right:-48px;top:-18px',s:7}],
  ['.confirma', {c:'lat', w:165,css:'left:-62px;top:30%',fx:1,s:8,v:.07}],
  ['.confirma', {c:'lat2',w:165,css:'right:-62px;bottom:4%',s:17,v:.07}],
  // PUNTUALIDAD
  ['.puntual',  {c:'esq2',w:205,css:'right:-50px;top:-8px',s:9}],
  ['.puntual',  {c:'esq', w:195,css:'left:-50px;bottom:-8px',fx:1,fy:1,s:10}],
  // GALERÍA
  // DESPEDIDA: la composición más abundante
  ['.despedida',{c:'esq2',w:320,css:'left:-70px;bottom:-150px',fx:1,fy:0,s:12}],
  ['.despedida',{c:'esq', w:320,css:'right:-70px;bottom:-150px',fy:0,s:13}],
  ['.despedida',{c:'lat', w:150,css:'left:-70px;top:3%',fx:1,s:19}],
  // REGALO
['.regalo', {c:'esq2',w:190,css:'left:-35px;top:0px',fx:1,s:20}],
['.regalo', {c:'esq',w:190,css:'right:-35px;bottom:0px',fy:1,s:21}],
];
// Composiciones: k = tipo (peonia | rosa | camelia | capullo), x,y = posición y r = tamaño (fracción del ancho),
// p = paleta (vino | rosa | camelia). Cambia aquí qué flores lleva cada arreglo.
const COMP = {
  esq: {w:300,h:290,fl:[{k:'peonia',x:.76,y:.2,r:.27},{k:'rosa',x:.46,y:.4,r:.17,p:'rosa'},{k:'camelia',x:.9,y:.62,r:.13},{k:'capullo',x:.3,y:.64,r:.07,rot:-35},{k:'capullo',x:.64,y:.7,r:.06,rot:25}]},
  esq2:{w:300,h:290,fl:[{k:'rosa',x:.78,y:.2,r:.26},{k:'peonia',x:.48,y:.38,r:.18,p:'rosa'},{k:'camelia',x:.7,y:.72,r:.12},{k:'capullo',x:.28,y:.6,r:.06,rot:-20}]},
  lat: {w:180,h:420,fl:[{k:'peonia',x:.62,y:.13,r:.27},{k:'rosa',x:.5,y:.43,r:.2,p:'rosa'},{k:'camelia',x:.64,y:.72,r:.17},{k:'capullo',x:.3,y:.3,r:.06,rot:-30},{k:'capullo',x:.3,y:.88,r:.05,rot:15}]},
  lat2:{w:180,h:420,fl:[{k:'camelia',x:.62,y:.13,r:.24},{k:'peonia',x:.5,y:.42,r:.24,p:'rosa'},{k:'rosa',x:.66,y:.76,r:.18},{k:'capullo',x:.28,y:.58,r:.06,rot:25}]}
};

/*GEN-START*/
// ---- Ilustración floral estilo acuarela / Art Nouveau generada en SVG (no necesitas tocar) ----
const rng=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const bez=(p,t)=>{const u=1-t,a=u*u*u,b=3*u*u*t,c=3*u*t*t,d=t*t*t;return[a*p[0]+b*p[2]+c*p[4]+d*p[6],a*p[1]+b*p[3]+c*p[5]+d*p[7]]};
const f1=n=>n.toFixed(1);
// Degradados de pigmento (3 tonos por paleta: 0 interior oscuro, 1 medio, 2 exterior claro) + filtro acuarela
function defs(){
  const P={
  vino:[
    ['#3b0010','#680018','#900d2d'],
    ['#500014','#85001f','#b0183b'],
    ['#70001c','#a80d32','#c92b4b']
  ],
  rosa:[
    ['#570018','#85001f','#a81735'],
    ['#76001e','#a80d32','#c52b4b'],
    ['#940d30','#bd2447','#d94b63']
  ],
  camelia:[
    ['#650018','#970b2c','#bd2447'],
    ['#82001e','#b51b3c','#d13b58'],
    ['#a51636','#cb3452','#e45b70']
  ]
};
  let s='';
  for(const k in P)P[k].forEach((c,i)=>{s+=`<radialGradient id="g${k}${i}" cx=".5" cy="1.05" r="1.1"><stop offset="0" stop-color="${c[0]}" stop-opacity=".95"/><stop offset=".55" stop-color="${c[1]}" stop-opacity=".9"/><stop offset="1" stop-color="${c[2]}" stop-opacity=".8"/></radialGradient>`});
  [['hs','#7f9a76','#bcd0ac'],['ho','#56622f','#8d9c55'],['hv','#35603a','#77a064']].forEach(([id,a,b])=>{s+=`<linearGradient id="${id}"><stop offset="0" stop-color="${a}" stop-opacity=".95"/><stop offset="1" stop-color="${b}" stop-opacity=".88"/></linearGradient>`});
  return s+'<filter id="wc" x="-15%" y="-15%" width="130%" height="130%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="2" seed="7" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="7" xChannelSelector="R" yChannelSelector="G" result="d"/><feDropShadow in="d" dx="0" dy="3" stdDeviation="3.5" flood-color="#3a0510" flood-opacity=".3"/></filter>';
}
// Pétalo orgánico (apunta hacia arriba) con borde superior ondulado e irregular
function pet(L,W,rd,ruf){
  const j=()=>(rd()-.5)*.18;
  let d=`M0 0C${f1(-W*.6)} ${f1(-L*.12)} ${f1(-W*(1.1+j()))} ${f1(-L*.5)} ${f1(-W*.85)} ${f1(-L*.82)}`;
  const m=4;
  for(let i=0;i<m;i++){const x0=-.85+1.7*i/m,x1=-.85+1.7*(i+1)/m;d+=`Q${f1((x0+x1)/2*W)} ${f1(-L*(1.05+ruf*(rd()-.3)))} ${f1(x1*W)} ${f1(-L*(.9+ruf*(rd()-.5)*.6))}`}
  return d+`C${f1(W*(1.1+j()))} ${f1(-L*.5)} ${f1(W*.6)} ${f1(-L*.12)} 0 0Z`;
}
const CFG={peonia:{L:[1,.82,.64,.46,.3],N:[5,6,6,5,4],w:.56,ruf:.1},rosa:{L:[1,.8,.6,.4,.22],N:[5,5,4,3,2],w:.5,ruf:.05},camelia:{L:[1,.78,.58],N:[5,5,5],w:.62,ruf:.03}};
function flor(f,rd){
  const R=f.r,k=f.k,pal=f.p||(k==='camelia'?'camelia':'vino'),c=CFG[k],n=c.L.length;
  let g='';
  c.L.forEach((s,l)=>{
    const tone=Math.max(0,Math.min(2,Math.round(2*(1-l/(n-1)))+(rd()<.25?(rd()<.5?-1:1):0))),off=l*37+rd()*40;
    for(let i=0;i<c.N[l];i++){
      const a=off+i*360/c.N[l]+(rd()-.5)*16,L=R*s*(.9+rd()*.2),W=L*c.w*(.9+rd()*.2),d=pet(L,W,rd,c.ruf);
      g+=`<g transform="rotate(${f1(a)}) translate(0 ${f1(-(n-l-1)*R*.02)})"><path d="${d}" fill="url(#g${pal}${tone})" stroke="#4a0818" stroke-opacity=".28" stroke-width="1.1"/><path d="${d}" fill="none" stroke="#fff1e6" stroke-opacity=".28" stroke-width=".7" transform="scale(.94)"/>`;
      if(l<2||k==='camelia')g+=`<path d="M0 ${f1(-L*.1)}Q${f1(W*.12)} ${f1(-L*.5)} 0 ${f1(-L*.86)}M${f1(-W*.35)} ${f1(-L*.25)}Q${f1(-W*.3)} ${f1(-L*.55)} ${f1(-W*.12)} ${f1(-L*.82)}M${f1(W*.35)} ${f1(-L*.25)}Q${f1(W*.3)} ${f1(-L*.55)} ${f1(W*.12)} ${f1(-L*.82)}" fill="none" stroke="${k==='camelia'?'#b83a56':'#d2a85a'}" stroke-opacity="${k==='camelia'?.35:.5}" stroke-width=".7"/>`;
      g+='</g>';
    }
  });
  if(k==='camelia'){for(let i=0;i<30;i++){const a=i*.21+rd()*.2,d=R*(.1+rd()*.12);g+=`<path d="M0 0L${f1(Math.cos(a)*d)} ${f1(Math.sin(a)*d)}" stroke="#d2a85a" stroke-width=".9"/><circle cx="${f1(Math.cos(a)*d)}" cy="${f1(Math.sin(a)*d)}" r="${f1(R*.012+.4)}" fill="#f0cf7e"/>`}}
  else{g+=`<circle r="${f1(R*.07)}" fill="#3a0612" opacity=".85"/>`;for(let i=0;i<9;i++){const a=rd()*6.28,d=R*.09*rd();g+=`<circle cx="${f1(Math.cos(a)*d)}" cy="${f1(Math.sin(a)*d)}" r=".9" fill="#e0b860"/>`}}
  return `<g transform="translate(${f1(f.x)} ${f1(f.y)}) rotate(${f1(rd()*360)})">${g}</g>`;
}
function capullo(f,rd){
  const L=f.r,W=L*.4;
  return `<g transform="translate(${f1(f.x)} ${f1(f.y)}) rotate(${f.rot||0})"><path d="M0 0C${f1(-W)} ${f1(-L*.3)} ${f1(-W*.6)} ${f1(-L*.9)} 0 ${f1(-L)}C${f1(W*.6)} ${f1(-L*.9)} ${f1(W)} ${f1(-L*.3)} 0 0Z" fill="url(#gvino1)" stroke="#4a0818" stroke-opacity=".3"/><path d="M0 ${f1(-L*.1)}Q${f1(W*.5)} ${f1(-L*.5)} 0 ${f1(-L*.95)}" fill="none" stroke="#f0b0b8" stroke-opacity=".4" stroke-width=".8"/><path d="M0 0C${f1(-W*1.1)} ${f1(-L*.1)} ${f1(-W*1.3)} ${f1(-L*.4)} ${f1(-W*.5)} ${f1(-L*.45)}C${f1(-W*.4)} ${f1(-L*.25)} 0 ${f1(-L*.1)} 0 0Z" fill="url(#ho)"/><path d="M0 0C${f1(W*1.1)} ${f1(-L*.1)} ${f1(W*1.3)} ${f1(-L*.4)} ${f1(W*.5)} ${f1(-L*.45)}C${f1(W*.4)} ${f1(-L*.25)} 0 ${f1(-L*.1)} 0 0Z" fill="url(#hs)"/></g>`;
}
// Hoja alargada y curva con nervadura dorada
function hoja(L,rd){
  const W=L*(.16+rd()*.05),b=(rd()-.5)*L*.3;
  return `<path d="M0 0C${f1(L*.25)} ${f1(-W+b*.3)} ${f1(L*.7)} ${f1(-W*.9+b)} ${f1(L)} ${f1(b*1.1)}C${f1(L*.7)} ${f1(W*.5+b)} ${f1(L*.25)} ${f1(W*.7+b*.3)} 0 0Z" fill="url(#${['hs','ho','hv'][rd()*3|0]})" stroke="#2f4a2c" stroke-opacity=".3" stroke-width=".8"/><path d="M0 0Q${f1(L*.5)} ${f1(b*.5)} ${f1(L*.97)} ${f1(b*1.05)}" fill="none" stroke="#d6b36a" stroke-opacity=".6" stroke-width=".8"/>`;
}
// Zarcillo dorado tipo "latigazo" Art Nouveau
const curl=(x,y,s)=>`<path d="M${f1(x)} ${f1(y)}c${f1(8*s)} ${f1(-10*s)} ${f1(22*s)} ${f1(-6*s)} ${f1(22*s)} ${f1(6*s)}c0 ${f1(8*s)} ${f1(-10*s)} ${f1(10*s)} ${f1(-14*s)} ${f1(4*s)}c${f1(-4*s)} ${f1(-4*s)} 0 ${f1(-9*s)} ${f1(5*s)} ${f1(-6*s)}" fill="none" stroke="url(#oroG)" stroke-width="1.2"/>`;
function rama(w,h,fl,seed){
  const rd=rng(seed),sc=Math.max(.85,w/300);
  const st=[[w,0,w*.6,h*.1,w*.28,h*.42,w*.3,h*.9],[w*.97,h*.05,w*.8,h*.35,w*.6,h*.6,w*.5,h*.97],[w,h*.12,w*.85,h*.5,w*.8,h*.7,w*.78,h*.95]];
  let a='',b='';
  st.forEach((p,j)=>{
    a+=`<path d="M${f1(p[0])} ${f1(p[1])}C${p.slice(2).map(f1).join(' ')}" fill="none" stroke="#4d6b3f" stroke-width="${3.4-j*.6}" stroke-linecap="round"/><path d="M${f1(p[0]-4)} ${f1(p[1]+3)}C${p.slice(2).map((v,i)=>f1(i%2?v:v+5)).join(' ')}" fill="none" stroke="url(#oroG)" stroke-width="1.1"/>`;
    for(let k=0;k<7;k++){
      const t=.1+k*.12,[x,y]=bez(p,t),[x2,y2]=bez(p,t+.02),ang=Math.atan2(y2-y,x2-x)*180/Math.PI+(k%2?1:-1)*(28+rd()*22),L=(46+rd()*34)*sc*(j?.8:1);
      b+=`<g transform="translate(${f1(x)} ${f1(y)}) rotate(${f1(ang)})">${hoja(L,rd)}</g>`;
    }
    const [x,y]=bez(p,.62+j*.1);a+=curl(x,y,sc*(j%2?-1:1));
  });
  for(let i=0;i<7;i++){const [x,y]=bez(st[i%3],.15+rd()*.8);a+=`<circle cx="${f1(x+(rd()-.5)*26)}" cy="${f1(y+(rd()-.5)*26)}" r="2.4" fill="#fffaf0" stroke="#d8c3a2" stroke-width=".7"/>`}
  let fs='';
  [...fl].sort((p,q)=>q.r-p.r).forEach(f=>{const o={...f,x:f.x*w,y:f.y*h,r:f.r*w};fs+=f.k==='capullo'?capullo(o,rd):flor(o,rd)});
  return `<svg viewBox="0 0 ${w} ${h}" aria-hidden="true">${a}<g filter="url(#wc)">${b}${fs}</g></svg>`;
}
/*GEN-END*/

/* ===================== Lógica ===================== */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const musica = $("#musica");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let abierta = false;

  // Degradados de acuarela, hojas y filtro de pigmento (globales para todos los SVG)
  const gd = document.createElement("div");
  gd.innerHTML = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${defs()}</defs></svg>`;
  document.body.prepend(gd.firstChild);

  // Papel: relieve de damasco (blanco + sombra desplazada) en SVG
  
// PAPEL: ornamental Art Nouveau en relieve sobre papel de algodón

  // PAPEL: damasco francés sutil sobre papel de algodón
  const m = `
    <path d="M60 12 C48 22 43 34 48 44 C52 51 56 54 60 60
             C64 54 68 51 72 44 C77 34 72 22 60 12Z"/>
    <path d="M60 108 C48 98 43 86 48 76 C52 69 56 66 60 60
             C64 66 68 69 72 76 C77 86 72 98 60 108Z"/>
    <path d="M12 60 C22 48 34 43 44 48 C51 52 54 56 60 60
             C54 64 51 68 44 72 C34 77 22 72 12 60Z"/>
    <path d="M108 60 C98 48 86 43 76 48 C69 52 66 56 60 60
             C66 64 69 68 76 72 C86 77 98 72 108 60Z"/>
    <path d="M60 27 C52 34 52 44 60 50 C68 44 68 34 60 27Z"/>
    <path d="M60 93 C52 86 52 76 60 70 C68 76 68 86 60 93Z"/>
    <path d="M27 60 C34 52 44 52 50 60 C44 68 34 68 27 60Z"/>
    <path d="M93 60 C86 52 76 52 70 60 C76 68 86 68 93 60Z"/>
    <circle cx="60" cy="60" r="3"/>
    <path d="M0 0 C12 4 18 12 20 22 M120 0 C108 4 102 12 100 22
             M0 120 C12 116 18 108 20 98 M120 120 C108 116 102 108 100 98"/>
  `;

  const dam = `
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
      <g fill="none" stroke-linecap="round" stroke-linejoin="round">
        <g transform="translate(1 1)" stroke="#98764f" stroke-width="1.1" opacity=".09">${m}</g>
        <g stroke="#fffdf6" stroke-width="1.4" opacity=".35">${m}</g>
      </g>
    </svg>
  `;

  document.body.style.setProperty(
    "--damasco",
    `url("data:image/svg+xml,${encodeURIComponent(dam)}")`
  );


  // Enlaces
  $("#btnMapa").href = CONFIG.mapa;
  $("#btnWhatsapp").href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(CONFIG.mensajeWhatsapp);

  // Foto principal (si no existe se muestra el óvalo provisional)
  const foto = $("#fotoPrincipal"), retrato = $("#retrato");
  const sinFoto = () => retrato.classList.add("sin-foto");
  foto.addEventListener("error", sinFoto);
  if (foto.complete && !foto.naturalWidth) sinFoto();

  // Flores
  DECOR.forEach(([sel, o]) => {
    const host = $(sel); if (!host) return;
    const c = COMP[o.c], d = document.createElement("div");
    d.className = "deco";
    d.style.cssText = `width:${o.w}px;aspect-ratio:${c.w}/${c.h};${o.css}`;
    d.style.transformOrigin = `${o.fx ? "0%" : "100%"} ${o.fy ? "100%" : "0%"}`;
    d.dataset.v = o.v || 0;
    d.innerHTML = `<div class="fl" style="scale:${o.fx ? -1 : 1} ${o.fy ? -1 : 1}">${rama(c.w, c.h, c.fl, o.s)}</div>`;
    host.appendChild(d);
  });
  document.querySelectorAll(".portada .deco").forEach(d => d.classList.add("visible"));

  // Aparición al desplazarse
  const obs = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
  }), { threshold: .08 }) : null;
  const observar = () => document.querySelectorAll("#contenido .reveal:not(.visible),#contenido .deco:not(.visible)").forEach(el => obs ? obs.observe(el) : el.classList.add("visible"));

  // Fotografías distribuidas a lo largo de la invitación
document.querySelectorAll(".foto-integrada").forEach(fig => {
  const img = fig.querySelector("img");

  if (!img) {
    fig.remove();
    return;
  }

  img.addEventListener("error", () => {
    fig.remove();

    if (abierta) {
      hilo();
    }
  });

  img.addEventListener("load", () => {
    if (abierta) {
      observar();
      hilo();
    }
  }, { once:true });

  // Comprueba también si la imagen ya estaba cargada
  if (img.complete && img.naturalWidth > 0) {
    if (abierta) {
      observar();
      hilo();
    }
  }
});

  // Rama dorada que acompaña el desplazamiento (se dibuja al hacer scroll)
  let trazo = null, largo = 0;
  function hilo() {
    const main = $("#contenido"), prev = $("#hilo"); if (prev) prev.remove();
    const H = main.scrollHeight, W = main.clientWidth;
    let d = "", hojas = "";
    const X = y => W * (.07 + .045 * Math.sin(y / 210));
    for (let y = 0; y <= H; y += 30) d += (y ? "L" : "M") + X(y).toFixed(1) + " " + y;
    for (let y = 120; y < H; y += 150) {
      const s = (y / 150) % 2 ? 1 : -1;
      hojas += `<g transform="translate(${X(y)} ${y}) rotate(${s * 50 - 90}) scale(.55)"><path d="M0 0C12 -14 40 -16 64 0C40 16 12 14 0 0Z" fill="url(#hoja)" opacity=".85"/></g>`;
    }
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "hilo"; svg.setAttribute("class", "hilo"); svg.setAttribute("width", W); svg.setAttribute("height", H);
    svg.innerHTML = `<path d="${d}" fill="none" stroke="url(#oroG)" stroke-width="1.6" opacity=".75"/>${hojas}`;
    main.prepend(svg);
    trazo = svg.querySelector("path"); largo = trazo.getTotalLength();
    trazo.style.strokeDasharray = largo; actualizar();
  }
  function actualizar() {
    if (!abierta) return;
    const vh = innerHeight, main = $("#contenido");
    if (trazo && !reduce) trazo.style.strokeDashoffset = largo * (1 - Math.min(1, (scrollY + vh * .85) / main.scrollHeight));
    if (reduce) return;
    main.querySelectorAll(".deco").forEach(d => {
      const v = +d.dataset.v; if (!v) return;
      const r = d.parentElement.getBoundingClientRect();
      d.style.translate = `0 ${((r.top + r.height / 2 - vh / 2) * v).toFixed(1)}px`;
    });
  }
  let tick = false;
  addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(() => { actualizar(); tick = false; }); } }, { passive: true });
  addEventListener("resize", () => abierta && hilo());

  // Abrir invitación: inicia la música (gesto del usuario) y la transición
  $("#abrir").addEventListener("click", () => {
    if (abierta) return;
    abierta = true;
    musica.volume = CONFIG.volumen;
    const p = musica.paused ? musica.play() : null;
    if (p && p.catch) p.catch(() => {}); // si el navegador la bloquea, la invitación sigue funcionando
    document.body.classList.replace("cerrada", "abierta");
    $("#contenido").removeAttribute("aria-hidden");
    window.scrollTo(0, 0);
    hilo(); observar();
  });

  // Pausa al pasar a segundo plano, sin reiniciar ni duplicar
  document.addEventListener("visibilitychange", () => {
    if (!abierta) return;
    document.hidden ? musica.pause() : musica.play().catch(() => {});
  });
})();
