(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function v(n,r,s){return n[r].style.display="none",n[s].style.display="block",n[s].classList.add("fade-in"),s}function y(n,r,s,c){let t="<h2>Voici tes résultats "+n[0]+":</h2>";for(let l=1;l<r.length;l++){const d=r[l],u=n[l];t+=`<p>Question ${l}: ${d.querySelector("h2").textContent}</p>`,t+=`<p>Votre réponse : ${u}. Solution : ${s[l]}</p>`}c.innerHTML=t,c.style.display="block",r[r.length-1].style.display="none"}function E(n,r,s,c,e){let t=10,l;const d=document.querySelector("#time"),u=()=>{t=10,d&&(d.innerText=t.toString()),l=setInterval(()=>{t--,d&&(d.innerText=t.toString()),t===0&&(n--,r&&(r.textContent=n.toString()),n<=0&&(s[c].style.display="none",e()),clearInterval(l))},1e3)},g=()=>{clearInterval(l),u()};u(),document.querySelectorAll("form").forEach(S=>{S.addEventListener("submit",g)}),document.querySelectorAll("#nextButton").forEach(S=>{S.addEventListener("click",g)})}function L(n){const r=["","On lui doit aussi l'Homme de Vitruve","entre 6 et 10","Sa véritable identité est Eric Arthur Blair","C'est un territoire danois autonome situé entre l'Atlantique Nord et l'océan Arctique","Il traverse l'Egypte","Il s'y déroule chaque année le Festival canadien des tulipes","Il a été frappé par la surdité à l'âge de 27 ans","C'est le 9 novembre... Plus qu'à trouver l'année !","Il a aussi écrit Hamlet","Montagne située dans la chaîne de l'Himalaya"],s=document.querySelector("#hintButton"),c=document.querySelector("#hint");if(s&&s.parentNode&&s.parentNode.removeChild(s),c&&c.parentNode&&c.parentNode.removeChild(c),n>0&&n<r.length){const e=document.createElement("button");e.id="hintButton",e.textContent="Indice";const t=document.querySelector("footer");t&&t.appendChild(e),e.addEventListener("click",()=>{const d=r[n],u=document.createElement("div");u.id="hint",u.className="fade-in";const g=document.querySelector("main");u.textContent=d,g&&g.appendChild(u),e.parentNode&&e.parentNode.removeChild(e)})}}const i=Array.from(document.querySelectorAll(".question")),h=document.getElementById("resultat");let o=0;const f=[],m=["name","Léonard de Vinci","8","George Orwell","Groenland","Le Nil","Ottawa","Ludwig van Beethoven","1989-11-09","William Shakespeare","L'Everest"];let a=3;const p=document.querySelector("#score");for(let n=1;n<i.length;n++)i[n].style.display="none";v(i,o,0);function x(n){n.preventDefault();const r=n.target;r.disabled=!0;const s=document.getElementById(`answer${o+1}`);f[o]=s.value;const c=s.value,e=m[o];if(o===0)o<i.length-1?(o=v(i,o,o+1),L(o)):y(f,i,m,h);else{if(c===e)a++,p&&(p.textContent=a.toString());else{if(a<=0){i[o].style.display="none",y(f,i,m,h);return}a--,p&&(p.textContent=a.toString())}o<i.length-1?(o=v(i,o,o+1),L(o)):y(f,i,m,h)}if(a<=0){i[o].style.display="none",y(f,i,m,h);return}const t=document.querySelector("#time");if(t&&parseInt(t.innerText)<=0&&(a--,p&&(p.textContent=a.toString()),a<=0)){i[o].style.display="none",y(f,i,m,h);return}console.log(o),E(a,p,i,o,()=>y(f,i,m,h))}v(i,o,0);const q=document.querySelectorAll("form");q.forEach(n=>{n.addEventListener("submit",x)});const I=document.querySelectorAll("#nextButton");I.forEach(n=>{n.addEventListener("click",x)});