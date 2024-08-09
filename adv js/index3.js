function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["assets/index-CQaM2H4M.js", "assets/index-BwO_io0Y.js", "assets/index-B4bwCT_F.css"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
import {f as $r, g as iw, h as go, i as Sf, j as Pf, o as tl, k as Co, H as Ao, U as Uc, _ as sw} from "./index-BwO_io0Y.js";
import {i as nw, b as ow, a as aw, c as cw, d as uw, e as hw, f as lw, g as fw, h as pw, j as dw, k as gw, w as Of, r as $o, l as X, m as yw, s as zc, n as Rf, o as Nf, x as Tf, H as vw, p as Cf, q as So, t as mw} from "./json-Bo5x8dzg.js";
import "./___vite-browser-external_commonjs-proxy-B5-HO_on.js";
var rl = function(s, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, a = t.length, h; n < a; n++)
            (h || !(n in t)) && (h || (h = Array.prototype.slice.call(t, 0, n)),
            h[n] = t[n]);
    return s.concat(h || Array.prototype.slice.call(t))
}
  , ww = function() {
    function s(t, r, n) {
        this.name = t,
        this.version = r,
        this.os = n,
        this.type = "browser"
    }
    return s
}()
  , bw = function() {
    function s(t) {
        this.version = t,
        this.type = "node",
        this.name = "node",
        this.os = process.platform
    }
    return s
}()
  , _w = function() {
    function s(t, r, n, a) {
        this.name = t,
        this.version = r,
        this.os = n,
        this.bot = a,
        this.type = "bot-device"
    }
    return s
}()
  , Ew = function() {
    function s() {
        this.type = "bot",
        this.bot = !0,
        this.name = "bot",
        this.version = null,
        this.os = null
    }
    return s
}()
  , Iw = function() {
    function s() {
        this.type = "react-native",
        this.name = "react-native",
        this.version = null,
        this.os = null
    }
    return s
}()
  , xw = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/
  , Sw = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/
  , il = 3
  , Pw = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["edge-ios", /EdgiOS\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /EdgA?\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/], ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/], ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FB[AS]V\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["curl", /^curl\/([0-9\.]+)$/], ["searchbot", xw]]
  , sl = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/]];
function Ow(s) {
    return s ? nl(s) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Iw : typeof navigator < "u" ? nl(navigator.userAgent) : Tw()
}
function Rw(s) {
    return s !== "" && Pw.reduce(function(t, r) {
        var n = r[0]
          , a = r[1];
        if (t)
            return t;
        var h = a.exec(s);
        return !!h && [n, h]
    }, !1)
}
function nl(s) {
    var t = Rw(s);
    if (!t)
        return null;
    var r = t[0]
      , n = t[1];
    if (r === "searchbot")
        return new Ew;
    var a = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
    a ? a.length < il && (a = rl(rl([], a, !0), Cw(il - a.length), !0)) : a = [];
    var h = a.join(".")
      , f = Nw(s)
      , y = Sw.exec(s);
    return y && y[1] ? new _w(r,h,f,y[1]) : new ww(r,h,f)
}
function Nw(s) {
    for (var t = 0, r = sl.length; t < r; t++) {
        var n = sl[t]
          , a = n[0]
          , h = n[1]
          , f = h.exec(s);
        if (f)
            return a
    }
    return null
}
function Tw() {
    var s = typeof process < "u" && process.version;
    return s ? new bw(process.version.slice(1)) : null
}
function Cw(s) {
    for (var t = [], r = 0; r < s; r++)
        t.push("0");
    return t
}
const ol = {
    ...nw,
    ...ow,
    ...aw,
    ...cw,
    ...uw,
    ...hw,
    ...lw,
    ...fw,
    ...pw,
    ...dw
}
  , Aw = {
    waku: {
        publish: "waku_publish",
        batchPublish: "waku_batchPublish",
        subscribe: "waku_subscribe",
        batchSubscribe: "waku_batchSubscribe",
        subscription: "waku_subscription",
        unsubscribe: "waku_unsubscribe",
        batchUnsubscribe: "waku_batchUnsubscribe",
        batchFetchMessages: "waku_batchFetchMessages"
    },
    irn: {
        publish: "irn_publish",
        batchPublish: "irn_batchPublish",
        subscribe: "irn_subscribe",
        batchSubscribe: "irn_batchSubscribe",
        subscription: "irn_subscription",
        unsubscribe: "irn_unsubscribe",
        batchUnsubscribe: "irn_batchUnsubscribe",
        batchFetchMessages: "irn_batchFetchMessages"
    },
    iridium: {
        publish: "iridium_publish",
        batchPublish: "iridium_batchPublish",
        subscribe: "iridium_subscribe",
        batchSubscribe: "iridium_batchSubscribe",
        subscription: "iridium_subscription",
        unsubscribe: "iridium_unsubscribe",
        batchUnsubscribe: "iridium_batchUnsubscribe",
        batchFetchMessages: "iridium_batchFetchMessages"
    }
}
  , $w = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , Dw = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , Mw = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function qw(s, t) {
    if (s === "__proto__" || s === "constructor" && t && typeof t == "object" && "prototype"in t) {
        jw(s);
        return
    }
    return t
}
function jw(s) {
    console.warn(`[destr] Dropping "${s}" key to prevent prototype pollution.`)
}
function yo(s, t={}) {
    if (typeof s != "string")
        return s;
    const r = s.trim();
    if (s[0] === '"' && s.endsWith('"') && !s.includes("\\"))
        return r.slice(1, -1);
    if (r.length <= 9) {
        const n = r.toLowerCase();
        if (n === "true")
            return !0;
        if (n === "false")
            return !1;
        if (n === "undefined")
            return;
        if (n === "null")
            return null;
        if (n === "nan")
            return Number.NaN;
        if (n === "infinity")
            return Number.POSITIVE_INFINITY;
        if (n === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!Mw.test(s)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return s
    }
    try {
        if ($w.test(s) || Dw.test(s)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(s, qw)
        }
        return JSON.parse(s)
    } catch (n) {
        if (t.strict)
            throw n;
        return s
    }
}
function Lw(s) {
    return !s || typeof s.then != "function" ? Promise.resolve(s) : s
}
function qt(s, ...t) {
    try {
        return Lw(s(...t))
    } catch (r) {
        return Promise.reject(r)
    }
}
function Uw(s) {
    const t = typeof s;
    return s === null || t !== "object" && t !== "function"
}
function zw(s) {
    const t = Object.getPrototypeOf(s);
    return !t || t.isPrototypeOf(Object)
}
function Eo(s) {
    if (Uw(s))
        return String(s);
    if (zw(s) || Array.isArray(s))
        return JSON.stringify(s);
    if (typeof s.toJSON == "function")
        return Eo(s.toJSON());
    throw new Error("[unstorage] Cannot stringify value!")
}
function Af() {
    if (typeof Buffer === void 0)
        throw new TypeError("[unstorage] Buffer is not supported!")
}
const Oc = "base64:";
function kw(s) {
    if (typeof s == "string")
        return s;
    Af();
    const t = Buffer.from(s).toString("base64");
    return Oc + t
}
function Hw(s) {
    return typeof s != "string" || !s.startsWith(Oc) ? s : (Af(),
    Buffer.from(s.slice(Oc.length), "base64"))
}
function ur(s) {
    return s ? s.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
}
function Kw(...s) {
    return ur(s.join(":"))
}
function vo(s) {
    return s = ur(s),
    s ? s + ":" : ""
}
const Vw = "memory"
  , Bw = ()=>{
    const s = new Map;
    return {
        name: Vw,
        options: {},
        hasItem(t) {
            return s.has(t)
        },
        getItem(t) {
            return s.get(t) ?? null
        },
        getItemRaw(t) {
            return s.get(t) ?? null
        },
        setItem(t, r) {
            s.set(t, r)
        },
        setItemRaw(t, r) {
            s.set(t, r)
        },
        removeItem(t) {
            s.delete(t)
        },
        getKeys() {
            return Array.from(s.keys())
        },
        clear() {
            s.clear()
        },
        dispose() {
            s.clear()
        }
    }
}
;
function Fw(s={}) {
    const t = {
        mounts: {
            "": s.driver || Bw()
        },
        mountpoints: [""],
        watching: !1,
        watchListeners: [],
        unwatch: {}
    }
      , r = v=>{
        for (const E of t.mountpoints)
            if (v.startsWith(E))
                return {
                    base: E,
                    relativeKey: v.slice(E.length),
                    driver: t.mounts[E]
                };
        return {
            base: "",
            relativeKey: v,
            driver: t.mounts[""]
        }
    }
      , n = (v,E)=>t.mountpoints.filter(P=>P.startsWith(v) || E && v.startsWith(P)).map(P=>({
        relativeBase: v.length > P.length ? v.slice(P.length) : void 0,
        mountpoint: P,
        driver: t.mounts[P]
    }))
      , a = (v,E)=>{
        if (t.watching) {
            E = ur(E);
            for (const P of t.watchListeners)
                P(v, E)
        }
    }
      , h = async()=>{
        if (!t.watching) {
            t.watching = !0;
            for (const v in t.mounts)
                t.unwatch[v] = await al(t.mounts[v], a, v)
        }
    }
      , f = async()=>{
        if (t.watching) {
            for (const v in t.unwatch)
                await t.unwatch[v]();
            t.unwatch = {},
            t.watching = !1
        }
    }
      , y = (v,E,P)=>{
        const C = new Map
          , z = M=>{
            let Z = C.get(M.base);
            return Z || (Z = {
                driver: M.driver,
                base: M.base,
                items: []
            },
            C.set(M.base, Z)),
            Z
        }
        ;
        for (const M of v) {
            const Z = typeof M == "string"
              , ne = ur(Z ? M : M.key)
              , oe = Z ? void 0 : M.value
              , le = Z || !M.options ? E : {
                ...E,
                ...M.options
            }
              , ge = r(ne);
            z(ge).items.push({
                key: ne,
                value: oe,
                relativeKey: ge.relativeKey,
                options: le
            })
        }
        return Promise.all([...C.values()].map(M=>P(M))).then(M=>M.flat())
    }
      , w = {
        hasItem(v, E={}) {
            v = ur(v);
            const {relativeKey: P, driver: C} = r(v);
            return qt(C.hasItem, P, E)
        },
        getItem(v, E={}) {
            v = ur(v);
            const {relativeKey: P, driver: C} = r(v);
            return qt(C.getItem, P, E).then(z=>yo(z))
        },
        getItems(v, E) {
            return y(v, E, P=>P.driver.getItems ? qt(P.driver.getItems, P.items.map(C=>({
                key: C.relativeKey,
                options: C.options
            })), E).then(C=>C.map(z=>({
                key: Kw(P.base, z.key),
                value: yo(z.value)
            }))) : Promise.all(P.items.map(C=>qt(P.driver.getItem, C.relativeKey, C.options).then(z=>({
                key: C.key,
                value: yo(z)
            })))))
        },
        getItemRaw(v, E={}) {
            v = ur(v);
            const {relativeKey: P, driver: C} = r(v);
            return C.getItemRaw ? qt(C.getItemRaw, P, E) : qt(C.getItem, P, E).then(z=>Hw(z))
        },
        async setItem(v, E, P={}) {
            if (E === void 0)
                return w.removeItem(v);
            v = ur(v);
            const {relativeKey: C, driver: z} = r(v);
            z.setItem && (await qt(z.setItem, C, Eo(E), P),
            z.watch || a("update", v))
        },
        async setItems(v, E) {
            await y(v, E, async P=>{
                if (P.driver.setItems)
                    return qt(P.driver.setItems, P.items.map(C=>({
                        key: C.relativeKey,
                        value: Eo(C.value),
                        options: C.options
                    })), E);
                P.driver.setItem && await Promise.all(P.items.map(C=>qt(P.driver.setItem, C.relativeKey, Eo(C.value), C.options)))
            }
            )
        },
        async setItemRaw(v, E, P={}) {
            if (E === void 0)
                return w.removeItem(v, P);
            v = ur(v);
            const {relativeKey: C, driver: z} = r(v);
            if (z.setItemRaw)
                await qt(z.setItemRaw, C, E, P);
            else if (z.setItem)
                await qt(z.setItem, C, kw(E), P);
            else
                return;
            z.watch || a("update", v)
        },
        async removeItem(v, E={}) {
            typeof E == "boolean" && (E = {
                removeMeta: E
            }),
            v = ur(v);
            const {relativeKey: P, driver: C} = r(v);
            C.removeItem && (await qt(C.removeItem, P, E),
            (E.removeMeta || E.removeMata) && await qt(C.removeItem, P + "$", E),
            C.watch || a("remove", v))
        },
        async getMeta(v, E={}) {
            typeof E == "boolean" && (E = {
                nativeOnly: E
            }),
            v = ur(v);
            const {relativeKey: P, driver: C} = r(v)
              , z = Object.create(null);
            if (C.getMeta && Object.assign(z, await qt(C.getMeta, P, E)),
            !E.nativeOnly) {
                const M = await qt(C.getItem, P + "$", E).then(Z=>yo(Z));
                M && typeof M == "object" && (typeof M.atime == "string" && (M.atime = new Date(M.atime)),
                typeof M.mtime == "string" && (M.mtime = new Date(M.mtime)),
                Object.assign(z, M))
            }
            return z
        },
        setMeta(v, E, P={}) {
            return this.setItem(v + "$", E, P)
        },
        removeMeta(v, E={}) {
            return this.removeItem(v + "$", E)
        },
        async getKeys(v, E={}) {
            v = vo(v);
            const P = n(v, !0);
            let C = [];
            const z = [];
            for (const M of P) {
                const ne = (await qt(M.driver.getKeys, M.relativeBase, E)).map(oe=>M.mountpoint + ur(oe)).filter(oe=>!C.some(le=>oe.startsWith(le)));
                z.push(...ne),
                C = [M.mountpoint, ...C.filter(oe=>!oe.startsWith(M.mountpoint))]
            }
            return v ? z.filter(M=>M.startsWith(v) && !M.endsWith("$")) : z.filter(M=>!M.endsWith("$"))
        },
        async clear(v, E={}) {
            v = vo(v),
            await Promise.all(n(v, !1).map(async P=>{
                if (P.driver.clear)
                    return qt(P.driver.clear, P.relativeBase, E);
                if (P.driver.removeItem) {
                    const C = await P.driver.getKeys(P.relativeBase || "", E);
                    return Promise.all(C.map(z=>P.driver.removeItem(z, E)))
                }
            }
            ))
        },
        async dispose() {
            await Promise.all(Object.values(t.mounts).map(v=>cl(v)))
        },
        async watch(v) {
            return await h(),
            t.watchListeners.push(v),
            async()=>{
                t.watchListeners = t.watchListeners.filter(E=>E !== v),
                t.watchListeners.length === 0 && await f()
            }
        },
        async unwatch() {
            t.watchListeners = [],
            await f()
        },
        mount(v, E) {
            if (v = vo(v),
            v && t.mounts[v])
                throw new Error(`already mounted at ${v}`);
            return v && (t.mountpoints.push(v),
            t.mountpoints.sort((P,C)=>C.length - P.length)),
            t.mounts[v] = E,
            t.watching && Promise.resolve(al(E, a, v)).then(P=>{
                t.unwatch[v] = P
            }
            ).catch(console.error),
            w
        },
        async unmount(v, E=!0) {
            v = vo(v),
            !(!v || !t.mounts[v]) && (t.watching && v in t.unwatch && (t.unwatch[v](),
            delete t.unwatch[v]),
            E && await cl(t.mounts[v]),
            t.mountpoints = t.mountpoints.filter(P=>P !== v),
            delete t.mounts[v])
        },
        getMount(v="") {
            v = ur(v) + ":";
            const E = r(v);
            return {
                driver: E.driver,
                base: E.base
            }
        },
        getMounts(v="", E={}) {
            return v = ur(v),
            n(v, E.parents).map(C=>({
                driver: C.driver,
                base: C.mountpoint
            }))
        }
    };
    return w
}
function al(s, t, r) {
    return s.watch ? s.watch((n,a)=>t(n, r + a)) : ()=>{}
}
async function cl(s) {
    typeof s.dispose == "function" && await qt(s.dispose)
}
function Gi(s) {
    return new Promise((t,r)=>{
        s.oncomplete = s.onsuccess = ()=>t(s.result),
        s.onabort = s.onerror = ()=>r(s.error)
    }
    )
}
function $f(s, t) {
    const r = indexedDB.open(s);
    r.onupgradeneeded = ()=>r.result.createObjectStore(t);
    const n = Gi(r);
    return (a,h)=>n.then(f=>h(f.transaction(t, a).objectStore(t)))
}
let hc;
function sn() {
    return hc || (hc = $f("keyval-store", "keyval")),
    hc
}
function ul(s, t=sn()) {
    return t("readonly", r=>Gi(r.get(s)))
}
function Ww(s, t, r=sn()) {
    return r("readwrite", n=>(n.put(t, s),
    Gi(n.transaction)))
}
function Gw(s, t=sn()) {
    return t("readwrite", r=>(r.delete(s),
    Gi(r.transaction)))
}
function Jw(s=sn()) {
    return s("readwrite", t=>(t.clear(),
    Gi(t.transaction)))
}
function Qw(s, t) {
    return s.openCursor().onsuccess = function() {
        this.result && (t(this.result),
        this.result.continue())
    }
    ,
    Gi(s.transaction)
}
function Yw(s=sn()) {
    return s("readonly", t=>{
        if (t.getAllKeys)
            return Gi(t.getAllKeys());
        const r = [];
        return Qw(t, n=>r.push(n.key)).then(()=>r)
    }
    )
}
const Xw = s=>JSON.stringify(s, (t,r)=>typeof r == "bigint" ? r.toString() + "n" : r)
  , Zw = s=>{
    const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g
      , r = s.replace(t, '$1"$2n"$3');
    return JSON.parse(r, (n,a)=>typeof a == "string" && a.match(/^\d+n$/) ? BigInt(a.substring(0, a.length - 1)) : a)
}
;
function nn(s) {
    if (typeof s != "string")
        throw new Error(`Cannot safe json parse value of type ${typeof s}`);
    try {
        return Zw(s)
    } catch {
        return s
    }
}
function Wi(s) {
    return typeof s == "string" ? s : Xw(s) || ""
}
const eb = "idb-keyval";
var tb = (s={})=>{
    const t = s.base && s.base.length > 0 ? `${s.base}:` : ""
      , r = a=>t + a;
    let n;
    return s.dbName && s.storeName && (n = $f(s.dbName, s.storeName)),
    {
        name: eb,
        options: s,
        async hasItem(a) {
            return !(typeof await ul(r(a), n) > "u")
        },
        async getItem(a) {
            return await ul(r(a), n) ?? null
        },
        setItem(a, h) {
            return Ww(r(a), h, n)
        },
        removeItem(a) {
            return Gw(r(a), n)
        },
        getKeys() {
            return Yw(n)
        },
        clear() {
            return Jw(n)
        }
    }
}
;
const rb = "WALLET_CONNECT_V2_INDEXED_DB"
  , ib = "keyvaluestorage";
let sb = class {
    constructor() {
        this.indexedDb = Fw({
            driver: tb({
                dbName: rb,
                storeName: ib
            })
        })
    }
    async getKeys() {
        return this.indexedDb.getKeys()
    }
    async getEntries() {
        return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(t=>[t.key, t.value])
    }
    async getItem(t) {
        const r = await this.indexedDb.getItem(t);
        if (r !== null)
            return r
    }
    async setItem(t, r) {
        await this.indexedDb.setItem(t, Wi(r))
    }
    async removeItem(t) {
        await this.indexedDb.removeItem(t)
    }
}
;
var lc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Io = {
    exports: {}
};
(function() {
    let s;
    function t() {}
    s = t,
    s.prototype.getItem = function(r) {
        return this.hasOwnProperty(r) ? String(this[r]) : null
    }
    ,
    s.prototype.setItem = function(r, n) {
        this[r] = String(n)
    }
    ,
    s.prototype.removeItem = function(r) {
        delete this[r]
    }
    ,
    s.prototype.clear = function() {
        const r = this;
        Object.keys(r).forEach(function(n) {
            r[n] = void 0,
            delete r[n]
        })
    }
    ,
    s.prototype.key = function(r) {
        return r = r || 0,
        Object.keys(this)[r]
    }
    ,
    s.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length
    }),
    typeof lc < "u" && lc.localStorage ? Io.exports = lc.localStorage : typeof window < "u" && window.localStorage ? Io.exports = window.localStorage : Io.exports = new t
}
)();
function nb(s) {
    var t;
    return [s[0], nn((t = s[1]) != null ? t : "")]
}
let ob = class {
    constructor() {
        this.localStorage = Io.exports
    }
    async getKeys() {
        return Object.keys(this.localStorage)
    }
    async getEntries() {
        return Object.entries(this.localStorage).map(nb)
    }
    async getItem(t) {
        const r = this.localStorage.getItem(t);
        if (r !== null)
            return nn(r)
    }
    async setItem(t, r) {
        this.localStorage.setItem(t, Wi(r))
    }
    async removeItem(t) {
        this.localStorage.removeItem(t)
    }
}
;
const ab = "wc_storage_version"
  , hl = 1
  , cb = async(s,t,r)=>{
    const n = ab
      , a = await t.getItem(n);
    if (a && a >= hl) {
        r(t);
        return
    }
    const h = await s.getKeys();
    if (!h.length) {
        r(t);
        return
    }
    const f = [];
    for (; h.length; ) {
        const y = h.shift();
        if (!y)
            continue;
        const w = y.toLowerCase();
        if (w.includes("wc@") || w.includes("walletconnect") || w.includes("wc_") || w.includes("wallet_connect")) {
            const v = await s.getItem(y);
            await t.setItem(y, v),
            f.push(y)
        }
    }
    await t.setItem(n, hl),
    r(t),
    ub(s, f)
}
  , ub = async(s,t)=>{
    t.length && t.forEach(async r=>{
        await s.removeItem(r)
    }
    )
}
;
let hb = class {
    constructor() {
        this.initialized = !1,
        this.setInitialized = r=>{
            this.storage = r,
            this.initialized = !0
        }
        ;
        const t = new ob;
        this.storage = t;
        try {
            const r = new sb;
            cb(t, r, this.setInitialized)
        } catch {
            this.initialized = !0
        }
    }
    async getKeys() {
        return await this.initialize(),
        this.storage.getKeys()
    }
    async getEntries() {
        return await this.initialize(),
        this.storage.getEntries()
    }
    async getItem(t) {
        return await this.initialize(),
        this.storage.getItem(t)
    }
    async setItem(t, r) {
        return await this.initialize(),
        this.storage.setItem(t, r)
    }
    async removeItem(t) {
        return await this.initialize(),
        this.storage.removeItem(t)
    }
    async initialize() {
        this.initialized || await new Promise(t=>{
            const r = setInterval(()=>{
                this.initialized && (clearInterval(r),
                t())
            }
            , 20)
        }
        )
    }
}
  , Ji = class {
}
;
const lb = Object.freeze(Object.defineProperty({
    __proto__: null,
    IEvents: Ji
}, Symbol.toStringTag, {
    value: "Module"
}))
  , fb = {
    level: "info"
}
  , on = "custom_context";
var pb = Object.defineProperty
  , db = Object.defineProperties
  , gb = Object.getOwnPropertyDescriptors
  , ll = Object.getOwnPropertySymbols
  , yb = Object.prototype.hasOwnProperty
  , vb = Object.prototype.propertyIsEnumerable
  , fl = (s,t,r)=>t in s ? pb(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , mb = (s,t)=>{
    for (var r in t || (t = {}))
        yb.call(t, r) && fl(s, r, t[r]);
    if (ll)
        for (var r of ll(t))
            vb.call(t, r) && fl(s, r, t[r]);
    return s
}
  , wb = (s,t)=>db(s, gb(t));
function Do(s) {
    return wb(mb({}, s), {
        level: (s == null ? void 0 : s.level) || fb.level
    })
}
function bb(s, t=on) {
    return s[t] || ""
}
function _b(s, t, r=on) {
    return s[r] = t,
    s
}
function fr(s, t=on) {
    let r = "";
    return typeof s.bindings > "u" ? r = bb(s, t) : r = s.bindings().context || "",
    r
}
function Eb(s, t, r=on) {
    const n = fr(s, r);
    return n.trim() ? `${n}/${t}` : t
}
function pr(s, t, r=on) {
    const n = Eb(s, t, r)
      , a = s.child({
        context: n
    });
    return _b(a, n, r)
}
var kc = {}
  , Df = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    var t = gw
      , r = Of;
    s.DIGEST_LENGTH = 64,
    s.BLOCK_SIZE = 128;
    var n = function() {
        function y() {
            this.digestLength = s.DIGEST_LENGTH,
            this.blockSize = s.BLOCK_SIZE,
            this._stateHi = new Int32Array(8),
            this._stateLo = new Int32Array(8),
            this._tempHi = new Int32Array(16),
            this._tempLo = new Int32Array(16),
            this._buffer = new Uint8Array(256),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this.reset()
        }
        return y.prototype._initState = function() {
            this._stateHi[0] = 1779033703,
            this._stateHi[1] = 3144134277,
            this._stateHi[2] = 1013904242,
            this._stateHi[3] = 2773480762,
            this._stateHi[4] = 1359893119,
            this._stateHi[5] = 2600822924,
            this._stateHi[6] = 528734635,
            this._stateHi[7] = 1541459225,
            this._stateLo[0] = 4089235720,
            this._stateLo[1] = 2227873595,
            this._stateLo[2] = 4271175723,
            this._stateLo[3] = 1595750129,
            this._stateLo[4] = 2917565137,
            this._stateLo[5] = 725511199,
            this._stateLo[6] = 4215389547,
            this._stateLo[7] = 327033209
        }
        ,
        y.prototype.reset = function() {
            return this._initState(),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this
        }
        ,
        y.prototype.clean = function() {
            r.wipe(this._buffer),
            r.wipe(this._tempHi),
            r.wipe(this._tempLo),
            this.reset()
        }
        ,
        y.prototype.update = function(w, v) {
            if (v === void 0 && (v = w.length),
            this._finished)
                throw new Error("SHA512: can't update because hash was finished.");
            var E = 0;
            if (this._bytesHashed += v,
            this._bufferLength > 0) {
                for (; this._bufferLength < s.BLOCK_SIZE && v > 0; )
                    this._buffer[this._bufferLength++] = w[E++],
                    v--;
                this._bufferLength === this.blockSize && (h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize),
                this._bufferLength = 0)
            }
            for (v >= this.blockSize && (E = h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, w, E, v),
            v %= this.blockSize); v > 0; )
                this._buffer[this._bufferLength++] = w[E++],
                v--;
            return this
        }
        ,
        y.prototype.finish = function(w) {
            if (!this._finished) {
                var v = this._bytesHashed
                  , E = this._bufferLength
                  , P = v / 536870912 | 0
                  , C = v << 3
                  , z = v % 128 < 112 ? 128 : 256;
                this._buffer[E] = 128;
                for (var M = E + 1; M < z - 8; M++)
                    this._buffer[M] = 0;
                t.writeUint32BE(P, this._buffer, z - 8),
                t.writeUint32BE(C, this._buffer, z - 4),
                h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, z),
                this._finished = !0
            }
            for (var M = 0; M < this.digestLength / 8; M++)
                t.writeUint32BE(this._stateHi[M], w, M * 8),
                t.writeUint32BE(this._stateLo[M], w, M * 8 + 4);
            return this
        }
        ,
        y.prototype.digest = function() {
            var w = new Uint8Array(this.digestLength);
            return this.finish(w),
            w
        }
        ,
        y.prototype.saveState = function() {
            if (this._finished)
                throw new Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }
        ,
        y.prototype.restoreState = function(w) {
            return this._stateHi.set(w.stateHi),
            this._stateLo.set(w.stateLo),
            this._bufferLength = w.bufferLength,
            w.buffer && this._buffer.set(w.buffer),
            this._bytesHashed = w.bytesHashed,
            this._finished = !1,
            this
        }
        ,
        y.prototype.cleanSavedState = function(w) {
            r.wipe(w.stateHi),
            r.wipe(w.stateLo),
            w.buffer && r.wipe(w.buffer),
            w.bufferLength = 0,
            w.bytesHashed = 0
        }
        ,
        y
    }();
    s.SHA512 = n;
    var a = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
    function h(y, w, v, E, P, C, z) {
        for (var M = v[0], Z = v[1], ne = v[2], oe = v[3], le = v[4], ge = v[5], me = v[6], ie = v[7], ae = E[0], Q = E[1], xe = E[2], At = E[3], mt = E[4], rr = E[5], Bt = E[6], dr = E[7], L, U, We, Me, W, V, H, B; z >= 128; ) {
            for (var Rt = 0; Rt < 16; Rt++) {
                var it = 8 * Rt + C;
                y[Rt] = t.readUint32BE(P, it),
                w[Rt] = t.readUint32BE(P, it + 4)
            }
            for (var Rt = 0; Rt < 80; Rt++) {
                var Ti = M
                  , we = Z
                  , Dr = ne
                  , T = oe
                  , N = le
                  , O = ge
                  , u = me
                  , _ = ie
                  , J = ae
                  , se = Q
                  , pe = xe
                  , Se = At
                  , Oe = mt
                  , be = rr
                  , wt = Bt
                  , ft = dr;
                if (L = ie,
                U = dr,
                W = U & 65535,
                V = U >>> 16,
                H = L & 65535,
                B = L >>> 16,
                L = (le >>> 14 | mt << 18) ^ (le >>> 18 | mt << 14) ^ (mt >>> 9 | le << 23),
                U = (mt >>> 14 | le << 18) ^ (mt >>> 18 | le << 14) ^ (le >>> 9 | mt << 23),
                W += U & 65535,
                V += U >>> 16,
                H += L & 65535,
                B += L >>> 16,
                L = le & ge ^ ~le & me,
                U = mt & rr ^ ~mt & Bt,
                W += U & 65535,
                V += U >>> 16,
                H += L & 65535,
                B += L >>> 16,
                L = a[Rt * 2],
                U = a[Rt * 2 + 1],
                W += U & 65535,
                V += U >>> 16,
                H += L & 65535,
                B += L >>> 16,
                L = y[Rt % 16],
                U = w[Rt % 16],
                W += U & 65535,
                V += U >>> 16,
                H += L & 65535,
                B += L >>> 16,
                V += W >>> 16,
                H += V >>> 16,
                B += H >>> 16,
                We = H & 65535 | B << 16,
                Me = W & 65535 | V << 16,
                L = We,
                U = Me,
                W = U & 65535,
                V = U >>> 16,
                H = L & 65535,
                B = L >>> 16,
                L = (M >>> 28 | ae << 4) ^ (ae >>> 2 | M << 30) ^ (ae >>> 7 | M << 25),
                U = (ae >>> 28 | M << 4) ^ (M >>> 2 | ae << 30) ^ (M >>> 7 | ae << 25),
                W += U & 65535,
                V += U >>> 16,
                H += L & 65535,
                B += L >>> 16,
                L = M & Z ^ M & ne ^ Z & ne,
                U = ae & Q ^ ae & xe ^ Q & xe,
                W += U & 65535,
                V += U >>> 16,
                H += L & 65535,
                B += L >>> 16,
                V += W >>> 16,
                H += V >>> 16,
                B += H >>> 16,
                _ = H & 65535 | B << 16,
                ft = W & 65535 | V << 16,
                L = T,
                U = Se,
                W = U & 65535,
                V = U >>> 16,
                H = L & 65535,
                B = L >>> 16,
                L = We,
                U = Me,
                W += U & 65535,
                V += U >>> 16,
                H += L & 65535,
                B += L >>> 16,
                V += W >>> 16,
                H += V >>> 16,
                B += H >>> 16,
                T = H & 65535 | B << 16,
                Se = W & 65535 | V << 16,
                Z = Ti,
                ne = we,
                oe = Dr,
                le = T,
                ge = N,
                me = O,
                ie = u,
                M = _,
                Q = J,
                xe = se,
                At = pe,
                mt = Se,
                rr = Oe,
                Bt = be,
                dr = wt,
                ae = ft,
                Rt % 16 === 15)
                    for (var it = 0; it < 16; it++)
                        L = y[it],
                        U = w[it],
                        W = U & 65535,
                        V = U >>> 16,
                        H = L & 65535,
                        B = L >>> 16,
                        L = y[(it + 9) % 16],
                        U = w[(it + 9) % 16],
                        W += U & 65535,
                        V += U >>> 16,
                        H += L & 65535,
                        B += L >>> 16,
                        We = y[(it + 1) % 16],
                        Me = w[(it + 1) % 16],
                        L = (We >>> 1 | Me << 31) ^ (We >>> 8 | Me << 24) ^ We >>> 7,
                        U = (Me >>> 1 | We << 31) ^ (Me >>> 8 | We << 24) ^ (Me >>> 7 | We << 25),
                        W += U & 65535,
                        V += U >>> 16,
                        H += L & 65535,
                        B += L >>> 16,
                        We = y[(it + 14) % 16],
                        Me = w[(it + 14) % 16],
                        L = (We >>> 19 | Me << 13) ^ (Me >>> 29 | We << 3) ^ We >>> 6,
                        U = (Me >>> 19 | We << 13) ^ (We >>> 29 | Me << 3) ^ (Me >>> 6 | We << 26),
                        W += U & 65535,
                        V += U >>> 16,
                        H += L & 65535,
                        B += L >>> 16,
                        V += W >>> 16,
                        H += V >>> 16,
                        B += H >>> 16,
                        y[it] = H & 65535 | B << 16,
                        w[it] = W & 65535 | V << 16
            }
            L = M,
            U = ae,
            W = U & 65535,
            V = U >>> 16,
            H = L & 65535,
            B = L >>> 16,
            L = v[0],
            U = E[0],
            W += U & 65535,
            V += U >>> 16,
            H += L & 65535,
            B += L >>> 16,
            V += W >>> 16,
            H += V >>> 16,
            B += H >>> 16,
            v[0] = M = H & 65535 | B << 16,
            E[0] = ae = W & 65535 | V << 16,
            L = Z,
            U = Q,
            W = U & 65535,
            V = U >>> 16,
            H = L & 65535,
            B = L >>> 16,
            L = v[1],
            U = E[1],
            W += U & 65535,
            V += U >>> 16,
            H += L & 65535,
            B += L >>> 16,
            V += W >>> 16,
            H += V >>> 16,
            B += H >>> 16,
            v[1] = Z = H & 65535 | B << 16,
            E[1] = Q = W & 65535 | V << 16,
            L = ne,
            U = xe,
            W = U & 65535,
            V = U >>> 16,
            H = L & 65535,
            B = L >>> 16,
            L = v[2],
            U = E[2],
            W += U & 65535,
            V += U >>> 16,
            H += L & 65535,
            B += L >>> 16,
            V += W >>> 16,
            H += V >>> 16,
            B += H >>> 16,
            v[2] = ne = H & 65535 | B << 16,
            E[2] = xe = W & 65535 | V << 16,
            L = oe,
            U = At,
            W = U & 65535,
            V = U >>> 16,
            H = L & 65535,
            B = L >>> 16,
            L = v[3],
            U = E[3],
            W += U & 65535,
            V += U >>> 16,
            H += L & 65535,
            B += L >>> 16,
            V += W >>> 16,
            H += V >>> 16,
            B += H >>> 16,
            v[3] = oe = H & 65535 | B << 16,
            E[3] = At = W & 65535 | V << 16,
            L = le,
            U = mt,
            W = U & 65535,
            V = U >>> 16,
            H = L & 65535,
            B = L >>> 16,
            L = v[4],
            U = E[4],
            W += U & 65535,
            V += U >>> 16,
            H += L & 65535,
            B += L >>> 16,
            V += W >>> 16,
            H += V >>> 16,
            B += H >>> 16,
            v[4] = le = H & 65535 | B << 16,
            E[4] = mt = W & 65535 | V << 16,
            L = ge,
            U = rr,
            W = U & 65535,
            V = U >>> 16,
            H = L & 65535,
            B = L >>> 16,
            L = v[5],
            U = E[5],
            W += U & 65535,
            V += U >>> 16,
            H += L & 65535,
            B += L >>> 16,
            V += W >>> 16,
            H += V >>> 16,
            B += H >>> 16,
            v[5] = ge = H & 65535 | B << 16,
            E[5] = rr = W & 65535 | V << 16,
            L = me,
            U = Bt,
            W = U & 65535,
            V = U >>> 16,
            H = L & 65535,
            B = L >>> 16,
            L = v[6],
            U = E[6],
            W += U & 65535,
            V += U >>> 16,
            H += L & 65535,
            B += L >>> 16,
            V += W >>> 16,
            H += V >>> 16,
            B += H >>> 16,
            v[6] = me = H & 65535 | B << 16,
            E[6] = Bt = W & 65535 | V << 16,
            L = ie,
            U = dr,
            W = U & 65535,
            V = U >>> 16,
            H = L & 65535,
            B = L >>> 16,
            L = v[7],
            U = E[7],
            W += U & 65535,
            V += U >>> 16,
            H += L & 65535,
            B += L >>> 16,
            V += W >>> 16,
            H += V >>> 16,
            B += H >>> 16,
            v[7] = ie = H & 65535 | B << 16,
            E[7] = dr = W & 65535 | V << 16,
            C += 128,
            z -= 128
        }
        return C
    }
    function f(y) {
        var w = new n;
        w.update(y);
        var v = w.digest();
        return w.clean(),
        v
    }
    s.hash = f
}
)(Df);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }),
    s.convertSecretKeyToX25519 = s.convertPublicKeyToX25519 = s.verify = s.sign = s.extractPublicKeyFromSecretKey = s.generateKeyPair = s.generateKeyPairFromSeed = s.SEED_LENGTH = s.SECRET_KEY_LENGTH = s.PUBLIC_KEY_LENGTH = s.SIGNATURE_LENGTH = void 0;
    const t = $o
      , r = Df
      , n = Of;
    s.SIGNATURE_LENGTH = 64,
    s.PUBLIC_KEY_LENGTH = 32,
    s.SECRET_KEY_LENGTH = 64,
    s.SEED_LENGTH = 32;
    function a(T) {
        const N = new Float64Array(16);
        if (T)
            for (let O = 0; O < T.length; O++)
                N[O] = T[O];
        return N
    }
    const h = new Uint8Array(32);
    h[0] = 9;
    const f = a()
      , y = a([1])
      , w = a([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
      , v = a([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
      , E = a([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
      , P = a([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
      , C = a([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    function z(T, N) {
        for (let O = 0; O < 16; O++)
            T[O] = N[O] | 0
    }
    function M(T) {
        let N = 1;
        for (let O = 0; O < 16; O++) {
            let u = T[O] + N + 65535;
            N = Math.floor(u / 65536),
            T[O] = u - N * 65536
        }
        T[0] += N - 1 + 37 * (N - 1)
    }
    function Z(T, N, O) {
        const u = ~(O - 1);
        for (let _ = 0; _ < 16; _++) {
            const J = u & (T[_] ^ N[_]);
            T[_] ^= J,
            N[_] ^= J
        }
    }
    function ne(T, N) {
        const O = a()
          , u = a();
        for (let _ = 0; _ < 16; _++)
            u[_] = N[_];
        M(u),
        M(u),
        M(u);
        for (let _ = 0; _ < 2; _++) {
            O[0] = u[0] - 65517;
            for (let se = 1; se < 15; se++)
                O[se] = u[se] - 65535 - (O[se - 1] >> 16 & 1),
                O[se - 1] &= 65535;
            O[15] = u[15] - 32767 - (O[14] >> 16 & 1);
            const J = O[15] >> 16 & 1;
            O[14] &= 65535,
            Z(u, O, 1 - J)
        }
        for (let _ = 0; _ < 16; _++)
            T[2 * _] = u[_] & 255,
            T[2 * _ + 1] = u[_] >> 8
    }
    function oe(T, N) {
        let O = 0;
        for (let u = 0; u < 32; u++)
            O |= T[u] ^ N[u];
        return (1 & O - 1 >>> 8) - 1
    }
    function le(T, N) {
        const O = new Uint8Array(32)
          , u = new Uint8Array(32);
        return ne(O, T),
        ne(u, N),
        oe(O, u)
    }
    function ge(T) {
        const N = new Uint8Array(32);
        return ne(N, T),
        N[0] & 1
    }
    function me(T, N) {
        for (let O = 0; O < 16; O++)
            T[O] = N[2 * O] + (N[2 * O + 1] << 8);
        T[15] &= 32767
    }
    function ie(T, N, O) {
        for (let u = 0; u < 16; u++)
            T[u] = N[u] + O[u]
    }
    function ae(T, N, O) {
        for (let u = 0; u < 16; u++)
            T[u] = N[u] - O[u]
    }
    function Q(T, N, O) {
        let u, _, J = 0, se = 0, pe = 0, Se = 0, Oe = 0, be = 0, wt = 0, ft = 0, Ze = 0, Ne = 0, He = 0, Ke = 0, et = 0, $e = 0, Ve = 0, Pe = 0, qe = 0, st = 0, Ce = 0, bt = 0, Nt = 0, Lt = 0, Ut = 0, $t = 0, Ft = 0, ir = 0, Kr = 0, Wt = 0, Yr = 0, gi = 0, Ci = 0, nt = O[0], Ge = O[1], ot = O[2], at = O[3], tt = O[4], Je = O[5], _t = O[6], Et = O[7], ct = O[8], It = O[9], ut = O[10], pt = O[11], ht = O[12], ke = O[13], xt = O[14], St = O[15];
        u = N[0],
        J += u * nt,
        se += u * Ge,
        pe += u * ot,
        Se += u * at,
        Oe += u * tt,
        be += u * Je,
        wt += u * _t,
        ft += u * Et,
        Ze += u * ct,
        Ne += u * It,
        He += u * ut,
        Ke += u * pt,
        et += u * ht,
        $e += u * ke,
        Ve += u * xt,
        Pe += u * St,
        u = N[1],
        se += u * nt,
        pe += u * Ge,
        Se += u * ot,
        Oe += u * at,
        be += u * tt,
        wt += u * Je,
        ft += u * _t,
        Ze += u * Et,
        Ne += u * ct,
        He += u * It,
        Ke += u * ut,
        et += u * pt,
        $e += u * ht,
        Ve += u * ke,
        Pe += u * xt,
        qe += u * St,
        u = N[2],
        pe += u * nt,
        Se += u * Ge,
        Oe += u * ot,
        be += u * at,
        wt += u * tt,
        ft += u * Je,
        Ze += u * _t,
        Ne += u * Et,
        He += u * ct,
        Ke += u * It,
        et += u * ut,
        $e += u * pt,
        Ve += u * ht,
        Pe += u * ke,
        qe += u * xt,
        st += u * St,
        u = N[3],
        Se += u * nt,
        Oe += u * Ge,
        be += u * ot,
        wt += u * at,
        ft += u * tt,
        Ze += u * Je,
        Ne += u * _t,
        He += u * Et,
        Ke += u * ct,
        et += u * It,
        $e += u * ut,
        Ve += u * pt,
        Pe += u * ht,
        qe += u * ke,
        st += u * xt,
        Ce += u * St,
        u = N[4],
        Oe += u * nt,
        be += u * Ge,
        wt += u * ot,
        ft += u * at,
        Ze += u * tt,
        Ne += u * Je,
        He += u * _t,
        Ke += u * Et,
        et += u * ct,
        $e += u * It,
        Ve += u * ut,
        Pe += u * pt,
        qe += u * ht,
        st += u * ke,
        Ce += u * xt,
        bt += u * St,
        u = N[5],
        be += u * nt,
        wt += u * Ge,
        ft += u * ot,
        Ze += u * at,
        Ne += u * tt,
        He += u * Je,
        Ke += u * _t,
        et += u * Et,
        $e += u * ct,
        Ve += u * It,
        Pe += u * ut,
        qe += u * pt,
        st += u * ht,
        Ce += u * ke,
        bt += u * xt,
        Nt += u * St,
        u = N[6],
        wt += u * nt,
        ft += u * Ge,
        Ze += u * ot,
        Ne += u * at,
        He += u * tt,
        Ke += u * Je,
        et += u * _t,
        $e += u * Et,
        Ve += u * ct,
        Pe += u * It,
        qe += u * ut,
        st += u * pt,
        Ce += u * ht,
        bt += u * ke,
        Nt += u * xt,
        Lt += u * St,
        u = N[7],
        ft += u * nt,
        Ze += u * Ge,
        Ne += u * ot,
        He += u * at,
        Ke += u * tt,
        et += u * Je,
        $e += u * _t,
        Ve += u * Et,
        Pe += u * ct,
        qe += u * It,
        st += u * ut,
        Ce += u * pt,
        bt += u * ht,
        Nt += u * ke,
        Lt += u * xt,
        Ut += u * St,
        u = N[8],
        Ze += u * nt,
        Ne += u * Ge,
        He += u * ot,
        Ke += u * at,
        et += u * tt,
        $e += u * Je,
        Ve += u * _t,
        Pe += u * Et,
        qe += u * ct,
        st += u * It,
        Ce += u * ut,
        bt += u * pt,
        Nt += u * ht,
        Lt += u * ke,
        Ut += u * xt,
        $t += u * St,
        u = N[9],
        Ne += u * nt,
        He += u * Ge,
        Ke += u * ot,
        et += u * at,
        $e += u * tt,
        Ve += u * Je,
        Pe += u * _t,
        qe += u * Et,
        st += u * ct,
        Ce += u * It,
        bt += u * ut,
        Nt += u * pt,
        Lt += u * ht,
        Ut += u * ke,
        $t += u * xt,
        Ft += u * St,
        u = N[10],
        He += u * nt,
        Ke += u * Ge,
        et += u * ot,
        $e += u * at,
        Ve += u * tt,
        Pe += u * Je,
        qe += u * _t,
        st += u * Et,
        Ce += u * ct,
        bt += u * It,
        Nt += u * ut,
        Lt += u * pt,
        Ut += u * ht,
        $t += u * ke,
        Ft += u * xt,
        ir += u * St,
        u = N[11],
        Ke += u * nt,
        et += u * Ge,
        $e += u * ot,
        Ve += u * at,
        Pe += u * tt,
        qe += u * Je,
        st += u * _t,
        Ce += u * Et,
        bt += u * ct,
        Nt += u * It,
        Lt += u * ut,
        Ut += u * pt,
        $t += u * ht,
        Ft += u * ke,
        ir += u * xt,
        Kr += u * St,
        u = N[12],
        et += u * nt,
        $e += u * Ge,
        Ve += u * ot,
        Pe += u * at,
        qe += u * tt,
        st += u * Je,
        Ce += u * _t,
        bt += u * Et,
        Nt += u * ct,
        Lt += u * It,
        Ut += u * ut,
        $t += u * pt,
        Ft += u * ht,
        ir += u * ke,
        Kr += u * xt,
        Wt += u * St,
        u = N[13],
        $e += u * nt,
        Ve += u * Ge,
        Pe += u * ot,
        qe += u * at,
        st += u * tt,
        Ce += u * Je,
        bt += u * _t,
        Nt += u * Et,
        Lt += u * ct,
        Ut += u * It,
        $t += u * ut,
        Ft += u * pt,
        ir += u * ht,
        Kr += u * ke,
        Wt += u * xt,
        Yr += u * St,
        u = N[14],
        Ve += u * nt,
        Pe += u * Ge,
        qe += u * ot,
        st += u * at,
        Ce += u * tt,
        bt += u * Je,
        Nt += u * _t,
        Lt += u * Et,
        Ut += u * ct,
        $t += u * It,
        Ft += u * ut,
        ir += u * pt,
        Kr += u * ht,
        Wt += u * ke,
        Yr += u * xt,
        gi += u * St,
        u = N[15],
        Pe += u * nt,
        qe += u * Ge,
        st += u * ot,
        Ce += u * at,
        bt += u * tt,
        Nt += u * Je,
        Lt += u * _t,
        Ut += u * Et,
        $t += u * ct,
        Ft += u * It,
        ir += u * ut,
        Kr += u * pt,
        Wt += u * ht,
        Yr += u * ke,
        gi += u * xt,
        Ci += u * St,
        J += 38 * qe,
        se += 38 * st,
        pe += 38 * Ce,
        Se += 38 * bt,
        Oe += 38 * Nt,
        be += 38 * Lt,
        wt += 38 * Ut,
        ft += 38 * $t,
        Ze += 38 * Ft,
        Ne += 38 * ir,
        He += 38 * Kr,
        Ke += 38 * Wt,
        et += 38 * Yr,
        $e += 38 * gi,
        Ve += 38 * Ci,
        _ = 1,
        u = J + _ + 65535,
        _ = Math.floor(u / 65536),
        J = u - _ * 65536,
        u = se + _ + 65535,
        _ = Math.floor(u / 65536),
        se = u - _ * 65536,
        u = pe + _ + 65535,
        _ = Math.floor(u / 65536),
        pe = u - _ * 65536,
        u = Se + _ + 65535,
        _ = Math.floor(u / 65536),
        Se = u - _ * 65536,
        u = Oe + _ + 65535,
        _ = Math.floor(u / 65536),
        Oe = u - _ * 65536,
        u = be + _ + 65535,
        _ = Math.floor(u / 65536),
        be = u - _ * 65536,
        u = wt + _ + 65535,
        _ = Math.floor(u / 65536),
        wt = u - _ * 65536,
        u = ft + _ + 65535,
        _ = Math.floor(u / 65536),
        ft = u - _ * 65536,
        u = Ze + _ + 65535,
        _ = Math.floor(u / 65536),
        Ze = u - _ * 65536,
        u = Ne + _ + 65535,
        _ = Math.floor(u / 65536),
        Ne = u - _ * 65536,
        u = He + _ + 65535,
        _ = Math.floor(u / 65536),
        He = u - _ * 65536,
        u = Ke + _ + 65535,
        _ = Math.floor(u / 65536),
        Ke = u - _ * 65536,
        u = et + _ + 65535,
        _ = Math.floor(u / 65536),
        et = u - _ * 65536,
        u = $e + _ + 65535,
        _ = Math.floor(u / 65536),
        $e = u - _ * 65536,
        u = Ve + _ + 65535,
        _ = Math.floor(u / 65536),
        Ve = u - _ * 65536,
        u = Pe + _ + 65535,
        _ = Math.floor(u / 65536),
        Pe = u - _ * 65536,
        J += _ - 1 + 37 * (_ - 1),
        _ = 1,
        u = J + _ + 65535,
        _ = Math.floor(u / 65536),
        J = u - _ * 65536,
        u = se + _ + 65535,
        _ = Math.floor(u / 65536),
        se = u - _ * 65536,
        u = pe + _ + 65535,
        _ = Math.floor(u / 65536),
        pe = u - _ * 65536,
        u = Se + _ + 65535,
        _ = Math.floor(u / 65536),
        Se = u - _ * 65536,
        u = Oe + _ + 65535,
        _ = Math.floor(u / 65536),
        Oe = u - _ * 65536,
        u = be + _ + 65535,
        _ = Math.floor(u / 65536),
        be = u - _ * 65536,
        u = wt + _ + 65535,
        _ = Math.floor(u / 65536),
        wt = u - _ * 65536,
        u = ft + _ + 65535,
        _ = Math.floor(u / 65536),
        ft = u - _ * 65536,
        u = Ze + _ + 65535,
        _ = Math.floor(u / 65536),
        Ze = u - _ * 65536,
        u = Ne + _ + 65535,
        _ = Math.floor(u / 65536),
        Ne = u - _ * 65536,
        u = He + _ + 65535,
        _ = Math.floor(u / 65536),
        He = u - _ * 65536,
        u = Ke + _ + 65535,
        _ = Math.floor(u / 65536),
        Ke = u - _ * 65536,
        u = et + _ + 65535,
        _ = Math.floor(u / 65536),
        et = u - _ * 65536,
        u = $e + _ + 65535,
        _ = Math.floor(u / 65536),
        $e = u - _ * 65536,
        u = Ve + _ + 65535,
        _ = Math.floor(u / 65536),
        Ve = u - _ * 65536,
        u = Pe + _ + 65535,
        _ = Math.floor(u / 65536),
        Pe = u - _ * 65536,
        J += _ - 1 + 37 * (_ - 1),
        T[0] = J,
        T[1] = se,
        T[2] = pe,
        T[3] = Se,
        T[4] = Oe,
        T[5] = be,
        T[6] = wt,
        T[7] = ft,
        T[8] = Ze,
        T[9] = Ne,
        T[10] = He,
        T[11] = Ke,
        T[12] = et,
        T[13] = $e,
        T[14] = Ve,
        T[15] = Pe
    }
    function xe(T, N) {
        Q(T, N, N)
    }
    function At(T, N) {
        const O = a();
        let u;
        for (u = 0; u < 16; u++)
            O[u] = N[u];
        for (u = 253; u >= 0; u--)
            xe(O, O),
            u !== 2 && u !== 4 && Q(O, O, N);
        for (u = 0; u < 16; u++)
            T[u] = O[u]
    }
    function mt(T, N) {
        const O = a();
        let u;
        for (u = 0; u < 16; u++)
            O[u] = N[u];
        for (u = 250; u >= 0; u--)
            xe(O, O),
            u !== 1 && Q(O, O, N);
        for (u = 0; u < 16; u++)
            T[u] = O[u]
    }
    function rr(T, N) {
        const O = a()
          , u = a()
          , _ = a()
          , J = a()
          , se = a()
          , pe = a()
          , Se = a()
          , Oe = a()
          , be = a();
        ae(O, T[1], T[0]),
        ae(be, N[1], N[0]),
        Q(O, O, be),
        ie(u, T[0], T[1]),
        ie(be, N[0], N[1]),
        Q(u, u, be),
        Q(_, T[3], N[3]),
        Q(_, _, v),
        Q(J, T[2], N[2]),
        ie(J, J, J),
        ae(se, u, O),
        ae(pe, J, _),
        ie(Se, J, _),
        ie(Oe, u, O),
        Q(T[0], se, pe),
        Q(T[1], Oe, Se),
        Q(T[2], Se, pe),
        Q(T[3], se, Oe)
    }
    function Bt(T, N, O) {
        for (let u = 0; u < 4; u++)
            Z(T[u], N[u], O)
    }
    function dr(T, N) {
        const O = a()
          , u = a()
          , _ = a();
        At(_, N[2]),
        Q(O, N[0], _),
        Q(u, N[1], _),
        ne(T, u),
        T[31] ^= ge(O) << 7
    }
    function L(T, N, O) {
        z(T[0], f),
        z(T[1], y),
        z(T[2], y),
        z(T[3], f);
        for (let u = 255; u >= 0; --u) {
            const _ = O[u / 8 | 0] >> (u & 7) & 1;
            Bt(T, N, _),
            rr(N, T),
            rr(T, T),
            Bt(T, N, _)
        }
    }
    function U(T, N) {
        const O = [a(), a(), a(), a()];
        z(O[0], E),
        z(O[1], P),
        z(O[2], y),
        Q(O[3], E, P),
        L(T, O, N)
    }
    function We(T) {
        if (T.length !== s.SEED_LENGTH)
            throw new Error(`ed25519: seed must be ${s.SEED_LENGTH} bytes`);
        const N = (0,
        r.hash)(T);
        N[0] &= 248,
        N[31] &= 127,
        N[31] |= 64;
        const O = new Uint8Array(32)
          , u = [a(), a(), a(), a()];
        U(u, N),
        dr(O, u);
        const _ = new Uint8Array(64);
        return _.set(T),
        _.set(O, 32),
        {
            publicKey: O,
            secretKey: _
        }
    }
    s.generateKeyPairFromSeed = We;
    function Me(T) {
        const N = (0,
        t.randomBytes)(32, T)
          , O = We(N);
        return (0,
        n.wipe)(N),
        O
    }
    s.generateKeyPair = Me;
    function W(T) {
        if (T.length !== s.SECRET_KEY_LENGTH)
            throw new Error(`ed25519: secret key must be ${s.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array(T.subarray(32))
    }
    s.extractPublicKeyFromSecretKey = W;
    const V = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
    function H(T, N) {
        let O, u, _, J;
        for (u = 63; u >= 32; --u) {
            for (O = 0,
            _ = u - 32,
            J = u - 12; _ < J; ++_)
                N[_] += O - 16 * N[u] * V[_ - (u - 32)],
                O = Math.floor((N[_] + 128) / 256),
                N[_] -= O * 256;
            N[_] += O,
            N[u] = 0
        }
        for (O = 0,
        _ = 0; _ < 32; _++)
            N[_] += O - (N[31] >> 4) * V[_],
            O = N[_] >> 8,
            N[_] &= 255;
        for (_ = 0; _ < 32; _++)
            N[_] -= O * V[_];
        for (u = 0; u < 32; u++)
            N[u + 1] += N[u] >> 8,
            T[u] = N[u] & 255
    }
    function B(T) {
        const N = new Float64Array(64);
        for (let O = 0; O < 64; O++)
            N[O] = T[O];
        for (let O = 0; O < 64; O++)
            T[O] = 0;
        H(T, N)
    }
    function Rt(T, N) {
        const O = new Float64Array(64)
          , u = [a(), a(), a(), a()]
          , _ = (0,
        r.hash)(T.subarray(0, 32));
        _[0] &= 248,
        _[31] &= 127,
        _[31] |= 64;
        const J = new Uint8Array(64);
        J.set(_.subarray(32), 32);
        const se = new r.SHA512;
        se.update(J.subarray(32)),
        se.update(N);
        const pe = se.digest();
        se.clean(),
        B(pe),
        U(u, pe),
        dr(J, u),
        se.reset(),
        se.update(J.subarray(0, 32)),
        se.update(T.subarray(32)),
        se.update(N);
        const Se = se.digest();
        B(Se);
        for (let Oe = 0; Oe < 32; Oe++)
            O[Oe] = pe[Oe];
        for (let Oe = 0; Oe < 32; Oe++)
            for (let be = 0; be < 32; be++)
                O[Oe + be] += Se[Oe] * _[be];
        return H(J.subarray(32), O),
        J
    }
    s.sign = Rt;
    function it(T, N) {
        const O = a()
          , u = a()
          , _ = a()
          , J = a()
          , se = a()
          , pe = a()
          , Se = a();
        return z(T[2], y),
        me(T[1], N),
        xe(_, T[1]),
        Q(J, _, w),
        ae(_, _, T[2]),
        ie(J, T[2], J),
        xe(se, J),
        xe(pe, se),
        Q(Se, pe, se),
        Q(O, Se, _),
        Q(O, O, J),
        mt(O, O),
        Q(O, O, _),
        Q(O, O, J),
        Q(O, O, J),
        Q(T[0], O, J),
        xe(u, T[0]),
        Q(u, u, J),
        le(u, _) && Q(T[0], T[0], C),
        xe(u, T[0]),
        Q(u, u, J),
        le(u, _) ? -1 : (ge(T[0]) === N[31] >> 7 && ae(T[0], f, T[0]),
        Q(T[3], T[0], T[1]),
        0)
    }
    function Ti(T, N, O) {
        const u = new Uint8Array(32)
          , _ = [a(), a(), a(), a()]
          , J = [a(), a(), a(), a()];
        if (O.length !== s.SIGNATURE_LENGTH)
            throw new Error(`ed25519: signature must be ${s.SIGNATURE_LENGTH} bytes`);
        if (it(J, T))
            return !1;
        const se = new r.SHA512;
        se.update(O.subarray(0, 32)),
        se.update(T),
        se.update(N);
        const pe = se.digest();
        return B(pe),
        L(_, J, pe),
        U(J, O.subarray(32)),
        rr(_, J),
        dr(u, _),
        !oe(O, u)
    }
    s.verify = Ti;
    function we(T) {
        let N = [a(), a(), a(), a()];
        if (it(N, T))
            throw new Error("Ed25519: invalid public key");
        let O = a()
          , u = a()
          , _ = N[1];
        ie(O, y, _),
        ae(u, y, _),
        At(u, u),
        Q(O, O, u);
        let J = new Uint8Array(32);
        return ne(J, O),
        J
    }
    s.convertPublicKeyToX25519 = we;
    function Dr(T) {
        const N = (0,
        r.hash)(T.subarray(0, 32));
        N[0] &= 248,
        N[31] &= 127,
        N[31] |= 64;
        const O = new Uint8Array(N.subarray(0, 32));
        return (0,
        n.wipe)(N),
        O
    }
    s.convertSecretKeyToX25519 = Dr
}
)(kc);
const Ib = "EdDSA"
  , xb = "JWT"
  , Mf = "."
  , qf = "base64url"
  , Sb = "utf8"
  , Pb = "utf8"
  , Ob = ":"
  , Rb = "did"
  , Nb = "key"
  , pl = "base58btc"
  , Tb = "z"
  , Cb = "K36"
  , Ab = 32;
function Hc(s) {
    return globalThis.Buffer != null ? new Uint8Array(s.buffer,s.byteOffset,s.byteLength) : s
}
function jf(s=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Hc(globalThis.Buffer.allocUnsafe(s)) : new Uint8Array(s)
}
function Rc(s, t) {
    t || (t = s.reduce((a,h)=>a + h.length, 0));
    const r = jf(t);
    let n = 0;
    for (const a of s)
        r.set(a, n),
        n += a.length;
    return Hc(r)
}
function Lf(s, t, r, n) {
    return {
        name: s,
        prefix: t,
        encoder: {
            name: s,
            prefix: t,
            encode: r
        },
        decoder: {
            decode: n
        }
    }
}
const dl = Lf("utf8", "u", s=>"u" + new TextDecoder("utf8").decode(s), s=>new TextEncoder().encode(s.substring(1)))
  , fc = Lf("ascii", "a", s=>{
    let t = "a";
    for (let r = 0; r < s.length; r++)
        t += String.fromCharCode(s[r]);
    return t
}
, s=>{
    s = s.substring(1);
    const t = jf(s.length);
    for (let r = 0; r < s.length; r++)
        t[r] = s.charCodeAt(r);
    return t
}
)
  , Uf = {
    utf8: dl,
    "utf-8": dl,
    hex: ol.base16,
    latin1: fc,
    ascii: fc,
    binary: fc,
    ...ol
};
function tr(s, t="utf8") {
    const r = Uf[t];
    if (!r)
        throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(s.buffer, s.byteOffset, s.byteLength).toString("utf8") : r.encoder.encode(s).substring(1)
}
function lr(s, t="utf8") {
    const r = Uf[t];
    if (!r)
        throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Hc(globalThis.Buffer.from(s, "utf-8")) : r.decoder.decode(`${r.prefix}${s}`)
}
function Po(s) {
    return tr(lr(Wi(s), Sb), qf)
}
function zf(s) {
    const t = lr(Cb, pl)
      , r = Tb + tr(Rc([t, s]), pl);
    return [Rb, Nb, r].join(Ob)
}
function $b(s) {
    return tr(s, qf)
}
function Db(s) {
    return lr([Po(s.header), Po(s.payload)].join(Mf), Pb)
}
function Mb(s) {
    return [Po(s.header), Po(s.payload), $b(s.signature)].join(Mf)
}
function gl(s=$o.randomBytes(Ab)) {
    return kc.generateKeyPairFromSeed(s)
}
async function qb(s, t, r, n, a=X.fromMiliseconds(Date.now())) {
    const h = {
        alg: Ib,
        typ: xb
    }
      , f = zf(n.publicKey)
      , y = a + r
      , w = {
        iss: f,
        sub: s,
        aud: t,
        iat: a,
        exp: y
    }
      , v = Db({
        header: h,
        payload: w
    })
      , E = kc.sign(n.secretKey, v);
    return Mb({
        header: h,
        payload: w,
        signature: E
    })
}
const jb = "PARSE_ERROR"
  , Lb = "INVALID_REQUEST"
  , Ub = "METHOD_NOT_FOUND"
  , zb = "INVALID_PARAMS"
  , kf = "INTERNAL_ERROR"
  , Kc = "SERVER_ERROR"
  , kb = [-32700, -32600, -32601, -32602, -32603]
  , en = {
    [jb]: {
        code: -32700,
        message: "Parse error"
    },
    [Lb]: {
        code: -32600,
        message: "Invalid Request"
    },
    [Ub]: {
        code: -32601,
        message: "Method not found"
    },
    [zb]: {
        code: -32602,
        message: "Invalid params"
    },
    [kf]: {
        code: -32603,
        message: "Internal error"
    },
    [Kc]: {
        code: -32e3,
        message: "Server error"
    }
}
  , Hf = Kc;
function Hb(s) {
    return kb.includes(s)
}
function yl(s) {
    return Object.keys(en).includes(s) ? en[s] : en[Hf]
}
function Kb(s) {
    const t = Object.values(en).find(r=>r.code === s);
    return t || en[Hf]
}
function Kf(s, t, r) {
    return s.message.includes("getaddrinfo ENOTFOUND") || s.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : s
}
function Vc(s=3) {
    const t = Date.now() * Math.pow(10, s)
      , r = Math.floor(Math.random() * Math.pow(10, s));
    return t + r
}
function Vf(s=6) {
    return BigInt(Vc(s))
}
function _s(s, t, r) {
    return {
        id: r || Vc(),
        jsonrpc: "2.0",
        method: s,
        params: t
    }
}
function Mo(s, t) {
    return {
        id: s,
        jsonrpc: "2.0",
        result: t
    }
}
function qo(s, t, r) {
    return {
        id: s,
        jsonrpc: "2.0",
        error: Vb(t, r)
    }
}
function Vb(s, t) {
    return typeof s > "u" ? yl(kf) : (typeof s == "string" && (s = Object.assign(Object.assign({}, yl(Kc)), {
        message: s
    })),
    typeof t < "u" && (s.data = t),
    Hb(s.code) && (s = Kb(s.code)),
    s)
}
class Bb {
}
class Fb extends Bb {
    constructor() {
        super()
    }
}
class Wb extends Fb {
    constructor(t) {
        super()
    }
}
const Gb = "^https?:"
  , Jb = "^wss?:";
function Qb(s) {
    const t = s.match(new RegExp(/^\w+:/,"gi"));
    if (!(!t || !t.length))
        return t[0]
}
function Bf(s, t) {
    const r = Qb(s);
    return typeof r > "u" ? !1 : new RegExp(t).test(r)
}
function vl(s) {
    return Bf(s, Gb)
}
function ml(s) {
    return Bf(s, Jb)
}
function Yb(s) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(s)
}
function Ff(s) {
    return typeof s == "object" && "id"in s && "jsonrpc"in s && s.jsonrpc === "2.0"
}
function Bc(s) {
    return Ff(s) && "method"in s
}
function jo(s) {
    return Ff(s) && (fi(s) || Hr(s))
}
function fi(s) {
    return "result"in s
}
function Hr(s) {
    return "error"in s
}
const Xb = ()=>typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws")
  , Zb = ()=>typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u"
  , wl = s=>s.split("?")[0]
  , bl = 10
  , e1 = Xb();
let t1 = class {
    constructor(t) {
        if (this.url = t,
        this.events = new $r.EventEmitter,
        this.registering = !1,
        !ml(t))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        this.url = t
    }
    get connected() {
        return typeof this.socket < "u"
    }
    get connecting() {
        return this.registering
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async open(t=this.url) {
        await this.register(t)
    }
    async close() {
        return new Promise((t,r)=>{
            if (typeof this.socket > "u") {
                r(new Error("Connection already closed"));
                return
            }
            this.socket.onclose = n=>{
                this.onClose(n),
                t()
            }
            ,
            this.socket.close()
        }
        )
    }
    async send(t) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send(Wi(t))
        } catch (r) {
            this.onError(t.id, r)
        }
    }
    register(t=this.url) {
        if (!ml(t))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        if (this.registering) {
            const r = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1),
            new Promise((n,a)=>{
                this.events.once("register_error", h=>{
                    this.resetMaxListeners(),
                    a(h)
                }
                ),
                this.events.once("open", ()=>{
                    if (this.resetMaxListeners(),
                    typeof this.socket > "u")
                        return a(new Error("WebSocket connection is missing or invalid"));
                    n(this.socket)
                }
                )
            }
            )
        }
        return this.url = t,
        this.registering = !0,
        new Promise((r,n)=>{
            const a = new URLSearchParams(t).get("origin")
              , h = iw.isReactNative() ? {
                headers: {
                    origin: a
                }
            } : {
                rejectUnauthorized: !Yb(t)
            }
              , f = new e1(t,[],h);
            Zb() ? f.onerror = y=>{
                const w = y;
                n(this.emitError(w.error))
            }
            : f.on("error", y=>{
                n(this.emitError(y))
            }
            ),
            f.onopen = ()=>{
                this.onOpen(f),
                r(f)
            }
        }
        )
    }
    onOpen(t) {
        t.onmessage = r=>this.onPayload(r),
        t.onclose = r=>this.onClose(r),
        this.socket = t,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose(t) {
        this.socket = void 0,
        this.registering = !1,
        this.events.emit("close", t)
    }
    onPayload(t) {
        if (typeof t.data > "u")
            return;
        const r = typeof t.data == "string" ? nn(t.data) : t.data;
        this.events.emit("payload", r)
    }
    onError(t, r) {
        const n = this.parseError(r)
          , a = n.message || n.toString()
          , h = qo(t, a);
        this.events.emit("payload", h)
    }
    parseError(t, r=this.url) {
        return Kf(t, wl(r), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > bl && this.events.setMaxListeners(bl)
    }
    emitError(t) {
        const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${wl(this.url)}`));
        return this.events.emit("register_error", r),
        r
    }
}
;
var Oo = {
    exports: {}
};
Oo.exports;
(function(s, t) {
    var r = 200
      , n = "__lodash_hash_undefined__"
      , a = 1
      , h = 2
      , f = 9007199254740991
      , y = "[object Arguments]"
      , w = "[object Array]"
      , v = "[object AsyncFunction]"
      , E = "[object Boolean]"
      , P = "[object Date]"
      , C = "[object Error]"
      , z = "[object Function]"
      , M = "[object GeneratorFunction]"
      , Z = "[object Map]"
      , ne = "[object Number]"
      , oe = "[object Null]"
      , le = "[object Object]"
      , ge = "[object Promise]"
      , me = "[object Proxy]"
      , ie = "[object RegExp]"
      , ae = "[object Set]"
      , Q = "[object String]"
      , xe = "[object Symbol]"
      , At = "[object Undefined]"
      , mt = "[object WeakMap]"
      , rr = "[object ArrayBuffer]"
      , Bt = "[object DataView]"
      , dr = "[object Float32Array]"
      , L = "[object Float64Array]"
      , U = "[object Int8Array]"
      , We = "[object Int16Array]"
      , Me = "[object Int32Array]"
      , W = "[object Uint8Array]"
      , V = "[object Uint8ClampedArray]"
      , H = "[object Uint16Array]"
      , B = "[object Uint32Array]"
      , Rt = /[\\^$.*+?()[\]{}|]/g
      , it = /^\[object .+?Constructor\]$/
      , Ti = /^(?:0|[1-9]\d*)$/
      , we = {};
    we[dr] = we[L] = we[U] = we[We] = we[Me] = we[W] = we[V] = we[H] = we[B] = !0,
    we[y] = we[w] = we[rr] = we[E] = we[Bt] = we[P] = we[C] = we[z] = we[Z] = we[ne] = we[le] = we[ie] = we[ae] = we[Q] = we[mt] = !1;
    var Dr = typeof go == "object" && go && go.Object === Object && go
      , T = typeof self == "object" && self && self.Object === Object && self
      , N = Dr || T || Function("return this")()
      , O = t && !t.nodeType && t
      , u = O && !0 && s && !s.nodeType && s
      , _ = u && u.exports === O
      , J = _ && Dr.process
      , se = function() {
        try {
            return J && J.binding && J.binding("util")
        } catch {}
    }()
      , pe = se && se.isTypedArray;
    function Se(g, I) {
        for (var q = -1, F = g == null ? 0 : g.length, Le = 0, ue = []; ++q < F; ) {
            var Be = g[q];
            I(Be, q, g) && (ue[Le++] = Be)
        }
        return ue
    }
    function Oe(g, I) {
        for (var q = -1, F = I.length, Le = g.length; ++q < F; )
            g[Le + q] = I[q];
        return g
    }
    function be(g, I) {
        for (var q = -1, F = g == null ? 0 : g.length; ++q < F; )
            if (I(g[q], q, g))
                return !0;
        return !1
    }
    function wt(g, I) {
        for (var q = -1, F = Array(g); ++q < g; )
            F[q] = I(q);
        return F
    }
    function ft(g) {
        return function(I) {
            return g(I)
        }
    }
    function Ze(g, I) {
        return g.has(I)
    }
    function Ne(g, I) {
        return g == null ? void 0 : g[I]
    }
    function He(g) {
        var I = -1
          , q = Array(g.size);
        return g.forEach(function(F, Le) {
            q[++I] = [Le, F]
        }),
        q
    }
    function Ke(g, I) {
        return function(q) {
            return g(I(q))
        }
    }
    function et(g) {
        var I = -1
          , q = Array(g.size);
        return g.forEach(function(F) {
            q[++I] = F
        }),
        q
    }
    var $e = Array.prototype
      , Ve = Function.prototype
      , Pe = Object.prototype
      , qe = N["__core-js_shared__"]
      , st = Ve.toString
      , Ce = Pe.hasOwnProperty
      , bt = function() {
        var g = /[^.]+$/.exec(qe && qe.keys && qe.keys.IE_PROTO || "");
        return g ? "Symbol(src)_1." + g : ""
    }()
      , Nt = Pe.toString
      , Lt = RegExp("^" + st.call(Ce).replace(Rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
      , Ut = _ ? N.Buffer : void 0
      , $t = N.Symbol
      , Ft = N.Uint8Array
      , ir = Pe.propertyIsEnumerable
      , Kr = $e.splice
      , Wt = $t ? $t.toStringTag : void 0
      , Yr = Object.getOwnPropertySymbols
      , gi = Ut ? Ut.isBuffer : void 0
      , Ci = Ke(Object.keys, Object)
      , nt = gr(N, "DataView")
      , Ge = gr(N, "Map")
      , ot = gr(N, "Promise")
      , at = gr(N, "Set")
      , tt = gr(N, "WeakMap")
      , Je = gr(Object, "create")
      , _t = Zr(nt)
      , Et = Zr(Ge)
      , ct = Zr(ot)
      , It = Zr(at)
      , ut = Zr(tt)
      , pt = $t ? $t.prototype : void 0
      , ht = pt ? pt.valueOf : void 0;
    function ke(g) {
        var I = -1
          , q = g == null ? 0 : g.length;
        for (this.clear(); ++I < q; ) {
            var F = g[I];
            this.set(F[0], F[1])
        }
    }
    function xt() {
        this.__data__ = Je ? Je(null) : {},
        this.size = 0
    }
    function St(g) {
        var I = this.has(g) && delete this.__data__[g];
        return this.size -= I ? 1 : 0,
        I
    }
    function zo(g) {
        var I = this.__data__;
        if (Je) {
            var q = I[g];
            return q === n ? void 0 : q
        }
        return Ce.call(I, g) ? I[g] : void 0
    }
    function ko(g) {
        var I = this.__data__;
        return Je ? I[g] !== void 0 : Ce.call(I, g)
    }
    function Ho(g, I) {
        var q = this.__data__;
        return this.size += this.has(g) ? 0 : 1,
        q[g] = Je && I === void 0 ? n : I,
        this
    }
    ke.prototype.clear = xt,
    ke.prototype.delete = St,
    ke.prototype.get = zo,
    ke.prototype.has = ko,
    ke.prototype.set = Ho;
    function Ir(g) {
        var I = -1
          , q = g == null ? 0 : g.length;
        for (this.clear(); ++I < q; ) {
            var F = g[I];
            this.set(F[0], F[1])
        }
    }
    function Ko() {
        this.__data__ = [],
        this.size = 0
    }
    function Vo(g) {
        var I = this.__data__
          , q = Ai(I, g);
        if (q < 0)
            return !1;
        var F = I.length - 1;
        return q == F ? I.pop() : Kr.call(I, q, 1),
        --this.size,
        !0
    }
    function Bo(g) {
        var I = this.__data__
          , q = Ai(I, g);
        return q < 0 ? void 0 : I[q][1]
    }
    function Fo(g) {
        return Ai(this.__data__, g) > -1
    }
    function Wo(g, I) {
        var q = this.__data__
          , F = Ai(q, g);
        return F < 0 ? (++this.size,
        q.push([g, I])) : q[F][1] = I,
        this
    }
    Ir.prototype.clear = Ko,
    Ir.prototype.delete = Vo,
    Ir.prototype.get = Bo,
    Ir.prototype.has = Fo,
    Ir.prototype.set = Wo;
    function Xr(g) {
        var I = -1
          , q = g == null ? 0 : g.length;
        for (this.clear(); ++I < q; ) {
            var F = g[I];
            this.set(F[0], F[1])
        }
    }
    function Xi() {
        this.size = 0,
        this.__data__ = {
            hash: new ke,
            map: new (Ge || Ir),
            string: new ke
        }
    }
    function Go(g) {
        var I = yi(this, g).delete(g);
        return this.size -= I ? 1 : 0,
        I
    }
    function Zi(g) {
        return yi(this, g).get(g)
    }
    function Jo(g) {
        return yi(this, g).has(g)
    }
    function Qo(g, I) {
        var q = yi(this, g)
          , F = q.size;
        return q.set(g, I),
        this.size += q.size == F ? 0 : 1,
        this
    }
    Xr.prototype.clear = Xi,
    Xr.prototype.delete = Go,
    Xr.prototype.get = Zi,
    Xr.prototype.has = Jo,
    Xr.prototype.set = Qo;
    function es(g) {
        var I = -1
          , q = g == null ? 0 : g.length;
        for (this.__data__ = new Xr; ++I < q; )
            this.add(g[I])
    }
    function hn(g) {
        return this.__data__.set(g, n),
        this
    }
    function ln(g) {
        return this.__data__.has(g)
    }
    es.prototype.add = es.prototype.push = hn,
    es.prototype.has = ln;
    function Mr(g) {
        var I = this.__data__ = new Ir(g);
        this.size = I.size
    }
    function Yo() {
        this.__data__ = new Ir,
        this.size = 0
    }
    function Xo(g) {
        var I = this.__data__
          , q = I.delete(g);
        return this.size = I.size,
        q
    }
    function Zo(g) {
        return this.__data__.get(g)
    }
    function ea(g) {
        return this.__data__.has(g)
    }
    function fn(g, I) {
        var q = this.__data__;
        if (q instanceof Ir) {
            var F = q.__data__;
            if (!Ge || F.length < r - 1)
                return F.push([g, I]),
                this.size = ++q.size,
                this;
            q = this.__data__ = new Xr(F)
        }
        return q.set(g, I),
        this.size = q.size,
        this
    }
    Mr.prototype.clear = Yo,
    Mr.prototype.delete = Xo,
    Mr.prototype.get = Zo,
    Mr.prototype.has = ea,
    Mr.prototype.set = fn;
    function pn(g, I) {
        var q = is(g)
          , F = !q && Sn(g)
          , Le = !q && !F && Ns(g)
          , ue = !q && !F && !Le && Rn(g)
          , Be = q || F || Le || ue
          , Pt = Be ? wt(g.length, String) : []
          , Ee = Pt.length;
        for (var Ue in g)
            (I || Ce.call(g, Ue)) && !(Be && (Ue == "length" || Le && (Ue == "offset" || Ue == "parent") || ue && (Ue == "buffer" || Ue == "byteLength" || Ue == "byteOffset") || bn(Ue, Ee))) && Pt.push(Ue);
        return Pt
    }
    function Ai(g, I) {
        for (var q = g.length; q--; )
            if (xn(g[q][0], I))
                return q;
        return -1
    }
    function Os(g, I, q) {
        var F = I(g);
        return is(g) ? F : Oe(F, q(g))
    }
    function $i(g) {
        return g == null ? g === void 0 ? At : oe : Wt && Wt in Object(g) ? mn(g) : ia(g)
    }
    function Rs(g) {
        return Mi(g) && $i(g) == y
    }
    function Di(g, I, q, F, Le) {
        return g === I ? !0 : g == null || I == null || !Mi(g) && !Mi(I) ? g !== g && I !== I : dn(g, I, q, F, Di, Le)
    }
    function dn(g, I, q, F, Le, ue) {
        var Be = is(g)
          , Pt = is(I)
          , Ee = Be ? w : Vr(g)
          , Ue = Pt ? w : Vr(I);
        Ee = Ee == y ? le : Ee,
        Ue = Ue == y ? le : Ue;
        var dt = Ee == le
          , sr = Ue == le
          , Ot = Ee == Ue;
        if (Ot && Ns(g)) {
            if (!Ns(I))
                return !1;
            Be = !0,
            dt = !1
        }
        if (Ot && !dt)
            return ue || (ue = new Mr),
            Be || Rn(g) ? ts(g, I, q, F, Le, ue) : ra(g, I, Ee, q, F, Le, ue);
        if (!(q & a)) {
            var Fe = dt && Ce.call(g, "__wrapped__")
              , Gt = sr && Ce.call(I, "__wrapped__");
            if (Fe || Gt) {
                var qr = Fe ? g.value() : g
                  , xr = Gt ? I.value() : I;
                return ue || (ue = new Mr),
                Le(qr, xr, q, F, ue)
            }
        }
        return Ot ? (ue || (ue = new Mr),
        vn(g, I, q, F, Le, ue)) : !1
    }
    function ta(g) {
        if (!On(g) || En(g))
            return !1;
        var I = ss(g) ? Lt : it;
        return I.test(Zr(g))
    }
    function gn(g) {
        return Mi(g) && Pn(g.length) && !!we[$i(g)]
    }
    function yn(g) {
        if (!In(g))
            return Ci(g);
        var I = [];
        for (var q in Object(g))
            Ce.call(g, q) && q != "constructor" && I.push(q);
        return I
    }
    function ts(g, I, q, F, Le, ue) {
        var Be = q & a
          , Pt = g.length
          , Ee = I.length;
        if (Pt != Ee && !(Be && Ee > Pt))
            return !1;
        var Ue = ue.get(g);
        if (Ue && ue.get(I))
            return Ue == I;
        var dt = -1
          , sr = !0
          , Ot = q & h ? new es : void 0;
        for (ue.set(g, I),
        ue.set(I, g); ++dt < Pt; ) {
            var Fe = g[dt]
              , Gt = I[dt];
            if (F)
                var qr = Be ? F(Gt, Fe, dt, I, g, ue) : F(Fe, Gt, dt, g, I, ue);
            if (qr !== void 0) {
                if (qr)
                    continue;
                sr = !1;
                break
            }
            if (Ot) {
                if (!be(I, function(xr, Br) {
                    if (!Ze(Ot, Br) && (Fe === xr || Le(Fe, xr, q, F, ue)))
                        return Ot.push(Br)
                })) {
                    sr = !1;
                    break
                }
            } else if (!(Fe === Gt || Le(Fe, Gt, q, F, ue))) {
                sr = !1;
                break
            }
        }
        return ue.delete(g),
        ue.delete(I),
        sr
    }
    function ra(g, I, q, F, Le, ue, Be) {
        switch (q) {
        case Bt:
            if (g.byteLength != I.byteLength || g.byteOffset != I.byteOffset)
                return !1;
            g = g.buffer,
            I = I.buffer;
        case rr:
            return !(g.byteLength != I.byteLength || !ue(new Ft(g), new Ft(I)));
        case E:
        case P:
        case ne:
            return xn(+g, +I);
        case C:
            return g.name == I.name && g.message == I.message;
        case ie:
        case Q:
            return g == I + "";
        case Z:
            var Pt = He;
        case ae:
            var Ee = F & a;
            if (Pt || (Pt = et),
            g.size != I.size && !Ee)
                return !1;
            var Ue = Be.get(g);
            if (Ue)
                return Ue == I;
            F |= h,
            Be.set(g, I);
            var dt = ts(Pt(g), Pt(I), F, Le, ue, Be);
            return Be.delete(g),
            dt;
        case xe:
            if (ht)
                return ht.call(g) == ht.call(I)
        }
        return !1
    }
    function vn(g, I, q, F, Le, ue) {
        var Be = q & a
          , Pt = rs(g)
          , Ee = Pt.length
          , Ue = rs(I)
          , dt = Ue.length;
        if (Ee != dt && !Be)
            return !1;
        for (var sr = Ee; sr--; ) {
            var Ot = Pt[sr];
            if (!(Be ? Ot in I : Ce.call(I, Ot)))
                return !1
        }
        var Fe = ue.get(g);
        if (Fe && ue.get(I))
            return Fe == I;
        var Gt = !0;
        ue.set(g, I),
        ue.set(I, g);
        for (var qr = Be; ++sr < Ee; ) {
            Ot = Pt[sr];
            var xr = g[Ot]
              , Br = I[Ot];
            if (F)
                var Ts = Be ? F(Br, xr, Ot, I, g, ue) : F(xr, Br, Ot, g, I, ue);
            if (!(Ts === void 0 ? xr === Br || Le(xr, Br, q, F, ue) : Ts)) {
                Gt = !1;
                break
            }
            qr || (qr = Ot == "constructor")
        }
        if (Gt && !qr) {
            var qi = g.constructor
              , Dt = I.constructor;
            qi != Dt && "constructor"in g && "constructor"in I && !(typeof qi == "function" && qi instanceof qi && typeof Dt == "function" && Dt instanceof Dt) && (Gt = !1)
        }
        return ue.delete(g),
        ue.delete(I),
        Gt
    }
    function rs(g) {
        return Os(g, oa, wn)
    }
    function yi(g, I) {
        var q = g.__data__;
        return _n(I) ? q[typeof I == "string" ? "string" : "hash"] : q.map
    }
    function gr(g, I) {
        var q = Ne(g, I);
        return ta(q) ? q : void 0
    }
    function mn(g) {
        var I = Ce.call(g, Wt)
          , q = g[Wt];
        try {
            g[Wt] = void 0;
            var F = !0
        } catch {}
        var Le = Nt.call(g);
        return F && (I ? g[Wt] = q : delete g[Wt]),
        Le
    }
    var wn = Yr ? function(g) {
        return g == null ? [] : (g = Object(g),
        Se(Yr(g), function(I) {
            return ir.call(g, I)
        }))
    }
    : je
      , Vr = $i;
    (nt && Vr(new nt(new ArrayBuffer(1))) != Bt || Ge && Vr(new Ge) != Z || ot && Vr(ot.resolve()) != ge || at && Vr(new at) != ae || tt && Vr(new tt) != mt) && (Vr = function(g) {
        var I = $i(g)
          , q = I == le ? g.constructor : void 0
          , F = q ? Zr(q) : "";
        if (F)
            switch (F) {
            case _t:
                return Bt;
            case Et:
                return Z;
            case ct:
                return ge;
            case It:
                return ae;
            case ut:
                return mt
            }
        return I
    }
    );
    function bn(g, I) {
        return I = I ?? f,
        !!I && (typeof g == "number" || Ti.test(g)) && g > -1 && g % 1 == 0 && g < I
    }
    function _n(g) {
        var I = typeof g;
        return I == "string" || I == "number" || I == "symbol" || I == "boolean" ? g !== "__proto__" : g === null
    }
    function En(g) {
        return !!bt && bt in g
    }
    function In(g) {
        var I = g && g.constructor
          , q = typeof I == "function" && I.prototype || Pe;
        return g === q
    }
    function ia(g) {
        return Nt.call(g)
    }
    function Zr(g) {
        if (g != null) {
            try {
                return st.call(g)
            } catch {}
            try {
                return g + ""
            } catch {}
        }
        return ""
    }
    function xn(g, I) {
        return g === I || g !== g && I !== I
    }
    var Sn = Rs(function() {
        return arguments
    }()) ? Rs : function(g) {
        return Mi(g) && Ce.call(g, "callee") && !ir.call(g, "callee")
    }
      , is = Array.isArray;
    function sa(g) {
        return g != null && Pn(g.length) && !ss(g)
    }
    var Ns = gi || De;
    function na(g, I) {
        return Di(g, I)
    }
    function ss(g) {
        if (!On(g))
            return !1;
        var I = $i(g);
        return I == z || I == M || I == v || I == me
    }
    function Pn(g) {
        return typeof g == "number" && g > -1 && g % 1 == 0 && g <= f
    }
    function On(g) {
        var I = typeof g;
        return g != null && (I == "object" || I == "function")
    }
    function Mi(g) {
        return g != null && typeof g == "object"
    }
    var Rn = pe ? ft(pe) : gn;
    function oa(g) {
        return sa(g) ? pn(g) : yn(g)
    }
    function je() {
        return []
    }
    function De() {
        return !1
    }
    s.exports = na
}
)(Oo, Oo.exports);
var r1 = Oo.exports;
const i1 = Sf(r1);
function s1(s, t) {
    return t = t || {},
    new Promise(function(r, n) {
        var a = new XMLHttpRequest
          , h = []
          , f = []
          , y = {}
          , w = function() {
            return {
                ok: (a.status / 100 | 0) == 2,
                statusText: a.statusText,
                status: a.status,
                url: a.responseURL,
                text: function() {
                    return Promise.resolve(a.responseText)
                },
                json: function() {
                    return Promise.resolve(a.responseText).then(JSON.parse)
                },
                blob: function() {
                    return Promise.resolve(new Blob([a.response]))
                },
                clone: w,
                headers: {
                    keys: function() {
                        return h
                    },
                    entries: function() {
                        return f
                    },
                    get: function(E) {
                        return y[E.toLowerCase()]
                    },
                    has: function(E) {
                        return E.toLowerCase()in y
                    }
                }
            }
        };
        for (var v in a.open(t.method || "get", s, !0),
        a.onload = function() {
            a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(E, P, C) {
                h.push(P = P.toLowerCase()),
                f.push([P, C]),
                y[P] = y[P] ? y[P] + "," + C : C
            }),
            r(w())
        }
        ,
        a.onerror = n,
        a.withCredentials = t.credentials == "include",
        t.headers)
            a.setRequestHeader(v, t.headers[v]);
        a.send(t.body || null)
    }
    )
}
const n1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: s1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , _l = Pf(n1);
var o1 = self.fetch || (self.fetch = _l.default || _l);
const a1 = Sf(o1);
var c1 = Object.defineProperty
  , u1 = Object.defineProperties
  , h1 = Object.getOwnPropertyDescriptors
  , El = Object.getOwnPropertySymbols
  , l1 = Object.prototype.hasOwnProperty
  , f1 = Object.prototype.propertyIsEnumerable
  , Il = (s,t,r)=>t in s ? c1(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , xl = (s,t)=>{
    for (var r in t || (t = {}))
        l1.call(t, r) && Il(s, r, t[r]);
    if (El)
        for (var r of El(t))
            f1.call(t, r) && Il(s, r, t[r]);
    return s
}
  , Sl = (s,t)=>u1(s, h1(t));
const p1 = {
    Accept: "application/json",
    "Content-Type": "application/json"
}
  , d1 = "POST"
  , Pl = {
    headers: p1,
    method: d1
}
  , Ol = 10;
let Ni = class {
    constructor(t, r=!1) {
        if (this.url = t,
        this.disableProviderPing = r,
        this.events = new $r.EventEmitter,
        this.isAvailable = !1,
        this.registering = !1,
        !vl(t))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        this.url = t,
        this.disableProviderPing = r
    }
    get connected() {
        return this.isAvailable
    }
    get connecting() {
        return this.registering
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async open(t=this.url) {
        await this.register(t)
    }
    async close() {
        if (!this.isAvailable)
            throw new Error("Connection already closed");
        this.onClose()
    }
    async send(t) {
        this.isAvailable || await this.register();
        try {
            const r = Wi(t)
              , n = await (await tl(this.url, Sl(xl({}, Pl), {
                body: r
            }))).json();
            this.onPayload({
                data: n
            })
        } catch (r) {
            this.onError(t.id, r)
        }
    }
    async register(t=this.url) {
        if (!vl(t))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        if (this.registering) {
            const r = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1),
            new Promise((n,a)=>{
                this.events.once("register_error", h=>{
                    this.resetMaxListeners(),
                    a(h)
                }
                ),
                this.events.once("open", ()=>{
                    if (this.resetMaxListeners(),
                    typeof this.isAvailable > "u")
                        return a(new Error("HTTP connection is missing or invalid"));
                    n()
                }
                )
            }
            )
        }
        this.url = t,
        this.registering = !0;
        try {
            if (!this.disableProviderPing) {
                const r = Wi({
                    id: 1,
                    jsonrpc: "2.0",
                    method: "test",
                    params: []
                });
                await tl(t, Sl(xl({}, Pl), {
                    body: r
                }))
            }
            this.onOpen()
        } catch (r) {
            const n = this.parseError(r);
            throw this.events.emit("register_error", n),
            this.onClose(),
            n
        }
    }
    onOpen() {
        this.isAvailable = !0,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose() {
        this.isAvailable = !1,
        this.registering = !1,
        this.events.emit("close")
    }
    onPayload(t) {
        if (typeof t.data > "u")
            return;
        const r = typeof t.data == "string" ? nn(t.data) : t.data;
        this.events.emit("payload", r)
    }
    onError(t, r) {
        const n = this.parseError(r)
          , a = n.message || n.toString()
          , h = qo(t, a);
        this.events.emit("payload", h)
    }
    parseError(t, r=this.url) {
        return Kf(t, r, "HTTP")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Ol && this.events.setMaxListeners(Ol)
    }
}
;
const g1 = ":";
function y1(s) {
    const [t,r] = s.split(g1);
    return {
        namespace: t,
        reference: r
    }
}
function v1(s, t=[]) {
    const r = [];
    return Object.keys(s).forEach(n=>{
        if (t.length && !t.includes(n))
            return;
        const a = s[n];
        r.push(...a.accounts)
    }
    ),
    r
}
function Wf(s, t) {
    return s.includes(":") ? [s] : t.chains || []
}
const Gf = "base10"
  , er = "base16"
  , Nc = "base64pad"
  , Fc = "utf8"
  , Jf = 0
  , Qi = 1
  , m1 = 0
  , Rl = 1
  , Tc = 12
  , Wc = 32;
function w1() {
    const s = Tf.generateKeyPair();
    return {
        privateKey: tr(s.secretKey, er),
        publicKey: tr(s.publicKey, er)
    }
}
function Cc() {
    const s = $o.randomBytes(Wc);
    return tr(s, er)
}
function b1(s, t) {
    const r = Tf.sharedKey(lr(s, er), lr(t, er), !0)
      , n = new vw(zc.SHA256,r).expand(Wc);
    return tr(n, er)
}
function _1(s) {
    const t = zc.hash(lr(s, er));
    return tr(t, er)
}
function Es(s) {
    const t = zc.hash(lr(s, Fc));
    return tr(t, er)
}
function E1(s) {
    return lr(`${s}`, Gf)
}
function an(s) {
    return Number(tr(s, Gf))
}
function I1(s) {
    const t = E1(typeof s.type < "u" ? s.type : Jf);
    if (an(t) === Qi && typeof s.senderPublicKey > "u")
        throw new Error("Missing sender public key for type 1 envelope");
    const r = typeof s.senderPublicKey < "u" ? lr(s.senderPublicKey, er) : void 0
      , n = typeof s.iv < "u" ? lr(s.iv, er) : $o.randomBytes(Tc)
      , a = new Cf.ChaCha20Poly1305(lr(s.symKey, er)).seal(n, lr(s.message, Fc));
    return S1({
        type: t,
        sealed: a,
        iv: n,
        senderPublicKey: r
    })
}
function x1(s) {
    const t = new Cf.ChaCha20Poly1305(lr(s.symKey, er))
      , {sealed: r, iv: n} = Ro(s.encoded)
      , a = t.open(n, r);
    if (a === null)
        throw new Error("Failed to decrypt");
    return tr(a, Fc)
}
function S1(s) {
    if (an(s.type) === Qi) {
        if (typeof s.senderPublicKey > "u")
            throw new Error("Missing sender public key for type 1 envelope");
        return tr(Rc([s.type, s.senderPublicKey, s.iv, s.sealed]), Nc)
    }
    return tr(Rc([s.type, s.iv, s.sealed]), Nc)
}
function Ro(s) {
    const t = lr(s, Nc)
      , r = t.slice(m1, Rl)
      , n = Rl;
    if (an(r) === Qi) {
        const y = n + Wc
          , w = y + Tc
          , v = t.slice(n, y)
          , E = t.slice(y, w)
          , P = t.slice(w);
        return {
            type: r,
            sealed: P,
            iv: E,
            senderPublicKey: v
        }
    }
    const a = n + Tc
      , h = t.slice(n, a)
      , f = t.slice(a);
    return {
        type: r,
        sealed: f,
        iv: h
    }
}
function P1(s, t) {
    const r = Ro(s);
    return Qf({
        type: an(r.type),
        senderPublicKey: typeof r.senderPublicKey < "u" ? tr(r.senderPublicKey, er) : void 0,
        receiverPublicKey: t == null ? void 0 : t.receiverPublicKey
    })
}
function Qf(s) {
    const t = (s == null ? void 0 : s.type) || Jf;
    if (t === Qi) {
        if (typeof (s == null ? void 0 : s.senderPublicKey) > "u")
            throw new Error("missing sender public key");
        if (typeof (s == null ? void 0 : s.receiverPublicKey) > "u")
            throw new Error("missing receiver public key")
    }
    return {
        type: t,
        senderPublicKey: s == null ? void 0 : s.senderPublicKey,
        receiverPublicKey: s == null ? void 0 : s.receiverPublicKey
    }
}
function Nl(s) {
    return s.type === Qi && typeof s.senderPublicKey == "string" && typeof s.receiverPublicKey == "string"
}
var O1 = Object.defineProperty
  , Tl = Object.getOwnPropertySymbols
  , R1 = Object.prototype.hasOwnProperty
  , N1 = Object.prototype.propertyIsEnumerable
  , Cl = (s,t,r)=>t in s ? O1(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , Al = (s,t)=>{
    for (var r in t || (t = {}))
        R1.call(t, r) && Cl(s, r, t[r]);
    if (Tl)
        for (var r of Tl(t))
            N1.call(t, r) && Cl(s, r, t[r]);
    return s
}
;
const T1 = "ReactNative"
  , Er = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}
  , C1 = "js";
function Gc() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
}
function Is() {
    return !Nf() && !!Rf() && navigator.product === T1
}
function xs() {
    return !Gc() && !!Rf() && !!Nf()
}
function cn() {
    return Is() ? Er.reactNative : Gc() ? Er.node : xs() ? Er.browser : Er.unknown
}
function A1() {
    var s;
    try {
        return Is() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (s = global.Application) == null ? void 0 : s.applicationId : void 0
    } catch {
        return
    }
}
function $1(s, t) {
    let r = So.parse(s);
    return r = Al(Al({}, r), t),
    s = So.stringify(r),
    s
}
function D1() {
    return yw() || {
        name: "",
        description: "",
        url: "",
        icons: [""]
    }
}
function M1() {
    if (cn() === Er.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
        const {OS: r, Version: n} = global.Platform;
        return [r, n].join("-")
    }
    const s = Ow();
    if (s === null)
        return "unknown";
    const t = s.os ? s.os.replace(" ", "").toLowerCase() : "unknown";
    return s.type === "browser" ? [t, s.name, s.version].join("-") : [t, s.version].join("-")
}
function q1() {
    var s;
    const t = cn();
    return t === Er.browser ? [t, ((s = mw()) == null ? void 0 : s.host) || "unknown"].join(":") : t
}
function j1(s, t, r) {
    const n = M1()
      , a = q1();
    return [[s, t].join("-"), [C1, r].join("-"), n, a].join("/")
}
function L1({protocol: s, version: t, relayUrl: r, sdkVersion: n, auth: a, projectId: h, useOnCloseEvent: f, bundleId: y}) {
    const w = r.split("?")
      , v = j1(s, t, n)
      , E = {
        auth: a,
        ua: v,
        projectId: h,
        useOnCloseEvent: f || void 0,
        origin: y || void 0
    }
      , P = $1(w[1] || "", E);
    return w[0] + "?" + P
}
function Fi(s, t) {
    return s.filter(r=>t.includes(r)).length === s.length
}
function Yf(s) {
    return Object.fromEntries(s.entries())
}
function Xf(s) {
    return new Map(Object.entries(s))
}
function ws(s=X.FIVE_MINUTES, t) {
    const r = X.toMiliseconds(s || X.FIVE_MINUTES);
    let n, a, h;
    return {
        resolve: f=>{
            h && n && (clearTimeout(h),
            n(f))
        }
        ,
        reject: f=>{
            h && a && (clearTimeout(h),
            a(f))
        }
        ,
        done: ()=>new Promise((f,y)=>{
            h = setTimeout(()=>{
                y(new Error(t))
            }
            , r),
            n = f,
            a = y
        }
        )
    }
}
function tn(s, t, r) {
    return new Promise(async(n,a)=>{
        const h = setTimeout(()=>a(new Error(r)), t);
        try {
            const f = await s;
            n(f)
        } catch (f) {
            a(f)
        }
        clearTimeout(h)
    }
    )
}
function Zf(s, t) {
    if (typeof t == "string" && t.startsWith(`${s}:`))
        return t;
    if (s.toLowerCase() === "topic") {
        if (typeof t != "string")
            throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${t}`
    } else if (s.toLowerCase() === "id") {
        if (typeof t != "number")
            throw new Error('Value must be "number" for expirer target type: id');
        return `id:${t}`
    }
    throw new Error(`Unknown expirer target type: ${s}`)
}
function U1(s) {
    return Zf("topic", s)
}
function z1(s) {
    return Zf("id", s)
}
function ep(s) {
    const [t,r] = s.split(":")
      , n = {
        id: void 0,
        topic: void 0
    };
    if (t === "topic" && typeof r == "string")
        n.topic = r;
    else if (t === "id" && Number.isInteger(Number(r)))
        n.id = Number(r);
    else
        throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
    return n
}
function _r(s, t) {
    return X.fromMiliseconds((t || Date.now()) + X.toMiliseconds(s))
}
function Pi(s) {
    return Date.now() >= X.toMiliseconds(s)
}
function vt(s, t) {
    return `${s}${t ? `:${t}` : ""}`
}
function pc(s=[], t=[]) {
    return [...new Set([...s, ...t])]
}
async function k1({id: s, topic: t, wcDeepLink: r}) {
    try {
        if (!r)
            return;
        const n = typeof r == "string" ? JSON.parse(r) : r;
        let a = n == null ? void 0 : n.href;
        if (typeof a != "string")
            return;
        a.endsWith("/") && (a = a.slice(0, -1));
        const h = `${a}/wc?requestId=${s}&sessionTopic=${t}`
          , f = cn();
        f === Er.browser ? h.startsWith("https://") ? window.open(h, "_blank", "noreferrer noopener") : window.open(h, "_self", "noreferrer noopener") : f === Er.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(h)
    } catch (n) {
        console.error(n)
    }
}
async function H1(s, t) {
    try {
        return await s.getItem(t) || (xs() ? localStorage.getItem(t) : void 0)
    } catch (r) {
        console.error(r)
    }
}
const K1 = "irn";
function Ac(s) {
    return (s == null ? void 0 : s.relay) || {
        protocol: K1
    }
}
function xo(s) {
    const t = Aw[s];
    if (typeof t > "u")
        throw new Error(`Relay Protocol not supported: ${s}`);
    return t
}
var V1 = Object.defineProperty
  , B1 = Object.defineProperties
  , F1 = Object.getOwnPropertyDescriptors
  , $l = Object.getOwnPropertySymbols
  , W1 = Object.prototype.hasOwnProperty
  , G1 = Object.prototype.propertyIsEnumerable
  , Dl = (s,t,r)=>t in s ? V1(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , J1 = (s,t)=>{
    for (var r in t || (t = {}))
        W1.call(t, r) && Dl(s, r, t[r]);
    if ($l)
        for (var r of $l(t))
            G1.call(t, r) && Dl(s, r, t[r]);
    return s
}
  , Q1 = (s,t)=>B1(s, F1(t));
function Y1(s, t="-") {
    const r = {}
      , n = "relay" + t;
    return Object.keys(s).forEach(a=>{
        if (a.startsWith(n)) {
            const h = a.replace(n, "")
              , f = s[a];
            r[h] = f
        }
    }
    ),
    r
}
function Ml(s) {
    s = s.includes("wc://") ? s.replace("wc://", "") : s,
    s = s.includes("wc:") ? s.replace("wc:", "") : s;
    const t = s.indexOf(":")
      , r = s.indexOf("?") !== -1 ? s.indexOf("?") : void 0
      , n = s.substring(0, t)
      , a = s.substring(t + 1, r).split("@")
      , h = typeof r < "u" ? s.substring(r) : ""
      , f = So.parse(h);
    return {
        protocol: n,
        topic: X1(a[0]),
        version: parseInt(a[1], 10),
        symKey: f.symKey,
        relay: Y1(f),
        expiryTimestamp: f.expiryTimestamp ? parseInt(f.expiryTimestamp, 10) : void 0
    }
}
function X1(s) {
    return s.startsWith("//") ? s.substring(2) : s
}
function Z1(s, t="-") {
    const r = "relay"
      , n = {};
    return Object.keys(s).forEach(a=>{
        const h = r + t + a;
        s[a] && (n[h] = s[a])
    }
    ),
    n
}
function e_(s) {
    return `${s.protocol}:${s.topic}@${s.version}?` + So.stringify(Q1(J1({
        symKey: s.symKey
    }, Z1(s.relay)), {
        expiryTimestamp: s.expiryTimestamp
    }))
}
function Ss(s) {
    const t = [];
    return s.forEach(r=>{
        const [n,a] = r.split(":");
        t.push(`${n}:${a}`)
    }
    ),
    t
}
function t_(s) {
    const t = [];
    return Object.values(s).forEach(r=>{
        t.push(...Ss(r.accounts))
    }
    ),
    t
}
function r_(s, t) {
    const r = [];
    return Object.values(s).forEach(n=>{
        Ss(n.accounts).includes(t) && r.push(...n.methods)
    }
    ),
    r
}
function i_(s, t) {
    const r = [];
    return Object.values(s).forEach(n=>{
        Ss(n.accounts).includes(t) && r.push(...n.events)
    }
    ),
    r
}
function Jc(s) {
    return s.includes(":")
}
function Ys(s) {
    return Jc(s) ? s.split(":")[0] : s
}
const s_ = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}
  , n_ = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function k(s, t) {
    const {message: r, code: n} = n_[s];
    return {
        message: t ? `${r} ${t}` : r,
        code: n
    }
}
function Ye(s, t) {
    const {message: r, code: n} = s_[s];
    return {
        message: t ? `${r} ${t}` : r,
        code: n
    }
}
function Qr(s, t) {
    return Array.isArray(s) ? typeof t < "u" && s.length ? s.every(t) : !0 : !1
}
function rn(s) {
    return Object.getPrototypeOf(s) === Object.prototype && Object.keys(s).length
}
function Zt(s) {
    return typeof s > "u"
}
function jt(s, t) {
    return t && Zt(s) ? !0 : typeof s == "string" && !!s.trim().length
}
function Qc(s, t) {
    return t && Zt(s) ? !0 : typeof s == "number" && !isNaN(s)
}
function o_(s, t) {
    const {requiredNamespaces: r} = t
      , n = Object.keys(s.namespaces)
      , a = Object.keys(r);
    let h = !0;
    return Fi(a, n) ? (n.forEach(f=>{
        const {accounts: y, methods: w, events: v} = s.namespaces[f]
          , E = Ss(y)
          , P = r[f];
        (!Fi(Wf(f, P), E) || !Fi(P.methods, w) || !Fi(P.events, v)) && (h = !1)
    }
    ),
    h) : !1
}
function No(s) {
    return jt(s, !1) && s.includes(":") ? s.split(":").length === 2 : !1
}
function a_(s) {
    if (jt(s, !1) && s.includes(":")) {
        const t = s.split(":");
        if (t.length === 3) {
            const r = t[0] + ":" + t[1];
            return !!t[2] && No(r)
        }
    }
    return !1
}
function c_(s) {
    if (jt(s, !1))
        try {
            return typeof new URL(s) < "u"
        } catch {
            return !1
        }
    return !1
}
function u_(s) {
    var t;
    return (t = s == null ? void 0 : s.proposer) == null ? void 0 : t.publicKey
}
function h_(s) {
    return s == null ? void 0 : s.topic
}
function l_(s, t) {
    let r = null;
    return jt(s == null ? void 0 : s.publicKey, !1) || (r = k("MISSING_OR_INVALID", `${t} controller public key should be a string`)),
    r
}
function ql(s) {
    let t = !0;
    return Qr(s) ? s.length && (t = s.every(r=>jt(r, !1))) : t = !1,
    t
}
function f_(s, t, r) {
    let n = null;
    return Qr(t) && t.length ? t.forEach(a=>{
        n || No(a) || (n = Ye("UNSUPPORTED_CHAINS", `${r}, chain ${a} should be a string and conform to "namespace:chainId" format`))
    }
    ) : No(s) || (n = Ye("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),
    n
}
function p_(s, t, r) {
    let n = null;
    return Object.entries(s).forEach(([a,h])=>{
        if (n)
            return;
        const f = f_(a, Wf(a, h), `${t} ${r}`);
        f && (n = f)
    }
    ),
    n
}
function d_(s, t) {
    let r = null;
    return Qr(s) ? s.forEach(n=>{
        r || a_(n) || (r = Ye("UNSUPPORTED_ACCOUNTS", `${t}, account ${n} should be a string and conform to "namespace:chainId:address" format`))
    }
    ) : r = Ye("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),
    r
}
function g_(s, t) {
    let r = null;
    return Object.values(s).forEach(n=>{
        if (r)
            return;
        const a = d_(n == null ? void 0 : n.accounts, `${t} namespace`);
        a && (r = a)
    }
    ),
    r
}
function y_(s, t) {
    let r = null;
    return ql(s == null ? void 0 : s.methods) ? ql(s == null ? void 0 : s.events) || (r = Ye("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = Ye("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`),
    r
}
function tp(s, t) {
    let r = null;
    return Object.values(s).forEach(n=>{
        if (r)
            return;
        const a = y_(n, `${t}, namespace`);
        a && (r = a)
    }
    ),
    r
}
function v_(s, t, r) {
    let n = null;
    if (s && rn(s)) {
        const a = tp(s, t);
        a && (n = a);
        const h = p_(s, t, r);
        h && (n = h)
    } else
        n = k("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
    return n
}
function dc(s, t) {
    let r = null;
    if (s && rn(s)) {
        const n = tp(s, t);
        n && (r = n);
        const a = g_(s, t);
        a && (r = a)
    } else
        r = k("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
    return r
}
function rp(s) {
    return jt(s.protocol, !0)
}
function m_(s, t) {
    let r = !1;
    return t && !s ? r = !0 : s && Qr(s) && s.length && s.forEach(n=>{
        r = rp(n)
    }
    ),
    r
}
function w_(s) {
    return typeof s == "number"
}
function hr(s) {
    return typeof s < "u" && typeof s !== null
}
function b_(s) {
    return !(!s || typeof s != "object" || !s.code || !Qc(s.code, !1) || !s.message || !jt(s.message, !1))
}
function __(s) {
    return !(Zt(s) || !jt(s.method, !1))
}
function E_(s) {
    return !(Zt(s) || Zt(s.result) && Zt(s.error) || !Qc(s.id, !1) || !jt(s.jsonrpc, !1))
}
function I_(s) {
    return !(Zt(s) || !jt(s.name, !1))
}
function jl(s, t) {
    return !(!No(t) || !t_(s).includes(t))
}
function x_(s, t, r) {
    return jt(r, !1) ? r_(s, t).includes(r) : !1
}
function S_(s, t, r) {
    return jt(r, !1) ? i_(s, t).includes(r) : !1
}
function Ll(s, t, r) {
    let n = null;
    const a = P_(s)
      , h = O_(t)
      , f = Object.keys(a)
      , y = Object.keys(h)
      , w = Ul(Object.keys(s))
      , v = Ul(Object.keys(t))
      , E = w.filter(P=>!v.includes(P));
    return E.length && (n = k("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${E.toString()}
      Received: ${Object.keys(t).toString()}`)),
    Fi(f, y) || (n = k("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${f.toString()}
      Approved: ${y.toString()}`)),
    Object.keys(t).forEach(P=>{
        if (!P.includes(":") || n)
            return;
        const C = Ss(t[P].accounts);
        C.includes(P) || (n = k("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${P}
        Required: ${P}
        Approved: ${C.toString()}`))
    }
    ),
    f.forEach(P=>{
        n || (Fi(a[P].methods, h[P].methods) ? Fi(a[P].events, h[P].events) || (n = k("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${P}`)) : n = k("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${P}`))
    }
    ),
    n
}
function P_(s) {
    const t = {};
    return Object.keys(s).forEach(r=>{
        var n;
        r.includes(":") ? t[r] = s[r] : (n = s[r].chains) == null || n.forEach(a=>{
            t[a] = {
                methods: s[r].methods,
                events: s[r].events
            }
        }
        )
    }
    ),
    t
}
function Ul(s) {
    return [...new Set(s.map(t=>t.includes(":") ? t.split(":")[0] : t))]
}
function O_(s) {
    const t = {};
    return Object.keys(s).forEach(r=>{
        if (r.includes(":"))
            t[r] = s[r];
        else {
            const n = Ss(s[r].accounts);
            n == null || n.forEach(a=>{
                t[a] = {
                    accounts: s[r].accounts.filter(h=>h.includes(`${a}:`)),
                    methods: s[r].methods,
                    events: s[r].events
                }
            }
            )
        }
    }
    ),
    t
}
function R_(s, t) {
    return Qc(s, !1) && s <= t.max && s >= t.min
}
function zl() {
    const s = cn();
    return new Promise(t=>{
        switch (s) {
        case Er.browser:
            t(N_());
            break;
        case Er.reactNative:
            t(T_());
            break;
        case Er.node:
            t(C_());
            break;
        default:
            t(!0)
        }
    }
    )
}
function N_() {
    return xs() && (navigator == null ? void 0 : navigator.onLine)
}
async function T_() {
    if (Is() && typeof global < "u" && global != null && global.NetInfo) {
        const s = await (global == null ? void 0 : global.NetInfo.fetch());
        return s == null ? void 0 : s.isConnected
    }
    return !0
}
function C_() {
    return !0
}
function A_(s) {
    switch (cn()) {
    case Er.browser:
        $_(s);
        break;
    case Er.reactNative:
        D_(s);
        break
    }
}
function $_(s) {
    !Is() && xs() && (window.addEventListener("online", ()=>s(!0)),
    window.addEventListener("offline", ()=>s(!1)))
}
function D_(s) {
    Is() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener(t=>s(t == null ? void 0 : t.isConnected)))
}
const gc = {};
let mo = class {
    static get(t) {
        return gc[t]
    }
    static set(t, r) {
        gc[t] = r
    }
    static delete(t) {
        delete gc[t]
    }
}
;
var Ps = {}
  , Fs = {}
  , yc = {}
  , Ws = {};
const M_ = Pf(lb);
var kl;
function q_() {
    if (kl)
        return Ws;
    kl = 1,
    Object.defineProperty(Ws, "__esModule", {
        value: !0
    }),
    Ws.IHeartBeat = void 0;
    const s = M_;
    class t extends s.IEvents {
        constructor(n) {
            super()
        }
    }
    return Ws.IHeartBeat = t,
    Ws
}
var Hl;
function ip() {
    return Hl || (Hl = 1,
    function(s) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        }),
        Co.__exportStar(q_(), s)
    }(yc)),
    yc
}
var vc = {}, Bi = {}, Kl;
function j_() {
    if (Kl)
        return Bi;
    Kl = 1,
    Object.defineProperty(Bi, "__esModule", {
        value: !0
    }),
    Bi.HEARTBEAT_EVENTS = Bi.HEARTBEAT_INTERVAL = void 0;
    const s = X;
    return Bi.HEARTBEAT_INTERVAL = s.FIVE_SECONDS,
    Bi.HEARTBEAT_EVENTS = {
        pulse: "heartbeat_pulse"
    },
    Bi
}
var Vl;
function sp() {
    return Vl || (Vl = 1,
    function(s) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        }),
        Co.__exportStar(j_(), s)
    }(vc)),
    vc
}
var Bl;
function L_() {
    if (Bl)
        return Fs;
    Bl = 1,
    Object.defineProperty(Fs, "__esModule", {
        value: !0
    }),
    Fs.HeartBeat = void 0;
    const s = Co
      , t = $r
      , r = X
      , n = ip()
      , a = sp();
    class h extends n.IHeartBeat {
        constructor(y) {
            super(y),
            this.events = new t.EventEmitter,
            this.interval = a.HEARTBEAT_INTERVAL,
            this.interval = (y == null ? void 0 : y.interval) || a.HEARTBEAT_INTERVAL
        }
        static init(y) {
            return s.__awaiter(this, void 0, void 0, function*() {
                const w = new h(y);
                return yield w.init(),
                w
            })
        }
        init() {
            return s.__awaiter(this, void 0, void 0, function*() {
                yield this.initialize()
            })
        }
        stop() {
            clearInterval(this.intervalRef)
        }
        on(y, w) {
            this.events.on(y, w)
        }
        once(y, w) {
            this.events.once(y, w)
        }
        off(y, w) {
            this.events.off(y, w)
        }
        removeListener(y, w) {
            this.events.removeListener(y, w)
        }
        initialize() {
            return s.__awaiter(this, void 0, void 0, function*() {
                this.intervalRef = setInterval(()=>this.pulse(), r.toMiliseconds(this.interval))
            })
        }
        pulse() {
            this.events.emit(a.HEARTBEAT_EVENTS.pulse)
        }
    }
    return Fs.HeartBeat = h,
    Fs
}
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    const t = Co;
    t.__exportStar(L_(), s),
    t.__exportStar(ip(), s),
    t.__exportStar(sp(), s)
}
)(Ps);
class U_ extends Ji {
    constructor(t) {
        super(),
        this.opts = t,
        this.protocol = "wc",
        this.version = 2
    }
}
class z_ extends Ji {
    constructor(t, r) {
        super(),
        this.core = t,
        this.logger = r,
        this.records = new Map
    }
}
class k_ {
    constructor(t, r) {
        this.logger = t,
        this.core = r
    }
}
let H_ = class extends Ji {
    constructor(t, r) {
        super(),
        this.relayer = t,
        this.logger = r
    }
}
  , K_ = class extends Ji {
    constructor(t) {
        super()
    }
}
  , V_ = class {
    constructor(t, r, n, a) {
        this.core = t,
        this.logger = r,
        this.name = n
    }
}
;
class B_ extends Ji {
    constructor(t, r) {
        super(),
        this.relayer = t,
        this.logger = r
    }
}
let F_ = class extends Ji {
    constructor(t, r) {
        super(),
        this.core = t,
        this.logger = r
    }
}
  , W_ = class {
    constructor(t, r) {
        this.projectId = t,
        this.logger = r
    }
}
  , G_ = class {
    constructor(t, r) {
        this.projectId = t,
        this.logger = r
    }
}
;
class J_ {
    constructor(t) {
        this.opts = t,
        this.protocol = "wc",
        this.version = 2
    }
}
let Q_ = class {
    constructor(t) {
        this.client = t
    }
}
;
class pi extends Wb {
    constructor(t) {
        super(t),
        this.events = new $r.EventEmitter,
        this.hasRegisteredEventListeners = !1,
        this.connection = this.setConnection(t),
        this.connection.connected && this.registerEventListeners()
    }
    async connect(t=this.connection) {
        await this.open(t)
    }
    async disconnect() {
        await this.close()
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async request(t, r) {
        return this.requestStrict(_s(t.method, t.params || [], t.id || Vf().toString()), r)
    }
    async requestStrict(t, r) {
        return new Promise(async(n,a)=>{
            if (!this.connection.connected)
                try {
                    await this.open()
                } catch (h) {
                    a(h)
                }
            this.events.on(`${t.id}`, h=>{
                Hr(h) ? a(h.error) : n(h.result)
            }
            );
            try {
                await this.connection.send(t, r)
            } catch (h) {
                a(h)
            }
        }
        )
    }
    setConnection(t=this.connection) {
        return t
    }
    onPayload(t) {
        this.events.emit("payload", t),
        jo(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
            type: t.method,
            data: t.params
        })
    }
    onClose(t) {
        t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)),
        this.events.emit("disconnect")
    }
    async open(t=this.connection) {
        this.connection === t && this.connection.connected || (this.connection.connected && this.close(),
        typeof t == "string" && (await this.connection.open(t),
        t = this.connection),
        this.connection = this.setConnection(t),
        await this.connection.open(),
        this.registerEventListeners(),
        this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", t=>this.onPayload(t)),
        this.connection.on("close", t=>this.onClose(t)),
        this.connection.on("error", t=>this.events.emit("error", t)),
        this.connection.on("register_error", t=>this.onClose()),
        this.hasRegisteredEventListeners = !0)
    }
}
var Y_ = {};
function X_(s, t) {
    if (s.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
        r[n] = 255;
    for (var a = 0; a < s.length; a++) {
        var h = s.charAt(a)
          , f = h.charCodeAt(0);
        if (r[f] !== 255)
            throw new TypeError(h + " is ambiguous");
        r[f] = a
    }
    var y = s.length
      , w = s.charAt(0)
      , v = Math.log(y) / Math.log(256)
      , E = Math.log(256) / Math.log(y);
    function P(M) {
        if (M instanceof Uint8Array || (ArrayBuffer.isView(M) ? M = new Uint8Array(M.buffer,M.byteOffset,M.byteLength) : Array.isArray(M) && (M = Uint8Array.from(M))),
        !(M instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (M.length === 0)
            return "";
        for (var Z = 0, ne = 0, oe = 0, le = M.length; oe !== le && M[oe] === 0; )
            oe++,
            Z++;
        for (var ge = (le - oe) * E + 1 >>> 0, me = new Uint8Array(ge); oe !== le; ) {
            for (var ie = M[oe], ae = 0, Q = ge - 1; (ie !== 0 || ae < ne) && Q !== -1; Q--,
            ae++)
                ie += 256 * me[Q] >>> 0,
                me[Q] = ie % y >>> 0,
                ie = ie / y >>> 0;
            if (ie !== 0)
                throw new Error("Non-zero carry");
            ne = ae,
            oe++
        }
        for (var xe = ge - ne; xe !== ge && me[xe] === 0; )
            xe++;
        for (var At = w.repeat(Z); xe < ge; ++xe)
            At += s.charAt(me[xe]);
        return At
    }
    function C(M) {
        if (typeof M != "string")
            throw new TypeError("Expected String");
        if (M.length === 0)
            return new Uint8Array;
        var Z = 0;
        if (M[Z] !== " ") {
            for (var ne = 0, oe = 0; M[Z] === w; )
                ne++,
                Z++;
            for (var le = (M.length - Z) * v + 1 >>> 0, ge = new Uint8Array(le); M[Z]; ) {
                var me = r[M.charCodeAt(Z)];
                if (me === 255)
                    return;
                for (var ie = 0, ae = le - 1; (me !== 0 || ie < oe) && ae !== -1; ae--,
                ie++)
                    me += y * ge[ae] >>> 0,
                    ge[ae] = me % 256 >>> 0,
                    me = me / 256 >>> 0;
                if (me !== 0)
                    throw new Error("Non-zero carry");
                oe = ie,
                Z++
            }
            if (M[Z] !== " ") {
                for (var Q = le - oe; Q !== le && ge[Q] === 0; )
                    Q++;
                for (var xe = new Uint8Array(ne + (le - Q)), At = ne; Q !== le; )
                    xe[At++] = ge[Q++];
                return xe
            }
        }
    }
    function z(M) {
        var Z = C(M);
        if (Z)
            return Z;
        throw new Error(`Non-${t} character`)
    }
    return {
        encode: P,
        decodeUnsafe: C,
        decode: z
    }
}
var Z_ = X_
  , eE = Z_;
const np = s=>{
    if (s instanceof Uint8Array && s.constructor.name === "Uint8Array")
        return s;
    if (s instanceof ArrayBuffer)
        return new Uint8Array(s);
    if (ArrayBuffer.isView(s))
        return new Uint8Array(s.buffer,s.byteOffset,s.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , tE = s=>new TextEncoder().encode(s)
  , rE = s=>new TextDecoder().decode(s);
class iE {
    constructor(t, r, n) {
        this.name = t,
        this.prefix = r,
        this.baseEncode = n
    }
    encode(t) {
        if (t instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(t)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class sE {
    constructor(t, r, n) {
        if (this.name = t,
        this.prefix = r,
        r.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = r.codePointAt(0),
        this.baseDecode = n
    }
    decode(t) {
        if (typeof t == "string") {
            if (t.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(t.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(t) {
        return op(this, t)
    }
}
class nE {
    constructor(t) {
        this.decoders = t
    }
    or(t) {
        return op(this, t)
    }
    decode(t) {
        const r = t[0]
          , n = this.decoders[r];
        if (n)
            return n.decode(t);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const op = (s,t)=>new nE({
    ...s.decoders || {
        [s.prefix]: s
    },
    ...t.decoders || {
        [t.prefix]: t
    }
});
class oE {
    constructor(t, r, n, a) {
        this.name = t,
        this.prefix = r,
        this.baseEncode = n,
        this.baseDecode = a,
        this.encoder = new iE(t,r,n),
        this.decoder = new sE(t,r,a)
    }
    encode(t) {
        return this.encoder.encode(t)
    }
    decode(t) {
        return this.decoder.decode(t)
    }
}
const Lo = ({name: s, prefix: t, encode: r, decode: n})=>new oE(s,t,r,n)
  , un = ({prefix: s, name: t, alphabet: r})=>{
    const {encode: n, decode: a} = eE(r, t);
    return Lo({
        prefix: s,
        name: t,
        encode: n,
        decode: h=>np(a(h))
    })
}
  , aE = (s,t,r,n)=>{
    const a = {};
    for (let E = 0; E < t.length; ++E)
        a[t[E]] = E;
    let h = s.length;
    for (; s[h - 1] === "="; )
        --h;
    const f = new Uint8Array(h * r / 8 | 0);
    let y = 0
      , w = 0
      , v = 0;
    for (let E = 0; E < h; ++E) {
        const P = a[s[E]];
        if (P === void 0)
            throw new SyntaxError(`Non-${n} character`);
        w = w << r | P,
        y += r,
        y >= 8 && (y -= 8,
        f[v++] = 255 & w >> y)
    }
    if (y >= r || 255 & w << 8 - y)
        throw new SyntaxError("Unexpected end of data");
    return f
}
  , cE = (s,t,r)=>{
    const n = t[t.length - 1] === "="
      , a = (1 << r) - 1;
    let h = ""
      , f = 0
      , y = 0;
    for (let w = 0; w < s.length; ++w)
        for (y = y << 8 | s[w],
        f += 8; f > r; )
            f -= r,
            h += t[a & y >> f];
    if (f && (h += t[a & y << r - f]),
    n)
        for (; h.length * r & 7; )
            h += "=";
    return h
}
  , kt = ({name: s, prefix: t, bitsPerChar: r, alphabet: n})=>Lo({
    prefix: t,
    name: s,
    encode(a) {
        return cE(a, n, r)
    },
    decode(a) {
        return aE(a, n, r, s)
    }
})
  , uE = Lo({
    prefix: "\0",
    name: "identity",
    encode: s=>rE(s),
    decode: s=>tE(s)
});
var hE = Object.freeze({
    __proto__: null,
    identity: uE
});
const lE = kt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var fE = Object.freeze({
    __proto__: null,
    base2: lE
});
const pE = kt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var dE = Object.freeze({
    __proto__: null,
    base8: pE
});
const gE = un({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var yE = Object.freeze({
    __proto__: null,
    base10: gE
});
const vE = kt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , mE = kt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var wE = Object.freeze({
    __proto__: null,
    base16: vE,
    base16upper: mE
});
const bE = kt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , _E = kt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , EE = kt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , IE = kt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , xE = kt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , SE = kt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , PE = kt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , OE = kt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , RE = kt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var NE = Object.freeze({
    __proto__: null,
    base32: bE,
    base32upper: _E,
    base32pad: EE,
    base32padupper: IE,
    base32hex: xE,
    base32hexupper: SE,
    base32hexpad: PE,
    base32hexpadupper: OE,
    base32z: RE
});
const TE = un({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , CE = un({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var AE = Object.freeze({
    __proto__: null,
    base36: TE,
    base36upper: CE
});
const $E = un({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , DE = un({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var ME = Object.freeze({
    __proto__: null,
    base58btc: $E,
    base58flickr: DE
});
const qE = kt({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , jE = kt({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , LE = kt({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , UE = kt({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var zE = Object.freeze({
    __proto__: null,
    base64: qE,
    base64pad: jE,
    base64url: LE,
    base64urlpad: UE
});
const ap = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂")
  , kE = ap.reduce((s,t,r)=>(s[r] = t,
s), [])
  , HE = ap.reduce((s,t,r)=>(s[t.codePointAt(0)] = r,
s), []);
function KE(s) {
    return s.reduce((t,r)=>(t += kE[r],
    t), "")
}
function VE(s) {
    const t = [];
    for (const r of s) {
        const n = HE[r.codePointAt(0)];
        if (n === void 0)
            throw new Error(`Non-base256emoji character: ${r}`);
        t.push(n)
    }
    return new Uint8Array(t)
}
const BE = Lo({
    prefix: "🚀",
    name: "base256emoji",
    encode: KE,
    decode: VE
});
var FE = Object.freeze({
    __proto__: null,
    base256emoji: BE
})
  , WE = cp
  , Fl = 128
  , GE = 127
  , JE = ~GE
  , QE = Math.pow(2, 31);
function cp(s, t, r) {
    t = t || [],
    r = r || 0;
    for (var n = r; s >= QE; )
        t[r++] = s & 255 | Fl,
        s /= 128;
    for (; s & JE; )
        t[r++] = s & 255 | Fl,
        s >>>= 7;
    return t[r] = s | 0,
    cp.bytes = r - n + 1,
    t
}
var YE = $c
  , XE = 128
  , Wl = 127;
function $c(s, n) {
    var r = 0, n = n || 0, a = 0, h = n, f, y = s.length;
    do {
        if (h >= y)
            throw $c.bytes = 0,
            new RangeError("Could not decode varint");
        f = s[h++],
        r += a < 28 ? (f & Wl) << a : (f & Wl) * Math.pow(2, a),
        a += 7
    } while (f >= XE);
    return $c.bytes = h - n,
    r
}
var ZE = Math.pow(2, 7)
  , eI = Math.pow(2, 14)
  , tI = Math.pow(2, 21)
  , rI = Math.pow(2, 28)
  , iI = Math.pow(2, 35)
  , sI = Math.pow(2, 42)
  , nI = Math.pow(2, 49)
  , oI = Math.pow(2, 56)
  , aI = Math.pow(2, 63)
  , cI = function(s) {
    return s < ZE ? 1 : s < eI ? 2 : s < tI ? 3 : s < rI ? 4 : s < iI ? 5 : s < sI ? 6 : s < nI ? 7 : s < oI ? 8 : s < aI ? 9 : 10
}
  , uI = {
    encode: WE,
    decode: YE,
    encodingLength: cI
}
  , up = uI;
const Gl = (s,t,r=0)=>(up.encode(s, t, r),
t)
  , Jl = s=>up.encodingLength(s)
  , Dc = (s,t)=>{
    const r = t.byteLength
      , n = Jl(s)
      , a = n + Jl(r)
      , h = new Uint8Array(a + r);
    return Gl(s, h, 0),
    Gl(r, h, n),
    h.set(t, a),
    new hI(s,r,t,h)
}
;
class hI {
    constructor(t, r, n, a) {
        this.code = t,
        this.size = r,
        this.digest = n,
        this.bytes = a
    }
}
const hp = ({name: s, code: t, encode: r})=>new lI(s,t,r);
class lI {
    constructor(t, r, n) {
        this.name = t,
        this.code = r,
        this.encode = n
    }
    digest(t) {
        if (t instanceof Uint8Array) {
            const r = this.encode(t);
            return r instanceof Uint8Array ? Dc(this.code, r) : r.then(n=>Dc(this.code, n))
        } else
            throw Error("Unknown type, must be binary type")
    }
}
const lp = s=>async t=>new Uint8Array(await crypto.subtle.digest(s, t))
  , fI = hp({
    name: "sha2-256",
    code: 18,
    encode: lp("SHA-256")
})
  , pI = hp({
    name: "sha2-512",
    code: 19,
    encode: lp("SHA-512")
});
var dI = Object.freeze({
    __proto__: null,
    sha256: fI,
    sha512: pI
});
const fp = 0
  , gI = "identity"
  , pp = np
  , yI = s=>Dc(fp, pp(s))
  , vI = {
    code: fp,
    name: gI,
    encode: pp,
    digest: yI
};
var mI = Object.freeze({
    __proto__: null,
    identity: vI
});
new TextEncoder,
new TextDecoder;
const Ql = {
    ...hE,
    ...fE,
    ...dE,
    ...yE,
    ...wE,
    ...NE,
    ...AE,
    ...ME,
    ...zE,
    ...FE
};
({
    ...dI,
    ...mI
});
function dp(s) {
    return globalThis.Buffer != null ? new Uint8Array(s.buffer,s.byteOffset,s.byteLength) : s
}
function wI(s=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? dp(globalThis.Buffer.allocUnsafe(s)) : new Uint8Array(s)
}
function gp(s, t, r, n) {
    return {
        name: s,
        prefix: t,
        encoder: {
            name: s,
            prefix: t,
            encode: r
        },
         decoder: {
            decode: n
        }
    }
}
const Yl = gp("utf8", "u", s=>"u" + new TextDecoder("utf8").decode(s), s=>new TextEncoder().encode(s.substring(1)))
  , mc = gp("ascii", "a", s=>{
    let t = "a";
    for (let r = 0; r < s.length; r++)
        t += String.fromCharCode(s[r]);
    return t
}
, s=>{
    s = s.substring(1);
    const t = wI(s.length);
    for (let r = 0; r < s.length; r++)
        t[r] = s.charCodeAt(r);
    return t
}
)
  , bI = {
    utf8: Yl,
    "utf-8": Yl,
    hex: Ql.base16,
    latin1: mc,
    ascii: mc,
    binary: mc,
    ...Ql
};
function _I(s, t="utf8") {
    const r = bI[t];
    if (!r)
        throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? dp(globalThis.Buffer.from(s, "utf-8")) : r.decoder.decode(`${r.prefix}${s}`)
}
const yp = "wc"
  , EI = 2
  , Yc = "core"
  , Oi = `${yp}@2:${Yc}:`
  , II = {
    name: Yc,
    logger: "error"
}
  , xI = {
    database: ":memory:"
}
  , SI = "crypto"
  , Xl = "client_ed25519_seed"
  , PI = X.ONE_DAY
  , OI = "keychain"
  , RI = "0.3"
  , NI = "messages"
  , TI = "0.3"
  , CI = X.SIX_HOURS
  , AI = "publisher"
  , vp = "irn"
  , $I = "error"
  , mp = "wss://relay.walletconnect.com"
  , Zl = "wss://relay.walletconnect.org"
  , DI = "relayer"
  , Vt = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}
  , MI = "_subscription"
  , ui = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}
  , qI = X.ONE_SECOND
  , jI = "2.11.2"
  , LI = 1e4
  , UI = "0.3"
  , zI = "WALLETCONNECT_CLIENT_ID"
  , kr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}
  , kI = "subscription"
  , HI = "0.3"
  , KI = X.FIVE_SECONDS * 1e3
  , VI = "pairing"
  , BI = "0.3"
  , Gs = {
    wc_pairingDelete: {
        req: {
            ttl: X.ONE_DAY,
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: X.ONE_DAY,
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: X.THIRTY_SECONDS,
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: X.THIRTY_SECONDS,
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: X.ONE_DAY,
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: X.ONE_DAY,
            prompt: !1,
            tag: 0
        }
    }
}
  , Xs = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}
  , Jr = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}
  , FI = "history"
  , WI = "0.3"
  , GI = "expirer"
  , Ar = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}
  , JI = "0.3"
  , wc = "verify-api"
  , bs = "https://verify.walletconnect.com"
  , Mc = "https://verify.walletconnect.org"
  , QI = [bs, Mc]
  , YI = "echo"
  , XI = "https://echo.walletconnect.com";
class ZI {
    constructor(t, r) {
        this.core = t,
        this.logger = r,
        this.keychain = new Map,
        this.name = OI,
        this.version = RI,
        this.initialized = !1,
        this.storagePrefix = Oi,
        this.init = async()=>{
            if (!this.initialized) {
                const n = await this.getKeyChain();
                typeof n < "u" && (this.keychain = n),
                this.initialized = !0
            }
        }
        ,
        this.has = n=>(this.isInitialized(),
        this.keychain.has(n)),
        this.set = async(n,a)=>{
            this.isInitialized(),
            this.keychain.set(n, a),
            await this.persist()
        }
        ,
        this.get = n=>{
            this.isInitialized();
            const a = this.keychain.get(n);
            if (typeof a > "u") {
                const {message: h} = k("NO_MATCHING_KEY", `${this.name}: ${n}`);
                throw new Error(h)
            }
            return a
        }
        ,
        this.del = async n=>{
            this.isInitialized(),
            this.keychain.delete(n),
            await this.persist()
        }
        ,
        this.core = t,
        this.logger = pr(r, this.name)
    }
    get context() {
        return fr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setKeyChain(t) {
        await this.core.storage.setItem(this.storageKey, Yf(t))
    }
    async getKeyChain() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? Xf(t) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = k("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class ex {
    constructor(t, r, n) {
        this.core = t,
        this.logger = r,
        this.name = SI,
        this.initialized = !1,
        this.init = async()=>{
            this.initialized || (await this.keychain.init(),
            this.initialized = !0)
        }
        ,
        this.hasKeys = a=>(this.isInitialized(),
        this.keychain.has(a)),
        this.getClientId = async()=>{
            this.isInitialized();
            const a = await this.getClientSeed()
              , h = gl(a);
            return zf(h.publicKey)
        }
        ,
        this.generateKeyPair = ()=>{
            this.isInitialized();
            const a = w1();
            return this.setPrivateKey(a.publicKey, a.privateKey)
        }
        ,
        this.signJWT = async a=>{
            this.isInitialized();
            const h = await this.getClientSeed()
              , f = gl(h)
              , y = Cc();
            return await qb(y, a, PI, f)
        }
        ,
        this.generateSharedKey = (a,h,f)=>{
            this.isInitialized();
            const y = this.getPrivateKey(a)
              , w = b1(y, h);
            return this.setSymKey(w, f)
        }
        ,
        this.setSymKey = async(a,h)=>{
            this.isInitialized();
            const f = h || _1(a);
            return await this.keychain.set(f, a),
            f
        }
        ,
        this.deleteKeyPair = async a=>{
            this.isInitialized(),
            await this.keychain.del(a)
        }
        ,
        this.deleteSymKey = async a=>{
            this.isInitialized(),
            await this.keychain.del(a)
        }
        ,
        this.encode = async(a,h,f)=>{
            this.isInitialized();
            const y = Qf(f)
              , w = Wi(h);
            if (Nl(y)) {
                const C = y.senderPublicKey
                  , z = y.receiverPublicKey;
                a = await this.generateSharedKey(C, z)
            }
            const v = this.getSymKey(a)
              , {type: E, senderPublicKey: P} = y;
            return I1({
                type: E,
                symKey: v,
                message: w,
                senderPublicKey: P
            })
        }
        ,
        this.decode = async(a,h,f)=>{
            this.isInitialized();
            const y = P1(h, f);
            if (Nl(y)) {
                const w = y.receiverPublicKey
                  , v = y.senderPublicKey;
                a = await this.generateSharedKey(w, v)
            }
            try {
                const w = this.getSymKey(a)
                  , v = x1({
                    symKey: w,
                    encoded: h
                });
                return nn(v)
            } catch (w) {
                this.logger.error(`Failed to decode message from topic: '${a}', clientId: '${await this.getClientId()}'`),
                this.logger.error(w)
            }
        }
        ,
        this.getPayloadType = a=>{
            const h = Ro(a);
            return an(h.type)
        }
        ,
        this.getPayloadSenderPublicKey = a=>{
            const h = Ro(a);
            return h.senderPublicKey ? tr(h.senderPublicKey, er) : void 0
        }
        ,
        this.core = t,
        this.logger = pr(r, this.name),
        this.keychain = n || new ZI(this.core,this.logger)
    }
    get context() {
        return fr(this.logger)
    }
    async setPrivateKey(t, r) {
        return await this.keychain.set(t, r),
        t
    }
    getPrivateKey(t) {
        return this.keychain.get(t)
    }
    async getClientSeed() {
        let t = "";
        try {
            t = this.keychain.get(Xl)
        } catch {
            t = Cc(),
            await this.keychain.set(Xl, t)
        }
        return _I(t, "base16")
    }
    getSymKey(t) {
        return this.keychain.get(t)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = k("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class tx extends k_ {
    constructor(t, r) {
        super(t, r),
        this.logger = t,
        this.core = r,
        this.messages = new Map,
        this.name = NI,
        this.version = TI,
        this.initialized = !1,
        this.storagePrefix = Oi,
        this.init = async()=>{
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const n = await this.getRelayerMessages();
                    typeof n < "u" && (this.messages = n),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (n) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(n)
                } finally {
                    this.initialized = !0
                }
            }
        }
        ,
        this.set = async(n,a)=>{
            this.isInitialized();
            const h = Es(a);
            let f = this.messages.get(n);
            return typeof f > "u" && (f = {}),
            typeof f[h] < "u" || (f[h] = a,
            this.messages.set(n, f),
            await this.persist()),
            h
        }
        ,
        this.get = n=>{
            this.isInitialized();
            let a = this.messages.get(n);
            return typeof a > "u" && (a = {}),
            a
        }
        ,
        this.has = (n,a)=>{
            this.isInitialized();
            const h = this.get(n)
              , f = Es(a);
            return typeof h[f] < "u"
        }
        ,
        this.del = async n=>{
            this.isInitialized(),
            this.messages.delete(n),
            await this.persist()
        }
        ,
        this.logger = pr(t, this.name),
        this.core = r
    }
    get context() {
        return fr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setRelayerMessages(t) {
        await this.core.storage.setItem(this.storageKey, Yf(t))
    }
    async getRelayerMessages() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? Xf(t) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = k("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class rx extends H_ {
    constructor(t, r) {
        super(t, r),
        this.relayer = t,
        this.logger = r,
        this.events = new $r.EventEmitter,
        this.name = AI,
        this.queue = new Map,
        this.publishTimeout = X.toMiliseconds(X.TEN_SECONDS * 2),
        this.needsTransportRestart = !1,
        this.publish = async(n,a,h)=>{
            var f;
            this.logger.debug("Publishing Payload"),
            this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: n,
                    message: a,
                    opts: h
                }
            });
            try {
                const y = (h == null ? void 0 : h.ttl) || CI
                  , w = Ac(h)
                  , v = (h == null ? void 0 : h.prompt) || !1
                  , E = (h == null ? void 0 : h.tag) || 0
                  , P = (h == null ? void 0 : h.id) || Vf().toString()
                  , C = {
                    topic: n,
                    message: a,
                    opts: {
                        ttl: y,
                        relay: w,
                        prompt: v,
                        tag: E,
                        id: P
                    }
                }
                  , z = setTimeout(()=>this.queue.set(P, C), this.publishTimeout);
                try {
                    await await tn(this.rpcPublish(n, a, y, w, v, E, P), this.publishTimeout, `Failed to publish payload, please try again. id:${P} tag:${E}`),
                    this.removeRequestFromQueue(P),
                    this.relayer.events.emit(Vt.publish, C)
                } catch (M) {
                    if (this.logger.debug("Publishing Payload stalled"),
                    this.needsTransportRestart = !0,
                    (f = h == null ? void 0 : h.internal) != null && f.throwOnFailedPublish)
                        throw this.removeRequestFromQueue(P),
                        M;
                    return
                } finally {
                    clearTimeout(z)
                }
                this.logger.debug("Successfully Published Payload"),
                this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: n,
                        message: a,
                        opts: h
                    }
                })
            } catch (y) {
                throw this.logger.debug("Failed to Publish Payload"),
                this.logger.error(y),
                y
            }
        }
        ,
        this.on = (n,a)=>{
            this.events.on(n, a)
        }
        ,
        this.once = (n,a)=>{
            this.events.once(n, a)
        }
        ,
        this.off = (n,a)=>{
            this.events.off(n, a)
        }
        ,
        this.removeListener = (n,a)=>{
            this.events.removeListener(n, a)
        }
        ,
        this.relayer = t,
        this.logger = pr(r, this.name),
        this.registerEventListeners()
    }
    get context() {
        return fr(this.logger)
    }
    rpcPublish(t, r, n, a, h, f, y) {
        var w, v, E, P;
        const C = {
            method: xo(a.protocol).publish,
            params: {
                topic: t,
                message: r,
                ttl: n,
                prompt: h,
                tag: f
            },
            id: y
        };
        return Zt((w = C.params) == null ? void 0 : w.prompt) && ((v = C.params) == null || delete v.prompt),
        Zt((E = C.params) == null ? void 0 : E.tag) && ((P = C.params) == null || delete P.tag),
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: C
        }),
        this.relayer.request(C)
    }
    removeRequestFromQueue(t) {
        this.queue.delete(t)
    }
    checkQueue() {
        this.queue.forEach(async t=>{
            const {topic: r, message: n, opts: a} = t;
            await this.publish(r, n, a)
        }
        )
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Ps.HEARTBEAT_EVENTS.pulse, ()=>{
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1,
                this.relayer.events.emit(Vt.connection_stalled);
                return
            }
            this.checkQueue()
        }
        ),
        this.relayer.on(Vt.message_ack, t=>{
            this.removeRequestFromQueue(t.id.toString())
        }
        )
    }
}
class ix {
    constructor() {
        this.map = new Map,
        this.set = (t,r)=>{
            const n = this.get(t);
            this.exists(t, r) || this.map.set(t, [...n, r])
        }
        ,
        this.get = t=>this.map.get(t) || [],
        this.exists = (t,r)=>this.get(t).includes(r),
        this.delete = (t,r)=>{
            if (typeof r > "u") {
                this.map.delete(t);
                return
            }
            if (!this.map.has(t))
                return;
            const n = this.get(t);
            if (!this.exists(t, r))
                return;
            const a = n.filter(h=>h !== r);
            if (!a.length) {
                this.map.delete(t);
                return
            }
            this.map.set(t, a)
        }
        ,
        this.clear = ()=>{
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var sx = Object.defineProperty
  , nx = Object.defineProperties
  , ox = Object.getOwnPropertyDescriptors
  , ef = Object.getOwnPropertySymbols
  , ax = Object.prototype.hasOwnProperty
  , cx = Object.prototype.propertyIsEnumerable
  , tf = (s,t,r)=>t in s ? sx(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , Js = (s,t)=>{
    for (var r in t || (t = {}))
        ax.call(t, r) && tf(s, r, t[r]);
    if (ef)
        for (var r of ef(t))
            cx.call(t, r) && tf(s, r, t[r]);
    return s
}
  , bc = (s,t)=>nx(s, ox(t));
class ux extends B_ {
    constructor(t, r) {
        super(t, r),
        this.relayer = t,
        this.logger = r,
        this.subscriptions = new Map,
        this.topicMap = new ix,
        this.events = new $r.EventEmitter,
        this.name = kI,
        this.version = HI,
        this.pending = new Map,
        this.cached = [],
        this.initialized = !1,
        this.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
        this.pollingInterval = 20,
        this.storagePrefix = Oi,
        this.subscribeTimeout = 1e4,
        this.restartInProgress = !1,
        this.batchSubscribeTopicsLimit = 500,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            this.clientId = await this.relayer.core.crypto.getClientId())
        }
        ,
        this.subscribe = async(n,a)=>{
            await this.restartToComplete(),
            this.isInitialized(),
            this.logger.debug("Subscribing Topic"),
            this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: n,
                    opts: a
                }
            });
            try {
                const h = Ac(a)
                  , f = {
                    topic: n,
                    relay: h
                };
                this.pending.set(n, f);
                const y = await this.rpcSubscribe(n, h);
                return this.onSubscribe(y, f),
                this.logger.debug("Successfully Subscribed Topic"),
                this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: n,
                        opts: a
                    }
                }),
                y
            } catch (h) {
                throw this.logger.debug("Failed to Subscribe Topic"),
                this.logger.error(h),
                h
            }
        }
        ,
        this.unsubscribe = async(n,a)=>{
            await this.restartToComplete(),
            this.isInitialized(),
            typeof (a == null ? void 0 : a.id) < "u" ? await this.unsubscribeById(n, a.id, a) : await this.unsubscribeByTopic(n, a)
        }
        ,
        this.isSubscribed = async n=>{
            if (this.topics.includes(n))
                return !0;
            const a = `${this.pendingSubscriptionWatchLabel}_${n}`;
            return await new Promise((h,f)=>{
                const y = new X.Watch;
                y.start(a);
                const w = setInterval(()=>{
                    !this.pending.has(n) && this.topics.includes(n) && (clearInterval(w),
                    y.stop(a),
                    h(!0)),
                    y.elapsed(a) >= KI && (clearInterval(w),
                    y.stop(a),
                    f(new Error("Subscription resolution timeout")))
                }
                , this.pollingInterval)
            }
            ).catch(()=>!1)
        }
        ,
        this.on = (n,a)=>{
            this.events.on(n, a)
        }
        ,
        this.once = (n,a)=>{
            this.events.once(n, a)
        }
        ,
        this.off = (n,a)=>{
            this.events.off(n, a)
        }
        ,
        this.removeListener = (n,a)=>{
            this.events.removeListener(n, a)
        }
        ,
        this.restart = async()=>{
            this.restartInProgress = !0,
            await this.restore(),
            await this.reset(),
            this.restartInProgress = !1
        }
        ,
        this.relayer = t,
        this.logger = pr(r, this.name),
        this.clientId = ""
    }
    get context() {
        return fr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    hasSubscription(t, r) {
        let n = !1;
        try {
            n = this.getSubscription(t).topic === r
        } catch {}
        return n
    }
    onEnable() {
        this.cached = [],
        this.initialized = !0
    }
    onDisable() {
        this.cached = this.values,
        this.subscriptions.clear(),
        this.topicMap.clear()
    }
    async unsubscribeByTopic(t, r) {
        const n = this.topicMap.get(t);
        await Promise.all(n.map(async a=>await this.unsubscribeById(t, a, r)))
    }
    async unsubscribeById(t, r, n) {
        this.logger.debug("Unsubscribing Topic"),
        this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: t,
                id: r,
                opts: n
            }
        });
        try {
            const a = Ac(n);
            await this.rpcUnsubscribe(t, r, a);
            const h = Ye("USER_DISCONNECTED", `${this.name}, ${t}`);
            await this.onUnsubscribe(t, r, h),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: t,
                    id: r,
                    opts: n
                }
            })
        } catch (a) {
            throw this.logger.debug("Failed to Unsubscribe Topic"),
            this.logger.error(a),
            a
        }
    }
    async rpcSubscribe(t, r) {
        const n = {
            method: xo(r.protocol).subscribe,
            params: {
                topic: t
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: n
        });
        try {
            await await tn(this.relayer.request(n), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(Vt.connection_stalled)
        }
        return Es(t + this.clientId)
    }
    async rpcBatchSubscribe(t) {
        if (!t.length)
            return;
        const r = t[0].relay
          , n = {
            method: xo(r.protocol).batchSubscribe,
            params: {
                topics: t.map(a=>a.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: n
        });
        try {
            return await await tn(this.relayer.request(n), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
            this.relayer.events.emit(Vt.connection_stalled)
        }
    }
    rpcUnsubscribe(t, r, n) {
        const a = {
            method: xo(n.protocol).unsubscribe,
            params: {
                topic: t,
                id: r
            }
        };
        return this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: a
        }),
        this.relayer.request(a)
    }
    onSubscribe(t, r) {
        this.setSubscription(t, bc(Js({}, r), {
            id: t
        })),
        this.pending.delete(r.topic)
    }
    onBatchSubscribe(t) {
        t.length && t.forEach(r=>{
            this.setSubscription(r.id, Js({}, r)),
            this.pending.delete(r.topic)
        }
        )
    }
    async onUnsubscribe(t, r, n) {
        this.events.removeAllListeners(r),
        this.hasSubscription(r, t) && this.deleteSubscription(r, n),
        await this.relayer.messages.del(t)
    }
    async setRelayerSubscriptions(t) {
        await this.relayer.core.storage.setItem(this.storageKey, t)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(t, r) {
        this.subscriptions.has(t) || (this.logger.debug("Setting subscription"),
        this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: t,
            subscription: r
        }),
        this.addSubscription(t, r))
    }
    addSubscription(t, r) {
        this.subscriptions.set(t, Js({}, r)),
        this.topicMap.set(r.topic, t),
        this.events.emit(kr.created, r)
    }
    getSubscription(t) {
        this.logger.debug("Getting subscription"),
        this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: t
        });
        const r = this.subscriptions.get(t);
        if (!r) {
            const {message: n} = k("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(n)
        }
        return r
    }
    deleteSubscription(t, r) {
        this.logger.debug("Deleting subscription"),
        this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: t,
            reason: r
        });
        const n = this.getSubscription(t);
        this.subscriptions.delete(t),
        this.topicMap.delete(n.topic, t),
        this.events.emit(kr.deleted, bc(Js({}, n), {
            reason: r
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values),
        this.events.emit(kr.sync)
    }
    async reset() {
        if (this.cached.length) {
            const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let r = 0; r < t; r++) {
                const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(n)
            }
        }
        this.events.emit(kr.resubscribed)
    }
    async restore() {
        try {
            const t = await this.getRelayerSubscriptions();
            if (typeof t > "u" || !t.length)
                return;
            if (this.subscriptions.size) {
                const {message: r} = k("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r),
                this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                new Error(r)
            }
            this.cached = t,
            this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
            this.logger.error(t)
        }
    }
    async batchSubscribe(t) {
        if (!t.length)
            return;
        const r = await this.rpcBatchSubscribe(t);
        Qr(r) && this.onBatchSubscribe(r.map((n,a)=>bc(Js({}, t[a]), {
            id: n
        })))
    }
    async onConnect() {
        this.restartInProgress || (await this.restart(),
        this.onEnable())
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (!this.initialized || this.relayer.transportExplicitlyClosed)
            return;
        const t = [];
        this.pending.forEach(r=>{
            t.push(r)
        }
        ),
        await this.batchSubscribe(t)
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Ps.HEARTBEAT_EVENTS.pulse, async()=>{
            await this.checkPending()
        }
        ),
        this.relayer.on(Vt.connect, async()=>{
            await this.onConnect()
        }
        ),
        this.relayer.on(Vt.disconnect, ()=>{
            this.onDisconnect()
        }
        ),
        this.events.on(kr.created, async t=>{
            const r = kr.created;
            this.logger.info(`Emitting ${r}`),
            this.logger.debug({
                type: "event",
                event: r,
                data: t
            }),
            await this.persist()
        }
        ),
        this.events.on(kr.deleted, async t=>{
            const r = kr.deleted;
            this.logger.info(`Emitting ${r}`),
            this.logger.debug({
                type: "event",
                event: r,
                data: t
            }),
            await this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = k("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise(t=>{
            const r = setInterval(()=>{
                this.restartInProgress || (clearInterval(r),
                t())
            }
            , this.pollingInterval)
        }
        )
    }
}
var hx = Object.defineProperty
  , rf = Object.getOwnPropertySymbols
  , lx = Object.prototype.hasOwnProperty
  , fx = Object.prototype.propertyIsEnumerable
  , sf = (s,t,r)=>t in s ? hx(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , px = (s,t)=>{
    for (var r in t || (t = {}))
        lx.call(t, r) && sf(s, r, t[r]);
    if (rf)
        for (var r of rf(t))
            fx.call(t, r) && sf(s, r, t[r]);
    return s
}
;
class dx extends K_ {
    constructor(t) {
        super(t),
        this.protocol = "wc",
        this.version = 2,
        this.events = new $r.EventEmitter,
        this.name = DI,
        this.transportExplicitlyClosed = !1,
        this.initialized = !1,
        this.connectionAttemptInProgress = !1,
        this.connectionStatusPollingInterval = 20,
        this.staleConnectionErrors = ["socket hang up", "socket stalled"],
        this.hasExperiencedNetworkDisruption = !1,
        this.requestsInFlight = new Map,
        this.request = async r=>{
            this.logger.debug("Publishing Request Payload");
            const n = r.id;
            try {
                await this.toEstablishConnection();
                const a = this.provider.request(r);
                return this.requestsInFlight.set(n, {
                    promise: a,
                    request: r
                }),
                await a
            } catch (a) {
                throw this.logger.debug("Failed to Publish Request"),
                this.logger.error(a),
                a
            } finally {
                this.requestsInFlight.delete(n)
            }
        }
        ,
        this.onPayloadHandler = r=>{
            this.onProviderPayload(r)
        }
        ,
        this.onConnectHandler = ()=>{
            this.events.emit(Vt.connect)
        }
        ,
        this.onDisconnectHandler = ()=>{
            this.onProviderDisconnect()
        }
        ,
        this.onProviderErrorHandler = r=>{
            this.logger.error(r),
            this.events.emit(Vt.error, r),
            this.logger.info("Fatal socket error received, closing transport"),
            this.transportClose()
        }
        ,
        this.registerProviderListeners = ()=>{
            this.provider.on(ui.payload, this.onPayloadHandler),
            this.provider.on(ui.connect, this.onConnectHandler),
            this.provider.on(ui.disconnect, this.onDisconnectHandler),
            this.provider.on(ui.error, this.onProviderErrorHandler)
        }
        ,
        this.core = t.core,
        this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? pr(t.logger, this.name) : Ao(Do({
            level: t.logger || $I
        })),
        this.messages = new tx(this.logger,t.core),
        this.subscriber = new ux(this,this.logger),
        this.publisher = new rx(this,this.logger),
        this.relayUrl = (t == null ? void 0 : t.relayUrl) || mp,
        this.projectId = t.projectId,
        this.bundleId = A1(),
        this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"),
        this.registerEventListeners(),
        await this.createProvider(),
        await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Zl}...`),
            await this.restartTransport(Zl)
        }
        this.initialized = !0,
        setTimeout(async()=>{
            this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"),
            await this.transportClose(),
            this.transportExplicitlyClosed = !1)
        }
        , LI)
    }
    get context() {
        return fr(this.logger)
    }
    get connected() {
        return this.provider.connection.connected
    }
    get connecting() {
        return this.provider.connection.connecting
    }
    async publish(t, r, n) {
        this.isInitialized(),
        await this.publisher.publish(t, r, n),
        await this.recordMessageEvent({
            topic: t,
            message: r,
            publishedAt: Date.now()
        })
    }
    async subscribe(t, r) {
        var n;
        this.isInitialized();
        let a = ((n = this.subscriber.topicMap.get(t)) == null ? void 0 : n[0]) || "";
        if (a)
            return a;
        let h;
        const f = y=>{
            y.topic === t && (this.subscriber.off(kr.created, f),
            h())
        }
        ;
        return await Promise.all([new Promise(y=>{
            h = y,
            this.subscriber.on(kr.created, f)
        }
        ), new Promise(async y=>{
            a = await this.subscriber.subscribe(t, r),
            y()
        }
        )]),
        a
    }
    async unsubscribe(t, r) {
        this.isInitialized(),
        await this.subscriber.unsubscribe(t, r)
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async transportClose() {
        this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."),
        this.requestsInFlight.forEach(async t=>{
            await t.promise
        }
        )),
        this.transportExplicitlyClosed = !0,
        this.hasExperiencedNetworkDisruption && this.connected ? await tn(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(()=>this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
    }
    async transportOpen(t) {
        if (this.transportExplicitlyClosed = !1,
        await this.confirmOnlineStateOrThrow(),
        !this.connectionAttemptInProgress) {
            t && t !== this.relayUrl && (this.relayUrl = t,
            await this.transportClose(),
            await this.createProvider()),
            this.connectionAttemptInProgress = !0;
            try {
                await Promise.all([new Promise(r=>{
                    if (!this.initialized)
                        return r();
                    this.subscriber.once(kr.resubscribed, ()=>{
                        r()
                    }
                    )
                }
                ), new Promise(async(r,n)=>{
                    try {
                        await tn(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                    } catch (a) {
                        n(a);
                        return
                    }
                    r()
                }
                )])
            } catch (r) {
                this.logger.error(r);
                const n = r;
                if (!this.isConnectionStalled(n.message))
                    throw r;
                this.provider.events.emit(ui.disconnect)
            } finally {
                this.connectionAttemptInProgress = !1,
                this.hasExperiencedNetworkDisruption = !1
            }
        }
    }
    async restartTransport(t) {
        await this.confirmOnlineStateOrThrow(),
        !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl,
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen())
    }
    async confirmOnlineStateOrThrow() {
        if (!await zl())
            throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    isConnectionStalled(t) {
        return this.staleConnectionErrors.some(r=>t.includes(r))
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const t = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new pi(new t1(L1({
            sdkVersion: jI,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: t,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))),
        this.registerProviderListeners()
    }
    async recordMessageEvent(t) {
        const {topic: r, message: n} = t;
        await this.messages.set(r, n)
    }
    async shouldIgnoreMessageEvent(t) {
        const {topic: r, message: n} = t;
        if (!n || n.length === 0)
            return this.logger.debug(`Ignoring invalid/empty message: ${n}`),
            !0;
        if (!await this.subscriber.isSubscribed(r))
            return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`),
            !0;
        const a = this.messages.has(r, n);
        return a && this.logger.debug(`Ignoring duplicate message: ${n}`),
        a
    }
    async onProviderPayload(t) {
        if (this.logger.debug("Incoming Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: t
        }),
        Bc(t)) {
            if (!t.method.endsWith(MI))
                return;
            const r = t.params
              , {topic: n, message: a, publishedAt: h} = r.data
              , f = {
                topic: n,
                message: a,
                publishedAt: h
            };
            this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace(px({
                type: "event",
                event: r.id
            }, f)),
            this.events.emit(r.id, f),
            await this.acknowledgePayload(t),
            await this.onMessageEvent(f)
        } else
            jo(t) && this.events.emit(Vt.message_ack, t)
    }
    async onMessageEvent(t) {
        await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Vt.message, t),
        await this.recordMessageEvent(t))
    }
    async acknowledgePayload(t) {
        const r = Mo(t.id, !0);
        await this.provider.connection.send(r)
    }
    unregisterProviderListeners() {
        this.provider.off(ui.payload, this.onPayloadHandler),
        this.provider.off(ui.connect, this.onConnectHandler),
        this.provider.off(ui.disconnect, this.onDisconnectHandler),
        this.provider.off(ui.error, this.onProviderErrorHandler)
    }
    async registerEventListeners() {
        this.events.on(Vt.connection_stalled, ()=>{
            this.restartTransport().catch(r=>this.logger.error(r))
        }
        );
        let t = await zl();
        A_(async r=>{
            this.initialized && t !== r && (t = r,
            r ? await this.restartTransport().catch(n=>this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0,
            await this.transportClose().catch(n=>this.logger.error(n))))
        }
        )
    }
    onProviderDisconnect() {
        this.events.emit(Vt.disconnect),
        this.attemptToReconnect()
    }
    attemptToReconnect() {
        this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."),
        setTimeout(async()=>{
            await this.restartTransport().catch(t=>this.logger.error(t))
        }
        , X.toMiliseconds(qI)))
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = k("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async toEstablishConnection() {
        if (await this.confirmOnlineStateOrThrow(),
        !this.connected) {
            if (this.connectionAttemptInProgress)
                return await new Promise(t=>{
                    const r = setInterval(()=>{
                        this.connected && (clearInterval(r),
                        t())
                    }
                    , this.connectionStatusPollingInterval)
                }
                );
            await this.restartTransport()
        }
    }
}
var gx = Object.defineProperty
  , nf = Object.getOwnPropertySymbols
  , yx = Object.prototype.hasOwnProperty
  , vx = Object.prototype.propertyIsEnumerable
  , of = (s,t,r)=>t in s ? gx(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , af = (s,t)=>{
    for (var r in t || (t = {}))
        yx.call(t, r) && of(s, r, t[r]);
    if (nf)
        for (var r of nf(t))
            vx.call(t, r) && of(s, r, t[r]);
    return s
}
;
class Uo extends V_ {
    constructor(t, r, n, a=Oi, h=void 0) {
        super(t, r, n, a),
        this.core = t,
        this.logger = r,
        this.name = n,
        this.map = new Map,
        this.version = UI,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = Oi,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(f=>{
                this.getKey && f !== null && !Zt(f) ? this.map.set(this.getKey(f), f) : u_(f) ? this.map.set(f.id, f) : h_(f) && this.map.set(f.topic, f)
            }
            ),
            this.cached = [],
            this.initialized = !0)
        }
        ,
        this.set = async(f,y)=>{
            this.isInitialized(),
            this.map.has(f) ? await this.update(f, y) : (this.logger.debug("Setting value"),
            this.logger.trace({
                type: "method",
                method: "set",
                key: f,
                value: y
            }),
            this.map.set(f, y),
            await this.persist())
        }
        ,
        this.get = f=>(this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({
            type: "method",
            method: "get",
            key: f
        }),
        this.getData(f)),
        this.getAll = f=>(this.isInitialized(),
        f ? this.values.filter(y=>Object.keys(f).every(w=>i1(y[w], f[w]))) : this.values),
        this.update = async(f,y)=>{
            this.isInitialized(),
            this.logger.debug("Updating value"),
            this.logger.trace({
                type: "method",
                method: "update",
                key: f,
                update: y
            });
            const w = af(af({}, this.getData(f)), y);
            this.map.set(f, w),
            await this.persist()
        }
        ,
        this.delete = async(f,y)=>{
            this.isInitialized(),
            this.map.has(f) && (this.logger.debug("Deleting value"),
            this.logger.trace({
                type: "method",
                method: "delete",
                key: f,
                reason: y
            }),
            this.map.delete(f),
            await this.persist())
        }
        ,
        this.logger = pr(r, this.name),
        this.storagePrefix = a,
        this.getKey = h
    }
    get context() {
        return fr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    async setDataStore(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(t) {
        const r = this.map.get(t);
        if (!r) {
            const {message: n} = k("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.error(n),
            new Error(n)
        }
        return r
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const t = await this.getDataStore();
            if (typeof t > "u" || !t.length)
                return;
            if (this.map.size) {
                const {message: r} = k("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r),
                new Error(r)
            }
            this.cached = t,
            this.logger.debug(`Successfully Restored value for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
            this.logger.error(t)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = k("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class mx {
    constructor(t, r) {
        this.core = t,
        this.logger = r,
        this.name = VI,
        this.version = BI,
        this.events = new Uc,
        this.initialized = !1,
        this.storagePrefix = Oi,
        this.ignoredPayloadTypes = [Qi],
        this.registeredMethods = [],
        this.init = async()=>{
            this.initialized || (await this.pairings.init(),
            await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.initialized = !0,
            this.logger.trace("Initialized"))
        }
        ,
        this.register = ({methods: n})=>{
            this.isInitialized(),
            this.registeredMethods = [...new Set([...this.registeredMethods, ...n])]
        }
        ,
        this.create = async()=>{
            this.isInitialized();
            const n = Cc()
              , a = await this.core.crypto.setSymKey(n)
              , h = _r(X.FIVE_MINUTES)
              , f = {
                protocol: vp
            }
              , y = {
                topic: a,
                expiry: h,
                relay: f,
                active: !1
            }
              , w = e_({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: a,
                symKey: n,
                relay: f,
                expiryTimestamp: h
            });
            return await this.pairings.set(a, y),
            await this.core.relayer.subscribe(a),
            this.core.expirer.set(a, h),
            {
                topic: a,
                uri: w
            }
        }
        ,
        this.pair = async n=>{
            this.isInitialized(),
            this.isValidPair(n);
            const {topic: a, symKey: h, relay: f, expiryTimestamp: y} = Ml(n.uri);
            let w;
            if (this.pairings.keys.includes(a) && (w = this.pairings.get(a),
            w.active))
                throw new Error(`Pairing already exists: ${a}. Please try again with a new connection URI.`);
            const v = y || _r(X.FIVE_MINUTES)
              , E = {
                topic: a,
                relay: f,
                expiry: v,
                active: !1
            };
            return await this.pairings.set(a, E),
            this.core.expirer.set(a, v),
            n.activatePairing && await this.activate({
                topic: a
            }),
            this.events.emit(Xs.create, E),
            this.core.crypto.keychain.has(a) || (await this.core.crypto.setSymKey(h, a),
            await this.core.relayer.subscribe(a, {
                relay: f
            })),
            E
        }
        ,
        this.activate = async({topic: n})=>{
            this.isInitialized();
            const a = _r(X.THIRTY_DAYS);
            await this.pairings.update(n, {
                active: !0,
                expiry: a
            }),
            this.core.expirer.set(n, a)
        }
        ,
        this.ping = async n=>{
            this.isInitialized(),
            await this.isValidPing(n);
            const {topic: a} = n;
            if (this.pairings.keys.includes(a)) {
                const h = await this.sendRequest(a, "wc_pairingPing", {})
                  , {done: f, resolve: y, reject: w} = ws();
                this.events.once(vt("pairing_ping", h), ({error: v})=>{
                    v ? w(v) : y()
                }
                ),
                await f()
            }
        }
        ,
        this.updateExpiry = async({topic: n, expiry: a})=>{
            this.isInitialized(),
            await this.pairings.update(n, {
                expiry: a
            })
        }
        ,
        this.updateMetadata = async({topic: n, metadata: a})=>{
            this.isInitialized(),
            await this.pairings.update(n, {
                peerMetadata: a
            })
        }
        ,
        this.getPairings = ()=>(this.isInitialized(),
        this.pairings.values),
        this.disconnect = async n=>{
            this.isInitialized(),
            await this.isValidDisconnect(n);
            const {topic: a} = n;
            this.pairings.keys.includes(a) && (await this.sendRequest(a, "wc_pairingDelete", Ye("USER_DISCONNECTED")),
            await this.deletePairing(a))
        }
        ,
        this.sendRequest = async(n,a,h)=>{
            const f = _s(a, h)
              , y = await this.core.crypto.encode(n, f)
              , w = Gs[a].req;
            return this.core.history.set(n, f),
            this.core.relayer.publish(n, y, w),
            f.id
        }
        ,
        this.sendResult = async(n,a,h)=>{
            const f = Mo(n, h)
              , y = await this.core.crypto.encode(a, f)
              , w = await this.core.history.get(a, n)
              , v = Gs[w.request.method].res;
            await this.core.relayer.publish(a, y, v),
            await this.core.history.resolve(f)
        }
        ,
        this.sendError = async(n,a,h)=>{
            const f = qo(n, h)
              , y = await this.core.crypto.encode(a, f)
              , w = await this.core.history.get(a, n)
              , v = Gs[w.request.method] ? Gs[w.request.method].res : Gs.unregistered_method.res;
            await this.core.relayer.publish(a, y, v),
            await this.core.history.resolve(f)
        }
        ,
        this.deletePairing = async(n,a)=>{
            await this.core.relayer.unsubscribe(n),
            await Promise.all([this.pairings.delete(n, Ye("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), a ? Promise.resolve() : this.core.expirer.del(n)])
        }
        ,
        this.cleanup = async()=>{
            const n = this.pairings.getAll().filter(a=>Pi(a.expiry));
            await Promise.all(n.map(a=>this.deletePairing(a.topic)))
        }
        ,
        this.onRelayEventRequest = n=>{
            const {topic: a, payload: h} = n;
            switch (h.method) {
            case "wc_pairingPing":
                return this.onPairingPingRequest(a, h);
            case "wc_pairingDelete":
                return this.onPairingDeleteRequest(a, h);
            default:
                return this.onUnknownRpcMethodRequest(a, h)
            }
        }
        ,
        this.onRelayEventResponse = async n=>{
            const {topic: a, payload: h} = n
              , f = (await this.core.history.get(a, h.id)).request.method;
            switch (f) {
            case "wc_pairingPing":
                return this.onPairingPingResponse(a, h);
            default:
                return this.onUnknownRpcMethodResponse(f)
            }
        }
        ,
        this.onPairingPingRequest = async(n,a)=>{
            const {id: h} = a;
            try {
                this.isValidPing({
                    topic: n
                }),
                await this.sendResult(h, n, !0),
                this.events.emit(Xs.ping, {
                    id: h,
                    topic: n
                })
            } catch (f) {
                await this.sendError(h, n, f),
                this.logger.error(f)
            }
        }
        ,
        this.onPairingPingResponse = (n,a)=>{
            const {id: h} = a;
            setTimeout(()=>{
                fi(a) ? this.events.emit(vt("pairing_ping", h), {}) : Hr(a) && this.events.emit(vt("pairing_ping", h), {
                    error: a.error
                })
            }
            , 500)
        }
        ,
        this.onPairingDeleteRequest = async(n,a)=>{
            const {id: h} = a;
            try {
                this.isValidDisconnect({
                    topic: n
                }),
                await this.deletePairing(n),
                this.events.emit(Xs.delete, {
                    id: h,
                    topic: n
                })
            } catch (f) {
                await this.sendError(h, n, f),
                this.logger.error(f)
            }
        }
        ,
        this.onUnknownRpcMethodRequest = async(n,a)=>{
            const {id: h, method: f} = a;
            try {
                if (this.registeredMethods.includes(f))
                    return;
                const y = Ye("WC_METHOD_UNSUPPORTED", f);
                await this.sendError(h, n, y),
                this.logger.error(y)
            } catch (y) {
                await this.sendError(h, n, y),
                this.logger.error(y)
            }
        }
        ,
        this.onUnknownRpcMethodResponse = n=>{
            this.registeredMethods.includes(n) || this.logger.error(Ye("WC_METHOD_UNSUPPORTED", n))
        }
        ,
        this.isValidPair = n=>{
            var a;
            if (!hr(n)) {
                const {message: f} = k("MISSING_OR_INVALID", `pair() params: ${n}`);
                throw new Error(f)
            }
            if (!c_(n.uri)) {
                const {message: f} = k("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
                throw new Error(f)
            }
            const h = Ml(n.uri);
            if (!((a = h == null ? void 0 : h.relay) != null && a.protocol)) {
                const {message: f} = k("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw new Error(f)
            }
            if (!(h != null && h.symKey)) {
                const {message: f} = k("MISSING_OR_INVALID", "pair() uri#symKey");
                throw new Error(f)
            }
            if (h != null && h.expiryTimestamp && X.toMiliseconds(h == null ? void 0 : h.expiryTimestamp) < Date.now()) {
                const {message: f} = k("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(f)
            }
        }
        ,
        this.isValidPing = async n=>{
            if (!hr(n)) {
                const {message: h} = k("MISSING_OR_INVALID", `ping() params: ${n}`);
                throw new Error(h)
            }
            const {topic: a} = n;
            await this.isValidPairingTopic(a)
        }
        ,
        this.isValidDisconnect = async n=>{
            if (!hr(n)) {
                const {message: h} = k("MISSING_OR_INVALID", `disconnect() params: ${n}`);
                throw new Error(h)
            }
            const {topic: a} = n;
            await this.isValidPairingTopic(a)
        }
        ,
        this.isValidPairingTopic = async n=>{
            if (!jt(n, !1)) {
                const {message: a} = k("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
                throw new Error(a)
            }
            if (!this.pairings.keys.includes(n)) {
                const {message: a} = k("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
                throw new Error(a)
            }
            if (Pi(this.pairings.get(n).expiry)) {
                await this.deletePairing(n);
                const {message: a} = k("EXPIRED", `pairing topic: ${n}`);
                throw new Error(a)
            }
        }
        ,
        this.core = t,
        this.logger = pr(r, this.name),
        this.pairings = new Uo(this.core,this.logger,this.name,this.storagePrefix)
    }
    get context() {
        return fr(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = k("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(Vt.message, async t=>{
            const {topic: r, message: n} = t;
            if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
                return;
            const a = await this.core.crypto.decode(r, n);
            try {
                Bc(a) ? (this.core.history.set(r, a),
                this.onRelayEventRequest({
                    topic: r,
                    payload: a
                })) : jo(a) && (await this.core.history.resolve(a),
                await this.onRelayEventResponse({
                    topic: r,
                    payload: a
                }),
                this.core.history.delete(r, a.id))
            } catch (h) {
                this.logger.error(h)
            }
        }
        )
    }
    registerExpirerEvents() {
        this.core.expirer.on(Ar.expired, async t=>{
            const {topic: r} = ep(t.target);
            r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0),
            this.events.emit(Xs.expire, {
                topic: r
            }))
        }
        )
    }
}
class wx extends z_ {
    constructor(t, r) {
        super(t, r),
        this.core = t,
        this.logger = r,
        this.records = new Map,
        this.events = new $r.EventEmitter,
        this.name = FI,
        this.version = WI,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = Oi,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(n=>this.records.set(n.id, n)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ,
        this.set = (n,a,h)=>{
            if (this.isInitialized(),
            this.logger.debug("Setting JSON-RPC request history record"),
            this.logger.trace({
                type: "method",
                method: "set",
                topic: n,
                request: a,
                chainId: h
            }),
            this.records.has(a.id))
                return;
            const f = {
                id: a.id,
                topic: n,
                request: {
                    method: a.method,
                    params: a.params || null
                },
                chainId: h,
                expiry: _r(X.THIRTY_DAYS)
            };
            this.records.set(f.id, f),
            this.events.emit(Jr.created, f)
        }
        ,
        this.resolve = async n=>{
            if (this.isInitialized(),
            this.logger.debug("Updating JSON-RPC response history record"),
            this.logger.trace({
                type: "method",
                method: "update",
                response: n
            }),
            !this.records.has(n.id))
                return;
            const a = await this.getRecord(n.id);
            typeof a.response > "u" && (a.response = Hr(n) ? {
                error: n.error
            } : {
                result: n.result
            },
            this.records.set(a.id, a),
            this.events.emit(Jr.updated, a))
        }
        ,
        this.get = async(n,a)=>(this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({
            type: "method",
            method: "get",
            topic: n,
            id: a
        }),
        await this.getRecord(a)),
        this.delete = (n,a)=>{
            this.isInitialized(),
            this.logger.debug("Deleting record"),
            this.logger.trace({
                type: "method",
                method: "delete",
                id: a
            }),
            this.values.forEach(h=>{
                if (h.topic === n) {
                    if (typeof a < "u" && h.id !== a)
                        return;
                    this.records.delete(h.id),
                    this.events.emit(Jr.deleted, h)
                }
            }
            )
        }
        ,
        this.exists = async(n,a)=>(this.isInitialized(),
        this.records.has(a) ? (await this.getRecord(a)).topic === n : !1),
        this.on = (n,a)=>{
            this.events.on(n, a)
        }
        ,
        this.once = (n,a)=>{
            this.events.once(n, a)
        }
        ,
        this.off = (n,a)=>{
            this.events.off(n, a)
        }
        ,
        this.removeListener = (n,a)=>{
            this.events.removeListener(n, a)
        }
        ,
        this.logger = pr(r, this.name)
    }
    get context() {
        return fr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const t = [];
        return this.values.forEach(r=>{
            if (typeof r.response < "u")
                return;
            const n = {
                topic: r.topic,
                request: _s(r.request.method, r.request.params, r.id),
                chainId: r.chainId
            };
            return t.push(n)
        }
        ),
        t
    }
    async setJsonRpcRecords(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(t) {
        this.isInitialized();
        const r = this.records.get(t);
        if (!r) {
            const {message: n} = k("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(n)
        }
        return r
    }
    async persist() {
        await this.setJsonRpcRecords(this.values),
        this.events.emit(Jr.sync)
    }
    async restore() {
        try {
            const t = await this.getJsonRpcRecords();
            if (typeof t > "u" || !t.length)
                return;
            if (this.records.size) {
                const {message: r} = k("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r),
                new Error(r)
            }
            this.cached = t,
            this.logger.debug(`Successfully Restored records for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
            this.logger.error(t)
        }
    }
    registerEventListeners() {
        this.events.on(Jr.created, t=>{
            const r = Jr.created;
            this.logger.info(`Emitting ${r}`),
            this.logger.debug({
                type: "event",
                event: r,
                record: t
            }),
            this.persist()
        }
        ),
        this.events.on(Jr.updated, t=>{
            const r = Jr.updated;
            this.logger.info(`Emitting ${r}`),
            this.logger.debug({
                type: "event",
                event: r,
                record: t
            }),
            this.persist()
        }
        ),
        this.events.on(Jr.deleted, t=>{
            const r = Jr.deleted;
            this.logger.info(`Emitting ${r}`),
            this.logger.debug({
                type: "event",
                event: r,
                record: t
            }),
            this.persist()
        }
        ),
        this.core.heartbeat.on(Ps.HEARTBEAT_EVENTS.pulse, ()=>{
            this.cleanup()
        }
        )
    }
    cleanup() {
        try {
            this.records.forEach(t=>{
                X.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.delete(t.topic, t.id))
            }
            )
        } catch (t) {
            this.logger.warn(t)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = k("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class bx extends F_ {
    constructor(t, r) {
        super(t, r),
        this.core = t,
        this.logger = r,
        this.expirations = new Map,
        this.events = new $r.EventEmitter,
        this.name = GI,
        this.version = JI,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = Oi,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(n=>this.expirations.set(n.target, n)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ,
        this.has = n=>{
            try {
                const a = this.formatTarget(n);
                return typeof this.getExpiration(a) < "u"
            } catch {
                return !1
            }
        }
        ,
        this.set = (n,a)=>{
            this.isInitialized();
            const h = this.formatTarget(n)
              , f = {
                target: h,
                expiry: a
            };
            this.expirations.set(h, f),
            this.checkExpiry(h, f),
            this.events.emit(Ar.created, {
                target: h,
                expiration: f
            })
        }
        ,
        this.get = n=>{
            this.isInitialized();
            const a = this.formatTarget(n);
            return this.getExpiration(a)
        }
        ,
        this.del = n=>{
            if (this.isInitialized(),
            this.has(n)) {
                const a = this.formatTarget(n)
                  , h = this.getExpiration(a);
                this.expirations.delete(a),
                this.events.emit(Ar.deleted, {
                    target: a,
                    expiration: h
                })
            }
        }
        ,
        this.on = (n,a)=>{
            this.events.on(n, a)
        }
        ,
        this.once = (n,a)=>{
            this.events.once(n, a)
        }
        ,
        this.off = (n,a)=>{
            this.events.off(n, a)
        }
        ,
        this.removeListener = (n,a)=>{
            this.events.removeListener(n, a)
        }
        ,
        this.logger = pr(r, this.name)
    }
    get context() {
        return fr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(t) {
        if (typeof t == "string")
            return U1(t);
        if (typeof t == "number")
            return z1(t);
        const {message: r} = k("UNKNOWN_TYPE", `Target type: ${typeof t}`);
        throw new Error(r)
    }
    async setExpirations(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values),
        this.events.emit(Ar.sync)
    }
    async restore() {
        try {
            const t = await this.getExpirations();
            if (typeof t > "u" || !t.length)
                return;
            if (this.expirations.size) {
                const {message: r} = k("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r),
                new Error(r)
            }
            this.cached = t,
            this.logger.debug(`Successfully Restored expirations for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
            this.logger.error(t)
        }
    }
    getExpiration(t) {
        const r = this.expirations.get(t);
        if (!r) {
            const {message: n} = k("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.error(n),
            new Error(n)
        }
        return r
    }
    checkExpiry(t, r) {
        const {expiry: n} = r;
        X.toMiliseconds(n) - Date.now() <= 0 && this.expire(t, r)
    }
    expire(t, r) {
        this.expirations.delete(t),
        this.events.emit(Ar.expired, {
            target: t,
            expiration: r
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((t,r)=>this.checkExpiry(r, t))
    }
    registerEventListeners() {
        this.core.heartbeat.on(Ps.HEARTBEAT_EVENTS.pulse, ()=>this.checkExpirations()),
        this.events.on(Ar.created, t=>{
            const r = Ar.created;
            this.logger.info(`Emitting ${r}`),
            this.logger.debug({
                type: "event",
                event: r,
                data: t
            }),
            this.persist()
        }
        ),
        this.events.on(Ar.expired, t=>{
            const r = Ar.expired;
            this.logger.info(`Emitting ${r}`),
            this.logger.debug({
                type: "event",
                event: r,
                data: t
            }),
            this.persist()
        }
        ),
        this.events.on(Ar.deleted, t=>{
            const r = Ar.deleted;
            this.logger.info(`Emitting ${r}`),
            this.logger.debug({
                type: "event",
                event: r,
                data: t
            }),
            this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = k("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class _x extends W_ {
    constructor(t, r) {
        super(t, r),
        this.projectId = t,
        this.logger = r,
        this.name = wc,
        this.initialized = !1,
        this.queue = [],
        this.verifyDisabled = !1,
        this.init = async n=>{
            if (this.verifyDisabled || Is() || !xs())
                return;
            const a = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
            this.verifyUrl !== a && this.removeIframe(),
            this.verifyUrl = a;
            try {
                await this.createIframe()
            } catch (h) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                this.logger.info(h)
            }
            if (!this.initialized) {
                this.removeIframe(),
                this.verifyUrl = Mc;
                try {
                    await this.createIframe()
                } catch (h) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                    this.logger.info(h),
                    this.verifyDisabled = !0
                }
            }
        }
        ,
        this.register = async n=>{
            this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId),
            await this.init())
        }
        ,
        this.resolve = async n=>{
            if (this.isDevEnv)
                return "";
            const a = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
            let h;
            try {
                h = await this.fetchAttestation(n.attestationId, a)
            } catch (f) {
                this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${a}`),
                this.logger.info(f),
                h = await this.fetchAttestation(n.attestationId, Mc)
            }
            return h
        }
        ,
        this.fetchAttestation = async(n,a)=>{
            this.logger.info(`resolving attestation: ${n} from url: ${a}`);
            const h = this.startAbortTimer(X.ONE_SECOND * 2)
              , f = await fetch(`${a}/attestation/${n}`, {
                signal: this.abortController.signal
            });
            return clearTimeout(h),
            f.status === 200 ? await f.json() : void 0
        }
        ,
        this.addToQueue = n=>{
            this.queue.push(n)
        }
        ,
        this.processQueue = ()=>{
            this.queue.length !== 0 && (this.queue.forEach(n=>this.sendPost(n)),
            this.queue = [])
        }
        ,
        this.sendPost = n=>{
            var a;
            try {
                if (!this.iframe)
                    return;
                (a = this.iframe.contentWindow) == null || a.postMessage(n, "*"),
                this.logger.info(`postMessage sent: ${n} ${this.verifyUrl}`)
            } catch {}
        }
        ,
        this.createIframe = async()=>{
            let n;
            const a = h=>{
                h.data === "verify_ready" && (this.initialized = !0,
                this.processQueue(),
                window.removeEventListener("message", a),
                n())
            }
            ;
            await Promise.race([new Promise(h=>{
                if (document.getElementById(wc))
                    return h();
                window.addEventListener("message", a);
                const f = document.createElement("iframe");
                f.id = wc,
                f.src = `${this.verifyUrl}/${this.projectId}`,
                f.style.display = "none",
                document.body.append(f),
                this.iframe = f,
                n = h
            }
            ), new Promise((h,f)=>setTimeout(()=>{
                window.removeEventListener("message", a),
                f("verify iframe load timeout")
            }
            , X.toMiliseconds(X.FIVE_SECONDS)))])
        }
        ,
        this.removeIframe = ()=>{
            this.iframe && (this.iframe.remove(),
            this.iframe = void 0,
            this.initialized = !1)
        }
        ,
        this.getVerifyUrl = n=>{
            let a = n || bs;
            return QI.includes(a) || (this.logger.info(`verify url: ${a}, not included in trusted list, assigning default: ${bs}`),
            a = bs),
            a
        }
        ,
        this.logger = pr(r, this.name),
        this.verifyUrl = bs,
        this.abortController = new AbortController,
        this.isDevEnv = Gc() && Y_.IS_VITEST
    }
    get context() {
        return fr(this.logger)
    }
    startAbortTimer(t) {
        return this.abortController = new AbortController,
        setTimeout(()=>this.abortController.abort(), X.toMiliseconds(t))
    }
}
class Ex extends G_ {
    constructor(t, r) {
        super(t, r),
        this.projectId = t,
        this.logger = r,
        this.context = YI,
        this.registerDeviceToken = async n=>{
            const {clientId: a, token: h, notificationType: f, enableEncrypted: y=!1} = n
              , w = `${XI}/${this.projectId}/clients`;
            await a1(w, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: a,
                    type: f,
                    token: h,
                    always_raw: y
                })
            })
        }
        ,
        this.logger = pr(r, this.context)
    }
}
var Ix = Object.defineProperty
  , cf = Object.getOwnPropertySymbols
  , xx = Object.prototype.hasOwnProperty
  , Sx = Object.prototype.propertyIsEnumerable
  , uf = (s,t,r)=>t in s ? Ix(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , hf = (s,t)=>{
    for (var r in t || (t = {}))
        xx.call(t, r) && uf(s, r, t[r]);
    if (cf)
        for (var r of cf(t))
            Sx.call(t, r) && uf(s, r, t[r]);
    return s
}
;
class Xc extends U_ {
    constructor(t) {
        super(t),
        this.protocol = yp,
        this.version = EI,
        this.name = Yc,
        this.events = new $r.EventEmitter,
        this.initialized = !1,
        this.on = (n,a)=>this.events.on(n, a),
        this.once = (n,a)=>this.events.once(n, a),
        this.off = (n,a)=>this.events.off(n, a),
        this.removeListener = (n,a)=>this.events.removeListener(n, a),
        this.projectId = t == null ? void 0 : t.projectId,
        this.relayUrl = (t == null ? void 0 : t.relayUrl) || mp,
        this.customStoragePrefix = t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
        const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Ao(Do({
            level: (t == null ? void 0 : t.logger) || II.logger
        }));
        this.logger = pr(r, this.name),
        this.heartbeat = new Ps.HeartBeat,
        this.crypto = new ex(this,this.logger,t == null ? void 0 : t.keychain),
        this.history = new wx(this,this.logger),
        this.expirer = new bx(this,this.logger),
        this.storage = t != null && t.storage ? t.storage : new hb(hf(hf({}, xI), t == null ? void 0 : t.storageOptions)),
        this.relayer = new dx({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }),
        this.pairing = new mx(this,this.logger),
        this.verify = new _x(this.projectId || "",this.logger),
        this.echoClient = new Ex(this.projectId || "",this.logger)
    }
    static async init(t) {
        const r = new Xc(t);
        await r.initialize();
        const n = await r.crypto.getClientId();
        return await r.storage.setItem(zI, n),
        r
    }
    get context() {
        return fr(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(),
            await this.history.init(),
            await this.expirer.init(),
            await this.relayer.init(),
            await this.heartbeat.init(),
            await this.pairing.init(),
            this.initialized = !0,
            this.logger.info("Core Initialization Success")
        } catch (t) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t),
            this.logger.error(t.message),
            t
        }
    }
}
const Px = Xc
  , wp = "wc"
  , bp = 2
  , _p = "client"
  , Zc = `${wp}@${bp}:${_p}:`
  , _c = {
    name: _p,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com"
}
  , lf = "WALLETCONNECT_DEEPLINK_CHOICE"
  , Ox = "proposal"
  , Ep = "Proposal expired"
  , Rx = "session"
  , wo = X.SEVEN_DAYS
  , Nx = "engine"
  , hi = {
    wc_sessionPropose: {
        req: {
            ttl: X.FIVE_MINUTES,
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: X.FIVE_MINUTES,
            prompt: !1,
            tag: 1101
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: X.FIVE_MINUTES,
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: X.FIVE_MINUTES,
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: X.ONE_DAY,
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: X.ONE_DAY,
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: X.ONE_DAY,
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: X.ONE_DAY,
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: X.FIVE_MINUTES,
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: X.FIVE_MINUTES,
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: X.FIVE_MINUTES,
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: X.FIVE_MINUTES,
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: X.ONE_DAY,
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: X.ONE_DAY,
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: X.THIRTY_SECONDS,
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: X.THIRTY_SECONDS,
            prompt: !1,
            tag: 1115
        }
    }
}
  , Ec = {
    min: X.FIVE_MINUTES,
    max: X.SEVEN_DAYS
}
  , li = {
    idle: "IDLE",
    active: "ACTIVE"
}
  , Tx = "request"
  , Cx = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Ax = Object.defineProperty
  , $x = Object.defineProperties
  , Dx = Object.getOwnPropertyDescriptors
  , ff = Object.getOwnPropertySymbols
  , Mx = Object.prototype.hasOwnProperty
  , qx = Object.prototype.propertyIsEnumerable
  , pf = (s,t,r)=>t in s ? Ax(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , Xt = (s,t)=>{
    for (var r in t || (t = {}))
        Mx.call(t, r) && pf(s, r, t[r]);
    if (ff)
        for (var r of ff(t))
            qx.call(t, r) && pf(s, r, t[r]);
    return s
}
  , ms = (s,t)=>$x(s, Dx(t));
class jx extends Q_ {
    constructor(t) {
        super(t),
        this.name = Nx,
        this.events = new Uc,
        this.initialized = !1,
        this.ignoredPayloadTypes = [Qi],
        this.requestQueue = {
            state: li.idle,
            queue: []
        },
        this.sessionRequestQueue = {
            state: li.idle,
            queue: []
        },
        this.requestQueueDelay = X.ONE_SECOND,
        this.init = async()=>{
            this.initialized || (await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.registerPairingEvents(),
            this.client.core.pairing.register({
                methods: Object.keys(hi)
            }),
            this.initialized = !0,
            setTimeout(()=>{
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                this.processSessionRequestQueue()
            }
            , X.toMiliseconds(this.requestQueueDelay)))
        }
        ,
        this.connect = async r=>{
            await this.isInitialized();
            const n = ms(Xt({}, r), {
                requiredNamespaces: r.requiredNamespaces || {},
                optionalNamespaces: r.optionalNamespaces || {}
            });
            await this.isValidConnect(n);
            const {pairingTopic: a, requiredNamespaces: h, optionalNamespaces: f, sessionProperties: y, relays: w} = n;
            let v = a, E, P = !1;
            if (v && (P = this.client.core.pairing.pairings.get(v).active),
            !v || !P) {
                const {topic: me, uri: ie} = await this.client.core.pairing.create();
                v = me,
                E = ie
            }
            const C = await this.client.core.crypto.generateKeyPair()
              , z = hi.wc_sessionPropose.req.ttl || X.FIVE_MINUTES
              , M = _r(z)
              , Z = Xt({
                requiredNamespaces: h,
                optionalNamespaces: f,
                relays: w ?? [{
                    protocol: vp
                }],
                proposer: {
                    publicKey: C,
                    metadata: this.client.metadata
                },
                expiryTimestamp: M
            }, y && {
                sessionProperties: y
            })
              , {reject: ne, resolve: oe, done: le} = ws(z, Ep);
            if (this.events.once(vt("session_connect"), async({error: me, session: ie})=>{
                if (me)
                    ne(me);
                else if (ie) {
                    ie.self.publicKey = C;
                    const ae = ms(Xt({}, ie), {
                        requiredNamespaces: Z.requiredNamespaces,
                        optionalNamespaces: Z.optionalNamespaces
                    });
                    await this.client.session.set(ie.topic, ae),
                    await this.setExpiry(ie.topic, ie.expiry),
                    v && await this.client.core.pairing.updateMetadata({
                        topic: v,
                        metadata: ie.peer.metadata
                    }),
                    oe(ae)
                }
            }
            ),
            !v) {
                const {message: me} = k("NO_MATCHING_KEY", `connect() pairing topic: ${v}`);
                throw new Error(me)
            }
            const ge = await this.sendRequest({
                topic: v,
                method: "wc_sessionPropose",
                params: Z,
                throwOnFailedPublish: !0
            });
            return await this.setProposal(ge, Xt({
                id: ge
            }, Z)),
            {
                uri: E,
                approval: le
            }
        }
        ,
        this.pair = async r=>(await this.isInitialized(),
        await this.client.core.pairing.pair(r)),
        this.approve = async r=>{
            await this.isInitialized(),
            await this.isValidApprove(r);
            const {id: n, relayProtocol: a, namespaces: h, sessionProperties: f} = r
              , y = this.client.proposal.get(n);
            let {pairingTopic: w, proposer: v, requiredNamespaces: E, optionalNamespaces: P} = y;
            w = w || "";
            const C = await this.client.core.crypto.generateKeyPair()
              , z = v.publicKey
              , M = await this.client.core.crypto.generateSharedKey(C, z);
            w && n && (await this.client.core.pairing.updateMetadata({
                topic: w,
                metadata: v.metadata
            }),
            await this.sendResult({
                id: n,
                topic: w,
                result: {
                    relay: {
                        protocol: a ?? "irn"
                    },
                    responderPublicKey: C
                }
            }),
            await this.client.proposal.delete(n, Ye("USER_DISCONNECTED")),
            await this.client.core.pairing.activate({
                topic: w
            }));
            const Z = Xt({
                relay: {
                    protocol: a ?? "irn"
                },
                namespaces: h,
                pairingTopic: w,
                controller: {
                    publicKey: C,
                    metadata: this.client.metadata
                },
                expiry: _r(wo)
            }, f && {
                sessionProperties: f
            });
            await this.client.core.relayer.subscribe(M);
            const ne = ms(Xt({}, Z), {
                topic: M,
                requiredNamespaces: E,
                optionalNamespaces: P,
                pairingTopic: w,
                acknowledged: !1,
                self: Z.controller,
                peer: {
                    publicKey: v.publicKey,
                    metadata: v.metadata
                },
                controller: C
            });
            await this.client.session.set(M, ne);
            try {
                await this.sendRequest({
                    topic: M,
                    method: "wc_sessionSettle",
                    params: Z,
                    throwOnFailedPublish: !0
                })
            } catch (oe) {
                throw this.client.logger.error(oe),
                this.client.session.delete(M, Ye("USER_DISCONNECTED")),
                await this.client.core.relayer.unsubscribe(M),
                oe
            }
            return await this.setExpiry(M, _r(wo)),
            {
                topic: M,
                acknowledged: ()=>new Promise(oe=>setTimeout(()=>oe(this.client.session.get(M)), 500))
            }
        }
        ,
        this.reject = async r=>{
            await this.isInitialized(),
            await this.isValidReject(r);
            const {id: n, reason: a} = r
              , {pairingTopic: h} = this.client.proposal.get(n);
            h && (await this.sendError(n, h, a),
            await this.client.proposal.delete(n, Ye("USER_DISCONNECTED")))
        }
        ,
        this.update = async r=>{
            await this.isInitialized(),
            await this.isValidUpdate(r);
            const {topic: n, namespaces: a} = r
              , h = await this.sendRequest({
                topic: n,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: a
                }
            })
              , {done: f, resolve: y, reject: w} = ws();
            return this.events.once(vt("session_update", h), ({error: v})=>{
                v ? w(v) : y()
            }
            ),
            await this.client.session.update(n, {
                namespaces: a
            }),
            {
                acknowledged: f
            }
        }
        ,
        this.extend = async r=>{
            await this.isInitialized(),
            await this.isValidExtend(r);
            const {topic: n} = r
              , a = await this.sendRequest({
                topic: n,
                method: "wc_sessionExtend",
                params: {}
            })
              , {done: h, resolve: f, reject: y} = ws();
            return this.events.once(vt("session_extend", a), ({error: w})=>{
                w ? y(w) : f()
            }
            ),
            await this.setExpiry(n, _r(wo)),
            {
                acknowledged: h
            }
        }
        ,
        this.request = async r=>{
            await this.isInitialized(),
            await this.isValidRequest(r);
            const {chainId: n, request: a, topic: h, expiry: f=hi.wc_sessionRequest.req.ttl} = r
              , y = Vc()
              , {done: w, resolve: v, reject: E} = ws(f, "Request expired. Please try again.");
            return this.events.once(vt("session_request", y), ({error: P, result: C})=>{
                P ? E(P) : v(C)
            }
            ),
            await Promise.all([new Promise(async P=>{
                await this.sendRequest({
                    clientRpcId: y,
                    topic: h,
                    method: "wc_sessionRequest",
                    params: {
                        request: ms(Xt({}, a), {
                            expiryTimestamp: _r(f)
                        }),
                        chainId: n
                    },
                    expiry: f,
                    throwOnFailedPublish: !0
                }).catch(C=>E(C)),
                this.client.events.emit("session_request_sent", {
                    topic: h,
                    request: a,
                    chainId: n,
                    id: y
                }),
                P()
            }
            ), new Promise(async P=>{
                const C = await H1(this.client.core.storage, lf);
                k1({
                    id: y,
                    topic: h,
                    wcDeepLink: C
                }),
                P()
            }
            ), w()]).then(P=>P[2])
        }
        ,
        this.respond = async r=>{
            await this.isInitialized(),
            await this.isValidRespond(r);
            const {topic: n, response: a} = r
              , {id: h} = a;
            fi(a) ? await this.sendResult({
                id: h,
                topic: n,
                result: a.result,
                throwOnFailedPublish: !0
            }) : Hr(a) && await this.sendError(h, n, a.error),
            this.cleanupAfterResponse(r)
        }
        ,
        this.ping = async r=>{
            await this.isInitialized(),
            await this.isValidPing(r);
            const {topic: n} = r;
            if (this.client.session.keys.includes(n)) {
                const a = await this.sendRequest({
                    topic: n,
                    method: "wc_sessionPing",
                    params: {}
                })
                  , {done: h, resolve: f, reject: y} = ws();
                this.events.once(vt("session_ping", a), ({error: w})=>{
                    w ? y(w) : f()
                }
                ),
                await h()
            } else
                this.client.core.pairing.pairings.keys.includes(n) && await this.client.core.pairing.ping({
                    topic: n
                })
        }
        ,
        this.emit = async r=>{
            await this.isInitialized(),
            await this.isValidEmit(r);
            const {topic: n, event: a, chainId: h} = r;
            await this.sendRequest({
                topic: n,
                method: "wc_sessionEvent",
                params: {
                    event: a,
                    chainId: h
                }
            })
        }
        ,
        this.disconnect = async r=>{
            await this.isInitialized(),
            await this.isValidDisconnect(r);
            const {topic: n} = r;
            if (this.client.session.keys.includes(n))
                await this.sendRequest({
                    topic: n,
                    method: "wc_sessionDelete",
                    params: Ye("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0
                }),
                await this.deleteSession({
                    topic: n,
                    emitEvent: !1
                });
            else if (this.client.core.pairing.pairings.keys.includes(n))
                await this.client.core.pairing.disconnect({
                    topic: n
                });
            else {
                const {message: a} = k("MISMATCHED_TOPIC", `Session or pairing topic not found: ${n}`);
                throw new Error(a)
            }
        }
        ,
        this.find = r=>(this.isInitialized(),
        this.client.session.getAll().filter(n=>o_(n, r))),
        this.getPendingSessionRequests = ()=>this.client.pendingRequest.getAll(),
        this.cleanupDuplicatePairings = async r=>{
            if (r.pairingTopic)
                try {
                    const n = this.client.core.pairing.pairings.get(r.pairingTopic)
                      , a = this.client.core.pairing.pairings.getAll().filter(h=>{
                        var f, y;
                        return ((f = h.peerMetadata) == null ? void 0 : f.url) && ((y = h.peerMetadata) == null ? void 0 : y.url) === r.peer.metadata.url && h.topic && h.topic !== n.topic
                    }
                    );
                    if (a.length === 0)
                        return;
                    this.client.logger.info(`Cleaning up ${a.length} duplicate pairing(s)`),
                    await Promise.all(a.map(h=>this.client.core.pairing.disconnect({
                        topic: h.topic
                    }))),
                    this.client.logger.info("Duplicate pairings clean up finished")
                } catch (n) {
                    this.client.logger.error(n)
                }
        }
        ,
        this.deleteSession = async r=>{
            const {topic: n, expirerHasDeleted: a=!1, emitEvent: h=!0, id: f=0} = r
              , {self: y} = this.client.session.get(n);
            await this.client.core.relayer.unsubscribe(n),
            await this.client.session.delete(n, Ye("USER_DISCONNECTED")),
            this.client.core.crypto.keychain.has(y.publicKey) && await this.client.core.crypto.deleteKeyPair(y.publicKey),
            this.client.core.crypto.keychain.has(n) && await this.client.core.crypto.deleteSymKey(n),
            a || this.client.core.expirer.del(n),
            this.client.core.storage.removeItem(lf).catch(w=>this.client.logger.warn(w)),
            this.getPendingSessionRequests().forEach(w=>{
                w.topic === n && this.deletePendingSessionRequest(w.id, Ye("USER_DISCONNECTED"))
            }
            ),
            h && this.client.events.emit("session_delete", {
                id: f,
                topic: n
            })
        }
        ,
        this.deleteProposal = async(r,n)=>{
            await Promise.all([this.client.proposal.delete(r, Ye("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)])
        }
        ,
        this.deletePendingSessionRequest = async(r,n,a=!1)=>{
            await Promise.all([this.client.pendingRequest.delete(r, n), a ? Promise.resolve() : this.client.core.expirer.del(r)]),
            this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(h=>h.id !== r),
            a && (this.sessionRequestQueue.state = li.idle,
            this.client.events.emit("session_request_expire", {
                id: r
            }))
        }
        ,
        this.setExpiry = async(r,n)=>{
            this.client.session.keys.includes(r) && await this.client.session.update(r, {
                expiry: n
            }),
            this.client.core.expirer.set(r, n)
        }
        ,
        this.setProposal = async(r,n)=>{
            await this.client.proposal.set(r, n),
            this.client.core.expirer.set(r, _r(hi.wc_sessionPropose.req.ttl))
        }
        ,
        this.setPendingSessionRequest = async r=>{
            const {id: n, topic: a, params: h, verifyContext: f} = r
              , y = h.request.expiryTimestamp || _r(hi.wc_sessionRequest.req.ttl);
            await this.client.pendingRequest.set(n, {
                id: n,
                topic: a,
                params: h,
                verifyContext: f
            }),
            y && this.client.core.expirer.set(n, y)
        }
        ,
        this.sendRequest = async r=>{
            const {topic: n, method: a, params: h, expiry: f, relayRpcId: y, clientRpcId: w, throwOnFailedPublish: v} = r
              , E = _s(a, h, w);
            if (xs() && Cx.includes(a)) {
                const z = Es(JSON.stringify(E));
                this.client.core.verify.register({
                    attestationId: z
                })
            }
            const P = await this.client.core.crypto.encode(n, E)
              , C = hi[a].req;
            return f && (C.ttl = f),
            y && (C.id = y),
            this.client.core.history.set(n, E),
            v ? (C.internal = ms(Xt({}, C.internal), {
                throwOnFailedPublish: !0
            }),
            await this.client.core.relayer.publish(n, P, C)) : this.client.core.relayer.publish(n, P, C).catch(z=>this.client.logger.error(z)),
            E.id
        }
        ,
        this.sendResult = async r=>{
            const {id: n, topic: a, result: h, throwOnFailedPublish: f} = r
              , y = Mo(n, h)
              , w = await this.client.core.crypto.encode(a, y)
              , v = await this.client.core.history.get(a, n)
              , E = hi[v.request.method].res;
            f ? (E.internal = ms(Xt({}, E.internal), {
                throwOnFailedPublish: !0
            }),
            await this.client.core.relayer.publish(a, w, E)) : this.client.core.relayer.publish(a, w, E).catch(P=>this.client.logger.error(P)),
            await this.client.core.history.resolve(y)
        }
        ,
        this.sendError = async(r,n,a)=>{
            const h = qo(r, a)
              , f = await this.client.core.crypto.encode(n, h)
              , y = await this.client.core.history.get(n, r)
              , w = hi[y.request.method].res;
            this.client.core.relayer.publish(n, f, w),
            await this.client.core.history.resolve(h)
        }
        ,
        this.cleanup = async()=>{
            const r = []
              , n = [];
            this.client.session.getAll().forEach(a=>{
                let h = !1;
                Pi(a.expiry) && (h = !0),
                this.client.core.crypto.keychain.has(a.topic) || (h = !0),
                h && r.push(a.topic)
            }
            ),
            this.client.proposal.getAll().forEach(a=>{
                Pi(a.expiryTimestamp) && n.push(a.id)
            }
            ),
            await Promise.all([...r.map(a=>this.deleteSession({
                topic: a
            })), ...n.map(a=>this.deleteProposal(a))])
        }
        ,
        this.onRelayEventRequest = async r=>{
            this.requestQueue.queue.push(r),
            await this.processRequestsQueue()
        }
        ,
        this.processRequestsQueue = async()=>{
            if (this.requestQueue.state === li.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
                this.requestQueue.state = li.active;
                const r = this.requestQueue.queue.shift();
                if (r)
                    try {
                        this.processRequest(r),
                        await new Promise(n=>setTimeout(n, 300))
                    } catch (n) {
                        this.client.logger.warn(n)
                    }
            }
            this.requestQueue.state = li.idle
        }
        ,
        this.processRequest = r=>{
            const {topic: n, payload: a} = r
              , h = a.method;
            switch (h) {
            case "wc_sessionPropose":
                return this.onSessionProposeRequest(n, a);
            case "wc_sessionSettle":
                return this.onSessionSettleRequest(n, a);
            case "wc_sessionUpdate":
                return this.onSessionUpdateRequest(n, a);
            case "wc_sessionExtend":
                return this.onSessionExtendRequest(n, a);
            case "wc_sessionPing":
                return this.onSessionPingRequest(n, a);
            case "wc_sessionDelete":
                return this.onSessionDeleteRequest(n, a);
            case "wc_sessionRequest":
                return this.onSessionRequest(n, a);
            case "wc_sessionEvent":
                return this.onSessionEventRequest(n, a);
            default:
                return this.client.logger.info(`Unsupported request method ${h}`)
            }
        }
        ,
        this.onRelayEventResponse = async r=>{
            const {topic: n, payload: a} = r
              , h = (await this.client.core.history.get(n, a.id)).request.method;
            switch (h) {
            case "wc_sessionPropose":
                return this.onSessionProposeResponse(n, a);
            case "wc_sessionSettle":
                return this.onSessionSettleResponse(n, a);
            case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(n, a);
            case "wc_sessionExtend":
                return this.onSessionExtendResponse(n, a);
            case "wc_sessionPing":
                return this.onSessionPingResponse(n, a);
            case "wc_sessionRequest":
                return this.onSessionRequestResponse(n, a);
            default:
                return this.client.logger.info(`Unsupported response method ${h}`)
            }
        }
        ,
        this.onRelayEventUnknownPayload = r=>{
            const {topic: n} = r
              , {message: a} = k("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(a)
        }
        ,
        this.onSessionProposeRequest = async(r,n)=>{
            const {params: a, id: h} = n;
            try {
                this.isValidConnect(Xt({}, n.params));
                const f = a.expiryTimestamp || _r(hi.wc_sessionPropose.req.ttl)
                  , y = Xt({
                    id: h,
                    pairingTopic: r,
                    expiryTimestamp: f
                }, a);
                await this.setProposal(h, y);
                const w = Es(JSON.stringify(n))
                  , v = await this.getVerifyContext(w, y.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: h,
                    params: y,
                    verifyContext: v
                })
            } catch (f) {
                await this.sendError(h, r, f),
                this.client.logger.error(f)
            }
        }
        ,
        this.onSessionProposeResponse = async(r,n)=>{
            const {id: a} = n;
            if (fi(n)) {
                const {result: h} = n;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: h
                });
                const f = this.client.proposal.get(a);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: f
                });
                const y = f.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: y
                });
                const w = h.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: w
                });
                const v = await this.client.core.crypto.generateSharedKey(y, w);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: v
                });
                const E = await this.client.core.relayer.subscribe(v);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: E
                }),
                await this.client.core.pairing.activate({
                    topic: r
                })
            } else
                Hr(n) && (await this.client.proposal.delete(a, Ye("USER_DISCONNECTED")),
                this.events.emit(vt("session_connect"), {
                    error: n.error
                }))
        }
        ,
        this.onSessionSettleRequest = async(r,n)=>{
            const {id: a, params: h} = n;
            try {
                this.isValidSessionSettleRequest(h);
                const {relay: f, controller: y, expiry: w, namespaces: v, sessionProperties: E, pairingTopic: P} = n.params
                  , C = Xt({
                    topic: r,
                    relay: f,
                    expiry: w,
                    namespaces: v,
                    acknowledged: !0,
                    pairingTopic: P,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    controller: y.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: y.publicKey,
                        metadata: y.metadata
                    }
                }, E && {
                    sessionProperties: E
                });
                await this.sendResult({
                    id: n.id,
                    topic: r,
                    result: !0
                }),
                this.events.emit(vt("session_connect"), {
                    session: C
                }),
                this.cleanupDuplicatePairings(C)
            } catch (f) {
                await this.sendError(a, r, f),
                this.client.logger.error(f)
            }
        }
        ,
        this.onSessionSettleResponse = async(r,n)=>{
            const {id: a} = n;
            fi(n) ? (await this.client.session.update(r, {
                acknowledged: !0
            }),
            this.events.emit(vt("session_approve", a), {})) : Hr(n) && (await this.client.session.delete(r, Ye("USER_DISCONNECTED")),
            this.events.emit(vt("session_approve", a), {
                error: n.error
            }))
        }
        ,
        this.onSessionUpdateRequest = async(r,n)=>{
            const {params: a, id: h} = n;
            try {
                const f = `${r}_session_update`
                  , y = mo.get(f);
                if (y && this.isRequestOutOfSync(y, h)) {
                    this.client.logger.info(`Discarding out of sync request - ${h}`);
                    return
                }
                this.isValidUpdate(Xt({
                    topic: r
                }, a)),
                await this.client.session.update(r, {
                    namespaces: a.namespaces
                }),
                await this.sendResult({
                    id: h,
                    topic: r,
                    result: !0
                }),
                this.client.events.emit("session_update", {
                    id: h,
                    topic: r,
                    params: a
                }),
                mo.set(f, h)
            } catch (f) {
                await this.sendError(h, r, f),
                this.client.logger.error(f)
            }
        }
        ,
        this.isRequestOutOfSync = (r,n)=>parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)),
        this.onSessionUpdateResponse = (r,n)=>{
            const {id: a} = n;
            fi(n) ? this.events.emit(vt("session_update", a), {}) : Hr(n) && this.events.emit(vt("session_update", a), {
                error: n.error
            })
        }
        ,
        this.onSessionExtendRequest = async(r,n)=>{
            const {id: a} = n;
            try {
                this.isValidExtend({
                    topic: r
                }),
                await this.setExpiry(r, _r(wo)),
                await this.sendResult({
                    id: a,
                    topic: r,
                    result: !0
                }),
                this.client.events.emit("session_extend", {
                    id: a,
                    topic: r
                })
            } catch (h) {
                await this.sendError(a, r, h),
                this.client.logger.error(h)
            }
        }
        ,
        this.onSessionExtendResponse = (r,n)=>{
            const {id: a} = n;
            fi(n) ? this.events.emit(vt("session_extend", a), {}) : Hr(n) && this.events.emit(vt("session_extend", a), {
                error: n.error
            })
        }
        ,
        this.onSessionPingRequest = async(r,n)=>{
            const {id: a} = n;
            try {
                this.isValidPing({
                    topic: r
                }),
                await this.sendResult({
                    id: a,
                    topic: r,
                    result: !0
                }),
                this.client.events.emit("session_ping", {
                    id: a,
                    topic: r
                })
            } catch (h) {
                await this.sendError(a, r, h),
                this.client.logger.error(h)
            }
        }
        ,
        this.onSessionPingResponse = (r,n)=>{
            const {id: a} = n;
            setTimeout(()=>{
                fi(n) ? this.events.emit(vt("session_ping", a), {}) : Hr(n) && this.events.emit(vt("session_ping", a), {
                    error: n.error
                })
            }
            , 500)
        }
        ,
        this.onSessionDeleteRequest = async(r,n)=>{
            const {id: a} = n;
            try {
                this.isValidDisconnect({
                    topic: r,
                    reason: n.params
                }),
                await Promise.all([new Promise(h=>{
                    this.client.core.relayer.once(Vt.publish, async()=>{
                        h(await this.deleteSession({
                            topic: r,
                            id: a
                        }))
                    }
                    )
                }
                ), this.sendResult({
                    id: a,
                    topic: r,
                    result: !0
                }), this.cleanupPendingSentRequestsForTopic({
                    topic: r,
                    error: Ye("USER_DISCONNECTED")
                })])
            } catch (h) {
                this.client.logger.error(h)
            }
        }
        ,
        this.onSessionRequest = async(r,n)=>{
            const {id: a, params: h} = n;
            try {
                this.isValidRequest(Xt({
                    topic: r
                }, h));
                const f = Es(JSON.stringify(_s("wc_sessionRequest", h, a)))
                  , y = this.client.session.get(r)
                  , w = await this.getVerifyContext(f, y.peer.metadata)
                  , v = {
                    id: a,
                    topic: r,
                    params: h,
                    verifyContext: w
                };
                await this.setPendingSessionRequest(v),
                this.addSessionRequestToSessionRequestQueue(v),
                this.processSessionRequestQueue()
            } catch (f) {
                await this.sendError(a, r, f),
                this.client.logger.error(f)
            }
        }
        ,
        this.onSessionRequestResponse = (r,n)=>{
            const {id: a} = n;
            fi(n) ? this.events.emit(vt("session_request", a), {
                result: n.result
            }) : Hr(n) && this.events.emit(vt("session_request", a), {
                error: n.error
            })
        }
        ,
        this.onSessionEventRequest = async(r,n)=>{
            const {id: a, params: h} = n;
            try {
                const f = `${r}_session_event_${h.event.name}`
                  , y = mo.get(f);
                if (y && this.isRequestOutOfSync(y, a)) {
                    this.client.logger.info(`Discarding out of sync request - ${a}`);
                    return
                }
                this.isValidEmit(Xt({
                    topic: r
                }, h)),
                this.client.events.emit("session_event", {
                    id: a,
                    topic: r,
                    params: h
                }),
                mo.set(f, a)
            } catch (f) {
                await this.sendError(a, r, f),
                this.client.logger.error(f)
            }
        }
        ,
        this.addSessionRequestToSessionRequestQueue = r=>{
            this.sessionRequestQueue.queue.push(r)
        }
        ,
        this.cleanupAfterResponse = r=>{
            this.deletePendingSessionRequest(r.response.id, {
                message: "fulfilled",
                code: 0
            }),
            setTimeout(()=>{
                this.sessionRequestQueue.state = li.idle,
                this.processSessionRequestQueue()
            }
            , X.toMiliseconds(this.requestQueueDelay))
        }
        ,
        this.cleanupPendingSentRequestsForTopic = ({topic: r, error: n})=>{
            const a = this.client.core.history.pending;
            a.length > 0 && a.filter(h=>h.topic === r && h.request.method === "wc_sessionRequest").forEach(h=>{
                this.events.emit(vt("session_request", h.request.id), {
                    error: n
                })
            }
            )
        }
        ,
        this.processSessionRequestQueue = ()=>{
            if (this.sessionRequestQueue.state === li.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            const r = this.sessionRequestQueue.queue[0];
            if (!r) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = li.active,
                this.client.events.emit("session_request", r)
            } catch (n) {
                this.client.logger.error(n)
            }
        }
        ,
        this.onPairingCreated = r=>{
            if (r.active)
                return;
            const n = this.client.proposal.getAll().find(a=>a.pairingTopic === r.topic);
            n && this.onSessionProposeRequest(r.topic, _s("wc_sessionPropose", {
                requiredNamespaces: n.requiredNamespaces,
                optionalNamespaces: n.optionalNamespaces,
                relays: n.relays,
                proposer: n.proposer,
                sessionProperties: n.sessionProperties
            }, n.id))
        }
        ,
        this.isValidConnect = async r=>{
            if (!hr(r)) {
                const {message: w} = k("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
                throw new Error(w)
            }
            const {pairingTopic: n, requiredNamespaces: a, optionalNamespaces: h, sessionProperties: f, relays: y} = r;
            if (Zt(n) || await this.isValidPairingTopic(n),
            !m_(y, !0)) {
                const {message: w} = k("MISSING_OR_INVALID", `connect() relays: ${y}`);
                throw new Error(w)
            }
            !Zt(a) && rn(a) !== 0 && this.validateNamespaces(a, "requiredNamespaces"),
            !Zt(h) && rn(h) !== 0 && this.validateNamespaces(h, "optionalNamespaces"),
            Zt(f) || this.validateSessionProps(f, "sessionProperties")
        }
        ,
        this.validateNamespaces = (r,n)=>{
            const a = v_(r, "connect()", n);
            if (a)
                throw new Error(a.message)
        }
        ,
        this.isValidApprove = async r=>{
            if (!hr(r))
                throw new Error(k("MISSING_OR_INVALID", `approve() params: ${r}`).message);
            const {id: n, namespaces: a, relayProtocol: h, sessionProperties: f} = r;
            await this.isValidProposalId(n);
            const y = this.client.proposal.get(n)
              , w = dc(a, "approve()");
            if (w)
                throw new Error(w.message);
            const v = Ll(y.requiredNamespaces, a, "approve()");
            if (v)
                throw new Error(v.message);
            if (!jt(h, !0)) {
                const {message: E} = k("MISSING_OR_INVALID", `approve() relayProtocol: ${h}`);
                throw new Error(E)
            }
            Zt(f) || this.validateSessionProps(f, "sessionProperties")
        }
        ,
        this.isValidReject = async r=>{
            if (!hr(r)) {
                const {message: h} = k("MISSING_OR_INVALID", `reject() params: ${r}`);
                throw new Error(h)
            }
            const {id: n, reason: a} = r;
            if (await this.isValidProposalId(n),
            !b_(a)) {
                const {message: h} = k("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(a)}`);
                throw new Error(h)
            }
        }
        ,
        this.isValidSessionSettleRequest = r=>{
            if (!hr(r)) {
                const {message: v} = k("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
                throw new Error(v)
            }
            const {relay: n, controller: a, namespaces: h, expiry: f} = r;
            if (!rp(n)) {
                const {message: v} = k("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(v)
            }
            const y = l_(a, "onSessionSettleRequest()");
            if (y)
                throw new Error(y.message);
            const w = dc(h, "onSessionSettleRequest()");
            if (w)
                throw new Error(w.message);
            if (Pi(f)) {
                const {message: v} = k("EXPIRED", "onSessionSettleRequest()");
                throw new Error(v)
            }
        }
        ,
        this.isValidUpdate = async r=>{
            if (!hr(r)) {
                const {message: w} = k("MISSING_OR_INVALID", `update() params: ${r}`);
                throw new Error(w)
            }
            const {topic: n, namespaces: a} = r;
            await this.isValidSessionTopic(n);
            const h = this.client.session.get(n)
              , f = dc(a, "update()");
            if (f)
                throw new Error(f.message);
            const y = Ll(h.requiredNamespaces, a, "update()");
            if (y)
                throw new Error(y.message)
        }
        ,
        this.isValidExtend = async r=>{
            if (!hr(r)) {
                const {message: a} = k("MISSING_OR_INVALID", `extend() params: ${r}`);
                throw new Error(a)
            }
            const {topic: n} = r;
            await this.isValidSessionTopic(n)
        }
        ,
        this.isValidRequest = async r=>{
            if (!hr(r)) {
                const {message: w} = k("MISSING_OR_INVALID", `request() params: ${r}`);
                throw new Error(w)
            }
            const {topic: n, request: a, chainId: h, expiry: f} = r;
            await this.isValidSessionTopic(n);
            const {namespaces: y} = this.client.session.get(n);
            if (!jl(y, h)) {
                const {message: w} = k("MISSING_OR_INVALID", `request() chainId: ${h}`);
                throw new Error(w)
            }
            if (!__(a)) {
                const {message: w} = k("MISSING_OR_INVALID", `request() ${JSON.stringify(a)}`);
                throw new Error(w)
            }
            if (!x_(y, h, a.method)) {
                const {message: w} = k("MISSING_OR_INVALID", `request() method: ${a.method}`);
                throw new Error(w)
            }
            if (f && !R_(f, Ec)) {
                const {message: w} = k("MISSING_OR_INVALID", `request() expiry: ${f}. Expiry must be a number (in seconds) between ${Ec.min} and ${Ec.max}`);
                throw new Error(w)
            }
        }
        ,
        this.isValidRespond = async r=>{
            var n;
            if (!hr(r)) {
                const {message: f} = k("MISSING_OR_INVALID", `respond() params: ${r}`);
                throw new Error(f)
            }
            const {topic: a, response: h} = r;
            try {
                await this.isValidSessionTopic(a)
            } catch (f) {
                throw (n = r == null ? void 0 : r.response) != null && n.id && this.cleanupAfterResponse(r),
                f
            }
            if (!E_(h)) {
                const {message: f} = k("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(h)}`);
                throw new Error(f)
            }
        }
        ,
        this.isValidPing = async r=>{
            if (!hr(r)) {
                const {message: a} = k("MISSING_OR_INVALID", `ping() params: ${r}`);
                throw new Error(a)
            }
            const {topic: n} = r;
            await this.isValidSessionOrPairingTopic(n)
        }
        ,
        this.isValidEmit = async r=>{
            if (!hr(r)) {
                const {message: y} = k("MISSING_OR_INVALID", `emit() params: ${r}`);
                throw new Error(y)
            }
            const {topic: n, event: a, chainId: h} = r;
            await this.isValidSessionTopic(n);
            const {namespaces: f} = this.client.session.get(n);
            if (!jl(f, h)) {
                const {message: y} = k("MISSING_OR_INVALID", `emit() chainId: ${h}`);
                throw new Error(y)
            }
            if (!I_(a)) {
                const {message: y} = k("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
                throw new Error(y)
            }
            if (!S_(f, h, a.name)) {
                const {message: y} = k("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
                throw new Error(y)
            }
        }
        ,
        this.isValidDisconnect = async r=>{
            if (!hr(r)) {
                const {message: a} = k("MISSING_OR_INVALID", `disconnect() params: ${r}`);
                throw new Error(a)
            }
            const {topic: n} = r;
            await this.isValidSessionOrPairingTopic(n)
        }
        ,
        this.getVerifyContext = async(r,n)=>{
            const a = {
                verified: {
                    verifyUrl: n.verifyUrl || bs,
                    validation: "UNKNOWN",
                    origin: n.url || ""
                }
            };
            try {
                const h = await this.client.core.verify.resolve({
                    attestationId: r,
                    verifyUrl: n.verifyUrl
                });
                h && (a.verified.origin = h.origin,
                a.verified.isScam = h.isScam,
                a.verified.validation = h.origin === new URL(n.url).origin ? "VALID" : "INVALID")
            } catch (h) {
                this.client.logger.info(h)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(a)}`),
            a
        }
        ,
        this.validateSessionProps = (r,n)=>{
            Object.values(r).forEach(a=>{
                if (!jt(a, !1)) {
                    const {message: h} = k("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(a)}`);
                    throw new Error(h)
                }
            }
            )
        }
    }
    async isInitialized() {
        if (!this.initialized) {
            const {message: t} = k("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
        await this.client.core.relayer.confirmOnlineStateOrThrow()
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(Vt.message, async t=>{
            const {topic: r, message: n} = t;
            if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
                return;
            const a = await this.client.core.crypto.decode(r, n);
            try {
                Bc(a) ? (this.client.core.history.set(r, a),
                this.onRelayEventRequest({
                    topic: r,
                    payload: a
                })) : jo(a) ? (await this.client.core.history.resolve(a),
                await this.onRelayEventResponse({
                    topic: r,
                    payload: a
                }),
                this.client.core.history.delete(r, a.id)) : this.onRelayEventUnknownPayload({
                    topic: r,
                    payload: a
                })
            } catch (h) {
                this.client.logger.error(h)
            }
        }
        )
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(Ar.expired, async t=>{
            const {topic: r, id: n} = ep(t.target);
            if (n && this.client.pendingRequest.keys.includes(n))
                return await this.deletePendingSessionRequest(n, k("EXPIRED"), !0);
            r ? this.client.session.keys.includes(r) && (await this.deleteSession({
                topic: r,
                expirerHasDeleted: !0
            }),
            this.client.events.emit("session_expire", {
                topic: r
            })) : n && (await this.deleteProposal(n, !0),
            this.client.events.emit("proposal_expire", {
                id: n
            }))
        }
        )
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(Xs.create, t=>this.onPairingCreated(t))
    }
    isValidPairingTopic(t) {
        if (!jt(t, !1)) {
            const {message: r} = k("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
            throw new Error(r)
        }
        if (!this.client.core.pairing.pairings.keys.includes(t)) {
            const {message: r} = k("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
            throw new Error(r)
        }
        if (Pi(this.client.core.pairing.pairings.get(t).expiry)) {
            const {message: r} = k("EXPIRED", `pairing topic: ${t}`);
            throw new Error(r)
        }
    }
    async isValidSessionTopic(t) {
        if (!jt(t, !1)) {
            const {message: r} = k("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
            throw new Error(r)
        }
        if (!this.client.session.keys.includes(t)) {
            const {message: r} = k("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
            throw new Error(r)
        }
        if (Pi(this.client.session.get(t).expiry)) {
            await this.deleteSession({
                topic: t
            });
            const {message: r} = k("EXPIRED", `session topic: ${t}`);
            throw new Error(r)
        }
        if (!this.client.core.crypto.keychain.has(t)) {
            const {message: r} = k("MISSING_OR_INVALID", `session topic does not exist in keychain: ${t}`);
            throw await this.deleteSession({
                topic: t
            }),
            new Error(r)
        }
    }
    async isValidSessionOrPairingTopic(t) {
        if (this.client.session.keys.includes(t))
            await this.isValidSessionTopic(t);
        else if (this.client.core.pairing.pairings.keys.includes(t))
            this.isValidPairingTopic(t);
        else if (jt(t, !1)) {
            const {message: r} = k("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
            throw new Error(r)
        } else {
            const {message: r} = k("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
            throw new Error(r)
        }
    }
    async isValidProposalId(t) {
        if (!w_(t)) {
            const {message: r} = k("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
            throw new Error(r)
        }
        if (!this.client.proposal.keys.includes(t)) {
            const {message: r} = k("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
            throw new Error(r)
        }
        if (Pi(this.client.proposal.get(t).expiryTimestamp)) {
            await this.deleteProposal(t);
            const {message: r} = k("EXPIRED", `proposal id: ${t}`);
            throw new Error(r)
        }
    }
}
class Lx extends Uo {
    constructor(t, r) {
        super(t, r, Ox, Zc),
        this.core = t,
        this.logger = r
    }
}
let Ux = class extends Uo {
    constructor(t, r) {
        super(t, r, Rx, Zc),
        this.core = t,
        this.logger = r
    }
}
;
class zx extends Uo {
    constructor(t, r) {
        super(t, r, Tx, Zc, n=>n.id),
        this.core = t,
        this.logger = r
    }
}
let kx = class Ip extends J_ {
    constructor(t) {
        super(t),
        this.protocol = wp,
        this.version = bp,
        this.name = _c.name,
        this.events = new $r.EventEmitter,
        this.on = (n,a)=>this.events.on(n, a),
        this.once = (n,a)=>this.events.once(n, a),
        this.off = (n,a)=>this.events.off(n, a),
        this.removeListener = (n,a)=>this.events.removeListener(n, a),
        this.removeAllListeners = n=>this.events.removeAllListeners(n),
        this.connect = async n=>{
            try {
                return await this.engine.connect(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.pair = async n=>{
            try {
                return await this.engine.pair(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.approve = async n=>{
            try {
                return await this.engine.approve(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.reject = async n=>{
            try {
                return await this.engine.reject(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.update = async n=>{
            try {
                return await this.engine.update(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.extend = async n=>{
            try {
                return await this.engine.extend(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.request = async n=>{
            try {
                return await this.engine.request(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.respond = async n=>{
            try {
                return await this.engine.respond(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.ping = async n=>{
            try {
                return await this.engine.ping(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.emit = async n=>{
            try {
                return await this.engine.emit(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.disconnect = async n=>{
            try {
                return await this.engine.disconnect(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.find = n=>{
            try {
                return this.engine.find(n)
            } catch (a) {
                throw this.logger.error(a.message),
                a
            }
        }
        ,
        this.getPendingSessionRequests = ()=>{
            try {
                return this.engine.getPendingSessionRequests()
            } catch (n) {
                throw this.logger.error(n.message),
                n
            }
        }
        ,
        this.name = (t == null ? void 0 : t.name) || _c.name,
        this.metadata = (t == null ? void 0 : t.metadata) || D1();
        const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Ao(Do({
            level: (t == null ? void 0 : t.logger) || _c.logger
        }));
        this.core = (t == null ? void 0 : t.core) || new Px(t),
        this.logger = pr(r, this.name),
        this.session = new Ux(this.core,this.logger),
        this.proposal = new Lx(this.core,this.logger),
        this.pendingRequest = new zx(this.core,this.logger),
        this.engine = new jx(this)
    }
    static async init(t) {
        const r = new Ip(t);
        return await r.initialize(),
        r
    }
    get context() {
        return fr(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(),
            await this.session.init(),
            await this.proposal.init(),
            await this.pendingRequest.init(),
            await this.engine.init(),
            this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }),
            this.logger.info("SignClient Initialization Success")
        } catch (t) {
            throw this.logger.info("SignClient Initialization Failure"),
            this.logger.error(t.message),
            t
        }
    }
}
;
const df = "error"
  , Hx = "wss://relay.walletconnect.com"
  , Kx = "wc"
  , Vx = "universal_provider"
  , gf = `${Kx}@2:${Vx}:`
  , Bx = "https://rpc.walletconnect.com/v1/"
  , di = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
var Qs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , qc = {
    exports: {}
};
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(s, t) {
    (function() {
        var r, n = "4.17.21", a = 200, h = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", y = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", v = 500, E = "__lodash_placeholder__", P = 1, C = 2, z = 4, M = 1, Z = 2, ne = 1, oe = 2, le = 4, ge = 8, me = 16, ie = 32, ae = 64, Q = 128, xe = 256, At = 512, mt = 30, rr = "...", Bt = 800, dr = 16, L = 1, U = 2, We = 3, Me = 1 / 0, W = 9007199254740991, V = 17976931348623157e292, H = NaN, B = 4294967295, Rt = B - 1, it = B >>> 1, Ti = [["ary", Q], ["bind", ne], ["bindKey", oe], ["curry", ge], ["curryRight", me], ["flip", At], ["partial", ie], ["partialRight", ae], ["rearg", xe]], we = "[object Arguments]", Dr = "[object Array]", T = "[object AsyncFunction]", N = "[object Boolean]", O = "[object Date]", u = "[object DOMException]", _ = "[object Error]", J = "[object Function]", se = "[object GeneratorFunction]", pe = "[object Map]", Se = "[object Number]", Oe = "[object Null]", be = "[object Object]", wt = "[object Promise]", ft = "[object Proxy]", Ze = "[object RegExp]", Ne = "[object Set]", He = "[object String]", Ke = "[object Symbol]", et = "[object Undefined]", $e = "[object WeakMap]", Ve = "[object WeakSet]", Pe = "[object ArrayBuffer]", qe = "[object DataView]", st = "[object Float32Array]", Ce = "[object Float64Array]", bt = "[object Int8Array]", Nt = "[object Int16Array]", Lt = "[object Int32Array]", Ut = "[object Uint8Array]", $t = "[object Uint8ClampedArray]", Ft = "[object Uint16Array]", ir = "[object Uint32Array]", Kr = /\b__p \+= '';/g, Wt = /\b(__p \+=) '' \+/g, Yr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, gi = /&(?:amp|lt|gt|quot|#39);/g, Ci = /[&<>"']/g, nt = RegExp(gi.source), Ge = RegExp(Ci.source), ot = /<%-([\s\S]+?)%>/g, at = /<%([\s\S]+?)%>/g, tt = /<%=([\s\S]+?)%>/g, Je = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _t = /^\w*$/, Et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ct = /[\\^$.*+?()[\]{}|]/g, It = RegExp(ct.source), ut = /^\s+/, pt = /\s/, ht = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ke = /\{\n\/\* \[wrapped with (.+)\] \*/, xt = /,? & /, St = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, zo = /[()=,{}\[\]\/\s]/, ko = /\\(\\)?/g, Ho = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ir = /\w*$/, Ko = /^[-+]0x[0-9a-f]+$/i, Vo = /^0b[01]+$/i, Bo = /^\[object .+?Constructor\]$/, Fo = /^0o[0-7]+$/i, Wo = /^(?:0|[1-9]\d*)$/, Xr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Xi = /($^)/, Go = /['\n\r\u2028\u2029\\]/g, Zi = "\\ud800-\\udfff", Jo = "\\u0300-\\u036f", Qo = "\\ufe20-\\ufe2f", es = "\\u20d0-\\u20ff", hn = Jo + Qo + es, ln = "\\u2700-\\u27bf", Mr = "a-z\\xdf-\\xf6\\xf8-\\xff", Yo = "\\xac\\xb1\\xd7\\xf7", Xo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Zo = "\\u2000-\\u206f", ea = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", fn = "A-Z\\xc0-\\xd6\\xd8-\\xde", pn = "\\ufe0e\\ufe0f", Ai = Yo + Xo + Zo + ea, Os = "['’]", $i = "[" + Zi + "]", Rs = "[" + Ai + "]", Di = "[" + hn + "]", dn = "\\d+", ta = "[" + ln + "]", gn = "[" + Mr + "]", yn = "[^" + Zi + Ai + dn + ln + Mr + fn + "]", ts = "\\ud83c[\\udffb-\\udfff]", ra = "(?:" + Di + "|" + ts + ")", vn = "[^" + Zi + "]", rs = "(?:\\ud83c[\\udde6-\\uddff]){2}", yi = "[\\ud800-\\udbff][\\udc00-\\udfff]", gr = "[" + fn + "]", mn = "\\u200d", wn = "(?:" + gn + "|" + yn + ")", Vr = "(?:" + gr + "|" + yn + ")", bn = "(?:" + Os + "(?:d|ll|m|re|s|t|ve))?", _n = "(?:" + Os + "(?:D|LL|M|RE|S|T|VE))?", En = ra + "?", In = "[" + pn + "]?", ia = "(?:" + mn + "(?:" + [vn, rs, yi].join("|") + ")" + In + En + ")*", Zr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", xn = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Sn = In + En + ia, is = "(?:" + [ta, rs, yi].join("|") + ")" + Sn, sa = "(?:" + [vn + Di + "?", Di, rs, yi, $i].join("|") + ")", Ns = RegExp(Os, "g"), na = RegExp(Di, "g"), ss = RegExp(ts + "(?=" + ts + ")|" + sa + Sn, "g"), Pn = RegExp([gr + "?" + gn + "+" + bn + "(?=" + [Rs, gr, "$"].join("|") + ")", Vr + "+" + _n + "(?=" + [Rs, gr + wn, "$"].join("|") + ")", gr + "?" + wn + "+" + bn, gr + "+" + _n, xn, Zr, dn, is].join("|"), "g"), On = RegExp("[" + mn + Zi + hn + pn + "]"), Mi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Rn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], oa = -1, je = {};
        je[st] = je[Ce] = je[bt] = je[Nt] = je[Lt] = je[Ut] = je[$t] = je[Ft] = je[ir] = !0,
        je[we] = je[Dr] = je[Pe] = je[N] = je[qe] = je[O] = je[_] = je[J] = je[pe] = je[Se] = je[be] = je[Ze] = je[Ne] = je[He] = je[$e] = !1;
        var De = {};
        De[we] = De[Dr] = De[Pe] = De[qe] = De[N] = De[O] = De[st] = De[Ce] = De[bt] = De[Nt] = De[Lt] = De[pe] = De[Se] = De[be] = De[Ze] = De[Ne] = De[He] = De[Ke] = De[Ut] = De[$t] = De[Ft] = De[ir] = !0,
        De[_] = De[J] = De[$e] = !1;
        var g = {
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
        }
          , I = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , q = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }
          , F = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , Le = parseFloat
          , ue = parseInt
          , Be = typeof Qs == "object" && Qs && Qs.Object === Object && Qs
          , Pt = typeof self == "object" && self && self.Object === Object && self
          , Ee = Be || Pt || Function("return this")()
          , Ue = t && !t.nodeType && t
          , dt = Ue && !0 && s && !s.nodeType && s
          , sr = dt && dt.exports === Ue
          , Ot = sr && Be.process
          , Fe = function() {
            try {
                var x = dt && dt.require && dt.require("util").types;
                return x || Ot && Ot.binding && Ot.binding("util")
            } catch {}
        }()
          , Gt = Fe && Fe.isArrayBuffer
          , qr = Fe && Fe.isDate
          , xr = Fe && Fe.isMap
          , Br = Fe && Fe.isRegExp
          , Ts = Fe && Fe.isSet
          , qi = Fe && Fe.isTypedArray;
        function Dt(x, A, R) {
            switch (R.length) {
            case 0:
                return x.call(A);
            case 1:
                return x.call(A, R[0]);
            case 2:
                return x.call(A, R[0], R[1]);
            case 3:
                return x.call(A, R[0], R[1], R[2])
            }
            return x.apply(A, R)
        }
        function Pp(x, A, R, G) {
            for (var ce = -1, Re = x == null ? 0 : x.length; ++ce < Re; ) {
                var Tt = x[ce];
                A(G, Tt, R(Tt), x)
            }
            return G
        }
        function Sr(x, A) {
            for (var R = -1, G = x == null ? 0 : x.length; ++R < G && A(x[R], R, x) !== !1; )
                ;
            return x
        }
        function Op(x, A) {
            for (var R = x == null ? 0 : x.length; R-- && A(x[R], R, x) !== !1; )
                ;
            return x
        }
        function ru(x, A) {
            for (var R = -1, G = x == null ? 0 : x.length; ++R < G; )
                if (!A(x[R], R, x))
                    return !1;
            return !0
        }
        function vi(x, A) {
            for (var R = -1, G = x == null ? 0 : x.length, ce = 0, Re = []; ++R < G; ) {
                var Tt = x[R];
                A(Tt, R, x) && (Re[ce++] = Tt)
            }
            return Re
        }
        function Nn(x, A) {
            var R = x == null ? 0 : x.length;
            return !!R && ns(x, A, 0) > -1
        }
        function aa(x, A, R) {
            for (var G = -1, ce = x == null ? 0 : x.length; ++G < ce; )
                if (R(A, x[G]))
                    return !0;
            return !1
        }
        function Qe(x, A) {
            for (var R = -1, G = x == null ? 0 : x.length, ce = Array(G); ++R < G; )
                ce[R] = A(x[R], R, x);
            return ce
        }
        function mi(x, A) {
            for (var R = -1, G = A.length, ce = x.length; ++R < G; )
                x[ce + R] = A[R];
            return x
        }
        function ca(x, A, R, G) {
            var ce = -1
              , Re = x == null ? 0 : x.length;
            for (G && Re && (R = x[++ce]); ++ce < Re; )
                R = A(R, x[ce], ce, x);
            return R
        }
        function Rp(x, A, R, G) {
            var ce = x == null ? 0 : x.length;
            for (G && ce && (R = x[--ce]); ce--; )
                R = A(R, x[ce], ce, x);
            return R
        }
        function ua(x, A) {
            for (var R = -1, G = x == null ? 0 : x.length; ++R < G; )
                if (A(x[R], R, x))
                    return !0;
            return !1
        }
        var Np = ha("length");
        function Tp(x) {
            return x.split("")
        }
        function Cp(x) {
            return x.match(St) || []
        }
        function iu(x, A, R) {
            var G;
            return R(x, function(ce, Re, Tt) {
                if (A(ce, Re, Tt))
                    return G = Re,
                    !1
            }),
            G
        }
        function Tn(x, A, R, G) {
            for (var ce = x.length, Re = R + (G ? 1 : -1); G ? Re-- : ++Re < ce; )
                if (A(x[Re], Re, x))
                    return Re;
            return -1
        }
        function ns(x, A, R) {
            return A === A ? Kp(x, A, R) : Tn(x, su, R)
        }
        function Ap(x, A, R, G) {
            for (var ce = R - 1, Re = x.length; ++ce < Re; )
                if (G(x[ce], A))
                    return ce;
            return -1
        }
        function su(x) {
            return x !== x
        }
        function nu(x, A) {
            var R = x == null ? 0 : x.length;
            return R ? fa(x, A) / R : H
        }
        function ha(x) {
            return function(A) {
                return A == null ? r : A[x]
            }
        }
        function la(x) {
            return function(A) {
                return x == null ? r : x[A]
            }
        }
        function ou(x, A, R, G, ce) {
            return ce(x, function(Re, Tt, ze) {
                R = G ? (G = !1,
                Re) : A(R, Re, Tt, ze)
            }),
            R
        }
        function $p(x, A) {
            var R = x.length;
            for (x.sort(A); R--; )
                x[R] = x[R].value;
            return x
        }
        function fa(x, A) {
            for (var R, G = -1, ce = x.length; ++G < ce; ) {
                var Re = A(x[G]);
                Re !== r && (R = R === r ? Re : R + Re)
            }
            return R
        }
        function pa(x, A) {
            for (var R = -1, G = Array(x); ++R < x; )
                G[R] = A(R);
            return G
        }
        function Dp(x, A) {
            return Qe(A, function(R) {
                return [R, x[R]]
            })
        }
        function au(x) {
            return x && x.slice(0, lu(x) + 1).replace(ut, "")
        }
        function yr(x) {
            return function(A) {
                return x(A)
            }
        }
        function da(x, A) {
            return Qe(A, function(R) {
                return x[R]
            })
        }
        function Cs(x, A) {
            return x.has(A)
        }
        function cu(x, A) {
            for (var R = -1, G = x.length; ++R < G && ns(A, x[R], 0) > -1; )
                ;
            return R
        }
        function uu(x, A) {
            for (var R = x.length; R-- && ns(A, x[R], 0) > -1; )
                ;
            return R
        }
        function Mp(x, A) {
            for (var R = x.length, G = 0; R--; )
                x[R] === A && ++G;
            return G
        }
        var qp = la(g)
          , jp = la(I);
        function Lp(x) {
            return "\\" + F[x]
        }
        function Up(x, A) {
            return x == null ? r : x[A]
        }
        function os(x) {
            return On.test(x)
        }
        function zp(x) {
            return Mi.test(x)
        }
        function kp(x) {
            for (var A, R = []; !(A = x.next()).done; )
                R.push(A.value);
            return R
        }
        function ga(x) {
            var A = -1
              , R = Array(x.size);
            return x.forEach(function(G, ce) {
                R[++A] = [ce, G]
            }),
            R
        }
        function hu(x, A) {
            return function(R) {
                return x(A(R))
            }
        }
        function wi(x, A) {
            for (var R = -1, G = x.length, ce = 0, Re = []; ++R < G; ) {
                var Tt = x[R];
                (Tt === A || Tt === E) && (x[R] = E,
                Re[ce++] = R)
            }
            return Re
        }
        function Cn(x) {
            var A = -1
              , R = Array(x.size);
            return x.forEach(function(G) {
                R[++A] = G
            }),
            R
        }
        function Hp(x) {
            var A = -1
              , R = Array(x.size);
            return x.forEach(function(G) {
                R[++A] = [G, G]
            }),
            R
        }
        function Kp(x, A, R) {
            for (var G = R - 1, ce = x.length; ++G < ce; )
                if (x[G] === A)
                    return G;
            return -1
        }
        function Vp(x, A, R) {
            for (var G = R + 1; G--; )
                if (x[G] === A)
                    return G;
            return G
        }
        function as(x) {
            return os(x) ? Fp(x) : Np(x)
        }
        function jr(x) {
            return os(x) ? Wp(x) : Tp(x)
        }
        function lu(x) {
            for (var A = x.length; A-- && pt.test(x.charAt(A)); )
                ;
            return A
        }
        var Bp = la(q);
        function Fp(x) {
            for (var A = ss.lastIndex = 0; ss.test(x); )
                ++A;
            return A
        }
        function Wp(x) {
            return x.match(ss) || []
        }
        function Gp(x) {
            return x.match(Pn) || []
        }
        var Jp = function x(A) {
            A = A == null ? Ee : cs.defaults(Ee.Object(), A, cs.pick(Ee, Rn));
            var R = A.Array
              , G = A.Date
              , ce = A.Error
              , Re = A.Function
              , Tt = A.Math
              , ze = A.Object
              , ya = A.RegExp
              , Qp = A.String
              , Pr = A.TypeError
              , An = R.prototype
              , Yp = Re.prototype
              , us = ze.prototype
              , $n = A["__core-js_shared__"]
              , Dn = Yp.toString
              , Ae = us.hasOwnProperty
              , Xp = 0
              , fu = function() {
                var e = /[^.]+$/.exec($n && $n.keys && $n.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }()
              , Mn = us.toString
              , Zp = Dn.call(ze)
              , ed = Ee._
              , td = ya("^" + Dn.call(Ae).replace(ct, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
              , qn = sr ? A.Buffer : r
              , bi = A.Symbol
              , jn = A.Uint8Array
              , pu = qn ? qn.allocUnsafe : r
              , Ln = hu(ze.getPrototypeOf, ze)
              , du = ze.create
              , gu = us.propertyIsEnumerable
              , Un = An.splice
              , yu = bi ? bi.isConcatSpreadable : r
              , As = bi ? bi.iterator : r
              , ji = bi ? bi.toStringTag : r
              , zn = function() {
                try {
                    var e = Hi(ze, "defineProperty");
                    return e({}, "", {}),
                    e
                } catch {}
            }()
              , rd = A.clearTimeout !== Ee.clearTimeout && A.clearTimeout
              , id = G && G.now !== Ee.Date.now && G.now
              , sd = A.setTimeout !== Ee.setTimeout && A.setTimeout
              , kn = Tt.ceil
              , Hn = Tt.floor
              , va = ze.getOwnPropertySymbols
              , nd = qn ? qn.isBuffer : r
              , vu = A.isFinite
              , od = An.join
              , ad = hu(ze.keys, ze)
              , Ct = Tt.max
              , Ht = Tt.min
              , cd = G.now
              , ud = A.parseInt
              , mu = Tt.random
              , hd = An.reverse
              , ma = Hi(A, "DataView")
              , $s = Hi(A, "Map")
              , wa = Hi(A, "Promise")
              , hs = Hi(A, "Set")
              , Ds = Hi(A, "WeakMap")
              , Ms = Hi(ze, "create")
              , Kn = Ds && new Ds
              , ls = {}
              , ld = Ki(ma)
              , fd = Ki($s)
              , pd = Ki(wa)
              , dd = Ki(hs)
              , gd = Ki(Ds)
              , Vn = bi ? bi.prototype : r
              , qs = Vn ? Vn.valueOf : r
              , wu = Vn ? Vn.toString : r;
            function p(e) {
                if (lt(e) && !he(e) && !(e instanceof _e)) {
                    if (e instanceof Or)
                        return e;
                    if (Ae.call(e, "__wrapped__"))
                        return bh(e)
                }
                return new Or(e)
            }
            var fs = function() {
                function e() {}
                return function(i) {
                    if (!rt(i))
                        return {};
                    if (du)
                        return du(i);
                    e.prototype = i;
                    var o = new e;
                    return e.prototype = r,
                    o
                }
            }();
            function Bn() {}
            function Or(e, i) {
                this.__wrapped__ = e,
                this.__actions__ = [],
                this.__chain__ = !!i,
                this.__index__ = 0,
                this.__values__ = r
            }
            p.templateSettings = {
                escape: ot,
                evaluate: at,
                interpolate: tt,
                variable: "",
                imports: {
                    _: p
                }
            },
            p.prototype = Bn.prototype,
            p.prototype.constructor = p,
            Or.prototype = fs(Bn.prototype),
            Or.prototype.constructor = Or;
            function _e(e) {
                this.__wrapped__ = e,
                this.__actions__ = [],
                this.__dir__ = 1,
                this.__filtered__ = !1,
                this.__iteratees__ = [],
                this.__takeCount__ = B,
                this.__views__ = []
            }
            function yd() {
                var e = new _e(this.__wrapped__);
                return e.__actions__ = nr(this.__actions__),
                e.__dir__ = this.__dir__,
                e.__filtered__ = this.__filtered__,
                e.__iteratees__ = nr(this.__iteratees__),
                e.__takeCount__ = this.__takeCount__,
                e.__views__ = nr(this.__views__),
                e
            }
            function vd() {
                if (this.__filtered__) {
                    var e = new _e(this);
                    e.__dir__ = -1,
                    e.__filtered__ = !0
                } else
                    e = this.clone(),
                    e.__dir__ *= -1;
                return e
            }
            function md() {
                var e = this.__wrapped__.value()
                  , i = this.__dir__
                  , o = he(e)
                  , c = i < 0
                  , l = o ? e.length : 0
                  , d = Tg(0, l, this.__views__)
                  , m = d.start
                  , b = d.end
                  , S = b - m
                  , $ = c ? b : m - 1
                  , D = this.__iteratees__
                  , j = D.length
                  , K = 0
                  , Y = Ht(S, this.__takeCount__);
                if (!o || !c && l == S && Y == S)
                    return Ku(e, this.__actions__);
                var te = [];
                e: for (; S-- && K < Y; ) {
                    $ += i;
                    for (var de = -1, re = e[$]; ++de < j; ) {
                        var ve = D[de]
                          , Ie = ve.iteratee
                          , wr = ve.type
                          , Yt = Ie(re);
                        if (wr == U)
                            re = Yt;
                        else if (!Yt) {
                            if (wr == L)
                                continue e;
                            break e
                        }
                    }
                    te[K++] = re
                }
                return te
            }
            _e.prototype = fs(Bn.prototype),
            _e.prototype.constructor = _e;
            function Li(e) {
                var i = -1
                  , o = e == null ? 0 : e.length;
                for (this.clear(); ++i < o; ) {
                    var c = e[i];
                    this.set(c[0], c[1])
                }
            }
            function wd() {
                this.__data__ = Ms ? Ms(null) : {},
                this.size = 0
            }
            function bd(e) {
                var i = this.has(e) && delete this.__data__[e];
                return this.size -= i ? 1 : 0,
                i
            }
            function _d(e) {
                var i = this.__data__;
                if (Ms) {
                    var o = i[e];
                    return o === w ? r : o
                }
                return Ae.call(i, e) ? i[e] : r
            }
            function Ed(e) {
                var i = this.__data__;
                return Ms ? i[e] !== r : Ae.call(i, e)
            }
            function Id(e, i) {
                var o = this.__data__;
                return this.size += this.has(e) ? 0 : 1,
                o[e] = Ms && i === r ? w : i,
                this
            }
            Li.prototype.clear = wd,
            Li.prototype.delete = bd,
            Li.prototype.get = _d,
            Li.prototype.has = Ed,
            Li.prototype.set = Id;
            function ei(e) {
                var i = -1
                  , o = e == null ? 0 : e.length;
                for (this.clear(); ++i < o; ) {
                    var c = e[i];
                    this.set(c[0], c[1])
                }
            }
            function xd() {
                this.__data__ = [],
                this.size = 0
            }
            function Sd(e) {
                var i = this.__data__
                  , o = Fn(i, e);
                if (o < 0)
                    return !1;
                var c = i.length - 1;
                return o == c ? i.pop() : Un.call(i, o, 1),
                --this.size,
                !0
            }
            function Pd(e) {
                var i = this.__data__
                  , o = Fn(i, e);
                return o < 0 ? r : i[o][1]
            }
            function Od(e) {
                return Fn(this.__data__, e) > -1
            }
            function Rd(e, i) {
                var o = this.__data__
                  , c = Fn(o, e);
                return c < 0 ? (++this.size,
                o.push([e, i])) : o[c][1] = i,
                this
            }
            ei.prototype.clear = xd,
            ei.prototype.delete = Sd,
            ei.prototype.get = Pd,
            ei.prototype.has = Od,
            ei.prototype.set = Rd;
            function ti(e) {
                var i = -1
                  , o = e == null ? 0 : e.length;
                for (this.clear(); ++i < o; ) {
                    var c = e[i];
                    this.set(c[0], c[1])
                }
            }
            function Nd() {
                this.size = 0,
                this.__data__ = {
                    hash: new Li,
                    map: new ($s || ei),
                    string: new Li
                }
            }
            function Td(e) {
                var i = so(this, e).delete(e);
                return this.size -= i ? 1 : 0,
                i
            }
            function Cd(e) {
                return so(this, e).get(e)
            }
            function Ad(e) {
                return so(this, e).has(e)
            }
            function $d(e, i) {
                var o = so(this, e)
                  , c = o.size;
                return o.set(e, i),
                this.size += o.size == c ? 0 : 1,
                this
            }
            ti.prototype.clear = Nd,
            ti.prototype.delete = Td,
            ti.prototype.get = Cd,
            ti.prototype.has = Ad,
            ti.prototype.set = $d;
            function Ui(e) {
                var i = -1
                  , o = e == null ? 0 : e.length;
                for (this.__data__ = new ti; ++i < o; )
                    this.add(e[i])
            }
            function Dd(e) {
                return this.__data__.set(e, w),
                this
            }
            function Md(e) {
                return this.__data__.has(e)
            }
            Ui.prototype.add = Ui.prototype.push = Dd,
            Ui.prototype.has = Md;
            function Lr(e) {
                var i = this.__data__ = new ei(e);
                this.size = i.size
            }
            function qd() {
                this.__data__ = new ei,
                this.size = 0
            }
            function jd(e) {
                var i = this.__data__
                  , o = i.delete(e);
                return this.size = i.size,
                o
            }
            function Ld(e) {
                return this.__data__.get(e)
            }
            function Ud(e) {
                return this.__data__.has(e)
            }
            function zd(e, i) {
                var o = this.__data__;
                if (o instanceof ei) {
                    var c = o.__data__;
                    if (!$s || c.length < a - 1)
                        return c.push([e, i]),
                        this.size = ++o.size,
                        this;
                    o = this.__data__ = new ti(c)
                }
                return o.set(e, i),
                this.size = o.size,
                this
            }
            Lr.prototype.clear = qd,
            Lr.prototype.delete = jd,
            Lr.prototype.get = Ld,
            Lr.prototype.has = Ud,
            Lr.prototype.set = zd;
            function bu(e, i) {
                var o = he(e)
                  , c = !o && Vi(e)
                  , l = !o && !c && Si(e)
                  , d = !o && !c && !l && ys(e)
                  , m = o || c || l || d
                  , b = m ? pa(e.length, Qp) : []
                  , S = b.length;
                for (var $ in e)
                    (i || Ae.call(e, $)) && !(m && ($ == "length" || l && ($ == "offset" || $ == "parent") || d && ($ == "buffer" || $ == "byteLength" || $ == "byteOffset") || ni($, S))) && b.push($);
                return b
            }
            function _u(e) {
                var i = e.length;
                return i ? e[Ta(0, i - 1)] : r
            }
            function kd(e, i) {
                return no(nr(e), zi(i, 0, e.length))
            }
            function Hd(e) {
                return no(nr(e))
            }
            function ba(e, i, o) {
                (o !== r && !Ur(e[i], o) || o === r && !(i in e)) && ri(e, i, o)
            }
            function js(e, i, o) {
                var c = e[i];
                (!(Ae.call(e, i) && Ur(c, o)) || o === r && !(i in e)) && ri(e, i, o)
            }
            function Fn(e, i) {
                for (var o = e.length; o--; )
                    if (Ur(e[o][0], i))
                        return o;
                return -1
            }
            function Kd(e, i, o, c) {
                return _i(e, function(l, d, m) {
                    i(c, l, o(l), m)
                }),
                c
            }
            function Eu(e, i) {
                return e && Wr(i, Mt(i), e)
            }
            function Vd(e, i) {
                return e && Wr(i, ar(i), e)
            }
            function ri(e, i, o) {
                i == "__proto__" && zn ? zn(e, i, {
                    configurable: !0,
                    enumerable: !0,
                    value: o,
                    writable: !0
                }) : e[i] = o
            }
            function _a(e, i) {
                for (var o = -1, c = i.length, l = R(c), d = e == null; ++o < c; )
                    l[o] = d ? r : tc(e, i[o]);
                return l
            }
            function zi(e, i, o) {
                return e === e && (o !== r && (e = e <= o ? e : o),
                i !== r && (e = e >= i ? e : i)),
                e
            }
            function Rr(e, i, o, c, l, d) {
                var m, b = i & P, S = i & C, $ = i & z;
                if (o && (m = l ? o(e, c, l, d) : o(e)),
                m !== r)
                    return m;
                if (!rt(e))
                    return e;
                var D = he(e);
                if (D) {
                    if (m = Ag(e),
                    !b)
                        return nr(e, m)
                } else {
                    var j = Kt(e)
                      , K = j == J || j == se;
                    if (Si(e))
                        return Fu(e, b);
                    if (j == be || j == we || K && !l) {
                        if (m = S || K ? {} : lh(e),
                        !b)
                            return S ? _g(e, Vd(m, e)) : bg(e, Eu(m, e))
                    } else {
                        if (!De[j])
                            return l ? e : {};
                        m = $g(e, j, b)
                    }
                }
                d || (d = new Lr);
                var Y = d.get(e);
                if (Y)
                    return Y;
                d.set(e, m),
                zh(e) ? e.forEach(function(re) {
                    m.add(Rr(re, i, o, re, e, d))
                }) : Lh(e) && e.forEach(function(re, ve) {
                    m.set(ve, Rr(re, i, o, ve, e, d))
                });
                var te = $ ? S ? ka : za : S ? ar : Mt
                  , de = D ? r : te(e);
                return Sr(de || e, function(re, ve) {
                    de && (ve = re,
                    re = e[ve]),
                    js(m, ve, Rr(re, i, o, ve, e, d))
                }),
                m
            }
            function Bd(e) {
                var i = Mt(e);
                return function(o) {
                    return Iu(o, e, i)
                }
            }
            function Iu(e, i, o) {
                var c = o.length;
                if (e == null)
                    return !c;
                for (e = ze(e); c--; ) {
                    var l = o[c]
                      , d = i[l]
                      , m = e[l];
                    if (m === r && !(l in e) || !d(m))
                        return !1
                }
                return !0
            }
            function xu(e, i, o) {
                if (typeof e != "function")
                    throw new Pr(f);
                return Vs(function() {
                    e.apply(r, o)
                }, i)
            }
            function Ls(e, i, o, c) {
                var l = -1
                  , d = Nn
                  , m = !0
                  , b = e.length
                  , S = []
                  , $ = i.length;
                if (!b)
                    return S;
                o && (i = Qe(i, yr(o))),
                c ? (d = aa,
                m = !1) : i.length >= a && (d = Cs,
                m = !1,
                i = new Ui(i));
                e: for (; ++l < b; ) {
                    var D = e[l]
                      , j = o == null ? D : o(D);
                    if (D = c || D !== 0 ? D : 0,
                    m && j === j) {
                        for (var K = $; K--; )
                            if (i[K] === j)
                                continue e;
                        S.push(D)
                    } else
                        d(i, j, c) || S.push(D)
                }
                return S
            }
            var _i = Yu(Fr)
              , Su = Yu(Ia, !0);
            function Fd(e, i) {
                var o = !0;
                return _i(e, function(c, l, d) {
                    return o = !!i(c, l, d),
                    o
                }),
                o
            }
            function Wn(e, i, o) {
                for (var c = -1, l = e.length; ++c < l; ) {
                    var d = e[c]
                      , m = i(d);
                    if (m != null && (b === r ? m === m && !mr(m) : o(m, b)))
                        var b = m
                          , S = d
                }
                return S
            }
            function Wd(e, i, o, c) {
                var l = e.length;
                for (o = fe(o),
                o < 0 && (o = -o > l ? 0 : l + o),
                c = c === r || c > l ? l : fe(c),
                c < 0 && (c += l),
                c = o > c ? 0 : Hh(c); o < c; )
                    e[o++] = i;
                return e
            }
            function Pu(e, i) {
                var o = [];
                return _i(e, function(c, l, d) {
                    i(c, l, d) && o.push(c)
                }),
                o
            }
            function zt(e, i, o, c, l) {
                var d = -1
                  , m = e.length;
                for (o || (o = Mg),
                l || (l = []); ++d < m; ) {
                    var b = e[d];
                    i > 0 && o(b) ? i > 1 ? zt(b, i - 1, o, c, l) : mi(l, b) : c || (l[l.length] = b)
                }
                return l
            }
            var Ea = Xu()
              , Ou = Xu(!0);
            function Fr(e, i) {
                return e && Ea(e, i, Mt)
            }
            function Ia(e, i) {
                return e && Ou(e, i, Mt)
            }
            function Gn(e, i) {
                return vi(i, function(o) {
                    return oi(e[o])
                })
            }
            function ki(e, i) {
                i = Ii(i, e);
                for (var o = 0, c = i.length; e != null && o < c; )
                    e = e[Gr(i[o++])];
                return o && o == c ? e : r
            }
            function Ru(e, i, o) {
                var c = i(e);
                return he(e) ? c : mi(c, o(e))
            }
            function Jt(e) {
                return e == null ? e === r ? et : Oe : ji && ji in ze(e) ? Ng(e) : Hg(e)
            }
            function xa(e, i) {
                return e > i
            }
            function Gd(e, i) {
                return e != null && Ae.call(e, i)
            }
            function Jd(e, i) {
                return e != null && i in ze(e)
            }
            function Qd(e, i, o) {
                return e >= Ht(i, o) && e < Ct(i, o)
            }
            function Sa(e, i, o) {
                for (var c = o ? aa : Nn, l = e[0].length, d = e.length, m = d, b = R(d), S = 1 / 0, $ = []; m--; ) {
                    var D = e[m];
                    m && i && (D = Qe(D, yr(i))),
                    S = Ht(D.length, S),
                    b[m] = !o && (i || l >= 120 && D.length >= 120) ? new Ui(m && D) : r
                }
                D = e[0];
                var j = -1
                  , K = b[0];
                e: for (; ++j < l && $.length < S; ) {
                    var Y = D[j]
                      , te = i ? i(Y) : Y;
                    if (Y = o || Y !== 0 ? Y : 0,
                    !(K ? Cs(K, te) : c($, te, o))) {
                        for (m = d; --m; ) {
                            var de = b[m];
                            if (!(de ? Cs(de, te) : c(e[m], te, o)))
                                continue e
                        }
                        K && K.push(te),
                        $.push(Y)
                    }
                }
                return $
            }
            function Yd(e, i, o, c) {
                return Fr(e, function(l, d, m) {
                    i(c, o(l), d, m)
                }),
                c
            }
            function Us(e, i, o) {
                i = Ii(i, e),
                e = gh(e, i);
                var c = e == null ? e : e[Gr(Tr(i))];
                return c == null ? r : Dt(c, e, o)
            }
            function Nu(e) {
                return lt(e) && Jt(e) == we
            }
            function Xd(e) {
                return lt(e) && Jt(e) == Pe
            }
            function Zd(e) {
                return lt(e) && Jt(e) == O
            }
            function zs(e, i, o, c, l) {
                return e === i ? !0 : e == null || i == null || !lt(e) && !lt(i) ? e !== e && i !== i : eg(e, i, o, c, zs, l)
            }
            function eg(e, i, o, c, l, d) {
                var m = he(e)
                  , b = he(i)
                  , S = m ? Dr : Kt(e)
                  , $ = b ? Dr : Kt(i);
                S = S == we ? be : S,
                $ = $ == we ? be : $;
                var D = S == be
                  , j = $ == be
                  , K = S == $;
                if (K && Si(e)) {
                    if (!Si(i))
                        return !1;
                    m = !0,
                    D = !1
                }
                if (K && !D)
                    return d || (d = new Lr),
                    m || ys(e) ? ch(e, i, o, c, l, d) : Og(e, i, S, o, c, l, d);
                if (!(o & M)) {
                    var Y = D && Ae.call(e, "__wrapped__")
                      , te = j && Ae.call(i, "__wrapped__");
                    if (Y || te) {
                        var de = Y ? e.value() : e
                          , re = te ? i.value() : i;
                        return d || (d = new Lr),
                        l(de, re, o, c, d)
                    }
                }
                return K ? (d || (d = new Lr),
                Rg(e, i, o, c, l, d)) : !1
            }
            function tg(e) {
                return lt(e) && Kt(e) == pe
            }
            function Pa(e, i, o, c) {
                var l = o.length
                  , d = l
                  , m = !c;
                if (e == null)
                    return !d;
                for (e = ze(e); l--; ) {
                    var b = o[l];
                    if (m && b[2] ? b[1] !== e[b[0]] : !(b[0]in e))
                        return !1
                }
                for (; ++l < d; ) {
                    b = o[l];
                    var S = b[0]
                      , $ = e[S]
                      , D = b[1];
                    if (m && b[2]) {
                        if ($ === r && !(S in e))
                            return !1
                    } else {
                        var j = new Lr;
                        if (c)
                            var K = c($, D, S, e, i, j);
                        if (!(K === r ? zs(D, $, M | Z, c, j) : K))
                            return !1
                    }
                }
                return !0
            }
            function Tu(e) {
                if (!rt(e) || jg(e))
                    return !1;
                var i = oi(e) ? td : Bo;
                return i.test(Ki(e))
            }
            function rg(e) {
                return lt(e) && Jt(e) == Ze
            }
            function ig(e) {
                return lt(e) && Kt(e) == Ne
            }
            function sg(e) {
                return lt(e) && lo(e.length) && !!je[Jt(e)]
            }
            function Cu(e) {
                return typeof e == "function" ? e : e == null ? cr : typeof e == "object" ? he(e) ? Du(e[0], e[1]) : $u(e) : Zh(e)
            }
            function Oa(e) {
                if (!Ks(e))
                    return ad(e);
                var i = [];
                for (var o in ze(e))
                    Ae.call(e, o) && o != "constructor" && i.push(o);
                return i
            }
            function ng(e) {
                if (!rt(e))
                    return kg(e);
                var i = Ks(e)
                  , o = [];
                for (var c in e)
                    c == "constructor" && (i || !Ae.call(e, c)) || o.push(c);
                return o
            }
            function Ra(e, i) {
                return e < i
            }
            function Au(e, i) {
                var o = -1
                  , c = or(e) ? R(e.length) : [];
                return _i(e, function(l, d, m) {
                    c[++o] = i(l, d, m)
                }),
                c
            }
            function $u(e) {
                var i = Ka(e);
                return i.length == 1 && i[0][2] ? ph(i[0][0], i[0][1]) : function(o) {
                    return o === e || Pa(o, e, i)
                }
            }
            function Du(e, i) {
                return Ba(e) && fh(i) ? ph(Gr(e), i) : function(o) {
                    var c = tc(o, e);
                    return c === r && c === i ? rc(o, e) : zs(i, c, M | Z)
                }
            }
            function Jn(e, i, o, c, l) {
                e !== i && Ea(i, function(d, m) {
                    if (l || (l = new Lr),
                    rt(d))
                        og(e, i, m, o, Jn, c, l);
                    else {
                        var b = c ? c(Wa(e, m), d, m + "", e, i, l) : r;
                        b === r && (b = d),
                        ba(e, m, b)
                    }
                }, ar)
            }
            function og(e, i, o, c, l, d, m) {
                var b = Wa(e, o)
                  , S = Wa(i, o)
                  , $ = m.get(S);
                if ($) {
                    ba(e, o, $);
                    return
                }
                var D = d ? d(b, S, o + "", e, i, m) : r
                  , j = D === r;
                if (j) {
                    var K = he(S)
                      , Y = !K && Si(S)
                      , te = !K && !Y && ys(S);
                    D = S,
                    K || Y || te ? he(b) ? D = b : gt(b) ? D = nr(b) : Y ? (j = !1,
                    D = Fu(S, !0)) : te ? (j = !1,
                    D = Wu(S, !0)) : D = [] : Bs(S) || Vi(S) ? (D = b,
                    Vi(b) ? D = Kh(b) : (!rt(b) || oi(b)) && (D = lh(S))) : j = !1
                }
                j && (m.set(S, D),
                l(D, S, c, d, m),
                m.delete(S)),
                ba(e, o, D)
            }
            function Mu(e, i) {
                var o = e.length;
                if (o)
                    return i += i < 0 ? o : 0,
                    ni(i, o) ? e[i] : r
            }
            function qu(e, i, o) {
                i.length ? i = Qe(i, function(d) {
                    return he(d) ? function(m) {
                        return ki(m, d.length === 1 ? d[0] : d)
                    }
                    : d
                }) : i = [cr];
                var c = -1;
                i = Qe(i, yr(ee()));
                var l = Au(e, function(d, m, b) {
                    var S = Qe(i, function($) {
                        return $(d)
                    });
                    return {
                        criteria: S,
                        index: ++c,
                        value: d
                    }
                });
                return $p(l, function(d, m) {
                    return wg(d, m, o)
                })
            }
            function ag(e, i) {
                return ju(e, i, function(o, c) {
                    return rc(e, c)
                })
            }
            function ju(e, i, o) {
                for (var c = -1, l = i.length, d = {}; ++c < l; ) {
                    var m = i[c]
                      , b = ki(e, m);
                    o(b, m) && ks(d, Ii(m, e), b)
                }
                return d
            }
            function cg(e) {
                return function(i) {
                    return ki(i, e)
                }
            }
            function Na(e, i, o, c) {
                var l = c ? Ap : ns
                  , d = -1
                  , m = i.length
                  , b = e;
                for (e === i && (i = nr(i)),
                o && (b = Qe(e, yr(o))); ++d < m; )
                    for (var S = 0, $ = i[d], D = o ? o($) : $; (S = l(b, D, S, c)) > -1; )
                        b !== e && Un.call(b, S, 1),
                        Un.call(e, S, 1);
                return e
            }
            function Lu(e, i) {
                for (var o = e ? i.length : 0, c = o - 1; o--; ) {
                    var l = i[o];
                    if (o == c || l !== d) {
                        var d = l;
                        ni(l) ? Un.call(e, l, 1) : $a(e, l)
                    }
                }
                return e
            }
            function Ta(e, i) {
                return e + Hn(mu() * (i - e + 1))
            }
            function ug(e, i, o, c) {
                for (var l = -1, d = Ct(kn((i - e) / (o || 1)), 0), m = R(d); d--; )
                    m[c ? d : ++l] = e,
                    e += o;
                return m
            }
            function Ca(e, i) {
                var o = "";
                if (!e || i < 1 || i > W)
                    return o;
                do
                    i % 2 && (o += e),
                    i = Hn(i / 2),
                    i && (e += e);
                while (i);
                return o
            }
            function ye(e, i) {
                return Ga(dh(e, i, cr), e + "")
            }
            function hg(e) {
                return _u(vs(e))
            }
            function lg(e, i) {
                var o = vs(e);
                return no(o, zi(i, 0, o.length))
            }
            function ks(e, i, o, c) {
                if (!rt(e))
                    return e;
                i = Ii(i, e);
                for (var l = -1, d = i.length, m = d - 1, b = e; b != null && ++l < d; ) {
                    var S = Gr(i[l])
                      , $ = o;
                    if (S === "__proto__" || S === "constructor" || S === "prototype")
                        return e;
                    if (l != m) {
                        var D = b[S];
                        $ = c ? c(D, S, b) : r,
                        $ === r && ($ = rt(D) ? D : ni(i[l + 1]) ? [] : {})
                    }
                    js(b, S, $),
                    b = b[S]
                }
                return e
            }
            var Uu = Kn ? function(e, i) {
                return Kn.set(e, i),
                e
            }
            : cr
              , fg = zn ? function(e, i) {
                return zn(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: sc(i),
                    writable: !0
                })
            }
            : cr;
            function pg(e) {
                return no(vs(e))
            }
            function Nr(e, i, o) {
                var c = -1
                  , l = e.length;
                i < 0 && (i = -i > l ? 0 : l + i),
                o = o > l ? l : o,
                o < 0 && (o += l),
                l = i > o ? 0 : o - i >>> 0,
                i >>>= 0;
                for (var d = R(l); ++c < l; )
                    d[c] = e[c + i];
                return d
            }
            function dg(e, i) {
                var o;
                return _i(e, function(c, l, d) {
                    return o = i(c, l, d),
                    !o
                }),
                !!o
            }
            function Qn(e, i, o) {
                var c = 0
                  , l = e == null ? c : e.length;
                if (typeof i == "number" && i === i && l <= it) {
                    for (; c < l; ) {
                        var d = c + l >>> 1
                          , m = e[d];
                        m !== null && !mr(m) && (o ? m <= i : m < i) ? c = d + 1 : l = d
                    }
                    return l
                }
                return Aa(e, i, cr, o)
            }
            function Aa(e, i, o, c) {
                var l = 0
                  , d = e == null ? 0 : e.length;
                if (d === 0)
                    return 0;
                i = o(i);
                for (var m = i !== i, b = i === null, S = mr(i), $ = i === r; l < d; ) {
                    var D = Hn((l + d) / 2)
                      , j = o(e[D])
                      , K = j !== r
                      , Y = j === null
                      , te = j === j
                      , de = mr(j);
                    if (m)
                        var re = c || te;
                    else
                        $ ? re = te && (c || K) : b ? re = te && K && (c || !Y) : S ? re = te && K && !Y && (c || !de) : Y || de ? re = !1 : re = c ? j <= i : j < i;
                    re ? l = D + 1 : d = D
                }
                return Ht(d, Rt)
            }
            function zu(e, i) {
                for (var o = -1, c = e.length, l = 0, d = []; ++o < c; ) {
                    var m = e[o]
                      , b = i ? i(m) : m;
                    if (!o || !Ur(b, S)) {
                        var S = b;
                        d[l++] = m === 0 ? 0 : m
                    }
                }
                return d
            }
            function ku(e) {
                return typeof e == "number" ? e : mr(e) ? H : +e
            }
            function vr(e) {
                if (typeof e == "string")
                    return e;
                if (he(e))
                    return Qe(e, vr) + "";
                if (mr(e))
                    return wu ? wu.call(e) : "";
                var i = e + "";
                return i == "0" && 1 / e == -Me ? "-0" : i
            }
            function Ei(e, i, o) {
                var c = -1
                  , l = Nn
                  , d = e.length
                  , m = !0
                  , b = []
                  , S = b;
                if (o)
                    m = !1,
                    l = aa;
                else if (d >= a) {
                    var $ = i ? null : Sg(e);
                    if ($)
                        return Cn($);
                    m = !1,
                    l = Cs,
                    S = new Ui
                } else
                    S = i ? [] : b;
                e: for (; ++c < d; ) {
                    var D = e[c]
                      , j = i ? i(D) : D;
                    if (D = o || D !== 0 ? D : 0,
                    m && j === j) {
                        for (var K = S.length; K--; )
                            if (S[K] === j)
                                continue e;
                        i && S.push(j),
                        b.push(D)
                    } else
                        l(S, j, o) || (S !== b && S.push(j),
                        b.push(D))
                }
                return b
            }
            function $a(e, i) {
                return i = Ii(i, e),
                e = gh(e, i),
                e == null || delete e[Gr(Tr(i))]
            }
            function Hu(e, i, o, c) {
                return ks(e, i, o(ki(e, i)), c)
            }
            function Yn(e, i, o, c) {
                for (var l = e.length, d = c ? l : -1; (c ? d-- : ++d < l) && i(e[d], d, e); )
                    ;
                return o ? Nr(e, c ? 0 : d, c ? d + 1 : l) : Nr(e, c ? d + 1 : 0, c ? l : d)
            }
            function Ku(e, i) {
                var o = e;
                return o instanceof _e && (o = o.value()),
                ca(i, function(c, l) {
                    return l.func.apply(l.thisArg, mi([c], l.args))
                }, o)
            }
            function Da(e, i, o) {
                var c = e.length;
                if (c < 2)
                    return c ? Ei(e[0]) : [];
                for (var l = -1, d = R(c); ++l < c; )
                    for (var m = e[l], b = -1; ++b < c; )
                        b != l && (d[l] = Ls(d[l] || m, e[b], i, o));
                return Ei(zt(d, 1), i, o)
            }
            function Vu(e, i, o) {
                for (var c = -1, l = e.length, d = i.length, m = {}; ++c < l; ) {
                    var b = c < d ? i[c] : r;
                    o(m, e[c], b)
                }
                return m
            }
            function Ma(e) {
                return gt(e) ? e : []
            }
            function qa(e) {
                return typeof e == "function" ? e : cr
            }
            function Ii(e, i) {
                return he(e) ? e : Ba(e, i) ? [e] : wh(Te(e))
            }
            var gg = ye;
            function xi(e, i, o) {
                var c = e.length;
                return o = o === r ? c : o,
                !i && o >= c ? e : Nr(e, i, o)
            }
            var Bu = rd || function(e) {
                return Ee.clearTimeout(e)
            }
            ;
            function Fu(e, i) {
                if (i)
                    return e.slice();
                var o = e.length
                  , c = pu ? pu(o) : new e.constructor(o);
                return e.copy(c),
                c
            }
            function ja(e) {
                var i = new e.constructor(e.byteLength);
                return new jn(i).set(new jn(e)),
                i
            }
            function yg(e, i) {
                var o = i ? ja(e.buffer) : e.buffer;
                return new e.constructor(o,e.byteOffset,e.byteLength)
            }
            function vg(e) {
                var i = new e.constructor(e.source,Ir.exec(e));
                return i.lastIndex = e.lastIndex,
                i
            }
            function mg(e) {
                return qs ? ze(qs.call(e)) : {}
            }
            function Wu(e, i) {
                var o = i ? ja(e.buffer) : e.buffer;
                return new e.constructor(o,e.byteOffset,e.length)
            }
            function Gu(e, i) {
                if (e !== i) {
                    var o = e !== r
                      , c = e === null
                      , l = e === e
                      , d = mr(e)
                      , m = i !== r
                      , b = i === null
                      , S = i === i
                      , $ = mr(i);
                    if (!b && !$ && !d && e > i || d && m && S && !b && !$ || c && m && S || !o && S || !l)
                        return 1;
                    if (!c && !d && !$ && e < i || $ && o && l && !c && !d || b && o && l || !m && l || !S)
                        return -1
                }
                return 0
            }
            function wg(e, i, o) {
                for (var c = -1, l = e.criteria, d = i.criteria, m = l.length, b = o.length; ++c < m; ) {
                    var S = Gu(l[c], d[c]);
                    if (S) {
                        if (c >= b)
                            return S;
                        var $ = o[c];
                        return S * ($ == "desc" ? -1 : 1)
                    }
                }
                return e.index - i.index
            }
            function Ju(e, i, o, c) {
                for (var l = -1, d = e.length, m = o.length, b = -1, S = i.length, $ = Ct(d - m, 0), D = R(S + $), j = !c; ++b < S; )
                    D[b] = i[b];
                for (; ++l < m; )
                    (j || l < d) && (D[o[l]] = e[l]);
                for (; $--; )
                    D[b++] = e[l++];
                return D
            }
            function Qu(e, i, o, c) {
                for (var l = -1, d = e.length, m = -1, b = o.length, S = -1, $ = i.length, D = Ct(d - b, 0), j = R(D + $), K = !c; ++l < D; )
                    j[l] = e[l];
                for (var Y = l; ++S < $; )
                    j[Y + S] = i[S];
                for (; ++m < b; )
                    (K || l < d) && (j[Y + o[m]] = e[l++]);
                return j
            }
            function nr(e, i) {
                var o = -1
                  , c = e.length;
                for (i || (i = R(c)); ++o < c; )
                    i[o] = e[o];
                return i
            }
            function Wr(e, i, o, c) {
                var l = !o;
                o || (o = {});
                for (var d = -1, m = i.length; ++d < m; ) {
                    var b = i[d]
                      , S = c ? c(o[b], e[b], b, o, e) : r;
                    S === r && (S = e[b]),
                    l ? ri(o, b, S) : js(o, b, S)
                }
                return o
            }
            function bg(e, i) {
                return Wr(e, Va(e), i)
            }
            function _g(e, i) {
                return Wr(e, uh(e), i)
            }
            function Xn(e, i) {
                return function(o, c) {
                    var l = he(o) ? Pp : Kd
                      , d = i ? i() : {};
                    return l(o, e, ee(c, 2), d)
                }
            }
            function ps(e) {
                return ye(function(i, o) {
                    var c = -1
                      , l = o.length
                      , d = l > 1 ? o[l - 1] : r
                      , m = l > 2 ? o[2] : r;
                    for (d = e.length > 3 && typeof d == "function" ? (l--,
                    d) : r,
                    m && Qt(o[0], o[1], m) && (d = l < 3 ? r : d,
                    l = 1),
                    i = ze(i); ++c < l; ) {
                        var b = o[c];
                        b && e(i, b, c, d)
                    }
                    return i
                })
            }
            function Yu(e, i) {
                return function(o, c) {
                    if (o == null)
                        return o;
                    if (!or(o))
                        return e(o, c);
                    for (var l = o.length, d = i ? l : -1, m = ze(o); (i ? d-- : ++d < l) && c(m[d], d, m) !== !1; )
                        ;
                    return o
                }
            }
            function Xu(e) {
                return function(i, o, c) {
                    for (var l = -1, d = ze(i), m = c(i), b = m.length; b--; ) {
                        var S = m[e ? b : ++l];
                        if (o(d[S], S, d) === !1)
                            break
                    }
                    return i
                }
            }
            function Eg(e, i, o) {
                var c = i & ne
                  , l = Hs(e);
                function d() {
                    var m = this && this !== Ee && this instanceof d ? l : e;
                    return m.apply(c ? o : this, arguments)
                }
                return d
            }
            function Zu(e) {
                return function(i) {
                    i = Te(i);
                    var o = os(i) ? jr(i) : r
                      , c = o ? o[0] : i.charAt(0)
                      , l = o ? xi(o, 1).join("") : i.slice(1);
                    return c[e]() + l
                }
            }
            function ds(e) {
                return function(i) {
                    return ca(Yh(Qh(i).replace(Ns, "")), e, "")
                }
            }
            function Hs(e) {
                return function() {
                    var i = arguments;
                    switch (i.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(i[0]);
                    case 2:
                        return new e(i[0],i[1]);
                    case 3:
                        return new e(i[0],i[1],i[2]);
                    case 4:
                        return new e(i[0],i[1],i[2],i[3]);
                    case 5:
                        return new e(i[0],i[1],i[2],i[3],i[4]);
                    case 6:
                        return new e(i[0],i[1],i[2],i[3],i[4],i[5]);
                    case 7:
                        return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])
                    }
                    var o = fs(e.prototype)
                      , c = e.apply(o, i);
                    return rt(c) ? c : o
                }
            }
            function Ig(e, i, o) {
                var c = Hs(e);
                function l() {
                    for (var d = arguments.length, m = R(d), b = d, S = gs(l); b--; )
                        m[b] = arguments[b];
                    var $ = d < 3 && m[0] !== S && m[d - 1] !== S ? [] : wi(m, S);
                    if (d -= $.length,
                    d < o)
                        return sh(e, i, Zn, l.placeholder, r, m, $, r, r, o - d);
                    var D = this && this !== Ee && this instanceof l ? c : e;
                    return Dt(D, this, m)
                }
                return l
            }
            function eh(e) {
                return function(i, o, c) {
                    var l = ze(i);
                    if (!or(i)) {
                        var d = ee(o, 3);
                        i = Mt(i),
                        o = function(b) {
                            return d(l[b], b, l)
                        }
                    }
                    var m = e(i, o, c);
                    return m > -1 ? l[d ? i[m] : m] : r
                }
            }
            function th(e) {
                return si(function(i) {
                    var o = i.length
                      , c = o
                      , l = Or.prototype.thru;
                    for (e && i.reverse(); c--; ) {
                        var d = i[c];
                        if (typeof d != "function")
                            throw new Pr(f);
                        if (l && !m && io(d) == "wrapper")
                            var m = new Or([],!0)
                    }
                    for (c = m ? c : o; ++c < o; ) {
                        d = i[c];
                        var b = io(d)
                          , S = b == "wrapper" ? Ha(d) : r;
                        S && Fa(S[0]) && S[1] == (Q | ge | ie | xe) && !S[4].length && S[9] == 1 ? m = m[io(S[0])].apply(m, S[3]) : m = d.length == 1 && Fa(d) ? m[b]() : m.thru(d)
                    }
                    return function() {
                        var $ = arguments
                          , D = $[0];
                        if (m && $.length == 1 && he(D))
                            return m.plant(D).value();
                        for (var j = 0, K = o ? i[j].apply(this, $) : D; ++j < o; )
                            K = i[j].call(this, K);
                        return K
                    }
                })
            }
            function Zn(e, i, o, c, l, d, m, b, S, $) {
                var D = i & Q
                  , j = i & ne
                  , K = i & oe
                  , Y = i & (ge | me)
                  , te = i & At
                  , de = K ? r : Hs(e);
                function re() {
                    for (var ve = arguments.length, Ie = R(ve), wr = ve; wr--; )
                        Ie[wr] = arguments[wr];
                    if (Y)
                        var Yt = gs(re)
                          , br = Mp(Ie, Yt);
                    if (c && (Ie = Ju(Ie, c, l, Y)),
                    d && (Ie = Qu(Ie, d, m, Y)),
                    ve -= br,
                    Y && ve < $) {
                        var yt = wi(Ie, Yt);
                        return sh(e, i, Zn, re.placeholder, o, Ie, yt, b, S, $ - ve)
                    }
                    var zr = j ? o : this
                      , ci = K ? zr[e] : e;
                    return ve = Ie.length,
                    b ? Ie = Kg(Ie, b) : te && ve > 1 && Ie.reverse(),
                    D && S < ve && (Ie.length = S),
                    this && this !== Ee && this instanceof re && (ci = de || Hs(ci)),
                    ci.apply(zr, Ie)
                }
                return re
            }
            function rh(e, i) {
                return function(o, c) {
                    return Yd(o, e, i(c), {})
                }
            }
            function eo(e, i) {
                return function(o, c) {
                    var l;
                    if (o === r && c === r)
                        return i;
                    if (o !== r && (l = o),
                    c !== r) {
                        if (l === r)
                            return c;
                        typeof o == "string" || typeof c == "string" ? (o = vr(o),
                        c = vr(c)) : (o = ku(o),
                        c = ku(c)),
                        l = e(o, c)
                    }
                    return l
                }
            }
            function La(e) {
                return si(function(i) {
                    return i = Qe(i, yr(ee())),
                    ye(function(o) {
                        var c = this;
                        return e(i, function(l) {
                            return Dt(l, c, o)
                        })
                    })
                })
            }
            function to(e, i) {
                i = i === r ? " " : vr(i);
                var o = i.length;
                if (o < 2)
                    return o ? Ca(i, e) : i;
                var c = Ca(i, kn(e / as(i)));
                return os(i) ? xi(jr(c), 0, e).join("") : c.slice(0, e)
            }
            function xg(e, i, o, c) {
                var l = i & ne
                  , d = Hs(e);
                function m() {
                    for (var b = -1, S = arguments.length, $ = -1, D = c.length, j = R(D + S), K = this && this !== Ee && this instanceof m ? d : e; ++$ < D; )
                        j[$] = c[$];
                    for (; S--; )
                        j[$++] = arguments[++b];
                    return Dt(K, l ? o : this, j)
                }
                return m
            }
            function ih(e) {
                return function(i, o, c) {
                    return c && typeof c != "number" && Qt(i, o, c) && (o = c = r),
                    i = ai(i),
                    o === r ? (o = i,
                    i = 0) : o = ai(o),
                    c = c === r ? i < o ? 1 : -1 : ai(c),
                    ug(i, o, c, e)
                }
            }
            function ro(e) {
                return function(i, o) {
                    return typeof i == "string" && typeof o == "string" || (i = Cr(i),
                    o = Cr(o)),
                    e(i, o)
                }
            }
            function sh(e, i, o, c, l, d, m, b, S, $) {
                var D = i & ge
                  , j = D ? m : r
                  , K = D ? r : m
                  , Y = D ? d : r
                  , te = D ? r : d;
                i |= D ? ie : ae,
                i &= ~(D ? ae : ie),
                i & le || (i &= ~(ne | oe));
                var de = [e, i, l, Y, j, te, K, b, S, $]
                  , re = o.apply(r, de);
                return Fa(e) && yh(re, de),
                re.placeholder = c,
                vh(re, e, i)
            }
            function Ua(e) {
                var i = Tt[e];
                return function(o, c) {
                    if (o = Cr(o),
                    c = c == null ? 0 : Ht(fe(c), 292),
                    c && vu(o)) {
                        var l = (Te(o) + "e").split("e")
                          , d = i(l[0] + "e" + (+l[1] + c));
                        return l = (Te(d) + "e").split("e"),
                        +(l[0] + "e" + (+l[1] - c))
                    }
                    return i(o)
                }
            }
            var Sg = hs && 1 / Cn(new hs([, -0]))[1] == Me ? function(e) {
                return new hs(e)
            }
            : ac;
            function nh(e) {
                return function(i) {
                    var o = Kt(i);
                    return o == pe ? ga(i) : o == Ne ? Hp(i) : Dp(i, e(i))
                }
            }
            function ii(e, i, o, c, l, d, m, b) {
                var S = i & oe;
                if (!S && typeof e != "function")
                    throw new Pr(f);
                var $ = c ? c.length : 0;
                if ($ || (i &= ~(ie | ae),
                c = l = r),
                m = m === r ? m : Ct(fe(m), 0),
                b = b === r ? b : fe(b),
                $ -= l ? l.length : 0,
                i & ae) {
                    var D = c
                      , j = l;
                    c = l = r
                }
                var K = S ? r : Ha(e)
                  , Y = [e, i, o, c, l, D, j, d, m, b];
                if (K && zg(Y, K),
                e = Y[0],
                i = Y[1],
                o = Y[2],
                c = Y[3],
                l = Y[4],
                b = Y[9] = Y[9] === r ? S ? 0 : e.length : Ct(Y[9] - $, 0),
                !b && i & (ge | me) && (i &= ~(ge | me)),
                !i || i == ne)
                    var te = Eg(e, i, o);
                else
                    i == ge || i == me ? te = Ig(e, i, b) : (i == ie || i == (ne | ie)) && !l.length ? te = xg(e, i, o, c) : te = Zn.apply(r, Y);
                var de = K ? Uu : yh;
                return vh(de(te, Y), e, i)
            }
            function oh(e, i, o, c) {
                return e === r || Ur(e, us[o]) && !Ae.call(c, o) ? i : e
            }
            function ah(e, i, o, c, l, d) {
                return rt(e) && rt(i) && (d.set(i, e),
                Jn(e, i, r, ah, d),
                d.delete(i)),
                e
            }
            function Pg(e) {
                return Bs(e) ? r : e
            }
            function ch(e, i, o, c, l, d) {
                var m = o & M
                  , b = e.length
                  , S = i.length;
                if (b != S && !(m && S > b))
                    return !1;
                var $ = d.get(e)
                  , D = d.get(i);
                if ($ && D)
                    return $ == i && D == e;
                var j = -1
                  , K = !0
                  , Y = o & Z ? new Ui : r;
                for (d.set(e, i),
                d.set(i, e); ++j < b; ) {
                    var te = e[j]
                      , de = i[j];
                    if (c)
                        var re = m ? c(de, te, j, i, e, d) : c(te, de, j, e, i, d);
                    if (re !== r) {
                        if (re)
                            continue;
                        K = !1;
                        break
                    }
                    if (Y) {
                        if (!ua(i, function(ve, Ie) {
                            if (!Cs(Y, Ie) && (te === ve || l(te, ve, o, c, d)))
                                return Y.push(Ie)
                        })) {
                            K = !1;
                            break
                        }
                    } else if (!(te === de || l(te, de, o, c, d))) {
                        K = !1;
                        break
                    }
                }
                return d.delete(e),
                d.delete(i),
                K
            }
            function Og(e, i, o, c, l, d, m) {
                switch (o) {
                case qe:
                    if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset)
                        return !1;
                    e = e.buffer,
                    i = i.buffer;
                case Pe:
                    return !(e.byteLength != i.byteLength || !d(new jn(e), new jn(i)));
                case N:
                case O:
                case Se:
                    return Ur(+e, +i);
                case _:
                    return e.name == i.name && e.message == i.message;
                case Ze:
                case He:
                    return e == i + "";
                case pe:
                    var b = ga;
                case Ne:
                    var S = c & M;
                    if (b || (b = Cn),
                    e.size != i.size && !S)
                        return !1;
                    var $ = m.get(e);
                    if ($)
                        return $ == i;
                    c |= Z,
                    m.set(e, i);
                    var D = ch(b(e), b(i), c, l, d, m);
                    return m.delete(e),
                    D;
                case Ke:
                    if (qs)
                        return qs.call(e) == qs.call(i)
                }
                return !1
            }
            function Rg(e, i, o, c, l, d) {
                var m = o & M
                  , b = za(e)
                  , S = b.length
                  , $ = za(i)
                  , D = $.length;
                if (S != D && !m)
                    return !1;
                for (var j = S; j--; ) {
                    var K = b[j];
                    if (!(m ? K in i : Ae.call(i, K)))
                        return !1
                }
                var Y = d.get(e)
                  , te = d.get(i);
                if (Y && te)
                    return Y == i && te == e;
                var de = !0;
                d.set(e, i),
                d.set(i, e);
                for (var re = m; ++j < S; ) {
                    K = b[j];
                    var ve = e[K]
                      , Ie = i[K];
                    if (c)
                        var wr = m ? c(Ie, ve, K, i, e, d) : c(ve, Ie, K, e, i, d);
                    if (!(wr === r ? ve === Ie || l(ve, Ie, o, c, d) : wr)) {
                        de = !1;
                        break
                    }
                    re || (re = K == "constructor")
                }
                if (de && !re) {
                    var Yt = e.constructor
                      , br = i.constructor;
                    Yt != br && "constructor"in e && "constructor"in i && !(typeof Yt == "function" && Yt instanceof Yt && typeof br == "function" && br instanceof br) && (de = !1)
                }
                return d.delete(e),
                d.delete(i),
                de
            }
            function si(e) {
                return Ga(dh(e, r, Ih), e + "")
            }
            function za(e) {
                return Ru(e, Mt, Va)
            }
            function ka(e) {
                return Ru(e, ar, uh)
            }
            var Ha = Kn ? function(e) {
                return Kn.get(e)
            }
            : ac;
            function io(e) {
                for (var i = e.name + "", o = ls[i], c = Ae.call(ls, i) ? o.length : 0; c--; ) {
                    var l = o[c]
                      , d = l.func;
                    if (d == null || d == e)
                        return l.name
                }
                return i
            }
            function gs(e) {
                var i = Ae.call(p, "placeholder") ? p : e;
                return i.placeholder
            }
            function ee() {
                var e = p.iteratee || nc;
                return e = e === nc ? Cu : e,
                arguments.length ? e(arguments[0], arguments[1]) : e
            }
            function so(e, i) {
                var o = e.__data__;
                return qg(i) ? o[typeof i == "string" ? "string" : "hash"] : o.map
            }
            function Ka(e) {
                for (var i = Mt(e), o = i.length; o--; ) {
                    var c = i[o]
                      , l = e[c];
                    i[o] = [c, l, fh(l)]
                }
                return i
            }
            function Hi(e, i) {
                var o = Up(e, i);
                return Tu(o) ? o : r
            }
            function Ng(e) {
                var i = Ae.call(e, ji)
                  , o = e[ji];
                try {
                    e[ji] = r;
                    var c = !0
                } catch {}
                var l = Mn.call(e);
                return c && (i ? e[ji] = o : delete e[ji]),
                l
            }
            var Va = va ? function(e) {
                return e == null ? [] : (e = ze(e),
                vi(va(e), function(i) {
                    return gu.call(e, i)
                }))
            }
            : cc
              , uh = va ? function(e) {
                for (var i = []; e; )
                    mi(i, Va(e)),
                    e = Ln(e);
                return i
            }
            : cc
              , Kt = Jt;
            (ma && Kt(new ma(new ArrayBuffer(1))) != qe || $s && Kt(new $s) != pe || wa && Kt(wa.resolve()) != wt || hs && Kt(new hs) != Ne || Ds && Kt(new Ds) != $e) && (Kt = function(e) {
                var i = Jt(e)
                  , o = i == be ? e.constructor : r
                  , c = o ? Ki(o) : "";
                if (c)
                    switch (c) {
                    case ld:
                        return qe;
                    case fd:
                        return pe;
                    case pd:
                        return wt;
                    case dd:
                        return Ne;
                    case gd:
                        return $e
                    }
                return i
            }
            );
            function Tg(e, i, o) {
                for (var c = -1, l = o.length; ++c < l; ) {
                    var d = o[c]
                      , m = d.size;
                    switch (d.type) {
                    case "drop":
                        e += m;
                        break;
                    case "dropRight":
                        i -= m;
                        break;
                    case "take":
                        i = Ht(i, e + m);
                        break;
                    case "takeRight":
                        e = Ct(e, i - m);
                        break
                    }
                }
                return {
                    start: e,
                    end: i
                }
            }
            function Cg(e) {
                var i = e.match(ke);
                return i ? i[1].split(xt) : []
            }
            function hh(e, i, o) {
                i = Ii(i, e);
                for (var c = -1, l = i.length, d = !1; ++c < l; ) {
                    var m = Gr(i[c]);
                    if (!(d = e != null && o(e, m)))
                        break;
                    e = e[m]
                }
                return d || ++c != l ? d : (l = e == null ? 0 : e.length,
                !!l && lo(l) && ni(m, l) && (he(e) || Vi(e)))
            }
            function Ag(e) {
                var i = e.length
                  , o = new e.constructor(i);
                return i && typeof e[0] == "string" && Ae.call(e, "index") && (o.index = e.index,
                o.input = e.input),
                o
            }
            function lh(e) {
                return typeof e.constructor == "function" && !Ks(e) ? fs(Ln(e)) : {}
            }
            function $g(e, i, o) {
                var c = e.constructor;
                switch (i) {
                case Pe:
                    return ja(e);
                case N:
                case O:
                    return new c(+e);
                case qe:
                    return yg(e, o);
                case st:
                case Ce:
                case bt:
                case Nt:
                case Lt:
                case Ut:
                case $t:
                case Ft:
                case ir:
                    return Wu(e, o);
                case pe:
                    return new c;
                case Se:
                case He:
                    return new c(e);
                case Ze:
                    return vg(e);
                case Ne:
                    return new c;
                case Ke:
                    return mg(e)
                }
            }
            function Dg(e, i) {
                var o = i.length;
                if (!o)
                    return e;
                var c = o - 1;
                return i[c] = (o > 1 ? "& " : "") + i[c],
                i = i.join(o > 2 ? ", " : " "),
                e.replace(ht, `{
/* [wrapped with ` + i + `] */
`)
            }
            function Mg(e) {
                return he(e) || Vi(e) || !!(yu && e && e[yu])
            }
            function ni(e, i) {
                var o = typeof e;
                return i = i ?? W,
                !!i && (o == "number" || o != "symbol" && Wo.test(e)) && e > -1 && e % 1 == 0 && e < i
            }
            function Qt(e, i, o) {
                if (!rt(o))
                    return !1;
                var c = typeof i;
                return (c == "number" ? or(o) && ni(i, o.length) : c == "string" && i in o) ? Ur(o[i], e) : !1
            }
            function Ba(e, i) {
                if (he(e))
                    return !1;
                var o = typeof e;
                return o == "number" || o == "symbol" || o == "boolean" || e == null || mr(e) ? !0 : _t.test(e) || !Je.test(e) || i != null && e in ze(i)
            }
            function qg(e) {
                var i = typeof e;
                return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? e !== "__proto__" : e === null
            }
            function Fa(e) {
                var i = io(e)
                  , o = p[i];
                if (typeof o != "function" || !(i in _e.prototype))
                    return !1;
                if (e === o)
                    return !0;
                var c = Ha(o);
                return !!c && e === c[0]
            }
            function jg(e) {
                return !!fu && fu in e
            }
            var Lg = $n ? oi : uc;
            function Ks(e) {
                var i = e && e.constructor
                  , o = typeof i == "function" && i.prototype || us;
                return e === o
            }
            function fh(e) {
                return e === e && !rt(e)
            }
            function ph(e, i) {
                return function(o) {
                    return o == null ? !1 : o[e] === i && (i !== r || e in ze(o))
                }
            }
            function Ug(e) {
                var i = uo(e, function(c) {
                    return o.size === v && o.clear(),
                    c
                })
                  , o = i.cache;
                return i
            }
            function zg(e, i) {
                var o = e[1]
                  , c = i[1]
                  , l = o | c
                  , d = l < (ne | oe | Q)
                  , m = c == Q && o == ge || c == Q && o == xe && e[7].length <= i[8] || c == (Q | xe) && i[7].length <= i[8] && o == ge;
                if (!(d || m))
                    return e;
                c & ne && (e[2] = i[2],
                l |= o & ne ? 0 : le);
                var b = i[3];
                if (b) {
                    var S = e[3];
                    e[3] = S ? Ju(S, b, i[4]) : b,
                    e[4] = S ? wi(e[3], E) : i[4]
                }
                return b = i[5],
                b && (S = e[5],
                e[5] = S ? Qu(S, b, i[6]) : b,
                e[6] = S ? wi(e[5], E) : i[6]),
                b = i[7],
                b && (e[7] = b),
                c & Q && (e[8] = e[8] == null ? i[8] : Ht(e[8], i[8])),
                e[9] == null && (e[9] = i[9]),
                e[0] = i[0],
                e[1] = l,
                e
            }
            function kg(e) {
                var i = [];
                if (e != null)
                    for (var o in ze(e))
                        i.push(o);
                return i
            }
            function Hg(e) {
                return Mn.call(e)
            }
            function dh(e, i, o) {
                return i = Ct(i === r ? e.length - 1 : i, 0),
                function() {
                    for (var c = arguments, l = -1, d = Ct(c.length - i, 0), m = R(d); ++l < d; )
                        m[l] = c[i + l];
                    l = -1;
                    for (var b = R(i + 1); ++l < i; )
                        b[l] = c[l];
                    return b[i] = o(m),
                    Dt(e, this, b)
                }
            }
            function gh(e, i) {
                return i.length < 2 ? e : ki(e, Nr(i, 0, -1))
            }
            function Kg(e, i) {
                for (var o = e.length, c = Ht(i.length, o), l = nr(e); c--; ) {
                    var d = i[c];
                    e[c] = ni(d, o) ? l[d] : r
                }
                return e
            }
            function Wa(e, i) {
                if (!(i === "constructor" && typeof e[i] == "function") && i != "__proto__")
                    return e[i]
            }
            var yh = mh(Uu)
              , Vs = sd || function(e, i) {
                return Ee.setTimeout(e, i)
            }
              , Ga = mh(fg);
            function vh(e, i, o) {
                var c = i + "";
                return Ga(e, Dg(c, Vg(Cg(c), o)))
            }
            function mh(e) {
                var i = 0
                  , o = 0;
                return function() {
                    var c = cd()
                      , l = dr - (c - o);
                    if (o = c,
                    l > 0) {
                        if (++i >= Bt)
                            return arguments[0]
                    } else
                        i = 0;
                    return e.apply(r, arguments)
                }
            }
            function no(e, i) {
                var o = -1
                  , c = e.length
                  , l = c - 1;
                for (i = i === r ? c : i; ++o < i; ) {
                    var d = Ta(o, l)
                      , m = e[d];
                    e[d] = e[o],
                    e[o] = m
                }
                return e.length = i,
                e
            }
            var wh = Ug(function(e) {
                var i = [];
                return e.charCodeAt(0) === 46 && i.push(""),
                e.replace(Et, function(o, c, l, d) {
                    i.push(l ? d.replace(ko, "$1") : c || o)
                }),
                i
            });
            function Gr(e) {
                if (typeof e == "string" || mr(e))
                    return e;
                var i = e + "";
                return i == "0" && 1 / e == -Me ? "-0" : i
            }
            function Ki(e) {
                if (e != null) {
                    try {
                        return Dn.call(e)
                    } catch {}
                    try {
                        return e + ""
                    } catch {}
                }
                return ""
            }
            function Vg(e, i) {
                return Sr(Ti, function(o) {
                    var c = "_." + o[0];
                    i & o[1] && !Nn(e, c) && e.push(c)
                }),
                e.sort()
            }
            function bh(e) {
                if (e instanceof _e)
                    return e.clone();
                var i = new Or(e.__wrapped__,e.__chain__);
                return i.__actions__ = nr(e.__actions__),
                i.__index__ = e.__index__,
                i.__values__ = e.__values__,
                i
            }
            function Bg(e, i, o) {
                (o ? Qt(e, i, o) : i === r) ? i = 1 : i = Ct(fe(i), 0);
                var c = e == null ? 0 : e.length;
                if (!c || i < 1)
                    return [];
                for (var l = 0, d = 0, m = R(kn(c / i)); l < c; )
                    m[d++] = Nr(e, l, l += i);
                return m
            }
            function Fg(e) {
                for (var i = -1, o = e == null ? 0 : e.length, c = 0, l = []; ++i < o; ) {
                    var d = e[i];
                    d && (l[c++] = d)
                }
                return l
            }
            function Wg() {
                var e = arguments.length;
                if (!e)
                    return [];
                for (var i = R(e - 1), o = arguments[0], c = e; c--; )
                    i[c - 1] = arguments[c];
                return mi(he(o) ? nr(o) : [o], zt(i, 1))
            }
            var Gg = ye(function(e, i) {
                return gt(e) ? Ls(e, zt(i, 1, gt, !0)) : []
            })
              , Jg = ye(function(e, i) {
                var o = Tr(i);
                return gt(o) && (o = r),
                gt(e) ? Ls(e, zt(i, 1, gt, !0), ee(o, 2)) : []
            })
              , Qg = ye(function(e, i) {
                var o = Tr(i);
                return gt(o) && (o = r),
                gt(e) ? Ls(e, zt(i, 1, gt, !0), r, o) : []
            });
            function Yg(e, i, o) {
                var c = e == null ? 0 : e.length;
                return c ? (i = o || i === r ? 1 : fe(i),
                Nr(e, i < 0 ? 0 : i, c)) : []
            }
            function Xg(e, i, o) {
                var c = e == null ? 0 : e.length;
                return c ? (i = o || i === r ? 1 : fe(i),
                i = c - i,
                Nr(e, 0, i < 0 ? 0 : i)) : []
            }
            function Zg(e, i) {
                return e && e.length ? Yn(e, ee(i, 3), !0, !0) : []
            }
            function ey(e, i) {
                return e && e.length ? Yn(e, ee(i, 3), !0) : []
            }
            function ty(e, i, o, c) {
                var l = e == null ? 0 : e.length;
                return l ? (o && typeof o != "number" && Qt(e, i, o) && (o = 0,
                c = l),
                Wd(e, i, o, c)) : []
            }
            function _h(e, i, o) {
                var c = e == null ? 0 : e.length;
                if (!c)
                    return -1;
                var l = o == null ? 0 : fe(o);
                return l < 0 && (l = Ct(c + l, 0)),
                Tn(e, ee(i, 3), l)
            }
            function Eh(e, i, o) {
                var c = e == null ? 0 : e.length;
                if (!c)
                    return -1;
                var l = c - 1;
                return o !== r && (l = fe(o),
                l = o < 0 ? Ct(c + l, 0) : Ht(l, c - 1)),
                Tn(e, ee(i, 3), l, !0)
            }
            function Ih(e) {
                var i = e == null ? 0 : e.length;
                return i ? zt(e, 1) : []
            }
            function ry(e) {
                var i = e == null ? 0 : e.length;
                return i ? zt(e, Me) : []
            }
            function iy(e, i) {
                var o = e == null ? 0 : e.length;
                return o ? (i = i === r ? 1 : fe(i),
                zt(e, i)) : []
            }
            function sy(e) {
                for (var i = -1, o = e == null ? 0 : e.length, c = {}; ++i < o; ) {
                    var l = e[i];
                    c[l[0]] = l[1]
                }
                return c
            }
            function xh(e) {
                return e && e.length ? e[0] : r
            }
            function ny(e, i, o) {
                var c = e == null ? 0 : e.length;
                if (!c)
                    return -1;
                var l = o == null ? 0 : fe(o);
                return l < 0 && (l = Ct(c + l, 0)),
                ns(e, i, l)
            }
            function oy(e) {
                var i = e == null ? 0 : e.length;
                return i ? Nr(e, 0, -1) : []
            }
            var ay = ye(function(e) {
                var i = Qe(e, Ma);
                return i.length && i[0] === e[0] ? Sa(i) : []
            })
              , cy = ye(function(e) {
                var i = Tr(e)
                  , o = Qe(e, Ma);
                return i === Tr(o) ? i = r : o.pop(),
                o.length && o[0] === e[0] ? Sa(o, ee(i, 2)) : []
            })
              , uy = ye(function(e) {
                var i = Tr(e)
                  , o = Qe(e, Ma);
                return i = typeof i == "function" ? i : r,
                i && o.pop(),
                o.length && o[0] === e[0] ? Sa(o, r, i) : []
            });
            function hy(e, i) {
                return e == null ? "" : od.call(e, i)
            }
            function Tr(e) {
                var i = e == null ? 0 : e.length;
                return i ? e[i - 1] : r
            }
            function ly(e, i, o) {
                var c = e == null ? 0 : e.length;
                if (!c)
                    return -1;
                var l = c;
                return o !== r && (l = fe(o),
                l = l < 0 ? Ct(c + l, 0) : Ht(l, c - 1)),
                i === i ? Vp(e, i, l) : Tn(e, su, l, !0)
            }
            function fy(e, i) {
                return e && e.length ? Mu(e, fe(i)) : r
            }
            var py = ye(Sh);
            function Sh(e, i) {
                return e && e.length && i && i.length ? Na(e, i) : e
            }
            function dy(e, i, o) {
                return e && e.length && i && i.length ? Na(e, i, ee(o, 2)) : e
            }
            function gy(e, i, o) {
                return e && e.length && i && i.length ? Na(e, i, r, o) : e
            }
            var yy = si(function(e, i) {
                var o = e == null ? 0 : e.length
                  , c = _a(e, i);
                return Lu(e, Qe(i, function(l) {
                    return ni(l, o) ? +l : l
                }).sort(Gu)),
                c
            });
            function vy(e, i) {
                var o = [];
                if (!(e && e.length))
                    return o;
                var c = -1
                  , l = []
                  , d = e.length;
                for (i = ee(i, 3); ++c < d; ) {
                    var m = e[c];
                    i(m, c, e) && (o.push(m),
                    l.push(c))
                }
                return Lu(e, l),
                o
            }
            function Ja(e) {
                return e == null ? e : hd.call(e)
            }
            function my(e, i, o) {
                var c = e == null ? 0 : e.length;
                return c ? (o && typeof o != "number" && Qt(e, i, o) ? (i = 0,
                o = c) : (i = i == null ? 0 : fe(i),
                o = o === r ? c : fe(o)),
                Nr(e, i, o)) : []
            }
            function wy(e, i) {
                return Qn(e, i)
            }
            function by(e, i, o) {
                return Aa(e, i, ee(o, 2))
            }
            function _y(e, i) {
                var o = e == null ? 0 : e.length;
                if (o) {
                    var c = Qn(e, i);
                    if (c < o && Ur(e[c], i))
                        return c
                }
                return -1
            }
            function Ey(e, i) {
                return Qn(e, i, !0)
            }
            function Iy(e, i, o) {
                return Aa(e, i, ee(o, 2), !0)
            }
            function xy(e, i) {
                var o = e == null ? 0 : e.length;
                if (o) {
                    var c = Qn(e, i, !0) - 1;
                    if (Ur(e[c], i))
                        return c
                }
                return -1
            }
            function Sy(e) {
                return e && e.length ? zu(e) : []
            }
            function Py(e, i) {
                return e && e.length ? zu(e, ee(i, 2)) : []
            }
            function Oy(e) {
                var i = e == null ? 0 : e.length;
                return i ? Nr(e, 1, i) : []
            }
            function Ry(e, i, o) {
                return e && e.length ? (i = o || i === r ? 1 : fe(i),
                Nr(e, 0, i < 0 ? 0 : i)) : []
            }
            function Ny(e, i, o) {
                var c = e == null ? 0 : e.length;
                return c ? (i = o || i === r ? 1 : fe(i),
                i = c - i,
                Nr(e, i < 0 ? 0 : i, c)) : []
            }
            function Ty(e, i) {
                return e && e.length ? Yn(e, ee(i, 3), !1, !0) : []
            }
            function Cy(e, i) {
                return e && e.length ? Yn(e, ee(i, 3)) : []
            }
            var Ay = ye(function(e) {
                return Ei(zt(e, 1, gt, !0))
            })
              , $y = ye(function(e) {
                var i = Tr(e);
                return gt(i) && (i = r),
                Ei(zt(e, 1, gt, !0), ee(i, 2))
            })
              , Dy = ye(function(e) {
                var i = Tr(e);
                return i = typeof i == "function" ? i : r,
                Ei(zt(e, 1, gt, !0), r, i)
            });
            function My(e) {
                return e && e.length ? Ei(e) : []
            }
            function qy(e, i) {
                return e && e.length ? Ei(e, ee(i, 2)) : []
            }
            function jy(e, i) {
                return i = typeof i == "function" ? i : r,
                e && e.length ? Ei(e, r, i) : []
            }
            function Qa(e) {
                if (!(e && e.length))
                    return [];
                var i = 0;
                return e = vi(e, function(o) {
                    if (gt(o))
                        return i = Ct(o.length, i),
                        !0
                }),
                pa(i, function(o) {
                    return Qe(e, ha(o))
                })
            }
            function Ph(e, i) {
                if (!(e && e.length))
                    return [];
                var o = Qa(e);
                return i == null ? o : Qe(o, function(c) {
                    return Dt(i, r, c)
                })
            }
            var Ly = ye(function(e, i) {
                return gt(e) ? Ls(e, i) : []
            })
              , Uy = ye(function(e) {
                return Da(vi(e, gt))
            })
              , zy = ye(function(e) {
                var i = Tr(e);
                return gt(i) && (i = r),
                Da(vi(e, gt), ee(i, 2))
            })
              , ky = ye(function(e) {
                var i = Tr(e);
                return i = typeof i == "function" ? i : r,
                Da(vi(e, gt), r, i)
            })
              , Hy = ye(Qa);
            function Ky(e, i) {
                return Vu(e || [], i || [], js)
            }
            function Vy(e, i) {
                return Vu(e || [], i || [], ks)
            }
            var By = ye(function(e) {
                var i = e.length
                  , o = i > 1 ? e[i - 1] : r;
                return o = typeof o == "function" ? (e.pop(),
                o) : r,
                Ph(e, o)
            });
            function Oh(e) {
                var i = p(e);
                return i.__chain__ = !0,
                i
            }
            function Fy(e, i) {
                return i(e),
                e
            }
            function oo(e, i) {
                return i(e)
            }
            var Wy = si(function(e) {
                var i = e.length
                  , o = i ? e[0] : 0
                  , c = this.__wrapped__
                  , l = function(d) {
                    return _a(d, e)
                };
                return i > 1 || this.__actions__.length || !(c instanceof _e) || !ni(o) ? this.thru(l) : (c = c.slice(o, +o + (i ? 1 : 0)),
                c.__actions__.push({
                    func: oo,
                    args: [l],
                    thisArg: r
                }),
                new Or(c,this.__chain__).thru(function(d) {
                    return i && !d.length && d.push(r),
                    d
                }))
            });
            function Gy() {
                return Oh(this)
            }
            function Jy() {
                return new Or(this.value(),this.__chain__)
            }
            function Qy() {
                this.__values__ === r && (this.__values__ = kh(this.value()));
                var e = this.__index__ >= this.__values__.length
                  , i = e ? r : this.__values__[this.__index__++];
                return {
                    done: e,
                    value: i
                }
            }
            function Yy() {
                return this
            }
            function Xy(e) {
                for (var i, o = this; o instanceof Bn; ) {
                    var c = bh(o);
                    c.__index__ = 0,
                    c.__values__ = r,
                    i ? l.__wrapped__ = c : i = c;
                    var l = c;
                    o = o.__wrapped__
                }
                return l.__wrapped__ = e,
                i
            }
            function Zy() {
                var e = this.__wrapped__;
                if (e instanceof _e) {
                    var i = e;
                    return this.__actions__.length && (i = new _e(this)),
                    i = i.reverse(),
                    i.__actions__.push({
                        func: oo,
                        args: [Ja],
                        thisArg: r
                    }),
                    new Or(i,this.__chain__)
                }
                return this.thru(Ja)
            }
            function ev() {
                return Ku(this.__wrapped__, this.__actions__)
            }
            var tv = Xn(function(e, i, o) {
                Ae.call(e, o) ? ++e[o] : ri(e, o, 1)
            });
            function rv(e, i, o) {
                var c = he(e) ? ru : Fd;
                return o && Qt(e, i, o) && (i = r),
                c(e, ee(i, 3))
            }
            function iv(e, i) {
                var o = he(e) ? vi : Pu;
                return o(e, ee(i, 3))
            }
            var sv = eh(_h)
              , nv = eh(Eh);
            function ov(e, i) {
                return zt(ao(e, i), 1)
            }
            function av(e, i) {
                return zt(ao(e, i), Me)
            }
            function cv(e, i, o) {
                return o = o === r ? 1 : fe(o),
                zt(ao(e, i), o)
            }
            function Rh(e, i) {
                var o = he(e) ? Sr : _i;
                return o(e, ee(i, 3))
            }
            function Nh(e, i) {
                var o = he(e) ? Op : Su;
                return o(e, ee(i, 3))
            }
            var uv = Xn(function(e, i, o) {
                Ae.call(e, o) ? e[o].push(i) : ri(e, o, [i])
            });
            function hv(e, i, o, c) {
                e = or(e) ? e : vs(e),
                o = o && !c ? fe(o) : 0;
                var l = e.length;
                return o < 0 && (o = Ct(l + o, 0)),
                fo(e) ? o <= l && e.indexOf(i, o) > -1 : !!l && ns(e, i, o) > -1
            }
            var lv = ye(function(e, i, o) {
                var c = -1
                  , l = typeof i == "function"
                  , d = or(e) ? R(e.length) : [];
                return _i(e, function(m) {
                    d[++c] = l ? Dt(i, m, o) : Us(m, i, o)
                }),
                d
            })
              , fv = Xn(function(e, i, o) {
                ri(e, o, i)
            });
            function ao(e, i) {
                var o = he(e) ? Qe : Au;
                return o(e, ee(i, 3))
            }
            function pv(e, i, o, c) {
                return e == null ? [] : (he(i) || (i = i == null ? [] : [i]),
                o = c ? r : o,
                he(o) || (o = o == null ? [] : [o]),
                qu(e, i, o))
            }
            var dv = Xn(function(e, i, o) {
                e[o ? 0 : 1].push(i)
            }, function() {
                return [[], []]
            });
            function gv(e, i, o) {
                var c = he(e) ? ca : ou
                  , l = arguments.length < 3;
                return c(e, ee(i, 4), o, l, _i)
            }
            function yv(e, i, o) {
                var c = he(e) ? Rp : ou
                  , l = arguments.length < 3;
                return c(e, ee(i, 4), o, l, Su)
            }
            function vv(e, i) {
                var o = he(e) ? vi : Pu;
                return o(e, ho(ee(i, 3)))
            }
            function mv(e) {
                var i = he(e) ? _u : hg;
                return i(e)
            }
            function wv(e, i, o) {
                (o ? Qt(e, i, o) : i === r) ? i = 1 : i = fe(i);
                var c = he(e) ? kd : lg;
                return c(e, i)
            }
            function bv(e) {
                var i = he(e) ? Hd : pg;
                return i(e)
            }
            function _v(e) {
                if (e == null)
                    return 0;
                if (or(e))
                    return fo(e) ? as(e) : e.length;
                var i = Kt(e);
                return i == pe || i == Ne ? e.size : Oa(e).length
            }
            function Ev(e, i, o) {
                var c = he(e) ? ua : dg;
                return o && Qt(e, i, o) && (i = r),
                c(e, ee(i, 3))
            }
            var Iv = ye(function(e, i) {
                if (e == null)
                    return [];
                var o = i.length;
                return o > 1 && Qt(e, i[0], i[1]) ? i = [] : o > 2 && Qt(i[0], i[1], i[2]) && (i = [i[0]]),
                qu(e, zt(i, 1), [])
            })
              , co = id || function() {
                return Ee.Date.now()
            }
            ;
            function xv(e, i) {
                if (typeof i != "function")
                    throw new Pr(f);
                return e = fe(e),
                function() {
                    if (--e < 1)
                        return i.apply(this, arguments)
                }
            }
            function Th(e, i, o) {
                return i = o ? r : i,
                i = e && i == null ? e.length : i,
                ii(e, Q, r, r, r, r, i)
            }
            function Ch(e, i) {
                var o;
                if (typeof i != "function")
                    throw new Pr(f);
                return e = fe(e),
                function() {
                    return --e > 0 && (o = i.apply(this, arguments)),
                    e <= 1 && (i = r),
                    o
                }
            }
            var Ya = ye(function(e, i, o) {
                var c = ne;
                if (o.length) {
                    var l = wi(o, gs(Ya));
                    c |= ie
                }
                return ii(e, c, i, o, l)
            })
              , Ah = ye(function(e, i, o) {
                var c = ne | oe;
                if (o.length) {
                    var l = wi(o, gs(Ah));
                    c |= ie
                }
                return ii(i, c, e, o, l)
            });
            function $h(e, i, o) {
                i = o ? r : i;
                var c = ii(e, ge, r, r, r, r, r, i);
                return c.placeholder = $h.placeholder,
                c
            }
            function Dh(e, i, o) {
                i = o ? r : i;
                var c = ii(e, me, r, r, r, r, r, i);
                return c.placeholder = Dh.placeholder,
                c
            }
            function Mh(e, i, o) {
                var c, l, d, m, b, S, $ = 0, D = !1, j = !1, K = !0;
                if (typeof e != "function")
                    throw new Pr(f);
                i = Cr(i) || 0,
                rt(o) && (D = !!o.leading,
                j = "maxWait"in o,
                d = j ? Ct(Cr(o.maxWait) || 0, i) : d,
                K = "trailing"in o ? !!o.trailing : K);
                function Y(yt) {
                    var zr = c
                      , ci = l;
                    return c = l = r,
                    $ = yt,
                    m = e.apply(ci, zr),
                    m
                }
                function te(yt) {
                    return $ = yt,
                    b = Vs(ve, i),
                    D ? Y(yt) : m
                }
                function de(yt) {
                    var zr = yt - S
                      , ci = yt - $
                      , el = i - zr;
                    return j ? Ht(el, d - ci) : el
                }
                function re(yt) {
                    var zr = yt - S
                      , ci = yt - $;
                    return S === r || zr >= i || zr < 0 || j && ci >= d
                }
                function ve() {
                    var yt = co();
                    if (re(yt))
                        return Ie(yt);
                    b = Vs(ve, de(yt))
                }
                function Ie(yt) {
                    return b = r,
                    K && c ? Y(yt) : (c = l = r,
                    m)
                }
                function wr() {
                    b !== r && Bu(b),
                    $ = 0,
                    c = S = l = b = r
                }
                function Yt() {
                    return b === r ? m : Ie(co())
                }
                function br() {
                    var yt = co()
                      , zr = re(yt);
                    if (c = arguments,
                    l = this,
                    S = yt,
                    zr) {
                        if (b === r)
                            return te(S);
                        if (j)
                            return Bu(b),
                            b = Vs(ve, i),
                            Y(S)
                    }
                    return b === r && (b = Vs(ve, i)),
                    m
                }
                return br.cancel = wr,
                br.flush = Yt,
                br
            }
            var Sv = ye(function(e, i) {
                return xu(e, 1, i)
            })
              , Pv = ye(function(e, i, o) {
                return xu(e, Cr(i) || 0, o)
            });
            function Ov(e) {
                return ii(e, At)
            }
            function uo(e, i) {
                if (typeof e != "function" || i != null && typeof i != "function")
                    throw new Pr(f);
                var o = function() {
                    var c = arguments
                      , l = i ? i.apply(this, c) : c[0]
                      , d = o.cache;
                    if (d.has(l))
                        return d.get(l);
                    var m = e.apply(this, c);
                    return o.cache = d.set(l, m) || d,
                    m
                };
                return o.cache = new (uo.Cache || ti),
                o
            }
            uo.Cache = ti;
            function ho(e) {
                if (typeof e != "function")
                    throw new Pr(f);
                return function() {
                    var i = arguments;
                    switch (i.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, i[0]);
                    case 2:
                        return !e.call(this, i[0], i[1]);
                    case 3:
                        return !e.call(this, i[0], i[1], i[2])
                    }
                    return !e.apply(this, i)
                }
            }
            function Rv(e) {
                return Ch(2, e)
            }
            var Nv = gg(function(e, i) {
                i = i.length == 1 && he(i[0]) ? Qe(i[0], yr(ee())) : Qe(zt(i, 1), yr(ee()));
                var o = i.length;
                return ye(function(c) {
                    for (var l = -1, d = Ht(c.length, o); ++l < d; )
                        c[l] = i[l].call(this, c[l]);
                    return Dt(e, this, c)
                })
            })
              , Xa = ye(function(e, i) {
                var o = wi(i, gs(Xa));
                return ii(e, ie, r, i, o)
            })
              , qh = ye(function(e, i) {
                var o = wi(i, gs(qh));
                return ii(e, ae, r, i, o)
            })
              , Tv = si(function(e, i) {
                return ii(e, xe, r, r, r, i)
            });
            function Cv(e, i) {
                if (typeof e != "function")
                    throw new Pr(f);
                return i = i === r ? i : fe(i),
                ye(e, i)
            }
            function Av(e, i) {
                if (typeof e != "function")
                    throw new Pr(f);
                return i = i == null ? 0 : Ct(fe(i), 0),
                ye(function(o) {
                    var c = o[i]
                      , l = xi(o, 0, i);
                    return c && mi(l, c),
                    Dt(e, this, l)
                })
            }
            function $v(e, i, o) {
                var c = !0
                  , l = !0;
                if (typeof e != "function")
                    throw new Pr(f);
                return rt(o) && (c = "leading"in o ? !!o.leading : c,
                l = "trailing"in o ? !!o.trailing : l),
                Mh(e, i, {
                    leading: c,
                    maxWait: i,
                    trailing: l
                })
            }
            function Dv(e) {
                return Th(e, 1)
            }
            function Mv(e, i) {
                return Xa(qa(i), e)
            }
            function qv() {
                if (!arguments.length)
                    return [];
                var e = arguments[0];
                return he(e) ? e : [e]
            }
            function jv(e) {
                return Rr(e, z)
            }
            function Lv(e, i) {
                return i = typeof i == "function" ? i : r,
                Rr(e, z, i)
            }
            function Uv(e) {
                return Rr(e, P | z)
            }
            function zv(e, i) {
                return i = typeof i == "function" ? i : r,
                Rr(e, P | z, i)
            }
            function kv(e, i) {
                return i == null || Iu(e, i, Mt(i))
            }
            function Ur(e, i) {
                return e === i || e !== e && i !== i
            }
            var Hv = ro(xa)
              , Kv = ro(function(e, i) {
                return e >= i
            })
              , Vi = Nu(function() {
                return arguments
            }()) ? Nu : function(e) {
                return lt(e) && Ae.call(e, "callee") && !gu.call(e, "callee")
            }
              , he = R.isArray
              , Vv = Gt ? yr(Gt) : Xd;
            function or(e) {
                return e != null && lo(e.length) && !oi(e)
            }
            function gt(e) {
                return lt(e) && or(e)
            }
            function Bv(e) {
                return e === !0 || e === !1 || lt(e) && Jt(e) == N
            }
            var Si = nd || uc
              , Fv = qr ? yr(qr) : Zd;
            function Wv(e) {
                return lt(e) && e.nodeType === 1 && !Bs(e)
            }
            function Gv(e) {
                if (e == null)
                    return !0;
                if (or(e) && (he(e) || typeof e == "string" || typeof e.splice == "function" || Si(e) || ys(e) || Vi(e)))
                    return !e.length;
                var i = Kt(e);
                if (i == pe || i == Ne)
                    return !e.size;
                if (Ks(e))
                    return !Oa(e).length;
                for (var o in e)
                    if (Ae.call(e, o))
                        return !1;
                return !0
            }
            function Jv(e, i) {
                return zs(e, i)
            }
            function Qv(e, i, o) {
                o = typeof o == "function" ? o : r;
                var c = o ? o(e, i) : r;
                return c === r ? zs(e, i, r, o) : !!c
            }
            function Za(e) {
                if (!lt(e))
                    return !1;
                var i = Jt(e);
                return i == _ || i == u || typeof e.message == "string" && typeof e.name == "string" && !Bs(e)
            }
            function Yv(e) {
                return typeof e == "number" && vu(e)
            }
            function oi(e) {
                if (!rt(e))
                    return !1;
                var i = Jt(e);
                return i == J || i == se || i == T || i == ft
            }
            function jh(e) {
                return typeof e == "number" && e == fe(e)
            }
            function lo(e) {
                return typeof e == "number" && e > -1 && e % 1 == 0 && e <= W
            }
            function rt(e) {
                var i = typeof e;
                return e != null && (i == "object" || i == "function")
            }
            function lt(e) {
                return e != null && typeof e == "object"
            }
            var Lh = xr ? yr(xr) : tg;
            function Xv(e, i) {
                return e === i || Pa(e, i, Ka(i))
            }
            function Zv(e, i, o) {
                return o = typeof o == "function" ? o : r,
                Pa(e, i, Ka(i), o)
            }
            function em(e) {
                return Uh(e) && e != +e
            }
            function tm(e) {
                if (Lg(e))
                    throw new ce(h);
                return Tu(e)
            }
            function rm(e) {
                return e === null
            }
            function im(e) {
                return e == null
            }
            function Uh(e) {
                return typeof e == "number" || lt(e) && Jt(e) == Se
            }
            function Bs(e) {
                if (!lt(e) || Jt(e) != be)
                    return !1;
                var i = Ln(e);
                if (i === null)
                    return !0;
                var o = Ae.call(i, "constructor") && i.constructor;
                return typeof o == "function" && o instanceof o && Dn.call(o) == Zp
            }
            var ec = Br ? yr(Br) : rg;
            function sm(e) {
                return jh(e) && e >= -W && e <= W
            }
            var zh = Ts ? yr(Ts) : ig;
            function fo(e) {
                return typeof e == "string" || !he(e) && lt(e) && Jt(e) == He
            }
            function mr(e) {
                return typeof e == "symbol" || lt(e) && Jt(e) == Ke
            }
            var ys = qi ? yr(qi) : sg;
            function nm(e) {
                return e === r
            }
            function om(e) {
                return lt(e) && Kt(e) == $e
            }
            function am(e) {
                return lt(e) && Jt(e) == Ve
            }
            var cm = ro(Ra)
              , um = ro(function(e, i) {
                return e <= i
            });
            function kh(e) {
                if (!e)
                    return [];
                if (or(e))
                    return fo(e) ? jr(e) : nr(e);
                if (As && e[As])
                    return kp(e[As]());
                var i = Kt(e)
                  , o = i == pe ? ga : i == Ne ? Cn : vs;
                return o(e)
            }
            function ai(e) {
                if (!e)
                    return e === 0 ? e : 0;
                if (e = Cr(e),
                e === Me || e === -Me) {
                    var i = e < 0 ? -1 : 1;
                    return i * V
                }
                return e === e ? e : 0
            }
            function fe(e) {
                var i = ai(e)
                  , o = i % 1;
                return i === i ? o ? i - o : i : 0
            }
            function Hh(e) {
                return e ? zi(fe(e), 0, B) : 0
            }
            function Cr(e) {
                if (typeof e == "number")
                    return e;
                if (mr(e))
                    return H;
                if (rt(e)) {
                    var i = typeof e.valueOf == "function" ? e.valueOf() : e;
                    e = rt(i) ? i + "" : i
                }
                if (typeof e != "string")
                    return e === 0 ? e : +e;
                e = au(e);
                var o = Vo.test(e);
                return o || Fo.test(e) ? ue(e.slice(2), o ? 2 : 8) : Ko.test(e) ? H : +e
            }
            function Kh(e) {
                return Wr(e, ar(e))
            }
            function hm(e) {
                return e ? zi(fe(e), -W, W) : e === 0 ? e : 0
            }
            function Te(e) {
                return e == null ? "" : vr(e)
            }
            var lm = ps(function(e, i) {
                if (Ks(i) || or(i)) {
                    Wr(i, Mt(i), e);
                    return
                }
                for (var o in i)
                    Ae.call(i, o) && js(e, o, i[o])
            })
              , Vh = ps(function(e, i) {
                Wr(i, ar(i), e)
            })
              , po = ps(function(e, i, o, c) {
                Wr(i, ar(i), e, c)
            })
              , fm = ps(function(e, i, o, c) {
                Wr(i, Mt(i), e, c)
            })
              , pm = si(_a);
            function dm(e, i) {
                var o = fs(e);
                return i == null ? o : Eu(o, i)
            }
            var gm = ye(function(e, i) {
                e = ze(e);
                var o = -1
                  , c = i.length
                  , l = c > 2 ? i[2] : r;
                for (l && Qt(i[0], i[1], l) && (c = 1); ++o < c; )
                    for (var d = i[o], m = ar(d), b = -1, S = m.length; ++b < S; ) {
                        var $ = m[b]
                          , D = e[$];
                        (D === r || Ur(D, us[$]) && !Ae.call(e, $)) && (e[$] = d[$])
                    }
                return e
            })
              , ym = ye(function(e) {
                return e.push(r, ah),
                Dt(Bh, r, e)
            });
            function vm(e, i) {
                return iu(e, ee(i, 3), Fr)
            }
            function mm(e, i) {
                return iu(e, ee(i, 3), Ia)
            }
            function wm(e, i) {
                return e == null ? e : Ea(e, ee(i, 3), ar)
            }
            function bm(e, i) {
                return e == null ? e : Ou(e, ee(i, 3), ar)
            }
            function _m(e, i) {
                return e && Fr(e, ee(i, 3))
            }
            function Em(e, i) {
                return e && Ia(e, ee(i, 3))
            }
            function Im(e) {
                return e == null ? [] : Gn(e, Mt(e))
            }
            function xm(e) {
                return e == null ? [] : Gn(e, ar(e))
            }
            function tc(e, i, o) {
                var c = e == null ? r : ki(e, i);
                return c === r ? o : c
            }
            function Sm(e, i) {
                return e != null && hh(e, i, Gd)
            }
            function rc(e, i) {
                return e != null && hh(e, i, Jd)
            }
            var Pm = rh(function(e, i, o) {
                i != null && typeof i.toString != "function" && (i = Mn.call(i)),
                e[i] = o
            }, sc(cr))
              , Om = rh(function(e, i, o) {
                i != null && typeof i.toString != "function" && (i = Mn.call(i)),
                Ae.call(e, i) ? e[i].push(o) : e[i] = [o]
            }, ee)
              , Rm = ye(Us);
            function Mt(e) {
                return or(e) ? bu(e) : Oa(e)
            }
            function ar(e) {
                return or(e) ? bu(e, !0) : ng(e)
            }
            function Nm(e, i) {
                var o = {};
                return i = ee(i, 3),
                Fr(e, function(c, l, d) {
                    ri(o, i(c, l, d), c)
                }),
                o
            }
            function Tm(e, i) {
                var o = {};
                return i = ee(i, 3),
                Fr(e, function(c, l, d) {
                    ri(o, l, i(c, l, d))
                }),
                o
            }
            var Cm = ps(function(e, i, o) {
                Jn(e, i, o)
            })
              , Bh = ps(function(e, i, o, c) {
                Jn(e, i, o, c)
            })
              , Am = si(function(e, i) {
                var o = {};
                if (e == null)
                    return o;
                var c = !1;
                i = Qe(i, function(d) {
                    return d = Ii(d, e),
                    c || (c = d.length > 1),
                    d
                }),
                Wr(e, ka(e), o),
                c && (o = Rr(o, P | C | z, Pg));
                for (var l = i.length; l--; )
                    $a(o, i[l]);
                return o
            });
            function $m(e, i) {
                return Fh(e, ho(ee(i)))
            }
            var Dm = si(function(e, i) {
                return e == null ? {} : ag(e, i)
            });
            function Fh(e, i) {
                if (e == null)
                    return {};
                var o = Qe(ka(e), function(c) {
                    return [c]
                });
                return i = ee(i),
                ju(e, o, function(c, l) {
                    return i(c, l[0])
                })
            }
            function Mm(e, i, o) {
                i = Ii(i, e);
                var c = -1
                  , l = i.length;
                for (l || (l = 1,
                e = r); ++c < l; ) {
                    var d = e == null ? r : e[Gr(i[c])];
                    d === r && (c = l,
                    d = o),
                    e = oi(d) ? d.call(e) : d
                }
                return e
            }
            function qm(e, i, o) {
                return e == null ? e : ks(e, i, o)
            }
            function jm(e, i, o, c) {
                return c = typeof c == "function" ? c : r,
                e == null ? e : ks(e, i, o, c)
            }
            var Wh = nh(Mt)
              , Gh = nh(ar);
            function Lm(e, i, o) {
                var c = he(e)
                  , l = c || Si(e) || ys(e);
                if (i = ee(i, 4),
                o == null) {
                    var d = e && e.constructor;
                    l ? o = c ? new d : [] : rt(e) ? o = oi(d) ? fs(Ln(e)) : {} : o = {}
                }
                return (l ? Sr : Fr)(e, function(m, b, S) {
                    return i(o, m, b, S)
                }),
                o
            }
            function Um(e, i) {
                return e == null ? !0 : $a(e, i)
            }
            function zm(e, i, o) {
                return e == null ? e : Hu(e, i, qa(o))
            }
            function km(e, i, o, c) {
                return c = typeof c == "function" ? c : r,
                e == null ? e : Hu(e, i, qa(o), c)
            }
            function vs(e) {
                return e == null ? [] : da(e, Mt(e))
            }
            function Hm(e) {
                return e == null ? [] : da(e, ar(e))
            }
            function Km(e, i, o) {
                return o === r && (o = i,
                i = r),
                o !== r && (o = Cr(o),
                o = o === o ? o : 0),
                i !== r && (i = Cr(i),
                i = i === i ? i : 0),
                zi(Cr(e), i, o)
            }
            function Vm(e, i, o) {
                return i = ai(i),
                o === r ? (o = i,
                i = 0) : o = ai(o),
                e = Cr(e),
                Qd(e, i, o)
            }
            function Bm(e, i, o) {
                if (o && typeof o != "boolean" && Qt(e, i, o) && (i = o = r),
                o === r && (typeof i == "boolean" ? (o = i,
                i = r) : typeof e == "boolean" && (o = e,
                e = r)),
                e === r && i === r ? (e = 0,
                i = 1) : (e = ai(e),
                i === r ? (i = e,
                e = 0) : i = ai(i)),
                e > i) {
                    var c = e;
                    e = i,
                    i = c
                }
                if (o || e % 1 || i % 1) {
                    var l = mu();
                    return Ht(e + l * (i - e + Le("1e-" + ((l + "").length - 1))), i)
                }
                return Ta(e, i)
            }
            var Fm = ds(function(e, i, o) {
                return i = i.toLowerCase(),
                e + (o ? Jh(i) : i)
            });
            function Jh(e) {
                return ic(Te(e).toLowerCase())
            }
            function Qh(e) {
                return e = Te(e),
                e && e.replace(Xr, qp).replace(na, "")
            }
            function Wm(e, i, o) {
                e = Te(e),
                i = vr(i);
                var c = e.length;
                o = o === r ? c : zi(fe(o), 0, c);
                var l = o;
                return o -= i.length,
                o >= 0 && e.slice(o, l) == i
            }
            function Gm(e) {
                return e = Te(e),
                e && Ge.test(e) ? e.replace(Ci, jp) : e
            }
            function Jm(e) {
                return e = Te(e),
                e && It.test(e) ? e.replace(ct, "\\$&") : e
            }
            var Qm = ds(function(e, i, o) {
                return e + (o ? "-" : "") + i.toLowerCase()
            })
              , Ym = ds(function(e, i, o) {
                return e + (o ? " " : "") + i.toLowerCase()
            })
              , Xm = Zu("toLowerCase");
            function Zm(e, i, o) {
                e = Te(e),
                i = fe(i);
                var c = i ? as(e) : 0;
                if (!i || c >= i)
                    return e;
                var l = (i - c) / 2;
                return to(Hn(l), o) + e + to(kn(l), o)
            }
            function e0(e, i, o) {
                e = Te(e),
                i = fe(i);
                var c = i ? as(e) : 0;
                return i && c < i ? e + to(i - c, o) : e
            }
            function t0(e, i, o) {
                e = Te(e),
                i = fe(i);
                var c = i ? as(e) : 0;
                return i && c < i ? to(i - c, o) + e : e
            }
            function r0(e, i, o) {
                return o || i == null ? i = 0 : i && (i = +i),
                ud(Te(e).replace(ut, ""), i || 0)
            }
            function i0(e, i, o) {
                return (o ? Qt(e, i, o) : i === r) ? i = 1 : i = fe(i),
                Ca(Te(e), i)
            }
            function s0() {
                var e = arguments
                  , i = Te(e[0]);
                return e.length < 3 ? i : i.replace(e[1], e[2])
            }
            var n0 = ds(function(e, i, o) {
                return e + (o ? "_" : "") + i.toLowerCase()
            });
            function o0(e, i, o) {
                return o && typeof o != "number" && Qt(e, i, o) && (i = o = r),
                o = o === r ? B : o >>> 0,
                o ? (e = Te(e),
                e && (typeof i == "string" || i != null && !ec(i)) && (i = vr(i),
                !i && os(e)) ? xi(jr(e), 0, o) : e.split(i, o)) : []
            }
            var a0 = ds(function(e, i, o) {
                return e + (o ? " " : "") + ic(i)
            });
            function c0(e, i, o) {
                return e = Te(e),
                o = o == null ? 0 : zi(fe(o), 0, e.length),
                i = vr(i),
                e.slice(o, o + i.length) == i
            }
            function u0(e, i, o) {
                var c = p.templateSettings;
                o && Qt(e, i, o) && (i = r),
                e = Te(e),
                i = po({}, i, c, oh);
                var l = po({}, i.imports, c.imports, oh), d = Mt(l), m = da(l, d), b, S, $ = 0, D = i.interpolate || Xi, j = "__p += '", K = ya((i.escape || Xi).source + "|" + D.source + "|" + (D === tt ? Ho : Xi).source + "|" + (i.evaluate || Xi).source + "|$", "g"), Y = "//# sourceURL=" + (Ae.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++oa + "]") + `
`;
                e.replace(K, function(re, ve, Ie, wr, Yt, br) {
                    return Ie || (Ie = wr),
                    j += e.slice($, br).replace(Go, Lp),
                    ve && (b = !0,
                    j += `' +
__e(` + ve + `) +
'`),
                    Yt && (S = !0,
                    j += `';
` + Yt + `;
__p += '`),
                    Ie && (j += `' +
((__t = (` + Ie + `)) == null ? '' : __t) +
'`),
                    $ = br + re.length,
                    re
                }),
                j += `';
`;
                var te = Ae.call(i, "variable") && i.variable;
                if (!te)
                    j = `with (obj) {
` + j + `
}
`;
                else if (zo.test(te))
                    throw new ce(y);
                j = (S ? j.replace(Kr, "") : j).replace(Wt, "$1").replace(Yr, "$1;"),
                j = "function(" + (te || "obj") + `) {
` + (te ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (b ? ", __e = _.escape" : "") + (S ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + j + `return __p
}`;
                var de = Xh(function() {
                    return Re(d, Y + "return " + j).apply(r, m)
                });
                if (de.source = j,
                Za(de))
                    throw de;
                return de
            }
            function h0(e) {
                return Te(e).toLowerCase()
            }
            function l0(e) {
                return Te(e).toUpperCase()
            }
            function f0(e, i, o) {
                if (e = Te(e),
                e && (o || i === r))
                    return au(e);
                if (!e || !(i = vr(i)))
                    return e;
                var c = jr(e)
                  , l = jr(i)
                  , d = cu(c, l)
                  , m = uu(c, l) + 1;
                return xi(c, d, m).join("")
            }
            function p0(e, i, o) {
                if (e = Te(e),
                e && (o || i === r))
                    return e.slice(0, lu(e) + 1);
                if (!e || !(i = vr(i)))
                    return e;
                var c = jr(e)
                  , l = uu(c, jr(i)) + 1;
                return xi(c, 0, l).join("")
            }
            function d0(e, i, o) {
                if (e = Te(e),
                e && (o || i === r))
                    return e.replace(ut, "");
                if (!e || !(i = vr(i)))
                    return e;
                var c = jr(e)
                  , l = cu(c, jr(i));
                return xi(c, l).join("")
            }
            function g0(e, i) {
                var o = mt
                  , c = rr;
                if (rt(i)) {
                    var l = "separator"in i ? i.separator : l;
                    o = "length"in i ? fe(i.length) : o,
                    c = "omission"in i ? vr(i.omission) : c
                }
                e = Te(e);
                var d = e.length;
                if (os(e)) {
                    var m = jr(e);
                    d = m.length
                }
                if (o >= d)
                    return e;
                var b = o - as(c);
                if (b < 1)
                    return c;
                var S = m ? xi(m, 0, b).join("") : e.slice(0, b);
                if (l === r)
                    return S + c;
                if (m && (b += S.length - b),
                ec(l)) {
                    if (e.slice(b).search(l)) {
                        var $, D = S;
                        for (l.global || (l = ya(l.source, Te(Ir.exec(l)) + "g")),
                        l.lastIndex = 0; $ = l.exec(D); )
                            var j = $.index;
                        S = S.slice(0, j === r ? b : j)
                    }
                } else if (e.indexOf(vr(l), b) != b) {
                    var K = S.lastIndexOf(l);
                    K > -1 && (S = S.slice(0, K))
                }
                return S + c
            }
            function y0(e) {
                return e = Te(e),
                e && nt.test(e) ? e.replace(gi, Bp) : e
            }
            var v0 = ds(function(e, i, o) {
                return e + (o ? " " : "") + i.toUpperCase()
            })
              , ic = Zu("toUpperCase");
            function Yh(e, i, o) {
                return e = Te(e),
                i = o ? r : i,
                i === r ? zp(e) ? Gp(e) : Cp(e) : e.match(i) || []
            }
            var Xh = ye(function(e, i) {
                try {
                    return Dt(e, r, i)
                } catch (o) {
                    return Za(o) ? o : new ce(o)
                }
            })
              , m0 = si(function(e, i) {
                return Sr(i, function(o) {
                    o = Gr(o),
                    ri(e, o, Ya(e[o], e))
                }),
                e
            });
            function w0(e) {
                var i = e == null ? 0 : e.length
                  , o = ee();
                return e = i ? Qe(e, function(c) {
                    if (typeof c[1] != "function")
                        throw new Pr(f);
                    return [o(c[0]), c[1]]
                }) : [],
                ye(function(c) {
                    for (var l = -1; ++l < i; ) {
                        var d = e[l];
                        if (Dt(d[0], this, c))
                            return Dt(d[1], this, c)
                    }
                })
            }
            function b0(e) {
                return Bd(Rr(e, P))
            }
            function sc(e) {
                return function() {
                    return e
                }
            }
            function _0(e, i) {
                return e == null || e !== e ? i : e
            }
            var E0 = th()
              , I0 = th(!0);
            function cr(e) {
                return e
            }
            function nc(e) {
                return Cu(typeof e == "function" ? e : Rr(e, P))
            }
            function x0(e) {
                return $u(Rr(e, P))
            }
            function S0(e, i) {
                return Du(e, Rr(i, P))
            }
            var P0 = ye(function(e, i) {
                return function(o) {
                    return Us(o, e, i)
                }
            })
              , O0 = ye(function(e, i) {
                return function(o) {
                    return Us(e, o, i)
                }
            });
            function oc(e, i, o) {
                var c = Mt(i)
                  , l = Gn(i, c);
                o == null && !(rt(i) && (l.length || !c.length)) && (o = i,
                i = e,
                e = this,
                l = Gn(i, Mt(i)));
                var d = !(rt(o) && "chain"in o) || !!o.chain
                  , m = oi(e);
                return Sr(l, function(b) {
                    var S = i[b];
                    e[b] = S,
                    m && (e.prototype[b] = function() {
                        var $ = this.__chain__;
                        if (d || $) {
                            var D = e(this.__wrapped__)
                              , j = D.__actions__ = nr(this.__actions__);
                            return j.push({
                                func: S,
                                args: arguments,
                                thisArg: e
                            }),
                            D.__chain__ = $,
                            D
                        }
                        return S.apply(e, mi([this.value()], arguments))
                    }
                    )
                }),
                e
            }
            function R0() {
                return Ee._ === this && (Ee._ = ed),
                this
            }
            function ac() {}
            function N0(e) {
                return e = fe(e),
                ye(function(i) {
                    return Mu(i, e)
                })
            }
            var T0 = La(Qe)
              , C0 = La(ru)
              , A0 = La(ua);
            function Zh(e) {
                return Ba(e) ? ha(Gr(e)) : cg(e)
            }
            function $0(e) {
                return function(i) {
                    return e == null ? r : ki(e, i)
                }
            }
            var D0 = ih()
              , M0 = ih(!0);
            function cc() {
                return []
            }
            function uc() {
                return !1
            }
            function q0() {
                return {}
            }
            function j0() {
                return ""
            }
            function L0() {
                return !0
            }
            function U0(e, i) {
                if (e = fe(e),
                e < 1 || e > W)
                    return [];
                var o = B
                  , c = Ht(e, B);
                i = ee(i),
                e -= B;
                for (var l = pa(c, i); ++o < e; )
                    i(o);
                return l
            }
            function z0(e) {
                return he(e) ? Qe(e, Gr) : mr(e) ? [e] : nr(wh(Te(e)))
            }
            function k0(e) {
                var i = ++Xp;
                return Te(e) + i
            }
            var H0 = eo(function(e, i) {
                return e + i
            }, 0)
              , K0 = Ua("ceil")
              , V0 = eo(function(e, i) {
                return e / i
            }, 1)
              , B0 = Ua("floor");
            function F0(e) {
                return e && e.length ? Wn(e, cr, xa) : r
            }
            function W0(e, i) {
                return e && e.length ? Wn(e, ee(i, 2), xa) : r
            }
            function G0(e) {
                return nu(e, cr)
            }
            function J0(e, i) {
                return nu(e, ee(i, 2))
            }
            function Q0(e) {
                return e && e.length ? Wn(e, cr, Ra) : r
            }
            function Y0(e, i) {
                return e && e.length ? Wn(e, ee(i, 2), Ra) : r
            }
            var X0 = eo(function(e, i) {
                return e * i
            }, 1)
              , Z0 = Ua("round")
              , ew = eo(function(e, i) {
                return e - i
            }, 0);
            function tw(e) {
                return e && e.length ? fa(e, cr) : 0
            }
            function rw(e, i) {
                return e && e.length ? fa(e, ee(i, 2)) : 0
            }
            return p.after = xv,
            p.ary = Th,
            p.assign = lm,
            p.assignIn = Vh,
            p.assignInWith = po,
            p.assignWith = fm,
            p.at = pm,
            p.before = Ch,
            p.bind = Ya,
            p.bindAll = m0,
            p.bindKey = Ah,
            p.castArray = qv,
            p.chain = Oh,
            p.chunk = Bg,
            p.compact = Fg,
            p.concat = Wg,
            p.cond = w0,
            p.conforms = b0,
            p.constant = sc,
            p.countBy = tv,
            p.create = dm,
            p.curry = $h,
            p.curryRight = Dh,
            p.debounce = Mh,
            p.defaults = gm,
            p.defaultsDeep = ym,
            p.defer = Sv,
            p.delay = Pv,
            p.difference = Gg,
            p.differenceBy = Jg,
            p.differenceWith = Qg,
            p.drop = Yg,
            p.dropRight = Xg,
            p.dropRightWhile = Zg,
            p.dropWhile = ey,
            p.fill = ty,
            p.filter = iv,
            p.flatMap = ov,
            p.flatMapDeep = av,
            p.flatMapDepth = cv,
            p.flatten = Ih,
            p.flattenDeep = ry,
            p.flattenDepth = iy,
            p.flip = Ov,
            p.flow = E0,
            p.flowRight = I0,
            p.fromPairs = sy,
            p.functions = Im,
            p.functionsIn = xm,
            p.groupBy = uv,
            p.initial = oy,
            p.intersection = ay,
            p.intersectionBy = cy,
            p.intersectionWith = uy,
            p.invert = Pm,
            p.invertBy = Om,
            p.invokeMap = lv,
            p.iteratee = nc,
            p.keyBy = fv,
            p.keys = Mt,
            p.keysIn = ar,
            p.map = ao,
            p.mapKeys = Nm,
            p.mapValues = Tm,
            p.matches = x0,
            p.matchesProperty = S0,
            p.memoize = uo,
            p.merge = Cm,
            p.mergeWith = Bh,
            p.method = P0,
            p.methodOf = O0,
            p.mixin = oc,
            p.negate = ho,
            p.nthArg = N0,
            p.omit = Am,
            p.omitBy = $m,
            p.once = Rv,
            p.orderBy = pv,
            p.over = T0,
            p.overArgs = Nv,
            p.overEvery = C0,
            p.overSome = A0,
            p.partial = Xa,
            p.partialRight = qh,
            p.partition = dv,
            p.pick = Dm,
            p.pickBy = Fh,
            p.property = Zh,
            p.propertyOf = $0,
            p.pull = py,
            p.pullAll = Sh,
            p.pullAllBy = dy,
            p.pullAllWith = gy,
            p.pullAt = yy,
            p.range = D0,
            p.rangeRight = M0,
            p.rearg = Tv,
            p.reject = vv,
            p.remove = vy,
            p.rest = Cv,
            p.reverse = Ja,
            p.sampleSize = wv,
            p.set = qm,
            p.setWith = jm,
            p.shuffle = bv,
            p.slice = my,
            p.sortBy = Iv,
            p.sortedUniq = Sy,
            p.sortedUniqBy = Py,
            p.split = o0,
            p.spread = Av,
            p.tail = Oy,
            p.take = Ry,
            p.takeRight = Ny,
            p.takeRightWhile = Ty,
            p.takeWhile = Cy,
            p.tap = Fy,
            p.throttle = $v,
            p.thru = oo,
            p.toArray = kh,
            p.toPairs = Wh,
            p.toPairsIn = Gh,
            p.toPath = z0,
            p.toPlainObject = Kh,
            p.transform = Lm,
            p.unary = Dv,
            p.union = Ay,
            p.unionBy = $y,
            p.unionWith = Dy,
            p.uniq = My,
            p.uniqBy = qy,
            p.uniqWith = jy,
            p.unset = Um,
            p.unzip = Qa,
            p.unzipWith = Ph,
            p.update = zm,
            p.updateWith = km,
            p.values = vs,
            p.valuesIn = Hm,
            p.without = Ly,
            p.words = Yh,
            p.wrap = Mv,
            p.xor = Uy,
            p.xorBy = zy,
            p.xorWith = ky,
            p.zip = Hy,
            p.zipObject = Ky,
            p.zipObjectDeep = Vy,
            p.zipWith = By,
            p.entries = Wh,
            p.entriesIn = Gh,
            p.extend = Vh,
            p.extendWith = po,
            oc(p, p),
            p.add = H0,
            p.attempt = Xh,
            p.camelCase = Fm,
            p.capitalize = Jh,
            p.ceil = K0,
            p.clamp = Km,
            p.clone = jv,
            p.cloneDeep = Uv,
            p.cloneDeepWith = zv,
            p.cloneWith = Lv,
            p.conformsTo = kv,
            p.deburr = Qh,
            p.defaultTo = _0,
            p.divide = V0,
            p.endsWith = Wm,
            p.eq = Ur,
            p.escape = Gm,
            p.escapeRegExp = Jm,
            p.every = rv,
            p.find = sv,
            p.findIndex = _h,
            p.findKey = vm,
            p.findLast = nv,
            p.findLastIndex = Eh,
            p.findLastKey = mm,
            p.floor = B0,
            p.forEach = Rh,
            p.forEachRight = Nh,
            p.forIn = wm,
            p.forInRight = bm,
            p.forOwn = _m,
            p.forOwnRight = Em,
            p.get = tc,
            p.gt = Hv,
            p.gte = Kv,
            p.has = Sm,
            p.hasIn = rc,
            p.head = xh,
            p.identity = cr,
            p.includes = hv,
            p.indexOf = ny,
            p.inRange = Vm,
            p.invoke = Rm,
            p.isArguments = Vi,
            p.isArray = he,
            p.isArrayBuffer = Vv,
            p.isArrayLike = or,
            p.isArrayLikeObject = gt,
            p.isBoolean = Bv,
            p.isBuffer = Si,
            p.isDate = Fv,
            p.isElement = Wv,
            p.isEmpty = Gv,
            p.isEqual = Jv,
            p.isEqualWith = Qv,
            p.isError = Za,
            p.isFinite = Yv,
            p.isFunction = oi,
            p.isInteger = jh,
            p.isLength = lo,
            p.isMap = Lh,
            p.isMatch = Xv,
            p.isMatchWith = Zv,
            p.isNaN = em,
            p.isNative = tm,
            p.isNil = im,
            p.isNull = rm,
            p.isNumber = Uh,
            p.isObject = rt,
            p.isObjectLike = lt,
            p.isPlainObject = Bs,
            p.isRegExp = ec,
            p.isSafeInteger = sm,
            p.isSet = zh,
            p.isString = fo,
            p.isSymbol = mr,
            p.isTypedArray = ys,
            p.isUndefined = nm,
            p.isWeakMap = om,
            p.isWeakSet = am,
            p.join = hy,
            p.kebabCase = Qm,
            p.last = Tr,
            p.lastIndexOf = ly,
            p.lowerCase = Ym,
            p.lowerFirst = Xm,
            p.lt = cm,
            p.lte = um,
            p.max = F0,
            p.maxBy = W0,
            p.mean = G0,
            p.meanBy = J0,
            p.min = Q0,
            p.minBy = Y0,
            p.stubArray = cc,
            p.stubFalse = uc,
            p.stubObject = q0,
            p.stubString = j0,
            p.stubTrue = L0,
            p.multiply = X0,
            p.nth = fy,
            p.noConflict = R0,
            p.noop = ac,
            p.now = co,
            p.pad = Zm,
            p.padEnd = e0,
            p.padStart = t0,
            p.parseInt = r0,
            p.random = Bm,
            p.reduce = gv,
            p.reduceRight = yv,
            p.repeat = i0,
            p.replace = s0,
            p.result = Mm,
            p.round = Z0,
            p.runInContext = x,
            p.sample = mv,
            p.size = _v,
            p.snakeCase = n0,
            p.some = Ev,
            p.sortedIndex = wy,
            p.sortedIndexBy = by,
            p.sortedIndexOf = _y,
            p.sortedLastIndex = Ey,
            p.sortedLastIndexBy = Iy,
            p.sortedLastIndexOf = xy,
            p.startCase = a0,
            p.startsWith = c0,
            p.subtract = ew,
            p.sum = tw,
            p.sumBy = rw,
            p.template = u0,
            p.times = U0,
            p.toFinite = ai,
            p.toInteger = fe,
            p.toLength = Hh,
            p.toLower = h0,
            p.toNumber = Cr,
            p.toSafeInteger = hm,
            p.toString = Te,
            p.toUpper = l0,
            p.trim = f0,
            p.trimEnd = p0,
            p.trimStart = d0,
            p.truncate = g0,
            p.unescape = y0,
            p.uniqueId = k0,
            p.upperCase = v0,
            p.upperFirst = ic,
            p.each = Rh,
            p.eachRight = Nh,
            p.first = xh,
            oc(p, function() {
                var e = {};
                return Fr(p, function(i, o) {
                    Ae.call(p.prototype, o) || (e[o] = i)
                }),
                e
            }(), {
                chain: !1
            }),
            p.VERSION = n,
            Sr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                p[e].placeholder = p
            }),
            Sr(["drop", "take"], function(e, i) {
                _e.prototype[e] = function(o) {
                    o = o === r ? 1 : Ct(fe(o), 0);
                    var c = this.__filtered__ && !i ? new _e(this) : this.clone();
                    return c.__filtered__ ? c.__takeCount__ = Ht(o, c.__takeCount__) : c.__views__.push({
                        size: Ht(o, B),
                        type: e + (c.__dir__ < 0 ? "Right" : "")
                    }),
                    c
                }
                ,
                _e.prototype[e + "Right"] = function(o) {
                    return this.reverse()[e](o).reverse()
                }
            }),
            Sr(["filter", "map", "takeWhile"], function(e, i) {
                var o = i + 1
                  , c = o == L || o == We;
                _e.prototype[e] = function(l) {
                    var d = this.clone();
                    return d.__iteratees__.push({
                        iteratee: ee(l, 3),
                        type: o
                    }),
                    d.__filtered__ = d.__filtered__ || c,
                    d
                }
            }),
            Sr(["head", "last"], function(e, i) {
                var o = "take" + (i ? "Right" : "");
                _e.prototype[e] = function() {
                    return this[o](1).value()[0]
                }
            }),
            Sr(["initial", "tail"], function(e, i) {
                var o = "drop" + (i ? "" : "Right");
                _e.prototype[e] = function() {
                    return this.__filtered__ ? new _e(this) : this[o](1)
                }
            }),
            _e.prototype.compact = function() {
                return this.filter(cr)
            }
            ,
            _e.prototype.find = function(e) {
                return this.filter(e).head()
            }
            ,
            _e.prototype.findLast = function(e) {
                return this.reverse().find(e)
            }
            ,
            _e.prototype.invokeMap = ye(function(e, i) {
                return typeof e == "function" ? new _e(this) : this.map(function(o) {
                    return Us(o, e, i)
                })
            }),
            _e.prototype.reject = function(e) {
                return this.filter(ho(ee(e)))
            }
            ,
            _e.prototype.slice = function(e, i) {
                e = fe(e);
                var o = this;
                return o.__filtered__ && (e > 0 || i < 0) ? new _e(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)),
                i !== r && (i = fe(i),
                o = i < 0 ? o.dropRight(-i) : o.take(i - e)),
                o)
            }
            ,
            _e.prototype.takeRightWhile = function(e) {
                return this.reverse().takeWhile(e).reverse()
            }
            ,
            _e.prototype.toArray = function() {
                return this.take(B)
            }
            ,
            Fr(_e.prototype, function(e, i) {
                var o = /^(?:filter|find|map|reject)|While$/.test(i)
                  , c = /^(?:head|last)$/.test(i)
                  , l = p[c ? "take" + (i == "last" ? "Right" : "") : i]
                  , d = c || /^find/.test(i);
                l && (p.prototype[i] = function() {
                    var m = this.__wrapped__
                      , b = c ? [1] : arguments
                      , S = m instanceof _e
                      , $ = b[0]
                      , D = S || he(m)
                      , j = function(ve) {
                        var Ie = l.apply(p, mi([ve], b));
                        return c && K ? Ie[0] : Ie
                    };
                    D && o && typeof $ == "function" && $.length != 1 && (S = D = !1);
                    var K = this.__chain__
                      , Y = !!this.__actions__.length
                      , te = d && !K
                      , de = S && !Y;
                    if (!d && D) {
                        m = de ? m : new _e(this);
                        var re = e.apply(m, b);
                        return re.__actions__.push({
                            func: oo,
                            args: [j],
                            thisArg: r
                        }),
                        new Or(re,K)
                    }
                    return te && de ? e.apply(this, b) : (re = this.thru(j),
                    te ? c ? re.value()[0] : re.value() : re)
                }
                )
            }),
            Sr(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                var i = An[e]
                  , o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                  , c = /^(?:pop|shift)$/.test(e);
                p.prototype[e] = function() {
                    var l = arguments;
                    if (c && !this.__chain__) {
                        var d = this.value();
                        return i.apply(he(d) ? d : [], l)
                    }
                    return this[o](function(m) {
                        return i.apply(he(m) ? m : [], l)
                    })
                }
            }),
            Fr(_e.prototype, function(e, i) {
                var o = p[i];
                if (o) {
                    var c = o.name + "";
                    Ae.call(ls, c) || (ls[c] = []),
                    ls[c].push({
                        name: i,
                        func: o
                    })
                }
            }),
            ls[Zn(r, oe).name] = [{
                name: "wrapper",
                func: r
            }],
            _e.prototype.clone = yd,
            _e.prototype.reverse = vd,
            _e.prototype.value = md,
            p.prototype.at = Wy,
            p.prototype.chain = Gy,
            p.prototype.commit = Jy,
            p.prototype.next = Qy,
            p.prototype.plant = Xy,
            p.prototype.reverse = Zy,
            p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = ev,
            p.prototype.first = p.prototype.head,
            As && (p.prototype[As] = Yy),
            p
        }
          , cs = Jp();
        dt ? ((dt.exports = cs)._ = cs,
        Ue._ = cs) : Ee._ = cs
    }
    ).call(Qs)
}
)(qc, qc.exports);
var Fx = Object.defineProperty
  , Wx = Object.defineProperties
  , Gx = Object.getOwnPropertyDescriptors
  , yf = Object.getOwnPropertySymbols
  , Jx = Object.prototype.hasOwnProperty
  , Qx = Object.prototype.propertyIsEnumerable
  , vf = (s,t,r)=>t in s ? Fx(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , bo = (s,t)=>{
    for (var r in t || (t = {}))
        Jx.call(t, r) && vf(s, r, t[r]);
    if (yf)
        for (var r of yf(t))
            Qx.call(t, r) && vf(s, r, t[r]);
    return s
}
  , Yx = (s,t)=>Wx(s, Gx(t));
function Ri(s, t, r) {
    var n;
    const a = y1(s);
    return ((n = t.rpcMap) == null ? void 0 : n[a.reference]) || `${Bx}?chainId=${a.namespace}:${a.reference}&projectId=${r}`
}
function Yi(s) {
    return s.includes(":") ? s.split(":")[1] : s
}
function xp(s) {
    return s.map(t=>`${t.split(":")[0]}:${t.split(":")[1]}`)
}
function Xx(s, t) {
    const r = Object.keys(t.namespaces).filter(a=>a.includes(s));
    if (!r.length)
        return [];
    const n = [];
    return r.forEach(a=>{
        const h = t.namespaces[a].accounts;
        n.push(...h)
    }
    ),
    n
}
function mf(s={}, t={}) {
    const r = wf(s)
      , n = wf(t);
    return qc.exports.merge(r, n)
}
function wf(s) {
    var t, r, n, a;
    const h = {};
    if (!rn(s))
        return h;
    for (const [f,y] of Object.entries(s)) {
        const w = Jc(f) ? [f] : y.chains
          , v = y.methods || []
          , E = y.events || []
          , P = y.rpcMap || {}
          , C = Ys(f);
        h[C] = Yx(bo(bo({}, h[C]), y), {
            chains: pc(w, (t = h[C]) == null ? void 0 : t.chains),
            methods: pc(v, (r = h[C]) == null ? void 0 : r.methods),
            events: pc(E, (n = h[C]) == null ? void 0 : n.events),
            rpcMap: bo(bo({}, P), (a = h[C]) == null ? void 0 : a.rpcMap)
        })
    }
    return h
}
function Zx(s) {
    return s.includes(":") ? s.split(":")[2] : s
}
function eS(s) {
    const t = {};
    for (const [r,n] of Object.entries(s)) {
        const a = n.methods || []
          , h = n.events || []
          , f = n.accounts || []
          , y = Jc(r) ? [r] : n.chains ? n.chains : xp(n.accounts);
        t[r] = {
            chains: y,
            methods: a,
            events: h,
            accounts: f
        }
    }
    return t
}
function Ic(s) {
    return typeof s == "number" ? s : s.includes("0x") ? parseInt(s, 16) : (s = s.includes(":") ? s.split(":")[1] : s,
    isNaN(Number(s)) ? s : Number(s))
}
const Sp = {}
  , Xe = s=>Sp[s]
  , xc = (s,t)=>{
    Sp[s] = t
}
;
class tS {
    constructor(t) {
        this.name = "polkadot",
        this.namespace = t.namespace,
        this.events = Xe("events"),
        this.client = Xe("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r),
        this.chainId = t,
        this.events.emit(di.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter(r=>r.split(":")[1] === this.chainId.toString()).map(r=>r.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r=>{
            var n;
            const a = Yi(r);
            t[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , r = this.httpProviders[t];
        if (typeof r > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || Ri(t, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new pi(new Ni(n,Xe("disableProviderPing")))
    }
}
class rS {
    constructor(t) {
        this.name = "eip155",
        this.namespace = t.namespace,
        this.events = Xe("events"),
        this.client = Xe("client"),
        this.httpProviders = this.createHttpProviders(),
        this.chainId = parseInt(this.getDefaultChain())
    }
    async request(t) {
        switch (t.request.method) {
        case "eth_requestAccounts":
            return this.getAccounts();
        case "eth_accounts":
            return this.getAccounts();
        case "wallet_switchEthereumChain":
            return await this.handleSwitchChain(t);
        case "eth_chainId":
            return parseInt(this.getDefaultChain())
        }
        return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(parseInt(t), r),
        this.chainId = parseInt(t),
        this.events.emit(di.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId.toString();
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    createHttpProvider(t, r) {
        const n = r || Ri(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new pi(new Ni(n,Xe("disableProviderPing")))
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r=>{
            var n;
            const a = parseInt(Yi(r));
            t[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }
        ),
        t
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r=>r.split(":")[1] === this.chainId.toString()).map(r=>r.split(":")[2]))] : []
    }
    getHttpProvider() {
        const t = this.chainId
          , r = this.httpProviders[t];
        if (typeof r > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    async handleSwitchChain(t) {
        var r, n;
        let a = t.request.params ? (r = t.request.params[0]) == null ? void 0 : r.chainId : "0x0";
        a = a.startsWith("0x") ? a : `0x${a}`;
        const h = parseInt(a, 16);
        if (this.isChainApproved(h))
            this.setDefaultChain(`${h}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
            await this.client.request({
                topic: t.topic,
                request: {
                    method: t.request.method,
                    params: [{
                        chainId: a
                    }]
                },
                chainId: (n = this.namespace.chains) == null ? void 0 : n[0]
            }),
            this.setDefaultChain(`${h}`);
        else
            throw new Error(`Failed to switch to chain 'eip155:${h}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null
    }
    isChainApproved(t) {
        return this.namespace.chains.includes(`${this.name}:${t}`)
    }
}
class iS {
    constructor(t) {
        this.name = "solana",
        this.namespace = t.namespace,
        this.events = Xe("events"),
        this.client = Xe("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r),
        this.chainId = t,
        this.events.emit(di.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r=>r.split(":")[1] === this.chainId.toString()).map(r=>r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r=>{
            var n;
            const a = Yi(r);
            t[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , r = this.httpProviders[t];
        if (typeof r > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || Ri(t, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new pi(new Ni(n,Xe("disableProviderPing")))
    }
}
class sS {
    constructor(t) {
        this.name = "cosmos",
        this.namespace = t.namespace,
        this.events = Xe("events"),
        this.client = Xe("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r),
        this.chainId = t,
        this.events.emit(di.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r=>r.split(":")[1] === this.chainId.toString()).map(r=>r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r=>{
            var n;
            const a = Yi(r);
            t[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , r = this.httpProviders[t];
        if (typeof r > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || Ri(t, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new pi(new Ni(n,Xe("disableProviderPing")))
    }
}
class nS {
    constructor(t) {
        this.name = "cip34",
        this.namespace = t.namespace,
        this.events = Xe("events"),
        this.client = Xe("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r),
        this.chainId = t,
        this.events.emit(di.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r=>r.split(":")[1] === this.chainId.toString()).map(r=>r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r=>{
            const n = this.getCardanoRPCUrl(r)
              , a = Yi(r);
            t[a] = this.createHttpProvider(a, n)
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , r = this.httpProviders[t];
        if (typeof r > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    getCardanoRPCUrl(t) {
        const r = this.namespace.rpcMap;
        if (r)
            return r[t]
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || this.getCardanoRPCUrl(t);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new pi(new Ni(n,Xe("disableProviderPing")))
    }
}
class oS {
    constructor(t) {
        this.name = "elrond",
        this.namespace = t.namespace,
        this.events = Xe("events"),
        this.client = Xe("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r),
        this.chainId = t,
        this.events.emit(di.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r=>r.split(":")[1] === this.chainId.toString()).map(r=>r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r=>{
            var n;
            const a = Yi(r);
            t[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , r = this.httpProviders[t];
        if (typeof r > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || Ri(t, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new pi(new Ni(n,Xe("disableProviderPing")))
    }
}
class aS {
    constructor(t) {
        this.name = "multiversx",
        this.namespace = t.namespace,
        this.events = Xe("events"),
        this.client = Xe("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r),
        this.chainId = t,
        this.events.emit(di.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r=>r.split(":")[1] === this.chainId.toString()).map(r=>r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r=>{
            var n;
            const a = Yi(r);
            t[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , r = this.httpProviders[t];
        if (typeof r > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || Ri(t, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new pi(new Ni(n,Xe("disableProviderPing")))
    }
}
class cS {
    constructor(t) {
        this.name = "near",
        this.namespace = t.namespace,
        this.events = Xe("events"),
        this.client = Xe("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        if (this.chainId = t,
        !this.httpProviders[t]) {
            const n = r || Ri(`${this.name}:${t}`, this.namespace);
            if (!n)
                throw new Error(`No RPC url provided for chainId: ${t}`);
            this.setHttpProvider(t, n)
        }
        this.events.emit(di.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter(r=>r.split(":")[1] === this.chainId.toString()).map(r=>r.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r=>{
            var n;
            t[r] = this.createHttpProvider(r, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , r = this.httpProviders[t];
        if (typeof r > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || Ri(t, this.namespace);
        return typeof n > "u" ? void 0 : new pi(new Ni(n,Xe("disableProviderPing")))
    }
}
var uS = Object.defineProperty
  , hS = Object.defineProperties
  , lS = Object.getOwnPropertyDescriptors
  , bf = Object.getOwnPropertySymbols
  , fS = Object.prototype.hasOwnProperty
  , pS = Object.prototype.propertyIsEnumerable
  , _f = (s,t,r)=>t in s ? uS(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , _o = (s,t)=>{
    for (var r in t || (t = {}))
        fS.call(t, r) && _f(s, r, t[r]);
    if (bf)
        for (var r of bf(t))
            pS.call(t, r) && _f(s, r, t[r]);
    return s
}
  , Sc = (s,t)=>hS(s, lS(t));
class eu {
    constructor(t) {
        this.events = new Uc,
        this.rpcProviders = {},
        this.shouldAbortPairingAttempt = !1,
        this.maxPairingAttempts = 10,
        this.disableProviderPing = !1,
        this.providerOpts = t,
        this.logger = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Ao(Do({
            level: (t == null ? void 0 : t.logger) || df
        })),
        this.disableProviderPing = (t == null ? void 0 : t.disableProviderPing) || !1
    }
    static async init(t) {
        const r = new eu(t);
        return await r.initialize(),
        r
    }
    async request(t, r, n) {
        const [a,h] = this.validateChain(r);
        if (!this.session)
            throw new Error("Please call connect() before request()");
        return await this.getProvider(a).request({
            request: _o({}, t),
            chainId: `${a}:${h}`,
            topic: this.session.topic,
            expiry: n
        })
    }
    sendAsync(t, r, n, a) {
        const h = new Date().getTime();
        this.request(t, n, a).then(f=>r(null, Mo(h, f))).catch(f=>r(f, void 0))
    }
    async enable() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }),
        await this.requestAccounts()
    }
    async disconnect() {
        var t;
        if (!this.session)
            throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (t = this.session) == null ? void 0 : t.topic,
            reason: Ye("USER_DISCONNECTED")
        }),
        await this.cleanup()
    }
    async connect(t) {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (this.setNamespaces(t),
        await this.cleanupPendingPairings(),
        !t.skipPairing)
            return await this.pair(t.pairingTopic)
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(t) {
        this.shouldAbortPairingAttempt = !1;
        let r = 0;
        do {
            if (this.shouldAbortPairingAttempt)
                throw new Error("Pairing aborted");
            if (r >= this.maxPairingAttempts)
                throw new Error("Max auto pairing attempts reached");
            const {uri: n, approval: a} = await this.client.connect({
                pairingTopic: t,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            n && (this.uri = n,
            this.events.emit("display_uri", n)),
            await a().then(h=>{
                this.session = h;
                const f = eS(h.namespaces);
                this.namespaces = mf(this.namespaces, f),
                this.persist("namespaces", this.namespaces)
            }
            ).catch(h=>{
                if (h.message !== Ep)
                    throw h;
                r++
            }
            )
        } while (!this.session);
        return this.onConnect(),
        this.session
    }
    setDefaultChain(t, r) {
        try {
            if (!this.session)
                return;
            const [n,a] = this.validateChain(t);
            this.getProvider(n).setDefaultChain(a, r)
        } catch (n) {
            if (!/Please call connect/.test(n.message))
                throw n
        }
    }
    async cleanupPendingPairings(t={}) {
        this.logger.info("Cleaning up inactive pairings...");
        const r = this.client.pairing.getAll();
        if (Qr(r)) {
            for (const n of r)
                t.deletePairings ? this.client.core.expirer.set(n.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
            this.logger.info(`Inactive pairings cleared: ${r.length}`)
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"),
        this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {},
        this.client.session.length) {
            const t = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[t]),
            this.createProviders()
        }
    }
    async initialize() {
        this.logger.trace("Initialized"),
        await this.createClient(),
        await this.checkStorage(),
        this.registerEventListeners()
    }
    async createClient() {
        this.client = this.providerOpts.client || await kx.init({
            logger: this.providerOpts.logger || df,
            relayUrl: this.providerOpts.relayUrl || Hx,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name
        }),
        this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (!this.session)
            throw new Error("Session not initialized. Please call connect() before enable()");
        const t = [...new Set(Object.keys(this.session.namespaces).map(r=>Ys(r)))];
        xc("client", this.client),
        xc("events", this.events),
        xc("disableProviderPing", this.disableProviderPing),
        t.forEach(r=>{
            if (!this.session)
                return;
            const n = Xx(r, this.session)
              , a = xp(n)
              , h = mf(this.namespaces, this.optionalNamespaces)
              , f = Sc(_o({}, h[r]), {
                accounts: n,
                chains: a
            });
            switch (r) {
            case "eip155":
                this.rpcProviders[r] = new rS({
                    namespace: f
                });
                break;
            case "solana":
                this.rpcProviders[r] = new iS({
                    namespace: f
                });
                break;
            case "cosmos":
                this.rpcProviders[r] = new sS({
                    namespace: f
                });
                break;
            case "polkadot":
                this.rpcProviders[r] = new tS({
                    namespace: f
                });
                break;
            case "cip34":
                this.rpcProviders[r] = new nS({
                    namespace: f
                });
                break;
            case "elrond":
                this.rpcProviders[r] = new oS({
                    namespace: f
                });
                break;
            case "multiversx":
                this.rpcProviders[r] = new aS({
                    namespace: f
                });
                break;
            case "near":
                this.rpcProviders[r] = new cS({
                    namespace: f
                });
                break
            }
        }
        )
    }
    registerEventListeners() {
        if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", t=>{
            this.events.emit("session_ping", t)
        }
        ),
        this.client.on("session_event", t=>{
            const {params: r} = t
              , {event: n} = r;
            if (n.name === "accountsChanged") {
                const a = n.data;
                a && Qr(a) && this.events.emit("accountsChanged", a.map(Zx))
            } else if (n.name === "chainChanged") {
                const a = r.chainId
                  , h = r.event.data
                  , f = Ys(a)
                  , y = Ic(a) !== Ic(h) ? `${f}:${Ic(h)}` : a;
                this.onChainChanged(y)
            } else
                this.events.emit(n.name, n.data);
            this.events.emit("session_event", t)
        }
        ),
        this.client.on("session_update", ({topic: t, params: r})=>{
            var n;
            const {namespaces: a} = r
              , h = (n = this.client) == null ? void 0 : n.session.get(t);
            this.session = Sc(_o({}, h), {
                namespaces: a
            }),
            this.onSessionUpdate(),
            this.events.emit("session_update", {
                topic: t,
                params: r
            })
        }
        ),
        this.client.on("session_delete", async t=>{
            await this.cleanup(),
            this.events.emit("session_delete", t),
            this.events.emit("disconnect", Sc(_o({}, Ye("USER_DISCONNECTED")), {
                data: t.topic
            }))
        }
        ),
        this.on(di.DEFAULT_CHAIN_CHANGED, t=>{
            this.onChainChanged(t, !0)
        }
        )
    }
    getProvider(t) {
        if (!this.rpcProviders[t])
            throw new Error(`Provider not found: ${t}`);
        return this.rpcProviders[t]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(t=>{
            var r;
            this.getProvider(t).updateNamespace((r = this.session) == null ? void 0 : r.namespaces[t])
        }
        )
    }
    setNamespaces(t) {
        const {namespaces: r, optionalNamespaces: n, sessionProperties: a} = t;
        r && Object.keys(r).length && (this.namespaces = r),
        n && Object.keys(n).length && (this.optionalNamespaces = n),
        this.sessionProperties = a,
        this.persist("namespaces", r),
        this.persist("optionalNamespaces", n)
    }
    validateChain(t) {
        const [r,n] = (t == null ? void 0 : t.split(":")) || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [r, n];
        if (r && !Object.keys(this.namespaces || {}).map(f=>Ys(f)).includes(r))
            throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);
        if (r && n)
            return [r, n];
        const a = Ys(Object.keys(this.namespaces)[0])
          , h = this.rpcProviders[a].getDefaultChain();
        return [a, h]
    }
    async requestAccounts() {
        const [t] = this.validateChain();
        return await this.getProvider(t).requestAccounts()
    }
    onChainChanged(t, r=!1) {
        if (!this.namespaces)
            return;
        const [n,a] = this.validateChain(t);
        a && (r || this.getProvider(n).setDefaultChain(a),
        this.namespaces[n] ? this.namespaces[n].defaultChain = a : this.namespaces[`${n}:${a}`] ? this.namespaces[`${n}:${a}`].defaultChain = a : this.namespaces[`${n}:${a}`] = {
            defaultChain: a
        },
        this.persist("namespaces", this.namespaces),
        this.events.emit("chainChanged", a))
    }
    onConnect() {
        this.createProviders(),
        this.events.emit("connect", {
            session: this.session
        })
    }
    async cleanup() {
        this.session = void 0,
        this.namespaces = void 0,
        this.optionalNamespaces = void 0,
        this.sessionProperties = void 0,
        this.persist("namespaces", void 0),
        this.persist("optionalNamespaces", void 0),
        this.persist("sessionProperties", void 0),
        await this.cleanupPendingPairings({
            deletePairings: !0
        })
    }
    persist(t, r) {
        this.client.core.storage.setItem(`${gf}/${t}`, r)
    }
    async getFromStore(t) {
        return await this.client.core.storage.getItem(`${gf}/${t}`)
    }
}
const dS = eu
  , gS = "wc"
  , yS = "ethereum_provider"
  , vS = `${gS}@2:${yS}:`
  , mS = "https://rpc.walletconnect.com/v1/"
  , jc = ["eth_sendTransaction", "personal_sign"]
  , wS = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"]
  , Lc = ["chainChanged", "accountsChanged"]
  , bS = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var _S = Object.defineProperty
  , ES = Object.defineProperties
  , IS = Object.getOwnPropertyDescriptors
  , Ef = Object.getOwnPropertySymbols
  , xS = Object.prototype.hasOwnProperty
  , SS = Object.prototype.propertyIsEnumerable
  , If = (s,t,r)=>t in s ? _S(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : s[t] = r
  , Zs = (s,t)=>{
    for (var r in t || (t = {}))
        xS.call(t, r) && If(s, r, t[r]);
    if (Ef)
        for (var r of Ef(t))
            SS.call(t, r) && If(s, r, t[r]);
    return s
}
  , xf = (s,t)=>ES(s, IS(t));
function To(s) {
    return Number(s[0].split(":")[1])
}
function Pc(s) {
    return `0x${s.toString(16)}`
}
function PS(s) {
    const {chains: t, optionalChains: r, methods: n, optionalMethods: a, events: h, optionalEvents: f, rpcMap: y} = s;
    if (!Qr(t))
        throw new Error("Invalid chains");
    const w = {
        chains: t,
        methods: n || jc,
        events: h || Lc,
        rpcMap: Zs({}, t.length ? {
            [To(t)]: y[To(t)]
        } : {})
    }
      , v = h == null ? void 0 : h.filter(z=>!Lc.includes(z))
      , E = n == null ? void 0 : n.filter(z=>!jc.includes(z));
    if (!r && !f && !a && !(v != null && v.length) && !(E != null && E.length))
        return {
            required: t.length ? w : void 0
        };
    const P = (v == null ? void 0 : v.length) && (E == null ? void 0 : E.length) || !r
      , C = {
        chains: [...new Set(P ? w.chains.concat(r || []) : r)],
        methods: [...new Set(w.methods.concat(a != null && a.length ? a : wS))],
        events: [...new Set(w.events.concat(f != null && f.length ? f : bS))],
        rpcMap: y
    };
    return {
        required: t.length ? w : void 0,
        optional: r.length ? C : void 0
    }
}
class tu {
    constructor() {
        this.events = new $r.EventEmitter,
        this.namespace = "eip155",
        this.accounts = [],
        this.chainId = 1,
        this.STORAGE_KEY = vS,
        this.on = (t,r)=>(this.events.on(t, r),
        this),
        this.once = (t,r)=>(this.events.once(t, r),
        this),
        this.removeListener = (t,r)=>(this.events.removeListener(t, r),
        this),
        this.off = (t,r)=>(this.events.off(t, r),
        this),
        this.parseAccount = t=>this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t,
        this.signer = {},
        this.rpc = {}
    }
    static async init(t) {
        const r = new tu;
        return await r.initialize(t),
        r
    }
    async request(t, r) {
        return await this.signer.request(t, this.formatChainId(this.chainId), r)
    }
    sendAsync(t, r, n) {
        this.signer.sendAsync(t, r, this.formatChainId(this.chainId), n)
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1
    }
    async enable() {
        return this.session || await this.connect(),
        await this.request({
            method: "eth_requestAccounts"
        })
    }
    async connect(t) {
        if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(t);
        const {required: r, optional: n} = PS(this.rpc);
        try {
            const a = await new Promise(async(f,y)=>{
                var w;
                this.rpc.showQrModal && ((w = this.modal) == null || w.subscribeModal(v=>{
                    !v.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                    y(new Error("Connection request reset. Please try again.")))
                }
                )),
                await this.signer.connect(xf(Zs({
                    namespaces: Zs({}, r && {
                        [this.namespace]: r
                    })
                }, n && {
                    optionalNamespaces: {
                        [this.namespace]: n
                    }
                }), {
                    pairingTopic: t == null ? void 0 : t.pairingTopic
                })).then(v=>{
                    f(v)
                }
                ).catch(v=>{
                    y(new Error(v.message))
                }
                )
            }
            );
            if (!a)
                return;
            const h = v1(a.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : h),
            this.setAccounts(h),
            this.events.emit("connect", {
                chainId: Pc(this.chainId)
            })
        } catch (a) {
            throw this.signer.logger.error(a),
            a
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(),
        this.reset()
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", t=>{
            const {params: r} = t
              , {event: n} = r;
            n.name === "accountsChanged" ? (this.accounts = this.parseAccounts(n.data),
            this.events.emit("accountsChanged", this.accounts)) : n.name === "chainChanged" ? this.setChainId(this.formatChainId(n.data)) : this.events.emit(n.name, n.data),
            this.events.emit("session_event", t)
        }
        ),
        this.signer.on("chainChanged", t=>{
            const r = parseInt(t);
            this.chainId = r,
            this.events.emit("chainChanged", Pc(this.chainId)),
            this.persist()
        }
        ),
        this.signer.on("session_update", t=>{
            this.events.emit("session_update", t)
        }
        ),
        this.signer.on("session_delete", t=>{
            this.reset(),
            this.events.emit("session_delete", t),
            this.events.emit("disconnect", xf(Zs({}, Ye("USER_DISCONNECTED")), {
                data: t.topic,
                name: "USER_DISCONNECTED"
            }))
        }
        ),
        this.signer.on("display_uri", t=>{
            var r, n;
            this.rpc.showQrModal && ((r = this.modal) == null || r.closeModal(),
            (n = this.modal) == null || n.openModal({
                uri: t
            })),
            this.events.emit("display_uri", t)
        }
        )
    }
    switchEthereumChain(t) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: t.toString(16)
            }]
        })
    }
    isCompatibleChainId(t) {
        return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1
    }
    formatChainId(t) {
        return `${this.namespace}:${t}`
    }
    parseChainId(t) {
        return Number(t.split(":")[1])
    }
    setChainIds(t) {
        const r = t.filter(n=>this.isCompatibleChainId(n)).map(n=>this.parseChainId(n));
        r.length && (this.chainId = r[0],
        this.events.emit("chainChanged", Pc(this.chainId)),
        this.persist())
    }
    setChainId(t) {
        if (this.isCompatibleChainId(t)) {
            const r = this.parseChainId(t);
            this.chainId = r,
            this.switchEthereumChain(r)
        }
    }
    parseAccountId(t) {
        const [r,n,a] = t.split(":");
        return {
            chainId: `${r}:${n}`,
            address: a
        }
    }
    setAccounts(t) {
        this.accounts = t.filter(r=>this.parseChainId(this.parseAccountId(r).chainId) === this.chainId).map(r=>this.parseAccountId(r).address),
        this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(t) {
        var r, n;
        const a = (r = t == null ? void 0 : t.chains) != null ? r : []
          , h = (n = t == null ? void 0 : t.optionalChains) != null ? n : []
          , f = a.concat(h);
        if (!f.length)
            throw new Error("No chains specified in either `chains` or `optionalChains`");
        const y = a.length ? (t == null ? void 0 : t.methods) || jc : []
          , w = a.length ? (t == null ? void 0 : t.events) || Lc : []
          , v = (t == null ? void 0 : t.optionalMethods) || []
          , E = (t == null ? void 0 : t.optionalEvents) || []
          , P = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(f, t.projectId)
          , C = (t == null ? void 0 : t.qrModalOptions) || void 0;
        return {
            chains: a == null ? void 0 : a.map(z=>this.formatChainId(z)),
            optionalChains: h.map(z=>this.formatChainId(z)),
            methods: y,
            events: w,
            optionalMethods: v,
            optionalEvents: E,
            rpcMap: P,
            showQrModal: !!(t != null && t.showQrModal),
            qrModalOptions: C,
            projectId: t.projectId,
            metadata: t.metadata
        }
    }
    buildRpcMap(t, r) {
        const n = {};
        return t.forEach(a=>{
            n[a] = this.getRpcUrl(a, r)
        }
        ),
        n
    }
    async initialize(t) {
        if (this.rpc = this.getRpcConfig(t),
        this.chainId = this.rpc.chains.length ? To(this.rpc.chains) : To(this.rpc.optionalChains),
        this.signer = await dS.init({
            projectId: this.rpc.projectId,
            metadata: this.rpc.metadata,
            disableProviderPing: t.disableProviderPing,
            relayUrl: t.relayUrl,
            storageOptions: t.storageOptions
        }),
        this.registerEventListeners(),
        await this.loadPersistedSession(),
        this.rpc.showQrModal) {
            let r;
            try {
                const {WalletConnectModal: n} = await sw(()=>import("./index-CQaM2H4M.js").then(a=>a.i), __vite__mapDeps([0, 1, 2]));
                r = n
            } catch {
                throw new Error("To use QR modal, please install @walletconnect/modal package")
            }
            if (r)
                try {
                    this.modal = new r(Zs({
                        projectId: this.rpc.projectId
                    }, this.rpc.qrModalOptions))
                } catch (n) {
                    throw this.signer.logger.error(n),
                    new Error("Could not generate WalletConnectModal Instance")
                }
        }
    }
    loadConnectOpts(t) {
        if (!t)
            return;
        const {chains: r, optionalChains: n, rpcMap: a} = t;
        r && Qr(r) && (this.rpc.chains = r.map(h=>this.formatChainId(h)),
        r.forEach(h=>{
            this.rpc.rpcMap[h] = (a == null ? void 0 : a[h]) || this.getRpcUrl(h)
        }
        )),
        n && Qr(n) && (this.rpc.optionalChains = [],
        this.rpc.optionalChains = n == null ? void 0 : n.map(h=>this.formatChainId(h)),
        n.forEach(h=>{
            this.rpc.rpcMap[h] = (a == null ? void 0 : a[h]) || this.getRpcUrl(h)
        }
        ))
    }
    getRpcUrl(t, r) {
        var n;
        return ((n = this.rpc.rpcMap) == null ? void 0 : n[t]) || `${mS}?chainId=eip155:${t}&projectId=${r || this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (!this.session)
            return;
        const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`)
          , r = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
        this.setChainIds(t ? [this.formatChainId(t)] : r == null ? void 0 : r.accounts),
        this.setAccounts(r == null ? void 0 : r.accounts)
    }
    reset() {
        this.chainId = 1,
        this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(t) {
        return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map(r=>this.parseAccount(r))
    }
}
const BS = tu;
export {BS as EthereumProvider, bS as OPTIONAL_EVENTS, wS as OPTIONAL_METHODS, Lc as REQUIRED_EVENTS, jc as REQUIRED_METHODS, tu as default};
