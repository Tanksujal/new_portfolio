function Dw(Uc) {
    var Fe = 0;
    return function() {
        return Fe < Uc.length ? {
            done: !1,
            value: Uc[Fe++]
        } : {
            done: !0
        }
    }
}
var Ew = "function" == typeof Object.defineProperties ? Object.defineProperty : function(Uc, Fe, Qe) {
    if (Uc == Array.prototype || Uc == Object.prototype) return Uc;
    Uc[Fe] = Qe.value;
    return Uc
};

function Fw(Uc) {
    Uc = ["object" == typeof globalThis && globalThis, Uc, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var Fe = 0; Fe < Uc.length; ++Fe) {
        var Qe = Uc[Fe];
        if (Qe && Qe.Math == Math) return Qe
    }
    throw Error("Cannot find global object");
}
var Gw = Fw(this);

function Hw(Uc, Fe) {
    if (Fe) a: {
        for (var Qe = Gw, sg = Uc.split("."), Vh = 0; Vh < sg.length - 1; Vh++) {
            var Mg = sg[Vh];
            if (!(Mg in Qe)) break a;
            Qe = Qe[Mg]
        }
        sg = sg[sg.length - 1];Vh = Qe[sg];Mg = Fe(Vh);Mg != Vh && null != Mg && Ew(Qe, sg, {
            configurable: !0,
            writable: !0,
            value: Mg
        })
    }
}
Hw("Symbol", function(Uc) {
    function Fe(Mg) {
        if (this instanceof Fe) throw new TypeError("Symbol is not a constructor");
        return new Qe(sg + (Mg || "") + "_" + Vh++, Mg)
    }

    function Qe(Mg, bk) {
        this.tl = Mg;
        Ew(this, "description", {
            configurable: !0,
            writable: !0,
            value: bk
        })
    }
    if (Uc) return Uc;
    Qe.prototype.toString = function() {
        return this.tl
    };
    var sg = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
        Vh = 0;
    return Fe
});
Hw("Symbol.iterator", function(Uc) {
    if (Uc) return Uc;
    Uc = Symbol("Symbol.iterator");
    for (var Fe = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), Qe = 0; Qe < Fe.length; Qe++) {
        var sg = Gw[Fe[Qe]];
        "function" === typeof sg && "function" != typeof sg.prototype[Uc] && Ew(sg.prototype, Uc, {
            configurable: !0,
            writable: !0,
            value: function() {
                return Iw(Dw(this))
            }
        })
    }
    return Uc
});

function Iw(Uc) {
    Uc = {
        next: Uc
    };
    Uc[Symbol.iterator] = function() {
        return this
    };
    return Uc
}
try {
    (function() {
        function Uc(a, c, b, d) {
            var e = this;
            return va(window, "c.i", function() {
                function f(Ua) {
                    (Ua = cb(x, I, "", Ua)(x, I)) && (Da(Ua.then) ? Ua.then(g) : g(Ua));
                    return Ua
                }

                function g(Ua) {
                    Ua && (Da(Ua) ? P.push(Ua) : wb(Ua) && ia(function(Wa) {
                        var Tb = Wa[0];
                        Wa = Wa[1];
                        Da(Wa) && ("u" === Tb ? P.push(Wa) : h(Wa, Tb))
                    }, $b(Ua)))
                }

                function h(Ua, Wa, Tb) {
                    e[Wa] = Ng(x, I, Tb || T, Wa, Ua)
                }
                var l, n, x = window;
                (!x || isNaN(a) && !a) && ee();
                var I = qi(a, Qm, c, b, d),
                    P = [],
                    T = [Fe, cb, Qe];
                T.unshift(ri);
                var ba = qa(Za, Wd),
                    ka = W(I);
                I.id || fa(ub("Invalid Metrika id: " + I.id, !0));
                var Ka = xl.C("counters", {});
                if (Ka[ka]) return Mc(x, ka, "dc", (l = {}, l.key = ka, l)), Ka[ka];
                Vh(x, ka, I);
                Ka[ka] = e;
                xl.D("counters", Ka);
                xl.ta("counter", e);
                ia(function(Ua) {
                    Ua(x, I)
                }, Wn);
                ia(f, yl);
                f(Ar);
                h(Br(x, I, P), "destruct", [Fe, Qe]);
                oc(x, ra([x, ba, f, 1, "a.i"], zl));
                ia(f, xb);
                fe(x, (n = {}, n.counterKey = W(I), n.name = "counter", n.data = tg(I), n))
            })()
        }

        function Fe(a, c, b, d) {
            return va(a, "cm." + b, d)
        }

        function Qe(a, c, b, d) {
            return function() {
                var e = lc(arguments);
                e = d.apply(void 0, e);
                return db(e) ? Wb(a, c) : e
            }
        }

        function sg(a, c) {
            delete K(a).C("cok", {})[c]
        }

        function Vh(a, c, b) {
            a = K(a);
            var d = a.C("cok", {});
            d[c] = b;
            a.D("cok", d)
        }

        function Mg(a, c) {
            var b = "" + c,
                d = {
                    id: 1,
                    $: "0"
                },
                e = Cr(b);
            e ? d.id = e : -1 === xe(b, ":") ? (b = Nc(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Nc(b[0]), d.$ = Na(e) ? "1" : "0");
            return [Wb(a, d), d]
        }

        function bk(a, c) {
            function b(e) {
                var f = za(d, e.permissionType) && d[e.permissionType];
                if (f) {
                    var g = Ch(e, c);
                    if (Oc(function(h) {
                            try {
                                return !1 === h(g, c)
                            } catch (l) {
                                return !0
                            }
                        }, f)) return !1
                }
                return Gk(a, e)
            }
            var d = {};
            return {
                Ji: function(e, f) {
                    Ta(e) && Da(f) && (za(d, e) || (d[e] = []), d[e].push(f))
                },
                checkPermission: function(e) {
                    if (!b(e)) {
                        e = Ch(e, c);
                        var f = Error("Permission denied for " + e.permissionType);
                        f.Pk = e;
                        fa(f)
                    }
                },
                Ta: b
            }
        }

        function Ch(a, c) {
            return {
                containerId: c,
                permissionType: a.permissionType,
                permissionParams: a.permissionParams
            }
        }

        function Gk(a, c) {
            var b = c.permissionType,
                d = c.permissions,
                e = c.permissionParams;
            if ("globals" === b || "localStorage" === b || "dataLayer" === b) {
                var f = e.key;
                e = e.operation;
                za(d, b) ? (d = d[b], b = "dataLayer" === b && za(d, "ytm.ks.*") && d["ytm.ks.*"] & e ? !0 : za(d, f) ? !!(d[f] & e) : !1) : b = !1
            } else "url" ===
                b || "referrer" === b ? (f = e.urlComponent, e = e.variableName, za(d, b) ? (b = d[b], b = "queryVars" === f ? za(b, f) && e ? Ia(e, b[f]) : !1 : !!b[f]) : b = !1) : "log" === b ? (b = e.logLevel, b = za(d, "log") ? b >= d.log : !1) : "loadScript" === b || "pixel" === b || "iframe" === b ? (f = e.url, za(d, b) && za(d[b], "allow") ? (b = d[b], b = Oc(ra([a, f], Al), b.allow)) : b = !1) : b = "cookies" === b ? Bl(d, e.name, e.operation, e.options) : "readTitle" === b ? za(d, "readTitle") ? d.readTitle : !1 : !1;
            return b
        }

        function Bl(a, c, b, d) {
            if (!za(a, "cookies")) return !1;
            var e = a.cookies;
            a = za(e, c) ? e[c] : {
                access: 0
            };
            if (2 === b) return za(e, "ytm.ks.*") || !!(a.access & b);
            if (1 === b) {
                if (!za(e, c) || !d) return !1;
                c = a.access;
                e = a.domain;
                var f = a.path,
                    g = a.secure,
                    h = a.ml,
                    l = !Ma(d.expires) || !Ma(d["max-age"]);
                if (za(a, "session") && h)
                    if (1 === h) {
                        if (l) return !1
                    } else if (!l) return !1;
                return !(c & b) || za(a, "domain") && e !== d.domain || za(a, "path") && f !== d.path || za(a, "secure") && (1 === g && !d.secure || 2 === g && d.secure) ? !1 : !0
            }
            return !1
        }

        function Al(a, c, b) {
            c = Af(a, c);
            if (!c.protocol || "https:" !== c.protocol) return !1;
            a = Af(a, b);
            return c.host && a.host && (Pi(a.host, "*.") ?
                Hk(c.host, a.host.substring(2)) : c.host === a.host) ? "/" === a.pathname ? !0 : Hk(a.pathname, "/*") ? Pi(c.pathname, a.pathname.substring(0, a.pathname.length - 2)) : a.pathname === c.pathname : !1
        }

        function Hk(a, c) {
            return c.length > a.length ? !1 : a.substring(a.length - c.length) === c
        }

        function jm(a, c, b) {
            var d = c.triggers,
                e = c.variables;
            return {
                dispatchEvent: function(f) {
                    var g = Oa(function(h, l) {
                        Oc(function(n) {
                            return !Dr(a, f, n, e)
                        }, l.conditions) || ia(function(n) {
                            Ia(n, h) || h.push(n)
                        }, l.tags);
                        return h
                    }, [], d);
                    0 === g.length || ck(a, c, f, g, b)
                }
            }
        }

        function ck(a,
            c, b, d, e) {
            ia(hg("t.e", function(f) {
                var g = c.tags[f],
                    h = c.permissions[f];
                if (!g || !h) throw ub("i.conf." + c.containerVersion + "-" + f);
                h = {
                    ja: e,
                    permissions: h
                };
                "pro" === g.type ? $k(a, c, b, g, h) : "pix" === g.type && (f = h.ja, h = h.permissions, g = g.data.pixelUrl, Ta(g) && (f.checkPermission({
                    permissions: h,
                    permissionType: "pixel",
                    permissionParams: {
                        url: g
                    }
                }), Lj(a, g, sa, sa)))
            }), Og(function(f, g) {
                return f - g
            }, d))
        }

        function $k(a, c, b, d, e) {
            c = d.data;
            e = Ik(e.permissions, e.ja);
            d = Oa(function(f, g) {
                var h = g[0],
                    l = g[1];
                l = (db(l), l);
                f[h] = dd(a, l);
                return f
            }, {}, $b(d.settings || {}));
            km(a, c, {
                ja: e,
                data: d,
                event: b
            })
        }

        function Ik(a, c) {
            return {
                checkPermission: function(b) {
                    b = na({
                        permissions: a
                    }, b);
                    c.checkPermission(b)
                },
                Ta: function(b) {
                    b = na({
                        permissions: a
                    }, b);
                    return c.Ta(b)
                }
            }
        }

        function km(a, c, b) {
            var d, e;
            c = c.slice(2);
            a = {
                ja: b.ja,
                l: a,
                event: b.event
            };
            b = na(b.data, (d = {}, d.ytmOnFailure = sa, d.ytmOnSuccess = sa, d));
            d = Dh([], (e = {}, e.undefined = {
                kind: 0,
                value: void 0
            }, e.require = {
                kind: 0,
                value: ca(Cl, Vb(Va)(a))
            }, e.data = {
                kind: 0,
                value: b
            }, e));
            Wh(d, Mj([3], c))
        }

        function Wh(a, c, b, d) {
            c = c.slice(1);
            a = Dh(a, b, d);
            b = a[a.length - 1];
            for (d = 0; d < c.length && b.Td; d += 1) si(a, c[d])
        }

        function si(a, c) {
            if (Ja(c) && 3 === c[0]) Wh(a, c);
            else if (dk(c)) ek(a, c);
            else if (Ja(c) && 2 === c[0]) Gb(a, c[1]);
            else if (Ja(c) && 7 === c[0]) {
                var b = c[2],
                    d = c[3];
                Gb(a, c[1]) ? si(a, b) : d && si(a, d)
            } else if (8 === c[0]) {
                b = c.slice(2);
                for (var e = d = !1, f = [], g = [], h = Gb(a, c[1]), l = 0; l < b.length; l += 1) {
                    var n = b[l],
                        x = n[1];
                    n = n.slice(2);
                    var I = Kc(x);
                    e = e || I;
                    I || (d = d || Gb(a, x) === h);
                    d && (f = f.concat(n));
                    e && (g = g.concat(n))
                }
                Wh(a, Mj([3], d ? f : g), {}, {
                    "break": sa
                })
            } else if (Ja(c) && 4 === c[0]) lm(a,
                c);
            else if (Ja(c) && 5 === c[0]) ph(a, "break", "ibs");
            else if (Ja(c) && 6 === c[0]) ph(a, "continue", "ics");
            else if (Ja(c) && 15 === c[0])
                for (g = c[1], b = c[2], d = c[3], e = c[4], f = Fm(a), g && (dk(g) ? ek(f.stack, g) : Gb(f.stack, g)), g = !0; g && (!b || Gb(f.stack, b));) g = f, h = g.Si, si(g.stack, e), g.bf && (h.Td = !0, g.bf = !1), g = h.Td, d && g && Gb(f.stack, d)
        }

        function Fm(a, c) {
            var b = {
                    bf: !1
                },
                d = Dh(a, c, {
                    "continue": function() {
                        b.bf = !0
                    },
                    "break": sa
                });
            b.stack = d;
            b.Si = d[d.length - 1];
            return b
        }

        function lm(a, c) {
            var b = c[1];
            ph(a, "return", "irs", function() {
                return db(b) ? b : Gb(a,
                    b)
            })
        }

        function ek(a, c) {
            var b = 18 === c[0];
            ia(function(d) {
                var e = d[0],
                    f = d[1];
                if (b && 1 === d.length) throw ub("mca");
                d = a[a.length - 1].hg;
                if (za(d, e)) throw ub("vr");
                f = db(f) ? f : Gb(a, f);
                d[e] = {
                    kind: b ? 0 : 1,
                    value: f
                }
            }, c.slice(1))
        }

        function dk(a) {
            return Ja(a) && (18 === a[0] || 19 === a[0])
        }

        function Gb(a, c) {
            if (Ta(c) || "[object Number]" === Object.prototype.toString.call(c) || !!c === c || Qi(c)) return Qi(c) ? null : c;
            if (rj(c)) {
                var b = Xh(a, c[1]);
                if (!b) throw ub("vnd");
                return b.value
            }
            if (Ja(c) && 37 === c[0]) {
                var d = c.slice(2);
                b = Gb(a, c[1]);
                if (!Da(b)) throw ub("tenf");
                d = qa(aa(a, Gb), d);
                return b.apply(null, d)
            }
            if (Ja(c) && 24 === c[0]) return ug(a, c);
            if (Eh(c)) {
                d = c[2];
                b = Gb(a, c[1]);
                d = Gb(a, d);
                if (!b) throw ub("noma");
                return b["" + d]
            }
            if (Ja(c) && 23 === c[0]) return Jk(a, c);
            if (Ja(c) && 22 === c[0]) return Kk(a, c);
            if (Ja(c) && 29 === c[0]) return Ri(a, c);
            if (Ja(c) && 25 === c[0]) return al(a, c);
            if (Ja(c) && 27 === c[0]) {
                var e = c[2];
                b = c[3];
                switch (c[1]) {
                    case "++":
                        d = "+=";
                        break;
                    case "--":
                        d = "-=";
                        break;
                    default:
                        throw ub("uo");
                }
                e ? b = Nj(a, b, 1, d) : (e = Gb(a, b), Nj(a, b, 1, d), b = e);
                return b
            }
            if (Ja(c) && 31 === c[0]) return b = c[1],
                d = c[2], e = Gb(a, c[3]), Nj(a, d, e, b);
            if (Ja(c) && 33 === c[0]) return Dl(a, c);
            if (Ja(c) && 36 === c[0]) return b = c[2], d = c[3], e = Gb(a, c[1]), Gb(a, e ? b : d)
        }

        function Dl(a, c) {
            var b = c[1],
                d = c[2],
                e = c[3];
            if ("&&" === b) return b = Gb(a, d), b ? e = Gb(a, e) : b;
            if ("||" === b) return (b = Gb(a, d)) ? b : e = Gb(a, e);
            throw ub("uo");
        }

        function Nj(a, c, b, d) {
            c = fk(a, c);
            a = c.dk;
            var e = c.Pj;
            e.unshift("value");
            c = e.pop();
            a = Oa(function(f, g) {
                return f[g]
            }, a, e);
            switch (d) {
                case "=":
                    return a[c] = b;
                case "+=":
                    return a[c] += b;
                case "-=":
                    return a[c] -= b;
                case "*=":
                    return a[c] *= b;
                case "/=":
                    return a[c] /=
                        b;
                case "%=":
                    return a[c] %= b;
                case "<<=":
                    return a[c] <<= b;
                case ">>=":
                    return a[c] >>= b;
                case ">>>=":
                    return a[c] >>>= b;
                case "|=":
                    return a[c] |= b;
                case "^=":
                    return a[c] ^= b;
                case "&=":
                    return a[c] &= b;
                default:
                    throw ub("uo");
            }
        }

        function fk(a, c, b) {
            void 0 === b && (b = []);
            if (rj(c)) {
                a = Xh(a, c[1]);
                if (!a) throw ub("vnd");
                if (0 === a.kind && 0 === b.length) throw ub("cva");
                return {
                    Pj: b,
                    dk: a
                }
            }
            if (Eh(c)) {
                var d = c[1];
                c = Gb(a, c[2]);
                b.push("" + c);
                return fk(a, d, b)
            }
            throw ub("iat");
        }

        function al(a, c) {
            var b = c[1],
                d = Gb(a, c[2]);
            switch (b) {
                case "+":
                    return +d;
                case "!":
                    return !d;
                case "-":
                    return -d;
                case "~":
                    return ~d;
                default:
                    throw ub("uo");
            }
        }

        function Ri(a, c) {
            var b = c[1],
                d = c[3],
                e = Gb(a, c[2]);
            d = Gb(a, d);
            switch (b) {
                case "==":
                    return e == d;
                case "!=":
                    return e != d;
                case "===":
                    return e === d;
                case "!==":
                    return e !== d;
                case "<":
                    return e < d;
                case "<=":
                    return e <= d;
                case ">":
                    return e > d;
                case ">=":
                    return e >= d;
                case "<<":
                    return e << d;
                case ">>":
                    return e >> d;
                case ">>>":
                    return e >>> d;
                case "+":
                    return e + d;
                case "-":
                    return e - d;
                case "*":
                    return e * d;
                case "/":
                    return e / d;
                case "%":
                    return e % d;
                case "|":
                    return e |
                        d;
                case "^":
                    return e ^ d;
                case "&":
                    return e & d;
                case "in":
                    return e in d;
                case "instanceof":
                    return e instanceof d;
                default:
                    throw ub("uo");
            }
        }

        function Kk(a, c) {
            return qa(function(b) {
                return Gb(a, b)
            }, c.slice(1))
        }

        function rj(a) {
            return Ja(a) && 40 === a[0]
        }

        function Jk(a, c) {
            return Oa(function(b, d) {
                var e = d[1],
                    f = Gb(a, d[0]);
                e = Gb(a, e);
                b["" + f] = e;
                return b
            }, {}, c.slice(1))
        }

        function Eh(a) {
            return Ja(a) && 35 === a[0]
        }

        function Qi(a) {
            return Ja(a) && 42 === a[0]
        }

        function ug(a, c) {
            var b = c[1],
                d = c[2],
                e = c[3],
                f = qa(Za, a);
            return function() {
                var g =
                    arguments,
                    h = Oa(function(n, x, I) {
                        if (n[x]) throw ub("da");
                        n[x] = {
                            kind: 1,
                            value: g[I]
                        };
                        return n
                    }, {}, d);
                b && !Ia(b, d) && (h[b] = {
                    kind: 0,
                    value: b
                });
                var l;
                Wh(f, e, h, {
                    "return": function(n) {
                        l = n
                    }
                });
                return l
            }
        }

        function ph(a, c, b, d) {
            for (var e = a.length - 1; 0 <= e; --e) {
                var f = a[e];
                f.Td = !1;
                if (za(f.methods, c)) {
                    f.methods[c](d ? d() : void 0);
                    return
                }
            }
            throw ub(b);
        }

        function Dh(a, c, b) {
            void 0 === c && (c = {});
            void 0 === b && (b = {});
            var d = a.concat;
            void 0 === c && (c = {});
            void 0 === b && (b = {});
            return d.call(a, {
                hg: c,
                methods: b,
                Td: !0
            })
        }

        function Xh(a, c) {
            for (var b =
                    a.length; 0 < b;) {
                var d = a[--b];
                if (za(d.hg, c)) return d.hg[c]
            }
        }

        function Cl(a) {
            return za(Cp, a) ? Cp[a] : void 0
        }

        function hd(a, c, b) {
            if (!b) return !1;
            var d = "iframe";
            "load_script" === c ? d = "loadScript" : "send_pixel" === c && (d = "pixel");
            return a.Ta({
                permissionType: d,
                permissionParams: {
                    url: b
                }
            })
        }

        function Yh(a, c, b, d) {
            c = "access_local_storage" === c ? "localStorage" : "globals";
            if (!b || !Ta(b) || !Ta(d)) return !1;
            switch (b) {
                case "read":
                    b = 2;
                    break;
                case "write":
                    b = 1;
                    break;
                case "execute":
                    b = 4;
                    break;
                default:
                    return !1
            }
            return a.Ta({
                permissionType: c,
                permissionParams: {
                    key: d,
                    operation: b
                }
            })
        }

        function Fh(a, c, b, d) {
            if (!b) return !1;
            var e = (c = "set_cookies" === c) ? 1 : 2;
            return c && !wb(d) ? !1 : a.Ta({
                permissionType: "cookies",
                permissionParams: {
                    name: b,
                    operation: e,
                    options: d
                }
            })
        }

        function Lj(a, c, b, d) {
            var e = Ge(a)("img");
            e.src = c;
            c = aa(e, He);
            var f = aa(void 0, Za);
            e.onerror = ca(c, f, d);
            e.onload = ca(c, f, b);
            sj(a) && (a = ye(a), na(e.style, {
                position: "absolute",
                visibility: "hidden",
                width: "0px",
                height: "0px"
            }), a.appendChild(e))
        }

        function Rf(a, c) {
            var b = c.split("."),
                d = b.pop();
            b = b.length ? F(a, Ha(".",
                b)) : a;
            if (!b) throw ub("noma");
            return {
                value: F(b, d),
                parent: b,
                we: d
            }
        }

        function dd(a, c) {
            if (Ma(c) || !!c === c || Gd(a, c) || Ta(c)) return c;
            if (wb(c)) return Oa(function(b, d) {
                b[d[0]] = dd(a, d[1]);
                return b
            }, {}, $b(c));
            if (Ja(c)) return qa(aa(a, dd), c)
        }

        function Cc(a) {
            if (!Ta(a)) throw ub("gppns");
            if (Ia(a.split(".")[0], Er)) throw ub("rwp");
        }

        function El(a, c) {
            if ("eq" === c) return gk;
            if ("more" === c) return aa(a, Si);
            if ("less" === c) return aa(a, Lk);
            if ("regex" === c) return Oj;
            if ("inc" === c) return Fl
        }

        function Pj(a, c, b) {
            var d = c.key;
            c = c.defaultValue;
            b && b.ja.checkPermission({
                permissions: b.permissions,
                permissionType: "dataLayer",
                permissionParams: {
                    key: d,
                    operation: 2
                }
            });
            a = F(a, d);
            return db(a) ? c : a
        }

        function Fl(a, c) {
            return Ja(a) ? Ia(c, a) : Ta(a) ? od(a, "" + c) : !1
        }

        function Oj(a, c) {
            if (!Ta(a) || !Ta(c)) return !1;
            try {
                return (new RegExp(c)).test(a)
            } catch (b) {
                return !1
            }
        }

        function Lk(a, c, b) {
            return Ti(a, c) && Ti(a, b) ? c < b : !1
        }

        function Si(a, c, b) {
            return Ti(a, c) && Ti(a, b) ? c > b : !1
        }

        function gk(a, c) {
            return a === c
        }

        function Gl(a) {
            Fr(a, function(c, b) {
                dh(a, "ytm." + c, b)
            })
        }

        function hg(a, c, b) {
            return function() {
                try {
                    return c.apply(null,
                        arguments)
                } catch (d) {
                    Dp(a, d)
                }
                return b
            }
        }

        function mm(a, c, b, d) {
            void 0 === d && (d = "dataLayer");
            var e = [],
                f = [];
            ia(function(g) {
                g.startsWith("ytm.") ? (g = Mk(a, g, c)) && e.push(g) : f.push(g)
            }, b);
            b = F(a, d);
            b || (b = [], a[d] = b);
            Ld(a, b, function(g) {
                g.Aa.F(function(h) {
                    var l = F(h, "event");
                    Ta(l) && Ia(l, f) && c(h)
                });
                e.push(g.unsubscribe)
            });
            return function() {
                return ia(Va, e)
            }
        }

        function Mk(a, c, b) {
            if ("ytm.linkClick" === c) return Nk(a, b);
            b = ra([a, b], hk);
            if ("ytm.click" === c) return b("ytm.click", ["click"]);
            if ("ytm.dom" === c) return b("ytm.dom", ["DOMContentLoaded"]);
            if ("ytm.load" === c) return b("ytm.load", ["load"], a);
            if ("ytm.formSubmit" === c) return b("ytm.formSubmit", ["submit"])
        }

        function hk(a, c, b, d, e) {
            void 0 === e && (e = a.document);
            return Qb(a).F(e, d, function(f) {
                c(Zh(a, b, f.target))
            })
        }

        function Nk(a, c) {
            return Qb(a).F(a.document, ["click"], function(b) {
                "A" === b.target.nodeName && c(Zh(a, "ytm.linkClick", b.target))
            })
        }

        function Zh(a, c, b) {
            return Gr.includes(c) ? (a = {
                    element: b,
                    elementClasses: Yf(b.classList),
                    elementText: b.innerText,
                    elementId: b.getAttribute("id"),
                    elementUrl: null
                }, a.elementUrl =
                "ytm.formSubmit" === c ? b.getAttribute("action") : b.getAttribute("href"), {
                    event: c,
                    ytm: a
                }) : "ytm.init" === c ? {
                event: c,
                ytm: {
                    timestamp: Jb(a)(nb)
                }
            } : {
                event: c,
                ytm: {}
            }
        }

        function qh(a) {
            var c = a[1];
            return "bp" === a[0] ? ["p", ic(Fc(c))] : a
        }

        function Gh(a) {
            return {
                Oj: v(a.element),
                nf: a.nf
            }
        }

        function Qj(a) {
            if (!a) return "";
            a = a.match(Hr);
            if (!a || 0 === a.length) return "";
            var c = Ir();
            return "//HTML/BODY/" + Oa(function(b, d) {
                var e = d[0],
                    f = Nc(d.slice(1));
                return "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b
            }, "", a)
        }

        function Hl(a) {
            return Ep(a) || Jr(a)
        }

        function bl(a,
            c) {
            var b = c.patterns;
            return 0 === b.length ? !1 : Oc(aa(a, ti), b)
        }

        function tj(a, c) {
            var b = c.patterns;
            if (0 === b.length) return !1;
            if (1 === b.length) return ti(a, b[0]);
            b = Oa(function(f, g) {
                var h = g[0],
                    l = g[1],
                    n = a[h];
                if (n === l) {
                    if (f.lf += 1, "i" === h || "c" === h) f.nh = !0
                } else n && "p" === h && Fp(n) === Fp(l) && (f.oh = !0);
                return f
            }, {
                lf: 0,
                nh: !1,
                oh: !1
            }, b);
            var d = b.nh,
                e = b.oh;
            return 2 <= b.lf || d && e
        }

        function ti(a, c) {
            var b = a[c[0]];
            return !(!b || b !== c[1])
        }

        function ik(a) {
            ia(function(c) {
                    var b = c.event;
                    c = c.data;
                    var d = aa(b, Ui);
                    "bidTimeout" === b ? ia(d, c) : d(c)
                },
                a)
        }

        function Ui(a, c) {
            if (Ia(a, Kr)) {
                var b = F(c, "auctionId") || F(c, "bid.auctionId") || void 0;
                if (b) {
                    Hh[b] || (Hh[b] = {
                        te: {}
                    });
                    b = Hh[b];
                    var d = "auctionInit" === a,
                        e = "auctionEnd" === a,
                        f = "adRenderFailed" === a || "adRenderSucceeded" === a;
                    f || b.Ge && !d || (b.Ge = F(c, "auctionStart") || void 0, !b.Ge && d && (b.Ge = c.timestamp));
                    var g = ra([a, b], rh);
                    "bidRequested" === a ? ia(g, c.bids) : f ? ui(a, b, c) : e ? (b.bh = c.auctionEnd || c.timestamp, b.Rj = fb(function(h, l, n) {
                        return A(h, n) === l
                    }, qa(S("bidderCode"), c.bidderRequests))) : d || g(c);
                    b.bh && (b.qa = !0)
                }
            }
        }

        function ui(a,
            c, b) {
            var d, e = b.bid,
                f = e.bidderCode || e.bidder;
            e = e.adUnitCode;
            f && e && (c = Pg(c, e), c.nd || (c.nd = {}), a = "adRenderSucceeded" === a, c.nd[f] = (d = {}, d.success = a, d), a || (c.nd[f].reason = b.reason, c.nd[f].message = b.message))
        }

        function rh(a, c, b) {
            var d = b.adUnitCode,
                e = b.bidderCode || b.bidder;
            if (e && d) {
                var f = Pg(c, d);
                !f.If && b.mediaTypes && (f.If = {}, ia(function(g) {
                    var h = g[0];
                    g = g[1];
                    var l;
                    Ja(g) ? l = g : g.sizes ? l = g.sizes : g.playerSize && (l = g.playerSize);
                    l && (f.If[h] = l)
                }, $b(b.mediaTypes)));
                "bidTimeout" === a ? (f.timeout || (f.timeout = {}), f.timeout[e] = !0) : (f.ud[a] || (f.ud[a] = {}), f.ud[a][e] = Oa(function(g, h) {
                    Ma(b[h]) || (g[h] = Gp[h] ? Gp[h](b[h]) : b[h]);
                    return g
                }, {}, Lr))
            }
        }

        function Pg(a, c) {
            a.te[c] || (a.te[c] = {
                ud: {}
            });
            return a.te[c]
        }

        function cl(a, c) {
            ia(function(b) {
                Hh[b].qa && vi(a, c, b)
            }, zb(Hh))
        }

        function vi(a, c, b) {
            var d = Hh[b];
            d.qa = !1;
            d.lb && la(a, d.lb);
            d.lb = eb(a, function() {
                var e, f, g = wi(b);
                c((e = {}, e.__ym = (f = {}, f.pbjs = g, f), e));
                delete Hh[b]
            }, 2E3)
        }

        function wi(a) {
            var c = Hh[a],
                b = c.Ge,
                d = c.bh,
                e = c.Rj;
            return qa(function(f) {
                var g, h = f[0],
                    l = f[1];
                f = l.nd;
                var n = l.If,
                    x = l.timeout;
                l = l.ud;
                return na((g = {}, g.renderState = f, g.mediaTypes = n, g.auctionId = a, g.adUnitCode = h, g.startStamp = b, g.endStamp = d, g.requestedBidders = e, g.bidTimeout = x, g), l)
            }, $b(c.te))
        }

        function ge(a) {
            var c = F(a, "featurePolicy");
            return c ? "browsingTopics" in a && c.allowsFeature("browsing-topics") : !1
        }

        function Dg(a, c, b, d) {
            var e = F(d, "data");
            if (Ta(e)) {
                var f = e.split("*");
                e = f[0];
                var g = f[1];
                f = f[2];
                "sc.topics-response" === e ? (g && ("1" === g && f ? (a = Ye(a, f), Ja(a) && c.D("cta", a)) : c.D("cta.e", g)), b()) : "sc.frame" === e && d.source && d.source.postMessage("sc.topics",
                    "*")
            }
        }

        function Kf(a, c) {
            var b;
            if ("https://oauth.yandex.ru" === F(c, "origin") && F(c, "source.window") && "_ym_uid_request" === F(c.data, "_ym")) {
                var d = c.source,
                    e = (b = {}, b._ym_uid = a, b);
                d.postMessage(e, "https://oauth.yandex.ru")
            }
        }

        function ig(a, c) {
            void 0 === c && (c = !0);
            var b = Hd("canvas", a.document);
            if (b && (b = $c(b))) {
                var d = jf(a) || me(a),
                    e = d[0];
                d = d[1];
                if (.3 <= jk(a, b, {
                        h: d,
                        w: e
                    }) / (d * e)) {
                    K(a).D("hc", 1);
                    return
                }
            }
            c && eb(a, ra([a, !1], ig), 3E3)
        }

        function Bf(a) {
            return {
                M: function(c, b) {
                    Mr(a).then(function(d) {
                            c.G || (c.G = {});
                            c.G.uah = d;
                            b()
                        },
                        b)
                }
            }
        }

        function kk(a) {
            var c = Oa(function(b, d) {
                var e = d[1],
                    f = Ih(a[d[0]]);
                f && b.push("" + e + "\n" + f);
                return b
            }, [], $b(Nr));
            return Ha("\n", c)
        }

        function Il(a) {
            return "che\n" + a
        }

        function Ih(a) {
            return Ta(a) ? a : Ja(a) ? Ha(",", qa(function(c) {
                return '"' + c.brand + '";v="' + c.version + '"'
            }, a)) : Ma(a) ? "" : a ? "?1" : "?0"
        }

        function Jh(a, c) {
            var b = nm(a),
                d = [Or(a) || lk(a)];
            qr(a) && d.push(b);
            var e = Jb(a);
            b = pd(a);
            var f = b.C("synced", {});
            d = fb(function(g) {
                if (c[g]) {
                    var h = (f[g] || 1) + 1440 < e(Md);
                    h && delete f[g];
                    return h
                }
            }, d);
            b.D("synced", f);
            return qa(function(g) {
                return {
                    Qg: c[g],
                    Fg: g
                }
            }, d)
        }

        function lk(a) {
            a = Pr(a);
            return Qr[a] || a
        }

        function nm(a) {
            a = Xn(a);
            return Rr[a] || "ru"
        }

        function Qg(a, c, b, d) {
            uj(a, Hp + "/" + c + ".js?ver=" + Q.lc + "&b=p", function() {
                var e = K(a).C("ytmm");
                (e = F(e, c + ".init")) && e(b, d, Q.lc)
            })
        }

        function uj(a, c, b, d) {
            function e() {
                g.state = 1;
                b()
            }

            function f() {
                g.state = 2;
                d && d()
            }
            var g = Rj(a, c);
            c = g.Kg;
            var h = g.state;
            c && 2 !== h ? 1 === h ? e() : (a = Qb(a), a.F(c, ["load"], e), a.F(c, ["error"], f)) : f()
        }

        function Rj(a, c) {
            Yn[c] || (Yn[c] = {
                Kg: Lc(a, {
                    src: c
                }),
                state: 0
            });
            return Yn[c]
        }

        function om(a, c, b, d) {
            if (!b.H || Na(c.$)) d();
            else {
                var e = yd(a),
                    f = aa(e, ed),
                    g = Vi(a, ""),
                    h = function() {
                        var P = Ha(",", qa(G(Zn), Rm(e)));
                        P = "" + P + Sr(P, g);
                        Pa(b, "gdpr", P);
                        d()
                    };
                if (c.Xg) f("31"), h();
                else if (3 === c.id) h();
                else {
                    var l = K(a),
                        n = l.C("f1");
                    if (n) n(h);
                    else if (n = Rm(e), Oc($h(Zn), n)) h();
                    else if (g.C("yandex_login")) f("13"), g.D("gdpr", mk, 525600), h();
                    else {
                        n = Sm(a);
                        var x = bb(a);
                        var I = /(^|\w+\.)yango(\.yandex)?\.com$/.test(x.hostname) ? {
                            url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                            version: 2,
                            je: Tr,
                            ue: "_inversed_buttons"
                        } : void 0;
                        n || I ? (n = g.C("gdpr"), Ia(n,
                            Wi) ? (f(n === $n ? "12" : "3"), h()) : ao(a) || Ur(a) ? (f("17"), h()) : Vr(a).then(Za, sa).then(function(P) {
                            P ? (f("28"), h()) : (Ip(h), l.D("f1", Ip), (0, $o[0])(a).then(S("params.eu")).then(function(T) {
                                if (T || od(x.href, "yagdprcheck=1") || g.C("yaGdprCheck")) {
                                    g.D("gdpr_popup", $n);
                                    eh(a, c);
                                    if (Cd(a)) return nk(a, f, c);
                                    var ba = ne(a, e);
                                    if (ba) return T = Wr(a, f, ba, c, I), T.then(ra([a, c], xi)), T
                                }
                                T || f("8");
                                return wa.resolve({
                                    value: mk,
                                    Kc: !0
                                })
                            }).then(function(T) {
                                g.Ra("gdpr_popup");
                                if (T) {
                                    var ba = T.value;
                                    T = T.Kc;
                                    Ia(ba, Wi) && g.D("gdpr", ba, T ? void 0 :
                                        525600)
                                }
                                ba = Gc(Jp, Va);
                                sh(a, ba, 20)(Rc(va(a, "gdr"), sa));
                                l.D("f1", Va)
                            })["catch"](va(a, "gdp.a")))
                        })) : (f("14"), h())
                    }
                }
            }
        }

        function xi(a, c) {
            if (Sm(a)) {
                var b = yd(a),
                    d = Wb(a, c);
                d = d && d.params;
                b = qa(aa(Xr, F), Rm(b));
                d && b.length && d("gdpr", ac(b))
            }
        }

        function nk(a, c, b) {
            var d = Tm(a, b);
            return new wa(function(e) {
                var f;
                if (d) {
                    var g = d.V,
                        h = ca(aa("4", c), aa(null, e)),
                        l = eb(a, h, 2E3, "gdp.f.t");
                    d.De((f = {}, f.type = "isYandex", f)).then(function(n) {
                        n.isYandex ? (c("5"), g.F(Kp, function(x) {
                            e({
                                value: ai(x[1].type)
                            })
                        })) : (c("6"), e(null))
                    })["catch"](h).then(ra([a,
                        l
                    ], la))
                } else e({
                    value: $n,
                    Kc: !0
                })
            })
        }

        function eh(a, c) {
            var b = Tm(a, c);
            b && b.V.F(["isYandex"], function() {
                var d;
                return d = {
                    type: "isYandex"
                }, d.isYandex = Sm(a), d
            });
            return b
        }

        function Dc(a, c, b) {
            a = b || Xn(a);
            return Ia(a, c) ? a : "en"
        }

        function ai(a) {
            if (Ia(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return mk;
            a = a.replace("GDPR-ok-view-detailed-", "");
            return Ia(a, Wi) ? a : mk
        }

        function Sj(a, c, b) {
            var d = F(a, "AppMetricaInitializer"),
                e = F(d, "init");
            if (e) try {
                Ea(e, d)(ma(a, c))
            } catch (f) {} else Lp = eb(a, ra([a, c, 2 * b], Sj), b, "ai.d");
            return function() {
                return la(a, Lp)
            }
        }

        function bi(a, c, b, d) {
            var e, f, g, h = b.Aj,
                l = b.wj,
                n = b.isTrusted;
            b = b.Gf;
            a = Kh(a, l);
            l = l.readOnly;
            d = (e = {}, e.fi = bo((f = {}, f.a = h ? 1 : 0, f.b = a, f.c = d || 0, f.d = l ? 1 : null, f.e = b ? 1 : null, f)).Da(), e);
            Ma(n) || (d.ite = sb(n));
            c.params((g = {}, g.__ym = d, g))
        }

        function oe(a, c) {
            var b = F(c, "target");
            if (b) {
                var d = F(b, "value");
                if ((d = Pc(d)) && !(100 <= ea(d))) {
                    var e = "tel" === F(b, "type"),
                        f = 0 < xe(d, "@") && !e,
                        g = Um(d);
                    g = ea(g);
                    if (f || !f && (e || g))
                        if (d = f ? kb(d) : rb(a, d)) return e = F(c, "isTrusted"), {
                            wj: b,
                            Aj: f,
                            xj: d,
                            isTrusted: e,
                            Gf: c.Gf
                        }
                }
            }
        }

        function vj(a, c, b, d, e) {
            if (!Rg(a)) return sa;
            var f = [],
                g = Qb(a);
            vg(a)(Rc(sa, function() {
                var h = id(c, a.document.body);
                e && (h = fb(e, h));
                ia(function(n) {
                    f.push(g.F(n, b, d))
                }, h);
                if (xc("MutationObserver", a.MutationObserver)) {
                    var l = c.toUpperCase();
                    h = new a.MutationObserver(va(a, "de.m", function(n) {
                        ia(function(x) {
                            var I = x.addedNodes;
                            x = x.removedNodes;
                            I && I.length && ia(function(P) {
                                pe(a, P, function(T) {
                                    T.nodeName !== l || e && !e(T) || f.push(g.F(T, b, d))
                                }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                            }, I);
                            x && x.length && ia(function(P) {
                                pe(a,
                                    P,
                                    function(T) {
                                        T.nodeName !== l || e && !e(T) || g.Ia(T, b, d)
                                    }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                            }, x)
                        }, n)
                    }));
                    h.observe(a.document.body, {
                        childList: !0,
                        subtree: !0
                    });
                    f.push(Ea(h.disconnect, h))
                }
            }));
            return ra([Va, f], ia)
        }

        function wg(a) {
            var c = F(a, "speechSynthesis.getVoices");
            if (c) return a = Ea(c, a.speechSynthesis), fh(function(b) {
                return qa(aa(b, F), Yr)
            }, a())
        }

        function xg(a, c, b) {
            return Ha("x", qa(ca(Za, vb("concat", "" + a), aa(b, F)), c))
        }

        function Jl(a, c) {
            var b = c.Nh;
            if (!ci(a, b)) return "";
            var d = [];
            a: {
                var e = Nd(a, b);
                try {
                    var f = ra(e,
                        ca)()();
                    break a
                } catch (Ka) {
                    if ("ccf" === Ka.message) {
                        f = null;
                        break a
                    }
                    fa(Ka)
                }
                f = void 0
            }
            if (Kc(f)) var g = "";
            else try {
                g = f.toDataURL()
            } catch (Ka) {
                g = ""
            }(f = g) && d.push(f);
            var h = b.getContextAttributes();
            try {
                var l = Db(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
            } catch (Ka) {
                l = []
            }
            l = Ha(";", l);
            f = uf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
            e = uf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
            g = b.getParameter(b.ALPHA_BITS);
            h = h && h.antialias ? "yes" : "no";
            var n = b.getParameter(b.BLUE_BITS),
                x = b.getParameter(b.DEPTH_BITS),
                I = b.getParameter(b.GREEN_BITS),
                P = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
            if (P) {
                var T = b.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                0 === T && (T = 2)
            }
            T = {
                wk: l,
                "webgl aliased line width range": f,
                "webgl aliased point size range": e,
                "webgl alpha bits": g,
                "webgl antialiasing": h,
                "webgl blue bits": n,
                "webgl depth bits": x,
                "webgl green bits": I,
                "webgl max anisotropy": P ?
                    T : null,
                "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                "webgl max viewport dims": uf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                "webgl red bits": b.getParameter(b.RED_BITS),
                "webgl renderer": b.getParameter(b.RENDERER),
                "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                "webgl vendor": b.getParameter(b.VENDOR),
                "webgl version": b.getParameter(b.VERSION)
            };
            Zf(d, T, ": ");
            a: {
                try {
                    var ba = b.getExtension("WEBGL_debug_renderer_info");
                    if (ba) {
                        var ka = {
                            "webgl unmasked vendor": b.getParameter(ba.UNMASKED_VENDOR_WEBGL),
                            "webgl unmasked renderer": b.getParameter(ba.UNMASKED_RENDERER_WEBGL)
                        };
                        break a
                    }
                } catch (Ka) {}
                ka = {}
            }
            Zf(d, ka);
            if (!b.getShaderPrecisionFormat) return Ha("~", d);
            Zf(d, Xi(b));
            return Ha("~", d)
        }

        function Zf(a, c, b) {
            void 0 === b && (b = ":");
            ia(function(d) {
                    return a.push("" + d[0] + b + d[1])
                },
                $b(c))
        }

        function di(a, c, b, d) {
            c = d.C("cc");
            d = ra(["cc", ""], d.D);
            if (c) {
                var e = c.split("&");
                c = e[0];
                (e = (e = e[1]) && Nc(e)) && 1440 < Jb(a)(Md) - e ? d() : b.D("cc", c)
            } else wc(0)(c) || d()
        }

        function Vc(a, c, b, d) {
            return Ib(c, function(e) {
                if (!Kl(e) && !pm(a))
                    if (e = d.C("zzlc"), db(e) || Kc(e) || "na" === e) {
                        var f = Ge(a);
                        if (f && (e = Cf(a))) {
                            var g = f("iframe");
                            na(g.style, {
                                display: "none",
                                width: "1px",
                                height: "1px",
                                visibility: "hidden"
                            });
                            f = Yi(a, 68);
                            var h = Tj(a, 79);
                            g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + Fc("L21ldHJpa2EvenpsYy5odG1s");
                            e.appendChild(g);
                            var l = 0,
                                n = Qb(a).F(a, ["message"], va(a, "zz.m", function(x) {
                                    (x = F(x, "data")) && x.substr && "__ym__zz" === x.substr(0, 8) && (He(g), x = x.substr(8), d.D("zzlc", x), b.D("zzlc", x), n(), la(a, l))
                                }));
                            l = eb(a, ca(n, aa(g, He)), 3E3)
                        }
                    } else b.D("zzlc", e)
            })
        }

        function Sf(a, c, b) {
            var d, e;
            c = cd(aa(a, F), Zr);
            c = db(c) ? null : F(a, c);
            if (F(a, "navigator.onLine") && c && c && F(c, "prototype.constructor.name")) {
                var f = new c((d = {}, d.iceServers = [], d));
                a = F(f, "createDataChannel");
                Da(a) && (Ea(a, f, "y.metrika")(), a = F(f, "createOffer"), Da(a) && !a.length && (a = Ea(a, f)(),
                    d = F(a, "then"), Da(d) && Ea(d, a, function(g) {
                        var h = F(f, "setLocalDescription");
                        Da(h) && Ea(h, f, g, sa, sa)()
                    })(), na(f, (e = {}, e.onicecandidate = function() {
                        var g, h = F(f, "close");
                        if (Da(h)) {
                            h = Ea(h, f);
                            try {
                                var l = (g = F(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (n) {
                                f.onicecandidate = sa;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            l && 0 < l.length && (g = Re(l[1]), b.D("pp", g));
                            f.onicecandidate = sa;
                            h()
                        }
                    }, e))))
            }
        }

        function Lh(a, c, b) {
            var d, e = Ll(a, c);
            if (e) {
                e.V.F(["gpu-get"], function() {
                    var h;
                    return h = {}, h.type =
                        "gpu-get", h.pu = b.C("pu"), h
                });
                var f = F(a, "opener");
                if (f) {
                    var g = eb(a, ra([a, c, b], Zi), 200, "pu.m");
                    e.fc(f, (d = {}, d.type = "gpu-get", d), function(h, l) {
                        var n = F(l, "pu");
                        n && (la(a, g), b.D("pu", n))
                    })
                } else Zi(a, c, b)
            }
        }

        function Zi(a, c, b) {
            var d = F(a, "location.host");
            a = Ml(a, c);
            b.D("pu", "" + Re(d) + a)
        }

        function yi(a) {
            a = Ge(a);
            if (!a) return "";
            a = a("video");
            try {
                var c = vb("canPlayType", a),
                    b = fh(function(d) {
                        return qa(ca(Za, vb("concat", d + "; codecs=")), $r)
                    }, Mp);
                return qa(c, Mp.concat(b))
            } catch (d) {
                return "canPlayType"
            }
        }

        function ei(a) {
            var c =
                F(a, "matchMedia");
            if (c && xc("matchMedia", c)) {
                var b = vb("matchMedia", a);
                return Oa(function(d, e) {
                    d[e] = b("(" + e + ")");
                    return d
                }, {}, as)
            }
        }

        function Xi(a) {
            return Oa(function(c, b) {
                var d = b[0],
                    e = b[1];
                c[d + " precision"] = F(e, "precision") || "n";
                c[d + " precision rangeMin"] = F(e, "rangeMin") || "n";
                c[d + " precision rangeMax"] = F(e, "rangeMax") || "n";
                return c
            }, {}, [
                ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER,
                    a.MEDIUM_FLOAT)],
                ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
                ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)],
                ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                ["webgl vertex shader medium int",
                    a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)
                ],
                ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)],
                ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
            ])
        }

        function Nd(a, c) {
            return [function() {
                var b = c.createBuffer();
                b && c.getParameter &&
                    xc("getParameter", c.getParameter) || co();
                c.bindBuffer(c.ARRAY_BUFFER, b);
                var d = new a.Float32Array(bs);
                c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                b.bi = 3;
                b.hi = 3;
                d = c.createProgram();
                var e = c.createShader(c.VERTEX_SHADER);
                d && e || co();
                return {
                    Cd: d,
                    ri: e,
                    oi: b
                }
            }, function(b) {
                var d = b.Cd,
                    e = b.ri;
                c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                c.compileShader(e);
                c.attachShader(d,
                    e);
                (d = c.createShader(c.FRAGMENT_SHADER)) || co();
                return na(b, {
                    Yh: d
                })
            }, function(b) {
                var d = b.Cd,
                    e = b.Yh;
                c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                c.compileShader(e);
                c.attachShader(d, e);
                c.linkProgram(d);
                c.useProgram(d);
                return b
            }, function(b) {
                var d = b.Cd;
                b = b.oi;
                d.ni = c.getAttribLocation(d, "attrVertex");
                d.ii = c.getUniformLocation(d, "uniformOffset");
                c.enableVertexAttribArray(d.Gk);
                c.vertexAttribPointer(d.ni, b.bi, c.FLOAT, !1, 0, 0);
                c.uniform2f(d.ii, 1, 1);
                c.drawArrays(c.TRIANGLE_STRIP, 0, b.hi);
                return c.canvas
            }]
        }

        function ci(a, c) {
            if (!Da(a.Float32Array)) return !1;
            var b = F(c, "canvas");
            if (!b || !xc("toDataUrl", b.toDataURL)) return !1;
            try {
                c.createBuffer()
            } catch (d) {
                return !1
            }
            return !0
        }

        function uf(a, c) {
            c.clearColor(0, 0, 0, 1);
            c.enable(c.DEPTH_TEST);
            c.depthFunc(c.LEQUAL);
            c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
            return "[" + F(a, "0") + ", " + F(a, "1") + "]"
        }

        function jg(a, c) {
            if (F(c, "settings.ins")) {
                var b = K(a);
                if (!b.C("scip")) {
                    var d = pd(a),
                        e = Jb(a)(Md),
                        f = ok(d.C("sci"));
                    if (!(f && 1440 >= e - f)) {
                        f = fc(a, "ci");
                        var g = ["sync.cook.int"],
                            h = function(n) {
                                n = b.C("scip", "") + n;
                                b.D("scip", n)
                            },
                            l = aa("a", h);
                        b.D("scip", "0");
                        return f({
                            T: {
                                ma: g,
                                Va: 3E3,
                                mb: !0
                            }
                        }, ["https://an.yandex.ru/sync_cookie"]).then(function(n) {
                            n = F(n.kb, "CookieMatchUrls");
                            if (Ja(n) && ea(n)) {
                                h("1");
                                var x = fc(a, "c");
                                n = qa(function(I, P) {
                                    return x({
                                        T: {
                                            ma: g,
                                            Va: 3E3
                                        }
                                    }, ["https://" + I])["catch"](ca(aa("b", h), aa("" + P, h)))
                                }, fb(Ta, n));
                                return wa.all(n)
                            }
                            l()
                        }, l).then(function() {
                            var n = b.C("scip");
                            !n || od(n, "a") || od(n, "b") || (d.D("sci",
                                e), h("2"))
                        }, sa)
                    }
                }
            }
        }

        function fi(a) {
            return {
                M: function(c, b) {
                    if (!c.H) return b();
                    var d = K(a).C("fid");
                    !Np && d && (Pa(c, "fid", d), Np = !0);
                    return b()
                }
            }
        }

        function gi(a, c) {
            var b = a.document;
            if (Ia(b.readyState, ["interactive", "complete"])) oc(a, c);
            else {
                var d = Qb(a),
                    e = d.F,
                    f = d.Ia,
                    g = function() {
                        f(b, ["DOMContentLoaded"], g);
                        f(a, ["load"], g);
                        c()
                    };
                e(b, ["DOMContentLoaded"], g);
                e(a, ["load"], g)
            }
        }

        function ze(a) {
            return {
                M: function(c, b) {
                    var d = c.H;
                    if (d) {
                        var e = K(a).C("adBlockEnabled");
                        e && d.D("adb", e)
                    }
                    b()
                }
            }
        }

        function Ok(a) {
            var c = va(a, "i.clch",
                dl);
            Qb(a).F(a.document, ["click"], aa(a, c), {
                passive: !1
            });
            return function(b) {
                var d = Q.Cb,
                    e = a.Ya[Q.Ld],
                    f = !!e._informer;
                e._informer = na({
                    domain: "informer.yandex.ru"
                }, b);
                f || Lc(a, {
                    src: d + "//informer.yandex.ru/metrika/informer.js"
                })
            }
        }

        function qe(a, c) {
            var b = pd(a),
                d = b.C,
                e = b.D;
            if ("" === d("cc")) {
                e("cc", 0);
                var f = Jb(a),
                    g = K(a);
                fc(a, "6", c)({
                    T: {
                        mb: !0,
                        Vc: !1
                    }
                }, ["https://mc.yandex.md/cc"]).then(function(h) {
                    h = F(h.kb, "c");
                    e("cc", h + "&" + f(Md));
                    g.D("cc", h)
                })["catch"](function(h) {
                    var l = f(Md);
                    e("cc", "&" + l);
                    dh(a, "cc", h)
                })
            }
        }

        function Df(a,
            c) {
            if (!c) return !1;
            var b = bb(a);
            return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
        }

        function $i(a, c) {
            return Ib(c, function(b) {
                var d = F(b, "settings.dr");
                return {
                    Sh: cs(a, d),
                    isEnabled: F(b, "settings.auto_goals")
                }
            })
        }

        function yg(a, c, b, d, e) {
            b = Mh(a.document.body, b);
            d = Mh(a.document.body, d);
            Ia(e.target, [b, d]) && wj(a, c)
        }

        function aj(a, c, b, d) {
            (b = ds(a, d, b)) && wj(a, c, b)
        }

        function Mb(a, c) {
            var b = gh(a, c);
            return es(a, b)
        }

        function gh(a, c) {
            var b = Mh(a.document.body, c);
            return b ? el(a, b) : ""
        }

        function wj(a, c, b) {
            if (c = Wb(a, c)) a =
                Ra(["dr", b || "" + nc(a, 10, 99)]), c.params(Ra(["__ym", a]))
        }

        function Mh(a, c) {
            var b = null;
            try {
                b = c ? Hd(c, a) : b
            } catch (d) {}
            return b
        }

        function bj(a) {
            a = Yb(Fc(a));
            return qa(function(c) {
                c = c.charCodeAt(0).toString(2);
                return Op("0", 8, c)
            }, a)
        }

        function el(a, c) {
            if (!c) return "";
            var b = [],
                d = F(a, "document");
            pe(a, c, function(e) {
                if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                (f = f && Pc(f)) && b.push(f)
            });
            return 0 === b.length ? "" : Ha(" ", b)
        }

        function Se(a,
            c, b) {
            a = lc(b);
            b = a[1];
            "track" === a[0] && c({
                version: "0",
                Qd: b
            })
        }

        function xj(a, c, b) {
            if (b) {
                var d = b.version;
                (b = F(fs, d + "." + b.Qd)) && (c && Ia(b, gs) || a("ym-" + b + "-" + d))
            }
        }

        function hi(a, c, b) {
            if ("rt" === b) return "https://" + Pp(a, c) + ".mc.yandex.ru/watch/3/1";
            if ("mf" === b) {
                b = bb(a);
                b = Nh(b.protocol + "//" + b.hostname + b.pathname);
                c = Ml(a, c);
                var d = "";
                do d += nc(a); while (d.length < c.length);
                d = d.slice(0, c.length);
                a = "";
                for (var e = 0; e < c.length; e += 1) a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
                a = [d, a];
                return "https://adstat.yandex.ru/track?service=metrika&id=" +
                    a[1] + "&mask=" + a[0] + "&ref=" + b
            }
        }

        function Uj(a, c, b) {
            var d, e = eo(c).Hb;
            return fc(a, "pi", c)({
                H: Hc((d = {}, d[e] = 1, d))
            }, [b])
        }

        function pk(a, c, b) {
            return new wa(function(d, e) {
                if (fl(a, Vm, "isp")) {
                    var f = sa,
                        g = function(h) {
                            ("1" === h ? d : e)();
                            f();
                            Pk(Vm, "isp")
                        };
                    f = Qb(a).F(a, ["message"], ra([b, g], va(a, "isp.stat.m", gl)));
                    eb(a, g, 1500)
                } else e()
            })
        }

        function gl(a, c, b) {
            var d = F(b, "data");
            if (Ta(d)) {
                var e = d.split("*");
                d = e[0];
                var f = e[1];
                e = e[2];
                "sc.frame" === d && b.source ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
            }
        }

        function cj(a, c) {
            var b = pd(a),
                d = "wv2rf:" + W(c),
                e = c.Jd,
                f = fo(a),
                g = b.C(d),
                h = c.ak;
            return db(f) || Kc(g) ? vc(function(l, n) {
                Ib(c, function(x) {
                    var I = !!F(x, "settings.webvisor.forms");
                    I = !F(x, "settings.x3") && I;
                    f = fo(a) || F(x, "settings.eu");
                    b.D(d, sb(I));
                    n({
                        Jd: e,
                        Ff: !!f,
                        sh: I,
                        Kh: h
                    })
                })
            }) : $f({
                Jd: e,
                Ff: f,
                sh: !!Nc(g),
                Kh: h
            })
        }

        function yj() {
            var a = Oa(function(c, b) {
                c[b[0]] = {
                    We: 0,
                    Ni: 1 / b[1]
                };
                return c
            }, {}, [
                ["blur", .0034],
                ["change", .0155],
                ["click", .01095],
                ["deviceRotation", 2E-4],
                ["focus", .0061],
                ["mousemove", .5132],
                ["scroll", .4795],
                ["selection",
                    .0109
                ],
                ["touchcancel", 2E-4],
                ["touchend", .0265],
                ["touchforcechange", .0233],
                ["touchmove", .1442],
                ["touchstart", .027],
                ["zoom", .0014]
            ]);
            return {
                Ki: function(c) {
                    if (c.length) return {
                        type: "activity",
                        data: Oa(function(b, d) {
                            var e = a[d];
                            return Math.round(b + e.We * e.Ni)
                        }, 0, zb(a))
                    }
                },
                Gj: function(c) {
                    c && (c = a[c.data.type || c.event]) && (c.We += 1)
                }
            }
        }

        function zj(a) {
            return {
                cj: function() {
                    var c = a.document.querySelector("base[href]");
                    return c ? c.getAttribute("href") : null
                },
                ej: function() {
                    if (a.document.doctype) {
                        var c = na({
                                name: "html",
                                publicId: "",
                                systemId: ""
                            }, a.document.doctype),
                            b = c.publicId,
                            d = c.systemId;
                        return "<!DOCTYPE " + Ha("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                    }
                    return null
                }
            }
        }

        function Vj(a, c, b) {
            var d = dj(a),
                e = Qb(a),
                f = Cd(a),
                g = c.tf(),
                h = !F(a, "postMessage") || f && !F(a, "parent.postMessage"),
                l = aa(d, Za);
            if (h) {
                if (!g) return eb(a, Ea(d.N, d, "i", {
                    ab: !1
                }), 10), {
                    sf: l,
                    Ch: sa,
                    stop: sa
                };
                fa(Ec())
            }
            d.F(["sr"], function(T) {
                var ba, ka = zi(a, T.source);
                ka && Tf(a, T.source, (ba = {}, ba.type = "\u043d", ba.frameId = c.$a().ia(ka), ba))
            });
            d.F(["sd"], function(T) {
                var ba = T.data;
                T = T.source;
                (a === T || zi(a, T)) && d.N("sdr", {
                    data: ba.data,
                    frameId: ba.frameId
                })
            });
            if (f && !g) {
                var n = !1,
                    x = 0,
                    I = function() {
                        var T;
                        Tf(a, a.parent, (T = {}, T.type = "sr", T));
                        x = eb(a, I, 100, "if.i")
                    };
                I();
                var P = function(T) {
                    d.ea(["\u043d"], P);
                    la(a, x);
                    var ba = Af(a, T.origin).host;
                    n || T.source !== a.parent || !T.data.frameId || "about:blank" !== bb(a).host && !Ia(ba, b) || (n = !0, d.N("i", {
                        frameId: T.data.frameId,
                        ab: !0
                    }))
                };
                d.F(["\u043d"], P);
                eb(a, function() {
                        d.ea(["\u043d"], P);
                        la(a, x);
                        n || (n = !0, d.N("i", {
                            ab: !1
                        }))
                    },
                    2E3, "if.r")
            }
            e = e.F(a, ["message"], function(T) {
                var ba = Ye(a, T.data);
                ba && ba.type && Ia(ba.type, hs) && d.N(ba.type, {
                    data: ba,
                    source: T.source,
                    origin: T.origin
                })
            });
            return {
                sf: l,
                Ch: function(T) {
                    var ba;
                    return Tf(a, a.parent, (ba = {}, ba.frameId = c.tf(), ba.data = T, ba.type = "sd", ba))
                },
                stop: e
            }
        }

        function zi(a, c) {
            try {
                return cd(ca(S("contentWindow"), wc(c)), Yb(a.document.querySelectorAll("iframe")))
            } catch (b) {
                return null
            }
        }

        function Tf(a, c, b) {
            c || fa(Ec());
            a = ma(a, b);
            c.postMessage(a, "*")
        }

        function Eg() {
            return zd() + zd() + "-" + zd() + "-" + zd() +
                "-" + zd() + "-" + zd() + zd() + zd()
        }

        function zd() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }

        function Xb(a, c) {
            if (Ta(c)) return c;
            var b = a.textContent;
            if (Ta(b)) return b;
            b = a.data;
            if (Ta(b)) return b;
            b = a.nodeValue;
            return Ta(b) ? b : ""
        }

        function Ai(a, c, b, d, e) {
            void 0 === d && (d = {});
            void 0 === e && (e = pb(c));
            var f = na(Oa(function(h, l) {
                h[l.name] = l.value;
                return h
            }, {}, Yb(c.attributes)), d);
            na(f, Bi(c, e, f));
            var g = (d = Te(function(h, l) {
                var n = l[0],
                    x = Dd(a, c, n, l[1], b, e),
                    I = x.value;
                Ma(I) ? delete f[n] : f[n] = I;
                return h ||
                    x.wc
            }, !1, $b(f))) && $c(c);
            g && (f.width = g.width, f.height = g.height);
            return {
                wc: d,
                Li: f
            }
        }

        function Bi(a, c, b) {
            var d = {};
            Ae(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
            return d
        }

        function Dd(a, c, b, d, e, f) {
            void 0 === f && (f = pb(c));
            var g = {
                wc: !1,
                value: d
            };
            if (Ae(c)) "value" === b ? !Ma(d) && "" !== d && (b = e.Ff, f = e.sh, e = Ze(a, c), f ? (b = Ic(a, c, b), a = b.xc, c = b.oc, b = b.Sb, g.wc = !c && (e || a)) : (g.wc = e, b = !(c && vf("ym-record-keys", c))), b || e) && (d = "" + d, g.value = 0 < d.length ? Qp("\u2022", d.length) : "") : "checked" === b && Ia((c.getAttribute("type") ||
                "").toLowerCase(), is) ? g.value = c.checked ? "checked" : null : js.test(b) && Gm(a, c) && (g.value = null);
            else if ("IMG" === f && "src" === b)(e = Ze(a, c)) ? (g.wc = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
            else if ("A" === f && "href" === b) g.value = d ? "#" : "";
            else if (Ia(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === xe(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && Ia(b, ["src", "type"])) g.value = null;
            return g
        }

        function jd(a, c, b, d) {
            void 0 === d && (d = "wv2");
            return {
                K: function(e, f) {
                    return va(a, d + "." + b + "." + f, e, void 0, c)
                }
            }
        }

        function ii(a, c, b, d, e) {
            function f() {
                n && n.stop()
            }
            if (!c.Dc) return wa.resolve(sa);
            var g = fc(a, "4", c),
                h = {
                    H: Hc()
                },
                l = new ks(a, b, function(x, I, P) {
                    if (!g) return wa.resolve();
                    var T = "wv-data=" + Od(x, !0),
                        ba = va(a, "m.n.m.s");
                    I = {};
                    I["wv-part"] = "" + P;
                    P = x.length;
                    for (var ka = 0, Ka = 255, Ua = 255, Wa, Tb, Bc; P;) {
                        Wa = 21 < P ? 21 : P;
                        P -= Wa;
                        do Tb = "string" === typeof x ? x.charCodeAt(ka) : x[ka], ka += 1, 255 <
                            Tb && (Bc = Tb >> 8, Tb &= 255, Tb ^= Bc), Ka += Tb, Ua += Ka; while (--Wa);
                        Ka = (Ka & 255) + (Ka >> 8);
                        Ua = (Ua & 255) + (Ua >> 8)
                    }
                    x = (Ka & 255) + (Ka >> 8) << 8 | (Ua & 255) + (Ua >> 8);
                    return g(na({}, h, {
                        T: {
                            Z: T
                        },
                        G: (I["wv-check"] = "" + (65535 === x ? 0 : x), I["wv-type"] = b.type, I)
                    }), c)["catch"](ba)
                }),
                n = dc(a, l, d, e);
            return Ib(c, function(x) {
                x && K(a).D("isEU", F(x, "settings.eu"));
                K(a).C("oo") || n && $e(a, x) && n.start();
                return f
            })
        }

        function dc(a, c, b, d) {
            var e = a.document,
                f = [],
                g = Qb(a),
                h = ":submit" + Math.random(),
                l = [],
                n = Ea(c.flush, c),
                x = tb(function(T, ba) {
                    va(a, "hfv." + T, function() {
                        try {
                            var ka =
                                ba.type
                        } catch (Ka) {
                            return
                        }
                        ka = Ia(ka, d);
                        c.push(ba, {
                            type: T
                        });
                        ka && n()
                    })()
                }),
                I = va(a, "sfv", function() {
                    var T = b(a),
                        ba = ls(a);
                    ia(function(ka) {
                        f.push(g.F(ka.target, [ka.event], x(ka.type)))
                    }, T);
                    ia(function(ka) {
                        f.push(g.F(ka.target, [ka.event], va(a, "hff." + ka.type + "." + ka.event, function(Ka) {
                            ia(vc({
                                l: a,
                                Sa: Ka,
                                flush: n
                            }), ka.ba)
                        })))
                    }, ba);
                    l = Qk(a, "form", e);
                    e.attachEvent && (T = Qk(a, "form *", e), ia(function(ka) {
                        f.push(g.F(ka, ["submit"], x("form")))
                    }, l), ia(function(ka) {
                        go(ka) && f.push(g.F(ka, ["change"], x("formInput")))
                    }, T));
                    ia(function(ka) {
                        var Ka =
                            ka.submit;
                        if (Da(Ka) || "object" === typeof Ka && ms.test("" + Ka)) ka[h] = Ka, ka.submit = va(a, "fv", function() {
                            var Ua = {
                                target: ka,
                                type: "submit"
                            };
                            x("document")(Ua);
                            return ka[h]()
                        })
                    }, l)
                }),
                P = va(a, "ufv", function() {
                    ia(Va, f);
                    ia(function(T) {
                        T && (T.submit = T[h])
                    }, l);
                    c.flush()
                });
            return {
                start: I,
                stop: P
            }
        }

        function Lf(a, c) {
            var b = fb(function(e) {
                    return 0 < e.ba.length
                }, c),
                d = Hn({
                    target: a.document,
                    type: "document"
                });
            return qa(ca(Za, d, ns(a)), b)
        }

        function hh(a, c) {
            var b = a.l,
                d = [],
                e = c.form;
            if (!c[Ed] && e) {
                var f = e.elements;
                e = e.length;
                for (var g =
                        0; g < e; g += 1) {
                    var h = f[g];
                    Wm(h) && !h[Ed] && Kb(d, ih(b, h))
                }
            } else Kb(d, ih(b, c));
            return d
        }

        function zg(a) {
            if (Nl) {
                Nl = !1;
                var c = ud(a.l),
                    b = [];
                Xd(a.l, b, 15) ? a = [] : (gb(b, c), a = b);
                return a
            }
        }

        function qd(a) {
            if (!Nl) {
                Nl = !0;
                a = ud(a.l);
                var c = [];
                Uf(c, 14);
                gb(c, a);
                return c
            }
        }

        function mc(a, c, b) {
            var d = c[Ed];
            if (d) {
                a: {
                    var e = ud(a),
                        f = c[Ed];
                    if (0 < f) {
                        var g = [];
                        c = Mf(a, c);
                        var h = ej[f],
                            l = c[0] + "x" + c[1],
                            n = c[2] + "x" + c[3];
                        if (l !== h.rh) {
                            h.rh = l;
                            if (Xd(a, g, 9)) {
                                a = [];
                                break a
                            }
                            gb(g, e);
                            gb(g, f);
                            gb(g, c[0]);
                            gb(g, c[1])
                        }
                        if (n !== h.size) {
                            h.size = n;
                            if (Xd(a, g, 10)) {
                                a = [];
                                break a
                            }
                            gb(g, e);
                            gb(g, f);
                            gb(g, c[2]);
                            gb(g, c[3])
                        }
                        if (g.length) {
                            a = g;
                            break a
                        }
                    }
                    a = []
                }
                Kb(b, a)
            }
            return d
        }

        function Ic(a, c, b) {
            void 0 === b && (b = !1);
            if (!c) return {
                Sb: !1,
                oc: !1,
                xc: !1
            };
            var d = c.getAttribute("type") || c.type;
            if ("button" === d) return {
                Sb: !1,
                oc: !1,
                xc: !1
            };
            var e = fb(th, [c.className, c.id, c.name]),
                f = c && vf("ym-record-keys", c);
            d = d && Ia(d, Rp) || Oc(zc(os), e);
            var g;
            (g = d) || (g = c.placeholder, g = Oc(zc(ps), e) || th(g) && qs.test(g || ""));
            e = g;
            return {
                Sb: !f && (fj(a, c) || e && b || e && !d && !b),
                oc: f,
                xc: e
            }
        }

        function fj(a, c) {
            return Gm(a, c) || gj(a,
                c) ? !0 : Ze(a, c)
        }

        function th(a) {
            return !!(a && 2 < a.length)
        }

        function Ae(a) {
            try {
                var c = pb(a);
                if (Ia(c, ho)) {
                    if ("INPUT" === c) {
                        var b = a.type;
                        return !b || Ia(b.toLocaleLowerCase(), rs)
                    }
                    return !0
                }
            } catch (d) {}
            return !1
        }

        function Ef(a, c) {
            return c && vf("(ym-disable-submit|-metrika-noform)", c)
        }

        function hl(a, c) {
            return Ha("", qa(function(b) {
                return a.isNaN(b) ? ss.test(b) ? (b = b.toUpperCase() === b ? ts : us, String.fromCharCode(nc(a, b[0], b[1]))) : b : "" + nc(a, 0, 9)
            }, c.split("")))
        }

        function Ze(a, c) {
            if (Ma(c)) return !1;
            if (B(c)) {
                var b = c.parentNode;
                return (Ma(b) ?
                    0 : 11 === b.nodeType) ? !1 : Ze(a, c.parentNode)
            }
            b = Sp(a);
            if (!b) return !1;
            var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
            return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
        }

        function $e(a, c) {
            var b = qk(a),
                d = b.C("visorc");
            Ia(d, ["w", "b"]) || (d = "");
            Rk(a) && hj(a, Fg, "visorc") && !vs.test(Ue(a) || "") || (d = "b");
            var e = F(c, "settings.webvisor.recp");
            if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
            d || (d = K(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
            b.D("visorc", d, 30);
            return "w" === d
        }

        function ad(a, c, b, d, e) {
            d = Ol(a, b, d);
            c = Pl(a, e || b, c);
            var f = Yd(a, d, c);
            return function(g) {
                g = na({
                    T: {
                        ma: ["mms." + b]
                    }
                }, g);
                return f(g)
            }
        }

        function jh(a, c) {
            return {
                M: function(b, d) {
                    Be(a, c, b);
                    d()
                }
            }
        }

        function Be(a, c, b, d) {
            var e, f = b.G;
            f.wmode = "0";
            f["wv-hit"] = f["wv-hit"] || "" + vd(a);
            f["page-url"] = f["page-url"] || bb(a).href;
            d && (f[d] = f[d] || "" + nc(a));
            a = {
                ra: {
                    ya: "webvisor/" + c.id
                },
                T: na(b.T || {}, {
                    Oa: (e = {}, e["Content-Type"] = "text/plain", e),
                    cc: "POST"
                }),
                G: f
            };
            na(b, a)
        }

        function Ie(a, c, b) {
            if (Tp.isEnabled(a)) return new Tp(a, c);
            if (Up.isEnabled(a)) return new Up(a, b)
        }

        function Ce(a,
            c) {
            var b = c[1][3],
                d = 0,
                e = new a.Uint8Array(c[0]);
            return Gc([b], function(f, g) {
                if (!f) return e;
                f[0](a, f[2], e, d);
                d += f[1];
                g.push(f[3]);
                return e
            })
        }

        function af(a, c, b) {
            a = c(b);
            c = [sa, 0, 0];
            var d = [0, c, c, void 0];
            return Gc(a, function(e, f) {
                var g = e[0],
                    h = e[1],
                    l = e[2];
                if (0 === g) return l(d, h), d;
                if (void 0 === h || null === h) return d;
                var n = g >> 3;
                if (g & 1) Ob(d, Xa(n)), h = l(h), n & 2 && Ob(d, Xa(h[1])), Ob(d, h);
                else if (g & 4)
                    for (g = h.length - 1; 0 <= g;) {
                        var x = l(h[g]);
                        x.push([0, 0, Gg]);
                        x.push([0, Xa(n), Ob]);
                        x.unshift([0, 0, kf]);
                        Kb(f, x);
                        --g
                    } else if (g & 2) {
                        l =
                            e[2];
                        var I = e[3],
                            P = e[4],
                            T = e[5],
                            ba = zb(h);
                        for (g = ba.length - 1; 0 <= g;) x = ba[g], x = [
                            [0, 0, kf],
                            [P, h[x], T],
                            [l, x, I],
                            [0, 0, Gg],
                            [0, Xa(n), Ob]
                        ], Kb(f, x), --g
                    } else x = l(h), x.push([0, 0, Gg]), x.push([0, Xa(n), Ob]), x.unshift([0, 0, kf]), Kb(f, x);
                return d
            })
        }

        function kf(a) {
            var c = a[1],
                b = a[0],
                d = a[2];
            a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [sa, 0, 0], a[2] = a[1]);
            Ob(a, Xa(b));
            b && (a[2][3] = c[3], a[2] = d, a[0] += b)
        }

        function Gg(a) {
            a[3] = [a[0], a[1], a[2], a[3]];
            a[1] = [sa, 0, 0];
            a[2] = a[1];
            a[0] = 0
        }

        function Ob(a, c) {
            a[0] += c[1];
            a[2][3] = c;
            a[2] = c
        }

        function sc(a) {
            return [
                [1857, a.partsTotal, Xa],
                [1793, a.activity, Xa],
                [1744, a.textChangeMutation, il],
                [1680, a.removedNodesMutation, Wj],
                [1616, a.addedNodesMutation, md],
                [1552, a.attributesChangeMutation, Ff],
                [1488, a.publishersHeader, Ci],
                [1424, a.articleInfo, Sk],
                [1360, a.focusEvent, Ag],
                [1296, a.fatalErrorEvent, Ve],
                [1232, a.deviceRotationEvent, jc],
                [1168, a.keystrokesEvent, Di],
                [1104, a.resizeEvent, kh],
                [1040, a.zoomEvent, Hm],
                [976, a.touchEvent, wf],
                [912, a.changeEvent, lh],
                [848, a.selectionEvent, Zd],
                [784,
                    a.scrollEvent, Ei
                ],
                [720, a.mouseEvent, uh],
                [656, a.Ek, ag],
                [592, a.page, rk],
                [513, a.end, We],
                [449, a.partNum, Xa],
                [401, a.chunk, mh],
                [257, a.frameId, hb],
                [193, a.event, Xa],
                [129, a.type, Xa],
                [65, a.stamp, Xa]
            ]
        }

        function bf(a) {
            return [
                [84, a.ji, sc]
            ]
        }

        function Qa(a) {
            return [
                [129, a.position, hb],
                [81, a.name, ib]
            ]
        }

        function re(a) {
            return [
                [81, a.name, ib]
            ]
        }

        function Nb(a) {
            return [
                [81, a.name, ib]
            ]
        }

        function Sk(a) {
            return [
                [593, a.updateDate, ib],
                [532, a.rubric, Qa],
                [449, a.chars, hb],
                [401, a.publicationDate, ib],
                [340, a.topics, re],
                [276, a.authors, Nb],
                [209, a.pageTitle, ib],
                [145, a.pageUrlCanonical, ib],
                [65, a.id, Xa]
            ]
        }

        function Xe(a) {
            return [
                [513, a.chars, hb],
                [489, a.maxScrolled, kg],
                [385, a.involvedTime, hb],
                [321, a.height, hb],
                [257, a.width, hb],
                [193, a.y, hb],
                [129, a.x, hb],
                [65, a.id, Xa]
            ]
        }

        function Ci(a) {
            return [
                [129, a.involvedTime, hb],
                [84, a.articleMeta, Xe]
            ]
        }

        function Ag(a) {
            return [
                [65, a.target, hb]
            ]
        }

        function Ve(a) {
            return [
                [209, a.stack, ib],
                [145, a.ui, ib],
                [81, a.code, ib]
            ]
        }

        function jc(a) {
            return [
                [193, a.orientation, hb],
                [129, a.height, Xa],
                [65, a.width, Xa]
            ]
        }

        function Di(a) {
            return [
                [84,
                    a.keystrokes, Oh
                ]
            ]
        }

        function Oh(a) {
            return [
                [273, a.modifier, ib],
                [193, a.isMeta, We],
                [145, a.key, ib],
                [65, a.id, Xa]
            ]
        }

        function kh(a) {
            return [
                [257, a.pageHeight, Xa],
                [193, a.pageWidth, Xa],
                [129, a.height, Xa],
                [65, a.width, Xa]
            ]
        }

        function Hm(a) {
            return [
                [193, a.y, hb],
                [129, a.x, hb],
                [105, a.level, kg]
            ]
        }

        function wf(a) {
            return [
                [129, a.target, hb],
                [84, a.touches, Xj]
            ]
        }

        function Xj(a) {
            return [
                [297, a.force, kg],
                [233, a.y, kg],
                [169, a.x, kg],
                [81, a.id, ib]
            ]
        }

        function lh(a) {
            return [
                [257, a.target, hb],
                [193, a.hidden, We],
                [129, a.checked, We],
                [81, a.value, ib]
            ]
        }

        function Zd(a) {
            return [
                [257, a.endNode, Xa],
                [193, a.startNode, Xa],
                [129, a.end, hb],
                [65, a.start, hb]
            ]
        }

        function Ei(a) {
            return [
                [257, a.target, hb],
                [193, a.page, We],
                [129, a.y, hb],
                [65, a.x, hb]
            ]
        }

        function uh(a) {
            return [
                [193, a.target, hb],
                [129, a.y, Xa],
                [65, a.x, Xa]
            ]
        }

        function ag(a) {
            return [
                [148, a.changes, se],
                [65, a.target, hb]
            ]
        }

        function se(a) {
            return [
                [193, a.index, Xa],
                [145, a.op, ib],
                [81, a.style, ib]
            ]
        }

        function il(a) {
            return [
                [209, a.value, ib],
                [129, a.index, Xa],
                [65, a.target, Xa]
            ]
        }

        function Wj(a) {
            return [
                [129, a.index, Xa],
                [69, a.nodes, hb]
            ]
        }

        function md(a) {
            return [
                [129, a.index, Xa],
                [84, a.nodes, Pd]
            ]
        }

        function Ff(a) {
            return [
                [210, a.attributes, 81, ib, 145, ib],
                [129, a.index, Xa],
                [65, a.target, Xa]
            ]
        }

        function rk(a) {
            return [
                [852, a.content, Pd],
                [785, a.tabId, ib],
                [705, a.recordStamp, bg],
                [656, a.location, Fi],
                [592, a.viewport, Wc],
                [528, a.screen, Wc],
                [449, a.hasBase, We],
                [401, a.base, ib],
                [337, a.referrer, ib],
                [273, a.ua, ib],
                [209, a.address, ib],
                [145, a.title, ib],
                [81, a.doctype, ib]
            ]
        }

        function Fi(a) {
            return [
                [209, a.path, ib],
                [145, a.protocol, ib],
                [81, a.host, ib]
            ]
        }

        function Wc(a) {
            return [
                [129,
                    a.height, hb
                ],
                [65, a.width, hb]
            ]
        }

        function Pd(a) {
            return [
                [513, a.hidden, We],
                [449, a.prev, Xa],
                [385, a.next, Xa],
                [337, a.content, ib],
                [257, a.parent, Xa],
                [210, a.attributes, 81, ib, 145, ib],
                [145, a.name, ib],
                [65, a.id, Xa]
            ]
        }

        function ib(a) {
            var c = ws({}, a, [], 0);
            return c ? [xs, c, a] : [Sg, 0, 0]
        }

        function mh(a) {
            return [Hg, a.length, a]
        }

        function We(a) {
            return [Sg, 1, a ? 1 : 0]
        }

        function bg(a) {
            a = Aj(a);
            var c = a[0],
                b = a[1],
                d = (b >>> 28 | c << 4) >>> 0;
            c >>>= 24;
            return [Gf, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
        }

        function kg(a) {
            return [Gi, 4, a]
        }

        function hb(a) {
            return 0 > a ? [Gf, 10, Aj(a)] : Xa(a)
        }

        function Xa(a) {
            return [Ph, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
        }

        function Ph(a, c, b, d) {
            for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
            b[d] = a
        }

        function Sg(a, c, b, d) {
            b[d] = c
        }

        function Hg(a, c, b, d) {
            for (a = 0; a < c.length; ++a) b[d + a] = c[a]
        }

        function ya(a) {
            return function(c, b, d, e) {
                for (var f, g = 0, h = 0; h < b.length; ++h)
                    if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
                    else {
                        if (2048 > c) {
                            if (a) {
                                g += 2;
                                continue
                            }
                            d[e++] = c >> 6 | 192
                        } else {
                            if (55296 === (c & 64512) && 56320 ===
                                ((f = b.charCodeAt(h + 1)) & 64512)) {
                                if (a) {
                                    g += 4;
                                    continue
                                }
                                c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                ++h;
                                d[e++] = c >> 18 | 240;
                                d[e++] = c >> 12 & 63 | 128
                            } else {
                                if (a) {
                                    g += 3;
                                    continue
                                }
                                d[e++] = c >> 12 | 224
                            }
                            d[e++] = c >> 6 & 63 | 128
                        }
                        d[e++] = c & 63 | 128
                    }
                return a ? g : e
            }
        }

        function Gi(a, c, b, d) {
            return ys(a)(a, c, b, d)
        }

        function le(a, c, b, d) {
            var e = 0 > c ? 1 : 0;
            e && (c = -c);
            if (0 === c) lf(0 < 1 / c ? 0 : 2147483648, b, d);
            else if (a.isNaN(c)) lf(2143289344, b, d);
            else if (3.4028234663852886E38 < c) lf((e << 31 | 2139095040) >>> 0, b, d);
            else if (1.1754943508222875E-38 > c) lf((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>>
                0, b, d);
            else {
                var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                lf((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
            }
        }

        function lf(a, c, b) {
            c[b] = a & 255;
            c[b + 1] = a >>> 8 & 255;
            c[b + 2] = a >>> 16 & 255;
            c[b + 3] = a >>> 24
        }

        function Gf(a, c, b, d) {
            a = c[0];
            for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
            for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
            b[d++] = c
        }

        function Aj(a) {
            if (!a) return [0, 0];
            var c = 0 > a;
            c && (a = -a);
            var b = a >>> 0;
            a = (a - b) / 4294967296 >>> 0;
            c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
            return [a,
                b
            ]
        }

        function Vf(a, c) {
            return Ib(c, function(b) {
                var d = K(a),
                    e = d.C,
                    f = aa("dSync", d.D);
                W(c);
                if (e("dSync", !1)) f(1);
                else return f(!0), Bg(a, b, {
                    fb: c,
                    Hb: "s",
                    Yc: "ds",
                    Mb: f,
                    Pg: function(g, h, l) {
                        var n = g.kb;
                        g = g.host;
                        if (F(n, "settings")) return fa(Ec("ds.e"));
                        h = h(nb) - l;
                        l = g[1];
                        var x, I;
                        n = Hc((x = {}, x.di = n, x.dit = h, x.dip = l, x));
                        x = (I = {}, I["page-url"] = bb(a).href, I);
                        return fc(a, "S", Vp)({
                            H: n,
                            G: x
                        }, Vp).then(aa(10, f), va(a, "ds.rs"))
                    }
                })
            })
        }

        function Bg(a, c, b) {
            var d, e = b.fb,
                f = b.Mb;
            f = void 0 === f ? sa : f;
            var g = Jb(a),
                h = mf(a, c.userData, e),
                l = Bj(a),
                n = ca(ap, ra([zs, As], H))(a),
                x = F(c, "settings.sbp");
            b.Mb = f;
            x && (b.data = na({}, x, (d = {}, d.c = e.id, d)));
            return l.length ? Cb(a, g, h, c, n, b).then(function() {
                return Qd(a, l, h, g, n, b)
            }, sa) : (f(2), wa.resolve())
        }

        function Bj(a) {
            var c = qm(a);
            a = ca(bp, $h(["iPhone", "iPad"]))(a);
            return c ? Bs : a ? Cs : []
        }

        function Qd(a, c, b, d, e, f) {
            e = f.Pg;
            var g = void 0 === e ? sa : e,
                h = f.Yc;
            e = f.Mb;
            var l = void 0 === e ? sa : e,
                n = d(nb);
            return ji(a, c, f)(Rc(function(x) {
                l(6);
                ia(function(I) {
                    I && dh(a, h + ".s", I)
                }, x);
                x = d(Md);
                b.D(h, x).then(aa(7, l))
            }, function(x) {
                l(8);
                b.D(h, d(Md)).then(aa(9,
                    l));
                g(x, d, n)
            }))
        }

        function Cb(a, c, b, d, e, f) {
            var g = f.Yc,
                h = f.fb,
                l = f.Mb;
            return new wa(function(n, x) {
                var I = b.C(g, 0);
                I = parseInt("" + I, 10);
                return c(Md) - I <= e.He ? (l(3), x()) : Ds(a) ? n(void 0) : Kl(d) ? (l(4), x()) : n(Es(a, h)["catch"](ca(Qh(aa(5, l)), fa)))
            })
        }

        function ji(a, c, b) {
            var d = b.Hb,
                e = b.data,
                f = fc(a, d, b.fb);
            a = na({}, Wp);
            e && na(a.G, e);
            return Xm(qa(function(g) {
                return Ym(f(na({
                    T: {
                        Vc: !1,
                        Zc: !0
                    }
                }, Wp), qa(function(h) {
                    var l = h[1],
                        n = h[2];
                    h = Ha("", qa(function(x) {
                        return String.fromCharCode(x.charCodeAt(0) + 10)
                    }, h[0].split("")));
                    return "http" +
                        (n ? "s" : "") + "://" + h + ":" + l + "/" + Fs[d]
                }, g)).then(function(h) {
                    return na({}, h, {
                        host: g[h.Le]
                    })
                }))
            }, c))
        }

        function mf(a, c, b) {
            var d = c || {},
                e = fc(a, "u", b),
                f = pd(a);
            return {
                C: function(g, h) {
                    return db(d[g]) ? f.C(g, h) : d[g]
                },
                D: function(g, h) {
                    var l, n = "" + h;
                    d[g] = n;
                    f.D(g, n);
                    return e({
                        G: (l = {}, l.key = g, l.value = n, l)
                    }, [Q.Cb + "//" + E + "/user_storage_set"], {})["catch"](va(a, "u.d.s.s"))
                }
            }
        }

        function cg(a, c) {
            try {
                var b = c[0];
                var d = b[1]
            } catch (e) {
                return function() {
                    return wa.resolve()
                }
            }
            return function(e) {
                var f, g = (f = {}, f["browser-info"] = Gs, f["page-url"] =
                    a.location && "" + a.location.href, f);
                return d && (e = ma(a, e)) ? d(Hs, {
                    Ua: g,
                    ma: [],
                    Z: "site-info=" + Nh(e)
                })["catch"](sa) : wa.resolve()
            }
        }

        function pc(a, c) {
            var b = Og(function(d, e) {
                return d[1].ga > e[1].ga ? 1 : -1
            }, $b(Qm));
            b = qa(function(d) {
                var e = d[0],
                    f = d[1].gb;
                d = za(c, e) && !Ma(c[e]);
                e = c[e] !== (f || Za)(void 0);
                return sb(d && e)
            }, b);
            return Ql(Ha("", b))
        }

        function Tg(a) {
            if (Tk(a)) return null;
            var c = Is(a),
                b = c.Qf;
            db(b) && (c.Qf = null, Js(a).then(function(d) {
                c.Qf = d
            }));
            return b ? 1 : null
        }

        function Rl(a, c, b) {
            b = b.G;
            if ((void 0 === b ? {} : b).nohit) return null;
            a = vh(a);
            if (!a) return null;
            var d = b = null;
            F(a, "getEntriesByType") && (d = F(a.getEntriesByType("navigation"), "0")) && (b = Ks);
            if (!b) {
                var e = F(a, "timing");
                e && (b = Ls, d = e)
            }
            if (!b) return null;
            a = $d(a, d, b);
            c = W(c);
            c = Ms(c);
            return (c = ki(c, a)) && Ha(",", c)
        }

        function ki(a, c) {
            var b = a.length ? qa(function(d, e) {
                var f = c[e];
                return f === d ? null : f
            }, a) : c;
            a.length = 0;
            ia(ca(Za, vb("push", a)), c);
            return fb(wc(null), b).length === a.length ? null : b
        }

        function $d(a, c, b) {
            return qa(function(d) {
                var e = d[0],
                    f = d[1];
                if (Da(e)) return e(a, c) || null;
                if (1 === d.length) return c[e] ?
                    Math.round(c[e]) : null;
                var g;
                !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Xp[d[0]] || Xp[g]));
                if (!g) return null;
                d = Math.round(c[e]) - Math.round(c[f]);
                return 0 > d || 36E5 < d ? null : d
            }, b)
        }

        function Sb(a, c) {
            try {
                var b = c.localStorage.getItem(a);
                return b && Od(Ig(b))
            } catch (d) {}
            return null
        }

        function Sc(a) {
            var c = F(a, "webOS.service.request");
            return Da(c) ? new wa(function(b) {
                var d, e;
                c("luna://com.webos.service.sm", (d = {}, d.method = "deviceid/getIDs", d.parameters = (e = {}, e.idType = ["LGUDID"], e), d.onSuccess = function(f) {
                    b(Xc(F(f,
                        "idList.0.idValue")))
                }, d))
            }) : wa.resolve(null)
        }

        function li(a) {
            if (!io(a)) return null;
            a = F(a, "tizen.systeminfo.getCapabilities");
            try {
                if (Da(a)) return Xc(F(a(), "duid"))
            } catch (c) {}
            return null
        }

        function ij(a) {
            if (!io(a)) return null;
            a = F(a, "tizen.systeminfo.getCapability");
            if (Da(a)) try {
                return Xc(a("http://tizen.org/system/tizenid"))
            } catch (c) {}
            return null
        }

        function jl(a) {
            if (!io(a)) return null;
            a = F(a, "webapis.adinfo.getTIFA");
            if (Da(a)) try {
                return Xc(a())
            } catch (c) {}
            return null
        }

        function Xc(a) {
            return a ? Od(Ig(a)) : null
        }

        function Ig(a) {
            for (var c = [], b = 0; b < a.length; b++) {
                var d = a.charCodeAt(b);
                128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
            }
            return c
        }

        function ic(a) {
            for (var c = "", b = 0; b < a.length;) {
                var d = a.charCodeAt(b);
                if (128 > d) c += String.fromCharCode(d), b++;
                else if (191 < d && 224 > d) {
                    var e = a.charCodeAt(b + 1);
                    c += String.fromCharCode((d & 31) << 6 | e & 63);
                    b += 2
                } else e = a.charCodeAt(b + 1), c += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | a.charCodeAt(b + 2) & 63), b += 3
            }
            return c
        }

        function Od(a, c) {
            void 0 ===
                c && (c = !1);
            for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63])
            }
            switch (b - d) {
                case 1:
                    b = a[d] << 4;
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >>
                        6 & 63
                    ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
                    break;
                case 2:
                    b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
            }
            e = Ha("", e);
            return c ? Hf(e, !0) : e
        }

        function Fc(a, c) {
            void 0 === c && (c = !1);
            var b = a,
                d = "",
                e = 0;
            if (!b) return "";
            for (c && (b = Hf(b)); b.length % 4;) b += "=";
            do {
                var f = Je("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                    g = Je("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                    h = Je("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                    l = Je("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++));
                if (0 > f || 0 > g || 0 > h || 0 > l) return "";
                var n = f << 18 | g << 12 | h << 6 | l;
                f = n >> 16 & 255;
                g = n >> 8 & 255;
                n &= 255;
                d = 64 === h ? d + String.fromCharCode(f) : 64 === l ? d + String.fromCharCode(f,
                    g) : d + String.fromCharCode(f, g, n)
            } while (e < b.length);
            return d
        }

        function Hf(a, c) {
            void 0 === c && (c = !1);
            return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                return Ns[b] || b
            }) : ""
        }

        function xf(a) {
            try {
                var c = ea(a) ? a : [];
                return Ha(",", [a.name, a.description, ca(Yb, ac, cf(lg), Sl(","))(c)])
            } catch (b) {
                return ""
            }
        }

        function lg(a) {
            return Ha(",", [a.description, a.suffixes, a.type])
        }

        function jj(a, c) {
            for (var b = "", d = 0; d < c; d += 1) b += a;
            return b
        }

        function mg(a, c, b, d, e, f, g, h) {
            var l = b.C(f);
            Ma(l) && (b.D(f, g), e(a, c, b, d), l = b.C(f, g));
            db(h) || h.cb(f,
                "" + l);
            return l
        }

        function nf(a, c) {
            if (sj(a)) {
                var b = Ue(a).match(Os);
                if (b && b.length) return b[1] === c
            }
            return !1
        }

        function Rh(a, c, b) {
            return function(d) {
                var e, f, g = Wb(c, b);
                g && wh(a, d, c) && (g = Ea(g.params, g), (d = Yc({
                    event: a,
                    Ea: "products",
                    xa: Sh,
                    ai: "goods"
                }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
            }
        }

        function wh(a, c, b) {
            var d = !1,
                e = "";
            if (!wb(c)) return Mc(b, "", "ecomeo"), d;
            var f = c.goods;
            switch (a) {
                case "detail":
                case "add":
                case "remove":
                    Ja(f) && f.length ? (d = lb(function(g) {
                            return wb(g) && (Ta(g.id) || Gd(b, g.id) || Ta(g.name))
                        },
                        f)) || (e = "ecomgi") : e = "ecomgei";
                    break;
                case "purchase":
                    Gd(b, c.id) || Ta(c.id) ? d = !0 : e = "ecompi"
            }
            Mc(b, "", e);
            return d
        }

        function rd(a, c) {
            return {
                M: function(b, d) {
                    nh(b) ? d() : Ib(c, function(e) {
                        var f;
                        if (e = F(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.G = na(b.G || {}, e);
                        d()
                    })
                }
            }
        }

        function Ke(a, c, b, d) {
            if (c) {
                var e = [];
                c && (a.document.documentElement.contains(c) ? pe(a, c, vb("push", e), d) : Kb(e, Zc(a, c, d)));
                ia(b, e)
            }
        }

        function pe(a, c, b, d, e, f) {
            function g(l) {
                return Da(d) ? d(l) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT :
                    a.NodeFilter.FILTER_ACCEPT
            }
            void 0 === e && (e = -1);
            void 0 === f && (f = !1);
            var h = g(c);
            if (Da(b) && (f || h === a.NodeFilter.FILTER_ACCEPT) && (h && b(c), !B(c)))
                for (c = a.document.createTreeWalker(c, e, d ? {
                        acceptNode: g
                    } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
        }

        function Zc(a, c, b) {
            var d = [],
                e = ca(Za, vb("push", d));
            Da(b) ? (b = b(c), (Ma(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
            if (c.childNodes && 0 < c.childNodes.length) {
                c = c.childNodes;
                b = 0;
                for (var f = c.length; b < f; b += 1) {
                    var g = Zc(a, c[b]);
                    ia(e, g)
                }
            }
            return d
        }

        function of (a, c, b) {
            var d;
            a = [Yp(a, c, function(e) {
                d = e;
                e.Aa.F(b)
            }), function() {
                d && d.unsubscribe()
            }];
            return ra([t, a], ia)
        }

        function Le(a, c, b, d) {
            var e, f, g;
            if (b) {
                var h = F(d, "ecommerce") || {};
                var l = F(d, "event") || "";
                h = wb(h) && Ta(l) ? Yc(l, h) : void 0;
                if (!h) a: {
                    var n = d;!Ja(d) && Gd(a, ea(d)) && (n = lc(n));
                    if (Ja(n) && (h = n[0], l = n[1], n = n[2], Ta(l) && wb(n) && "event" === h)) {
                        h = Yc(l, n);
                        break a
                    }
                    h = void 0
                }
                if (d = h || oh(d)) fe(a, (e = {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)), b((f = {}, f.__ym = (g = {}, g.ecommerce = [d], g), f))
            }
        }

        function oh(a) {
            var c = F(a, "ecommerce");
            if (wb(c)) return a =
                fb($h(Ps), zb(c)), a = Oa(function(b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a), 0 === zb(a).length ? void 0 : a
        }

        function Yc(a, c) {
            var b, d, e = Ta(a) ? Qs[a] : a;
            if (e) {
                var f = e.event,
                    g = e.Ea,
                    h = e.ai,
                    l = void 0 === h ? "items" : h,
                    n = c.purchase || c;
                if (h = n[l]) {
                    e = qa(aa(e.xa, Cj), h);
                    var x = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
                    b = zb(n);
                    g && 1 < b.length && (x[f].actionField = Te(function(I, P) {
                        if (P === l) return I;
                        if ("currency" === P) return x.currencyCode = n.currency, I;
                        I[Rs[P] || jo[P] || P] = n[P];
                        return I
                    }, {}, b));
                    return x
                }
            }
        }

        function Cj(a, c) {
            var b = {};
            ia(function(d) {
                var e =
                    a[d] || jo[d] || d; - 1 !== xe(d, "item_category") ? (e = jo.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
            }, zb(c));
            return b
        }

        function mi(a, c, b) {
            var d, e, f, g = F(b, "target");
            if (g) {
                var h = Ad(ko, a, g);
                h || (g = Ad("div", a, g)) && (id(ko + ",div", g).length || (h = g));
                if (h = (g = pb(h)) && kj(a, h, ac(["p", Ss[g], "c"]), Ts, void 0)) h = "?" + he(h), g = Rd(a, c, "gbn", (d = {}, d.id = c.id, d.query = h, d)), b = F(b, "isTrusted"), b = Ma(b) ? void 0 : (e = {}, e.__ym = (f = {}, f.ite = sb(b), f), e), Zm(a, c, "btn", g).reachGoal(h, b)
            }
        }

        function cb(a, c, b, d) {
            return function() {
                if (Wb(a,
                        c)) {
                    var e = lc(arguments);
                    return d.apply(void 0, e)
                }
            }
        }

        function La(a, c, b, d) {
            var e = F(d, "target");
            e && (d = F(d, "isTrusted"), (e = Ad("button,input", a, e)) && "submit" === e.type && (e = Us(a, e))) && (b.push(e), eb(a, ra([!1, a, c, b, e, d], Yj), 300))
        }

        function Yj(a, c, b, d, e, f) {
            var g, h, l, n = $a(c)(e, d),
                x = -1 !== n;
            if (a || x) x && d.splice(n, 1), a = kj(c, e, ["i", "n", "p"], void 0, void 0), a = "?" + he(a), d = ra([c, b, "fg", (g = {}, g.id = b.id, g.query = a, g)], Ug), f = Ma(f) ? void 0 : (h = {}, h.__ym = (l = {}, l.ite = sb(f), l), h), Zm(c, b, "form", d).reachGoal(a, f)
        }

        function Ug(a, c,
            b, d) {
            return Vs(a, c).then(ca(ra([Rd(a, c, b, d), sa], H), Va))
        }

        function ob(a, c) {
            var b;
            a((b = {}, b.clickmap = db(c) ? !0 : c, b))
        }

        function ni(a, c, b, d, e) {
            var f, g = "clmap/" + e.id;
            c = (f = {}, f["page-url"] = c, f["pointer-click"] = b, f);
            f = {
                H: Hc(),
                G: c,
                ra: {
                    ya: g
                }
            };
            d(f, e)["catch"](va(a, "c.s.c"))
        }

        function lj(a, c, b, d, e) {
            if (za(a, "ymDisabledClickmap") || !c || !c.element) return !1;
            a = pb(c.element);
            if (e && !e(c.element, a) || Ia(c.button, [2, 3]) && "A" !== a || Oc(wc(a), d)) return !1;
            d = c.element;
            if (c && b) {
                if (50 > c.time - b.time) return !1;
                e = Math.abs(b.position.x -
                    c.position.x);
                a = Math.abs(b.position.y - c.position.y);
                c = c.time - b.time;
                if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
            }
            for (; d;) {
                if (Ws(d)) return !1;
                d = d.parentElement
            }
            return !0
        }

        function kd(a, c) {
            var b = null;
            try {
                if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
            } catch (d) {}
            return b
        }

        function Eb(a) {
            var c = a.which;
            a = a.button;
            return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
        }

        function wd(a, c) {
            var b = Cf(a),
                d = mj(a);
            return {
                x: c.pageX || c.clientX + d.x -
                    (b.clientLeft || 0) || 0,
                y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
            }
        }

        function Me(a, c) {
            return {
                M: function(b, d) {
                    var e, f = b.H,
                        g = b.Ba,
                        h = b.G,
                        l = b.T;
                    l = void 0 === l ? {} : l;
                    if (f && h) {
                        var n = Jb(a);
                        f.cb("rqnl", 1);
                        for (var x = Tl(a), I = 1; x[I];) I += 1;
                        b.L || (b.L = {});
                        b.L.tb = I;
                        x[I] = (e = {}, e.protocol = Q.Cb, e.host = E, e.resource = b.ra.ya, e.postParams = l.Z, e.time = n(nb), e.counterType = c.$, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = vd(a), e);
                        g && (x[I].telemetry = g.l());
                        If(a)
                    }
                    d()
                },
                Ca: function(b, d) {
                    ng(a, b);
                    d()
                }
            }
        }

        function ng(a, c) {
            var b =
                Tl(a);
            c.H && !Kc(b) && c.L && (delete b[c.L.tb], If(a))
        }

        function If(a) {
            var c = Tl(a);
            pd(a).D("retryReqs", c)
        }

        function Lb(a, c) {
            if (a.mi()) {
                var b = kl(c);
                if (b && !vf("ym-disable-tracklink", b)) {
                    var d = a.l,
                        e = a.Ph,
                        f = a.fb,
                        g = a.sender,
                        h = a.Wh,
                        l = f.pc,
                        n = b.href;
                    var x = Pc(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                    x || (x = (x = b.querySelector("img")) ? Pc(x.getAttribute("title") || x.getAttribute("alt")) : "");
                    x = n === x ? "" : x;
                    var I = F(c, "isTrusted");
                    if (vf("ym-external-link", b)) qc(d, f, {
                        url: n,
                        zb: !0,
                        title: x,
                        Lc: I,
                        sender: g
                    });
                    else {
                        l = l ?
                            Af(d, l).hostname : bb(d).hostname;
                        h = RegExp("\\.(" + Ha("|", qa($m, h)) + ")$", "i");
                        var P = b.protocol + "//" + b.hostname + b.pathname;
                        h = Zp.test(P) || Zp.test(n) || h.test(n) || h.test(P);
                        b = b.hostname;
                        rm(l) === rm(b) ? h ? qc(d, f, {
                            url: n,
                            Jc: !0,
                            Lc: I,
                            title: x,
                            sender: g
                        }) : x && e.D("il", Pc(x).slice(0, 100)) : n && Xs.test(n) || qc(d, f, {
                            url: n,
                            Rb: !0,
                            zb: !0,
                            Jc: h,
                            Lc: I,
                            title: x,
                            sender: g
                        })
                    }
                }
            }
        }

        function qc(a, c, b) {
            var d, e, f, g, h = Hc();
            void 0 !== b.Lc && h.D("ite", sb(b.Lc));
            b.Jc && h.D("dl", 1);
            b.zb && h.D("ln", 1);
            var l = b.eg || {};
            h = {
                H: h,
                L: {
                    title: l.title || b.title,
                    Rb: !!b.Rb,
                    O: l.params
                },
                G: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.pc || bb(a).href, d)
            };
            d = "Link";
            b.Jc ? d = b.zb ? "Ext link - File" : "File" : b.zb && (d = "Ext link");
            fe(a, (e = {}, e.counterKey = W(c), e.name = "event", e.data = (f = {}, f.schema = "Link click", f.name = (b.zb ? "external" : "internal") + " url: " + b.url, f), e));
            c = b.sender(h, c).then(Rd(a, c, "lcl", (g = {}, g.prefix = d, g.id = c.id, g.url = b.url, g), b.eg));
            return ae(a, "cl.p.s", c, l.callback || sa, l.ctx)
        }

        function xh(a, c) {
            var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] ||
                !1;
            a((d = {}, d.trackLinks = e, d))
        }

        function Ul(a, c, b, d) {
            var e = bb(a),
                f = e.hostname;
            e = e.href;
            if (c = Vl(c).url) a = Af(a, c), f = a.hostname, e = a.href;
            return [d + "://" + f + "/" + b, e || ""]
        }

        function Pb(a, c, b, d) {
            var e;
            if (a = Wb(a, b)) {
                var f = d.data;
                b = "" + b.id;
                var g = d.sended || [];
                d.sended || (d.sended = g);
                Ia(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.De((e = {}, e.type = "params", e.data = f, e)))
            }
        }

        function ne(a, c, b) {
            void 0 === b && (b = Za);
            var d = dj(a);
            b(d);
            var e = aa(d, Dj);
            Ld(a, c, function(f) {
                f.Aa.F(e)
            });
            return d
        }

        function Dj(a, c) {
            var b = F(c, "ymetrikaEvent");
            b && a.N(F(b, "type"), b)
        }

        function Ld(a, c, b, d) {
            void 0 === b && (b = sa);
            void 0 === d && (d = !1);
            var e = Wl(a);
            if (c && Da(c.push)) {
                var f = c.push;
                c.push = function() {
                    var g = lc(arguments),
                        h = g[0];
                    d && e.N(h);
                    g = f.apply(c, g);
                    d || e.N(h);
                    return g
                };
                a = {
                    Aa: e,
                    unsubscribe: function() {
                        c.push = f
                    }
                };
                b(a);
                ia(e.N, c);
                return a
            }
        }

        function yd(a) {
            a = K(a);
            var c = a.C("dataLayer", []);
            a.D("dataLayer", c);
            return c
        }

        function ed(a, c) {
            var b, d;
            Ia(c, qa(S("ymetrikaEvent.type"), a)) || a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type =
                c, d), b))
        }

        function og(a, c) {
            var b = Ll(a, c),
                d = [],
                e = [];
            if (!b) return null;
            var f = ra([a, b.fc], ie),
                g = aa(f, Wf);
            b.V.F(["initToParent"], function(h) {
                g(d, b.children[h[1].counterId])
            }).F(["parentConnect"], function(h) {
                g(e, b.fa[h[1].counterId])
            });
            return {
                V: b.V,
                mk: function(h, l) {
                    return new wa(function(n, x) {
                        b.fc(h, l, function(I, P) {
                            n([I, P])
                        });
                        eb(a, aa(Ec(), x), 5100, "is.o")
                    })
                },
                Ce: function(h) {
                    var l = {
                        Fe: [],
                        Tc: [],
                        data: h
                    };
                    d.push(l);
                    return f(b.children, l, h)
                },
                De: function(h) {
                    var l = {
                        Fe: [],
                        Tc: [],
                        data: h
                    };
                    e.push(l);
                    return f(b.fa, l, h)
                }
            }
        }

        function Wf(a, c, b) {
            c = fb(function(d) {
                return !Ia(b.info.counterId, d.Tc)
            }, c);
            ia(function(d) {
                var e;
                b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
            }, c)
        }

        function ie(a, c, b, d, e) {
            return (new wa(function(f, g) {
                var h = zb(b),
                    l = ca(d.resolve || Za, Qh(f)),
                    n = ca(d.reject || Za, Qh(g));
                d.resolve = l;
                d.reject = n;
                ia(function(x) {
                    var I;
                    d.Tc.push(+x);
                    var P = b[x],
                        T = eb(a, aa(Ec(), n), 5100, "is.m");
                    c(P.window, na(e, (I = {}, I.toCounter = Nc(x), I)), function(ba, ka) {
                        la(a, T);
                        d.Fe.push(x);
                        d.resolve && d.resolve(ka)
                    })
                }, h)
            }))["catch"](va(a,
                "if.b"))
        }

        function Hi(a) {
            var c = sa,
                b = null,
                d = a.length;
            if (0 !== a.length && a[0]) {
                var e = a.slice(-1)[0];
                Da(e) && (c = e, d = a.length + -1);
                var f = a.slice(-2)[0];
                Da(f) && (c = f, b = e, d = a.length + -2);
                d = a.slice(0, d);
                return {
                    vg: b,
                    ec: c,
                    O: 1 === d.length ? a[0] : Ra(d)
                }
            }
        }

        function ae(a, c, b, d, e) {
            var f = ra([a, d, e], Y);
            return b.then(f, function(g) {
                f();
                dh(a, c, g)
            })
        }

        function fd(a, c) {
            return {
                M: function(b, d) {
                    var e, f, g = (b.L || {}).O,
                        h = b.T;
                    h = void 0 === h ? {} : h;
                    if (g && (Xf(c, g), !h.Z && b.H && b.G)) {
                        var l = ma(a, g),
                            n = $p(a),
                            x = b.H.C("pv");
                        l && !b.G.nohit && (fe(a, (e = {},
                            e.counterKey = W(c), e.name = "params", e.data = (f = {}, f.val = g, f), e)), x ? encodeURIComponent(l).length > Q.Ci ? n.push([b.H, g]) : b.G["site-info"] = l : (h.Z = l, b.T = h, b.Lb || (b.Lb = {}), b.Lb.Gg = !0))
                    }
                    d()
                },
                Ca: function(b, d) {
                    var e = $p(a),
                        f = Wb(a, c),
                        g = f && f.params;
                    g && (f = fb(ca(sm, wc(b.H)), e), ia(function(h) {
                        g(h[1]);
                        h = ll(a)(h, e);
                        e.splice(h, 1)
                    }, f));
                    d()
                }
            }
        }

        function D(a, c) {
            return function(b) {
                L(a, c, b)
            }
        }

        function J(a, c) {
            X(a)(function(b) {
                delete b[c]
            })
        }

        function L(a, c, b) {
            X(a)(function(d) {
                d[c] = na(d[c] || {}, b)
            })
        }

        function X(a) {
            a = K(a);
            var c = a.C("dsjf") ||
                vc({});
            a.ta("dsjf", c);
            return c
        }

        function ja(a, c) {
            return function(b) {
                var d, e, f = Wb(a, c);
                if (f) {
                    var g = Th(a, W(c));
                    wb(b) ? ea(zb(b)) ? (b = ua(a, b)) && ea(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : g.log("fpeo") : g.log("fpno")
                }
            }
        }

        function ua(a, c) {
            return Oa(function(b, d) {
                var e = d[0],
                    f = d[1],
                    g = f;
                f = wb(f);
                if (!f && (Gd(a, g) && (g = "" + g), !Ta(g))) return b;
                g = f ? ua(a, g) : g;
                ea(g) && b.push([e, g]);
                return b
            }, [], $b(c))
        }

        function Aa(a, c, b) {
            void 0 === b && (b = 0);
            c = $b(c);
            c = Oa(function(d, e) {
                var f = e[0],
                    g = e[1],
                    h = wb(g);
                if (!h && (Gd(a, g) && (g = "" + g), !Ta(g))) return d;
                if (h) g = Aa(a, g, b + 1);
                else if (!b && Ia(f, Ys)) g = wa.resolve(g);
                else {
                    "phone_number" === f ? g = rb(a, g) : "email" === f && (g = kb(g));
                    if (!g) return d;
                    g = Sa(a, g)
                }
                d.push(g.then(function(l) {
                    return [f, l]
                }));
                return d
            }, [], c);
            return wa.all(c)
        }

        function Sa(a, c) {
            return new wa(function(b, d) {
                var e = (new a.TextEncoder).encode(c);
                a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                    f = new a.Blob([f], {
                        type: "application/octet-binary"
                    });
                    var g = new a.FileReader;
                    g.onload = function(h) {
                        h = F(h, "target.result") || "";
                        var l = xe(h, ","); -
                        1 !== l ? b(h.substring(l + 1)) : d(ub("fpm.i"))
                    };
                    g.readAsDataURL(f)
                }, d)
            })
        }

        function rb(a, c) {
            var b = Um(c),
                d = b.length;
            if (!(Zs.test(c) || c.length - d > d || 10 > d || 16 < d)) {
                d = b[0];
                var e = c[1];
                if ("+" !== c[0] || e === d) return d = $s(c), 10 > b.length || 13 < b.length || d.startsWith("+8") ? Pc(c) : "8" === d[0] ? "7" + b.slice(1) : "+" === d[0] || Gd(a, +d[0]) ? b : "7" + b
            }
        }

        function kb(a) {
            var c = Pc(a).replace(/^\++/gm, "").toLowerCase(),
                b = c.lastIndexOf("@");
            if (-1 === b) return bc(c);
            a = c.substr(0, b);
            b = c.substr(b + 1);
            if (!b || !df(a)) return bc(c);
            b = b.replace("googlemail.com",
                "gmail.com");
            tm(b) && (b = "yandex.ru");
            "yandex.ru" === b ? a = a.replace(um, "-") : "gmail.com" === b && (a = a.replace(um, ""));
            c = xe(a, "+"); - 1 !== c && (a = a.slice(0, c));
            return bc(a + "@" + b)
        }

        function bc(a) {
            var c = a.length;
            return 5 > c || 100 < c ? void 0 : a
        }

        function df(a) {
            var c = a.length;
            return 1 > c || 64 < c ? !1 : lb(function(b) {
                var d = b.length;
                if (1 > d) b = !1;
                else if ('"' === b[0] && '"' === b[d - 1] && 2 < d) a: {
                    for (d = 1; d + 2 < b.length; d += 1) {
                        var e = b.charCodeAt(d);
                        if (32 > e || 34 === e || 126 < e) {
                            b = !1;
                            break a
                        }
                        if (92 === e) {
                            if (d + 2 === b.length || 32 > b.charCodeAt(d + 1)) {
                                b = !1;
                                break a
                            }
                            d +=
                                1
                        }
                    }
                    b = !0
                }
                else b = at.test(b) ? !0 : !1;
                return b
            }, a.split("."))
        }

        function ri(a, c, b, d) {
            var e = aq[b];
            return e ? function() {
                var f = lc(arguments);
                f = d.apply(void 0, f);
                var g = K(a);
                g.ta("mt", {});
                g = g.C("mt");
                var h = g[e];
                g[e] = h ? h + 1 : 1;
                return f
            } : d
        }

        function Wb(a, c) {
            var b = K(a).C("counters", {}),
                d = W(c);
            return b[d]
        }

        function Rd(a, c, b, d, e) {
            return ra([a, W(c), e ? [b + ".p", e] : b, d], Mc)
        }

        function Mc(a, c, b, d) {
            Th(a, c).log(b, d)
        }

        function sk(a, c) {
            function b(d, e, f) {
                var g, h;
                fe(a, (g = {}, g.name = "log", g.counterKey = c, g.data = (h = {}, h.args = Ja(e) ? e : [e],
                    h.type = d, h.variables = f, h), g))
            }
            return {
                log: aa("log", b),
                error: aa("error", b),
                warn: aa("warn", b)
            }
        }

        function Ib(a, c) {
            var b = W(a);
            return bq()(bt(b)).then(c)
        }

        function nj(a, c, b) {
            var d, e;
            c = W(c);
            var f = Uk(a);
            b = na({
                xg: f(nb)
            }, b);
            fe(a, (d = {}, d.counterKey = c, d.name = "counterSettings", d.data = (e = {}, e.settings = b, e), d));
            return bq()(ef(c, b))
        }

        function ef(a, c) {
            return function(b) {
                var d = b[a];
                d ? (d.Xb = !0, d.Wb(c)) : b[a] = {
                    promise: wa.resolve(c),
                    Xb: !0,
                    Wb: sa
                }
            }
        }

        function Sd(a) {
            return lo["*"] ? yf(lo["*"]) : a ? yf(lo[a]) : void 0
        }

        function yf(a) {
            if (a) return Oa(function(c,
                b) {
                var d = Xl[b];
                d && c.push(d);
                return c
            }, [], a)
        }

        function Uh(a, c, b, d) {
            return new wa(function(e, f) {
                var g = Cf(a),
                    h = c("img"),
                    l = ca(aa(h, He), aa(Ec(d.ma), f)),
                    n = Ba(a, l, d.Va || 3E3);
                h.onerror = l;
                h.onload = ca(aa(h, He), aa(null, e), ra([a, n], la));
                l = na({}, d.Ua);
                delete l.wmode;
                h.src = je(b, d, l);
                sj(a) && (na(h.style, {
                    position: "absolute",
                    visibility: "hidden",
                    width: "0px",
                    height: "0px"
                }), g.appendChild(h))
            })
        }

        function Ne(a, c, b) {
            var d, e = new a.XMLHttpRequest,
                f = b.Z,
                g = na(b.mb ? (d = {}, d.wmode = "7", d) : {}, b.Ua);
            return new wa(function(h, l) {
                e.open(b.cc ||
                    "GET", yc(c, he(g)), !0);
                e.withCredentials = !1 !== b.Vc;
                b.Va && (e.timeout = b.Va);
                m($b, cf(function(x) {
                    e.setRequestHeader(x[0], x[1])
                }))(b.Oa);
                var n = ra([a, e, Ec(b.ma), b.mb, b.Zc, h, l], Zj);
                e.onreadystatechange = n;
                try {
                    e.send(f)
                } catch (x) {}
            })
        }

        function Zj(a, c, b, d, e, f, g, h) {
            if (4 === c.readyState)
                if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(Ej(c));
                else {
                    e = null;
                    if (d) try {
                        (e = Ye(a, c.responseText)) || g(b)
                    } catch (l) {
                        g(b)
                    }
                    f(e)
                }
            return h
        }

        function tk(a, c, b, d) {
            var e, f = na(d.mb ? (e = {}, e.wmode = "7", e) : {}, d.Ua),
                g = c || {
                    signal: void 0,
                    abort: sa
                },
                h = a.fetch(yc(b, he(f)), {
                    method: d.cc,
                    body: d.Z,
                    credentials: !1 === d.Vc ? "omit" : "include",
                    headers: d.Oa,
                    signal: g.signal
                }),
                l = aa(d.ma, Ec);
            return new wa(function(n, x) {
                d.Va && Ba(a, function() {
                    try {
                        g.abort()
                    } catch (I) {}
                    x(l())
                }, d.Va);
                return h.then(function(I) {
                    if (!I.ok) {
                        if (d.Zc) return fa(Ej(I));
                        ee(d.ma)
                    }
                    return d.Zc ? I.text() : d.mb ? I.json() : null
                }).then(n)["catch"](aa(l(), x))
            })
        }

        function ff(a, c, b) {
            return new wa(function(d, e) {
                var f, g, h = "_ymjsp" + nc(a),
                    l = na((f = {}, f.callback = h, f), b.Ua),
                    n = ra([a, h], Vg);
                a[h] = function(I) {
                    try {
                        n(),
                            He(x), d(I)
                    } catch (P) {
                        e(P)
                    }
                };
                l.wmode = "5";
                var x = Lc(a, (g = {}, g.src = je(c, b, l), g));
                if (!x) return n(), e(ub("jp.s"));
                f = aa(x, He);
                f = ca(f, aa(Ec(b.ma), e));
                g = Ba(a, f, b.Va || 1E4);
                g = ra([a, g], la);
                x.onload = g;
                x.onerror = ca(n, g, f)
            })
        }

        function Vg(a, c) {
            try {
                delete a[c]
            } catch (b) {
                a[c] = void 0
            }
        }

        function je(a, c, b) {
            (b = he(b)) && (a = yc(a, b));
            c.Z && (a = yc(a, c.Z));
            return a
        }

        function yc(a, c) {
            if (!c || !c.length) return a;
            var b = a.split("#"),
                d = b[0];
            b = (b = Ha("#", b.slice(1))) ? "#" + b : "";
            return od(a, "?") ? d + "&" + c + b : d + "?" + c + b
        }

        function Qc(a) {
            return (a.split(":")[1] ||
                "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
        }

        function Ii(a) {
            var c = F(a, "navigator.sendBeacon");
            return c && xc("sendBeacon", c) ? ra([a, Ea(c, F(a, "navigator"))], Im) : !1
        }

        function Im(a, c, b, d) {
            return new wa(function(e, f) {
                var g;
                if (!F(a, "navigator.onLine")) return f();
                var h = na(d.Ua, (g = {}, g["force-urlencoded"] = 1, g));
                g = b + "?" + he(h) + (d.Z ? "&" + d.Z : "");
                return 2E3 < g.length ? f(Ec("sb.tlq")) : c(g) ? e("") : f()
            })
        }

        function Pl(a, c, b) {
            c = Ja(c) ? c : Wg[c] || Xg;
            var d = qa(sm, c);
            ia(function(e) {
                return d.unshift(e)
            }, an);
            return qa(ca(oa([a,
                b
            ]), Va), d)
        }

        function nd(a) {
            return {
                M: function(c, b) {
                    var d = c.G;
                    if (!c.H || !d) return b();
                    var e = d["page-ref"],
                        f = d["page-url"];
                    e && f !== e ? d["page-ref"] = gf(a, e) : delete d["page-ref"];
                    d["page-url"] = gf(a, f).slice(0, Q.Ei);
                    return b()
                }
            }
        }

        function gf(a, c) {
            var b = bb(a),
                d = b.href,
                e = b.host,
                f = -1;
            if (!Ta(c) || db(c)) return d;
            b = c.replace(cq, "");
            if (-1 !== b.search(ct)) return b;
            var g = b.charAt(0);
            if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
            if (-1 !== f) return d.substr(0, f) + b;
            if ("/" === g) {
                if (f = xe(d,
                        e), -1 !== f) return d.substr(0, f + e.length) + b
            } else return d = d.split("/"), d[d.length - 1] = b, Ha("/", d);
            return ""
        }

        function dg(a, c) {
            return {
                M: function(b, d) {
                    var e = dq(c);
                    e = ra([b, e, d], Vk);
                    eg(a, c, e)
                },
                Ca: function(b, d) {
                    var e = b.H,
                        f = dq(c);
                    if (e) {
                        var g = f.aa;
                        f.Pb === e && g && (ia(Va, g), f.aa = null)
                    }
                    d()
                }
            }
        }

        function Vk(a, c, b) {
            var d = a.H;
            d ? nh(a) ? (c.Pb = d, b()) : c.aa ? c.aa.push(b) : b() : b()
        }

        function nh(a) {
            return (a = a.H) && a.C("pv") && !a.C("ar")
        }

        function eg(a, c, b) {
            if (q(a) && Cd(a)) {
                var d = dt(c);
                if (!d.zd) {
                    d.zd = !0;
                    c = Ll(a, c);
                    if (!c) {
                        b();
                        return
                    }
                    d.aa = [];
                    var e = function() {
                        d.aa && (ia(Va, d.aa), d.aa = null)
                    };
                    eb(a, e, 3E3);
                    c.V.F(["initToChild"], e)
                }
                d.aa ? d.aa.push(b) : b()
            } else b()
        }

        function Jg(a, c) {
            return {
                M: function(b, d) {
                    var e = b.H;
                    if (e && (!c || c.Eh)) {
                        var f = a.document.title;
                        b.L && b.L.title && (f = b.L.title);
                        var g = Ga("getElementsByTagName", a.document);
                        "string" !== typeof f && g && (f = g("title"), f = (f = F(f, "0.innerHtml")) ? f : "");
                        f = f.slice(0, Q.Di);
                        e.D("t", f)
                    }
                    d()
                }
            }
        }

        function bd(a) {
            return function(c, b) {
                return {
                    M: function(d, e) {
                        var f = d.H,
                            g = d.G;
                        f && g && ia(function(h) {
                            var l = Yl[h],
                                n = "bi",
                                x = f;
                            l || (l = mo[h], n = "tel", x = Pa(d));
                            l && (l = pa(n + ":" + h, l, null)(c, b, d), x.cb(h, l))
                        }, a || et());
                        e()
                    }
                }
            }
        }

        function Nf(a, c) {
            var b = Zl(a);
            c.F(["initToParent"], function(d) {
                var e = d[0];
                d = d[1];
                window.window && (b.children[d.counterId] = {
                    info: d,
                    window: e.source
                })
            }).F(["initToChild"], function(d) {
                var e = d[0];
                d = d[1];
                e.source === a.parent && c.N("parentConnect", [e, d])
            }).F(["parentConnect"], function(d) {
                var e = d[1];
                e.counterId && (b.fa[e.counterId] = {
                    info: e,
                    window: d[0].source
                })
            })
        }

        function gc(a) {
            if (xc("MutationObserver", a.MutationObserver)) {
                var c =
                    Zl(a).children,
                    b = new a.MutationObserver(function() {
                        ia(function(d) {
                            F(c[d], "window.window") || delete c[d]
                        }, zb(c))
                    });
                vg(a)(Rc(sa, function() {
                    b.observe(a.document.body, {
                        subtree: !0,
                        childList: !0
                    })
                }))
            }
        }

        function ml(a, c) {
            return function(b, d) {
                var e, f = {
                    Wa: Jb(a)(nb),
                    key: a.Math.random(),
                    dir: 0
                };
                b.length && (f.Wa = Nc(b[0]), f.key = parseFloat(b[1]), f.dir = Nc(b[2]));
                na(d, c);
                var g = (e = {
                    data: d
                }, e.__yminfo = Ha(":", ["__yminfo", f.Wa, f.key, f.dir]), e);
                return {
                    meta: f,
                    Yb: ma(a, g) || ""
                }
            }
        }

        function vg(a, c) {
            function b(e) {
                F(c, d) ? e() : eb(a, aa(e,
                    b), 100)
            }
            void 0 === c && (c = a);
            var d = (c.nodeType ? "contentWindow." : "") + "document.body";
            return vc(function(e, f) {
                b(f)
            })
        }

        function xd(a, c) {
            var b = c.wb,
                d = b || "uid";
            b = b ? a.location.hostname : void 0;
            var e = qk(a),
                f = pd(a),
                g = Jb(a)(Ji),
                h = nl(a, c),
                l = h[0];
            h = h[1];
            var n = e.C("d");
            eq(a, c);
            var x = !1;
            !h && l && (h = l, x = !0);
            if (!h) h = Ha("", [g, nc(a, 1E6, 999999999)]), x = !0;
            else if (!n || 15768E3 < g - Nc(n)) x = !0;
            x && !c.Ka && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
            f.D(d, h);
            return h
        }

        function hf(a, c) {
            return !c.Ka && eq(a, c)
        }

        function nl(a, c) {
            var b = pd(a),
                d = qk(a),
                e = c.wb || "uid";
            return [b.C(e), d.C(e)]
        }

        function vd(a) {
            var c = K(a),
                b = c.C("hitId");
            b || (b = nc(a), c.D("hitId", b));
            return b
        }

        function kj(a, c, b, d, e) {
            return Oa(function(f, g) {
                var h = null;
                g in fq ? h = c.getAttribute && c.getAttribute(fq[g]) : g in bn && (h = "p" === g ? bn[g](a, c, e) : "c" === g ? bn[g](a, c, d) : bn[g](a, c));
                h && (h = h.slice(0, gq[g] || 100), f[g] = no[g] ? "" + Re(h) : h);
                return f
            }, {}, b)
        }

        function kl(a) {
            var c = null;
            try {
                c = a.target || a.srcElement
            } catch (b) {}
            if (c) {
                3 === c.nodeType && (c = c.parentNode);
                for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); F(c,
                        "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                return c.href ? c : null
            }
            return null
        }

        function Lc(a, c) {
            var b = Ge(a);
            if (b) {
                var d = a.document,
                    e = b("script");
                e.src = c.src;
                e.type = c.type || "text/javascript";
                e.charset = c.charset || "utf-8";
                e.async = c.async || !0;
                try {
                    var f = d.getElementsByTagName("head")[0];
                    if (!f) {
                        var g = d.getElementsByTagName("html")[0];
                        f = b("head");
                        g && g.appendChild(f)
                    }
                    f.insertBefore(e, f.firstChild);
                    return e
                } catch (h) {}
            }
        }

        function Pk(a, c) {
            var b = hq(a);
            Ia(c, b.Ab) && (b.Ab = fb(ca(wc(c), yh), b.Ab), b.Ab.length || (He(b.yb), b.yb = null))
        }

        function fl(a, c, b) {
            var d = hq(c);
            Ia(b, d.Ab) || d.Ab.push(b);
            if (Kc(d.yb)) {
                b = Ge(a);
                if (!b) return null;
                b = b("iframe");
                na(b.style, {
                    display: "none",
                    width: "1px",
                    height: "1px",
                    visibility: "hidden"
                });
                b.src = c;
                a = Cf(a);
                if (!a) return null;
                a.appendChild(b);
                d.yb = b
            } else(a = F(d.yb, "contentWindow")) && a.postMessage("frameReinit", "*");
            return d.yb
        }

        function oi(a, c) {
            var b = Ja(a) ? a : [a];
            c = c || document;
            if (c.querySelectorAll) {
                var d =
                    Ha(", ", qa(function(e) {
                        return "." + e
                    }, b));
                return Yb(c.querySelectorAll(d))
            }
            if (c.getElementsByClassName) return fh(ca(vb("getElementsByClassName", c), Yb), b);
            d = c.getElementsByTagName("*");
            b = "(" + Ha("|", b) + ")";
            return fb(aa(b, vf), Yb(d))
        }

        function Kh(a, c, b) {
            for (var d = "", e = iq(), f = pb(c) || "*"; c && c.parentNode && !Ia(f, ["BODY", "HTML"]);) d += e[f] || "*", d += ak(a, c, b) || "", c = c.parentElement, f = pb(c) || "*";
            return Pc(d, 128)
        }

        function ak(a, c, b) {
            if (a = Kg(a, c)) {
                a = a.childNodes;
                for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                    if (d ===
                        (a[f] && a[f].nodeName)) {
                        if (c === a[f]) return e;
                        b && a[f] === b || (e += 1)
                    }
            }
            return 0
        }

        function Kg(a, c) {
            var b = F(a, "document");
            return c && c !== b.documentElement ? c === ye(a) ? b.documentElement : F(c, "parentNode") : null
        }

        function Mf(a, c) {
            var b = Rb(a, c),
                d = b.left;
            b = b.top;
            var e = oj(a, c);
            return [d, b, e[0], e[1]]
        }

        function oj(a, c) {
            var b = F(a, "document");
            if (c === ye(a) || c === b.documentElement) {
                b = Cf(a);
                var d = me(a);
                return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
            }
            return (b = $c(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
        }

        function Rb(a, c) {
            var b = c,
                d = F(a, "document"),
                e = pb(b);
            if (!b || !b.ownerDocument || "PARAM" === e || b === ye(a) || b === d.documentElement) return {
                left: 0,
                top: 0
            };
            if (d = $c(b)) return b = mj(a), {
                left: Math.round(d.left + b.x),
                top: Math.round(d.top + b.y)
            };
            for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
            return {
                left: d,
                top: e
            }
        }

        function Qk(a, c, b) {
            if (Rg(a)) return Yb(b.querySelectorAll(c));
            var d = sd(c.split(" "), b);
            return fb(function(e, f) {
                return $a(a)(e, d) === f
            }, d)
        }

        function sd(a, c) {
            var b = Kb([], a),
                d = b.shift();
            if (!d) return [];
            d = c.getElementsByTagName(d);
            return b.length ? fh(aa(b, sd), Yb(d)) : Yb(d)
        }

        function Hd(a, c) {
            if (c.querySelector) return c.querySelector(a);
            var b = id(a, c);
            return b && b.length ? b[0] : null
        }

        function id(a, c) {
            if (!c || !c.querySelectorAll) return [];
            var b = c.querySelectorAll(a);
            return b ? Yb(b) : []
        }

        function pj(a, c) {
            return za(c, "isConnected") ? !c.isConnected : Ad("html", a, c) !== a.document.documentElement
        }

        function Ad(a, c, b) {
            if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
            if (c.Element.prototype.closest && xc("closest",
                    c.Element.prototype.closest) && b.closest) return b.closest(a);
            var d = Sp(c);
            if (d) {
                for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                return b && 1 === b.nodeType ? b : null
            }
            if (Rg(c)) {
                for (a = Yb((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === $a(c)(b, a);) b = b.parentElement || b.parentNode;
                return b && 1 === b.nodeType ? b : null
            }
            return null
        }

        function Rg(a) {
            return !(!xc("querySelectorAll", F(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
        }

        function jk(a, c, b) {
            var d =
                c.top,
                e = c.bottom,
                f = c.left,
                g = b.w;
            b = b.h;
            a = a.Math;
            c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
            return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
        }

        function $l(a) {
            return cn(a) && !Oc(wc(a.type), ft) ? dn(a) ? !a.checked : !a.value : gt(a) ? !a.value : ht(a) ? 0 > a.selectedIndex : !0
        }

        function pb(a) {
            if (a) try {
                var c = a.nodeName;
                if (Ta(c)) return c;
                c = a.tagName;
                if (Ta(c)) return c
            } catch (b) {}
        }

        function pf(a, c) {
            var b = a.document.getElementsByTagName("form");
            return $a(a)(c, Yb(b))
        }

        function ol(a, c, b) {
            b = Ga("dispatchEvent", b || a.document);
            var d = null,
                e = F(a, "Event.prototype.constructor");
            if (e && (xc("(Event|Object|constructor)", e) || wn(a) && "[object Event]" === "" + e)) try {
                d = new a.Event(c)
            } catch (f) {
                if ((a = Ga("createEvent", F(a, "document"))) && Da(a)) {
                    try {
                        d = a(c)
                    } catch (g) {}
                    d && d.initEvent && d.initEvent(c, !1, !1)
                }
            }
            d && b(d)
        }

        function $c(a) {
            try {
                return a.getBoundingClientRect && a.getBoundingClientRect()
            } catch (c) {
                return "object" === typeof c && null !== c && 16389 === (c.me && c.me & 65535) ? {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                    right: 0
                } : null
            }
        }

        function mj(a) {
            var c = ye(a),
                b = F(a, "document");
            return {
                x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
            }
        }

        function me(a) {
            var c = jf(a);
            if (c) {
                var b = c[2];
                return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
            }
            c = Cf(a);
            return [F(c, "clientWidth") || a.innerWidth, F(c, "clientHeight") || a.innerHeight]
        }

        function jf(a) {
            var c = F(a, "visualViewport.width"),
                b = F(a, "visualViewport.height");
            a = F(a, "visualViewport.scale");
            return Ma(c) || Ma(b) ?
                null : [Math.floor(c), Math.floor(b), a]
        }

        function Cf(a) {
            var c = F(a, "document") || {},
                b = c.documentElement;
            return "CSS1Compat" === c.compatMode ? b : ye(a) || b
        }

        function ye(a) {
            a = F(a, "document");
            try {
                return a.getElementsByTagName("body")[0]
            } catch (c) {
                return null
            }
        }

        function vf(a, c) {
            try {
                return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
            } catch (b) {
                return !1
            }
        }

        function qb(a) {
            var c;
            try {
                if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
            } catch (b) {}
            return c
        }

        function He(a) {
            var c = a && a.parentNode;
            c && c.removeChild(a)
        }

        function v(a) {
            return a ? a.innerText || "" : ""
        }

        function B(a) {
            if (Ma(a)) return !1;
            a = a.nodeType;
            return 3 === a || 8 === a
        }

        function C(a, c, b) {
            void 0 === c && (c = "");
            void 0 === b && (b = "_ym");
            var d = "" + b + c;
            d && (d += "_");
            return {
                vc: it(a),
                C: function(e, f) {
                    var g = R(a, "" + d + e);
                    return Kc(g) && !db(f) ? f : g
                },
                D: function(e, f) {
                    M(a, "" + d + e, f);
                    return this
                },
                Ra: function(e) {
                    da(a, "" + d + e);
                    return this
                }
            }
        }

        function M(a, c, b) {
            var d = ha(a);
            a = ma(a, b);
            if (!Kc(a)) try {
                d.setItem(c, a)
            } catch (e) {}
        }

        function R(a,
            c) {
            var b = ha(a);
            try {
                return Ye(a, b.getItem(c))
            } catch (d) {}
            return null
        }

        function da(a, c) {
            var b = ha(a);
            try {
                b.removeItem(c)
            } catch (d) {}
        }

        function ha(a) {
            try {
                return a.localStorage
            } catch (c) {}
            return null
        }

        function ma(a, c, b) {
            try {
                return a.JSON.stringify(c, null, b)
            } catch (d) {
                return null
            }
        }

        function Pa(a, c, b) {
            void 0 === b && (b = null);
            a.Ba || (a.Ba = bo());
            c && a.Ba.cb(c, b);
            return a.Ba
        }

        function yb(a) {
            return {
                M: function(c, b) {
                    var d = a.document,
                        e = c.H;
                    if (e && pl(a)) {
                        var f = Qb(a),
                            g = function(h) {
                                pl(a) || (f.Ia(d, jq, g), b());
                                return h
                            };
                        f.F(d, jq, g);
                        e.D("pr", "1")
                    } else b()
                }
            }
        }

        function Hb(a) {
            return function(c, b, d) {
                return function(e, f) {
                    var g = qa(ca(sm, oa([c, f]), Va), kq[a] || []);
                    g = Kb(g, d);
                    return Yd(c, b, g)(e)
                }
            }
        }

        function Yd(a, c, b) {
            var d = Fd(a, c);
            return function(e) {
                return qf(b, e, !0).then(function() {
                    var f = e.ra || {},
                        g = f.lh,
                        h = void 0 === g ? "" : g;
                    g = f.ya;
                    var l = void 0 === g ? "" : g;
                    f = f.Bg;
                    f = qa(function(n) {
                        return Q.Cb + "//" + ("" + h + n || E) + "/" + l
                    }, void 0 === f ? [E] : f);
                    return d(e, f)
                }).then(function(f) {
                    var g = f.kb;
                    f = f.Le;
                    e.Jg = g;
                    e.jk = f;
                    return qf(b, e).then(aa(g, Za))
                })
            }
        }

        function Id(a,
            c, b, d) {
            a[c] || (a[c] = []);
            b && !Ma(d) && zh(a[c], b, d)
        }

        function zh(a, c, b) {
            for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                var g = a[f],
                    h = g[0];
                g = g[1];
                if (b === g && h === c) return;
                if (b < g && b >= e) {
                    a.splice(f, 0, d);
                    return
                }
                e = g
            }
            a.push(d)
        }

        function tg(a) {
            return Oa(function(c, b) {
                c[Qm[b[0]].ga] = b[1];
                return c
            }, {}, $b(a))
        }

        function Td(a) {
            na(Qm, a)
        }

        function Fd(a, c) {
            return function(b, d) {
                return vm(a, c, d, b)
            }
        }

        function vm(a, c, b, d, e, f) {
            var g;
            void 0 === e && (e = 0);
            void 0 === f && (f = 0);
            var h = na({
                    ma: []
                }, d.T),
                l = c[f],
                n = l[0];
            l = l[1];
            var x = b[e];
            h.Oa && h.Oa["Content-Type"] ||
                !h.Z || (h.Oa = na({}, h.Oa, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.Z = "site-info=" + Nh(h.Z));
            h.cc = h.Z ? "POST" : "GET";
            h.Ua = xn(a, d, n);
            h.ya = (d.ra || {}).ya;
            h.ma.push(n);
            na(d.T, h);
            g = "" + x + (d.Lb && d.Lb.Gg ? "/1" : "");
            var I = 0;
            I = Ki(a, g, h);
            return l(g, h).then(function(P) {
                var T = I,
                    ba, ka;
                fe(a, (ba = {}, ba.name = "requestSuccess", ba.data = (ka = {}, ka.body = P, ka.requestId = T, ka), ba));
                return {
                    kb: P,
                    Le: e
                }
            })["catch"](function(P) {
                var T = I,
                    ba, ka;
                fe(a, (ba = {}, ba.name = "requestFail", ba.data = (ka = {}, ka.error = P, ka.requestId =
                    T, ka), ba));
                T = f + 1 >= c.length;
                ba = e + 1 >= b.length;
                T && ba && fa(P);
                return vm(a, c, b, d, !ba && T ? e + 1 : e, T ? 0 : f + 1)
            })
        }

        function xn(a, c, b) {
            var d = na({}, c.G);
            a = Jb(a);
            c.H && (d["browser-info"] = Hc(c.H.l()).D("st", a(Ji)).Da());
            !d.t && (c = c.Ba) && (c.D("ti", b), d.t = c.Da());
            return d
        }

        function Ki(a, c, b) {
            var d, e, f, g = nc(a),
                h = b.ma,
                l = b.Z,
                n = b.Oa,
                x = b.Ua;
            b = b.cc;
            fe(a, (d = {}, d.name = "request", d.data = (e = {}, e.url = c, e.requestId = g, e.senderParams = (f = {}, f.rBody = l, f.debugStack = h, f.rHeaders = n, f.rQuery = x, f.verb = b, f), e), d));
            return g
        }

        function qf(a, c, b) {
            void 0 ===
                b && (b = !1);
            return new wa(function(d, e) {
                function f(l, n) {
                    n();
                    d()
                }
                var g = a.slice();
                g.push({
                    M: f,
                    Ca: f
                });
                var h = Gc(g, function(l, n) {
                    var x = b ? l.M : l.Ca;
                    if (x) try {
                        x(c, n)
                    } catch (I) {
                        h(Jm), e(I)
                    } else n()
                });
                h(en)
            })
        }

        function oc(a, c, b) {
            var d = b || "as";
            if (a.postMessage && !a.attachEvent) {
                b = Qb(a);
                var e = "__ym__promise_" + nc(a) + "_" + nc(a),
                    f = sa;
                d = va(a, d, function(g) {
                    try {
                        var h = g.data
                    } catch (l) {
                        return
                    }
                    h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
                });
                f = b.F(a, ["message"], d);
                a.postMessage(e, "*")
            } else eb(a, c, 0, d)
        }

        function zl(a, c,
            b, d, e) {
            void 0 === d && (d = 1);
            void 0 === e && (e = "itc");
            c = Gc(c, b);
            sh(a, c, d)(Rc(va(a, e), sa))
        }

        function sh(a, c, b, d) {
            void 0 === b && (b = 1);
            void 0 === d && (d = Li);
            oo = Infinity === b;
            return vc(function(e, f) {
                function g() {
                    try {
                        var l = c(d(a, b));
                        h = h.concat(l)
                    } catch (n) {
                        return e(n)
                    }
                    c(yn);
                    if (c(Ah)) return f(h), am(a);
                    oo ? (c(d(a, 1E4)), f(h), am(a)) : eb(a, g, 100)
                }
                var h = [];
                uk(g)
            })
        }

        function am(a) {
            if (po.length) {
                var c = po.shift();
                oo ? c() : eb(a, c, 100)
            } else qo = !1
        }

        function uk(a) {
            qo ? po.push(a) : (qo = !0, a())
        }

        function $f(a) {
            return vc(function(c, b) {
                b(a)
            })
        }

        function Ym(a) {
            return vc(function(c, b) {
                a.then(b, c)
            })
        }

        function ro(a) {
            var c = [],
                b = 0;
            return vc(function(d, e) {
                ia(function(f, g) {
                    f(Rc(d, function(h) {
                        try {
                            c[g] = h, b += 1, b === a.length && e(c)
                        } catch (l) {
                            d(l)
                        }
                    }))
                }, a)
            })
        }

        function Xm(a) {
            var c = [],
                b = !1;
            return vc(function(d, e) {
                function f(g) {
                    c.push(g) === a.length && d(c)
                }
                ia(function(g) {
                    g(Rc(f, function(h) {
                        if (!b) try {
                            e(h), b = !0
                        } catch (l) {
                            f(l)
                        }
                    }))
                }, a)
            })
        }

        function Rc(a, c) {
            return function(b) {
                return b(a, c)
            }
        }

        function Gc(a, c) {
            return vc({
                Fa: a,
                Kb: c || Za,
                hb: !1,
                ha: 0
            })
        }

        function en(a) {
            function c() {
                function d() {
                    b = !0;
                    a.ha += 1
                }
                b = !1;
                a.Kb(a.Fa[a.ha], function() {
                    d()
                });
                b || (a.ha += 1, d = aa(a, en))
            }
            for (var b = !0; !Ah(a) && b;) c()
        }

        function Li(a, c) {
            return function(b) {
                var d = Jb(a),
                    e = d(nb);
                return lq(function(f, g) {
                    d(nb) - e >= c && g(pg)
                })(b)
            }
        }

        function Tc(a, c) {
            return function(b) {
                var d = Jb(a),
                    e = d(nb);
                return ql(function(f) {
                    d(nb) - e >= c && pg(f)
                })(b)
            }
        }

        function ql(a) {
            return function(c) {
                for (var b; c.Fa.length && !Ah(c);) b = c.Fa.pop(), b = c.Kb(b, c.Fa), a(c);
                return b
            }
        }

        function In(a) {
            Ah(a) && fa(ub("i"));
            var c = a.Kb(a.Fa[a.ha]);
            a.ha += 1;
            return c
        }

        function yn(a) {
            a.hb = !1
        }

        function pg(a) {
            a.hb = !0
        }

        function Jm(a) {
            a.ha = a.Fa.length
        }

        function Ah(a) {
            return a.hb || a.Fa.length <= a.ha
        }

        function ud(a) {
            a = Jb(a);
            return Math.round(a(Fj) / 50)
        }

        function Fj(a) {
            var c = a.Ga,
                b = c[1];
            a = c[0] && b ? b() : nb(a) - a.Qe;
            return Math.round(a)
        }

        function Ji(a) {
            return Math.round(nb(a) / 1E3)
        }

        function Md(a) {
            return Math.floor(nb(a) / 1E3 / 60)
        }

        function nb(a) {
            var c = a.ib;
            return 0 !== c ? c : bm(a.l, a.Ga)
        }

        function Uk(a) {
            var c = Qb(a),
                b = fn(a),
                d = {
                    l: a,
                    ib: 0,
                    Ga: b,
                    Qe: bm(a, b)
                },
                e = b[1];
            b[0] && e || c.F(a, ["beforeunload", "unload"], function() {
                0 ===
                    d.ib && (d.ib = bm(a, d.Ga))
            });
            return vc(d)
        }

        function Km(a) {
            return (10 > a ? "0" : "") + a
        }

        function zn(a, c) {
            return a.clearInterval(c)
        }

        function Wk(a, c, b, d) {
            return a.setInterval(va(a, "i.err." + (d || "def"), c), b)
        }

        function eb(a, c, b, d) {
            return Ba(a, va(a, "d.err." + (d || "def"), c), b)
        }

        function dj(a) {
            var c = {};
            return {
                F: function(b, d) {
                    ia(function(e) {
                        F(c, e) || (c[e] = Wl(a));
                        c[e].F(d)
                    }, b);
                    return this
                },
                ea: function(b, d) {
                    ia(function(e) {
                        F(c, e) && c[e].ea(d)
                    }, b);
                    return this
                },
                N: function(b, d) {
                    return F(c, b) ? va(a, "e." + d, c[b].N)(d) : []
                }
            }
        }

        function Wl(a) {
            var c = [],
                b = {};
            b.ei = c;
            b.F = ca(vb("push", c), aa(b, Za));
            b.ea = ca(Vb($a(a))(c), Vb(vb("splice", c))(1), aa(b, Za));
            b.N = ca(Za, Vb(Va), rr(c));
            return b
        }

        function tc(a, c, b, d, e, f) {
            a = jt(a);
            var g = a.F,
                h = a.ea;
            f = f ? h : g;
            if (c[f])
                if (a.Ed)
                    if (e) c[f](b, d, e);
                    else c[f](b, d);
            else c[f]("on" + b, d)
        }

        function pa(a, c, b) {
            return function() {
                return va(arguments[0], a, c, b).apply(this, arguments)
            }
        }

        function va(a, c, b, d, e) {
            var f = b || fa;
            return function() {
                var g = d;
                try {
                    g = f.apply(e || null, arguments)
                } catch (h) {
                    dh(a, c, h)
                }
                return g
            }
        }

        function bm(a, c) {
            var b = c || fn(a),
                d = b[0];
            b = b[1];
            return !isNaN(d) && Da(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
        }

        function fn(a) {
            a = vh(a);
            var c = F(a, "timing.navigationStart"),
                b = F(a, "now");
            b && (b = Ea(b, a));
            return [c, b]
        }

        function vh(a) {
            return F(a, "performance") || F(a, "webkitPerformance")
        }

        function dh(a, c, b) {
            var d = "u.a.e",
                e = "";
            b && ("object" === typeof b ? (b.unk && fa(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
            kt(d) || Oc(aa(d, od), lt) || mt(d) && .1 <= a.Math.random() || ia(ca(Za, oa(["jserrs",
                d, c, e
            ]), Va), mq)
        }

        function ee() {
            var a = lc(arguments);
            return fa(Ec(a))
        }

        function Ec(a) {
            var c = "";
            Ja(a) ? c = Ha(".", a) : Ta(a) && (c = a);
            return ub("err.kn(" + Q.lc + ")" + c)
        }

        function Ej(a) {
            return ub("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50))
        }

        function Bh(a) {
            this.message = a
        }

        function fe(a, c) {
            if (gn(a)) {
                var b = c.counterKey;
                if (b) {
                    var d = b.split(":");
                    b = d[1];
                    d = ve(ok(d[0]));
                    if ("1" === b || d) return
                }
                b = nt(a);
                1E3 === b.length && b.shift();
                b.push(c)
            }
        }

        function Rk(a, c, b) {
            pi(a, "metrika_enabled", "1", 0, c, b, !0);
            var d = rl(a);
            (d = d && d.metrika_enabled) && wm(a, "metrika_enabled", c, b, !0);
            return !!d
        }

        function pi(a, c, b, d, e, f, g) {
            void 0 === g && (g = !1);
            if (hj(a, Fg, c)) {
                var h = c + "=" + encodeURIComponent(b) + ";";
                h += "" + sr(a);
                if (d) {
                    var l = new Date;
                    l.setTime(l.getTime() + 6E4 * d);
                    h += "expires=" + l.toUTCString() + ";"
                }
                e && (d = e.replace(ot, ""), h += "domain=" + d + ";");
                try {
                    a.document.cookie = h + ("path=" + (f || "/")), g || (nq(a)[c] = b)
                } catch (n) {}
            }
        }

        function Fg(a, c) {
            var b = nq(a);
            return b ? b[c] || null : null
        }

        function rl(a) {
            try {
                var c = a.document.cookie;
                if (!Ma(c)) {
                    var b = {};
                    ia(function(d) {
                        d = d.split("=");
                        var e = d[1];
                        b[Pc(d[0])] = Pc(sl(e))
                    }, (c || "").split(";"));
                    return b
                }
            } catch (d) {}
            return null
        }

        function hj(a, c, b) {
            return !so.length || Ia(b, hn) ? !0 : Oa(function(d, e) {
                return d && e(a, c, b)
            }, !0, so)
        }

        function he(a) {
            return a ? ca($b, De(function(c, b) {
                var d = b[0],
                    e = b[1];
                db(e) || Ma(e) || c.push(d + "=" + Nh(e));
                return c
            }, []), Sl("&"))(a) : ""
        }

        function ld(a) {
            return a ? ca(cf(function(c) {
                c = c.split("=");
                var b = c[1];
                return [c[0], Ma(b) ? void 0 : sl(b)]
            }), De(function(c, b) {
                c[b[0]] = b[1];
                return c
            }, {}))(a.split("&")) : {}
        }

        function sl(a) {
            var c = "";
            try {
                c = decodeURIComponent(a)
            } catch (b) {}
            return c
        }

        function Nh(a) {
            try {
                return encodeURIComponent(a)
            } catch (c) {}
            a = Ha("", fb(function(c) {
                return 55296 >= c.charCodeAt(0)
            }, a.split("")));
            return encodeURIComponent(a)
        }

        function Pc(a, c) {
            if (a) {
                var b = oq ? oq.call(a) : ("" + a).replace(cq, "");
                return c && b.length > c ? b.substring(0, c) : b
            }
            return ""
        }

        function tm(a) {
            var c = a.match(Jn);
            if (c) {
                a = c[1];
                if (c = c[2]) return Ia(c, tl) ? c : !1;
                if (a) return tl[0]
            }
            return !1
        }

        function bb(a) {
            return Oa(function(c, b) {
                var d = F(a, "location." +
                    b);
                c[b] = d ? "" + d : "";
                return c
            }, {}, Gj)
        }

        function qi(a, c, b, d, e) {
            var f = ul(a, b, d, e);
            a = Oa(function(g, h) {
                var l = h[1],
                    n = l.gb;
                l = f[l.ga];
                g[h[0]] = n ? n(l) : l;
                return g
            }, {}, $b(c));
            Xf(a, a.O || {});
            return a
        }

        function ul(a, c, b, d) {
            var e;
            return wb(a) ? a : (e = {}, e.id = a, e.type = b, e.defer = d, e.params = c, e)
        }

        function Kn(a) {
            a = W(a);
            return xa[a] && xa[a].li || null
        }

        function vk(a) {
            a = W(a);
            return xa[a] && xa[a].ki
        }

        function Xf(a, c) {
            var b = W(a),
                d = F(c, "__ym.turbo_page"),
                e = F(c, "__ym.turbo_page_id");
            xa[b] || (xa[b] = {});
            if (d || e) xa[b].ki = d, xa[b].li = e
        }

        function Yi(a,
            c) {
            if (Xk(a) && c) {
                var b = Ue(a).match(An);
                if (b && b.length) return +b[1] >= c
            }
            return !1
        }

        function Tj(a, c) {
            var b = Ue(a);
            return b && (b = b.match(p)) && 1 < b.length ? Nc(b[1]) >= c : !1
        }

        function pl(a) {
            return Ia("prerender", qa(aa(F(a, "document"), F), ["webkitVisibilityState", "visibilityState"]))
        }

        function nc(a, c, b) {
            var d = db(b);
            db(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
            return a.Math.floor(a.Math.random() * (c - d)) + d
        }

        function te() {
            var a = lc(arguments),
                c = a[0];
            for (a = a.slice(1); a.length;) {
                var b = a.shift(),
                    d;
                for (d in b) za(b, d) && (c[d] = b[d]);
                za(b, "toString") && (c.toString = b.toString)
            }
            return c
        }

        function jn(a) {
            return function(c) {
                return c ? a(c) : []
            }
        }

        function qg(a) {
            return db(a) ? [] : Jf(function(c, b) {
                c.push([b, a[b]]);
                return c
            }, [], xm(a))
        }

        function xm(a) {
            var c = [],
                b;
            for (b in a) za(a, b) && c.push(b);
            return c
        }

        function Ti(a, c) {
            return Kc(c) || db(c) || Gd(a, c) || Ta(c) || !!c === c
        }

        function ok(a) {
            try {
                return parseInt(a, 10)
            } catch (c) {
                return null
            }
        }

        function Gd(a, c) {
            return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c)
        }

        function to(a) {
            for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
            return c
        }

        function Kb(a, c) {
            ia(ca(Za, vb("push", a)), c);
            return a
        }

        function Og(a, c) {
            return Array.prototype.sort.call(c, a)
        }

        function fg(a) {
            return a.splice(0, a.length)
        }

        function Yb(a) {
            return a ? Ja(a) ? a : Yf ? Yf(a) : "number" === typeof a.length && 0 <= a.length ? wk(a) : [] : []
        }

        function kn(a, c) {
            for (var b = 0; b < c.length; b += 1)
                if (b in c && a.call(c, c[b], b)) return !0;
            return !1
        }

        function cm(a, c) {
            return Oa(function(b, d, e) {
                d = a(d, e);
                return b.concat(Ja(d) ? d : [d])
            }, [], c)
        }

        function xk(a, c) {
            return Oa(function(b,
                d, e) {
                b.push(a(d, e));
                return b
            }, [], c)
        }

        function dm(a, c) {
            if (!Xk(a)) return !0;
            try {
                c.call({
                    0: !0,
                    length: -Math.pow(2, 32) + 1
                }, function() {
                    throw 1;
                })
            } catch (b) {
                return !1
            }
            return !0
        }

        function Yk(a, c) {
            return -1 !== (F(c, "navigator.userAgent") || "").toLowerCase().search(a)
        }

        function Ln(a, c) {
            for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
            return b
        }

        function r(a, c) {
            return 1 <= z(wc(a), c).length
        }

        function w(a, c) {
            for (var b = 0; b < c.length; b += 1)
                if (a.call(c, c[b], b)) return c[b]
        }

        function z(a, c) {
            return Jf(function(b, d, e) {
                a(d, e) && b.push(d);
                return b
            }, [], c)
        }

        function H(a, c, b) {
            return b ? a : c
        }

        function U(a, c) {
            return Oa(function(b, d, e) {
                return b ? !!a(d, e) : !1
            }, !0, c)
        }

        function Y(a, c, b) {
            try {
                if (Da(c)) {
                    var d = lc(arguments).slice(3);
                    c.apply(Ma(b) ? null : b, d)
                }
            } catch (e) {
                Ba(a, aa(e, fa), 0)
            }
        }

        function fa(a) {
            throw a;
        }

        function Ba(a, c, b) {
            return Ga("setTimeout", a)(c, b)
        }

        function la(a, c) {
            return Ga("clearTimeout", a)(c)
        }

        function Ca() {
            return []
        }

        function ta() {
            return {}
        }

        function Ga(a, c) {
            var b = F(c, a),
                d = F(c, "constructor.prototype." + a) || b;
            try {
                if (d && d.apply) return function() {
                    return d.apply(c,
                        arguments)
                }
            } catch (e) {
                return b
            }
            return d
        }

        function Ya(a, c, b) {
            return function() {
                var d = K(arguments[0]),
                    e = b ? "global" : "m1502",
                    f = d.C(e, {}),
                    g = F(f, a);
                g || (g = V(c), f[a] = g, d.D(e, f));
                return g.apply(null, arguments)
            }
        }

        function Ra(a, c) {
            void 0 === c && (c = {});
            if (!a || 1 > a.length) return c;
            Te(function(b, d, e) {
                if (e === a.length - 1) return b;
                e === a.length - 2 ? b[d] = a[e + 1] : za(b, d) || (b[d] = {});
                return b[d]
            }, c, a);
            return c
        }

        function mb(a) {
            a = a.Ya = a.Ya || {};
            var c = a._metrika = a._metrika || {};
            return {
                ta: function(b, d) {
                    za(c, b) || (c[b] = d);
                    return this
                },
                D: function(b,
                    d) {
                    c[b] = d;
                    return this
                },
                C: function(b, d) {
                    var e = c[b];
                    return za(c, b) || db(d) ? e : d
                }
            }
        }

        function za(a, c) {
            return Ma(a) ? !1 : O.call(a, c)
        }

        function V(a, c) {
            var b = [],
                d = [];
            var e = c ? c : Za;
            return function() {
                var f = lc(arguments),
                    g = e.apply(void 0, f),
                    h = A(g, d);
                if (-1 !== h) return b[h];
                f = a.apply(void 0, f);
                b.push(f);
                d.push(g);
                return f
            }
        }

        function $a(a) {
            if (u) return u;
            var c = !1;
            try {
                c = [].indexOf && 0 === [void 0].indexOf(void 0)
            } catch (d) {}
            var b = a.Array && a.Array.prototype && Db(a.Array.prototype.indexOf, "indexOf");
            a = void 0;
            return u = a = c && b ? function(d,
                e) {
                return b.call(e, d)
            } : Jc
        }

        function Jc(a, c) {
            for (var b = 0; b < c.length; b += 1)
                if (c[b] === a) return b;
            return -1
        }

        function Va(a, c) {
            return c ? a(c) : a()
        }

        function ca() {
            var a = lc(arguments),
                c = a.shift();
            return function() {
                var b = c.apply(void 0, arguments);
                return Oa(vl, b, a)
            }
        }

        function De(a, c) {
            return ra([a, c], Oa)
        }

        function Jf(a, c, b) {
            for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
            return c
        }

        function zc(a) {
            return vb("test", a)
        }

        function vb(a, c) {
            return Ea(c[a], c)
        }

        function aa(a, c) {
            return Ea(c, null, a)
        }

        function ra(a, c) {
            return Ea.apply(void 0,
                Mj([c, null], a))
        }

        function gg(a) {
            return function() {
                var c = lc(arguments);
                return a.apply(c[0], [c[1]].concat(c.slice(2)))
            }
        }

        function zf() {
            var a = lc(arguments),
                c = a[0],
                b = a[1],
                d = a.slice(2);
            return function() {
                var e = Mj(d, lc(arguments));
                if (Function.prototype.call) return Function.prototype.call.apply(c, Mj([b], e));
                if (b) {
                    for (var f = "_b"; b[f];) f += "_" + f.length;
                    b[f] = c;
                    e = b[f] && ke(f, e, b);
                    delete b[f];
                    return e
                }
                return ke(c, e)
            }
        }

        function ke(a, c, b) {
            void 0 === c && (c = []);
            b = b || {};
            var d = c.length,
                e = a;
            Da(e) && (e = "d", b[e] = a);
            var f;
            d ? 1 ===
                d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
            return f
        }

        function lc(a) {
            if (Yf) try {
                return Yf(a)
            } catch (c) {}
            return wk(a)
        }

        function wk(a) {
            for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
            return b
        }

        function wb(a) {
            return !Kc(a) && !db(a) && "[object Object]" === Object.prototype.toString.call(a)
        }

        function Ma(a) {
            return db(a) || Kc(a)
        }

        function Da(a) {
            return "function" === typeof a
        }

        function Vb(a) {
            return function(c) {
                return function(b) {
                    return a(b, c)
                }
            }
        }

        function tb(a) {
            return function(c) {
                return function(b) {
                    return a(c,
                        b)
                }
            }
        }

        function vl(a, c) {
            return c(a)
        }

        function $m(a) {
            return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(um, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
        }

        function sp(a) {
            return "" + a
        }

        function od(a, c) {
            return !(!a || -1 === xe(a, c))
        }

        function Je(a, c) {
            return xe(a, c)
        }

        function uo(a, c) {
            for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
                b =
                    a[e] === c[b] ? b + 1 : 0;
                if (b === c.length) return e - c.length + 1;
                if (!b && e > d) break
            }
            return -1
        }

        function Ta(a) {
            return "string" === typeof a
        }

        function Db(a, c) {
            return xc(c, a) && a
        }

        function xc(a, c) {
            var b = Zk(a, c);
            c && !b && zm.push([a, c]);
            return b
        }

        function Zk(a, c) {
            if (!c || "function" !== typeof c) return !1;
            try {
                var b = "" + c
            } catch (h) {
                return !1
            }
            var d = b.length;
            if (d > 35 + a.length) return !1;
            for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                if (12 === f) return !0;
                if (!f && g > e) break
            }
            return !1
        }

        function sa() {}

        function Am(a,
            c) {
            Am = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(b, d) {
                b.__proto__ = d
            } || function(b, d) {
                for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
            };
            return Am(a, c)
        }

        function yh(a) {
            return !a
        }

        function Jd(a, c) {
            return c
        }

        function Za(a) {
            return a
        }

        function ec(a, c) {
            function b() {
                this.constructor = a
            }
            Am(a, c);
            a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
        }

        function Mj() {
            for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
            a = Array(a);
            var d = 0;
            for (c = 0; c < b; c++)
                for (var e = arguments[c],
                        f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
            return a
        }

        function F(a, c) {
            return a ? Oa(function(b, d) {
                if (Ma(b)) return b;
                try {
                    return b[d]
                } catch (e) {}
                return null
            }, a, c.split(".")) : null
        }

        function tp(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }

        function cp() {}

        function up(a, c) {
            return function() {
                a.apply(c, arguments)
            }
        }

        function uc(a) {
            if (!(this instanceof uc)) throw new TypeError("Promises must be constructed via new");
            if ("function" !== typeof a) throw new TypeError("not a function");
            this.na = 0;
            this.jc = !1;
            this.va =
                void 0;
            this.Ja = [];
            Hj(a, this)
        }

        function Mn(a, c) {
            for (; 3 === a.na;) a = a.va;
            0 === a.na ? a.Ja.push(c) : (a.jc = !0, uc.kc(function() {
                var b = 1 === a.na ? c.Ne : c.Oe;
                if (null === b)(1 === a.na ? Bm : Ij)(c.promise, a.va);
                else {
                    try {
                        var d = b(a.va)
                    } catch (e) {
                        Ij(c.promise, e);
                        return
                    }
                    Bm(c.promise, d)
                }
            }))
        }

        function Bm(a, c) {
            try {
                if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                if (c && ("object" === typeof c || "function" === typeof c)) {
                    var b = c.then;
                    if (c instanceof uc) {
                        a.na = 3;
                        a.va = c;
                        Lm(a);
                        return
                    }
                    if ("function" === typeof b) {
                        Hj(up(b,
                            c), a);
                        return
                    }
                }
                a.na = 1;
                a.va = c;
                Lm(a)
            } catch (d) {
                Ij(a, d)
            }
        }

        function Ij(a, c) {
            a.na = 2;
            a.va = c;
            Lm(a)
        }

        function Lm(a) {
            2 === a.na && 0 === a.Ja.length && uc.kc(function() {
                a.jc || uc.Me(a.va)
            });
            for (var c = 0, b = a.Ja.length; c < b; c++) Mn(a, a.Ja[c]);
            a.Ja = null
        }

        function vp(a, c, b) {
            this.Ne = "function" === typeof a ? a : null;
            this.Oe = "function" === typeof c ? c : null;
            this.promise = b
        }

        function Hj(a, c) {
            var b = !1;
            try {
                a(function(d) {
                    b || (b = !0, Bm(c, d))
                }, function(d) {
                    b || (b = !0, Ij(c, d))
                })
            } catch (d) {
                b || (b = !0, Ij(c, d))
            }
        }

        function wm(a, c, b, d, e) {
            void 0 === e && (e = !1);
            return pi(a,
                c, "", -100, b, d, e)
        }

        function Vi(a, c, b) {
            void 0 === c && (c = "_ym_");
            void 0 === b && (b = "");
            var d = pt(a),
                e = 1 === (d || "").split(".").length ? d : "." + d,
                f = b ? "_" + b : "";
            return {
                Ra: function(g, h, l) {
                    wm(a, "" + c + g + f, h || e, l);
                    return this
                },
                C: function(g) {
                    return Fg(a, "" + c + g + f)
                },
                D: function(g, h, l, n, x) {
                    pi(a, "" + c + g + f, h, l, n || e, x);
                    return this
                }
            }
        }

        function Ye(a, c) {
            if (!c) return null;
            try {
                return a.JSON.parse(c)
            } catch (b) {
                return null
            }
        }

        function Re(a) {
            a = "" + a;
            for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c <<
                8) + (c << 24);
            return c >>> 0
        }

        function Af(a, c) {
            var b = qt(a);
            return b ? (b.href = c, {
                protocol: b.protocol,
                host: b.host,
                port: b.port,
                hostname: b.hostname,
                hash: b.hash,
                search: b.search,
                query: b.search.replace(/^\?/, ""),
                pathname: b.pathname || "/",
                path: (b.pathname || "/") + b.search,
                href: b.href
            }) : {}
        }

        function wl(a) {
            return (a = bb(a).hash.split("#")[1]) ? a.split("?")[0] : ""
        }

        function dp(a, c) {
            var b = wl(a);
            pq = Wk(a, function() {
                var d = wl(a);
                d !== b && (c(), b = d)
            }, 200, "t.h");
            return Ea(zn, null, a, pq)
        }

        function ep(a, c, b, d) {
            var e, f, g = c.$,
                h = c.Cc,
                l = c.pc,
                n = K(a),
                x = Hc((e = {}, e.wh = 1, e.pv = 1, e));
            e = F(d, "isTrusted");
            d && !Ma(e) && x.D("ite", sb(e));
            Na(g) && a.Ya && a.Ya.Direct && x.D("ad", "1");
            h && x.D("ut", "1");
            g = n.C("lastReferrer");
            d = bb(a).href;
            l = {
                G: (f = {}, f["page-url"] = l || d, f["page-ref"] = g, f),
                H: x
            };
            b(l, c)["catch"](va(a, "g.s"));
            n.D("lastReferrer", d)
        }

        function vo(a, c, b) {
            function d() {
                T || (P = !0, ba = !1, T = !0, f())
            }

            function e() {
                x = !0;
                l(!1);
                c()
            }

            function f() {
                la(a, n);
                if (x) l(!1);
                else {
                    var Wa = Math.max(0, b - (ba ? ka : ka + I(nb) - Ka));
                    Wa ? n = eb(a, e, Wa, "u.t.d.c") : e()
                }
            }

            function g() {
                ba = P = T = !0;
                ka +=
                    I(nb) - Ka;
                Ka = I(nb);
                f()
            }

            function h() {
                P || T || (ka = 0);
                Ka = I(nb);
                P = T = !0;
                ba = !1;
                f()
            }

            function l(Wa) {
                Wa = Wa ? Ua.F : Ua.Ia;
                Wa(a, ["blur"], g);
                Wa(a, ["focus"], h);
                Wa(a.document, ["click", "mousemove", "keydown", "scroll"], d)
            }
            var n = 0,
                x = !1;
            if (wn(a)) return n = eb(a, c, b, "u.t.d"), ra([a, n], la);
            var I = Jb(a),
                P = !1,
                T = !1,
                ba = !0,
                ka = 0,
                Ka = I(nb),
                Ua = Qb(a);
            l(!0);
            f();
            return function() {
                la(a, n);
                l(!1)
            }
        }

        function Ee(a, c) {
            a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
            c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
            var b = [0, 0, 0, 0];
            b[3] += a[3] * c[3];
            b[2] +=
                b[3] >>> 16;
            b[3] &= 65535;
            b[2] += a[2] * c[3];
            b[1] += b[2] >>> 16;
            b[2] &= 65535;
            b[2] += a[3] * c[2];
            b[1] += b[2] >>> 16;
            b[2] &= 65535;
            b[1] += a[1] * c[3];
            b[0] += b[1] >>> 16;
            b[1] &= 65535;
            b[1] += a[2] * c[2];
            b[0] += b[1] >>> 16;
            b[1] &= 65535;
            b[1] += a[3] * c[1];
            b[0] += b[1] >>> 16;
            b[1] &= 65535;
            b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
            b[0] &= 65535;
            return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
        }

        function Lg(a, c) {
            a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
            c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
            var b = [0, 0, 0, 0];
            b[3] += a[3] + c[3];
            b[2] += b[3] >>> 16;
            b[3] &= 65535;
            b[2] += a[2] + c[2];
            b[1] += b[2] >>> 16;
            b[2] &= 65535;
            b[1] += a[1] + c[1];
            b[0] += b[1] >>> 16;
            b[1] &= 65535;
            b[0] += a[0] + c[0];
            b[0] &= 65535;
            return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
        }

        function Mi(a, c) {
            c %= 64;
            if (32 === c) return [a[1], a[0]];
            if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
            c -= 32;
            return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
        }

        function Ud(a, c) {
            c %= 64;
            return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
        }

        function kc(a, c) {
            return [a[0] ^ c[0], a[1] ^ c[1]]
        }

        function Nn(a) {
            a = kc(a, [0, a[0] >>> 1]);
            a = Ee(a, [4283543511,
                3981806797
            ]);
            a = kc(a, [0, a[0] >>> 1]);
            a = Ee(a, [3301882366, 444984403]);
            return a = kc(a, [0, a[0] >>> 1])
        }

        function fp(a, c) {
            void 0 === c && (c = 210);
            var b = a || "",
                d = c || 0,
                e = b.length - b.length % 16;
            d = {
                X: [0, d],
                Y: [0, d]
            };
            for (var f = 0; f < e; f += 16) {
                var g = d,
                    h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
                    l = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f +
                        14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                h = Ee(h, ln);
                h = Mi(h, 31);
                h = Ee(h, mn);
                g.X = kc(g.X, h);
                g.X = Mi(g.X, 27);
                g.X = Lg(g.X, g.Y);
                g.X = Lg(Ee(g.X, [0, 5]), [0, 1390208809]);
                l = Ee(l, mn);
                l = Mi(l, 33);
                l = Ee(l, ln);
                g.Y = kc(g.Y, l);
                g.Y = Mi(g.Y, 31);
                g.Y = Lg(g.Y, g.X);
                g.Y = Lg(Ee(g.Y, [0, 5]), [0, 944331445])
            }
            e = b.length % 16;
            f = b.length - e;
            g = [0, 0];
            h = [0, 0];
            switch (e) {
                case 15:
                    h = kc(h, Ud([0, b.charCodeAt(f + 14)], 48));
                case 14:
                    h = kc(h, Ud([0, b.charCodeAt(f +
                        13)], 40));
                case 13:
                    h = kc(h, Ud([0, b.charCodeAt(f + 12)], 32));
                case 12:
                    h = kc(h, Ud([0, b.charCodeAt(f + 11)], 24));
                case 11:
                    h = kc(h, Ud([0, b.charCodeAt(f + 10)], 16));
                case 10:
                    h = kc(h, Ud([0, b.charCodeAt(f + 9)], 8));
                case 9:
                    h = kc(h, [0, b.charCodeAt(f + 8)]), h = Ee(h, mn), h = Mi(h, 33), h = Ee(h, ln), d.Y = kc(d.Y, h);
                case 8:
                    g = kc(g, Ud([0, b.charCodeAt(f + 7)], 56));
                case 7:
                    g = kc(g, Ud([0, b.charCodeAt(f + 6)], 48));
                case 6:
                    g = kc(g, Ud([0, b.charCodeAt(f + 5)], 40));
                case 5:
                    g = kc(g, Ud([0, b.charCodeAt(f + 4)], 32));
                case 4:
                    g = kc(g, Ud([0, b.charCodeAt(f + 3)], 24));
                case 3:
                    g =
                        kc(g, Ud([0, b.charCodeAt(f + 2)], 16));
                case 2:
                    g = kc(g, Ud([0, b.charCodeAt(f + 1)], 8));
                case 1:
                    g = kc(g, [0, b.charCodeAt(f)]), g = Ee(g, ln), g = Mi(g, 31), g = Ee(g, mn), d.X = kc(d.X, g)
            }
            d.X = kc(d.X, [0, b.length]);
            d.Y = kc(d.Y, [0, b.length]);
            d.X = Lg(d.X, d.Y);
            d.Y = Lg(d.Y, d.X);
            d.X = Nn(d.X);
            d.Y = Nn(d.Y);
            d.X = Lg(d.X, d.Y);
            d.Y = Lg(d.Y, d.X);
            return ("00000000" + (d.X[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.X[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.Y[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.Y[1] >>> 0).toString(16)).slice(-8)
        }

        function Jj(a,
            c, b) {
            var d = c.getAttribute("itemtype");
            b = id('[itemprop~="' + b + '"]', c);
            return d ? fb(function(e) {
                return e.parentNode && Ad("[itemtype]", a, e.parentNode) === c
            }, b) : b
        }

        function Vd(a, c, b) {
            return (a = Jj(a, c, b)) && a.length ? a[0] : null
        }

        function td(a) {
            if (!a) return "";
            a = Ja(a) ? a : [a];
            return a.length ? a[0].getAttribute("content") || v(a[0]) : ""
        }

        function Cm(a) {
            return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : td(a) : ""
        }

        function gj(a, c, b) {
            a = c && (od(c.className, "ym-disable-keys") || od(c.className, "-metrika-nokeys"));
            return b && c ? a || !!oi(["ym-disable-keys", "-metrika-nokeys"], c).length : a
        }

        function Gm(a, c) {
            return cn(c) ? "password" === c.type || c.name && Ia(c.name.toLowerCase(), qq) || c.id && Ia(c.id.toLowerCase(), qq) : !1
        }

        function Mm(a, c) {
            var b = Math.max(0, Math.min(c, 65535));
            Kb(a, [b >> 8, b & 255])
        }

        function Uf(a, c) {
            Kb(a, [c & 255])
        }

        function Xd(a, c, b) {
            return -1 !== $a(a)(b, rt) ? (Uf(c, b), !1) : !0
        }

        function gb(a, c) {
            for (var b = Math.max(0, c | 0); 127 < b;) Kb(a, [b & 127 | 128]), b >>= 7;
            Kb(a, [b])
        }

        function Nm(a, c) {
            gb(a, c.length);
            for (var b = 0; b < c.length; b += 1) gb(a,
                c.charCodeAt(b))
        }

        function Dm(a, c) {
            var b = c;
            255 < b.length && (b = b.substr(0, 255));
            a.push(b.length);
            for (var d = 0; d < b.length; d += 1) Mm(a, b.charCodeAt(d))
        }

        function On(a, c) {
            var b = [];
            if (Xd(a, b, 27)) return [];
            gb(b, c);
            return b
        }

        function Pn(a, c) {
            var b = pb(c);
            if (!b) return c[Ed] = -1, null;
            var d = +c[Ed];
            if (!isFinite(d) || 0 >= d) return null;
            if (c.attributes)
                for (var e = c; e;) {
                    if (e.attributes.Nk) return null;
                    e = e.parentElement
                }
            e = 64;
            var f = Kg(a, c),
                g = f && f[Ed] ? f[Ed] : 0;
            0 > g && (g = 0);
            b = (b || "").toUpperCase();
            var h = st()[b];
            h || (e |= 2);
            var l = ak(a,
                c);
            l || (e |= 4);
            var n = Mf(a, c);
            (f = f ? Mf(a, f) : null) && n[0] === f[0] && n[1] === f[1] && n[2] === f[2] && n[3] === f[3] && (e |= 8);
            ej[d].rh = n[0] + "x" + n[1];
            ej[d].size = n[2] + "x" + n[3];
            c.id && "string" === typeof c.id && (e |= 32);
            f = [];
            if (Xd(a, f, 1)) return null;
            gb(f, d);
            Uf(f, e);
            gb(f, g);
            h ? Uf(f, h) : Dm(f, b);
            l && gb(f, l);
            e & 8 || (gb(f, n[0]), gb(f, n[1]), gb(f, n[2]), gb(f, n[3]));
            e & 32 && Dm(f, c.id);
            Uf(f, 0);
            return f
        }

        function wp(a, c) {
            var b = c[Ed];
            if (!b || 0 > b || !go(c) || !c.form || Ef(a, c.form)) return [];
            var d = pf(a, c.form);
            if (0 > d) return [];
            if (cn(c)) {
                var e = {
                    text: 0,
                    color: 0,
                    Wa: 0,
                    Wk: 0,
                    "datetime-local": 0,
                    email: 0,
                    me: 0,
                    ll: 0,
                    search: 0,
                    pl: 0,
                    time: 0,
                    url: 0,
                    month: 0,
                    rl: 0,
                    password: 2,
                    kl: 3,
                    Qk: 4,
                    file: 6,
                    image: 7
                };
                e = e[c.type]
            } else {
                e = {
                    Jk: 1,
                    Kk: 5
                };
                var f = pb(c);
                e = db(f) ? "" : e[f]
            }
            if ("number" !== typeof e) return [];
            f = -1;
            for (var g = c.form.elements, h = g.length, l = 0, n = 0; l < h; l += 1)
                if (g[l].name === c.name) {
                    if (g[l] === c) {
                        f = n;
                        break
                    }
                    n += 1
                }
            if (0 > f) return [];
            g = [];
            if (Xd(a, g, 7)) return [];
            gb(g, b);
            gb(g, d);
            gb(g, e);
            Nm(g, c.name || "");
            gb(g, f);
            return g
        }

        function ih(a, c, b) {
            void 0 === b && (b = []);
            for (var d = []; c && !mc(a, c, b); c = Kg(a, c)) d.push(c);
            ia(function(e) {
                ej.counter += 1;
                var f = ej.counter;
                e[Ed] = f;
                ej[f] = {};
                f = Pn(a, e);
                e = wp(a, e);
                f && e && (Kb(b, f), Kb(b, e))
            }, rq(d));
            return b
        }

        function Bn(a) {
            var c = a.Sa;
            if (!Nl || c && !c.fromElement) return qd(a)
        }

        function xp(a) {
            var c = a.Sa;
            if (c && !c.toElement) return zg(a)
        }

        function Cn(a) {
            var c = qb(a.Sa);
            if (c && Wm(c)) {
                var b = hh(a, c),
                    d = b.concat;
                var e = ud(a.l),
                    f = [];
                Xd(a.l, f, 17) ? a = [] : (gb(f, e), gb(f, c[Ed]), a = f);
                return d.call(b, a)
            }
        }

        function Dn(a) {
            var c = a.l,
                b = a.Sa.target;
            if (b && Wm(b)) {
                c = ih(c, b);
                var d = c.concat;
                var e = ud(a.l),
                    f = [];
                Xd(a.l,
                    f, 18) ? a = [] : (gb(f, e), gb(f, b[Ed]), a = f);
                return d.call(c, a)
            }
        }

        function Qn(a) {
            var c = a.l,
                b = qb(a.Sa);
            if (!b || Gm(c, b) || gj(c, b)) return [];
            if (go(b)) {
                var d = K(c).C("isEU"),
                    e = Ic(c, b, d),
                    f = e.Sb;
                d = e.xc;
                e = e.oc;
                if (dn(b)) var g = b.checked;
                else g = b.value, g = f ? Ha("", sq(g.split(""))) : g;
                c = ih(c, b);
                f = c.concat;
                var h = ud(a.l);
                d = d && !e;
                e = [];
                Xd(a.l, e, 39) ? a = [] : (gb(e, h), gb(e, b[Ed]), Dm(e, String(g)), Uf(e, d ? 1 : 0), a = e);
                return f.call(c, a)
            }
        }

        function Ni(a) {
            var c = a.l,
                b = a.Sa,
                d = qb(b);
            if (!d || "SCROLLBAR" === d.nodeName) return [];
            var e = [],
                f = aa(e, Kb);
            d &&
                Wm(d) ? f(hh(a, d)) : f(ih(c, d));
            var g = wd(c, b);
            f = e.concat;
            a = ud(a.l);
            var h = b.type,
                l = [g.x, g.y];
            g = b.which;
            b = b.button;
            var n;
            var x = oj(c, d);
            var I = x[0];
            for (x = x[1]; d && (!I || !x);)
                if (d = Kg(c, d)) x = oj(c, d), I = x[0], x = x[1];
            d ? (I = d[Ed], !I || 0 > I ? c = [] : (x = (n = {}, n.mousemove = 2, n.click = 32, n.dblclick = 33, n.mousedown = 4, n.mouseup = 30, n.touch = 12, n)[h]) ? (n = [], d = Rb(c, d), Xd(c, n, x) ? c = [] : (gb(n, a), gb(n, I), gb(n, Math.max(0, l[0] - d.left)), gb(n, Math.max(0, l[1] - d.top)), /^mouse(up|down)|click$/.test(h) && (c = g || b, Uf(n, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = n)) :
                c = []) : c = [];
            return f.call(e, c)
        }

        function nn(a) {
            var c = null,
                b = a.l,
                d = b.document;
            if (b.getSelection) {
                d = void 0;
                try {
                    d = b.getSelection()
                } catch (g) {
                    return []
                }
                if (Kc(d)) return [];
                var e = "" + d;
                c = d.anchorNode
            } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
            if ("string" !== typeof e) return [];
            try {
                for (; c && 1 !== c.nodeType;) c = c.parentNode
            } catch (g) {
                return []
            }
            if (!c) return [];
            d = Ic(b, c).Sb || gj(b, c, !0);
            c = c.getElementsByTagName("*");
            for (var f = 0; f < c.length && !d;) d = c[f], d = Ic(b, d).Sb ||
                gj(b, d, !0), f += 1;
            if (e !== wo) return wo = e, d = d ? Ha("", sq(e.split(""))) : e, e = ud(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], Xd(a.l, c, 29) ? a = [] : (gb(c, e), Nm(c, b), Nm(c, d), a = c), a
        }

        function xo(a) {
            return Ni(a).concat(nn(a) || [])
        }

        function Rn(a) {
            return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
        }

        function En(a) {
            var c = [];
            yo || (yo = !0, wo && Kb(c, On(a.l, ud(a.l))), oc(a.l, function() {
                yo = !1
            }, "fv.c"));
            return c
        }

        function Fn(a, c, b, d) {
            c = qb(c);
            if (!c || fj(a, c)) return [];
            var e = Ic(a, c),
                f = e.xc,
                g = e.oc;
            e = e.Sb;
            var h = K(a);
            if (!g && (f && h.C("isEU") || gj(a, c))) a = [];
            else {
                f = ih(a, c);
                g = f.concat;
                var l = ud(a);
                h = [];
                if (Xd(a, h, 38)) a = [];
                else {
                    gb(h, l);
                    Mm(h, b);
                    Uf(h, d);
                    a = c[Ed];
                    if (!a || 0 > a) a = 0;
                    gb(h, a);
                    Uf(h, e ? 1 : 0);
                    a = h
                }
                a = g.call(f, a)
            }
            return a
        }

        function Sn(a) {
            var c = a.l,
                b = a.Sa,
                d = b.keyCode,
                e = Rn(b),
                f = [],
                g = aa(f, Kb);
            if ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(Fn(c, b, d, e | 16)), zo = !1, oc(c, function() {
                zo = !0
            }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(En(a));
            return f
        }

        function yp(a) {
            var c = a.l;
            a = a.Sa;
            var b = [];
            zo && !Ao && 0 !== a.which && (Kb(b, Fn(c, a, a.charCode || a.keyCode, Rn(a))), Ao = !0, oc(c, function() {
                Ao = !1
            }, "fv.kp"));
            return b
        }

        function Om(a) {
            var c = a.l,
                b = qb(a.Sa);
            if (!b || Ef(c, b)) return [];
            var d = [];
            if ("FORM" === b.nodeName) {
                for (var e = b.elements, f = 0; f < e.length; f += 1) $l(e[f]) || Kb(d,
                    ih(c, e[f]));
                a = ud(a.l);
                e = pf(c, b);
                if (0 > e) c = [];
                else {
                    f = b.elements;
                    var g = f.length;
                    b = [];
                    for (var h = 0; h < g; h += 1)
                        if (!$l(f[h])) {
                            var l = f[h][Ed];
                            l && 0 < l && b.push(l)
                        }
                    f = [];
                    if (Xd(c, f, 11)) c = [];
                    else {
                        gb(f, a);
                        gb(f, e);
                        gb(f, b.length);
                        for (c = 0; c < b.length; c += 1) gb(f, b[c]);
                        c = f
                    }
                }
                Kb(d, c)
            }
            return d
        }

        function gp(a) {
            var c = a.flush;
            a = qb(a.Sa);
            "BODY" === pb(a) && c()
        }

        function dl(a, c) {
            var b, d = qb(c),
                e = Q.Ld,
                f = mb(a);
            if (d && vf("ym-advanced-informer", d)) {
                var g = f.C("ifc", 0) + 1;
                f.D("ifc", g);
                g = d.getAttribute("data-lang");
                var h = Nc(d.getAttribute("data-cid") ||
                    "");
                if (h || 0 === h)(e = F(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.D("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
            }
        }

        function Ng(a, c, b, d, e) {
            if (!b.length) return e;
            b = qa(function(f) {
                return ra([a, c, d], f)
            }, b);
            return ca.apply(void 0, b)(e)
        }
        var Oi = {
                construct: "Metrika2",
                callbackPostfix: "2",
                version: "kcy5clq5ttogf0tsj82n4ind6n3",
                host: "mc.yandex.ru"
            },
            zm = [],
            um = /\./g,
            Gn = Db(String.prototype.indexOf, "indexOf"),
            xe = Gn ? function(a, c) {
                return Gn.call(a, c)
            } : uo,
            wc = tb(function(a,
                c) {
                return a === c
            }),
            Qh = tb(function(a, c) {
                a(c);
                return c
            }),
            vc = tb(vl),
            Kc = wc(null),
            db = wc(void 0),
            Yf = Db(Array.from, "from"),
            Tn = Db(Function.prototype.bind, "bind"),
            Ea = Tn ? gg(Tn) : zf,
            on = Db(Array.prototype.reduce, "reduce"),
            Te = on ? function(a, c, b) {
                return on.call(b, a, c)
            } : Jf,
            Oa = Te,
            m = ca,
            t = ca(Za, Va),
            u, A = $a(window),
            G = Vb(A),
            O = Object.prototype.hasOwnProperty,
            K = V(mb),
            S = Vb(F),
            ea = S("length"),
            oa = tb(ra),
            Fa = tb(vb),
            ab = Db(Array.prototype.every, "every"),
            lb = ab ? function(a, c) {
                return ab.call(c, a)
            } : U,
            jb = ra([1, null], H),
            sb = ra([1, 0], H),
            cc =
            Boolean,
            be = Db(Array.prototype.filter, "filter"),
            fb = be ? function(a, c) {
                return be.call(c, a)
            } : z,
            ac = aa(cc, fb),
            Yg = tb(fb),
            Cg = Db(Array.prototype.find, "find"),
            cd = Cg ? function(a, c) {
                return Cg.call(c, a)
            } : w,
            Un = Db(Array.prototype.includes, "includes"),
            Ia = Un ? function(a, c, b) {
                return Un.call(c, a, b)
            } : r,
            $h = Vb(Ia),
            hp = Db(Array.prototype.join, "join"),
            Ha = hp ? function(a, c) {
                return hp.call(c, a)
            } : Ln,
            Sl = tb(Ha),
            Bo = V(function(a) {
                var c = F(a, "navigator") || {};
                a = F(c, "userAgent") || "";
                c = F(c, "vendor") || "";
                return {
                    uc: -1 < xe(c, "Apple"),
                    Bc: a
                }
            }),
            Ue = V(S("navigator.userAgent")),
            An = /Firefox\/([0-9]+)/i,
            Xk = V(function(a) {
                var c = F(a, "document.documentElement.style"),
                    b = F(a, "InstallTrigger");
                a = Yk(An, a);
                An.lastIndex = 0;
                return !(!(c && "MozAppearance" in c) || Ma(b)) || a
            }),
            ip = Db(Array.isArray, "isArray"),
            Ja = ip ? function(a) {
                return ip(a)
            } : tp,
            jp = Db(Array.prototype.map, "map"),
            kp = jp && dm(window, Array.prototype.map) ? function(a, c) {
                return c && 0 < c.length ? jp.call(c, a) : []
            } : xk,
            qa = kp,
            ia = kp,
            lp = Db(Array.prototype.flatMap, "flatMap"),
            fh = lp ? function(a, c) {
                return lp.call(c, a)
            } : cm,
            cf = tb(qa),
            rr = Vb(qa),
            Co = Db(Array.prototype.some, "some"),
            Oc = Co ? function(a, c) {
                return Co.call(c, a)
            } : kn,
            ll = V($a),
            sm = S("0"),
            tr = tb(Og),
            mp = Db(Array.prototype.reverse, "reverse"),
            rq = mp ? function(a) {
                return mp.call(a)
            } : to,
            np = Vb(parseInt),
            Nc = np(10),
            Ql = np(2),
            Do = Db(Object.keys, "keys"),
            op = Db(Object.entries, "entries"),
            $b = op ? jn(op) : qg,
            zb = Do ? function(a) {
                return Do(a)
            } : xm,
            Vn = Db(Object.values, "values"),
            ur = ca(qg, aa(S("1"), xk)),
            Eo = Vn ? function(a) {
                return Vn(a)
            } : ur,
            na = Object.assign || te,
            Hn = tb(function(a, c) {
                return na({}, a, c)
            }),
            pm = V(ca(S("String.fromCharCode"), aa("fromCharCode", xc), yh)),
            Em = V(ca(Ue, zc(/ipad|iphone|ipod/i))),
            bp = V(function(a) {
                return F(a, "navigator.platform") || ""
            }),
            sj = V(function(a) {
                a = Bo(a);
                var c = a.Bc;
                return a.uc && !c.match("CriOS")
            }),
            Pm = zc(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
            vr = zc(/; wv\)/),
            Tk = V(function(a) {
                a = Ue(a);
                return vr(a) || Pm(a)
            }),
            tq = /Chrome\/(\d+)\./,
            uq = V(function(a) {
                return (a =
                    (F(a, "navigator.userAgent") || "").match(tq)) && a.length ? 76 <= Nc(a[1]) : !1
            }),
            qm = V(function(a) {
                a = (Ue(a) || "").toLowerCase();
                return od(a, "android") && od(a, "mobile")
            }),
            zp = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
            vq = V(function(a) {
                var c = F(a, "navigator.connection.type");
                if (db(c)) return null;
                a = ll(a)(c, zp);
                return -1 === a ? c : "" + a
            }),
            wn = V(ca(S("document.addEventListener"), yh)),
            pp = V(function(a) {
                var c = F(a, "navigator") || {};
                return Oa(function(b, d) {
                    return b || F(c, d)
                }, "", ["language", "userLanguage",
                    "browserLanguage", "systemLanguage"
                ])
            }),
            Xn = V(function(a) {
                var c = F(a, "navigator") || {};
                a = pp(a);
                Ta(a) || (a = "", c = F(c, "languages.0"), Ta(c) && (a = c));
                return a.toLowerCase().split("-")[0]
            }),
            Cd = V(function(a) {
                return (F(a, "top") || a) !== a
            }),
            wr = V(S("top.contentWindow")),
            xr = V(function(a) {
                var c = !1;
                try {
                    c = a.navigator.javaEnabled()
                } catch (b) {}
                return c
            }),
            yr = V(function(a) {
                var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                    b = F(a, "external");
                b = F(b, "toString") ? "" + b.toString() : "";
                b = -1 !== xe(b, "Sequentum");
                var d = F(a, "document.documentElement"),
                    e = ["selenium", "webdriver", "driver"];
                return !!(Oc(aa(a, F), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Oc(aa(F(a, "document"), F), c) || b || d && Oc(Ea(d.getAttribute, d), e))
            }),
            zr = V(function(a) {
                return !!(Oc(aa(a, F), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(Ue(a)) || F(a, "navigator.webdriver") || F(a, "isChrome") && !F(a, "chrome"))
            }),
            qp = V(function(a) {
                return !(!F(a,
                    "ia_document.shareURL") || !F(a, "ia_document.referrer"))
            }),
            k = V(function(a) {
                var c = Ue(a) || "",
                    b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                b = b ? [+b[1], +b[2]] : [0, 0];
                c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                return 14 <= (c ? +c[1] : 0) ? !0 : (Em(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && sj(a)
            }),
            p = /Edg\/(\d+)\./,
            q = V(function(a) {
                return k(a) || Yi(a, 68) || Tj(a, 79)
            }),
            y = Oi.construct,
            E = Oi.host,
            N = wn(window),
            Q = {
                Fi: 24226447,
                Ai: 26302566,
                Ii: 51533966,
                Hk: 65446441,
                Cb: "https:",
                lc: "1502",
                Ld: y,
                Ei: N ? 512 : 2048,
                Ci: N ? 512 : 2048,
                Di: N ? 100 : 400,
                Ik: 100,
                Gi: "noindex"
            },
            Z = [],
            W = V(function(a) {
                return a.id + ":" + a.$
            }),
            xa = {},
            Na = wc("1"),
            Fb = setTimeout;
        uc.prototype["catch"] = function(a) {
            return this.then(null, a)
        };
        uc.prototype.then = function(a, c) {
            var b = new this.constructor(cp);
            Mn(this, new vp(a, c, b));
            return b
        };
        uc.prototype["finally"] = function(a) {
            var c = this.constructor;
            return this.then(function(b) {
                return c.resolve(a()).then(function() {
                    return b
                })
            }, function(b) {
                return c.resolve(a()).then(function() {
                    return c.reject(b)
                })
            })
        };
        uc.all = function(a) {
            return new uc(function(c, b) {
                function d(h,
                    l) {
                    try {
                        if (l && ("object" === typeof l || "function" === typeof l)) {
                            var n = l.then;
                            if ("function" === typeof n) {
                                n.call(l, function(x) {
                                    d(h, x)
                                }, b);
                                return
                            }
                        }
                        e[h] = l;
                        0 === --f && c(e)
                    } catch (x) {
                        b(x)
                    }
                }
                if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                var e = Array.prototype.slice.call(a);
                if (0 === e.length) return c([]);
                for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
            })
        };
        uc.resolve = function(a) {
            return a && "object" === typeof a && a.constructor === uc ? a : new uc(function(c) {
                c(a)
            })
        };
        uc.reject = function(a) {
            return new uc(function(c,
                b) {
                b(a)
            })
        };
        uc.race = function(a) {
            return new uc(function(c, b) {
                if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                for (var d = 0, e = a.length; d < e; d++) uc.resolve(a[d]).then(c, b)
            })
        };
        uc.kc = "function" === typeof setImmediate && function(a) {
            setImmediate(a)
        } || function(a) {
            Fb(a, 0)
        };
        uc.Me = function(a) {
            "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
        };
        var wa = window.Promise,
            Ac = Db(wa, "Promise"),
            Bd = Db(F(wa, "resolve"), "resolve"),
            ce = Db(F(wa,
                "reject"), "reject"),
            we = Db(F(wa, "all"), "all");
        if (Ac && Bd && ce && we) {
            var Kd = function(a) {
                return new Promise(a)
            };
            Kd.resolve = Ea(Bd, wa);
            Kd.reject = Ea(ce, wa);
            Kd.all = Ea(we, wa);
            wa = Kd
        } else wa = uc;
        var ve = $h([26812653]),
            Kj = V(ca(S("id"), ve), W),
            Gj = "hash host hostname href pathname port protocol search".split(" "),
            tl = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "),
            Jn = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
            rm = V(function(a) {
                return (a ? a.replace(/^www\./, "") : "").toLowerCase()
            }),
            ap = V(function(a) {
                a = bb(a).hostname;
                var c = !1;
                a && (c = -1 !== a.search(Jn));
                return c
            }),
            rp = ca(bb, S("protocol"), wc("https:")),
            sr = V(function(a) {
                return uq(a) && rp(a) ? "SameSite=None;Secure;" : ""
            }),
            cq = /^\s+|\s+$/g,
            oq = Db(String.prototype.trim, "trim"),
            pn = tb(function(a, c) {
                return c.replace(a, "")
            }),
            tt = pn(/\s/g),
            Um = pn(/\D/g),
            Fp = pn(/\d/g),
            hn = ["metrika_enabled"],
            so = [],
            nq = Ya("gsc", rl),
            ot = /:\d+$/,
            pt = V(function(a) {
                var c = (bb(a).host || "").split(".");
                return 1 === c.length ? c[0] : Oa(function(b, d, e) {
                    e += 1;
                    2 <= e && !b && (e = Ha(".", c.slice(-e)),
                        Rk(a, e) && (b = e));
                    return b
                }, "", c)
            }),
            qk = V(Vi),
            gn = V(function(a) {
                var c = qk(a),
                    b = "1" === c.C("debug"),
                    d = -1 < Je(bb(a).href, "_ym_debug=1") || -1 < Je(bb(a).href, "_ym_debug=2"),
                    e = a._ym_debug;
                !e && !d || b || (a = bb(a), c.D("debug", "1", void 0, a.host));
                return !!(b || e || d)
            }),
            nt = Ya("debuggerEvents", Ca, !0),
            lt = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
            em, ub = function(a) {
                return function(c, b) {
                    void 0 === b && (b = !1);
                    if (em) var d = new em(c);
                    else xc("Error", a.Error) ? (em = a.Error, d =
                        new a.Error(c)) : (em = Bh, d = new em(c));
                    b && (d.unk = !0);
                    return d
                }
            }(window),
            mt = zc(/^http./),
            kt = zc(/^err.kn/),
            mq = [],
            jt = V(function(a) {
                a = !(!a.addEventListener || !a.removeEventListener);
                return {
                    Ed: a,
                    F: a ? "addEventListener" : "attachEvent",
                    ea: a ? "removeEventListener" : "detachEvent"
                }
            }),
            ut = V(function(a) {
                var c = !1;
                if (!a.addEventListener) return c;
                try {
                    var b = Object.defineProperty({}, "passive", {
                        get: function() {
                            c = !0;
                            return 1
                        }
                    });
                    a.addEventListener("test", sa, b)
                } catch (d) {}
                return c
            }),
            vt = tb(function(a, c) {
                if (null !== c) return a ? na({
                    capture: !0,
                    passive: !0
                }, c || {}) : !!c
            }),
            Qb = V(function(a) {
                var c = ut(a),
                    b = vt(c),
                    d = {};
                return na(d, {
                    F: function(e, f, g, h) {
                        ia(function(l) {
                            var n = b(h);
                            tc(a, e, l, g, n, !1)
                        }, f);
                        return Ea(d.Ia, d, e, f, g, h)
                    },
                    Ia: function(e, f, g, h) {
                        ia(function(l) {
                            var n = b(h);
                            tc(a, e, l, g, n, !0)
                        }, f)
                    }
                })
            }),
            Jb = V(Uk),
            lq = tb(function(a, c) {
                for (var b = []; !Ah(c);) {
                    var d = In(c);
                    a(d, function(e) {
                        return e(c)
                    });
                    b.push(d)
                }
                return b
            }),
            wq = tb(function(a, c) {
                return vc(function(b, d) {
                    return c(b, function(e) {
                        try {
                            d(a(e))
                        } catch (f) {
                            b(f)
                        }
                    })
                })
            }),
            Fo = tb(function(a, c) {
                return vc(function(b,
                    d) {
                    return c(b, function(e) {
                        try {
                            a(e)(Rc(b, d))
                        } catch (f) {
                            b(f)
                        }
                    })
                })
            }),
            po = [],
            qo = !1,
            oo = !1,
            xq = tb(function(a, c) {
                var b = c || {};
                return {
                    l: aa(b, Za),
                    C: function(d, e) {
                        var f = b[d];
                        return db(f) && !db(e) ? e : f
                    },
                    D: function(d, e) {
                        b[d] = e;
                        return this
                    },
                    cb: function(d, e) {
                        return "" === e || Ma(e) ? this : this.D(d, e)
                    },
                    Da: aa(b, a)
                }
            }),
            Hc = xq(function(a) {
                var c = "";
                a = Te(function(b, d) {
                    var e = d[0],
                        f = "" + e + ":" + d[1];
                    "t" === e ? c = f : b.push(f);
                    return b
                }, [], $b(a));
                c && a.push(c);
                return Ha(":", a)
            }),
            Zg = {
                id: "id",
                Cc: "ut",
                $: "type",
                wb: "ldc",
                Ka: "nck",
                pc: "url",
                yg: "referrer"
            },
            wt = /^\d+$/,
            yk = {
                id: function(a) {
                    a = "" + (a || "0");
                    wt.test(a) || (a = "0");
                    try {
                        var c = Nc(a)
                    } catch (b) {
                        c = 0
                    }
                    return c
                },
                $: function(a) {
                    return "" + (a || 0 === a ? a : "0")
                },
                Ka: cc,
                Cc: cc
            };
        Zg.sd = "defer";
        yk.sd = cc;
        Zg.O = "params";
        yk.O = function(a) {
            return wb(a) || Ja(a) ? a : null
        };
        Zg.gg = "userParams";
        Zg.Jh = "triggerEvent";
        yk.Jh = cc;
        Zg.Eh = "sendTitle";
        yk.Eh = function(a) {
            return !!a || db(a)
        };
        Zg.Pe = "trackHash";
        yk.Pe = cc;
        Zg.dg = "trackLinks";
        Zg.Vi = "enableAll";
        var Qm = Oa(function(a, c) {
                var b = c[0];
                a[b] = {
                    ga: c[1],
                    gb: yk[b]
                };
                return a
            }, {}, $b(Zg)),
            Go, kq = (Go = {}, Go.w = [
                [function(a, c) {
                    return {
                        M: function(b, d) {
                            var e, f = b.G;
                            f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                            "0" !== c.$ && (f["cnt-class"] = c.$);
                            b.H || (b.H = Hc());
                            e = b.H;
                            var g = b.T;
                            f = {
                                ra: {
                                    ya: "watch/" + c.id
                                },
                                T: na(void 0 === g ? {} : g, {
                                    mb: !!e.C("pv") && !e.C("ar") && !e.C("wh")
                                }),
                                G: na(b.G || {}, f)
                            };
                            na(b, f);
                            d()
                        }
                    }
                }, 1]
            ], Go),
            yq = aa(kq, Id),
            Oe = Hb("w"),
            jq = ["webkitvisibilitychange", "visibilitychange"],
            bo = xq(function(a) {
                a = $b(a);
                return Ha("", qa(function(c) {
                    var b = c[0];
                    c = c[1];
                    return Kc(c) ? "" : b + "(" + c + ")"
                }, a))
            }),
            zq = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
            Xs = /^\s*(data|javascript):/i,
            Zp = new RegExp(Ha("", ["\\.(" + Ha("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
            gd, aq = (gd = {}, gd.hit = "h", gd.params = "p", gd.reachGoal = "g", gd.userParams = "up",
                gd.trackHash = "th", gd.accurateTrackBounce = "atb", gd.notBounce = "nb", gd.addFileExtension = "fe", gd.extLink = "el", gd.file = "fc", gd.trackLinks = "tl", gd.destruct = "d", gd.setUserID = "ui", gd.getClientID = "ci", gd.clickmap = "cm", gd.enableAll = "ea", gd),
            xt = V(function() {
                var a = 0;
                return function() {
                    return a += 1
                }
            }),
            yt = ca(W, xt, Va),
            mo = {
                mc: function(a) {
                    a = mb(a).C("mt", {});
                    a = $b(a);
                    return a.length ? Oa(function(c, b, d) {
                        return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                    }, "", a) : null
                },
                clc: function(a) {
                    var c = K(a).C("cls", {
                            Kd: 0,
                            x: 0,
                            y: 0
                        }),
                        b = c.Kd,
                        d = c.x;
                    c = c.y;
                    return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                },
                rqnt: function(a, c, b) {
                    a = b.G;
                    return !a || a.nohit ? null : yt(c)
                }
            },
            it = V(function(a) {
                M(a, "_ymBRC", "1");
                var c = "1" !== R(a, "_ymBRC");
                c || da(a, "_ymBRC");
                return c
            }),
            pd = V(C),
            zk = V(C, function(a, c, b) {
                return "" + c + b
            }),
            zt = V(S("document.documentElement")),
            At = V(function(a) {
                a = F(a, "document") || {};
                return ("" + (a.characterSet || a.charset || "")).toLowerCase()
            }),
            Ge = V(ca(S("document"), aa("createElement", Ga))),
            Sp = V(function(a) {
                var c = F(a, "Element.prototype");
                return c ?
                    (a = cd(function(b) {
                        var d = c[b];
                        return !!d && xc(b, d)
                    }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
            }),
            Bt = wc("INPUT"),
            cn = ca(pb, Bt),
            Ct = wc("TEXTAREA"),
            gt = ca(pb, Ct),
            Dt = wc("SELECT"),
            ht = ca(pb, Dt),
            dn = ca(S("type"), zc(/^(checkbox|radio)$/)),
            go = ca(pb, zc(/^INPUT|SELECT|TEXTAREA$/)),
            Wm = ca(pb, zc(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
            ho = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
            ft = ["submit", "image", "hidden"],
            iq = V(function() {
                for (var a = 59,
                        c = {}, b = 0; b < zq.length; b += 1) c[zq[b]] = String.fromCharCode(a), a += 1;
                return c
            }),
            hq = V(function(a) {
                return {
                    xk: a,
                    yb: null,
                    Ab: []
                }
            }),
            gq = {},
            no = {};
        gq.p = 500;
        var fq = {
            i: "id",
            n: "name",
            h: "href",
            ty: "type"
        };
        no.h = !0;
        no.c = !0;
        var bn = {
                p: function(a, c, b) {
                    if (c && pj(a, c) && c._ymp) return c._ymp;
                    a = Kh(a, c, b);
                    c && (c._ymp = a);
                    return a
                },
                c: function(a, c, b) {
                    (a = Pc(F(c, "textContent"))) && b && (b = b(c), b.length && Oc(ca(S("textContent"), Pc, wc(a)), b) && (a = ""));
                    cn(c) && (a = Pc(c.getAttribute && c.getAttribute("value") || a));
                    return a
                }
            },
            Ak, ko = "button," + Ha(",",
                qa(function(a) {
                    return 'input[type="' + a + '"]'
                }, ["button", "submit", "reset", "file"])) + ",a",
            Ts = aa(ko, id),
            Ss = (Ak = {}, Ak.A = "h", Ak.BUTTON = "i", Ak.DIV = "i", Ak.INPUT = "ty", Ak),
            Aq = /\/$/,
            eq = Ya("r", function(a, c) {
                var b = nl(a, c),
                    d = b[0];
                return !b[1] && d
            }),
            Zl = V(function() {
                return {
                    fa: {},
                    pending: {},
                    children: {}
                }
            }),
            Ho = S("postMessage"),
            Et = pa("s.f", function(a, c, b, d, e) {
                c = c(d);
                var f = Zl(a),
                    g = Ha(":", [c.meta.Wa, c.meta.key]);
                if (Ho(b)) {
                    f.pending[g] = e;
                    try {
                        b.postMessage(c.Yb, "*")
                    } catch (h) {
                        delete f.pending[g];
                        return
                    }
                    eb(a, function() {
                            delete f.pending[g]
                        },
                        5E3, "if.s")
                }
            }),
            Ft = pa("s.fh", function(a, c, b, d, e, f) {
                var g = null,
                    h = null,
                    l = Zl(a),
                    n = null;
                try {
                    g = Ye(a, f.data), h = g.__yminfo, n = g.data
                } catch (x) {
                    return
                }
                if (!Ma(h) && h.substring && "__yminfo" === h.substring(0, 8) && !Ma(n) && (g = h.split(":"), 4 === g.length))
                    if (h = c.id, c = g[1], a = g[2], g = g[3], !Ja(n) && n.type && "0" === g && n.counterId) {
                        if (!n.toCounter || n.toCounter == h) {
                            l = null;
                            try {
                                l = f.source
                            } catch (x) {}!Kc(l) && Ho(l) && (f = d.N(n.type, [f, n]), e = qa(ca(Za, Hn(e)), f.concat([{}])), n = b([c, a, n.counterId], e), l.postMessage(n.Yb, "*"))
                        }
                    } else g === "" + h &&
                        Ja(n) && fb(function(x) {
                            return !(!x.hid || !x.counterId)
                        }, n).length === n.length && (b = l.pending[Ha(":", [c, a])]) && b.apply(null, [f].concat(n))
            }),
            Ll = V(function(a, c) {
                var b, d = Ga("getElementsByTagName", F(a, "document")),
                    e = Zl(a),
                    f = Ho(a),
                    g = dj(a),
                    h = Qb(a);
                if (!d || !f) return null;
                d = d.call(a.document, "iframe");
                f = (b = {}, b.counterId = c.id, b.hid = "" + vd(a), b);
                q(a) && (f.duid = xd(a, c));
                Nf(a, g);
                gc(a);
                b = ml(a, f);
                var l = ra([a, aa([], b)], Et);
                ia(function(n) {
                    var x = null;
                    try {
                        x = n.contentWindow
                    } catch (I) {}
                    x && l(x, {
                        type: "initToChild"
                    }, function(I,
                        P) {
                        g.N("initToParent", [I, P])
                    })
                }, d);
                Cd(a) && l(a.parent, {
                    type: "initToParent"
                }, function(n, x) {
                    g.N("parentConnect", [n, x])
                });
                h.F(a, ["message"], ra([a, c, b, g, f], Ft));
                return {
                    V: g,
                    fa: e.fa,
                    children: e.children,
                    fc: l
                }
            }, ca(Jd, W)),
            Ml = V(function(a, c) {
                if (!q(a) || !Cd(a)) return xd(a, c);
                var b = Ll(a, c);
                return b && b.fa[c.id] ? b.fa[c.id].info.duid || xd(a, c) : xd(a, c)
            }, function(a, c) {
                return "{" + c.wb + c.Ka
            }),
            Gt = V(ca(Jb, vc(function(a) {
                return -(new a.l.Date).getTimezoneOffset()
            }))),
            Ht = ca(Jb, vc(function(a) {
                a = new a.l.Date;
                return Ha("", qa(Km, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
            })),
            It = ca(Jb, vc(Ji)),
            Bq = V(ca(Jb, vc(function(a) {
                return a.Ga[0]
            }))),
            Jt = V(function(a) {
                a = K(a);
                var c = a.C("counterNum", 0) + 1;
                a.D("counterNum", c);
                return c
            }, ca(Jd, W)),
            Zb, Yl = (Zb = {}, Zb.vf = aa(Oi.version, Za), Zb.nt = vq, Zb.fu = function(a, c, b) {
                    var d = b.G;
                    if (!d) return null;
                    c = (F(a, "document.referrer") || "").replace(Aq, "");
                    b = (d["page-ref"] || "").replace(Aq, "");
                    d = d["page-url"];
                    a = bb(a).href !== d;
                    c = c !== b;
                    b = 0;
                    a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                    return b
                },
                Zb.en = At, Zb.la = pp, Zb.ut = function(a, c, b) {
                    var d = b.L;
                    b = b.G;
                    d = d && d.Rb;
                    b && (ap(a) || c.Cc || d) && (b.ut = Q.Gi);
                    return null
                }, Zb.v = aa(Q.lc, Za), Zb.cn = Jt, Zb.dp = function(a) {
                    var c = K(a),
                        b = c.C("bt", {});
                    if (db(c.C("bt"))) {
                        var d = F(a, "navigator.getBattery");
                        try {
                            b.p = d && d.call(a.navigator)
                        } catch (e) {}
                        c.D("bt", b);
                        b.p && b.p.then && b.p.then(va(a, "bi:dp.p", function(e) {
                            b.Fd = F(e, "charging") && 0 === F(e, "chargingTime")
                        }))
                    }
                    return sb(b.Fd)
                }, Zb.ls = V(function(a, c) {
                    var b = zk(a, c.id),
                        d = Jb(a),
                        e = b.C("lsid");
                    return +e ? e : (d = nc(a, 0, d(nb)), b.D("lsid",
                        d), d)
                }, Jd), Zb.hid = vd, Zb.phid = function(a, c) {
                    if (!Cd(a)) return null;
                    var b = Ll(a, c);
                    if (!b) return null;
                    var d = zb(b.fa);
                    return d.length ? b.fa[d[0]].info.hid : null
                }, Zb.z = Gt, Zb.i = Ht, Zb.et = It, Zb.c = ca(S("navigator.cookieEnabled"), jb), Zb.rn = ca(Za, nc), Zb.rqn = function(a, c, b) {
                    b = b.G;
                    if (!b || b.nohit) return null;
                    c = W(c);
                    a = zk(a, c);
                    c = (a.C("reqNum", 0) || 0) + 1;
                    a.D("reqNum", c);
                    if (a.C("reqNum") === c) return c;
                    a.Ra("reqNum");
                    return null
                }, Zb.u = Ml, Zb.w = function(a) {
                    a = me(a);
                    return a[0] + "x" + a[1]
                }, Zb.s = function(a) {
                    var c = F(a, "screen");
                    if (c) {
                        a =
                            F(c, "width");
                        var b = F(c, "height");
                        c = F(c, "colorDepth") || F(c, "pixelDepth");
                        return Ha("x", [a, b, c])
                    }
                    return null
                }, Zb.sk = S("devicePixelRatio"), Zb.ifr = ca(Cd, jb), Zb.j = ca(xr, jb), Zb.sti = function(a) {
                    return Cd(a) && wr(a) ? "1" : null
                }, Zb),
            et = V(function() {
                return Kb(zb(Yl), zb(mo))
            }),
            dt = V(ta, W),
            dq = V(function() {
                return {
                    Pb: null,
                    aa: []
                }
            }, W),
            ct = /^[a-z][\w.+-]+:/i,
            Io, Xg = [
                [yb, 1],
                [dg, 2],
                [bd(), 3],
                [Jg, 4]
            ],
            an = [],
            rf = aa(Xg, zh),
            Wg = (Io = {}, Io.h = Xg, Io),
            Ab = aa(Wg, Id);
        rf(nd, -100);
        var qt = V(function(a) {
                if (a = Ge(a)) return a("a")
            }),
            Kt = /[^a-z0-9.:-]/,
            qn, Xl = (qn = {}, qn.x = {
                id: 2,
                check: function(a) {
                    var c;
                    if (c = F(a, "XMLHttpRequest"))
                        if (c = "withCredentials" in new a.XMLHttpRequest) {
                            a: {
                                if (Kt.test(a.location.host) && a.opera && Da(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                    c = !0;
                                    break a
                                }
                                c = !1
                            }
                            c = !c
                        }
                    return c ? aa(a, Ne) : !1
                }
            }, qn.i = {
                id: 4,
                check: function(a) {
                    var c = Ge(a);
                    return c ? ra([a, c], Uh) : !1
                }
            }, qn);
        Xl.f = {
            id: 1,
            check: function(a) {
                if (a.fetch) {
                    var c = F(a, "AbortController");
                    return ra([a, c ? new c : void 0], tk)
                }
                return !1
            }
        };
        Xl.b = {
            id: 0,
            check: function(a) {
                return !Tk(a) &&
                    Ii(a)
            }
        };
        Xl.j = {
            id: 3,
            check: function(a) {
                return Ge(a) ? aa(a, ff) : !1
            }
        };
        var Jo, lo = {},
            $g = ["b", "f", "x", "j", "i"],
            rn = ["x"];
        rn.unshift("f");
        rn.push("j");
        var Bk = ["i"],
            Cq = ["f", "x"],
            Dq = ["f", "i"],
            hc = (Jo = {}, Jo.h = rn, Jo),
            Ol = V(function(a, c, b) {
                (b = Sd(c) || yf(b)) || (b = yf(c ? hc[c] : $g));
                c = Oa(function(d, e) {
                    var f = e.check,
                        g = e.id;
                    (f = f(a)) && d.push([g, f]);
                    return d
                }, [], b || []);
                c.length || ee();
                return c
            }, Jd),
            Ko, Lt = Ea(wa.reject, wa, Ec()),
            rc = (Ko = {}, Ko.h = Oe, Ko),
            fc = pa("g.sen", function(a, c, b) {
                var d = Ol(a, c);
                b = b ? Pl(a, c, b) : [];
                var e = rc[c],
                    f = e ? e(a,
                        d, b) : Oe(a, d, b);
                return function() {
                    var g = lc(arguments),
                        h = g[0];
                    g = g.slice(1);
                    var l = h.T;
                    h = na(h, {
                        T: na(void 0 === l ? {} : l, {
                            ma: [c]
                        })
                    });
                    return f.apply(null, [h].concat(g))
                }
            }, Lt),
            bt = tb(function(a, c) {
                if (!c[a]) {
                    var b, d = new wa(function(e) {
                        b = e
                    });
                    c[a] = {
                        Wb: b,
                        promise: d,
                        Xb: !1
                    }
                }
                return c[a].promise
            }),
            bq = V(ca(ta, vc)),
            Mt = pa("dc.init", function(a, c) {
                return c && ve(ok(c.split(":")[0])) ? {
                    log: sa,
                    warn: sa,
                    error: sa
                } : sk(a, c)
            }),
            Th = V(Mt, Jd),
            Ar = pa("h.p", function(a, c) {
                var b, d, e = fc(a, "h", c),
                    f = c.pc || "" + bb(a).href,
                    g = c.yg || a.document.referrer,
                    h = {
                        H: Hc((b = {}, b.pv = 1, b)),
                        G: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
                        L: {}
                    };
                h.L.O = c.O;
                h.L.gg = c.gg;
                c.sd && h.G && (h.G.nohit = "1");
                return e(h, c).then(function(l) {
                    var n;
                    l && (c.sd || Rd(a, c, "h", (n = {}, n.id = c.id, n.url = f, n.ref = g, n), c.O)(), oc(a, ra([a, c, l], nj)))
                })["catch"](va(a, "h.g.s"))
            }),
            Lo = ["yandex_metrika_callback" + Oi.callbackPostfix, "yandex_metrika_callbacks" + Oi.callbackPostfix],
            Nt = pa("cb.i", function(a) {
                var c = Lo[0],
                    b = Lo[1];
                if (Da(a[c])) a[c]();
                "object" === typeof a[b] && ia(function(d, e) {
                    a[b][e] = null;
                    Y(a, d)
                }, a[b]);
                ia(function(d) {
                    try {
                        delete a[d]
                    } catch (e) {
                        a[d] = void 0
                    }
                }, Lo)
            }),
            Wn = [],
            yl = [],
            xb = [],
            Wd = [],
            Mo = [],
            Ck = [],
            at = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/,
            $s = pn(/[^\d+()]/g),
            Zs = /[a-z\u0430-\u044f\u0451,.]/gi,
            Eq = V(function(a) {
                return !!F(a, "crypto.subtle.digest") && !!F(a, "TextEncoder") && !!F(a, "FileReader") && !!F(a, "Blob")
            }),
            Ys = ["yandex_cid", "yandex_public_id"],
            Ot = pa("fpm", function(a, c) {
                if (!rp(a)) return sa;
                var b = W(c);
                if (!Eq(a)) return Mc(a, b, "ns"), sa;
                var d = Wb(a, c);
                return d ? function(e) {
                    return (new wa(function(f, g) {
                        return wb(e) ?
                            zb(e).length ? f(Aa(a, e).then(function(h) {
                                var l, n;
                                h && h.length && d.params((l = {}, l.__ym = (n = {}, n.fpp = h, n), l))
                            }, sa)) : g(Ec("fpm.l")) : g(Ec("fpm.o"))
                    }))["catch"](va(a, "fpm.en"))
                } : sa
            }),
            sn = tb(function(a, c) {
                var b = {};
                X(a)(function(d) {
                    b = d[c] || {}
                });
                return b
            }),
            Pt = pa("c.c.cc", function(a) {
                var c = K(a),
                    b = ca(sn(a), function(d) {
                        var e, f = (e = {}, e.clickmap = !!d.clickmap, e);
                        return na({}, d, f)
                    });
                return va(a, "g.c.cc", ca(Ea(c.C, c, "counters", {}), zb, cf(b)))
            }),
            Qt = pa("gt.c.rs", function(a, c) {
                var b, d = W(c),
                    e = c.id,
                    f = c.$,
                    g = c.Oh,
                    h = c.Pe,
                    l = ra([a,
                        d
                    ], J);
                L(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                return l
            }),
            $p = V(Ca),
            Vl = V(ta, W),
            Rt = pa("pa.int", function(a, c) {
                var b;
                return b = {}, b.params = function() {
                    var d, e, f, g = lc(arguments),
                        h = Hi(g);
                    if (!h) return null;
                    g = h.vg;
                    var l = h.O;
                    h = h.ec;
                    if (!wb(l) && !Ja(l)) return null;
                    var n = fc(a, "1", c),
                        x = Vl(c).url,
                        I = !Kj(c),
                        P = "pa",
                        T = (d = {}, d.id = c.id, d);
                    d = l;
                    var ba = "";
                    if (ba = F(l, "__ym.user_id")) P = "pau", T.uid = ba;
                    Ia("__ymu", zb(l)) && (P = "paup");
                    d.__ym && (d = na({}, l), d.__ym = Oa(function(ka, Ka) {
                        var Ua = F(l, "__ym." + Ka);
                        Ua && (ka[Ka] =
                            Ua);
                        return ka
                    }, {}, Z), zb(d.__ym).length || delete d.__ym, I = !!zb(d).length);
                    d = ba ? void 0 : JSON.stringify(d);
                    d = Rd(a, c, P, T, d);
                    n = n({
                        L: {
                            O: l
                        },
                        H: Hc((e = {}, e.pa = 1, e.ar = 1, e)),
                        G: (f = {}, f["page-url"] = x || bb(a).href, f)
                    }, c).then(I ? d : sa);
                    return ae(a, "p.s", n, h, g)
                }, b
            }),
            Tm = V(og, ca(Jd, W)),
            St = pa("y.p", function(a, c) {
                var b = og(a, c);
                if (b) {
                    var d = yd(a),
                        e = ra([a, b, c], Pb);
                    ne(a, d, function(f) {
                        f.F(["params"], e)
                    });
                    b.V.F(["params"], ca(S("1"), e))
                }
            }),
            Fq = {
                hk: zc(/[/&=?#]/)
            },
            Zm = pa("go.in", function(a, c, b, d) {
                var e;
                void 0 === b && (b = "goal");
                return e = {}, e.reachGoal = function(f, g, h, l) {
                    var n, x, I;
                    if (!f || Fq[b] && Fq[b](f)) return null;
                    var P = g,
                        T = h || sa;
                    Da(g) && (T = g, P = void 0, l = h);
                    var ba = Rd(a, c, "gr", (n = {}, n.id = c.id, n.goal = f, n), P),
                        ka = "goal" === b;
                    g = fc(a, "g", c);
                    n = Ul(a, c, f, b);
                    h = n[0];
                    n = n[1];
                    g = g({
                        L: {
                            O: P
                        },
                        H: Hc((x = {}, x.ar = 1, x)),
                        G: (I = {}, I["page-url"] = h, I["page-ref"] = n, I)
                    }, c).then(function() {
                        var Ka, Ua;
                        ka && ba();
                        fe(a, (Ka = {}, Ka.counterKey = W(c), Ka.name = "event", Ka.data = (Ua = {}, Ua.schema = b, Ua.name = f, Ua.params = P, Ua), Ka));
                        d && d()
                    });
                    return ae(a, "g.s", g, T, l)
                }, e
            }),
            Tt = pa("guid.int",
                function(a, c) {
                    var b;
                    return b = {}, b.getClientID = function(d) {
                        var e = xd(a, c);
                        d && Y(a, d, null, e);
                        return e
                    }, b
                }),
            pq, Ut = pa("th.e", function(a, c) {
                function b() {
                    g || (l = za(a, "onhashchange") ? Qb(a).F(a, ["hashchange"], h) : dp(a, h))
                }
                var d, e = fc(a, "t", c),
                    f = D(a, W(c)),
                    g = !1,
                    h = va(a, "h.h.ch", Ea(ep, null, a, c, e)),
                    l = sa;
                c.Pe && (b(), g = !0);
                e = va(a, "tr.hs.h", function(n) {
                    var x;
                    n ? b() : l();
                    g = !!n;
                    f((x = {}, x.trackHash = g, x))
                });
                return d = {}, d.trackHash = e, d.u = l, d
            }),
            Vt = tb(function(a, c) {
                Ta(c) ? a.push(c) : ia(ca(Za, vb("push", a)), c)
            }),
            Tl = Ya("retryReqs",
                function(a) {
                    var c = pd(a),
                        b = c.C("retryReqs", {}),
                        d = Jb(a)(nb);
                    ia(function(e) {
                        var f = e[0];
                        e = e[1];
                        (!e || !e.time || e.time + 864E5 < d) && delete b[f]
                    }, $b(b));
                    c.D("retryReqs", b);
                    return b
                }, !0),
            Pi = ca(Je, wc(0)),
            Gq = Vb(Pi),
            Wt = [Gq("watch"), Gq("clmap")],
            Xt = pa("g.r", function(a) {
                var c = Jb(a),
                    b = Tl(a),
                    d = c(nb),
                    e = vd(a);
                return Te(function(f, g) {
                    var h = g[0],
                        l = g[1];
                    l && Oc(vc(l.resource), Wt) && !l.d && l.ghid && l.ghid !== e && l.time && 500 < d - l.time && l.time + 864E5 > d && 2 >= l.browserInfo.rqnl && (l.d = 1, h = {
                        protocol: l.protocol,
                        host: l.host,
                        ya: l.resource,
                        Hg: l.postParams,
                        O: l.params,
                        pg: l.browserInfo,
                        gk: l.ghid,
                        time: l.time,
                        tb: Nc(h),
                        cf: l.counterId,
                        $: l.counterType
                    }, l.telemetry && (h.Ba = l.telemetry), f.push(h));
                    return f
                }, [], $b(b))
            }),
            Yt = pa("nb.p", function(a, c) {
                function b(Ka) {
                    n() || (Ka = "number" === typeof Ka ? Ka : 15E3, ka = vo(a, d(!1), Ka), x())
                }

                function d(Ka) {
                    return function(Ua) {
                        var Wa, Tb, Bc;
                        void 0 === Ua && (Ua = (Wa = {}, Wa.ctx = {}, Wa.callback = sa, Wa));
                        if (Ka || !T && !l.vc) {
                            T = !0;
                            x();
                            ka && ka();
                            var ah = I(nb);
                            Wa = (Nc(l.C("lastHit")) || 0) < ah - 18E5;
                            var No = .1 > Math.random();
                            l.D("lastHit", ah);
                            ah = Hc((Tb = {}, Tb.nb = 1, Tb.cl = ba, Tb.ar = 1, Tb));
                            Tb = Vl(c);
                            Tb = {
                                G: (Bc = {}, Bc["page-url"] = Tb.url || bb(a).href, Bc),
                                H: ah,
                                L: {
                                    force: Ka
                                }
                            };
                            Bc = Th(a, W(c)).warn;
                            !Ua.callback && Ua.ctx && Bc("nbnc");
                            (Bc = Ka || Wa || No) || (Bc = a.location.href, Wa = a.document.referrer, Bc = !(Bc && Wa ? Qc(Bc) === Qc(Wa) : !Bc && !Wa));
                            if (Bc) return Bc = g(Tb, c), ae(a, "l.o.l", Bc, Ua.callback, Ua.ctx)
                        }
                        return null
                    }
                }
                var e, f, g = fc(a, "n", c),
                    h = W(c),
                    l = zk(a, c.id),
                    n = aa(aa(h, sn(a)), ca(Va, S("accurateTrackBounce"))),
                    x = aa((e = {}, e.accurateTrackBounce = !0, e), D(a, h)),
                    I = Jb(a),
                    P = I(nb),
                    T = !1,
                    ba = 0,
                    ka;
                Ib(c, function(Ka) {
                    ba = Ka.xg - P
                });
                c.Gd && b(c.Gd);
                e = (f = {}, f.notBounce = d(!0), f.u = ka, f);
                e.accurateTrackBounce = b;
                return e
            }),
            Ws = tb(vf)("(ym-disable-clickmap|ym-clickmap-ignore)"),
            Zt = pa("clm.p", function(a, c) {
                if (pm(a)) return sa;
                var b = fc(a, "m", c),
                    d = W(c),
                    e = Jb(a),
                    f = e(nb),
                    g = aa(aa(d, sn(a)), ca(Va, S("clickmap"))),
                    h, l = null;
                d = va(a, "clm.p.c", function(n) {
                    var x = g();
                    if (x) {
                        var I = K(a),
                            P = I.C("cls", {
                                Kd: 0,
                                x: 0,
                                y: 0
                            });
                        I.D("cls", {
                            Kd: P.Kd + 1,
                            x: P.x + n.clientX,
                            y: P.y + n.clientY
                        });
                        I = "object" === typeof x ? x : {};
                        P = I.filter;
                        x = I.isTrackHash ||
                            !1;
                        var T = qa(function(ka) {
                            return ("" + ka).toUpperCase()
                        }, I.ignoreTags || []);
                        db(h) && (h = I.quota || null);
                        var ba = !!I.quota;
                        n = {
                            element: kd(a, n),
                            position: wd(a, n),
                            button: Eb(n),
                            time: e(nb)
                        };
                        I = bb(a).href;
                        if (lj(a, n, l, T, P)) {
                            if (ba) {
                                if (!h) return;
                                --h
                            }
                            T = oj(a, n.element);
                            P = T[0];
                            T = T[1];
                            ba = Rb(a, n.element);
                            P = ["rn", nc(a), "x", Math.floor(65535 * (n.position.x - ba.left) / (P || 1)), "y", Math.floor(65535 * (n.position.y - ba.top) / (T || 1)), "t", Math.floor((n.time - f) / 100), "p", Kh(a, n.element), "X", n.position.x, "Y", n.position.y];
                            P = Ha(":", P);
                            x && (P +=
                                ":wh:1");
                            ni(a, I, P, b, c);
                            l = n
                        }
                    }
                });
                return Qb(a).F(F(a, "document"), ["click"], d)
            }),
            $t = pa("trigger.in", function(a, c) {
                c.Jh && oc(a, ra([a, "yacounter" + c.id + "inited"], ol), "t.i")
            }),
            au = pa("c.m.p", function(a, c) {
                var b, d = W(c);
                return b = {}, b.clickmap = aa(D(a, d), ob), b
            }),
            Us = aa("form", Ad),
            Vs = V(ca(Jd, Vb(Ib)(S("settings.form_goals"))), Jd),
            bu = pa("s.f.i", function(a, c) {
                var b, d = [],
                    e = [],
                    f = Qb(a);
                d.push(f.F(a, ["click"], va(a, "s.f.c", ra([a, c, e], La))));
                d.push(f.F(a, ["submit"], va(a, "s.f.e", function(g) {
                    var h = F(g, "target");
                    g = F(g, "isTrusted");
                    Yj(!0, a, c, e, h, g)
                })));
                Ug(a, c, "fgi", (b = {}, b.id = c.id, b));
                return ra([t, d], ia)
            }),
            cu = pa("s.f.i", function(a, c) {
                return Ib(c, function(b) {
                    var d;
                    if (F(b, "settings.button_goals")) return b = Qb(a).F(a, ["click"], va(a, "c.t.c", ca(ra([a, c], cb(a, c, "", mi))))), Rd(a, c, "gbi", (d = {}, d.id = c.id, d))(), b
                })
            }),
            bh, fm, Oo, Dk, Of, jo = (bh = {}, bh.transaction_id = "id", bh.item_brand = "brand", bh.index = "position", bh.item_variant = "variant", bh.value = "revenue", bh.item_category = "category", bh.item_list_name = "list", bh),
            Sh = (fm = {}, fm.item_id = "id", fm.item_name =
                "name", fm.promotion_name = "coupon", fm),
            Rs = (Oo = {}, Oo.promotion_name = "name", Oo),
            Hq = (Dk = {}, Dk.promotion_name = "name", Dk.promotion_id = "id", Dk.item_id = "product_id", Dk.item_name = "product_name", Dk),
            Ps = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "),
            Qs = (Of = {}, Of.view_item = {
                event: "detail",
                xa: Sh,
                Ea: "products"
            }, Of.add_to_cart = {
                event: "add",
                xa: Sh,
                Ea: "products"
            }, Of.remove_from_cart = {
                event: "remove",
                xa: Sh,
                Ea: "products"
            }, Of.begin_checkout = {
                event: "checkout",
                xa: Sh,
                Ea: "products"
            }, Of.purchase = {
                event: "purchase",
                xa: Sh,
                Ea: "products"
            }, Of.view_item_list = {
                event: "impressions",
                xa: Sh
            }, Of.select_item = {
                event: "click",
                Ea: "products",
                xa: Sh
            }, Of.view_promotion = {
                event: "promoView",
                Ea: "promotions",
                xa: Hq
            }, Of.select_promotion = {
                event: "promoClick",
                Ea: "promotions",
                xa: Hq
            }, Of),
            Yp = pa("dl.w", function(a, c, b) {
                function d() {
                    var g = F(a, c);
                    (e = Ja(g) && Ld(a, g, b)) || (f = eb(a, d, 1E3, "ec.dl"))
                }
                var e, f = 0;
                d();
                return function() {
                    return la(a, f)
                }
            }),
            du = pa("p.e", function(a, c) {
                var b = Wb(a, c);
                if (b) {
                    var d = K(a);
                    b = b.params;
                    var e = va(a, "h.ee", ra([a, W(c), b], Le));
                    return c.fd ? (d.D("ecs", 0), of (a, c.fd, e)) : Ib(c, function(f) {
                        if ((f = F(f, "settings.ecommerce")) && Ta(f)) return d.D("ecs", 1), of (a, f, e)
                    })
                }
            }),
            eu = V(function(a) {
                a = bb(a);
                a = ld(a.search.substring(1));
                return {
                    id: Nc(a["_ym_status-check"] || ""),
                    lang: a._ym_lang || "ru"
                }
            }),
            fu = pa("suid.int", function(a, c) {
                var b;
                return b = {}, b.setUserID = function(d, e, f) {
                    if (Ta(d) || Gd(a, d)) {
                        var g = Wb(a, c);
                        d = Ra(["__ym", "user_id", d]);
                        g.params(d, e || sa, f)
                    } else Th(a, W(c)).error("wuid")
                }, b
            }),
            gu = pa("up.int",
                function(a, c) {
                    var b;
                    return b = {}, b.userParams = va(a, "up.c", function(d, e, f) {
                        var g, h = Wb(a, c),
                            l = Th(a, W(c)).warn;
                        h ? wb(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || sa, f)) : l("wup") : l("nci")
                    }), b
                }),
            hu = /[\*\.\?\(\)]/g,
            iu = V(function(a, c, b) {
                var d;
                try {
                    var e = b.replace("\\s", " ").replace(hu, "");
                    Th(a, "").warn("nnw", (d = {}, d.name = e, d))
                } catch (f) {}
            }, Jd),
            ju = pa("r.nn", function(a) {
                gn(a) && Ld(a, zm, function(c) {
                    c.Aa.F(function(b) {
                        iu(a, b[1], b[0]);
                        zm.splice(100)
                    })
                })
            }),
            ku = pa("e.a.p", function(a, c) {
                var b, d = Wb(a, c);
                d = ra([ca(Za, vc(!0)),
                    ac(qa(aa(d, F), ["clickmap", "trackLinks", "accurateTrackBounce"]))
                ], qa);
                c.Vi && d();
                return b = {}, b.enableAll = d, b
            }),
            lu = V(ta, W),
            mu = pa("fpi", function(a) {
                var c = vh(a);
                if (c && !a.document.hidden) {
                    var b = K(a).ta;
                    b("fpe", 1);
                    var d = Qb(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function() {
                        a.document.hidden && (b("fht", c.now()), d())
                    })
                }
            }),
            Iq = V(function(a) {
                a = F(a, "console");
                var c = F(a, "log");
                c = Zk("log", c) ? Ea(c, a) : sa;
                var b = F(a, "warn");
                b = Zk("warn", b) ? Ea(b, a) : c;
                var d = F(a, "error");
                a = Zk("error", d) ? Ea(d, a) : c;
                return {
                    log: c,
                    error: a,
                    warn: b
                }
            }),
            nu = aa("add", Rh),
            ou = aa("remove", Rh),
            pu = aa("detail", Rh),
            qu = aa("purchase", Rh),
            ru = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
            ao = V(function(a) {
                var c = Bo(a);
                a = c.Bc;
                if (!c.uc) return !1;
                c = vb("indexOf", a);
                c = Oc(ca(c, wc(-1), yh), ru);
                var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                    d = /YaBrowser\/[\d.]+/.test(a),
                    e = /Mobile/.test(a);
                return c || b || d && e || !/Safari/.test(a) && e
            }),
            Ur = V(function(a) {
                var c = Ue(a);
                return c ? od(c, "YangoEats") ||
                    Tk(a) : !1
            }),
            Os = /([0-9\\.]+) Safari/,
            su = /\sYptp\/\d\.(\d+)\s/,
            Jq = V(function(a) {
                var c;
                a: {
                    if ((c = Ue(a)) && (c = su.exec(c)) && 1 < c.length) {
                        c = Nc(c[1]);
                        break a
                    }
                    c = 0
                }
                return 50 <= c && 99 >= c || Tj(a, 79) ? !1 : !k(a) || ao(a)
            }),
            Kq = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
            tu = V(function(a) {
                a = Ge(a)("canvas");
                var c = F(a, "getContext");
                if (!c) return null;
                try {
                    var b = Ea(c, a)("2d");
                    b.font = "72px mmmmmmmmmmlli";
                    var d = b.measureText("mmmmmmmmmmlli").width;
                    return function(e) {
                        b.font = "72px " + e;
                        return b.measureText("mmmmmmmmmmlli").width === d
                    }
                } catch (e) {
                    return null
                }
            }),
            Lq = Db(String.prototype.repeat, "repeat"),
            Qp = Lq ? function(a, c) {
                return Lq.call(a, c)
            } : jj,
            Op = aa(!0, function(a, c, b, d) {
                b = c.length && (b - d.length) / c.length;
                if (0 >= b) return d;
                c = Qp(c, b);
                return a ? c + d : d + c
            }),
            ln = [2277735313, 289559509],
            mn = [1291169091, 658871167],
            uu = pa("p.cd", function(a) {
                if (qm(a) || Em(a)) {
                    var c = pd(a);
                    if (Ma(c.C("jn"))) {
                        c.D("jn", !1);
                        var b = a.chrome || sj(a) ? function() {} : /./;
                        a = Iq(a);
                        b.toString = function() {
                            c.D("jn", !0);
                            return "Yandex.Metrika counter is initialized"
                        };
                        a.log("%c%s", "color: inherit", b)
                    }
                }
            }),
            vu = V(function(a) {
                a = F(a, "navigator.plugins");
                return !!(a && ea(a) && Oc(ca(S("name"), zc(/Chrome PDF Viewer/)), a))
            }),
            sf = tb(function(a, c) {
                return K(c).C(a, null)
            }),
            Ns = {
                "*": "+",
                "-": "/",
                fk: "=",
                "+": "*",
                "/": "-",
                "=": "_"
            },
            io = V(function(a) {
                return Yk(/tizen/i,
                    a)
            }),
            wu = V(function(a) {
                return Yk(/webos|web0s/i, a)
            }),
            xu = V(function(a) {
                return Da(F(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
            }),
            yu = V(aa("panoramaId", Sb)),
            zu = V(function(a) {
                return Sb("pubcid.org", a) || Sb("_pubCommonId", a)
            }),
            Au = V(aa("_sharedid", Sb)),
            Bu = V(function(a, c) {
                if (c.Ka) return null;
                var b = Vi(a, "").C("_ga");
                return b && Od(Ig(b))
            }, ca(Jd, W)),
            Ls = [
                ["domainLookupEnd", "domainLookupStart"],
                ["connectEnd", "connectStart"],
                ["responseStart", "requestStart"],
                ["responseEnd", "responseStart"],
                ["fetchStart", "navigationStart"],
                ["redirectEnd", "redirectStart"],
                [function(a, c) {
                    return F(c, "redirectCount") || F(a, "navigation.redirectCount")
                }],
                ["domInteractive", "domLoading"],
                ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                ["domComplete", "navigationStart"],
                ["loadEventStart", "navigationStart"],
                ["loadEventEnd", "loadEventStart"],
                ["domContentLoadedEventStart", "navigationStart"]
            ],
            tf, Ks = [
                ["domainLookupEnd", "domainLookupStart"],
                ["connectEnd", "connectStart"],
                ["responseStart", "requestStart"],
                ["responseEnd", "responseStart"],
                ["fetchStart"],
                ["redirectEnd", "redirectStart"],
                ["redirectCount"],
                ["domInteractive", "responseEnd"],
                ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                ["domComplete"],
                ["loadEventStart"],
                ["loadEventEnd", "loadEventStart"],
                ["domContentLoadedEventStart"]
            ],
            Xp = (tf = {}, tf.responseEnd = 1, tf.domInteractive = 1, tf.domContentLoadedEventStart = 1, tf.domContentLoadedEventEnd = 1, tf.domComplete = 1, tf.loadEventStart = 1, tf.loadEventEnd = 1, tf.unloadEventStart = 1, tf.unloadEventEnd = 1, tf.secureConnectionStart = 1, tf),
            Ms = V(Ca),
            Is = V(ta),
            Js = V(function(a) {
                var c =
                    F(a, "webkitRequestFileSystem");
                if (Da(c) && !qm(a)) return (new wa(Ea(c, a, 0, 0))).then(function() {
                    var d = F(a, "navigator.storage") || {};
                    return d.estimate ? d.estimate() : {}
                }).then(function(d) {
                    return (d = d.quota) && 12E7 > d ? !0 : !1
                })["catch"](aa(!0, Za));
                if (Xk(a)) return c = F(a, "navigator.serviceWorker"), wa.resolve(db(c));
                c = F(a, "openDatabase");
                if (sj(a) && Da(c)) {
                    var b = !1;
                    try {
                        c(null, null, null, null)
                    } catch (d) {
                        b = !0
                    }
                    return wa.resolve(b)
                }
                return wa.resolve(!F(a, "indexedDB") && (F(a, "PointerEvent") || F(a, "MSPointerEvent")))
            }),
            Cu = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
            Du = V(function(a, c) {
                var b = qk(a),
                    d = bb(a).search.match(Cu);
                return d && 2 <= d.length ? (d = d[2], c.Ka || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
            }),
            Bs = [
                [
                    ["'(-$&$&$'", 30102, 0],
                    ["'(-$&$&$'", 29009, 0]
                ],
                [
                    ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                    ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                ]
            ],
            Cs = [
                [
                    ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                ],
                [
                    ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                ]
            ],
            Wp = {
                G: {
                    t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                }
            },
            As = {
                He: 60,
                error: 15
            },
            zs = {
                He: 5,
                error: 1
            },
            Vp = {
                id: 42822899,
                $: "0"
            },
            Eu = pa("pa.plgn", function(a, c) {
                var b = Tm(a, c);
                b && b.V.F(["pluginInfo"], va(a,
                    "c.plgn",
                    function() {
                        var d = K(a);
                        d.D("cmc", d.C("cmc", 0) + 1);
                        return tg(c)
                    }))
            }),
            rg, Pe, Qr = (rg = {}, rg.am = "com.am", rg.tr = "com.tr", rg.ge = "com.ge", rg.il = "co.il", rg["\u0440\u0444"] = "ru", rg["xn--p1ai"] = "ru", rg["\u0431\u0435\u043b"] = "by", rg["xn--90ais"] = "by", rg),
            Mq = {
                "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
            },
            Rr = (Pe = {}, Pe.ka = "ge", Pe.ro = "md", Pe.tg = "tj", Pe.tk = "tm", Pe.et = "ee", Pe.hy = "com.am", Pe.he = "co.li", Pe.ky = "kg", Pe.be =
                "by", Pe.tr = "com.tr", Pe.kk = "kz", Pe),
            Nq = /^https?:\/\//,
            Fu = {
                1882689622: 1,
                2318205080: 1,
                3115871109: 1,
                3604875100: 1,
                339366994: 1,
                849340123: 1,
                3735661796: 1,
                3082499531: 1,
                2343947156: 1,
                655012937: 1,
                3724710748: 1,
                3364370932: 1,
                1996539654: 1,
                2065498185: 1,
                823651274: 1,
                12282461: 1,
                1555719328: 1,
                1417229093: 1,
                138396985: 1,
                3015043526: 1
            },
            Oq = V(function() {
                return Oa(function(a, c) {
                    var b = Re(c + "/tag.js");
                    a[b] = 1;
                    return a
                }, {}, ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
            }),
            Gu = V(function(a) {
                a =
                    vh(a);
                if (!a || !Da(a.getEntriesByType)) return null;
                a = a.getEntriesByType("resource");
                var c = Oq();
                return (a = cd(function(b) {
                    b = b.name.replace(Nq, "").split("?")[0];
                    b = Re(b);
                    return c[b]
                }, a)) ? sb(a.transferSize) : null
            }),
            Gs = "ar:1:pv:1:v:" + Q.lc + ":vf:" + Oi.version,
            Hs = Q.Cb + "//" + E + "/watch/" + Q.Ai,
            Pq = {},
            Hu = pa("exps.int", function(a, c) {
                var b;
                return b = {}, b.experiments = function(d, e, f) {
                    var g, h;
                    if (Ta(d) && !(0 >= d.length)) {
                        var l = fc(a, "e", c),
                            n = Vl(c).url;
                        d = l({
                            H: Hc((g = {}, g.ex = 1, g.ar = 1, g)),
                            G: (h = {}, h["page-url"] = n || bb(a).href, h.exp =
                                d, h)
                        }, c);
                        return ae(a, "exps.s", d, e || sa, f)
                    }
                }, b
            }),
            $o = [],
            Iu = pa("p.fh", function(a, c) {
                var b, d;
                void 0 === c && (c = !0);
                var e = pd(a),
                    f = Jb(a),
                    g = e.C("wasSynced"),
                    h = {
                        id: 3,
                        $: "0"
                    };
                return c && g && g.time + 864E5 > f(nb) ? wa.resolve(g) : fc(a, "f", h)({
                    H: Hc((b = {}, b.pv = 1, b)),
                    G: (d = {}, d["page-url"] = bb(a).href, d["page-ref"] = a.document.referrer, d)
                }, h).then(function(l) {
                    var n;
                    l = (n = {}, n.time = f(nb), n.params = F(l, "settings"), n.bkParams = F(l, "userData"), n);
                    e.D("wasSynced", l);
                    return l
                })["catch"](va(a, "f.h"))
            }),
            Ju = tb(function(a, c) {
                0 === parseFloat(F(c,
                    "settings.c_recp")) && (a.Ad.D("ymoo" + a.wa, a.bg(Md)), a.xd && a.xd.destruct && a.xd.destruct())
            }),
            Kl = ca(S("settings.pcs"), wc("1")),
            Qq = E.split("."),
            Ku = Qq.pop(),
            Ap = Ha(".", Qq),
            Pr = V(function(a) {
                a = bb(a).hostname.split(".");
                return a[a.length - 1]
            }),
            qr = V(function(a) {
                return -1 !== bb(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
            }),
            Lu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech|white-label\.yango-tech\.com|al-sadhan\.com|spar\.sa)$/,
            Sm = V(function(a) {
                a = bb(a).hostname;
                var c = !1;
                a && (c = -1 !== a.search(Lu));
                return c
            }),
            Mu = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
            Ds = V(function(a) {
                a = bb(a).hostname;
                var c = !1;
                a && (c = -1 !== a.search(Mu));
                return c
            }),
            Hp = Q.Cb + "//" + E + "/metrika",
            Vm = Hp + "/metrika_match.html",
            tn, Fs = (tn = {}, tn.s = "p", tn["8"] = "i", tn),
            Es = Ya("csp", function(a, c) {
                return fc(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
            }),
            Up = function() {
                function a(c,
                    b) {
                    this.l = c;
                    this.type = b
                }
                a.isEnabled = function(c) {
                    return !!c.JSON
                };
                a.prototype.Da = function(c) {
                    return $f(ma(this.l, c))
                };
                a.prototype.Bb = function(c) {
                    var b = c.data;
                    "string" !== typeof b && (b = ma(this.l, c.data));
                    return b
                };
                a.prototype.qb = function(c) {
                    return encodeURIComponent(c).length
                };
                a.prototype.wd = function(c, b) {
                    for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                    return e
                };
                return a
            }(),
            ys = V(function(a) {
                function c(f, g, h, l) {
                    d[0] = g;
                    h[l] = e[3];
                    h[l + 1] = e[2];
                    h[l + 2] = e[1];
                    h[l + 3] = e[0]
                }

                function b(f,
                    g, h, l) {
                    d[0] = g;
                    h[l] = e[0];
                    h[l + 1] = e[1];
                    h[l + 2] = e[2];
                    h[l + 3] = e[3]
                }
                if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return le;
                var d = new Float32Array([-0]),
                    e = new Uint8Array(d.buffer);
                return 128 === e[3] ? b : c
            }),
            xs = ya(!1),
            ws = ya(!0),
            Bb, qj, Rq = (Bb = {}, Bb.mousemove = 0, Bb.mouseup = 1, Bb.mousedown = 2, Bb.click = 3, Bb.scroll = 4, Bb.windowblur = 5, Bb.windowfocus = 6, Bb.focus = 7, Bb.blur = 8, Bb.eof = 9, Bb.selection = 10, Bb.change = 11, Bb.input = 12, Bb.touchmove = 13, Bb.touchstart = 14, Bb.touchend = 15, Bb.touchcancel = 16, Bb.touchforcechange =
                17, Bb.zoom = 18, Bb.resize = 19, Bb.keystroke = 20, Bb.deviceRotation = 21, Bb.fatalError = 22, Bb.hashchange = 23, Bb.stylechange = 24, Bb.articleInfo = 25, Bb.publishersHeader = 26, Bb.pageData = 27, Bb.mutationAdd = 28, Bb.mutationRemove = 29, Bb.mutationTextChange = 30, Bb.mutationAttributesChange = 31, Bb),
            Sq = (qj = {}, qj.page = 0, qj.event = 1, qj.mutation = 2, qj.publishers = 3, qj.activity = 4, qj),
            Tp = function() {
                function a(c, b) {
                    var d, e, f = this;
                    this.isSync = !1;
                    this.Nb = [];
                    this.Uh = (d = {}, d.ad = "mutationAdd", d.re = "mutationRemove", d.tc = "mutationTextChange",
                        d.ac = "mutationAttributesChange", d.page = "pageData", d);
                    this.Rh = (e = {}, e.ad = "addedNodesMutation", e.re = "removedNodesMutation", e.tc = "textChangeMutation", e.ac = "attributesChangeMutation", e.touchmove = "touchEvent", e.touchstart = "touchEvent", e.touchend = "touchEvent", e.touchforcechange = "touchEvent", e.touchcancel = "touchEvent", e.resize = "resizeEvent", e.scroll = "scrollEvent", e.change = "changeEvent", e.mousemove = "mouseEvent", e.mousedown = "mouseEvent", e.mouseup = "mouseEvent", e.click = "mouseEvent", e.focus = "focusEvent", e.blur =
                        "focusEvent", e.deviceRotation = "deviceRotationEvent", e.zoom = "zoomEvent", e.keystroke = "keystrokesEvent", e.selection = "selectionEvent", e.stylechange = "styleChangeEvent", e.fatalError = "fatalErrorEvent", e.pageData = "page", e);
                    this.$h = function(g) {
                        var h = g.type;
                        return g.event || "publishersHeader" !== h && "articleInfo" !== h ? {
                            type: Sq[h],
                            event: Rq[f.Uh[g.event] || g.event]
                        } : {
                            type: Sq.publishers,
                            event: Rq[h]
                        }
                    };
                    this.Kf = function(g) {
                        var h = !db(g.partNum),
                            l = f.$h(g);
                        l = {
                            stamp: g.stamp,
                            type: l.type,
                            event: l.event,
                            frameId: g.frameId,
                            chunk: h ?
                                g.data : void 0,
                            partNum: g.partNum,
                            end: g.end
                        };
                        !h && g.data && (h = f.Rh[g.event] || g.event || g.type) && (l[h] = g.data);
                        return l
                    };
                    this.l = c;
                    this.type = b
                }
                a.prototype.Da = function(c, b) {
                    var d = this;
                    void 0 === b && (b = !1);
                    var e = Gc(c, this.Kf),
                        f = this.isSync || b ? Infinity : 10;
                    e = sh(this.l, e, f);
                    var g = [e];
                    this.Nb.push(e);
                    return e(Fo(function(h) {
                        h = af(d.l, bf, {
                            ji: h
                        });
                        h = sh(d.l, h, f, Tc);
                        g.push(h);
                        d.Nb.push(h);
                        return h
                    }))(Fo(function(h) {
                        h = Ce(d.l, h.slice(-4));
                        h = sh(d.l, h, f, Tc);
                        g.push(h);
                        d.Nb.push(h);
                        return h
                    }))(wq(function(h) {
                        h = h[h.length - 1];
                        ia(function(l) {
                            l = ll(d.l)(l, d.Nb);
                            d.Nb.splice(l, 1)
                        }, g);
                        return h
                    }))
                };
                a.prototype.Bb = function(c) {
                    return af(this.l, sc, this.Kf(c))(ql(sa))
                };
                a.prototype.qb = function(c) {
                    return c[0]
                };
                a.prototype.wd = function(c, b) {
                    for (var d = Ce(this.l, c)(ql(sa)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
                    return f
                };
                a.isEnabled = function(c) {
                    var b = gn(c),
                        d = !1;
                    try {
                        d = (d = 2 === (new c.Blob(["\u00e4"])).size) && 2 === (new c.Blob([new c.Uint8Array([1, 2])])).size
                    } catch (e) {}
                    return !b && d && !(!c.Uint8Array || !F(c, "Uint8Array.prototype.slice"))
                };
                return a
            }(),
            Tq = Hb("wv"),
            Uq = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
            Nu = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
            Ou = function() {
                function a(c, b, d, e, f) {
                    var g = this;
                    this.Jb = !1;
                    this.meta = {};
                    this.scroll = {
                        x: 0,
                        y: 0
                    };
                    this.involvedTime = this.ke = 0;
                    this.Nc = this.ve = "";
                    this.ca = [];
                    this.Qc = this.lb = 0;
                    this.Xa = {
                        h: 0,
                        w: 0
                    };
                    this.buffer = [];
                    this.ng = Nu;
                    this.flush = function() {
                        g.Qc = eb(g.l,
                            g.flush, 2500);
                        var h = g.Gc();
                        if (g.buffer.length || h) {
                            var l = fg(g.buffer);
                            h && l.push(h);
                            g.ve = g.Nc;
                            g.oa.Da(l)(Rc(va(g.l, "p.b.st"), function(n) {
                                n && g.Ib(n)
                            }))
                        }
                    };
                    this.Ib = e;
                    this.oa = d;
                    this.vb = Ea(this.vb, this);
                    this.Gc = Ea(this.Gc, this);
                    this.flush = Ea(this.flush, this);
                    this.l = c;
                    this.wa = f;
                    this.Eb = b;
                    this.Mc = "pai" + b.id;
                    this.Fb();
                    this.Rd = Qb(this.l);
                    this.time = Jb(this.l);
                    this.Ke();
                    this.Ic = K(this.l);
                    this.Uc = null
                }
                a.prototype.start = function() {
                    this.Qc = eb(this.l, this.flush, 2500);
                    if (!this.Jb) {
                        this.Og();
                        var c = this.Ic.C(this.Mc, []),
                            b = !c.length;
                        c.push(Ea(this.Dg, this));
                        this.Ic.ta(this.Mc, c);
                        b && this.ze();
                        this.Uc = Qb(this.l).F(this.l, ["click"], Ea(this.Mg, this));
                        this.vb({
                            type: "page",
                            target: this.l
                        })
                    }
                };
                a.prototype.stop = function() {
                    this.Tg();
                    this.Jb = !0;
                    this.flush();
                    la(this.l, this.Qc)
                };
                a.prototype.fe = function(c) {
                    return Ad("html", this.l, c) !== this.l.document.documentElement
                };
                a.prototype.ze = function() {
                    var c = this;
                    va(this.l, "p.ic" + this.Eb.id, function() {
                        if (!c.Jb) {
                            var b = c.Ic.C(c.Mc),
                                d = c.Eb.wg();
                            ia(function(e) {
                                var f = qa(function(g) {
                                    return na({},
                                        g)
                                }, d);
                                Da(e) && e(f)
                            }, b);
                            c.lb = eb(c.l, Ea(c.ze, c), 1E3, "p")
                        }
                    })()
                };
                a.prototype.Dg = function(c) {
                    this.Jb || (this.Ug(c), this.Vg(), this.qg())
                };
                a.prototype.sg = function(c, b) {
                    return (c.Pc || 0) <= (b.Pc || 0) ? b : c
                };
                a.prototype.Mg = function(c) {
                    if (this.ca.length) {
                        c = kl(c);
                        var b = bb(this.l).hostname,
                            d;
                        if (d = c) d = rm(c.hostname) === rm(b);
                        d && (c = Oa(this.sg, this.ca[0], this.ca).id, b = vd(this.l), zk(this.l, this.wa.split(":")[0]).D("pai", c + "-" + b))
                    }
                };
                a.prototype.vb = function(c) {
                    var b = this;
                    va(this.l, "p.ec." + this.Eb.id, function() {
                        var d, e;
                        try {
                            var f =
                                c.type;
                            var g = c.target
                        } catch (I) {
                            return
                        }
                        var h = "page" === f;
                        if ("scroll" === f || h) {
                            var l = [b.l, b.l.document, b.l.document.documentElement, ye(b.l)];
                            Ia(g, l) && b.Fb()
                        }("resize" === f || h) && b.Ke();
                        f = b.time(nb);
                        var n = Math.min(f - b.ke, 5E3);
                        b.involvedTime += Math.round(n);
                        b.ke = f;
                        if (b.meta && b.scroll && b.Xa) {
                            var x = b.Xa.h * b.Xa.w;
                            b.ca = qa(function(I) {
                                var P = na({}, I),
                                    T = b.meta[P.id],
                                    ba = $c(I.pb);
                                if (!T || b.fe(P.element) || !ba) return P;
                                I = b.l.Math;
                                T = I.max((b.scroll.y + b.Xa.h - T.y) / T.height, 0);
                                var ka = ba.height * ba.width;
                                ba = jk(b.l, ba, b.Xa);
                                P.Pc = ba / x;
                                P.visibility = ba / ka;
                                if (.9 <= P.visibility || .1 <= P.Pc) P.involvedTime += n;
                                P.maxScrolled = I.round(1E4 * T) / 1E4;
                                return P
                            }, b.ca);
                            fe(b.l, (d = {}, d.name = "publishers", d.counterKey = b.wa, d.data = (e = {}, e.involvedTime = b.involvedTime, e.contentItems = qa(function(I) {
                                var P;
                                return na((P = {}, P.contentElement = I.pb, P), I)
                            }, b.ca), e), d))
                        }
                    })()
                };
                a.prototype.Ug = function(c) {
                    var b = qa(function(d) {
                        return d.id
                    }, this.ca);
                    this.ca = this.ca.concat(fb(function(d) {
                        return !Ia(d.id, b)
                    }, c))
                };
                a.prototype.Ke = function() {
                    var c = jf(this.l) || me(this.l);
                    this.Xa = {
                        w: c[0],
                        h: c[1]
                    }
                };
                a.prototype.Vg = function() {
                    var c = this;
                    va(this.l, "p.um." + this.Eb.id, function() {
                        var b = [];
                        c.Fb();
                        c.meta = Te(function(d, e) {
                            var f;
                            if (c.fe(e.element)) return b.push(e), delete d[e.id], d;
                            var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                            e.pb && (f = $c(e.pb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                            d[e.id] = g;
                            return d
                        }, {}, c.ca);
                        ia(function(d) {
                            d = ll(c.l)(d, c.ca);
                            c.ca.splice(d, 1)
                        }, b)
                    })()
                };
                a.prototype.Gc = function() {
                    var c, b, d = qa(aa(this.meta, F), zb(this.meta));
                    return d.length && (this.Nc = ma(this.l, d), this.ve !== this.Nc) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null
                };
                a.prototype.qg = function() {
                    var c = this;
                    if (this.ca.length) {
                        var b = qa(function(d) {
                            var e, f = Oa(function(g, h) {
                                d[h] && (g[h] = d[h]);
                                return g
                            }, {}, c.ng);
                            d.Ee = !0;
                            return e = {}, e.type = "articleInfo",
                                e.stamp = f.stamp, e.data = f, e
                        }, fb(function(d) {
                            return !d.Ee
                        }, this.ca));
                        b.length && (this.buffer = this.buffer.concat(b), Mc(this.l, this.wa, ["pdf", b]))
                    }
                };
                a.prototype.Og = function() {
                    this.Rd.F(this.l, Uq, this.vb)
                };
                a.prototype.Tg = function() {
                    this.Uc && this.Uc();
                    this.Rd.Ia(this.l, Uq, this.vb)
                };
                a.prototype.Fb = function() {
                    this.scroll = {
                        x: this.l.pageXOffset || F(this.l, "document.documentElement.scrollLeft") || 0,
                        y: this.l.pageYOffset || F(this.l, "document.documentElement.scrollLeft") || 0
                    }
                };
                return a
            }(),
            gm, Po = (gm = {}, gm[1] = 500, gm[2] =
                500, gm[3] = 0, gm),
            Pu = ["topics", "rubric", "authors"],
            Qo = function() {
                function a(c, b) {
                    var d, e = this;
                    this.id = "a";
                    this.Xc = !1;
                    this.xb = {};
                    this.ub = {
                        "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                        Re: ["article"]
                    };
                    this.$c = (d = {}, d.Answer = 3, d.Review = 2, d);
                    this.Ud = V(function(f, g, h) {
                        var l;
                        Mc(e.l, e.wa, "pfi", (l = {}, l.field = f, l.itemField = g, l.value = h, l))
                    }, function(f, g, h) {
                        return "" + f + g + h
                    });
                    this.Wg = function(f) {
                        ia(function(g) {
                            f[g] && (f[g] = Oa(function(h, l) {
                                var n = l.name,
                                    x = l.position;
                                if (!n) return e.Ud(g,
                                    "name", n), h;
                                if ("string" === typeof x) {
                                    n = ok(x);
                                    if (null === n || e.l.isNaN(n)) return e.Ud(g, "position", x), h;
                                    l.position = n
                                }
                                h.push(l);
                                return h
                            }, [], f[g]))
                        }, Pu);
                        return f
                    };
                    this.ug = V(function(f, g) {
                        var h;
                        Mc(e.l, e.wa, ["pcs", g], (h = {}, h.chars = g.chars, h.limit = Po[g.type], h))
                    });
                    this.l = c;
                    this.root = Cf(c);
                    this.wa = b
                }
                a.prototype.La = function(c) {
                    return c.element
                };
                a.prototype.Xd = function(c, b) {
                    var d = this,
                        e;
                    va(this.l, "P.s." + b, function() {
                        e = d.xb[b].call(d, c)
                    })();
                    return e
                };
                a.prototype.Ig = function(c) {
                    var b = na({}, c);
                    this.Xc && !b.id &&
                        Ia(c.type, [3, 2]) && (c = Ha(", ", qa(S("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                    b.pageTitle || (b.pageTitle = this.Ag(b.pb));
                    b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.zg());
                    b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                    return b
                };
                a.prototype.Ha = function(c) {
                    var b = this,
                        d = {},
                        e = this.La(c);
                    if (!e) return null;
                    d.type = c.type;
                    ia(function(g) {
                        d[g] = b.Xd(c, g)
                    }, zb(this.xb));
                    var f = Jb(this.l);
                    d.stamp = f(Fj);
                    d.element = c.element;
                    d.pb = e;
                    d = this.Wg(this.Ig(d));
                    d.id = d.id ? Re(d.id) : 1;
                    d.update = function(g) {
                        return b.La(c) ? b.Xd(c, g) : void 0
                    };
                    return d
                };
                a.prototype.Ag = function(c) {
                    for (var b = 1; 5 >= b; b += 1) {
                        var d = td(Hd("h" + b, c));
                        if (d) return d
                    }
                };
                a.prototype.zg = function() {
                    var c = Hd('[rel="canonical"]', this.root);
                    if (c) return c.href
                };
                a.prototype.$d = function() {
                    return 1
                };
                a.prototype.Zb = function() {
                    return []
                };
                a.prototype.wg = function() {
                    var c = this,
                        b = this.Zb(),
                        d = 1;
                    return Te(function(e, f) {
                        var g = c.Ha({
                            element: f,
                            type: c.$d(f)
                        }) || [];
                        Ja(g) || (g = [g]);
                        g = Te(function(h, l) {
                            var n = h.values,
                                x = h.de;
                            l && l.chars > Po[l.type] && !Ia(l.id, x) ? (n.push(l), x.push(l.id)) : l && l.chars <= Po[l.type] && c.ug(l.id, l);
                            return {
                                values: n,
                                de: x
                            }
                        }, {
                            values: [],
                            de: qa(S("id"), e)
                        }, g).values;
                        return e.concat(qa(function(h) {
                            var l;
                            h = na((l = {
                                index: d,
                                Ee: !1
                            }, l.involvedTime = 0, l), h);
                            d += 1;
                            return h
                        }, g))
                    }, [], b)
                };
                return a
            }(),
            Vq = function(a) {
                function c() {
                    var b, d = null !== a && a.apply(this, arguments) || this;
                    d.id = "j";
                    d.Xc = !0;
                    d.gf = Ha(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                    d.xb = (b = {}, b.id = function(e) {
                        var f = e.data["@id"];
                        e = e.data.mainEntity || e.data.mainEntityOfPage;
                        !f && wb(e) && (f = e["@id"]);
                        return f
                    }, b.chars = function(e) {
                        var f = e.data;
                        return Ta(f.text) ? f.text.length : v(this.La(e)).length
                    }, b.authors = function(e) {
                        e = e.data;
                        var f = [];
                        f = f.concat(this.Fc(e, "author"));
                        f = f.concat(this.Fc(e.mainEntity, "author"));
                        return f.concat(this.Fc(e.mainEntityOfPage, "author"))
                    }, b.pageTitle = function(e) {
                        var f = e.data,
                            g = f.headline || "";
                        f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                        "" === g && (f.name ?
                            g = f.name : f.itemReviewed && (g = f.itemReviewed));
                        3 === e.type && wb(f.parentItem) && (g = f.parentItem.text);
                        return g
                    }, b.updateDate = function(e) {
                        return e.data.dateModified || ""
                    }, b.publicationDate = function(e) {
                        return e.data.datePublished || ""
                    }, b.pageUrlCanonical = function(e) {
                        return e.data.url
                    }, b.topics = function(e) {
                        return this.Fc(e.data, "about", ["name", "alternateName"])
                    }, b.rubric = function(e) {
                        var f = this,
                            g = this.La(e);
                        e = ac(qa(function(h) {
                            h = Ye(f.l, v(h));
                            if (wb(h) || Ja(h)) {
                                var l = f.uf(h);
                                if (l) return Oa(function(n, x) {
                                    return n ?
                                        n : wb(x) && "BreadcrumbList" === x["@type"] ? x : n
                                }, null, l);
                                if ("BreadcrumbList" === h["@type"]) return h
                            }
                            return null
                        }, [e.element].concat(id(this.gf, document.body === g ? document.documentElement : g))));
                        return e.length && (e = e[0].itemListElement, Ja(e)) ? ac(qa(function(h) {
                            return wb(h) && h.item && wb(h.item) && !f.l.isNaN(h.position) ? {
                                name: h.item.name || h.name,
                                position: h.position
                            } : null
                        }, e)) : []
                    }, b);
                    return d
                }
                ec(c, a);
                c.prototype.Fc = function(b, d, e) {
                    void 0 === e && (e = ["name"]);
                    if (!wb(b) || !b[d]) return [];
                    b = b[d];
                    b = Ja(b) ? b : [b];
                    b = ac(qa(function(f) {
                        return f ?
                            "string" === typeof f ? f : wb(f) ? Oa(function(g, h) {
                                return g || "" + f[h]
                            }, "", e) : null : null
                    }, b));
                    return qa(function(f) {
                        var g;
                        return g = {}, g.name = f, g
                    }, b)
                };
                c.prototype.La = function(b) {
                    var d = b.element,
                        e = b.data || {};
                    b = e["@id"];
                    var f = e.url;
                    e = null;
                    f && Ta(f) && (e = this.mf(f));
                    !e && b && Ta(b) && (e = this.mf(b));
                    e || (e = b = d.parentNode, !Ad("head", this.l, d) && b && 0 !== v(b).length) || (e = this.l.document.body);
                    return e
                };
                c.prototype.mf = function(b) {
                    try {
                        var d = Af(this.l, b).hash;
                        if (d) {
                            var e = Hd(d, this.l.document.body);
                            if (e) return e
                        }
                    } catch (f) {}
                    return null
                };
                c.prototype.Bd = function(b) {
                    return this.$c[b["@type"]] || 1
                };
                c.prototype.Ha = function(b) {
                    var d = this,
                        e = b.element,
                        f = b.data;
                    if (!f && (f = Ye(this.l, v(e)), !f || !/schema\.org/.test(f["@context"]) && !Ja(f))) return null;
                    var g = this.uf(f);
                    if (g) return qa(function(l) {
                        return wb(l) && Ia(l["@type"], d.ub["schema.org"]) ? a.prototype.Ha.call(d, {
                            element: e,
                            data: l,
                            type: d.Bd(l)
                        }) : null
                    }, g);
                    b.data = f;
                    if ("QAPage" === b.data["@type"]) {
                        var h = b.data.mainEntity || b.data.mainEntityOfPage;
                        if (!h) return null
                    }
                    "Question" === b.data["@type"] && (h = b.data);
                    return h ? (b = fh(aa(h, F), ["acceptedAnswer", "suggestedAnswer"]), qa(function(l) {
                        var n;
                        if (!wb(l) || !Ia(l["@type"], d.ub["schema.org"])) return null;
                        l = {
                            element: e,
                            type: d.Bd(l),
                            data: na((n = {}, n.parentItem = h, n), l)
                        };
                        return a.prototype.Ha.call(d, l)
                    }, b)) : Ia(b.data["@type"], this.ub["schema.org"]) ? a.prototype.Ha.call(this, na(b, {
                        type: this.Bd(b.data)
                    })) : null
                };
                c.prototype.Zb = function() {
                    return id(this.gf, this.root)
                };
                c.prototype.uf = function(b) {
                    if (Ja(b)) return b;
                    if (b && Ja(b["@graph"])) return b["@graph"]
                };
                return c
            }(Qo),
            Ro =
            function(a) {
                function c() {
                    var b, d = null !== a && a.apply(this, arguments) || this;
                    d.id = "s";
                    d.Xc = !0;
                    d.Sg = vb("exec", new RegExp("schema.org\\/(" + Ha("|", zb(d.$c)) + ")$"));
                    d.xb = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = Vd(this.l, e, "identifier");
                            return f ? td(f) : (f = Vd(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                                var l = Vd(this.l, e, g[h]);
                                if (l) {
                                    f = td(l).length;
                                    break
                                }
                            }
                            e = v(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = Jj(this.l, e.element, "about");
                            return qa(function(h) {
                                var l = {
                                    name: td(h)
                                };
                                if (g = Vd(f.l, h, "name")) l.name = td(g);
                                return l
                            }, g)
                        }, b.rubric = function(e) {
                            var f = this;
                            (e = Hd('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = Hd('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                            return e ? qa(function(g) {
                                return {
                                    name: td(Vd(f.l, g, "name")),
                                    position: td(Vd(f.l, g, "position"))
                                }
                            }, Jj(this.l, e, "itemListElement")) : []
                        },
                        b.updateDate = function(e) {
                            return (e = Vd(this.l, e.element, "dateModified")) ? Cm(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = Vd(this.l, e.element, "datePublished")) ? Cm(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e = Jj(this.l, e.element, "url");
                            if (e.length) {
                                var f = e[0];
                                return f.href ? f.href : td(e)
                            }
                            return null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                h = Vd(this.l, g, "headline");
                            h && (f += td(h));
                            (h = Vd(this.l, g, "alternativeHeadline")) && (f += " " + td(h));
                            "" === f && ((h = Vd(this.l, g, "name")) || (h = Vd(this.l, g, "itemReviewed")), h &&
                                (f += td(h)));
                            3 === e.type && (e = Ad('[itemtype$="schema.org/Question"]', this.l, g)) && (e = Vd(this.l, e, "text")) && (f += td(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e = Jj(this.l, e.element, "author");
                            return qa(function(g) {
                                var h, l = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = Vd(f.l, g, "name")) && (l.name = td(h));
                                l.name || (l.name = g.getAttribute("content") || v(g) || g.getAttribute("href"));
                                return l
                            }, e)
                        }, b);
                    return d
                }
                ec(c, a);
                c.prototype.$d = function(b) {
                    b = b.getAttribute("itemtype") ||
                        "";
                    return (b = this.Sg(b)) ? this.$c[b[1]] : 1
                };
                c.prototype.Ha = function(b) {
                    return b.element && v(b.element).length ? a.prototype.Ha.call(this, b) : null
                };
                c.prototype.Zb = function() {
                    var b = Ha(",", qa(function(d) {
                        return '[itemtype$="schema.org/' + d + '"]'
                    }, this.ub["schema.org"]));
                    return id(b, this.root)
                };
                return c
            }(Qo),
            Wq = function(a) {
                function c(b, d) {
                    var e, f = a.call(this, b, d) || this;
                    f.id = "o";
                    f.xb = (e = {}, e.chars = function(g) {
                        g = this.La(g);
                        return v(g).length
                    }, e.authors = function(g) {
                        return this.yd(g.data.author)
                    }, e.pageTitle = function(g) {
                        return this.Hc(g.data.title) ||
                            ""
                    }, e.updateDate = function(g) {
                        return this.Hc(g.data.modified_time)
                    }, e.publicationDate = function(g) {
                        return this.Hc(g.data.published_time)
                    }, e.pageUrlCanonical = function(g) {
                        return this.Hc(g.data.url)
                    }, e.rubric = function(g) {
                        return this.yd(g.data.section)
                    }, e.topics = function(g) {
                        return this.yd(g.data.tag)
                    }, e);
                    f.Th = new RegExp("^(og:)?((" + Ha("|", f.ub.Re) + "):)?");
                    return f
                }
                ec(c, a);
                c.prototype.yd = function(b) {
                    var d;
                    return b ? Ja(b) ? qa(function(e) {
                        var f;
                        return f = {}, f.name = e ? "" + e : null, f
                    }, b) : [(d = {}, d.name = b ? "" + b : null,
                        d)] : []
                };
                c.prototype.Hc = function(b) {
                    return Ja(b) ? b.length ? "" + b[0] : null : b ? "" + b : null
                };
                c.prototype.Zb = function() {
                    var b = id('meta[property="og:type"]', this.l.document.body);
                    return [this.l.document.head].concat(b)
                };
                c.prototype.Zh = function(b) {
                    var d = this,
                        e = b.element,
                        f = {},
                        g = this.La(b);
                    e = id("meta[property]", e === this.l.document.head ? e : g);
                    if (e.length) ia(function(h) {
                        try {
                            if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                var l = h.getAttribute("property").replace(d.Th, ""),
                                    n = td(h);
                                f[l] ? Ja(f[l]) ? f[l].push(n) : f[l] = [f[l], n] : f[l] = n
                            }
                        } catch (x) {
                            dh(d.l, "og.ed", x)
                        }
                    }, e);
                    else return null;
                    return Ia(f.type, this.ub.Re) ? na(b, {
                        data: f
                    }) : null
                };
                c.prototype.La = function(b) {
                    b = b.element;
                    var d = this.l.document;
                    return b === d.head ? d.body : b.parentNode
                };
                c.prototype.Ha = function(b) {
                    return (b = this.Zh(b)) ? a.prototype.Ha.call(this, b) : null
                };
                return c
            }(Qo),
            So = "et w v z i u vf".split(" "),
            hm = {};
        Vq && (hm.json_ld = Vq);
        Ro && (hm.schema = Ro, hm.microdata = Ro);
        Wq && (hm.opengraph = Wq);
        var Qu = pa("p.p", function(a, c) {
                function b(x) {
                    var I = na({}, n);
                    I.T.Z = x;
                    return f(I)["catch"](va(a,
                        "s.ww.p"))
                }
                var d, e = Ie(a, "9", "8");
                if (!xc("querySelectorAll", a.document.querySelectorAll) || !e) return wa.resolve();
                var f = ad(a, c, "p", ["f", "x"], [
                        [bd(So), 1],
                        [jh, 1]
                    ]),
                    g = Hc(),
                    h = zk(a, c.id),
                    l = h.C("pai");
                l && (h.Ra("pai"), g.D("pai", l));
                var n = {
                    G: (d = {}, d["wv-type"] = e.type, d),
                    H: g,
                    T: {}
                };
                return Ib(c, va(a, "ps.s", function(x) {
                    var I;
                    if (x = F(x, "settings.publisher.schema")) {
                        vk(c) && (x = "microdata");
                        var P = hm[x];
                        if (P && e) {
                            var T = W(c);
                            P = new P(a, T);
                            P = new Ou(a, P, e, b, T);
                            P.start();
                            Mc(a, T, "ps", (I = {}, I.schema = x, I));
                            return Ea(P.stop, P)
                        }
                    }
                }))
            }),
            Ru = function() {
                function a(c, b) {
                    this.type = "0";
                    this.l = c;
                    this.dj = b
                }
                a.prototype.Da = function(c) {
                    return $f(fh(Ea(this.Bb, this), c))
                };
                a.prototype.Bb = function(c, b) {
                    var d = this,
                        e = [],
                        f = this.dj(this.l, b && b.type, c.type);
                    f && (e = fh(function(g) {
                        return g({
                            l: d.l,
                            Sa: c
                        }) || []
                    }, f));
                    return e
                };
                a.prototype.qb = function(c) {
                    return c.length
                };
                a.prototype.wd = function(c) {
                    return [c]
                };
                a.prototype.isEnabled = function() {
                    return !0
                };
                return a
            }(),
            Xq = function() {
                function a(c, b, d) {
                    this.Od = 0;
                    this.Oc = 1;
                    this.bd = 5E3;
                    this.l = c;
                    this.oa = b;
                    this.Ib = d
                }
                a.prototype.bc =
                    function() {
                        this.Od = eb(this.l, ca(Ea(this.flush, this), Ea(this.bc, this)), this.bd, "b.f")
                    };
                a.prototype.send = function(c, b) {
                    var d = this.Ib(c, b || [], this.Oc);
                    this.Oc += 1;
                    return d
                };
                a.prototype.push = function() {};
                a.prototype.flush = function() {};
                return a
            }(),
            ks = function(a) {
                function c(b, d, e) {
                    b = a.call(this, b, d, e) || this;
                    b.buffer = [];
                    b.Bi = 7500;
                    b.bd = 3E4;
                    b.bc();
                    return b
                }
                ec(c, a);
                c.prototype.push = function(b, d) {
                    var e = this.oa.Bb(b, d);
                    Kb(this.buffer, e);
                    this.oa.qb(this.buffer) > this.Bi && this.flush()
                };
                c.prototype.flush = function() {
                    var b =
                        this.buffer;
                    b.length && (this.send(b), this.buffer = [])
                };
                return c
            }(Xq),
            vs = /opera mini/i,
            Rp = ["phone", "email"],
            Yq = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
            ss = /^[\w\u0410-\u042f\u0430-\u044f]$/,
            ts = [65, 90],
            us = [97, 122],
            rs = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
            ps = new RegExp("(" + Ha("|", Yq) + ")", "i"),
            os = new RegExp("(" + Ha("|", Rp) + ")", "i"),
            qq = ["password", "passwd", "pswd"],
            qs = new RegExp("(" + Ha("|", Yq.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                ")", "i"),
            Ed = "metrikaId_" + Math.random(),
            ej = {
                counter: 0
            },
            st = V(function() {
                var a;
                return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                    43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                    100, a
            }),
            rt = [17, 18, 38, 32, 39, 15, 11, 7, 1],
            Su = function() {
                var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                return {
                    Zk: new RegExp("(" + Ha("|", a) + ")", "i"),
                    jl: new RegExp("(" + Ha("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                        ")", "i"),
                    Yk: /ym-record-keys/i,
                    Fj: "\u2022",
                    dl: 88
                }
            }(),
            sq = cf(aa(Su.Fj, Za)),
            Nl = !0,
            wo = "",
            yo = !1,
            zo = !0,
            Ao = !1,
            ns = tb(function(a, c) {
                var b = ra([a, "efv." + c.event], va);
                c.ba = qa(ca(Za, b), c.ba);
                return c
            }),
            Zq = V(function(a) {
                var c = [],
                    b = [],
                    d = [];
                a.document.attachEvent && !a.opera && (c.push(zg), b.push(Bn), b.push(xp));
                a.document.addEventListener ? c.push(Dn) : (b.push(Cn), d.push(Dn));
                return Lf(a, ("onpagehide" in a ? [] : [{
                    target: a,
                    type: "window",
                    event: "beforeunload",
                    ba: [sa]
                }, {
                    target: a,
                    type: "window",
                    event: "unload",
                    ba: [sa]
                }]).concat([{
                    event: "click",
                    ba: [Ni]
                }, {
                    event: "dblclick",
                    ba: [Ni]
                }, {
                    event: "mousedown",
                    ba: [Ni]
                }, {
                    event: "mouseup",
                    ba: [xo]
                }, {
                    event: "keydown",
                    ba: [Sn]
                }, {
                    event: "keypress",
                    ba: [yp]
                }, {
                    event: "copy",
                    ba: [En]
                }, {
                    event: "blur",
                    ba: c
                }, {
                    event: "focusin",
                    ba: b
                }, {
                    event: "focusout",
                    ba: d
                }]).concat(!a.document.attachEvent || a.opera ? [{
                    target: a,
                    type: "window",
                    event: "focus",
                    ba: [qd]
                }, {
                    target: a,
                    type: "window",
                    event: "blur",
                    ba: [zg]
                }] : []).concat(a.document.addEventListener ? [{
                    event: "focus",
                    ba: [Cn]
                }, {
                    event: "change",
                    ba: [Qn]
                }, {
                    event: "submit",
                    ba: [Om]
                }] : [{
                    type: "formInput",
                    event: "change",
                    ba: [Qn]
                }, {
                    type: "form",
                    event: "submit",
                    ba: [Om]
                }]))
            }),
            ls = V(function(a) {
                var c = [];
                ye(a) && c.push({
                    target: a,
                    type: "document",
                    event: "mouseleave",
                    ba: [gp]
                });
                "onpagehide" in a && c.push({
                    target: a,
                    type: "window",
                    event: "pagehide",
                    ba: [function(b) {
                        b = b.flush;
                        b()
                    }]
                });
                return c
            }),
            Tu = ["submit", "beforeunload", "unload"],
            Uu = V(function(a, c) {
                var b = c(a);
                return Oa(function(d, e) {
                    d[e.type + ":" + e.event] = e.ba;
                    return d
                }, {}, b)
            }),
            Vu = aa(Zq, function(a, c, b, d) {
                return Uu(c, a)[b + ":" + d] || []
            }),
            ms = /^\s*function submit\(\)/,
            Wu = pa("fw.p",
                function(a, c) {
                    var b;
                    if (!(b = c.Ti || !c.Dc)) {
                        var d = K(a),
                            e = !1;
                        b = d.C("hitParam", {});
                        var f = W(c);
                        b[f] && (d = d.C("counters", {}), e = Na(c.$) && !d[f]);
                        b[f] = 1;
                        b = e
                    }
                    if (b) return wa.resolve(sa);
                    b = new Ru(a, Vu);
                    return ii(a, c, b, Zq, Tu)
                }),
            To, $q = (To = function(a) {
                function c(b, d, e, f) {
                    void 0 === f && (f = 0);
                    d = a.call(this, b, d, e) || this;
                    d.Sc = 0;
                    d.ob = 0;
                    d.Rc = 0;
                    d.buffer = [];
                    d.bd = 2E3;
                    d.V = dj(b);
                    d.bc();
                    d.Rc = f;
                    return d
                }
                ec(c, a);
                c.prototype.Wd = function(b) {
                    return ac(this.V.N("ag", b))
                };
                c.prototype.Vd = function(b, d) {
                    var e = this;
                    b(Rc(va(this.l, "wv2.b.st"),
                        function(f) {
                            e.send(f, d)
                        }))
                };
                c.prototype.Ng = function(b, d) {
                    var e = this;
                    la(this.l, this.Od);
                    var f = Math.ceil(this.oa.qb(d) / 63E4),
                        g = this.oa.wd(d, f);
                    ia(function(h, l) {
                        var n, x = na({}, b, (n = {}, n.data = h, n.partNum = l + 1, n.end = l + 1 === f, n.partsTotal = g.length, n));
                        n = e.oa.Da([x], !1);
                        e.Vd(n, [x])
                    }, g);
                    this.bc()
                };
                c.prototype.send = function(b, d) {
                    var e = this;
                    this.V.N("se", d);
                    return a.prototype.send.call(this, b, d).then(Za, function() {
                        e.V.N("see", d)
                    })
                };
                c.jg = function(b, d, e, f, g) {
                    c.Ec["" + b + d] || (this.Ec[d] = new c(g, f, e, "m" === d ? 31457280 :
                        0));
                    return this.Ec[d]
                };
                c.prototype.Cg = function() {
                    return this.Rc && this.Sc >= this.Rc
                };
                c.prototype.push = function(b) {
                    var d = this;
                    if (!this.Cg()) {
                        this.V.N("p", b);
                        var e = this.oa.Bb(b),
                            f = this.oa.qb(e);
                        7E5 < f ? this.Ng(b, e) : (e = this.Wd(this.buffer.concat([b])), e = Te(function(g, h) {
                            return g + d.oa.qb(d.oa.Bb(h))
                        }, 0, e), this.ob + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.ob += f)
                    }
                };
                c.prototype.F = function(b, d) {
                    this.V.F([b], d)
                };
                c.prototype.ea = function(b, d) {
                    this.V.ea([b], d)
                };
                c.prototype.flush = function(b) {
                    var d = this.buffer.concat(this.Wd(this.buffer));
                    d.length && (this.buffer = [], this.Sc += this.ob, this.ob = 0, b = this.oa.Da(d, b), this.Vd(b, d))
                };
                return c
            }(Xq), To.Ec = {}, To),
            de = function() {
                function a(c, b, d) {
                    this.Cj = "wv2.c";
                    this.yc = [];
                    this.Ma = [];
                    this.l = c;
                    this.R = jd(c, this, d, this.Cj);
                    this.J = b;
                    this.Ob = this.J.gj();
                    this.start = this.R.K(this.start, "st");
                    this.stop = this.R.K(this.stop, "sp")
                }
                a.prototype.start = function() {
                    var c = this;
                    this.yc = qa(function(b) {
                        var d = b[0],
                            e = b[2];
                        b = Ea(c.R.K(b[1], d[0]), c);
                        return c.Ob.F(e || c.l, d, b)
                    }, this.Ma)
                };
                a.prototype.stop = function() {
                    ia(Va, this.yc)
                };
                a.prototype.ia = function(c) {
                    return this.J.$a().ia(c)
                };
                return a
            }(),
            is = ["checkbox", "radio"],
            js = /pwd|value|password/i,
            Uo = S("location.href"),
            Xu = function(a) {
                function c(b, d, e) {
                    d = a.call(this, b, d, e) || this;
                    d.Za = {
                        elements: [],
                        attributes: []
                    };
                    d.index = 0;
                    d.Lf = d.R.K(d.Lf, "o");
                    d.ef = d.R.K(d.ef, "io");
                    d.Te = d.R.K(d.Te, "ao");
                    d.Tf = d.R.K(d.Tf, "a");
                    d.Rf = d.R.K(d.Rf, "at");
                    d.Uf = d.R.K(d.Uf, "r");
                    d.Sf = d.R.K(d.Sf, "c");
                    d.Aa = new b.MutationObserver(d.Lf);
                    return d
                }
                ec(c, a);
                c.prototype.start = function() {
                    this.Aa.observe(this.l.document.documentElement, {
                        attributes: !0,
                        characterData: !0,
                        childList: !0,
                        subtree: !0,
                        attributeOldValue: !0,
                        characterDataOldValue: !0
                    })
                };
                c.prototype.stop = function() {
                    this.Aa.disconnect()
                };
                c.prototype.Te = function(b) {
                    var d = b.target,
                        e = b.attributeName,
                        f = b.oldValue;
                    b = d.getAttribute(e);
                    if (b === f) return !1;
                    f = $a(this.l)(d, this.Za.elements); - 1 === f && (f = this.Za.elements.push(d) - 1, this.Za.attributes[f] = {});
                    this.Za.attributes[f] || (this.Za.attributes[f] = {});
                    this.Za.attributes[f][e] = Dd(this.l, d, e, b, this.J.hd()).value;
                    return !0
                };
                c.prototype.ef = function(b) {
                    function d(l) {
                        var n =
                            $a(e.l)(l, f);
                        return -1 === n ? (f.push(l), l = {
                            qf: {}
                        }, g.push(l), l) : g[n]
                    }
                    var e = this,
                        f = [],
                        g = [];
                    ia(function(l) {
                        var n = l.attributeName,
                            x = l.removedNodes,
                            I = l.oldValue,
                            P = l.target,
                            T = l.nextSibling,
                            ba = l.previousSibling;
                        switch (l.type) {
                            case "attributes":
                                if (e.Te(l)) {
                                    var ka = d(P);
                                    ka.qf[n] || (ka.qf[n] = Dd(e.l, P, n, I, e.J.hd()).value)
                                }
                                break;
                            case "childList":
                                x && ia(function(Ka) {
                                    ka = d(Ka);
                                    ka.fh || na(ka, {
                                        fh: P,
                                        $i: T ? T : void 0,
                                        aj: ba ? ba : void 0
                                    })
                                }, Yb(x));
                                break;
                            case "characterData":
                                ka = d(P), ka.gh || (ka.gh = I)
                        }
                    }, b);
                    var h = this.J.$a();
                    ia(function(l,
                        n) {
                        h.Yf(l, g[n])
                    }, f)
                };
                c.prototype.Lf = function(b) {
                    var d = this;
                    if (Uo(this.l)) {
                        var e = this.J.stamp();
                        this.ef(b);
                        ia(function(f) {
                            var g = f.addedNodes,
                                h = f.removedNodes,
                                l = f.target;
                            switch (f.type) {
                                case "childList":
                                    h && h.length && d.Uf(Yb(h), e);
                                    g && g.length && d.Tf(Yb(g), e);
                                    break;
                                case "characterData":
                                    d.Sf(l, e)
                            }
                        }, b);
                        this.Rf(e)
                    } else this.stop()
                };
                c.prototype.Rf = function(b) {
                    var d = this;
                    ia(function(e, f) {
                        var g = d.Yd();
                        d.J.da("mutation", {
                            index: g,
                            attributes: d.Za.attributes[f],
                            target: d.ia(e)
                        }, "ac", b)
                    }, this.Za.elements);
                    this.Za.elements = [];
                    this.Za.attributes = []
                };
                c.prototype.Tf = function(b, d) {
                    var e = this,
                        f = this.Yd();
                    this.J.$a().ce({
                        nodes: b,
                        Be: function(g) {
                            g = qa(function(h) {
                                h.node = void 0;
                                return h
                            }, g);
                            e.J.da("mutation", {
                                index: f,
                                nodes: g
                            }, "ad", d)
                        }
                    })
                };
                c.prototype.Uf = function(b, d) {
                    var e = this,
                        f = this.Yd(),
                        g = this.J.$a(),
                        h = qa(function(l) {
                            var n = g.removeNode(l);
                            Ke(e.l, l, function(x) {
                                g.removeNode(x)
                            });
                            return n
                        }, b);
                    this.J.da("mutation", {
                        index: f,
                        nodes: h
                    }, "re", d)
                };
                c.prototype.Sf = function(b, d) {
                    var e = this.Yd();
                    this.J.da("mutation", {
                        value: b.textContent,
                        target: this.ia(b),
                        index: e
                    }, "tc", d)
                };
                c.prototype.Yd = function() {
                    var b = this.index;
                    this.index += 1;
                    return b
                };
                return c
            }(de),
            Yu = function() {
                function a(c, b) {
                    var d = this;
                    this.Sd = [];
                    this.nc = [];
                    this.Jf = 1;
                    this.$g = this.Dh = 0;
                    this.bb = {};
                    this.Qb = {};
                    this.gd = [];
                    this.Cf = function(f) {
                        return d.nc.length ? Ia(f, d.nc) : !1
                    };
                    this.removeNode = function(f) {
                        var g = d.ia(f),
                            h = pb(f);
                        if (h) return h = "NR:" + h.toLowerCase(), d.Cf(h) && d.V.N(h, {
                            data: {
                                node: f,
                                id: g
                            }
                        }), g
                    };
                    this.rc = function(f) {
                        var g = pb(f);
                        if (g) {
                            var h = f.__ym_indexer;
                            return h ? h : (h = d.Jf,
                                f.__ym_indexer = h, d.Jf += 1, g = "NA:" + g.toLowerCase(), d.Cf(g) && d.V.N(g, {
                                    data: {
                                        node: f,
                                        id: h
                                    }
                                }), h)
                        }
                        return null
                    };
                    this.xh = function() {
                        d.Dh = eb(d.l, ca(Ea(d.qa, d, !1), d.xh), 50, "i.s")
                    };
                    this.vh = function() {
                        d.$g = eb(d.l, ca(Ea(d.Xe, d, !1), d.vh), 50, "i.g")
                    };
                    this.Qj = function(f) {
                        null === d.bb[f] && delete d.bb[f];
                        null === d.Qb[f] && delete d.Qb[f]
                    };
                    this.l = c;
                    var e = jd(c, this, "i");
                    this.V = dj(c);
                    this.options = b;
                    this.start = e.K(this.start, "st");
                    this.stop = e.K(this.stop, "sp");
                    this.ia = e.K(this.ia, "i");
                    this.Yf = e.K(this.Yf, "o");
                    this.ce = e.K(this.ce,
                        "a");
                    this.removeNode = e.K(this.removeNode, "r");
                    this.qa = e.K(this.qa, "s");
                    this.Xe = e.K(this.Xe, "g")
                }
                a.prototype.Yf = function(c, b) {
                    var d = this.rc(c);
                    Kc(d) || (this.Qb[d] && this.ia(c), this.Qb[d] = b)
                };
                a.prototype.F = function(c, b, d) {
                    c = "" + b + c;
                    this.nc.push(c);
                    this.Cf(c) || this.nc.push(c);
                    this.V.F([c], d)
                };
                a.prototype.ea = function(c, b, d) {
                    var e = "" + b + c;
                    this.nc = fb(function(f) {
                        return f !== e
                    }, this.nc);
                    this.V.ea([e], d)
                };
                a.prototype.start = function() {
                    this.xh();
                    this.vh()
                };
                a.prototype.stop = function() {
                    this.flush();
                    la(this.l, this.$g);
                    la(this.l, this.Dh);
                    this.Sd = [];
                    this.gd = [];
                    this.bb = {};
                    this.Qb = {}
                };
                a.prototype.ce = function(c) {
                    var b = this,
                        d = [],
                        e = 0,
                        f = {
                            Be: c.Be,
                            result: [],
                            ee: 0,
                            nodes: d
                        };
                    this.Sd.push(f);
                    ia(function(g) {
                        Ke(b.l, g, function(h) {
                            var l = b.rc(h);
                            Kc(l) || (d.push(h), b.bb[l] && b.ia(h), b.bb[l] = {
                                node: h,
                                event: f,
                                $j: e
                            }, e += 1)
                        })
                    }, c.nodes)
                };
                a.prototype.ia = function(c) {
                    if (c === this.l) return 0;
                    var b = this.rc(c),
                        d = this.bb[b],
                        e = this.bj(b),
                        f = e.fh,
                        g = e.qf,
                        h = e.gh,
                        l = e.$i,
                        n = e.aj;
                    if (d) {
                        e = d.event;
                        d = d.$j;
                        var x = zt(this.l) === c;
                        l = l || c.nextSibling;
                        var I = n || c.previousSibling;
                        n = !x && l ? this.rc(l) : null;
                        I = !x && I ? this.rc(I) : null;
                        x = this.l;
                        l = this.options;
                        f = this.rc(f || c.parentNode || c.parentElement) || 0;
                        var P = g,
                            T = void 0;
                        void 0 === I && (I = null);
                        void 0 === n && (n = null);
                        void 0 === P && (P = {});
                        void 0 === T && (T = pb(c));
                        if (db(T)) c = void 0;
                        else {
                            g = {
                                id: b,
                                prev: I !== f ? I : null,
                                next: n !== f ? n : null,
                                parent: f,
                                name: T.toLowerCase(),
                                node: c
                            };
                            if (B(c)) {
                                if (h = Xb(c, h), g.attributes = {}, g.content = h)
                                    if (c = Ze(x, c)) g.content = "" !== Pc(h) ? hl(x, h) : h, g.hidden = c
                            } else h = Ai(x, c, l, P, T), x = h.wc, g.attributes = h.Li, x && (g.hidden = x), c.namespaceURI &&
                                od(c.namespaceURI, "svg") && (g.namespace = c.namespaceURI);
                            c = g
                        }
                        if (db(c)) return;
                        this.bb[b] = null;
                        this.gd.push(b);
                        e.result[d] = c;
                        e.ee += 1;
                        e.nodes.length === e.ee && e.Be(e.result)
                    }
                    return b
                };
                a.prototype.flush = function() {
                    this.qa(!0)
                };
                a.prototype.Xe = function() {
                    if (this.gd.length) {
                        var c = Gc(this.gd, this.Qj),
                            b = Tc(this.l, 30);
                        c(b)
                    }
                };
                a.prototype.qa = function(c) {
                    var b = this;
                    if (Uo(this.l)) {
                        var d = zb(this.bb);
                        d = Oa(function(e, f) {
                            b.bb[f] && e.push(b.bb[f].node);
                            return e
                        }, [], d);
                        d = Gc(d, this.ia);
                        c = c ? lq(sa) : Li(this.l, 20);
                        d(c);
                        this.Sd =
                            fb(function(e) {
                                return e.ee !== e.result.length
                            }, this.Sd)
                    }
                };
                a.prototype.bj = function(c) {
                    if (Kc(c)) return {};
                    var b = this.Qb[c];
                    return b ? (this.Qb[c] = null, this.gd.push(c), b) : {}
                };
                return a
            }(),
            Zu = ["input", "change", "keyup", "paste", "cut"],
            $u = function(a) {
                function c(b, d, e) {
                    b = a.call(this, b, d, e) || this;
                    b.inputs = {};
                    b.jf = !1;
                    b.ne = b.R.K(b.ne, "ii");
                    b.oe = b.R.K(b.oe, "ir");
                    b.xe = b.R.K(b.xe, "ri");
                    b.Je = b.R.K(b.Je, "ur");
                    b.Af = b.R.K(b.Af, "ce");
                    b.ae = b.R.K(b.ae, "vc");
                    return b
                }
                ec(c, a);
                c.prototype.start = function() {
                    var b = this,
                        d = this.J.$a();
                    this.jf = this.Pi();
                    ia(function(e) {
                        e = e.toLowerCase();
                        d.F(e, "NA:", Ea(b.ne, b));
                        d.F(e, "NR:", Ea(b.oe, b))
                    }, ho);
                    this.yc = [this.Ob.F(this.l.document, Zu, Ea(this.Af, this)), function() {
                        ia(function(e) {
                            e = e.toLowerCase();
                            d.ea(e, "NA:", b.ne);
                            d.ea(e, "NR:", b.oe)
                        }, ho);
                        ia(b.Je, zb(b.inputs))
                    }]
                };
                c.prototype.Je = function(b) {
                    var d = this.inputs[b];
                    if (d) {
                        if (this.jf) {
                            var e = d.Mj;
                            d = d.element;
                            e && this.l.Object.defineProperty(d, this.Zd(d), e)
                        }
                        delete this.inputs[b]
                    }
                };
                c.prototype.oe = function(b) {
                    b && this.Je(b.data.id)
                };
                c.prototype.ne = function(b) {
                    b &&
                        (b = b.data, this.xe(b.node, b.id))
                };
                c.prototype.Zd = function(b) {
                    return dn(b) ? "checked" : "value"
                };
                c.prototype.Af = function(b) {
                    if (b = b.target) {
                        var d = this.Zd(b);
                        this.ae(b[d], b)
                    }
                };
                c.prototype.ae = function(b, d) {
                    var e = this.ia(d),
                        f = this.inputs[e];
                    if (!f && (f = this.xe(f, e), !f)) return;
                    e = f.Ri;
                    var g = f.value,
                        h = this.Zd(d),
                        l = !b || Ia(typeof b, ["string", "boolean", "number"]),
                        n = this.J.hd().Ff;
                    l && b !== g && (g = Dd(this.l, d, h, b, this.J.hd()).value, e ? this.J.da("event", {
                        target: this.ia(d),
                        checked: !!b
                    }, "change") : (e = Ic(this.l, d, n), n = e.oc,
                        this.J.da("event", {
                            value: g,
                            hidden: e.xc && !n,
                            target: this.ia(d)
                        }, "change")), f.value = b)
                };
                c.prototype.xe = function(b, d) {
                    var e = this;
                    if (!Ae(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                    var f = dn(b),
                        g = this.Zd(b),
                        h = {
                            element: b,
                            Ri: f,
                            value: b[g]
                        };
                    this.inputs[d] = h;
                    this.jf && oc(this.l, function() {
                        var l = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                            n = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                            x = na({}, l, n);
                        if (xc("((set)?(\\s?" + g + ")?)?", x.set)) {
                            try {
                                e.l.Object.defineProperty(b,
                                    g, na({}, x, {
                                        configurable: !0,
                                        set: function(I) {
                                            e.ae(I, this);
                                            return x.set.call(this, I)
                                        }
                                    }))
                            } catch (I) {}
                            h.Mj = x
                        }
                    });
                    return h
                };
                c.prototype.Pi = function() {
                    var b = !0,
                        d = Ge(this.l)("input");
                    try {
                        d = Ge(this.l)("input");
                        d.value = "INPUT_VALUE";
                        d.style.setProperty("display", "none", "important");
                        d.setAttribute("type", "text");
                        d.setAttribute("class", "__ym_input_override_test");
                        var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                            f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                            g = na({}, e,
                                f);
                        this.l.Object.defineProperty(d, "value", na({}, g, {
                            configurable: !0,
                            set: function(h) {
                                return g.set.call(d, h)
                            }
                        }));
                        "INPUT_VALUE" !== d.value && (b = !1);
                        d.value = "INPUT_TEST";
                        "INPUT_TEST" !== d.value && (b = !1)
                    } catch (h) {
                        b = !1
                    }
                    return b
                };
                return c
            }(de),
            av = function(a) {
                function c(b, d, e) {
                    b = a.call(this, b, d, e) || this;
                    b.Ub = {
                        width: 0,
                        height: 0,
                        pageHeight: 0,
                        pageWidth: 0,
                        orientation: 0
                    };
                    b.Ma.push([
                        ["resize"], b.Kj
                    ]);
                    b.Ma.push([
                        ["orientationchange"], b.Jj
                    ]);
                    return b
                }
                ec(c, a);
                c.prototype.start = function() {
                    a.prototype.start.call(this);
                    this.Ah()
                };
                c.prototype.Kj = function() {
                    var b = this.yf();
                    this.sj(b) && (this.Ub = b, this.Bh(b))
                };
                c.prototype.Jj = function() {
                    var b = this.yf();
                    this.Ub.orientation !== b.orientation && (this.Ub = b, this.Tj(b))
                };
                c.prototype.ph = function(b) {
                    return !b.height || !b.width || !b.pageWidth || !b.pageHeight
                };
                c.prototype.sj = function(b) {
                    return b.height !== this.Ub.height || b.width !== this.Ub.width
                };
                c.prototype.yf = function() {
                    var b = this.J.qc(),
                        d = me(this.l),
                        e = d[0];
                    d = d[1];
                    b = b.xf();
                    return {
                        width: e,
                        height: d,
                        pageWidth: b ? b.scrollWidth : 0,
                        pageHeight: b ? b.scrollHeight : 0,
                        orientation: this.J.qc().ij()
                    }
                };
                c.prototype.Tj = function(b) {
                    var d;
                    void 0 === d && (d = this.J.stamp());
                    this.J.da("event", {
                        width: b.width,
                        height: b.height,
                        orientation: b.orientation
                    }, "deviceRotation", d)
                };
                c.prototype.Bh = function(b, d) {
                    void 0 === d && (d = this.J.stamp());
                    this.J.da("event", {
                        width: b.width,
                        height: b.height,
                        pageWidth: b.pageWidth,
                        pageHeight: b.pageHeight
                    }, "resize", d)
                };
                c.prototype.Ah = function() {
                    var b = this.yf();
                    this.ph(b) ? eb(this.l, Ea(this.Ah, this), 300) : (this.ph(this.Ub) && (this.Ub = b), this.Bh(b, 0))
                };
                return c
            }(de),
            un = function() {
                function a(c) {
                    this.index = 0;
                    this.Ac = {};
                    this.l = c
                }
                a.prototype.Nd = function(c, b, d) {
                    void 0 === d && (d = {});
                    var e = Jb(this.l),
                        f = this.index;
                    this.index += 1;
                    this.Ac[f] = {
                        lb: 0,
                        od: !1,
                        fn: c,
                        Ue: [],
                        Hf: e(nb)
                    };
                    var g = this;
                    return function() {
                        var h = lc(arguments),
                            l = d.vd && !g.Ac[f].od,
                            n = g.Ac[f];
                        la(g.l, n.lb);
                        n.Ue = h;
                        n.od = !0;
                        var x = e(nb);
                        if (l || x - n.Hf >= b) c.apply(void 0, h), n.Hf = x;
                        n.lb = eb(g.l, function() {
                            l || (c.apply(void 0, h), n.Hf = e(nb));
                            n.od = !1;
                            n.Ue = []
                        }, b, "th")
                    }
                };
                a.prototype.flush = function() {
                    var c = this;
                    ia(function(b) {
                        var d =
                            c.Ac[b],
                            e = d.lb,
                            f = d.fn,
                            g = d.Ue;
                        d.od && (c.Ac[b].od = !1, f.apply(void 0, g), la(c.l, e))
                    }, zb(this.Ac))
                };
                return a
            }(),
            bv = function(a) {
                function c(b, d, e) {
                    d = a.call(this, b, d, e) || this;
                    d.Ih = [];
                    d.ig = {
                        x: 0,
                        y: 0
                    };
                    d.eb = new un(b);
                    d.se = d.R.K(d.se, "o");
                    d.Ma.push([
                        ["scroll"], d.Lj
                    ]);
                    return d
                }
                ec(c, a);
                c.prototype.start = function() {
                    a.prototype.start.call(this);
                    this.J.da("event", {
                        x: Math.max(this.l.scrollX, 0),
                        y: Math.max(this.l.scrollY, 0),
                        page: !0,
                        target: -1
                    }, "scroll", 0)
                };
                c.prototype.stop = function() {
                    a.prototype.stop.call(this);
                    this.eb.flush()
                };
                c.prototype.Lj = function(b) {
                    if (this.J.qc().mh()) this.se(b);
                    else {
                        var d = b.target,
                            e = fb(function(f) {
                                return f[0] === d
                            }, this.Ih).pop();
                        e ? e = e[1] : (e = this.eb.Nd(Ea(this.se, this), 100, {
                            vd: !0
                        }), this.Ih.push([d, e]));
                        e(b)
                    }
                };
                c.prototype.se = function(b) {
                    var d = this.J.qc().xf();
                    b = b.target;
                    var e = this.Fb(b);
                    d = d === b || this.l === b || this.l.document === b;
                    var f = Math.max(e.left, 0);
                    e = Math.max(e.top, 0);
                    if (d) {
                        if (this.ig.x === f && this.ig.y === e) return;
                        this.ig = {
                            x: f,
                            y: e
                        }
                    }
                    this.J.da("event", {
                        x: f,
                        y: e,
                        page: d,
                        target: d ? -1 : this.ia(b)
                    }, "scroll")
                };
                c.prototype.Fb = function(b) {
                    var d = {
                        left: 0,
                        top: 0
                    };
                    if (!b) return d;
                    if (b.window === b) return {
                        top: b.scrollY || 0,
                        left: b.scrollX || 0
                    };
                    var e = b.ownerDocument || b,
                        f = b.documentElement,
                        g = e.defaultView || e.parentWindow,
                        h = e.body;
                    return b !== e || (b = this.J.qc().xf(), b) ? Ia(b, [f, h]) ? {
                        top: b.scrollTop || g.scrollY,
                        left: b.scrollLeft || g.scrollX
                    } : {
                        top: b.scrollTop || 0,
                        left: b.scrollLeft || 0
                    } : d
                };
                return c
            }(de),
            cv = ["mousemove", "mousedown", "mouseup", "click"],
            dv = function(a) {
                function c(b, d, e) {
                    d = a.call(this, b, d, e) || this;
                    d.Ma.push([cv, d.Ij]);
                    d.eb = new un(b);
                    d.le = d.R.K(d.le, "n");
                    d.Xj = d.R.K(d.eb.Nd(Ea(d.le, d), 100), "t");
                    return d
                }
                ec(c, a);
                c.prototype.stop = function() {
                    a.prototype.stop.call(this);
                    this.eb.flush()
                };
                c.prototype.Ij = function(b) {
                    var d = null;
                    try {
                        d = b.type
                    } catch (e) {
                        return
                    }
                    "mousemove" === d ? this.Xj(b) : this.le(b)
                };
                c.prototype.le = function(b) {
                    var d = b.type,
                        e = b.clientX;
                    e = void 0 === e ? null : e;
                    var f = b.clientY;
                    f = void 0 === f ? null : f;
                    b = b.target || this.l.document.elementFromPoint(e, f);
                    this.J.da("event", {
                        x: e || 0,
                        y: f || 0,
                        target: this.ia(b)
                    }, d)
                };
                return c
            }(de),
            ev = ["focus", "blur"],
            fv = function(a) {
                function c(b, d, e) {
                    b = a.call(this, b, d, e) || this;
                    b.Ma.push([ev, b.Zi]);
                    return b
                }
                ec(c, a);
                c.prototype.Zi = function(b) {
                    var d = b.target;
                    b = b.type;
                    this.J.da("event", {
                        target: this.ia(d === this.l ? this.l.document.documentElement : d)
                    }, b)
                };
                return c
            }(de),
            gv = V(function(a) {
                var c = Db(a.getSelection, "getSelection");
                return c ? Ea(c, a) : sa
            }),
            hv = ca(gv, Va),
            iv = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
            jv = /text|search|password|tel|url/,
            kv = function(a) {
                function c(b, d, e) {
                    b = a.call(this, b,
                        d, e) || this;
                    b.Df = !1;
                    b.Ma.push([iv, b.qj]);
                    return b
                }
                ec(c, a);
                c.prototype.qj = function(b) {
                    var d = this.J,
                        e = b.type,
                        f = b.which;
                    b = b.target;
                    if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.lj(b) : this.kj()) && e.start !== e.end ? (this.Df = !0, d.da("event", e, "selection")) : this.Df && (this.Df = !1, d.da("event", {
                        start: 0,
                        end: 0
                    }, "selection"))
                };
                c.prototype.kj = function() {
                    var b = hv(this.l);
                    if (b && 0 < b.rangeCount) {
                        b = b.getRangeAt(0) || this.l.document.createRange();
                        var d = this.ia(b.startContainer),
                            e = this.ia(b.endContainer);
                        if (!db(d) && !db(e)) return {
                            start: b.startOffset,
                            end: b.endOffset,
                            startNode: d,
                            endNode: e
                        }
                    }
                };
                c.prototype.lj = function(b) {
                    if (jv.test(b.type || "")) {
                        var d = this.ia(b);
                        if (!db(d)) return {
                            start: b.selectionStart,
                            end: b.selectionEnd,
                            target: d
                        }
                    }
                };
                return c
            }(de),
            ar = {
                focus: "windowfocus",
                blur: "windowblur",
                fl: "windowfocus",
                el: "windowblur"
            },
            lv = function(a) {
                function c(b, d, e) {
                    b = a.call(this, b, d, e) || this;
                    b.visibility = null;
                    db(b.l.document.hidden) ? db(b.l.document.msHidden) ? db(b.l.document.webkitHidden) || (b.visibility = {
                        hidden: "webkitHidden",
                        event: "webkitvisibilitychange"
                    }) : b.visibility = {
                        hidden: "msHidden",
                        event: "msvisibilitychange"
                    } : b.visibility = {
                        hidden: "hidden",
                        event: "visibilitychange"
                    };
                    b.zf = b.R.K(b.zf, "fbe");
                    b.Bf = b.R.K(b.Bf, "she");
                    return b
                }
                ec(c, a);
                c.prototype.start = function() {
                    this.yc = [this.Ob.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], Ea(this.zf, this))];
                    "onpagehide" in this.l && this.yc.push(this.Ob.F(this.l, ["pageshow", "pagehide"], Ea(this.Bf, this), null))
                };
                c.prototype.Bf = function(b) {
                    this.J.da("event", {}, ar[b.type])
                };
                c.prototype.zf = function(b) {
                    this.J.da("event", {}, ar[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                };
                return c
            }(de),
            mv = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
            nv = function(a) {
                function c(b, d, e) {
                    d = a.call(this, b, d, e) || this;
                    d.Ie = {};
                    d.scrolling = !1;
                    d.yh = 0;
                    d.Ma.push([
                        ["scroll"], d.Sj, d.l.document
                    ]);
                    d.Ma.push([mv, d.Zj, d.l.document]);
                    d.eb = new un(b);
                    d.ld = d.R.K(d.ld, "nh");
                    d.Yj = d.R.K(d.eb.Nd(d.ld, d.J.qc().mh() ? 0 : 50, {
                        vd: !0
                    }), "th");
                    return d
                }
                ec(c, a);
                c.prototype.Sj = function() {
                    var b = this;
                    this.scrolling = !0;
                    la(this.l, this.yh);
                    this.yh = eb(this.l, function() {
                        b.scrolling = !1
                    }, 150)
                };
                c.prototype.Zj = function(b) {
                    var d = this,
                        e = "touchcancel" === b.type || "touchend" === b.type;
                    b.changedTouches && 0 < b.changedTouches.length && ia(function(f) {
                        var g = d.mj(f);
                        f.__ym_touch_id = g;
                        e && delete d.Ie[f.identifier]
                    }, Yb(b.changedTouches));
                    "touchmove" === b.type ? this.scrolling ? this.ld(b) : this.Yj(b, this.J.stamp()) : this.ld(b)
                };
                c.prototype.mj = function(b) {
                    this.Ie[b.identifier] || (this.Ie[b.identifier] = Eg());
                    return this.Ie[b.identifier]
                };
                c.prototype.ld =
                    function(b, d) {
                        void 0 === d && (d = this.J.stamp());
                        var e = b.type,
                            f = qa(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, Yb(b.changedTouches));
                        0 < f.length && this.J.da("event", {
                            touches: f,
                            target: this.ia(b.target)
                        }, e, d)
                    };
                return c
            }(de),
            ov = function(a) {
                function c(b, d, e) {
                    b = a.call(this, b, d, e) || this;
                    b.Ma.push([
                        ["load"], b.Hj, b.l.document
                    ]);
                    return b
                }
                ec(c, a);
                c.prototype.Hj = function(b) {
                    b = b.target;
                    "IMG" === pb(b) && b.getAttribute("srcset") && this.J.da("mutation", {
                        target: this.ia(b),
                        attributes: {
                            src: b.currentSrc
                        }
                    }, "ac")
                };
                return c
            }(de),
            pv = function(a) {
                function c(b, d, e) {
                    d = a.call(this, b, d, e) || this;
                    d.Lh = 1;
                    d.eb = new un(b);
                    d.Id = d.R.K(d.Id, "z");
                    return d
                }
                ec(c, a);
                c.prototype.start = function() {
                    if (this.kh()) {
                        a.prototype.start.call(this);
                        this.Id();
                        var b = this.Ob.F(F(this.l, "visualViewport"), ["resize"], this.eb.Nd(this.Id, 10));
                        this.yc.push(b)
                    }
                };
                c.prototype.stop = function() {
                    a.prototype.stop.call(this);
                    this.eb.flush()
                };
                c.prototype.Id = function() {
                    var b = this.kh();
                    b && b !== this.Lh && (this.Lh = b, this.Uj(b))
                };
                c.prototype.kh = function() {
                    var b = jf(this.l);
                    return b ? b[2] : null
                };
                c.prototype.Uj = function(b) {
                    var d = mj(this.l);
                    this.J.da("event", {
                        x: d.x,
                        y: d.y,
                        level: b
                    }, "zoom")
                };
                return c
            }(de),
            im, vn = {
                91: "super",
                93: "super",
                224: "super",
                18: "alt",
                17: "ctrl",
                16: "shift",
                9: "tab",
                8: "backspace",
                46: "delete"
            },
            br = {
                "super": 1,
                Vk: 2,
                alt: 3,
                shift: 4,
                ol: 5,
                "delete": 6,
                Ok: 6
            },
            qv = [4, 9, 8, 32, 37, 38, 39, 40, 46],
            cr = (im = {}, im["1"] = {
                91: "&#8984;",
                93: "&#8984;",
                224: "&#8984;",
                18: "&#8997;",
                17: "&#8963;",
                16: "&#8679;",
                9: "&#8677;",
                8: "&#9003;",
                46: "&#9003;"
            }, im["2"] = {
                91: "&#xff;",
                93: "&#xff;",
                224: "&#xff;",
                18: "Alt",
                17: "Ctrl",
                16: "Shift",
                9: "Tab",
                8: "Backspace",
                46: "Delete"
            }, im.Dj = {
                32: "SPACEBAR",
                37: "&larr;",
                38: "&uarr;",
                39: "&rarr;",
                40: "&darr;",
                13: "Enter"
            }, im),
            rv = /flash/,
            sv = /ym-disable-keys/,
            tv = /^&#/,
            uv = function(a) {
                function c(b, d, e) {
                    d = a.call(this, b, d, e) || this;
                    d.sc = {};
                    d.Db = 0;
                    d.rb = [];
                    d.Hh = [];
                    d.Pd = 0;
                    d.th = 0;
                    d.Ma.push([
                        ["keydown"], d.nj
                    ]);
                    d.Ma.push([
                        ["keyup"], d.oj
                    ]);
                    d.Hi = -1 !== Je(F(b, "navigator.appVersion") || "", "Mac") ? "1" : "2";
                    d.ie = d.R.K(d.ie, "v");
                    d.kf = d.R.K(d.kf, "ec");
                    d.Ae = d.R.K(d.Ae,
                        "sk");
                    d.wf = d.R.K(d.wf, "gk");
                    d.Zf = d.R.K(d.Zf, "sc");
                    d.Hd = d.R.K(d.Hd, "cc");
                    d.reset = d.R.K(d.reset, "r");
                    d.ye = d.R.K(d.ye, "rs");
                    return d
                }
                ec(c, a);
                c.prototype.nj = function(b) {
                    if (this.ie(b) && !this.zj(b)) {
                        var d = b.keyCode;
                        b.repeat || this.sc[d] || (this.sc[b.keyCode] = !0, vn[b.keyCode] && !this.Db ? (this.Db += 1, this.Zf(b), this.reset(300)) : this.Db ? (this.Oi(), this.Vf(b), this.kf()) : (this.reset(), this.Vf(b)))
                    }
                };
                c.prototype.oj = function(b) {
                    if (this.ie(b)) {
                        var d = b.keyCode,
                            e = vn[b.keyCode];
                        this.sc[b.keyCode] && (this.sc[d] = !1);
                        e &&
                            this.Db && (this.Db = 0, this.sc = {});
                        1 === this.rb.length && (b = this.rb[0], Ia(b.keyCode, qv) && (this.Ae([b], !0), this.reset()));
                        this.rb = fb(ca(S("keyCode"), wc(d), yh), this.rb);
                        la(this.l, this.Pd)
                    }
                };
                c.prototype.ie = function(b) {
                    var d = this.l.document.activeElement;
                    d = d && "OBJECT" === d.nodeName && rv.test(d.getAttribute("type") || "");
                    b = b.target;
                    if (!b) return !d;
                    b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && sv.test(b.className);
                    return !d && !b
                };
                c.prototype.kf = function() {
                    this.Hh = this.rb.slice(0);
                    la(this.l, this.Pd);
                    this.Pd = eb(this.l, aa(this.Hh, Ea(this.Ae, this)), 0, "e.c")
                };
                c.prototype.Ae = function(b, d) {
                    void 0 === d && (d = !1);
                    if (1 < b.length || d) {
                        var e = this.wf(b);
                        this.J.da("event", {
                            keystrokes: e
                        }, "keystroke")
                    }
                };
                c.prototype.wf = function(b) {
                    var d = this;
                    b = qa(function(e) {
                        e = e.keyCode;
                        var f = vn[e],
                            g = d.hj(e);
                        return {
                            id: e,
                            key: g,
                            isMeta: !!f && tv.test(g),
                            modifier: f
                        }
                    }, b);
                    return Og(function(e, f) {
                        return (br[e.modifier] || 100) - (br[f.modifier] || 100)
                    }, b)
                };
                c.prototype.hj = function(b) {
                    return cr[this.Hi][b] || cr.Dj[b] || String.fromCharCode(b)
                };
                c.prototype.Vf =
                    function(b) {
                        Ia(b, this.rb) || this.rb.push(b)
                    };
                c.prototype.Zf = function(b) {
                    this.Vf(b);
                    this.Hd()
                };
                c.prototype.Hd = function() {
                    this.Db ? eb(this.l, this.Hd, 100) : this.rb = []
                };
                c.prototype.Oi = function() {
                    la(this.l, this.th)
                };
                c.prototype.reset = function(b) {
                    b ? this.th = eb(this.l, Ea(this.ye, this), b) : this.ye()
                };
                c.prototype.ye = function() {
                    this.Db = 0;
                    this.rb = [];
                    this.sc = {};
                    la(this.l, this.Pd)
                };
                c.prototype.zj = function(b) {
                    return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === vn[b.keyCode] : !1
                };
                return c
            }(de),
            hs = ["sr", "sd", "\u043d"],
            vv = /allow-same-origin/,
            wv = function(a) {
                function c(b, d, e) {
                    d = a.call(this, b, d, e) || this;
                    d.pd = [];
                    d.rf = {};
                    d.Mf = d.R.K(d.Mf, "fi");
                    d.Nf = d.R.K(d.Nf, "sd");
                    d.Of = d.R.K(d.Of, "src");
                    d.Aa = new b.MutationObserver(d.Of);
                    return d
                }
                ec(c, a);
                c.prototype.start = function() {
                    a.prototype.start.call(this);
                    this.J.hd().Jd && this.J.$a().F("iframe", "NA:", Ea(this.Mf, this));
                    this.J.hh().sf().F(["sdr"], Ea(this.Nf, this))
                };
                c.prototype.stop = function() {
                    a.prototype.stop.call(this);
                    ia(function(b) {
                        b.J.stop()
                    }, this.pd)
                };
                c.prototype.Of = function(b) {
                    var d = b.pop().target;
                    if (b = cd(function(f) {
                            return f.kg === d
                        }, this.pd)) {
                        this.pd = fb(function(f) {
                            return f.kg !== d
                        }, this.pd);
                        var e = b.J.tf();
                        try {
                            b.J.stop()
                        } catch (f) {}
                        this.Md(d, e)
                    }
                };
                c.prototype.Mf = function(b) {
                    if (b) {
                        var d = b.data.node;
                        this.Aa.observe(d, {
                            attributes: !0,
                            attributeFilter: ["src"]
                        });
                        this.Md(d, b.data.id)
                    }
                };
                c.prototype.Md = function(b, d) {
                    var e = this;
                    this.yj(b) && vg(this.l, b)(Rc(sa, function() {
                        var f = e.J.Md(b.contentWindow, d);
                        e.pd.push({
                            J: f,
                            kg: b
                        })
                    }))
                };
                c.prototype.Nf = function(b) {
                    var d =
                        this,
                        e = b.frameId;
                    b = b.data;
                    this.rf[e] || (this.rf[e] = {
                        data: []
                    });
                    var f = this.rf[e];
                    f.data = f.data.concat(b);
                    this.l.isNaN(f.hf) && ia(function(g) {
                        "page" === g.type && (f.hf = g.data.recordStamp - d.J.ih())
                    }, f.data);
                    this.l.isNaN(f.hf) || (this.J.qa(qa(function(g) {
                        g.stamp += f.hf;
                        g.stamp = d.l.Math.max(0, g.stamp);
                        return g
                    }, f.data)), f.data = [])
                };
                c.prototype.yj = function(b) {
                    var d = b.getAttribute("src"),
                        e = b.getAttribute("sandbox");
                    return b.getAttribute("_ym_ignore") || e && !e.match(vv) || d && "about:blank" !== d && (d = Af(this.l, d).host) &&
                        bb(this.l).host !== d ? !1 : F(b, "contentWindow.location.href")
                };
                return c
            }(de),
            xv = V(function(a) {
                var c = F(a, "sessionStorage");
                if (!c) return null;
                try {
                    var b = c.getItem("__ym_tab_guid");
                    c = !1;
                    var d = F(a, "opener.sessionStorage");
                    try {
                        c = !!d && b === d.getItem("__ym_tab_guid")
                    } catch (e) {
                        c = !0
                    }
                    if (!b || c) b = Eg(), a.sessionStorage.setItem("__ym_tab_guid", b);
                    return b
                } catch (e) {
                    return null
                }
            }),
            yv = function(a) {
                function c(b, d, e) {
                    b = a.call(this, b, d, e) || this;
                    b.Xf = b.R.K(b.Xf, "ps");
                    return b
                }
                ec(c, a);
                c.prototype.start = function() {
                    this.J.$a().ce({
                        nodes: [this.l.document.documentElement],
                        Be: this.Xf
                    })
                };
                c.prototype.Xf = function(b) {
                    var d = this.J.jj(),
                        e = d.cj(),
                        f = bb(this.l),
                        g = f.host,
                        h = f.protocol;
                    f = f.pathname;
                    var l = me(this.l),
                        n = l[0];
                    l = l[1];
                    this.J.da("page", {
                        content: qa(function(x) {
                            x.node = void 0;
                            return x
                        }, b),
                        base: e || "",
                        hasBase: !!e,
                        viewport: {
                            width: n,
                            height: l
                        },
                        title: this.l.document.title,
                        doctype: d.ej() || "",
                        address: this.l.location.href,
                        ua: this.l.navigator.userAgent,
                        referrer: this.l.document.referrer,
                        screen: {
                            width: this.l.screen.width,
                            height: this.l.screen.height
                        },
                        location: {
                            host: g,
                            protocol: h,
                            path: f
                        },
                        recordStamp: this.J.ih(),
                        tabId: xv(this.l)
                    }, "page", 0)
                };
                return c
            }(de),
            zv = ["addRule", "removeRule", "insertRule", "deleteRule"],
            Vo = [
                [function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Vb = {};
                        b.qd = {};
                        b.Zg = 0;
                        b.pe = b.R.K(b.pe, "a");
                        b.zc = b.R.K(b.zc, "sr");
                        b.qe = b.R.K(b.qe, "r");
                        b.qa = b.R.K(b.qa, "d");
                        return b
                    }
                    ec(c, a);
                    c.prototype.start = function() {
                        var b = this.J.$a();
                        b.F("style", "NA:", this.pe);
                        b.F("style", "NR:", this.qe);
                        this.qa()
                    };
                    c.prototype.stop = function() {
                        var b = this;
                        a.prototype.stop.call(this);
                        var d = this.J.$a();
                        d.ea("style", "NA:", this.pe);
                        d.ea("style", "NR:", this.qe);
                        this.qa();
                        la(this.l, this.Zg);
                        ia(function(e) {
                            b.Vb[e].sheet && b.uh(b.Vb[e].sheet)
                        }, zb(this.Vb));
                        this.Vb = {}
                    };
                    c.prototype.qa = function() {
                        var b = this;
                        ia(function(d) {
                            var e = d[0];
                            d = d[1];
                            if (d.length) {
                                for (var f = [], g = d[0].stamp, h = [], l = 0; l < d.length; l += 1) {
                                    var n = d[l],
                                        x = n.stamp;
                                    delete n.stamp;
                                    x <= g + 50 ? f.push(n) : (h.push(f), g = x, f = [n])
                                }
                                f.length && h.push(f);
                                h.length && ia(function(I) {
                                    b.J.da("event", {
                                        target: Nc(e),
                                        changes: I
                                    }, "stylechange", g)
                                }, h);
                                delete b.qd[e]
                            }
                        }, $b(this.qd));
                        this.Zg = eb(this.l, this.qa, 100)
                    };
                    c.prototype.zc = function(b, d, e, f, g) {
                        void 0 === f && (f = "");
                        void 0 === g && (g = -1);
                        this.qd[b] || (this.qd[b] = []);
                        this.qd[b].push({
                            op: d,
                            style: f,
                            index: g,
                            stamp: e
                        })
                    };
                    c.prototype.Nj = function(b, d) {
                        var e = this,
                            f = b.addRule,
                            g = b.removeRule,
                            h = b.insertRule,
                            l = b.deleteRule;
                        Da(f) && (b.addRule = function(n, x, I) {
                            e.zc(d, "a", e.J.stamp(), n + "{" + x + "}", I);
                            return f.call(b, n, x, I)
                        });
                        Da(g) && (b.removeRule = function(n) {
                            e.zc(d, "r", e.J.stamp(), "", n);
                            return g.call(b, n)
                        });
                        Da(h) && (b.insertRule = function(n, x) {
                            e.zc(d,
                                "a", e.J.stamp(), n, x);
                            return h.call(b, n, x)
                        });
                        Da(l) && (b.deleteRule = function(n) {
                            e.zc(d, "r", e.J.stamp(), "", n);
                            return l.call(b, n)
                        })
                    };
                    c.prototype.uh = function(b) {
                        var d = this;
                        ia(function(e) {
                            var f = d.l.CSSStyleSheet.prototype[e];
                            Da(f) && (b[e] = Ea(f, b))
                        }, zv)
                    };
                    c.prototype.Xi = function(b) {
                        try {
                            return b.cssRules || b.rules
                        } catch (d) {
                            return null
                        }
                    };
                    c.prototype.pe = function(b) {
                        var d = b.data;
                        b = d.id;
                        d = d.node;
                        if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                            var e = d.sheet,
                                f = this.Xi(e);
                            if (f && f.length) {
                                for (var g = [], h = 0; h < f.length; h +=
                                    1) g.push({
                                    style: f[h].cssText,
                                    index: h,
                                    op: "a"
                                });
                                this.J.da("event", {
                                    changes: g,
                                    target: b
                                }, "stylechange")
                            }
                            this.Nj(e, b);
                            this.Vb[b] = d
                        }
                    };
                    c.prototype.qe = function(b) {
                        b = b.data.id;
                        var d = this.Vb[b];
                        d && (delete this.Vb[b], d.sheet && this.uh(d.sheet))
                    };
                    return c
                }(de), "ss"],
                [$u, "in"],
                [Xu, "mu"],
                [av, "r"],
                [bv, "sc"],
                [dv, "mo"],
                [fv, "f"],
                [kv, "se"],
                [lv, "wf"],
                [nv, "t"],
                [ov, "src"],
                [pv, "z"],
                [uv, "ks"]
            ];
        Vo.push([wv, "if"]);
        Vo.push([yv, "pa"]);
        var Av = V(function(a) {
                var c = a.document;
                return {
                    xf: function() {
                        if (c.scrollingElement) return c.scrollingElement;
                        var b = 0 === xe(c.compatMode, "CSS1") ? c.documentElement : c.body;
                        return F(c, "documentElement.scrollHeight") >= F(c, "body.scrollHeight") ? b : null
                    },
                    ij: function() {
                        var b = a.screen;
                        if (!b) return 0;
                        var d = cd(aa(b, F), ["orientation", "mozOrientation", "msOrientation"]);
                        return F(b, d + ".angle") || 0
                    },
                    al: aa(a, Cd),
                    mh: aa(a, qm),
                    $k: aa(a, Em)
                }
            }),
            Bv = function() {
                function a(c, b) {
                    var d = this;
                    this.kd = 0;
                    this.ff = [];
                    this.jd = null;
                    this.ab = this.rd = this.Gh = !1;
                    this.recordStamp = 0;
                    this.stopped = !1;
                    this.jj = function() {
                        return d.page
                    };
                    this.tf = function() {
                        return d.kd
                    };
                    this.ih = function() {
                        return d.recordStamp
                    };
                    this.gj = function() {
                        return d.Ob
                    };
                    this.hh = function() {
                        return d.jd
                    };
                    this.$a = function() {
                        return d.Ef
                    };
                    this.stamp = function() {
                        return d.cg ? d.l.Math.max(d.cg(nb) - d.recordStamp, 0) : 0
                    };
                    this.hd = function() {
                        return d.options
                    };
                    this.qc = function() {
                        return d.Mi
                    };
                    this.da = function(f, g, h, l) {
                        void 0 === l && (l = d.stamp());
                        f = d.fj(f, g, h, l);
                        d.qa(f)
                    };
                    this.fj = function(f, g, h, l) {
                        void 0 === l && (l = d.stamp());
                        return {
                            type: f,
                            data: g,
                            stamp: l,
                            frameId: d.kd,
                            event: h
                        }
                    };
                    this.qa = function(f) {
                        f = Ja(f) ? f : [f];
                        d.Gh &&
                            !d.rd ? d.ab ? (f = qa(function(g) {
                                return g.frameId ? g : na(g, {
                                    frameId: d.kd
                                })
                            }, f), d.hh().Ch(f)) : d.Ib(f) : d.ff = d.ff.concat(f)
                    };
                    this.l = c;
                    var e = jd(c, this, "R");
                    this.$f = e.K(this.$f, "s");
                    this.qa = e.K(this.qa, "sd");
                    e = K(c);
                    e.C("wv2e") && ee();
                    e.D("wv2e", !0);
                    this.options = b;
                    this.Ob = Qb(c);
                    this.Ef = new Yu(this.l, b);
                    this.Mi = Av(c);
                    this.ah = qa(function(f) {
                        return new f[0](c, d, f[1])
                    }, Vo);
                    this.uj();
                    this.page = zj(this.l);
                    this.$f()
                }
                a.prototype.start = function(c) {
                    this.Gh = !0;
                    this.Ib = c;
                    this.zh()
                };
                a.prototype.stop = function() {
                    this.stopped ||
                        (this.stopped = !0, Uo(this.l) && (ia(function(c) {
                            return c.stop()
                        }, this.ah), this.Ef.stop(), this.jd && this.jd.stop(), this.ab || this.da("event", {}, "eof")))
                };
                a.prototype.Md = function(c, b) {
                    var d = new a(c, na({}, this.options, {
                        frameId: b
                    }));
                    d.start(sa);
                    return d
                };
                a.prototype.uj = function() {
                    var c = this;
                    this.ab = !!this.options.frameId;
                    this.kd = this.options.frameId || 0;
                    this.rd = !this.ab;
                    var b = this.options.Kh || [];
                    b.push(bb(this.l).host);
                    this.jd = Vj(this.l, this, b);
                    b = this.jd.sf();
                    Cd(this.l) ? this.rd && b.F(["i"], function(d) {
                        c.ab =
                            d.ab;
                        c.rd = !1;
                        d.frameId && (c.kd = d.frameId);
                        c.zh()
                    }) : this.rd = this.ab = !1
                };
                a.prototype.zh = function() {
                    var c = fg(this.ff);
                    this.qa(c)
                };
                a.prototype.$f = function() {
                    this.cg = Uk(this.l);
                    this.recordStamp = this.cg(nb);
                    ia(function(c) {
                        c.start()
                    }, this.ah);
                    this.Ef.start()
                };
                return a
            }(),
            Cv = function() {
                return function(a, c, b) {
                    var d = this;
                    this.Ve = this.md = !1;
                    this.Tb = [];
                    this.qh = [];
                    this.dh = [];
                    this.send = function(e, f, g) {
                        e = d.sender(e, d.df);
                        f && g && e.then(f, g);
                        return e
                    };
                    this.ag = function(e, f, g) {
                        return new wa(function(h, l) {
                            e.push([f, h,
                                l, g
                            ])
                        })
                    };
                    this.rj = function() {
                        d.Tb = Og(function(g, h) {
                            return g[3].partNum - h[3].partNum
                        }, d.Tb);
                        var e = Oa(function(g, h, l) {
                                h = h[3];
                                return g && l + 1 === h.partNum
                            }, !0, d.Tb),
                            f = !!d.Tb[d.Tb.length - 1][3].end;
                        return e && f
                    };
                    this.pf = function(e) {
                        zl(d.l, e.slice(), function(f) {
                            d.send(f[0], f[1], f[2])
                        }, 20, "s.w2.sf.fes");
                        fg(e)
                    };
                    this.Yi = function() {
                        d.Ve || (d.Ve = !0, d.pf(d.qh), d.pf(d.dh))
                    };
                    this.Qi = function(e) {
                        return Oa(function(f, g) {
                            var h = "page" === g.type && !g.frameId,
                                l = "eof" === g.data.type || "eof" === g.event,
                                n = h && !!g.partNum;
                            return {
                                af: f.af ||
                                    n,
                                $e: f.$e || h,
                                Ze: f.Ze || l
                            }
                        }, {
                            $e: !1,
                            Ze: !1,
                            af: !1
                        }, e)
                    };
                    this.pj = function(e, f, g) {
                        g ? (e = d.ag(d.Tb, e, f[0]), d.rj() && (d.pf(d.Tb), d.md = !0)) : (d.md = !0, e = d.send(e));
                        return e
                    };
                    this.jh = function(e, f, g) {
                        var h;
                        f = {
                            G: (h = {}, h["wv-part"] = "" + g, h["wv-type"] = d.Vj, h),
                            H: Hc(),
                            T: {
                                Z: f
                            }
                        };
                        e && f.H.D("bt", 1);
                        return f
                    };
                    this.Wi = function(e, f, g) {
                        e = d.jh(!1, e, g);
                        return d.md ? d.send(e) : d.ag(d.dh, e, f)
                    };
                    this.Ej = function(e, f, g) {
                        e = d.jh(!0, e, g);
                        if (d.md) return d.send(e);
                        var h = d.Qi(f);
                        g = h.$e;
                        var l = h.Ze;
                        h = h.af;
                        var n;
                        g && (n = d.pj(e, f, h));
                        d.Ve ? g || (n = d.send(e)) :
                            (g || (n = d.ag(d.qh, e, f)), (d.md || l) && d.Yi());
                        return n
                    };
                    this.l = a;
                    this.Vj = b;
                    this.sender = fc(a, "W", c);
                    this.df = c
                }
            }(),
            dr = V(function(a) {
                var c = K(a),
                    b = c.C("isEU");
                if (db(b)) {
                    var d = Nc(Fg(a, "is_gdpr") || "");
                    if (Ia(d, [0, 1])) c.D("isEU", d), b = !!d;
                    else if (a = pd(a).C("wasSynced"), a = F(a, "params.eu")) c.D("isEU", a), b = !!a
                }
                return b
            }, function(a) {
                return K(a).C("isEU")
            }),
            fo = pa("i.e", dr),
            Dv = pa("i.ep", function(a) {
                dr(a)
            }),
            Ev = pa("w2", function(a, c) {
                function b() {
                    h = !0
                }
                var d = K(a),
                    e = W(c);
                if (!c.Dc || pm(a) || !a.MutationObserver || !xc("Element",
                        a.Element)) return sa;
                xc("MutationObserver", a.MutationObserver) || Th(a, e).warn("w2mo");
                var f = vc(function(l, n) {
                        Ib(c, n)["catch"](l)
                    }),
                    g = vg(a)(Fo(ra([a, c], cj)))(wq(function(l) {
                        return new Bv(a, l)
                    })),
                    h = !1;
                ro([g, f])(Rc(va(a, "wv2.R.c"), function(l) {
                    var n = l[0];
                    l = l[1];
                    if (!h) {
                        b = Ea(n.stop, n);
                        var x = d.C("wv2Counter");
                        if (!$e(a, l) || x) b();
                        else if (d.D("wv2Counter", e), d.D("stopRecorder", b), l = Ie(a, "7", "6")) {
                            x = new Cv(a, c, l.type);
                            var I = $q.jg(e, "m", Ea(x.Ej, x), l, a),
                                P = $q.jg(e, "e", Ea(x.Wi, x), l, a);
                            "onpagehide" in a ? Qb(a).F(a, ["pagehide"], function(ba) {
                                ba.persisted ? (I.flush(!0), P.flush(!0)) : b()
                            }, null) : Qb(a).F(a, ["beforeunload", "unload"], b);
                            l = yj();
                            x = l.Gj;
                            P.F("ag", l.Ki);
                            P.F("p", x);
                            I.F("see", function(ba) {
                                var ka = !1;
                                ia(function(Ka) {
                                    "page" === Ka.type && (ka = !0)
                                }, ba);
                                ka && (h || P.push({
                                    type: "event",
                                    event: "fatalError",
                                    data: {
                                        code: "invalid-snapshot",
                                        ui: "p.s.f",
                                        stack: ""
                                    }
                                }), b())
                            });
                            var T = cf(function(ba) {
                                "eof" === F(ba, "data.type") || "eof" === ba.event ? (P.push(ba), I.push(ba), P.flush(!0), I.flush(!0)) : ("event" === ba.type ? P : I).push(ba)
                            });
                            eb(a, b, 864E5);
                            oc(a, function() {
                                var ba, ka;
                                fe(a, (ba = {}, ba.counterKey = e, ba.name = "webvisor", ba.data = (ka = {}, ka.version = 2, ka), ba));
                                n.start(T)
                            })
                        }
                    }
                }));
                return function() {
                    return b()
                }
            }),
            Fv = pa("w2.cs", function(a, c) {
                var b, d = W(c);
                L(a, d, (b = {}, b.webvisor = !!c.Dc, b))
            }),
            Gv = ["rt", "mf"],
            eo = V(ta, W),
            Pp = ca(Ml, Re),
            Hv = Ya("isp", function(a, c) {
                Ib(c, function(b) {
                    var d = cd(function(h) {
                        return F(b, "settings." + h)
                    }, Gv);
                    if (d && k(a)) {
                        var e = Kl(b) && !Sm(a),
                            f = eo(c);
                        na(f, {
                            Hb: d,
                            status: e ? 3 : 4
                        });
                        if (!e) {
                            e = hi(a, c, d);
                            var g = function(h) {
                                f.status = h
                            };
                            return ("mf" === d ?
                                pk : Uj)(a, c, e).then(aa(1, g))["catch"](aa(2, g))
                        }
                    }
                })["catch"](va(a, "l.isp"))
            }),
            er = pa("fbq.o", function(a, c, b) {
                var d = F(a, "fbq");
                if (d && d.callMethod) {
                    var e = function() {
                        var g = lc(arguments),
                            h = d.apply(void 0, g);
                        c(g);
                        return h
                    };
                    na(e, d);
                    b && ia(c, b);
                    a.fbq = e
                } else var f = eb(a, ra([a, c].concat(Yb(d && d.queue)), er), 1E3, "fbq.d");
                return Ea(la, null, a, f)
            }),
            Ek, Pf, Fk, Wo = (Ek = {}, Ek.add_to_wishlist = "add-to-wishlist", Ek.begin_checkout = "begin-checkout", Ek.generate_lead = "submit-lead", Ek.add_payment_info = "add-payment-info", Ek),
            Xo = (Pf = {}, Pf.AddToCart = "add-to-cart", Pf.Lead = "submit-lead", Pf.InitiateCheckout = "begin-checkout", Pf.Purchase = "purchase", Pf.CompleteRegistration = "register", Pf.Contact = "submit-contact", Pf.AddPaymentInfo = "add-payment-info", Pf.AddToWishlist = "add-to-wishlist", Pf.Subscribe = "subscribe", Pf),
            fs = (Fk = {}, Fk["1"] = Wo, Fk["2"] = Wo, Fk["3"] = Wo, Fk["0"] = Xo, Fk),
            gs = [Xo.AddToCart, Xo.Purchase],
            Iv = tb(function(a, c) {
                var b = F(c, "ecommerce"),
                    d = F(c, "event") || "";
                if (!(b = b && d && {
                        version: "3",
                        Qd: d
                    })) a: {
                    if (Ja(c) || ea(c))
                        if (b = lc(c), d = b[1], "event" ===
                            b[0] && d) {
                            b = {
                                version: "2",
                                Qd: d
                            };
                            break a
                        }
                    b = void 0
                }
                b || (b = (b = F(c, "ecommerce")) && {
                    version: "1",
                    Qd: Ha(",", zb(b))
                });
                b && a(b)
            }),
            Jv = pa("ag.e", function(a, c) {
                if ("0" === c.$) {
                    var b = [],
                        d = va(a, "ag.s", ra([Va, b], ia));
                    Ib(c, function(e) {
                        if (F(e, "settings.auto_goals") && Wb(a, c) && (e = Zm(a, c, "autogoal").reachGoal)) {
                            e = ra([e, c.fd], xj);
                            var f = Iv(e);
                            e = ra([a, e], Se);
                            b.push(er(a, e));
                            b.push(Yp(a, "dataLayer", function(g) {
                                g.Aa.F(f)
                            }))
                        }
                    });
                    return d
                }
            }),
            Kv = /[^\d.,]/g,
            Lv = /[.,]$/,
            es = pa("ep.pp", function(a, c) {
                if (!c) return 0;
                a: {
                    var b = c.replace(Kv,
                        "").replace(Lv, "");
                    var d = "0" === b[b.length - 1];
                    for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                        var f = b[e - 1];
                        if (Ia(f, [",", "."])) {
                            d = f;
                            break a
                        }
                    }
                    d = ""
                }
                b = d ? c.split(d) : [c];
                d = d ? b[1] : "00";
                b = parseFloat(Um(b[0]) + "." + Um(d));
                d = Math.pow(10, 8) - .01;
                a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                return b
            }),
            Mv = [
                [
                    ["EUR", "\u20ac"], "978"
                ],
                [
                    ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                ],
                [
                    ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                ],
                ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "),
                    "398"
                ],
                [
                    ["GBP", "\u00a3", "UKL"], "826"
                ],
                ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
            ],
            Nv = V(function(a) {
                return new RegExp(Ha("|", a), "i")
            }),
            Ov = pa("ep.cp", function(a) {
                if (!a) return "643";
                var c = tt(a);
                return (a = cd(function(b) {
                    return Nv(b[0]).test(c)
                }, Mv)) ? a[1] : "643"
            }),
            Pv = V(function() {
                function a() {
                    var l = h + "0",
                        n = h + "1";
                    f[l] ? f[n] ? (h = h.slice(0, -1), --g) : (e[n] = b(8), f[n] = 1) : (e[l] = b(8), f[l] = 1)
                }

                function c() {
                    var l = h +
                        "1";
                    f[h + "0"] ? f[l] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                }

                function b(l) {
                    void 0 === l && (l = 1);
                    var n = d.slice(g, g + l);
                    g += l;
                    return n
                }
                for (var d = Ha("", bj("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")),
                        e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                return e
            }),
            cs = pa("ep.dec", function(a, c) {
                if (!c || pm(a)) return [];
                var b = bj(c),
                    d = b[1],
                    e = b[2],
                    f = b.slice(3);
                if (2 !== Ql(b[0])) return [];
                b = Pv();
                f = Ha("", f);
                d = Ql(d + e);
                for (var g = e = "", h = 0; g.length < d && f[h];) e += f[h], b[e] && (g += String.fromCharCode(Ql(b[e])), e = ""), h += 1;
                b = Ye(a, ic(g));
                return Ja(b) ? qa(sp, b) : []
            }),
            ds = pa("ep.ent", function(a, c, b) {
                a = "" + nc(a, 10, 99);
                b = "" + 100 * c + b + a;
                if (16 < ea(b)) return "";
                b = Op("0", 16, b);
                c = b.slice(0, 8);
                b = b.slice(-8);
                c = (+c ^ 92844).toString(35);
                b = (+b ^
                    92844).toString(35);
                return "" + c + "z" + b
            }),
            fr = ca(gh, Ov),
            gr = pa("ep.ctp", function(a, c, b, d) {
                var e = fr(a, b),
                    f = Mb(a, d);
                aj(a, c, e, f);
                xc("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                    var g = fr(a, b),
                        h = Mb(a, d);
                    if (e !== g || f !== h) e = g, f = h, aj(a, c, e, f)
                })).observe(a.document.body, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    characterData: !0
                })
            }),
            Qv = pa("ep.chp", function(a, c, b, d, e) {
                b && wj(a, c);
                return d || e ? Qb(a).F(a.document, ["click"], va(a, "ep.chp.cl", ra([a, c, d, e], yg))) : sa
            }),
            Vv = pa("ep.i", function(a, c) {
                if (Rg(a)) return $i(a,
                    c).then(function(b) {
                    var d = b.Sh,
                        e = d[0],
                        f = d[1],
                        g = d[2],
                        h = d[3],
                        l = d[4],
                        n = d[5],
                        x = d[6],
                        I = d[7],
                        P = d[8],
                        T = d[9],
                        ba = d[10],
                        ka = d[11],
                        Ka = d[12],
                        Ua = d[13],
                        Wa = d[14],
                        Tb = d[15];
                    if (!b.isEnabled) return wa.resolve(sa);
                    var Bc = Df(a, e),
                        ah = Df(a, h),
                        No = Df(a, x),
                        Rv = Df(a, P),
                        Sv = "" + e + f + g === "" + h + l + n;
                    return new wa(function(Tv, Uv) {
                        vg(a)(Rc(Uv, function() {
                            Bc && gr(a, c, f, g, ba, ka, Ka);
                            ah && !Sv && gr(a, c, l, n, Ua, Wa, Tb);
                            Tv(Qv(a, c, No || Rv, I, T))
                        }))
                    })
                })
            }),
            Zr = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
            Wv = pa("cc.i", function(a,
                c) {
                var b = ra([a, c], qe);
                b = ra([a, b, 300, void 0], eb);
                Ib(c, b)
            }),
            Xv = aa("9-d5ve+.r%7", Za),
            Yv = pa("ad", function(a, c) {
                if (!c.Ka) {
                    var b = K(a);
                    if (!b.C("adBlockEnabled")) {
                        var d = function(x) {
                                Ia(x, ["2", "1"]) && b.D("adBlockEnabled", x)
                            },
                            e = qk(a),
                            f = e.C("isad");
                        if (f) d(f);
                        else {
                            var g = aa("adStatus", b.D),
                                h = function(x) {
                                    x = x ? "1" : "2";
                                    d(x);
                                    g("complete");
                                    e.D("isad", x, 1200);
                                    return x
                                },
                                l = fc(a, "adb", c);
                            if (!b.C("adStatus")) {
                                g("process");
                                var n = "metrika/a" + Xv().replace(/[^a-v]+/g, "") + "t.gif";
                                gi(a, function() {
                                    return l({
                                        ra: {
                                            ya: n
                                        }
                                    }).then(aa(!1,
                                        h))["catch"](aa(!0, h))
                                })
                            }
                        }
                    }
                }
            }),
            Zv = pa("pr.p", function(a, c) {
                var b, d;
                if (pl(a)) {
                    var e = fc(a, "5", c),
                        f = Hc((b = {}, b.pq = 1, b.ar = 1, b));
                    e({
                        H: f,
                        G: (d = {}, d["page-url"] = bb(a).href, d["page-ref"] = F(a, "document.referrer") || "", d)
                    }, c)["catch"](va(a, "pr.p.s"))
                }
            }),
            Np = !1,
            $v = pa("fid", function(a) {
                var c, b = sa;
                if (!Da(a.PerformanceObserver)) return b;
                var d = K(a);
                if (d.C("fido")) return b;
                d.D("fido", !0);
                var e = new a.PerformanceObserver(va(a, "fid", function(f) {
                    f = f.getEntries()[0];
                    d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                    b()
                }));
                b = function() {
                    return e.disconnect()
                };
                try {
                    e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                } catch (f) {}
                return b
            }),
            aw = V(ca(S("performance.memory.jsHeapSizeLimit"), vb("concat", ""))),
            bw = ["availWidth", "availHeight", "availTop"],
            cw = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
            dw = ["webgl", "experimental-webgl"],
            bs = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
            co = aa(Ec("ccf"), fa),
            as = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
            Mp = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
            $r = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
            Yo = V(function(a, c) {
                var b = K(a),
                    d = pd(a),
                    e = [],
                    f = ra([a, c, b, d], mg);
                Tk(a) || nf(a, "14.1") || e.push(ra([Sf, "pp", ""], f));
                var g = !Jq(a) || Yi(a, 68);
                g && e.push(ra([Lh, "pu", ""], f));
                !g || d.vc || k(a) || (e.push(ra([Vc, "zzlc", "na"], f)), e.push(ra([di, "cc", ""], f)));
                return e.length ? {
                    Ca: function(h, l) {
                        if (0 === b.C("isEU")) try {
                            ia(t, e)
                        } catch (n) {}
                        l()
                    },
                    M: function(h, l) {
                        var n = h.H;
                        if (n && 0 === b.C("isEU")) try {
                            ia(vc(n), e)
                        } catch (x) {}
                        l()
                    }
                } : {}
            }, ca(Jd, W)),
            ew = ca(function(a) {
                return (a = F(a, "navigator.plugins")) && ea(a) ? ca(Yb, ac, tr(function(c, b) {
                    return c.name > b.name ? 1 : 2
                }), cf(xf))(a) : ""
            }, Sl(",")),
            fw = function(a) {
                return function(c) {
                    var b = Ge(c);
                    if (!b) return "";
                    b = b("canvas");
                    var d = [],
                        e = a(),
                        f = e.Vh;
                    e = e.Qh;
                    try {
                        var g = vb("getContext", b);
                        d = qa(ca(Za, g), e)
                    } catch (h) {
                        return ""
                    }
                    return (g = cd(Za, d)) ? f(c, {
                        canvas: b,
                        Nh: g
                    }) : ""
                }
            }(function() {
                return {
                    Qh: dw,
                    Vh: Jl
                }
            }),
            Yr = ["name", "lang", "localService",
                "voiceURI", "default"
            ],
            gw = pa("ice", function(a, c, b) {
                if (c = Wb(a, c))
                    if (b = oe(a, b)) return bi(a, c, b), !0
            }),
            hw = pa("ice", function(a, c, b) {
                if (c = Wb(a, c))
                    if (b = oe(a, b)) return Sa(a, b.xj).then(ra([a, c, b], bi), va(a, "ice.s")), !0
            }),
            iw = ["text", "email", "tel"],
            jw = ["cc-", "name", "shipping"],
            kw = pa("icei", function(a, c) {
                if (Eq(a)) {
                    var b = !1,
                        d = sa,
                        e = sa;
                    Ib(c, function(f) {
                        if (!(fo(a) || F(f, "settings.eu") || b)) {
                            f = F(f, "settings.cf") ? hw : gw;
                            var g = ra([a, c], f),
                                h = function(l) {
                                    return fj(a, l) || !Ia(l.type, iw) || Oc(cc, qa(aa(l.autocomplete, od), jw)) ?
                                        !1 : !0
                                };
                            d = vj(a, "input", ["blur"], g, h);
                            e = vj(a, "form", ["submit"], function(l) {
                                var n = l.target;
                                if (n) {
                                    n = id("input", n);
                                    var x = 0;
                                    ia(function(I) {
                                        20 <= x || !h(I) || g({
                                            target: I,
                                            isTrusted: l.isTrusted,
                                            Gf: !0
                                        }) && (x += 1)
                                    }, n)
                                }
                            })
                        }
                    });
                    return function() {
                        b = !0;
                        d();
                        e()
                    }
                }
            }),
            Lp, lw = pa("p.ai", function(a, c) {
                if (Tk(a) || ao(a)) return Ib(c, function(b) {
                    var d;
                    if (b = F(b, "settings.sbp")) return Sj(a, na({}, b, (d = {}, d.c = c.id, d)), 10)
                })
            }),
            mw = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "),
            hr = Ya("uah", function(a) {
                if (!xc("getHighEntropyValues",
                        F(a, "navigator.userAgentData.getHighEntropyValues"))) return wa.reject("0");
                try {
                    return a.navigator.userAgentData.getHighEntropyValues(mw).then(function(c) {
                        if (!wb(c)) throw "2";
                        return c
                    }, function() {
                        throw "1";
                    })
                } catch (c) {
                    return wa.reject("3")
                }
            }),
            ir = new RegExp(Ha("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
                "\\$&")),
            Vr = V(function(a) {
                var c = Ue(a);
                return (c = ir.test(c)) ? wa.resolve(c) : hr(a).then(function(b) {
                    try {
                        return Oa(function(d, e) {
                            return d || ir.test(e.brand)
                        }, !1, b.brands)
                    } catch (d) {
                        return !1
                    }
                }, aa(!1, Za))
            }),
            Wi = ["0", "1", "2", "3"],
            mk = Wi[0],
            $n = Wi[1],
            nw = Wi[2],
            jr = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"],
            Kp = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(jr),
            Zn = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(jr).concat(["28",
                "29", "30", "31"
            ]),
            ow = "3 13 14 31 15 16 17 28".split(" "),
            Rm = ca(cf(S("ymetrikaEvent.type")), Yg($h(Zn))),
            pw = {
                Eg: !0,
                url: "https://yastatic.net/s3/gdpr/v3/gdpr",
                ue: "",
                je: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
            },
            Wr = Ya("gdpr", function(a, c, b, d, e) {
                function f(I) {
                    c("10");
                    b.F(Kp, function(P) {
                        var T;
                        P = P.type;
                        n.Ce((T = {}, T.type = P, T));
                        I({
                            value: ai(P)
                        })
                    })
                }
                var g = void 0 === e ? pw : e;
                e = g.url;
                var h = g.ue,
                    l = g.Eg;
                g = Dc(a, g.je, d.Yg);
                var n = Tm(a, d);
                if (!n) return wa.resolve({
                    value: mk,
                    Kc: !0
                });
                if (a._yaGdprLoaded) return new wa(function(I) {
                    c("7");
                    f(I)
                });
                var x = Lc(a, {
                    src: "" + e + (l ? "" : g) + h + ".js"
                });
                return new wa(function(I, P) {
                    x ? (c("7"), x.onerror = function() {
                        var T;
                        c("9");
                        n.Ce((T = {}, T.type = "GDPR-ok-view-default", T));
                        I(null)
                    }, x.onload = aa(I, f)) : (c("9"), P(Ec("gdp.e")))
                })
            }),
            ch, Xr = (ch = {}, ch["GDPR-ok"] = "ok", ch["GDPR-ok-view-default"] = "ok-default", ch["GDPR-ok-view-detailed"] = "ok-detailed", ch["GDPR-ok-view-detailed-0"] = "ok-detailed-all", ch["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", ch["GDPR-ok-view-detailed-2"] =
                "ok-detailed-tech-analytics", ch["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", ch),
            Tr = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "),
            Jp = [],
            Ip = vb("push", Jp),
            Sr = V(function(a, c) {
                var b = c.C("gdpr");
                return Ia(b, Wi) ? "-" + b : ""
            }),
            Yn = {},
            Bp = V(Ca),
            qw = V(function() {
                var a = Oa(function(c, b) {
                    "ru" !== b && (c[b] = Ap + "." + b);
                    return c
                }, {}, tl);
                ia(function(c) {
                    a[c] = c
                }, zb(Mq));
                return a
            }),
            Or = V(function(a) {
                a = bb(a).hostname;
                return (a = cd(ca(S("1"), Fa("test"), Vb(Va)(a)), $b(Mq))) && a[0]
            }),
            kr = function(a, c) {
                return function(b, d) {
                    var e = W(d);
                    e = qw(e);
                    var f = Jh(b, e),
                        g = K(b),
                        h = Cd(b);
                    return k(b) || Xk(b) ? {} : {
                        M: function(l, n) {
                            var x = l.H,
                                I = qr(b);
                            x = !(x && x.C("pv"));
                            if (!I || h || x || !f.length) return n();
                            if (g.C("startSync")) Bp(b).push(n);
                            else {
                                g.D("startSync", !0);
                                I = ra([b, f, sa, !1], a);
                                x = $o[0];
                                if (!x) return n();
                                x(b).then(I).then(n, ca(Qh(n), va(b, c)))["catch"](sa)
                            }
                        }
                    }
                }
            }(function(a, c, b, d) {
                var e = Jb(a),
                    f = K(a),
                    g = pd(a);
                b = Ol(a, "c");
                var h = Fd(a, b);
                return Te(function(l, n) {
                    function x() {
                        var T = g.C("synced");
                        f.D("startSync", !1);
                        T && (T[n.Fg] = I, g.D("synced", T));
                        T = Bp(a);
                        ia(Va, T);
                        fg(T)
                    }
                    var I, P = h({
                        T: {
                            ma: ["sync.cook"],
                            Va: 1500
                        }
                    }, [Q.Cb + "//" + n.Qg + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                        I = e(Md);
                        x()
                    })["catch"](function() {
                        I = e(Md) - 1435;
                        x()
                    });
                    P = aa(P, Za);
                    return l.then(P)
                }, wa.resolve(), c)["catch"](va(a, "ctl"))
            }, "sy.c"),
            Qf, Nr = (Qf = {}, Qf.brands = "chu", Qf.architecture = "cha", Qf.bitness = "chb", Qf.uaFullVersion = "chf", Qf.fullVersionList = "chl", Qf.mobile = "chm", Qf.model = "cho", Qf.platform = "chp", Qf.platformVersion = "chv", Qf),
            Mr =
            V(function(a) {
                return hr(a).then(kk, Il)
            }),
            rw = Ya("ot", function(a, c) {
                if (q(a)) {
                    var b = Qb(a);
                    return Ib(c, va(a, "ot.s", function(d) {
                        if (F(d, "settings.oauth")) {
                            var e = [],
                                f = Ml(a, c);
                            e.push(b.F(a, ["message"], va(a, "ot.m", aa(f, Kf))));
                            vg(a)(Rc(sa, va(a, "ot.b", function() {
                                function g(P) {
                                    var T, ba = P.href;
                                    ba && Pi(ba, "https://oauth.yandex.ru/") && !od(ba, "_ym_uid=") && (ba = od(ba, "?") ? "&" : "?", P.href += "" + ba + he((T = {}, T._ym_uid = f, T.mc = "v", T)), b.F(P, ["click"], va(a, "ot.click", function() {
                                        var ka = "et=" + n(nb);
                                        P.href += "&" + ka
                                    })))
                                }
                                var h, l =
                                    a.document.body,
                                    n = Jb(a),
                                    x = id("a", l);
                                ia(g, x);
                                if (xc("MutationObserver", a.MutationObserver)) {
                                    x = new a.MutationObserver(va(a, "ot.m", aa(function(P) {
                                        P = P.addedNodes;
                                        for (var T = 0; T < P.length; T += 1) {
                                            var ba = P[T];
                                            "A" === ba.nodeName && g(ba)
                                        }
                                    }, ia)));
                                    var I = (h = {}, h.childList = !0, h.subtree = !0, h);
                                    x.observe(l, I);
                                    e.push(Ea(x.disconnect, x))
                                }
                            })));
                            return ra([t, e], ia)
                        }
                    }))
                }
            }),
            sw = pa("p.cta", function(a) {
                vg(a)(Rc(sa, function() {
                    var c = K(a);
                    if (ge(a.document)) {
                        var b = 0;
                        if (fl(a, Vm, "cta")) {
                            var d = sa,
                                e = function() {
                                    Pk(Vm, "cta");
                                    d();
                                    la(a, b)
                                };
                            d = Qb(a).F(a, ["message"], pa("p.cta.o", ra([a, c, e], Dg)));
                            b = eb(a, e, 1500)
                        } else c.D("cta.e", "if")
                    } else c.D("cta.e", "ns")
                }))
            }),
            Zo, Kr = "bidRequested bidAdjustment bidWon bidResponse bidTimeout auctionInit auctionEnd adRenderSucceeded adRenderFailed".split(" "),
            Lr = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"],
            Gp = (Zo = {}, Zo.netRevenue = function(a) {
                return Ta(a) ? "net" === a : !!a
            }, Zo),
            Hh = {},
            tw = pa("pj", function(a, c) {
                var b, d = Wb(a, c),
                    e = d && d.params;
                return e ? (b = {}, b.pbjs = function(f) {
                    Ja(f) && (f = fb(cc,
                        qa(function(g) {
                            if (wb(g) && g.data && g.event && (wb(g.data) || Ja(g.data))) {
                                var h = F(g, "data.args");
                                return h ? {
                                    event: g.event,
                                    data: h
                                } : g
                            }
                        }, f)), ik(f), cl(a, e))
                }, b) : sa
            }),
            Ep = Vb(Pi)("btn:"),
            Jr = Vb(Pi)("form:"),
            Ir = V(function() {
                var a = iq();
                return Oa(function(c, b) {
                    c[a[b]] = b;
                    return c
                }, {}, zb(a))
            }),
            Hr = /(\D\d*)/g,
            uw = V(ta),
            vw = cf(function(a) {
                a.patterns = qa(qh, a.patterns);
                a.price_patterns = qa(qh, a.price_patterns);
                return a
            }),
            Gr = ["ytm.click", "ytm.linkClick", "ytm.formSubmit"],
            Dp = sa,
            Fr = V(function(a, c) {
                Dp = c
            }),
            Dr = hg("c.ch", function(a,
                c, b, d) {
                d = d[b["var"]];
                if (!d) throw ub("var: " + b["var"]);
                c = "event" === d.type ? Pj(c, {
                    type: "dataLayer",
                    key: "event"
                }, void 0) : "dataLayer" === d.type ? Pj(c, d, void 0) : "cnst" === d.type ? d.value : void 0;
                d = b.target;
                a = El(a, b.fn);
                if (!a) throw ub("fn: " + b.fn);
                return a(c, d)
            }, !1),
            Er = "clientInformation globalThis this caches console cookieStore credentialless crypto customElements document documentPictureInPicture event external fence frameElement frames history indexedDB launchQueue localStorage location mozInnerScreenX mozInnerScreenY navigation navigator opener orientation origin originAgentCluster parent performance scheduler self sessionStorage sharedStorage speechSynthesis top trustedTypes visualViewport window alert atob back blur btoa cancelAnimationFrame cancelIdleCallback captureEvents clearImmediate clearInterval clearTimeout close confirm dump fetch find focus forward getComputedStyle getDefaultComputedStyle getScreenDetails getSelection matchMedia moveBy moveTo open postMessage print prompt queryLocalFonts queueMicrotask releaseEvents reportError requestAnimationFrame requestFileSystem requestIdleCallback resizeBy resizeTo scroll scrollBy scrollByLines scrollByPages scrollTo setImmediate setInterval setTimeout showDirectoryPicker showModalDialog showOpenFilePicker showSaveFilePicker sizeToContent stop structuredClone".split(" "),
            ww = V(function(a, c) {
                return Oa(function(b, d) {
                    b[d] = a[d];
                    return b
                }, {}, c)
            }),
            xw = "protocol host port path query extension fragment href".split(" "),
            ue, lr = (ue = {}, ue.access_globals = Yh, ue.access_local_storage = Yh, ue.get_cookies = Fh, ue.get_referrer = function(a, c, b) {
                return a.Ta({
                    permissionType: "referrer",
                    permissionParams: {
                        urlComponent: b || "href"
                    }
                })
            }, ue.get_url = function(a, c, b) {
                return a.Ta({
                    permissionType: "url",
                    permissionParams: {
                        urlComponent: b || "href"
                    }
                })
            }, ue.inject_hidden_iframe = hd, ue.load_script = hd, ue.logging = function(a) {
                return a.Ta({
                    permissionType: "log",
                    permissionParams: null
                })
            }, ue.read_data_layer = function(a, c, b) {
                return b ? a.Ta({
                    permissionType: "dataLayer",
                    permissionParams: {
                        key: b,
                        operation: 2
                    }
                }) : !1
            }, ue.read_title = function(a) {
                return a.Ta({
                    permissionType: "readTitle",
                    permissionParams: null
                })
            }, ue.send_pixel = hd, ue.set_cookies = Fh, ue),
            Ub, Cp = (Ub = {}, Ub.callInWindow = function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function(d) {
                        for (var e = [], f = 1; f < arguments.length; f++) e[f - 1] = arguments[f];
                        Cc(d);
                        b.checkPermission({
                            permissionType: "globals",
                            permissionParams: {
                                key: d,
                                operation: 4
                            }
                        });
                        f = F(c, d);
                        if (!Da(f)) throw ub("ca.c.wenf");
                        return f.apply(void 0, e)
                    }
                }, Ub.callLater = function(a) {
                    var c = a.l;
                    return function(b) {
                        eb(c, b, 0)
                    }
                }, Ub.copyFromDataLayer = function(a) {
                    var c = a.l,
                        b = a.ja,
                        d = a.event;
                    return function(e) {
                        if (!d) throw ub("No dataLayer data");
                        b.checkPermission({
                            permissionType: "dataLayer",
                            permissionParams: {
                                key: e,
                                operation: 2
                            }
                        });
                        return dd(c, F(d, e))
                    }
                }, Ub.copyFromWindow = function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function(d) {
                        Cc(d);
                        if (Pi(d, "on")) throw ub("rwp");
                        b.checkPermission({
                            permissionType: "globals",
                            permissionParams: {
                                operation: 2,
                                key: d
                            }
                        });
                        d = F(c, d);
                        return dd(c, d)
                    }
                }, Ub.createArgumentsQueue = function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function(d, e) {
                        function f() {
                            for (var l = 0; l < arguments.length; l++);
                            return g.push(arguments)
                        }
                        b.checkPermission({
                            permissionType: "globals",
                            permissionParams: {
                                key: d,
                                operation: 2
                            }
                        });
                        b.checkPermission({
                            permissionType: "globals",
                            permissionParams: {
                                key: d,
                                operation: 1
                            }
                        });
                        b.checkPermission({
                            permissionType: "globals",
                            permissionParams: {
                                key: e,
                                operation: 2
                            }
                        });
                        b.checkPermission({
                            permissionType: "globals",
                            permissionParams: {
                                key: e,
                                operation: 1
                            }
                        });
                        Cc(d);
                        Cc(e);
                        var g = [],
                            h = Rf(c, d);
                        h.value || (h.parent[h.we] = f);
                        h = Rf(c, e);
                        if (h.value) {
                            if (!Ja(h.value)) throw ub("ca.akna");
                            g = h.value
                        } else h.parent[h.we] = g;
                        return f
                    }
                }, Ub.createQueue = function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function(d) {
                        b.checkPermission({
                            permissionType: "globals",
                            permissionParams: {
                                key: d,
                                operation: 2
                            }
                        });
                        b.checkPermission({
                            permissionType: "globals",
                            permissionParams: {
                                key: d,
                                operation: 1
                            }
                        });
                        Cc(d);
                        var e = Rf(c, d);
                        d = e.value;
                        var f = e.parent;
                        e = e.we;
                        if (!d) f[e] = [];
                        else if (!Ja(d)) throw ub("akna");
                        return Ea(f[e].push, f[e])
                    }
                }, Ub.decodeUri = function(a) {
                    var c = a.l;
                    return function(b) {
                        try {
                            return c.decodeURI(b)
                        } catch (d) {}
                    }
                }, Ub.decodeUriComponent = function(a) {
                    var c = a.l;
                    return function(b) {
                        try {
                            return c.decodeURIComponent(b)
                        } catch (d) {}
                    }
                }, Ub.encodeUri = function(a) {
                    var c = a.l;
                    return function(b) {
                        try {
                            return c.encodeURI(b)
                        } catch (d) {}
                    }
                }, Ub.encodeUriComponent = function(a) {
                    var c = a.l;
                    return function(b) {
                        try {
                            return c.encodeURIComponent(b)
                        } catch (d) {}
                    }
                }, Ub.getCookieValues = function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function(d,
                        e) {
                        void 0 === e && (e = !0);
                        b.checkPermission({
                            permissionType: "cookies",
                            permissionParams: {
                                name: d,
                                operation: 2
                            }
                        });
                        return Oa(function(f, g) {
                            var h = Pc(g).split("="),
                                l = h[1];
                            h[0] === d && f.push(e ? sl(l) : l);
                            return f
                        }, [], c.document.cookie.split(";"))
                    }
                }, Ub.getTimestamp = function(a) {
                    var c = a.l;
                    return function() {
                        return Jb(c)(nb)
                    }
                }, Ub.getType = function(a) {
                    var c = a.l;
                    return function(b) {
                        return db(b) ? "undefined" : Kc(b) ? "null" : Gd(c, b) ? "number" : Ta(b) ? "string" : !0 === b || !1 === b ? "boolean" : Da(b) ? "function" : Ja(b) ? "array" : "object"
                    }
                }, Ub.getUrl =
                function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function(d) {
                        d = Ia(d, xw) ? d : "href";
                        b.checkPermission({
                            permissionType: "url",
                            permissionParams: {
                                urlComponent: d
                            }
                        });
                        var e = bb(c);
                        return "protocol" === d ? e.protocol : "host" === d ? e.host : "port" === d ? e.port : "path" === d ? e.pathname : "query" === d ? e.search : "fragment" === d ? e.hash : "extension" === d ? (d = e.pathname.split("."), 1 === d.length ? null : d.pop()) : e.href
                    }
                }, Ub.injectHiddenIframe = function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function(d, e) {
                        void 0 === e && (e = sa);
                        b.checkPermission({
                            permissionType: "iframe",
                            permissionParams: {
                                url: d
                            }
                        });
                        var f = Ge(c)("iframe");
                        na(f.style, {
                            display: "none",
                            width: "1px",
                            height: "1px",
                            visibility: "hidden"
                        });
                        f.src = d;
                        f.onload = function() {
                            return e()
                        };
                        f.onerror = sa;
                        ye(c).appendChild(f)
                    }
                }, Ub.JSON = function(a) {
                    var c = a.l;
                    return {
                        parse: function(b) {
                            try {
                                return c.JSON.parse("" + b)
                            } catch (d) {}
                        },
                        stringify: function(b) {
                            try {
                                return c.JSON.stringify(b)
                            } catch (d) {}
                        }
                    }
                }, Ub.loadScript = function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function(d, e, f) {
                        b.checkPermission({
                            permissionType: "loadScript",
                            permissionParams: {
                                url: d
                            }
                        });
                        var g = Da(e) ? hg("ls.ol", function() {
                                return e.apply(null)
                            }) :
                            sa,
                            h = Da(f) ? hg("ls.ol", function() {
                                return f.apply(null)
                            }) : void 0;
                        uj(c, d, g, h)
                    }
                }, Ub.localStorage = function(a) {
                    var c = a.ja,
                        b = a.l.localStorage;
                    return {
                        getItem: function(d) {
                            c.checkPermission({
                                permissionType: "localStorage",
                                permissionParams: {
                                    key: d,
                                    operation: 2
                                }
                            });
                            return b.getItem(d)
                        },
                        setItem: function(d, e) {
                            c.checkPermission({
                                permissionType: "localStorage",
                                permissionParams: {
                                    key: d,
                                    operation: 1
                                }
                            });
                            b.setItem(d, e)
                        },
                        removeItem: function(d) {
                            c.checkPermission({
                                permissionType: "localStorage",
                                permissionParams: {
                                    key: d,
                                    operation: 1
                                }
                            });
                            b.removeItem(d)
                        }
                    }
                }, Ub.logToConsole = function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function() {
                        for (var d, e = [], f = 0; f < arguments.length; f++) e[f] = arguments[f];
                        b.Ta({
                            permissionType: "log",
                            permissionParams: {
                                logLevel: 0
                            }
                        }) && (d = Iq(c)).log.apply(d, e)
                    }
                }, Ub.Math = function(a) {
                    return ww(a.l.Math, "abs floor ceil round max min pow sqrt".split(" "))
                }, Ub.Object = function(a) {
                    var c = a.l;
                    return {
                        keys: zb,
                        values: Eo,
                        freeze: c.Object.freeze,
                        entries: $b,
                        "delete": function(b, d) {
                            if (!b || !za(b, d) || Ja(b) || b === c) return !1;
                            try {
                                return delete b[d]
                            } catch (e) {
                                return !1
                            }
                        }
                    }
                },
                Ub.queryPermission = function(a) {
                    var c = a.ja;
                    return function(b, d, e) {
                        return (db(d) || Ta(d)) && za(lr, b) ? (0, lr[b])(c, b, d, e) : !1
                    }
                }, Ub.readTitle = function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function() {
                        b.checkPermission({
                            permissionType: "readTitle",
                            permissionParams: null
                        });
                        return c.document.title
                    }
                }, Ub.sendPixel = function(a) {
                    var c = a.ja,
                        b = a.l;
                    return function(d, e, f) {
                        void 0 === e && (e = sa);
                        void 0 === f && (f = sa);
                        if (!Ta(d)) throw ub("ca.p.uns");
                        c.checkPermission({
                            permissionType: "pixel",
                            permissionParams: {
                                url: d
                            }
                        });
                        Lj(b, d, e, f)
                    }
                }, Ub.setCookie =
                function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function(d, e, f, g) {
                        void 0 === f && (f = {});
                        void 0 === g && (g = !0);
                        b.checkPermission({
                            permissionType: "cookies",
                            permissionParams: {
                                name: d,
                                operation: 1,
                                options: f
                            }
                        });
                        e = g ? Nh(e) : e;
                        d = d + "=" + e + ";";
                        if (f) {
                            za(f, "domain") && (d += " Domain=" + f.domain + ";");
                            za(f, "path") && (d += " Path=" + f.path + ";");
                            za(f, "expires") && (d += " Expires=" + f.expires + ";");
                            if (za(f, "max-age")) {
                                if (!Gd(c, f["max-age"])) throw ub("ca.c.mann");
                                d += " Max-Age=" + f["max-age"] + ";"
                            }
                            if (za(f, "sameSite")) {
                                if (!Ia(f.sameSite, ["Lax", "Strict",
                                        "None"
                                    ])) throw ub("ca.c.ssuop");
                                d += " Same-Site=" + f.sameSite + ";"
                            }
                            za(f, "secure") && f.secure && (d += " Secure;")
                        }
                        c.document.cookie = d
                    }
                }, Ub.setInWindow = function(a) {
                    var c = a.l,
                        b = a.ja;
                    return function(d, e, f) {
                        void 0 === f && (f = !1);
                        b.checkPermission({
                            permissionType: "globals",
                            permissionParams: {
                                key: d,
                                operation: 1
                            }
                        });
                        Cc(d);
                        try {
                            var g = Rf(c, d),
                                h = g.parent,
                                l = g.we;
                            if (!f && za(h, l)) return !1;
                            h[l] = e;
                            return !0
                        } catch (n) {
                            return !1
                        }
                    }
                }, Ub),
            yw = ["ytm.dom", "ytm.load", "ytm.click", "ytm.linkClick", "ytm.formSubmit"],
            zw = pa("p.ips", function(a, c) {
                Ib(c,
                    function(b) {
                        (F(b, "settings.phchange") || F(b, "settings.phhide")) && Qg(a, "tag_phone", W(c), b)
                    })
            }),
            Aw = pa("p.suic", function(a, c) {
                return Ib(c, function(b) {
                    var d = mb(a);
                    if (!d.C("pic") && !Kl(b) && (b = F(b, "settings.pic"))) {
                        var e = fc(a, "pic");
                        d.D("pic", 1);
                        return e({
                            T: {
                                Vc: !1,
                                Zc: !0
                            }
                        }, [b]).then(function(f) {
                            Ta(f.kb) && (f = Ye(a, f.kb)) && (f = F(f, "ymaf"), Ta(f) && f && pi(a, "_ym_fa", f, 43200))
                        })
                    }
                })["catch"](va(a, "pic"))
            }),
            Bw = pa("p.tv", function(a) {
                if (wu(a)) {
                    var c = K(a);
                    Sc(a).then(function(b) {
                        c.D("lgguid", b)
                    }, va(a, "p.tv.p"))
                }
            }),
            Cw = pa("p.cm",
                function(a) {
                    mb(a).ta("mcs", pa("p.cm.cs", function(c, b, d, e, f) {
                        if (Wb(a, b)) return ad(c, b, d, e, f);
                        fa(ub("cmws.cd"))
                    })).ta("wsfm", bd)
                }),
            mr = {},
            nr = V(ta),
            Cr = ca(vb("exec", /counterID=(\d+)/), S("1")),
            or = tb(function(a, c) {
                var b, d = nr(a),
                    e = Yb(c),
                    f = e[0],
                    g = e[1],
                    h = e.slice(2);
                if (g) {
                    e = Mg(a, f);
                    var l = e[0],
                        n = e[1];
                    e = W(n);
                    d[e] || (d[e] = {});
                    d = d[e];
                    c.eh || mr[g] && Oa(function(x, I) {
                        return x || !!I(a, n, h, l)
                    }, !1, mr[g]) || ("init" === g ? (c.eh = !0, l ? Mc(a, "" + f, "dc", (b = {}, b.key = f, b)) : a["yaCounter" + n.id] = new a.Ya[Q.Ld](na({}, h[0], n))) : l && l[g] &&
                        d.tj ? (l[g].apply(l, h), c.eh = !0) : (b = d.Fh, b || (b = [], d.Fh = b), b.push(Kb([f, g], h))))
                }
            }),
            Br = pa("destruct.e", function(a, c, b) {
                return function() {
                    var d = K(a),
                        e = c.id;
                    ia(function(f, g) {
                        return Da(f) && va(a, "dest.fr." + g, f)()
                    }, b);
                    sg(a, W(c));
                    delete d.C("counters")[W(c)];
                    delete a["yaCounter" + e]
                }
            }),
            xl = K(window);
        xl.ta("hitParam", {});
        xl.ta("lastReferrer", window.location.href);
        (function() {
            xb.push(function(a, c) {
                var b;
                return b = {}, b.firstPartyParams = Ot(a, c), b.firstPartyParamsHashed = ja(a, c), b
            });
            Z.push("fpp");
            Z.push("fpmh")
        })();
        (function() {
            var a = K(window);
            a.ta("getCounters", Pt(window));
            yl.push(Qt);
            Mo.push(function(c, b) {
                b.counters = a.C("getCounters")
            })
        })();
        rc["1"] = Oe;
        xb.push(Rt);
        hc["1"] = $g;
        rf(fd, -1);
        Wg["1"] = [
            [fd, -1],
            [yb, 1],
            [dg, 2],
            [bd(), 3],
            [nd, 4]
        ];
        xb.push(St);
        xb.push(pa("p.ar", function(a, c) {
            var b, d = fc(a, "a", c);
            return b = {}, b.hit = function(e, f, g, h, l, n) {
                var x, I, P, T = {
                    G: {},
                    H: Hc((x = {}, x.pv = 1, x.ar = 1, x))
                };
                f = wb(f) ? {
                    title: f.title,
                    Wf: f.referer,
                    O: f.params,
                    ec: f.callback,
                    l: f.ctx
                } : {
                    title: f,
                    Wf: g,
                    O: h,
                    ec: l,
                    l: n
                };
                h = Vl(c);
                g = e || bb(a).href;
                h.url !==
                    g && (h.ref = h.url, h.url = e);
                e = f.Wf || h.ref || a.document.referrer;
                h = Rd(a, c, "pv", (I = {}, I.id = c.id, I.url = g, I.ref = e, I), f.O);
                I = na(T.L || {}, {
                    O: f.O,
                    title: f.title
                });
                T = d(na(T, {
                    L: I,
                    G: na(T.G || {}, (P = {}, P["page-url"] = g, P["page-ref"] = e, P))
                }), c).then(h);
                return ae(a, "p.ar.s", T, f.ec || sa, f.l)
            }, b
        }));
        rc.a = Oe;
        Wg.a = Xg;
        hc.a = $g;
        xb.push(Zm);
        rc.g = Oe;
        hc.g = $g;
        Wg.g = Xg;
        xb.push(Tt);
        xb.push(Ut);
        Wg.t = Xg;
        rc.t = Oe;
        hc.t = $g;
        xb.push(pa("cl.p", function(a, c) {
            function b(I, P, T, ba) {
                void 0 === ba && (ba = {});
                T ? qc(a, c, {
                        url: T,
                        zb: !0,
                        Jc: I,
                        Rb: P,
                        sender: e,
                        eg: ba
                    }) :
                    h.warn("clel")
            }
            var d, e = fc(a, "2", c),
                f = [],
                g = W(c),
                h = Th(a, g),
                l = va(a, "s.s.tr", aa(D(a, g), xh));
            g = {
                l: a,
                fb: c,
                Wh: f,
                sender: e,
                zk: K(a),
                Ph: zk(a, c.id),
                Ak: vd(a),
                mi: aa(aa(g, sn(a)), ca(Va, S("trackLinks")))
            };
            g = va(a, "cl.p.c", aa(g, Lb));
            g = Qb(a).F(a, ["click"], g);
            c.dg && l(c.dg);
            var n = va(a, "file.clc", ra([!0, !1], b)),
                x = va(a, "e.l.l.clc", ra([!1, !0], b));
            f = va(a, "add.f.e.clc", Vt(f));
            return d = {}, d.file = n, d.extLink = x, d.addFileExtension = f, d.trackLinks = l, d.u = g, d
        }));
        Wg["2"] = Xg;
        rc["2"] = Oe;
        hc["2"] = $g;
        rc.r = Hb("r");
        hc.r = ["f", "x", "j", "i"];
        Wd.push(pa("p.r", function(a, c) {
            var b = Xt(a),
                d = fc(a, "r", c),
                e = va(a, "rts.p");
            return Ib(c, ra([function(f, g) {
                var h = {
                        id: g.cf,
                        $: g.$
                    },
                    l = {
                        T: {
                            Z: g.Hg
                        },
                        H: Hc(g.pg),
                        G: g.O,
                        L: {
                            tb: g.tb
                        },
                        ra: {
                            ya: g.ya
                        }
                    };
                g.Ba && (l.Ba = bo(g.Ba));
                h = d(l, h)["catch"](e);
                return f.then(aa(h, Za))
            }, wa.resolve(), b], Oa))["catch"](e)
        }));
        Ab("r", function(a) {
            return {
                M: function(c, b) {
                    var d = c.H,
                        e = void 0 === d ? Hc() : d,
                        f = c.L.tb,
                        g = Tl(a);
                    d = e.C("rqnl", 0) + 1;
                    e.D("rqnl", d);
                    if (e = F(g, Ha(".", [f, "browserInfo"]))) e.rqnl = d, If(a);
                    b()
                },
                Ca: function(c, b) {
                    ng(a, c);
                    b()
                }
            }
        }, 1);
        rf(Me,
            100);
        Ab("1", Me, 100);
        xb.push(Yt);
        Ab("n", yb, 1);
        Ab("n", dg, 2);
        Ab("n", bd(), 3);
        Ab("n", Me, 100);
        rc.n = Oe;
        hc.n = $g;
        Td({
            Gd: {
                ga: "accurateTrackBounce"
            }
        });
        xb.push(Zt);
        rc.m = Hb("cm");
        hc.m = Dq;
        Ab("m", bd(["u", "v", "vf"]), 1);
        Ab("m", Me, 2);
        Td({
            Oh: {
                ga: "clickmap"
            }
        });
        xb.push($t);
        xb.push(au);
        xb.push(bu);
        xb.push(cu);
        (function() {
            xb.push(du);
            Z.push("ecommerce");
            Td({
                fd: {
                    ga: "ecommerce",
                    gb: function(a) {
                        if (a) return !0 === a ? "dataLayer" : "" + a
                    }
                }
            })
        })();
        xb.push(fu);
        Z.push("user_id");
        xb.push(gu);
        rf(function(a, c) {
            return {
                Ca: function(b, d) {
                    var e =
                        Wb(a, c);
                    e = e && e.userParams;
                    var f = (b.L || {}).gg;
                    e && f && e(f);
                    d()
                }
            }
        }, 0);
        hn.push("_ym_debug");
        Ck.unshift(ju);
        xb.push(ku);
        (function() {
            var a, c = (a = {}, a.tp = ca(Jd, vk, jb), a.tpid = ca(Jd, Kn), a);
            na(Yl, c)
        })();
        rf(rd, 20);
        Ab("n", rd, 20);
        Ab("1", rd, 20);
        Ck.unshift(mu);
        Yl.fp = function(a, c, b) {
            if (b.G && b.G.nohit) return null;
            b = K(a).C;
            if (!b("fpe")) return null;
            c = lu(c);
            if (c.Xh) return null;
            b = b("fht", Infinity);
            a: {
                var d = F(a, "performance.getEntriesByType");
                if (Da(d)) {
                    if (a = fb(ca(Za, S("name"), wc("first-contentful-paint")), d.call(a.performance,
                            "paint")), a.length) {
                        a = a[0].startTime;
                        break a
                    }
                } else {
                    var e = F(a, "chrome.loadTimes");
                    d = Bq(a);
                    if (Da(e) && (e = e.call(a.chrome), e = F(e, "firstPaintTime"), d && e)) {
                        a = 1E3 * e - d;
                        break a
                    }
                    if (a = F(a, "performance.timing.msFirstPaint")) {
                        a -= d;
                        break a
                    }
                }
                a = void 0
            }
            return a && b > a ? (c.Xh = a, Math.round(a)) : null
        };
        xb.push(function(a, c) {
            var b;
            return b = {}, b.ecommerceAdd = pa("ecm.a", nu(a, c)), b.ecommerceRemove = pa("ecm.r", ou(a, c)), b.ecommerceDetail = pa("ecm.d", pu(a, c)), b.ecommercePurchase = pa("ecm.p", qu(a, c)), b
        });
        (function() {
            var a, c = {};
            c.bu =
                xu;
            c.pri = Tg;
            c.wv = aa(2, Za);
            c.ds = Rl;
            c.co = function(b) {
                return sb(K(b).C("jn"))
            };
            c.td = Du;
            na(c, (a = {}, a.iss = ca(yr, jb), a.hdl = ca(zr, jb), a.iia = ca(qp, jb), a.cpf = ca(vu, jb), a.ntf = V(function(b) {
                b = F(b, "Notification.permission");
                b = "denied" === b ? !1 : "granted" === b ? !0 : null;
                return Kc(b) ? null : b ? 2 : 1
            }), a.eu = sf("isEU"), a.ns = Bq, a.np = function(b) {
                return nc(b, 0, 100) ? null : Xc(Pc(bp(b), 100))
            }, a));
            c.pani = yu;
            c.pci = zu;
            c.si = Au;
            c.gi = Bu;
            c.pic = Vb(Fg)("_ym_fa");
            c.stlgg = sf("lgguid");
            c.sttdi = li;
            c.stti = ij;
            c.sttifa = jl;
            na(Yl, c)
        })();
        (function() {
            var a = {};
            a.hc = sf("hc");
            a.oo = sf("oo");
            a.pmc = sf("cmc");
            a.re = ca(hf, jb);
            a.aw = function(c) {
                c = cd(ca(Ma, yh), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                return Ma(c) ? null : sb(!c)
            };
            a.rcm = Gu;
            a.yu = function(c) {
                return (c = Vi(c, "").C("yandexuid")) && c.substring(0, 25)
            };
            a.ifc = sf("ifc");
            a.ifb = sf("ifb");
            a.ecs = sf("ecs");
            a.csi = sf("scip");
            a.cdl = sf("cdl");
            a.eco = V(pc, ca(Jd, W));
            a.dss = sf("dSync");
            a.pis = sf("pis");
            a.ucs = function(c) {
                return (c = Vi(c).C("ucs")) && c.substring(0, 25)
            };
            na(mo, a)
        })();
        hc.er = Bk;
        (function(a) {
            try {
                var c =
                    Ol(a, "er"),
                    b = cg(a, c);
                mq.push(function(d, e, f, g) {
                    var h, l, n, x, I;
                    .01 >= a.Math.random() || b((h = {}, h[d] = (l = {}, l[Q.lc] = (n = {}, n[e] = (x = {}, x[f] = g ? (I = {}, I[a.location.href] = g, I) : a.location.href, x), n), l), h))
                })
            } catch (d) {}
        })(window);
        Wn.push(function(a, c) {
            if (F(a, "disableYaCounter" + c.id) || F(a, "Ya.disableMetrica")) {
                var b = W(c);
                delete K(a).C("counters", {})[b];
                fa(Ec("oo.e"))
            }
        });
        an.unshift(function(a) {
            return {
                M: function(c, b) {
                    K(a).C("oo") || b()
                }
            }
        });
        rf(function(a, c) {
            return {
                M: function(b, d) {
                    var e = b.G,
                        f = b.H;
                    !Pq[c.id] && f.C("pv") &&
                        c.exp && !e.nohit && (e.exp = c.exp, Pq[c.id] = !0);
                    d()
                }
            }
        }, -99);
        xb.push(Hu);
        Wg.e = Xg;
        rc.e = Oe;
        hc.e = $g;
        Td({
            exp: {
                ga: "experiments"
            }
        });
        aq.experiments = "ex";
        (function() {
            var a;
            $o.push(Iu);
            rc.f = Oe;
            na(hc, (a = {}, a.f = rn, a));
            Ab("f", bd(), 1);
            Ab("f", Jg, 2);
            Ab("f", rd, 20)
        })();
        Wn.push(function(a, c) {
            var b = {
                    wa: W(c),
                    xd: Wb(a, c),
                    bg: Jb(a),
                    Ad: pd(a)
                },
                d = b.bg(Md);
            if (!b.Ad.vc) {
                var e = b.Ad.C("ymoo" + b.wa);
                if (e && 30 > d - e) b = b.wa, delete K(a).C("counters", {})[b], fa(Ec("uws"));
                else Ib(c, Ju(b))["catch"](va(a, "d.f"))
            }
        });
        (function() {
            var a, c, b = ["x"];
            na(hc,
                (a = {}, a.s = b, a.S = b, a.u = Bk, a));
            na(rc, (c = {}, c.s = Fd, c.S = Oe, c.u = Fd, c));
            Ab("s");
            Ab("u");
            Ab("S", bd(["v", "hid", "u", "vf", "rn"]), 1);
            xb.push(pa("s", Vf))
        })();
        rc["8"] = Fd;
        Xl.br = {
            check: Ii,
            id: 0
        };
        hc["8"] = ["br"];
        xb.push(pa("p.us", function(a, c) {
            return Ib(c, function(b) {
                if (F(b, "settings.sbp")) return Bg(a, b, {
                    fb: c,
                    Hb: "8",
                    Yc: "cs"
                })
            })
        }));
        Wd.push(Qu);
        Td({
            Dc: {
                ga: "webvisor",
                gb: cc
            },
            Ti: {
                ga: "disableFormAnalytics",
                gb: cc
            }
        });
        Ab("4", bd(So), 1);
        rc["4"] = Tq;
        hc["4"] = ["f", "x", "i"];
        Wd.push(Wu);
        Ab("W", bd(So), 1);
        yq("wv", function(a, c) {
            return {
                M: function(b,
                    d) {
                    b.H.cb("we", jb(c.Dc));
                    Be(a, c, b, "rn");
                    d()
                }
            }
        }, 1);
        hc.W = ["f", "x"];
        rc.W = Tq;
        Wd.push(Ev);
        xb.push(Fv);
        Td({
            Dc: {
                ga: "webvisor"
            }
        });
        Td({
            ak: {
                ga: "trustedDomains"
            },
            Jd: {
                ga: "childIframe",
                gb: cc
            }
        });
        xb.push(Hv);
        Ab("pi");
        rc.pi = Fd;
        hc.pi = Bk;
        yq("w", function(a, c) {
            return {
                M: function(b, d) {
                    if (b.H) {
                        var e = eo(c),
                            f = e.status;
                        "rt" === e.Hb && f && (b.H.D("rt", f), b.ra || (b.ra = {}), b.ra.lh = 1 === f ? Pp(a, c) + "." : "")
                    }
                    d()
                }
            }
        }, 2);
        xb.push(Jv);
        xb.push(Vv);
        hc["6"] = ["f", "x"];
        rc["6"] = Fd;
        xb.push(Wv);
        xb.push(Eu);
        (function() {
            Mo.push(function(a, c) {
                c.informer =
                    Ok(a)
            })
        })();
        rf(ze, 6);
        Ab("1", ze, 6);
        Ab("adb");
        Ab("n", ze, 4);
        hc.adb = Bk;
        rc.adb = Yd;
        yl.push(Yv);
        hc["5"] = $g;
        rc["5"] = Oe;
        Wg["5"] = fb(ca(sm, $h([yb, dg]), yh), Xg);
        xb.push(Zv);
        Ab("5", rd, 20);
        rf(fi, 7);
        Ab("n", fi, 6);
        Wd.push($v);
        rc.d = Oe;
        Ab("d", bd(["hid", "u", "v", "vf"]), 1);
        hc.d = Bk;
        Ab("n", function(a, c) {
            return {
                Ca: function(b, d) {
                    if (!b.L || !b.L.force) {
                        var e = .002,
                            f = c.id === Q.Fi ? 1 : .002,
                            g, h, l, n, x;
                        void 0 === e && (e = 1);
                        void 0 === f && (f = 1);
                        var I = vh(a);
                        if (I && Da(I.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                            I = I.getEntriesByType("resource");
                            for (var P = {}, T = {}, ba = {}, ka = Oq(), Ka = bb(a).href, Ua = 0; Ua < I.length; Ua += 1) {
                                var Wa = I[Ua],
                                    Tb = Wa.name.replace(Nq, "").split("?")[0],
                                    Bc = Re(Tb),
                                    ah = (g = {}, g.dns = Math.round(Wa.domainLookupEnd - Wa.domainLookupStart), g.tcp = Math.round(Wa.connectEnd - Wa.connectStart), g.duration = Math.round(Wa.duration), g.response = Math.round(Wa.responseEnd - Wa.requestStart), g);
                                "script" !== Wa.initiatorType || e || (T[Tb] = na(ah, (h = {}, h.name = Wa.name, h.decodedBodySize = Wa.decodedBodySize, h.transferSize = Math.round(Wa.transferSize), h)));
                                !Fu[Bc] && !ka[Bc] ||
                                    P[Tb] || f || (P[Tb] = na(ah, (l = {}, l.pages = Ka, l)))
                            }
                            zb(P).length && (ba.timings8 = P);
                            zb(T).length && (ba.scripts = T);
                            if (zb(ba).length) fc(a, "d", c)({
                                H: Hc((n = {}, n.ar = 1, n.pv = 1, n)),
                                T: {
                                    Z: ma(a, ba) || void 0
                                },
                                G: (x = {}, x["page-url"] = Ka, x)
                            }, {
                                id: Q.Ii,
                                $: "0"
                            })["catch"](va(a, "r.tim.ng2"))
                        }
                    }
                    d()
                }
            }
        }, 7);
        hc.ci = ["x"];
        rc.ci = Fd;
        Wd.push(pa("p.sci", function(a, c) {
            return Ib(c, aa(a, jg))["catch"](va(a, "ins.cs"))
        }));
        Wd.push(uu);
        rf(Yo, 8);
        Ab("f", Yo, 3);
        Ab("n", Yo, 5);
        yl.push(function(a) {
            return pa("fip", function(c) {
                if (!Jq(c) || Xk(c)) {
                    var b = pd(c);
                    if (!b.C("fip")) {
                        var d =
                            ca(cf(ca(function(e, f) {
                                return pa("fip." + f, e)(c)
                            }, Ea(fp, null))), Sl("-"))(a);
                        b.D("fip", d)
                    }
                }
            })
        }([fw, ew, function(a) {
            var c = F(a, "ApplePaySession"),
                b = bb(a).protocol;
            a = c && "https:" === b && !Cd(a) ? c : void 0;
            c = "";
            if (!a) return c;
            try {
                c = "" + a.canMakePayments();
                b = "";
                var d = a.supportsVersion;
                if (Da(d))
                    for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ? "" + e : "0";
                return b + c
            } catch (f) {
                return c
            }
        }, function(a) {
            a = F(a, "navigator") || {};
            return a.doNotTrack || a.msDoNotTrack || "unknown"
        }, function(a) {
            if (a = tu(a)) try {
                for (var c = [], b = 0; b < Kq.length; b += 1) {
                    var d =
                        a(Kq[b]);
                    c.push(d)
                }
                var e = c
            } catch (f) {
                e = []
            } else e = [];
            return e ? Ha("x", e) : ""
        }, function(a) {
            var c = void 0;
            void 0 === c && (c = cw);
            var b = F(a, "navigator") || {};
            c = qa(aa(b, F), c);
            c = Ha("x", c);
            try {
                var d = F(a, "navigator.getGamepads");
                var e = Db(d, "getGamepads") && a.navigator.getGamepads() || []
            } catch (f) {
                e = []
            }
            return c + "x" + ea(e)
        }, aw, function(a) {
            a = F(a, "screen") || {};
            return Ha("x", qa(aa(a, F), bw))
        }, function(a) {
            return Ha("x", wg(a) || [])
        }, function(a) {
            a = yi(a);
            return Ja(a) ? Ha("x", a) : a
        }, function(a) {
            return (a = ei(a)) ? Ha("x", qa(ra(["", ["matches",
                "media"
            ]], xg), ac(Eo(a)))) : ""
        }]));
        rf(function(a) {
            return {
                M: function(c, b) {
                    var d = c.H,
                        e = pd(a).C("fip");
                    e && d && (d.D("fip", e), Pa(c, "fip", sb(e)));
                    b()
                }
            }
        }, 9);
        Ab("h", function(a) {
            return {
                Ca: function(c, b) {
                    var d = c.Jg;
                    nh(c) && d && K(a).D("isEU", F(d, "settings.eu"));
                    b()
                }
            }
        }, 3);
        yl.push(Dv);
        Wd.push(kw);
        xb.push(lw);
        Td({
            Xg: {
                ga: "yaDisableGDPR"
            },
            Yg: {
                ga: "yaGDPRLang"
            }
        });
        an.push(function(a, c) {
            return {
                M: ra([a, c], om)
            }
        });
        hn.push("gdpr");
        hn.push("gdpr_popup");
        so.push(function(a, c) {
            var b = yd(a);
            b = Rm(b);
            if (fb($h(ow), b).length) return !0;
            b = c(a, "gdpr");
            return Ia(b, [mk, nw])
        });
        an.push(function(a) {
            return {
                M: function(c, b) {
                    var d = c.ra || {},
                        e;
                    (e = F(a, "document.referrer")) ? (e = Af(a, e).host, e = tm(e), e = Ap + "." + (e || Ku)) : e = E;
                    c.ra = na(d, {
                        Bg: [e]
                    });
                    b()
                }
            }
        });
        rf(kr, 5);
        Ab("1", kr, 6);
        hc.c = Bk;
        rc.c = Fd;
        Ab("1", Bf, 7);
        rf(Bf, 7);
        Ck.push(pa("hcp", ig));
        Wd.push(pa("p.ot", rw));
        Wd.push(Ya("cta", sw, !0));
        Ab("n", function(a) {
            var c = K(a);
            return {
                M: function(b, d) {
                    var e = b.L || {},
                        f = c.C("cta"),
                        g = c.C("cta.e");
                    if (f || g) {
                        e.O || (e.O = {});
                        e.O.__ym || (e.O.__ym = {});
                        var h = {};
                        f ? (f = qa(function(l) {
                            var n,
                                x = F(l, "topic");
                            l = F(l, "version");
                            return n = {}, n.topic = x, n.version = l, n
                        }, f), h.ct = f) : g && (h["ct.e"] = g);
                        na(e.O.__ym, h);
                        b.L = na(b.L || {}, e)
                    }
                    d()
                }
            }
        }, 7);
        Ab("n", fd, 8);
        xb.push(tw);
        Ab("g", function(a, c) {
            return {
                M: function(b, d) {
                    var e = b.G;
                    if (e && e["page-url"]) {
                        var f = e["page-url"];
                        if (Hl(f)) Ib(c, function(g) {
                            var h, l, n = F(g, "settings.goal_values");
                            if (n) {
                                var x = (g = Af(a, f).query) ? ld(g) : void 0;
                                if (x) {
                                    g = b.L || {};
                                    g.O || (g.O = {});
                                    g.O.__ym || (g.O.__ym = {});
                                    var I = Ep(f) ? tj : bl;
                                    n = vw(n);
                                    if (x = cd(aa(x, I), n)) {
                                        n = (h = {}, h.cgd = (l = {}, l.rg = x.id, l), h);
                                        a: {
                                            if (h = a.document.body) {
                                                l = x.price_patterns;
                                                x = uw(x.id);
                                                if (x.ed) {
                                                    if (!pj(a, x.ed.element)) {
                                                        h = Gh(x.ed);
                                                        break a
                                                    }
                                                    x.ed = void 0
                                                }
                                                var P = null,
                                                    T = null;
                                                for (I = 0; I < l.length; I += 1) {
                                                    var ba = l[I],
                                                        ka = ba[1];
                                                    "p" === ba[0] ? (P = a, P = (ka = Qj(ka)) ? F(P, "document.evaluate") ? P.document.evaluate(ka, P.document, null, P.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : null : null, T = "x") : Rg(a) && (P = Hd(ka, h), T = "c");
                                                    if (P && T) {
                                                        x.ed = {
                                                            element: P,
                                                            nf: T
                                                        };
                                                        h = Gh(x.ed);
                                                        break a
                                                    }
                                                }
                                            }
                                            h = void 0
                                        }
                                        h && (n.cgd.gp = Od(Ig(h.Oj)), n.cgd.mg = h.nf);
                                        na(g.O.__ym, n);
                                        b.L =
                                            na(b.L || {}, g)
                                    }
                                }
                            }
                            d()
                        })["catch"](ca(Qh(d), va(a, "a.g.v")));
                        else d()
                    } else d()
                }
            }
        }, -2);
        Ck.push(pa("cdl", function(a) {
            var c = K(a).ta;
            if (a = F(a, "navigator.cookieDeprecationLabel")) try {
                a.getValue().then(aa("cdl", c), ra(["cdl", "e"], c))
            } catch (b) {
                c("cdl", "d")
            } else c("cdl", "na")
        }));
        Td({
            Ui: {
                ga: "disableYtm",
                gb: cc
            }
        });
        hc.ytm = Cq;
        xb.push(pa("p.ytm", function(a, c) {
            var b;
            if (!c.Ui) {
                var d = !1,
                    e = function() {
                        d = !0
                    },
                    f = [],
                    g = function(h, l) {
                        f.push([h, l])
                    };
                Ib(c, function(h) {
                    if (!d && F(h, "settings.aytm")) return Gl(a), h = Ol(a, "ytm"), Fd(a, h)({
                        T: {
                            ma: ["ytm"],
                            mb: !0
                        }
                    }, [Q.Cb + "//" + E + "/ytm-config/" + c.id]).then(function(l) {
                        var n = l.kb;
                        if (!d && wb(n)) {
                            l = fh(ca(S("conditions"), cf(function(P) {
                                var T = n.variables[P["var"]];
                                P = P.target;
                                return T && "event" === T.type && Ta(P) && Ia(P, yw) && P
                            }), ac), n.triggers);
                            var x = bk(a, "" + c.id),
                                I = jm(a, n, x).dispatchEvent;
                            e = mm(a, I, l);
                            g = x.Ji;
                            ia(function(P) {
                                return g(P[0], P[1])
                            }, f);
                            fg(f);
                            I(Zh(a, "ytm.init"))
                        }
                    })
                })["catch"](va(a, "ytm.s"));
                return b = {}, b.u = function() {
                    return e()
                }, b.policy = function(h, l) {
                    return g(h, l)
                }, b
            }
        }));
        Wd.push(zw);
        hc.pis = Dq;
        rc.pis = Fd;
        Wd.push(pa("p.sci", function(a, c) {
            return Ib(c, function(b) {
                var d = F(b, "settings.pis");
                if (d && !Kl(b)) {
                    b = K(a);
                    var e = b.C;
                    b = b.D;
                    e = e("pis");
                    if (Ma(e)) return e = fc(a, "pis"), b("pis", "0"), e({
                        T: {
                            ma: ["pis"]
                        }
                    }, [d]).then(ra(["pis", "1"], b), Qh(ra(["pis", "a"], b)))
                }
            })["catch"](va(a, "pis"))
        }));
        hc.pic = Cq;
        rc.pic = Fd;
        Wd.push(Aw);
        Ck.push(Bw);
        xb.push(Cw);
        xb.push(function(a, c) {
            var b = nr(a),
                d = W(c),
                e = b[d];
            e || (e = {}, b[d] = e);
            e.tj = !0;
            if (b = e.Fh) d = or(a), ia(d, b)
        });
        Wd.unshift(function(a, c) {
            Ib(c, function(b) {
                var d = gn(a),
                    e = F(b, "settings.sm"),
                    f = eu(a);
                (d || e || f.id) && Qg(a, "tag_debug", W(c), b)
            })
        });
        ia(Vb(Va)(window), Ck);
        if (window.Ya && Uc) {
            var pr = Q.Ld;
            window.Ya[pr] = Uc;
            Nt(window);
            ia(ca(oa([window, window.Ya[pr]]), Va), Mo)
        }(function(a) {
            var c = F(a, "ym");
            if (c) {
                var b = F(c, "a");
                b || (c.a = [], b = c.a);
                var d = or(a);
                Ld(a, b, function(e) {
                    e.Aa.F(d)
                }, !0)
            }
        })(window)
    })()
} catch (Uc) {};