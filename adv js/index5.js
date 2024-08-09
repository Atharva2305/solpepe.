import {k as Be} from "./index-BwO_io0Y.js";
import {r as Tt} from "./___vite-browser-external_commonjs-proxy-B5-HO_on.js";
var Lt = {}, Ke = {}, Ue = {}, et;
function Mt() {
    if (et)
        return Ue;
    et = 1,
    Object.defineProperty(Ue, "__esModule", {
        value: !0
    }),
    Ue.delay = void 0;
    function t(r) {
        return new Promise(n=>{
            setTimeout(()=>{
                n(!0)
            }
            , r)
        }
        )
    }
    return Ue.delay = t,
    Ue
}
var ge = {}, $e = {}, ye = {}, tt;
function Bt() {
    return tt || (tt = 1,
    Object.defineProperty(ye, "__esModule", {
        value: !0
    }),
    ye.ONE_THOUSAND = ye.ONE_HUNDRED = void 0,
    ye.ONE_HUNDRED = 100,
    ye.ONE_THOUSAND = 1e3),
    ye
}
var qe = {}, rt;
function xt() {
    return rt || (rt = 1,
    function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0,
        t.ONE_SECOND = 1,
        t.FIVE_SECONDS = 5,
        t.TEN_SECONDS = 10,
        t.THIRTY_SECONDS = 30,
        t.SIXTY_SECONDS = 60,
        t.ONE_MINUTE = t.SIXTY_SECONDS,
        t.FIVE_MINUTES = t.ONE_MINUTE * 5,
        t.TEN_MINUTES = t.ONE_MINUTE * 10,
        t.THIRTY_MINUTES = t.ONE_MINUTE * 30,
        t.SIXTY_MINUTES = t.ONE_MINUTE * 60,
        t.ONE_HOUR = t.SIXTY_MINUTES,
        t.THREE_HOURS = t.ONE_HOUR * 3,
        t.SIX_HOURS = t.ONE_HOUR * 6,
        t.TWELVE_HOURS = t.ONE_HOUR * 12,
        t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24,
        t.ONE_DAY = t.TWENTY_FOUR_HOURS,
        t.THREE_DAYS = t.ONE_DAY * 3,
        t.FIVE_DAYS = t.ONE_DAY * 5,
        t.SEVEN_DAYS = t.ONE_DAY * 7,
        t.THIRTY_DAYS = t.ONE_DAY * 30,
        t.ONE_WEEK = t.SEVEN_DAYS,
        t.TWO_WEEKS = t.ONE_WEEK * 2,
        t.THREE_WEEKS = t.ONE_WEEK * 3,
        t.FOUR_WEEKS = t.ONE_WEEK * 4,
        t.ONE_YEAR = t.ONE_DAY * 365
    }(qe)),
    qe
}
var nt;
function dt() {
    return nt || (nt = 1,
    function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Be;
        r.__exportStar(Bt(), t),
        r.__exportStar(xt(), t)
    }($e)),
    $e
}
var it;
function jt() {
    if (it)
        return ge;
    it = 1,
    Object.defineProperty(ge, "__esModule", {
        value: !0
    }),
    ge.fromMiliseconds = ge.toMiliseconds = void 0;
    const t = dt();
    function r(f) {
        return f * t.ONE_THOUSAND
    }
    ge.toMiliseconds = r;
    function n(f) {
        return Math.floor(f / t.ONE_THOUSAND)
    }
    return ge.fromMiliseconds = n,
    ge
}
var at;
function Rt() {
    return at || (at = 1,
    function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Be;
        r.__exportStar(Mt(), t),
        r.__exportStar(jt(), t)
    }(Ke)),
    Ke
}
var Ce = {}, ut;
function It() {
    if (ut)
        return Ce;
    ut = 1,
    Object.defineProperty(Ce, "__esModule", {
        value: !0
    }),
    Ce.Watch = void 0;
    class t {
        constructor() {
            this.timestamps = new Map
        }
        start(n) {
            if (this.timestamps.has(n))
                throw new Error(`Watch already started for label: ${n}`);
            this.timestamps.set(n, {
                started: Date.now()
            })
        }
        stop(n) {
            const f = this.get(n);
            if (typeof f.elapsed < "u")
                throw new Error(`Watch already stopped for label: ${n}`);
            const w = Date.now() - f.started;
            this.timestamps.set(n, {
                started: f.started,
                elapsed: w
            })
        }
        get(n) {
            const f = this.timestamps.get(n);
            if (typeof f > "u")
                throw new Error(`No timestamp found for label: ${n}`);
            return f
        }
        elapsed(n) {
            const f = this.get(n);
            return f.elapsed || Date.now() - f.started
        }
    }
    return Ce.Watch = t,
    Ce.default = t,
    Ce
}
var ze = {}, Oe = {}, ot;
function Ht() {
    if (ot)
        return Oe;
    ot = 1,
    Object.defineProperty(Oe, "__esModule", {
        value: !0
    }),
    Oe.IWatch = void 0;
    class t {
    }
    return Oe.IWatch = t,
    Oe
}
var ft;
function Pt() {
    return ft || (ft = 1,
    function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Be.__exportStar(Ht(), t)
    }(ze)),
    ze
}
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = Be;
    r.__exportStar(Rt(), t),
    r.__exportStar(It(), t),
    r.__exportStar(Pt(), t),
    r.__exportStar(dt(), t)
}
)(Lt);
var Y = {};
Object.defineProperty(Y, "__esModule", {
    value: !0
});
Y.getLocalStorage = Y.getLocalStorageOrThrow = Y.getCrypto = Y.getCryptoOrThrow = Xt = Y.getLocation = Y.getLocationOrThrow = Wt = Y.getNavigator = Y.getNavigatorOrThrow = qt = Y.getDocument = Y.getDocumentOrThrow = Y.getFromWindowOrThrow = Y.getFromWindow = void 0;
function Se(t) {
    let r;
    return typeof window < "u" && typeof window[t] < "u" && (r = window[t]),
    r
}
Y.getFromWindow = Se;
function pe(t) {
    const r = Se(t);
    if (!r)
        throw new Error(`${t} is not defined in Window`);
    return r
}
Y.getFromWindowOrThrow = pe;
function Kt() {
    return pe("document")
}
Y.getDocumentOrThrow = Kt;
function $t() {
    return Se("document")
}
var qt = Y.getDocument = $t;
function zt() {
    return pe("navigator")
}
Y.getNavigatorOrThrow = zt;
function Yt() {
    return Se("navigator")
}
var Wt = Y.getNavigator = Yt;
function Gt() {
    return pe("location")
}
Y.getLocationOrThrow = Gt;
function Vt() {
    return Se("location")
}
var Xt = Y.getLocation = Vt;
function Jt() {
    return pe("crypto")
}
Y.getCryptoOrThrow = Jt;
function Qt() {
    return Se("crypto")
}
Y.getCrypto = Qt;
function Zt() {
    return pe("localStorage")
}
Y.getLocalStorageOrThrow = Zt;
function kt() {
    return Se("localStorage")
}
Y.getLocalStorage = kt;
var Qe = {};
Object.defineProperty(Qe, "__esModule", {
    value: !0
});
var er = Qe.getWindowMetadata = void 0;
const ht = Y;
function tr() {
    let t, r;
    try {
        t = ht.getDocumentOrThrow(),
        r = ht.getLocationOrThrow()
    } catch {
        return null
    }
    function n() {
        const E = t.getElementsByTagName("link")
          , b = [];
        for (let _ = 0; _ < E.length; _++) {
            const v = E[_]
              , C = v.getAttribute("rel");
            if (C && C.toLowerCase().indexOf("icon") > -1) {
                const g = v.getAttribute("href");
                if (g)
                    if (g.toLowerCase().indexOf("https:") === -1 && g.toLowerCase().indexOf("http:") === -1 && g.indexOf("//") !== 0) {
                        let O = r.protocol + "//" + r.host;
                        if (g.indexOf("/") === 0)
                            O += g;
                        else {
                            const s = r.pathname.split("/");
                            s.pop();
                            const D = s.join("/");
                            O += D + "/" + g
                        }
                        b.push(O)
                    } else if (g.indexOf("//") === 0) {
                        const O = r.protocol + g;
                        b.push(O)
                    } else
                        b.push(g)
            }
        }
        return b
    }
    function f(...E) {
        const b = t.getElementsByTagName("meta");
        for (let _ = 0; _ < b.length; _++) {
            const v = b[_]
              , C = ["itemprop", "property", "name"].map(g=>v.getAttribute(g)).filter(g=>g ? E.includes(g) : !1);
            if (C.length && C) {
                const g = v.getAttribute("content");
                if (g)
                    return g
            }
        }
        return ""
    }
    function w() {
        let E = f("name", "og:site_name", "og:title", "twitter:title");
        return E || (E = t.title),
        E
    }
    function S() {
        return f("description", "og:description", "twitter:description", "keywords")
    }
    const U = w()
      , h = S()
      , c = r.origin
      , d = n();
    return {
        description: h,
        url: c,
        icons: d,
        name: U
    }
}
er = Qe.getWindowMetadata = tr;
var rr = {}
  , nr = t=>encodeURIComponent(t).replace(/[!'()*]/g, r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`)
  , Et = "%[a-f0-9]{2}"
  , st = new RegExp("(" + Et + ")|([^%]+?)","gi")
  , ct = new RegExp("(" + Et + ")+","gi");
function Ye(t, r) {
    try {
        return [decodeURIComponent(t.join(""))]
    } catch {}
    if (t.length === 1)
        return t;
    r = r || 1;
    var n = t.slice(0, r)
      , f = t.slice(r);
    return Array.prototype.concat.call([], Ye(n), Ye(f))
}
function ir(t) {
    try {
        return decodeURIComponent(t)
    } catch {
        for (var r = t.match(st) || [], n = 1; n < r.length; n++)
            t = Ye(r, n).join(""),
            r = t.match(st) || [];
        return t
    }
}
function ar(t) {
    for (var r = {
        "%FE%FF": "��",
        "%FF%FE": "��"
    }, n = ct.exec(t); n; ) {
        try {
            r[n[0]] = decodeURIComponent(n[0])
        } catch {
            var f = ir(n[0]);
            f !== n[0] && (r[n[0]] = f)
        }
        n = ct.exec(t)
    }
    r["%C2"] = "�";
    for (var w = Object.keys(r), S = 0; S < w.length; S++) {
        var U = w[S];
        t = t.replace(new RegExp(U,"g"), r[U])
    }
    return t
}
var ur = function(t) {
    if (typeof t != "string")
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
    try {
        return t = t.replace(/\+/g, " "),
        decodeURIComponent(t)
    } catch {
        return ar(t)
    }
}
  , or = (t,r)=>{
    if (!(typeof t == "string" && typeof r == "string"))
        throw new TypeError("Expected the arguments to be of type `string`");
    if (r === "")
        return [t];
    const n = t.indexOf(r);
    return n === -1 ? [t] : [t.slice(0, n), t.slice(n + r.length)]
}
  , fr = function(t, r) {
    for (var n = {}, f = Object.keys(t), w = Array.isArray(r), S = 0; S < f.length; S++) {
        var U = f[S]
          , h = t[U];
        (w ? r.indexOf(U) !== -1 : r(U, h, t)) && (n[U] = h)
    }
    return n
};
(function(t) {
    const r = nr
      , n = ur
      , f = or
      , w = fr
      , S = s=>s == null
      , U = Symbol("encodeFragmentIdentifier");
    function h(s) {
        switch (s.arrayFormat) {
        case "index":
            return D=>(a,o)=>{
                const u = a.length;
                return o === void 0 || s.skipNull && o === null || s.skipEmptyString && o === "" ? a : o === null ? [...a, [l(D, s), "[", u, "]"].join("")] : [...a, [l(D, s), "[", l(u, s), "]=", l(o, s)].join("")]
            }
            ;
        case "bracket":
            return D=>(a,o)=>o === void 0 || s.skipNull && o === null || s.skipEmptyString && o === "" ? a : o === null ? [...a, [l(D, s), "[]"].join("")] : [...a, [l(D, s), "[]=", l(o, s)].join("")];
        case "colon-list-separator":
            return D=>(a,o)=>o === void 0 || s.skipNull && o === null || s.skipEmptyString && o === "" ? a : o === null ? [...a, [l(D, s), ":list="].join("")] : [...a, [l(D, s), ":list=", l(o, s)].join("")];
        case "comma":
        case "separator":
        case "bracket-separator":
            {
                const D = s.arrayFormat === "bracket-separator" ? "[]=" : "=";
                return a=>(o,u)=>u === void 0 || s.skipNull && u === null || s.skipEmptyString && u === "" ? o : (u = u === null ? "" : u,
                o.length === 0 ? [[l(a, s), D, l(u, s)].join("")] : [[o, l(u, s)].join(s.arrayFormatSeparator)])
            }
        default:
            return D=>(a,o)=>o === void 0 || s.skipNull && o === null || s.skipEmptyString && o === "" ? a : o === null ? [...a, l(D, s)] : [...a, [l(D, s), "=", l(o, s)].join("")]
        }
    }
    function c(s) {
        let D;
        switch (s.arrayFormat) {
        case "index":
            return (a,o,u)=>{
                if (D = /\[(\d*)\]$/.exec(a),
                a = a.replace(/\[\d*\]$/, ""),
                !D) {
                    u[a] = o;
                    return
                }
                u[a] === void 0 && (u[a] = {}),
                u[a][D[1]] = o
            }
            ;
        case "bracket":
            return (a,o,u)=>{
                if (D = /(\[\])$/.exec(a),
                a = a.replace(/\[\]$/, ""),
                !D) {
                    u[a] = o;
                    return
                }
                if (u[a] === void 0) {
                    u[a] = [o];
                    return
                }
                u[a] = [].concat(u[a], o)
            }
            ;
        case "colon-list-separator":
            return (a,o,u)=>{
                if (D = /(:list)$/.exec(a),
                a = a.replace(/:list$/, ""),
                !D) {
                    u[a] = o;
                    return
                }
                if (u[a] === void 0) {
                    u[a] = [o];
                    return
                }
                u[a] = [].concat(u[a], o)
            }
            ;
        case "comma":
        case "separator":
            return (a,o,u)=>{
                const e = typeof o == "string" && o.includes(s.arrayFormatSeparator)
                  , i = typeof o == "string" && !e && E(o, s).includes(s.arrayFormatSeparator);
                o = i ? E(o, s) : o;
                const y = e || i ? o.split(s.arrayFormatSeparator).map(p=>E(p, s)) : o === null ? o : E(o, s);
                u[a] = y
            }
            ;
        case "bracket-separator":
            return (a,o,u)=>{
                const e = /(\[\])$/.test(a);
                if (a = a.replace(/\[\]$/, ""),
                !e) {
                    u[a] = o && E(o, s);
                    return
                }
                const i = o === null ? [] : o.split(s.arrayFormatSeparator).map(y=>E(y, s));
                if (u[a] === void 0) {
                    u[a] = i;
                    return
                }
                u[a] = [].concat(u[a], i)
            }
            ;
        default:
            return (a,o,u)=>{
                if (u[a] === void 0) {
                    u[a] = o;
                    return
                }
                u[a] = [].concat(u[a], o)
            }
        }
    }
    function d(s) {
        if (typeof s != "string" || s.length !== 1)
            throw new TypeError("arrayFormatSeparator must be single character string")
    }
    function l(s, D) {
        return D.encode ? D.strict ? r(s) : encodeURIComponent(s) : s
    }
    function E(s, D) {
        return D.decode ? n(s) : s
    }
    function b(s) {
        return Array.isArray(s) ? s.sort() : typeof s == "object" ? b(Object.keys(s)).sort((D,a)=>Number(D) - Number(a)).map(D=>s[D]) : s
    }
    function _(s) {
        const D = s.indexOf("#");
        return D !== -1 && (s = s.slice(0, D)),
        s
    }
    function v(s) {
        let D = "";
        const a = s.indexOf("#");
        return a !== -1 && (D = s.slice(a)),
        D
    }
    function C(s) {
        s = _(s);
        const D = s.indexOf("?");
        return D === -1 ? "" : s.slice(D + 1)
    }
    function g(s, D) {
        return D.parseNumbers && !Number.isNaN(Number(s)) && typeof s == "string" && s.trim() !== "" ? s = Number(s) : D.parseBooleans && s !== null && (s.toLowerCase() === "true" || s.toLowerCase() === "false") && (s = s.toLowerCase() === "true"),
        s
    }
    function O(s, D) {
        D = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, D),
        d(D.arrayFormatSeparator);
        const a = c(D)
          , o = Object.create(null);
        if (typeof s != "string" || (s = s.trim().replace(/^[?#&]/, ""),
        !s))
            return o;
        for (const u of s.split("&")) {
            if (u === "")
                continue;
            let[e,i] = f(D.decode ? u.replace(/\+/g, " ") : u, "=");
            i = i === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(D.arrayFormat) ? i : E(i, D),
            a(E(e, D), i, o)
        }
        for (const u of Object.keys(o)) {
            const e = o[u];
            if (typeof e == "object" && e !== null)
                for (const i of Object.keys(e))
                    e[i] = g(e[i], D);
            else
                o[u] = g(e, D)
        }
        return D.sort === !1 ? o : (D.sort === !0 ? Object.keys(o).sort() : Object.keys(o).sort(D.sort)).reduce((u,e)=>{
            const i = o[e];
            return i && typeof i == "object" && !Array.isArray(i) ? u[e] = b(i) : u[e] = i,
            u
        }
        , Object.create(null))
    }
    t.extract = C,
    t.parse = O,
    t.stringify = (s,D)=>{
        if (!s)
            return "";
        D = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, D),
        d(D.arrayFormatSeparator);
        const a = i=>D.skipNull && S(s[i]) || D.skipEmptyString && s[i] === ""
          , o = h(D)
          , u = {};
        for (const i of Object.keys(s))
            a(i) || (u[i] = s[i]);
        const e = Object.keys(u);
        return D.sort !== !1 && e.sort(D.sort),
        e.map(i=>{
            const y = s[i];
            return y === void 0 ? "" : y === null ? l(i, D) : Array.isArray(y) ? y.length === 0 && D.arrayFormat === "bracket-separator" ? l(i, D) + "[]" : y.reduce(o(i), []).join("&") : l(i, D) + "=" + l(y, D)
        }
        ).filter(i=>i.length > 0).join("&")
    }
    ,
    t.parseUrl = (s,D)=>{
        D = Object.assign({
            decode: !0
        }, D);
        const [a,o] = f(s, "#");
        return Object.assign({
            url: a.split("?")[0] || "",
            query: O(C(s), D)
        }, D && D.parseFragmentIdentifier && o ? {
            fragmentIdentifier: E(o, D)
        } : {})
    }
    ,
    t.stringifyUrl = (s,D)=>{
        D = Object.assign({
            encode: !0,
            strict: !0,
            [U]: !0
        }, D);
        const a = _(s.url).split("?")[0] || ""
          , o = t.extract(s.url)
          , u = t.parse(o, {
            sort: !1
        })
          , e = Object.assign(u, s.query);
        let i = t.stringify(e, D);
        i && (i = `?${i}`);
        let y = v(s.url);
        return s.fragmentIdentifier && (y = `#${D[U] ? l(s.fragmentIdentifier, D) : s.fragmentIdentifier}`),
        `${a}${i}${y}`
    }
    ,
    t.pick = (s,D,a)=>{
        a = Object.assign({
            parseFragmentIdentifier: !0,
            [U]: !1
        }, a);
        const {url: o, query: u, fragmentIdentifier: e} = t.parseUrl(s, a);
        return t.stringifyUrl({
            url: o,
            query: w(u, D),
            fragmentIdentifier: e
        }, a)
    }
    ,
    t.exclude = (s,D,a)=>{
        const o = Array.isArray(D) ? u=>!D.includes(u) : (u,e)=>!D(u, e);
        return t.pick(s, o, a)
    }
}
)(rr);
var hr = {}
  , xe = {}
  , x = {}
  , bt = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    function r(h, c) {
        var d = h >>> 16 & 65535
          , l = h & 65535
          , E = c >>> 16 & 65535
          , b = c & 65535;
        return l * b + (d * b + l * E << 16 >>> 0) | 0
    }
    t.mul = Math.imul || r;
    function n(h, c) {
        return h + c | 0
    }
    t.add = n;
    function f(h, c) {
        return h - c | 0
    }
    t.sub = f;
    function w(h, c) {
        return h << c | h >>> 32 - c
    }
    t.rotl = w;
    function S(h, c) {
        return h << 32 - c | h >>> c
    }
    t.rotr = S;
    function U(h) {
        return typeof h == "number" && isFinite(h) && Math.floor(h) === h
    }
    t.isInteger = Number.isInteger || U,
    t.MAX_SAFE_INTEGER = 9007199254740991,
    t.isSafeInteger = function(h) {
        return t.isInteger(h) && h >= -t.MAX_SAFE_INTEGER && h <= t.MAX_SAFE_INTEGER
    }
}
)(bt);
Object.defineProperty(x, "__esModule", {
    value: !0
});
var wt = bt;
function sr(t, r) {
    return r === void 0 && (r = 0),
    (t[r + 0] << 8 | t[r + 1]) << 16 >> 16
}
x.readInt16BE = sr;
function cr(t, r) {
    return r === void 0 && (r = 0),
    (t[r + 0] << 8 | t[r + 1]) >>> 0
}
x.readUint16BE = cr;
function Dr(t, r) {
    return r === void 0 && (r = 0),
    (t[r + 1] << 8 | t[r]) << 16 >> 16
}
x.readInt16LE = Dr;
function lr(t, r) {
    return r === void 0 && (r = 0),
    (t[r + 1] << 8 | t[r]) >>> 0
}
x.readUint16LE = lr;
function vt(t, r, n) {
    return r === void 0 && (r = new Uint8Array(2)),
    n === void 0 && (n = 0),
    r[n + 0] = t >>> 8,
    r[n + 1] = t >>> 0,
    r
}
x.writeUint16BE = vt;
x.writeInt16BE = vt;
function gt(t, r, n) {
    return r === void 0 && (r = new Uint8Array(2)),
    n === void 0 && (n = 0),
    r[n + 0] = t >>> 0,
    r[n + 1] = t >>> 8,
    r
}
x.writeUint16LE = gt;
x.writeInt16LE = gt;
function We(t, r) {
    return r === void 0 && (r = 0),
    t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]
}
x.readInt32BE = We;
function Ge(t, r) {
    return r === void 0 && (r = 0),
    (t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]) >>> 0
}
x.readUint32BE = Ge;
function Ve(t, r) {
    return r === void 0 && (r = 0),
    t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]
}
x.readInt32LE = Ve;
function Xe(t, r) {
    return r === void 0 && (r = 0),
    (t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]) >>> 0
}
x.readUint32LE = Xe;
function Le(t, r, n) {
    return r === void 0 && (r = new Uint8Array(4)),
    n === void 0 && (n = 0),
    r[n + 0] = t >>> 24,
    r[n + 1] = t >>> 16,
    r[n + 2] = t >>> 8,
    r[n + 3] = t >>> 0,
    r
}
x.writeUint32BE = Le;
x.writeInt32BE = Le;
function Me(t, r, n) {
    return r === void 0 && (r = new Uint8Array(4)),
    n === void 0 && (n = 0),
    r[n + 0] = t >>> 0,
    r[n + 1] = t >>> 8,
    r[n + 2] = t >>> 16,
    r[n + 3] = t >>> 24,
    r
}
x.writeUint32LE = Me;
x.writeInt32LE = Me;
function _r(t, r) {
    r === void 0 && (r = 0);
    var n = We(t, r)
      , f = We(t, r + 4);
    return n * 4294967296 + f - (f >> 31) * 4294967296
}
x.readInt64BE = _r;
function dr(t, r) {
    r === void 0 && (r = 0);
    var n = Ge(t, r)
      , f = Ge(t, r + 4);
    return n * 4294967296 + f
}
x.readUint64BE = dr;
function Er(t, r) {
    r === void 0 && (r = 0);
    var n = Ve(t, r)
      , f = Ve(t, r + 4);
    return f * 4294967296 + n - (n >> 31) * 4294967296
}
x.readInt64LE = Er;
function br(t, r) {
    r === void 0 && (r = 0);
    var n = Xe(t, r)
      , f = Xe(t, r + 4);
    return f * 4294967296 + n
}
x.readUint64LE = br;
function yt(t, r, n) {
    return r === void 0 && (r = new Uint8Array(8)),
    n === void 0 && (n = 0),
    Le(t / 4294967296 >>> 0, r, n),
    Le(t >>> 0, r, n + 4),
    r
}
x.writeUint64BE = yt;
x.writeInt64BE = yt;
function St(t, r, n) {
    return r === void 0 && (r = new Uint8Array(8)),
    n === void 0 && (n = 0),
    Me(t >>> 0, r, n),
    Me(t / 4294967296 >>> 0, r, n + 4),
    r
}
x.writeUint64LE = St;
x.writeInt64LE = St;
function wr(t, r, n) {
    if (n === void 0 && (n = 0),
    t % 8 !== 0)
        throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (t / 8 > r.length - n)
        throw new Error("readUintBE: array is too short for the given bitLength");
    for (var f = 0, w = 1, S = t / 8 + n - 1; S >= n; S--)
        f += r[S] * w,
        w *= 256;
    return f
}
x.readUintBE = wr;
function vr(t, r, n) {
    if (n === void 0 && (n = 0),
    t % 8 !== 0)
        throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (t / 8 > r.length - n)
        throw new Error("readUintLE: array is too short for the given bitLength");
    for (var f = 0, w = 1, S = n; S < n + t / 8; S++)
        f += r[S] * w,
        w *= 256;
    return f
}
x.readUintLE = vr;
function gr(t, r, n, f) {
    if (n === void 0 && (n = new Uint8Array(t / 8)),
    f === void 0 && (f = 0),
    t % 8 !== 0)
        throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!wt.isSafeInteger(r))
        throw new Error("writeUintBE value must be an integer");
    for (var w = 1, S = t / 8 + f - 1; S >= f; S--)
        n[S] = r / w & 255,
        w *= 256;
    return n
}
x.writeUintBE = gr;
function yr(t, r, n, f) {
    if (n === void 0 && (n = new Uint8Array(t / 8)),
    f === void 0 && (f = 0),
    t % 8 !== 0)
        throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!wt.isSafeInteger(r))
        throw new Error("writeUintLE value must be an integer");
    for (var w = 1, S = f; S < f + t / 8; S++)
        n[S] = r / w & 255,
        w *= 256;
    return n
}
x.writeUintLE = yr;
function Sr(t, r) {
    r === void 0 && (r = 0);
    var n = new DataView(t.buffer,t.byteOffset,t.byteLength);
    return n.getFloat32(r)
}
x.readFloat32BE = Sr;
function mr(t, r) {
    r === void 0 && (r = 0);
    var n = new DataView(t.buffer,t.byteOffset,t.byteLength);
    return n.getFloat32(r, !0)
}
x.readFloat32LE = mr;
function Cr(t, r) {
    r === void 0 && (r = 0);
    var n = new DataView(t.buffer,t.byteOffset,t.byteLength);
    return n.getFloat64(r)
}
x.readFloat64BE = Cr;
function pr(t, r) {
    r === void 0 && (r = 0);
    var n = new DataView(t.buffer,t.byteOffset,t.byteLength);
    return n.getFloat64(r, !0)
}
x.readFloat64LE = pr;
function Ar(t, r, n) {
    r === void 0 && (r = new Uint8Array(4)),
    n === void 0 && (n = 0);
    var f = new DataView(r.buffer,r.byteOffset,r.byteLength);
    return f.setFloat32(n, t),
    r
}
x.writeFloat32BE = Ar;
function Ur(t, r, n) {
    r === void 0 && (r = new Uint8Array(4)),
    n === void 0 && (n = 0);
    var f = new DataView(r.buffer,r.byteOffset,r.byteLength);
    return f.setFloat32(n, t, !0),
    r
}
x.writeFloat32LE = Ur;
function Or(t, r, n) {
    r === void 0 && (r = new Uint8Array(8)),
    n === void 0 && (n = 0);
    var f = new DataView(r.buffer,r.byteOffset,r.byteLength);
    return f.setFloat64(n, t),
    r
}
x.writeFloat64BE = Or;
function Fr(t, r, n) {
    r === void 0 && (r = new Uint8Array(8)),
    n === void 0 && (n = 0);
    var f = new DataView(r.buffer,r.byteOffset,r.byteLength);
    return f.setFloat64(n, t, !0),
    r
}
x.writeFloat64LE = Fr;
var Ee = {};
Object.defineProperty(Ee, "__esModule", {
    value: !0
});
function Nr(t) {
    for (var r = 0; r < t.length; r++)
        t[r] = 0;
    return t
}
Ee.wipe = Nr;
Object.defineProperty(xe, "__esModule", {
    value: !0
});
var de = x
  , Je = Ee
  , Tr = 20;
function Lr(t, r, n) {
    for (var f = 1634760805, w = 857760878, S = 2036477234, U = 1797285236, h = n[3] << 24 | n[2] << 16 | n[1] << 8 | n[0], c = n[7] << 24 | n[6] << 16 | n[5] << 8 | n[4], d = n[11] << 24 | n[10] << 16 | n[9] << 8 | n[8], l = n[15] << 24 | n[14] << 16 | n[13] << 8 | n[12], E = n[19] << 24 | n[18] << 16 | n[17] << 8 | n[16], b = n[23] << 24 | n[22] << 16 | n[21] << 8 | n[20], _ = n[27] << 24 | n[26] << 16 | n[25] << 8 | n[24], v = n[31] << 24 | n[30] << 16 | n[29] << 8 | n[28], C = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], g = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], O = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], s = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], D = f, a = w, o = S, u = U, e = h, i = c, y = d, p = l, F = E, M = b, j = _, B = v, T = C, L = g, m = O, N = s, G = 0; G < Tr; G += 2)
        D = D + e | 0,
        T ^= D,
        T = T >>> 16 | T << 16,
        F = F + T | 0,
        e ^= F,
        e = e >>> 20 | e << 12,
        a = a + i | 0,
        L ^= a,
        L = L >>> 16 | L << 16,
        M = M + L | 0,
        i ^= M,
        i = i >>> 20 | i << 12,
        o = o + y | 0,
        m ^= o,
        m = m >>> 16 | m << 16,
        j = j + m | 0,
        y ^= j,
        y = y >>> 20 | y << 12,
        u = u + p | 0,
        N ^= u,
        N = N >>> 16 | N << 16,
        B = B + N | 0,
        p ^= B,
        p = p >>> 20 | p << 12,
        o = o + y | 0,
        m ^= o,
        m = m >>> 24 | m << 8,
        j = j + m | 0,
        y ^= j,
        y = y >>> 25 | y << 7,
        u = u + p | 0,
        N ^= u,
        N = N >>> 24 | N << 8,
        B = B + N | 0,
        p ^= B,
        p = p >>> 25 | p << 7,
        a = a + i | 0,
        L ^= a,
        L = L >>> 24 | L << 8,
        M = M + L | 0,
        i ^= M,
        i = i >>> 25 | i << 7,
        D = D + e | 0,
        T ^= D,
        T = T >>> 24 | T << 8,
        F = F + T | 0,
        e ^= F,
        e = e >>> 25 | e << 7,
        D = D + i | 0,
        N ^= D,
        N = N >>> 16 | N << 16,
        j = j + N | 0,
        i ^= j,
        i = i >>> 20 | i << 12,
        a = a + y | 0,
        T ^= a,
        T = T >>> 16 | T << 16,
        B = B + T | 0,
        y ^= B,
        y = y >>> 20 | y << 12,
        o = o + p | 0,
        L ^= o,
        L = L >>> 16 | L << 16,
        F = F + L | 0,
        p ^= F,
        p = p >>> 20 | p << 12,
        u = u + e | 0,
        m ^= u,
        m = m >>> 16 | m << 16,
        M = M + m | 0,
        e ^= M,
        e = e >>> 20 | e << 12,
        o = o + p | 0,
        L ^= o,
        L = L >>> 24 | L << 8,
        F = F + L | 0,
        p ^= F,
        p = p >>> 25 | p << 7,
        u = u + e | 0,
        m ^= u,
        m = m >>> 24 | m << 8,
        M = M + m | 0,
        e ^= M,
        e = e >>> 25 | e << 7,
        a = a + y | 0,
        T ^= a,
        T = T >>> 24 | T << 8,
        B = B + T | 0,
        y ^= B,
        y = y >>> 25 | y << 7,
        D = D + i | 0,
        N ^= D,
        N = N >>> 24 | N << 8,
        j = j + N | 0,
        i ^= j,
        i = i >>> 25 | i << 7;
    de.writeUint32LE(D + f | 0, t, 0),
    de.writeUint32LE(a + w | 0, t, 4),
    de.writeUint32LE(o + S | 0, t, 8),
    de.writeUint32LE(u + U | 0, t, 12),
    de.writeUint32LE(e + h | 0, t, 16),
    de.writeUint32LE(i + c | 0, t, 20),
    de.writeUint32LE(y + d | 0, t, 24),
    de.writeUint32LE(p + l | 0, t, 28),
    de.writeUint32LE(F + E | 0, t, 32),
    de.writeUint32LE(M + b | 0, t, 36),
    de.writeUint32LE(j + _ | 0, t, 40),
    de.writeUint32LE(B + v | 0, t, 44),
    de.writeUint32LE(T + C | 0, t, 48),
    de.writeUint32LE(L + g | 0, t, 52),
    de.writeUint32LE(m + O | 0, t, 56),
    de.writeUint32LE(N + s | 0, t, 60)
}
function mt(t, r, n, f, w) {
    if (w === void 0 && (w = 0),
    t.length !== 32)
        throw new Error("ChaCha: key size must be 32 bytes");
    if (f.length < n.length)
        throw new Error("ChaCha: destination is shorter than source");
    var S, U;
    if (w === 0) {
        if (r.length !== 8 && r.length !== 12)
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
        S = new Uint8Array(16),
        U = S.length - r.length,
        S.set(r, U)
    } else {
        if (r.length !== 16)
            throw new Error("ChaCha nonce with counter must be 16 bytes");
        S = r,
        U = w
    }
    for (var h = new Uint8Array(64), c = 0; c < n.length; c += 64) {
        Lr(h, S, t);
        for (var d = c; d < c + 64 && d < n.length; d++)
            f[d] = n[d] ^ h[d - c];
        Br(S, 0, U)
    }
    return Je.wipe(h),
    w === 0 && Je.wipe(S),
    f
}
xe.streamXOR = mt;
function Mr(t, r, n, f) {
    return f === void 0 && (f = 0),
    Je.wipe(n),
    mt(t, r, n, n, f)
}
xe.stream = Mr;
function Br(t, r, n) {
    for (var f = 1; n--; )
        f = f + (t[r] & 255) | 0,
        t[r] = f & 255,
        f >>>= 8,
        r++;
    if (f > 0)
        throw new Error("ChaCha: counter overflow")
}
var Ct = {}
  , we = {};
Object.defineProperty(we, "__esModule", {
    value: !0
});
function xr(t, r, n) {
    return ~(t - 1) & r | t - 1 & n
}
we.select = xr;
function jr(t, r) {
    return (t | 0) - (r | 0) - 1 >>> 31 & 1
}
we.lessOrEqual = jr;
function pt(t, r) {
    if (t.length !== r.length)
        return 0;
    for (var n = 0, f = 0; f < t.length; f++)
        n |= t[f] ^ r[f];
    return 1 & n - 1 >>> 8
}
we.compare = pt;
function Rr(t, r) {
    return t.length === 0 || r.length === 0 ? !1 : pt(t, r) !== 0
}
we.equal = Rr;
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = we
      , n = Ee;
    t.DIGEST_LENGTH = 16;
    var f = function() {
        function U(h) {
            this.digestLength = t.DIGEST_LENGTH,
            this._buffer = new Uint8Array(16),
            this._r = new Uint16Array(10),
            this._h = new Uint16Array(10),
            this._pad = new Uint16Array(8),
            this._leftover = 0,
            this._fin = 0,
            this._finished = !1;
            var c = h[0] | h[1] << 8;
            this._r[0] = c & 8191;
            var d = h[2] | h[3] << 8;
            this._r[1] = (c >>> 13 | d << 3) & 8191;
            var l = h[4] | h[5] << 8;
            this._r[2] = (d >>> 10 | l << 6) & 7939;
            var E = h[6] | h[7] << 8;
            this._r[3] = (l >>> 7 | E << 9) & 8191;
            var b = h[8] | h[9] << 8;
            this._r[4] = (E >>> 4 | b << 12) & 255,
            this._r[5] = b >>> 1 & 8190;
            var _ = h[10] | h[11] << 8;
            this._r[6] = (b >>> 14 | _ << 2) & 8191;
            var v = h[12] | h[13] << 8;
            this._r[7] = (_ >>> 11 | v << 5) & 8065;
            var C = h[14] | h[15] << 8;
            this._r[8] = (v >>> 8 | C << 8) & 8191,
            this._r[9] = C >>> 5 & 127,
            this._pad[0] = h[16] | h[17] << 8,
            this._pad[1] = h[18] | h[19] << 8,
            this._pad[2] = h[20] | h[21] << 8,
            this._pad[3] = h[22] | h[23] << 8,
            this._pad[4] = h[24] | h[25] << 8,
            this._pad[5] = h[26] | h[27] << 8,
            this._pad[6] = h[28] | h[29] << 8,
            this._pad[7] = h[30] | h[31] << 8
        }
        return U.prototype._blocks = function(h, c, d) {
            for (var l = this._fin ? 0 : 2048, E = this._h[0], b = this._h[1], _ = this._h[2], v = this._h[3], C = this._h[4], g = this._h[5], O = this._h[6], s = this._h[7], D = this._h[8], a = this._h[9], o = this._r[0], u = this._r[1], e = this._r[2], i = this._r[3], y = this._r[4], p = this._r[5], F = this._r[6], M = this._r[7], j = this._r[8], B = this._r[9]; d >= 16; ) {
                var T = h[c + 0] | h[c + 1] << 8;
                E += T & 8191;
                var L = h[c + 2] | h[c + 3] << 8;
                b += (T >>> 13 | L << 3) & 8191;
                var m = h[c + 4] | h[c + 5] << 8;
                _ += (L >>> 10 | m << 6) & 8191;
                var N = h[c + 6] | h[c + 7] << 8;
                v += (m >>> 7 | N << 9) & 8191;
                var G = h[c + 8] | h[c + 9] << 8;
                C += (N >>> 4 | G << 12) & 8191,
                g += G >>> 1 & 8191;
                var Q = h[c + 10] | h[c + 11] << 8;
                O += (G >>> 14 | Q << 2) & 8191;
                var J = h[c + 12] | h[c + 13] << 8;
                s += (Q >>> 11 | J << 5) & 8191;
                var X = h[c + 14] | h[c + 15] << 8;
                D += (J >>> 8 | X << 8) & 8191,
                a += X >>> 5 | l;
                var A = 0
                  , R = A;
                R += E * o,
                R += b * (5 * B),
                R += _ * (5 * j),
                R += v * (5 * M),
                R += C * (5 * F),
                A = R >>> 13,
                R &= 8191,
                R += g * (5 * p),
                R += O * (5 * y),
                R += s * (5 * i),
                R += D * (5 * e),
                R += a * (5 * u),
                A += R >>> 13,
                R &= 8191;
                var I = A;
                I += E * u,
                I += b * o,
                I += _ * (5 * B),
                I += v * (5 * j),
                I += C * (5 * M),
                A = I >>> 13,
                I &= 8191,
                I += g * (5 * F),
                I += O * (5 * p),
                I += s * (5 * y),
                I += D * (5 * i),
                I += a * (5 * e),
                A += I >>> 13,
                I &= 8191;
                var H = A;
                H += E * e,
                H += b * u,
                H += _ * o,
                H += v * (5 * B),
                H += C * (5 * j),
                A = H >>> 13,
                H &= 8191,
                H += g * (5 * M),
                H += O * (5 * F),
                H += s * (5 * p),
                H += D * (5 * y),
                H += a * (5 * i),
                A += H >>> 13,
                H &= 8191;
                var P = A;
                P += E * i,
                P += b * e,
                P += _ * u,
                P += v * o,
                P += C * (5 * B),
                A = P >>> 13,
                P &= 8191,
                P += g * (5 * j),
                P += O * (5 * M),
                P += s * (5 * F),
                P += D * (5 * p),
                P += a * (5 * y),
                A += P >>> 13,
                P &= 8191;
                var K = A;
                K += E * y,
                K += b * i,
                K += _ * e,
                K += v * u,
                K += C * o,
                A = K >>> 13,
                K &= 8191,
                K += g * (5 * B),
                K += O * (5 * j),
                K += s * (5 * M),
                K += D * (5 * F),
                K += a * (5 * p),
                A += K >>> 13,
                K &= 8191;
                var $ = A;
                $ += E * p,
                $ += b * y,
                $ += _ * i,
                $ += v * e,
                $ += C * u,
                A = $ >>> 13,
                $ &= 8191,
                $ += g * o,
                $ += O * (5 * B),
                $ += s * (5 * j),
                $ += D * (5 * M),
                $ += a * (5 * F),
                A += $ >>> 13,
                $ &= 8191;
                var q = A;
                q += E * F,
                q += b * p,
                q += _ * y,
                q += v * i,
                q += C * e,
                A = q >>> 13,
                q &= 8191,
                q += g * u,
                q += O * o,
                q += s * (5 * B),
                q += D * (5 * j),
                q += a * (5 * M),
                A += q >>> 13,
                q &= 8191;
                var z = A;
                z += E * M,
                z += b * F,
                z += _ * p,
                z += v * y,
                z += C * i,
                A = z >>> 13,
                z &= 8191,
                z += g * e,
                z += O * u,
                z += s * o,
                z += D * (5 * B),
                z += a * (5 * j),
                A += z >>> 13,
                z &= 8191;
                var W = A;
                W += E * j,
                W += b * M,
                W += _ * F,
                W += v * p,
                W += C * y,
                A = W >>> 13,
                W &= 8191,
                W += g * i,
                W += O * e,
                W += s * u,
                W += D * o,
                W += a * (5 * B),
                A += W >>> 13,
                W &= 8191;
                var V = A;
                V += E * B,
                V += b * j,
                V += _ * M,
                V += v * F,
                V += C * p,
                A = V >>> 13,
                V &= 8191,
                V += g * y,
                V += O * i,
                V += s * e,
                V += D * u,
                V += a * o,
                A += V >>> 13,
                V &= 8191,
                A = (A << 2) + A | 0,
                A = A + R | 0,
                R = A & 8191,
                A = A >>> 13,
                I += A,
                E = R,
                b = I,
                _ = H,
                v = P,
                C = K,
                g = $,
                O = q,
                s = z,
                D = W,
                a = V,
                c += 16,
                d -= 16
            }
            this._h[0] = E,
            this._h[1] = b,
            this._h[2] = _,
            this._h[3] = v,
            this._h[4] = C,
            this._h[5] = g,
            this._h[6] = O,
            this._h[7] = s,
            this._h[8] = D,
            this._h[9] = a
        }
        ,
        U.prototype.finish = function(h, c) {
            c === void 0 && (c = 0);
            var d = new Uint16Array(10), l, E, b, _;
            if (this._leftover) {
                for (_ = this._leftover,
                this._buffer[_++] = 1; _ < 16; _++)
                    this._buffer[_] = 0;
                this._fin = 1,
                this._blocks(this._buffer, 0, 16)
            }
            for (l = this._h[1] >>> 13,
            this._h[1] &= 8191,
            _ = 2; _ < 10; _++)
                this._h[_] += l,
                l = this._h[_] >>> 13,
                this._h[_] &= 8191;
            for (this._h[0] += l * 5,
            l = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += l,
            l = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += l,
            d[0] = this._h[0] + 5,
            l = d[0] >>> 13,
            d[0] &= 8191,
            _ = 1; _ < 10; _++)
                d[_] = this._h[_] + l,
                l = d[_] >>> 13,
                d[_] &= 8191;
            for (d[9] -= 8192,
            E = (l ^ 1) - 1,
            _ = 0; _ < 10; _++)
                d[_] &= E;
            for (E = ~E,
            _ = 0; _ < 10; _++)
                this._h[_] = this._h[_] & E | d[_];
            for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535,
            this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535,
            this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535,
            this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535,
            this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535,
            this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535,
            this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535,
            this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535,
            b = this._h[0] + this._pad[0],
            this._h[0] = b & 65535,
            _ = 1; _ < 8; _++)
                b = (this._h[_] + this._pad[_] | 0) + (b >>> 16) | 0,
                this._h[_] = b & 65535;
            return h[c + 0] = this._h[0] >>> 0,
            h[c + 1] = this._h[0] >>> 8,
            h[c + 2] = this._h[1] >>> 0,
            h[c + 3] = this._h[1] >>> 8,
            h[c + 4] = this._h[2] >>> 0,
            h[c + 5] = this._h[2] >>> 8,
            h[c + 6] = this._h[3] >>> 0,
            h[c + 7] = this._h[3] >>> 8,
            h[c + 8] = this._h[4] >>> 0,
            h[c + 9] = this._h[4] >>> 8,
            h[c + 10] = this._h[5] >>> 0,
            h[c + 11] = this._h[5] >>> 8,
            h[c + 12] = this._h[6] >>> 0,
            h[c + 13] = this._h[6] >>> 8,
            h[c + 14] = this._h[7] >>> 0,
            h[c + 15] = this._h[7] >>> 8,
            this._finished = !0,
            this
        }
        ,
        U.prototype.update = function(h) {
            var c = 0, d = h.length, l;
            if (this._leftover) {
                l = 16 - this._leftover,
                l > d && (l = d);
                for (var E = 0; E < l; E++)
                    this._buffer[this._leftover + E] = h[c + E];
                if (d -= l,
                c += l,
                this._leftover += l,
                this._leftover < 16)
                    return this;
                this._blocks(this._buffer, 0, 16),
                this._leftover = 0
            }
            if (d >= 16 && (l = d - d % 16,
            this._blocks(h, c, l),
            c += l,
            d -= l),
            d) {
                for (var E = 0; E < d; E++)
                    this._buffer[this._leftover + E] = h[c + E];
                this._leftover += d
            }
            return this
        }
        ,
        U.prototype.digest = function() {
            if (this._finished)
                throw new Error("Poly1305 was finished");
            var h = new Uint8Array(16);
            return this.finish(h),
            h
        }
        ,
        U.prototype.clean = function() {
            return n.wipe(this._buffer),
            n.wipe(this._r),
            n.wipe(this._h),
            n.wipe(this._pad),
            this._leftover = 0,
            this._fin = 0,
            this._finished = !0,
            this
        }
        ,
        U
    }();
    t.Poly1305 = f;
    function w(U, h) {
        var c = new f(U);
        c.update(h);
        var d = c.digest();
        return c.clean(),
        d
    }
    t.oneTimeAuth = w;
    function S(U, h) {
        return U.length !== t.DIGEST_LENGTH || h.length !== t.DIGEST_LENGTH ? !1 : r.equal(U, h)
    }
    t.equal = S
}
)(Ct);
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = xe
      , n = Ct
      , f = Ee
      , w = x
      , S = we;
    t.KEY_LENGTH = 32,
    t.NONCE_LENGTH = 12,
    t.TAG_LENGTH = 16;
    var U = new Uint8Array(16)
      , h = function() {
        function c(d) {
            if (this.nonceLength = t.NONCE_LENGTH,
            this.tagLength = t.TAG_LENGTH,
            d.length !== t.KEY_LENGTH)
                throw new Error("ChaCha20Poly1305 needs 32-byte key");
            this._key = new Uint8Array(d)
        }
        return c.prototype.seal = function(d, l, E, b) {
            if (d.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
            var _ = new Uint8Array(16);
            _.set(d, _.length - d.length);
            var v = new Uint8Array(32);
            r.stream(this._key, _, v, 4);
            var C = l.length + this.tagLength, g;
            if (b) {
                if (b.length !== C)
                    throw new Error("ChaCha20Poly1305: incorrect destination length");
                g = b
            } else
                g = new Uint8Array(C);
            return r.streamXOR(this._key, _, l, g, 4),
            this._authenticate(g.subarray(g.length - this.tagLength, g.length), v, g.subarray(0, g.length - this.tagLength), E),
            f.wipe(_),
            g
        }
        ,
        c.prototype.open = function(d, l, E, b) {
            if (d.length > 16)
                throw new Error("ChaCha20Poly1305: incorrect nonce length");
            if (l.length < this.tagLength)
                return null;
            var _ = new Uint8Array(16);
            _.set(d, _.length - d.length);
            var v = new Uint8Array(32);
            r.stream(this._key, _, v, 4);
            var C = new Uint8Array(this.tagLength);
            if (this._authenticate(C, v, l.subarray(0, l.length - this.tagLength), E),
            !S.equal(C, l.subarray(l.length - this.tagLength, l.length)))
                return null;
            var g = l.length - this.tagLength, O;
            if (b) {
                if (b.length !== g)
                    throw new Error("ChaCha20Poly1305: incorrect destination length");
                O = b
            } else
                O = new Uint8Array(g);
            return r.streamXOR(this._key, _, l.subarray(0, l.length - this.tagLength), O, 4),
            f.wipe(_),
            O
        }
        ,
        c.prototype.clean = function() {
            return f.wipe(this._key),
            this
        }
        ,
        c.prototype._authenticate = function(d, l, E, b) {
            var _ = new n.Poly1305(l);
            b && (_.update(b),
            b.length % 16 > 0 && _.update(U.subarray(b.length % 16))),
            _.update(E),
            E.length % 16 > 0 && _.update(U.subarray(E.length % 16));
            var v = new Uint8Array(8);
            b && w.writeUint64LE(b.length, v),
            _.update(v),
            w.writeUint64LE(E.length, v),
            _.update(v);
            for (var C = _.digest(), g = 0; g < C.length; g++)
                d[g] = C[g];
            _.clean(),
            f.wipe(C),
            f.wipe(v)
        }
        ,
        c
    }();
    t.ChaCha20Poly1305 = h
}
)(hr);
var At = {}
  , Fe = {}
  , Ze = {};
Object.defineProperty(Ze, "__esModule", {
    value: !0
});
function Ir(t) {
    return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u"
}
Ze.isSerializableHash = Ir;
Object.defineProperty(Fe, "__esModule", {
    value: !0
});
var be = Ze
  , Hr = we
  , Pr = Ee
  , Ut = function() {
    function t(r, n) {
        this._finished = !1,
        this._inner = new r,
        this._outer = new r,
        this.blockSize = this._outer.blockSize,
        this.digestLength = this._outer.digestLength;
        var f = new Uint8Array(this.blockSize);
        n.length > this.blockSize ? this._inner.update(n).finish(f).clean() : f.set(n);
        for (var w = 0; w < f.length; w++)
            f[w] ^= 54;
        this._inner.update(f);
        for (var w = 0; w < f.length; w++)
            f[w] ^= 106;
        this._outer.update(f),
        be.isSerializableHash(this._inner) && be.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(),
        this._outerKeyedState = this._outer.saveState()),
        Pr.wipe(f)
    }
    return t.prototype.reset = function() {
        if (!be.isSerializableHash(this._inner) || !be.isSerializableHash(this._outer))
            throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
        return this._inner.restoreState(this._innerKeyedState),
        this._outer.restoreState(this._outerKeyedState),
        this._finished = !1,
        this
    }
    ,
    t.prototype.clean = function() {
        be.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState),
        be.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState),
        this._inner.clean(),
        this._outer.clean()
    }
    ,
    t.prototype.update = function(r) {
        return this._inner.update(r),
        this
    }
    ,
    t.prototype.finish = function(r) {
        return this._finished ? (this._outer.finish(r),
        this) : (this._inner.finish(r),
        this._outer.update(r.subarray(0, this.digestLength)).finish(r),
        this._finished = !0,
        this)
    }
    ,
    t.prototype.digest = function() {
        var r = new Uint8Array(this.digestLength);
        return this.finish(r),
        r
    }
    ,
    t.prototype.saveState = function() {
        if (!be.isSerializableHash(this._inner))
            throw new Error("hmac: can't saveState() because hash doesn't implement it");
        return this._inner.saveState()
    }
    ,
    t.prototype.restoreState = function(r) {
        if (!be.isSerializableHash(this._inner) || !be.isSerializableHash(this._outer))
            throw new Error("hmac: can't restoreState() because hash doesn't implement it");
        return this._inner.restoreState(r),
        this._outer.restoreState(this._outerKeyedState),
        this._finished = !1,
        this
    }
    ,
    t.prototype.cleanSavedState = function(r) {
        if (!be.isSerializableHash(this._inner))
            throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
        this._inner.cleanSavedState(r)
    }
    ,
    t
}();
Fe.HMAC = Ut;
function Kr(t, r, n) {
    var f = new Ut(t,r);
    f.update(n);
    var w = f.digest();
    return f.clean(),
    w
}
Fe.hmac = Kr;
Fe.equal = Hr.equal;
Object.defineProperty(At, "__esModule", {
    value: !0
});
var Dt = Fe
  , lt = Ee
  , $r = function() {
    function t(r, n, f, w) {
        f === void 0 && (f = new Uint8Array(0)),
        this._counter = new Uint8Array(1),
        this._hash = r,
        this._info = w;
        var S = Dt.hmac(this._hash, f, n);
        this._hmac = new Dt.HMAC(r,S),
        this._buffer = new Uint8Array(this._hmac.digestLength),
        this._bufpos = this._buffer.length
    }
    return t.prototype._fillBuffer = function() {
        this._counter[0]++;
        var r = this._counter[0];
        if (r === 0)
            throw new Error("hkdf: cannot expand more");
        this._hmac.reset(),
        r > 1 && this._hmac.update(this._buffer),
        this._info && this._hmac.update(this._info),
        this._hmac.update(this._counter),
        this._hmac.finish(this._buffer),
        this._bufpos = 0
    }
    ,
    t.prototype.expand = function(r) {
        for (var n = new Uint8Array(r), f = 0; f < n.length; f++)
            this._bufpos === this._buffer.length && this._fillBuffer(),
            n[f] = this._buffer[this._bufpos++];
        return n
    }
    ,
    t.prototype.clean = function() {
        this._hmac.clean(),
        lt.wipe(this._buffer),
        lt.wipe(this._counter),
        this._bufpos = 0
    }
    ,
    t
}()
  , Kn = At.HKDF = $r
  , Ot = {}
  , je = {}
  , Re = {};
Object.defineProperty(Re, "__esModule", {
    value: !0
});
Re.BrowserRandomSource = void 0;
const _t = 65536;
class qr {
    constructor() {
        this.isAvailable = !1,
        this.isInstantiated = !1;
        const r = typeof self < "u" ? self.crypto || self.msCrypto : null;
        r && r.getRandomValues !== void 0 && (this._crypto = r,
        this.isAvailable = !0,
        this.isInstantiated = !0)
    }
    randomBytes(r) {
        if (!this.isAvailable || !this._crypto)
            throw new Error("Browser random byte generator is not available.");
        const n = new Uint8Array(r);
        for (let f = 0; f < n.length; f += _t)
            this._crypto.getRandomValues(n.subarray(f, f + Math.min(n.length - f, _t)));
        return n
    }
}
Re.BrowserRandomSource = qr;
function zr(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Ie = {};
Object.defineProperty(Ie, "__esModule", {
    value: !0
});
Ie.NodeRandomSource = void 0;
const Yr = Ee;
class Wr {
    constructor() {
        if (this.isAvailable = !1,
        this.isInstantiated = !1,
        typeof zr < "u") {
            const r = Tt;
            r && r.randomBytes && (this._crypto = r,
            this.isAvailable = !0,
            this.isInstantiated = !0)
        }
    }
    randomBytes(r) {
        if (!this.isAvailable || !this._crypto)
            throw new Error("Node.js random byte generator is not available.");
        let n = this._crypto.randomBytes(r);
        if (n.length !== r)
            throw new Error("NodeRandomSource: got fewer bytes than requested");
        const f = new Uint8Array(r);
        for (let w = 0; w < f.length; w++)
            f[w] = n[w];
        return (0,
        Yr.wipe)(n),
        f
    }
}
Ie.NodeRandomSource = Wr;
Object.defineProperty(je, "__esModule", {
    value: !0
});
je.SystemRandomSource = void 0;
const Gr = Re
  , Vr = Ie;
class Xr {
    constructor() {
        if (this.isAvailable = !1,
        this.name = "",
        this._source = new Gr.BrowserRandomSource,
        this._source.isAvailable) {
            this.isAvailable = !0,
            this.name = "Browser";
            return
        }
        if (this._source = new Vr.NodeRandomSource,
        this._source.isAvailable) {
            this.isAvailable = !0,
            this.name = "Node";
            return
        }
    }
    randomBytes(r) {
        if (!this.isAvailable)
            throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(r)
    }
}
je.SystemRandomSource = Xr;
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
    const r = je
      , n = x
      , f = Ee;
    t.defaultRandomSource = new r.SystemRandomSource;
    function w(d, l=t.defaultRandomSource) {
        return l.randomBytes(d)
    }
    t.randomBytes = w;
    function S(d=t.defaultRandomSource) {
        const l = w(4, d)
          , E = (0,
        n.readUint32LE)(l);
        return (0,
        f.wipe)(l),
        E
    }
    t.randomUint32 = S;
    const U = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function h(d, l=U, E=t.defaultRandomSource) {
        if (l.length < 2)
            throw new Error("randomString charset is too short");
        if (l.length > 256)
            throw new Error("randomString charset is too long");
        let b = "";
        const _ = l.length
          , v = 256 - 256 % _;
        for (; d > 0; ) {
            const C = w(Math.ceil(d * 256 / v), E);
            for (let g = 0; g < C.length && d > 0; g++) {
                const O = C[g];
                O < v && (b += l.charAt(O % _),
                d--)
            }
            (0,
            f.wipe)(C)
        }
        return b
    }
    t.randomString = h;
    function c(d, l=U, E=t.defaultRandomSource) {
        const b = Math.ceil(d / (Math.log(l.length) / Math.LN2));
        return h(b, l, E)
    }
    t.randomStringForEntropy = c
}
)(Ot);
var Jr = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = x
      , n = Ee;
    t.DIGEST_LENGTH = 32,
    t.BLOCK_SIZE = 64;
    var f = function() {
        function h() {
            this.digestLength = t.DIGEST_LENGTH,
            this.blockSize = t.BLOCK_SIZE,
            this._state = new Int32Array(8),
            this._temp = new Int32Array(64),
            this._buffer = new Uint8Array(128),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this.reset()
        }
        return h.prototype._initState = function() {
            this._state[0] = 1779033703,
            this._state[1] = 3144134277,
            this._state[2] = 1013904242,
            this._state[3] = 2773480762,
            this._state[4] = 1359893119,
            this._state[5] = 2600822924,
            this._state[6] = 528734635,
            this._state[7] = 1541459225
        }
        ,
        h.prototype.reset = function() {
            return this._initState(),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this
        }
        ,
        h.prototype.clean = function() {
            n.wipe(this._buffer),
            n.wipe(this._temp),
            this.reset()
        }
        ,
        h.prototype.update = function(c, d) {
            if (d === void 0 && (d = c.length),
            this._finished)
                throw new Error("SHA256: can't update because hash was finished.");
            var l = 0;
            if (this._bytesHashed += d,
            this._bufferLength > 0) {
                for (; this._bufferLength < this.blockSize && d > 0; )
                    this._buffer[this._bufferLength++] = c[l++],
                    d--;
                this._bufferLength === this.blockSize && (S(this._temp, this._state, this._buffer, 0, this.blockSize),
                this._bufferLength = 0)
            }
            for (d >= this.blockSize && (l = S(this._temp, this._state, c, l, d),
            d %= this.blockSize); d > 0; )
                this._buffer[this._bufferLength++] = c[l++],
                d--;
            return this
        }
        ,
        h.prototype.finish = function(c) {
            if (!this._finished) {
                var d = this._bytesHashed
                  , l = this._bufferLength
                  , E = d / 536870912 | 0
                  , b = d << 3
                  , _ = d % 64 < 56 ? 64 : 128;
                this._buffer[l] = 128;
                for (var v = l + 1; v < _ - 8; v++)
                    this._buffer[v] = 0;
                r.writeUint32BE(E, this._buffer, _ - 8),
                r.writeUint32BE(b, this._buffer, _ - 4),
                S(this._temp, this._state, this._buffer, 0, _),
                this._finished = !0
            }
            for (var v = 0; v < this.digestLength / 4; v++)
                r.writeUint32BE(this._state[v], c, v * 4);
            return this
        }
        ,
        h.prototype.digest = function() {
            var c = new Uint8Array(this.digestLength);
            return this.finish(c),
            c
        }
        ,
        h.prototype.saveState = function() {
            if (this._finished)
                throw new Error("SHA256: cannot save finished state");
            return {
                state: new Int32Array(this._state),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }
        ,
        h.prototype.restoreState = function(c) {
            return this._state.set(c.state),
            this._bufferLength = c.bufferLength,
            c.buffer && this._buffer.set(c.buffer),
            this._bytesHashed = c.bytesHashed,
            this._finished = !1,
            this
        }
        ,
        h.prototype.cleanSavedState = function(c) {
            n.wipe(c.state),
            c.buffer && n.wipe(c.buffer),
            c.bufferLength = 0,
            c.bytesHashed = 0
        }
        ,
        h
    }();
    t.SHA256 = f;
    var w = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
    function S(h, c, d, l, E) {
        for (; E >= 64; ) {
            for (var b = c[0], _ = c[1], v = c[2], C = c[3], g = c[4], O = c[5], s = c[6], D = c[7], a = 0; a < 16; a++) {
                var o = l + a * 4;
                h[a] = r.readUint32BE(d, o)
            }
            for (var a = 16; a < 64; a++) {
                var u = h[a - 2]
                  , e = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
                u = h[a - 15];
                var i = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
                h[a] = (e + h[a - 7] | 0) + (i + h[a - 16] | 0)
            }
            for (var a = 0; a < 64; a++) {
                var e = (((g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + (g & O ^ ~g & s) | 0) + (D + (w[a] + h[a] | 0) | 0) | 0
                  , i = ((b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10)) + (b & _ ^ b & v ^ _ & v) | 0;
                D = s,
                s = O,
                O = g,
                g = C + e | 0,
                C = v,
                v = _,
                _ = b,
                b = e + i | 0
            }
            c[0] += b,
            c[1] += _,
            c[2] += v,
            c[3] += C,
            c[4] += g,
            c[5] += O,
            c[6] += s,
            c[7] += D,
            l += 64,
            E -= 64
        }
        return l
    }
    function U(h) {
        var c = new f;
        c.update(h);
        var d = c.digest();
        return c.clean(),
        d
    }
    t.hash = U
}
)(Jr);
var Qr = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
    const r = Ot
      , n = Ee;
    t.PUBLIC_KEY_LENGTH = 32,
    t.SECRET_KEY_LENGTH = 32,
    t.SHARED_KEY_LENGTH = 32;
    function f(a) {
        const o = new Float64Array(16);
        if (a)
            for (let u = 0; u < a.length; u++)
                o[u] = a[u];
        return o
    }
    const w = new Uint8Array(32);
    w[0] = 9;
    const S = f([56129, 1]);
    function U(a) {
        let o = 1;
        for (let u = 0; u < 16; u++) {
            let e = a[u] + o + 65535;
            o = Math.floor(e / 65536),
            a[u] = e - o * 65536
        }
        a[0] += o - 1 + 37 * (o - 1)
    }
    function h(a, o, u) {
        const e = ~(u - 1);
        for (let i = 0; i < 16; i++) {
            const y = e & (a[i] ^ o[i]);
            a[i] ^= y,
            o[i] ^= y
        }
    }
    function c(a, o) {
        const u = f()
          , e = f();
        for (let i = 0; i < 16; i++)
            e[i] = o[i];
        U(e),
        U(e),
        U(e);
        for (let i = 0; i < 2; i++) {
            u[0] = e[0] - 65517;
            for (let p = 1; p < 15; p++)
                u[p] = e[p] - 65535 - (u[p - 1] >> 16 & 1),
                u[p - 1] &= 65535;
            u[15] = e[15] - 32767 - (u[14] >> 16 & 1);
            const y = u[15] >> 16 & 1;
            u[14] &= 65535,
            h(e, u, 1 - y)
        }
        for (let i = 0; i < 16; i++)
            a[2 * i] = e[i] & 255,
            a[2 * i + 1] = e[i] >> 8
    }
    function d(a, o) {
        for (let u = 0; u < 16; u++)
            a[u] = o[2 * u] + (o[2 * u + 1] << 8);
        a[15] &= 32767
    }
    function l(a, o, u) {
        for (let e = 0; e < 16; e++)
            a[e] = o[e] + u[e]
    }
    function E(a, o, u) {
        for (let e = 0; e < 16; e++)
            a[e] = o[e] - u[e]
    }
    function b(a, o, u) {
        let e, i, y = 0, p = 0, F = 0, M = 0, j = 0, B = 0, T = 0, L = 0, m = 0, N = 0, G = 0, Q = 0, J = 0, X = 0, A = 0, R = 0, I = 0, H = 0, P = 0, K = 0, $ = 0, q = 0, z = 0, W = 0, V = 0, ve = 0, me = 0, Ae = 0, Te = 0, Pe = 0, ke = 0, k = u[0], ee = u[1], te = u[2], re = u[3], ne = u[4], ie = u[5], ae = u[6], ue = u[7], oe = u[8], fe = u[9], he = u[10], se = u[11], ce = u[12], De = u[13], le = u[14], _e = u[15];
        e = o[0],
        y += e * k,
        p += e * ee,
        F += e * te,
        M += e * re,
        j += e * ne,
        B += e * ie,
        T += e * ae,
        L += e * ue,
        m += e * oe,
        N += e * fe,
        G += e * he,
        Q += e * se,
        J += e * ce,
        X += e * De,
        A += e * le,
        R += e * _e,
        e = o[1],
        p += e * k,
        F += e * ee,
        M += e * te,
        j += e * re,
        B += e * ne,
        T += e * ie,
        L += e * ae,
        m += e * ue,
        N += e * oe,
        G += e * fe,
        Q += e * he,
        J += e * se,
        X += e * ce,
        A += e * De,
        R += e * le,
        I += e * _e,
        e = o[2],
        F += e * k,
        M += e * ee,
        j += e * te,
        B += e * re,
        T += e * ne,
        L += e * ie,
        m += e * ae,
        N += e * ue,
        G += e * oe,
        Q += e * fe,
        J += e * he,
        X += e * se,
        A += e * ce,
        R += e * De,
        I += e * le,
        H += e * _e,
        e = o[3],
        M += e * k,
        j += e * ee,
        B += e * te,
        T += e * re,
        L += e * ne,
        m += e * ie,
        N += e * ae,
        G += e * ue,
        Q += e * oe,
        J += e * fe,
        X += e * he,
        A += e * se,
        R += e * ce,
        I += e * De,
        H += e * le,
        P += e * _e,
        e = o[4],
        j += e * k,
        B += e * ee,
        T += e * te,
        L += e * re,
        m += e * ne,
        N += e * ie,
        G += e * ae,
        Q += e * ue,
        J += e * oe,
        X += e * fe,
        A += e * he,
        R += e * se,
        I += e * ce,
        H += e * De,
        P += e * le,
        K += e * _e,
        e = o[5],
        B += e * k,
        T += e * ee,
        L += e * te,
        m += e * re,
        N += e * ne,
        G += e * ie,
        Q += e * ae,
        J += e * ue,
        X += e * oe,
        A += e * fe,
        R += e * he,
        I += e * se,
        H += e * ce,
        P += e * De,
        K += e * le,
        $ += e * _e,
        e = o[6],
        T += e * k,
        L += e * ee,
        m += e * te,
        N += e * re,
        G += e * ne,
        Q += e * ie,
        J += e * ae,
        X += e * ue,
        A += e * oe,
        R += e * fe,
        I += e * he,
        H += e * se,
        P += e * ce,
        K += e * De,
        $ += e * le,
        q += e * _e,
        e = o[7],
        L += e * k,
        m += e * ee,
        N += e * te,
        G += e * re,
        Q += e * ne,
        J += e * ie,
        X += e * ae,
        A += e * ue,
        R += e * oe,
        I += e * fe,
        H += e * he,
        P += e * se,
        K += e * ce,
        $ += e * De,
        q += e * le,
        z += e * _e,
        e = o[8],
        m += e * k,
        N += e * ee,
        G += e * te,
        Q += e * re,
        J += e * ne,
        X += e * ie,
        A += e * ae,
        R += e * ue,
        I += e * oe,
        H += e * fe,
        P += e * he,
        K += e * se,
        $ += e * ce,
        q += e * De,
        z += e * le,
        W += e * _e,
        e = o[9],
        N += e * k,
        G += e * ee,
        Q += e * te,
        J += e * re,
        X += e * ne,
        A += e * ie,
        R += e * ae,
        I += e * ue,
        H += e * oe,
        P += e * fe,
        K += e * he,
        $ += e * se,
        q += e * ce,
        z += e * De,
        W += e * le,
        V += e * _e,
        e = o[10],
        G += e * k,
        Q += e * ee,
        J += e * te,
        X += e * re,
        A += e * ne,
        R += e * ie,
        I += e * ae,
        H += e * ue,
        P += e * oe,
        K += e * fe,
        $ += e * he,
        q += e * se,
        z += e * ce,
        W += e * De,
        V += e * le,
        ve += e * _e,
        e = o[11],
        Q += e * k,
        J += e * ee,
        X += e * te,
        A += e * re,
        R += e * ne,
        I += e * ie,
        H += e * ae,
        P += e * ue,
        K += e * oe,
        $ += e * fe,
        q += e * he,
        z += e * se,
        W += e * ce,
        V += e * De,
        ve += e * le,
        me += e * _e,
        e = o[12],
        J += e * k,
        X += e * ee,
        A += e * te,
        R += e * re,
        I += e * ne,
        H += e * ie,
        P += e * ae,
        K += e * ue,
        $ += e * oe,
        q += e * fe,
        z += e * he,
        W += e * se,
        V += e * ce,
        ve += e * De,
        me += e * le,
        Ae += e * _e,
        e = o[13],
        X += e * k,
        A += e * ee,
        R += e * te,
        I += e * re,
        H += e * ne,
        P += e * ie,
        K += e * ae,
        $ += e * ue,
        q += e * oe,
        z += e * fe,
        W += e * he,
        V += e * se,
        ve += e * ce,
        me += e * De,
        Ae += e * le,
        Te += e * _e,
        e = o[14],
        A += e * k,
        R += e * ee,
        I += e * te,
        H += e * re,
        P += e * ne,
        K += e * ie,
        $ += e * ae,
        q += e * ue,
        z += e * oe,
        W += e * fe,
        V += e * he,
        ve += e * se,
        me += e * ce,
        Ae += e * De,
        Te += e * le,
        Pe += e * _e,
        e = o[15],
        R += e * k,
        I += e * ee,
        H += e * te,
        P += e * re,
        K += e * ne,
        $ += e * ie,
        q += e * ae,
        z += e * ue,
        W += e * oe,
        V += e * fe,
        ve += e * he,
        me += e * se,
        Ae += e * ce,
        Te += e * De,
        Pe += e * le,
        ke += e * _e,
        y += 38 * I,
        p += 38 * H,
        F += 38 * P,
        M += 38 * K,
        j += 38 * $,
        B += 38 * q,
        T += 38 * z,
        L += 38 * W,
        m += 38 * V,
        N += 38 * ve,
        G += 38 * me,
        Q += 38 * Ae,
        J += 38 * Te,
        X += 38 * Pe,
        A += 38 * ke,
        i = 1,
        e = y + i + 65535,
        i = Math.floor(e / 65536),
        y = e - i * 65536,
        e = p + i + 65535,
        i = Math.floor(e / 65536),
        p = e - i * 65536,
        e = F + i + 65535,
        i = Math.floor(e / 65536),
        F = e - i * 65536,
        e = M + i + 65535,
        i = Math.floor(e / 65536),
        M = e - i * 65536,
        e = j + i + 65535,
        i = Math.floor(e / 65536),
        j = e - i * 65536,
        e = B + i + 65535,
        i = Math.floor(e / 65536),
        B = e - i * 65536,
        e = T + i + 65535,
        i = Math.floor(e / 65536),
        T = e - i * 65536,
        e = L + i + 65535,
        i = Math.floor(e / 65536),
        L = e - i * 65536,
        e = m + i + 65535,
        i = Math.floor(e / 65536),
        m = e - i * 65536,
        e = N + i + 65535,
        i = Math.floor(e / 65536),
        N = e - i * 65536,
        e = G + i + 65535,
        i = Math.floor(e / 65536),
        G = e - i * 65536,
        e = Q + i + 65535,
        i = Math.floor(e / 65536),
        Q = e - i * 65536,
        e = J + i + 65535,
        i = Math.floor(e / 65536),
        J = e - i * 65536,
        e = X + i + 65535,
        i = Math.floor(e / 65536),
        X = e - i * 65536,
        e = A + i + 65535,
        i = Math.floor(e / 65536),
        A = e - i * 65536,
        e = R + i + 65535,
        i = Math.floor(e / 65536),
        R = e - i * 65536,
        y += i - 1 + 37 * (i - 1),
        i = 1,
        e = y + i + 65535,
        i = Math.floor(e / 65536),
        y = e - i * 65536,
        e = p + i + 65535,
        i = Math.floor(e / 65536),
        p = e - i * 65536,
        e = F + i + 65535,
        i = Math.floor(e / 65536),
        F = e - i * 65536,
        e = M + i + 65535,
        i = Math.floor(e / 65536),
        M = e - i * 65536,
        e = j + i + 65535,
        i = Math.floor(e / 65536),
        j = e - i * 65536,
        e = B + i + 65535,
        i = Math.floor(e / 65536),
        B = e - i * 65536,
        e = T + i + 65535,
        i = Math.floor(e / 65536),
        T = e - i * 65536,
        e = L + i + 65535,
        i = Math.floor(e / 65536),
        L = e - i * 65536,
        e = m + i + 65535,
        i = Math.floor(e / 65536),
        m = e - i * 65536,
        e = N + i + 65535,
        i = Math.floor(e / 65536),
        N = e - i * 65536,
        e = G + i + 65535,
        i = Math.floor(e / 65536),
        G = e - i * 65536,
        e = Q + i + 65535,
        i = Math.floor(e / 65536),
        Q = e - i * 65536,
        e = J + i + 65535,
        i = Math.floor(e / 65536),
        J = e - i * 65536,
        e = X + i + 65535,
        i = Math.floor(e / 65536),
        X = e - i * 65536,
        e = A + i + 65535,
        i = Math.floor(e / 65536),
        A = e - i * 65536,
        e = R + i + 65535,
        i = Math.floor(e / 65536),
        R = e - i * 65536,
        y += i - 1 + 37 * (i - 1),
        a[0] = y,
        a[1] = p,
        a[2] = F,
        a[3] = M,
        a[4] = j,
        a[5] = B,
        a[6] = T,
        a[7] = L,
        a[8] = m,
        a[9] = N,
        a[10] = G,
        a[11] = Q,
        a[12] = J,
        a[13] = X,
        a[14] = A,
        a[15] = R
    }
    function _(a, o) {
        b(a, o, o)
    }
    function v(a, o) {
        const u = f();
        for (let e = 0; e < 16; e++)
            u[e] = o[e];
        for (let e = 253; e >= 0; e--)
            _(u, u),
            e !== 2 && e !== 4 && b(u, u, o);
        for (let e = 0; e < 16; e++)
            a[e] = u[e]
    }
    function C(a, o) {
        const u = new Uint8Array(32)
          , e = new Float64Array(80)
          , i = f()
          , y = f()
          , p = f()
          , F = f()
          , M = f()
          , j = f();
        for (let m = 0; m < 31; m++)
            u[m] = a[m];
        u[31] = a[31] & 127 | 64,
        u[0] &= 248,
        d(e, o);
        for (let m = 0; m < 16; m++)
            y[m] = e[m];
        i[0] = F[0] = 1;
        for (let m = 254; m >= 0; --m) {
            const N = u[m >>> 3] >>> (m & 7) & 1;
            h(i, y, N),
            h(p, F, N),
            l(M, i, p),
            E(i, i, p),
            l(p, y, F),
            E(y, y, F),
            _(F, M),
            _(j, i),
            b(i, p, i),
            b(p, y, M),
            l(M, i, p),
            E(i, i, p),
            _(y, i),
            E(p, F, j),
            b(i, p, S),
            l(i, i, F),
            b(p, p, i),
            b(i, F, j),
            b(F, y, e),
            _(y, M),
            h(i, y, N),
            h(p, F, N)
        }
        for (let m = 0; m < 16; m++)
            e[m + 16] = i[m],
            e[m + 32] = p[m],
            e[m + 48] = y[m],
            e[m + 64] = F[m];
        const B = e.subarray(32)
          , T = e.subarray(16);
        v(B, B),
        b(T, T, B);
        const L = new Uint8Array(32);
        return c(L, T),
        L
    }
    t.scalarMult = C;
    function g(a) {
        return C(a, w)
    }
    t.scalarMultBase = g;
    function O(a) {
        if (a.length !== t.SECRET_KEY_LENGTH)
            throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
        const o = new Uint8Array(a);
        return {
            publicKey: g(o),
            secretKey: o
        }
    }
    t.generateKeyPairFromSeed = O;
    function s(a) {
        const o = (0,
        r.randomBytes)(32, a)
          , u = O(o);
        return (0,
        n.wipe)(o),
        u
    }
    t.generateKeyPair = s;
    function D(a, o, u=!1) {
        if (a.length !== t.PUBLIC_KEY_LENGTH)
            throw new Error("X25519: incorrect secret key length");
        if (o.length !== t.PUBLIC_KEY_LENGTH)
            throw new Error("X25519: incorrect public key length");
        const e = C(a, o);
        if (u) {
            let i = 0;
            for (let y = 0; y < e.length; y++)
                i |= e[y];
            if (i === 0)
                throw new Error("X25519: invalid shared key")
        }
        return e
    }
    t.sharedKey = D
}
)(Qr);
function Zr(t, r) {
    if (t.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var n = new Uint8Array(256), f = 0; f < n.length; f++)
        n[f] = 255;
    for (var w = 0; w < t.length; w++) {
        var S = t.charAt(w)
          , U = S.charCodeAt(0);
        if (n[U] !== 255)
            throw new TypeError(S + " is ambiguous");
        n[U] = w
    }
    var h = t.length
      , c = t.charAt(0)
      , d = Math.log(h) / Math.log(256)
      , l = Math.log(256) / Math.log(h);
    function E(v) {
        if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer,v.byteOffset,v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))),
        !(v instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (v.length === 0)
            return "";
        for (var C = 0, g = 0, O = 0, s = v.length; O !== s && v[O] === 0; )
            O++,
            C++;
        for (var D = (s - O) * l + 1 >>> 0, a = new Uint8Array(D); O !== s; ) {
            for (var o = v[O], u = 0, e = D - 1; (o !== 0 || u < g) && e !== -1; e--,
            u++)
                o += 256 * a[e] >>> 0,
                a[e] = o % h >>> 0,
                o = o / h >>> 0;
            if (o !== 0)
                throw new Error("Non-zero carry");
            g = u,
            O++
        }
        for (var i = D - g; i !== D && a[i] === 0; )
            i++;
        for (var y = c.repeat(C); i < D; ++i)
            y += t.charAt(a[i]);
        return y
    }
    function b(v) {
        if (typeof v != "string")
            throw new TypeError("Expected String");
        if (v.length === 0)
            return new Uint8Array;
        var C = 0;
        if (v[C] !== " ") {
            for (var g = 0, O = 0; v[C] === c; )
                g++,
                C++;
            for (var s = (v.length - C) * d + 1 >>> 0, D = new Uint8Array(s); v[C]; ) {
                var a = n[v.charCodeAt(C)];
                if (a === 255)
                    return;
                for (var o = 0, u = s - 1; (a !== 0 || o < O) && u !== -1; u--,
                o++)
                    a += h * D[u] >>> 0,
                    D[u] = a % 256 >>> 0,
                    a = a / 256 >>> 0;
                if (a !== 0)
                    throw new Error("Non-zero carry");
                O = o,
                C++
            }
            if (v[C] !== " ") {
                for (var e = s - O; e !== s && D[e] === 0; )
                    e++;
                for (var i = new Uint8Array(g + (s - e)), y = g; e !== s; )
                    i[y++] = D[e++];
                return i
            }
        }
    }
    function _(v) {
        var C = b(v);
        if (C)
            return C;
        throw new Error(`Non-${r} character`)
    }
    return {
        encode: E,
        decodeUnsafe: b,
        decode: _
    }
}
var kr = Zr
  , en = kr;
const tn = t=>{
    if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
        return t;
    if (t instanceof ArrayBuffer)
        return new Uint8Array(t);
    if (ArrayBuffer.isView(t))
        return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , rn = t=>new TextEncoder().encode(t)
  , nn = t=>new TextDecoder().decode(t);
class an {
    constructor(r, n, f) {
        this.name = r,
        this.prefix = n,
        this.baseEncode = f
    }
    encode(r) {
        if (r instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(r)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class un {
    constructor(r, n, f) {
        if (this.name = r,
        this.prefix = n,
        n.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = n.codePointAt(0),
        this.baseDecode = f
    }
    decode(r) {
        if (typeof r == "string") {
            if (r.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(r)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(r.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(r) {
        return Ft(this, r)
    }
}
class on {
    constructor(r) {
        this.decoders = r
    }
    or(r) {
        return Ft(this, r)
    }
    decode(r) {
        const n = r[0]
          , f = this.decoders[n];
        if (f)
            return f.decode(r);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(r)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const Ft = (t,r)=>new on({
    ...t.decoders || {
        [t.prefix]: t
    },
    ...r.decoders || {
        [r.prefix]: r
    }
});
class fn {
    constructor(r, n, f, w) {
        this.name = r,
        this.prefix = n,
        this.baseEncode = f,
        this.baseDecode = w,
        this.encoder = new an(r,n,f),
        this.decoder = new un(r,n,w)
    }
    encode(r) {
        return this.encoder.encode(r)
    }
    decode(r) {
        return this.decoder.decode(r)
    }
}
const He = ({name: t, prefix: r, encode: n, decode: f})=>new fn(t,r,n,f)
  , Ne = ({prefix: t, name: r, alphabet: n})=>{
    const {encode: f, decode: w} = en(n, r);
    return He({
        prefix: t,
        name: r,
        encode: f,
        decode: S=>tn(w(S))
    })
}
  , hn = (t,r,n,f)=>{
    const w = {};
    for (let l = 0; l < r.length; ++l)
        w[r[l]] = l;
    let S = t.length;
    for (; t[S - 1] === "="; )
        --S;
    const U = new Uint8Array(S * n / 8 | 0);
    let h = 0
      , c = 0
      , d = 0;
    for (let l = 0; l < S; ++l) {
        const E = w[t[l]];
        if (E === void 0)
            throw new SyntaxError(`Non-${f} character`);
        c = c << n | E,
        h += n,
        h >= 8 && (h -= 8,
        U[d++] = 255 & c >> h)
    }
    if (h >= n || 255 & c << 8 - h)
        throw new SyntaxError("Unexpected end of data");
    return U
}
  , sn = (t,r,n)=>{
    const f = r[r.length - 1] === "="
      , w = (1 << n) - 1;
    let S = ""
      , U = 0
      , h = 0;
    for (let c = 0; c < t.length; ++c)
        for (h = h << 8 | t[c],
        U += 8; U > n; )
            U -= n,
            S += r[w & h >> U];
    if (U && (S += r[w & h << n - U]),
    f)
        for (; S.length * n & 7; )
            S += "=";
    return S
}
  , Z = ({name: t, prefix: r, bitsPerChar: n, alphabet: f})=>He({
    prefix: r,
    name: t,
    encode(w) {
        return sn(w, f, n)
    },
    decode(w) {
        return hn(w, f, n, t)
    }
})
  , cn = He({
    prefix: "\0",
    name: "identity",
    encode: t=>nn(t),
    decode: t=>rn(t)
})
  , $n = Object.freeze(Object.defineProperty({
    __proto__: null,
    identity: cn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Dn = Z({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
})
  , qn = Object.freeze(Object.defineProperty({
    __proto__: null,
    base2: Dn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ln = Z({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
})
  , zn = Object.freeze(Object.defineProperty({
    __proto__: null,
    base8: ln
}, Symbol.toStringTag, {
    value: "Module"
}))
  , _n = Ne({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
})
  , Yn = Object.freeze(Object.defineProperty({
    __proto__: null,
    base10: _n
}, Symbol.toStringTag, {
    value: "Module"
}))
  , dn = Z({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , En = Z({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
})
  , Wn = Object.freeze(Object.defineProperty({
    __proto__: null,
    base16: dn,
    base16upper: En
}, Symbol.toStringTag, {
    value: "Module"
}))
  , bn = Z({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , wn = Z({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , vn = Z({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , gn = Z({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , yn = Z({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , Sn = Z({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , mn = Z({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , Cn = Z({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , pn = Z({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
})
  , Gn = Object.freeze(Object.defineProperty({
    __proto__: null,
    base32: bn,
    base32hex: yn,
    base32hexpad: mn,
    base32hexpadupper: Cn,
    base32hexupper: Sn,
    base32pad: vn,
    base32padupper: gn,
    base32upper: wn,
    base32z: pn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , An = Ne({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , Un = Ne({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
})
  , Vn = Object.freeze(Object.defineProperty({
    __proto__: null,
    base36: An,
    base36upper: Un
}, Symbol.toStringTag, {
    value: "Module"
}))
  , On = Ne({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , Fn = Ne({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
})
  , Xn = Object.freeze(Object.defineProperty({
    __proto__: null,
    base58btc: On,
    base58flickr: Fn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Nn = Z({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , Tn = Z({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , Ln = Z({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , Mn = Z({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
})
  , Jn = Object.freeze(Object.defineProperty({
    __proto__: null,
    base64: Nn,
    base64pad: Tn,
    base64url: Ln,
    base64urlpad: Mn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Nt = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂")
  , Bn = Nt.reduce((t,r,n)=>(t[n] = r,
t), [])
  , xn = Nt.reduce((t,r,n)=>(t[r.codePointAt(0)] = n,
t), []);
function jn(t) {
    return t.reduce((r,n)=>(r += Bn[n],
    r), "")
}
function Rn(t) {
    const r = [];
    for (const n of t) {
        const f = xn[n.codePointAt(0)];
        if (f === void 0)
            throw new Error(`Non-base256emoji character: ${n}`);
        r.push(f)
    }
    return new Uint8Array(r)
}
const In = He({
    prefix: "🚀",
    name: "base256emoji",
    encode: jn,
    decode: Rn
})
  , Qn = Object.freeze(Object.defineProperty({
    __proto__: null,
    base256emoji: In
}, Symbol.toStringTag, {
    value: "Module"
}));
new TextEncoder;
new TextDecoder;
export {Kn as H, zn as a, qn as b, Yn as c, Wn as d, Gn as e, Vn as f, Xn as g, Jn as h, $n as i, Qn as j, x as k, Lt as l, er as m, Wt as n, qt as o, hr as p, rr as q, Ot as r, Jr as s, Xt as t, Ee as w, Qr as x};
