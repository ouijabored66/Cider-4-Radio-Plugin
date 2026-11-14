(function(){try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(`.radio-search[data-v-b8dc3f54]{gap:8px;max-width:560px;margin-bottom:16px;display:flex}.radio-search input[data-v-b8dc3f54]{min-width:0;color:inherit;font:inherit;background:0 0;border:1px solid #80808066;border-radius:8px;flex:1;padding:8px 12px}.radio-now[data-v-b8dc3f54]{background:#80808026;border-radius:10px;flex-wrap:wrap;align-items:center;gap:16px;margin-bottom:16px;padding:12px 16px;display:flex}.radio-now-text[data-v-b8dc3f54]{flex-direction:column;flex:1;min-width:180px;display:flex}.radio-diagnostics[data-v-b8dc3f54]{opacity:.7;font-size:.75em}.radio-note[data-v-b8dc3f54]{opacity:.75;margin:4px 0}.radio-library h2[data-v-b8dc3f54]{margin:0 0 4px;font-size:1.15rem}.radio-groups[data-v-b8dc3f54]{flex-wrap:wrap;gap:8px;margin:12px 0 16px;display:flex}.radio-groups button[data-v-b8dc3f54]{color:inherit;font:inherit;cursor:pointer;background:0 0;border:1px solid #80808059;border-radius:999px;align-items:center;gap:6px;padding:6px 10px;display:inline-flex}.radio-groups button.active[data-v-b8dc3f54]{background:#80808033}.radio-groups span[data-v-b8dc3f54]{opacity:.6;font-size:.8em}.radio-list[data-v-b8dc3f54]{margin:0;padding:0;list-style:none}.radio-list button[data-v-b8dc3f54]{text-align:left;width:100%;color:inherit;font:inherit;cursor:pointer;background:0 0;border:0;border-radius:8px;grid-template-rows:auto auto;grid-template-columns:40px 1fr auto;column-gap:12px;padding:8px;display:grid}.radio-list button[data-v-b8dc3f54]:hover,.radio-list button.active[data-v-b8dc3f54]{background:#80808026}.radio-list img[data-v-b8dc3f54]{object-fit:cover;border-radius:6px;grid-row:1/3;width:40px;height:40px}.radio-name[data-v-b8dc3f54]{grid-column:2;font-weight:600}.radio-detail[data-v-b8dc3f54]{opacity:.7;grid-column:2;font-size:.85em}.radio-source[data-v-b8dc3f54]{opacity:.6;grid-area:1/3/3;align-self:center;font-size:.8em}
/*$vite$:1*/`)),document.head.appendChild(a)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
var b2 = (t, i) => () => (i || (t((i = { exports: {} }).exports, i), t = null), i.exports);
// @__NO_SIDE_EFFECTS__
function Vn(t) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const a of t.split(",")) i[a] = 1;
  return (a) => a in i;
}
var Ce = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, na = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ze = () => {
}, vd = () => !1, ja = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), xa = (t) => t.startsWith("onUpdate:"), Ae = Object.assign, vl = (t, i) => {
  const a = t.indexOf(i);
  a > -1 && t.splice(a, 1);
}, v2 = Object.prototype.hasOwnProperty, ge = (t, i) => v2.call(t, i), $ = Array.isArray, Si = (t) => Ga(t) === "[object Map]", yd = (t) => Ga(t) === "[object Set]", wm = (t) => Ga(t) === "[object Date]", te = (t) => typeof t == "function", Ee = (t) => typeof t == "string", rn = (t) => typeof t == "symbol", ve = (t) => t !== null && typeof t == "object", yl = (t) => (ve(t) || te(t)) && te(t.then) && te(t.catch), Td = Object.prototype.toString, Ga = (t) => Td.call(t), Tl = (t) => Ga(t).slice(8, -1), Io = (t) => Ga(t) === "[object Object]", _l = (t) => Ee(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ea = /* @__PURE__ */ Vn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), y2 = /* @__PURE__ */ Vn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), bo = (t) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (a) => i[a] || (i[a] = t(a));
}, T2 = /-\w/g, at = bo((t) => t.replace(T2, (i) => i.slice(1).toUpperCase())), _2 = /\B([A-Z])/g, Nt = bo((t) => t.replace(_2, "-$1").toLowerCase()), vo = bo((t) => t.charAt(0).toUpperCase() + t.slice(1)), Ri = bo((t) => t ? `on${vo(t)}` : ""), Rn = (t, i) => !Object.is(t, i), Yi = (t, ...i) => {
  for (let a = 0; a < t.length; a++) t[a](...i);
}, ao = (t, i, a, o = !1) => {
  Object.defineProperty(t, i, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: a
  });
}, wl = (t) => {
  const i = parseFloat(t);
  return isNaN(i) ? t : i;
}, Cm = (t) => {
  const i = Ee(t) ? Number(t) : NaN;
  return isNaN(i) ? t : i;
}, Rm, Wa = () => Rm || (Rm = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cl(t) {
  if ($(t)) {
    const i = {};
    for (let a = 0; a < t.length; a++) {
      const o = t[a], r = Ee(o) ? U2(o) : Cl(o);
      if (r) for (const u in r) i[u] = r[u];
    }
    return i;
  } else if (Ee(t) || ve(t)) return t;
}
var w2 = /;(?![^(]*\))/g, C2 = /:([^]+)/, R2 = /\/\*[^]*?\*\//g;
function U2(t) {
  const i = {};
  return t.replace(R2, "").split(w2).forEach((a) => {
    if (a) {
      const o = a.split(C2);
      o.length > 1 && (i[o[0].trim()] = o[1].trim());
    }
  }), i;
}
function La(t) {
  let i = "";
  if (Ee(t)) i = t;
  else if ($(t)) for (let a = 0; a < t.length; a++) {
    const o = La(t[a]);
    o && (i += o + " ");
  }
  else if (ve(t))
    for (const a in t) t[a] && (i += a + " ");
  return i.trim();
}
var S2 = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", A2 = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", V2 = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", E2 = /* @__PURE__ */ Vn(S2), N2 = /* @__PURE__ */ Vn(A2), M2 = /* @__PURE__ */ Vn(V2), _d = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", O2 = /* @__PURE__ */ Vn(_d), ZT = /* @__PURE__ */ Vn(_d + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function wd(t) {
  return !!t || t === "";
}
function z2(t, i) {
  if (t.length !== i.length) return !1;
  let a = !0;
  for (let o = 0; a && o < t.length; o++) a = Rl(t[o], i[o]);
  return a;
}
function Rl(t, i) {
  if (t === i) return !0;
  let a = wm(t), o = wm(i);
  if (a || o) return a && o ? t.getTime() === i.getTime() : !1;
  if (a = rn(t), o = rn(i), a || o) return t === i;
  if (a = $(t), o = $(i), a || o) return a && o ? z2(t, i) : !1;
  if (a = ve(t), o = ve(i), a || o) {
    if (!a || !o || Object.keys(t).length !== Object.keys(i).length) return !1;
    for (const r in t) {
      const u = t.hasOwnProperty(r), m = i.hasOwnProperty(r);
      if (u && !m || !u && m || !Rl(t[r], i[r])) return !1;
    }
  }
  return String(t) === String(i);
}
var Cd = (t) => !!(t && t.__v_isRef === !0), jt = (t) => Ee(t) ? t : t == null ? "" : $(t) || ve(t) && (t.toString === Td || !te(t.toString)) ? Cd(t) ? jt(t.value) : JSON.stringify(t, Rd, 2) : String(t), Rd = (t, i) => Cd(i) ? Rd(t, i.value) : Si(i) ? { [`Map(${i.size})`]: [...i.entries()].reduce((a, [o, r], u) => (a[qr(o, u) + " =>"] = r, a), {}) } : yd(i) ? { [`Set(${i.size})`]: [...i.values()].map((a) => qr(a)) } : rn(i) ? qr(i) : ve(i) && !$(i) && !Io(i) ? String(i) : i, qr = (t, i = "") => {
  var a;
  return rn(t) ? `Symbol(${(a = t.description) != null ? a : i})` : t;
};
function ln(t, ...i) {
  console.warn(`[Vue warn] ${t}`, ...i);
}
var it, P2 = class {
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
      let i, a;
      for (i = 0, a = this.effects.length; i < a; i++) this.effects[i].stop();
      for (this.effects.length = 0, i = 0, a = this.cleanups.length; i < a; i++) this.cleanups[i]();
      if (this.cleanups.length = 0, this.scopes) {
        for (i = 0, a = this.scopes.length; i < a; i++) this.scopes[i].stop(!0);
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
function D2() {
  return it;
}
var we, Hr = /* @__PURE__ */ new WeakSet(), Ud = class {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, it && (it.active ? it.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Hr.has(this) && (Hr.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ad(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Um(this), Vd(this);
    const t = we, i = sn;
    we = this, sn = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && we !== this && ln("Active effect was not restored correctly - this is likely a Vue internal bug."), Ed(this), we = t, sn = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Al(t);
      this.deps = this.depsTail = void 0, Um(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Hr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    nl(this) && this.run();
  }
  get dirty() {
    return nl(this);
  }
}, Sd = 0, Na, Ma;
function Ad(t, i = !1) {
  if (t.flags |= 8, i) {
    t.next = Ma, Ma = t;
    return;
  }
  t.next = Na, Na = t;
}
function Ul() {
  Sd++;
}
function Sl() {
  if (--Sd > 0) return;
  if (Ma) {
    let i = Ma;
    for (Ma = void 0; i; ) {
      const a = i.next;
      i.next = void 0, i.flags &= -9, i = a;
    }
  }
  let t;
  for (; Na; ) {
    let i = Na;
    for (Na = void 0; i; ) {
      const a = i.next;
      if (i.next = void 0, i.flags &= -9, i.flags & 1) try {
        i.trigger();
      } catch (o) {
        t || (t = o);
      }
      i = a;
    }
  }
  if (t) throw t;
}
function Vd(t) {
  for (let i = t.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function Ed(t) {
  let i, a = t.depsTail, o = a;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === a && (a = r), Al(o), x2(o)) : i = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  t.deps = i, t.depsTail = a;
}
function nl(t) {
  for (let i = t.deps; i; i = i.nextDep) if (i.dep.version !== i.version || i.dep.computed && (Nd(i.dep.computed) || i.dep.version !== i.version)) return !0;
  return !!t._dirty;
}
function Nd(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Fa) || (t.globalVersion = Fa, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !nl(t)))) return;
  t.flags |= 2;
  const i = t.dep, a = we, o = sn;
  we = t, sn = !0;
  try {
    Vd(t);
    const r = t.fn(t._value);
    (i.version === 0 || Rn(r, t._value)) && (t.flags |= 128, t._value = r, i.version++);
  } catch (r) {
    throw i.version++, r;
  } finally {
    we = a, sn = o, Ed(t), t.flags &= -3;
  }
}
function Al(t, i = !1) {
  const { dep: a, prevSub: o, nextSub: r } = t;
  if (o && (o.nextSub = r, t.prevSub = void 0), r && (r.prevSub = o, t.nextSub = void 0), process.env.NODE_ENV !== "production" && a.subsHead === t && (a.subsHead = r), a.subs === t && (a.subs = o, !o && a.computed)) {
    a.computed.flags &= -5;
    for (let u = a.computed.deps; u; u = u.nextDep) Al(u, !0);
  }
  !i && !--a.sc && a.map && a.map.delete(a.key);
}
function x2(t) {
  const { prevDep: i, nextDep: a } = t;
  i && (i.nextDep = a, t.prevDep = void 0), a && (a.prevDep = i, t.nextDep = void 0);
}
var sn = !0, Md = [];
function un() {
  Md.push(sn), sn = !1;
}
function cn() {
  const t = Md.pop();
  sn = t === void 0 ? !0 : t;
}
function Um(t) {
  const { cleanup: i } = t;
  if (t.cleanup = void 0, i) {
    const a = we;
    we = void 0;
    try {
      i();
    } finally {
      we = a;
    }
  }
}
var Fa = 0, L2 = class {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}, Vl = class {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!we || !sn || we === this.computed) return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== we)
      i = this.activeLink = new L2(we, this), we.deps ? (i.prevDep = we.depsTail, we.depsTail.nextDep = i, we.depsTail = i) : we.deps = we.depsTail = i, Od(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const a = i.nextDep;
      a.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = a), i.prevDep = we.depsTail, i.nextDep = void 0, we.depsTail.nextDep = i, we.depsTail = i, we.deps === i && (we.deps = a);
    }
    return process.env.NODE_ENV !== "production" && we.onTrack && we.onTrack(Ae({ effect: we }, t)), i;
  }
  trigger(t) {
    this.version++, Fa++, this.notify(t);
  }
  notify(t) {
    Ul();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let i = this.subsHead; i; i = i.nextSub) i.sub.onTrigger && !(i.sub.flags & 8) && i.sub.onTrigger(Ae({ effect: i.sub }, t));
      for (let i = this.subs; i; i = i.prevSub) i.sub.notify() && i.sub.dep.notify();
    } finally {
      Sl();
    }
  }
};
function Od(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const i = t.dep.computed;
    if (i && !t.dep.subs) {
      i.flags |= 20;
      for (let o = i.deps; o; o = o.nextDep) Od(o);
    }
    const a = t.dep.subs;
    a !== t && (t.prevSub = a, a && (a.nextSub = t)), process.env.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
var il = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Object iterate" : ""), al = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""), ka = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "Array iterate" : "");
function Xe(t, i, a) {
  if (sn && we) {
    let o = il.get(t);
    o || il.set(t, o = /* @__PURE__ */ new Map());
    let r = o.get(a);
    r || (o.set(a, r = new Vl()), r.map = o, r.key = a), process.env.NODE_ENV !== "production" ? r.track({
      target: t,
      type: i,
      key: a
    }) : r.track();
  }
}
function Un(t, i, a, o, r, u) {
  const m = il.get(t);
  if (!m) {
    Fa++;
    return;
  }
  const p = (f) => {
    f && (process.env.NODE_ENV !== "production" ? f.trigger({
      target: t,
      type: i,
      key: a,
      newValue: o,
      oldValue: r,
      oldTarget: u
    }) : f.trigger());
  };
  if (Ul(), i === "clear") m.forEach(p);
  else {
    const f = $(t), C = f && _l(a);
    if (f && a === "length") {
      const T = Number(o);
      m.forEach((y, V) => {
        (V === "length" || V === ka || !rn(V) && V >= T) && p(y);
      });
    } else
      switch ((a !== void 0 || m.has(void 0)) && p(m.get(a)), C && p(m.get(ka)), i) {
        case "add":
          f ? C && p(m.get("length")) : (p(m.get(Ai)), Si(t) && p(m.get(al)));
          break;
        case "delete":
          f || (p(m.get(Ai)), Si(t) && p(m.get(al)));
          break;
        case "set":
          Si(t) && p(m.get(Ai));
          break;
      }
  }
  Sl();
}
function Zi(t) {
  const i = /* @__PURE__ */ ue(t);
  return i === t ? i : (Xe(i, "iterate", ka), /* @__PURE__ */ ft(t) ? i : i.map(dn));
}
function yo(t) {
  return Xe(t = /* @__PURE__ */ ue(t), "iterate", ka), t;
}
function Cn(t, i) {
  return /* @__PURE__ */ mn(t) ? sa(/* @__PURE__ */ ci(t) ? dn(i) : i) : dn(i);
}
var F2 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jr(this, Symbol.iterator, (t) => Cn(this, t));
  },
  concat(...t) {
    return Zi(this).concat(...t.map((i) => $(i) ? Zi(i) : i));
  },
  entries() {
    return Jr(this, "entries", (t) => (t[1] = Cn(this, t[1]), t));
  },
  every(t, i) {
    return qn(this, "every", t, i, void 0, arguments);
  },
  filter(t, i) {
    return qn(this, "filter", t, i, (a) => a.map((o) => Cn(this, o)), arguments);
  },
  find(t, i) {
    return qn(this, "find", t, i, (a) => Cn(this, a), arguments);
  },
  findIndex(t, i) {
    return qn(this, "findIndex", t, i, void 0, arguments);
  },
  findLast(t, i) {
    return qn(this, "findLast", t, i, (a) => Cn(this, a), arguments);
  },
  findLastIndex(t, i) {
    return qn(this, "findLastIndex", t, i, void 0, arguments);
  },
  forEach(t, i) {
    return qn(this, "forEach", t, i, void 0, arguments);
  },
  includes(...t) {
    return jr(this, "includes", t);
  },
  indexOf(...t) {
    return jr(this, "indexOf", t);
  },
  join(t) {
    return Zi(this).join(t);
  },
  lastIndexOf(...t) {
    return jr(this, "lastIndexOf", t);
  },
  map(t, i) {
    return qn(this, "map", t, i, void 0, arguments);
  },
  pop() {
    return Ca(this, "pop");
  },
  push(...t) {
    return Ca(this, "push", t);
  },
  reduce(t, ...i) {
    return Sm(this, "reduce", t, i);
  },
  reduceRight(t, ...i) {
    return Sm(this, "reduceRight", t, i);
  },
  shift() {
    return Ca(this, "shift");
  },
  some(t, i) {
    return qn(this, "some", t, i, void 0, arguments);
  },
  splice(...t) {
    return Ca(this, "splice", t);
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
    return Ca(this, "unshift", t);
  },
  values() {
    return Jr(this, "values", (t) => Cn(this, t));
  }
};
function Jr(t, i, a) {
  const o = yo(t), r = o[i]();
  return o !== t && !/* @__PURE__ */ ft(t) && (r._next = r.next, r.next = () => {
    const u = r._next();
    return u.done || (u.value = a(u.value)), u;
  }), r;
}
var k2 = Array.prototype;
function qn(t, i, a, o, r, u) {
  const m = yo(t), p = m !== t && !/* @__PURE__ */ ft(t), f = m[i];
  if (f !== k2[i]) {
    const y = f.apply(t, u);
    return p ? dn(y) : y;
  }
  let C = a;
  m !== t && (p ? C = function(y, V) {
    return a.call(this, Cn(t, y), V, t);
  } : a.length > 2 && (C = function(y, V) {
    return a.call(this, y, V, t);
  }));
  const T = f.call(m, C, o);
  return p && r ? r(T) : T;
}
function Sm(t, i, a, o) {
  const r = yo(t), u = r !== t && !/* @__PURE__ */ ft(t);
  let m = a, p = !1;
  r !== t && (u ? (p = o.length === 0, m = function(C, T, y) {
    return p && (p = !1, C = Cn(t, C)), a.call(this, C, Cn(t, T), y, t);
  }) : a.length > 3 && (m = function(C, T, y) {
    return a.call(this, C, T, y, t);
  }));
  const f = r[i](m, ...o);
  return p ? Cn(t, f) : f;
}
function jr(t, i, a) {
  const o = /* @__PURE__ */ ue(t);
  Xe(o, "iterate", ka);
  const r = o[i](...a);
  return (r === -1 || r === !1) && /* @__PURE__ */ so(a[0]) ? (a[0] = /* @__PURE__ */ ue(a[0]), o[i](...a)) : r;
}
function Ca(t, i, a = []) {
  un(), Ul();
  const o = (/* @__PURE__ */ ue(t))[i].apply(t, a);
  return Sl(), cn(), o;
}
var B2 = /* @__PURE__ */ Vn("__proto__,__v_isRef,__isVue"), zd = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(rn));
function q2(t) {
  rn(t) || (t = String(t));
  const i = /* @__PURE__ */ ue(this);
  return Xe(i, "has", t), i.hasOwnProperty(t);
}
var Pd = class {
  constructor(t = !1, i = !1) {
    this._isReadonly = t, this._isShallow = i;
  }
  get(t, i, a) {
    if (i === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, r = this._isShallow;
    if (i === "__v_isReactive") return !o;
    if (i === "__v_isReadonly") return o;
    if (i === "__v_isShallow") return r;
    if (i === "__v_raw")
      return a === (o ? r ? Bd : kd : r ? Fd : Ld).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const u = $(t);
    if (!o) {
      let p;
      if (u && (p = F2[i])) return p;
      if (i === "hasOwnProperty") return q2;
    }
    const m = Reflect.get(t, i, /* @__PURE__ */ je(t) ? t : a);
    if ((rn(i) ? zd.has(i) : B2(i)) || (o || Xe(t, "get", i), r)) return m;
    if (/* @__PURE__ */ je(m)) {
      const p = u && _l(i) ? m : m.value;
      return o && ve(p) ? /* @__PURE__ */ ol(p) : p;
    }
    return ve(m) ? o ? /* @__PURE__ */ ol(m) : /* @__PURE__ */ El(m) : m;
  }
}, Dd = class extends Pd {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, a, o) {
    let r = t[i];
    const u = $(t) && _l(i);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ mn(r);
      if (!/* @__PURE__ */ ft(a) && !/* @__PURE__ */ mn(a) && (r = /* @__PURE__ */ ue(r), a = /* @__PURE__ */ ue(a)), !u && /* @__PURE__ */ je(r) && !/* @__PURE__ */ je(a)) return f ? (process.env.NODE_ENV !== "production" && ln(`Set operation on key "${String(i)}" failed: target is readonly.`, t[i]), !0) : (r.value = a, !0);
    }
    const m = u ? Number(i) < t.length : ge(t, i), p = Reflect.set(t, i, a, /* @__PURE__ */ je(t) ? t : o);
    return t === /* @__PURE__ */ ue(o) && (m ? Rn(a, r) && Un(t, "set", i, a, r) : Un(t, "add", i, a)), p;
  }
  deleteProperty(t, i) {
    const a = ge(t, i), o = t[i], r = Reflect.deleteProperty(t, i);
    return r && a && Un(t, "delete", i, void 0, o), r;
  }
  has(t, i) {
    const a = Reflect.has(t, i);
    return (!rn(i) || !zd.has(i)) && Xe(t, "has", i), a;
  }
  ownKeys(t) {
    return Xe(t, "iterate", $(t) ? "length" : Ai), Reflect.ownKeys(t);
  }
}, xd = class extends Pd {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, i) {
    return process.env.NODE_ENV !== "production" && ln(`Set operation on key "${String(i)}" failed: target is readonly.`, t), !0;
  }
  deleteProperty(t, i) {
    return process.env.NODE_ENV !== "production" && ln(`Delete operation on key "${String(i)}" failed: target is readonly.`, t), !0;
  }
}, H2 = /* @__PURE__ */ new Dd(), J2 = /* @__PURE__ */ new xd(), j2 = /* @__PURE__ */ new Dd(!0), G2 = /* @__PURE__ */ new xd(!0), sl = (t) => t, Js = (t) => Reflect.getPrototypeOf(t);
function W2(t, i, a) {
  return function(...o) {
    const r = this.__v_raw, u = /* @__PURE__ */ ue(r), m = Si(u), p = t === "entries" || t === Symbol.iterator && m, f = t === "keys" && m, C = r[t](...o), T = a ? sl : i ? sa : dn;
    return !i && Xe(u, "iterate", f ? al : Ai), Ae(Object.create(C), { next() {
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
function js(t) {
  return function(...i) {
    if (process.env.NODE_ENV !== "production") {
      const a = i[0] ? `on key "${i[0]}" ` : "";
      ln(`${vo(t)} operation ${a}failed: target is readonly.`, /* @__PURE__ */ ue(this));
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function K2(t, i) {
  const a = {
    get(o) {
      const r = this.__v_raw, u = /* @__PURE__ */ ue(r), m = /* @__PURE__ */ ue(o);
      t || (Rn(o, m) && Xe(u, "get", o), Xe(u, "get", m));
      const { has: p } = Js(u), f = i ? sl : t ? sa : dn;
      if (p.call(u, o)) return f(r.get(o));
      if (p.call(u, m)) return f(r.get(m));
      r !== u && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && Xe(/* @__PURE__ */ ue(o), "iterate", Ai), o.size;
    },
    has(o) {
      const r = this.__v_raw, u = /* @__PURE__ */ ue(r), m = /* @__PURE__ */ ue(o);
      return t || (Rn(o, m) && Xe(u, "has", o), Xe(u, "has", m)), o === m ? r.has(o) : r.has(o) || r.has(m);
    },
    forEach(o, r) {
      const u = this, m = u.__v_raw, p = /* @__PURE__ */ ue(m), f = i ? sl : t ? sa : dn;
      return !t && Xe(p, "iterate", Ai), m.forEach((C, T) => o.call(r, f(C), f(T), u));
    }
  };
  return Ae(a, t ? {
    add: js("add"),
    set: js("set"),
    delete: js("delete"),
    clear: js("clear")
  } : {
    add(o) {
      const r = /* @__PURE__ */ ue(this), u = Js(r), m = /* @__PURE__ */ ue(o), p = !i && !/* @__PURE__ */ ft(o) && !/* @__PURE__ */ mn(o) ? m : o;
      return u.has.call(r, p) || Rn(o, p) && u.has.call(r, o) || Rn(m, p) && u.has.call(r, m) || (r.add(p), Un(r, "add", p, p)), this;
    },
    set(o, r) {
      !i && !/* @__PURE__ */ ft(r) && !/* @__PURE__ */ mn(r) && (r = /* @__PURE__ */ ue(r));
      const u = /* @__PURE__ */ ue(this), { has: m, get: p } = Js(u);
      let f = m.call(u, o);
      f ? process.env.NODE_ENV !== "production" && Am(u, m, o) : (o = /* @__PURE__ */ ue(o), f = m.call(u, o));
      const C = p.call(u, o);
      return u.set(o, r), f ? Rn(r, C) && Un(u, "set", o, r, C) : Un(u, "add", o, r), this;
    },
    delete(o) {
      const r = /* @__PURE__ */ ue(this), { has: u, get: m } = Js(r);
      let p = u.call(r, o);
      p ? process.env.NODE_ENV !== "production" && Am(r, u, o) : (o = /* @__PURE__ */ ue(o), p = u.call(r, o));
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
    a[o] = W2(o, t, i);
  }), a;
}
function To(t, i) {
  const a = K2(t, i);
  return (o, r, u) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? o : Reflect.get(ge(a, r) && r in o ? a : o, r, u);
}
var $2 = { get: /* @__PURE__ */ To(!1, !1) }, X2 = { get: /* @__PURE__ */ To(!1, !0) }, Z2 = { get: /* @__PURE__ */ To(!0, !1) }, Y2 = { get: /* @__PURE__ */ To(!0, !0) };
function Am(t, i, a) {
  const o = /* @__PURE__ */ ue(a);
  if (o !== a && i.call(t, o)) {
    const r = Tl(t);
    ln(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var Ld = /* @__PURE__ */ new WeakMap(), Fd = /* @__PURE__ */ new WeakMap(), kd = /* @__PURE__ */ new WeakMap(), Bd = /* @__PURE__ */ new WeakMap();
function Q2(t) {
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
function El(t) {
  return /* @__PURE__ */ mn(t) ? t : _o(t, !1, H2, $2, Ld);
}
// @__NO_SIDE_EFFECTS__
function eb(t) {
  return _o(t, !1, j2, X2, Fd);
}
// @__NO_SIDE_EFFECTS__
function ol(t) {
  return _o(t, !0, J2, Z2, kd);
}
// @__NO_SIDE_EFFECTS__
function Sn(t) {
  return _o(t, !0, G2, Y2, Bd);
}
function _o(t, i, a, o, r) {
  if (!ve(t))
    return process.env.NODE_ENV !== "production" && ln(`value cannot be made ${i ? "readonly" : "reactive"}: ${String(t)}`), t;
  if (t.__v_raw && !(i && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t)) return t;
  const u = r.get(t);
  if (u) return u;
  const m = Q2(Tl(t));
  if (m === 0) return t;
  const p = new Proxy(t, m === 2 ? o : a);
  return r.set(t, p), p;
}
// @__NO_SIDE_EFFECTS__
function ci(t) {
  return /* @__PURE__ */ mn(t) ? /* @__PURE__ */ ci(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function mn(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ft(t) {
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
function tb(t) {
  return !ge(t, "__v_skip") && Object.isExtensible(t) && ao(t, "__v_skip", !0), t;
}
var dn = (t) => ve(t) ? /* @__PURE__ */ El(t) : t, sa = (t) => ve(t) ? /* @__PURE__ */ ol(t) : t;
// @__NO_SIDE_EFFECTS__
function je(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function tn(t) {
  return nb(t, !1);
}
function nb(t, i) {
  return /* @__PURE__ */ je(t) ? t : new ib(t, i);
}
var ib = class {
  constructor(t, i) {
    this.dep = new Vl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ ue(t), this._value = i ? t : dn(t), this.__v_isShallow = i;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, a = this.__v_isShallow || /* @__PURE__ */ ft(t) || /* @__PURE__ */ mn(t);
    t = a ? t : /* @__PURE__ */ ue(t), Rn(t, i) && (this._rawValue = t, this._value = a ? t : dn(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: i
    }) : this.dep.trigger());
  }
};
function At(t) {
  return /* @__PURE__ */ je(t) ? t.value : t;
}
var ab = {
  get: (t, i, a) => i === "__v_raw" ? t : At(Reflect.get(t, i, a)),
  set: (t, i, a, o) => {
    const r = t[i];
    return /* @__PURE__ */ je(r) && !/* @__PURE__ */ je(a) ? (r.value = a, !0) : Reflect.set(t, i, a, o);
  }
};
function qd(t) {
  return /* @__PURE__ */ ci(t) ? t : new Proxy(t, ab);
}
var sb = class {
  constructor(t, i, a) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new Vl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Fa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && we !== this)
      return Ad(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Nd(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && ln("Write operation failed: computed value is readonly");
  }
};
// @__NO_SIDE_EFFECTS__
function ob(t, i, a = !1) {
  let o, r;
  te(t) ? o = t : (o = t.get, r = t.set);
  const u = new sb(o, r, a);
  return process.env.NODE_ENV !== "production" && i && !a && (u.onTrack = i.onTrack, u.onTrigger = i.onTrigger), u;
}
var Gs = {}, oo = /* @__PURE__ */ new WeakMap(), Ui = void 0;
function rb(t, i = !1, a = Ui) {
  if (a) {
    let o = oo.get(a);
    o || oo.set(a, o = []), o.push(t);
  } else process.env.NODE_ENV !== "production" && !i && ln("onWatcherCleanup() was called when there was no active watcher to associate with.");
}
function lb(t, i, a = Ce) {
  const { immediate: o, deep: r, once: u, scheduler: m, augmentJob: p, call: f } = a, C = (j) => {
    (a.onWarn || ln)("Invalid watch source: ", j, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, T = (j) => r ? j : /* @__PURE__ */ ft(j) || r === !1 || r === 0 ? Kn(j, 1) : Kn(j);
  let y, V, P, q, W = !1, he = !1;
  if (/* @__PURE__ */ je(t) ? (V = () => t.value, W = /* @__PURE__ */ ft(t)) : /* @__PURE__ */ ci(t) ? (V = () => T(t), W = !0) : $(t) ? (he = !0, W = t.some((j) => /* @__PURE__ */ ci(j) || /* @__PURE__ */ ft(j)), V = () => t.map((j) => {
    if (/* @__PURE__ */ je(j)) return j.value;
    if (/* @__PURE__ */ ci(j)) return T(j);
    if (te(j)) return f ? f(j, 2) : j();
    process.env.NODE_ENV !== "production" && C(j);
  })) : te(t) ? i ? V = f ? () => f(t, 2) : t : V = () => {
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
      return f ? f(t, 3, [q]) : t(q);
    } finally {
      Ui = j;
    }
  } : (V = Ze, process.env.NODE_ENV !== "production" && C(t)), i && r) {
    const j = V, Ne = r === !0 ? 1 / 0 : r;
    V = () => Kn(j(), Ne);
  }
  const ye = D2(), fe = () => {
    y.stop(), ye && ye.active && vl(ye.effects, y);
  };
  if (u && i) {
    const j = i;
    i = (...Ne) => {
      j(...Ne), fe();
    };
  }
  let se = he ? new Array(t.length).fill(Gs) : Gs;
  const He = (j) => {
    if (!(!(y.flags & 1) || !y.dirty && !j))
      if (i) {
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
            se = Ne, f ? f(i, 3, Le) : i(...Le);
          } finally {
            Ui = xe;
          }
        }
      } else y.run();
  };
  return p && p(He), y = new Ud(V), y.scheduler = m ? () => m(He, !1) : He, q = (j) => rb(j, !1, y), P = y.onStop = () => {
    const j = oo.get(y);
    if (j) {
      if (f) f(j, 4);
      else for (const Ne of j) Ne();
      oo.delete(y);
    }
  }, process.env.NODE_ENV !== "production" && (y.onTrack = a.onTrack, y.onTrigger = a.onTrigger), i ? o ? He(!0) : se = y.run() : m ? m(He.bind(null, !0), !0) : y.run(), fe.pause = y.pause.bind(y), fe.resume = y.resume.bind(y), fe.stop = fe, fe;
}
function Kn(t, i = 1 / 0, a) {
  if (i <= 0 || !ve(t) || t.__v_skip || (a = a || /* @__PURE__ */ new Map(), (a.get(t) || 0) >= i)) return t;
  if (a.set(t, i), i--, /* @__PURE__ */ je(t)) Kn(t.value, i, a);
  else if ($(t)) for (let o = 0; o < t.length; o++) Kn(t[o], i, a);
  else if (yd(t) || Si(t)) t.forEach((o) => {
    Kn(o, i, a);
  });
  else if (Io(t)) {
    for (const o in t) Kn(t[o], i, a);
    for (const o of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, o) && Kn(t[o], i, a);
  }
  return t;
}
var Vi = [];
function Ks(t) {
  Vi.push(t);
}
function $s() {
  Vi.pop();
}
var Gr = !1;
function k(t, ...i) {
  if (Gr) return;
  Gr = !0, un();
  const a = Vi.length ? Vi[Vi.length - 1].component : null, o = a && a.appContext.config.warnHandler, r = ub();
  if (o) oa(o, a, 11, [
    t + i.map((u) => {
      var m, p;
      return (p = (m = u.toString) == null ? void 0 : m.call(u)) != null ? p : JSON.stringify(u);
    }).join(""),
    a && a.proxy,
    r.map(({ vnode: u }) => `at <${Ya(a, u.type)}>`).join(`
`),
    r
  ]);
  else {
    const u = [`[Vue warn]: ${t}`, ...i];
    r.length && u.push(`
`, ...cb(r)), console.warn(...u);
  }
  cn(), Gr = !1;
}
function ub() {
  let t = Vi[Vi.length - 1];
  if (!t) return [];
  const i = [];
  for (; t; ) {
    const a = i[0];
    a && a.vnode === t ? a.recurseCount++ : i.push({
      vnode: t,
      recurseCount: 0
    });
    const o = t.component && t.component.parent;
    t = o && o.vnode;
  }
  return i;
}
function cb(t) {
  const i = [];
  return t.forEach((a, o) => {
    i.push(...o === 0 ? [] : [`
`], ...mb(a));
  }), i;
}
function mb({ vnode: t, recurseCount: i }) {
  const a = i > 0 ? `... (${i} recursive calls)` : "", o = t.component ? t.component.parent == null : !1, r = ` at <${Ya(t.component, t.type, o)}`, u = ">" + a;
  return t.props ? [
    r,
    ...db(t.props),
    u
  ] : [r + u];
}
function db(t) {
  const i = [], a = Object.keys(t);
  return a.slice(0, 3).forEach((o) => {
    i.push(...Hd(o, t[o]));
  }), a.length > 3 && i.push(" ..."), i;
}
function Hd(t, i, a) {
  return Ee(i) ? (i = JSON.stringify(i), a ? i : [`${t}=${i}`]) : typeof i == "number" || typeof i == "boolean" || i == null ? a ? i : [`${t}=${i}`] : /* @__PURE__ */ je(i) ? (i = Hd(t, /* @__PURE__ */ ue(i.value), !0), a ? i : [
    `${t}=Ref<`,
    i,
    ">"
  ]) : te(i) ? [`${t}=fn${i.name ? `<${i.name}>` : ""}`] : (i = /* @__PURE__ */ ue(i), a ? i : [`${t}=`, i]);
}
var Nl = {
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
function oa(t, i, a, o) {
  try {
    return o ? t(...o) : t();
  } catch (r) {
    Ka(r, i, a);
  }
}
function pn(t, i, a, o) {
  if (te(t)) {
    const r = oa(t, i, a, o);
    return r && yl(r) && r.catch((u) => {
      Ka(u, i, a);
    }), r;
  }
  if ($(t)) {
    const r = [];
    for (let u = 0; u < t.length; u++) r.push(pn(t[u], i, a, o));
    return r;
  } else process.env.NODE_ENV !== "production" && k(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`);
}
function Ka(t, i, a, o = !0) {
  const r = i ? i.vnode : null, { errorHandler: u, throwUnhandledErrorInProduction: m } = i && i.appContext.config || Ce;
  if (i) {
    let p = i.parent;
    const f = i.proxy, C = process.env.NODE_ENV !== "production" ? Nl[a] : `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; p; ) {
      const T = p.ec;
      if (T) {
        for (let y = 0; y < T.length; y++) if (T[y](t, f, C) === !1) return;
      }
      p = p.parent;
    }
    if (u) {
      un(), oa(u, null, 10, [
        t,
        f,
        C
      ]), cn();
      return;
    }
  }
  pb(t, a, r, o, m);
}
function pb(t, i, a, o = !0, r = !1) {
  if (process.env.NODE_ENV !== "production") {
    const u = Nl[i];
    if (a && Ks(a), k(`Unhandled error${u ? ` during execution of ${u}` : ""}`), a && $s(), o) throw t;
    console.error(t);
  } else {
    if (r) throw t;
    console.error(t);
  }
}
var ht = [], wn = -1, ia = [], ui = null, Qi = 0, Jd = /* @__PURE__ */ Promise.resolve(), ro = null, gb = 100;
function jd(t) {
  const i = ro || Jd;
  return t ? i.then(this ? t.bind(this) : t) : i;
}
function hb(t) {
  let i = wn + 1, a = ht.length;
  for (; i < a; ) {
    const o = i + a >>> 1, r = ht[o], u = Ba(r);
    u < t || u === t && r.flags & 2 ? i = o + 1 : a = o;
  }
  return i;
}
function wo(t) {
  if (!(t.flags & 1)) {
    const i = Ba(t), a = ht[ht.length - 1];
    !a || !(t.flags & 2) && i >= Ba(a) ? ht.push(t) : ht.splice(hb(i), 0, t), t.flags |= 1, Gd();
  }
}
function Gd() {
  ro || (ro = Jd.then($d));
}
function Wd(t) {
  $(t) ? ia.push(...t) : ui && t.id === -1 ? ui.splice(Qi + 1, 0, t) : t.flags & 1 || (ia.push(t), t.flags |= 1), Gd();
}
function Vm(t, i, a = wn + 1) {
  for (process.env.NODE_ENV !== "production" && (i = i || /* @__PURE__ */ new Map()); a < ht.length; a++) {
    const o = ht[a];
    if (o && o.flags & 2) {
      if (t && o.id !== t.uid || process.env.NODE_ENV !== "production" && Ml(i, o)) continue;
      ht.splice(a, 1), a--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Kd(t) {
  if (ia.length) {
    const i = [...new Set(ia)].sort((a, o) => Ba(a) - Ba(o));
    if (ia.length = 0, ui) {
      ui.push(...i);
      return;
    }
    for (ui = i, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Qi = 0; Qi < ui.length; Qi++) {
      const a = ui[Qi];
      process.env.NODE_ENV !== "production" && Ml(t, a) || (a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), a.flags &= -2);
    }
    ui = null, Qi = 0;
  }
}
var Ba = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function $d(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const i = process.env.NODE_ENV !== "production" ? (a) => Ml(t, a) : Ze;
  try {
    for (wn = 0; wn < ht.length; wn++) {
      const a = ht[wn];
      if (a && !(a.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && i(a)) continue;
        a.flags & 4 && (a.flags &= -2), oa(a, a.i, a.i ? 15 : 14), a.flags & 4 || (a.flags &= -2);
      }
    }
  } finally {
    for (; wn < ht.length; wn++) {
      const a = ht[wn];
      a && (a.flags &= -2);
    }
    wn = -1, ht.length = 0, Kd(t), ro = null, (ht.length || ia.length) && $d(t);
  }
}
function Ml(t, i) {
  const a = t.get(i) || 0;
  if (a > gb) {
    const o = i.i, r = o && Mp(o.type);
    return Ka(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10), !0;
  }
  return t.set(i, a + 1), !1;
}
var Mt = !1, Em = (t) => {
  try {
    return Mt;
  } finally {
    Mt = t;
  }
}, Xs = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Wa().__VUE_HMR_RUNTIME__ = {
  createRecord: Wr(Xd),
  rerender: Wr(bb),
  reload: Wr(vb)
});
var Ni = /* @__PURE__ */ new Map();
function fb(t) {
  const i = t.type.__hmrId;
  let a = Ni.get(i);
  a || (Xd(i, t.type), a = Ni.get(i)), a.instances.add(t);
}
function Ib(t) {
  Ni.get(t.type.__hmrId).instances.delete(t);
}
function Xd(t, i) {
  return Ni.has(t) ? !1 : (Ni.set(t, {
    initialDef: lo(i),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function lo(t) {
  return Op(t) ? t.__vccOpts : t;
}
function bb(t, i) {
  const a = Ni.get(t);
  a && (a.initialDef.render = i, [...a.instances].forEach((o) => {
    i && (o.render = i, lo(o.type).render = i), o.renderCache = [], Mt = !0, o.job.flags & 8 || o.update(), Mt = !1;
  }));
}
function vb(t, i) {
  const a = Ni.get(t);
  if (!a) return;
  i = lo(i), Nm(a.initialDef, i);
  const o = [...a.instances];
  for (let r = 0; r < o.length; r++) {
    const u = o[r], m = lo(u.type);
    let p = Xs.get(m);
    p || (m !== a.initialDef && Nm(m, i), Xs.set(m, p = /* @__PURE__ */ new Set())), p.add(u), u.appContext.propsCache.delete(u.type), u.appContext.emitsCache.delete(u.type), u.appContext.optionsCache.delete(u.type), u.ceReload ? (p.add(u), u.ceReload(i.styles), p.delete(u)) : u.parent ? wo(() => {
      u.job.flags & 8 || (Mt = !0, u.parent.update(), Mt = !1, p.delete(u));
    }) : u.appContext.reload ? u.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required."), u.root.ce && u !== u.root && u.root.ce._removeChildStyle(m);
  }
  Wd(() => {
    Xs.clear();
  });
}
function Nm(t, i) {
  Ae(t, i);
  for (const a in t) a !== "__file" && !(a in i) && delete t[a];
}
function Wr(t) {
  return (i, a) => {
    try {
      return t(i, a);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
var an, Sa = [], rl = !1;
function $a(t, ...i) {
  an ? an.emit(t, ...i) : rl || Sa.push({
    event: t,
    args: i
  });
}
function Ol(t, i) {
  var a, o;
  an = t, an ? (an.enabled = !0, Sa.forEach(({ event: r, args: u }) => an.emit(r, ...u)), Sa = []) : typeof window < "u" && window.HTMLElement && !((o = (a = window.navigator) == null ? void 0 : a.userAgent) != null && o.includes("jsdom")) ? ((i.__VUE_DEVTOOLS_HOOK_REPLAY__ = i.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Ol(r, i);
  }), setTimeout(() => {
    an || (i.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, rl = !0, Sa = []);
  }, 3e3)) : (rl = !0, Sa = []);
}
function yb(t, i) {
  $a("app:init", t, i, {
    Fragment: Et,
    Text: Xa,
    Comment: zt,
    Static: Qs
  });
}
function Tb(t) {
  $a("app:unmount", t);
}
var _b = /* @__PURE__ */ zl("component:added"), Zd = /* @__PURE__ */ zl("component:updated"), wb = /* @__PURE__ */ zl("component:removed"), Cb = (t) => {
  an && typeof an.cleanupBuffer == "function" && !an.cleanupBuffer(t) && wb(t);
};
// @__NO_SIDE_EFFECTS__
function zl(t) {
  return (i) => {
    $a(t, i.appContext.app, i.uid, i.parent ? i.parent.uid : void 0, i);
  };
}
var Rb = /* @__PURE__ */ Yd("perf:start"), Ub = /* @__PURE__ */ Yd("perf:end");
function Yd(t) {
  return (i, a, o) => {
    $a(t, i.appContext.app, i.uid, i, a, o);
  };
}
function Sb(t, i, a) {
  $a("component:emit", t.appContext.app, t, i, a);
}
var lt = null, Qd = null;
function uo(t) {
  const i = lt;
  return lt = t, Qd = t && t.type.__scopeId || null, i;
}
function Ab(t, i = lt, a) {
  if (!i || t._n) return t;
  const o = (...r) => {
    o._d && jm(-1);
    const u = uo(i);
    let m;
    try {
      m = t(...r);
    } finally {
      uo(u), o._d && jm(1);
    }
    return process.env.NODE_ENV !== "production" && Zd(i), m;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ep(t) {
  y2(t) && k("Do not use built-in directive ids as custom directive id: " + t);
}
function Vb(t, i) {
  if (lt === null)
    return process.env.NODE_ENV !== "production" && k("withDirectives can only be used inside render functions."), t;
  const a = So(lt), o = t.dirs || (t.dirs = []);
  for (let r = 0; r < i.length; r++) {
    let [u, m, p, f = Ce] = i[r];
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
  return t;
}
function _i(t, i, a, o) {
  const r = t.dirs, u = i && i.dirs;
  for (let m = 0; m < r.length; m++) {
    const p = r[m];
    u && (p.oldValue = u[m].value);
    let f = p.dir[o];
    f && (un(), pn(f, a, 8, [
      t.el,
      p,
      t,
      i
    ]), cn());
  }
}
function Eb(t, i) {
  if (process.env.NODE_ENV !== "production" && (!$e || $e.isMounted) && k("provide() can only be used inside setup()."), $e) {
    let a = $e.provides;
    const o = $e.parent && $e.parent.provides;
    o === a && (a = $e.provides = Object.create(o)), a[t] = i;
  }
}
function Zs(t, i, a = !1) {
  const o = Ap();
  if (o || aa) {
    let r = aa ? aa._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && t in r) return r[t];
    if (arguments.length > 1) return a && te(i) ? i.call(o && o.proxy) : i;
    process.env.NODE_ENV !== "production" && k(`injection "${String(t)}" not found.`);
  } else process.env.NODE_ENV !== "production" && k("inject() can only be used inside setup() or functional components.");
}
var Nb = /* @__PURE__ */ Symbol.for("v-scx"), Mb = () => {
  {
    const t = Zs(Nb);
    return t || process.env.NODE_ENV !== "production" && k("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), t;
  }
};
function Oa(t, i, a) {
  return process.env.NODE_ENV !== "production" && !te(i) && k("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), tp(t, i, a);
}
function tp(t, i, a = Ce) {
  const { immediate: o, deep: r, flush: u, once: m } = a;
  process.env.NODE_ENV !== "production" && !i && (o !== void 0 && k('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && k('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'), m !== void 0 && k('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));
  const p = Ae({}, a);
  process.env.NODE_ENV !== "production" && (p.onWarn = k);
  const f = i && o || !i && u !== "post";
  let C;
  if (Ha) {
    if (u === "sync") {
      const P = Mb();
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
    q ? P() : wo(P);
  }), p.augmentJob = (P) => {
    i && (P.flags |= 4), y && (P.flags |= 2, T && (P.id = T.uid, P.i = T));
  };
  const V = lb(t, i, p);
  return Ha && (C ? C.push(V) : f && V()), V;
}
function Ob(t, i, a) {
  const o = this.proxy, r = Ee(t) ? t.includes(".") ? np(o, t) : () => o[t] : t.bind(o, o);
  let u;
  te(i) ? u = i : (u = i.handler, a = i);
  const m = Za(this), p = tp(r, u.bind(o), a);
  return m(), p;
}
function np(t, i) {
  const a = i.split(".");
  return () => {
    let o = t;
    for (let r = 0; r < a.length && o; r++) o = o[a[r]];
    return o;
  };
}
var zb = /* @__PURE__ */ Symbol("_vte"), Pb = (t) => t.__isTeleport, Kr = /* @__PURE__ */ Symbol("_leaveCb");
function Pl(t, i) {
  t.shapeFlag & 6 && t.component ? (t.transition = i, Pl(t.component.subTree, i)) : t.shapeFlag & 128 ? (t.ssContent.transition = i.clone(t.ssContent), t.ssFallback.transition = i.clone(t.ssFallback)) : t.transition = i;
}
// @__NO_SIDE_EFFECTS__
function ip(t, i) {
  return te(t) ? Ae({ name: t.name }, i, { setup: t }) : t;
}
function ap(t) {
  t.ids = [
    t.ids[0] + t.ids[2]++ + "-",
    0,
    0
  ];
}
var Mm = /* @__PURE__ */ new WeakSet();
function Om(t, i) {
  let a;
  return !!((a = Object.getOwnPropertyDescriptor(t, i)) && !a.configurable);
}
var co = /* @__PURE__ */ new WeakMap();
function za(t, i, a, o, r = !1) {
  if ($(t)) {
    t.forEach((W, he) => za(W, i && ($(i) ? i[he] : i), a, o, r));
    return;
  }
  if (Pa(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && za(t, i, a, o.component.subTree);
    return;
  }
  const u = o.shapeFlag & 4 ? So(o.component) : o.el, m = r ? null : u, { i: p, r: f } = t;
  if (process.env.NODE_ENV !== "production" && !p) {
    k("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const C = i && i.r, T = p.refs === Ce ? p.refs = {} : p.refs, y = p.setupState, V = /* @__PURE__ */ ue(y), P = y === Ce ? vd : (W) => process.env.NODE_ENV !== "production" && (ge(V, W) && !/* @__PURE__ */ je(V[W]) && k(`Template ref "${W}" used on a non-ref value. It will not work in the production build.`), Mm.has(V[W])) || Om(T, W) ? !1 : ge(V, W), q = (W, he) => !(process.env.NODE_ENV !== "production" && Mm.has(W) || he && Om(T, he));
  if (C != null && C !== f) {
    if (zm(i), Ee(C))
      T[C] = null, P(C) && (y[C] = null);
    else if (/* @__PURE__ */ je(C)) {
      const W = i;
      q(C, W.k) && (C.value = null), W.k && (T[W.k] = null);
    }
  }
  if (te(f)) oa(f, p, 12, [m, T]);
  else {
    const W = Ee(f), he = /* @__PURE__ */ je(f);
    if (W || he) {
      const ye = () => {
        if (t.f) {
          const fe = W ? P(f) ? y[f] : T[f] : q(f) || !t.k ? f.value : T[t.k];
          if (r) $(fe) && vl(fe, u);
          else if ($(fe)) fe.includes(u) || fe.push(u);
          else if (W)
            T[f] = [u], P(f) && (y[f] = T[f]);
          else {
            const se = [u];
            q(f, t.k) && (f.value = se), t.k && (T[t.k] = se);
          }
        } else W ? (T[f] = m, P(f) && (y[f] = m)) : he ? (q(f, t.k) && (f.value = m), t.k && (T[t.k] = m)) : process.env.NODE_ENV !== "production" && k("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (m) {
        const fe = () => {
          ye(), co.delete(t);
        };
        fe.id = -1, co.set(t, fe), Tt(fe, a);
      } else
        zm(t), ye();
    } else process.env.NODE_ENV !== "production" && k("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function zm(t) {
  const i = co.get(t);
  i && (i.flags |= 8, co.delete(t));
}
var YT = Wa().requestIdleCallback || ((t) => setTimeout(t, 1)), QT = Wa().cancelIdleCallback || ((t) => clearTimeout(t)), Pa = (t) => !!t.type.__asyncLoader, Dl = (t) => t.type.__isKeepAlive;
function Db(t, i) {
  sp(t, "a", i);
}
function xb(t, i) {
  sp(t, "da", i);
}
function sp(t, i, a = $e) {
  const o = t.__wdc || (t.__wdc = () => {
    let r = a;
    for (; r; ) {
      if (r.isDeactivated) return;
      r = r.parent;
    }
    return t();
  });
  if (Co(i, o, a), a) {
    let r = a.parent;
    for (; r && r.parent; )
      Dl(r.parent.vnode) && Lb(o, i, a, r), r = r.parent;
  }
}
function Lb(t, i, a, o) {
  const r = Co(i, t, o, !0);
  op(() => {
    vl(o[i], r);
  }, a);
}
function Co(t, i, a = $e, o = !1) {
  if (a) {
    const r = a[t] || (a[t] = []), u = i.__weh || (i.__weh = (...m) => {
      un();
      const p = Za(a), f = pn(i, a, t, m);
      return p(), cn(), f;
    });
    return o ? r.unshift(u) : r.push(u), u;
  } else process.env.NODE_ENV !== "production" && k(`${Ri(Nl[t].replace(/ hook$/, ""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
}
var $n = (t) => (i, a = $e) => {
  (!Ha || t === "sp") && Co(t, (...o) => i(...o), a);
}, Fb = $n("bm"), kb = $n("m"), Bb = $n("bu"), qb = $n("u"), Hb = $n("bum"), op = $n("um"), Jb = $n("sp"), jb = $n("rtg"), Gb = $n("rtc");
function Wb(t, i = $e) {
  Co("ec", t, i);
}
var Kb = /* @__PURE__ */ Symbol.for("v-ndc");
function $r(t, i, a, o) {
  let r;
  const u = a && a[o], m = $(t);
  if (m || Ee(t)) {
    const p = m && /* @__PURE__ */ ci(t);
    let f = !1, C = !1;
    p && (f = !/* @__PURE__ */ ft(t), C = /* @__PURE__ */ mn(t), t = yo(t)), r = new Array(t.length);
    for (let T = 0, y = t.length; T < y; T++) r[T] = i(f ? C ? sa(dn(t[T])) : dn(t[T]) : t[T], T, void 0, u && u[T]);
  } else if (typeof t == "number") if (process.env.NODE_ENV !== "production" && (!Number.isInteger(t) || t < 0))
    k(`The v-for range expects a positive integer value but got ${t}.`), r = [];
  else {
    r = new Array(t);
    for (let p = 0; p < t; p++) r[p] = i(p + 1, p, void 0, u && u[p]);
  }
  else if (ve(t)) if (t[Symbol.iterator]) r = Array.from(t, (p, f) => i(p, f, void 0, u && u[f]));
  else {
    const p = Object.keys(t);
    r = new Array(p.length);
    for (let f = 0, C = p.length; f < C; f++) {
      const T = p[f];
      r[f] = i(t[T], T, f, u && u[f]);
    }
  }
  else r = [];
  return a && (a[o] = r), r;
}
var ll = (t) => t ? Vp(t) ? So(t) : ll(t.parent) : null, Ei = /* @__PURE__ */ Ae(/* @__PURE__ */ Object.create(null), {
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
  $options: (t) => Ll(t),
  $forceUpdate: (t) => t.f || (t.f = () => {
    wo(t.update);
  }),
  $nextTick: (t) => t.n || (t.n = jd.bind(t.proxy)),
  $watch: (t) => Ob.bind(t)
}), xl = (t) => t === "_" || t === "$", Xr = (t, i) => t !== Ce && !t.__isScriptSetup && ge(t, i), rp = {
  get({ _: t }, i) {
    if (i === "__v_skip") return !0;
    const { ctx: a, setupState: o, data: r, props: u, accessCache: m, type: p, appContext: f } = t;
    if (process.env.NODE_ENV !== "production" && i === "__isVue") return !0;
    if (i[0] !== "$") {
      const V = m[i];
      if (V !== void 0) switch (V) {
        case 1:
          return o[i];
        case 2:
          return r[i];
        case 4:
          return a[i];
        case 3:
          return u[i];
      }
      else {
        if (Xr(o, i))
          return m[i] = 1, o[i];
        if (r !== Ce && ge(r, i))
          return m[i] = 2, r[i];
        if (ge(u, i))
          return m[i] = 3, u[i];
        if (a !== Ce && ge(a, i))
          return m[i] = 4, a[i];
        ul && (m[i] = 0);
      }
    }
    const C = Ei[i];
    let T, y;
    if (C)
      return i === "$attrs" ? (Xe(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && po()) : process.env.NODE_ENV !== "production" && i === "$slots" && Xe(t, "get", i), C(t);
    if ((T = p.__cssModules) && (T = T[i])) return T;
    if (a !== Ce && ge(a, i))
      return m[i] = 4, a[i];
    if (y = f.config.globalProperties, ge(y, i)) return y[i];
    process.env.NODE_ENV !== "production" && lt && (!Ee(i) || i.indexOf("__v") !== 0) && (r !== Ce && xl(i[0]) && ge(r, i) ? k(`Property ${JSON.stringify(i)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : t === lt && k(`Property ${JSON.stringify(i)} was accessed during render but is not defined on instance.`));
  },
  set({ _: t }, i, a) {
    const { data: o, setupState: r, ctx: u } = t;
    return Xr(r, i) ? (r[i] = a, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && ge(r, i) ? (k(`Cannot mutate <script setup> binding "${i}" from Options API.`), !1) : o !== Ce && ge(o, i) ? (o[i] = a, !0) : ge(t.props, i) ? (process.env.NODE_ENV !== "production" && k(`Attempting to mutate prop "${i}". Props are readonly.`), !1) : i[0] === "$" && i.slice(1) in t ? (process.env.NODE_ENV !== "production" && k(`Attempting to mutate public property "${i}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && i in t.appContext.config.globalProperties ? Object.defineProperty(u, i, {
      enumerable: !0,
      configurable: !0,
      value: a
    }) : u[i] = a, !0);
  },
  has({ _: { data: t, setupState: i, accessCache: a, ctx: o, appContext: r, props: u, type: m } }, p) {
    let f;
    return !!(a[p] || t !== Ce && p[0] !== "$" && ge(t, p) || Xr(i, p) || ge(u, p) || ge(o, p) || ge(Ei, p) || ge(r.config.globalProperties, p) || (f = m.__cssModules) && f[p]);
  },
  defineProperty(t, i, a) {
    return a.get != null ? t._.accessCache[i] = 0 : ge(a, "value") && this.set(t, i, a.value, null), Reflect.defineProperty(t, i, a);
  }
};
process.env.NODE_ENV !== "production" && (rp.ownKeys = (t) => (k("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(t)));
function $b(t) {
  const i = {};
  return Object.defineProperty(i, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(Ei).forEach((a) => {
    Object.defineProperty(i, a, {
      configurable: !0,
      enumerable: !1,
      get: () => Ei[a](t),
      set: Ze
    });
  }), i;
}
function Xb(t) {
  const { ctx: i, propsOptions: [a] } = t;
  a && Object.keys(a).forEach((o) => {
    Object.defineProperty(i, o, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[o],
      set: Ze
    });
  });
}
function Zb(t) {
  const { ctx: i, setupState: a } = t;
  Object.keys(/* @__PURE__ */ ue(a)).forEach((o) => {
    if (!a.__isScriptSetup) {
      if (xl(o[0])) {
        k(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(i, o, {
        enumerable: !0,
        configurable: !0,
        get: () => a[o],
        set: Ze
      });
    }
  });
}
function Pm(t) {
  return $(t) ? t.reduce((i, a) => (i[a] = null, i), {}) : t;
}
function Yb() {
  const t = /* @__PURE__ */ Object.create(null);
  return (i, a) => {
    t[a] ? k(`${i} property "${a}" is already defined in ${t[a]}.`) : t[a] = i;
  };
}
var ul = !0;
function Qb(t) {
  const i = Ll(t), a = t.proxy, o = t.ctx;
  ul = !1, i.beforeCreate && Dm(i.beforeCreate, t, "bc");
  const { data: r, computed: u, methods: m, watch: p, provide: f, inject: C, created: T, beforeMount: y, mounted: V, beforeUpdate: P, updated: q, activated: W, deactivated: he, beforeDestroy: ye, beforeUnmount: fe, destroyed: se, unmounted: He, render: j, renderTracked: Ne, renderTriggered: xe, errorCaptured: Le, serverPrefetch: Ye, expose: Kt, inheritAttrs: gn, components: _t, directives: Oi, filters: ra } = i, hn = process.env.NODE_ENV !== "production" ? Yb() : null;
  if (process.env.NODE_ENV !== "production") {
    const [re] = t.propsOptions;
    if (re) for (const ne in re) hn("Props", ne);
  }
  if (C && ev(C, o, hn), m) for (const re in m) {
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
    if (process.env.NODE_ENV !== "production" && yl(re) && k("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !ve(re)) process.env.NODE_ENV !== "production" && k("data() should return an object.");
    else if (t.data = /* @__PURE__ */ El(re), process.env.NODE_ENV !== "production") for (const ne in re)
      hn("Data", ne), xl(ne[0]) || Object.defineProperty(o, ne, {
        configurable: !0,
        enumerable: !0,
        get: () => re[ne],
        set: Ze
      });
  }
  if (ul = !0, u) for (const re in u) {
    const ne = u[re], Pt = te(ne) ? ne.bind(a, a) : te(ne.get) ? ne.get.bind(a, a) : Ze;
    process.env.NODE_ENV !== "production" && Pt === Ze && k(`Computed property "${re}" has no getter.`);
    const En = no({
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
  if (p) for (const re in p) lp(p[re], o, a, re);
  if (f) {
    const re = te(f) ? f.call(a) : f;
    Reflect.ownKeys(re).forEach((ne) => {
      Eb(ne, re[ne]);
    });
  }
  T && Dm(T, t, "c");
  function st(re, ne) {
    $(ne) ? ne.forEach((Pt) => re(Pt.bind(a))) : ne && re(ne.bind(a));
  }
  if (st(Fb, y), st(kb, V), st(Bb, P), st(qb, q), st(Db, W), st(xb, he), st(Wb, Le), st(Gb, Ne), st(jb, xe), st(Hb, fe), st(op, He), st(Jb, Ye), $(Kt))
    if (Kt.length) {
      const re = t.exposed || (t.exposed = {});
      Kt.forEach((ne) => {
        Object.defineProperty(re, ne, {
          get: () => a[ne],
          set: (Pt) => a[ne] = Pt,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  j && t.render === Ze && (t.render = j), gn != null && (t.inheritAttrs = gn), _t && (t.components = _t), Oi && (t.directives = Oi), Ye && ap(t);
}
function ev(t, i, a = Ze) {
  $(t) && (t = cl(t));
  for (const o in t) {
    const r = t[o];
    let u;
    ve(r) ? "default" in r ? u = Zs(r.from || o, r.default, !0) : u = Zs(r.from || o) : u = Zs(r), /* @__PURE__ */ je(u) ? Object.defineProperty(i, o, {
      enumerable: !0,
      configurable: !0,
      get: () => u.value,
      set: (m) => u.value = m
    }) : i[o] = u, process.env.NODE_ENV !== "production" && a("Inject", o);
  }
}
function Dm(t, i, a) {
  pn($(t) ? t.map((o) => o.bind(i.proxy)) : t.bind(i.proxy), i, a);
}
function lp(t, i, a, o) {
  let r = o.includes(".") ? np(a, o) : () => a[o];
  if (Ee(t)) {
    const u = i[t];
    te(u) ? Oa(r, u) : process.env.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${t}"`, u);
  } else if (te(t)) Oa(r, t.bind(a));
  else if (ve(t)) if ($(t)) t.forEach((u) => lp(u, i, a, o));
  else {
    const u = te(t.handler) ? t.handler.bind(a) : i[t.handler];
    te(u) ? Oa(r, u, t) : process.env.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${t.handler}"`, u);
  }
  else process.env.NODE_ENV !== "production" && k(`Invalid watch option: "${o}"`, t);
}
function Ll(t) {
  const i = t.type, { mixins: a, extends: o } = i, { mixins: r, optionsCache: u, config: { optionMergeStrategies: m } } = t.appContext, p = u.get(i);
  let f;
  return p ? f = p : !r.length && !a && !o ? f = i : (f = {}, r.length && r.forEach((C) => mo(f, C, m, !0)), mo(f, i, m)), ve(i) && u.set(i, f), f;
}
function mo(t, i, a, o = !1) {
  const { mixins: r, extends: u } = i;
  u && mo(t, u, a, !0), r && r.forEach((m) => mo(t, m, a, !0));
  for (const m in i) if (o && m === "expose") process.env.NODE_ENV !== "production" && k('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
  else {
    const p = tv[m] || a && a[m];
    t[m] = p ? p(t[m], i[m]) : i[m];
  }
  return t;
}
var tv = {
  data: xm,
  props: Lm,
  emits: Lm,
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
  watch: iv,
  provide: xm,
  inject: nv
};
function xm(t, i) {
  return i ? t ? function() {
    return Ae(te(t) ? t.call(this, this) : t, te(i) ? i.call(this, this) : i);
  } : i : t;
}
function nv(t, i) {
  return Aa(cl(t), cl(i));
}
function cl(t) {
  if ($(t)) {
    const i = {};
    for (let a = 0; a < t.length; a++) i[t[a]] = t[a];
    return i;
  }
  return t;
}
function gt(t, i) {
  return t ? [...new Set([].concat(t, i))] : i;
}
function Aa(t, i) {
  return t ? Ae(/* @__PURE__ */ Object.create(null), t, i) : i;
}
function Lm(t, i) {
  return t ? $(t) && $(i) ? [.../* @__PURE__ */ new Set([...t, ...i])] : Ae(/* @__PURE__ */ Object.create(null), Pm(t), Pm(i ?? {})) : i;
}
function iv(t, i) {
  if (!t) return i;
  if (!i) return t;
  const a = Ae(/* @__PURE__ */ Object.create(null), t);
  for (const o in i) a[o] = gt(t[o], i[o]);
  return a;
}
function up() {
  return {
    app: null,
    config: {
      isNativeTag: vd,
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
var av = 0;
function sv(t, i) {
  return function(o, r = null) {
    te(o) || (o = Ae({}, o)), r != null && !ve(r) && (process.env.NODE_ENV !== "production" && k("root props passed to app.mount() must be an object."), r = null);
    const u = up(), m = /* @__PURE__ */ new WeakSet(), p = [];
    let f = !1;
    const C = u.app = {
      _uid: av++,
      _component: o,
      _props: r,
      _container: null,
      _context: u,
      _instance: null,
      version: Zm,
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
        return process.env.NODE_ENV !== "production" && fl(T, u.config), y ? (process.env.NODE_ENV !== "production" && u.components[T] && k(`Component "${T}" has already been registered in target app.`), u.components[T] = y, C) : u.components[T];
      },
      directive(T, y) {
        return process.env.NODE_ENV !== "production" && ep(T), y ? (process.env.NODE_ENV !== "production" && u.directives[T] && k(`Directive "${T}" has already been registered in target app.`), u.directives[T] = y, C) : u.directives[T];
      },
      mount(T, y, V) {
        if (f)
          process.env.NODE_ENV !== "production" && k("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && T.__vue_app__ && k("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const P = C._ceVNode || An(o, r);
          return P.appContext = u, V === !0 ? V = "svg" : V === !1 && (V = void 0), process.env.NODE_ENV !== "production" && (u.reload = () => {
            const q = mi(P);
            q.el = null, t(q, T, V);
          }), y && i ? i(P, T) : t(P, T, V), f = !0, C._container = T, T.__vue_app__ = C, process.env.NODE_ENV !== "production" && (C._instance = P.component, yb(C, Zm)), So(P.component);
        }
      },
      onUnmount(T) {
        process.env.NODE_ENV !== "production" && typeof T != "function" && k(`Expected function as first argument to app.onUnmount(), but got ${typeof T}`), p.push(T);
      },
      unmount() {
        f ? (pn(p, C._instance, 16), t(null, C._container), process.env.NODE_ENV !== "production" && (C._instance = null, Tb(C)), delete C._container.__vue_app__) : process.env.NODE_ENV !== "production" && k("Cannot unmount an app that is not mounted.");
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
var aa = null, ov = (t, i) => i === "modelValue" || i === "model-value" ? t.modelModifiers : t[`${i}Modifiers`] || t[`${at(i)}Modifiers`] || t[`${Nt(i)}Modifiers`];
function rv(t, i, ...a) {
  if (t.isUnmounted) return;
  const o = t.vnode.props || Ce;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: T, propsOptions: [y] } = t;
    if (T) if (!(i in T))
      (!y || !(Ri(at(i)) in y)) && k(`Component emitted event "${i}" but it is neither declared in the emits option nor as an "${Ri(at(i))}" prop.`);
    else {
      const V = T[i];
      te(V) && (V(...a) || k(`Invalid event arguments: event validation failed for event "${i}".`));
    }
  }
  let r = a;
  const u = i.startsWith("update:"), m = u && ov(o, i.slice(7));
  if (m && (m.trim && (r = a.map((T) => Ee(T) ? T.trim() : T)), m.number && (r = a.map(wl))), process.env.NODE_ENV !== "production" && Sb(t, i, r), process.env.NODE_ENV !== "production") {
    const T = i.toLowerCase();
    T !== i && o[Ri(T)] && k(`Event "${T}" is emitted in component ${Ya(t, t.type)} but the handler is registered for "${i}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Nt(i)}" instead of "${i}".`);
  }
  let p, f = o[p = Ri(i)] || o[p = Ri(at(i))];
  !f && u && (f = o[p = Ri(Nt(i))]), f && pn(f, t, 6, r);
  const C = o[p + "Once"];
  if (C) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[p]) return;
    t.emitted[p] = !0, pn(C, t, 6, r);
  }
}
var lv = /* @__PURE__ */ new WeakMap();
function cp(t, i, a = !1) {
  const o = a ? lv : i.emitsCache, r = o.get(t);
  if (r !== void 0) return r;
  const u = t.emits;
  let m = {}, p = !1;
  if (!te(t)) {
    const f = (C) => {
      const T = cp(C, i, !0);
      T && (p = !0, Ae(m, T));
    };
    !a && i.mixins.length && i.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  return !u && !p ? (ve(t) && o.set(t, null), null) : ($(u) ? u.forEach((f) => m[f] = null) : Ae(m, u), ve(t) && o.set(t, m), m);
}
function Ro(t, i) {
  return !t || !ja(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), ge(t, i[0].toLowerCase() + i.slice(1)) || ge(t, Nt(i)) || ge(t, i));
}
var ml = !1;
function po() {
  ml = !0;
}
function Zr(t) {
  const { type: i, vnode: a, proxy: o, withProxy: r, propsOptions: [u], slots: m, attrs: p, emit: f, render: C, renderCache: T, props: y, data: V, setupState: P, ctx: q, inheritAttrs: W } = t, he = uo(t);
  let ye, fe;
  process.env.NODE_ENV !== "production" && (ml = !1);
  try {
    if (a.shapeFlag & 4) {
      const j = r || o, Ne = process.env.NODE_ENV !== "production" && P.__isScriptSetup ? new Proxy(j, { get(xe, Le, Ye) {
        return k(`Property '${String(Le)}' was accessed via 'this'. Avoid using 'this' in templates.`), Reflect.get(xe, Le, Ye);
      } }) : j;
      ye = nn(C.call(Ne, j, T, process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(y) : y, P, V, q)), fe = p;
    } else {
      const j = i;
      process.env.NODE_ENV !== "production" && p === y && po(), ye = nn(j.length > 1 ? j(process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(y) : y, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return po(), /* @__PURE__ */ Sn(p);
        },
        slots: m,
        emit: f
      } : {
        attrs: p,
        slots: m,
        emit: f
      }) : j(process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(y) : y, null)), fe = i.props ? p : uv(p);
    }
  } catch (j) {
    Da.length = 0, Ka(j, t, 1), ye = An(zt);
  }
  let se = ye, He;
  if (process.env.NODE_ENV !== "production" && ye.patchFlag > 0 && ye.patchFlag & 2048 && ([se, He] = mp(ye)), fe && W !== !1) {
    const j = Object.keys(fe), { shapeFlag: Ne } = se;
    if (j.length) {
      if (Ne & 7)
        u && j.some(xa) && (fe = cv(fe, u)), se = mi(se, fe, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !ml && se.type !== zt) {
        const xe = Object.keys(p), Le = [], Ye = [];
        for (let Kt = 0, gn = xe.length; Kt < gn; Kt++) {
          const _t = xe[Kt];
          ja(_t) ? xa(_t) || Le.push(_t[2].toLowerCase() + _t.slice(3)) : Ye.push(_t);
        }
        Ye.length && k(`Extraneous non-props attributes (${Ye.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`), Le.length && k(`Extraneous non-emits event listeners (${Le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return a.dirs && (process.env.NODE_ENV !== "production" && !Fm(se) && k("Runtime directive used on component with non-element root node. The directives will not function as intended."), se = mi(se, null, !1, !0), se.dirs = se.dirs ? se.dirs.concat(a.dirs) : a.dirs), a.transition && (process.env.NODE_ENV !== "production" && !Fm(se) && k("Component inside <Transition> renders non-element root node that cannot be animated."), Pl(se, a.transition)), process.env.NODE_ENV !== "production" && He ? He(se) : ye = se, uo(he), ye;
}
var mp = (t) => {
  const i = t.children, a = t.dynamicChildren, o = Fl(i, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048) return mp(o);
  } else return [t, void 0];
  const r = i.indexOf(o), u = a ? a.indexOf(o) : -1, m = (p) => {
    i[r] = p, a && (u > -1 ? a[u] = p : p.patchFlag > 0 && (t.dynamicChildren = [...a, p]));
  };
  return [nn(o), m];
};
function Fl(t, i = !0) {
  let a;
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    if (Uo(r)) {
      if (r.type !== zt || r.children === "v-if") {
        if (a) return;
        if (a = r, process.env.NODE_ENV !== "production" && i && a.patchFlag > 0 && a.patchFlag & 2048) return Fl(a.children);
      }
    } else return;
  }
  return a;
}
var uv = (t) => {
  let i;
  for (const a in t) (a === "class" || a === "style" || ja(a)) && ((i || (i = {}))[a] = t[a]);
  return i;
}, cv = (t, i) => {
  const a = {};
  for (const o in t) (!xa(o) || !(o.slice(9) in i)) && (a[o] = t[o]);
  return a;
}, Fm = (t) => t.shapeFlag & 7 || t.type === zt;
function mv(t, i, a) {
  const { props: o, children: r, component: u } = t, { props: m, children: p, patchFlag: f } = i, C = u.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || p) && Mt || i.dirs || i.transition) return !0;
  if (a && f >= 0) {
    if (f & 1024) return !0;
    if (f & 16)
      return o ? km(o, m, C) : !!m;
    if (f & 8) {
      const T = i.dynamicProps;
      for (let y = 0; y < T.length; y++) {
        const V = T[y];
        if (dp(m, o, V) && !Ro(C, V)) return !0;
      }
    }
  } else
    return (r || p) && (!p || !p.$stable) ? !0 : o === m ? !1 : o ? m ? km(o, m, C) : !0 : !!m;
  return !1;
}
function km(t, i, a) {
  const o = Object.keys(i);
  if (o.length !== Object.keys(t).length) return !0;
  for (let r = 0; r < o.length; r++) {
    const u = o[r];
    if (dp(i, t, u) && !Ro(a, u)) return !0;
  }
  return !1;
}
function dp(t, i, a) {
  const o = t[a], r = i[a];
  return a === "style" && ve(o) && ve(r) ? !Rl(o, r) : o !== r;
}
function dv({ vnode: t, parent: i, suspense: a }, o) {
  for (; i; ) {
    const r = i.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.suspense.vnode.el = r.el = o, t = r), r === t)
      (t = i.vnode).el = o, i = i.parent;
    else break;
  }
  a && a.activeBranch === t && (a.vnode.el = o);
}
var pp = {}, gp = () => Object.create(pp), hp = (t) => Object.getPrototypeOf(t) === pp;
function pv(t, i, a, o = !1) {
  const r = {}, u = gp();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), fp(t, i, r, u);
  for (const m in t.propsOptions[0]) m in r || (r[m] = void 0);
  process.env.NODE_ENV !== "production" && bp(i || {}, r, t), a ? t.props = o ? r : /* @__PURE__ */ eb(r) : t.type.props ? t.props = r : t.props = u, t.attrs = u;
}
function gv(t) {
  for (; t; ) {
    if (t.type.__hmrId) return !0;
    t = t.parent;
  }
}
function hv(t, i, a, o) {
  const { props: r, attrs: u, vnode: { patchFlag: m } } = t, p = /* @__PURE__ */ ue(r), [f] = t.propsOptions;
  let C = !1;
  if (!(process.env.NODE_ENV !== "production" && gv(t)) && (o || m > 0) && !(m & 16)) {
    if (m & 8) {
      const T = t.vnode.dynamicProps;
      for (let y = 0; y < T.length; y++) {
        let V = T[y];
        if (Ro(t.emitsOptions, V)) continue;
        const P = i[V];
        if (f) if (ge(u, V))
          P !== u[V] && (u[V] = P, C = !0);
        else {
          const q = at(V);
          r[q] = dl(f, p, q, P, t, !1);
        }
        else P !== u[V] && (u[V] = P, C = !0);
      }
    }
  } else {
    fp(t, i, r, u) && (C = !0);
    let T;
    for (const y in p) (!i || !ge(i, y) && ((T = Nt(y)) === y || !ge(i, T))) && (f ? a && (a[y] !== void 0 || a[T] !== void 0) && (r[y] = dl(f, p, y, void 0, t, !0)) : delete r[y]);
    if (u !== p)
      for (const y in u) (!i || !ge(i, y)) && (delete u[y], C = !0);
  }
  C && Un(t.attrs, "set", ""), process.env.NODE_ENV !== "production" && bp(i || {}, r, t);
}
function fp(t, i, a, o) {
  const [r, u] = t.propsOptions;
  let m = !1, p;
  if (i) for (let f in i) {
    if (Ea(f)) continue;
    const C = i[f];
    let T;
    r && ge(r, T = at(f)) ? !u || !u.includes(T) ? a[T] = C : (p || (p = {}))[T] = C : Ro(t.emitsOptions, f) || (!(f in o) || C !== o[f]) && (o[f] = C, m = !0);
  }
  if (u) {
    const f = /* @__PURE__ */ ue(a), C = p || Ce;
    for (let T = 0; T < u.length; T++) {
      const y = u[T];
      a[y] = dl(r, f, y, C[y], t, !ge(C, y));
    }
  }
  return m;
}
function dl(t, i, a, o, r, u) {
  const m = t[a];
  if (m != null) {
    const p = ge(m, "default");
    if (p && o === void 0) {
      const f = m.default;
      if (m.type !== Function && !m.skipFactory && te(f)) {
        const { propsDefaults: C } = r;
        if (a in C) o = C[a];
        else {
          const T = Za(r);
          o = C[a] = f.call(null, i), T();
        }
      } else o = f;
      r.ce && r.ce._setProp(a, o);
    }
    m[0] && (u && !p ? o = !1 : m[1] && (o === "" || o === Nt(a)) && (o = !0));
  }
  return o;
}
var fv = /* @__PURE__ */ new WeakMap();
function Ip(t, i, a = !1) {
  const o = a ? fv : i.propsCache, r = o.get(t);
  if (r) return r;
  const u = t.props, m = {}, p = [];
  let f = !1;
  if (!te(t)) {
    const T = (y) => {
      f = !0;
      const [V, P] = Ip(y, i, !0);
      Ae(m, V), P && p.push(...P);
    };
    !a && i.mixins.length && i.mixins.forEach(T), t.extends && T(t.extends), t.mixins && t.mixins.forEach(T);
  }
  if (!u && !f)
    return ve(t) && o.set(t, na), na;
  if ($(u)) for (let T = 0; T < u.length; T++) {
    process.env.NODE_ENV !== "production" && !Ee(u[T]) && k("props must be strings when using array syntax.", u[T]);
    const y = at(u[T]);
    Bm(y) && (m[y] = Ce);
  }
  else if (u) {
    process.env.NODE_ENV !== "production" && !ve(u) && k("invalid props options", u);
    for (const T in u) {
      const y = at(T);
      if (Bm(y)) {
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
  return ve(t) && o.set(t, C), C;
}
function Bm(t) {
  return t[0] !== "$" && !Ea(t) ? !0 : (process.env.NODE_ENV !== "production" && k(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function Iv(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function bp(t, i, a) {
  const o = /* @__PURE__ */ ue(i), r = a.propsOptions[0], u = Object.keys(t).map((m) => at(m));
  for (const m in r) {
    let p = r[m];
    p != null && bv(m, o[m], p, process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(o) : o, !u.includes(m));
  }
}
function bv(t, i, a, o, r) {
  const { type: u, required: m, validator: p, skipCheck: f } = a;
  if (m && r) {
    k('Missing required prop: "' + t + '"');
    return;
  }
  if (!(i == null && !m)) {
    if (u != null && u !== !0 && !f) {
      let C = !1;
      const T = $(u) ? u : [u], y = [];
      for (let V = 0; V < T.length && !C; V++) {
        const { valid: P, expectedType: q } = yv(i, T[V]);
        y.push(q || ""), C = P;
      }
      if (!C) {
        k(Tv(t, i, y));
        return;
      }
    }
    p && !p(i, o) && k('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
var vv = /* @__PURE__ */ Vn("String,Number,Boolean,Function,Symbol,BigInt");
function yv(t, i) {
  let a;
  const o = Iv(i);
  if (o === "null") a = t === null;
  else if (vv(o)) {
    const r = typeof t;
    a = r === o.toLowerCase(), !a && r === "object" && (a = t instanceof i);
  } else o === "Object" ? a = ve(t) : o === "Array" ? a = $(t) : a = t instanceof i;
  return {
    valid: a,
    expectedType: o
  };
}
function Tv(t, i, a) {
  if (a.length === 0) return `Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${t}". Expected ${a.map(vo).join(" | ")}`;
  const r = a[0], u = Tl(i), m = qm(i, r), p = qm(i, u);
  return a.length === 1 && Hm(r) && _v(r, u) && (o += ` with value ${m}`), o += `, got ${u} `, Hm(u) && (o += `with value ${p}.`), o;
}
function qm(t, i) {
  return rn(t) ? t.toString() : i === "String" ? `"${t}"` : i === "Number" ? `${Number(t)}` : `${t}`;
}
function Hm(t) {
  return [
    "string",
    "number",
    "boolean"
  ].some((i) => t.toLowerCase() === i);
}
function _v(...t) {
  return t.every((i) => {
    const a = i.toLowerCase();
    return a !== "boolean" && a !== "symbol";
  });
}
var kl = (t) => t === "_" || t === "_ctx" || t === "$stable", Bl = (t) => $(t) ? t.map(nn) : [nn(t)], wv = (t, i, a) => {
  if (i._n) return i;
  const o = Ab((...r) => (process.env.NODE_ENV !== "production" && $e && !(a === null && lt) && !(a && a.root !== $e.root) && k(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Bl(i(...r))), a);
  return o._c = !1, o;
}, vp = (t, i, a) => {
  const o = t._ctx;
  for (const r in t) {
    if (kl(r)) continue;
    const u = t[r];
    if (te(u)) i[r] = wv(r, u, o);
    else if (u != null) {
      process.env.NODE_ENV !== "production" && k(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const m = Bl(u);
      i[r] = () => m;
    }
  }
}, yp = (t, i) => {
  process.env.NODE_ENV !== "production" && !Dl(t.vnode) && k("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const a = Bl(i);
  t.slots.default = () => a;
}, pl = (t, i, a) => {
  for (const o in i) (a || !kl(o)) && (t[o] = i[o]);
}, Cv = (t, i, a) => {
  const o = t.slots = gp();
  if (t.vnode.shapeFlag & 32) {
    const r = i._;
    r ? (pl(o, i, a), a && ao(o, "_", r, !0)) : vp(i, o);
  } else i && yp(t, i);
}, Rv = (t, i, a) => {
  const { vnode: o, slots: r } = t;
  let u = !0, m = Ce;
  if (o.shapeFlag & 32) {
    const p = i._;
    p ? process.env.NODE_ENV !== "production" && Mt ? (pl(r, i, a), Un(t, "set", "$slots")) : a && p === 1 ? u = !1 : pl(r, i, a) : (u = !i.$stable, vp(i, r)), m = i;
  } else i && (yp(t, i), m = { default: 1 });
  if (u)
    for (const p in r) !kl(p) && m[p] == null && delete r[p];
}, Ra, Gn;
function Hn(t, i) {
  t.appContext.config.performance && go() && Gn.mark(`vue-${i}-${t.uid}`), process.env.NODE_ENV !== "production" && Rb(t, i, go() ? Gn.now() : Date.now());
}
function Jn(t, i) {
  if (t.appContext.config.performance && go()) {
    const a = `vue-${i}-${t.uid}`, o = a + ":end", r = `<${Ya(t, t.type)}> ${i}`;
    Gn.mark(o), Gn.measure(r, a, o), Gn.clearMeasures(r), Gn.clearMarks(a), Gn.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Ub(t, i, go() ? Gn.now() : Date.now());
}
function go() {
  return Ra !== void 0 || (typeof window < "u" && window.performance ? (Ra = !0, Gn = window.performance) : Ra = !1), Ra;
}
function Uv() {
  const t = [];
  if (process.env.NODE_ENV !== "production" && t.length) {
    const i = t.length > 1;
    console.warn(`Feature flag${i ? "s" : ""} ${t.join(", ")} ${i ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
var Tt = Nv;
function Sv(t) {
  return Av(t);
}
function Av(t, i) {
  Uv();
  const a = Wa();
  a.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ol(a.__VUE_DEVTOOLS_GLOBAL_HOOK__, a);
  const { insert: o, remove: r, patchProp: u, createElement: m, createText: p, createComment: f, setText: C, setElementText: T, parentNode: y, nextSibling: V, setScopeId: P = Ze, insertStaticContent: q } = t, W = (h, v, U, M = null, O = null, N = null, F = void 0, x = null, L = process.env.NODE_ENV !== "production" && Mt ? !1 : !!v.dynamicChildren) => {
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
      case Qs:
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
    if (L = h.el = m(h.type, N, X && X.is, X), B & 8 ? T(L, h.children) : B & 16 && Ye(h.children, L, null, M, O, Yr(h, N), F, x), Z && _i(h, null, M, "created"), Le(L, h, h.scopeId, F, M), X) {
      for (const Ie in X) Ie !== "value" && !Ea(Ie) && u(L, Ie, null, X[Ie], N, M);
      "value" in X && u(L, "value", null, X.value, N), (z = X.onVnodeBeforeMount) && _n(z, M, h);
    }
    process.env.NODE_ENV !== "production" && (ao(L, "__vnode", h, !0), ao(L, "__vueParentComponent", M, !0)), Z && _i(h, null, M, "beforeMount");
    const ce = Vv(O, K);
    if (ce && K.beforeEnter(L), o(L, v, U), (z = X && X.onVnodeMounted) || ce || Z) {
      const Ie = process.env.NODE_ENV !== "production" && Mt;
      Tt(() => {
        let be;
        process.env.NODE_ENV !== "production" && (be = Em(Ie));
        try {
          z && _n(z, M, h), ce && K.enter(L), Z && _i(h, null, M, "mounted");
        } finally {
          process.env.NODE_ENV !== "production" && Em(be);
        }
      }, O);
    }
  }, Le = (h, v, U, M, O) => {
    if (U && P(h, U), M) for (let N = 0; N < M.length; N++) P(h, M[N]);
    if (O) {
      let N = O.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = Fl(N.children) || N), v === N || wp(N.type) && (N.ssContent === v || N.ssFallback === v)) {
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
    if (U && wi(U, !1), (Z = K.onVnodeBeforeUpdate) && _n(Z, U, v, h), X && _i(v, h, U, "beforeUpdate"), U && wi(U, !0), process.env.NODE_ENV !== "production" && Mt && (L = 0, F = !1, z = null), (B.innerHTML && K.innerHTML == null || B.textContent && K.textContent == null) && T(x, ""), z ? (gn(h.dynamicChildren, z, x, U, M, Yr(v, O), N), process.env.NODE_ENV !== "production" && Ys(h, v)) : F || Pt(h, v, x, null, U, M, Yr(v, O), N, !1), L > 0) {
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
    process.env.NODE_ENV !== "production" && (Mt || B & 2048) && (B = 0, L = !1, K = null), Z && (x = x ? x.concat(Z) : Z), h == null ? (o(z, U, M), o(X, U, M), Ye(v.children || [], U, X, O, N, F, x, L)) : B > 0 && B & 64 && K && h.dynamicChildren && h.dynamicChildren.length === K.length ? (gn(h.dynamicChildren, K, U, O, N, F, x), process.env.NODE_ENV !== "production" ? Ys(h, v) : (v.key != null || O && v === O.subTree) && Ys(h, v, !0)) : Pt(h, v, U, X, O, N, F, x, L);
  }, ra = (h, v, U, M, O, N, F, x, L) => {
    v.slotScopeIds = x, h == null ? v.shapeFlag & 512 ? O.ctx.activate(v, U, M, F, L) : hn(v, U, M, O, N, F, L) : st(h, v, L);
  }, hn = (h, v, U, M, O, N, F) => {
    const x = h.component = Fv(h, M, O);
    if (process.env.NODE_ENV !== "production" && x.type.__hmrId && fb(x), process.env.NODE_ENV !== "production" && (Ks(h), Hn(x, "mount")), Dl(h) && (x.ctx.renderer = $t), process.env.NODE_ENV !== "production" && Hn(x, "init"), Bv(x, !1, F), process.env.NODE_ENV !== "production" && Jn(x, "init"), process.env.NODE_ENV !== "production" && Mt && (h.el = null), x.asyncDep) {
      if (O && O.registerDep(x, re, F), !h.el) {
        const L = x.subTree = An(zt);
        ye(null, L, v, U), h.placeholder = L.el;
      }
    } else re(x, h, v, U, O, N, F);
    process.env.NODE_ENV !== "production" && ($s(), Jn(x, "mount"));
  }, st = (h, v, U) => {
    const M = v.component = h.component;
    if (mv(h, v, U)) if (M.asyncDep && !M.asyncResolved) {
      process.env.NODE_ENV !== "production" && Ks(v), ne(M, v, U), process.env.NODE_ENV !== "production" && $s();
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
          const tt = Tp(h);
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
        process.env.NODE_ENV !== "production" && Ks(B || h.vnode), wi(h, !1), B ? (B.el = Ie.el, ne(h, B, F)) : B = Ie, K && Yi(K), (Oe = B.props && B.props.onVnodeBeforeUpdate) && _n(Oe, ce, B, Ie), wi(h, !0), process.env.NODE_ENV !== "production" && Hn(h, "render");
        const Pe = Zr(h);
        process.env.NODE_ENV !== "production" && Jn(h, "render");
        const ct = h.subTree;
        h.subTree = Pe, process.env.NODE_ENV !== "production" && Hn(h, "patch"), W(ct, Pe, y(ct.el), In(ct), h, O, N), process.env.NODE_ENV !== "production" && Jn(h, "patch"), B.el = Pe.el, be === null && dv(h, Pe.el), Z && Tt(Z, O), (Oe = B.props && B.props.onVnodeUpdated) && Tt(() => _n(Oe, ce, B, Ie), O), process.env.NODE_ENV !== "production" && Zd(h), process.env.NODE_ENV !== "production" && $s();
      } else {
        let B;
        const { el: K, props: Z } = v, { bm: ce, m: Ie, parent: be, root: Oe, type: Pe } = h, ct = Pa(v);
        if (wi(h, !1), ce && Yi(ce), !ct && (B = Z && Z.onVnodeBeforeMount) && _n(B, be, v), wi(h, !0), K && Di) {
          const tt = () => {
            process.env.NODE_ENV !== "production" && Hn(h, "render"), h.subTree = Zr(h), process.env.NODE_ENV !== "production" && Jn(h, "render"), process.env.NODE_ENV !== "production" && Hn(h, "hydrate"), Di(K, h.subTree, h, O, null), process.env.NODE_ENV !== "production" && Jn(h, "hydrate");
          };
          ct && Pe.__asyncHydrate ? Pe.__asyncHydrate(K, h, tt) : tt();
        } else {
          Oe.ce && Oe.ce._hasShadowRoot() && Oe.ce._injectChildStyle(Pe, h.parent ? h.parent.type : void 0), process.env.NODE_ENV !== "production" && Hn(h, "render");
          const tt = h.subTree = Zr(h);
          process.env.NODE_ENV !== "production" && Jn(h, "render"), process.env.NODE_ENV !== "production" && Hn(h, "patch"), W(null, tt, U, M, h, O, N), process.env.NODE_ENV !== "production" && Jn(h, "patch"), v.el = tt.el;
        }
        if (Ie && Tt(Ie, O), !ct && (B = Z && Z.onVnodeMounted)) {
          const tt = v;
          Tt(() => _n(B, be, tt), O);
        }
        (v.shapeFlag & 256 || be && Pa(be.vnode) && be.vnode.shapeFlag & 256) && h.a && Tt(h.a, O), h.isMounted = !0, process.env.NODE_ENV !== "production" && _b(h), v = U = M = null;
      }
    };
    h.scope.on();
    const L = h.effect = new Ud(x);
    h.scope.off();
    const z = h.update = L.run.bind(L), X = h.job = L.runIfDirty.bind(L);
    X.i = h, X.id = h.uid, L.scheduler = () => wo(X), wi(h, !0), process.env.NODE_ENV !== "production" && (L.onTrack = h.rtc ? (B) => Yi(h.rtc, B) : void 0, L.onTrigger = h.rtg ? (B) => Yi(h.rtg, B) : void 0), z();
  }, ne = (h, v, U) => {
    v.component = h;
    const M = h.vnode.props;
    h.vnode = v, h.next = null, hv(h, v.props, M, U), Rv(h, v.children, U), un(), Vm(h), cn();
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
      const xi = ct ? Ev(Mn) : na;
      for (be = xi.length - 1, z = Pe - 1; z >= 0; z--) {
        const Ge = ce + z, Dt = v[Ge], es = v[Ge + 1], ts = Ge + 1 < X ? es.el || _p(es) : M;
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
    if (F === Qs) {
      He(h, v, U);
      return;
    }
    if (M !== 2 && z & 1 && x) if (M === 0) x.persisted && !N[Kr] ? o(N, v, U) : (x.beforeEnter(N), o(N, v, U), Tt(() => x.enter(N), O));
    else {
      const { leave: X, delayLeave: B, afterLeave: K } = x, Z = () => {
        h.ctx.isUnmounted ? r(N) : o(N, v, U);
      }, ce = () => {
        const Ie = N._isLeaving || !!N[Kr];
        N._isLeaving && N[Kr](!0), x.persisted && !Ie ? Z() : X(N, () => {
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
    if (v === Qs) {
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
    process.env.NODE_ENV !== "production" && h.type.__hmrId && Ib(h);
    const { bum: M, scope: O, job: N, subTree: F, um: x, m: L, a: z } = h;
    Jm(L), Jm(z), M && Yi(M), O.stop(), N && (N.flags |= 8, fn(F, h, v, U)), x && Tt(x, v), Tt(() => {
      h.isUnmounted = !0;
    }, v), process.env.NODE_ENV !== "production" && Cb(h);
  }, di = (h, v, U, M = !1, O = !1, N = 0) => {
    for (let F = N; F < h.length; F++) fn(h[F], v, U, M, O);
  }, In = (h) => {
    if (h.shapeFlag & 6) return In(h.component.subTree);
    if (h.shapeFlag & 128) return h.suspense.next();
    const v = V(h.anchor || h.el), U = v && v[zb];
    return U ? V(U) : v;
  };
  let Nn = !1;
  const Qa = (h, v, U) => {
    let M;
    h == null ? v._vnode && (fn(v._vnode, null, null, !0), M = v._vnode.component) : W(v._vnode || null, h, v, null, null, null, U), v._vnode = h, Nn || (Nn = !0, Vm(M), Kd(), Nn = !1);
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
    o: t
  };
  let Zn, Di;
  return i && ([Zn, Di] = i($t)), {
    render: Qa,
    hydrate: Zn,
    createApp: sv(Qa, Zn)
  };
}
function Yr({ type: t, props: i }, a) {
  return a === "svg" && t === "foreignObject" || a === "mathml" && t === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : a;
}
function wi({ effect: t, job: i }, a) {
  a ? (t.flags |= 32, i.flags |= 4) : (t.flags &= -33, i.flags &= -5);
}
function Vv(t, i) {
  return (!t || t && !t.pendingBranch) && i && !i.persisted;
}
function Ys(t, i, a = !1) {
  const o = t.children, r = i.children;
  if ($(o) && $(r)) for (let u = 0; u < o.length; u++) {
    const m = o[u];
    let p = r[u];
    p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = r[u] = Wn(r[u]), p.el = m.el), !a && p.patchFlag !== -2 && Ys(m, p)), p.type === Xa && (p.patchFlag === -1 && (p = r[u] = Wn(p)), p.el = m.el), p.type === zt && !p.el && (p.el = m.el), process.env.NODE_ENV !== "production" && p.el && (p.el.__vnode = p);
  }
}
function Ev(t) {
  const i = t.slice(), a = [0];
  let o, r, u, m, p;
  const f = t.length;
  for (o = 0; o < f; o++) {
    const C = t[o];
    if (C !== 0) {
      if (r = a[a.length - 1], t[r] < C) {
        i[o] = r, a.push(o);
        continue;
      }
      for (u = 0, m = a.length - 1; u < m; )
        p = u + m >> 1, t[a[p]] < C ? u = p + 1 : m = p;
      C < t[a[u]] && (u > 0 && (i[o] = a[u - 1]), a[u] = o);
    }
  }
  for (u = a.length, m = a[u - 1]; u-- > 0; )
    a[u] = m, m = i[m];
  return a;
}
function Tp(t) {
  const i = t.subTree.component;
  if (i) return i.asyncDep && !i.asyncResolved ? i : Tp(i);
}
function Jm(t) {
  if (t) for (let i = 0; i < t.length; i++) t[i].flags |= 8;
}
function _p(t) {
  if (t.placeholder) return t.placeholder;
  const i = t.component;
  return i ? _p(i.subTree) : null;
}
var wp = (t) => t.__isSuspense;
function Nv(t, i) {
  i && i.pendingBranch ? $(t) ? i.effects.push(...t) : i.effects.push(t) : Wd(t);
}
var Et = /* @__PURE__ */ Symbol.for("v-fgt"), Xa = /* @__PURE__ */ Symbol.for("v-txt"), zt = /* @__PURE__ */ Symbol.for("v-cmt"), Qs = /* @__PURE__ */ Symbol.for("v-stc"), Da = [], Ot = null;
function Gt(t = !1) {
  Da.push(Ot = t ? null : []);
}
function Mv() {
  Da.pop(), Ot = Da[Da.length - 1] || null;
}
var qa = 1;
function jm(t, i = !1) {
  qa += t, t < 0 && Ot && i && (Ot.hasOnce = !0);
}
function Cp(t) {
  return t.dynamicChildren = qa > 0 ? Ot || na : null, Mv(), qa > 0 && Ot && Ot.push(t), t;
}
function en(t, i, a, o, r, u) {
  return Cp(ke(t, i, a, o, r, u, !0));
}
function Ov(t, i, a, o, r) {
  return Cp(An(t, i, a, o, r, !0));
}
function Uo(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Ua(t, i) {
  if (process.env.NODE_ENV !== "production" && i.shapeFlag & 6 && t.component) {
    const a = Xs.get(i.type);
    if (a && a.has(t.component))
      return t.shapeFlag &= -257, i.shapeFlag &= -513, !1;
  }
  return t.type === i.type && t.key === i.key;
}
var Gm, zv = (...t) => Up(...Gm ? Gm(t, lt) : t), Rp = ({ key: t }) => t ?? null, eo = ({ ref: t, ref_key: i, ref_for: a }) => (typeof t == "number" && (t = "" + t), t != null ? Ee(t) || /* @__PURE__ */ je(t) || te(t) ? {
  i: lt,
  r: t,
  k: i,
  f: !!a
} : t : null);
function ke(t, i = null, a = null, o = 0, r = null, u = t === Et ? 0 : 1, m = !1, p = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: i,
    key: i && Rp(i),
    ref: i && eo(i),
    scopeId: Qd,
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
  return p ? (ql(f, a), u & 128 && t.normalize(f)) : a && (f.shapeFlag |= Ee(a) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && k("VNode created with invalid key (NaN). VNode type:", f.type), qa > 0 && !m && Ot && (f.patchFlag > 0 || u & 6) && f.patchFlag !== 32 && Ot.push(f), f;
}
var An = process.env.NODE_ENV !== "production" ? zv : Up;
function Up(t, i = null, a = null, o = 0, r = null, u = !1) {
  if ((!t || t === Kb) && (process.env.NODE_ENV !== "production" && !t && k(`Invalid vnode type when creating vnode: ${t}.`), t = zt), Uo(t)) {
    const p = mi(t, i, !0);
    return a && ql(p, a), qa > 0 && !u && Ot && (p.shapeFlag & 6 ? Ot[Ot.indexOf(t)] = p : Ot.push(p)), p.patchFlag = -2, p;
  }
  if (Op(t) && (t = t.__vccOpts), i) {
    i = Pv(i);
    let { class: p, style: f } = i;
    p && !Ee(p) && (i.class = La(p)), ve(f) && (/* @__PURE__ */ so(f) && !$(f) && (f = Ae({}, f)), i.style = Cl(f));
  }
  const m = Ee(t) ? 1 : wp(t) ? 128 : Pb(t) ? 64 : ve(t) ? 4 : te(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && m & 4 && /* @__PURE__ */ so(t) && (t = /* @__PURE__ */ ue(t), k("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, t)), ke(t, i, a, o, r, m, u, !0);
}
function Pv(t) {
  return t ? /* @__PURE__ */ so(t) || hp(t) ? Ae({}, t) : t : null;
}
function mi(t, i, a = !1, o = !1) {
  const { props: r, ref: u, patchFlag: m, children: p, transition: f } = t, C = i ? Dv(r || {}, i) : r, T = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: C,
    key: C && Rp(C),
    ref: i && i.ref ? a && u ? $(u) ? u.concat(eo(i)) : [u, eo(i)] : eo(i) : u,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && m === -1 && $(p) ? p.map(Sp) : p,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: i && t.type !== Et ? m === -1 ? 16 : m | 16 : m,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: f,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && mi(t.ssContent),
    ssFallback: t.ssFallback && mi(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return f && o && Pl(T, f.clone(T)), T;
}
function Sp(t) {
  const i = mi(t);
  return $(t.children) && (i.children = t.children.map(Sp)), i;
}
function gl(t = " ", i = 0) {
  return An(Xa, null, t, i);
}
function Ws(t = "", i = !1) {
  return i ? (Gt(), Ov(zt, null, t)) : An(zt, null, t);
}
function nn(t) {
  return t == null || typeof t == "boolean" ? An(zt) : $(t) ? An(Et, null, t.slice()) : Uo(t) ? Wn(t) : An(Xa, null, String(t));
}
function Wn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : mi(t);
}
function ql(t, i) {
  let a = 0;
  const { shapeFlag: o } = t;
  if (i == null) i = null;
  else if ($(i)) a = 16;
  else if (typeof i == "object") if (o & 65) {
    const r = i.default;
    r && (r._c && (r._d = !1), ql(t, r()), r._c && (r._d = !0));
    return;
  } else {
    a = 32;
    const r = i._;
    !r && !hp(i) ? i._ctx = lt : r === 3 && lt && (lt.slots._ === 1 ? i._ = 1 : (i._ = 2, t.patchFlag |= 1024));
  }
  else te(i) ? (i = {
    default: i,
    _ctx: lt
  }, a = 32) : (i = String(i), o & 64 ? (a = 16, i = [gl(i)]) : a = 8);
  t.children = i, t.shapeFlag |= a;
}
function Dv(...t) {
  const i = {};
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    for (const r in o) if (r === "class")
      i.class !== o.class && (i.class = La([i.class, o.class]));
    else if (r === "style") i.style = Cl([i.style, o.style]);
    else if (ja(r)) {
      const u = i[r], m = o[r];
      m && u !== m && !($(u) && u.includes(m)) ? i[r] = u ? [].concat(u, m) : m : m == null && u == null && !xa(r) && (i[r] = m);
    } else r !== "" && (i[r] = o[r]);
  }
  return i;
}
function _n(t, i, a, o = null) {
  pn(t, i, 7, [a, o]);
}
var xv = up(), Lv = 0;
function Fv(t, i, a) {
  const o = t.type, r = (i ? i.appContext : t.appContext) || xv, u = {
    uid: Lv++,
    vnode: t,
    type: o,
    parent: i,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    job: null,
    scope: new P2(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: i ? i.provides : Object.create(r.provides),
    ids: i ? i.ids : [
      "",
      0,
      0
    ],
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: Ip(o, r),
    emitsOptions: cp(o, r),
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
  return process.env.NODE_ENV !== "production" ? u.ctx = $b(u) : u.ctx = { _: u }, u.root = i ? i.root : u, u.emit = rv.bind(null, u), t.ce && t.ce(u), u;
}
var $e = null, Ap = () => $e || lt, ho, hl;
{
  const t = Wa(), i = (a, o) => {
    let r;
    return (r = t[a]) || (r = t[a] = []), r.push(o), (u) => {
      r.length > 1 ? r.forEach((m) => m(u)) : r[0](u);
    };
  };
  ho = i("__VUE_INSTANCE_SETTERS__", (a) => $e = a), hl = i("__VUE_SSR_SETTERS__", (a) => Ha = a);
}
var Za = (t) => {
  const i = $e;
  return ho(t), t.scope.on(), () => {
    t.scope.off(), ho(i);
  };
}, Wm = () => {
  $e && $e.scope.off(), ho(null);
}, kv = /* @__PURE__ */ Vn("slot,component");
function fl(t, { isNativeTag: i }) {
  (kv(t) || i(t)) && k("Do not use built-in or reserved HTML elements as component id: " + t);
}
function Vp(t) {
  return t.vnode.shapeFlag & 4;
}
var Ha = !1;
function Bv(t, i = !1, a = !1) {
  i && hl(i);
  const { props: o, children: r } = t.vnode, u = Vp(t);
  pv(t, o, u, i), Cv(t, r, a || i);
  const m = u ? qv(t, i) : void 0;
  return i && hl(!1), m;
}
function qv(t, i) {
  const a = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (a.name && fl(a.name, t.appContext.config), a.components) {
      const r = Object.keys(a.components);
      for (let u = 0; u < r.length; u++) fl(r[u], t.appContext.config);
    }
    if (a.directives) {
      const r = Object.keys(a.directives);
      for (let u = 0; u < r.length; u++) ep(r[u]);
    }
    a.compilerOptions && Ep() && k('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, rp), process.env.NODE_ENV !== "production" && Xb(t);
  const { setup: o } = a;
  if (o) {
    un();
    const r = t.setupContext = o.length > 1 ? Jv(t) : null, u = Za(t), m = oa(o, t, 0, [process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Sn(t.props) : t.props, r]), p = yl(m);
    if (cn(), u(), (p || t.sp) && !Pa(t) && ap(t), p) {
      if (m.then(Wm, Wm), i) return m.then((f) => {
        Km(t, f, i);
      }).catch((f) => {
        Ka(f, t, 0);
      });
      t.asyncDep = m, process.env.NODE_ENV !== "production" && !t.suspense && k(`Component <${Ya(t, a)}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
    } else Km(t, m, i);
  } else Np(t, i);
}
function Km(t, i, a) {
  te(i) ? t.type.__ssrInlineRender ? t.ssrRender = i : t.render = i : ve(i) ? (process.env.NODE_ENV !== "production" && Uo(i) && k("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = i), t.setupState = qd(i), process.env.NODE_ENV !== "production" && Zb(t)) : process.env.NODE_ENV !== "production" && i !== void 0 && k(`setup() should return an object. Received: ${i === null ? "null" : typeof i}`), Np(t, a);
}
var to, $m, Ep = () => !to;
function Np(t, i, a) {
  const o = t.type;
  if (!t.render) {
    if (!i && to && !o.render) {
      const r = o.template || Ll(t).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Hn(t, "compile");
        const { isCustomElement: u, compilerOptions: m } = t.appContext.config, { delimiters: p, compilerOptions: f } = o, C = Ae(Ae({
          isCustomElement: u,
          delimiters: p
        }, m), f);
        o.render = to(r, C), process.env.NODE_ENV !== "production" && Jn(t, "compile");
      }
    }
    t.render = o.render || Ze, $m && $m(t);
  }
  {
    const r = Za(t);
    un();
    try {
      Qb(t);
    } finally {
      cn(), r();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && t.render === Ze && !i && (!to && o.template ? k('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : k("Component is missing template or render function: ", o));
}
var Xm = process.env.NODE_ENV !== "production" ? {
  get(t, i) {
    return po(), Xe(t, "get", ""), t[i];
  },
  set() {
    return k("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return k("setupContext.attrs is readonly."), !1;
  }
} : { get(t, i) {
  return Xe(t, "get", ""), t[i];
} };
function Hv(t) {
  return new Proxy(t.slots, { get(i, a) {
    return Xe(t, "get", "$slots"), i[a];
  } });
}
function Jv(t) {
  const i = (a) => {
    if (process.env.NODE_ENV !== "production" && (t.exposed && k("expose() should be called only once per setup()."), a != null)) {
      let o = typeof a;
      o === "object" && ($(a) ? o = "array" : /* @__PURE__ */ je(a) && (o = "ref")), o !== "object" && k(`expose() should be passed a plain object, received ${o}.`);
    }
    t.exposed = a || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let a, o;
    return Object.freeze({
      get attrs() {
        return a || (a = new Proxy(t.attrs, Xm));
      },
      get slots() {
        return o || (o = Hv(t));
      },
      get emit() {
        return (r, ...u) => t.emit(r, ...u);
      },
      expose: i
    });
  } else return {
    attrs: new Proxy(t.attrs, Xm),
    slots: t.slots,
    emit: t.emit,
    expose: i
  };
}
function So(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(qd(tb(t.exposed)), {
    get(i, a) {
      if (a in i) return i[a];
      if (a in Ei) return Ei[a](t);
    },
    has(i, a) {
      return a in i || a in Ei;
    }
  })) : t.proxy;
}
var jv = /(?:^|[-_])\w/g, Gv = (t) => t.replace(jv, (i) => i.toUpperCase()).replace(/[-_]/g, "");
function Mp(t, i = !0) {
  return te(t) ? t.displayName || t.name : t.name || i && t.__name;
}
function Ya(t, i, a = !1) {
  let o = Mp(i);
  if (!o && i.__file) {
    const r = i.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && t) {
    const r = (u) => {
      for (const m in u) if (u[m] === i) return m;
    };
    o = r(t.components) || t.parent && r(t.parent.type.components) || r(t.appContext.components);
  }
  return o ? Gv(o) : a ? "App" : "Anonymous";
}
function Op(t) {
  return te(t) && "__vccOpts" in t;
}
var no = (t, i) => {
  const a = /* @__PURE__ */ ob(t, i, Ha);
  if (process.env.NODE_ENV !== "production") {
    const o = Ap();
    o && o.appContext.config.warnRecursiveComputed && (a._warnRecursive = !0);
  }
  return a;
};
function Wv() {
  if (process.env.NODE_ENV === "production" || typeof window > "u") return;
  const t = { style: "color:#3ba776" }, i = { style: "color:#1677ff" }, a = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(y) {
      if (!ve(y)) return null;
      if (y.__isVue) return [
        "div",
        t,
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
            t,
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
            t,
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
            t,
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
      i,
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
var Zm = "3.5.35", Wt = process.env.NODE_ENV !== "production" ? k : Ze, e_ = (process.env.NODE_ENV, an), t_ = (process.env.NODE_ENV, Ol), Il = void 0, Ym = typeof window < "u" && window.trustedTypes;
if (Ym) try {
  Il = /* @__PURE__ */ Ym.createPolicy("vue", { createHTML: (t) => t });
} catch (t) {
  process.env.NODE_ENV !== "production" && Wt(`Error creating trusted types policy: ${t}`);
}
var zp = Il ? (t) => Il.createHTML(t) : (t) => t, Kv = "http://www.w3.org/2000/svg", $v = "http://www.w3.org/1998/Math/MathML", jn = typeof document < "u" ? document : null, Qm = jn && /* @__PURE__ */ jn.createElement("template"), Xv = {
  insert: (t, i, a) => {
    i.insertBefore(t, a || null);
  },
  remove: (t) => {
    const i = t.parentNode;
    i && i.removeChild(t);
  },
  createElement: (t, i, a, o) => {
    const r = i === "svg" ? jn.createElementNS(Kv, t) : i === "mathml" ? jn.createElementNS($v, t) : a ? jn.createElement(t, { is: a }) : jn.createElement(t);
    return t === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (t) => jn.createTextNode(t),
  createComment: (t) => jn.createComment(t),
  setText: (t, i) => {
    t.nodeValue = i;
  },
  setElementText: (t, i) => {
    t.textContent = i;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => jn.querySelector(t),
  setScopeId(t, i) {
    t.setAttribute(i, "");
  },
  insertStaticContent(t, i, a, o, r, u) {
    const m = a ? a.previousSibling : i.lastChild;
    if (r && (r === u || r.nextSibling)) for (; i.insertBefore(r.cloneNode(!0), a), !(r === u || !(r = r.nextSibling)); )
      ;
    else {
      Qm.innerHTML = zp(o === "svg" ? `<svg>${t}</svg>` : o === "mathml" ? `<math>${t}</math>` : t);
      const p = Qm.content;
      if (o === "svg" || o === "mathml") {
        const f = p.firstChild;
        for (; f.firstChild; ) p.appendChild(f.firstChild);
        p.removeChild(f);
      }
      i.insertBefore(p, a);
    }
    return [m ? m.nextSibling : i.firstChild, a ? a.previousSibling : i.lastChild];
  }
}, Zv = /* @__PURE__ */ Symbol("_vtc");
function Yv(t, i, a) {
  const o = t[Zv];
  o && (i = (i ? [i, ...o] : [...o]).join(" ")), i == null ? t.removeAttribute("class") : a ? t.setAttribute("class", i) : t.className = i;
}
var ed = /* @__PURE__ */ Symbol("_vod"), Qv = /* @__PURE__ */ Symbol("_vsh"), ey = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), ty = /(?:^|;)\s*display\s*:/;
function ny(t, i, a) {
  const o = t.style, r = Ee(a);
  let u = !1;
  if (a && !r) {
    if (i) if (Ee(i))
      for (const m of i.split(";")) {
        const p = m.slice(0, m.indexOf(":")).trim();
        a[p] == null && Va(o, p, "");
      }
    else for (const m in i) a[m] == null && Va(o, m, "");
    for (const m in a) {
      m === "display" && (u = !0);
      const p = a[m];
      p != null ? sy(t, m, !Ee(i) && i ? i[m] : void 0, p) || Va(o, m, p) : Va(o, m, "");
    }
  } else if (r) {
    if (i !== a) {
      const m = o[ey];
      m && (a += ";" + m), o.cssText = a, u = ty.test(a);
    }
  } else i && t.removeAttribute("style");
  ed in t && (t[ed] = u ? o.display : "", t[Qv] && (o.display = "none"));
}
var iy = /[^\\];\s*$/, td = /\s*!important$/;
function Va(t, i, a) {
  if ($(a)) a.forEach((o) => Va(t, i, o));
  else if (a == null && (a = ""), process.env.NODE_ENV !== "production" && iy.test(a) && Wt(`Unexpected semicolon at the end of '${i}' style value: '${a}'`), i.startsWith("--")) t.setProperty(i, a);
  else {
    const o = ay(t, i);
    td.test(a) ? t.setProperty(Nt(o), a.replace(td, ""), "important") : t[o] = a;
  }
}
var nd = [
  "Webkit",
  "Moz",
  "ms"
], Qr = {};
function ay(t, i) {
  const a = Qr[i];
  if (a) return a;
  let o = at(i);
  if (o !== "filter" && o in t) return Qr[i] = o;
  o = vo(o);
  for (let r = 0; r < nd.length; r++) {
    const u = nd[r] + o;
    if (u in t) return Qr[i] = u;
  }
  return i;
}
function sy(t, i, a, o) {
  return t.tagName === "TEXTAREA" && (i === "width" || i === "height") && Ee(o) && a === o;
}
var id = "http://www.w3.org/1999/xlink";
function ad(t, i, a, o, r, u = O2(i)) {
  o && i.startsWith("xlink:") ? a == null ? t.removeAttributeNS(id, i.slice(6, i.length)) : t.setAttributeNS(id, i, a) : a == null || u && !wd(a) ? t.removeAttribute(i) : t.setAttribute(i, u ? "" : rn(a) ? String(a) : a);
}
function sd(t, i, a, o, r) {
  if (i === "innerHTML" || i === "textContent") {
    a != null && (t[i] = i === "innerHTML" ? zp(a) : a);
    return;
  }
  const u = t.tagName;
  if (i === "value" && u !== "PROGRESS" && !u.includes("-")) {
    const p = u === "OPTION" ? t.getAttribute("value") || "" : t.value, f = a == null ? t.type === "checkbox" ? "on" : "" : String(a);
    (p !== f || !("_value" in t)) && (t.value = f), a == null && t.removeAttribute(i), t._value = a;
    return;
  }
  let m = !1;
  if (a === "" || a == null) {
    const p = typeof t[i];
    p === "boolean" ? a = wd(a) : a == null && p === "string" ? (a = "", m = !0) : p === "number" && (a = 0, m = !0);
  }
  try {
    t[i] = a;
  } catch (p) {
    process.env.NODE_ENV !== "production" && !m && Wt(`Failed setting prop "${i}" on <${u.toLowerCase()}>: value ${a} is invalid.`, p);
  }
  m && t.removeAttribute(r || i);
}
function ea(t, i, a, o) {
  t.addEventListener(i, a, o);
}
function oy(t, i, a, o) {
  t.removeEventListener(i, a, o);
}
var od = /* @__PURE__ */ Symbol("_vei");
function ry(t, i, a, o, r = null) {
  const u = t[od] || (t[od] = {}), m = u[i];
  if (o && m) m.value = process.env.NODE_ENV !== "production" ? ld(o, i) : o;
  else {
    const [p, f] = ly(i);
    o ? ea(t, p, u[i] = my(process.env.NODE_ENV !== "production" ? ld(o, i) : o, r), f) : m && (oy(t, p, m, f), u[i] = void 0);
  }
}
var rd = /(?:Once|Passive|Capture)$/;
function ly(t) {
  let i;
  if (rd.test(t)) {
    i = {};
    let a;
    for (; a = t.match(rd); )
      t = t.slice(0, t.length - a[0].length), i[a[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Nt(t.slice(2)), i];
}
var el = 0, uy = /* @__PURE__ */ Promise.resolve(), cy = () => el || (uy.then(() => el = 0), el = Date.now());
function my(t, i) {
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
        C && pn(C, i, 5, p);
      }
    } else pn(r, i, 5, [o]);
  };
  return a.value = t, a.attached = cy(), a;
}
function ld(t, i) {
  return te(t) || $(t) ? t : (Wt(`Wrong type passed as event handler to ${i} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`), Ze);
}
var ud = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, dy = (t, i, a, o, r, u) => {
  const m = r === "svg";
  i === "class" ? Yv(t, o, m) : i === "style" ? ny(t, a, o) : ja(i) ? xa(i) || ry(t, i, a, o, u) : (i[0] === "." ? (i = i.slice(1), !0) : i[0] === "^" ? (i = i.slice(1), !1) : py(t, i, o, m)) ? (sd(t, i, o), !t.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && ad(t, i, o, m, u, i !== "value")) : t._isVueCE && (gy(t, i) || t._def.__asyncLoader && (/[A-Z]/.test(i) || !Ee(o))) ? sd(t, at(i), o, u, i) : (i === "true-value" ? t._trueValue = o : i === "false-value" && (t._falseValue = o), ad(t, i, o, m));
};
function py(t, i, a, o) {
  if (o)
    return !!(i === "innerHTML" || i === "textContent" || i in t && ud(i) && te(a));
  if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "sandbox" && t.tagName === "IFRAME" || i === "form" || i === "list" && t.tagName === "INPUT" || i === "type" && t.tagName === "TEXTAREA") return !1;
  if (i === "width" || i === "height") {
    const r = t.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1;
  }
  return ud(i) && Ee(a) ? !1 : i in t;
}
function gy(t, i) {
  const a = t._def.props;
  if (!a) return !1;
  const o = at(i);
  return Array.isArray(a) ? a.some((r) => at(r) === o) : Object.keys(a).some((r) => at(r) === o);
}
var cd = {};
// @__NO_SIDE_EFFECTS__
function hy(t, i, a) {
  let o = /* @__PURE__ */ ip(t, i);
  Io(o) && (o = Ae({}, o, i));
  class r extends Iy {
    constructor(m) {
      super(o, m, a);
    }
  }
  return r.def = o, r;
}
var fy = typeof HTMLElement < "u" ? HTMLElement : class {
}, Iy = class Pp extends fy {
  constructor(i, a = {}, o = hd) {
    super(), this._def = i, this._props = a, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && o !== hd ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && Wt("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), i.shadowRoot !== !1 ? (this.attachShadow(Ae({}, i.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let i = this;
    for (; i = i && (i.assignedSlot || i.parentNode || i.host); ) if (i instanceof Pp) {
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
    this._connected = !1, jd(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(i) {
    for (const a of i) this._setAttr(a.attributeName);
  }
  _resolveDef() {
    if (this._pendingResolve) return;
    for (let o = 0; o < this.attributes.length; o++) this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const i = (o, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: u, styles: m } = o;
      let p;
      if (u && !$(u)) for (const f in u) {
        const C = u[f];
        (C === Number || C && C.type === Number) && (f in this._props && (this._props[f] = Cm(this._props[f])), (p || (p = /* @__PURE__ */ Object.create(null)))[at(f)] = !0);
      }
      this._numberProps = p, this._resolveProps(o), this.shadowRoot ? this._applyStyles(m) : process.env.NODE_ENV !== "production" && m && Wt("Custom element style injection is not supported when using shadowRoot: false"), this._mount(o);
    }, a = this._def.__asyncLoader;
    a ? this._pendingResolve = a().then((o) => {
      o.configureApp = this._def.configureApp, i(this._def = o, !0);
    }) : i(this._def);
  }
  _mount(i) {
    process.env.NODE_ENV !== "production" && !i.name && (i.name = "VueElement"), this._app = this._createApp(i), this._inheritParentContext(), i.configureApp && i.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const a = this._instance && this._instance.exposed;
    if (a)
      for (const o in a) ge(this, o) ? process.env.NODE_ENV !== "production" && Wt(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, { get: () => At(a[o]) });
  }
  _resolveProps(i) {
    const { props: a } = i, o = $(a) ? a : Object.keys(a || {});
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
  _setAttr(i) {
    if (i.startsWith("data-v-")) return;
    const a = this.hasAttribute(i);
    let o = a ? this.getAttribute(i) : cd;
    const r = at(i);
    a && this._numberProps && this._numberProps[r] && (o = Cm(o)), this._setProp(r, o, !1, !0);
  }
  _getProp(i) {
    return this._props[i];
  }
  _setProp(i, a, o = !0, r = !1) {
    if (a !== this._props[i] && (this._dirty = !0, a === cd ? delete this._props[i] : (this._props[i] = a, i === "key" && this._app && (this._app._ceVNode.key = a)), r && this._instance && this._update(), o)) {
      const u = this._ob;
      u && (this._processMutations(u.takeRecords()), u.disconnect()), a === !0 ? this.setAttribute(Nt(i), "") : typeof a == "string" || typeof a == "number" ? this.setAttribute(Nt(i), a + "") : a || this.removeAttribute(Nt(i)), u && u.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const i = this._createVNode();
    this._app && (i.appContext = this._app._context), Cy(i, this._root);
  }
  _createVNode() {
    const i = {};
    this.shadowRoot || (i.onVnodeMounted = i.onVnodeUpdated = this._renderSlots.bind(this));
    const a = An(this._def, Ae(i, this._props));
    return this._instance || (a.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, process.env.NODE_ENV !== "production" && (o.ceReload = (u) => {
        this._styles && (this._styles.forEach((m) => this._root.removeChild(m)), this._styles.length = 0), this._styleAnchors.delete(this._def), this._applyStyles(u), this._instance = null, this._update();
      });
      const r = (u, m) => {
        this.dispatchEvent(new CustomEvent(u, Io(m[0]) ? Ae({ detail: m }, m[0]) : { detail: m }));
      };
      o.emit = (u, ...m) => {
        r(u, m), Nt(u) !== u && r(Nt(u), m);
      }, this._setParent();
    }), a;
  }
  _applyStyles(i, a, o) {
    if (!i) return;
    if (a) {
      if (a === this._def || this._styleChildren.has(a)) return;
      this._styleChildren.add(a);
    }
    const r = this._nonce, u = this.shadowRoot, m = o ? this._getStyleAnchor(o) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(u);
    let p = null;
    for (let f = i.length - 1; f >= 0; f--) {
      const C = document.createElement("style");
      if (r && C.setAttribute("nonce", r), C.textContent = i[f], u.insertBefore(C, p || m), p = C, f === 0 && (o || this._styleAnchors.set(this._def, C), a && this._styleAnchors.set(a, C)), process.env.NODE_ENV !== "production") if (a) {
        if (a.__hmrId) {
          this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
          let T = this._childStyles.get(a.__hmrId);
          T || this._childStyles.set(a.__hmrId, T = []), T.push(C);
        }
      } else (this._styles || (this._styles = [])).push(C);
    }
  }
  _getStyleAnchor(i) {
    if (!i) return null;
    const a = this._styleAnchors.get(i);
    return a && a.parentNode === this.shadowRoot ? a : (a && this._styleAnchors.delete(i), null);
  }
  _getRootStyleInsertionAnchor(i) {
    for (let a = 0; a < i.childNodes.length; a++) {
      const o = i.childNodes[a];
      if (!(o instanceof HTMLStyleElement)) return o;
    }
    return null;
  }
  _parseSlots() {
    const i = this._slots = {};
    let a;
    for (; a = this.firstChild; ) {
      const o = a.nodeType === 1 && a.getAttribute("slot") || "default";
      (i[o] || (i[o] = [])).push(a), this.removeChild(a);
    }
  }
  _renderSlots() {
    const i = this._getSlots(), a = this._instance.type.__scopeId;
    for (let o = 0; o < i.length; o++) {
      const r = i[o], u = r.getAttribute("name") || "default", m = this._slots[u], p = r.parentNode;
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
    const i = [this];
    this._teleportTargets && i.push(...this._teleportTargets);
    const a = /* @__PURE__ */ new Set();
    for (const o of i) {
      const r = o.querySelectorAll("slot");
      for (let u = 0; u < r.length; u++) a.add(r[u]);
    }
    return Array.from(a);
  }
  _injectChildStyle(i, a) {
    this._applyStyles(i.styles, i, a);
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
      const a = this._childStyles.get(i.__hmrId);
      a && (a.forEach((o) => this._root.removeChild(o)), a.length = 0);
    }
  }
}, md = (t) => {
  const i = t.props["onUpdate:modelValue"] || !1;
  return $(i) ? (a) => Yi(i, a) : i;
};
function by(t) {
  t.target.composing = !0;
}
function dd(t) {
  const i = t.target;
  i.composing && (i.composing = !1, i.dispatchEvent(new Event("input")));
}
var tl = /* @__PURE__ */ Symbol("_assign");
function pd(t, i, a) {
  return i && (t = t.trim()), a && (t = wl(t)), t;
}
var vy = {
  created(t, { modifiers: { lazy: i, trim: a, number: o } }, r) {
    t[tl] = md(r);
    const u = o || r.props && r.props.type === "number";
    ea(t, i ? "change" : "input", (m) => {
      m.target.composing || t[tl](pd(t.value, a, u));
    }), (a || u) && ea(t, "change", () => {
      t.value = pd(t.value, a, u);
    }), i || (ea(t, "compositionstart", by), ea(t, "compositionend", dd), ea(t, "change", dd));
  },
  mounted(t, { value: i }) {
    t.value = i ?? "";
  },
  beforeUpdate(t, { value: i, oldValue: a, modifiers: { lazy: o, trim: r, number: u } }, m) {
    if (t[tl] = md(m), t.composing) return;
    const p = (u || t.type === "number") && !/^0\d/.test(t.value) ? wl(t.value) : t.value, f = i ?? "";
    if (p === f) return;
    const C = t.getRootNode();
    (C instanceof Document || C instanceof ShadowRoot) && C.activeElement === t && t.type !== "range" && (o && i === a || r && t.value.trim() === f) || (t.value = f);
  }
}, yy = [
  "ctrl",
  "shift",
  "alt",
  "meta"
], Ty = {
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
  exact: (t, i) => yy.some((a) => t[`${a}Key`] && !i.includes(a))
}, _y = (t, i) => {
  if (!t) return t;
  const a = t._withMods || (t._withMods = {}), o = i.join(".");
  return a[o] || (a[o] = (r, ...u) => {
    for (let m = 0; m < i.length; m++) {
      const p = Ty[i[m]];
      if (p && p(r, i)) return;
    }
    return t(r, ...u);
  });
}, wy = /* @__PURE__ */ Ae({ patchProp: dy }, Xv), gd;
function Dp() {
  return gd || (gd = Sv(wy));
}
var Cy = (...t) => {
  Dp().render(...t);
}, hd = (...t) => {
  const i = Dp().createApp(...t);
  process.env.NODE_ENV !== "production" && (Uy(i), Sy(i));
  const { mount: a } = i;
  return i.mount = (o) => {
    const r = Ay(o);
    if (!r) return;
    const u = i._component;
    !te(u) && !u.render && !u.template && (u.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const m = a(r, !1, Ry(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), m;
  }, i;
};
function Ry(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
}
function Uy(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (i) => E2(i) || N2(i) || M2(i),
    writable: !1
  });
}
function Sy(t) {
  if (Ep()) {
    const i = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return i;
      },
      set() {
        Wt("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const a = t.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return Wt(o), a;
      },
      set() {
        Wt(o);
      }
    });
  }
}
function Ay(t) {
  if (Ee(t)) {
    const i = document.querySelector(t);
    return process.env.NODE_ENV !== "production" && !i && Wt(`Failed to mount app: mount target selector "${t}" returned null.`), i;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && Wt('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), t;
}
function Vy() {
  Wv();
}
process.env.NODE_ENV !== "production" && Vy();
var Ey = /* @__PURE__ */ b2((t, i) => {
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
    ], Xn = "[object Arguments]", Pi = "[object Array]", di = "[object AsyncFunction]", In = "[object Boolean]", Nn = "[object Date]", Qa = "[object DOMException]", $t = "[object Error]", Zn = "[object Function]", Di = "[object GeneratorFunction]", h = "[object Map]", v = "[object Number]", U = "[object Null]", M = "[object Object]", O = "[object Promise]", N = "[object Proxy]", F = "[object RegExp]", x = "[object Set]", L = "[object String]", z = "[object Symbol]", X = "[object Undefined]", B = "[object WeakMap]", K = "[object WeakSet]", Z = "[object ArrayBuffer]", ce = "[object DataView]", Ie = "[object Float32Array]", be = "[object Float64Array]", Oe = "[object Int8Array]", Pe = "[object Int16Array]", ct = "[object Int32Array]", tt = "[object Uint8Array]", Mn = "[object Uint8ClampedArray]", xi = "[object Uint16Array]", Ge = "[object Uint32Array]", Dt = /\b__p \+= '';/g, es = /\b(__p \+=) '' \+/g, ts = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Kl = /&(?:amp|lt|gt|quot|#39);/g, $l = /[&<>"']/g, jp = RegExp(Kl.source), Gp = RegExp($l.source), Wp = /<%-([\s\S]+?)%>/g, Kp = /<%([\s\S]+?)%>/g, Xl = /<%=([\s\S]+?)%>/g, $p = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xp = /^\w*$/, Zp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Eo = /[\\^$.*+?()[\]{}|]/g, Yp = RegExp(Eo.source), No = /^\s+/, Qp = /\s/, eg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, tg = /\{\n\/\* \[wrapped with (.+)\] \*/, ng = /,? & /, ig = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ag = /[()=,{}\[\]\/\s]/, sg = /\\(\\)?/g, og = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Zl = /\w*$/, rg = /^[-+]0x[0-9a-f]+$/i, lg = /^0b[01]+$/i, ug = /^\[object .+?Constructor\]$/, cg = /^0o[0-7]+$/i, mg = /^(?:0|[1-9]\d*)$/, dg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ns = /($^)/, pg = /['\n\r\u2028\u2029\\]/g, is = "\\ud800-\\udfff", Yl = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Ql = "\\u2700-\\u27bf", eu = "a-z\\xdf-\\xf6\\xf8-\\xff", gg = "\\xac\\xb1\\xd7\\xf7", hg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", fg = "\\u2000-\\u206f", Ig = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", tu = "A-Z\\xc0-\\xd6\\xd8-\\xde", nu = "\\ufe0e\\ufe0f", iu = gg + hg + fg + Ig, Mo = "['’]", bg = "[" + is + "]", au = "[" + iu + "]", as = "[" + Yl + "]", su = "\\d+", vg = "[" + Ql + "]", ou = "[" + eu + "]", ru = "[^" + is + iu + su + Ql + eu + tu + "]", Oo = "\\ud83c[\\udffb-\\udfff]", yg = "(?:" + as + "|" + Oo + ")", lu = "[^" + is + "]", zo = "(?:\\ud83c[\\udde6-\\uddff]){2}", Po = "[\\ud800-\\udbff][\\udc00-\\udfff]", Li = "[" + tu + "]", uu = "\\u200d", cu = "(?:" + ou + "|" + ru + ")", Tg = "(?:" + Li + "|" + ru + ")", mu = "(?:" + Mo + "(?:d|ll|m|re|s|t|ve))?", du = "(?:" + Mo + "(?:D|LL|M|RE|S|T|VE))?", pu = yg + "?", gu = "[" + nu + "]?", _g = "(?:" + uu + "(?:" + [
      lu,
      zo,
      Po
    ].join("|") + ")" + gu + pu + ")*", wg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Cg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", hu = gu + pu + _g, Rg = "(?:" + [
      vg,
      zo,
      Po
    ].join("|") + ")" + hu, Ug = "(?:" + [
      lu + as + "?",
      as,
      zo,
      Po,
      bg
    ].join("|") + ")", Sg = RegExp(Mo, "g"), Ag = RegExp(as, "g"), Do = RegExp(Oo + "(?=" + Oo + ")|" + Ug + hu, "g"), Vg = RegExp([
      Li + "?" + ou + "+" + mu + "(?=" + [
        au,
        Li,
        "$"
      ].join("|") + ")",
      Tg + "+" + du + "(?=" + [
        au,
        Li + cu,
        "$"
      ].join("|") + ")",
      Li + "?" + cu + "+" + mu,
      Li + "+" + du,
      Cg,
      wg,
      su,
      Rg
    ].join("|"), "g"), Eg = RegExp("[" + uu + is + Yl + nu + "]"), Ng = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Mg = [
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
    ], Og = -1, Me = {};
    Me[Ie] = Me[be] = Me[Oe] = Me[Pe] = Me[ct] = Me[tt] = Me[Mn] = Me[xi] = Me[Ge] = !0, Me[Xn] = Me[Pi] = Me[Z] = Me[In] = Me[ce] = Me[Nn] = Me[$t] = Me[Zn] = Me[h] = Me[v] = Me[M] = Me[F] = Me[x] = Me[L] = Me[B] = !1;
    var Ve = {};
    Ve[Xn] = Ve[Pi] = Ve[Z] = Ve[ce] = Ve[In] = Ve[Nn] = Ve[Ie] = Ve[be] = Ve[Oe] = Ve[Pe] = Ve[ct] = Ve[h] = Ve[v] = Ve[M] = Ve[F] = Ve[x] = Ve[L] = Ve[z] = Ve[tt] = Ve[Mn] = Ve[xi] = Ve[Ge] = !0, Ve[$t] = Ve[Zn] = Ve[B] = !1;
    var zg = {
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
    }, Pg = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Dg = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, xg = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Lg = parseFloat, Fg = parseInt, fu = typeof global == "object" && global && global.Object === Object && global, kg = typeof self == "object" && self && self.Object === Object && self, Qe = fu || kg || Function("return this")(), xo = typeof t == "object" && t && !t.nodeType && t, pi = xo && typeof i == "object" && i && !i.nodeType && i, Iu = pi && pi.exports === xo, Lo = Iu && fu.process, xt = function() {
      try {
        var _ = pi && pi.require && pi.require("util").types;
        return _ || Lo && Lo.binding && Lo.binding("util");
      } catch {
      }
    }(), bu = xt && xt.isArrayBuffer, vu = xt && xt.isDate, yu = xt && xt.isMap, Tu = xt && xt.isRegExp, _u = xt && xt.isSet, wu = xt && xt.isTypedArray;
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
    function Bg(_, S, R, J) {
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
    function qg(_, S) {
      for (var R = _ == null ? 0 : _.length; R-- && S(_[R], R, _) !== !1; ) ;
      return _;
    }
    function Cu(_, S) {
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
    function Fo(_, S, R) {
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
    function ko(_, S, R, J) {
      var ie = -1, Te = _ == null ? 0 : _.length;
      for (J && Te && (R = _[++ie]); ++ie < Te; ) R = S(R, _[ie], ie, _);
      return R;
    }
    function Hg(_, S, R, J) {
      var ie = _ == null ? 0 : _.length;
      for (J && ie && (R = _[--ie]); ie--; ) R = S(R, _[ie], ie, _);
      return R;
    }
    function Bo(_, S) {
      for (var R = -1, J = _ == null ? 0 : _.length; ++R < J; ) if (S(_[R], R, _)) return !0;
      return !1;
    }
    var Jg = qo("length");
    function jg(_) {
      return _.split("");
    }
    function Gg(_) {
      return _.match(ig) || [];
    }
    function Ru(_, S, R) {
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
      return S === S ? ah(_, S, R) : os(_, Uu, R);
    }
    function Wg(_, S, R, J) {
      for (var ie = R - 1, Te = _.length; ++ie < Te; ) if (J(_[ie], S)) return ie;
      return -1;
    }
    function Uu(_) {
      return _ !== _;
    }
    function Su(_, S) {
      var R = _ == null ? 0 : _.length;
      return R ? Jo(_, S) / R : En;
    }
    function qo(_) {
      return function(S) {
        return S == null ? a : S[_];
      };
    }
    function Ho(_) {
      return function(S) {
        return _ == null ? a : _[S];
      };
    }
    function Au(_, S, R, J, ie) {
      return ie(_, function(Te, We, Ue) {
        R = J ? (J = !1, Te) : S(R, Te, We, Ue);
      }), R;
    }
    function Kg(_, S) {
      var R = _.length;
      for (_.sort(S); R--; ) _[R] = _[R].value;
      return _;
    }
    function Jo(_, S) {
      for (var R, J = -1, ie = _.length; ++J < ie; ) {
        var Te = S(_[J]);
        Te !== a && (R = R === a ? Te : R + Te);
      }
      return R;
    }
    function jo(_, S) {
      for (var R = -1, J = Array(_); ++R < _; ) J[R] = S(R);
      return J;
    }
    function $g(_, S) {
      return ze(S, function(R) {
        return [R, _[R]];
      });
    }
    function Vu(_) {
      return _ && _.slice(0, Ou(_) + 1).replace(No, "");
    }
    function Ct(_) {
      return function(S) {
        return _(S);
      };
    }
    function Go(_, S) {
      return ze(S, function(R) {
        return _[R];
      });
    }
    function ua(_, S) {
      return _.has(S);
    }
    function Eu(_, S) {
      for (var R = -1, J = _.length; ++R < J && Fi(S, _[R], 0) > -1; ) ;
      return R;
    }
    function Nu(_, S) {
      for (var R = _.length; R-- && Fi(S, _[R], 0) > -1; ) ;
      return R;
    }
    function Xg(_, S) {
      for (var R = _.length, J = 0; R--; ) _[R] === S && ++J;
      return J;
    }
    var Zg = Ho(zg), Yg = Ho(Pg);
    function Qg(_) {
      return "\\" + xg[_];
    }
    function eh(_, S) {
      return _ == null ? a : _[S];
    }
    function ki(_) {
      return Eg.test(_);
    }
    function th(_) {
      return Ng.test(_);
    }
    function nh(_) {
      for (var S, R = []; !(S = _.next()).done; ) R.push(S.value);
      return R;
    }
    function Wo(_) {
      var S = -1, R = Array(_.size);
      return _.forEach(function(J, ie) {
        R[++S] = [ie, J];
      }), R;
    }
    function Mu(_, S) {
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
    function ih(_) {
      var S = -1, R = Array(_.size);
      return _.forEach(function(J) {
        R[++S] = [J, J];
      }), R;
    }
    function ah(_, S, R) {
      for (var J = R - 1, ie = _.length; ++J < ie; ) if (_[J] === S) return J;
      return -1;
    }
    function sh(_, S, R) {
      for (var J = R + 1; J--; ) if (_[J] === S) return J;
      return J;
    }
    function Bi(_) {
      return ki(_) ? rh(_) : Jg(_);
    }
    function Xt(_) {
      return ki(_) ? lh(_) : jg(_);
    }
    function Ou(_) {
      for (var S = _.length; S-- && Qp.test(_.charAt(S)); ) ;
      return S;
    }
    var oh = Ho(Dg);
    function rh(_) {
      for (var S = Do.lastIndex = 0; Do.test(_); ) ++S;
      return S;
    }
    function lh(_) {
      return _.match(Do) || [];
    }
    function uh(_) {
      return _.match(Vg) || [];
    }
    var ti = function _(S) {
      S = S == null ? Qe : ti.defaults(Qe.Object(), S, ti.pick(Qe, Mg));
      var R = S.Array, J = S.Date, ie = S.Error, Te = S.Function, We = S.Math, Ue = S.Object, Ko = S.RegExp, ch = S.String, Ft = S.TypeError, ls = R.prototype, mh = Te.prototype, qi = Ue.prototype, us = S["__core-js_shared__"], cs = mh.toString, Re = qi.hasOwnProperty, dh = 0, zu = function() {
        var e = /[^.]+$/.exec(us && us.keys && us.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), ms = qi.toString, ph = cs.call(Ue), gh = Qe._, hh = Ko("^" + cs.call(Re).replace(Eo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ds = Iu ? S.Buffer : a, ni = S.Symbol, ps = S.Uint8Array, Pu = ds ? ds.allocUnsafe : a, gs = Mu(Ue.getPrototypeOf, Ue), Du = Ue.create, xu = qi.propertyIsEnumerable, hs = ls.splice, Lu = ni ? ni.isConcatSpreadable : a, ca = ni ? ni.iterator : a, gi = ni ? ni.toStringTag : a, fs = function() {
        try {
          var e = vi(Ue, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), fh = S.clearTimeout !== Qe.clearTimeout && S.clearTimeout, Ih = J && J.now !== Qe.Date.now && J.now, bh = S.setTimeout !== Qe.setTimeout && S.setTimeout, Is = We.ceil, bs = We.floor, $o = Ue.getOwnPropertySymbols, vh = ds ? ds.isBuffer : a, Fu = S.isFinite, yh = ls.join, Th = Mu(Ue.keys, Ue), Ke = We.max, ot = We.min, _h = J.now, wh = S.parseInt, ku = We.random, Ch = ls.reverse, Xo = vi(S, "DataView"), ma = vi(S, "Map"), Zo = vi(S, "Promise"), Hi = vi(S, "Set"), da = vi(S, "WeakMap"), pa = vi(Ue, "create"), vs = da && new da(), Ji = {}, Rh = yi(Xo), Uh = yi(ma), Sh = yi(Zo), Ah = yi(Hi), Vh = yi(da), ys = ni ? ni.prototype : a, ga = ys ? ys.valueOf : a, Bu = ys ? ys.toString : a;
      function d(e) {
        if (Fe(e) && !oe(e) && !(e instanceof de)) {
          if (e instanceof kt) return e;
          if (Re.call(e, "__wrapped__")) return qc(e);
        }
        return new kt(e);
      }
      var ji = /* @__PURE__ */ function() {
        function e() {
        }
        return function(n) {
          if (!De(n)) return {};
          if (Du) return Du(n);
          e.prototype = n;
          var s = new e();
          return e.prototype = a, s;
        };
      }();
      function Ts() {
      }
      function kt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = a;
      }
      d.templateSettings = {
        escape: Wp,
        evaluate: Kp,
        interpolate: Xl,
        variable: "",
        imports: { _: d }
      }, d.prototype = Ts.prototype, d.prototype.constructor = d, kt.prototype = ji(Ts.prototype), kt.prototype.constructor = kt;
      function de(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ut, this.__views__ = [];
      }
      function Eh() {
        var e = new de(this.__wrapped__);
        return e.__actions__ = It(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = It(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = It(this.__views__), e;
      }
      function Nh() {
        if (this.__filtered__) {
          var e = new de(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Mh() {
        var e = this.__wrapped__.value(), n = this.__dir__, s = oe(e), l = n < 0, c = s ? e.length : 0, g = jf(0, c, this.__views__), I = g.start, b = g.end, w = b - I, E = l ? b : I - 1, A = this.__iteratees__, D = A.length, H = 0, G = ot(w, this.__takeCount__);
        if (!s || !l && c == w && G == w) return mc(e, this.__actions__);
        var Y = [];
        e: for (; w-- && H < G; ) {
          E += n;
          for (var ae = -1, ee = e[E]; ++ae < D; ) {
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
      function hi(e) {
        var n = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++n < s; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function Oh() {
        this.__data__ = pa ? pa(null) : {}, this.size = 0;
      }
      function zh(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function Ph(e) {
        var n = this.__data__;
        if (pa) {
          var s = n[e];
          return s === f ? a : s;
        }
        return Re.call(n, e) ? n[e] : a;
      }
      function Dh(e) {
        var n = this.__data__;
        return pa ? n[e] !== a : Re.call(n, e);
      }
      function xh(e, n) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = pa && n === a ? f : n, this;
      }
      hi.prototype.clear = Oh, hi.prototype.delete = zh, hi.prototype.get = Ph, hi.prototype.has = Dh, hi.prototype.set = xh;
      function On(e) {
        var n = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++n < s; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function Lh() {
        this.__data__ = [], this.size = 0;
      }
      function Fh(e) {
        var n = this.__data__, s = _s(n, e);
        return s < 0 ? !1 : (s == n.length - 1 ? n.pop() : hs.call(n, s, 1), --this.size, !0);
      }
      function kh(e) {
        var n = this.__data__, s = _s(n, e);
        return s < 0 ? a : n[s][1];
      }
      function Bh(e) {
        return _s(this.__data__, e) > -1;
      }
      function qh(e, n) {
        var s = this.__data__, l = _s(s, e);
        return l < 0 ? (++this.size, s.push([e, n])) : s[l][1] = n, this;
      }
      On.prototype.clear = Lh, On.prototype.delete = Fh, On.prototype.get = kh, On.prototype.has = Bh, On.prototype.set = qh;
      function zn(e) {
        var n = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++n < s; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function Hh() {
        this.size = 0, this.__data__ = {
          hash: new hi(),
          map: new (ma || On)(),
          string: new hi()
        };
      }
      function Jh(e) {
        var n = zs(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function jh(e) {
        return zs(this, e).get(e);
      }
      function Gh(e) {
        return zs(this, e).has(e);
      }
      function Wh(e, n) {
        var s = zs(this, e), l = s.size;
        return s.set(e, n), this.size += s.size == l ? 0 : 1, this;
      }
      zn.prototype.clear = Hh, zn.prototype.delete = Jh, zn.prototype.get = jh, zn.prototype.has = Gh, zn.prototype.set = Wh;
      function fi(e) {
        var n = -1, s = e == null ? 0 : e.length;
        for (this.__data__ = new zn(); ++n < s; ) this.add(e[n]);
      }
      function Kh(e) {
        return this.__data__.set(e, f), this;
      }
      function $h(e) {
        return this.__data__.has(e);
      }
      fi.prototype.add = fi.prototype.push = Kh, fi.prototype.has = $h;
      function Zt(e) {
        var n = this.__data__ = new On(e);
        this.size = n.size;
      }
      function Xh() {
        this.__data__ = new On(), this.size = 0;
      }
      function Zh(e) {
        var n = this.__data__, s = n.delete(e);
        return this.size = n.size, s;
      }
      function Yh(e) {
        return this.__data__.get(e);
      }
      function Qh(e) {
        return this.__data__.has(e);
      }
      function ef(e, n) {
        var s = this.__data__;
        if (s instanceof On) {
          var l = s.__data__;
          if (!ma || l.length < r - 1)
            return l.push([e, n]), this.size = ++s.size, this;
          s = this.__data__ = new zn(l);
        }
        return s.set(e, n), this.size = s.size, this;
      }
      Zt.prototype.clear = Xh, Zt.prototype.delete = Zh, Zt.prototype.get = Yh, Zt.prototype.has = Qh, Zt.prototype.set = ef;
      function qu(e, n) {
        var s = oe(e), l = !s && Ti(e), c = !s && !l && ri(e), g = !s && !l && !c && $i(e), I = s || l || c || g, b = I ? jo(e.length, ch) : [], w = b.length;
        for (var E in e) (n || Re.call(e, E)) && !(I && (E == "length" || c && (E == "offset" || E == "parent") || g && (E == "buffer" || E == "byteLength" || E == "byteOffset") || Ln(E, w))) && b.push(E);
        return b;
      }
      function Hu(e) {
        var n = e.length;
        return n ? e[lr(0, n - 1)] : a;
      }
      function tf(e, n) {
        return Ps(It(e), Ii(n, 0, e.length));
      }
      function nf(e) {
        return Ps(It(e));
      }
      function Yo(e, n, s) {
        (s !== a && !Yt(e[n], s) || s === a && !(n in e)) && Pn(e, n, s);
      }
      function ha(e, n, s) {
        var l = e[n];
        (!(Re.call(e, n) && Yt(l, s)) || s === a && !(n in e)) && Pn(e, n, s);
      }
      function _s(e, n) {
        for (var s = e.length; s--; ) if (Yt(e[s][0], n)) return s;
        return -1;
      }
      function af(e, n, s, l) {
        return ii(e, function(c, g, I) {
          n(l, c, s(c), I);
        }), l;
      }
      function Ju(e, n) {
        return e && vn(n, et(n), e);
      }
      function sf(e, n) {
        return e && vn(n, vt(n), e);
      }
      function Pn(e, n, s) {
        n == "__proto__" && fs ? fs(e, n, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : e[n] = s;
      }
      function Qo(e, n) {
        for (var s = -1, l = n.length, c = R(l), g = e == null; ++s < l; ) c[s] = g ? a : Or(e, n[s]);
        return c;
      }
      function Ii(e, n, s) {
        return e === e && (s !== a && (e = e <= s ? e : s), n !== a && (e = e >= n ? e : n)), e;
      }
      function Bt(e, n, s, l, c, g) {
        var I, b = n & y, w = n & V, E = n & P;
        if (s && (I = c ? s(e, l, c, g) : s(e)), I !== a) return I;
        if (!De(e)) return e;
        var A = oe(e);
        if (A) {
          if (I = Wf(e), !b) return It(e, I);
        } else {
          var D = rt(e), H = D == Zn || D == Di;
          if (ri(e)) return gc(e, b);
          if (D == M || D == Xn || H && !c) {
            if (I = w || H ? {} : Oc(e), !b) return w ? Df(e, sf(I, e)) : Pf(e, Ju(I, e));
          } else {
            if (!Ve[D]) return c ? e : {};
            I = Kf(e, D, b);
          }
        }
        g || (g = new Zt());
        var G = g.get(e);
        if (G) return G;
        g.set(e, I), lm(e) ? e.forEach(function(ae) {
          I.add(Bt(ae, n, s, ae, e, g));
        }) : om(e) && e.forEach(function(ae, ee) {
          I.set(ee, Bt(ae, n, s, ee, e, g));
        });
        var Y = A ? a : (E ? w ? vr : br : w ? vt : et)(e);
        return Lt(Y || e, function(ae, ee) {
          Y && (ee = ae, ae = e[ee]), ha(I, ee, Bt(ae, n, s, ee, e, g));
        }), I;
      }
      function of(e) {
        var n = et(e);
        return function(s) {
          return ju(s, e, n);
        };
      }
      function ju(e, n, s) {
        var l = s.length;
        if (e == null) return !l;
        for (e = Ue(e); l--; ) {
          var c = s[l], g = n[c], I = e[c];
          if (I === a && !(c in e) || !g(I)) return !1;
        }
        return !0;
      }
      function Gu(e, n, s) {
        if (typeof e != "function") throw new Ft(m);
        return _a(function() {
          e.apply(a, s);
        }, n);
      }
      function fa(e, n, s, l) {
        var c = -1, g = ss, I = !0, b = e.length, w = [], E = n.length;
        if (!b) return w;
        s && (n = ze(n, Ct(s))), l ? (g = Fo, I = !1) : n.length >= r && (g = ua, I = !1, n = new fi(n));
        e: for (; ++c < b; ) {
          var A = e[c], D = s == null ? A : s(A);
          if (A = l || A !== 0 ? A : 0, I && D === D) {
            for (var H = E; H--; ) if (n[H] === D) continue e;
            w.push(A);
          } else g(n, D, l) || w.push(A);
        }
        return w;
      }
      var ii = vc(bn), Wu = vc(tr, !0);
      function rf(e, n) {
        var s = !0;
        return ii(e, function(l, c, g) {
          return s = !!n(l, c, g), s;
        }), s;
      }
      function ws(e, n, s) {
        for (var l = -1, c = e.length; ++l < c; ) {
          var g = e[l], I = n(g);
          if (I != null && (b === a ? I === I && !Ut(I) : s(I, b))) var b = I, w = g;
        }
        return w;
      }
      function lf(e, n, s, l) {
        var c = e.length;
        for (s = le(s), s < 0 && (s = -s > c ? 0 : c + s), l = l === a || l > c ? c : le(l), l < 0 && (l += c), l = s > l ? 0 : cm(l); s < l; ) e[s++] = n;
        return e;
      }
      function Ku(e, n) {
        var s = [];
        return ii(e, function(l, c, g) {
          n(l, c, g) && s.push(l);
        }), s;
      }
      function nt(e, n, s, l, c) {
        var g = -1, I = e.length;
        for (s || (s = Xf), c || (c = []); ++g < I; ) {
          var b = e[g];
          n > 0 && s(b) ? n > 1 ? nt(b, n - 1, s, l, c) : Qn(c, b) : l || (c[c.length] = b);
        }
        return c;
      }
      var er = yc(), $u = yc(!0);
      function bn(e, n) {
        return e && er(e, n, et);
      }
      function tr(e, n) {
        return e && $u(e, n, et);
      }
      function Cs(e, n) {
        return Yn(n, function(s) {
          return Fn(e[s]);
        });
      }
      function bi(e, n) {
        n = si(n, e);
        for (var s = 0, l = n.length; e != null && s < l; ) e = e[yn(n[s++])];
        return s && s == l ? e : a;
      }
      function Xu(e, n, s) {
        var l = n(e);
        return oe(e) ? l : Qn(l, s(e));
      }
      function mt(e) {
        return e == null ? e === a ? X : U : gi && gi in Ue(e) ? Jf(e) : i1(e);
      }
      function nr(e, n) {
        return e > n;
      }
      function uf(e, n) {
        return e != null && Re.call(e, n);
      }
      function cf(e, n) {
        return e != null && n in Ue(e);
      }
      function mf(e, n, s) {
        return e >= ot(n, s) && e < Ke(n, s);
      }
      function ir(e, n, s) {
        for (var l = s ? Fo : ss, c = e[0].length, g = e.length, I = g, b = R(g), w = 1 / 0, E = []; I--; ) {
          var A = e[I];
          I && n && (A = ze(A, Ct(n))), w = ot(A.length, w), b[I] = !s && (n || c >= 120 && A.length >= 120) ? new fi(I && A) : a;
        }
        A = e[0];
        var D = -1, H = b[0];
        e: for (; ++D < c && E.length < w; ) {
          var G = A[D], Y = n ? n(G) : G;
          if (G = s || G !== 0 ? G : 0, !(H ? ua(H, Y) : l(E, Y, s))) {
            for (I = g; --I; ) {
              var ae = b[I];
              if (!(ae ? ua(ae, Y) : l(e[I], Y, s))) continue e;
            }
            H && H.push(Y), E.push(G);
          }
        }
        return E;
      }
      function df(e, n, s, l) {
        return bn(e, function(c, g, I) {
          n(l, s(c), g, I);
        }), l;
      }
      function Ia(e, n, s) {
        n = si(n, e), e = xc(e, n);
        var l = e == null ? e : e[yn(Ht(n))];
        return l == null ? a : wt(l, e, s);
      }
      function Zu(e) {
        return Fe(e) && mt(e) == Xn;
      }
      function pf(e) {
        return Fe(e) && mt(e) == Z;
      }
      function gf(e) {
        return Fe(e) && mt(e) == Nn;
      }
      function ba(e, n, s, l, c) {
        return e === n ? !0 : e == null || n == null || !Fe(e) && !Fe(n) ? e !== e && n !== n : hf(e, n, s, l, ba, c);
      }
      function hf(e, n, s, l, c, g) {
        var I = oe(e), b = oe(n), w = I ? Pi : rt(e), E = b ? Pi : rt(n);
        w = w == Xn ? M : w, E = E == Xn ? M : E;
        var A = w == M, D = E == M, H = w == E;
        if (H && ri(e)) {
          if (!ri(n)) return !1;
          I = !0, A = !1;
        }
        if (H && !A)
          return g || (g = new Zt()), I || $i(e) ? Ec(e, n, s, l, c, g) : qf(e, n, w, s, l, c, g);
        if (!(s & q)) {
          var G = A && Re.call(e, "__wrapped__"), Y = D && Re.call(n, "__wrapped__");
          if (G || Y) {
            var ae = G ? e.value() : e, ee = Y ? n.value() : n;
            return g || (g = new Zt()), c(ae, ee, s, l, g);
          }
        }
        return H ? (g || (g = new Zt()), Hf(e, n, s, l, c, g)) : !1;
      }
      function ff(e) {
        return Fe(e) && rt(e) == h;
      }
      function ar(e, n, s, l) {
        var c = s.length, g = c, I = !l;
        if (e == null) return !g;
        for (e = Ue(e); c--; ) {
          var b = s[c];
          if (I && b[2] ? b[1] !== e[b[0]] : !(b[0] in e)) return !1;
        }
        for (; ++c < g; ) {
          b = s[c];
          var w = b[0], E = e[w], A = b[1];
          if (I && b[2]) {
            if (E === a && !(w in e)) return !1;
          } else {
            var D = new Zt();
            if (l) var H = l(E, A, w, e, n, D);
            if (!(H === a ? ba(A, E, q | W, l, D) : H)) return !1;
          }
        }
        return !0;
      }
      function Yu(e) {
        return !De(e) || Yf(e) ? !1 : (Fn(e) ? hh : ug).test(yi(e));
      }
      function If(e) {
        return Fe(e) && mt(e) == F;
      }
      function bf(e) {
        return Fe(e) && rt(e) == x;
      }
      function vf(e) {
        return Fe(e) && Bs(e.length) && !!Me[mt(e)];
      }
      function Qu(e) {
        return typeof e == "function" ? e : e == null ? yt : typeof e == "object" ? oe(e) ? nc(e[0], e[1]) : tc(e) : Tm(e);
      }
      function sr(e) {
        if (!Ta(e)) return Th(e);
        var n = [];
        for (var s in Ue(e)) Re.call(e, s) && s != "constructor" && n.push(s);
        return n;
      }
      function yf(e) {
        if (!De(e)) return n1(e);
        var n = Ta(e), s = [];
        for (var l in e) l == "constructor" && (n || !Re.call(e, l)) || s.push(l);
        return s;
      }
      function or(e, n) {
        return e < n;
      }
      function ec(e, n) {
        var s = -1, l = bt(e) ? R(e.length) : [];
        return ii(e, function(c, g, I) {
          l[++s] = n(c, g, I);
        }), l;
      }
      function tc(e) {
        var n = Tr(e);
        return n.length == 1 && n[0][2] ? Pc(n[0][0], n[0][1]) : function(s) {
          return s === e || ar(s, e, n);
        };
      }
      function nc(e, n) {
        return wr(e) && zc(n) ? Pc(yn(e), n) : function(s) {
          var l = Or(s, e);
          return l === a && l === n ? zr(s, e) : ba(n, l, q | W);
        };
      }
      function Rs(e, n, s, l, c) {
        e !== n && er(n, function(g, I) {
          if (c || (c = new Zt()), De(g)) Tf(e, n, I, s, Rs, l, c);
          else {
            var b = l ? l(Rr(e, I), g, I + "", e, n, c) : a;
            b === a && (b = g), Yo(e, I, b);
          }
        }, vt);
      }
      function Tf(e, n, s, l, c, g, I) {
        var b = Rr(e, s), w = Rr(n, s), E = I.get(w);
        if (E) {
          Yo(e, s, E);
          return;
        }
        var A = g ? g(b, w, s + "", e, n, I) : a, D = A === a;
        if (D) {
          var H = oe(w), G = !H && ri(w), Y = !H && !G && $i(w);
          A = w, H || G || Y ? oe(b) ? A = b : Be(b) ? A = It(b) : G ? (D = !1, A = gc(w, !0)) : Y ? (D = !1, A = hc(w, !0)) : A = [] : wa(w) || Ti(w) ? (A = b, Ti(b) ? A = mm(b) : (!De(b) || Fn(b)) && (A = Oc(w))) : D = !1;
        }
        D && (I.set(w, A), c(A, w, l, g, I), I.delete(w)), Yo(e, s, A);
      }
      function ic(e, n) {
        var s = e.length;
        if (s)
          return n += n < 0 ? s : 0, Ln(n, s) ? e[n] : a;
      }
      function ac(e, n, s) {
        n.length ? n = ze(n, function(c) {
          return oe(c) ? function(g) {
            return bi(g, c.length === 1 ? c[0] : c);
          } : c;
        }) : n = [yt];
        var l = -1;
        return n = ze(n, Ct(Q())), Kg(ec(e, function(c, g, I) {
          return {
            criteria: ze(n, function(b) {
              return b(c);
            }),
            index: ++l,
            value: c
          };
        }), function(c, g) {
          return zf(c, g, s);
        });
      }
      function _f(e, n) {
        return sc(e, n, function(s, l) {
          return zr(e, l);
        });
      }
      function sc(e, n, s) {
        for (var l = -1, c = n.length, g = {}; ++l < c; ) {
          var I = n[l], b = bi(e, I);
          s(b, I) && va(g, si(I, e), b);
        }
        return g;
      }
      function wf(e) {
        return function(n) {
          return bi(n, e);
        };
      }
      function rr(e, n, s, l) {
        var c = l ? Wg : Fi, g = -1, I = n.length, b = e;
        for (e === n && (n = It(n)), s && (b = ze(e, Ct(s))); ++g < I; )
          for (var w = 0, E = n[g], A = s ? s(E) : E; (w = c(b, A, w, l)) > -1; )
            b !== e && hs.call(b, w, 1), hs.call(e, w, 1);
        return e;
      }
      function oc(e, n) {
        for (var s = e ? n.length : 0, l = s - 1; s--; ) {
          var c = n[s];
          if (s == l || c !== g) {
            var g = c;
            Ln(c) ? hs.call(e, c, 1) : mr(e, c);
          }
        }
        return e;
      }
      function lr(e, n) {
        return e + bs(ku() * (n - e + 1));
      }
      function Cf(e, n, s, l) {
        for (var c = -1, g = Ke(Is((n - e) / (s || 1)), 0), I = R(g); g--; )
          I[l ? g : ++c] = e, e += s;
        return I;
      }
      function ur(e, n) {
        var s = "";
        if (!e || n < 1 || n > ne) return s;
        do
          n % 2 && (s += e), n = bs(n / 2), n && (e += e);
        while (n);
        return s;
      }
      function me(e, n) {
        return Ur(Dc(e, n, yt), e + "");
      }
      function Rf(e) {
        return Hu(Xi(e));
      }
      function Uf(e, n) {
        var s = Xi(e);
        return Ps(s, Ii(n, 0, s.length));
      }
      function va(e, n, s, l) {
        if (!De(e)) return e;
        n = si(n, e);
        for (var c = -1, g = n.length, I = g - 1, b = e; b != null && ++c < g; ) {
          var w = yn(n[c]), E = s;
          if (w === "__proto__" || w === "constructor" || w === "prototype") return e;
          if (c != I) {
            var A = b[w];
            E = l ? l(A, w, b) : a, E === a && (E = De(A) ? A : Ln(n[c + 1]) ? [] : {});
          }
          ha(b, w, E), b = b[w];
        }
        return e;
      }
      var rc = vs ? function(e, n) {
        return vs.set(e, n), e;
      } : yt, Sf = fs ? function(e, n) {
        return fs(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Dr(n),
          writable: !0
        });
      } : yt;
      function Af(e) {
        return Ps(Xi(e));
      }
      function qt(e, n, s) {
        var l = -1, c = e.length;
        n < 0 && (n = -n > c ? 0 : c + n), s = s > c ? c : s, s < 0 && (s += c), c = n > s ? 0 : s - n >>> 0, n >>>= 0;
        for (var g = R(c); ++l < c; ) g[l] = e[l + n];
        return g;
      }
      function Vf(e, n) {
        var s;
        return ii(e, function(l, c, g) {
          return s = n(l, c, g), !s;
        }), !!s;
      }
      function Us(e, n, s) {
        var l = 0, c = e == null ? l : e.length;
        if (typeof n == "number" && n === n && c <= fn) {
          for (; l < c; ) {
            var g = l + c >>> 1, I = e[g];
            I !== null && !Ut(I) && (s ? I <= n : I < n) ? l = g + 1 : c = g;
          }
          return c;
        }
        return cr(e, n, yt, s);
      }
      function cr(e, n, s, l) {
        var c = 0, g = e == null ? 0 : e.length;
        if (g === 0) return 0;
        n = s(n);
        for (var I = n !== n, b = n === null, w = Ut(n), E = n === a; c < g; ) {
          var A = bs((c + g) / 2), D = s(e[A]), H = D !== a, G = D === null, Y = D === D, ae = Ut(D);
          if (I) var ee = l || Y;
          else E ? ee = Y && (l || H) : b ? ee = Y && H && (l || !G) : w ? ee = Y && H && !G && (l || !ae) : G || ae ? ee = !1 : ee = l ? D <= n : D < n;
          ee ? c = A + 1 : g = A;
        }
        return ot(g, zi);
      }
      function lc(e, n) {
        for (var s = -1, l = e.length, c = 0, g = []; ++s < l; ) {
          var I = e[s], b = n ? n(I) : I;
          if (!s || !Yt(b, w)) {
            var w = b;
            g[c++] = I === 0 ? 0 : I;
          }
        }
        return g;
      }
      function uc(e) {
        return typeof e == "number" ? e : Ut(e) ? En : +e;
      }
      function Rt(e) {
        if (typeof e == "string") return e;
        if (oe(e)) return ze(e, Rt) + "";
        if (Ut(e)) return Bu ? Bu.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -re ? "-0" : n;
      }
      function ai(e, n, s) {
        var l = -1, c = ss, g = e.length, I = !0, b = [], w = b;
        if (s)
          I = !1, c = Fo;
        else if (g >= r) {
          var E = n ? null : kf(e);
          if (E) return rs(E);
          I = !1, c = ua, w = new fi();
        } else w = n ? [] : b;
        e: for (; ++l < g; ) {
          var A = e[l], D = n ? n(A) : A;
          if (A = s || A !== 0 ? A : 0, I && D === D) {
            for (var H = w.length; H--; ) if (w[H] === D) continue e;
            n && w.push(D), b.push(A);
          } else c(w, D, s) || (w !== b && w.push(D), b.push(A));
        }
        return b;
      }
      function mr(e, n) {
        return n = si(n, e), e = xc(e, n), e == null || delete e[yn(Ht(n))];
      }
      function cc(e, n, s, l) {
        return va(e, n, s(bi(e, n)), l);
      }
      function Ss(e, n, s, l) {
        for (var c = e.length, g = l ? c : -1; (l ? g-- : ++g < c) && n(e[g], g, e); ) ;
        return s ? qt(e, l ? 0 : g, l ? g + 1 : c) : qt(e, l ? g + 1 : 0, l ? c : g);
      }
      function mc(e, n) {
        var s = e;
        return s instanceof de && (s = s.value()), ko(n, function(l, c) {
          return c.func.apply(c.thisArg, Qn([l], c.args));
        }, s);
      }
      function dr(e, n, s) {
        var l = e.length;
        if (l < 2) return l ? ai(e[0]) : [];
        for (var c = -1, g = R(l); ++c < l; )
          for (var I = e[c], b = -1; ++b < l; ) b != c && (g[c] = fa(g[c] || I, e[b], n, s));
        return ai(nt(g, 1), n, s);
      }
      function dc(e, n, s) {
        for (var l = -1, c = e.length, g = n.length, I = {}; ++l < c; ) {
          var b = l < g ? n[l] : a;
          s(I, e[l], b);
        }
        return I;
      }
      function pr(e) {
        return Be(e) ? e : [];
      }
      function gr(e) {
        return typeof e == "function" ? e : yt;
      }
      function si(e, n) {
        return oe(e) ? e : wr(e, n) ? [e] : Bc(_e(e));
      }
      var Ef = me;
      function oi(e, n, s) {
        var l = e.length;
        return s = s === a ? l : s, !n && s >= l ? e : qt(e, n, s);
      }
      var pc = fh || function(e) {
        return Qe.clearTimeout(e);
      };
      function gc(e, n) {
        if (n) return e.slice();
        var s = e.length, l = Pu ? Pu(s) : new e.constructor(s);
        return e.copy(l), l;
      }
      function hr(e) {
        var n = new e.constructor(e.byteLength);
        return new ps(n).set(new ps(e)), n;
      }
      function Nf(e, n) {
        var s = n ? hr(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.byteLength);
      }
      function Mf(e) {
        var n = new e.constructor(e.source, Zl.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function Of(e) {
        return ga ? Ue(ga.call(e)) : {};
      }
      function hc(e, n) {
        var s = n ? hr(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.length);
      }
      function fc(e, n) {
        if (e !== n) {
          var s = e !== a, l = e === null, c = e === e, g = Ut(e), I = n !== a, b = n === null, w = n === n, E = Ut(n);
          if (!b && !E && !g && e > n || g && I && w && !b && !E || l && I && w || !s && w || !c) return 1;
          if (!l && !g && !E && e < n || E && s && c && !l && !g || b && s && c || !I && c || !w) return -1;
        }
        return 0;
      }
      function zf(e, n, s) {
        for (var l = -1, c = e.criteria, g = n.criteria, I = c.length, b = s.length; ++l < I; ) {
          var w = fc(c[l], g[l]);
          if (w)
            return l >= b ? w : w * (s[l] == "desc" ? -1 : 1);
        }
        return e.index - n.index;
      }
      function Ic(e, n, s, l) {
        for (var c = -1, g = e.length, I = s.length, b = -1, w = n.length, E = Ke(g - I, 0), A = R(w + E), D = !l; ++b < w; ) A[b] = n[b];
        for (; ++c < I; ) (D || c < g) && (A[s[c]] = e[c]);
        for (; E--; ) A[b++] = e[c++];
        return A;
      }
      function bc(e, n, s, l) {
        for (var c = -1, g = e.length, I = -1, b = s.length, w = -1, E = n.length, A = Ke(g - b, 0), D = R(A + E), H = !l; ++c < A; ) D[c] = e[c];
        for (var G = c; ++w < E; ) D[G + w] = n[w];
        for (; ++I < b; ) (H || c < g) && (D[G + s[I]] = e[c++]);
        return D;
      }
      function It(e, n) {
        var s = -1, l = e.length;
        for (n || (n = R(l)); ++s < l; ) n[s] = e[s];
        return n;
      }
      function vn(e, n, s, l) {
        var c = !s;
        s || (s = {});
        for (var g = -1, I = n.length; ++g < I; ) {
          var b = n[g], w = l ? l(s[b], e[b], b, s, e) : a;
          w === a && (w = e[b]), c ? Pn(s, b, w) : ha(s, b, w);
        }
        return s;
      }
      function Pf(e, n) {
        return vn(e, _r(e), n);
      }
      function Df(e, n) {
        return vn(e, Nc(e), n);
      }
      function As(e, n) {
        return function(s, l) {
          var c = oe(s) ? Bg : af, g = n ? n() : {};
          return c(s, e, Q(l, 2), g);
        };
      }
      function Gi(e) {
        return me(function(n, s) {
          var l = -1, c = s.length, g = c > 1 ? s[c - 1] : a, I = c > 2 ? s[2] : a;
          for (g = e.length > 3 && typeof g == "function" ? (c--, g) : a, I && dt(s[0], s[1], I) && (g = c < 3 ? a : g, c = 1), n = Ue(n); ++l < c; ) {
            var b = s[l];
            b && e(n, b, l, g);
          }
          return n;
        });
      }
      function vc(e, n) {
        return function(s, l) {
          if (s == null) return s;
          if (!bt(s)) return e(s, l);
          for (var c = s.length, g = n ? c : -1, I = Ue(s); (n ? g-- : ++g < c) && l(I[g], g, I) !== !1; ) ;
          return s;
        };
      }
      function yc(e) {
        return function(n, s, l) {
          for (var c = -1, g = Ue(n), I = l(n), b = I.length; b--; ) {
            var w = I[e ? b : ++c];
            if (s(g[w], w, g) === !1) break;
          }
          return n;
        };
      }
      function xf(e, n, s) {
        var l = n & he, c = ya(e);
        function g() {
          return (this && this !== Qe && this instanceof g ? c : e).apply(l ? s : this, arguments);
        }
        return g;
      }
      function Tc(e) {
        return function(n) {
          n = _e(n);
          var s = ki(n) ? Xt(n) : a, l = s ? s[0] : n.charAt(0), c = s ? oi(s, 1).join("") : n.slice(1);
          return l[e]() + c;
        };
      }
      function Wi(e) {
        return function(n) {
          return ko(vm(bm(n).replace(Sg, "")), e, "");
        };
      }
      function ya(e) {
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
          var s = ji(e.prototype), l = e.apply(s, n);
          return De(l) ? l : s;
        };
      }
      function Lf(e, n, s) {
        var l = ya(e);
        function c() {
          for (var g = arguments.length, I = R(g), b = g, w = Ki(c); b--; ) I[b] = arguments[b];
          var E = g < 3 && I[0] !== w && I[g - 1] !== w ? [] : ei(I, w);
          return g -= E.length, g < s ? Uc(e, n, Vs, c.placeholder, a, I, E, a, a, s - g) : wt(this && this !== Qe && this instanceof c ? l : e, this, I);
        }
        return c;
      }
      function _c(e) {
        return function(n, s, l) {
          var c = Ue(n);
          if (!bt(n)) {
            var g = Q(s, 3);
            n = et(n), s = function(b) {
              return g(c[b], b, c);
            };
          }
          var I = e(n, s, l);
          return I > -1 ? c[g ? n[I] : I] : a;
        };
      }
      function wc(e) {
        return xn(function(n) {
          var s = n.length, l = s, c = kt.prototype.thru;
          for (e && n.reverse(); l--; ) {
            var g = n[l];
            if (typeof g != "function") throw new Ft(m);
            if (c && !I && Os(g) == "wrapper") var I = new kt([], !0);
          }
          for (l = I ? l : s; ++l < s; ) {
            g = n[l];
            var b = Os(g), w = b == "wrapper" ? yr(g) : a;
            w && Cr(w[0]) && w[1] == (xe | se | j | Le) && !w[4].length && w[9] == 1 ? I = I[Os(w[0])].apply(I, w[3]) : I = g.length == 1 && Cr(g) ? I[b]() : I.thru(g);
          }
          return function() {
            var E = arguments, A = E[0];
            if (I && E.length == 1 && oe(A)) return I.plant(A).value();
            for (var D = 0, H = s ? n[D].apply(this, E) : A; ++D < s; ) H = n[D].call(this, H);
            return H;
          };
        });
      }
      function Vs(e, n, s, l, c, g, I, b, w, E) {
        var A = n & xe, D = n & he, H = n & ye, G = n & (se | He), Y = n & Ye, ae = H ? a : ya(e);
        function ee() {
          for (var Se = arguments.length, pe = R(Se), pt = Se; pt--; ) pe[pt] = arguments[pt];
          if (G) var Tn = Ki(ee), li = Xg(pe, Tn);
          if (l && (pe = Ic(pe, l, c, G)), g && (pe = bc(pe, g, I, G)), Se -= li, G && Se < E) {
            var qe = ei(pe, Tn);
            return Uc(e, n, Vs, ee.placeholder, s, pe, qe, b, w, E - Se);
          }
          var Qt = D ? s : this, Bn = H ? Qt[e] : e;
          return Se = pe.length, b ? pe = a1(pe, b) : Y && Se > 1 && pe.reverse(), A && w < Se && (pe.length = w), this && this !== Qe && this instanceof ee && (Bn = ae || ya(Bn)), Bn.apply(Qt, pe);
        }
        return ee;
      }
      function Cc(e, n) {
        return function(s, l) {
          return df(s, e, n(l), {});
        };
      }
      function Es(e, n) {
        return function(s, l) {
          var c;
          if (s === a && l === a) return n;
          if (s !== a && (c = s), l !== a) {
            if (c === a) return l;
            typeof s == "string" || typeof l == "string" ? (s = Rt(s), l = Rt(l)) : (s = uc(s), l = uc(l)), c = e(s, l);
          }
          return c;
        };
      }
      function fr(e) {
        return xn(function(n) {
          return n = ze(n, Ct(Q())), me(function(s) {
            var l = this;
            return e(n, function(c) {
              return wt(c, l, s);
            });
          });
        });
      }
      function Ns(e, n) {
        n = n === a ? " " : Rt(n);
        var s = n.length;
        if (s < 2) return s ? ur(n, e) : n;
        var l = ur(n, Is(e / Bi(n)));
        return ki(n) ? oi(Xt(l), 0, e).join("") : l.slice(0, e);
      }
      function Ff(e, n, s, l) {
        var c = n & he, g = ya(e);
        function I() {
          for (var b = -1, w = arguments.length, E = -1, A = l.length, D = R(A + w), H = this && this !== Qe && this instanceof I ? g : e; ++E < A; ) D[E] = l[E];
          for (; w--; ) D[E++] = arguments[++b];
          return wt(H, c ? s : this, D);
        }
        return I;
      }
      function Rc(e) {
        return function(n, s, l) {
          return l && typeof l != "number" && dt(n, s, l) && (s = l = a), n = kn(n), s === a ? (s = n, n = 0) : s = kn(s), l = l === a ? n < s ? 1 : -1 : kn(l), Cf(n, s, l, e);
        };
      }
      function Ms(e) {
        return function(n, s) {
          return typeof n == "string" && typeof s == "string" || (n = Jt(n), s = Jt(s)), e(n, s);
        };
      }
      function Uc(e, n, s, l, c, g, I, b, w, E) {
        var A = n & se, D = A ? I : a, H = A ? a : I, G = A ? g : a, Y = A ? a : g;
        n |= A ? j : Ne, n &= ~(A ? Ne : j), n & fe || (n &= ~(he | ye));
        var ae = [
          e,
          n,
          c,
          G,
          D,
          Y,
          H,
          b,
          w,
          E
        ], ee = s.apply(a, ae);
        return Cr(e) && Lc(ee, ae), ee.placeholder = l, Fc(ee, e, n);
      }
      function Ir(e) {
        var n = We[e];
        return function(s, l) {
          if (s = Jt(s), l = l == null ? 0 : ot(le(l), 292), l && Fu(s)) {
            var c = (_e(s) + "e").split("e");
            return c = (_e(n(c[0] + "e" + (+c[1] + l))) + "e").split("e"), +(c[0] + "e" + (+c[1] - l));
          }
          return n(s);
        };
      }
      var kf = Hi && 1 / rs(new Hi([, -0]))[1] == re ? function(e) {
        return new Hi(e);
      } : Fr;
      function Sc(e) {
        return function(n) {
          var s = rt(n);
          return s == h ? Wo(n) : s == x ? ih(n) : $g(n, e(n));
        };
      }
      function Dn(e, n, s, l, c, g, I, b) {
        var w = n & ye;
        if (!w && typeof e != "function") throw new Ft(m);
        var E = l ? l.length : 0;
        if (E || (n &= ~(j | Ne), l = c = a), I = I === a ? I : Ke(le(I), 0), b = b === a ? b : le(b), E -= c ? c.length : 0, n & Ne) {
          var A = l, D = c;
          l = c = a;
        }
        var H = w ? a : yr(e), G = [
          e,
          n,
          s,
          l,
          c,
          A,
          D,
          g,
          I,
          b
        ];
        if (H && t1(G, H), e = G[0], n = G[1], s = G[2], l = G[3], c = G[4], b = G[9] = G[9] === a ? w ? 0 : e.length : Ke(G[9] - E, 0), !b && n & (se | He) && (n &= ~(se | He)), !n || n == he) var Y = xf(e, n, s);
        else n == se || n == He ? Y = Lf(e, n, b) : (n == j || n == (he | j)) && !c.length ? Y = Ff(e, n, s, l) : Y = Vs.apply(a, G);
        return Fc((H ? rc : Lc)(Y, G), e, n);
      }
      function Ac(e, n, s, l) {
        return e === a || Yt(e, qi[s]) && !Re.call(l, s) ? n : e;
      }
      function Vc(e, n, s, l, c, g) {
        return De(e) && De(n) && (g.set(n, e), Rs(e, n, a, Vc, g), g.delete(n)), e;
      }
      function Bf(e) {
        return wa(e) ? a : e;
      }
      function Ec(e, n, s, l, c, g) {
        var I = s & q, b = e.length, w = n.length;
        if (b != w && !(I && w > b)) return !1;
        var E = g.get(e), A = g.get(n);
        if (E && A) return E == n && A == e;
        var D = -1, H = !0, G = s & W ? new fi() : a;
        for (g.set(e, n), g.set(n, e); ++D < b; ) {
          var Y = e[D], ae = n[D];
          if (l) var ee = I ? l(ae, Y, D, n, e, g) : l(Y, ae, D, e, n, g);
          if (ee !== a) {
            if (ee) continue;
            H = !1;
            break;
          }
          if (G) {
            if (!Bo(n, function(Se, pe) {
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
        return g.delete(e), g.delete(n), H;
      }
      function qf(e, n, s, l, c, g, I) {
        switch (s) {
          case ce:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) return !1;
            e = e.buffer, n = n.buffer;
          case Z:
            return !(e.byteLength != n.byteLength || !g(new ps(e), new ps(n)));
          case In:
          case Nn:
          case v:
            return Yt(+e, +n);
          case $t:
            return e.name == n.name && e.message == n.message;
          case F:
          case L:
            return e == n + "";
          case h:
            var b = Wo;
          case x:
            var w = l & q;
            if (b || (b = rs), e.size != n.size && !w) return !1;
            var E = I.get(e);
            if (E) return E == n;
            l |= W, I.set(e, n);
            var A = Ec(b(e), b(n), l, c, g, I);
            return I.delete(e), A;
          case z:
            if (ga) return ga.call(e) == ga.call(n);
        }
        return !1;
      }
      function Hf(e, n, s, l, c, g) {
        var I = s & q, b = br(e), w = b.length;
        if (w != br(n).length && !I) return !1;
        for (var E = w; E--; ) {
          var A = b[E];
          if (!(I ? A in n : Re.call(n, A))) return !1;
        }
        var D = g.get(e), H = g.get(n);
        if (D && H) return D == n && H == e;
        var G = !0;
        g.set(e, n), g.set(n, e);
        for (var Y = I; ++E < w; ) {
          A = b[E];
          var ae = e[A], ee = n[A];
          if (l) var Se = I ? l(ee, ae, A, n, e, g) : l(ae, ee, A, e, n, g);
          if (!(Se === a ? ae === ee || c(ae, ee, s, l, g) : Se)) {
            G = !1;
            break;
          }
          Y || (Y = A == "constructor");
        }
        if (G && !Y) {
          var pe = e.constructor, pt = n.constructor;
          pe != pt && "constructor" in e && "constructor" in n && !(typeof pe == "function" && pe instanceof pe && typeof pt == "function" && pt instanceof pt) && (G = !1);
        }
        return g.delete(e), g.delete(n), G;
      }
      function xn(e) {
        return Ur(Dc(e, a, jc), e + "");
      }
      function br(e) {
        return Xu(e, et, _r);
      }
      function vr(e) {
        return Xu(e, vt, Nc);
      }
      var yr = vs ? function(e) {
        return vs.get(e);
      } : Fr;
      function Os(e) {
        for (var n = e.name + "", s = Ji[n], l = Re.call(Ji, n) ? s.length : 0; l--; ) {
          var c = s[l], g = c.func;
          if (g == null || g == e) return c.name;
        }
        return n;
      }
      function Ki(e) {
        return (Re.call(d, "placeholder") ? d : e).placeholder;
      }
      function Q() {
        var e = d.iteratee || xr;
        return e = e === xr ? Qu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function zs(e, n) {
        var s = e.__data__;
        return Zf(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
      }
      function Tr(e) {
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
      function vi(e, n) {
        var s = eh(e, n);
        return Yu(s) ? s : a;
      }
      function Jf(e) {
        var n = Re.call(e, gi), s = e[gi];
        try {
          e[gi] = a;
          var l = !0;
        } catch {
        }
        var c = ms.call(e);
        return l && (n ? e[gi] = s : delete e[gi]), c;
      }
      var _r = $o ? function(e) {
        return e == null ? [] : (e = Ue(e), Yn($o(e), function(n) {
          return xu.call(e, n);
        }));
      } : kr, Nc = $o ? function(e) {
        for (var n = []; e; )
          Qn(n, _r(e)), e = gs(e);
        return n;
      } : kr, rt = mt;
      (Xo && rt(new Xo(/* @__PURE__ */ new ArrayBuffer(1))) != ce || ma && rt(new ma()) != h || Zo && rt(Zo.resolve()) != O || Hi && rt(new Hi()) != x || da && rt(new da()) != B) && (rt = function(e) {
        var n = mt(e), s = n == M ? e.constructor : a, l = s ? yi(s) : "";
        if (l) switch (l) {
          case Rh:
            return ce;
          case Uh:
            return h;
          case Sh:
            return O;
          case Ah:
            return x;
          case Vh:
            return B;
        }
        return n;
      });
      function jf(e, n, s) {
        for (var l = -1, c = s.length; ++l < c; ) {
          var g = s[l], I = g.size;
          switch (g.type) {
            case "drop":
              e += I;
              break;
            case "dropRight":
              n -= I;
              break;
            case "take":
              n = ot(n, e + I);
              break;
            case "takeRight":
              e = Ke(e, n - I);
              break;
          }
        }
        return {
          start: e,
          end: n
        };
      }
      function Gf(e) {
        var n = e.match(tg);
        return n ? n[1].split(ng) : [];
      }
      function Mc(e, n, s) {
        n = si(n, e);
        for (var l = -1, c = n.length, g = !1; ++l < c; ) {
          var I = yn(n[l]);
          if (!(g = e != null && s(e, I))) break;
          e = e[I];
        }
        return g || ++l != c ? g : (c = e == null ? 0 : e.length, !!c && Bs(c) && Ln(I, c) && (oe(e) || Ti(e)));
      }
      function Wf(e) {
        var n = e.length, s = new e.constructor(n);
        return n && typeof e[0] == "string" && Re.call(e, "index") && (s.index = e.index, s.input = e.input), s;
      }
      function Oc(e) {
        return typeof e.constructor == "function" && !Ta(e) ? ji(gs(e)) : {};
      }
      function Kf(e, n, s) {
        var l = e.constructor;
        switch (n) {
          case Z:
            return hr(e);
          case In:
          case Nn:
            return new l(+e);
          case ce:
            return Nf(e, s);
          case Ie:
          case be:
          case Oe:
          case Pe:
          case ct:
          case tt:
          case Mn:
          case xi:
          case Ge:
            return hc(e, s);
          case h:
            return new l();
          case v:
          case L:
            return new l(e);
          case F:
            return Mf(e);
          case x:
            return new l();
          case z:
            return Of(e);
        }
      }
      function $f(e, n) {
        var s = n.length;
        if (!s) return e;
        var l = s - 1;
        return n[l] = (s > 1 ? "& " : "") + n[l], n = n.join(s > 2 ? ", " : " "), e.replace(eg, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Xf(e) {
        return oe(e) || Ti(e) || !!(Lu && e && e[Lu]);
      }
      function Ln(e, n) {
        var s = typeof e;
        return n = n ?? ne, !!n && (s == "number" || s != "symbol" && mg.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function dt(e, n, s) {
        if (!De(s)) return !1;
        var l = typeof n;
        return (l == "number" ? bt(s) && Ln(n, s.length) : l == "string" && n in s) ? Yt(s[n], e) : !1;
      }
      function wr(e, n) {
        if (oe(e)) return !1;
        var s = typeof e;
        return s == "number" || s == "symbol" || s == "boolean" || e == null || Ut(e) ? !0 : Xp.test(e) || !$p.test(e) || n != null && e in Ue(n);
      }
      function Zf(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function Cr(e) {
        var n = Os(e), s = d[n];
        if (typeof s != "function" || !(n in de.prototype)) return !1;
        if (e === s) return !0;
        var l = yr(s);
        return !!l && e === l[0];
      }
      function Yf(e) {
        return !!zu && zu in e;
      }
      var Qf = us ? Fn : Br;
      function Ta(e) {
        var n = e && e.constructor;
        return e === (typeof n == "function" && n.prototype || qi);
      }
      function zc(e) {
        return e === e && !De(e);
      }
      function Pc(e, n) {
        return function(s) {
          return s == null ? !1 : s[e] === n && (n !== a || e in Ue(s));
        };
      }
      function e1(e) {
        var n = Fs(e, function(l) {
          return s.size === C && s.clear(), l;
        }), s = n.cache;
        return n;
      }
      function t1(e, n) {
        var s = e[1], l = n[1], c = s | l, g = c < (he | ye | xe), I = l == xe && s == se || l == xe && s == Le && e[7].length <= n[8] || l == (xe | Le) && n[7].length <= n[8] && s == se;
        if (!(g || I)) return e;
        l & he && (e[2] = n[2], c |= s & he ? 0 : fe);
        var b = n[3];
        if (b) {
          var w = e[3];
          e[3] = w ? Ic(w, b, n[4]) : b, e[4] = w ? ei(e[3], T) : n[4];
        }
        return b = n[5], b && (w = e[5], e[5] = w ? bc(w, b, n[6]) : b, e[6] = w ? ei(e[5], T) : n[6]), b = n[7], b && (e[7] = b), l & xe && (e[8] = e[8] == null ? n[8] : ot(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = c, e;
      }
      function n1(e) {
        var n = [];
        if (e != null) for (var s in Ue(e)) n.push(s);
        return n;
      }
      function i1(e) {
        return ms.call(e);
      }
      function Dc(e, n, s) {
        return n = Ke(n === a ? e.length - 1 : n, 0), function() {
          for (var l = arguments, c = -1, g = Ke(l.length - n, 0), I = R(g); ++c < g; ) I[c] = l[n + c];
          c = -1;
          for (var b = R(n + 1); ++c < n; ) b[c] = l[c];
          return b[n] = s(I), wt(e, this, b);
        };
      }
      function xc(e, n) {
        return n.length < 2 ? e : bi(e, qt(n, 0, -1));
      }
      function a1(e, n) {
        for (var s = e.length, l = ot(n.length, s), c = It(e); l--; ) {
          var g = n[l];
          e[l] = Ln(g, s) ? c[g] : a;
        }
        return e;
      }
      function Rr(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var Lc = kc(rc), _a = bh || function(e, n) {
        return Qe.setTimeout(e, n);
      }, Ur = kc(Sf);
      function Fc(e, n, s) {
        var l = n + "";
        return Ur(e, $f(l, s1(Gf(l), s)));
      }
      function kc(e) {
        var n = 0, s = 0;
        return function() {
          var l = _h(), c = Oi - (l - s);
          if (s = l, c > 0) {
            if (++n >= _t) return arguments[0];
          } else n = 0;
          return e.apply(a, arguments);
        };
      }
      function Ps(e, n) {
        var s = -1, l = e.length, c = l - 1;
        for (n = n === a ? l : n; ++s < n; ) {
          var g = lr(s, c), I = e[g];
          e[g] = e[s], e[s] = I;
        }
        return e.length = n, e;
      }
      var Bc = e1(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(Zp, function(s, l, c, g) {
          n.push(c ? g.replace(sg, "$1") : l || s);
        }), n;
      });
      function yn(e) {
        if (typeof e == "string" || Ut(e)) return e;
        var n = e + "";
        return n == "0" && 1 / e == -re ? "-0" : n;
      }
      function yi(e) {
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
      function s1(e, n) {
        return Lt(la, function(s) {
          var l = "_." + s[0];
          n & s[1] && !ss(e, l) && e.push(l);
        }), e.sort();
      }
      function qc(e) {
        if (e instanceof de) return e.clone();
        var n = new kt(e.__wrapped__, e.__chain__);
        return n.__actions__ = It(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function o1(e, n, s) {
        (s ? dt(e, n, s) : n === a) ? n = 1 : n = Ke(le(n), 0);
        var l = e == null ? 0 : e.length;
        if (!l || n < 1) return [];
        for (var c = 0, g = 0, I = R(Is(l / n)); c < l; ) I[g++] = qt(e, c, c += n);
        return I;
      }
      function r1(e) {
        for (var n = -1, s = e == null ? 0 : e.length, l = 0, c = []; ++n < s; ) {
          var g = e[n];
          g && (c[l++] = g);
        }
        return c;
      }
      function l1() {
        var e = arguments.length;
        if (!e) return [];
        for (var n = R(e - 1), s = arguments[0], l = e; l--; ) n[l - 1] = arguments[l];
        return Qn(oe(s) ? It(s) : [s], nt(n, 1));
      }
      var u1 = me(function(e, n) {
        return Be(e) ? fa(e, nt(n, 1, Be, !0)) : [];
      }), c1 = me(function(e, n) {
        var s = Ht(n);
        return Be(s) && (s = a), Be(e) ? fa(e, nt(n, 1, Be, !0), Q(s, 2)) : [];
      }), m1 = me(function(e, n) {
        var s = Ht(n);
        return Be(s) && (s = a), Be(e) ? fa(e, nt(n, 1, Be, !0), a, s) : [];
      });
      function d1(e, n, s) {
        var l = e == null ? 0 : e.length;
        return l ? (n = s || n === a ? 1 : le(n), qt(e, n < 0 ? 0 : n, l)) : [];
      }
      function p1(e, n, s) {
        var l = e == null ? 0 : e.length;
        return l ? (n = s || n === a ? 1 : le(n), n = l - n, qt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function g1(e, n) {
        return e && e.length ? Ss(e, Q(n, 3), !0, !0) : [];
      }
      function h1(e, n) {
        return e && e.length ? Ss(e, Q(n, 3), !0) : [];
      }
      function f1(e, n, s, l) {
        var c = e == null ? 0 : e.length;
        return c ? (s && typeof s != "number" && dt(e, n, s) && (s = 0, l = c), lf(e, n, s, l)) : [];
      }
      function Hc(e, n, s) {
        var l = e == null ? 0 : e.length;
        if (!l) return -1;
        var c = s == null ? 0 : le(s);
        return c < 0 && (c = Ke(l + c, 0)), os(e, Q(n, 3), c);
      }
      function Jc(e, n, s) {
        var l = e == null ? 0 : e.length;
        if (!l) return -1;
        var c = l - 1;
        return s !== a && (c = le(s), c = s < 0 ? Ke(l + c, 0) : ot(c, l - 1)), os(e, Q(n, 3), c, !0);
      }
      function jc(e) {
        return e != null && e.length ? nt(e, 1) : [];
      }
      function I1(e) {
        return e != null && e.length ? nt(e, re) : [];
      }
      function b1(e, n) {
        return e != null && e.length ? (n = n === a ? 1 : le(n), nt(e, n)) : [];
      }
      function v1(e) {
        for (var n = -1, s = e == null ? 0 : e.length, l = {}; ++n < s; ) {
          var c = e[n];
          l[c[0]] = c[1];
        }
        return l;
      }
      function Gc(e) {
        return e && e.length ? e[0] : a;
      }
      function y1(e, n, s) {
        var l = e == null ? 0 : e.length;
        if (!l) return -1;
        var c = s == null ? 0 : le(s);
        return c < 0 && (c = Ke(l + c, 0)), Fi(e, n, c);
      }
      function T1(e) {
        return e != null && e.length ? qt(e, 0, -1) : [];
      }
      var _1 = me(function(e) {
        var n = ze(e, pr);
        return n.length && n[0] === e[0] ? ir(n) : [];
      }), w1 = me(function(e) {
        var n = Ht(e), s = ze(e, pr);
        return n === Ht(s) ? n = a : s.pop(), s.length && s[0] === e[0] ? ir(s, Q(n, 2)) : [];
      }), C1 = me(function(e) {
        var n = Ht(e), s = ze(e, pr);
        return n = typeof n == "function" ? n : a, n && s.pop(), s.length && s[0] === e[0] ? ir(s, a, n) : [];
      });
      function R1(e, n) {
        return e == null ? "" : yh.call(e, n);
      }
      function Ht(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : a;
      }
      function U1(e, n, s) {
        var l = e == null ? 0 : e.length;
        if (!l) return -1;
        var c = l;
        return s !== a && (c = le(s), c = c < 0 ? Ke(l + c, 0) : ot(c, l - 1)), n === n ? sh(e, n, c) : os(e, Uu, c, !0);
      }
      function S1(e, n) {
        return e && e.length ? ic(e, le(n)) : a;
      }
      var A1 = me(Wc);
      function Wc(e, n) {
        return e && e.length && n && n.length ? rr(e, n) : e;
      }
      function V1(e, n, s) {
        return e && e.length && n && n.length ? rr(e, n, Q(s, 2)) : e;
      }
      function E1(e, n, s) {
        return e && e.length && n && n.length ? rr(e, n, a, s) : e;
      }
      var N1 = xn(function(e, n) {
        var s = e == null ? 0 : e.length, l = Qo(e, n);
        return oc(e, ze(n, function(c) {
          return Ln(c, s) ? +c : c;
        }).sort(fc)), l;
      });
      function M1(e, n) {
        var s = [];
        if (!(e && e.length)) return s;
        var l = -1, c = [], g = e.length;
        for (n = Q(n, 3); ++l < g; ) {
          var I = e[l];
          n(I, l, e) && (s.push(I), c.push(l));
        }
        return oc(e, c), s;
      }
      function Sr(e) {
        return e == null ? e : Ch.call(e);
      }
      function O1(e, n, s) {
        var l = e == null ? 0 : e.length;
        return l ? (s && typeof s != "number" && dt(e, n, s) ? (n = 0, s = l) : (n = n == null ? 0 : le(n), s = s === a ? l : le(s)), qt(e, n, s)) : [];
      }
      function z1(e, n) {
        return Us(e, n);
      }
      function P1(e, n, s) {
        return cr(e, n, Q(s, 2));
      }
      function D1(e, n) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var l = Us(e, n);
          if (l < s && Yt(e[l], n)) return l;
        }
        return -1;
      }
      function x1(e, n) {
        return Us(e, n, !0);
      }
      function L1(e, n, s) {
        return cr(e, n, Q(s, 2), !0);
      }
      function F1(e, n) {
        if (e != null && e.length) {
          var s = Us(e, n, !0) - 1;
          if (Yt(e[s], n)) return s;
        }
        return -1;
      }
      function k1(e) {
        return e && e.length ? lc(e) : [];
      }
      function B1(e, n) {
        return e && e.length ? lc(e, Q(n, 2)) : [];
      }
      function q1(e) {
        var n = e == null ? 0 : e.length;
        return n ? qt(e, 1, n) : [];
      }
      function H1(e, n, s) {
        return e && e.length ? (n = s || n === a ? 1 : le(n), qt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function J1(e, n, s) {
        var l = e == null ? 0 : e.length;
        return l ? (n = s || n === a ? 1 : le(n), n = l - n, qt(e, n < 0 ? 0 : n, l)) : [];
      }
      function j1(e, n) {
        return e && e.length ? Ss(e, Q(n, 3), !1, !0) : [];
      }
      function G1(e, n) {
        return e && e.length ? Ss(e, Q(n, 3)) : [];
      }
      var W1 = me(function(e) {
        return ai(nt(e, 1, Be, !0));
      }), K1 = me(function(e) {
        var n = Ht(e);
        return Be(n) && (n = a), ai(nt(e, 1, Be, !0), Q(n, 2));
      }), $1 = me(function(e) {
        var n = Ht(e);
        return n = typeof n == "function" ? n : a, ai(nt(e, 1, Be, !0), a, n);
      });
      function X1(e) {
        return e && e.length ? ai(e) : [];
      }
      function Z1(e, n) {
        return e && e.length ? ai(e, Q(n, 2)) : [];
      }
      function Y1(e, n) {
        return n = typeof n == "function" ? n : a, e && e.length ? ai(e, a, n) : [];
      }
      function Ar(e) {
        if (!(e && e.length)) return [];
        var n = 0;
        return e = Yn(e, function(s) {
          if (Be(s))
            return n = Ke(s.length, n), !0;
        }), jo(n, function(s) {
          return ze(e, qo(s));
        });
      }
      function Kc(e, n) {
        if (!(e && e.length)) return [];
        var s = Ar(e);
        return n == null ? s : ze(s, function(l) {
          return wt(n, a, l);
        });
      }
      var Q1 = me(function(e, n) {
        return Be(e) ? fa(e, n) : [];
      }), e0 = me(function(e) {
        return dr(Yn(e, Be));
      }), t0 = me(function(e) {
        var n = Ht(e);
        return Be(n) && (n = a), dr(Yn(e, Be), Q(n, 2));
      }), n0 = me(function(e) {
        var n = Ht(e);
        return n = typeof n == "function" ? n : a, dr(Yn(e, Be), a, n);
      }), i0 = me(Ar);
      function a0(e, n) {
        return dc(e || [], n || [], ha);
      }
      function s0(e, n) {
        return dc(e || [], n || [], va);
      }
      var o0 = me(function(e) {
        var n = e.length, s = n > 1 ? e[n - 1] : a;
        return s = typeof s == "function" ? (e.pop(), s) : a, Kc(e, s);
      });
      function $c(e) {
        var n = d(e);
        return n.__chain__ = !0, n;
      }
      function r0(e, n) {
        return n(e), e;
      }
      function Ds(e, n) {
        return n(e);
      }
      var l0 = xn(function(e) {
        var n = e.length, s = n ? e[0] : 0, l = this.__wrapped__, c = function(g) {
          return Qo(g, e);
        };
        return n > 1 || this.__actions__.length || !(l instanceof de) || !Ln(s) ? this.thru(c) : (l = l.slice(s, +s + (n ? 1 : 0)), l.__actions__.push({
          func: Ds,
          args: [c],
          thisArg: a
        }), new kt(l, this.__chain__).thru(function(g) {
          return n && !g.length && g.push(a), g;
        }));
      });
      function u0() {
        return $c(this);
      }
      function c0() {
        return new kt(this.value(), this.__chain__);
      }
      function m0() {
        this.__values__ === a && (this.__values__ = um(this.value()));
        var e = this.__index__ >= this.__values__.length;
        return {
          done: e,
          value: e ? a : this.__values__[this.__index__++]
        };
      }
      function d0() {
        return this;
      }
      function p0(e) {
        for (var n, s = this; s instanceof Ts; ) {
          var l = qc(s);
          l.__index__ = 0, l.__values__ = a, n ? c.__wrapped__ = l : n = l;
          var c = l;
          s = s.__wrapped__;
        }
        return c.__wrapped__ = e, n;
      }
      function g0() {
        var e = this.__wrapped__;
        if (e instanceof de) {
          var n = e;
          return this.__actions__.length && (n = new de(this)), n = n.reverse(), n.__actions__.push({
            func: Ds,
            args: [Sr],
            thisArg: a
          }), new kt(n, this.__chain__);
        }
        return this.thru(Sr);
      }
      function h0() {
        return mc(this.__wrapped__, this.__actions__);
      }
      var f0 = As(function(e, n, s) {
        Re.call(e, s) ? ++e[s] : Pn(e, s, 1);
      });
      function I0(e, n, s) {
        var l = oe(e) ? Cu : rf;
        return s && dt(e, n, s) && (n = a), l(e, Q(n, 3));
      }
      function b0(e, n) {
        return (oe(e) ? Yn : Ku)(e, Q(n, 3));
      }
      var v0 = _c(Hc), y0 = _c(Jc);
      function T0(e, n) {
        return nt(xs(e, n), 1);
      }
      function _0(e, n) {
        return nt(xs(e, n), re);
      }
      function w0(e, n, s) {
        return s = s === a ? 1 : le(s), nt(xs(e, n), s);
      }
      function Xc(e, n) {
        return (oe(e) ? Lt : ii)(e, Q(n, 3));
      }
      function Zc(e, n) {
        return (oe(e) ? qg : Wu)(e, Q(n, 3));
      }
      var C0 = As(function(e, n, s) {
        Re.call(e, s) ? e[s].push(n) : Pn(e, s, [n]);
      });
      function R0(e, n, s, l) {
        e = bt(e) ? e : Xi(e), s = s && !l ? le(s) : 0;
        var c = e.length;
        return s < 0 && (s = Ke(c + s, 0)), qs(e) ? s <= c && e.indexOf(n, s) > -1 : !!c && Fi(e, n, s) > -1;
      }
      var U0 = me(function(e, n, s) {
        var l = -1, c = typeof n == "function", g = bt(e) ? R(e.length) : [];
        return ii(e, function(I) {
          g[++l] = c ? wt(n, I, s) : Ia(I, n, s);
        }), g;
      }), S0 = As(function(e, n, s) {
        Pn(e, s, n);
      });
      function xs(e, n) {
        return (oe(e) ? ze : ec)(e, Q(n, 3));
      }
      function A0(e, n, s, l) {
        return e == null ? [] : (oe(n) || (n = n == null ? [] : [n]), s = l ? a : s, oe(s) || (s = s == null ? [] : [s]), ac(e, n, s));
      }
      var V0 = As(function(e, n, s) {
        e[s ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function E0(e, n, s) {
        var l = oe(e) ? ko : Au, c = arguments.length < 3;
        return l(e, Q(n, 4), s, c, ii);
      }
      function N0(e, n, s) {
        var l = oe(e) ? Hg : Au, c = arguments.length < 3;
        return l(e, Q(n, 4), s, c, Wu);
      }
      function M0(e, n) {
        return (oe(e) ? Yn : Ku)(e, ks(Q(n, 3)));
      }
      function O0(e) {
        return (oe(e) ? Hu : Rf)(e);
      }
      function z0(e, n, s) {
        return (s ? dt(e, n, s) : n === a) ? n = 1 : n = le(n), (oe(e) ? tf : Uf)(e, n);
      }
      function P0(e) {
        return (oe(e) ? nf : Af)(e);
      }
      function D0(e) {
        if (e == null) return 0;
        if (bt(e)) return qs(e) ? Bi(e) : e.length;
        var n = rt(e);
        return n == h || n == x ? e.size : sr(e).length;
      }
      function x0(e, n, s) {
        var l = oe(e) ? Bo : Vf;
        return s && dt(e, n, s) && (n = a), l(e, Q(n, 3));
      }
      var L0 = me(function(e, n) {
        if (e == null) return [];
        var s = n.length;
        return s > 1 && dt(e, n[0], n[1]) ? n = [] : s > 2 && dt(n[0], n[1], n[2]) && (n = [n[0]]), ac(e, nt(n, 1), []);
      }), Ls = Ih || function() {
        return Qe.Date.now();
      };
      function F0(e, n) {
        if (typeof n != "function") throw new Ft(m);
        return e = le(e), function() {
          if (--e < 1) return n.apply(this, arguments);
        };
      }
      function Yc(e, n, s) {
        return n = s ? a : n, n = e && n == null ? e.length : n, Dn(e, xe, a, a, a, a, n);
      }
      function Qc(e, n) {
        var s;
        if (typeof n != "function") throw new Ft(m);
        return e = le(e), function() {
          return --e > 0 && (s = n.apply(this, arguments)), e <= 1 && (n = a), s;
        };
      }
      var Vr = me(function(e, n, s) {
        var l = he;
        if (s.length) {
          var c = ei(s, Ki(Vr));
          l |= j;
        }
        return Dn(e, l, n, s, c);
      }), em = me(function(e, n, s) {
        var l = he | ye;
        if (s.length) {
          var c = ei(s, Ki(em));
          l |= j;
        }
        return Dn(n, l, e, s, c);
      });
      function tm(e, n, s) {
        n = s ? a : n;
        var l = Dn(e, se, a, a, a, a, a, n);
        return l.placeholder = tm.placeholder, l;
      }
      function nm(e, n, s) {
        n = s ? a : n;
        var l = Dn(e, He, a, a, a, a, a, n);
        return l.placeholder = nm.placeholder, l;
      }
      function im(e, n, s) {
        var l, c, g, I, b, w, E = 0, A = !1, D = !1, H = !0;
        if (typeof e != "function") throw new Ft(m);
        n = Jt(n) || 0, De(s) && (A = !!s.leading, D = "maxWait" in s, g = D ? Ke(Jt(s.maxWait) || 0, n) : g, H = "trailing" in s ? !!s.trailing : H);
        function G(qe) {
          var Qt = l, Bn = c;
          return l = c = a, E = qe, I = e.apply(Bn, Qt), I;
        }
        function Y(qe) {
          return E = qe, b = _a(Se, n), A ? G(qe) : I;
        }
        function ae(qe) {
          var Qt = qe - w, Bn = qe - E, _m = n - Qt;
          return D ? ot(_m, g - Bn) : _m;
        }
        function ee(qe) {
          var Qt = qe - w, Bn = qe - E;
          return w === a || Qt >= n || Qt < 0 || D && Bn >= g;
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
          b !== a && pc(b), E = 0, l = w = c = b = a;
        }
        function Tn() {
          return b === a ? I : pe(Ls());
        }
        function li() {
          var qe = Ls(), Qt = ee(qe);
          if (l = arguments, c = this, w = qe, Qt) {
            if (b === a) return Y(w);
            if (D)
              return pc(b), b = _a(Se, n), G(w);
          }
          return b === a && (b = _a(Se, n)), I;
        }
        return li.cancel = pt, li.flush = Tn, li;
      }
      var k0 = me(function(e, n) {
        return Gu(e, 1, n);
      }), B0 = me(function(e, n, s) {
        return Gu(e, Jt(n) || 0, s);
      });
      function q0(e) {
        return Dn(e, Ye);
      }
      function Fs(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function") throw new Ft(m);
        var s = function() {
          var l = arguments, c = n ? n.apply(this, l) : l[0], g = s.cache;
          if (g.has(c)) return g.get(c);
          var I = e.apply(this, l);
          return s.cache = g.set(c, I) || g, I;
        };
        return s.cache = new (Fs.Cache || zn)(), s;
      }
      Fs.Cache = zn;
      function ks(e) {
        if (typeof e != "function") throw new Ft(m);
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
      function H0(e) {
        return Qc(2, e);
      }
      var J0 = Ef(function(e, n) {
        n = n.length == 1 && oe(n[0]) ? ze(n[0], Ct(Q())) : ze(nt(n, 1), Ct(Q()));
        var s = n.length;
        return me(function(l) {
          for (var c = -1, g = ot(l.length, s); ++c < g; ) l[c] = n[c].call(this, l[c]);
          return wt(e, this, l);
        });
      }), Er = me(function(e, n) {
        return Dn(e, j, a, n, ei(n, Ki(Er)));
      }), am = me(function(e, n) {
        return Dn(e, Ne, a, n, ei(n, Ki(am)));
      }), j0 = xn(function(e, n) {
        return Dn(e, Le, a, a, a, n);
      });
      function G0(e, n) {
        if (typeof e != "function") throw new Ft(m);
        return n = n === a ? n : le(n), me(e, n);
      }
      function W0(e, n) {
        if (typeof e != "function") throw new Ft(m);
        return n = n == null ? 0 : Ke(le(n), 0), me(function(s) {
          var l = s[n], c = oi(s, 0, n);
          return l && Qn(c, l), wt(e, this, c);
        });
      }
      function K0(e, n, s) {
        var l = !0, c = !0;
        if (typeof e != "function") throw new Ft(m);
        return De(s) && (l = "leading" in s ? !!s.leading : l, c = "trailing" in s ? !!s.trailing : c), im(e, n, {
          leading: l,
          maxWait: n,
          trailing: c
        });
      }
      function $0(e) {
        return Yc(e, 1);
      }
      function X0(e, n) {
        return Er(gr(n), e);
      }
      function Z0() {
        if (!arguments.length) return [];
        var e = arguments[0];
        return oe(e) ? e : [e];
      }
      function Y0(e) {
        return Bt(e, P);
      }
      function Q0(e, n) {
        return n = typeof n == "function" ? n : a, Bt(e, P, n);
      }
      function eI(e) {
        return Bt(e, y | P);
      }
      function tI(e, n) {
        return n = typeof n == "function" ? n : a, Bt(e, y | P, n);
      }
      function nI(e, n) {
        return n == null || ju(e, n, et(n));
      }
      function Yt(e, n) {
        return e === n || e !== e && n !== n;
      }
      var iI = Ms(nr), aI = Ms(function(e, n) {
        return e >= n;
      }), Ti = Zu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Zu : function(e) {
        return Fe(e) && Re.call(e, "callee") && !xu.call(e, "callee");
      }, oe = R.isArray, sI = bu ? Ct(bu) : pf;
      function bt(e) {
        return e != null && Bs(e.length) && !Fn(e);
      }
      function Be(e) {
        return Fe(e) && bt(e);
      }
      function oI(e) {
        return e === !0 || e === !1 || Fe(e) && mt(e) == In;
      }
      var ri = vh || Br, rI = vu ? Ct(vu) : gf;
      function lI(e) {
        return Fe(e) && e.nodeType === 1 && !wa(e);
      }
      function uI(e) {
        if (e == null) return !0;
        if (bt(e) && (oe(e) || typeof e == "string" || typeof e.splice == "function" || ri(e) || $i(e) || Ti(e))) return !e.length;
        var n = rt(e);
        if (n == h || n == x) return !e.size;
        if (Ta(e)) return !sr(e).length;
        for (var s in e) if (Re.call(e, s)) return !1;
        return !0;
      }
      function cI(e, n) {
        return ba(e, n);
      }
      function mI(e, n, s) {
        s = typeof s == "function" ? s : a;
        var l = s ? s(e, n) : a;
        return l === a ? ba(e, n, a, s) : !!l;
      }
      function Nr(e) {
        if (!Fe(e)) return !1;
        var n = mt(e);
        return n == $t || n == Qa || typeof e.message == "string" && typeof e.name == "string" && !wa(e);
      }
      function dI(e) {
        return typeof e == "number" && Fu(e);
      }
      function Fn(e) {
        if (!De(e)) return !1;
        var n = mt(e);
        return n == Zn || n == Di || n == di || n == N;
      }
      function sm(e) {
        return typeof e == "number" && e == le(e);
      }
      function Bs(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ne;
      }
      function De(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function Fe(e) {
        return e != null && typeof e == "object";
      }
      var om = yu ? Ct(yu) : ff;
      function pI(e, n) {
        return e === n || ar(e, n, Tr(n));
      }
      function gI(e, n, s) {
        return s = typeof s == "function" ? s : a, ar(e, n, Tr(n), s);
      }
      function hI(e) {
        return rm(e) && e != +e;
      }
      function fI(e) {
        if (Qf(e)) throw new ie(u);
        return Yu(e);
      }
      function II(e) {
        return e === null;
      }
      function bI(e) {
        return e == null;
      }
      function rm(e) {
        return typeof e == "number" || Fe(e) && mt(e) == v;
      }
      function wa(e) {
        if (!Fe(e) || mt(e) != M) return !1;
        var n = gs(e);
        if (n === null) return !0;
        var s = Re.call(n, "constructor") && n.constructor;
        return typeof s == "function" && s instanceof s && cs.call(s) == ph;
      }
      var Mr = Tu ? Ct(Tu) : If;
      function vI(e) {
        return sm(e) && e >= -ne && e <= ne;
      }
      var lm = _u ? Ct(_u) : bf;
      function qs(e) {
        return typeof e == "string" || !oe(e) && Fe(e) && mt(e) == L;
      }
      function Ut(e) {
        return typeof e == "symbol" || Fe(e) && mt(e) == z;
      }
      var $i = wu ? Ct(wu) : vf;
      function yI(e) {
        return e === a;
      }
      function TI(e) {
        return Fe(e) && rt(e) == B;
      }
      function _I(e) {
        return Fe(e) && mt(e) == K;
      }
      var wI = Ms(or), CI = Ms(function(e, n) {
        return e <= n;
      });
      function um(e) {
        if (!e) return [];
        if (bt(e)) return qs(e) ? Xt(e) : It(e);
        if (ca && e[ca]) return nh(e[ca]());
        var n = rt(e);
        return (n == h ? Wo : n == x ? rs : Xi)(e);
      }
      function kn(e) {
        return e ? (e = Jt(e), e === re || e === -re ? (e < 0 ? -1 : 1) * Pt : e === e ? e : 0) : e === 0 ? e : 0;
      }
      function le(e) {
        var n = kn(e), s = n % 1;
        return n === n ? s ? n - s : n : 0;
      }
      function cm(e) {
        return e ? Ii(le(e), 0, ut) : 0;
      }
      function Jt(e) {
        if (typeof e == "number") return e;
        if (Ut(e)) return En;
        if (De(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = De(n) ? n + "" : n;
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = Vu(e);
        var s = lg.test(e);
        return s || cg.test(e) ? Fg(e.slice(2), s ? 2 : 8) : rg.test(e) ? En : +e;
      }
      function mm(e) {
        return vn(e, vt(e));
      }
      function RI(e) {
        return e ? Ii(le(e), -ne, ne) : e === 0 ? e : 0;
      }
      function _e(e) {
        return e == null ? "" : Rt(e);
      }
      var UI = Gi(function(e, n) {
        if (Ta(n) || bt(n)) {
          vn(n, et(n), e);
          return;
        }
        for (var s in n) Re.call(n, s) && ha(e, s, n[s]);
      }), dm = Gi(function(e, n) {
        vn(n, vt(n), e);
      }), Hs = Gi(function(e, n, s, l) {
        vn(n, vt(n), e, l);
      }), SI = Gi(function(e, n, s, l) {
        vn(n, et(n), e, l);
      }), AI = xn(Qo);
      function VI(e, n) {
        var s = ji(e);
        return n == null ? s : Ju(s, n);
      }
      var EI = me(function(e, n) {
        e = Ue(e);
        var s = -1, l = n.length, c = l > 2 ? n[2] : a;
        for (c && dt(n[0], n[1], c) && (l = 1); ++s < l; )
          for (var g = n[s], I = vt(g), b = -1, w = I.length; ++b < w; ) {
            var E = I[b], A = e[E];
            (A === a || Yt(A, qi[E]) && !Re.call(e, E)) && (e[E] = g[E]);
          }
        return e;
      }), NI = me(function(e) {
        return e.push(a, Vc), wt(pm, a, e);
      });
      function MI(e, n) {
        return Ru(e, Q(n, 3), bn);
      }
      function OI(e, n) {
        return Ru(e, Q(n, 3), tr);
      }
      function zI(e, n) {
        return e == null ? e : er(e, Q(n, 3), vt);
      }
      function PI(e, n) {
        return e == null ? e : $u(e, Q(n, 3), vt);
      }
      function DI(e, n) {
        return e && bn(e, Q(n, 3));
      }
      function xI(e, n) {
        return e && tr(e, Q(n, 3));
      }
      function LI(e) {
        return e == null ? [] : Cs(e, et(e));
      }
      function FI(e) {
        return e == null ? [] : Cs(e, vt(e));
      }
      function Or(e, n, s) {
        var l = e == null ? a : bi(e, n);
        return l === a ? s : l;
      }
      function kI(e, n) {
        return e != null && Mc(e, n, uf);
      }
      function zr(e, n) {
        return e != null && Mc(e, n, cf);
      }
      var BI = Cc(function(e, n, s) {
        n != null && typeof n.toString != "function" && (n = ms.call(n)), e[n] = s;
      }, Dr(yt)), qI = Cc(function(e, n, s) {
        n != null && typeof n.toString != "function" && (n = ms.call(n)), Re.call(e, n) ? e[n].push(s) : e[n] = [s];
      }, Q), HI = me(Ia);
      function et(e) {
        return bt(e) ? qu(e) : sr(e);
      }
      function vt(e) {
        return bt(e) ? qu(e, !0) : yf(e);
      }
      function JI(e, n) {
        var s = {};
        return n = Q(n, 3), bn(e, function(l, c, g) {
          Pn(s, n(l, c, g), l);
        }), s;
      }
      function jI(e, n) {
        var s = {};
        return n = Q(n, 3), bn(e, function(l, c, g) {
          Pn(s, c, n(l, c, g));
        }), s;
      }
      var GI = Gi(function(e, n, s) {
        Rs(e, n, s);
      }), pm = Gi(function(e, n, s, l) {
        Rs(e, n, s, l);
      }), WI = xn(function(e, n) {
        var s = {};
        if (e == null) return s;
        var l = !1;
        n = ze(n, function(g) {
          return g = si(g, e), l || (l = g.length > 1), g;
        }), vn(e, vr(e), s), l && (s = Bt(s, y | V | P, Bf));
        for (var c = n.length; c--; ) mr(s, n[c]);
        return s;
      });
      function KI(e, n) {
        return gm(e, ks(Q(n)));
      }
      var $I = xn(function(e, n) {
        return e == null ? {} : _f(e, n);
      });
      function gm(e, n) {
        if (e == null) return {};
        var s = ze(vr(e), function(l) {
          return [l];
        });
        return n = Q(n), sc(e, s, function(l, c) {
          return n(l, c[0]);
        });
      }
      function XI(e, n, s) {
        n = si(n, e);
        var l = -1, c = n.length;
        for (c || (c = 1, e = a); ++l < c; ) {
          var g = e == null ? a : e[yn(n[l])];
          g === a && (l = c, g = s), e = Fn(g) ? g.call(e) : g;
        }
        return e;
      }
      function ZI(e, n, s) {
        return e == null ? e : va(e, n, s);
      }
      function YI(e, n, s, l) {
        return l = typeof l == "function" ? l : a, e == null ? e : va(e, n, s, l);
      }
      var hm = Sc(et), fm = Sc(vt);
      function QI(e, n, s) {
        var l = oe(e), c = l || ri(e) || $i(e);
        if (n = Q(n, 4), s == null) {
          var g = e && e.constructor;
          c ? s = l ? new g() : [] : De(e) ? s = Fn(g) ? ji(gs(e)) : {} : s = {};
        }
        return (c ? Lt : bn)(e, function(I, b, w) {
          return n(s, I, b, w);
        }), s;
      }
      function e3(e, n) {
        return e == null ? !0 : mr(e, n);
      }
      function t3(e, n, s) {
        return e == null ? e : cc(e, n, gr(s));
      }
      function n3(e, n, s, l) {
        return l = typeof l == "function" ? l : a, e == null ? e : cc(e, n, gr(s), l);
      }
      function Xi(e) {
        return e == null ? [] : Go(e, et(e));
      }
      function i3(e) {
        return e == null ? [] : Go(e, vt(e));
      }
      function a3(e, n, s) {
        return s === a && (s = n, n = a), s !== a && (s = Jt(s), s = s === s ? s : 0), n !== a && (n = Jt(n), n = n === n ? n : 0), Ii(Jt(e), n, s);
      }
      function s3(e, n, s) {
        return n = kn(n), s === a ? (s = n, n = 0) : s = kn(s), e = Jt(e), mf(e, n, s);
      }
      function o3(e, n, s) {
        if (s && typeof s != "boolean" && dt(e, n, s) && (n = s = a), s === a && (typeof n == "boolean" ? (s = n, n = a) : typeof e == "boolean" && (s = e, e = a)), e === a && n === a ? (e = 0, n = 1) : (e = kn(e), n === a ? (n = e, e = 0) : n = kn(n)), e > n) {
          var l = e;
          e = n, n = l;
        }
        if (s || e % 1 || n % 1) {
          var c = ku();
          return ot(e + c * (n - e + Lg("1e-" + ((c + "").length - 1))), n);
        }
        return lr(e, n);
      }
      var r3 = Wi(function(e, n, s) {
        return n = n.toLowerCase(), e + (s ? Im(n) : n);
      });
      function Im(e) {
        return Pr(_e(e).toLowerCase());
      }
      function bm(e) {
        return e = _e(e), e && e.replace(dg, Zg).replace(Ag, "");
      }
      function l3(e, n, s) {
        e = _e(e), n = Rt(n);
        var l = e.length;
        s = s === a ? l : Ii(le(s), 0, l);
        var c = s;
        return s -= n.length, s >= 0 && e.slice(s, c) == n;
      }
      function u3(e) {
        return e = _e(e), e && Gp.test(e) ? e.replace($l, Yg) : e;
      }
      function c3(e) {
        return e = _e(e), e && Yp.test(e) ? e.replace(Eo, "\\$&") : e;
      }
      var m3 = Wi(function(e, n, s) {
        return e + (s ? "-" : "") + n.toLowerCase();
      }), d3 = Wi(function(e, n, s) {
        return e + (s ? " " : "") + n.toLowerCase();
      }), p3 = Tc("toLowerCase");
      function g3(e, n, s) {
        e = _e(e), n = le(n);
        var l = n ? Bi(e) : 0;
        if (!n || l >= n) return e;
        var c = (n - l) / 2;
        return Ns(bs(c), s) + e + Ns(Is(c), s);
      }
      function h3(e, n, s) {
        e = _e(e), n = le(n);
        var l = n ? Bi(e) : 0;
        return n && l < n ? e + Ns(n - l, s) : e;
      }
      function f3(e, n, s) {
        e = _e(e), n = le(n);
        var l = n ? Bi(e) : 0;
        return n && l < n ? Ns(n - l, s) + e : e;
      }
      function I3(e, n, s) {
        return s || n == null ? n = 0 : n && (n = +n), wh(_e(e).replace(No, ""), n || 0);
      }
      function b3(e, n, s) {
        return (s ? dt(e, n, s) : n === a) ? n = 1 : n = le(n), ur(_e(e), n);
      }
      function v3() {
        var e = arguments, n = _e(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var y3 = Wi(function(e, n, s) {
        return e + (s ? "_" : "") + n.toLowerCase();
      });
      function T3(e, n, s) {
        return s && typeof s != "number" && dt(e, n, s) && (n = s = a), s = s === a ? ut : s >>> 0, s ? (e = _e(e), e && (typeof n == "string" || n != null && !Mr(n)) && (n = Rt(n), !n && ki(e)) ? oi(Xt(e), 0, s) : e.split(n, s)) : [];
      }
      var _3 = Wi(function(e, n, s) {
        return e + (s ? " " : "") + Pr(n);
      });
      function w3(e, n, s) {
        return e = _e(e), s = s == null ? 0 : Ii(le(s), 0, e.length), n = Rt(n), e.slice(s, s + n.length) == n;
      }
      function C3(e, n, s) {
        var l = d.templateSettings;
        s && dt(e, n, s) && (n = a), e = _e(e), n = Hs({}, n, l, Ac);
        var c = Hs({}, n.imports, l.imports, Ac), g = et(c), I = Go(c, g), b, w, E = 0, A = n.interpolate || ns, D = "__p += '", H = Ko((n.escape || ns).source + "|" + A.source + "|" + (A === Xl ? og : ns).source + "|" + (n.evaluate || ns).source + "|$", "g"), G = "//# sourceURL=" + (Re.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Og + "]") + `
`;
        e.replace(H, function(ee, Se, pe, pt, Tn, li) {
          return pe || (pe = pt), D += e.slice(E, li).replace(pg, Qg), Se && (b = !0, D += `' +
__e(` + Se + `) +
'`), Tn && (w = !0, D += `';
` + Tn + `;
__p += '`), pe && (D += `' +
((__t = (` + pe + `)) == null ? '' : __t) +
'`), E = li + ee.length, ee;
        }), D += `';
`;
        var Y = Re.call(n, "variable") && n.variable;
        if (!Y) D = `with (obj) {
` + D + `
}
`;
        else if (ag.test(Y)) throw new ie(p);
        D = (w ? D.replace(Dt, "") : D).replace(es, "$1").replace(ts, "$1;"), D = "function(" + (Y || "obj") + `) {
` + (Y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (b ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + D + `return __p
}`;
        var ae = ym(function() {
          return Te(g, G + "return " + D).apply(a, I);
        });
        if (ae.source = D, Nr(ae)) throw ae;
        return ae;
      }
      function R3(e) {
        return _e(e).toLowerCase();
      }
      function U3(e) {
        return _e(e).toUpperCase();
      }
      function S3(e, n, s) {
        if (e = _e(e), e && (s || n === a)) return Vu(e);
        if (!e || !(n = Rt(n))) return e;
        var l = Xt(e), c = Xt(n);
        return oi(l, Eu(l, c), Nu(l, c) + 1).join("");
      }
      function A3(e, n, s) {
        if (e = _e(e), e && (s || n === a)) return e.slice(0, Ou(e) + 1);
        if (!e || !(n = Rt(n))) return e;
        var l = Xt(e);
        return oi(l, 0, Nu(l, Xt(n)) + 1).join("");
      }
      function V3(e, n, s) {
        if (e = _e(e), e && (s || n === a)) return e.replace(No, "");
        if (!e || !(n = Rt(n))) return e;
        var l = Xt(e);
        return oi(l, Eu(l, Xt(n))).join("");
      }
      function E3(e, n) {
        var s = Kt, l = gn;
        if (De(n)) {
          var c = "separator" in n ? n.separator : c;
          s = "length" in n ? le(n.length) : s, l = "omission" in n ? Rt(n.omission) : l;
        }
        e = _e(e);
        var g = e.length;
        if (ki(e)) {
          var I = Xt(e);
          g = I.length;
        }
        if (s >= g) return e;
        var b = s - Bi(l);
        if (b < 1) return l;
        var w = I ? oi(I, 0, b).join("") : e.slice(0, b);
        if (c === a) return w + l;
        if (I && (b += w.length - b), Mr(c)) {
          if (e.slice(b).search(c)) {
            var E, A = w;
            for (c.global || (c = Ko(c.source, _e(Zl.exec(c)) + "g")), c.lastIndex = 0; E = c.exec(A); ) var D = E.index;
            w = w.slice(0, D === a ? b : D);
          }
        } else if (e.indexOf(Rt(c), b) != b) {
          var H = w.lastIndexOf(c);
          H > -1 && (w = w.slice(0, H));
        }
        return w + l;
      }
      function N3(e) {
        return e = _e(e), e && jp.test(e) ? e.replace(Kl, oh) : e;
      }
      var M3 = Wi(function(e, n, s) {
        return e + (s ? " " : "") + n.toUpperCase();
      }), Pr = Tc("toUpperCase");
      function vm(e, n, s) {
        return e = _e(e), n = s ? a : n, n === a ? th(e) ? uh(e) : Gg(e) : e.match(n) || [];
      }
      var ym = me(function(e, n) {
        try {
          return wt(e, a, n);
        } catch (s) {
          return Nr(s) ? s : new ie(s);
        }
      }), O3 = xn(function(e, n) {
        return Lt(n, function(s) {
          s = yn(s), Pn(e, s, Vr(e[s], e));
        }), e;
      });
      function z3(e) {
        var n = e == null ? 0 : e.length, s = Q();
        return e = n ? ze(e, function(l) {
          if (typeof l[1] != "function") throw new Ft(m);
          return [s(l[0]), l[1]];
        }) : [], me(function(l) {
          for (var c = -1; ++c < n; ) {
            var g = e[c];
            if (wt(g[0], this, l)) return wt(g[1], this, l);
          }
        });
      }
      function P3(e) {
        return of(Bt(e, y));
      }
      function Dr(e) {
        return function() {
          return e;
        };
      }
      function D3(e, n) {
        return e == null || e !== e ? n : e;
      }
      var x3 = wc(), L3 = wc(!0);
      function yt(e) {
        return e;
      }
      function xr(e) {
        return Qu(typeof e == "function" ? e : Bt(e, y));
      }
      function F3(e) {
        return tc(Bt(e, y));
      }
      function k3(e, n) {
        return nc(e, Bt(n, y));
      }
      var B3 = me(function(e, n) {
        return function(s) {
          return Ia(s, e, n);
        };
      }), q3 = me(function(e, n) {
        return function(s) {
          return Ia(e, s, n);
        };
      });
      function Lr(e, n, s) {
        var l = et(n), c = Cs(n, l);
        s == null && !(De(n) && (c.length || !l.length)) && (s = n, n = e, e = this, c = Cs(n, et(n)));
        var g = !(De(s) && "chain" in s) || !!s.chain, I = Fn(e);
        return Lt(c, function(b) {
          var w = n[b];
          e[b] = w, I && (e.prototype[b] = function() {
            var E = this.__chain__;
            if (g || E) {
              var A = e(this.__wrapped__);
              return (A.__actions__ = It(this.__actions__)).push({
                func: w,
                args: arguments,
                thisArg: e
              }), A.__chain__ = E, A;
            }
            return w.apply(e, Qn([this.value()], arguments));
          });
        }), e;
      }
      function H3() {
        return Qe._ === this && (Qe._ = gh), this;
      }
      function Fr() {
      }
      function J3(e) {
        return e = le(e), me(function(n) {
          return ic(n, e);
        });
      }
      var j3 = fr(ze), G3 = fr(Cu), W3 = fr(Bo);
      function Tm(e) {
        return wr(e) ? qo(yn(e)) : wf(e);
      }
      function K3(e) {
        return function(n) {
          return e == null ? a : bi(e, n);
        };
      }
      var $3 = Rc(), X3 = Rc(!0);
      function kr() {
        return [];
      }
      function Br() {
        return !1;
      }
      function Z3() {
        return {};
      }
      function Y3() {
        return "";
      }
      function Q3() {
        return !0;
      }
      function e2(e, n) {
        if (e = le(e), e < 1 || e > ne) return [];
        var s = ut, l = ot(e, ut);
        n = Q(n), e -= ut;
        for (var c = jo(l, n); ++s < e; ) n(s);
        return c;
      }
      function t2(e) {
        return oe(e) ? ze(e, yn) : Ut(e) ? [e] : It(Bc(_e(e)));
      }
      function n2(e) {
        var n = ++dh;
        return _e(e) + n;
      }
      var i2 = Es(function(e, n) {
        return e + n;
      }, 0), a2 = Ir("ceil"), s2 = Es(function(e, n) {
        return e / n;
      }, 1), o2 = Ir("floor");
      function r2(e) {
        return e && e.length ? ws(e, yt, nr) : a;
      }
      function l2(e, n) {
        return e && e.length ? ws(e, Q(n, 2), nr) : a;
      }
      function u2(e) {
        return Su(e, yt);
      }
      function c2(e, n) {
        return Su(e, Q(n, 2));
      }
      function m2(e) {
        return e && e.length ? ws(e, yt, or) : a;
      }
      function d2(e, n) {
        return e && e.length ? ws(e, Q(n, 2), or) : a;
      }
      var p2 = Es(function(e, n) {
        return e * n;
      }, 1), g2 = Ir("round"), h2 = Es(function(e, n) {
        return e - n;
      }, 0);
      function f2(e) {
        return e && e.length ? Jo(e, yt) : 0;
      }
      function I2(e, n) {
        return e && e.length ? Jo(e, Q(n, 2)) : 0;
      }
      return d.after = F0, d.ary = Yc, d.assign = UI, d.assignIn = dm, d.assignInWith = Hs, d.assignWith = SI, d.at = AI, d.before = Qc, d.bind = Vr, d.bindAll = O3, d.bindKey = em, d.castArray = Z0, d.chain = $c, d.chunk = o1, d.compact = r1, d.concat = l1, d.cond = z3, d.conforms = P3, d.constant = Dr, d.countBy = f0, d.create = VI, d.curry = tm, d.curryRight = nm, d.debounce = im, d.defaults = EI, d.defaultsDeep = NI, d.defer = k0, d.delay = B0, d.difference = u1, d.differenceBy = c1, d.differenceWith = m1, d.drop = d1, d.dropRight = p1, d.dropRightWhile = g1, d.dropWhile = h1, d.fill = f1, d.filter = b0, d.flatMap = T0, d.flatMapDeep = _0, d.flatMapDepth = w0, d.flatten = jc, d.flattenDeep = I1, d.flattenDepth = b1, d.flip = q0, d.flow = x3, d.flowRight = L3, d.fromPairs = v1, d.functions = LI, d.functionsIn = FI, d.groupBy = C0, d.initial = T1, d.intersection = _1, d.intersectionBy = w1, d.intersectionWith = C1, d.invert = BI, d.invertBy = qI, d.invokeMap = U0, d.iteratee = xr, d.keyBy = S0, d.keys = et, d.keysIn = vt, d.map = xs, d.mapKeys = JI, d.mapValues = jI, d.matches = F3, d.matchesProperty = k3, d.memoize = Fs, d.merge = GI, d.mergeWith = pm, d.method = B3, d.methodOf = q3, d.mixin = Lr, d.negate = ks, d.nthArg = J3, d.omit = WI, d.omitBy = KI, d.once = H0, d.orderBy = A0, d.over = j3, d.overArgs = J0, d.overEvery = G3, d.overSome = W3, d.partial = Er, d.partialRight = am, d.partition = V0, d.pick = $I, d.pickBy = gm, d.property = Tm, d.propertyOf = K3, d.pull = A1, d.pullAll = Wc, d.pullAllBy = V1, d.pullAllWith = E1, d.pullAt = N1, d.range = $3, d.rangeRight = X3, d.rearg = j0, d.reject = M0, d.remove = M1, d.rest = G0, d.reverse = Sr, d.sampleSize = z0, d.set = ZI, d.setWith = YI, d.shuffle = P0, d.slice = O1, d.sortBy = L0, d.sortedUniq = k1, d.sortedUniqBy = B1, d.split = T3, d.spread = W0, d.tail = q1, d.take = H1, d.takeRight = J1, d.takeRightWhile = j1, d.takeWhile = G1, d.tap = r0, d.throttle = K0, d.thru = Ds, d.toArray = um, d.toPairs = hm, d.toPairsIn = fm, d.toPath = t2, d.toPlainObject = mm, d.transform = QI, d.unary = $0, d.union = W1, d.unionBy = K1, d.unionWith = $1, d.uniq = X1, d.uniqBy = Z1, d.uniqWith = Y1, d.unset = e3, d.unzip = Ar, d.unzipWith = Kc, d.update = t3, d.updateWith = n3, d.values = Xi, d.valuesIn = i3, d.without = Q1, d.words = vm, d.wrap = X0, d.xor = e0, d.xorBy = t0, d.xorWith = n0, d.zip = i0, d.zipObject = a0, d.zipObjectDeep = s0, d.zipWith = o0, d.entries = hm, d.entriesIn = fm, d.extend = dm, d.extendWith = Hs, Lr(d, d), d.add = i2, d.attempt = ym, d.camelCase = r3, d.capitalize = Im, d.ceil = a2, d.clamp = a3, d.clone = Y0, d.cloneDeep = eI, d.cloneDeepWith = tI, d.cloneWith = Q0, d.conformsTo = nI, d.deburr = bm, d.defaultTo = D3, d.divide = s2, d.endsWith = l3, d.eq = Yt, d.escape = u3, d.escapeRegExp = c3, d.every = I0, d.find = v0, d.findIndex = Hc, d.findKey = MI, d.findLast = y0, d.findLastIndex = Jc, d.findLastKey = OI, d.floor = o2, d.forEach = Xc, d.forEachRight = Zc, d.forIn = zI, d.forInRight = PI, d.forOwn = DI, d.forOwnRight = xI, d.get = Or, d.gt = iI, d.gte = aI, d.has = kI, d.hasIn = zr, d.head = Gc, d.identity = yt, d.includes = R0, d.indexOf = y1, d.inRange = s3, d.invoke = HI, d.isArguments = Ti, d.isArray = oe, d.isArrayBuffer = sI, d.isArrayLike = bt, d.isArrayLikeObject = Be, d.isBoolean = oI, d.isBuffer = ri, d.isDate = rI, d.isElement = lI, d.isEmpty = uI, d.isEqual = cI, d.isEqualWith = mI, d.isError = Nr, d.isFinite = dI, d.isFunction = Fn, d.isInteger = sm, d.isLength = Bs, d.isMap = om, d.isMatch = pI, d.isMatchWith = gI, d.isNaN = hI, d.isNative = fI, d.isNil = bI, d.isNull = II, d.isNumber = rm, d.isObject = De, d.isObjectLike = Fe, d.isPlainObject = wa, d.isRegExp = Mr, d.isSafeInteger = vI, d.isSet = lm, d.isString = qs, d.isSymbol = Ut, d.isTypedArray = $i, d.isUndefined = yI, d.isWeakMap = TI, d.isWeakSet = _I, d.join = R1, d.kebabCase = m3, d.last = Ht, d.lastIndexOf = U1, d.lowerCase = d3, d.lowerFirst = p3, d.lt = wI, d.lte = CI, d.max = r2, d.maxBy = l2, d.mean = u2, d.meanBy = c2, d.min = m2, d.minBy = d2, d.stubArray = kr, d.stubFalse = Br, d.stubObject = Z3, d.stubString = Y3, d.stubTrue = Q3, d.multiply = p2, d.nth = S1, d.noConflict = H3, d.noop = Fr, d.now = Ls, d.pad = g3, d.padEnd = h3, d.padStart = f3, d.parseInt = I3, d.random = o3, d.reduce = E0, d.reduceRight = N0, d.repeat = b3, d.replace = v3, d.result = XI, d.round = g2, d.runInContext = _, d.sample = O0, d.size = D0, d.snakeCase = y3, d.some = x0, d.sortedIndex = z1, d.sortedIndexBy = P1, d.sortedIndexOf = D1, d.sortedLastIndex = x1, d.sortedLastIndexBy = L1, d.sortedLastIndexOf = F1, d.startCase = _3, d.startsWith = w3, d.subtract = h2, d.sum = f2, d.sumBy = I2, d.template = C3, d.times = e2, d.toFinite = kn, d.toInteger = le, d.toLength = cm, d.toLower = R3, d.toNumber = Jt, d.toSafeInteger = RI, d.toString = _e, d.toUpper = U3, d.trim = S3, d.trimEnd = A3, d.trimStart = V3, d.truncate = E3, d.unescape = N3, d.uniqueId = n2, d.upperCase = M3, d.upperFirst = Pr, d.each = Xc, d.eachRight = Zc, d.first = Gc, Lr(d, function() {
        var e = {};
        return bn(d, function(n, s) {
          Re.call(d.prototype, s) || (e[s] = n);
        }), e;
      }(), { chain: !1 }), d.VERSION = o, Lt([
        "bind",
        "bindKey",
        "curry",
        "curryRight",
        "partial",
        "partialRight"
      ], function(e) {
        d[e].placeholder = d;
      }), Lt(["drop", "take"], function(e, n) {
        de.prototype[e] = function(s) {
          s = s === a ? 1 : Ke(le(s), 0);
          var l = this.__filtered__ && !n ? new de(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = ot(s, l.__takeCount__) : l.__views__.push({
            size: ot(s, ut),
            type: e + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, de.prototype[e + "Right"] = function(s) {
          return this.reverse()[e](s).reverse();
        };
      }), Lt([
        "filter",
        "map",
        "takeWhile"
      ], function(e, n) {
        var s = n + 1, l = s == ra || s == st;
        de.prototype[e] = function(c) {
          var g = this.clone();
          return g.__iteratees__.push({
            iteratee: Q(c, 3),
            type: s
          }), g.__filtered__ = g.__filtered__ || l, g;
        };
      }), Lt(["head", "last"], function(e, n) {
        var s = "take" + (n ? "Right" : "");
        de.prototype[e] = function() {
          return this[s](1).value()[0];
        };
      }), Lt(["initial", "tail"], function(e, n) {
        var s = "drop" + (n ? "" : "Right");
        de.prototype[e] = function() {
          return this.__filtered__ ? new de(this) : this[s](1);
        };
      }), de.prototype.compact = function() {
        return this.filter(yt);
      }, de.prototype.find = function(e) {
        return this.filter(e).head();
      }, de.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, de.prototype.invokeMap = me(function(e, n) {
        return typeof e == "function" ? new de(this) : this.map(function(s) {
          return Ia(s, e, n);
        });
      }), de.prototype.reject = function(e) {
        return this.filter(ks(Q(e)));
      }, de.prototype.slice = function(e, n) {
        e = le(e);
        var s = this;
        return s.__filtered__ && (e > 0 || n < 0) ? new de(s) : (e < 0 ? s = s.takeRight(-e) : e && (s = s.drop(e)), n !== a && (n = le(n), s = n < 0 ? s.dropRight(-n) : s.take(n - e)), s);
      }, de.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, de.prototype.toArray = function() {
        return this.take(ut);
      }, bn(de.prototype, function(e, n) {
        var s = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), c = d[l ? "take" + (n == "last" ? "Right" : "") : n], g = l || /^find/.test(n);
        c && (d.prototype[n] = function() {
          var I = this.__wrapped__, b = l ? [1] : arguments, w = I instanceof de, E = b[0], A = w || oe(I), D = function(Se) {
            var pe = c.apply(d, Qn([Se], b));
            return l && H ? pe[0] : pe;
          };
          A && s && typeof E == "function" && E.length != 1 && (w = A = !1);
          var H = this.__chain__, G = !!this.__actions__.length, Y = g && !H, ae = w && !G;
          if (!g && A) {
            I = ae ? I : new de(this);
            var ee = e.apply(I, b);
            return ee.__actions__.push({
              func: Ds,
              args: [D],
              thisArg: a
            }), new kt(ee, H);
          }
          return Y && ae ? e.apply(this, b) : (ee = this.thru(D), Y ? l ? ee.value()[0] : ee.value() : ee);
        });
      }), Lt([
        "pop",
        "push",
        "shift",
        "sort",
        "splice",
        "unshift"
      ], function(e) {
        var n = ls[e], s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
        d.prototype[e] = function() {
          var c = arguments;
          if (l && !this.__chain__) {
            var g = this.value();
            return n.apply(oe(g) ? g : [], c);
          }
          return this[s](function(I) {
            return n.apply(oe(I) ? I : [], c);
          });
        };
      }), bn(de.prototype, function(e, n) {
        var s = d[n];
        if (s) {
          var l = s.name + "";
          Re.call(Ji, l) || (Ji[l] = []), Ji[l].push({
            name: n,
            func: s
          });
        }
      }), Ji[Vs(a, ye).name] = [{
        name: "wrapper",
        func: a
      }], de.prototype.clone = Eh, de.prototype.reverse = Nh, de.prototype.value = Mh, d.prototype.at = l0, d.prototype.chain = u0, d.prototype.commit = c0, d.prototype.next = m0, d.prototype.plant = p0, d.prototype.reverse = g0, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = h0, d.prototype.first = d.prototype.head, ca && (d.prototype[ca] = d0), d;
    }();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (Qe._ = ti, define(function() {
      return ti;
    })) : pi ? ((pi.exports = ti)._ = ti, xo._ = ti) : Qe._ = ti;
  }).call(t);
}), fd = Ey();
function Ja(t) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, Ja(t);
}
function Ny(t, i) {
  if (Ja(t) != "object" || !t) return t;
  var a = t[Symbol.toPrimitive];
  if (a !== void 0) {
    var o = a.call(t, i || "default");
    if (Ja(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(t);
}
function My(t) {
  var i = Ny(t, "string");
  return Ja(i) == "symbol" ? i : i + "";
}
function Ci(t, i, a) {
  return (i = My(i)) in t ? Object.defineProperty(t, i, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[i] = a, t;
}
function Oy() {
  const t = Hl().pluginRouter;
  if (!t) throw new Error("Plugin router bridge (pod-router) is unavailable on CiderApp.pluginRouter");
  return t;
}
function Hl() {
  return window.CiderApp;
}
function zy() {
  return typeof window.__VUE_HMR_RUNTIME__ == "object";
}
function Py(t) {
  const i = () => t;
  function a(m) {
    return `${i()?.ce_prefix ?? t.identifier}-${m}`;
  }
  function o(m) {
    const p = { ...m }, f = Hl().config.getRef(), { identifier: C } = i();
    f.plugins || (f.plugins = {}), f.plugins[C] || (f.plugins[C] = {});
    const T = f.plugins[C];
    f.plugins[C] = (0, fd.merge)(p, T);
    const y = /* @__PURE__ */ tn((0, fd.clone)(f.plugins[C]));
    return Oa(() => y, (V) => {
      f.plugins[C] = V;
    }, { deep: !0 }), y;
  }
  async function r(m) {
    const p = a(m.name);
    return await Oy().push(`/ugc/plugins/ce/${p}`);
  }
  function u(m) {
    const p = m.replace(/^\//, "");
    return zy() ? `http://localhost:3058/${p}` : `${window.location.origin}/plugins/${t.identifier}/${p}`;
  }
  return {
    customElementName: a,
    goToPage: r,
    useCPlugin: i,
    setupConfig: o,
    getBundledAssetURL: u,
    plugin: {
      ...t,
      pluginKitVersion: 4
    }
  };
}
function Id(t) {
  const i = __PLUGINSYS__.Components.MainMenu.addMenuItem(t);
  return () => {
    __PLUGINSYS__.Components.MainMenu.removeMenuItem(i);
  };
}
var n_ = __PLUGINSYS__.ExternalMessages;
function St() {
  const t = globalThis?.__PLUGINSYS__?.Stores?.appleMusicStore;
  if (!t) throw new Error("Plugin AppleMusic is unavailable: __PLUGINSYS__.Stores.appleMusicStore was not initialized by Cider host.");
  return t;
}
function Dy(t) {
  return t === "none" || t === "one" || t === "all" ? t : t === 1 ? "one" : t === 2 ? "all" : "none";
}
function xy(t) {
  return t === "one" ? 1 : t === "all" ? 2 : 0;
}
function Ly(t, i) {
  const a = `${t}`.trim().toLowerCase();
  return `https://music.apple.com/us/${a.endsWith("s") ? a : `${a}s`}/_/` + encodeURIComponent(i);
}
var xp = class {
  static get shuffleMode() {
    return St().shuffleMode;
  }
  static get repeatMode() {
    return xy(St().repeatMode);
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
    const i = St(), a = typeof t == "boolean" ? t : typeof t == "number" ? t > 0 : i.shuffleMode === 0;
    return i.setShuffleMode(a);
  }
  static setRepeatState(t) {
    const i = St(), a = t === void 0 ? i.repeatMode === "none" ? "one" : i.repeatMode === "one" ? "all" : "none" : Dy(t);
    return i.setRepeatMode(a);
  }
  static async playItemById(t) {
    const i = St();
    await i.ensurePlayer();
    const a = Ly(t.type, t.id);
    return i.playItemByHref(a);
  }
  static playItemByHref(t) {
    return St().playItemByHref(t.href);
  }
}, i_ = window.__PLUGINSYS__.Dialog, a_ = window.__PLUGINSYS__.ContextMenu, s_ = window.__PLUGINSYS__.Composables.useContextMenu, Fy = {
  ce_prefix: "cider-radio",
  identifier: "local.cider.radio",
  name: "Radio",
  description: "Play the Free Radio library, singing and instrumental, and search TuneIn, Radio Browser, SomaFM, Icecast and iptv-org.",
  version: "0.3.0",
  author: "ouijabored66",
  repo: "https://github.com/ouijabored66/Cider-4-Radio-Plugin",
  pluginKitVersion: "4",
  entry: { "plugin.js": { type: "main" } }
}, ky = [
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
  }
], By = [
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
  }
], Lp = {
  groups: ky,
  stations: By
};
function qy(t) {
  return {
    id: t.id,
    name: t.name,
    detail: t.detail,
    image: t.image || void 0,
    source: t.source,
    streamUrl: t.streamUrl || void 0,
    tags: t.tags || void 0,
    homepage: t.homepage || void 0
  };
}
var Hy = Lp.groups, Jy = Lp.stations, ta = Hy.map((t) => ({
  id: t.id,
  name: t.name,
  source: t.source,
  stations: Jy.filter((i) => i.group === t.id).map(qy)
})), Jl = ta.flatMap((t) => t.stations);
function Fp(t) {
  try {
    const i = new URL(t);
    let a = i.hostname.toLowerCase().replace(/^www\./, "");
    /^ice\d+\.somafm\.com$/.test(a) && (a = "somafm.com");
    const o = i.port && i.port !== "80" && i.port !== "443" ? `:${i.port}` : "", r = i.pathname.replace(/\/+$/, "").toLowerCase();
    return `${a}${o}${r}`;
  } catch {
    return t.trim().toLowerCase();
  }
}
var jy = new Map(Jl.map((t) => [t.id, t])), Gy = new Map(Jl.flatMap((t) => t.streamUrl ? [[Fp(t.streamUrl), t]] : []));
function Wy(t) {
  const i = jy.get(t.id);
  if (i) return i;
  if (t.streamUrl)
    return Gy.get(Fp(t.streamUrl));
}
function Ky(t) {
  const i = t.trim().toLowerCase();
  if (!i) return [];
  const a = [], o = [];
  for (const r of Jl) r.name.toLowerCase().includes(i) ? a.push(r) : `${r.detail}
${r.tags ?? ""}`.toLowerCase().includes(i) && o.push(r);
  return [...a, ...o];
}
var $y = "https://all.api.radio-browser.info/json", kp = "https://opml.radiotime.com", Xy = "https://somafm.com/channels.json", Zy = "https://dir.xiph.org/yp.xml", Yy = [
  "https://iptv-org.github.io/iptv/index.radio.m3u",
  "https://iptv-org.github.io/index.radio.m3u",
  "https://iptv-org.github.io/iptv/categories/radio.m3u"
], Qy = 24 * 3600 * 1e3, eT = 600 * 1e3, Bp = 40, Ao = (t) => t?.replace(/^http:\/\//, "https://"), Vt = (t) => typeof t == "string" ? t.trim() : "", qp = (t) => /^https?:\/\/\S+$/i.test(t);
function Hp(t) {
  let i = 14695981039346656037n;
  for (const a of new TextEncoder().encode(t)) i = (i ^ BigInt(a)) * 1099511628211n & 18446744073709551615n;
  return i.toString(16);
}
function tT(t) {
  return t.filter((i) => i?.url_resolved && i?.name?.trim()).map((i) => ({
    id: `rb-${i.stationuuid}`,
    name: i.name.trim(),
    detail: [
      i.country,
      i.codec,
      i.bitrate ? `${i.bitrate} kbps` : ""
    ].filter(Boolean).join(" · "),
    image: Ao(i.favicon) || void 0,
    source: "Radio Browser",
    streamUrl: i.url_resolved
  }));
}
function nT(t) {
  return t.filter((i) => i?.type === "audio" && i?.item === "station" && i?.guide_id).map((i) => ({
    id: `ti-${i.guide_id}`,
    name: i.text,
    detail: [i.subtext, i.bitrate ? `${i.bitrate} kbps` : ""].filter(Boolean).join(" · "),
    image: Ao(i.image),
    source: "TuneIn"
  }));
}
function iT(t) {
  const i = Array.isArray(t?.channels) ? t.channels : [], a = /* @__PURE__ */ new Set(), o = [];
  for (const r of i) {
    const u = Vt(r?.id), m = Vt(r?.title), p = (Array.isArray(r?.playlists) ? r.playlists : []).find((C) => Vt(C?.format).toLowerCase() === "mp3" && Vt(C?.url));
    if (!u || !m || !p || a.has(u)) continue;
    a.add(u);
    const f = Vt(r.genre).split("|").map((C) => C.trim()).filter(Boolean);
    o.push({
      id: `sm-${u}`,
      name: m,
      detail: [f.join(", "), Vt(r.description)].filter(Boolean).join(" · "),
      image: Ao(Vt(r.xlimage) || Vt(r.largeimage) || Vt(r.image) || void 0),
      source: "SomaFM",
      streamUrl: Vt(p.url)
    });
  }
  return o;
}
var aT = /* @__PURE__ */ new Set([
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
function sT(t) {
  const i = [];
  for (const a of t.toLowerCase().split(/[^\p{L}\p{N}]+/u))
    if (a.length >= 3 && !aT.has(a) && !i.includes(a) && i.push(a), i.length === 5) break;
  return i;
}
function oT(t) {
  const i = Vt(t.listen_url), a = Vt(t.server_name);
  if (!a || !qp(i)) return;
  const o = (t.server_type ?? "").toLowerCase(), r = o.includes("aacp") ? "aac+" : o.includes("aac") ? "aac" : o.includes("mpeg") || o.includes("mp3") ? "mp3" : o.includes("ogg") || o.includes("vorbis") ? "ogg" : o.includes("opus") ? "opus" : "", u = parseInt(Vt(t.bitrate), 10);
  return {
    id: `ic-${Hp(i)}`,
    name: a,
    detail: [
      r,
      u > 0 ? `${u} kbps` : "",
      sT(t.genre ?? "").join(", ")
    ].filter(Boolean).join(" · "),
    source: "Icecast",
    streamUrl: i
  };
}
var Jp = [
  "server_name",
  "server_type",
  "bitrate",
  "listen_url",
  "genre"
];
function rT(t) {
  return t.replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (i, a) => {
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
      return i;
    }
  });
}
function lT(t) {
  const i = new DOMParser().parseFromString(t, "text/xml");
  if (i.getElementsByTagName("parsererror").length) throw new Error("Icecast feed could not be parsed");
  return Array.from(i.getElementsByTagName("entry")).map((a) => {
    const o = {};
    for (const r of Jp) {
      const u = a.getElementsByTagName(r)[0];
      u && (o[r] = u.textContent ?? "");
    }
    return o;
  });
}
function uT(t) {
  const i = [];
  for (const a of t.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/g)) {
    const o = {};
    for (const r of Jp) {
      const u = new RegExp(`<${r}\\b[^>]*>([\\s\\S]*?)</${r}>`).exec(a[1]);
      u && (o[r] = u[1].split(/(<!\[CDATA\[[\s\S]*?\]\]>)/).map((m) => m.startsWith("<![CDATA[") ? m.slice(9, -3) : rT(m)).join(""));
    }
    i.push(o);
  }
  return i;
}
function cT(t) {
  const i = typeof DOMParser < "u" ? lT(t) : uT(t), a = /* @__PURE__ */ new Set(), o = [];
  for (const r of i) {
    const u = oT(r);
    u && !a.has(u.streamUrl) && (a.add(u.streamUrl), o.push(u));
  }
  return o;
}
function mT(t) {
  const i = {};
  let a = "", o = "", r = !1, u = !1, m = -1;
  for (let p = Math.max(t.indexOf(" "), 0); p < t.length; p++) {
    const f = t[p];
    if (r) f === '"' ? (r = !1, i[a.toLowerCase()] = o, a = "", o = "", u = !1) : o += f;
    else if (f === ",") {
      m = p + 1;
      break;
    } else f === '"' ? r = !0 : f === "=" ? u = !0 : f === " " ? a = "" : u || (a += f);
  }
  return {
    attrs: i,
    name: m >= 0 ? t.slice(m).trim() : ""
  };
}
function dT(t) {
  const i = [], a = /* @__PURE__ */ new Set();
  let o;
  for (const r of t.split(/\r?\n/)) {
    const u = r.trim();
    if (u.startsWith("#EXTINF")) o = mT(u);
    else {
      if (!u || u.startsWith("#")) continue;
      if (o) {
        const m = o;
        if (o = void 0, !qp(u) || !m.name || a.has(u)) continue;
        a.add(u);
        const p = (m.attrs["group-title"] ?? "").split(";").map((T) => T.trim()).filter(Boolean), f = m.attrs["tvg-id"]?.split(".").pop()?.split("@")[0] ?? "", C = m.attrs["tvg-id"]?.includes(".") && f.length === 2 ? f.toUpperCase() : "";
        i.push({
          id: `iptv-${Hp(u)}`,
          name: m.name,
          detail: [C, p.join(", ")].filter(Boolean).join(" · "),
          image: Ao(m.attrs["tvg-logo"] || void 0),
          source: "iptv-org",
          streamUrl: u
        });
      }
    }
  }
  return i;
}
function pT(t) {
  for (const i of t.split(/\r?\n/)) {
    let a = i.trim();
    if (/^file1=/i.test(a) && (a = a.slice(6).trim()), /^https?:\/\//i.test(a)) return a;
  }
}
async function jl(t) {
  const i = await fetch(t);
  if (!i.ok) throw new Error(`${i.status} from ${t}`);
  return i.text();
}
var Gl = class {
  constructor(t, i) {
    Ci(this, "key", void 0), Ci(this, "download", void 0), Ci(this, "stations", []), Ci(this, "fetched", 0), Ci(this, "inflight", void 0), Ci(this, "lastFailure", void 0), Ci(this, "diskChecked", !1), this.key = t, this.download = i;
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
    if (this.loadDisk(), this.stations.length && Date.now() - this.fetched < Qy) return this.stations;
    if (!this.inflight) {
      if (this.lastFailure && Date.now() - this.lastFailure.at < eT) {
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
  async search(t, i = Bp) {
    return gT(await this.all(), t, i);
  }
};
function gT(t, i, a = Bp) {
  const o = i.trim().toLowerCase();
  if (!o) return [];
  const r = (p) => `${p.detail}
${p.tags ?? ""}`.toLowerCase(), u = t.filter((p) => p.name.toLowerCase().includes(o)), m = t.filter((p) => !p.name.toLowerCase().includes(o) && r(p).includes(o));
  return [...u, ...m].slice(0, a);
}
var hT = new Gl("radio.somafm.v1", async () => iT(await Vo(Xy))), fT = new Gl("radio.icecast.v1", async () => cT(await jl(Zy))), IT = new Gl("radio.iptvorg.v1", async () => {
  let t = /* @__PURE__ */ new Error("iptv-org radio playlist is not available");
  for (const i of Yy) try {
    const a = await jl(i);
    if (!a.includes("#EXTM3U")) throw new Error(`${i} is not an M3U playlist`);
    return dT(a);
  } catch (a) {
    t = a;
  }
  throw t;
});
async function Vo(t) {
  const i = await fetch(t);
  if (!i.ok) throw new Error(`${i.status} from ${t}`);
  return i.json();
}
async function bT(t) {
  return tT(await Vo(`${$y}/stations/search?${new URLSearchParams({
    name: t,
    limit: "40",
    hidebroken: "true",
    order: "clickcount",
    reverse: "true"
  })}`));
}
async function vT(t) {
  return nT((await Vo(`${kp}/Search.ashx?${new URLSearchParams({
    query: t,
    types: "station",
    render: "json"
  })}`)).body ?? []);
}
async function yT(t) {
  const i = [
    ["TuneIn", vT(t)],
    ["Radio Browser", bT(t)],
    ["SomaFM", hT.search(t)],
    ["Icecast", fT.search(t)],
    ["iptv-org", IT.search(t)]
  ], a = await Promise.allSettled(i.map(([, m]) => m)), o = [], r = [], u = /* @__PURE__ */ new Set();
  for (const m of Ky(t))
    u.has(m.id) || (u.add(m.id), o.push(m));
  return a.forEach((m, p) => {
    if (m.status === "fulfilled") for (const f of m.value) {
      const C = Wy(f) ?? f;
      u.has(C.id) || (u.add(C.id), o.push(C));
    }
    else
      console.warn(`[radio] ${i[p][0]} search failed`, m.reason), r.push(i[p][0]);
  }), {
    stations: o,
    failed: r
  };
}
function TT(t) {
  return t.find((i) => i?.url && !/notcompatible/i.test(i.url))?.url;
}
async function _T(t) {
  let i;
  try {
    i = new URL(t).pathname.toLowerCase();
  } catch {
    return;
  }
  if (!(!i.endsWith(".pls") && !i.endsWith(".m3u")))
    try {
      return pT(await jl(t));
    } catch (a) {
      console.warn("[radio] could not read playlist", a);
      return;
    }
}
async function wT(t) {
  let i = t.streamUrl;
  if (!i) {
    const a = t.id.replace(/^ti-/, "");
    if (i = TT((await Vo(`${kp}/Tune.ashx?${new URLSearchParams({
      id: a,
      render: "json"
    })}`)).body ?? []), !i) throw new Error("TuneIn gave no playable stream for this station");
  }
  return await _T(i) ?? i;
}
var on = /* @__PURE__ */ tn(null), Mi = /* @__PURE__ */ tn("stopped"), Wl = /* @__PURE__ */ tn(0.8), bl = /* @__PURE__ */ tn(""), Je = new Audio();
Je.preload = "none";
Je.volume = Wl.value;
Je.addEventListener("playing", () => Mi.value = "playing");
Je.addEventListener("waiting", () => {
  on.value && (Mi.value = "connecting");
});
Je.addEventListener("error", () => {
  on.value && (Mi.value = "failed");
});
var io = "default";
async function CT() {
  try {
    const t = Hl().config.getRef()?.audio?.deviceOutput, i = Je;
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
    bl.value = "";
    return;
  }
  bl.value = [
    `time ${Je.currentTime.toFixed(1)}s`,
    `paused ${Je.paused}`,
    `ready ${Je.readyState}`,
    `network ${Je.networkState}`,
    `volume ${Je.volume.toFixed(2)}`,
    `muted ${Je.muted}`,
    `output ${io}`,
    `error ${Je.error?.code ?? "none"}`
  ].join(" | ");
}, 1e3);
function RT() {
  try {
    xp?.pause?.();
  } catch (t) {
    console.warn("[radio] could not pause Apple Music", t);
  }
}
async function UT(t) {
  on.value = t, Mi.value = "connecting", RT();
  try {
    const i = await wT(t);
    if (on.value?.id !== t.id) return;
    await CT(), Je.muted = !1, Je.src = i, await Je.play();
  } catch (i) {
    console.warn("[radio] playback failed", i), on.value?.id === t.id && (Mi.value = "failed");
  }
}
function fo() {
  Je.pause(), Je.removeAttribute("src"), Je.load(), on.value = null, Mi.value = "stopped";
}
function ST(t) {
  Wl.value = t, Je.volume = t;
}
function AT() {
  xp?.addEventListener?.("playbackStateDidChange", (t) => {
    t?.state === 2 && on.value && fo();
  });
}
var VT = { class: "q-pa-lg radio-page" }, ET = ["disabled"], NT = {
  key: 0,
  class: "radio-now",
  "aria-live": "polite"
}, MT = { class: "radio-now-text" }, OT = { class: "radio-diagnostics" }, zT = ["value"], PT = {
  key: 1,
  class: "radio-library"
}, DT = { class: "radio-note" }, xT = {
  class: "radio-groups",
  role: "tablist",
  "aria-label": "Free Radio groups"
}, LT = ["aria-selected", "onClick"], FT = {
  key: 2,
  class: "radio-note"
}, kT = { class: "radio-list" }, BT = ["onClick"], qT = ["src"], HT = { class: "radio-name" }, JT = { class: "radio-detail" }, jT = { class: "radio-source" }, GT = /* @__PURE__ */ ip({
  __name: "RadioPage",
  setup(t) {
    const i = /* @__PURE__ */ tn(""), a = /* @__PURE__ */ tn([]), o = /* @__PURE__ */ tn([]), r = /* @__PURE__ */ tn(!1), u = /* @__PURE__ */ tn(!1), m = /* @__PURE__ */ tn(ta[0]?.id ?? ""), p = ta.reduce((V, P) => V + P.stations.length, 0), f = no(() => ta.find((V) => V.id === m.value) ?? ta[0]), C = no(() => u.value ? a.value : f.value?.stations ?? []);
    Oa(i, (V) => {
      V.trim() || (u.value = !1, a.value = [], o.value = []);
    });
    const T = no(() => ({
      stopped: "Stopped",
      connecting: "Connecting…",
      playing: "Playing",
      failed: "This station wouldn't play. Try another one."
    })[Mi.value]);
    async function y() {
      const V = i.value.trim();
      if (!V) return;
      r.value = !0;
      const P = await yT(V);
      a.value = P.stations, o.value = P.failed, r.value = !1, u.value = !0;
    }
    return (V, P) => (Gt(), en("div", VT, [
      P[5] || (P[5] = ke("h1", { class: "apple-heading" }, "Radio", -1)),
      ke("form", {
        class: "radio-search",
        onSubmit: _y(y, ["prevent"])
      }, [Vb(ke("input", {
        "onUpdate:modelValue": P[0] || (P[0] = (q) => i.value = q),
        type: "search",
        placeholder: "Search stations",
        "aria-label": "Search stations"
      }, null, 512), [[vy, i.value]]), ke("button", {
        class: "c-btn",
        type: "submit",
        disabled: r.value
      }, jt(r.value ? "Searching…" : "Search"), 9, ET)], 32),
      At(on) ? (Gt(), en("section", NT, [
        ke("div", MT, [
          ke("strong", null, jt(At(on).name), 1),
          ke("span", null, jt(T.value), 1),
          ke("small", OT, jt(At(bl)), 1)
        ]),
        ke("label", null, [P[3] || (P[3] = gl(" Volume ", -1)), ke("input", {
          type: "range",
          min: "0",
          max: "1",
          step: "0.05",
          value: At(Wl),
          onInput: P[1] || (P[1] = (q) => At(ST)(Number(q.target.value)))
        }, null, 40, zT)]),
        ke("button", {
          class: "c-btn",
          type: "button",
          onClick: P[2] || (P[2] = (...q) => At(fo) && At(fo)(...q))
        }, "Stop")
      ])) : Ws("", !0),
      u.value ? Ws("", !0) : (Gt(), en("section", PT, [
        P[4] || (P[4] = ke("h2", null, "Free Radio", -1)),
        ke("p", DT, jt(At(p)) + " instrumental stations from your library. Pick a group, or search.", 1),
        ke("div", xT, [(Gt(!0), en(Et, null, $r(At(ta), (q) => (Gt(), en("button", {
          key: q.id,
          type: "button",
          role: "tab",
          class: La({ active: q.id === f.value?.id }),
          "aria-selected": q.id === f.value?.id,
          onClick: (W) => m.value = q.id
        }, [gl(jt(q.name) + " ", 1), ke("span", null, jt(q.stations.length), 1)], 10, LT))), 128))])
      ])),
      (Gt(!0), en(Et, null, $r(o.value, (q) => (Gt(), en("p", {
        key: q,
        class: "radio-note"
      }, jt(q) + " search couldn't be reached. Stations already in your Free Radio library are still listed. ", 1))), 128)),
      u.value && !a.value.length && !r.value ? (Gt(), en("p", FT, "No stations found.")) : Ws("", !0),
      ke("ul", kT, [(Gt(!0), en(Et, null, $r(C.value, (q) => (Gt(), en("li", { key: q.id }, [ke("button", {
        type: "button",
        class: La({ active: At(on)?.id === q.id }),
        onClick: (W) => At(UT)(q)
      }, [
        q.image ? (Gt(), en("img", {
          key: 0,
          src: q.image,
          alt: "",
          loading: "lazy"
        }, null, 8, qT)) : Ws("", !0),
        ke("span", HT, jt(q.name), 1),
        ke("span", JT, jt(q.detail), 1),
        ke("span", jT, jt(q.source), 1)
      ], 10, BT)]))), 128))])
    ]));
  }
}), WT = (t, i) => {
  const a = t.__vccOpts || t;
  for (const [o, r] of i) a[o] = r;
  return a;
}, KT = /* @__PURE__ */ WT(GT, [["__scopeId", "data-v-b8dc3f54"]]), bd = { "page-radio": /* @__PURE__ */ hy(KT, { shadowRoot: !1 }) }, { plugin: o_, customElementName: $T, goToPage: XT } = Py({
  ...Fy,
  CustomElements: bd,
  setup() {
    for (const [t, i] of Object.entries(bd)) customElements.define($T(t), i);
    Id({
      label: "Radio",
      onClick() {
        XT({ name: "page-radio" });
      }
    }), Id({
      label: "Stop Radio",
      onClick() {
        fo();
      }
    }), AT();
  }
});
export {
  bd as CustomElements,
  $T as customElementName,
  o_ as default,
  XT as goToPage
};
