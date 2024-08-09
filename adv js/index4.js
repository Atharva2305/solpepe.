import {l as La, h as J, j as gn, m as Bi, f as Fn, i as dd} from "./index-BwO_io0Y.js";
import {r as jo} from "./___vite-browser-external_commonjs-proxy-B5-HO_on.js";
function fd(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const i in n)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(n, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: ()=>n[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
const pd = Object.freeze(Object.defineProperty({
    __proto__: null,
    EventEmitter: La,
    default: La
}, Symbol.toStringTag, {
    value: "Module"
}));
var Ho = {}
  , On = {}
  , Di = {};
Object.defineProperty(Di, "__esModule", {
    value: !0
});
Di.walletLogo = void 0;
const gd = (e,t)=>{
    let r;
    switch (e) {
    case "standard":
        return r = t,
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    case "circle":
        return r = t,
        `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
    case "text":
        return r = (.1 * t).toFixed(2),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogo":
        return r = (.25 * t).toFixed(2),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    case "textLight":
        return r = (.1 * t).toFixed(2),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogoLight":
        return r = (.25 * t).toFixed(2),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    default:
        return r = t,
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
    }
}
;
Di.walletLogo = gd;
var Fi = {};
Object.defineProperty(Fi, "__esModule", {
    value: !0
});
Fi.LINK_API_URL = void 0;
Fi.LINK_API_URL = "https://www.walletlink.org";
var z = {}
  , Uo = {
    exports: {}
};
Uo.exports;
(function(e) {
    (function(t, r) {
        function n(v, a) {
            if (!v)
                throw new Error(a || "Assertion failed")
        }
        function i(v, a) {
            v.super_ = a;
            var d = function() {};
            d.prototype = a.prototype,
            v.prototype = new d,
            v.prototype.constructor = v
        }
        function s(v, a, d) {
            if (s.isBN(v))
                return v;
            this.negative = 0,
            this.words = null,
            this.length = 0,
            this.red = null,
            v !== null && ((a === "le" || a === "be") && (d = a,
            a = 10),
            this._init(v || 0, a || 10, d || "be"))
        }
        typeof t == "object" ? t.exports = s : r.BN = s,
        s.BN = s,
        s.wordSize = 26;
        var o;
        try {
            typeof window < "u" && typeof window.Buffer < "u" ? o = window.Buffer : o = jo.Buffer
        } catch {}
        s.isBN = function(a) {
            return a instanceof s ? !0 : a !== null && typeof a == "object" && a.constructor.wordSize === s.wordSize && Array.isArray(a.words)
        }
        ,
        s.max = function(a, d) {
            return a.cmp(d) > 0 ? a : d
        }
        ,
        s.min = function(a, d) {
            return a.cmp(d) < 0 ? a : d
        }
        ,
        s.prototype._init = function(a, d, g) {
            if (typeof a == "number")
                return this._initNumber(a, d, g);
            if (typeof a == "object")
                return this._initArray(a, d, g);
            d === "hex" && (d = 16),
            n(d === (d | 0) && d >= 2 && d <= 36),
            a = a.toString().replace(/\s+/g, "");
            var m = 0;
            a[0] === "-" && (m++,
            this.negative = 1),
            m < a.length && (d === 16 ? this._parseHex(a, m, g) : (this._parseBase(a, d, m),
            g === "le" && this._initArray(this.toArray(), d, g)))
        }
        ,
        s.prototype._initNumber = function(a, d, g) {
            a < 0 && (this.negative = 1,
            a = -a),
            a < 67108864 ? (this.words = [a & 67108863],
            this.length = 1) : a < 4503599627370496 ? (this.words = [a & 67108863, a / 67108864 & 67108863],
            this.length = 2) : (n(a < 9007199254740992),
            this.words = [a & 67108863, a / 67108864 & 67108863, 1],
            this.length = 3),
            g === "le" && this._initArray(this.toArray(), d, g)
        }
        ,
        s.prototype._initArray = function(a, d, g) {
            if (n(typeof a.length == "number"),
            a.length <= 0)
                return this.words = [0],
                this.length = 1,
                this;
            this.length = Math.ceil(a.length / 3),
            this.words = new Array(this.length);
            for (var m = 0; m < this.length; m++)
                this.words[m] = 0;
            var y, C, A = 0;
            if (g === "be")
                for (m = a.length - 1,
                y = 0; m >= 0; m -= 3)
                    C = a[m] | a[m - 1] << 8 | a[m - 2] << 16,
                    this.words[y] |= C << A & 67108863,
                    this.words[y + 1] = C >>> 26 - A & 67108863,
                    A += 24,
                    A >= 26 && (A -= 26,
                    y++);
            else if (g === "le")
                for (m = 0,
                y = 0; m < a.length; m += 3)
                    C = a[m] | a[m + 1] << 8 | a[m + 2] << 16,
                    this.words[y] |= C << A & 67108863,
                    this.words[y + 1] = C >>> 26 - A & 67108863,
                    A += 24,
                    A >= 26 && (A -= 26,
                    y++);
            return this._strip()
        }
        ;
        function c(v, a) {
            var d = v.charCodeAt(a);
            if (d >= 48 && d <= 57)
                return d - 48;
            if (d >= 65 && d <= 70)
                return d - 55;
            if (d >= 97 && d <= 102)
                return d - 87;
            n(!1, "Invalid character in " + v)
        }
        function l(v, a, d) {
            var g = c(v, d);
            return d - 1 >= a && (g |= c(v, d - 1) << 4),
            g
        }
        s.prototype._parseHex = function(a, d, g) {
            this.length = Math.ceil((a.length - d) / 6),
            this.words = new Array(this.length);
            for (var m = 0; m < this.length; m++)
                this.words[m] = 0;
            var y = 0, C = 0, A;
            if (g === "be")
                for (m = a.length - 1; m >= d; m -= 2)
                    A = l(a, d, m) << y,
                    this.words[C] |= A & 67108863,
                    y >= 18 ? (y -= 18,
                    C += 1,
                    this.words[C] |= A >>> 26) : y += 8;
            else {
                var b = a.length - d;
                for (m = b % 2 === 0 ? d + 1 : d; m < a.length; m += 2)
                    A = l(a, d, m) << y,
                    this.words[C] |= A & 67108863,
                    y >= 18 ? (y -= 18,
                    C += 1,
                    this.words[C] |= A >>> 26) : y += 8
            }
            this._strip()
        }
        ;
        function u(v, a, d, g) {
            for (var m = 0, y = 0, C = Math.min(v.length, d), A = a; A < C; A++) {
                var b = v.charCodeAt(A) - 48;
                m *= g,
                b >= 49 ? y = b - 49 + 10 : b >= 17 ? y = b - 17 + 10 : y = b,
                n(b >= 0 && y < g, "Invalid character"),
                m += y
            }
            return m
        }
        s.prototype._parseBase = function(a, d, g) {
            this.words = [0],
            this.length = 1;
            for (var m = 0, y = 1; y <= 67108863; y *= d)
                m++;
            m--,
            y = y / d | 0;
            for (var C = a.length - g, A = C % m, b = Math.min(C, C - A) + g, h = 0, S = g; S < b; S += m)
                h = u(a, S, S + m, d),
                this.imuln(y),
                this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
            if (A !== 0) {
                var W = 1;
                for (h = u(a, S, a.length, d),
                S = 0; S < A; S++)
                    W *= d;
                this.imuln(W),
                this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
            }
            this._strip()
        }
        ,
        s.prototype.copy = function(a) {
            a.words = new Array(this.length);
            for (var d = 0; d < this.length; d++)
                a.words[d] = this.words[d];
            a.length = this.length,
            a.negative = this.negative,
            a.red = this.red
        }
        ;
        function p(v, a) {
            v.words = a.words,
            v.length = a.length,
            v.negative = a.negative,
            v.red = a.red
        }
        if (s.prototype._move = function(a) {
            p(a, this)
        }
        ,
        s.prototype.clone = function() {
            var a = new s(null);
            return this.copy(a),
            a
        }
        ,
        s.prototype._expand = function(a) {
            for (; this.length < a; )
                this.words[this.length++] = 0;
            return this
        }
        ,
        s.prototype._strip = function() {
            for (; this.length > 1 && this.words[this.length - 1] === 0; )
                this.length--;
            return this._normSign()
        }
        ,
        s.prototype._normSign = function() {
            return this.length === 1 && this.words[0] === 0 && (this.negative = 0),
            this
        }
        ,
        typeof Symbol < "u" && typeof Symbol.for == "function")
            try {
                s.prototype[Symbol.for("nodejs.util.inspect.custom")] = f
            } catch {
                s.prototype.inspect = f
            }
        else
            s.prototype.inspect = f;
        function f() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        }
        var _ = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
          , R = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
          , x = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
        s.prototype.toString = function(a, d) {
            a = a || 10,
            d = d | 0 || 1;
            var g;
            if (a === 16 || a === "hex") {
                g = "";
                for (var m = 0, y = 0, C = 0; C < this.length; C++) {
                    var A = this.words[C]
                      , b = ((A << m | y) & 16777215).toString(16);
                    y = A >>> 24 - m & 16777215,
                    m += 2,
                    m >= 26 && (m -= 26,
                    C--),
                    y !== 0 || C !== this.length - 1 ? g = _[6 - b.length] + b + g : g = b + g
                }
                for (y !== 0 && (g = y.toString(16) + g); g.length % d !== 0; )
                    g = "0" + g;
                return this.negative !== 0 && (g = "-" + g),
                g
            }
            if (a === (a | 0) && a >= 2 && a <= 36) {
                var h = R[a]
                  , S = x[a];
                g = "";
                var W = this.clone();
                for (W.negative = 0; !W.isZero(); ) {
                    var q = W.modrn(S).toString(a);
                    W = W.idivn(S),
                    W.isZero() ? g = q + g : g = _[h - q.length] + q + g
                }
                for (this.isZero() && (g = "0" + g); g.length % d !== 0; )
                    g = "0" + g;
                return this.negative !== 0 && (g = "-" + g),
                g
            }
            n(!1, "Base should be between 2 and 36")
        }
        ,
        s.prototype.toNumber = function() {
            var a = this.words[0];
            return this.length === 2 ? a += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? a += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
            this.negative !== 0 ? -a : a
        }
        ,
        s.prototype.toJSON = function() {
            return this.toString(16, 2)
        }
        ,
        o && (s.prototype.toBuffer = function(a, d) {
            return this.toArrayLike(o, a, d)
        }
        ),
        s.prototype.toArray = function(a, d) {
            return this.toArrayLike(Array, a, d)
        }
        ;
        var P = function(a, d) {
            return a.allocUnsafe ? a.allocUnsafe(d) : new a(d)
        };
        s.prototype.toArrayLike = function(a, d, g) {
            this._strip();
            var m = this.byteLength()
              , y = g || Math.max(1, m);
            n(m <= y, "byte array longer than desired length"),
            n(y > 0, "Requested array length <= 0");
            var C = P(a, y)
              , A = d === "le" ? "LE" : "BE";
            return this["_toArrayLike" + A](C, m),
            C
        }
        ,
        s.prototype._toArrayLikeLE = function(a, d) {
            for (var g = 0, m = 0, y = 0, C = 0; y < this.length; y++) {
                var A = this.words[y] << C | m;
                a[g++] = A & 255,
                g < a.length && (a[g++] = A >> 8 & 255),
                g < a.length && (a[g++] = A >> 16 & 255),
                C === 6 ? (g < a.length && (a[g++] = A >> 24 & 255),
                m = 0,
                C = 0) : (m = A >>> 24,
                C += 2)
            }
            if (g < a.length)
                for (a[g++] = m; g < a.length; )
                    a[g++] = 0
        }
        ,
        s.prototype._toArrayLikeBE = function(a, d) {
            for (var g = a.length - 1, m = 0, y = 0, C = 0; y < this.length; y++) {
                var A = this.words[y] << C | m;
                a[g--] = A & 255,
                g >= 0 && (a[g--] = A >> 8 & 255),
                g >= 0 && (a[g--] = A >> 16 & 255),
                C === 6 ? (g >= 0 && (a[g--] = A >> 24 & 255),
                m = 0,
                C = 0) : (m = A >>> 24,
                C += 2)
            }
            if (g >= 0)
                for (a[g--] = m; g >= 0; )
                    a[g--] = 0
        }
        ,
        Math.clz32 ? s.prototype._countBits = function(a) {
            return 32 - Math.clz32(a)
        }
        : s.prototype._countBits = function(a) {
            var d = a
              , g = 0;
            return d >= 4096 && (g += 13,
            d >>>= 13),
            d >= 64 && (g += 7,
            d >>>= 7),
            d >= 8 && (g += 4,
            d >>>= 4),
            d >= 2 && (g += 2,
            d >>>= 2),
            g + d
        }
        ,
        s.prototype._zeroBits = function(a) {
            if (a === 0)
                return 26;
            var d = a
              , g = 0;
            return d & 8191 || (g += 13,
            d >>>= 13),
            d & 127 || (g += 7,
            d >>>= 7),
            d & 15 || (g += 4,
            d >>>= 4),
            d & 3 || (g += 2,
            d >>>= 2),
            d & 1 || g++,
            g
        }
        ,
        s.prototype.bitLength = function() {
            var a = this.words[this.length - 1]
              , d = this._countBits(a);
            return (this.length - 1) * 26 + d
        }
        ;
        function L(v) {
            for (var a = new Array(v.bitLength()), d = 0; d < a.length; d++) {
                var g = d / 26 | 0
                  , m = d % 26;
                a[d] = v.words[g] >>> m & 1
            }
            return a
        }
        s.prototype.zeroBits = function() {
            if (this.isZero())
                return 0;
            for (var a = 0, d = 0; d < this.length; d++) {
                var g = this._zeroBits(this.words[d]);
                if (a += g,
                g !== 26)
                    break
            }
            return a
        }
        ,
        s.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
        }
        ,
        s.prototype.toTwos = function(a) {
            return this.negative !== 0 ? this.abs().inotn(a).iaddn(1) : this.clone()
        }
        ,
        s.prototype.fromTwos = function(a) {
            return this.testn(a - 1) ? this.notn(a).iaddn(1).ineg() : this.clone()
        }
        ,
        s.prototype.isNeg = function() {
            return this.negative !== 0
        }
        ,
        s.prototype.neg = function() {
            return this.clone().ineg()
        }
        ,
        s.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1),
            this
        }
        ,
        s.prototype.iuor = function(a) {
            for (; this.length < a.length; )
                this.words[this.length++] = 0;
            for (var d = 0; d < a.length; d++)
                this.words[d] = this.words[d] | a.words[d];
            return this._strip()
        }
        ,
        s.prototype.ior = function(a) {
            return n((this.negative | a.negative) === 0),
            this.iuor(a)
        }
        ,
        s.prototype.or = function(a) {
            return this.length > a.length ? this.clone().ior(a) : a.clone().ior(this)
        }
        ,
        s.prototype.uor = function(a) {
            return this.length > a.length ? this.clone().iuor(a) : a.clone().iuor(this)
        }
        ,
        s.prototype.iuand = function(a) {
            var d;
            this.length > a.length ? d = a : d = this;
            for (var g = 0; g < d.length; g++)
                this.words[g] = this.words[g] & a.words[g];
            return this.length = d.length,
            this._strip()
        }
        ,
        s.prototype.iand = function(a) {
            return n((this.negative | a.negative) === 0),
            this.iuand(a)
        }
        ,
        s.prototype.and = function(a) {
            return this.length > a.length ? this.clone().iand(a) : a.clone().iand(this)
        }
        ,
        s.prototype.uand = function(a) {
            return this.length > a.length ? this.clone().iuand(a) : a.clone().iuand(this)
        }
        ,
        s.prototype.iuxor = function(a) {
            var d, g;
            this.length > a.length ? (d = this,
            g = a) : (d = a,
            g = this);
            for (var m = 0; m < g.length; m++)
                this.words[m] = d.words[m] ^ g.words[m];
            if (this !== d)
                for (; m < d.length; m++)
                    this.words[m] = d.words[m];
            return this.length = d.length,
            this._strip()
        }
        ,
        s.prototype.ixor = function(a) {
            return n((this.negative | a.negative) === 0),
            this.iuxor(a)
        }
        ,
        s.prototype.xor = function(a) {
            return this.length > a.length ? this.clone().ixor(a) : a.clone().ixor(this)
        }
        ,
        s.prototype.uxor = function(a) {
            return this.length > a.length ? this.clone().iuxor(a) : a.clone().iuxor(this)
        }
        ,
        s.prototype.inotn = function(a) {
            n(typeof a == "number" && a >= 0);
            var d = Math.ceil(a / 26) | 0
              , g = a % 26;
            this._expand(d),
            g > 0 && d--;
            for (var m = 0; m < d; m++)
                this.words[m] = ~this.words[m] & 67108863;
            return g > 0 && (this.words[m] = ~this.words[m] & 67108863 >> 26 - g),
            this._strip()
        }
        ,
        s.prototype.notn = function(a) {
            return this.clone().inotn(a)
        }
        ,
        s.prototype.setn = function(a, d) {
            n(typeof a == "number" && a >= 0);
            var g = a / 26 | 0
              , m = a % 26;
            return this._expand(g + 1),
            d ? this.words[g] = this.words[g] | 1 << m : this.words[g] = this.words[g] & ~(1 << m),
            this._strip()
        }
        ,
        s.prototype.iadd = function(a) {
            var d;
            if (this.negative !== 0 && a.negative === 0)
                return this.negative = 0,
                d = this.isub(a),
                this.negative ^= 1,
                this._normSign();
            if (this.negative === 0 && a.negative !== 0)
                return a.negative = 0,
                d = this.isub(a),
                a.negative = 1,
                d._normSign();
            var g, m;
            this.length > a.length ? (g = this,
            m = a) : (g = a,
            m = this);
            for (var y = 0, C = 0; C < m.length; C++)
                d = (g.words[C] | 0) + (m.words[C] | 0) + y,
                this.words[C] = d & 67108863,
                y = d >>> 26;
            for (; y !== 0 && C < g.length; C++)
                d = (g.words[C] | 0) + y,
                this.words[C] = d & 67108863,
                y = d >>> 26;
            if (this.length = g.length,
            y !== 0)
                this.words[this.length] = y,
                this.length++;
            else if (g !== this)
                for (; C < g.length; C++)
                    this.words[C] = g.words[C];
            return this
        }
        ,
        s.prototype.add = function(a) {
            var d;
            return a.negative !== 0 && this.negative === 0 ? (a.negative = 0,
            d = this.sub(a),
            a.negative ^= 1,
            d) : a.negative === 0 && this.negative !== 0 ? (this.negative = 0,
            d = a.sub(this),
            this.negative = 1,
            d) : this.length > a.length ? this.clone().iadd(a) : a.clone().iadd(this)
        }
        ,
        s.prototype.isub = function(a) {
            if (a.negative !== 0) {
                a.negative = 0;
                var d = this.iadd(a);
                return a.negative = 1,
                d._normSign()
            } else if (this.negative !== 0)
                return this.negative = 0,
                this.iadd(a),
                this.negative = 1,
                this._normSign();
            var g = this.cmp(a);
            if (g === 0)
                return this.negative = 0,
                this.length = 1,
                this.words[0] = 0,
                this;
            var m, y;
            g > 0 ? (m = this,
            y = a) : (m = a,
            y = this);
            for (var C = 0, A = 0; A < y.length; A++)
                d = (m.words[A] | 0) - (y.words[A] | 0) + C,
                C = d >> 26,
                this.words[A] = d & 67108863;
            for (; C !== 0 && A < m.length; A++)
                d = (m.words[A] | 0) + C,
                C = d >> 26,
                this.words[A] = d & 67108863;
            if (C === 0 && A < m.length && m !== this)
                for (; A < m.length; A++)
                    this.words[A] = m.words[A];
            return this.length = Math.max(this.length, A),
            m !== this && (this.negative = 1),
            this._strip()
        }
        ,
        s.prototype.sub = function(a) {
            return this.clone().isub(a)
        }
        ;
        function M(v, a, d) {
            d.negative = a.negative ^ v.negative;
            var g = v.length + a.length | 0;
            d.length = g,
            g = g - 1 | 0;
            var m = v.words[0] | 0
              , y = a.words[0] | 0
              , C = m * y
              , A = C & 67108863
              , b = C / 67108864 | 0;
            d.words[0] = A;
            for (var h = 1; h < g; h++) {
                for (var S = b >>> 26, W = b & 67108863, q = Math.min(h, a.length - 1), I = Math.max(0, h - v.length + 1); I <= q; I++) {
                    var T = h - I | 0;
                    m = v.words[T] | 0,
                    y = a.words[I] | 0,
                    C = m * y + W,
                    S += C / 67108864 | 0,
                    W = C & 67108863
                }
                d.words[h] = W | 0,
                b = S | 0
            }
            return b !== 0 ? d.words[h] = b | 0 : d.length--,
            d._strip()
        }
        var k = function(a, d, g) {
            var m = a.words, y = d.words, C = g.words, A = 0, b, h, S, W = m[0] | 0, q = W & 8191, I = W >>> 13, T = m[1] | 0, B = T & 8191, U = T >>> 13, te = m[2] | 0, w = te & 8191, E = te >>> 13, F = m[3] | 0, j = F & 8191, K = F >>> 13, ee = m[4] | 0, Z = ee & 8191, le = ee >>> 13, Mt = m[5] | 0, ge = Mt & 8191, _e = Mt >>> 13, Vt = m[6] | 0, de = Vt & 8191, fe = Vt >>> 13, Pt = m[7] | 0, he = Pt & 8191, ue = Pt >>> 13, ct = m[8] | 0, me = ct & 8191, ve = ct >>> 13, Or = m[9] | 0, be = Or & 8191, ye = Or >>> 13, Pr = y[0] | 0, we = Pr & 8191, Ee = Pr >>> 13, $r = y[1] | 0, Se = $r & 8191, Re = $r >>> 13, Br = y[2] | 0, Me = Br & 8191, Ce = Br >>> 13, Dr = y[3] | 0, ke = Dr & 8191, Ie = Dr >>> 13, Fr = y[4] | 0, xe = Fr & 8191, Ae = Fr >>> 13, jr = y[5] | 0, Te = jr & 8191, Ne = jr >>> 13, Hr = y[6] | 0, Le = Hr & 8191, Oe = Hr >>> 13, Ur = y[7] | 0, Pe = Ur & 8191, $e = Ur >>> 13, Wr = y[8] | 0, Be = Wr & 8191, De = Wr >>> 13, Vr = y[9] | 0, Fe = Vr & 8191, je = Vr >>> 13;
            g.negative = a.negative ^ d.negative,
            g.length = 19,
            b = Math.imul(q, we),
            h = Math.imul(q, Ee),
            h = h + Math.imul(I, we) | 0,
            S = Math.imul(I, Ee);
            var Yt = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (Yt >>> 26) | 0,
            Yt &= 67108863,
            b = Math.imul(B, we),
            h = Math.imul(B, Ee),
            h = h + Math.imul(U, we) | 0,
            S = Math.imul(U, Ee),
            b = b + Math.imul(q, Se) | 0,
            h = h + Math.imul(q, Re) | 0,
            h = h + Math.imul(I, Se) | 0,
            S = S + Math.imul(I, Re) | 0;
            var Xt = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (Xt >>> 26) | 0,
            Xt &= 67108863,
            b = Math.imul(w, we),
            h = Math.imul(w, Ee),
            h = h + Math.imul(E, we) | 0,
            S = Math.imul(E, Ee),
            b = b + Math.imul(B, Se) | 0,
            h = h + Math.imul(B, Re) | 0,
            h = h + Math.imul(U, Se) | 0,
            S = S + Math.imul(U, Re) | 0,
            b = b + Math.imul(q, Me) | 0,
            h = h + Math.imul(q, Ce) | 0,
            h = h + Math.imul(I, Me) | 0,
            S = S + Math.imul(I, Ce) | 0;
            var er = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (er >>> 26) | 0,
            er &= 67108863,
            b = Math.imul(j, we),
            h = Math.imul(j, Ee),
            h = h + Math.imul(K, we) | 0,
            S = Math.imul(K, Ee),
            b = b + Math.imul(w, Se) | 0,
            h = h + Math.imul(w, Re) | 0,
            h = h + Math.imul(E, Se) | 0,
            S = S + Math.imul(E, Re) | 0,
            b = b + Math.imul(B, Me) | 0,
            h = h + Math.imul(B, Ce) | 0,
            h = h + Math.imul(U, Me) | 0,
            S = S + Math.imul(U, Ce) | 0,
            b = b + Math.imul(q, ke) | 0,
            h = h + Math.imul(q, Ie) | 0,
            h = h + Math.imul(I, ke) | 0,
            S = S + Math.imul(I, Ie) | 0;
            var tr = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (tr >>> 26) | 0,
            tr &= 67108863,
            b = Math.imul(Z, we),
            h = Math.imul(Z, Ee),
            h = h + Math.imul(le, we) | 0,
            S = Math.imul(le, Ee),
            b = b + Math.imul(j, Se) | 0,
            h = h + Math.imul(j, Re) | 0,
            h = h + Math.imul(K, Se) | 0,
            S = S + Math.imul(K, Re) | 0,
            b = b + Math.imul(w, Me) | 0,
            h = h + Math.imul(w, Ce) | 0,
            h = h + Math.imul(E, Me) | 0,
            S = S + Math.imul(E, Ce) | 0,
            b = b + Math.imul(B, ke) | 0,
            h = h + Math.imul(B, Ie) | 0,
            h = h + Math.imul(U, ke) | 0,
            S = S + Math.imul(U, Ie) | 0,
            b = b + Math.imul(q, xe) | 0,
            h = h + Math.imul(q, Ae) | 0,
            h = h + Math.imul(I, xe) | 0,
            S = S + Math.imul(I, Ae) | 0;
            var rr = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (rr >>> 26) | 0,
            rr &= 67108863,
            b = Math.imul(ge, we),
            h = Math.imul(ge, Ee),
            h = h + Math.imul(_e, we) | 0,
            S = Math.imul(_e, Ee),
            b = b + Math.imul(Z, Se) | 0,
            h = h + Math.imul(Z, Re) | 0,
            h = h + Math.imul(le, Se) | 0,
            S = S + Math.imul(le, Re) | 0,
            b = b + Math.imul(j, Me) | 0,
            h = h + Math.imul(j, Ce) | 0,
            h = h + Math.imul(K, Me) | 0,
            S = S + Math.imul(K, Ce) | 0,
            b = b + Math.imul(w, ke) | 0,
            h = h + Math.imul(w, Ie) | 0,
            h = h + Math.imul(E, ke) | 0,
            S = S + Math.imul(E, Ie) | 0,
            b = b + Math.imul(B, xe) | 0,
            h = h + Math.imul(B, Ae) | 0,
            h = h + Math.imul(U, xe) | 0,
            S = S + Math.imul(U, Ae) | 0,
            b = b + Math.imul(q, Te) | 0,
            h = h + Math.imul(q, Ne) | 0,
            h = h + Math.imul(I, Te) | 0,
            S = S + Math.imul(I, Ne) | 0;
            var nr = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (nr >>> 26) | 0,
            nr &= 67108863,
            b = Math.imul(de, we),
            h = Math.imul(de, Ee),
            h = h + Math.imul(fe, we) | 0,
            S = Math.imul(fe, Ee),
            b = b + Math.imul(ge, Se) | 0,
            h = h + Math.imul(ge, Re) | 0,
            h = h + Math.imul(_e, Se) | 0,
            S = S + Math.imul(_e, Re) | 0,
            b = b + Math.imul(Z, Me) | 0,
            h = h + Math.imul(Z, Ce) | 0,
            h = h + Math.imul(le, Me) | 0,
            S = S + Math.imul(le, Ce) | 0,
            b = b + Math.imul(j, ke) | 0,
            h = h + Math.imul(j, Ie) | 0,
            h = h + Math.imul(K, ke) | 0,
            S = S + Math.imul(K, Ie) | 0,
            b = b + Math.imul(w, xe) | 0,
            h = h + Math.imul(w, Ae) | 0,
            h = h + Math.imul(E, xe) | 0,
            S = S + Math.imul(E, Ae) | 0,
            b = b + Math.imul(B, Te) | 0,
            h = h + Math.imul(B, Ne) | 0,
            h = h + Math.imul(U, Te) | 0,
            S = S + Math.imul(U, Ne) | 0,
            b = b + Math.imul(q, Le) | 0,
            h = h + Math.imul(q, Oe) | 0,
            h = h + Math.imul(I, Le) | 0,
            S = S + Math.imul(I, Oe) | 0;
            var ir = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (ir >>> 26) | 0,
            ir &= 67108863,
            b = Math.imul(he, we),
            h = Math.imul(he, Ee),
            h = h + Math.imul(ue, we) | 0,
            S = Math.imul(ue, Ee),
            b = b + Math.imul(de, Se) | 0,
            h = h + Math.imul(de, Re) | 0,
            h = h + Math.imul(fe, Se) | 0,
            S = S + Math.imul(fe, Re) | 0,
            b = b + Math.imul(ge, Me) | 0,
            h = h + Math.imul(ge, Ce) | 0,
            h = h + Math.imul(_e, Me) | 0,
            S = S + Math.imul(_e, Ce) | 0,
            b = b + Math.imul(Z, ke) | 0,
            h = h + Math.imul(Z, Ie) | 0,
            h = h + Math.imul(le, ke) | 0,
            S = S + Math.imul(le, Ie) | 0,
            b = b + Math.imul(j, xe) | 0,
            h = h + Math.imul(j, Ae) | 0,
            h = h + Math.imul(K, xe) | 0,
            S = S + Math.imul(K, Ae) | 0,
            b = b + Math.imul(w, Te) | 0,
            h = h + Math.imul(w, Ne) | 0,
            h = h + Math.imul(E, Te) | 0,
            S = S + Math.imul(E, Ne) | 0,
            b = b + Math.imul(B, Le) | 0,
            h = h + Math.imul(B, Oe) | 0,
            h = h + Math.imul(U, Le) | 0,
            S = S + Math.imul(U, Oe) | 0,
            b = b + Math.imul(q, Pe) | 0,
            h = h + Math.imul(q, $e) | 0,
            h = h + Math.imul(I, Pe) | 0,
            S = S + Math.imul(I, $e) | 0;
            var sr = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (sr >>> 26) | 0,
            sr &= 67108863,
            b = Math.imul(me, we),
            h = Math.imul(me, Ee),
            h = h + Math.imul(ve, we) | 0,
            S = Math.imul(ve, Ee),
            b = b + Math.imul(he, Se) | 0,
            h = h + Math.imul(he, Re) | 0,
            h = h + Math.imul(ue, Se) | 0,
            S = S + Math.imul(ue, Re) | 0,
            b = b + Math.imul(de, Me) | 0,
            h = h + Math.imul(de, Ce) | 0,
            h = h + Math.imul(fe, Me) | 0,
            S = S + Math.imul(fe, Ce) | 0,
            b = b + Math.imul(ge, ke) | 0,
            h = h + Math.imul(ge, Ie) | 0,
            h = h + Math.imul(_e, ke) | 0,
            S = S + Math.imul(_e, Ie) | 0,
            b = b + Math.imul(Z, xe) | 0,
            h = h + Math.imul(Z, Ae) | 0,
            h = h + Math.imul(le, xe) | 0,
            S = S + Math.imul(le, Ae) | 0,
            b = b + Math.imul(j, Te) | 0,
            h = h + Math.imul(j, Ne) | 0,
            h = h + Math.imul(K, Te) | 0,
            S = S + Math.imul(K, Ne) | 0,
            b = b + Math.imul(w, Le) | 0,
            h = h + Math.imul(w, Oe) | 0,
            h = h + Math.imul(E, Le) | 0,
            S = S + Math.imul(E, Oe) | 0,
            b = b + Math.imul(B, Pe) | 0,
            h = h + Math.imul(B, $e) | 0,
            h = h + Math.imul(U, Pe) | 0,
            S = S + Math.imul(U, $e) | 0,
            b = b + Math.imul(q, Be) | 0,
            h = h + Math.imul(q, De) | 0,
            h = h + Math.imul(I, Be) | 0,
            S = S + Math.imul(I, De) | 0;
            var or = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (or >>> 26) | 0,
            or &= 67108863,
            b = Math.imul(be, we),
            h = Math.imul(be, Ee),
            h = h + Math.imul(ye, we) | 0,
            S = Math.imul(ye, Ee),
            b = b + Math.imul(me, Se) | 0,
            h = h + Math.imul(me, Re) | 0,
            h = h + Math.imul(ve, Se) | 0,
            S = S + Math.imul(ve, Re) | 0,
            b = b + Math.imul(he, Me) | 0,
            h = h + Math.imul(he, Ce) | 0,
            h = h + Math.imul(ue, Me) | 0,
            S = S + Math.imul(ue, Ce) | 0,
            b = b + Math.imul(de, ke) | 0,
            h = h + Math.imul(de, Ie) | 0,
            h = h + Math.imul(fe, ke) | 0,
            S = S + Math.imul(fe, Ie) | 0,
            b = b + Math.imul(ge, xe) | 0,
            h = h + Math.imul(ge, Ae) | 0,
            h = h + Math.imul(_e, xe) | 0,
            S = S + Math.imul(_e, Ae) | 0,
            b = b + Math.imul(Z, Te) | 0,
            h = h + Math.imul(Z, Ne) | 0,
            h = h + Math.imul(le, Te) | 0,
            S = S + Math.imul(le, Ne) | 0,
            b = b + Math.imul(j, Le) | 0,
            h = h + Math.imul(j, Oe) | 0,
            h = h + Math.imul(K, Le) | 0,
            S = S + Math.imul(K, Oe) | 0,
            b = b + Math.imul(w, Pe) | 0,
            h = h + Math.imul(w, $e) | 0,
            h = h + Math.imul(E, Pe) | 0,
            S = S + Math.imul(E, $e) | 0,
            b = b + Math.imul(B, Be) | 0,
            h = h + Math.imul(B, De) | 0,
            h = h + Math.imul(U, Be) | 0,
            S = S + Math.imul(U, De) | 0,
            b = b + Math.imul(q, Fe) | 0,
            h = h + Math.imul(q, je) | 0,
            h = h + Math.imul(I, Fe) | 0,
            S = S + Math.imul(I, je) | 0;
            var ar = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (ar >>> 26) | 0,
            ar &= 67108863,
            b = Math.imul(be, Se),
            h = Math.imul(be, Re),
            h = h + Math.imul(ye, Se) | 0,
            S = Math.imul(ye, Re),
            b = b + Math.imul(me, Me) | 0,
            h = h + Math.imul(me, Ce) | 0,
            h = h + Math.imul(ve, Me) | 0,
            S = S + Math.imul(ve, Ce) | 0,
            b = b + Math.imul(he, ke) | 0,
            h = h + Math.imul(he, Ie) | 0,
            h = h + Math.imul(ue, ke) | 0,
            S = S + Math.imul(ue, Ie) | 0,
            b = b + Math.imul(de, xe) | 0,
            h = h + Math.imul(de, Ae) | 0,
            h = h + Math.imul(fe, xe) | 0,
            S = S + Math.imul(fe, Ae) | 0,
            b = b + Math.imul(ge, Te) | 0,
            h = h + Math.imul(ge, Ne) | 0,
            h = h + Math.imul(_e, Te) | 0,
            S = S + Math.imul(_e, Ne) | 0,
            b = b + Math.imul(Z, Le) | 0,
            h = h + Math.imul(Z, Oe) | 0,
            h = h + Math.imul(le, Le) | 0,
            S = S + Math.imul(le, Oe) | 0,
            b = b + Math.imul(j, Pe) | 0,
            h = h + Math.imul(j, $e) | 0,
            h = h + Math.imul(K, Pe) | 0,
            S = S + Math.imul(K, $e) | 0,
            b = b + Math.imul(w, Be) | 0,
            h = h + Math.imul(w, De) | 0,
            h = h + Math.imul(E, Be) | 0,
            S = S + Math.imul(E, De) | 0,
            b = b + Math.imul(B, Fe) | 0,
            h = h + Math.imul(B, je) | 0,
            h = h + Math.imul(U, Fe) | 0,
            S = S + Math.imul(U, je) | 0;
            var cr = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (cr >>> 26) | 0,
            cr &= 67108863,
            b = Math.imul(be, Me),
            h = Math.imul(be, Ce),
            h = h + Math.imul(ye, Me) | 0,
            S = Math.imul(ye, Ce),
            b = b + Math.imul(me, ke) | 0,
            h = h + Math.imul(me, Ie) | 0,
            h = h + Math.imul(ve, ke) | 0,
            S = S + Math.imul(ve, Ie) | 0,
            b = b + Math.imul(he, xe) | 0,
            h = h + Math.imul(he, Ae) | 0,
            h = h + Math.imul(ue, xe) | 0,
            S = S + Math.imul(ue, Ae) | 0,
            b = b + Math.imul(de, Te) | 0,
            h = h + Math.imul(de, Ne) | 0,
            h = h + Math.imul(fe, Te) | 0,
            S = S + Math.imul(fe, Ne) | 0,
            b = b + Math.imul(ge, Le) | 0,
            h = h + Math.imul(ge, Oe) | 0,
            h = h + Math.imul(_e, Le) | 0,
            S = S + Math.imul(_e, Oe) | 0,
            b = b + Math.imul(Z, Pe) | 0,
            h = h + Math.imul(Z, $e) | 0,
            h = h + Math.imul(le, Pe) | 0,
            S = S + Math.imul(le, $e) | 0,
            b = b + Math.imul(j, Be) | 0,
            h = h + Math.imul(j, De) | 0,
            h = h + Math.imul(K, Be) | 0,
            S = S + Math.imul(K, De) | 0,
            b = b + Math.imul(w, Fe) | 0,
            h = h + Math.imul(w, je) | 0,
            h = h + Math.imul(E, Fe) | 0,
            S = S + Math.imul(E, je) | 0;
            var lr = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (lr >>> 26) | 0,
            lr &= 67108863,
            b = Math.imul(be, ke),
            h = Math.imul(be, Ie),
            h = h + Math.imul(ye, ke) | 0,
            S = Math.imul(ye, Ie),
            b = b + Math.imul(me, xe) | 0,
            h = h + Math.imul(me, Ae) | 0,
            h = h + Math.imul(ve, xe) | 0,
            S = S + Math.imul(ve, Ae) | 0,
            b = b + Math.imul(he, Te) | 0,
            h = h + Math.imul(he, Ne) | 0,
            h = h + Math.imul(ue, Te) | 0,
            S = S + Math.imul(ue, Ne) | 0,
            b = b + Math.imul(de, Le) | 0,
            h = h + Math.imul(de, Oe) | 0,
            h = h + Math.imul(fe, Le) | 0,
            S = S + Math.imul(fe, Oe) | 0,
            b = b + Math.imul(ge, Pe) | 0,
            h = h + Math.imul(ge, $e) | 0,
            h = h + Math.imul(_e, Pe) | 0,
            S = S + Math.imul(_e, $e) | 0,
            b = b + Math.imul(Z, Be) | 0,
            h = h + Math.imul(Z, De) | 0,
            h = h + Math.imul(le, Be) | 0,
            S = S + Math.imul(le, De) | 0,
            b = b + Math.imul(j, Fe) | 0,
            h = h + Math.imul(j, je) | 0,
            h = h + Math.imul(K, Fe) | 0,
            S = S + Math.imul(K, je) | 0;
            var ur = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (ur >>> 26) | 0,
            ur &= 67108863,
            b = Math.imul(be, xe),
            h = Math.imul(be, Ae),
            h = h + Math.imul(ye, xe) | 0,
            S = Math.imul(ye, Ae),
            b = b + Math.imul(me, Te) | 0,
            h = h + Math.imul(me, Ne) | 0,
            h = h + Math.imul(ve, Te) | 0,
            S = S + Math.imul(ve, Ne) | 0,
            b = b + Math.imul(he, Le) | 0,
            h = h + Math.imul(he, Oe) | 0,
            h = h + Math.imul(ue, Le) | 0,
            S = S + Math.imul(ue, Oe) | 0,
            b = b + Math.imul(de, Pe) | 0,
            h = h + Math.imul(de, $e) | 0,
            h = h + Math.imul(fe, Pe) | 0,
            S = S + Math.imul(fe, $e) | 0,
            b = b + Math.imul(ge, Be) | 0,
            h = h + Math.imul(ge, De) | 0,
            h = h + Math.imul(_e, Be) | 0,
            S = S + Math.imul(_e, De) | 0,
            b = b + Math.imul(Z, Fe) | 0,
            h = h + Math.imul(Z, je) | 0,
            h = h + Math.imul(le, Fe) | 0,
            S = S + Math.imul(le, je) | 0;
            var hr = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (hr >>> 26) | 0,
            hr &= 67108863,
            b = Math.imul(be, Te),
            h = Math.imul(be, Ne),
            h = h + Math.imul(ye, Te) | 0,
            S = Math.imul(ye, Ne),
            b = b + Math.imul(me, Le) | 0,
            h = h + Math.imul(me, Oe) | 0,
            h = h + Math.imul(ve, Le) | 0,
            S = S + Math.imul(ve, Oe) | 0,
            b = b + Math.imul(he, Pe) | 0,
            h = h + Math.imul(he, $e) | 0,
            h = h + Math.imul(ue, Pe) | 0,
            S = S + Math.imul(ue, $e) | 0,
            b = b + Math.imul(de, Be) | 0,
            h = h + Math.imul(de, De) | 0,
            h = h + Math.imul(fe, Be) | 0,
            S = S + Math.imul(fe, De) | 0,
            b = b + Math.imul(ge, Fe) | 0,
            h = h + Math.imul(ge, je) | 0,
            h = h + Math.imul(_e, Fe) | 0,
            S = S + Math.imul(_e, je) | 0;
            var Bs = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (Bs >>> 26) | 0,
            Bs &= 67108863,
            b = Math.imul(be, Le),
            h = Math.imul(be, Oe),
            h = h + Math.imul(ye, Le) | 0,
            S = Math.imul(ye, Oe),
            b = b + Math.imul(me, Pe) | 0,
            h = h + Math.imul(me, $e) | 0,
            h = h + Math.imul(ve, Pe) | 0,
            S = S + Math.imul(ve, $e) | 0,
            b = b + Math.imul(he, Be) | 0,
            h = h + Math.imul(he, De) | 0,
            h = h + Math.imul(ue, Be) | 0,
            S = S + Math.imul(ue, De) | 0,
            b = b + Math.imul(de, Fe) | 0,
            h = h + Math.imul(de, je) | 0,
            h = h + Math.imul(fe, Fe) | 0,
            S = S + Math.imul(fe, je) | 0;
            var Ds = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (Ds >>> 26) | 0,
            Ds &= 67108863,
            b = Math.imul(be, Pe),
            h = Math.imul(be, $e),
            h = h + Math.imul(ye, Pe) | 0,
            S = Math.imul(ye, $e),
            b = b + Math.imul(me, Be) | 0,
            h = h + Math.imul(me, De) | 0,
            h = h + Math.imul(ve, Be) | 0,
            S = S + Math.imul(ve, De) | 0,
            b = b + Math.imul(he, Fe) | 0,
            h = h + Math.imul(he, je) | 0,
            h = h + Math.imul(ue, Fe) | 0,
            S = S + Math.imul(ue, je) | 0;
            var Fs = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (Fs >>> 26) | 0,
            Fs &= 67108863,
            b = Math.imul(be, Be),
            h = Math.imul(be, De),
            h = h + Math.imul(ye, Be) | 0,
            S = Math.imul(ye, De),
            b = b + Math.imul(me, Fe) | 0,
            h = h + Math.imul(me, je) | 0,
            h = h + Math.imul(ve, Fe) | 0,
            S = S + Math.imul(ve, je) | 0;
            var js = (A + b | 0) + ((h & 8191) << 13) | 0;
            A = (S + (h >>> 13) | 0) + (js >>> 26) | 0,
            js &= 67108863,
            b = Math.imul(be, Fe),
            h = Math.imul(be, je),
            h = h + Math.imul(ye, Fe) | 0,
            S = Math.imul(ye, je);
            var Hs = (A + b | 0) + ((h & 8191) << 13) | 0;
            return A = (S + (h >>> 13) | 0) + (Hs >>> 26) | 0,
            Hs &= 67108863,
            C[0] = Yt,
            C[1] = Xt,
            C[2] = er,
            C[3] = tr,
            C[4] = rr,
            C[5] = nr,
            C[6] = ir,
            C[7] = sr,
            C[8] = or,
            C[9] = ar,
            C[10] = cr,
            C[11] = lr,
            C[12] = ur,
            C[13] = hr,
            C[14] = Bs,
            C[15] = Ds,
            C[16] = Fs,
            C[17] = js,
            C[18] = Hs,
            A !== 0 && (C[19] = A,
            g.length++),
            g
        };
        Math.imul || (k = M);
        function N(v, a, d) {
            d.negative = a.negative ^ v.negative,
            d.length = v.length + a.length;
            for (var g = 0, m = 0, y = 0; y < d.length - 1; y++) {
                var C = m;
                m = 0;
                for (var A = g & 67108863, b = Math.min(y, a.length - 1), h = Math.max(0, y - v.length + 1); h <= b; h++) {
                    var S = y - h
                      , W = v.words[S] | 0
                      , q = a.words[h] | 0
                      , I = W * q
                      , T = I & 67108863;
                    C = C + (I / 67108864 | 0) | 0,
                    T = T + A | 0,
                    A = T & 67108863,
                    C = C + (T >>> 26) | 0,
                    m += C >>> 26,
                    C &= 67108863
                }
                d.words[y] = A,
                g = C,
                C = m
            }
            return g !== 0 ? d.words[y] = g : d.length--,
            d._strip()
        }
        function $(v, a, d) {
            return N(v, a, d)
        }
        s.prototype.mulTo = function(a, d) {
            var g, m = this.length + a.length;
            return this.length === 10 && a.length === 10 ? g = k(this, a, d) : m < 63 ? g = M(this, a, d) : m < 1024 ? g = N(this, a, d) : g = $(this, a, d),
            g
        }
        ,
        s.prototype.mul = function(a) {
            var d = new s(null);
            return d.words = new Array(this.length + a.length),
            this.mulTo(a, d)
        }
        ,
        s.prototype.mulf = function(a) {
            var d = new s(null);
            return d.words = new Array(this.length + a.length),
            $(this, a, d)
        }
        ,
        s.prototype.imul = function(a) {
            return this.clone().mulTo(a, this)
        }
        ,
        s.prototype.imuln = function(a) {
            var d = a < 0;
            d && (a = -a),
            n(typeof a == "number"),
            n(a < 67108864);
            for (var g = 0, m = 0; m < this.length; m++) {
                var y = (this.words[m] | 0) * a
                  , C = (y & 67108863) + (g & 67108863);
                g >>= 26,
                g += y / 67108864 | 0,
                g += C >>> 26,
                this.words[m] = C & 67108863
            }
            return g !== 0 && (this.words[m] = g,
            this.length++),
            d ? this.ineg() : this
        }
        ,
        s.prototype.muln = function(a) {
            return this.clone().imuln(a)
        }
        ,
        s.prototype.sqr = function() {
            return this.mul(this)
        }
        ,
        s.prototype.isqr = function() {
            return this.imul(this.clone())
        }
        ,
        s.prototype.pow = function(a) {
            var d = L(a);
            if (d.length === 0)
                return new s(1);
            for (var g = this, m = 0; m < d.length && d[m] === 0; m++,
            g = g.sqr())
                ;
            if (++m < d.length)
                for (var y = g.sqr(); m < d.length; m++,
                y = y.sqr())
                    d[m] !== 0 && (g = g.mul(y));
            return g
        }
        ,
        s.prototype.iushln = function(a) {
            n(typeof a == "number" && a >= 0);
            var d = a % 26, g = (a - d) / 26, m = 67108863 >>> 26 - d << 26 - d, y;
            if (d !== 0) {
                var C = 0;
                for (y = 0; y < this.length; y++) {
                    var A = this.words[y] & m
                      , b = (this.words[y] | 0) - A << d;
                    this.words[y] = b | C,
                    C = A >>> 26 - d
                }
                C && (this.words[y] = C,
                this.length++)
            }
            if (g !== 0) {
                for (y = this.length - 1; y >= 0; y--)
                    this.words[y + g] = this.words[y];
                for (y = 0; y < g; y++)
                    this.words[y] = 0;
                this.length += g
            }
            return this._strip()
        }
        ,
        s.prototype.ishln = function(a) {
            return n(this.negative === 0),
            this.iushln(a)
        }
        ,
        s.prototype.iushrn = function(a, d, g) {
            n(typeof a == "number" && a >= 0);
            var m;
            d ? m = (d - d % 26) / 26 : m = 0;
            var y = a % 26
              , C = Math.min((a - y) / 26, this.length)
              , A = 67108863 ^ 67108863 >>> y << y
              , b = g;
            if (m -= C,
            m = Math.max(0, m),
            b) {
                for (var h = 0; h < C; h++)
                    b.words[h] = this.words[h];
                b.length = C
            }
            if (C !== 0)
                if (this.length > C)
                    for (this.length -= C,
                    h = 0; h < this.length; h++)
                        this.words[h] = this.words[h + C];
                else
                    this.words[0] = 0,
                    this.length = 1;
            var S = 0;
            for (h = this.length - 1; h >= 0 && (S !== 0 || h >= m); h--) {
                var W = this.words[h] | 0;
                this.words[h] = S << 26 - y | W >>> y,
                S = W & A
            }
            return b && S !== 0 && (b.words[b.length++] = S),
            this.length === 0 && (this.words[0] = 0,
            this.length = 1),
            this._strip()
        }
        ,
        s.prototype.ishrn = function(a, d, g) {
            return n(this.negative === 0),
            this.iushrn(a, d, g)
        }
        ,
        s.prototype.shln = function(a) {
            return this.clone().ishln(a)
        }
        ,
        s.prototype.ushln = function(a) {
            return this.clone().iushln(a)
        }
        ,
        s.prototype.shrn = function(a) {
            return this.clone().ishrn(a)
        }
        ,
        s.prototype.ushrn = function(a) {
            return this.clone().iushrn(a)
        }
        ,
        s.prototype.testn = function(a) {
            n(typeof a == "number" && a >= 0);
            var d = a % 26
              , g = (a - d) / 26
              , m = 1 << d;
            if (this.length <= g)
                return !1;
            var y = this.words[g];
            return !!(y & m)
        }
        ,
        s.prototype.imaskn = function(a) {
            n(typeof a == "number" && a >= 0);
            var d = a % 26
              , g = (a - d) / 26;
            if (n(this.negative === 0, "imaskn works only with positive numbers"),
            this.length <= g)
                return this;
            if (d !== 0 && g++,
            this.length = Math.min(g, this.length),
            d !== 0) {
                var m = 67108863 ^ 67108863 >>> d << d;
                this.words[this.length - 1] &= m
            }
            return this._strip()
        }
        ,
        s.prototype.maskn = function(a) {
            return this.clone().imaskn(a)
        }
        ,
        s.prototype.iaddn = function(a) {
            return n(typeof a == "number"),
            n(a < 67108864),
            a < 0 ? this.isubn(-a) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= a ? (this.words[0] = a - (this.words[0] | 0),
            this.negative = 0,
            this) : (this.negative = 0,
            this.isubn(a),
            this.negative = 1,
            this) : this._iaddn(a)
        }
        ,
        s.prototype._iaddn = function(a) {
            this.words[0] += a;
            for (var d = 0; d < this.length && this.words[d] >= 67108864; d++)
                this.words[d] -= 67108864,
                d === this.length - 1 ? this.words[d + 1] = 1 : this.words[d + 1]++;
            return this.length = Math.max(this.length, d + 1),
            this
        }
        ,
        s.prototype.isubn = function(a) {
            if (n(typeof a == "number"),
            n(a < 67108864),
            a < 0)
                return this.iaddn(-a);
            if (this.negative !== 0)
                return this.negative = 0,
                this.iaddn(a),
                this.negative = 1,
                this;
            if (this.words[0] -= a,
            this.length === 1 && this.words[0] < 0)
                this.words[0] = -this.words[0],
                this.negative = 1;
            else
                for (var d = 0; d < this.length && this.words[d] < 0; d++)
                    this.words[d] += 67108864,
                    this.words[d + 1] -= 1;
            return this._strip()
        }
        ,
        s.prototype.addn = function(a) {
            return this.clone().iaddn(a)
        }
        ,
        s.prototype.subn = function(a) {
            return this.clone().isubn(a)
        }
        ,
        s.prototype.iabs = function() {
            return this.negative = 0,
            this
        }
        ,
        s.prototype.abs = function() {
            return this.clone().iabs()
        }
        ,
        s.prototype._ishlnsubmul = function(a, d, g) {
            var m = a.length + g, y;
            this._expand(m);
            var C, A = 0;
            for (y = 0; y < a.length; y++) {
                C = (this.words[y + g] | 0) + A;
                var b = (a.words[y] | 0) * d;
                C -= b & 67108863,
                A = (C >> 26) - (b / 67108864 | 0),
                this.words[y + g] = C & 67108863
            }
            for (; y < this.length - g; y++)
                C = (this.words[y + g] | 0) + A,
                A = C >> 26,
                this.words[y + g] = C & 67108863;
            if (A === 0)
                return this._strip();
            for (n(A === -1),
            A = 0,
            y = 0; y < this.length; y++)
                C = -(this.words[y] | 0) + A,
                A = C >> 26,
                this.words[y] = C & 67108863;
            return this.negative = 1,
            this._strip()
        }
        ,
        s.prototype._wordDiv = function(a, d) {
            var g = this.length - a.length
              , m = this.clone()
              , y = a
              , C = y.words[y.length - 1] | 0
              , A = this._countBits(C);
            g = 26 - A,
            g !== 0 && (y = y.ushln(g),
            m.iushln(g),
            C = y.words[y.length - 1] | 0);
            var b = m.length - y.length, h;
            if (d !== "mod") {
                h = new s(null),
                h.length = b + 1,
                h.words = new Array(h.length);
                for (var S = 0; S < h.length; S++)
                    h.words[S] = 0
            }
            var W = m.clone()._ishlnsubmul(y, 1, b);
            W.negative === 0 && (m = W,
            h && (h.words[b] = 1));
            for (var q = b - 1; q >= 0; q--) {
                var I = (m.words[y.length + q] | 0) * 67108864 + (m.words[y.length + q - 1] | 0);
                for (I = Math.min(I / C | 0, 67108863),
                m._ishlnsubmul(y, I, q); m.negative !== 0; )
                    I--,
                    m.negative = 0,
                    m._ishlnsubmul(y, 1, q),
                    m.isZero() || (m.negative ^= 1);
                h && (h.words[q] = I)
            }
            return h && h._strip(),
            m._strip(),
            d !== "div" && g !== 0 && m.iushrn(g),
            {
                div: h || null,
                mod: m
            }
        }
        ,
        s.prototype.divmod = function(a, d, g) {
            if (n(!a.isZero()),
            this.isZero())
                return {
                    div: new s(0),
                    mod: new s(0)
                };
            var m, y, C;
            return this.negative !== 0 && a.negative === 0 ? (C = this.neg().divmod(a, d),
            d !== "mod" && (m = C.div.neg()),
            d !== "div" && (y = C.mod.neg(),
            g && y.negative !== 0 && y.iadd(a)),
            {
                div: m,
                mod: y
            }) : this.negative === 0 && a.negative !== 0 ? (C = this.divmod(a.neg(), d),
            d !== "mod" && (m = C.div.neg()),
            {
                div: m,
                mod: C.mod
            }) : this.negative & a.negative ? (C = this.neg().divmod(a.neg(), d),
            d !== "div" && (y = C.mod.neg(),
            g && y.negative !== 0 && y.isub(a)),
            {
                div: C.div,
                mod: y
            }) : a.length > this.length || this.cmp(a) < 0 ? {
                div: new s(0),
                mod: this
            } : a.length === 1 ? d === "div" ? {
                div: this.divn(a.words[0]),
                mod: null
            } : d === "mod" ? {
                div: null,
                mod: new s(this.modrn(a.words[0]))
            } : {
                div: this.divn(a.words[0]),
                mod: new s(this.modrn(a.words[0]))
            } : this._wordDiv(a, d)
        }
        ,
        s.prototype.div = function(a) {
            return this.divmod(a, "div", !1).div
        }
        ,
        s.prototype.mod = function(a) {
            return this.divmod(a, "mod", !1).mod
        }
        ,
        s.prototype.umod = function(a) {
            return this.divmod(a, "mod", !0).mod
        }
        ,
        s.prototype.divRound = function(a) {
            var d = this.divmod(a);
            if (d.mod.isZero())
                return d.div;
            var g = d.div.negative !== 0 ? d.mod.isub(a) : d.mod
              , m = a.ushrn(1)
              , y = a.andln(1)
              , C = g.cmp(m);
            return C < 0 || y === 1 && C === 0 ? d.div : d.div.negative !== 0 ? d.div.isubn(1) : d.div.iaddn(1)
        }
        ,
        s.prototype.modrn = function(a) {
            var d = a < 0;
            d && (a = -a),
            n(a <= 67108863);
            for (var g = (1 << 26) % a, m = 0, y = this.length - 1; y >= 0; y--)
                m = (g * m + (this.words[y] | 0)) % a;
            return d ? -m : m
        }
        ,
        s.prototype.modn = function(a) {
            return this.modrn(a)
        }
        ,
        s.prototype.idivn = function(a) {
            var d = a < 0;
            d && (a = -a),
            n(a <= 67108863);
            for (var g = 0, m = this.length - 1; m >= 0; m--) {
                var y = (this.words[m] | 0) + g * 67108864;
                this.words[m] = y / a | 0,
                g = y % a
            }
            return this._strip(),
            d ? this.ineg() : this
        }
        ,
        s.prototype.divn = function(a) {
            return this.clone().idivn(a)
        }
        ,
        s.prototype.egcd = function(a) {
            n(a.negative === 0),
            n(!a.isZero());
            var d = this
              , g = a.clone();
            d.negative !== 0 ? d = d.umod(a) : d = d.clone();
            for (var m = new s(1), y = new s(0), C = new s(0), A = new s(1), b = 0; d.isEven() && g.isEven(); )
                d.iushrn(1),
                g.iushrn(1),
                ++b;
            for (var h = g.clone(), S = d.clone(); !d.isZero(); ) {
                for (var W = 0, q = 1; !(d.words[0] & q) && W < 26; ++W,
                q <<= 1)
                    ;
                if (W > 0)
                    for (d.iushrn(W); W-- > 0; )
                        (m.isOdd() || y.isOdd()) && (m.iadd(h),
                        y.isub(S)),
                        m.iushrn(1),
                        y.iushrn(1);
                for (var I = 0, T = 1; !(g.words[0] & T) && I < 26; ++I,
                T <<= 1)
                    ;
                if (I > 0)
                    for (g.iushrn(I); I-- > 0; )
                        (C.isOdd() || A.isOdd()) && (C.iadd(h),
                        A.isub(S)),
                        C.iushrn(1),
                        A.iushrn(1);
                d.cmp(g) >= 0 ? (d.isub(g),
                m.isub(C),
                y.isub(A)) : (g.isub(d),
                C.isub(m),
                A.isub(y))
            }
            return {
                a: C,
                b: A,
                gcd: g.iushln(b)
            }
        }
        ,
        s.prototype._invmp = function(a) {
            n(a.negative === 0),
            n(!a.isZero());
            var d = this
              , g = a.clone();
            d.negative !== 0 ? d = d.umod(a) : d = d.clone();
            for (var m = new s(1), y = new s(0), C = g.clone(); d.cmpn(1) > 0 && g.cmpn(1) > 0; ) {
                for (var A = 0, b = 1; !(d.words[0] & b) && A < 26; ++A,
                b <<= 1)
                    ;
                if (A > 0)
                    for (d.iushrn(A); A-- > 0; )
                        m.isOdd() && m.iadd(C),
                        m.iushrn(1);
                for (var h = 0, S = 1; !(g.words[0] & S) && h < 26; ++h,
                S <<= 1)
                    ;
                if (h > 0)
                    for (g.iushrn(h); h-- > 0; )
                        y.isOdd() && y.iadd(C),
                        y.iushrn(1);
                d.cmp(g) >= 0 ? (d.isub(g),
                m.isub(y)) : (g.isub(d),
                y.isub(m))
            }
            var W;
            return d.cmpn(1) === 0 ? W = m : W = y,
            W.cmpn(0) < 0 && W.iadd(a),
            W
        }
        ,
        s.prototype.gcd = function(a) {
            if (this.isZero())
                return a.abs();
            if (a.isZero())
                return this.abs();
            var d = this.clone()
              , g = a.clone();
            d.negative = 0,
            g.negative = 0;
            for (var m = 0; d.isEven() && g.isEven(); m++)
                d.iushrn(1),
                g.iushrn(1);
            do {
                for (; d.isEven(); )
                    d.iushrn(1);
                for (; g.isEven(); )
                    g.iushrn(1);
                var y = d.cmp(g);
                if (y < 0) {
                    var C = d;
                    d = g,
                    g = C
                } else if (y === 0 || g.cmpn(1) === 0)
                    break;
                d.isub(g)
            } while (!0);
            return g.iushln(m)
        }
        ,
        s.prototype.invm = function(a) {
            return this.egcd(a).a.umod(a)
        }
        ,
        s.prototype.isEven = function() {
            return (this.words[0] & 1) === 0
        }
        ,
        s.prototype.isOdd = function() {
            return (this.words[0] & 1) === 1
        }
        ,
        s.prototype.andln = function(a) {
            return this.words[0] & a
        }
        ,
        s.prototype.bincn = function(a) {
            n(typeof a == "number");
            var d = a % 26
              , g = (a - d) / 26
              , m = 1 << d;
            if (this.length <= g)
                return this._expand(g + 1),
                this.words[g] |= m,
                this;
            for (var y = m, C = g; y !== 0 && C < this.length; C++) {
                var A = this.words[C] | 0;
                A += y,
                y = A >>> 26,
                A &= 67108863,
                this.words[C] = A
            }
            return y !== 0 && (this.words[C] = y,
            this.length++),
            this
        }
        ,
        s.prototype.isZero = function() {
            return this.length === 1 && this.words[0] === 0
        }
        ,
        s.prototype.cmpn = function(a) {
            var d = a < 0;
            if (this.negative !== 0 && !d)
                return -1;
            if (this.negative === 0 && d)
                return 1;
            this._strip();
            var g;
            if (this.length > 1)
                g = 1;
            else {
                d && (a = -a),
                n(a <= 67108863, "Number is too big");
                var m = this.words[0] | 0;
                g = m === a ? 0 : m < a ? -1 : 1
            }
            return this.negative !== 0 ? -g | 0 : g
        }
        ,
        s.prototype.cmp = function(a) {
            if (this.negative !== 0 && a.negative === 0)
                return -1;
            if (this.negative === 0 && a.negative !== 0)
                return 1;
            var d = this.ucmp(a);
            return this.negative !== 0 ? -d | 0 : d
        }
        ,
        s.prototype.ucmp = function(a) {
            if (this.length > a.length)
                return 1;
            if (this.length < a.length)
                return -1;
            for (var d = 0, g = this.length - 1; g >= 0; g--) {
                var m = this.words[g] | 0
                  , y = a.words[g] | 0;
                if (m !== y) {
                    m < y ? d = -1 : m > y && (d = 1);
                    break
                }
            }
            return d
        }
        ,
        s.prototype.gtn = function(a) {
            return this.cmpn(a) === 1
        }
        ,
        s.prototype.gt = function(a) {
            return this.cmp(a) === 1
        }
        ,
        s.prototype.gten = function(a) {
            return this.cmpn(a) >= 0
        }
        ,
        s.prototype.gte = function(a) {
            return this.cmp(a) >= 0
        }
        ,
        s.prototype.ltn = function(a) {
            return this.cmpn(a) === -1
        }
        ,
        s.prototype.lt = function(a) {
            return this.cmp(a) === -1
        }
        ,
        s.prototype.lten = function(a) {
            return this.cmpn(a) <= 0
        }
        ,
        s.prototype.lte = function(a) {
            return this.cmp(a) <= 0
        }
        ,
        s.prototype.eqn = function(a) {
            return this.cmpn(a) === 0
        }
        ,
        s.prototype.eq = function(a) {
            return this.cmp(a) === 0
        }
        ,
        s.red = function(a) {
            return new Q(a)
        }
        ,
        s.prototype.toRed = function(a) {
            return n(!this.red, "Already a number in reduction context"),
            n(this.negative === 0, "red works only with positives"),
            a.convertTo(this)._forceRed(a)
        }
        ,
        s.prototype.fromRed = function() {
            return n(this.red, "fromRed works only with numbers in reduction context"),
            this.red.convertFrom(this)
        }
        ,
        s.prototype._forceRed = function(a) {
            return this.red = a,
            this
        }
        ,
        s.prototype.forceRed = function(a) {
            return n(!this.red, "Already a number in reduction context"),
            this._forceRed(a)
        }
        ,
        s.prototype.redAdd = function(a) {
            return n(this.red, "redAdd works only with red numbers"),
            this.red.add(this, a)
        }
        ,
        s.prototype.redIAdd = function(a) {
            return n(this.red, "redIAdd works only with red numbers"),
            this.red.iadd(this, a)
        }
        ,
        s.prototype.redSub = function(a) {
            return n(this.red, "redSub works only with red numbers"),
            this.red.sub(this, a)
        }
        ,
        s.prototype.redISub = function(a) {
            return n(this.red, "redISub works only with red numbers"),
            this.red.isub(this, a)
        }
        ,
        s.prototype.redShl = function(a) {
            return n(this.red, "redShl works only with red numbers"),
            this.red.shl(this, a)
        }
        ,
        s.prototype.redMul = function(a) {
            return n(this.red, "redMul works only with red numbers"),
            this.red._verify2(this, a),
            this.red.mul(this, a)
        }
        ,
        s.prototype.redIMul = function(a) {
            return n(this.red, "redMul works only with red numbers"),
            this.red._verify2(this, a),
            this.red.imul(this, a)
        }
        ,
        s.prototype.redSqr = function() {
            return n(this.red, "redSqr works only with red numbers"),
            this.red._verify1(this),
            this.red.sqr(this)
        }
        ,
        s.prototype.redISqr = function() {
            return n(this.red, "redISqr works only with red numbers"),
            this.red._verify1(this),
            this.red.isqr(this)
        }
        ,
        s.prototype.redSqrt = function() {
            return n(this.red, "redSqrt works only with red numbers"),
            this.red._verify1(this),
            this.red.sqrt(this)
        }
        ,
        s.prototype.redInvm = function() {
            return n(this.red, "redInvm works only with red numbers"),
            this.red._verify1(this),
            this.red.invm(this)
        }
        ,
        s.prototype.redNeg = function() {
            return n(this.red, "redNeg works only with red numbers"),
            this.red._verify1(this),
            this.red.neg(this)
        }
        ,
        s.prototype.redPow = function(a) {
            return n(this.red && !a.red, "redPow(normalNum)"),
            this.red._verify1(this),
            this.red.pow(this, a)
        }
        ;
        var O = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };
        function D(v, a) {
            this.name = v,
            this.p = new s(a,16),
            this.n = this.p.bitLength(),
            this.k = new s(1).iushln(this.n).isub(this.p),
            this.tmp = this._tmp()
        }
        D.prototype._tmp = function() {
            var a = new s(null);
            return a.words = new Array(Math.ceil(this.n / 13)),
            a
        }
        ,
        D.prototype.ireduce = function(a) {
            var d = a, g;
            do
                this.split(d, this.tmp),
                d = this.imulK(d),
                d = d.iadd(this.tmp),
                g = d.bitLength();
            while (g > this.n);
            var m = g < this.n ? -1 : d.ucmp(this.p);
            return m === 0 ? (d.words[0] = 0,
            d.length = 1) : m > 0 ? d.isub(this.p) : d.strip !== void 0 ? d.strip() : d._strip(),
            d
        }
        ,
        D.prototype.split = function(a, d) {
            a.iushrn(this.n, 0, d)
        }
        ,
        D.prototype.imulK = function(a) {
            return a.imul(this.k)
        }
        ;
        function G() {
            D.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }
        i(G, D),
        G.prototype.split = function(a, d) {
            for (var g = 4194303, m = Math.min(a.length, 9), y = 0; y < m; y++)
                d.words[y] = a.words[y];
            if (d.length = m,
            a.length <= 9) {
                a.words[0] = 0,
                a.length = 1;
                return
            }
            var C = a.words[9];
            for (d.words[d.length++] = C & g,
            y = 10; y < a.length; y++) {
                var A = a.words[y] | 0;
                a.words[y - 10] = (A & g) << 4 | C >>> 22,
                C = A
            }
            C >>>= 22,
            a.words[y - 10] = C,
            C === 0 && a.length > 10 ? a.length -= 10 : a.length -= 9
        }
        ,
        G.prototype.imulK = function(a) {
            a.words[a.length] = 0,
            a.words[a.length + 1] = 0,
            a.length += 2;
            for (var d = 0, g = 0; g < a.length; g++) {
                var m = a.words[g] | 0;
                d += m * 977,
                a.words[g] = d & 67108863,
                d = m * 64 + (d / 67108864 | 0)
            }
            return a.words[a.length - 1] === 0 && (a.length--,
            a.words[a.length - 1] === 0 && a.length--),
            a
        }
        ;
        function V() {
            D.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }
        i(V, D);
        function H() {
            D.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }
        i(H, D);
        function X() {
            D.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }
        i(X, D),
        X.prototype.imulK = function(a) {
            for (var d = 0, g = 0; g < a.length; g++) {
                var m = (a.words[g] | 0) * 19 + d
                  , y = m & 67108863;
                m >>>= 26,
                a.words[g] = y,
                d = m
            }
            return d !== 0 && (a.words[a.length++] = d),
            a
        }
        ,
        s._prime = function(a) {
            if (O[a])
                return O[a];
            var d;
            if (a === "k256")
                d = new G;
            else if (a === "p224")
                d = new V;
            else if (a === "p192")
                d = new H;
            else if (a === "p25519")
                d = new X;
            else
                throw new Error("Unknown prime " + a);
            return O[a] = d,
            d
        }
        ;
        function Q(v) {
            if (typeof v == "string") {
                var a = s._prime(v);
                this.m = a.p,
                this.prime = a
            } else
                n(v.gtn(1), "modulus must be greater than 1"),
                this.m = v,
                this.prime = null
        }
        Q.prototype._verify1 = function(a) {
            n(a.negative === 0, "red works only with positives"),
            n(a.red, "red works only with red numbers")
        }
        ,
        Q.prototype._verify2 = function(a, d) {
            n((a.negative | d.negative) === 0, "red works only with positives"),
            n(a.red && a.red === d.red, "red works only with red numbers")
        }
        ,
        Q.prototype.imod = function(a) {
            return this.prime ? this.prime.ireduce(a)._forceRed(this) : (p(a, a.umod(this.m)._forceRed(this)),
            a)
        }
        ,
        Q.prototype.neg = function(a) {
            return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
        }
        ,
        Q.prototype.add = function(a, d) {
            this._verify2(a, d);
            var g = a.add(d);
            return g.cmp(this.m) >= 0 && g.isub(this.m),
            g._forceRed(this)
        }
        ,
        Q.prototype.iadd = function(a, d) {
            this._verify2(a, d);
            var g = a.iadd(d);
            return g.cmp(this.m) >= 0 && g.isub(this.m),
            g
        }
        ,
        Q.prototype.sub = function(a, d) {
            this._verify2(a, d);
            var g = a.sub(d);
            return g.cmpn(0) < 0 && g.iadd(this.m),
            g._forceRed(this)
        }
        ,
        Q.prototype.isub = function(a, d) {
            this._verify2(a, d);
            var g = a.isub(d);
            return g.cmpn(0) < 0 && g.iadd(this.m),
            g
        }
        ,
        Q.prototype.shl = function(a, d) {
            return this._verify1(a),
            this.imod(a.ushln(d))
        }
        ,
        Q.prototype.imul = function(a, d) {
            return this._verify2(a, d),
            this.imod(a.imul(d))
        }
        ,
        Q.prototype.mul = function(a, d) {
            return this._verify2(a, d),
            this.imod(a.mul(d))
        }
        ,
        Q.prototype.isqr = function(a) {
            return this.imul(a, a.clone())
        }
        ,
        Q.prototype.sqr = function(a) {
            return this.mul(a, a)
        }
        ,
        Q.prototype.sqrt = function(a) {
            if (a.isZero())
                return a.clone();
            var d = this.m.andln(3);
            if (n(d % 2 === 1),
            d === 3) {
                var g = this.m.add(new s(1)).iushrn(2);
                return this.pow(a, g)
            }
            for (var m = this.m.subn(1), y = 0; !m.isZero() && m.andln(1) === 0; )
                y++,
                m.iushrn(1);
            n(!m.isZero());
            var C = new s(1).toRed(this)
              , A = C.redNeg()
              , b = this.m.subn(1).iushrn(1)
              , h = this.m.bitLength();
            for (h = new s(2 * h * h).toRed(this); this.pow(h, b).cmp(A) !== 0; )
                h.redIAdd(A);
            for (var S = this.pow(h, m), W = this.pow(a, m.addn(1).iushrn(1)), q = this.pow(a, m), I = y; q.cmp(C) !== 0; ) {
                for (var T = q, B = 0; T.cmp(C) !== 0; B++)
                    T = T.redSqr();
                n(B < I);
                var U = this.pow(S, new s(1).iushln(I - B - 1));
                W = W.redMul(U),
                S = U.redSqr(),
                q = q.redMul(S),
                I = B
            }
            return W
        }
        ,
        Q.prototype.invm = function(a) {
            var d = a._invmp(this.m);
            return d.negative !== 0 ? (d.negative = 0,
            this.imod(d).redNeg()) : this.imod(d)
        }
        ,
        Q.prototype.pow = function(a, d) {
            if (d.isZero())
                return new s(1).toRed(this);
            if (d.cmpn(1) === 0)
                return a.clone();
            var g = 4
              , m = new Array(1 << g);
            m[0] = new s(1).toRed(this),
            m[1] = a;
            for (var y = 2; y < m.length; y++)
                m[y] = this.mul(m[y - 1], a);
            var C = m[0]
              , A = 0
              , b = 0
              , h = d.bitLength() % 26;
            for (h === 0 && (h = 26),
            y = d.length - 1; y >= 0; y--) {
                for (var S = d.words[y], W = h - 1; W >= 0; W--) {
                    var q = S >> W & 1;
                    if (C !== m[0] && (C = this.sqr(C)),
                    q === 0 && A === 0) {
                        b = 0;
                        continue
                    }
                    A <<= 1,
                    A |= q,
                    b++,
                    !(b !== g && (y !== 0 || W !== 0)) && (C = this.mul(C, m[A]),
                    b = 0,
                    A = 0)
                }
                h = 26
            }
            return C
        }
        ,
        Q.prototype.convertTo = function(a) {
            var d = a.umod(this.m);
            return d === a ? d.clone() : d
        }
        ,
        Q.prototype.convertFrom = function(a) {
            var d = a.clone();
            return d.red = null,
            d
        }
        ,
        s.mont = function(a) {
            return new ie(a)
        }
        ;
        function ie(v) {
            Q.call(this, v),
            this.shift = this.m.bitLength(),
            this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26),
            this.r = new s(1).iushln(this.shift),
            this.r2 = this.imod(this.r.sqr()),
            this.rinv = this.r._invmp(this.m),
            this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
            this.minv = this.minv.umod(this.r),
            this.minv = this.r.sub(this.minv)
        }
        i(ie, Q),
        ie.prototype.convertTo = function(a) {
            return this.imod(a.ushln(this.shift))
        }
        ,
        ie.prototype.convertFrom = function(a) {
            var d = this.imod(a.mul(this.rinv));
            return d.red = null,
            d
        }
        ,
        ie.prototype.imul = function(a, d) {
            if (a.isZero() || d.isZero())
                return a.words[0] = 0,
                a.length = 1,
                a;
            var g = a.imul(d)
              , m = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
              , y = g.isub(m).iushrn(this.shift)
              , C = y;
            return y.cmp(this.m) >= 0 ? C = y.isub(this.m) : y.cmpn(0) < 0 && (C = y.iadd(this.m)),
            C._forceRed(this)
        }
        ,
        ie.prototype.mul = function(a, d) {
            if (a.isZero() || d.isZero())
                return new s(0)._forceRed(this);
            var g = a.mul(d)
              , m = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
              , y = g.isub(m).iushrn(this.shift)
              , C = y;
            return y.cmp(this.m) >= 0 ? C = y.isub(this.m) : y.cmpn(0) < 0 && (C = y.iadd(this.m)),
            C._forceRed(this)
        }
        ,
        ie.prototype.invm = function(a) {
            var d = this.imod(a._invmp(this.m).mul(this.r2));
            return d._forceRed(this)
        }
    }
    )(e, J)
}
)(Uo);
var ji = Uo.exports
  , jn = {}
  , Ht = {};
Object.defineProperty(Ht, "__esModule", {
    value: !0
});
Ht.errorValues = Ht.standardErrorCodes = void 0;
Ht.standardErrorCodes = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
        unsupportedChain: 4902
    }
};
Ht.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    },
    4902: {
        standard: "EIP-3085",
        message: "Unrecognized chain ID."
    }
};
var Hi = {}
  , Ui = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.serialize = e.getErrorCode = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const t = Ht
      , r = "Unspecified error message.";
    e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
    function n(_, R=r) {
        if (_ && Number.isInteger(_)) {
            const x = _.toString();
            if (p(t.errorValues, x))
                return t.errorValues[x].message;
            if (l(_))
                return e.JSON_RPC_SERVER_ERROR_MESSAGE
        }
        return R
    }
    e.getMessageFromCode = n;
    function i(_) {
        if (!Number.isInteger(_))
            return !1;
        const R = _.toString();
        return !!(t.errorValues[R] || l(_))
    }
    e.isValidCode = i;
    function s(_) {
        var R;
        if (typeof _ == "number")
            return _;
        if (o(_))
            return (R = _.code) !== null && R !== void 0 ? R : _.errorCode
    }
    e.getErrorCode = s;
    function o(_) {
        return typeof _ == "object" && _ !== null && (typeof _.code == "number" || typeof _.errorCode == "number")
    }
    function c(_, {shouldIncludeStack: R=!1}={}) {
        const x = {};
        if (_ && typeof _ == "object" && !Array.isArray(_) && p(_, "code") && i(_.code)) {
            const P = _;
            x.code = P.code,
            P.message && typeof P.message == "string" ? (x.message = P.message,
            p(P, "data") && (x.data = P.data)) : (x.message = n(x.code),
            x.data = {
                originalError: u(_)
            })
        } else
            x.code = t.standardErrorCodes.rpc.internal,
            x.message = f(_, "message") ? _.message : r,
            x.data = {
                originalError: u(_)
            };
        return R && (x.stack = f(_, "stack") ? _.stack : void 0),
        x
    }
    e.serialize = c;
    function l(_) {
        return _ >= -32099 && _ <= -32e3
    }
    function u(_) {
        return _ && typeof _ == "object" && !Array.isArray(_) ? Object.assign({}, _) : _
    }
    function p(_, R) {
        return Object.prototype.hasOwnProperty.call(_, R)
    }
    function f(_, R) {
        return typeof _ == "object" && _ !== null && R in _ && typeof _[R] == "string"
    }
}
)(Ui);
Object.defineProperty(Hi, "__esModule", {
    value: !0
});
Hi.standardErrors = void 0;
const Xe = Ht
  , Il = Ui;
Hi.standardErrors = {
    rpc: {
        parse: e=>dt(Xe.standardErrorCodes.rpc.parse, e),
        invalidRequest: e=>dt(Xe.standardErrorCodes.rpc.invalidRequest, e),
        invalidParams: e=>dt(Xe.standardErrorCodes.rpc.invalidParams, e),
        methodNotFound: e=>dt(Xe.standardErrorCodes.rpc.methodNotFound, e),
        internal: e=>dt(Xe.standardErrorCodes.rpc.internal, e),
        server: e=>{
            if (!e || typeof e != "object" || Array.isArray(e))
                throw new Error("Ethereum RPC Server errors must provide single object argument.");
            const {code: t} = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return dt(t, e)
        }
        ,
        invalidInput: e=>dt(Xe.standardErrorCodes.rpc.invalidInput, e),
        resourceNotFound: e=>dt(Xe.standardErrorCodes.rpc.resourceNotFound, e),
        resourceUnavailable: e=>dt(Xe.standardErrorCodes.rpc.resourceUnavailable, e),
        transactionRejected: e=>dt(Xe.standardErrorCodes.rpc.transactionRejected, e),
        methodNotSupported: e=>dt(Xe.standardErrorCodes.rpc.methodNotSupported, e),
        limitExceeded: e=>dt(Xe.standardErrorCodes.rpc.limitExceeded, e)
    },
    provider: {
        userRejectedRequest: e=>qr(Xe.standardErrorCodes.provider.userRejectedRequest, e),
        unauthorized: e=>qr(Xe.standardErrorCodes.provider.unauthorized, e),
        unsupportedMethod: e=>qr(Xe.standardErrorCodes.provider.unsupportedMethod, e),
        disconnected: e=>qr(Xe.standardErrorCodes.provider.disconnected, e),
        chainDisconnected: e=>qr(Xe.standardErrorCodes.provider.chainDisconnected, e),
        unsupportedChain: e=>qr(Xe.standardErrorCodes.provider.unsupportedChain, e),
        custom: e=>{
            if (!e || typeof e != "object" || Array.isArray(e))
                throw new Error("Ethereum Provider custom errors must provide single object argument.");
            const {code: t, message: r, data: n} = e;
            if (!r || typeof r != "string")
                throw new Error('"message" must be a nonempty string');
            return new Tl(t,r,n)
        }
    }
};
function dt(e, t) {
    const [r,n] = xl(t);
    return new Al(e,r || (0,
    Il.getMessageFromCode)(e),n)
}
function qr(e, t) {
    const [r,n] = xl(t);
    return new Tl(e,r || (0,
    Il.getMessageFromCode)(e),n)
}
function xl(e) {
    if (e) {
        if (typeof e == "string")
            return [e];
        if (typeof e == "object" && !Array.isArray(e)) {
            const {message: t, data: r} = e;
            if (t && typeof t != "string")
                throw new Error("Must specify string message.");
            return [t || void 0, r]
        }
    }
    return []
}
let Al = class extends Error {
    constructor(t, r, n) {
        if (!Number.isInteger(t))
            throw new Error('"code" must be an integer.');
        if (!r || typeof r != "string")
            throw new Error('"message" must be a nonempty string.');
        super(r),
        this.code = t,
        n !== void 0 && (this.data = n)
    }
}
  , Tl = class extends Al {
    constructor(t, r, n) {
        if (!_d(t))
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(t, r, n)
    }
}
;
function _d(e) {
    return Number.isInteger(e) && e >= 1e3 && e <= 4999
}
var Wi = {}
  , _n = {};
Object.defineProperty(_n, "__esModule", {
    value: !0
});
_n.isErrorResponse = void 0;
function md(e) {
    return e.errorMessage !== void 0
}
_n.isErrorResponse = md;
var mn = {};
Object.defineProperty(mn, "__esModule", {
    value: !0
});
mn.LIB_VERSION = void 0;
mn.LIB_VERSION = "3.9.1";
Object.defineProperty(Wi, "__esModule", {
    value: !0
});
Wi.serializeError = void 0;
const vd = _n
  , bd = mn
  , yd = Ht
  , wd = Ui;
function Ed(e, t) {
    const r = (0,
    wd.serialize)(Sd(e), {
        shouldIncludeStack: !0
    })
      , n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
    n.searchParams.set("version", bd.LIB_VERSION),
    n.searchParams.set("code", r.code.toString());
    const i = Rd(r.data, t);
    return i && n.searchParams.set("method", i),
    n.searchParams.set("message", r.message),
    Object.assign(Object.assign({}, r), {
        docUrl: n.href
    })
}
Wi.serializeError = Ed;
function Sd(e) {
    return typeof e == "string" ? {
        message: e,
        code: yd.standardErrorCodes.rpc.internal
    } : (0,
    vd.isErrorResponse)(e) ? Object.assign(Object.assign({}, e), {
        message: e.errorMessage,
        code: e.errorCode,
        data: {
            method: e.method
        }
    }) : e
}
function Rd(e, t) {
    const r = e == null ? void 0 : e.method;
    if (r)
        return r;
    if (t !== void 0) {
        if (typeof t == "string")
            return t;
        if (Array.isArray(t)) {
            if (t.length > 0)
                return t[0].method
        } else
            return t.method
    }
}
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.standardErrors = e.standardErrorCodes = e.serializeError = e.getMessageFromCode = e.getErrorCode = void 0;
    const t = Ht;
    Object.defineProperty(e, "standardErrorCodes", {
        enumerable: !0,
        get: function() {
            return t.standardErrorCodes
        }
    });
    const r = Hi;
    Object.defineProperty(e, "standardErrors", {
        enumerable: !0,
        get: function() {
            return r.standardErrors
        }
    });
    const n = Wi;
    Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function() {
            return n.serializeError
        }
    });
    const i = Ui;
    Object.defineProperty(e, "getErrorCode", {
        enumerable: !0,
        get: function() {
            return i.getErrorCode
        }
    }),
    Object.defineProperty(e, "getMessageFromCode", {
        enumerable: !0,
        get: function() {
            return i.getMessageFromCode
        }
    })
}
)(jn);
var Je = {};
Object.defineProperty(Je, "__esModule", {
    value: !0
});
Je.ProviderType = Je.RegExpString = Je.IntNumber = Je.BigIntString = Je.AddressString = Je.HexString = Je.OpaqueType = void 0;
function Hn() {
    return e=>e
}
Je.OpaqueType = Hn;
Je.HexString = Hn();
Je.AddressString = Hn();
Je.BigIntString = Hn();
function Md(e) {
    return Math.floor(e)
}
Je.IntNumber = Md;
Je.RegExpString = Hn();
var Oa;
(function(e) {
    e.CoinbaseWallet = "CoinbaseWallet",
    e.MetaMask = "MetaMask",
    e.Unselected = ""
}
)(Oa || (Je.ProviderType = Oa = {}));
var Cd = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(z, "__esModule", {
    value: !0
});
z.isMobileWeb = z.getLocation = z.isInIFrame = z.createQrUrl = z.getFavicon = z.range = z.isBigNumber = z.ensureParsedJSONObject = z.ensureBN = z.ensureRegExpString = z.ensureIntNumber = z.ensureBuffer = z.ensureAddressString = z.ensureEvenLengthHexString = z.ensureHexString = z.isHexString = z.prepend0x = z.strip0x = z.has0xPrefix = z.hexStringFromIntNumber = z.intNumberFromHexString = z.bigIntStringFromBN = z.hexStringFromBuffer = z.hexStringToUint8Array = z.uint8ArrayToHex = z.randomBytesHex = void 0;
const Gt = Cd(ji)
  , Ir = jn
  , _t = Je
  , Nl = /^[0-9]*$/
  , Ll = /^[a-f0-9]*$/;
function kd(e) {
    return Ol(crypto.getRandomValues(new Uint8Array(e)))
}
z.randomBytesHex = kd;
function Ol(e) {
    return [...e].map(t=>t.toString(16).padStart(2, "0")).join("")
}
z.uint8ArrayToHex = Ol;
function Id(e) {
    return new Uint8Array(e.match(/.{1,2}/g).map(t=>parseInt(t, 16)))
}
z.hexStringToUint8Array = Id;
function xd(e, t=!1) {
    const r = e.toString("hex");
    return (0,
    _t.HexString)(t ? `0x${r}` : r)
}
z.hexStringFromBuffer = xd;
function Ad(e) {
    return (0,
    _t.BigIntString)(e.toString(10))
}
z.bigIntStringFromBN = Ad;
function Td(e) {
    return (0,
    _t.IntNumber)(new Gt.default(Wn(e, !1),16).toNumber())
}
z.intNumberFromHexString = Td;
function Nd(e) {
    return (0,
    _t.HexString)(`0x${new Gt.default(e).toString(16)}`)
}
z.hexStringFromIntNumber = Nd;
function Wo(e) {
    return e.startsWith("0x") || e.startsWith("0X")
}
z.has0xPrefix = Wo;
function Vi(e) {
    return Wo(e) ? e.slice(2) : e
}
z.strip0x = Vi;
function Pl(e) {
    return Wo(e) ? `0x${e.slice(2)}` : `0x${e}`
}
z.prepend0x = Pl;
function Un(e) {
    if (typeof e != "string")
        return !1;
    const t = Vi(e).toLowerCase();
    return Ll.test(t)
}
z.isHexString = Un;
function $l(e, t=!1) {
    if (typeof e == "string") {
        const r = Vi(e).toLowerCase();
        if (Ll.test(r))
            return (0,
            _t.HexString)(t ? `0x${r}` : r)
    }
    throw Ir.standardErrors.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`)
}
z.ensureHexString = $l;
function Wn(e, t=!1) {
    let r = $l(e, !1);
    return r.length % 2 === 1 && (r = (0,
    _t.HexString)(`0${r}`)),
    t ? (0,
    _t.HexString)(`0x${r}`) : r
}
z.ensureEvenLengthHexString = Wn;
function Ld(e) {
    if (typeof e == "string") {
        const t = Vi(e).toLowerCase();
        if (Un(t) && t.length === 40)
            return (0,
            _t.AddressString)(Pl(t))
    }
    throw Ir.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`)
}
z.ensureAddressString = Ld;
function Od(e) {
    if (Buffer.isBuffer(e))
        return e;
    if (typeof e == "string") {
        if (Un(e)) {
            const t = Wn(e, !1);
            return Buffer.from(t, "hex")
        }
        return Buffer.from(e, "utf8")
    }
    throw Ir.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`)
}
z.ensureBuffer = Od;
function Bl(e) {
    if (typeof e == "number" && Number.isInteger(e))
        return (0,
        _t.IntNumber)(e);
    if (typeof e == "string") {
        if (Nl.test(e))
            return (0,
            _t.IntNumber)(Number(e));
        if (Un(e))
            return (0,
            _t.IntNumber)(new Gt.default(Wn(e, !1),16).toNumber())
    }
    throw Ir.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
}
z.ensureIntNumber = Bl;
function Pd(e) {
    if (e instanceof RegExp)
        return (0,
        _t.RegExpString)(e.toString());
    throw Ir.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`)
}
z.ensureRegExpString = Pd;
function $d(e) {
    if (e !== null && (Gt.default.isBN(e) || Dl(e)))
        return new Gt.default(e.toString(10),10);
    if (typeof e == "number")
        return new Gt.default(Bl(e));
    if (typeof e == "string") {
        if (Nl.test(e))
            return new Gt.default(e,10);
        if (Un(e))
            return new Gt.default(Wn(e, !1),16)
    }
    throw Ir.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
}
z.ensureBN = $d;
function Bd(e) {
    if (typeof e == "string")
        return JSON.parse(e);
    if (typeof e == "object")
        return e;
    throw Ir.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`)
}
z.ensureParsedJSONObject = Bd;
function Dl(e) {
    if (e == null || typeof e.constructor != "function")
        return !1;
    const {constructor: t} = e;
    return typeof t.config == "function" && typeof t.EUCLID == "number"
}
z.isBigNumber = Dl;
function Dd(e, t) {
    return Array.from({
        length: t - e
    }, (r,n)=>e + n)
}
z.range = Dd;
function Fd() {
    const e = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]')
      , {protocol: t, host: r} = document.location
      , n = e ? e.getAttribute("href") : null;
    return !n || n.startsWith("javascript:") || n.startsWith("vbscript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? t + n : `${t}//${r}${n}`
}
z.getFavicon = Fd;
function jd(e, t, r, n, i, s) {
    const o = n ? "parent-id" : "id"
      , c = new URLSearchParams({
        [o]: e,
        secret: t,
        server: r,
        v: i,
        chainId: s.toString()
    }).toString();
    return `${r}/#/link?${c}`
}
z.createQrUrl = jd;
function Fl() {
    try {
        return window.frameElement !== null
    } catch {
        return !1
    }
}
z.isInIFrame = Fl;
function Hd() {
    try {
        return Fl() && window.top ? window.top.location : window.location
    } catch {
        return window.location
    }
}
z.getLocation = Hd;
function Ud() {
    var e;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((e = window == null ? void 0 : window.navigator) === null || e === void 0 ? void 0 : e.userAgent)
}
z.isMobileWeb = Ud;
var qi = {};
Object.defineProperty(qi, "__esModule", {
    value: !0
});
qi.ScopedLocalStorage = void 0;
class Wd {
    constructor(t) {
        this.scope = t
    }
    setItem(t, r) {
        localStorage.setItem(this.scopedKey(t), r)
    }
    getItem(t) {
        return localStorage.getItem(this.scopedKey(t))
    }
    removeItem(t) {
        localStorage.removeItem(this.scopedKey(t))
    }
    clear() {
        const t = this.scopedKey("")
          , r = [];
        for (let n = 0; n < localStorage.length; n++) {
            const i = localStorage.key(n);
            typeof i == "string" && i.startsWith(t) && r.push(i)
        }
        r.forEach(n=>localStorage.removeItem(n))
    }
    scopedKey(t) {
        return `${this.scope}:${t}`
    }
}
qi.ScopedLocalStorage = Wd;
var on = {};
const Vd = gn(pd);
var Vn = {}
  , qn = {}
  , vn = {};
Object.defineProperty(vn, "__esModule", {
    value: !0
});
vn.EVENTS = void 0;
vn.EVENTS = {
    STARTED_CONNECTING: "walletlink_sdk.started.connecting",
    CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
    DISCONNECTED: "walletlink_sdk.disconnected",
    METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
    LINKED: "walletlink_sdk.linked",
    FAILURE: "walletlink_sdk.generic_failure",
    SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
    ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
    SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
    UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
    SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
    GENERAL_ERROR: "walletlink_sdk.general_error",
    WEB3_REQUEST: "walletlink_sdk.web3.request",
    WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
    WEB3_RESPONSE: "walletlink_sdk.web3.response",
    METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
    UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
};
var gt = {};
Object.defineProperty(gt, "__esModule", {
    value: !0
});
gt.RelayAbstract = gt.APP_VERSION_KEY = gt.LOCAL_STORAGE_ADDRESSES_KEY = gt.WALLET_USER_NAME_KEY = void 0;
const Pa = jn;
gt.WALLET_USER_NAME_KEY = "walletUsername";
gt.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
gt.APP_VERSION_KEY = "AppVersion";
class qd {
    async makeEthereumJSONRPCRequest(t, r) {
        if (!r)
            throw new Error("Error: No jsonRpcUrl provided");
        return window.fetch(r, {
            method: "POST",
            body: JSON.stringify(t),
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(n=>n.json()).then(n=>{
            if (!n)
                throw Pa.standardErrors.rpc.parse({});
            const i = n
              , {error: s} = i;
            if (s)
                throw (0,
                Pa.serializeError)(s, t.method);
            return i
        }
        )
    }
}
gt.RelayAbstract = qd;
var bn = {}
  , jl = {
    exports: {}
}
  , Eo = {
    exports: {}
};
typeof Object.create == "function" ? Eo.exports = function(t, r) {
    r && (t.super_ = r,
    t.prototype = Object.create(r.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }))
}
: Eo.exports = function(t, r) {
    if (r) {
        t.super_ = r;
        var n = function() {};
        n.prototype = r.prototype,
        t.prototype = new n,
        t.prototype.constructor = t
    }
}
;
var Et = Eo.exports
  , So = {
    exports: {}
};
(function(e, t) {
    var r = Bi
      , n = r.Buffer;
    function i(o, c) {
        for (var l in o)
            c[l] = o[l]
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (i(r, t),
    t.Buffer = s);
    function s(o, c, l) {
        return n(o, c, l)
    }
    i(n, s),
    s.from = function(o, c, l) {
        if (typeof o == "number")
            throw new TypeError("Argument must not be a number");
        return n(o, c, l)
    }
    ,
    s.alloc = function(o, c, l) {
        if (typeof o != "number")
            throw new TypeError("Argument must be a number");
        var u = n(o);
        return c !== void 0 ? typeof l == "string" ? u.fill(c, l) : u.fill(c) : u.fill(0),
        u
    }
    ,
    s.allocUnsafe = function(o) {
        if (typeof o != "number")
            throw new TypeError("Argument must be a number");
        return n(o)
    }
    ,
    s.allocUnsafeSlow = function(o) {
        if (typeof o != "number")
            throw new TypeError("Argument must be a number");
        return r.SlowBuffer(o)
    }
}
)(So, So.exports);
var Qt = So.exports
  , Hl = Qt.Buffer;
function zi(e, t) {
    this._block = Hl.alloc(e),
    this._finalSize = t,
    this._blockSize = e,
    this._len = 0
}
zi.prototype.update = function(e, t) {
    typeof e == "string" && (t = t || "utf8",
    e = Hl.from(e, t));
    for (var r = this._block, n = this._blockSize, i = e.length, s = this._len, o = 0; o < i; ) {
        for (var c = s % n, l = Math.min(i - o, n - c), u = 0; u < l; u++)
            r[c + u] = e[o + u];
        s += l,
        o += l,
        s % n === 0 && this._update(r)
    }
    return this._len += i,
    this
}
;
zi.prototype.digest = function(e) {
    var t = this._len % this._blockSize;
    this._block[t] = 128,
    this._block.fill(0, t + 1),
    t >= this._finalSize && (this._update(this._block),
    this._block.fill(0));
    var r = this._len * 8;
    if (r <= 4294967295)
        this._block.writeUInt32BE(r, this._blockSize - 4);
    else {
        var n = (r & 4294967295) >>> 0
          , i = (r - n) / 4294967296;
        this._block.writeUInt32BE(i, this._blockSize - 8),
        this._block.writeUInt32BE(n, this._blockSize - 4)
    }
    this._update(this._block);
    var s = this._hash();
    return e ? s.toString(e) : s
}
;
zi.prototype._update = function() {
    throw new Error("_update must be implemented by subclass")
}
;
var yn = zi
  , zd = Et
  , Ul = yn
  , Gd = Qt.Buffer
  , Jd = [1518500249, 1859775393, -1894007588, -899497514]
  , Zd = new Array(80);
function zn() {
    this.init(),
    this._w = Zd,
    Ul.call(this, 64, 56)
}
zd(zn, Ul);
zn.prototype.init = function() {
    return this._a = 1732584193,
    this._b = 4023233417,
    this._c = 2562383102,
    this._d = 271733878,
    this._e = 3285377520,
    this
}
;
function Kd(e) {
    return e << 5 | e >>> 27
}
function Qd(e) {
    return e << 30 | e >>> 2
}
function Yd(e, t, r, n) {
    return e === 0 ? t & r | ~t & n : e === 2 ? t & r | t & n | r & n : t ^ r ^ n
}
zn.prototype._update = function(e) {
    for (var t = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, c = 0; c < 16; ++c)
        t[c] = e.readInt32BE(c * 4);
    for (; c < 80; ++c)
        t[c] = t[c - 3] ^ t[c - 8] ^ t[c - 14] ^ t[c - 16];
    for (var l = 0; l < 80; ++l) {
        var u = ~~(l / 20)
          , p = Kd(r) + Yd(u, n, i, s) + o + t[l] + Jd[u] | 0;
        o = s,
        s = i,
        i = Qd(n),
        n = r,
        r = p
    }
    this._a = r + this._a | 0,
    this._b = n + this._b | 0,
    this._c = i + this._c | 0,
    this._d = s + this._d | 0,
    this._e = o + this._e | 0
}
;
zn.prototype._hash = function() {
    var e = Gd.allocUnsafe(20);
    return e.writeInt32BE(this._a | 0, 0),
    e.writeInt32BE(this._b | 0, 4),
    e.writeInt32BE(this._c | 0, 8),
    e.writeInt32BE(this._d | 0, 12),
    e.writeInt32BE(this._e | 0, 16),
    e
}
;
var Xd = zn
  , ef = Et
  , Wl = yn
  , tf = Qt.Buffer
  , rf = [1518500249, 1859775393, -1894007588, -899497514]
  , nf = new Array(80);
function Gn() {
    this.init(),
    this._w = nf,
    Wl.call(this, 64, 56)
}
ef(Gn, Wl);
Gn.prototype.init = function() {
    return this._a = 1732584193,
    this._b = 4023233417,
    this._c = 2562383102,
    this._d = 271733878,
    this._e = 3285377520,
    this
}
;
function sf(e) {
    return e << 1 | e >>> 31
}
function of(e) {
    return e << 5 | e >>> 27
}
function af(e) {
    return e << 30 | e >>> 2
}
function cf(e, t, r, n) {
    return e === 0 ? t & r | ~t & n : e === 2 ? t & r | t & n | r & n : t ^ r ^ n
}
Gn.prototype._update = function(e) {
    for (var t = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, c = 0; c < 16; ++c)
        t[c] = e.readInt32BE(c * 4);
    for (; c < 80; ++c)
        t[c] = sf(t[c - 3] ^ t[c - 8] ^ t[c - 14] ^ t[c - 16]);
    for (var l = 0; l < 80; ++l) {
        var u = ~~(l / 20)
          , p = of(r) + cf(u, n, i, s) + o + t[l] + rf[u] | 0;
        o = s,
        s = i,
        i = af(n),
        n = r,
        r = p
    }
    this._a = r + this._a | 0,
    this._b = n + this._b | 0,
    this._c = i + this._c | 0,
    this._d = s + this._d | 0,
    this._e = o + this._e | 0
}
;
Gn.prototype._hash = function() {
    var e = tf.allocUnsafe(20);
    return e.writeInt32BE(this._a | 0, 0),
    e.writeInt32BE(this._b | 0, 4),
    e.writeInt32BE(this._c | 0, 8),
    e.writeInt32BE(this._d | 0, 12),
    e.writeInt32BE(this._e | 0, 16),
    e
}
;
var lf = Gn
  , uf = Et
  , Vl = yn
  , hf = Qt.Buffer
  , df = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
  , ff = new Array(64);
function Jn() {
    this.init(),
    this._w = ff,
    Vl.call(this, 64, 56)
}
uf(Jn, Vl);
Jn.prototype.init = function() {
    return this._a = 1779033703,
    this._b = 3144134277,
    this._c = 1013904242,
    this._d = 2773480762,
    this._e = 1359893119,
    this._f = 2600822924,
    this._g = 528734635,
    this._h = 1541459225,
    this
}
;
function pf(e, t, r) {
    return r ^ e & (t ^ r)
}
function gf(e, t, r) {
    return e & t | r & (e | t)
}
function _f(e) {
    return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
}
function mf(e) {
    return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
}
function vf(e) {
    return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
}
function bf(e) {
    return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10
}
Jn.prototype._update = function(e) {
    for (var t = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, c = this._f | 0, l = this._g | 0, u = this._h | 0, p = 0; p < 16; ++p)
        t[p] = e.readInt32BE(p * 4);
    for (; p < 64; ++p)
        t[p] = bf(t[p - 2]) + t[p - 7] + vf(t[p - 15]) + t[p - 16] | 0;
    for (var f = 0; f < 64; ++f) {
        var _ = u + mf(o) + pf(o, c, l) + df[f] + t[f] | 0
          , R = _f(r) + gf(r, n, i) | 0;
        u = l,
        l = c,
        c = o,
        o = s + _ | 0,
        s = i,
        i = n,
        n = r,
        r = _ + R | 0
    }
    this._a = r + this._a | 0,
    this._b = n + this._b | 0,
    this._c = i + this._c | 0,
    this._d = s + this._d | 0,
    this._e = o + this._e | 0,
    this._f = c + this._f | 0,
    this._g = l + this._g | 0,
    this._h = u + this._h | 0
}
;
Jn.prototype._hash = function() {
    var e = hf.allocUnsafe(32);
    return e.writeInt32BE(this._a, 0),
    e.writeInt32BE(this._b, 4),
    e.writeInt32BE(this._c, 8),
    e.writeInt32BE(this._d, 12),
    e.writeInt32BE(this._e, 16),
    e.writeInt32BE(this._f, 20),
    e.writeInt32BE(this._g, 24),
    e.writeInt32BE(this._h, 28),
    e
}
;
var ql = Jn
  , yf = Et
  , wf = ql
  , Ef = yn
  , Sf = Qt.Buffer
  , Rf = new Array(64);
function Gi() {
    this.init(),
    this._w = Rf,
    Ef.call(this, 64, 56)
}
yf(Gi, wf);
Gi.prototype.init = function() {
    return this._a = 3238371032,
    this._b = 914150663,
    this._c = 812702999,
    this._d = 4144912697,
    this._e = 4290775857,
    this._f = 1750603025,
    this._g = 1694076839,
    this._h = 3204075428,
    this
}
;
Gi.prototype._hash = function() {
    var e = Sf.allocUnsafe(28);
    return e.writeInt32BE(this._a, 0),
    e.writeInt32BE(this._b, 4),
    e.writeInt32BE(this._c, 8),
    e.writeInt32BE(this._d, 12),
    e.writeInt32BE(this._e, 16),
    e.writeInt32BE(this._f, 20),
    e.writeInt32BE(this._g, 24),
    e
}
;
var Mf = Gi
  , Cf = Et
  , zl = yn
  , kf = Qt.Buffer
  , $a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
  , If = new Array(160);
function Zn() {
    this.init(),
    this._w = If,
    zl.call(this, 128, 112)
}
Cf(Zn, zl);
Zn.prototype.init = function() {
    return this._ah = 1779033703,
    this._bh = 3144134277,
    this._ch = 1013904242,
    this._dh = 2773480762,
    this._eh = 1359893119,
    this._fh = 2600822924,
    this._gh = 528734635,
    this._hh = 1541459225,
    this._al = 4089235720,
    this._bl = 2227873595,
    this._cl = 4271175723,
    this._dl = 1595750129,
    this._el = 2917565137,
    this._fl = 725511199,
    this._gl = 4215389547,
    this._hl = 327033209,
    this
}
;
function Ba(e, t, r) {
    return r ^ e & (t ^ r)
}
function Da(e, t, r) {
    return e & t | r & (e | t)
}
function Fa(e, t) {
    return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
}
function ja(e, t) {
    return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
}
function xf(e, t) {
    return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
}
function Af(e, t) {
    return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
}
function Tf(e, t) {
    return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
}
function Nf(e, t) {
    return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
}
function Ke(e, t) {
    return e >>> 0 < t >>> 0 ? 1 : 0
}
Zn.prototype._update = function(e) {
    for (var t = this._w, r = this._ah | 0, n = this._bh | 0, i = this._ch | 0, s = this._dh | 0, o = this._eh | 0, c = this._fh | 0, l = this._gh | 0, u = this._hh | 0, p = this._al | 0, f = this._bl | 0, _ = this._cl | 0, R = this._dl | 0, x = this._el | 0, P = this._fl | 0, L = this._gl | 0, M = this._hl | 0, k = 0; k < 32; k += 2)
        t[k] = e.readInt32BE(k * 4),
        t[k + 1] = e.readInt32BE(k * 4 + 4);
    for (; k < 160; k += 2) {
        var N = t[k - 30]
          , $ = t[k - 15 * 2 + 1]
          , O = xf(N, $)
          , D = Af($, N);
        N = t[k - 2 * 2],
        $ = t[k - 2 * 2 + 1];
        var G = Tf(N, $)
          , V = Nf($, N)
          , H = t[k - 7 * 2]
          , X = t[k - 7 * 2 + 1]
          , Q = t[k - 16 * 2]
          , ie = t[k - 16 * 2 + 1]
          , v = D + X | 0
          , a = O + H + Ke(v, D) | 0;
        v = v + V | 0,
        a = a + G + Ke(v, V) | 0,
        v = v + ie | 0,
        a = a + Q + Ke(v, ie) | 0,
        t[k] = a,
        t[k + 1] = v
    }
    for (var d = 0; d < 160; d += 2) {
        a = t[d],
        v = t[d + 1];
        var g = Da(r, n, i)
          , m = Da(p, f, _)
          , y = Fa(r, p)
          , C = Fa(p, r)
          , A = ja(o, x)
          , b = ja(x, o)
          , h = $a[d]
          , S = $a[d + 1]
          , W = Ba(o, c, l)
          , q = Ba(x, P, L)
          , I = M + b | 0
          , T = u + A + Ke(I, M) | 0;
        I = I + q | 0,
        T = T + W + Ke(I, q) | 0,
        I = I + S | 0,
        T = T + h + Ke(I, S) | 0,
        I = I + v | 0,
        T = T + a + Ke(I, v) | 0;
        var B = C + m | 0
          , U = y + g + Ke(B, C) | 0;
        u = l,
        M = L,
        l = c,
        L = P,
        c = o,
        P = x,
        x = R + I | 0,
        o = s + T + Ke(x, R) | 0,
        s = i,
        R = _,
        i = n,
        _ = f,
        n = r,
        f = p,
        p = I + B | 0,
        r = T + U + Ke(p, I) | 0
    }
    this._al = this._al + p | 0,
    this._bl = this._bl + f | 0,
    this._cl = this._cl + _ | 0,
    this._dl = this._dl + R | 0,
    this._el = this._el + x | 0,
    this._fl = this._fl + P | 0,
    this._gl = this._gl + L | 0,
    this._hl = this._hl + M | 0,
    this._ah = this._ah + r + Ke(this._al, p) | 0,
    this._bh = this._bh + n + Ke(this._bl, f) | 0,
    this._ch = this._ch + i + Ke(this._cl, _) | 0,
    this._dh = this._dh + s + Ke(this._dl, R) | 0,
    this._eh = this._eh + o + Ke(this._el, x) | 0,
    this._fh = this._fh + c + Ke(this._fl, P) | 0,
    this._gh = this._gh + l + Ke(this._gl, L) | 0,
    this._hh = this._hh + u + Ke(this._hl, M) | 0
}
;
Zn.prototype._hash = function() {
    var e = kf.allocUnsafe(64);
    function t(r, n, i) {
        e.writeInt32BE(r, i),
        e.writeInt32BE(n, i + 4)
    }
    return t(this._ah, this._al, 0),
    t(this._bh, this._bl, 8),
    t(this._ch, this._cl, 16),
    t(this._dh, this._dl, 24),
    t(this._eh, this._el, 32),
    t(this._fh, this._fl, 40),
    t(this._gh, this._gl, 48),
    t(this._hh, this._hl, 56),
    e
}
;
var Gl = Zn
  , Lf = Et
  , Of = Gl
  , Pf = yn
  , $f = Qt.Buffer
  , Bf = new Array(160);
function Ji() {
    this.init(),
    this._w = Bf,
    Pf.call(this, 128, 112)
}
Lf(Ji, Of);
Ji.prototype.init = function() {
    return this._ah = 3418070365,
    this._bh = 1654270250,
    this._ch = 2438529370,
    this._dh = 355462360,
    this._eh = 1731405415,
    this._fh = 2394180231,
    this._gh = 3675008525,
    this._hh = 1203062813,
    this._al = 3238371032,
    this._bl = 914150663,
    this._cl = 812702999,
    this._dl = 4144912697,
    this._el = 4290775857,
    this._fl = 1750603025,
    this._gl = 1694076839,
    this._hl = 3204075428,
    this
}
;
Ji.prototype._hash = function() {
    var e = $f.allocUnsafe(48);
    function t(r, n, i) {
        e.writeInt32BE(r, i),
        e.writeInt32BE(n, i + 4)
    }
    return t(this._ah, this._al, 0),
    t(this._bh, this._bl, 8),
    t(this._ch, this._cl, 16),
    t(this._dh, this._dl, 24),
    t(this._eh, this._el, 32),
    t(this._fh, this._fl, 40),
    e
}
;
var Df = Ji
  , xr = jl.exports = function(t) {
    t = t.toLowerCase();
    var r = xr[t];
    if (!r)
        throw new Error(t + " is not supported (we accept pull requests)");
    return new r
}
;
xr.sha = Xd;
xr.sha1 = lf;
xr.sha224 = Mf;
xr.sha256 = ql;
xr.sha384 = Df;
xr.sha512 = Gl;
var Ff = jl.exports;
Object.defineProperty(bn, "__esModule", {
    value: !0
});
bn.Session = void 0;
const Ha = Ff
  , Ua = z
  , Wa = "session:id"
  , Va = "session:secret"
  , qa = "session:linked";
class Vo {
    constructor(t, r, n, i) {
        this._storage = t,
        this._id = r || (0,
        Ua.randomBytesHex)(16),
        this._secret = n || (0,
        Ua.randomBytesHex)(32),
        this._key = new Ha.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"),
        this._linked = !!i
    }
    static load(t) {
        const r = t.getItem(Wa)
          , n = t.getItem(qa)
          , i = t.getItem(Va);
        return r && i ? new Vo(t,r,i,n === "1") : null
    }
    static hash(t) {
        return new Ha.sha256().update(t).digest("hex")
    }
    get id() {
        return this._id
    }
    get secret() {
        return this._secret
    }
    get key() {
        return this._key
    }
    get linked() {
        return this._linked
    }
    set linked(t) {
        this._linked = t,
        this.persistLinked()
    }
    save() {
        return this._storage.setItem(Wa, this._id),
        this._storage.setItem(Va, this._secret),
        this.persistLinked(),
        this
    }
    persistLinked() {
        this._storage.setItem(qa, this._linked ? "1" : "0")
    }
}
bn.Session = Vo;
var Zi = {}
  , Ki = {};
Object.defineProperty(Ki, "__esModule", {
    value: !0
});
Ki.Cipher = void 0;
const di = z;
class jf {
    constructor(t) {
        this.secret = t
    }
    async encrypt(t) {
        const r = this.secret;
        if (r.length !== 64)
            throw Error("secret must be 256 bits");
        const n = crypto.getRandomValues(new Uint8Array(12))
          , i = await crypto.subtle.importKey("raw", (0,
        di.hexStringToUint8Array)(r), {
            name: "aes-gcm"
        }, !1, ["encrypt", "decrypt"])
          , s = new TextEncoder
          , o = await window.crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: n
        }, i, s.encode(t))
          , c = 16
          , l = o.slice(o.byteLength - c)
          , u = o.slice(0, o.byteLength - c)
          , p = new Uint8Array(l)
          , f = new Uint8Array(u)
          , _ = new Uint8Array([...n, ...p, ...f]);
        return (0,
        di.uint8ArrayToHex)(_)
    }
    async decrypt(t) {
        const r = this.secret;
        if (r.length !== 64)
            throw Error("secret must be 256 bits");
        return new Promise((n,i)=>{
            (async function() {
                const s = await crypto.subtle.importKey("raw", (0,
                di.hexStringToUint8Array)(r), {
                    name: "aes-gcm"
                }, !1, ["encrypt", "decrypt"])
                  , o = (0,
                di.hexStringToUint8Array)(t)
                  , c = o.slice(0, 12)
                  , l = o.slice(12, 28)
                  , u = o.slice(28)
                  , p = new Uint8Array([...u, ...l])
                  , f = {
                    name: "AES-GCM",
                    iv: new Uint8Array(c)
                };
                try {
                    const _ = await window.crypto.subtle.decrypt(f, s, p)
                      , R = new TextDecoder;
                    n(R.decode(_))
                } catch (_) {
                    i(_)
                }
            }
            )()
        }
        )
    }
}
Ki.Cipher = jf;
var Qi = {};
Object.defineProperty(Qi, "__esModule", {
    value: !0
});
Qi.WalletLinkHTTP = void 0;
class Hf {
    constructor(t, r, n) {
        this.linkAPIUrl = t,
        this.sessionId = r;
        const i = `${r}:${n}`;
        this.auth = `Basic ${btoa(i)}`
    }
    async markUnseenEventsAsSeen(t) {
        return Promise.all(t.map(r=>fetch(`${this.linkAPIUrl}/events/${r.eventId}/seen`, {
            method: "POST",
            headers: {
                Authorization: this.auth
            }
        }))).catch(r=>console.error("Unabled to mark event as failed:", r))
    }
    async fetchUnseenEvents() {
        var t;
        const r = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: {
                Authorization: this.auth
            }
        });
        if (r.ok) {
            const {events: n, error: i} = await r.json();
            if (i)
                throw new Error(`Check unseen events failed: ${i}`);
            const s = (t = n == null ? void 0 : n.filter(o=>o.event === "Web3Response").map(o=>({
                type: "Event",
                sessionId: this.sessionId,
                eventId: o.id,
                event: o.event,
                data: o.data
            }))) !== null && t !== void 0 ? t : [];
            return this.markUnseenEventsAsSeen(s),
            s
        }
        throw new Error(`Check unseen events failed: ${r.status}`)
    }
}
Qi.WalletLinkHTTP = Hf;
var an = {};
Object.defineProperty(an, "__esModule", {
    value: !0
});
an.WalletLinkWebSocket = an.ConnectionState = void 0;
var Xr;
(function(e) {
    e[e.DISCONNECTED = 0] = "DISCONNECTED",
    e[e.CONNECTING = 1] = "CONNECTING",
    e[e.CONNECTED = 2] = "CONNECTED"
}
)(Xr || (an.ConnectionState = Xr = {}));
class Uf {
    setConnectionStateListener(t) {
        this.connectionStateListener = t
    }
    setIncomingDataListener(t) {
        this.incomingDataListener = t
    }
    constructor(t, r=WebSocket) {
        this.WebSocketClass = r,
        this.webSocket = null,
        this.pendingData = [],
        this.url = t.replace(/^http/, "ws")
    }
    async connect() {
        if (this.webSocket)
            throw new Error("webSocket object is not null");
        return new Promise((t,r)=>{
            var n;
            let i;
            try {
                this.webSocket = i = new this.WebSocketClass(this.url)
            } catch (s) {
                r(s);
                return
            }
            (n = this.connectionStateListener) === null || n === void 0 || n.call(this, Xr.CONNECTING),
            i.onclose = s=>{
                var o;
                this.clearWebSocket(),
                r(new Error(`websocket error ${s.code}: ${s.reason}`)),
                (o = this.connectionStateListener) === null || o === void 0 || o.call(this, Xr.DISCONNECTED)
            }
            ,
            i.onopen = s=>{
                var o;
                t(),
                (o = this.connectionStateListener) === null || o === void 0 || o.call(this, Xr.CONNECTED),
                this.pendingData.length > 0 && ([...this.pendingData].forEach(l=>this.sendData(l)),
                this.pendingData = [])
            }
            ,
            i.onmessage = s=>{
                var o, c;
                if (s.data === "h")
                    (o = this.incomingDataListener) === null || o === void 0 || o.call(this, {
                        type: "Heartbeat"
                    });
                else
                    try {
                        const l = JSON.parse(s.data);
                        (c = this.incomingDataListener) === null || c === void 0 || c.call(this, l)
                    } catch {}
            }
        }
        )
    }
    disconnect() {
        var t;
        const {webSocket: r} = this;
        if (r) {
            this.clearWebSocket(),
            (t = this.connectionStateListener) === null || t === void 0 || t.call(this, Xr.DISCONNECTED),
            this.connectionStateListener = void 0,
            this.incomingDataListener = void 0;
            try {
                r.close()
            } catch {}
        }
    }
    sendData(t) {
        const {webSocket: r} = this;
        if (!r) {
            this.pendingData.push(t),
            this.connect();
            return
        }
        r.send(t)
    }
    clearWebSocket() {
        const {webSocket: t} = this;
        t && (this.webSocket = null,
        t.onclose = null,
        t.onerror = null,
        t.onmessage = null,
        t.onopen = null)
    }
}
an.WalletLinkWebSocket = Uf;
Object.defineProperty(Zi, "__esModule", {
    value: !0
});
Zi.WalletLinkConnection = void 0;
const zr = Je
  , Wf = Ki
  , Ct = vn
  , za = gt
  , Gr = bn
  , Vf = Qi
  , fi = an
  , Ga = 1e4
  , qf = 6e4;
class zf {
    constructor({session: t, linkAPIUrl: r, listener: n, diagnostic: i, WebSocketClass: s=WebSocket}) {
        this.destroyed = !1,
        this.lastHeartbeatResponse = 0,
        this.nextReqId = (0,
        zr.IntNumber)(1),
        this._connected = !1,
        this._linked = !1,
        this.shouldFetchUnseenEventsOnConnect = !1,
        this.requestResolutions = new Map,
        this.handleSessionMetadataUpdated = c=>{
            if (!c)
                return;
            new Map([["__destroyed", this.handleDestroyed], ["EthereumAddress", this.handleAccountUpdated], ["WalletUsername", this.handleWalletUsernameUpdated], ["AppVersion", this.handleAppVersionUpdated], ["ChainId", u=>c.JsonRpcUrl && this.handleChainUpdated(u, c.JsonRpcUrl)]]).forEach((u,p)=>{
                const f = c[p];
                f !== void 0 && u(f)
            }
            )
        }
        ,
        this.handleDestroyed = c=>{
            var l, u;
            c === "1" && ((l = this.listener) === null || l === void 0 || l.resetAndReload(),
            (u = this.diagnostic) === null || u === void 0 || u.log(Ct.EVENTS.METADATA_DESTROYED, {
                alreadyDestroyed: this.isDestroyed,
                sessionIdHash: Gr.Session.hash(this.session.id)
            }))
        }
        ,
        this.handleAccountUpdated = async c=>{
            var l, u;
            try {
                const p = await this.cipher.decrypt(c);
                (l = this.listener) === null || l === void 0 || l.accountUpdated(p)
            } catch {
                (u = this.diagnostic) === null || u === void 0 || u.log(Ct.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "selectedAddress"
                })
            }
        }
        ,
        this.handleMetadataUpdated = async(c,l)=>{
            var u, p;
            try {
                const f = await this.cipher.decrypt(l);
                (u = this.listener) === null || u === void 0 || u.metadataUpdated(c, f)
            } catch {
                (p = this.diagnostic) === null || p === void 0 || p.log(Ct.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: c
                })
            }
        }
        ,
        this.handleWalletUsernameUpdated = async c=>{
            this.handleMetadataUpdated(za.WALLET_USER_NAME_KEY, c)
        }
        ,
        this.handleAppVersionUpdated = async c=>{
            this.handleMetadataUpdated(za.APP_VERSION_KEY, c)
        }
        ,
        this.handleChainUpdated = async(c,l)=>{
            var u, p;
            try {
                const f = await this.cipher.decrypt(c)
                  , _ = await this.cipher.decrypt(l);
                (u = this.listener) === null || u === void 0 || u.chainUpdated(f, _)
            } catch {
                (p = this.diagnostic) === null || p === void 0 || p.log(Ct.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "chainId|jsonRpcUrl"
                })
            }
        }
        ,
        this.session = t,
        this.cipher = new Wf.Cipher(t.secret),
        this.diagnostic = i,
        this.listener = n;
        const o = new fi.WalletLinkWebSocket(`${r}/rpc`,s);
        o.setConnectionStateListener(async c=>{
            var l;
            (l = this.diagnostic) === null || l === void 0 || l.log(Ct.EVENTS.CONNECTED_STATE_CHANGE, {
                state: c,
                sessionIdHash: Gr.Session.hash(t.id)
            });
            let u = !1;
            switch (c) {
            case fi.ConnectionState.DISCONNECTED:
                if (!this.destroyed) {
                    const p = async()=>{
                        await new Promise(f=>setTimeout(f, 5e3)),
                        this.destroyed || o.connect().catch(()=>{
                            p()
                        }
                        )
                    }
                    ;
                    p()
                }
                break;
            case fi.ConnectionState.CONNECTED:
                try {
                    await this.authenticate(),
                    this.sendIsLinked(),
                    this.sendGetSessionConfig(),
                    u = !0
                } catch {}
                this.updateLastHeartbeat(),
                setInterval(()=>{
                    this.heartbeat()
                }
                , Ga),
                this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
                break;
            case fi.ConnectionState.CONNECTING:
                break
            }
            this.connected !== u && (this.connected = u)
        }
        ),
        o.setIncomingDataListener(c=>{
            var l, u, p;
            switch (c.type) {
            case "Heartbeat":
                this.updateLastHeartbeat();
                return;
            case "IsLinkedOK":
            case "Linked":
                {
                    const f = c.type === "IsLinkedOK" ? c.linked : void 0;
                    (l = this.diagnostic) === null || l === void 0 || l.log(Ct.EVENTS.LINKED, {
                        sessionIdHash: Gr.Session.hash(t.id),
                        linked: f,
                        type: c.type,
                        onlineGuests: c.onlineGuests
                    }),
                    this.linked = f || c.onlineGuests > 0;
                    break
                }
            case "GetSessionConfigOK":
            case "SessionConfigUpdated":
                {
                    (u = this.diagnostic) === null || u === void 0 || u.log(Ct.EVENTS.SESSION_CONFIG_RECEIVED, {
                        sessionIdHash: Gr.Session.hash(t.id),
                        metadata_keys: c && c.metadata ? Object.keys(c.metadata) : void 0
                    }),
                    this.handleSessionMetadataUpdated(c.metadata);
                    break
                }
            case "Event":
                {
                    this.handleIncomingEvent(c);
                    break
                }
            }
            c.id !== void 0 && ((p = this.requestResolutions.get(c.id)) === null || p === void 0 || p(c))
        }
        ),
        this.ws = o,
        this.http = new Vf.WalletLinkHTTP(r,t.id,t.key)
    }
    connect() {
        var t;
        if (this.destroyed)
            throw new Error("instance is destroyed");
        (t = this.diagnostic) === null || t === void 0 || t.log(Ct.EVENTS.STARTED_CONNECTING, {
            sessionIdHash: Gr.Session.hash(this.session.id)
        }),
        this.ws.connect()
    }
    destroy() {
        var t;
        this.destroyed = !0,
        this.ws.disconnect(),
        (t = this.diagnostic) === null || t === void 0 || t.log(Ct.EVENTS.DISCONNECTED, {
            sessionIdHash: Gr.Session.hash(this.session.id)
        }),
        this.listener = void 0
    }
    get isDestroyed() {
        return this.destroyed
    }
    get connected() {
        return this._connected
    }
    set connected(t) {
        var r, n;
        this._connected = t,
        t && ((r = this.onceConnected) === null || r === void 0 || r.call(this)),
        (n = this.listener) === null || n === void 0 || n.connectedUpdated(t)
    }
    setOnceConnected(t) {
        return new Promise(r=>{
            this.connected ? t().then(r) : this.onceConnected = ()=>{
                t().then(r),
                this.onceConnected = void 0
            }
        }
        )
    }
    get linked() {
        return this._linked
    }
    set linked(t) {
        var r, n;
        this._linked = t,
        t && ((r = this.onceLinked) === null || r === void 0 || r.call(this)),
        (n = this.listener) === null || n === void 0 || n.linkedUpdated(t)
    }
    setOnceLinked(t) {
        return new Promise(r=>{
            this.linked ? t().then(r) : this.onceLinked = ()=>{
                t().then(r),
                this.onceLinked = void 0
            }
        }
        )
    }
    async handleIncomingEvent(t) {
        var r, n;
        if (!(t.type !== "Event" || t.event !== "Web3Response"))
            try {
                const i = await this.cipher.decrypt(t.data)
                  , s = JSON.parse(i);
                if (s.type !== "WEB3_RESPONSE")
                    return;
                (r = this.listener) === null || r === void 0 || r.handleWeb3ResponseMessage(s)
            } catch {
                (n = this.diagnostic) === null || n === void 0 || n.log(Ct.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "incomingEvent"
                })
            }
    }
    async checkUnseenEvents() {
        if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return
        }
        await new Promise(t=>setTimeout(t, 250));
        try {
            await this.fetchUnseenEventsAPI()
        } catch (t) {
            console.error("Unable to check for unseen events", t)
        }
    }
    async fetchUnseenEventsAPI() {
        this.shouldFetchUnseenEventsOnConnect = !1,
        (await this.http.fetchUnseenEvents()).forEach(r=>this.handleIncomingEvent(r))
    }
    async setSessionMetadata(t, r) {
        const n = {
            type: "SetSessionConfig",
            id: (0,
            zr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            metadata: {
                [t]: r
            }
        };
        return this.setOnceConnected(async()=>{
            const i = await this.makeRequest(n);
            if (i.type === "Fail")
                throw new Error(i.error || "failed to set session metadata")
        }
        )
    }
    async publishEvent(t, r, n=!1) {
        const i = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, r), {
            origin: location.origin,
            relaySource: window.coinbaseWalletExtension ? "injected_sdk" : "sdk"
        })))
          , s = {
            type: "PublishEvent",
            id: (0,
            zr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            event: t,
            data: i,
            callWebhook: n
        };
        return this.setOnceLinked(async()=>{
            const o = await this.makeRequest(s);
            if (o.type === "Fail")
                throw new Error(o.error || "failed to publish event");
            return o.eventId
        }
        )
    }
    sendData(t) {
        this.ws.sendData(JSON.stringify(t))
    }
    updateLastHeartbeat() {
        this.lastHeartbeatResponse = Date.now()
    }
    heartbeat() {
        if (Date.now() - this.lastHeartbeatResponse > Ga * 2) {
            this.ws.disconnect();
            return
        }
        try {
            this.ws.sendData("h")
        } catch {}
    }
    async makeRequest(t, r=qf) {
        const n = t.id;
        this.sendData(t);
        let i;
        return Promise.race([new Promise((s,o)=>{
            i = window.setTimeout(()=>{
                o(new Error(`request ${n} timed out`))
            }
            , r)
        }
        ), new Promise(s=>{
            this.requestResolutions.set(n, o=>{
                clearTimeout(i),
                s(o),
                this.requestResolutions.delete(n)
            }
            )
        }
        )])
    }
    async authenticate() {
        const t = {
            type: "HostSession",
            id: (0,
            zr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            sessionKey: this.session.key
        }
          , r = await this.makeRequest(t);
        if (r.type === "Fail")
            throw new Error(r.error || "failed to authentcate")
    }
    sendIsLinked() {
        const t = {
            type: "IsLinked",
            id: (0,
            zr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id
        };
        this.sendData(t)
    }
    sendGetSessionConfig() {
        const t = {
            type: "GetSessionConfig",
            id: (0,
            zr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id
        };
        this.sendData(t)
    }
}
Zi.WalletLinkConnection = zf;
var Kn = {}
  , Qn = {}
  , qo = {};
Object.defineProperty(qo, "__esModule", {
    value: !0
});
qo.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var Gf = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Qn, "__esModule", {
    value: !0
});
Qn.injectCssReset = void 0;
const Jf = Gf(qo);
function Zf() {
    const e = document.createElement("style");
    e.type = "text/css",
    e.appendChild(document.createTextNode(Jf.default)),
    document.documentElement.appendChild(e)
}
Qn.injectCssReset = Zf;
var Yi = {}, Yn, He, Jl, Zl, _r, Ja, Kl, Ro, zo, Mo, Co, Ql, Pn = {}, Yl = [], Kf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xi = Array.isArray;
function jt(e, t) {
    for (var r in t)
        e[r] = t[r];
    return e
}
function Xl(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}
function ko(e, t, r) {
    var n, i, s, o = {};
    for (s in t)
        s == "key" ? n = t[s] : s == "ref" ? i = t[s] : o[s] = t[s];
    if (arguments.length > 2 && (o.children = arguments.length > 3 ? Yn.call(arguments, 2) : r),
    typeof e == "function" && e.defaultProps != null)
        for (s in e.defaultProps)
            o[s] === void 0 && (o[s] = e.defaultProps[s]);
    return An(e, o, n, i, null)
}
function An(e, t, r, n, i) {
    var s = {
        type: e,
        props: t,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: i ?? ++Jl,
        __i: -1,
        __u: 0
    };
    return i == null && He.vnode != null && He.vnode(s),
    s
}
function Qf() {
    return {
        current: null
    }
}
function Xn(e) {
    return e.children
}
function Tn(e, t) {
    this.props = e,
    this.context = t
}
function Rr(e, t) {
    if (t == null)
        return e.__ ? Rr(e.__, e.__i + 1) : null;
    for (var r; t < e.__k.length; t++)
        if ((r = e.__k[t]) != null && r.__e != null)
            return r.__e;
    return typeof e.type == "function" ? Rr(e) : null
}
function eu(e) {
    var t, r;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null,
        t = 0; t < e.__k.length; t++)
            if ((r = e.__k[t]) != null && r.__e != null) {
                e.__e = e.__c.base = r.__e;
                break
            }
        return eu(e)
    }
}
function Io(e) {
    (!e.__d && (e.__d = !0) && _r.push(e) && !Ai.__r++ || Ja !== He.debounceRendering) && ((Ja = He.debounceRendering) || Kl)(Ai)
}
function Ai() {
    var e, t, r, n, i, s, o, c;
    for (_r.sort(Ro); e = _r.shift(); )
        e.__d && (t = _r.length,
        n = void 0,
        s = (i = (r = e).__v).__e,
        o = [],
        c = [],
        r.__P && ((n = jt({}, i)).__v = i.__v + 1,
        He.vnode && He.vnode(n),
        Go(r.__P, n, i, r.__n, r.__P.ownerSVGElement !== void 0, 32 & i.__u ? [s] : null, o, s ?? Rr(i), !!(32 & i.__u), c),
        n.__v = i.__v,
        n.__.__k[n.__i] = n,
        iu(o, n, c),
        n.__e != s && eu(n)),
        _r.length > t && _r.sort(Ro));
    Ai.__r = 0
}
function tu(e, t, r, n, i, s, o, c, l, u, p) {
    var f, _, R, x, P, L = n && n.__k || Yl, M = t.length;
    for (r.__d = l,
    Yf(r, t, L),
    l = r.__d,
    f = 0; f < M; f++)
        (R = r.__k[f]) != null && typeof R != "boolean" && typeof R != "function" && (_ = R.__i === -1 ? Pn : L[R.__i] || Pn,
        R.__i = f,
        Go(e, R, _, i, s, o, c, l, u, p),
        x = R.__e,
        R.ref && _.ref != R.ref && (_.ref && Jo(_.ref, null, R),
        p.push(R.ref, R.__c || x, R)),
        P == null && x != null && (P = x),
        65536 & R.__u || _.__k === R.__k ? (l && !l.isConnected && (l = Rr(_)),
        l = ru(R, l, e)) : typeof R.type == "function" && R.__d !== void 0 ? l = R.__d : x && (l = x.nextSibling),
        R.__d = void 0,
        R.__u &= -196609);
    r.__d = l,
    r.__e = P
}
function Yf(e, t, r) {
    var n, i, s, o, c, l = t.length, u = r.length, p = u, f = 0;
    for (e.__k = [],
    n = 0; n < l; n++)
        o = n + f,
        (i = e.__k[n] = (i = t[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? An(null, i, null, null, null) : Xi(i) ? An(Xn, {
            children: i
        }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? An(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = e,
        i.__b = e.__b + 1,
        c = Xf(i, r, o, p),
        i.__i = c,
        s = null,
        c !== -1 && (p--,
        (s = r[c]) && (s.__u |= 131072)),
        s == null || s.__v === null ? (c == -1 && f--,
        typeof i.type != "function" && (i.__u |= 65536)) : c !== o && (c === o + 1 ? f++ : c > o ? p > l - o ? f += c - o : f-- : c < o ? c == o - 1 && (f = c - o) : f = 0,
        c !== n + f && (i.__u |= 65536))) : (s = r[o]) && s.key == null && s.__e && !(131072 & s.__u) && (s.__e == e.__d && (e.__d = Rr(s)),
        xo(s, s, !1),
        r[o] = null,
        p--);
    if (p)
        for (n = 0; n < u; n++)
            (s = r[n]) != null && !(131072 & s.__u) && (s.__e == e.__d && (e.__d = Rr(s)),
            xo(s, s))
}
function ru(e, t, r) {
    var n, i;
    if (typeof e.type == "function") {
        for (n = e.__k,
        i = 0; n && i < n.length; i++)
            n[i] && (n[i].__ = e,
            t = ru(n[i], t, r));
        return t
    }
    e.__e != t && (r.insertBefore(e.__e, t || null),
    t = e.__e);
    do
        t = t && t.nextSibling;
    while (t != null && t.nodeType === 8);
    return t
}
function nu(e, t) {
    return t = t || [],
    e == null || typeof e == "boolean" || (Xi(e) ? e.some(function(r) {
        nu(r, t)
    }) : t.push(e)),
    t
}
function Xf(e, t, r, n) {
    var i = e.key
      , s = e.type
      , o = r - 1
      , c = r + 1
      , l = t[r];
    if (l === null || l && i == l.key && s === l.type && !(131072 & l.__u))
        return r;
    if (n > (l != null && !(131072 & l.__u) ? 1 : 0))
        for (; o >= 0 || c < t.length; ) {
            if (o >= 0) {
                if ((l = t[o]) && !(131072 & l.__u) && i == l.key && s === l.type)
                    return o;
                o--
            }
            if (c < t.length) {
                if ((l = t[c]) && !(131072 & l.__u) && i == l.key && s === l.type)
                    return c;
                c++
            }
        }
    return -1
}
function Za(e, t, r) {
    t[0] === "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || Kf.test(t) ? r : r + "px"
}
function pi(e, t, r, n, i) {
    var s;
    e: if (t === "style")
        if (typeof r == "string")
            e.style.cssText = r;
        else {
            if (typeof n == "string" && (e.style.cssText = n = ""),
            n)
                for (t in n)
                    r && t in r || Za(e.style, t, "");
            if (r)
                for (t in r)
                    n && r[t] === n[t] || Za(e.style, t, r[t])
        }
    else if (t[0] === "o" && t[1] === "n")
        s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")),
        t = t.toLowerCase()in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2),
        e.l || (e.l = {}),
        e.l[t + s] = r,
        r ? n ? r.u = n.u : (r.u = zo,
        e.addEventListener(t, s ? Co : Mo, s)) : e.removeEventListener(t, s ? Co : Mo, s);
    else {
        if (i)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t in e)
            try {
                e[t] = r ?? "";
                break e
            } catch {}
        typeof r == "function" || (r == null || r === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, r))
    }
}
function Ka(e) {
    return function(t) {
        if (this.l) {
            var r = this.l[t.type + e];
            if (t.t == null)
                t.t = zo++;
            else if (t.t < r.u)
                return;
            return r(He.event ? He.event(t) : t)
        }
    }
}
function Go(e, t, r, n, i, s, o, c, l, u) {
    var p, f, _, R, x, P, L, M, k, N, $, O, D, G, V, H = t.type;
    if (t.constructor !== void 0)
        return null;
    128 & r.__u && (l = !!(32 & r.__u),
    s = [c = t.__e = r.__e]),
    (p = He.__b) && p(t);
    e: if (typeof H == "function")
        try {
            if (M = t.props,
            k = (p = H.contextType) && n[p.__c],
            N = p ? k ? k.props.value : p.__ : n,
            r.__c ? L = (f = t.__c = r.__c).__ = f.__E : ("prototype"in H && H.prototype.render ? t.__c = f = new H(M,N) : (t.__c = f = new Tn(M,N),
            f.constructor = H,
            f.render = t0),
            k && k.sub(f),
            f.props = M,
            f.state || (f.state = {}),
            f.context = N,
            f.__n = n,
            _ = f.__d = !0,
            f.__h = [],
            f._sb = []),
            f.__s == null && (f.__s = f.state),
            H.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = jt({}, f.__s)),
            jt(f.__s, H.getDerivedStateFromProps(M, f.__s))),
            R = f.props,
            x = f.state,
            f.__v = t,
            _)
                H.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(),
                f.componentDidMount != null && f.__h.push(f.componentDidMount);
            else {
                if (H.getDerivedStateFromProps == null && M !== R && f.componentWillReceiveProps != null && f.componentWillReceiveProps(M, N),
                !f.__e && (f.shouldComponentUpdate != null && f.shouldComponentUpdate(M, f.__s, N) === !1 || t.__v === r.__v)) {
                    for (t.__v !== r.__v && (f.props = M,
                    f.state = f.__s,
                    f.__d = !1),
                    t.__e = r.__e,
                    t.__k = r.__k,
                    t.__k.forEach(function(X) {
                        X && (X.__ = t)
                    }),
                    $ = 0; $ < f._sb.length; $++)
                        f.__h.push(f._sb[$]);
                    f._sb = [],
                    f.__h.length && o.push(f);
                    break e
                }
                f.componentWillUpdate != null && f.componentWillUpdate(M, f.__s, N),
                f.componentDidUpdate != null && f.__h.push(function() {
                    f.componentDidUpdate(R, x, P)
                })
            }
            if (f.context = N,
            f.props = M,
            f.__P = e,
            f.__e = !1,
            O = He.__r,
            D = 0,
            "prototype"in H && H.prototype.render) {
                for (f.state = f.__s,
                f.__d = !1,
                O && O(t),
                p = f.render(f.props, f.state, f.context),
                G = 0; G < f._sb.length; G++)
                    f.__h.push(f._sb[G]);
                f._sb = []
            } else
                do
                    f.__d = !1,
                    O && O(t),
                    p = f.render(f.props, f.state, f.context),
                    f.state = f.__s;
                while (f.__d && ++D < 25);
            f.state = f.__s,
            f.getChildContext != null && (n = jt(jt({}, n), f.getChildContext())),
            _ || f.getSnapshotBeforeUpdate == null || (P = f.getSnapshotBeforeUpdate(R, x)),
            tu(e, Xi(V = p != null && p.type === Xn && p.key == null ? p.props.children : p) ? V : [V], t, r, n, i, s, o, c, l, u),
            f.base = t.__e,
            t.__u &= -161,
            f.__h.length && o.push(f),
            L && (f.__E = f.__ = null)
        } catch (X) {
            t.__v = null,
            l || s != null ? (t.__e = c,
            t.__u |= l ? 160 : 32,
            s[s.indexOf(c)] = null) : (t.__e = r.__e,
            t.__k = r.__k),
            He.__e(X, t, r)
        }
    else
        s == null && t.__v === r.__v ? (t.__k = r.__k,
        t.__e = r.__e) : t.__e = e0(r.__e, t, r, n, i, s, o, l, u);
    (p = He.diffed) && p(t)
}
function iu(e, t, r) {
    t.__d = void 0;
    for (var n = 0; n < r.length; n++)
        Jo(r[n], r[++n], r[++n]);
    He.__c && He.__c(t, e),
    e.some(function(i) {
        try {
            e = i.__h,
            i.__h = [],
            e.some(function(s) {
                s.call(i)
            })
        } catch (s) {
            He.__e(s, i.__v)
        }
    })
}
function e0(e, t, r, n, i, s, o, c, l) {
    var u, p, f, _, R, x, P, L = r.props, M = t.props, k = t.type;
    if (k === "svg" && (i = !0),
    s != null) {
        for (u = 0; u < s.length; u++)
            if ((R = s[u]) && "setAttribute"in R == !!k && (k ? R.localName === k : R.nodeType === 3)) {
                e = R,
                s[u] = null;
                break
            }
    }
    if (e == null) {
        if (k === null)
            return document.createTextNode(M);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, M.is && M),
        s = null,
        c = !1
    }
    if (k === null)
        L === M || c && e.data === M || (e.data = M);
    else {
        if (s = s && Yn.call(e.childNodes),
        L = r.props || Pn,
        !c && s != null)
            for (L = {},
            u = 0; u < e.attributes.length; u++)
                L[(R = e.attributes[u]).name] = R.value;
        for (u in L)
            R = L[u],
            u == "children" || (u == "dangerouslySetInnerHTML" ? f = R : u === "key" || u in M || pi(e, u, null, R, i));
        for (u in M)
            R = M[u],
            u == "children" ? _ = R : u == "dangerouslySetInnerHTML" ? p = R : u == "value" ? x = R : u == "checked" ? P = R : u === "key" || c && typeof R != "function" || L[u] === R || pi(e, u, R, L[u], i);
        if (p)
            c || f && (p.__html === f.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html),
            t.__k = [];
        else if (f && (e.innerHTML = ""),
        tu(e, Xi(_) ? _ : [_], t, r, n, i && k !== "foreignObject", s, o, s ? s[0] : r.__k && Rr(r, 0), c, l),
        s != null)
            for (u = s.length; u--; )
                s[u] != null && Xl(s[u]);
        c || (u = "value",
        x !== void 0 && (x !== e[u] || k === "progress" && !x || k === "option" && x !== L[u]) && pi(e, u, x, L[u], !1),
        u = "checked",
        P !== void 0 && P !== e[u] && pi(e, u, P, L[u], !1))
    }
    return e
}
function Jo(e, t, r) {
    try {
        typeof e == "function" ? e(t) : e.current = t
    } catch (n) {
        He.__e(n, r)
    }
}
function xo(e, t, r) {
    var n, i;
    if (He.unmount && He.unmount(e),
    (n = e.ref) && (n.current && n.current !== e.__e || Jo(n, null, t)),
    (n = e.__c) != null) {
        if (n.componentWillUnmount)
            try {
                n.componentWillUnmount()
            } catch (s) {
                He.__e(s, t)
            }
        n.base = n.__P = null
    }
    if (n = e.__k)
        for (i = 0; i < n.length; i++)
            n[i] && xo(n[i], t, r || typeof e.type != "function");
    r || e.__e == null || Xl(e.__e),
    e.__c = e.__ = e.__e = e.__d = void 0
}
function t0(e, t, r) {
    return this.constructor(e, r)
}
function su(e, t, r) {
    var n, i, s, o;
    He.__ && He.__(e, t),
    i = (n = typeof r == "function") ? null : r && r.__k || t.__k,
    s = [],
    o = [],
    Go(t, e = (!n && r || t).__k = ko(Xn, null, [e]), i || Pn, Pn, t.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : t.firstChild ? Yn.call(t.childNodes) : null, s, !n && r ? r : i ? i.__e : t.firstChild, n, o),
    iu(s, e, o)
}
function ou(e, t) {
    su(e, t, ou)
}
function r0(e, t, r) {
    var n, i, s, o, c = jt({}, e.props);
    for (s in e.type && e.type.defaultProps && (o = e.type.defaultProps),
    t)
        s == "key" ? n = t[s] : s == "ref" ? i = t[s] : c[s] = t[s] === void 0 && o !== void 0 ? o[s] : t[s];
    return arguments.length > 2 && (c.children = arguments.length > 3 ? Yn.call(arguments, 2) : r),
    An(e.type, c, n || e.key, i || e.ref, null)
}
function n0(e, t) {
    var r = {
        __c: t = "__cC" + Ql++,
        __: e,
        Consumer: function(n, i) {
            return n.children(i)
        },
        Provider: function(n) {
            var i, s;
            return this.getChildContext || (i = [],
            (s = {})[t] = this,
            this.getChildContext = function() {
                return s
            }
            ,
            this.shouldComponentUpdate = function(o) {
                this.props.value !== o.value && i.some(function(c) {
                    c.__e = !0,
                    Io(c)
                })
            }
            ,
            this.sub = function(o) {
                i.push(o);
                var c = o.componentWillUnmount;
                o.componentWillUnmount = function() {
                    i.splice(i.indexOf(o), 1),
                    c && c.call(o)
                }
            }
            ),
            n.children
        }
    };
    return r.Provider.__ = r.Consumer.contextType = r
}
Yn = Yl.slice,
He = {
    __e: function(e, t, r, n) {
        for (var i, s, o; t = t.__; )
            if ((i = t.__c) && !i.__)
                try {
                    if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(e)),
                    o = i.__d),
                    i.componentDidCatch != null && (i.componentDidCatch(e, n || {}),
                    o = i.__d),
                    o)
                        return i.__E = i
                } catch (c) {
                    e = c
                }
        throw e
    }
},
Jl = 0,
Zl = function(e) {
    return e != null && e.constructor == null
}
,
Tn.prototype.setState = function(e, t) {
    var r;
    r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state),
    typeof e == "function" && (e = e(jt({}, r), this.props)),
    e && jt(r, e),
    e != null && this.__v && (t && this._sb.push(t),
    Io(this))
}
,
Tn.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0,
    e && this.__h.push(e),
    Io(this))
}
,
Tn.prototype.render = Xn,
_r = [],
Kl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
Ro = function(e, t) {
    return e.__v.__b - t.__v.__b
}
,
Ai.__r = 0,
zo = 0,
Mo = Ka(!1),
Co = Ka(!0),
Ql = 0;
const i0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    Component: Tn,
    Fragment: Xn,
    cloneElement: r0,
    createContext: n0,
    createElement: ko,
    createRef: Qf,
    h: ko,
    hydrate: ou,
    get isValidElement() {
        return Zl
    },
    get options() {
        return He
    },
    render: su,
    toChildArray: nu
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ot = gn(i0);
var es = {};
function au(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number")
        n += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (r = au(e[t])) && (n && (n += " "),
                n += r);
        else
            for (t in e)
                e[t] && (n && (n += " "),
                n += t);
    return n
}
function Qa() {
    for (var e, t, r = 0, n = ""; r < arguments.length; )
        (e = arguments[r++]) && (t = au(e)) && (n && (n += " "),
        n += t);
    return n
}
const s0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    clsx: Qa,
    default: Qa
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ei = gn(s0);
var Ut, pe, Us, Ya, cn = 0, cu = [], Ci = [], Ve = He, Xa = Ve.__b, ec = Ve.__r, tc = Ve.diffed, rc = Ve.__c, nc = Ve.unmount, ic = Ve.__;
function Ar(e, t) {
    Ve.__h && Ve.__h(pe, e, cn || t),
    cn = 0;
    var r = pe.__H || (pe.__H = {
        __: [],
        __h: []
    });
    return e >= r.__.length && r.__.push({
        __V: Ci
    }),
    r.__[e]
}
function lu(e) {
    return cn = 1,
    uu(du, e)
}
function uu(e, t, r) {
    var n = Ar(Ut++, 2);
    if (n.t = e,
    !n.__c && (n.__ = [r ? r(t) : du(void 0, t), function(c) {
        var l = n.__N ? n.__N[0] : n.__[0]
          , u = n.t(l, c);
        l !== u && (n.__N = [u, n.__[1]],
        n.__c.setState({}))
    }
    ],
    n.__c = pe,
    !pe.u)) {
        var i = function(c, l, u) {
            if (!n.__c.__H)
                return !0;
            var p = n.__c.__H.__.filter(function(_) {
                return !!_.__c
            });
            if (p.every(function(_) {
                return !_.__N
            }))
                return !s || s.call(this, c, l, u);
            var f = !1;
            return p.forEach(function(_) {
                if (_.__N) {
                    var R = _.__[0];
                    _.__ = _.__N,
                    _.__N = void 0,
                    R !== _.__[0] && (f = !0)
                }
            }),
            !(!f && n.__c.props === c) && (!s || s.call(this, c, l, u))
        };
        pe.u = !0;
        var s = pe.shouldComponentUpdate
          , o = pe.componentWillUpdate;
        pe.componentWillUpdate = function(c, l, u) {
            if (this.__e) {
                var p = s;
                s = void 0,
                i(c, l, u),
                s = p
            }
            o && o.call(this, c, l, u)
        }
        ,
        pe.shouldComponentUpdate = i
    }
    return n.__N || n.__
}
function o0(e, t) {
    var r = Ar(Ut++, 3);
    !Ve.__s && Ko(r.__H, t) && (r.__ = e,
    r.i = t,
    pe.__H.__h.push(r))
}
function hu(e, t) {
    var r = Ar(Ut++, 4);
    !Ve.__s && Ko(r.__H, t) && (r.__ = e,
    r.i = t,
    pe.__h.push(r))
}
function a0(e) {
    return cn = 5,
    Zo(function() {
        return {
            current: e
        }
    }, [])
}
function c0(e, t, r) {
    cn = 6,
    hu(function() {
        return typeof e == "function" ? (e(t()),
        function() {
            return e(null)
        }
        ) : e ? (e.current = t(),
        function() {
            return e.current = null
        }
        ) : void 0
    }, r == null ? r : r.concat(e))
}
function Zo(e, t) {
    var r = Ar(Ut++, 7);
    return Ko(r.__H, t) ? (r.__V = e(),
    r.i = t,
    r.__h = e,
    r.__V) : r.__
}
function l0(e, t) {
    return cn = 8,
    Zo(function() {
        return e
    }, t)
}
function u0(e) {
    var t = pe.context[e.__c]
      , r = Ar(Ut++, 9);
    return r.c = e,
    t ? (r.__ == null && (r.__ = !0,
    t.sub(pe)),
    t.props.value) : e.__
}
function h0(e, t) {
    Ve.useDebugValue && Ve.useDebugValue(t ? t(e) : e)
}
function d0(e) {
    var t = Ar(Ut++, 10)
      , r = lu();
    return t.__ = e,
    pe.componentDidCatch || (pe.componentDidCatch = function(n, i) {
        t.__ && t.__(n, i),
        r[1](n)
    }
    ),
    [r[0], function() {
        r[1](void 0)
    }
    ]
}
function f0() {
    var e = Ar(Ut++, 11);
    if (!e.__) {
        for (var t = pe.__v; t !== null && !t.__m && t.__ !== null; )
            t = t.__;
        var r = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + r[0] + "-" + r[1]++
    }
    return e.__
}
function p0() {
    for (var e; e = cu.shift(); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(ki),
                e.__H.__h.forEach(Ao),
                e.__H.__h = []
            } catch (t) {
                e.__H.__h = [],
                Ve.__e(t, e.__v)
            }
}
Ve.__b = function(e) {
    pe = null,
    Xa && Xa(e)
}
,
Ve.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m),
    ic && ic(e, t)
}
,
Ve.__r = function(e) {
    ec && ec(e),
    Ut = 0;
    var t = (pe = e.__c).__H;
    t && (Us === pe ? (t.__h = [],
    pe.__h = [],
    t.__.forEach(function(r) {
        r.__N && (r.__ = r.__N),
        r.__V = Ci,
        r.__N = r.i = void 0
    })) : (t.__h.forEach(ki),
    t.__h.forEach(Ao),
    t.__h = [],
    Ut = 0)),
    Us = pe
}
,
Ve.diffed = function(e) {
    tc && tc(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (cu.push(t) !== 1 && Ya === Ve.requestAnimationFrame || ((Ya = Ve.requestAnimationFrame) || g0)(p0)),
    t.__H.__.forEach(function(r) {
        r.i && (r.__H = r.i),
        r.__V !== Ci && (r.__ = r.__V),
        r.i = void 0,
        r.__V = Ci
    })),
    Us = pe = null
}
,
Ve.__c = function(e, t) {
    t.some(function(r) {
        try {
            r.__h.forEach(ki),
            r.__h = r.__h.filter(function(n) {
                return !n.__ || Ao(n)
            })
        } catch (n) {
            t.some(function(i) {
                i.__h && (i.__h = [])
            }),
            t = [],
            Ve.__e(n, r.__v)
        }
    }),
    rc && rc(e, t)
}
,
Ve.unmount = function(e) {
    nc && nc(e);
    var t, r = e.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            ki(n)
        } catch (i) {
            t = i
        }
    }),
    r.__H = void 0,
    t && Ve.__e(t, r.__v))
}
;
var sc = typeof requestAnimationFrame == "function";
function g0(e) {
    var t, r = function() {
        clearTimeout(n),
        sc && cancelAnimationFrame(t),
        setTimeout(e)
    }, n = setTimeout(r, 100);
    sc && (t = requestAnimationFrame(r))
}
function ki(e) {
    var t = pe
      , r = e.__c;
    typeof r == "function" && (e.__c = void 0,
    r()),
    pe = t
}
function Ao(e) {
    var t = pe;
    e.__c = e.__(),
    pe = t
}
function Ko(e, t) {
    return !e || e.length !== t.length || t.some(function(r, n) {
        return r !== e[n]
    })
}
function du(e, t) {
    return typeof t == "function" ? t(e) : t
}
const _0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    useCallback: l0,
    useContext: u0,
    useDebugValue: h0,
    useEffect: o0,
    useErrorBoundary: d0,
    useId: f0,
    useImperativeHandle: c0,
    useLayoutEffect: hu,
    useMemo: Zo,
    useReducer: uu,
    useRef: a0,
    useState: lu
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ts = gn(_0);
var ln = {}
  , rs = {};
Object.defineProperty(rs, "__esModule", {
    value: !0
});
rs.CloseIcon = void 0;
const oc = ot;
function m0(e) {
    return (0,
    oc.h)("svg", Object.assign({
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    oc.h)("path", {
        d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"
    }))
}
rs.CloseIcon = m0;
var ns = {};
Object.defineProperty(ns, "__esModule", {
    value: !0
});
ns.CoinbaseWalletRound = void 0;
const gi = ot;
function v0(e) {
    return (0,
    gi.h)("svg", Object.assign({
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    gi.h)("circle", {
        cx: "14",
        cy: "14",
        r: "14",
        fill: "#0052FF"
    }), (0,
    gi.h)("path", {
        d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",
        fill: "white"
    }), (0,
    gi.h)("path", {
        d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",
        fill: "#0052FF"
    }))
}
ns.CoinbaseWalletRound = v0;
var is = {};
Object.defineProperty(is, "__esModule", {
    value: !0
});
is.QRCodeIcon = void 0;
const Mn = ot;
function b0(e) {
    return (0,
    Mn.h)("svg", Object.assign({
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    Mn.h)("path", {
        d: "M3 3V8.99939L5 8.99996V5H9V3H3Z"
    }), (0,
    Mn.h)("path", {
        d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z"
    }), (0,
    Mn.h)("path", {
        d: "M21 9H19V5H15.0006L15 3H21V9Z"
    }), (0,
    Mn.h)("path", {
        d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z"
    }))
}
is.QRCodeIcon = b0;
var ss = {};
function fu(e) {
    this.mode = ut.MODE_8BIT_BYTE,
    this.data = e,
    this.parsedData = [];
    for (var t = 0, r = this.data.length; t < r; t++) {
        var n = []
          , i = this.data.charCodeAt(t);
        i > 65536 ? (n[0] = 240 | (i & 1835008) >>> 18,
        n[1] = 128 | (i & 258048) >>> 12,
        n[2] = 128 | (i & 4032) >>> 6,
        n[3] = 128 | i & 63) : i > 2048 ? (n[0] = 224 | (i & 61440) >>> 12,
        n[1] = 128 | (i & 4032) >>> 6,
        n[2] = 128 | i & 63) : i > 128 ? (n[0] = 192 | (i & 1984) >>> 6,
        n[1] = 128 | i & 63) : n[0] = i,
        this.parsedData.push(n)
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData),
    this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
    this.parsedData.unshift(187),
    this.parsedData.unshift(239))
}
fu.prototype = {
    getLength: function(e) {
        return this.parsedData.length
    },
    write: function(e) {
        for (var t = 0, r = this.parsedData.length; t < r; t++)
            e.put(this.parsedData[t], 8)
    }
};
function Nt(e, t) {
    this.typeNumber = e,
    this.errorCorrectLevel = t,
    this.modules = null,
    this.moduleCount = 0,
    this.dataCache = null,
    this.dataList = []
}
Nt.prototype = {
    addData: function(e) {
        var t = new fu(e);
        this.dataList.push(t),
        this.dataCache = null
    },
    isDark: function(e, t) {
        if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
            throw new Error(e + "," + t);
        return this.modules[e][t]
    },
    getModuleCount: function() {
        return this.moduleCount
    },
    make: function() {
        this.makeImpl(!1, this.getBestMaskPattern())
    },
    makeImpl: function(e, t) {
        this.moduleCount = this.typeNumber * 4 + 17,
        this.modules = new Array(this.moduleCount);
        for (var r = 0; r < this.moduleCount; r++) {
            this.modules[r] = new Array(this.moduleCount);
            for (var n = 0; n < this.moduleCount; n++)
                this.modules[r][n] = null
        }
        this.setupPositionProbePattern(0, 0),
        this.setupPositionProbePattern(this.moduleCount - 7, 0),
        this.setupPositionProbePattern(0, this.moduleCount - 7),
        this.setupPositionAdjustPattern(),
        this.setupTimingPattern(),
        this.setupTypeInfo(e, t),
        this.typeNumber >= 7 && this.setupTypeNumber(e),
        this.dataCache == null && (this.dataCache = Nt.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
        this.mapData(this.dataCache, t)
    },
    setupPositionProbePattern: function(e, t) {
        for (var r = -1; r <= 7; r++)
            if (!(e + r <= -1 || this.moduleCount <= e + r))
                for (var n = -1; n <= 7; n++)
                    t + n <= -1 || this.moduleCount <= t + n || (0 <= r && r <= 6 && (n == 0 || n == 6) || 0 <= n && n <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= n && n <= 4 ? this.modules[e + r][t + n] = !0 : this.modules[e + r][t + n] = !1)
    },
    getBestMaskPattern: function() {
        for (var e = 0, t = 0, r = 0; r < 8; r++) {
            this.makeImpl(!0, r);
            var n = We.getLostPoint(this);
            (r == 0 || e > n) && (e = n,
            t = r)
        }
        return t
    },
    createMovieClip: function(e, t, r) {
        var n = e.createEmptyMovieClip(t, r)
          , i = 1;
        this.make();
        for (var s = 0; s < this.modules.length; s++)
            for (var o = s * i, c = 0; c < this.modules[s].length; c++) {
                var l = c * i
                  , u = this.modules[s][c];
                u && (n.beginFill(0, 100),
                n.moveTo(l, o),
                n.lineTo(l + i, o),
                n.lineTo(l + i, o + i),
                n.lineTo(l, o + i),
                n.endFill())
            }
        return n
    },
    setupTimingPattern: function() {
        for (var e = 8; e < this.moduleCount - 8; e++)
            this.modules[e][6] == null && (this.modules[e][6] = e % 2 == 0);
        for (var t = 8; t < this.moduleCount - 8; t++)
            this.modules[6][t] == null && (this.modules[6][t] = t % 2 == 0)
    },
    setupPositionAdjustPattern: function() {
        for (var e = We.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
            for (var r = 0; r < e.length; r++) {
                var n = e[t]
                  , i = e[r];
                if (this.modules[n][i] == null)
                    for (var s = -2; s <= 2; s++)
                        for (var o = -2; o <= 2; o++)
                            s == -2 || s == 2 || o == -2 || o == 2 || s == 0 && o == 0 ? this.modules[n + s][i + o] = !0 : this.modules[n + s][i + o] = !1
            }
    },
    setupTypeNumber: function(e) {
        for (var t = We.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
            var n = !e && (t >> r & 1) == 1;
            this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
        }
        for (var r = 0; r < 18; r++) {
            var n = !e && (t >> r & 1) == 1;
            this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
        }
    },
    setupTypeInfo: function(e, t) {
        for (var r = this.errorCorrectLevel << 3 | t, n = We.getBCHTypeInfo(r), i = 0; i < 15; i++) {
            var s = !e && (n >> i & 1) == 1;
            i < 6 ? this.modules[i][8] = s : i < 8 ? this.modules[i + 1][8] = s : this.modules[this.moduleCount - 15 + i][8] = s
        }
        for (var i = 0; i < 15; i++) {
            var s = !e && (n >> i & 1) == 1;
            i < 8 ? this.modules[8][this.moduleCount - i - 1] = s : i < 9 ? this.modules[8][15 - i - 1 + 1] = s : this.modules[8][15 - i - 1] = s
        }
        this.modules[this.moduleCount - 8][8] = !e
    },
    mapData: function(e, t) {
        for (var r = -1, n = this.moduleCount - 1, i = 7, s = 0, o = this.moduleCount - 1; o > 0; o -= 2)
            for (o == 6 && o--; ; ) {
                for (var c = 0; c < 2; c++)
                    if (this.modules[n][o - c] == null) {
                        var l = !1;
                        s < e.length && (l = (e[s] >>> i & 1) == 1);
                        var u = We.getMask(t, n, o - c);
                        u && (l = !l),
                        this.modules[n][o - c] = l,
                        i--,
                        i == -1 && (s++,
                        i = 7)
                    }
                if (n += r,
                n < 0 || this.moduleCount <= n) {
                    n -= r,
                    r = -r;
                    break
                }
            }
    }
};
Nt.PAD0 = 236;
Nt.PAD1 = 17;
Nt.createData = function(e, t, r) {
    for (var n = Tt.getRSBlocks(e, t), i = new pu, s = 0; s < r.length; s++) {
        var o = r[s];
        i.put(o.mode, 4),
        i.put(o.getLength(), We.getLengthInBits(o.mode, e)),
        o.write(i)
    }
    for (var c = 0, s = 0; s < n.length; s++)
        c += n[s].dataCount;
    if (i.getLengthInBits() > c * 8)
        throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + c * 8 + ")");
    for (i.getLengthInBits() + 4 <= c * 8 && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
        i.putBit(!1);
    for (; !(i.getLengthInBits() >= c * 8 || (i.put(Nt.PAD0, 8),
    i.getLengthInBits() >= c * 8)); )
        i.put(Nt.PAD1, 8);
    return Nt.createBytes(i, n)
}
;
Nt.createBytes = function(e, t) {
    for (var r = 0, n = 0, i = 0, s = new Array(t.length), o = new Array(t.length), c = 0; c < t.length; c++) {
        var l = t[c].dataCount
          , u = t[c].totalCount - l;
        n = Math.max(n, l),
        i = Math.max(i, u),
        s[c] = new Array(l);
        for (var p = 0; p < s[c].length; p++)
            s[c][p] = 255 & e.buffer[p + r];
        r += l;
        var f = We.getErrorCorrectPolynomial(u)
          , _ = new en(s[c],f.getLength() - 1)
          , R = _.mod(f);
        o[c] = new Array(f.getLength() - 1);
        for (var p = 0; p < o[c].length; p++) {
            var x = p + R.getLength() - o[c].length;
            o[c][p] = x >= 0 ? R.get(x) : 0
        }
    }
    for (var P = 0, p = 0; p < t.length; p++)
        P += t[p].totalCount;
    for (var L = new Array(P), M = 0, p = 0; p < n; p++)
        for (var c = 0; c < t.length; c++)
            p < s[c].length && (L[M++] = s[c][p]);
    for (var p = 0; p < i; p++)
        for (var c = 0; c < t.length; c++)
            p < o[c].length && (L[M++] = o[c][p]);
    return L
}
;
var ut = {
    MODE_NUMBER: 1,
    MODE_ALPHA_NUM: 2,
    MODE_8BIT_BYTE: 4,
    MODE_KANJI: 8
}
  , Jt = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
}
  , qt = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
}
  , We = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function(e) {
        for (var t = e << 10; We.getBCHDigit(t) - We.getBCHDigit(We.G15) >= 0; )
            t ^= We.G15 << We.getBCHDigit(t) - We.getBCHDigit(We.G15);
        return (e << 10 | t) ^ We.G15_MASK
    },
    getBCHTypeNumber: function(e) {
        for (var t = e << 12; We.getBCHDigit(t) - We.getBCHDigit(We.G18) >= 0; )
            t ^= We.G18 << We.getBCHDigit(t) - We.getBCHDigit(We.G18);
        return e << 12 | t
    },
    getBCHDigit: function(e) {
        for (var t = 0; e != 0; )
            t++,
            e >>>= 1;
        return t
    },
    getPatternPosition: function(e) {
        return We.PATTERN_POSITION_TABLE[e - 1]
    },
    getMask: function(e, t, r) {
        switch (e) {
        case qt.PATTERN000:
            return (t + r) % 2 == 0;
        case qt.PATTERN001:
            return t % 2 == 0;
        case qt.PATTERN010:
            return r % 3 == 0;
        case qt.PATTERN011:
            return (t + r) % 3 == 0;
        case qt.PATTERN100:
            return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
        case qt.PATTERN101:
            return t * r % 2 + t * r % 3 == 0;
        case qt.PATTERN110:
            return (t * r % 2 + t * r % 3) % 2 == 0;
        case qt.PATTERN111:
            return (t * r % 3 + (t + r) % 2) % 2 == 0;
        default:
            throw new Error("bad maskPattern:" + e)
        }
    },
    getErrorCorrectPolynomial: function(e) {
        for (var t = new en([1],0), r = 0; r < e; r++)
            t = t.multiply(new en([1, Ye.gexp(r)],0));
        return t
    },
    getLengthInBits: function(e, t) {
        if (1 <= t && t < 10)
            switch (e) {
            case ut.MODE_NUMBER:
                return 10;
            case ut.MODE_ALPHA_NUM:
                return 9;
            case ut.MODE_8BIT_BYTE:
                return 8;
            case ut.MODE_KANJI:
                return 8;
            default:
                throw new Error("mode:" + e)
            }
        else if (t < 27)
            switch (e) {
            case ut.MODE_NUMBER:
                return 12;
            case ut.MODE_ALPHA_NUM:
                return 11;
            case ut.MODE_8BIT_BYTE:
                return 16;
            case ut.MODE_KANJI:
                return 10;
            default:
                throw new Error("mode:" + e)
            }
        else if (t < 41)
            switch (e) {
            case ut.MODE_NUMBER:
                return 14;
            case ut.MODE_ALPHA_NUM:
                return 13;
            case ut.MODE_8BIT_BYTE:
                return 16;
            case ut.MODE_KANJI:
                return 12;
            default:
                throw new Error("mode:" + e)
            }
        else
            throw new Error("type:" + t)
    },
    getLostPoint: function(e) {
        for (var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
            for (var i = 0; i < t; i++) {
                for (var s = 0, o = e.isDark(n, i), c = -1; c <= 1; c++)
                    if (!(n + c < 0 || t <= n + c))
                        for (var l = -1; l <= 1; l++)
                            i + l < 0 || t <= i + l || c == 0 && l == 0 || o == e.isDark(n + c, i + l) && s++;
                s > 5 && (r += 3 + s - 5)
            }
        for (var n = 0; n < t - 1; n++)
            for (var i = 0; i < t - 1; i++) {
                var u = 0;
                e.isDark(n, i) && u++,
                e.isDark(n + 1, i) && u++,
                e.isDark(n, i + 1) && u++,
                e.isDark(n + 1, i + 1) && u++,
                (u == 0 || u == 4) && (r += 3)
            }
        for (var n = 0; n < t; n++)
            for (var i = 0; i < t - 6; i++)
                e.isDark(n, i) && !e.isDark(n, i + 1) && e.isDark(n, i + 2) && e.isDark(n, i + 3) && e.isDark(n, i + 4) && !e.isDark(n, i + 5) && e.isDark(n, i + 6) && (r += 40);
        for (var i = 0; i < t; i++)
            for (var n = 0; n < t - 6; n++)
                e.isDark(n, i) && !e.isDark(n + 1, i) && e.isDark(n + 2, i) && e.isDark(n + 3, i) && e.isDark(n + 4, i) && !e.isDark(n + 5, i) && e.isDark(n + 6, i) && (r += 40);
        for (var p = 0, i = 0; i < t; i++)
            for (var n = 0; n < t; n++)
                e.isDark(n, i) && p++;
        var f = Math.abs(100 * p / t / t - 50) / 5;
        return r += f * 10,
        r
    }
}
  , Ye = {
    glog: function(e) {
        if (e < 1)
            throw new Error("glog(" + e + ")");
        return Ye.LOG_TABLE[e]
    },
    gexp: function(e) {
        for (; e < 0; )
            e += 255;
        for (; e >= 256; )
            e -= 255;
        return Ye.EXP_TABLE[e]
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
};
for (var et = 0; et < 8; et++)
    Ye.EXP_TABLE[et] = 1 << et;
for (var et = 8; et < 256; et++)
    Ye.EXP_TABLE[et] = Ye.EXP_TABLE[et - 4] ^ Ye.EXP_TABLE[et - 5] ^ Ye.EXP_TABLE[et - 6] ^ Ye.EXP_TABLE[et - 8];
for (var et = 0; et < 255; et++)
    Ye.LOG_TABLE[Ye.EXP_TABLE[et]] = et;
function en(e, t) {
    if (e.length == null)
        throw new Error(e.length + "/" + t);
    for (var r = 0; r < e.length && e[r] == 0; )
        r++;
    this.num = new Array(e.length - r + t);
    for (var n = 0; n < e.length - r; n++)
        this.num[n] = e[n + r]
}
en.prototype = {
    get: function(e) {
        return this.num[e]
    },
    getLength: function() {
        return this.num.length
    },
    multiply: function(e) {
        for (var t = new Array(this.getLength() + e.getLength() - 1), r = 0; r < this.getLength(); r++)
            for (var n = 0; n < e.getLength(); n++)
                t[r + n] ^= Ye.gexp(Ye.glog(this.get(r)) + Ye.glog(e.get(n)));
        return new en(t,0)
    },
    mod: function(e) {
        if (this.getLength() - e.getLength() < 0)
            return this;
        for (var t = Ye.glog(this.get(0)) - Ye.glog(e.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++)
            r[n] = this.get(n);
        for (var n = 0; n < e.getLength(); n++)
            r[n] ^= Ye.gexp(Ye.glog(e.get(n)) + t);
        return new en(r,0).mod(e)
    }
};
function Tt(e, t) {
    this.totalCount = e,
    this.dataCount = t
}
Tt.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
Tt.getRSBlocks = function(e, t) {
    var r = Tt.getRsBlockTable(e, t);
    if (r == null)
        throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
    for (var n = r.length / 3, i = [], s = 0; s < n; s++)
        for (var o = r[s * 3 + 0], c = r[s * 3 + 1], l = r[s * 3 + 2], u = 0; u < o; u++)
            i.push(new Tt(c,l));
    return i
}
;
Tt.getRsBlockTable = function(e, t) {
    switch (t) {
    case Jt.L:
        return Tt.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
    case Jt.M:
        return Tt.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
    case Jt.Q:
        return Tt.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
    case Jt.H:
        return Tt.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
    default:
        return
    }
}
;
function pu() {
    this.buffer = [],
    this.length = 0
}
pu.prototype = {
    get: function(e) {
        var t = Math.floor(e / 8);
        return (this.buffer[t] >>> 7 - e % 8 & 1) == 1
    },
    put: function(e, t) {
        for (var r = 0; r < t; r++)
            this.putBit((e >>> t - r - 1 & 1) == 1)
    },
    getLengthInBits: function() {
        return this.length
    },
    putBit: function(e) {
        var t = Math.floor(this.length / 8);
        this.buffer.length <= t && this.buffer.push(0),
        e && (this.buffer[t] |= 128 >>> this.length % 8),
        this.length++
    }
};
var Ws = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
function gu(e) {
    if (this.options = {
        padding: 4,
        width: 256,
        height: 256,
        typeNumber: 4,
        color: "#000000",
        background: "#ffffff",
        ecl: "M",
        image: {
            svg: "",
            width: 0,
            height: 0
        }
    },
    typeof e == "string" && (e = {
        content: e
    }),
    e)
        for (var t in e)
            this.options[t] = e[t];
    if (typeof this.options.content != "string")
        throw new Error("Expected 'content' as string!");
    if (this.options.content.length === 0)
        throw new Error("Expected 'content' to be non-empty!");
    if (!(this.options.padding >= 0))
        throw new Error("Expected 'padding' value to be non-negative!");
    if (!(this.options.width > 0) || !(this.options.height > 0))
        throw new Error("Expected 'width' or 'height' value to be higher than zero!");
    function r(l) {
        switch (l) {
        case "L":
            return Jt.L;
        case "M":
            return Jt.M;
        case "Q":
            return Jt.Q;
        case "H":
            return Jt.H;
        default:
            throw new Error("Unknwon error correction level: " + l)
        }
    }
    function n(l, u) {
        for (var p = i(l), f = 1, _ = 0, R = 0, x = Ws.length; R <= x; R++) {
            var P = Ws[R];
            if (!P)
                throw new Error("Content too long: expected " + _ + " but got " + p);
            switch (u) {
            case "L":
                _ = P[0];
                break;
            case "M":
                _ = P[1];
                break;
            case "Q":
                _ = P[2];
                break;
            case "H":
                _ = P[3];
                break;
            default:
                throw new Error("Unknwon error correction level: " + u)
            }
            if (p <= _)
                break;
            f++
        }
        if (f > Ws.length)
            throw new Error("Content too long");
        return f
    }
    function i(l) {
        var u = encodeURI(l).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return u.length + (u.length != l ? 3 : 0)
    }
    var s = this.options.content
      , o = n(s, this.options.ecl)
      , c = r(this.options.ecl);
    this.qrcode = new Nt(o,c),
    this.qrcode.addData(s),
    this.qrcode.make()
}
gu.prototype.svg = function(e) {
    var t = this.options || {}
      , r = this.qrcode.modules;
    typeof e > "u" && (e = {
        container: t.container || "svg"
    });
    for (var n = typeof t.pretty < "u" ? !!t.pretty : !0, i = n ? "  " : "", s = n ? `\r
` : "", o = t.width, c = t.height, l = r.length, u = o / (l + 2 * t.padding), p = c / (l + 2 * t.padding), f = typeof t.join < "u" ? !!t.join : !1, _ = typeof t.swap < "u" ? !!t.swap : !1, R = typeof t.xmlDeclaration < "u" ? !!t.xmlDeclaration : !0, x = typeof t.predefined < "u" ? !!t.predefined : !1, P = x ? i + '<defs><path id="qrmodule" d="M0 0 h' + p + " v" + u + ' H0 z" style="fill:' + t.color + ';shape-rendering:crispEdges;" /></defs>' + s : "", L = i + '<rect x="0" y="0" width="' + o + '" height="' + c + '" style="fill:' + t.background + ';shape-rendering:crispEdges;"/>' + s, M = "", k = "", N = 0; N < l; N++)
        for (var $ = 0; $ < l; $++) {
            var O = r[$][N];
            if (O) {
                var D = $ * u + t.padding * u
                  , G = N * p + t.padding * p;
                if (_) {
                    var V = D;
                    D = G,
                    G = V
                }
                if (f) {
                    var H = u + D
                      , X = p + G;
                    D = Number.isInteger(D) ? Number(D) : D.toFixed(2),
                    G = Number.isInteger(G) ? Number(G) : G.toFixed(2),
                    H = Number.isInteger(H) ? Number(H) : H.toFixed(2),
                    X = Number.isInteger(X) ? Number(X) : X.toFixed(2),
                    k += "M" + D + "," + G + " V" + X + " H" + H + " V" + G + " H" + D + " Z "
                } else
                    x ? M += i + '<use x="' + D.toString() + '" y="' + G.toString() + '" href="#qrmodule" />' + s : M += i + '<rect x="' + D.toString() + '" y="' + G.toString() + '" width="' + u + '" height="' + p + '" style="fill:' + t.color + ';shape-rendering:crispEdges;"/>' + s
            }
        }
    f && (M = i + '<path x="0" y="0" style="fill:' + t.color + ';shape-rendering:crispEdges;" d="' + k + '" />');
    let Q = "";
    if (this.options.image !== void 0 && this.options.image.svg) {
        const v = o * this.options.image.width / 100
          , a = c * this.options.image.height / 100
          , d = o / 2 - v / 2
          , g = c / 2 - a / 2;
        Q += `<svg x="${d}" y="${g}" width="${v}" height="${a}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`,
        Q += this.options.image.svg + s,
        Q += "</svg>"
    }
    var ie = "";
    switch (e.container) {
    case "svg":
        R && (ie += '<?xml version="1.0" standalone="yes"?>' + s),
        ie += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + o + '" height="' + c + '">' + s,
        ie += P + L + M,
        ie += Q,
        ie += "</svg>";
        break;
    case "svg-viewbox":
        R && (ie += '<?xml version="1.0" standalone="yes"?>' + s),
        ie += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + o + " " + c + '">' + s,
        ie += P + L + M,
        ie += Q,
        ie += "</svg>";
        break;
    case "g":
        ie += '<g width="' + o + '" height="' + c + '">' + s,
        ie += P + L + M,
        ie += Q,
        ie += "</g>";
        break;
    default:
        ie += (P + L + M + Q).replace(/^\s+/, "");
        break
    }
    return ie
}
;
var y0 = gu
  , w0 = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(ss, "__esModule", {
    value: !0
});
ss.QRCode = void 0;
const E0 = ot
  , ac = ts
  , S0 = w0(y0)
  , R0 = e=>{
    const [t,r] = (0,
    ac.useState)("");
    return (0,
    ac.useEffect)(()=>{
        var n, i;
        const s = new S0.default({
            content: e.content,
            background: e.bgColor || "#ffffff",
            color: e.fgColor || "#000000",
            container: "svg",
            ecl: "M",
            width: (n = e.width) !== null && n !== void 0 ? n : 256,
            height: (i = e.height) !== null && i !== void 0 ? i : 256,
            padding: 0,
            image: e.image
        })
          , o = Buffer.from(s.svg(), "utf8").toString("base64");
        r(`data:image/svg+xml;base64,${o}`)
    }
    , [e.bgColor, e.content, e.fgColor, e.height, e.image, e.width]),
    t ? (0,
    E0.h)("img", {
        src: t,
        alt: "QR Code"
    }) : null
}
;
ss.QRCode = R0;
var os = {}
  , Qo = {};
Object.defineProperty(Qo, "__esModule", {
    value: !0
});
Qo.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
var M0 = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(os, "__esModule", {
    value: !0
});
os.Spinner = void 0;
const _i = ot
  , C0 = M0(Qo)
  , k0 = e=>{
    var t;
    const r = (t = e.size) !== null && t !== void 0 ? t : 64
      , n = e.color || "#000";
    return (0,
    _i.h)("div", {
        class: "-cbwsdk-spinner"
    }, (0,
    _i.h)("style", null, C0.default), (0,
    _i.h)("svg", {
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            width: r,
            height: r
        }
    }, (0,
    _i.h)("circle", {
        style: {
            cx: 50,
            cy: 50,
            r: 45,
            stroke: n
        }
    })))
}
;
os.Spinner = k0;
var Yo = {};
Object.defineProperty(Yo, "__esModule", {
    value: !0
});
Yo.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}";
var _u = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(ln, "__esModule", {
    value: !0
});
ln.CoinbaseWalletSteps = ln.ConnectContent = void 0;
const Sr = _u(ei)
  , oe = ot
  , I0 = z
  , x0 = mn
  , A0 = rs
  , T0 = ns
  , N0 = is
  , L0 = ss
  , O0 = os
  , P0 = _u(Yo)
  , Vs = {
    title: "Coinbase Wallet app",
    description: "Connect with your self-custody wallet",
    steps: mu
}
  , $0 = e=>e === "light" ? "#FFFFFF" : "#0A0B0D";
function B0(e) {
    const {theme: t} = e
      , r = (0,
    I0.createQrUrl)(e.sessionId, e.sessionSecret, e.linkAPIUrl, e.isParentConnection, e.version, e.chainId)
      , n = Vs.steps;
    return (0,
    oe.h)("div", {
        "data-testid": "connect-content",
        className: (0,
        Sr.default)("-cbwsdk-connect-content", t)
    }, (0,
    oe.h)("style", null, P0.default), (0,
    oe.h)("div", {
        className: "-cbwsdk-connect-content-header"
    }, (0,
    oe.h)("h2", {
        className: (0,
        Sr.default)("-cbwsdk-connect-content-heading", t)
    }, "Scan to connect with our mobile app"), e.onCancel && (0,
    oe.h)("button", {
        type: "button",
        className: "-cbwsdk-cancel-button",
        onClick: e.onCancel
    }, (0,
    oe.h)(A0.CloseIcon, {
        fill: t === "light" ? "#0A0B0D" : "#FFFFFF"
    }))), (0,
    oe.h)("div", {
        className: "-cbwsdk-connect-content-layout"
    }, (0,
    oe.h)("div", {
        className: "-cbwsdk-connect-content-column-left"
    }, (0,
    oe.h)(D0, {
        title: Vs.title,
        description: Vs.description,
        theme: t
    })), (0,
    oe.h)("div", {
        className: "-cbwsdk-connect-content-column-right"
    }, (0,
    oe.h)("div", {
        className: "-cbwsdk-connect-content-qr-wrapper"
    }, (0,
    oe.h)(L0.QRCode, {
        content: r,
        width: 200,
        height: 200,
        fgColor: "#000",
        bgColor: "transparent"
    }), (0,
    oe.h)("input", {
        type: "hidden",
        name: "cbw-cbwsdk-version",
        value: x0.LIB_VERSION
    }), (0,
    oe.h)("input", {
        type: "hidden",
        value: r
    })), (0,
    oe.h)(n, {
        theme: t
    }), !e.isConnected && (0,
    oe.h)("div", {
        "data-testid": "connecting-spinner",
        className: (0,
        Sr.default)("-cbwsdk-connect-content-qr-connecting", t)
    }, (0,
    oe.h)(O0.Spinner, {
        size: 36,
        color: t === "dark" ? "#FFF" : "#000"
    }), (0,
    oe.h)("p", null, "Connecting...")))))
}
ln.ConnectContent = B0;
function D0({title: e, description: t, theme: r}) {
    return (0,
    oe.h)("div", {
        className: (0,
        Sr.default)("-cbwsdk-connect-item", r)
    }, (0,
    oe.h)("div", null, (0,
    oe.h)(T0.CoinbaseWalletRound, null)), (0,
    oe.h)("div", {
        className: "-cbwsdk-connect-item-copy-wrapper"
    }, (0,
    oe.h)("h3", {
        className: "-cbwsdk-connect-item-title"
    }, e), (0,
    oe.h)("p", {
        className: "-cbwsdk-connect-item-description"
    }, t)))
}
function mu({theme: e}) {
    return (0,
    oe.h)("ol", {
        className: "-cbwsdk-wallet-steps"
    }, (0,
    oe.h)("li", {
        className: (0,
        Sr.default)("-cbwsdk-wallet-steps-item", e)
    }, (0,
    oe.h)("div", {
        className: "-cbwsdk-wallet-steps-item-wrapper"
    }, "Open Coinbase Wallet app")), (0,
    oe.h)("li", {
        className: (0,
        Sr.default)("-cbwsdk-wallet-steps-item", e)
    }, (0,
    oe.h)("div", {
        className: "-cbwsdk-wallet-steps-item-wrapper"
    }, (0,
    oe.h)("span", null, "Tap ", (0,
    oe.h)("strong", null, "Scan"), " "), (0,
    oe.h)("span", {
        className: (0,
        Sr.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", e)
    }, (0,
    oe.h)(N0.QRCodeIcon, {
        fill: $0(e)
    })))))
}
ln.CoinbaseWalletSteps = mu;
var as = {}
  , cs = {};
Object.defineProperty(cs, "__esModule", {
    value: !0
});
cs.ArrowLeftIcon = void 0;
const cc = ot;
function F0(e) {
    return (0,
    cc.h)("svg", Object.assign({
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    cc.h)("path", {
        d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"
    }))
}
cs.ArrowLeftIcon = F0;
var ls = {};
Object.defineProperty(ls, "__esModule", {
    value: !0
});
ls.LaptopIcon = void 0;
const qs = ot;
function j0(e) {
    return (0,
    qs.h)("svg", Object.assign({
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    qs.h)("path", {
        d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"
    }), (0,
    qs.h)("path", {
        d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"
    }))
}
ls.LaptopIcon = j0;
var us = {};
Object.defineProperty(us, "__esModule", {
    value: !0
});
us.SafeIcon = void 0;
const lc = ot;
function H0(e) {
    return (0,
    lc.h)("svg", Object.assign({
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    lc.h)("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"
    }))
}
us.SafeIcon = H0;
var Xo = {};
Object.defineProperty(Xo, "__esModule", {
    value: !0
});
Xo.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}";
var vu = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(as, "__esModule", {
    value: !0
});
as.TryExtensionContent = void 0;
const dr = vu(ei)
  , Ge = ot
  , zs = ts
  , U0 = cs
  , W0 = ls
  , V0 = us
  , q0 = vu(Xo);
function z0({theme: e}) {
    const [t,r] = (0,
    zs.useState)(!1)
      , n = (0,
    zs.useCallback)(()=>{
        window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank")
    }
    , [])
      , i = (0,
    zs.useCallback)(()=>{
        t ? window.location.reload() : (n(),
        r(!0))
    }
    , [n, t]);
    return (0,
    Ge.h)("div", {
        class: (0,
        dr.default)("-cbwsdk-try-extension", e)
    }, (0,
    Ge.h)("style", null, q0.default), (0,
    Ge.h)("div", {
        class: "-cbwsdk-try-extension-column-half"
    }, (0,
    Ge.h)("h3", {
        class: (0,
        dr.default)("-cbwsdk-try-extension-heading", e)
    }, "Or try the Coinbase Wallet browser extension"), (0,
    Ge.h)("div", {
        class: "-cbwsdk-try-extension-cta-wrapper"
    }, (0,
    Ge.h)("button", {
        class: (0,
        dr.default)("-cbwsdk-try-extension-cta", e),
        onClick: i
    }, t ? "Refresh" : "Install"), (0,
    Ge.h)("div", null, !t && (0,
    Ge.h)(U0.ArrowLeftIcon, {
        class: "-cbwsdk-try-extension-cta-icon",
        fill: e === "light" ? "#0052FF" : "#588AF5"
    })))), (0,
    Ge.h)("div", {
        class: "-cbwsdk-try-extension-column-half"
    }, (0,
    Ge.h)("ul", {
        class: "-cbwsdk-try-extension-list"
    }, (0,
    Ge.h)("li", {
        class: "-cbwsdk-try-extension-list-item"
    }, (0,
    Ge.h)("div", {
        class: "-cbwsdk-try-extension-list-item-icon-wrapper"
    }, (0,
    Ge.h)("span", {
        class: (0,
        dr.default)("-cbwsdk-try-extension-list-item-icon", e)
    }, (0,
    Ge.h)(W0.LaptopIcon, {
        fill: e === "light" ? "#0A0B0D" : "#FFFFFF"
    }))), (0,
    Ge.h)("div", {
        class: (0,
        dr.default)("-cbwsdk-try-extension-list-item-copy", e)
    }, "Connect with dapps with just one click on your desktop browser")), (0,
    Ge.h)("li", {
        class: "-cbwsdk-try-extension-list-item"
    }, (0,
    Ge.h)("div", {
        class: "-cbwsdk-try-extension-list-item-icon-wrapper"
    }, (0,
    Ge.h)("span", {
        class: (0,
        dr.default)("-cbwsdk-try-extension-list-item-icon", e)
    }, (0,
    Ge.h)(V0.SafeIcon, {
        fill: e === "light" ? "#0A0B0D" : "#FFFFFF"
    }))), (0,
    Ge.h)("div", {
        class: (0,
        dr.default)("-cbwsdk-try-extension-list-item-copy", e)
    }, "Add an additional layer of security by using a supported Ledger hardware wallet")))))
}
as.TryExtensionContent = z0;
var ea = {};
Object.defineProperty(ea, "__esModule", {
    value: !0
});
ea.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}";
var bu = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(es, "__esModule", {
    value: !0
});
es.ConnectDialog = void 0;
const Gs = bu(ei)
  , fr = ot
  , Js = ts
  , G0 = ln
  , J0 = as
  , Z0 = bu(ea)
  , K0 = e=>{
    const {isOpen: t, darkMode: r} = e
      , [n,i] = (0,
    Js.useState)(!t)
      , [s,o] = (0,
    Js.useState)(!t);
    (0,
    Js.useEffect)(()=>{
        const l = [window.setTimeout(()=>{
            o(!t)
        }
        , 10)];
        return t ? i(!1) : l.push(window.setTimeout(()=>{
            i(!0)
        }
        , 360)),
        ()=>{
            l.forEach(window.clearTimeout)
        }
    }
    , [t]);
    const c = r ? "dark" : "light";
    return (0,
    fr.h)("div", {
        class: (0,
        Gs.default)("-cbwsdk-connect-dialog-container", n && "-cbwsdk-connect-dialog-container-hidden")
    }, (0,
    fr.h)("style", null, Z0.default), (0,
    fr.h)("div", {
        class: (0,
        Gs.default)("-cbwsdk-connect-dialog-backdrop", c, s && "-cbwsdk-connect-dialog-backdrop-hidden")
    }), (0,
    fr.h)("div", {
        class: "-cbwsdk-connect-dialog"
    }, (0,
    fr.h)("div", {
        class: (0,
        Gs.default)("-cbwsdk-connect-dialog-box", s && "-cbwsdk-connect-dialog-box-hidden")
    }, e.connectDisabled ? null : (0,
    fr.h)(G0.ConnectContent, {
        theme: c,
        version: e.version,
        sessionId: e.sessionId,
        sessionSecret: e.sessionSecret,
        linkAPIUrl: e.linkAPIUrl,
        isConnected: e.isConnected,
        isParentConnection: e.isParentConnection,
        chainId: e.chainId,
        onCancel: e.onCancel
    }), (0,
    fr.h)(J0.TryExtensionContent, {
        theme: c
    }))))
}
;
es.ConnectDialog = K0;
Object.defineProperty(Yi, "__esModule", {
    value: !0
});
Yi.LinkFlow = void 0;
const Zs = ot
  , Q0 = es;
class Y0 {
    constructor(t) {
        this.connected = !1,
        this.chainId = 1,
        this.isOpen = !1,
        this.onCancel = null,
        this.root = null,
        this.connectDisabled = !1,
        this.darkMode = t.darkMode,
        this.version = t.version,
        this.sessionId = t.sessionId,
        this.sessionSecret = t.sessionSecret,
        this.linkAPIUrl = t.linkAPIUrl,
        this.isParentConnection = t.isParentConnection
    }
    attach(t) {
        this.root = document.createElement("div"),
        this.root.className = "-cbwsdk-link-flow-root",
        t.appendChild(this.root),
        this.render()
    }
    setConnected(t) {
        this.connected !== t && (this.connected = t,
        this.render())
    }
    setChainId(t) {
        this.chainId !== t && (this.chainId = t,
        this.render())
    }
    detach() {
        var t;
        this.root && ((0,
        Zs.render)(null, this.root),
        (t = this.root.parentElement) === null || t === void 0 || t.removeChild(this.root))
    }
    setConnectDisabled(t) {
        this.connectDisabled = t
    }
    open(t) {
        this.isOpen = !0,
        this.onCancel = t.onCancel,
        this.render()
    }
    close() {
        this.isOpen = !1,
        this.onCancel = null,
        this.render()
    }
    render() {
        this.root && (0,
        Zs.render)((0,
        Zs.h)(Q0.ConnectDialog, {
            darkMode: this.darkMode,
            version: this.version,
            sessionId: this.sessionId,
            sessionSecret: this.sessionSecret,
            linkAPIUrl: this.linkAPIUrl,
            isOpen: this.isOpen,
            isConnected: this.connected,
            isParentConnection: this.isParentConnection,
            chainId: this.chainId,
            onCancel: this.onCancel,
            connectDisabled: this.connectDisabled
        }), this.root)
    }
}
Yi.LinkFlow = Y0;
var ta = {}
  , ra = {};
Object.defineProperty(ra, "__esModule", {
    value: !0
});
ra.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function(e) {
    var t = J && J.__importDefault || function(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.SnackbarInstance = e.SnackbarContainer = e.Snackbar = void 0;
    const r = t(ei)
      , n = ot
      , i = ts
      , s = t(ra)
      , o = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+"
      , c = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
    class l {
        constructor(_) {
            this.items = new Map,
            this.nextItemKey = 0,
            this.root = null,
            this.darkMode = _.darkMode
        }
        attach(_) {
            this.root = document.createElement("div"),
            this.root.className = "-cbwsdk-snackbar-root",
            _.appendChild(this.root),
            this.render()
        }
        presentItem(_) {
            const R = this.nextItemKey++;
            return this.items.set(R, _),
            this.render(),
            ()=>{
                this.items.delete(R),
                this.render()
            }
        }
        clear() {
            this.items.clear(),
            this.render()
        }
        render() {
            this.root && (0,
            n.render)((0,
            n.h)("div", null, (0,
            n.h)(e.SnackbarContainer, {
                darkMode: this.darkMode
            }, Array.from(this.items.entries()).map(([_,R])=>(0,
            n.h)(e.SnackbarInstance, Object.assign({}, R, {
                key: _
            }))))), this.root)
        }
    }
    e.Snackbar = l;
    const u = f=>(0,
    n.h)("div", {
        class: (0,
        r.default)("-cbwsdk-snackbar-container")
    }, (0,
    n.h)("style", null, s.default), (0,
    n.h)("div", {
        class: "-cbwsdk-snackbar"
    }, f.children));
    e.SnackbarContainer = u;
    const p = ({autoExpand: f, message: _, menuItems: R})=>{
        const [x,P] = (0,
        i.useState)(!0)
          , [L,M] = (0,
        i.useState)(f ?? !1);
        (0,
        i.useEffect)(()=>{
            const N = [window.setTimeout(()=>{
                P(!1)
            }
            , 1), window.setTimeout(()=>{
                M(!0)
            }
            , 1e4)];
            return ()=>{
                N.forEach(window.clearTimeout)
            }
        }
        );
        const k = ()=>{
            M(!L)
        }
        ;
        return (0,
        n.h)("div", {
            class: (0,
            r.default)("-cbwsdk-snackbar-instance", x && "-cbwsdk-snackbar-instance-hidden", L && "-cbwsdk-snackbar-instance-expanded")
        }, (0,
        n.h)("div", {
            class: "-cbwsdk-snackbar-instance-header",
            onClick: k
        }, (0,
        n.h)("img", {
            src: o,
            class: "-cbwsdk-snackbar-instance-header-cblogo"
        }), " ", (0,
        n.h)("div", {
            class: "-cbwsdk-snackbar-instance-header-message"
        }, _), (0,
        n.h)("div", {
            class: "-gear-container"
        }, !L && (0,
        n.h)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, (0,
        n.h)("circle", {
            cx: "12",
            cy: "12",
            r: "12",
            fill: "#F5F7F8"
        })), (0,
        n.h)("img", {
            src: c,
            class: "-gear-icon",
            title: "Expand"
        }))), R && R.length > 0 && (0,
        n.h)("div", {
            class: "-cbwsdk-snackbar-instance-menu"
        }, R.map((N,$)=>(0,
        n.h)("div", {
            class: (0,
            r.default)("-cbwsdk-snackbar-instance-menu-item", N.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
            onClick: N.onClick,
            key: $
        }, (0,
        n.h)("svg", {
            width: N.svgWidth,
            height: N.svgHeight,
            viewBox: "0 0 10 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, (0,
        n.h)("path", {
            "fill-rule": N.defaultFillRule,
            "clip-rule": N.defaultClipRule,
            d: N.path,
            fill: "#AAAAAA"
        })), (0,
        n.h)("span", {
            class: (0,
            r.default)("-cbwsdk-snackbar-instance-menu-item-info", N.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
        }, N.info)))))
    }
    ;
    e.SnackbarInstance = p
}
)(ta);
Object.defineProperty(Kn, "__esModule", {
    value: !0
});
Kn.WalletLinkRelayUI = void 0;
const X0 = Qn
  , ep = Yi
  , tp = ta;
class rp {
    constructor(t) {
        this.standalone = null,
        this.attached = !1,
        this.snackbar = new tp.Snackbar({
            darkMode: t.darkMode
        }),
        this.linkFlow = new ep.LinkFlow({
            darkMode: t.darkMode,
            version: t.version,
            sessionId: t.session.id,
            sessionSecret: t.session.secret,
            linkAPIUrl: t.linkAPIUrl,
            isParentConnection: !1
        })
    }
    attach() {
        if (this.attached)
            throw new Error("Coinbase Wallet SDK UI is already attached");
        const t = document.documentElement
          , r = document.createElement("div");
        r.className = "-cbwsdk-css-reset",
        t.appendChild(r),
        this.linkFlow.attach(r),
        this.snackbar.attach(r),
        this.attached = !0,
        (0,
        X0.injectCssReset)()
    }
    setConnected(t) {
        this.linkFlow.setConnected(t)
    }
    setChainId(t) {
        this.linkFlow.setChainId(t)
    }
    setConnectDisabled(t) {
        this.linkFlow.setConnectDisabled(t)
    }
    addEthereumChain() {}
    watchAsset() {}
    switchEthereumChain() {}
    requestEthereumAccounts(t) {
        this.linkFlow.open({
            onCancel: t.onCancel
        })
    }
    hideRequestEthereumAccounts() {
        this.linkFlow.close()
    }
    signEthereumMessage() {}
    signEthereumTransaction() {}
    submitEthereumTransaction() {}
    ethereumAddressFromSignedMessage() {}
    showConnecting(t) {
        let r;
        return t.isUnlinkedErrorState ? r = {
            autoExpand: !0,
            message: "Connection lost",
            menuItems: [{
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection
            }]
        } : r = {
            message: "Confirm on phone",
            menuItems: [{
                isRed: !0,
                info: "Cancel transaction",
                svgWidth: "11",
                svgHeight: "11",
                path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                defaultFillRule: "inherit",
                defaultClipRule: "inherit",
                onClick: t.onCancel
            }, {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection
            }]
        },
        this.snackbar.presentItem(r)
    }
    reloadUI() {
        document.location.reload()
    }
    inlineAccountsResponse() {
        return !1
    }
    inlineAddEthereumChain() {
        return !1
    }
    inlineWatchAsset() {
        return !1
    }
    inlineSwitchEthereumChain() {
        return !1
    }
    setStandalone(t) {
        this.standalone = t
    }
    isStandalone() {
        var t;
        return (t = this.standalone) !== null && t !== void 0 ? t : !1
    }
}
Kn.WalletLinkRelayUI = rp;
Object.defineProperty(qn, "__esModule", {
    value: !0
});
qn.WalletLinkRelay = void 0;
const Jr = jn
  , np = Je
  , Ue = z
  , pr = vn
  , uc = gt
  , zt = bn
  , ip = Zi
  , gr = _n
  , sp = Kn;
class Dt extends uc.RelayAbstract {
    constructor(t) {
        var r;
        super(),
        this.accountsCallback = null,
        this.chainCallbackParams = {
            chainId: "",
            jsonRpcUrl: ""
        },
        this.chainCallback = null,
        this.dappDefaultChain = 1,
        this.appName = "",
        this.appLogoUrl = null,
        this.linkedUpdated = o=>{
            var c;
            this.isLinked = o;
            const l = this.storage.getItem(uc.LOCAL_STORAGE_ADDRESSES_KEY);
            if (o && (this.session.linked = o),
            this.isUnlinkedErrorState = !1,
            l) {
                const u = l.split(" ")
                  , p = this.storage.getItem("IsStandaloneSigning") === "true";
                if (u[0] !== "" && !o && this.session.linked && !p) {
                    this.isUnlinkedErrorState = !0;
                    const f = this.getSessionIdHash();
                    (c = this.diagnostic) === null || c === void 0 || c.log(pr.EVENTS.UNLINKED_ERROR_STATE, {
                        sessionIdHash: f
                    })
                }
            }
        }
        ,
        this.metadataUpdated = (o,c)=>{
            this.storage.setItem(o, c)
        }
        ,
        this.chainUpdated = (o,c)=>{
            this.chainCallbackParams.chainId === o && this.chainCallbackParams.jsonRpcUrl === c || (this.chainCallbackParams = {
                chainId: o,
                jsonRpcUrl: c
            },
            this.chainCallback && this.chainCallback(o, c))
        }
        ,
        this.accountUpdated = o=>{
            this.accountsCallback && this.accountsCallback([o]),
            Dt.accountRequestCallbackIds.size > 0 && (Array.from(Dt.accountRequestCallbackIds.values()).forEach(c=>{
                const l = {
                    type: "WEB3_RESPONSE",
                    id: c,
                    response: {
                        method: "requestEthereumAccounts",
                        result: [o]
                    }
                };
                this.invokeCallback(Object.assign(Object.assign({}, l), {
                    id: c
                }))
            }
            ),
            Dt.accountRequestCallbackIds.clear())
        }
        ,
        this.connectedUpdated = o=>{
            this.ui.setConnected(o)
        }
        ,
        this.resetAndReload = this.resetAndReload.bind(this),
        this.linkAPIUrl = t.linkAPIUrl,
        this.storage = t.storage,
        this.options = t;
        const {session: n, ui: i, connection: s} = this.subscribe();
        this._session = n,
        this.connection = s,
        this.relayEventManager = t.relayEventManager,
        this.diagnostic = t.diagnosticLogger,
        this._reloadOnDisconnect = (r = t.reloadOnDisconnect) !== null && r !== void 0 ? r : !0,
        this.ui = i
    }
    subscribe() {
        const t = zt.Session.load(this.storage) || new zt.Session(this.storage).save()
          , {linkAPIUrl: r, diagnostic: n} = this
          , i = new ip.WalletLinkConnection({
            session: t,
            linkAPIUrl: r,
            diagnostic: n,
            listener: this
        })
          , {version: s, darkMode: o} = this.options
          , c = this.options.uiConstructor({
            linkAPIUrl: r,
            version: s,
            darkMode: o,
            session: t
        });
        return i.connect(),
        {
            session: t,
            ui: c,
            connection: i
        }
    }
    attachUI() {
        this.ui.attach()
    }
    resetAndReload() {
        Promise.race([this.connection.setSessionMetadata("__destroyed", "1"), new Promise(t=>setTimeout(()=>t(null), 1e3))]).then(()=>{
            var t, r;
            const n = this.ui.isStandalone();
            (t = this.diagnostic) === null || t === void 0 || t.log(pr.EVENTS.SESSION_STATE_CHANGE, {
                method: "relay::resetAndReload",
                sessionMetadataChange: "__destroyed, 1",
                sessionIdHash: this.getSessionIdHash()
            }),
            this.connection.destroy();
            const i = zt.Session.load(this.storage);
            if ((i == null ? void 0 : i.id) === this._session.id ? this.storage.clear() : i && ((r = this.diagnostic) === null || r === void 0 || r.log(pr.EVENTS.SKIPPED_CLEARING_SESSION, {
                sessionIdHash: this.getSessionIdHash(),
                storedSessionIdHash: zt.Session.hash(i.id)
            })),
            this._reloadOnDisconnect) {
                this.ui.reloadUI();
                return
            }
            this.accountsCallback && this.accountsCallback([], !0);
            const {session: s, ui: o, connection: c} = this.subscribe();
            this._session = s,
            this.connection = c,
            this.ui = o,
            n && this.ui.setStandalone && this.ui.setStandalone(!0),
            this.attachUI()
        }
        ).catch(t=>{
            var r;
            (r = this.diagnostic) === null || r === void 0 || r.log(pr.EVENTS.FAILURE, {
                method: "relay::resetAndReload",
                message: `failed to reset and reload with ${t}`,
                sessionIdHash: this.getSessionIdHash()
            })
        }
        )
    }
    setAppInfo(t, r) {
        this.appName = t,
        this.appLogoUrl = r
    }
    getStorageItem(t) {
        return this.storage.getItem(t)
    }
    get session() {
        return this._session
    }
    setStorageItem(t, r) {
        this.storage.setItem(t, r)
    }
    signEthereumMessage(t, r, n, i) {
        return this.sendRequest({
            method: "signEthereumMessage",
            params: {
                message: (0,
                Ue.hexStringFromBuffer)(t, !0),
                address: r,
                addPrefix: n,
                typedDataJson: i || null
            }
        })
    }
    ethereumAddressFromSignedMessage(t, r, n) {
        return this.sendRequest({
            method: "ethereumAddressFromSignedMessage",
            params: {
                message: (0,
                Ue.hexStringFromBuffer)(t, !0),
                signature: (0,
                Ue.hexStringFromBuffer)(r, !0),
                addPrefix: n
            }
        })
    }
    signEthereumTransaction(t) {
        return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
                fromAddress: t.fromAddress,
                toAddress: t.toAddress,
                weiValue: (0,
                Ue.bigIntStringFromBN)(t.weiValue),
                data: (0,
                Ue.hexStringFromBuffer)(t.data, !0),
                nonce: t.nonce,
                gasPriceInWei: t.gasPriceInWei ? (0,
                Ue.bigIntStringFromBN)(t.gasPriceInWei) : null,
                maxFeePerGas: t.gasPriceInWei ? (0,
                Ue.bigIntStringFromBN)(t.gasPriceInWei) : null,
                maxPriorityFeePerGas: t.gasPriceInWei ? (0,
                Ue.bigIntStringFromBN)(t.gasPriceInWei) : null,
                gasLimit: t.gasLimit ? (0,
                Ue.bigIntStringFromBN)(t.gasLimit) : null,
                chainId: t.chainId,
                shouldSubmit: !1
            }
        })
    }
    signAndSubmitEthereumTransaction(t) {
        return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
                fromAddress: t.fromAddress,
                toAddress: t.toAddress,
                weiValue: (0,
                Ue.bigIntStringFromBN)(t.weiValue),
                data: (0,
                Ue.hexStringFromBuffer)(t.data, !0),
                nonce: t.nonce,
                gasPriceInWei: t.gasPriceInWei ? (0,
                Ue.bigIntStringFromBN)(t.gasPriceInWei) : null,
                maxFeePerGas: t.maxFeePerGas ? (0,
                Ue.bigIntStringFromBN)(t.maxFeePerGas) : null,
                maxPriorityFeePerGas: t.maxPriorityFeePerGas ? (0,
                Ue.bigIntStringFromBN)(t.maxPriorityFeePerGas) : null,
                gasLimit: t.gasLimit ? (0,
                Ue.bigIntStringFromBN)(t.gasLimit) : null,
                chainId: t.chainId,
                shouldSubmit: !0
            }
        })
    }
    submitEthereumTransaction(t, r) {
        return this.sendRequest({
            method: "submitEthereumTransaction",
            params: {
                signedTransaction: (0,
                Ue.hexStringFromBuffer)(t, !0),
                chainId: r
            }
        })
    }
    scanQRCode(t) {
        return this.sendRequest({
            method: "scanQRCode",
            params: {
                regExp: t
            }
        })
    }
    getQRCodeUrl() {
        return (0,
        Ue.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain)
    }
    genericRequest(t, r) {
        return this.sendRequest({
            method: "generic",
            params: {
                action: r,
                data: t
            }
        })
    }
    sendGenericMessage(t) {
        return this.sendRequest(t)
    }
    sendRequest(t) {
        let r = null;
        const n = (0,
        Ue.randomBytesHex)(8)
          , i = o=>{
            this.publishWeb3RequestCanceledEvent(n),
            this.handleErrorResponse(n, t.method, o),
            r == null || r()
        }
        ;
        return {
            promise: new Promise((o,c)=>{
                this.ui.isStandalone() || (r = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: i,
                    onResetConnection: this.resetAndReload
                })),
                this.relayEventManager.callbacks.set(n, l=>{
                    if (r == null || r(),
                    (0,
                    gr.isErrorResponse)(l))
                        return c(new Error(l.errorMessage));
                    o(l)
                }
                ),
                this.ui.isStandalone() ? this.sendRequestStandalone(n, t) : this.publishWeb3RequestEvent(n, t)
            }
            ),
            cancel: i
        }
    }
    setConnectDisabled(t) {
        this.ui.setConnectDisabled(t)
    }
    setAccountsCallback(t) {
        this.accountsCallback = t
    }
    setChainCallback(t) {
        this.chainCallback = t
    }
    setDappDefaultChainCallback(t) {
        this.dappDefaultChain = t,
        this.ui instanceof sp.WalletLinkRelayUI && this.ui.setChainId(t)
    }
    publishWeb3RequestEvent(t, r) {
        var n;
        const i = {
            type: "WEB3_REQUEST",
            id: t,
            request: r
        }
          , s = zt.Session.load(this.storage);
        (n = this.diagnostic) === null || n === void 0 || n.log(pr.EVENTS.WEB3_REQUEST, {
            eventId: i.id,
            method: `relay::${r.method}`,
            sessionIdHash: this.getSessionIdHash(),
            storedSessionIdHash: s ? zt.Session.hash(s.id) : "",
            isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
        }),
        this.publishEvent("Web3Request", i, !0).then(o=>{
            var c;
            (c = this.diagnostic) === null || c === void 0 || c.log(pr.EVENTS.WEB3_REQUEST_PUBLISHED, {
                eventId: i.id,
                method: `relay::${r.method}`,
                sessionIdHash: this.getSessionIdHash(),
                storedSessionIdHash: s ? zt.Session.hash(s.id) : "",
                isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
            })
        }
        ).catch(o=>{
            this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: i.id,
                response: {
                    method: r.method,
                    errorMessage: o.message
                }
            })
        }
        )
    }
    publishWeb3RequestCanceledEvent(t) {
        const r = {
            type: "WEB3_REQUEST_CANCELED",
            id: t
        };
        this.publishEvent("Web3RequestCanceled", r, !1).then()
    }
    publishEvent(t, r, n) {
        return this.connection.publishEvent(t, r, n)
    }
    handleWeb3ResponseMessage(t) {
        var r;
        const {response: n} = t;
        if ((r = this.diagnostic) === null || r === void 0 || r.log(pr.EVENTS.WEB3_RESPONSE, {
            eventId: t.id,
            method: `relay::${n.method}`,
            sessionIdHash: this.getSessionIdHash()
        }),
        n.method === "requestEthereumAccounts") {
            Dt.accountRequestCallbackIds.forEach(i=>this.invokeCallback(Object.assign(Object.assign({}, t), {
                id: i
            }))),
            Dt.accountRequestCallbackIds.clear();
            return
        }
        this.invokeCallback(t)
    }
    handleErrorResponse(t, r, n, i) {
        var s;
        const o = (s = n == null ? void 0 : n.message) !== null && s !== void 0 ? s : (0,
        Jr.getMessageFromCode)(i);
        this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: t,
            response: {
                method: r,
                errorMessage: o,
                errorCode: i
            }
        })
    }
    invokeCallback(t) {
        const r = this.relayEventManager.callbacks.get(t.id);
        r && (r(t.response),
        this.relayEventManager.callbacks.delete(t.id))
    }
    requestEthereumAccounts() {
        const t = {
            method: "requestEthereumAccounts",
            params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl || null
            }
        }
          , r = (0,
        Ue.randomBytesHex)(8)
          , n = s=>{
            this.publishWeb3RequestCanceledEvent(r),
            this.handleErrorResponse(r, t.method, s)
        }
        ;
        return {
            promise: new Promise((s,o)=>{
                if (this.relayEventManager.callbacks.set(r, c=>{
                    if (this.ui.hideRequestEthereumAccounts(),
                    (0,
                    gr.isErrorResponse)(c))
                        return o(new Error(c.errorMessage));
                    s(c)
                }
                ),
                this.ui.inlineAccountsResponse()) {
                    const c = l=>{
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: r,
                            response: {
                                method: "requestEthereumAccounts",
                                result: l
                            }
                        })
                    }
                    ;
                    this.ui.requestEthereumAccounts({
                        onCancel: n,
                        onAccounts: c
                    })
                } else {
                    const c = Jr.standardErrors.provider.userRejectedRequest("User denied account authorization");
                    this.ui.requestEthereumAccounts({
                        onCancel: ()=>n(c)
                    })
                }
                Dt.accountRequestCallbackIds.add(r),
                !this.ui.inlineAccountsResponse() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(r, t)
            }
            ),
            cancel: n
        }
    }
    selectProvider(t) {
        const r = {
            method: "selectProvider",
            params: {
                providerOptions: t
            }
        }
          , n = (0,
        Ue.randomBytesHex)(8)
          , i = o=>{
            this.publishWeb3RequestCanceledEvent(n),
            this.handleErrorResponse(n, r.method, o)
        }
          , s = new Promise((o,c)=>{
            this.relayEventManager.callbacks.set(n, p=>{
                if ((0,
                gr.isErrorResponse)(p))
                    return c(new Error(p.errorMessage));
                o(p)
            }
            );
            const l = p=>{
                this.handleWeb3ResponseMessage({
                    type: "WEB3_RESPONSE",
                    id: n,
                    response: {
                        method: "selectProvider",
                        result: np.ProviderType.Unselected
                    }
                })
            }
              , u = p=>{
                this.handleWeb3ResponseMessage({
                    type: "WEB3_RESPONSE",
                    id: n,
                    response: {
                        method: "selectProvider",
                        result: p
                    }
                })
            }
            ;
            this.ui.selectProvider && this.ui.selectProvider({
                onApprove: u,
                onCancel: l,
                providerOptions: t
            })
        }
        );
        return {
            cancel: i,
            promise: s
        }
    }
    watchAsset(t, r, n, i, s, o) {
        const c = {
            method: "watchAsset",
            params: {
                type: t,
                options: {
                    address: r,
                    symbol: n,
                    decimals: i,
                    image: s
                },
                chainId: o
            }
        };
        let l = null;
        const u = (0,
        Ue.randomBytesHex)(8)
          , p = _=>{
            this.publishWeb3RequestCanceledEvent(u),
            this.handleErrorResponse(u, c.method, _),
            l == null || l()
        }
        ;
        this.ui.inlineWatchAsset() || (l = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: p,
            onResetConnection: this.resetAndReload
        }));
        const f = new Promise((_,R)=>{
            this.relayEventManager.callbacks.set(u, L=>{
                if (l == null || l(),
                (0,
                gr.isErrorResponse)(L))
                    return R(new Error(L.errorMessage));
                _(L)
            }
            );
            const x = L=>{
                this.handleWeb3ResponseMessage({
                    type: "WEB3_RESPONSE",
                    id: u,
                    response: {
                        method: "watchAsset",
                        result: !1
                    }
                })
            }
              , P = ()=>{
                this.handleWeb3ResponseMessage({
                    type: "WEB3_RESPONSE",
                    id: u,
                    response: {
                        method: "watchAsset",
                        result: !0
                    }
                })
            }
            ;
            this.ui.inlineWatchAsset() && this.ui.watchAsset({
                onApprove: P,
                onCancel: x,
                type: t,
                address: r,
                symbol: n,
                decimals: i,
                image: s,
                chainId: o
            }),
            !this.ui.inlineWatchAsset() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(u, c)
        }
        );
        return {
            cancel: p,
            promise: f
        }
    }
    addEthereumChain(t, r, n, i, s, o) {
        const c = {
            method: "addEthereumChain",
            params: {
                chainId: t,
                rpcUrls: r,
                blockExplorerUrls: i,
                chainName: s,
                iconUrls: n,
                nativeCurrency: o
            }
        };
        let l = null;
        const u = (0,
        Ue.randomBytesHex)(8)
          , p = _=>{
            this.publishWeb3RequestCanceledEvent(u),
            this.handleErrorResponse(u, c.method, _),
            l == null || l()
        }
        ;
        return this.ui.inlineAddEthereumChain(t) || (l = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: p,
            onResetConnection: this.resetAndReload
        })),
        {
            promise: new Promise((_,R)=>{
                this.relayEventManager.callbacks.set(u, L=>{
                    if (l == null || l(),
                    (0,
                    gr.isErrorResponse)(L))
                        return R(new Error(L.errorMessage));
                    _(L)
                }
                );
                const x = L=>{
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: u,
                        response: {
                            method: "addEthereumChain",
                            result: {
                                isApproved: !1,
                                rpcUrl: ""
                            }
                        }
                    })
                }
                  , P = L=>{
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: u,
                        response: {
                            method: "addEthereumChain",
                            result: {
                                isApproved: !0,
                                rpcUrl: L
                            }
                        }
                    })
                }
                ;
                this.ui.inlineAddEthereumChain(t) && this.ui.addEthereumChain({
                    onCancel: x,
                    onApprove: P,
                    chainId: c.params.chainId,
                    rpcUrls: c.params.rpcUrls,
                    blockExplorerUrls: c.params.blockExplorerUrls,
                    chainName: c.params.chainName,
                    iconUrls: c.params.iconUrls,
                    nativeCurrency: c.params.nativeCurrency
                }),
                !this.ui.inlineAddEthereumChain(t) && !this.ui.isStandalone() && this.publishWeb3RequestEvent(u, c)
            }
            ),
            cancel: p
        }
    }
    switchEthereumChain(t, r) {
        const n = {
            method: "switchEthereumChain",
            params: Object.assign({
                chainId: t
            }, {
                address: r
            })
        }
          , i = (0,
        Ue.randomBytesHex)(8)
          , s = c=>{
            this.publishWeb3RequestCanceledEvent(i),
            this.handleErrorResponse(i, n.method, c)
        }
        ;
        return {
            promise: new Promise((c,l)=>{
                this.relayEventManager.callbacks.set(i, f=>{
                    if ((0,
                    gr.isErrorResponse)(f) && f.errorCode)
                        return l(Jr.standardErrors.provider.custom({
                            code: f.errorCode,
                            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                        }));
                    if ((0,
                    gr.isErrorResponse)(f))
                        return l(new Error(f.errorMessage));
                    c(f)
                }
                );
                const u = f=>{
                    var _;
                    if (f) {
                        const R = (_ = (0,
                        Jr.getErrorCode)(f)) !== null && _ !== void 0 ? _ : Jr.standardErrorCodes.provider.unsupportedChain;
                        this.handleErrorResponse(i, "switchEthereumChain", f instanceof Error ? f : Jr.standardErrors.provider.unsupportedChain(t), R)
                    } else
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: i,
                            response: {
                                method: "switchEthereumChain",
                                result: {
                                    isApproved: !1,
                                    rpcUrl: ""
                                }
                            }
                        })
                }
                  , p = f=>{
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: i,
                        response: {
                            method: "switchEthereumChain",
                            result: {
                                isApproved: !0,
                                rpcUrl: f
                            }
                        }
                    })
                }
                ;
                this.ui.switchEthereumChain({
                    onCancel: u,
                    onApprove: p,
                    chainId: n.params.chainId,
                    address: n.params.address
                }),
                !this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(i, n)
            }
            ),
            cancel: s
        }
    }
    inlineAddEthereumChain(t) {
        return this.ui.inlineAddEthereumChain(t)
    }
    getSessionIdHash() {
        return zt.Session.hash(this._session.id)
    }
    sendRequestStandalone(t, r) {
        const n = s=>{
            this.handleErrorResponse(t, r.method, s)
        }
          , i = s=>{
            this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: t,
                response: s
            })
        }
        ;
        switch (r.method) {
        case "signEthereumMessage":
            this.ui.signEthereumMessage({
                request: r,
                onSuccess: i,
                onCancel: n
            });
            break;
        case "signEthereumTransaction":
            this.ui.signEthereumTransaction({
                request: r,
                onSuccess: i,
                onCancel: n
            });
            break;
        case "submitEthereumTransaction":
            this.ui.submitEthereumTransaction({
                request: r,
                onSuccess: i,
                onCancel: n
            });
            break;
        case "ethereumAddressFromSignedMessage":
            this.ui.ethereumAddressFromSignedMessage({
                request: r,
                onSuccess: i
            });
            break;
        default:
            n();
            break
        }
    }
}
qn.WalletLinkRelay = Dt;
Dt.accountRequestCallbackIds = new Set;
var ti = {}
  , hs = {}
  , yu = {};
(function(e) {
    var t = J && J.__createBinding || (Object.create ? function(n, i, s, o) {
        o === void 0 && (o = s);
        var c = Object.getOwnPropertyDescriptor(i, s);
        (!c || ("get"in c ? !i.__esModule : c.writable || c.configurable)) && (c = {
            enumerable: !0,
            get: function() {
                return i[s]
            }
        }),
        Object.defineProperty(n, o, c)
    }
    : function(n, i, s, o) {
        o === void 0 && (o = s),
        n[o] = i[s]
    }
    )
      , r = J && J.__exportStar || function(n, i) {
        for (var s in n)
            s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    r(ta, e)
}
)(yu);
var na = {};
Object.defineProperty(na, "__esModule", {
    value: !0
});
na.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}";
var wu = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(hs, "__esModule", {
    value: !0
});
hs.RedirectDialog = void 0;
const op = wu(ei)
  , At = ot
  , ap = Qn
  , cp = yu
  , lp = wu(na);
class up {
    constructor() {
        this.root = null
    }
    attach() {
        const t = document.documentElement;
        this.root = document.createElement("div"),
        this.root.className = "-cbwsdk-css-reset",
        t.appendChild(this.root),
        (0,
        ap.injectCssReset)()
    }
    present(t) {
        this.render(t)
    }
    clear() {
        this.render(null)
    }
    render(t) {
        this.root && ((0,
        At.render)(null, this.root),
        t && (0,
        At.render)((0,
        At.h)(hp, Object.assign({}, t, {
            onDismiss: ()=>{
                this.clear()
            }
        })), this.root))
    }
}
hs.RedirectDialog = up;
const hp = ({title: e, buttonText: t, darkMode: r, onButtonClick: n, onDismiss: i})=>{
    const s = r ? "dark" : "light";
    return (0,
    At.h)(cp.SnackbarContainer, {
        darkMode: r
    }, (0,
    At.h)("div", {
        class: "-cbwsdk-redirect-dialog"
    }, (0,
    At.h)("style", null, lp.default), (0,
    At.h)("div", {
        class: "-cbwsdk-redirect-dialog-backdrop",
        onClick: i
    }), (0,
    At.h)("div", {
        class: (0,
        op.default)("-cbwsdk-redirect-dialog-box", s)
    }, (0,
    At.h)("p", null, e), (0,
    At.h)("button", {
        onClick: n
    }, t))))
}
;
Object.defineProperty(ti, "__esModule", {
    value: !0
});
ti.MobileRelayUI = void 0;
const dp = hs;
class fp {
    constructor(t) {
        this.attached = !1,
        this.darkMode = !1,
        this.openedWindow = null,
        this.redirectDialog = new dp.RedirectDialog,
        this.darkMode = t.darkMode
    }
    attach() {
        if (this.attached)
            throw new Error("Coinbase Wallet SDK UI is already attached");
        this.redirectDialog.attach(),
        this.attached = !0
    }
    setConnected(t) {}
    closeOpenedWindow() {
        var t;
        (t = this.openedWindow) === null || t === void 0 || t.close(),
        this.openedWindow = null
    }
    redirectToCoinbaseWallet(t) {
        const r = new URL("https://go.cb-w.com/walletlink");
        r.searchParams.append("redirect_url", window.location.href),
        t && r.searchParams.append("wl_url", t),
        this.openedWindow = window.open(r.href, "cbw-opener"),
        this.openedWindow && setTimeout(()=>this.closeOpenedWindow(), 5e3)
    }
    openCoinbaseWalletDeeplink(t) {
        this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            darkMode: this.darkMode,
            onButtonClick: ()=>{
                this.redirectToCoinbaseWallet(t)
            }
        }),
        setTimeout(()=>{
            this.redirectToCoinbaseWallet(t)
        }
        , 99)
    }
    showConnecting(t) {
        return ()=>{
            this.closeOpenedWindow(),
            this.redirectDialog.clear()
        }
    }
    hideRequestEthereumAccounts() {
        this.closeOpenedWindow(),
        this.redirectDialog.clear()
    }
    requestEthereumAccounts() {}
    addEthereumChain() {}
    watchAsset() {}
    selectProvider() {}
    switchEthereumChain() {}
    signEthereumMessage() {}
    signEthereumTransaction() {}
    submitEthereumTransaction() {}
    ethereumAddressFromSignedMessage() {}
    reloadUI() {}
    setStandalone() {}
    setConnectDisabled() {}
    inlineAccountsResponse() {
        return !1
    }
    inlineAddEthereumChain() {
        return !1
    }
    inlineWatchAsset() {
        return !1
    }
    inlineSwitchEthereumChain() {
        return !1
    }
    isStandalone() {
        return !1
    }
}
ti.MobileRelayUI = fp;
Object.defineProperty(Vn, "__esModule", {
    value: !0
});
Vn.MobileRelay = void 0;
const pp = z
  , gp = qn
  , hc = ti;
class _p extends gp.WalletLinkRelay {
    constructor(t) {
        var r;
        super(t),
        this._enableMobileWalletLink = (r = t.enableMobileWalletLink) !== null && r !== void 0 ? r : !1
    }
    requestEthereumAccounts() {
        return this._enableMobileWalletLink ? super.requestEthereumAccounts() : {
            promise: new Promise(()=>{
                const t = (0,
                pp.getLocation)();
                t.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(t.href)}`
            }
            ),
            cancel: ()=>{}
        }
    }
    publishWeb3RequestEvent(t, r) {
        if (super.publishWeb3RequestEvent(t, r),
        !(this._enableMobileWalletLink && this.ui instanceof hc.MobileRelayUI))
            return;
        let n = !1;
        switch (r.method) {
        case "requestEthereumAccounts":
        case "connectAndSignIn":
            n = !0,
            this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
            break;
        case "switchEthereumChain":
            return;
        default:
            n = !0,
            this.ui.openCoinbaseWalletDeeplink();
            break
        }
        n && window.addEventListener("blur", ()=>{
            window.addEventListener("focus", ()=>{
                this.connection.checkUnseenEvents()
            }
            , {
                once: !0
            })
        }
        , {
            once: !0
        })
    }
    handleWeb3ResponseMessage(t) {
        super.handleWeb3ResponseMessage(t),
        this._enableMobileWalletLink && this.ui instanceof hc.MobileRelayUI && this.ui.closeOpenedWindow()
    }
    connectAndSignIn(t) {
        if (!this._enableMobileWalletLink)
            throw new Error("connectAndSignIn is supported only when enableMobileWalletLink is on");
        return this.sendRequest({
            method: "connectAndSignIn",
            params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl,
                domain: window.location.hostname,
                aud: window.location.href,
                version: "1",
                type: "eip4361",
                nonce: t.nonce,
                iat: new Date().toISOString(),
                chainId: `eip155:${this.dappDefaultChain}`,
                statement: t.statement,
                resources: t.resources
            }
        })
    }
}
Vn.MobileRelay = _p;
var To = {
    exports: {}
}, Eu = Fn.EventEmitter, Ks, dc;
function mp() {
    if (dc)
        return Ks;
    dc = 1;
    function e(x, P) {
        var L = Object.keys(x);
        if (Object.getOwnPropertySymbols) {
            var M = Object.getOwnPropertySymbols(x);
            P && (M = M.filter(function(k) {
                return Object.getOwnPropertyDescriptor(x, k).enumerable
            })),
            L.push.apply(L, M)
        }
        return L
    }
    function t(x) {
        for (var P = 1; P < arguments.length; P++) {
            var L = arguments[P] != null ? arguments[P] : {};
            P % 2 ? e(Object(L), !0).forEach(function(M) {
                r(x, M, L[M])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(L)) : e(Object(L)).forEach(function(M) {
                Object.defineProperty(x, M, Object.getOwnPropertyDescriptor(L, M))
            })
        }
        return x
    }
    function r(x, P, L) {
        return P = o(P),
        P in x ? Object.defineProperty(x, P, {
            value: L,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : x[P] = L,
        x
    }
    function n(x, P) {
        if (!(x instanceof P))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(x, P) {
        for (var L = 0; L < P.length; L++) {
            var M = P[L];
            M.enumerable = M.enumerable || !1,
            M.configurable = !0,
            "value"in M && (M.writable = !0),
            Object.defineProperty(x, o(M.key), M)
        }
    }
    function s(x, P, L) {
        return P && i(x.prototype, P),
        L && i(x, L),
        Object.defineProperty(x, "prototype", {
            writable: !1
        }),
        x
    }
    function o(x) {
        var P = c(x, "string");
        return typeof P == "symbol" ? P : String(P)
    }
    function c(x, P) {
        if (typeof x != "object" || x === null)
            return x;
        var L = x[Symbol.toPrimitive];
        if (L !== void 0) {
            var M = L.call(x, P || "default");
            if (typeof M != "object")
                return M;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (P === "string" ? String : Number)(x)
    }
    var l = Bi
      , u = l.Buffer
      , p = jo
      , f = p.inspect
      , _ = f && f.custom || "inspect";
    function R(x, P, L) {
        u.prototype.copy.call(x, P, L)
    }
    return Ks = function() {
        function x() {
            n(this, x),
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        return s(x, [{
            key: "push",
            value: function(L) {
                var M = {
                    data: L,
                    next: null
                };
                this.length > 0 ? this.tail.next = M : this.head = M,
                this.tail = M,
                ++this.length
            }
        }, {
            key: "unshift",
            value: function(L) {
                var M = {
                    data: L,
                    next: this.head
                };
                this.length === 0 && (this.tail = M),
                this.head = M,
                ++this.length
            }
        }, {
            key: "shift",
            value: function() {
                if (this.length !== 0) {
                    var L = this.head.data;
                    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next,
                    --this.length,
                    L
                }
            }
        }, {
            key: "clear",
            value: function() {
                this.head = this.tail = null,
                this.length = 0
            }
        }, {
            key: "join",
            value: function(L) {
                if (this.length === 0)
                    return "";
                for (var M = this.head, k = "" + M.data; M = M.next; )
                    k += L + M.data;
                return k
            }
        }, {
            key: "concat",
            value: function(L) {
                if (this.length === 0)
                    return u.alloc(0);
                for (var M = u.allocUnsafe(L >>> 0), k = this.head, N = 0; k; )
                    R(k.data, M, N),
                    N += k.data.length,
                    k = k.next;
                return M
            }
        }, {
            key: "consume",
            value: function(L, M) {
                var k;
                return L < this.head.data.length ? (k = this.head.data.slice(0, L),
                this.head.data = this.head.data.slice(L)) : L === this.head.data.length ? k = this.shift() : k = M ? this._getString(L) : this._getBuffer(L),
                k
            }
        }, {
            key: "first",
            value: function() {
                return this.head.data
            }
        }, {
            key: "_getString",
            value: function(L) {
                var M = this.head
                  , k = 1
                  , N = M.data;
                for (L -= N.length; M = M.next; ) {
                    var $ = M.data
                      , O = L > $.length ? $.length : L;
                    if (O === $.length ? N += $ : N += $.slice(0, L),
                    L -= O,
                    L === 0) {
                        O === $.length ? (++k,
                        M.next ? this.head = M.next : this.head = this.tail = null) : (this.head = M,
                        M.data = $.slice(O));
                        break
                    }
                    ++k
                }
                return this.length -= k,
                N
            }
        }, {
            key: "_getBuffer",
            value: function(L) {
                var M = u.allocUnsafe(L)
                  , k = this.head
                  , N = 1;
                for (k.data.copy(M),
                L -= k.data.length; k = k.next; ) {
                    var $ = k.data
                      , O = L > $.length ? $.length : L;
                    if ($.copy(M, M.length - L, 0, O),
                    L -= O,
                    L === 0) {
                        O === $.length ? (++N,
                        k.next ? this.head = k.next : this.head = this.tail = null) : (this.head = k,
                        k.data = $.slice(O));
                        break
                    }
                    ++N
                }
                return this.length -= N,
                M
            }
        }, {
            key: _,
            value: function(L, M) {
                return f(this, t(t({}, M), {}, {
                    depth: 0,
                    customInspect: !1
                }))
            }
        }]),
        x
    }(),
    Ks
}
function vp(e, t) {
    var r = this
      , n = this._readableState && this._readableState.destroyed
      , i = this._writableState && this._writableState.destroyed;
    return n || i ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
    process.nextTick(No, this, e)) : process.nextTick(No, this, e)),
    this) : (this._readableState && (this._readableState.destroyed = !0),
    this._writableState && (this._writableState.destroyed = !0),
    this._destroy(e || null, function(s) {
        !t && s ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(Ii, r) : (r._writableState.errorEmitted = !0,
        process.nextTick(fc, r, s)) : process.nextTick(fc, r, s) : t ? (process.nextTick(Ii, r),
        t(s)) : process.nextTick(Ii, r)
    }),
    this)
}
function fc(e, t) {
    No(e, t),
    Ii(e)
}
function Ii(e) {
    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
}
function bp() {
    this._readableState && (this._readableState.destroyed = !1,
    this._readableState.reading = !1,
    this._readableState.ended = !1,
    this._readableState.endEmitted = !1),
    this._writableState && (this._writableState.destroyed = !1,
    this._writableState.ended = !1,
    this._writableState.ending = !1,
    this._writableState.finalCalled = !1,
    this._writableState.prefinished = !1,
    this._writableState.finished = !1,
    this._writableState.errorEmitted = !1)
}
function No(e, t) {
    e.emit("error", t)
}
function yp(e, t) {
    var r = e._readableState
      , n = e._writableState;
    r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
}
var Su = {
    destroy: vp,
    undestroy: bp,
    errorOrDestroy: yp
}
  , Tr = {};
function wp(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    e.__proto__ = t
}
var Ru = {};
function vt(e, t, r) {
    r || (r = Error);
    function n(s, o, c) {
        return typeof t == "string" ? t : t(s, o, c)
    }
    var i = function(s) {
        wp(o, s);
        function o(c, l, u) {
            return s.call(this, n(c, l, u)) || this
        }
        return o
    }(r);
    i.prototype.name = r.name,
    i.prototype.code = e,
    Ru[e] = i
}
function pc(e, t) {
    if (Array.isArray(e)) {
        var r = e.length;
        return e = e.map(function(n) {
            return String(n)
        }),
        r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : r === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
    } else
        return "of ".concat(t, " ").concat(String(e))
}
function Ep(e, t, r) {
    return e.substr(!r || r < 0 ? 0 : +r, t.length) === t
}
function Sp(e, t, r) {
    return (r === void 0 || r > e.length) && (r = e.length),
    e.substring(r - t.length, r) === t
}
function Rp(e, t, r) {
    return typeof r != "number" && (r = 0),
    r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1
}
vt("ERR_INVALID_OPT_VALUE", function(e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"'
}, TypeError);
vt("ERR_INVALID_ARG_TYPE", function(e, t, r) {
    var n;
    typeof t == "string" && Ep(t, "not ") ? (n = "must not be",
    t = t.replace(/^not /, "")) : n = "must be";
    var i;
    if (Sp(e, " argument"))
        i = "The ".concat(e, " ").concat(n, " ").concat(pc(t, "type"));
    else {
        var s = Rp(e, ".") ? "property" : "argument";
        i = 'The "'.concat(e, '" ').concat(s, " ").concat(n, " ").concat(pc(t, "type"))
    }
    return i += ". Received type ".concat(typeof r),
    i
}, TypeError);
vt("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
vt("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
    return "The " + e + " method is not implemented"
});
vt("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
vt("ERR_STREAM_DESTROYED", function(e) {
    return "Cannot call " + e + " after a stream was destroyed"
});
vt("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
vt("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
vt("ERR_STREAM_WRITE_AFTER_END", "write after end");
vt("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
vt("ERR_UNKNOWN_ENCODING", function(e) {
    return "Unknown encoding: " + e
}, TypeError);
vt("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
Tr.codes = Ru;
var Mp = Tr.codes.ERR_INVALID_OPT_VALUE;
function Cp(e, t, r) {
    return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null
}
function kp(e, t, r, n) {
    var i = Cp(t, n, r);
    if (i != null) {
        if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
            var s = n ? r : "highWaterMark";
            throw new Mp(s,i)
        }
        return Math.floor(i)
    }
    return e.objectMode ? 16 : 16 * 1024
}
var Mu = {
    getHighWaterMark: kp
}
  , Ip = xp;
function xp(e, t) {
    if (Qs("noDeprecation"))
        return e;
    var r = !1;
    function n() {
        if (!r) {
            if (Qs("throwDeprecation"))
                throw new Error(t);
            Qs("traceDeprecation") ? console.trace(t) : console.warn(t),
            r = !0
        }
        return e.apply(this, arguments)
    }
    return n
}
function Qs(e) {
    try {
        if (!J.localStorage)
            return !1
    } catch {
        return !1
    }
    var t = J.localStorage[e];
    return t == null ? !1 : String(t).toLowerCase() === "true"
}
var Ys, gc;
function Cu() {
    if (gc)
        return Ys;
    gc = 1,
    Ys = V;
    function e(I) {
        var T = this;
        this.next = null,
        this.entry = null,
        this.finish = function() {
            q(T, I)
        }
    }
    var t;
    V.WritableState = D;
    var r = {
        deprecate: Ip
    }
      , n = Eu
      , i = Bi.Buffer
      , s = (typeof J < "u" ? J : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {}
    ;
    function o(I) {
        return i.from(I)
    }
    function c(I) {
        return i.isBuffer(I) || I instanceof s
    }
    var l = Su
      , u = Mu
      , p = u.getHighWaterMark
      , f = Tr.codes
      , _ = f.ERR_INVALID_ARG_TYPE
      , R = f.ERR_METHOD_NOT_IMPLEMENTED
      , x = f.ERR_MULTIPLE_CALLBACK
      , P = f.ERR_STREAM_CANNOT_PIPE
      , L = f.ERR_STREAM_DESTROYED
      , M = f.ERR_STREAM_NULL_VALUES
      , k = f.ERR_STREAM_WRITE_AFTER_END
      , N = f.ERR_UNKNOWN_ENCODING
      , $ = l.errorOrDestroy;
    Et(V, n);
    function O() {}
    function D(I, T, B) {
        t = t || un(),
        I = I || {},
        typeof B != "boolean" && (B = T instanceof t),
        this.objectMode = !!I.objectMode,
        B && (this.objectMode = this.objectMode || !!I.writableObjectMode),
        this.highWaterMark = p(this, I, "writableHighWaterMark", B),
        this.finalCalled = !1,
        this.needDrain = !1,
        this.ending = !1,
        this.ended = !1,
        this.finished = !1,
        this.destroyed = !1;
        var U = I.decodeStrings === !1;
        this.decodeStrings = !U,
        this.defaultEncoding = I.defaultEncoding || "utf8",
        this.length = 0,
        this.writing = !1,
        this.corked = 0,
        this.sync = !0,
        this.bufferProcessing = !1,
        this.onwrite = function(te) {
            g(T, te)
        }
        ,
        this.writecb = null,
        this.writelen = 0,
        this.bufferedRequest = null,
        this.lastBufferedRequest = null,
        this.pendingcb = 0,
        this.prefinished = !1,
        this.errorEmitted = !1,
        this.emitClose = I.emitClose !== !1,
        this.autoDestroy = !!I.autoDestroy,
        this.bufferedRequestCount = 0,
        this.corkedRequestsFree = new e(this)
    }
    D.prototype.getBuffer = function() {
        for (var T = this.bufferedRequest, B = []; T; )
            B.push(T),
            T = T.next;
        return B
    }
    ,
    function() {
        try {
            Object.defineProperty(D.prototype, "buffer", {
                get: r.deprecate(function() {
                    return this.getBuffer()
                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
            })
        } catch {}
    }();
    var G;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (G = Function.prototype[Symbol.hasInstance],
    Object.defineProperty(V, Symbol.hasInstance, {
        value: function(T) {
            return G.call(this, T) ? !0 : this !== V ? !1 : T && T._writableState instanceof D
        }
    })) : G = function(T) {
        return T instanceof this
    }
    ;
    function V(I) {
        t = t || un();
        var T = this instanceof t;
        if (!T && !G.call(V, this))
            return new V(I);
        this._writableState = new D(I,this,T),
        this.writable = !0,
        I && (typeof I.write == "function" && (this._write = I.write),
        typeof I.writev == "function" && (this._writev = I.writev),
        typeof I.destroy == "function" && (this._destroy = I.destroy),
        typeof I.final == "function" && (this._final = I.final)),
        n.call(this)
    }
    V.prototype.pipe = function() {
        $(this, new P)
    }
    ;
    function H(I, T) {
        var B = new k;
        $(I, B),
        process.nextTick(T, B)
    }
    function X(I, T, B, U) {
        var te;
        return B === null ? te = new M : typeof B != "string" && !T.objectMode && (te = new _("chunk",["string", "Buffer"],B)),
        te ? ($(I, te),
        process.nextTick(U, te),
        !1) : !0
    }
    V.prototype.write = function(I, T, B) {
        var U = this._writableState
          , te = !1
          , w = !U.objectMode && c(I);
        return w && !i.isBuffer(I) && (I = o(I)),
        typeof T == "function" && (B = T,
        T = null),
        w ? T = "buffer" : T || (T = U.defaultEncoding),
        typeof B != "function" && (B = O),
        U.ending ? H(this, B) : (w || X(this, U, I, B)) && (U.pendingcb++,
        te = ie(this, U, w, I, T, B)),
        te
    }
    ,
    V.prototype.cork = function() {
        this._writableState.corked++
    }
    ,
    V.prototype.uncork = function() {
        var I = this._writableState;
        I.corked && (I.corked--,
        !I.writing && !I.corked && !I.bufferProcessing && I.bufferedRequest && C(this, I))
    }
    ,
    V.prototype.setDefaultEncoding = function(T) {
        if (typeof T == "string" && (T = T.toLowerCase()),
        !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((T + "").toLowerCase()) > -1))
            throw new N(T);
        return this._writableState.defaultEncoding = T,
        this
    }
    ,
    Object.defineProperty(V.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    });
    function Q(I, T, B) {
        return !I.objectMode && I.decodeStrings !== !1 && typeof T == "string" && (T = i.from(T, B)),
        T
    }
    Object.defineProperty(V.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    });
    function ie(I, T, B, U, te, w) {
        if (!B) {
            var E = Q(T, U, te);
            U !== E && (B = !0,
            te = "buffer",
            U = E)
        }
        var F = T.objectMode ? 1 : U.length;
        T.length += F;
        var j = T.length < T.highWaterMark;
        if (j || (T.needDrain = !0),
        T.writing || T.corked) {
            var K = T.lastBufferedRequest;
            T.lastBufferedRequest = {
                chunk: U,
                encoding: te,
                isBuf: B,
                callback: w,
                next: null
            },
            K ? K.next = T.lastBufferedRequest : T.bufferedRequest = T.lastBufferedRequest,
            T.bufferedRequestCount += 1
        } else
            v(I, T, !1, F, U, te, w);
        return j
    }
    function v(I, T, B, U, te, w, E) {
        T.writelen = U,
        T.writecb = E,
        T.writing = !0,
        T.sync = !0,
        T.destroyed ? T.onwrite(new L("write")) : B ? I._writev(te, T.onwrite) : I._write(te, w, T.onwrite),
        T.sync = !1
    }
    function a(I, T, B, U, te) {
        --T.pendingcb,
        B ? (process.nextTick(te, U),
        process.nextTick(S, I, T),
        I._writableState.errorEmitted = !0,
        $(I, U)) : (te(U),
        I._writableState.errorEmitted = !0,
        $(I, U),
        S(I, T))
    }
    function d(I) {
        I.writing = !1,
        I.writecb = null,
        I.length -= I.writelen,
        I.writelen = 0
    }
    function g(I, T) {
        var B = I._writableState
          , U = B.sync
          , te = B.writecb;
        if (typeof te != "function")
            throw new x;
        if (d(B),
        T)
            a(I, B, U, T, te);
        else {
            var w = A(B) || I.destroyed;
            !w && !B.corked && !B.bufferProcessing && B.bufferedRequest && C(I, B),
            U ? process.nextTick(m, I, B, w, te) : m(I, B, w, te)
        }
    }
    function m(I, T, B, U) {
        B || y(I, T),
        T.pendingcb--,
        U(),
        S(I, T)
    }
    function y(I, T) {
        T.length === 0 && T.needDrain && (T.needDrain = !1,
        I.emit("drain"))
    }
    function C(I, T) {
        T.bufferProcessing = !0;
        var B = T.bufferedRequest;
        if (I._writev && B && B.next) {
            var U = T.bufferedRequestCount
              , te = new Array(U)
              , w = T.corkedRequestsFree;
            w.entry = B;
            for (var E = 0, F = !0; B; )
                te[E] = B,
                B.isBuf || (F = !1),
                B = B.next,
                E += 1;
            te.allBuffers = F,
            v(I, T, !0, T.length, te, "", w.finish),
            T.pendingcb++,
            T.lastBufferedRequest = null,
            w.next ? (T.corkedRequestsFree = w.next,
            w.next = null) : T.corkedRequestsFree = new e(T),
            T.bufferedRequestCount = 0
        } else {
            for (; B; ) {
                var j = B.chunk
                  , K = B.encoding
                  , ee = B.callback
                  , Z = T.objectMode ? 1 : j.length;
                if (v(I, T, !1, Z, j, K, ee),
                B = B.next,
                T.bufferedRequestCount--,
                T.writing)
                    break
            }
            B === null && (T.lastBufferedRequest = null)
        }
        T.bufferedRequest = B,
        T.bufferProcessing = !1
    }
    V.prototype._write = function(I, T, B) {
        B(new R("_write()"))
    }
    ,
    V.prototype._writev = null,
    V.prototype.end = function(I, T, B) {
        var U = this._writableState;
        return typeof I == "function" ? (B = I,
        I = null,
        T = null) : typeof T == "function" && (B = T,
        T = null),
        I != null && this.write(I, T),
        U.corked && (U.corked = 1,
        this.uncork()),
        U.ending || W(this, U, B),
        this
    }
    ,
    Object.defineProperty(V.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    });
    function A(I) {
        return I.ending && I.length === 0 && I.bufferedRequest === null && !I.finished && !I.writing
    }
    function b(I, T) {
        I._final(function(B) {
            T.pendingcb--,
            B && $(I, B),
            T.prefinished = !0,
            I.emit("prefinish"),
            S(I, T)
        })
    }
    function h(I, T) {
        !T.prefinished && !T.finalCalled && (typeof I._final == "function" && !T.destroyed ? (T.pendingcb++,
        T.finalCalled = !0,
        process.nextTick(b, I, T)) : (T.prefinished = !0,
        I.emit("prefinish")))
    }
    function S(I, T) {
        var B = A(T);
        if (B && (h(I, T),
        T.pendingcb === 0 && (T.finished = !0,
        I.emit("finish"),
        T.autoDestroy))) {
            var U = I._readableState;
            (!U || U.autoDestroy && U.endEmitted) && I.destroy()
        }
        return B
    }
    function W(I, T, B) {
        T.ending = !0,
        S(I, T),
        B && (T.finished ? process.nextTick(B) : I.once("finish", B)),
        T.ended = !0,
        I.writable = !1
    }
    function q(I, T, B) {
        var U = I.entry;
        for (I.entry = null; U; ) {
            var te = U.callback;
            T.pendingcb--,
            te(B),
            U = U.next
        }
        T.corkedRequestsFree.next = I
    }
    return Object.defineProperty(V.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._writableState === void 0 ? !1 : this._writableState.destroyed
        },
        set: function(T) {
            this._writableState && (this._writableState.destroyed = T)
        }
    }),
    V.prototype.destroy = l.destroy,
    V.prototype._undestroy = l.undestroy,
    V.prototype._destroy = function(I, T) {
        T(I)
    }
    ,
    Ys
}
var Xs, _c;
function un() {
    if (_c)
        return Xs;
    _c = 1;
    var e = Object.keys || function(u) {
        var p = [];
        for (var f in u)
            p.push(f);
        return p
    }
    ;
    Xs = o;
    var t = Iu()
      , r = Cu();
    Et(o, t);
    for (var n = e(r.prototype), i = 0; i < n.length; i++) {
        var s = n[i];
        o.prototype[s] || (o.prototype[s] = r.prototype[s])
    }
    function o(u) {
        if (!(this instanceof o))
            return new o(u);
        t.call(this, u),
        r.call(this, u),
        this.allowHalfOpen = !0,
        u && (u.readable === !1 && (this.readable = !1),
        u.writable === !1 && (this.writable = !1),
        u.allowHalfOpen === !1 && (this.allowHalfOpen = !1,
        this.once("end", c)))
    }
    Object.defineProperty(o.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }),
    Object.defineProperty(o.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    }),
    Object.defineProperty(o.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    });
    function c() {
        this._writableState.ended || process.nextTick(l, this)
    }
    function l(u) {
        u.end()
    }
    return Object.defineProperty(o.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
        },
        set: function(p) {
            this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = p,
            this._writableState.destroyed = p)
        }
    }),
    Xs
}
var eo = {}, mc;
function vc() {
    if (mc)
        return eo;
    mc = 1;
    var e = Qt.Buffer
      , t = e.isEncoding || function(M) {
        switch (M = "" + M,
        M && M.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1
        }
    }
    ;
    function r(M) {
        if (!M)
            return "utf8";
        for (var k; ; )
            switch (M) {
            case "utf8":
            case "utf-8":
                return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return "utf16le";
            case "latin1":
            case "binary":
                return "latin1";
            case "base64":
            case "ascii":
            case "hex":
                return M;
            default:
                if (k)
                    return;
                M = ("" + M).toLowerCase(),
                k = !0
            }
    }
    function n(M) {
        var k = r(M);
        if (typeof k != "string" && (e.isEncoding === t || !t(M)))
            throw new Error("Unknown encoding: " + M);
        return k || M
    }
    eo.StringDecoder = i;
    function i(M) {
        this.encoding = n(M);
        var k;
        switch (this.encoding) {
        case "utf16le":
            this.text = f,
            this.end = _,
            k = 4;
            break;
        case "utf8":
            this.fillLast = l,
            k = 4;
            break;
        case "base64":
            this.text = R,
            this.end = x,
            k = 3;
            break;
        default:
            this.write = P,
            this.end = L;
            return
        }
        this.lastNeed = 0,
        this.lastTotal = 0,
        this.lastChar = e.allocUnsafe(k)
    }
    i.prototype.write = function(M) {
        if (M.length === 0)
            return "";
        var k, N;
        if (this.lastNeed) {
            if (k = this.fillLast(M),
            k === void 0)
                return "";
            N = this.lastNeed,
            this.lastNeed = 0
        } else
            N = 0;
        return N < M.length ? k ? k + this.text(M, N) : this.text(M, N) : k || ""
    }
    ,
    i.prototype.end = p,
    i.prototype.text = u,
    i.prototype.fillLast = function(M) {
        if (this.lastNeed <= M.length)
            return M.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal);
        M.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, M.length),
        this.lastNeed -= M.length
    }
    ;
    function s(M) {
        return M <= 127 ? 0 : M >> 5 === 6 ? 2 : M >> 4 === 14 ? 3 : M >> 3 === 30 ? 4 : M >> 6 === 2 ? -1 : -2
    }
    function o(M, k, N) {
        var $ = k.length - 1;
        if ($ < N)
            return 0;
        var O = s(k[$]);
        return O >= 0 ? (O > 0 && (M.lastNeed = O - 1),
        O) : --$ < N || O === -2 ? 0 : (O = s(k[$]),
        O >= 0 ? (O > 0 && (M.lastNeed = O - 2),
        O) : --$ < N || O === -2 ? 0 : (O = s(k[$]),
        O >= 0 ? (O > 0 && (O === 2 ? O = 0 : M.lastNeed = O - 3),
        O) : 0))
    }
    function c(M, k, N) {
        if ((k[0] & 192) !== 128)
            return M.lastNeed = 0,
            "�";
        if (M.lastNeed > 1 && k.length > 1) {
            if ((k[1] & 192) !== 128)
                return M.lastNeed = 1,
                "�";
            if (M.lastNeed > 2 && k.length > 2 && (k[2] & 192) !== 128)
                return M.lastNeed = 2,
                "�"
        }
    }
    function l(M) {
        var k = this.lastTotal - this.lastNeed
          , N = c(this, M);
        if (N !== void 0)
            return N;
        if (this.lastNeed <= M.length)
            return M.copy(this.lastChar, k, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal);
        M.copy(this.lastChar, k, 0, M.length),
        this.lastNeed -= M.length
    }
    function u(M, k) {
        var N = o(this, M, k);
        if (!this.lastNeed)
            return M.toString("utf8", k);
        this.lastTotal = N;
        var $ = M.length - (N - this.lastNeed);
        return M.copy(this.lastChar, 0, $),
        M.toString("utf8", k, $)
    }
    function p(M) {
        var k = M && M.length ? this.write(M) : "";
        return this.lastNeed ? k + "�" : k
    }
    function f(M, k) {
        if ((M.length - k) % 2 === 0) {
            var N = M.toString("utf16le", k);
            if (N) {
                var $ = N.charCodeAt(N.length - 1);
                if ($ >= 55296 && $ <= 56319)
                    return this.lastNeed = 2,
                    this.lastTotal = 4,
                    this.lastChar[0] = M[M.length - 2],
                    this.lastChar[1] = M[M.length - 1],
                    N.slice(0, -1)
            }
            return N
        }
        return this.lastNeed = 1,
        this.lastTotal = 2,
        this.lastChar[0] = M[M.length - 1],
        M.toString("utf16le", k, M.length - 1)
    }
    function _(M) {
        var k = M && M.length ? this.write(M) : "";
        if (this.lastNeed) {
            var N = this.lastTotal - this.lastNeed;
            return k + this.lastChar.toString("utf16le", 0, N)
        }
        return k
    }
    function R(M, k) {
        var N = (M.length - k) % 3;
        return N === 0 ? M.toString("base64", k) : (this.lastNeed = 3 - N,
        this.lastTotal = 3,
        N === 1 ? this.lastChar[0] = M[M.length - 1] : (this.lastChar[0] = M[M.length - 2],
        this.lastChar[1] = M[M.length - 1]),
        M.toString("base64", k, M.length - N))
    }
    function x(M) {
        var k = M && M.length ? this.write(M) : "";
        return this.lastNeed ? k + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : k
    }
    function P(M) {
        return M.toString(this.encoding)
    }
    function L(M) {
        return M && M.length ? this.write(M) : ""
    }
    return eo
}
var bc = Tr.codes.ERR_STREAM_PREMATURE_CLOSE;
function Ap(e) {
    var t = !1;
    return function() {
        if (!t) {
            t = !0;
            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                n[i] = arguments[i];
            e.apply(this, n)
        }
    }
}
function Tp() {}
function Np(e) {
    return e.setHeader && typeof e.abort == "function"
}
function ku(e, t, r) {
    if (typeof t == "function")
        return ku(e, null, t);
    t || (t = {}),
    r = Ap(r || Tp);
    var n = t.readable || t.readable !== !1 && e.readable
      , i = t.writable || t.writable !== !1 && e.writable
      , s = function() {
        e.writable || c()
    }
      , o = e._writableState && e._writableState.finished
      , c = function() {
        i = !1,
        o = !0,
        n || r.call(e)
    }
      , l = e._readableState && e._readableState.endEmitted
      , u = function() {
        n = !1,
        l = !0,
        i || r.call(e)
    }
      , p = function(x) {
        r.call(e, x)
    }
      , f = function() {
        var x;
        if (n && !l)
            return (!e._readableState || !e._readableState.ended) && (x = new bc),
            r.call(e, x);
        if (i && !o)
            return (!e._writableState || !e._writableState.ended) && (x = new bc),
            r.call(e, x)
    }
      , _ = function() {
        e.req.on("finish", c)
    };
    return Np(e) ? (e.on("complete", c),
    e.on("abort", f),
    e.req ? _() : e.on("request", _)) : i && !e._writableState && (e.on("end", s),
    e.on("close", s)),
    e.on("end", u),
    e.on("finish", c),
    t.error !== !1 && e.on("error", p),
    e.on("close", f),
    function() {
        e.removeListener("complete", c),
        e.removeListener("abort", f),
        e.removeListener("request", _),
        e.req && e.req.removeListener("finish", c),
        e.removeListener("end", s),
        e.removeListener("close", s),
        e.removeListener("finish", c),
        e.removeListener("end", u),
        e.removeListener("error", p),
        e.removeListener("close", f)
    }
}
var ia = ku, to, yc;
function Lp() {
    if (yc)
        return to;
    yc = 1;
    var e;
    function t(N, $, O) {
        return $ = r($),
        $ in N ? Object.defineProperty(N, $, {
            value: O,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : N[$] = O,
        N
    }
    function r(N) {
        var $ = n(N, "string");
        return typeof $ == "symbol" ? $ : String($)
    }
    function n(N, $) {
        if (typeof N != "object" || N === null)
            return N;
        var O = N[Symbol.toPrimitive];
        if (O !== void 0) {
            var D = O.call(N, $ || "default");
            if (typeof D != "object")
                return D;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ($ === "string" ? String : Number)(N)
    }
    var i = ia
      , s = Symbol("lastResolve")
      , o = Symbol("lastReject")
      , c = Symbol("error")
      , l = Symbol("ended")
      , u = Symbol("lastPromise")
      , p = Symbol("handlePromise")
      , f = Symbol("stream");
    function _(N, $) {
        return {
            value: N,
            done: $
        }
    }
    function R(N) {
        var $ = N[s];
        if ($ !== null) {
            var O = N[f].read();
            O !== null && (N[u] = null,
            N[s] = null,
            N[o] = null,
            $(_(O, !1)))
        }
    }
    function x(N) {
        process.nextTick(R, N)
    }
    function P(N, $) {
        return function(O, D) {
            N.then(function() {
                if ($[l]) {
                    O(_(void 0, !0));
                    return
                }
                $[p](O, D)
            }, D)
        }
    }
    var L = Object.getPrototypeOf(function() {})
      , M = Object.setPrototypeOf((e = {
        get stream() {
            return this[f]
        },
        next: function() {
            var $ = this
              , O = this[c];
            if (O !== null)
                return Promise.reject(O);
            if (this[l])
                return Promise.resolve(_(void 0, !0));
            if (this[f].destroyed)
                return new Promise(function(H, X) {
                    process.nextTick(function() {
                        $[c] ? X($[c]) : H(_(void 0, !0))
                    })
                }
                );
            var D = this[u], G;
            if (D)
                G = new Promise(P(D, this));
            else {
                var V = this[f].read();
                if (V !== null)
                    return Promise.resolve(_(V, !1));
                G = new Promise(this[p])
            }
            return this[u] = G,
            G
        }
    },
    t(e, Symbol.asyncIterator, function() {
        return this
    }),
    t(e, "return", function() {
        var $ = this;
        return new Promise(function(O, D) {
            $[f].destroy(null, function(G) {
                if (G) {
                    D(G);
                    return
                }
                O(_(void 0, !0))
            })
        }
        )
    }),
    e), L)
      , k = function($) {
        var O, D = Object.create(M, (O = {},
        t(O, f, {
            value: $,
            writable: !0
        }),
        t(O, s, {
            value: null,
            writable: !0
        }),
        t(O, o, {
            value: null,
            writable: !0
        }),
        t(O, c, {
            value: null,
            writable: !0
        }),
        t(O, l, {
            value: $._readableState.endEmitted,
            writable: !0
        }),
        t(O, p, {
            value: function(V, H) {
                var X = D[f].read();
                X ? (D[u] = null,
                D[s] = null,
                D[o] = null,
                V(_(X, !1))) : (D[s] = V,
                D[o] = H)
            },
            writable: !0
        }),
        O));
        return D[u] = null,
        i($, function(G) {
            if (G && G.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                var V = D[o];
                V !== null && (D[u] = null,
                D[s] = null,
                D[o] = null,
                V(G)),
                D[c] = G;
                return
            }
            var H = D[s];
            H !== null && (D[u] = null,
            D[s] = null,
            D[o] = null,
            H(_(void 0, !0))),
            D[l] = !0
        }),
        $.on("readable", x.bind(null, D)),
        D
    };
    return to = k,
    to
}
var ro, wc;
function Op() {
    return wc || (wc = 1,
    ro = function() {
        throw new Error("Readable.from is not available in the browser")
    }
    ),
    ro
}
var no, Ec;
function Iu() {
    if (Ec)
        return no;
    Ec = 1,
    no = H;
    var e;
    H.ReadableState = V,
    Fn.EventEmitter;
    var t = function(E, F) {
        return E.listeners(F).length
    }
      , r = Eu
      , n = Bi.Buffer
      , i = (typeof J < "u" ? J : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {}
    ;
    function s(w) {
        return n.from(w)
    }
    function o(w) {
        return n.isBuffer(w) || w instanceof i
    }
    var c = jo, l;
    c && c.debuglog ? l = c.debuglog("stream") : l = function() {}
    ;
    var u = mp(), p = Su, f = Mu, _ = f.getHighWaterMark, R = Tr.codes, x = R.ERR_INVALID_ARG_TYPE, P = R.ERR_STREAM_PUSH_AFTER_EOF, L = R.ERR_METHOD_NOT_IMPLEMENTED, M = R.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, k, N, $;
    Et(H, r);
    var O = p.errorOrDestroy
      , D = ["error", "close", "destroy", "pause", "resume"];
    function G(w, E, F) {
        if (typeof w.prependListener == "function")
            return w.prependListener(E, F);
        !w._events || !w._events[E] ? w.on(E, F) : Array.isArray(w._events[E]) ? w._events[E].unshift(F) : w._events[E] = [F, w._events[E]]
    }
    function V(w, E, F) {
        e = e || un(),
        w = w || {},
        typeof F != "boolean" && (F = E instanceof e),
        this.objectMode = !!w.objectMode,
        F && (this.objectMode = this.objectMode || !!w.readableObjectMode),
        this.highWaterMark = _(this, w, "readableHighWaterMark", F),
        this.buffer = new u,
        this.length = 0,
        this.pipes = null,
        this.pipesCount = 0,
        this.flowing = null,
        this.ended = !1,
        this.endEmitted = !1,
        this.reading = !1,
        this.sync = !0,
        this.needReadable = !1,
        this.emittedReadable = !1,
        this.readableListening = !1,
        this.resumeScheduled = !1,
        this.paused = !0,
        this.emitClose = w.emitClose !== !1,
        this.autoDestroy = !!w.autoDestroy,
        this.destroyed = !1,
        this.defaultEncoding = w.defaultEncoding || "utf8",
        this.awaitDrain = 0,
        this.readingMore = !1,
        this.decoder = null,
        this.encoding = null,
        w.encoding && (k || (k = vc().StringDecoder),
        this.decoder = new k(w.encoding),
        this.encoding = w.encoding)
    }
    function H(w) {
        if (e = e || un(),
        !(this instanceof H))
            return new H(w);
        var E = this instanceof e;
        this._readableState = new V(w,this,E),
        this.readable = !0,
        w && (typeof w.read == "function" && (this._read = w.read),
        typeof w.destroy == "function" && (this._destroy = w.destroy)),
        r.call(this)
    }
    Object.defineProperty(H.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._readableState === void 0 ? !1 : this._readableState.destroyed
        },
        set: function(E) {
            this._readableState && (this._readableState.destroyed = E)
        }
    }),
    H.prototype.destroy = p.destroy,
    H.prototype._undestroy = p.undestroy,
    H.prototype._destroy = function(w, E) {
        E(w)
    }
    ,
    H.prototype.push = function(w, E) {
        var F = this._readableState, j;
        return F.objectMode ? j = !0 : typeof w == "string" && (E = E || F.defaultEncoding,
        E !== F.encoding && (w = n.from(w, E),
        E = ""),
        j = !0),
        X(this, w, E, !1, j)
    }
    ,
    H.prototype.unshift = function(w) {
        return X(this, w, null, !0, !1)
    }
    ;
    function X(w, E, F, j, K) {
        l("readableAddChunk", E);
        var ee = w._readableState;
        if (E === null)
            ee.reading = !1,
            g(w, ee);
        else {
            var Z;
            if (K || (Z = ie(ee, E)),
            Z)
                O(w, Z);
            else if (ee.objectMode || E && E.length > 0)
                if (typeof E != "string" && !ee.objectMode && Object.getPrototypeOf(E) !== n.prototype && (E = s(E)),
                j)
                    ee.endEmitted ? O(w, new M) : Q(w, ee, E, !0);
                else if (ee.ended)
                    O(w, new P);
                else {
                    if (ee.destroyed)
                        return !1;
                    ee.reading = !1,
                    ee.decoder && !F ? (E = ee.decoder.write(E),
                    ee.objectMode || E.length !== 0 ? Q(w, ee, E, !1) : C(w, ee)) : Q(w, ee, E, !1)
                }
            else
                j || (ee.reading = !1,
                C(w, ee))
        }
        return !ee.ended && (ee.length < ee.highWaterMark || ee.length === 0)
    }
    function Q(w, E, F, j) {
        E.flowing && E.length === 0 && !E.sync ? (E.awaitDrain = 0,
        w.emit("data", F)) : (E.length += E.objectMode ? 1 : F.length,
        j ? E.buffer.unshift(F) : E.buffer.push(F),
        E.needReadable && m(w)),
        C(w, E)
    }
    function ie(w, E) {
        var F;
        return !o(E) && typeof E != "string" && E !== void 0 && !w.objectMode && (F = new x("chunk",["string", "Buffer", "Uint8Array"],E)),
        F
    }
    H.prototype.isPaused = function() {
        return this._readableState.flowing === !1
    }
    ,
    H.prototype.setEncoding = function(w) {
        k || (k = vc().StringDecoder);
        var E = new k(w);
        this._readableState.decoder = E,
        this._readableState.encoding = this._readableState.decoder.encoding;
        for (var F = this._readableState.buffer.head, j = ""; F !== null; )
            j += E.write(F.data),
            F = F.next;
        return this._readableState.buffer.clear(),
        j !== "" && this._readableState.buffer.push(j),
        this._readableState.length = j.length,
        this
    }
    ;
    var v = 1073741824;
    function a(w) {
        return w >= v ? w = v : (w--,
        w |= w >>> 1,
        w |= w >>> 2,
        w |= w >>> 4,
        w |= w >>> 8,
        w |= w >>> 16,
        w++),
        w
    }
    function d(w, E) {
        return w <= 0 || E.length === 0 && E.ended ? 0 : E.objectMode ? 1 : w !== w ? E.flowing && E.length ? E.buffer.head.data.length : E.length : (w > E.highWaterMark && (E.highWaterMark = a(w)),
        w <= E.length ? w : E.ended ? E.length : (E.needReadable = !0,
        0))
    }
    H.prototype.read = function(w) {
        l("read", w),
        w = parseInt(w, 10);
        var E = this._readableState
          , F = w;
        if (w !== 0 && (E.emittedReadable = !1),
        w === 0 && E.needReadable && ((E.highWaterMark !== 0 ? E.length >= E.highWaterMark : E.length > 0) || E.ended))
            return l("read: emitReadable", E.length, E.ended),
            E.length === 0 && E.ended ? B(this) : m(this),
            null;
        if (w = d(w, E),
        w === 0 && E.ended)
            return E.length === 0 && B(this),
            null;
        var j = E.needReadable;
        l("need readable", j),
        (E.length === 0 || E.length - w < E.highWaterMark) && (j = !0,
        l("length less than watermark", j)),
        E.ended || E.reading ? (j = !1,
        l("reading or ended", j)) : j && (l("do read"),
        E.reading = !0,
        E.sync = !0,
        E.length === 0 && (E.needReadable = !0),
        this._read(E.highWaterMark),
        E.sync = !1,
        E.reading || (w = d(F, E)));
        var K;
        return w > 0 ? K = T(w, E) : K = null,
        K === null ? (E.needReadable = E.length <= E.highWaterMark,
        w = 0) : (E.length -= w,
        E.awaitDrain = 0),
        E.length === 0 && (E.ended || (E.needReadable = !0),
        F !== w && E.ended && B(this)),
        K !== null && this.emit("data", K),
        K
    }
    ;
    function g(w, E) {
        if (l("onEofChunk"),
        !E.ended) {
            if (E.decoder) {
                var F = E.decoder.end();
                F && F.length && (E.buffer.push(F),
                E.length += E.objectMode ? 1 : F.length)
            }
            E.ended = !0,
            E.sync ? m(w) : (E.needReadable = !1,
            E.emittedReadable || (E.emittedReadable = !0,
            y(w)))
        }
    }
    function m(w) {
        var E = w._readableState;
        l("emitReadable", E.needReadable, E.emittedReadable),
        E.needReadable = !1,
        E.emittedReadable || (l("emitReadable", E.flowing),
        E.emittedReadable = !0,
        process.nextTick(y, w))
    }
    function y(w) {
        var E = w._readableState;
        l("emitReadable_", E.destroyed, E.length, E.ended),
        !E.destroyed && (E.length || E.ended) && (w.emit("readable"),
        E.emittedReadable = !1),
        E.needReadable = !E.flowing && !E.ended && E.length <= E.highWaterMark,
        I(w)
    }
    function C(w, E) {
        E.readingMore || (E.readingMore = !0,
        process.nextTick(A, w, E))
    }
    function A(w, E) {
        for (; !E.reading && !E.ended && (E.length < E.highWaterMark || E.flowing && E.length === 0); ) {
            var F = E.length;
            if (l("maybeReadMore read 0"),
            w.read(0),
            F === E.length)
                break
        }
        E.readingMore = !1
    }
    H.prototype._read = function(w) {
        O(this, new L("_read()"))
    }
    ,
    H.prototype.pipe = function(w, E) {
        var F = this
          , j = this._readableState;
        switch (j.pipesCount) {
        case 0:
            j.pipes = w;
            break;
        case 1:
            j.pipes = [j.pipes, w];
            break;
        default:
            j.pipes.push(w);
            break
        }
        j.pipesCount += 1,
        l("pipe count=%d opts=%j", j.pipesCount, E);
        var K = (!E || E.end !== !1) && w !== process.stdout && w !== process.stderr
          , ee = K ? le : he;
        j.endEmitted ? process.nextTick(ee) : F.once("end", ee),
        w.on("unpipe", Z);
        function Z(ue, ct) {
            l("onunpipe"),
            ue === F && ct && ct.hasUnpiped === !1 && (ct.hasUnpiped = !0,
            _e())
        }
        function le() {
            l("onend"),
            w.end()
        }
        var Mt = b(F);
        w.on("drain", Mt);
        var ge = !1;
        function _e() {
            l("cleanup"),
            w.removeListener("close", fe),
            w.removeListener("finish", Pt),
            w.removeListener("drain", Mt),
            w.removeListener("error", de),
            w.removeListener("unpipe", Z),
            F.removeListener("end", le),
            F.removeListener("end", he),
            F.removeListener("data", Vt),
            ge = !0,
            j.awaitDrain && (!w._writableState || w._writableState.needDrain) && Mt()
        }
        F.on("data", Vt);
        function Vt(ue) {
            l("ondata");
            var ct = w.write(ue);
            l("dest.write", ct),
            ct === !1 && ((j.pipesCount === 1 && j.pipes === w || j.pipesCount > 1 && te(j.pipes, w) !== -1) && !ge && (l("false write response, pause", j.awaitDrain),
            j.awaitDrain++),
            F.pause())
        }
        function de(ue) {
            l("onerror", ue),
            he(),
            w.removeListener("error", de),
            t(w, "error") === 0 && O(w, ue)
        }
        G(w, "error", de);
        function fe() {
            w.removeListener("finish", Pt),
            he()
        }
        w.once("close", fe);
        function Pt() {
            l("onfinish"),
            w.removeListener("close", fe),
            he()
        }
        w.once("finish", Pt);
        function he() {
            l("unpipe"),
            F.unpipe(w)
        }
        return w.emit("pipe", F),
        j.flowing || (l("pipe resume"),
        F.resume()),
        w
    }
    ;
    function b(w) {
        return function() {
            var F = w._readableState;
            l("pipeOnDrain", F.awaitDrain),
            F.awaitDrain && F.awaitDrain--,
            F.awaitDrain === 0 && t(w, "data") && (F.flowing = !0,
            I(w))
        }
    }
    H.prototype.unpipe = function(w) {
        var E = this._readableState
          , F = {
            hasUnpiped: !1
        };
        if (E.pipesCount === 0)
            return this;
        if (E.pipesCount === 1)
            return w && w !== E.pipes ? this : (w || (w = E.pipes),
            E.pipes = null,
            E.pipesCount = 0,
            E.flowing = !1,
            w && w.emit("unpipe", this, F),
            this);
        if (!w) {
            var j = E.pipes
              , K = E.pipesCount;
            E.pipes = null,
            E.pipesCount = 0,
            E.flowing = !1;
            for (var ee = 0; ee < K; ee++)
                j[ee].emit("unpipe", this, {
                    hasUnpiped: !1
                });
            return this
        }
        var Z = te(E.pipes, w);
        return Z === -1 ? this : (E.pipes.splice(Z, 1),
        E.pipesCount -= 1,
        E.pipesCount === 1 && (E.pipes = E.pipes[0]),
        w.emit("unpipe", this, F),
        this)
    }
    ,
    H.prototype.on = function(w, E) {
        var F = r.prototype.on.call(this, w, E)
          , j = this._readableState;
        return w === "data" ? (j.readableListening = this.listenerCount("readable") > 0,
        j.flowing !== !1 && this.resume()) : w === "readable" && !j.endEmitted && !j.readableListening && (j.readableListening = j.needReadable = !0,
        j.flowing = !1,
        j.emittedReadable = !1,
        l("on readable", j.length, j.reading),
        j.length ? m(this) : j.reading || process.nextTick(S, this)),
        F
    }
    ,
    H.prototype.addListener = H.prototype.on,
    H.prototype.removeListener = function(w, E) {
        var F = r.prototype.removeListener.call(this, w, E);
        return w === "readable" && process.nextTick(h, this),
        F
    }
    ,
    H.prototype.removeAllListeners = function(w) {
        var E = r.prototype.removeAllListeners.apply(this, arguments);
        return (w === "readable" || w === void 0) && process.nextTick(h, this),
        E
    }
    ;
    function h(w) {
        var E = w._readableState;
        E.readableListening = w.listenerCount("readable") > 0,
        E.resumeScheduled && !E.paused ? E.flowing = !0 : w.listenerCount("data") > 0 && w.resume()
    }
    function S(w) {
        l("readable nexttick read 0"),
        w.read(0)
    }
    H.prototype.resume = function() {
        var w = this._readableState;
        return w.flowing || (l("resume"),
        w.flowing = !w.readableListening,
        W(this, w)),
        w.paused = !1,
        this
    }
    ;
    function W(w, E) {
        E.resumeScheduled || (E.resumeScheduled = !0,
        process.nextTick(q, w, E))
    }
    function q(w, E) {
        l("resume", E.reading),
        E.reading || w.read(0),
        E.resumeScheduled = !1,
        w.emit("resume"),
        I(w),
        E.flowing && !E.reading && w.read(0)
    }
    H.prototype.pause = function() {
        return l("call pause flowing=%j", this._readableState.flowing),
        this._readableState.flowing !== !1 && (l("pause"),
        this._readableState.flowing = !1,
        this.emit("pause")),
        this._readableState.paused = !0,
        this
    }
    ;
    function I(w) {
        var E = w._readableState;
        for (l("flow", E.flowing); E.flowing && w.read() !== null; )
            ;
    }
    H.prototype.wrap = function(w) {
        var E = this
          , F = this._readableState
          , j = !1;
        w.on("end", function() {
            if (l("wrapped end"),
            F.decoder && !F.ended) {
                var Z = F.decoder.end();
                Z && Z.length && E.push(Z)
            }
            E.push(null)
        }),
        w.on("data", function(Z) {
            if (l("wrapped data"),
            F.decoder && (Z = F.decoder.write(Z)),
            !(F.objectMode && Z == null) && !(!F.objectMode && (!Z || !Z.length))) {
                var le = E.push(Z);
                le || (j = !0,
                w.pause())
            }
        });
        for (var K in w)
            this[K] === void 0 && typeof w[K] == "function" && (this[K] = function(le) {
                return function() {
                    return w[le].apply(w, arguments)
                }
            }(K));
        for (var ee = 0; ee < D.length; ee++)
            w.on(D[ee], this.emit.bind(this, D[ee]));
        return this._read = function(Z) {
            l("wrapped _read", Z),
            j && (j = !1,
            w.resume())
        }
        ,
        this
    }
    ,
    typeof Symbol == "function" && (H.prototype[Symbol.asyncIterator] = function() {
        return N === void 0 && (N = Lp()),
        N(this)
    }
    ),
    Object.defineProperty(H.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark
        }
    }),
    Object.defineProperty(H.prototype, "readableBuffer", {
        enumerable: !1,
        get: function() {
            return this._readableState && this._readableState.buffer
        }
    }),
    Object.defineProperty(H.prototype, "readableFlowing", {
        enumerable: !1,
        get: function() {
            return this._readableState.flowing
        },
        set: function(E) {
            this._readableState && (this._readableState.flowing = E)
        }
    }),
    H._fromList = T,
    Object.defineProperty(H.prototype, "readableLength", {
        enumerable: !1,
        get: function() {
            return this._readableState.length
        }
    });
    function T(w, E) {
        if (E.length === 0)
            return null;
        var F;
        return E.objectMode ? F = E.buffer.shift() : !w || w >= E.length ? (E.decoder ? F = E.buffer.join("") : E.buffer.length === 1 ? F = E.buffer.first() : F = E.buffer.concat(E.length),
        E.buffer.clear()) : F = E.buffer.consume(w, E.decoder),
        F
    }
    function B(w) {
        var E = w._readableState;
        l("endReadable", E.endEmitted),
        E.endEmitted || (E.ended = !0,
        process.nextTick(U, E, w))
    }
    function U(w, E) {
        if (l("endReadableNT", w.endEmitted, w.length),
        !w.endEmitted && w.length === 0 && (w.endEmitted = !0,
        E.readable = !1,
        E.emit("end"),
        w.autoDestroy)) {
            var F = E._writableState;
            (!F || F.autoDestroy && F.finished) && E.destroy()
        }
    }
    typeof Symbol == "function" && (H.from = function(w, E) {
        return $ === void 0 && ($ = Op()),
        $(H, w, E)
    }
    );
    function te(w, E) {
        for (var F = 0, j = w.length; F < j; F++)
            if (w[F] === E)
                return F;
        return -1
    }
    return no
}
var xu = Wt
  , ds = Tr.codes
  , Pp = ds.ERR_METHOD_NOT_IMPLEMENTED
  , $p = ds.ERR_MULTIPLE_CALLBACK
  , Bp = ds.ERR_TRANSFORM_ALREADY_TRANSFORMING
  , Dp = ds.ERR_TRANSFORM_WITH_LENGTH_0
  , fs = un();
Et(Wt, fs);
function Fp(e, t) {
    var r = this._transformState;
    r.transforming = !1;
    var n = r.writecb;
    if (n === null)
        return this.emit("error", new $p);
    r.writechunk = null,
    r.writecb = null,
    t != null && this.push(t),
    n(e);
    var i = this._readableState;
    i.reading = !1,
    (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
}
function Wt(e) {
    if (!(this instanceof Wt))
        return new Wt(e);
    fs.call(this, e),
    this._transformState = {
        afterTransform: Fp.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
    },
    this._readableState.needReadable = !0,
    this._readableState.sync = !1,
    e && (typeof e.transform == "function" && (this._transform = e.transform),
    typeof e.flush == "function" && (this._flush = e.flush)),
    this.on("prefinish", jp)
}
function jp() {
    var e = this;
    typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, r) {
        Sc(e, t, r)
    }) : Sc(this, null, null)
}
Wt.prototype.push = function(e, t) {
    return this._transformState.needTransform = !1,
    fs.prototype.push.call(this, e, t)
}
;
Wt.prototype._transform = function(e, t, r) {
    r(new Pp("_transform()"))
}
;
Wt.prototype._write = function(e, t, r) {
    var n = this._transformState;
    if (n.writecb = r,
    n.writechunk = e,
    n.writeencoding = t,
    !n.transforming) {
        var i = this._readableState;
        (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }
}
;
Wt.prototype._read = function(e) {
    var t = this._transformState;
    t.writechunk !== null && !t.transforming ? (t.transforming = !0,
    this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
}
;
Wt.prototype._destroy = function(e, t) {
    fs.prototype._destroy.call(this, e, function(r) {
        t(r)
    })
}
;
function Sc(e, t, r) {
    if (t)
        return e.emit("error", t);
    if (r != null && e.push(r),
    e._writableState.length)
        throw new Dp;
    if (e._transformState.transforming)
        throw new Bp;
    return e.push(null)
}
var Hp = $n
  , Au = xu;
Et($n, Au);
function $n(e) {
    if (!(this instanceof $n))
        return new $n(e);
    Au.call(this, e)
}
$n.prototype._transform = function(e, t, r) {
    r(null, e)
}
;
var io;
function Up(e) {
    var t = !1;
    return function() {
        t || (t = !0,
        e.apply(void 0, arguments))
    }
}
var Tu = Tr.codes
  , Wp = Tu.ERR_MISSING_ARGS
  , Vp = Tu.ERR_STREAM_DESTROYED;
function Rc(e) {
    if (e)
        throw e
}
function qp(e) {
    return e.setHeader && typeof e.abort == "function"
}
function zp(e, t, r, n) {
    n = Up(n);
    var i = !1;
    e.on("close", function() {
        i = !0
    }),
    io === void 0 && (io = ia),
    io(e, {
        readable: t,
        writable: r
    }, function(o) {
        if (o)
            return n(o);
        i = !0,
        n()
    });
    var s = !1;
    return function(o) {
        if (!i && !s) {
            if (s = !0,
            qp(e))
                return e.abort();
            if (typeof e.destroy == "function")
                return e.destroy();
            n(o || new Vp("pipe"))
        }
    }
}
function Mc(e) {
    e()
}
function Gp(e, t) {
    return e.pipe(t)
}
function Jp(e) {
    return !e.length || typeof e[e.length - 1] != "function" ? Rc : e.pop()
}
function Zp() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    var n = Jp(t);
    if (Array.isArray(t[0]) && (t = t[0]),
    t.length < 2)
        throw new Wp("streams");
    var i, s = t.map(function(o, c) {
        var l = c < t.length - 1
          , u = c > 0;
        return zp(o, l, u, function(p) {
            i || (i = p),
            p && s.forEach(Mc),
            !l && (s.forEach(Mc),
            n(i))
        })
    });
    return t.reduce(Gp)
}
var Kp = Zp;
(function(e, t) {
    t = e.exports = Iu(),
    t.Stream = t,
    t.Readable = t,
    t.Writable = Cu(),
    t.Duplex = un(),
    t.Transform = xu,
    t.PassThrough = Hp,
    t.finished = ia,
    t.pipeline = Kp
}
)(To, To.exports);
var Nu = To.exports;
const {Transform: Qp} = Nu;
var Yp = e=>class Lu extends Qp {
    constructor(r, n, i, s, o) {
        super(o),
        this._rate = r,
        this._capacity = n,
        this._delimitedSuffix = i,
        this._hashBitLength = s,
        this._options = o,
        this._state = new e,
        this._state.initialize(r, n),
        this._finalized = !1
    }
    _transform(r, n, i) {
        let s = null;
        try {
            this.update(r, n)
        } catch (o) {
            s = o
        }
        i(s)
    }
    _flush(r) {
        let n = null;
        try {
            this.push(this.digest())
        } catch (i) {
            n = i
        }
        r(n)
    }
    update(r, n) {
        if (!Buffer.isBuffer(r) && typeof r != "string")
            throw new TypeError("Data must be a string or a buffer");
        if (this._finalized)
            throw new Error("Digest already called");
        return Buffer.isBuffer(r) || (r = Buffer.from(r, n)),
        this._state.absorb(r),
        this
    }
    digest(r) {
        if (this._finalized)
            throw new Error("Digest already called");
        this._finalized = !0,
        this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
        let n = this._state.squeeze(this._hashBitLength / 8);
        return r !== void 0 && (n = n.toString(r)),
        this._resetState(),
        n
    }
    _resetState() {
        return this._state.initialize(this._rate, this._capacity),
        this
    }
    _clone() {
        const r = new Lu(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);
        return this._state.copy(r._state),
        r._finalized = this._finalized,
        r
    }
}
;
const {Transform: Xp} = Nu;
var e1 = e=>class Ou extends Xp {
    constructor(r, n, i, s) {
        super(s),
        this._rate = r,
        this._capacity = n,
        this._delimitedSuffix = i,
        this._options = s,
        this._state = new e,
        this._state.initialize(r, n),
        this._finalized = !1
    }
    _transform(r, n, i) {
        let s = null;
        try {
            this.update(r, n)
        } catch (o) {
            s = o
        }
        i(s)
    }
    _flush() {}
    _read(r) {
        this.push(this.squeeze(r))
    }
    update(r, n) {
        if (!Buffer.isBuffer(r) && typeof r != "string")
            throw new TypeError("Data must be a string or a buffer");
        if (this._finalized)
            throw new Error("Squeeze already called");
        return Buffer.isBuffer(r) || (r = Buffer.from(r, n)),
        this._state.absorb(r),
        this
    }
    squeeze(r, n) {
        this._finalized || (this._finalized = !0,
        this._state.absorbLastFewBits(this._delimitedSuffix));
        let i = this._state.squeeze(r);
        return n !== void 0 && (i = i.toString(n)),
        i
    }
    _resetState() {
        return this._state.initialize(this._rate, this._capacity),
        this
    }
    _clone() {
        const r = new Ou(this._rate,this._capacity,this._delimitedSuffix,this._options);
        return this._state.copy(r._state),
        r._finalized = this._finalized,
        r
    }
}
;
const t1 = Yp
  , r1 = e1;
var n1 = function(e) {
    const t = t1(e)
      , r = r1(e);
    return function(n, i) {
        switch (typeof n == "string" ? n.toLowerCase() : n) {
        case "keccak224":
            return new t(1152,448,null,224,i);
        case "keccak256":
            return new t(1088,512,null,256,i);
        case "keccak384":
            return new t(832,768,null,384,i);
        case "keccak512":
            return new t(576,1024,null,512,i);
        case "sha3-224":
            return new t(1152,448,6,224,i);
        case "sha3-256":
            return new t(1088,512,6,256,i);
        case "sha3-384":
            return new t(832,768,6,384,i);
        case "sha3-512":
            return new t(576,1024,6,512,i);
        case "shake128":
            return new r(1344,256,31,i);
        case "shake256":
            return new r(1088,512,31,i);
        default:
            throw new Error("Invald algorithm: " + n)
        }
    }
}
  , Pu = {};
const Cc = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
Pu.p1600 = function(e) {
    for (let t = 0; t < 24; ++t) {
        const r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]
          , n = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]
          , i = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]
          , s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]
          , o = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]
          , c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]
          , l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]
          , u = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]
          , p = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]
          , f = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
        let _ = p ^ (i << 1 | s >>> 31)
          , R = f ^ (s << 1 | i >>> 31);
        const x = e[0] ^ _
          , P = e[1] ^ R
          , L = e[10] ^ _
          , M = e[11] ^ R
          , k = e[20] ^ _
          , N = e[21] ^ R
          , $ = e[30] ^ _
          , O = e[31] ^ R
          , D = e[40] ^ _
          , G = e[41] ^ R;
        _ = r ^ (o << 1 | c >>> 31),
        R = n ^ (c << 1 | o >>> 31);
        const V = e[2] ^ _
          , H = e[3] ^ R
          , X = e[12] ^ _
          , Q = e[13] ^ R
          , ie = e[22] ^ _
          , v = e[23] ^ R
          , a = e[32] ^ _
          , d = e[33] ^ R
          , g = e[42] ^ _
          , m = e[43] ^ R;
        _ = i ^ (l << 1 | u >>> 31),
        R = s ^ (u << 1 | l >>> 31);
        const y = e[4] ^ _
          , C = e[5] ^ R
          , A = e[14] ^ _
          , b = e[15] ^ R
          , h = e[24] ^ _
          , S = e[25] ^ R
          , W = e[34] ^ _
          , q = e[35] ^ R
          , I = e[44] ^ _
          , T = e[45] ^ R;
        _ = o ^ (p << 1 | f >>> 31),
        R = c ^ (f << 1 | p >>> 31);
        const B = e[6] ^ _
          , U = e[7] ^ R
          , te = e[16] ^ _
          , w = e[17] ^ R
          , E = e[26] ^ _
          , F = e[27] ^ R
          , j = e[36] ^ _
          , K = e[37] ^ R
          , ee = e[46] ^ _
          , Z = e[47] ^ R;
        _ = l ^ (r << 1 | n >>> 31),
        R = u ^ (n << 1 | r >>> 31);
        const le = e[8] ^ _
          , Mt = e[9] ^ R
          , ge = e[18] ^ _
          , _e = e[19] ^ R
          , Vt = e[28] ^ _
          , de = e[29] ^ R
          , fe = e[38] ^ _
          , Pt = e[39] ^ R
          , he = e[48] ^ _
          , ue = e[49] ^ R
          , ct = x
          , me = P
          , ve = M << 4 | L >>> 28
          , Or = L << 4 | M >>> 28
          , be = k << 3 | N >>> 29
          , ye = N << 3 | k >>> 29
          , Pr = O << 9 | $ >>> 23
          , we = $ << 9 | O >>> 23
          , Ee = D << 18 | G >>> 14
          , $r = G << 18 | D >>> 14
          , Se = V << 1 | H >>> 31
          , Re = H << 1 | V >>> 31
          , Br = Q << 12 | X >>> 20
          , Me = X << 12 | Q >>> 20
          , Ce = ie << 10 | v >>> 22
          , Dr = v << 10 | ie >>> 22
          , ke = d << 13 | a >>> 19
          , Ie = a << 13 | d >>> 19
          , Fr = g << 2 | m >>> 30
          , xe = m << 2 | g >>> 30
          , Ae = C << 30 | y >>> 2
          , jr = y << 30 | C >>> 2
          , Te = A << 6 | b >>> 26
          , Ne = b << 6 | A >>> 26
          , Hr = S << 11 | h >>> 21
          , Le = h << 11 | S >>> 21
          , Oe = W << 15 | q >>> 17
          , Ur = q << 15 | W >>> 17
          , Pe = T << 29 | I >>> 3
          , $e = I << 29 | T >>> 3
          , Wr = B << 28 | U >>> 4
          , Be = U << 28 | B >>> 4
          , De = w << 23 | te >>> 9
          , Vr = te << 23 | w >>> 9
          , Fe = E << 25 | F >>> 7
          , je = F << 25 | E >>> 7
          , Yt = j << 21 | K >>> 11
          , Xt = K << 21 | j >>> 11
          , er = Z << 24 | ee >>> 8
          , tr = ee << 24 | Z >>> 8
          , rr = le << 27 | Mt >>> 5
          , nr = Mt << 27 | le >>> 5
          , ir = ge << 20 | _e >>> 12
          , sr = _e << 20 | ge >>> 12
          , or = de << 7 | Vt >>> 25
          , ar = Vt << 7 | de >>> 25
          , cr = fe << 8 | Pt >>> 24
          , lr = Pt << 8 | fe >>> 24
          , ur = he << 14 | ue >>> 18
          , hr = ue << 14 | he >>> 18;
        e[0] = ct ^ ~Br & Hr,
        e[1] = me ^ ~Me & Le,
        e[10] = Wr ^ ~ir & be,
        e[11] = Be ^ ~sr & ye,
        e[20] = Se ^ ~Te & Fe,
        e[21] = Re ^ ~Ne & je,
        e[30] = rr ^ ~ve & Ce,
        e[31] = nr ^ ~Or & Dr,
        e[40] = Ae ^ ~De & or,
        e[41] = jr ^ ~Vr & ar,
        e[2] = Br ^ ~Hr & Yt,
        e[3] = Me ^ ~Le & Xt,
        e[12] = ir ^ ~be & ke,
        e[13] = sr ^ ~ye & Ie,
        e[22] = Te ^ ~Fe & cr,
        e[23] = Ne ^ ~je & lr,
        e[32] = ve ^ ~Ce & Oe,
        e[33] = Or ^ ~Dr & Ur,
        e[42] = De ^ ~or & Pr,
        e[43] = Vr ^ ~ar & we,
        e[4] = Hr ^ ~Yt & ur,
        e[5] = Le ^ ~Xt & hr,
        e[14] = be ^ ~ke & Pe,
        e[15] = ye ^ ~Ie & $e,
        e[24] = Fe ^ ~cr & Ee,
        e[25] = je ^ ~lr & $r,
        e[34] = Ce ^ ~Oe & er,
        e[35] = Dr ^ ~Ur & tr,
        e[44] = or ^ ~Pr & Fr,
        e[45] = ar ^ ~we & xe,
        e[6] = Yt ^ ~ur & ct,
        e[7] = Xt ^ ~hr & me,
        e[16] = ke ^ ~Pe & Wr,
        e[17] = Ie ^ ~$e & Be,
        e[26] = cr ^ ~Ee & Se,
        e[27] = lr ^ ~$r & Re,
        e[36] = Oe ^ ~er & rr,
        e[37] = Ur ^ ~tr & nr,
        e[46] = Pr ^ ~Fr & Ae,
        e[47] = we ^ ~xe & jr,
        e[8] = ur ^ ~ct & Br,
        e[9] = hr ^ ~me & Me,
        e[18] = Pe ^ ~Wr & ir,
        e[19] = $e ^ ~Be & sr,
        e[28] = Ee ^ ~Se & Te,
        e[29] = $r ^ ~Re & Ne,
        e[38] = er ^ ~rr & ve,
        e[39] = tr ^ ~nr & Or,
        e[48] = Fr ^ ~Ae & De,
        e[49] = xe ^ ~jr & Vr,
        e[0] ^= Cc[t * 2],
        e[1] ^= Cc[t * 2 + 1]
    }
}
;
const Ti = Pu;
function wn() {
    this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.blockSize = null,
    this.count = 0,
    this.squeezing = !1
}
wn.prototype.initialize = function(e, t) {
    for (let r = 0; r < 50; ++r)
        this.state[r] = 0;
    this.blockSize = e / 8,
    this.count = 0,
    this.squeezing = !1
}
;
wn.prototype.absorb = function(e) {
    for (let t = 0; t < e.length; ++t)
        this.state[~~(this.count / 4)] ^= e[t] << 8 * (this.count % 4),
        this.count += 1,
        this.count === this.blockSize && (Ti.p1600(this.state),
        this.count = 0)
}
;
wn.prototype.absorbLastFewBits = function(e) {
    this.state[~~(this.count / 4)] ^= e << 8 * (this.count % 4),
    e & 128 && this.count === this.blockSize - 1 && Ti.p1600(this.state),
    this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4),
    Ti.p1600(this.state),
    this.count = 0,
    this.squeezing = !0
}
;
wn.prototype.squeeze = function(e) {
    this.squeezing || this.absorbLastFewBits(1);
    const t = Buffer.alloc(e);
    for (let r = 0; r < e; ++r)
        t[r] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255,
        this.count += 1,
        this.count === this.blockSize && (Ti.p1600(this.state),
        this.count = 0);
    return t
}
;
wn.prototype.copy = function(e) {
    for (let t = 0; t < 50; ++t)
        e.state[t] = this.state[t];
    e.blockSize = this.blockSize,
    e.count = this.count,
    e.squeezing = this.squeezing
}
;
var i1 = wn
  , s1 = n1(i1);
const o1 = s1
  , a1 = ji;
function $u(e) {
    return Buffer.allocUnsafe(e).fill(0)
}
function Bu(e, t, r) {
    const n = $u(t);
    return e = ps(e),
    r ? e.length < t ? (e.copy(n),
    n) : e.slice(0, t) : e.length < t ? (e.copy(n, t - e.length),
    n) : e.slice(-t)
}
function c1(e, t) {
    return Bu(e, t, !0)
}
function ps(e) {
    if (!Buffer.isBuffer(e))
        if (Array.isArray(e))
            e = Buffer.from(e);
        else if (typeof e == "string")
            Du(e) ? e = Buffer.from(h1(Fu(e)), "hex") : e = Buffer.from(e);
        else if (typeof e == "number")
            e = intToBuffer(e);
        else if (e == null)
            e = Buffer.allocUnsafe(0);
        else if (a1.isBN(e))
            e = e.toArrayLike(Buffer);
        else if (e.toArray)
            e = Buffer.from(e.toArray());
        else
            throw new Error("invalid type");
    return e
}
function l1(e) {
    return e = ps(e),
    "0x" + e.toString("hex")
}
function u1(e, t) {
    return e = ps(e),
    t || (t = 256),
    o1("keccak" + t).update(e).digest()
}
function h1(e) {
    return e.length % 2 ? "0" + e : e
}
function Du(e) {
    return typeof e == "string" && e.match(/^0x[0-9A-Fa-f]*$/)
}
function Fu(e) {
    return typeof e == "string" && e.startsWith("0x") ? e.slice(2) : e
}
var ju = {
    zeros: $u,
    setLength: Bu,
    setLengthRight: c1,
    isHexString: Du,
    stripHexPrefix: Fu,
    toBuffer: ps,
    bufferToHex: l1,
    keccak: u1
};
const Mr = ju
  , yr = ji;
function Hu(e) {
    return e.startsWith("int[") ? "int256" + e.slice(3) : e === "int" ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : e === "uint" ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : e === "fixed" ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : e === "ufixed" ? "ufixed128x128" : e
}
function tn(e) {
    return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
}
function kc(e) {
    var t = /^\D+(\d+)x(\d+)$/.exec(e);
    return [parseInt(t[1], 10), parseInt(t[2], 10)]
}
function Uu(e) {
    var t = e.match(/(.*)\[(.*?)\]$/);
    return t ? t[2] === "" ? "dynamic" : parseInt(t[2], 10) : null
}
function mr(e) {
    var t = typeof e;
    if (t === "string")
        return Mr.isHexString(e) ? new yr(Mr.stripHexPrefix(e),16) : new yr(e,10);
    if (t === "number")
        return new yr(e);
    if (e.toArray)
        return e;
    throw new Error("Argument is not a number")
}
function xt(e, t) {
    var r, n, i, s;
    if (e === "address")
        return xt("uint160", mr(t));
    if (e === "bool")
        return xt("uint8", t ? 1 : 0);
    if (e === "string")
        return xt("bytes", new Buffer(t,"utf8"));
    if (f1(e)) {
        if (typeof t.length > "u")
            throw new Error("Not an array?");
        if (r = Uu(e),
        r !== "dynamic" && r !== 0 && t.length > r)
            throw new Error("Elements exceed array size: " + r);
        i = [],
        e = e.slice(0, e.lastIndexOf("[")),
        typeof t == "string" && (t = JSON.parse(t));
        for (s in t)
            i.push(xt(e, t[s]));
        if (r === "dynamic") {
            var o = xt("uint256", t.length);
            i.unshift(o)
        }
        return Buffer.concat(i)
    } else {
        if (e === "bytes")
            return t = new Buffer(t),
            i = Buffer.concat([xt("uint256", t.length), t]),
            t.length % 32 !== 0 && (i = Buffer.concat([i, Mr.zeros(32 - t.length % 32)])),
            i;
        if (e.startsWith("bytes")) {
            if (r = tn(e),
            r < 1 || r > 32)
                throw new Error("Invalid bytes<N> width: " + r);
            return Mr.setLengthRight(t, 32)
        } else if (e.startsWith("uint")) {
            if (r = tn(e),
            r % 8 || r < 8 || r > 256)
                throw new Error("Invalid uint<N> width: " + r);
            if (n = mr(t),
            n.bitLength() > r)
                throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
            if (n < 0)
                throw new Error("Supplied uint is negative");
            return n.toArrayLike(Buffer, "be", 32)
        } else if (e.startsWith("int")) {
            if (r = tn(e),
            r % 8 || r < 8 || r > 256)
                throw new Error("Invalid int<N> width: " + r);
            if (n = mr(t),
            n.bitLength() > r)
                throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
            return n.toTwos(256).toArrayLike(Buffer, "be", 32)
        } else if (e.startsWith("ufixed")) {
            if (r = kc(e),
            n = mr(t),
            n < 0)
                throw new Error("Supplied ufixed is negative");
            return xt("uint256", n.mul(new yr(2).pow(new yr(r[1]))))
        } else if (e.startsWith("fixed"))
            return r = kc(e),
            xt("int256", mr(t).mul(new yr(2).pow(new yr(r[1]))))
    }
    throw new Error("Unsupported or invalid type: " + e)
}
function d1(e) {
    return e === "string" || e === "bytes" || Uu(e) === "dynamic"
}
function f1(e) {
    return e.lastIndexOf("]") === e.length - 1
}
function p1(e, t) {
    var r = []
      , n = []
      , i = 32 * e.length;
    for (var s in e) {
        var o = Hu(e[s])
          , c = t[s]
          , l = xt(o, c);
        d1(o) ? (r.push(xt("uint256", i)),
        n.push(l),
        i += l.length) : r.push(l)
    }
    return Buffer.concat(r.concat(n))
}
function Wu(e, t) {
    if (e.length !== t.length)
        throw new Error("Number of types are not matching the values");
    for (var r, n, i = [], s = 0; s < e.length; s++) {
        var o = Hu(e[s])
          , c = t[s];
        if (o === "bytes")
            i.push(c);
        else if (o === "string")
            i.push(new Buffer(c,"utf8"));
        else if (o === "bool")
            i.push(new Buffer(c ? "01" : "00","hex"));
        else if (o === "address")
            i.push(Mr.setLength(c, 20));
        else if (o.startsWith("bytes")) {
            if (r = tn(o),
            r < 1 || r > 32)
                throw new Error("Invalid bytes<N> width: " + r);
            i.push(Mr.setLengthRight(c, r))
        } else if (o.startsWith("uint")) {
            if (r = tn(o),
            r % 8 || r < 8 || r > 256)
                throw new Error("Invalid uint<N> width: " + r);
            if (n = mr(c),
            n.bitLength() > r)
                throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
            i.push(n.toArrayLike(Buffer, "be", r / 8))
        } else if (o.startsWith("int")) {
            if (r = tn(o),
            r % 8 || r < 8 || r > 256)
                throw new Error("Invalid int<N> width: " + r);
            if (n = mr(c),
            n.bitLength() > r)
                throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
            i.push(n.toTwos(r).toArrayLike(Buffer, "be", r / 8))
        } else
            throw new Error("Unsupported or invalid type: " + o)
    }
    return Buffer.concat(i)
}
function g1(e, t) {
    return Mr.keccak(Wu(e, t))
}
var _1 = {
    rawEncode: p1,
    solidityPack: Wu,
    soliditySHA3: g1
};
const yt = ju
  , Nn = _1
  , Vu = {
    type: "object",
    properties: {
        types: {
            type: "object",
            additionalProperties: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string"
                        },
                        type: {
                            type: "string"
                        }
                    },
                    required: ["name", "type"]
                }
            }
        },
        primaryType: {
            type: "string"
        },
        domain: {
            type: "object"
        },
        message: {
            type: "object"
        }
    },
    required: ["types", "primaryType", "domain", "message"]
}
  , so = {
    encodeData(e, t, r, n=!0) {
        const i = ["bytes32"]
          , s = [this.hashType(e, r)];
        if (n) {
            const o = (c,l,u)=>{
                if (r[l] !== void 0)
                    return ["bytes32", u == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : yt.keccak(this.encodeData(l, u, r, n))];
                if (u === void 0)
                    throw new Error(`missing value for field ${c} of type ${l}`);
                if (l === "bytes")
                    return ["bytes32", yt.keccak(u)];
                if (l === "string")
                    return typeof u == "string" && (u = Buffer.from(u, "utf8")),
                    ["bytes32", yt.keccak(u)];
                if (l.lastIndexOf("]") === l.length - 1) {
                    const p = l.slice(0, l.lastIndexOf("["))
                      , f = u.map(_=>o(c, p, _));
                    return ["bytes32", yt.keccak(Nn.rawEncode(f.map(([_])=>_), f.map(([,_])=>_)))]
                }
                return [l, u]
            }
            ;
            for (const c of r[e]) {
                const [l,u] = o(c.name, c.type, t[c.name]);
                i.push(l),
                s.push(u)
            }
        } else
            for (const o of r[e]) {
                let c = t[o.name];
                if (c !== void 0)
                    if (o.type === "bytes")
                        i.push("bytes32"),
                        c = yt.keccak(c),
                        s.push(c);
                    else if (o.type === "string")
                        i.push("bytes32"),
                        typeof c == "string" && (c = Buffer.from(c, "utf8")),
                        c = yt.keccak(c),
                        s.push(c);
                    else if (r[o.type] !== void 0)
                        i.push("bytes32"),
                        c = yt.keccak(this.encodeData(o.type, c, r, n)),
                        s.push(c);
                    else {
                        if (o.type.lastIndexOf("]") === o.type.length - 1)
                            throw new Error("Arrays currently unimplemented in encodeData");
                        i.push(o.type),
                        s.push(c)
                    }
            }
        return Nn.rawEncode(i, s)
    },
    encodeType(e, t) {
        let r = ""
          , n = this.findTypeDependencies(e, t).filter(i=>i !== e);
        n = [e].concat(n.sort());
        for (const i of n) {
            if (!t[i])
                throw new Error("No type definition specified: " + i);
            r += i + "(" + t[i].map(({name: o, type: c})=>c + " " + o).join(",") + ")"
        }
        return r
    },
    findTypeDependencies(e, t, r=[]) {
        if (e = e.match(/^\w*/)[0],
        r.includes(e) || t[e] === void 0)
            return r;
        r.push(e);
        for (const n of t[e])
            for (const i of this.findTypeDependencies(n.type, t, r))
                !r.includes(i) && r.push(i);
        return r
    },
    hashStruct(e, t, r, n=!0) {
        return yt.keccak(this.encodeData(e, t, r, n))
    },
    hashType(e, t) {
        return yt.keccak(this.encodeType(e, t))
    },
    sanitizeData(e) {
        const t = {};
        for (const r in Vu.properties)
            e[r] && (t[r] = e[r]);
        return t.types && (t.types = Object.assign({
            EIP712Domain: []
        }, t.types)),
        t
    },
    hash(e, t=!0) {
        const r = this.sanitizeData(e)
          , n = [Buffer.from("1901", "hex")];
        return n.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
        r.primaryType !== "EIP712Domain" && n.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
        yt.keccak(Buffer.concat(n))
    }
};
var m1 = {
    TYPED_MESSAGE_SCHEMA: Vu,
    TypedDataUtils: so,
    hashForSignTypedDataLegacy: function(e) {
        return v1(e.data)
    },
    hashForSignTypedData_v3: function(e) {
        return so.hash(e.data, !1)
    },
    hashForSignTypedData_v4: function(e) {
        return so.hash(e.data)
    }
};
function v1(e) {
    const t = new Error("Expect argument to be non-empty array");
    if (typeof e != "object" || !e.length)
        throw t;
    const r = e.map(function(s) {
        return s.type === "bytes" ? yt.toBuffer(s.value) : s.value
    })
      , n = e.map(function(s) {
        return s.type
    })
      , i = e.map(function(s) {
        if (!s.name)
            throw t;
        return s.type + " " + s.name
    });
    return Nn.soliditySHA3(["bytes32", "bytes32"], [Nn.soliditySHA3(new Array(e.length).fill("string"), i), Nn.soliditySHA3(n, r)])
}
var hn = {};
Object.defineProperty(hn, "__esModule", {
    value: !0
});
hn.filterFromParam = hn.FilterPolyfill = void 0;
const Yr = Je
  , nt = z
  , b1 = 5 * 60 * 1e3
  , vr = {
    jsonrpc: "2.0",
    id: 0
};
class y1 {
    constructor(t) {
        this.logFilters = new Map,
        this.blockFilters = new Set,
        this.pendingTransactionFilters = new Set,
        this.cursors = new Map,
        this.timeouts = new Map,
        this.nextFilterId = (0,
        Yr.IntNumber)(1),
        this.REQUEST_THROTTLE_INTERVAL = 1e3,
        this.lastFetchTimestamp = new Date(0),
        this.resolvers = [],
        this.provider = t
    }
    async newFilter(t) {
        const r = qu(t)
          , n = this.makeFilterId()
          , i = await this.setInitialCursorPosition(n, r.fromBlock);
        return console.info(`Installing new log filter(${n}):`, r, "initial cursor position:", i),
        this.logFilters.set(n, r),
        this.setFilterTimeout(n),
        (0,
        nt.hexStringFromIntNumber)(n)
    }
    async newBlockFilter() {
        const t = this.makeFilterId()
          , r = await this.setInitialCursorPosition(t, "latest");
        return console.info(`Installing new block filter (${t}) with initial cursor position:`, r),
        this.blockFilters.add(t),
        this.setFilterTimeout(t),
        (0,
        nt.hexStringFromIntNumber)(t)
    }
    async newPendingTransactionFilter() {
        const t = this.makeFilterId()
          , r = await this.setInitialCursorPosition(t, "latest");
        return console.info(`Installing new block filter (${t}) with initial cursor position:`, r),
        this.pendingTransactionFilters.add(t),
        this.setFilterTimeout(t),
        (0,
        nt.hexStringFromIntNumber)(t)
    }
    uninstallFilter(t) {
        const r = (0,
        nt.intNumberFromHexString)(t);
        return console.info(`Uninstalling filter (${r})`),
        this.deleteFilter(r),
        !0
    }
    getFilterChanges(t) {
        const r = (0,
        nt.intNumberFromHexString)(t);
        return this.timeouts.has(r) && this.setFilterTimeout(r),
        this.logFilters.has(r) ? this.getLogFilterChanges(r) : this.blockFilters.has(r) ? this.getBlockFilterChanges(r) : this.pendingTransactionFilters.has(r) ? this.getPendingTransactionFilterChanges(r) : Promise.resolve(mi())
    }
    async getFilterLogs(t) {
        const r = (0,
        nt.intNumberFromHexString)(t)
          , n = this.logFilters.get(r);
        return n ? this.sendAsyncPromise(Object.assign(Object.assign({}, vr), {
            method: "eth_getLogs",
            params: [Ic(n)]
        })) : mi()
    }
    makeFilterId() {
        return (0,
        Yr.IntNumber)(++this.nextFilterId)
    }
    sendAsyncPromise(t) {
        return new Promise((r,n)=>{
            this.provider.sendAsync(t, (i,s)=>{
                if (i)
                    return n(i);
                if (Array.isArray(s) || s == null)
                    return n(new Error(`unexpected response received: ${JSON.stringify(s)}`));
                r(s)
            }
            )
        }
        )
    }
    deleteFilter(t) {
        console.info(`Deleting filter (${t})`),
        this.logFilters.delete(t),
        this.blockFilters.delete(t),
        this.pendingTransactionFilters.delete(t),
        this.cursors.delete(t),
        this.timeouts.delete(t)
    }
    async getLogFilterChanges(t) {
        const r = this.logFilters.get(t)
          , n = this.cursors.get(t);
        if (!n || !r)
            return mi();
        const i = await this.getCurrentBlockHeight()
          , s = r.toBlock === "latest" ? i : r.toBlock;
        if (n > i || n > Number(r.toBlock))
            return vi();
        console.info(`Fetching logs from ${n} to ${s} for filter ${t}`);
        const o = await this.sendAsyncPromise(Object.assign(Object.assign({}, vr), {
            method: "eth_getLogs",
            params: [Ic(Object.assign(Object.assign({}, r), {
                fromBlock: n,
                toBlock: s
            }))]
        }));
        if (Array.isArray(o.result)) {
            const c = o.result.map(u=>(0,
            nt.intNumberFromHexString)(u.blockNumber || "0x0"))
              , l = Math.max(...c);
            if (l && l > n) {
                const u = (0,
                Yr.IntNumber)(l + 1);
                console.info(`Moving cursor position for filter (${t}) from ${n} to ${u}`),
                this.cursors.set(t, u)
            }
        }
        return o
    }
    async getBlockFilterChanges(t) {
        const r = this.cursors.get(t);
        if (!r)
            return mi();
        const n = await this.getCurrentBlockHeight();
        if (r > n)
            return vi();
        console.info(`Fetching blocks from ${r} to ${n} for filter (${t})`);
        const i = (await Promise.all((0,
        nt.range)(r, n + 1).map(o=>this.getBlockHashByNumber((0,
        Yr.IntNumber)(o))))).filter(o=>!!o)
          , s = (0,
        Yr.IntNumber)(r + i.length);
        return console.info(`Moving cursor position for filter (${t}) from ${r} to ${s}`),
        this.cursors.set(t, s),
        Object.assign(Object.assign({}, vr), {
            result: i
        })
    }
    async getPendingTransactionFilterChanges(t) {
        return Promise.resolve(vi())
    }
    async setInitialCursorPosition(t, r) {
        const n = await this.getCurrentBlockHeight()
          , i = typeof r == "number" && r > n ? r : n;
        return this.cursors.set(t, i),
        i
    }
    setFilterTimeout(t) {
        const r = this.timeouts.get(t);
        r && window.clearTimeout(r);
        const n = window.setTimeout(()=>{
            console.info(`Filter (${t}) timed out`),
            this.deleteFilter(t)
        }
        , b1);
        this.timeouts.set(t, n)
    }
    async getCurrentBlockHeight() {
        const t = new Date;
        if (t.getTime() - this.lastFetchTimestamp.getTime() > this.REQUEST_THROTTLE_INTERVAL) {
            this.lastFetchTimestamp = t;
            const r = await this._getCurrentBlockHeight();
            this.currentBlockHeight = r,
            this.resolvers.forEach(n=>n(r)),
            this.resolvers = []
        }
        return this.currentBlockHeight ? this.currentBlockHeight : new Promise(r=>this.resolvers.push(r))
    }
    async _getCurrentBlockHeight() {
        const {result: t} = await this.sendAsyncPromise(Object.assign(Object.assign({}, vr), {
            method: "eth_blockNumber",
            params: []
        }));
        return (0,
        nt.intNumberFromHexString)((0,
        nt.ensureHexString)(t))
    }
    async getBlockHashByNumber(t) {
        const r = await this.sendAsyncPromise(Object.assign(Object.assign({}, vr), {
            method: "eth_getBlockByNumber",
            params: [(0,
            nt.hexStringFromIntNumber)(t), !1]
        }));
        return r.result && typeof r.result.hash == "string" ? (0,
        nt.ensureHexString)(r.result.hash) : null
    }
}
hn.FilterPolyfill = y1;
function qu(e) {
    return {
        fromBlock: xc(e.fromBlock),
        toBlock: xc(e.toBlock),
        addresses: e.address === void 0 ? null : Array.isArray(e.address) ? e.address : [e.address],
        topics: e.topics || []
    }
}
hn.filterFromParam = qu;
function Ic(e) {
    const t = {
        fromBlock: Ac(e.fromBlock),
        toBlock: Ac(e.toBlock),
        topics: e.topics
    };
    return e.addresses !== null && (t.address = e.addresses),
    t
}
function xc(e) {
    if (e === void 0 || e === "latest" || e === "pending")
        return "latest";
    if (e === "earliest")
        return (0,
        Yr.IntNumber)(0);
    if ((0,
    nt.isHexString)(e))
        return (0,
        nt.intNumberFromHexString)(e);
    throw new Error(`Invalid block option: ${String(e)}`)
}
function Ac(e) {
    return e === "latest" ? e : (0,
    nt.hexStringFromIntNumber)(e)
}
function mi() {
    return Object.assign(Object.assign({}, vr), {
        error: {
            code: -32e3,
            message: "filter not found"
        }
    })
}
function vi() {
    return Object.assign(Object.assign({}, vr), {
        result: []
    })
}
var gs = {}
  , zu = {}
  , _s = {}
  , sa = w1;
function w1(e) {
    e = e || {};
    var t = e.max || Number.MAX_SAFE_INTEGER
      , r = typeof e.start < "u" ? e.start : Math.floor(Math.random() * t);
    return function() {
        return r = r % t,
        r++
    }
}
const Tc = (e,t)=>function() {
    const r = t.promiseModule
      , n = new Array(arguments.length);
    for (let i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
    return new r((i,s)=>{
        t.errorFirst ? n.push(function(o, c) {
            if (t.multiArgs) {
                const l = new Array(arguments.length - 1);
                for (let u = 1; u < arguments.length; u++)
                    l[u - 1] = arguments[u];
                o ? (l.unshift(o),
                s(l)) : i(l)
            } else
                o ? s(o) : i(c)
        }) : n.push(function(o) {
            if (t.multiArgs) {
                const c = new Array(arguments.length - 1);
                for (let l = 0; l < arguments.length; l++)
                    c[l] = arguments[l];
                i(c)
            } else
                i(o)
        }),
        e.apply(this, n)
    }
    )
}
;
var E1 = (e,t)=>{
    t = Object.assign({
        exclude: [/.+(Sync|Stream)$/],
        errorFirst: !0,
        promiseModule: Promise
    }, t);
    const r = i=>{
        const s = o=>typeof o == "string" ? i === o : o.test(i);
        return t.include ? t.include.some(s) : !t.exclude.some(s)
    }
    ;
    let n;
    typeof e == "function" ? n = function() {
        return t.excludeMain ? e.apply(this, arguments) : Tc(e, t).apply(this, arguments)
    }
    : n = Object.create(Object.getPrototypeOf(e));
    for (const i in e) {
        const s = e[i];
        n[i] = typeof s == "function" && r(i) ? Tc(s, t) : s
    }
    return n
}
  , ri = {}
  , oa = {};
Object.defineProperty(oa, "__esModule", {
    value: !0
});
const S1 = Fn;
function Nc(e, t, r) {
    try {
        Reflect.apply(e, t, r)
    } catch (n) {
        setTimeout(()=>{
            throw n
        }
        )
    }
}
function R1(e) {
    const t = e.length
      , r = new Array(t);
    for (let n = 0; n < t; n += 1)
        r[n] = e[n];
    return r
}
let M1 = class extends S1.EventEmitter {
    emit(t, ...r) {
        let n = t === "error";
        const i = this._events;
        if (i !== void 0)
            n = n && i.error === void 0;
        else if (!n)
            return !1;
        if (n) {
            let o;
            if (r.length > 0 && ([o] = r),
            o instanceof Error)
                throw o;
            const c = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
            throw c.context = o,
            c
        }
        const s = i[t];
        if (s === void 0)
            return !1;
        if (typeof s == "function")
            Nc(s, this, r);
        else {
            const o = s.length
              , c = R1(s);
            for (let l = 0; l < o; l += 1)
                Nc(c[l], this, r)
        }
        return !0
    }
}
;
oa.default = M1;
var C1 = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(ri, "__esModule", {
    value: !0
});
ri.BaseBlockTracker = void 0;
const k1 = C1(oa)
  , I1 = 1e3
  , x1 = (e,t)=>e + t
  , Lc = ["sync", "latest"];
class A1 extends k1.default {
    constructor(t) {
        super(),
        this._blockResetDuration = t.blockResetDuration || 20 * I1,
        this._usePastBlocks = t.usePastBlocks || !1,
        this._currentBlock = null,
        this._isRunning = !1,
        this._onNewListener = this._onNewListener.bind(this),
        this._onRemoveListener = this._onRemoveListener.bind(this),
        this._resetCurrentBlock = this._resetCurrentBlock.bind(this),
        this._setupInternalEvents()
    }
    async destroy() {
        this._cancelBlockResetTimeout(),
        await this._maybeEnd(),
        super.removeAllListeners()
    }
    isRunning() {
        return this._isRunning
    }
    getCurrentBlock() {
        return this._currentBlock
    }
    async getLatestBlock() {
        return this._currentBlock ? this._currentBlock : await new Promise(r=>this.once("latest", r))
    }
    removeAllListeners(t) {
        return t ? super.removeAllListeners(t) : super.removeAllListeners(),
        this._setupInternalEvents(),
        this._onRemoveListener(),
        this
    }
    _setupInternalEvents() {
        this.removeListener("newListener", this._onNewListener),
        this.removeListener("removeListener", this._onRemoveListener),
        this.on("newListener", this._onNewListener),
        this.on("removeListener", this._onRemoveListener)
    }
    _onNewListener(t) {
        Lc.includes(t) && this._maybeStart()
    }
    _onRemoveListener() {
        this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
    }
    async _maybeStart() {
        this._isRunning || (this._isRunning = !0,
        this._cancelBlockResetTimeout(),
        await this._start(),
        this.emit("_started"))
    }
    async _maybeEnd() {
        this._isRunning && (this._isRunning = !1,
        this._setupBlockResetTimeout(),
        await this._end(),
        this.emit("_ended"))
    }
    _getBlockTrackerEventCount() {
        return Lc.map(t=>this.listenerCount(t)).reduce(x1)
    }
    _shouldUseNewBlock(t) {
        const r = this._currentBlock;
        if (!r)
            return !0;
        const n = Oc(t)
          , i = Oc(r);
        return this._usePastBlocks && n < i || n > i
    }
    _newPotentialLatest(t) {
        this._shouldUseNewBlock(t) && this._setCurrentBlock(t)
    }
    _setCurrentBlock(t) {
        const r = this._currentBlock;
        this._currentBlock = t,
        this.emit("latest", t),
        this.emit("sync", {
            oldBlock: r,
            newBlock: t
        })
    }
    _setupBlockResetTimeout() {
        this._cancelBlockResetTimeout(),
        this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration),
        this._blockResetTimeout.unref && this._blockResetTimeout.unref()
    }
    _cancelBlockResetTimeout() {
        this._blockResetTimeout && clearTimeout(this._blockResetTimeout)
    }
    _resetCurrentBlock() {
        this._currentBlock = null
    }
}
ri.BaseBlockTracker = A1;
function Oc(e) {
    return Number.parseInt(e, 16)
}
var Gu = {}
  , Ju = {}
  , tt = {};
class Zu extends TypeError {
    constructor(t, r) {
        let n;
        const {message: i, explanation: s, ...o} = t
          , {path: c} = t
          , l = c.length === 0 ? i : `At path: ${c.join(".")} -- ${i}`;
        super(s ?? l),
        s != null && (this.cause = l),
        Object.assign(this, o),
        this.name = this.constructor.name,
        this.failures = ()=>n ?? (n = [t, ...r()])
    }
}
function T1(e) {
    return mt(e) && typeof e[Symbol.iterator] == "function"
}
function mt(e) {
    return typeof e == "object" && e != null
}
function Pc(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype
}
function Ze(e) {
    return typeof e == "symbol" ? e.toString() : typeof e == "string" ? JSON.stringify(e) : `${e}`
}
function N1(e) {
    const {done: t, value: r} = e.next();
    return t ? void 0 : r
}
function L1(e, t, r, n) {
    if (e === !0)
        return;
    e === !1 ? e = {} : typeof e == "string" && (e = {
        message: e
    });
    const {path: i, branch: s} = t
      , {type: o} = r
      , {refinement: c, message: l=`Expected a value of type \`${o}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${Ze(n)}\``} = e;
    return {
        value: n,
        type: o,
        refinement: c,
        key: i[i.length - 1],
        path: i,
        branch: s,
        ...e,
        message: l
    }
}
function *Lo(e, t, r, n) {
    T1(e) || (e = [e]);
    for (const i of e) {
        const s = L1(i, t, r, n);
        s && (yield s)
    }
}
function *aa(e, t, r={}) {
    const {path: n=[], branch: i=[e], coerce: s=!1, mask: o=!1} = r
      , c = {
        path: n,
        branch: i
    };
    if (s && (e = t.coercer(e, c),
    o && t.type !== "type" && mt(t.schema) && mt(e) && !Array.isArray(e)))
        for (const u in e)
            t.schema[u] === void 0 && delete e[u];
    let l = "valid";
    for (const u of t.validator(e, c))
        u.explanation = r.message,
        l = "not_valid",
        yield[u, void 0];
    for (let[u,p,f] of t.entries(e, c)) {
        const _ = aa(p, f, {
            path: u === void 0 ? n : [...n, u],
            branch: u === void 0 ? i : [...i, p],
            coerce: s,
            mask: o,
            message: r.message
        });
        for (const R of _)
            R[0] ? (l = R[0].refinement != null ? "not_refined" : "not_valid",
            yield[R[0], void 0]) : s && (p = R[1],
            u === void 0 ? e = p : e instanceof Map ? e.set(u, p) : e instanceof Set ? e.add(p) : mt(e) && (p !== void 0 || u in e) && (e[u] = p))
    }
    if (l !== "not_valid")
        for (const u of t.refiner(e, c))
            u.explanation = r.message,
            l = "not_refined",
            yield[u, void 0];
    l === "valid" && (yield[void 0, e])
}
class ze {
    constructor(t) {
        const {type: r, schema: n, validator: i, refiner: s, coercer: o=l=>l, entries: c=function*() {}
        } = t;
        this.type = r,
        this.schema = n,
        this.entries = c,
        this.coercer = o,
        i ? this.validator = (l,u)=>{
            const p = i(l, u);
            return Lo(p, u, this, l)
        }
        : this.validator = ()=>[],
        s ? this.refiner = (l,u)=>{
            const p = s(l, u);
            return Lo(p, u, this, l)
        }
        : this.refiner = ()=>[]
    }
    assert(t, r) {
        return Ku(t, this, r)
    }
    create(t, r) {
        return Qu(t, this, r)
    }
    is(t) {
        return ca(t, this)
    }
    mask(t, r) {
        return Yu(t, this, r)
    }
    validate(t, r={}) {
        return En(t, this, r)
    }
}
function Ku(e, t, r) {
    const n = En(e, t, {
        message: r
    });
    if (n[0])
        throw n[0]
}
function Qu(e, t, r) {
    const n = En(e, t, {
        coerce: !0,
        message: r
    });
    if (n[0])
        throw n[0];
    return n[1]
}
function Yu(e, t, r) {
    const n = En(e, t, {
        coerce: !0,
        mask: !0,
        message: r
    });
    if (n[0])
        throw n[0];
    return n[1]
}
function ca(e, t) {
    return !En(e, t)[0]
}
function En(e, t, r={}) {
    const n = aa(e, t, r)
      , i = N1(n);
    return i[0] ? [new Zu(i[0],function*() {
        for (const o of n)
            o[0] && (yield o[0])
    }
    ), void 0] : [void 0, i[1]]
}
function O1(...e) {
    const t = e[0].type === "type"
      , r = e.map(i=>i.schema)
      , n = Object.assign({}, ...r);
    return t ? ii(n) : ni(n)
}
function at(e, t) {
    return new ze({
        type: e,
        schema: null,
        validator: t
    })
}
function P1(e, t) {
    return new ze({
        ...e,
        refiner: (r,n)=>r === void 0 || e.refiner(r, n),
        validator(r, n) {
            return r === void 0 ? !0 : (t(r, n),
            e.validator(r, n))
        }
    })
}
function $1(e) {
    return new ze({
        type: "dynamic",
        schema: null,
        *entries(t, r) {
            yield*e(t, r).entries(t, r)
        },
        validator(t, r) {
            return e(t, r).validator(t, r)
        },
        coercer(t, r) {
            return e(t, r).coercer(t, r)
        },
        refiner(t, r) {
            return e(t, r).refiner(t, r)
        }
    })
}
function B1(e) {
    let t;
    return new ze({
        type: "lazy",
        schema: null,
        *entries(r, n) {
            t ?? (t = e()),
            yield*t.entries(r, n)
        },
        validator(r, n) {
            return t ?? (t = e()),
            t.validator(r, n)
        },
        coercer(r, n) {
            return t ?? (t = e()),
            t.coercer(r, n)
        },
        refiner(r, n) {
            return t ?? (t = e()),
            t.refiner(r, n)
        }
    })
}
function D1(e, t) {
    const {schema: r} = e
      , n = {
        ...r
    };
    for (const i of t)
        delete n[i];
    switch (e.type) {
    case "type":
        return ii(n);
    default:
        return ni(n)
    }
}
function F1(e) {
    const t = e instanceof ze
      , r = t ? {
        ...e.schema
    } : {
        ...e
    };
    for (const n in r)
        r[n] = Xu(r[n]);
    return t && e.type === "type" ? ii(r) : ni(r)
}
function j1(e, t) {
    const {schema: r} = e
      , n = {};
    for (const i of t)
        n[i] = r[i];
    switch (e.type) {
    case "type":
        return ii(n);
    default:
        return ni(n)
    }
}
function H1(e, t) {
    return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."),
    at(e, t)
}
function U1() {
    return at("any", ()=>!0)
}
function W1(e) {
    return new ze({
        type: "array",
        schema: e,
        *entries(t) {
            if (e && Array.isArray(t))
                for (const [r,n] of t.entries())
                    yield[r, n, e]
        },
        coercer(t) {
            return Array.isArray(t) ? t.slice() : t
        },
        validator(t) {
            return Array.isArray(t) || `Expected an array value, but received: ${Ze(t)}`
        }
    })
}
function V1() {
    return at("bigint", e=>typeof e == "bigint")
}
function q1() {
    return at("boolean", e=>typeof e == "boolean")
}
function z1() {
    return at("date", e=>e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${Ze(e)}`)
}
function G1(e) {
    const t = {}
      , r = e.map(n=>Ze(n)).join();
    for (const n of e)
        t[n] = n;
    return new ze({
        type: "enums",
        schema: t,
        validator(n) {
            return e.includes(n) || `Expected one of \`${r}\`, but received: ${Ze(n)}`
        }
    })
}
function J1() {
    return at("func", e=>typeof e == "function" || `Expected a function, but received: ${Ze(e)}`)
}
function Z1(e) {
    return at("instance", t=>t instanceof e || `Expected a \`${e.name}\` instance, but received: ${Ze(t)}`)
}
function K1() {
    return at("integer", e=>typeof e == "number" && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${Ze(e)}`)
}
function Q1(e) {
    return new ze({
        type: "intersection",
        schema: null,
        *entries(t, r) {
            for (const n of e)
                yield*n.entries(t, r)
        },
        *validator(t, r) {
            for (const n of e)
                yield*n.validator(t, r)
        },
        *refiner(t, r) {
            for (const n of e)
                yield*n.refiner(t, r)
        }
    })
}
function Y1(e) {
    const t = Ze(e)
      , r = typeof e;
    return new ze({
        type: "literal",
        schema: r === "string" || r === "number" || r === "boolean" ? e : null,
        validator(n) {
            return n === e || `Expected the literal \`${t}\`, but received: ${Ze(n)}`
        }
    })
}
function X1(e, t) {
    return new ze({
        type: "map",
        schema: null,
        *entries(r) {
            if (e && t && r instanceof Map)
                for (const [n,i] of r.entries())
                    yield[n, n, e],
                    yield[n, i, t]
        },
        coercer(r) {
            return r instanceof Map ? new Map(r) : r
        },
        validator(r) {
            return r instanceof Map || `Expected a \`Map\` object, but received: ${Ze(r)}`
        }
    })
}
function la() {
    return at("never", ()=>!1)
}
function eg(e) {
    return new ze({
        ...e,
        validator: (t,r)=>t === null || e.validator(t, r),
        refiner: (t,r)=>t === null || e.refiner(t, r)
    })
}
function tg() {
    return at("number", e=>typeof e == "number" && !isNaN(e) || `Expected a number, but received: ${Ze(e)}`)
}
function ni(e) {
    const t = e ? Object.keys(e) : []
      , r = la();
    return new ze({
        type: "object",
        schema: e || null,
        *entries(n) {
            if (e && mt(n)) {
                const i = new Set(Object.keys(n));
                for (const s of t)
                    i.delete(s),
                    yield[s, n[s], e[s]];
                for (const s of i)
                    yield[s, n[s], r]
            }
        },
        validator(n) {
            return mt(n) || `Expected an object, but received: ${Ze(n)}`
        },
        coercer(n) {
            return mt(n) ? {
                ...n
            } : n
        }
    })
}
function Xu(e) {
    return new ze({
        ...e,
        validator: (t,r)=>t === void 0 || e.validator(t, r),
        refiner: (t,r)=>t === void 0 || e.refiner(t, r)
    })
}
    function rg(e, t) {
    return new ze({
        type: "record",
        schema: null,
        *entries(r) {
            if (mt(r))
                for (const n in r) {
                    const i = r[n];
                    yield[n, n, e],
                    yield[n, i, t]
                }
        },
        validator(r) {
            return mt(r) || `Expected an object, but received: ${Ze(r)}`
        }
    })
}
function ng() {
    return at("regexp", e=>e instanceof RegExp)
}
function ig(e) {
    return new ze({
        type: "set",
        schema: null,
        *entries(t) {
            if (e && t instanceof Set)
                for (const r of t)
                    yield[r, r, e]
        },
        coercer(t) {
            return t instanceof Set ? new Set(t) : t
        },
        validator(t) {
            return t instanceof Set || `Expected a \`Set\` object, but received: ${Ze(t)}`
        }
    })
}
function eh() {
    return at("string", e=>typeof e == "string" || `Expected a string, but received: ${Ze(e)}`)
}
function sg(e) {
    const t = la();
    return new ze({
        type: "tuple",
        schema: null,
        *entries(r) {
            if (Array.isArray(r)) {
                const n = Math.max(e.length, r.length);
                for (let i = 0; i < n; i++)
                    yield[i, r[i], e[i] || t]
            }
        },
        validator(r) {
            return Array.isArray(r) || `Expected an array, but received: ${Ze(r)}`
        }
    })
}
function ii(e) {
    const t = Object.keys(e);
    return new ze({
        type: "type",
        schema: e,
        *entries(r) {
            if (mt(r))
                for (const n of t)
                    yield[n, r[n], e[n]]
        },
        validator(r) {
            return mt(r) || `Expected an object, but received: ${Ze(r)}`
        },
        coercer(r) {
            return mt(r) ? {
                ...r
            } : r
        }
    })
}
function og(e) {
    const t = e.map(r=>r.type).join(" | ");
    return new ze({
        type: "union",
        schema: null,
        coercer(r) {
            for (const n of e) {
                const [i,s] = n.validate(r, {
                    coerce: !0
                });
                if (!i)
                    return s
            }
            return r
        },
        validator(r, n) {
            const i = [];
            for (const s of e) {
                const [...o] = aa(r, s, n)
                  , [c] = o;
                if (c[0])
                    for (const [l] of o)
                        l && i.push(l);
                else
                    return []
            }
            return [`Expected the value to satisfy a union of \`${t}\`, but received: ${Ze(r)}`, ...i]
        }
    })
}
function th() {
    return at("unknown", ()=>!0)
}
function ua(e, t, r) {
    return new ze({
        ...e,
        coercer: (n,i)=>ca(n, t) ? e.coercer(r(n, i), i) : e.coercer(n, i)
    })
}
function ag(e, t, r={}) {
    return ua(e, th(), n=>{
        const i = typeof t == "function" ? t() : t;
        if (n === void 0)
            return i;
        if (!r.strict && Pc(n) && Pc(i)) {
            const s = {
                ...n
            };
            let o = !1;
            for (const c in i)
                s[c] === void 0 && (s[c] = i[c],
                o = !0);
            if (o)
                return s
        }
        return n
    }
    )
}
function cg(e) {
    return ua(e, eh(), t=>t.trim())
}
function lg(e) {
    return Nr(e, "empty", t=>{
        const r = rh(t);
        return r === 0 || `Expected an empty ${e.type} but received one with a size of \`${r}\``
    }
    )
}
function rh(e) {
    return e instanceof Map || e instanceof Set ? e.size : e.length
}
function ug(e, t, r={}) {
    const {exclusive: n} = r;
    return Nr(e, "max", i=>n ? i < t : i <= t || `Expected a ${e.type} less than ${n ? "" : "or equal to "}${t} but received \`${i}\``)
}
function hg(e, t, r={}) {
    const {exclusive: n} = r;
    return Nr(e, "min", i=>n ? i > t : i >= t || `Expected a ${e.type} greater than ${n ? "" : "or equal to "}${t} but received \`${i}\``)
}
function dg(e) {
    return Nr(e, "nonempty", t=>rh(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`)
}
function fg(e, t) {
    return Nr(e, "pattern", r=>t.test(r) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`)
}
function pg(e, t, r=t) {
    const n = `Expected a ${e.type}`
      , i = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
    return Nr(e, "size", s=>{
        if (typeof s == "number" || s instanceof Date)
            return t <= s && s <= r || `${n} ${i} but received \`${s}\``;
        if (s instanceof Map || s instanceof Set) {
            const {size: o} = s;
            return t <= o && o <= r || `${n} with a size ${i} but received one with a size of \`${o}\``
        } else {
            const {length: o} = s;
            return t <= o && o <= r || `${n} with a length ${i} but received one with a length of \`${o}\``
        }
    }
    )
}
function Nr(e, t, r) {
    return new ze({
        ...e,
        *refiner(n, i) {
            yield*e.refiner(n, i);
            const s = r(n, i)
              , o = Lo(s, i, e, n);
            for (const c of o)
                yield{
                    ...c,
                    refinement: t
                }
        }
    })
}
const gg = Object.freeze(Object.defineProperty({
    __proto__: null,
    Struct: ze,
    StructError: Zu,
    any: U1,
    array: W1,
    assert: Ku,
    assign: O1,
    bigint: V1,
    boolean: q1,
    coerce: ua,
    create: Qu,
    date: z1,
    defaulted: ag,
    define: at,
    deprecated: P1,
    dynamic: $1,
    empty: lg,
    enums: G1,
    func: J1,
    instance: Z1,
    integer: K1,
    intersection: Q1,
    is: ca,
    lazy: B1,
    literal: Y1,
    map: X1,
    mask: Yu,
    max: ug,
    min: hg,
    never: la,
    nonempty: dg,
    nullable: eg,
    number: tg,
    object: ni,
    omit: D1,
    optional: Xu,
    partial: F1,
    pattern: fg,
    pick: j1,
    record: rg,
    refine: Nr,
    regexp: ng,
    set: ig,
    size: pg,
    string: eh,
    struct: H1,
    trimmed: cg,
    tuple: sg,
    type: ii,
    union: og,
    unknown: th,
    validate: En
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Lr = gn(gg);
Object.defineProperty(tt, "__esModule", {
    value: !0
});
tt.assertExhaustive = tt.assertStruct = tt.assert = tt.AssertionError = void 0;
const _g = Lr;
function mg(e) {
    return typeof e == "object" && e !== null && "message"in e
}
function vg(e) {
    var t, r;
    return typeof ((r = (t = e == null ? void 0 : e.prototype) === null || t === void 0 ? void 0 : t.constructor) === null || r === void 0 ? void 0 : r.name) == "string"
}
function bg(e) {
    const t = mg(e) ? e.message : String(e);
    return t.endsWith(".") ? t.slice(0, -1) : t
}
function nh(e, t) {
    return vg(e) ? new e({
        message: t
    }) : e({
        message: t
    })
}
class ha extends Error {
    constructor(t) {
        super(t.message),
        this.code = "ERR_ASSERTION"
    }
}
tt.AssertionError = ha;
function yg(e, t="Assertion failed.", r=ha) {
    if (!e)
        throw t instanceof Error ? t : nh(r, t)
}
tt.assert = yg;
function wg(e, t, r="Assertion failed", n=ha) {
    try {
        (0,
        _g.assert)(e, t)
    } catch (i) {
        throw nh(n, `${r}: ${bg(i)}.`)
    }
}
tt.assertStruct = wg;
function Eg(e) {
    throw new Error("Invalid branch reached. Should be detected during compilation.")
}
tt.assertExhaustive = Eg;
var si = {};
Object.defineProperty(si, "__esModule", {
    value: !0
});
si.base64 = void 0;
const Sg = Lr
  , Rg = tt
  , Mg = (e,t={})=>{
    var r, n;
    const i = (r = t.paddingRequired) !== null && r !== void 0 ? r : !1
      , s = (n = t.characterSet) !== null && n !== void 0 ? n : "base64";
    let o;
    s === "base64" ? o = String.raw`[A-Za-z0-9+\/]` : ((0,
    Rg.assert)(s === "base64url"),
    o = String.raw`[-_A-Za-z0-9]`);
    let c;
    return i ? c = new RegExp(`^(?:${o}{4})*(?:${o}{3}=|${o}{2}==)?$`,"u") : c = new RegExp(`^(?:${o}{4})*(?:${o}{2,3}|${o}{3}=|${o}{2}==)?$`,"u"),
    (0,
    Sg.pattern)(e, c)
}
;
si.base64 = Mg;
var ae = {}
  , oi = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.remove0x = e.add0x = e.assertIsStrictHexString = e.assertIsHexString = e.isStrictHexString = e.isHexString = e.StrictHexStruct = e.HexStruct = void 0;
    const t = Lr
      , r = tt;
    e.HexStruct = (0,
    t.pattern)((0,
    t.string)(), /^(?:0x)?[0-9a-f]+$/iu),
    e.StrictHexStruct = (0,
    t.pattern)((0,
    t.string)(), /^0x[0-9a-f]+$/iu);
    function n(u) {
        return (0,
        t.is)(u, e.HexStruct)
    }
    e.isHexString = n;
    function i(u) {
        return (0,
        t.is)(u, e.StrictHexStruct)
    }
    e.isStrictHexString = i;
    function s(u) {
        (0,
        r.assert)(n(u), "Value must be a hexadecimal string.")
    }
    e.assertIsHexString = s;
    function o(u) {
        (0,
        r.assert)(i(u), 'Value must be a hexadecimal string, starting with "0x".')
    }
    e.assertIsStrictHexString = o;
    function c(u) {
        return u.startsWith("0x") ? u : u.startsWith("0X") ? `0x${u.substring(2)}` : `0x${u}`
    }
    e.add0x = c;
    function l(u) {
        return u.startsWith("0x") || u.startsWith("0X") ? u.substring(2) : u
    }
    e.remove0x = l
}
)(oi);
Object.defineProperty(ae, "__esModule", {
    value: !0
});
ae.createDataView = ae.concatBytes = ae.valueToBytes = ae.stringToBytes = ae.numberToBytes = ae.signedBigIntToBytes = ae.bigIntToBytes = ae.hexToBytes = ae.bytesToString = ae.bytesToNumber = ae.bytesToSignedBigInt = ae.bytesToBigInt = ae.bytesToHex = ae.assertIsBytes = ae.isBytes = void 0;
const ht = tt
  , Oo = oi
  , $c = 48
  , Bc = 58
  , Dc = 87;
function Cg() {
    const e = [];
    return ()=>{
        if (e.length === 0)
            for (let t = 0; t < 256; t++)
                e.push(t.toString(16).padStart(2, "0"));
        return e
    }
}
const kg = Cg();
function da(e) {
    return e instanceof Uint8Array
}
ae.isBytes = da;
function Sn(e) {
    (0,
    ht.assert)(da(e), "Value must be a Uint8Array.")
}
ae.assertIsBytes = Sn;
function ih(e) {
    if (Sn(e),
    e.length === 0)
        return "0x";
    const t = kg()
      , r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
        r[n] = t[e[n]];
    return (0,
    Oo.add0x)(r.join(""))
}
ae.bytesToHex = ih;
function sh(e) {
    Sn(e);
    const t = ih(e);
    return BigInt(t)
}
ae.bytesToBigInt = sh;
function Ig(e) {
    Sn(e);
    let t = BigInt(0);
    for (const r of e)
        t = (t << BigInt(8)) + BigInt(r);
    return BigInt.asIntN(e.length * 8, t)
}
ae.bytesToSignedBigInt = Ig;
function xg(e) {
    Sn(e);
    const t = sh(e);
    return (0,
    ht.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."),
    Number(t)
}
ae.bytesToNumber = xg;
function Ag(e) {
    return Sn(e),
    new TextDecoder().decode(e)
}
ae.bytesToString = Ag;
function ms(e) {
    var t;
    if (((t = e == null ? void 0 : e.toLowerCase) === null || t === void 0 ? void 0 : t.call(e)) === "0x")
        return new Uint8Array;
    (0,
    Oo.assertIsHexString)(e);
    const r = (0,
    Oo.remove0x)(e).toLowerCase()
      , n = r.length % 2 === 0 ? r : `0${r}`
      , i = new Uint8Array(n.length / 2);
    for (let s = 0; s < i.length; s++) {
        const o = n.charCodeAt(s * 2)
          , c = n.charCodeAt(s * 2 + 1)
          , l = o - (o < Bc ? $c : Dc)
          , u = c - (c < Bc ? $c : Dc);
        i[s] = l * 16 + u
    }
    return i
}
ae.hexToBytes = ms;
function oh(e) {
    (0,
    ht.assert)(typeof e == "bigint", "Value must be a bigint."),
    (0,
    ht.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
    const t = e.toString(16);
    return ms(t)
}
ae.bigIntToBytes = oh;
function Tg(e, t) {
    (0,
    ht.assert)(t > 0);
    const r = e >> BigInt(31);
    return !((~e & r) + (e & ~r) >> BigInt(t * 8 + -1))
}
function Ng(e, t) {
    (0,
    ht.assert)(typeof e == "bigint", "Value must be a bigint."),
    (0,
    ht.assert)(typeof t == "number", "Byte length must be a number."),
    (0,
    ht.assert)(t > 0, "Byte length must be greater than 0."),
    (0,
    ht.assert)(Tg(e, t), "Byte length is too small to represent the given value.");
    let r = e;
    const n = new Uint8Array(t);
    for (let i = 0; i < n.length; i++)
        n[i] = Number(BigInt.asUintN(8, r)),
        r >>= BigInt(8);
    return n.reverse()
}
ae.signedBigIntToBytes = Ng;
function ah(e) {
    (0,
    ht.assert)(typeof e == "number", "Value must be a number."),
    (0,
    ht.assert)(e >= 0, "Value must be a non-negative number."),
    (0,
    ht.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
    const t = e.toString(16);
    return ms(t)
}
ae.numberToBytes = ah;
function ch(e) {
    return (0,
    ht.assert)(typeof e == "string", "Value must be a string."),
    new TextEncoder().encode(e)
}
ae.stringToBytes = ch;
function lh(e) {
    if (typeof e == "bigint")
        return oh(e);
    if (typeof e == "number")
        return ah(e);
    if (typeof e == "string")
        return e.startsWith("0x") ? ms(e) : ch(e);
    if (da(e))
        return e;
    throw new TypeError(`Unsupported value type: "${typeof e}".`)
}
ae.valueToBytes = lh;
function Lg(e) {
    const t = new Array(e.length);
    let r = 0;
    for (let i = 0; i < e.length; i++) {
        const s = lh(e[i]);
        t[i] = s,
        r += s.length
    }
    const n = new Uint8Array(r);
    for (let i = 0, s = 0; i < t.length; i++)
        n.set(t[i], s),
        s += t[i].length;
    return n
}
ae.concatBytes = Lg;
function Og(e) {
    if (typeof Buffer < "u" && e instanceof Buffer) {
        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        return new DataView(t)
    }
    return new DataView(e.buffer,e.byteOffset,e.byteLength)
}
ae.createDataView = Og;
var vs = {};
Object.defineProperty(vs, "__esModule", {
    value: !0
});
vs.ChecksumStruct = void 0;
const Fc = Lr
  , Pg = si;
vs.ChecksumStruct = (0,
Fc.size)((0,
Pg.base64)((0,
Fc.string)(), {
    paddingRequired: !0
}), 44, 44);
var Lt = {};
Object.defineProperty(Lt, "__esModule", {
    value: !0
});
Lt.createHex = Lt.createBytes = Lt.createBigInt = Lt.createNumber = void 0;
const qe = Lr
  , $g = tt
  , uh = ae
  , bs = oi
  , hh = (0,
qe.union)([(0,
qe.number)(), (0,
qe.bigint)(), (0,
qe.string)(), bs.StrictHexStruct])
  , Bg = (0,
qe.coerce)((0,
qe.number)(), hh, Number)
  , Dg = (0,
qe.coerce)((0,
qe.bigint)(), hh, BigInt);
(0,
qe.union)([bs.StrictHexStruct, (0,
qe.instance)(Uint8Array)]);
const Fg = (0,
qe.coerce)((0,
qe.instance)(Uint8Array), (0,
qe.union)([bs.StrictHexStruct]), uh.hexToBytes)
  , jg = (0,
qe.coerce)(bs.StrictHexStruct, (0,
qe.instance)(Uint8Array), uh.bytesToHex);
function Hg(e) {
    try {
        const t = (0,
        qe.create)(e, Bg);
        return (0,
        $g.assert)(Number.isFinite(t), `Expected a number-like value, got "${e}".`),
        t
    } catch (t) {
        throw t instanceof qe.StructError ? new Error(`Expected a number-like value, got "${e}".`) : t
    }
}
Lt.createNumber = Hg;
function Ug(e) {
    try {
        return (0,
        qe.create)(e, Dg)
    } catch (t) {
        throw t instanceof qe.StructError ? new Error(`Expected a number-like value, got "${String(t.value)}".`) : t
    }
}
Lt.createBigInt = Ug;
function Wg(e) {
    if (typeof e == "string" && e.toLowerCase() === "0x")
        return new Uint8Array;
    try {
        return (0,
        qe.create)(e, Fg)
    } catch (t) {
        throw t instanceof qe.StructError ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`) : t
    }
}
Lt.createBytes = Wg;
function Vg(e) {
    if (e instanceof Uint8Array && e.length === 0 || typeof e == "string" && e.toLowerCase() === "0x")
        return "0x";
    try {
        return (0,
        qe.create)(e, jg)
    } catch (t) {
        throw t instanceof qe.StructError ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`) : t
    }
}
Lt.createHex = Vg;
var dn = {}, dh = J && J.__classPrivateFieldSet || function(e, t, r, n, i) {
    if (n === "m")
        throw new TypeError("Private method is not writable");
    if (n === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !i : !t.has(e))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r),
    r
}
, it = J && J.__classPrivateFieldGet || function(e, t, r, n) {
    if (r === "a" && !n)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !n : !t.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e)
}
, bt, kt;
Object.defineProperty(dn, "__esModule", {
    value: !0
});
dn.FrozenSet = dn.FrozenMap = void 0;
class fa {
    constructor(t) {
        bt.set(this, void 0),
        dh(this, bt, new Map(t), "f"),
        Object.freeze(this)
    }
    get size() {
        return it(this, bt, "f").size
    }
    [(bt = new WeakMap,
    Symbol.iterator)]() {
        return it(this, bt, "f")[Symbol.iterator]()
    }
    entries() {
        return it(this, bt, "f").entries()
    }
    forEach(t, r) {
        return it(this, bt, "f").forEach((n,i,s)=>t.call(r, n, i, this))
    }
    get(t) {
        return it(this, bt, "f").get(t)
    }
    has(t) {
        return it(this, bt, "f").has(t)
    }
    keys() {
        return it(this, bt, "f").keys()
    }
    values() {
        return it(this, bt, "f").values()
    }
    toString() {
        return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([t,r])=>`${String(t)} => ${String(r)}`).join(", ")} ` : ""}}`
    }
}
dn.FrozenMap = fa;
class pa {
    constructor(t) {
        kt.set(this, void 0),
        dh(this, kt, new Set(t), "f"),
        Object.freeze(this)
    }
    get size() {
        return it(this, kt, "f").size
    }
    [(kt = new WeakMap,
    Symbol.iterator)]() {
        return it(this, kt, "f")[Symbol.iterator]()
    }
    entries() {
        return it(this, kt, "f").entries()
    }
    forEach(t, r) {
        return it(this, kt, "f").forEach((n,i,s)=>t.call(r, n, i, this))
    }
    has(t) {
        return it(this, kt, "f").has(t)
    }
    keys() {
        return it(this, kt, "f").keys()
    }
    values() {
        return it(this, kt, "f").values()
    }
    toString() {
        return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map(t=>String(t)).join(", ")} ` : ""}}`
    }
}
dn.FrozenSet = pa;
Object.freeze(fa);
Object.freeze(fa.prototype);
Object.freeze(pa);
Object.freeze(pa.prototype);
var fh = {};
Object.defineProperty(fh, "__esModule", {
    value: !0
});
var ph = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getJsonRpcIdValidator = e.assertIsJsonRpcError = e.isJsonRpcError = e.assertIsJsonRpcFailure = e.isJsonRpcFailure = e.assertIsJsonRpcSuccess = e.isJsonRpcSuccess = e.assertIsJsonRpcResponse = e.isJsonRpcResponse = e.assertIsPendingJsonRpcResponse = e.isPendingJsonRpcResponse = e.JsonRpcResponseStruct = e.JsonRpcFailureStruct = e.JsonRpcSuccessStruct = e.PendingJsonRpcResponseStruct = e.assertIsJsonRpcRequest = e.isJsonRpcRequest = e.assertIsJsonRpcNotification = e.isJsonRpcNotification = e.JsonRpcNotificationStruct = e.JsonRpcRequestStruct = e.JsonRpcParamsStruct = e.JsonRpcErrorStruct = e.JsonRpcIdStruct = e.JsonRpcVersionStruct = e.jsonrpc2 = e.getJsonSize = e.isValidJson = e.JsonStruct = e.UnsafeJsonStruct = void 0;
    const t = Lr
      , r = tt
      , n = ()=>(0,
    t.define)("finite number", O=>(0,
    t.is)(O, (0,
    t.number)()) && Number.isFinite(O));
    e.UnsafeJsonStruct = (0,
    t.union)([(0,
    t.literal)(null), (0,
    t.boolean)(), n(), (0,
    t.string)(), (0,
    t.array)((0,
    t.lazy)(()=>e.UnsafeJsonStruct)), (0,
    t.record)((0,
    t.string)(), (0,
    t.lazy)(()=>e.UnsafeJsonStruct))]),
    e.JsonStruct = (0,
    t.define)("Json", (O,D)=>{
        function G(V, H) {
            const Q = [...H.validator(V, D)];
            return Q.length > 0 ? Q : !0
        }
        try {
            const V = G(O, e.UnsafeJsonStruct);
            return V !== !0 ? V : G(JSON.parse(JSON.stringify(O)), e.UnsafeJsonStruct)
        } catch (V) {
            return V instanceof RangeError ? "Circular reference detected" : !1
        }
    }
    );
    function i(O) {
        return (0,
        t.is)(O, e.JsonStruct)
    }
    e.isValidJson = i;
    function s(O) {
        (0,
        r.assertStruct)(O, e.JsonStruct, "Invalid JSON value");
        const D = JSON.stringify(O);
        return new TextEncoder().encode(D).byteLength
    }
    e.getJsonSize = s,
    e.jsonrpc2 = "2.0",
    e.JsonRpcVersionStruct = (0,
    t.literal)(e.jsonrpc2),
    e.JsonRpcIdStruct = (0,
    t.nullable)((0,
    t.union)([(0,
    t.number)(), (0,
    t.string)()])),
    e.JsonRpcErrorStruct = (0,
    t.object)({
        code: (0,
        t.integer)(),
        message: (0,
        t.string)(),
        data: (0,
        t.optional)(e.JsonStruct),
        stack: (0,
        t.optional)((0,
        t.string)())
    }),
    e.JsonRpcParamsStruct = (0,
    t.optional)((0,
    t.union)([(0,
    t.record)((0,
    t.string)(), e.JsonStruct), (0,
    t.array)(e.JsonStruct)])),
    e.JsonRpcRequestStruct = (0,
    t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        method: (0,
        t.string)(),
        params: e.JsonRpcParamsStruct
    }),
    e.JsonRpcNotificationStruct = (0,
    t.omit)(e.JsonRpcRequestStruct, ["id"]);
    function o(O) {
        return (0,
        t.is)(O, e.JsonRpcNotificationStruct)
    }
    e.isJsonRpcNotification = o;
    function c(O, D) {
        (0,
        r.assertStruct)(O, e.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", D)
    }
    e.assertIsJsonRpcNotification = c;
    function l(O) {
        return (0,
        t.is)(O, e.JsonRpcRequestStruct)
    }
    e.isJsonRpcRequest = l;
    function u(O, D) {
        (0,
        r.assertStruct)(O, e.JsonRpcRequestStruct, "Invalid JSON-RPC request", D)
    }
    e.assertIsJsonRpcRequest = u,
    e.PendingJsonRpcResponseStruct = (0,
    t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        result: (0,
        t.optional)((0,
        t.unknown)()),
        error: (0,
        t.optional)(e.JsonRpcErrorStruct)
    }),
    e.JsonRpcSuccessStruct = (0,
    t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        result: e.JsonStruct
    }),
    e.JsonRpcFailureStruct = (0,
    t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        error: e.JsonRpcErrorStruct
    }),
    e.JsonRpcResponseStruct = (0,
    t.union)([e.JsonRpcSuccessStruct, e.JsonRpcFailureStruct]);
    function p(O) {
        return (0,
        t.is)(O, e.PendingJsonRpcResponseStruct)
    }
    e.isPendingJsonRpcResponse = p;
    function f(O, D) {
        (0,
        r.assertStruct)(O, e.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", D)
    }
    e.assertIsPendingJsonRpcResponse = f;
    function _(O) {
        return (0,
        t.is)(O, e.JsonRpcResponseStruct)
    }
    e.isJsonRpcResponse = _;
    function R(O, D) {
        (0,
        r.assertStruct)(O, e.JsonRpcResponseStruct, "Invalid JSON-RPC response", D)
    }
    e.assertIsJsonRpcResponse = R;
    function x(O) {
        return (0,
        t.is)(O, e.JsonRpcSuccessStruct)
    }
    e.isJsonRpcSuccess = x;
    function P(O, D) {
        (0,
        r.assertStruct)(O, e.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", D)
    }
    e.assertIsJsonRpcSuccess = P;
    function L(O) {
        return (0,
        t.is)(O, e.JsonRpcFailureStruct)
    }
    e.isJsonRpcFailure = L;
    function M(O, D) {
        (0,
        r.assertStruct)(O, e.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", D)
    }
    e.assertIsJsonRpcFailure = M;
    function k(O) {
        return (0,
        t.is)(O, e.JsonRpcErrorStruct)
    }
    e.isJsonRpcError = k;
    function N(O, D) {
        (0,
        r.assertStruct)(O, e.JsonRpcErrorStruct, "Invalid JSON-RPC error", D)
    }
    e.assertIsJsonRpcError = N;
    function $(O) {
        const {permitEmptyString: D, permitFractions: G, permitNull: V} = Object.assign({
            permitEmptyString: !0,
            permitFractions: !1,
            permitNull: !0
        }, O);
        return X=>!!(typeof X == "number" && (G || Number.isInteger(X)) || typeof X == "string" && (D || X.length > 0) || V && X === null)
    }
    e.getJsonRpcIdValidator = $
}
)(ph);
var gh = {};
Object.defineProperty(gh, "__esModule", {
    value: !0
});
var fn = {}, Po = {
    exports: {}
}, oo, jc;
function qg() {
    if (jc)
        return oo;
    jc = 1;
    var e = 1e3
      , t = e * 60
      , r = t * 60
      , n = r * 24
      , i = n * 7
      , s = n * 365.25;
    oo = function(p, f) {
        f = f || {};
        var _ = typeof p;
        if (_ === "string" && p.length > 0)
            return o(p);
        if (_ === "number" && isFinite(p))
            return f.long ? l(p) : c(p);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(p))
    }
    ;
    function o(p) {
        if (p = String(p),
        !(p.length > 100)) {
            var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(p);
            if (f) {
                var _ = parseFloat(f[1])
                  , R = (f[2] || "ms").toLowerCase();
                switch (R) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return _ * s;
                case "weeks":
                case "week":
                case "w":
                    return _ * i;
                case "days":
                case "day":
                case "d":
                    return _ * n;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return _ * r;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return _ * t;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return _ * e;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return _;
                default:
                    return
                }
            }
        }
    }
    function c(p) {
        var f = Math.abs(p);
        return f >= n ? Math.round(p / n) + "d" : f >= r ? Math.round(p / r) + "h" : f >= t ? Math.round(p / t) + "m" : f >= e ? Math.round(p / e) + "s" : p + "ms"
    }
    function l(p) {
        var f = Math.abs(p);
        return f >= n ? u(p, f, n, "day") : f >= r ? u(p, f, r, "hour") : f >= t ? u(p, f, t, "minute") : f >= e ? u(p, f, e, "second") : p + " ms"
    }
    function u(p, f, _, R) {
        var x = f >= _ * 1.5;
        return Math.round(p / _) + " " + R + (x ? "s" : "")
    }
    return oo
}
function zg(e) {
    r.debug = r,
    r.default = r,
    r.coerce = l,
    r.disable = s,
    r.enable = i,
    r.enabled = o,
    r.humanize = qg(),
    r.destroy = u,
    Object.keys(e).forEach(p=>{
        r[p] = e[p]
    }
    ),
    r.names = [],
    r.skips = [],
    r.formatters = {};
    function t(p) {
        let f = 0;
        for (let _ = 0; _ < p.length; _++)
            f = (f << 5) - f + p.charCodeAt(_),
            f |= 0;
        return r.colors[Math.abs(f) % r.colors.length]
    }
    r.selectColor = t;
    function r(p) {
        let f, _ = null, R, x;
        function P(...L) {
            if (!P.enabled)
                return;
            const M = P
              , k = Number(new Date)
              , N = k - (f || k);
            M.diff = N,
            M.prev = f,
            M.curr = k,
            f = k,
            L[0] = r.coerce(L[0]),
            typeof L[0] != "string" && L.unshift("%O");
            let $ = 0;
            L[0] = L[0].replace(/%([a-zA-Z%])/g, (D,G)=>{
                if (D === "%%")
                    return "%";
                $++;
                const V = r.formatters[G];
                if (typeof V == "function") {
                    const H = L[$];
                    D = V.call(M, H),
                    L.splice($, 1),
                    $--
                }
                return D
            }
            ),
            r.formatArgs.call(M, L),
            (M.log || r.log).apply(M, L)
        }
        return P.namespace = p,
        P.useColors = r.useColors(),
        P.color = r.selectColor(p),
        P.extend = n,
        P.destroy = r.destroy,
        Object.defineProperty(P, "enabled", {
            enumerable: !0,
            configurable: !1,
            get: ()=>_ !== null ? _ : (R !== r.namespaces && (R = r.namespaces,
            x = r.enabled(p)),
            x),
            set: L=>{
                _ = L
            }
        }),
        typeof r.init == "function" && r.init(P),
        P
    }
    function n(p, f) {
        const _ = r(this.namespace + (typeof f > "u" ? ":" : f) + p);
        return _.log = this.log,
        _
    }
    function i(p) {
        r.save(p),
        r.namespaces = p,
        r.names = [],
        r.skips = [];
        let f;
        const _ = (typeof p == "string" ? p : "").split(/[\s,]+/)
          , R = _.length;
        for (f = 0; f < R; f++)
            _[f] && (p = _[f].replace(/\*/g, ".*?"),
            p[0] === "-" ? r.skips.push(new RegExp("^" + p.slice(1) + "$")) : r.names.push(new RegExp("^" + p + "$")))
    }
    function s() {
        const p = [...r.names.map(c), ...r.skips.map(c).map(f=>"-" + f)].join(",");
        return r.enable(""),
        p
    }
    function o(p) {
        if (p[p.length - 1] === "*")
            return !0;
        let f, _;
        for (f = 0,
        _ = r.skips.length; f < _; f++)
            if (r.skips[f].test(p))
                return !1;
        for (f = 0,
        _ = r.names.length; f < _; f++)
            if (r.names[f].test(p))
                return !0;
        return !1
    }
    function c(p) {
        return p.toString().substring(2, p.toString().length - 2).replace(/\.\*\?$/, "*")
    }
    function l(p) {
        return p instanceof Error ? p.stack || p.message : p
    }
    function u() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
    }
    return r.enable(r.load()),
    r
}
var Gg = zg;
(function(e, t) {
    var r = {};
    t.formatArgs = i,
    t.save = s,
    t.load = o,
    t.useColors = n,
    t.storage = c(),
    t.destroy = (()=>{
        let u = !1;
        return ()=>{
            u || (u = !0,
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    }
    )(),
    t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function n() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }
    function i(u) {
        if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
        !this.useColors)
            return;
        const p = "color: " + this.color;
        u.splice(1, 0, p, "color: inherit");
        let f = 0
          , _ = 0;
        u[0].replace(/%[a-zA-Z%]/g, R=>{
            R !== "%%" && (f++,
            R === "%c" && (_ = f))
        }
        ),
        u.splice(_, 0, p)
    }
    t.log = console.debug || console.log || (()=>{}
    );
    function s(u) {
        try {
            u ? t.storage.setItem("debug", u) : t.storage.removeItem("debug")
        } catch {}
    }
    function o() {
        let u;
        try {
            u = t.storage.getItem("debug")
        } catch {}
        return !u && typeof process < "u" && "env"in process && (u = r.DEBUG),
        u
    }
    function c() {
        try {
            return localStorage
        } catch {}
    }
    e.exports = Gg(t);
    const {formatters: l} = e.exports;
    l.j = function(u) {
        try {
            return JSON.stringify(u)
        } catch (p) {
            return "[UnexpectedJSONParseError]: " + p.message
        }
    }
}
)(Po, Po.exports);
var Jg = Po.exports
  , Zg = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(fn, "__esModule", {
    value: !0
});
fn.createModuleLogger = fn.createProjectLogger = void 0;
const Kg = Zg(Jg)
  , Qg = (0,
Kg.default)("metamask");
function Yg(e) {
    return Qg.extend(e)
}
fn.createProjectLogger = Yg;
function Xg(e, t) {
    return e.extend(t)
}
fn.createModuleLogger = Xg;
var _h = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.calculateNumberSize = e.calculateStringSize = e.isASCII = e.isPlainObject = e.ESCAPE_CHARACTERS_REGEXP = e.JsonSize = e.hasProperty = e.isObject = e.isNullOrUndefined = e.isNonEmptyArray = void 0;
    function t(u) {
        return Array.isArray(u) && u.length > 0
    }
    e.isNonEmptyArray = t;
    function r(u) {
        return u == null
    }
    e.isNullOrUndefined = r;
    function n(u) {
        return !!u && typeof u == "object" && !Array.isArray(u)
    }
    e.isObject = n;
    const i = (u,p)=>Object.hasOwnProperty.call(u, p);
    e.hasProperty = i,
    function(u) {
        u[u.Null = 4] = "Null",
        u[u.Comma = 1] = "Comma",
        u[u.Wrapper = 1] = "Wrapper",
        u[u.True = 4] = "True",
        u[u.False = 5] = "False",
        u[u.Quote = 1] = "Quote",
        u[u.Colon = 1] = "Colon",
        u[u.Date = 24] = "Date"
    }(e.JsonSize || (e.JsonSize = {})),
    e.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
    function s(u) {
        if (typeof u != "object" || u === null)
            return !1;
        try {
            let p = u;
            for (; Object.getPrototypeOf(p) !== null; )
                p = Object.getPrototypeOf(p);
            return Object.getPrototypeOf(u) === p
        } catch {
            return !1
        }
    }
    e.isPlainObject = s;
    function o(u) {
        return u.charCodeAt(0) <= 127
    }
    e.isASCII = o;
    function c(u) {
        var p;
        return u.split("").reduce((_,R)=>o(R) ? _ + 1 : _ + 2, 0) + ((p = u.match(e.ESCAPE_CHARACTERS_REGEXP)) !== null && p !== void 0 ? p : []).length
    }
    e.calculateStringSize = c;
    function l(u) {
        return u.toString().length
    }
    e.calculateNumberSize = l
}
)(_h);
var Ot = {};
Object.defineProperty(Ot, "__esModule", {
    value: !0
});
Ot.hexToBigInt = Ot.hexToNumber = Ot.bigIntToHex = Ot.numberToHex = void 0;
const rn = tt
  , Bn = oi
  , e_ = e=>((0,
rn.assert)(typeof e == "number", "Value must be a number."),
(0,
rn.assert)(e >= 0, "Value must be a non-negative number."),
(0,
rn.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."),
(0,
Bn.add0x)(e.toString(16)));
Ot.numberToHex = e_;
const t_ = e=>((0,
rn.assert)(typeof e == "bigint", "Value must be a bigint."),
(0,
rn.assert)(e >= 0, "Value must be a non-negative bigint."),
(0,
Bn.add0x)(e.toString(16)));
Ot.bigIntToHex = t_;
const r_ = e=>{
    (0,
    Bn.assertIsHexString)(e);
    const t = parseInt(e, 16);
    return (0,
    rn.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."),
    t
}
;
Ot.hexToNumber = r_;
const n_ = e=>((0,
Bn.assertIsHexString)(e),
BigInt((0,
Bn.add0x)(e)));
Ot.hexToBigInt = n_;
var mh = {};
Object.defineProperty(mh, "__esModule", {
    value: !0
});
var vh = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.timeSince = e.inMilliseconds = e.Duration = void 0,
    function(s) {
        s[s.Millisecond = 1] = "Millisecond",
        s[s.Second = 1e3] = "Second",
        s[s.Minute = 6e4] = "Minute",
        s[s.Hour = 36e5] = "Hour",
        s[s.Day = 864e5] = "Day",
        s[s.Week = 6048e5] = "Week",
        s[s.Year = 31536e6] = "Year"
    }(e.Duration || (e.Duration = {}));
    const t = s=>Number.isInteger(s) && s >= 0
      , r = (s,o)=>{
        if (!t(s))
            throw new Error(`"${o}" must be a non-negative integer. Received: "${s}".`)
    }
    ;
    function n(s, o) {
        return r(s, "count"),
        s * o
    }
    e.inMilliseconds = n;
    function i(s) {
        return r(s, "timestamp"),
        Date.now() - s
    }
    e.timeSince = i
}
)(vh);
var bh = {};
Object.defineProperty(bh, "__esModule", {
    value: !0
});
var yh = {}
  , $o = {
    exports: {}
};
const i_ = "2.0.0"
  , wh = 256
  , s_ = Number.MAX_SAFE_INTEGER || 9007199254740991
  , o_ = 16
  , a_ = wh - 6
  , c_ = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
var ys = {
    MAX_LENGTH: wh,
    MAX_SAFE_COMPONENT_LENGTH: o_,
    MAX_SAFE_BUILD_LENGTH: a_,
    MAX_SAFE_INTEGER: s_,
    RELEASE_TYPES: c_,
    SEMVER_SPEC_VERSION: i_,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
}
  , ao = {};
const l_ = typeof process == "object" && ao && ao.NODE_DEBUG && /\bsemver\b/i.test(ao.NODE_DEBUG) ? (...e)=>console.error("SEMVER", ...e) : ()=>{}
;
var ws = l_;
(function(e, t) {
    const {MAX_SAFE_COMPONENT_LENGTH: r, MAX_SAFE_BUILD_LENGTH: n, MAX_LENGTH: i} = ys
      , s = ws;
    t = e.exports = {};
    const o = t.re = []
      , c = t.safeRe = []
      , l = t.src = []
      , u = t.t = {};
    let p = 0;
    const f = "[a-zA-Z0-9-]"
      , _ = [["\\s", 1], ["\\d", i], [f, n]]
      , R = P=>{
        for (const [L,M] of _)
            P = P.split(`${L}*`).join(`${L}{0,${M}}`).split(`${L}+`).join(`${L}{1,${M}}`);
        return P
    }
      , x = (P,L,M)=>{
        const k = R(L)
          , N = p++;
        s(P, N, L),
        u[P] = N,
        l[N] = L,
        o[N] = new RegExp(L,M ? "g" : void 0),
        c[N] = new RegExp(k,M ? "g" : void 0)
    }
    ;
    x("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
    x("NUMERICIDENTIFIERLOOSE", "\\d+"),
    x("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`),
    x("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`),
    x("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`),
    x("PRERELEASEIDENTIFIER", `(?:${l[u.NUMERICIDENTIFIER]}|${l[u.NONNUMERICIDENTIFIER]})`),
    x("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NUMERICIDENTIFIERLOOSE]}|${l[u.NONNUMERICIDENTIFIER]})`),
    x("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`),
    x("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`),
    x("BUILDIDENTIFIER", `${f}+`),
    x("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`),
    x("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`),
    x("FULL", `^${l[u.FULLPLAIN]}$`),
    x("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`),
    x("LOOSE", `^${l[u.LOOSEPLAIN]}$`),
    x("GTLT", "((?:<|>)?=?)"),
    x("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
    x("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`),
    x("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`),
    x("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`),
    x("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`),
    x("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`),
    x("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),
    x("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`),
    x("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`),
    x("COERCERTL", l[u.COERCE], !0),
    x("COERCERTLFULL", l[u.COERCEFULL], !0),
    x("LONETILDE", "(?:~>?)"),
    x("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0),
    t.tildeTrimReplace = "$1~",
    x("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`),
    x("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`),
    x("LONECARET", "(?:\\^)"),
    x("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0),
    t.caretTrimReplace = "$1^",
    x("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`),
    x("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`),
    x("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`),
    x("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`),
    x("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0),
    t.comparatorTrimReplace = "$1$2$3",
    x("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`),
    x("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`),
    x("STAR", "(<|>)?=?\\s*\\*"),
    x("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
    x("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
}
)($o, $o.exports);
var ai = $o.exports;
const u_ = Object.freeze({
    loose: !0
})
  , h_ = Object.freeze({})
  , d_ = e=>e ? typeof e != "object" ? u_ : e : h_;
var ga = d_;
const Hc = /^[0-9]+$/
  , Eh = (e,t)=>{
    const r = Hc.test(e)
      , n = Hc.test(t);
    return r && n && (e = +e,
    t = +t),
    e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
}
  , f_ = (e,t)=>Eh(t, e);
var Sh = {
    compareIdentifiers: Eh,
    rcompareIdentifiers: f_
};
const bi = ws
  , {MAX_LENGTH: Uc, MAX_SAFE_INTEGER: yi} = ys
  , {safeRe: Wc, t: Vc} = ai
  , p_ = ga
  , {compareIdentifiers: Zr} = Sh;
let g_ = class It {
    constructor(t, r) {
        if (r = p_(r),
        t instanceof It) {
            if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease)
                return t;
            t = t.version
        } else if (typeof t != "string")
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
        if (t.length > Uc)
            throw new TypeError(`version is longer than ${Uc} characters`);
        bi("SemVer", t, r),
        this.options = r,
        this.loose = !!r.loose,
        this.includePrerelease = !!r.includePrerelease;
        const n = t.trim().match(r.loose ? Wc[Vc.LOOSE] : Wc[Vc.FULL]);
        if (!n)
            throw new TypeError(`Invalid Version: ${t}`);
        if (this.raw = t,
        this.major = +n[1],
        this.minor = +n[2],
        this.patch = +n[3],
        this.major > yi || this.major < 0)
            throw new TypeError("Invalid major version");
        if (this.minor > yi || this.minor < 0)
            throw new TypeError("Invalid minor version");
        if (this.patch > yi || this.patch < 0)
            throw new TypeError("Invalid patch version");
        n[4] ? this.prerelease = n[4].split(".").map(i=>{
            if (/^[0-9]+$/.test(i)) {
                const s = +i;
                if (s >= 0 && s < yi)
                    return s
            }
            return i
        }
        ) : this.prerelease = [],
        this.build = n[5] ? n[5].split(".") : [],
        this.format()
    }
    format() {
        return this.version = `${this.major}.${this.minor}.${this.patch}`,
        this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
        this.version
    }
    toString() {
        return this.version
    }
    compare(t) {
        if (bi("SemVer.compare", this.version, this.options, t),
        !(t instanceof It)) {
            if (typeof t == "string" && t === this.version)
                return 0;
            t = new It(t,this.options)
        }
        return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t)
    }
    compareMain(t) {
        return t instanceof It || (t = new It(t,this.options)),
        Zr(this.major, t.major) || Zr(this.minor, t.minor) || Zr(this.patch, t.patch)
    }
    comparePre(t) {
        if (t instanceof It || (t = new It(t,this.options)),
        this.prerelease.length && !t.prerelease.length)
            return -1;
        if (!this.prerelease.length && t.prerelease.length)
            return 1;
        if (!this.prerelease.length && !t.prerelease.length)
            return 0;
        let r = 0;
        do {
            const n = this.prerelease[r]
              , i = t.prerelease[r];
            if (bi("prerelease compare", r, n, i),
            n === void 0 && i === void 0)
                return 0;
            if (i === void 0)
                return 1;
            if (n === void 0)
                return -1;
            if (n === i)
                continue;
            return Zr(n, i)
        } while (++r)
    }
    compareBuild(t) {
        t instanceof It || (t = new It(t,this.options));
        let r = 0;
        do {
            const n = this.build[r]
              , i = t.build[r];
            if (bi("prerelease compare", r, n, i),
            n === void 0 && i === void 0)
                return 0;
            if (i === void 0)
                return 1;
            if (n === void 0)
                return -1;
            if (n === i)
                continue;
            return Zr(n, i)
        } while (++r)
    }
    inc(t, r, n) {
        switch (t) {
        case "premajor":
            this.prerelease.length = 0,
            this.patch = 0,
            this.minor = 0,
            this.major++,
            this.inc("pre", r, n);
            break;
        case "preminor":
            this.prerelease.length = 0,
            this.patch = 0,
            this.minor++,
            this.inc("pre", r, n);
            break;
        case "prepatch":
            this.prerelease.length = 0,
            this.inc("patch", r, n),
            this.inc("pre", r, n);
            break;
        case "prerelease":
            this.prerelease.length === 0 && this.inc("patch", r, n),
            this.inc("pre", r, n);
            break;
        case "major":
            (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++,
            this.minor = 0,
            this.patch = 0,
            this.prerelease = [];
            break;
        case "minor":
            (this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
            this.patch = 0,
            this.prerelease = [];
            break;
        case "patch":
            this.prerelease.length === 0 && this.patch++,
            this.prerelease = [];
            break;
        case "pre":
            {
                const i = Number(n) ? 1 : 0;
                if (!r && n === !1)
                    throw new Error("invalid increment argument: identifier is empty");
                if (this.prerelease.length === 0)
                    this.prerelease = [i];
                else {
                    let s = this.prerelease.length;
                    for (; --s >= 0; )
                        typeof this.prerelease[s] == "number" && (this.prerelease[s]++,
                        s = -2);
                    if (s === -1) {
                        if (r === this.prerelease.join(".") && n === !1)
                            throw new Error("invalid increment argument: identifier already exists");
                        this.prerelease.push(i)
                    }
                }
                if (r) {
                    let s = [r, i];
                    n === !1 && (s = [r]),
                    Zr(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = s) : this.prerelease = s
                }
                break
            }
        default:
            throw new Error(`invalid increment argument: ${t}`)
        }
        return this.raw = this.format(),
        this.build.length && (this.raw += `+${this.build.join(".")}`),
        this
    }
}
;
var st = g_;
const qc = st
  , __ = (e,t,r=!1)=>{
    if (e instanceof qc)
        return e;
    try {
        return new qc(e,t)
    } catch (n) {
        if (!r)
            return null;
        throw n
    }
}
;
var Rn = __;
const m_ = Rn
  , v_ = (e,t)=>{
    const r = m_(e, t);
    return r ? r.version : null
}
;
var b_ = v_;
const y_ = Rn
  , w_ = (e,t)=>{
    const r = y_(e.trim().replace(/^[=v]+/, ""), t);
    return r ? r.version : null
}
;
var E_ = w_;
const zc = st
  , S_ = (e,t,r,n,i)=>{
    typeof r == "string" && (i = n,
    n = r,
    r = void 0);
    try {
        return new zc(e instanceof zc ? e.version : e,r).inc(t, n, i).version
    } catch {
        return null
    }
}
;
var R_ = S_;
const Gc = Rn
  , M_ = (e,t)=>{
    const r = Gc(e, null, !0)
      , n = Gc(t, null, !0)
      , i = r.compare(n);
    if (i === 0)
        return null;
    const s = i > 0
      , o = s ? r : n
      , c = s ? n : r
      , l = !!o.prerelease.length;
    if (!!c.prerelease.length && !l)
        return !c.patch && !c.minor ? "major" : o.patch ? "patch" : o.minor ? "minor" : "major";
    const p = l ? "pre" : "";
    return r.major !== n.major ? p + "major" : r.minor !== n.minor ? p + "minor" : r.patch !== n.patch ? p + "patch" : "prerelease"
}
;
var C_ = M_;
const k_ = st
  , I_ = (e,t)=>new k_(e,t).major;
var x_ = I_;
const A_ = st
  , T_ = (e,t)=>new A_(e,t).minor;
var N_ = T_;
const L_ = st
  , O_ = (e,t)=>new L_(e,t).patch;
var P_ = O_;
const $_ = Rn
  , B_ = (e,t)=>{
    const r = $_(e, t);
    return r && r.prerelease.length ? r.prerelease : null
}
;
var D_ = B_;
const Jc = st
  , F_ = (e,t,r)=>new Jc(e,r).compare(new Jc(t,r));
var St = F_;
const j_ = St
  , H_ = (e,t,r)=>j_(t, e, r);
var U_ = H_;
const W_ = St
  , V_ = (e,t)=>W_(e, t, !0);
var q_ = V_;
const Zc = st
  , z_ = (e,t,r)=>{
    const n = new Zc(e,r)
      , i = new Zc(t,r);
    return n.compare(i) || n.compareBuild(i)
}
;
var _a = z_;
const G_ = _a
  , J_ = (e,t)=>e.sort((r,n)=>G_(r, n, t));
var Z_ = J_;
const K_ = _a
  , Q_ = (e,t)=>e.sort((r,n)=>K_(n, r, t));
var Y_ = Q_;
const X_ = St
  , em = (e,t,r)=>X_(e, t, r) > 0;
var Es = em;
const tm = St
  , rm = (e,t,r)=>tm(e, t, r) < 0;
var ma = rm;
const nm = St
  , im = (e,t,r)=>nm(e, t, r) === 0;
var Rh = im;
const sm = St
  , om = (e,t,r)=>sm(e, t, r) !== 0;
var Mh = om;
const am = St
  , cm = (e,t,r)=>am(e, t, r) >= 0;
var va = cm;
const lm = St
  , um = (e,t,r)=>lm(e, t, r) <= 0;
var ba = um;
const hm = Rh
  , dm = Mh
  , fm = Es
  , pm = va
  , gm = ma
  , _m = ba
  , mm = (e,t,r,n)=>{
    switch (t) {
    case "===":
        return typeof e == "object" && (e = e.version),
        typeof r == "object" && (r = r.version),
        e === r;
    case "!==":
        return typeof e == "object" && (e = e.version),
        typeof r == "object" && (r = r.version),
        e !== r;
    case "":
    case "=":
    case "==":
        return hm(e, r, n);
    case "!=":
        return dm(e, r, n);
    case ">":
        return fm(e, r, n);
    case ">=":
        return pm(e, r, n);
    case "<":
        return gm(e, r, n);
    case "<=":
        return _m(e, r, n);
    default:
        throw new TypeError(`Invalid operator: ${t}`)
    }
}
;
var Ch = mm;
const vm = st
  , bm = Rn
  , {safeRe: wi, t: Ei} = ai
  , ym = (e,t)=>{
    if (e instanceof vm)
        return e;
    if (typeof e == "number" && (e = String(e)),
    typeof e != "string")
        return null;
    t = t || {};
    let r = null;
    if (!t.rtl)
        r = e.match(t.includePrerelease ? wi[Ei.COERCEFULL] : wi[Ei.COERCE]);
    else {
        const l = t.includePrerelease ? wi[Ei.COERCERTLFULL] : wi[Ei.COERCERTL];
        let u;
        for (; (u = l.exec(e)) && (!r || r.index + r[0].length !== e.length); )
            (!r || u.index + u[0].length !== r.index + r[0].length) && (r = u),
            l.lastIndex = u.index + u[1].length + u[2].length;
        l.lastIndex = -1
    }
    if (r === null)
        return null;
    const n = r[2]
      , i = r[3] || "0"
      , s = r[4] || "0"
      , o = t.includePrerelease && r[5] ? `-${r[5]}` : ""
      , c = t.includePrerelease && r[6] ? `+${r[6]}` : "";
    return bm(`${n}.${i}.${s}${o}${c}`, t)
}
;
var wm = ym, co, Kc;
function Em() {
    return Kc || (Kc = 1,
    co = function(e) {
        e.prototype[Symbol.iterator] = function*() {
            for (let t = this.head; t; t = t.next)
                yield t.value
        }
    }
    ),
    co
}
var Sm = ce;
ce.Node = Cr;
ce.create = ce;
function ce(e) {
    var t = this;
    if (t instanceof ce || (t = new ce),
    t.tail = null,
    t.head = null,
    t.length = 0,
    e && typeof e.forEach == "function")
        e.forEach(function(i) {
            t.push(i)
        });
    else if (arguments.length > 0)
        for (var r = 0, n = arguments.length; r < n; r++)
            t.push(arguments[r]);
    return t
}
ce.prototype.removeNode = function(e) {
    if (e.list !== this)
        throw new Error("removing node which does not belong to this list");
    var t = e.next
      , r = e.prev;
    return t && (t.prev = r),
    r && (r.next = t),
    e === this.head && (this.head = t),
    e === this.tail && (this.tail = r),
    e.list.length--,
    e.next = null,
    e.prev = null,
    e.list = null,
    t
}
;
ce.prototype.unshiftNode = function(e) {
    if (e !== this.head) {
        e.list && e.list.removeNode(e);
        var t = this.head;
        e.list = this,
        e.next = t,
        t && (t.prev = e),
        this.head = e,
        this.tail || (this.tail = e),
        this.length++
    }
}
;
ce.prototype.pushNode = function(e) {
    if (e !== this.tail) {
        e.list && e.list.removeNode(e);
        var t = this.tail;
        e.list = this,
        e.prev = t,
        t && (t.next = e),
        this.tail = e,
        this.head || (this.head = e),
        this.length++
    }
}
;
ce.prototype.push = function() {
    for (var e = 0, t = arguments.length; e < t; e++)
        Mm(this, arguments[e]);
    return this.length
}
;
ce.prototype.unshift = function() {
    for (var e = 0, t = arguments.length; e < t; e++)
        Cm(this, arguments[e]);
    return this.length
}
;
ce.prototype.pop = function() {
    if (this.tail) {
        var e = this.tail.value;
        return this.tail = this.tail.prev,
        this.tail ? this.tail.next = null : this.head = null,
        this.length--,
        e
    }
}
;
ce.prototype.shift = function() {
    if (this.head) {
        var e = this.head.value;
        return this.head = this.head.next,
        this.head ? this.head.prev = null : this.tail = null,
        this.length--,
        e
    }
}
;
ce.prototype.forEach = function(e, t) {
    t = t || this;
    for (var r = this.head, n = 0; r !== null; n++)
        e.call(t, r.value, n, this),
        r = r.next
}
;
ce.prototype.forEachReverse = function(e, t) {
    t = t || this;
    for (var r = this.tail, n = this.length - 1; r !== null; n--)
        e.call(t, r.value, n, this),
        r = r.prev
}
;
ce.prototype.get = function(e) {
    for (var t = 0, r = this.head; r !== null && t < e; t++)
        r = r.next;
    if (t === e && r !== null)
        return r.value
}
;
ce.prototype.getReverse = function(e) {
    for (var t = 0, r = this.tail; r !== null && t < e; t++)
        r = r.prev;
    if (t === e && r !== null)
        return r.value
}
;
ce.prototype.map = function(e, t) {
    t = t || this;
    for (var r = new ce, n = this.head; n !== null; )
        r.push(e.call(t, n.value, this)),
        n = n.next;
    return r
}
;
ce.prototype.mapReverse = function(e, t) {
    t = t || this;
    for (var r = new ce, n = this.tail; n !== null; )
        r.push(e.call(t, n.value, this)),
        n = n.prev;
    return r
}
;
ce.prototype.reduce = function(e, t) {
    var r, n = this.head;
    if (arguments.length > 1)
        r = t;
    else if (this.head)
        n = this.head.next,
        r = this.head.value;
    else
        throw new TypeError("Reduce of empty list with no initial value");
    for (var i = 0; n !== null; i++)
        r = e(r, n.value, i),
        n = n.next;
    return r
}
;
ce.prototype.reduceReverse = function(e, t) {
    var r, n = this.tail;
    if (arguments.length > 1)
        r = t;
    else if (this.tail)
        n = this.tail.prev,
        r = this.tail.value;
    else
        throw new TypeError("Reduce of empty list with no initial value");
    for (var i = this.length - 1; n !== null; i--)
        r = e(r, n.value, i),
        n = n.prev;
    return r
}
;
ce.prototype.toArray = function() {
    for (var e = new Array(this.length), t = 0, r = this.head; r !== null; t++)
        e[t] = r.value,
        r = r.next;
    return e
}
;
ce.prototype.toArrayReverse = function() {
    for (var e = new Array(this.length), t = 0, r = this.tail; r !== null; t++)
        e[t] = r.value,
        r = r.prev;
    return e
}
;
ce.prototype.slice = function(e, t) {
    t = t || this.length,
    t < 0 && (t += this.length),
    e = e || 0,
    e < 0 && (e += this.length);
    var r = new ce;
    if (t < e || t < 0)
        return r;
    e < 0 && (e = 0),
    t > this.length && (t = this.length);
    for (var n = 0, i = this.head; i !== null && n < e; n++)
        i = i.next;
    for (; i !== null && n < t; n++,
    i = i.next)
        r.push(i.value);
    return r
}
;
ce.prototype.sliceReverse = function(e, t) {
    t = t || this.length,
    t < 0 && (t += this.length),
    e = e || 0,
    e < 0 && (e += this.length);
    var r = new ce;
    if (t < e || t < 0)
        return r;
    e < 0 && (e = 0),
    t > this.length && (t = this.length);
    for (var n = this.length, i = this.tail; i !== null && n > t; n--)
        i = i.prev;
    for (; i !== null && n > e; n--,
    i = i.prev)
        r.push(i.value);
    return r
}
;
ce.prototype.splice = function(e, t, ...r) {
    e > this.length && (e = this.length - 1),
    e < 0 && (e = this.length + e);
    for (var n = 0, i = this.head; i !== null && n < e; n++)
        i = i.next;
    for (var s = [], n = 0; i && n < t; n++)
        s.push(i.value),
        i = this.removeNode(i);
    i === null && (i = this.tail),
    i !== this.head && i !== this.tail && (i = i.prev);
    for (var n = 0; n < r.length; n++)
        i = Rm(this, i, r[n]);
    return s
}
;
ce.prototype.reverse = function() {
    for (var e = this.head, t = this.tail, r = e; r !== null; r = r.prev) {
        var n = r.prev;
        r.prev = r.next,
        r.next = n
    }
    return this.head = t,
    this.tail = e,
    this
}
;
function Rm(e, t, r) {
    var n = t === e.head ? new Cr(r,null,t,e) : new Cr(r,t,t.next,e);
    return n.next === null && (e.tail = n),
    n.prev === null && (e.head = n),
    e.length++,
    n
}
function Mm(e, t) {
    e.tail = new Cr(t,e.tail,null,e),
    e.head || (e.head = e.tail),
    e.length++
}
function Cm(e, t) {
    e.head = new Cr(t,null,e.head,e),
    e.tail || (e.tail = e.head),
    e.length++
}
function Cr(e, t, r, n) {
    if (!(this instanceof Cr))
        return new Cr(e,t,r,n);
    this.list = n,
    this.value = e,
    t ? (t.next = this,
    this.prev = t) : this.prev = null,
    r ? (r.prev = this,
    this.next = r) : this.next = null
}
try {
    Em()(ce)
} catch {}
const km = Sm
  , br = Symbol("max")
  , Ft = Symbol("length")
  , Kr = Symbol("lengthCalculator")
  , Ln = Symbol("allowStale")
  , wr = Symbol("maxAge")
  , $t = Symbol("dispose")
  , Qc = Symbol("noDisposeOnSet")
  , Qe = Symbol("lruList")
  , wt = Symbol("cache")
  , kh = Symbol("updateAgeOnGet")
  , lo = ()=>1;
class Im {
    constructor(t) {
        if (typeof t == "number" && (t = {
            max: t
        }),
        t || (t = {}),
        t.max && (typeof t.max != "number" || t.max < 0))
            throw new TypeError("max must be a non-negative number");
        this[br] = t.max || 1 / 0;
        const r = t.length || lo;
        if (this[Kr] = typeof r != "function" ? lo : r,
        this[Ln] = t.stale || !1,
        t.maxAge && typeof t.maxAge != "number")
            throw new TypeError("maxAge must be a number");
        this[wr] = t.maxAge || 0,
        this[$t] = t.dispose,
        this[Qc] = t.noDisposeOnSet || !1,
        this[kh] = t.updateAgeOnGet || !1,
        this.reset()
    }
    set max(t) {
        if (typeof t != "number" || t < 0)
            throw new TypeError("max must be a non-negative number");
        this[br] = t || 1 / 0,
        Cn(this)
    }
    get max() {
        return this[br]
    }
    set allowStale(t) {
        this[Ln] = !!t
    }
    get allowStale() {
        return this[Ln]
    }
    set maxAge(t) {
        if (typeof t != "number")
            throw new TypeError("maxAge must be a non-negative number");
        this[wr] = t,
        Cn(this)
    }
    get maxAge() {
        return this[wr]
    }
    set lengthCalculator(t) {
        typeof t != "function" && (t = lo),
        t !== this[Kr] && (this[Kr] = t,
        this[Ft] = 0,
        this[Qe].forEach(r=>{
            r.length = this[Kr](r.value, r.key),
            this[Ft] += r.length
        }
        )),
        Cn(this)
    }
    get lengthCalculator() {
        return this[Kr]
    }
    get length() {
        return this[Ft]
    }
    get itemCount() {
        return this[Qe].length
    }
    rforEach(t, r) {
        r = r || this;
        for (let n = this[Qe].tail; n !== null; ) {
            const i = n.prev;
            Yc(this, t, n, r),
            n = i
        }
    }
    forEach(t, r) {
        r = r || this;
        for (let n = this[Qe].head; n !== null; ) {
            const i = n.next;
            Yc(this, t, n, r),
            n = i
        }
    }
    keys() {
        return this[Qe].toArray().map(t=>t.key)
    }
    values() {
        return this[Qe].toArray().map(t=>t.value)
    }
    reset() {
        this[$t] && this[Qe] && this[Qe].length && this[Qe].forEach(t=>this[$t](t.key, t.value)),
        this[wt] = new Map,
        this[Qe] = new km,
        this[Ft] = 0
    }
    dump() {
        return this[Qe].map(t=>Ni(this, t) ? !1 : {
            k: t.key,
            v: t.value,
            e: t.now + (t.maxAge || 0)
        }).toArray().filter(t=>t)
    }
    dumpLru() {
        return this[Qe]
    }
    set(t, r, n) {
        if (n = n || this[wr],
        n && typeof n != "number")
            throw new TypeError("maxAge must be a number");
        const i = n ? Date.now() : 0
          , s = this[Kr](r, t);
        if (this[wt].has(t)) {
            if (s > this[br])
                return nn(this, this[wt].get(t)),
                !1;
            const l = this[wt].get(t).value;
            return this[$t] && (this[Qc] || this[$t](t, l.value)),
            l.now = i,
            l.maxAge = n,
            l.value = r,
            this[Ft] += s - l.length,
            l.length = s,
            this.get(t),
            Cn(this),
            !0
        }
        const o = new xm(t,r,s,i,n);
        return o.length > this[br] ? (this[$t] && this[$t](t, r),
        !1) : (this[Ft] += o.length,
        this[Qe].unshift(o),
        this[wt].set(t, this[Qe].head),
        Cn(this),
        !0)
    }
    has(t) {
        if (!this[wt].has(t))
            return !1;
        const r = this[wt].get(t).value;
        return !Ni(this, r)
    }
    get(t) {
        return uo(this, t, !0)
    }
    peek(t) {
        return uo(this, t, !1)
    }
    pop() {
        const t = this[Qe].tail;
        return t ? (nn(this, t),
        t.value) : null
    }
    del(t) {
        nn(this, this[wt].get(t))
    }
    load(t) {
        this.reset();
        const r = Date.now();
        for (let n = t.length - 1; n >= 0; n--) {
            const i = t[n]
              , s = i.e || 0;
            if (s === 0)
                this.set(i.k, i.v);
            else {
                const o = s - r;
                o > 0 && this.set(i.k, i.v, o)
            }
        }
    }
    prune() {
        this[wt].forEach((t,r)=>uo(this, r, !1))
    }
}
const uo = (e,t,r)=>{
    const n = e[wt].get(t);
    if (n) {
        const i = n.value;
        if (Ni(e, i)) {
            if (nn(e, n),
            !e[Ln])
                return
        } else
            r && (e[kh] && (n.value.now = Date.now()),
            e[Qe].unshiftNode(n));
        return i.value
    }
}
  , Ni = (e,t)=>{
    if (!t || !t.maxAge && !e[wr])
        return !1;
    const r = Date.now() - t.now;
    return t.maxAge ? r > t.maxAge : e[wr] && r > e[wr]
}
  , Cn = e=>{
    if (e[Ft] > e[br])
        for (let t = e[Qe].tail; e[Ft] > e[br] && t !== null; ) {
            const r = t.prev;
            nn(e, t),
            t = r
        }
}
  , nn = (e,t)=>{
    if (t) {
        const r = t.value;
        e[$t] && e[$t](r.key, r.value),
        e[Ft] -= r.length,
        e[wt].delete(r.key),
        e[Qe].removeNode(t)
    }
}
;
class xm {
    constructor(t, r, n, i, s) {
        this.key = t,
        this.value = r,
        this.length = n,
        this.now = i,
        this.maxAge = s || 0
    }
}
const Yc = (e,t,r,n)=>{
    let i = r.value;
    Ni(e, i) && (nn(e, r),
    e[Ln] || (i = void 0)),
    i && t.call(n, i.value, i.key, e)
}
;
var Am = Im, ho, Xc;
function Rt() {
    if (Xc)
        return ho;
    Xc = 1;
    class e {
        constructor(a, d) {
            if (d = n(d),
            a instanceof e)
                return a.loose === !!d.loose && a.includePrerelease === !!d.includePrerelease ? a : new e(a.raw,d);
            if (a instanceof i)
                return this.raw = a.value,
                this.set = [[a]],
                this.format(),
                this;
            if (this.options = d,
            this.loose = !!d.loose,
            this.includePrerelease = !!d.includePrerelease,
            this.raw = a.trim().split(/\s+/).join(" "),
            this.set = this.raw.split("||").map(g=>this.parseRange(g.trim())).filter(g=>g.length),
            !this.set.length)
                throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
            if (this.set.length > 1) {
                const g = this.set[0];
                if (this.set = this.set.filter(m=>!x(m[0])),
                this.set.length === 0)
                    this.set = [g];
                else if (this.set.length > 1) {
                    for (const m of this.set)
                        if (m.length === 1 && P(m[0])) {
                            this.set = [m];
                            break
                        }
                }
            }
            this.format()
        }
        format() {
            return this.range = this.set.map(a=>a.join(" ").trim()).join("||").trim(),
            this.range
        }
        toString() {
            return this.range
        }
        parseRange(a) {
            const g = ((this.options.includePrerelease && _) | (this.options.loose && R)) + ":" + a
              , m = r.get(g);
            if (m)
                return m;
            const y = this.options.loose
              , C = y ? c[l.HYPHENRANGELOOSE] : c[l.HYPHENRANGE];
            a = a.replace(C, Q(this.options.includePrerelease)),
            s("hyphen replace", a),
            a = a.replace(c[l.COMPARATORTRIM], u),
            s("comparator trim", a),
            a = a.replace(c[l.TILDETRIM], p),
            s("tilde trim", a),
            a = a.replace(c[l.CARETTRIM], f),
            s("caret trim", a);
            let A = a.split(" ").map(W=>M(W, this.options)).join(" ").split(/\s+/).map(W=>X(W, this.options));
            y && (A = A.filter(W=>(s("loose invalid filter", W, this.options),
            !!W.match(c[l.COMPARATORLOOSE])))),
            s("range list", A);
            const b = new Map
              , h = A.map(W=>new i(W,this.options));
            for (const W of h) {
                if (x(W))
                    return [W];
                b.set(W.value, W)
            }
            b.size > 1 && b.has("") && b.delete("");
            const S = [...b.values()];
            return r.set(g, S),
            S
        }
        intersects(a, d) {
            if (!(a instanceof e))
                throw new TypeError("a Range is required");
            return this.set.some(g=>L(g, d) && a.set.some(m=>L(m, d) && g.every(y=>m.every(C=>y.intersects(C, d)))))
        }
        test(a) {
            if (!a)
                return !1;
            if (typeof a == "string")
                try {
                    a = new o(a,this.options)
                } catch {
                    return !1
                }
            for (let d = 0; d < this.set.length; d++)
                if (ie(this.set[d], a, this.options))
                    return !0;
            return !1
        }
    }
    ho = e;
    const t = Am
      , r = new t({
        max: 1e3
    })
      , n = ga
      , i = Ss()
      , s = ws
      , o = st
      , {safeRe: c, t: l, comparatorTrimReplace: u, tildeTrimReplace: p, caretTrimReplace: f} = ai
      , {FLAG_INCLUDE_PRERELEASE: _, FLAG_LOOSE: R} = ys
      , x = v=>v.value === "<0.0.0-0"
      , P = v=>v.value === ""
      , L = (v,a)=>{
        let d = !0;
        const g = v.slice();
        let m = g.pop();
        for (; d && g.length; )
            d = g.every(y=>m.intersects(y, a)),
            m = g.pop();
        return d
    }
      , M = (v,a)=>(s("comp", v, a),
    v = O(v, a),
    s("caret", v),
    v = N(v, a),
    s("tildes", v),
    v = G(v, a),
    s("xrange", v),
    v = H(v, a),
    s("stars", v),
    v)
      , k = v=>!v || v.toLowerCase() === "x" || v === "*"
      , N = (v,a)=>v.trim().split(/\s+/).map(d=>$(d, a)).join(" ")
      , $ = (v,a)=>{
        const d = a.loose ? c[l.TILDELOOSE] : c[l.TILDE];
        return v.replace(d, (g,m,y,C,A)=>{
            s("tilde", v, g, m, y, C, A);
            let b;
            return k(m) ? b = "" : k(y) ? b = `>=${m}.0.0 <${+m + 1}.0.0-0` : k(C) ? b = `>=${m}.${y}.0 <${m}.${+y + 1}.0-0` : A ? (s("replaceTilde pr", A),
            b = `>=${m}.${y}.${C}-${A} <${m}.${+y + 1}.0-0`) : b = `>=${m}.${y}.${C} <${m}.${+y + 1}.0-0`,
            s("tilde return", b),
            b
        }
        )
    }
      , O = (v,a)=>v.trim().split(/\s+/).map(d=>D(d, a)).join(" ")
      , D = (v,a)=>{
        s("caret", v, a);
        const d = a.loose ? c[l.CARETLOOSE] : c[l.CARET]
          , g = a.includePrerelease ? "-0" : "";
        return v.replace(d, (m,y,C,A,b)=>{
            s("caret", v, m, y, C, A, b);
            let h;
            return k(y) ? h = "" : k(C) ? h = `>=${y}.0.0${g} <${+y + 1}.0.0-0` : k(A) ? y === "0" ? h = `>=${y}.${C}.0${g} <${y}.${+C + 1}.0-0` : h = `>=${y}.${C}.0${g} <${+y + 1}.0.0-0` : b ? (s("replaceCaret pr", b),
            y === "0" ? C === "0" ? h = `>=${y}.${C}.${A}-${b} <${y}.${C}.${+A + 1}-0` : h = `>=${y}.${C}.${A}-${b} <${y}.${+C + 1}.0-0` : h = `>=${y}.${C}.${A}-${b} <${+y + 1}.0.0-0`) : (s("no pr"),
            y === "0" ? C === "0" ? h = `>=${y}.${C}.${A}${g} <${y}.${C}.${+A + 1}-0` : h = `>=${y}.${C}.${A}${g} <${y}.${+C + 1}.0-0` : h = `>=${y}.${C}.${A} <${+y + 1}.0.0-0`),
            s("caret return", h),
            h
        }
        )
    }
      , G = (v,a)=>(s("replaceXRanges", v, a),
    v.split(/\s+/).map(d=>V(d, a)).join(" "))
      , V = (v,a)=>{
        v = v.trim();
        const d = a.loose ? c[l.XRANGELOOSE] : c[l.XRANGE];
        return v.replace(d, (g,m,y,C,A,b)=>{
            s("xRange", v, g, m, y, C, A, b);
            const h = k(y)
              , S = h || k(C)
              , W = S || k(A)
              , q = W;
            return m === "=" && q && (m = ""),
            b = a.includePrerelease ? "-0" : "",
            h ? m === ">" || m === "<" ? g = "<0.0.0-0" : g = "*" : m && q ? (S && (C = 0),
            A = 0,
            m === ">" ? (m = ">=",
            S ? (y = +y + 1,
            C = 0,
            A = 0) : (C = +C + 1,
            A = 0)) : m === "<=" && (m = "<",
            S ? y = +y + 1 : C = +C + 1),
            m === "<" && (b = "-0"),
            g = `${m + y}.${C}.${A}${b}`) : S ? g = `>=${y}.0.0${b} <${+y + 1}.0.0-0` : W && (g = `>=${y}.${C}.0${b} <${y}.${+C + 1}.0-0`),
            s("xRange return", g),
            g
        }
        )
    }
      , H = (v,a)=>(s("replaceStars", v, a),
    v.trim().replace(c[l.STAR], ""))
      , X = (v,a)=>(s("replaceGTE0", v, a),
    v.trim().replace(c[a.includePrerelease ? l.GTE0PRE : l.GTE0], ""))
      , Q = v=>(a,d,g,m,y,C,A,b,h,S,W,q,I)=>(k(g) ? d = "" : k(m) ? d = `>=${g}.0.0${v ? "-0" : ""}` : k(y) ? d = `>=${g}.${m}.0${v ? "-0" : ""}` : C ? d = `>=${d}` : d = `>=${d}${v ? "-0" : ""}`,
    k(h) ? b = "" : k(S) ? b = `<${+h + 1}.0.0-0` : k(W) ? b = `<${h}.${+S + 1}.0-0` : q ? b = `<=${h}.${S}.${W}-${q}` : v ? b = `<${h}.${S}.${+W + 1}-0` : b = `<=${b}`,
    `${d} ${b}`.trim())
      , ie = (v,a,d)=>{
        for (let g = 0; g < v.length; g++)
            if (!v[g].test(a))
                return !1;
        if (a.prerelease.length && !d.includePrerelease) {
            for (let g = 0; g < v.length; g++)
                if (s(v[g].semver),
                v[g].semver !== i.ANY && v[g].semver.prerelease.length > 0) {
                    const m = v[g].semver;
                    if (m.major === a.major && m.minor === a.minor && m.patch === a.patch)
                        return !0
                }
            return !1
        }
        return !0
    }
    ;
    return ho
}
var fo, el;
function Ss() {
    if (el)
        return fo;
    el = 1;
    const e = Symbol("SemVer ANY");
    class t {
        static get ANY() {
            return e
        }
        constructor(p, f) {
            if (f = r(f),
            p instanceof t) {
                if (p.loose === !!f.loose)
                    return p;
                p = p.value
            }
            p = p.trim().split(/\s+/).join(" "),
            o("comparator", p, f),
            this.options = f,
            this.loose = !!f.loose,
            this.parse(p),
            this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version,
            o("comp", this)
        }
        parse(p) {
            const f = this.options.loose ? n[i.COMPARATORLOOSE] : n[i.COMPARATOR]
              , _ = p.match(f);
            if (!_)
                throw new TypeError(`Invalid comparator: ${p}`);
            this.operator = _[1] !== void 0 ? _[1] : "",
            this.operator === "=" && (this.operator = ""),
            _[2] ? this.semver = new c(_[2],this.options.loose) : this.semver = e
        }
        toString() {
            return this.value
        }
        test(p) {
            if (o("Comparator.test", p, this.options.loose),
            this.semver === e || p === e)
                return !0;
            if (typeof p == "string")
                try {
                    p = new c(p,this.options)
                } catch {
                    return !1
                }
            return s(p, this.operator, this.semver, this.options)
        }
        intersects(p, f) {
            if (!(p instanceof t))
                throw new TypeError("a Comparator is required");
            return this.operator === "" ? this.value === "" ? !0 : new l(p.value,f).test(this.value) : p.operator === "" ? p.value === "" ? !0 : new l(this.value,f).test(p.semver) : (f = r(f),
            f.includePrerelease && (this.value === "<0.0.0-0" || p.value === "<0.0.0-0") || !f.includePrerelease && (this.value.startsWith("<0.0.0") || p.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && p.operator.startsWith(">") || this.operator.startsWith("<") && p.operator.startsWith("<") || this.semver.version === p.semver.version && this.operator.includes("=") && p.operator.includes("=") || s(this.semver, "<", p.semver, f) && this.operator.startsWith(">") && p.operator.startsWith("<") || s(this.semver, ">", p.semver, f) && this.operator.startsWith("<") && p.operator.startsWith(">")))
        }
    }
    fo = t;
    const r = ga
      , {safeRe: n, t: i} = ai
      , s = Ch
      , o = ws
      , c = st
      , l = Rt();
    return fo
}
const Tm = Rt()
  , Nm = (e,t,r)=>{
    try {
        t = new Tm(t,r)
    } catch {
        return !1
    }
    return t.test(e)
}
;
var Rs = Nm;
const Lm = Rt()
  , Om = (e,t)=>new Lm(e,t).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));
var Pm = Om;
const $m = st
  , Bm = Rt()
  , Dm = (e,t,r)=>{
    let n = null
      , i = null
      , s = null;
    try {
        s = new Bm(t,r)
    } catch {
        return null
    }
    return e.forEach(o=>{
        s.test(o) && (!n || i.compare(o) === -1) && (n = o,
        i = new $m(n,r))
    }
    ),
    n
}
;
var Fm = Dm;
const jm = st
  , Hm = Rt()
  , Um = (e,t,r)=>{
    let n = null
      , i = null
      , s = null;
    try {
        s = new Hm(t,r)
    } catch {
        return null
    }
    return e.forEach(o=>{
        s.test(o) && (!n || i.compare(o) === 1) && (n = o,
        i = new jm(n,r))
    }
    ),
    n
}
;
var Wm = Um;
const po = st
  , Vm = Rt()
  , tl = Es
  , qm = (e,t)=>{
    e = new Vm(e,t);
    let r = new po("0.0.0");
    if (e.test(r) || (r = new po("0.0.0-0"),
    e.test(r)))
        return r;
    r = null;
    for (let n = 0; n < e.set.length; ++n) {
        const i = e.set[n];
        let s = null;
        i.forEach(o=>{
            const c = new po(o.semver.version);
            switch (o.operator) {
            case ">":
                c.prerelease.length === 0 ? c.patch++ : c.prerelease.push(0),
                c.raw = c.format();
            case "":
            case ">=":
                (!s || tl(c, s)) && (s = c);
                break;
            case "<":
            case "<=":
                break;
            default:
                throw new Error(`Unexpected operation: ${o.operator}`)
            }
        }
        ),
        s && (!r || tl(r, s)) && (r = s)
    }
    return r && e.test(r) ? r : null
}
;
var zm = qm;
const Gm = Rt()
  , Jm = (e,t)=>{
    try {
        return new Gm(e,t).range || "*"
    } catch {
        return null
    }
}
;
var Zm = Jm;
const Km = st
  , Ih = Ss()
  , {ANY: Qm} = Ih
  , Ym = Rt()
  , Xm = Rs
  , rl = Es
  , nl = ma
  , ev = ba
  , tv = va
  , rv = (e,t,r,n)=>{
    e = new Km(e,n),
    t = new Ym(t,n);
    let i, s, o, c, l;
    switch (r) {
    case ">":
        i = rl,
        s = ev,
        o = nl,
        c = ">",
        l = ">=";
        break;
    case "<":
        i = nl,
        s = tv,
        o = rl,
        c = "<",
        l = "<=";
        break;
    default:
        throw new TypeError('Must provide a hilo val of "<" or ">"')
    }
    if (Xm(e, t, n))
        return !1;
    for (let u = 0; u < t.set.length; ++u) {
        const p = t.set[u];
        let f = null
          , _ = null;
        if (p.forEach(R=>{
            R.semver === Qm && (R = new Ih(">=0.0.0")),
            f = f || R,
            _ = _ || R,
            i(R.semver, f.semver, n) ? f = R : o(R.semver, _.semver, n) && (_ = R)
        }
        ),
        f.operator === c || f.operator === l || (!_.operator || _.operator === c) && s(e, _.semver))
            return !1;
        if (_.operator === l && o(e, _.semver))
            return !1
    }
    return !0
}
;
var ya = rv;
const nv = ya
  , iv = (e,t,r)=>nv(e, t, ">", r);
var sv = iv;
const ov = ya
  , av = (e,t,r)=>ov(e, t, "<", r);
var cv = av;
const il = Rt()
  , lv = (e,t,r)=>(e = new il(e,r),
t = new il(t,r),
e.intersects(t, r));
var uv = lv;
const hv = Rs
  , dv = St;
var fv = (e,t,r)=>{
    const n = [];
    let i = null
      , s = null;
    const o = e.sort((p,f)=>dv(p, f, r));
    for (const p of o)
        hv(p, t, r) ? (s = p,
        i || (i = p)) : (s && n.push([i, s]),
        s = null,
        i = null);
    i && n.push([i, null]);
    const c = [];
    for (const [p,f] of n)
        p === f ? c.push(p) : !f && p === o[0] ? c.push("*") : f ? p === o[0] ? c.push(`<=${f}`) : c.push(`${p} - ${f}`) : c.push(`>=${p}`);
    const l = c.join(" || ")
      , u = typeof t.raw == "string" ? t.raw : String(t);
    return l.length < u.length ? l : t
}
;
const sl = Rt()
  , wa = Ss()
  , {ANY: go} = wa
  , kn = Rs
  , Ea = St
  , pv = (e,t,r={})=>{
    if (e === t)
        return !0;
    e = new sl(e,r),
    t = new sl(t,r);
    let n = !1;
    e: for (const i of e.set) {
        for (const s of t.set) {
            const o = _v(i, s, r);
            if (n = n || o !== null,
            o)
                continue e
        }
        if (n)
            return !1
    }
    return !0
}
  , gv = [new wa(">=0.0.0-0")]
  , ol = [new wa(">=0.0.0")]
  , _v = (e,t,r)=>{
    if (e === t)
        return !0;
    if (e.length === 1 && e[0].semver === go) {
        if (t.length === 1 && t[0].semver === go)
            return !0;
        r.includePrerelease ? e = gv : e = ol
    }
    if (t.length === 1 && t[0].semver === go) {
        if (r.includePrerelease)
            return !0;
        t = ol
    }
    const n = new Set;
    let i, s;
    for (const R of e)
        R.operator === ">" || R.operator === ">=" ? i = al(i, R, r) : R.operator === "<" || R.operator === "<=" ? s = cl(s, R, r) : n.add(R.semver);
    if (n.size > 1)
        return null;
    let o;
    if (i && s) {
        if (o = Ea(i.semver, s.semver, r),
        o > 0)
            return null;
        if (o === 0 && (i.operator !== ">=" || s.operator !== "<="))
            return null
    }
    for (const R of n) {
        if (i && !kn(R, String(i), r) || s && !kn(R, String(s), r))
            return null;
        for (const x of t)
            if (!kn(R, String(x), r))
                return !1;
        return !0
    }
    let c, l, u, p, f = s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1, _ = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1;
    f && f.prerelease.length === 1 && s.operator === "<" && f.prerelease[0] === 0 && (f = !1);
    for (const R of t) {
        if (p = p || R.operator === ">" || R.operator === ">=",
        u = u || R.operator === "<" || R.operator === "<=",
        i) {
            if (_ && R.semver.prerelease && R.semver.prerelease.length && R.semver.major === _.major && R.semver.minor === _.minor && R.semver.patch === _.patch && (_ = !1),
            R.operator === ">" || R.operator === ">=") {
                if (c = al(i, R, r),
                c === R && c !== i)
                    return !1
            } else if (i.operator === ">=" && !kn(i.semver, String(R), r))
                return !1
        }
        if (s) {
            if (f && R.semver.prerelease && R.semver.prerelease.length && R.semver.major === f.major && R.semver.minor === f.minor && R.semver.patch === f.patch && (f = !1),
            R.operator === "<" || R.operator === "<=") {
                if (l = cl(s, R, r),
                l === R && l !== s)
                    return !1
            } else if (s.operator === "<=" && !kn(s.semver, String(R), r))
                return !1
        }
        if (!R.operator && (s || i) && o !== 0)
            return !1
    }
    return !(i && u && !s && o !== 0 || s && p && !i && o !== 0 || _ || f)
}
  , al = (e,t,r)=>{
    if (!e)
        return t;
    const n = Ea(e.semver, t.semver, r);
    return n > 0 ? e : n < 0 || t.operator === ">" && e.operator === ">=" ? t : e
}
  , cl = (e,t,r)=>{
    if (!e)
        return t;
    const n = Ea(e.semver, t.semver, r);
    return n < 0 ? e : n > 0 || t.operator === "<" && e.operator === "<=" ? t : e
}
;
var mv = pv;
const _o = ai
  , ll = ys
  , vv = st
  , ul = Sh
  , bv = Rn
  , yv = b_
  , wv = E_
  , Ev = R_
  , Sv = C_
  , Rv = x_
  , Mv = N_
  , Cv = P_
  , kv = D_
  , Iv = St
  , xv = U_
  , Av = q_
  , Tv = _a
  , Nv = Z_
  , Lv = Y_
  , Ov = Es
  , Pv = ma
  , $v = Rh
  , Bv = Mh
  , Dv = va
  , Fv = ba
  , jv = Ch
  , Hv = wm
  , Uv = Ss()
  , Wv = Rt()
  , Vv = Rs
  , qv = Pm
  , zv = Fm
  , Gv = Wm
  , Jv = zm
  , Zv = Zm
  , Kv = ya
  , Qv = sv
  , Yv = cv
  , Xv = uv
  , eb = fv
  , tb = mv;
var rb = {
    parse: bv,
    valid: yv,
    clean: wv,
    inc: Ev,
    diff: Sv,
    major: Rv,
    minor: Mv,
    patch: Cv,
    prerelease: kv,
    compare: Iv,
    rcompare: xv,
    compareLoose: Av,
    compareBuild: Tv,
    sort: Nv,
    rsort: Lv,
    gt: Ov,
    lt: Pv,
    eq: $v,
    neq: Bv,
    gte: Dv,
    lte: Fv,
    cmp: jv,
    coerce: Hv,
    Comparator: Uv,
    Range: Wv,
    satisfies: Vv,
    toComparators: qv,
    maxSatisfying: zv,
    minSatisfying: Gv,
    minVersion: Jv,
    validRange: Zv,
    outside: Kv,
    gtr: Qv,
    ltr: Yv,
    intersects: Xv,
    simplifyRange: eb,
    subset: tb,
    SemVer: vv,
    re: _o.re,
    src: _o.src,
    tokens: _o.t,
    SEMVER_SPEC_VERSION: ll.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: ll.RELEASE_TYPES,
    compareIdentifiers: ul.compareIdentifiers,
    rcompareIdentifiers: ul.rcompareIdentifiers
};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.satisfiesVersionRange = e.gtRange = e.gtVersion = e.assertIsSemVerRange = e.assertIsSemVerVersion = e.isValidSemVerRange = e.isValidSemVerVersion = e.VersionRangeStruct = e.VersionStruct = void 0;
    const t = rb
      , r = Lr
      , n = tt;
    e.VersionStruct = (0,
    r.refine)((0,
    r.string)(), "Version", f=>(0,
    t.valid)(f) === null ? `Expected SemVer version, got "${f}"` : !0),
    e.VersionRangeStruct = (0,
    r.refine)((0,
    r.string)(), "Version range", f=>(0,
    t.validRange)(f) === null ? `Expected SemVer range, got "${f}"` : !0);
    function i(f) {
        return (0,
        r.is)(f, e.VersionStruct)
    }
    e.isValidSemVerVersion = i;
    function s(f) {
        return (0,
        r.is)(f, e.VersionRangeStruct)
    }
    e.isValidSemVerRange = s;
    function o(f) {
        (0,
        n.assertStruct)(f, e.VersionStruct)
    }
    e.assertIsSemVerVersion = o;
    function c(f) {
        (0,
        n.assertStruct)(f, e.VersionRangeStruct)
    }
    e.assertIsSemVerRange = c;
    function l(f, _) {
        return (0,
        t.gt)(f, _)
    }
    e.gtVersion = l;
    function u(f, _) {
        return (0,
        t.gtr)(f, _)
    }
    e.gtRange = u;
    function p(f, _) {
        return (0,
        t.satisfies)(f, _, {
            includePrerelease: !0
        })
    }
    e.satisfiesVersionRange = p
}
)(yh);
(function(e) {
    var t = J && J.__createBinding || (Object.create ? function(n, i, s, o) {
        o === void 0 && (o = s);
        var c = Object.getOwnPropertyDescriptor(i, s);
        (!c || ("get"in c ? !i.__esModule : c.writable || c.configurable)) && (c = {
            enumerable: !0,
            get: function() {
                return i[s]
            }
        }),
        Object.defineProperty(n, o, c)
    }
    : function(n, i, s, o) {
        o === void 0 && (o = s),
        n[o] = i[s]
    }
    )
      , r = J && J.__exportStar || function(n, i) {
        for (var s in n)
            s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    r(tt, e),
    r(si, e),
    r(ae, e),
    r(vs, e),
    r(Lt, e),
    r(dn, e),
    r(fh, e),
    r(oi, e),
    r(ph, e),
    r(gh, e),
    r(fn, e),
    r(_h, e),
    r(Ot, e),
    r(mh, e),
    r(vh, e),
    r(bh, e),
    r(yh, e)
}
)(Ju);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.createModuleLogger = e.projectLogger = void 0;
    const t = Ju;
    Object.defineProperty(e, "createModuleLogger", {
        enumerable: !0,
        get: function() {
            return t.createModuleLogger
        }
    }),
    e.projectLogger = (0,
    t.createProjectLogger)("eth-block-tracker")
}
)(Gu);
var xh = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(_s, "__esModule", {
    value: !0
});
_s.PollingBlockTracker = void 0;
const nb = xh(sa)
  , ib = xh(E1)
  , sb = ri
  , hl = Gu
  , dl = (0,
hl.createModuleLogger)(hl.projectLogger, "polling-block-tracker")
  , ob = (0,
nb.default)()
  , ab = 1e3;
class cb extends sb.BaseBlockTracker {
    constructor(t={}) {
        var r;
        if (!t.provider)
            throw new Error("PollingBlockTracker - no provider specified.");
        super(Object.assign(Object.assign({}, t), {
            blockResetDuration: (r = t.blockResetDuration) !== null && r !== void 0 ? r : t.pollingInterval
        })),
        this._provider = t.provider,
        this._pollingInterval = t.pollingInterval || 20 * ab,
        this._retryTimeout = t.retryTimeout || this._pollingInterval / 10,
        this._keepEventLoopActive = t.keepEventLoopActive === void 0 ? !0 : t.keepEventLoopActive,
        this._setSkipCacheFlag = t.setSkipCacheFlag || !1
    }
    async checkForLatestBlock() {
        return await this._updateLatestBlock(),
        await this.getLatestBlock()
    }
    async _start() {
        this._synchronize()
    }
    async _end() {}
    async _synchronize() {
        for (var t; this._isRunning; )
            try {
                await this._updateLatestBlock();
                const r = fl(this._pollingInterval, !this._keepEventLoopActive);
                this.emit("_waitingForNextIteration"),
                await r
            } catch (r) {
                const n = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(t = r.stack) !== null && t !== void 0 ? t : r}`);
                try {
                    this.emit("error", n)
                } catch {
                    console.error(n)
                }
                const i = fl(this._retryTimeout, !this._keepEventLoopActive);
                this.emit("_waitingForNextIteration"),
                await i
            }
    }
    async _updateLatestBlock() {
        const t = await this._fetchLatestBlock();
        this._newPotentialLatest(t)
    }
    async _fetchLatestBlock() {
        const t = {
            jsonrpc: "2.0",
            id: ob(),
            method: "eth_blockNumber",
            params: []
        };
        this._setSkipCacheFlag && (t.skipCache = !0),
        dl("Making request", t);
        const r = await (0,
        ib.default)(n=>this._provider.sendAsync(t, n))();
        if (dl("Got response", r),
        r.error)
            throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error.message}`);
        return r.result
    }
}
_s.PollingBlockTracker = cb;
function fl(e, t) {
    return new Promise(r=>{
        const n = setTimeout(r, e);
        n.unref && t && n.unref()
    }
    )
}
var Ms = {}
  , lb = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Ms, "__esModule", {
    value: !0
});
Ms.SubscribeBlockTracker = void 0;
const ub = lb(sa)
  , hb = ri
  , db = (0,
ub.default)();
class fb extends hb.BaseBlockTracker {
    constructor(t={}) {
        if (!t.provider)
            throw new Error("SubscribeBlockTracker - no provider specified.");
        super(t),
        this._provider = t.provider,
        this._subscriptionId = null
    }
    async checkForLatestBlock() {
        return await this.getLatestBlock()
    }
    async _start() {
        if (this._subscriptionId === void 0 || this._subscriptionId === null)
            try {
                const t = await this._call("eth_blockNumber");
                this._subscriptionId = await this._call("eth_subscribe", "newHeads"),
                this._provider.on("data", this._handleSubData.bind(this)),
                this._newPotentialLatest(t)
            } catch (t) {
                this.emit("error", t)
            }
    }
    async _end() {
        if (this._subscriptionId !== null && this._subscriptionId !== void 0)
            try {
                await this._call("eth_unsubscribe", this._subscriptionId),
                this._subscriptionId = null
            } catch (t) {
                this.emit("error", t)
            }
    }
    _call(t, ...r) {
        return new Promise((n,i)=>{
            this._provider.sendAsync({
                id: db(),
                method: t,
                params: r,
                jsonrpc: "2.0"
            }, (s,o)=>{
                s ? i(s) : n(o.result)
            }
            )
        }
        )
    }
    _handleSubData(t, r) {
        var n;
        r.method === "eth_subscription" && ((n = r.params) === null || n === void 0 ? void 0 : n.subscription) === this._subscriptionId && this._newPotentialLatest(r.params.result.number)
    }
}
Ms.SubscribeBlockTracker = fb;
(function(e) {
    var t = J && J.__createBinding || (Object.create ? function(n, i, s, o) {
        o === void 0 && (o = s),
        Object.defineProperty(n, o, {
            enumerable: !0,
            get: function() {
                return i[s]
            }
        })
    }
    : function(n, i, s, o) {
        o === void 0 && (o = s),
        n[o] = i[s]
    }
    )
      , r = J && J.__exportStar || function(n, i) {
        for (var s in n)
            s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    r(_s, e),
    r(Ms, e)
}
)(zu);
var Cs = {};
Object.defineProperty(Cs, "__esModule", {
    value: !0
});
const pb = Fn;
function pl(e, t, r) {
    try {
        Reflect.apply(e, t, r)
    } catch (n) {
        setTimeout(()=>{
            throw n
        }
        )
    }
}
function gb(e) {
    const t = e.length
      , r = new Array(t);
    for (let n = 0; n < t; n += 1)
        r[n] = e[n];
    return r
}
let _b = class extends pb.EventEmitter {
    emit(t, ...r) {
        let n = t === "error";
        const i = this._events;
        if (i !== void 0)
            n = n && i.error === void 0;
        else if (!n)
            return !1;
        if (n) {
            let o;
            if (r.length > 0 && ([o] = r),
            o instanceof Error)
                throw o;
            const c = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
            throw c.context = o,
            c
        }
        const s = i[t];
        if (s === void 0)
            return !1;
        if (typeof s == "function")
            pl(s, this, r);
        else {
            const o = s.length
              , c = gb(s);
            for (let l = 0; l < o; l += 1)
                pl(c[l], this, r)
        }
        return !0
    }
}
;
Cs.default = _b;
var Sa = {}
  , ks = {}
  , ci = {};
Object.defineProperty(ci, "__esModule", {
    value: !0
});
ci.getUniqueId = void 0;
const Ah = 4294967295;
let mo = Math.floor(Math.random() * Ah);
function mb() {
    return mo = (mo + 1) % Ah,
    mo
}
ci.getUniqueId = mb;
Object.defineProperty(ks, "__esModule", {
    value: !0
});
ks.createIdRemapMiddleware = void 0;
const vb = ci;
function bb() {
    return (e,t,r,n)=>{
        const i = e.id
          , s = vb.getUniqueId();
        e.id = s,
        t.id = s,
        r(o=>{
            e.id = i,
            t.id = i,
            o()
        }
        )
    }
}
ks.createIdRemapMiddleware = bb;
var Is = {};
Object.defineProperty(Is, "__esModule", {
    value: !0
});
Is.createAsyncMiddleware = void 0;
function yb(e) {
    return async(t,r,n,i)=>{
        let s;
        const o = new Promise(p=>{
            s = p
        }
        );
        let c = null
          , l = !1;
        const u = async()=>{
            l = !0,
            n(p=>{
                c = p,
                s()
            }
            ),
            await o
        }
        ;
        try {
            await e(t, r, u),
            l ? (await o,
            c(null)) : i(null)
        } catch (p) {
            c ? c(p) : i(p)
        }
    }
}
Is.createAsyncMiddleware = yb;
var xs = {};
Object.defineProperty(xs, "__esModule", {
    value: !0
});
xs.createScaffoldMiddleware = void 0;
function wb(e) {
    return (t,r,n,i)=>{
        const s = e[t.method];
        return s === void 0 ? n() : typeof s == "function" ? s(t, r, n, i) : (r.result = s,
        i())
    }
}
xs.createScaffoldMiddleware = wb;
var li = {}
  , Ra = {};
Object.defineProperty(Ra, "__esModule", {
    value: !0
});
const Eb = Fn;
function gl(e, t, r) {
    try {
        Reflect.apply(e, t, r)
    } catch (n) {
        setTimeout(()=>{
            throw n
        }
        )
    }
}
function Sb(e) {
    const t = e.length
      , r = new Array(t);
    for (let n = 0; n < t; n += 1)
        r[n] = e[n];
    return r
}
let Rb = class extends Eb.EventEmitter {
    emit(t, ...r) {
        let n = t === "error";
        const i = this._events;
        if (i !== void 0)
            n = n && i.error === void 0;
        else if (!n)
            return !1;
        if (n) {
            let o;
            if (r.length > 0 && ([o] = r),
            o instanceof Error)
                throw o;
            const c = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
            throw c.context = o,
            c
        }
        const s = i[t];
        if (s === void 0)
            return !1;
        if (typeof s == "function")
            gl(s, this, r);
        else {
            const o = s.length
              , c = Sb(s);
            for (let l = 0; l < o; l += 1)
                gl(c[l], this, r)
        }
        return !0
    }
}
;
Ra.default = Rb;
var Th = {}
  , Zt = {}
  , Mb = Dn;
Dn.default = Dn;
Dn.stable = Oh;
Dn.stableStringify = Oh;
var Li = "[...]"
  , Nh = "[Circular]"
  , kr = []
  , Er = [];
function Lh() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    }
}
function Dn(e, t, r, n) {
    typeof n > "u" && (n = Lh()),
    Bo(e, "", 0, [], void 0, 0, n);
    var i;
    try {
        Er.length === 0 ? i = JSON.stringify(e, t, r) : i = JSON.stringify(e, Ph(t), r)
    } catch {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
    } finally {
        for (; kr.length !== 0; ) {
            var s = kr.pop();
            s.length === 4 ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2]
        }
    }
    return i
}
function sn(e, t, r, n) {
    var i = Object.getOwnPropertyDescriptor(n, r);
    i.get !== void 0 ? i.configurable ? (Object.defineProperty(n, r, {
        value: e
    }),
    kr.push([n, r, t, i])) : Er.push([t, r, e]) : (n[r] = e,
    kr.push([n, r, t]))
}
function Bo(e, t, r, n, i, s, o) {
    s += 1;
    var c;
    if (typeof e == "object" && e !== null) {
        for (c = 0; c < n.length; c++)
            if (n[c] === e) {
                sn(Nh, e, t, i);
                return
            }
        if (typeof o.depthLimit < "u" && s > o.depthLimit) {
            sn(Li, e, t, i);
            return
        }
        if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
            sn(Li, e, t, i);
            return
        }
        if (n.push(e),
        Array.isArray(e))
            for (c = 0; c < e.length; c++)
                Bo(e[c], c, c, n, e, s, o);
        else {
            var l = Object.keys(e);
            for (c = 0; c < l.length; c++) {
                var u = l[c];
                Bo(e[u], u, c, n, e, s, o)
            }
        }
        n.pop()
    }
}
function Cb(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
}
function Oh(e, t, r, n) {
    typeof n > "u" && (n = Lh());
    var i = Do(e, "", 0, [], void 0, 0, n) || e, s;
    try {
        Er.length === 0 ? s = JSON.stringify(i, t, r) : s = JSON.stringify(i, Ph(t), r)
    } catch {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
    } finally {
        for (; kr.length !== 0; ) {
            var o = kr.pop();
            o.length === 4 ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
        }
    }
    return s
}
function Do(e, t, r, n, i, s, o) {
    s += 1;
    var c;
    if (typeof e == "object" && e !== null) {
        for (c = 0; c < n.length; c++)
            if (n[c] === e) {
                sn(Nh, e, t, i);
                return
            }
        try {
            if (typeof e.toJSON == "function")
                return
        } catch {
            return
        }
        if (typeof o.depthLimit < "u" && s > o.depthLimit) {
            sn(Li, e, t, i);
            return
        }
        if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
            sn(Li, e, t, i);
            return
        }
        if (n.push(e),
        Array.isArray(e))
            for (c = 0; c < e.length; c++)
                Do(e[c], c, c, n, e, s, o);
        else {
            var l = {}
              , u = Object.keys(e).sort(Cb);
            for (c = 0; c < u.length; c++) {
                var p = u[c];
                Do(e[p], p, c, n, e, s, o),
                l[p] = e[p]
            }
            if (typeof i < "u")
                kr.push([i, t, e]),
                i[t] = l;
            else
                return l
        }
        n.pop()
    }
}
function Ph(e) {
    return e = typeof e < "u" ? e : function(t, r) {
        return r
    }
    ,
    function(t, r) {
        if (Er.length > 0)
            for (var n = 0; n < Er.length; n++) {
                var i = Er[n];
                if (i[1] === t && i[0] === r) {
                    r = i[2],
                    Er.splice(n, 1);
                    break
                }
            }
        return e.call(this, t, r)
    }
}
Object.defineProperty(Zt, "__esModule", {
    value: !0
});
Zt.EthereumProviderError = Zt.EthereumRpcError = void 0;
const kb = Mb;
class $h extends Error {
    constructor(t, r, n) {
        if (!Number.isInteger(t))
            throw new Error('"code" must be an integer.');
        if (!r || typeof r != "string")
            throw new Error('"message" must be a nonempty string.');
        super(r),
        this.code = t,
        n !== void 0 && (this.data = n)
    }
    serialize() {
        const t = {
            code: this.code,
            message: this.message
        };
        return this.data !== void 0 && (t.data = this.data),
        this.stack && (t.stack = this.stack),
        t
    }
    toString() {
        return kb.default(this.serialize(), Ab, 2)
    }
}
Zt.EthereumRpcError = $h;
class Ib extends $h {
    constructor(t, r, n) {
        if (!xb(t))
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(t, r, n)
    }
}
Zt.EthereumProviderError = Ib;
function xb(e) {
    return Number.isInteger(e) && e >= 1e3 && e <= 4999
}
function Ab(e, t) {
    if (t !== "[Circular]")
        return t
}
var Ma = {}
  , Kt = {};
Object.defineProperty(Kt, "__esModule", {
    value: !0
});
Kt.errorValues = Kt.errorCodes = void 0;
Kt.errorCodes = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
    }
};
Kt.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    }
};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.serializeError = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const t = Kt
      , r = Zt
      , n = t.errorCodes.rpc.internal
      , i = "Unspecified error message. This is a bug, please report it."
      , s = {
        code: n,
        message: o(n)
    };
    e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
    function o(_, R=i) {
        if (Number.isInteger(_)) {
            const x = _.toString();
            if (f(t.errorValues, x))
                return t.errorValues[x].message;
            if (u(_))
                return e.JSON_RPC_SERVER_ERROR_MESSAGE
        }
        return R
    }
    e.getMessageFromCode = o;
    function c(_) {
        if (!Number.isInteger(_))
            return !1;
        const R = _.toString();
        return !!(t.errorValues[R] || u(_))
    }
    e.isValidCode = c;
    function l(_, {fallbackError: R=s, shouldIncludeStack: x=!1}={}) {
        var P, L;
        if (!R || !Number.isInteger(R.code) || typeof R.message != "string")
            throw new Error("Must provide fallback error with integer number code and string message.");
        if (_ instanceof r.EthereumRpcError)
            return _.serialize();
        const M = {};
        if (_ && typeof _ == "object" && !Array.isArray(_) && f(_, "code") && c(_.code)) {
            const N = _;
            M.code = N.code,
            N.message && typeof N.message == "string" ? (M.message = N.message,
            f(N, "data") && (M.data = N.data)) : (M.message = o(M.code),
            M.data = {
                originalError: p(_)
            })
        } else {
            M.code = R.code;
            const N = (P = _) === null || P === void 0 ? void 0 : P.message;
            M.message = N && typeof N == "string" ? N : R.message,
            M.data = {
                originalError: p(_)
            }
        }
        const k = (L = _) === null || L === void 0 ? void 0 : L.stack;
        return x && _ && k && typeof k == "string" && (M.stack = k),
        M
    }
    e.serializeError = l;
    function u(_) {
        return _ >= -32099 && _ <= -32e3
    }
    function p(_) {
        return _ && typeof _ == "object" && !Array.isArray(_) ? Object.assign({}, _) : _
    }
    function f(_, R) {
        return Object.prototype.hasOwnProperty.call(_, R)
    }
}
)(Ma);
var As = {};
Object.defineProperty(As, "__esModule", {
    value: !0
});
As.ethErrors = void 0;
const Ca = Zt
  , Bh = Ma
  , rt = Kt;
As.ethErrors = {
    rpc: {
        parse: e=>ft(rt.errorCodes.rpc.parse, e),
        invalidRequest: e=>ft(rt.errorCodes.rpc.invalidRequest, e),
        invalidParams: e=>ft(rt.errorCodes.rpc.invalidParams, e),
        methodNotFound: e=>ft(rt.errorCodes.rpc.methodNotFound, e),
        internal: e=>ft(rt.errorCodes.rpc.internal, e),
        server: e=>{
            if (!e || typeof e != "object" || Array.isArray(e))
                throw new Error("Ethereum RPC Server errors must provide single object argument.");
            const {code: t} = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return ft(t, e)
        }
        ,
        invalidInput: e=>ft(rt.errorCodes.rpc.invalidInput, e),
        resourceNotFound: e=>ft(rt.errorCodes.rpc.resourceNotFound, e),
        resourceUnavailable: e=>ft(rt.errorCodes.rpc.resourceUnavailable, e),
        transactionRejected: e=>ft(rt.errorCodes.rpc.transactionRejected, e),
        methodNotSupported: e=>ft(rt.errorCodes.rpc.methodNotSupported, e),
        limitExceeded: e=>ft(rt.errorCodes.rpc.limitExceeded, e)
    },
    provider: {
        userRejectedRequest: e=>In(rt.errorCodes.provider.userRejectedRequest, e),
        unauthorized: e=>In(rt.errorCodes.provider.unauthorized, e),
        unsupportedMethod: e=>In(rt.errorCodes.provider.unsupportedMethod, e),
        disconnected: e=>In(rt.errorCodes.provider.disconnected, e),
        chainDisconnected: e=>In(rt.errorCodes.provider.chainDisconnected, e),
        custom: e=>{
            if (!e || typeof e != "object" || Array.isArray(e))
                throw new Error("Ethereum Provider custom errors must provide single object argument.");
            const {code: t, message: r, data: n} = e;
            if (!r || typeof r != "string")
                throw new Error('"message" must be a nonempty string');
            return new Ca.EthereumProviderError(t,r,n)
        }
    }
};
function ft(e, t) {
    const [r,n] = Dh(t);
    return new Ca.EthereumRpcError(e,r || Bh.getMessageFromCode(e),n)
}
function In(e, t) {
    const [r,n] = Dh(t);
    return new Ca.EthereumProviderError(e,r || Bh.getMessageFromCode(e),n)
}
function Dh(e) {
    if (e) {
        if (typeof e == "string")
            return [e];
        if (typeof e == "object" && !Array.isArray(e)) {
            const {message: t, data: r} = e;
            if (t && typeof t != "string")
                throw new Error("Must specify string message.");
            return [t || void 0, r]
        }
    }
    return []
}
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getMessageFromCode = e.serializeError = e.EthereumProviderError = e.EthereumRpcError = e.ethErrors = e.errorCodes = void 0;
    const t = Zt;
    Object.defineProperty(e, "EthereumRpcError", {
        enumerable: !0,
        get: function() {
            return t.EthereumRpcError
        }
    }),
    Object.defineProperty(e, "EthereumProviderError", {
        enumerable: !0,
        get: function() {
            return t.EthereumProviderError
        }
    });
    const r = Ma;
    Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function() {
            return r.serializeError
        }
    }),
    Object.defineProperty(e, "getMessageFromCode", {
        enumerable: !0,
        get: function() {
            return r.getMessageFromCode
        }
    });
    const n = As;
    Object.defineProperty(e, "ethErrors", {
        enumerable: !0,
        get: function() {
            return n.ethErrors
        }
    });
    const i = Kt;
    Object.defineProperty(e, "errorCodes", {
        enumerable: !0,
        get: function() {
            return i.errorCodes
        }
    })
}
)(Th);
var Tb = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(li, "__esModule", {
    value: !0
});
li.JsonRpcEngine = void 0;
const Nb = Tb(Ra)
  , pt = Th;
class Bt extends Nb.default {
    constructor() {
        super(),
        this._middleware = []
    }
    push(t) {
        this._middleware.push(t)
    }
    handle(t, r) {
        if (r && typeof r != "function")
            throw new Error('"callback" must be a function if provided.');
        return Array.isArray(t) ? r ? this._handleBatch(t, r) : this._handleBatch(t) : r ? this._handle(t, r) : this._promiseHandle(t)
    }
    asMiddleware() {
        return async(t,r,n,i)=>{
            try {
                const [s,o,c] = await Bt._runAllMiddleware(t, r, this._middleware);
                return o ? (await Bt._runReturnHandlers(c),
                i(s)) : n(async l=>{
                    try {
                        await Bt._runReturnHandlers(c)
                    } catch (u) {
                        return l(u)
                    }
                    return l()
                }
                )
            } catch (s) {
                return i(s)
            }
        }
    }
    async _handleBatch(t, r) {
        try {
            const n = await Promise.all(t.map(this._promiseHandle.bind(this)));
            return r ? r(null, n) : n
        } catch (n) {
            if (r)
                return r(n);
            throw n
        }
    }
    _promiseHandle(t) {
        return new Promise(r=>{
            this._handle(t, (n,i)=>{
                r(i)
            }
            )
        }
        )
    }
    async _handle(t, r) {
        if (!t || Array.isArray(t) || typeof t != "object") {
            const o = new pt.EthereumRpcError(pt.errorCodes.rpc.invalidRequest,`Requests must be plain objects. Received: ${typeof t}`,{
                request: t
            });
            return r(o, {
                id: void 0,
                jsonrpc: "2.0",
                error: o
            })
        }
        if (typeof t.method != "string") {
            const o = new pt.EthereumRpcError(pt.errorCodes.rpc.invalidRequest,`Must specify a string method. Received: ${typeof t.method}`,{
                request: t
            });
            return r(o, {
                id: t.id,
                jsonrpc: "2.0",
                error: o
            })
        }
        const n = Object.assign({}, t)
          , i = {
            id: n.id,
            jsonrpc: n.jsonrpc
        };
        let s = null;
        try {
            await this._processRequest(n, i)
        } catch (o) {
            s = o
        }
        return s && (delete i.result,
        i.error || (i.error = pt.serializeError(s))),
        r(s, i)
    }
    async _processRequest(t, r) {
        const [n,i,s] = await Bt._runAllMiddleware(t, r, this._middleware);
        if (Bt._checkForCompletion(t, r, i),
        await Bt._runReturnHandlers(s),
        n)
            throw n
    }
    static async _runAllMiddleware(t, r, n) {
        const i = [];
        let s = null
          , o = !1;
        for (const c of n)
            if ([s,o] = await Bt._runMiddleware(t, r, c, i),
            o)
                break;
        return [s, o, i.reverse()]
    }
    static _runMiddleware(t, r, n, i) {
        return new Promise(s=>{
            const o = l=>{
                const u = l || r.error;
                u && (r.error = pt.serializeError(u)),
                s([u, !0])
            }
              , c = l=>{
                r.error ? o(r.error) : (l && (typeof l != "function" && o(new pt.EthereumRpcError(pt.errorCodes.rpc.internal,`JsonRpcEngine: "next" return handlers must be functions. Received "${typeof l}" for request:
${vo(t)}`,{
                    request: t
                })),
                i.push(l)),
                s([null, !1]))
            }
            ;
            try {
                n(t, r, c, o)
            } catch (l) {
                o(l)
            }
        }
        )
    }
    static async _runReturnHandlers(t) {
        for (const r of t)
            await new Promise((n,i)=>{
                r(s=>s ? i(s) : n())
            }
            )
    }
    static _checkForCompletion(t, r, n) {
        if (!("result"in r) && !("error"in r))
            throw new pt.EthereumRpcError(pt.errorCodes.rpc.internal,`JsonRpcEngine: Response has no error or result for request:
${vo(t)}`,{
                request: t
            });
        if (!n)
            throw new pt.EthereumRpcError(pt.errorCodes.rpc.internal,`JsonRpcEngine: Nothing ended request:
${vo(t)}`,{
                request: t
            })
    }
}
li.JsonRpcEngine = Bt;
function vo(e) {
    return JSON.stringify(e, null, 2)
}
var Ts = {};
Object.defineProperty(Ts, "__esModule", {
    value: !0
});
Ts.mergeMiddleware = void 0;
const Lb = li;
function Ob(e) {
    const t = new Lb.JsonRpcEngine;
    return e.forEach(r=>t.push(r)),
    t.asMiddleware()
}
Ts.mergeMiddleware = Ob;
(function(e) {
    var t = J && J.__createBinding || (Object.create ? function(n, i, s, o) {
        o === void 0 && (o = s),
        Object.defineProperty(n, o, {
            enumerable: !0,
            get: function() {
                return i[s]
            }
        })
    }
    : function(n, i, s, o) {
        o === void 0 && (o = s),
        n[o] = i[s]
    }
    )
      , r = J && J.__exportStar || function(n, i) {
        for (var s in n)
            s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    r(ks, e),
    r(Is, e),
    r(xs, e),
    r(ci, e),
    r(li, e),
    r(Ts, e)
}
)(Sa);
var Fh = {}
  , ka = {}
  , Fo = function(e, t) {
    return Fo = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(r, n) {
        r.__proto__ = n
    }
    || function(r, n) {
        for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
    }
    ,
    Fo(e, t)
};
function jh(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    Fo(e, t);
    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype,
    new r)
}
var Oi = function() {
    return Oi = Object.assign || function(t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var s in r)
                Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    Oi.apply(this, arguments)
};
function Hh(e, t) {
    var r = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
    return r
}
function Uh(e, t, r, n) {
    var i = arguments.length, s = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        s = Reflect.decorate(e, t, r, n);
    else
        for (var c = e.length - 1; c >= 0; c--)
            (o = e[c]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
    return i > 3 && s && Object.defineProperty(t, r, s),
    s
}
function Wh(e, t) {
    return function(r, n) {
        t(r, n, e)
    }
}
function Pb(e, t, r, n, i, s) {
    function o(M) {
        if (M !== void 0 && typeof M != "function")
            throw new TypeError("Function expected");
        return M
    }
    for (var c = n.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? n.static ? e : e.prototype : null, p = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), f, _ = !1, R = r.length - 1; R >= 0; R--) {
        var x = {};
        for (var P in n)
            x[P] = P === "access" ? {} : n[P];
        for (var P in n.access)
            x.access[P] = n.access[P];
        x.addInitializer = function(M) {
            if (_)
                throw new TypeError("Cannot add initializers after decoration has completed");
            s.push(o(M || null))
        }
        ;
        var L = (0,
        r[R])(c === "accessor" ? {
            get: p.get,
            set: p.set
        } : p[l], x);
        if (c === "accessor") {
            if (L === void 0)
                continue;
            if (L === null || typeof L != "object")
                throw new TypeError("Object expected");
            (f = o(L.get)) && (p.get = f),
            (f = o(L.set)) && (p.set = f),
            (f = o(L.init)) && i.unshift(f)
        } else
            (f = o(L)) && (c === "field" ? i.unshift(f) : p[l] = f)
    }
    u && Object.defineProperty(u, n.name, p),
    _ = !0
}
function $b(e, t, r) {
    for (var n = arguments.length > 2, i = 0; i < t.length; i++)
        r = n ? t[i].call(e, r) : t[i].call(e);
    return n ? r : void 0
}
function Bb(e) {
    return typeof e == "symbol" ? e : "".concat(e)
}
function Db(e, t, r) {
    return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", {
        configurable: !0,
        value: r ? "".concat(r, " ", t) : t
    })
}
function Vh(e, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(e, t)
}
function qh(e, t, r, n) {
    function i(s) {
        return s instanceof r ? s : new r(function(o) {
            o(s)
        }
        )
    }
    return new (r || (r = Promise))(function(s, o) {
        function c(p) {
            try {
                u(n.next(p))
            } catch (f) {
                o(f)
            }
        }
        function l(p) {
            try {
                u(n.throw(p))
            } catch (f) {
                o(f)
            }
        }
        function u(p) {
            p.done ? s(p.value) : i(p.value).then(c, l)
        }
        u((n = n.apply(e, t || [])).next())
    }
    )
}
function zh(e, t) {
    var r = {
        label: 0,
        sent: function() {
            if (s[0] & 1)
                throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    }, n, i, s, o;
    return o = {
        next: c(0),
        throw: c(1),
        return: c(2)
    },
    typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }
    ),
    o;
    function c(u) {
        return function(p) {
            return l([u, p])
        }
    }
    function l(u) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; o && (o = 0,
        u[0] && (r = 0)),
        r; )
            try {
                if (n = 1,
                i && (s = u[0] & 2 ? i.return : u[0] ? i.throw || ((s = i.return) && s.call(i),
                0) : i.next) && !(s = s.call(i, u[1])).done)
                    return s;
                switch (i = 0,
                s && (u = [u[0] & 2, s.value]),
                u[0]) {
                case 0:
                case 1:
                    s = u;
                    break;
                case 4:
                    return r.label++,
                    {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    r.label++,
                    i = u[1],
                    u = [0];
                    continue;
                case 7:
                    u = r.ops.pop(),
                    r.trys.pop();
                    continue;
                default:
                    if (s = r.trys,
                    !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
                        r.label = u[1];
                        break
                    }
                    if (u[0] === 6 && r.label < s[1]) {
                        r.label = s[1],
                        s = u;
                        break
                    }
                    if (s && r.label < s[2]) {
                        r.label = s[2],
                        r.ops.push(u);
                        break
                    }
                    s[2] && r.ops.pop(),
                    r.trys.pop();
                    continue
                }
                u = t.call(e, r)
            } catch (p) {
                u = [6, p],
                i = 0
            } finally {
                n = s = 0
            }
        if (u[0] & 5)
            throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}
var Ns = Object.create ? function(e, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get"in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
        enumerable: !0,
        get: function() {
            return t[r]
        }
    }),
    Object.defineProperty(e, n, i)
}
: function(e, t, r, n) {
    n === void 0 && (n = r),
    e[n] = t[r]
}
;
function Gh(e, t) {
    for (var r in e)
        r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Ns(t, e, r)
}
function Pi(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , r = t && e[t]
      , n = 0;
    if (r)
        return r.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function() {
                return e && n >= e.length && (e = void 0),
                {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function Ia(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
        return e;
    var n = r.call(e), i, s = [], o;
    try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
            s.push(i.value)
    } catch (c) {
        o = {
            error: c
        }
    } finally {
        try {
            i && !i.done && (r = n.return) && r.call(n)
        } finally {
            if (o)
                throw o.error
        }
    }
    return s
}
function Jh() {
    for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(Ia(arguments[t]));
    return e
}
function Zh() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++)
        e += arguments[t].length;
    for (var n = Array(e), i = 0, t = 0; t < r; t++)
        for (var s = arguments[t], o = 0, c = s.length; o < c; o++,
        i++)
            n[i] = s[o];
    return n
}
function Kh(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, i = t.length, s; n < i; n++)
            (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)),
            s[n] = t[n]);
    return e.concat(s || Array.prototype.slice.call(t))
}
function pn(e) {
    return this instanceof pn ? (this.v = e,
    this) : new pn(e)
}
function Qh(e, t, r) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(e, t || []), i, s = [];
    return i = {},
    o("next"),
    o("throw"),
    o("return"),
    i[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    i;
    function o(_) {
        n[_] && (i[_] = function(R) {
            return new Promise(function(x, P) {
                s.push([_, R, x, P]) > 1 || c(_, R)
            }
            )
        }
        )
    }
    function c(_, R) {
        try {
            l(n[_](R))
        } catch (x) {
            f(s[0][3], x)
        }
    }
    function l(_) {
        _.value instanceof pn ? Promise.resolve(_.value.v).then(u, p) : f(s[0][2], _)
    }
    function u(_) {
        c("next", _)
    }
    function p(_) {
        c("throw", _)
    }
    function f(_, R) {
        _(R),
        s.shift(),
        s.length && c(s[0][0], s[0][1])
    }
}
function Yh(e) {
    var t, r;
    return t = {},
    n("next"),
    n("throw", function(i) {
        throw i
    }),
    n("return"),
    t[Symbol.iterator] = function() {
        return this
    }
    ,
    t;
    function n(i, s) {
        t[i] = e[i] ? function(o) {
            return (r = !r) ? {
                value: pn(e[i](o)),
                done: !1
            } : s ? s(o) : o
        }
        : s
    }
}
function Xh(e) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], r;
    return t ? t.call(e) : (e = typeof Pi == "function" ? Pi(e) : e[Symbol.iterator](),
    r = {},
    n("next"),
    n("throw"),
    n("return"),
    r[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    r);
    function n(s) {
        r[s] = e[s] && function(o) {
            return new Promise(function(c, l) {
                o = e[s](o),
                i(c, l, o.done, o.value)
            }
            )
        }
    }
    function i(s, o, c, l) {
        Promise.resolve(l).then(function(u) {
            s({
                value: u,
                done: c
            })
        }, o)
    }
}
function ed(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
    }) : e.raw = t,
    e
}
var Fb = Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    })
}
: function(e, t) {
    e.default = t
}
;
function td(e) {
    if (e && e.__esModule)
        return e;
    var t = {};
    if (e != null)
        for (var r in e)
            r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && Ns(t, e, r);
    return Fb(t, e),
    t
}
function rd(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function nd(e, t, r, n) {
    if (r === "a" && !n)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !n : !t.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e)
}
function id(e, t, r, n, i) {
    if (n === "m")
        throw new TypeError("Private method is not writable");
    if (n === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !i : !t.has(e))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r),
    r
}
function sd(e, t) {
    if (t === null || typeof t != "object" && typeof t != "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof e == "function" ? t === e : e.has(t)
}
function od(e, t, r) {
    if (t != null) {
        if (typeof t != "object" && typeof t != "function")
            throw new TypeError("Object expected.");
        var n;
        if (r) {
            if (!Symbol.asyncDispose)
                throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
        }
        if (n === void 0) {
            if (!Symbol.dispose)
                throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose]
        }
        if (typeof n != "function")
            throw new TypeError("Object not disposable.");
        e.stack.push({
            value: t,
            dispose: n,
            async: r
        })
    } else
        r && e.stack.push({
            async: !0
        });
    return t
}
var jb = typeof SuppressedError == "function" ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError",
    n.error = e,
    n.suppressed = t,
    n
}
;
function ad(e) {
    function t(n) {
        e.error = e.hasError ? new jb(n,e.error,"An error was suppressed during disposal.") : n,
        e.hasError = !0
    }
    function r() {
        for (; e.stack.length; ) {
            var n = e.stack.pop();
            try {
                var i = n.dispose && n.dispose.call(n.value);
                if (n.async)
                    return Promise.resolve(i).then(r, function(s) {
                        return t(s),
                        r()
                    })
            } catch (s) {
                t(s)
            }
        }
        if (e.hasError)
            throw e.error
    }
    return r()
}
const Hb = {
    __extends: jh,
    __assign: Oi,
    __rest: Hh,
    __decorate: Uh,
    __param: Wh,
    __metadata: Vh,
    __awaiter: qh,
    __generator: zh,
    __createBinding: Ns,
    __exportStar: Gh,
    __values: Pi,
    __read: Ia,
    __spread: Jh,
    __spreadArrays: Zh,
    __spreadArray: Kh,
    __await: pn,
    __asyncGenerator: Qh,
    __asyncDelegator: Yh,
    __asyncValues: Xh,
    __makeTemplateObject: ed,
    __importStar: td,
    __importDefault: rd,
    __classPrivateFieldGet: nd,
    __classPrivateFieldSet: id,
    __classPrivateFieldIn: sd,
    __addDisposableResource: od,
    __disposeResources: ad
}
  , Ub = Object.freeze(Object.defineProperty({
    __proto__: null,
    __addDisposableResource: od,
    get __assign() {
        return Oi
    },
    __asyncDelegator: Yh,
    __asyncGenerator: Qh,
    __asyncValues: Xh,
    __await: pn,
    __awaiter: qh,
    __classPrivateFieldGet: nd,
    __classPrivateFieldIn: sd,
    __classPrivateFieldSet: id,
    __createBinding: Ns,
    __decorate: Uh,
    __disposeResources: ad,
    __esDecorate: Pb,
    __exportStar: Gh,
    __extends: jh,
    __generator: zh,
    __importDefault: rd,
    __importStar: td,
    __makeTemplateObject: ed,
    __metadata: Vh,
    __param: Wh,
    __propKey: Bb,
    __read: Ia,
    __rest: Hh,
    __runInitializers: $b,
    __setFunctionName: Db,
    __spread: Jh,
    __spreadArray: Kh,
    __spreadArrays: Zh,
    __values: Pi,
    default: Hb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , xa = gn(Ub);
var Ls = {};
Object.defineProperty(Ls, "__esModule", {
    value: !0
});
var _l = xa
  , Wb = function() {
    function e(t) {
        if (this._maxConcurrency = t,
        this._queue = [],
        t <= 0)
            throw new Error("semaphore must be initialized to a positive value");
        this._value = t
    }
    return e.prototype.acquire = function() {
        var t = this
          , r = this.isLocked()
          , n = new Promise(function(i) {
            return t._queue.push(i)
        }
        );
        return r || this._dispatch(),
        n
    }
    ,
    e.prototype.runExclusive = function(t) {
        return _l.__awaiter(this, void 0, void 0, function() {
            var r, n, i;
            return _l.__generator(this, function(s) {
                switch (s.label) {
                case 0:
                    return [4, this.acquire()];
                case 1:
                    r = s.sent(),
                    n = r[0],
                    i = r[1],
                    s.label = 2;
                case 2:
                    return s.trys.push([2, , 4, 5]),
                    [4, t(n)];
                case 3:
                    return [2, s.sent()];
                case 4:
                    return i(),
                    [7];
                case 5:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.isLocked = function() {
        return this._value <= 0
    }
    ,
    e.prototype.release = function() {
        if (this._maxConcurrency > 1)
            throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
        if (this._currentReleaser) {
            var t = this._currentReleaser;
            this._currentReleaser = void 0,
            t()
        }
    }
    ,
    e.prototype._dispatch = function() {
        var t = this
          , r = this._queue.shift();
        if (r) {
            var n = !1;
            this._currentReleaser = function() {
                n || (n = !0,
                t._value++,
                t._dispatch())
            }
            ,
            r([this._value--, this._currentReleaser])
        }
    }
    ,
    e
}();
Ls.default = Wb;
Object.defineProperty(ka, "__esModule", {
    value: !0
});
var ml = xa
  , Vb = Ls
  , qb = function() {
    function e() {
        this._semaphore = new Vb.default(1)
    }
    return e.prototype.acquire = function() {
        return ml.__awaiter(this, void 0, void 0, function() {
            var t, r;
            return ml.__generator(this, function(n) {
                switch (n.label) {
                case 0:
                    return [4, this._semaphore.acquire()];
                case 1:
                    return t = n.sent(),
                    r = t[1],
                    [2, r]
                }
            })
        })
    }
    ,
    e.prototype.runExclusive = function(t) {
        return this._semaphore.runExclusive(function() {
            return t()
        })
    }
    ,
    e.prototype.isLocked = function() {
        return this._semaphore.isLocked()
    }
    ,
    e.prototype.release = function() {
        this._semaphore.release()
    }
    ,
    e
}();
ka.default = qb;
var Os = {};
Object.defineProperty(Os, "__esModule", {
    value: !0
});
Os.withTimeout = void 0;
var Si = xa;
function zb(e, t, r) {
    var n = this;
    return r === void 0 && (r = new Error("timeout")),
    {
        acquire: function() {
            return new Promise(function(i, s) {
                return Si.__awaiter(n, void 0, void 0, function() {
                    var o, c, l;
                    return Si.__generator(this, function(u) {
                        switch (u.label) {
                        case 0:
                            return o = !1,
                            setTimeout(function() {
                                o = !0,
                                s(r)
                            }, t),
                            [4, e.acquire()];
                        case 1:
                            return c = u.sent(),
                            o ? (l = Array.isArray(c) ? c[1] : c,
                            l()) : i(c),
                            [2]
                        }
                    })
                })
            }
            )
        },
        runExclusive: function(i) {
            return Si.__awaiter(this, void 0, void 0, function() {
                var s, o;
                return Si.__generator(this, function(c) {
                    switch (c.label) {
                    case 0:
                        s = function() {}
                        ,
                        c.label = 1;
                    case 1:
                        return c.trys.push([1, , 7, 8]),
                        [4, this.acquire()];
                    case 2:
                        return o = c.sent(),
                        Array.isArray(o) ? (s = o[1],
                        [4, i(o[0])]) : [3, 4];
                    case 3:
                        return [2, c.sent()];
                    case 4:
                        return s = o,
                        [4, i()];
                    case 5:
                        return [2, c.sent()];
                    case 6:
                        return [3, 8];
                    case 7:
                        return s(),
                        [7];
                    case 8:
                        return [2]
                    }
                })
            })
        },
        release: function() {
            e.release()
        },
        isLocked: function() {
            return e.isLocked()
        }
    }
}
Os.withTimeout = zb;
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.withTimeout = e.Semaphore = e.Mutex = void 0;
    var t = ka;
    Object.defineProperty(e, "Mutex", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    });
    var r = Ls;
    Object.defineProperty(e, "Semaphore", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    });
    var n = Os;
    Object.defineProperty(e, "withTimeout", {
        enumerable: !0,
        get: function() {
            return n.withTimeout
        }
    })
}
)(Fh);
var Gb = Zb
  , Jb = Object.prototype.hasOwnProperty;
function Zb() {
    for (var e = {}, t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
            Jb.call(r, n) && (e[n] = r[n])
    }
    return e
}
const Kb = Gb
  , Qb = sa();
var Yb = Y;
function Y(e) {
    const t = this;
    t.currentProvider = e
}
Y.prototype.getBalance = ui(2, "eth_getBalance");
Y.prototype.getCode = ui(2, "eth_getCode");
Y.prototype.getTransactionCount = ui(2, "eth_getTransactionCount");
Y.prototype.getStorageAt = ui(3, "eth_getStorageAt");
Y.prototype.call = ui(2, "eth_call");
Y.prototype.protocolVersion = ne("eth_protocolVersion");
Y.prototype.syncing = ne("eth_syncing");
Y.prototype.coinbase = ne("eth_coinbase");
Y.prototype.mining = ne("eth_mining");
Y.prototype.hashrate = ne("eth_hashrate");
Y.prototype.gasPrice = ne("eth_gasPrice");
Y.prototype.accounts = ne("eth_accounts");
Y.prototype.blockNumber = ne("eth_blockNumber");
Y.prototype.getBlockTransactionCountByHash = ne("eth_getBlockTransactionCountByHash");
Y.prototype.getBlockTransactionCountByNumber = ne("eth_getBlockTransactionCountByNumber");
Y.prototype.getUncleCountByBlockHash = ne("eth_getUncleCountByBlockHash");
Y.prototype.getUncleCountByBlockNumber = ne("eth_getUncleCountByBlockNumber");
Y.prototype.sign = ne("eth_sign");
Y.prototype.sendTransaction = ne("eth_sendTransaction");
Y.prototype.sendRawTransaction = ne("eth_sendRawTransaction");
Y.prototype.estimateGas = ne("eth_estimateGas");
Y.prototype.getBlockByHash = ne("eth_getBlockByHash");
Y.prototype.getBlockByNumber = ne("eth_getBlockByNumber");
Y.prototype.getTransactionByHash = ne("eth_getTransactionByHash");
Y.prototype.getTransactionByBlockHashAndIndex = ne("eth_getTransactionByBlockHashAndIndex");
Y.prototype.getTransactionByBlockNumberAndIndex = ne("eth_getTransactionByBlockNumberAndIndex");
Y.prototype.getTransactionReceipt = ne("eth_getTransactionReceipt");
Y.prototype.getUncleByBlockHashAndIndex = ne("eth_getUncleByBlockHashAndIndex");
Y.prototype.getUncleByBlockNumberAndIndex = ne("eth_getUncleByBlockNumberAndIndex");
Y.prototype.getCompilers = ne("eth_getCompilers");
Y.prototype.compileLLL = ne("eth_compileLLL");
Y.prototype.compileSolidity = ne("eth_compileSolidity");
Y.prototype.compileSerpent = ne("eth_compileSerpent");
Y.prototype.newFilter = ne("eth_newFilter");
Y.prototype.newBlockFilter = ne("eth_newBlockFilter");
Y.prototype.newPendingTransactionFilter = ne("eth_newPendingTransactionFilter");
Y.prototype.uninstallFilter = ne("eth_uninstallFilter");
Y.prototype.getFilterChanges = ne("eth_getFilterChanges");
Y.prototype.getFilterLogs = ne("eth_getFilterLogs");
Y.prototype.getLogs = ne("eth_getLogs");
Y.prototype.getWork = ne("eth_getWork");
Y.prototype.submitWork = ne("eth_submitWork");
Y.prototype.submitHashrate = ne("eth_submitHashrate");
Y.prototype.sendAsync = function(e, t) {
    this.currentProvider.sendAsync(Xb(e), function(n, i) {
        if (!n && i.error && (n = new Error("EthQuery - RPC Error - " + i.error.message)),
        n)
            return t(n);
        t(null, i.result)
    })
}
;
function ne(e) {
    return function() {
        const t = this;
        var r = [].slice.call(arguments)
          , n = r.pop();
        t.sendAsync({
            method: e,
            params: r
        }, n)
    }
}
function ui(e, t) {
    return function() {
        const r = this;
        var n = [].slice.call(arguments)
          , i = n.pop();
        n.length < e && n.push("latest"),
        r.sendAsync({
            method: t,
            params: n
        }, i)
    }
}
function Xb(e) {
    return Kb({
        id: Qb(),
        jsonrpc: "2.0",
        params: []
    }, e)
}
const vl = (e,t,r,n)=>function(...i) {
    const s = t.promiseModule;
    return new s((o,c)=>{
        t.multiArgs ? i.push((...u)=>{
            t.errorFirst ? u[0] ? c(u) : (u.shift(),
            o(u)) : o(u)
        }
        ) : t.errorFirst ? i.push((u,p)=>{
            u ? c(u) : o(p)
        }
        ) : i.push(o),
        Reflect.apply(e, this === r ? n : this, i)
    }
    )
}
  , bl = new WeakMap;
var ey = (e,t)=>{
    t = {
        exclude: [/.+(?:Sync|Stream)$/],
        errorFirst: !0,
        promiseModule: Promise,
        ...t
    };
    const r = typeof e;
    if (!(e !== null && (r === "object" || r === "function")))
        throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${e === null ? "null" : r}\``);
    const n = (o,c)=>{
        let l = bl.get(o);
        if (l || (l = {},
        bl.set(o, l)),
        c in l)
            return l[c];
        const u = x=>typeof x == "string" || typeof c == "symbol" ? c === x : x.test(c)
          , p = Reflect.getOwnPropertyDescriptor(o, c)
          , f = p === void 0 || p.writable || p.configurable
          , R = (t.include ? t.include.some(u) : !t.exclude.some(u)) && f;
        return l[c] = R,
        R
    }
      , i = new WeakMap
      , s = new Proxy(e,{
        apply(o, c, l) {
            const u = i.get(o);
            if (u)
                return Reflect.apply(u, c, l);
            const p = t.excludeMain ? o : vl(o, t, s, o);
            return i.set(o, p),
            Reflect.apply(p, c, l)
        },
        get(o, c) {
            const l = o[c];
            if (!n(o, c) || l === Function.prototype[c])
                return l;
            const u = i.get(l);
            if (u)
                return u;
            if (typeof l == "function") {
                const p = vl(l, t, s, o);
                return i.set(l, p),
                p
            }
            return l
        }
    });
    return s
}
;
const ty = Cs.default;
let ry = class extends ty {
    constructor() {
        super(),
        this.updates = []
    }
    async initialize() {}
    async update() {
        throw new Error("BaseFilter - no update method specified")
    }
    addResults(t) {
        this.updates = this.updates.concat(t),
        t.forEach(r=>this.emit("update", r))
    }
    addInitialResults(t) {}
    getChangesAndClear() {
        const t = this.updates;
        return this.updates = [],
        t
    }
}
;
var Aa = ry;
const ny = Aa;
let iy = class extends ny {
    constructor() {
        super(),
        this.allResults = []
    }
    async update() {
        throw new Error("BaseFilterWithHistory - no update method specified")
    }
    addResults(t) {
        this.allResults = this.allResults.concat(t),
        super.addResults(t)
    }
    addInitialResults(t) {
        this.allResults = this.allResults.concat(t),
        super.addInitialResults(t)
    }
    getAllResults() {
        return this.allResults
    }
}
;
var sy = iy
  , hi = {
    minBlockRef: oy,
    maxBlockRef: ay,
    sortBlockRefs: Ta,
    bnToHex: cy,
    blockRefIsNumber: ly,
    hexToInt: $i,
    incrementHexInt: uy,
    intToHex: cd,
    unsafeRandomBytes: hy
};
function oy(...e) {
    return Ta(e)[0]
}
function ay(...e) {
    const t = Ta(e);
    return t[t.length - 1]
}
function Ta(e) {
    return e.sort((t,r)=>t === "latest" || r === "earliest" ? 1 : r === "latest" || t === "earliest" ? -1 : $i(t) - $i(r))
}
function cy(e) {
    return "0x" + e.toString(16)
}
function ly(e) {
    return e && !["earliest", "latest", "pending"].includes(e)
}
function $i(e) {
    return e == null ? e : Number.parseInt(e, 16)
}
function uy(e) {
    if (e == null)
        return e;
    const t = $i(e);
    return cd(t + 1)
}
function cd(e) {
    if (e == null)
        return e;
    let t = e.toString(16);
    return t.length % 2 && (t = "0" + t),
    "0x" + t
}
function hy(e) {
    let t = "0x";
    for (let r = 0; r < e; r++)
        t += yl(),
        t += yl();
    return t
}
function yl() {
    return Math.floor(Math.random() * 16).toString(16)
}
const dy = Yb
  , fy = ey
  , py = sy
  , {bnToHex: Iw, hexToInt: Ri, incrementHexInt: gy, minBlockRef: _y, blockRefIsNumber: my} = hi;
let vy = class extends py {
    constructor({provider: t, params: r}) {
        super(),
        this.type = "log",
        this.ethQuery = new dy(t),
        this.params = Object.assign({
            fromBlock: "latest",
            toBlock: "latest",
            address: void 0,
            topics: []
        }, r),
        this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]),
        this.params.address = this.params.address.map(n=>n.toLowerCase()))
    }
    async initialize({currentBlock: t}) {
        let r = this.params.fromBlock;
        ["latest", "pending"].includes(r) && (r = t),
        r === "earliest" && (r = "0x0"),
        this.params.fromBlock = r;
        const n = _y(this.params.toBlock, t)
          , i = Object.assign({}, this.params, {
            toBlock: n
        })
          , s = await this._fetchLogs(i);
        this.addInitialResults(s)
    }
    async update({oldBlock: t, newBlock: r}) {
        const n = r;
        let i;
        t ? i = gy(t) : i = r;
        const s = Object.assign({}, this.params, {
            fromBlock: i,
            toBlock: n
        })
          , c = (await this._fetchLogs(s)).filter(l=>this.matchLog(l));
        this.addResults(c)
    }
    async _fetchLogs(t) {
        return await fy(n=>this.ethQuery.getLogs(t, n))()
    }
    matchLog(t) {
        if (Ri(this.params.fromBlock) >= Ri(t.blockNumber) || my(this.params.toBlock) && Ri(this.params.toBlock) <= Ri(t.blockNumber))
            return !1;
        const r = t.address && t.address.toLowerCase();
        return this.params.address && r && !this.params.address.includes(r) ? !1 : this.params.topics.every((i,s)=>{
            let o = t.topics[s];
            if (!o)
                return !1;
            o = o.toLowerCase();
            let c = Array.isArray(i) ? i : [i];
            return c.includes(null) ? !0 : (c = c.map(p=>p.toLowerCase()),
            c.includes(o))
        }
        )
    }
}
;
var by = vy
  , Na = yy;
async function yy({provider: e, fromBlock: t, toBlock: r}) {
    t || (t = r);
    const n = wl(t)
      , s = wl(r) - n + 1
      , o = Array(s).fill().map((l,u)=>n + u).map(wy);
    let c = await Promise.all(o.map(l=>Sy(e, "eth_getBlockByNumber", [l, !1])));
    return c = c.filter(l=>l !== null),
    c
}
function wl(e) {
    return e == null ? e : Number.parseInt(e, 16)
}
function wy(e) {
    return e == null ? e : "0x" + e.toString(16)
}
function Ey(e, t) {
    return new Promise((r,n)=>{
        e.sendAsync(t, (i,s)=>{
            i ? n(i) : s.error ? n(s.error) : s.result ? r(s.result) : n(new Error("Result was empty"))
        }
        )
    }
    )
}
async function Sy(e, t, r) {
    for (let n = 0; n < 3; n++)
        try {
            return await Ey(e, {
                id: 1,
                jsonrpc: "2.0",
                method: t,
                params: r
            })
        } catch (i) {
            console.error(`provider.sendAsync failed: ${i.stack || i.message || i}`)
        }
    return null
}
const Ry = Aa
  , My = Na
  , {incrementHexInt: Cy} = hi;
let ky = class extends Ry {
    constructor({provider: t, params: r}) {
        super(),
        this.type = "block",
        this.provider = t
    }
    async update({oldBlock: t, newBlock: r}) {
        const n = r
          , i = Cy(t)
          , o = (await My({
            provider: this.provider,
            fromBlock: i,
            toBlock: n
        })).map(c=>c.hash);
        this.addResults(o)
    }
}
;
var Iy = ky;
const xy = Aa
  , Ay = Na
  , {incrementHexInt: Ty} = hi;
let Ny = class extends xy {
    constructor({provider: t}) {
        super(),
        this.type = "tx",
        this.provider = t
    }
    async update({oldBlock: t}) {
        const r = t
          , n = Ty(t)
          , i = await Ay({
            provider: this.provider,
            fromBlock: n,
            toBlock: r
        })
          , s = [];
        for (const o of i)
            s.push(...o.transactions);
        this.addResults(s)
    }
}
;
var Ly = Ny;
const Oy = Fh.Mutex
  , {createAsyncMiddleware: Py, createScaffoldMiddleware: $y} = Sa
  , By = by
  , Dy = Iy
  , Fy = Ly
  , {intToHex: ld, hexToInt: bo} = hi;
var jy = Hy;
function Hy({blockTracker: e, provider: t}) {
    let r = 0
      , n = {};
    const i = new Oy
      , s = Uy({
        mutex: i
    })
      , o = $y({
        eth_newFilter: s(yo(l)),
        eth_newBlockFilter: s(yo(u)),
        eth_newPendingTransactionFilter: s(yo(p)),
        eth_uninstallFilter: s(xi(R)),
        eth_getFilterChanges: s(xi(f)),
        eth_getFilterLogs: s(xi(_))
    })
      , c = async({oldBlock: k, newBlock: N})=>{
        if (n.length === 0)
            return;
        const $ = await i.acquire();
        try {
            await Promise.all(Qr(n).map(async O=>{
                try {
                    await O.update({
                        oldBlock: k,
                        newBlock: N
                    })
                } catch (D) {
                    console.error(D)
                }
            }
            ))
        } catch (O) {
            console.error(O)
        }
        $()
    }
    ;
    return o.newLogFilter = l,
    o.newBlockFilter = u,
    o.newPendingTransactionFilter = p,
    o.uninstallFilter = R,
    o.getFilterChanges = f,
    o.getFilterLogs = _,
    o.destroy = ()=>{
        L()
    }
    ,
    o;
    async function l(k) {
        const N = new By({
            provider: t,
            params: k
        });
        return await x(N),
        N
    }
    async function u() {
        const k = new Dy({
            provider: t
        });
        return await x(k),
        k
    }
    async function p() {
        const k = new Fy({
            provider: t
        });
        return await x(k),
        k
    }
    async function f(k) {
        const N = bo(k)
          , $ = n[N];
        if (!$)
            throw new Error(`No filter for index "${N}"`);
        return $.getChangesAndClear()
    }
    async function _(k) {
        const N = bo(k)
          , $ = n[N];
        if (!$)
            throw new Error(`No filter for index "${N}"`);
        let O = [];
        return $.type === "log" && (O = $.getAllResults()),
        O
    }
    async function R(k) {
        const N = bo(k)
          , O = !!n[N];
        return O && await P(N),
        O
    }
    async function x(k) {
        const N = Qr(n).length
          , $ = await e.getLatestBlock();
        await k.initialize({
            currentBlock: $
        }),
        r++,
        n[r] = k,
        k.id = r,
        k.idHex = ld(r);
        const O = Qr(n).length;
        return M({
            prevFilterCount: N,
            newFilterCount: O
        }),
        r
    }
    async function P(k) {
        const N = Qr(n).length;
        delete n[k];
        const $ = Qr(n).length;
        M({
            prevFilterCount: N,
            newFilterCount: $
        })
    }
    async function L() {
        const k = Qr(n).length;
        n = {},
        M({
            prevFilterCount: k,
            newFilterCount: 0
        })
    }
    function M({prevFilterCount: k, newFilterCount: N}) {
        if (k === 0 && N > 0) {
            e.on("sync", c);
            return
        }
        if (k > 0 && N === 0) {
            e.removeListener("sync", c);
            return
        }
    }
}
function yo(e) {
    return xi(async(...t)=>{
        const r = await e(...t);
        return ld(r.id)
    }
    )
}
function xi(e) {
    return Py(async(t,r)=>{
        const n = await e.apply(null, t.params);
        r.result = n
    }
    )
}
function Uy({mutex: e}) {
    return t=>async(r,n,i,s)=>{
        (await e.acquire())(),
        t(r, n, i, s)
    }
}
function Qr(e, t) {
    const r = [];
    for (let n in e)
        r.push(e[n]);
    return r
}
const Wy = Cs.default
  , {createAsyncMiddleware: El, createScaffoldMiddleware: Vy} = Sa
  , qy = jy
  , {unsafeRandomBytes: zy, incrementHexInt: Gy} = hi
  , Jy = Na;
var Zy = Ky;
function Ky({blockTracker: e, provider: t}) {
    const r = {}
      , n = qy({
        blockTracker: e,
        provider: t
    });
    let i = !1;
    const s = new Wy
      , o = Vy({
        eth_subscribe: El(c),
        eth_unsubscribe: El(l)
    });
    return o.destroy = p,
    {
        events: s,
        middleware: o
    };
    async function c(f, _) {
        if (i)
            throw new Error("SubscriptionManager - attempting to use after destroying");
        const R = f.params[0]
          , x = zy(16);
        let P;
        switch (R) {
        case "newHeads":
            P = L({
                subId: x
            });
            break;
        case "logs":
            const k = f.params[1]
              , N = await n.newLogFilter(k);
            P = M({
                subId: x,
                filter: N
            });
            break;
        default:
            throw new Error(`SubscriptionManager - unsupported subscription type "${R}"`)
        }
        r[x] = P,
        _.result = x;
        return;
        function L({subId: k}) {
            const N = {
                type: R,
                destroy: async()=>{
                    e.removeListener("sync", N.update)
                }
                ,
                update: async({oldBlock: $, newBlock: O})=>{
                    const D = O
                      , G = Gy($);
                    (await Jy({
                        provider: t,
                        fromBlock: G,
                        toBlock: D
                    })).map(Qy).filter(X=>X !== null).forEach(X=>{
                        u(k, X)
                    }
                    )
                }
            };
            return e.on("sync", N.update),
            N
        }
        function M({subId: k, filter: N}) {
            return N.on("update", O=>u(k, O)),
            {
                type: R,
                destroy: async()=>await n.uninstallFilter(N.idHex)
            }
        }
    }
    async function l(f, _) {
        if (i)
            throw new Error("SubscriptionManager - attempting to use after destroying");
        const R = f.params[0]
          , x = r[R];
        if (!x) {
            _.result = !1;
            return
        }
        delete r[R],
        await x.destroy(),
        _.result = !0
    }
    function u(f, _) {
        s.emit("notification", {
            jsonrpc: "2.0",
            method: "eth_subscription",
            params: {
                subscription: f,
                result: _
            }
        })
    }
    function p() {
        s.removeAllListeners();
        for (const f in r)
            r[f].destroy(),
            delete r[f];
        i = !0
    }
}
function Qy(e) {
    return e == null ? null : {
        hash: e.hash,
        parentHash: e.parentHash,
        sha3Uncles: e.sha3Uncles,
        miner: e.miner,
        stateRoot: e.stateRoot,
        transactionsRoot: e.transactionsRoot,
        receiptsRoot: e.receiptsRoot,
        logsBloom: e.logsBloom,
        difficulty: e.difficulty,
        number: e.number,
        gasLimit: e.gasLimit,
        gasUsed: e.gasUsed,
        nonce: e.nonce,
        mixHash: e.mixHash,
        timestamp: e.timestamp,
        extraData: e.extraData
    }
}
Object.defineProperty(gs, "__esModule", {
    value: !0
});
gs.SubscriptionManager = void 0;
const Yy = zu
  , Xy = Zy
  , Sl = ()=>{}
;
class ew {
    constructor(t) {
        const r = new Yy.PollingBlockTracker({
            provider: t,
            pollingInterval: 15e3,
            setSkipCacheFlag: !0
        })
          , {events: n, middleware: i} = Xy({
            blockTracker: r,
            provider: t
        });
        this.events = n,
        this.subscriptionMiddleware = i
    }
    async handleRequest(t) {
        const r = {};
        return await this.subscriptionMiddleware(t, r, Sl, Sl),
        r
    }
    destroy() {
        this.subscriptionMiddleware.destroy()
    }
}
gs.SubscriptionManager = ew;
var ud = J && J.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(on, "__esModule", {
    value: !0
});
on.CoinbaseWalletProvider = void 0;
const tw = ud(ji)
  , rw = Vd
  , se = jn
  , re = z
  , nw = Vn
  , Rl = gt
  , Mi = bn
  , lt = _n
  , wo = ud(m1)
  , xn = vn
  , iw = hn
  , sw = gs
  , Ml = "DefaultChainId"
  , Cl = "DefaultJsonRpcUrl";
class ow extends rw.EventEmitter {
    constructor(t) {
        var r, n;
        super(),
        this._filterPolyfill = new iw.FilterPolyfill(this),
        this._subscriptionManager = new sw.SubscriptionManager(this),
        this._relay = null,
        this._addresses = [],
        this.hasMadeFirstChainChangedEmission = !1,
        this.setProviderInfo = this.setProviderInfo.bind(this),
        this.updateProviderInfo = this.updateProviderInfo.bind(this),
        this.getChainId = this.getChainId.bind(this),
        this.setAppInfo = this.setAppInfo.bind(this),
        this.enable = this.enable.bind(this),
        this.close = this.close.bind(this),
        this.send = this.send.bind(this),
        this.sendAsync = this.sendAsync.bind(this),
        this.request = this.request.bind(this),
        this._setAddresses = this._setAddresses.bind(this),
        this.scanQRCode = this.scanQRCode.bind(this),
        this.genericRequest = this.genericRequest.bind(this),
        this._chainIdFromOpts = t.chainId,
        this._jsonRpcUrlFromOpts = t.jsonRpcUrl,
        this._overrideIsMetaMask = t.overrideIsMetaMask,
        this._relayProvider = t.relayProvider,
        this._storage = t.storage,
        this._relayEventManager = t.relayEventManager,
        this.diagnostic = t.diagnosticLogger,
        this.reloadOnDisconnect = !0,
        this.isCoinbaseWallet = (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0,
        this.isCoinbaseBrowser = (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1,
        this.qrUrl = t.qrUrl;
        const i = this.getChainId()
          , s = (0,
        re.prepend0x)(i.toString(16));
        this.emit("connect", {
            chainIdStr: s
        });
        const o = this._storage.getItem(Rl.LOCAL_STORAGE_ADDRESSES_KEY);
        if (o) {
            const c = o.split(" ");
            c[0] !== "" && (this._addresses = c.map(l=>(0,
            re.ensureAddressString)(l)),
            this.emit("accountsChanged", c))
        }
        this._subscriptionManager.events.on("notification", c=>{
            this.emit("message", {
                type: c.method,
                data: c.params
            })
        }
        ),
        this._isAuthorized() && this.initializeRelay(),
        window.addEventListener("message", c=>{
            var l;
            if (!(c.origin !== location.origin || c.source !== window) && c.data.type === "walletLinkMessage" && c.data.data.action === "dappChainSwitched") {
                const u = c.data.data.chainId
                  , p = (l = c.data.data.jsonRpcUrl) !== null && l !== void 0 ? l : this.jsonRpcUrl;
                this.updateProviderInfo(p, Number(u))
            }
        }
        )
    }
    get selectedAddress() {
        return this._addresses[0] || void 0
    }
    get networkVersion() {
        return this.getChainId().toString(10)
    }
    get chainId() {
        return (0,
        re.prepend0x)(this.getChainId().toString(16))
    }
    get isWalletLink() {
        return !0
    }
    get isMetaMask() {
        return this._overrideIsMetaMask
    }
    get host() {
        return this.jsonRpcUrl
    }
    get connected() {
        return !0
    }
    isConnected() {
        return !0
    }
    get jsonRpcUrl() {
        var t;
        return (t = this._storage.getItem(Cl)) !== null && t !== void 0 ? t : this._jsonRpcUrlFromOpts
    }
    set jsonRpcUrl(t) {
        this._storage.setItem(Cl, t)
    }
    disableReloadOnDisconnect() {
        this.reloadOnDisconnect = !1
    }
    setProviderInfo(t, r) {
        this.isCoinbaseBrowser || (this._chainIdFromOpts = r,
        this._jsonRpcUrlFromOpts = t),
        this.updateProviderInfo(this.jsonRpcUrl, this.getChainId())
    }
    updateProviderInfo(t, r) {
        this.jsonRpcUrl = t;
        const n = this.getChainId();
        this._storage.setItem(Ml, r.toString(10)),
        ((0,
        re.ensureIntNumber)(r) !== n || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()),
        this.hasMadeFirstChainChangedEmission = !0)
    }
    async watchAsset(t, r, n, i, s, o) {
        const l = await (await this.initializeRelay()).watchAsset(t, r, n, i, s, o == null ? void 0 : o.toString()).promise;
        return (0,
        lt.isErrorResponse)(l) ? !1 : !!l.result
    }
    async addEthereumChain(t, r, n, i, s, o) {
        var c, l;
        if ((0,
        re.ensureIntNumber)(t) === this.getChainId())
            return !1;
        const u = await this.initializeRelay()
          , p = u.inlineAddEthereumChain(t.toString());
        !this._isAuthorized() && !p && await u.requestEthereumAccounts().promise;
        const f = await u.addEthereumChain(t.toString(), r, s, n, i, o).promise;
        return (0,
        lt.isErrorResponse)(f) ? !1 : (((c = f.result) === null || c === void 0 ? void 0 : c.isApproved) === !0 && this.updateProviderInfo(r[0], t),
        ((l = f.result) === null || l === void 0 ? void 0 : l.isApproved) === !0)
    }
    async switchEthereumChain(t) {
        const n = await (await this.initializeRelay()).switchEthereumChain(t.toString(10), this.selectedAddress || void 0).promise;
        if ((0,
        lt.isErrorResponse)(n)) {
            if (!n.errorCode)
                return;
            throw n.errorCode === se.standardErrorCodes.provider.unsupportedChain ? se.standardErrors.provider.unsupportedChain() : se.standardErrors.provider.custom({
                message: n.errorMessage,
                code: n.errorCode
            })
        }
        const i = n.result;
        i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, t)
    }
    setAppInfo(t, r) {
        this.initializeRelay().then(n=>n.setAppInfo(t, r))
    }
    async enable() {
        var t;
        return (t = this.diagnostic) === null || t === void 0 || t.log(xn.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::enable",
            addresses_length: this._addresses.length,
            sessionIdHash: this._relay ? Mi.Session.hash(this._relay.session.id) : void 0
        }),
        this._isAuthorized() ? [...this._addresses] : await this.send("eth_requestAccounts")
    }
    async close() {
        (await this.initializeRelay()).resetAndReload()
    }
    send(t, r) {
        try {
            const n = this._send(t, r);
            if (n instanceof Promise)
                return n.catch(i=>{
                    throw (0,
                    se.serializeError)(i, t)
                }
                )
        } catch (n) {
            throw (0,
            se.serializeError)(n, t)
        }
    }
    _send(t, r) {
        if (typeof t == "string") {
            const i = t
              , s = Array.isArray(r) ? r : r !== void 0 ? [r] : []
              , o = {
                jsonrpc: "2.0",
                id: 0,
                method: i,
                params: s
            };
            return this._sendRequestAsync(o).then(c=>c.result)
        }
        if (typeof r == "function") {
            const i = t
              , s = r;
            return this._sendAsync(i, s)
        }
        if (Array.isArray(t))
            return t.map(s=>this._sendRequest(s));
        const n = t;
        return this._sendRequest(n)
    }
    async sendAsync(t, r) {
        try {
            return this._sendAsync(t, r).catch(n=>{
                throw (0,
                se.serializeError)(n, t)
            }
            )
        } catch (n) {
            return Promise.reject((0,
            se.serializeError)(n, t))
        }
    }
    async _sendAsync(t, r) {
        if (typeof r != "function")
            throw new Error("callback is required");
        if (Array.isArray(t)) {
            const i = r;
            this._sendMultipleRequestsAsync(t).then(s=>i(null, s)).catch(s=>i(s, null));
            return
        }
        const n = r;
        return this._sendRequestAsync(t).then(i=>n(null, i)).catch(i=>n(i, null))
    }
    async request(t) {
        try {
            return this._request(t).catch(r=>{
                throw (0,
                se.serializeError)(r, t.method)
            }
            )
        } catch (r) {
            return Promise.reject((0,
            se.serializeError)(r, t.method))
        }
    }
    async _request(t) {
        if (!t || typeof t != "object" || Array.isArray(t))
            throw se.standardErrors.rpc.invalidRequest({
                message: "Expected a single, non-array, object argument.",
                data: t
            });
        const {method: r, params: n} = t;
        if (typeof r != "string" || r.length === 0)
            throw se.standardErrors.rpc.invalidRequest({
                message: "'args.method' must be a non-empty string.",
                data: t
            });
        if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null))
            throw se.standardErrors.rpc.invalidRequest({
                message: "'args.params' must be an object or array if provided.",
                data: t
            });
        const i = n === void 0 ? [] : n
          , s = this._relayEventManager.makeRequestId();
        return (await this._sendRequestAsync({
            method: r,
            params: i,
            jsonrpc: "2.0",
            id: s
        })).result
    }
    async scanQRCode(t) {
        const n = await (await this.initializeRelay()).scanQRCode((0,
        re.ensureRegExpString)(t)).promise;
        if ((0,
        lt.isErrorResponse)(n))
            throw (0,
            se.serializeError)(n.errorMessage, "scanQRCode");
        if (typeof n.result != "string")
            throw (0,
            se.serializeError)("result was not a string", "scanQRCode");
        return n.result
    }
    async genericRequest(t, r) {
        const i = await (await this.initializeRelay()).genericRequest(t, r).promise;
        if ((0,
        lt.isErrorResponse)(i))
            throw (0,
            se.serializeError)(i.errorMessage, "generic");
        if (typeof i.result != "string")
            throw (0,
            se.serializeError)("result was not a string", "generic");
        return i.result
    }
    async connectAndSignIn(t) {
        var r;
        (r = this.diagnostic) === null || r === void 0 || r.log(xn.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::connectAndSignIn",
            sessionIdHash: this._relay ? Mi.Session.hash(this._relay.session.id) : void 0
        });
        let n;
        try {
            const s = await this.initializeRelay();
            if (!(s instanceof nw.MobileRelay))
                throw new Error("connectAndSignIn is only supported on mobile");
            if (n = await s.connectAndSignIn(t).promise,
            (0,
            lt.isErrorResponse)(n))
                throw new Error(n.errorMessage)
        } catch (s) {
            throw typeof s.message == "string" && s.message.match(/(denied|rejected)/i) ? se.standardErrors.provider.userRejectedRequest("User denied account authorization") : s
        }
        if (!n.result)
            throw new Error("accounts received is empty");
        const {accounts: i} = n.result;
        return this._setAddresses(i),
        this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()),
        n.result
    }
    async selectProvider(t) {
        const n = await (await this.initializeRelay()).selectProvider(t).promise;
        if ((0,
        lt.isErrorResponse)(n))
            throw (0,
            se.serializeError)(n.errorMessage, "selectProvider");
        if (typeof n.result != "string")
            throw (0,
            se.serializeError)("result was not a string", "selectProvider");
        return n.result
    }
    supportsSubscriptions() {
        return !1
    }
    subscribe() {
        throw new Error("Subscriptions are not supported")
    }
    unsubscribe() {
        throw new Error("Subscriptions are not supported")
    }
    disconnect() {
        return !0
    }
    _sendRequest(t) {
        const r = {
            jsonrpc: "2.0",
            id: t.id
        }
          , {method: n} = t;
        if (r.result = this._handleSynchronousMethods(t),
        r.result === void 0)
            throw new Error(`Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`);
        return r
    }
    _setAddresses(t, r) {
        if (!Array.isArray(t))
            throw new Error("addresses is not an array");
        const n = t.map(i=>(0,
        re.ensureAddressString)(i));
        JSON.stringify(n) !== JSON.stringify(this._addresses) && (this._addresses = n,
        this.emit("accountsChanged", this._addresses),
        this._storage.setItem(Rl.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")))
    }
    _sendRequestAsync(t) {
        return new Promise((r,n)=>{
            try {
                const i = this._handleSynchronousMethods(t);
                if (i !== void 0)
                    return r({
                        jsonrpc: "2.0",
                        id: t.id,
                        result: i
                    });
                const s = this._handleAsynchronousFilterMethods(t);
                if (s !== void 0) {
                    s.then(c=>r(Object.assign(Object.assign({}, c), {
                        id: t.id
                    }))).catch(c=>n(c));
                    return
                }
                const o = this._handleSubscriptionMethods(t);
                if (o !== void 0) {
                    o.then(c=>r({
                        jsonrpc: "2.0",
                        id: t.id,
                        result: c.result
                    })).catch(c=>n(c));
                    return
                }
            } catch (i) {
                return n(i)
            }
            this._handleAsynchronousMethods(t).then(i=>i && r(Object.assign(Object.assign({}, i), {
                id: t.id
            }))).catch(i=>n(i))
        }
        )
    }
    _sendMultipleRequestsAsync(t) {
        return Promise.all(t.map(r=>this._sendRequestAsync(r)))
    }
    _handleSynchronousMethods(t) {
        const {method: r} = t
          , n = t.params || [];
        switch (r) {
        case "eth_accounts":
            return this._eth_accounts();
        case "eth_coinbase":
            return this._eth_coinbase();
        case "eth_uninstallFilter":
            return this._eth_uninstallFilter(n);
        case "net_version":
            return this._net_version();
        case "eth_chainId":
            return this._eth_chainId();
        default:
            return
        }
    }
    async _handleAsynchronousMethods(t) {
        const {method: r} = t
          , n = t.params || [];
        switch (r) {
        case "eth_requestAccounts":
            return this._eth_requestAccounts();
        case "eth_sign":
            return this._eth_sign(n);
        case "eth_ecRecover":
            return this._eth_ecRecover(n);
        case "personal_sign":
            return this._personal_sign(n);
        case "personal_ecRecover":
            return this._personal_ecRecover(n);
        case "eth_signTransaction":
            return this._eth_signTransaction(n);
        case "eth_sendRawTransaction":
            return this._eth_sendRawTransaction(n);
        case "eth_sendTransaction":
            return this._eth_sendTransaction(n);
        case "eth_signTypedData_v1":
            return this._eth_signTypedData_v1(n);
        case "eth_signTypedData_v2":
            return this._throwUnsupportedMethodError();
        case "eth_signTypedData_v3":
            return this._eth_signTypedData_v3(n);
        case "eth_signTypedData_v4":
        case "eth_signTypedData":
            return this._eth_signTypedData_v4(n);
        case "cbWallet_arbitrary":
            return this._cbwallet_arbitrary(n);
        case "wallet_addEthereumChain":
            return this._wallet_addEthereumChain(n);
        case "wallet_switchEthereumChain":
            return this._wallet_switchEthereumChain(n);
        case "wallet_watchAsset":
            return this._wallet_watchAsset(n)
        }
        return (await this.initializeRelay()).makeEthereumJSONRPCRequest(t, this.jsonRpcUrl).catch(s=>{
            var o;
            throw (s.code === se.standardErrorCodes.rpc.methodNotFound || s.code === se.standardErrorCodes.rpc.methodNotSupported) && ((o = this.diagnostic) === null || o === void 0 || o.log(xn.EVENTS.METHOD_NOT_IMPLEMENTED, {
                method: t.method,
                sessionIdHash: this._relay ? Mi.Session.hash(this._relay.session.id) : void 0
            })),
            s
        }
        )
    }
    _handleAsynchronousFilterMethods(t) {
        const {method: r} = t
          , n = t.params || [];
        switch (r) {
        case "eth_newFilter":
            return this._eth_newFilter(n);
        case "eth_newBlockFilter":
            return this._eth_newBlockFilter();
        case "eth_newPendingTransactionFilter":
            return this._eth_newPendingTransactionFilter();
        case "eth_getFilterChanges":
            return this._eth_getFilterChanges(n);
        case "eth_getFilterLogs":
            return this._eth_getFilterLogs(n)
        }
    }
    _handleSubscriptionMethods(t) {
        switch (t.method) {
        case "eth_subscribe":
        case "eth_unsubscribe":
            return this._subscriptionManager.handleRequest(t)
        }
    }
    _isKnownAddress(t) {
        try {
            const r = (0,
            re.ensureAddressString)(t);
            return this._addresses.map(i=>(0,
            re.ensureAddressString)(i)).includes(r)
        } catch {}
        return !1
    }
    _ensureKnownAddress(t) {
        var r;
        if (!this._isKnownAddress(t))
            throw (r = this.diagnostic) === null || r === void 0 || r.log(xn.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
            new Error("Unknown Ethereum address")
    }
    _prepareTransactionParams(t) {
        const r = t.from ? (0,
        re.ensureAddressString)(t.from) : this.selectedAddress;
        if (!r)
            throw new Error("Ethereum address is unavailable");
        this._ensureKnownAddress(r);
        const n = t.to ? (0,
        re.ensureAddressString)(t.to) : null
          , i = t.value != null ? (0,
        re.ensureBN)(t.value) : new tw.default(0)
          , s = t.data ? (0,
        re.ensureBuffer)(t.data) : Buffer.alloc(0)
          , o = t.nonce != null ? (0,
        re.ensureIntNumber)(t.nonce) : null
          , c = t.gasPrice != null ? (0,
        re.ensureBN)(t.gasPrice) : null
          , l = t.maxFeePerGas != null ? (0,
        re.ensureBN)(t.maxFeePerGas) : null
          , u = t.maxPriorityFeePerGas != null ? (0,
        re.ensureBN)(t.maxPriorityFeePerGas) : null
          , p = t.gas != null ? (0,
        re.ensureBN)(t.gas) : null
          , f = t.chainId ? (0,
        re.ensureIntNumber)(t.chainId) : this.getChainId();
        return {
            fromAddress: r,
            toAddress: n,
            weiValue: i,
            data: s,
            nonce: o,
            gasPriceInWei: c,
            maxFeePerGas: l,
            maxPriorityFeePerGas: u,
            gasLimit: p,
            chainId: f
        }
    }
    _isAuthorized() {
        return this._addresses.length > 0
    }
    _requireAuthorization() {
        if (!this._isAuthorized())
            throw se.standardErrors.provider.unauthorized({})
    }
    _throwUnsupportedMethodError() {
        throw se.standardErrors.provider.unsupportedMethod({})
    }
    async _signEthereumMessage(t, r, n, i) {
        this._ensureKnownAddress(r);
        try {
            const o = await (await this.initializeRelay()).signEthereumMessage(t, r, n, i).promise;
            if ((0,
            lt.isErrorResponse)(o))
                throw new Error(o.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: o.result
            }
        } catch (s) {
            throw typeof s.message == "string" && s.message.match(/(denied|rejected)/i) ? se.standardErrors.provider.userRejectedRequest("User denied message signature") : s
        }
    }
    async _ethereumAddressFromSignedMessage(t, r, n) {
        const s = await (await this.initializeRelay()).ethereumAddressFromSignedMessage(t, r, n).promise;
        if ((0,
        lt.isErrorResponse)(s))
            throw new Error(s.errorMessage);
        return {
            jsonrpc: "2.0",
            id: 0,
            result: s.result
        }
    }
    _eth_accounts() {
        return [...this._addresses]
    }
    _eth_coinbase() {
        return this.selectedAddress || null
    }
    _net_version() {
        return this.getChainId().toString(10)
    }
    _eth_chainId() {
        return (0,
        re.hexStringFromIntNumber)(this.getChainId())
    }
    getChainId() {
        const t = this._storage.getItem(Ml);
        if (!t)
            return (0,
            re.ensureIntNumber)(this._chainIdFromOpts);
        const r = parseInt(t, 10);
        return (0,
        re.ensureIntNumber)(r)
    }
    async _eth_requestAccounts() {
        var t;
        if ((t = this.diagnostic) === null || t === void 0 || t.log(xn.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::_eth_requestAccounts",
            addresses_length: this._addresses.length,
            sessionIdHash: this._relay ? Mi.Session.hash(this._relay.session.id) : void 0
        }),
        this._isAuthorized())
            return Promise.resolve({
                jsonrpc: "2.0",
                id: 0,
                result: this._addresses
            });
        let r;
        try {
            if (r = await (await this.initializeRelay()).requestEthereumAccounts().promise,
            (0,
            lt.isErrorResponse)(r))
                throw new Error(r.errorMessage)
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? se.standardErrors.provider.userRejectedRequest("User denied account authorization") : n
        }
        if (!r.result)
            throw new Error("accounts received is empty");
        return this._setAddresses(r.result),
        this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()),
        {
            jsonrpc: "2.0",
            id: 0,
            result: this._addresses
        }
    }
    _eth_sign(t) {
        this._requireAuthorization();
        const r = (0,
        re.ensureAddressString)(t[0])
          , n = (0,
        re.ensureBuffer)(t[1]);
        return this._signEthereumMessage(n, r, !1)
    }
    _eth_ecRecover(t) {
        const r = (0,
        re.ensureBuffer)(t[0])
          , n = (0,
        re.ensureBuffer)(t[1]);
        return this._ethereumAddressFromSignedMessage(r, n, !1)
    }
    _personal_sign(t) {
        this._requireAuthorization();
        const r = (0,
        re.ensureBuffer)(t[0])
          , n = (0,
        re.ensureAddressString)(t[1]);
        return this._signEthereumMessage(r, n, !0)
    }
    _personal_ecRecover(t) {
        const r = (0,
        re.ensureBuffer)(t[0])
          , n = (0,
        re.ensureBuffer)(t[1]);
        return this._ethereumAddressFromSignedMessage(r, n, !0)
    }
    async _eth_signTransaction(t) {
        this._requireAuthorization();
        const r = this._prepareTransactionParams(t[0] || {});
        try {
            const i = await (await this.initializeRelay()).signEthereumTransaction(r).promise;
            if ((0,
            lt.isErrorResponse)(i))
                throw new Error(i.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: i.result
            }
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? se.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n
        }
    }
    async _eth_sendRawTransaction(t) {
        const r = (0,
        re.ensureBuffer)(t[0])
          , i = await (await this.initializeRelay()).submitEthereumTransaction(r, this.getChainId()).promise;
        if ((0,
        lt.isErrorResponse)(i))
            throw new Error(i.errorMessage);
        return {
            jsonrpc: "2.0",
            id: 0,
            result: i.result
        }
    }
    async _eth_sendTransaction(t) {
        this._requireAuthorization();
        const r = this._prepareTransactionParams(t[0] || {});
        try {
            const i = await (await this.initializeRelay()).signAndSubmitEthereumTransaction(r).promise;
            if ((0,
            lt.isErrorResponse)(i))
                throw new Error(i.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: i.result
            }
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? se.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n
        }
    }
    async _eth_signTypedData_v1(t) {
        this._requireAuthorization();
        const r = (0,
        re.ensureParsedJSONObject)(t[0])
          , n = (0,
        re.ensureAddressString)(t[1]);
        this._ensureKnownAddress(n);
        const i = wo.default.hashForSignTypedDataLegacy({
            data: r
        })
          , s = JSON.stringify(r, null, 2);
        return this._signEthereumMessage(i, n, !1, s)
    }
    async _eth_signTypedData_v3(t) {
        this._requireAuthorization();
        const r = (0,
        re.ensureAddressString)(t[0])
          , n = (0,
        re.ensureParsedJSONObject)(t[1]);
        this._ensureKnownAddress(r);
        const i = wo.default.hashForSignTypedData_v3({
            data: n
        })
          , s = JSON.stringify(n, null, 2);
        return this._signEthereumMessage(i, r, !1, s)
    }
    async _eth_signTypedData_v4(t) {
        this._requireAuthorization();
        const r = (0,
        re.ensureAddressString)(t[0])
          , n = (0,
        re.ensureParsedJSONObject)(t[1]);
        this._ensureKnownAddress(r);
        const i = wo.default.hashForSignTypedData_v4({
            data: n
        })
          , s = JSON.stringify(n, null, 2);
        return this._signEthereumMessage(i, r, !1, s)
    }
    async _cbwallet_arbitrary(t) {
        const r = t[0]
          , n = t[1];
        if (typeof n != "string")
            throw new Error("parameter must be a string");
        if (typeof r != "object" || r === null)
            throw new Error("parameter must be an object");
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this.genericRequest(r, n)
        }
    }
    async _wallet_addEthereumChain(t) {
        var r, n, i, s;
        const o = t[0];
        if (((r = o.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0)
            return {
                jsonrpc: "2.0",
                id: 0,
                error: {
                    code: 2,
                    message: "please pass in at least 1 rpcUrl"
                }
            };
        if (!o.chainName || o.chainName.trim() === "")
            throw se.standardErrors.rpc.invalidParams("chainName is a required field");
        if (!o.nativeCurrency)
            throw se.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
        const c = parseInt(o.chainId, 16);
        return await this.addEthereumChain(c, (n = o.rpcUrls) !== null && n !== void 0 ? n : [], (i = o.blockExplorerUrls) !== null && i !== void 0 ? i : [], o.chainName, (s = o.iconUrls) !== null && s !== void 0 ? s : [], o.nativeCurrency) ? {
            jsonrpc: "2.0",
            id: 0,
            result: null
        } : {
            jsonrpc: "2.0",
            id: 0,
            error: {
                code: 2,
                message: "unable to add ethereum chain"
            }
        }
    }
    async _wallet_switchEthereumChain(t) {
        const r = t[0];
        return await this.switchEthereumChain(parseInt(r.chainId, 16)),
        {
            jsonrpc: "2.0",
            id: 0,
            result: null
        }
    }
    async _wallet_watchAsset(t) {
        const r = Array.isArray(t) ? t[0] : t;
        if (!r.type)
            throw se.standardErrors.rpc.invalidParams("Type is required");
        if ((r == null ? void 0 : r.type) !== "ERC20")
            throw se.standardErrors.rpc.invalidParams(`Asset of type '${r.type}' is not supported`);
        if (!(r != null && r.options))
            throw se.standardErrors.rpc.invalidParams("Options are required");
        if (!(r != null && r.options.address))
            throw se.standardErrors.rpc.invalidParams("Address is required");
        const n = this.getChainId()
          , {address: i, symbol: s, image: o, decimals: c} = r.options;
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this.watchAsset(r.type, i, s, c, o, n)
        }
    }
    _eth_uninstallFilter(t) {
        const r = (0,
        re.ensureHexString)(t[0]);
        return this._filterPolyfill.uninstallFilter(r)
    }
    async _eth_newFilter(t) {
        const r = t[0];
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newFilter(r)
        }
    }
    async _eth_newBlockFilter() {
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newBlockFilter()
        }
    }
    async _eth_newPendingTransactionFilter() {
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newPendingTransactionFilter()
        }
    }
    _eth_getFilterChanges(t) {
        const r = (0,
        re.ensureHexString)(t[0]);
        return this._filterPolyfill.getFilterChanges(r)
    }
    _eth_getFilterLogs(t) {
        const r = (0,
        re.ensureHexString)(t[0]);
        return this._filterPolyfill.getFilterLogs(r)
    }
    initializeRelay() {
        return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then(t=>(t.setAccountsCallback((r,n)=>this._setAddresses(r, n)),
        t.setChainCallback((r,n)=>{
            this.updateProviderInfo(n, parseInt(r, 10))
        }
        ),
        t.setDappDefaultChainCallback(this._chainIdFromOpts),
        this._relay = t,
        t))
    }
}
on.CoinbaseWalletProvider = ow;
var Ps = {};
Object.defineProperty(Ps, "__esModule", {
    value: !0
});
Ps.RelayEventManager = void 0;
const aw = z;
class cw {
    constructor() {
        this._nextRequestId = 0,
        this.callbacks = new Map
    }
    makeRequestId() {
        this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
        const t = this._nextRequestId
          , r = (0,
        aw.prepend0x)(t.toString(16));
        return this.callbacks.get(r) && this.callbacks.delete(r),
        t
    }
}
Ps.RelayEventManager = cw;
Object.defineProperty(On, "__esModule", {
    value: !0
});
On.CoinbaseWalletSDK = void 0;
const lw = Di
  , uw = Fi
  , kl = z
  , hw = qi
  , dw = on
  , fw = Vn
  , pw = ti
  , gw = Ps
  , _w = Kn
  , mw = qn
  , hd = mn;
class $s {
    constructor(t) {
        var r, n, i;
        this._appName = "",
        this._appLogoUrl = null,
        this._relay = null,
        this._relayEventManager = null;
        const s = t.linkAPIUrl || uw.LINK_API_URL;
        typeof t.overrideIsMetaMask > "u" ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = t.overrideIsMetaMask,
        this._overrideIsCoinbaseWallet = (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0,
        this._overrideIsCoinbaseBrowser = (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1,
        this._diagnosticLogger = t.diagnosticLogger,
        this._reloadOnDisconnect = (i = t.reloadOnDisconnect) !== null && i !== void 0 ? i : !0;
        const o = new URL(s)
          , c = `${o.protocol}//${o.host}`;
        if (this._storage = new hw.ScopedLocalStorage(`-walletlink:${c}`),
        this._storage.setItem("version", $s.VERSION),
        this.walletExtension || this.coinbaseBrowser)
            return;
        this._relayEventManager = new gw.RelayEventManager;
        const l = (0,
        kl.isMobileWeb)()
          , u = t.uiConstructor || (f=>l ? new pw.MobileRelayUI(f) : new _w.WalletLinkRelayUI(f))
          , p = {
            linkAPIUrl: s,
            version: hd.LIB_VERSION,
            darkMode: !!t.darkMode,
            uiConstructor: u,
            storage: this._storage,
            relayEventManager: this._relayEventManager,
            diagnosticLogger: this._diagnosticLogger,
            reloadOnDisconnect: this._reloadOnDisconnect,
            enableMobileWalletLink: t.enableMobileWalletLink
        };
        this._relay = l ? new fw.MobileRelay(p) : new mw.WalletLinkRelay(p),
        this.setAppInfo(t.appName, t.appLogoUrl),
        !t.headlessMode && this._relay.attachUI()
    }
    makeWeb3Provider(t="", r=1) {
        const n = this.walletExtension;
        if (n)
            return this.isCipherProvider(n) || n.setProviderInfo(t, r),
            this._reloadOnDisconnect === !1 && typeof n.disableReloadOnDisconnect == "function" && n.disableReloadOnDisconnect(),
            n;
        const i = this.coinbaseBrowser;
        if (i)
            return i;
        const s = this._relay;
        if (!s || !this._relayEventManager || !this._storage)
            throw new Error("Relay not initialized, should never happen");
        return t || s.setConnectDisabled(!0),
        new dw.CoinbaseWalletProvider({
            relayProvider: ()=>Promise.resolve(s),
            relayEventManager: this._relayEventManager,
            storage: this._storage,
            jsonRpcUrl: t,
            chainId: r,
            qrUrl: this.getQrUrl(),
            diagnosticLogger: this._diagnosticLogger,
            overrideIsMetaMask: this._overrideIsMetaMask,
            overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
            overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
        })
    }
    setAppInfo(t, r) {
        var n;
        this._appName = t || "DApp",
        this._appLogoUrl = r || (0,
        kl.getFavicon)();
        const i = this.walletExtension;
        i ? this.isCipherProvider(i) || i.setAppInfo(this._appName, this._appLogoUrl) : (n = this._relay) === null || n === void 0 || n.setAppInfo(this._appName, this._appLogoUrl)
    }
    disconnect() {
        var t;
        const r = this === null || this === void 0 ? void 0 : this.walletExtension;
        r ? r.close() : (t = this._relay) === null || t === void 0 || t.resetAndReload()
    }
    getQrUrl() {
        var t, r;
        return (r = (t = this._relay) === null || t === void 0 ? void 0 : t.getQRCodeUrl()) !== null && r !== void 0 ? r : null
    }
    getCoinbaseWalletLogo(t, r=240) {
        return (0,
        lw.walletLogo)(t, r)
    }
    get walletExtension() {
        var t;
        return (t = window.coinbaseWalletExtension) !== null && t !== void 0 ? t : window.walletLinkExtension
    }
    get coinbaseBrowser() {
        var t, r;
        try {
            const n = (t = window.ethereum) !== null && t !== void 0 ? t : (r = window.top) === null || r === void 0 ? void 0 : r.ethereum;
            return n && "isCoinbaseBrowser"in n && n.isCoinbaseBrowser ? n : void 0
        } catch {
            return
        }
    }
    isCipherProvider(t) {
        return typeof t.isCipher == "boolean" && t.isCipher
    }
}
On.CoinbaseWalletSDK = $s;
$s.VERSION = hd.LIB_VERSION;
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.CoinbaseWalletProvider = e.CoinbaseWalletSDK = void 0;
    const t = On
      , r = on;
    var n = On;
    Object.defineProperty(e, "CoinbaseWalletSDK", {
        enumerable: !0,
        get: function() {
            return n.CoinbaseWalletSDK
        }
    });
    var i = on;
    Object.defineProperty(e, "CoinbaseWalletProvider", {
        enumerable: !0,
        get: function() {
            return i.CoinbaseWalletProvider
        }
    }),
    e.default = t.CoinbaseWalletSDK,
    typeof window < "u" && (window.CoinbaseWalletSDK = t.CoinbaseWalletSDK,
    window.CoinbaseWalletProvider = r.CoinbaseWalletProvider,
    window.WalletLink = t.CoinbaseWalletSDK,
    window.WalletLinkProvider = r.CoinbaseWalletProvider)
}
)(Ho);
const vw = dd(Ho)
  , Nw = fd({
    __proto__: null,
    default: vw
}, [Ho]);
export {Nw as i};
