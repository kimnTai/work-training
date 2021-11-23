import{C as D,T as l,S as C,A as I}from"./vendor.fbd8f90c.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}};O();class F{constructor(t,n){this.status=c.HEALTHY,this.raceSkill=n.raceSkill,this.HP=this.MaxHp=t.MaxHp,this.strength=t.strength,this.name=t.name}attack(t){throw new Error("Method not implemented.")}baseSkill(){throw new Error("Method not implemented.")}proSkill(t){throw new Error("Method not implemented.")}raceSkill(t){throw new Error("Method not implemented.")}}var c;(function(e){e.HEALTHY="\u5065\u5EB7",e.DIZZY="\u6688\u7729",e.CONFUSION="\u6DF7\u4E82",e.DODGE="\u9583\u907F",e.COUNTERATTACK="\u53CD\u64CA"})(c||(c={}));var h;(function(e){e.HUMANSKILL="\u596E\u529B\u4E00\u640F",e.DWARFSKILL="\u751F\u547D\u529B",e.ELVESSKILL="\u9B45\u60D1",e.FALSE="\u5931\u6557"})(h||(h={}));var u;(function(e){e.Human="\u4EBA\u985E",e.Dwarf="\u77EE\u4EBA",e.Elves="\u5996\u7CBE",e.Knight="\u9A0E\u58EB",e.Thieves="\u76DC\u8CCA",e.Wizard="\u6CD5\u5E2B"})(u||(u={}));var m;(function(e){e.CCC="background: #CCC; color: #000",e.FDF="background: #fdfd99; color: #000; font-weight: bold"})(m||(m={}));class k{static counterAttack(){Math.random()>=.1||(this.status=c.COUNTERATTACK)}static dodge(){Math.random()>=.15||(this.status=c.DODGE)}static Absorb(){Math.random()>=.1||(this.absorb=!0)}}class b{static strongAttack(t){Math.random()>=.2||(t.HP-=this.strength*1.5,r.push(`${this.name} \u91CD\u64CA\u767C\u52D5\uFF0C\u9020\u6210\u4E86 ${this.strength*1.5} \u9EDE\u50B7\u5BB3`))}static doubleAttack(t){Math.random()>=.4||(r.push(`${this.name} : \u9023\u64CA\u767C\u52D5`),this.attack(t))}static attack(t){throw new Error("Method not implemented.")}static fireball(t){if(Math.random()>=.1)return;const n=this.strength*2;t.HP-=n,t.status=c.DIZZY,r.push(`${this.name} : \u706B\u7403\u767C\u52D5\uFF0C\u9020\u6210\u4E86 ${n} \u9EDE\u50B7\u5BB3\uFF0C${t.name}\u6688\u7729`),this.absorb&&(this.HP+=n,this.absorb=!1,r.push(`${this.name} \u5438\u6536\u767C\u52D5\uFF0C\u56DE\u5FA9\u4E86 ${n} \u9EDE\u751F\u547D\u503C`))}}class S extends F{attack(t){const n=this.strength;t.HP-=n,console.log(`${this.name} \u8FD1\u8DDD\u96E2\u653B\u64CA ${t.name}\uFF0C\u9020\u6210\u4E86 ${n} \u9EDE\u50B7\u5BB3`)}constructor(t,n){super(t,n);this.baseSkill=k.counterAttack,this.proSkill=b.strongAttack}}class B extends F{attack(t){const n=this.strength*.8;t.HP-=n,console.log(`${this.name} \u8FD1\u8DDD\u96E2\u653B\u64CA ${t.name}\uFF0C\u9020\u6210\u4E86 ${n} \u9EDE\u50B7\u5BB3`)}constructor(t,n){super(t,n);this.baseSkill=k.dodge,this.proSkill=b.doubleAttack}}class y extends F{attack(t){if(Math.random()<=.2){r.push(`${this.name} \u9060\u8DDD\u96E2\u653B\u64CA \u672A\u547D\u4E2D`);return}const n=this.strength*1.2;t.HP-=n,console.log(`${this.name} \u9060\u8DDD\u96E2\u653B\u64CA ${t.name}\uFF0C\u9020\u6210\u4E86 ${n} \u9EDE\u50B7\u5BB3`),this.absorb&&(this.HP+=n,this.absorb=!1,r.push(`${this.name} \u5438\u6536\u767C\u52D5\uFF0C\u56DE\u5FA9\u4E86 ${n} \u9EDE\u751F\u547D\u503C`))}constructor(t,n){super(t,n);this.baseSkill=k.Absorb,this.proSkill=b.fireball}}class L{raceSkill(t){return this.HP/this.MaxHp<=.2?(r.push(`${this.name} : ${h.HUMANSKILL}\u767C\u52D5`),this.strength=this.strength*1.5,h.HUMANSKILL):h.FALSE}}class v{raceSkill(t){if(this.HP/this.MaxHp<=.5){const n=this.MaxHp*.03;return this.HP+=n,r.push(`${this.name} : ${h.DWARFSKILL}\u767C\u52D5\uFF0C\u56DE\u5FA9\u4E86 ${n} \u9EDE\u751F\u547D\u503C`),h.DWARFSKILL}return h.FALSE}}class x{raceSkill(t){return Math.random()<=.1?(r.push(`${this.name} : ${h.ELVESSKILL}\u767C\u52D5`),t.status=c.CONFUSION,h.ELVESSKILL):h.FALSE}}let E="",f,g="";class z{constructor(){this.data={name:"\u96FB\u8166",strength:10,MaxHp:300},this.raceCreate()}raceCreate(){switch(Math.floor(Math.random()*3)){case 0:this.race=new L,this.npcName=u.Human;break;case 1:this.race=new v,this.npcName=u.Dwarf;break;case 2:this.race=new x,this.npcName=u.Elves;break}}create(){switch(Math.floor(Math.random()*3)){case 0:this.profession=new S(this.data,this.race),this.npcName+=u.Knight;break;case 1:this.profession=new B(this.data,this.race),this.npcName+=u.Thieves;break;case 2:this.profession=new y(this.data,this.race),this.npcName+=u.Wizard;break}return console.log(`\u5C0D\u4E0A\uFF1A${this.npcName}`),E=this.npcName,this.profession}}function $(e){g.length>4&&(g=g.slice(4,6));let t,n=!1;const i={name:"\u73A9\u5BB6",strength:10,MaxHp:300};switch(e.text){case u.Human:f=new L;break;case u.Dwarf:f=new v;break;case u.Elves:f=new x;break;case u.Knight:t=new S(i,f),n=!0;break;case u.Thieves:t=new B(i,f),n=!0;break;case u.Wizard:t=new y(i,f),n=!0;break}g+=e.text,e.parent.children[0].text="\u9078\u64C7\u8077\u696D",e.parent.children[1].text=u.Knight,e.parent.children[2].text=u.Thieves,e.parent.children[3].text=u.Wizard,n&&(s.stage.removeChildAt(4),U(t),V(e.text,g))}let r=[" \u6230\u9B25\u7D00\u9304"],d;class W{constructor(t,n){this.playerA=t,this.playerB=n,this.turn=1}battle(){let t=this.playerA,n=this.playerB;console.log("-------------------"),this.turn%2==1?(console.log(`${t.name}\u7684\u56DE\u5408`),this.fight(t,n)):(console.log(`${n.name}\u7684\u56DE\u5408`),this.fight(n,t)),this.turn++,this.hpLog(t,n),this.whoWin(t,n)}fight(t,n){switch(t.baseSkill(),t.status){case c.DIZZY:r.push(`${t.name} : \u6688\u7729\uFF0C\u505C\u6B62\u884C\u52D5`),t.status=c.HEALTHY;return;case c.CONFUSION:r.push(`${t.name} : \u9677\u5165\u6DF7\u4E82\uFF0C\u653B\u64CA\u81EA\u5DF1`),t.attack(t),t.status=c.HEALTHY;return}switch(t.raceSkill(n),n.status){case c.DODGE:r.push(`${n.name} : \u9583\u907F\u6210\u529F`),n.status=c.HEALTHY;return;case c.COUNTERATTACK:n.status=c.HEALTHY,r.push(`${n.name} : \u683C\u64CB\u6210\u529F\uFF0C\u767C\u52D5\u53CD\u64CA`),n.attack(t);return}t.proSkill(n),t.attack(n)}hpLog(t,n){console.log(`\u5269\u9918 HP : ${t.name} : ${t.HP}\uFF0C${n.name} : ${n.HP}`)}whoWin(t,n){t.HP<=0?(window.clearInterval(H),console.log(`%c ${n.name} \u52DD\u5229 `,m.FDF),console.log(`%c ${E} > ${g} `,m.CCC),console.log(this.turn)):n.HP<=0&&(window.clearInterval(H),console.log(`%c ${t.name} \u52DD\u5229 `,m.FDF),console.log(`%c ${g} > ${E} `,m.CCC),console.log(this.turn))}}function U(e){let t=new z().create();d=new W(e,t)}function Y(){d.battle()}var M;(M=document.querySelector("button"))==null||M.addEventListener("click",R);function R(){r=[` \u6230\u9B25\u7D00\u9304
-------`],s.stage.removeChildren(4,6),s.loader.load(T)}let H,s;function Z(){var e;s=new I({width:800,height:400,antialias:!0,resolution:1}),(e=document.querySelector("#app"))==null||e.appendChild(s.view),s.loader.add("attack.png","../img/attack.png").add("background.png","../img/background.png").add("Knight.png","../img/Knight.png").add("Thieves.png","../img/Thieves.png").add("Wizard.png","../img/Wizard.png").load(G).load(q).load(_).load(T)}function G(){const e=C.from("background.png"),t=C.from("background.png");e.width=s.screen.width,e.height=s.screen.height,t.width=s.screen.width,t.height=s.screen.height,t.x=-s.screen.width,s.ticker.add(n=>{e.x>=s.screen.width&&(e.x=-s.screen.width),t.x>=s.screen.width&&(t.x=-s.screen.width),e.x+=1,t.x+=1}),s.stage.addChild(e,t)}function q(){const e=new D,t=C.from("attack.png"),n=new l("\u653B\u64CA",{fontSize:50,fill:["#000"]});t.anchor.set(.5),n.anchor.set(.5),e.addChild(t,n),e.interactive=!0,e.addListener("click",()=>{H=window.setInterval(Y,35)}),e.x=500,e.y=200,s.stage.addChild(e)}function V(e,t){const n=new D,i=new l(`${d.playerA.name} : ${d.playerA.HP}`),a=C.from(P(e)),o=new l("");i.y=-60,o.x=40,o.y=-30,n.x=300,n.y=150,o.text=`${t}`,n.addChild(a,o,i);const p=new D,N=E.slice(2,4),K=C.from(P(N)),w=new l(E);w.x=40,w.y=-30;const A=new l(`${d.playerB.name} : ${d.playerB.HP}`);A.y=-60,p.addChild(K,w,A),p.y=150,p.x=s.screen.width-224,s.stage.addChild(n,p),s.ticker.add(()=>{i.text=`${d.playerA.name} : ${d.playerA.HP}`,A.text=`${d.playerB.name} : ${d.playerB.HP}`})}function P(e){switch(e){case u.Knight:e="Knight.png";break;case u.Thieves:e="Thieves.png";break;case u.Wizard:e="Wizard.png";break}return e}function _(){const e=s.stage.addChild(new l("",{fontSize:16}));r.push("-------"),s.ticker.add(()=>{e.text=r.join(`
`),r.length>20&&r.shift()})}function T(){const e=new D;e.name="\u9078\u64C7\u7A2E\u65CF";const t=new l("\u9078\u64C7\u7A2E\u65CF",{fontSize:32}),n=new l(u.Human,{fontSize:50}),i=new l(u.Dwarf,{fontSize:50}),a=new l(u.Elves,{fontSize:50});n.y=50,i.y=n.y+60,a.y=i.y+60,e.addChild(t,n,i,a),n.interactive=i.interactive=a.interactive=!0,n.addListener("click",()=>{$(n)}),i.addListener("click",()=>{$(i)}),a.addListener("click",()=>{$(a)}),e.y=50,s.stage.addChild(e)}const J=()=>{Z()};J();