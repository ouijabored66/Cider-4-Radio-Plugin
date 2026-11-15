(function(){try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(`.radio-search[data-v-b8dc3f54]{gap:8px;max-width:560px;margin-bottom:16px;display:flex}.radio-search input[data-v-b8dc3f54]{min-width:0;color:inherit;font:inherit;background:0 0;border:1px solid #80808066;border-radius:8px;flex:1;padding:8px 12px}.radio-now[data-v-b8dc3f54]{background:#80808026;border-radius:10px;flex-wrap:wrap;align-items:center;gap:16px;margin-bottom:16px;padding:12px 16px;display:flex}.radio-now-text[data-v-b8dc3f54]{flex-direction:column;flex:1;min-width:180px;display:flex}.radio-diagnostics[data-v-b8dc3f54]{opacity:.7;font-size:.75em}.radio-note[data-v-b8dc3f54]{opacity:.75;margin:4px 0}.radio-library h2[data-v-b8dc3f54]{margin:0 0 4px;font-size:1.15rem}.radio-groups[data-v-b8dc3f54]{flex-wrap:wrap;gap:8px;margin:12px 0 16px;display:flex}.radio-groups button[data-v-b8dc3f54]{color:inherit;font:inherit;cursor:pointer;background:0 0;border:1px solid #80808059;border-radius:999px;align-items:center;gap:6px;padding:6px 10px;display:inline-flex}.radio-groups button.active[data-v-b8dc3f54]{background:#80808033}.radio-groups span[data-v-b8dc3f54]{opacity:.6;font-size:.8em}.radio-list[data-v-b8dc3f54]{margin:0;padding:0;list-style:none}.radio-list button[data-v-b8dc3f54]{text-align:left;width:100%;color:inherit;font:inherit;cursor:pointer;background:0 0;border:0;border-radius:8px;grid-template-rows:auto auto;grid-template-columns:40px 1fr auto;column-gap:12px;padding:8px;display:grid}.radio-list button[data-v-b8dc3f54]:hover,.radio-list button.active[data-v-b8dc3f54]{background:#80808026}.radio-list img[data-v-b8dc3f54]{object-fit:cover;border-radius:6px;grid-row:1/3;width:40px;height:40px}.radio-name[data-v-b8dc3f54]{grid-column:2;font-weight:600}.radio-detail[data-v-b8dc3f54]{opacity:.7;grid-column:2;font-size:.85em}.radio-source[data-v-b8dc3f54]{opacity:.6;grid-area:1/3/3;align-self:center;font-size:.8em}
/*$vite$:1*/`)),document.head.appendChild(a)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
var _2 = (e, n) => () => (n || (e((n = { exports: {} }).exports, n), e = null), n.exports);
// @__NO_SIDE_EFFECTS__
function Vn(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const a of e.split(",")) n[a] = 1;
  return (a) => a in n;
}
var Ce = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, na = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ze = () => {
}, Td = () => !1, ja = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xa = (e) => e.startsWith("onUpdate:"), Ae = Object.assign, _l = (e, n) => {
  const a = e.indexOf(n);
  a > -1 && e.splice(a, 1);
}, w2 = Object.prototype.hasOwnProperty, ge = (e, n) => w2.call(e, n), $ = Array.isArray, Si = (e) => Ga(e) === "[object Map]", _d = (e) => Ga(e) === "[object Set]", Rm = (e) => Ga(e) === "[object Date]", te = (e) => typeof e == "function", Ee = (e) => typeof e == "string", rn = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", wl = (e) => (ve(e) || te(e)) && te(e.then) && te(e.catch), wd = Object.prototype.toString, Ga = (e) => wd.call(e), Cl = (e) => Ga(e).slice(8, -1), bo = (e) => Ga(e) === "[object Object]", Rl = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ea = /* @__PURE__ */ Vn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), C2 = /* @__PURE__ */ Vn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), vo = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (a) => n[a] || (n[a] = e(a));
}, R2 = /-\w/g, at = vo((e) => e.replace(R2, (n) => n.slice(1).toUpperCase())), U2 = /\B([A-Z])/g, Nt = vo((e) => e.replace(U2, "-$1").toLowerCase()), yo = vo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ri = vo((e) => e ? `on${yo(e)}` : ""), Rn = (e, n) => !Object.is(e, n), Yi = (e, ...n) => {
  for (let a = 0; a < e.length; a++) e[a](...n);
}, so = (e, n, a, o = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: a
  });
}, Ul = (e) => {
  const n = parseFloat(e);
  return isNaN(n) ? e : n;
}, Um = (e) => {
  const n = Ee(e) ? Number(e) : NaN;
  return isNaN(n) ? e : n;
}, Sm, Wa = () => Sm || (Sm = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Sl(e) {
  if ($(e)) {
    const n = {};
    for (let a = 0; a < e.length; a++) {
      const o = e[a], r = Ee(o) ? E2(o) : Sl(o);
      if (r) for (const u in r) n[u] = r[u];
    }
    return n;
  } else if (Ee(e) || ve(e)) return e;
}
var S2 = /;(?![^(]*\))/g, A2 = /:([^]+)/, V2 = /\/\*[^]*?\*\//g;
function E2(e) {
  const n = {};
  return e.replace(V2, "").split(S2).forEach((a) => {
    if (a) {
      const o = a.split(A2);
      o.length > 1 && (n[o[0].trim()] = o[1].trim());
    }
  }), n;
}
function La(e) {
  let n = "";
  if (Ee(e)) n = e;
  else if ($(e)) for (let a = 0; a < e.length; a++) {
    const o = La(e[a]);
    o && (n += o + " ");
  }
  else if (ve(e))
    for (const a in e) e[a] && (n += a + " ");
  return n.trim();
}
var N2 = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", M2 = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", O2 = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", z2 = /* @__PURE__ */ Vn(N2), P2 = /* @__PURE__ */ Vn(M2), D2 = /* @__PURE__ */ Vn(O2), Cd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", x2 = /* @__PURE__ */ Vn(Cd), a_ = /* @__PURE__ */ Vn(Cd + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function Rd(e) {
  return !!e || e === "";
}
function L2(e, n) {
  if (e.length !== n.length) return !1;
  let a = !0;
  for (let o = 0; a && o < e.length; o++) a = Al(e[o], n[o]);
  return a;
}
function Al(e, n) {
  if (e === n) return !0;
  let a = Rm(e), o = Rm(n);
  if (a || o) return a && o ? e.getTime() === n.getTime() : !1;
  if (a = rn(e), o = rn(n), a || o) return e === n;
  if (a = $(e), o = $(n), a || o) return a && o ? L2(e, n) : !1;
  if (a = ve(e), o = ve(n), a || o) {
    if (!a || !o || Object.keys(e).length !== Object.keys(n).length) return !1;
    for (const r in e) {
      const u = e.hasOwnProperty(r), m = n.hasOwnProperty(r);
      if (u && !m || !u && m || !Al(e[r], n[r])) return !1;
    }
  }
  return String(e) === String(n);
}
var Ud = (e) => !!(e && e.__v_isRef === !0), jt = (e) => Ee(e) ? e : e == null ? "" : $(e) || ve(e) && (e.toString === wd || !te(e.toString)) ? Ud(e) ? jt(e.value) : JSON.stringify(e, Sd, 2) : String(e), Sd = (e, n) => Ud(n) ? Sd(e, n.value) : Si(n) ? { [`Map(${n.size})`]: [...n.entries()].reduce((a, [o, r], u) => (a[Hr(o, u) + " =>"] = r, a), {}) } : _d(n) ? { [`Set(${n.size})`]: [...n.values()].map((a) => Hr(a)) } : rn(n) ? Hr(n) : ve(n) && !$(n) && !bo(n) ? String(n) : n, Hr = (e, n = "") => {
  var a;
  return rn(e) ? `Symbol(${(a = e.description) != null ? a : n})` : e;
};
function ln(e, ...n) {
  console.warn(`[Vue warn] ${e}`, ...n);
}
var it, F2 = class {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && it && (it.active ? (this.parent = it, this.index = (it.scopes || (it.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, n;
      if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause();
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, n;
      if (this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume();
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const n = it;
      try {
        return it = this, e();
      } finally {
        it = n;
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
        let e = it;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let n, a;
      for (n = 0, a = this.effects.length; n < a; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, a = this.cleanups.length; n < a; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, a = this.scopes.length; n < a; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
};
function k2() {
  return it;
}
var we, Jr = /* @__PURE__ */ new WeakSet(), Ad = class {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, it && (it.active ? it.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jr.has(this) && (Jr.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ed(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Am(this), Nd(this);
    const e = we, n = sn;
    we = this, sn = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && we !== this && ln("Active effect was not restored correctly - this is likely a Vue internal bug."), Md(this), we = e, sn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) Nl(e);
      this.deps = this.depsTail = void 0, Am(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    il(this) && this.run();
  }
  get dirty() {
    return il(this);
  }
}, Vd = 0, Na, Ma;
function Ed(e, n = !1) {
  if (e.flags |= 8, n) {
    e.next = Ma, Ma = e;
    return;
  }
  e.next = Na, Na = e;
}
function Vl() {
  Vd++;
}
function El() {
  if (--Vd > 0) return;
  if (Ma) {
    let n = Ma;
    for (Ma = void 0; n; ) {
      const a = n.next;
      n.next = void 0, n.flags &= -9, n = a;
    }
  }
  let e;
  for (; Na; ) {
    let n = Na;
    for (Na = void 0; n; ) {
      const a = n.next;
      if (n.next = void 0, n.flags &= -9, n.flags & 1) try {
        n.trigger();
      } catch (o) {
        e || (e = o);
      }
      n = a;
    }
  }
  if (e) throw e;
}
function Nd(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function Md(e) {
  let n, a = e.depsTail, o = a;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === a && (a = r), Nl(o), B2(o)) : n = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = n, e.depsTail = a;
}
function il(e) {
  for (let n = e.deps; n; n = n.nextDep) if (n.dep.version !== n.version || n.dep.computed && (Od(n.dep.computed) || n.dep.version !== n.version)) return !0;
  return !!e._dirty;
}
function Od(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Fa) || (e.globalVersion = Fa, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !il(e)))) return;
  e.flags |= 2;
  const n = e.dep, a = we, o = sn;
  we = e, sn = !0;
  try {
    Nd(e);
    const r = e.fn(e._value);
    (n.version === 0 || Rn(r, e._value)) && (e.flags |= 128, e._value = r, n.version++);
  } catch (r) {
    throw n.version++, r;
  } finally {
    we = a, sn = o, Md(e), e.flags &= -3;
  }
}
function Nl(e, n = !1) {
  const { dep: a, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && a.subsHead === e && (a.subsHead = r), a.subs === e && (a.subs = o, !o && a.computed)) {
    a.computed.flags &= -5;
    for (let u = a.computed.deps; u; u = u.nextDep) Nl(u, !0);
  }
  !n && !--a.sc && a.map && a.map.delete(a.key);
}
function B2(e) {
  const { prevDep: n, nextDep: a } = e;
  n && (n.nextDep = a, e.prevDep = void 0), a && (a.prevDep = n, e.nextDep = void 0);
}
var sn = !0, zd = [];
function un() {
  zd.push(sn), sn = !1;
}
function cn() {
  const e = zd.pop();
  sn = e === void 0 ? !0 : e;
}
function Am(e) {
  const { cleanup: n } = e;
  if (e.cleanup = void 0, n) {
    const a = we;
    we = void 0;
    try {
      n();
    } finally {
      we = a;
    }
  }
}
var Fa = 0, q2 = class {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}, Ml = class {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!we || !sn || we === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== we)
      n = this.activeLink = new q2(we, this), we.deps ? (n.prevDep = we.depsTail, we.depsTail.nextDep = n, we.depsTail = n) : we.deps = we.depsTail = n, Pd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = we.depsTail, n.nextDep = void 0, we.depsTail.nextDep = n, we.depsTail = n, we.deps === n && (we.deps = a);
    }
    return process.env.NODE_ENV !== "production" && we.onTrack && we.onTrack(Ae({ effect: we }, e)), n;
  }
  trigger(e) {
    this.version++, Fa++, this.notify(e);
  }
  notify(e) {
    Vl();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub) n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(Ae({ effect: n.sub }, e));
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      El();
    }
  }
};
function Pd(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let o = n.deps; o; o = o.nextDep) Pd(o);
    }
    const a = e.dep.subs;
    a !== e && (e.prevSub = a, a && (a.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
var al = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Object iterate" : ""), sl = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""), ka = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Array iterate" : "");
function Xe(e, n, a) {
  if (sn && we) {
    let o = al.get(e);
    o || al.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(a);
    r || (o.set(a, r = new Ml()), r.map = o, r.key = a), process.env.NODE_ENV !== "production" ? r.track({
      target: e,
      type: n,
      key: a
    }) : r.track();
  }
}
function Un(e, n, a, o, r, u) {
  const m = al.get(e);
  if (!m) {
    Fa++;
    return;
  }
  const p = (f) => {
    f && (process.env.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: n,
      key: a,
      newValue: o,
      oldValue: r,
      oldTarget: u
    }) : f.trigger());
  };
  if (Vl(), n === "clear") m.forEach(p);
  else {
    const f = $(e), C = f && Rl(a);
    if (f && a === "length") {
      const T = Number(o);
      m.forEach((y, V) => {
        (V === "length" || V === ka || !rn(V) && V >= T) && p(y);
      });
    } else
      switch ((a !== void 0 || m.has(void 0)) && p(m.get(a)), C && p(m.get(ka)), n) {
        case "add":
          f ? C && p(m.get("length")) : (p(m.get(Ai)), Si(e) && p(m.get(sl)));
          break;
        case "delete":
          f || (p(m.get(Ai)), Si(e) && p(m.get(sl)));
          break;
        case "set":
          Si(e) && p(m.get(Ai));
          break;
      }
  }
  El();
}
function Zi(e) {
  const n = /* @__PURE__ */ ue(e);
  return n === e ? n : (Xe(n, "iterate", ka), /* @__PURE__ */ ft(e) ? n : n.map(dn));
}
function To(e) {
  return Xe(e = /* @__PURE__ */ ue(e), "iterate", ka), e;
}
function Cn(e, n) {
  return /* @__PURE__ */ mn(e) ? sa(/* @__PURE__ */ ci(e) ? dn(n) : n) : dn(n);
}
var H2 = {
  __proto__: null,
  [Symbol.iterator]() {
    return jr(this, Symbol.iterator, (e) => Cn(this, e));
  },
  concat(...e) {
    return Zi(this).concat(...e.map((n) => $(n) ? Zi(n) : n));
  },
  entries() {
    return jr(this, "entries", (e) => (e[1] = Cn(this, e[1]), e));
  },
  every(e, n) {
    return qn(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return qn(this, "filter", e, n, (a) => a.map((o) => Cn(this, o)), arguments);
  },
  find(e, n) {
    return qn(this, "find", e, n, (a) => Cn(this, a), arguments);
  },
  findIndex(e, n) {
    return qn(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return qn(this, "findLast", e, n, (a) => Cn(this, a), arguments);
  },
  findLastIndex(e, n) {
    return qn(this, "findLastIndex", e, n, void 0, arguments);
  },
  forEach(e, n) {
    return qn(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return Gr(this, "includes", e);
  },
  indexOf(...e) {
    return Gr(this, "indexOf", e);
  },
  join(e) {
    return Zi(this).join(e);
  },
  lastIndexOf(...e) {
    return Gr(this, "lastIndexOf", e);
  },
  map(e, n) {
    return qn(this, "map", e, n, void 0, arguments);
  },
  pop() {
    return Ca(this, "pop");
  },
  push(...e) {
    return Ca(this, "push", e);
  },
  reduce(e, ...n) {
    return Vm(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return Vm(this, "reduceRight", e, n);
  },
  shift() {
    return Ca(this, "shift");
  },
  some(e, n) {
    return qn(this, "some", e, n, void 0, arguments);
  },
  splice(...e) {
    return Ca(this, "splice", e);
  },
  toReversed() {
    return Zi(this).toReversed();
  },
  toSorted(e) {
    return Zi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Zi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ca(this, "unshift", e);
  },
  values() {
    return jr(this, "values", (e) => Cn(this, e));
  }
};
function jr(e, n, a) {
  const o = To(e), r = o[n]();
  return o !== e && !/* @__PURE__ */ ft(e) && (r._next = r.next, r.next = () => {
    const u = r._next();
    return u.done || (u.value = a(u.value)), u;
  }), r;
}
var J2 = Array.prototype;
function qn(e, n, a, o, r, u) {
  const m = To(e), p = m !== e && !/* @__PURE__ */ ft(e), f = m[n];
  if (f !== J2[n]) {
    const y = f.apply(e, u);
    return p ? dn(y) : y;
  }
  let C = a;
  m !== e && (p ? C = function(y, V) {
    return a.call(this, Cn(e, y), V, e);
  } : a.length > 2 && (C = function(y, V) {
    return a.call(this, y, V, e);
  }));
  const T = f.call(m, C, o);
  return p && r ? r(T) : T;
}
function Vm(e, n, a, o) {
  const r = To(e), u = r !== e && !/* @__PURE__ */ ft(e);
  let m = a, p = !1;
  r !== e && (u ? (p = o.length === 0, m = function(C, T, y) {
    return p && (p = !1, C = Cn(e, C)), a.call(this, C, Cn(e, T), y, e);
  }) : a.length > 3 && (m = function(C, T, y) {
    return a.call(this, C, T, y, e);
  }));
  const f = r[n](m, ...o);
  return p ? Cn(e, f) : f;
}
function Gr(e, n, a) {
  const o = /* @__PURE__ */ ue(e);
  Xe(o, "iterate", ka);
  const r = o[n](...a);
  return (r === -1 || r === !1) && /* @__PURE__ */ oo(a[0]) ? (a[0] = /* @__PURE__ */ ue(a[0]), o[n](...a)) : r;
}
function Ca(e, n, a = []) {
  un(), Vl();
  const o = (/* @__PURE__ */ ue(e))[n].apply(e, a);
  return El(), cn(), o;
}
var j2 = /* @__PURE__ */ Vn("__proto__,__v_isRef,__isVue"), Dd = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rn));
function G2(e) {
  rn(e) || (e = String(e));
  const n = /* @__PURE__ */ ue(this);
  return Xe(n, "has", e), n.hasOwnProperty(e);
}
var xd = class {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, a) {
    if (n === "__v_skip") return e.__v_skip;
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive") return !o;
    if (n === "__v_isReadonly") return o;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return a === (o ? r ? Hd : qd : r ? Bd : kd).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(a) ? e : void 0;
    const u = $(e);
    if (!o) {
      let p;
      if (u && (p = H2[n])) return p;
      if (n === "hasOwnProperty") return G2;
    }
    const m = Reflect.get(e, n, /* @__PURE__ */ je(e) ? e : a);
    if ((rn(n) ? Dd.has(n) : j2(n)) || (o || Xe(e, "get", n), r)) return m;
    if (/* @__PURE__ */ je(m)) {
      const p = u && Rl(n) ? m : m.value;
      return o && ve(p) ? /* @__PURE__ */ rl(p) : p;
    }
    return ve(m) ? o ? /* @__PURE__ */ rl(m) : /* @__PURE__ */ Ol(m) : m;
  }
}, Ld = class extends xd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, a, o) {
    let r = e[n];
    const u = $(e) && Rl(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ mn(r);
      if (!/* @__PURE__ */ ft(a) && !/* @__PURE__ */ mn(a) && (r = /* @__PURE__ */ ue(r), a = /* @__PURE__ */ ue(a)), !u && /* @__PURE__ */ je(r) && !/* @__PURE__ */ je(a)) return f ? (process.env.NODE_ENV !== "production" && ln(`Set operation on key "${String(n)}" failed: target is readonly.`, e[n]), !0) : (r.value = a, !0);
    }
    const m = u ? Number(n) < e.length : ge(e, n), p = Reflect.set(e, n, a, /* @__PURE__ */ je(e) ? e : o);
    return e === /* @__PURE__ */ ue(o) && (m ? Rn(a, r) && Un(e, "set", n, a, r) : Un(e, "add", n, a)), p;
  }
  deleteProperty(e, n) {
    const a = ge(e, n), o = e[n], r = Reflect.deleteProperty(e, n);
    return r && a && Un(e, "delete", n, void 0, o), r;
  }
  has(e, n) {
    const a = Reflect.has(e, n);
    return (!rn(n) || !Dd.has(n)) && Xe(e, "has", n), a;
  }
  ownKeys(e) {
    return Xe(e, "iterate", $(e) ? "length" : Ai), Reflect.ownKeys(e);
  }
}, Fd = class extends xd {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && ln(`Set operation on key "${String(n)}" failed: target is readonly.`, e), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && ln(`Delete operation on key "${String(n)}" failed: target is readonly.`, e), !0;
  }
}, W2 = /* @__PURE__ */ new Ld(), K2 = /* @__PURE__ */ new Fd(), $2 = /* @__PURE__ */ new Ld(!0), X2 = /* @__PURE__ */ new Fd(!0), ol = (e) => e, Js = (e) => Reflect.getPrototypeOf(e);
function Z2(e, n, a) {
  return function(...o) {
    const r = this.__v_raw, u = /* @__PURE__ */ ue(r), m = Si(u), p = e === "entries" || e === Symbol.iterator && m, f = e === "keys" && m, C = r[e](...o), T = a ? ol : n ? sa : dn;
    return !n && Xe(u, "iterate", f ? sl : Ai), Ae(Object.create(C), { next() {
      const { value: y, done: V } = C.next();
      return V ? {
        value: y,
        done: V
      } : {
        value: p ? [T(y[0]), T(y[1])] : T(y),
        done: V
      };
    } });
  };
}
function js(e) {
  return function(...n) {
    if (process.env.NODE_ENV !== "production") {
      const a = n[0] ? `on key "${n[0]}" ` : "";
      ln(`${yo(e)} operation ${a}failed: target is readonly.`, /* @__PURE__ */ ue(this));
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Y2(e, n) {
  const a = {
    get(o) {
      const r = this.__v_raw, u = /* @__PURE__ */ ue(r), m = /* @__PURE__ */ ue(o);
      e || (Rn(o, m) && Xe(u, "get", o), Xe(u, "get", m));
      const { has: p } = Js(u), f = n ? ol : e ? sa : dn;
      if (p.call(u, o)) return f(r.get(o));
      if (p.call(u, m)) return f(r.get(m));
      r !== u && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Xe(/* @__PURE__ */ ue(o), "iterate", Ai), o.size;
    },
    has(o) {
      const r = this.__v_raw, u = /* @__PURE__ */ ue(r), m = /* @__PURE__ */ ue(o);
      return e || (Rn(o, m) && Xe(u, "has", o), Xe(u, "has", m)), o === m ? r.has(o) : r.has(o) || r.has(m);
    },
    forEach(o, r) {
      const u = this, m = u.__v_raw, p = /* @__PURE__ */ ue(m), f = n ? ol : e ? sa : dn;
      return !e && Xe(p, "iterate", Ai), m.forEach((C, T) => o.call(r, f(C), f(T), u));
    }
  };
  return Ae(a, e ? {
    add: js("add"),
    set: js("set"),
    delete: js("delete"),
    clear: js("clear")
  } : {
    add(o) {
      const r = /* @__PURE__ */ ue(this), u = Js(r), m = /* @__PURE__ */ ue(o), p = !n && !/* @__PURE__ */ ft(o) && !/* @__PURE__ */ mn(o) ? m : o;
      return u.has.call(r, p) || Rn(o, p) && u.has.call(r, o) || Rn(m, p) && u.has.call(r, m) || (r.add(p), Un(r, "add", p, p)), this;
    },
    set(o, r) {
      !n && !/* @__PURE__ */ ft(r) && !/* @__PURE__ */ mn(r) && (r = /* @__PURE__ */ ue(r));
      const u = /* @__PURE__ */ ue(this), { has: m, get: p } = Js(u);
      let f = m.call(u, o);
      f ? process.env.NODE_ENV !== "production" && Em(u, m, o) : (o = /* @__PURE__ */ ue(o), f = m.call(u, o));
      const C = p.call(u, o);
      return u.set(o, r), f ? Rn(r, C) && Un(u, "set", o, r, C) : Un(u, "add", o, r), this;
    },
    delete(o) {
      const r = /* @__PURE__ */ ue(this), { has: u, get: m } = Js(r);
      let p = u.call(r, o);
      p ? process.env.NODE_ENV !== "production" && Em(r, u, o) : (o = /* @__PURE__ */ ue(o), p = u.call(r, o));
      const f = m ? m.call(r, o) : void 0, C = r.delete(o);
      return p && Un(r, "delete", o, void 0, f), C;
    },
    clear() {
      const o = /* @__PURE__ */ ue(this), r = o.size !== 0, u = process.env.NODE_ENV !== "production" ? Si(o) ? new Map(o) : new Set(o) : void 0, m = o.clear();
      return r && Un(o, "clear", void 0, void 0, u), m;
    }
  }), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    a[o] = Z2(o, e, n);
  }), a;
}
function _o(e, n) {
  const a = Y2(e, n);
  return (o, r, u) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(ge(a, r) && r in o ? a : o, r, u);
}
var Q2 = { get: /* @__PURE__ */ _o(!1, !1) }, eb = { get: /* @__PURE__ */ _o(!1, !0) }, tb = { get: /* @__PURE__ */ _o(!0, !1) }, nb = { get: /* @__PURE__ */ _o(!0, !0) };
function Em(e, n, a) {
  const o = /* @__PURE__ */ ue(a);
  if (o !== a && n.call(e, o)) {
    const r = Cl(e);
    ln(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var kd = /* @__PURE__ */ new WeakMap(), Bd = /* @__PURE__ */ new WeakMap(), qd = /* @__PURE__ */ new WeakMap(), Hd = /* @__PURE__ */ new WeakMap();
function ib(e) {
  switch (e) {
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
function Ol(e) {
  return /* @__PURE__ */ mn(e) ? e : wo(e, !1, W2, Q2, kd);
}
// @__NO_SIDE_EFFECTS__
function ab(e) {
  return wo(e, !1, $2, eb, Bd);
}
// @__NO_SIDE_EFFECTS__
function rl(e) {
  return wo(e, !0, K2, tb, qd);
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  return wo(e, !0, X2, nb, Hd);
}
function wo(e, n, a, o, r) {
  if (!ve(e))
    return process.env.NODE_ENV !== "production" && ln(`value cannot be made ${n ? "readonly" : "reactive"}: ${String(e)}`), e;
  if (e.__v_raw && !(n && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
  const u = r.get(e);
  if (u) return u;
  const m = ib(Cl(e));
  if (m === 0) return e;
  const p = new Proxy(e, m === 2 ? o : a);
  return r.set(e, p), p;
}
// @__NO_SIDE_EFFECTS__
function ci(e) {
  return /* @__PURE__ */ mn(e) ? /* @__PURE__ */ ci(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function oo(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ue(e) {
  const n = e && e.__v_raw;
  return n ? /* @__PURE__ */ ue(n) : e;
}
function sb(e) {
  return !ge(e, "__v_skip") && Object.isExtensible(e) && so(e, "__v_skip", !0), e;
}
var dn = (e) => ve(e) ? /* @__PURE__ */ Ol(e) : e, sa = (e) => ve(e) ? /* @__PURE__ */ rl(e) : e;
// @__NO_SIDE_EFFECTS__
function je(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
  return ob(e, !1);
}
function ob(e, n) {
  return /* @__PURE__ */ je(e) ? e : new rb(e, n);
}
var rb = class {
  constructor(e, n) {
    this.dep = new Ml(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ ue(e), this._value = n ? e : dn(e), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, a = this.__v_isShallow || /* @__PURE__ */ ft(e) || /* @__PURE__ */ mn(e);
    e = a ? e : /* @__PURE__ */ ue(e), Rn(e, n) && (this._rawValue = e, this._value = a ? e : dn(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: n
    }) : this.dep.trigger());
  }
};
function At(e) {
  return /* @__PURE__ */ je(e) ? e.value : e;
}
var lb = {
  get: (e, n, a) => n === "__v_raw" ? e : At(Reflect.get(e, n, a)),
  set: (e, n, a, o) => {
    const r = e[n];
    return /* @__PURE__ */ je(r) && !/* @__PURE__ */ je(a) ? (r.value = a, !0) : Reflect.set(e, n, a, o);
  }
};
function Jd(e) {
  return /* @__PURE__ */ ci(e) ? e : new Proxy(e, lb);
}
var ub = class {
  constructor(e, n, a) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Ml(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Fa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && we !== this)
      return Ed(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Od(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && ln("Write operation failed: computed value is readonly");
  }
};
// @__NO_SIDE_EFFECTS__
function cb(e, n, a = !1) {
  let o, r;
  te(e) ? o = e : (o = e.get, r = e.set);
  const u = new ub(o, r, a);
  return process.env.NODE_ENV !== "production" && n && !a && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), u;
}
var Gs = {}, ro = /* @__PURE__ */ new WeakMap(), Ui = void 0;
function mb(e, n = !1, a = Ui) {
  if (a) {
    let o = ro.get(a);
    o || ro.set(a, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !n && ln("onWatcherCleanup() was called when there was no active watcher to associate with.");
}
function db(e, n, a = Ce) {
  const { immediate: o, deep: r, once: u, scheduler: m, augmentJob: p, call: f } = a, C = (j) => {
    (a.onWarn || ln)("Invalid watch source: ", j, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, T = (j) => r ? j : /* @__PURE__ */ ft(j) || r === !1 || r === 0 ? Kn(j, 1) : Kn(j);
  let y, V, P, q, W = !1, he = !1;
  if (/* @__PURE__ */ je(e) ? (V = () => e.value, W = /* @__PURE__ */ ft(e)) : /* @__PURE__ */ ci(e) ? (V = () => T(e), W = !0) : $(e) ? (he = !0, W = e.some((j) => /* @__PURE__ */ ci(j) || /* @__PURE__ */ ft(j)), V = () => e.map((j) => {
    if (/* @__PURE__ */ je(j)) return j.value;
    if (/* @__PURE__ */ ci(j)) return T(j);
    if (te(j)) return f ? f(j, 2) : j();
    process.env.NODE_ENV !== "production" && C(j);
  })) : te(e) ? n ? V = f ? () => f(e, 2) : e : V = () => {
    if (P) {
      un();
      try {
        P();
      } finally {
        cn();
      }
    }
    const j = Ui;
    Ui = y;
    try {
      return f ? f(e, 3, [q]) : e(q);
    } finally {
      Ui = j;
    }
  } : (V = Ze, process.env.NODE_ENV !== "production" && C(e)), n && r) {
    const j = V, Ne = r === !0 ? 1 / 0 : r;
    V = () => Kn(j(), Ne);
  }
  const ye = k2(), fe = () => {
    y.stop(), ye && ye.active && _l(ye.effects, y);
  };
  if (u && n) {
    const j = n;
    n = (...Ne) => {
      j(...Ne), fe();
    };
  }
  let se = he ? new Array(e.length).fill(Gs) : Gs;
  const He = (j) => {
    if (!(!(y.flags & 1) || !y.dirty && !j))
      if (n) {
        const Ne = y.run();
        if (r || W || (he ? Ne.some((xe, Le) => Rn(xe, se[Le])) : Rn(Ne, se))) {
          P && P();
          const xe = Ui;
          Ui = y;
          try {
            const Le = [
              Ne,
              se === Gs ? void 0 : he && se[0] === Gs ? [] : se,
              q
            ];
            se = Ne, f ? f(n, 3, Le) : n(...Le);
          } finally {
            Ui = xe;
          }
        }
      } else y.run();
  };
  return p && p(He), y = new Ad(V), y.scheduler = m ? () => m(He, !1) : He, q = (j) => mb(j, !1, y), P = y.onStop = () => {
    const j = ro.get(y);
    if (j) {
      if (f) f(j, 4);
      else for (const Ne of j) Ne();
      ro.delete(y);
    }
  }, process.env.NODE_ENV !== "production" && (y.onTrack = a.onTrack, y.onTrigger = a.onTrigger), n ? o ? He(!0) : se = y.run() : m ? m(He.bind(null, !0), !0) : y.run(), fe.pause = y.pause.bind(y), fe.resume = y.resume.bind(y), fe.stop = fe, fe;
}
function Kn(e, n = 1 / 0, a) {
  if (n <= 0 || !ve(e) || e.__v_skip || (a = a || /* @__PURE__ */ new Map(), (a.get(e) || 0) >= n)) return e;
  if (a.set(e, n), n--, /* @__PURE__ */ je(e)) Kn(e.value, n, a);
  else if ($(e)) for (let o = 0; o < e.length; o++) Kn(e[o], n, a);
  else if (_d(e) || Si(e)) e.forEach((o) => {
    Kn(o, n, a);
  });
  else if (bo(e)) {
    for (const o in e) Kn(e[o], n, a);
    for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && Kn(e[o], n, a);
  }
  return e;
}
var Vi = [];
function $s(e) {
  Vi.push(e);
}
function Xs() {
  Vi.pop();
}
var Wr = !1;
function k(e, ...n) {
  if (Wr) return;
  Wr = !0, un();
  const a = Vi.length ? Vi[Vi.length - 1].component : null, o = a && a.appContext.config.warnHandler, r = pb();
  if (o) oa(o, a, 11, [
    e + n.map((u) => {
      var m, p;
      return (p = (m = u.toString) == null ? void 0 : m.call(u)) != null ? p : JSON.stringify(u);
    }).join(""),
    a && a.proxy,
    r.map(({ vnode: u }) => `at <${Ya(a, u.type)}>`).join(`
`),
    r
  ]);
  else {
    const u = [`[Vue warn]: ${e}`, ...n];
    r.length && u.push(`
`, ...gb(r)), console.warn(...u);
  }
  cn(), Wr = !1;
}
function pb() {
  let e = Vi[Vi.length - 1];
  if (!e) return [];
  const n = [];
  for (; e; ) {
    const a = n[0];
    a && a.vnode === e ? a.recurseCount++ : n.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return n;
}
function gb(e) {
  const n = [];
  return e.forEach((a, o) => {
    n.push(...o === 0 ? [] : [`
`], ...hb(a));
  }), n;
}
function hb({ vnode: e, recurseCount: n }) {
  const a = n > 0 ? `... (${n} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Ya(e.component, e.type, o)}`, u = ">" + a;
  return e.props ? [
    r,
    ...fb(e.props),
    u
  ] : [r + u];
}
function fb(e) {
  const n = [], a = Object.keys(e);
  return a.slice(0, 3).forEach((o) => {
    n.push(...jd(o, e[o]));
  }), a.length > 3 && n.push(" ..."), n;
}
function jd(e, n, a) {
  return Ee(n) ? (n = JSON.stringify(n), a ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? a ? n : [`${e}=${n}`] : /* @__PURE__ */ je(n) ? (n = jd(e, /* @__PURE__ */ ue(n.value), !0), a ? n : [
    `${e}=Ref<`,
    n,
    ">"
  ]) : te(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = /* @__PURE__ */ ue(n), a ? n : [`${e}=`, n]);
}
var zl = {
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
function oa(e, n, a, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Ka(r, n, a);
  }
}
function pn(e, n, a, o) {
  if (te(e)) {
    const r = oa(e, n, a, o);
    return r && wl(r) && r.catch((u) => {
      Ka(u, n, a);
    }), r;
  }
  if ($(e)) {
    const r = [];
    for (let u = 0; u < e.length; u++) r.push(pn(e[u], n, a, o));
    return r;
  } else process.env.NODE_ENV !== "production" && k(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`);
}
function Ka(e, n, a, o = !0) {
  const r = n ? n.vnode : null, { errorHandler: u, throwUnhandledErrorInProduction: m } = n && n.appContext.config || Ce;
  if (n) {
    let p = n.parent;
    const f = n.proxy, C = process.env.NODE_ENV !== "production" ? zl[a] : `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; p; ) {
      const T = p.ec;
      if (T) {
        for (let y = 0; y < T.length; y++) if (T[y](e, f, C) === !1) return;
      }
      p = p.parent;
    }
    if (u) {
      un(), oa(u, null, 10, [
        e,
        f,
        C
      ]), cn();
      return;
    }
  }
  Ib(e, a, r, o, m);
}
function Ib(e, n, a, o = !0, r = !1) {
  if (process.env.NODE_ENV !== "production") {
    const u = zl[n];
    if (a && $s(a), k(`Unhandled error${u ? ` during execution of ${u}` : ""}`), a && Xs(), o) throw e;
    console.error(e);
  } else {
    if (r) throw e;
    console.error(e);
  }
}
var ht = [], wn = -1, ia = [], ui = null, Qi = 0, Gd = /* @__PURE__ */ Promise.resolve(), lo = null, bb = 100;
function Wd(e) {
  const n = lo || Gd;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function vb(e) {
  let n = wn + 1, a = ht.length;
  for (; n < a; ) {
    const o = n + a >>> 1, r = ht[o], u = Ba(r);
    u < e || u === e && r.flags & 2 ? n = o + 1 : a = o;
  }
  return n;
}
function Co(e) {
  if (!(e.flags & 1)) {
    const n = Ba(e), a = ht[ht.length - 1];
    !a || !(e.flags & 2) && n >= Ba(a) ? ht.push(e) : ht.splice(vb(n), 0, e), e.flags |= 1, Kd();
  }
}
function Kd() {
  lo || (lo = Gd.then(Zd));
}
function $d(e) {
  $(e) ? ia.push(...e) : ui && e.id === -1 ? ui.splice(Qi + 1, 0, e) : e.flags & 1 || (ia.push(e), e.flags |= 1), Kd();
}
function Nm(e, n, a = wn + 1) {
  for (process.env.NODE_ENV !== "production" && (n = n || /* @__PURE__ */ new Map()); a < ht.length; a++) {
    const o = ht[a];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && Pl(n, o)) continue;
      ht.splice(a, 1), a--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Xd(e) {
  if (ia.length) {
    const n = [...new Set(ia)].sort((a, o) => Ba(a) - Ba(o));
    if (ia.length = 0, ui) {
      ui.push(...n);
      return;
    }
    for (ui = n, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Qi = 0; Qi < ui.length; Qi++) {
      const a = ui[Qi];
      process.env.NODE_ENV !== "production" && Pl(e, a) || (a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), a.flags &= -2);
    }
    ui = null, Qi = 0;
  }
}
var Ba = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Zd(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const n = process.env.NODE_ENV !== "production" ? (a) => Pl(e, a) : Ze;
  try {
    for (wn = 0; wn < ht.length; wn++) {
      const a = ht[wn];
      if (a && !(a.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && n(a)) continue;
        a.flags & 4 && (a.flags &= -2), oa(a, a.i, a.i ? 15 : 14), a.flags & 4 || (a.flags &= -2);
      }
    }
  } finally {
    for (; wn < ht.length; wn++) {
      const a = ht[wn];
      a && (a.flags &= -2);
    }
    wn = -1, ht.length = 0, Xd(e), lo = null, (ht.length || ia.length) && Zd(e);
  }
}
function Pl(e, n) {
  const a = e.get(n) || 0;
  if (a > bb) {
    const o = n.i, r = o && zp(o.type);
    return Ka(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10), !0;
  }
  return e.set(n, a + 1), !1;
}
var Mt = !1, Mm = (e) => {
  try {
    return Mt;
  } finally {
    Mt = e;
  }
}, Zs = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Wa().__VUE_HMR_RUNTIME__ = {
  createRecord: Kr(Yd),
  rerender: Kr(_b),
  reload: Kr(wb)
});
var Ni = /* @__PURE__ */ new Map();
function yb(e) {
  const n = e.type.__hmrId;
  let a = Ni.get(n);
  a || (Yd(n, e.type), a = Ni.get(n)), a.instances.add(e);
}
function Tb(e) {
  Ni.get(e.type.__hmrId).instances.delete(e);
}
function Yd(e, n) {
  return Ni.has(e) ? !1 : (Ni.set(e, {
    initialDef: uo(n),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function uo(e) {
  return Pp(e) ? e.__vccOpts : e;
}
function _b(e, n) {
  const a = Ni.get(e);
  a && (a.initialDef.render = n, [...a.instances].forEach((o) => {
    n && (o.render = n, uo(o.type).render = n), o.renderCache = [], Mt = !0, o.job.flags & 8 || o.update(), Mt = !1;
  }));
}
function wb(e, n) {
  const a = Ni.get(e);
  if (!a) return;
  n = uo(n), Om(a.initialDef, n);
  const o = [...a.instances];
  for (let r = 0; r < o.length; r++) {
    const u = o[r], m = uo(u.type);
    let p = Zs.get(m);
    p || (m !== a.initialDef && Om(m, n), Zs.set(m, p = /* @__PURE__ */ new Set())), p.add(u), u.appContext.propsCache.delete(u.type), u.appContext.emitsCache.delete(u.type), u.appContext.optionsCache.delete(u.type), u.ceReload ? (p.add(u), u.ceReload(n.styles), p.delete(u)) : u.parent ? Co(() => {
      u.job.flags & 8 || (Mt = !0, u.parent.update(), Mt = !1, p.delete(u));
    }) : u.appContext.reload ? u.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required."), u.root.ce && u !== u.root && u.root.ce._removeChildStyle(m);
  }
  $d(() => {
    Zs.clear();
  });
}
function Om(e, n) {
  Ae(e, n);
  for (const a in e) a !== "__file" && !(a in n) && delete e[a];
}
function Kr(e) {
  return (n, a) => {
    try {
      return e(n, a);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
var an, Sa = [], ll = !1;
function $a(e, ...n) {
  an ? an.emit(e, ...n) : ll || Sa.push({
    event: e,
    args: n
  });
}
function Dl(e, n) {
  var a, o;
  an = e, an ? (an.enabled = !0, Sa.forEach(({ event: r, args: u }) => an.emit(r, ...u)), Sa = []) : typeof window < "u" && window.HTMLElement && !((o = (a = window.navigator) == null ? void 0 : a.userAgent) != null && o.includes("jsdom")) ? ((n.__VUE_DEVTOOLS_HOOK_REPLAY__ = n.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Dl(r, n);
  }), setTimeout(() => {
    an || (n.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ll = !0, Sa = []);
  }, 3e3)) : (ll = !0, Sa = []);
}
function Cb(e, n) {
  $a("app:init", e, n, {
    Fragment: Et,
    Text: Xa,
    Comment: zt,
    Static: eo
  });
}
function Rb(e) {
  $a("app:unmount", e);
}
var Ub = /* @__PURE__ */ xl("component:added"), Qd = /* @__PURE__ */ xl("component:updated"), Sb = /* @__PURE__ */ xl("component:removed"), Ab = (e) => {
  an && typeof an.cleanupBuffer == "function" && !an.cleanupBuffer(e) && Sb(e);
};
// @__NO_SIDE_EFFECTS__
function xl(e) {
  return (n) => {
    $a(e, n.appContext.app, n.uid, n.parent ? n.parent.uid : void 0, n);
  };
}
var Vb = /* @__PURE__ */ ep("perf:start"), Eb = /* @__PURE__ */ ep("perf:end");
function ep(e) {
  return (n, a, o) => {
    $a(e, n.appContext.app, n.uid, n, a, o);
  };
}
function Nb(e, n, a) {
  $a("component:emit", e.appContext.app, e, n, a);
}
var lt = null, tp = null;
function co(e) {
  const n = lt;
  return lt = e, tp = e && e.type.__scopeId || null, n;
}
function Mb(e, n = lt, a) {
  if (!n || e._n) return e;
  const o = (...r) => {
    o._d && Wm(-1);
    const u = co(n);
    let m;
    try {
      m = e(...r);
    } finally {
      co(u), o._d && Wm(1);
    }
    return process.env.NODE_ENV !== "production" && Qd(n), m;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function np(e) {
  C2(e) && k("Do not use built-in directive ids as custom directive id: " + e);
}
function Ob(e, n) {
  if (lt === null)
    return process.env.NODE_ENV !== "production" && k("withDirectives can only be used inside render functions."), e;
  const a = Ao(lt), o = e.dirs || (e.dirs = []);
  for (let r = 0; r < n.length; r++) {
    let [u, m, p, f = Ce] = n[r];
    u && (te(u) && (u = {
      mounted: u,
      updated: u
    }), u.deep && Kn(m), o.push({
      dir: u,
      instance: a,
      value: m,
      oldValue: void 0,
      arg: p,
      modifiers: f
    }));
  }
  return e;
}
function _i(e, n, a, o) {
  const r = e.dirs, u = n && n.dirs;
  for (let m = 0; m < r.length; m++) {
    const p = r[m];
    u && (p.oldValue = u[m].value);
    let f = p.dir[o];
    f && (un(), pn(f, a, 8, [
      e.el,
      p,
      e,
      n
    ]), cn());
  }
}
function zb(e, n) {
  if (process.env.NODE_ENV !== "production" && (!$e || $e.isMounted) && k("provide() can only be used inside setup()."), $e) {
    let a = $e.provides;
    const o = $e.parent && $e.parent.provides;
    o === a && (a = $e.provides = Object.create(o)), a[e] = n;
  }
}
function Ys(e, n, a = !1) {
  const o = Ep();
  if (o || aa) {
    let r = aa ? aa._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return a && te(n) ? n.call(o && o.proxy) : n;
    process.env.NODE_ENV !== "production" && k(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && k("inject() can only be used inside setup() or functional components.");
}
var Pb = /* @__PURE__ */ Symbol.for("v-scx"), Db = () => {
  {
    const e = Ys(Pb);
    return e || process.env.NODE_ENV !== "production" && k("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Oa(e, n, a) {
  return process.env.NODE_ENV !== "production" && !te(n) && k("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), ip(e, n, a);
}
function ip(e, n, a = Ce) {
  const { immediate: o, deep: r, flush: u, once: m } = a;
  process.env.NODE_ENV !== "production" && !n && (o !== void 0 && k('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && k('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'), m !== void 0 && k('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));
  const p = Ae({}, a);
  process.env.NODE_ENV !== "production" && (p.onWarn = k);
  const f = n && o || !n && u !== "post";
  let C;
  if (Ha) {
    if (u === "sync") {
      const P = Db();
      C = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!f) {
      const P = () => {
      };
      return P.stop = Ze, P.resume = Ze, P.pause = Ze, P;
    }
  }
  const T = $e;
  p.call = (P, q, W) => pn(P, T, q, W);
  let y = !1;
  u === "post" ? p.scheduler = (P) => {
    Tt(P, T && T.suspense);
  } : u !== "sync" && (y = !0, p.scheduler = (P, q) => {
    q ? P() : Co(P);
  }), p.augmentJob = (P) => {
    n && (P.flags |= 4), y && (P.flags |= 2, T && (P.id = T.uid, P.i = T));
  };
  const V = db(e, n, p);
  return Ha && (C ? C.push(V) : f && V()), V;
}
function xb(e, n, a) {
  const o = this.proxy, r = Ee(e) ? e.includes(".") ? ap(o, e) : () => o[e] : e.bind(o, o);
  let u;
  te(n) ? u = n : (u = n.handler, a = n);
  const m = Za(this), p = ip(r, u.bind(o), a);
  return m(), p;
}
function ap(e, n) {
  const a = n.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < a.length && o; r++) o = o[a[r]];
    return o;
  };
}
var Lb = /* @__PURE__ */ Symbol("_vte"), Fb = (e) => e.__isTeleport, $r = /* @__PURE__ */ Symbol("_leaveCb");
function Ll(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, Ll(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
// @__NO_SIDE_EFFECTS__
function sp(e, n) {
  return te(e) ? Ae({ name: e.name }, n, { setup: e }) : e;
}
function op(e) {
  e.ids = [
    e.ids[0] + e.ids[2]++ + "-",
    0,
    0
  ];
}
var zm = /* @__PURE__ */ new WeakSet();
function Pm(e, n) {
  let a;
  return !!((a = Object.getOwnPropertyDescriptor(e, n)) && !a.configurable);
}
var mo = /* @__PURE__ */ new WeakMap();
function za(e, n, a, o, r = !1) {
  if ($(e)) {
    e.forEach((W, he) => za(W, n && ($(n) ? n[he] : n), a, o, r));
    return;
  }
  if (Pa(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && za(e, n, a, o.component.subTree);
    return;
  }
  const u = o.shapeFlag & 4 ? Ao(o.component) : o.el, m = r ? null : u, { i: p, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !p) {
    k("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const C = n && n.r, T = p.refs === Ce ? p.refs = {} : p.refs, y = p.setupState, V = /* @__PURE__ */ ue(y), P = y === Ce ? Td : (W) => process.env.NODE_ENV !== "production" && (ge(V, W) && !/* @__PURE__ */ je(V[W]) && k(`Template ref "${W}" used on a non-ref value. It will not work in the production build.`), zm.has(V[W])) || Pm(T, W) ? !1 : ge(V, W), q = (W, he) => !(process.env.NODE_ENV !== "production" && zm.has(W) || he && Pm(T, he));
  if (C != null && C !== f) {
    if (Dm(n), Ee(C))
      T[C] = null, P(C) && (y[C] = null);
    else if (/* @__PURE__ */ je(C)) {
      const W = n;
      q(C, W.k) && (C.value = null), W.k && (T[W.k] = null);
    }
  }
  if (te(f)) oa(f, p, 12, [m, T]);
  else {
    const W = Ee(f), he = /* @__PURE__ */ je(f);
    if (W || he) {
      const ye = () => {
        if (e.f) {
          const fe = W ? P(f) ? y[f] : T[f] : q(f) || !e.k ? f.value : T[e.k];
          if (r) $(fe) && _l(fe, u);
          else if ($(fe)) fe.includes(u) || fe.push(u);
          else if (W)
            T[f] = [u], P(f) && (y[f] = T[f]);
          else {
            const se = [u];
            q(f, e.k) && (f.value = se), e.k && (T[e.k] = se);
          }
        } else W ? (T[f] = m, P(f) && (y[f] = m)) : he ? (q(f, e.k) && (f.value = m), e.k && (T[e.k] = m)) : process.env.NODE_ENV !== "production" && k("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (m) {
        const fe = () => {
          ye(), mo.delete(e);
        };
        fe.id = -1, mo.set(e, fe), Tt(fe, a);
      } else
        Dm(e), ye();
    } else process.env.NODE_ENV !== "production" && k("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function Dm(e) {
  const n = mo.get(e);
  n && (n.flags |= 8, mo.delete(e));
}
var s_ = Wa().requestIdleCallback || ((e) => setTimeout(e, 1)), o_ = Wa().cancelIdleCallback || ((e) => clearTimeout(e)), Pa = (e) => !!e.type.__asyncLoader, Fl = (e) => e.type.__isKeepAlive;
function kb(e, n) {
  rp(e, "a", n);
}
function Bb(e, n) {
  rp(e, "da", n);
}
function rp(e, n, a = $e) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = a;
    for (; r; ) {
      if (r.isDeactivated) return;
      r = r.parent;
    }
    return e();
  });
  if (Ro(n, o, a), a) {
    let r = a.parent;
    for (; r && r.parent; )
      Fl(r.parent.vnode) && qb(o, n, a, r), r = r.parent;
  }
}
function qb(e, n, a, o) {
  const r = Ro(n, e, o, !0);
  lp(() => {
    _l(o[n], r);
  }, a);
}
function Ro(e, n, a = $e, o = !1) {
  if (a) {
    const r = a[e] || (a[e] = []), u = n.__weh || (n.__weh = (...m) => {
      un();
      const p = Za(a), f = pn(n, a, e, m);
      return p(), cn(), f;
    });
    return o ? r.unshift(u) : r.push(u), u;
  } else process.env.NODE_ENV !== "production" && k(`${Ri(zl[e].replace(/ hook$/, ""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
}
var $n = (e) => (n, a = $e) => {
  (!Ha || e === "sp") && Ro(e, (...o) => n(...o), a);
}, Hb = $n("bm"), Jb = $n("m"), jb = $n("bu"), Gb = $n("u"), Wb = $n("bum"), lp = $n("um"), Kb = $n("sp"), $b = $n("rtg"), Xb = $n("rtc");
function Zb(e, n = $e) {
  Ro("ec", e, n);
}
var Yb = /* @__PURE__ */ Symbol.for("v-ndc");
function Xr(e, n, a, o) {
  let r;
  const u = a && a[o], m = $(e);
  if (m || Ee(e)) {
    const p = m && /* @__PURE__ */ ci(e);
    let f = !1, C = !1;
    p && (f = !/* @__PURE__ */ ft(e), C = /* @__PURE__ */ mn(e), e = To(e)), r = new Array(e.length);
    for (let T = 0, y = e.length; T < y; T++) r[T] = n(f ? C ? sa(dn(e[T])) : dn(e[T]) : e[T], T, void 0, u && u[T]);
  } else if (typeof e == "number") if (process.env.NODE_ENV !== "production" && (!Number.isInteger(e) || e < 0))
    k(`The v-for range expects a positive integer value but got ${e}.`), r = [];
  else {
    r = new Array(e);
    for (let p = 0; p < e; p++) r[p] = n(p + 1, p, void 0, u && u[p]);
  }
  else if (ve(e)) if (e[Symbol.iterator]) r = Array.from(e, (p, f) => n(p, f, void 0, u && u[f]));
  else {
    const p = Object.keys(e);
    r = new Array(p.length);
    for (let f = 0, C = p.length; f < C; f++) {
      const T = p[f];
      r[f] = n(e[T], T, f, u && u[f]);
    }
  }
  else r = [];
  return a && (a[o] = r), r;
}
var ul = (e) => e ? Np(e) ? Ao(e) : ul(e.parent) : null, Ei = /* @__PURE__ */ Ae(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(e.refs) : e.refs,
  $parent: (e) => ul(e.parent),
  $root: (e) => ul(e.root),
  $host: (e) => e.ce,
  $emit: (e) => e.emit,
  $options: (e) => Bl(e),
  $forceUpdate: (e) => e.f || (e.f = () => {
    Co(e.update);
  }),
  $nextTick: (e) => e.n || (e.n = Wd.bind(e.proxy)),
  $watch: (e) => xb.bind(e)
}), kl = (e) => e === "_" || e === "$", Zr = (e, n) => e !== Ce && !e.__isScriptSetup && ge(e, n), up = {
  get({ _: e }, n) {
    if (n === "__v_skip") return !0;
    const { ctx: a, setupState: o, data: r, props: u, accessCache: m, type: p, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && n === "__isVue") return !0;
    if (n[0] !== "$") {
      const V = m[n];
      if (V !== void 0) switch (V) {
        case 1:
          return o[n];
        case 2:
          return r[n];
        case 4:
          return a[n];
        case 3:
          return u[n];
      }
      else {
        if (Zr(o, n))
          return m[n] = 1, o[n];
        if (r !== Ce && ge(r, n))
          return m[n] = 2, r[n];
        if (ge(u, n))
          return m[n] = 3, u[n];
        if (a !== Ce && ge(a, n))
          return m[n] = 4, a[n];
        cl && (m[n] = 0);
      }
    }
    const C = Ei[n];
    let T, y;
    if (C)
      return n === "$attrs" ? (Xe(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && go()) : process.env.NODE_ENV !== "production" && n === "$slots" && Xe(e, "get", n), C(e);
    if ((T = p.__cssModules) && (T = T[n])) return T;
    if (a !== Ce && ge(a, n))
      return m[n] = 4, a[n];
    if (y = f.config.globalProperties, ge(y, n)) return y[n];
    process.env.NODE_ENV !== "production" && lt && (!Ee(n) || n.indexOf("__v") !== 0) && (r !== Ce && kl(n[0]) && ge(r, n) ? k(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === lt && k(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, n, a) {
    const { data: o, setupState: r, ctx: u } = e;
    return Zr(r, n) ? (r[n] = a, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && ge(r, n) ? (k(`Cannot mutate <script setup> binding "${n}" from Options API.`), !1) : o !== Ce && ge(o, n) ? (o[n] = a, !0) : ge(e.props, n) ? (process.env.NODE_ENV !== "production" && k(`Attempting to mutate prop "${n}". Props are readonly.`), !1) : n[0] === "$" && n.slice(1) in e ? (process.env.NODE_ENV !== "production" && k(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && n in e.appContext.config.globalProperties ? Object.defineProperty(u, n, {
      enumerable: !0,
      configurable: !0,
      value: a
    }) : u[n] = a, !0);
  },
  has({ _: { data: e, setupState: n, accessCache: a, ctx: o, appContext: r, props: u, type: m } }, p) {
    let f;
    return !!(a[p] || e !== Ce && p[0] !== "$" && ge(e, p) || Zr(n, p) || ge(u, p) || ge(o, p) || ge(Ei, p) || ge(r.config.globalProperties, p) || (f = m.__cssModules) && f[p]);
  },
  defineProperty(e, n, a) {
    return a.get != null ? e._.accessCache[n] = 0 : ge(a, "value") && this.set(e, n, a.value, null), Reflect.defineProperty(e, n, a);
  }
};
process.env.NODE_ENV !== "production" && (up.ownKeys = (e) => (k("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Qb(e) {
  const n = {};
  return Object.defineProperty(n, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Ei).forEach((a) => {
    Object.defineProperty(n, a, {
      configurable: !0,
      enumerable: !1,
      get: () => Ei[a](e),
      set: Ze
    });
  }), n;
}
function ev(e) {
  const { ctx: n, propsOptions: [a] } = e;
  a && Object.keys(a).forEach((o) => {
    Object.defineProperty(n, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Ze
    });
  });
}
function tv(e) {
  const { ctx: n, setupState: a } = e;
  Object.keys(/* @__PURE__ */ ue(a)).forEach((o) => {
    if (!a.__isScriptSetup) {
      if (kl(o[0])) {
        k(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(n, o, {
        enumerable: !0,
        configurable: !0,
        get: () => a[o],
        set: Ze
      });
    }
  });
}
function xm(e) {
  return $(e) ? e.reduce((n, a) => (n[a] = null, n), {}) : e;
}
function nv() {
  const e = /* @__PURE__ */ Object.create(null);
  return (n, a) => {
    e[a] ? k(`${n} property "${a}" is already defined in ${e[a]}.`) : e[a] = n;
  };
}
var cl = !0;
function iv(e) {
  const n = Bl(e), a = e.proxy, o = e.ctx;
  cl = !1, n.beforeCreate && Lm(n.beforeCreate, e, "bc");
  const { data: r, computed: u, methods: m, watch: p, provide: f, inject: C, created: T, beforeMount: y, mounted: V, beforeUpdate: P, updated: q, activated: W, deactivated: he, beforeDestroy: ye, beforeUnmount: fe, destroyed: se, unmounted: He, render: j, renderTracked: Ne, renderTriggered: xe, errorCaptured: Le, serverPrefetch: Ye, expose: Kt, inheritAttrs: gn, components: _t, directives: Oi, filters: ra } = n, hn = process.env.NODE_ENV !== "production" ? nv() : null;
  if (process.env.NODE_ENV !== "production") {
    const [re] = e.propsOptions;
    if (re) for (const ne in re) hn("Props", ne);
  }
  if (C && av(C, o, hn), m) for (const re in m) {
    const ne = m[re];
    te(ne) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, re, {
      value: ne.bind(a),
      configurable: !0,
      enumerable: !0,
      writable: !0
    }) : o[re] = ne.bind(a), process.env.NODE_ENV !== "production" && hn("Methods", re)) : process.env.NODE_ENV !== "production" && k(`Method "${re}" has type "${typeof ne}" in the component definition. Did you reference the function correctly?`);
  }
  if (r) {
    process.env.NODE_ENV !== "production" && !te(r) && k("The data option must be a function. Plain object usage is no longer supported.");
    const re = r.call(a, a);
    if (process.env.NODE_ENV !== "production" && wl(re) && k("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !ve(re)) process.env.NODE_ENV !== "production" && k("data() should return an object.");
    else if (e.data = /* @__PURE__ */ Ol(re), process.env.NODE_ENV !== "production") for (const ne in re)
      hn("Data", ne), kl(ne[0]) || Object.defineProperty(o, ne, {
        configurable: !0,
        enumerable: !0,
        get: () => re[ne],
        set: Ze
      });
  }
  if (cl = !0, u) for (const re in u) {
    const ne = u[re], Pt = te(ne) ? ne.bind(a, a) : te(ne.get) ? ne.get.bind(a, a) : Ze;
    process.env.NODE_ENV !== "production" && Pt === Ze && k(`Computed property "${re}" has no getter.`);
    const En = io({
      get: Pt,
      set: !te(ne) && te(ne.set) ? ne.set.bind(a) : process.env.NODE_ENV !== "production" ? () => {
        k(`Write operation failed: computed property "${re}" is readonly.`);
      } : Ze
    });
    Object.defineProperty(o, re, {
      enumerable: !0,
      configurable: !0,
      get: () => En.value,
      set: (ut) => En.value = ut
    }), process.env.NODE_ENV !== "production" && hn("Computed", re);
  }
  if (p) for (const re in p) cp(p[re], o, a, re);
  if (f) {
    const re = te(f) ? f.call(a) : f;
    Reflect.ownKeys(re).forEach((ne) => {
      zb(ne, re[ne]);
    });
  }
  T && Lm(T, e, "c");
  function st(re, ne) {
    $(ne) ? ne.forEach((Pt) => re(Pt.bind(a))) : ne && re(ne.bind(a));
  }
  if (st(Hb, y), st(Jb, V), st(jb, P), st(Gb, q), st(kb, W), st(Bb, he), st(Zb, Le), st(Xb, Ne), st($b, xe), st(Wb, fe), st(lp, He), st(Kb, Ye), $(Kt))
    if (Kt.length) {
      const re = e.exposed || (e.exposed = {});
      Kt.forEach((ne) => {
        Object.defineProperty(re, ne, {
          get: () => a[ne],
          set: (Pt) => a[ne] = Pt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  j && e.render === Ze && (e.render = j), gn != null && (e.inheritAttrs = gn), _t && (e.components = _t), Oi && (e.directives = Oi), Ye && op(e);
}
function av(e, n, a = Ze) {
  $(e) && (e = ml(e));
  for (const o in e) {
    const r = e[o];
    let u;
    ve(r) ? "default" in r ? u = Ys(r.from || o, r.default, !0) : u = Ys(r.from || o) : u = Ys(r), /* @__PURE__ */ je(u) ? Object.defineProperty(n, o, {
      enumerable: !0,
      configurable: !0,
      get: () => u.value,
      set: (m) => u.value = m
    }) : n[o] = u, process.env.NODE_ENV !== "production" && a("Inject", o);
  }
}
function Lm(e, n, a) {
  pn($(e) ? e.map((o) => o.bind(n.proxy)) : e.bind(n.proxy), n, a);
}
function cp(e, n, a, o) {
  let r = o.includes(".") ? ap(a, o) : () => a[o];
  if (Ee(e)) {
    const u = n[e];
    te(u) ? Oa(r, u) : process.env.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${e}"`, u);
  } else if (te(e)) Oa(r, e.bind(a));
  else if (ve(e)) if ($(e)) e.forEach((u) => cp(u, n, a, o));
  else {
    const u = te(e.handler) ? e.handler.bind(a) : n[e.handler];
    te(u) ? Oa(r, u, e) : process.env.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${e.handler}"`, u);
  }
  else process.env.NODE_ENV !== "production" && k(`Invalid watch option: "${o}"`, e);
}
function Bl(e) {
  const n = e.type, { mixins: a, extends: o } = n, { mixins: r, optionsCache: u, config: { optionMergeStrategies: m } } = e.appContext, p = u.get(n);
  let f;
  return p ? f = p : !r.length && !a && !o ? f = n : (f = {}, r.length && r.forEach((C) => po(f, C, m, !0)), po(f, n, m)), ve(n) && u.set(n, f), f;
}
function po(e, n, a, o = !1) {
  const { mixins: r, extends: u } = n;
  u && po(e, u, a, !0), r && r.forEach((m) => po(e, m, a, !0));
  for (const m in n) if (o && m === "expose") process.env.NODE_ENV !== "production" && k('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
  else {
    const p = sv[m] || a && a[m];
    e[m] = p ? p(e[m], n[m]) : n[m];
  }
  return e;
}
var sv = {
  data: Fm,
  props: km,
  emits: km,
  methods: Aa,
  computed: Aa,
  beforeCreate: gt,
  created: gt,
  beforeMount: gt,
  mounted: gt,
  beforeUpdate: gt,
  updated: gt,
  beforeDestroy: gt,
  beforeUnmount: gt,
  destroyed: gt,
  unmounted: gt,
  activated: gt,
  deactivated: gt,
  errorCaptured: gt,
  serverPrefetch: gt,
  components: Aa,
  directives: Aa,
  watch: rv,
  provide: Fm,
  inject: ov
};
function Fm(e, n) {
  return n ? e ? function() {
    return Ae(te(e) ? e.call(this, this) : e, te(n) ? n.call(this, this) : n);
  } : n : e;
}
function ov(e, n) {
  return Aa(ml(e), ml(n));
}
function ml(e) {
  if ($(e)) {
    const n = {};
    for (let a = 0; a < e.length; a++) n[e[a]] = e[a];
    return n;
  }
  return e;
}
function gt(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function Aa(e, n) {
  return e ? Ae(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function km(e, n) {
  return e ? $(e) && $(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : Ae(/* @__PURE__ */ Object.create(null), xm(e), xm(n ?? {})) : n;
}
function rv(e, n) {
  if (!e) return n;
  if (!n) return e;
  const a = Ae(/* @__PURE__ */ Object.create(null), e);
  for (const o in n) a[o] = gt(e[o], n[o]);
  return a;
}
function mp() {
  return {
    app: null,
    config: {
      isNativeTag: Td,
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
var lv = 0;
function uv(e, n) {
  return function(o, r = null) {
    te(o) || (o = Ae({}, o)), r != null && !ve(r) && (process.env.NODE_ENV !== "production" && k("root props passed to app.mount() must be an object."), r = null);
    const u = mp(), m = /* @__PURE__ */ new WeakSet(), p = [];
    let f = !1;
    const C = u.app = {
      _uid: lv++,
      _component: o,
      _props: r,
      _container: null,
      _context: u,
      _instance: null,
      version: Qm,
      get config() {
        return u.config;
      },
      set config(T) {
        process.env.NODE_ENV !== "production" && k("app.config cannot be replaced. Modify individual options instead.");
      },
      use(T, ...y) {
        return m.has(T) ? process.env.NODE_ENV !== "production" && k("Plugin has already been applied to target app.") : T && te(T.install) ? (m.add(T), T.install(C, ...y)) : te(T) ? (m.add(T), T(C, ...y)) : process.env.NODE_ENV !== "production" && k('A plugin must either be a function or an object with an "install" function.'), C;
      },
      mixin(T) {
        return u.mixins.includes(T) ? process.env.NODE_ENV !== "production" && k("Mixin has already been applied to target app" + (T.name ? `: ${T.name}` : "")) : u.mixins.push(T), C;
      },
      component(T, y) {
        return process.env.NODE_ENV !== "production" && Il(T, u.config), y ? (process.env.NODE_ENV !== "production" && u.components[T] && k(`Component "${T}" has already been registered in target app.`), u.components[T] = y, C) : u.components[T];
      },
      directive(T, y) {
        return process.env.NODE_ENV !== "production" && np(T), y ? (process.env.NODE_ENV !== "production" && u.directives[T] && k(`Directive "${T}" has already been registered in target app.`), u.directives[T] = y, C) : u.directives[T];
      },
      mount(T, y, V) {
        if (f)
          process.env.NODE_ENV !== "production" && k("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && T.__vue_app__ && k("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const P = C._ceVNode || An(o, r);
          return P.appContext = u, V === !0 ? V = "svg" : V === !1 && (V = void 0), process.env.NODE_ENV !== "production" && (u.reload = () => {
            const q = mi(P);
            q.el = null, e(q, T, V);
          }), y && n ? n(P, T) : e(P, T, V), f = !0, C._container = T, T.__vue_app__ = C, process.env.NODE_ENV !== "production" && (C._instance = P.component, Cb(C, Qm)), Ao(P.component);
        }
      },
      onUnmount(T) {
        process.env.NODE_ENV !== "production" && typeof T != "function" && k(`Expected function as first argument to app.onUnmount(), but got ${typeof T}`), p.push(T);
      },
      unmount() {
        f ? (pn(p, C._instance, 16), e(null, C._container), process.env.NODE_ENV !== "production" && (C._instance = null, Rb(C)), delete C._container.__vue_app__) : process.env.NODE_ENV !== "production" && k("Cannot unmount an app that is not mounted.");
      },
      provide(T, y) {
        return process.env.NODE_ENV !== "production" && T in u.provides && (ge(u.provides, T) ? k(`App already provides property with key "${String(T)}". It will be overwritten with the new value.`) : k(`App already provides property with key "${String(T)}" inherited from its parent element. It will be overwritten with the new value.`)), u.provides[T] = y, C;
      },
      runWithContext(T) {
        const y = aa;
        aa = C;
        try {
          return T();
        } finally {
          aa = y;
        }
      }
    };
    return C;
  };
}
var aa = null, cv = (e, n) => n === "modelValue" || n === "model-value" ? e.modelModifiers : e[`${n}Modifiers`] || e[`${at(n)}Modifiers`] || e[`${Nt(n)}Modifiers`];
function mv(e, n, ...a) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Ce;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: T, propsOptions: [y] } = e;
    if (T) if (!(n in T))
      (!y || !(Ri(at(n)) in y)) && k(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${Ri(at(n))}" prop.`);
    else {
      const V = T[n];
      te(V) && (V(...a) || k(`Invalid event arguments: event validation failed for event "${n}".`));
    }
  }
  let r = a;
  const u = n.startsWith("update:"), m = u && cv(o, n.slice(7));
  if (m && (m.trim && (r = a.map((T) => Ee(T) ? T.trim() : T)), m.number && (r = a.map(Ul))), process.env.NODE_ENV !== "production" && Nb(e, n, r), process.env.NODE_ENV !== "production") {
    const T = n.toLowerCase();
    T !== n && o[Ri(T)] && k(`Event "${T}" is emitted in component ${Ya(e, e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Nt(n)}" instead of "${n}".`);
  }
  let p, f = o[p = Ri(n)] || o[p = Ri(at(n))];
  !f && u && (f = o[p = Ri(Nt(n))]), f && pn(f, e, 6, r);
  const C = o[p + "Once"];
  if (C) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[p]) return;
    e.emitted[p] = !0, pn(C, e, 6, r);
  }
}
var dv = /* @__PURE__ */ new WeakMap();
function dp(e, n, a = !1) {
  const o = a ? dv : n.emitsCache, r = o.get(e);
  if (r !== void 0) return r;
  const u = e.emits;
  let m = {}, p = !1;
  if (!te(e)) {
    const f = (C) => {
      const T = dp(C, n, !0);
      T && (p = !0, Ae(m, T));
    };
    !a && n.mixins.length && n.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !u && !p ? (ve(e) && o.set(e, null), null) : ($(u) ? u.forEach((f) => m[f] = null) : Ae(m, u), ve(e) && o.set(e, m), m);
}
function Uo(e, n) {
  return !e || !ja(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), ge(e, n[0].toLowerCase() + n.slice(1)) || ge(e, Nt(n)) || ge(e, n));
}
var dl = !1;
function go() {
  dl = !0;
}
function Yr(e) {
  const { type: n, vnode: a, proxy: o, withProxy: r, propsOptions: [u], slots: m, attrs: p, emit: f, render: C, renderCache: T, props: y, data: V, setupState: P, ctx: q, inheritAttrs: W } = e, he = co(e);
  let ye, fe;
  process.env.NODE_ENV !== "production" && (dl = !1);
  try {
    if (a.shapeFlag & 4) {
      const j = r || o, Ne = process.env.NODE_ENV !== "production" && P.__isScriptSetup ? new Proxy(j, { get(xe, Le, Ye) {
        return k(`Property '${String(Le)}' was accessed via 'this'. Avoid using 'this' in templates.`), Reflect.get(xe, Le, Ye);
      } }) : j;
      ye = nn(C.call(Ne, j, T, process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(y) : y, P, V, q)), fe = p;
    } else {
      const j = n;
      process.env.NODE_ENV !== "production" && p === y && go(), ye = nn(j.length > 1 ? j(process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(y) : y, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return go(), /* @__PURE__ */ Sn(p);
        },
        slots: m,
        emit: f
      } : {
        attrs: p,
        slots: m,
        emit: f
      }) : j(process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(y) : y, null)), fe = n.props ? p : pv(p);
    }
  } catch (j) {
    Da.length = 0, Ka(j, e, 1), ye = An(zt);
  }
  let se = ye, He;
  if (process.env.NODE_ENV !== "production" && ye.patchFlag > 0 && ye.patchFlag & 2048 && ([se, He] = pp(ye)), fe && W !== !1) {
    const j = Object.keys(fe), { shapeFlag: Ne } = se;
    if (j.length) {
      if (Ne & 7)
        u && j.some(xa) && (fe = gv(fe, u)), se = mi(se, fe, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !dl && se.type !== zt) {
        const xe = Object.keys(p), Le = [], Ye = [];
        for (let Kt = 0, gn = xe.length; Kt < gn; Kt++) {
          const _t = xe[Kt];
          ja(_t) ? xa(_t) || Le.push(_t[2].toLowerCase() + _t.slice(3)) : Ye.push(_t);
        }
        Ye.length && k(`Extraneous non-props attributes (${Ye.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`), Le.length && k(`Extraneous non-emits event listeners (${Le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return a.dirs && (process.env.NODE_ENV !== "production" && !Bm(se) && k("Runtime directive used on component with non-element root node. The directives will not function as intended."), se = mi(se, null, !1, !0), se.dirs = se.dirs ? se.dirs.concat(a.dirs) : a.dirs), a.transition && (process.env.NODE_ENV !== "production" && !Bm(se) && k("Component inside <Transition> renders non-element root node that cannot be animated."), Ll(se, a.transition)), process.env.NODE_ENV !== "production" && He ? He(se) : ye = se, co(he), ye;
}
var pp = (e) => {
  const n = e.children, a = e.dynamicChildren, o = ql(n, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048) return pp(o);
  } else return [e, void 0];
  const r = n.indexOf(o), u = a ? a.indexOf(o) : -1, m = (p) => {
    n[r] = p, a && (u > -1 ? a[u] = p : p.patchFlag > 0 && (e.dynamicChildren = [...a, p]));
  };
  return [nn(o), m];
};
function ql(e, n = !0) {
  let a;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (So(r)) {
      if (r.type !== zt || r.children === "v-if") {
        if (a) return;
        if (a = r, process.env.NODE_ENV !== "production" && n && a.patchFlag > 0 && a.patchFlag & 2048) return ql(a.children);
      }
    } else return;
  }
  return a;
}
var pv = (e) => {
  let n;
  for (const a in e) (a === "class" || a === "style" || ja(a)) && ((n || (n = {}))[a] = e[a]);
  return n;
}, gv = (e, n) => {
  const a = {};
  for (const o in e) (!xa(o) || !(o.slice(9) in n)) && (a[o] = e[o]);
  return a;
}, Bm = (e) => e.shapeFlag & 7 || e.type === zt;
function hv(e, n, a) {
  const { props: o, children: r, component: u } = e, { props: m, children: p, patchFlag: f } = n, C = u.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || p) && Mt || n.dirs || n.transition) return !0;
  if (a && f >= 0) {
    if (f & 1024) return !0;
    if (f & 16)
      return o ? qm(o, m, C) : !!m;
    if (f & 8) {
      const T = n.dynamicProps;
      for (let y = 0; y < T.length; y++) {
        const V = T[y];
        if (gp(m, o, V) && !Uo(C, V)) return !0;
      }
    }
  } else
    return (r || p) && (!p || !p.$stable) ? !0 : o === m ? !1 : o ? m ? qm(o, m, C) : !0 : !!m;
  return !1;
}
function qm(e, n, a) {
  const o = Object.keys(n);
  if (o.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < o.length; r++) {
    const u = o[r];
    if (gp(n, e, u) && !Uo(a, u)) return !0;
  }
  return !1;
}
function gp(e, n, a) {
  const o = e[a], r = n[a];
  return a === "style" && ve(o) && ve(r) ? !Al(o, r) : o !== r;
}
function fv({ vnode: e, parent: n, suspense: a }, o) {
  for (; n; ) {
    const r = n.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = o, e = r), r === e)
      (e = n.vnode).el = o, n = n.parent;
    else break;
  }
  a && a.activeBranch === e && (a.vnode.el = o);
}
var hp = {}, fp = () => Object.create(hp), Ip = (e) => Object.getPrototypeOf(e) === hp;
function Iv(e, n, a, o = !1) {
  const r = {}, u = fp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), bp(e, n, r, u);
  for (const m in e.propsOptions[0]) m in r || (r[m] = void 0);
  process.env.NODE_ENV !== "production" && yp(n || {}, r, e), a ? e.props = o ? r : /* @__PURE__ */ ab(r) : e.type.props ? e.props = r : e.props = u, e.attrs = u;
}
function bv(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function vv(e, n, a, o) {
  const { props: r, attrs: u, vnode: { patchFlag: m } } = e, p = /* @__PURE__ */ ue(r), [f] = e.propsOptions;
  let C = !1;
  if (!(process.env.NODE_ENV !== "production" && bv(e)) && (o || m > 0) && !(m & 16)) {
    if (m & 8) {
      const T = e.vnode.dynamicProps;
      for (let y = 0; y < T.length; y++) {
        let V = T[y];
        if (Uo(e.emitsOptions, V)) continue;
        const P = n[V];
        if (f) if (ge(u, V))
          P !== u[V] && (u[V] = P, C = !0);
        else {
          const q = at(V);
          r[q] = pl(f, p, q, P, e, !1);
        }
        else P !== u[V] && (u[V] = P, C = !0);
      }
    }
  } else {
    bp(e, n, r, u) && (C = !0);
    let T;
    for (const y in p) (!n || !ge(n, y) && ((T = Nt(y)) === y || !ge(n, T))) && (f ? a && (a[y] !== void 0 || a[T] !== void 0) && (r[y] = pl(f, p, y, void 0, e, !0)) : delete r[y]);
    if (u !== p)
      for (const y in u) (!n || !ge(n, y)) && (delete u[y], C = !0);
  }
  C && Un(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && yp(n || {}, r, e);
}
function bp(e, n, a, o) {
  const [r, u] = e.propsOptions;
  let m = !1, p;
  if (n) for (let f in n) {
    if (Ea(f)) continue;
    const C = n[f];
    let T;
    r && ge(r, T = at(f)) ? !u || !u.includes(T) ? a[T] = C : (p || (p = {}))[T] = C : Uo(e.emitsOptions, f) || (!(f in o) || C !== o[f]) && (o[f] = C, m = !0);
  }
  if (u) {
    const f = /* @__PURE__ */ ue(a), C = p || Ce;
    for (let T = 0; T < u.length; T++) {
      const y = u[T];
      a[y] = pl(r, f, y, C[y], e, !ge(C, y));
    }
  }
  return m;
}
function pl(e, n, a, o, r, u) {
  const m = e[a];
  if (m != null) {
    const p = ge(m, "default");
    if (p && o === void 0) {
      const f = m.default;
      if (m.type !== Function && !m.skipFactory && te(f)) {
        const { propsDefaults: C } = r;
        if (a in C) o = C[a];
        else {
          const T = Za(r);
          o = C[a] = f.call(null, n), T();
        }
      } else o = f;
      r.ce && r.ce._setProp(a, o);
    }
    m[0] && (u && !p ? o = !1 : m[1] && (o === "" || o === Nt(a)) && (o = !0));
  }
  return o;
}
var yv = /* @__PURE__ */ new WeakMap();
function vp(e, n, a = !1) {
  const o = a ? yv : n.propsCache, r = o.get(e);
  if (r) return r;
  const u = e.props, m = {}, p = [];
  let f = !1;
  if (!te(e)) {
    const T = (y) => {
      f = !0;
      const [V, P] = vp(y, n, !0);
      Ae(m, V), P && p.push(...P);
    };
    !a && n.mixins.length && n.mixins.forEach(T), e.extends && T(e.extends), e.mixins && e.mixins.forEach(T);
  }
  if (!u && !f)
    return ve(e) && o.set(e, na), na;
  if ($(u)) for (let T = 0; T < u.length; T++) {
    process.env.NODE_ENV !== "production" && !Ee(u[T]) && k("props must be strings when using array syntax.", u[T]);
    const y = at(u[T]);
    Hm(y) && (m[y] = Ce);
  }
  else if (u) {
    process.env.NODE_ENV !== "production" && !ve(u) && k("invalid props options", u);
    for (const T in u) {
      const y = at(T);
      if (Hm(y)) {
        const V = u[T], P = m[y] = $(V) || te(V) ? { type: V } : Ae({}, V), q = P.type;
        let W = !1, he = !0;
        if ($(q)) for (let ye = 0; ye < q.length; ++ye) {
          const fe = q[ye], se = te(fe) && fe.name;
          if (se === "Boolean") {
            W = !0;
            break;
          } else se === "String" && (he = !1);
        }
        else W = te(q) && q.name === "Boolean";
        P[0] = W, P[1] = he, (W || ge(P, "default")) && p.push(y);
      }
    }
  }
  const C = [m, p];
  return ve(e) && o.set(e, C), C;
}
function Hm(e) {
  return e[0] !== "$" && !Ea(e) ? !0 : (process.env.NODE_ENV !== "production" && k(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Tv(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function yp(e, n, a) {
  const o = /* @__PURE__ */ ue(n), r = a.propsOptions[0], u = Object.keys(e).map((m) => at(m));
  for (const m in r) {
    let p = r[m];
    p != null && _v(m, o[m], p, process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(o) : o, !u.includes(m));
  }
}
function _v(e, n, a, o, r) {
  const { type: u, required: m, validator: p, skipCheck: f } = a;
  if (m && r) {
    k('Missing required prop: "' + e + '"');
    return;
  }
  if (!(n == null && !m)) {
    if (u != null && u !== !0 && !f) {
      let C = !1;
      const T = $(u) ? u : [u], y = [];
      for (let V = 0; V < T.length && !C; V++) {
        const { valid: P, expectedType: q } = Cv(n, T[V]);
        y.push(q || ""), C = P;
      }
      if (!C) {
        k(Rv(e, n, y));
        return;
      }
    }
    p && !p(n, o) && k('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
var wv = /* @__PURE__ */ Vn("String,Number,Boolean,Function,Symbol,BigInt");
function Cv(e, n) {
  let a;
  const o = Tv(n);
  if (o === "null") a = e === null;
  else if (wv(o)) {
    const r = typeof e;
    a = r === o.toLowerCase(), !a && r === "object" && (a = e instanceof n);
  } else o === "Object" ? a = ve(e) : o === "Array" ? a = $(e) : a = e instanceof n;
  return {
    valid: a,
    expectedType: o
  };
}
function Rv(e, n, a) {
  if (a.length === 0) return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${a.map(yo).join(" | ")}`;
  const r = a[0], u = Cl(n), m = Jm(n, r), p = Jm(n, u);
  return a.length === 1 && jm(r) && Uv(r, u) && (o += ` with value ${m}`), o += `, got ${u} `, jm(u) && (o += `with value ${p}.`), o;
}
function Jm(e, n) {
  return rn(e) ? e.toString() : n === "String" ? `"${e}"` : n === "Number" ? `${Number(e)}` : `${e}`;
}
function jm(e) {
  return [
    "string",
    "number",
    "boolean"
  ].some((n) => e.toLowerCase() === n);
}
function Uv(...e) {
  return e.every((n) => {
    const a = n.toLowerCase();
    return a !== "boolean" && a !== "symbol";
  });
}
var Hl = (e) => e === "_" || e === "_ctx" || e === "$stable", Jl = (e) => $(e) ? e.map(nn) : [nn(e)], Sv = (e, n, a) => {
  if (n._n) return n;
  const o = Mb((...r) => (process.env.NODE_ENV !== "production" && $e && !(a === null && lt) && !(a && a.root !== $e.root) && k(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Jl(n(...r))), a);
  return o._c = !1, o;
}, Tp = (e, n, a) => {
  const o = e._ctx;
  for (const r in e) {
    if (Hl(r)) continue;
    const u = e[r];
    if (te(u)) n[r] = Sv(r, u, o);
    else if (u != null) {
      process.env.NODE_ENV !== "production" && k(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const m = Jl(u);
      n[r] = () => m;
    }
  }
}, _p = (e, n) => {
  process.env.NODE_ENV !== "production" && !Fl(e.vnode) && k("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const a = Jl(n);
  e.slots.default = () => a;
}, gl = (e, n, a) => {
  for (const o in n) (a || !Hl(o)) && (e[o] = n[o]);
}, Av = (e, n, a) => {
  const o = e.slots = fp();
  if (e.vnode.shapeFlag & 32) {
    const r = n._;
    r ? (gl(o, n, a), a && so(o, "_", r, !0)) : Tp(n, o);
  } else n && _p(e, n);
}, Vv = (e, n, a) => {
  const { vnode: o, slots: r } = e;
  let u = !0, m = Ce;
  if (o.shapeFlag & 32) {
    const p = n._;
    p ? process.env.NODE_ENV !== "production" && Mt ? (gl(r, n, a), Un(e, "set", "$slots")) : a && p === 1 ? u = !1 : gl(r, n, a) : (u = !n.$stable, Tp(n, r)), m = n;
  } else n && (_p(e, n), m = { default: 1 });
  if (u)
    for (const p in r) !Hl(p) && m[p] == null && delete r[p];
}, Ra, Gn;
function Hn(e, n) {
  e.appContext.config.performance && ho() && Gn.mark(`vue-${n}-${e.uid}`), process.env.NODE_ENV !== "production" && Vb(e, n, ho() ? Gn.now() : Date.now());
}
function Jn(e, n) {
  if (e.appContext.config.performance && ho()) {
    const a = `vue-${n}-${e.uid}`, o = a + ":end", r = `<${Ya(e, e.type)}> ${n}`;
    Gn.mark(o), Gn.measure(r, a, o), Gn.clearMeasures(r), Gn.clearMarks(a), Gn.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Eb(e, n, ho() ? Gn.now() : Date.now());
}
function ho() {
  return Ra !== void 0 || (typeof window < "u" && window.performance ? (Ra = !0, Gn = window.performance) : Ra = !1), Ra;
}
function Ev() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const n = e.length > 1;
    console.warn(`Feature flag${n ? "s" : ""} ${e.join(", ")} ${n ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
var Tt = Pv;
function Nv(e) {
  return Mv(e);
}
function Mv(e, n) {
  Ev();
  const a = Wa();
  a.__VUE__ = !0, process.env.NODE_ENV !== "production" && Dl(a.__VUE_DEVTOOLS_GLOBAL_HOOK__, a);
  const { insert: o, remove: r, patchProp: u, createElement: m, createText: p, createComment: f, setText: C, setElementText: T, parentNode: y, nextSibling: V, setScopeId: P = Ze, insertStaticContent: q } = e, W = (h, v, U, M = null, O = null, N = null, F = void 0, x = null, L = process.env.NODE_ENV !== "production" && Mt ? !1 : !!v.dynamicChildren) => {
    if (h === v) return;
    h && !Ua(h, v) && (M = In(h), fn(h, O, N, !0), h = null), v.patchFlag === -2 && (L = !1, v.dynamicChildren = null);
    const { type: z, ref: X, shapeFlag: B } = v;
    switch (z) {
      case Xa:
        he(h, v, U, M);
        break;
      case zt:
        ye(h, v, U, M);
        break;
      case eo:
        h == null ? fe(v, U, M, F) : process.env.NODE_ENV !== "production" && se(h, v, U, F);
        break;
      case Et:
        Oi(h, v, U, M, O, N, F, x, L);
        break;
      default:
        B & 1 ? Ne(h, v, U, M, O, N, F, x, L) : B & 6 ? ra(h, v, U, M, O, N, F, x, L) : B & 64 || B & 128 ? z.process(h, v, U, M, O, N, F, x, L, $t) : process.env.NODE_ENV !== "production" && k("Invalid VNode type:", z, `(${typeof z})`);
    }
    X != null && O ? za(X, h && h.ref, N, v || h, !v) : X == null && h && h.ref != null && za(h.ref, null, N, h, !0);
  }, he = (h, v, U, M) => {
    if (h == null) o(v.el = p(v.children), U, M);
    else {
      const O = v.el = h.el;
      v.children !== h.children && C(O, v.children);
    }
  }, ye = (h, v, U, M) => {
    h == null ? o(v.el = f(v.children || ""), U, M) : v.el = h.el;
  }, fe = (h, v, U, M) => {
    [h.el, h.anchor] = q(h.children, v, U, M, h.el, h.anchor);
  }, se = (h, v, U, M) => {
    if (v.children !== h.children) {
      const O = V(h.anchor);
      j(h), [v.el, v.anchor] = q(v.children, U, O, M);
    } else
      v.el = h.el, v.anchor = h.anchor;
  }, He = ({ el: h, anchor: v }, U, M) => {
    let O;
    for (; h && h !== v; )
      O = V(h), o(h, U, M), h = O;
    o(v, U, M);
  }, j = ({ el: h, anchor: v }) => {
    let U;
    for (; h && h !== v; )
      U = V(h), r(h), h = U;
    r(v);
  }, Ne = (h, v, U, M, O, N, F, x, L) => {
    if (v.type === "svg" ? F = "svg" : v.type === "math" && (F = "mathml"), h == null) xe(v, U, M, O, N, F, x, L);
    else {
      const z = h.el && h.el._isVueCE ? h.el : null;
      try {
        z && z._beginPatch(), Kt(h, v, O, N, F, x, L);
      } finally {
        z && z._endPatch();
      }
    }
  }, xe = (h, v, U, M, O, N, F, x) => {
    let L, z;
    const { props: X, shapeFlag: B, transition: K, dirs: Z } = h;
    if (L = h.el = m(h.type, N, X && X.is, X), B & 8 ? T(L, h.children) : B & 16 && Ye(h.children, L, null, M, O, Qr(h, N), F, x), Z && _i(h, null, M, "created"), Le(L, h, h.scopeId, F, M), X) {
      for (const Ie in X) Ie !== "value" && !Ea(Ie) && u(L, Ie, null, X[Ie], N, M);
      "value" in X && u(L, "value", null, X.value, N), (z = X.onVnodeBeforeMount) && _n(z, M, h);
    }
    process.env.NODE_ENV !== "production" && (so(L, "__vnode", h, !0), so(L, "__vueParentComponent", M, !0)), Z && _i(h, null, M, "beforeMount");
    const ce = Ov(O, K);
    if (ce && K.beforeEnter(L), o(L, v, U), (z = X && X.onVnodeMounted) || ce || Z) {
      const Ie = process.env.NODE_ENV !== "production" && Mt;
      Tt(() => {
        let be;
        process.env.NODE_ENV !== "production" && (be = Mm(Ie));
        try {
          z && _n(z, M, h), ce && K.enter(L), Z && _i(h, null, M, "mounted");
        } finally {
          process.env.NODE_ENV !== "production" && Mm(be);
        }
      }, O);
    }
  }, Le = (h, v, U, M, O) => {
    if (U && P(h, U), M) for (let N = 0; N < M.length; N++) P(h, M[N]);
    if (O) {
      let N = O.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = ql(N.children) || N), v === N || Rp(N.type) && (N.ssContent === v || N.ssFallback === v)) {
        const F = O.vnode;
        Le(h, F, F.scopeId, F.slotScopeIds, O.parent);
      }
    }
  }, Ye = (h, v, U, M, O, N, F, x, L = 0) => {
    for (let z = L; z < h.length; z++) W(null, h[z] = x ? Wn(h[z]) : nn(h[z]), v, U, M, O, N, F, x);
  }, Kt = (h, v, U, M, O, N, F) => {
    const x = v.el = h.el;
    process.env.NODE_ENV !== "production" && (x.__vnode = v);
    let { patchFlag: L, dynamicChildren: z, dirs: X } = v;
    L |= h.patchFlag & 16;
    const B = h.props || Ce, K = v.props || Ce;
    let Z;
    if (U && wi(U, !1), (Z = K.onVnodeBeforeUpdate) && _n(Z, U, v, h), X && _i(v, h, U, "beforeUpdate"), U && wi(U, !0), process.env.NODE_ENV !== "production" && Mt && (L = 0, F = !1, z = null), (B.innerHTML && K.innerHTML == null || B.textContent && K.textContent == null) && T(x, ""), z ? (gn(h.dynamicChildren, z, x, U, M, Qr(v, O), N), process.env.NODE_ENV !== "production" && Qs(h, v)) : F || Pt(h, v, x, null, U, M, Qr(v, O), N, !1), L > 0) {
      if (L & 16) _t(x, B, K, U, O);
      else if (L & 2 && B.class !== K.class && u(x, "class", null, K.class, O), L & 4 && u(x, "style", B.style, K.style, O), L & 8) {
        const ce = v.dynamicProps;
        for (let Ie = 0; Ie < ce.length; Ie++) {
          const be = ce[Ie], Oe = B[be], Pe = K[be];
          (Pe !== Oe || be === "value") && u(x, be, Oe, Pe, O, U);
        }
      }
      L & 1 && h.children !== v.children && T(x, v.children);
    } else !F && z == null && _t(x, B, K, U, O);
    ((Z = K.onVnodeUpdated) || X) && Tt(() => {
      Z && _n(Z, U, v, h), X && _i(v, h, U, "updated");
    }, M);
  }, gn = (h, v, U, M, O, N, F) => {
    for (let x = 0; x < v.length; x++) {
      const L = h[x], z = v[x];
      W(L, z, L.el && (L.type === Et || !Ua(L, z) || L.shapeFlag & 198) ? y(L.el) : U, null, M, O, N, F, !0);
    }
  }, _t = (h, v, U, M, O) => {
    if (v !== U) {
      if (v !== Ce)
        for (const N in v) !Ea(N) && !(N in U) && u(h, N, v[N], null, O, M);
      for (const N in U) {
        if (Ea(N)) continue;
        const F = U[N], x = v[N];
        F !== x && N !== "value" && u(h, N, x, F, O, M);
      }
      "value" in U && u(h, "value", v.value, U.value, O);
    }
  }, Oi = (h, v, U, M, O, N, F, x, L) => {
    const z = v.el = h ? h.el : p(""), X = v.anchor = h ? h.anchor : p("");
    let { patchFlag: B, dynamicChildren: K, slotScopeIds: Z } = v;
    process.env.NODE_ENV !== "production" && (Mt || B & 2048) && (B = 0, L = !1, K = null), Z && (x = x ? x.concat(Z) : Z), h == null ? (o(z, U, M), o(X, U, M), Ye(v.children || [], U, X, O, N, F, x, L)) : B > 0 && B & 64 && K && h.dynamicChildren && h.dynamicChildren.length === K.length ? (gn(h.dynamicChildren, K, U, O, N, F, x), process.env.NODE_ENV !== "production" ? Qs(h, v) : (v.key != null || O && v === O.subTree) && Qs(h, v, !0)) : Pt(h, v, U, X, O, N, F, x, L);
  }, ra = (h, v, U, M, O, N, F, x, L) => {
    v.slotScopeIds = x, h == null ? v.shapeFlag & 512 ? O.ctx.activate(v, U, M, F, L) : hn(v, U, M, O, N, F, L) : st(h, v, L);
  }, hn = (h, v, U, M, O, N, F) => {
    const x = h.component = Hv(h, M, O);
    if (process.env.NODE_ENV !== "production" && x.type.__hmrId && yb(x), process.env.NODE_ENV !== "production" && ($s(h), Hn(x, "mount")), Fl(h) && (x.ctx.renderer = $t), process.env.NODE_ENV !== "production" && Hn(x, "init"), jv(x, !1, F), process.env.NODE_ENV !== "production" && Jn(x, "init"), process.env.NODE_ENV !== "production" && Mt && (h.el = null), x.asyncDep) {
      if (O && O.registerDep(x, re, F), !h.el) {
        const L = x.subTree = An(zt);
        ye(null, L, v, U), h.placeholder = L.el;
      }
    } else re(x, h, v, U, O, N, F);
    process.env.NODE_ENV !== "production" && (Xs(), Jn(x, "mount"));
  }, st = (h, v, U) => {
    const M = v.component = h.component;
    if (hv(h, v, U)) if (M.asyncDep && !M.asyncResolved) {
      process.env.NODE_ENV !== "production" && $s(v), ne(M, v, U), process.env.NODE_ENV !== "production" && Xs();
      return;
    } else
      M.next = v, M.update();
    else
      v.el = h.el, M.vnode = v;
  }, re = (h, v, U, M, O, N, F) => {
    const x = () => {
      if (h.isMounted) {
        let { next: B, bu: K, u: Z, parent: ce, vnode: Ie } = h;
        {
          const tt = wp(h);
          if (tt) {
            B && (B.el = Ie.el, ne(h, B, F)), tt.asyncDep.then(() => {
              Tt(() => {
                h.isUnmounted || z();
              }, O);
            });
            return;
          }
        }
        let be = B, Oe;
        process.env.NODE_ENV !== "production" && $s(B || h.vnode), wi(h, !1), B ? (B.el = Ie.el, ne(h, B, F)) : B = Ie, K && Yi(K), (Oe = B.props && B.props.onVnodeBeforeUpdate) && _n(Oe, ce, B, Ie), wi(h, !0), process.env.NODE_ENV !== "production" && Hn(h, "render");
        const Pe = Yr(h);
        process.env.NODE_ENV !== "production" && Jn(h, "render");
        const ct = h.subTree;
        h.subTree = Pe, process.env.NODE_ENV !== "production" && Hn(h, "patch"), W(ct, Pe, y(ct.el), In(ct), h, O, N), process.env.NODE_ENV !== "production" && Jn(h, "patch"), B.el = Pe.el, be === null && fv(h, Pe.el), Z && Tt(Z, O), (Oe = B.props && B.props.onVnodeUpdated) && Tt(() => _n(Oe, ce, B, Ie), O), process.env.NODE_ENV !== "production" && Qd(h), process.env.NODE_ENV !== "production" && Xs();
      } else {
        let B;
        const { el: K, props: Z } = v, { bm: ce, m: Ie, parent: be, root: Oe, type: Pe } = h, ct = Pa(v);
        if (wi(h, !1), ce && Yi(ce), !ct && (B = Z && Z.onVnodeBeforeMount) && _n(B, be, v), wi(h, !0), K && Di) {
          const tt = () => {
            process.env.NODE_ENV !== "production" && Hn(h, "render"), h.subTree = Yr(h), process.env.NODE_ENV !== "production" && Jn(h, "render"), process.env.NODE_ENV !== "production" && Hn(h, "hydrate"), Di(K, h.subTree, h, O, null), process.env.NODE_ENV !== "production" && Jn(h, "hydrate");
          };
          ct && Pe.__asyncHydrate ? Pe.__asyncHydrate(K, h, tt) : tt();
        } else {
          Oe.ce && Oe.ce._hasShadowRoot() && Oe.ce._injectChildStyle(Pe, h.parent ? h.parent.type : void 0), process.env.NODE_ENV !== "production" && Hn(h, "render");
          const tt = h.subTree = Yr(h);
          process.env.NODE_ENV !== "production" && Jn(h, "render"), process.env.NODE_ENV !== "production" && Hn(h, "patch"), W(null, tt, U, M, h, O, N), process.env.NODE_ENV !== "production" && Jn(h, "patch"), v.el = tt.el;
        }
        if (Ie && Tt(Ie, O), !ct && (B = Z && Z.onVnodeMounted)) {
          const tt = v;
          Tt(() => _n(B, be, tt), O);
        }
        (v.shapeFlag & 256 || be && Pa(be.vnode) && be.vnode.shapeFlag & 256) && h.a && Tt(h.a, O), h.isMounted = !0, process.env.NODE_ENV !== "production" && Ub(h), v = U = M = null;
      }
    };
    h.scope.on();
    const L = h.effect = new Ad(x);
    h.scope.off();
    const z = h.update = L.run.bind(L), X = h.job = L.runIfDirty.bind(L);
    X.i = h, X.id = h.uid, L.scheduler = () => Co(X), wi(h, !0), process.env.NODE_ENV !== "production" && (L.onTrack = h.rtc ? (B) => Yi(h.rtc, B) : void 0, L.onTrigger = h.rtg ? (B) => Yi(h.rtg, B) : void 0), z();
  }, ne = (h, v, U) => {
    v.component = h;
    const M = h.vnode.props;
    h.vnode = v, h.next = null, vv(h, v.props, M, U), Vv(h, v.children, U), un(), Nm(h), cn();
  }, Pt = (h, v, U, M, O, N, F, x, L = !1) => {
    const z = h && h.children, X = h ? h.shapeFlag : 0, B = v.children, { patchFlag: K, shapeFlag: Z } = v;
    if (K > 0) {
      if (K & 128) {
        ut(z, B, U, M, O, N, F, x, L);
        return;
      } else if (K & 256) {
        En(z, B, U, M, O, N, F, x, L);
        return;
      }
    }
    Z & 8 ? (X & 16 && di(z, O, N), B !== z && T(U, B)) : X & 16 ? Z & 16 ? ut(z, B, U, M, O, N, F, x, L) : di(z, O, N, !0) : (X & 8 && T(U, ""), Z & 16 && Ye(B, U, M, O, N, F, x, L));
  }, En = (h, v, U, M, O, N, F, x, L) => {
    h = h || na, v = v || na;
    const z = h.length, X = v.length, B = Math.min(z, X);
    let K;
    for (K = 0; K < B; K++) {
      const Z = v[K] = L ? Wn(v[K]) : nn(v[K]);
      W(h[K], Z, U, null, O, N, F, x, L);
    }
    z > X ? di(h, O, N, !0, !1, B) : Ye(v, U, M, O, N, F, x, L, B);
  }, ut = (h, v, U, M, O, N, F, x, L) => {
    let z = 0;
    const X = v.length;
    let B = h.length - 1, K = X - 1;
    for (; z <= B && z <= K; ) {
      const Z = h[z], ce = v[z] = L ? Wn(v[z]) : nn(v[z]);
      if (Ua(Z, ce)) W(Z, ce, U, null, O, N, F, x, L);
      else break;
      z++;
    }
    for (; z <= B && z <= K; ) {
      const Z = h[B], ce = v[K] = L ? Wn(v[K]) : nn(v[K]);
      if (Ua(Z, ce)) W(Z, ce, U, null, O, N, F, x, L);
      else break;
      B--, K--;
    }
    if (z > B) {
      if (z <= K) {
        const Z = K + 1, ce = Z < X ? v[Z].el : M;
        for (; z <= K; )
          W(null, v[z] = L ? Wn(v[z]) : nn(v[z]), U, ce, O, N, F, x, L), z++;
      }
    } else if (z > K) for (; z <= B; )
      fn(h[z], O, N, !0), z++;
    else {
      const Z = z, ce = z, Ie = /* @__PURE__ */ new Map();
      for (z = ce; z <= K; z++) {
        const Ge = v[z] = L ? Wn(v[z]) : nn(v[z]);
        Ge.key != null && (process.env.NODE_ENV !== "production" && Ie.has(Ge.key) && k("Duplicate keys found during update:", JSON.stringify(Ge.key), "Make sure keys are unique."), Ie.set(Ge.key, z));
      }
      let be, Oe = 0;
      const Pe = K - ce + 1;
      let ct = !1, tt = 0;
      const Mn = new Array(Pe);
      for (z = 0; z < Pe; z++) Mn[z] = 0;
      for (z = Z; z <= B; z++) {
        const Ge = h[z];
        if (Oe >= Pe) {
          fn(Ge, O, N, !0);
          continue;
        }
        let Dt;
        if (Ge.key != null) Dt = Ie.get(Ge.key);
        else for (be = ce; be <= K; be++) if (Mn[be - ce] === 0 && Ua(Ge, v[be])) {
          Dt = be;
          break;
        }
        Dt === void 0 ? fn(Ge, O, N, !0) : (Mn[Dt - ce] = z + 1, Dt >= tt ? tt = Dt : ct = !0, W(Ge, v[Dt], U, null, O, N, F, x, L), Oe++);
      }
      const xi = ct ? zv(Mn) : na;
      for (be = xi.length - 1, z = Pe - 1; z >= 0; z--) {
        const Ge = ce + z, Dt = v[Ge], es = v[Ge + 1], ts = Ge + 1 < X ? es.el || Cp(es) : M;
        Mn[z] === 0 ? W(null, Dt, U, ts, O, N, F, x, L) : ct && (be < 0 || z !== xi[be] ? zi(Dt, U, ts, 2) : be--);
      }
    }
  }, zi = (h, v, U, M, O = null) => {
    const { el: N, type: F, transition: x, children: L, shapeFlag: z } = h;
    if (z & 6) {
      zi(h.component.subTree, v, U, M);
      return;
    }
    if (z & 128) {
      h.suspense.move(v, U, M);
      return;
    }
    if (z & 64) {
      F.move(h, v, U, $t);
      return;
    }
    if (F === Et) {
      o(N, v, U);
      for (let X = 0; X < L.length; X++) zi(L[X], v, U, M);
      o(h.anchor, v, U);
      return;
    }
    if (F === eo) {
      He(h, v, U);
      return;
    }
    if (M !== 2 && z & 1 && x) if (M === 0) x.persisted && !N[$r] ? o(N, v, U) : (x.beforeEnter(N), o(N, v, U), Tt(() => x.enter(N), O));
    else {
      const { leave: X, delayLeave: B, afterLeave: K } = x, Z = () => {
        h.ctx.isUnmounted ? r(N) : o(N, v, U);
      }, ce = () => {
        const Ie = N._isLeaving || !!N[$r];
        N._isLeaving && N[$r](!0), x.persisted && !Ie ? Z() : X(N, () => {
          Z(), K && K();
        });
      };
      B ? B(N, Z, ce) : ce();
    }
    else o(N, v, U);
  }, fn = (h, v, U, M = !1, O = !1) => {
    const { type: N, props: F, ref: x, children: L, dynamicChildren: z, shapeFlag: X, patchFlag: B, dirs: K, cacheIndex: Z, memo: ce } = h;
    if (B === -2 && (O = !1), x != null && (un(), za(x, null, U, h, !0), cn()), Z != null && (v.renderCache[Z] = void 0), X & 256) {
      v.ctx.deactivate(h);
      return;
    }
    const Ie = X & 1 && K, be = !Pa(h);
    let Oe;
    if (be && (Oe = F && F.onVnodeBeforeUnmount) && _n(Oe, v, h), X & 6) Pi(h.component, U, M);
    else {
      if (X & 128) {
        h.suspense.unmount(U, M);
        return;
      }
      Ie && _i(h, null, v, "beforeUnmount"), X & 64 ? h.type.remove(h, v, U, $t, M) : z && !z.hasOnce && (N !== Et || B > 0 && B & 64) ? di(z, v, U, !1, !0) : (N === Et && B & 384 || !O && X & 16) && di(L, v, U), M && la(h);
    }
    const Pe = ce != null && Z == null;
    (be && (Oe = F && F.onVnodeUnmounted) || Ie || Pe) && Tt(() => {
      Oe && _n(Oe, v, h), Ie && _i(h, null, v, "unmounted"), Pe && (h.el = null);
    }, U);
  }, la = (h) => {
    const { type: v, el: U, anchor: M, transition: O } = h;
    if (v === Et) {
      process.env.NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && O && !O.persisted ? h.children.forEach((F) => {
        F.type === zt ? r(F.el) : la(F);
      }) : Xn(U, M);
      return;
    }
    if (v === eo) {
      j(h);
      return;
    }
    const N = () => {
      r(U), O && !O.persisted && O.afterLeave && O.afterLeave();
    };
    if (h.shapeFlag & 1 && O && !O.persisted) {
      const { leave: F, delayLeave: x } = O, L = () => F(U, N);
      x ? x(h.el, N, L) : L();
    } else N();
  }, Xn = (h, v) => {
    let U;
    for (; h !== v; )
      U = V(h), r(h), h = U;
    r(v);
  }, Pi = (h, v, U) => {
    process.env.NODE_ENV !== "production" && h.type.__hmrId && Tb(h);
    const { bum: M, scope: O, job: N, subTree: F, um: x, m: L, a: z } = h;
    Gm(L), Gm(z), M && Yi(M), O.stop(), N && (N.flags |= 8, fn(F, h, v, U)), x && Tt(x, v), Tt(() => {
      h.isUnmounted = !0;
    }, v), process.env.NODE_ENV !== "production" && Ab(h);
  }, di = (h, v, U, M = !1, O = !1, N = 0) => {
    for (let F = N; F < h.length; F++) fn(h[F], v, U, M, O);
  }, In = (h) => {
    if (h.shapeFlag & 6) return In(h.component.subTree);
    if (h.shapeFlag & 128) return h.suspense.next();
    const v = V(h.anchor || h.el), U = v && v[Lb];
    return U ? V(U) : v;
  };
  let Nn = !1;
  const Qa = (h, v, U) => {
    let M;
    h == null ? v._vnode && (fn(v._vnode, null, null, !0), M = v._vnode.component) : W(v._vnode || null, h, v, null, null, null, U), v._vnode = h, Nn || (Nn = !0, Nm(M), Xd(), Nn = !1);
  }, $t = {
    p: W,
    um: fn,
    m: zi,
    r: la,
    mt: hn,
    mc: Ye,
    pc: Pt,
    pbc: gn,
    n: In,
    o: e
  };
  let Zn, Di;
  return n && ([Zn, Di] = n($t)), {
    render: Qa,
    hydrate: Zn,
    createApp: uv(Qa, Zn)
  };
}
function Qr({ type: e, props: n }, a) {
  return a === "svg" && e === "foreignObject" || a === "mathml" && e === "annotation-xml" && n && n.encoding && n.encoding.includes("html") ? void 0 : a;
}
function wi({ effect: e, job: n }, a) {
  a ? (e.flags |= 32, n.flags |= 4) : (e.flags &= -33, n.flags &= -5);
}
function Ov(e, n) {
  return (!e || e && !e.pendingBranch) && n && !n.persisted;
}
function Qs(e, n, a = !1) {
  const o = e.children, r = n.children;
  if ($(o) && $(r)) for (let u = 0; u < o.length; u++) {
    const m = o[u];
    let p = r[u];
    p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = r[u] = Wn(r[u]), p.el = m.el), !a && p.patchFlag !== -2 && Qs(m, p)), p.type === Xa && (p.patchFlag === -1 && (p = r[u] = Wn(p)), p.el = m.el), p.type === zt && !p.el && (p.el = m.el), process.env.NODE_ENV !== "production" && p.el && (p.el.__vnode = p);
  }
}
function zv(e) {
  const n = e.slice(), a = [0];
  let o, r, u, m, p;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const C = e[o];
    if (C !== 0) {
      if (r = a[a.length - 1], e[r] < C) {
        n[o] = r, a.push(o);
        continue;
      }
      for (u = 0, m = a.length - 1; u < m; )
        p = u + m >> 1, e[a[p]] < C ? u = p + 1 : m = p;
      C < e[a[u]] && (u > 0 && (n[o] = a[u - 1]), a[u] = o);
    }
  }
  for (u = a.length, m = a[u - 1]; u-- > 0; )
    a[u] = m, m = n[m];
  return a;
}
function wp(e) {
  const n = e.subTree.component;
  if (n) return n.asyncDep && !n.asyncResolved ? n : wp(n);
}
function Gm(e) {
  if (e) for (let n = 0; n < e.length; n++) e[n].flags |= 8;
}
function Cp(e) {
  if (e.placeholder) return e.placeholder;
  const n = e.component;
  return n ? Cp(n.subTree) : null;
}
var Rp = (e) => e.__isSuspense;
function Pv(e, n) {
  n && n.pendingBranch ? $(e) ? n.effects.push(...e) : n.effects.push(e) : $d(e);
}
var Et = /* @__PURE__ */ Symbol.for("v-fgt"), Xa = /* @__PURE__ */ Symbol.for("v-txt"), zt = /* @__PURE__ */ Symbol.for("v-cmt"), eo = /* @__PURE__ */ Symbol.for("v-stc"), Da = [], Ot = null;
function Gt(e = !1) {
  Da.push(Ot = e ? null : []);
}
function Dv() {
  Da.pop(), Ot = Da[Da.length - 1] || null;
}
var qa = 1;
function Wm(e, n = !1) {
  qa += e, e < 0 && Ot && n && (Ot.hasOnce = !0);
}
function Up(e) {
  return e.dynamicChildren = qa > 0 ? Ot || na : null, Dv(), qa > 0 && Ot && Ot.push(e), e;
}
function en(e, n, a, o, r, u) {
  return Up(ke(e, n, a, o, r, u, !0));
}
function xv(e, n, a, o, r) {
  return Up(An(e, n, a, o, r, !0));
}
function So(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ua(e, n) {
  if (process.env.NODE_ENV !== "production" && n.shapeFlag & 6 && e.component) {
    const a = Zs.get(n.type);
    if (a && a.has(e.component))
      return e.shapeFlag &= -257, n.shapeFlag &= -513, !1;
  }
  return e.type === n.type && e.key === n.key;
}
var Km, Lv = (...e) => Ap(...Km ? Km(e, lt) : e), Sp = ({ key: e }) => e ?? null, to = ({ ref: e, ref_key: n, ref_for: a }) => (typeof e == "number" && (e = "" + e), e != null ? Ee(e) || /* @__PURE__ */ je(e) || te(e) ? {
  i: lt,
  r: e,
  k: n,
  f: !!a
} : e : null);
function ke(e, n = null, a = null, o = 0, r = null, u = e === Et ? 0 : 1, m = !1, p = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && Sp(n),
    ref: n && to(n),
    scopeId: tp,
    slotScopeIds: null,
    children: a,
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
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: lt
  };
  return p ? (jl(f, a), u & 128 && e.normalize(f)) : a && (f.shapeFlag |= Ee(a) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && k("VNode created with invalid key (NaN). VNode type:", f.type), qa > 0 && !m && Ot && (f.patchFlag > 0 || u & 6) && f.patchFlag !== 32 && Ot.push(f), f;
}
var An = process.env.NODE_ENV !== "production" ? Lv : Ap;
function Ap(e, n = null, a = null, o = 0, r = null, u = !1) {
  if ((!e || e === Yb) && (process.env.NODE_ENV !== "production" && !e && k(`Invalid vnode type when creating vnode: ${e}.`), e = zt), So(e)) {
    const p = mi(e, n, !0);
    return a && jl(p, a), qa > 0 && !u && Ot && (p.shapeFlag & 6 ? Ot[Ot.indexOf(e)] = p : Ot.push(p)), p.patchFlag = -2, p;
  }
  if (Pp(e) && (e = e.__vccOpts), n) {
    n = Fv(n);
    let { class: p, style: f } = n;
    p && !Ee(p) && (n.class = La(p)), ve(f) && (/* @__PURE__ */ oo(f) && !$(f) && (f = Ae({}, f)), n.style = Sl(f));
  }
  const m = Ee(e) ? 1 : Rp(e) ? 128 : Fb(e) ? 64 : ve(e) ? 4 : te(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && m & 4 && /* @__PURE__ */ oo(e) && (e = /* @__PURE__ */ ue(e), k("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), ke(e, n, a, o, r, m, u, !0);
}
function Fv(e) {
  return e ? /* @__PURE__ */ oo(e) || Ip(e) ? Ae({}, e) : e : null;
}
function mi(e, n, a = !1, o = !1) {
  const { props: r, ref: u, patchFlag: m, children: p, transition: f } = e, C = n ? kv(r || {}, n) : r, T = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: C,
    key: C && Sp(C),
    ref: n && n.ref ? a && u ? $(u) ? u.concat(to(n)) : [u, to(n)] : to(n) : u,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && m === -1 && $(p) ? p.map(Vp) : p,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: n && e.type !== Et ? m === -1 ? 16 : m | 16 : m,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && mi(e.ssContent),
    ssFallback: e.ssFallback && mi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && Ll(T, f.clone(T)), T;
}
function Vp(e) {
  const n = mi(e);
  return $(e.children) && (n.children = e.children.map(Vp)), n;
}
function hl(e = " ", n = 0) {
  return An(Xa, null, e, n);
}
function Ws(e = "", n = !1) {
  return n ? (Gt(), xv(zt, null, e)) : An(zt, null, e);
}
function nn(e) {
  return e == null || typeof e == "boolean" ? An(zt) : $(e) ? An(Et, null, e.slice()) : So(e) ? Wn(e) : An(Xa, null, String(e));
}
function Wn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mi(e);
}
function jl(e, n) {
  let a = 0;
  const { shapeFlag: o } = e;
  if (n == null) n = null;
  else if ($(n)) a = 16;
  else if (typeof n == "object") if (o & 65) {
    const r = n.default;
    r && (r._c && (r._d = !1), jl(e, r()), r._c && (r._d = !0));
    return;
  } else {
    a = 32;
    const r = n._;
    !r && !Ip(n) ? n._ctx = lt : r === 3 && lt && (lt.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024));
  }
  else te(n) ? (n = {
    default: n,
    _ctx: lt
  }, a = 32) : (n = String(n), o & 64 ? (a = 16, n = [hl(n)]) : a = 8);
  e.children = n, e.shapeFlag |= a;
}
function kv(...e) {
  const n = {};
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    for (const r in o) if (r === "class")
      n.class !== o.class && (n.class = La([n.class, o.class]));
    else if (r === "style") n.style = Sl([n.style, o.style]);
    else if (ja(r)) {
      const u = n[r], m = o[r];
      m && u !== m && !($(u) && u.includes(m)) ? n[r] = u ? [].concat(u, m) : m : m == null && u == null && !xa(r) && (n[r] = m);
    } else r !== "" && (n[r] = o[r]);
  }
  return n;
}
function _n(e, n, a, o = null) {
  pn(e, n, 7, [a, o]);
}
var Bv = mp(), qv = 0;
function Hv(e, n, a) {
  const o = e.type, r = (n ? n.appContext : e.appContext) || Bv, u = {
    uid: qv++,
    vnode: e,
    type: o,
    parent: n,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    job: null,
    scope: new F2(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: n ? n.provides : Object.create(r.provides),
    ids: n ? n.ids : [
      "",
      0,
      0
    ],
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: vp(o, r),
    emitsOptions: dp(o, r),
    emit: null,
    emitted: null,
    propsDefaults: Ce,
    inheritAttrs: o.inheritAttrs,
    ctx: Ce,
    data: Ce,
    props: Ce,
    attrs: Ce,
    slots: Ce,
    refs: Ce,
    setupState: Ce,
    setupContext: null,
    suspense: a,
    suspenseId: a ? a.pendingId : 0,
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
  return process.env.NODE_ENV !== "production" ? u.ctx = Qb(u) : u.ctx = { _: u }, u.root = n ? n.root : u, u.emit = mv.bind(null, u), e.ce && e.ce(u), u;
}
var $e = null, Ep = () => $e || lt, fo, fl;
{
  const e = Wa(), n = (a, o) => {
    let r;
    return (r = e[a]) || (r = e[a] = []), r.push(o), (u) => {
      r.length > 1 ? r.forEach((m) => m(u)) : r[0](u);
    };
  };
  fo = n("__VUE_INSTANCE_SETTERS__", (a) => $e = a), fl = n("__VUE_SSR_SETTERS__", (a) => Ha = a);
}
var Za = (e) => {
  const n = $e;
  return fo(e), e.scope.on(), () => {
    e.scope.off(), fo(n);
  };
}, $m = () => {
  $e && $e.scope.off(), fo(null);
}, Jv = /* @__PURE__ */ Vn("slot,component");
function Il(e, { isNativeTag: n }) {
  (Jv(e) || n(e)) && k("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Np(e) {
  return e.vnode.shapeFlag & 4;
}
var Ha = !1;
function jv(e, n = !1, a = !1) {
  n && fl(n);
  const { props: o, children: r } = e.vnode, u = Np(e);
  Iv(e, o, u, n), Av(e, r, a || n);
  const m = u ? Gv(e, n) : void 0;
  return n && fl(!1), m;
}
function Gv(e, n) {
  const a = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (a.name && Il(a.name, e.appContext.config), a.components) {
      const r = Object.keys(a.components);
      for (let u = 0; u < r.length; u++) Il(r[u], e.appContext.config);
    }
    if (a.directives) {
      const r = Object.keys(a.directives);
      for (let u = 0; u < r.length; u++) np(r[u]);
    }
    a.compilerOptions && Mp() && k('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, up), process.env.NODE_ENV !== "production" && ev(e);
  const { setup: o } = a;
  if (o) {
    un();
    const r = e.setupContext = o.length > 1 ? Kv(e) : null, u = Za(e), m = oa(o, e, 0, [process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(e.props) : e.props, r]), p = wl(m);
    if (cn(), u(), (p || e.sp) && !Pa(e) && op(e), p) {
      if (m.then($m, $m), n) return m.then((f) => {
        Xm(e, f, n);
      }).catch((f) => {
        Ka(f, e, 0);
      });
      e.asyncDep = m, process.env.NODE_ENV !== "production" && !e.suspense && k(`Component <${Ya(e, a)}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
    } else Xm(e, m, n);
  } else Op(e, n);
}
function Xm(e, n, a) {
  te(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : ve(n) ? (process.env.NODE_ENV !== "production" && So(n) && k("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = n), e.setupState = Jd(n), process.env.NODE_ENV !== "production" && tv(e)) : process.env.NODE_ENV !== "production" && n !== void 0 && k(`setup() should return an object. Received: ${n === null ? "null" : typeof n}`), Op(e, a);
}
var no, Zm, Mp = () => !no;
function Op(e, n, a) {
  const o = e.type;
  if (!e.render) {
    if (!n && no && !o.render) {
      const r = o.template || Bl(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Hn(e, "compile");
        const { isCustomElement: u, compilerOptions: m } = e.appContext.config, { delimiters: p, compilerOptions: f } = o, C = Ae(Ae({
          isCustomElement: u,
          delimiters: p
        }, m), f);
        o.render = no(r, C), process.env.NODE_ENV !== "production" && Jn(e, "compile");
      }
    }
    e.render = o.render || Ze, Zm && Zm(e);
  }
  {
    const r = Za(e);
    un();
    try {
      iv(e);
    } finally {
      cn(), r();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === Ze && !n && (!no && o.template ? k('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : k("Component is missing template or render function: ", o));
}
var Ym = process.env.NODE_ENV !== "production" ? {
  get(e, n) {
    return go(), Xe(e, "get", ""), e[n];
  },
  set() {
    return k("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return k("setupContext.attrs is readonly."), !1;
  }
} : { get(e, n) {
  return Xe(e, "get", ""), e[n];
} };
function Wv(e) {
  return new Proxy(e.slots, { get(n, a) {
    return Xe(e, "get", "$slots"), n[a];
  } });
}
function Kv(e) {
  const n = (a) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && k("expose() should be called only once per setup()."), a != null)) {
      let o = typeof a;
      o === "object" && ($(a) ? o = "array" : /* @__PURE__ */ je(a) && (o = "ref")), o !== "object" && k(`expose() should be passed a plain object, received ${o}.`);
    }
    e.exposed = a || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let a, o;
    return Object.freeze({
      get attrs() {
        return a || (a = new Proxy(e.attrs, Ym));
      },
      get slots() {
        return o || (o = Wv(e));
      },
      get emit() {
        return (r, ...u) => e.emit(r, ...u);
      },
      expose: n
    });
  } else return {
    attrs: new Proxy(e.attrs, Ym),
    slots: e.slots,
    emit: e.emit,
    expose: n
  };
}
function Ao(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Jd(sb(e.exposed)), {
    get(n, a) {
      if (a in n) return n[a];
      if (a in Ei) return Ei[a](e);
    },
    has(n, a) {
      return a in n || a in Ei;
    }
  })) : e.proxy;
}
var $v = /(?:^|[-_])\w/g, Xv = (e) => e.replace($v, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function zp(e, n = !0) {
  return te(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Ya(e, n, a = !1) {
  let o = zp(n);
  if (!o && n.__file) {
    const r = n.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e) {
    const r = (u) => {
      for (const m in u) if (u[m] === n) return m;
    };
    o = r(e.components) || e.parent && r(e.parent.type.components) || r(e.appContext.components);
  }
  return o ? Xv(o) : a ? "App" : "Anonymous";
}
function Pp(e) {
  return te(e) && "__vccOpts" in e;
}
var io = (e, n) => {
  const a = /* @__PURE__ */ cb(e, n, Ha);
  if (process.env.NODE_ENV !== "production") {
    const o = Ep();
    o && o.appContext.config.warnRecursiveComputed && (a._warnRecursive = !0);
  }
  return a;
};
function Zv() {
  if (process.env.NODE_ENV === "production" || typeof window > "u") return;
  const e = { style: "color:#3ba776" }, n = { style: "color:#1677ff" }, a = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(y) {
      if (!ve(y)) return null;
      if (y.__isVue) return [
        "div",
        e,
        "VueInstance"
      ];
      if (/* @__PURE__ */ je(y)) {
        un();
        const V = y.value;
        return cn(), [
          "div",
          {},
          [
            "span",
            e,
            T(y)
          ],
          "<",
          p(V),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ ci(y)) return [
          "div",
          {},
          [
            "span",
            e,
            /* @__PURE__ */ ft(y) ? "ShallowReactive" : "Reactive"
          ],
          "<",
          p(y),
          `>${/* @__PURE__ */ mn(y) ? " (readonly)" : ""}`
        ];
        if (/* @__PURE__ */ mn(y)) return [
          "div",
          {},
          [
            "span",
            e,
            /* @__PURE__ */ ft(y) ? "ShallowReadonly" : "Readonly"
          ],
          "<",
          p(y),
          ">"
        ];
      }
      return null;
    },
    hasBody(y) {
      return y && y.__isVue;
    },
    body(y) {
      if (y && y.__isVue) return [
        "div",
        {},
        ...u(y.$)
      ];
    }
  };
  function u(y) {
    const V = [];
    y.type.props && y.props && V.push(m("props", /* @__PURE__ */ ue(y.props))), y.setupState !== Ce && V.push(m("setup", y.setupState)), y.data !== Ce && V.push(m("data", /* @__PURE__ */ ue(y.data)));
    const P = f(y, "computed");
    P && V.push(m("computed", P));
    const q = f(y, "inject");
    return q && V.push(m("injected", q)), V.push([
      "div",
      {},
      [
        "span",
        { style: o.style + ";opacity:0.66" },
        "$ (internal): "
      ],
      ["object", { object: y }]
    ]), V;
  }
  function m(y, V) {
    return V = Ae({}, V), Object.keys(V).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        { style: "color:#476582" },
        y
      ],
      [
        "div",
        { style: "padding-left:1.25em" },
        ...Object.keys(V).map((P) => [
          "div",
          {},
          [
            "span",
            o,
            P + ": "
          ],
          p(V[P], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function p(y, V = !0) {
    return typeof y == "number" ? [
      "span",
      n,
      y
    ] : typeof y == "string" ? [
      "span",
      a,
      JSON.stringify(y)
    ] : typeof y == "boolean" ? [
      "span",
      o,
      y
    ] : ve(y) ? ["object", { object: V ? /* @__PURE__ */ ue(y) : y }] : [
      "span",
      a,
      String(y)
    ];
  }
  function f(y, V) {
    const P = y.type;
    if (te(P)) return;
    const q = {};
    for (const W in y.ctx) C(P, W, V) && (q[W] = y.ctx[W]);
    return q;
  }
  function C(y, V, P) {
    const q = y[P];
    if ($(q) && q.includes(V) || ve(q) && V in q || y.extends && C(y.extends, V, P) || y.mixins && y.mixins.some((W) => C(W, V, P))) return !0;
  }
  function T(y) {
    return /* @__PURE__ */ ft(y) ? "ShallowRef" : y.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
var Qm = "3.5.35", Wt = process.env.NODE_ENV !== "production" ? k : Ze, r_ = (process.env.NODE_ENV, an), l_ = (process.env.NODE_ENV, Dl), bl = void 0, ed = typeof window < "u" && window.trustedTypes;
if (ed) try {
  bl = /* @__PURE__ */ ed.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {
  process.env.NODE_ENV !== "production" && Wt(`Error creating trusted types policy: ${e}`);
}
var Dp = bl ? (e) => bl.createHTML(e) : (e) => e, Yv = "http://www.w3.org/2000/svg", Qv = "http://www.w3.org/1998/Math/MathML", jn = typeof document < "u" ? document : null, td = jn && /* @__PURE__ */ jn.createElement("template"), ey = {
  insert: (e, n, a) => {
    n.insertBefore(e, a || null);
  },
  remove: (e) => {
    const n = e.parentNode;
    n && n.removeChild(e);
  },
  createElement: (e, n, a, o) => {
    const r = n === "svg" ? jn.createElementNS(Yv, e) : n === "mathml" ? jn.createElementNS(Qv, e) : a ? jn.createElement(e, { is: a }) : jn.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => jn.createTextNode(e),
  createComment: (e) => jn.createComment(e),
  setText: (e, n) => {
    e.nodeValue = n;
  },
  setElementText: (e, n) => {
    e.textContent = n;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => jn.querySelector(e),
  setScopeId(e, n) {
    e.setAttribute(n, "");
  },
  insertStaticContent(e, n, a, o, r, u) {
    const m = a ? a.previousSibling : n.lastChild;
    if (r && (r === u || r.nextSibling)) for (; n.insertBefore(r.cloneNode(!0), a), !(r === u || !(r = r.nextSibling)); )
      ;
    else {
      td.innerHTML = Dp(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
      const p = td.content;
      if (o === "svg" || o === "mathml") {
        const f = p.firstChild;
        for (; f.firstChild; ) p.appendChild(f.firstChild);
        p.removeChild(f);
      }
      n.insertBefore(p, a);
    }
    return [m ? m.nextSibling : n.firstChild, a ? a.previousSibling : n.lastChild];
  }
}, ty = /* @__PURE__ */ Symbol("_vtc");
function ny(e, n, a) {
  const o = e[ty];
  o && (n = (n ? [n, ...o] : [...o]).join(" ")), n == null ? e.removeAttribute("class") : a ? e.setAttribute("class", n) : e.className = n;
}
var nd = /* @__PURE__ */ Symbol("_vod"), iy = /* @__PURE__ */ Symbol("_vsh"), ay = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), sy = /(?:^|;)\s*display\s*:/;
function oy(e, n, a) {
  const o = e.style, r = Ee(a);
  let u = !1;
  if (a && !r) {
    if (n) if (Ee(n))
      for (const m of n.split(";")) {
        const p = m.slice(0, m.indexOf(":")).trim();
        a[p] == null && Va(o, p, "");
      }
    else for (const m in n) a[m] == null && Va(o, m, "");
    for (const m in a) {
      m === "display" && (u = !0);
      const p = a[m];
      p != null ? uy(e, m, !Ee(n) && n ? n[m] : void 0, p) || Va(o, m, p) : Va(o, m, "");
    }
  } else if (r) {
    if (n !== a) {
      const m = o[ay];
      m && (a += ";" + m), o.cssText = a, u = sy.test(a);
    }
  } else n && e.removeAttribute("style");
  nd in e && (e[nd] = u ? o.display : "", e[iy] && (o.display = "none"));
}
var ry = /[^\\];\s*$/, id = /\s*!important$/;
function Va(e, n, a) {
  if ($(a)) a.forEach((o) => Va(e, n, o));
  else if (a == null && (a = ""), process.env.NODE_ENV !== "production" && ry.test(a) && Wt(`Unexpected semicolon at the end of '${n}' style value: '${a}'`), n.startsWith("--")) e.setProperty(n, a);
  else {
    const o = ly(e, n);
    id.test(a) ? e.setProperty(Nt(o), a.replace(id, ""), "important") : e[o] = a;
  }
}
var ad = [
  "Webkit",
  "Moz",
  "ms"
], el = {};
function ly(e, n) {
  const a = el[n];
  if (a) return a;
  let o = at(n);
  if (o !== "filter" && o in e) return el[n] = o;
  o = yo(o);
  for (let r = 0; r < ad.length; r++) {
    const u = ad[r] + o;
    if (u in e) return el[n] = u;
  }
  return n;
}
function uy(e, n, a, o) {
  return e.tagName === "TEXTAREA" && (n === "width" || n === "height") && Ee(o) && a === o;
}
var sd = "http://www.w3.org/1999/xlink";
function od(e, n, a, o, r, u = x2(n)) {
  o && n.startsWith("xlink:") ? a == null ? e.removeAttributeNS(sd, n.slice(6, n.length)) : e.setAttributeNS(sd, n, a) : a == null || u && !Rd(a) ? e.removeAttribute(n) : e.setAttribute(n, u ? "" : rn(a) ? String(a) : a);
}
function rd(e, n, a, o, r) {
  if (n === "innerHTML" || n === "textContent") {
    a != null && (e[n] = n === "innerHTML" ? Dp(a) : a);
    return;
  }
  const u = e.tagName;
  if (n === "value" && u !== "PROGRESS" && !u.includes("-")) {
    const p = u === "OPTION" ? e.getAttribute("value") || "" : e.value, f = a == null ? e.type === "checkbox" ? "on" : "" : String(a);
    (p !== f || !("_value" in e)) && (e.value = f), a == null && e.removeAttribute(n), e._value = a;
    return;
  }
  let m = !1;
  if (a === "" || a == null) {
    const p = typeof e[n];
    p === "boolean" ? a = Rd(a) : a == null && p === "string" ? (a = "", m = !0) : p === "number" && (a = 0, m = !0);
  }
  try {
    e[n] = a;
  } catch (p) {
    process.env.NODE_ENV !== "production" && !m && Wt(`Failed setting prop "${n}" on <${u.toLowerCase()}>: value ${a} is invalid.`, p);
  }
  m && e.removeAttribute(r || n);
}
function ea(e, n, a, o) {
  e.addEventListener(n, a, o);
}
function cy(e, n, a, o) {
  e.removeEventListener(n, a, o);
}
var ld = /* @__PURE__ */ Symbol("_vei");
function my(e, n, a, o, r = null) {
  const u = e[ld] || (e[ld] = {}), m = u[n];
  if (o && m) m.value = process.env.NODE_ENV !== "production" ? cd(o, n) : o;
  else {
    const [p, f] = dy(n);
    o ? ea(e, p, u[n] = hy(process.env.NODE_ENV !== "production" ? cd(o, n) : o, r), f) : m && (cy(e, p, m, f), u[n] = void 0);
  }
}
var ud = /(?:Once|Passive|Capture)$/;
function dy(e) {
  let n;
  if (ud.test(e)) {
    n = {};
    let a;
    for (; a = e.match(ud); )
      e = e.slice(0, e.length - a[0].length), n[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Nt(e.slice(2)), n];
}
var tl = 0, py = /* @__PURE__ */ Promise.resolve(), gy = () => tl || (py.then(() => tl = 0), tl = Date.now());
function hy(e, n) {
  const a = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= a.attached) return;
    const r = a.value;
    if ($(r)) {
      const u = o.stopImmediatePropagation;
      o.stopImmediatePropagation = () => {
        u.call(o), o._stopped = !0;
      };
      const m = r.slice(), p = [o];
      for (let f = 0; f < m.length && !o._stopped; f++) {
        const C = m[f];
        C && pn(C, n, 5, p);
      }
    } else pn(r, n, 5, [o]);
  };
  return a.value = e, a.attached = gy(), a;
}
function cd(e, n) {
  return te(e) || $(e) ? e : (Wt(`Wrong type passed as event handler to ${n} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`), Ze);
}
var md = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fy = (e, n, a, o, r, u) => {
  const m = r === "svg";
  n === "class" ? ny(e, o, m) : n === "style" ? oy(e, a, o) : ja(n) ? xa(n) || my(e, n, a, o, u) : (n[0] === "." ? (n = n.slice(1), !0) : n[0] === "^" ? (n = n.slice(1), !1) : Iy(e, n, o, m)) ? (rd(e, n, o), !e.tagName.includes("-") && (n === "value" || n === "checked" || n === "selected") && od(e, n, o, m, u, n !== "value")) : e._isVueCE && (by(e, n) || e._def.__asyncLoader && (/[A-Z]/.test(n) || !Ee(o))) ? rd(e, at(n), o, u, n) : (n === "true-value" ? e._trueValue = o : n === "false-value" && (e._falseValue = o), od(e, n, o, m));
};
function Iy(e, n, a, o) {
  if (o)
    return !!(n === "innerHTML" || n === "textContent" || n in e && md(n) && te(a));
  if (n === "spellcheck" || n === "draggable" || n === "translate" || n === "autocorrect" || n === "sandbox" && e.tagName === "IFRAME" || n === "form" || n === "list" && e.tagName === "INPUT" || n === "type" && e.tagName === "TEXTAREA") return !1;
  if (n === "width" || n === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1;
  }
  return md(n) && Ee(a) ? !1 : n in e;
}
function by(e, n) {
  const a = e._def.props;
  if (!a) return !1;
  const o = at(n);
  return Array.isArray(a) ? a.some((r) => at(r) === o) : Object.keys(a).some((r) => at(r) === o);
}
var dd = {};
// @__NO_SIDE_EFFECTS__
function vy(e, n, a) {
  let o = /* @__PURE__ */ sp(e, n);
  bo(o) && (o = Ae({}, o, n));
  class r extends Ty {
    constructor(m) {
      super(o, m, a);
    }
  }
  return r.def = o, r;
}
var yy = typeof HTMLElement < "u" ? HTMLElement : class {
}, Ty = class xp extends yy {
  constructor(n, a = {}, o = Id) {
    super(), this._def = n, this._props = a, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && o !== Id ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && Wt("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), n.shadowRoot !== !1 ? (this.attachShadow(Ae({}, n.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let n = this;
    for (; n = n && (n.assignedSlot || n.parentNode || n.host); ) if (n instanceof xp) {
      this._parent = n;
      break;
    }
    this._instance || (this._resolved ? this._mount(this._def) : n && n._pendingResolve ? this._pendingResolve = n._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(n = this._parent) {
    n && (this._instance.parent = n._instance, this._inheritParentContext(n));
  }
  _inheritParentContext(n = this._parent) {
    n && this._app && Object.setPrototypeOf(this._app._context.provides, n._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, Wd(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(n) {
    for (const a of n) this._setAttr(a.attributeName);
  }
  _resolveDef() {
    if (this._pendingResolve) return;
    for (let o = 0; o < this.attributes.length; o++) this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const n = (o, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: u, styles: m } = o;
      let p;
      if (u && !$(u)) for (const f in u) {
        const C = u[f];
        (C === Number || C && C.type === Number) && (f in this._props && (this._props[f] = Um(this._props[f])), (p || (p = /* @__PURE__ */ Object.create(null)))[at(f)] = !0);
      }
      this._numberProps = p, this._resolveProps(o), this.shadowRoot ? this._applyStyles(m) : process.env.NODE_ENV !== "production" && m && Wt("Custom element style injection is not supported when using shadowRoot: false"), this._mount(o);
    }, a = this._def.__asyncLoader;
    a ? this._pendingResolve = a().then((o) => {
      o.configureApp = this._def.configureApp, n(this._def = o, !0);
    }) : n(this._def);
  }
  _mount(n) {
    process.env.NODE_ENV !== "production" && !n.name && (n.name = "VueElement"), this._app = this._createApp(n), this._inheritParentContext(), n.configureApp && n.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const a = this._instance && this._instance.exposed;
    if (a)
      for (const o in a) ge(this, o) ? process.env.NODE_ENV !== "production" && Wt(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, { get: () => At(a[o]) });
  }
  _resolveProps(n) {
    const { props: a } = n, o = $(a) ? a : Object.keys(a || {});
    for (const r of Object.keys(this)) r[0] !== "_" && o.includes(r) && this._setProp(r, this[r]);
    for (const r of o.map(at)) Object.defineProperty(this, r, {
      get() {
        return this._getProp(r);
      },
      set(u) {
        this._setProp(r, u, !0, !this._patching);
      }
    });
  }
  _setAttr(n) {
    if (n.startsWith("data-v-")) return;
    const a = this.hasAttribute(n);
    let o = a ? this.getAttribute(n) : dd;
    const r = at(n);
    a && this._numberProps && this._numberProps[r] && (o = Um(o)), this._setProp(r, o, !1, !0);
  }
  _getProp(n) {
    return this._props[n];
  }
  _setProp(n, a, o = !0, r = !1) {
    if (a !== this._props[n] && (this._dirty = !0, a === dd ? delete this._props[n] : (this._props[n] = a, n === "key" && this._app && (this._app._ceVNode.key = a)), r && this._instance && this._update(), o)) {
      const u = this._ob;
      u && (this._processMutations(u.takeRecords()), u.disconnect()), a === !0 ? this.setAttribute(Nt(n), "") : typeof a == "string" || typeof a == "number" ? this.setAttribute(Nt(n), a + "") : a || this.removeAttribute(Nt(n)), u && u.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const n = this._createVNode();
    this._app && (n.appContext = this._app._context), Ay(n, this._root);
  }
  _createVNode() {
    const n = {};
    this.shadowRoot || (n.onVnodeMounted = n.onVnodeUpdated = this._renderSlots.bind(this));
    const a = An(this._def, Ae(n, this._props));
    return this._instance || (a.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, process.env.NODE_ENV !== "production" && (o.ceReload = (u) => {
        this._styles && (this._styles.forEach((m) => this._root.removeChild(m)), this._styles.length = 0), this._styleAnchors.delete(this._def), this._applyStyles(u), this._instance = null, this._update();
      });
      const r = (u, m) => {
        this.dispatchEvent(new CustomEvent(u, bo(m[0]) ? Ae({ detail: m }, m[0]) : { detail: m }));
      };
      o.emit = (u, ...m) => {
        r(u, m), Nt(u) !== u && r(Nt(u), m);
      }, this._setParent();
    }), a;
  }
  _applyStyles(n, a, o) {
    if (!n) return;
    if (a) {
      if (a === this._def || this._styleChildren.has(a)) return;
      this._styleChildren.add(a);
    }
    const r = this._nonce, u = this.shadowRoot, m = o ? this._getStyleAnchor(o) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(u);
    let p = null;
    for (let f = n.length - 1; f >= 0; f--) {
      const C = document.createElement("style");
      if (r && C.setAttribute("nonce", r), C.textContent = n[f], u.insertBefore(C, p || m), p = C, f === 0 && (o || this._styleAnchors.set(this._def, C), a && this._styleAnchors.set(a, C)), process.env.NODE_ENV !== "production") if (a) {
        if (a.__hmrId) {
          this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
          let T = this._childStyles.get(a.__hmrId);
          T || this._childStyles.set(a.__hmrId, T = []), T.push(C);
        }
      } else (this._styles || (this._styles = [])).push(C);
    }
  }
  _getStyleAnchor(n) {
    if (!n) return null;
    const a = this._styleAnchors.get(n);
    return a && a.parentNode === this.shadowRoot ? a : (a && this._styleAnchors.delete(n), null);
  }
  _getRootStyleInsertionAnchor(n) {
    for (let a = 0; a < n.childNodes.length; a++) {
      const o = n.childNodes[a];
      if (!(o instanceof HTMLStyleElement)) return o;
    }
    return null;
  }
  _parseSlots() {
    const n = this._slots = {};
    let a;
    for (; a = this.firstChild; ) {
      const o = a.nodeType === 1 && a.getAttribute("slot") || "default";
      (n[o] || (n[o] = [])).push(a), this.removeChild(a);
    }
  }
  _renderSlots() {
    const n = this._getSlots(), a = this._instance.type.__scopeId;
    for (let o = 0; o < n.length; o++) {
      const r = n[o], u = r.getAttribute("name") || "default", m = this._slots[u], p = r.parentNode;
      if (m) for (const f of m) {
        if (a && f.nodeType === 1) {
          const C = a + "-s", T = document.createTreeWalker(f, 1);
          f.setAttribute(C, "");
          let y;
          for (; y = T.nextNode(); ) y.setAttribute(C, "");
        }
        p.insertBefore(f, r);
      }
      else for (; r.firstChild; ) p.insertBefore(r.firstChild, r);
      p.removeChild(r);
    }
  }
  _getSlots() {
    const n = [this];
    this._teleportTargets && n.push(...this._teleportTargets);
    const a = /* @__PURE__ */ new Set();
    for (const o of n) {
      const r = o.querySelectorAll("slot");
      for (let u = 0; u < r.length; u++) a.add(r[u]);
    }
    return Array.from(a);
  }
  _injectChildStyle(n, a) {
    this._applyStyles(n.styles, n, a);
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
  _removeChildStyle(n) {
    if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(n), this._styleAnchors.delete(n), this._childStyles && n.__hmrId)) {
      const a = this._childStyles.get(n.__hmrId);
      a && (a.forEach((o) => this._root.removeChild(o)), a.length = 0);
    }
  }
}, pd = (e) => {
  const n = e.props["onUpdate:modelValue"] || !1;
  return $(n) ? (a) => Yi(n, a) : n;
};
function _y(e) {
  e.target.composing = !0;
}
function gd(e) {
  const n = e.target;
  n.composing && (n.composing = !1, n.dispatchEvent(new Event("input")));
}
var nl = /* @__PURE__ */ Symbol("_assign");
function hd(e, n, a) {
  return n && (e = e.trim()), a && (e = Ul(e)), e;
}
var wy = {
  created(e, { modifiers: { lazy: n, trim: a, number: o } }, r) {
    e[nl] = pd(r);
    const u = o || r.props && r.props.type === "number";
    ea(e, n ? "change" : "input", (m) => {
      m.target.composing || e[nl](hd(e.value, a, u));
    }), (a || u) && ea(e, "change", () => {
      e.value = hd(e.value, a, u);
    }), n || (ea(e, "compositionstart", _y), ea(e, "compositionend", gd), ea(e, "change", gd));
  },
  mounted(e, { value: n }) {
    e.value = n ?? "";
  },
  beforeUpdate(e, { value: n, oldValue: a, modifiers: { lazy: o, trim: r, number: u } }, m) {
    if (e[nl] = pd(m), e.composing) return;
    const p = (u || e.type === "number") && !/^0\d/.test(e.value) ? Ul(e.value) : e.value, f = n ?? "";
    if (p === f) return;
    const C = e.getRootNode();
    (C instanceof Document || C instanceof ShadowRoot) && C.activeElement === e && e.type !== "range" && (o && n === a || r && e.value.trim() === f) || (e.value = f);
  }
}, Cy = [
  "ctrl",
  "shift",
  "alt",
  "meta"
], Ry = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, n) => Cy.some((a) => e[`${a}Key`] && !n.includes(a))
}, Uy = (e, n) => {
  if (!e) return e;
  const a = e._withMods || (e._withMods = {}), o = n.join(".");
  return a[o] || (a[o] = (r, ...u) => {
    for (let m = 0; m < n.length; m++) {
      const p = Ry[n[m]];
      if (p && p(r, n)) return;
    }
    return e(r, ...u);
  });
}, Sy = /* @__PURE__ */ Ae({ patchProp: fy }, ey), fd;
function Lp() {
  return fd || (fd = Nv(Sy));
}
var Ay = (...e) => {
  Lp().render(...e);
}, Id = (...e) => {
  const n = Lp().createApp(...e);
  process.env.NODE_ENV !== "production" && (Ey(n), Ny(n));
  const { mount: a } = n;
  return n.mount = (o) => {
    const r = My(o);
    if (!r) return;
    const u = n._component;
    !te(u) && !u.render && !u.template && (u.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const m = a(r, !1, Vy(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), m;
  }, n;
};
function Vy(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Ey(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (n) => z2(n) || P2(n) || D2(n),
    writable: !1
  });
}
function Ny(e) {
  if (Mp()) {
    const n = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return n;
      },
      set() {
        Wt("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const a = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Wt(o), a;
      },
      set() {
        Wt(o);
      }
    });
  }
}
function My(e) {
  if (Ee(e)) {
    const n = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !n && Wt(`Failed to mount app: mount target selector "${e}" returned null.`), n;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Wt('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function Oy() {
  Zv();
}
process.env.NODE_ENV !== "production" && Oy();
var zy = /* @__PURE__ */ _2((e, n) => {
  (function() {
    var a, o = "4.17.21", r = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", m = "Expected a function", p = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", C = 500, T = "__lodash_placeholder__", y = 1, V = 2, P = 4, q = 1, W = 2, he = 1, ye = 2, fe = 4, se = 8, He = 16, j = 32, Ne = 64, xe = 128, Le = 256, Ye = 512, Kt = 30, gn = "...", _t = 800, Oi = 16, ra = 1, hn = 2, st = 3, re = 1 / 0, ne = 9007199254740991, Pt = 17976931348623157e292, En = NaN, ut = 4294967295, zi = ut - 1, fn = ut >>> 1, la = [
      ["ary", xe],
      ["bind", he],
      ["bindKey", ye],
      ["curry", se],
      ["curryRight", He],
      ["flip", Ye],
      ["partial", j],
      ["partialRight", Ne],
      ["rearg", Le]
    ], Xn = "[object Arguments]", Pi = "[object Array]", di = "[object AsyncFunction]", In = "[object Boolean]", Nn = "[object Date]", Qa = "[object DOMException]", $t = "[object Error]", Zn = "[object Function]", Di = "[object GeneratorFunction]", h = "[object Map]", v = "[object Number]", U = "[object Null]", M = "[object Object]", O = "[object Promise]", N = "[object Proxy]", F = "[object RegExp]", x = "[object Set]", L = "[object String]", z = "[object Symbol]", X = "[object Undefined]", B = "[object WeakMap]", K = "[object WeakSet]", Z = "[object ArrayBuffer]", ce = "[object DataView]", Ie = "[object Float32Array]", be = "[object Float64Array]", Oe = "[object Int8Array]", Pe = "[object Int16Array]", ct = "[object Int32Array]", tt = "[object Uint8Array]", Mn = "[object Uint8ClampedArray]", xi = "[object Uint16Array]", Ge = "[object Uint32Array]", Dt = /\b__p \+= '';/g, es = /\b(__p \+=) '' \+/g, ts = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Xl = /&(?:amp|lt|gt|quot|#39);/g, Zl = /[&<>"']/g, $p = RegExp(Xl.source), Xp = RegExp(Zl.source), Zp = /<%-([\s\S]+?)%>/g, Yp = /<%([\s\S]+?)%>/g, Yl = /<%=([\s\S]+?)%>/g, Qp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eg = /^\w*$/, tg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, No = /[\\^$.*+?()[\]{}|]/g, ng = RegExp(No.source), Mo = /^\s+/, ig = /\s/, ag = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, sg = /\{\n\/\* \[wrapped with (.+)\] \*/, og = /,? & /, rg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, lg = /[()=,{}\[\]\/\s]/, ug = /\\(\\)?/g, cg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ql = /\w*$/, mg = /^[-+]0x[0-9a-f]+$/i, dg = /^0b[01]+$/i, pg = /^\[object .+?Constructor\]$/, gg = /^0o[0-7]+$/i, hg = /^(?:0|[1-9]\d*)$/, fg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ns = /($^)/, Ig = /['\n\r\u2028\u2029\\]/g, is = "\\ud800-\\udfff", eu = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", tu = "\\u2700-\\u27bf", nu = "a-z\\xdf-\\xf6\\xf8-\\xff", bg = "\\xac\\xb1\\xd7\\xf7", vg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", yg = "\\u2000-\\u206f", Tg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", iu = "A-Z\\xc0-\\xd6\\xd8-\\xde", au = "\\ufe0e\\ufe0f", su = bg + vg + yg + Tg, Oo = "['’]", _g = "[" + is + "]", ou = "[" + su + "]", as = "[" + eu + "]", ru = "\\d+", wg = "[" + tu + "]", lu = "[" + nu + "]", uu = "[^" + is + su + ru + tu + nu + iu + "]", zo = "\\ud83c[\\udffb-\\udfff]", Cg = "(?:" + as + "|" + zo + ")", cu = "[^" + is + "]", Po = "(?:\\ud83c[\\udde6-\\uddff]){2}", Do = "[\\ud800-\\udbff][\\udc00-\\udfff]", Li = "[" + iu + "]", mu = "\\u200d", du = "(?:" + lu + "|" + uu + ")", Rg = "(?:" + Li + "|" + uu + ")", pu = "(?:" + Oo + "(?:d|ll|m|re|s|t|ve))?", gu = "(?:" + Oo + "(?:D|LL|M|RE|S|T|VE))?", hu = Cg + "?", fu = "[" + au + "]?", Ug = "(?:" + mu + "(?:" + [
      cu,
      Po,
      Do
    ].join("|") + ")" + fu + hu + ")*", Sg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ag = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Iu = fu + hu + Ug, Vg = "(?:" + [
      wg,
      Po,
      Do
    ].join("|") + ")" + Iu, Eg = "(?:" + [
      cu + as + "?",
      as,
      Po,
      Do,
      _g
    ].join("|") + ")", Ng = RegExp(Oo, "g"), Mg = RegExp(as, "g"), xo = RegExp(zo + "(?=" + zo + ")|" + Eg + Iu, "g"), Og = RegExp([
      Li + "?" + lu + "+" + pu + "(?=" + [
        ou,
        Li,
        "$"
      ].join("|") + ")",
      Rg + "+" + gu + "(?=" + [
        ou,
        Li + du,
        "$"
      ].join("|") + ")",
      Li + "?" + du + "+" + pu,
      Li + "+" + gu,
      Ag,
      Sg,
      ru,
      Vg
    ].join("|"), "g"), zg = RegExp("[" + mu + is + eu + au + "]"), Pg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Dg = [
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
    ], xg = -1, Me = {};
    Me[Ie] = Me[be] = Me[Oe] = Me[Pe] = Me[ct] = Me[tt] = Me[Mn] = Me[xi] = Me[Ge] = !0, Me[Xn] = Me[Pi] = Me[Z] = Me[In] = Me[ce] = Me[Nn] = Me[$t] = Me[Zn] = Me[h] = Me[v] = Me[M] = Me[F] = Me[x] = Me[L] = Me[B] = !1;
    var Ve = {};
    Ve[Xn] = Ve[Pi] = Ve[Z] = Ve[ce] = Ve[In] = Ve[Nn] = Ve[Ie] = Ve[be] = Ve[Oe] = Ve[Pe] = Ve[ct] = Ve[h] = Ve[v] = Ve[M] = Ve[F] = Ve[x] = Ve[L] = Ve[z] = Ve[tt] = Ve[Mn] = Ve[xi] = Ve[Ge] = !0, Ve[$t] = Ve[Zn] = Ve[B] = !1;
    var Lg = {
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
    }, Fg = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, kg = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Bg = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, qg = parseFloat, Hg = parseInt, bu = typeof global == "object" && global && global.Object === Object && global, Jg = typeof self == "object" && self && self.Object === Object && self, Qe = bu || Jg || Function("return this")(), Lo = typeof e == "object" && e && !e.nodeType && e, pi = Lo && typeof n == "object" && n && !n.nodeType && n, vu = pi && pi.exports === Lo, Fo = vu && bu.process, xt = function() {
      try {
        var _ = pi && pi.require && pi.require("util").types;
        return _ || Fo && Fo.binding && Fo.binding("util");
      } catch {
      }
    }(), yu = xt && xt.isArrayBuffer, Tu = xt && xt.isDate, _u = xt && xt.isMap, wu = xt && xt.isRegExp, Cu = xt && xt.isSet, Ru = xt && xt.isTypedArray;
    function wt(_, S, R) {
      switch (R.length) {
        case 0:
          return _.call(S);
        case 1:
          return _.call(S, R[0]);
        case 2:
          return _.call(S, R[0], R[1]);
        case 3:
          return _.call(S, R[0], R[1], R[2]);
      }
      return _.apply(S, R);
    }
    function jg(_, S, R, J) {
      for (var ie = -1, Te = _ == null ? 0 : _.length; ++ie < Te; ) {
        var We = _[ie];
        S(J, We, R(We), _);
      }
      return J;
    }
    function Lt(_, S) {
      for (var R = -1, J = _ == null ? 0 : _.length; ++R < J && S(_[R], R, _) !== !1; ) ;
      return _;
    }
    function Gg(_, S) {
      for (var R = _ == null ? 0 : _.length; R-- && S(_[R], R, _) !== !1; ) ;
      return _;
    }
    function Uu(_, S) {
      for (var R = -1, J = _ == null ? 0 : _.length; ++R < J; ) if (!S(_[R], R, _)) return !1;
      return !0;
    }
    function Yn(_, S) {
      for (var R = -1, J = _ == null ? 0 : _.length, ie = 0, Te = []; ++R < J; ) {
        var We = _[R];
        S(We, R, _) && (Te[ie++] = We);
      }
      return Te;
    }
    function ss(_, S) {
      return !!(_ != null && _.length) && Fi(_, S, 0) > -1;
    }
    function ko(_, S, R) {
      for (var J = -1, ie = _ == null ? 0 : _.length; ++J < ie; ) if (R(S, _[J])) return !0;
      return !1;
    }
    function ze(_, S) {
      for (var R = -1, J = _ == null ? 0 : _.length, ie = Array(J); ++R < J; ) ie[R] = S(_[R], R, _);
      return ie;
    }
    function Qn(_, S) {
      for (var R = -1, J = S.length, ie = _.length; ++R < J; ) _[ie + R] = S[R];
      return _;
    }
    function Bo(_, S, R, J) {
      var ie = -1, Te = _ == null ? 0 : _.length;
      for (J && Te && (R = _[++ie]); ++ie < Te; ) R = S(R, _[ie], ie, _);
      return R;
    }
    function Wg(_, S, R, J) {
      var ie = _ == null ? 0 : _.length;
      for (J && ie && (R = _[--ie]); ie--; ) R = S(R, _[ie], ie, _);
      return R;
    }
    function qo(_, S) {
      for (var R = -1, J = _ == null ? 0 : _.length; ++R < J; ) if (S(_[R], R, _)) return !0;
      return !1;
    }
    var Kg = Ho("length");
    function $g(_) {
      return _.split("");
    }
    function Xg(_) {
      return _.match(rg) || [];
    }
    function Su(_, S, R) {
      var J;
      return R(_, function(ie, Te, We) {
        if (S(ie, Te, We))
          return J = Te, !1;
      }), J;
    }
    function os(_, S, R, J) {
      for (var ie = _.length, Te = R + (J ? 1 : -1); J ? Te-- : ++Te < ie; ) if (S(_[Te], Te, _)) return Te;
      return -1;
    }
    function Fi(_, S, R) {
      return S === S ? lh(_, S, R) : os(_, Au, R);
    }
    function Zg(_, S, R, J) {
      for (var ie = R - 1, Te = _.length; ++ie < Te; ) if (J(_[ie], S)) return ie;
      return -1;
    }
    function Au(_) {
      return _ !== _;
    }
    function Vu(_, S) {
      var R = _ == null ? 0 : _.length;
      return R ? jo(_, S) / R : En;
    }
    function Ho(_) {
      return function(S) {
        return S == null ? a : S[_];
      };
    }
    function Jo(_) {
      return function(S) {
        return _ == null ? a : _[S];
      };
    }
    function Eu(_, S, R, J, ie) {
      return ie(_, function(Te, We, Ue) {
        R = J ? (J = !1, Te) : S(R, Te, We, Ue);
      }), R;
    }
    function Yg(_, S) {
      var R = _.length;
      for (_.sort(S); R--; ) _[R] = _[R].value;
      return _;
    }
    function jo(_, S) {
      for (var R, J = -1, ie = _.length; ++J < ie; ) {
        var Te = S(_[J]);
        Te !== a && (R = R === a ? Te : R + Te);
      }
      return R;
    }
    function Go(_, S) {
      for (var R = -1, J = Array(_); ++R < _; ) J[R] = S(R);
      return J;
    }
    function Qg(_, S) {
      return ze(S, function(R) {
        return [R, _[R]];
      });
    }
    function Nu(_) {
      return _ && _.slice(0, Pu(_) + 1).replace(Mo, "");
    }
    function Ct(_) {
      return function(S) {
        return _(S);
      };
    }
    function Wo(_, S) {
      return ze(S, function(R) {
        return _[R];
      });
    }
    function ua(_, S) {
      return _.has(S);
    }
    function Mu(_, S) {
      for (var R = -1, J = _.length; ++R < J && Fi(S, _[R], 0) > -1; ) ;
      return R;
    }
    function Ou(_, S) {
      for (var R = _.length; R-- && Fi(S, _[R], 0) > -1; ) ;
      return R;
    }
    function eh(_, S) {
      for (var R = _.length, J = 0; R--; ) _[R] === S && ++J;
      return J;
    }
    var th = Jo(Lg), nh = Jo(Fg);
    function ih(_) {
      return "\\" + Bg[_];
    }
    function ah(_, S) {
      return _ == null ? a : _[S];
    }
    function ki(_) {
      return zg.test(_);
    }
    function sh(_) {
      return Pg.test(_);
    }
    function oh(_) {
      for (var S, R = []; !(S = _.next()).done; ) R.push(S.value);
      return R;
    }
    function Ko(_) {
      var S = -1, R = Array(_.size);
      return _.forEach(function(J, ie) {
        R[++S] = [ie, J];
      }), R;
    }
    function zu(_, S) {
      return function(R) {
        return _(S(R));
      };
    }
    function ei(_, S) {
      for (var R = -1, J = _.length, ie = 0, Te = []; ++R < J; ) {
        var We = _[R];
        (We === S || We === T) && (_[R] = T, Te[ie++] = R);
      }
      return Te;
    }
    function rs(_) {
      var S = -1, R = Array(_.size);
      return _.forEach(function(J) {
        R[++S] = J;
      }), R;
    }
    function rh(_) {
      var S = -1, R = Array(_.size);
      return _.forEach(function(J) {
        R[++S] = [J, J];
      }), R;
    }
    function lh(_, S, R) {
      for (var J = R - 1, ie = _.length; ++J < ie; ) if (_[J] === S) return J;
      return -1;
    }
    function uh(_, S, R) {
      for (var J = R + 1; J--; ) if (_[J] === S) return J;
      return J;
    }
    function Bi(_) {
      return ki(_) ? mh(_) : Kg(_);
    }
    function Xt(_) {
      return ki(_) ? dh(_) : $g(_);
    }
    function Pu(_) {
      for (var S = _.length; S-- && ig.test(_.charAt(S)); ) ;
      return S;
    }
    var ch = Jo(kg);
    function mh(_) {
      for (var S = xo.lastIndex = 0; xo.test(_); ) ++S;
      return S;
    }
    function dh(_) {
      return _.match(xo) || [];
    }
    function ph(_) {
      return _.match(Og) || [];
    }
    var ti = function _(S) {
      S = S == null ? Qe : ti.defaults(Qe.Object(), S, ti.pick(Qe, Dg));
      var R = S.Array, J = S.Date, ie = S.Error, Te = S.Function, We = S.Math, Ue = S.Object, $o = S.RegExp, gh = S.String, Ft = S.TypeError, ls = R.prototype, hh = Te.prototype, qi = Ue.prototype, us = S["__core-js_shared__"], cs = hh.toString, Re = qi.hasOwnProperty, fh = 0, Du = function() {
        var t = /[^.]+$/.exec(us && us.keys && us.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), ms = qi.toString, Ih = cs.call(Ue), bh = Qe._, vh = $o("^" + cs.call(Re).replace(No, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ds = vu ? S.Buffer : a, ni = S.Symbol, ps = S.Uint8Array, xu = ds ? ds.allocUnsafe : a, gs = zu(Ue.getPrototypeOf, Ue), Lu = Ue.create, Fu = qi.propertyIsEnumerable, hs = ls.splice, ku = ni ? ni.isConcatSpreadable : a, ca = ni ? ni.iterator : a, gi = ni ? ni.toStringTag : a, fs = function() {
        try {
          var t = vi(Ue, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), yh = S.clearTimeout !== Qe.clearTimeout && S.clearTimeout, Th = J && J.now !== Qe.Date.now && J.now, _h = S.setTimeout !== Qe.setTimeout && S.setTimeout, Is = We.ceil, bs = We.floor, Xo = Ue.getOwnPropertySymbols, wh = ds ? ds.isBuffer : a, Bu = S.isFinite, Ch = ls.join, Rh = zu(Ue.keys, Ue), Ke = We.max, ot = We.min, Uh = J.now, Sh = S.parseInt, qu = We.random, Ah = ls.reverse, Zo = vi(S, "DataView"), ma = vi(S, "Map"), Yo = vi(S, "Promise"), Hi = vi(S, "Set"), da = vi(S, "WeakMap"), pa = vi(Ue, "create"), vs = da && new da(), Ji = {}, Vh = yi(Zo), Eh = yi(ma), Nh = yi(Yo), Mh = yi(Hi), Oh = yi(da), ys = ni ? ni.prototype : a, ga = ys ? ys.valueOf : a, Hu = ys ? ys.toString : a;
      function d(t) {
        if (Fe(t) && !oe(t) && !(t instanceof de)) {
          if (t instanceof kt) return t;
          if (Re.call(t, "__wrapped__")) return Jc(t);
        }
        return new kt(t);
      }
      var ji = /* @__PURE__ */ function() {
        function t() {
        }
        return function(i) {
          if (!De(i)) return {};
          if (Lu) return Lu(i);
          t.prototype = i;
          var s = new t();
          return t.prototype = a, s;
        };
      }();
      function Ts() {
      }
      function kt(t, i) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = a;
      }
      d.templateSettings = {
        escape: Zp,
        evaluate: Yp,
        interpolate: Yl,
        variable: "",
        imports: { _: d }
      }, d.prototype = Ts.prototype, d.prototype.constructor = d, kt.prototype = ji(Ts.prototype), kt.prototype.constructor = kt;
      function de(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ut, this.__views__ = [];
      }
      function zh() {
        var t = new de(this.__wrapped__);
        return t.__actions__ = It(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = It(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = It(this.__views__), t;
      }
      function Ph() {
        if (this.__filtered__) {
          var t = new de(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function Dh() {
        var t = this.__wrapped__.value(), i = this.__dir__, s = oe(t), l = i < 0, c = s ? t.length : 0, g = $f(0, c, this.__views__), I = g.start, b = g.end, w = b - I, E = l ? b : I - 1, A = this.__iteratees__, D = A.length, H = 0, G = ot(w, this.__takeCount__);
        if (!s || !l && c == w && G == w) return pc(t, this.__actions__);
        var Y = [];
        e: for (; w-- && H < G; ) {
          E += i;
          for (var ae = -1, ee = t[E]; ++ae < D; ) {
            var Se = A[ae], pe = Se.iteratee, pt = Se.type, Tn = pe(ee);
            if (pt == hn) ee = Tn;
            else if (!Tn) {
              if (pt == ra) continue e;
              break e;
            }
          }
          Y[H++] = ee;
        }
        return Y;
      }
      de.prototype = ji(Ts.prototype), de.prototype.constructor = de;
      function hi(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++i < s; ) {
          var l = t[i];
          this.set(l[0], l[1]);
        }
      }
      function xh() {
        this.__data__ = pa ? pa(null) : {}, this.size = 0;
      }
      function Lh(t) {
        var i = this.has(t) && delete this.__data__[t];
        return this.size -= i ? 1 : 0, i;
      }
      function Fh(t) {
        var i = this.__data__;
        if (pa) {
          var s = i[t];
          return s === f ? a : s;
        }
        return Re.call(i, t) ? i[t] : a;
      }
      function kh(t) {
        var i = this.__data__;
        return pa ? i[t] !== a : Re.call(i, t);
      }
      function Bh(t, i) {
        var s = this.__data__;
        return this.size += this.has(t) ? 0 : 1, s[t] = pa && i === a ? f : i, this;
      }
      hi.prototype.clear = xh, hi.prototype.delete = Lh, hi.prototype.get = Fh, hi.prototype.has = kh, hi.prototype.set = Bh;
      function On(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++i < s; ) {
          var l = t[i];
          this.set(l[0], l[1]);
        }
      }
      function qh() {
        this.__data__ = [], this.size = 0;
      }
      function Hh(t) {
        var i = this.__data__, s = _s(i, t);
        return s < 0 ? !1 : (s == i.length - 1 ? i.pop() : hs.call(i, s, 1), --this.size, !0);
      }
      function Jh(t) {
        var i = this.__data__, s = _s(i, t);
        return s < 0 ? a : i[s][1];
      }
      function jh(t) {
        return _s(this.__data__, t) > -1;
      }
      function Gh(t, i) {
        var s = this.__data__, l = _s(s, t);
        return l < 0 ? (++this.size, s.push([t, i])) : s[l][1] = i, this;
      }
      On.prototype.clear = qh, On.prototype.delete = Hh, On.prototype.get = Jh, On.prototype.has = jh, On.prototype.set = Gh;
      function zn(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++i < s; ) {
          var l = t[i];
          this.set(l[0], l[1]);
        }
      }
      function Wh() {
        this.size = 0, this.__data__ = {
          hash: new hi(),
          map: new (ma || On)(),
          string: new hi()
        };
      }
      function Kh(t) {
        var i = zs(this, t).delete(t);
        return this.size -= i ? 1 : 0, i;
      }
      function $h(t) {
        return zs(this, t).get(t);
      }
      function Xh(t) {
        return zs(this, t).has(t);
      }
      function Zh(t, i) {
        var s = zs(this, t), l = s.size;
        return s.set(t, i), this.size += s.size == l ? 0 : 1, this;
      }
      zn.prototype.clear = Wh, zn.prototype.delete = Kh, zn.prototype.get = $h, zn.prototype.has = Xh, zn.prototype.set = Zh;
      function fi(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.__data__ = new zn(); ++i < s; ) this.add(t[i]);
      }
      function Yh(t) {
        return this.__data__.set(t, f), this;
      }
      function Qh(t) {
        return this.__data__.has(t);
      }
      fi.prototype.add = fi.prototype.push = Yh, fi.prototype.has = Qh;
      function Zt(t) {
        var i = this.__data__ = new On(t);
        this.size = i.size;
      }
      function ef() {
        this.__data__ = new On(), this.size = 0;
      }
      function tf(t) {
        var i = this.__data__, s = i.delete(t);
        return this.size = i.size, s;
      }
      function nf(t) {
        return this.__data__.get(t);
      }
      function af(t) {
        return this.__data__.has(t);
      }
      function sf(t, i) {
        var s = this.__data__;
        if (s instanceof On) {
          var l = s.__data__;
          if (!ma || l.length < r - 1)
            return l.push([t, i]), this.size = ++s.size, this;
          s = this.__data__ = new zn(l);
        }
        return s.set(t, i), this.size = s.size, this;
      }
      Zt.prototype.clear = ef, Zt.prototype.delete = tf, Zt.prototype.get = nf, Zt.prototype.has = af, Zt.prototype.set = sf;
      function Ju(t, i) {
        var s = oe(t), l = !s && Ti(t), c = !s && !l && ri(t), g = !s && !l && !c && $i(t), I = s || l || c || g, b = I ? Go(t.length, gh) : [], w = b.length;
        for (var E in t) (i || Re.call(t, E)) && !(I && (E == "length" || c && (E == "offset" || E == "parent") || g && (E == "buffer" || E == "byteLength" || E == "byteOffset") || Ln(E, w))) && b.push(E);
        return b;
      }
      function ju(t) {
        var i = t.length;
        return i ? t[ur(0, i - 1)] : a;
      }
      function of(t, i) {
        return Ps(It(t), Ii(i, 0, t.length));
      }
      function rf(t) {
        return Ps(It(t));
      }
      function Qo(t, i, s) {
        (s !== a && !Yt(t[i], s) || s === a && !(i in t)) && Pn(t, i, s);
      }
      function ha(t, i, s) {
        var l = t[i];
        (!(Re.call(t, i) && Yt(l, s)) || s === a && !(i in t)) && Pn(t, i, s);
      }
      function _s(t, i) {
        for (var s = t.length; s--; ) if (Yt(t[s][0], i)) return s;
        return -1;
      }
      function lf(t, i, s, l) {
        return ii(t, function(c, g, I) {
          i(l, c, s(c), I);
        }), l;
      }
      function Gu(t, i) {
        return t && vn(i, et(i), t);
      }
      function uf(t, i) {
        return t && vn(i, vt(i), t);
      }
      function Pn(t, i, s) {
        i == "__proto__" && fs ? fs(t, i, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : t[i] = s;
      }
      function er(t, i) {
        for (var s = -1, l = i.length, c = R(l), g = t == null; ++s < l; ) c[s] = g ? a : zr(t, i[s]);
        return c;
      }
      function Ii(t, i, s) {
        return t === t && (s !== a && (t = t <= s ? t : s), i !== a && (t = t >= i ? t : i)), t;
      }
      function Bt(t, i, s, l, c, g) {
        var I, b = i & y, w = i & V, E = i & P;
        if (s && (I = c ? s(t, l, c, g) : s(t)), I !== a) return I;
        if (!De(t)) return t;
        var A = oe(t);
        if (A) {
          if (I = Zf(t), !b) return It(t, I);
        } else {
          var D = rt(t), H = D == Zn || D == Di;
          if (ri(t)) return fc(t, b);
          if (D == M || D == Xn || H && !c) {
            if (I = w || H ? {} : Pc(t), !b) return w ? kf(t, uf(I, t)) : Ff(t, Gu(I, t));
          } else {
            if (!Ve[D]) return c ? t : {};
            I = Yf(t, D, b);
          }
        }
        g || (g = new Zt());
        var G = g.get(t);
        if (G) return G;
        g.set(t, I), cm(t) ? t.forEach(function(ae) {
          I.add(Bt(ae, i, s, ae, t, g));
        }) : lm(t) && t.forEach(function(ae, ee) {
          I.set(ee, Bt(ae, i, s, ee, t, g));
        });
        var Y = A ? a : (E ? w ? yr : vr : w ? vt : et)(t);
        return Lt(Y || t, function(ae, ee) {
          Y && (ee = ae, ae = t[ee]), ha(I, ee, Bt(ae, i, s, ee, t, g));
        }), I;
      }
      function cf(t) {
        var i = et(t);
        return function(s) {
          return Wu(s, t, i);
        };
      }
      function Wu(t, i, s) {
        var l = s.length;
        if (t == null) return !l;
        for (t = Ue(t); l--; ) {
          var c = s[l], g = i[c], I = t[c];
          if (I === a && !(c in t) || !g(I)) return !1;
        }
        return !0;
      }
      function Ku(t, i, s) {
        if (typeof t != "function") throw new Ft(m);
        return _a(function() {
          t.apply(a, s);
        }, i);
      }
      function fa(t, i, s, l) {
        var c = -1, g = ss, I = !0, b = t.length, w = [], E = i.length;
        if (!b) return w;
        s && (i = ze(i, Ct(s))), l ? (g = ko, I = !1) : i.length >= r && (g = ua, I = !1, i = new fi(i));
        e: for (; ++c < b; ) {
          var A = t[c], D = s == null ? A : s(A);
          if (A = l || A !== 0 ? A : 0, I && D === D) {
            for (var H = E; H--; ) if (i[H] === D) continue e;
            w.push(A);
          } else g(i, D, l) || w.push(A);
        }
        return w;
      }
      var ii = Tc(bn), $u = Tc(nr, !0);
      function mf(t, i) {
        var s = !0;
        return ii(t, function(l, c, g) {
          return s = !!i(l, c, g), s;
        }), s;
      }
      function ws(t, i, s) {
        for (var l = -1, c = t.length; ++l < c; ) {
          var g = t[l], I = i(g);
          if (I != null && (b === a ? I === I && !Ut(I) : s(I, b))) var b = I, w = g;
        }
        return w;
      }
      function df(t, i, s, l) {
        var c = t.length;
        for (s = le(s), s < 0 && (s = -s > c ? 0 : c + s), l = l === a || l > c ? c : le(l), l < 0 && (l += c), l = s > l ? 0 : dm(l); s < l; ) t[s++] = i;
        return t;
      }
      function Xu(t, i) {
        var s = [];
        return ii(t, function(l, c, g) {
          i(l, c, g) && s.push(l);
        }), s;
      }
      function nt(t, i, s, l, c) {
        var g = -1, I = t.length;
        for (s || (s = e1), c || (c = []); ++g < I; ) {
          var b = t[g];
          i > 0 && s(b) ? i > 1 ? nt(b, i - 1, s, l, c) : Qn(c, b) : l || (c[c.length] = b);
        }
        return c;
      }
      var tr = _c(), Zu = _c(!0);
      function bn(t, i) {
        return t && tr(t, i, et);
      }
      function nr(t, i) {
        return t && Zu(t, i, et);
      }
      function Cs(t, i) {
        return Yn(i, function(s) {
          return Fn(t[s]);
        });
      }
      function bi(t, i) {
        i = si(i, t);
        for (var s = 0, l = i.length; t != null && s < l; ) t = t[yn(i[s++])];
        return s && s == l ? t : a;
      }
      function Yu(t, i, s) {
        var l = i(t);
        return oe(t) ? l : Qn(l, s(t));
      }
      function mt(t) {
        return t == null ? t === a ? X : U : gi && gi in Ue(t) ? Kf(t) : r1(t);
      }
      function ir(t, i) {
        return t > i;
      }
      function pf(t, i) {
        return t != null && Re.call(t, i);
      }
      function gf(t, i) {
        return t != null && i in Ue(t);
      }
      function hf(t, i, s) {
        return t >= ot(i, s) && t < Ke(i, s);
      }
      function ar(t, i, s) {
        for (var l = s ? ko : ss, c = t[0].length, g = t.length, I = g, b = R(g), w = 1 / 0, E = []; I--; ) {
          var A = t[I];
          I && i && (A = ze(A, Ct(i))), w = ot(A.length, w), b[I] = !s && (i || c >= 120 && A.length >= 120) ? new fi(I && A) : a;
        }
        A = t[0];
        var D = -1, H = b[0];
        e: for (; ++D < c && E.length < w; ) {
          var G = A[D], Y = i ? i(G) : G;
          if (G = s || G !== 0 ? G : 0, !(H ? ua(H, Y) : l(E, Y, s))) {
            for (I = g; --I; ) {
              var ae = b[I];
              if (!(ae ? ua(ae, Y) : l(t[I], Y, s))) continue e;
            }
            H && H.push(Y), E.push(G);
          }
        }
        return E;
      }
      function ff(t, i, s, l) {
        return bn(t, function(c, g, I) {
          i(l, s(c), g, I);
        }), l;
      }
      function Ia(t, i, s) {
        i = si(i, t), t = Fc(t, i);
        var l = t == null ? t : t[yn(Ht(i))];
        return l == null ? a : wt(l, t, s);
      }
      function Qu(t) {
        return Fe(t) && mt(t) == Xn;
      }
      function If(t) {
        return Fe(t) && mt(t) == Z;
      }
      function bf(t) {
        return Fe(t) && mt(t) == Nn;
      }
      function ba(t, i, s, l, c) {
        return t === i ? !0 : t == null || i == null || !Fe(t) && !Fe(i) ? t !== t && i !== i : vf(t, i, s, l, ba, c);
      }
      function vf(t, i, s, l, c, g) {
        var I = oe(t), b = oe(i), w = I ? Pi : rt(t), E = b ? Pi : rt(i);
        w = w == Xn ? M : w, E = E == Xn ? M : E;
        var A = w == M, D = E == M, H = w == E;
        if (H && ri(t)) {
          if (!ri(i)) return !1;
          I = !0, A = !1;
        }
        if (H && !A)
          return g || (g = new Zt()), I || $i(t) ? Mc(t, i, s, l, c, g) : Gf(t, i, w, s, l, c, g);
        if (!(s & q)) {
          var G = A && Re.call(t, "__wrapped__"), Y = D && Re.call(i, "__wrapped__");
          if (G || Y) {
            var ae = G ? t.value() : t, ee = Y ? i.value() : i;
            return g || (g = new Zt()), c(ae, ee, s, l, g);
          }
        }
        return H ? (g || (g = new Zt()), Wf(t, i, s, l, c, g)) : !1;
      }
      function yf(t) {
        return Fe(t) && rt(t) == h;
      }
      function sr(t, i, s, l) {
        var c = s.length, g = c, I = !l;
        if (t == null) return !g;
        for (t = Ue(t); c--; ) {
          var b = s[c];
          if (I && b[2] ? b[1] !== t[b[0]] : !(b[0] in t)) return !1;
        }
        for (; ++c < g; ) {
          b = s[c];
          var w = b[0], E = t[w], A = b[1];
          if (I && b[2]) {
            if (E === a && !(w in t)) return !1;
          } else {
            var D = new Zt();
            if (l) var H = l(E, A, w, t, i, D);
            if (!(H === a ? ba(A, E, q | W, l, D) : H)) return !1;
          }
        }
        return !0;
      }
      function ec(t) {
        return !De(t) || n1(t) ? !1 : (Fn(t) ? vh : pg).test(yi(t));
      }
      function Tf(t) {
        return Fe(t) && mt(t) == F;
      }
      function _f(t) {
        return Fe(t) && rt(t) == x;
      }
      function wf(t) {
        return Fe(t) && Bs(t.length) && !!Me[mt(t)];
      }
      function tc(t) {
        return typeof t == "function" ? t : t == null ? yt : typeof t == "object" ? oe(t) ? ac(t[0], t[1]) : ic(t) : wm(t);
      }
      function or(t) {
        if (!Ta(t)) return Rh(t);
        var i = [];
        for (var s in Ue(t)) Re.call(t, s) && s != "constructor" && i.push(s);
        return i;
      }
      function Cf(t) {
        if (!De(t)) return o1(t);
        var i = Ta(t), s = [];
        for (var l in t) l == "constructor" && (i || !Re.call(t, l)) || s.push(l);
        return s;
      }
      function rr(t, i) {
        return t < i;
      }
      function nc(t, i) {
        var s = -1, l = bt(t) ? R(t.length) : [];
        return ii(t, function(c, g, I) {
          l[++s] = i(c, g, I);
        }), l;
      }
      function ic(t) {
        var i = _r(t);
        return i.length == 1 && i[0][2] ? xc(i[0][0], i[0][1]) : function(s) {
          return s === t || sr(s, t, i);
        };
      }
      function ac(t, i) {
        return Cr(t) && Dc(i) ? xc(yn(t), i) : function(s) {
          var l = zr(s, t);
          return l === a && l === i ? Pr(s, t) : ba(i, l, q | W);
        };
      }
      function Rs(t, i, s, l, c) {
        t !== i && tr(i, function(g, I) {
          if (c || (c = new Zt()), De(g)) Rf(t, i, I, s, Rs, l, c);
          else {
            var b = l ? l(Ur(t, I), g, I + "", t, i, c) : a;
            b === a && (b = g), Qo(t, I, b);
          }
        }, vt);
      }
      function Rf(t, i, s, l, c, g, I) {
        var b = Ur(t, s), w = Ur(i, s), E = I.get(w);
        if (E) {
          Qo(t, s, E);
          return;
        }
        var A = g ? g(b, w, s + "", t, i, I) : a, D = A === a;
        if (D) {
          var H = oe(w), G = !H && ri(w), Y = !H && !G && $i(w);
          A = w, H || G || Y ? oe(b) ? A = b : Be(b) ? A = It(b) : G ? (D = !1, A = fc(w, !0)) : Y ? (D = !1, A = Ic(w, !0)) : A = [] : wa(w) || Ti(w) ? (A = b, Ti(b) ? A = pm(b) : (!De(b) || Fn(b)) && (A = Pc(w))) : D = !1;
        }
        D && (I.set(w, A), c(A, w, l, g, I), I.delete(w)), Qo(t, s, A);
      }
      function sc(t, i) {
        var s = t.length;
        if (s)
          return i += i < 0 ? s : 0, Ln(i, s) ? t[i] : a;
      }
      function oc(t, i, s) {
        i.length ? i = ze(i, function(c) {
          return oe(c) ? function(g) {
            return bi(g, c.length === 1 ? c[0] : c);
          } : c;
        }) : i = [yt];
        var l = -1;
        return i = ze(i, Ct(Q())), Yg(nc(t, function(c, g, I) {
          return {
            criteria: ze(i, function(b) {
              return b(c);
            }),
            index: ++l,
            value: c
          };
        }), function(c, g) {
          return Lf(c, g, s);
        });
      }
      function Uf(t, i) {
        return rc(t, i, function(s, l) {
          return Pr(t, l);
        });
      }
      function rc(t, i, s) {
        for (var l = -1, c = i.length, g = {}; ++l < c; ) {
          var I = i[l], b = bi(t, I);
          s(b, I) && va(g, si(I, t), b);
        }
        return g;
      }
      function Sf(t) {
        return function(i) {
          return bi(i, t);
        };
      }
      function lr(t, i, s, l) {
        var c = l ? Zg : Fi, g = -1, I = i.length, b = t;
        for (t === i && (i = It(i)), s && (b = ze(t, Ct(s))); ++g < I; )
          for (var w = 0, E = i[g], A = s ? s(E) : E; (w = c(b, A, w, l)) > -1; )
            b !== t && hs.call(b, w, 1), hs.call(t, w, 1);
        return t;
      }
      function lc(t, i) {
        for (var s = t ? i.length : 0, l = s - 1; s--; ) {
          var c = i[s];
          if (s == l || c !== g) {
            var g = c;
            Ln(c) ? hs.call(t, c, 1) : dr(t, c);
          }
        }
        return t;
      }
      function ur(t, i) {
        return t + bs(qu() * (i - t + 1));
      }
      function Af(t, i, s, l) {
        for (var c = -1, g = Ke(Is((i - t) / (s || 1)), 0), I = R(g); g--; )
          I[l ? g : ++c] = t, t += s;
        return I;
      }
      function cr(t, i) {
        var s = "";
        if (!t || i < 1 || i > ne) return s;
        do
          i % 2 && (s += t), i = bs(i / 2), i && (t += t);
        while (i);
        return s;
      }
      function me(t, i) {
        return Sr(Lc(t, i, yt), t + "");
      }
      function Vf(t) {
        return ju(Xi(t));
      }
      function Ef(t, i) {
        var s = Xi(t);
        return Ps(s, Ii(i, 0, s.length));
      }
      function va(t, i, s, l) {
        if (!De(t)) return t;
        i = si(i, t);
        for (var c = -1, g = i.length, I = g - 1, b = t; b != null && ++c < g; ) {
          var w = yn(i[c]), E = s;
          if (w === "__proto__" || w === "constructor" || w === "prototype") return t;
          if (c != I) {
            var A = b[w];
            E = l ? l(A, w, b) : a, E === a && (E = De(A) ? A : Ln(i[c + 1]) ? [] : {});
          }
          ha(b, w, E), b = b[w];
        }
        return t;
      }
      var uc = vs ? function(t, i) {
        return vs.set(t, i), t;
      } : yt, Nf = fs ? function(t, i) {
        return fs(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: xr(i),
          writable: !0
        });
      } : yt;
      function Mf(t) {
        return Ps(Xi(t));
      }
      function qt(t, i, s) {
        var l = -1, c = t.length;
        i < 0 && (i = -i > c ? 0 : c + i), s = s > c ? c : s, s < 0 && (s += c), c = i > s ? 0 : s - i >>> 0, i >>>= 0;
        for (var g = R(c); ++l < c; ) g[l] = t[l + i];
        return g;
      }
      function Of(t, i) {
        var s;
        return ii(t, function(l, c, g) {
          return s = i(l, c, g), !s;
        }), !!s;
      }
      function Us(t, i, s) {
        var l = 0, c = t == null ? l : t.length;
        if (typeof i == "number" && i === i && c <= fn) {
          for (; l < c; ) {
            var g = l + c >>> 1, I = t[g];
            I !== null && !Ut(I) && (s ? I <= i : I < i) ? l = g + 1 : c = g;
          }
          return c;
        }
        return mr(t, i, yt, s);
      }
      function mr(t, i, s, l) {
        var c = 0, g = t == null ? 0 : t.length;
        if (g === 0) return 0;
        i = s(i);
        for (var I = i !== i, b = i === null, w = Ut(i), E = i === a; c < g; ) {
          var A = bs((c + g) / 2), D = s(t[A]), H = D !== a, G = D === null, Y = D === D, ae = Ut(D);
          if (I) var ee = l || Y;
          else E ? ee = Y && (l || H) : b ? ee = Y && H && (l || !G) : w ? ee = Y && H && !G && (l || !ae) : G || ae ? ee = !1 : ee = l ? D <= i : D < i;
          ee ? c = A + 1 : g = A;
        }
        return ot(g, zi);
      }
      function cc(t, i) {
        for (var s = -1, l = t.length, c = 0, g = []; ++s < l; ) {
          var I = t[s], b = i ? i(I) : I;
          if (!s || !Yt(b, w)) {
            var w = b;
            g[c++] = I === 0 ? 0 : I;
          }
        }
        return g;
      }
      function mc(t) {
        return typeof t == "number" ? t : Ut(t) ? En : +t;
      }
      function Rt(t) {
        if (typeof t == "string") return t;
        if (oe(t)) return ze(t, Rt) + "";
        if (Ut(t)) return Hu ? Hu.call(t) : "";
        var i = t + "";
        return i == "0" && 1 / t == -re ? "-0" : i;
      }
      function ai(t, i, s) {
        var l = -1, c = ss, g = t.length, I = !0, b = [], w = b;
        if (s)
          I = !1, c = ko;
        else if (g >= r) {
          var E = i ? null : Jf(t);
          if (E) return rs(E);
          I = !1, c = ua, w = new fi();
        } else w = i ? [] : b;
        e: for (; ++l < g; ) {
          var A = t[l], D = i ? i(A) : A;
          if (A = s || A !== 0 ? A : 0, I && D === D) {
            for (var H = w.length; H--; ) if (w[H] === D) continue e;
            i && w.push(D), b.push(A);
          } else c(w, D, s) || (w !== b && w.push(D), b.push(A));
        }
        return b;
      }
      function dr(t, i) {
        return i = si(i, t), t = Fc(t, i), t == null || delete t[yn(Ht(i))];
      }
      function dc(t, i, s, l) {
        return va(t, i, s(bi(t, i)), l);
      }
      function Ss(t, i, s, l) {
        for (var c = t.length, g = l ? c : -1; (l ? g-- : ++g < c) && i(t[g], g, t); ) ;
        return s ? qt(t, l ? 0 : g, l ? g + 1 : c) : qt(t, l ? g + 1 : 0, l ? c : g);
      }
      function pc(t, i) {
        var s = t;
        return s instanceof de && (s = s.value()), Bo(i, function(l, c) {
          return c.func.apply(c.thisArg, Qn([l], c.args));
        }, s);
      }
      function pr(t, i, s) {
        var l = t.length;
        if (l < 2) return l ? ai(t[0]) : [];
        for (var c = -1, g = R(l); ++c < l; )
          for (var I = t[c], b = -1; ++b < l; ) b != c && (g[c] = fa(g[c] || I, t[b], i, s));
        return ai(nt(g, 1), i, s);
      }
      function gc(t, i, s) {
        for (var l = -1, c = t.length, g = i.length, I = {}; ++l < c; ) {
          var b = l < g ? i[l] : a;
          s(I, t[l], b);
        }
        return I;
      }
      function gr(t) {
        return Be(t) ? t : [];
      }
      function hr(t) {
        return typeof t == "function" ? t : yt;
      }
      function si(t, i) {
        return oe(t) ? t : Cr(t, i) ? [t] : Hc(_e(t));
      }
      var zf = me;
      function oi(t, i, s) {
        var l = t.length;
        return s = s === a ? l : s, !i && s >= l ? t : qt(t, i, s);
      }
      var hc = yh || function(t) {
        return Qe.clearTimeout(t);
      };
      function fc(t, i) {
        if (i) return t.slice();
        var s = t.length, l = xu ? xu(s) : new t.constructor(s);
        return t.copy(l), l;
      }
      function fr(t) {
        var i = new t.constructor(t.byteLength);
        return new ps(i).set(new ps(t)), i;
      }
      function Pf(t, i) {
        var s = i ? fr(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.byteLength);
      }
      function Df(t) {
        var i = new t.constructor(t.source, Ql.exec(t));
        return i.lastIndex = t.lastIndex, i;
      }
      function xf(t) {
        return ga ? Ue(ga.call(t)) : {};
      }
      function Ic(t, i) {
        var s = i ? fr(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.length);
      }
      function bc(t, i) {
        if (t !== i) {
          var s = t !== a, l = t === null, c = t === t, g = Ut(t), I = i !== a, b = i === null, w = i === i, E = Ut(i);
          if (!b && !E && !g && t > i || g && I && w && !b && !E || l && I && w || !s && w || !c) return 1;
          if (!l && !g && !E && t < i || E && s && c && !l && !g || b && s && c || !I && c || !w) return -1;
        }
        return 0;
      }
      function Lf(t, i, s) {
        for (var l = -1, c = t.criteria, g = i.criteria, I = c.length, b = s.length; ++l < I; ) {
          var w = bc(c[l], g[l]);
          if (w)
            return l >= b ? w : w * (s[l] == "desc" ? -1 : 1);
        }
        return t.index - i.index;
      }
      function vc(t, i, s, l) {
        for (var c = -1, g = t.length, I = s.length, b = -1, w = i.length, E = Ke(g - I, 0), A = R(w + E), D = !l; ++b < w; ) A[b] = i[b];
        for (; ++c < I; ) (D || c < g) && (A[s[c]] = t[c]);
        for (; E--; ) A[b++] = t[c++];
        return A;
      }
      function yc(t, i, s, l) {
        for (var c = -1, g = t.length, I = -1, b = s.length, w = -1, E = i.length, A = Ke(g - b, 0), D = R(A + E), H = !l; ++c < A; ) D[c] = t[c];
        for (var G = c; ++w < E; ) D[G + w] = i[w];
        for (; ++I < b; ) (H || c < g) && (D[G + s[I]] = t[c++]);
        return D;
      }
      function It(t, i) {
        var s = -1, l = t.length;
        for (i || (i = R(l)); ++s < l; ) i[s] = t[s];
        return i;
      }
      function vn(t, i, s, l) {
        var c = !s;
        s || (s = {});
        for (var g = -1, I = i.length; ++g < I; ) {
          var b = i[g], w = l ? l(s[b], t[b], b, s, t) : a;
          w === a && (w = t[b]), c ? Pn(s, b, w) : ha(s, b, w);
        }
        return s;
      }
      function Ff(t, i) {
        return vn(t, wr(t), i);
      }
      function kf(t, i) {
        return vn(t, Oc(t), i);
      }
      function As(t, i) {
        return function(s, l) {
          var c = oe(s) ? jg : lf, g = i ? i() : {};
          return c(s, t, Q(l, 2), g);
        };
      }
      function Gi(t) {
        return me(function(i, s) {
          var l = -1, c = s.length, g = c > 1 ? s[c - 1] : a, I = c > 2 ? s[2] : a;
          for (g = t.length > 3 && typeof g == "function" ? (c--, g) : a, I && dt(s[0], s[1], I) && (g = c < 3 ? a : g, c = 1), i = Ue(i); ++l < c; ) {
            var b = s[l];
            b && t(i, b, l, g);
          }
          return i;
        });
      }
      function Tc(t, i) {
        return function(s, l) {
          if (s == null) return s;
          if (!bt(s)) return t(s, l);
          for (var c = s.length, g = i ? c : -1, I = Ue(s); (i ? g-- : ++g < c) && l(I[g], g, I) !== !1; ) ;
          return s;
        };
      }
      function _c(t) {
        return function(i, s, l) {
          for (var c = -1, g = Ue(i), I = l(i), b = I.length; b--; ) {
            var w = I[t ? b : ++c];
            if (s(g[w], w, g) === !1) break;
          }
          return i;
        };
      }
      function Bf(t, i, s) {
        var l = i & he, c = ya(t);
        function g() {
          return (this && this !== Qe && this instanceof g ? c : t).apply(l ? s : this, arguments);
        }
        return g;
      }
      function wc(t) {
        return function(i) {
          i = _e(i);
          var s = ki(i) ? Xt(i) : a, l = s ? s[0] : i.charAt(0), c = s ? oi(s, 1).join("") : i.slice(1);
          return l[t]() + c;
        };
      }
      function Wi(t) {
        return function(i) {
          return Bo(Tm(ym(i).replace(Ng, "")), t, "");
        };
      }
      function ya(t) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new t();
            case 1:
              return new t(i[0]);
            case 2:
              return new t(i[0], i[1]);
            case 3:
              return new t(i[0], i[1], i[2]);
            case 4:
              return new t(i[0], i[1], i[2], i[3]);
            case 5:
              return new t(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var s = ji(t.prototype), l = t.apply(s, i);
          return De(l) ? l : s;
        };
      }
      function qf(t, i, s) {
        var l = ya(t);
        function c() {
          for (var g = arguments.length, I = R(g), b = g, w = Ki(c); b--; ) I[b] = arguments[b];
          var E = g < 3 && I[0] !== w && I[g - 1] !== w ? [] : ei(I, w);
          return g -= E.length, g < s ? Ac(t, i, Vs, c.placeholder, a, I, E, a, a, s - g) : wt(this && this !== Qe && this instanceof c ? l : t, this, I);
        }
        return c;
      }
      function Cc(t) {
        return function(i, s, l) {
          var c = Ue(i);
          if (!bt(i)) {
            var g = Q(s, 3);
            i = et(i), s = function(b) {
              return g(c[b], b, c);
            };
          }
          var I = t(i, s, l);
          return I > -1 ? c[g ? i[I] : I] : a;
        };
      }
      function Rc(t) {
        return xn(function(i) {
          var s = i.length, l = s, c = kt.prototype.thru;
          for (t && i.reverse(); l--; ) {
            var g = i[l];
            if (typeof g != "function") throw new Ft(m);
            if (c && !I && Os(g) == "wrapper") var I = new kt([], !0);
          }
          for (l = I ? l : s; ++l < s; ) {
            g = i[l];
            var b = Os(g), w = b == "wrapper" ? Tr(g) : a;
            w && Rr(w[0]) && w[1] == (xe | se | j | Le) && !w[4].length && w[9] == 1 ? I = I[Os(w[0])].apply(I, w[3]) : I = g.length == 1 && Rr(g) ? I[b]() : I.thru(g);
          }
          return function() {
            var E = arguments, A = E[0];
            if (I && E.length == 1 && oe(A)) return I.plant(A).value();
            for (var D = 0, H = s ? i[D].apply(this, E) : A; ++D < s; ) H = i[D].call(this, H);
            return H;
          };
        });
      }
      function Vs(t, i, s, l, c, g, I, b, w, E) {
        var A = i & xe, D = i & he, H = i & ye, G = i & (se | He), Y = i & Ye, ae = H ? a : ya(t);
        function ee() {
          for (var Se = arguments.length, pe = R(Se), pt = Se; pt--; ) pe[pt] = arguments[pt];
          if (G) var Tn = Ki(ee), li = eh(pe, Tn);
          if (l && (pe = vc(pe, l, c, G)), g && (pe = yc(pe, g, I, G)), Se -= li, G && Se < E) {
            var qe = ei(pe, Tn);
            return Ac(t, i, Vs, ee.placeholder, s, pe, qe, b, w, E - Se);
          }
          var Qt = D ? s : this, Bn = H ? Qt[t] : t;
          return Se = pe.length, b ? pe = l1(pe, b) : Y && Se > 1 && pe.reverse(), A && w < Se && (pe.length = w), this && this !== Qe && this instanceof ee && (Bn = ae || ya(Bn)), Bn.apply(Qt, pe);
        }
        return ee;
      }
      function Uc(t, i) {
        return function(s, l) {
          return ff(s, t, i(l), {});
        };
      }
      function Es(t, i) {
        return function(s, l) {
          var c;
          if (s === a && l === a) return i;
          if (s !== a && (c = s), l !== a) {
            if (c === a) return l;
            typeof s == "string" || typeof l == "string" ? (s = Rt(s), l = Rt(l)) : (s = mc(s), l = mc(l)), c = t(s, l);
          }
          return c;
        };
      }
      function Ir(t) {
        return xn(function(i) {
          return i = ze(i, Ct(Q())), me(function(s) {
            var l = this;
            return t(i, function(c) {
              return wt(c, l, s);
            });
          });
        });
      }
      function Ns(t, i) {
        i = i === a ? " " : Rt(i);
        var s = i.length;
        if (s < 2) return s ? cr(i, t) : i;
        var l = cr(i, Is(t / Bi(i)));
        return ki(i) ? oi(Xt(l), 0, t).join("") : l.slice(0, t);
      }
      function Hf(t, i, s, l) {
        var c = i & he, g = ya(t);
        function I() {
          for (var b = -1, w = arguments.length, E = -1, A = l.length, D = R(A + w), H = this && this !== Qe && this instanceof I ? g : t; ++E < A; ) D[E] = l[E];
          for (; w--; ) D[E++] = arguments[++b];
          return wt(H, c ? s : this, D);
        }
        return I;
      }
      function Sc(t) {
        return function(i, s, l) {
          return l && typeof l != "number" && dt(i, s, l) && (s = l = a), i = kn(i), s === a ? (s = i, i = 0) : s = kn(s), l = l === a ? i < s ? 1 : -1 : kn(l), Af(i, s, l, t);
        };
      }
      function Ms(t) {
        return function(i, s) {
          return typeof i == "string" && typeof s == "string" || (i = Jt(i), s = Jt(s)), t(i, s);
        };
      }
      function Ac(t, i, s, l, c, g, I, b, w, E) {
        var A = i & se, D = A ? I : a, H = A ? a : I, G = A ? g : a, Y = A ? a : g;
        i |= A ? j : Ne, i &= ~(A ? Ne : j), i & fe || (i &= ~(he | ye));
        var ae = [
          t,
          i,
          c,
          G,
          D,
          Y,
          H,
          b,
          w,
          E
        ], ee = s.apply(a, ae);
        return Rr(t) && kc(ee, ae), ee.placeholder = l, Bc(ee, t, i);
      }
      function br(t) {
        var i = We[t];
        return function(s, l) {
          if (s = Jt(s), l = l == null ? 0 : ot(le(l), 292), l && Bu(s)) {
            var c = (_e(s) + "e").split("e");
            return c = (_e(i(c[0] + "e" + (+c[1] + l))) + "e").split("e"), +(c[0] + "e" + (+c[1] - l));
          }
          return i(s);
        };
      }
      var Jf = Hi && 1 / rs(new Hi([, -0]))[1] == re ? function(t) {
        return new Hi(t);
      } : kr;
      function Vc(t) {
        return function(i) {
          var s = rt(i);
          return s == h ? Ko(i) : s == x ? rh(i) : Qg(i, t(i));
        };
      }
      function Dn(t, i, s, l, c, g, I, b) {
        var w = i & ye;
        if (!w && typeof t != "function") throw new Ft(m);
        var E = l ? l.length : 0;
        if (E || (i &= ~(j | Ne), l = c = a), I = I === a ? I : Ke(le(I), 0), b = b === a ? b : le(b), E -= c ? c.length : 0, i & Ne) {
          var A = l, D = c;
          l = c = a;
        }
        var H = w ? a : Tr(t), G = [
          t,
          i,
          s,
          l,
          c,
          A,
          D,
          g,
          I,
          b
        ];
        if (H && s1(G, H), t = G[0], i = G[1], s = G[2], l = G[3], c = G[4], b = G[9] = G[9] === a ? w ? 0 : t.length : Ke(G[9] - E, 0), !b && i & (se | He) && (i &= ~(se | He)), !i || i == he) var Y = Bf(t, i, s);
        else i == se || i == He ? Y = qf(t, i, b) : (i == j || i == (he | j)) && !c.length ? Y = Hf(t, i, s, l) : Y = Vs.apply(a, G);
        return Bc((H ? uc : kc)(Y, G), t, i);
      }
      function Ec(t, i, s, l) {
        return t === a || Yt(t, qi[s]) && !Re.call(l, s) ? i : t;
      }
      function Nc(t, i, s, l, c, g) {
        return De(t) && De(i) && (g.set(i, t), Rs(t, i, a, Nc, g), g.delete(i)), t;
      }
      function jf(t) {
        return wa(t) ? a : t;
      }
      function Mc(t, i, s, l, c, g) {
        var I = s & q, b = t.length, w = i.length;
        if (b != w && !(I && w > b)) return !1;
        var E = g.get(t), A = g.get(i);
        if (E && A) return E == i && A == t;
        var D = -1, H = !0, G = s & W ? new fi() : a;
        for (g.set(t, i), g.set(i, t); ++D < b; ) {
          var Y = t[D], ae = i[D];
          if (l) var ee = I ? l(ae, Y, D, i, t, g) : l(Y, ae, D, t, i, g);
          if (ee !== a) {
            if (ee) continue;
            H = !1;
            break;
          }
          if (G) {
            if (!qo(i, function(Se, pe) {
              if (!ua(G, pe) && (Y === Se || c(Y, Se, s, l, g))) return G.push(pe);
            })) {
              H = !1;
              break;
            }
          } else if (!(Y === ae || c(Y, ae, s, l, g))) {
            H = !1;
            break;
          }
        }
        return g.delete(t), g.delete(i), H;
      }
      function Gf(t, i, s, l, c, g, I) {
        switch (s) {
          case ce:
            if (t.byteLength != i.byteLength || t.byteOffset != i.byteOffset) return !1;
            t = t.buffer, i = i.buffer;
          case Z:
            return !(t.byteLength != i.byteLength || !g(new ps(t), new ps(i)));
          case In:
          case Nn:
          case v:
            return Yt(+t, +i);
          case $t:
            return t.name == i.name && t.message == i.message;
          case F:
          case L:
            return t == i + "";
          case h:
            var b = Ko;
          case x:
            var w = l & q;
            if (b || (b = rs), t.size != i.size && !w) return !1;
            var E = I.get(t);
            if (E) return E == i;
            l |= W, I.set(t, i);
            var A = Mc(b(t), b(i), l, c, g, I);
            return I.delete(t), A;
          case z:
            if (ga) return ga.call(t) == ga.call(i);
        }
        return !1;
      }
      function Wf(t, i, s, l, c, g) {
        var I = s & q, b = vr(t), w = b.length;
        if (w != vr(i).length && !I) return !1;
        for (var E = w; E--; ) {
          var A = b[E];
          if (!(I ? A in i : Re.call(i, A))) return !1;
        }
        var D = g.get(t), H = g.get(i);
        if (D && H) return D == i && H == t;
        var G = !0;
        g.set(t, i), g.set(i, t);
        for (var Y = I; ++E < w; ) {
          A = b[E];
          var ae = t[A], ee = i[A];
          if (l) var Se = I ? l(ee, ae, A, i, t, g) : l(ae, ee, A, t, i, g);
          if (!(Se === a ? ae === ee || c(ae, ee, s, l, g) : Se)) {
            G = !1;
            break;
          }
          Y || (Y = A == "constructor");
        }
        if (G && !Y) {
          var pe = t.constructor, pt = i.constructor;
          pe != pt && "constructor" in t && "constructor" in i && !(typeof pe == "function" && pe instanceof pe && typeof pt == "function" && pt instanceof pt) && (G = !1);
        }
        return g.delete(t), g.delete(i), G;
      }
      function xn(t) {
        return Sr(Lc(t, a, Wc), t + "");
      }
      function vr(t) {
        return Yu(t, et, wr);
      }
      function yr(t) {
        return Yu(t, vt, Oc);
      }
      var Tr = vs ? function(t) {
        return vs.get(t);
      } : kr;
      function Os(t) {
        for (var i = t.name + "", s = Ji[i], l = Re.call(Ji, i) ? s.length : 0; l--; ) {
          var c = s[l], g = c.func;
          if (g == null || g == t) return c.name;
        }
        return i;
      }
      function Ki(t) {
        return (Re.call(d, "placeholder") ? d : t).placeholder;
      }
      function Q() {
        var t = d.iteratee || Lr;
        return t = t === Lr ? tc : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function zs(t, i) {
        var s = t.__data__;
        return t1(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
      }
      function _r(t) {
        for (var i = et(t), s = i.length; s--; ) {
          var l = i[s], c = t[l];
          i[s] = [
            l,
            c,
            Dc(c)
          ];
        }
        return i;
      }
      function vi(t, i) {
        var s = ah(t, i);
        return ec(s) ? s : a;
      }
      function Kf(t) {
        var i = Re.call(t, gi), s = t[gi];
        try {
          t[gi] = a;
          var l = !0;
        } catch {
        }
        var c = ms.call(t);
        return l && (i ? t[gi] = s : delete t[gi]), c;
      }
      var wr = Xo ? function(t) {
        return t == null ? [] : (t = Ue(t), Yn(Xo(t), function(i) {
          return Fu.call(t, i);
        }));
      } : Br, Oc = Xo ? function(t) {
        for (var i = []; t; )
          Qn(i, wr(t)), t = gs(t);
        return i;
      } : Br, rt = mt;
      (Zo && rt(new Zo(/* @__PURE__ */ new ArrayBuffer(1))) != ce || ma && rt(new ma()) != h || Yo && rt(Yo.resolve()) != O || Hi && rt(new Hi()) != x || da && rt(new da()) != B) && (rt = function(t) {
        var i = mt(t), s = i == M ? t.constructor : a, l = s ? yi(s) : "";
        if (l) switch (l) {
          case Vh:
            return ce;
          case Eh:
            return h;
          case Nh:
            return O;
          case Mh:
            return x;
          case Oh:
            return B;
        }
        return i;
      });
      function $f(t, i, s) {
        for (var l = -1, c = s.length; ++l < c; ) {
          var g = s[l], I = g.size;
          switch (g.type) {
            case "drop":
              t += I;
              break;
            case "dropRight":
              i -= I;
              break;
            case "take":
              i = ot(i, t + I);
              break;
            case "takeRight":
              t = Ke(t, i - I);
              break;
          }
        }
        return {
          start: t,
          end: i
        };
      }
      function Xf(t) {
        var i = t.match(sg);
        return i ? i[1].split(og) : [];
      }
      function zc(t, i, s) {
        i = si(i, t);
        for (var l = -1, c = i.length, g = !1; ++l < c; ) {
          var I = yn(i[l]);
          if (!(g = t != null && s(t, I))) break;
          t = t[I];
        }
        return g || ++l != c ? g : (c = t == null ? 0 : t.length, !!c && Bs(c) && Ln(I, c) && (oe(t) || Ti(t)));
      }
      function Zf(t) {
        var i = t.length, s = new t.constructor(i);
        return i && typeof t[0] == "string" && Re.call(t, "index") && (s.index = t.index, s.input = t.input), s;
      }
      function Pc(t) {
        return typeof t.constructor == "function" && !Ta(t) ? ji(gs(t)) : {};
      }
      function Yf(t, i, s) {
        var l = t.constructor;
        switch (i) {
          case Z:
            return fr(t);
          case In:
          case Nn:
            return new l(+t);
          case ce:
            return Pf(t, s);
          case Ie:
          case be:
          case Oe:
          case Pe:
          case ct:
          case tt:
          case Mn:
          case xi:
          case Ge:
            return Ic(t, s);
          case h:
            return new l();
          case v:
          case L:
            return new l(t);
          case F:
            return Df(t);
          case x:
            return new l();
          case z:
            return xf(t);
        }
      }
      function Qf(t, i) {
        var s = i.length;
        if (!s) return t;
        var l = s - 1;
        return i[l] = (s > 1 ? "& " : "") + i[l], i = i.join(s > 2 ? ", " : " "), t.replace(ag, `{
/* [wrapped with ` + i + `] */
`);
      }
      function e1(t) {
        return oe(t) || Ti(t) || !!(ku && t && t[ku]);
      }
      function Ln(t, i) {
        var s = typeof t;
        return i = i ?? ne, !!i && (s == "number" || s != "symbol" && hg.test(t)) && t > -1 && t % 1 == 0 && t < i;
      }
      function dt(t, i, s) {
        if (!De(s)) return !1;
        var l = typeof i;
        return (l == "number" ? bt(s) && Ln(i, s.length) : l == "string" && i in s) ? Yt(s[i], t) : !1;
      }
      function Cr(t, i) {
        if (oe(t)) return !1;
        var s = typeof t;
        return s == "number" || s == "symbol" || s == "boolean" || t == null || Ut(t) ? !0 : eg.test(t) || !Qp.test(t) || i != null && t in Ue(i);
      }
      function t1(t) {
        var i = typeof t;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? t !== "__proto__" : t === null;
      }
      function Rr(t) {
        var i = Os(t), s = d[i];
        if (typeof s != "function" || !(i in de.prototype)) return !1;
        if (t === s) return !0;
        var l = Tr(s);
        return !!l && t === l[0];
      }
      function n1(t) {
        return !!Du && Du in t;
      }
      var i1 = us ? Fn : qr;
      function Ta(t) {
        var i = t && t.constructor;
        return t === (typeof i == "function" && i.prototype || qi);
      }
      function Dc(t) {
        return t === t && !De(t);
      }
      function xc(t, i) {
        return function(s) {
          return s == null ? !1 : s[t] === i && (i !== a || t in Ue(s));
        };
      }
      function a1(t) {
        var i = Fs(t, function(l) {
          return s.size === C && s.clear(), l;
        }), s = i.cache;
        return i;
      }
      function s1(t, i) {
        var s = t[1], l = i[1], c = s | l, g = c < (he | ye | xe), I = l == xe && s == se || l == xe && s == Le && t[7].length <= i[8] || l == (xe | Le) && i[7].length <= i[8] && s == se;
        if (!(g || I)) return t;
        l & he && (t[2] = i[2], c |= s & he ? 0 : fe);
        var b = i[3];
        if (b) {
          var w = t[3];
          t[3] = w ? vc(w, b, i[4]) : b, t[4] = w ? ei(t[3], T) : i[4];
        }
        return b = i[5], b && (w = t[5], t[5] = w ? yc(w, b, i[6]) : b, t[6] = w ? ei(t[5], T) : i[6]), b = i[7], b && (t[7] = b), l & xe && (t[8] = t[8] == null ? i[8] : ot(t[8], i[8])), t[9] == null && (t[9] = i[9]), t[0] = i[0], t[1] = c, t;
      }
      function o1(t) {
        var i = [];
        if (t != null) for (var s in Ue(t)) i.push(s);
        return i;
      }
      function r1(t) {
        return ms.call(t);
      }
      function Lc(t, i, s) {
        return i = Ke(i === a ? t.length - 1 : i, 0), function() {
          for (var l = arguments, c = -1, g = Ke(l.length - i, 0), I = R(g); ++c < g; ) I[c] = l[i + c];
          c = -1;
          for (var b = R(i + 1); ++c < i; ) b[c] = l[c];
          return b[i] = s(I), wt(t, this, b);
        };
      }
      function Fc(t, i) {
        return i.length < 2 ? t : bi(t, qt(i, 0, -1));
      }
      function l1(t, i) {
        for (var s = t.length, l = ot(i.length, s), c = It(t); l--; ) {
          var g = i[l];
          t[l] = Ln(g, s) ? c[g] : a;
        }
        return t;
      }
      function Ur(t, i) {
        if (!(i === "constructor" && typeof t[i] == "function") && i != "__proto__")
          return t[i];
      }
      var kc = qc(uc), _a = _h || function(t, i) {
        return Qe.setTimeout(t, i);
      }, Sr = qc(Nf);
      function Bc(t, i, s) {
        var l = i + "";
        return Sr(t, Qf(l, u1(Xf(l), s)));
      }
      function qc(t) {
        var i = 0, s = 0;
        return function() {
          var l = Uh(), c = Oi - (l - s);
          if (s = l, c > 0) {
            if (++i >= _t) return arguments[0];
          } else i = 0;
          return t.apply(a, arguments);
        };
      }
      function Ps(t, i) {
        var s = -1, l = t.length, c = l - 1;
        for (i = i === a ? l : i; ++s < i; ) {
          var g = ur(s, c), I = t[g];
          t[g] = t[s], t[s] = I;
        }
        return t.length = i, t;
      }
      var Hc = a1(function(t) {
        var i = [];
        return t.charCodeAt(0) === 46 && i.push(""), t.replace(tg, function(s, l, c, g) {
          i.push(c ? g.replace(ug, "$1") : l || s);
        }), i;
      });
      function yn(t) {
        if (typeof t == "string" || Ut(t)) return t;
        var i = t + "";
        return i == "0" && 1 / t == -re ? "-0" : i;
      }
      function yi(t) {
        if (t != null) {
          try {
            return cs.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function u1(t, i) {
        return Lt(la, function(s) {
          var l = "_." + s[0];
          i & s[1] && !ss(t, l) && t.push(l);
        }), t.sort();
      }
      function Jc(t) {
        if (t instanceof de) return t.clone();
        var i = new kt(t.__wrapped__, t.__chain__);
        return i.__actions__ = It(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i;
      }
      function c1(t, i, s) {
        (s ? dt(t, i, s) : i === a) ? i = 1 : i = Ke(le(i), 0);
        var l = t == null ? 0 : t.length;
        if (!l || i < 1) return [];
        for (var c = 0, g = 0, I = R(Is(l / i)); c < l; ) I[g++] = qt(t, c, c += i);
        return I;
      }
      function m1(t) {
        for (var i = -1, s = t == null ? 0 : t.length, l = 0, c = []; ++i < s; ) {
          var g = t[i];
          g && (c[l++] = g);
        }
        return c;
      }
      function d1() {
        var t = arguments.length;
        if (!t) return [];
        for (var i = R(t - 1), s = arguments[0], l = t; l--; ) i[l - 1] = arguments[l];
        return Qn(oe(s) ? It(s) : [s], nt(i, 1));
      }
      var p1 = me(function(t, i) {
        return Be(t) ? fa(t, nt(i, 1, Be, !0)) : [];
      }), g1 = me(function(t, i) {
        var s = Ht(i);
        return Be(s) && (s = a), Be(t) ? fa(t, nt(i, 1, Be, !0), Q(s, 2)) : [];
      }), h1 = me(function(t, i) {
        var s = Ht(i);
        return Be(s) && (s = a), Be(t) ? fa(t, nt(i, 1, Be, !0), a, s) : [];
      });
      function f1(t, i, s) {
        var l = t == null ? 0 : t.length;
        return l ? (i = s || i === a ? 1 : le(i), qt(t, i < 0 ? 0 : i, l)) : [];
      }
      function I1(t, i, s) {
        var l = t == null ? 0 : t.length;
        return l ? (i = s || i === a ? 1 : le(i), i = l - i, qt(t, 0, i < 0 ? 0 : i)) : [];
      }
      function b1(t, i) {
        return t && t.length ? Ss(t, Q(i, 3), !0, !0) : [];
      }
      function v1(t, i) {
        return t && t.length ? Ss(t, Q(i, 3), !0) : [];
      }
      function y1(t, i, s, l) {
        var c = t == null ? 0 : t.length;
        return c ? (s && typeof s != "number" && dt(t, i, s) && (s = 0, l = c), df(t, i, s, l)) : [];
      }
      function jc(t, i, s) {
        var l = t == null ? 0 : t.length;
        if (!l) return -1;
        var c = s == null ? 0 : le(s);
        return c < 0 && (c = Ke(l + c, 0)), os(t, Q(i, 3), c);
      }
      function Gc(t, i, s) {
        var l = t == null ? 0 : t.length;
        if (!l) return -1;
        var c = l - 1;
        return s !== a && (c = le(s), c = s < 0 ? Ke(l + c, 0) : ot(c, l - 1)), os(t, Q(i, 3), c, !0);
      }
      function Wc(t) {
        return t != null && t.length ? nt(t, 1) : [];
      }
      function T1(t) {
        return t != null && t.length ? nt(t, re) : [];
      }
      function _1(t, i) {
        return t != null && t.length ? (i = i === a ? 1 : le(i), nt(t, i)) : [];
      }
      function w1(t) {
        for (var i = -1, s = t == null ? 0 : t.length, l = {}; ++i < s; ) {
          var c = t[i];
          l[c[0]] = c[1];
        }
        return l;
      }
      function Kc(t) {
        return t && t.length ? t[0] : a;
      }
      function C1(t, i, s) {
        var l = t == null ? 0 : t.length;
        if (!l) return -1;
        var c = s == null ? 0 : le(s);
        return c < 0 && (c = Ke(l + c, 0)), Fi(t, i, c);
      }
      function R1(t) {
        return t != null && t.length ? qt(t, 0, -1) : [];
      }
      var U1 = me(function(t) {
        var i = ze(t, gr);
        return i.length && i[0] === t[0] ? ar(i) : [];
      }), S1 = me(function(t) {
        var i = Ht(t), s = ze(t, gr);
        return i === Ht(s) ? i = a : s.pop(), s.length && s[0] === t[0] ? ar(s, Q(i, 2)) : [];
      }), A1 = me(function(t) {
        var i = Ht(t), s = ze(t, gr);
        return i = typeof i == "function" ? i : a, i && s.pop(), s.length && s[0] === t[0] ? ar(s, a, i) : [];
      });
      function V1(t, i) {
        return t == null ? "" : Ch.call(t, i);
      }
      function Ht(t) {
        var i = t == null ? 0 : t.length;
        return i ? t[i - 1] : a;
      }
      function E1(t, i, s) {
        var l = t == null ? 0 : t.length;
        if (!l) return -1;
        var c = l;
        return s !== a && (c = le(s), c = c < 0 ? Ke(l + c, 0) : ot(c, l - 1)), i === i ? uh(t, i, c) : os(t, Au, c, !0);
      }
      function N1(t, i) {
        return t && t.length ? sc(t, le(i)) : a;
      }
      var M1 = me($c);
      function $c(t, i) {
        return t && t.length && i && i.length ? lr(t, i) : t;
      }
      function O1(t, i, s) {
        return t && t.length && i && i.length ? lr(t, i, Q(s, 2)) : t;
      }
      function z1(t, i, s) {
        return t && t.length && i && i.length ? lr(t, i, a, s) : t;
      }
      var P1 = xn(function(t, i) {
        var s = t == null ? 0 : t.length, l = er(t, i);
        return lc(t, ze(i, function(c) {
          return Ln(c, s) ? +c : c;
        }).sort(bc)), l;
      });
      function D1(t, i) {
        var s = [];
        if (!(t && t.length)) return s;
        var l = -1, c = [], g = t.length;
        for (i = Q(i, 3); ++l < g; ) {
          var I = t[l];
          i(I, l, t) && (s.push(I), c.push(l));
        }
        return lc(t, c), s;
      }
      function Ar(t) {
        return t == null ? t : Ah.call(t);
      }
      function x1(t, i, s) {
        var l = t == null ? 0 : t.length;
        return l ? (s && typeof s != "number" && dt(t, i, s) ? (i = 0, s = l) : (i = i == null ? 0 : le(i), s = s === a ? l : le(s)), qt(t, i, s)) : [];
      }
      function L1(t, i) {
        return Us(t, i);
      }
      function F1(t, i, s) {
        return mr(t, i, Q(s, 2));
      }
      function k1(t, i) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = Us(t, i);
          if (l < s && Yt(t[l], i)) return l;
        }
        return -1;
      }
      function B1(t, i) {
        return Us(t, i, !0);
      }
      function q1(t, i, s) {
        return mr(t, i, Q(s, 2), !0);
      }
      function H1(t, i) {
        if (t != null && t.length) {
          var s = Us(t, i, !0) - 1;
          if (Yt(t[s], i)) return s;
        }
        return -1;
      }
      function J1(t) {
        return t && t.length ? cc(t) : [];
      }
      function j1(t, i) {
        return t && t.length ? cc(t, Q(i, 2)) : [];
      }
      function G1(t) {
        var i = t == null ? 0 : t.length;
        return i ? qt(t, 1, i) : [];
      }
      function W1(t, i, s) {
        return t && t.length ? (i = s || i === a ? 1 : le(i), qt(t, 0, i < 0 ? 0 : i)) : [];
      }
      function K1(t, i, s) {
        var l = t == null ? 0 : t.length;
        return l ? (i = s || i === a ? 1 : le(i), i = l - i, qt(t, i < 0 ? 0 : i, l)) : [];
      }
      function $1(t, i) {
        return t && t.length ? Ss(t, Q(i, 3), !1, !0) : [];
      }
      function X1(t, i) {
        return t && t.length ? Ss(t, Q(i, 3)) : [];
      }
      var Z1 = me(function(t) {
        return ai(nt(t, 1, Be, !0));
      }), Y1 = me(function(t) {
        var i = Ht(t);
        return Be(i) && (i = a), ai(nt(t, 1, Be, !0), Q(i, 2));
      }), Q1 = me(function(t) {
        var i = Ht(t);
        return i = typeof i == "function" ? i : a, ai(nt(t, 1, Be, !0), a, i);
      });
      function e0(t) {
        return t && t.length ? ai(t) : [];
      }
      function t0(t, i) {
        return t && t.length ? ai(t, Q(i, 2)) : [];
      }
      function n0(t, i) {
        return i = typeof i == "function" ? i : a, t && t.length ? ai(t, a, i) : [];
      }
      function Vr(t) {
        if (!(t && t.length)) return [];
        var i = 0;
        return t = Yn(t, function(s) {
          if (Be(s))
            return i = Ke(s.length, i), !0;
        }), Go(i, function(s) {
          return ze(t, Ho(s));
        });
      }
      function Xc(t, i) {
        if (!(t && t.length)) return [];
        var s = Vr(t);
        return i == null ? s : ze(s, function(l) {
          return wt(i, a, l);
        });
      }
      var i0 = me(function(t, i) {
        return Be(t) ? fa(t, i) : [];
      }), a0 = me(function(t) {
        return pr(Yn(t, Be));
      }), s0 = me(function(t) {
        var i = Ht(t);
        return Be(i) && (i = a), pr(Yn(t, Be), Q(i, 2));
      }), o0 = me(function(t) {
        var i = Ht(t);
        return i = typeof i == "function" ? i : a, pr(Yn(t, Be), a, i);
      }), r0 = me(Vr);
      function l0(t, i) {
        return gc(t || [], i || [], ha);
      }
      function u0(t, i) {
        return gc(t || [], i || [], va);
      }
      var c0 = me(function(t) {
        var i = t.length, s = i > 1 ? t[i - 1] : a;
        return s = typeof s == "function" ? (t.pop(), s) : a, Xc(t, s);
      });
      function Zc(t) {
        var i = d(t);
        return i.__chain__ = !0, i;
      }
      function m0(t, i) {
        return i(t), t;
      }
      function Ds(t, i) {
        return i(t);
      }
      var d0 = xn(function(t) {
        var i = t.length, s = i ? t[0] : 0, l = this.__wrapped__, c = function(g) {
          return er(g, t);
        };
        return i > 1 || this.__actions__.length || !(l instanceof de) || !Ln(s) ? this.thru(c) : (l = l.slice(s, +s + (i ? 1 : 0)), l.__actions__.push({
          func: Ds,
          args: [c],
          thisArg: a
        }), new kt(l, this.__chain__).thru(function(g) {
          return i && !g.length && g.push(a), g;
        }));
      });
      function p0() {
        return Zc(this);
      }
      function g0() {
        return new kt(this.value(), this.__chain__);
      }
      function h0() {
        this.__values__ === a && (this.__values__ = mm(this.value()));
        var t = this.__index__ >= this.__values__.length;
        return {
          done: t,
          value: t ? a : this.__values__[this.__index__++]
        };
      }
      function f0() {
        return this;
      }
      function I0(t) {
        for (var i, s = this; s instanceof Ts; ) {
          var l = Jc(s);
          l.__index__ = 0, l.__values__ = a, i ? c.__wrapped__ = l : i = l;
          var c = l;
          s = s.__wrapped__;
        }
        return c.__wrapped__ = t, i;
      }
      function b0() {
        var t = this.__wrapped__;
        if (t instanceof de) {
          var i = t;
          return this.__actions__.length && (i = new de(this)), i = i.reverse(), i.__actions__.push({
            func: Ds,
            args: [Ar],
            thisArg: a
          }), new kt(i, this.__chain__);
        }
        return this.thru(Ar);
      }
      function v0() {
        return pc(this.__wrapped__, this.__actions__);
      }
      var y0 = As(function(t, i, s) {
        Re.call(t, s) ? ++t[s] : Pn(t, s, 1);
      });
      function T0(t, i, s) {
        var l = oe(t) ? Uu : mf;
        return s && dt(t, i, s) && (i = a), l(t, Q(i, 3));
      }
      function _0(t, i) {
        return (oe(t) ? Yn : Xu)(t, Q(i, 3));
      }
      var w0 = Cc(jc), C0 = Cc(Gc);
      function R0(t, i) {
        return nt(xs(t, i), 1);
      }
      function U0(t, i) {
        return nt(xs(t, i), re);
      }
      function S0(t, i, s) {
        return s = s === a ? 1 : le(s), nt(xs(t, i), s);
      }
      function Yc(t, i) {
        return (oe(t) ? Lt : ii)(t, Q(i, 3));
      }
      function Qc(t, i) {
        return (oe(t) ? Gg : $u)(t, Q(i, 3));
      }
      var A0 = As(function(t, i, s) {
        Re.call(t, s) ? t[s].push(i) : Pn(t, s, [i]);
      });
      function V0(t, i, s, l) {
        t = bt(t) ? t : Xi(t), s = s && !l ? le(s) : 0;
        var c = t.length;
        return s < 0 && (s = Ke(c + s, 0)), qs(t) ? s <= c && t.indexOf(i, s) > -1 : !!c && Fi(t, i, s) > -1;
      }
      var E0 = me(function(t, i, s) {
        var l = -1, c = typeof i == "function", g = bt(t) ? R(t.length) : [];
        return ii(t, function(I) {
          g[++l] = c ? wt(i, I, s) : Ia(I, i, s);
        }), g;
      }), N0 = As(function(t, i, s) {
        Pn(t, s, i);
      });
      function xs(t, i) {
        return (oe(t) ? ze : nc)(t, Q(i, 3));
      }
      function M0(t, i, s, l) {
        return t == null ? [] : (oe(i) || (i = i == null ? [] : [i]), s = l ? a : s, oe(s) || (s = s == null ? [] : [s]), oc(t, i, s));
      }
      var O0 = As(function(t, i, s) {
        t[s ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function z0(t, i, s) {
        var l = oe(t) ? Bo : Eu, c = arguments.length < 3;
        return l(t, Q(i, 4), s, c, ii);
      }
      function P0(t, i, s) {
        var l = oe(t) ? Wg : Eu, c = arguments.length < 3;
        return l(t, Q(i, 4), s, c, $u);
      }
      function D0(t, i) {
        return (oe(t) ? Yn : Xu)(t, ks(Q(i, 3)));
      }
      function x0(t) {
        return (oe(t) ? ju : Vf)(t);
      }
      function L0(t, i, s) {
        return (s ? dt(t, i, s) : i === a) ? i = 1 : i = le(i), (oe(t) ? of : Ef)(t, i);
      }
      function F0(t) {
        return (oe(t) ? rf : Mf)(t);
      }
      function k0(t) {
        if (t == null) return 0;
        if (bt(t)) return qs(t) ? Bi(t) : t.length;
        var i = rt(t);
        return i == h || i == x ? t.size : or(t).length;
      }
      function B0(t, i, s) {
        var l = oe(t) ? qo : Of;
        return s && dt(t, i, s) && (i = a), l(t, Q(i, 3));
      }
      var q0 = me(function(t, i) {
        if (t == null) return [];
        var s = i.length;
        return s > 1 && dt(t, i[0], i[1]) ? i = [] : s > 2 && dt(i[0], i[1], i[2]) && (i = [i[0]]), oc(t, nt(i, 1), []);
      }), Ls = Th || function() {
        return Qe.Date.now();
      };
      function H0(t, i) {
        if (typeof i != "function") throw new Ft(m);
        return t = le(t), function() {
          if (--t < 1) return i.apply(this, arguments);
        };
      }
      function em(t, i, s) {
        return i = s ? a : i, i = t && i == null ? t.length : i, Dn(t, xe, a, a, a, a, i);
      }
      function tm(t, i) {
        var s;
        if (typeof i != "function") throw new Ft(m);
        return t = le(t), function() {
          return --t > 0 && (s = i.apply(this, arguments)), t <= 1 && (i = a), s;
        };
      }
      var Er = me(function(t, i, s) {
        var l = he;
        if (s.length) {
          var c = ei(s, Ki(Er));
          l |= j;
        }
        return Dn(t, l, i, s, c);
      }), nm = me(function(t, i, s) {
        var l = he | ye;
        if (s.length) {
          var c = ei(s, Ki(nm));
          l |= j;
        }
        return Dn(i, l, t, s, c);
      });
      function im(t, i, s) {
        i = s ? a : i;
        var l = Dn(t, se, a, a, a, a, a, i);
        return l.placeholder = im.placeholder, l;
      }
      function am(t, i, s) {
        i = s ? a : i;
        var l = Dn(t, He, a, a, a, a, a, i);
        return l.placeholder = am.placeholder, l;
      }
      function sm(t, i, s) {
        var l, c, g, I, b, w, E = 0, A = !1, D = !1, H = !0;
        if (typeof t != "function") throw new Ft(m);
        i = Jt(i) || 0, De(s) && (A = !!s.leading, D = "maxWait" in s, g = D ? Ke(Jt(s.maxWait) || 0, i) : g, H = "trailing" in s ? !!s.trailing : H);
        function G(qe) {
          var Qt = l, Bn = c;
          return l = c = a, E = qe, I = t.apply(Bn, Qt), I;
        }
        function Y(qe) {
          return E = qe, b = _a(Se, i), A ? G(qe) : I;
        }
        function ae(qe) {
          var Qt = qe - w, Bn = qe - E, Cm = i - Qt;
          return D ? ot(Cm, g - Bn) : Cm;
        }
        function ee(qe) {
          var Qt = qe - w, Bn = qe - E;
          return w === a || Qt >= i || Qt < 0 || D && Bn >= g;
        }
        function Se() {
          var qe = Ls();
          if (ee(qe)) return pe(qe);
          b = _a(Se, ae(qe));
        }
        function pe(qe) {
          return b = a, H && l ? G(qe) : (l = c = a, I);
        }
        function pt() {
          b !== a && hc(b), E = 0, l = w = c = b = a;
        }
        function Tn() {
          return b === a ? I : pe(Ls());
        }
        function li() {
          var qe = Ls(), Qt = ee(qe);
          if (l = arguments, c = this, w = qe, Qt) {
            if (b === a) return Y(w);
            if (D)
              return hc(b), b = _a(Se, i), G(w);
          }
          return b === a && (b = _a(Se, i)), I;
        }
        return li.cancel = pt, li.flush = Tn, li;
      }
      var J0 = me(function(t, i) {
        return Ku(t, 1, i);
      }), j0 = me(function(t, i, s) {
        return Ku(t, Jt(i) || 0, s);
      });
      function G0(t) {
        return Dn(t, Ye);
      }
      function Fs(t, i) {
        if (typeof t != "function" || i != null && typeof i != "function") throw new Ft(m);
        var s = function() {
          var l = arguments, c = i ? i.apply(this, l) : l[0], g = s.cache;
          if (g.has(c)) return g.get(c);
          var I = t.apply(this, l);
          return s.cache = g.set(c, I) || g, I;
        };
        return s.cache = new (Fs.Cache || zn)(), s;
      }
      Fs.Cache = zn;
      function ks(t) {
        if (typeof t != "function") throw new Ft(m);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, i[0]);
            case 2:
              return !t.call(this, i[0], i[1]);
            case 3:
              return !t.call(this, i[0], i[1], i[2]);
          }
          return !t.apply(this, i);
        };
      }
      function W0(t) {
        return tm(2, t);
      }
      var K0 = zf(function(t, i) {
        i = i.length == 1 && oe(i[0]) ? ze(i[0], Ct(Q())) : ze(nt(i, 1), Ct(Q()));
        var s = i.length;
        return me(function(l) {
          for (var c = -1, g = ot(l.length, s); ++c < g; ) l[c] = i[c].call(this, l[c]);
          return wt(t, this, l);
        });
      }), Nr = me(function(t, i) {
        return Dn(t, j, a, i, ei(i, Ki(Nr)));
      }), om = me(function(t, i) {
        return Dn(t, Ne, a, i, ei(i, Ki(om)));
      }), $0 = xn(function(t, i) {
        return Dn(t, Le, a, a, a, i);
      });
      function X0(t, i) {
        if (typeof t != "function") throw new Ft(m);
        return i = i === a ? i : le(i), me(t, i);
      }
      function Z0(t, i) {
        if (typeof t != "function") throw new Ft(m);
        return i = i == null ? 0 : Ke(le(i), 0), me(function(s) {
          var l = s[i], c = oi(s, 0, i);
          return l && Qn(c, l), wt(t, this, c);
        });
      }
      function Y0(t, i, s) {
        var l = !0, c = !0;
        if (typeof t != "function") throw new Ft(m);
        return De(s) && (l = "leading" in s ? !!s.leading : l, c = "trailing" in s ? !!s.trailing : c), sm(t, i, {
          leading: l,
          maxWait: i,
          trailing: c
        });
      }
      function Q0(t) {
        return em(t, 1);
      }
      function eI(t, i) {
        return Nr(hr(i), t);
      }
      function tI() {
        if (!arguments.length) return [];
        var t = arguments[0];
        return oe(t) ? t : [t];
      }
      function nI(t) {
        return Bt(t, P);
      }
      function iI(t, i) {
        return i = typeof i == "function" ? i : a, Bt(t, P, i);
      }
      function aI(t) {
        return Bt(t, y | P);
      }
      function sI(t, i) {
        return i = typeof i == "function" ? i : a, Bt(t, y | P, i);
      }
      function oI(t, i) {
        return i == null || Wu(t, i, et(i));
      }
      function Yt(t, i) {
        return t === i || t !== t && i !== i;
      }
      var rI = Ms(ir), lI = Ms(function(t, i) {
        return t >= i;
      }), Ti = Qu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Qu : function(t) {
        return Fe(t) && Re.call(t, "callee") && !Fu.call(t, "callee");
      }, oe = R.isArray, uI = yu ? Ct(yu) : If;
      function bt(t) {
        return t != null && Bs(t.length) && !Fn(t);
      }
      function Be(t) {
        return Fe(t) && bt(t);
      }
      function cI(t) {
        return t === !0 || t === !1 || Fe(t) && mt(t) == In;
      }
      var ri = wh || qr, mI = Tu ? Ct(Tu) : bf;
      function dI(t) {
        return Fe(t) && t.nodeType === 1 && !wa(t);
      }
      function pI(t) {
        if (t == null) return !0;
        if (bt(t) && (oe(t) || typeof t == "string" || typeof t.splice == "function" || ri(t) || $i(t) || Ti(t))) return !t.length;
        var i = rt(t);
        if (i == h || i == x) return !t.size;
        if (Ta(t)) return !or(t).length;
        for (var s in t) if (Re.call(t, s)) return !1;
        return !0;
      }
      function gI(t, i) {
        return ba(t, i);
      }
      function hI(t, i, s) {
        s = typeof s == "function" ? s : a;
        var l = s ? s(t, i) : a;
        return l === a ? ba(t, i, a, s) : !!l;
      }
      function Mr(t) {
        if (!Fe(t)) return !1;
        var i = mt(t);
        return i == $t || i == Qa || typeof t.message == "string" && typeof t.name == "string" && !wa(t);
      }
      function fI(t) {
        return typeof t == "number" && Bu(t);
      }
      function Fn(t) {
        if (!De(t)) return !1;
        var i = mt(t);
        return i == Zn || i == Di || i == di || i == N;
      }
      function rm(t) {
        return typeof t == "number" && t == le(t);
      }
      function Bs(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ne;
      }
      function De(t) {
        var i = typeof t;
        return t != null && (i == "object" || i == "function");
      }
      function Fe(t) {
        return t != null && typeof t == "object";
      }
      var lm = _u ? Ct(_u) : yf;
      function II(t, i) {
        return t === i || sr(t, i, _r(i));
      }
      function bI(t, i, s) {
        return s = typeof s == "function" ? s : a, sr(t, i, _r(i), s);
      }
      function vI(t) {
        return um(t) && t != +t;
      }
      function yI(t) {
        if (i1(t)) throw new ie(u);
        return ec(t);
      }
      function TI(t) {
        return t === null;
      }
      function _I(t) {
        return t == null;
      }
      function um(t) {
        return typeof t == "number" || Fe(t) && mt(t) == v;
      }
      function wa(t) {
        if (!Fe(t) || mt(t) != M) return !1;
        var i = gs(t);
        if (i === null) return !0;
        var s = Re.call(i, "constructor") && i.constructor;
        return typeof s == "function" && s instanceof s && cs.call(s) == Ih;
      }
      var Or = wu ? Ct(wu) : Tf;
      function wI(t) {
        return rm(t) && t >= -ne && t <= ne;
      }
      var cm = Cu ? Ct(Cu) : _f;
      function qs(t) {
        return typeof t == "string" || !oe(t) && Fe(t) && mt(t) == L;
      }
      function Ut(t) {
        return typeof t == "symbol" || Fe(t) && mt(t) == z;
      }
      var $i = Ru ? Ct(Ru) : wf;
      function CI(t) {
        return t === a;
      }
      function RI(t) {
        return Fe(t) && rt(t) == B;
      }
      function UI(t) {
        return Fe(t) && mt(t) == K;
      }
      var SI = Ms(rr), AI = Ms(function(t, i) {
        return t <= i;
      });
      function mm(t) {
        if (!t) return [];
        if (bt(t)) return qs(t) ? Xt(t) : It(t);
        if (ca && t[ca]) return oh(t[ca]());
        var i = rt(t);
        return (i == h ? Ko : i == x ? rs : Xi)(t);
      }
      function kn(t) {
        return t ? (t = Jt(t), t === re || t === -re ? (t < 0 ? -1 : 1) * Pt : t === t ? t : 0) : t === 0 ? t : 0;
      }
      function le(t) {
        var i = kn(t), s = i % 1;
        return i === i ? s ? i - s : i : 0;
      }
      function dm(t) {
        return t ? Ii(le(t), 0, ut) : 0;
      }
      function Jt(t) {
        if (typeof t == "number") return t;
        if (Ut(t)) return En;
        if (De(t)) {
          var i = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = De(i) ? i + "" : i;
        }
        if (typeof t != "string") return t === 0 ? t : +t;
        t = Nu(t);
        var s = dg.test(t);
        return s || gg.test(t) ? Hg(t.slice(2), s ? 2 : 8) : mg.test(t) ? En : +t;
      }
      function pm(t) {
        return vn(t, vt(t));
      }
      function VI(t) {
        return t ? Ii(le(t), -ne, ne) : t === 0 ? t : 0;
      }
      function _e(t) {
        return t == null ? "" : Rt(t);
      }
      var EI = Gi(function(t, i) {
        if (Ta(i) || bt(i)) {
          vn(i, et(i), t);
          return;
        }
        for (var s in i) Re.call(i, s) && ha(t, s, i[s]);
      }), gm = Gi(function(t, i) {
        vn(i, vt(i), t);
      }), Hs = Gi(function(t, i, s, l) {
        vn(i, vt(i), t, l);
      }), NI = Gi(function(t, i, s, l) {
        vn(i, et(i), t, l);
      }), MI = xn(er);
      function OI(t, i) {
        var s = ji(t);
        return i == null ? s : Gu(s, i);
      }
      var zI = me(function(t, i) {
        t = Ue(t);
        var s = -1, l = i.length, c = l > 2 ? i[2] : a;
        for (c && dt(i[0], i[1], c) && (l = 1); ++s < l; )
          for (var g = i[s], I = vt(g), b = -1, w = I.length; ++b < w; ) {
            var E = I[b], A = t[E];
            (A === a || Yt(A, qi[E]) && !Re.call(t, E)) && (t[E] = g[E]);
          }
        return t;
      }), PI = me(function(t) {
        return t.push(a, Nc), wt(hm, a, t);
      });
      function DI(t, i) {
        return Su(t, Q(i, 3), bn);
      }
      function xI(t, i) {
        return Su(t, Q(i, 3), nr);
      }
      function LI(t, i) {
        return t == null ? t : tr(t, Q(i, 3), vt);
      }
      function FI(t, i) {
        return t == null ? t : Zu(t, Q(i, 3), vt);
      }
      function kI(t, i) {
        return t && bn(t, Q(i, 3));
      }
      function BI(t, i) {
        return t && nr(t, Q(i, 3));
      }
      function qI(t) {
        return t == null ? [] : Cs(t, et(t));
      }
      function HI(t) {
        return t == null ? [] : Cs(t, vt(t));
      }
      function zr(t, i, s) {
        var l = t == null ? a : bi(t, i);
        return l === a ? s : l;
      }
      function JI(t, i) {
        return t != null && zc(t, i, pf);
      }
      function Pr(t, i) {
        return t != null && zc(t, i, gf);
      }
      var jI = Uc(function(t, i, s) {
        i != null && typeof i.toString != "function" && (i = ms.call(i)), t[i] = s;
      }, xr(yt)), GI = Uc(function(t, i, s) {
        i != null && typeof i.toString != "function" && (i = ms.call(i)), Re.call(t, i) ? t[i].push(s) : t[i] = [s];
      }, Q), WI = me(Ia);
      function et(t) {
        return bt(t) ? Ju(t) : or(t);
      }
      function vt(t) {
        return bt(t) ? Ju(t, !0) : Cf(t);
      }
      function KI(t, i) {
        var s = {};
        return i = Q(i, 3), bn(t, function(l, c, g) {
          Pn(s, i(l, c, g), l);
        }), s;
      }
      function $I(t, i) {
        var s = {};
        return i = Q(i, 3), bn(t, function(l, c, g) {
          Pn(s, c, i(l, c, g));
        }), s;
      }
      var XI = Gi(function(t, i, s) {
        Rs(t, i, s);
      }), hm = Gi(function(t, i, s, l) {
        Rs(t, i, s, l);
      }), ZI = xn(function(t, i) {
        var s = {};
        if (t == null) return s;
        var l = !1;
        i = ze(i, function(g) {
          return g = si(g, t), l || (l = g.length > 1), g;
        }), vn(t, yr(t), s), l && (s = Bt(s, y | V | P, jf));
        for (var c = i.length; c--; ) dr(s, i[c]);
        return s;
      });
      function YI(t, i) {
        return fm(t, ks(Q(i)));
      }
      var QI = xn(function(t, i) {
        return t == null ? {} : Uf(t, i);
      });
      function fm(t, i) {
        if (t == null) return {};
        var s = ze(yr(t), function(l) {
          return [l];
        });
        return i = Q(i), rc(t, s, function(l, c) {
          return i(l, c[0]);
        });
      }
      function e3(t, i, s) {
        i = si(i, t);
        var l = -1, c = i.length;
        for (c || (c = 1, t = a); ++l < c; ) {
          var g = t == null ? a : t[yn(i[l])];
          g === a && (l = c, g = s), t = Fn(g) ? g.call(t) : g;
        }
        return t;
      }
      function t3(t, i, s) {
        return t == null ? t : va(t, i, s);
      }
      function n3(t, i, s, l) {
        return l = typeof l == "function" ? l : a, t == null ? t : va(t, i, s, l);
      }
      var Im = Vc(et), bm = Vc(vt);
      function i3(t, i, s) {
        var l = oe(t), c = l || ri(t) || $i(t);
        if (i = Q(i, 4), s == null) {
          var g = t && t.constructor;
          c ? s = l ? new g() : [] : De(t) ? s = Fn(g) ? ji(gs(t)) : {} : s = {};
        }
        return (c ? Lt : bn)(t, function(I, b, w) {
          return i(s, I, b, w);
        }), s;
      }
      function a3(t, i) {
        return t == null ? !0 : dr(t, i);
      }
      function s3(t, i, s) {
        return t == null ? t : dc(t, i, hr(s));
      }
      function o3(t, i, s, l) {
        return l = typeof l == "function" ? l : a, t == null ? t : dc(t, i, hr(s), l);
      }
      function Xi(t) {
        return t == null ? [] : Wo(t, et(t));
      }
      function r3(t) {
        return t == null ? [] : Wo(t, vt(t));
      }
      function l3(t, i, s) {
        return s === a && (s = i, i = a), s !== a && (s = Jt(s), s = s === s ? s : 0), i !== a && (i = Jt(i), i = i === i ? i : 0), Ii(Jt(t), i, s);
      }
      function u3(t, i, s) {
        return i = kn(i), s === a ? (s = i, i = 0) : s = kn(s), t = Jt(t), hf(t, i, s);
      }
      function c3(t, i, s) {
        if (s && typeof s != "boolean" && dt(t, i, s) && (i = s = a), s === a && (typeof i == "boolean" ? (s = i, i = a) : typeof t == "boolean" && (s = t, t = a)), t === a && i === a ? (t = 0, i = 1) : (t = kn(t), i === a ? (i = t, t = 0) : i = kn(i)), t > i) {
          var l = t;
          t = i, i = l;
        }
        if (s || t % 1 || i % 1) {
          var c = qu();
          return ot(t + c * (i - t + qg("1e-" + ((c + "").length - 1))), i);
        }
        return ur(t, i);
      }
      var m3 = Wi(function(t, i, s) {
        return i = i.toLowerCase(), t + (s ? vm(i) : i);
      });
      function vm(t) {
        return Dr(_e(t).toLowerCase());
      }
      function ym(t) {
        return t = _e(t), t && t.replace(fg, th).replace(Mg, "");
      }
      function d3(t, i, s) {
        t = _e(t), i = Rt(i);
        var l = t.length;
        s = s === a ? l : Ii(le(s), 0, l);
        var c = s;
        return s -= i.length, s >= 0 && t.slice(s, c) == i;
      }
      function p3(t) {
        return t = _e(t), t && Xp.test(t) ? t.replace(Zl, nh) : t;
      }
      function g3(t) {
        return t = _e(t), t && ng.test(t) ? t.replace(No, "\\$&") : t;
      }
      var h3 = Wi(function(t, i, s) {
        return t + (s ? "-" : "") + i.toLowerCase();
      }), f3 = Wi(function(t, i, s) {
        return t + (s ? " " : "") + i.toLowerCase();
      }), I3 = wc("toLowerCase");
      function b3(t, i, s) {
        t = _e(t), i = le(i);
        var l = i ? Bi(t) : 0;
        if (!i || l >= i) return t;
        var c = (i - l) / 2;
        return Ns(bs(c), s) + t + Ns(Is(c), s);
      }
      function v3(t, i, s) {
        t = _e(t), i = le(i);
        var l = i ? Bi(t) : 0;
        return i && l < i ? t + Ns(i - l, s) : t;
      }
      function y3(t, i, s) {
        t = _e(t), i = le(i);
        var l = i ? Bi(t) : 0;
        return i && l < i ? Ns(i - l, s) + t : t;
      }
      function T3(t, i, s) {
        return s || i == null ? i = 0 : i && (i = +i), Sh(_e(t).replace(Mo, ""), i || 0);
      }
      function _3(t, i, s) {
        return (s ? dt(t, i, s) : i === a) ? i = 1 : i = le(i), cr(_e(t), i);
      }
      function w3() {
        var t = arguments, i = _e(t[0]);
        return t.length < 3 ? i : i.replace(t[1], t[2]);
      }
      var C3 = Wi(function(t, i, s) {
        return t + (s ? "_" : "") + i.toLowerCase();
      });
      function R3(t, i, s) {
        return s && typeof s != "number" && dt(t, i, s) && (i = s = a), s = s === a ? ut : s >>> 0, s ? (t = _e(t), t && (typeof i == "string" || i != null && !Or(i)) && (i = Rt(i), !i && ki(t)) ? oi(Xt(t), 0, s) : t.split(i, s)) : [];
      }
      var U3 = Wi(function(t, i, s) {
        return t + (s ? " " : "") + Dr(i);
      });
      function S3(t, i, s) {
        return t = _e(t), s = s == null ? 0 : Ii(le(s), 0, t.length), i = Rt(i), t.slice(s, s + i.length) == i;
      }
      function A3(t, i, s) {
        var l = d.templateSettings;
        s && dt(t, i, s) && (i = a), t = _e(t), i = Hs({}, i, l, Ec);
        var c = Hs({}, i.imports, l.imports, Ec), g = et(c), I = Wo(c, g), b, w, E = 0, A = i.interpolate || ns, D = "__p += '", H = $o((i.escape || ns).source + "|" + A.source + "|" + (A === Yl ? cg : ns).source + "|" + (i.evaluate || ns).source + "|$", "g"), G = "//# sourceURL=" + (Re.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++xg + "]") + `
`;
        t.replace(H, function(ee, Se, pe, pt, Tn, li) {
          return pe || (pe = pt), D += t.slice(E, li).replace(Ig, ih), Se && (b = !0, D += `' +
__e(` + Se + `) +
'`), Tn && (w = !0, D += `';
` + Tn + `;
__p += '`), pe && (D += `' +
((__t = (` + pe + `)) == null ? '' : __t) +
'`), E = li + ee.length, ee;
        }), D += `';
`;
        var Y = Re.call(i, "variable") && i.variable;
        if (!Y) D = `with (obj) {
` + D + `
}
`;
        else if (lg.test(Y)) throw new ie(p);
        D = (w ? D.replace(Dt, "") : D).replace(es, "$1").replace(ts, "$1;"), D = "function(" + (Y || "obj") + `) {
` + (Y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (b ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + D + `return __p
}`;
        var ae = _m(function() {
          return Te(g, G + "return " + D).apply(a, I);
        });
        if (ae.source = D, Mr(ae)) throw ae;
        return ae;
      }
      function V3(t) {
        return _e(t).toLowerCase();
      }
      function E3(t) {
        return _e(t).toUpperCase();
      }
      function N3(t, i, s) {
        if (t = _e(t), t && (s || i === a)) return Nu(t);
        if (!t || !(i = Rt(i))) return t;
        var l = Xt(t), c = Xt(i);
        return oi(l, Mu(l, c), Ou(l, c) + 1).join("");
      }
      function M3(t, i, s) {
        if (t = _e(t), t && (s || i === a)) return t.slice(0, Pu(t) + 1);
        if (!t || !(i = Rt(i))) return t;
        var l = Xt(t);
        return oi(l, 0, Ou(l, Xt(i)) + 1).join("");
      }
      function O3(t, i, s) {
        if (t = _e(t), t && (s || i === a)) return t.replace(Mo, "");
        if (!t || !(i = Rt(i))) return t;
        var l = Xt(t);
        return oi(l, Mu(l, Xt(i))).join("");
      }
      function z3(t, i) {
        var s = Kt, l = gn;
        if (De(i)) {
          var c = "separator" in i ? i.separator : c;
          s = "length" in i ? le(i.length) : s, l = "omission" in i ? Rt(i.omission) : l;
        }
        t = _e(t);
        var g = t.length;
        if (ki(t)) {
          var I = Xt(t);
          g = I.length;
        }
        if (s >= g) return t;
        var b = s - Bi(l);
        if (b < 1) return l;
        var w = I ? oi(I, 0, b).join("") : t.slice(0, b);
        if (c === a) return w + l;
        if (I && (b += w.length - b), Or(c)) {
          if (t.slice(b).search(c)) {
            var E, A = w;
            for (c.global || (c = $o(c.source, _e(Ql.exec(c)) + "g")), c.lastIndex = 0; E = c.exec(A); ) var D = E.index;
            w = w.slice(0, D === a ? b : D);
          }
        } else if (t.indexOf(Rt(c), b) != b) {
          var H = w.lastIndexOf(c);
          H > -1 && (w = w.slice(0, H));
        }
        return w + l;
      }
      function P3(t) {
        return t = _e(t), t && $p.test(t) ? t.replace(Xl, ch) : t;
      }
      var D3 = Wi(function(t, i, s) {
        return t + (s ? " " : "") + i.toUpperCase();
      }), Dr = wc("toUpperCase");
      function Tm(t, i, s) {
        return t = _e(t), i = s ? a : i, i === a ? sh(t) ? ph(t) : Xg(t) : t.match(i) || [];
      }
      var _m = me(function(t, i) {
        try {
          return wt(t, a, i);
        } catch (s) {
          return Mr(s) ? s : new ie(s);
        }
      }), x3 = xn(function(t, i) {
        return Lt(i, function(s) {
          s = yn(s), Pn(t, s, Er(t[s], t));
        }), t;
      });
      function L3(t) {
        var i = t == null ? 0 : t.length, s = Q();
        return t = i ? ze(t, function(l) {
          if (typeof l[1] != "function") throw new Ft(m);
          return [s(l[0]), l[1]];
        }) : [], me(function(l) {
          for (var c = -1; ++c < i; ) {
            var g = t[c];
            if (wt(g[0], this, l)) return wt(g[1], this, l);
          }
        });
      }
      function F3(t) {
        return cf(Bt(t, y));
      }
      function xr(t) {
        return function() {
          return t;
        };
      }
      function k3(t, i) {
        return t == null || t !== t ? i : t;
      }
      var B3 = Rc(), q3 = Rc(!0);
      function yt(t) {
        return t;
      }
      function Lr(t) {
        return tc(typeof t == "function" ? t : Bt(t, y));
      }
      function H3(t) {
        return ic(Bt(t, y));
      }
      function J3(t, i) {
        return ac(t, Bt(i, y));
      }
      var j3 = me(function(t, i) {
        return function(s) {
          return Ia(s, t, i);
        };
      }), G3 = me(function(t, i) {
        return function(s) {
          return Ia(t, s, i);
        };
      });
      function Fr(t, i, s) {
        var l = et(i), c = Cs(i, l);
        s == null && !(De(i) && (c.length || !l.length)) && (s = i, i = t, t = this, c = Cs(i, et(i)));
        var g = !(De(s) && "chain" in s) || !!s.chain, I = Fn(t);
        return Lt(c, function(b) {
          var w = i[b];
          t[b] = w, I && (t.prototype[b] = function() {
            var E = this.__chain__;
            if (g || E) {
              var A = t(this.__wrapped__);
              return (A.__actions__ = It(this.__actions__)).push({
                func: w,
                args: arguments,
                thisArg: t
              }), A.__chain__ = E, A;
            }
            return w.apply(t, Qn([this.value()], arguments));
          });
        }), t;
      }
      function W3() {
        return Qe._ === this && (Qe._ = bh), this;
      }
      function kr() {
      }
      function K3(t) {
        return t = le(t), me(function(i) {
          return sc(i, t);
        });
      }
      var $3 = Ir(ze), X3 = Ir(Uu), Z3 = Ir(qo);
      function wm(t) {
        return Cr(t) ? Ho(yn(t)) : Sf(t);
      }
      function Y3(t) {
        return function(i) {
          return t == null ? a : bi(t, i);
        };
      }
      var Q3 = Sc(), e2 = Sc(!0);
      function Br() {
        return [];
      }
      function qr() {
        return !1;
      }
      function t2() {
        return {};
      }
      function n2() {
        return "";
      }
      function i2() {
        return !0;
      }
      function a2(t, i) {
        if (t = le(t), t < 1 || t > ne) return [];
        var s = ut, l = ot(t, ut);
        i = Q(i), t -= ut;
        for (var c = Go(l, i); ++s < t; ) i(s);
        return c;
      }
      function s2(t) {
        return oe(t) ? ze(t, yn) : Ut(t) ? [t] : It(Hc(_e(t)));
      }
      function o2(t) {
        var i = ++fh;
        return _e(t) + i;
      }
      var r2 = Es(function(t, i) {
        return t + i;
      }, 0), l2 = br("ceil"), u2 = Es(function(t, i) {
        return t / i;
      }, 1), c2 = br("floor");
      function m2(t) {
        return t && t.length ? ws(t, yt, ir) : a;
      }
      function d2(t, i) {
        return t && t.length ? ws(t, Q(i, 2), ir) : a;
      }
      function p2(t) {
        return Vu(t, yt);
      }
      function g2(t, i) {
        return Vu(t, Q(i, 2));
      }
      function h2(t) {
        return t && t.length ? ws(t, yt, rr) : a;
      }
      function f2(t, i) {
        return t && t.length ? ws(t, Q(i, 2), rr) : a;
      }
      var I2 = Es(function(t, i) {
        return t * i;
      }, 1), b2 = br("round"), v2 = Es(function(t, i) {
        return t - i;
      }, 0);
      function y2(t) {
        return t && t.length ? jo(t, yt) : 0;
      }
      function T2(t, i) {
        return t && t.length ? jo(t, Q(i, 2)) : 0;
      }
      return d.after = H0, d.ary = em, d.assign = EI, d.assignIn = gm, d.assignInWith = Hs, d.assignWith = NI, d.at = MI, d.before = tm, d.bind = Er, d.bindAll = x3, d.bindKey = nm, d.castArray = tI, d.chain = Zc, d.chunk = c1, d.compact = m1, d.concat = d1, d.cond = L3, d.conforms = F3, d.constant = xr, d.countBy = y0, d.create = OI, d.curry = im, d.curryRight = am, d.debounce = sm, d.defaults = zI, d.defaultsDeep = PI, d.defer = J0, d.delay = j0, d.difference = p1, d.differenceBy = g1, d.differenceWith = h1, d.drop = f1, d.dropRight = I1, d.dropRightWhile = b1, d.dropWhile = v1, d.fill = y1, d.filter = _0, d.flatMap = R0, d.flatMapDeep = U0, d.flatMapDepth = S0, d.flatten = Wc, d.flattenDeep = T1, d.flattenDepth = _1, d.flip = G0, d.flow = B3, d.flowRight = q3, d.fromPairs = w1, d.functions = qI, d.functionsIn = HI, d.groupBy = A0, d.initial = R1, d.intersection = U1, d.intersectionBy = S1, d.intersectionWith = A1, d.invert = jI, d.invertBy = GI, d.invokeMap = E0, d.iteratee = Lr, d.keyBy = N0, d.keys = et, d.keysIn = vt, d.map = xs, d.mapKeys = KI, d.mapValues = $I, d.matches = H3, d.matchesProperty = J3, d.memoize = Fs, d.merge = XI, d.mergeWith = hm, d.method = j3, d.methodOf = G3, d.mixin = Fr, d.negate = ks, d.nthArg = K3, d.omit = ZI, d.omitBy = YI, d.once = W0, d.orderBy = M0, d.over = $3, d.overArgs = K0, d.overEvery = X3, d.overSome = Z3, d.partial = Nr, d.partialRight = om, d.partition = O0, d.pick = QI, d.pickBy = fm, d.property = wm, d.propertyOf = Y3, d.pull = M1, d.pullAll = $c, d.pullAllBy = O1, d.pullAllWith = z1, d.pullAt = P1, d.range = Q3, d.rangeRight = e2, d.rearg = $0, d.reject = D0, d.remove = D1, d.rest = X0, d.reverse = Ar, d.sampleSize = L0, d.set = t3, d.setWith = n3, d.shuffle = F0, d.slice = x1, d.sortBy = q0, d.sortedUniq = J1, d.sortedUniqBy = j1, d.split = R3, d.spread = Z0, d.tail = G1, d.take = W1, d.takeRight = K1, d.takeRightWhile = $1, d.takeWhile = X1, d.tap = m0, d.throttle = Y0, d.thru = Ds, d.toArray = mm, d.toPairs = Im, d.toPairsIn = bm, d.toPath = s2, d.toPlainObject = pm, d.transform = i3, d.unary = Q0, d.union = Z1, d.unionBy = Y1, d.unionWith = Q1, d.uniq = e0, d.uniqBy = t0, d.uniqWith = n0, d.unset = a3, d.unzip = Vr, d.unzipWith = Xc, d.update = s3, d.updateWith = o3, d.values = Xi, d.valuesIn = r3, d.without = i0, d.words = Tm, d.wrap = eI, d.xor = a0, d.xorBy = s0, d.xorWith = o0, d.zip = r0, d.zipObject = l0, d.zipObjectDeep = u0, d.zipWith = c0, d.entries = Im, d.entriesIn = bm, d.extend = gm, d.extendWith = Hs, Fr(d, d), d.add = r2, d.attempt = _m, d.camelCase = m3, d.capitalize = vm, d.ceil = l2, d.clamp = l3, d.clone = nI, d.cloneDeep = aI, d.cloneDeepWith = sI, d.cloneWith = iI, d.conformsTo = oI, d.deburr = ym, d.defaultTo = k3, d.divide = u2, d.endsWith = d3, d.eq = Yt, d.escape = p3, d.escapeRegExp = g3, d.every = T0, d.find = w0, d.findIndex = jc, d.findKey = DI, d.findLast = C0, d.findLastIndex = Gc, d.findLastKey = xI, d.floor = c2, d.forEach = Yc, d.forEachRight = Qc, d.forIn = LI, d.forInRight = FI, d.forOwn = kI, d.forOwnRight = BI, d.get = zr, d.gt = rI, d.gte = lI, d.has = JI, d.hasIn = Pr, d.head = Kc, d.identity = yt, d.includes = V0, d.indexOf = C1, d.inRange = u3, d.invoke = WI, d.isArguments = Ti, d.isArray = oe, d.isArrayBuffer = uI, d.isArrayLike = bt, d.isArrayLikeObject = Be, d.isBoolean = cI, d.isBuffer = ri, d.isDate = mI, d.isElement = dI, d.isEmpty = pI, d.isEqual = gI, d.isEqualWith = hI, d.isError = Mr, d.isFinite = fI, d.isFunction = Fn, d.isInteger = rm, d.isLength = Bs, d.isMap = lm, d.isMatch = II, d.isMatchWith = bI, d.isNaN = vI, d.isNative = yI, d.isNil = _I, d.isNull = TI, d.isNumber = um, d.isObject = De, d.isObjectLike = Fe, d.isPlainObject = wa, d.isRegExp = Or, d.isSafeInteger = wI, d.isSet = cm, d.isString = qs, d.isSymbol = Ut, d.isTypedArray = $i, d.isUndefined = CI, d.isWeakMap = RI, d.isWeakSet = UI, d.join = V1, d.kebabCase = h3, d.last = Ht, d.lastIndexOf = E1, d.lowerCase = f3, d.lowerFirst = I3, d.lt = SI, d.lte = AI, d.max = m2, d.maxBy = d2, d.mean = p2, d.meanBy = g2, d.min = h2, d.minBy = f2, d.stubArray = Br, d.stubFalse = qr, d.stubObject = t2, d.stubString = n2, d.stubTrue = i2, d.multiply = I2, d.nth = N1, d.noConflict = W3, d.noop = kr, d.now = Ls, d.pad = b3, d.padEnd = v3, d.padStart = y3, d.parseInt = T3, d.random = c3, d.reduce = z0, d.reduceRight = P0, d.repeat = _3, d.replace = w3, d.result = e3, d.round = b2, d.runInContext = _, d.sample = x0, d.size = k0, d.snakeCase = C3, d.some = B0, d.sortedIndex = L1, d.sortedIndexBy = F1, d.sortedIndexOf = k1, d.sortedLastIndex = B1, d.sortedLastIndexBy = q1, d.sortedLastIndexOf = H1, d.startCase = U3, d.startsWith = S3, d.subtract = v2, d.sum = y2, d.sumBy = T2, d.template = A3, d.times = a2, d.toFinite = kn, d.toInteger = le, d.toLength = dm, d.toLower = V3, d.toNumber = Jt, d.toSafeInteger = VI, d.toString = _e, d.toUpper = E3, d.trim = N3, d.trimEnd = M3, d.trimStart = O3, d.truncate = z3, d.unescape = P3, d.uniqueId = o2, d.upperCase = D3, d.upperFirst = Dr, d.each = Yc, d.eachRight = Qc, d.first = Kc, Fr(d, function() {
        var t = {};
        return bn(d, function(i, s) {
          Re.call(d.prototype, s) || (t[s] = i);
        }), t;
      }(), { chain: !1 }), d.VERSION = o, Lt([
        "bind",
        "bindKey",
        "curry",
        "curryRight",
        "partial",
        "partialRight"
      ], function(t) {
        d[t].placeholder = d;
      }), Lt(["drop", "take"], function(t, i) {
        de.prototype[t] = function(s) {
          s = s === a ? 1 : Ke(le(s), 0);
          var l = this.__filtered__ && !i ? new de(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = ot(s, l.__takeCount__) : l.__views__.push({
            size: ot(s, ut),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, de.prototype[t + "Right"] = function(s) {
          return this.reverse()[t](s).reverse();
        };
      }), Lt([
        "filter",
        "map",
        "takeWhile"
      ], function(t, i) {
        var s = i + 1, l = s == ra || s == st;
        de.prototype[t] = function(c) {
          var g = this.clone();
          return g.__iteratees__.push({
            iteratee: Q(c, 3),
            type: s
          }), g.__filtered__ = g.__filtered__ || l, g;
        };
      }), Lt(["head", "last"], function(t, i) {
        var s = "take" + (i ? "Right" : "");
        de.prototype[t] = function() {
          return this[s](1).value()[0];
        };
      }), Lt(["initial", "tail"], function(t, i) {
        var s = "drop" + (i ? "" : "Right");
        de.prototype[t] = function() {
          return this.__filtered__ ? new de(this) : this[s](1);
        };
      }), de.prototype.compact = function() {
        return this.filter(yt);
      }, de.prototype.find = function(t) {
        return this.filter(t).head();
      }, de.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, de.prototype.invokeMap = me(function(t, i) {
        return typeof t == "function" ? new de(this) : this.map(function(s) {
          return Ia(s, t, i);
        });
      }), de.prototype.reject = function(t) {
        return this.filter(ks(Q(t)));
      }, de.prototype.slice = function(t, i) {
        t = le(t);
        var s = this;
        return s.__filtered__ && (t > 0 || i < 0) ? new de(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), i !== a && (i = le(i), s = i < 0 ? s.dropRight(-i) : s.take(i - t)), s);
      }, de.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, de.prototype.toArray = function() {
        return this.take(ut);
      }, bn(de.prototype, function(t, i) {
        var s = /^(?:filter|find|map|reject)|While$/.test(i), l = /^(?:head|last)$/.test(i), c = d[l ? "take" + (i == "last" ? "Right" : "") : i], g = l || /^find/.test(i);
        c && (d.prototype[i] = function() {
          var I = this.__wrapped__, b = l ? [1] : arguments, w = I instanceof de, E = b[0], A = w || oe(I), D = function(Se) {
            var pe = c.apply(d, Qn([Se], b));
            return l && H ? pe[0] : pe;
          };
          A && s && typeof E == "function" && E.length != 1 && (w = A = !1);
          var H = this.__chain__, G = !!this.__actions__.length, Y = g && !H, ae = w && !G;
          if (!g && A) {
            I = ae ? I : new de(this);
            var ee = t.apply(I, b);
            return ee.__actions__.push({
              func: Ds,
              args: [D],
              thisArg: a
            }), new kt(ee, H);
          }
          return Y && ae ? t.apply(this, b) : (ee = this.thru(D), Y ? l ? ee.value()[0] : ee.value() : ee);
        });
      }), Lt([
        "pop",
        "push",
        "shift",
        "sort",
        "splice",
        "unshift"
      ], function(t) {
        var i = ls[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        d.prototype[t] = function() {
          var c = arguments;
          if (l && !this.__chain__) {
            var g = this.value();
            return i.apply(oe(g) ? g : [], c);
          }
          return this[s](function(I) {
            return i.apply(oe(I) ? I : [], c);
          });
        };
      }), bn(de.prototype, function(t, i) {
        var s = d[i];
        if (s) {
          var l = s.name + "";
          Re.call(Ji, l) || (Ji[l] = []), Ji[l].push({
            name: i,
            func: s
          });
        }
      }), Ji[Vs(a, ye).name] = [{
        name: "wrapper",
        func: a
      }], de.prototype.clone = zh, de.prototype.reverse = Ph, de.prototype.value = Dh, d.prototype.at = d0, d.prototype.chain = p0, d.prototype.commit = g0, d.prototype.next = h0, d.prototype.plant = I0, d.prototype.reverse = b0, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = v0, d.prototype.first = d.prototype.head, ca && (d.prototype[ca] = f0), d;
    }();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (Qe._ = ti, define(function() {
      return ti;
    })) : pi ? ((pi.exports = ti)._ = ti, Lo._ = ti) : Qe._ = ti;
  }).call(e);
}), bd = zy();
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ja(e);
}
function Py(e, n) {
  if (Ja(e) != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var o = a.call(e, n || "default");
    if (Ja(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Dy(e) {
  var n = Py(e, "string");
  return Ja(n) == "symbol" ? n : n + "";
}
function Ci(e, n, a) {
  return (n = Dy(n)) in e ? Object.defineProperty(e, n, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = a, e;
}
function xy() {
  const e = Gl().pluginRouter;
  if (!e) throw new Error("Plugin router bridge (pod-router) is unavailable on CiderApp.pluginRouter");
  return e;
}
function Gl() {
  return window.CiderApp;
}
function Ly() {
  return typeof window.__VUE_HMR_RUNTIME__ == "object";
}
function Fy(e) {
  const n = () => e;
  function a(m) {
    return `${n()?.ce_prefix ?? e.identifier}-${m}`;
  }
  function o(m) {
    const p = { ...m }, f = Gl().config.getRef(), { identifier: C } = n();
    f.plugins || (f.plugins = {}), f.plugins[C] || (f.plugins[C] = {});
    const T = f.plugins[C];
    f.plugins[C] = (0, bd.merge)(p, T);
    const y = /* @__PURE__ */ tn((0, bd.clone)(f.plugins[C]));
    return Oa(() => y, (V) => {
      f.plugins[C] = V;
    }, { deep: !0 }), y;
  }
  async function r(m) {
    const p = a(m.name);
    return await xy().push(`/ugc/plugins/ce/${p}`);
  }
  function u(m) {
    const p = m.replace(/^\//, "");
    return Ly() ? `http://localhost:3058/${p}` : `${window.location.origin}/plugins/${e.identifier}/${p}`;
  }
  return {
    customElementName: a,
    goToPage: r,
    useCPlugin: n,
    setupConfig: o,
    getBundledAssetURL: u,
    plugin: {
      ...e,
      pluginKitVersion: 4
    }
  };
}
function vd(e) {
  const n = __PLUGINSYS__.Components.MainMenu.addMenuItem(e);
  return () => {
    __PLUGINSYS__.Components.MainMenu.removeMenuItem(n);
  };
}
var u_ = __PLUGINSYS__.ExternalMessages;
function St() {
  const e = globalThis?.__PLUGINSYS__?.Stores?.appleMusicStore;
  if (!e) throw new Error("Plugin AppleMusic is unavailable: __PLUGINSYS__.Stores.appleMusicStore was not initialized by Cider host.");
  return e;
}
function ky(e) {
  return e === "none" || e === "one" || e === "all" ? e : e === 1 ? "one" : e === 2 ? "all" : "none";
}
function By(e) {
  return e === "one" ? 1 : e === "all" ? 2 : 0;
}
function qy(e, n) {
  const a = `${e}`.trim().toLowerCase();
  return `https://music.apple.com/us/${a.endsWith("s") ? a : `${a}s`}/_/` + encodeURIComponent(n);
}
var Fp = class {
  static get shuffleMode() {
    return St().shuffleMode;
  }
  static get repeatMode() {
    return By(St().repeatMode);
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
  static setShuffleState(e) {
    const n = St(), a = typeof e == "boolean" ? e : typeof e == "number" ? e > 0 : n.shuffleMode === 0;
    return n.setShuffleMode(a);
  }
  static setRepeatState(e) {
    const n = St(), a = e === void 0 ? n.repeatMode === "none" ? "one" : n.repeatMode === "one" ? "all" : "none" : ky(e);
    return n.setRepeatMode(a);
  }
  static async playItemById(e) {
    const n = St();
    await n.ensurePlayer();
    const a = qy(e.type, e.id);
    return n.playItemByHref(a);
  }
  static playItemByHref(e) {
    return St().playItemByHref(e.href);
  }
}, c_ = window.__PLUGINSYS__.Dialog, m_ = window.__PLUGINSYS__.ContextMenu, d_ = window.__PLUGINSYS__.Composables.useContextMenu, Hy = {
  ce_prefix: "cider-radio",
  identifier: "local.cider.radio",
  name: "Radio",
  description: "Play the Free Radio library, singing and instrumental, and search TuneIn, Radio Browser, SomaFM, Icecast and iptv-org.",
  version: "0.3.2",
  author: "ouijabored66",
  repo: "https://github.com/ouijabored66/Cider-4-Radio-Plugin",
  pluginKitVersion: "4",
  entry: { "plugin.js": { type: "main" } }
}, Jy = [
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
  },
  {
    id: "venice-classic-radio",
    name: "Venice Classic Radio",
    source: "Venice Classic Radio"
  },
  {
    id: "somafm-vocal",
    name: "SomaFM Vocal",
    source: "SomaFM"
  },
  {
    id: "radio-browser-vocal",
    name: "Radio Browser Vocal",
    source: "Radio Browser"
  },
  {
    id: "icecast-vocal",
    name: "Icecast Vocal",
    source: "Icecast"
  },
  {
    id: "adult-hits",
    name: "Adult Hits · Vocal",
    source: "TuneIn"
  },
  {
    id: "blues",
    name: "Blues · Vocal",
    source: "TuneIn"
  },
  {
    id: "boss-radio",
    name: "Boss Radio · Vocal",
    source: "TuneIn"
  },
  {
    id: "children-s-music",
    name: "Children's Music · Vocal",
    source: "TuneIn"
  },
  {
    id: "classic-hits",
    name: "Classic Hits · Vocal",
    source: "TuneIn"
  },
  {
    id: "classical-music",
    name: "Classical Music · Vocal",
    source: "TuneIn"
  },
  {
    id: "college-radio",
    name: "College Radio · Vocal",
    source: "TuneIn"
  },
  {
    id: "country",
    name: "Country · Vocal",
    source: "TuneIn"
  },
  {
    id: "dance-electronic",
    name: "Dance & Electronic · Vocal",
    source: "TuneIn"
  },
  {
    id: "decades-music",
    name: "Decades Music · Vocal",
    source: "TuneIn"
  },
  {
    id: "easy-listening",
    name: "Easy Listening · Vocal",
    source: "TuneIn"
  },
  {
    id: "folk",
    name: "Folk · Vocal",
    source: "TuneIn"
  },
  {
    id: "hip-hop",
    name: "Hip Hop · Vocal",
    source: "TuneIn"
  },
  {
    id: "holiday-music",
    name: "Holiday Music · Vocal",
    source: "TuneIn"
  },
  {
    id: "indie-music",
    name: "Indie Music · Vocal",
    source: "TuneIn"
  },
  {
    id: "jazz",
    name: "Jazz · Vocal",
    source: "TuneIn"
  },
  {
    id: "powerhitz",
    name: "Powerhitz · Vocal",
    source: "TuneIn"
  },
  {
    id: "reggae-dancehall",
    name: "Reggae & Dancehall · Vocal",
    source: "TuneIn"
  },
  {
    id: "religious-music",
    name: "Religious Music · Vocal",
    source: "TuneIn"
  },
  {
    id: "rock-music",
    name: "Rock Music · Vocal",
    source: "TuneIn"
  },
  {
    id: "soul-r-b",
    name: "Soul & R&B · Vocal",
    source: "TuneIn"
  },
  {
    id: "top-40-pop-music",
    name: "Top 40 & Pop Music · Vocal",
    source: "TuneIn"
  },
  {
    id: "variety",
    name: "Variety · Vocal",
    source: "TuneIn"
  },
  {
    id: "world-music",
    name: "World Music · Vocal",
    source: "TuneIn"
  },
  {
    id: "dr",
    name: "DR",
    source: "TuneIn"
  }
], jy = [
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
    tags: "SomaFM, electronic, Instrumental",
    homepage: "https://somafm.com/beatblender/",
    style: "instrumental"
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
    tags: "SomaFM, chill, live, Instrumental",
    homepage: "https://somafm.com/chillits/",
    style: "instrumental"
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
    tags: "SomaFM, holiday, Instrumental",
    homepage: "https://somafm.com/christmas/",
    style: "instrumental"
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
    tags: "SomaFM, electronic, Instrumental",
    homepage: "https://somafm.com/cliqhop/",
    style: "instrumental"
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
    tags: "SomaFM, ambient, Instrumental",
    homepage: "https://somafm.com/deepspaceone/",
    style: "instrumental"
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
    tags: "SomaFM, electronic, specials, Instrumental",
    homepage: "https://somafm.com/defcon/",
    style: "instrumental"
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
    tags: "SomaFM, holiday, Instrumental",
    homepage: "https://somafm.com/deptstore/",
    style: "instrumental"
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
    tags: "SomaFM, electronic, alternative, Instrumental",
    homepage: "https://somafm.com/digitalis/",
    style: "instrumental"
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
    tags: "SomaFM, ambient, industrial, Instrumental",
    homepage: "https://somafm.com/doomed/",
    style: "instrumental"
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
    tags: "SomaFM, ambient, Instrumental",
    homepage: "https://somafm.com/dronezone/",
    style: "instrumental"
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
    tags: "SomaFM, ambient, Instrumental",
    homepage: "https://somafm.com/dz2/",
    style: "instrumental"
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
    tags: "SomaFM, electronic, Instrumental",
    homepage: "https://somafm.com/dubstep/",
    style: "instrumental"
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
    tags: "SomaFM, electronic, hiphop, Instrumental",
    homepage: "https://somafm.com/fluid/",
    style: "instrumental"
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
    tags: "SomaFM, ambient, electronic, Instrumental",
    homepage: "https://somafm.com/groovesalad/",
    style: "instrumental"
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
    tags: "SomaFM, ambient, electronic, Instrumental",
    homepage: "https://somafm.com/groovesalad2/",
    style: "instrumental"
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
    tags: "SomaFM, ambient, electronic, Instrumental",
    homepage: "https://somafm.com/gsclassic/",
    style: "instrumental"
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
    tags: "SomaFM, lounge, Instrumental",
    homepage: "https://somafm.com/illstreet/",
    style: "instrumental"
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
    tags: "SomaFM, ambient, electronic, Instrumental",
    homepage: "https://somafm.com/missioncontrol/",
    style: "instrumental"
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
    tags: "SomaFM, specials, Instrumental",
    homepage: "https://somafm.com/n5md/",
    style: "instrumental"
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
    tags: "SomaFM, lounge, Instrumental",
    homepage: "https://somafm.com/secretagent/",
    style: "instrumental"
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
    tags: "SomaFM, jazz, Instrumental",
    homepage: "https://somafm.com/sonicuniverse/",
    style: "instrumental"
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
    tags: "SomaFM, electronic, Instrumental",
    homepage: "https://somafm.com/spacestation/",
    style: "instrumental"
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
    tags: "SomaFM, ambient, electronic, Instrumental",
    homepage: "https://somafm.com/synphaera/",
    style: "instrumental"
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
    tags: "SomaFM, ambient, Instrumental",
    homepage: "https://somafm.com/darkzone/",
    style: "instrumental"
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
    tags: "SomaFM, electronic, Instrumental",
    homepage: "https://somafm.com/thetrip/",
    style: "instrumental"
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
    tags: "SomaFM, tiki, world, Instrumental",
    homepage: "https://somafm.com/tikitime/",
    style: "instrumental"
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
    tags: "SomaFM, electronic, Instrumental",
    homepage: "https://somafm.com/vaporwaves/",
    style: "instrumental"
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
    tags: "Radio Browser, ambient, chillout, easy listening, electro, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, chillout, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, downtempo, psychedelic chillout grooves, slow trance, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, movie soundtracks, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, baroque, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, chillout, waynesboro, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical guitar, guitar, waynesboro, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, ambient, chill, chillout, lounge, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, ambient, chillout, non-commercial, relaxation music, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, ambient, meditation, sleep, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, bach, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, baroque, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, strauss, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, mozart, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, easy listening, piano, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, baroque, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, vivaldi, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, chill, chillhop, chillout, lo-fi, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, baroque, classical, early music, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, chillout, lounge, relaxing, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, ambient, chillout, lullaby, relaxing, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, ambient, atmospheric, chillout, easy listening, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, ambient, ambient and relaxation music, chill, chillout, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, celtic, classical, hits, music, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classic, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, big band, easy listening, instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, ambient, ambient and relaxation music, nature, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, ambient, ambient and relaxation music, nature, rainorshine, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, chillout, lounge, smooth jazz, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, 2 stations, 24/7, chill, chillout, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, instrumental, piano, relax",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, #chillout, chillout, electronic, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, ambient, instrumental, soft music",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, piano, sleep, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, ambient, instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, movie, richmond, soundtrack, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, baroque, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Radio Browser, classical, relax, Instrumental",
    homepage: "https://www.radio-browser.info/",
    style: "instrumental"
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
    tags: "Icecast, Instrumental",
    homepage: "https://dir.xiph.org/",
    style: "instrumental"
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
    tags: "TuneIn, TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s34682/",
    style: "instrumental"
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
    tags: "TuneIn, TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s8880/",
    style: "instrumental"
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
    tags: "TuneIn, TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s105932/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s306577/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s220755/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s203450/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s361882/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s321104/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s158097/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s310835/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s190314/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s321102/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s321103/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s361887/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s343295/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s221540/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s142801/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s302881/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s321184/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s282997/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s321179/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s240424/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s335562/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s172068/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s320480/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s17364/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s305553/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s321180/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s336624/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s132271/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s359751/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s275739/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s260893/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s257734/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s321178/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s132812/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s228215/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s237131/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s213374/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s206475/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s51002/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s355583/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s238256/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s205347/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s184695/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s321182/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s215840/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s302899/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s232518/",
    style: "instrumental"
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
    tags: "TuneIn, Celtic Instrumental",
    homepage: "https://tunein.com/radio/s142246/",
    style: "instrumental"
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
    tags: "TuneIn, Celtic Instrumental",
    homepage: "https://tunein.com/radio/s321064/",
    style: "instrumental"
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
    tags: "TuneIn, Celtic Instrumental",
    homepage: "https://tunein.com/radio/s321083/",
    style: "instrumental"
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
    tags: "TuneIn, Celtic Instrumental",
    homepage: "https://tunein.com/radio/s290623/",
    style: "instrumental"
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
    tags: "TuneIn, Celtic Instrumental",
    homepage: "https://tunein.com/radio/s133513/",
    style: "instrumental"
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
    tags: "TuneIn, Celtic Instrumental",
    homepage: "https://tunein.com/radio/s247260/",
    style: "instrumental"
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
    tags: "TuneIn, Christmas Instrumental",
    homepage: "https://tunein.com/radio/s89783/",
    style: "instrumental"
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
    tags: "TuneIn, Christmas Instrumental",
    homepage: "https://tunein.com/radio/s89792/",
    style: "instrumental"
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
    tags: "TuneIn, Christmas Instrumental",
    homepage: "https://tunein.com/radio/s142273/",
    style: "instrumental"
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
    tags: "TuneIn, Christmas Instrumental",
    homepage: "https://tunein.com/radio/s277998/",
    style: "instrumental"
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
    tags: "TuneIn, Christmas Instrumental",
    homepage: "https://tunein.com/radio/s290439/",
    style: "instrumental"
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
    tags: "TuneIn, Christmas Instrumental",
    homepage: "https://tunein.com/radio/s282482/",
    style: "instrumental"
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
    tags: "TuneIn, Christmas Instrumental",
    homepage: "https://tunein.com/radio/s257653/",
    style: "instrumental"
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
    tags: "TuneIn, Christmas Instrumental",
    homepage: "https://tunein.com/radio/s290440/",
    style: "instrumental"
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
    tags: "TuneIn, Christmas Instrumental",
    homepage: "https://tunein.com/radio/s257672/",
    style: "instrumental"
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
    tags: "TuneIn, Christmas Instrumental",
    homepage: "https://tunein.com/radio/s279400/",
    style: "instrumental"
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
    tags: "TuneIn, Christmas Instrumental",
    homepage: "https://tunein.com/radio/s360929/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s309932/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s309935/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s309936/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s309933/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s309934/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s345086/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s289739/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s268386/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s231720/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s260558/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s284213/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s319565/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s35951/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s358609/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s279629/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s362694/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s6372/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s306553/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s55415/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s343696/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s320276/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s244379/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s302790/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s148324/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s87673/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s362192/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s362100/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s231527/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s97464/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s314621/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s311379/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s101578/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s305749/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s347523/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s349223/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s357045/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s109548/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s10869/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s1749/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s238408/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s364653/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s321084/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s234173/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s311640/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s360606/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s362123/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s362559/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s67246/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s28152/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s301787/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s27729/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s99874/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s224735/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s156850/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s142210/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s129352/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s311427/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s321091/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s311450/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s346896/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s185738/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s363027/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s332172/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s351919/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s351304/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s361012/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s295253/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s355815/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s258107/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s219265/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s133393/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s300606/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s47723/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s297919/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s255925/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s136618/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s213714/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s262659/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s240423/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s354929/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s138091/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s189571/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s270007/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s184641/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s351822/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s351825/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s352041/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s351837/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s355568/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s231747/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s272723/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s283322/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s270143/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s287521/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s222839/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s221708/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s68932/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s329191/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s143693/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s358820/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s307977/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s111775/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s76627/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s336526/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s311041/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s166521/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s274842/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s21866/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s354569/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s297918/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s262989/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s254882/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s206902/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s221605/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s302893/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s321564/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s244748/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s285775/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s352184/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s267208/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s364338/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s16735/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s106565/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s325768/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s256110/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s356315/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s240562/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s119960/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s141862/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s289039/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s22718/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s309759/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s214678/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s322842/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s315868/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s268754/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s355443/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s355015/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s362304/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s321680/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s306649/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s361228/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s350566/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s310777/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s303481/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s341191/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s352571/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s352697/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s362242/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s353423/",
    style: "instrumental"
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
    tags: "TuneIn, Lo-Fi, Instrumental",
    homepage: "https://tunein.com/radio/s352443/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s126408/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s356804/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321150/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321148/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321144/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s355191/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321190/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321080/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321082/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s358061/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321087/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321066/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s310375/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s310368/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321118/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s349575/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s309595/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s361275/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321130/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s99666/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s49689/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s99668/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s320485/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s250283/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s320500/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321135/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s329186/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s318851/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s361884/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s322961/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321065/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s353413/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s361945/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s359620/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s307976/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321117/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s352102/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s325134/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s247230/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s247229/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s281875/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s238367/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s364350/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s364367/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s364078/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321067/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321131/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s142243/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321209/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321161/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321134/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321213/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s321211/",
    style: "instrumental"
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
    tags: "TuneIn, New Age, Instrumental",
    homepage: "https://tunein.com/radio/s280928/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s309764/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s48961/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s48965/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s250911/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s90495/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s95096/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s361820/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s361885/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321232/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s31824/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s295679/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s21414/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321168/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s182573/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310038/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s191786/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310030/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310036/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s142213/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s103212/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s142716/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s142214/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s280686/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s262360/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s132813/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s351824/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s351832/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s351833/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320512/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320517/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320521/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320520/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320509/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320526/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320514/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320507/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320527/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320519/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320522/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320516/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320528/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320529/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320525/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320524/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320513/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320531/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320515/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320511/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320508/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320510/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320530/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320523/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320518/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310369/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s309940/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310029/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310031/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321208/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321086/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321689/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321218/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s338979/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s133516/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s235835/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s250282/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320484/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s308918/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s342459/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s282479/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321099/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321174/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310033/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s88374/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310035/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s22654/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s342655/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321173/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321172/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321166/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321170/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s309263/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310028/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310899/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321222/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s249710/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s221684/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s247239/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s154174/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s187590/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s320293/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310037/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s177672/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s142209/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s132816/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s132811/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s310034/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s280576/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s35299/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s321167/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s325770/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s238788/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s28807/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s51195/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s128726/",
    style: "instrumental"
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
    tags: "TuneIn, Piano, Instrumental",
    homepage: "https://tunein.com/radio/s22608/",
    style: "instrumental"
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
    tags: "TuneIn, Soundtracks, Instrumental",
    homepage: "https://tunein.com/radio/s233145/",
    style: "instrumental"
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
    tags: "TuneIn, Soundtracks, Instrumental",
    homepage: "https://tunein.com/radio/s164357/",
    style: "instrumental"
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
    tags: "TuneIn, Soundtracks, Instrumental",
    homepage: "https://tunein.com/radio/s335109/",
    style: "instrumental"
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
    tags: "TuneIn, Soundtracks, Instrumental",
    homepage: "https://tunein.com/radio/s309689/",
    style: "instrumental"
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
    tags: "TuneIn, Soundtracks, Instrumental",
    homepage: "https://tunein.com/radio/s97088/",
    style: "instrumental"
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
    tags: "TuneIn, Soundtracks, Instrumental",
    homepage: "https://tunein.com/radio/s357497/",
    style: "instrumental"
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
    tags: "TuneIn, Soundtracks, Instrumental",
    homepage: "https://tunein.com/radio/s320482/",
    style: "instrumental"
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
    tags: "TuneIn, Soundtracks, Instrumental",
    homepage: "https://tunein.com/radio/s321077/",
    style: "instrumental"
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
    tags: "TuneIn, Soundtracks, Instrumental",
    homepage: "https://tunein.com/radio/s343790/",
    style: "instrumental"
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
    tags: "TuneIn, Soundtracks, Instrumental",
    homepage: "https://tunein.com/radio/s314386/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s266086/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s322147/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s310376/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s336421/",
    style: "instrumental"
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
    tags: "TuneIn, Ambient, Instrumental",
    homepage: "https://tunein.com/radio/s321187/",
    style: "instrumental"
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
    tags: "TuneIn, Celtic Instrumental",
    homepage: "https://tunein.com/radio/s187592/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s318238/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s191785/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s179297/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s266704/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s309474/",
    style: "instrumental"
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
    tags: "TuneIn, Classical, Instrumental",
    homepage: "https://tunein.com/radio/s7332/",
    style: "instrumental"
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
    tags: "TuneIn, Guitar Instrumental",
    homepage: "https://tunein.com/radio/s361706/",
    style: "instrumental"
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
    tags: "TuneIn, Guitar Instrumental",
    homepage: "https://tunein.com/radio/s268677/",
    style: "instrumental"
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
    tags: "TuneIn, Guitar Instrumental",
    homepage: "https://tunein.com/radio/s233642/",
    style: "instrumental"
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
    tags: "TuneIn, Guitar Instrumental",
    homepage: "https://tunein.com/radio/s192669/",
    style: "instrumental"
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
    tags: "TuneIn, Guitar Instrumental",
    homepage: "https://tunein.com/radio/s250092/",
    style: "instrumental"
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
    tags: "TuneIn, Guitar Instrumental",
    homepage: "https://tunein.com/radio/s321100/",
    style: "instrumental"
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
    tags: "TuneIn, Guitar Instrumental",
    homepage: "https://tunein.com/radio/s247240/",
    style: "instrumental"
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
    tags: "TuneIn, Guitar Instrumental",
    homepage: "https://tunein.com/radio/s321169/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s321097/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s142242/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s299278/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s361881/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s142247/",
    style: "instrumental"
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
    tags: "TuneIn, Instrumental",
    homepage: "https://tunein.com/radio/s187593/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s279962/",
    style: "instrumental"
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
    tags: "TuneIn, Jazz Instrumental",
    homepage: "https://tunein.com/radio/s255585/",
    style: "instrumental"
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
    tags: "TuneIn, Lounge, Instrumental",
    homepage: "https://tunein.com/radio/s358923/",
    style: "instrumental"
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
    tags: "TuneIn, Lounge, Instrumental",
    homepage: "https://tunein.com/radio/s308844/",
    style: "instrumental"
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
    tags: "TuneIn, Lounge, Instrumental",
    homepage: "https://tunein.com/radio/s355357/",
    style: "instrumental"
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
    tags: "TuneIn, Soundtracks, Instrumental",
    homepage: "https://tunein.com/radio/s143560/",
    style: "instrumental"
  },
  {
    id: "sm-brfm",
    name: "Black Rock FM",
    source: "SomaFM",
    detail: "Vocal · From the Black Rock Desert playa to the world, year round!",
    image: "https://api.somafm.com/logos/512/brfm512.jpg?v=1342301053",
    streamUrl: "https://ice6.somafm.com/brfm-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/brfm/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-bootliquor",
    name: "Boot Liquor",
    source: "SomaFM",
    detail: "Vocal · Americana Roots music for Cowhands, Cowpokes and Cowtippers",
    image: "https://api.somafm.com/logos/512/bootliquor512.png?v=1299122797",
    streamUrl: "https://ice6.somafm.com/bootliquor-320-mp3",
    codec: "mp3",
    bitrate: 320,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/bootliquor/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-bossa",
    name: "Bossa Beyond",
    source: "SomaFM",
    detail: "Vocal · Silky-smooth, laid-back Brazilian-style rhythms of Bossa Nova, Samba and beyond",
    image: "https://api.somafm.com/logos/512/bossa-512.jpg?v=1695354225",
    streamUrl: "https://ice6.somafm.com/bossa-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/bossa/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-xmasrocks",
    name: "Christmas Rocks!",
    source: "SomaFM",
    detail: "Vocal · Have your self an indie/alternative holiday season!",
    image: "https://api.somafm.com/logos/512/xmasrocks512.png?v=1351794645",
    streamUrl: "https://ice6.somafm.com/xmasrocks-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/xmasrocks/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-covers",
    name: "Covers",
    source: "SomaFM",
    detail: "Vocal · Just covers. Songs you know by artists you don't. We've got you covered.",
    image: "https://api.somafm.com/logos/512/covers512.png?v=1299185740",
    streamUrl: "https://ice6.somafm.com/covers-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/covers/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-folkfwd",
    name: "Folk Forward",
    source: "SomaFM",
    detail: "Vocal · Indie Folk, Alt-folk and the occasional folk classics.",
    image: "https://api.somafm.com/logos/512/folkfwd512.png?v=1359700713",
    streamUrl: "https://ice2.somafm.com/folkfwd-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/folkfwd/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-reggae",
    name: "Heavyweight Reggae",
    source: "SomaFM",
    detail: "Vocal · Reggae, Ska, Rocksteady classic and deep tracks.",
    image: "https://api.somafm.com/logos/512/reggae512.png?v=1579290024",
    streamUrl: "https://ice2.somafm.com/reggae-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/reggae/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-insound",
    name: "The In-Sound",
    source: "SomaFM",
    detail: "Vocal · 60s/70s Hipster Euro Pop where psychedelic melodies meets groovy vibes.",
    image: "https://api.somafm.com/logos/512/insound-512.jpg?v=1695848542",
    streamUrl: "https://ice2.somafm.com/insound-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/insound/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-indiepop",
    name: "Indie Pop Rocks!",
    source: "SomaFM",
    detail: "Vocal · New and classic favorite indie pop tracks.",
    image: "https://api.somafm.com/logos/512/indiepop512.png?v=1299187943",
    streamUrl: "https://ice2.somafm.com/indiepop-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/indiepop/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-jollysoul",
    name: "Jolly Ol' Soul",
    source: "SomaFM",
    detail: "Vocal · Where we cut right to the soul of the season.",
    image: "https://api.somafm.com/logos/512/jollysoul512.png?v=1417386861",
    streamUrl: "https://ice2.somafm.com/jollysoul-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/jollysoul/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-seventies",
    name: "Left Coast 70s",
    source: "SomaFM",
    detail: "Vocal · Mellow album rock from the Seventies. Yacht not required.",
    image: "https://api.somafm.com/logos/512/seventies512.jpg?v=1435992015",
    streamUrl: "https://ice2.somafm.com/seventies-320-mp3",
    codec: "mp3",
    bitrate: 320,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/seventies/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-lush",
    name: "Lush",
    source: "SomaFM",
    detail: "Vocal · Sensuous and mellow female vocals, many with an electronic influence.",
    image: "https://api.somafm.com/logos/512/lush512.png?v=1317866644",
    streamUrl: "https://ice2.somafm.com/lush-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/lush/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-metal",
    name: "Metal Detector",
    source: "SomaFM",
    detail: "Vocal · From black to doom, prog to sludge, thrash to post, stoner to crossover, punk to industrial.",
    image: "https://api.somafm.com/logos/512/metal512.png?v=1438371170",
    streamUrl: "https://ice2.somafm.com/metal-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/metal/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-poptron",
    name: "PopTron",
    source: "SomaFM",
    detail: "Vocal · Electropop and indie dance rock with sparkle and pop.",
    image: "https://api.somafm.com/logos/512/poptron512.png?v=1299124019",
    streamUrl: "https://ice2.somafm.com/poptron-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/poptron/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-7soul",
    name: "Seven Inch Soul",
    source: "SomaFM",
    detail: "Vocal · Vintage soul tracks from the original 45 RPM vinyl.",
    image: "https://api.somafm.com/logos/512/7soul512.png?v=1396144489",
    streamUrl: "https://ice2.somafm.com/7soul-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/7soul/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-live",
    name: "SomaFM Live",
    source: "SomaFM",
    detail: "Vocal · Special Live Events and rebroadcasts of past live events",
    image: "https://api.somafm.com/logos/512/live512.png?v=1782343536",
    streamUrl: "https://ice2.somafm.com/live-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/live/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-specials",
    name: "SomaFM Specials",
    source: "SomaFM",
    detail: "Vocal · Now featuring Afternoon Jazz, Wavepool, DubX, The Surf Report & More!",
    image: "https://api.somafm.com/logos/512/specials512.png?v=1674947103",
    streamUrl: "https://ice2.somafm.com/specials-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/specials/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-suburbsofgoa",
    name: "Suburbs of Goa",
    source: "SomaFM",
    detail: "Vocal · Desi-influenced Asian world beats and beyond.",
    image: "https://api.somafm.com/logos/512/suburbsofgoa512.png?v=1299205961",
    streamUrl: "https://ice2.somafm.com/suburbsofgoa-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/suburbsofgoa/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-thistle",
    name: "ThistleRadio",
    source: "SomaFM",
    detail: "Vocal · Exploring music from Celtic roots and branches",
    image: "https://api.somafm.com/logos/512/thistle512.jpg?v=1433008752",
    streamUrl: "https://ice2.somafm.com/thistle-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/thistle/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-u80s",
    name: "Underground 80s",
    source: "SomaFM",
    detail: "Vocal · Early 80s UK Synthpop and a bit of New Wave.",
    image: "https://api.somafm.com/logos/512/u80s512.png?v=1418528343",
    streamUrl: "https://ice2.somafm.com/u80s-256-mp3",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/u80s/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "sm-xmasinfrisko",
    name: "Xmas in Frisko",
    source: "SomaFM",
    detail: "Vocal · SomaFM's wacky and eclectic holiday mix. Not for the easily offended.",
    image: "https://api.somafm.com/logos/512/xmasinfrisko512.jpg?v=1444422061",
    streamUrl: "https://ice2.somafm.com/xmasinfrisko-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, SomaFM, SomaFM",
    homepage: "https://somafm.com/xmasinfrisko/",
    style: "vocal",
    group: "somafm-vocal"
  },
  {
    id: "rb-78012206-1aa1",
    name: "MANGORADIO",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "https://mangoradio.stream.laut.fm/mangoradio",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://laut.fm/mangoradio",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-962cc6df-0601",
    name: "Dance Wave! | MP3",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "https://dancewave.online/dance.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://dancewave.online/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-9617a958-0601",
    name: "Radio Paradise Main Mix (EU) 320k AAC",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "http://stream-uk1.radioparadise.com/aac-320",
    codec: "aac",
    bitrate: 320,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://radioparadise.com/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-d1a54d2e-623e",
    name: "Classic Vinyl HD",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "https://icecast.walmradio.com:8443/classic",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://walmradio.com/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-d28420a4-eccf",
    name: "101 SMOOTH JAZZ",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "http://jking.cdnstream1.com/b22139_128mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://www.101smoothjazz.com/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-961d9b63-0601",
    name: ".977 Country",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "http://24293.live.streamtheworld.com:3690/977_COUNTRY_SC",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://www.977music.com/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-961b7325-0601",
    name: ".977 80s",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "http://26433.live.streamtheworld.com/977_80_SC",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://www.977music.com/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-961d5c4e-0601",
    name: ".977 Hitz",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "http://15313.live.streamtheworld.com/977_HITS_SC",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://www.977music.com/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-964be8b7-0601",
    name: "Dance Wave Retro! | MP3",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "https://dancewave.online/retrodance.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://dancewave.online/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-961787d1-0601",
    name: "Frisky",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "http://stream2.friskyradio.com/frisky_mp3_hi",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://www.friskyradio.com/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-af6f51b1-0ca9",
    name: "Intense Radio - We love Dance 256K",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "https://secure.live-streams.nl/main",
    codec: "mp3",
    bitrate: 256,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://www.intense-radio.com/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-9606ceae-0601",
    name: "Radio Caroline",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "http://78.129.202.200:8040/;",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://www.radiocaroline.co.uk/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-bd9c1301-562d",
    name: "Kiss FM 106.5",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "http://online.kissfm.ua/KissFM",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://www.kissfm.ua/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "rb-961dbb40-0601",
    name: ".977 The Mix",
    source: "Radio Browser",
    detail: "Vocal",
    image: null,
    streamUrl: "http://15113.live.streamtheworld.com:3690/977_MIX_SC",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Radio Browser, Radio Browser",
    homepage: "https://www.977music.com/",
    style: "vocal",
    group: "radio-browser-vocal"
  },
  {
    id: "ic-aix-radio",
    name: "AiX Radio",
    source: "Icecast",
    detail: "Vocal",
    image: null,
    streamUrl: "http://cast4.my-control-panel.com:8093/autodj",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Icecast, Icecast",
    homepage: "https://dir.xiph.org/",
    style: "vocal",
    group: "icecast-vocal"
  },
  {
    id: "ic-azur-eclectic",
    name: "Azur Eclectic",
    source: "Icecast",
    detail: "Vocal",
    image: null,
    streamUrl: "http://ecmanager2.pro-fhi.net:3130/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Icecast, Icecast",
    homepage: "https://dir.xiph.org/",
    style: "vocal",
    group: "icecast-vocal"
  },
  {
    id: "ic-radio-mansfield-australi",
    name: "Radio Mansfield - Australia",
    source: "Icecast",
    detail: "Vocal",
    image: null,
    streamUrl: "http://c7.radioboss.fm:8291/live",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Icecast, Icecast",
    homepage: "https://dir.xiph.org/",
    style: "vocal",
    group: "icecast-vocal"
  },
  {
    id: "ic-mmg-radio-gospel",
    name: "MMG Radio Gospel",
    source: "Icecast",
    detail: "Vocal",
    image: null,
    streamUrl: "http://everest.servercast.com.br:1330/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Icecast, Icecast",
    homepage: "https://dir.xiph.org/",
    style: "vocal",
    group: "icecast-vocal"
  },
  {
    id: "ic-christian-hits-radio",
    name: "Christian Hits Radio",
    source: "Icecast",
    detail: "Vocal",
    image: null,
    streamUrl: "http://phoebe.streamerr.co:2800/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Icecast, Icecast",
    homepage: "https://dir.xiph.org/",
    style: "vocal",
    group: "icecast-vocal"
  },
  {
    id: "ic-lounge-music",
    name: "Lounge Music",
    source: "Icecast",
    detail: "Vocal",
    image: null,
    streamUrl: "http://radio.amgroupmkt.com:1630/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Icecast, Icecast",
    homepage: "https://dir.xiph.org/",
    style: "vocal",
    group: "icecast-vocal"
  },
  {
    id: "ic-elova-radio",
    name: "ELOVA RADIO",
    source: "Icecast",
    detail: "Vocal",
    image: null,
    streamUrl: "http://c44.radioboss.fm:8063/live",
    codec: "aac",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Icecast, Icecast",
    homepage: "https://dir.xiph.org/",
    style: "vocal",
    group: "icecast-vocal"
  },
  {
    id: "ic-whwr",
    name: "WHWR",
    source: "Icecast",
    detail: "Vocal",
    image: null,
    streamUrl: "http://pavo.prostreaming.net:8028/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Icecast, Icecast",
    homepage: "https://dir.xiph.org/",
    style: "vocal",
    group: "icecast-vocal"
  },
  {
    id: "ic-mix-altitude",
    name: "Mix Altitude",
    source: "Icecast",
    detail: "Vocal",
    image: null,
    streamUrl: "http://manager8.streamradio.fr:2680/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, Icecast, Icecast",
    homepage: "https://dir.xiph.org/",
    style: "vocal",
    group: "icecast-vocal"
  },
  {
    id: "ti-s234497",
    name: "Absolute Mix Radio (US)",
    source: "TuneIn",
    detail: "Vocal · Adult Hits",
    image: null,
    streamUrl: "http://audiovision.cdnstream1.com/2157_128.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Adult Hits",
    homepage: "https://tunein.com/radio/s234497/",
    style: "vocal",
    group: "adult-hits"
  },
  {
    id: "ti-s102147",
    name: "Bolton FM (Bolton - UK)",
    source: "TuneIn",
    detail: "Vocal · Adult Hits",
    image: null,
    streamUrl: "http://radio.canstream.co.uk:8083/live.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Adult Hits",
    homepage: "https://tunein.com/radio/s102147/",
    style: "vocal",
    group: "adult-hits"
  },
  {
    id: "ti-s10214",
    name: "Central FM (Glasgow - UK)",
    source: "TuneIn",
    detail: "Vocal · Adult Hits",
    image: null,
    streamUrl: "https://stream.rcs.revma.com/3p9gkcy5z72vv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Adult Hits",
    homepage: "https://tunein.com/radio/s10214/",
    style: "vocal",
    group: "adult-hits"
  },
  {
    id: "ti-s348040",
    name: "Derby ONE (UK)",
    source: "TuneIn",
    detail: "Vocal · Adult Hits",
    image: null,
    streamUrl: "https://stream.aiir.com/qbgoiwyhsyquv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Adult Hits",
    homepage: "https://tunein.com/radio/s348040/",
    style: "vocal",
    group: "adult-hits"
  },
  {
    id: "ti-s80451",
    name: "Kfm Radio (Dublin - Ireland)",
    source: "TuneIn",
    detail: "Vocal · Adult Hits",
    image: null,
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/K_FM.mp3?dist=tunein",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Adult Hits",
    homepage: "https://tunein.com/radio/s80451/",
    style: "vocal",
    group: "adult-hits"
  },
  {
    id: "ti-s87423",
    name: "Northern Sound (Monaghan - Ireland)",
    source: "TuneIn",
    detail: "Vocal · Adult Hits",
    image: null,
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/NORTHERN_SOUND.mp3?dist=tunein&DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk5MywiaXNzIjoidGlzcnYifQ.n5nCQuaziVwSuW99srr_o4uQn66FU2tIrvmaCCssuZs",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Adult Hits",
    homepage: "https://tunein.com/radio/s87423/",
    style: "vocal",
    group: "adult-hits"
  },
  {
    id: "ti-s80570",
    name: "Shannonside FM (Longford - Ireland)",
    source: "TuneIn",
    detail: "Vocal · Adult Hits",
    image: null,
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/SHANNONSIDE_FM.mp3?dist=tunein&DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk5MywiaXNzIjoidGlzcnYifQ.n5nCQuaziVwSuW99srr_o4uQn66FU2tIrvmaCCssuZs",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Adult Hits",
    homepage: "https://tunein.com/radio/s80570/",
    style: "vocal",
    group: "adult-hits"
  },
  {
    id: "ti-s22903",
    name: "Sunny 95 (Columbus - OH)",
    source: "TuneIn",
    detail: "Vocal · Adult Hits",
    image: null,
    streamUrl: "https://live.amperwave.net/direct/saga-wsnyfmmp3-ibc2?source=TuneIn&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Adult Hits",
    homepage: "https://tunein.com/radio/s22903/",
    style: "vocal",
    group: "adult-hits"
  },
  {
    id: "ti-s38878",
    name: "The Colorado Sound (Greeley - CO)",
    source: "TuneIn",
    detail: "Vocal · Adult Hits",
    image: null,
    streamUrl: "https://ais-sa1.streamon.fm/7891_96k.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk5MywiaXNzIjoidGlzcnYifQ.n5nCQuaziVwSuW99srr_o4uQn66FU2tIrvmaCCssuZs",
    codec: "mp3",
    bitrate: 96,
    uuid: null,
    tags: "Vocal, TuneIn, Adult Hits",
    homepage: "https://tunein.com/radio/s38878/",
    style: "vocal",
    group: "adult-hits"
  },
  {
    id: "ti-s90500",
    name: "181.FM True Blues (US)",
    source: "TuneIn",
    detail: "Vocal · Blues",
    image: null,
    streamUrl: "http://listen.181fm.com/181-blues_128k.mp3?noPreRoll=true",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Blues",
    homepage: "https://tunein.com/radio/s90500/",
    style: "vocal",
    group: "blues"
  },
  {
    id: "ti-s336485",
    name: "A MISSISSIPPI BLUES (Toronto - Canada)",
    source: "TuneIn",
    detail: "Vocal · Blues",
    image: null,
    streamUrl: "https://cast1.torontocast.com:4450/;?type=http&nocache=1746940333",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Blues",
    homepage: "https://tunein.com/radio/s336485/",
    style: "vocal",
    group: "blues"
  },
  {
    id: "ti-s183588",
    name: "Aardvark Blues FM (Houston-Galveston - TX)",
    source: "TuneIn",
    detail: "Vocal · Blues",
    image: null,
    streamUrl: "https://streaming.live365.com/a36201",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Blues",
    homepage: "https://tunein.com/radio/s183588/",
    style: "vocal",
    group: "blues"
  },
  {
    id: "ti-s213070",
    name: "Blues Music Fan Radio (US)",
    source: "TuneIn",
    detail: "Vocal · Blues",
    image: null,
    streamUrl: "https://orbit.citrus3.com:8052/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Blues",
    homepage: "https://tunein.com/radio/s213070/",
    style: "vocal",
    group: "blues"
  },
  {
    id: "ti-s286688",
    name: "HD Radio - The Blues (Milwaukee-Racine - WI)",
    source: "TuneIn",
    detail: "Vocal · Blues",
    image: null,
    streamUrl: "https://haradioblues-rfritschka.radioca.st/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Blues",
    homepage: "https://tunein.com/radio/s286688/",
    style: "vocal",
    group: "blues"
  },
  {
    id: "ti-s31574",
    name: "KAXE (Grand Rapids - MN)",
    source: "TuneIn",
    detail: "Vocal · Blues",
    image: null,
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/KAXEFM.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Blues",
    homepage: "https://tunein.com/radio/s31574/",
    style: "vocal",
    group: "blues"
  },
  {
    id: "ti-s32239",
    name: "KDAQ (Shreveport - LA)",
    source: "TuneIn",
    detail: "Vocal · Blues",
    image: null,
    streamUrl: "http://18123.live.streamtheworld.com:80/KDAQFM_SC?TGT=TuneIn&tdtok=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImZTeXA4In0.eyJpc3MiOiJ0aXNydiIsInN1YiI6IjIxMDY0IiwiaWF0IjoxNzk0NjIwOTkxLCJ0ZC1yZWciOmZhbHNlfQ.r6yR4wYNWi3sPuTTG52jId5MkQT5RXX7FwtajQ5bQG8&DIST=TuneIn&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk5MSwiaXNzIjoidGlzcnYifQ.F58mGLIu-R_3Fz0wIOqb6rU90_qNYYrwHb97gDu4C1s&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Blues",
    homepage: "https://tunein.com/radio/s32239/",
    style: "vocal",
    group: "blues"
  },
  {
    id: "ti-s33019",
    name: "KHPR (Honolulu - HI)",
    source: "TuneIn",
    detail: "Vocal · Blues",
    image: null,
    streamUrl: "http://khpr-ice.streamguys1.com:80/khpr2",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Blues",
    homepage: "https://tunein.com/radio/s33019/",
    style: "vocal",
    group: "blues"
  },
  {
    id: "ti-s219014",
    name: "Music City Roadhouse (US)",
    source: "TuneIn",
    detail: "Vocal · Blues",
    image: null,
    streamUrl: "http://streaming.live365.com/a73754",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Blues",
    homepage: "https://tunein.com/radio/s219014/",
    style: "vocal",
    group: "blues"
  },
  {
    id: "ti-s35273",
    name: "San Diego's Jazz 88.3 (San Diego - CA)",
    source: "TuneIn",
    detail: "Vocal · Blues",
    image: null,
    streamUrl: "http://ksds-ice.streamguys.com/ksds.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Blues",
    homepage: "https://tunein.com/radio/s35273/",
    style: "vocal",
    group: "blues"
  },
  {
    id: "ti-s29063",
    name: "WGLT (Normal - IL)",
    source: "TuneIn",
    detail: "Vocal · Blues",
    image: null,
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WGLT_NI.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Blues",
    homepage: "https://tunein.com/radio/s29063/",
    style: "vocal",
    group: "blues"
  },
  {
    id: "ti-s114109",
    name: "Boss Radio 66",
    source: "TuneIn",
    detail: "Vocal · Boss Radio",
    image: null,
    streamUrl: "http://cdn-cms.tunein.com/service/Audio/georestricted.enUS.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Boss Radio",
    homepage: "https://tunein.com/radio/s114109/",
    style: "vocal",
    group: "boss-radio"
  },
  {
    id: "ti-s232029",
    name: "D Park Radio Channel 1 (US)",
    source: "TuneIn",
    detail: "Vocal · Children's Music",
    image: null,
    streamUrl: "https://listen.openstream.co/3573/audio",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Children's Music",
    homepage: "https://tunein.com/radio/s232029/",
    style: "vocal",
    group: "children-s-music"
  },
  {
    id: "ti-s279402",
    name: "DISNEY (Canada)",
    source: "TuneIn",
    detail: "Vocal · Children's Music",
    image: null,
    streamUrl: "https://tunein-live-b.cdnstream1.com/3854_128.mp3?aw_0_1st.skey=1794620986&lat=29.953&lon=-90.0764&aw_0_1st.abtest=&aw_0_1st.stationId=s279402&aw_0_1st.premium=false&source=TuneIn&aw_0_1st.platform=tunein&aw_0_1st.genre_id=g76&aw_0_1st.class=music&aw_0_1st.ads_partner_alias=ce.Other&aw_0_azn.planguage=en&aw_0_1st.is_ondemand=false&aw_0_1st.topicId=na&aw_0_1st.affiliateIds=a40075%2ca38725%2ca39100&aw_0_1st.bandId=16&delivery=1",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Children's Music",
    homepage: "https://tunein.com/radio/s279402/",
    style: "vocal",
    group: "children-s-music"
  },
  {
    id: "ti-s67862",
    name: "Fun Kids (UK)",
    source: "TuneIn",
    detail: "Vocal · Children's Music",
    image: null,
    streamUrl: "https://listen-funkids.sharp-stream.com/funkids.mp3?platform=tunein",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Children's Music",
    homepage: "https://tunein.com/radio/s67862/",
    style: "vocal",
    group: "children-s-music"
  },
  {
    id: "ti-s308401",
    name: "Fun Kids Junior (London - UK)",
    source: "TuneIn",
    detail: "Vocal · Children's Music",
    image: null,
    streamUrl: "https://listen-funkids.sharp-stream.com/funkidsjunior.mp3?platform=tunein",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Children's Music",
    homepage: "https://tunein.com/radio/s308401/",
    style: "vocal",
    group: "children-s-music"
  },
  {
    id: "ti-s309600",
    name: "Fun Kids Naps (London - UK)",
    source: "TuneIn",
    detail: "Vocal · Children's Music",
    image: null,
    streamUrl: "https://stream.rcs.revma.com/pp2cg1z3tm0uv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Children's Music",
    homepage: "https://tunein.com/radio/s309600/",
    style: "vocal",
    group: "children-s-music"
  },
  {
    id: "ti-s309601",
    name: "Fun Kids Party (London - UK)",
    source: "TuneIn",
    detail: "Vocal · Children's Music",
    image: null,
    streamUrl: "https://stream.rcs.revma.com/0gpwvpz3tm0uv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Children's Music",
    homepage: "https://tunein.com/radio/s309601/",
    style: "vocal",
    group: "children-s-music"
  },
  {
    id: "ti-s309598",
    name: "Fun Kids Silly (London - UK)",
    source: "TuneIn",
    detail: "Vocal · Children's Music",
    image: null,
    streamUrl: "https://stream.rcs.revma.com/s1gvh2z3tm0uv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Children's Music",
    homepage: "https://tunein.com/radio/s309598/",
    style: "vocal",
    group: "children-s-music"
  },
  {
    id: "ti-s309604",
    name: "Fun Kids Soundtracks (London - UK)",
    source: "TuneIn",
    detail: "Vocal · Children's Music",
    image: null,
    streamUrl: "https://stream.rcs.revma.com/x8wbda03tm0uv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Children's Music",
    homepage: "https://tunein.com/radio/s309604/",
    style: "vocal",
    group: "children-s-music"
  },
  {
    id: "ti-s340164",
    name: "Kids Corner (Somersworth - NH)",
    source: "TuneIn",
    detail: "Vocal · Children's Music",
    image: null,
    streamUrl: "https://streaming.atlanticsunrisehosting.com/proxy/kidscorner/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Children's Music",
    homepage: "https://tunein.com/radio/s340164/",
    style: "vocal",
    group: "children-s-music"
  },
  {
    id: "ti-s262576",
    name: "Muppet Central Radio (Canada)",
    source: "TuneIn",
    detail: "Vocal · Children's Music",
    image: null,
    streamUrl: "https://listen.openstream.co/3835/audio",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Children's Music",
    homepage: "https://tunein.com/radio/s262576/",
    style: "vocal",
    group: "children-s-music"
  },
  {
    id: "ti-s67309",
    name: "Rock the Cradle (Minneapolis - MN)",
    source: "TuneIn",
    detail: "Vocal · Children's Music",
    image: null,
    streamUrl: "https://rockthecradle.stream.publicradio.org/rockthecradle.mp3?srcid=tunein",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Children's Music",
    homepage: "https://tunein.com/radio/s67309/",
    style: "vocal",
    group: "children-s-music"
  },
  {
    id: "ti-s22472",
    name: "92.9 WBPM (Poughkeepsie - NY)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "http://ais-sa1.streamon.fm/7832_128k.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk5OCwiaXNzIjoidGlzcnYifQ.zMeC79DntIo3C5aqHQmctEFXYAQBOO8IwdZP1sf9des",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s22472/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s22199",
    name: "96.5 Live Free Country (Bedford - NH)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "https://live.amperwave.net/direct/saga-wmllfmmp3-ibc2?source=TuneIn&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s22199/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s196839",
    name: "Absolute Classic Hits (US)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "http://audiovision.cdnstream1.com/2139_128.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s196839/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s27341",
    name: "Classic Hits 103.3 (New Orleans - LA)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "http://18153.live.streamtheworld.com:80/WRQQFM_SC?TGT=TuneIn&tdtok=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImZTeXA4In0.eyJpc3MiOiJ0aXNydiIsInN1YiI6IjIxMDY0IiwiaWF0IjoxNzk0NjIwOTk2LCJ0ZC1yZWciOmZhbHNlfQ.yX5Don6AX8FgUQvWYkFoBRq6WhlgBmt8Gmq4yHAlObc&DIST=TuneIn&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImxhdCI6IjI5Ljk1MyIsImxvbmciOiItOTAuMDc2NCIsImlhdCI6MTc5NDYyMDk5NiwiaXNzIjoidGlzcnYifQ.jzCwZ-j0fDFhSzPhLv76oPmWMUcZknjvBfMgUzUJ9Z4&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s27341/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s28560",
    name: "Classic Hits Q101.7 (Hudson Falls - NY)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "https://ais-sa1.streamon.fm/7831_128k.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk5OCwiaXNzIjoidGlzcnYifQ.zMeC79DntIo3C5aqHQmctEFXYAQBOO8IwdZP1sf9des",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s28560/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s31163",
    name: "Cool 106.3 (Sarnia - Canada)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "https://blackburn-ais.leanstream.co/CHKSFM-MP3?args=tuneIn_01",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s31163/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s267064",
    name: "Dragon Radio (UK)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "https://listen-nation.sharp-stream.com/tcnationdigital.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s267064/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s43893",
    name: "Jack 94 5 (Regina - Canada)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "https://rawlco.leanstream.co/CKCKFM-MP3?args=tunein_01",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s43893/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s54157",
    name: "Offshore Music Radio (US)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "http://bitsmitter.com:8000/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s54157/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s127750",
    name: "Oldies America (Cincinnati - OH)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "https://s9.citrus3.com:8398/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s127750/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s30050",
    name: "Rewind 103.5/104.3 (Pickerington - OH)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "https://live.amperwave.net/direct/saga-wnndfmmp3-ibc2?source=TuneIn&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s30050/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s28159",
    name: "Rewind 94.3 (Oak Grove - KY)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "https://live.amperwave.net/direct/saga-wrndfmmp3-ibc2?source=TuneIn&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s28159/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s251337",
    name: "The Breeze 95.3 (Monroe - LA)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "https://thebreeze953.ddns.net/broadwave.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s251337/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s22192",
    name: "WQLB (Tawas City - MI)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "https://ice6.securenetsystems.net/WQLBM",
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s22192/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s23145",
    name: "WTIX-FM (New Orleans - LA)",
    source: "TuneIn",
    detail: "Vocal · Classic Hits",
    image: null,
    streamUrl: "http://hemnos.cdnstream.com/1427_64",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classic Hits",
    homepage: "https://tunein.com/radio/s23145/",
    style: "vocal",
    group: "classic-hits"
  },
  {
    id: "ti-s31914",
    name: "KBYI (Rexburg - ID)",
    source: "TuneIn",
    detail: "Vocal · Classical Music",
    image: null,
    streamUrl: "https://radiostream.byui.edu/kbyi",
    codec: "aac",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Classical Music",
    homepage: "https://tunein.com/radio/s31914/",
    style: "vocal",
    group: "classical-music"
  },
  {
    id: "ti-s27483",
    name: "90.5 The Night (Lincroft - NJ)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "http://ice.wbjb.net/905-MP3-High",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s27483/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s26584",
    name: "91X (Monroe - LA)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "https://stream.kxul.com/listen.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s26584/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s20314",
    name: "Bailrigg FM (Blackpool - UK)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "https://stream.bailriggfm.co.uk/listen/bfm/320.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s20314/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s32127",
    name: "KCPR (San Luis Obispo - CA)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "https://ice23.securenetsystems.net:80/KCPR2",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s32127/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s32950",
    name: "KHDX Radio (Little Rock - AR)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "http://streaming.radio.co/s662abb673/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s32950/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s258645",
    name: "KJACK (Flagstaff-Prescott - AZ)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "https://stream.ec.nau.edu:8443/kjack",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s258645/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s35938",
    name: "KUPS (Seattle-Tacoma - WA)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "http://nap.casthost.net:8244/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s35938/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s26366",
    name: "KWSC 91.9 The Cat (Sioux City - NE)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "https://cc141.cir.st/KWSC",
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s26366/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s23564",
    name: "Messiah's Pulse Radio (Mechanicsburg - PA)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "https://us9.maindigitalstream.com/ssl/WVMM",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s23564/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s136895",
    name: "Radio Boise - KRBX (Boise - ID)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "http://radioboise-ice.streamguys1.com/live",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s136895/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s32397",
    name: "Radio K (Minneapolis - MN)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "https://radiok.broadcasttool.stream/play_256",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s32397/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s329035",
    name: "Radio Lockhart (Austin - TX)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "https://streaming.klkt.org/play",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s329035/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s28032",
    name: "WCRX (Chicago - IL)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "http://wcrx.streamguys1.com:80/live",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s28032/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s304511",
    name: "WLJZ 107.1 FM (Salisbury - NC)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "http://stream.radiojar.com/y47fsua10heuv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s304511/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s21252",
    name: "WMSV - The Junction (Starkville - MS)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "https://stream.wmsv.msstate.edu:8000/wmsv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s21252/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s22386",
    name: "WRFL – Radio Free Lexington (Lexington-Fayette - KY)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "http://dj.wrfl.fm:9000/stream/1",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s22386/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s23307",
    name: "WTUL New Orleans (New Orleans - LA)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "https://stream.wtulneworleans.com/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s23307/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s30013",
    name: "WUML - Lowell (Lowell - MA)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "http://nap.casthost.net:8378/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s30013/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s267811",
    name: "WXNA (Nashville - TN)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "http://listen.wxnafm.org:8000/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s267811/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s24037",
    name: "WXOU (Auburn Hills - MI)",
    source: "TuneIn",
    detail: "Vocal · College Radio",
    image: null,
    streamUrl: "https://a8.asurahosting.com/listen/wxou/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, College Radio",
    homepage: "https://tunein.com/radio/s24037/",
    style: "vocal",
    group: "college-radio"
  },
  {
    id: "ti-s164665",
    name: "100.1 BayFM (Corner Brook - Canada)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://stream.statsradio.com:8148/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s164665/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s30267",
    name: "100.9/107.1 The Cat (Albany - NY)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://ais-sa1.streamon.fm/7819_128k.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDkzNiwiaXNzIjoidGlzcnYifQ.wFtfSypn--rwwXdrA2oyeuNAce1oJIQDeU4hNfhbjPs",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s30267/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s299112",
    name: "104 The Ranch - KKEX-HD3 (Tremonton - UT)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://ice9.securenetsystems.net/KKEX3",
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s299112/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s28420",
    name: "105.3 Cat Country (Lebanon-Rutland-White River Junction - VT)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://ais-sa1.streamon.fm/7823_96k.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDkzNiwiaXNzIjoidGlzcnYifQ.wFtfSypn--rwwXdrA2oyeuNAce1oJIQDeU4hNfhbjPs",
    codec: "mp3",
    bitrate: 96,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s28420/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s276672",
    name: "99.3 WOWZ (Chincoteague - VA)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://wctg.streamguys1.com/WOW",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s276672/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s260326",
    name: "Americana Boogie Radio (SALEM - OR)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://samcloud.spacial.com/api/listen?sid=70719&m=sc",
    codec: "aac+",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s260326/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s261313",
    name: "Australian Country Radio (Sydney - Australia)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://streaming.radio.co/s5ea3fdd1c/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s261313/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s291704",
    name: "Ballina Killaloe Local Radio (Killaloe - Ireland)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://streamer.radio.co/s776d00065/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s291704/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s27409",
    name: "Bay Country 97.9 (Crisfield - MD)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://wctg.streamguys1.com/WBEY",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s27409/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s31167",
    name: "CHOK 103.9 (Sarnia - Canada)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://blackburn-ais.leanstream.co/CHOKAM-MP3?args=tuneIn_01&DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDkzNiwiaXNzIjoidGlzcnYifQ.wFtfSypn--rwwXdrA2oyeuNAce1oJIQDeU4hNfhbjPs",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s31167/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s196675",
    name: "CountryLine Radio (UK)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "http://ads-direct.sharp-stream.com/chriscountry.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s196675/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s30086",
    name: "Froggy 100.3 (Warrensburg - NY)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://ais-sa1.streamon.fm/7828_128k.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDkzNiwiaXNzIjoidGlzcnYifQ.wFtfSypn--rwwXdrA2oyeuNAce1oJIQDeU4hNfhbjPs",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s30086/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s322407",
    name: "Hit Country 105.3 (Quebec City - Canada)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CHCT_FM.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s322407/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s234136",
    name: "Independent Baptist Radio (Huntsville - AL)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://www.ibradio.org/stream/192",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s234136/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s7723",
    name: "KX 94.7 (Hamilton - Canada)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CHKXFM.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDkzNiwiaXNzIjoidGlzcnYifQ.wFtfSypn--rwwXdrA2oyeuNAce1oJIQDeU4hNfhbjPs",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s7723/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s281621",
    name: "Outlaw 100.7 - WCVQ-HD3 (Clarksville - TN)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://live.amperwave.net/direct/saga-wcvqhd3mp3-ibc2?source=TuneIn&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s281621/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s96727",
    name: "Radio Free Americana (US)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://thassos.cdnstream.com:9950/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s96727/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s131396",
    name: "Redneck Radio 101 (Ft. Smith - AR)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "http://s21.myradiostream.com:10806/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s131396/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s135419",
    name: "The Ranch - Classic Country (Phoenix - AZ)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://loveradio.stream:8010/theranch/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s135419/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s140137",
    name: "Today's Hot Country (US)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://ais-sa2.cdnstream1.com/1398_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s140137/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s30517",
    name: "WKZE-FM (Poughkeepsie - NY)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://stream.aiir.com/wirrrzolq3tvv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s30517/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s22019",
    name: "WPOR (Portland - ME)",
    source: "TuneIn",
    detail: "Vocal · Country",
    image: null,
    streamUrl: "https://prod-204-236-243-71.amperwave.net/saga-wporfmmp3-ibc1?session-id=b7f827bc63c5b1611cd3db8f565405ab&source=TuneIn&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Country",
    homepage: "https://tunein.com/radio/s22019/",
    style: "vocal",
    group: "country"
  },
  {
    id: "ti-s92147",
    name: "1Mix Radio Trance Stream (Douglas - Isle of Man)",
    source: "TuneIn",
    detail: "Vocal · Dance & Electronic",
    image: null,
    streamUrl: "https://fr2.1mix.co.uk:8000/320",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Dance & Electronic",
    homepage: "https://tunein.com/radio/s92147/",
    style: "vocal",
    group: "dance-electronic"
  },
  {
    id: "ti-s122126",
    name: "Chilltrax (US)",
    source: "TuneIn",
    detail: "Vocal · Dance & Electronic",
    image: null,
    streamUrl: "https://streamssl.chilltrax.com/index.html?sid=1",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Dance & Electronic",
    homepage: "https://tunein.com/radio/s122126/",
    style: "vocal",
    group: "dance-electronic"
  },
  {
    id: "ti-s78631",
    name: "Lounge Motion FM (Montreal - Canada)",
    source: "TuneIn",
    detail: "Vocal · Dance & Electronic",
    image: null,
    streamUrl: "https://vm.motionfm.com/motionthree_free",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Dance & Electronic",
    homepage: "https://tunein.com/radio/s78631/",
    style: "vocal",
    group: "dance-electronic"
  },
  {
    id: "ti-s259858",
    name: "Pride Radio (Newcastle - UK)",
    source: "TuneIn",
    detail: "Vocal · Dance & Electronic",
    image: null,
    streamUrl: "http://philae.shoutca.st:8807",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Dance & Electronic",
    homepage: "https://tunein.com/radio/s259858/",
    style: "vocal",
    group: "dance-electronic"
  },
  {
    id: "ti-s97878",
    name: "Radio Danz (Miami - FL)",
    source: "TuneIn",
    detail: "Vocal · Dance & Electronic",
    image: null,
    streamUrl: "https://streamssl.radiodanz.com/index.html?sid=1",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Dance & Electronic",
    homepage: "https://tunein.com/radio/s97878/",
    style: "vocal",
    group: "dance-electronic"
  },
  {
    id: "ti-s341578",
    name: "America's Best Oldies (GARDENDALE - AL)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://ec3.yesstreaming.net:2185/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s341578/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s346746",
    name: "Bob Radio Playing Anything (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station2/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s346746/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s349965",
    name: "Hive FM (Nottingham - UK)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://stream.aiir.com/oukspr99eiptv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s349965/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s347326",
    name: "The Mix Best Club Hits From The 2000's (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station17/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s347326/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s346753",
    name: "The Mix Best Dance Hits From the 90s (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station11/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s346753/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s346378",
    name: "The Mix Best Hits From 80's & 90's (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station8/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s346378/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s347324",
    name: "The Mix Best Hits From Generation 2K (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station15/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s347324/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s347325",
    name: "The Mix Best Hits From The 2010's (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station16/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s347325/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s347323",
    name: "The Mix Best Hits From The 60's (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station3/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s347323/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s346747",
    name: "The Mix Best Hits From The 70 (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station4/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s346747/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s346750",
    name: "The Mix Best Hits From The 70s & 80s (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station7/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s346750/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s346748",
    name: "The Mix Best Hits From The 80 (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station5/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s346748/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s346749",
    name: "The Mix Best Hits From The 90 (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station6/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s346749/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s346771",
    name: "The Mix Best Remixes From 80s & 90s (Quebec - Canada)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://jupiter.themixradio.ca/listen/station12/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s346771/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s359781",
    name: "WMTP-DB (Deltona - FL)",
    source: "TuneIn",
    detail: "Vocal · Decades Music",
    image: null,
    streamUrl: "https://ec1.yesstreaming.net:1960/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Decades Music",
    homepage: "https://tunein.com/radio/s359781/",
    style: "vocal",
    group: "decades-music"
  },
  {
    id: "ti-s336539",
    name: "100% COVERS LOUNGE (Toronto - Canada)",
    source: "TuneIn",
    detail: "Vocal · Easy Listening",
    image: null,
    streamUrl: "https://az1.mediacp.eu/listen/100coverslounge/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Easy Listening",
    homepage: "https://tunein.com/radio/s336539/",
    style: "vocal",
    group: "easy-listening"
  },
  {
    id: "ti-s336545",
    name: "AIRPORT LOUNGE RADIO (Toronto - Canada)",
    source: "TuneIn",
    detail: "Vocal · Easy Listening",
    image: null,
    streamUrl: "https://az1.mediacp.eu/listen/airport-lounge-radio/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Easy Listening",
    homepage: "https://tunein.com/radio/s336545/",
    style: "vocal",
    group: "easy-listening"
  },
  {
    id: "ti-s113440",
    name: "ATOS Theatre Organ Radio Hi Def (Bloomington - MN)",
    source: "TuneIn",
    detail: "Vocal · Easy Listening",
    image: null,
    streamUrl: "http://45.79.43.73:8001/stream/2/;",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Easy Listening",
    homepage: "https://tunein.com/radio/s113440/",
    style: "vocal",
    group: "easy-listening"
  },
  {
    id: "ti-s166562",
    name: "Classic Gold Radio (Invercargill - New Zealand)",
    source: "TuneIn",
    detail: "Vocal · Easy Listening",
    image: null,
    streamUrl: "http://203.118.144.79:8000/stream.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Easy Listening",
    homepage: "https://tunein.com/radio/s166562/",
    style: "vocal",
    group: "easy-listening"
  },
  {
    id: "ti-s22541",
    name: "Magic 100.5 (Albany - NY)",
    source: "TuneIn",
    detail: "Vocal · Easy Listening",
    image: null,
    streamUrl: "https://ais-sa1.streamon.fm/7820_128k.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk3MiwiaXNzIjoidGlzcnYifQ.jmiwLw2qs_SzX3GRwPTJp05kPPO-0qXLGaMXsv3sZSc",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Easy Listening",
    homepage: "https://tunein.com/radio/s22541/",
    style: "vocal",
    group: "easy-listening"
  },
  {
    id: "ti-s237812",
    name: "Peaceful Currents Radio (Canada)",
    source: "TuneIn",
    detail: "Vocal · Easy Listening",
    image: null,
    streamUrl: "https://cast1.torontocast.com:2865/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Easy Listening",
    homepage: "https://tunein.com/radio/s237812/",
    style: "vocal",
    group: "easy-listening"
  },
  {
    id: "ti-s111491",
    name: "Prince Bishops Hospital Radio (UK)",
    source: "TuneIn",
    detail: "Vocal · Easy Listening",
    image: null,
    streamUrl: "http://www.ahr.org.uk:8000/;",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Easy Listening",
    homepage: "https://tunein.com/radio/s111491/",
    style: "vocal",
    group: "easy-listening"
  },
  {
    id: "ti-s96862",
    name: "Radio Hillingdon (UK)",
    source: "TuneIn",
    detail: "Vocal · Easy Listening",
    image: null,
    streamUrl: "https://streaming.broadcast.radio/hrhillingdonmp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Easy Listening",
    homepage: "https://tunein.com/radio/s96862/",
    style: "vocal",
    group: "easy-listening"
  },
  {
    id: "ti-s2649",
    name: "Radio Tyneside (Newcastle - UK)",
    source: "TuneIn",
    detail: "Vocal · Easy Listening",
    image: null,
    streamUrl: "http://stream.radiotyneside.co.uk/tyneside128.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Easy Listening",
    homepage: "https://tunein.com/radio/s2649/",
    style: "vocal",
    group: "easy-listening"
  },
  {
    id: "ti-s106844",
    name: "Somer Valley FM (Bristol - UK)",
    source: "TuneIn",
    detail: "Vocal · Easy Listening",
    image: null,
    streamUrl: "https://stream4.hippynet.co.uk:8014/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Easy Listening",
    homepage: "https://tunein.com/radio/s106844/",
    style: "vocal",
    group: "easy-listening"
  },
  {
    id: "ti-s67859",
    name: "Sunshine 106.8 (Dublin - Ireland)",
    source: "TuneIn",
    detail: "Vocal · Easy Listening",
    image: null,
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/SUNSHINE_106_8.mp3?dist=tunein",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Easy Listening",
    homepage: "https://tunein.com/radio/s67859/",
    style: "vocal",
    group: "easy-listening"
  },
  {
    id: "ti-s283449",
    name: "American Roots (Canada)",
    source: "TuneIn",
    detail: "Vocal · Folk",
    image: null,
    streamUrl: "https://stream.americanrootsradio.com:3035/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Folk",
    homepage: "https://tunein.com/radio/s283449/",
    style: "vocal",
    group: "folk"
  },
  {
    id: "ti-s342233",
    name: "Ariba The Party station (Toronto - Canada)",
    source: "TuneIn",
    detail: "Vocal · Folk",
    image: null,
    streamUrl: "https://kathy.torontocast.com:1735/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Folk",
    homepage: "https://tunein.com/radio/s342233/",
    style: "vocal",
    group: "folk"
  },
  {
    id: "ti-s37265",
    name: "Folk Alley - WKSU-HD2 (Kent - OH)",
    source: "TuneIn",
    detail: "Vocal · Folk",
    image: null,
    streamUrl: "https://freshgrass.streamguys1.com/folkalley-128mp3-tunein",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Folk",
    homepage: "https://tunein.com/radio/s37265/",
    style: "vocal",
    group: "folk"
  },
  {
    id: "ti-s1207",
    name: "KRVS Public Media (Lafayette - LA)",
    source: "TuneIn",
    detail: "Vocal · Folk",
    image: null,
    streamUrl: "http://29327.live.streamtheworld.com:80/KRVSFM_SC?TGT=TuneIn&tdtok=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImZTeXA4In0.eyJpc3MiOiJ0aXNydiIsInN1YiI6IjIxMDY0IiwiaWF0IjoxNzk0NjIwOTcwLCJ0ZC1yZWciOmZhbHNlfQ.eo08rIt-zxcMVDMUtX7As_JbPNHqVvfBceYgJPWUf0I&DIST=TuneIn&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk3MCwiaXNzIjoidGlzcnYifQ.5YjUlOfbxrp6qkKFlgxHmDJRFfTUAKrJf5c6r7JWONE&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Folk",
    homepage: "https://tunein.com/radio/s1207/",
    style: "vocal",
    group: "folk"
  },
  {
    id: "ti-s28632",
    name: "NHPR (Concord - NH)",
    source: "TuneIn",
    detail: "Vocal · Folk",
    image: null,
    streamUrl: "https://nhpr.streamguys1.com/nhpr",
    codec: "aac",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Folk",
    homepage: "https://tunein.com/radio/s28632/",
    style: "vocal",
    group: "folk"
  },
  {
    id: "ti-s274958",
    name: "Radio Happysound (Canada)",
    source: "TuneIn",
    detail: "Vocal · Folk",
    image: null,
    streamUrl: "https://radiohappysound.com/192-ssl",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Folk",
    homepage: "https://tunein.com/radio/s274958/",
    style: "vocal",
    group: "folk"
  },
  {
    id: "ti-s52555",
    name: "Radio Heartland - KNOW-HD2 (Minneapolis - MN)",
    source: "TuneIn",
    detail: "Vocal · Folk",
    image: null,
    streamUrl: "https://radioheartland.stream.publicradio.org/radioheartland.mp3?srcid=tunein",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Folk",
    homepage: "https://tunein.com/radio/s52555/",
    style: "vocal",
    group: "folk"
  },
  {
    id: "ti-s190122",
    name: "SomaFM: Folk Forward (US)",
    source: "TuneIn",
    detail: "Vocal · Folk",
    image: null,
    streamUrl: "http://ice6.somafm.com/folkfwd-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Folk",
    homepage: "https://tunein.com/radio/s190122/",
    style: "vocal",
    group: "folk"
  },
  {
    id: "ti-s29518",
    name: "WICN (Worcester - MA)",
    source: "TuneIn",
    detail: "Vocal · Folk",
    image: null,
    streamUrl: "http://wicn-ice.streamguys1.com/live-mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk2OSwiaXNzIjoidGlzcnYifQ.KJnUNVyA5evq2OC5HbyVwbqACIUAykXysEyvFRFyKBI",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Folk",
    homepage: "https://tunein.com/radio/s29518/",
    style: "vocal",
    group: "folk"
  },
  {
    id: "ti-s262590",
    name: "Bang West Radio (US)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "http://stream.radiojar.com/q8yghdvnu1duv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s262590/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s301170",
    name: "Chop Shop radio Live (New Orleans - LA)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "https://s4.radioforge.com:8157/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s301170/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s164051",
    name: "DJ KIDNU RADIO (US)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "http://stream.radio.co/s4ae4ea1dc/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s164051/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s135290",
    name: "Gangstaville Radio (Miami - FL)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "http://stream.radio.co/s1cffd7347/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s135290/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s291630",
    name: "Go! 104.5 (New Orleans - LA)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "https://centova11.instainternet.com:2199/tunein/godjradio.asx",
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s291630/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s213410",
    name: "Greatest Hits of Hip Hop - Urbanradio.com (Atlanta - GA)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "http://hydra.cdnstream.com/1537_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s213410/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s213411",
    name: "Hip Hop & R&B - Urbanradio.com (Atlanta - GA)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "http://hydra.cdnstream.com/1536_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s213411/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s280125",
    name: "Hip Hop Muzic Hub (Wichita - KS)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "https://c11.radioboss.fm:8187/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s280125/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s287106",
    name: "Hip-Hop Request #1 In HipHop And RnB (US)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "https://radio.978host.com/sslstream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s287106/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s154523",
    name: "Hot 21 Radio (US)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "https://listen.openstream.co/4083/audio",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s154523/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s67085",
    name: "Houston Public Media Mixtape - KUHF-HD3 (Houston-Galveston - TX)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "https://stream.houstonpublicmedia.org/thevibe-mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s67085/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s198896",
    name: "K-100 RADIO (Atlanta - GA)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "https://usa19.fastcast4u.com:4770/1",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s198896/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s226336",
    name: "KRUD-DB Rudeboy Radio 808 (Honolulu - HI)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "http://s47.myradiostream.com:14460/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s226336/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s117471",
    name: "Power 104.7 Baltimore (US)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "https://us10a.serverse.com/proxy/anrzksuy/stream?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk2OCwiaXNzIjoidGlzcnYifQ.LajuFTM_Ho-Ktvya0BNEC5jqleASDqExkx-Lr9uxEaw",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s117471/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s259075",
    name: "The Beat (Houston-Galveston - TX)",
    source: "TuneIn",
    detail: "Vocal · Hip Hop",
    image: null,
    streamUrl: "https://a9.asurahosting.com/listen/the_beat/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Hip Hop",
    homepage: "https://tunein.com/radio/s259075/",
    style: "vocal",
    group: "hip-hop"
  },
  {
    id: "ti-s24185",
    name: "B 95.5 (Albany - NY)",
    source: "TuneIn",
    detail: "Vocal · Holiday Music",
    image: null,
    streamUrl: "https://ais-sa1.streamon.fm/7821_128k.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk2MSwiaXNzIjoidGlzcnYifQ.kEmScupIuEXbITERbnjO8xniW3Xk7WhoqOzPa7bgDIk",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Holiday Music",
    homepage: "https://tunein.com/radio/s24185/",
    style: "vocal",
    group: "holiday-music"
  },
  {
    id: "ti-s235189",
    name: "Branson Christmas Radio (Branson - MO)",
    source: "TuneIn",
    detail: "Vocal · Holiday Music",
    image: null,
    streamUrl: "http://stream.radiojar.com/22habbgmb",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Holiday Music",
    homepage: "https://tunein.com/radio/s235189/",
    style: "vocal",
    group: "holiday-music"
  },
  {
    id: "ti-s151255",
    name: "CBN Christmas Radio (Virginia Beach - VA)",
    source: "TuneIn",
    detail: "Vocal · Holiday Music",
    image: null,
    streamUrl: "https://streams.cbnradio.com/christmas-128K?app=tunein",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Holiday Music",
    homepage: "https://tunein.com/radio/s151255/",
    style: "vocal",
    group: "holiday-music"
  },
  {
    id: "ti-s184182",
    name: "CBN Cross Country Christmas (Virginia Beach - VA)",
    source: "TuneIn",
    detail: "Vocal · Holiday Music",
    image: null,
    streamUrl: "https://streams.cbnradio.com/country-christmas-128K?app=tunein",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Holiday Music",
    homepage: "https://tunein.com/radio/s184182/",
    style: "vocal",
    group: "holiday-music"
  },
  {
    id: "ti-s117270",
    name: "Christmas FM (Dublin - Ireland)",
    source: "TuneIn",
    detail: "Vocal · Holiday Music",
    image: null,
    streamUrl: "https://christmasfm.cdnstream1.com/2547_128.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Holiday Music",
    homepage: "https://tunein.com/radio/s117270/",
    style: "vocal",
    group: "holiday-music"
  },
  {
    id: "ti-s212791",
    name: "Christmas FM Classics (Dublin - Ireland)",
    source: "TuneIn",
    detail: "Vocal · Holiday Music",
    image: null,
    streamUrl: "https://christmasfm.cdnstream1.com/2550_128.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Holiday Music",
    homepage: "https://tunein.com/radio/s212791/",
    style: "vocal",
    group: "holiday-music"
  },
  {
    id: "ti-s235230",
    name: "Christmas Oldies (US)",
    source: "TuneIn",
    detail: "Vocal · Holiday Music",
    image: null,
    streamUrl: "http://listen1.57fm.com/rcxmas",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Holiday Music",
    homepage: "https://tunein.com/radio/s235230/",
    style: "vocal",
    group: "holiday-music"
  },
  {
    id: "ti-s298318",
    name: "The Alway's Christmas Channel (Canada)",
    source: "TuneIn",
    detail: "Vocal · Holiday Music",
    image: null,
    streamUrl: "http://kea.cdnstream.com/1837_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Holiday Music",
    homepage: "https://tunein.com/radio/s298318/",
    style: "vocal",
    group: "holiday-music"
  },
  {
    id: "ti-s150406",
    name: "Tinsel & Tunes (Pittsburgh - PA)",
    source: "TuneIn",
    detail: "Vocal · Holiday Music",
    image: null,
    streamUrl: "http://cp1.thepuremix.net:9952/stream.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Holiday Music",
    homepage: "https://tunein.com/radio/s150406/",
    style: "vocal",
    group: "holiday-music"
  },
  {
    id: "ti-s106599",
    name: "98.1 The River - WOXL-HD2 (Asheville - NC)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "https://live.amperwave.net/direct/saga-woxlhd2mp3-ibc2?source=TuneIn&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s106599/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s201315",
    name: "Casual Dining Radio by MMG (Los Angeles - CA)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "http://208.52.190.253:8000/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s201315/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s247489",
    name: "Deepstuff radio I (Bradford  - UK)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "http://s6.autopo.st:8691/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s247489/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s31376",
    name: "Indie-1023 (Denver-Boulder - CO)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "http://stream2.cprnetwork.org:8000/cpr3_lo",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s31376/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s255939",
    name: "KHOL (Jackson - WY)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "http://peridot.streamguys.com:6010/live",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s255939/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s138748",
    name: "KPTZ (Seattle-Tacoma - WA)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "https://kptz.streamguys1.com/live-mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s138748/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s361802",
    name: "Moodhoney Radio (Ottawa - Canada)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "https://radio.moodhoney.com/listen/moodhoney_radio/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s361802/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s178759",
    name: "Radio BurgerFuel (Auckland - New Zealand)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "https://s3.radio.co/s9909bd65f/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s178759/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s158120",
    name: "Songwriters Island (PUNTA GORDA - FL)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "http://azuracast.myautodj.com:8010/radio.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s158120/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s23235",
    name: "The Gamut (Frederick - MD)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WWFDAM.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk1OSwiaXNzIjoidGlzcnYifQ.ovIWIj-2ltyfBr1CUkDkos8J64RfVgKcXBAanNxRfDU",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s23235/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s27596",
    name: "WBRU (US)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "https://s3.radio.co/s115121de1/listen?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk1OSwiaXNzIjoidGlzcnYifQ.ovIWIj-2ltyfBr1CUkDkos8J64RfVgKcXBAanNxRfDU",
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s27596/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s28755",
    name: "WFIT (Melbourne - FL)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "http://streaming.wfit.org/wfit-fm?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk1OSwiaXNzIjoidGlzcnYifQ.ovIWIj-2ltyfBr1CUkDkos8J64RfVgKcXBAanNxRfDU",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s28755/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s21320",
    name: "WMXM (Chicago - IL)",
    source: "TuneIn",
    detail: "Vocal · Indie Music",
    image: null,
    streamUrl: "http://wmxm.streamguys1.com/live",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Indie Music",
    homepage: "https://tunein.com/radio/s21320/",
    style: "vocal",
    group: "indie-music"
  },
  {
    id: "ti-s193288",
    name: "Giants of Jazz Radio (UK)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "http://streaming.radio.co:80/s297e618a7/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s193288/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s286258",
    name: "Global Soul Radio (London - UK)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "https://streams.radio.co/s91ab79ddc/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s286258/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s31681",
    name: "Jazz 88.5 (Minneapolis - MN)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "http://kbem-live.streamguys1.com/kbem_mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s31681/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s229122",
    name: "Jazz Cafe (New Zealand)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "http://radio.wanderingsheep.tv:8000/jazzcafe",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s229122/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s225199",
    name: "Jazz London Radio (London - UK)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "https://radio.canstream.co.uk:8075/live.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s225199/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s98067",
    name: "JAZZRADIOdc.com (US)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "http://s2.stationplaylist.com:7040/listen.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s98067/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s32163",
    name: "KCSM Jazz 91.1 (San Mateo - CA)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "https://ice7.securenetsystems.net/KCSM2",
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s32163/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s35922",
    name: "KUNV (Las Vegas - NV)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "http://kunv.oit.unlv.edu:8000/stream/1/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s35922/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s55412",
    name: "Martini In The Morning (Los Angeles - CA)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "https://tunein-live-f.cdnstream1.com/4068_128.mp3?aw_0_1st.skey=1794620959&lat=29.953&lon=-90.0764&aw_0_1st.abtest=&aw_0_1st.stationId=s55412&aw_0_1st.premium=false&source=TuneIn&aw_0_1st.platform=tunein&aw_0_1st.genre_id=g11&aw_0_1st.class=music&aw_0_1st.ads_partner_alias=ce.Other&aw_0_azn.planguage=en&aw_0_1st.is_ondemand=false&aw_0_1st.topicId=na&aw_0_1st.affiliateIds=a40301%2ca39100%2ca39110&aw_0_1st.bandId=16&delivery=1",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s55412/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s110768",
    name: "RadioSky Music Jazz (Canada)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "http://live.radioskymusic.com:7006/live",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s110768/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s266419",
    name: "Radiowish Smooth Jazz Vocals (Circle Pines - MN)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "http://s47.myradiostream.com:14694/",
    codec: "aac+",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s266419/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s156422",
    name: "The Chiaroscuro Channel - WVIA-HD3 (Scranton - PA)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "https://wvia.streamguys1.com:80/WVIAHD3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk1OSwiaXNzIjoidGlzcnYifQ.ovIWIj-2ltyfBr1CUkDkos8J64RfVgKcXBAanNxRfDU",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s156422/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s237932",
    name: "The World of Jazz from Detroit (US)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "https://s3.radio.co/sc46eba0e7/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s237932/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s23833",
    name: "WWOZ (New Orleans - LA)",
    source: "TuneIn",
    detail: "Vocal · Jazz",
    image: null,
    streamUrl: "https://wwoz-sc.streamguys1.com/wwoz-hi.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Jazz",
    homepage: "https://tunein.com/radio/s23833/",
    style: "vocal",
    group: "jazz"
  },
  {
    id: "ti-s322692",
    name: "Powerhitz.com - Lit Hip Hop",
    source: "TuneIn",
    detail: "Vocal · Powerhitz",
    image: null,
    streamUrl: "https://live.powerhitz.com/lit?aw_0_req.gdpr=true",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Powerhitz",
    homepage: "https://tunein.com/radio/s322692/",
    style: "vocal",
    group: "powerhitz"
  },
  {
    id: "ti-s234929",
    name: "Big Reggae Mix (San Diego - CA)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "https://ais-sa2.cdnstream1.com/2294_128.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s234929/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s252444",
    name: "Cane Grove Radio! (US)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "http://streaming.radio.co:80/sd39255bf8/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s252444/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s137355",
    name: "DANCEHALL LINK (Orlando - FL)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "https://streamer.radio.co/s30d82be5e/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s137355/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s233969",
    name: "Fresh Fm Radio London (UK)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "https://eu4.fastcast4u.com/proxy/blacka?mp=/1",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s233969/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s35469",
    name: "HI95 Kauai (Kauai - HI)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "https://pacificmedia.cdnstream1.com/2789_128.mp3?source=TuneIn&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s35469/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s158175",
    name: "Irie 98 FM (Hamilton - Bermuda)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "https://usa19.fastcast4u.com:7430/;?type=http&nocache=1716135247",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s158175/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s357379",
    name: "IRIE FM 107.7 Jamaica (Kingston - Jamaica)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "https://stream.iriefm.net:8006/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s357379/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s114855",
    name: "iRie Rockers Fm (US)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "http://s20.reliastream.com:8130/admin",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s114855/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s155516",
    name: "LoversrockRadio (UK)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "http://199.115.115.71:8325",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s155516/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s246972",
    name: "ONE RADIO LINK (Jamaica)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "https://stream.radio.co/s865966bbf/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s246972/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s214804",
    name: "Rastafari Jams (Chicago - IL)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "https://s2.radio.co/sccc2dccb5/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s214804/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s204086",
    name: "Rockers Movement Radio (Miami - FL)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "https://rockersmovement.radioca.st/;",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s204086/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s162440",
    name: "Skyline Radio (Birmingham - UK)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "http://stream.zeno.fm/gppe0uht9c0uv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s162440/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s308769",
    name: "SomaFM: Heavyweight Reggae (US)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "http://ice6.somafm.com/reggae-128-mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s308769/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s172616",
    name: "SunCity 104.9 FM (Kingston - Jamaica)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "http://edge.mixlr.com/channel/ibrdq",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s172616/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s206776",
    name: "ViiLD REGGAE (US)",
    source: "TuneIn",
    detail: "Vocal · Reggae & Dancehall",
    image: null,
    streamUrl: "https://ec1.yesstreaming.net:3425/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Reggae & Dancehall",
    homepage: "https://tunein.com/radio/s206776/",
    style: "vocal",
    group: "reggae-dancehall"
  },
  {
    id: "ti-s266682",
    name: "3ABN Radio Music Channel (Marion-Carbondale - IL)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "http://war.str3am.com:7180/MC01",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s266682/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s54344",
    name: "Cape Christian Radio",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "http://ice64.securenetsystems.net/CCR1MP3",
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s54344/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s128893",
    name: "CBN Gospel (Virginia Beach - VA)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://streams.cbnradio.com/gospel-128K?app=tunein",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s128893/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s149133",
    name: "Christian Hits K-True (La Harpe - KS)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "http://hestia.cdnstream.com/1569_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s149133/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s112984",
    name: "Christian Life Radio",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "http://ice64.securenetsystems.net/CLR1MP3",
    codec: "",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s112984/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s209918",
    name: "ChristianClassicRock.Net (Springfield - MO)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://shoutcast.christianrock.net/stream/9/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s209918/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s98542",
    name: "ChristianPowerPraise.Net (Springfield - MO)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://shoutcast.christianrock.net/stream/7/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s98542/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s235774",
    name: "DOC Radio - Christian Hits",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://server10.reliastream.com/proxy/docradio/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s235774/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s159780",
    name: "Gospel Hits - Urbanradio.com (Atlanta - GA)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "http://hydra.cdnstream.com/1535_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s159780/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s67045",
    name: "GPraise - WPOZ-HD3 (Orlando - FL)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "http://ice.zradio.org/g/high.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s67045/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s67217",
    name: "Hot 95.9 - WPOZ-HD2 (Orlando - FL)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://ice.zradio.org/h/high.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s67217/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s140612",
    name: "JewishMusic Stream",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://stream.jewishmusicstream.com:8000/;",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s140612/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s31919",
    name: "KBYR FM (Rexburg - ID)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://radiostream.byui.edu/kbyr",
    codec: "aac",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s31919/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s34411",
    name: "OASIS NETWORK (Tulsa - OK)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://oasis.streamguys1.com/live-mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s34411/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s21886",
    name: "Rejoice Radio (Pensacola - FL)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://rejoice.primcast.com/proxy/rejoice_google/Rejoice",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s21886/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s21764",
    name: "Shine.FM (Kankakee - IL)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://mist.olivet.edu/shine128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s21764/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s3223",
    name: "SOS Radio Network (Las Vegas - NV)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://ais-sa15.cdnstream1.com/4862_128.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s3223/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s129505",
    name: "The Christian Mix",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "http://199.180.72.2:10572/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s129505/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s27570",
    name: "The Q90.1 (Charlton - MA)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "http://streams.radio.co/s34176e739/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s27570/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s228347",
    name: "TheRockHD (Orlando - FL)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://ice.zradio.org/r/high.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s228347/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s2651",
    name: "UCB 1 (UK)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://listen-ucb.sharp-stream.com/55_ucb_1_128_mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s2651/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s6933",
    name: "UCB 2 (UK)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://listen-ucb.sharp-stream.com/55_ucb_2_128_mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s6933/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s22075",
    name: "WGBN (Pittsburgh - PA)",
    source: "TuneIn",
    detail: "Vocal · Religious Music",
    image: null,
    streamUrl: "https://streaming.live365.com/a42440",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Religious Music",
    homepage: "https://tunein.com/radio/s22075/",
    style: "vocal",
    group: "religious-music"
  },
  {
    id: "ti-s162354",
    name: "8Radio (Ireland)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "https://edge4.audioxi.com/8RADIO",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s162354/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s221580",
    name: "AlternativeRadio.us (US)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "http://audiovision.cdnstream1.com/2154_128.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s221580/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s188877",
    name: "Asterisk Radio (San Diego - CA)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "https://usa6.fastcast4u.com/proxy/bigfeat2?mp=/1",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s188877/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s256973",
    name: "Blown (Canada)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "https://ais-sa2.cdnstream1.com/1370_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s256973/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s226064",
    name: "Classic Rock 109 (Cincinnati - OH)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "https://broadcast.classicrock109.com/cr109",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s226064/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s291748",
    name: "Hard Rock Heaven (Los Angeles - CA)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "https://ais-sa2.cdnstream1.com/1521_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s291748/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s32961",
    name: "KUTX 98.9 (Leander - TX)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "https://streams.kut.org/4428_192.mp3?aw_0_1st.playerid=kutx-tunein",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s32961/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s237470",
    name: "METAL SHOP (Portland - OR)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "https://cheetah.streemlion.com:1945/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s237470/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s30842",
    name: "QFM96 (Columbus - OH)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "https://live.amperwave.net/direct/saga-wlvqfmmp3-ibc2?source=TuneIn&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s30842/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s10517",
    name: "Radio Caroline (UK)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "http://sc6.radiocaroline.net:8040/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s10517/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s35908",
    name: "The North 103.3 (Duluth-Superior - MN)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "https://thenorth1033.streamguys1.com/live",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s35908/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s24231",
    name: "The Peak (Briarcliff Manor - NY)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "http://ais-sa1.streamon.fm/7836_128k.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk0NywiaXNzIjoidGlzcnYifQ.brC0-YeQJ6gOoQnbJKbFPxIeo1LfPb5GwHOfWwIeLxI",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s24231/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s257972",
    name: "W3Z HOTLINE (New Orleans - LA)",
    source: "TuneIn",
    detail: "Vocal · Rock Music",
    image: null,
    streamUrl: "https://fwd.autopo.st/w3zhotline",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Rock Music",
    homepage: "https://tunein.com/radio/s257972/",
    style: "vocal",
    group: "rock-music"
  },
  {
    id: "ti-s283763",
    name: "Crackers Radio (London - UK)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "http://comet.shoutca.st:8334/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s283763/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s277730",
    name: "G&G Southern Soul Radio 24/7 (Midway - FL)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "https://usa19.fastcast4u.com:5230/;?type=http&nocache=1677734565",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s277730/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s199317",
    name: "Global RnB (Richmond - VA)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "https://s5.radio.co/sf02cf450a/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s199317/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s159772",
    name: "Greatest Hits of R&B - Urbanradio.com (Atlanta - GA)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "http://hydra.cdnstream.com/1534_backup",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s159772/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s159778",
    name: "Old School R&B - Urbanradio.com (Atlanta - GA)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "http://hydra.cdnstream.com/1540_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s159778/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s103084",
    name: "Smooth Motion FM (Montreal - Canada)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "https://vm.motionfm.com/motiontwo_free",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s103084/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s159769",
    name: "Smooth R&B (Atlanta - GA)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "http://hydra.cdnstream.com/1541_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s159769/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s297137",
    name: "Soul 105.7 (Lafayette - LA)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "https://securestreams.onlineradiostation.co:8000/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s297137/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s267618",
    name: "Soul Good Radio (Salt Lake City - UT)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "https://c3.radioboss.fm:8090/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s267618/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s54913",
    name: "Soulconnexion Radio (UK)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "https://stream.soulconnexionradio.com/1045",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s54913/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s295080",
    name: "Sunshine Soul (Ireland)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/SUNSHINE_SOUL.mp3?dist=tunein",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s295080/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s273904",
    name: "Super Throwback Party R&B Playlist (Houston-Galveston - TX)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "https://ais-sa2.cdnstream1.com/1543_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s273904/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s43695",
    name: "The ViBE (Roanoke-Lynchburg - VA)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "https://live.amperwave.net/direct/wheelerbroadcasting-wvbefmmp3-imc4?source=TuneIn&gdpr=0",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s43695/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s159773",
    name: "Today's R&B - Urbanradio.com (Atlanta - GA)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "http://hydra.cdnstream.com/1531_128",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s159773/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s254798",
    name: "Totally Wired Radio (London - UK)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "http://totallywired.out.airtime.pro:8000/totallywired_a",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s254798/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s257560",
    name: "Ubiquity Radio (London - UK)",
    source: "TuneIn",
    detail: "Vocal · Soul & R&B",
    image: null,
    streamUrl: "https://listen.openstream.co/3172",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Soul & R&B",
    homepage: "https://tunein.com/radio/s257560/",
    style: "vocal",
    group: "soul-r-b"
  },
  {
    id: "ti-s67855",
    name: "Diverse FM (Luton - UK)",
    source: "TuneIn",
    detail: "Vocal · Top 40 & Pop Music",
    image: null,
    streamUrl: "https://icecast.mediaice.co.uk/DiverseMP3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Top 40 & Pop Music",
    homepage: "https://tunein.com/radio/s67855/",
    style: "vocal",
    group: "top-40-pop-music"
  },
  {
    id: "ti-s299317",
    name: "OMG! Omega Sound Radio (New Orleans - LA)",
    source: "TuneIn",
    detail: "Vocal · Top 40 & Pop Music",
    image: null,
    streamUrl: "https://stream.rcast.net/65801",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Top 40 & Pop Music",
    homepage: "https://tunein.com/radio/s299317/",
    style: "vocal",
    group: "top-40-pop-music"
  },
  {
    id: "ti-s127108",
    name: "Radio New York Live (US)",
    source: "TuneIn",
    detail: "Vocal · Top 40 & Pop Music",
    image: null,
    streamUrl: "https://streaming.radiostreamlive.com/radionylive_devices",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Top 40 & Pop Music",
    homepage: "https://tunein.com/radio/s127108/",
    style: "vocal",
    group: "top-40-pop-music"
  },
  {
    id: "ti-s31121",
    name: "The Fox 99.9 (Sarnia - Canada)",
    source: "TuneIn",
    detail: "Vocal · Top 40 & Pop Music",
    image: null,
    streamUrl: "https://blackburn-ais.leanstream.co/CFGXFM-MP3?args=tuneIn_01&DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk0MSwiaXNzIjoidGlzcnYifQ.nLcT3EkJ8BxMHmU5257XMMs787KOwNqIDvX1MHpNVfg",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Top 40 & Pop Music",
    homepage: "https://tunein.com/radio/s31121/",
    style: "vocal",
    group: "top-40-pop-music"
  },
  {
    id: "ti-s24692",
    name: "Z99 Regina (Zed 99) (Regina - Canada)",
    source: "TuneIn",
    detail: "Vocal · Top 40 & Pop Music",
    image: null,
    streamUrl: "https://rawlco.leanstream.co/CIZLFM-MP3?args=tunein_01",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Top 40 & Pop Music",
    homepage: "https://tunein.com/radio/s24692/",
    style: "vocal",
    group: "top-40-pop-music"
  },
  {
    id: "ti-s45494",
    name: "CRMK (Northampton - UK)",
    source: "TuneIn",
    detail: "Vocal · Variety",
    image: null,
    streamUrl: "https://stream.radio.co/sdfcc41b7a/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Variety",
    homepage: "https://tunein.com/radio/s45494/",
    style: "vocal",
    group: "variety"
  },
  {
    id: "ti-s301896",
    name: "Fishnet Radio (UK)",
    source: "TuneIn",
    detail: "Vocal · Variety",
    image: null,
    streamUrl: "https://stream.radio.co/s74e130a62/listen",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Variety",
    homepage: "https://tunein.com/radio/s301896/",
    style: "vocal",
    group: "variety"
  },
  {
    id: "ti-s214826",
    name: "Harbour Radio (Norwich - UK)",
    source: "TuneIn",
    detail: "Vocal · Variety",
    image: null,
    streamUrl: "http://stream.radiojar.com/pkzd477ccchvv",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Variety",
    homepage: "https://tunein.com/radio/s214826/",
    style: "vocal",
    group: "variety"
  },
  {
    id: "ti-s121010",
    name: "HM Radio (US)",
    source: "TuneIn",
    detail: "Vocal · Variety",
    image: null,
    streamUrl: "http://haimusique3.primcast.com:9996",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Variety",
    homepage: "https://tunein.com/radio/s121010/",
    style: "vocal",
    group: "variety"
  },
  {
    id: "ti-s31466",
    name: "KAOS (Seattle-Tacoma - WA)",
    source: "TuneIn",
    detail: "Vocal · Variety",
    image: null,
    streamUrl: "http://205.134.192.90:8930/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Variety",
    homepage: "https://tunein.com/radio/s31466/",
    style: "vocal",
    group: "variety"
  },
  {
    id: "ti-s298813",
    name: "Kaptn' K's Clever Way (US)",
    source: "TuneIn",
    detail: "Vocal · Variety",
    image: null,
    streamUrl: "http://kleverway.ddns.net:8000/",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Variety",
    homepage: "https://tunein.com/radio/s298813/",
    style: "vocal",
    group: "variety"
  },
  {
    id: "ti-s116689",
    name: "Penistone FM (Penistone - UK)",
    source: "TuneIn",
    detail: "Vocal · Variety",
    image: null,
    streamUrl: "https://radio.canstream.co.uk:8021/live.mp3",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Variety",
    homepage: "https://tunein.com/radio/s116689/",
    style: "vocal",
    group: "variety"
  },
  {
    id: "ti-s9634",
    name: "Radio Kerry (Tralee - Ireland)",
    source: "TuneIn",
    detail: "Vocal · Variety",
    image: null,
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_KERRY.mp3?dist=tunein&DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc5NDYyMDk5OSwiaXNzIjoidGlzcnYifQ.Rz7tF2ZLIJTXgx1BPX-RUTzeUevQl-DzmgbSl6G40Ow",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Variety",
    homepage: "https://tunein.com/radio/s9634/",
    style: "vocal",
    group: "variety"
  },
  {
    id: "ti-s237703",
    name: "Retro Radio (Canada)",
    source: "TuneIn",
    detail: "Vocal · Variety",
    image: null,
    streamUrl: "https://puma.streemlion.com:5345/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Variety",
    homepage: "https://tunein.com/radio/s237703/",
    style: "vocal",
    group: "variety"
  },
  {
    id: "ti-s28704",
    name: "WFCS 107.7 The Edge (New Britain - CT)",
    source: "TuneIn",
    detail: "Vocal · Variety",
    image: null,
    streamUrl: "http://edge.mixlr.com/channel/umcqh",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Variety",
    homepage: "https://tunein.com/radio/s28704/",
    style: "vocal",
    group: "variety"
  },
  {
    id: "ti-s291919",
    name: "WKDMJAZZDETROITRADIO (US)",
    source: "TuneIn",
    detail: "Vocal · Variety",
    image: null,
    streamUrl: "http://wkdmjazzdetroit.out.airtime.pro:8000/wkdmjazzdetroit_b",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, Variety",
    homepage: "https://tunein.com/radio/s291919/",
    style: "vocal",
    group: "variety"
  },
  {
    id: "ti-s104346",
    name: "Black Cat Radio (UK)",
    source: "TuneIn",
    detail: "Vocal · World Music",
    image: null,
    streamUrl: "https://s5.voscast.com:9097/stream",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Vocal, TuneIn, World Music",
    homepage: "https://tunein.com/radio/s104346/",
    style: "vocal",
    group: "world-music"
  },
  {
    id: "vcr-auditorium",
    name: "VCR Auditorium",
    source: "Venice Classic Radio",
    detail: "Classical",
    image: "https://veniceclassicradio.eu/logo/logo-vcr-auditorium-round.svg",
    streamUrl: "https://uk2.streamingpulse.com/ssl/vcr1",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Venice Classic Radio, Classical",
    homepage: "https://veniceclassicradio.eu/",
    style: "classical",
    group: "venice-classic-radio"
  },
  {
    id: "vcr-classica-plus",
    name: "VCR Classica+",
    source: "Venice Classic Radio",
    detail: "Classical",
    image: "https://veniceclassicradio.eu/logo/logo-vcr-classica-piu-round.svg",
    streamUrl: "https://uk2.streamingpulse.com/ssl/vcr2",
    codec: "mp3",
    bitrate: 0,
    uuid: null,
    tags: "Venice Classic Radio, Classical",
    homepage: "https://veniceclassicradio.eu/",
    style: "classical",
    group: "venice-classic-radio"
  },
  {
    id: "ti-s24860",
    name: "DR P1",
    group: "dr",
    source: "TuneIn",
    detail: "DR · 128 kbps mp3",
    image: null,
    streamUrl: "https://live-icy.dr.dk/A/A03H.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "DR, Talk, Vocal",
    homepage: "https://www.dr.dk/lyd/p1",
    style: "vocal"
  },
  {
    id: "ti-s37197",
    name: "DR P2 Klassisk",
    group: "dr",
    source: "TuneIn",
    detail: "DR · 128 kbps mp3",
    image: null,
    streamUrl: "https://live-icy.dr.dk/A/A04H.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "DR, Classical, Instrumental",
    homepage: "https://www.dr.dk/lyd/p2",
    style: "instrumental"
  },
  {
    id: "ti-s24861",
    name: "DR P3",
    group: "dr",
    source: "TuneIn",
    detail: "DR · 128 kbps mp3",
    image: null,
    streamUrl: "https://live-icy.dr.dk/A/A05H.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "DR, Pop, Vocal",
    homepage: "https://www.dr.dk/lyd/p3",
    style: "vocal"
  },
  {
    id: "ti-s69060",
    name: "DR P5",
    group: "dr",
    source: "TuneIn",
    detail: "DR · 128 kbps mp3",
    image: null,
    streamUrl: "https://live-icy.dr.dk/A/A25H.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "DR, Vocal",
    homepage: "https://www.dr.dk/lyd/p5",
    style: "vocal"
  },
  {
    id: "ti-s45455",
    name: "DR P6 Beat",
    group: "dr",
    source: "TuneIn",
    detail: "DR · 128 kbps mp3",
    image: null,
    streamUrl: "https://live-icy.dr.dk/A/A29H.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "DR, Beat, Vocal",
    homepage: "https://www.dr.dk/lyd/p6beat",
    style: "vocal"
  },
  {
    id: "ti-s36105",
    name: "DR P8 Jazz",
    group: "dr",
    source: "TuneIn",
    detail: "DR · 128 kbps mp3",
    image: null,
    streamUrl: "https://live-icy.dr.dk/A/A22H.mp3",
    codec: "mp3",
    bitrate: 128,
    uuid: null,
    tags: "DR, Jazz, Instrumental",
    homepage: "https://www.dr.dk/lyd/p8jazz",
    style: "instrumental"
  }
], kp = {
  groups: Jy,
  stations: jy
};
function Gy(e) {
  return {
    id: e.id,
    name: e.name,
    detail: e.detail,
    image: e.image || void 0,
    source: e.source,
    streamUrl: e.streamUrl || void 0,
    tags: e.tags || void 0,
    homepage: e.homepage || void 0
  };
}
var Wy = kp.groups, Ky = kp.stations, ta = Wy.map((e) => ({
  id: e.id,
  name: e.name,
  source: e.source,
  stations: Ky.filter((n) => n.group === e.id).map(Gy)
})), Wl = ta.flatMap((e) => e.stations);
function Bp(e) {
  try {
    const n = new URL(e);
    let a = n.hostname.toLowerCase().replace(/^www\./, "");
    /^ice\d+\.somafm\.com$/.test(a) && (a = "somafm.com");
    const o = n.port && n.port !== "80" && n.port !== "443" ? `:${n.port}` : "", r = n.pathname.replace(/\/+$/, "").toLowerCase();
    return `${a}${o}${r}`;
  } catch {
    return e.trim().toLowerCase();
  }
}
var $y = new Map(Wl.map((e) => [e.id, e])), Xy = new Map(Wl.flatMap((e) => e.streamUrl ? [[Bp(e.streamUrl), e]] : []));
function Zy(e) {
  const n = $y.get(e.id);
  if (n) return n;
  if (e.streamUrl)
    return Xy.get(Bp(e.streamUrl));
}
function Yy(e) {
  const n = e.trim().toLowerCase();
  if (!n) return [];
  const a = [], o = [];
  for (const r of Wl) r.name.toLowerCase().includes(n) ? a.push(r) : `${r.detail}
${r.tags ?? ""}`.toLowerCase().includes(n) && o.push(r);
  return [...a, ...o];
}
var Qy = "https://all.api.radio-browser.info/json", qp = "https://opml.radiotime.com", eT = "https://somafm.com/channels.json", tT = "https://dir.xiph.org/yp.xml", nT = [
  "https://iptv-org.github.io/iptv/index.radio.m3u",
  "https://iptv-org.github.io/index.radio.m3u",
  "https://iptv-org.github.io/iptv/categories/radio.m3u"
], iT = 24 * 3600 * 1e3, aT = 600 * 1e3, Hp = 40, Vo = (e) => e?.replace(/^http:\/\//, "https://"), Vt = (e) => typeof e == "string" ? e.trim() : "", Jp = (e) => /^https?:\/\/\S+$/i.test(e);
function jp(e) {
  let n = 14695981039346656037n;
  for (const a of new TextEncoder().encode(e)) n = (n ^ BigInt(a)) * 1099511628211n & 18446744073709551615n;
  return n.toString(16);
}
function sT(e) {
  return e.filter((n) => n?.url_resolved && n?.name?.trim()).map((n) => ({
    id: `rb-${n.stationuuid}`,
    name: n.name.trim(),
    detail: [
      n.country,
      n.codec,
      n.bitrate ? `${n.bitrate} kbps` : ""
    ].filter(Boolean).join(" · "),
    image: Vo(n.favicon) || void 0,
    source: "Radio Browser",
    streamUrl: n.url_resolved
  }));
}
function oT(e) {
  return e.filter((n) => n?.type === "audio" && n?.item === "station" && n?.guide_id).map((n) => ({
    id: `ti-${n.guide_id}`,
    name: n.text,
    detail: [n.subtext, n.bitrate ? `${n.bitrate} kbps` : ""].filter(Boolean).join(" · "),
    image: Vo(n.image),
    source: "TuneIn"
  }));
}
function rT(e) {
  const n = Array.isArray(e?.channels) ? e.channels : [], a = /* @__PURE__ */ new Set(), o = [];
  for (const r of n) {
    const u = Vt(r?.id), m = Vt(r?.title), p = (Array.isArray(r?.playlists) ? r.playlists : []).find((C) => Vt(C?.format).toLowerCase() === "mp3" && Vt(C?.url));
    if (!u || !m || !p || a.has(u)) continue;
    a.add(u);
    const f = Vt(r.genre).split("|").map((C) => C.trim()).filter(Boolean);
    o.push({
      id: `sm-${u}`,
      name: m,
      detail: [f.join(", "), Vt(r.description)].filter(Boolean).join(" · "),
      image: Vo(Vt(r.xlimage) || Vt(r.largeimage) || Vt(r.image) || void 0),
      source: "SomaFM",
      streamUrl: Vt(p.url)
    });
  }
  return o;
}
var lT = /* @__PURE__ */ new Set([
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
function uT(e) {
  const n = [];
  for (const a of e.toLowerCase().split(/[^\p{L}\p{N}]+/u))
    if (a.length >= 3 && !lT.has(a) && !n.includes(a) && n.push(a), n.length === 5) break;
  return n;
}
function cT(e) {
  const n = Vt(e.listen_url), a = Vt(e.server_name);
  if (!a || !Jp(n)) return;
  const o = (e.server_type ?? "").toLowerCase(), r = o.includes("aacp") ? "aac+" : o.includes("aac") ? "aac" : o.includes("mpeg") || o.includes("mp3") ? "mp3" : o.includes("ogg") || o.includes("vorbis") ? "ogg" : o.includes("opus") ? "opus" : "", u = parseInt(Vt(e.bitrate), 10);
  return {
    id: `ic-${jp(n)}`,
    name: a,
    detail: [
      r,
      u > 0 ? `${u} kbps` : "",
      uT(e.genre ?? "").join(", ")
    ].filter(Boolean).join(" · "),
    source: "Icecast",
    streamUrl: n
  };
}
var Gp = [
  "server_name",
  "server_type",
  "bitrate",
  "listen_url",
  "genre"
];
function mT(e) {
  return e.replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (n, a) => {
    const o = a.toLowerCase();
    if (o === "amp") return "&";
    if (o === "lt") return "<";
    if (o === "gt") return ">";
    if (o === "quot") return '"';
    if (o === "apos") return "'";
    const r = o[1] === "x" ? parseInt(o.slice(2), 16) : parseInt(o.slice(1), 10);
    try {
      return String.fromCodePoint(r);
    } catch {
      return n;
    }
  });
}
function dT(e) {
  const n = new DOMParser().parseFromString(e, "text/xml");
  if (n.getElementsByTagName("parsererror").length) throw new Error("Icecast feed could not be parsed");
  return Array.from(n.getElementsByTagName("entry")).map((a) => {
    const o = {};
    for (const r of Gp) {
      const u = a.getElementsByTagName(r)[0];
      u && (o[r] = u.textContent ?? "");
    }
    return o;
  });
}
function pT(e) {
  const n = [];
  for (const a of e.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/g)) {
    const o = {};
    for (const r of Gp) {
      const u = new RegExp(`<${r}\\b[^>]*>([\\s\\S]*?)</${r}>`).exec(a[1]);
      u && (o[r] = u[1].split(/(<!\[CDATA\[[\s\S]*?\]\]>)/).map((m) => m.startsWith("<![CDATA[") ? m.slice(9, -3) : mT(m)).join(""));
    }
    n.push(o);
  }
  return n;
}
function gT(e) {
  const n = typeof DOMParser < "u" ? dT(e) : pT(e), a = /* @__PURE__ */ new Set(), o = [];
  for (const r of n) {
    const u = cT(r);
    u && !a.has(u.streamUrl) && (a.add(u.streamUrl), o.push(u));
  }
  return o;
}
function hT(e) {
  const n = {};
  let a = "", o = "", r = !1, u = !1, m = -1;
  for (let p = Math.max(e.indexOf(" "), 0); p < e.length; p++) {
    const f = e[p];
    if (r) f === '"' ? (r = !1, n[a.toLowerCase()] = o, a = "", o = "", u = !1) : o += f;
    else if (f === ",") {
      m = p + 1;
      break;
    } else f === '"' ? r = !0 : f === "=" ? u = !0 : f === " " ? a = "" : u || (a += f);
  }
  return {
    attrs: n,
    name: m >= 0 ? e.slice(m).trim() : ""
  };
}
function fT(e) {
  const n = [], a = /* @__PURE__ */ new Set();
  let o;
  for (const r of e.split(/\r?\n/)) {
    const u = r.trim();
    if (u.startsWith("#EXTINF")) o = hT(u);
    else {
      if (!u || u.startsWith("#")) continue;
      if (o) {
        const m = o;
        if (o = void 0, !Jp(u) || !m.name || a.has(u)) continue;
        a.add(u);
        const p = (m.attrs["group-title"] ?? "").split(";").map((T) => T.trim()).filter(Boolean), f = m.attrs["tvg-id"]?.split(".").pop()?.split("@")[0] ?? "", C = m.attrs["tvg-id"]?.includes(".") && f.length === 2 ? f.toUpperCase() : "";
        n.push({
          id: `iptv-${jp(u)}`,
          name: m.name,
          detail: [C, p.join(", ")].filter(Boolean).join(" · "),
          image: Vo(m.attrs["tvg-logo"] || void 0),
          source: "iptv-org",
          streamUrl: u
        });
      }
    }
  }
  return n;
}
function IT(e) {
  const n = [];
  for (const a of e.split(/\r?\n/)) {
    let o = a.trim();
    !o || o.startsWith("#") || (/^file\d+=/i.test(o) && (o = o.replace(/^file\d+=/i, "").trim()), /^https?:\/\//i.test(o) && n.push(o));
  }
  return n;
}
function bT(e) {
  try {
    const n = new URL(e);
    if (n.protocol !== "http:") return;
    n.protocol = "https:", n.port === "80" && (n.port = "");
    const a = n.toString();
    return a === e ? void 0 : a;
  } catch {
    return;
  }
}
function vl(e) {
  try {
    const n = new URL(e).pathname.toLowerCase();
    return n.endsWith(".m3u") || n.endsWith(".m3u8") || n.endsWith(".pls");
  } catch {
    return !1;
  }
}
function Wp(e) {
  try {
    return new URL(e).pathname.toLowerCase().endsWith(".m3u8");
  } catch {
    return !1;
  }
}
function yl(e) {
  const n = /* @__PURE__ */ new Set(), a = [];
  for (const o of e)
    !o || n.has(o) || (n.add(o), a.push(o));
  return a;
}
function Ks(e) {
  const n = bT(e);
  return n ? [n, e] : [e];
}
async function Kp(e) {
  const n = await fetch(e);
  if (!n.ok) throw new Error(`${n.status} from ${e}`);
  return n.text();
}
var Kl = class {
  constructor(e, n) {
    Ci(this, "key", void 0), Ci(this, "download", void 0), Ci(this, "stations", []), Ci(this, "fetched", 0), Ci(this, "inflight", void 0), Ci(this, "lastFailure", void 0), Ci(this, "diskChecked", !1), this.key = e, this.download = n;
  }
  loadDisk() {
    if (!this.diskChecked) {
      this.diskChecked = !0;
      try {
        const e = JSON.parse(localStorage.getItem(this.key) ?? "null");
        e && Array.isArray(e.stations) && typeof e.fetched == "number" && (this.stations = e.stations, this.fetched = e.fetched);
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
    const e = await this.download();
    if (!e.length) throw new Error("feed had no stations");
    this.stations = e, this.fetched = Date.now(), this.lastFailure = void 0, this.saveDisk();
  }
  async all() {
    if (this.loadDisk(), this.stations.length && Date.now() - this.fetched < iT) return this.stations;
    if (!this.inflight) {
      if (this.lastFailure && Date.now() - this.lastFailure.at < aT) {
        if (this.stations.length) return this.stations;
        throw this.lastFailure.error;
      }
      this.inflight = this.refresh().catch((e) => {
        throw this.lastFailure = {
          at: Date.now(),
          error: e
        }, e;
      }).finally(() => this.inflight = void 0);
    }
    try {
      await this.inflight;
    } catch (e) {
      if (!this.stations.length) throw e;
    }
    return this.stations;
  }
  async search(e, n = Hp) {
    return vT(await this.all(), e, n);
  }
};
function vT(e, n, a = Hp) {
  const o = n.trim().toLowerCase();
  if (!o) return [];
  const r = (p) => `${p.detail}
${p.tags ?? ""}`.toLowerCase(), u = e.filter((p) => p.name.toLowerCase().includes(o)), m = e.filter((p) => !p.name.toLowerCase().includes(o) && r(p).includes(o));
  return [...u, ...m].slice(0, a);
}
var yT = new Kl("radio.somafm.v1", async () => rT(await Eo(eT))), TT = new Kl("radio.icecast.v1", async () => gT(await Kp(tT))), _T = new Kl("radio.iptvorg.v1", async () => {
  let e = /* @__PURE__ */ new Error("iptv-org radio playlist is not available");
  for (const n of nT) try {
    const a = await Kp(n);
    if (!a.includes("#EXTM3U")) throw new Error(`${n} is not an M3U playlist`);
    return fT(a);
  } catch (a) {
    e = a;
  }
  throw e;
});
async function Eo(e) {
  const n = await fetch(e);
  if (!n.ok) throw new Error(`${n.status} from ${e}`);
  return n.json();
}
async function wT(e) {
  return sT(await Eo(`${Qy}/stations/search?${new URLSearchParams({
    name: e,
    limit: "40",
    hidebroken: "true",
    order: "clickcount",
    reverse: "true"
  })}`));
}
async function CT(e) {
  return oT((await Eo(`${qp}/Search.ashx?${new URLSearchParams({
    query: e,
    types: "station",
    render: "json"
  })}`)).body ?? []);
}
async function RT(e) {
  const n = [
    ["TuneIn", CT(e)],
    ["Radio Browser", wT(e)],
    ["SomaFM", yT.search(e)],
    ["Icecast", TT.search(e)],
    ["iptv-org", _T.search(e)]
  ], a = await Promise.allSettled(n.map(([, m]) => m)), o = [], r = [], u = /* @__PURE__ */ new Set();
  for (const m of Yy(e))
    u.has(m.id) || (u.add(m.id), o.push(m));
  return a.forEach((m, p) => {
    if (m.status === "fulfilled") for (const f of m.value) {
      const C = Zy(f) ?? f;
      u.has(C.id) || (u.add(C.id), o.push(C));
    }
    else
      console.warn(`[radio] ${n[p][0]} search failed`, m.reason), r.push(n[p][0]);
  }), {
    stations: o,
    failed: r
  };
}
function UT(e) {
  const n = [];
  for (const a of e ?? []) {
    const o = a?.url;
    typeof o == "string" && o && !/notcompatible/i.test(o) && n.push(o);
  }
  return n;
}
async function ST(e) {
  try {
    const n = await fetch(e, { signal: AbortSignal.timeout(8e3) });
    return n.ok ? await n.text() : void 0;
  } catch {
    return;
  }
}
async function AT(e) {
  const n = new AbortController(), a = setTimeout(() => n.abort(), 8e3);
  try {
    const o = await fetch(e, {
      signal: n.signal,
      headers: { Range: "bytes=0-8191" }
    });
    if (!o.ok && o.status !== 206) return !1;
    const r = (o.headers.get("content-type") ?? "").toLowerCase();
    if (r.includes("audio/") || r.includes("mpegurl") || r.includes("scpls")) return !0;
    const u = o.body?.getReader();
    if (!u) return !1;
    const { value: m } = await u.read();
    return await u.cancel().catch(() => {
    }), !m || m.length < 2 ? !1 : m[0] === 73 && m[1] === 68 && m[2] === 51 || m[0] === 255 && (m[1] & 224) === 224 ? !0 : new TextDecoder().decode(m.slice(0, 12)).startsWith("#EXTM3U");
  } catch {
    return !1;
  } finally {
    clearTimeout(a);
  }
}
async function VT(e) {
  if (Wp(e) || !vl(e)) return Ks(e);
  let n;
  for (const o of Ks(e))
    if (n = await ST(o), n) break;
  const a = n ? IT(n) : [];
  return a.length ? yl(a.flatMap((o) => Ks(o))) : Ks(e);
}
async function ET(e) {
  const n = e.streamUrl;
  if (n && !vl(n) && n.startsWith("https://")) return n;
  const a = [];
  if (e.id.startsWith("ti-")) try {
    const o = e.id.replace(/^ti-/, ""), r = await Eo(`${qp}/Tune.ashx?${new URLSearchParams({
      id: o,
      render: "json"
    })}`);
    a.push(...UT(r.body ?? []));
  } catch (o) {
    console.warn("[radio] TuneIn lookup failed", o);
  }
  n && a.push(n);
  for (const o of yl((await Promise.all(yl(a).map(VT))).flat()))
    if (!(vl(o) && !Wp(o)) && await AT(o))
      return o;
  if (n) return n;
  throw new Error("TuneIn gave no playable stream for this station");
}
var on = /* @__PURE__ */ tn(null), Mi = /* @__PURE__ */ tn("stopped"), $l = /* @__PURE__ */ tn(0.8), Tl = /* @__PURE__ */ tn(""), Je = new Audio();
Je.preload = "none";
Je.volume = $l.value;
Je.addEventListener("playing", () => Mi.value = "playing");
Je.addEventListener("waiting", () => {
  on.value && (Mi.value = "connecting");
});
Je.addEventListener("error", () => {
  on.value && (Mi.value = "failed");
});
var ao = "default";
async function NT() {
  try {
    const e = Gl().config.getRef()?.audio?.deviceOutput, n = Je;
    if (!e || typeof n.setSinkId != "function") {
      ao = e ? "unsupported" : "default";
      return;
    }
    await n.setSinkId(e), ao = e === "default" ? "default" : e.slice(0, 8);
  } catch (e) {
    console.warn("[radio] could not set output device", e), ao = `failed: ${e?.name ?? "error"}`;
  }
}
setInterval(() => {
  if (!on.value) {
    Tl.value = "";
    return;
  }
  Tl.value = [
    `time ${Je.currentTime.toFixed(1)}s`,
    `paused ${Je.paused}`,
    `ready ${Je.readyState}`,
    `network ${Je.networkState}`,
    `volume ${Je.volume.toFixed(2)}`,
    `muted ${Je.muted}`,
    `output ${ao}`,
    `error ${Je.error?.code ?? "none"}`
  ].join(" | ");
}, 1e3);
function MT() {
  try {
    Fp?.pause?.();
  } catch (e) {
    console.warn("[radio] could not pause Apple Music", e);
  }
}
async function OT(e) {
  on.value = e, Mi.value = "connecting", MT();
  try {
    const n = await ET(e);
    if (on.value?.id !== e.id) return;
    await NT(), Je.muted = !1, Je.src = n, await Je.play();
  } catch (n) {
    console.warn("[radio] playback failed", n), on.value?.id === e.id && (Mi.value = "failed");
  }
}
function Io() {
  Je.pause(), Je.removeAttribute("src"), Je.load(), on.value = null, Mi.value = "stopped";
}
function zT(e) {
  $l.value = e, Je.volume = e;
}
function PT() {
  Fp?.addEventListener?.("playbackStateDidChange", (e) => {
    e?.state === 2 && on.value && Io();
  });
}
var DT = { class: "q-pa-lg radio-page" }, xT = ["disabled"], LT = {
  key: 0,
  class: "radio-now",
  "aria-live": "polite"
}, FT = { class: "radio-now-text" }, kT = { class: "radio-diagnostics" }, BT = ["value"], qT = {
  key: 1,
  class: "radio-library"
}, HT = { class: "radio-note" }, JT = {
  class: "radio-groups",
  role: "tablist",
  "aria-label": "Free Radio groups"
}, jT = ["aria-selected", "onClick"], GT = {
  key: 2,
  class: "radio-note"
}, WT = { class: "radio-list" }, KT = ["onClick"], $T = ["src"], XT = { class: "radio-name" }, ZT = { class: "radio-detail" }, YT = { class: "radio-source" }, QT = /* @__PURE__ */ sp({
  __name: "RadioPage",
  setup(e) {
    const n = /* @__PURE__ */ tn(""), a = /* @__PURE__ */ tn([]), o = /* @__PURE__ */ tn([]), r = /* @__PURE__ */ tn(!1), u = /* @__PURE__ */ tn(!1), m = /* @__PURE__ */ tn(ta[0]?.id ?? ""), p = ta.reduce((V, P) => V + P.stations.length, 0), f = io(() => ta.find((V) => V.id === m.value) ?? ta[0]), C = io(() => u.value ? a.value : f.value?.stations ?? []);
    Oa(n, (V) => {
      V.trim() || (u.value = !1, a.value = [], o.value = []);
    });
    const T = io(() => ({
      stopped: "Stopped",
      connecting: "Connecting…",
      playing: "Playing",
      failed: "This station wouldn't play. Try another one."
    })[Mi.value]);
    async function y() {
      const V = n.value.trim();
      if (!V) return;
      r.value = !0;
      const P = await RT(V);
      a.value = P.stations, o.value = P.failed, r.value = !1, u.value = !0;
    }
    return (V, P) => (Gt(), en("div", DT, [
      P[5] || (P[5] = ke("h1", { class: "apple-heading" }, "Radio", -1)),
      ke("form", {
        class: "radio-search",
        onSubmit: Uy(y, ["prevent"])
      }, [Ob(ke("input", {
        "onUpdate:modelValue": P[0] || (P[0] = (q) => n.value = q),
        type: "search",
        placeholder: "Search stations",
        "aria-label": "Search stations"
      }, null, 512), [[wy, n.value]]), ke("button", {
        class: "c-btn",
        type: "submit",
        disabled: r.value
      }, jt(r.value ? "Searching…" : "Search"), 9, xT)], 32),
      At(on) ? (Gt(), en("section", LT, [
        ke("div", FT, [
          ke("strong", null, jt(At(on).name), 1),
          ke("span", null, jt(T.value), 1),
          ke("small", kT, jt(At(Tl)), 1)
        ]),
        ke("label", null, [P[3] || (P[3] = hl(" Volume ", -1)), ke("input", {
          type: "range",
          min: "0",
          max: "1",
          step: "0.05",
          value: At($l),
          onInput: P[1] || (P[1] = (q) => At(zT)(Number(q.target.value)))
        }, null, 40, BT)]),
        ke("button", {
          class: "c-btn",
          type: "button",
          onClick: P[2] || (P[2] = (...q) => At(Io) && At(Io)(...q))
        }, "Stop")
      ])) : Ws("", !0),
      u.value ? Ws("", !0) : (Gt(), en("section", qT, [
        P[4] || (P[4] = ke("h2", null, "Free Radio", -1)),
        ke("p", HT, jt(At(p)) + " instrumental stations from your library. Pick a group, or search.", 1),
        ke("div", JT, [(Gt(!0), en(Et, null, Xr(At(ta), (q) => (Gt(), en("button", {
          key: q.id,
          type: "button",
          role: "tab",
          class: La({ active: q.id === f.value?.id }),
          "aria-selected": q.id === f.value?.id,
          onClick: (W) => m.value = q.id
        }, [hl(jt(q.name) + " ", 1), ke("span", null, jt(q.stations.length), 1)], 10, jT))), 128))])
      ])),
      (Gt(!0), en(Et, null, Xr(o.value, (q) => (Gt(), en("p", {
        key: q,
        class: "radio-note"
      }, jt(q) + " search couldn't be reached. Stations already in your Free Radio library are still listed. ", 1))), 128)),
      u.value && !a.value.length && !r.value ? (Gt(), en("p", GT, "No stations found.")) : Ws("", !0),
      ke("ul", WT, [(Gt(!0), en(Et, null, Xr(C.value, (q) => (Gt(), en("li", { key: q.id }, [ke("button", {
        type: "button",
        class: La({ active: At(on)?.id === q.id }),
        onClick: (W) => At(OT)(q)
      }, [
        q.image ? (Gt(), en("img", {
          key: 0,
          src: q.image,
          alt: "",
          loading: "lazy"
        }, null, 8, $T)) : Ws("", !0),
        ke("span", XT, jt(q.name), 1),
        ke("span", ZT, jt(q.detail), 1),
        ke("span", YT, jt(q.source), 1)
      ], 10, KT)]))), 128))])
    ]));
  }
}), e_ = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [o, r] of n) a[o] = r;
  return a;
}, t_ = /* @__PURE__ */ e_(QT, [["__scopeId", "data-v-b8dc3f54"]]), yd = { "page-radio": /* @__PURE__ */ vy(t_, { shadowRoot: !1 }) }, { plugin: p_, customElementName: n_, goToPage: i_ } = Fy({
  ...Hy,
  CustomElements: yd,
  setup() {
    for (const [e, n] of Object.entries(yd)) customElements.define(n_(e), n);
    vd({
      label: "Radio",
      onClick() {
        i_({ name: "page-radio" });
      }
    }), vd({
      label: "Stop Radio",
      onClick() {
        Io();
      }
    }), PT();
  }
});
export {
  yd as CustomElements,
  n_ as customElementName,
  p_ as default,
  i_ as goToPage
};
