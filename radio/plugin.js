(function(){try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(`.radio-search[data-v-b8dc3f54]{gap:8px;max-width:560px;margin-bottom:16px;display:flex}.radio-search input[data-v-b8dc3f54]{min-width:0;color:inherit;font:inherit;background:0 0;border:1px solid #80808066;border-radius:8px;flex:1;padding:8px 12px}.radio-now[data-v-b8dc3f54]{background:#80808026;border-radius:10px;flex-wrap:wrap;align-items:center;gap:16px;margin-bottom:16px;padding:12px 16px;display:flex}.radio-now-text[data-v-b8dc3f54]{flex-direction:column;flex:1;min-width:180px;display:flex}.radio-diagnostics[data-v-b8dc3f54]{opacity:.7;font-size:.75em}.radio-note[data-v-b8dc3f54]{opacity:.75;margin:4px 0}.radio-library h2[data-v-b8dc3f54]{margin:0 0 4px;font-size:1.15rem}.radio-groups[data-v-b8dc3f54]{flex-wrap:wrap;gap:8px;margin:12px 0 16px;display:flex}.radio-groups button[data-v-b8dc3f54]{color:inherit;font:inherit;cursor:pointer;background:0 0;border:1px solid #80808059;border-radius:999px;align-items:center;gap:6px;padding:6px 10px;display:inline-flex}.radio-groups button.active[data-v-b8dc3f54]{background:#80808033}.radio-groups span[data-v-b8dc3f54]{opacity:.6;font-size:.8em}.radio-list[data-v-b8dc3f54]{margin:0;padding:0;list-style:none}.radio-list button[data-v-b8dc3f54]{text-align:left;width:100%;color:inherit;font:inherit;cursor:pointer;background:0 0;border:0;border-radius:8px;grid-template-rows:auto auto;grid-template-columns:40px 1fr auto;column-gap:12px;padding:8px;display:grid}.radio-list button[data-v-b8dc3f54]:hover,.radio-list button.active[data-v-b8dc3f54]{background:#80808026}.radio-list img[data-v-b8dc3f54]{object-fit:cover;border-radius:6px;grid-row:1/3;width:40px;height:40px}.radio-name[data-v-b8dc3f54]{grid-column:2;font-weight:600}.radio-detail[data-v-b8dc3f54]{opacity:.7;grid-column:2;font-size:.85em}.radio-source[data-v-b8dc3f54]{opacity:.6;grid-area:1/3/3;align-self:center;font-size:.8em}
/*$vite$:1*/`)),document.head.appendChild(a)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
var vI = (t, i) => () => (i || (t((i = { exports: {} }).exports, i), t = null), i.exports);
// @__NO_SIDE_EFFECTS__
function Un(t) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const r of t.split(",")) i[r] = 1;
  return (r) => r in i;
}
var ye = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, nr = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ze = () => {
}, Ip = () => !1, Hr = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Dr = (t) => t.startsWith("onUpdate:"), Ne = Object.assign, Il = (t, i) => {
  const r = t.indexOf(i);
  r > -1 && t.splice(r, 1);
}, II = Object.prototype.hasOwnProperty, me = (t, i) => II.call(t, i), K = Array.isArray, Si = (t) => Jr(t) === "[object Map]", _p = (t) => Jr(t) === "[object Set]", Ed = (t) => Jr(t) === "[object Date]", te = (t) => typeof t == "function", Re = (t) => typeof t == "string", an = (t) => typeof t == "symbol", Ie = (t) => t !== null && typeof t == "object", _l = (t) => (Ie(t) || te(t)) && te(t.then) && te(t.catch), Tp = Object.prototype.toString, Jr = (t) => Tp.call(t), Tl = (t) => Jr(t).slice(8, -1), bo = (t) => Jr(t) === "[object Object]", wl = (t) => Re(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Rr = /* @__PURE__ */ Un(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), _I = /* @__PURE__ */ Un("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), vo = (t) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (r) => i[r] || (i[r] = t(r));
}, TI = /-\w/g, rt = vo((t) => t.replace(TI, (i) => i.slice(1).toUpperCase())), wI = /\B([A-Z])/g, Ot = vo((t) => t.replace(wI, "-$1").toLowerCase()), Io = vo((t) => t.charAt(0).toUpperCase() + t.slice(1)), Ci = vo((t) => t ? `on${Io(t)}` : ""), Cn = (t, i) => !Object.is(t, i), Xi = (t, ...i) => {
  for (let r = 0; r < t.length; r++) t[r](...i);
}, ro = (t, i, r, o = !1) => {
  Object.defineProperty(t, i, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: r
  });
}, El = (t) => {
  const i = parseFloat(t);
  return isNaN(i) ? t : i;
}, yd = (t) => {
  const i = Re(t) ? Number(t) : NaN;
  return isNaN(i) ? t : i;
}, Cd, Gr = () => Cd || (Cd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function yl(t) {
  if (K(t)) {
    const i = {};
    for (let r = 0; r < t.length; r++) {
      const o = t[r], a = Re(o) ? AI(o) : yl(o);
      if (a) for (const u in a) i[u] = a[u];
    }
    return i;
  } else if (Re(t) || Ie(t)) return t;
}
var EI = /;(?![^(]*\))/g, yI = /:([^]+)/, CI = /\/\*[^]*?\*\//g;
function AI(t) {
  const i = {};
  return t.replace(CI, "").split(EI).forEach((r) => {
    if (r) {
      const o = r.split(yI);
      o.length > 1 && (i[o[0].trim()] = o[1].trim());
    }
  }), i;
}
function qr(t) {
  let i = "";
  if (Re(t)) i = t;
  else if (K(t)) for (let r = 0; r < t.length; r++) {
    const o = qr(t[r]);
    o && (i += o + " ");
  }
  else if (Ie(t))
    for (const r in t) t[r] && (i += r + " ");
  return i.trim();
}
var SI = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", NI = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", UI = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", RI = /* @__PURE__ */ Un(SI), OI = /* @__PURE__ */ Un(NI), PI = /* @__PURE__ */ Un(UI), wp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xI = /* @__PURE__ */ Un(wp), Z3 = /* @__PURE__ */ Un(wp + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function Ep(t) {
  return !!t || t === "";
}
function zI(t, i) {
  if (t.length !== i.length) return !1;
  let r = !0;
  for (let o = 0; r && o < t.length; o++) r = Cl(t[o], i[o]);
  return r;
}
function Cl(t, i) {
  if (t === i) return !0;
  let r = Ed(t), o = Ed(i);
  if (r || o) return r && o ? t.getTime() === i.getTime() : !1;
  if (r = an(t), o = an(i), r || o) return t === i;
  if (r = K(t), o = K(i), r || o) return r && o ? zI(t, i) : !1;
  if (r = Ie(t), o = Ie(i), r || o) {
    if (!r || !o || Object.keys(t).length !== Object.keys(i).length) return !1;
    for (const a in t) {
      const u = t.hasOwnProperty(a), d = i.hasOwnProperty(a);
      if (u && !d || !u && d || !Cl(t[a], i[a])) return !1;
    }
  }
  return String(t) === String(i);
}
var yp = (t) => !!(t && t.__v_isRef === !0), Ht = (t) => Re(t) ? t : t == null ? "" : K(t) || Ie(t) && (t.toString === Tp || !te(t.toString)) ? yp(t) ? Ht(t.value) : JSON.stringify(t, Cp, 2) : String(t), Cp = (t, i) => yp(i) ? Cp(t, i.value) : Si(i) ? { [`Map(${i.size})`]: [...i.entries()].reduce((r, [o, a], u) => (r[ja(o, u) + " =>"] = a, r), {}) } : _p(i) ? { [`Set(${i.size})`]: [...i.values()].map((r) => ja(r)) } : an(i) ? ja(i) : Ie(i) && !K(i) && !bo(i) ? String(i) : i, ja = (t, i = "") => {
  var r;
  return an(t) ? `Symbol(${(r = t.description) != null ? r : i})` : t;
};
function ln(t, ...i) {
  console.warn(`[Vue warn] ${t}`, ...i);
}
var it, MI = class {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && it && (it.active ? (this.parent = it, this.index = (it.scopes || (it.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, i;
      if (this.scopes) for (t = 0, i = this.scopes.length; t < i; t++) this.scopes[t].pause();
      for (t = 0, i = this.effects.length; t < i; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, i;
      if (this.scopes) for (t = 0, i = this.scopes.length; t < i; t++) this.scopes[t].resume();
      for (t = 0, i = this.effects.length; t < i; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const i = it;
      try {
        return it = this, t();
      } finally {
        it = i;
      }
    } else process.env.NODE_ENV !== "production" && this._warnOnRun && ln("cannot run an inactive effect scope.");
  }
  on() {
    ++this._on === 1 && (this.prevScope = it, it = this);
  }
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (it === this) it = this.prevScope;
      else {
        let t = it;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let i, r;
      for (i = 0, r = this.effects.length; i < r; i++) this.effects[i].stop();
      for (this.effects.length = 0, i = 0, r = this.cleanups.length; i < r; i++) this.cleanups[i]();
      if (this.cleanups.length = 0, this.scopes) {
        for (i = 0, r = this.scopes.length; i < r; i++) this.scopes[i].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
};
function LI() {
  return it;
}
var Ee, ka = /* @__PURE__ */ new WeakSet(), Ap = class {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, it && (it.active ? it.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ka.has(this) && (ka.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Np(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Ad(this), Up(this);
    const t = Ee, i = sn;
    Ee = this, sn = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && Ee !== this && ln("Active effect was not restored correctly - this is likely a Vue internal bug."), Rp(this), Ee = t, sn = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Nl(t);
      this.deps = this.depsTail = void 0, Ad(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ka.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    nl(this) && this.run();
  }
  get dirty() {
    return nl(this);
  }
}, Sp = 0, Or, Pr;
function Np(t, i = !1) {
  if (t.flags |= 8, i) {
    t.next = Pr, Pr = t;
    return;
  }
  t.next = Or, Or = t;
}
function Al() {
  Sp++;
}
function Sl() {
  if (--Sp > 0) return;
  if (Pr) {
    let i = Pr;
    for (Pr = void 0; i; ) {
      const r = i.next;
      i.next = void 0, i.flags &= -9, i = r;
    }
  }
  let t;
  for (; Or; ) {
    let i = Or;
    for (Or = void 0; i; ) {
      const r = i.next;
      if (i.next = void 0, i.flags &= -9, i.flags & 1) try {
        i.trigger();
      } catch (o) {
        t || (t = o);
      }
      i = r;
    }
  }
  if (t) throw t;
}
function Up(t) {
  for (let i = t.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function Rp(t) {
  let i, r = t.depsTail, o = r;
  for (; o; ) {
    const a = o.prevDep;
    o.version === -1 ? (o === r && (r = a), Nl(o), DI(o)) : i = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = a;
  }
  t.deps = i, t.depsTail = r;
}
function nl(t) {
  for (let i = t.deps; i; i = i.nextDep) if (i.dep.version !== i.version || i.dep.computed && (Op(i.dep.computed) || i.dep.version !== i.version)) return !0;
  return !!t._dirty;
}
function Op(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Fr) || (t.globalVersion = Fr, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !nl(t)))) return;
  t.flags |= 2;
  const i = t.dep, r = Ee, o = sn;
  Ee = t, sn = !0;
  try {
    Up(t);
    const a = t.fn(t._value);
    (i.version === 0 || Cn(a, t._value)) && (t.flags |= 128, t._value = a, i.version++);
  } catch (a) {
    throw i.version++, a;
  } finally {
    Ee = r, sn = o, Rp(t), t.flags &= -3;
  }
}
function Nl(t, i = !1) {
  const { dep: r, prevSub: o, nextSub: a } = t;
  if (o && (o.nextSub = a, t.prevSub = void 0), a && (a.prevSub = o, t.nextSub = void 0), process.env.NODE_ENV !== "production" && r.subsHead === t && (r.subsHead = a), r.subs === t && (r.subs = o, !o && r.computed)) {
    r.computed.flags &= -5;
    for (let u = r.computed.deps; u; u = u.nextDep) Nl(u, !0);
  }
  !i && !--r.sc && r.map && r.map.delete(r.key);
}
function DI(t) {
  const { prevDep: i, nextDep: r } = t;
  i && (i.nextDep = r, t.prevDep = void 0), r && (r.prevDep = i, t.nextDep = void 0);
}
var sn = !0, Pp = [];
function un() {
  Pp.push(sn), sn = !1;
}
function cn() {
  const t = Pp.pop();
  sn = t === void 0 ? !0 : t;
}
function Ad(t) {
  const { cleanup: i } = t;
  if (t.cleanup = void 0, i) {
    const r = Ee;
    Ee = void 0;
    try {
      i();
    } finally {
      Ee = r;
    }
  }
}
var Fr = 0, qI = class {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}, Ul = class {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Ee || !sn || Ee === this.computed) return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== Ee)
      i = this.activeLink = new qI(Ee, this), Ee.deps ? (i.prevDep = Ee.depsTail, Ee.depsTail.nextDep = i, Ee.depsTail = i) : Ee.deps = Ee.depsTail = i, xp(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const r = i.nextDep;
      r.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = r), i.prevDep = Ee.depsTail, i.nextDep = void 0, Ee.depsTail.nextDep = i, Ee.depsTail = i, Ee.deps === i && (Ee.deps = r);
    }
    return process.env.NODE_ENV !== "production" && Ee.onTrack && Ee.onTrack(Ne({ effect: Ee }, t)), i;
  }
  trigger(t) {
    this.version++, Fr++, this.notify(t);
  }
  notify(t) {
    Al();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let i = this.subsHead; i; i = i.nextSub) i.sub.onTrigger && !(i.sub.flags & 8) && i.sub.onTrigger(Ne({ effect: i.sub }, t));
      for (let i = this.subs; i; i = i.prevSub) i.sub.notify() && i.sub.dep.notify();
    } finally {
      Sl();
    }
  }
};
function xp(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const i = t.dep.computed;
    if (i && !t.dep.subs) {
      i.flags |= 20;
      for (let o = i.deps; o; o = o.nextDep) xp(o);
    }
    const r = t.dep.subs;
    r !== t && (t.prevSub = r, r && (r.nextSub = t)), process.env.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
var il = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Object iterate" : ""), rl = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""), Br = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Array iterate" : "");
function Ye(t, i, r) {
  if (sn && Ee) {
    let o = il.get(t);
    o || il.set(t, o = /* @__PURE__ */ new Map());
    let a = o.get(r);
    a || (o.set(r, a = new Ul()), a.map = o, a.key = r), process.env.NODE_ENV !== "production" ? a.track({
      target: t,
      type: i,
      key: r
    }) : a.track();
  }
}
function An(t, i, r, o, a, u) {
  const d = il.get(t);
  if (!d) {
    Fr++;
    return;
  }
  const f = (h) => {
    h && (process.env.NODE_ENV !== "production" ? h.trigger({
      target: t,
      type: i,
      key: r,
      newValue: o,
      oldValue: a,
      oldTarget: u
    }) : h.trigger());
  };
  if (Al(), i === "clear") d.forEach(f);
  else {
    const h = K(t), y = h && wl(r);
    if (h && r === "length") {
      const T = Number(o);
      d.forEach((_, U) => {
        (U === "length" || U === Br || !an(U) && U >= T) && f(_);
      });
    } else
      switch ((r !== void 0 || d.has(void 0)) && f(d.get(r)), y && f(d.get(Br)), i) {
        case "add":
          h ? y && f(d.get("length")) : (f(d.get(Ni)), Si(t) && f(d.get(rl)));
          break;
        case "delete":
          h || (f(d.get(Ni)), Si(t) && f(d.get(rl)));
          break;
        case "set":
          Si(t) && f(d.get(Ni));
          break;
      }
  }
  Sl();
}
function Zi(t) {
  const i = /* @__PURE__ */ ue(t);
  return i === t ? i : (Ye(i, "iterate", Br), /* @__PURE__ */ ht(t) ? i : i.map(pn));
}
function _o(t) {
  return Ye(t = /* @__PURE__ */ ue(t), "iterate", Br), t;
}
function yn(t, i) {
  return /* @__PURE__ */ dn(t) ? sr(/* @__PURE__ */ ci(t) ? pn(i) : i) : pn(i);
}
var FI = {
  __proto__: null,
  [Symbol.iterator]() {
    return $a(this, Symbol.iterator, (t) => yn(this, t));
  },
  concat(...t) {
    return Zi(this).concat(...t.map((i) => K(i) ? Zi(i) : i));
  },
  entries() {
    return $a(this, "entries", (t) => (t[1] = yn(this, t[1]), t));
  },
  every(t, i) {
    return jn(this, "every", t, i, void 0, arguments);
  },
  filter(t, i) {
    return jn(this, "filter", t, i, (r) => r.map((o) => yn(this, o)), arguments);
  },
  find(t, i) {
    return jn(this, "find", t, i, (r) => yn(this, r), arguments);
  },
  findIndex(t, i) {
    return jn(this, "findIndex", t, i, void 0, arguments);
  },
  findLast(t, i) {
    return jn(this, "findLast", t, i, (r) => yn(this, r), arguments);
  },
  findLastIndex(t, i) {
    return jn(this, "findLastIndex", t, i, void 0, arguments);
  },
  forEach(t, i) {
    return jn(this, "forEach", t, i, void 0, arguments);
  },
  includes(...t) {
    return Ha(this, "includes", t);
  },
  indexOf(...t) {
    return Ha(this, "indexOf", t);
  },
  join(t) {
    return Zi(this).join(t);
  },
  lastIndexOf(...t) {
    return Ha(this, "lastIndexOf", t);
  },
  map(t, i) {
    return jn(this, "map", t, i, void 0, arguments);
  },
  pop() {
    return yr(this, "pop");
  },
  push(...t) {
    return yr(this, "push", t);
  },
  reduce(t, ...i) {
    return Sd(this, "reduce", t, i);
  },
  reduceRight(t, ...i) {
    return Sd(this, "reduceRight", t, i);
  },
  shift() {
    return yr(this, "shift");
  },
  some(t, i) {
    return jn(this, "some", t, i, void 0, arguments);
  },
  splice(...t) {
    return yr(this, "splice", t);
  },
  toReversed() {
    return Zi(this).toReversed();
  },
  toSorted(t) {
    return Zi(this).toSorted(t);
  },
  toSpliced(...t) {
    return Zi(this).toSpliced(...t);
  },
  unshift(...t) {
    return yr(this, "unshift", t);
  },
  values() {
    return $a(this, "values", (t) => yn(this, t));
  }
};
function $a(t, i, r) {
  const o = _o(t), a = o[i]();
  return o !== t && !/* @__PURE__ */ ht(t) && (a._next = a.next, a.next = () => {
    const u = a._next();
    return u.done || (u.value = r(u.value)), u;
  }), a;
}
var BI = Array.prototype;
function jn(t, i, r, o, a, u) {
  const d = _o(t), f = d !== t && !/* @__PURE__ */ ht(t), h = d[i];
  if (h !== BI[i]) {
    const _ = h.apply(t, u);
    return f ? pn(_) : _;
  }
  let y = r;
  d !== t && (f ? y = function(_, U) {
    return r.call(this, yn(t, _), U, t);
  } : r.length > 2 && (y = function(_, U) {
    return r.call(this, _, U, t);
  }));
  const T = h.call(d, y, o);
  return f && a ? a(T) : T;
}
function Sd(t, i, r, o) {
  const a = _o(t), u = a !== t && !/* @__PURE__ */ ht(t);
  let d = r, f = !1;
  a !== t && (u ? (f = o.length === 0, d = function(y, T, _) {
    return f && (f = !1, y = yn(t, y)), r.call(this, y, yn(t, T), _, t);
  }) : r.length > 3 && (d = function(y, T, _) {
    return r.call(this, y, T, _, t);
  }));
  const h = a[i](d, ...o);
  return f ? yn(t, h) : h;
}
function Ha(t, i, r) {
  const o = /* @__PURE__ */ ue(t);
  Ye(o, "iterate", Br);
  const a = o[i](...r);
  return (a === -1 || a === !1) && /* @__PURE__ */ so(r[0]) ? (r[0] = /* @__PURE__ */ ue(r[0]), o[i](...r)) : a;
}
function yr(t, i, r = []) {
  un(), Al();
  const o = (/* @__PURE__ */ ue(t))[i].apply(t, r);
  return Sl(), cn(), o;
}
var VI = /* @__PURE__ */ Un("__proto__,__v_isRef,__isVue"), zp = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(an));
function jI(t) {
  an(t) || (t = String(t));
  const i = /* @__PURE__ */ ue(this);
  return Ye(i, "has", t), i.hasOwnProperty(t);
}
var Mp = class {
  constructor(t = !1, i = !1) {
    this._isReadonly = t, this._isShallow = i;
  }
  get(t, i, r) {
    if (i === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, a = this._isShallow;
    if (i === "__v_isReactive") return !o;
    if (i === "__v_isReadonly") return o;
    if (i === "__v_isShallow") return a;
    if (i === "__v_raw")
      return r === (o ? a ? Vp : Bp : a ? Fp : qp).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const u = K(t);
    if (!o) {
      let f;
      if (u && (f = FI[i])) return f;
      if (i === "hasOwnProperty") return jI;
    }
    const d = Reflect.get(t, i, /* @__PURE__ */ He(t) ? t : r);
    if ((an(i) ? zp.has(i) : VI(i)) || (o || Ye(t, "get", i), a)) return d;
    if (/* @__PURE__ */ He(d)) {
      const f = u && wl(i) ? d : d.value;
      return o && Ie(f) ? /* @__PURE__ */ ol(f) : f;
    }
    return Ie(d) ? o ? /* @__PURE__ */ ol(d) : /* @__PURE__ */ Rl(d) : d;
  }
}, Lp = class extends Mp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, r, o) {
    let a = t[i];
    const u = K(t) && wl(i);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ dn(a);
      if (!/* @__PURE__ */ ht(r) && !/* @__PURE__ */ dn(r) && (a = /* @__PURE__ */ ue(a), r = /* @__PURE__ */ ue(r)), !u && /* @__PURE__ */ He(a) && !/* @__PURE__ */ He(r)) return h ? (process.env.NODE_ENV !== "production" && ln(`Set operation on key "${String(i)}" failed: target is readonly.`, t[i]), !0) : (a.value = r, !0);
    }
    const d = u ? Number(i) < t.length : me(t, i), f = Reflect.set(t, i, r, /* @__PURE__ */ He(t) ? t : o);
    return t === /* @__PURE__ */ ue(o) && (d ? Cn(r, a) && An(t, "set", i, r, a) : An(t, "add", i, r)), f;
  }
  deleteProperty(t, i) {
    const r = me(t, i), o = t[i], a = Reflect.deleteProperty(t, i);
    return a && r && An(t, "delete", i, void 0, o), a;
  }
  has(t, i) {
    const r = Reflect.has(t, i);
    return (!an(i) || !zp.has(i)) && Ye(t, "has", i), r;
  }
  ownKeys(t) {
    return Ye(t, "iterate", K(t) ? "length" : Ni), Reflect.ownKeys(t);
  }
}, Dp = class extends Mp {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, i) {
    return process.env.NODE_ENV !== "production" && ln(`Set operation on key "${String(i)}" failed: target is readonly.`, t), !0;
  }
  deleteProperty(t, i) {
    return process.env.NODE_ENV !== "production" && ln(`Delete operation on key "${String(i)}" failed: target is readonly.`, t), !0;
  }
}, kI = /* @__PURE__ */ new Lp(), $I = /* @__PURE__ */ new Dp(), HI = /* @__PURE__ */ new Lp(!0), JI = /* @__PURE__ */ new Dp(!0), sl = (t) => t, $s = (t) => Reflect.getPrototypeOf(t);
function GI(t, i, r) {
  return function(...o) {
    const a = this.__v_raw, u = /* @__PURE__ */ ue(a), d = Si(u), f = t === "entries" || t === Symbol.iterator && d, h = t === "keys" && d, y = a[t](...o), T = r ? sl : i ? sr : pn;
    return !i && Ye(u, "iterate", h ? rl : Ni), Ne(Object.create(y), { next() {
      const { value: _, done: U } = y.next();
      return U ? {
        value: _,
        done: U
      } : {
        value: f ? [T(_[0]), T(_[1])] : T(_),
        done: U
      };
    } });
  };
}
function Hs(t) {
  return function(...i) {
    if (process.env.NODE_ENV !== "production") {
      const r = i[0] ? `on key "${i[0]}" ` : "";
      ln(`${Io(t)} operation ${r}failed: target is readonly.`, /* @__PURE__ */ ue(this));
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function WI(t, i) {
  const r = {
    get(o) {
      const a = this.__v_raw, u = /* @__PURE__ */ ue(a), d = /* @__PURE__ */ ue(o);
      t || (Cn(o, d) && Ye(u, "get", o), Ye(u, "get", d));
      const { has: f } = $s(u), h = i ? sl : t ? sr : pn;
      if (f.call(u, o)) return h(a.get(o));
      if (f.call(u, d)) return h(a.get(d));
      a !== u && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && Ye(/* @__PURE__ */ ue(o), "iterate", Ni), o.size;
    },
    has(o) {
      const a = this.__v_raw, u = /* @__PURE__ */ ue(a), d = /* @__PURE__ */ ue(o);
      return t || (Cn(o, d) && Ye(u, "has", o), Ye(u, "has", d)), o === d ? a.has(o) : a.has(o) || a.has(d);
    },
    forEach(o, a) {
      const u = this, d = u.__v_raw, f = /* @__PURE__ */ ue(d), h = i ? sl : t ? sr : pn;
      return !t && Ye(f, "iterate", Ni), d.forEach((y, T) => o.call(a, h(y), h(T), u));
    }
  };
  return Ne(r, t ? {
    add: Hs("add"),
    set: Hs("set"),
    delete: Hs("delete"),
    clear: Hs("clear")
  } : {
    add(o) {
      const a = /* @__PURE__ */ ue(this), u = $s(a), d = /* @__PURE__ */ ue(o), f = !i && !/* @__PURE__ */ ht(o) && !/* @__PURE__ */ dn(o) ? d : o;
      return u.has.call(a, f) || Cn(o, f) && u.has.call(a, o) || Cn(d, f) && u.has.call(a, d) || (a.add(f), An(a, "add", f, f)), this;
    },
    set(o, a) {
      !i && !/* @__PURE__ */ ht(a) && !/* @__PURE__ */ dn(a) && (a = /* @__PURE__ */ ue(a));
      const u = /* @__PURE__ */ ue(this), { has: d, get: f } = $s(u);
      let h = d.call(u, o);
      h ? process.env.NODE_ENV !== "production" && Nd(u, d, o) : (o = /* @__PURE__ */ ue(o), h = d.call(u, o));
      const y = f.call(u, o);
      return u.set(o, a), h ? Cn(a, y) && An(u, "set", o, a, y) : An(u, "add", o, a), this;
    },
    delete(o) {
      const a = /* @__PURE__ */ ue(this), { has: u, get: d } = $s(a);
      let f = u.call(a, o);
      f ? process.env.NODE_ENV !== "production" && Nd(a, u, o) : (o = /* @__PURE__ */ ue(o), f = u.call(a, o));
      const h = d ? d.call(a, o) : void 0, y = a.delete(o);
      return f && An(a, "delete", o, void 0, h), y;
    },
    clear() {
      const o = /* @__PURE__ */ ue(this), a = o.size !== 0, u = process.env.NODE_ENV !== "production" ? Si(o) ? new Map(o) : new Set(o) : void 0, d = o.clear();
      return a && An(o, "clear", void 0, void 0, u), d;
    }
  }), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    r[o] = GI(o, t, i);
  }), r;
}
function To(t, i) {
  const r = WI(t, i);
  return (o, a, u) => a === "__v_isReactive" ? !t : a === "__v_isReadonly" ? t : a === "__v_raw" ? o : Reflect.get(me(r, a) && a in o ? r : o, a, u);
}
var KI = { get: /* @__PURE__ */ To(!1, !1) }, YI = { get: /* @__PURE__ */ To(!1, !0) }, ZI = { get: /* @__PURE__ */ To(!0, !1) }, XI = { get: /* @__PURE__ */ To(!0, !0) };
function Nd(t, i, r) {
  const o = /* @__PURE__ */ ue(r);
  if (o !== r && i.call(t, o)) {
    const a = Tl(t);
    ln(`Reactive ${a} contains both the raw and reactive versions of the same object${a === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var qp = /* @__PURE__ */ new WeakMap(), Fp = /* @__PURE__ */ new WeakMap(), Bp = /* @__PURE__ */ new WeakMap(), Vp = /* @__PURE__ */ new WeakMap();
function QI(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function Rl(t) {
  return /* @__PURE__ */ dn(t) ? t : wo(t, !1, kI, KI, qp);
}
// @__NO_SIDE_EFFECTS__
function e_(t) {
  return wo(t, !1, HI, YI, Fp);
}
// @__NO_SIDE_EFFECTS__
function ol(t) {
  return wo(t, !0, $I, ZI, Bp);
}
// @__NO_SIDE_EFFECTS__
function Sn(t) {
  return wo(t, !0, JI, XI, Vp);
}
function wo(t, i, r, o, a) {
  if (!Ie(t))
    return process.env.NODE_ENV !== "production" && ln(`value cannot be made ${i ? "readonly" : "reactive"}: ${String(t)}`), t;
  if (t.__v_raw && !(i && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t)) return t;
  const u = a.get(t);
  if (u) return u;
  const d = QI(Tl(t));
  if (d === 0) return t;
  const f = new Proxy(t, d === 2 ? o : r);
  return a.set(t, f), f;
}
// @__NO_SIDE_EFFECTS__
function ci(t) {
  return /* @__PURE__ */ dn(t) ? /* @__PURE__ */ ci(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function dn(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ht(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function so(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ue(t) {
  const i = t && t.__v_raw;
  return i ? /* @__PURE__ */ ue(i) : t;
}
function t_(t) {
  return !me(t, "__v_skip") && Object.isExtensible(t) && ro(t, "__v_skip", !0), t;
}
var pn = (t) => Ie(t) ? /* @__PURE__ */ Rl(t) : t, sr = (t) => Ie(t) ? /* @__PURE__ */ ol(t) : t;
// @__NO_SIDE_EFFECTS__
function He(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function tn(t) {
  return n_(t, !1);
}
function n_(t, i) {
  return /* @__PURE__ */ He(t) ? t : new i_(t, i);
}
var i_ = class {
  constructor(t, i) {
    this.dep = new Ul(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ ue(t), this._value = i ? t : pn(t), this.__v_isShallow = i;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ ht(t) || /* @__PURE__ */ dn(t);
    t = r ? t : /* @__PURE__ */ ue(t), Cn(t, i) && (this._rawValue = t, this._value = r ? t : pn(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: i
    }) : this.dep.trigger());
  }
};
function Nt(t) {
  return /* @__PURE__ */ He(t) ? t.value : t;
}
var r_ = {
  get: (t, i, r) => i === "__v_raw" ? t : Nt(Reflect.get(t, i, r)),
  set: (t, i, r, o) => {
    const a = t[i];
    return /* @__PURE__ */ He(a) && !/* @__PURE__ */ He(r) ? (a.value = r, !0) : Reflect.set(t, i, r, o);
  }
};
function jp(t) {
  return /* @__PURE__ */ ci(t) ? t : new Proxy(t, r_);
}
var s_ = class {
  constructor(t, i, r) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new Ul(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Fr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = r;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && Ee !== this)
      return Np(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Op(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && ln("Write operation failed: computed value is readonly");
  }
};
// @__NO_SIDE_EFFECTS__
function o_(t, i, r = !1) {
  let o, a;
  te(t) ? o = t : (o = t.get, a = t.set);
  const u = new s_(o, a, r);
  return process.env.NODE_ENV !== "production" && i && !r && (u.onTrack = i.onTrack, u.onTrigger = i.onTrigger), u;
}
var Js = {}, oo = /* @__PURE__ */ new WeakMap(), Ai = void 0;
function a_(t, i = !1, r = Ai) {
  if (r) {
    let o = oo.get(r);
    o || oo.set(r, o = []), o.push(t);
  } else process.env.NODE_ENV !== "production" && !i && ln("onWatcherCleanup() was called when there was no active watcher to associate with.");
}
function l_(t, i, r = ye) {
  const { immediate: o, deep: a, once: u, scheduler: d, augmentJob: f, call: h } = r, y = (H) => {
    (r.onWarn || ln)("Invalid watch source: ", H, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, T = (H) => a ? H : /* @__PURE__ */ ht(H) || a === !1 || a === 0 ? Wn(H, 1) : Wn(H);
  let _, U, M, j, G = !1, ge = !1;
  if (/* @__PURE__ */ He(t) ? (U = () => t.value, G = /* @__PURE__ */ ht(t)) : /* @__PURE__ */ ci(t) ? (U = () => T(t), G = !0) : K(t) ? (ge = !0, G = t.some((H) => /* @__PURE__ */ ci(H) || /* @__PURE__ */ ht(H)), U = () => t.map((H) => {
    if (/* @__PURE__ */ He(H)) return H.value;
    if (/* @__PURE__ */ ci(H)) return T(H);
    if (te(H)) return h ? h(H, 2) : H();
    process.env.NODE_ENV !== "production" && y(H);
  })) : te(t) ? i ? U = h ? () => h(t, 2) : t : U = () => {
    if (M) {
      un();
      try {
        M();
      } finally {
        cn();
      }
    }
    const H = Ai;
    Ai = _;
    try {
      return h ? h(t, 3, [j]) : t(j);
    } finally {
      Ai = H;
    }
  } : (U = Ze, process.env.NODE_ENV !== "production" && y(t)), i && a) {
    const H = U, Oe = a === !0 ? 1 / 0 : a;
    U = () => Wn(H(), Oe);
  }
  const _e = LI(), he = () => {
    _.stop(), _e && _e.active && Il(_e.effects, _);
  };
  if (u && i) {
    const H = i;
    i = (...Oe) => {
      H(...Oe), he();
    };
  }
  let se = ge ? new Array(t.length).fill(Js) : Js;
  const ke = (H) => {
    if (!(!(_.flags & 1) || !_.dirty && !H))
      if (i) {
        const Oe = _.run();
        if (a || G || (ge ? Oe.some((De, qe) => Cn(De, se[qe])) : Cn(Oe, se))) {
          M && M();
          const De = Ai;
          Ai = _;
          try {
            const qe = [
              Oe,
              se === Js ? void 0 : ge && se[0] === Js ? [] : se,
              j
            ];
            se = Oe, h ? h(i, 3, qe) : i(...qe);
          } finally {
            Ai = De;
          }
        }
      } else _.run();
  };
  return f && f(ke), _ = new Ap(U), _.scheduler = d ? () => d(ke, !1) : ke, j = (H) => a_(H, !1, _), M = _.onStop = () => {
    const H = oo.get(_);
    if (H) {
      if (h) h(H, 4);
      else for (const Oe of H) Oe();
      oo.delete(_);
    }
  }, process.env.NODE_ENV !== "production" && (_.onTrack = r.onTrack, _.onTrigger = r.onTrigger), i ? o ? ke(!0) : se = _.run() : d ? d(ke.bind(null, !0), !0) : _.run(), he.pause = _.pause.bind(_), he.resume = _.resume.bind(_), he.stop = he, he;
}
function Wn(t, i = 1 / 0, r) {
  if (i <= 0 || !Ie(t) || t.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(t) || 0) >= i)) return t;
  if (r.set(t, i), i--, /* @__PURE__ */ He(t)) Wn(t.value, i, r);
  else if (K(t)) for (let o = 0; o < t.length; o++) Wn(t[o], i, r);
  else if (_p(t) || Si(t)) t.forEach((o) => {
    Wn(o, i, r);
  });
  else if (bo(t)) {
    for (const o in t) Wn(t[o], i, r);
    for (const o of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, o) && Wn(t[o], i, r);
  }
  return t;
}
var Ui = [];
function Ws(t) {
  Ui.push(t);
}
function Ks() {
  Ui.pop();
}
var Ja = !1;
function B(t, ...i) {
  if (Ja) return;
  Ja = !0, un();
  const r = Ui.length ? Ui[Ui.length - 1].component : null, o = r && r.appContext.config.warnHandler, a = u_();
  if (o) or(o, r, 11, [
    t + i.map((u) => {
      var d, f;
      return (f = (d = u.toString) == null ? void 0 : d.call(u)) != null ? f : JSON.stringify(u);
    }).join(""),
    r && r.proxy,
    a.map(({ vnode: u }) => `at <${Xr(r, u.type)}>`).join(`
`),
    a
  ]);
  else {
    const u = [`[Vue warn]: ${t}`, ...i];
    a.length && u.push(`
`, ...c_(a)), console.warn(...u);
  }
  cn(), Ja = !1;
}
function u_() {
  let t = Ui[Ui.length - 1];
  if (!t) return [];
  const i = [];
  for (; t; ) {
    const r = i[0];
    r && r.vnode === t ? r.recurseCount++ : i.push({
      vnode: t,
      recurseCount: 0
    });
    const o = t.component && t.component.parent;
    t = o && o.vnode;
  }
  return i;
}
function c_(t) {
  const i = [];
  return t.forEach((r, o) => {
    i.push(...o === 0 ? [] : [`
`], ...d_(r));
  }), i;
}
function d_({ vnode: t, recurseCount: i }) {
  const r = i > 0 ? `... (${i} recursive calls)` : "", o = t.component ? t.component.parent == null : !1, a = ` at <${Xr(t.component, t.type, o)}`, u = ">" + r;
  return t.props ? [
    a,
    ...p_(t.props),
    u
  ] : [a + u];
}
function p_(t) {
  const i = [], r = Object.keys(t);
  return r.slice(0, 3).forEach((o) => {
    i.push(...kp(o, t[o]));
  }), r.length > 3 && i.push(" ..."), i;
}
function kp(t, i, r) {
  return Re(i) ? (i = JSON.stringify(i), r ? i : [`${t}=${i}`]) : typeof i == "number" || typeof i == "boolean" || i == null ? r ? i : [`${t}=${i}`] : /* @__PURE__ */ He(i) ? (i = kp(t, /* @__PURE__ */ ue(i.value), !0), r ? i : [
    `${t}=Ref<`,
    i,
    ">"
  ]) : te(i) ? [`${t}=fn${i.name ? `<${i.name}>` : ""}`] : (i = /* @__PURE__ */ ue(i), r ? i : [`${t}=`, i]);
}
var Ol = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function or(t, i, r, o) {
  try {
    return o ? t(...o) : t();
  } catch (a) {
    Wr(a, i, r);
  }
}
function fn(t, i, r, o) {
  if (te(t)) {
    const a = or(t, i, r, o);
    return a && _l(a) && a.catch((u) => {
      Wr(u, i, r);
    }), a;
  }
  if (K(t)) {
    const a = [];
    for (let u = 0; u < t.length; u++) a.push(fn(t[u], i, r, o));
    return a;
  } else process.env.NODE_ENV !== "production" && B(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`);
}
function Wr(t, i, r, o = !0) {
  const a = i ? i.vnode : null, { errorHandler: u, throwUnhandledErrorInProduction: d } = i && i.appContext.config || ye;
  if (i) {
    let f = i.parent;
    const h = i.proxy, y = process.env.NODE_ENV !== "production" ? Ol[r] : `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; f; ) {
      const T = f.ec;
      if (T) {
        for (let _ = 0; _ < T.length; _++) if (T[_](t, h, y) === !1) return;
      }
      f = f.parent;
    }
    if (u) {
      un(), or(u, null, 10, [
        t,
        h,
        y
      ]), cn();
      return;
    }
  }
  f_(t, r, a, o, d);
}
function f_(t, i, r, o = !0, a = !1) {
  if (process.env.NODE_ENV !== "production") {
    const u = Ol[i];
    if (r && Ws(r), B(`Unhandled error${u ? ` during execution of ${u}` : ""}`), r && Ks(), o) throw t;
    console.error(t);
  } else {
    if (a) throw t;
    console.error(t);
  }
}
var gt = [], En = -1, ir = [], ui = null, Qi = 0, $p = /* @__PURE__ */ Promise.resolve(), ao = null, m_ = 100;
function Hp(t) {
  const i = ao || $p;
  return t ? i.then(this ? t.bind(this) : t) : i;
}
function g_(t) {
  let i = En + 1, r = gt.length;
  for (; i < r; ) {
    const o = i + r >>> 1, a = gt[o], u = Vr(a);
    u < t || u === t && a.flags & 2 ? i = o + 1 : r = o;
  }
  return i;
}
function Eo(t) {
  if (!(t.flags & 1)) {
    const i = Vr(t), r = gt[gt.length - 1];
    !r || !(t.flags & 2) && i >= Vr(r) ? gt.push(t) : gt.splice(g_(i), 0, t), t.flags |= 1, Jp();
  }
}
function Jp() {
  ao || (ao = $p.then(Kp));
}
function Gp(t) {
  K(t) ? ir.push(...t) : ui && t.id === -1 ? ui.splice(Qi + 1, 0, t) : t.flags & 1 || (ir.push(t), t.flags |= 1), Jp();
}
function Ud(t, i, r = En + 1) {
  for (process.env.NODE_ENV !== "production" && (i = i || /* @__PURE__ */ new Map()); r < gt.length; r++) {
    const o = gt[r];
    if (o && o.flags & 2) {
      if (t && o.id !== t.uid || process.env.NODE_ENV !== "production" && Pl(i, o)) continue;
      gt.splice(r, 1), r--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Wp(t) {
  if (ir.length) {
    const i = [...new Set(ir)].sort((r, o) => Vr(r) - Vr(o));
    if (ir.length = 0, ui) {
      ui.push(...i);
      return;
    }
    for (ui = i, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Qi = 0; Qi < ui.length; Qi++) {
      const r = ui[Qi];
      process.env.NODE_ENV !== "production" && Pl(t, r) || (r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2);
    }
    ui = null, Qi = 0;
  }
}
var Vr = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Kp(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const i = process.env.NODE_ENV !== "production" ? (r) => Pl(t, r) : Ze;
  try {
    for (En = 0; En < gt.length; En++) {
      const r = gt[En];
      if (r && !(r.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && i(r)) continue;
        r.flags & 4 && (r.flags &= -2), or(r, r.i, r.i ? 15 : 14), r.flags & 4 || (r.flags &= -2);
      }
    }
  } finally {
    for (; En < gt.length; En++) {
      const r = gt[En];
      r && (r.flags &= -2);
    }
    En = -1, gt.length = 0, Wp(t), ao = null, (gt.length || ir.length) && Kp(t);
  }
}
function Pl(t, i) {
  const r = t.get(i) || 0;
  if (r > m_) {
    const o = i.i, a = o && xf(o.type);
    return Wr(`Maximum recursive updates exceeded${a ? ` in component <${a}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10), !0;
  }
  return t.set(i, r + 1), !1;
}
var Pt = !1, Rd = (t) => {
  try {
    return Pt;
  } finally {
    Pt = t;
  }
}, Ys = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Gr().__VUE_HMR_RUNTIME__ = {
  createRecord: Ga(Yp),
  rerender: Ga(v_),
  reload: Ga(I_)
});
var Oi = /* @__PURE__ */ new Map();
function h_(t) {
  const i = t.type.__hmrId;
  let r = Oi.get(i);
  r || (Yp(i, t.type), r = Oi.get(i)), r.instances.add(t);
}
function b_(t) {
  Oi.get(t.type.__hmrId).instances.delete(t);
}
function Yp(t, i) {
  return Oi.has(t) ? !1 : (Oi.set(t, {
    initialDef: lo(i),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function lo(t) {
  return zf(t) ? t.__vccOpts : t;
}
function v_(t, i) {
  const r = Oi.get(t);
  r && (r.initialDef.render = i, [...r.instances].forEach((o) => {
    i && (o.render = i, lo(o.type).render = i), o.renderCache = [], Pt = !0, o.job.flags & 8 || o.update(), Pt = !1;
  }));
}
function I_(t, i) {
  const r = Oi.get(t);
  if (!r) return;
  i = lo(i), Od(r.initialDef, i);
  const o = [...r.instances];
  for (let a = 0; a < o.length; a++) {
    const u = o[a], d = lo(u.type);
    let f = Ys.get(d);
    f || (d !== r.initialDef && Od(d, i), Ys.set(d, f = /* @__PURE__ */ new Set())), f.add(u), u.appContext.propsCache.delete(u.type), u.appContext.emitsCache.delete(u.type), u.appContext.optionsCache.delete(u.type), u.ceReload ? (f.add(u), u.ceReload(i.styles), f.delete(u)) : u.parent ? Eo(() => {
      u.job.flags & 8 || (Pt = !0, u.parent.update(), Pt = !1, f.delete(u));
    }) : u.appContext.reload ? u.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required."), u.root.ce && u !== u.root && u.root.ce._removeChildStyle(d);
  }
  Gp(() => {
    Ys.clear();
  });
}
function Od(t, i) {
  Ne(t, i);
  for (const r in t) r !== "__file" && !(r in i) && delete t[r];
}
function Ga(t) {
  return (i, r) => {
    try {
      return t(i, r);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
var rn, Sr = [], al = !1;
function Kr(t, ...i) {
  rn ? rn.emit(t, ...i) : al || Sr.push({
    event: t,
    args: i
  });
}
function xl(t, i) {
  var r, o;
  rn = t, rn ? (rn.enabled = !0, Sr.forEach(({ event: a, args: u }) => rn.emit(a, ...u)), Sr = []) : typeof window < "u" && window.HTMLElement && !((o = (r = window.navigator) == null ? void 0 : r.userAgent) != null && o.includes("jsdom")) ? ((i.__VUE_DEVTOOLS_HOOK_REPLAY__ = i.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    xl(a, i);
  }), setTimeout(() => {
    rn || (i.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, al = !0, Sr = []);
  }, 3e3)) : (al = !0, Sr = []);
}
function __(t, i) {
  Kr("app:init", t, i, {
    Fragment: Rt,
    Text: Yr,
    Comment: zt,
    Static: Qs
  });
}
function T_(t) {
  Kr("app:unmount", t);
}
var w_ = /* @__PURE__ */ zl("component:added"), Zp = /* @__PURE__ */ zl("component:updated"), E_ = /* @__PURE__ */ zl("component:removed"), y_ = (t) => {
  rn && typeof rn.cleanupBuffer == "function" && !rn.cleanupBuffer(t) && E_(t);
};
// @__NO_SIDE_EFFECTS__
function zl(t) {
  return (i) => {
    Kr(t, i.appContext.app, i.uid, i.parent ? i.parent.uid : void 0, i);
  };
}
var C_ = /* @__PURE__ */ Xp("perf:start"), A_ = /* @__PURE__ */ Xp("perf:end");
function Xp(t) {
  return (i, r, o) => {
    Kr(t, i.appContext.app, i.uid, i, r, o);
  };
}
function S_(t, i, r) {
  Kr("component:emit", t.appContext.app, t, i, r);
}
var lt = null, Qp = null;
function uo(t) {
  const i = lt;
  return lt = t, Qp = t && t.type.__scopeId || null, i;
}
function N_(t, i = lt, r) {
  if (!i || t._n) return t;
  const o = (...a) => {
    o._d && Hd(-1);
    const u = uo(i);
    let d;
    try {
      d = t(...a);
    } finally {
      uo(u), o._d && Hd(1);
    }
    return process.env.NODE_ENV !== "production" && Zp(i), d;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ef(t) {
  _I(t) && B("Do not use built-in directive ids as custom directive id: " + t);
}
function U_(t, i) {
  if (lt === null)
    return process.env.NODE_ENV !== "production" && B("withDirectives can only be used inside render functions."), t;
  const r = So(lt), o = t.dirs || (t.dirs = []);
  for (let a = 0; a < i.length; a++) {
    let [u, d, f, h = ye] = i[a];
    u && (te(u) && (u = {
      mounted: u,
      updated: u
    }), u.deep && Wn(d), o.push({
      dir: u,
      instance: r,
      value: d,
      oldValue: void 0,
      arg: f,
      modifiers: h
    }));
  }
  return t;
}
function wi(t, i, r, o) {
  const a = t.dirs, u = i && i.dirs;
  for (let d = 0; d < a.length; d++) {
    const f = a[d];
    u && (f.oldValue = u[d].value);
    let h = f.dir[o];
    h && (un(), fn(h, r, 8, [
      t.el,
      f,
      t,
      i
    ]), cn());
  }
}
function R_(t, i) {
  if (process.env.NODE_ENV !== "production" && (!Ke || Ke.isMounted) && B("provide() can only be used inside setup()."), Ke) {
    let r = Ke.provides;
    const o = Ke.parent && Ke.parent.provides;
    o === r && (r = Ke.provides = Object.create(o)), r[t] = i;
  }
}
function Zs(t, i, r = !1) {
  const o = Uf();
  if (o || rr) {
    let a = rr ? rr._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (a && t in a) return a[t];
    if (arguments.length > 1) return r && te(i) ? i.call(o && o.proxy) : i;
    process.env.NODE_ENV !== "production" && B(`injection "${String(t)}" not found.`);
  } else process.env.NODE_ENV !== "production" && B("inject() can only be used inside setup() or functional components.");
}
var O_ = /* @__PURE__ */ Symbol.for("v-scx"), P_ = () => {
  {
    const t = Zs(O_);
    return t || process.env.NODE_ENV !== "production" && B("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), t;
  }
};
function xr(t, i, r) {
  return process.env.NODE_ENV !== "production" && !te(i) && B("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), tf(t, i, r);
}
function tf(t, i, r = ye) {
  const { immediate: o, deep: a, flush: u, once: d } = r;
  process.env.NODE_ENV !== "production" && !i && (o !== void 0 && B('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), a !== void 0 && B('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'), d !== void 0 && B('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));
  const f = Ne({}, r);
  process.env.NODE_ENV !== "production" && (f.onWarn = B);
  const h = i && o || !i && u !== "post";
  let y;
  if (kr) {
    if (u === "sync") {
      const M = P_();
      y = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!h) {
      const M = () => {
      };
      return M.stop = Ze, M.resume = Ze, M.pause = Ze, M;
    }
  }
  const T = Ke;
  f.call = (M, j, G) => fn(M, T, j, G);
  let _ = !1;
  u === "post" ? f.scheduler = (M) => {
    Tt(M, T && T.suspense);
  } : u !== "sync" && (_ = !0, f.scheduler = (M, j) => {
    j ? M() : Eo(M);
  }), f.augmentJob = (M) => {
    i && (M.flags |= 4), _ && (M.flags |= 2, T && (M.id = T.uid, M.i = T));
  };
  const U = l_(t, i, f);
  return kr && (y ? y.push(U) : h && U()), U;
}
function x_(t, i, r) {
  const o = this.proxy, a = Re(t) ? t.includes(".") ? nf(o, t) : () => o[t] : t.bind(o, o);
  let u;
  te(i) ? u = i : (u = i.handler, r = i);
  const d = Zr(this), f = tf(a, u.bind(o), r);
  return d(), f;
}
function nf(t, i) {
  const r = i.split(".");
  return () => {
    let o = t;
    for (let a = 0; a < r.length && o; a++) o = o[r[a]];
    return o;
  };
}
var z_ = /* @__PURE__ */ Symbol("_vte"), M_ = (t) => t.__isTeleport, Wa = /* @__PURE__ */ Symbol("_leaveCb");
function Ml(t, i) {
  t.shapeFlag & 6 && t.component ? (t.transition = i, Ml(t.component.subTree, i)) : t.shapeFlag & 128 ? (t.ssContent.transition = i.clone(t.ssContent), t.ssFallback.transition = i.clone(t.ssFallback)) : t.transition = i;
}
// @__NO_SIDE_EFFECTS__
function rf(t, i) {
  return te(t) ? Ne({ name: t.name }, i, { setup: t }) : t;
}
function sf(t) {
  t.ids = [
    t.ids[0] + t.ids[2]++ + "-",
    0,
    0
  ];
}
var Pd = /* @__PURE__ */ new WeakSet();
function xd(t, i) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(t, i)) && !r.configurable);
}
var co = /* @__PURE__ */ new WeakMap();
function zr(t, i, r, o, a = !1) {
  if (K(t)) {
    t.forEach((G, ge) => zr(G, i && (K(i) ? i[ge] : i), r, o, a));
    return;
  }
  if (Mr(o) && !a) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && zr(t, i, r, o.component.subTree);
    return;
  }
  const u = o.shapeFlag & 4 ? So(o.component) : o.el, d = a ? null : u, { i: f, r: h } = t;
  if (process.env.NODE_ENV !== "production" && !f) {
    B("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const y = i && i.r, T = f.refs === ye ? f.refs = {} : f.refs, _ = f.setupState, U = /* @__PURE__ */ ue(_), M = _ === ye ? Ip : (G) => process.env.NODE_ENV !== "production" && (me(U, G) && !/* @__PURE__ */ He(U[G]) && B(`Template ref "${G}" used on a non-ref value. It will not work in the production build.`), Pd.has(U[G])) || xd(T, G) ? !1 : me(U, G), j = (G, ge) => !(process.env.NODE_ENV !== "production" && Pd.has(G) || ge && xd(T, ge));
  if (y != null && y !== h) {
    if (zd(i), Re(y))
      T[y] = null, M(y) && (_[y] = null);
    else if (/* @__PURE__ */ He(y)) {
      const G = i;
      j(y, G.k) && (y.value = null), G.k && (T[G.k] = null);
    }
  }
  if (te(h)) or(h, f, 12, [d, T]);
  else {
    const G = Re(h), ge = /* @__PURE__ */ He(h);
    if (G || ge) {
      const _e = () => {
        if (t.f) {
          const he = G ? M(h) ? _[h] : T[h] : j(h) || !t.k ? h.value : T[t.k];
          if (a) K(he) && Il(he, u);
          else if (K(he)) he.includes(u) || he.push(u);
          else if (G)
            T[h] = [u], M(h) && (_[h] = T[h]);
          else {
            const se = [u];
            j(h, t.k) && (h.value = se), t.k && (T[t.k] = se);
          }
        } else G ? (T[h] = d, M(h) && (_[h] = d)) : ge ? (j(h, t.k) && (h.value = d), t.k && (T[t.k] = d)) : process.env.NODE_ENV !== "production" && B("Invalid template ref type:", h, `(${typeof h})`);
      };
      if (d) {
        const he = () => {
          _e(), co.delete(t);
        };
        he.id = -1, co.set(t, he), Tt(he, r);
      } else
        zd(t), _e();
    } else process.env.NODE_ENV !== "production" && B("Invalid template ref type:", h, `(${typeof h})`);
  }
}
function zd(t) {
  const i = co.get(t);
  i && (i.flags |= 8, co.delete(t));
}
var X3 = Gr().requestIdleCallback || ((t) => setTimeout(t, 1)), Q3 = Gr().cancelIdleCallback || ((t) => clearTimeout(t)), Mr = (t) => !!t.type.__asyncLoader, Ll = (t) => t.type.__isKeepAlive;
function L_(t, i) {
  of(t, "a", i);
}
function D_(t, i) {
  of(t, "da", i);
}
function of(t, i, r = Ke) {
  const o = t.__wdc || (t.__wdc = () => {
    let a = r;
    for (; a; ) {
      if (a.isDeactivated) return;
      a = a.parent;
    }
    return t();
  });
  if (yo(i, o, r), r) {
    let a = r.parent;
    for (; a && a.parent; )
      Ll(a.parent.vnode) && q_(o, i, r, a), a = a.parent;
  }
}
function q_(t, i, r, o) {
  const a = yo(i, t, o, !0);
  af(() => {
    Il(o[i], a);
  }, r);
}
function yo(t, i, r = Ke, o = !1) {
  if (r) {
    const a = r[t] || (r[t] = []), u = i.__weh || (i.__weh = (...d) => {
      un();
      const f = Zr(r), h = fn(i, r, t, d);
      return f(), cn(), h;
    });
    return o ? a.unshift(u) : a.push(u), u;
  } else process.env.NODE_ENV !== "production" && B(`${Ci(Ol[t].replace(/ hook$/, ""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
}
var Kn = (t) => (i, r = Ke) => {
  (!kr || t === "sp") && yo(t, (...o) => i(...o), r);
}, F_ = Kn("bm"), B_ = Kn("m"), V_ = Kn("bu"), j_ = Kn("u"), k_ = Kn("bum"), af = Kn("um"), $_ = Kn("sp"), H_ = Kn("rtg"), J_ = Kn("rtc");
function G_(t, i = Ke) {
  yo("ec", t, i);
}
var W_ = /* @__PURE__ */ Symbol.for("v-ndc");
function Ka(t, i, r, o) {
  let a;
  const u = r && r[o], d = K(t);
  if (d || Re(t)) {
    const f = d && /* @__PURE__ */ ci(t);
    let h = !1, y = !1;
    f && (h = !/* @__PURE__ */ ht(t), y = /* @__PURE__ */ dn(t), t = _o(t)), a = new Array(t.length);
    for (let T = 0, _ = t.length; T < _; T++) a[T] = i(h ? y ? sr(pn(t[T])) : pn(t[T]) : t[T], T, void 0, u && u[T]);
  } else if (typeof t == "number") if (process.env.NODE_ENV !== "production" && (!Number.isInteger(t) || t < 0))
    B(`The v-for range expects a positive integer value but got ${t}.`), a = [];
  else {
    a = new Array(t);
    for (let f = 0; f < t; f++) a[f] = i(f + 1, f, void 0, u && u[f]);
  }
  else if (Ie(t)) if (t[Symbol.iterator]) a = Array.from(t, (f, h) => i(f, h, void 0, u && u[h]));
  else {
    const f = Object.keys(t);
    a = new Array(f.length);
    for (let h = 0, y = f.length; h < y; h++) {
      const T = f[h];
      a[h] = i(t[T], T, h, u && u[h]);
    }
  }
  else a = [];
  return r && (r[o] = a), a;
}
var ll = (t) => t ? Rf(t) ? So(t) : ll(t.parent) : null, Ri = /* @__PURE__ */ Ne(/* @__PURE__ */ Object.create(null), {
  $: (t) => t,
  $el: (t) => t.vnode.el,
  $data: (t) => t.data,
  $props: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(t.props) : t.props,
  $attrs: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(t.attrs) : t.attrs,
  $slots: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(t.slots) : t.slots,
  $refs: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(t.refs) : t.refs,
  $parent: (t) => ll(t.parent),
  $root: (t) => ll(t.root),
  $host: (t) => t.ce,
  $emit: (t) => t.emit,
  $options: (t) => ql(t),
  $forceUpdate: (t) => t.f || (t.f = () => {
    Eo(t.update);
  }),
  $nextTick: (t) => t.n || (t.n = Hp.bind(t.proxy)),
  $watch: (t) => x_.bind(t)
}), Dl = (t) => t === "_" || t === "$", Ya = (t, i) => t !== ye && !t.__isScriptSetup && me(t, i), lf = {
  get({ _: t }, i) {
    if (i === "__v_skip") return !0;
    const { ctx: r, setupState: o, data: a, props: u, accessCache: d, type: f, appContext: h } = t;
    if (process.env.NODE_ENV !== "production" && i === "__isVue") return !0;
    if (i[0] !== "$") {
      const U = d[i];
      if (U !== void 0) switch (U) {
        case 1:
          return o[i];
        case 2:
          return a[i];
        case 4:
          return r[i];
        case 3:
          return u[i];
      }
      else {
        if (Ya(o, i))
          return d[i] = 1, o[i];
        if (a !== ye && me(a, i))
          return d[i] = 2, a[i];
        if (me(u, i))
          return d[i] = 3, u[i];
        if (r !== ye && me(r, i))
          return d[i] = 4, r[i];
        ul && (d[i] = 0);
      }
    }
    const y = Ri[i];
    let T, _;
    if (y)
      return i === "$attrs" ? (Ye(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && fo()) : process.env.NODE_ENV !== "production" && i === "$slots" && Ye(t, "get", i), y(t);
    if ((T = f.__cssModules) && (T = T[i])) return T;
    if (r !== ye && me(r, i))
      return d[i] = 4, r[i];
    if (_ = h.config.globalProperties, me(_, i)) return _[i];
    process.env.NODE_ENV !== "production" && lt && (!Re(i) || i.indexOf("__v") !== 0) && (a !== ye && Dl(i[0]) && me(a, i) ? B(`Property ${JSON.stringify(i)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : t === lt && B(`Property ${JSON.stringify(i)} was accessed during render but is not defined on instance.`));
  },
  set({ _: t }, i, r) {
    const { data: o, setupState: a, ctx: u } = t;
    return Ya(a, i) ? (a[i] = r, !0) : process.env.NODE_ENV !== "production" && a.__isScriptSetup && me(a, i) ? (B(`Cannot mutate <script setup> binding "${i}" from Options API.`), !1) : o !== ye && me(o, i) ? (o[i] = r, !0) : me(t.props, i) ? (process.env.NODE_ENV !== "production" && B(`Attempting to mutate prop "${i}". Props are readonly.`), !1) : i[0] === "$" && i.slice(1) in t ? (process.env.NODE_ENV !== "production" && B(`Attempting to mutate public property "${i}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && i in t.appContext.config.globalProperties ? Object.defineProperty(u, i, {
      enumerable: !0,
      configurable: !0,
      value: r
    }) : u[i] = r, !0);
  },
  has({ _: { data: t, setupState: i, accessCache: r, ctx: o, appContext: a, props: u, type: d } }, f) {
    let h;
    return !!(r[f] || t !== ye && f[0] !== "$" && me(t, f) || Ya(i, f) || me(u, f) || me(o, f) || me(Ri, f) || me(a.config.globalProperties, f) || (h = d.__cssModules) && h[f]);
  },
  defineProperty(t, i, r) {
    return r.get != null ? t._.accessCache[i] = 0 : me(r, "value") && this.set(t, i, r.value, null), Reflect.defineProperty(t, i, r);
  }
};
process.env.NODE_ENV !== "production" && (lf.ownKeys = (t) => (B("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(t)));
function K_(t) {
  const i = {};
  return Object.defineProperty(i, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(Ri).forEach((r) => {
    Object.defineProperty(i, r, {
      configurable: !0,
      enumerable: !1,
      get: () => Ri[r](t),
      set: Ze
    });
  }), i;
}
function Y_(t) {
  const { ctx: i, propsOptions: [r] } = t;
  r && Object.keys(r).forEach((o) => {
    Object.defineProperty(i, o, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[o],
      set: Ze
    });
  });
}
function Z_(t) {
  const { ctx: i, setupState: r } = t;
  Object.keys(/* @__PURE__ */ ue(r)).forEach((o) => {
    if (!r.__isScriptSetup) {
      if (Dl(o[0])) {
        B(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(i, o, {
        enumerable: !0,
        configurable: !0,
        get: () => r[o],
        set: Ze
      });
    }
  });
}
function Md(t) {
  return K(t) ? t.reduce((i, r) => (i[r] = null, i), {}) : t;
}
function X_() {
  const t = /* @__PURE__ */ Object.create(null);
  return (i, r) => {
    t[r] ? B(`${i} property "${r}" is already defined in ${t[r]}.`) : t[r] = i;
  };
}
var ul = !0;
function Q_(t) {
  const i = ql(t), r = t.proxy, o = t.ctx;
  ul = !1, i.beforeCreate && Ld(i.beforeCreate, t, "bc");
  const { data: a, computed: u, methods: d, watch: f, provide: h, inject: y, created: T, beforeMount: _, mounted: U, beforeUpdate: M, updated: j, activated: G, deactivated: ge, beforeDestroy: _e, beforeUnmount: he, destroyed: se, unmounted: ke, render: H, renderTracked: Oe, renderTriggered: De, errorCaptured: qe, serverPrefetch: Xe, expose: Wt, inheritAttrs: mn, components: wt, directives: xi, filters: ar } = i, gn = process.env.NODE_ENV !== "production" ? X_() : null;
  if (process.env.NODE_ENV !== "production") {
    const [ae] = t.propsOptions;
    if (ae) for (const ne in ae) gn("Props", ne);
  }
  if (y && e2(y, o, gn), d) for (const ae in d) {
    const ne = d[ae];
    te(ne) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, ae, {
      value: ne.bind(r),
      configurable: !0,
      enumerable: !0,
      writable: !0
    }) : o[ae] = ne.bind(r), process.env.NODE_ENV !== "production" && gn("Methods", ae)) : process.env.NODE_ENV !== "production" && B(`Method "${ae}" has type "${typeof ne}" in the component definition. Did you reference the function correctly?`);
  }
  if (a) {
    process.env.NODE_ENV !== "production" && !te(a) && B("The data option must be a function. Plain object usage is no longer supported.");
    const ae = a.call(r, r);
    if (process.env.NODE_ENV !== "production" && _l(ae) && B("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !Ie(ae)) process.env.NODE_ENV !== "production" && B("data() should return an object.");
    else if (t.data = /* @__PURE__ */ Rl(ae), process.env.NODE_ENV !== "production") for (const ne in ae)
      gn("Data", ne), Dl(ne[0]) || Object.defineProperty(o, ne, {
        configurable: !0,
        enumerable: !0,
        get: () => ae[ne],
        set: Ze
      });
  }
  if (ul = !0, u) for (const ae in u) {
    const ne = u[ae], Mt = te(ne) ? ne.bind(r, r) : te(ne.get) ? ne.get.bind(r, r) : Ze;
    process.env.NODE_ENV !== "production" && Mt === Ze && B(`Computed property "${ae}" has no getter.`);
    const Rn = no({
      get: Mt,
      set: !te(ne) && te(ne.set) ? ne.set.bind(r) : process.env.NODE_ENV !== "production" ? () => {
        B(`Write operation failed: computed property "${ae}" is readonly.`);
      } : Ze
    });
    Object.defineProperty(o, ae, {
      enumerable: !0,
      configurable: !0,
      get: () => Rn.value,
      set: (ut) => Rn.value = ut
    }), process.env.NODE_ENV !== "production" && gn("Computed", ae);
  }
  if (f) for (const ae in f) uf(f[ae], o, r, ae);
  if (h) {
    const ae = te(h) ? h.call(r) : h;
    Reflect.ownKeys(ae).forEach((ne) => {
      R_(ne, ae[ne]);
    });
  }
  T && Ld(T, t, "c");
  function st(ae, ne) {
    K(ne) ? ne.forEach((Mt) => ae(Mt.bind(r))) : ne && ae(ne.bind(r));
  }
  if (st(F_, _), st(B_, U), st(V_, M), st(j_, j), st(L_, G), st(D_, ge), st(G_, qe), st(J_, Oe), st(H_, De), st(k_, he), st(af, ke), st($_, Xe), K(Wt))
    if (Wt.length) {
      const ae = t.exposed || (t.exposed = {});
      Wt.forEach((ne) => {
        Object.defineProperty(ae, ne, {
          get: () => r[ne],
          set: (Mt) => r[ne] = Mt,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  H && t.render === Ze && (t.render = H), mn != null && (t.inheritAttrs = mn), wt && (t.components = wt), xi && (t.directives = xi), Xe && sf(t);
}
function e2(t, i, r = Ze) {
  K(t) && (t = cl(t));
  for (const o in t) {
    const a = t[o];
    let u;
    Ie(a) ? "default" in a ? u = Zs(a.from || o, a.default, !0) : u = Zs(a.from || o) : u = Zs(a), /* @__PURE__ */ He(u) ? Object.defineProperty(i, o, {
      enumerable: !0,
      configurable: !0,
      get: () => u.value,
      set: (d) => u.value = d
    }) : i[o] = u, process.env.NODE_ENV !== "production" && r("Inject", o);
  }
}
function Ld(t, i, r) {
  fn(K(t) ? t.map((o) => o.bind(i.proxy)) : t.bind(i.proxy), i, r);
}
function uf(t, i, r, o) {
  let a = o.includes(".") ? nf(r, o) : () => r[o];
  if (Re(t)) {
    const u = i[t];
    te(u) ? xr(a, u) : process.env.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${t}"`, u);
  } else if (te(t)) xr(a, t.bind(r));
  else if (Ie(t)) if (K(t)) t.forEach((u) => uf(u, i, r, o));
  else {
    const u = te(t.handler) ? t.handler.bind(r) : i[t.handler];
    te(u) ? xr(a, u, t) : process.env.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${t.handler}"`, u);
  }
  else process.env.NODE_ENV !== "production" && B(`Invalid watch option: "${o}"`, t);
}
function ql(t) {
  const i = t.type, { mixins: r, extends: o } = i, { mixins: a, optionsCache: u, config: { optionMergeStrategies: d } } = t.appContext, f = u.get(i);
  let h;
  return f ? h = f : !a.length && !r && !o ? h = i : (h = {}, a.length && a.forEach((y) => po(h, y, d, !0)), po(h, i, d)), Ie(i) && u.set(i, h), h;
}
function po(t, i, r, o = !1) {
  const { mixins: a, extends: u } = i;
  u && po(t, u, r, !0), a && a.forEach((d) => po(t, d, r, !0));
  for (const d in i) if (o && d === "expose") process.env.NODE_ENV !== "production" && B('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
  else {
    const f = t2[d] || r && r[d];
    t[d] = f ? f(t[d], i[d]) : i[d];
  }
  return t;
}
var t2 = {
  data: Dd,
  props: qd,
  emits: qd,
  methods: Nr,
  computed: Nr,
  beforeCreate: mt,
  created: mt,
  beforeMount: mt,
  mounted: mt,
  beforeUpdate: mt,
  updated: mt,
  beforeDestroy: mt,
  beforeUnmount: mt,
  destroyed: mt,
  unmounted: mt,
  activated: mt,
  deactivated: mt,
  errorCaptured: mt,
  serverPrefetch: mt,
  components: Nr,
  directives: Nr,
  watch: i2,
  provide: Dd,
  inject: n2
};
function Dd(t, i) {
  return i ? t ? function() {
    return Ne(te(t) ? t.call(this, this) : t, te(i) ? i.call(this, this) : i);
  } : i : t;
}
function n2(t, i) {
  return Nr(cl(t), cl(i));
}
function cl(t) {
  if (K(t)) {
    const i = {};
    for (let r = 0; r < t.length; r++) i[t[r]] = t[r];
    return i;
  }
  return t;
}
function mt(t, i) {
  return t ? [...new Set([].concat(t, i))] : i;
}
function Nr(t, i) {
  return t ? Ne(/* @__PURE__ */ Object.create(null), t, i) : i;
}
function qd(t, i) {
  return t ? K(t) && K(i) ? [.../* @__PURE__ */ new Set([...t, ...i])] : Ne(/* @__PURE__ */ Object.create(null), Md(t), Md(i ?? {})) : i;
}
function i2(t, i) {
  if (!t) return i;
  if (!i) return t;
  const r = Ne(/* @__PURE__ */ Object.create(null), t);
  for (const o in i) r[o] = mt(t[o], i[o]);
  return r;
}
function cf() {
  return {
    app: null,
    config: {
      isNativeTag: Ip,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
var r2 = 0;
function s2(t, i) {
  return function(o, a = null) {
    te(o) || (o = Ne({}, o)), a != null && !Ie(a) && (process.env.NODE_ENV !== "production" && B("root props passed to app.mount() must be an object."), a = null);
    const u = cf(), d = /* @__PURE__ */ new WeakSet(), f = [];
    let h = !1;
    const y = u.app = {
      _uid: r2++,
      _component: o,
      _props: a,
      _container: null,
      _context: u,
      _instance: null,
      version: Zd,
      get config() {
        return u.config;
      },
      set config(T) {
        process.env.NODE_ENV !== "production" && B("app.config cannot be replaced. Modify individual options instead.");
      },
      use(T, ..._) {
        return d.has(T) ? process.env.NODE_ENV !== "production" && B("Plugin has already been applied to target app.") : T && te(T.install) ? (d.add(T), T.install(y, ..._)) : te(T) ? (d.add(T), T(y, ..._)) : process.env.NODE_ENV !== "production" && B('A plugin must either be a function or an object with an "install" function.'), y;
      },
      mixin(T) {
        return u.mixins.includes(T) ? process.env.NODE_ENV !== "production" && B("Mixin has already been applied to target app" + (T.name ? `: ${T.name}` : "")) : u.mixins.push(T), y;
      },
      component(T, _) {
        return process.env.NODE_ENV !== "production" && hl(T, u.config), _ ? (process.env.NODE_ENV !== "production" && u.components[T] && B(`Component "${T}" has already been registered in target app.`), u.components[T] = _, y) : u.components[T];
      },
      directive(T, _) {
        return process.env.NODE_ENV !== "production" && ef(T), _ ? (process.env.NODE_ENV !== "production" && u.directives[T] && B(`Directive "${T}" has already been registered in target app.`), u.directives[T] = _, y) : u.directives[T];
      },
      mount(T, _, U) {
        if (h)
          process.env.NODE_ENV !== "production" && B("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && T.__vue_app__ && B("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const M = y._ceVNode || Nn(o, a);
          return M.appContext = u, U === !0 ? U = "svg" : U === !1 && (U = void 0), process.env.NODE_ENV !== "production" && (u.reload = () => {
            const j = di(M);
            j.el = null, t(j, T, U);
          }), _ && i ? i(M, T) : t(M, T, U), h = !0, y._container = T, T.__vue_app__ = y, process.env.NODE_ENV !== "production" && (y._instance = M.component, __(y, Zd)), So(M.component);
        }
      },
      onUnmount(T) {
        process.env.NODE_ENV !== "production" && typeof T != "function" && B(`Expected function as first argument to app.onUnmount(), but got ${typeof T}`), f.push(T);
      },
      unmount() {
        h ? (fn(f, y._instance, 16), t(null, y._container), process.env.NODE_ENV !== "production" && (y._instance = null, T_(y)), delete y._container.__vue_app__) : process.env.NODE_ENV !== "production" && B("Cannot unmount an app that is not mounted.");
      },
      provide(T, _) {
        return process.env.NODE_ENV !== "production" && T in u.provides && (me(u.provides, T) ? B(`App already provides property with key "${String(T)}". It will be overwritten with the new value.`) : B(`App already provides property with key "${String(T)}" inherited from its parent element. It will be overwritten with the new value.`)), u.provides[T] = _, y;
      },
      runWithContext(T) {
        const _ = rr;
        rr = y;
        try {
          return T();
        } finally {
          rr = _;
        }
      }
    };
    return y;
  };
}
var rr = null, o2 = (t, i) => i === "modelValue" || i === "model-value" ? t.modelModifiers : t[`${i}Modifiers`] || t[`${rt(i)}Modifiers`] || t[`${Ot(i)}Modifiers`];
function a2(t, i, ...r) {
  if (t.isUnmounted) return;
  const o = t.vnode.props || ye;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: T, propsOptions: [_] } = t;
    if (T) if (!(i in T))
      (!_ || !(Ci(rt(i)) in _)) && B(`Component emitted event "${i}" but it is neither declared in the emits option nor as an "${Ci(rt(i))}" prop.`);
    else {
      const U = T[i];
      te(U) && (U(...r) || B(`Invalid event arguments: event validation failed for event "${i}".`));
    }
  }
  let a = r;
  const u = i.startsWith("update:"), d = u && o2(o, i.slice(7));
  if (d && (d.trim && (a = r.map((T) => Re(T) ? T.trim() : T)), d.number && (a = r.map(El))), process.env.NODE_ENV !== "production" && S_(t, i, a), process.env.NODE_ENV !== "production") {
    const T = i.toLowerCase();
    T !== i && o[Ci(T)] && B(`Event "${T}" is emitted in component ${Xr(t, t.type)} but the handler is registered for "${i}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ot(i)}" instead of "${i}".`);
  }
  let f, h = o[f = Ci(i)] || o[f = Ci(rt(i))];
  !h && u && (h = o[f = Ci(Ot(i))]), h && fn(h, t, 6, a);
  const y = o[f + "Once"];
  if (y) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[f]) return;
    t.emitted[f] = !0, fn(y, t, 6, a);
  }
}
var l2 = /* @__PURE__ */ new WeakMap();
function df(t, i, r = !1) {
  const o = r ? l2 : i.emitsCache, a = o.get(t);
  if (a !== void 0) return a;
  const u = t.emits;
  let d = {}, f = !1;
  if (!te(t)) {
    const h = (y) => {
      const T = df(y, i, !0);
      T && (f = !0, Ne(d, T));
    };
    !r && i.mixins.length && i.mixins.forEach(h), t.extends && h(t.extends), t.mixins && t.mixins.forEach(h);
  }
  return !u && !f ? (Ie(t) && o.set(t, null), null) : (K(u) ? u.forEach((h) => d[h] = null) : Ne(d, u), Ie(t) && o.set(t, d), d);
}
function Co(t, i) {
  return !t || !Hr(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), me(t, i[0].toLowerCase() + i.slice(1)) || me(t, Ot(i)) || me(t, i));
}
var dl = !1;
function fo() {
  dl = !0;
}
function Za(t) {
  const { type: i, vnode: r, proxy: o, withProxy: a, propsOptions: [u], slots: d, attrs: f, emit: h, render: y, renderCache: T, props: _, data: U, setupState: M, ctx: j, inheritAttrs: G } = t, ge = uo(t);
  let _e, he;
  process.env.NODE_ENV !== "production" && (dl = !1);
  try {
    if (r.shapeFlag & 4) {
      const H = a || o, Oe = process.env.NODE_ENV !== "production" && M.__isScriptSetup ? new Proxy(H, { get(De, qe, Xe) {
        return B(`Property '${String(qe)}' was accessed via 'this'. Avoid using 'this' in templates.`), Reflect.get(De, qe, Xe);
      } }) : H;
      _e = nn(y.call(Oe, H, T, process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(_) : _, M, U, j)), he = f;
    } else {
      const H = i;
      process.env.NODE_ENV !== "production" && f === _ && fo(), _e = nn(H.length > 1 ? H(process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(_) : _, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return fo(), /* @__PURE__ */ Sn(f);
        },
        slots: d,
        emit: h
      } : {
        attrs: f,
        slots: d,
        emit: h
      }) : H(process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(_) : _, null)), he = i.props ? f : u2(f);
    }
  } catch (H) {
    Lr.length = 0, Wr(H, t, 1), _e = Nn(zt);
  }
  let se = _e, ke;
  if (process.env.NODE_ENV !== "production" && _e.patchFlag > 0 && _e.patchFlag & 2048 && ([se, ke] = pf(_e)), he && G !== !1) {
    const H = Object.keys(he), { shapeFlag: Oe } = se;
    if (H.length) {
      if (Oe & 7)
        u && H.some(Dr) && (he = c2(he, u)), se = di(se, he, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !dl && se.type !== zt) {
        const De = Object.keys(f), qe = [], Xe = [];
        for (let Wt = 0, mn = De.length; Wt < mn; Wt++) {
          const wt = De[Wt];
          Hr(wt) ? Dr(wt) || qe.push(wt[2].toLowerCase() + wt.slice(3)) : Xe.push(wt);
        }
        Xe.length && B(`Extraneous non-props attributes (${Xe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`), qe.length && B(`Extraneous non-emits event listeners (${qe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return r.dirs && (process.env.NODE_ENV !== "production" && !Fd(se) && B("Runtime directive used on component with non-element root node. The directives will not function as intended."), se = di(se, null, !1, !0), se.dirs = se.dirs ? se.dirs.concat(r.dirs) : r.dirs), r.transition && (process.env.NODE_ENV !== "production" && !Fd(se) && B("Component inside <Transition> renders non-element root node that cannot be animated."), Ml(se, r.transition)), process.env.NODE_ENV !== "production" && ke ? ke(se) : _e = se, uo(ge), _e;
}
var pf = (t) => {
  const i = t.children, r = t.dynamicChildren, o = Fl(i, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048) return pf(o);
  } else return [t, void 0];
  const a = i.indexOf(o), u = r ? r.indexOf(o) : -1, d = (f) => {
    i[a] = f, r && (u > -1 ? r[u] = f : f.patchFlag > 0 && (t.dynamicChildren = [...r, f]));
  };
  return [nn(o), d];
};
function Fl(t, i = !0) {
  let r;
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (Ao(a)) {
      if (a.type !== zt || a.children === "v-if") {
        if (r) return;
        if (r = a, process.env.NODE_ENV !== "production" && i && r.patchFlag > 0 && r.patchFlag & 2048) return Fl(r.children);
      }
    } else return;
  }
  return r;
}
var u2 = (t) => {
  let i;
  for (const r in t) (r === "class" || r === "style" || Hr(r)) && ((i || (i = {}))[r] = t[r]);
  return i;
}, c2 = (t, i) => {
  const r = {};
  for (const o in t) (!Dr(o) || !(o.slice(9) in i)) && (r[o] = t[o]);
  return r;
}, Fd = (t) => t.shapeFlag & 7 || t.type === zt;
function d2(t, i, r) {
  const { props: o, children: a, component: u } = t, { props: d, children: f, patchFlag: h } = i, y = u.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (a || f) && Pt || i.dirs || i.transition) return !0;
  if (r && h >= 0) {
    if (h & 1024) return !0;
    if (h & 16)
      return o ? Bd(o, d, y) : !!d;
    if (h & 8) {
      const T = i.dynamicProps;
      for (let _ = 0; _ < T.length; _++) {
        const U = T[_];
        if (ff(d, o, U) && !Co(y, U)) return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : o === d ? !1 : o ? d ? Bd(o, d, y) : !0 : !!d;
  return !1;
}
function Bd(t, i, r) {
  const o = Object.keys(i);
  if (o.length !== Object.keys(t).length) return !0;
  for (let a = 0; a < o.length; a++) {
    const u = o[a];
    if (ff(i, t, u) && !Co(r, u)) return !0;
  }
  return !1;
}
function ff(t, i, r) {
  const o = t[r], a = i[r];
  return r === "style" && Ie(o) && Ie(a) ? !Cl(o, a) : o !== a;
}
function p2({ vnode: t, parent: i, suspense: r }, o) {
  for (; i; ) {
    const a = i.subTree;
    if (a.suspense && a.suspense.activeBranch === t && (a.suspense.vnode.el = a.el = o, t = a), a === t)
      (t = i.vnode).el = o, i = i.parent;
    else break;
  }
  r && r.activeBranch === t && (r.vnode.el = o);
}
var mf = {}, gf = () => Object.create(mf), hf = (t) => Object.getPrototypeOf(t) === mf;
function f2(t, i, r, o = !1) {
  const a = {}, u = gf();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), bf(t, i, a, u);
  for (const d in t.propsOptions[0]) d in a || (a[d] = void 0);
  process.env.NODE_ENV !== "production" && If(i || {}, a, t), r ? t.props = o ? a : /* @__PURE__ */ e_(a) : t.type.props ? t.props = a : t.props = u, t.attrs = u;
}
function m2(t) {
  for (; t; ) {
    if (t.type.__hmrId) return !0;
    t = t.parent;
  }
}
function g2(t, i, r, o) {
  const { props: a, attrs: u, vnode: { patchFlag: d } } = t, f = /* @__PURE__ */ ue(a), [h] = t.propsOptions;
  let y = !1;
  if (!(process.env.NODE_ENV !== "production" && m2(t)) && (o || d > 0) && !(d & 16)) {
    if (d & 8) {
      const T = t.vnode.dynamicProps;
      for (let _ = 0; _ < T.length; _++) {
        let U = T[_];
        if (Co(t.emitsOptions, U)) continue;
        const M = i[U];
        if (h) if (me(u, U))
          M !== u[U] && (u[U] = M, y = !0);
        else {
          const j = rt(U);
          a[j] = pl(h, f, j, M, t, !1);
        }
        else M !== u[U] && (u[U] = M, y = !0);
      }
    }
  } else {
    bf(t, i, a, u) && (y = !0);
    let T;
    for (const _ in f) (!i || !me(i, _) && ((T = Ot(_)) === _ || !me(i, T))) && (h ? r && (r[_] !== void 0 || r[T] !== void 0) && (a[_] = pl(h, f, _, void 0, t, !0)) : delete a[_]);
    if (u !== f)
      for (const _ in u) (!i || !me(i, _)) && (delete u[_], y = !0);
  }
  y && An(t.attrs, "set", ""), process.env.NODE_ENV !== "production" && If(i || {}, a, t);
}
function bf(t, i, r, o) {
  const [a, u] = t.propsOptions;
  let d = !1, f;
  if (i) for (let h in i) {
    if (Rr(h)) continue;
    const y = i[h];
    let T;
    a && me(a, T = rt(h)) ? !u || !u.includes(T) ? r[T] = y : (f || (f = {}))[T] = y : Co(t.emitsOptions, h) || (!(h in o) || y !== o[h]) && (o[h] = y, d = !0);
  }
  if (u) {
    const h = /* @__PURE__ */ ue(r), y = f || ye;
    for (let T = 0; T < u.length; T++) {
      const _ = u[T];
      r[_] = pl(a, h, _, y[_], t, !me(y, _));
    }
  }
  return d;
}
function pl(t, i, r, o, a, u) {
  const d = t[r];
  if (d != null) {
    const f = me(d, "default");
    if (f && o === void 0) {
      const h = d.default;
      if (d.type !== Function && !d.skipFactory && te(h)) {
        const { propsDefaults: y } = a;
        if (r in y) o = y[r];
        else {
          const T = Zr(a);
          o = y[r] = h.call(null, i), T();
        }
      } else o = h;
      a.ce && a.ce._setProp(r, o);
    }
    d[0] && (u && !f ? o = !1 : d[1] && (o === "" || o === Ot(r)) && (o = !0));
  }
  return o;
}
var h2 = /* @__PURE__ */ new WeakMap();
function vf(t, i, r = !1) {
  const o = r ? h2 : i.propsCache, a = o.get(t);
  if (a) return a;
  const u = t.props, d = {}, f = [];
  let h = !1;
  if (!te(t)) {
    const T = (_) => {
      h = !0;
      const [U, M] = vf(_, i, !0);
      Ne(d, U), M && f.push(...M);
    };
    !r && i.mixins.length && i.mixins.forEach(T), t.extends && T(t.extends), t.mixins && t.mixins.forEach(T);
  }
  if (!u && !h)
    return Ie(t) && o.set(t, nr), nr;
  if (K(u)) for (let T = 0; T < u.length; T++) {
    process.env.NODE_ENV !== "production" && !Re(u[T]) && B("props must be strings when using array syntax.", u[T]);
    const _ = rt(u[T]);
    Vd(_) && (d[_] = ye);
  }
  else if (u) {
    process.env.NODE_ENV !== "production" && !Ie(u) && B("invalid props options", u);
    for (const T in u) {
      const _ = rt(T);
      if (Vd(_)) {
        const U = u[T], M = d[_] = K(U) || te(U) ? { type: U } : Ne({}, U), j = M.type;
        let G = !1, ge = !0;
        if (K(j)) for (let _e = 0; _e < j.length; ++_e) {
          const he = j[_e], se = te(he) && he.name;
          if (se === "Boolean") {
            G = !0;
            break;
          } else se === "String" && (ge = !1);
        }
        else G = te(j) && j.name === "Boolean";
        M[0] = G, M[1] = ge, (G || me(M, "default")) && f.push(_);
      }
    }
  }
  const y = [d, f];
  return Ie(t) && o.set(t, y), y;
}
function Vd(t) {
  return t[0] !== "$" && !Rr(t) ? !0 : (process.env.NODE_ENV !== "production" && B(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function b2(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function If(t, i, r) {
  const o = /* @__PURE__ */ ue(i), a = r.propsOptions[0], u = Object.keys(t).map((d) => rt(d));
  for (const d in a) {
    let f = a[d];
    f != null && v2(d, o[d], f, process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(o) : o, !u.includes(d));
  }
}
function v2(t, i, r, o, a) {
  const { type: u, required: d, validator: f, skipCheck: h } = r;
  if (d && a) {
    B('Missing required prop: "' + t + '"');
    return;
  }
  if (!(i == null && !d)) {
    if (u != null && u !== !0 && !h) {
      let y = !1;
      const T = K(u) ? u : [u], _ = [];
      for (let U = 0; U < T.length && !y; U++) {
        const { valid: M, expectedType: j } = _2(i, T[U]);
        _.push(j || ""), y = M;
      }
      if (!y) {
        B(T2(t, i, _));
        return;
      }
    }
    f && !f(i, o) && B('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
var I2 = /* @__PURE__ */ Un("String,Number,Boolean,Function,Symbol,BigInt");
function _2(t, i) {
  let r;
  const o = b2(i);
  if (o === "null") r = t === null;
  else if (I2(o)) {
    const a = typeof t;
    r = a === o.toLowerCase(), !r && a === "object" && (r = t instanceof i);
  } else o === "Object" ? r = Ie(t) : o === "Array" ? r = K(t) : r = t instanceof i;
  return {
    valid: r,
    expectedType: o
  };
}
function T2(t, i, r) {
  if (r.length === 0) return `Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${t}". Expected ${r.map(Io).join(" | ")}`;
  const a = r[0], u = Tl(i), d = jd(i, a), f = jd(i, u);
  return r.length === 1 && kd(a) && w2(a, u) && (o += ` with value ${d}`), o += `, got ${u} `, kd(u) && (o += `with value ${f}.`), o;
}
function jd(t, i) {
  return an(t) ? t.toString() : i === "String" ? `"${t}"` : i === "Number" ? `${Number(t)}` : `${t}`;
}
function kd(t) {
  return [
    "string",
    "number",
    "boolean"
  ].some((i) => t.toLowerCase() === i);
}
function w2(...t) {
  return t.every((i) => {
    const r = i.toLowerCase();
    return r !== "boolean" && r !== "symbol";
  });
}
var Bl = (t) => t === "_" || t === "_ctx" || t === "$stable", Vl = (t) => K(t) ? t.map(nn) : [nn(t)], E2 = (t, i, r) => {
  if (i._n) return i;
  const o = N_((...a) => (process.env.NODE_ENV !== "production" && Ke && !(r === null && lt) && !(r && r.root !== Ke.root) && B(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Vl(i(...a))), r);
  return o._c = !1, o;
}, _f = (t, i, r) => {
  const o = t._ctx;
  for (const a in t) {
    if (Bl(a)) continue;
    const u = t[a];
    if (te(u)) i[a] = E2(a, u, o);
    else if (u != null) {
      process.env.NODE_ENV !== "production" && B(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);
      const d = Vl(u);
      i[a] = () => d;
    }
  }
}, Tf = (t, i) => {
  process.env.NODE_ENV !== "production" && !Ll(t.vnode) && B("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const r = Vl(i);
  t.slots.default = () => r;
}, fl = (t, i, r) => {
  for (const o in i) (r || !Bl(o)) && (t[o] = i[o]);
}, y2 = (t, i, r) => {
  const o = t.slots = gf();
  if (t.vnode.shapeFlag & 32) {
    const a = i._;
    a ? (fl(o, i, r), r && ro(o, "_", a, !0)) : _f(i, o);
  } else i && Tf(t, i);
}, C2 = (t, i, r) => {
  const { vnode: o, slots: a } = t;
  let u = !0, d = ye;
  if (o.shapeFlag & 32) {
    const f = i._;
    f ? process.env.NODE_ENV !== "production" && Pt ? (fl(a, i, r), An(t, "set", "$slots")) : r && f === 1 ? u = !1 : fl(a, i, r) : (u = !i.$stable, _f(i, a)), d = i;
  } else i && (Tf(t, i), d = { default: 1 });
  if (u)
    for (const f in a) !Bl(f) && d[f] == null && delete a[f];
}, Cr, Jn;
function kn(t, i) {
  t.appContext.config.performance && mo() && Jn.mark(`vue-${i}-${t.uid}`), process.env.NODE_ENV !== "production" && C_(t, i, mo() ? Jn.now() : Date.now());
}
function $n(t, i) {
  if (t.appContext.config.performance && mo()) {
    const r = `vue-${i}-${t.uid}`, o = r + ":end", a = `<${Xr(t, t.type)}> ${i}`;
    Jn.mark(o), Jn.measure(a, r, o), Jn.clearMeasures(a), Jn.clearMarks(r), Jn.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && A_(t, i, mo() ? Jn.now() : Date.now());
}
function mo() {
  return Cr !== void 0 || (typeof window < "u" && window.performance ? (Cr = !0, Jn = window.performance) : Cr = !1), Cr;
}
function A2() {
  const t = [];
  if (process.env.NODE_ENV !== "production" && t.length) {
    const i = t.length > 1;
    console.warn(`Feature flag${i ? "s" : ""} ${t.join(", ")} ${i ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
var Tt = O2;
function S2(t) {
  return N2(t);
}
function N2(t, i) {
  A2();
  const r = Gr();
  r.__VUE__ = !0, process.env.NODE_ENV !== "production" && xl(r.__VUE_DEVTOOLS_GLOBAL_HOOK__, r);
  const { insert: o, remove: a, patchProp: u, createElement: d, createText: f, createComment: h, setText: y, setElementText: T, parentNode: _, nextSibling: U, setScopeId: M = Ze, insertStaticContent: j } = t, G = (g, I, A, P = null, x = null, O = null, F = void 0, D = null, q = process.env.NODE_ENV !== "production" && Pt ? !1 : !!I.dynamicChildren) => {
    if (g === I) return;
    g && !Ar(g, I) && (P = bn(g), hn(g, x, O, !0), g = null), I.patchFlag === -2 && (q = !1, I.dynamicChildren = null);
    const { type: z, ref: Y, shapeFlag: V } = I;
    switch (z) {
      case Yr:
        ge(g, I, A, P);
        break;
      case zt:
        _e(g, I, A, P);
        break;
      case Qs:
        g == null ? he(I, A, P, F) : process.env.NODE_ENV !== "production" && se(g, I, A, F);
        break;
      case Rt:
        xi(g, I, A, P, x, O, F, D, q);
        break;
      default:
        V & 1 ? Oe(g, I, A, P, x, O, F, D, q) : V & 6 ? ar(g, I, A, P, x, O, F, D, q) : V & 64 || V & 128 ? z.process(g, I, A, P, x, O, F, D, q, Kt) : process.env.NODE_ENV !== "production" && B("Invalid VNode type:", z, `(${typeof z})`);
    }
    Y != null && x ? zr(Y, g && g.ref, O, I || g, !I) : Y == null && g && g.ref != null && zr(g.ref, null, O, g, !0);
  }, ge = (g, I, A, P) => {
    if (g == null) o(I.el = f(I.children), A, P);
    else {
      const x = I.el = g.el;
      I.children !== g.children && y(x, I.children);
    }
  }, _e = (g, I, A, P) => {
    g == null ? o(I.el = h(I.children || ""), A, P) : I.el = g.el;
  }, he = (g, I, A, P) => {
    [g.el, g.anchor] = j(g.children, I, A, P, g.el, g.anchor);
  }, se = (g, I, A, P) => {
    if (I.children !== g.children) {
      const x = U(g.anchor);
      H(g), [I.el, I.anchor] = j(I.children, A, x, P);
    } else
      I.el = g.el, I.anchor = g.anchor;
  }, ke = ({ el: g, anchor: I }, A, P) => {
    let x;
    for (; g && g !== I; )
      x = U(g), o(g, A, P), g = x;
    o(I, A, P);
  }, H = ({ el: g, anchor: I }) => {
    let A;
    for (; g && g !== I; )
      A = U(g), a(g), g = A;
    a(I);
  }, Oe = (g, I, A, P, x, O, F, D, q) => {
    if (I.type === "svg" ? F = "svg" : I.type === "math" && (F = "mathml"), g == null) De(I, A, P, x, O, F, D, q);
    else {
      const z = g.el && g.el._isVueCE ? g.el : null;
      try {
        z && z._beginPatch(), Wt(g, I, x, O, F, D, q);
      } finally {
        z && z._endPatch();
      }
    }
  }, De = (g, I, A, P, x, O, F, D) => {
    let q, z;
    const { props: Y, shapeFlag: V, transition: W, dirs: Z } = g;
    if (q = g.el = d(g.type, O, Y && Y.is, Y), V & 8 ? T(q, g.children) : V & 16 && Xe(g.children, q, null, P, x, Xa(g, O), F, D), Z && wi(g, null, P, "created"), qe(q, g, g.scopeId, F, P), Y) {
      for (const be in Y) be !== "value" && !Rr(be) && u(q, be, null, Y[be], O, P);
      "value" in Y && u(q, "value", null, Y.value, O), (z = Y.onVnodeBeforeMount) && wn(z, P, g);
    }
    process.env.NODE_ENV !== "production" && (ro(q, "__vnode", g, !0), ro(q, "__vueParentComponent", P, !0)), Z && wi(g, null, P, "beforeMount");
    const ce = U2(x, W);
    if (ce && W.beforeEnter(q), o(q, I, A), (z = Y && Y.onVnodeMounted) || ce || Z) {
      const be = process.env.NODE_ENV !== "production" && Pt;
      Tt(() => {
        let ve;
        process.env.NODE_ENV !== "production" && (ve = Rd(be));
        try {
          z && wn(z, P, g), ce && W.enter(q), Z && wi(g, null, P, "mounted");
        } finally {
          process.env.NODE_ENV !== "production" && Rd(ve);
        }
      }, x);
    }
  }, qe = (g, I, A, P, x) => {
    if (A && M(g, A), P) for (let O = 0; O < P.length; O++) M(g, P[O]);
    if (x) {
      let O = x.subTree;
      if (process.env.NODE_ENV !== "production" && O.patchFlag > 0 && O.patchFlag & 2048 && (O = Fl(O.children) || O), I === O || yf(O.type) && (O.ssContent === I || O.ssFallback === I)) {
        const F = x.vnode;
        qe(g, F, F.scopeId, F.slotScopeIds, x.parent);
      }
    }
  }, Xe = (g, I, A, P, x, O, F, D, q = 0) => {
    for (let z = q; z < g.length; z++) G(null, g[z] = D ? Gn(g[z]) : nn(g[z]), I, A, P, x, O, F, D);
  }, Wt = (g, I, A, P, x, O, F) => {
    const D = I.el = g.el;
    process.env.NODE_ENV !== "production" && (D.__vnode = I);
    let { patchFlag: q, dynamicChildren: z, dirs: Y } = I;
    q |= g.patchFlag & 16;
    const V = g.props || ye, W = I.props || ye;
    let Z;
    if (A && Ei(A, !1), (Z = W.onVnodeBeforeUpdate) && wn(Z, A, I, g), Y && wi(I, g, A, "beforeUpdate"), A && Ei(A, !0), process.env.NODE_ENV !== "production" && Pt && (q = 0, F = !1, z = null), (V.innerHTML && W.innerHTML == null || V.textContent && W.textContent == null) && T(D, ""), z ? (mn(g.dynamicChildren, z, D, A, P, Xa(I, x), O), process.env.NODE_ENV !== "production" && Xs(g, I)) : F || Mt(g, I, D, null, A, P, Xa(I, x), O, !1), q > 0) {
      if (q & 16) wt(D, V, W, A, x);
      else if (q & 2 && V.class !== W.class && u(D, "class", null, W.class, x), q & 4 && u(D, "style", V.style, W.style, x), q & 8) {
        const ce = I.dynamicProps;
        for (let be = 0; be < ce.length; be++) {
          const ve = ce[be], xe = V[ve], Me = W[ve];
          (Me !== xe || ve === "value") && u(D, ve, xe, Me, x, A);
        }
      }
      q & 1 && g.children !== I.children && T(D, I.children);
    } else !F && z == null && wt(D, V, W, A, x);
    ((Z = W.onVnodeUpdated) || Y) && Tt(() => {
      Z && wn(Z, A, I, g), Y && wi(I, g, A, "updated");
    }, P);
  }, mn = (g, I, A, P, x, O, F) => {
    for (let D = 0; D < I.length; D++) {
      const q = g[D], z = I[D];
      G(q, z, q.el && (q.type === Rt || !Ar(q, z) || q.shapeFlag & 198) ? _(q.el) : A, null, P, x, O, F, !0);
    }
  }, wt = (g, I, A, P, x) => {
    if (I !== A) {
      if (I !== ye)
        for (const O in I) !Rr(O) && !(O in A) && u(g, O, I[O], null, x, P);
      for (const O in A) {
        if (Rr(O)) continue;
        const F = A[O], D = I[O];
        F !== D && O !== "value" && u(g, O, D, F, x, P);
      }
      "value" in A && u(g, "value", I.value, A.value, x);
    }
  }, xi = (g, I, A, P, x, O, F, D, q) => {
    const z = I.el = g ? g.el : f(""), Y = I.anchor = g ? g.anchor : f("");
    let { patchFlag: V, dynamicChildren: W, slotScopeIds: Z } = I;
    process.env.NODE_ENV !== "production" && (Pt || V & 2048) && (V = 0, q = !1, W = null), Z && (D = D ? D.concat(Z) : Z), g == null ? (o(z, A, P), o(Y, A, P), Xe(I.children || [], A, Y, x, O, F, D, q)) : V > 0 && V & 64 && W && g.dynamicChildren && g.dynamicChildren.length === W.length ? (mn(g.dynamicChildren, W, A, x, O, F, D), process.env.NODE_ENV !== "production" ? Xs(g, I) : (I.key != null || x && I === x.subTree) && Xs(g, I, !0)) : Mt(g, I, A, Y, x, O, F, D, q);
  }, ar = (g, I, A, P, x, O, F, D, q) => {
    I.slotScopeIds = D, g == null ? I.shapeFlag & 512 ? x.ctx.activate(I, A, P, F, q) : gn(I, A, P, x, O, F, q) : st(g, I, q);
  }, gn = (g, I, A, P, x, O, F) => {
    const D = g.component = F2(g, P, x);
    if (process.env.NODE_ENV !== "production" && D.type.__hmrId && h_(D), process.env.NODE_ENV !== "production" && (Ws(g), kn(D, "mount")), Ll(g) && (D.ctx.renderer = Kt), process.env.NODE_ENV !== "production" && kn(D, "init"), V2(D, !1, F), process.env.NODE_ENV !== "production" && $n(D, "init"), process.env.NODE_ENV !== "production" && Pt && (g.el = null), D.asyncDep) {
      if (x && x.registerDep(D, ae, F), !g.el) {
        const q = D.subTree = Nn(zt);
        _e(null, q, I, A), g.placeholder = q.el;
      }
    } else ae(D, g, I, A, x, O, F);
    process.env.NODE_ENV !== "production" && (Ks(), $n(D, "mount"));
  }, st = (g, I, A) => {
    const P = I.component = g.component;
    if (d2(g, I, A)) if (P.asyncDep && !P.asyncResolved) {
      process.env.NODE_ENV !== "production" && Ws(I), ne(P, I, A), process.env.NODE_ENV !== "production" && Ks();
      return;
    } else
      P.next = I, P.update();
    else
      I.el = g.el, P.vnode = I;
  }, ae = (g, I, A, P, x, O, F) => {
    const D = () => {
      if (g.isMounted) {
        let { next: V, bu: W, u: Z, parent: ce, vnode: be } = g;
        {
          const tt = wf(g);
          if (tt) {
            V && (V.el = be.el, ne(g, V, F)), tt.asyncDep.then(() => {
              Tt(() => {
                g.isUnmounted || z();
              }, x);
            });
            return;
          }
        }
        let ve = V, xe;
        process.env.NODE_ENV !== "production" && Ws(V || g.vnode), Ei(g, !1), V ? (V.el = be.el, ne(g, V, F)) : V = be, W && Xi(W), (xe = V.props && V.props.onVnodeBeforeUpdate) && wn(xe, ce, V, be), Ei(g, !0), process.env.NODE_ENV !== "production" && kn(g, "render");
        const Me = Za(g);
        process.env.NODE_ENV !== "production" && $n(g, "render");
        const ct = g.subTree;
        g.subTree = Me, process.env.NODE_ENV !== "production" && kn(g, "patch"), G(ct, Me, _(ct.el), bn(ct), g, x, O), process.env.NODE_ENV !== "production" && $n(g, "patch"), V.el = Me.el, ve === null && p2(g, Me.el), Z && Tt(Z, x), (xe = V.props && V.props.onVnodeUpdated) && Tt(() => wn(xe, ce, V, be), x), process.env.NODE_ENV !== "production" && Zp(g), process.env.NODE_ENV !== "production" && Ks();
      } else {
        let V;
        const { el: W, props: Z } = I, { bm: ce, m: be, parent: ve, root: xe, type: Me } = g, ct = Mr(I);
        if (Ei(g, !1), ce && Xi(ce), !ct && (V = Z && Z.onVnodeBeforeMount) && wn(V, ve, I), Ei(g, !0), W && Li) {
          const tt = () => {
            process.env.NODE_ENV !== "production" && kn(g, "render"), g.subTree = Za(g), process.env.NODE_ENV !== "production" && $n(g, "render"), process.env.NODE_ENV !== "production" && kn(g, "hydrate"), Li(W, g.subTree, g, x, null), process.env.NODE_ENV !== "production" && $n(g, "hydrate");
          };
          ct && Me.__asyncHydrate ? Me.__asyncHydrate(W, g, tt) : tt();
        } else {
          xe.ce && xe.ce._hasShadowRoot() && xe.ce._injectChildStyle(Me, g.parent ? g.parent.type : void 0), process.env.NODE_ENV !== "production" && kn(g, "render");
          const tt = g.subTree = Za(g);
          process.env.NODE_ENV !== "production" && $n(g, "render"), process.env.NODE_ENV !== "production" && kn(g, "patch"), G(null, tt, A, P, g, x, O), process.env.NODE_ENV !== "production" && $n(g, "patch"), I.el = tt.el;
        }
        if (be && Tt(be, x), !ct && (V = Z && Z.onVnodeMounted)) {
          const tt = I;
          Tt(() => wn(V, ve, tt), x);
        }
        (I.shapeFlag & 256 || ve && Mr(ve.vnode) && ve.vnode.shapeFlag & 256) && g.a && Tt(g.a, x), g.isMounted = !0, process.env.NODE_ENV !== "production" && w_(g), I = A = P = null;
      }
    };
    g.scope.on();
    const q = g.effect = new Ap(D);
    g.scope.off();
    const z = g.update = q.run.bind(q), Y = g.job = q.runIfDirty.bind(q);
    Y.i = g, Y.id = g.uid, q.scheduler = () => Eo(Y), Ei(g, !0), process.env.NODE_ENV !== "production" && (q.onTrack = g.rtc ? (V) => Xi(g.rtc, V) : void 0, q.onTrigger = g.rtg ? (V) => Xi(g.rtg, V) : void 0), z();
  }, ne = (g, I, A) => {
    I.component = g;
    const P = g.vnode.props;
    g.vnode = I, g.next = null, g2(g, I.props, P, A), C2(g, I.children, A), un(), Ud(g), cn();
  }, Mt = (g, I, A, P, x, O, F, D, q = !1) => {
    const z = g && g.children, Y = g ? g.shapeFlag : 0, V = I.children, { patchFlag: W, shapeFlag: Z } = I;
    if (W > 0) {
      if (W & 128) {
        ut(z, V, A, P, x, O, F, D, q);
        return;
      } else if (W & 256) {
        Rn(z, V, A, P, x, O, F, D, q);
        return;
      }
    }
    Z & 8 ? (Y & 16 && pi(z, x, O), V !== z && T(A, V)) : Y & 16 ? Z & 16 ? ut(z, V, A, P, x, O, F, D, q) : pi(z, x, O, !0) : (Y & 8 && T(A, ""), Z & 16 && Xe(V, A, P, x, O, F, D, q));
  }, Rn = (g, I, A, P, x, O, F, D, q) => {
    g = g || nr, I = I || nr;
    const z = g.length, Y = I.length, V = Math.min(z, Y);
    let W;
    for (W = 0; W < V; W++) {
      const Z = I[W] = q ? Gn(I[W]) : nn(I[W]);
      G(g[W], Z, A, null, x, O, F, D, q);
    }
    z > Y ? pi(g, x, O, !0, !1, V) : Xe(I, A, P, x, O, F, D, q, V);
  }, ut = (g, I, A, P, x, O, F, D, q) => {
    let z = 0;
    const Y = I.length;
    let V = g.length - 1, W = Y - 1;
    for (; z <= V && z <= W; ) {
      const Z = g[z], ce = I[z] = q ? Gn(I[z]) : nn(I[z]);
      if (Ar(Z, ce)) G(Z, ce, A, null, x, O, F, D, q);
      else break;
      z++;
    }
    for (; z <= V && z <= W; ) {
      const Z = g[V], ce = I[W] = q ? Gn(I[W]) : nn(I[W]);
      if (Ar(Z, ce)) G(Z, ce, A, null, x, O, F, D, q);
      else break;
      V--, W--;
    }
    if (z > V) {
      if (z <= W) {
        const Z = W + 1, ce = Z < Y ? I[Z].el : P;
        for (; z <= W; )
          G(null, I[z] = q ? Gn(I[z]) : nn(I[z]), A, ce, x, O, F, D, q), z++;
      }
    } else if (z > W) for (; z <= V; )
      hn(g[z], x, O, !0), z++;
    else {
      const Z = z, ce = z, be = /* @__PURE__ */ new Map();
      for (z = ce; z <= W; z++) {
        const Je = I[z] = q ? Gn(I[z]) : nn(I[z]);
        Je.key != null && (process.env.NODE_ENV !== "production" && be.has(Je.key) && B("Duplicate keys found during update:", JSON.stringify(Je.key), "Make sure keys are unique."), be.set(Je.key, z));
      }
      let ve, xe = 0;
      const Me = W - ce + 1;
      let ct = !1, tt = 0;
      const Pn = new Array(Me);
      for (z = 0; z < Me; z++) Pn[z] = 0;
      for (z = Z; z <= V; z++) {
        const Je = g[z];
        if (xe >= Me) {
          hn(Je, x, O, !0);
          continue;
        }
        let Lt;
        if (Je.key != null) Lt = be.get(Je.key);
        else for (ve = ce; ve <= W; ve++) if (Pn[ve - ce] === 0 && Ar(Je, I[ve])) {
          Lt = ve;
          break;
        }
        Lt === void 0 ? hn(Je, x, O, !0) : (Pn[Lt - ce] = z + 1, Lt >= tt ? tt = Lt : ct = !0, G(Je, I[Lt], A, null, x, O, F, D, q), xe++);
      }
      const Di = ct ? R2(Pn) : nr;
      for (ve = Di.length - 1, z = Me - 1; z >= 0; z--) {
        const Je = ce + z, Lt = I[Je], es = I[Je + 1], ts = Je + 1 < Y ? es.el || Ef(es) : P;
        Pn[z] === 0 ? G(null, Lt, A, ts, x, O, F, D, q) : ct && (ve < 0 || z !== Di[ve] ? zi(Lt, A, ts, 2) : ve--);
      }
    }
  }, zi = (g, I, A, P, x = null) => {
    const { el: O, type: F, transition: D, children: q, shapeFlag: z } = g;
    if (z & 6) {
      zi(g.component.subTree, I, A, P);
      return;
    }
    if (z & 128) {
      g.suspense.move(I, A, P);
      return;
    }
    if (z & 64) {
      F.move(g, I, A, Kt);
      return;
    }
    if (F === Rt) {
      o(O, I, A);
      for (let Y = 0; Y < q.length; Y++) zi(q[Y], I, A, P);
      o(g.anchor, I, A);
      return;
    }
    if (F === Qs) {
      ke(g, I, A);
      return;
    }
    if (P !== 2 && z & 1 && D) if (P === 0) D.persisted && !O[Wa] ? o(O, I, A) : (D.beforeEnter(O), o(O, I, A), Tt(() => D.enter(O), x));
    else {
      const { leave: Y, delayLeave: V, afterLeave: W } = D, Z = () => {
        g.ctx.isUnmounted ? a(O) : o(O, I, A);
      }, ce = () => {
        const be = O._isLeaving || !!O[Wa];
        O._isLeaving && O[Wa](!0), D.persisted && !be ? Z() : Y(O, () => {
          Z(), W && W();
        });
      };
      V ? V(O, Z, ce) : ce();
    }
    else o(O, I, A);
  }, hn = (g, I, A, P = !1, x = !1) => {
    const { type: O, props: F, ref: D, children: q, dynamicChildren: z, shapeFlag: Y, patchFlag: V, dirs: W, cacheIndex: Z, memo: ce } = g;
    if (V === -2 && (x = !1), D != null && (un(), zr(D, null, A, g, !0), cn()), Z != null && (I.renderCache[Z] = void 0), Y & 256) {
      I.ctx.deactivate(g);
      return;
    }
    const be = Y & 1 && W, ve = !Mr(g);
    let xe;
    if (ve && (xe = F && F.onVnodeBeforeUnmount) && wn(xe, I, g), Y & 6) Mi(g.component, A, P);
    else {
      if (Y & 128) {
        g.suspense.unmount(A, P);
        return;
      }
      be && wi(g, null, I, "beforeUnmount"), Y & 64 ? g.type.remove(g, I, A, Kt, P) : z && !z.hasOnce && (O !== Rt || V > 0 && V & 64) ? pi(z, I, A, !1, !0) : (O === Rt && V & 384 || !x && Y & 16) && pi(q, I, A), P && lr(g);
    }
    const Me = ce != null && Z == null;
    (ve && (xe = F && F.onVnodeUnmounted) || be || Me) && Tt(() => {
      xe && wn(xe, I, g), be && wi(g, null, I, "unmounted"), Me && (g.el = null);
    }, A);
  }, lr = (g) => {
    const { type: I, el: A, anchor: P, transition: x } = g;
    if (I === Rt) {
      process.env.NODE_ENV !== "production" && g.patchFlag > 0 && g.patchFlag & 2048 && x && !x.persisted ? g.children.forEach((F) => {
        F.type === zt ? a(F.el) : lr(F);
      }) : Yn(A, P);
      return;
    }
    if (I === Qs) {
      H(g);
      return;
    }
    const O = () => {
      a(A), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (g.shapeFlag & 1 && x && !x.persisted) {
      const { leave: F, delayLeave: D } = x, q = () => F(A, O);
      D ? D(g.el, O, q) : q();
    } else O();
  }, Yn = (g, I) => {
    let A;
    for (; g !== I; )
      A = U(g), a(g), g = A;
    a(I);
  }, Mi = (g, I, A) => {
    process.env.NODE_ENV !== "production" && g.type.__hmrId && b_(g);
    const { bum: P, scope: x, job: O, subTree: F, um: D, m: q, a: z } = g;
    $d(q), $d(z), P && Xi(P), x.stop(), O && (O.flags |= 8, hn(F, g, I, A)), D && Tt(D, I), Tt(() => {
      g.isUnmounted = !0;
    }, I), process.env.NODE_ENV !== "production" && y_(g);
  }, pi = (g, I, A, P = !1, x = !1, O = 0) => {
    for (let F = O; F < g.length; F++) hn(g[F], I, A, P, x);
  }, bn = (g) => {
    if (g.shapeFlag & 6) return bn(g.component.subTree);
    if (g.shapeFlag & 128) return g.suspense.next();
    const I = U(g.anchor || g.el), A = I && I[z_];
    return A ? U(A) : I;
  };
  let On = !1;
  const Qr = (g, I, A) => {
    let P;
    g == null ? I._vnode && (hn(I._vnode, null, null, !0), P = I._vnode.component) : G(I._vnode || null, g, I, null, null, null, A), I._vnode = g, On || (On = !0, Ud(P), Wp(), On = !1);
  }, Kt = {
    p: G,
    um: hn,
    m: zi,
    r: lr,
    mt: gn,
    mc: Xe,
    pc: Mt,
    pbc: mn,
    n: bn,
    o: t
  };
  let Zn, Li;
  return i && ([Zn, Li] = i(Kt)), {
    render: Qr,
    hydrate: Zn,
    createApp: s2(Qr, Zn)
  };
}
function Xa({ type: t, props: i }, r) {
  return r === "svg" && t === "foreignObject" || r === "mathml" && t === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : r;
}
function Ei({ effect: t, job: i }, r) {
  r ? (t.flags |= 32, i.flags |= 4) : (t.flags &= -33, i.flags &= -5);
}
function U2(t, i) {
  return (!t || t && !t.pendingBranch) && i && !i.persisted;
}
function Xs(t, i, r = !1) {
  const o = t.children, a = i.children;
  if (K(o) && K(a)) for (let u = 0; u < o.length; u++) {
    const d = o[u];
    let f = a[u];
    f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[u] = Gn(a[u]), f.el = d.el), !r && f.patchFlag !== -2 && Xs(d, f)), f.type === Yr && (f.patchFlag === -1 && (f = a[u] = Gn(f)), f.el = d.el), f.type === zt && !f.el && (f.el = d.el), process.env.NODE_ENV !== "production" && f.el && (f.el.__vnode = f);
  }
}
function R2(t) {
  const i = t.slice(), r = [0];
  let o, a, u, d, f;
  const h = t.length;
  for (o = 0; o < h; o++) {
    const y = t[o];
    if (y !== 0) {
      if (a = r[r.length - 1], t[a] < y) {
        i[o] = a, r.push(o);
        continue;
      }
      for (u = 0, d = r.length - 1; u < d; )
        f = u + d >> 1, t[r[f]] < y ? u = f + 1 : d = f;
      y < t[r[u]] && (u > 0 && (i[o] = r[u - 1]), r[u] = o);
    }
  }
  for (u = r.length, d = r[u - 1]; u-- > 0; )
    r[u] = d, d = i[d];
  return r;
}
function wf(t) {
  const i = t.subTree.component;
  if (i) return i.asyncDep && !i.asyncResolved ? i : wf(i);
}
function $d(t) {
  if (t) for (let i = 0; i < t.length; i++) t[i].flags |= 8;
}
function Ef(t) {
  if (t.placeholder) return t.placeholder;
  const i = t.component;
  return i ? Ef(i.subTree) : null;
}
var yf = (t) => t.__isSuspense;
function O2(t, i) {
  i && i.pendingBranch ? K(t) ? i.effects.push(...t) : i.effects.push(t) : Gp(t);
}
var Rt = /* @__PURE__ */ Symbol.for("v-fgt"), Yr = /* @__PURE__ */ Symbol.for("v-txt"), zt = /* @__PURE__ */ Symbol.for("v-cmt"), Qs = /* @__PURE__ */ Symbol.for("v-stc"), Lr = [], xt = null;
function Jt(t = !1) {
  Lr.push(xt = t ? null : []);
}
function P2() {
  Lr.pop(), xt = Lr[Lr.length - 1] || null;
}
var jr = 1;
function Hd(t, i = !1) {
  jr += t, t < 0 && xt && i && (xt.hasOnce = !0);
}
function Cf(t) {
  return t.dynamicChildren = jr > 0 ? xt || nr : null, P2(), jr > 0 && xt && xt.push(t), t;
}
function en(t, i, r, o, a, u) {
  return Cf(Be(t, i, r, o, a, u, !0));
}
function x2(t, i, r, o, a) {
  return Cf(Nn(t, i, r, o, a, !0));
}
function Ao(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Ar(t, i) {
  if (process.env.NODE_ENV !== "production" && i.shapeFlag & 6 && t.component) {
    const r = Ys.get(i.type);
    if (r && r.has(t.component))
      return t.shapeFlag &= -257, i.shapeFlag &= -513, !1;
  }
  return t.type === i.type && t.key === i.key;
}
var Jd, z2 = (...t) => Sf(...Jd ? Jd(t, lt) : t), Af = ({ key: t }) => t ?? null, eo = ({ ref: t, ref_key: i, ref_for: r }) => (typeof t == "number" && (t = "" + t), t != null ? Re(t) || /* @__PURE__ */ He(t) || te(t) ? {
  i: lt,
  r: t,
  k: i,
  f: !!r
} : t : null);
function Be(t, i = null, r = null, o = 0, a = null, u = t === Rt ? 0 : 1, d = !1, f = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: i,
    key: i && Af(i),
    ref: i && eo(i),
    scopeId: Qp,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: u,
    patchFlag: o,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: lt
  };
  return f ? (jl(h, r), u & 128 && t.normalize(h)) : r && (h.shapeFlag |= Re(r) ? 8 : 16), process.env.NODE_ENV !== "production" && h.key !== h.key && B("VNode created with invalid key (NaN). VNode type:", h.type), jr > 0 && !d && xt && (h.patchFlag > 0 || u & 6) && h.patchFlag !== 32 && xt.push(h), h;
}
var Nn = process.env.NODE_ENV !== "production" ? z2 : Sf;
function Sf(t, i = null, r = null, o = 0, a = null, u = !1) {
  if ((!t || t === W_) && (process.env.NODE_ENV !== "production" && !t && B(`Invalid vnode type when creating vnode: ${t}.`), t = zt), Ao(t)) {
    const f = di(t, i, !0);
    return r && jl(f, r), jr > 0 && !u && xt && (f.shapeFlag & 6 ? xt[xt.indexOf(t)] = f : xt.push(f)), f.patchFlag = -2, f;
  }
  if (zf(t) && (t = t.__vccOpts), i) {
    i = M2(i);
    let { class: f, style: h } = i;
    f && !Re(f) && (i.class = qr(f)), Ie(h) && (/* @__PURE__ */ so(h) && !K(h) && (h = Ne({}, h)), i.style = yl(h));
  }
  const d = Re(t) ? 1 : yf(t) ? 128 : M_(t) ? 64 : Ie(t) ? 4 : te(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && d & 4 && /* @__PURE__ */ so(t) && (t = /* @__PURE__ */ ue(t), B("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, t)), Be(t, i, r, o, a, d, u, !0);
}
function M2(t) {
  return t ? /* @__PURE__ */ so(t) || hf(t) ? Ne({}, t) : t : null;
}
function di(t, i, r = !1, o = !1) {
  const { props: a, ref: u, patchFlag: d, children: f, transition: h } = t, y = i ? L2(a || {}, i) : a, T = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && Af(y),
    ref: i && i.ref ? r && u ? K(u) ? u.concat(eo(i)) : [u, eo(i)] : eo(i) : u,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && d === -1 && K(f) ? f.map(Nf) : f,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: i && t.type !== Rt ? d === -1 ? 16 : d | 16 : d,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: h,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && di(t.ssContent),
    ssFallback: t.ssFallback && di(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return h && o && Ml(T, h.clone(T)), T;
}
function Nf(t) {
  const i = di(t);
  return K(t.children) && (i.children = t.children.map(Nf)), i;
}
function ml(t = " ", i = 0) {
  return Nn(Yr, null, t, i);
}
function Gs(t = "", i = !1) {
  return i ? (Jt(), x2(zt, null, t)) : Nn(zt, null, t);
}
function nn(t) {
  return t == null || typeof t == "boolean" ? Nn(zt) : K(t) ? Nn(Rt, null, t.slice()) : Ao(t) ? Gn(t) : Nn(Yr, null, String(t));
}
function Gn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : di(t);
}
function jl(t, i) {
  let r = 0;
  const { shapeFlag: o } = t;
  if (i == null) i = null;
  else if (K(i)) r = 16;
  else if (typeof i == "object") if (o & 65) {
    const a = i.default;
    a && (a._c && (a._d = !1), jl(t, a()), a._c && (a._d = !0));
    return;
  } else {
    r = 32;
    const a = i._;
    !a && !hf(i) ? i._ctx = lt : a === 3 && lt && (lt.slots._ === 1 ? i._ = 1 : (i._ = 2, t.patchFlag |= 1024));
  }
  else te(i) ? (i = {
    default: i,
    _ctx: lt
  }, r = 32) : (i = String(i), o & 64 ? (r = 16, i = [ml(i)]) : r = 8);
  t.children = i, t.shapeFlag |= r;
}
function L2(...t) {
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    for (const a in o) if (a === "class")
      i.class !== o.class && (i.class = qr([i.class, o.class]));
    else if (a === "style") i.style = yl([i.style, o.style]);
    else if (Hr(a)) {
      const u = i[a], d = o[a];
      d && u !== d && !(K(u) && u.includes(d)) ? i[a] = u ? [].concat(u, d) : d : d == null && u == null && !Dr(a) && (i[a] = d);
    } else a !== "" && (i[a] = o[a]);
  }
  return i;
}
function wn(t, i, r, o = null) {
  fn(t, i, 7, [r, o]);
}
var D2 = cf(), q2 = 0;
function F2(t, i, r) {
  const o = t.type, a = (i ? i.appContext : t.appContext) || D2, u = {
    uid: q2++,
    vnode: t,
    type: o,
    parent: i,
    appContext: a,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    job: null,
    scope: new MI(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: i ? i.provides : Object.create(a.provides),
    ids: i ? i.ids : [
      "",
      0,
      0
    ],
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: vf(o, a),
    emitsOptions: df(o, a),
    emit: null,
    emitted: null,
    propsDefaults: ye,
    inheritAttrs: o.inheritAttrs,
    ctx: ye,
    data: ye,
    props: ye,
    attrs: ye,
    slots: ye,
    refs: ye,
    setupState: ye,
    setupContext: null,
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? u.ctx = K_(u) : u.ctx = { _: u }, u.root = i ? i.root : u, u.emit = a2.bind(null, u), t.ce && t.ce(u), u;
}
var Ke = null, Uf = () => Ke || lt, go, gl;
{
  const t = Gr(), i = (r, o) => {
    let a;
    return (a = t[r]) || (a = t[r] = []), a.push(o), (u) => {
      a.length > 1 ? a.forEach((d) => d(u)) : a[0](u);
    };
  };
  go = i("__VUE_INSTANCE_SETTERS__", (r) => Ke = r), gl = i("__VUE_SSR_SETTERS__", (r) => kr = r);
}
var Zr = (t) => {
  const i = Ke;
  return go(t), t.scope.on(), () => {
    t.scope.off(), go(i);
  };
}, Gd = () => {
  Ke && Ke.scope.off(), go(null);
}, B2 = /* @__PURE__ */ Un("slot,component");
function hl(t, { isNativeTag: i }) {
  (B2(t) || i(t)) && B("Do not use built-in or reserved HTML elements as component id: " + t);
}
function Rf(t) {
  return t.vnode.shapeFlag & 4;
}
var kr = !1;
function V2(t, i = !1, r = !1) {
  i && gl(i);
  const { props: o, children: a } = t.vnode, u = Rf(t);
  f2(t, o, u, i), y2(t, a, r || i);
  const d = u ? j2(t, i) : void 0;
  return i && gl(!1), d;
}
function j2(t, i) {
  const r = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && hl(r.name, t.appContext.config), r.components) {
      const a = Object.keys(r.components);
      for (let u = 0; u < a.length; u++) hl(a[u], t.appContext.config);
    }
    if (r.directives) {
      const a = Object.keys(r.directives);
      for (let u = 0; u < a.length; u++) ef(a[u]);
    }
    r.compilerOptions && Of() && B('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, lf), process.env.NODE_ENV !== "production" && Y_(t);
  const { setup: o } = r;
  if (o) {
    un();
    const a = t.setupContext = o.length > 1 ? $2(t) : null, u = Zr(t), d = or(o, t, 0, [process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(t.props) : t.props, a]), f = _l(d);
    if (cn(), u(), (f || t.sp) && !Mr(t) && sf(t), f) {
      if (d.then(Gd, Gd), i) return d.then((h) => {
        Wd(t, h, i);
      }).catch((h) => {
        Wr(h, t, 0);
      });
      t.asyncDep = d, process.env.NODE_ENV !== "production" && !t.suspense && B(`Component <${Xr(t, r)}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
    } else Wd(t, d, i);
  } else Pf(t, i);
}
function Wd(t, i, r) {
  te(i) ? t.type.__ssrInlineRender ? t.ssrRender = i : t.render = i : Ie(i) ? (process.env.NODE_ENV !== "production" && Ao(i) && B("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = i), t.setupState = jp(i), process.env.NODE_ENV !== "production" && Z_(t)) : process.env.NODE_ENV !== "production" && i !== void 0 && B(`setup() should return an object. Received: ${i === null ? "null" : typeof i}`), Pf(t, r);
}
var to, Kd, Of = () => !to;
function Pf(t, i, r) {
  const o = t.type;
  if (!t.render) {
    if (!i && to && !o.render) {
      const a = o.template || ql(t).template;
      if (a) {
        process.env.NODE_ENV !== "production" && kn(t, "compile");
        const { isCustomElement: u, compilerOptions: d } = t.appContext.config, { delimiters: f, compilerOptions: h } = o, y = Ne(Ne({
          isCustomElement: u,
          delimiters: f
        }, d), h);
        o.render = to(a, y), process.env.NODE_ENV !== "production" && $n(t, "compile");
      }
    }
    t.render = o.render || Ze, Kd && Kd(t);
  }
  {
    const a = Zr(t);
    un();
    try {
      Q_(t);
    } finally {
      cn(), a();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && t.render === Ze && !i && (!to && o.template ? B('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : B("Component is missing template or render function: ", o));
}
var Yd = process.env.NODE_ENV !== "production" ? {
  get(t, i) {
    return fo(), Ye(t, "get", ""), t[i];
  },
  set() {
    return B("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return B("setupContext.attrs is readonly."), !1;
  }
} : { get(t, i) {
  return Ye(t, "get", ""), t[i];
} };
function k2(t) {
  return new Proxy(t.slots, { get(i, r) {
    return Ye(t, "get", "$slots"), i[r];
  } });
}
function $2(t) {
  const i = (r) => {
    if (process.env.NODE_ENV !== "production" && (t.exposed && B("expose() should be called only once per setup()."), r != null)) {
      let o = typeof r;
      o === "object" && (K(r) ? o = "array" : /* @__PURE__ */ He(r) && (o = "ref")), o !== "object" && B(`expose() should be passed a plain object, received ${o}.`);
    }
    t.exposed = r || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let r, o;
    return Object.freeze({
      get attrs() {
        return r || (r = new Proxy(t.attrs, Yd));
      },
      get slots() {
        return o || (o = k2(t));
      },
      get emit() {
        return (a, ...u) => t.emit(a, ...u);
      },
      expose: i
    });
  } else return {
    attrs: new Proxy(t.attrs, Yd),
    slots: t.slots,
    emit: t.emit,
    expose: i
  };
}
function So(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(jp(t_(t.exposed)), {
    get(i, r) {
      if (r in i) return i[r];
      if (r in Ri) return Ri[r](t);
    },
    has(i, r) {
      return r in i || r in Ri;
    }
  })) : t.proxy;
}
var H2 = /(?:^|[-_])\w/g, J2 = (t) => t.replace(H2, (i) => i.toUpperCase()).replace(/[-_]/g, "");
function xf(t, i = !0) {
  return te(t) ? t.displayName || t.name : t.name || i && t.__name;
}
function Xr(t, i, r = !1) {
  let o = xf(i);
  if (!o && i.__file) {
    const a = i.__file.match(/([^/\\]+)\.\w+$/);
    a && (o = a[1]);
  }
  if (!o && t) {
    const a = (u) => {
      for (const d in u) if (u[d] === i) return d;
    };
    o = a(t.components) || t.parent && a(t.parent.type.components) || a(t.appContext.components);
  }
  return o ? J2(o) : r ? "App" : "Anonymous";
}
function zf(t) {
  return te(t) && "__vccOpts" in t;
}
var no = (t, i) => {
  const r = /* @__PURE__ */ o_(t, i, kr);
  if (process.env.NODE_ENV !== "production") {
    const o = Uf();
    o && o.appContext.config.warnRecursiveComputed && (r._warnRecursive = !0);
  }
  return r;
};
function G2() {
  if (process.env.NODE_ENV === "production" || typeof window > "u") return;
  const t = { style: "color:#3ba776" }, i = { style: "color:#1677ff" }, r = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, a = {
    __vue_custom_formatter: !0,
    header(_) {
      if (!Ie(_)) return null;
      if (_.__isVue) return [
        "div",
        t,
        "VueInstance"
      ];
      if (/* @__PURE__ */ He(_)) {
        un();
        const U = _.value;
        return cn(), [
          "div",
          {},
          [
            "span",
            t,
            T(_)
          ],
          "<",
          f(U),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ ci(_)) return [
          "div",
          {},
          [
            "span",
            t,
            /* @__PURE__ */ ht(_) ? "ShallowReactive" : "Reactive"
          ],
          "<",
          f(_),
          `>${/* @__PURE__ */ dn(_) ? " (readonly)" : ""}`
        ];
        if (/* @__PURE__ */ dn(_)) return [
          "div",
          {},
          [
            "span",
            t,
            /* @__PURE__ */ ht(_) ? "ShallowReadonly" : "Readonly"
          ],
          "<",
          f(_),
          ">"
        ];
      }
      return null;
    },
    hasBody(_) {
      return _ && _.__isVue;
    },
    body(_) {
      if (_ && _.__isVue) return [
        "div",
        {},
        ...u(_.$)
      ];
    }
  };
  function u(_) {
    const U = [];
    _.type.props && _.props && U.push(d("props", /* @__PURE__ */ ue(_.props))), _.setupState !== ye && U.push(d("setup", _.setupState)), _.data !== ye && U.push(d("data", /* @__PURE__ */ ue(_.data)));
    const M = h(_, "computed");
    M && U.push(d("computed", M));
    const j = h(_, "inject");
    return j && U.push(d("injected", j)), U.push([
      "div",
      {},
      [
        "span",
        { style: o.style + ";opacity:0.66" },
        "$ (internal): "
      ],
      ["object", { object: _ }]
    ]), U;
  }
  function d(_, U) {
    return U = Ne({}, U), Object.keys(U).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        { style: "color:#476582" },
        _
      ],
      [
        "div",
        { style: "padding-left:1.25em" },
        ...Object.keys(U).map((M) => [
          "div",
          {},
          [
            "span",
            o,
            M + ": "
          ],
          f(U[M], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function f(_, U = !0) {
    return typeof _ == "number" ? [
      "span",
      i,
      _
    ] : typeof _ == "string" ? [
      "span",
      r,
      JSON.stringify(_)
    ] : typeof _ == "boolean" ? [
      "span",
      o,
      _
    ] : Ie(_) ? ["object", { object: U ? /* @__PURE__ */ ue(_) : _ }] : [
      "span",
      r,
      String(_)
    ];
  }
  function h(_, U) {
    const M = _.type;
    if (te(M)) return;
    const j = {};
    for (const G in _.ctx) y(M, G, U) && (j[G] = _.ctx[G]);
    return j;
  }
  function y(_, U, M) {
    const j = _[M];
    if (K(j) && j.includes(U) || Ie(j) && U in j || _.extends && y(_.extends, U, M) || _.mixins && _.mixins.some((G) => y(G, U, M))) return !0;
  }
  function T(_) {
    return /* @__PURE__ */ ht(_) ? "ShallowRef" : _.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(a) : window.devtoolsFormatters = [a];
}
var Zd = "3.5.35", Gt = process.env.NODE_ENV !== "production" ? B : Ze, ew = (process.env.NODE_ENV, rn), tw = (process.env.NODE_ENV, xl), bl = void 0, Xd = typeof window < "u" && window.trustedTypes;
if (Xd) try {
  bl = /* @__PURE__ */ Xd.createPolicy("vue", { createHTML: (t) => t });
} catch (t) {
  process.env.NODE_ENV !== "production" && Gt(`Error creating trusted types policy: ${t}`);
}
var Mf = bl ? (t) => bl.createHTML(t) : (t) => t, W2 = "http://www.w3.org/2000/svg", K2 = "http://www.w3.org/1998/Math/MathML", Hn = typeof document < "u" ? document : null, Qd = Hn && /* @__PURE__ */ Hn.createElement("template"), Y2 = {
  insert: (t, i, r) => {
    i.insertBefore(t, r || null);
  },
  remove: (t) => {
    const i = t.parentNode;
    i && i.removeChild(t);
  },
  createElement: (t, i, r, o) => {
    const a = i === "svg" ? Hn.createElementNS(W2, t) : i === "mathml" ? Hn.createElementNS(K2, t) : r ? Hn.createElement(t, { is: r }) : Hn.createElement(t);
    return t === "select" && o && o.multiple != null && a.setAttribute("multiple", o.multiple), a;
  },
  createText: (t) => Hn.createTextNode(t),
  createComment: (t) => Hn.createComment(t),
  setText: (t, i) => {
    t.nodeValue = i;
  },
  setElementText: (t, i) => {
    t.textContent = i;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Hn.querySelector(t),
  setScopeId(t, i) {
    t.setAttribute(i, "");
  },
  insertStaticContent(t, i, r, o, a, u) {
    const d = r ? r.previousSibling : i.lastChild;
    if (a && (a === u || a.nextSibling)) for (; i.insertBefore(a.cloneNode(!0), r), !(a === u || !(a = a.nextSibling)); )
      ;
    else {
      Qd.innerHTML = Mf(o === "svg" ? `<svg>${t}</svg>` : o === "mathml" ? `<math>${t}</math>` : t);
      const f = Qd.content;
      if (o === "svg" || o === "mathml") {
        const h = f.firstChild;
        for (; h.firstChild; ) f.appendChild(h.firstChild);
        f.removeChild(h);
      }
      i.insertBefore(f, r);
    }
    return [d ? d.nextSibling : i.firstChild, r ? r.previousSibling : i.lastChild];
  }
}, Z2 = /* @__PURE__ */ Symbol("_vtc");
function X2(t, i, r) {
  const o = t[Z2];
  o && (i = (i ? [i, ...o] : [...o]).join(" ")), i == null ? t.removeAttribute("class") : r ? t.setAttribute("class", i) : t.className = i;
}
var ep = /* @__PURE__ */ Symbol("_vod"), Q2 = /* @__PURE__ */ Symbol("_vsh"), eT = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), tT = /(?:^|;)\s*display\s*:/;
function nT(t, i, r) {
  const o = t.style, a = Re(r);
  let u = !1;
  if (r && !a) {
    if (i) if (Re(i))
      for (const d of i.split(";")) {
        const f = d.slice(0, d.indexOf(":")).trim();
        r[f] == null && Ur(o, f, "");
      }
    else for (const d in i) r[d] == null && Ur(o, d, "");
    for (const d in r) {
      d === "display" && (u = !0);
      const f = r[d];
      f != null ? sT(t, d, !Re(i) && i ? i[d] : void 0, f) || Ur(o, d, f) : Ur(o, d, "");
    }
  } else if (a) {
    if (i !== r) {
      const d = o[eT];
      d && (r += ";" + d), o.cssText = r, u = tT.test(r);
    }
  } else i && t.removeAttribute("style");
  ep in t && (t[ep] = u ? o.display : "", t[Q2] && (o.display = "none"));
}
var iT = /[^\\];\s*$/, tp = /\s*!important$/;
function Ur(t, i, r) {
  if (K(r)) r.forEach((o) => Ur(t, i, o));
  else if (r == null && (r = ""), process.env.NODE_ENV !== "production" && iT.test(r) && Gt(`Unexpected semicolon at the end of '${i}' style value: '${r}'`), i.startsWith("--")) t.setProperty(i, r);
  else {
    const o = rT(t, i);
    tp.test(r) ? t.setProperty(Ot(o), r.replace(tp, ""), "important") : t[o] = r;
  }
}
var np = [
  "Webkit",
  "Moz",
  "ms"
], Qa = {};
function rT(t, i) {
  const r = Qa[i];
  if (r) return r;
  let o = rt(i);
  if (o !== "filter" && o in t) return Qa[i] = o;
  o = Io(o);
  for (let a = 0; a < np.length; a++) {
    const u = np[a] + o;
    if (u in t) return Qa[i] = u;
  }
  return i;
}
function sT(t, i, r, o) {
  return t.tagName === "TEXTAREA" && (i === "width" || i === "height") && Re(o) && r === o;
}
var ip = "http://www.w3.org/1999/xlink";
function rp(t, i, r, o, a, u = xI(i)) {
  o && i.startsWith("xlink:") ? r == null ? t.removeAttributeNS(ip, i.slice(6, i.length)) : t.setAttributeNS(ip, i, r) : r == null || u && !Ep(r) ? t.removeAttribute(i) : t.setAttribute(i, u ? "" : an(r) ? String(r) : r);
}
function sp(t, i, r, o, a) {
  if (i === "innerHTML" || i === "textContent") {
    r != null && (t[i] = i === "innerHTML" ? Mf(r) : r);
    return;
  }
  const u = t.tagName;
  if (i === "value" && u !== "PROGRESS" && !u.includes("-")) {
    const f = u === "OPTION" ? t.getAttribute("value") || "" : t.value, h = r == null ? t.type === "checkbox" ? "on" : "" : String(r);
    (f !== h || !("_value" in t)) && (t.value = h), r == null && t.removeAttribute(i), t._value = r;
    return;
  }
  let d = !1;
  if (r === "" || r == null) {
    const f = typeof t[i];
    f === "boolean" ? r = Ep(r) : r == null && f === "string" ? (r = "", d = !0) : f === "number" && (r = 0, d = !0);
  }
  try {
    t[i] = r;
  } catch (f) {
    process.env.NODE_ENV !== "production" && !d && Gt(`Failed setting prop "${i}" on <${u.toLowerCase()}>: value ${r} is invalid.`, f);
  }
  d && t.removeAttribute(a || i);
}
function er(t, i, r, o) {
  t.addEventListener(i, r, o);
}
function oT(t, i, r, o) {
  t.removeEventListener(i, r, o);
}
var op = /* @__PURE__ */ Symbol("_vei");
function aT(t, i, r, o, a = null) {
  const u = t[op] || (t[op] = {}), d = u[i];
  if (o && d) d.value = process.env.NODE_ENV !== "production" ? lp(o, i) : o;
  else {
    const [f, h] = lT(i);
    o ? er(t, f, u[i] = dT(process.env.NODE_ENV !== "production" ? lp(o, i) : o, a), h) : d && (oT(t, f, d, h), u[i] = void 0);
  }
}
var ap = /(?:Once|Passive|Capture)$/;
function lT(t) {
  let i;
  if (ap.test(t)) {
    i = {};
    let r;
    for (; r = t.match(ap); )
      t = t.slice(0, t.length - r[0].length), i[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Ot(t.slice(2)), i];
}
var el = 0, uT = /* @__PURE__ */ Promise.resolve(), cT = () => el || (uT.then(() => el = 0), el = Date.now());
function dT(t, i) {
  const r = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= r.attached) return;
    const a = r.value;
    if (K(a)) {
      const u = o.stopImmediatePropagation;
      o.stopImmediatePropagation = () => {
        u.call(o), o._stopped = !0;
      };
      const d = a.slice(), f = [o];
      for (let h = 0; h < d.length && !o._stopped; h++) {
        const y = d[h];
        y && fn(y, i, 5, f);
      }
    } else fn(a, i, 5, [o]);
  };
  return r.value = t, r.attached = cT(), r;
}
function lp(t, i) {
  return te(t) || K(t) ? t : (Gt(`Wrong type passed as event handler to ${i} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`), Ze);
}
var up = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, pT = (t, i, r, o, a, u) => {
  const d = a === "svg";
  i === "class" ? X2(t, o, d) : i === "style" ? nT(t, r, o) : Hr(i) ? Dr(i) || aT(t, i, r, o, u) : (i[0] === "." ? (i = i.slice(1), !0) : i[0] === "^" ? (i = i.slice(1), !1) : fT(t, i, o, d)) ? (sp(t, i, o), !t.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && rp(t, i, o, d, u, i !== "value")) : t._isVueCE && (mT(t, i) || t._def.__asyncLoader && (/[A-Z]/.test(i) || !Re(o))) ? sp(t, rt(i), o, u, i) : (i === "true-value" ? t._trueValue = o : i === "false-value" && (t._falseValue = o), rp(t, i, o, d));
};
function fT(t, i, r, o) {
  if (o)
    return !!(i === "innerHTML" || i === "textContent" || i in t && up(i) && te(r));
  if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "sandbox" && t.tagName === "IFRAME" || i === "form" || i === "list" && t.tagName === "INPUT" || i === "type" && t.tagName === "TEXTAREA") return !1;
  if (i === "width" || i === "height") {
    const a = t.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE") return !1;
  }
  return up(i) && Re(r) ? !1 : i in t;
}
function mT(t, i) {
  const r = t._def.props;
  if (!r) return !1;
  const o = rt(i);
  return Array.isArray(r) ? r.some((a) => rt(a) === o) : Object.keys(r).some((a) => rt(a) === o);
}
var cp = {};
// @__NO_SIDE_EFFECTS__
function gT(t, i, r) {
  let o = /* @__PURE__ */ rf(t, i);
  bo(o) && (o = Ne({}, o, i));
  class a extends bT {
    constructor(d) {
      super(o, d, r);
    }
  }
  return a.def = o, a;
}
var hT = typeof HTMLElement < "u" ? HTMLElement : class {
}, bT = class Lf extends hT {
  constructor(i, r = {}, o = gp) {
    super(), this._def = i, this._props = r, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && o !== gp ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && Gt("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), i.shadowRoot !== !1 ? (this.attachShadow(Ne({}, i.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let i = this;
    for (; i = i && (i.assignedSlot || i.parentNode || i.host); ) if (i instanceof Lf) {
      this._parent = i;
      break;
    }
    this._instance || (this._resolved ? this._mount(this._def) : i && i._pendingResolve ? this._pendingResolve = i._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(i = this._parent) {
    i && (this._instance.parent = i._instance, this._inheritParentContext(i));
  }
  _inheritParentContext(i = this._parent) {
    i && this._app && Object.setPrototypeOf(this._app._context.provides, i._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, Hp(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(i) {
    for (const r of i) this._setAttr(r.attributeName);
  }
  _resolveDef() {
    if (this._pendingResolve) return;
    for (let o = 0; o < this.attributes.length; o++) this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const i = (o, a = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: u, styles: d } = o;
      let f;
      if (u && !K(u)) for (const h in u) {
        const y = u[h];
        (y === Number || y && y.type === Number) && (h in this._props && (this._props[h] = yd(this._props[h])), (f || (f = /* @__PURE__ */ Object.create(null)))[rt(h)] = !0);
      }
      this._numberProps = f, this._resolveProps(o), this.shadowRoot ? this._applyStyles(d) : process.env.NODE_ENV !== "production" && d && Gt("Custom element style injection is not supported when using shadowRoot: false"), this._mount(o);
    }, r = this._def.__asyncLoader;
    r ? this._pendingResolve = r().then((o) => {
      o.configureApp = this._def.configureApp, i(this._def = o, !0);
    }) : i(this._def);
  }
  _mount(i) {
    process.env.NODE_ENV !== "production" && !i.name && (i.name = "VueElement"), this._app = this._createApp(i), this._inheritParentContext(), i.configureApp && i.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const r = this._instance && this._instance.exposed;
    if (r)
      for (const o in r) me(this, o) ? process.env.NODE_ENV !== "production" && Gt(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, { get: () => Nt(r[o]) });
  }
  _resolveProps(i) {
    const { props: r } = i, o = K(r) ? r : Object.keys(r || {});
    for (const a of Object.keys(this)) a[0] !== "_" && o.includes(a) && this._setProp(a, this[a]);
    for (const a of o.map(rt)) Object.defineProperty(this, a, {
      get() {
        return this._getProp(a);
      },
      set(u) {
        this._setProp(a, u, !0, !this._patching);
      }
    });
  }
  _setAttr(i) {
    if (i.startsWith("data-v-")) return;
    const r = this.hasAttribute(i);
    let o = r ? this.getAttribute(i) : cp;
    const a = rt(i);
    r && this._numberProps && this._numberProps[a] && (o = yd(o)), this._setProp(a, o, !1, !0);
  }
  _getProp(i) {
    return this._props[i];
  }
  _setProp(i, r, o = !0, a = !1) {
    if (r !== this._props[i] && (this._dirty = !0, r === cp ? delete this._props[i] : (this._props[i] = r, i === "key" && this._app && (this._app._ceVNode.key = r)), a && this._instance && this._update(), o)) {
      const u = this._ob;
      u && (this._processMutations(u.takeRecords()), u.disconnect()), r === !0 ? this.setAttribute(Ot(i), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(Ot(i), r + "") : r || this.removeAttribute(Ot(i)), u && u.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const i = this._createVNode();
    this._app && (i.appContext = this._app._context), yT(i, this._root);
  }
  _createVNode() {
    const i = {};
    this.shadowRoot || (i.onVnodeMounted = i.onVnodeUpdated = this._renderSlots.bind(this));
    const r = Nn(this._def, Ne(i, this._props));
    return this._instance || (r.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, process.env.NODE_ENV !== "production" && (o.ceReload = (u) => {
        this._styles && (this._styles.forEach((d) => this._root.removeChild(d)), this._styles.length = 0), this._styleAnchors.delete(this._def), this._applyStyles(u), this._instance = null, this._update();
      });
      const a = (u, d) => {
        this.dispatchEvent(new CustomEvent(u, bo(d[0]) ? Ne({ detail: d }, d[0]) : { detail: d }));
      };
      o.emit = (u, ...d) => {
        a(u, d), Ot(u) !== u && a(Ot(u), d);
      }, this._setParent();
    }), r;
  }
  _applyStyles(i, r, o) {
    if (!i) return;
    if (r) {
      if (r === this._def || this._styleChildren.has(r)) return;
      this._styleChildren.add(r);
    }
    const a = this._nonce, u = this.shadowRoot, d = o ? this._getStyleAnchor(o) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(u);
    let f = null;
    for (let h = i.length - 1; h >= 0; h--) {
      const y = document.createElement("style");
      if (a && y.setAttribute("nonce", a), y.textContent = i[h], u.insertBefore(y, f || d), f = y, h === 0 && (o || this._styleAnchors.set(this._def, y), r && this._styleAnchors.set(r, y)), process.env.NODE_ENV !== "production") if (r) {
        if (r.__hmrId) {
          this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
          let T = this._childStyles.get(r.__hmrId);
          T || this._childStyles.set(r.__hmrId, T = []), T.push(y);
        }
      } else (this._styles || (this._styles = [])).push(y);
    }
  }
  _getStyleAnchor(i) {
    if (!i) return null;
    const r = this._styleAnchors.get(i);
    return r && r.parentNode === this.shadowRoot ? r : (r && this._styleAnchors.delete(i), null);
  }
  _getRootStyleInsertionAnchor(i) {
    for (let r = 0; r < i.childNodes.length; r++) {
      const o = i.childNodes[r];
      if (!(o instanceof HTMLStyleElement)) return o;
    }
    return null;
  }
  _parseSlots() {
    const i = this._slots = {};
    let r;
    for (; r = this.firstChild; ) {
      const o = r.nodeType === 1 && r.getAttribute("slot") || "default";
      (i[o] || (i[o] = [])).push(r), this.removeChild(r);
    }
  }
  _renderSlots() {
    const i = this._getSlots(), r = this._instance.type.__scopeId;
    for (let o = 0; o < i.length; o++) {
      const a = i[o], u = a.getAttribute("name") || "default", d = this._slots[u], f = a.parentNode;
      if (d) for (const h of d) {
        if (r && h.nodeType === 1) {
          const y = r + "-s", T = document.createTreeWalker(h, 1);
          h.setAttribute(y, "");
          let _;
          for (; _ = T.nextNode(); ) _.setAttribute(y, "");
        }
        f.insertBefore(h, a);
      }
      else for (; a.firstChild; ) f.insertBefore(a.firstChild, a);
      f.removeChild(a);
    }
  }
  _getSlots() {
    const i = [this];
    this._teleportTargets && i.push(...this._teleportTargets);
    const r = /* @__PURE__ */ new Set();
    for (const o of i) {
      const a = o.querySelectorAll("slot");
      for (let u = 0; u < a.length; u++) r.add(a[u]);
    }
    return Array.from(r);
  }
  _injectChildStyle(i, r) {
    this._applyStyles(i.styles, i, r);
  }
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  _hasShadowRoot() {
    return this._def.shadowRoot !== !1;
  }
  _removeChildStyle(i) {
    if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(i), this._styleAnchors.delete(i), this._childStyles && i.__hmrId)) {
      const r = this._childStyles.get(i.__hmrId);
      r && (r.forEach((o) => this._root.removeChild(o)), r.length = 0);
    }
  }
}, dp = (t) => {
  const i = t.props["onUpdate:modelValue"] || !1;
  return K(i) ? (r) => Xi(i, r) : i;
};
function vT(t) {
  t.target.composing = !0;
}
function pp(t) {
  const i = t.target;
  i.composing && (i.composing = !1, i.dispatchEvent(new Event("input")));
}
var tl = /* @__PURE__ */ Symbol("_assign");
function fp(t, i, r) {
  return i && (t = t.trim()), r && (t = El(t)), t;
}
var IT = {
  created(t, { modifiers: { lazy: i, trim: r, number: o } }, a) {
    t[tl] = dp(a);
    const u = o || a.props && a.props.type === "number";
    er(t, i ? "change" : "input", (d) => {
      d.target.composing || t[tl](fp(t.value, r, u));
    }), (r || u) && er(t, "change", () => {
      t.value = fp(t.value, r, u);
    }), i || (er(t, "compositionstart", vT), er(t, "compositionend", pp), er(t, "change", pp));
  },
  mounted(t, { value: i }) {
    t.value = i ?? "";
  },
  beforeUpdate(t, { value: i, oldValue: r, modifiers: { lazy: o, trim: a, number: u } }, d) {
    if (t[tl] = dp(d), t.composing) return;
    const f = (u || t.type === "number") && !/^0\d/.test(t.value) ? El(t.value) : t.value, h = i ?? "";
    if (f === h) return;
    const y = t.getRootNode();
    (y instanceof Document || y instanceof ShadowRoot) && y.activeElement === t && t.type !== "range" && (o && i === r || a && t.value.trim() === h) || (t.value = h);
  }
}, _T = [
  "ctrl",
  "shift",
  "alt",
  "meta"
], TT = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, i) => _T.some((r) => t[`${r}Key`] && !i.includes(r))
}, wT = (t, i) => {
  if (!t) return t;
  const r = t._withMods || (t._withMods = {}), o = i.join(".");
  return r[o] || (r[o] = (a, ...u) => {
    for (let d = 0; d < i.length; d++) {
      const f = TT[i[d]];
      if (f && f(a, i)) return;
    }
    return t(a, ...u);
  });
}, ET = /* @__PURE__ */ Ne({ patchProp: pT }, Y2), mp;
function Df() {
  return mp || (mp = S2(ET));
}
var yT = (...t) => {
  Df().render(...t);
}, gp = (...t) => {
  const i = Df().createApp(...t);
  process.env.NODE_ENV !== "production" && (AT(i), ST(i));
  const { mount: r } = i;
  return i.mount = (o) => {
    const a = NT(o);
    if (!a) return;
    const u = i._component;
    !te(u) && !u.render && !u.template && (u.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const d = r(a, !1, CT(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), d;
  }, i;
};
function CT(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
}
function AT(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (i) => RI(i) || OI(i) || PI(i),
    writable: !1
  });
}
function ST(t) {
  if (Of()) {
    const i = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return i;
      },
      set() {
        Gt("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const r = t.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return Gt(o), r;
      },
      set() {
        Gt(o);
      }
    });
  }
}
function NT(t) {
  if (Re(t)) {
    const i = document.querySelector(t);
    return process.env.NODE_ENV !== "production" && !i && Gt(`Failed to mount app: mount target selector "${t}" returned null.`), i;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && Gt('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), t;
}
function UT() {
  G2();
}
process.env.NODE_ENV !== "production" && UT();
var RT = /* @__PURE__ */ vI((t, i) => {
  (function() {
    var r, o = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", h = "__lodash_hash_undefined__", y = 500, T = "__lodash_placeholder__", _ = 1, U = 2, M = 4, j = 1, G = 2, ge = 1, _e = 2, he = 4, se = 8, ke = 16, H = 32, Oe = 64, De = 128, qe = 256, Xe = 512, Wt = 30, mn = "...", wt = 800, xi = 16, ar = 1, gn = 2, st = 3, ae = 1 / 0, ne = 9007199254740991, Mt = 17976931348623157e292, Rn = NaN, ut = 4294967295, zi = ut - 1, hn = ut >>> 1, lr = [
      ["ary", De],
      ["bind", ge],
      ["bindKey", _e],
      ["curry", se],
      ["curryRight", ke],
      ["flip", Xe],
      ["partial", H],
      ["partialRight", Oe],
      ["rearg", qe]
    ], Yn = "[object Arguments]", Mi = "[object Array]", pi = "[object AsyncFunction]", bn = "[object Boolean]", On = "[object Date]", Qr = "[object DOMException]", Kt = "[object Error]", Zn = "[object Function]", Li = "[object GeneratorFunction]", g = "[object Map]", I = "[object Number]", A = "[object Null]", P = "[object Object]", x = "[object Promise]", O = "[object Proxy]", F = "[object RegExp]", D = "[object Set]", q = "[object String]", z = "[object Symbol]", Y = "[object Undefined]", V = "[object WeakMap]", W = "[object WeakSet]", Z = "[object ArrayBuffer]", ce = "[object DataView]", be = "[object Float32Array]", ve = "[object Float64Array]", xe = "[object Int8Array]", Me = "[object Int16Array]", ct = "[object Int32Array]", tt = "[object Uint8Array]", Pn = "[object Uint8ClampedArray]", Di = "[object Uint16Array]", Je = "[object Uint32Array]", Lt = /\b__p \+= '';/g, es = /\b(__p \+=) '' \+/g, ts = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Wl = /&(?:amp|lt|gt|quot|#39);/g, Kl = /[&<>"']/g, Jf = RegExp(Wl.source), Gf = RegExp(Kl.source), Wf = /<%-([\s\S]+?)%>/g, Kf = /<%([\s\S]+?)%>/g, Yl = /<%=([\s\S]+?)%>/g, Yf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zf = /^\w*$/, Xf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ro = /[\\^$.*+?()[\]{}|]/g, Qf = RegExp(Ro.source), Oo = /^\s+/, em = /\s/, tm = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, nm = /\{\n\/\* \[wrapped with (.+)\] \*/, im = /,? & /, rm = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, sm = /[()=,{}\[\]\/\s]/, om = /\\(\\)?/g, am = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Zl = /\w*$/, lm = /^[-+]0x[0-9a-f]+$/i, um = /^0b[01]+$/i, cm = /^\[object .+?Constructor\]$/, dm = /^0o[0-7]+$/i, pm = /^(?:0|[1-9]\d*)$/, fm = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ns = /($^)/, mm = /['\n\r\u2028\u2029\\]/g, is = "\\ud800-\\udfff", Xl = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Ql = "\\u2700-\\u27bf", eu = "a-z\\xdf-\\xf6\\xf8-\\xff", gm = "\\xac\\xb1\\xd7\\xf7", hm = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", bm = "\\u2000-\\u206f", vm = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", tu = "A-Z\\xc0-\\xd6\\xd8-\\xde", nu = "\\ufe0e\\ufe0f", iu = gm + hm + bm + vm, Po = "['’]", Im = "[" + is + "]", ru = "[" + iu + "]", rs = "[" + Xl + "]", su = "\\d+", _m = "[" + Ql + "]", ou = "[" + eu + "]", au = "[^" + is + iu + su + Ql + eu + tu + "]", xo = "\\ud83c[\\udffb-\\udfff]", Tm = "(?:" + rs + "|" + xo + ")", lu = "[^" + is + "]", zo = "(?:\\ud83c[\\udde6-\\uddff]){2}", Mo = "[\\ud800-\\udbff][\\udc00-\\udfff]", qi = "[" + tu + "]", uu = "\\u200d", cu = "(?:" + ou + "|" + au + ")", wm = "(?:" + qi + "|" + au + ")", du = "(?:" + Po + "(?:d|ll|m|re|s|t|ve))?", pu = "(?:" + Po + "(?:D|LL|M|RE|S|T|VE))?", fu = Tm + "?", mu = "[" + nu + "]?", Em = "(?:" + uu + "(?:" + [
      lu,
      zo,
      Mo
    ].join("|") + ")" + mu + fu + ")*", ym = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Cm = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", gu = mu + fu + Em, Am = "(?:" + [
      _m,
      zo,
      Mo
    ].join("|") + ")" + gu, Sm = "(?:" + [
      lu + rs + "?",
      rs,
      zo,
      Mo,
      Im
    ].join("|") + ")", Nm = RegExp(Po, "g"), Um = RegExp(rs, "g"), Lo = RegExp(xo + "(?=" + xo + ")|" + Sm + gu, "g"), Rm = RegExp([
      qi + "?" + ou + "+" + du + "(?=" + [
        ru,
        qi,
        "$"
      ].join("|") + ")",
      wm + "+" + pu + "(?=" + [
        ru,
        qi + cu,
        "$"
      ].join("|") + ")",
      qi + "?" + cu + "+" + du,
      qi + "+" + pu,
      Cm,
      ym,
      su,
      Am
    ].join("|"), "g"), Om = RegExp("[" + uu + is + Xl + nu + "]"), Pm = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, xm = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], zm = -1, Pe = {};
    Pe[be] = Pe[ve] = Pe[xe] = Pe[Me] = Pe[ct] = Pe[tt] = Pe[Pn] = Pe[Di] = Pe[Je] = !0, Pe[Yn] = Pe[Mi] = Pe[Z] = Pe[bn] = Pe[ce] = Pe[On] = Pe[Kt] = Pe[Zn] = Pe[g] = Pe[I] = Pe[P] = Pe[F] = Pe[D] = Pe[q] = Pe[V] = !1;
    var Ue = {};
    Ue[Yn] = Ue[Mi] = Ue[Z] = Ue[ce] = Ue[bn] = Ue[On] = Ue[be] = Ue[ve] = Ue[xe] = Ue[Me] = Ue[ct] = Ue[g] = Ue[I] = Ue[P] = Ue[F] = Ue[D] = Ue[q] = Ue[z] = Ue[tt] = Ue[Pn] = Ue[Di] = Ue[Je] = !0, Ue[Kt] = Ue[Zn] = Ue[V] = !1;
    var Mm = {
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Lm = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Dm = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, qm = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Fm = parseFloat, Bm = parseInt, hu = typeof global == "object" && global && global.Object === Object && global, Vm = typeof self == "object" && self && self.Object === Object && self, Qe = hu || Vm || Function("return this")(), Do = typeof t == "object" && t && !t.nodeType && t, fi = Do && typeof i == "object" && i && !i.nodeType && i, bu = fi && fi.exports === Do, qo = bu && hu.process, Dt = function() {
      try {
        var w = fi && fi.require && fi.require("util").types;
        return w || qo && qo.binding && qo.binding("util");
      } catch {
      }
    }(), vu = Dt && Dt.isArrayBuffer, Iu = Dt && Dt.isDate, _u = Dt && Dt.isMap, Tu = Dt && Dt.isRegExp, wu = Dt && Dt.isSet, Eu = Dt && Dt.isTypedArray;
    function Et(w, S, C) {
      switch (C.length) {
        case 0:
          return w.call(S);
        case 1:
          return w.call(S, C[0]);
        case 2:
          return w.call(S, C[0], C[1]);
        case 3:
          return w.call(S, C[0], C[1], C[2]);
      }
      return w.apply(S, C);
    }
    function jm(w, S, C, $) {
      for (var ie = -1, Te = w == null ? 0 : w.length; ++ie < Te; ) {
        var Ge = w[ie];
        S($, Ge, C(Ge), w);
      }
      return $;
    }
    function qt(w, S) {
      for (var C = -1, $ = w == null ? 0 : w.length; ++C < $ && S(w[C], C, w) !== !1; ) ;
      return w;
    }
    function km(w, S) {
      for (var C = w == null ? 0 : w.length; C-- && S(w[C], C, w) !== !1; ) ;
      return w;
    }
    function yu(w, S) {
      for (var C = -1, $ = w == null ? 0 : w.length; ++C < $; ) if (!S(w[C], C, w)) return !1;
      return !0;
    }
    function Xn(w, S) {
      for (var C = -1, $ = w == null ? 0 : w.length, ie = 0, Te = []; ++C < $; ) {
        var Ge = w[C];
        S(Ge, C, w) && (Te[ie++] = Ge);
      }
      return Te;
    }
    function ss(w, S) {
      return !!(w != null && w.length) && Fi(w, S, 0) > -1;
    }
    function Fo(w, S, C) {
      for (var $ = -1, ie = w == null ? 0 : w.length; ++$ < ie; ) if (C(S, w[$])) return !0;
      return !1;
    }
    function ze(w, S) {
      for (var C = -1, $ = w == null ? 0 : w.length, ie = Array($); ++C < $; ) ie[C] = S(w[C], C, w);
      return ie;
    }
    function Qn(w, S) {
      for (var C = -1, $ = S.length, ie = w.length; ++C < $; ) w[ie + C] = S[C];
      return w;
    }
    function Bo(w, S, C, $) {
      var ie = -1, Te = w == null ? 0 : w.length;
      for ($ && Te && (C = w[++ie]); ++ie < Te; ) C = S(C, w[ie], ie, w);
      return C;
    }
    function $m(w, S, C, $) {
      var ie = w == null ? 0 : w.length;
      for ($ && ie && (C = w[--ie]); ie--; ) C = S(C, w[ie], ie, w);
      return C;
    }
    function Vo(w, S) {
      for (var C = -1, $ = w == null ? 0 : w.length; ++C < $; ) if (S(w[C], C, w)) return !0;
      return !1;
    }
    var Hm = jo("length");
    function Jm(w) {
      return w.split("");
    }
    function Gm(w) {
      return w.match(rm) || [];
    }
    function Cu(w, S, C) {
      var $;
      return C(w, function(ie, Te, Ge) {
        if (S(ie, Te, Ge))
          return $ = Te, !1;
      }), $;
    }
    function os(w, S, C, $) {
      for (var ie = w.length, Te = C + ($ ? 1 : -1); $ ? Te-- : ++Te < ie; ) if (S(w[Te], Te, w)) return Te;
      return -1;
    }
    function Fi(w, S, C) {
      return S === S ? sg(w, S, C) : os(w, Au, C);
    }
    function Wm(w, S, C, $) {
      for (var ie = C - 1, Te = w.length; ++ie < Te; ) if ($(w[ie], S)) return ie;
      return -1;
    }
    function Au(w) {
      return w !== w;
    }
    function Su(w, S) {
      var C = w == null ? 0 : w.length;
      return C ? $o(w, S) / C : Rn;
    }
    function jo(w) {
      return function(S) {
        return S == null ? r : S[w];
      };
    }
    function ko(w) {
      return function(S) {
        return w == null ? r : w[S];
      };
    }
    function Nu(w, S, C, $, ie) {
      return ie(w, function(Te, Ge, Ae) {
        C = $ ? ($ = !1, Te) : S(C, Te, Ge, Ae);
      }), C;
    }
    function Km(w, S) {
      var C = w.length;
      for (w.sort(S); C--; ) w[C] = w[C].value;
      return w;
    }
    function $o(w, S) {
      for (var C, $ = -1, ie = w.length; ++$ < ie; ) {
        var Te = S(w[$]);
        Te !== r && (C = C === r ? Te : C + Te);
      }
      return C;
    }
    function Ho(w, S) {
      for (var C = -1, $ = Array(w); ++C < w; ) $[C] = S(C);
      return $;
    }
    function Ym(w, S) {
      return ze(S, function(C) {
        return [C, w[C]];
      });
    }
    function Uu(w) {
      return w && w.slice(0, xu(w) + 1).replace(Oo, "");
    }
    function yt(w) {
      return function(S) {
        return w(S);
      };
    }
    function Jo(w, S) {
      return ze(S, function(C) {
        return w[C];
      });
    }
    function ur(w, S) {
      return w.has(S);
    }
    function Ru(w, S) {
      for (var C = -1, $ = w.length; ++C < $ && Fi(S, w[C], 0) > -1; ) ;
      return C;
    }
    function Ou(w, S) {
      for (var C = w.length; C-- && Fi(S, w[C], 0) > -1; ) ;
      return C;
    }
    function Zm(w, S) {
      for (var C = w.length, $ = 0; C--; ) w[C] === S && ++$;
      return $;
    }
    var Xm = ko(Mm), Qm = ko(Lm);
    function eg(w) {
      return "\\" + qm[w];
    }
    function tg(w, S) {
      return w == null ? r : w[S];
    }
    function Bi(w) {
      return Om.test(w);
    }
    function ng(w) {
      return Pm.test(w);
    }
    function ig(w) {
      for (var S, C = []; !(S = w.next()).done; ) C.push(S.value);
      return C;
    }
    function Go(w) {
      var S = -1, C = Array(w.size);
      return w.forEach(function($, ie) {
        C[++S] = [ie, $];
      }), C;
    }
    function Pu(w, S) {
      return function(C) {
        return w(S(C));
      };
    }
    function ei(w, S) {
      for (var C = -1, $ = w.length, ie = 0, Te = []; ++C < $; ) {
        var Ge = w[C];
        (Ge === S || Ge === T) && (w[C] = T, Te[ie++] = C);
      }
      return Te;
    }
    function as(w) {
      var S = -1, C = Array(w.size);
      return w.forEach(function($) {
        C[++S] = $;
      }), C;
    }
    function rg(w) {
      var S = -1, C = Array(w.size);
      return w.forEach(function($) {
        C[++S] = [$, $];
      }), C;
    }
    function sg(w, S, C) {
      for (var $ = C - 1, ie = w.length; ++$ < ie; ) if (w[$] === S) return $;
      return -1;
    }
    function og(w, S, C) {
      for (var $ = C + 1; $--; ) if (w[$] === S) return $;
      return $;
    }
    function Vi(w) {
      return Bi(w) ? lg(w) : Hm(w);
    }
    function Yt(w) {
      return Bi(w) ? ug(w) : Jm(w);
    }
    function xu(w) {
      for (var S = w.length; S-- && em.test(w.charAt(S)); ) ;
      return S;
    }
    var ag = ko(Dm);
    function lg(w) {
      for (var S = Lo.lastIndex = 0; Lo.test(w); ) ++S;
      return S;
    }
    function ug(w) {
      return w.match(Lo) || [];
    }
    function cg(w) {
      return w.match(Rm) || [];
    }
    var ti = function w(S) {
      S = S == null ? Qe : ti.defaults(Qe.Object(), S, ti.pick(Qe, xm));
      var C = S.Array, $ = S.Date, ie = S.Error, Te = S.Function, Ge = S.Math, Ae = S.Object, Wo = S.RegExp, dg = S.String, Ft = S.TypeError, ls = C.prototype, pg = Te.prototype, ji = Ae.prototype, us = S["__core-js_shared__"], cs = pg.toString, Ce = ji.hasOwnProperty, fg = 0, zu = function() {
        var e = /[^.]+$/.exec(us && us.keys && us.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), ds = ji.toString, mg = cs.call(Ae), gg = Qe._, hg = Wo("^" + cs.call(Ce).replace(Ro, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ps = bu ? S.Buffer : r, ni = S.Symbol, fs = S.Uint8Array, Mu = ps ? ps.allocUnsafe : r, ms = Pu(Ae.getPrototypeOf, Ae), Lu = Ae.create, Du = ji.propertyIsEnumerable, gs = ls.splice, qu = ni ? ni.isConcatSpreadable : r, cr = ni ? ni.iterator : r, mi = ni ? ni.toStringTag : r, hs = function() {
        try {
          var e = Ii(Ae, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), bg = S.clearTimeout !== Qe.clearTimeout && S.clearTimeout, vg = $ && $.now !== Qe.Date.now && $.now, Ig = S.setTimeout !== Qe.setTimeout && S.setTimeout, bs = Ge.ceil, vs = Ge.floor, Ko = Ae.getOwnPropertySymbols, _g = ps ? ps.isBuffer : r, Fu = S.isFinite, Tg = ls.join, wg = Pu(Ae.keys, Ae), We = Ge.max, ot = Ge.min, Eg = $.now, yg = S.parseInt, Bu = Ge.random, Cg = ls.reverse, Yo = Ii(S, "DataView"), dr = Ii(S, "Map"), Zo = Ii(S, "Promise"), ki = Ii(S, "Set"), pr = Ii(S, "WeakMap"), fr = Ii(Ae, "create"), Is = pr && new pr(), $i = {}, Ag = _i(Yo), Sg = _i(dr), Ng = _i(Zo), Ug = _i(ki), Rg = _i(pr), _s = ni ? ni.prototype : r, mr = _s ? _s.valueOf : r, Vu = _s ? _s.toString : r;
      function p(e) {
        if (Fe(e) && !oe(e) && !(e instanceof pe)) {
          if (e instanceof Bt) return e;
          if (Ce.call(e, "__wrapped__")) return jc(e);
        }
        return new Bt(e);
      }
      var Hi = /* @__PURE__ */ function() {
        function e() {
        }
        return function(n) {
          if (!Le(n)) return {};
          if (Lu) return Lu(n);
          e.prototype = n;
          var s = new e();
          return e.prototype = r, s;
        };
      }();
      function Ts() {
      }
      function Bt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = {
        escape: Wf,
        evaluate: Kf,
        interpolate: Yl,
        variable: "",
        imports: { _: p }
      }, p.prototype = Ts.prototype, p.prototype.constructor = p, Bt.prototype = Hi(Ts.prototype), Bt.prototype.constructor = Bt;
      function pe(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ut, this.__views__ = [];
      }
      function Og() {
        var e = new pe(this.__wrapped__);
        return e.__actions__ = bt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = bt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = bt(this.__views__), e;
      }
      function Pg() {
        if (this.__filtered__) {
          var e = new pe(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function xg() {
        var e = this.__wrapped__.value(), n = this.__dir__, s = oe(e), l = n < 0, c = s ? e.length : 0, m = Hh(0, c, this.__views__), b = m.start, v = m.end, E = v - b, R = l ? v : b - 1, N = this.__iteratees__, L = N.length, k = 0, J = ot(E, this.__takeCount__);
        if (!s || !l && c == E && J == E) return dc(e, this.__actions__);
        var X = [];
        e: for (; E-- && k < J; ) {
          R += n;
          for (var re = -1, ee = e[R]; ++re < L; ) {
            var Se = N[re], fe = Se.iteratee, ft = Se.type, Tn = fe(ee);
            if (ft == gn) ee = Tn;
            else if (!Tn) {
              if (ft == ar) continue e;
              break e;
            }
          }
          X[k++] = ee;
        }
        return X;
      }
      pe.prototype = Hi(Ts.prototype), pe.prototype.constructor = pe;
      function gi(e) {
        var n = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++n < s; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function zg() {
        this.__data__ = fr ? fr(null) : {}, this.size = 0;
      }
      function Mg(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function Lg(e) {
        var n = this.__data__;
        if (fr) {
          var s = n[e];
          return s === h ? r : s;
        }
        return Ce.call(n, e) ? n[e] : r;
      }
      function Dg(e) {
        var n = this.__data__;
        return fr ? n[e] !== r : Ce.call(n, e);
      }
      function qg(e, n) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = fr && n === r ? h : n, this;
      }
      gi.prototype.clear = zg, gi.prototype.delete = Mg, gi.prototype.get = Lg, gi.prototype.has = Dg, gi.prototype.set = qg;
      function xn(e) {
        var n = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++n < s; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function Fg() {
        this.__data__ = [], this.size = 0;
      }
      function Bg(e) {
        var n = this.__data__, s = ws(n, e);
        return s < 0 ? !1 : (s == n.length - 1 ? n.pop() : gs.call(n, s, 1), --this.size, !0);
      }
      function Vg(e) {
        var n = this.__data__, s = ws(n, e);
        return s < 0 ? r : n[s][1];
      }
      function jg(e) {
        return ws(this.__data__, e) > -1;
      }
      function kg(e, n) {
        var s = this.__data__, l = ws(s, e);
        return l < 0 ? (++this.size, s.push([e, n])) : s[l][1] = n, this;
      }
      xn.prototype.clear = Fg, xn.prototype.delete = Bg, xn.prototype.get = Vg, xn.prototype.has = jg, xn.prototype.set = kg;
      function zn(e) {
        var n = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++n < s; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function $g() {
        this.size = 0, this.__data__ = {
          hash: new gi(),
          map: new (dr || xn)(),
          string: new gi()
        };
      }
      function Hg(e) {
        var n = zs(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function Jg(e) {
        return zs(this, e).get(e);
      }
      function Gg(e) {
        return zs(this, e).has(e);
      }
      function Wg(e, n) {
        var s = zs(this, e), l = s.size;
        return s.set(e, n), this.size += s.size == l ? 0 : 1, this;
      }
      zn.prototype.clear = $g, zn.prototype.delete = Hg, zn.prototype.get = Jg, zn.prototype.has = Gg, zn.prototype.set = Wg;
      function hi(e) {
        var n = -1, s = e == null ? 0 : e.length;
        for (this.__data__ = new zn(); ++n < s; ) this.add(e[n]);
      }
      function Kg(e) {
        return this.__data__.set(e, h), this;
      }
      function Yg(e) {
        return this.__data__.has(e);
      }
      hi.prototype.add = hi.prototype.push = Kg, hi.prototype.has = Yg;
      function Zt(e) {
        var n = this.__data__ = new xn(e);
        this.size = n.size;
      }
      function Zg() {
        this.__data__ = new xn(), this.size = 0;
      }
      function Xg(e) {
        var n = this.__data__, s = n.delete(e);
        return this.size = n.size, s;
      }
      function Qg(e) {
        return this.__data__.get(e);
      }
      function eh(e) {
        return this.__data__.has(e);
      }
      function th(e, n) {
        var s = this.__data__;
        if (s instanceof xn) {
          var l = s.__data__;
          if (!dr || l.length < a - 1)
            return l.push([e, n]), this.size = ++s.size, this;
          s = this.__data__ = new zn(l);
        }
        return s.set(e, n), this.size = s.size, this;
      }
      Zt.prototype.clear = Zg, Zt.prototype.delete = Xg, Zt.prototype.get = Qg, Zt.prototype.has = eh, Zt.prototype.set = th;
      function ju(e, n) {
        var s = oe(e), l = !s && Ti(e), c = !s && !l && ai(e), m = !s && !l && !c && Ki(e), b = s || l || c || m, v = b ? Ho(e.length, dg) : [], E = v.length;
        for (var R in e) (n || Ce.call(e, R)) && !(b && (R == "length" || c && (R == "offset" || R == "parent") || m && (R == "buffer" || R == "byteLength" || R == "byteOffset") || qn(R, E))) && v.push(R);
        return v;
      }
      function ku(e) {
        var n = e.length;
        return n ? e[la(0, n - 1)] : r;
      }
      function nh(e, n) {
        return Ms(bt(e), bi(n, 0, e.length));
      }
      function ih(e) {
        return Ms(bt(e));
      }
      function Xo(e, n, s) {
        (s !== r && !Xt(e[n], s) || s === r && !(n in e)) && Mn(e, n, s);
      }
      function gr(e, n, s) {
        var l = e[n];
        (!(Ce.call(e, n) && Xt(l, s)) || s === r && !(n in e)) && Mn(e, n, s);
      }
      function ws(e, n) {
        for (var s = e.length; s--; ) if (Xt(e[s][0], n)) return s;
        return -1;
      }
      function rh(e, n, s, l) {
        return ii(e, function(c, m, b) {
          n(l, c, s(c), b);
        }), l;
      }
      function $u(e, n) {
        return e && In(n, et(n), e);
      }
      function sh(e, n) {
        return e && In(n, It(n), e);
      }
      function Mn(e, n, s) {
        n == "__proto__" && hs ? hs(e, n, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : e[n] = s;
      }
      function Qo(e, n) {
        for (var s = -1, l = n.length, c = C(l), m = e == null; ++s < l; ) c[s] = m ? r : xa(e, n[s]);
        return c;
      }
      function bi(e, n, s) {
        return e === e && (s !== r && (e = e <= s ? e : s), n !== r && (e = e >= n ? e : n)), e;
      }
      function Vt(e, n, s, l, c, m) {
        var b, v = n & _, E = n & U, R = n & M;
        if (s && (b = c ? s(e, l, c, m) : s(e)), b !== r) return b;
        if (!Le(e)) return e;
        var N = oe(e);
        if (N) {
          if (b = Gh(e), !v) return bt(e, b);
        } else {
          var L = at(e), k = L == Zn || L == Li;
          if (ai(e)) return mc(e, v);
          if (L == P || L == Yn || k && !c) {
            if (b = E || k ? {} : xc(e), !v) return E ? Lh(e, sh(b, e)) : Mh(e, $u(b, e));
          } else {
            if (!Ue[L]) return c ? e : {};
            b = Wh(e, L, v);
          }
        }
        m || (m = new Zt());
        var J = m.get(e);
        if (J) return J;
        m.set(e, b), ld(e) ? e.forEach(function(re) {
          b.add(Vt(re, n, s, re, e, m));
        }) : od(e) && e.forEach(function(re, ee) {
          b.set(ee, Vt(re, n, s, ee, e, m));
        });
        var X = N ? r : (R ? E ? Ia : va : E ? It : et)(e);
        return qt(X || e, function(re, ee) {
          X && (ee = re, re = e[ee]), gr(b, ee, Vt(re, n, s, ee, e, m));
        }), b;
      }
      function oh(e) {
        var n = et(e);
        return function(s) {
          return Hu(s, e, n);
        };
      }
      function Hu(e, n, s) {
        var l = s.length;
        if (e == null) return !l;
        for (e = Ae(e); l--; ) {
          var c = s[l], m = n[c], b = e[c];
          if (b === r && !(c in e) || !m(b)) return !1;
        }
        return !0;
      }
      function Ju(e, n, s) {
        if (typeof e != "function") throw new Ft(d);
        return wr(function() {
          e.apply(r, s);
        }, n);
      }
      function hr(e, n, s, l) {
        var c = -1, m = ss, b = !0, v = e.length, E = [], R = n.length;
        if (!v) return E;
        s && (n = ze(n, yt(s))), l ? (m = Fo, b = !1) : n.length >= a && (m = ur, b = !1, n = new hi(n));
        e: for (; ++c < v; ) {
          var N = e[c], L = s == null ? N : s(N);
          if (N = l || N !== 0 ? N : 0, b && L === L) {
            for (var k = R; k--; ) if (n[k] === L) continue e;
            E.push(N);
          } else m(n, L, l) || E.push(N);
        }
        return E;
      }
      var ii = Ic(vn), Gu = Ic(ta, !0);
      function ah(e, n) {
        var s = !0;
        return ii(e, function(l, c, m) {
          return s = !!n(l, c, m), s;
        }), s;
      }
      function Es(e, n, s) {
        for (var l = -1, c = e.length; ++l < c; ) {
          var m = e[l], b = n(m);
          if (b != null && (v === r ? b === b && !At(b) : s(b, v))) var v = b, E = m;
        }
        return E;
      }
      function lh(e, n, s, l) {
        var c = e.length;
        for (s = le(s), s < 0 && (s = -s > c ? 0 : c + s), l = l === r || l > c ? c : le(l), l < 0 && (l += c), l = s > l ? 0 : cd(l); s < l; ) e[s++] = n;
        return e;
      }
      function Wu(e, n) {
        var s = [];
        return ii(e, function(l, c, m) {
          n(l, c, m) && s.push(l);
        }), s;
      }
      function nt(e, n, s, l, c) {
        var m = -1, b = e.length;
        for (s || (s = Yh), c || (c = []); ++m < b; ) {
          var v = e[m];
          n > 0 && s(v) ? n > 1 ? nt(v, n - 1, s, l, c) : Qn(c, v) : l || (c[c.length] = v);
        }
        return c;
      }
      var ea = _c(), Ku = _c(!0);
      function vn(e, n) {
        return e && ea(e, n, et);
      }
      function ta(e, n) {
        return e && Ku(e, n, et);
      }
      function ys(e, n) {
        return Xn(n, function(s) {
          return Fn(e[s]);
        });
      }
      function vi(e, n) {
        n = si(n, e);
        for (var s = 0, l = n.length; e != null && s < l; ) e = e[_n(n[s++])];
        return s && s == l ? e : r;
      }
      function Yu(e, n, s) {
        var l = n(e);
        return oe(e) ? l : Qn(l, s(e));
      }
      function dt(e) {
        return e == null ? e === r ? Y : A : mi && mi in Ae(e) ? $h(e) : i0(e);
      }
      function na(e, n) {
        return e > n;
      }
      function uh(e, n) {
        return e != null && Ce.call(e, n);
      }
      function ch(e, n) {
        return e != null && n in Ae(e);
      }
      function dh(e, n, s) {
        return e >= ot(n, s) && e < We(n, s);
      }
      function ia(e, n, s) {
        for (var l = s ? Fo : ss, c = e[0].length, m = e.length, b = m, v = C(m), E = 1 / 0, R = []; b--; ) {
          var N = e[b];
          b && n && (N = ze(N, yt(n))), E = ot(N.length, E), v[b] = !s && (n || c >= 120 && N.length >= 120) ? new hi(b && N) : r;
        }
        N = e[0];
        var L = -1, k = v[0];
        e: for (; ++L < c && R.length < E; ) {
          var J = N[L], X = n ? n(J) : J;
          if (J = s || J !== 0 ? J : 0, !(k ? ur(k, X) : l(R, X, s))) {
            for (b = m; --b; ) {
              var re = v[b];
              if (!(re ? ur(re, X) : l(e[b], X, s))) continue e;
            }
            k && k.push(X), R.push(J);
          }
        }
        return R;
      }
      function ph(e, n, s, l) {
        return vn(e, function(c, m, b) {
          n(l, s(c), m, b);
        }), l;
      }
      function br(e, n, s) {
        n = si(n, e), e = Dc(e, n);
        var l = e == null ? e : e[_n(kt(n))];
        return l == null ? r : Et(l, e, s);
      }
      function Zu(e) {
        return Fe(e) && dt(e) == Yn;
      }
      function fh(e) {
        return Fe(e) && dt(e) == Z;
      }
      function mh(e) {
        return Fe(e) && dt(e) == On;
      }
      function vr(e, n, s, l, c) {
        return e === n ? !0 : e == null || n == null || !Fe(e) && !Fe(n) ? e !== e && n !== n : gh(e, n, s, l, vr, c);
      }
      function gh(e, n, s, l, c, m) {
        var b = oe(e), v = oe(n), E = b ? Mi : at(e), R = v ? Mi : at(n);
        E = E == Yn ? P : E, R = R == Yn ? P : R;
        var N = E == P, L = R == P, k = E == R;
        if (k && ai(e)) {
          if (!ai(n)) return !1;
          b = !0, N = !1;
        }
        if (k && !N)
          return m || (m = new Zt()), b || Ki(e) ? Rc(e, n, s, l, c, m) : jh(e, n, E, s, l, c, m);
        if (!(s & j)) {
          var J = N && Ce.call(e, "__wrapped__"), X = L && Ce.call(n, "__wrapped__");
          if (J || X) {
            var re = J ? e.value() : e, ee = X ? n.value() : n;
            return m || (m = new Zt()), c(re, ee, s, l, m);
          }
        }
        return k ? (m || (m = new Zt()), kh(e, n, s, l, c, m)) : !1;
      }
      function hh(e) {
        return Fe(e) && at(e) == g;
      }
      function ra(e, n, s, l) {
        var c = s.length, m = c, b = !l;
        if (e == null) return !m;
        for (e = Ae(e); c--; ) {
          var v = s[c];
          if (b && v[2] ? v[1] !== e[v[0]] : !(v[0] in e)) return !1;
        }
        for (; ++c < m; ) {
          v = s[c];
          var E = v[0], R = e[E], N = v[1];
          if (b && v[2]) {
            if (R === r && !(E in e)) return !1;
          } else {
            var L = new Zt();
            if (l) var k = l(R, N, E, e, n, L);
            if (!(k === r ? vr(N, R, j | G, l, L) : k)) return !1;
          }
        }
        return !0;
      }
      function Xu(e) {
        return !Le(e) || Xh(e) ? !1 : (Fn(e) ? hg : cm).test(_i(e));
      }
      function bh(e) {
        return Fe(e) && dt(e) == F;
      }
      function vh(e) {
        return Fe(e) && at(e) == D;
      }
      function Ih(e) {
        return Fe(e) && Vs(e.length) && !!Pe[dt(e)];
      }
      function Qu(e) {
        return typeof e == "function" ? e : e == null ? _t : typeof e == "object" ? oe(e) ? nc(e[0], e[1]) : tc(e) : Td(e);
      }
      function sa(e) {
        if (!Tr(e)) return wg(e);
        var n = [];
        for (var s in Ae(e)) Ce.call(e, s) && s != "constructor" && n.push(s);
        return n;
      }
      function _h(e) {
        if (!Le(e)) return n0(e);
        var n = Tr(e), s = [];
        for (var l in e) l == "constructor" && (n || !Ce.call(e, l)) || s.push(l);
        return s;
      }
      function oa(e, n) {
        return e < n;
      }
      function ec(e, n) {
        var s = -1, l = vt(e) ? C(e.length) : [];
        return ii(e, function(c, m, b) {
          l[++s] = n(c, m, b);
        }), l;
      }
      function tc(e) {
        var n = Ta(e);
        return n.length == 1 && n[0][2] ? Mc(n[0][0], n[0][1]) : function(s) {
          return s === e || ra(s, e, n);
        };
      }
      function nc(e, n) {
        return Ea(e) && zc(n) ? Mc(_n(e), n) : function(s) {
          var l = xa(s, e);
          return l === r && l === n ? za(s, e) : vr(n, l, j | G);
        };
      }
      function Cs(e, n, s, l, c) {
        e !== n && ea(n, function(m, b) {
          if (c || (c = new Zt()), Le(m)) Th(e, n, b, s, Cs, l, c);
          else {
            var v = l ? l(Ca(e, b), m, b + "", e, n, c) : r;
            v === r && (v = m), Xo(e, b, v);
          }
        }, It);
      }
      function Th(e, n, s, l, c, m, b) {
        var v = Ca(e, s), E = Ca(n, s), R = b.get(E);
        if (R) {
          Xo(e, s, R);
          return;
        }
        var N = m ? m(v, E, s + "", e, n, b) : r, L = N === r;
        if (L) {
          var k = oe(E), J = !k && ai(E), X = !k && !J && Ki(E);
          N = E, k || J || X ? oe(v) ? N = v : Ve(v) ? N = bt(v) : J ? (L = !1, N = mc(E, !0)) : X ? (L = !1, N = gc(E, !0)) : N = [] : Er(E) || Ti(E) ? (N = v, Ti(v) ? N = dd(v) : (!Le(v) || Fn(v)) && (N = xc(E))) : L = !1;
        }
        L && (b.set(E, N), c(N, E, l, m, b), b.delete(E)), Xo(e, s, N);
      }
      function ic(e, n) {
        var s = e.length;
        if (s)
          return n += n < 0 ? s : 0, qn(n, s) ? e[n] : r;
      }
      function rc(e, n, s) {
        n.length ? n = ze(n, function(c) {
          return oe(c) ? function(m) {
            return vi(m, c.length === 1 ? c[0] : c);
          } : c;
        }) : n = [_t];
        var l = -1;
        return n = ze(n, yt(Q())), Km(ec(e, function(c, m, b) {
          return {
            criteria: ze(n, function(v) {
              return v(c);
            }),
            index: ++l,
            value: c
          };
        }), function(c, m) {
          return zh(c, m, s);
        });
      }
      function wh(e, n) {
        return sc(e, n, function(s, l) {
          return za(e, l);
        });
      }
      function sc(e, n, s) {
        for (var l = -1, c = n.length, m = {}; ++l < c; ) {
          var b = n[l], v = vi(e, b);
          s(v, b) && Ir(m, si(b, e), v);
        }
        return m;
      }
      function Eh(e) {
        return function(n) {
          return vi(n, e);
        };
      }
      function aa(e, n, s, l) {
        var c = l ? Wm : Fi, m = -1, b = n.length, v = e;
        for (e === n && (n = bt(n)), s && (v = ze(e, yt(s))); ++m < b; )
          for (var E = 0, R = n[m], N = s ? s(R) : R; (E = c(v, N, E, l)) > -1; )
            v !== e && gs.call(v, E, 1), gs.call(e, E, 1);
        return e;
      }
      function oc(e, n) {
        for (var s = e ? n.length : 0, l = s - 1; s--; ) {
          var c = n[s];
          if (s == l || c !== m) {
            var m = c;
            qn(c) ? gs.call(e, c, 1) : da(e, c);
          }
        }
        return e;
      }
      function la(e, n) {
        return e + vs(Bu() * (n - e + 1));
      }
      function yh(e, n, s, l) {
        for (var c = -1, m = We(bs((n - e) / (s || 1)), 0), b = C(m); m--; )
          b[l ? m : ++c] = e, e += s;
        return b;
      }
      function ua(e, n) {
        var s = "";
        if (!e || n < 1 || n > ne) return s;
        do
          n % 2 && (s += e), n = vs(n / 2), n && (e += e);
        while (n);
        return s;
      }
      function de(e, n) {
        return Aa(Lc(e, n, _t), e + "");
      }
      function Ch(e) {
        return ku(Yi(e));
      }
      function Ah(e, n) {
        var s = Yi(e);
        return Ms(s, bi(n, 0, s.length));
      }
      function Ir(e, n, s, l) {
        if (!Le(e)) return e;
        n = si(n, e);
        for (var c = -1, m = n.length, b = m - 1, v = e; v != null && ++c < m; ) {
          var E = _n(n[c]), R = s;
          if (E === "__proto__" || E === "constructor" || E === "prototype") return e;
          if (c != b) {
            var N = v[E];
            R = l ? l(N, E, v) : r, R === r && (R = Le(N) ? N : qn(n[c + 1]) ? [] : {});
          }
          gr(v, E, R), v = v[E];
        }
        return e;
      }
      var ac = Is ? function(e, n) {
        return Is.set(e, n), e;
      } : _t, Sh = hs ? function(e, n) {
        return hs(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: La(n),
          writable: !0
        });
      } : _t;
      function Nh(e) {
        return Ms(Yi(e));
      }
      function jt(e, n, s) {
        var l = -1, c = e.length;
        n < 0 && (n = -n > c ? 0 : c + n), s = s > c ? c : s, s < 0 && (s += c), c = n > s ? 0 : s - n >>> 0, n >>>= 0;
        for (var m = C(c); ++l < c; ) m[l] = e[l + n];
        return m;
      }
      function Uh(e, n) {
        var s;
        return ii(e, function(l, c, m) {
          return s = n(l, c, m), !s;
        }), !!s;
      }
      function As(e, n, s) {
        var l = 0, c = e == null ? l : e.length;
        if (typeof n == "number" && n === n && c <= hn) {
          for (; l < c; ) {
            var m = l + c >>> 1, b = e[m];
            b !== null && !At(b) && (s ? b <= n : b < n) ? l = m + 1 : c = m;
          }
          return c;
        }
        return ca(e, n, _t, s);
      }
      function ca(e, n, s, l) {
        var c = 0, m = e == null ? 0 : e.length;
        if (m === 0) return 0;
        n = s(n);
        for (var b = n !== n, v = n === null, E = At(n), R = n === r; c < m; ) {
          var N = vs((c + m) / 2), L = s(e[N]), k = L !== r, J = L === null, X = L === L, re = At(L);
          if (b) var ee = l || X;
          else R ? ee = X && (l || k) : v ? ee = X && k && (l || !J) : E ? ee = X && k && !J && (l || !re) : J || re ? ee = !1 : ee = l ? L <= n : L < n;
          ee ? c = N + 1 : m = N;
        }
        return ot(m, zi);
      }
      function lc(e, n) {
        for (var s = -1, l = e.length, c = 0, m = []; ++s < l; ) {
          var b = e[s], v = n ? n(b) : b;
          if (!s || !Xt(v, E)) {
            var E = v;
            m[c++] = b === 0 ? 0 : b;
          }
        }
        return m;
      }
      function uc(e) {
        return typeof e == "number" ? e : At(e) ? Rn : +e;
      }
      function Ct(e) {
        if (typeof e == "string") return e;
        if (oe(e)) return ze(e, Ct) + "";
        if (At(e)) return Vu ? Vu.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -ae ? "-0" : n;
      }
      function ri(e, n, s) {
        var l = -1, c = ss, m = e.length, b = !0, v = [], E = v;
        if (s)
          b = !1, c = Fo;
        else if (m >= a) {
          var R = n ? null : Bh(e);
          if (R) return as(R);
          b = !1, c = ur, E = new hi();
        } else E = n ? [] : v;
        e: for (; ++l < m; ) {
          var N = e[l], L = n ? n(N) : N;
          if (N = s || N !== 0 ? N : 0, b && L === L) {
            for (var k = E.length; k--; ) if (E[k] === L) continue e;
            n && E.push(L), v.push(N);
          } else c(E, L, s) || (E !== v && E.push(L), v.push(N));
        }
        return v;
      }
      function da(e, n) {
        return n = si(n, e), e = Dc(e, n), e == null || delete e[_n(kt(n))];
      }
      function cc(e, n, s, l) {
        return Ir(e, n, s(vi(e, n)), l);
      }
      function Ss(e, n, s, l) {
        for (var c = e.length, m = l ? c : -1; (l ? m-- : ++m < c) && n(e[m], m, e); ) ;
        return s ? jt(e, l ? 0 : m, l ? m + 1 : c) : jt(e, l ? m + 1 : 0, l ? c : m);
      }
      function dc(e, n) {
        var s = e;
        return s instanceof pe && (s = s.value()), Bo(n, function(l, c) {
          return c.func.apply(c.thisArg, Qn([l], c.args));
        }, s);
      }
      function pa(e, n, s) {
        var l = e.length;
        if (l < 2) return l ? ri(e[0]) : [];
        for (var c = -1, m = C(l); ++c < l; )
          for (var b = e[c], v = -1; ++v < l; ) v != c && (m[c] = hr(m[c] || b, e[v], n, s));
        return ri(nt(m, 1), n, s);
      }
      function pc(e, n, s) {
        for (var l = -1, c = e.length, m = n.length, b = {}; ++l < c; ) {
          var v = l < m ? n[l] : r;
          s(b, e[l], v);
        }
        return b;
      }
      function fa(e) {
        return Ve(e) ? e : [];
      }
      function ma(e) {
        return typeof e == "function" ? e : _t;
      }
      function si(e, n) {
        return oe(e) ? e : Ea(e, n) ? [e] : Vc(we(e));
      }
      var Rh = de;
      function oi(e, n, s) {
        var l = e.length;
        return s = s === r ? l : s, !n && s >= l ? e : jt(e, n, s);
      }
      var fc = bg || function(e) {
        return Qe.clearTimeout(e);
      };
      function mc(e, n) {
        if (n) return e.slice();
        var s = e.length, l = Mu ? Mu(s) : new e.constructor(s);
        return e.copy(l), l;
      }
      function ga(e) {
        var n = new e.constructor(e.byteLength);
        return new fs(n).set(new fs(e)), n;
      }
      function Oh(e, n) {
        var s = n ? ga(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.byteLength);
      }
      function Ph(e) {
        var n = new e.constructor(e.source, Zl.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function xh(e) {
        return mr ? Ae(mr.call(e)) : {};
      }
      function gc(e, n) {
        var s = n ? ga(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.length);
      }
      function hc(e, n) {
        if (e !== n) {
          var s = e !== r, l = e === null, c = e === e, m = At(e), b = n !== r, v = n === null, E = n === n, R = At(n);
          if (!v && !R && !m && e > n || m && b && E && !v && !R || l && b && E || !s && E || !c) return 1;
          if (!l && !m && !R && e < n || R && s && c && !l && !m || v && s && c || !b && c || !E) return -1;
        }
        return 0;
      }
      function zh(e, n, s) {
        for (var l = -1, c = e.criteria, m = n.criteria, b = c.length, v = s.length; ++l < b; ) {
          var E = hc(c[l], m[l]);
          if (E)
            return l >= v ? E : E * (s[l] == "desc" ? -1 : 1);
        }
        return e.index - n.index;
      }
      function bc(e, n, s, l) {
        for (var c = -1, m = e.length, b = s.length, v = -1, E = n.length, R = We(m - b, 0), N = C(E + R), L = !l; ++v < E; ) N[v] = n[v];
        for (; ++c < b; ) (L || c < m) && (N[s[c]] = e[c]);
        for (; R--; ) N[v++] = e[c++];
        return N;
      }
      function vc(e, n, s, l) {
        for (var c = -1, m = e.length, b = -1, v = s.length, E = -1, R = n.length, N = We(m - v, 0), L = C(N + R), k = !l; ++c < N; ) L[c] = e[c];
        for (var J = c; ++E < R; ) L[J + E] = n[E];
        for (; ++b < v; ) (k || c < m) && (L[J + s[b]] = e[c++]);
        return L;
      }
      function bt(e, n) {
        var s = -1, l = e.length;
        for (n || (n = C(l)); ++s < l; ) n[s] = e[s];
        return n;
      }
      function In(e, n, s, l) {
        var c = !s;
        s || (s = {});
        for (var m = -1, b = n.length; ++m < b; ) {
          var v = n[m], E = l ? l(s[v], e[v], v, s, e) : r;
          E === r && (E = e[v]), c ? Mn(s, v, E) : gr(s, v, E);
        }
        return s;
      }
      function Mh(e, n) {
        return In(e, wa(e), n);
      }
      function Lh(e, n) {
        return In(e, Oc(e), n);
      }
      function Ns(e, n) {
        return function(s, l) {
          var c = oe(s) ? jm : rh, m = n ? n() : {};
          return c(s, e, Q(l, 2), m);
        };
      }
      function Ji(e) {
        return de(function(n, s) {
          var l = -1, c = s.length, m = c > 1 ? s[c - 1] : r, b = c > 2 ? s[2] : r;
          for (m = e.length > 3 && typeof m == "function" ? (c--, m) : r, b && pt(s[0], s[1], b) && (m = c < 3 ? r : m, c = 1), n = Ae(n); ++l < c; ) {
            var v = s[l];
            v && e(n, v, l, m);
          }
          return n;
        });
      }
      function Ic(e, n) {
        return function(s, l) {
          if (s == null) return s;
          if (!vt(s)) return e(s, l);
          for (var c = s.length, m = n ? c : -1, b = Ae(s); (n ? m-- : ++m < c) && l(b[m], m, b) !== !1; ) ;
          return s;
        };
      }
      function _c(e) {
        return function(n, s, l) {
          for (var c = -1, m = Ae(n), b = l(n), v = b.length; v--; ) {
            var E = b[e ? v : ++c];
            if (s(m[E], E, m) === !1) break;
          }
          return n;
        };
      }
      function Dh(e, n, s) {
        var l = n & ge, c = _r(e);
        function m() {
          return (this && this !== Qe && this instanceof m ? c : e).apply(l ? s : this, arguments);
        }
        return m;
      }
      function Tc(e) {
        return function(n) {
          n = we(n);
          var s = Bi(n) ? Yt(n) : r, l = s ? s[0] : n.charAt(0), c = s ? oi(s, 1).join("") : n.slice(1);
          return l[e]() + c;
        };
      }
      function Gi(e) {
        return function(n) {
          return Bo(Id(vd(n).replace(Nm, "")), e, "");
        };
      }
      function _r(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var s = Hi(e.prototype), l = e.apply(s, n);
          return Le(l) ? l : s;
        };
      }
      function qh(e, n, s) {
        var l = _r(e);
        function c() {
          for (var m = arguments.length, b = C(m), v = m, E = Wi(c); v--; ) b[v] = arguments[v];
          var R = m < 3 && b[0] !== E && b[m - 1] !== E ? [] : ei(b, E);
          return m -= R.length, m < s ? Ac(e, n, Us, c.placeholder, r, b, R, r, r, s - m) : Et(this && this !== Qe && this instanceof c ? l : e, this, b);
        }
        return c;
      }
      function wc(e) {
        return function(n, s, l) {
          var c = Ae(n);
          if (!vt(n)) {
            var m = Q(s, 3);
            n = et(n), s = function(v) {
              return m(c[v], v, c);
            };
          }
          var b = e(n, s, l);
          return b > -1 ? c[m ? n[b] : b] : r;
        };
      }
      function Ec(e) {
        return Dn(function(n) {
          var s = n.length, l = s, c = Bt.prototype.thru;
          for (e && n.reverse(); l--; ) {
            var m = n[l];
            if (typeof m != "function") throw new Ft(d);
            if (c && !b && xs(m) == "wrapper") var b = new Bt([], !0);
          }
          for (l = b ? l : s; ++l < s; ) {
            m = n[l];
            var v = xs(m), E = v == "wrapper" ? _a(m) : r;
            E && ya(E[0]) && E[1] == (De | se | H | qe) && !E[4].length && E[9] == 1 ? b = b[xs(E[0])].apply(b, E[3]) : b = m.length == 1 && ya(m) ? b[v]() : b.thru(m);
          }
          return function() {
            var R = arguments, N = R[0];
            if (b && R.length == 1 && oe(N)) return b.plant(N).value();
            for (var L = 0, k = s ? n[L].apply(this, R) : N; ++L < s; ) k = n[L].call(this, k);
            return k;
          };
        });
      }
      function Us(e, n, s, l, c, m, b, v, E, R) {
        var N = n & De, L = n & ge, k = n & _e, J = n & (se | ke), X = n & Xe, re = k ? r : _r(e);
        function ee() {
          for (var Se = arguments.length, fe = C(Se), ft = Se; ft--; ) fe[ft] = arguments[ft];
          if (J) var Tn = Wi(ee), li = Zm(fe, Tn);
          if (l && (fe = bc(fe, l, c, J)), m && (fe = vc(fe, m, b, J)), Se -= li, J && Se < R) {
            var je = ei(fe, Tn);
            return Ac(e, n, Us, ee.placeholder, s, fe, je, v, E, R - Se);
          }
          var Qt = L ? s : this, Vn = k ? Qt[e] : e;
          return Se = fe.length, v ? fe = r0(fe, v) : X && Se > 1 && fe.reverse(), N && E < Se && (fe.length = E), this && this !== Qe && this instanceof ee && (Vn = re || _r(Vn)), Vn.apply(Qt, fe);
        }
        return ee;
      }
      function yc(e, n) {
        return function(s, l) {
          return ph(s, e, n(l), {});
        };
      }
      function Rs(e, n) {
        return function(s, l) {
          var c;
          if (s === r && l === r) return n;
          if (s !== r && (c = s), l !== r) {
            if (c === r) return l;
            typeof s == "string" || typeof l == "string" ? (s = Ct(s), l = Ct(l)) : (s = uc(s), l = uc(l)), c = e(s, l);
          }
          return c;
        };
      }
      function ha(e) {
        return Dn(function(n) {
          return n = ze(n, yt(Q())), de(function(s) {
            var l = this;
            return e(n, function(c) {
              return Et(c, l, s);
            });
          });
        });
      }
      function Os(e, n) {
        n = n === r ? " " : Ct(n);
        var s = n.length;
        if (s < 2) return s ? ua(n, e) : n;
        var l = ua(n, bs(e / Vi(n)));
        return Bi(n) ? oi(Yt(l), 0, e).join("") : l.slice(0, e);
      }
      function Fh(e, n, s, l) {
        var c = n & ge, m = _r(e);
        function b() {
          for (var v = -1, E = arguments.length, R = -1, N = l.length, L = C(N + E), k = this && this !== Qe && this instanceof b ? m : e; ++R < N; ) L[R] = l[R];
          for (; E--; ) L[R++] = arguments[++v];
          return Et(k, c ? s : this, L);
        }
        return b;
      }
      function Cc(e) {
        return function(n, s, l) {
          return l && typeof l != "number" && pt(n, s, l) && (s = l = r), n = Bn(n), s === r ? (s = n, n = 0) : s = Bn(s), l = l === r ? n < s ? 1 : -1 : Bn(l), yh(n, s, l, e);
        };
      }
      function Ps(e) {
        return function(n, s) {
          return typeof n == "string" && typeof s == "string" || (n = $t(n), s = $t(s)), e(n, s);
        };
      }
      function Ac(e, n, s, l, c, m, b, v, E, R) {
        var N = n & se, L = N ? b : r, k = N ? r : b, J = N ? m : r, X = N ? r : m;
        n |= N ? H : Oe, n &= ~(N ? Oe : H), n & he || (n &= ~(ge | _e));
        var re = [
          e,
          n,
          c,
          J,
          L,
          X,
          k,
          v,
          E,
          R
        ], ee = s.apply(r, re);
        return ya(e) && qc(ee, re), ee.placeholder = l, Fc(ee, e, n);
      }
      function ba(e) {
        var n = Ge[e];
        return function(s, l) {
          if (s = $t(s), l = l == null ? 0 : ot(le(l), 292), l && Fu(s)) {
            var c = (we(s) + "e").split("e");
            return c = (we(n(c[0] + "e" + (+c[1] + l))) + "e").split("e"), +(c[0] + "e" + (+c[1] - l));
          }
          return n(s);
        };
      }
      var Bh = ki && 1 / as(new ki([, -0]))[1] == ae ? function(e) {
        return new ki(e);
      } : Fa;
      function Sc(e) {
        return function(n) {
          var s = at(n);
          return s == g ? Go(n) : s == D ? rg(n) : Ym(n, e(n));
        };
      }
      function Ln(e, n, s, l, c, m, b, v) {
        var E = n & _e;
        if (!E && typeof e != "function") throw new Ft(d);
        var R = l ? l.length : 0;
        if (R || (n &= ~(H | Oe), l = c = r), b = b === r ? b : We(le(b), 0), v = v === r ? v : le(v), R -= c ? c.length : 0, n & Oe) {
          var N = l, L = c;
          l = c = r;
        }
        var k = E ? r : _a(e), J = [
          e,
          n,
          s,
          l,
          c,
          N,
          L,
          m,
          b,
          v
        ];
        if (k && t0(J, k), e = J[0], n = J[1], s = J[2], l = J[3], c = J[4], v = J[9] = J[9] === r ? E ? 0 : e.length : We(J[9] - R, 0), !v && n & (se | ke) && (n &= ~(se | ke)), !n || n == ge) var X = Dh(e, n, s);
        else n == se || n == ke ? X = qh(e, n, v) : (n == H || n == (ge | H)) && !c.length ? X = Fh(e, n, s, l) : X = Us.apply(r, J);
        return Fc((k ? ac : qc)(X, J), e, n);
      }
      function Nc(e, n, s, l) {
        return e === r || Xt(e, ji[s]) && !Ce.call(l, s) ? n : e;
      }
      function Uc(e, n, s, l, c, m) {
        return Le(e) && Le(n) && (m.set(n, e), Cs(e, n, r, Uc, m), m.delete(n)), e;
      }
      function Vh(e) {
        return Er(e) ? r : e;
      }
      function Rc(e, n, s, l, c, m) {
        var b = s & j, v = e.length, E = n.length;
        if (v != E && !(b && E > v)) return !1;
        var R = m.get(e), N = m.get(n);
        if (R && N) return R == n && N == e;
        var L = -1, k = !0, J = s & G ? new hi() : r;
        for (m.set(e, n), m.set(n, e); ++L < v; ) {
          var X = e[L], re = n[L];
          if (l) var ee = b ? l(re, X, L, n, e, m) : l(X, re, L, e, n, m);
          if (ee !== r) {
            if (ee) continue;
            k = !1;
            break;
          }
          if (J) {
            if (!Vo(n, function(Se, fe) {
              if (!ur(J, fe) && (X === Se || c(X, Se, s, l, m))) return J.push(fe);
            })) {
              k = !1;
              break;
            }
          } else if (!(X === re || c(X, re, s, l, m))) {
            k = !1;
            break;
          }
        }
        return m.delete(e), m.delete(n), k;
      }
      function jh(e, n, s, l, c, m, b) {
        switch (s) {
          case ce:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) return !1;
            e = e.buffer, n = n.buffer;
          case Z:
            return !(e.byteLength != n.byteLength || !m(new fs(e), new fs(n)));
          case bn:
          case On:
          case I:
            return Xt(+e, +n);
          case Kt:
            return e.name == n.name && e.message == n.message;
          case F:
          case q:
            return e == n + "";
          case g:
            var v = Go;
          case D:
            var E = l & j;
            if (v || (v = as), e.size != n.size && !E) return !1;
            var R = b.get(e);
            if (R) return R == n;
            l |= G, b.set(e, n);
            var N = Rc(v(e), v(n), l, c, m, b);
            return b.delete(e), N;
          case z:
            if (mr) return mr.call(e) == mr.call(n);
        }
        return !1;
      }
      function kh(e, n, s, l, c, m) {
        var b = s & j, v = va(e), E = v.length;
        if (E != va(n).length && !b) return !1;
        for (var R = E; R--; ) {
          var N = v[R];
          if (!(b ? N in n : Ce.call(n, N))) return !1;
        }
        var L = m.get(e), k = m.get(n);
        if (L && k) return L == n && k == e;
        var J = !0;
        m.set(e, n), m.set(n, e);
        for (var X = b; ++R < E; ) {
          N = v[R];
          var re = e[N], ee = n[N];
          if (l) var Se = b ? l(ee, re, N, n, e, m) : l(re, ee, N, e, n, m);
          if (!(Se === r ? re === ee || c(re, ee, s, l, m) : Se)) {
            J = !1;
            break;
          }
          X || (X = N == "constructor");
        }
        if (J && !X) {
          var fe = e.constructor, ft = n.constructor;
          fe != ft && "constructor" in e && "constructor" in n && !(typeof fe == "function" && fe instanceof fe && typeof ft == "function" && ft instanceof ft) && (J = !1);
        }
        return m.delete(e), m.delete(n), J;
      }
      function Dn(e) {
        return Aa(Lc(e, r, Hc), e + "");
      }
      function va(e) {
        return Yu(e, et, wa);
      }
      function Ia(e) {
        return Yu(e, It, Oc);
      }
      var _a = Is ? function(e) {
        return Is.get(e);
      } : Fa;
      function xs(e) {
        for (var n = e.name + "", s = $i[n], l = Ce.call($i, n) ? s.length : 0; l--; ) {
          var c = s[l], m = c.func;
          if (m == null || m == e) return c.name;
        }
        return n;
      }
      function Wi(e) {
        return (Ce.call(p, "placeholder") ? p : e).placeholder;
      }
      function Q() {
        var e = p.iteratee || Da;
        return e = e === Da ? Qu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function zs(e, n) {
        var s = e.__data__;
        return Zh(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
      }
      function Ta(e) {
        for (var n = et(e), s = n.length; s--; ) {
          var l = n[s], c = e[l];
          n[s] = [
            l,
            c,
            zc(c)
          ];
        }
        return n;
      }
      function Ii(e, n) {
        var s = tg(e, n);
        return Xu(s) ? s : r;
      }
      function $h(e) {
        var n = Ce.call(e, mi), s = e[mi];
        try {
          e[mi] = r;
          var l = !0;
        } catch {
        }
        var c = ds.call(e);
        return l && (n ? e[mi] = s : delete e[mi]), c;
      }
      var wa = Ko ? function(e) {
        return e == null ? [] : (e = Ae(e), Xn(Ko(e), function(n) {
          return Du.call(e, n);
        }));
      } : Ba, Oc = Ko ? function(e) {
        for (var n = []; e; )
          Qn(n, wa(e)), e = ms(e);
        return n;
      } : Ba, at = dt;
      (Yo && at(new Yo(/* @__PURE__ */ new ArrayBuffer(1))) != ce || dr && at(new dr()) != g || Zo && at(Zo.resolve()) != x || ki && at(new ki()) != D || pr && at(new pr()) != V) && (at = function(e) {
        var n = dt(e), s = n == P ? e.constructor : r, l = s ? _i(s) : "";
        if (l) switch (l) {
          case Ag:
            return ce;
          case Sg:
            return g;
          case Ng:
            return x;
          case Ug:
            return D;
          case Rg:
            return V;
        }
        return n;
      });
      function Hh(e, n, s) {
        for (var l = -1, c = s.length; ++l < c; ) {
          var m = s[l], b = m.size;
          switch (m.type) {
            case "drop":
              e += b;
              break;
            case "dropRight":
              n -= b;
              break;
            case "take":
              n = ot(n, e + b);
              break;
            case "takeRight":
              e = We(e, n - b);
              break;
          }
        }
        return {
          start: e,
          end: n
        };
      }
      function Jh(e) {
        var n = e.match(nm);
        return n ? n[1].split(im) : [];
      }
      function Pc(e, n, s) {
        n = si(n, e);
        for (var l = -1, c = n.length, m = !1; ++l < c; ) {
          var b = _n(n[l]);
          if (!(m = e != null && s(e, b))) break;
          e = e[b];
        }
        return m || ++l != c ? m : (c = e == null ? 0 : e.length, !!c && Vs(c) && qn(b, c) && (oe(e) || Ti(e)));
      }
      function Gh(e) {
        var n = e.length, s = new e.constructor(n);
        return n && typeof e[0] == "string" && Ce.call(e, "index") && (s.index = e.index, s.input = e.input), s;
      }
      function xc(e) {
        return typeof e.constructor == "function" && !Tr(e) ? Hi(ms(e)) : {};
      }
      function Wh(e, n, s) {
        var l = e.constructor;
        switch (n) {
          case Z:
            return ga(e);
          case bn:
          case On:
            return new l(+e);
          case ce:
            return Oh(e, s);
          case be:
          case ve:
          case xe:
          case Me:
          case ct:
          case tt:
          case Pn:
          case Di:
          case Je:
            return gc(e, s);
          case g:
            return new l();
          case I:
          case q:
            return new l(e);
          case F:
            return Ph(e);
          case D:
            return new l();
          case z:
            return xh(e);
        }
      }
      function Kh(e, n) {
        var s = n.length;
        if (!s) return e;
        var l = s - 1;
        return n[l] = (s > 1 ? "& " : "") + n[l], n = n.join(s > 2 ? ", " : " "), e.replace(tm, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Yh(e) {
        return oe(e) || Ti(e) || !!(qu && e && e[qu]);
      }
      function qn(e, n) {
        var s = typeof e;
        return n = n ?? ne, !!n && (s == "number" || s != "symbol" && pm.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function pt(e, n, s) {
        if (!Le(s)) return !1;
        var l = typeof n;
        return (l == "number" ? vt(s) && qn(n, s.length) : l == "string" && n in s) ? Xt(s[n], e) : !1;
      }
      function Ea(e, n) {
        if (oe(e)) return !1;
        var s = typeof e;
        return s == "number" || s == "symbol" || s == "boolean" || e == null || At(e) ? !0 : Zf.test(e) || !Yf.test(e) || n != null && e in Ae(n);
      }
      function Zh(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function ya(e) {
        var n = xs(e), s = p[n];
        if (typeof s != "function" || !(n in pe.prototype)) return !1;
        if (e === s) return !0;
        var l = _a(s);
        return !!l && e === l[0];
      }
      function Xh(e) {
        return !!zu && zu in e;
      }
      var Qh = us ? Fn : Va;
      function Tr(e) {
        var n = e && e.constructor;
        return e === (typeof n == "function" && n.prototype || ji);
      }
      function zc(e) {
        return e === e && !Le(e);
      }
      function Mc(e, n) {
        return function(s) {
          return s == null ? !1 : s[e] === n && (n !== r || e in Ae(s));
        };
      }
      function e0(e) {
        var n = Fs(e, function(l) {
          return s.size === y && s.clear(), l;
        }), s = n.cache;
        return n;
      }
      function t0(e, n) {
        var s = e[1], l = n[1], c = s | l, m = c < (ge | _e | De), b = l == De && s == se || l == De && s == qe && e[7].length <= n[8] || l == (De | qe) && n[7].length <= n[8] && s == se;
        if (!(m || b)) return e;
        l & ge && (e[2] = n[2], c |= s & ge ? 0 : he);
        var v = n[3];
        if (v) {
          var E = e[3];
          e[3] = E ? bc(E, v, n[4]) : v, e[4] = E ? ei(e[3], T) : n[4];
        }
        return v = n[5], v && (E = e[5], e[5] = E ? vc(E, v, n[6]) : v, e[6] = E ? ei(e[5], T) : n[6]), v = n[7], v && (e[7] = v), l & De && (e[8] = e[8] == null ? n[8] : ot(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = c, e;
      }
      function n0(e) {
        var n = [];
        if (e != null) for (var s in Ae(e)) n.push(s);
        return n;
      }
      function i0(e) {
        return ds.call(e);
      }
      function Lc(e, n, s) {
        return n = We(n === r ? e.length - 1 : n, 0), function() {
          for (var l = arguments, c = -1, m = We(l.length - n, 0), b = C(m); ++c < m; ) b[c] = l[n + c];
          c = -1;
          for (var v = C(n + 1); ++c < n; ) v[c] = l[c];
          return v[n] = s(b), Et(e, this, v);
        };
      }
      function Dc(e, n) {
        return n.length < 2 ? e : vi(e, jt(n, 0, -1));
      }
      function r0(e, n) {
        for (var s = e.length, l = ot(n.length, s), c = bt(e); l--; ) {
          var m = n[l];
          e[l] = qn(m, s) ? c[m] : r;
        }
        return e;
      }
      function Ca(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var qc = Bc(ac), wr = Ig || function(e, n) {
        return Qe.setTimeout(e, n);
      }, Aa = Bc(Sh);
      function Fc(e, n, s) {
        var l = n + "";
        return Aa(e, Kh(l, s0(Jh(l), s)));
      }
      function Bc(e) {
        var n = 0, s = 0;
        return function() {
          var l = Eg(), c = xi - (l - s);
          if (s = l, c > 0) {
            if (++n >= wt) return arguments[0];
          } else n = 0;
          return e.apply(r, arguments);
        };
      }
      function Ms(e, n) {
        var s = -1, l = e.length, c = l - 1;
        for (n = n === r ? l : n; ++s < n; ) {
          var m = la(s, c), b = e[m];
          e[m] = e[s], e[s] = b;
        }
        return e.length = n, e;
      }
      var Vc = e0(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(Xf, function(s, l, c, m) {
          n.push(c ? m.replace(om, "$1") : l || s);
        }), n;
      });
      function _n(e) {
        if (typeof e == "string" || At(e)) return e;
        var n = e + "";
        return n == "0" && 1 / e == -ae ? "-0" : n;
      }
      function _i(e) {
        if (e != null) {
          try {
            return cs.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function s0(e, n) {
        return qt(lr, function(s) {
          var l = "_." + s[0];
          n & s[1] && !ss(e, l) && e.push(l);
        }), e.sort();
      }
      function jc(e) {
        if (e instanceof pe) return e.clone();
        var n = new Bt(e.__wrapped__, e.__chain__);
        return n.__actions__ = bt(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function o0(e, n, s) {
        (s ? pt(e, n, s) : n === r) ? n = 1 : n = We(le(n), 0);
        var l = e == null ? 0 : e.length;
        if (!l || n < 1) return [];
        for (var c = 0, m = 0, b = C(bs(l / n)); c < l; ) b[m++] = jt(e, c, c += n);
        return b;
      }
      function a0(e) {
        for (var n = -1, s = e == null ? 0 : e.length, l = 0, c = []; ++n < s; ) {
          var m = e[n];
          m && (c[l++] = m);
        }
        return c;
      }
      function l0() {
        var e = arguments.length;
        if (!e) return [];
        for (var n = C(e - 1), s = arguments[0], l = e; l--; ) n[l - 1] = arguments[l];
        return Qn(oe(s) ? bt(s) : [s], nt(n, 1));
      }
      var u0 = de(function(e, n) {
        return Ve(e) ? hr(e, nt(n, 1, Ve, !0)) : [];
      }), c0 = de(function(e, n) {
        var s = kt(n);
        return Ve(s) && (s = r), Ve(e) ? hr(e, nt(n, 1, Ve, !0), Q(s, 2)) : [];
      }), d0 = de(function(e, n) {
        var s = kt(n);
        return Ve(s) && (s = r), Ve(e) ? hr(e, nt(n, 1, Ve, !0), r, s) : [];
      });
      function p0(e, n, s) {
        var l = e == null ? 0 : e.length;
        return l ? (n = s || n === r ? 1 : le(n), jt(e, n < 0 ? 0 : n, l)) : [];
      }
      function f0(e, n, s) {
        var l = e == null ? 0 : e.length;
        return l ? (n = s || n === r ? 1 : le(n), n = l - n, jt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function m0(e, n) {
        return e && e.length ? Ss(e, Q(n, 3), !0, !0) : [];
      }
      function g0(e, n) {
        return e && e.length ? Ss(e, Q(n, 3), !0) : [];
      }
      function h0(e, n, s, l) {
        var c = e == null ? 0 : e.length;
        return c ? (s && typeof s != "number" && pt(e, n, s) && (s = 0, l = c), lh(e, n, s, l)) : [];
      }
      function kc(e, n, s) {
        var l = e == null ? 0 : e.length;
        if (!l) return -1;
        var c = s == null ? 0 : le(s);
        return c < 0 && (c = We(l + c, 0)), os(e, Q(n, 3), c);
      }
      function $c(e, n, s) {
        var l = e == null ? 0 : e.length;
        if (!l) return -1;
        var c = l - 1;
        return s !== r && (c = le(s), c = s < 0 ? We(l + c, 0) : ot(c, l - 1)), os(e, Q(n, 3), c, !0);
      }
      function Hc(e) {
        return e != null && e.length ? nt(e, 1) : [];
      }
      function b0(e) {
        return e != null && e.length ? nt(e, ae) : [];
      }
      function v0(e, n) {
        return e != null && e.length ? (n = n === r ? 1 : le(n), nt(e, n)) : [];
      }
      function I0(e) {
        for (var n = -1, s = e == null ? 0 : e.length, l = {}; ++n < s; ) {
          var c = e[n];
          l[c[0]] = c[1];
        }
        return l;
      }
      function Jc(e) {
        return e && e.length ? e[0] : r;
      }
      function _0(e, n, s) {
        var l = e == null ? 0 : e.length;
        if (!l) return -1;
        var c = s == null ? 0 : le(s);
        return c < 0 && (c = We(l + c, 0)), Fi(e, n, c);
      }
      function T0(e) {
        return e != null && e.length ? jt(e, 0, -1) : [];
      }
      var w0 = de(function(e) {
        var n = ze(e, fa);
        return n.length && n[0] === e[0] ? ia(n) : [];
      }), E0 = de(function(e) {
        var n = kt(e), s = ze(e, fa);
        return n === kt(s) ? n = r : s.pop(), s.length && s[0] === e[0] ? ia(s, Q(n, 2)) : [];
      }), y0 = de(function(e) {
        var n = kt(e), s = ze(e, fa);
        return n = typeof n == "function" ? n : r, n && s.pop(), s.length && s[0] === e[0] ? ia(s, r, n) : [];
      });
      function C0(e, n) {
        return e == null ? "" : Tg.call(e, n);
      }
      function kt(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function A0(e, n, s) {
        var l = e == null ? 0 : e.length;
        if (!l) return -1;
        var c = l;
        return s !== r && (c = le(s), c = c < 0 ? We(l + c, 0) : ot(c, l - 1)), n === n ? og(e, n, c) : os(e, Au, c, !0);
      }
      function S0(e, n) {
        return e && e.length ? ic(e, le(n)) : r;
      }
      var N0 = de(Gc);
      function Gc(e, n) {
        return e && e.length && n && n.length ? aa(e, n) : e;
      }
      function U0(e, n, s) {
        return e && e.length && n && n.length ? aa(e, n, Q(s, 2)) : e;
      }
      function R0(e, n, s) {
        return e && e.length && n && n.length ? aa(e, n, r, s) : e;
      }
      var O0 = Dn(function(e, n) {
        var s = e == null ? 0 : e.length, l = Qo(e, n);
        return oc(e, ze(n, function(c) {
          return qn(c, s) ? +c : c;
        }).sort(hc)), l;
      });
      function P0(e, n) {
        var s = [];
        if (!(e && e.length)) return s;
        var l = -1, c = [], m = e.length;
        for (n = Q(n, 3); ++l < m; ) {
          var b = e[l];
          n(b, l, e) && (s.push(b), c.push(l));
        }
        return oc(e, c), s;
      }
      function Sa(e) {
        return e == null ? e : Cg.call(e);
      }
      function x0(e, n, s) {
        var l = e == null ? 0 : e.length;
        return l ? (s && typeof s != "number" && pt(e, n, s) ? (n = 0, s = l) : (n = n == null ? 0 : le(n), s = s === r ? l : le(s)), jt(e, n, s)) : [];
      }
      function z0(e, n) {
        return As(e, n);
      }
      function M0(e, n, s) {
        return ca(e, n, Q(s, 2));
      }
      function L0(e, n) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var l = As(e, n);
          if (l < s && Xt(e[l], n)) return l;
        }
        return -1;
      }
      function D0(e, n) {
        return As(e, n, !0);
      }
      function q0(e, n, s) {
        return ca(e, n, Q(s, 2), !0);
      }
      function F0(e, n) {
        if (e != null && e.length) {
          var s = As(e, n, !0) - 1;
          if (Xt(e[s], n)) return s;
        }
        return -1;
      }
      function B0(e) {
        return e && e.length ? lc(e) : [];
      }
      function V0(e, n) {
        return e && e.length ? lc(e, Q(n, 2)) : [];
      }
      function j0(e) {
        var n = e == null ? 0 : e.length;
        return n ? jt(e, 1, n) : [];
      }
      function k0(e, n, s) {
        return e && e.length ? (n = s || n === r ? 1 : le(n), jt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function $0(e, n, s) {
        var l = e == null ? 0 : e.length;
        return l ? (n = s || n === r ? 1 : le(n), n = l - n, jt(e, n < 0 ? 0 : n, l)) : [];
      }
      function H0(e, n) {
        return e && e.length ? Ss(e, Q(n, 3), !1, !0) : [];
      }
      function J0(e, n) {
        return e && e.length ? Ss(e, Q(n, 3)) : [];
      }
      var G0 = de(function(e) {
        return ri(nt(e, 1, Ve, !0));
      }), W0 = de(function(e) {
        var n = kt(e);
        return Ve(n) && (n = r), ri(nt(e, 1, Ve, !0), Q(n, 2));
      }), K0 = de(function(e) {
        var n = kt(e);
        return n = typeof n == "function" ? n : r, ri(nt(e, 1, Ve, !0), r, n);
      });
      function Y0(e) {
        return e && e.length ? ri(e) : [];
      }
      function Z0(e, n) {
        return e && e.length ? ri(e, Q(n, 2)) : [];
      }
      function X0(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? ri(e, r, n) : [];
      }
      function Na(e) {
        if (!(e && e.length)) return [];
        var n = 0;
        return e = Xn(e, function(s) {
          if (Ve(s))
            return n = We(s.length, n), !0;
        }), Ho(n, function(s) {
          return ze(e, jo(s));
        });
      }
      function Wc(e, n) {
        if (!(e && e.length)) return [];
        var s = Na(e);
        return n == null ? s : ze(s, function(l) {
          return Et(n, r, l);
        });
      }
      var Q0 = de(function(e, n) {
        return Ve(e) ? hr(e, n) : [];
      }), e1 = de(function(e) {
        return pa(Xn(e, Ve));
      }), t1 = de(function(e) {
        var n = kt(e);
        return Ve(n) && (n = r), pa(Xn(e, Ve), Q(n, 2));
      }), n1 = de(function(e) {
        var n = kt(e);
        return n = typeof n == "function" ? n : r, pa(Xn(e, Ve), r, n);
      }), i1 = de(Na);
      function r1(e, n) {
        return pc(e || [], n || [], gr);
      }
      function s1(e, n) {
        return pc(e || [], n || [], Ir);
      }
      var o1 = de(function(e) {
        var n = e.length, s = n > 1 ? e[n - 1] : r;
        return s = typeof s == "function" ? (e.pop(), s) : r, Wc(e, s);
      });
      function Kc(e) {
        var n = p(e);
        return n.__chain__ = !0, n;
      }
      function a1(e, n) {
        return n(e), e;
      }
      function Ls(e, n) {
        return n(e);
      }
      var l1 = Dn(function(e) {
        var n = e.length, s = n ? e[0] : 0, l = this.__wrapped__, c = function(m) {
          return Qo(m, e);
        };
        return n > 1 || this.__actions__.length || !(l instanceof pe) || !qn(s) ? this.thru(c) : (l = l.slice(s, +s + (n ? 1 : 0)), l.__actions__.push({
          func: Ls,
          args: [c],
          thisArg: r
        }), new Bt(l, this.__chain__).thru(function(m) {
          return n && !m.length && m.push(r), m;
        }));
      });
      function u1() {
        return Kc(this);
      }
      function c1() {
        return new Bt(this.value(), this.__chain__);
      }
      function d1() {
        this.__values__ === r && (this.__values__ = ud(this.value()));
        var e = this.__index__ >= this.__values__.length;
        return {
          done: e,
          value: e ? r : this.__values__[this.__index__++]
        };
      }
      function p1() {
        return this;
      }
      function f1(e) {
        for (var n, s = this; s instanceof Ts; ) {
          var l = jc(s);
          l.__index__ = 0, l.__values__ = r, n ? c.__wrapped__ = l : n = l;
          var c = l;
          s = s.__wrapped__;
        }
        return c.__wrapped__ = e, n;
      }
      function m1() {
        var e = this.__wrapped__;
        if (e instanceof pe) {
          var n = e;
          return this.__actions__.length && (n = new pe(this)), n = n.reverse(), n.__actions__.push({
            func: Ls,
            args: [Sa],
            thisArg: r
          }), new Bt(n, this.__chain__);
        }
        return this.thru(Sa);
      }
      function g1() {
        return dc(this.__wrapped__, this.__actions__);
      }
      var h1 = Ns(function(e, n, s) {
        Ce.call(e, s) ? ++e[s] : Mn(e, s, 1);
      });
      function b1(e, n, s) {
        var l = oe(e) ? yu : ah;
        return s && pt(e, n, s) && (n = r), l(e, Q(n, 3));
      }
      function v1(e, n) {
        return (oe(e) ? Xn : Wu)(e, Q(n, 3));
      }
      var I1 = wc(kc), _1 = wc($c);
      function T1(e, n) {
        return nt(Ds(e, n), 1);
      }
      function w1(e, n) {
        return nt(Ds(e, n), ae);
      }
      function E1(e, n, s) {
        return s = s === r ? 1 : le(s), nt(Ds(e, n), s);
      }
      function Yc(e, n) {
        return (oe(e) ? qt : ii)(e, Q(n, 3));
      }
      function Zc(e, n) {
        return (oe(e) ? km : Gu)(e, Q(n, 3));
      }
      var y1 = Ns(function(e, n, s) {
        Ce.call(e, s) ? e[s].push(n) : Mn(e, s, [n]);
      });
      function C1(e, n, s, l) {
        e = vt(e) ? e : Yi(e), s = s && !l ? le(s) : 0;
        var c = e.length;
        return s < 0 && (s = We(c + s, 0)), js(e) ? s <= c && e.indexOf(n, s) > -1 : !!c && Fi(e, n, s) > -1;
      }
      var A1 = de(function(e, n, s) {
        var l = -1, c = typeof n == "function", m = vt(e) ? C(e.length) : [];
        return ii(e, function(b) {
          m[++l] = c ? Et(n, b, s) : br(b, n, s);
        }), m;
      }), S1 = Ns(function(e, n, s) {
        Mn(e, s, n);
      });
      function Ds(e, n) {
        return (oe(e) ? ze : ec)(e, Q(n, 3));
      }
      function N1(e, n, s, l) {
        return e == null ? [] : (oe(n) || (n = n == null ? [] : [n]), s = l ? r : s, oe(s) || (s = s == null ? [] : [s]), rc(e, n, s));
      }
      var U1 = Ns(function(e, n, s) {
        e[s ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function R1(e, n, s) {
        var l = oe(e) ? Bo : Nu, c = arguments.length < 3;
        return l(e, Q(n, 4), s, c, ii);
      }
      function O1(e, n, s) {
        var l = oe(e) ? $m : Nu, c = arguments.length < 3;
        return l(e, Q(n, 4), s, c, Gu);
      }
      function P1(e, n) {
        return (oe(e) ? Xn : Wu)(e, Bs(Q(n, 3)));
      }
      function x1(e) {
        return (oe(e) ? ku : Ch)(e);
      }
      function z1(e, n, s) {
        return (s ? pt(e, n, s) : n === r) ? n = 1 : n = le(n), (oe(e) ? nh : Ah)(e, n);
      }
      function M1(e) {
        return (oe(e) ? ih : Nh)(e);
      }
      function L1(e) {
        if (e == null) return 0;
        if (vt(e)) return js(e) ? Vi(e) : e.length;
        var n = at(e);
        return n == g || n == D ? e.size : sa(e).length;
      }
      function D1(e, n, s) {
        var l = oe(e) ? Vo : Uh;
        return s && pt(e, n, s) && (n = r), l(e, Q(n, 3));
      }
      var q1 = de(function(e, n) {
        if (e == null) return [];
        var s = n.length;
        return s > 1 && pt(e, n[0], n[1]) ? n = [] : s > 2 && pt(n[0], n[1], n[2]) && (n = [n[0]]), rc(e, nt(n, 1), []);
      }), qs = vg || function() {
        return Qe.Date.now();
      };
      function F1(e, n) {
        if (typeof n != "function") throw new Ft(d);
        return e = le(e), function() {
          if (--e < 1) return n.apply(this, arguments);
        };
      }
      function Xc(e, n, s) {
        return n = s ? r : n, n = e && n == null ? e.length : n, Ln(e, De, r, r, r, r, n);
      }
      function Qc(e, n) {
        var s;
        if (typeof n != "function") throw new Ft(d);
        return e = le(e), function() {
          return --e > 0 && (s = n.apply(this, arguments)), e <= 1 && (n = r), s;
        };
      }
      var Ua = de(function(e, n, s) {
        var l = ge;
        if (s.length) {
          var c = ei(s, Wi(Ua));
          l |= H;
        }
        return Ln(e, l, n, s, c);
      }), ed = de(function(e, n, s) {
        var l = ge | _e;
        if (s.length) {
          var c = ei(s, Wi(ed));
          l |= H;
        }
        return Ln(n, l, e, s, c);
      });
      function td(e, n, s) {
        n = s ? r : n;
        var l = Ln(e, se, r, r, r, r, r, n);
        return l.placeholder = td.placeholder, l;
      }
      function nd(e, n, s) {
        n = s ? r : n;
        var l = Ln(e, ke, r, r, r, r, r, n);
        return l.placeholder = nd.placeholder, l;
      }
      function id(e, n, s) {
        var l, c, m, b, v, E, R = 0, N = !1, L = !1, k = !0;
        if (typeof e != "function") throw new Ft(d);
        n = $t(n) || 0, Le(s) && (N = !!s.leading, L = "maxWait" in s, m = L ? We($t(s.maxWait) || 0, n) : m, k = "trailing" in s ? !!s.trailing : k);
        function J(je) {
          var Qt = l, Vn = c;
          return l = c = r, R = je, b = e.apply(Vn, Qt), b;
        }
        function X(je) {
          return R = je, v = wr(Se, n), N ? J(je) : b;
        }
        function re(je) {
          var Qt = je - E, Vn = je - R, wd = n - Qt;
          return L ? ot(wd, m - Vn) : wd;
        }
        function ee(je) {
          var Qt = je - E, Vn = je - R;
          return E === r || Qt >= n || Qt < 0 || L && Vn >= m;
        }
        function Se() {
          var je = qs();
          if (ee(je)) return fe(je);
          v = wr(Se, re(je));
        }
        function fe(je) {
          return v = r, k && l ? J(je) : (l = c = r, b);
        }
        function ft() {
          v !== r && fc(v), R = 0, l = E = c = v = r;
        }
        function Tn() {
          return v === r ? b : fe(qs());
        }
        function li() {
          var je = qs(), Qt = ee(je);
          if (l = arguments, c = this, E = je, Qt) {
            if (v === r) return X(E);
            if (L)
              return fc(v), v = wr(Se, n), J(E);
          }
          return v === r && (v = wr(Se, n)), b;
        }
        return li.cancel = ft, li.flush = Tn, li;
      }
      var B1 = de(function(e, n) {
        return Ju(e, 1, n);
      }), V1 = de(function(e, n, s) {
        return Ju(e, $t(n) || 0, s);
      });
      function j1(e) {
        return Ln(e, Xe);
      }
      function Fs(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function") throw new Ft(d);
        var s = function() {
          var l = arguments, c = n ? n.apply(this, l) : l[0], m = s.cache;
          if (m.has(c)) return m.get(c);
          var b = e.apply(this, l);
          return s.cache = m.set(c, b) || m, b;
        };
        return s.cache = new (Fs.Cache || zn)(), s;
      }
      Fs.Cache = zn;
      function Bs(e) {
        if (typeof e != "function") throw new Ft(d);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function k1(e) {
        return Qc(2, e);
      }
      var $1 = Rh(function(e, n) {
        n = n.length == 1 && oe(n[0]) ? ze(n[0], yt(Q())) : ze(nt(n, 1), yt(Q()));
        var s = n.length;
        return de(function(l) {
          for (var c = -1, m = ot(l.length, s); ++c < m; ) l[c] = n[c].call(this, l[c]);
          return Et(e, this, l);
        });
      }), Ra = de(function(e, n) {
        return Ln(e, H, r, n, ei(n, Wi(Ra)));
      }), rd = de(function(e, n) {
        return Ln(e, Oe, r, n, ei(n, Wi(rd)));
      }), H1 = Dn(function(e, n) {
        return Ln(e, qe, r, r, r, n);
      });
      function J1(e, n) {
        if (typeof e != "function") throw new Ft(d);
        return n = n === r ? n : le(n), de(e, n);
      }
      function G1(e, n) {
        if (typeof e != "function") throw new Ft(d);
        return n = n == null ? 0 : We(le(n), 0), de(function(s) {
          var l = s[n], c = oi(s, 0, n);
          return l && Qn(c, l), Et(e, this, c);
        });
      }
      function W1(e, n, s) {
        var l = !0, c = !0;
        if (typeof e != "function") throw new Ft(d);
        return Le(s) && (l = "leading" in s ? !!s.leading : l, c = "trailing" in s ? !!s.trailing : c), id(e, n, {
          leading: l,
          maxWait: n,
          trailing: c
        });
      }
      function K1(e) {
        return Xc(e, 1);
      }
      function Y1(e, n) {
        return Ra(ma(n), e);
      }
      function Z1() {
        if (!arguments.length) return [];
        var e = arguments[0];
        return oe(e) ? e : [e];
      }
      function X1(e) {
        return Vt(e, M);
      }
      function Q1(e, n) {
        return n = typeof n == "function" ? n : r, Vt(e, M, n);
      }
      function eb(e) {
        return Vt(e, _ | M);
      }
      function tb(e, n) {
        return n = typeof n == "function" ? n : r, Vt(e, _ | M, n);
      }
      function nb(e, n) {
        return n == null || Hu(e, n, et(n));
      }
      function Xt(e, n) {
        return e === n || e !== e && n !== n;
      }
      var ib = Ps(na), rb = Ps(function(e, n) {
        return e >= n;
      }), Ti = Zu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Zu : function(e) {
        return Fe(e) && Ce.call(e, "callee") && !Du.call(e, "callee");
      }, oe = C.isArray, sb = vu ? yt(vu) : fh;
      function vt(e) {
        return e != null && Vs(e.length) && !Fn(e);
      }
      function Ve(e) {
        return Fe(e) && vt(e);
      }
      function ob(e) {
        return e === !0 || e === !1 || Fe(e) && dt(e) == bn;
      }
      var ai = _g || Va, ab = Iu ? yt(Iu) : mh;
      function lb(e) {
        return Fe(e) && e.nodeType === 1 && !Er(e);
      }
      function ub(e) {
        if (e == null) return !0;
        if (vt(e) && (oe(e) || typeof e == "string" || typeof e.splice == "function" || ai(e) || Ki(e) || Ti(e))) return !e.length;
        var n = at(e);
        if (n == g || n == D) return !e.size;
        if (Tr(e)) return !sa(e).length;
        for (var s in e) if (Ce.call(e, s)) return !1;
        return !0;
      }
      function cb(e, n) {
        return vr(e, n);
      }
      function db(e, n, s) {
        s = typeof s == "function" ? s : r;
        var l = s ? s(e, n) : r;
        return l === r ? vr(e, n, r, s) : !!l;
      }
      function Oa(e) {
        if (!Fe(e)) return !1;
        var n = dt(e);
        return n == Kt || n == Qr || typeof e.message == "string" && typeof e.name == "string" && !Er(e);
      }
      function pb(e) {
        return typeof e == "number" && Fu(e);
      }
      function Fn(e) {
        if (!Le(e)) return !1;
        var n = dt(e);
        return n == Zn || n == Li || n == pi || n == O;
      }
      function sd(e) {
        return typeof e == "number" && e == le(e);
      }
      function Vs(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ne;
      }
      function Le(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function Fe(e) {
        return e != null && typeof e == "object";
      }
      var od = _u ? yt(_u) : hh;
      function fb(e, n) {
        return e === n || ra(e, n, Ta(n));
      }
      function mb(e, n, s) {
        return s = typeof s == "function" ? s : r, ra(e, n, Ta(n), s);
      }
      function gb(e) {
        return ad(e) && e != +e;
      }
      function hb(e) {
        if (Qh(e)) throw new ie(u);
        return Xu(e);
      }
      function bb(e) {
        return e === null;
      }
      function vb(e) {
        return e == null;
      }
      function ad(e) {
        return typeof e == "number" || Fe(e) && dt(e) == I;
      }
      function Er(e) {
        if (!Fe(e) || dt(e) != P) return !1;
        var n = ms(e);
        if (n === null) return !0;
        var s = Ce.call(n, "constructor") && n.constructor;
        return typeof s == "function" && s instanceof s && cs.call(s) == mg;
      }
      var Pa = Tu ? yt(Tu) : bh;
      function Ib(e) {
        return sd(e) && e >= -ne && e <= ne;
      }
      var ld = wu ? yt(wu) : vh;
      function js(e) {
        return typeof e == "string" || !oe(e) && Fe(e) && dt(e) == q;
      }
      function At(e) {
        return typeof e == "symbol" || Fe(e) && dt(e) == z;
      }
      var Ki = Eu ? yt(Eu) : Ih;
      function _b(e) {
        return e === r;
      }
      function Tb(e) {
        return Fe(e) && at(e) == V;
      }
      function wb(e) {
        return Fe(e) && dt(e) == W;
      }
      var Eb = Ps(oa), yb = Ps(function(e, n) {
        return e <= n;
      });
      function ud(e) {
        if (!e) return [];
        if (vt(e)) return js(e) ? Yt(e) : bt(e);
        if (cr && e[cr]) return ig(e[cr]());
        var n = at(e);
        return (n == g ? Go : n == D ? as : Yi)(e);
      }
      function Bn(e) {
        return e ? (e = $t(e), e === ae || e === -ae ? (e < 0 ? -1 : 1) * Mt : e === e ? e : 0) : e === 0 ? e : 0;
      }
      function le(e) {
        var n = Bn(e), s = n % 1;
        return n === n ? s ? n - s : n : 0;
      }
      function cd(e) {
        return e ? bi(le(e), 0, ut) : 0;
      }
      function $t(e) {
        if (typeof e == "number") return e;
        if (At(e)) return Rn;
        if (Le(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Le(n) ? n + "" : n;
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = Uu(e);
        var s = um.test(e);
        return s || dm.test(e) ? Bm(e.slice(2), s ? 2 : 8) : lm.test(e) ? Rn : +e;
      }
      function dd(e) {
        return In(e, It(e));
      }
      function Cb(e) {
        return e ? bi(le(e), -ne, ne) : e === 0 ? e : 0;
      }
      function we(e) {
        return e == null ? "" : Ct(e);
      }
      var Ab = Ji(function(e, n) {
        if (Tr(n) || vt(n)) {
          In(n, et(n), e);
          return;
        }
        for (var s in n) Ce.call(n, s) && gr(e, s, n[s]);
      }), pd = Ji(function(e, n) {
        In(n, It(n), e);
      }), ks = Ji(function(e, n, s, l) {
        In(n, It(n), e, l);
      }), Sb = Ji(function(e, n, s, l) {
        In(n, et(n), e, l);
      }), Nb = Dn(Qo);
      function Ub(e, n) {
        var s = Hi(e);
        return n == null ? s : $u(s, n);
      }
      var Rb = de(function(e, n) {
        e = Ae(e);
        var s = -1, l = n.length, c = l > 2 ? n[2] : r;
        for (c && pt(n[0], n[1], c) && (l = 1); ++s < l; )
          for (var m = n[s], b = It(m), v = -1, E = b.length; ++v < E; ) {
            var R = b[v], N = e[R];
            (N === r || Xt(N, ji[R]) && !Ce.call(e, R)) && (e[R] = m[R]);
          }
        return e;
      }), Ob = de(function(e) {
        return e.push(r, Uc), Et(fd, r, e);
      });
      function Pb(e, n) {
        return Cu(e, Q(n, 3), vn);
      }
      function xb(e, n) {
        return Cu(e, Q(n, 3), ta);
      }
      function zb(e, n) {
        return e == null ? e : ea(e, Q(n, 3), It);
      }
      function Mb(e, n) {
        return e == null ? e : Ku(e, Q(n, 3), It);
      }
      function Lb(e, n) {
        return e && vn(e, Q(n, 3));
      }
      function Db(e, n) {
        return e && ta(e, Q(n, 3));
      }
      function qb(e) {
        return e == null ? [] : ys(e, et(e));
      }
      function Fb(e) {
        return e == null ? [] : ys(e, It(e));
      }
      function xa(e, n, s) {
        var l = e == null ? r : vi(e, n);
        return l === r ? s : l;
      }
      function Bb(e, n) {
        return e != null && Pc(e, n, uh);
      }
      function za(e, n) {
        return e != null && Pc(e, n, ch);
      }
      var Vb = yc(function(e, n, s) {
        n != null && typeof n.toString != "function" && (n = ds.call(n)), e[n] = s;
      }, La(_t)), jb = yc(function(e, n, s) {
        n != null && typeof n.toString != "function" && (n = ds.call(n)), Ce.call(e, n) ? e[n].push(s) : e[n] = [s];
      }, Q), kb = de(br);
      function et(e) {
        return vt(e) ? ju(e) : sa(e);
      }
      function It(e) {
        return vt(e) ? ju(e, !0) : _h(e);
      }
      function $b(e, n) {
        var s = {};
        return n = Q(n, 3), vn(e, function(l, c, m) {
          Mn(s, n(l, c, m), l);
        }), s;
      }
      function Hb(e, n) {
        var s = {};
        return n = Q(n, 3), vn(e, function(l, c, m) {
          Mn(s, c, n(l, c, m));
        }), s;
      }
      var Jb = Ji(function(e, n, s) {
        Cs(e, n, s);
      }), fd = Ji(function(e, n, s, l) {
        Cs(e, n, s, l);
      }), Gb = Dn(function(e, n) {
        var s = {};
        if (e == null) return s;
        var l = !1;
        n = ze(n, function(m) {
          return m = si(m, e), l || (l = m.length > 1), m;
        }), In(e, Ia(e), s), l && (s = Vt(s, _ | U | M, Vh));
        for (var c = n.length; c--; ) da(s, n[c]);
        return s;
      });
      function Wb(e, n) {
        return md(e, Bs(Q(n)));
      }
      var Kb = Dn(function(e, n) {
        return e == null ? {} : wh(e, n);
      });
      function md(e, n) {
        if (e == null) return {};
        var s = ze(Ia(e), function(l) {
          return [l];
        });
        return n = Q(n), sc(e, s, function(l, c) {
          return n(l, c[0]);
        });
      }
      function Yb(e, n, s) {
        n = si(n, e);
        var l = -1, c = n.length;
        for (c || (c = 1, e = r); ++l < c; ) {
          var m = e == null ? r : e[_n(n[l])];
          m === r && (l = c, m = s), e = Fn(m) ? m.call(e) : m;
        }
        return e;
      }
      function Zb(e, n, s) {
        return e == null ? e : Ir(e, n, s);
      }
      function Xb(e, n, s, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : Ir(e, n, s, l);
      }
      var gd = Sc(et), hd = Sc(It);
      function Qb(e, n, s) {
        var l = oe(e), c = l || ai(e) || Ki(e);
        if (n = Q(n, 4), s == null) {
          var m = e && e.constructor;
          c ? s = l ? new m() : [] : Le(e) ? s = Fn(m) ? Hi(ms(e)) : {} : s = {};
        }
        return (c ? qt : vn)(e, function(b, v, E) {
          return n(s, b, v, E);
        }), s;
      }
      function ev(e, n) {
        return e == null ? !0 : da(e, n);
      }
      function tv(e, n, s) {
        return e == null ? e : cc(e, n, ma(s));
      }
      function nv(e, n, s, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : cc(e, n, ma(s), l);
      }
      function Yi(e) {
        return e == null ? [] : Jo(e, et(e));
      }
      function iv(e) {
        return e == null ? [] : Jo(e, It(e));
      }
      function rv(e, n, s) {
        return s === r && (s = n, n = r), s !== r && (s = $t(s), s = s === s ? s : 0), n !== r && (n = $t(n), n = n === n ? n : 0), bi($t(e), n, s);
      }
      function sv(e, n, s) {
        return n = Bn(n), s === r ? (s = n, n = 0) : s = Bn(s), e = $t(e), dh(e, n, s);
      }
      function ov(e, n, s) {
        if (s && typeof s != "boolean" && pt(e, n, s) && (n = s = r), s === r && (typeof n == "boolean" ? (s = n, n = r) : typeof e == "boolean" && (s = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = Bn(e), n === r ? (n = e, e = 0) : n = Bn(n)), e > n) {
          var l = e;
          e = n, n = l;
        }
        if (s || e % 1 || n % 1) {
          var c = Bu();
          return ot(e + c * (n - e + Fm("1e-" + ((c + "").length - 1))), n);
        }
        return la(e, n);
      }
      var av = Gi(function(e, n, s) {
        return n = n.toLowerCase(), e + (s ? bd(n) : n);
      });
      function bd(e) {
        return Ma(we(e).toLowerCase());
      }
      function vd(e) {
        return e = we(e), e && e.replace(fm, Xm).replace(Um, "");
      }
      function lv(e, n, s) {
        e = we(e), n = Ct(n);
        var l = e.length;
        s = s === r ? l : bi(le(s), 0, l);
        var c = s;
        return s -= n.length, s >= 0 && e.slice(s, c) == n;
      }
      function uv(e) {
        return e = we(e), e && Gf.test(e) ? e.replace(Kl, Qm) : e;
      }
      function cv(e) {
        return e = we(e), e && Qf.test(e) ? e.replace(Ro, "\\$&") : e;
      }
      var dv = Gi(function(e, n, s) {
        return e + (s ? "-" : "") + n.toLowerCase();
      }), pv = Gi(function(e, n, s) {
        return e + (s ? " " : "") + n.toLowerCase();
      }), fv = Tc("toLowerCase");
      function mv(e, n, s) {
        e = we(e), n = le(n);
        var l = n ? Vi(e) : 0;
        if (!n || l >= n) return e;
        var c = (n - l) / 2;
        return Os(vs(c), s) + e + Os(bs(c), s);
      }
      function gv(e, n, s) {
        e = we(e), n = le(n);
        var l = n ? Vi(e) : 0;
        return n && l < n ? e + Os(n - l, s) : e;
      }
      function hv(e, n, s) {
        e = we(e), n = le(n);
        var l = n ? Vi(e) : 0;
        return n && l < n ? Os(n - l, s) + e : e;
      }
      function bv(e, n, s) {
        return s || n == null ? n = 0 : n && (n = +n), yg(we(e).replace(Oo, ""), n || 0);
      }
      function vv(e, n, s) {
        return (s ? pt(e, n, s) : n === r) ? n = 1 : n = le(n), ua(we(e), n);
      }
      function Iv() {
        var e = arguments, n = we(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var _v = Gi(function(e, n, s) {
        return e + (s ? "_" : "") + n.toLowerCase();
      });
      function Tv(e, n, s) {
        return s && typeof s != "number" && pt(e, n, s) && (n = s = r), s = s === r ? ut : s >>> 0, s ? (e = we(e), e && (typeof n == "string" || n != null && !Pa(n)) && (n = Ct(n), !n && Bi(e)) ? oi(Yt(e), 0, s) : e.split(n, s)) : [];
      }
      var wv = Gi(function(e, n, s) {
        return e + (s ? " " : "") + Ma(n);
      });
      function Ev(e, n, s) {
        return e = we(e), s = s == null ? 0 : bi(le(s), 0, e.length), n = Ct(n), e.slice(s, s + n.length) == n;
      }
      function yv(e, n, s) {
        var l = p.templateSettings;
        s && pt(e, n, s) && (n = r), e = we(e), n = ks({}, n, l, Nc);
        var c = ks({}, n.imports, l.imports, Nc), m = et(c), b = Jo(c, m), v, E, R = 0, N = n.interpolate || ns, L = "__p += '", k = Wo((n.escape || ns).source + "|" + N.source + "|" + (N === Yl ? am : ns).source + "|" + (n.evaluate || ns).source + "|$", "g"), J = "//# sourceURL=" + (Ce.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++zm + "]") + `
`;
        e.replace(k, function(ee, Se, fe, ft, Tn, li) {
          return fe || (fe = ft), L += e.slice(R, li).replace(mm, eg), Se && (v = !0, L += `' +
__e(` + Se + `) +
'`), Tn && (E = !0, L += `';
` + Tn + `;
__p += '`), fe && (L += `' +
((__t = (` + fe + `)) == null ? '' : __t) +
'`), R = li + ee.length, ee;
        }), L += `';
`;
        var X = Ce.call(n, "variable") && n.variable;
        if (!X) L = `with (obj) {
` + L + `
}
`;
        else if (sm.test(X)) throw new ie(f);
        L = (E ? L.replace(Lt, "") : L).replace(es, "$1").replace(ts, "$1;"), L = "function(" + (X || "obj") + `) {
` + (X ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (E ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + L + `return __p
}`;
        var re = _d(function() {
          return Te(m, J + "return " + L).apply(r, b);
        });
        if (re.source = L, Oa(re)) throw re;
        return re;
      }
      function Cv(e) {
        return we(e).toLowerCase();
      }
      function Av(e) {
        return we(e).toUpperCase();
      }
      function Sv(e, n, s) {
        if (e = we(e), e && (s || n === r)) return Uu(e);
        if (!e || !(n = Ct(n))) return e;
        var l = Yt(e), c = Yt(n);
        return oi(l, Ru(l, c), Ou(l, c) + 1).join("");
      }
      function Nv(e, n, s) {
        if (e = we(e), e && (s || n === r)) return e.slice(0, xu(e) + 1);
        if (!e || !(n = Ct(n))) return e;
        var l = Yt(e);
        return oi(l, 0, Ou(l, Yt(n)) + 1).join("");
      }
      function Uv(e, n, s) {
        if (e = we(e), e && (s || n === r)) return e.replace(Oo, "");
        if (!e || !(n = Ct(n))) return e;
        var l = Yt(e);
        return oi(l, Ru(l, Yt(n))).join("");
      }
      function Rv(e, n) {
        var s = Wt, l = mn;
        if (Le(n)) {
          var c = "separator" in n ? n.separator : c;
          s = "length" in n ? le(n.length) : s, l = "omission" in n ? Ct(n.omission) : l;
        }
        e = we(e);
        var m = e.length;
        if (Bi(e)) {
          var b = Yt(e);
          m = b.length;
        }
        if (s >= m) return e;
        var v = s - Vi(l);
        if (v < 1) return l;
        var E = b ? oi(b, 0, v).join("") : e.slice(0, v);
        if (c === r) return E + l;
        if (b && (v += E.length - v), Pa(c)) {
          if (e.slice(v).search(c)) {
            var R, N = E;
            for (c.global || (c = Wo(c.source, we(Zl.exec(c)) + "g")), c.lastIndex = 0; R = c.exec(N); ) var L = R.index;
            E = E.slice(0, L === r ? v : L);
          }
        } else if (e.indexOf(Ct(c), v) != v) {
          var k = E.lastIndexOf(c);
          k > -1 && (E = E.slice(0, k));
        }
        return E + l;
      }
      function Ov(e) {
        return e = we(e), e && Jf.test(e) ? e.replace(Wl, ag) : e;
      }
      var Pv = Gi(function(e, n, s) {
        return e + (s ? " " : "") + n.toUpperCase();
      }), Ma = Tc("toUpperCase");
      function Id(e, n, s) {
        return e = we(e), n = s ? r : n, n === r ? ng(e) ? cg(e) : Gm(e) : e.match(n) || [];
      }
      var _d = de(function(e, n) {
        try {
          return Et(e, r, n);
        } catch (s) {
          return Oa(s) ? s : new ie(s);
        }
      }), xv = Dn(function(e, n) {
        return qt(n, function(s) {
          s = _n(s), Mn(e, s, Ua(e[s], e));
        }), e;
      });
      function zv(e) {
        var n = e == null ? 0 : e.length, s = Q();
        return e = n ? ze(e, function(l) {
          if (typeof l[1] != "function") throw new Ft(d);
          return [s(l[0]), l[1]];
        }) : [], de(function(l) {
          for (var c = -1; ++c < n; ) {
            var m = e[c];
            if (Et(m[0], this, l)) return Et(m[1], this, l);
          }
        });
      }
      function Mv(e) {
        return oh(Vt(e, _));
      }
      function La(e) {
        return function() {
          return e;
        };
      }
      function Lv(e, n) {
        return e == null || e !== e ? n : e;
      }
      var Dv = Ec(), qv = Ec(!0);
      function _t(e) {
        return e;
      }
      function Da(e) {
        return Qu(typeof e == "function" ? e : Vt(e, _));
      }
      function Fv(e) {
        return tc(Vt(e, _));
      }
      function Bv(e, n) {
        return nc(e, Vt(n, _));
      }
      var Vv = de(function(e, n) {
        return function(s) {
          return br(s, e, n);
        };
      }), jv = de(function(e, n) {
        return function(s) {
          return br(e, s, n);
        };
      });
      function qa(e, n, s) {
        var l = et(n), c = ys(n, l);
        s == null && !(Le(n) && (c.length || !l.length)) && (s = n, n = e, e = this, c = ys(n, et(n)));
        var m = !(Le(s) && "chain" in s) || !!s.chain, b = Fn(e);
        return qt(c, function(v) {
          var E = n[v];
          e[v] = E, b && (e.prototype[v] = function() {
            var R = this.__chain__;
            if (m || R) {
              var N = e(this.__wrapped__);
              return (N.__actions__ = bt(this.__actions__)).push({
                func: E,
                args: arguments,
                thisArg: e
              }), N.__chain__ = R, N;
            }
            return E.apply(e, Qn([this.value()], arguments));
          });
        }), e;
      }
      function kv() {
        return Qe._ === this && (Qe._ = gg), this;
      }
      function Fa() {
      }
      function $v(e) {
        return e = le(e), de(function(n) {
          return ic(n, e);
        });
      }
      var Hv = ha(ze), Jv = ha(yu), Gv = ha(Vo);
      function Td(e) {
        return Ea(e) ? jo(_n(e)) : Eh(e);
      }
      function Wv(e) {
        return function(n) {
          return e == null ? r : vi(e, n);
        };
      }
      var Kv = Cc(), Yv = Cc(!0);
      function Ba() {
        return [];
      }
      function Va() {
        return !1;
      }
      function Zv() {
        return {};
      }
      function Xv() {
        return "";
      }
      function Qv() {
        return !0;
      }
      function eI(e, n) {
        if (e = le(e), e < 1 || e > ne) return [];
        var s = ut, l = ot(e, ut);
        n = Q(n), e -= ut;
        for (var c = Ho(l, n); ++s < e; ) n(s);
        return c;
      }
      function tI(e) {
        return oe(e) ? ze(e, _n) : At(e) ? [e] : bt(Vc(we(e)));
      }
      function nI(e) {
        var n = ++fg;
        return we(e) + n;
      }
      var iI = Rs(function(e, n) {
        return e + n;
      }, 0), rI = ba("ceil"), sI = Rs(function(e, n) {
        return e / n;
      }, 1), oI = ba("floor");
      function aI(e) {
        return e && e.length ? Es(e, _t, na) : r;
      }
      function lI(e, n) {
        return e && e.length ? Es(e, Q(n, 2), na) : r;
      }
      function uI(e) {
        return Su(e, _t);
      }
      function cI(e, n) {
        return Su(e, Q(n, 2));
      }
      function dI(e) {
        return e && e.length ? Es(e, _t, oa) : r;
      }
      function pI(e, n) {
        return e && e.length ? Es(e, Q(n, 2), oa) : r;
      }
      var fI = Rs(function(e, n) {
        return e * n;
      }, 1), mI = ba("round"), gI = Rs(function(e, n) {
        return e - n;
      }, 0);
      function hI(e) {
        return e && e.length ? $o(e, _t) : 0;
      }
      function bI(e, n) {
        return e && e.length ? $o(e, Q(n, 2)) : 0;
      }
      return p.after = F1, p.ary = Xc, p.assign = Ab, p.assignIn = pd, p.assignInWith = ks, p.assignWith = Sb, p.at = Nb, p.before = Qc, p.bind = Ua, p.bindAll = xv, p.bindKey = ed, p.castArray = Z1, p.chain = Kc, p.chunk = o0, p.compact = a0, p.concat = l0, p.cond = zv, p.conforms = Mv, p.constant = La, p.countBy = h1, p.create = Ub, p.curry = td, p.curryRight = nd, p.debounce = id, p.defaults = Rb, p.defaultsDeep = Ob, p.defer = B1, p.delay = V1, p.difference = u0, p.differenceBy = c0, p.differenceWith = d0, p.drop = p0, p.dropRight = f0, p.dropRightWhile = m0, p.dropWhile = g0, p.fill = h0, p.filter = v1, p.flatMap = T1, p.flatMapDeep = w1, p.flatMapDepth = E1, p.flatten = Hc, p.flattenDeep = b0, p.flattenDepth = v0, p.flip = j1, p.flow = Dv, p.flowRight = qv, p.fromPairs = I0, p.functions = qb, p.functionsIn = Fb, p.groupBy = y1, p.initial = T0, p.intersection = w0, p.intersectionBy = E0, p.intersectionWith = y0, p.invert = Vb, p.invertBy = jb, p.invokeMap = A1, p.iteratee = Da, p.keyBy = S1, p.keys = et, p.keysIn = It, p.map = Ds, p.mapKeys = $b, p.mapValues = Hb, p.matches = Fv, p.matchesProperty = Bv, p.memoize = Fs, p.merge = Jb, p.mergeWith = fd, p.method = Vv, p.methodOf = jv, p.mixin = qa, p.negate = Bs, p.nthArg = $v, p.omit = Gb, p.omitBy = Wb, p.once = k1, p.orderBy = N1, p.over = Hv, p.overArgs = $1, p.overEvery = Jv, p.overSome = Gv, p.partial = Ra, p.partialRight = rd, p.partition = U1, p.pick = Kb, p.pickBy = md, p.property = Td, p.propertyOf = Wv, p.pull = N0, p.pullAll = Gc, p.pullAllBy = U0, p.pullAllWith = R0, p.pullAt = O0, p.range = Kv, p.rangeRight = Yv, p.rearg = H1, p.reject = P1, p.remove = P0, p.rest = J1, p.reverse = Sa, p.sampleSize = z1, p.set = Zb, p.setWith = Xb, p.shuffle = M1, p.slice = x0, p.sortBy = q1, p.sortedUniq = B0, p.sortedUniqBy = V0, p.split = Tv, p.spread = G1, p.tail = j0, p.take = k0, p.takeRight = $0, p.takeRightWhile = H0, p.takeWhile = J0, p.tap = a1, p.throttle = W1, p.thru = Ls, p.toArray = ud, p.toPairs = gd, p.toPairsIn = hd, p.toPath = tI, p.toPlainObject = dd, p.transform = Qb, p.unary = K1, p.union = G0, p.unionBy = W0, p.unionWith = K0, p.uniq = Y0, p.uniqBy = Z0, p.uniqWith = X0, p.unset = ev, p.unzip = Na, p.unzipWith = Wc, p.update = tv, p.updateWith = nv, p.values = Yi, p.valuesIn = iv, p.without = Q0, p.words = Id, p.wrap = Y1, p.xor = e1, p.xorBy = t1, p.xorWith = n1, p.zip = i1, p.zipObject = r1, p.zipObjectDeep = s1, p.zipWith = o1, p.entries = gd, p.entriesIn = hd, p.extend = pd, p.extendWith = ks, qa(p, p), p.add = iI, p.attempt = _d, p.camelCase = av, p.capitalize = bd, p.ceil = rI, p.clamp = rv, p.clone = X1, p.cloneDeep = eb, p.cloneDeepWith = tb, p.cloneWith = Q1, p.conformsTo = nb, p.deburr = vd, p.defaultTo = Lv, p.divide = sI, p.endsWith = lv, p.eq = Xt, p.escape = uv, p.escapeRegExp = cv, p.every = b1, p.find = I1, p.findIndex = kc, p.findKey = Pb, p.findLast = _1, p.findLastIndex = $c, p.findLastKey = xb, p.floor = oI, p.forEach = Yc, p.forEachRight = Zc, p.forIn = zb, p.forInRight = Mb, p.forOwn = Lb, p.forOwnRight = Db, p.get = xa, p.gt = ib, p.gte = rb, p.has = Bb, p.hasIn = za, p.head = Jc, p.identity = _t, p.includes = C1, p.indexOf = _0, p.inRange = sv, p.invoke = kb, p.isArguments = Ti, p.isArray = oe, p.isArrayBuffer = sb, p.isArrayLike = vt, p.isArrayLikeObject = Ve, p.isBoolean = ob, p.isBuffer = ai, p.isDate = ab, p.isElement = lb, p.isEmpty = ub, p.isEqual = cb, p.isEqualWith = db, p.isError = Oa, p.isFinite = pb, p.isFunction = Fn, p.isInteger = sd, p.isLength = Vs, p.isMap = od, p.isMatch = fb, p.isMatchWith = mb, p.isNaN = gb, p.isNative = hb, p.isNil = vb, p.isNull = bb, p.isNumber = ad, p.isObject = Le, p.isObjectLike = Fe, p.isPlainObject = Er, p.isRegExp = Pa, p.isSafeInteger = Ib, p.isSet = ld, p.isString = js, p.isSymbol = At, p.isTypedArray = Ki, p.isUndefined = _b, p.isWeakMap = Tb, p.isWeakSet = wb, p.join = C0, p.kebabCase = dv, p.last = kt, p.lastIndexOf = A0, p.lowerCase = pv, p.lowerFirst = fv, p.lt = Eb, p.lte = yb, p.max = aI, p.maxBy = lI, p.mean = uI, p.meanBy = cI, p.min = dI, p.minBy = pI, p.stubArray = Ba, p.stubFalse = Va, p.stubObject = Zv, p.stubString = Xv, p.stubTrue = Qv, p.multiply = fI, p.nth = S0, p.noConflict = kv, p.noop = Fa, p.now = qs, p.pad = mv, p.padEnd = gv, p.padStart = hv, p.parseInt = bv, p.random = ov, p.reduce = R1, p.reduceRight = O1, p.repeat = vv, p.replace = Iv, p.result = Yb, p.round = mI, p.runInContext = w, p.sample = x1, p.size = L1, p.snakeCase = _v, p.some = D1, p.sortedIndex = z0, p.sortedIndexBy = M0, p.sortedIndexOf = L0, p.sortedLastIndex = D0, p.sortedLastIndexBy = q0, p.sortedLastIndexOf = F0, p.startCase = wv, p.startsWith = Ev, p.subtract = gI, p.sum = hI, p.sumBy = bI, p.template = yv, p.times = eI, p.toFinite = Bn, p.toInteger = le, p.toLength = cd, p.toLower = Cv, p.toNumber = $t, p.toSafeInteger = Cb, p.toString = we, p.toUpper = Av, p.trim = Sv, p.trimEnd = Nv, p.trimStart = Uv, p.truncate = Rv, p.unescape = Ov, p.uniqueId = nI, p.upperCase = Pv, p.upperFirst = Ma, p.each = Yc, p.eachRight = Zc, p.first = Jc, qa(p, function() {
        var e = {};
        return vn(p, function(n, s) {
          Ce.call(p.prototype, s) || (e[s] = n);
        }), e;
      }(), { chain: !1 }), p.VERSION = o, qt([
        "bind",
        "bindKey",
        "curry",
        "curryRight",
        "partial",
        "partialRight"
      ], function(e) {
        p[e].placeholder = p;
      }), qt(["drop", "take"], function(e, n) {
        pe.prototype[e] = function(s) {
          s = s === r ? 1 : We(le(s), 0);
          var l = this.__filtered__ && !n ? new pe(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = ot(s, l.__takeCount__) : l.__views__.push({
            size: ot(s, ut),
            type: e + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, pe.prototype[e + "Right"] = function(s) {
          return this.reverse()[e](s).reverse();
        };
      }), qt([
        "filter",
        "map",
        "takeWhile"
      ], function(e, n) {
        var s = n + 1, l = s == ar || s == st;
        pe.prototype[e] = function(c) {
          var m = this.clone();
          return m.__iteratees__.push({
            iteratee: Q(c, 3),
            type: s
          }), m.__filtered__ = m.__filtered__ || l, m;
        };
      }), qt(["head", "last"], function(e, n) {
        var s = "take" + (n ? "Right" : "");
        pe.prototype[e] = function() {
          return this[s](1).value()[0];
        };
      }), qt(["initial", "tail"], function(e, n) {
        var s = "drop" + (n ? "" : "Right");
        pe.prototype[e] = function() {
          return this.__filtered__ ? new pe(this) : this[s](1);
        };
      }), pe.prototype.compact = function() {
        return this.filter(_t);
      }, pe.prototype.find = function(e) {
        return this.filter(e).head();
      }, pe.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, pe.prototype.invokeMap = de(function(e, n) {
        return typeof e == "function" ? new pe(this) : this.map(function(s) {
          return br(s, e, n);
        });
      }), pe.prototype.reject = function(e) {
        return this.filter(Bs(Q(e)));
      }, pe.prototype.slice = function(e, n) {
        e = le(e);
        var s = this;
        return s.__filtered__ && (e > 0 || n < 0) ? new pe(s) : (e < 0 ? s = s.takeRight(-e) : e && (s = s.drop(e)), n !== r && (n = le(n), s = n < 0 ? s.dropRight(-n) : s.take(n - e)), s);
      }, pe.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, pe.prototype.toArray = function() {
        return this.take(ut);
      }, vn(pe.prototype, function(e, n) {
        var s = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), c = p[l ? "take" + (n == "last" ? "Right" : "") : n], m = l || /^find/.test(n);
        c && (p.prototype[n] = function() {
          var b = this.__wrapped__, v = l ? [1] : arguments, E = b instanceof pe, R = v[0], N = E || oe(b), L = function(Se) {
            var fe = c.apply(p, Qn([Se], v));
            return l && k ? fe[0] : fe;
          };
          N && s && typeof R == "function" && R.length != 1 && (E = N = !1);
          var k = this.__chain__, J = !!this.__actions__.length, X = m && !k, re = E && !J;
          if (!m && N) {
            b = re ? b : new pe(this);
            var ee = e.apply(b, v);
            return ee.__actions__.push({
              func: Ls,
              args: [L],
              thisArg: r
            }), new Bt(ee, k);
          }
          return X && re ? e.apply(this, v) : (ee = this.thru(L), X ? l ? ee.value()[0] : ee.value() : ee);
        });
      }), qt([
        "pop",
        "push",
        "shift",
        "sort",
        "splice",
        "unshift"
      ], function(e) {
        var n = ls[e], s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
        p.prototype[e] = function() {
          var c = arguments;
          if (l && !this.__chain__) {
            var m = this.value();
            return n.apply(oe(m) ? m : [], c);
          }
          return this[s](function(b) {
            return n.apply(oe(b) ? b : [], c);
          });
        };
      }), vn(pe.prototype, function(e, n) {
        var s = p[n];
        if (s) {
          var l = s.name + "";
          Ce.call($i, l) || ($i[l] = []), $i[l].push({
            name: n,
            func: s
          });
        }
      }), $i[Us(r, _e).name] = [{
        name: "wrapper",
        func: r
      }], pe.prototype.clone = Og, pe.prototype.reverse = Pg, pe.prototype.value = xg, p.prototype.at = l1, p.prototype.chain = u1, p.prototype.commit = c1, p.prototype.next = d1, p.prototype.plant = f1, p.prototype.reverse = m1, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = g1, p.prototype.first = p.prototype.head, cr && (p.prototype[cr] = p1), p;
    }();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (Qe._ = ti, define(function() {
      return ti;
    })) : fi ? ((fi.exports = ti)._ = ti, Do._ = ti) : Qe._ = ti;
  }).call(t);
}), hp = RT();
function $r(t) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, $r(t);
}
function OT(t, i) {
  if ($r(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(t, i || "default");
    if ($r(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(t);
}
function PT(t) {
  var i = OT(t, "string");
  return $r(i) == "symbol" ? i : i + "";
}
function yi(t, i, r) {
  return (i = PT(i)) in t ? Object.defineProperty(t, i, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[i] = r, t;
}
function xT() {
  const t = kl().pluginRouter;
  if (!t) throw new Error("Plugin router bridge (pod-router) is unavailable on CiderApp.pluginRouter");
  return t;
}
function kl() {
  return window.CiderApp;
}
function zT() {
  return typeof window.__VUE_HMR_RUNTIME__ == "object";
}
function MT(t) {
  const i = () => t;
  function r(d) {
    return `${i()?.ce_prefix ?? t.identifier}-${d}`;
  }
  function o(d) {
    const f = { ...d }, h = kl().config.getRef(), { identifier: y } = i();
    h.plugins || (h.plugins = {}), h.plugins[y] || (h.plugins[y] = {});
    const T = h.plugins[y];
    h.plugins[y] = (0, hp.merge)(f, T);
    const _ = /* @__PURE__ */ tn((0, hp.clone)(h.plugins[y]));
    return xr(() => _, (U) => {
      h.plugins[y] = U;
    }, { deep: !0 }), _;
  }
  async function a(d) {
    const f = r(d.name);
    return await xT().push(`/ugc/plugins/ce/${f}`);
  }
  function u(d) {
    const f = d.replace(/^\//, "");
    return zT() ? `http://localhost:3058/${f}` : `${window.location.origin}/plugins/${t.identifier}/${f}`;
  }
  return {
    customElementName: r,
    goToPage: a,
    useCPlugin: i,
    setupConfig: o,
    getBundledAssetURL: u,
    plugin: {
      ...t,
      pluginKitVersion: 4
    }
  };
}
function bp(t) {
  const i = __PLUGINSYS__.Components.MainMenu.addMenuItem(t);
  return () => {
    __PLUGINSYS__.Components.MainMenu.removeMenuItem(i);
  };
}
var nw = __PLUGINSYS__.ExternalMessages;
function St() {
  const t = globalThis?.__PLUGINSYS__?.Stores?.appleMusicStore;
  if (!t) throw new Error("Plugin AppleMusic is unavailable: __PLUGINSYS__.Stores.appleMusicStore was not initialized by Cider host.");
  return t;
}
function LT(t) {
  return t === "none" || t === "one" || t === "all" ? t : t === 1 ? "one" : t === 2 ? "all" : "none";
}
function DT(t) {
  return t === "one" ? 1 : t === "all" ? 2 : 0;
}
function qT(t, i) {
  const r = `${t}`.trim().toLowerCase();
  return `https://music.apple.com/us/${r.endsWith("s") ? r : `${r}s`}/_/` + encodeURIComponent(i);
}
var qf = class {
  static get shuffleMode() {
    return St().shuffleMode;
  }
  static get repeatMode() {
    return DT(St().repeatMode);
  }
  static get nowPlayingItem() {
    return St().nowPlayingItem;
  }
  static playPause() {
    return St().playpause();
  }
  static play() {
    return St().play();
  }
  static pause() {
    return St().pause();
  }
  static stop() {
    return St().stop();
  }
  static next() {
    return St().skipToNext();
  }
  static previous() {
    return St().skipToPrevious();
  }
  static setShuffleState(t) {
    const i = St(), r = typeof t == "boolean" ? t : typeof t == "number" ? t > 0 : i.shuffleMode === 0;
    return i.setShuffleMode(r);
  }
  static setRepeatState(t) {
    const i = St(), r = t === void 0 ? i.repeatMode === "none" ? "one" : i.repeatMode === "one" ? "all" : "none" : LT(t);
    return i.setRepeatMode(r);
  }
  static async playItemById(t) {
    const i = St();
    await i.ensurePlayer();
    const r = qT(t.type, t.id);
    return i.playItemByHref(r);
  }
  static playItemByHref(t) {
    return St().playItemByHref(t.href);
  }
}, iw = window.__PLUGINSYS__.Dialog, rw = window.__PLUGINSYS__.ContextMenu, sw = window.__PLUGINSYS__.Composables.useContextMenu, FT = {
  ce_prefix: "cider-radio",
  identifier: "local.cider.radio",
  name: "Radio",
  description: "Play the Free Radio library and search TuneIn, Radio Browser, SomaFM, Icecast and iptv-org.",
  version: "0.3.0",
  author: "ouijabored66",
  repo: "https://github.com/ouijabored66/Cider-4-Radio-Plugin",
  pluginKitVersion: "4",
  entry: { "plugin.js": { type: "main" } }
}, BT = [
  {
    id: "somafm",
    name: "SomaFM",
    source: "SomaFM"
  },
  {
    id: "radio-browser",
    name: "Radio Browser",
    source: "Radio Browser"
  },
  {
    id: "icecast",
    name: "Icecast",
    source: "Icecast"
  },
  {
    id: "tunein",
    name: "TuneIn",
    source: "TuneIn"
  },
  {
    id: "ambient",
    name: "Ambient",
    source: "TuneIn"
  },
  {
    id: "celtic-instrumental",
    name: "Celtic Instrumental",
    source: "TuneIn"
  },
  {
    id: "christmas-instrumental",
    name: "Christmas Instrumental",
    source: "TuneIn"
  },
  {
    id: "classical",
    name: "Classical",
    source: "TuneIn"
  },
  {
    id: "instrumental",
    name: "Instrumental",
    source: "TuneIn"
  },
  {
    id: "jazz-instrumental",
    name: "Jazz Instrumental",
    source: "TuneIn"
  },
  {
    id: "lo-fi",
    name: "Lo-Fi",
    source: "TuneIn"
  },
  {
    id: "new-age",
    name: "New Age",
    source: "TuneIn"
  },
  {
    id: "piano",
    name: "Piano",
    source: "TuneIn"
  },
  {
    id: "soundtracks",
    name: "Soundtracks",
    source: "TuneIn"
  },
  {
    id: "guitar-instrumental",
    name: "Guitar Instrumental",
    source: "TuneIn"
  },
  {
    id: "lounge",
    name: "Lounge",
    source: "TuneIn"
  }
], VT = [
  {
    id: "sm-beatblender",
    name: "Beat Blender",
    group: "somafm",
    source: "SomaFM",
    detail: "electronic · A late night blend of deep-house and downtempo chill.",
    image: "https://api.somafm.com/logos/512/beatblender512.png?v=1299186119",
    streamUrl: "https://ice6.somafm.com/beatblender-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "SomaFM, electronic"
  },
  {
    id: "sm-chillits",
    name: "Chillits Radio",
    group: "somafm",
    source: "SomaFM",
    detail: "chill, live · Celebrating 25 years of music, chilling and camping",
    image: "https://api.somafm.com/logos/512/chillits512.png?v=1772560617",
    streamUrl: "https://ice6.somafm.com/chillits-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, chill, live"
  },
  {
    id: "sm-christmas",
    name: "Christmas Lounge",
    group: "somafm",
    source: "SomaFM",
    detail: "holiday · Chilled holiday grooves and classic winter lounge tracks. (Kid and Parent safe!)",
    image: "https://api.somafm.com/logos/512/christmas512.png?v=1342303997",
    streamUrl: "https://ice6.somafm.com/christmas-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, holiday"
  },
  {
    id: "sm-cliqhop",
    name: "cliqhop idm",
    group: "somafm",
    source: "SomaFM",
    detail: "electronic · Blips'n'beeps backed mostly w/beats. Intelligent Dance Music.",
    image: "https://api.somafm.com/logos/512/cliqhop512.png?v=1491429885",
    streamUrl: "https://ice6.somafm.com/cliqhop-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, electronic"
  },
  {
    id: "sm-deepspaceone",
    name: "Deep Space One",
    group: "somafm",
    source: "SomaFM",
    detail: "ambient · Deep ambient electronic, experimental and space music. For inner and outer space exploration.",
    image: "https://api.somafm.com/logos/512/deepspaceone512.png?v=1378071297",
    streamUrl: "https://ice6.somafm.com/deepspaceone-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "SomaFM, ambient"
  },
  {
    id: "sm-defcon",
    name: "DEF CON Radio",
    group: "somafm",
    source: "SomaFM",
    detail: "electronic, specials · Music for Hacking. The DEF CON Year-Round Channel.",
    image: "https://api.somafm.com/logos/512/defcon512.png?v=1781243226",
    streamUrl: "https://ice6.somafm.com/defcon-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, electronic, specials"
  },
  {
    id: "sm-deptstore",
    name: "Department Store Christmas",
    group: "somafm",
    source: "SomaFM",
    detail: "holiday · Holiday Elevator Music from a more innocent time.",
    image: "https://api.somafm.com/logos/512/deptstore512.png?v=1605581328",
    streamUrl: "https://ice6.somafm.com/deptstore-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, holiday"
  },
  {
    id: "sm-digitalis",
    name: "Digitalis",
    group: "somafm",
    source: "SomaFM",
    detail: "electronic, alternative · Digitally affected analog rock to calm the agitated heart.",
    image: "https://api.somafm.com/logos/512/digitalis512.png?v=1299186238",
    streamUrl: "https://ice6.somafm.com/digitalis-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, electronic, alternative"
  },
  {
    id: "sm-doomed",
    name: "Doomed",
    group: "somafm",
    source: "SomaFM",
    detail: "ambient, industrial · Where every day is Halloween: Dark industrial/ambient music for tortured souls.",
    image: "https://api.somafm.com/logos/512/doomed512.png?v=1299186756",
    streamUrl: "https://ice6.somafm.com/doomed-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, ambient, industrial"
  },
  {
    id: "sm-dronezone",
    name: "Drone Zone",
    group: "somafm",
    source: "SomaFM",
    detail: "ambient · Served best chilled, safe with most medications. Atmospheric textures with minimal beats.",
    image: "https://api.somafm.com/logos/512/dronezone512.png?v=1299186962",
    streamUrl: "https://ice6.somafm.com/dronezone-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, ambient"
  },
  {
    id: "sm-dz2",
    name: "Drone Zone 2",
    group: "somafm",
    source: "SomaFM",
    detail: "ambient · A more eclectic alternative mix of atmospheric textures with minimal beats.",
    image: "https://api.somafm.com/logos/512/dz2512.png?v=1776988037",
    streamUrl: "https://ice6.somafm.com/dz2-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "SomaFM, ambient"
  },
  {
    id: "sm-dubstep",
    name: "Dub Step Beyond",
    group: "somafm",
    source: "SomaFM",
    detail: "electronic · Dubstep, Dub and Deep Bass. May damage speakers at high volume.",
    image: "https://api.somafm.com/logos/512/dubstep512.png?v=1338923994",
    streamUrl: "https://ice6.somafm.com/dubstep-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, electronic"
  },
  {
    id: "sm-fluid",
    name: "Fluid",
    group: "somafm",
    source: "SomaFM",
    detail: "electronic, hiphop · Drown in the electronic sound of instrumental hiphop, future soul and liquid trap.",
    image: "https://api.somafm.com/logos/512/fluid512.jpg?v=1436822727",
    streamUrl: "https://ice6.somafm.com/fluid-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "SomaFM, electronic, hiphop"
  },
  {
    id: "sm-groovesalad",
    name: "Groove Salad",
    group: "somafm",
    source: "SomaFM",
    detail: "ambient, electronic · A nicely chilled plate of ambient/downtempo beats and grooves.",
    image: "https://api.somafm.com/logos/512/groovesalad512.png?v=1780812671",
    streamUrl: "https://ice2.somafm.com/groovesalad-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, ambient, electronic"
  },
  {
    id: "sm-groovesalad2",
    name: "Groove Salad 2",
    group: "somafm",
    source: "SomaFM",
    detail: "ambient, electronic · A different mix of  nicely chilled ambient/downtempo beats and grooves.",
    image: "https://api.somafm.com/logos/512/groovesalad2512.png?v=1779933336",
    streamUrl: "https://ice2.somafm.com/groovesalad2-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, ambient, electronic"
  },
  {
    id: "sm-gsclassic",
    name: "Groove Salad Classic",
    group: "somafm",
    source: "SomaFM",
    detail: "ambient, electronic · The classic (early 2000s) version of a nicely chilled plate of ambient/downtempo beats and grooves.",
    image: "https://api.somafm.com/logos/512/gsclassic512.jpg?v=1747344773",
    streamUrl: "https://ice2.somafm.com/gsclassic-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "SomaFM, ambient, electronic"
  },
  {
    id: "sm-illstreet",
    name: "Illinois Street Lounge",
    group: "somafm",
    source: "SomaFM",
    detail: "lounge · Classic bachelor pad, playful exotica and vintage music of tomorrow.",
    image: "https://api.somafm.com/logos/512/illstreet512.png?v=1747344746",
    streamUrl: "https://ice2.somafm.com/illstreet-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "SomaFM, lounge"
  },
  {
    id: "sm-missioncontrol",
    name: "Mission Control",
    group: "somafm",
    source: "SomaFM",
    detail: "ambient, electronic · Celebrating NASA and Space Explorers everywhere.",
    image: "https://api.somafm.com/logos/512/missioncontrol512.jpg?v=1342304239",
    streamUrl: "https://ice2.somafm.com/missioncontrol-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "SomaFM, ambient, electronic"
  },
  {
    id: "sm-n5md",
    name: "n5MD Radio",
    group: "somafm",
    source: "SomaFM",
    detail: "specials · Emotional Experiments in Music: Ambient, modern composition, post-rock, & experimental electronic music",
    image: "https://api.somafm.com/logos/512/n5md512.png?v=1605058529",
    streamUrl: "https://ice2.somafm.com/n5md-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "SomaFM, specials"
  },
  {
    id: "sm-secretagent",
    name: "Secret Agent",
    group: "somafm",
    source: "SomaFM",
    detail: "lounge · The soundtrack for your stylish, mysterious, dangerous life. For Spies and PIs too!",
    image: "https://api.somafm.com/logos/512/secretagent512.png?v=1299188268",
    streamUrl: "https://ice2.somafm.com/secretagent-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "SomaFM, lounge"
  },
  {
    id: "sm-sonicuniverse",
    name: "Sonic Universe",
    group: "somafm",
    source: "SomaFM",
    detail: "jazz · Transcending the world of jazz with eclectic, avant-garde takes on tradition.",
    image: "https://api.somafm.com/logos/512/sonicuniverse512.png?v=1299205522",
    streamUrl: "https://ice2.somafm.com/sonicuniverse-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, jazz"
  },
  {
    id: "sm-spacestation",
    name: "Space Station Soma",
    group: "somafm",
    source: "SomaFM",
    detail: "electronic · Tune in, turn on, space out. Spaced-out ambient and mid-tempo electronica.",
    image: "https://api.somafm.com/logos/512/spacestation512.png?v=1299205660",
    streamUrl: "https://ice2.somafm.com/spacestation-320-mp3",
    codec: "mp3",
    bitrate: 320,
    uuid: null,
    tags: "SomaFM, electronic"
  },
  {
    id: "sm-synphaera",
    name: "Synphaera Radio",
    group: "somafm",
    source: "SomaFM",
    detail: "ambient, electronic · Featuring the music from an independent record label focused on modern electronic ambient and space music.",
    image: "https://api.somafm.com/logos/512/synphaera512.jpg?v=1611903618",
    streamUrl: "https://ice2.somafm.com/synphaera-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, ambient, electronic"
  },
  {
    id: "sm-darkzone",
    name: "The Dark Zone",
    group: "somafm",
    source: "SomaFM",
    detail: "ambient · The darker side of deep ambient. Music for staring into the Abyss.",
    image: "https://api.somafm.com/logos/512/darkzone512.jpg?v=1674958826",
    streamUrl: "https://ice6.somafm.com/darkzone-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, ambient"
  },
  {
    id: "sm-thetrip",
    name: "The Trip",
    group: "somafm",
    source: "SomaFM",
    detail: "electronic · Progressive house / trance. Tip top tunes.",
    image: "https://api.somafm.com/logos/512/thetrip512.jpg?v=1447535194",
    streamUrl: "https://ice2.somafm.com/thetrip-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "SomaFM, electronic"
  },
  {
    id: "sm-tikitime",
    name: "Tiki Time",
    group: "somafm",
    source: "SomaFM",
    detail: "tiki, world · Classic Tiki music and Vintage island rhythms to sip cocktails by.",
    image: "https://api.somafm.com/logos/512/tikitime512.jpg?v=1695348831",
    streamUrl: "https://ice2.somafm.com/tikitime-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "SomaFM, tiki, world"
  },
  {
    id: "sm-vaporwaves",
    name: "Vaporwaves",
    group: "somafm",
    source: "SomaFM",
    detail: "electronic · All Vaporwave. All the time.",
    image: "https://api.somafm.com/logos/512/vaporwaves512.png?v=1601767635",
    streamUrl: "https://ice2.somafm.com/vaporwaves-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "SomaFM, electronic"
  },
  {
    id: "rb-be9dcb42-f365-11e8-a471-52543be04c81",
    name: "- 0 N - Chillout on Radio",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "aac+ · 64 kbps",
    image: "https://www.0nradio.com/logos/0n-chillout_600x600.jpg",
    streamUrl: "https://0n-chillout.radionetz.de/0n-chillout.aac",
    codec: "aac+",
    bitrate: 64,
    uuid: "be9dcb42-f365-11e8-a471-52543be04c81",
    tags: "Radio Browser, ambient, chillout, easy listening, electro"
  },
  {
    id: "rb-96281314-0601-11e8-ae97-52543be04c81",
    name: "1.FM - Afterbeat Electronica Radio",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 256 kbps",
    image: null,
    streamUrl: "http://strm112.1.fm/electronica_mobile_mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: "96281314-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, chillout"
  },
  {
    id: "rb-07064262-5ef9-44e1-900d-ed752b7433b8",
    name: "1.FM - Ambient Psychill",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 256 kbps",
    image: null,
    streamUrl: "http://strm112.1.fm/ambientpsy_mobile_mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: "07064262-5ef9-44e1-900d-ed752b7433b8",
    tags: "Radio Browser, downtempo, psychedelic chillout grooves, slow trance"
  },
  {
    id: "rb-962a7d59-0601-11e8-ae97-52543be04c81",
    name: "1.FM - Movie Soundtrack",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 256 kbps",
    image: null,
    streamUrl: "http://strm112.1.fm/moviesoundtracks_mobile_mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: "962a7d59-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, movie soundtracks"
  },
  {
    id: "rb-96225a38-0601-11e8-ae97-52543be04c81",
    name: "1.FM - Otto's Baroque Music Radio",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 256 kbps",
    image: null,
    streamUrl: "http://strm112.1.fm/baroque_mobile_mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: "96225a38-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, baroque, classical"
  },
  {
    id: "rb-961f28c0-0601-11e8-ae97-52543be04c81",
    name: "181.FM - Chilled Out",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://www.181.fm/favicon.ico",
    streamUrl: "https://listen.181fm.com/181-chilled_128k.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: "961f28c0-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, chillout, waynesboro"
  },
  {
    id: "rb-96257742-0601-11e8-ae97-52543be04c81",
    name: "181.FM - Classical Guitar",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://www.181.fm/favicon.ico",
    streamUrl: "https://listen.181fm.com/181-classicalguitar_128k.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: "96257742-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, classical guitar, guitar, waynesboro"
  },
  {
    id: "rb-25ff1b4c-ffcb-4572-a561-9347e0e58c75",
    name: "__LOUNGE__ by rautemusik (rm.fm)",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 192 kbps",
    image: "https://www.rm.fm/favicon.ico",
    streamUrl: "https://lounge-high.rautemusik.fm/?ref=radiobrowser",
    codec: "mp3",
    bitrate: 192,
    uuid: "25ff1b4c-ffcb-4572-a561-9347e0e58c75",
    tags: "Radio Browser, ambient, chill, chillout, lounge"
  },
  {
    id: "rb-961aeb3b-0601-11e8-ae97-52543be04c81",
    name: "Ambient Modern",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 256 kbps",
    image: "https://ambientmodern.com/wp-content/uploads/2020/05/cropped-ambient-modern-3000-180x180.png",
    streamUrl: "http://radio.stereoscenic.com/mod-h",
    codec: "mp3",
    bitrate: 256,
    uuid: "961aeb3b-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, ambient, chillout, non-commercial, relaxation music"
  },
  {
    id: "rb-961fa288-0601-11e8-ae97-52543be04c81",
    name: "Ambient Sleeping Pill",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 256 kbps",
    image: null,
    streamUrl: "http://radio.stereoscenic.com/asp-h",
    codec: "mp3",
    bitrate: 256,
    uuid: "961fa288-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, ambient, meditation, sleep"
  },
  {
    id: "rb-fb6f79e4-d5ac-481b-90f5-b6f4828235de",
    name: "Ambient Space",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://s1.wp.com/i/favicon.ico",
    streamUrl: "http://immortalharmony.out.airtime.pro:8000/immortalharmony_a",
    codec: "mp3",
    bitrate: 128,
    uuid: "fb6f79e4-d5ac-481b-90f5-b6f4828235de",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-962ece3f-0601-11e8-ae97-52543be04c81",
    name: "Calm Radio - Bach",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://calmradio.com/templates/calmradio/favicons/apple-touch-icon.png",
    streamUrl: "http://streams.calmradio.com:6828/stream",
    codec: "mp3",
    bitrate: 128,
    uuid: "962ece3f-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, bach, classical"
  },
  {
    id: "rb-5a056387-0cf9-11e8-ae97-52543be04c81",
    name: "Calm Radio - Flute",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://calmradio.com/images/logo/Calm-LOGO%202015.png",
    streamUrl: "http://streams.calmradio.com:4828/;",
    codec: "mp3",
    bitrate: 128,
    uuid: "5a056387-0cf9-11e8-ae97-52543be04c81",
    tags: "Radio Browser, baroque, classical"
  },
  {
    id: "rb-962ec7c6-0601-11e8-ae97-52543be04c81",
    name: "Calm Radio - Johann Strauss II",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://calmradio.com/templates/calmradio/favicons/apple-touch-icon.png",
    streamUrl: "http://streams.calmradio.com:8328/stream",
    codec: "mp3",
    bitrate: 128,
    uuid: "962ec7c6-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, classical, strauss"
  },
  {
    id: "rb-96250be4-0601-11e8-ae97-52543be04c81",
    name: "Calm Radio - Mozart",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://calmradio.com/templates/calmradio/favicons/apple-touch-icon.png",
    streamUrl: "http://streams.calmradio.com:7328/stream",
    codec: "mp3",
    bitrate: 128,
    uuid: "96250be4-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, classical, mozart"
  },
  {
    id: "rb-963b8a47-0601-11e8-ae97-52543be04c81",
    name: "Calm Radio - Solo Piano",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://calmradio.com/templates/calmradio/favicons/apple-touch-icon.png",
    streamUrl: "http://streams.calmradio.com:1228/",
    codec: "mp3",
    bitrate: 128,
    uuid: "963b8a47-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, easy listening, piano"
  },
  {
    id: "rb-96301845-0601-11e8-ae97-52543be04c81",
    name: "Calm Radio - Violin",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://calmradio.com/templates/calmradio/favicons/apple-touch-icon.png",
    streamUrl: "http://streams.calmradio.com:4528/stream",
    codec: "mp3",
    bitrate: 128,
    uuid: "96301845-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, baroque, classical"
  },
  {
    id: "rb-962ed0ef-0601-11e8-ae97-52543be04c81",
    name: "Calm Radio - Vivaldi",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://calmradio.com/templates/calmradio/favicons/apple-touch-icon.png",
    streamUrl: "http://streams.calmradio.com:8928/stream",
    codec: "mp3",
    bitrate: 128,
    uuid: "962ed0ef-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, classical, vivaldi"
  },
  {
    id: "rb-4f4a3176-343c-4571-ac03-0dad7c5f0a09",
    name: "Chillofi radio",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 192 kbps",
    image: "https://chillofi-radio.dez.ovh/img/clofi-logo.jpg",
    streamUrl: "http://streams.dez.ovh:8000/radio.mp3",
    codec: "mp3",
    bitrate: 192,
    uuid: "4f4a3176-343c-4571-ac03-0dad7c5f0a09",
    tags: "Radio Browser, chill, chillhop, chillout, lo-fi"
  },
  {
    id: "rb-41fbe760-75f0-46a9-aef4-9283667b58dc",
    name: "Classical Radio - London Symphony Orchestra",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://classicalradio.world/static/assets/img/apple-icon-120x120.png",
    streamUrl: "https://drive.uber.radio/uber/crlso/icecast.audio",
    codec: "mp3",
    bitrate: 128,
    uuid: "41fbe760-75f0-46a9-aef4-9283667b58dc",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-9641edb9-0601-11e8-ae97-52543be04c81",
    name: "Concertzender Baroque",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: null,
    streamUrl: "http://streams.greenhost.nl:8080/barok",
    codec: "mp3",
    bitrate: 128,
    uuid: "9641edb9-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-9625d0fa-0601-11e8-ae97-52543be04c81",
    name: "Concertzender Oude Muziek",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Concertzender_Logo.svg/1200px-Concertzender_Logo.svg.png",
    streamUrl: "http://streams.greenhost.nl:8080/oudemuziek",
    codec: "mp3",
    bitrate: 128,
    uuid: "9625d0fa-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, baroque, classical, early music"
  },
  {
    id: "rb-2815bbc7-2cbf-11e8-91bf-52543be04c81",
    name: "dinamo.fm caffe",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 320 kbps",
    image: "https://www.dinamo.fm/favicons/dinamo-caffe-favicon.jpg",
    streamUrl: "http://channels.dinamo.fm/caffe-mp3",
    codec: "mp3",
    bitrate: 320,
    uuid: "2815bbc7-2cbf-11e8-91bf-52543be04c81",
    tags: "Radio Browser, chillout, lounge, relaxing"
  },
  {
    id: "rb-1111c128-3215-49dd-9741-7858967455c4",
    name: "dinamo.fm sleep",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 320 kbps",
    image: "https://www.dinamo.fm/favicons/dinamo-sleep-favicon.jpg",
    streamUrl: "http://channels.dinamo.fm/sleep-mp3",
    codec: "mp3",
    bitrate: 320,
    uuid: "1111c128-3215-49dd-9741-7858967455c4",
    tags: "Radio Browser, ambient, chillout, lullaby, relaxing"
  },
  {
    id: "rb-f37ed4e9-b930-4ff3-a7c6-a44a96c5877e",
    name: "Easy Classical",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://easy.radio/static/assets/img/apple-icon-120x120.png",
    streamUrl: "https://streaming.exclusive.radio/uber/easyclassical/icecast.audio",
    codec: "mp3",
    bitrate: 128,
    uuid: "f37ed4e9-b930-4ff3-a7c6-a44a96c5877e",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-11b52be4-df72-11e9-a8ba-52543be04c81",
    name: "Enigmatic 3 - Magnetic Chillout",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "aac · 64 kbps",
    image: null,
    streamUrl: "http://radio.enigmatic.su:8050/radio",
    codec: "aac",
    bitrate: 64,
    uuid: "11b52be4-df72-11e9-a8ba-52543be04c81",
    tags: "Radio Browser, ambient, atmospheric, chillout, easy listening"
  },
  {
    id: "rb-1e8ba89b-7dcd-4d62-a20d-073739df672d",
    name: "Epic Lounge - CHILLOUT LOUNGE",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 192 kbps",
    image: null,
    streamUrl: "https://stream.epic-lounge.com/chillout-lounge?ref=radiobrowser",
    codec: "mp3",
    bitrate: 192,
    uuid: "1e8ba89b-7dcd-4d62-a20d-073739df672d",
    tags: "Radio Browser, ambient, ambient and relaxation music, chill, chillout"
  },
  {
    id: "rb-4abe67bd-cd14-418e-88c3-284f1ef8c487",
    name: "Forest Green Radio",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://liveonlineradio.net/wp-content/uploads/2017/02/Forest-Green-Radio-100x47.jpg",
    streamUrl: "http://s1.streamaudio.de:8000/forest-green",
    codec: "mp3",
    bitrate: 128,
    uuid: "4abe67bd-cd14-418e-88c3-284f1ef8c487",
    tags: "Radio Browser, celtic, classical, hits, music"
  },
  {
    id: "rb-96162e74-0601-11e8-ae97-52543be04c81",
    name: "France Musique | Classique Easy",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: null,
    streamUrl: "http://direct.francemusique.fr/live/francemusiqueeasyclassique-hifi.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: "96162e74-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, classic, classical"
  },
  {
    id: "rb-5ebbc7bb-b3e3-4a5c-b660-cb7ab2615ac4",
    name: "Instrumentals forever (64kbp)",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "aac · 64 kbps",
    image: "https://instrumentalsforever.eu/favicon.ico",
    streamUrl: "http://quincy.torontocast.com:1920/stream",
    codec: "aac",
    bitrate: 64,
    uuid: "5ebbc7bb-b3e3-4a5c-b660-cb7ab2615ac4",
    tags: "Radio Browser, big band, easy listening, instrumental"
  },
  {
    id: "rb-c528303b-3f8b-11e9-aa55-52543be04c81",
    name: "KLASSIK 1",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://www.klassik1.de/favicon.png",
    streamUrl: "http://icepool.silvacast.com/KLASSIK1.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: "c528303b-3f8b-11e9-aa55-52543be04c81",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-ffd351fe-219e-4c6e-b14f-9c2e02fbe45e",
    name: "Klassik Radio - Live",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3",
    image: "https://klassikradio.de/img/ms-mediumtile.png",
    streamUrl: "https://live.streams.klassikradio.de/klassikradio-deutschland/stream/mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: "ffd351fe-219e-4c6e-b14f-9c2e02fbe45e",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-963712bc-0601-11e8-ae97-52543be04c81",
    name: "Klassik Radio - Pure Mozart",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://www.klassikradio.de/img/ms-mediumtile.png",
    streamUrl: "http://stream.klassikradio.de/mozart/mp3-128/vtuner/",
    codec: "mp3",
    bitrate: 128,
    uuid: "963712bc-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-686a0847-a519-460d-b351-831e1a80d516",
    name: "Linn Classical",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 320 kbps",
    image: "https://small.linncdn.com/website/responsive/images/icons/linn-icon-x120.png",
    streamUrl: "http://radio.linn.co.uk:8004/autodj",
    codec: "mp3",
    bitrate: 320,
    uuid: "686a0847-a519-460d-b351-831e1a80d516",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-961d4dec-0601-11e8-ae97-52543be04c81",
    name: "Minnesota Public Radio Classical Music Stream",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://www.yourclassical.org/apple-touch-icon.png",
    streamUrl: "http://ycradio.stream.publicradio.org/ycradio.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: "961d4dec-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-4dad0ae3-720a-434e-b350-7186e4c5ea6f",
    name: "MyNoise Pure Nature",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 160 kbps",
    image: "https://mynoise.net/apple-touch-icon.png",
    streamUrl: "https://purenature-mynoise.radioca.st/stream",
    codec: "mp3",
    bitrate: 160,
    uuid: "4dad0ae3-720a-434e-b350-7186e4c5ea6f",
    tags: "Radio Browser, ambient, ambient and relaxation music, nature"
  },
  {
    id: "rb-95277bca-2c9a-4c08-b2e7-0854e5793f8e",
    name: "Nature Radio Rain",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: null,
    streamUrl: "https://maggie.torontocast.com:2020/stream/natureradiorain",
    codec: "mp3",
    bitrate: 128,
    uuid: "95277bca-2c9a-4c08-b2e7-0854e5793f8e",
    tags: "Radio Browser, ambient, ambient and relaxation music, nature, rainorshine"
  },
  {
    id: "rb-bbae7603-b9c0-42fe-a1f5-da8f424baa8b",
    name: "PerfectMoods – 24/7 Quality Lounge",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 320 kbps",
    image: "https://perfectmoods.nl/favicon.ico",
    streamUrl: "https://www.radioking.com/play/perfectmoods/104227",
    codec: "mp3",
    bitrate: 320,
    uuid: "bbae7603-b9c0-42fe-a1f5-da8f424baa8b",
    tags: "Radio Browser, chillout, lounge, smooth jazz"
  },
  {
    id: "rb-3653b75c-0116-11ea-bbf2-52543be04c81",
    name: "Psyndora Chillout",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://www.psyndora.com/images/favicon-144x144.png",
    streamUrl: "http://cast.magicstreams.gr:9125/stream",
    codec: "mp3",
    bitrate: 128,
    uuid: "3653b75c-0116-11ea-bbf2-52543be04c81",
    tags: "Radio Browser, 2 stations, 24/7, chill, chillout"
  },
  {
    id: "rb-c04ed475-b85a-4b99-ba69-c7edbedebdaf",
    name: "Radio Art - Ambient Piano",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 96 kbps",
    image: "https://www.radioart.com/favicon.ico",
    streamUrl: "http://air.radioart.com/fAmbient_piano.mp3",
    codec: "mp3",
    bitrate: 96,
    uuid: "c04ed475-b85a-4b99-ba69-c7edbedebdaf",
    tags: "Radio Browser, instrumental, piano, relax"
  },
  {
    id: "rb-701d3a6d-06e0-4d1f-9521-7742e725ba94",
    name: "Radio Art - Chillout",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 96 kbps",
    image: "https://d1iyh67kzf6t3o.cloudfront.net/images/channels/25_Chillout.jpg",
    streamUrl: "http://air.radioart.com/fChillout.mp3",
    codec: "mp3",
    bitrate: 96,
    uuid: "701d3a6d-06e0-4d1f-9521-7742e725ba94",
    tags: "Radio Browser, #chillout, chillout, electronic"
  },
  {
    id: "rb-564e60e1-ae3a-11e8-aa67-52543be04c81",
    name: "Radio Art - Classical for sleep",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 96 kbps",
    image: "https://cdn-radiotime-logos.tunein.com/s78276q.png",
    streamUrl: "http://live.radioart.com/fClassical_for_sleep.mp3",
    codec: "mp3",
    bitrate: 96,
    uuid: "564e60e1-ae3a-11e8-aa67-52543be04c81",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-5e715331-d8ae-11e8-a9cc-52543be04c81",
    name: "Radio Art - Meditation",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 96 kbps",
    image: "https://cdn-profiles.tunein.com/s187596/images/logoq.jpg",
    streamUrl: "http://air-tunein.radioart.com/fMeditation.mp3",
    codec: "mp3",
    bitrate: 96,
    uuid: "5e715331-d8ae-11e8-a9cc-52543be04c81",
    tags: "Radio Browser, ambient, instrumental, soft music"
  },
  {
    id: "rb-9f57367e-96b1-4e52-97a0-0bc37cf6957a",
    name: "Radio Art - Piano for Sleep",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 96 kbps",
    image: "https://d1iyh67kzf6t3o.cloudfront.net/images/channels/137_piano_for_s-600x400.jpg",
    streamUrl: "http://air.radioart.com/fPiano_for_sleep.mp3",
    codec: "mp3",
    bitrate: 96,
    uuid: "9f57367e-96b1-4e52-97a0-0bc37cf6957a",
    tags: "Radio Browser, classical, piano, sleep"
  },
  {
    id: "rb-radio-art-relaxing-violin-piano-cello",
    name: "Radio Art - Relaxing (Violin - Piano & Cello)",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3",
    image: "https://www.radioart.com/favicon.ico",
    streamUrl: "http://air.radioart.com/fRelaxing.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Radio Browser"
  },
  {
    id: "rb-bd8e4968-ae38-11e8-aa67-52543be04c81",
    name: "Radio Art - Sleep",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 96 kbps",
    image: "https://cdn-profiles.tunein.com/s187594/images/logoq.jpg",
    streamUrl: "http://air-tunein.radioart.com/fSleep.mp3",
    codec: "mp3",
    bitrate: 96,
    uuid: "bd8e4968-ae38-11e8-aa67-52543be04c81",
    tags: "Radio Browser, ambient, instrumental"
  },
  {
    id: "rb-67a91981-4654-4d8e-9534-a970d4d60c3c",
    name: "Radio Classica - Strauss",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://cdn.audioaddict.com/classicalradio.com/assets/apple-touch-icon-120x120-7922555f3bb73e6e492c46abda410434ea8ca2dd3349ce116a1511dde6f4f584.png",
    streamUrl: "https://drive.uber.radio/uber/crstrauss/icecast.audio",
    codec: "mp3",
    bitrate: 128,
    uuid: "67a91981-4654-4d8e-9534-a970d4d60c3c",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-960dc513-0601-11e8-ae97-52543be04c81",
    name: "RMF Classic",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "aac+ · 48 kbps",
    image: null,
    streamUrl: "http://31.192.216.8/RMFCLASSIC48",
    codec: "aac+",
    bitrate: 48,
    uuid: "960dc513-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-dfe95eca-06e0-11e9-a80b-52543be04c81",
    name: "RMNinstrumental",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 192 kbps",
    image: null,
    streamUrl: "http://stream.instrumentalhits.de:8060/",
    codec: "mp3",
    bitrate: 192,
    uuid: "dfe95eca-06e0-11e9-a80b-52543be04c81",
    tags: "Radio Browser, instrumental"
  },
  {
    id: "rb-sleep-radio",
    name: "Sleep Radio",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3",
    image: "https://d3kle7qwymxpcy.cloudfront.net/images/broadcasts/97/65/31354/c175.png",
    streamUrl: "http://65.109.81.84:9851/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Radio Browser"
  },
  {
    id: "rb-963dc372-0601-11e8-ae97-52543be04c81",
    name: "StreamingSoundtracks.com Hi",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "aac+ · 192 kbps",
    image: null,
    streamUrl: "http://www.streamingsoundtracks.com/modules/Listen/MP3-hi.pls",
    codec: "aac+",
    bitrate: 192,
    uuid: "963dc372-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, movie, richmond, soundtrack"
  },
  {
    id: "rb-dcf4d7aa-f7d5-11e8-a471-52543be04c81",
    name: "Sunday Baroque",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "aac · 128 kbps",
    image: "https://sundaybaroque.org/favicon.ico",
    streamUrl: "http://wshu.streamguys.org/wshu-baroque",
    codec: "aac",
    bitrate: 128,
    uuid: "dcf4d7aa-f7d5-11e8-a471-52543be04c81",
    tags: "Radio Browser, baroque, classical"
  },
  {
    id: "rb-f4562879-908f-4dc8-8908-d6c78b238e69",
    name: "Your Classical - Peaceful Piano",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: null,
    streamUrl: "http://peacefulpiano.stream.publicradio.org/peacefulpiano.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: "f4562879-908f-4dc8-8908-d6c78b238e69",
    tags: "Radio Browser, classical"
  },
  {
    id: "rb-960ac54b-0601-11e8-ae97-52543be04c81",
    name: "Your Classical - Relax",
    group: "radio-browser",
    source: "Radio Browser",
    detail: "mp3 · 128 kbps",
    image: "https://www.yourclassical.org/apple-touch-icon.png",
    streamUrl: "http://relax.stream.publicradio.org/relax.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: "960ac54b-0601-11e8-ae97-52543be04c81",
    tags: "Radio Browser, classical, relax"
  },
  {
    id: "ic-immersound",
    name: "Immersound",
    group: "icecast",
    source: "Icecast",
    detail: "mp3",
    image: null,
    streamUrl: "http://manager11.streamradio.fr:1460/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Icecast"
  },
  {
    id: "ti-s34682",
    name: "Jazz24 - KNKX-HD2",
    group: "tunein",
    source: "TuneIn",
    detail: "TuneIn",
    image: "https://cdn-profiles.tunein.com/s34682/images/logoq.jpg?t=157297",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, TuneIn"
  },
  {
    id: "ti-s8880",
    name: "KIIS 101.1",
    group: "tunein",
    source: "TuneIn",
    detail: "TuneIn",
    image: "https://cdn-radiotime-logos.tunein.com/s8880q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, TuneIn"
  },
  {
    id: "ti-s105932",
    name: "WWNO Jazz",
    group: "tunein",
    source: "TuneIn",
    detail: "TuneIn",
    image: "https://cdn-profiles.tunein.com/s105932/images/logoq.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, TuneIn"
  },
  {
    id: "ti-s306577",
    name: "1.FM Ambient Psychill",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s306577/images/logoq.png?t=152882",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s220755",
    name: "a.m. ambient (US)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-radiotime-logos.tunein.com/s220755q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s203450",
    name: "Ambient Art Sound",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-radiotime-logos.tunein.com/s203450q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s361882",
    name: "Ambient Calm",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s361882/images/logoq.jpg?t=1791500022000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s321104",
    name: "AMBIENT LOUNGE",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s321104/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s158097",
    name: "Ambient Lounge on MixLive.net",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s158097/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s310835",
    name: "Ambient Radio",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s310835/images/logoq.png?t=910",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s190314",
    name: "Ambient Sleeping Pill (US)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s190314/images/logoq.png?t=161653",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s321102",
    name: "AMBIENT SPACES",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s321102/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s321103",
    name: "AMBIENT THINGS",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s321103/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s361887",
    name: "Ambient Waves",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s361887/images/logoq.jpg?t=1791475458000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s343295",
    name: "Ambiente Radio TV",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s343295/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s221540",
    name: "AmbientRadio.net (MRG.fm)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-radiotime-logos.tunein.com/s221540q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s142801",
    name: "anotherplanet.fm ambient radio",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-radiotime-logos.tunein.com/s142801q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s302881",
    name: "Buddha Beach (France)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s302881/images/logoq.jpg?t=151550",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s321184",
    name: "CELLO FOR SLEEP",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s321184/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s282997",
    name: "Costa Del Mar - Zen (Ibiza - Spain)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s282997/images/logoq.png?t=151629",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s321179",
    name: "DEEP SLEEP",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s321179/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s240424",
    name: "Ibiza Radio - Chill (Ibiza  - Spain)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s240424/images/logoq.jpg?t=159344",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s335562",
    name: "ISEKOI Radio | Non-Stop Ambient (Lille - France)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s335562/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s172068",
    name: "Klassik Radio Ambient Lounge (Augsburg - Germany)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s172068/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s320480",
    name: "Klassik Radio Meditation (Augsburg - Germany)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s320480/images/logoq.png?t=1781189118000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s17364",
    name: "Lounge-Radio.com - swiss made (Switzerland)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s17364/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s305553",
    name: "M1.FM Chillout",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s305553/images/logoq.jpg?t=153132",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s321180",
    name: "MY BEST SLEEP EVER",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s321180/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s336624",
    name: "NATURE RADIO OCEAN (Toronto - Canada)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s336624/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s132271",
    name: "PARTY VIBE RADIO : AMBIENT",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s132271/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s359751",
    name: "Plantland Radio (Copenhagen - Denmark)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s359751/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s275739",
    name: "R.SH Relax (Kiel - Germany)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-radiotime-logos.tunein.com/s275739q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s260893",
    name: "Radio Dimensione Relax (Italy)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-radiotime-logos.tunein.com/s260893q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s257734",
    name: "Radio Nature (Alicante - Spain)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s257734/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s321178",
    name: "REM SLEEP",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s321178/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s132812",
    name: "SLEEP",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s132812/images/logoq.png?t=3",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s228215",
    name: "Sleep Radio (New Zealand)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s228215/images/logoq.png?t=158404",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s237131",
    name: "Sleepscapes | Rain (US)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-radiotime-logos.tunein.com/s0q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s213374",
    name: "Slowly Radio - Slow (France)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s213374/images/logoq.jpg?t=1685990564000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s206475",
    name: "SomaFM: Deep Space One",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s206475/images/logoq.jpg",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s51002",
    name: "SomaFM: Drone Zone",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s51002/images/logoq.jpg",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s355583",
    name: "SomaFM: Drone Zone 2",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s355583/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s238256",
    name: "Sun Radio - Café (Café - Soulside Radio) (Paris - France)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s238256/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s205347",
    name: "The Oasis - Modern Easy Listening (Canada)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s205347/images/logoq.jpg",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s184695",
    name: "Tony Jones - Psy.D | Wellness Hub (US)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s184695/images/logoq.png?t=4",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s321182",
    name: "WAVES FOR SLEEP",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s321182/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s215840",
    name: "Yimago Earth (Canada)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s215840/images/logoq.png?t=1682801489000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s302899",
    name: "Yoga Chill (France)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s302899/images/logoq.jpg?t=151550",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s232518",
    name: "Zero Beat Zone (MRG.fm)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-radiotime-logos.tunein.com/s232518q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s142246",
    name: "CELTIC",
    group: "celtic-instrumental",
    source: "TuneIn",
    detail: "Celtic Instrumental",
    image: "https://cdn-profiles.tunein.com/s142246/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Celtic Instrumental"
  },
  {
    id: "ti-s321064",
    name: "CELTIC CALM",
    group: "celtic-instrumental",
    source: "TuneIn",
    detail: "Celtic Instrumental",
    image: "https://cdn-profiles.tunein.com/s321064/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Celtic Instrumental"
  },
  {
    id: "ti-s321083",
    name: "CELTIC HARP",
    group: "celtic-instrumental",
    source: "TuneIn",
    detail: "Celtic Instrumental",
    image: "https://cdn-profiles.tunein.com/s321083/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Celtic Instrumental"
  },
  {
    id: "ti-s290623",
    name: "HARP",
    group: "celtic-instrumental",
    source: "TuneIn",
    detail: "Celtic Instrumental",
    image: "https://cdn-profiles.tunein.com/s290623/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Celtic Instrumental"
  },
  {
    id: "ti-s133513",
    name: "POSITIVITY",
    group: "celtic-instrumental",
    source: "TuneIn",
    detail: "Celtic Instrumental",
    image: "https://cdn-profiles.tunein.com/s133513/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Celtic Instrumental"
  },
  {
    id: "ti-s247260",
    name: "Radio Art - Celtic",
    group: "celtic-instrumental",
    source: "TuneIn",
    detail: "Celtic Instrumental",
    image: "https://cdn-profiles.tunein.com/s247260/images/logoq.jpg?t=152758",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Celtic Instrumental"
  },
  {
    id: "ti-s89783",
    name: "181.FM Christmas Smooth Jazz",
    group: "christmas-instrumental",
    source: "TuneIn",
    detail: "Christmas Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s89783q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Christmas Instrumental"
  },
  {
    id: "ti-s89792",
    name: "181.FM Christmas Soundtracks",
    group: "christmas-instrumental",
    source: "TuneIn",
    detail: "Christmas Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s89792q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Christmas Instrumental"
  },
  {
    id: "ti-s142273",
    name: "CHRISTMAS",
    group: "christmas-instrumental",
    source: "TuneIn",
    detail: "Christmas Instrumental",
    image: "https://cdn-profiles.tunein.com/s142273/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Christmas Instrumental"
  },
  {
    id: "ti-s277998",
    name: "Christmas FM Classical (Ireland)",
    group: "christmas-instrumental",
    source: "TuneIn",
    detail: "Christmas Instrumental",
    image: "https://cdn-profiles.tunein.com/s277998/images/logoq.png?t=1669747781000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Christmas Instrumental"
  },
  {
    id: "ti-s290439",
    name: "CHRISTMAS MEGA MIX",
    group: "christmas-instrumental",
    source: "TuneIn",
    detail: "Christmas Instrumental",
    image: "https://cdn-profiles.tunein.com/s290439/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Christmas Instrumental"
  },
  {
    id: "ti-s282482",
    name: "COUNTRY CHRISTMAS",
    group: "christmas-instrumental",
    source: "TuneIn",
    detail: "Christmas Instrumental",
    image: "https://cdn-profiles.tunein.com/s282482/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Christmas Instrumental"
  },
  {
    id: "ti-s257653",
    name: "Easy Listening Christmas",
    group: "christmas-instrumental",
    source: "TuneIn",
    detail: "Christmas Instrumental",
    image: "https://cdn-profiles.tunein.com/s257653/images/logoq.png?t=159983",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Christmas Instrumental"
  },
  {
    id: "ti-s290440",
    name: "JAZZ CHRISTMAS",
    group: "christmas-instrumental",
    source: "TuneIn",
    detail: "Christmas Instrumental",
    image: "https://cdn-profiles.tunein.com/s290440/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Christmas Instrumental"
  },
  {
    id: "ti-s257672",
    name: "New England Classical Christmas (Sebago - ME)",
    group: "christmas-instrumental",
    source: "TuneIn",
    detail: "Christmas Instrumental",
    image: "https://cdn-profiles.tunein.com/s257672/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Christmas Instrumental"
  },
  {
    id: "ti-s279400",
    name: "RICHARD STRAUSS (Canada)",
    group: "christmas-instrumental",
    source: "TuneIn",
    detail: "Christmas Instrumental",
    image: "https://cdn-profiles.tunein.com/s279400/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Christmas Instrumental"
  },
  {
    id: "ti-s360929",
    name: "The Miller Lights (Santa Rosa - CA)",
    group: "christmas-instrumental",
    source: "TuneIn",
    detail: "Christmas Instrumental",
    image: "https://cdn-profiles.tunein.com/s360929/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Christmas Instrumental"
  },
  {
    id: "ti-s309932",
    name: "0nlineradio BEETHOVEN (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s309932/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s309935",
    name: "0nlineradio BRAHMS (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s309935/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s309936",
    name: "0nlineradio MOZART (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s309936/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s309933",
    name: "0nlineradio SCHUBERT (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s309933/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s309934",
    name: "0nlineradio SCHUMANN (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s309934/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s345086",
    name: "1001 CLASSIC COLLECTION (Toronto - Canada)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s345086/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s289739",
    name: "90.5 & 88.5 WQCO (Fort Pierce - FL)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s289739/images/logoq.jpg?t=1741797930000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s268386",
    name: "Allesblasmusik (Passau - Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-radiotime-logos.tunein.com/s268386q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s231720",
    name: "Apostrophe (Stuttgart - Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s231720/images/logoq.png?t=948",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s260558",
    name: "Beautiful Instrumentals Channel (US)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s260558/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s284213",
    name: "Bru Zane Classical Radio (Italy)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-radiotime-logos.tunein.com/s284213q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s319565",
    name: "Classic Progrock FM (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s319565/images/logoq.png?t=876",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s35951",
    name: "Classical California (Los Angeles - CA)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s35951/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s358609",
    name: "Classical Masterpieces – WHFF Radio (Canada)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s358609/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s279629",
    name: "Der Klassik Radio (San Salvador - El Salvador)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-radiotime-logos.tunein.com/s279629q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s362694",
    name: "Electric Light Orchestra Radio (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s362694/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s6372",
    name: "Fine Music Radio (Cape Town - South Africa)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-radiotime-logos.tunein.com/s6372q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s306553",
    name: "HITRADIO BUXTEHUDE Classic (Hamburg - Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s306553/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s55415",
    name: "Houston Public Media Classical - KUHF-HD2 (Houston-Galveston - TX)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s55415/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s343696",
    name: "J7 RADIO (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s343696/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s320276",
    name: "Krautrockworld (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s320276/images/logoq.png?t=883",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s244379",
    name: "La Classica (Belgium)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s244379/images/logoq.jpg?t=3",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s302790",
    name: "Lovely Instrumentals 101.5 FM (US)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s302790/images/logoq.jpg?t=164425",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s148324",
    name: "musicalradio (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s148324/images/logoq.jpg",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s87673",
    name: "Opus (Monterrey - Mexico)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s87673/images/logoq.jpg?t=162585",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s362192",
    name: "Phil Collins Radio (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s362192/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s362100",
    name: "Pink Floyd Radio (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s362100/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s231527",
    name: "Polushon Radio (US)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s231527/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s97464",
    name: "Prog FM (Frankfurt - Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s97464/images/logoq.png?t=906",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s314621",
    name: "Prog Rock (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s314621/images/logoq.png?t=891",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s311379",
    name: "Prog Rock Station (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s311379/images/logoq.png?t=892",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s101578",
    name: "Progman (Nordwalde - Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s101578/images/logoq.png?t=942",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s305749",
    name: "Radio Cafe Zimmermann (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s305749/images/logoq.jpg",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s347523",
    name: "Radio Eltham (Eltham - Australia)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s347523/images/logoq.png?t=3",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s349223",
    name: "Radio Gato Zarzuela (Madrid - Spain)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s349223/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s357045",
    name: "Radio Suita (Slovakia)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s357045/images/logoq.jpg?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s109548",
    name: "Radio Symphony (US)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-radiotime-logos.tunein.com/s109548q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s10869",
    name: "Radio UNAM AM (Mexico City - Mexico)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s10869/images/logoq.jpg?t=1653100370000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s1749",
    name: "Radio Universidad de Concepción (Concepcion - Chile)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s1749/images/logoq.jpg?t=157304",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s238408",
    name: "RauteMusik KLASSIK (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s238408/images/logoq.jpg?t=161436",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s364653",
    name: "Sinfonia Technica – Rewiring Classics Radio (Austria)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s364653/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s321084",
    name: "SOUNDTRACK CHILLOUT (Canada)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s321084/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s234173",
    name: "Southern Rock-Radio (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s234173/images/logoq.png?t=931",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s311640",
    name: "Stone Prog (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s311640/images/logoq.png?t=894",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s360606",
    name: "Symphoniya Wave — Symphoniya.com (Lausanne - Switzerland)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s360606/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s362123",
    name: "Tool Radio (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s362123/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s362559",
    name: "Toto Radio (Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s362559/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s67246",
    name: "WABE Classical (Atlanta - GA)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s67246/images/logoq.jpg?t=156458",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s28152",
    name: "WDAV Classical (Davidson - NC)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s28152/images/logoq.png?t=151302",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s301787",
    name: "Weihnachtsmusik.fm Klassik Weihnachten (Berlin - Germany)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s301787/images/logoq.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s27729",
    name: "WQXR-FM (Newark - NJ)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s27729/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s99874",
    name: "WVIA Arts (Scranton - PA)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s99874/images/logoq.jpg?t=159898",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s224735",
    name: "WZQR Concert Hall (Pineland - FL)",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s224735/images/logoq.png?t=1679230994000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s156850",
    name: "BEAUTIFUL INSTRUMENTALS",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s156850/images/logoq.jpg?t=156873",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s142210",
    name: "CHRISTIAN INSTRUMENTALS",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s142210/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s129352",
    name: "GotRadio Christmas Instrumentals",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s129352/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s311427",
    name: "Instrumental",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s311427/images/logoq.png?t=906",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s321091",
    name: "INSTRUMENTAL JAZZ FOR READING",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s321091/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s311450",
    name: "Instrumental Orchestral Hits",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s311450/images/logoq.png?t=914",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s346896",
    name: "Instrumental Radio",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s346896/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s185738",
    name: "Instrumentals Forever",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s185738q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s363027",
    name: "MIBL Radio Instrumental",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s363027/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s332172",
    name: "MUSICA INSTRUMENTAL CRISTIANA",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s332172/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s351919",
    name: "Musicalmente Instrumental Radio",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s351919/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s351304",
    name: "Naxi Instrumental Radio",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s351304/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s361012",
    name: "omaneo Instrumental",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s361012/images/logoq.png?t=4",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s295253",
    name: "Radio Aripi Spre Cer Instrumental",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s295253/images/logoq.png?t=1707647439000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s355815",
    name: "RHEMA INSTRUMENTAL",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s355815/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s258107",
    name: "Schwany Instrumental",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s258107/images/logoq.jpg?t=159958",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s219265",
    name: "Total Instrumental",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s219265/images/logoq.png?t=937",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s133393",
    name: "Tropicalisima FM Instrumental",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s133393/images/logoq.png?t=3",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s300606",
    name: "011.FM - Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s300606/images/logoq.jpg?t=1654709383000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s47723",
    name: "1.FM Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s47723/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s297919",
    name: "101 Smooth Jazz (London - UK)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s297919q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s255925",
    name: "101 SMOOTH JAZZ MELLOW MIX",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s255925/images/logoq.jpg?t=152346",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s136618",
    name: "96.9 The Oasis (Palm Springs - CA)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s136618/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s213714",
    name: "Abacus.fm Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s213714q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s262659",
    name: "ATL Smooth Jazz Radio",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s262659/images/logoq.png?t=9",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s240423",
    name: "Bay Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s240423/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s354929",
    name: "Beat City Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s354929/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s138091",
    name: "Best Smooth Jazz (London - UK)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s138091/images/logoq.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s189571",
    name: "BluLite Smooth JaZz Radio",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s189571/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s270007",
    name: "Christian Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s270007q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s184641",
    name: "Costa Del Mar - Smooth Jazz (Ibiza - Spain)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s184641/images/logoq.png?t=163415",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s351822",
    name: "Ella Radio - Love Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s351822/images/logoq.jpg?t=1768961119000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s351825",
    name: "Ella Radio - Mellow Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s351825/images/logoq.jpg?t=1768962130000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s352041",
    name: "Ella Radio - Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s352041/images/logoq.jpg?t=1769514006000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s351837",
    name: "Ella Radio- Smooth Jazz 24/7",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s351837/images/logoq.jpg?t=1768965612000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s355568",
    name: "Flow Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s355568/images/logoq.jpg?t=72",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s231747",
    name: "Funky Corner Radio (Italy)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s231747/images/logoq.png?t=158767",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s272723",
    name: "In Power Radio (Newark - NJ)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s272723/images/logoq.jpg?t=1679302261000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s283322",
    name: "Jazz & Chill",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s283322/images/logoq.jpg?t=155923",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s270143",
    name: "JFK Radio (San Joan - Spain)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s270143/images/logoq.jpg?t=1716633748000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s287521",
    name: "KHIH-DB Colorado Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s287521/images/logoq.jpg",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s222839",
    name: "Klassik Radio Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s222839/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s221708",
    name: "LATIN JAZZ",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s221708/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s68932",
    name: "LoungeFM (Wien - Austria)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s68932/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s329191",
    name: "MC2 Smooth Jazz Channel",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s329191/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s143693",
    name: "McQsJazz.com (Los Angeles - CA)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s143693/images/logoq.jpg",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s358820",
    name: "NUCROOZE (Slovakia)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s358820/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s307977",
    name: "ON Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s307977/images/logoq.png?t=155672",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s111775",
    name: "RelaxingJazz.com - Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s111775/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s76627",
    name: "RMF Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s76627/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s336526",
    name: "SMOOTH  JAZZ DELUXE",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s336526/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s311041",
    name: "Smooth Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s311041/images/logoq.png?t=907",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s166521",
    name: "SMOOTH JAZZ (Canada)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s166521/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s274842",
    name: "Smooth Jazz - Tampa Bay (US)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s274842q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s21866",
    name: "Smooth Jazz 101.1 Atlanta",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s21866/images/logoq.jpg",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s354569",
    name: "SMOOTH JAZZ 24/7",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s354569/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s297918",
    name: "Smooth Jazz 24/7 (Los Angeles - CA)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s297918/images/logoq.jpg?t=158638",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s262989",
    name: "Smooth Jazz and More (Ogdensburg - NY)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s262989/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s254882",
    name: "Smooth Jazz CD 101.9 New York",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s254882/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s206902",
    name: "Smooth Jazz Florida",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s206902q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s221605",
    name: "Smooth Jazz Florida Plus (+)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s221605q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s302893",
    name: "Smooth Jazz Lounge",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s302893/images/logoq.jpg?t=151550",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s321564",
    name: "Smooth Jazz Network",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s321564/images/logoq.png?t=1014",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s244748",
    name: "Smooth Jazz New York City",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s244748q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s285775",
    name: "Smooth Jazz Nola (New Orleans - LA)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s285775/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s352184",
    name: "Smooth Jazz Radio",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s352184/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s267208",
    name: "Smooth Jazz Smooth Wave",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s267208q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s364338",
    name: "Smooth Reggae - Instrumental & Jazz Reggae",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s364338/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s16735",
    name: "SmoothJazz.com Global (Monterey - CA)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s16735/images/logoq.png?t=162377",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s106565",
    name: "SmoothJazz.com.pl (Słupsk - Poland)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s106565/images/logoq.jpg?t=636428",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s325768",
    name: "Switch Jazz",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s325768/images/logoq.jpg?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s256110",
    name: "The Jazz Lounge (US)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s256110/images/logoq.jpg?t=1661367013000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s356315",
    name: "The Port FM (Haverhill - MA)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s356315/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s240562",
    name: "The Smooth Jazz Channel (Medina - TN)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s240562/images/logoq.png?t=4",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s119960",
    name: "The Source:Smooth Jazz Radio KJAC.DB",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s119960/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s141862",
    name: "Wave Canada - CJKX-FM-HD2 (Hamilton - Canada)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s141862/images/logoq.jpg?t=159561",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s289039",
    name: "WMEL Radio (US)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s289039/images/logoq.jpg?t=1672854765000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s22718",
    name: "WSBZ-FM The Seabreeze (Destin - FL)",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s22718/images/logoq.jpg",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s309759",
    name: "0nlineradio LO-FI",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s309759/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s214678",
    name: "1.FM lo-fi",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s214678/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s322842",
    name: "bigFM Lofi Focus",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s322842/images/logoq.jpg?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s315868",
    name: "Chilled Beats",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s315868/images/logoq.png?t=931",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s268754",
    name: "ChillHop",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s268754/images/logoq.png?t=1710402043000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s355443",
    name: "dewoq Lo-Fi Radio",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s355443/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s355015",
    name: "ExpertMusic Business - Lo-Fi",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s355015/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s362304",
    name: "Faye Webster Radio",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s362304/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s321680",
    name: "Hotmix Lo-Fi",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s321680/images/logoq.jpg?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s306649",
    name: "I Love Chillhop",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s306649/images/logoq.png?t=159373",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s361228",
    name: "K-Drama Hub Seoul Radio",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s361228/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s350566",
    name: "Liberty Lo-fi Beats",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s350566/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s310777",
    name: "Lofi",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s310777/images/logoq.png?t=922",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s303481",
    name: "Lofi 24/7",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s303481/images/logoq.jpg?t=151663",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s341191",
    name: "Lofi Radio",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s341191/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s352571",
    name: "Lofi Radio",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s352571/images/logoq.png?t=60",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s352697",
    name: "LOFI RADIO",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s352697/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s362242",
    name: "Mac DeMarco Radio",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s362242/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s353423",
    name: "Music Radio Lofi",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s353423/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s352443",
    name: "Venus Lofi Radio",
    group: "lo-fi",
    source: "TuneIn",
    detail: "Lo-Fi",
    image: "https://cdn-profiles.tunein.com/s352443/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lo-Fi"
  },
  {
    id: "ti-s126408",
    name: "1.FM Spa",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s126408/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s356804",
    name: "1st Greek New Age FLAC Radio (Marousi - Greece)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s356804/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321150",
    name: "417 Hertz - Solfeggio Scale - Clean negative energy (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321150/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321148",
    name: "432 Hertz - Theta Binaural - Depression & Anxiety (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321148/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321144",
    name: "528 Hertz - Tone of Miracles (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321144/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s355191",
    name: "Afrikana Radio – Calm & Meditation",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s355191/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321190",
    name: "BLUE HUE (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321190/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321080",
    name: "CALMING PIANO (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321080/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321082",
    name: "CELLO CHILL",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321082/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s358061",
    name: "Chillhouse Live (Belgern-Schildau - Germany)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s358061/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321087",
    name: "CHRISTMAS SPA",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321087/images/logoq.png?t=5",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321066",
    name: "DREAM PIANO - CALMING FELT PIANO (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321066/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s310375",
    name: "Epic Lounge - Sleep & Meditation",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s310375/images/logoq.jpg?t=164594",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s310368",
    name: "Epic Lounge - SPA Lounge",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s310368/images/logoq.jpg?t=164594",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321118",
    name: "ESCAPE (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321118/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s349575",
    name: "Esoterica Fm New Age",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s349575/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s309595",
    name: "FG CHIC SPA",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s309595/images/logoq.jpg?t=1732196508000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s361275",
    name: "FG YOGA",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s361275/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321130",
    name: "GLACIAL CELLO (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321130/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s99666",
    name: "GotRadio Guitar Genius (Sacramento - CA)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s99666/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s49689",
    name: "GotRadio New Age Nuance (Sacramento - CA)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s49689/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s99668",
    name: "GotRadio Piano Perfect (Sacramento - CA)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s99668/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s320485",
    name: "Klassik Radio Easy Relax (Augsburg - Germany)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s320485/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s250283",
    name: "Klassik Radio Easy Work Lounge (Augsburg - Germany)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s250283/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s320500",
    name: "Klassik Radio Yoga",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s320500/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321135",
    name: "MAGIC NIGHT (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321135/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s329186",
    name: "MC2 New Age Channel",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s329186/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s318851",
    name: "Meditation",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s318851/images/logoq.png?t=879",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s361884",
    name: "Meditations in Nature",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s361884/images/logoq.jpg?t=1791576207000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s322961",
    name: "MIDDAY MEDITATION RADIO",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s322961/images/logoq.jpg?t=1674122893000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321065",
    name: "MOST BEAUTIFUL PIANO EVER (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321065/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s353413",
    name: "Music Radio Zen",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s353413/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s361945",
    name: "New Age",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s361945/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s359620",
    name: "New Age Notes Radio",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s359620/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s307976",
    name: "ON Relax (Bayreuth - Germany)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s307976/images/logoq.png?t=155672",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321117",
    name: "ONE (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321117/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s352102",
    name: "Perfect New Age",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s352102/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s325134",
    name: "Radio 7 - Yoga",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s325134/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s247230",
    name: "Radio Art - Spa",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s247230/images/logoq.jpg?t=152690",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s247229",
    name: "Radio Art - Yoga",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s247229/images/logoq.jpg?t=152690",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s281875",
    name: "RPR1. Yoga Sounds",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s281875/images/logoq.jpg?t=157609",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s238367",
    name: "Rádio Studio Souto New Age",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-radiotime-logos.tunein.com/s238367q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s364350",
    name: "Sahaja Yoga Bhajans",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s364350/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s364367",
    name: "Sahaja Yoga Instrumental",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s364367/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s364078",
    name: "Sahaja Yoga Radio",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s364078/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321067",
    name: "SOFTEST PIANO EVER (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321067/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321131",
    name: "SOLITUDE (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321131/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s142243",
    name: "SPA",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s142243/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321209",
    name: "SPA THERAPY",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321209/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321161",
    name: "STUDY PIANO (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321161/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321134",
    name: "WALK IN THE FOREST (Canada)",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321134/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321213",
    name: "WOMAN SPA",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321213/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s321211",
    name: "YOGA RETREAT",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s321211/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s280928",
    name: "Yoga Sounds",
    group: "new-age",
    source: "TuneIn",
    detail: "New Age",
    image: "https://cdn-profiles.tunein.com/s280928/images/logoq.png?t=3",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, New Age"
  },
  {
    id: "ti-s309764",
    name: "0nlineradio PIANO",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s309764/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s48961",
    name: "1.FM Calming Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s48961/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s48965",
    name: "1.FM Classical Music",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s48965/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s250911",
    name: "1000 HITS Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-radiotime-logos.tunein.com/s250911q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s90495",
    name: "181.FM Classical Jazz",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-radiotime-logos.tunein.com/s90495q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s95096",
    name: "181.FM Classical Music",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-radiotime-logos.tunein.com/s95096q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s361820",
    name: "1st Greek Classical FLAC Radio",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s361820/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s361885",
    name: "Acoustic Serenity",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s361885/images/logoq.jpg?t=1791475348000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321232",
    name: "ADVENT PIANO",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321232/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s31824",
    name: "All Classical Portland",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s31824/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s295679",
    name: "Allzic Radio Classic Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s295679/images/logoq.png?t=155895",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s21414",
    name: "BTPM Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s21414/images/logoq.png?t=1757706543000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321168",
    name: "CALMING CLASSICAL",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321168/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s182573",
    name: "CapRadio Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s182573/images/logoq.jpg",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310038",
    name: "CHILLOUT PIANO by Epic Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310038/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s191786",
    name: "CHOPIN",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s191786/images/logoq.png?t=3",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310030",
    name: "CHOPIN by Epic Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310030/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310036",
    name: "CHRISTMAS PIANO by Epic Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310036/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s142213",
    name: "CLASSICAL GUITAR",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s142213/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s103212",
    name: "Classical Guitar Radio",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s103212/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s142716",
    name: "Classical Jazz Radio",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s142716/images/logoq.png?t=156226",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s142214",
    name: "CLASSICAL MIX",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s142214/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s280686",
    name: "Classical Music Archives",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-radiotime-logos.tunein.com/s280686q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s262360",
    name: "Classical Oasis",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s262360/images/logoq.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s132813",
    name: "CLASSICAL PIANO",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s132813/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s351824",
    name: "Ella Radio - Mellow Piano Jazz",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s351824/images/logoq.jpg?t=1768961735000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s351832",
    name: "Ella Radio - Piano Jazz",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s351832/images/logoq.jpg?t=1768963701000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s351833",
    name: "Ella Radio - Piano Trios",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s351833/images/logoq.jpg?t=1768963945000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320512",
    name: "EPIC CLASSICAL - Classical Background Music",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320512/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320517",
    name: "EPIC CLASSICAL - Classical Chillout",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320517/images/logoq.jpg?t=1657644906000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320521",
    name: "EPIC CLASSICAL - Classical Christmas",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320521/images/logoq.jpg?t=1657647410000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320520",
    name: "EPIC CLASSICAL - Classical Coffee Bar",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320520/images/logoq.jpg?t=1657646489000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320509",
    name: "EPIC CLASSICAL - Classical Dinner",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320509/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320526",
    name: "EPIC CLASSICAL - Classical Fairy Tales",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320526/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320514",
    name: "EPIC CLASSICAL - Classical Guitar",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320514/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320507",
    name: "EPIC CLASSICAL - Classical Hotel Lounge",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320507/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320527",
    name: "EPIC CLASSICAL - Classical Lounge",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320527/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320519",
    name: "EPIC CLASSICAL - Classical Love Music",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320519/images/logoq.jpg?t=1657646325000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320522",
    name: "EPIC CLASSICAL - Classical Meditation",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320522/images/logoq.jpg?t=1657647568000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320516",
    name: "EPIC CLASSICAL - Classical Music for Sleep",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320516/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320528",
    name: "EPIC CLASSICAL - Classical Nighttime",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320528/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320529",
    name: "EPIC CLASSICAL - Classical Oldies",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320529/images/logoq.jpg?t=1657649508000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320525",
    name: "EPIC CLASSICAL - Classical Orchestral",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320525/images/logoq.jpg?t=1657648673000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320524",
    name: "EPIC CLASSICAL - Classical Pan Flute",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320524/images/logoq.jpg?t=1657648571000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320513",
    name: "EPIC CLASSICAL - Classical Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320513/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320531",
    name: "EPIC CLASSICAL - Classical Pop",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320531/images/logoq.jpg?t=1657649636000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320515",
    name: "EPIC CLASSICAL - Classical Relax",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320515/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320511",
    name: "EPIC CLASSICAL - Classical Restaurant Music",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320511/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320508",
    name: "EPIC CLASSICAL - Classical Romance",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320508/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320510",
    name: "EPIC CLASSICAL - Classical Study",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320510/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320530",
    name: "EPIC CLASSICAL - Classical Sunrise",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320530/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320523",
    name: "EPIC CLASSICAL - Classical Violin",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320523/images/logoq.jpg?t=1657648211000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320518",
    name: "EPIC CLASSICAL - Modern Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320518/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310369",
    name: "Epic Lounge - Piano & Jazz Bar",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310369/images/logoq.jpg?t=164594",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s309940",
    name: "GPB Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s309940/images/logoq.png?t=1744234299000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310029",
    name: "GREAT PIANO CONCERTS by Epic Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310029/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310031",
    name: "GRIEG by Epic Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310031/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321208",
    name: "HAPPY DENTIST",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321208/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321086",
    name: "HOLIDAY SOLO PIANO",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321086/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321689",
    name: "Hotmix Piano Bar",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321689/images/logoq.jpg?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321218",
    name: "INSPIRATION PIANO",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321218/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s338979",
    name: "Italy Classical Radio",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s338979/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s133516",
    name: "JAZZ PIANO",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s133516/images/logoq.png?t=4",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s235835",
    name: "JAZZ RADIO PIANO JAZZ",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-radiotime-logos.tunein.com/s235835q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s250282",
    name: "Klassik Radio Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s250282/images/logoq.jpg?t=4",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320484",
    name: "Klassik Radio Piano New Classics",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320484/images/logoq.jpg?t=3",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s308918",
    name: "KVPR Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s308918/images/logoq.jpg?t=1668090987000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s342459",
    name: "LA GRANDE MUSIQUE Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s342459/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s282479",
    name: "LIGHT CLASSICAL",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s282479/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321099",
    name: "LIGHT JAZZ PIANO",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321099/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321174",
    name: "LIGHT MOZART",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321174/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310033",
    name: "LISZT by Epic Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310033/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s88374",
    name: "Maine Public Classical - WMEA-HD2",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s88374/images/logoq.jpg?t=151498",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310035",
    name: "MODERN PIANO by Epic Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310035/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s22654",
    name: "Nashville Classical Radio",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s22654/images/logoq.png?t=160142",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s342655",
    name: "Onic Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s342655/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321173",
    name: "PEACEFUL BACH",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321173/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321172",
    name: "PEACEFUL CELLO",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321172/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321166",
    name: "PEACEFUL GUITAR",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321166/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321170",
    name: "PEACEFUL PIANO & GUITAR",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321170/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s309263",
    name: "Performance Today",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s309263/images/logoq.png?t=158834",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310028",
    name: "PIANO COVERHITS by Epic Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310028/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310899",
    name: "Piano Dreams",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310899/images/logoq.png?t=925",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321222",
    name: "PIANO HYMNS",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s321222/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s249710",
    name: "Positively Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s249710/images/logoq.png?t=159224",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s221684",
    name: "POULENC",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s221684/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s247239",
    name: "Radio Art - Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s247239/images/logoq.jpg?t=152759",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s154174",
    name: "Radio Art - Piano & Guitar",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s154174/images/logoq.jpg?t=152690",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s187590",
    name: "Radio Art - Solo Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s187590/images/logoq.jpg?t=152690",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s320293",
    name: "Relaxing Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s320293/images/logoq.png?t=878",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310037",
    name: "ROMANTIC PIANO by Epic Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310037/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s177672",
    name: "SCHUBERT",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s177672/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s142209",
    name: "SOLO GUITAR",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s142209/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s132816",
    name: "SOLO PIANO",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s132816/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s132811",
    name: "SOLO PIANO & GUITAR",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s132811/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s310034",
    name: "SOLO PIANO by Epic Piano",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s310034/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s280576",
    name: "Sonatica Classical Radio Online frequency",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-radiotime-logos.tunein.com/s280576q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s35299",
    name: "SPR Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s35299/images/logoq.jpg?t=160799",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s321167",
    name: "SUPER PEACEFUL GUITAR",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-radiotime-logos.tunein.com/s0q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s325770",
    name: "Switch Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s325770/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s238788",
    name: "WCMU Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s238788/images/logoq.jpg?t=1677830737000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s28807",
    name: "WFMT Classical Music",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s28807/images/logoq.png?t=161610",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s51195",
    name: "Whisperings: Solo Piano Radio",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-radiotime-logos.tunein.com/s51195q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s128726",
    name: "WKAR Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-radiotime-logos.tunein.com/s30077q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s22608",
    name: "WRTI Classical",
    group: "piano",
    source: "TuneIn",
    detail: "Piano",
    image: "https://cdn-profiles.tunein.com/s22608/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Piano"
  },
  {
    id: "ti-s233145",
    name: "1.FM Movie Soundtracks Hits",
    group: "soundtracks",
    source: "TuneIn",
    detail: "Soundtracks",
    image: "https://cdn-profiles.tunein.com/s233145/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Soundtracks"
  },
  {
    id: "ti-s164357",
    name: "20th Century Soundtrack",
    group: "soundtracks",
    source: "TuneIn",
    detail: "Soundtracks",
    image: "https://cdn-profiles.tunein.com/s164357/images/logoq.jpg?t=155051",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Soundtracks"
  },
  {
    id: "ti-s335109",
    name: "CRB's Perfect Holiday Party Soundtrack",
    group: "soundtracks",
    source: "TuneIn",
    detail: "Soundtracks",
    image: "https://cdn-profiles.tunein.com/s335109/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Soundtracks"
  },
  {
    id: "ti-s309689",
    name: "egoFM - Soundtrack",
    group: "soundtracks",
    source: "TuneIn",
    detail: "Soundtracks",
    image: "https://cdn-profiles.tunein.com/s309689/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Soundtracks"
  },
  {
    id: "ti-s97088",
    name: "FFH Soundtrack",
    group: "soundtracks",
    source: "TuneIn",
    detail: "Soundtracks",
    image: "https://cdn-profiles.tunein.com/s97088/images/logoq.jpg",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Soundtracks"
  },
  {
    id: "ti-s357497",
    name: "Klassik Radio Movie Dreams",
    group: "soundtracks",
    source: "TuneIn",
    detail: "Soundtracks",
    image: "https://cdn-profiles.tunein.com/s357497/images/logoq.png?t=1781048105000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Soundtracks"
  },
  {
    id: "ti-s320482",
    name: "Klassik Radio Movie Heroes",
    group: "soundtracks",
    source: "TuneIn",
    detail: "Soundtracks",
    image: "https://cdn-profiles.tunein.com/s320482/images/logoq.jpg?t=1779194569000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Soundtracks"
  },
  {
    id: "ti-s321077",
    name: "MOVIE THEMES",
    group: "soundtracks",
    source: "TuneIn",
    detail: "Soundtracks",
    image: "https://cdn-profiles.tunein.com/s321077/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Soundtracks"
  },
  {
    id: "ti-s343790",
    name: "Radio Company Soundtrack",
    group: "soundtracks",
    source: "TuneIn",
    detail: "Soundtracks",
    image: "https://cdn-profiles.tunein.com/s343790/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Soundtracks"
  },
  {
    id: "ti-s314386",
    name: "Soundtrack",
    group: "soundtracks",
    source: "TuneIn",
    detail: "Soundtracks",
    image: "https://cdn-profiles.tunein.com/s314386/images/logoq.png?t=890",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Soundtracks"
  },
  {
    id: "ti-s266086",
    name: "Ambi Nature Radio (Sleep - Relaxation & Meditation)",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-radiotime-logos.tunein.com/s266086q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s322147",
    name: "BINAURAL RESTORE",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s322147/images/logoq.png?t=3",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s310376",
    name: "Epic Lounge - Nature Sounds",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s310376/images/logoq.jpg?t=164594",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s336421",
    name: "NATURE RADIO SLEEP",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s336421/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s321187",
    name: "WHISPERING ANGEL",
    group: "ambient",
    source: "TuneIn",
    detail: "Ambient",
    image: "https://cdn-profiles.tunein.com/s321187/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Ambient"
  },
  {
    id: "ti-s187592",
    name: "Radio Art - Solo Harp",
    group: "celtic-instrumental",
    source: "TuneIn",
    detail: "Celtic Instrumental",
    image: "https://cdn-profiles.tunein.com/s187592/images/logoq.jpg?t=152690",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Celtic Instrumental"
  },
  {
    id: "ti-s318238",
    name: "Anechoic Chamber Music",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s318238/images/logoq.png?t=885",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s191785",
    name: "CHAMBER MUSIC",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s191785/images/logoq.png?t=3",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s179297",
    name: "HAYDN",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s179297/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s266704",
    name: "Sonar Lounge Music Radio",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s266704/images/logoq.jpg?t=152517",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s309474",
    name: "YourClassical Chamber Music",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s309474/images/logoq.jpg?t=161836",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s7332",
    name: "YourClassical MPR",
    group: "classical",
    source: "TuneIn",
    detail: "Classical",
    image: "https://cdn-profiles.tunein.com/s7332/images/logoq.jpg?t=161836",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Classical"
  },
  {
    id: "ti-s361706",
    name: "24/7 Classical",
    group: "guitar-instrumental",
    source: "TuneIn",
    detail: "Guitar Instrumental",
    image: "https://cdn-profiles.tunein.com/s361706/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Guitar Instrumental"
  },
  {
    id: "ti-s268677",
    name: "Classical FM Sydney",
    group: "guitar-instrumental",
    source: "TuneIn",
    detail: "Guitar Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s268677q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Guitar Instrumental"
  },
  {
    id: "ti-s233642",
    name: "Classical Guitar Northwest",
    group: "guitar-instrumental",
    source: "TuneIn",
    detail: "Guitar Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s233642q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Guitar Instrumental"
  },
  {
    id: "ti-s192669",
    name: "Hits on Guitar",
    group: "guitar-instrumental",
    source: "TuneIn",
    detail: "Guitar Instrumental",
    image: "https://cdn-profiles.tunein.com/s192669/images/logoq.jpg?t=157589",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Guitar Instrumental"
  },
  {
    id: "ti-s250092",
    name: "Instrumentales De Oro Radio",
    group: "guitar-instrumental",
    source: "TuneIn",
    detail: "Guitar Instrumental",
    image: "https://cdn-profiles.tunein.com/s250092/images/logoq.png?t=1682787529000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Guitar Instrumental"
  },
  {
    id: "ti-s321100",
    name: "JAZZ GUITAR LIGHT",
    group: "guitar-instrumental",
    source: "TuneIn",
    detail: "Guitar Instrumental",
    image: "https://cdn-profiles.tunein.com/s321100/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Guitar Instrumental"
  },
  {
    id: "ti-s247240",
    name: "Radio Art - Guitar",
    group: "guitar-instrumental",
    source: "TuneIn",
    detail: "Guitar Instrumental",
    image: "https://cdn-profiles.tunein.com/s247240/images/logoq.jpg?t=152759",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Guitar Instrumental"
  },
  {
    id: "ti-s321169",
    name: "RELAXING GUITAR",
    group: "guitar-instrumental",
    source: "TuneIn",
    detail: "Guitar Instrumental",
    image: "https://cdn-profiles.tunein.com/s321169/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Guitar Instrumental"
  },
  {
    id: "ti-s321097",
    name: "EASY LISTENING - CLASSICS",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-radiotime-logos.tunein.com/s0q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s142242",
    name: "FLUTE",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s142242/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s299278",
    name: "Listening Pearls",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s299278/images/logoq.png?t=151549",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s361881",
    name: "Meditative Flute",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s361881/images/logoq.jpg?t=1791576093000",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s142247",
    name: "NATIVE FLUTE",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s142247/images/logoq.png?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s187593",
    name: "Radio Art - Solo Flute",
    group: "instrumental",
    source: "TuneIn",
    detail: "Instrumental",
    image: "https://cdn-profiles.tunein.com/s187593/images/logoq.jpg?t=152690",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Instrumental"
  },
  {
    id: "ti-s279962",
    name: "Jazz90.1 Smooth Grooves Radio",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s279962/images/logoq.png?t=164329",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s255585",
    name: "Smooth Lounge Radio",
    group: "jazz-instrumental",
    source: "TuneIn",
    detail: "Jazz Instrumental",
    image: "https://cdn-profiles.tunein.com/s255585/images/logoq.jpg?t=156337",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Jazz Instrumental"
  },
  {
    id: "ti-s358923",
    name: "Chill fm (Thessaloniki - Greece)",
    group: "lounge",
    source: "TuneIn",
    detail: "Lounge",
    image: "https://cdn-profiles.tunein.com/s358923/images/logoq.png?t=2",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lounge"
  },
  {
    id: "ti-s308844",
    name: "lounge plus (Berlin - Germany)",
    group: "lounge",
    source: "TuneIn",
    detail: "Lounge",
    image: "https://cdn-profiles.tunein.com/s308844/images/logoq.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lounge"
  },
  {
    id: "ti-s355357",
    name: "Moonrise Radio - Relaxing Music & Chillout (Centru - Romania)",
    group: "lounge",
    source: "TuneIn",
    detail: "Lounge",
    image: "https://cdn-profiles.tunein.com/s355357/images/logoq.jpg?t=1",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Lounge"
  },
  {
    id: "ti-s143560",
    name: "Rainwave Game Soundtracks",
    group: "soundtracks",
    source: "TuneIn",
    detail: "Soundtracks",
    image: "https://cdn-radiotime-logos.tunein.com/s143560q.png",
    streamUrl: null,
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "TuneIn, Soundtracks"
  }
], Ff = {
  groups: BT,
  stations: VT
};
function jT(t) {
  return {
    id: t.id,
    name: t.name,
    detail: t.detail,
    image: t.image || void 0,
    source: t.source,
    streamUrl: t.streamUrl || void 0,
    tags: t.tags || void 0
  };
}
var kT = Ff.groups, $T = Ff.stations, tr = kT.map((t) => ({
  id: t.id,
  name: t.name,
  source: t.source,
  stations: $T.filter((i) => i.group === t.id).map(jT)
})), $l = tr.flatMap((t) => t.stations);
function Bf(t) {
  try {
    const i = new URL(t);
    let r = i.hostname.toLowerCase().replace(/^www\./, "");
    /^ice\d+\.somafm\.com$/.test(r) && (r = "somafm.com");
    const o = i.port && i.port !== "80" && i.port !== "443" ? `:${i.port}` : "", a = i.pathname.replace(/\/+$/, "").toLowerCase();
    return `${r}${o}${a}`;
  } catch {
    return t.trim().toLowerCase();
  }
}
var HT = new Map($l.map((t) => [t.id, t])), JT = new Map($l.flatMap((t) => t.streamUrl ? [[Bf(t.streamUrl), t]] : []));
function GT(t) {
  const i = HT.get(t.id);
  if (i) return i;
  if (t.streamUrl)
    return JT.get(Bf(t.streamUrl));
}
function WT(t) {
  const i = t.trim().toLowerCase();
  if (!i) return [];
  const r = [], o = [];
  for (const a of $l) a.name.toLowerCase().includes(i) ? r.push(a) : `${a.detail}
${a.tags ?? ""}`.toLowerCase().includes(i) && o.push(a);
  return [...r, ...o];
}
var KT = "https://all.api.radio-browser.info/json", Vf = "https://opml.radiotime.com", YT = "https://somafm.com/channels.json", ZT = "https://dir.xiph.org/yp.xml", XT = [
  "https://iptv-org.github.io/iptv/index.radio.m3u",
  "https://iptv-org.github.io/index.radio.m3u",
  "https://iptv-org.github.io/iptv/categories/radio.m3u"
], QT = 24 * 3600 * 1e3, e3 = 600 * 1e3, jf = 40, No = (t) => t?.replace(/^http:\/\//, "https://"), Ut = (t) => typeof t == "string" ? t.trim() : "", kf = (t) => /^https?:\/\/\S+$/i.test(t);
function $f(t) {
  let i = 14695981039346656037n;
  for (const r of new TextEncoder().encode(t)) i = (i ^ BigInt(r)) * 1099511628211n & 18446744073709551615n;
  return i.toString(16);
}
function t3(t) {
  return t.filter((i) => i?.url_resolved && i?.name?.trim()).map((i) => ({
    id: `rb-${i.stationuuid}`,
    name: i.name.trim(),
    detail: [
      i.country,
      i.codec,
      i.bitrate ? `${i.bitrate} kbps` : ""
    ].filter(Boolean).join(" · "),
    image: No(i.favicon) || void 0,
    source: "Radio Browser",
    streamUrl: i.url_resolved
  }));
}
function n3(t) {
  return t.filter((i) => i?.type === "audio" && i?.item === "station" && i?.guide_id).map((i) => ({
    id: `ti-${i.guide_id}`,
    name: i.text,
    detail: [i.subtext, i.bitrate ? `${i.bitrate} kbps` : ""].filter(Boolean).join(" · "),
    image: No(i.image),
    source: "TuneIn"
  }));
}
function i3(t) {
  const i = Array.isArray(t?.channels) ? t.channels : [], r = /* @__PURE__ */ new Set(), o = [];
  for (const a of i) {
    const u = Ut(a?.id), d = Ut(a?.title), f = (Array.isArray(a?.playlists) ? a.playlists : []).find((y) => Ut(y?.format).toLowerCase() === "mp3" && Ut(y?.url));
    if (!u || !d || !f || r.has(u)) continue;
    r.add(u);
    const h = Ut(a.genre).split("|").map((y) => y.trim()).filter(Boolean);
    o.push({
      id: `sm-${u}`,
      name: d,
      detail: [h.join(", "), Ut(a.description)].filter(Boolean).join(" · "),
      image: No(Ut(a.xlimage) || Ut(a.largeimage) || Ut(a.image) || void 0),
      source: "SomaFM",
      streamUrl: Ut(f.url)
    });
  }
  return o;
}
var r3 = /* @__PURE__ */ new Set([
  "and",
  "the",
  "for",
  "radio",
  "fm",
  "music",
  "various",
  "misc",
  "mix",
  "all",
  "best",
  "from",
  "with",
  "online"
]);
function s3(t) {
  const i = [];
  for (const r of t.toLowerCase().split(/[^\p{L}\p{N}]+/u))
    if (r.length >= 3 && !r3.has(r) && !i.includes(r) && i.push(r), i.length === 5) break;
  return i;
}
function o3(t) {
  const i = Ut(t.listen_url), r = Ut(t.server_name);
  if (!r || !kf(i)) return;
  const o = (t.server_type ?? "").toLowerCase(), a = o.includes("aacp") ? "aac+" : o.includes("aac") ? "aac" : o.includes("mpeg") || o.includes("mp3") ? "mp3" : o.includes("ogg") || o.includes("vorbis") ? "ogg" : o.includes("opus") ? "opus" : "", u = parseInt(Ut(t.bitrate), 10);
  return {
    id: `ic-${$f(i)}`,
    name: r,
    detail: [
      a,
      u > 0 ? `${u} kbps` : "",
      s3(t.genre ?? "").join(", ")
    ].filter(Boolean).join(" · "),
    source: "Icecast",
    streamUrl: i
  };
}
var Hf = [
  "server_name",
  "server_type",
  "bitrate",
  "listen_url",
  "genre"
];
function a3(t) {
  return t.replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (i, r) => {
    const o = r.toLowerCase();
    if (o === "amp") return "&";
    if (o === "lt") return "<";
    if (o === "gt") return ">";
    if (o === "quot") return '"';
    if (o === "apos") return "'";
    const a = o[1] === "x" ? parseInt(o.slice(2), 16) : parseInt(o.slice(1), 10);
    try {
      return String.fromCodePoint(a);
    } catch {
      return i;
    }
  });
}
function l3(t) {
  const i = new DOMParser().parseFromString(t, "text/xml");
  if (i.getElementsByTagName("parsererror").length) throw new Error("Icecast feed could not be parsed");
  return Array.from(i.getElementsByTagName("entry")).map((r) => {
    const o = {};
    for (const a of Hf) {
      const u = r.getElementsByTagName(a)[0];
      u && (o[a] = u.textContent ?? "");
    }
    return o;
  });
}
function u3(t) {
  const i = [];
  for (const r of t.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/g)) {
    const o = {};
    for (const a of Hf) {
      const u = new RegExp(`<${a}\\b[^>]*>([\\s\\S]*?)</${a}>`).exec(r[1]);
      u && (o[a] = u[1].split(/(<!\[CDATA\[[\s\S]*?\]\]>)/).map((d) => d.startsWith("<![CDATA[") ? d.slice(9, -3) : a3(d)).join(""));
    }
    i.push(o);
  }
  return i;
}
function c3(t) {
  const i = typeof DOMParser < "u" ? l3(t) : u3(t), r = /* @__PURE__ */ new Set(), o = [];
  for (const a of i) {
    const u = o3(a);
    u && !r.has(u.streamUrl) && (r.add(u.streamUrl), o.push(u));
  }
  return o;
}
function d3(t) {
  const i = {};
  let r = "", o = "", a = !1, u = !1, d = -1;
  for (let f = Math.max(t.indexOf(" "), 0); f < t.length; f++) {
    const h = t[f];
    if (a) h === '"' ? (a = !1, i[r.toLowerCase()] = o, r = "", o = "", u = !1) : o += h;
    else if (h === ",") {
      d = f + 1;
      break;
    } else h === '"' ? a = !0 : h === "=" ? u = !0 : h === " " ? r = "" : u || (r += h);
  }
  return {
    attrs: i,
    name: d >= 0 ? t.slice(d).trim() : ""
  };
}
function p3(t) {
  const i = [], r = /* @__PURE__ */ new Set();
  let o;
  for (const a of t.split(/\r?\n/)) {
    const u = a.trim();
    if (u.startsWith("#EXTINF")) o = d3(u);
    else {
      if (!u || u.startsWith("#")) continue;
      if (o) {
        const d = o;
        if (o = void 0, !kf(u) || !d.name || r.has(u)) continue;
        r.add(u);
        const f = (d.attrs["group-title"] ?? "").split(";").map((T) => T.trim()).filter(Boolean), h = d.attrs["tvg-id"]?.split(".").pop()?.split("@")[0] ?? "", y = d.attrs["tvg-id"]?.includes(".") && h.length === 2 ? h.toUpperCase() : "";
        i.push({
          id: `iptv-${$f(u)}`,
          name: d.name,
          detail: [y, f.join(", ")].filter(Boolean).join(" · "),
          image: No(d.attrs["tvg-logo"] || void 0),
          source: "iptv-org",
          streamUrl: u
        });
      }
    }
  }
  return i;
}
function f3(t) {
  for (const i of t.split(/\r?\n/)) {
    let r = i.trim();
    if (/^file1=/i.test(r) && (r = r.slice(6).trim()), /^https?:\/\//i.test(r)) return r;
  }
}
async function Hl(t) {
  const i = await fetch(t);
  if (!i.ok) throw new Error(`${i.status} from ${t}`);
  return i.text();
}
var Jl = class {
  constructor(t, i) {
    yi(this, "key", void 0), yi(this, "download", void 0), yi(this, "stations", []), yi(this, "fetched", 0), yi(this, "inflight", void 0), yi(this, "lastFailure", void 0), yi(this, "diskChecked", !1), this.key = t, this.download = i;
  }
  loadDisk() {
    if (!this.diskChecked) {
      this.diskChecked = !0;
      try {
        const t = JSON.parse(localStorage.getItem(this.key) ?? "null");
        t && Array.isArray(t.stations) && typeof t.fetched == "number" && (this.stations = t.stations, this.fetched = t.fetched);
      } catch {
      }
    }
  }
  saveDisk() {
    try {
      localStorage.setItem(this.key, JSON.stringify({
        fetched: this.fetched,
        stations: this.stations
      }));
    } catch {
    }
  }
  async refresh() {
    const t = await this.download();
    if (!t.length) throw new Error("feed had no stations");
    this.stations = t, this.fetched = Date.now(), this.lastFailure = void 0, this.saveDisk();
  }
  async all() {
    if (this.loadDisk(), this.stations.length && Date.now() - this.fetched < QT) return this.stations;
    if (!this.inflight) {
      if (this.lastFailure && Date.now() - this.lastFailure.at < e3) {
        if (this.stations.length) return this.stations;
        throw this.lastFailure.error;
      }
      this.inflight = this.refresh().catch((t) => {
        throw this.lastFailure = {
          at: Date.now(),
          error: t
        }, t;
      }).finally(() => this.inflight = void 0);
    }
    try {
      await this.inflight;
    } catch (t) {
      if (!this.stations.length) throw t;
    }
    return this.stations;
  }
  async search(t, i = jf) {
    return m3(await this.all(), t, i);
  }
};
function m3(t, i, r = jf) {
  const o = i.trim().toLowerCase();
  if (!o) return [];
  const a = (f) => `${f.detail}
${f.tags ?? ""}`.toLowerCase(), u = t.filter((f) => f.name.toLowerCase().includes(o)), d = t.filter((f) => !f.name.toLowerCase().includes(o) && a(f).includes(o));
  return [...u, ...d].slice(0, r);
}
var g3 = new Jl("radio.somafm.v1", async () => i3(await Uo(YT))), h3 = new Jl("radio.icecast.v1", async () => c3(await Hl(ZT))), b3 = new Jl("radio.iptvorg.v1", async () => {
  let t = /* @__PURE__ */ new Error("iptv-org radio playlist is not available");
  for (const i of XT) try {
    const r = await Hl(i);
    if (!r.includes("#EXTM3U")) throw new Error(`${i} is not an M3U playlist`);
    return p3(r);
  } catch (r) {
    t = r;
  }
  throw t;
});
async function Uo(t) {
  const i = await fetch(t);
  if (!i.ok) throw new Error(`${i.status} from ${t}`);
  return i.json();
}
async function v3(t) {
  return t3(await Uo(`${KT}/stations/search?${new URLSearchParams({
    name: t,
    limit: "40",
    hidebroken: "true",
    order: "clickcount",
    reverse: "true"
  })}`));
}
async function I3(t) {
  return n3((await Uo(`${Vf}/Search.ashx?${new URLSearchParams({
    query: t,
    types: "station",
    render: "json"
  })}`)).body ?? []);
}
async function _3(t) {
  const i = [
    ["TuneIn", I3(t)],
    ["Radio Browser", v3(t)],
    ["SomaFM", g3.search(t)],
    ["Icecast", h3.search(t)],
    ["iptv-org", b3.search(t)]
  ], r = await Promise.allSettled(i.map(([, d]) => d)), o = [], a = [], u = /* @__PURE__ */ new Set();
  for (const d of WT(t))
    u.has(d.id) || (u.add(d.id), o.push(d));
  return r.forEach((d, f) => {
    if (d.status === "fulfilled") for (const h of d.value) {
      const y = GT(h) ?? h;
      u.has(y.id) || (u.add(y.id), o.push(y));
    }
    else
      console.warn(`[radio] ${i[f][0]} search failed`, d.reason), a.push(i[f][0]);
  }), {
    stations: o,
    failed: a
  };
}
function T3(t) {
  return t.find((i) => i?.url && !/notcompatible/i.test(i.url))?.url;
}
async function w3(t) {
  let i;
  try {
    i = new URL(t).pathname.toLowerCase();
  } catch {
    return;
  }
  if (!(!i.endsWith(".pls") && !i.endsWith(".m3u")))
    try {
      return f3(await Hl(t));
    } catch (r) {
      console.warn("[radio] could not read playlist", r);
      return;
    }
}
async function E3(t) {
  let i = t.streamUrl;
  if (!i) {
    const r = t.id.replace(/^ti-/, "");
    if (i = T3((await Uo(`${Vf}/Tune.ashx?${new URLSearchParams({
      id: r,
      render: "json"
    })}`)).body ?? []), !i) throw new Error("TuneIn gave no playable stream for this station");
  }
  return await w3(i) ?? i;
}
var on = /* @__PURE__ */ tn(null), Pi = /* @__PURE__ */ tn("stopped"), Gl = /* @__PURE__ */ tn(0.8), vl = /* @__PURE__ */ tn(""), $e = new Audio();
$e.preload = "none";
$e.volume = Gl.value;
$e.addEventListener("playing", () => Pi.value = "playing");
$e.addEventListener("waiting", () => {
  on.value && (Pi.value = "connecting");
});
$e.addEventListener("error", () => {
  on.value && (Pi.value = "failed");
});
var io = "default";
async function y3() {
  try {
    const t = kl().config.getRef()?.audio?.deviceOutput, i = $e;
    if (!t || typeof i.setSinkId != "function") {
      io = t ? "unsupported" : "default";
      return;
    }
    await i.setSinkId(t), io = t === "default" ? "default" : t.slice(0, 8);
  } catch (t) {
    console.warn("[radio] could not set output device", t), io = `failed: ${t?.name ?? "error"}`;
  }
}
setInterval(() => {
  if (!on.value) {
    vl.value = "";
    return;
  }
  vl.value = [
    `time ${$e.currentTime.toFixed(1)}s`,
    `paused ${$e.paused}`,
    `ready ${$e.readyState}`,
    `network ${$e.networkState}`,
    `volume ${$e.volume.toFixed(2)}`,
    `muted ${$e.muted}`,
    `output ${io}`,
    `error ${$e.error?.code ?? "none"}`
  ].join(" | ");
}, 1e3);
function C3() {
  try {
    qf?.pause?.();
  } catch (t) {
    console.warn("[radio] could not pause Apple Music", t);
  }
}
async function A3(t) {
  on.value = t, Pi.value = "connecting", C3();
  try {
    const i = await E3(t);
    if (on.value?.id !== t.id) return;
    await y3(), $e.muted = !1, $e.src = i, await $e.play();
  } catch (i) {
    console.warn("[radio] playback failed", i), on.value?.id === t.id && (Pi.value = "failed");
  }
}
function ho() {
  $e.pause(), $e.removeAttribute("src"), $e.load(), on.value = null, Pi.value = "stopped";
}
function S3(t) {
  Gl.value = t, $e.volume = t;
}
function N3() {
  qf?.addEventListener?.("playbackStateDidChange", (t) => {
    t?.state === 2 && on.value && ho();
  });
}
var U3 = { class: "q-pa-lg radio-page" }, R3 = ["disabled"], O3 = {
  key: 0,
  class: "radio-now",
  "aria-live": "polite"
}, P3 = { class: "radio-now-text" }, x3 = { class: "radio-diagnostics" }, z3 = ["value"], M3 = {
  key: 1,
  class: "radio-library"
}, L3 = { class: "radio-note" }, D3 = {
  class: "radio-groups",
  role: "tablist",
  "aria-label": "Free Radio groups"
}, q3 = ["aria-selected", "onClick"], F3 = {
  key: 2,
  class: "radio-note"
}, B3 = { class: "radio-list" }, V3 = ["onClick"], j3 = ["src"], k3 = { class: "radio-name" }, $3 = { class: "radio-detail" }, H3 = { class: "radio-source" }, J3 = /* @__PURE__ */ rf({
  __name: "RadioPage",
  setup(t) {
    const i = /* @__PURE__ */ tn(""), r = /* @__PURE__ */ tn([]), o = /* @__PURE__ */ tn([]), a = /* @__PURE__ */ tn(!1), u = /* @__PURE__ */ tn(!1), d = /* @__PURE__ */ tn(tr[0]?.id ?? ""), f = tr.reduce((U, M) => U + M.stations.length, 0), h = no(() => tr.find((U) => U.id === d.value) ?? tr[0]), y = no(() => u.value ? r.value : h.value?.stations ?? []);
    xr(i, (U) => {
      U.trim() || (u.value = !1, r.value = [], o.value = []);
    });
    const T = no(() => ({
      stopped: "Stopped",
      connecting: "Connecting…",
      playing: "Playing",
      failed: "This station wouldn't play. Try another one."
    })[Pi.value]);
    async function _() {
      const U = i.value.trim();
      if (!U) return;
      a.value = !0;
      const M = await _3(U);
      r.value = M.stations, o.value = M.failed, a.value = !1, u.value = !0;
    }
    return (U, M) => (Jt(), en("div", U3, [
      M[5] || (M[5] = Be("h1", { class: "apple-heading" }, "Radio", -1)),
      Be("form", {
        class: "radio-search",
        onSubmit: wT(_, ["prevent"])
      }, [U_(Be("input", {
        "onUpdate:modelValue": M[0] || (M[0] = (j) => i.value = j),
        type: "search",
        placeholder: "Search stations",
        "aria-label": "Search stations"
      }, null, 512), [[IT, i.value]]), Be("button", {
        class: "c-btn",
        type: "submit",
        disabled: a.value
      }, Ht(a.value ? "Searching…" : "Search"), 9, R3)], 32),
      Nt(on) ? (Jt(), en("section", O3, [
        Be("div", P3, [
          Be("strong", null, Ht(Nt(on).name), 1),
          Be("span", null, Ht(T.value), 1),
          Be("small", x3, Ht(Nt(vl)), 1)
        ]),
        Be("label", null, [M[3] || (M[3] = ml(" Volume ", -1)), Be("input", {
          type: "range",
          min: "0",
          max: "1",
          step: "0.05",
          value: Nt(Gl),
          onInput: M[1] || (M[1] = (j) => Nt(S3)(Number(j.target.value)))
        }, null, 40, z3)]),
        Be("button", {
          class: "c-btn",
          type: "button",
          onClick: M[2] || (M[2] = (...j) => Nt(ho) && Nt(ho)(...j))
        }, "Stop")
      ])) : Gs("", !0),
      u.value ? Gs("", !0) : (Jt(), en("section", M3, [
        M[4] || (M[4] = Be("h2", null, "Free Radio", -1)),
        Be("p", L3, Ht(Nt(f)) + " instrumental stations from your library. Pick a group, or search.", 1),
        Be("div", D3, [(Jt(!0), en(Rt, null, Ka(Nt(tr), (j) => (Jt(), en("button", {
          key: j.id,
          type: "button",
          role: "tab",
          class: qr({ active: j.id === h.value?.id }),
          "aria-selected": j.id === h.value?.id,
          onClick: (G) => d.value = j.id
        }, [ml(Ht(j.name) + " ", 1), Be("span", null, Ht(j.stations.length), 1)], 10, q3))), 128))])
      ])),
      (Jt(!0), en(Rt, null, Ka(o.value, (j) => (Jt(), en("p", {
        key: j,
        class: "radio-note"
      }, Ht(j) + " search couldn't be reached. Stations already in your Free Radio library are still listed. ", 1))), 128)),
      u.value && !r.value.length && !a.value ? (Jt(), en("p", F3, "No stations found.")) : Gs("", !0),
      Be("ul", B3, [(Jt(!0), en(Rt, null, Ka(y.value, (j) => (Jt(), en("li", { key: j.id }, [Be("button", {
        type: "button",
        class: qr({ active: Nt(on)?.id === j.id }),
        onClick: (G) => Nt(A3)(j)
      }, [
        j.image ? (Jt(), en("img", {
          key: 0,
          src: j.image,
          alt: "",
          loading: "lazy"
        }, null, 8, j3)) : Gs("", !0),
        Be("span", k3, Ht(j.name), 1),
        Be("span", $3, Ht(j.detail), 1),
        Be("span", H3, Ht(j.source), 1)
      ], 10, V3)]))), 128))])
    ]));
  }
}), G3 = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [o, a] of i) r[o] = a;
  return r;
}, W3 = /* @__PURE__ */ G3(J3, [["__scopeId", "data-v-b8dc3f54"]]), vp = { "page-radio": /* @__PURE__ */ gT(W3, { shadowRoot: !1 }) }, { plugin: ow, customElementName: K3, goToPage: Y3 } = MT({
  ...FT,
  CustomElements: vp,
  setup() {
    for (const [t, i] of Object.entries(vp)) customElements.define(K3(t), i);
    bp({
      label: "Radio",
      onClick() {
        Y3({ name: "page-radio" });
      }
    }), bp({
      label: "Stop Radio",
      onClick() {
        ho();
      }
    }), N3();
  }
});
export {
  vp as CustomElements,
  K3 as customElementName,
  ow as default,
  Y3 as goToPage
};
