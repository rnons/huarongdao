(()=>{var dt=Object.defineProperty,$t=Object.defineProperties;var vt=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var mt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var W=(s,t,e)=>t in s?dt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,w=(s,t)=>{for(var e in t||(t={}))mt.call(t,e)&&W(s,e,t[e]);if(O)for(var e of O(t))yt.call(t,e)&&W(s,e,t[e]);return s},T=(s,t)=>$t(s,vt(t));var k,g=globalThis.trustedTypes,q=g?g.createPolicy("lit-html",{createHTML:s=>s}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,V="?"+m,At=`<${V}>`,_=document,H=(s="")=>_.createComment(s),E=s=>s===null||typeof s!="object"&&typeof s!="function",Z=Array.isArray,ft=s=>{var t;return Z(s)||typeof((t=s)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,F=/>/g,y=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Y=/'/g,G=/"/g,J=/^(?:script|style|textarea)$/i,K=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),A=K(1),Bt=K(2),f=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Q=new WeakMap,X=(s,t,e)=>{var i,n;let o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t,r=o._$litPart$;if(r===void 0){let c=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=r=new P(t.insertBefore(H(),c),c,void 0,e??{})}return r._$AI(s),r},x=_.createTreeWalker(_,129,null,!1),gt=(s,t)=>{let e=s.length-1,i=[],n,o=t===2?"<svg>":"",r=M;for(let l=0;l<e;l++){let a=s[l],$,h,p=-1,v=0;for(;v<a.length&&(r.lastIndex=v,h=r.exec(a),h!==null);)v=r.lastIndex,r===M?h[1]==="!--"?r=j:h[1]!==void 0?r=F:h[2]!==void 0?(J.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=y):h[3]!==void 0&&(r=y):r===y?h[0]===">"?(r=n??M,p=-1):h[1]===void 0?p=-2:(p=r.lastIndex-h[2].length,$=h[1],r=h[3]===void 0?y:h[3]==='"'?G:Y):r===G||r===Y?r=y:r===j||r===F?r=M:(r=y,n=void 0);let N=r===y&&s[l+1].startsWith("/>")?" ":"";o+=r===M?a+At:p>=0?(i.push($),a.slice(0,p)+"$lit$"+a.slice(p)+m+N):a+m+(p===-2?(i.push(void 0),l):N)}let c=o+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[q!==void 0?q.createHTML(c):c,i]},b=class{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0,c=t.length-1,l=this.parts,[a,$]=gt(t,e);if(this.el=b.createElement(a,i),x.currentNode=this.el.content,e===2){let h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(n=x.nextNode())!==null&&l.length<c;){if(n.nodeType===1){if(n.hasAttributes()){let h=[];for(let p of n.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(m)){let v=$[r++];if(h.push(p),v!==void 0){let N=n.getAttribute(v.toLowerCase()+"$lit$").split(m),z=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:z[2],strings:N,ctor:z[1]==="."?et:z[1]==="?"?it:z[1]==="@"?st:C})}else l.push({type:6,index:o})}for(let p of h)n.removeAttribute(p)}if(J.test(n.tagName)){let h=n.textContent.split(m),p=h.length-1;if(p>0){n.textContent=g?g.emptyScript:"";for(let v=0;v<p;v++)n.append(h[v],H()),x.nextNode(),l.push({type:2,index:++o});n.append(h[p],H())}}}else if(n.nodeType===8)if(n.data===V)l.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf(m,h+1))!==-1;)l.push({type:7,index:o}),h+=m.length-1}o++}}static createElement(t,e){let i=_.createElement("template");return i.innerHTML=t,i}};function S(s,t,e=s,i){var n,o,r,c;if(t===f)return t;let l=i!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[i]:e._$Cu,a=E(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,e,i)),i!==void 0?((r=(c=e)._$Cl)!==null&&r!==void 0?r:c._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=S(s,l._$AS(s,t.values),l,i)),t}var tt=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:i},parts:n}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:_).importNode(i,!0);x.currentNode=o;let r=x.nextNode(),c=0,l=0,a=n[0];for(;a!==void 0;){if(c===a.index){let $;a.type===2?$=new P(r,r.nextSibling,this,t):a.type===1?$=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&($=new nt(r,this,t)),this.v.push($),a=n[++l]}c!==(a==null?void 0:a.index)&&(r=x.nextNode(),c++)}return o}m(t){let e=0;for(let i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},P=class{constructor(t,e,i,n){var o;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),E(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==f&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):ft(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==d&&E(this._$AH)?this._$AA.nextSibling.data=t:this.S(_.createTextNode(t)),this._$AH=t}T(t){var e;let{values:i,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=b.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(i);else{let r=new tt(o,this),c=r.p(this.options);r.m(i),this.S(c),this._$AH=r}}_$AC(t){let e=Q.get(t.strings);return e===void 0&&Q.set(t.strings,e=new b(t)),e}A(t){Z(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let o of t)n===e.length?e.push(i=new P(this.M(H()),this.M(H()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},C=class{constructor(t,e,i,n,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){let o=this.strings,r=!1;if(o===void 0)t=S(this,t,e,0),r=!E(t)||t!==this._$AH&&t!==f,r&&(this._$AH=t);else{let c=t,l,a;for(t=o[0],l=0;l<o.length-1;l++)a=S(this,c[i+l],e,l),a===f&&(a=this._$AH[l]),r||(r=!E(a)||a!==this._$AH[l]),a===d?t=d:t!==d&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!n&&this.k(t)}k(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},et=class extends C{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===d?void 0:t}},_t=g?g.emptyScript:"",it=class extends C{constructor(){super(...arguments),this.type=4}k(t){t&&t!==d?this.element.setAttribute(this.name,_t):this.element.removeAttribute(this.name)}},st=class extends C{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=S(this,t,e,0))!==null&&i!==void 0?i:d)===f)return;let n=this._$AH,o=t===d&&n!==d||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==d&&(n===d||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},nt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}};var rt=window.litHtmlPolyfillSupport;rt==null||rt(b,P),((k=globalThis.litHtmlVersions)!==null&&k!==void 0?k:globalThis.litHtmlVersions=[]).push("2.1.2");var ot={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},lt=s=>(...t)=>({_$litDirective$:s,values:t}),B=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var at=lt(class extends B{constructor(s){var t;if(super(s),s.type!==ot.ATTRIBUTE||s.name!=="style"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{let i=s[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){let{style:e}=s.element;if(this.ct===void 0){this.ct=new Set;for(let i in t)this.ct.add(i);return this.render(t)}this.ct.forEach(i=>{t[i]==null&&(this.ct.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(let i in t){let n=t[i];n!=null&&(this.ct.add(i),i.includes("-")?e.setProperty(i,n):e[i]=n)}return f}});var L=6,xt=6;function ht(s,t){return Array.from({length:t-s}).map((e,i)=>s+i)}function bt(s,t){return s.fix==t.fix&&s.x==t.x&&s.y==t.y&&s.size==t.size}var I=class{constructor(t){this.pieces=t;this.board=[];this.numPieces=t.length;for(let e=0;e<L;e++){this.board[e]=[];for(let i=0;i<L;i++)this.board[e][i]=1}for(let{fix:e,x:i,y:n,size:o}of t)if(e=="x")for(let r=0;r<o;r++)this.board[i][n+r]=0;else for(let r=0;r<o;r++)this.board[i+r][n]=0}isEmpty(t,e){var i;return(i=this.board[t])==null?void 0:i[e]}isEuqal(t){return this.pieces.every((e,i)=>bt(e,t.pieces[i]))}isDone(){let{fix:t,x:e,y:i,size:n}=this.pieces[0];return t=="y"?ht(e+n,L).every(o=>this.isEmpty(o,i)):ht(i+n,xt).every(o=>this.isEmpty(e,o))}_getNewPositions(t){let{fix:e,x:i,y:n,size:o}=t,r=[];return e=="y"?(this.isEmpty(i-1,n)&&r.push(T(w({},t),{x:i-1})),this.isEmpty(i+o,n)&&r.push(T(w({},t),{x:i+1}))):(this.isEmpty(i,n-1)&&r.push(T(w({},t),{y:n-1})),this.isEmpty(i,n+o)&&r.push(T(w({},t),{y:n+1}))),r}walk(t){let e=this.pieces.slice(0,t),i=this.pieces.slice(t+1);return this._getNewPositions(this.pieces[t]).map(n=>new I([...e,n,...i]))}};function St(s,t){let e=0;for(let i=0;i<s.length;i++){let n=s[i],o=t[i];e+=Math.abs(n.x-o.x)+Math.abs(n.y-o.y)}return e==1}async function R(s,t=0){await new Promise(i=>setTimeout(i));let e=s[t];if(!e)return s;for(let i=s.length-1;i>t;i--)if(St(e,s[i]))return s=[...s.slice(0,t+1),...s.slice(i)],R(s,t+1);return R(s,t+1)}async function ut(s){let t=[],e=!1,i=[];async function n(r,c){if(r.isDone()){e=!0,i=c;return}for(let l=0;l<r.numPieces;l++)for(let a of r.walk(l)){if(e)return;if(t.every($=>!$.isEuqal(a))){t.push(a),await n(a,[...c,a.pieces]);continue}}}await n(new I(s),[s]),console.log("Done after",i.length,"steps"),i=await R(i),console.log("Optimized to",i.length,"steps");let o=0;return i}var u=new Proxy({steps:[],current:0,total:0},{set:(s,t,e)=>(s[t]=e,X(zt(u),document.body),!0)}),D=50;var Pt=["crimson","coral","chocolate","cadetblue","chartreuse","cornflowerblue","wheat","forestgreen","gold","indigo","grey","limegreen","lightcoral","seagreen","yellowgreen","aquamarine"],ct=({fix:s,x:t,y:e,size:i},n)=>{let o=s=="x"?"height":"width",r={top:`${e*D}px`,left:`${t*D}px`,backgroundColor:Pt[n],[o]:`${i*D}px`};return A`
    <div class="Piece" style=${at(r)}>
      ${n==0?"\u66F9\u64CD":n}
    </div>
  `},wt=s=>{let t=s.map(ct);return A`
    <div class="Board">${t}</div>
  `},Tt=s=>t=>{let e=t.target;u.steps[0][s].fix=e.value,u.current=0,u.steps=[u.steps[0]]},U=(s,t)=>e=>{let i=e.target,n=t=="size"?+i.value:+i.value-1;u.steps[0][s][t]=n,u.current=0,u.steps=[u.steps[0]]},Ht=s=>()=>{u.steps[0].splice(s,1),u.current=0,u.steps=[u.steps[0]]},Et=()=>{u.steps[0].push({fix:"y",x:0,y:0,size:2}),u.current=0,u.steps=[u.steps[0]]},Mt=({fix:s,x:t,y:e,size:i},n)=>{let o=n>7?A`
          <button @click=${Ht(n)}>x</button>
        `:"";return A`
    <tr>
      <td>
        <span class="PieceInputLabel">${n==0?"\u66F9\u64CD":n} - </span>
      </td>
      <td>
        <select value="${s}" @change=${Tt(n)}>
          <option value="x" ?selected=${s=="x"}>竖</option>
          <option value="y" ?selected=${s=="y"}>横</option>
        </select>
      </td>
      <td>
        <input
          type="number"
          value="${e+1}"
          min="1"
          max="6"
          @input=${U(n,"y")}
        />
      </td>
      <td>
        <input
          type="number"
          value="${t+1}"
          min="1"
          max="6"
          @input=${U(n,"x")}
        />
      </td>
      <td>
        <input
          type="number"
          value="${i}"
          min="1"
          max="4"
          @input=${U(n,"size")}
        />
      </td>
      <td>${o}</td>
    </tr>
  `},Ct=s=>{let t=s.map(Mt);return A`
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>方向</th>
            <th>行</th>
            <th>列</th>
            <th>大小</th>
          </tr>
        </thead>
        <tbody>
          ${t}
        </tbody>
      </table>
      <div>
        <button @click=${Et}>+ Add</button>
        <button @click=${pt}>Run</button>
      </div>
    </div>
  `},Nt=s=>{let t=s.target;u.current=+t.value-1},zt=({steps:s,current:t})=>{let e=s.length;return A`
    <div class="App">
      <div>
        ${wt(s[t])}
        <progress value="${t+1}" max="${e}"></progress>
        <input
          type="number"
          min="1"
          max="${e}"
          .value=${t+1}
          @input=${Nt}
        />
        / <span>${e}</span>
      </div>
      ${Ct(s[0])}
    </div>
  `},It=[{fix:"y",y:2,x:0,size:2},{fix:"y",y:0,x:0,size:3},{fix:"y",y:1,x:0,size:3},{fix:"y",y:3,x:4,size:2},{fix:"y",y:4,x:3,size:2},{fix:"x",x:0,y:3,size:2},{fix:"x",x:2,y:4,size:2},{fix:"x",x:3,y:0,size:2},{fix:"x",x:3,y:2,size:2},{fix:"x",x:4,y:0,size:3},{fix:"x",x:5,y:4,size:2}];async function pt(){console.log("run",u.steps[0]),u.steps=await ut(u.steps[0])}u.steps=[It];pt();})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
