(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,E=W.trustedTypes,q=E?E.createPolicy("lit-html",{createHTML:n=>n}):void 0,G="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,X="?"+A,ot=`<${X}>`,y=document,C=()=>y.createComment(""),k=n=>n===null||typeof n!="object"&&typeof n!="function",V=Array.isArray,rt=n=>V(n)||typeof n?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,z=/>/g,m=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),J=/'/g,K=/"/g,Y=/^(?:script|style|textarea|title)$/i,lt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),p=lt(1),I=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Z=new WeakMap,v=y.createTreeWalker(y,129);function tt(n,t){if(!V(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return q!==void 0?q.createHTML(t):t}const ct=(n,t)=>{const e=n.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",r=T;for(let u=0;u<e;u++){const l=n[u];let a,d,c=-1,f=0;for(;f<l.length&&(r.lastIndex=f,d=r.exec(l),d!==null);)f=r.lastIndex,r===T?d[1]==="!--"?r=F:d[1]!==void 0?r=z:d[2]!==void 0?(Y.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=m):d[3]!==void 0&&(r=m):r===m?d[0]===">"?(r=i??T,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,a=d[1],r=d[3]===void 0?m:d[3]==='"'?K:J):r===K||r===J?r=m:r===F||r===z?r=T:(r=m,i=void 0);const g=r===m&&n[u+1].startsWith("/>")?" ":"";o+=r===T?l+ot:c>=0?(s.push(a),l.slice(0,c)+G+l.slice(c)+A+g):l+A+(c===-2?u:g)}return[tt(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class P{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const u=t.length-1,l=this.parts,[a,d]=ct(t,e);if(this.el=P.createElement(a,s),v.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=v.nextNode())!==null&&l.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(G)){const f=d[r++],g=i.getAttribute(c).split(A),L=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:L[2],strings:g,ctor:L[1]==="."?ht:L[1]==="?"?dt:L[1]==="@"?ut:R}),i.removeAttribute(c)}else c.startsWith(A)&&(l.push({type:6,index:o}),i.removeAttribute(c));if(Y.test(i.tagName)){const c=i.textContent.split(A),f=c.length-1;if(f>0){i.textContent=E?E.emptyScript:"";for(let g=0;g<f;g++)i.append(c[g],C()),v.nextNode(),l.push({type:2,index:++o});i.append(c[f],C())}}}else if(i.nodeType===8)if(i.data===X)l.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(A,c+1))!==-1;)l.push({type:7,index:o}),c+=A.length-1}o++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function H(n,t,e=n,s){if(t===I)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=k(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=H(n,i._$AS(n,t.values),i,s)),t}class at{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??y).importNode(e,!0);v.currentNode=i;let o=v.nextNode(),r=0,u=0,l=s[0];for(;l!==void 0;){if(r===l.index){let a;l.type===2?a=new M(o,o.nextSibling,this,t):l.type===1?a=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(a=new pt(o,this,t)),this._$AV.push(a),l=s[++u]}r!==l?.index&&(o=v.nextNode(),r++)}return v.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),k(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):rt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=P.createElement(tt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new at(i,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=Z.get(t.strings);return e===void 0&&Z.set(t.strings,e=new P(t)),e}k(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new M(this.O(C()),this.O(C()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=H(this,t,e,0),r=!k(t)||t!==this._$AH&&t!==I,r&&(this._$AH=t);else{const u=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=H(this,u[s+l],e,l),a===I&&(a=this._$AH[l]),r||=!k(a)||a!==this._$AH[l],a===h?t=h:t!==h&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ht extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class dt extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class ut extends R{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=H(this,t,e,0)??h)===I)return;const s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class pt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const $t=W.litHtmlPolyfillSupport;$t?.(P,M),(W.litHtmlVersions??=[]).push("3.3.1");const et=(n,t,e)=>{const s=t;let i=s._$litPart$;return i===void 0&&(s._$litPart$=i=new M(t.insertBefore(C(),null),null,void 0,{})),i._$AI(n),i};let it="",O=!1,Q=null;const $=n=>{it=n,O=!0,D(),clearTimeout(Q),Q=setTimeout(()=>{O=!1,D()},3e3)},U=()=>{O=!1,D()},ft=()=>p`
  <div class="toaster ${O?"show":""}">${it}</div>
`;function D(){const n=document.querySelector("#toaster");n&&et(ft(),n)}const gt=n=>{let t="",e=null;function s(r){t=r.target.value,t.trim()!==""?$("Searching..."):U(),clearTimeout(e),e=setTimeout(()=>U(),2e3)}function i(){if(t.trim()===""){$("Please enter something to search.");return}U(),$("Searching..."),n(t)}function o(r){r.key==="Enter"&&i()}return p`
    <div class="search-bar">
      <input
        type="text"
        class="search-input"
        placeholder="Search for a cocktail..."
        @input=${s}
        @keydown=${o}
      />
      <button class="search-button" @click=${i}>Search</button>
    </div>
  `},At=(n=[],t)=>p`
  <section class="shopping-list">
    <h2>Shopping List</h2>
    <hr />

    <ul>
      ${n.length?n.map(e=>p`
              <li>
                ${e}
                <button class="remove-button" @click=${()=>t(e)}>×</button>
              </li>
            `):p`<li>No ingredients yet.</li>`}
    </ul>

    <div class="print-button-container">
      <button class="print-button" @click=${()=>window.print()}>Print</button>
    </div>
  </section>
`,_t=(n,t)=>p`
  <div class="cocktail-item">
    <img
      src="${n.strDrinkThumb||"cocktail.png"}"
      alt="${n.strDrink}"
      class="cocktail-thumbnail"
    />
    <div class="cocktail-info">
      <h3 class="cocktail-name">${n.strDrink}</h3>
      <p class="cocktail-instructions">
        ${n.strInstructions||"No instructions available."}
      </p>
      <button class="add-button" @click=${()=>t(n)}>
        +
      </button>
    </div>
  </div>
`;let j,w,S=null;function mt(n){S=n,j=new RTCPeerConnection,w=j.createDataChannel("shoppingList"),w.onmessage=t=>{S&&S(JSON.parse(t.data))},j.ondatachannel=t=>{t.channel.onmessage=e=>{S&&S(JSON.parse(e.data))}}}function st(n){w&&w.readyState==="open"&&w.send(JSON.stringify(n))}let x=[],N=new Set,_=0;mt(vt);function vt(n){n.type==="addItem"?(N.add(n.item),b()):n.type==="removeItem"&&(N.delete(n.item),b())}async function nt(n="margarita"){try{$("Searching..."),x=(await(await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${n}`)).json()).drinks||[],_=0,x.length?$("Here are the results."):$("No results found."),b()}catch(t){console.error("Error fetching cocktails:",t),$("Failed to fetch cocktails.")}}function yt(n){const t=[];for(let e=1;e<=15;e++){const s=n[`strIngredient${e}`];s&&t.push(s)}return t}function bt(n){const t=yt(n);let e=0;t.forEach(s=>{N.has(s)||(N.add(s),e++,st({type:"addItem",item:s}))}),e>0?$(`${e} new ingredient${e>1?"s":""} added.`):$("All ingredients already added."),b()}function xt(n){N.delete(n)&&(st({type:"removeItem",item:n}),$("Ingredient removed."),b())}function Ht(){(_+1)*3<x.length&&(_++,b())}function Nt(){_>0&&(_--,b())}function Tt(){const n=_*3,t=x.slice(n,n+3);return p`
    <div class="app-container">
      <h1 class="app-title">Cocktail Search</h1>

      ${gt(nt)}

      <div class="results-container">
        ${x.length?p`
              ${t.map(e=>_t(e,bt))}

              <div class="pagination-buttons">
                ${_>0?p`<button class="prev-button" @click=${Nt}>← Prev</button>`:""}
                ${(_+1)*3<x.length?p`<button class="next-button" @click=${Ht}>Next →</button>`:""}
              </div>
            `:p`<p>No results found.</p>`}
      </div>

      ${At([...N],xt)}
    </div>
  `}function b(){et(Tt(),document.querySelector("#app"))}nt();
