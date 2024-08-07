!function(){"use strict";const t="morning-train-card";function e(t,e,n,i){var s,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(e,t))}return t}toString(){return this.cssText}};const a=t=>new r("string"==typeof t?t:t+"",void 0,s),l=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new r(n,t,s)},h=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return a(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:c,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:_,getPrototypeOf:g}=Object,m=globalThis,f=m.trustedTypes,w=f?f.emptyScript:"",b=m.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},$=(t,e)=>!c(t,e),x={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:s}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const o=i?.call(this);s.call(this,e),this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...u(t),..._(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),s=n.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(void 0!==i&&!0===n.reflect){const s=(void 0!==n.converter?.toAttribute?n.converter:y).toAttribute(e,n.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const n=this.constructor,i=n._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=n.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i,this[i]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,n,i=!1,s){if(void 0!==t){if(n??=this.constructor.getPropertyOptions(t),!(n.hasChanged??$)(i?s:this[t],e))return;this.C(t,e,n)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t)!0!==n.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[v("elementProperties")]=new Map,A[v("finalized")]=new Map,b?.({ReactiveElement:A}),(m.reactiveElementVersions??=[]).push("2.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const S=globalThis,k=S.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,N="?"+P,U=`<${N}>`,z=document,R=()=>z.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,O="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,j=/>/g,L=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,W=/"/g,B=/^(?:script|style|textarea|title)$/i,q=(t,...e)=>({_$litType$:1,strings:t,values:e}),F=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),G=new WeakMap,J=z.createTreeWalker(z,129);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class Z{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[l,h]=((t,e)=>{const n=t.length-1,i=[];let s,o=2===e?"<svg>":"",r=H;for(let e=0;e<n;e++){const n=t[e];let a,l,h=-1,c=0;for(;c<n.length&&(r.lastIndex=c,l=r.exec(n),null!==l);)c=r.lastIndex,r===H?"!--"===l[1]?r=I:void 0!==l[1]?r=j:void 0!==l[2]?(B.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=L):void 0!==l[3]&&(r=L):r===L?">"===l[0]?(r=s??H,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?L:'"'===l[3]?W:D):r===W||r===D?r=L:r===I||r===j?r=H:(r=L,s=void 0);const d=r===L&&t[e+1].startsWith("/>")?" ":"";o+=r===H?n+U:h>=0?(i.push(a),n.slice(0,h)+C+n.slice(h)+P+d):n+P+(-2===h?e:d)}return[K(t,o+(t[n]||"<?>")+(2===e?"</svg>":"")),i]})(t,e);if(this.el=Z.createElement(l,n),J.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=h[o++],n=i.getAttribute(t).split(P),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:r[2],strings:n,ctor:"."===r[1]?et:"?"===r[1]?nt:"@"===r[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:s}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(P),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],R()),J.nextNode(),a.push({type:2,index:++s});i.append(t[e],R())}}}else if(8===i.nodeType)if(i.data===N)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(P,t+1));)a.push({type:7,index:s}),t+=P.length-1}s++}}static createElement(t,e){const n=z.createElement("template");return n.innerHTML=t,n}}function Y(t,e,n=t,i){if(e===F)return e;let s=void 0!==i?n._$Co?.[i]:n._$Cl;const o=T(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,n,i)),void 0!==i?(n._$Co??=[])[i]=s:n._$Cl=s),void 0!==s&&(e=Y(t,s._$AS(t,e.values),s,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??z).importNode(e,!0);J.currentNode=i;let s=J.nextNode(),o=0,r=0,a=n[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new st(s,this,t)),this._$AV.push(e),a=n[++r]}o!==a?.index&&(s=J.nextNode(),o++)}return J.currentNode=z,i}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),T(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(z.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=Z.createElement(K(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),n=t.u(this.options);t.p(e),this.$(n),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Z(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const s of t)i===e.length?e.push(n=new X(this.k(R()),this.k(R()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=V}_$AI(t,e=this,n,i){const s=this.strings;let o=!1;if(void 0===s)t=Y(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const i=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=Y(this,i[n+r],e,r),a===F&&(a=this._$AH[r]),o||=!T(a)||a!==this._$AH[r],a===V?t=V:t!==V&&(t+=(a??"")+s[r+1]),this._$AH[r]=a}o&&!i&&this.O(t)}O(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===V?void 0:t}}class nt extends tt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends tt{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??V)===F)return;const n=this._$AH,i=t===V&&n!==V||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==V&&(n===V||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const ot=S.litHtmlPolyfillSupport;ot?.(Z,X),(S.litHtmlVersions??=[]).push("3.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class rt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{const i=n?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=n?.renderBefore??null;i._$litPart$=s=new X(e.insertBefore(R(),t),t,void 0,n??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},ht=(t=lt,e,n)=>{const{kind:i,metadata:s}=n;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(n.name,t),"accessor"===i){const{name:i}=n;return{set(n){const s=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,s,t)},init(e){return void 0!==e&&this.C(i,void 0,t),e}}}if("setter"===i){const{name:i}=n;return function(n){const s=this[i];e.call(this,n),this.requestUpdate(i,s,t)}}throw Error("Unsupported decorator location: "+i)};function ct(t){return(e,n)=>"object"==typeof n?ht(t,e,n):((t,e,n)=>{const i=e.hasOwnProperty(n);return e.constructor.createProperty(n,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function dt(t){return ct({...t,state:!0,attribute:!1})}var pt="/*\n! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n  font-variation-settings: normal;\n  /* 6 */\n  -webkit-tap-highlight-color: transparent;\n  /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  /* 1 */\n  font-feature-settings: normal;\n  /* 2 */\n  font-variation-settings: normal;\n  /* 3 */\n  font-size: 1em;\n  /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-feature-settings: inherit;\n  /* 1 */\n  font-variation-settings: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  letter-spacing: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\n\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n.static {\n  position: static;\n}\n\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n\n.col-span-4 {\n  grid-column: span 4 / span 4;\n}\n\n.flex {\n  display: flex;\n}\n\n.grid {\n  display: grid;\n}\n\n.flex-1 {\n  flex: 1 1 0%;\n}\n\n.list-disc {\n  list-style-type: disc;\n}\n\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.grid-cols-\\[3fr_3fr_2fr_1fr\\] {\n  grid-template-columns: 3fr 3fr 2fr 1fr;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.border-b {\n  border-bottom-width: 1px;\n}\n\n.border-slate-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(100 116 139 / var(--tw-border-opacity));\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.pl-4 {\n  padding-left: 1rem;\n}\n\n.pt-3 {\n  padding-top: 0.75rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.font-black {\n  font-weight: 900;\n}\n\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n\n.text-slate-500 {\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity));\n}\n\n.text-yellow-500 {\n  --tw-text-opacity: 1;\n  color: rgb(234 179 8 / var(--tw-text-opacity));\n}\n\n.underline {\n  text-decoration-line: underline;\n}\n\n.line-through {\n  text-decoration-line: line-through;\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n";const ut=(t,e)=>{const n=new Date(t),i=n.getHours()%12||12,s=i.toString().replace(/^0/,""),o=n.getMinutes(),r=o.toString().padStart(2,"0"),a=n.getSeconds(),l=a.toString().padStart(2,"0");return Number.isNaN(i)||Number.isNaN(o)||Number.isNaN(a)?String(t):e?`${s}:${r}:${l}`:`${s}:${r}`},_t=t=>t.toString().padStart(2,"0"),gt=({train:t,time_to_station_normal_mins:e,time_to_station_rush_mins:n,ideal_mins_waiting_at_station:i,longest_mins_waiting_at_station:s,show_terminates_at:o})=>q`
    <div class="col-span-4 border-b border-slate-500"></div>

    <div class="column-1">
      ${(({scheduled:t,perturbation:e,expected:n})=>e?q`
        <div class="text-yellow-500">
          <div class="line-through">
           ${ut(t,!1)}
          </div>
          <div class="">
            ${ut(n,!1)}
          </div>
        </div>
      `:q`
      <div class="">
        ${ut(t,!1)}
      </div>
    `)({scheduled:t.scheduled,perturbation:t.perturbation,expected:t.expected})}
      ${o?q`
            <div class="w-100 text-xs text-slate-500">
              Terminates at <b>${t.terminus}</b>
            </div>
          `:""}
    </div>
    
    <div class="column-2 ${t.perturbation?"text-yellow-500":""}">
      ${(t=>{const e=Math.floor((new Date(t).getTime()-(new Date).getTime())/1e3);return q`
    <div class="">
      ${(t=>{if(Number.isNaN(t))return"__:__:__";const e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=_t(t%60);return-1===e?"Gone":0===e&&0===n?q`__:__:${i}`:0===e?q`__:${n}:${i}`:q`${e}:${_t(n)}:${i}`})(e)}
    </div>
  `})(t.expected)}
    </div>

    <div class="column-3">
      ${(({expected:t,time_to_station_normal_mins:e,time_to_station_rush_mins:n,ideal_mins_waiting_at_station:i,longest_mins_waiting_at_station:s})=>{const o=Math.floor((new Date(t).getTime()-(new Date).getTime())/1e3),r=60*Number.parseInt(s)||600,a=60*Number.parseInt(i)||300,l=60*Number.parseInt(e),h=60*Number.parseInt(n);let c=q`<div>Chill</div>`;return o<=r+l&&(c=q`<div>Walk</div>`),o<=a+l&&(c=q`<div>Power Walk</div>`),o<l&&o>=h&&(c=q`<div>RUN</div>`),o<h&&(c=q`missed`),q`
    <div class="">
      ${c}
    </div>
  `})({expected:t.expected,time_to_station_normal_mins:e,time_to_station_rush_mins:n,ideal_mins_waiting_at_station:i,longest_mins_waiting_at_station:s})}
    </div>

    <div class="column-4 font-black ${"1"===t.platform?"text-green-500":"text-red-500"}">
      ${t.platform}
    </div>

  `,mt=t=>q`
    <div class="text-xl font-red-500">
      ${t}
    </div>
  `;class ft extends rt{constructor(){super(...arguments),this._title="",this._train_schedule=null,this._train_entity=null,this._time="__:__:__",this._clock_is_ticking=!1,this._train_schedule_entity_id="",this._time_to_station_normal_mins="",this._time_to_station_rush_mins="",this._ideal_mins_waiting_at_station="",this._longest_mins_waiting_at_station="",this._show_clock=!0,this._show_title=!0,this._show_terminates_at=!0,this._beginClock=()=>{this._clock_is_ticking||(this._clock_is_ticking=!0,setInterval(this._tickClock,1e3))},this._tickClock=()=>{const t=new Date;this._time=ut(t,!0)}}setConfig(t){this._title=t.title,this._train_schedule_entity_id=t.element_id,this._time_to_station_normal_mins=t.time_to_station_normal_mins,this._time_to_station_rush_mins=t.time_to_station_rush_mins,this._ideal_mins_waiting_at_station=t.ideal_mins_waiting_at_station,this._longest_mins_waiting_at_station=t.longest_mins_waiting_at_station,this._show_clock=t.show_clock,this._show_title=t.show_title,this._show_terminates_at=t.show_terminates_at,this._hass&&(this.hass=this._hass)}set hass(t){this._hass=t,this._train_schedule_entity_id&&(this._train_schedule=t.states[this._train_schedule_entity_id],this._train_entity=t.entities[this._train_schedule_entity_id])}static getConfigElement(){return document.createElement(`${t}-editor`)}render(){var t;this._beginClock();const e=(({title:t,time:e,show_title:n,show_clock:i})=>n||i?q`
    <div class="col-span-4">
      <div class="text-xl col-span-2">${n?t:""}</div>
      <div class="text-xl">${i?e:""}</div>
    </div>
  `:q``)({title:(()=>{var t;return this._title?this._title:(null===(t=this._train_entity)||void 0===t?void 0:t.friendly_name)?this._train_entity.friendly_name:this._train_schedule?this._train_schedule.entity_id:"Pick a train station"})(),time:this._time,show_title:this._show_title,show_clock:this._show_clock});return this._train_schedule?this._train_schedule.attributes?this._train_schedule.attributes.trains&&0!==this._train_schedule.attributes.trains.length?q`<ha-card>
      <div class="w-100 grid grid-cols-4 gap-2 grid-cols-[3fr_3fr_2fr_1fr] items-center p-4 text-center text-4xl">

        ${e}

        <div class="column-1 text-base">TRAIN</div>
        <div class="column-2 text-base">DEPARTING</div>
        <div class="column-3 text-base">YOU</div>
        <div class="column-4 text-base">PLAT</div>

        ${null===(t=this._train_schedule)||void 0===t?void 0:t.attributes.trains.map((t=>"Cancelled"===t.expected?q`
              <div class="col-span-4 border-b border-slate-500"></div>
              <div class="text-red-500 line-through">
                  ${ut(t.scheduled,!1)}
              </div>
              <div class="text-red-500 col-span-3">
                Cancelled
              </div>
            `:gt({train:t,time_to_station_normal_mins:this._time_to_station_normal_mins,time_to_station_rush_mins:this._time_to_station_rush_mins,ideal_mins_waiting_at_station:this._ideal_mins_waiting_at_station,longest_mins_waiting_at_station:this._longest_mins_waiting_at_station,show_terminates_at:this._show_terminates_at})))}
      </div>
    </ha-card> `:q`<ha-card>
        <div class="w-100 grid grid-cols-4 gap-2 p-4">
          ${e}
          <div class="col-span-4 text-center">No more trains for now.</div>
        </div>
      </ha-card>`:q`<ha-card>
        ${mt("No train schedule attributes.")}
      </ha-card>`:q`<ha-card>
        ${mt("No train schedule object.")}
      </ha-card>`}}ft.styles=l`${a(pt)}`,e([dt()],ft.prototype,"_title",void 0),e([dt()],ft.prototype,"_train_schedule",void 0),e([dt()],ft.prototype,"_train_entity",void 0),e([dt()],ft.prototype,"_time",void 0);const wt=({id:t,value:e,label:n,change:i})=>q`
    <div style="display: flex; align-items: center;">
      <ha-switch
        id=${t}
        .checked=${e}
        label="${n}"
        name=${t}
        @change=${i}
      >
      </ha-switch>
      <label for=${t} style="margin-left: 8px;">
        ${n}
      </label>
    </div>
    `,bt=({id:t,value:e,label:n,change:i})=>q`
      <ha-textfield
        id="${t}"
        class="flex-1"
        type="number"
        .value=${e}
        label="${n}"
        placeholder="00"
        name="${t}"
        @change=${i}
        no-spinner
        min="0"
      >
      </ha-textfield>
    `;class vt extends rt{constructor(){super(...arguments),this._config={type:"my-lit-card"}}MyLitCardEditor(){console.log("Loaded Editor")}setConfig(t){this._config=t,(async()=>{if(!window.customElements.get("ha-entity-picker")){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement(),window.customElements.get("ha-entity-picker")}})()}_change(t){t.stopPropagation();const e=t.target,n="HA-SWITCH"===e.tagName?e.checked:e.value;if(n===this._config[e.id])return;const i=Object.assign({},this._config);if(""===n||void 0===n)return void delete i[e.id];i[e.id]=n;const s=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(s)}render(){var t,e,n,i,s;return q`<div class="grid grid-cols-2 gap-4">
      <div>
        ${wt({id:"show_title",value:this._config.show_title,label:"Show Title?",change:this._change})}
      </div>
      <div>
        ${wt({id:"show_clock",value:this._config.show_clock,label:"Show Clock?",change:this._change})}
      </div>
      <div class="col-span-2">
        ${(({name:t,value:e,label:n,required:i,change:s})=>q`
      <ha-textfield
        id=${t}
        type="string"
        .value=${e}
        label="${n} (${i?"Required":"Optional"})"
        name=${t}
        @change=${s}
        no-spinner
        .required=${i}
        min="0"
        style="width: 100%"
      >
      </ha-textfield>
    `)({name:"title",label:"Title",required:!1,value:this._config.title||"",change:this._change})}
      </div>
      <div class="col-span-2">
        ${(({name:t,label:e,hass:n,change:i,value:s})=>Object.keys(n.states).filter((t=>t.includes("sensor.train_schedule_"))).length>0?q`
    <ha-entity-picker
      id="${t}"
      .hass=${n}
      label="${e}"
      .value=${s}
      @value-changed=${i}
      allow-custom-entity
      .entityFilter=${t=>t.entity_id.includes("sensor.train_schedule_")}
    >
    </ha-entity-picker>
  `:q`
      <div class="py-4">
        <div class="font-black text-red-500">
          No valid entities found.
        </div> 
        <ul class="list-disc pl-4">
          <li>
            Make sure you have set up the natioonal rail integration entities. (<a class="underline text-blue-500" href="https://github.com/ijmccallum/home-assistant-morning-train">Setup Instructions</a>).
          </li>
          <li>
            (An <a class="underline text-blue-500" href="/config/entities">entity</a> is considered <span class="font-black">valid</span> by this card when it has an <span class="font-black">id</span> that starts with <span class="font-black">"sensor.train_schedule_"</span.
          </li>
          <li>
            If you are totally flummoxed, <a class="underline text-blue-500" href="https://github.com/ijmccallum/home-assistant-morning-train">jump into the code</a>!
          </li>
        </ul>
      </div>
    `)({name:"element_id",label:"Entity to Show",hass:this.hass,change:this._change,value:null!==(t=this._config.element_id)&&void 0!==t?t:""})}
      </div>
      <div class="col-span-2">
        <p>How long does it take to get to the Station? (in minutes)</p>
      </div>
      ${bt({change:this._change,label:"Relaxed pace",id:"time_to_station_normal_mins",value:null!==(e=this._config.time_to_station_normal_mins)&&void 0!==e?e:""})}
      ${bt({change:this._change,label:"When you're in a rush",id:"time_to_station_rush_mins",value:null!==(n=this._config.time_to_station_rush_mins)&&void 0!==n?n:""})}
      <div class="col-span-2">
        <p>What is the longest you'd be ok with waiting at the station?</p>
      </div>
      ${bt({change:this._change,label:"Longest wait time at the station in mins",id:"longest_mins_waiting_at_station",value:null!==(i=this._config.longest_mins_waiting_at_station)&&void 0!==i?i:""})}
      <div class="col-span-2">
        <p>What is the shortest time you'd be ok with waiting at the station?</p>
      </div>
      ${bt({change:this._change,label:"Ideal time at the station",id:"ideal_mins_waiting_at_station",value:null!==(s=this._config.ideal_mins_waiting_at_station)&&void 0!==s?s:""})}
      <div class="col-span-2 pt-3">
        ${wt({id:"show_terminates_at",value:this._config.show_terminates_at,label:"Show Terminates at?",change:this._change})}
      </div>
    </div> `}}vt.styles=l`${a(pt)}`,e([ct({attribute:!1})],vt.prototype,"hass",void 0),e([dt()],vt.prototype,"_config",void 0),customElements.define(t,ft),customElements.define(`${t}-editor`,vt),window.customCards=window.customCards||[],window.customCards.push({type:t,name:"Morning Train Card",description:"When is the next train? Will I Make it?"})}();
//# sourceMappingURL=morning-train-card.js.map
