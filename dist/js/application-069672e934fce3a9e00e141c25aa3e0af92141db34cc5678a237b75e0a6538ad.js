/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */ ! function(t, e) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
    if (!t.document) throw new Error("jQuery requires a window with a document");
    return e(t)
} : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
function i(t) {
    var e = !!t && "length" in t && t.length,
        i = ot.type(t);
    return "function" !== i && !ot.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
}

function n(t, e, i) {
    if (ot.isFunction(e)) return ot.grep(t, function(t, n) {
        return !!e.call(t, n, t) !== i
    });
    if (e.nodeType) return ot.grep(t, function(t) {
        return t === e !== i
    });
    if ("string" == typeof e) {
        if (mt.test(e)) return ot.filter(e, t, i);
        e = ot.filter(e, t)
    }
    return ot.grep(t, function(t) {
        return J.call(e, t) > -1 !== i
    })
}

function s(t, e) {
    for (;
        (t = t[e]) && 1 !== t.nodeType;);
    return t
}

function o(t) {
    var e = {};
    return ot.each(t.match(wt) || [], function(t, i) {
        e[i] = !0
    }), e
}

function r() {
    K.removeEventListener("DOMContentLoaded", r), t.removeEventListener("load", r), ot.ready()
}

function a() {
    this.expando = ot.expando + a.uid++
}

function l(t, e, i) {
    var n;
    if (void 0 === i && 1 === t.nodeType)
        if (n = "data-" + e.replace(Dt, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
            try {
                i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Tt.test(i) ? ot.parseJSON(i) : i)
            } catch (Q) {}
            St.set(t, e, i)
        } else i = void 0;
    return i
}

function c(t, e, i, n) {
    var s, o = 1,
        r = 20,
        a = n ? function() {
            return n.cur()
        } : function() {
            return ot.css(t, e, "")
        },
        l = a(),
        c = i && i[3] || (ot.cssNumber[e] ? "" : "px"),
        h = (ot.cssNumber[e] || "px" !== c && +l) && Mt.exec(ot.css(t, e));
    if (h && h[3] !== c) {
        c = c || h[3], i = i || [], h = +l || 1;
        do {
            h /= o = o || ".5", ot.style(t, e, h + c)
        } while (o !== (o = a() / l) && 1 !== o && --r)
    }
    return i && (h = +h || +l || 0, s = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = s)), s
}

function h(t, e) {
    var i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
    return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], i) : i
}

function d(t, e) {
    for (var i = 0, n = t.length; n > i; i++) Ct.set(t[i], "globalEval", !e || Ct.get(e[i], "globalEval"))
}

function u(t, e, i, n, s) {
    for (var o, r, a, l, c, u, f = e.createDocumentFragment(), p = [], m = 0, g = t.length; g > m; m++)
        if ((o = t[m]) || 0 === o)
            if ("object" === ot.type(o)) ot.merge(p, o.nodeType ? [o] : o);
            else if (Lt.test(o)) {
        for (r = r || f.appendChild(e.createElement("div")), a = (Ot.exec(o) || ["", ""])[1].toLowerCase(), l = $t[a] || $t._default, r.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], u = l[0]; u--;) r = r.lastChild;
        ot.merge(p, r.childNodes), (r = f.firstChild).textContent = ""
    } else p.push(e.createTextNode(o));
    for (f.textContent = "", m = 0; o = p[m++];)
        if (n && ot.inArray(o, n) > -1) s && s.push(o);
        else if (c = ot.contains(o.ownerDocument, o), r = h(f.appendChild(o), "script"), c && d(r), i)
        for (u = 0; o = r[u++];) Nt.test(o.type || "") && i.push(o);
    return f
}

function f() {
    return !0
}

function p() {
    return !1
}

function m() {
    try {
        return K.activeElement
    } catch (t) {}
}

function g(t, e, i, n, s, o) {
    var r, a;
    if ("object" == typeof e) {
        for (a in "string" != typeof i && (n = n || i, i = void 0), e) g(t, a, i, n, e[a], o);
        return t
    }
    if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = p;
    else if (!s) return t;
    return 1 === o && (r = s, (s = function(t) {
        return ot().off(t), r.apply(this, arguments)
    }).guid = r.guid || (r.guid = ot.guid++)), t.each(function() {
        ot.event.add(this, e, s, n, i)
    })
}

function v(t, e) {
    return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
}

function _(t) {
    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
}

function y(t) {
    var e = zt.exec(t.type);
    return e ? t.type = e[1] : t.removeAttribute("type"), t
}

function b(t, e) {
    var i, n, s, o, r, a, l, c;
    if (1 === e.nodeType) {
        if (Ct.hasData(t) && (o = Ct.access(t), r = Ct.set(e, o), c = o.events))
            for (s in delete r.handle, r.events = {}, c)
                for (i = 0, n = c[s].length; n > i; i++) ot.event.add(e, s, c[s][i]);
        St.hasData(t) && (a = St.access(t), l = ot.extend({}, a), St.set(e, l))
    }
}

function w(t, e) {
    var i = e.nodeName.toLowerCase();
    "input" === i && At.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
}

function x(t, e, i, n) {
    e = X.apply([], e);
    var s, o, r, a, l, c, d = 0,
        f = t.length,
        p = f - 1,
        m = e[0],
        g = ot.isFunction(m);
    if (g || f > 1 && "string" == typeof m && !nt.checkClone && Rt.test(m)) return t.each(function(s) {
        var o = t.eq(s);
        g && (e[0] = m.call(this, s, o.html())), x(o, e, i, n)
    });
    if (f && (o = (s = u(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === s.childNodes.length && (s = o), o || n)) {
        for (a = (r = ot.map(h(s, "script"), _)).length; f > d; d++) l = s, d !== p && (l = ot.clone(l, !0, !0), a && ot.merge(r, h(l, "script"))), i.call(t[d], l, d);
        if (a)
            for (c = r[r.length - 1].ownerDocument, ot.map(r, y), d = 0; a > d; d++) l = r[d], Nt.test(l.type || "") && !Ct.access(l, "globalEval") && ot.contains(c, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Bt, "")))
    }
    return t
}

function k(t, e, i) {
    for (var n, s = e ? ot.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || ot.cleanData(h(n)), n.parentNode && (i && ot.contains(n.ownerDocument, n) && d(h(n, "script")), n.parentNode.removeChild(n));
    return t
}

function C(t, e) {
    var i = ot(e.createElement(t)).appendTo(e.body),
        n = ot.css(i[0], "display");
    return i.detach(), n
}

function S(t) {
    var e = K,
        i = Ut[t];
    return i || ("none" !== (i = C(t, e)) && i || ((e = (qt = (qt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = C(t, e), qt.detach()), Ut[t] = i), i
}

function T(t, e, i) {
    var n, s, o, r, a = t.style;
    return "" !== (r = (i = i || Kt(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== r || ot.contains(t.ownerDocument, t) || (r = ot.style(t, e)), i && !nt.pixelMarginRight() && Gt.test(r) && Vt.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o), void 0 !== r ? r + "" : r
}

function D(t, e) {
    return {
        get: function() {
            return t() ? void delete this.get : (this.get = e).apply(this, arguments)
        }
    }
}

function E(t) {
    if (t in ie) return t;
    for (var e = t[0].toUpperCase() + t.slice(1), i = ee.length; i--;)
        if ((t = ee[i] + e) in ie) return t
}

function M(t, e, i) {
    var n = Mt.exec(e);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
}

function I(t, e, i, n, s) {
    for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += ot.css(t, i + It[o], !0, s)), n ? ("content" === i && (r -= ot.css(t, "padding" + It[o], !0, s)), "margin" !== i && (r -= ot.css(t, "border" + It[o] + "Width", !0, s))) : (r += ot.css(t, "padding" + It[o], !0, s), "padding" !== i && (r += ot.css(t, "border" + It[o] + "Width", !0, s)));
    return r
}

function P(t, e, i) {
    var n = !0,
        s = "width" === e ? t.offsetWidth : t.offsetHeight,
        o = Kt(t),
        r = "border-box" === ot.css(t, "boxSizing", !1, o);
    if (0 >= s || null == s) {
        if ((0 > (s = T(t, e, o)) || null == s) && (s = t.style[e]), Gt.test(s)) return s;
        n = r && (nt.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
    }
    return s + I(t, e, i || (r ? "border" : "content"), n, o) + "px"
}

function A(t, e) {
    for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++)(n = t[r]).style && (o[r] = Ct.get(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Pt(n) && (o[r] = Ct.access(n, "olddisplay", S(n.nodeName)))) : (s = Pt(n), "none" === i && s || Ct.set(n, "olddisplay", s ? i : ot.css(n, "display"))));
    for (r = 0; a > r; r++)(n = t[r]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
    return t
}

function O(t, e, i, n, s) {
    return new O.prototype.init(t, e, i, n, s)
}

function N() {
    return t.setTimeout(function() {
        ne = void 0
    }), ne = ot.now()
}

function $(t, e) {
    var i, n = 0,
        s = {
            height: t
        };
    for (e = e ? 1 : 0; 4 > n; n += 2 - e) s["margin" + (i = It[n])] = s["padding" + i] = t;
    return e && (s.opacity = s.width = t), s
}

function L(t, e, i) {
    for (var n, s = (H.tweeners[e] || []).concat(H.tweeners["*"]), o = 0, r = s.length; r > o; o++)
        if (n = s[o].call(i, e, t)) return n
}

function j(t, e, i) {
    var n, s, o, r, a, l, c, h = this,
        d = {},
        u = t.style,
        f = t.nodeType && Pt(t),
        p = Ct.get(t, "fxshow");
    for (n in i.queue || (null == (a = ot._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [u.overflow, u.overflowX, u.overflowY], "inline" === ("none" === (c = ot.css(t, "display")) ? Ct.get(t, "olddisplay") || S(t.nodeName) : c) && "none" === ot.css(t, "float") && (u.display = "inline-block")), i.overflow && (u.overflow = "hidden", h.always(function() {
            u.overflow = i.overflow[0], u.overflowX = i.overflow[1], u.overflowY = i.overflow[2]
        })), e)
        if (s = e[n], oe.exec(s)) {
            if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                if ("show" !== s || !p || void 0 === p[n]) continue;
                f = !0
            }
            d[n] = p && p[n] || ot.style(t, n)
        } else c = void 0;
    if (ot.isEmptyObject(d)) "inline" === ("none" === c ? S(t.nodeName) : c) && (u.display = c);
    else
        for (n in p ? "hidden" in p && (f = p.hidden) : p = Ct.access(t, "fxshow", {}), o && (p.hidden = !f), f ? ot(t).show() : h.done(function() {
                ot(t).hide()
            }), h.done(function() {
                var e;
                for (e in Ct.remove(t, "fxshow"), d) ot.style(t, e, d[e])
            }), d) r = L(f ? p[n] : 0, n, h), n in p || (p[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
}

function Y(t, e) {
    var i, n, s, o, r;
    for (i in t)
        if (s = e[n = ot.camelCase(i)], o = t[i], ot.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = ot.cssHooks[n]) && "expand" in r)
            for (i in o = r.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = s);
        else e[n] = s
}

function H(t, e, i) {
    var n, s, o = 0,
        r = H.prefilters.length,
        a = ot.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (s) return !1;
            for (var e = ne || N(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), o = 0, r = c.tweens.length; r > o; o++) c.tweens[o].run(n);
            return a.notifyWith(t, [c, n, i]), 1 > n && r ? i : (a.resolveWith(t, [c]), !1)
        },
        c = a.promise({
            elem: t,
            props: ot.extend({}, e),
            opts: ot.extend(!0, {
                specialEasing: {},
                easing: ot.easing._default
            }, i),
            originalProperties: e,
            originalOptions: i,
            startTime: ne || N(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = ot.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n), n
            },
            stop: function(e) {
                var i = 0,
                    n = e ? c.tweens.length : 0;
                if (s) return this;
                for (s = !0; n > i; i++) c.tweens[i].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
            }
        }),
        h = c.props;
    for (Y(h, c.opts.specialEasing); r > o; o++)
        if (n = H.prefilters[o].call(c, t, h, c.opts)) return ot.isFunction(n.stop) && (ot._queueHooks(c.elem, c.opts.queue).stop = ot.proxy(n.stop, n)), n;
    return ot.map(h, L, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
        elem: t,
        anim: c,
        queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
}

function F(t) {
    return t.getAttribute && t.getAttribute("class") || ""
}

function W(t) {
    return function(e, i) {
        "string" != typeof e && (i = e, e = "*");
        var n, s = 0,
            o = e.toLowerCase().match(wt) || [];
        if (ot.isFunction(i))
            for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
    }
}

function R(t, e, i, n) {
    function s(a) {
        var l;
        return o[a] = !0, ot.each(t[a] || [], function(t, a) {
            var c = a(e, i, n);
            return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
        }), l
    }
    var o = {},
        r = t === Se;
    return s(e.dataTypes[0]) || !o["*"] && s("*")
}

function z(t, e) {
    var i, n, s = ot.ajaxSettings.flatOptions || {};
    for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
    return n && ot.extend(!0, t, n), t
}

function B(t, e, i) {
    for (var n, s, o, r, a = t.contents, l = t.dataTypes;
        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
    if (n)
        for (s in a)
            if (a[s] && a[s].test(n)) {
                l.unshift(s);
                break
            } if (l[0] in i) o = l[0];
    else {
        for (s in i) {
            if (!l[0] || t.converters[s + " " + l[0]]) {
                o = s;
                break
            }
            r || (r = s)
        }
        o = o || r
    }
    return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
}

function q(t, e, i, n) {
    var s, o, r, a, l, c = {},
        h = t.dataTypes.slice();
    if (h[1])
        for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
    for (o = h.shift(); o;)
        if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
            if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
        if (!(r = c[l + " " + o] || c["* " + o]))
            for (s in c)
                if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                    !0 === r ? r = c[s] : !0 !== c[s] && (o = a[0], h.unshift(a[1]));
                    break
                } if (!0 !== r)
            if (r && t.throws) e = r(e);
            else try {
                e = r(e)
            } catch (nt) {
                return {
                    state: "parsererror",
                    error: r ? nt : "No conversion from " + l + " to " + o
                }
            }
    }
    return {
        state: "success",
        data: e
    }
}

function U(t, e, i, n) {
    var s;
    if (ot.isArray(e)) ot.each(e, function(e, s) {
        i || Me.test(t) ? n(t, s) : U(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
    });
    else if (i || "object" !== ot.type(e)) n(t, e);
    else
        for (s in e) U(t + "[" + s + "]", e[s], i, n)
}

function V(t) {
    return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
}
var G = [],
    K = t.document,
    Q = G.slice,
    X = G.concat,
    Z = G.push,
    J = G.indexOf,
    tt = {},
    et = tt.toString,
    it = tt.hasOwnProperty,
    nt = {},
    st = "2.2.4",
    ot = function(t, e) {
        return new ot.fn.init(t, e)
    },
    rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    at = /^-ms-/,
    lt = /-([\da-z])/gi,
    ct = function(t, e) {
        return e.toUpperCase()
    };
ot.fn = ot.prototype = {
    jquery: st,
    constructor: ot,
    selector: "",
    length: 0,
    toArray: function() {
        return Q.call(this)
    },
    get: function(t) {
        return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
    },
    pushStack: function(t) {
        var e = ot.merge(this.constructor(), t);
        return e.prevObject = this, e.context = this.context, e
    },
    each: function(t) {
        return ot.each(this, t)
    },
    map: function(t) {
        return this.pushStack(ot.map(this, function(e, i) {
            return t.call(e, i, e)
        }))
    },
    slice: function() {
        return this.pushStack(Q.apply(this, arguments))
    },
    first: function() {
        return this.eq(0)
    },
    last: function() {
        return this.eq(-1)
    },
    eq: function(t) {
        var e = this.length,
            i = +t + (0 > t ? e : 0);
        return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
    },
    end: function() {
        return this.prevObject || this.constructor()
    },
    push: Z,
    sort: G.sort,
    splice: G.splice
}, ot.extend = ot.fn.extend = function() {
    var t, e, i, n, s, o, r = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
    for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || ot.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
        if (null != (t = arguments[a]))
            for (e in t) i = r[e], r !== (n = t[e]) && (c && n && (ot.isPlainObject(n) || (s = ot.isArray(n))) ? (s ? (s = !1, o = i && ot.isArray(i) ? i : []) : o = i && ot.isPlainObject(i) ? i : {}, r[e] = ot.extend(c, o, n)) : void 0 !== n && (r[e] = n));
    return r
}, ot.extend({
    expando: "jQuery" + (st + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(t) {
        throw new Error(t)
    },
    noop: function() {},
    isFunction: function(t) {
        return "function" === ot.type(t)
    },
    isArray: Array.isArray,
    isWindow: function(t) {
        return null != t && t === t.window
    },
    isNumeric: function(t) {
        var e = t && t.toString();
        return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
    },
    isPlainObject: function(t) {
        var e;
        if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
        if (t.constructor && !it.call(t, "constructor") && !it.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
        for (e in t);
        return void 0 === e || it.call(t, e)
    },
    isEmptyObject: function(t) {
        var e;
        for (e in t) return !1;
        return !0
    },
    type: function(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
    },
    globalEval: function(t) {
        var e, i = eval;
        (t = ot.trim(t)) && (1 === t.indexOf("use strict") ? ((e = K.createElement("script")).text = t, K.head.appendChild(e).parentNode.removeChild(e)) : i(t))
    },
    camelCase: function(t) {
        return t.replace(at, "ms-").replace(lt, ct)
    },
    nodeName: function(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    },
    each: function(t, e) {
        var n, s = 0;
        if (i(t))
            for (n = t.length; n > s && !1 !== e.call(t[s], s, t[s]); s++);
        else
            for (s in t)
                if (!1 === e.call(t[s], s, t[s])) break;
        return t
    },
    trim: function(t) {
        return null == t ? "" : (t + "").replace(rt, "")
    },
    makeArray: function(t, e) {
        var n = e || [];
        return null != t && (i(Object(t)) ? ot.merge(n, "string" == typeof t ? [t] : t) : Z.call(n, t)), n
    },
    inArray: function(t, e, i) {
        return null == e ? -1 : J.call(e, t, i)
    },
    merge: function(t, e) {
        for (var i = +e.length, n = 0, s = t.length; i > n; n++) t[s++] = e[n];
        return t.length = s, t
    },
    grep: function(t, e, i) {
        for (var n = [], s = 0, o = t.length, r = !i; o > s; s++) !e(t[s], s) !== r && n.push(t[s]);
        return n
    },
    map: function(t, e, n) {
        var s, o, r = 0,
            a = [];
        if (i(t))
            for (s = t.length; s > r; r++) null != (o = e(t[r], r, n)) && a.push(o);
        else
            for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
        return X.apply([], a)
    },
    guid: 1,
    proxy: function(t, e) {
        var i, n, s;
        return "string" == typeof e && (i = t[e], e = t, t = i), ot.isFunction(t) ? (n = Q.call(arguments, 2), (s = function() {
            return t.apply(e || this, n.concat(Q.call(arguments)))
        }).guid = t.guid = t.guid || ot.guid++, s) : void 0
    },
    now: Date.now,
    support: nt
}), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = G[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
    tt["[object " + e + "]"] = e.toLowerCase()
});
var ht = function(t) {
    function e(t, e, i, n) {
        var s, o, r, a, l, c, d, f, p = e && e.ownerDocument,
            m = e ? e.nodeType : 9;
        if (i = i || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return i;
        if (!n && ((e ? e.ownerDocument || e : F) !== A && P(e), e = e || A, N)) {
            if (11 !== m && (c = vt.exec(t)))
                if (s = c[1]) {
                    if (9 === m) {
                        if (!(r = e.getElementById(s))) return i;
                        if (r.id === s) return i.push(r), i
                    } else if (p && (r = p.getElementById(s)) && Y(e, r) && r.id === s) return i.push(r), i
                } else {
                    if (c[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                    if ((s = c[3]) && w.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(s)), i
                } if (w.qsa && !q[t + " "] && (!$ || !$.test(t))) {
                if (1 !== m) p = e, f = t;
                else if ("object" !== e.nodeName.toLowerCase()) {
                    for ((a = e.getAttribute("id")) ? a = a.replace(yt, "\\$&") : e.setAttribute("id", a = H), o = (d = S(t)).length, l = ut.test(a) ? "#" + a : "[id='" + a + "']"; o--;) d[o] = l + " " + u(d[o]);
                    f = d.join(","), p = _t.test(t) && h(e.parentNode) || e
                }
                if (f) try {
                    return Z.apply(i, p.querySelectorAll(f)), i
                } catch (z) {} finally {
                    a === H && e.removeAttribute("id")
                }
            }
        }
        return D(t.replace(at, "$1"), e, i, n)
    }

    function i() {
        function t(i, n) {
            return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
        }
        var e = [];
        return t
    }

    function n(t) {
        return t[H] = !0, t
    }

    function s(t) {
        var e = A.createElement("div");
        try {
            return !!t(e)
        } catch (w) {
            return !1
        } finally {
            e.parentNode && e.parentNode.removeChild(e), e = null
        }
    }

    function o(t, e) {
        for (var i = t.split("|"), n = i.length; n--;) x.attrHandle[i[n]] = e
    }

    function r(t, e) {
        var i = e && t,
            n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
        if (n) return n;
        if (i)
            for (; i = i.nextSibling;)
                if (i === e) return -1;
        return t ? 1 : -1
    }

    function a(t) {
        return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        }
    }

    function l(t) {
        return function(e) {
            var i = e.nodeName.toLowerCase();
            return ("input" === i || "button" === i) && e.type === t
        }
    }

    function c(t) {
        return n(function(e) {
            return e = +e, n(function(i, n) {
                for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
            })
        })
    }

    function h(t) {
        return t && "undefined" != typeof t.getElementsByTagName && t
    }

    function d() {}

    function u(t) {
        for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
        return n
    }

    function f(t, e, i) {
        var n = e.dir,
            s = i && "parentNode" === n,
            o = R++;
        return e.first ? function(e, i, o) {
            for (; e = e[n];)
                if (1 === e.nodeType || s) return t(e, i, o)
        } : function(e, i, r) {
            var a, l, c, h = [W, o];
            if (r) {
                for (; e = e[n];)
                    if ((1 === e.nodeType || s) && t(e, i, r)) return !0
            } else
                for (; e = e[n];)
                    if (1 === e.nodeType || s) {
                        if ((a = (l = (c = e[H] || (e[H] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[n]) && a[0] === W && a[1] === o) return h[2] = a[2];
                        if (l[n] = h, h[2] = t(e, i, r)) return !0
                    }
        }
    }

    function p(t) {
        return t.length > 1 ? function(e, i, n) {
            for (var s = t.length; s--;)
                if (!t[s](e, i, n)) return !1;
            return !0
        } : t[0]
    }

    function m(t, i, n) {
        for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
        return n
    }

    function g(t, e, i, n, s) {
        for (var o, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (i && !i(o, n, s) || (r.push(o), c && e.push(a)));
        return r
    }

    function v(t, e, i, s, o, r) {
        return s && !s[H] && (s = v(s)), o && !o[H] && (o = v(o, r)), n(function(n, r, a, l) {
            var c, h, d, u = [],
                f = [],
                p = r.length,
                v = n || m(e || "*", a.nodeType ? [a] : a, []),
                _ = !t || !n && e ? v : g(v, u, t, a, l),
                y = i ? o || (n ? t : p || s) ? [] : r : _;
            if (i && i(_, y, a, l), s)
                for (c = g(y, f), s(c, [], a, l), h = c.length; h--;)(d = c[h]) && (y[f[h]] = !(_[f[h]] = d));
            if (n) {
                if (o || t) {
                    if (o) {
                        for (c = [], h = y.length; h--;)(d = y[h]) && c.push(_[h] = d);
                        o(null, y = [], c, l)
                    }
                    for (h = y.length; h--;)(d = y[h]) && (c = o ? tt(n, d) : u[h]) > -1 && (n[c] = !(r[c] = d))
                }
            } else y = g(y === r ? y.splice(p, y.length) : y), o ? o(null, r, y, l) : Z.apply(r, y)
        })
    }

    function _(t) {
        for (var e, i, n, s = t.length, o = x.relative[t[0].type], r = o || x.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                return t === e
            }, r, !0), c = f(function(t) {
                return tt(e, t) > -1
            }, r, !0), h = [function(t, i, n) {
                var s = !o && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                return e = null, s
            }]; s > a; a++)
            if (i = x.relative[t[a].type]) h = [f(p(h), i)];
            else {
                if ((i = x.filter[t[a].type].apply(null, t[a].matches))[H]) {
                    for (n = ++a; s > n && !x.relative[t[n].type]; n++);
                    return v(a > 1 && p(h), a > 1 && u(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*" : ""
                    })).replace(at, "$1"), i, n > a && _(t.slice(a, n)), s > n && _(t = t.slice(n)), s > n && u(t))
                }
                h.push(i)
            } return p(h)
    }

    function y(t, i) {
        var s = i.length > 0,
            o = t.length > 0,
            r = function(n, r, a, l, c) {
                var h, d, u, f = 0,
                    p = "0",
                    m = n && [],
                    v = [],
                    _ = E,
                    y = n || o && x.find.TAG("*", c),
                    b = W += null == _ ? 1 : Math.random() || .1,
                    w = y.length;
                for (c && (E = r === A || r || c); p !== w && null != (h = y[p]); p++) {
                    if (o && h) {
                        for (d = 0, r || h.ownerDocument === A || (P(h), a = !N); u = t[d++];)
                            if (u(h, r || A, a)) {
                                l.push(h);
                                break
                            } c && (W = b)
                    }
                    s && ((h = !u && h) && f--, n && m.push(h))
                }
                if (f += p, s && p !== f) {
                    for (d = 0; u = i[d++];) u(m, v, r, a);
                    if (n) {
                        if (f > 0)
                            for (; p--;) m[p] || v[p] || (v[p] = Q.call(l));
                        v = g(v)
                    }
                    Z.apply(l, v), c && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l)
                }
                return c && (W = b, E = _), m
            };
        return s ? n(r) : r
    }
    var b, w, x, k, C, S, T, D, E, M, I, P, A, O, N, $, L, j, Y, H = "sizzle" + 1 * new Date,
        F = t.document,
        W = 0,
        R = 0,
        z = i(),
        B = i(),
        q = i(),
        U = function(t, e) {
            return t === e && (I = !0), 0
        },
        V = 1 << 31,
        G = {}.hasOwnProperty,
        K = [],
        Q = K.pop,
        X = K.push,
        Z = K.push,
        J = K.slice,
        tt = function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        },
        et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        it = "[\\x20\\t\\r\\n\\f]",
        nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
        ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
        rt = new RegExp(it + "+", "g"),
        at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
        lt = new RegExp("^" + it + "*," + it + "*"),
        ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
        ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
        dt = new RegExp(ot),
        ut = new RegExp("^" + nt + "$"),
        ft = {
            ID: new RegExp("^#(" + nt + ")"),
            CLASS: new RegExp("^\\.(" + nt + ")"),
            TAG: new RegExp("^(" + nt + "|[*])"),
            ATTR: new RegExp("^" + st),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + et + ")$", "i"),
            needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
        },
        pt = /^(?:input|select|textarea|button)$/i,
        mt = /^h\d$/i,
        gt = /^[^{]+\{\s*\[native \w/,
        vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _t = /[+~]/,
        yt = /'|\\/g,
        bt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
        wt = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n != n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        },
        xt = function() {
            P()
        };
    try {
        Z.apply(K = J.call(F.childNodes), F.childNodes), K[F.childNodes.length].nodeType
    } catch (Yt) {
        Z = {
            apply: K.length ? function(t, e) {
                X.apply(t, J.call(e))
            } : function(t, e) {
                for (var i = t.length, n = 0; t[i++] = e[n++];);
                t.length = i - 1
            }
        }
    }
    for (b in w = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, P = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : F;
            return n !== A && 9 === n.nodeType && n.documentElement ? (O = (A = n).documentElement, N = !C(A), (i = A.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xt, !1) : i.attachEvent && i.attachEvent("onunload", xt)), w.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = s(function(t) {
                return t.appendChild(A.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = gt.test(A.getElementsByClassName), w.getById = s(function(t) {
                return O.appendChild(t).id = H, !A.getElementsByName || !A.getElementsByName(H).length
            }), w.getById ? (x.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && N) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }, x.filter.ID = function(t) {
                var e = t.replace(bt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function(t) {
                var e = t.replace(bt, wt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    s = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                return "undefined" != typeof e.getElementsByClassName && N ? e.getElementsByClassName(t) : void 0
            }, L = [], $ = [], (w.qsa = gt.test(A.querySelectorAll)) && (s(function(t) {
                O.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || $.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + H + "-]").length || $.push("~="), t.querySelectorAll(":checked").length || $.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || $.push(".#.+[+~]")
            }), s(function(t) {
                var e = A.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && $.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), $.push(",.*:")
            })), (w.matchesSelector = gt.test(j = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && s(function(t) {
                w.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), L.push("!=", ot)
            }), $ = $.length && new RegExp($.join("|")), L = L.length && new RegExp(L.join("|")), e = gt.test(O.compareDocumentPosition), Y = e || gt.test(O.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return I = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === A || t.ownerDocument === F && Y(F, t) ? -1 : e === A || e.ownerDocument === F && Y(F, e) ? 1 : M ? tt(M, t) - tt(M, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return I = !0, 0;
                var i, n = 0,
                    s = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    l = [e];
                if (!s || !o) return t === A ? -1 : e === A ? 1 : s ? -1 : o ? 1 : M ? tt(M, t) - tt(M, e) : 0;
                if (s === o) return r(t, e);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; a[n] === l[n];) n++;
                return n ? r(a[n], l[n]) : a[n] === F ? -1 : l[n] === F ? 1 : 0
            }, A) : A
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== A && P(t), i = i.replace(ht, "='$1']"), w.matchesSelector && N && !q[i + " "] && (!L || !L.test(i)) && (!$ || !$.test(i))) try {
                var n = j.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (k) {}
            return e(i, A, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== A && P(t), Y(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== A && P(t);
            var i = x.attrHandle[e.toLowerCase()],
                n = i && G.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
            return void 0 !== n ? n : w.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                s = 0;
            if (I = !w.detectDuplicates, M = !w.sortStable && t.slice(0), t.sort(U), I) {
                for (; e = t[s++];) e === t[s] && (n = i.push(s));
                for (; n--;) t.splice(i[n], 1)
            }
            return M = null, t
        }, k = e.getText = function(t) {
            var e, i = "",
                n = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += k(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[n++];) i += k(e);
            return i
        }, (x = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(bt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && z(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3),
                        r = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var c, h, d, u, f, p, m = o !== r ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            _ = !l && !a,
                            y = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (u = e; u = u[m];)
                                        if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [r ? g.firstChild : g.lastChild], r && _) {
                                for (y = (f = (c = (h = (d = (u = g)[H] || (u[H] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[t] || [])[0] === W && c[1]) && c[2], u = f && g.childNodes[f]; u = ++f && u && u[m] || (y = f = 0) || p.pop();)
                                    if (1 === u.nodeType && ++y && u === e) {
                                        h[t] = [W, f, y];
                                        break
                                    }
                            } else if (_ && (y = f = (c = (h = (d = (u = e)[H] || (u[H] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[t] || [])[0] === W && c[1]), !1 === y)
                                for (;
                                    (u = ++f && u && u[m] || (y = f = 0) || p.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++y || (_ && ((h = (d = u[H] || (u[H] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[t] = [W, y]), u !== e)););
                            return (y -= s) === n || y % n == 0 && y / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var s, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[H] ? o(i) : o.length > 1 ? (s = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = o(t, i), r = s.length; r--;) t[n = tt(t, s[r])] = !(e[n] = s[r])
                    }) : function(t) {
                        return o(t, 0, s)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        s = T(t.replace(at, "$1"));
                    return s[H] ? n(function(t, e, i, n) {
                        for (var o, r = s(t, null, n, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, n, o) {
                        return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(bt, wt),
                        function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
                        function(e) {
                            var i;
                            do {
                                if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === O
                },
                focus: function(t) {
                    return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: c(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: c(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }).pseudos.nth = x.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[b] = a(b);
    for (b in {
            submit: !0,
            reset: !0
        }) x.pseudos[b] = l(b);
    return d.prototype = x.filters = x.pseudos, x.setFilters = new d, S = e.tokenize = function(t, i) {
        var n, s, o, r, a, l, c, h = B[t + " "];
        if (h) return i ? 0 : h.slice(0);
        for (a = t, l = [], c = x.preFilter; a;) {
            for (r in n && !(s = lt.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = ct.exec(a)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(at, " ")
                }), a = a.slice(n.length)), x.filter) !(s = ft[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({
                value: n,
                type: r,
                matches: s
            }), a = a.slice(n.length));
            if (!n) break
        }
        return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
    }, T = e.compile = function(t, e) {
        var i, n = [],
            s = [],
            o = q[t + " "];
        if (!o) {
            for (e || (e = S(t)), i = e.length; i--;)(o = _(e[i]))[H] ? n.push(o) : s.push(o);
            (o = q(t, y(s, n))).selector = t
        }
        return o
    }, D = e.select = function(t, e, i, n) {
        var s, o, r, a, l, c = "function" == typeof t && t,
            d = !n && S(t = c.selector || t);
        if (i = i || [], 1 === d.length) {
            if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (r = o[0]).type && w.getById && 9 === e.nodeType && N && x.relative[o[1].type]) {
                if (!(e = (x.find.ID(r.matches[0].replace(bt, wt), e) || [])[0])) return i;
                c && (e = e.parentNode), t = t.slice(o.shift().value.length)
            }
            for (s = ft.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !x.relative[a = r.type]);)
                if ((l = x.find[a]) && (n = l(r.matches[0].replace(bt, wt), _t.test(o[0].type) && h(e.parentNode) || e))) {
                    if (o.splice(s, 1), !(t = n.length && u(o))) return Z.apply(i, n), i;
                    break
                }
        }
        return (c || T(t, d))(n, e, !N, i, !e || _t.test(t) && h(e.parentNode) || e), i
    }, w.sortStable = H.split("").sort(U).join("") === H, w.detectDuplicates = !!I, P(), w.sortDetached = s(function(t) {
        return 1 & t.compareDocumentPosition(A.createElement("div"))
    }), s(function(t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function(t, e, i) {
        return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
    }), w.attributes && s(function(t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
    }) || o("value", function(t, e, i) {
        return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
    }), s(function(t) {
        return null == t.getAttribute("disabled")
    }) || o(et, function(t, e, i) {
        var n;
        return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
    }), e
}(t);
ot.find = ht, ot.expr = ht.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ht.uniqueSort, ot.text = ht.getText, ot.isXMLDoc = ht.isXML, ot.contains = ht.contains;
var dt = function(t, e, i) {
        for (var n = [], s = void 0 !== i;
            (t = t[e]) && 9 !== t.nodeType;)
            if (1 === t.nodeType) {
                if (s && ot(t).is(i)) break;
                n.push(t)
            } return n
    },
    ut = function(t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i
    },
    ft = ot.expr.match.needsContext,
    pt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    mt = /^.[^:#\[\.,]*$/;
ot.filter = function(t, e, i) {
    var n = e[0];
    return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ot.find.matchesSelector(n, t) ? [n] : [] : ot.find.matches(t, ot.grep(e, function(t) {
        return 1 === t.nodeType
    }))
}, ot.fn.extend({
    find: function(t) {
        var e, i = this.length,
            n = [],
            s = this;
        if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
            for (e = 0; i > e; e++)
                if (ot.contains(s[e], this)) return !0
        }));
        for (e = 0; i > e; e++) ot.find(t, s[e], n);
        return (n = this.pushStack(i > 1 ? ot.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
    },
    filter: function(t) {
        return this.pushStack(n(this, t || [], !1))
    },
    not: function(t) {
        return this.pushStack(n(this, t || [], !0))
    },
    is: function(t) {
        return !!n(this, "string" == typeof t && ft.test(t) ? ot(t) : t || [], !1).length
    }
});
var gt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
(ot.fn.init = function(t, e, i) {
    var n, s;
    if (!t) return this;
    if (i = i || gt, "string" == typeof t) {
        if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
        if (n[1]) {
            if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : K, !0)), pt.test(n[1]) && ot.isPlainObject(e))
                for (n in e) ot.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this
        }
        return (s = K.getElementById(n[2])) && s.parentNode && (this.length = 1, this[0] = s), this.context = K, this.selector = t, this
    }
    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
}).prototype = ot.fn, gt = ot(K);
var _t = /^(?:parents|prev(?:Until|All))/,
    yt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
ot.fn.extend({
    has: function(t) {
        var e = ot(t, this),
            i = e.length;
        return this.filter(function() {
            for (var t = 0; i > t; t++)
                if (ot.contains(this, e[t])) return !0
        })
    },
    closest: function(t, e) {
        for (var i, n = 0, s = this.length, o = [], r = ft.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; s > n; n++)
            for (i = this[n]; i && i !== e; i = i.parentNode)
                if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && ot.find.matchesSelector(i, t))) {
                    o.push(i);
                    break
                } return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
    },
    index: function(t) {
        return t ? "string" == typeof t ? J.call(ot(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(t, e) {
        return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
    },
    addBack: function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
}), ot.each({
    parent: function(t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
    },
    parents: function(t) {
        return dt(t, "parentNode")
    },
    parentsUntil: function(t, e, i) {
        return dt(t, "parentNode", i)
    },
    next: function(t) {
        return s(t, "nextSibling")
    },
    prev: function(t) {
        return s(t, "previousSibling")
    },
    nextAll: function(t) {
        return dt(t, "nextSibling")
    },
    prevAll: function(t) {
        return dt(t, "previousSibling")
    },
    nextUntil: function(t, e, i) {
        return dt(t, "nextSibling", i)
    },
    prevUntil: function(t, e, i) {
        return dt(t, "previousSibling", i)
    },
    siblings: function(t) {
        return ut((t.parentNode || {}).firstChild, t)
    },
    children: function(t) {
        return ut(t.firstChild)
    },
    contents: function(t) {
        return t.contentDocument || ot.merge([], t.childNodes)
    }
}, function(t, e) {
    ot.fn[t] = function(i, n) {
        var s = ot.map(this, e, i);
        return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = ot.filter(n, s)), this.length > 1 && (yt[t] || ot.uniqueSort(s), _t.test(t) && s.reverse()), this.pushStack(s)
    }
});
var bt, wt = /\S+/g;
ot.Callbacks = function(t) {
    t = "string" == typeof t ? o(t) : ot.extend({}, t);
    var e, i, n, s, r = [],
        a = [],
        l = -1,
        c = function() {
            for (s = t.once, n = e = !0; a.length; l = -1)
                for (i = a.shift(); ++l < r.length;) !1 === r[l].apply(i[0], i[1]) && t.stopOnFalse && (l = r.length, i = !1);
            t.memory || (i = !1), e = !1, s && (r = i ? [] : "")
        },
        h = {
            add: function() {
                return r && (i && !e && (l = r.length - 1, a.push(i)), function n(e) {
                    ot.each(e, function(e, i) {
                        ot.isFunction(i) ? t.unique && h.has(i) || r.push(i) : i && i.length && "string" !== ot.type(i) && n(i)
                    })
                }(arguments), i && !e && c()), this
            },
            remove: function() {
                return ot.each(arguments, function(t, e) {
                    for (var i;
                        (i = ot.inArray(e, r, i)) > -1;) r.splice(i, 1), l >= i && l--
                }), this
            },
            has: function(t) {
                return t ? ot.inArray(t, r) > -1 : r.length > 0
            },
            empty: function() {
                return r && (r = []), this
            },
            disable: function() {
                return s = a = [], r = i = "", this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return s = a = [], i || (r = i = ""), this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(t, i) {
                return s || (i = [t, (i = i || []).slice ? i.slice() : i], a.push(i), e || c()), this
            },
            fire: function() {
                return h.fireWith(this, arguments), this
            },
            fired: function() {
                return !!n
            }
        };
    return h
}, ot.extend({
    Deferred: function(t) {
        var e = [
                ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ot.Callbacks("memory")]
            ],
            i = "pending",
            n = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this
                },
                then: function() {
                    var t = arguments;
                    return ot.Deferred(function(i) {
                        ot.each(e, function(e, o) {
                            var r = ot.isFunction(t[e]) && t[e];
                            s[o[1]](function() {
                                var t = r && r.apply(this, arguments);
                                t && ot.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? ot.extend(t, n) : n
                }
            },
            s = {};
        return n.pipe = n.then, ot.each(e, function(t, o) {
            var r = o[2],
                a = o[3];
            n[o[1]] = r.add, a && r.add(function() {
                i = a
            }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                return s[o[0] + "With"](this === s ? n : this, arguments), this
            }, s[o[0] + "With"] = r.fireWith
        }), n.promise(s), t && t.call(s, s), s
    },
    when: function(t) {
        var e, i, n, s = 0,
            o = Q.call(arguments),
            r = o.length,
            a = 1 !== r || t && ot.isFunction(t.promise) ? r : 0,
            l = 1 === a ? t : ot.Deferred(),
            c = function(t, i, n) {
                return function(s) {
                    i[t] = this, n[t] = arguments.length > 1 ? Q.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                }
            };
        if (r > 1)
            for (e = new Array(r), i = new Array(r), n = new Array(r); r > s; s++) o[s] && ot.isFunction(o[s].promise) ? o[s].promise().progress(c(s, i, e)).done(c(s, n, o)).fail(l.reject) : --a;
        return a || l.resolveWith(n, o), l.promise()
    }
}), ot.fn.ready = function(t) {
    return ot.ready.promise().done(t), this
}, ot.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(t) {
        t ? ot.readyWait++ : ot.ready(!0)
    },
    ready: function(t) {
        (!0 === t ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, !0 !== t && --ot.readyWait > 0 || (bt.resolveWith(K, [ot]), ot.fn.triggerHandler && (ot(K).triggerHandler("ready"), ot(K).off("ready"))))
    }
}), ot.ready.promise = function(e) {
    return bt || (bt = ot.Deferred(), "complete" === K.readyState || "loading" !== K.readyState && !K.documentElement.doScroll ? t.setTimeout(ot.ready) : (K.addEventListener("DOMContentLoaded", r), t.addEventListener("load", r))), bt.promise(e)
}, ot.ready.promise();
var xt = function(t, e, i, n, s, o, r) {
        var a = 0,
            l = t.length,
            c = null == i;
        if ("object" === ot.type(i))
            for (a in s = !0, i) xt(t, e, a, i[a], !0, o, r);
        else if (void 0 !== n && (s = !0, ot.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                return c.call(ot(t), i)
            })), e))
            for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
        return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
    },
    kt = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
a.uid = 1, a.prototype = {
    register: function(t, e) {
        var i = e || {};
        return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
            value: i,
            writable: !0,
            configurable: !0
        }), t[this.expando]
    },
    cache: function(t) {
        if (!kt(t)) return {};
        var e = t[this.expando];
        return e || (e = {}, kt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
            value: e,
            configurable: !0
        }))), e
    },
    set: function(t, e, i) {
        var n, s = this.cache(t);
        if ("string" == typeof e) s[e] = i;
        else
            for (n in e) s[n] = e[n];
        return s
    },
    get: function(t, e) {
        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
    },
    access: function(t, e, i) {
        var n;
        return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, ot.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
    },
    remove: function(t, e) {
        var i, n, s, o = t[this.expando];
        if (void 0 !== o) {
            if (void 0 === e) this.register(t);
            else {
                ot.isArray(e) ? n = e.concat(e.map(ot.camelCase)) : (s = ot.camelCase(e), e in o ? n = [e, s] : n = (n = s) in o ? [n] : n.match(wt) || []), i = n.length;
                for (; i--;) delete o[n[i]]
            }(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
        }
    },
    hasData: function(t) {
        var e = t[this.expando];
        return void 0 !== e && !ot.isEmptyObject(e)
    }
};
var Ct = new a,
    St = new a,
    Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Dt = /[A-Z]/g;
ot.extend({
    hasData: function(t) {
        return St.hasData(t) || Ct.hasData(t)
    },
    data: function(t, e, i) {
        return St.access(t, e, i)
    },
    removeData: function(t, e) {
        St.remove(t, e)
    },
    _data: function(t, e, i) {
        return Ct.access(t, e, i)
    },
    _removeData: function(t, e) {
        Ct.remove(t, e)
    }
}), ot.fn.extend({
    data: function(t, e) {
        var i, n, s, o = this[0],
            r = o && o.attributes;
        if (void 0 === t) {
            if (this.length && (s = St.get(o), 1 === o.nodeType && !Ct.get(o, "hasDataAttrs"))) {
                for (i = r.length; i--;) r[i] && (0 === (n = r[i].name).indexOf("data-") && (n = ot.camelCase(n.slice(5)), l(o, n, s[n])));
                Ct.set(o, "hasDataAttrs", !0)
            }
            return s
        }
        return "object" == typeof t ? this.each(function() {
            St.set(this, t)
        }) : xt(this, function(e) {
            var i, n;
            if (o && void 0 === e) {
                if (void 0 !== (i = St.get(o, t) || St.get(o, t.replace(Dt, "-$&").toLowerCase()))) return i;
                if (n = ot.camelCase(t), void 0 !== (i = St.get(o, n))) return i;
                if (void 0 !== (i = l(o, n, void 0))) return i
            } else n = ot.camelCase(t), this.each(function() {
                var i = St.get(this, n);
                St.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && St.set(this, t, e)
            })
        }, null, e, arguments.length > 1, null, !0)
    },
    removeData: function(t) {
        return this.each(function() {
            St.remove(this, t)
        })
    }
}), ot.extend({
    queue: function(t, e, i) {
        var n;
        return t ? (e = (e || "fx") + "queue", n = Ct.get(t, e), i && (!n || ot.isArray(i) ? n = Ct.access(t, e, ot.makeArray(i)) : n.push(i)), n || []) : void 0
    },
    dequeue: function(t, e) {
        e = e || "fx";
        var i = ot.queue(t, e),
            n = i.length,
            s = i.shift(),
            o = ot._queueHooks(t, e),
            r = function() {
                ot.dequeue(t, e)
            };
        "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire()
    },
    _queueHooks: function(t, e) {
        var i = e + "queueHooks";
        return Ct.get(t, i) || Ct.access(t, i, {
            empty: ot.Callbacks("once memory").add(function() {
                Ct.remove(t, [e + "queue", i])
            })
        })
    }
}), ot.fn.extend({
    queue: function(t, e) {
        var i = 2;
        return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
            var i = ot.queue(this, t, e);
            ot._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ot.dequeue(this, t)
        })
    },
    dequeue: function(t) {
        return this.each(function() {
            ot.dequeue(this, t)
        })
    },
    clearQueue: function(t) {
        return this.queue(t || "fx", [])
    },
    promise: function(t, e) {
        var i, n = 1,
            s = ot.Deferred(),
            o = this,
            r = this.length,
            a = function() {
                --n || s.resolveWith(o, [o])
            };
        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = Ct.get(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
        return a(), s.promise(e)
    }
});
var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Mt = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
    It = ["Top", "Right", "Bottom", "Left"],
    Pt = function(t, e) {
        return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
    },
    At = /^(?:checkbox|radio)$/i,
    Ot = /<([\w:-]+)/,
    Nt = /^$|\/(?:java|ecma)script/i,
    $t = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
$t.optgroup = $t.option, $t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead, $t.th = $t.td;
var Lt = /<|&#?\w+;/;
! function() {
    var t = K.createDocumentFragment().appendChild(K.createElement("div")),
        e = K.createElement("input");
    e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
}();
var jt = /^key/,
    Yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ht = /^([^.]*)(?:\.(.+)|)/;
ot.event = {
    global: {},
    add: function(t, e, i, n, s) {
        var o, r, a, l, c, h, d, u, f, p, m, g = Ct.get(t);
        if (g)
            for (i.handler && (i = (o = i).handler, s = o.selector), i.guid || (i.guid = ot.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) {
                    return void 0 !== ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
                }), c = (e = (e || "").match(wt) || [""]).length; c--;) f = m = (a = Ht.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = ot.event.special[f] || {}, f = (s ? d.delegateType : d.bindType) || f, d = ot.event.special[f] || {}, h = ot.extend({
                type: f,
                origType: m,
                data: n,
                handler: i,
                guid: i.guid,
                selector: s,
                needsContext: s && ot.expr.match.needsContext.test(s),
                namespace: p.join(".")
            }, o), (u = l[f]) || ((u = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, p, r) || t.addEventListener && t.addEventListener(f, r)), d.add && (d.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? u.splice(u.delegateCount++, 0, h) : u.push(h), ot.event.global[f] = !0)
    },
    remove: function(t, e, i, n, s) {
        var o, r, a, l, c, h, d, u, f, p, m, g = Ct.hasData(t) && Ct.get(t);
        if (g && (l = g.events)) {
            for (c = (e = (e || "").match(wt) || [""]).length; c--;)
                if (f = m = (a = Ht.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                    for (d = ot.event.special[f] || {}, u = l[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = u.length; o--;) h = u[o], !s && m !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (u.splice(o, 1), h.selector && u.delegateCount--, d.remove && d.remove.call(t, h));
                    r && !u.length && (d.teardown && !1 !== d.teardown.call(t, p, g.handle) || ot.removeEvent(t, f, g.handle), delete l[f])
                } else
                    for (f in l) ot.event.remove(t, f + e[c], i, n, !0);
            ot.isEmptyObject(l) && Ct.remove(t, "handle events")
        }
    },
    dispatch: function(t) {
        t = ot.event.fix(t);
        var e, i, n, s, o, r = [],
            a = Q.call(arguments),
            l = (Ct.get(this, "events") || {})[t.type] || [],
            c = ot.event.special[t.type] || {};
        if (a[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
            for (r = ot.event.handlers.call(this, t, l), e = 0;
                (s = r[e++]) && !t.isPropagationStopped();)
                for (t.currentTarget = s.elem, i = 0;
                    (o = s.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, void 0 !== (n = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, t), t.result
        }
    },
    handlers: function(t, e) {
        var i, n, s, o, r = [],
            a = e.delegateCount,
            l = t.target;
        if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
            for (; l !== this; l = l.parentNode || this)
                if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                    for (n = [], i = 0; a > i; i++) void 0 === n[s = (o = e[i]).selector + " "] && (n[s] = o.needsContext ? ot(s, this).index(l) > -1 : ot.find(s, this, null, [l]).length), n[s] && n.push(o);
                    n.length && r.push({
                        elem: l,
                        handlers: n
                    })
                } return a < e.length && r.push({
            elem: this,
            handlers: e.slice(a)
        }), r
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(t, e) {
            return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
        }
    },
    mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(t, e) {
            var i, n, s, o = e.button;
            return null == t.pageX && null != e.clientX && (n = (i = t.target.ownerDocument || K).documentElement, s = i.body, t.pageX = e.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
        }
    },
    fix: function(t) {
        if (t[ot.expando]) return t;
        var e, i, n, s = t.type,
            o = t,
            r = this.fixHooks[s];
        for (r || (this.fixHooks[s] = r = Yt.test(s) ? this.mouseHooks : jt.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new ot.Event(o), e = n.length; e--;) t[i = n[e]] = o[i];
        return t.target || (t.target = K), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, o) : t
    },
    special: {
        load: {
            noBubble: !0
        },
        focus: {
            trigger: function() {
                return this !== m() && this.focus ? (this.focus(), !1) : void 0
            },
            delegateType: "focusin"
        },
        blur: {
            trigger: function() {
                return this === m() && this.blur ? (this.blur(), !1) : void 0
            },
            delegateType: "focusout"
        },
        click: {
            trigger: function() {
                return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
            },
            _default: function(t) {
                return ot.nodeName(t.target, "a")
            }
        },
        beforeunload: {
            postDispatch: function(t) {
                void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
            }
        }
    }
}, ot.removeEvent = function(t, e, i) {
    t.removeEventListener && t.removeEventListener(e, i)
}, ot.Event = function(t, e) {
    return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? f : p) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
}, ot.Event.prototype = {
    constructor: ot.Event,
    isDefaultPrevented: p,
    isPropagationStopped: p,
    isImmediatePropagationStopped: p,
    isSimulated: !1,
    preventDefault: function() {
        var t = this.originalEvent;
        this.isDefaultPrevented = f, t && !this.isSimulated && t.preventDefault()
    },
    stopPropagation: function() {
        var t = this.originalEvent;
        this.isPropagationStopped = f, t && !this.isSimulated && t.stopPropagation()
    },
    stopImmediatePropagation: function() {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = f, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
    }
}, ot.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
}, function(t, e) {
    ot.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function(t) {
            var i, n = this,
                s = t.relatedTarget,
                o = t.handleObj;
            return s && (s === n || ot.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
        }
    }
}), ot.fn.extend({
    on: function(t, e, i, n) {
        return g(this, t, e, i, n)
    },
    one: function(t, e, i, n) {
        return g(this, t, e, i, n, 1)
    },
    off: function(t, e, i) {
        var n, s;
        if (t && t.preventDefault && t.handleObj) return n = t.handleObj, ot(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
        if ("object" == typeof t) {
            for (s in t) this.off(s, e, t[s]);
            return this
        }
        return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = p), this.each(function() {
            ot.event.remove(this, t, i, e)
        })
    }
});
var Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Wt = /<script|<style|<link/i,
    Rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    zt = /^true\/(.*)/,
    Bt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
ot.extend({
    htmlPrefilter: function(t) {
        return t.replace(Ft, "<$1></$2>")
    },
    clone: function(t, e, i) {
        var n, s, o, r, a = t.cloneNode(!0),
            l = ot.contains(t.ownerDocument, t);
        if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
            for (r = h(a), n = 0, s = (o = h(t)).length; s > n; n++) w(o[n], r[n]);
        if (e)
            if (i)
                for (o = o || h(t), r = r || h(a), n = 0, s = o.length; s > n; n++) b(o[n], r[n]);
            else b(t, a);
        return (r = h(a, "script")).length > 0 && d(r, !l && h(t, "script")), a
    },
    cleanData: function(t) {
        for (var e, i, n, s = ot.event.special, o = 0; void 0 !== (i = t[o]); o++)
            if (kt(i)) {
                if (e = i[Ct.expando]) {
                    if (e.events)
                        for (n in e.events) s[n] ? ot.event.remove(i, n) : ot.removeEvent(i, n, e.handle);
                    i[Ct.expando] = void 0
                }
                i[St.expando] && (i[St.expando] = void 0)
            }
    }
}), ot.fn.extend({
    domManip: x,
    detach: function(t) {
        return k(this, t, !0)
    },
    remove: function(t) {
        return k(this, t)
    },
    text: function(t) {
        return xt(this, function(t) {
            return void 0 === t ? ot.text(this) : this.empty().each(function() {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
            })
        }, null, t, arguments.length)
    },
    append: function() {
        return x(this, arguments, function(t) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || v(this, t).appendChild(t)
        })
    },
    prepend: function() {
        return x(this, arguments, function(t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = v(this, t);
                e.insertBefore(t, e.firstChild)
            }
        })
    },
    before: function() {
        return x(this, arguments, function(t) {
            this.parentNode && this.parentNode.insertBefore(t, this)
        })
    },
    after: function() {
        return x(this, arguments, function(t) {
            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
    },
    empty: function() {
        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(h(t, !1)), t.textContent = "");
        return this
    },
    clone: function(t, e) {
        return t = null != t && t, e = null == e ? t : e, this.map(function() {
            return ot.clone(this, t, e)
        })
    },
    html: function(t) {
        return xt(this, function(t) {
            var e = this[0] || {},
                i = 0,
                n = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if ("string" == typeof t && !Wt.test(t) && !$t[(Ot.exec(t) || ["", ""])[1].toLowerCase()]) {
                t = ot.htmlPrefilter(t);
                try {
                    for (; n > i; i++) 1 === (e = this[i] || {}).nodeType && (ot.cleanData(h(e, !1)), e.innerHTML = t);
                    e = 0
                } catch (Q) {}
            }
            e && this.empty().append(t)
        }, null, t, arguments.length)
    },
    replaceWith: function() {
        var t = [];
        return x(this, arguments, function(e) {
            var i = this.parentNode;
            ot.inArray(this, t) < 0 && (ot.cleanData(h(this)), i && i.replaceChild(e, this))
        }, t)
    }
}), ot.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function(t, e) {
    ot.fn[t] = function(t) {
        for (var i, n = [], s = ot(t), o = s.length - 1, r = 0; o >= r; r++) i = r === o ? this : this.clone(!0), ot(s[r])[e](i), Z.apply(n, i.get());
        return this.pushStack(n)
    }
});
var qt, Ut = {
        HTML: "block",
        BODY: "block"
    },
    Vt = /^margin/,
    Gt = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
    Kt = function(e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    },
    Qt = function(t, e, i, n) {
        var s, o, r = {};
        for (o in e) r[o] = t.style[o], t.style[o] = e[o];
        for (o in s = i.apply(t, n || []), e) t.style[o] = r[o];
        return s
    },
    Xt = K.documentElement;
! function() {
    var e, i, n, s, o = K.createElement("div"),
        r = K.createElement("div");
    if (r.style) {
        function a() {
            r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r.innerHTML = "", Xt.appendChild(o);
            var a = t.getComputedStyle(r);
            e = "1%" !== a.top, s = "2px" === a.marginLeft, i = "4px" === a.width, r.style.marginRight = "50%", n = "4px" === a.marginRight, Xt.removeChild(o)
        }
        r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === r.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(r), ot.extend(nt, {
            pixelPosition: function() {
                return a(), e
            },
            boxSizingReliable: function() {
                return null == i && a(), i
            },
            pixelMarginRight: function() {
                return null == i && a(), n
            },
            reliableMarginLeft: function() {
                return null == i && a(), s
            },
            reliableMarginRight: function() {
                var e, i = r.appendChild(K.createElement("div"));
                return i.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", r.style.width = "1px", Xt.appendChild(o), e = !parseFloat(t.getComputedStyle(i).marginRight), Xt.removeChild(o), r.removeChild(i), e
            }
        })
    }
}();
var Zt = /^(none|table(?!-c[ea]).+)/,
    Jt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    te = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    ee = ["Webkit", "O", "Moz", "ms"],
    ie = K.createElement("div").style;
ot.extend({
    cssHooks: {
        opacity: {
            get: function(t, e) {
                if (e) {
                    var i = T(t, "opacity");
                    return "" === i ? "1" : i
                }
            }
        }
    },
    cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },
    cssProps: {
        float: "cssFloat"
    },
    style: function(t, e, i, n) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var s, o, r, a = ot.camelCase(e),
                l = t.style;
            return e = ot.cssProps[a] || (ot.cssProps[a] = E(a) || a), r = ot.cssHooks[e] || ot.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e] : ("string" === (o = typeof i) && (s = Mt.exec(i)) && s[1] && (i = c(t, e, s), o = "number"), void(null != i && i == i && ("number" === o && (i += s && s[3] || (ot.cssNumber[a] ? "" : "px")), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))))
        }
    },
    css: function(t, e, i, n) {
        var s, o, r, a = ot.camelCase(e);
        return e = ot.cssProps[a] || (ot.cssProps[a] = E(a) || a), (r = ot.cssHooks[e] || ot.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = T(t, e, n)), "normal" === s && e in te && (s = te[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
    }
}), ot.each(["height", "width"], function(t, e) {
    ot.cssHooks[e] = {
        get: function(t, i, n) {
            return i ? Zt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Qt(t, Jt, function() {
                return P(t, e, n)
            }) : P(t, e, n) : void 0
        },
        set: function(t, i, n) {
            var s, o = n && Kt(t),
                r = n && I(t, e, n, "border-box" === ot.css(t, "boxSizing", !1, o), o);
            return r && (s = Mt.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = ot.css(t, e)), M(t, i, r)
        }
    }
}), ot.cssHooks.marginLeft = D(nt.reliableMarginLeft, function(t, e) {
    return e ? (parseFloat(T(t, "marginLeft")) || t.getBoundingClientRect().left - Qt(t, {
        marginLeft: 0
    }, function() {
        return t.getBoundingClientRect().left
    })) + "px" : void 0
}), ot.cssHooks.marginRight = D(nt.reliableMarginRight, function(t, e) {
    return e ? Qt(t, {
        display: "inline-block"
    }, T, [t, "marginRight"]) : void 0
}), ot.each({
    margin: "",
    padding: "",
    border: "Width"
}, function(t, e) {
    ot.cssHooks[t + e] = {
        expand: function(i) {
            for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + It[n] + e] = o[n] || o[n - 2] || o[0];
            return s
        }
    }, Vt.test(t) || (ot.cssHooks[t + e].set = M)
}), ot.fn.extend({
    css: function(t, e) {
        return xt(this, function(t, e, i) {
            var n, s, o = {},
                r = 0;
            if (ot.isArray(e)) {
                for (n = Kt(t), s = e.length; s > r; r++) o[e[r]] = ot.css(t, e[r], !1, n);
                return o
            }
            return void 0 !== i ? ot.style(t, e, i) : ot.css(t, e)
        }, t, e, arguments.length > 1)
    },
    show: function() {
        return A(this, !0)
    },
    hide: function() {
        return A(this)
    },
    toggle: function(t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
            Pt(this) ? ot(this).show() : ot(this).hide()
        })
    }
}), ot.Tween = O, O.prototype = {
    constructor: O,
    init: function(t, e, i, n, s, o) {
        this.elem = t, this.prop = i, this.easing = s || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ot.cssNumber[i] ? "" : "px")
    },
    cur: function() {
        var t = O.propHooks[this.prop];
        return t && t.get ? t.get(this) : O.propHooks._default.get(this)
    },
    run: function(t) {
        var e, i = O.propHooks[this.prop];
        return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : O.propHooks._default.set(this), this
    }
}, O.prototype.init.prototype = O.prototype, O.propHooks = {
    _default: {
        get: function(t) {
            var e;
            return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
        },
        set: function(t) {
            ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
        }
    }
}, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
    set: function(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
    }
}, ot.easing = {
    linear: function(t) {
        return t
    },
    swing: function(t) {
        return .5 - Math.cos(t * Math.PI) / 2
    },
    _default: "swing"
}, ot.fx = O.prototype.init, ot.fx.step = {};
var ne, se, oe = /^(?:toggle|show|hide)$/,
    re = /queueHooks$/;
ot.Animation = ot.extend(H, {
        tweeners: {
            "*": [function(t, e) {
                var i = this.createTween(t, e);
                return c(i.elem, t, Mt.exec(e), i), i
            }]
        },
        tweener: function(t, e) {
            ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(wt);
            for (var i, n = 0, s = t.length; s > n; n++) i = t[n], H.tweeners[i] = H.tweeners[i] || [], H.tweeners[i].unshift(e)
        },
        prefilters: [j],
        prefilter: function(t, e) {
            e ? H.prefilters.unshift(t) : H.prefilters.push(t)
        }
    }), ot.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? ot.extend({}, t) : {
            complete: i || !i && e || ot.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !ot.isFunction(e) && e
        };
        return n.duration = ot.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ot.fx.speeds ? ot.fx.speeds[n.duration] : ot.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            ot.isFunction(n.old) && n.old.call(this), n.queue && ot.dequeue(this, n.queue)
        }, n
    }, ot.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Pt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(t, e, i, n) {
            var s = ot.isEmptyObject(t),
                o = ot.speed(e, i, n),
                r = function() {
                    var e = H(this, ot.extend({}, t), o);
                    (s || Ct.get(this, "finish")) && e.stop(!0)
                };
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    s = null != t && t + "queueHooks",
                    o = ot.timers,
                    r = Ct.get(this);
                if (s) r[s] && r[s].stop && n(r[s]);
                else
                    for (s in r) r[s] && r[s].stop && re.test(s) && n(r[s]);
                for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                !e && i || ot.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, i = Ct.get(this),
                    n = i[t + "queue"],
                    s = i[t + "queueHooks"],
                    o = ot.timers,
                    r = n ? n.length : 0;
                for (i.finish = !0, ot.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), ot.each(["toggle", "show", "hide"], function(t, e) {
        var i = ot.fn[e];
        ot.fn[e] = function(t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate($(e, !0), t, n, s)
        }
    }), ot.each({
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ot.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), ot.timers = [], ot.fx.tick = function() {
        var t, e = 0,
            i = ot.timers;
        for (ne = ot.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || ot.fx.stop(), ne = void 0
    }, ot.fx.timer = function(t) {
        ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
    }, ot.fx.interval = 13, ot.fx.start = function() {
        se || (se = t.setInterval(ot.fx.tick, ot.fx.interval))
    }, ot.fx.stop = function() {
        t.clearInterval(se), se = null
    }, ot.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ot.fn.delay = function(e, i) {
        return e = ot.fx && ot.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
            var s = t.setTimeout(i, e);
            n.stop = function() {
                t.clearTimeout(s)
            }
        })
    },
    function() {
        var t = K.createElement("input"),
            e = K.createElement("select"),
            i = e.appendChild(K.createElement("option"));
        t.type = "checkbox", nt.checkOn = "" !== t.value, nt.optSelected = i.selected, e.disabled = !0, nt.optDisabled = !i.disabled, (t = K.createElement("input")).value = "t", t.type = "radio", nt.radioValue = "t" === t.value
    }();
var ae, le = ot.expr.attrHandle;
ot.fn.extend({
    attr: function(t, e) {
        return xt(this, ot.attr, t, e, arguments.length > 1)
    },
    removeAttr: function(t) {
        return this.each(function() {
            ot.removeAttr(this, t)
        })
    }
}), ot.extend({
    attr: function(t, e, i) {
        var n, s, o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ot.prop(t, e, i) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), s = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? ae : void 0)), void 0 !== i ? null === i ? void ot.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = ot.find.attr(t, e)) ? void 0 : n)
    },
    attrHooks: {
        type: {
            set: function(t, e) {
                if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                    var i = t.value;
                    return t.setAttribute("type", e), i && (t.value = i), e
                }
            }
        }
    },
    removeAttr: function(t, e) {
        var i, n, s = 0,
            o = e && e.match(wt);
        if (o && 1 === t.nodeType)
            for (; i = o[s++];) n = ot.propFix[i] || i, ot.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
    }
}), ae = {
    set: function(t, e, i) {
        return !1 === e ? ot.removeAttr(t, i) : t.setAttribute(i, i), i
    }
}, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
    var i = le[e] || ot.find.attr;
    le[e] = function(t, e, n) {
        var s, o;
        return n || (o = le[e], le[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, le[e] = o), s
    }
});
var ce = /^(?:input|select|textarea|button)$/i,
    he = /^(?:a|area)$/i;
ot.fn.extend({
    prop: function(t, e) {
        return xt(this, ot.prop, t, e, arguments.length > 1)
    },
    removeProp: function(t) {
        return this.each(function() {
            delete this[ot.propFix[t] || t]
        })
    }
}), ot.extend({
    prop: function(t, e, i) {
        var n, s, o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, s = ot.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
    },
    propHooks: {
        tabIndex: {
            get: function(t) {
                var e = ot.find.attr(t, "tabindex");
                return e ? parseInt(e, 10) : ce.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1
            }
        }
    },
    propFix: {
        "for": "htmlFor",
        "class": "className"
    }
}), nt.optSelected || (ot.propHooks.selected = {
    get: function(t) {
        var e = t.parentNode;
        return e && e.parentNode && e.parentNode.selectedIndex, null
    },
    set: function(t) {
        var e = t.parentNode;
        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
    }
}), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ot.propFix[this.toLowerCase()] = this
});
var de = /[\t\r\n\f]/g;
ot.fn.extend({
    addClass: function(t) {
        var e, i, n, s, o, r, a, l = 0;
        if (ot.isFunction(t)) return this.each(function(e) {
            ot(this).addClass(t.call(this, e, F(this)))
        });
        if ("string" == typeof t && t)
            for (e = t.match(wt) || []; i = this[l++];)
                if (s = F(i), n = 1 === i.nodeType && (" " + s + " ").replace(de, " ")) {
                    for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                    s !== (a = ot.trim(n)) && i.setAttribute("class", a)
                } return this
    },
    removeClass: function(t) {
        var e, i, n, s, o, r, a, l = 0;
        if (ot.isFunction(t)) return this.each(function(e) {
            ot(this).removeClass(t.call(this, e, F(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
            for (e = t.match(wt) || []; i = this[l++];)
                if (s = F(i), n = 1 === i.nodeType && (" " + s + " ").replace(de, " ")) {
                    for (r = 0; o = e[r++];)
                        for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                    s !== (a = ot.trim(n)) && i.setAttribute("class", a)
                } return this
    },
    toggleClass: function(t, e) {
        var i = typeof t;
        return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(i) {
            ot(this).toggleClass(t.call(this, i, F(this), e), e)
        }) : this.each(function() {
            var e, n, s, o;
            if ("string" === i)
                for (n = 0, s = ot(this), o = t.match(wt) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
            else void 0 !== t && "boolean" !== i || ((e = F(this)) && Ct.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Ct.get(this, "__className__") || ""))
        })
    },
    hasClass: function(t) {
        var e, i, n = 0;
        for (e = " " + t + " "; i = this[n++];)
            if (1 === i.nodeType && (" " + F(i) + " ").replace(de, " ").indexOf(e) > -1) return !0;
        return !1
    }
});
var ue = /\r/g,
    fe = /[\x20\t\r\n\f]+/g;
ot.fn.extend({
    val: function(t) {
        var e, i, n, s = this[0];
        return arguments.length ? (n = ot.isFunction(t), this.each(function(i) {
            var s;
            1 === this.nodeType && (null == (s = n ? t.call(this, i, ot(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : ot.isArray(s) && (s = ot.map(s, function(t) {
                return null == t ? "" : t + ""
            })), (e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
        })) : s ? (e = ot.valHooks[s.type] || ot.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof(i = s.value) ? i.replace(ue, "") : null == i ? "" : i : void 0
    }
}), ot.extend({
    valHooks: {
        option: {
            get: function(t) {
                var e = ot.find.attr(t, "value");
                return null != e ? e : ot.trim(ot.text(t)).replace(fe, " ")
            }
        },
        select: {
            get: function(t) {
                for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                    if (((i = n[l]).selected || l === s) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ot.nodeName(i.parentNode, "optgroup"))) {
                        if (e = ot(i).val(), o) return e;
                        r.push(e)
                    } return r
            },
            set: function(t, e) {
                for (var i, n, s = t.options, o = ot.makeArray(e), r = s.length; r--;)((n = s[r]).selected = ot.inArray(ot.valHooks.option.get(n), o) > -1) && (i = !0);
                return i || (t.selectedIndex = -1), o
            }
        }
    }
}), ot.each(["radio", "checkbox"], function() {
    ot.valHooks[this] = {
        set: function(t, e) {
            return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
        }
    }, nt.checkOn || (ot.valHooks[this].get = function(t) {
        return null === t.getAttribute("value") ? "on" : t.value
    })
});
var pe = /^(?:focusinfocus|focusoutblur)$/;
ot.extend(ot.event, {
    trigger: function(e, i, n, s) {
        var o, r, a, l, c, h, d, u = [n || K],
            f = it.call(e, "type") ? e.type : e,
            p = it.call(e, "namespace") ? e.namespace.split(".") : [];
        if (r = a = n = n || K, 3 !== n.nodeType && 8 !== n.nodeType && !pe.test(f + ot.event.triggered) && (f.indexOf(".") > -1 && (f = (p = f.split(".")).shift(), p.sort()), c = f.indexOf(":") < 0 && "on" + f, (e = e[ot.expando] ? e : new ot.Event(f, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : ot.makeArray(i, [e]), d = ot.event.special[f] || {}, s || !d.trigger || !1 !== d.trigger.apply(n, i))) {
            if (!s && !d.noBubble && !ot.isWindow(n)) {
                for (l = d.delegateType || f, pe.test(l + f) || (r = r.parentNode); r; r = r.parentNode) u.push(r), a = r;
                a === (n.ownerDocument || K) && u.push(a.defaultView || a.parentWindow || t)
            }
            for (o = 0;
                (r = u[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : d.bindType || f, (h = (Ct.get(r, "events") || {})[e.type] && Ct.get(r, "handle")) && h.apply(r, i), (h = c && r[c]) && h.apply && kt(r) && (e.result = h.apply(r, i), !1 === e.result && e.preventDefault());
            return e.type = f, s || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(u.pop(), i) || !kt(n) || c && ot.isFunction(n[f]) && !ot.isWindow(n) && ((a = n[c]) && (n[c] = null), ot.event.triggered = f, n[f](), ot.event.triggered = void 0, a && (n[c] = a)), e.result
        }
    },
    simulate: function(t, e, i) {
        var n = ot.extend(new ot.Event, i, {
            type: t,
            isSimulated: !0
        });
        ot.event.trigger(n, null, e)
    }
}), ot.fn.extend({
    trigger: function(t, e) {
        return this.each(function() {
            ot.event.trigger(t, e, this)
        })
    },
    triggerHandler: function(t, e) {
        var i = this[0];
        return i ? ot.event.trigger(t, e, i, !0) : void 0
    }
}), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
    ot.fn[e] = function(t, i) {
        return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
    }
}), ot.fn.extend({
    hover: function(t, e) {
        return this.mouseenter(t).mouseleave(e || t)
    }
}), nt.focusin = "onfocusin" in t, nt.focusin || ot.each({
    focus: "focusin",
    blur: "focusout"
}, function(t, e) {
    var i = function(t) {
        ot.event.simulate(e, t.target, ot.event.fix(t))
    };
    ot.event.special[e] = {
        setup: function() {
            var n = this.ownerDocument || this,
                s = Ct.access(n, e);
            s || n.addEventListener(t, i, !0), Ct.access(n, e, (s || 0) + 1)
        },
        teardown: function() {
            var n = this.ownerDocument || this,
                s = Ct.access(n, e) - 1;
            s ? Ct.access(n, e, s) : (n.removeEventListener(t, i, !0), Ct.remove(n, e))
        }
    }
});
var me = t.location,
    ge = ot.now(),
    ve = /\?/;
ot.parseJSON = function(t) {
    return JSON.parse(t + "")
}, ot.parseXML = function(e) {
    var i;
    if (!e || "string" != typeof e) return null;
    try {
        i = (new t.DOMParser).parseFromString(e, "text/xml")
    } catch (K) {
        i = void 0
    }
    return i && !i.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), i
};
var _e = /#.*$/,
    ye = /([?&])_=[^&]*/,
    be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    we = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    xe = /^(?:GET|HEAD)$/,
    ke = /^\/\//,
    Ce = {},
    Se = {},
    Te = "*/".concat("*"),
    De = K.createElement("a");
De.href = me.href, ot.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
        url: me.href,
        type: "GET",
        isLocal: we.test(me.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
            "*": Te,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        },
        contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
        },
        responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
        },
        converters: {
            "* text": String,
            "text html": !0,
            "text json": ot.parseJSON,
            "text xml": ot.parseXML
        },
        flatOptions: {
            url: !0,
            context: !0
        }
    },
    ajaxSetup: function(t, e) {
        return e ? z(z(t, ot.ajaxSettings), e) : z(ot.ajaxSettings, t)
    },
    ajaxPrefilter: W(Ce),
    ajaxTransport: W(Se),
    ajax: function(e, i) {
        function n(e, i, n, a) {
            var c, d, _, y, w, k = i;
            2 !== b && (b = 2, l && t.clearTimeout(l), s = void 0, r = a || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (y = B(u, x, n)), y = q(u, y, x, c), c ? (u.ifModified && ((w = x.getResponseHeader("Last-Modified")) && (ot.lastModified[o] = w), (w = x.getResponseHeader("etag")) && (ot.etag[o] = w)), 204 === e || "HEAD" === u.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, d = y.data, c = !(_ = y.error))) : (_ = k, !e && k || (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (i || k) + "", c ? m.resolveWith(f, [d, k, x]) : m.rejectWith(f, [x, k, _]), x.statusCode(v), v = void 0, h && p.trigger(c ? "ajaxSuccess" : "ajaxError", [x, u, c ? d : _]), g.fireWith(f, [x, k]), h && (p.trigger("ajaxComplete", [x, u]), --ot.active || ot.event.trigger("ajaxStop")))
        }
        "object" == typeof e && (i = e, e = void 0), i = i || {};
        var s, o, r, a, l, c, h, d, u = ot.ajaxSetup({}, i),
            f = u.context || u,
            p = u.context && (f.nodeType || f.jquery) ? ot(f) : ot.event,
            m = ot.Deferred(),
            g = ot.Callbacks("once memory"),
            v = u.statusCode || {},
            _ = {},
            y = {},
            b = 0,
            w = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === b) {
                        if (!a)
                            for (a = {}; e = be.exec(r);) a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? r : null
                },
                setRequestHeader: function(t, e) {
                    var i = t.toLowerCase();
                    return b || (t = y[i] = y[i] || t, _[t] = e), this
                },
                overrideMimeType: function(t) {
                    return b || (u.mimeType = t), this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > b)
                            for (e in t) v[e] = [v[e], t[e]];
                        else x.always(t[x.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return s && s.abort(e), n(0, e), this
                }
            };
        if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, u.url = ((e || u.url || me.href) + "").replace(_e, "").replace(ke, me.protocol + "//"), u.type = i.method || i.type || u.method || u.type, u.dataTypes = ot.trim(u.dataType || "*").toLowerCase().match(wt) || [""], null == u.crossDomain) {
            c = K.createElement("a");
            try {
                c.href = u.url, c.href = c.href, u.crossDomain = De.protocol + "//" + De.host != c.protocol + "//" + c.host
            } catch (mt) {
                u.crossDomain = !0
            }
        }
        if (u.data && u.processData && "string" != typeof u.data && (u.data = ot.param(u.data, u.traditional)), R(Ce, u, i, x), 2 === b) return x;
        for (d in (h = ot.event && u.global) && 0 == ot.active++ && ot.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !xe.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (ve.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = ye.test(o) ? o.replace(ye, "$1_=" + ge++) : o + (ve.test(o) ? "&" : "?") + "_=" + ge++)), u.ifModified && (ot.lastModified[o] && x.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && x.setRequestHeader("If-None-Match", ot.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || i.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Te + "; q=0.01" : "") : u.accepts["*"]), u.headers) x.setRequestHeader(d, u.headers[d]);
        if (u.beforeSend && (!1 === u.beforeSend.call(f, x, u) || 2 === b)) return x.abort();
        for (d in w = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) x[d](u[d]);
        if (s = R(Se, u, i, x)) {
            if (x.readyState = 1, h && p.trigger("ajaxSend", [x, u]), 2 === b) return x;
            u.async && u.timeout > 0 && (l = t.setTimeout(function() {
                x.abort("timeout")
            }, u.timeout));
            try {
                b = 1, s.send(_, n)
            } catch (mt) {
                if (!(2 > b)) throw mt;
                n(-1, mt)
            }
        } else n(-1, "No Transport");
        return x
    },
    getJSON: function(t, e, i) {
        return ot.get(t, e, i, "json")
    },
    getScript: function(t, e) {
        return ot.get(t, void 0, e, "script")
    }
}), ot.each(["get", "post"], function(t, e) {
    ot[e] = function(t, i, n, s) {
        return ot.isFunction(i) && (s = s || n, n = i, i = void 0), ot.ajax(ot.extend({
            url: t,
            type: e,
            dataType: s,
            data: i,
            success: n
        }, ot.isPlainObject(t) && t))
    }
}), ot._evalUrl = function(t) {
    return ot.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0
    })
}, ot.fn.extend({
    wrapAll: function(t) {
        var e;
        return ot.isFunction(t) ? this.each(function(e) {
            ot(this).wrapAll(t.call(this, e))
        }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
            for (var t = this; t.firstElementChild;) t = t.firstElementChild;
            return t
        }).append(this)), this)
    },
    wrapInner: function(t) {
        return ot.isFunction(t) ? this.each(function(e) {
            ot(this).wrapInner(t.call(this, e))
        }) : this.each(function() {
            var e = ot(this),
                i = e.contents();
            i.length ? i.wrapAll(t) : e.append(t)
        })
    },
    wrap: function(t) {
        var e = ot.isFunction(t);
        return this.each(function(i) {
            ot(this).wrapAll(e ? t.call(this, i) : t)
        })
    },
    unwrap: function() {
        return this.parent().each(function() {
            ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
        }).end()
    }
}), ot.expr.filters.hidden = function(t) {
    return !ot.expr.filters.visible(t)
}, ot.expr.filters.visible = function(t) {
    return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
};
var Ee = /%20/g,
    Me = /\[\]$/,
    Ie = /\r?\n/g,
    Pe = /^(?:submit|button|image|reset|file)$/i,
    Ae = /^(?:input|select|textarea|keygen)/i;
ot.param = function(t, e) {
    var i, n = [],
        s = function(t, e) {
            e = ot.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
    if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
        s(this.name, this.value)
    });
    else
        for (i in t) U(i, t[i], e, s);
    return n.join("&").replace(Ee, "+")
}, ot.fn.extend({
    serialize: function() {
        return ot.param(this.serializeArray())
    },
    serializeArray: function() {
        return this.map(function() {
            var t = ot.prop(this, "elements");
            return t ? ot.makeArray(t) : this
        }).filter(function() {
            var t = this.type;
            return this.name && !ot(this).is(":disabled") && Ae.test(this.nodeName) && !Pe.test(t) && (this.checked || !At.test(t))
        }).map(function(t, e) {
            var i = ot(this).val();
            return null == i ? null : ot.isArray(i) ? ot.map(i, function(t) {
                return {
                    name: e.name,
                    value: t.replace(Ie, "\r\n")
                }
            }) : {
                name: e.name,
                value: i.replace(Ie, "\r\n")
            }
        }).get()
    }
}), ot.ajaxSettings.xhr = function() {
    try {
        return new t.XMLHttpRequest
    } catch (e) {}
};
var Oe = {
        0: 200,
        1223: 204
    },
    Ne = ot.ajaxSettings.xhr();
nt.cors = !!Ne && "withCredentials" in Ne, nt.ajax = Ne = !!Ne, ot.ajaxTransport(function(e) {
    var i, n;
    return nt.cors || Ne && !e.crossDomain ? {
        send: function(s, o) {
            var r, a = e.xhr();
            if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                for (r in e.xhrFields) a[r] = e.xhrFields[r];
            for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(r, s[r]);
            i = function(t) {
                return function() {
                    i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Oe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                        binary: a.response
                    } : {
                        text: a.responseText
                    }, a.getAllResponseHeaders()))
                }
            }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                4 === a.readyState && t.setTimeout(function() {
                    i && n()
                })
            }, i = i("abort");
            try {
                a.send(e.hasContent && e.data || null)
            } catch (tt) {
                if (i) throw tt
            }
        },
        abort: function() {
            i && i()
        }
    } : void 0
}), ot.ajaxSetup({
    accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
        script: /\b(?:java|ecma)script\b/
    },
    converters: {
        "text script": function(t) {
            return ot.globalEval(t), t
        }
    }
}), ot.ajaxPrefilter("script", function(t) {
    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
}), ot.ajaxTransport("script", function(t) {
    var e, i;
    if (t.crossDomain) return {
        send: function(n, s) {
            e = ot("<script>").prop({
                charset: t.scriptCharset,
                src: t.url
            }).on("load error", i = function(t) {
                e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
            }), K.head.appendChild(e[0])
        },
        abort: function() {
            i && i()
        }
    }
});
var $e = [],
    Le = /(=)\?(?=&|$)|\?\?/;
ot.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
        var t = $e.pop() || ot.expando + "_" + ge++;
        return this[t] = !0, t
    }
}), ot.ajaxPrefilter("json jsonp", function(e, i, n) {
    var s, o, r, a = !1 !== e.jsonp && (Le.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Le.test(e.data) && "data");
    return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Le, "$1" + s) : !1 !== e.jsonp && (e.url += (ve.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
        return r || ot.error(s + " was not called"), r[0]
    }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
        r = arguments
    }, n.always(function() {
        void 0 === o ? ot(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, $e.push(s)), r && ot.isFunction(o) && o(r[0]), r = o = void 0
    }), "script") : void 0
}), ot.parseHTML = function(t, e, i) {
    if (!t || "string" != typeof t) return null;
    "boolean" == typeof e && (i = e, e = !1), e = e || K;
    var n = pt.exec(t),
        s = !i && [];
    return n ? [e.createElement(n[1])] : (n = u([t], e, s), s && s.length && ot(s).remove(), ot.merge([], n.childNodes))
};
var je = ot.fn.load;
ot.fn.load = function(t, e, i) {
    if ("string" != typeof t && je) return je.apply(this, arguments);
    var n, s, o, r = this,
        a = t.indexOf(" ");
    return a > -1 && (n = ot.trim(t.slice(a)), t = t.slice(0, a)), ot.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && ot.ajax({
        url: t,
        type: s || "GET",
        dataType: "html",
        data: e
    }).done(function(t) {
        o = arguments, r.html(n ? ot("<div>").append(ot.parseHTML(t)).find(n) : t)
    }).always(i && function(t, e) {
        r.each(function() {
            i.apply(this, o || [t.responseText, e, t])
        })
    }), this
}, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
    ot.fn[e] = function(t) {
        return this.on(e, t)
    }
}), ot.expr.filters.animated = function(t) {
    return ot.grep(ot.timers, function(e) {
        return t === e.elem
    }).length
}, ot.offset = {
    setOffset: function(t, e, i) {
        var n, s, o, r, a, l, c = ot.css(t, "position"),
            h = ot(t),
            d = {};
        "static" === c && (t.style.position = "relative"), a = h.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (r = (n = h.position()).top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, i, ot.extend({}, a))), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : h.css(d)
    }
}, ot.fn.extend({
    offset: function(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function(e) {
            ot.offset.setOffset(this, t, e)
        });
        var e, i, n = this[0],
            s = {
                top: 0,
                left: 0
            },
            o = n && n.ownerDocument;
        return o ? (e = o.documentElement, ot.contains(e, n) ? (s = n.getBoundingClientRect(), i = V(o), {
            top: s.top + i.pageYOffset - e.clientTop,
            left: s.left + i.pageXOffset - e.clientLeft
        }) : s) : void 0
    },
    position: function() {
        if (this[0]) {
            var t, e, i = this[0],
                n = {
                    top: 0,
                    left: 0
                };
            return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (n = t.offset()), n.top += ot.css(t[0], "borderTopWidth", !0), n.left += ot.css(t[0], "borderLeftWidth", !0)), {
                top: e.top - n.top - ot.css(i, "marginTop", !0),
                left: e.left - n.left - ot.css(i, "marginLeft", !0)
            }
        }
    },
    offsetParent: function() {
        return this.map(function() {
            for (var t = this.offsetParent; t && "static" === ot.css(t, "position");) t = t.offsetParent;
            return t || Xt
        })
    }
}), ot.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
}, function(t, e) {
    var i = "pageYOffset" === e;
    ot.fn[t] = function(n) {
        return xt(this, function(t, n, s) {
            var o = V(t);
            return void 0 === s ? o ? o[e] : t[n] : void(o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s)
        }, t, n, arguments.length)
    }
}), ot.each(["top", "left"], function(t, e) {
    ot.cssHooks[e] = D(nt.pixelPosition, function(t, i) {
        return i ? (i = T(t, e), Gt.test(i) ? ot(t).position()[e] + "px" : i) : void 0
    })
}), ot.each({
    Height: "height",
    Width: "width"
}, function(t, e) {
    ot.each({
        padding: "inner" + t,
        content: e,
        "": "outer" + t
    }, function(i, n) {
        ot.fn[n] = function(n, s) {
            var o = arguments.length && (i || "boolean" != typeof n),
                r = i || (!0 === n || !0 === s ? "margin" : "border");
            return xt(this, function(e, i, n) {
                var s;
                return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? ot.css(e, i, r) : ot.style(e, i, n, r)
            }, e, o ? n : void 0, o, null)
        }
    })
}), ot.fn.extend({
    bind: function(t, e, i) {
        return this.on(t, null, e, i)
    },
    unbind: function(t, e) {
        return this.off(t, null, e)
    },
    delegate: function(t, e, i, n) {
        return this.on(e, t, i, n)
    },
    undelegate: function(t, e, i) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
    },
    size: function() {
        return this.length
    }
}), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ot
});
var Ye = t.jQuery,
    He = t.$;
return ot.noConflict = function(e) {
    return t.$ === ot && (t.$ = He), e && t.jQuery === ot && (t.jQuery = Ye), ot
}, e || (t.jQuery = t.$ = ot), ot
}),
/*
POPPER.MIN.JS
Copyright (C) Federico Zivolo 2017
Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
*/
function(t, e) {
"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
}(this, function() {
"use strict";

function t(t) {
    return t && "[object Function]" === {}.toString.call(t)
}

function e(t, e) {
    if (1 !== t.nodeType) return [];
    var i = window.getComputedStyle(t, null);
    return e ? i[e] : i
}

function i(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host
}

function n(t) {
    if (!t || -1 !== ["HTML", "BODY", "#document"].indexOf(t.nodeName)) return window.document.body;
    var s = e(t),
        o = s.overflow,
        r = s.overflowX,
        a = s.overflowY;
    return /(auto|scroll)/.test(o + a + r) ? t : n(i(t))
}

function s(t) {
    var i = t && t.offsetParent,
        n = i && i.nodeName;
    return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === e(i, "position") ? s(i) : i : window.document.documentElement
}

function o(t) {
    var e = t.nodeName;
    return "BODY" !== e && ("HTML" === e || s(t.firstElementChild) === t)
}

function r(t) {
    return null === t.parentNode ? t : r(t.parentNode)
}

function a(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return window.document.documentElement;
    var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = i ? t : e,
        l = i ? e : t,
        c = document.createRange();
    c.setStart(n, 0), c.setEnd(l, 0);
    var h = c.commonAncestorContainer;
    if (t !== h && e !== h || n.contains(l)) return o(h) ? h : s(h);
    var d = r(t);
    return d.host ? a(d.host, e) : a(t, r(e).host)
}

function l(t) {
    var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        i = t.nodeName;
    if ("BODY" === i || "HTML" === i) {
        var n = window.document.documentElement;
        return (window.document.scrollingElement || n)[e]
    }
    return t[e]
}

function c(t, e) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = l(e, "top"),
        s = l(e, "left"),
        o = i ? -1 : 1;
    return t.top += n * o, t.bottom += n * o, t.left += s * o, t.right += s * o, t
}

function h(t, e) {
    var i = "x" === e ? "Left" : "Top",
        n = "Left" == i ? "Right" : "Bottom";
    return +t["border" + i + "Width"].split("px")[0] + +t["border" + n + "Width"].split("px")[0]
}

function d(t, e, i, n) {
    return V(e["offset" + t], i["client" + t], i["offset" + t], it() ? i["offset" + t] + n["margin" + ("Height" === t ? "Top" : "Left")] + n["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
}

function u() {
    var t = window.document.body,
        e = window.document.documentElement,
        i = it() && window.getComputedStyle(e);
    return {
        height: d("Height", t, e, i),
        width: d("Width", t, e, i)
    }
}

function f(t) {
    return rt({}, t, {
        right: t.left + t.width,
        bottom: t.top + t.height
    })
}

function p(t) {
    var i = {};
    if (it()) try {
        i = t.getBoundingClientRect();
        var n = l(t, "top"),
            s = l(t, "left");
        i.top += n, i.left += s, i.bottom += n, i.right += s
    } catch (t) {} else i = t.getBoundingClientRect();
    var o = {
            left: i.left,
            top: i.top,
            width: i.right - i.left,
            height: i.bottom - i.top
        },
        r = "HTML" === t.nodeName ? u() : {},
        a = r.width || t.clientWidth || o.right - o.left,
        c = r.height || t.clientHeight || o.bottom - o.top,
        d = t.offsetWidth - a,
        p = t.offsetHeight - c;
    if (d || p) {
        var m = e(t);
        d -= h(m, "x"), p -= h(m, "y"), o.width -= d, o.height -= p
    }
    return f(o)
}

function m(t, i) {
    var s = it(),
        o = "HTML" === i.nodeName,
        r = p(t),
        a = p(i),
        l = n(t),
        h = e(i),
        d = +h.borderTopWidth.split("px")[0],
        u = +h.borderLeftWidth.split("px")[0],
        m = f({
            top: r.top - a.top - d,
            left: r.left - a.left - u,
            width: r.width,
            height: r.height
        });
    if (m.marginTop = 0, m.marginLeft = 0, !s && o) {
        var g = +h.marginTop.split("px")[0],
            v = +h.marginLeft.split("px")[0];
        m.top -= d - g, m.bottom -= d - g, m.left -= u - v, m.right -= u - v, m.marginTop = g, m.marginLeft = v
    }
    return (s ? i.contains(l) : i === l && "BODY" !== l.nodeName) && (m = c(m, i)), m
}

function g(t) {
    var e = window.document.documentElement,
        i = m(t, e),
        n = V(e.clientWidth, window.innerWidth || 0),
        s = V(e.clientHeight, window.innerHeight || 0),
        o = l(e),
        r = l(e, "left");
    return f({
        top: o - i.top + i.marginTop,
        left: r - i.left + i.marginLeft,
        width: n,
        height: s
    })
}

function v(t) {
    var n = t.nodeName;
    return "BODY" !== n && "HTML" !== n && ("fixed" === e(t, "position") || v(i(t)))
}

function _(t, e, s, o) {
    var r = {
            top: 0,
            left: 0
        },
        l = a(t, e);
    if ("viewport" === o) r = g(l);
    else {
        var c;
        "scrollParent" === o ? "BODY" === (c = n(i(t))).nodeName && (c = window.document.documentElement) : c = "window" === o ? window.document.documentElement : o;
        var h = m(c, l);
        if ("HTML" !== c.nodeName || v(l)) r = h;
        else {
            var d = u(),
                f = d.height,
                p = d.width;
            r.top += h.top - h.marginTop, r.bottom = f + h.top, r.left += h.left - h.marginLeft, r.right = p + h.left
        }
    }
    return r.left += s, r.top += s, r.right -= s, r.bottom -= s, r
}

function y(t) {
    return t.width * t.height
}

function b(t, e, i, n, s) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var r = _(i, n, o, s),
        a = {
            top: {
                width: r.width,
                height: e.top - r.top
            },
            right: {
                width: r.right - e.right,
                height: r.height
            },
            bottom: {
                width: r.width,
                height: r.bottom - e.bottom
            },
            left: {
                width: e.left - r.left,
                height: r.height
            }
        },
        l = Object.keys(a).map(function(t) {
            return rt({
                key: t
            }, a[t], {
                area: y(a[t])
            })
        }).sort(function(t, e) {
            return e.area - t.area
        }),
        c = l.filter(function(t) {
            var e = t.width,
                n = t.height;
            return e >= i.clientWidth && n >= i.clientHeight
        }),
        h = 0 < c.length ? c[0].key : l[0].key,
        d = t.split("-")[1];
    return h + (d ? "-" + d : "")
}

function w(t, e, i) {
    return m(i, a(e, i))
}

function x(t) {
    var e = window.getComputedStyle(t),
        i = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        n = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
    return {
        width: t.offsetWidth + n,
        height: t.offsetHeight + i
    }
}

function k(t) {
    var e = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    return t.replace(/left|right|bottom|top/g, function(t) {
        return e[t]
    })
}

function C(t, e, i) {
    i = i.split("-")[0];
    var n = x(t),
        s = {
            width: n.width,
            height: n.height
        },
        o = -1 !== ["right", "left"].indexOf(i),
        r = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";
    return s[r] = e[r] + e[l] / 2 - n[l] / 2, s[a] = i === a ? e[a] - n[c] : e[k(a)], s
}

function S(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0]
}

function T(t, e, i) {
    if (Array.prototype.findIndex) return t.findIndex(function(t) {
        return t[e] === i
    });
    var n = S(t, function(t) {
        return t[e] === i
    });
    return t.indexOf(n)
}

function D(e, i, n) {
    return (void 0 === n ? e : e.slice(0, T(e, "name", n))).forEach(function(e) {
        e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = e["function"] || e.fn;
        e.enabled && t(n) && (i.offsets.popper = f(i.offsets.popper), i.offsets.reference = f(i.offsets.reference), i = n(i, e))
    }), i
}

function E() {
    if (!this.state.isDestroyed) {
        var t = {
            instance: this,
            styles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
        };
        t.offsets.reference = w(this.state, this.popper, this.reference), t.placement = b(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = C(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = D(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
    }
}

function M(t, e) {
    return t.some(function(t) {
        var i = t.name;
        return t.enabled && i === e
    })
}

function I(t) {
    for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length - 1; n++) {
        var s = e[n],
            o = s ? "" + s + i : t;
        if ("undefined" != typeof window.document.body.style[o]) return o
    }
    return null
}

function P() {
    return this.state.isDestroyed = !0, M(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[I("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
}

function A(t, e, i, s) {
    var o = "BODY" === t.nodeName,
        r = o ? window : t;
    r.addEventListener(e, i, {
        passive: !0
    }), o || A(n(r.parentNode), e, i, s), s.push(r)
}

function O(t, e, i, s) {
    i.updateBound = s, window.addEventListener("resize", i.updateBound, {
        passive: !0
    });
    var o = n(t);
    return A(o, "scroll", i.updateBound, i.scrollParents), i.scrollElement = o, i.eventsEnabled = !0, i
}

function N() {
    this.state.eventsEnabled || (this.state = O(this.reference, this.options, this.state, this.scheduleUpdate))
}

function $(t, e) {
    return window.removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
        t.removeEventListener("scroll", e.updateBound)
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e
}

function L() {
    this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = $(this.reference, this.state))
}

function j(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
}

function Y(t, e) {
    Object.keys(e).forEach(function(i) {
        var n = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && j(e[i]) && (n = "px"), t.style[i] = e[i] + n
    })
}

function H(t, e) {
    Object.keys(e).forEach(function(i) {
        !1 === e[i] ? t.removeAttribute(i) : t.setAttribute(i, e[i])
    })
}

function F(t, e, i) {
    var n = S(t, function(t) {
            return t.name === e
        }),
        s = !!n && t.some(function(t) {
            return t.name === i && t.enabled && t.order < n.order
        });
    if (!s) {
        var o = "`" + e + "`";
        console.warn("`" + i + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
    }
    return s
}

function W(t) {
    return "end" === t ? "start" : "start" === t ? "end" : t
}

function R(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        i = lt.indexOf(t),
        n = lt.slice(i + 1).concat(lt.slice(0, i));
    return e ? n.reverse() : n
}

function z(t, e, i, n) {
    var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        o = +s[1],
        r = s[2];
    if (!o) return t;
    if (0 === r.indexOf("%")) {
        var a;
        switch (r) {
            case "%p":
                a = i;
                break;
            case "%":
            case "%r":
            default:
                a = n
        }
        return f(a)[e] / 100 * o
    }
    return "vh" === r || "vw" === r ? ("vh" === r ? V(document.documentElement.clientHeight, window.innerHeight || 0) : V(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
}

function B(t, e, i, n) {
    var s = [0, 0],
        o = -1 !== ["right", "left"].indexOf(n),
        r = t.split(/(\+|\-)/).map(function(t) {
            return t.trim()
        }),
        a = r.indexOf(S(r, function(t) {
            return -1 !== t.search(/,|\s/)
        }));
    r[a] && -1 === r[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
        c = -1 === a ? [r] : [r.slice(0, a).concat([r[a].split(l)[0]]), [r[a].split(l)[1]].concat(r.slice(a + 1))];
    return (c = c.map(function(t, n) {
        var s = (1 === n ? !o : o) ? "height" : "width",
            r = !1;
        return t.reduce(function(t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, r = !0, t) : r ? (t[t.length - 1] += e, r = !1, t) : t.concat(e)
        }, []).map(function(t) {
            return z(t, s, e, i)
        })
    })).forEach(function(t, e) {
        t.forEach(function(i, n) {
            j(i) && (s[e] += i * ("-" === t[n - 1] ? -1 : 1))
        })
    }), s
}
for (var q = Math.min, U = Math.floor, V = Math.max, G = ["native code", "[object MutationObserverConstructor]"], K = function(t) {
        return G.some(function(e) {
            return -1 < (t || "").toString().indexOf(e)
        })
    }, Q = "undefined" != typeof window, X = ["Edge", "Trident", "Firefox"], Z = 0, J = 0; J < X.length; J += 1)
    if (Q && 0 <= navigator.userAgent.indexOf(X[J])) {
        Z = 1;
        break
    } var tt, et = Q && K(window.MutationObserver) ? function(t) {
        var e = !1,
            i = 0,
            n = document.createElement("span");
        return new MutationObserver(function() {
                t(), e = !1
            }).observe(n, {
                attributes: !0
            }),
            function() {
                e || (e = !0, n.setAttribute("x-index", i), ++i)
            }
    } : function(t) {
        var e = !1;
        return function() {
            e || (e = !0, setTimeout(function() {
                e = !1, t()
            }, Z))
        }
    },
    it = function() {
        return null == tt && (tt = -1 !== navigator.appVersion.indexOf("MSIE 10")), tt
    },
    nt = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    },
    st = function() {
        function t(t, e) {
            for (var i, n = 0; n < e.length; n++)(i = e[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
        return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
        }
    }(),
    ot = function(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    },
    rt = Object.assign || function(t) {
        for (var e, i = 1; i < arguments.length; i++)
            for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
    },
    at = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
    lt = at.slice(3),
    ct = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    },
    ht = function() {
        function e(i, n) {
            var s = this,
                o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            nt(this, e), this.scheduleUpdate = function() {
                return requestAnimationFrame(s.update)
            }, this.update = et(this.update.bind(this)), this.options = rt({}, e.Defaults, o), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = i.jquery ? i[0] : i, this.popper = n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(rt({}, e.Defaults.modifiers, o.modifiers)).forEach(function(t) {
                s.options.modifiers[t] = rt({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                return rt({
                    name: t
                }, s.options.modifiers[t])
            }).sort(function(t, e) {
                return t.order - e.order
            }), this.modifiers.forEach(function(e) {
                e.enabled && t(e.onLoad) && e.onLoad(s.reference, s.popper, s.options, e, s.state)
            }), this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(), this.state.eventsEnabled = r
        }
        return st(e, [{
            key: "update",
            value: function() {
                return E.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return P.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return N.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return L.call(this)
            }
        }]), e
    }();
return ht.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ht.placements = at, ht.Defaults = {
    placement: "bottom",
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function() {},
    onUpdate: function() {},
    modifiers: {
        shift: {
            order: 100,
            enabled: !0,
            fn: function(t) {
                var e = t.placement,
                    i = e.split("-")[0],
                    n = e.split("-")[1];
                if (n) {
                    var s = t.offsets,
                        o = s.reference,
                        r = s.popper,
                        a = -1 !== ["bottom", "top"].indexOf(i),
                        l = a ? "left" : "top",
                        c = a ? "width" : "height",
                        h = {
                            start: ot({}, l, o[l]),
                            end: ot({}, l, o[l] + o[c] - r[c])
                        };
                    t.offsets.popper = rt({}, r, h[n])
                }
                return t
            }
        },
        offset: {
            order: 200,
            enabled: !0,
            fn: function(t, e) {
                var i, n = e.offset,
                    s = t.placement,
                    o = t.offsets,
                    r = o.popper,
                    a = o.reference,
                    l = s.split("-")[0];
                return i = j(+n) ? [+n, 0] : B(n, r, a, l), "left" === l ? (r.top += i[0], r.left -= i[1]) : "right" === l ? (r.top += i[0], r.left += i[1]) : "top" === l ? (r.left += i[0], r.top -= i[1]) : "bottom" === l && (r.left += i[0], r.top += i[1]), t.popper = r, t
            },
            offset: 0
        },
        preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function(t, e) {
                var i = e.boundariesElement || s(t.instance.popper);
                t.instance.reference === i && (i = s(i));
                var n = _(t.instance.popper, t.instance.reference, e.padding, i);
                e.boundaries = n;
                var o = e.priority,
                    r = t.offsets.popper,
                    a = {
                        primary: function(t) {
                            var i = r[t];
                            return r[t] < n[t] && !e.escapeWithReference && (i = V(r[t], n[t])), ot({}, t, i)
                        },
                        secondary: function(t) {
                            var i = "right" === t ? "left" : "top",
                                s = r[i];
                            return r[t] > n[t] && !e.escapeWithReference && (s = q(r[i], n[t] - ("right" === t ? r.width : r.height))), ot({}, i, s)
                        }
                    };
                return o.forEach(function(t) {
                    var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                    r = rt({}, r, a[e](t))
                }), t.offsets.popper = r, t
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent"
        },
        keepTogether: {
            order: 400,
            enabled: !0,
            fn: function(t) {
                var e = t.offsets,
                    i = e.popper,
                    n = e.reference,
                    s = t.placement.split("-")[0],
                    o = U,
                    r = -1 !== ["top", "bottom"].indexOf(s),
                    a = r ? "right" : "bottom",
                    l = r ? "left" : "top",
                    c = r ? "width" : "height";
                return i[a] < o(n[l]) && (t.offsets.popper[l] = o(n[l]) - i[c]), i[l] > o(n[a]) && (t.offsets.popper[l] = o(n[a])), t
            }
        },
        arrow: {
            order: 500,
            enabled: !0,
            fn: function(t, e) {
                if (!F(t.instance.modifiers, "arrow", "keepTogether")) return t;
                var i = e.element;
                if ("string" == typeof i) {
                    if (!(i = t.instance.popper.querySelector(i))) return t
                } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                var n = t.placement.split("-")[0],
                    s = t.offsets,
                    o = s.popper,
                    r = s.reference,
                    a = -1 !== ["left", "right"].indexOf(n),
                    l = a ? "height" : "width",
                    c = a ? "top" : "left",
                    h = a ? "left" : "top",
                    d = a ? "bottom" : "right",
                    u = x(i)[l];
                r[d] - u < o[c] && (t.offsets.popper[c] -= o[c] - (r[d] - u)), r[c] + u > o[d] && (t.offsets.popper[c] += r[c] + u - o[d]);
                var p = r[c] + r[l] / 2 - u / 2 - f(t.offsets.popper)[c];
                return p = V(q(o[l] - u, p), 0), t.arrowElement = i, t.offsets.arrow = {}, t.offsets.arrow[c] = Math.round(p), t.offsets.arrow[h] = "", t
            },
            element: "[x-arrow]"
        },
        flip: {
            order: 600,
            enabled: !0,
            fn: function(t, e) {
                if (M(t.instance.modifiers, "inner")) return t;
                if (t.flipped && t.placement === t.originalPlacement) return t;
                var i = _(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                    n = t.placement.split("-")[0],
                    s = k(n),
                    o = t.placement.split("-")[1] || "",
                    r = [];
                switch (e.behavior) {
                    case ct.FLIP:
                        r = [n, s];
                        break;
                    case ct.CLOCKWISE:
                        r = R(n);
                        break;
                    case ct.COUNTERCLOCKWISE:
                        r = R(n, !0);
                        break;
                    default:
                        r = e.behavior
                }
                return r.forEach(function(a, l) {
                    if (n !== a || r.length === l + 1) return t;
                    n = t.placement.split("-")[0], s = k(n);
                    var c = t.offsets.popper,
                        h = t.offsets.reference,
                        d = U,
                        u = "left" === n && d(c.right) > d(h.left) || "right" === n && d(c.left) < d(h.right) || "top" === n && d(c.bottom) > d(h.top) || "bottom" === n && d(c.top) < d(h.bottom),
                        f = d(c.left) < d(i.left),
                        p = d(c.right) > d(i.right),
                        m = d(c.top) < d(i.top),
                        g = d(c.bottom) > d(i.bottom),
                        v = "left" === n && f || "right" === n && p || "top" === n && m || "bottom" === n && g,
                        _ = -1 !== ["top", "bottom"].indexOf(n),
                        y = !!e.flipVariations && (_ && "start" === o && f || _ && "end" === o && p || !_ && "start" === o && m || !_ && "end" === o && g);
                    (u || v || y) && (t.flipped = !0, (u || v) && (n = r[l + 1]), y && (o = W(o)), t.placement = n + (o ? "-" + o : ""), t.offsets.popper = rt({}, t.offsets.popper, C(t.instance.popper, t.offsets.reference, t.placement)), t = D(t.instance.modifiers, t, "flip"))
                }), t
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport"
        },
        inner: {
            order: 700,
            enabled: !1,
            fn: function(t) {
                var e = t.placement,
                    i = e.split("-")[0],
                    n = t.offsets,
                    s = n.popper,
                    o = n.reference,
                    r = -1 !== ["left", "right"].indexOf(i),
                    a = -1 === ["top", "left"].indexOf(i);
                return s[r ? "left" : "top"] = o[e] - (a ? s[r ? "width" : "height"] : 0), t.placement = k(e), t.offsets.popper = f(s), t
            }
        },
        hide: {
            order: 800,
            enabled: !0,
            fn: function(t) {
                if (!F(t.instance.modifiers, "hide", "preventOverflow")) return t;
                var e = t.offsets.reference,
                    i = S(t.instance.modifiers, function(t) {
                        return "preventOverflow" === t.name
                    }).boundaries;
                if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                    if (!0 === t.hide) return t;
                    t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                } else {
                    if (!1 === t.hide) return t;
                    t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                }
                return t
            }
        },
        computeStyle: {
            order: 850,
            enabled: !0,
            fn: function(t, e) {
                var i = e.x,
                    n = e.y,
                    o = t.offsets.popper,
                    r = S(t.instance.modifiers, function(t) {
                        return "applyStyle" === t.name
                    }).gpuAcceleration;
                void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                var a, l, c = void 0 === r ? e.gpuAcceleration : r,
                    h = p(s(t.instance.popper)),
                    d = {
                        position: o.position
                    },
                    u = {
                        left: U(o.left),
                        top: U(o.top),
                        bottom: U(o.bottom),
                        right: U(o.right)
                    },
                    f = "bottom" === i ? "top" : "bottom",
                    m = "right" === n ? "left" : "right",
                    g = I("transform");
                if (l = "bottom" == f ? -h.height + u.bottom : u.top, a = "right" == m ? -h.width + u.right : u.left, c && g) d[g] = "translate3d(" + a + "px, " + l + "px, 0)", d[f] = 0, d[m] = 0, d.willChange = "transform";
                else {
                    var v = "bottom" == f ? -1 : 1,
                        _ = "right" == m ? -1 : 1;
                    d[f] = l * v, d[m] = a * _, d.willChange = f + ", " + m
                }
                var y = {
                    "x-placement": t.placement
                };
                return t.attributes = rt({}, y, t.attributes), t.styles = rt({}, d, t.styles), t
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right"
        },
        applyStyle: {
            order: 900,
            enabled: !0,
            fn: function(t) {
                return Y(t.instance.popper, t.styles), H(t.instance.popper, t.attributes), t.offsets.arrow && Y(t.arrowElement, t.offsets.arrow), t
            },
            onLoad: function(t, e, i, n, s) {
                var o = w(s, e, t),
                    r = b(i.placement, o, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                return e.setAttribute("x-placement", r), Y(e, {
                    position: "absolute"
                }), i
            },
            gpuAcceleration: void 0
        }
    }
}, ht
}),
function(t, e) {
"object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, i) {
"use strict";

function n(t, e) {
    for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
}

function s(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t
}

function o(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
        }))), n.forEach(function(e) {
            var n, s, o;
            n = t, o = i[s = e], s in n ? Object.defineProperty(n, s, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[s] = o
        })
    }
    return t
}
e = e && e.hasOwnProperty("default") ? e["default"] : e, i = i && i.hasOwnProperty("default") ? i["default"] : i;
var r, a, l, c, h, d, u, f, p, m, g, v, _, y, b, w, x, k, C, S, T, D, E, M, I, P, A, O, N, $, L, j, Y, H, F, W, R, z, B, q, U, V, G, K, Q, X, Z, J, tt, et, it, nt, st, ot, rt, at, lt, ct, ht, dt, ut, ft, pt, mt, gt, vt, _t, yt, bt, wt, xt, kt, Ct, St, Tt, Dt, Et, Mt, It, Pt, At, Ot, Nt, $t, Lt, jt, Yt, Ht, Ft, Wt, Rt, zt, Bt, qt, Ut, Vt, Gt, Kt, Qt, Xt, Zt, Jt, te, ee, ie, ne, se, oe, re, ae, le, ce, he, de, ue, fe, pe, me, ge, ve, _e, ye, be, we, xe, ke, Ce, Se, Te, De, Ee, Me, Ie, Pe, Ae, Oe, Ne, $e, Le, je, Ye, He, Fe, We, Re, ze, Be, qe, Ue, Ve, Ge, Ke, Qe, Xe, Ze, Je, ti, ei, ii, ni, si, oi, ri, ai, li, ci, hi, di, ui, fi, pi, mi, gi, vi, _i, yi, bi, wi = function(t) {
        function e(e) {
            var i = this,
                s = !1;
            return t(this).one(n.TRANSITION_END, function() {
                s = !0
            }), setTimeout(function() {
                s || n.triggerTransitionEnd(i)
            }, e), this
        }
        var i = "transitionend",
            n = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) {
                    for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
                    return t
                },
                getSelectorFromElement: function(e) {
                    var i = e.getAttribute("data-target");
                    i && "#" !== i || (i = e.getAttribute("href") || "");
                    try {
                        return 0 < t(document).find(i).length ? i : null
                    } catch (e) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function(e) {
                    if (!e) return 0;
                    var i = t(e).css("transition-duration");
                    return parseFloat(i) ? (i = i.split(",")[0], 1e3 * parseFloat(i)) : 0
                },
                reflow: function(t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function(e) {
                    t(e).trigger(i)
                },
                supportsTransitionEnd: function() {
                    return Boolean(i)
                },
                isElement: function(t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function(t, e, i) {
                    for (var s in i)
                        if (Object.prototype.hasOwnProperty.call(i, s)) {
                            var o = i[s],
                                r = e[s],
                                a = r && n.isElement(r) ? "element" : (l = r, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + o + '".')
                        } var l
                }
            };
        return t.fn.emulateTransitionEnd = e, t.event.special[n.TRANSITION_END] = {
            bindType: i,
            delegateType: i,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }, n
    }(e),
    xi = (a = "alert", c = "." + (l = "bs.alert"), h = (r = e).fn[a], d = {
        CLOSE: "close" + c,
        CLOSED: "closed" + c,
        CLICK_DATA_API: "click" + c + ".data-api"
    }, u = "alert", f = "fade", p = "show", m = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.close = function(t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }, e.dispose = function() {
            r.removeData(this._element, l), this._element = null
        }, e._getRootElement = function(t) {
            var e = wi.getSelectorFromElement(t),
                i = !1;
            return e && (i = r(e)[0]), i || (i = r(t).closest("." + u)[0]), i
        }, e._triggerCloseEvent = function(t) {
            var e = r.Event(d.CLOSE);
            return r(t).trigger(e), e
        }, e._removeElement = function(t) {
            var e = this;
            if (r(t).removeClass(p), r(t).hasClass(f)) {
                var i = wi.getTransitionDurationFromElement(t);
                r(t).one(wi.TRANSITION_END, function(i) {
                    return e._destroyElement(t, i)
                }).emulateTransitionEnd(i)
            } else this._destroyElement(t)
        }, e._destroyElement = function(t) {
            r(t).detach().trigger(d.CLOSED).remove()
        }, t._jQueryInterface = function(e) {
            return this.each(function() {
                var i = r(this),
                    n = i.data(l);
                n || (n = new t(this), i.data(l, n)), "close" === e && n[e](this)
            })
        }, t._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this)
            }
        }, s(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.0"
            }
        }]), t
    }(), r(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m)), r.fn[a] = m._jQueryInterface, r.fn[a].Constructor = m, r.fn[a].noConflict = function() {
        return r.fn[a] = h, m._jQueryInterface
    }, m),
    ki = (v = "button", y = "." + (_ = "bs.button"), b = ".data-api", w = (g = e).fn[v], x = "active", k = "btn", S = '[data-toggle^="button"]', T = '[data-toggle="buttons"]', D = "input", E = ".active", M = ".btn", I = {
        CLICK_DATA_API: "click" + y + b,
        FOCUS_BLUR_DATA_API: (C = "focus") + y + b + " blur" + y + b
    }, P = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.toggle = function() {
            var t = !0,
                e = !0,
                i = g(this._element).closest(T)[0];
            if (i) {
                var n = g(this._element).find(D)[0];
                if (n) {
                    if ("radio" === n.type)
                        if (n.checked && g(this._element).hasClass(x)) t = !1;
                        else {
                            var s = g(i).find(E)[0];
                            s && g(s).removeClass(x)
                        } if (t) {
                        if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled")) return;
                        n.checked = !g(this._element).hasClass(x), g(n).trigger("change")
                    }
                    n.focus(), e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(x)), t && g(this._element).toggleClass(x)
        }, e.dispose = function() {
            g.removeData(this._element, _), this._element = null
        }, t._jQueryInterface = function(e) {
            return this.each(function() {
                var i = g(this).data(_);
                i || (i = new t(this), g(this).data(_, i)), "toggle" === e && i[e]()
            })
        }, s(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.0"
            }
        }]), t
    }(), g(document).on(I.CLICK_DATA_API, S, function(t) {
        t.preventDefault();
        var e = t.target;
        g(e).hasClass(k) || (e = g(e).closest(M)), P._jQueryInterface.call(g(e), "toggle")
    }).on(I.FOCUS_BLUR_DATA_API, S, function(t) {
        var e = g(t.target).closest(M)[0];
        g(e).toggleClass(C, /^focus(in)?$/.test(t.type))
    }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function() {
        return g.fn[v] = w, P._jQueryInterface
    }, P),
    Ci = (O = "carousel", $ = "." + (N = "bs.carousel"), L = ".data-api", j = (A = e).fn[O], Y = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0
    }, H = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
    }, F = "next", W = "prev", R = "left", z = "right", B = {
        SLIDE: "slide" + $,
        SLID: "slid" + $,
        KEYDOWN: "keydown" + $,
        MOUSEENTER: "mouseenter" + $,
        MOUSELEAVE: "mouseleave" + $,
        TOUCHEND: "touchend" + $,
        LOAD_DATA_API: "load" + $ + L,
        CLICK_DATA_API: "click" + $ + L
    }, q = "carousel", U = "active", V = "slide", G = "carousel-item-right", K = "carousel-item-left", Q = "carousel-item-next", X = "carousel-item-prev", Z = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]'
    }, J = function() {
        function t(t, e) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = A(t)[0], this._indicatorsElement = A(this._element).find(Z.INDICATORS)[0], this._addEventListeners()
        }
        var e = t.prototype;
        return e.next = function() {
            this._isSliding || this._slide(F)
        }, e.nextWhenVisible = function() {
            !document.hidden && A(this._element).is(":visible") && "hidden" !== A(this._element).css("visibility") && this.next()
        }, e.prev = function() {
            this._isSliding || this._slide(W)
        }, e.pause = function(t) {
            t || (this._isPaused = !0), A(this._element).find(Z.NEXT_PREV)[0] && (wi.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, e.cycle = function(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, e.to = function(t) {
            var e = this;
            this._activeElement = A(this._element).find(Z.ACTIVE_ITEM)[0];
            var i = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding) A(this._element).one(B.SLID, function() {
                    return e.to(t)
                });
                else {
                    if (i === t) return this.pause(), void this.cycle();
                    var n = i < t ? F : W;
                    this._slide(n, this._items[t])
                }
        }, e.dispose = function() {
            A(this._element).off($), A.removeData(this._element, N), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, e._getConfig = function(t) {
            return t = o({}, Y, t), wi.typeCheckConfig(O, t, H), t
        }, e._addEventListeners = function() {
            var t = this;
            this._config.keyboard && A(this._element).on(B.KEYDOWN, function(e) {
                return t._keydown(e)
            }), "hover" === this._config.pause && (A(this._element).on(B.MOUSEENTER, function(e) {
                return t.pause(e)
            }).on(B.MOUSELEAVE, function(e) {
                return t.cycle(e)
            }), "ontouchstart" in document.documentElement && A(this._element).on(B.TOUCHEND, function() {
                t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                    return t.cycle(e)
                }, 500 + t._config.interval)
            }))
        }, e._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                case 37:
                    t.preventDefault(), this.prev();
                    break;
                case 39:
                    t.preventDefault(), this.next()
            }
        }, e._getItemIndex = function(t) {
            return this._items = A.makeArray(A(t).parent().find(Z.ITEM)), this._items.indexOf(t)
        }, e._getItemByDirection = function(t, e) {
            var i = t === F,
                n = t === W,
                s = this._getItemIndex(e),
                o = this._items.length - 1;
            if ((n && 0 === s || i && s === o) && !this._config.wrap) return e;
            var r = (s + (t === W ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }, e._triggerSlideEvent = function(t, e) {
            var i = this._getItemIndex(t),
                n = this._getItemIndex(A(this._element).find(Z.ACTIVE_ITEM)[0]),
                s = A.Event(B.SLIDE, {
                    relatedTarget: t,
                    direction: e,
                    from: n,
                    to: i
                });
            return A(this._element).trigger(s), s
        }, e._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                A(this._indicatorsElement).find(Z.ACTIVE).removeClass(U);
                var e = this._indicatorsElement.children[this._getItemIndex(t)];
                e && A(e).addClass(U)
            }
        }, e._slide = function(t, e) {
            var i, n, s, o = this,
                r = A(this._element).find(Z.ACTIVE_ITEM)[0],
                a = this._getItemIndex(r),
                l = e || r && this._getItemByDirection(t, r),
                c = this._getItemIndex(l),
                h = Boolean(this._interval);
            if (t === F ? (i = K, n = Q, s = R) : (i = G, n = X, s = z), l && A(l).hasClass(U)) this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, s).isDefaultPrevented() && r && l) {
                this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                var d = A.Event(B.SLID, {
                    relatedTarget: l,
                    direction: s,
                    from: a,
                    to: c
                });
                if (A(this._element).hasClass(V)) {
                    A(l).addClass(n), wi.reflow(l), A(r).addClass(i), A(l).addClass(i);
                    var u = wi.getTransitionDurationFromElement(r);
                    A(r).one(wi.TRANSITION_END, function() {
                        A(l).removeClass(i + " " + n).addClass(U), A(r).removeClass(U + " " + n + " " + i), o._isSliding = !1, setTimeout(function() {
                            return A(o._element).trigger(d)
                        }, 0)
                    }).emulateTransitionEnd(u)
                } else A(r).removeClass(U), A(l).addClass(U), this._isSliding = !1, A(this._element).trigger(d);
                h && this.cycle()
            }
        }, t._jQueryInterface = function(e) {
            return this.each(function() {
                var i = A(this).data(N),
                    n = o({}, Y, A(this).data());
                "object" == typeof e && (n = o({}, n, e));
                var s = "string" == typeof e ? e : n.slide;
                if (i || (i = new t(this, n), A(this).data(N, i)), "number" == typeof e) i.to(e);
                else if ("string" == typeof s) {
                    if ("undefined" == typeof i[s]) throw new TypeError('No method named "' + s + '"');
                    i[s]()
                } else n.interval && (i.pause(), i.cycle())
            })
        }, t._dataApiClickHandler = function(e) {
            var i = wi.getSelectorFromElement(this);
            if (i) {
                var n = A(i)[0];
                if (n && A(n).hasClass(q)) {
                    var s = o({}, A(n).data(), A(this).data()),
                        r = this.getAttribute("data-slide-to");
                    r && (s.interval = !1), t._jQueryInterface.call(A(n), s), r && A(n).data(N).to(r), e.preventDefault()
                }
            }
        }, s(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.0"
            }
        }, {
            key: "Default",
            get: function() {
                return Y
            }
        }]), t
    }(), A(document).on(B.CLICK_DATA_API, Z.DATA_SLIDE, J._dataApiClickHandler), A(window).on(B.LOAD_DATA_API, function() {
        A(Z.DATA_RIDE).each(function() {
            var t = A(this);
            J._jQueryInterface.call(t, t.data())
        })
    }), A.fn[O] = J._jQueryInterface, A.fn[O].Constructor = J, A.fn[O].noConflict = function() {
        return A.fn[O] = j, J._jQueryInterface
    }, J),
    Si = (et = "collapse", nt = "." + (it = "bs.collapse"), st = (tt = e).fn[et], ot = {
        toggle: !0,
        parent: ""
    }, rt = {
        toggle: "boolean",
        parent: "(string|element)"
    }, at = {
        SHOW: "show" + nt,
        SHOWN: "shown" + nt,
        HIDE: "hide" + nt,
        HIDDEN: "hidden" + nt,
        CLICK_DATA_API: "click" + nt + ".data-api"
    }, lt = "show", ct = "collapse", ht = "collapsing", dt = "collapsed", ut = "width", ft = "height", pt = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
    }, mt = function() {
        function t(t, e) {
            this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var i = tt(pt.DATA_TOGGLE), n = 0; n < i.length; n++) {
                var s = i[n],
                    o = wi.getSelectorFromElement(s);
                null !== o && 0 < tt(o).filter(t).length && (this._selector = o, this._triggerArray.push(s))
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        var e = t.prototype;
        return e.toggle = function() {
                tt(this._element).hasClass(lt) ? this.hide() : this.show()
            }, e.show = function() {
                var e, i, n = this;
                if (!(this._isTransitioning || tt(this._element).hasClass(lt) || (this._parent && 0 === (e = tt.makeArray(tt(this._parent).find(pt.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (i = tt(e).not(this._selector).data(it)) && i._isTransitioning))) {
                    var s = tt.Event(at.SHOW);
                    if (tt(this._element).trigger(s), !s.isDefaultPrevented()) {
                        e && (t._jQueryInterface.call(tt(e).not(this._selector), "hide"), i || tt(e).data(it, null));
                        var o = this._getDimension();
                        tt(this._element).removeClass(ct).addClass(ht), (this._element.style[o] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(dt).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            a = wi.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(wi.TRANSITION_END, function() {
                            tt(n._element).removeClass(ht).addClass(ct).addClass(lt), n._element.style[o] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN)
                        }).emulateTransitionEnd(a), this._element.style[o] = this._element[r] + "px"
                    }
                }
            },
            e.hide = function() {
                var t = this;
                if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
                    var e = tt.Event(at.HIDE);
                    if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", wi.reflow(this._element), tt(this._element).addClass(ht).removeClass(ct).removeClass(lt), 0 < this._triggerArray.length)
                            for (var n = 0; n < this._triggerArray.length; n++) {
                                var s = this._triggerArray[n],
                                    o = wi.getSelectorFromElement(s);
                                null !== o && (tt(o).hasClass(lt) || tt(s).addClass(dt).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[i] = "";
                        var r = wi.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(wi.TRANSITION_END, function() {
                            t.setTransitioning(!1), tt(t._element).removeClass(ht).addClass(ct).trigger(at.HIDDEN)
                        }).emulateTransitionEnd(r)
                    }
                }
            }, e.setTransitioning = function(t) {
                this._isTransitioning = t
            }, e.dispose = function() {
                tt.removeData(this._element, it), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function(t) {
                return (t = o({}, ot, t)).toggle = Boolean(t.toggle), wi.typeCheckConfig(et, t, rt), t
            }, e._getDimension = function() {
                return tt(this._element).hasClass(ut) ? ut : ft
            }, e._getParent = function() {
                var e = this,
                    i = null;
                wi.isElement(this._config.parent) ? (i = this._config.parent, "undefined" != typeof this._config.parent.jquery && (i = this._config.parent[0])) : i = tt(this._config.parent)[0];
                var n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return tt(i).find(n).each(function(i, n) {
                    e._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                }), i
            }, e._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var i = tt(t).hasClass(lt);
                    0 < e.length && tt(e).toggleClass(dt, !i).attr("aria-expanded", i)
                }
            }, t._getTargetFromElement = function(t) {
                var e = wi.getSelectorFromElement(t);
                return e ? tt(e)[0] : null
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = tt(this),
                        n = i.data(it),
                        s = o({}, ot, i.data(), "object" == typeof e && e);
                    if (!n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || (n = new t(this, s), i.data(it, n)), "string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ot
                }
            }]), t
    }(), tt(document).on(at.CLICK_DATA_API, pt.DATA_TOGGLE, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var e = tt(this),
            i = wi.getSelectorFromElement(this);
        tt(i).each(function() {
            var t = tt(this),
                i = t.data(it) ? "toggle" : e.data();
            mt._jQueryInterface.call(t, i)
        })
    }), tt.fn[et] = mt._jQueryInterface, tt.fn[et].Constructor = mt, tt.fn[et].noConflict = function() {
        return tt.fn[et] = st, mt._jQueryInterface
    }, mt),
    Ti = (vt = "dropdown", yt = "." + (_t = "bs.dropdown"), bt = ".data-api", wt = (gt = e).fn[vt], xt = new RegExp("38|40|27"), kt = {
        HIDE: "hide" + yt,
        HIDDEN: "hidden" + yt,
        SHOW: "show" + yt,
        SHOWN: "shown" + yt,
        CLICK: "click" + yt,
        CLICK_DATA_API: "click" + yt + bt,
        KEYDOWN_DATA_API: "keydown" + yt + bt,
        KEYUP_DATA_API: "keyup" + yt + bt
    }, Ct = "disabled", St = "show", Tt = "dropup", Dt = "dropright", Et = "dropleft", Mt = "dropdown-menu-right", It = "position-static", Pt = '[data-toggle="dropdown"]', At = ".dropdown form", Ot = ".dropdown-menu", Nt = ".navbar-nav", $t = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Lt = "top-start", jt = "top-end", Yt = "bottom-start", Ht = "bottom-end", Ft = "right-start", Wt = "left-start", Rt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }, zt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }, Bt = function() {
        function t(t, e) {
            this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }
        var e = t.prototype;
        return e.toggle = function() {
            if (!this._element.disabled && !gt(this._element).hasClass(Ct)) {
                var e = t._getParentFromElement(this._element),
                    n = gt(this._menu).hasClass(St);
                if (t._clearMenus(), !n) {
                    var s = {
                            relatedTarget: this._element
                        },
                        o = gt.Event(kt.SHOW, s);
                    if (gt(e).trigger(o), !o.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = e : wi.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && gt(e).addClass(It), this._popper = new i(r, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === gt(e).closest(Nt).length && gt(document.body).children().on("mouseover", null, gt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), gt(this._menu).toggleClass(St), gt(e).toggleClass(St).trigger(gt.Event(kt.SHOWN, s))
                    }
                }
            }
        }, e.dispose = function() {
            gt.removeData(this._element, _t), gt(this._element).off(yt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
        }, e.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, e._addEventListeners = function() {
            var t = this;
            gt(this._element).on(kt.CLICK, function(e) {
                e.preventDefault(), e.stopPropagation(), t.toggle()
            })
        }, e._getConfig = function(t) {
            return t = o({}, this.constructor.Default, gt(this._element).data(), t), wi.typeCheckConfig(vt, t, this.constructor.DefaultType), t
        }, e._getMenuElement = function() {
            if (!this._menu) {
                var e = t._getParentFromElement(this._element);
                this._menu = gt(e).find(Ot)[0]
            }
            return this._menu
        }, e._getPlacement = function() {
            var t = gt(this._element).parent(),
                e = Yt;
            return t.hasClass(Tt) ? (e = Lt, gt(this._menu).hasClass(Mt) && (e = jt)) : t.hasClass(Dt) ? e = Ft : t.hasClass(Et) ? e = Wt : gt(this._menu).hasClass(Mt) && (e = Ht), e
        }, e._detectNavbar = function() {
            return 0 < gt(this._element).closest(".navbar").length
        }, e._getPopperConfig = function() {
            var t = this,
                e = {};
            "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = o({}, e.offsets, t._config.offset(e.offsets) || {}), e
            } : e.offset = this._config.offset;
            var i = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: e,
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (i.modifiers.applyStyle = {
                enabled: !1
            }), i
        }, t._jQueryInterface = function(e) {
            return this.each(function() {
                var i = gt(this).data(_t);
                if (i || (i = new t(this, "object" == typeof e ? e : null), gt(this).data(_t, i)), "string" == typeof e) {
                    if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            })
        }, t._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var i = gt.makeArray(gt(Pt)), n = 0; n < i.length; n++) {
                    var s = t._getParentFromElement(i[n]),
                        o = gt(i[n]).data(_t),
                        r = {
                            relatedTarget: i[n]
                        };
                    if (o) {
                        var a = o._menu;
                        if (gt(s).hasClass(St) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && gt.contains(s, e.target))) {
                            var l = gt.Event(kt.HIDE, r);
                            gt(s).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && gt(document.body).children().off("mouseover", null, gt.noop), i[n].setAttribute("aria-expanded", "false"), gt(a).removeClass(St), gt(s).removeClass(St).trigger(gt.Event(kt.HIDDEN, r)))
                        }
                    }
                }
        }, t._getParentFromElement = function(t) {
            var e, i = wi.getSelectorFromElement(t);
            return i && (e = gt(i)[0]), e || t.parentNode
        }, t._dataApiKeydownHandler = function(e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || gt(e.target).closest(Ot).length)) : xt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !gt(this).hasClass(Ct))) {
                var i = t._getParentFromElement(this),
                    n = gt(i).hasClass(St);
                if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                    var s = gt(i).find($t).get();
                    if (0 !== s.length) {
                        var o = s.indexOf(e.target);
                        38 === e.which && 0 < o && o--, 40 === e.which && o < s.length - 1 && o++, o < 0 && (o = 0), s[o].focus()
                    }
                } else {
                    if (27 === e.which) {
                        var r = gt(i).find(Pt)[0];
                        gt(r).trigger("focus")
                    }
                    gt(this).trigger("click")
                }
            }
        }, s(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.0"
            }
        }, {
            key: "Default",
            get: function() {
                return Rt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return zt
            }
        }]), t
    }(), gt(document).on(kt.KEYDOWN_DATA_API, Pt, Bt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, Ot, Bt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Bt._clearMenus).on(kt.CLICK_DATA_API, Pt, function(t) {
        t.preventDefault(), t.stopPropagation(), Bt._jQueryInterface.call(gt(this), "toggle")
    }).on(kt.CLICK_DATA_API, At, function(t) {
        t.stopPropagation()
    }), gt.fn[vt] = Bt._jQueryInterface, gt.fn[vt].Constructor = Bt, gt.fn[vt].noConflict = function() {
        return gt.fn[vt] = wt, Bt._jQueryInterface
    }, Bt),
    Di = (Ut = "modal", Gt = "." + (Vt = "bs.modal"), Kt = (qt = e).fn[Ut], Qt = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }, Xt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }, Zt = {
        HIDE: "hide" + Gt,
        HIDDEN: "hidden" + Gt,
        SHOW: "show" + Gt,
        SHOWN: "shown" + Gt,
        FOCUSIN: "focusin" + Gt,
        RESIZE: "resize" + Gt,
        CLICK_DISMISS: "click.dismiss" + Gt,
        KEYDOWN_DISMISS: "keydown.dismiss" + Gt,
        MOUSEUP_DISMISS: "mouseup.dismiss" + Gt,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + Gt,
        CLICK_DATA_API: "click" + Gt + ".data-api"
    }, Jt = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ie = "fade", ne = "show", se = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler"
    }, oe = function() {
        function t(t, e) {
            this._config = this._getConfig(e), this._element = t, this._dialog = qt(t).find(se.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
        }
        var e = t.prototype;
        return e.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }, e.show = function(t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
                qt(this._element).hasClass(ie) && (this._isTransitioning = !0);
                var i = qt.Event(Zt.SHOW, {
                    relatedTarget: t
                });
                qt(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), qt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), qt(this._element).on(Zt.CLICK_DISMISS, se.DATA_DISMISS, function(t) {
                    return e.hide(t)
                }), qt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function() {
                    qt(e._element).one(Zt.MOUSEUP_DISMISS, function(t) {
                        qt(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function() {
                    return e._showElement(t)
                }))
            }
        }, e.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                var i = qt.Event(Zt.HIDE);
                if (qt(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                    this._isShown = !1;
                    var n = qt(this._element).hasClass(ie);
                    if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), qt(document).off(Zt.FOCUSIN), qt(this._element).removeClass(ne), qt(this._element).off(Zt.CLICK_DISMISS), qt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), n) {
                        var s = wi.getTransitionDurationFromElement(this._element);
                        qt(this._element).one(wi.TRANSITION_END, function(t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(s)
                    } else this._hideModal()
                }
            }
        }, e.dispose = function() {
            qt.removeData(this._element, Vt), qt(window, document, this._element, this._backdrop).off(Gt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
        }, e.handleUpdate = function() {
            this._adjustDialog()
        }, e._getConfig = function(t) {
            return t = o({}, Qt, t), wi.typeCheckConfig(Ut, t, Xt), t
        }, e._showElement = function(t) {
            var e = this,
                i = qt(this._element).hasClass(ie);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && wi.reflow(this._element), qt(this._element).addClass(ne), this._config.focus && this._enforceFocus();
            var n = qt.Event(Zt.SHOWN, {
                    relatedTarget: t
                }),
                s = function() {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, qt(e._element).trigger(n)
                };
            if (i) {
                var o = wi.getTransitionDurationFromElement(this._element);
                qt(this._dialog).one(wi.TRANSITION_END, s).emulateTransitionEnd(o)
            } else s()
        }, e._enforceFocus = function() {
            var t = this;
            qt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === qt(t._element).has(e.target).length && t._element.focus()
            })
        }, e._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? qt(this._element).on(Zt.KEYDOWN_DISMISS, function(e) {
                27 === e.which && (e.preventDefault(), t.hide())
            }) : this._isShown || qt(this._element).off(Zt.KEYDOWN_DISMISS)
        }, e._setResizeEvent = function() {
            var t = this;
            this._isShown ? qt(window).on(Zt.RESIZE, function(e) {
                return t.handleUpdate(e)
            }) : qt(window).off(Zt.RESIZE)
        }, e._hideModal = function() {
            var t = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                qt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), qt(t._element).trigger(Zt.HIDDEN)
            })
        }, e._removeBackdrop = function() {
            this._backdrop && (qt(this._backdrop).remove(), this._backdrop = null)
        }, e._showBackdrop = function(t) {
            var e = this,
                i = qt(this._element).hasClass(ie) ? ie : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = te, i && qt(this._backdrop).addClass(i), qt(this._backdrop).appendTo(document.body), qt(this._element).on(Zt.CLICK_DISMISS, function(t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                    }), i && wi.reflow(this._backdrop), qt(this._backdrop).addClass(ne), !t) return;
                if (!i) return void t();
                var n = wi.getTransitionDurationFromElement(this._backdrop);
                qt(this._backdrop).one(wi.TRANSITION_END, t).emulateTransitionEnd(n)
            } else if (!this._isShown && this._backdrop) {
                qt(this._backdrop).removeClass(ne);
                var s = function() {
                    e._removeBackdrop(), t && t()
                };
                if (qt(this._element).hasClass(ie)) {
                    var o = wi.getTransitionDurationFromElement(this._backdrop);
                    qt(this._backdrop).one(wi.TRANSITION_END, s).emulateTransitionEnd(o)
                } else s()
            } else t && t()
        }, e._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, e._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, e._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, e._setScrollbar = function() {
            var t = this;
            if (this._isBodyOverflowing) {
                qt(se.FIXED_CONTENT).each(function(e, i) {
                    var n = qt(i)[0].style.paddingRight,
                        s = qt(i).css("padding-right");
                    qt(i).data("padding-right", n).css("padding-right", parseFloat(s) + t._scrollbarWidth + "px")
                }), qt(se.STICKY_CONTENT).each(function(e, i) {
                    var n = qt(i)[0].style.marginRight,
                        s = qt(i).css("margin-right");
                    qt(i).data("margin-right", n).css("margin-right", parseFloat(s) - t._scrollbarWidth + "px")
                }), qt(se.NAVBAR_TOGGLER).each(function(e, i) {
                    var n = qt(i)[0].style.marginRight,
                        s = qt(i).css("margin-right");
                    qt(i).data("margin-right", n).css("margin-right", parseFloat(s) + t._scrollbarWidth + "px")
                });
                var e = document.body.style.paddingRight,
                    i = qt(document.body).css("padding-right");
                qt(document.body).data("padding-right", e).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
        }, e._resetScrollbar = function() {
            qt(se.FIXED_CONTENT).each(function(t, e) {
                var i = qt(e).data("padding-right");
                void 0 !== i && qt(e).css("padding-right", i).removeData("padding-right")
            }), qt(se.STICKY_CONTENT + ", " + se.NAVBAR_TOGGLER).each(function(t, e) {
                var i = qt(e).data("margin-right");
                void 0 !== i && qt(e).css("margin-right", i).removeData("margin-right")
            });
            var t = qt(document.body).data("padding-right");
            void 0 !== t && qt(document.body).css("padding-right", t).removeData("padding-right")
        }, e._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = Jt, document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
        }, t._jQueryInterface = function(e, i) {
            return this.each(function() {
                var n = qt(this).data(Vt),
                    s = o({}, t.Default, qt(this).data(), "object" == typeof e && e);
                if (n || (n = new t(this, s), qt(this).data(Vt, n)), "string" == typeof e) {
                    if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                    n[e](i)
                } else s.show && n.show(i)
            })
        }, s(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.0"
            }
        }, {
            key: "Default",
            get: function() {
                return Qt
            }
        }]), t
    }(), qt(document).on(Zt.CLICK_DATA_API, se.DATA_TOGGLE, function(t) {
        var e, i = this,
            n = wi.getSelectorFromElement(this);
        n && (e = qt(n)[0]);
        var s = qt(e).data(Vt) ? "toggle" : o({}, qt(e).data(), qt(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = qt(e).one(Zt.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(Zt.HIDDEN, function() {
                qt(i).is(":visible") && i.focus()
            })
        });
        oe._jQueryInterface.call(qt(e), s, this)
    }), qt.fn[Ut] = oe._jQueryInterface, qt.fn[Ut].Constructor = oe, qt.fn[Ut].noConflict = function() {
        return qt.fn[Ut] = Kt, oe._jQueryInterface
    }, oe),
    Ei = (ae = "tooltip", ce = "." + (le = "bs.tooltip"), he = (re = e).fn[ae], de = "bs-tooltip", ue = new RegExp("(^|\\s)" + de + "\\S+", "g"), me = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(pe = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }),
        selector: !(fe = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
    }, ve = "out", _e = {
        HIDE: "hide" + ce,
        HIDDEN: "hidden" + ce,
        SHOW: (ge = "show") + ce,
        SHOWN: "shown" + ce,
        INSERTED: "inserted" + ce,
        CLICK: "click" + ce,
        FOCUSIN: "focusin" + ce,
        FOCUSOUT: "focusout" + ce,
        MOUSEENTER: "mouseenter" + ce,
        MOUSELEAVE: "mouseleave" + ce
    }, ye = "fade", be = "show", we = ".tooltip-inner", xe = ".arrow", ke = "hover", Ce = "focus", Se = "click", Te = "manual", De = function() {
        function t(t, e) {
            if (void 0 === i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
        }
        var e = t.prototype;
        return e.enable = function() {
            this._isEnabled = !0
        }, e.disable = function() {
            this._isEnabled = !1
        }, e.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }, e.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY,
                        i = re(t.currentTarget).data(e);
                    i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), re(t.currentTarget).data(e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (re(this.getTipElement()).hasClass(be)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }, e.dispose = function() {
            clearTimeout(this._timeout), re.removeData(this.element, this.constructor.DATA_KEY), re(this.element).off(this.constructor.EVENT_KEY), re(this.element).closest(".modal").off("hide.bs.modal"), this.tip && re(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, e.show = function() {
            var t = this;
            if ("none" === re(this.element).css("display")) throw new Error("Please use show on visible elements");
            var e = re.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                re(this.element).trigger(e);
                var n = re.contains(this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !n) return;
                var s = this.getTipElement(),
                    o = wi.getUID(this.constructor.NAME);
                s.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && re(s).addClass(ye);
                var r = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                    a = this._getAttachment(r);
                this.addAttachmentClass(a);
                var l = !1 === this.config.container ? document.body : re(this.config.container);
                re(s).data(this.constructor.DATA_KEY, this), re.contains(this.element.ownerDocument.documentElement, this.tip) || re(s).appendTo(l), re(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, s, {
                    placement: a,
                    modifiers: {
                        offset: {
                            offset: this.config.offset
                        },
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: xe
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        t._handlePopperPlacementChange(e)
                    }
                }), re(s).addClass(be), "ontouchstart" in document.documentElement && re(document.body).children().on("mouseover", null, re.noop);
                var c = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null, re(t.element).trigger(t.constructor.Event.SHOWN), e === ve && t._leave(null, t)
                };
                if (re(this.tip).hasClass(ye)) {
                    var h = wi.getTransitionDurationFromElement(this.tip);
                    re(this.tip).one(wi.TRANSITION_END, c).emulateTransitionEnd(h)
                } else c()
            }
        }, e.hide = function(t) {
            var e = this,
                i = this.getTipElement(),
                n = re.Event(this.constructor.Event.HIDE),
                s = function() {
                    e._hoverState !== ge && i.parentNode && i.parentNode.removeChild(i), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), re(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                };
            if (re(this.element).trigger(n), !n.isDefaultPrevented()) {
                if (re(i).removeClass(be), "ontouchstart" in document.documentElement && re(document.body).children().off("mouseover", null, re.noop), this._activeTrigger[Se] = !1, this._activeTrigger[Ce] = !1, this._activeTrigger[ke] = !1, re(this.tip).hasClass(ye)) {
                    var o = wi.getTransitionDurationFromElement(i);
                    re(i).one(wi.TRANSITION_END, s).emulateTransitionEnd(o)
                } else s();
                this._hoverState = ""
            }
        }, e.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }, e.isWithContent = function() {
            return Boolean(this.getTitle())
        }, e.addAttachmentClass = function(t) {
            re(this.getTipElement()).addClass(de + "-" + t)
        }, e.getTipElement = function() {
            return this.tip = this.tip || re(this.config.template)[0], this.tip
        }, e.setContent = function() {
            var t = re(this.getTipElement());
            this.setElementContent(t.find(we), this.getTitle()), t.removeClass(ye + " " + be)
        }, e.setElementContent = function(t, e) {
            var i = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery) ? i ? re(e).parent().is(t) || t.empty().append(e) : t.text(re(e).text()) : t[i ? "html" : "text"](e)
        }, e.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
        }, e._getAttachment = function(t) {
            return pe[t.toUpperCase()]
        }, e._setListeners = function() {
            var t = this;
            this.config.trigger.split(" ").forEach(function(e) {
                if ("click" === e) re(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                    return t.toggle(e)
                });
                else if (e !== Te) {
                    var i = e === ke ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                        n = e === ke ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                    re(t.element).on(i, t.config.selector, function(e) {
                        return t._enter(e)
                    }).on(n, t.config.selector, function(e) {
                        return t._leave(e)
                    })
                }
                re(t.element).closest(".modal").on("hide.bs.modal", function() {
                    return t.hide()
                })
            }), this.config.selector ? this.config = o({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }, e._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, e._enter = function(t, e) {
            var i = this.constructor.DATA_KEY;
            (e = e || re(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), re(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusin" === t.type ? Ce : ke] = !0), re(e.getTipElement()).hasClass(be) || e._hoverState === ge ? e._hoverState = ge : (clearTimeout(e._timeout), e._hoverState = ge, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                e._hoverState === ge && e.show()
            }, e.config.delay.show) : e.show())
        }, e._leave = function(t, e) {
            var i = this.constructor.DATA_KEY;
            (e = e || re(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), re(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusout" === t.type ? Ce : ke] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = ve, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                e._hoverState === ve && e.hide()
            }, e.config.delay.hide) : e.hide())
        }, e._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
            return !1
        }, e._getConfig = function(t) {
            return "number" == typeof(t = o({}, this.constructor.Default, re(this.element).data(), t)).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), wi.typeCheckConfig(ae, t, this.constructor.DefaultType), t
        }, e._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }, e._cleanTipClass = function() {
            var t = re(this.getTipElement()),
                e = t.attr("class").match(ue);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        }, e._handlePopperPlacementChange = function(t) {
            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
        }, e._fixTransition = function() {
            var t = this.getTipElement(),
                e = this.config.animation;
            null === t.getAttribute("x-placement") && (re(t).removeClass(ye), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
        }, t._jQueryInterface = function(e) {
            return this.each(function() {
                var i = re(this).data(le),
                    n = "object" == typeof e && e;
                if ((i || !/dispose|hide/.test(e)) && (i || (i = new t(this, n), re(this).data(le, i)), "string" == typeof e)) {
                    if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            })
        }, s(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.0"
            }
        }, {
            key: "Default",
            get: function() {
                return me
            }
        }, {
            key: "NAME",
            get: function() {
                return ae
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return le
            }
        }, {
            key: "Event",
            get: function() {
                return _e
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ce
            }
        }, {
            key: "DefaultType",
            get: function() {
                return fe
            }
        }]), t
    }(), re.fn[ae] = De._jQueryInterface, re.fn[ae].Constructor = De, re.fn[ae].noConflict = function() {
        return re.fn[ae] = he, De._jQueryInterface
    }, De),
    Mi = (Me = "popover", Pe = "." + (Ie = "bs.popover"), Ae = (Ee = e).fn[Me], Oe = "bs-popover", Ne = new RegExp("(^|\\s)" + Oe + "\\S+", "g"), $e = o({}, Ei.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), Le = o({}, Ei.DefaultType, {
        content: "(string|element|function)"
    }), je = "fade", He = ".popover-header", Fe = ".popover-body", We = {
        HIDE: "hide" + Pe,
        HIDDEN: "hidden" + Pe,
        SHOW: (Ye = "show") + Pe,
        SHOWN: "shown" + Pe,
        INSERTED: "inserted" + Pe,
        CLICK: "click" + Pe,
        FOCUSIN: "focusin" + Pe,
        FOCUSOUT: "focusout" + Pe,
        MOUSEENTER: "mouseenter" + Pe,
        MOUSELEAVE: "mouseleave" + Pe
    }, Re = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        var i, n;
        n = t, (i = e).prototype = Object.create(n.prototype), (i.prototype.constructor = i).__proto__ = n;
        var o = e.prototype;
        return o.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }, o.addAttachmentClass = function(t) {
            Ee(this.getTipElement()).addClass(Oe + "-" + t)
        }, o.getTipElement = function() {
            return this.tip = this.tip || Ee(this.config.template)[0], this.tip
        }, o.setContent = function() {
            var t = Ee(this.getTipElement());
            this.setElementContent(t.find(He), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Fe), e), t.removeClass(je + " " + Ye)
        }, o._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }, o._cleanTipClass = function() {
            var t = Ee(this.getTipElement()),
                e = t.attr("class").match(Ne);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        }, e._jQueryInterface = function(t) {
            return this.each(function() {
                var i = Ee(this).data(Ie),
                    n = "object" == typeof t ? t : null;
                if ((i || !/destroy|hide/.test(t)) && (i || (i = new e(this, n), Ee(this).data(Ie, i)), "string" == typeof t)) {
                    if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                    i[t]()
                }
            })
        }, s(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.0"
            }
        }, {
            key: "Default",
            get: function() {
                return $e
            }
        }, {
            key: "NAME",
            get: function() {
                return Me
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ie
            }
        }, {
            key: "Event",
            get: function() {
                return We
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Pe
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Le
            }
        }]), e
    }(Ei), Ee.fn[Me] = Re._jQueryInterface, Ee.fn[Me].Constructor = Re, Ee.fn[Me].noConflict = function() {
        return Ee.fn[Me] = Ae, Re._jQueryInterface
    }, Re),
    Ii = (Be = "scrollspy", Ue = "." + (qe = "bs.scrollspy"), Ve = (ze = e).fn[Be], Ge = {
        offset: 10,
        method: "auto",
        target: ""
    }, Ke = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, Qe = {
        ACTIVATE: "activate" + Ue,
        SCROLL: "scroll" + Ue,
        LOAD_DATA_API: "load" + Ue + ".data-api"
    }, Xe = "dropdown-item", Ze = "active", Je = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        NAV_ITEMS: ".nav-item",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle"
    }, ti = "offset", ei = "position", ii = function() {
        function t(t, e) {
            var i = this;
            this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Je.NAV_LINKS + "," + this._config.target + " " + Je.LIST_ITEMS + "," + this._config.target + " " + Je.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, ze(this._scrollElement).on(Qe.SCROLL, function(t) {
                return i._process(t)
            }), this.refresh(), this._process()
        }
        var e = t.prototype;
        return e.refresh = function() {
            var t = this,
                e = this._scrollElement === this._scrollElement.window ? ti : ei,
                i = "auto" === this._config.method ? e : this._config.method,
                n = i === ei ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), ze.makeArray(ze(this._selector)).map(function(t) {
                var e, s = wi.getSelectorFromElement(t);
                if (s && (e = ze(s)[0]), e) {
                    var o = e.getBoundingClientRect();
                    if (o.width || o.height) return [ze(e)[i]().top + n, s]
                }
                return null
            }).filter(function(t) {
                return t
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).forEach(function(e) {
                t._offsets.push(e[0]), t._targets.push(e[1])
            })
        }, e.dispose = function() {
            ze.removeData(this._element, qe), ze(this._scrollElement).off(Ue), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, e._getConfig = function(t) {
            if ("string" != typeof(t = o({}, Ge, t)).target) {
                var e = ze(t.target).attr("id");
                e || (e = wi.getUID(Be), ze(t.target).attr("id", e)), t.target = "#" + e
            }
            return wi.typeCheckConfig(Be, t, Ke), t
        }, e._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, e._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, e._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, e._process = function() {
            var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), i <= t) {
                var n = this._targets[this._targets.length - 1];
                this._activeTarget !== n && this._activate(n)
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                for (var s = this._offsets.length; s--;) this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
            }
        }, e._activate = function(t) {
            this._activeTarget = t, this._clear();
            var e = this._selector.split(",");
            e = e.map(function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            });
            var i = ze(e.join(","));
            i.hasClass(Xe) ? (i.closest(Je.DROPDOWN).find(Je.DROPDOWN_TOGGLE).addClass(Ze), i.addClass(Ze)) : (i.addClass(Ze), i.parents(Je.NAV_LIST_GROUP).prev(Je.NAV_LINKS + ", " + Je.LIST_ITEMS).addClass(Ze), i.parents(Je.NAV_LIST_GROUP).prev(Je.NAV_ITEMS).children(Je.NAV_LINKS).addClass(Ze)), ze(this._scrollElement).trigger(Qe.ACTIVATE, {
                relatedTarget: t
            })
        }, e._clear = function() {
            ze(this._selector).filter(Je.ACTIVE).removeClass(Ze)
        }, t._jQueryInterface = function(e) {
            return this.each(function() {
                var i = ze(this).data(qe);
                if (i || (i = new t(this, "object" == typeof e && e), ze(this).data(qe, i)), "string" == typeof e) {
                    if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            })
        }, s(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.0"
            }
        }, {
            key: "Default",
            get: function() {
                return Ge
            }
        }]), t
    }(), ze(window).on(Qe.LOAD_DATA_API, function() {
        for (var t = ze.makeArray(ze(Je.DATA_SPY)), e = t.length; e--;) {
            var i = ze(t[e]);
            ii._jQueryInterface.call(i, i.data())
        }
    }), ze.fn[Be] = ii._jQueryInterface, ze.fn[Be].Constructor = ii, ze.fn[Be].noConflict = function() {
        return ze.fn[Be] = Ve, ii._jQueryInterface
    }, ii),
    Pi = (oi = "." + (si = "bs.tab"), ri = (ni = e).fn.tab, ai = {
        HIDE: "hide" + oi,
        HIDDEN: "hidden" + oi,
        SHOW: "show" + oi,
        SHOWN: "shown" + oi,
        CLICK_DATA_API: "click" + oi + ".data-api"
    }, li = "dropdown-menu", ci = "active", hi = "disabled", di = "fade", ui = "show", fi = ".dropdown", pi = ".nav, .list-group", mi = ".active", gi = "> li > .active", vi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', _i = ".dropdown-toggle", yi = "> .dropdown-menu .active", bi = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ni(this._element).hasClass(ci) || ni(this._element).hasClass(hi))) {
                var e, i, n = ni(this._element).closest(pi)[0],
                    s = wi.getSelectorFromElement(this._element);
                if (n) {
                    var o = "UL" === n.nodeName ? gi : mi;
                    i = (i = ni.makeArray(ni(n).find(o)))[i.length - 1]
                }
                var r = ni.Event(ai.HIDE, {
                        relatedTarget: this._element
                    }),
                    a = ni.Event(ai.SHOW, {
                        relatedTarget: i
                    });
                if (i && ni(i).trigger(r), ni(this._element).trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    s && (e = ni(s)[0]), this._activate(this._element, n);
                    var l = function() {
                        var e = ni.Event(ai.HIDDEN, {
                                relatedTarget: t._element
                            }),
                            n = ni.Event(ai.SHOWN, {
                                relatedTarget: i
                            });
                        ni(i).trigger(e), ni(t._element).trigger(n)
                    };
                    e ? this._activate(e, e.parentNode, l) : l()
                }
            }
        }, e.dispose = function() {
            ni.removeData(this._element, si), this._element = null
        }, e._activate = function(t, e, i) {
            var n = this,
                s = ("UL" === e.nodeName ? ni(e).find(gi) : ni(e).children(mi))[0],
                o = i && s && ni(s).hasClass(di),
                r = function() {
                    return n._transitionComplete(t, s, i)
                };
            if (s && o) {
                var a = wi.getTransitionDurationFromElement(s);
                ni(s).one(wi.TRANSITION_END, r).emulateTransitionEnd(a)
            } else r()
        }, e._transitionComplete = function(t, e, i) {
            if (e) {
                ni(e).removeClass(ui + " " + ci);
                var n = ni(e.parentNode).find(yi)[0];
                n && ni(n).removeClass(ci), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            if (ni(t).addClass(ci), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), wi.reflow(t), ni(t).addClass(ui), t.parentNode && ni(t.parentNode).hasClass(li)) {
                var s = ni(t).closest(fi)[0];
                s && ni(s).find(_i).addClass(ci), t.setAttribute("aria-expanded", !0)
            }
            i && i()
        }, t._jQueryInterface = function(e) {
            return this.each(function() {
                var i = ni(this),
                    n = i.data(si);
                if (n || (n = new t(this), i.data(si, n)), "string" == typeof e) {
                    if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            })
        }, s(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.0"
            }
        }]), t
    }(), ni(document).on(ai.CLICK_DATA_API, vi, function(t) {
        t.preventDefault(), bi._jQueryInterface.call(ni(this), "show")
    }), ni.fn.tab = bi._jQueryInterface, ni.fn.tab.Constructor = bi, ni.fn.tab.noConflict = function() {
        return ni.fn.tab = ri, bi._jQueryInterface
    }, bi);
! function(t) {
    if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(e), t.Util = wi, t.Alert = xi, t.Button = ki, t.Carousel = Ci, t.Collapse = Si, t.Dropdown = Ti, t.Modal = Di, t.Popover = Mi, t.Scrollspy = Ii, t.Tab = Pi, t.Tooltip = Ei, Object.defineProperty(t, "__esModule", {
    value: !0
})
}),
/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/
function() {
var t, e, i, n, s, o = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    },
    r = [].indexOf || function(t) {
        for (var e = 0, i = this.length; i > e; e++)
            if (e in this && this[e] === t) return e;
        return -1
    };
e = function() {
    function t() {}
    return t.prototype.extend = function(t, e) {
        var i, n;
        for (i in e) n = e[i], null == t[i] && (t[i] = n);
        return t
    }, t.prototype.isMobile = function(t) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
    }, t.prototype.createEvent = function(t, e, i, n) {
        var s;
        return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (s = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, n) : null != document.createEventObject ? (s = document.createEventObject()).eventType = t : s.eventName = t, s
    }, t.prototype.emitEvent = function(t, e) {
        return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
    }, t.prototype.addEvent = function(t, e, i) {
        return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
    }, t.prototype.removeEvent = function(t, e, i) {
        return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
    }, t.prototype.innerHeight = function() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }, t
}(), i = this.WeakMap || this.MozWeakMap || (i = function() {
    function t() {
        this.keys = [], this.values = []
    }
    return t.prototype.get = function(t) {
        var e, i, n, s;
        for (e = i = 0, n = (s = this.keys).length; n > i; e = ++i)
            if (s[e] === t) return this.values[e]
    }, t.prototype.set = function(t, e) {
        var i, n, s, o;
        for (i = n = 0, s = (o = this.keys).length; s > n; i = ++n)
            if (o[i] === t) return void(this.values[i] = e);
        return this.keys.push(t), this.values.push(e)
    }, t
}()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
    function t() {
        "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
    }
    return t.notSupported = !0, t.prototype.observe = function() {}, t
}()), n = this.getComputedStyle || function(t) {
    return this.getPropertyValue = function(e) {
        var i;
        return "float" === e && (e = "styleFloat"), s.test(e) && e.replace(s, function(t, e) {
            return e.toUpperCase()
        }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
    }, this
}, s = /(\-([a-z]){1})/g, this.WOW = function() {
    function s(t) {
        null == t && (t = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
    }
    return s.prototype.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: null,
        scrollContainer: null
    }, s.prototype.init = function() {
        var t;
        return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
    }, s.prototype.start = function() {
        var e, i, n, s;
        if (this.stopped = !1, this.boxes = function() {
                var t, i, n, s;
                for (s = [], t = 0, i = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; i > t; t++) e = n[t], s.push(e);
                return s
            }.call(this), this.all = function() {
                var t, i, n, s;
                for (s = [], t = 0, i = (n = this.boxes).length; i > t; t++) e = n[t], s.push(e);
                return s
            }.call(this), this.boxes.length)
            if (this.disabled()) this.resetStyle();
            else
                for (i = 0, n = (s = this.boxes).length; n > i; i++) e = s[i], this.applyStyle(e, !0);
        return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
            return function(e) {
                var i, n, s, o, r;
                for (r = [], i = 0, n = e.length; n > i; i++) o = e[i], r.push(function() {
                    var t, e, i, n;
                    for (n = [], t = 0, e = (i = o.addedNodes || []).length; e > t; t++) s = i[t], n.push(this.doSync(s));
                    return n
                }.call(t));
                return r
            }
        }(this)).observe(document.body, {
            childList: !0,
            subtree: !0
        }) : void 0
    }, s.prototype.stop = function() {
        return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
    }, s.prototype.sync = function() {
        return t.notSupported ? this.doSync(this.element) : void 0
    }, s.prototype.doSync = function(t) {
        var e, i, n, s, o;
        if (null == t && (t = this.element), 1 === t.nodeType) {
            for (o = [], i = 0, n = (s = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; n > i; i++) e = s[i], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push(this.scrolled = !0)) : o.push(void 0);
            return o
        }
    }, s.prototype.show = function(t) {
        return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
    }, s.prototype.applyStyle = function(t, e) {
        var i, n, s, o;
        return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), s = t.getAttribute("data-wow-iteration"), this.animate((o = this, function() {
            return o.customStyle(t, e, n, i, s)
        }))
    }, s.prototype.animate = "requestAnimationFrame" in window ? function(t) {
        return window.requestAnimationFrame(t)
    } : function(t) {
        return t()
    }, s.prototype.resetStyle = function() {
        var t, e, i, n, s;
        for (s = [], e = 0, i = (n = this.boxes).length; i > e; e++) t = n[e], s.push(t.style.visibility = "visible");
        return s
    }, s.prototype.resetAnimation = function(t) {
        var e;
        return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
    }, s.prototype.customStyle = function(t, e, i, n, s) {
        return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
            animationDuration: i
        }), n && this.vendorSet(t.style, {
            animationDelay: n
        }), s && this.vendorSet(t.style, {
            animationIterationCount: s
        }), this.vendorSet(t.style, {
            animationName: e ? "none" : this.cachedAnimationName(t)
        }), t
    }, s.prototype.vendors = ["moz", "webkit"], s.prototype.vendorSet = function(t, e) {
        var i, n, s, o;
        for (i in n = [], e) s = e[i], t["" + i] = s, n.push(function() {
            var e, n, r, a;
            for (a = [], e = 0, n = (r = this.vendors).length; n > e; e++) o = r[e], a.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = s);
            return a
        }.call(this));
        return n
    }, s.prototype.vendorCSS = function(t, e) {
        var i, s, o, r, a, l;
        for (r = (a = n(t)).getPropertyCSSValue(e), i = 0, s = (o = this.vendors).length; s > i; i++) l = o[i], r = r || a.getPropertyCSSValue("-" + l + "-" + e);
        return r
    }, s.prototype.animationName = function(t) {
        var e;
        try {
            e = this.vendorCSS(t, "animation-name").cssText
        } catch (i) {
            e = n(t).getPropertyValue("animation-name")
        }
        return "none" === e ? "" : e
    }, s.prototype.cacheAnimationName = function(t) {
        return this.animationNameCache.set(t, this.animationName(t))
    }, s.prototype.cachedAnimationName = function(t) {
        return this.animationNameCache.get(t)
    }, s.prototype.scrollHandler = function() {
        return this.scrolled = !0
    }, s.prototype.scrollCallback = function() {
        var t;
        return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
            var e, i, n, s;
            for (s = [], e = 0, i = (n = this.boxes).length; i > e; e++)(t = n[e]) && (this.isVisible(t) ? this.show(t) : s.push(t));
            return s
        }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
    }, s.prototype.offsetTop = function(t) {
        for (var e; void 0 === t.offsetTop;) t = t.parentNode;
        for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
        return e
    }, s.prototype.isVisible = function(t) {
        var e, i, n, s, o;
        return i = t.getAttribute("data-wow-offset") || this.config.offset, s = (o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, e = (n = this.offsetTop(t)) + t.clientHeight, s >= n && e >= o
    }, s.prototype.util = function() {
        return null != this._util ? this._util : this._util = new e
    }, s.prototype.disabled = function() {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    }, s
}()
}.call(this),
function(t) {
    var e = function(e, i) {
        this.options = i;
        var n = t(e),
            s = n.is("img"),
            o = s ? n.attr("src") : n.backgroundImageUrl();
        o = this.options.generateUrl(n, o);
        t("<img/>").attr("src", o).load(function() {
            s ? n.attr("src", t(this).attr("src")) : (n.backgroundImageUrl(t(this).attr("src")), n.backgroundSize(t(this)[0].width, t(this)[0].height)), n.attr("data-retina", "complete")
        })
    };
    e.prototype = {
        constructor: e
    }, t.fn.retinaReplace = function(i) {
        return 1 >= (void 0 === window.devicePixelRatio ? 1 : window.devicePixelRatio) ? this : this.each(function() {
            var n = t(this),
                s = n.data("retinaReplace"),
                o = t.extend({}, t.fn.retinaReplace.defaults, n.data(), "object" == typeof i && i);
            s || n.data("retinaReplace", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }, t.fn.retinaReplace.defaults = {
        suffix: "_2x",
        generateUrl: function(t, e) {
            var i = e.lastIndexOf("."),
                n = e.substr(i + 1);
            return e.substr(0, i) + this.suffix + "." + n
        }
    }, t.fn.retinaReplace.Constructor = e, t.fn.backgroundImageUrl = function(e) {
        return e ? this.each(function() {
            t(this).css("background-image", 'url("' + e + '")')
        }) : t(this).css("background-image").replace(/url\(|\)|"|'/g, "")
    }, t.fn.backgroundSize = function(e, i) {
        var n = Math.floor(e / 2) + "px " + Math.floor(i / 2) + "px";
        t(this).css("background-size", n), t(this).css("-webkit-background-size", n)
    }, t(function() {
        t("[data-retina='true']").retinaReplace()
    })
}(window.jQuery),
function(t, e, i, n) {
    function s(e, i) {
        this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(s.Plugins, t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(s.Workers, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    s.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, s.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, s.Type = {
        Event: "event",
        State: "state"
    }, s.Plugins = {}, s.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                n = this.settings.rtl,
                s = {
                    width: "auto",
                    "margin-left": n ? e : "",
                    "margin-right": n ? "" : e
                };
            !i && this.$stage.children().css(s), t.css = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                n = this._items.length,
                s = !this.settings.autoWidth,
                o = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = s ? e * i : this._items[n].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                i = this._items,
                n = this.settings,
                s = Math.max(2 * n.items, 4),
                o = 2 * Math.ceil(i.length / 2),
                r = n.loop && i.length ? n.rewind ? s : Math.max(s, o) : 0,
                a = "",
                l = "";
            for (r /= 2; r--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e;) n = o[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, o.push(n + s * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                n = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * s,
                l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], s.prototype.initialize = function() {
        var e, i, s;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, s = this.$element.children(i).width(), e.length && s <= 0 && this.preloadAutoWidthImages(e));
        this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, s.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            n = -1,
            s = null;
        i ? (t.each(i, function(t) {
            t <= e && t > n && (n = Number(t))
        }), "function" == typeof(s = t.extend({}, this.options, i[n])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, s.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, s.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, s.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), s = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, s.prototype.width = function(t) {
        switch (t = t || s.Width.Default) {
            case s.Width.Inner:
            case s.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, s.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, s.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, s.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, s.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, s.prototype.onDragStart = function(e) {
        var n = null;
        3 !== e.which && (t.support.transform ? n = {
            x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        } : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, s.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            n = null,
            s = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, s);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
    }, s.prototype.onDragEnd = function(e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
            s = this._drag.stage.current,
            o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, s.prototype.closest = function(e, i) {
        var n = -1,
            s = 30,
            o = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || t.each(r, t.proxy(function(t, a) {
            return "left" === i && e > a - s && e < a + s ? n = t : "right" === i && e > a - o - s && e < a - o + s ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] || a - o) && (n = "left" === i ? t + 1 : t), -1 === n
        }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (n = e = this.maximum())), n
    }, s.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, s.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, s.prototype.current = function(t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, s.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
            return e
        })
    }, s.prototype.reset = function(t) {
        (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, s.prototype.normalize = function(t, e) {
        var i = this._items.length,
            s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
    }, s.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, s.prototype.maximum = function(t) {
        var e, i, n, s = this.settings,
            o = this._coordinates.length;
        if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (s.autoWidth || s.merge) {
            for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
            o = e + 1
        } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, s.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, s.prototype.items = function(t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, s.prototype.mergers = function(t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, s.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            s = i + this._items.length,
            o = function(t) {
                return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2
            };
        return e === n ? t.map(this._clones, function(t, e) {
            return o(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? o(i) : null
        })
    }, s.prototype.speed = function(t) {
        return t !== n && (this._speed = t), this._speed
    }, s.prototype.coordinates = function(e) {
        var i, s = 1,
            o = e - 1;
        return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * s) : i = this._coordinates[o] || 0, i = Math.ceil(i))
    }, s.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, s.prototype.to = function(t, e) {
        var i = this.current(),
            n = null,
            s = t - this.relative(i),
            o = (s > 0) - (s < 0),
            r = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r), (n = (((t = i + s) - a) % r + r) % r + a) !== t && n - s <= l && n - s > 0 && (i = n - s, t = n, this.reset(i))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, s.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, s.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, s.prototype.onTransitionEnd = function(t) {
        if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, s.prototype.viewport = function() {
        var n;
        return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
    }, s.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, s.prototype.add = function(e, i) {
        var s = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, s.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, s.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy(function(e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, s.prototype.destroy = function() {
        for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, s.prototype.op = function(t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case "<":
                return n ? t > i : t < i;
            case ">":
                return n ? t < i : t > i;
            case ">=":
                return n ? t <= i : t >= i;
            case "<=":
                return n ? t >= i : t <= i
        }
    }, s.prototype.on = function(t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, s.prototype.off = function(t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, s.prototype.trigger = function(e, i, n) {
        var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            r = t.camelCase(t.grep(["on", e, n], function(t) {
                return t
            }).join("-").toLowerCase()),
            a = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, o, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(a)
        }), this.register({
            type: s.Type.Event,
            name: e
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)), a
    }, s.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, s.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }, s.prototype.register = function(e) {
        if (e.type === s.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
            return t.inArray(i, this._states.tags[e.name]) === n
        }, this)))
    }, s.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, s.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, s.prototype.pointer = function(t) {
        var i = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, s.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, s.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var n = t(this),
                o = n.data("owl.carousel");
            o || (o = new s(this, "object" == typeof e && e), n.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                o.register({
                    type: s.Type.Event,
                    name: i
                }), o.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, o))
            })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
        })
    }, t.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    var i = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, i.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, i.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, i.prototype.destroy = function() {
        var t, i;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var s = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * s || 0, r = (e.property && e.property.value !== n ? e.property.value : this._core.current()) + o, a = this._core.clones().length, l = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); o++ < s;) this.load(a / 2 + this._core.relative(r)), a && t.each(this._core.clones(this._core.relative(r)), l),
                        r++
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {
        lazyLoad: !1
    }, s.prototype.load = function(i) {
        var n = this._core.$stage.children().eq(i),
            s = n && n.find(".owl-lazy");
        !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function(i, n) {
            var s, o = t(n),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : ((s = new Image).onload = t.proxy(function() {
                o.css({
                    "background-image": 'url("' + r + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this), s.src = r)
        }, this)), this._loaded.push(n.get(0)))
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
}(window.Zepto || window.jQuery, window, document),
function(t) {
    var e = function(i) {
        this._core = i, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        var e = this._core._current,
            i = e + this._core.settings.items,
            n = this._core.$stage.children().toArray().slice(e, i),
            s = [],
            o = 0;
        t.each(n, function(e, i) {
            s.push(t(i).height())
        }), o = Math.max.apply(null, s), this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var n = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, n.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            s = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
        else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[r] = {
            type: i,
            id: n,
            width: s,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, n.prototype.thumbnail = function(e, i) {
        var n, s, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"),
            l = "src",
            c = "",
            h = this._core.settings,
            d = function(t) {
                s = '<div class="owl-video-play-icon"></div>', n = h.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(s)
            };
        if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length) return d(a.attr(l)), a.remove(), !1;
        "youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t[0].thumbnail_large, d(o)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t.framegrab_url, d(o)
            }
        })
    }, n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, n.prototype.play = function(e) {
        var i, n = t(e.target).closest("." + this._core.settings.itemClass),
            s = this._videos[n.attr("data-video")],
            o = s.width || "100%",
            r = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === s.type ? i = '<iframe width="' + o + '" height="' + r + '" src="//www.youtube.com/embed/' + s.id + "?autoplay=1&rel=0&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type ? i = '<iframe src="//player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + o + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === s.type && (i = '<iframe frameborder="0"height="' + r + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + s.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
    }, n.prototype.isInFullScreen = function() {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var s = function(e) {
        this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, s.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                n = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r)), o && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
        }
    }, s.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var n = function(e) {
        this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, n.Defaults, this._core.options)
    };
    n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, n.prototype.play = function() {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, n.prototype._getNextTimeout = function(n, s) {
        return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
        }, this), n || this._core.settings.autoplayTimeout)
    }, n.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, n.prototype.stop = function() {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, n.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document),
function(t) {
    "use strict";
    var e = function(i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function() {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function() {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function() {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, e.prototype.destroy = function() {
        var t, e, i, n;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2,
            n = i + this._core.items().length,
            s = this._core.maximum(!0),
            o = this._core.settings,
            r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
                if (e >= r || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(s, t - i),
                            end: t - i + r - 1
                        }), Math.min(s, t - i) === s) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, e.prototype.draw = function() {
        var e, i = this._core.settings,
            n = this._core.items().length <= i.items,
            s = this._core.relative(this._core.current()),
            o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, e.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, e.prototype.getPosition = function(e) {
        var i, n, s = this._core.settings;
        return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
    }, e.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function(e, i, n) {
        var s;
        !n && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    "use strict";
    var s = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        s = t.map(this._hashes, function(t, e) {
                            return t === n ? e : null
                        }).join();
                    if (!s || e.location.hash.slice(1) === s) return;
                    e.location.hash = s
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
            var t = e.location.hash.substring(1),
                i = this._core.$stage.children(),
                s = this._hashes[t] && i.index(this._hashes[t]);
            s !== n && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
        }, this))
    };
    s.Defaults = {
        URLhashListener: !1
    }, s.prototype.destroy = function() {
        var i, n;
        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    function s(e, i) {
        var s = !1,
            o = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(o + " ") + o).split(" "), function(t, e) {
            if (r[e] !== n) return s = !i || e, !1
        }), s
    }

    function o(t) {
        return s(t, !0)
    }
    var r = t("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        c = {
            csstransforms: function() {
                return !!s("transform")
            },
            csstransforms3d: function() {
                return !!s("perspective")
            },
            csstransitions: function() {
                return !!s("transition")
            },
            cssanimations: function() {
                return !!s("animation")
            }
        };
    c.csstransitions() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), c.cssanimations() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c.csstransforms() && (t.support.transform = new String(o("transform")), t.support.transform3d = c.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(t) {
    var e, i, n, s, o, r, a = "Close",
        l = "BeforeClose",
        c = "AfterClose",
        h = "BeforeAppend",
        d = "MarkupParse",
        u = "Open",
        f = "Change",
        p = "mfp",
        m = "." + p,
        g = "mfp-ready",
        v = "mfp-removing",
        _ = "mfp-prevent-close",
        y = function() {},
        b = !!window.jQuery,
        w = t(window),
        x = function(t, i) {
            e.ev.on(p + t + m, i)
        },
        k = function(e, i, n, s) {
            var o = document.createElement("div");
            return o.className = "mfp-" + e, n && (o.innerHTML = n), s ? i && i.appendChild(o) : (o = t(o), i && o.appendTo(i)), o
        },
        C = function(i, n) {
            e.ev.triggerHandler(p + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
        },
        S = function(i) {
            return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn
        },
        T = function() {
            t.magnificPopup.instance || ((e = new y).init(), t.magnificPopup.instance = e)
        },
        D = function() {
            var t = document.createElement("p").style,
                e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length;)
                if (e.pop() + "Transition" in t) return !0;
            return !1
        };
    y.prototype = {
        constructor: y,
        init: function() {
            var i = navigator.appVersion;
            e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = D(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
        },
        open: function(i) {
            var s;
            if (!1 === i.isObj) {
                e.items = i.items.toArray(), e.index = 0;
                var r, a = i.items;
                for (s = 0; s < a.length; s++)
                    if ((r = a[s]).parsed && (r = r.el[0]), r === i.el[0]) {
                        e.index = s;
                        break
                    }
            } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
            if (!e.isOpen) {
                e.types = [], o = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = k("bg").on("click" + m, function() {
                    e.close()
                }), e.wrap = k("wrap").attr("tabindex", -1).on("click" + m, function(t) {
                    e._checkIfClose(t.target) && e.close()
                }), e.container = k("container", e.wrap)), e.contentContainer = k("content"), e.st.preloader && (e.preloader = k("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (s = 0; s < l.length; s++) {
                    var c = l[s];
                    c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
                }
                C("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (x(d, function(t, e, i, n) {
                    i.close_replaceWith = S(n.type)
                }), o += " mfp-close-btn-in") : e.wrap.append(S())), e.st.alignTop && (o += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                }) : e.wrap.css({
                    top: w.scrollTop(),
                    position: "absolute"
                }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: n.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && n.on("keyup" + m, function(t) {
                    27 === t.keyCode && e.close()
                }), w.on("resize" + m, function() {
                    e.updateSize()
                }), e.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && e.wrap.addClass(o);
                var h = e.wH = w.height(),
                    f = {};
                if (e.fixedContentPos && e._hasScrollBar(h)) {
                    var p = e._getScrollbarSize();
                    p && (f.marginRight = p)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                var v = e.st.mainClass;
                return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), C("BuildControls"), t("html").css(f), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                    e.content ? (e._addClassToMFP(g), e._setFocus()) : e.bgOverlay.addClass(g), n.on("focusin" + m, e._onFocusIn)
                }, 16), e.isOpen = !0, e.updateSize(h), C(u), i
            }
            e.updateItemHTML()
        },
        close: function() {
            e.isOpen && (C(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function() {
                e._close()
            }, e.st.removalDelay)) : e._close())
        },
        _close: function() {
            C(a);
            var i = v + " " + g + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                var s = {
                    marginRight: ""
                };
                e.isIE7 ? t("body, html").css("overflow", "") : s.overflow = "", t("html").css(s)
            }
            n.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, C(c)
        },
        updateSize: function(t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                    n = window.innerHeight * i;
                e.wrap.css("height", n), e.wH = n
            } else e.wH = t || w.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize")
        },
        updateItemHTML: function() {
            var i = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
            var n = i.type;
            if (C("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                var o = !!e.st[n] && e.st[n].markup;
                C("FirstMarkupParse", o), e.currTemplate[n] = !o || t(o)
            }
            s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
            var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
            e.appendContent(r, n), i.preloaded = !0, C(f, i), s = i.type, e.container.prepend(e.contentContainer), C("AfterChange")
        },
        appendContent: function(t, i) {
            e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(S()) : e.content = t : e.content = "", C(h), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
        },
        parseEl: function(i) {
            var n, s = e.items[i];
            if (s.tagName ? s = {
                    el: t(s)
                } : (n = s.type, s = {
                    data: s,
                    src: s.src
                }), s.el) {
                for (var o = e.types, r = 0; r < o.length; r++)
                    if (s.el.hasClass("mfp-" + o[r])) {
                        n = o[r];
                        break
                    } s.src = s.el.attr("data-mfp-src"), s.src || (s.src = s.el.attr("href"))
            }
            return s.type = n || e.st.type || "inline", s.index = i, s.parsed = !0, e.items[i] = s, C("ElementParse", s), e.items[i]
        },
        addGroup: function(t, i) {
            var n = function(n) {
                n.mfpEl = this, e._openClick(n, t, i)
            };
            i || (i = {});
            var s = "click.magnificPopup";
            i.mainEl = t, i.items ? (i.isObj = !0, t.off(s).on(s, n)) : (i.isObj = !1, i.delegate ? t.off(s).on(s, i.delegate, n) : (i.items = t, t.off(s).on(s, n)))
        },
        _openClick: function(i, n, s) {
            if ((void 0 !== s.midClick ? s.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var o = void 0 !== s.disableOn ? s.disableOn : t.magnificPopup.defaults.disableOn;
                if (o)
                    if (t.isFunction(o)) {
                        if (!o.call(e)) return !0
                    } else if (w.width() < o) return !0;
                i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), s.el = t(i.mfpEl), s.delegate && (s.items = n.find(s.delegate)), e.open(s)
            }
        },
        updateStatus: function(t, n) {
            if (e.preloader) {
                i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                var s = {
                    status: t,
                    text: n
                };
                C("UpdateStatus", s), t = s.status, n = s.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) {
                    t.stopImmediatePropagation()
                }), e.container.addClass("mfp-s-" + t), i = t
            }
        },
        _checkIfClose: function(i) {
            if (!t(i).hasClass(_)) {
                var n = e.st.closeOnContentClick,
                    s = e.st.closeOnBgClick;
                if (n && s) return !0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                if (i === e.content[0] || t.contains(e.content[0], i)) {
                    if (n) return !0
                } else if (s && t.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(t) {
            e.bgOverlay.addClass(t), e.wrap.addClass(t)
        },
        _removeClassFromMFP: function(t) {
            this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
        },
        _hasScrollBar: function(t) {
            return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || w.height())
        },
        _setFocus: function() {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        },
        _onFocusIn: function(i) {
            return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
        },
        _parseMarkup: function(e, i, n) {
            var s;
            n.data && (i = t.extend(n.data, i)), C(d, [e, i, n]), t.each(i, function(i, n) {
                if (void 0 === n || !1 === n) return !0;
                if ((s = i.split("_")).length > 1) {
                    var o = e.find(m + "-" + s[0]);
                    if (o.length > 0) {
                        var r = s[1];
                        "replaceWith" === r ? o[0] !== n[0] && o.replaceWith(n) : "img" === r ? o.is("img") ? o.attr("src", n) : o.replaceWith(t("<img>").attr("src", n).attr("class", o.attr("class"))) : o.attr(s[1], n)
                    }
                } else e.find(m + "-" + i).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    }, t.magnificPopup = {
        instance: null,
        proto: y.prototype,
        modules: [],
        open: function(e, i) {
            return T(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
        },
        close: function() {
            return t.magnificPopup.instance && t.magnificPopup.instance.close()
        },
        registerModule: function(e, i) {
            i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, t.fn.magnificPopup = function(i) {
        T();
        var n = t(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var s, o = b ? n.data("magnificPopup") : n[0].magnificPopup,
                    r = parseInt(arguments[1], 10) || 0;
                o.items ? s = o.items[r] : (s = n, o.delegate && (s = s.find(o.delegate)), s = s.eq(r)), e._openClick({
                    mfpEl: s
                }, n, o)
            } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else i = t.extend(!0, {}, i), b ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
        return n
    };
    var E, M, I, P = "inline",
        A = function() {
            I && (M.after(I.addClass(E)).detach(), I = null)
        };
    t.magnificPopup.registerModule(P, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                e.types.push(P), x(a + "." + P, function() {
                    A()
                })
            },
            getInline: function(i, n) {
                if (A(), i.src) {
                    var s = e.st.inline,
                        o = t(i.src);
                    if (o.length) {
                        var r = o[0].parentNode;
                        r && r.tagName && (M || (E = s.hiddenClass, M = k(E), E = "mfp-" + E), I = o.after(M).detach().removeClass(E)), e.updateStatus("ready")
                    } else e.updateStatus("error", s.tNotFound), o = t("<div>");
                    return i.inlineElement = o, o
                }
                return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
            }
        }
    });
    var O, N = "ajax",
        $ = function() {
            O && t(document.body).removeClass(O)
        },
        L = function() {
            $(), e.req && e.req.abort()
        };
    t.magnificPopup.registerModule(N, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                e.types.push(N), O = e.st.ajax.cursor, x(a + "." + N, L), x("BeforeChange." + N, L)
            },
            getAjax: function(i) {
                O && t(document.body).addClass(O), e.updateStatus("loading");
                var n = t.extend({
                    url: i.src,
                    success: function(n, s, o) {
                        var r = {
                            data: n,
                            xhr: o
                        };
                        C("ParseAjax", r), e.appendContent(t(r.data), N), i.finished = !0, $(), e._setFocus(), setTimeout(function() {
                            e.wrap.addClass(g)
                        }, 16), e.updateStatus("ready"), C("AjaxContentAdded")
                    },
                    error: function() {
                        $(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(n), ""
            }
        }
    });
    var j, Y = function(i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
            if (t.isFunction(n)) return n.call(e, i);
            if (i.el) return i.el.attr(n) || ""
        }
        return ""
    };
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var i = e.st.image,
                    n = ".image";
                e.types.push("image"), x(u + n, function() {
                    "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                }), x(a + n, function() {
                    i.cursor && t(document.body).removeClass(i.cursor), w.off("resize" + m)
                }), x("Resize" + n, e.resizeImage), e.isLowIE && x("AfterChange", e.resizeImage)
            },
            resizeImage: function() {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                }
            },
            _onImageHasSize: function(t) {
                t.img && (t.hasSize = !0, j && clearInterval(j), t.isCheckingImgSize = !1, C("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
            },
            findImageSize: function(t) {
                var i = 0,
                    n = t.img[0],
                    s = function(o) {
                        j && clearInterval(j), j = setInterval(function() {
                            return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(j), void(3 === ++i ? s(10) : 40 === i ? s(50) : 100 === i && s(500)))
                        }, o)
                    };
                s(1)
            },
            getImage: function(i, n) {
                var s = 0,
                    o = function() {
                        i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : 200 > ++s ? setTimeout(o, 100) : r())
                    },
                    r = function() {
                        i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i),
                            e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                    },
                    a = e.st.image,
                    l = n.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", o).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return e._parseMarkup(n, {
                    title: Y(i),
                    img_replaceWith: i.img
                }, i), e.resizeImage(), i.hasSize ? (j && clearInterval(j), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
            }
        }
    });
    var H, F = function() {
        return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform), H
    };
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(t) {
                return t.is("img") ? t : t.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var t, i = e.st.zoom,
                    n = ".zoom";
                if (i.enabled && e.supportsTransition) {
                    var s, o, r = i.duration,
                        c = function(t) {
                            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                n = "all " + i.duration / 1e3 + "s " + i.easing,
                                s = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                o = "transition";
                            return s["-webkit-" + o] = s["-moz-" + o] = s["-o-" + o] = s[o] = n, e.css(s), e
                        },
                        h = function() {
                            e.content.css("visibility", "visible")
                        };
                    x("BuildControls" + n, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void h();
                            (o = c(t)).css(e._getOffset()), e.wrap.append(o), s = setTimeout(function() {
                                o.css(e._getOffset(!0)), s = setTimeout(function() {
                                    h(), setTimeout(function() {
                                        o.remove(), t = o = null, C("ZoomAnimationEnded")
                                    }, 16)
                                }, r)
                            }, 16)
                        }
                    }), x(l + n, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.st.removalDelay = r, !t) {
                                if (!(t = e._getItemToZoom())) return;
                                o = c(t)
                            }
                            o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function() {
                                o.css(e._getOffset())
                            }, 16)
                        }
                    }), x(a + n, function() {
                        e._allowZoom() && (h(), o && o.remove(), t = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === e.currItem.type
            },
            _getItemToZoom: function() {
                return !!e.currItem.hasSize && e.currItem.img
            },
            _getOffset: function(i) {
                var n, s = (n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
                    o = parseInt(n.css("padding-top"), 10),
                    r = parseInt(n.css("padding-bottom"), 10);
                s.top -= t(window).scrollTop() - o;
                var a = {
                    width: n.width(),
                    height: (b ? n.innerHeight() : n[0].offsetHeight) - r - o
                };
                return F() ? a["-moz-transform"] = a.transform = "translate(" + s.left + "px," + s.top + "px)" : (a.left = s.left, a.top = s.top), a
            }
        }
    });
    var W = "iframe",
        R = "//about:blank",
        z = function(t) {
            if (e.currTemplate[W]) {
                var i = e.currTemplate[W].find("iframe");
                i.length && (t || (i[0].src = R), e.isIE8 && i.css("display", t ? "block" : "none"))
            }
        };
    t.magnificPopup.registerModule(W, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                e.types.push(W), x("BeforeChange", function(t, e, i) {
                    e !== i && (e === W ? z() : i === W && z(!0))
                }), x(a + "." + W, function() {
                    z()
                })
            },
            getIframe: function(i, n) {
                var s = i.src,
                    o = e.st.iframe;
                t.each(o.patterns, function() {
                    return s.indexOf(this.index) > -1 ? (this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)), s = this.src.replace("%id%", s), !1) : void 0
                });
                var r = {};
                return o.srcAction && (r[o.srcAction] = s), e._parseMarkup(n, r, i), e.updateStatus("ready"), n
            }
        }
    });
    var B = function(t) {
            var i = e.items.length;
            return t > i - 1 ? t - i : 0 > t ? i + t : t
        },
        q = function(t, e, i) {
            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
        };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = e.st.gallery,
                    s = ".mfp-gallery";
                return e.direction = !0, !(!i || !i.enabled) && (o += " mfp-gallery", x(u + s, function() {
                    i.navigateByImgClick && e.wrap.on("click" + s, ".mfp-img", function() {
                        return e.items.length > 1 ? (e.next(), !1) : void 0
                    }), n.on("keydown" + s, function(t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                    })
                }), x("UpdateStatus" + s, function(t, i) {
                    i.text && (i.text = q(i.text, e.currItem.index, e.items.length))
                }), x(d + s, function(t, n, s, o) {
                    var r = e.items.length;
                    s.counter = r > 1 ? q(i.tCounter, o.index, r) : ""
                }), x("BuildControls" + s, function() {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var n = i.arrowMarkup,
                            s = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(_),
                            o = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(_);
                        s.click(function() {
                            e.prev()
                        }), o.click(function() {
                            e.next()
                        }), e.container.append(s.add(o))
                    }
                }), x(f + s, function() {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                        e.preloadNearbyImages(), e._preloadTimeout = null
                    }, 16)
                }), void x(a + s, function() {
                    n.off(s), e.wrap.off("click" + s), e.arrowRight = e.arrowLeft = null
                }))
            },
            next: function() {
                e.direction = !0, e.index = B(e.index + 1), e.updateItemHTML()
            },
            prev: function() {
                e.direction = !1, e.index = B(e.index - 1), e.updateItemHTML()
            },
            goTo: function(t) {
                e.direction = t >= e.index, e.index = t, e.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var t, i = e.st.gallery.preload,
                    n = Math.min(i[0], e.items.length),
                    s = Math.min(i[1], e.items.length);
                for (t = 1; t <= (e.direction ? s : n); t++) e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? n : s); t++) e._preloadItem(e.index - t)
            },
            _preloadItem: function(i) {
                if (i = B(i), !e.items[i].preloaded) {
                    var n = e.items[i];
                    n.parsed || (n = e.parseEl(i)), C("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                        n.hasSize = !0
                    }).on("error.mfploader", function() {
                        n.hasSize = !0, n.loadError = !0, C("LazyLoadError", n)
                    }).attr("src", n.src)), n.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    t.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(t) {
                return t.src.replace(/\.\w+$/, function(t) {
                    return "@2x" + t
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina,
                        i = t.ratio;
                    (i = isNaN(i) ? i() : i) > 1 && (x("ImageHasSize." + U, function(t, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }), x("ElementParse." + U, function(e, n) {
                        n.src = t.replaceSrc(n, i)
                    }))
                }
            }
        }
    }), T()
}),
function() {
    var t = function(e, i) {
        function n() {
            var t, e;
            this.q = [], this.add = function(t) {
                this.q.push(t)
            }, this.call = function() {
                for (t = 0, e = this.q.length; t < e; t++) this.q[t].call()
            }
        }

        function s(t, e) {
            return t.currentStyle ? t.currentStyle[e] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(e) : t.style[e]
        }

        function o(t, e) {
            if (t.resizedAttached) {
                if (t.resizedAttached) return void t.resizedAttached.add(e)
            } else t.resizedAttached = new n, t.resizedAttached.add(e);
            t.resizeSensor = document.createElement("div"), t.resizeSensor.className = "resize-sensor";
            var i = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                o = "position: absolute; left: 0; top: 0; transition: 0s;";
            t.resizeSensor.style.cssText = i, t.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + i + '"><div style="' + o + '"></div></div><div class="resize-sensor-shrink" style="' + i + '"><div style="' + o + ' width: 200%; height: 200%"></div></div>', t.appendChild(t.resizeSensor), {
                fixed: 1,
                absolute: 1
            } [s(t, "position")] || (t.style.position = "relative");
            var r, a, l = t.resizeSensor.childNodes[0],
                c = l.childNodes[0],
                h = t.resizeSensor.childNodes[1],
                d = (h.childNodes[0], function() {
                    c.style.width = l.offsetWidth + 10 + "px", c.style.height = l.offsetHeight + 10 + "px", l.scrollLeft = l.scrollWidth, l.scrollTop = l.scrollHeight, h.scrollLeft = h.scrollWidth, h.scrollTop = h.scrollHeight, r = t.offsetWidth, a = t.offsetHeight
                });
            d();
            var u = function() {
                    t.resizedAttached && t.resizedAttached.call()
                },
                f = function(t, e, i) {
                    t.attachEvent ? t.attachEvent("on" + e, i) : t.addEventListener(e, i)
                },
                p = function() {
                    t.offsetWidth == r && t.offsetHeight == a || u(), d()
                };
            f(l, "scroll", p), f(h, "scroll", p)
        }
        var r = Object.prototype.toString.call(e),
            a = "[object Array]" === r || "[object NodeList]" === r || "[object HTMLCollection]" === r || "undefined" != typeof jQuery && e instanceof jQuery || "undefined" != typeof Elements && e instanceof Elements;
        if (a)
            for (var l = 0, c = e.length; l < c; l++) o(e[l], i);
        else o(e, i);
        this.detach = function() {
            if (a)
                for (var i = 0, n = e.length; i < n; i++) t.detach(e[i]);
            else t.detach(e)
        }
    };
    t.detach = function(t) {
        t.resizeSensor && (t.removeChild(t.resizeSensor), delete t.resizeSensor, delete t.resizedAttached)
    }, "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = t : window.ResizeSensor = t
}(),
function(t) {
    t.fn.theiaStickySidebar = function(e) {
        function i(e, i) {
            return !0 === e.initialized || !(t("body").width() < e.minWidth) && (n(e, i), !0)
        }

        function n(e, i) {
            e.initialized = !0, 0 === t("#theia-sticky-sidebar-stylesheet-" + e.namespace).length && t("head").append(t('<style id="theia-sticky-sidebar-stylesheet-' + e.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), i.each(function() {
                function i() {
                    o.fixedScrollTop = 0, o.sidebar.css({
                        "min-height": "1px"
                    }), o.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function n(e) {
                    var i = e.height();
                    return e.children().each(function() {
                        i = Math.max(i, t(this).height())
                    }), i
                }
                var o = {};
                if (o.sidebar = t(this), o.options = e || {}, o.container = t(o.options.containerSelector), 0 == o.container.length && (o.container = o.sidebar.parent()), o.sidebar.parents(":not(.theia-exception)").css("-webkit-transform", "none"), o.sidebar.css({
                        position: o.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), o.stickySidebar = o.sidebar.find(".theiaStickySidebar"), 0 == o.stickySidebar.length) {
                    var r = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    o.sidebar.find("script").filter(function(t, e) {
                        return 0 === e.type.length || e.type.match(r)
                    }).remove(), o.stickySidebar = t("<div>").addClass("theiaStickySidebar").append(o.sidebar.children()), o.sidebar.append(o.stickySidebar)
                }
                o.marginBottom = parseInt(o.sidebar.css("margin-bottom")), o.paddingTop = parseInt(o.sidebar.css("padding-top")), o.paddingBottom = parseInt(o.sidebar.css("padding-bottom"));
                var a = o.stickySidebar.offset().top,
                    l = o.stickySidebar.outerHeight();
                o.stickySidebar.css("padding-top", 1), o.stickySidebar.css("padding-bottom", 1), a -= o.stickySidebar.offset().top, l = o.stickySidebar.outerHeight() - l - a, 0 == a ? (o.stickySidebar.css("padding-top", 0), o.stickySidebarPaddingTop = 0) : o.stickySidebarPaddingTop = 1, 0 == l ? (o.stickySidebar.css("padding-bottom", 0), o.stickySidebarPaddingBottom = 0) : o.stickySidebarPaddingBottom = 1, o.previousScrollTop = null, o.fixedScrollTop = 0, i(), o.onScroll = function(o) {
                    if (o.stickySidebar.is(":visible"))
                        if (t("body").width() < o.options.minWidth) i();
                        else if (o.options.disableOnResponsiveLayouts && o.sidebar.outerWidth("none" == o.sidebar.css("float")) + 50 > o.container.width()) i();
                    else {
                        var r = t(document).scrollTop(),
                            a = "static";
                        if (r >= o.sidebar.offset().top + (o.paddingTop - o.options.additionalMarginTop)) {
                            var l, c = o.paddingTop + e.additionalMarginTop,
                                h = o.paddingBottom + o.marginBottom + e.additionalMarginBottom,
                                d = o.sidebar.offset().top,
                                u = o.sidebar.offset().top + n(o.container),
                                f = 0 + e.additionalMarginTop;
                            l = o.stickySidebar.outerHeight() + c + h < t(window).height() ? f + o.stickySidebar.outerHeight() : t(window).height() - o.marginBottom - o.paddingBottom - e.additionalMarginBottom;
                            var p = d - r + o.paddingTop,
                                m = u - r - o.paddingBottom - o.marginBottom,
                                g = o.stickySidebar.offset().top - r,
                                v = o.previousScrollTop - r;
                            "fixed" == o.stickySidebar.css("position") && "modern" == o.options.sidebarBehavior && (g += v), "stick-to-top" == o.options.sidebarBehavior && (g = e.additionalMarginTop), "stick-to-bottom" == o.options.sidebarBehavior && (g = l - o.stickySidebar.outerHeight()), g = v > 0 ? Math.min(g, f) : Math.max(g, l - o.stickySidebar.outerHeight()), g = Math.max(g, p), g = Math.min(g, m - o.stickySidebar.outerHeight());
                            var _ = o.container.height() == o.stickySidebar.outerHeight();
                            a = !_ && g == f || !_ && g == l - o.stickySidebar.outerHeight() ? "fixed" : r + g - o.sidebar.offset().top - o.paddingTop <= e.additionalMarginTop ? "static" : "absolute"
                        }
                        if ("fixed" == a) {
                            var y = t(document).scrollLeft();
                            o.stickySidebar.css({
                                position: "fixed",
                                width: s(o.stickySidebar) + "px",
                                transform: "translateY(" + g + "px)",
                                left: o.sidebar.offset().left + parseInt(o.sidebar.css("padding-left")) - y + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == a) {
                            var b = {};
                            "absolute" != o.stickySidebar.css("position") && (b.position = "absolute", b.transform = "translateY(" + (r + g - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom) + "px)", b.top = "0px"), b.width = s(o.stickySidebar) + "px", b.left = "", o.stickySidebar.css(b)
                        } else "static" == a && i();
                        "static" != a && 1 == o.options.updateSidebarHeight && o.sidebar.css({
                            "min-height": o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom
                        }), o.previousScrollTop = r
                    }
                }, o.onScroll(o), t(document).on("scroll." + o.options.namespace, function(t) {
                    return function() {
                        t.onScroll(t)
                    }
                }(o)), t(window).on("resize." + o.options.namespace, function(t) {
                    return function() {
                        t.stickySidebar.css({
                            position: "static"
                        }), t.onScroll(t)
                    }
                }(o)), "undefined" != typeof ResizeSensor && new ResizeSensor(o.stickySidebar[0], function(t) {
                    return function() {
                        t.onScroll(t)
                    }
                }(o))
            })
        }

        function s(t) {
            var e;
            try {
                e = t[0].getBoundingClientRect().width
            } catch (t) {}
            return void 0 === e && (e = t.width()), e
        }
        var o = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return (e = t.extend(o, e)).additionalMarginTop = parseInt(e.additionalMarginTop) || 0, e.additionalMarginBottom = parseInt(e.additionalMarginBottom) || 0,
            function(e, n) {
                i(e, n) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), t(document).on("scroll." + e.namespace, function(e, n) {
                    return function(s) {
                        i(e, n) && t(this).unbind(s)
                    }
                }(e, n)), t(window).on("resize." + e.namespace, function(e, n) {
                    return function(s) {
                        i(e, n) && t(this).unbind(s)
                    }
                }(e, n)))
            }(e, this), this
    }
}(jQuery),
function() {
    var t, e;
    t = window.jQuery, e = t(window), t.fn.stick_in_parent = function(i) {
        var n, s, o, r, a, l, c, h, d, u, f, p;
        for (null == i && (i = {}), p = i.sticky_class, a = i.inner_scrolling, f = i.recalc_every, u = i.parent, h = i.offset_top, c = i.spacer, s = i.bottoming, null == h && (h = 0), null == u && (u = void 0), null == a && (a = !0), null == p && (p = "is_stuck"), n = t(document), null == s && (s = !0), d = function(t) {
                var e;
                return window.getComputedStyle ? (t = window.getComputedStyle(t[0]), e = parseFloat(t.getPropertyValue("width")) + parseFloat(t.getPropertyValue("margin-left")) + parseFloat(t.getPropertyValue("margin-right")), "border-box" !== t.getPropertyValue("box-sizing") && (e += parseFloat(t.getPropertyValue("border-left-width")) + parseFloat(t.getPropertyValue("border-right-width")) + parseFloat(t.getPropertyValue("padding-left")) + parseFloat(t.getPropertyValue("padding-right"))), e) : t.outerWidth(!0)
            }, o = function(i, o, r, l, m, g, v, _) {
                var y, b, w, x, k, C, S, T, D, E, M, I;
                if (!i.data("sticky_kit")) {
                    if (i.data("sticky_kit", !0), k = n.height(), S = i.parent(), null != u && (S = S.closest(u)), !S.length) throw "failed to find stick parent";
                    if (y = w = !1, (M = null != c ? c && i.closest(c) : t("<div />")) && M.css("position", i.css("position")), (T = function() {
                            var t, e, s;
                            if (!_ && (k = n.height(), t = parseInt(S.css("border-top-width"), 10), e = parseInt(S.css("padding-top"), 10), o = parseInt(S.css("padding-bottom"), 10), r = S.offset().top + t + e, l = S.height(), w && (y = w = !1, null == c && (i.insertAfter(M), M.detach()), i.css({
                                    position: "",
                                    top: "",
                                    width: "",
                                    bottom: ""
                                }).removeClass(p), s = !0), m = i.offset().top - (parseInt(i.css("margin-top"), 10) || 0) - h, g = i.outerHeight(!0), v = i.css("float"), M && M.css({
                                    width: d(i),
                                    height: g,
                                    display: i.css("display"),
                                    "vertical-align": i.css("vertical-align"),
                                    float: v
                                }), s)) return I()
                        })(), g !== l) return x = void 0, C = h, E = f, I = function() {
                        var t, d, u, b;
                        if (!_ && (u = !1, null != E && (0 >= --E && (E = f, T(), u = !0)), u || n.height() === k || T(), u = e.scrollTop(), null != x && (d = u - x), x = u, w ? (s && (b = u + g + C > l + r, y && !b && (y = !1, i.css({
                                position: "fixed",
                                bottom: "",
                                top: C
                            }).trigger("sticky_kit:unbottom"))), u < m && (w = !1, C = h, null == c && ("left" !== v && "right" !== v || i.insertAfter(M), M.detach()), t = {
                                position: "",
                                width: "",
                                top: ""
                            }, i.css(t).removeClass(p).trigger("sticky_kit:unstick")), a && (t = e.height(), g + h > t && !y && (C -= d, C = Math.max(t - g, C), C = Math.min(h, C), w && i.css({
                                top: C + "px"
                            })))) : u > m && (w = !0, (t = {
                                position: "fixed",
                                top: C
                            }).width = "border-box" === i.css("box-sizing") ? i.outerWidth() + "px" : i.width() + "px", i.css(t).addClass(p), null == c && (i.after(M), "left" !== v && "right" !== v || M.append(i)), i.trigger("sticky_kit:stick")), w && s && (null == b && (b = u + g + C > l + r), !y && b))) return y = !0, "static" === S.css("position") && S.css({
                            position: "relative"
                        }), i.css({
                            position: "absolute",
                            bottom: o,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")
                    }, D = function() {
                        return T(), I()
                    }, b = function() {
                        if (_ = !0, e.off("touchmove", I), e.off("scroll", I), e.off("resize", D), t(document.body).off("sticky_kit:recalc", D), i.off("sticky_kit:detach", b), i.removeData("sticky_kit"), i.css({
                                position: "",
                                bottom: "",
                                top: "",
                                width: ""
                            }), S.position("position", ""), w) return null == c && ("left" !== v && "right" !== v || i.insertAfter(M), M.remove()), i.removeClass(p)
                    }, e.on("touchmove", I), e.on("scroll", I), e.on("resize", D), t(document.body).on("sticky_kit:recalc", D), i.on("sticky_kit:detach", b), setTimeout(I, 0)
                }
            }, r = 0, l = this.length; r < l; r++) i = this[r], o(t(i));
        return this
    }
}.call(this),
/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
function(t) {
    function e(t, e, s) {
        var o = t[0],
            r = /er/.test(s) ? _indeterminate : /bl/.test(s) ? f : d,
            a = s == _update ? {
                checked: o[d],
                disabled: o[f],
                indeterminate: "true" == t.attr(_indeterminate) || "false" == t.attr(_determinate)
            } : o[r];
        if (/^(ch|di|in)/.test(s) && !a) i(t, r);
        else if (/^(un|en|de)/.test(s) && a) n(t, r);
        else if (s == _update)
            for (var l in a) a[l] ? i(t, l, !0) : n(t, l, !0);
        else e && "toggle" != s || (e || t[_callback]("ifClicked"), a ? o[_type] !== h && n(t, r) : i(t, r))
    }

    function i(e, i, s) {
        var p = e[0],
            m = e.parent(),
            g = i == d,
            v = i == _indeterminate,
            _ = i == f,
            y = v ? _determinate : g ? u : "enabled",
            b = o(e, y + r(p[_type])),
            w = o(e, i + r(p[_type]));
        if (!0 !== p[i]) {
            if (!s && i == d && p[_type] == h && p.name) {
                var x = e.closest("form"),
                    k = 'input[name="' + p.name + '"]';
                (k = x.length ? x.find(k) : t(k)).each(function() {
                    this !== p && t(this).data(l) && n(t(this), i)
                })
            }
            v ? (p[i] = !0, p[d] && n(e, d, "force")) : (s || (p[i] = !0), g && p[_indeterminate] && n(e, _indeterminate, !1)), a(e, g, i, s)
        }
        p[f] && o(e, _cursor, !0) && m.find("." + c).css(_cursor, "default"), m[_add](w || o(e, i) || ""), m.attr("role") && !v && m.attr("aria-" + (_ ? f : d), "true"), m[_remove](b || o(e, y) || "")
    }

    function n(t, e, i) {
        var n = t[0],
            s = t.parent(),
            l = e == d,
            h = e == _indeterminate,
            p = e == f,
            m = h ? _determinate : l ? u : "enabled",
            g = o(t, m + r(n[_type])),
            v = o(t, e + r(n[_type]));
        !1 !== n[e] && (!h && i && "force" != i || (n[e] = !1), a(t, l, m, i)), !n[f] && o(t, _cursor, !0) && s.find("." + c).css(_cursor, "pointer"), s[_remove](v || o(t, e) || ""), s.attr("role") && !h && s.attr("aria-" + (p ? f : d), "false"), s[_add](g || o(t, m) || "")
    }

    function s(e, i) {
        e.data(l) && (e.parent().html(e.attr("style", e.data(l).s || "")), i && e[_callback](i), e.off(".i").unwrap(), t(_label + '[for="' + e[0].id + '"]').add(e.closest(_label)).off(".i"))
    }

    function o(t, e, i) {
        if (t.data(l)) return t.data(l).o[e + (i ? "" : "Class")]
    }

    function r(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }

    function a(t, e, i, n) {
        n || (e && t[_callback]("ifToggled"), t[_callback]("ifChanged")[_callback]("if" + r(i)))
    }
    var l = "iCheck",
        c = l + "-helper",
        h = "radio",
        d = "checked",
        u = "un" + d,
        f = "disabled";
    _determinate = "determinate", _indeterminate = "in" + _determinate, _update = "update", _type = "type", _click = "click", _touch = "touchbegin.i touchend.i", _add = "addClass", _remove = "removeClass", _callback = "trigger", _label = "label", _cursor = "cursor", _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent), t.fn[l] = function(o, r) {
        var a = 'input[type="checkbox"], input[type="' + h + '"]',
            u = t(),
            p = function(e) {
                e.each(function() {
                    var e = t(this);
                    u = e.is(a) ? u.add(e) : u.add(e.find(a))
                })
            };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(o)) return o = o.toLowerCase(), p(this), u.each(function() {
            var i = t(this);
            "destroy" == o ? s(i, "ifDestroyed") : e(i, !0, o), t.isFunction(r) && r()
        });
        if ("object" != typeof o && o) return this;
        var m = t.extend({
                checkedClass: d,
                disabledClass: f,
                indeterminateClass: _indeterminate,
                labelHover: !0
            }, o),
            g = m.handle,
            v = m.hoverClass || "hover",
            _ = m.focusClass || "focus",
            y = m.activeClass || "active",
            b = !!m.labelHover,
            w = m.labelHoverClass || "hover",
            x = 0 | ("" + m.increaseArea).replace("%", "");
        return "checkbox" != g && g != h || (a = 'input[type="' + g + '"]'), -50 > x && (x = -50), p(this), u.each(function() {
            var o = t(this);
            s(o);
            var r = this,
                a = r.id,
                u = {
                    position: "absolute",
                    top: p = -x + "%",
                    left: p,
                    display: "block",
                    width: u = 100 + 2 * x + "%",
                    height: u,
                    margin: 0,
                    padding: 0,
                    background: "#fff",
                    border: 0,
                    opacity: 0
                },
                p = _mobile ? {
                    position: "absolute",
                    visibility: "hidden"
                } : x ? u : {
                    position: "absolute",
                    opacity: 0
                },
                g = "checkbox" == r[_type] ? m.checkboxClass || "icheckbox" : m.radioClass || "i" + h,
                k = t(_label + '[for="' + a + '"]').add(o.closest(_label)),
                C = !!m.aria,
                S = l + "-" + Math.random().toString(36).substr(2, 6),
                T = '<div class="' + g + '" ' + (C ? 'role="' + r[_type] + '" ' : "");
            C && k.each(function() {
                T += 'aria-labelledby="', this.id ? T += this.id : (this.id = S, T += S), T += '"'
            }), T = o.wrap(T + "/>")[_callback]("ifCreated").parent().append(m.insert), u = t('<ins class="' + c + '"/>').css(u).appendTo(T), o.data(l, {
                o: m,
                s: o.attr("style")
            }).css(p), m.inheritClass && T[_add](r.className || ""), m.inheritID && a && T.attr("id", l + "-" + a), "static" == T.css("position") && T.css("position", "relative"), e(o, !0, _update), k.length && k.on(_click + ".i mouseover.i mouseout.i " + _touch, function(i) {
                var n = i[_type],
                    s = t(this);
                if (!r[f]) {
                    if (n == _click) {
                        if (t(i.target).is("a")) return;
                        e(o, !1, !0)
                    } else b && (/ut|nd/.test(n) ? (T[_remove](v), s[_remove](w)) : (T[_add](v), s[_add](w)));
                    if (!_mobile) return !1;
                    i.stopPropagation()
                }
            }), o.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(t) {
                var e = t[_type];
                return t = t.keyCode, e != _click && ("keydown" == e && 32 == t ? (r[_type] == h && r[d] || (r[d] ? n(o, d) : i(o, d)), !1) : void("keyup" == e && r[_type] == h ? !r[d] && i(o, d) : /us|ur/.test(e) && T["blur" == e ? _remove : _add](_)))
            }), u.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function(t) {
                var i = t[_type],
                    n = /wn|up/.test(i) ? y : v;
                if (!r[f]) {
                    if (i == _click ? e(o, !1, !0) : (/wn|er|in/.test(i) ? T[_add](n) : T[_remove](n + " " + y), k.length && b && n == v && k[/ut|nd/.test(i) ? _remove : _add](w)), !_mobile) return !1;
                    t.stopPropagation()
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.jquery_mmenu_all_js = e(t.jQuery)
}(this, function(t) {
    /*
     * jQuery mmenu offCanvas add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    var e, i, n, s, o, r, a;
    return function(t) {
            function e() {
                t[r].glbl || (o = {
                    $wndw: t(window),
                    $docu: t(document),
                    $html: t("html"),
                    $body: t("body")
                }, i = {}, n = {}, s = {}, t.each([i, n, s], function(t, e) {
                    e.add = function(t) {
                        for (var i = 0, n = (t = t.split(" ")).length; i < n; i++) e[t[i]] = e.mm(t[i])
                    }
                }), i.mm = function(t) {
                    return "mm-" + t
                }, i.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"), i.umm = function(t) {
                    return "mm-" == t.slice(0, 3) && (t = t.slice(3)), t
                }, n.mm = function(t) {
                    return "mm-" + t
                }, n.add("parent child"), s.mm = function(t) {
                    return t + ".mm"
                }, s.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"), t[r]._c = i, t[r]._d = n, t[r]._e = s, t[r].glbl = o)
            }
            var i, n, s, o, r = "mmenu",
                a = "6.1.8";
            t[r] && t[r].version > a || (t[r] = function(t, e, i) {
                return this.$menu = t, this._api = ["bind", "getInstance", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = e, this.conf = i, this.vars = {}, this.cbck = {}, this.mtch = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initAddons(), this._initExtensions(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), this._initMatchMedia(), "function" == typeof this.___debug && this.___debug(), this
            }, t[r].version = a, t[r].addons = {}, t[r].uniqueId = 0, t[r].defaults = {
                extensions: [],
                initMenu: function() {},
                initPanels: function() {},
                navbar: {
                    add: !0,
                    title: "Menu",
                    titleLink: "parent"
                },
                onClick: {
                    setSelected: !0
                },
                slidingSubmenus: !0
            }, t[r].configuration = {
                classNames: {
                    divider: "Divider",
                    inset: "Inset",
                    nolistview: "NoListview",
                    nopanel: "NoPanel",
                    panel: "Panel",
                    selected: "Selected",
                    spacer: "Spacer",
                    vertical: "Vertical"
                },
                clone: !1,
                openingInterval: 25,
                panelNodetype: "ul, ol, div",
                transitionDuration: 400
            }, t[r].prototype = {
                getInstance: function() {
                    return this
                },
                initPanels: function(t) {
                    this._initPanels(t)
                },
                openPanel: function(e, s) {
                    if (this.trigger("openPanel:before", e), e && e.length && (e.is("." + i.panel) || (e = e.closest("." + i.panel)), e.is("." + i.panel))) {
                        var o = this;
                        if ("boolean" != typeof s && (s = !0), e.hasClass(i.vertical)) e.add(e.parents("." + i.vertical)).removeClass(i.hidden).parent("li").addClass(i.opened), this.openPanel(e.parents("." + i.panel).not("." + i.vertical).first()), this.trigger("openPanel:start", e), this.trigger("openPanel:finish", e);
                        else {
                            if (e.hasClass(i.opened)) return;
                            var a = this.$pnls.children("." + i.panel),
                                l = a.filter("." + i.opened);
                            if (!t[r].support.csstransitions) return l.addClass(i.hidden).removeClass(i.opened), e.removeClass(i.hidden).addClass(i.opened), this.trigger("openPanel:start", e), void this.trigger("openPanel:finish", e);
                            a.not(e).removeClass(i.subopened);
                            for (var c = e.data(n.parent); c;)(c = c.closest("." + i.panel)).is("." + i.vertical) || c.addClass(i.subopened), c = c.data(n.parent);
                            a.removeClass(i.highest).not(l).not(e).addClass(i.hidden), e.removeClass(i.hidden), this.openPanelStart = function() {
                                l.removeClass(i.opened), e.addClass(i.opened), e.hasClass(i.subopened) ? (l.addClass(i.highest), e.removeClass(i.subopened)) : (l.addClass(i.subopened), e.addClass(i.highest)), this.trigger("openPanel:start", e)
                            }, this.openPanelFinish = function() {
                                l.removeClass(i.highest).addClass(i.hidden), e.removeClass(i.highest), this.trigger("openPanel:finish", e)
                            }, s && !e.hasClass(i.noanimation) ? setTimeout(function() {
                                o.__transitionend(e, function() {
                                    o.openPanelFinish.call(o)
                                }, o.conf.transitionDuration), o.openPanelStart.call(o)
                            }, o.conf.openingInterval) : (this.openPanelStart.call(this), this.openPanelFinish.call(this))
                        }
                        this.trigger("openPanel:after", e)
                    }
                },
                closePanel: function(t) {
                    this.trigger("closePanel:before", t);
                    var e = t.parent();
                    e.hasClass(i.vertical) && (e.removeClass(i.opened), this.trigger("closePanel", t)), this.trigger("closePanel:after", t)
                },
                closeAllPanels: function(t) {
                    this.trigger("closeAllPanels:before"), this.$pnls.find("." + i.listview).children().removeClass(i.selected).filter("." + i.vertical).removeClass(i.opened);
                    var e = this.$pnls.children("." + i.panel),
                        n = t && t.length ? t : e.first();
                    this.$pnls.children("." + i.panel).not(n).removeClass(i.subopened).removeClass(i.opened).removeClass(i.highest).addClass(i.hidden), this.openPanel(n, !1), this.trigger("closeAllPanels:after")
                },
                togglePanel: function(t) {
                    var e = t.parent();
                    e.hasClass(i.vertical) && this[e.hasClass(i.opened) ? "closePanel" : "openPanel"](t)
                },
                setSelected: function(t) {
                    this.trigger("setSelected:before", t), this.$menu.find("." + i.listview).children("." + i.selected).removeClass(i.selected), t.addClass(i.selected), this.trigger("setSelected:after", t)
                },
                bind: function(t, e) {
                    this.cbck[t] = this.cbck[t] || [], this.cbck[t].push(e)
                },
                trigger: function() {
                    var t = this,
                        e = Array.prototype.slice.call(arguments),
                        i = e.shift();
                    if (this.cbck[i])
                        for (var n = 0, s = this.cbck[i].length; n < s; n++) this.cbck[i][n].apply(t, e)
                },
                matchMedia: function(t, e, i) {
                    var n = {
                        yes: e,
                        no: i
                    };
                    this.mtch[t] = this.mtch[t] || [], this.mtch[t].push(n)
                },
                _initAddons: function() {
                    var e;
                    for (e in this.trigger("initAddons:before"), t[r].addons) t[r].addons[e].add.call(this), t[r].addons[e].add = function() {};
                    for (e in t[r].addons) t[r].addons[e].setup.call(this);
                    this.trigger("initAddons:after")
                },
                _initExtensions: function() {
                    this.trigger("initExtensions:before");
                    var t = this;
                    for (var e in this.opts.extensions.constructor === Array && (this.opts.extensions = {
                            all: this.opts.extensions
                        }), this.opts.extensions) this.opts.extensions[e] = this.opts.extensions[e].length ? "mm-" + this.opts.extensions[e].join(" mm-") : "", this.opts.extensions[e] && function(e) {
                        t.matchMedia(e, function() {
                            this.$menu.addClass(this.opts.extensions[e])
                        }, function() {
                            this.$menu.removeClass(this.opts.extensions[e])
                        })
                    }(e);
                    this.trigger("initExtensions:after")
                },
                _initMenu: function() {
                    this.trigger("initMenu:before"), this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
                        t(this).attr("id", i.mm(t(this).attr("id")))
                    })), this.opts.initMenu.call(this, this.$menu, this.$orig), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = t('<div class="' + i.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);
                    var e = [i.menu];
                    this.opts.slidingSubmenus || e.push(i.vertical), this.$menu.addClass(e.join(" ")).parent().addClass(i.wrapper), this.trigger("initMenu:after")
                },
                _initPanels: function(e) {
                    this.trigger("initPanels:before", e), e = e || this.$pnls.children(this.conf.panelNodetype);
                    var n = t(),
                        s = this,
                        o = function(e) {
                            e.filter(this.conf.panelNodetype).each(function() {
                                var e = s._initPanel(t(this));
                                if (e) {
                                    s._initNavbar(e), s._initListview(e), n = n.add(e);
                                    var r = e.children("." + i.listview).children("li").children(s.conf.panelNodeType).add(e.children("." + s.conf.classNames.panel));
                                    r.length && o.call(s, r)
                                }
                            })
                        };
                    o.call(this, e), this.opts.initPanels.call(this, n), this.trigger("initPanels:after", n)
                },
                _initPanel: function(t) {
                    if (this.trigger("initPanel:before", t), t.hasClass(i.panel)) return t;
                    if (this.__refactorClass(t, this.conf.classNames.panel, "panel"), this.__refactorClass(t, this.conf.classNames.nopanel, "nopanel"), this.__refactorClass(t, this.conf.classNames.vertical, "vertical"), this.__refactorClass(t, this.conf.classNames.inset, "inset"), t.filter("." + i.inset).addClass(i.nopanel), t.hasClass(i.nopanel)) return !1;
                    var e = t.hasClass(i.vertical) || !this.opts.slidingSubmenus;
                    t.removeClass(i.vertical);
                    var s = t.attr("id") || this.__getUniqueId();
                    t.removeAttr("id"), t.is("ul, ol") && (t.wrap("<div />"), t = t.parent()), t.addClass(i.panel + " " + i.hidden).attr("id", s);
                    var o = t.parent("li");
                    return e ? t.add(o).addClass(i.vertical) : t.appendTo(this.$pnls), o.length && (o.data(n.child, t), t.data(n.parent, o)), this.trigger("initPanel:after", t), t
                },
                _initNavbar: function(e) {
                    if (this.trigger("initNavbar:before", e), !e.children("." + i.navbar).length) {
                        var s = e.data(n.parent),
                            o = t('<div class="' + i.navbar + '" />'),
                            a = t[r].i18n(this.opts.navbar.title),
                            l = "";
                        if (s && s.length) {
                            if (s.hasClass(i.vertical)) return;
                            if (s.parent().is("." + i.listview)) var c = s.children("a, span").not("." + i.next);
                            else c = s.closest("." + i.panel).find('a[href="#' + e.attr("id") + '"]');
                            var h = (s = (c = c.first()).closest("." + i.panel)).attr("id");
                            switch (a = c.text(), this.opts.navbar.titleLink) {
                                case "anchor":
                                    l = c.attr("href");
                                    break;
                                case "parent":
                                    l = "#" + h
                            }
                            o.append('<a class="' + i.btn + " " + i.prev + '" href="#' + h + '" />')
                        } else if (!this.opts.navbar.title) return;
                        this.opts.navbar.add && e.addClass(i.hasnavbar), o.append('<a class="' + i.title + '"' + (l.length ? ' href="' + l + '"' : "") + ">" + a + "</a>").prependTo(e), this.trigger("initNavbar:after", e)
                    }
                },
                _initListview: function(e) {
                    this.trigger("initListview:before", e);
                    var s = this.__childAddBack(e, "ul, ol");
                    this.__refactorClass(s, this.conf.classNames.nolistview, "nolistview"), s.filter("." + this.conf.classNames.inset).addClass(i.nolistview);
                    var o = s.not("." + i.nolistview).addClass(i.listview).children();
                    this.__refactorClass(o, this.conf.classNames.selected, "selected"), this.__refactorClass(o, this.conf.classNames.divider, "divider"), this.__refactorClass(o, this.conf.classNames.spacer, "spacer");
                    var r = e.data(n.parent);
                    if (r && r.parent().is("." + i.listview) && !r.children("." + i.next).length) {
                        var a = r.children("a, span").first(),
                            l = t('<a class="' + i.next + '" href="#' + e.attr("id") + '" />').insertBefore(a);
                        a.is("span") && l.addClass(i.fullsubopen)
                    }
                    this.trigger("initListview:after", e)
                },
                _initOpened: function() {
                    this.trigger("initOpened:before");
                    var t = this.$pnls.find("." + i.listview).children("." + i.selected).removeClass(i.selected).last().addClass(i.selected),
                        e = t.length ? t.closest("." + i.panel) : this.$pnls.children("." + i.panel).first();
                    this.openPanel(e, !1), this.trigger("initOpened:after")
                },
                _initAnchors: function() {
                    var e = this;
                    o.$body.on(s.click + "-oncanvas", "a[href]", function(n) {
                        var s = t(this),
                            o = !1,
                            a = e.$menu.find(s).length;
                        for (var l in t[r].addons)
                            if (t[r].addons[l].clickAnchor.call(e, s, a)) {
                                o = !0;
                                break
                            } var c = s.attr("href");
                        if (!o && a && c.length > 1 && "#" == c.slice(0, 1)) try {
                            var h = t(c, e.$menu);
                            h.is("." + i.panel) && (o = !0, e[s.parent().hasClass(i.vertical) ? "togglePanel" : "openPanel"](h))
                        } catch (u) {}
                        if (o && n.preventDefault(), !o && a && s.is("." + i.listview + " > li > a") && !s.is('[rel="external"]') && !s.is('[target="_blank"]')) {
                            e.__valueOrFn(e.opts.onClick.setSelected, s) && e.setSelected(t(n.target).parent());
                            var d = e.__valueOrFn(e.opts.onClick.preventDefault, s, "#" == c.slice(0, 1));
                            d && n.preventDefault(), e.__valueOrFn(e.opts.onClick.close, s, d) && e.opts.offCanvas && "function" == typeof e.close && e.close()
                        }
                    })
                },
                _initMatchMedia: function() {
                    var t = this;
                    this._fireMatchMedia(), o.$wndw.on(s.resize, function() {
                        t._fireMatchMedia()
                    })
                },
                _fireMatchMedia: function() {
                    for (var t in this.mtch)
                        for (var e = window.matchMedia && window.matchMedia(t).matches ? "yes" : "no", i = 0; i < this.mtch[t].length; i++) this.mtch[t][i][e].call(this)
                },
                _getOriginalMenuId: function() {
                    var t = this.$menu.attr("id");
                    return this.conf.clone && t && t.length && (t = i.umm(t)), t
                },
                __api: function() {
                    var e = this,
                        i = {};
                    return t.each(this._api, function() {
                        var t = this;
                        i[t] = function() {
                            var n = e[t].apply(e, arguments);
                            return void 0 === n ? i : n
                        }
                    }), i
                },
                __valueOrFn: function(t, e, i) {
                    return "function" == typeof t ? t.call(e[0]) : void 0 === t && void 0 !== i ? i : t
                },
                __refactorClass: function(t, e, n) {
                    return t.filter("." + e).removeClass(e).addClass(i[n])
                },
                __findAddBack: function(t, e) {
                    return t.find(e).add(t.filter(e))
                },
                __childAddBack: function(t, e) {
                    return t.children(e).add(t.filter(e))
                },
                __filterListItems: function(t) {
                    return t.not("." + i.divider).not("." + i.hidden)
                },
                __filterListItemAnchors: function(t) {
                    return this.__filterListItems(t).children("a").not("." + i.next)
                },
                __transitionend: function(t, e, i) {
                    var n = !1,
                        o = function(i) {
                            void 0 !== i && i.target != t[0] || (n || (t.off(s.transitionend), t.off(s.webkitTransitionEnd), e.call(t[0])), n = !0)
                        };
                    t.on(s.transitionend, o), t.on(s.webkitTransitionEnd, o), setTimeout(o, 1.1 * i)
                },
                __getUniqueId: function() {
                    return i.mm(t[r].uniqueId++)
                }
            }, t.fn[r] = function(i, n) {
                e(), i = t.extend(!0, {}, t[r].defaults, i), n = t.extend(!0, {}, t[r].configuration, n);
                var s = t();
                return this.each(function() {
                    var e = t(this);
                    if (!e.data(r)) {
                        var o = new t[r](e, i, n);
                        o.$menu.data(r, o.__api()), s = s.add(o.$menu)
                    }
                }), s
            }, t[r].i18n = function() {
                var e = {};
                return function(i) {
                    switch (typeof i) {
                        case "object":
                            return t.extend(e, i), e;
                        case "string":
                            return e[i] || i;
                        case "undefined":
                        default:
                            return e
                    }
                }
            }(), t[r].support = {
                touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
                csstransitions: "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransitions || Modernizr.csstransitions,
                csstransforms: "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms || Modernizr.csstransforms,
                csstransforms3d: "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms3d || Modernizr.csstransforms3d
            })
        }(t), a = "offCanvas", (e = t)[r = "mmenu"].addons[a] = {
            setup: function() {
                if (this.opts[a]) {
                    var t = this,
                        n = this.opts[a],
                        s = this.conf[a];
                    o = e[r].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), "object" != typeof n && (n = {}), "top" != n.position && "bottom" != n.position || (n.zposition = "front"), n = this.opts[a] = e.extend(!0, {}, e[r].defaults[a], n), "string" != typeof s.pageSelector && (s.pageSelector = "> " + s.pageNodetype), this.vars.opened = !1;
                    var l = [i.offcanvas];
                    "left" != n.position && l.push(i.mm(n.position)), "back" != n.zposition && l.push(i.mm(n.zposition)), e[r].support.csstransforms || l.push(i["no-csstransforms"]), e[r].support.csstransforms3d || l.push(i["no-csstransforms3d"]), this.bind("initMenu:after", function() {
                        var t = this;
                        this.setPage(o.$page), this._initBlocker(), this["_initWindow_" + a](), this.$menu.addClass(l.join(" ")).parent("." + i.wrapper).removeClass(i.wrapper), this.$menu[s.menuInsertMethod](s.menuInsertSelector);
                        var e = window.location.hash;
                        if (e) {
                            var n = this._getOriginalMenuId();
                            n && n == e.slice(1) && setTimeout(function() {
                                t.open()
                            }, 1e3)
                        }
                    }), this.bind("initExtensions:after", function() {
                        for (var e = [i.mm("widescreen"), i.mm("iconbar")], n = 0; n < e.length; n++)
                            for (var s in this.opts.extensions)
                                if (this.opts.extensions[s].indexOf(e[n]) > -1) {
                                    ! function(i, n) {
                                        t.matchMedia(i, function() {
                                            o.$html.addClass(e[n])
                                        }, function() {
                                            o.$html.removeClass(e[n])
                                        })
                                    }(s, n);
                                    break
                                }
                    }), this.bind("open:start:sr-aria", function() {
                        this.__sr_aria(this.$menu, "hidden", !1)
                    }), this.bind("close:finish:sr-aria", function() {
                        this.__sr_aria(this.$menu, "hidden", !0)
                    }), this.bind("initMenu:after:sr-aria", function() {
                        this.__sr_aria(this.$menu, "hidden", !0)
                    })
                }
            },
            add: function() {
                i = e[r]._c, n = e[r]._d, s = e[r]._e, i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), n.add("style")
            },
            clickAnchor: function(t, e) {
                var n = this;
                if (this.opts[a]) {
                    var s = this._getOriginalMenuId();
                    if (s && t.is('[href="#' + s + '"]')) {
                        if (e) return !0;
                        var r = t.closest("." + i.menu);
                        if (r.length) {
                            var l = r.data("mmenu");
                            if (l && l.close) return l.close(), n.__transitionend(r, function() {
                                n.open()
                            }, n.conf.transitionDuration), !0
                        }
                        return this.open(), !0
                    }
                    if (o.$page) return (s = o.$page.first().attr("id")) && t.is('[href="#' + s + '"]') ? (this.close(), !0) : void 0
                }
            }
        }, e[r].defaults[a] = {
            position: "left",
            zposition: "back",
            blockUI: !0,
            moveBackground: !0
        }, e[r].configuration[a] = {
            pageNodetype: "div",
            pageSelector: null,
            noPageSelector: [],
            wrapPageIfNeeded: !0,
            menuInsertMethod: "prependTo",
            menuInsertSelector: "body"
        }, e[r].prototype.open = function() {
            if (this.trigger("open:before"), !this.vars.opened) {
                var t = this;
                this._openSetup(), setTimeout(function() {
                    t._openFinish()
                }, this.conf.openingInterval), this.trigger("open:after")
            }
        }, e[r].prototype._openSetup = function() {
            var t = this,
                r = this.opts[a];
            this.closeAllOthers(), o.$page.each(function() {
                e(this).data(n.style, e(this).attr("style") || "")
            }), o.$wndw.trigger(s.resize + "-" + a, [!0]);
            var l = [i.opened];
            r.blockUI && l.push(i.blocking), "modal" == r.blockUI && l.push(i.modal), r.moveBackground && l.push(i.background), "left" != r.position && l.push(i.mm(this.opts[a].position)), "back" != r.zposition && l.push(i.mm(this.opts[a].zposition)), o.$html.addClass(l.join(" ")), setTimeout(function() {
                t.vars.opened = !0
            }, this.conf.openingInterval), this.$menu.addClass(i.opened)
        }, e[r].prototype._openFinish = function() {
            var t = this;
            this.__transitionend(o.$page.first(), function() {
                t.trigger("open:finish")
            }, this.conf.transitionDuration), this.trigger("open:start"), o.$html.addClass(i.opening)
        }, e[r].prototype.close = function() {
            if (this.trigger("close:before"), this.vars.opened) {
                var t = this;
                this.__transitionend(o.$page.first(), function() {
                    t.$menu.removeClass(i.opened);
                    var s = [i.opened, i.blocking, i.modal, i.background, i.mm(t.opts[a].position), i.mm(t.opts[a].zposition)];
                    o.$html.removeClass(s.join(" ")), o.$page.each(function() {
                        e(this).attr("style", e(this).data(n.style))
                    }), t.vars.opened = !1, t.trigger("close:finish")
                }, this.conf.transitionDuration), this.trigger("close:start"), o.$html.removeClass(i.opening), this.trigger("close:after")
            }
        }, e[r].prototype.closeAllOthers = function() {
            o.$body.find("." + i.menu + "." + i.offcanvas).not(this.$menu).each(function() {
                var t = e(this).data(r);
                t && t.close && t.close()
            })
        }, e[r].prototype.setPage = function(t) {
            this.trigger("setPage:before", t);
            var n = this,
                s = this.conf[a];
            t && t.length || (t = o.$body.find(s.pageSelector), s.noPageSelector.length && (t = t.not(s.noPageSelector.join(", "))), t.length > 1 && s.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[a].pageNodetype + " />").parent())), t.each(function() {
                e(this).attr("id", e(this).attr("id") || n.__getUniqueId())
            }), t.addClass(i.page + " " + i.slideout), o.$page = t, this.trigger("setPage:after", t)
        }, e[r].prototype["_initWindow_" + a] = function() {
            o.$wndw.off(s.keydown + "-" + a).on(s.keydown + "-" + a, function(t) {
                if (o.$html.hasClass(i.opened) && 9 == t.keyCode) return t.preventDefault(), !1
            });
            var t = 0;
            o.$wndw.off(s.resize + "-" + a).on(s.resize + "-" + a, function(e, n) {
                if (1 == o.$page.length && (n || o.$html.hasClass(i.opened))) {
                    var s = o.$wndw.height();
                    (n || s != t) && (t = s, o.$page.css("minHeight", s))
                }
            })
        }, e[r].prototype._initBlocker = function() {
            var t = this;
            this.opts[a].blockUI && (o.$blck || (o.$blck = e('<div id="' + i.blocker + '" class="' + i.slideout + '" />')), o.$blck.appendTo(o.$body).off(s.touchstart + "-" + a + " " + s.touchmove + "-" + a).on(s.touchstart + "-" + a + " " + s.touchmove + "-" + a, function(t) {
                t.preventDefault(), t.stopPropagation(), o.$blck.trigger(s.mousedown + "-" + a)
            }).off(s.mousedown + "-" + a).on(s.mousedown + "-" + a, function(e) {
                e.preventDefault(), o.$html.hasClass(i.modal) || (t.closeAllOthers(), t.close())
            }))
        },
        /*
         * jQuery mmenu scrollBugFix add-on
         * mmenu.frebsite.nl
         *
         * Copyright (c) Fred Heusschen
         */
        function(t) {
            var e, i, n, s = "mmenu",
                o = "scrollBugFix";
            t[s].addons[o] = {
                setup: function() {
                    var i = this.opts[o];
                    this.conf[o], n = t[s].glbl, t[s].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof i && (i = {
                        fix: i
                    }), "object" != typeof i && (i = {}), (i = this.opts[o] = t.extend(!0, {}, t[s].defaults[o], i)).fix && (this.bind("open:start", function() {
                        this.$pnls.children("." + e.opened).scrollTop(0)
                    }), this.bind("initMenu:after", function() {
                        this["_initWindow_" + o]()
                    })))
                },
                add: function() {
                    e = t[s]._c, t[s]._d, i = t[s]._e
                },
                clickAnchor: function() {}
            }, t[s].defaults[o] = {
                fix: !0
            }, t[s].prototype["_initWindow_" + o] = function() {
                var s = this;
                n.$docu.off(i.touchmove + "-" + o).on(i.touchmove + "-" + o, function(t) {
                    n.$html.hasClass(e.opened) && t.preventDefault()
                });
                var r = !1;
                n.$body.off(i.touchstart + "-" + o).on(i.touchstart + "-" + o, "." + e.panels + "> ." + e.panel, function(t) {
                    n.$html.hasClass(e.opened) && (r || (r = !0, 0 === t.currentTarget.scrollTop ? t.currentTarget.scrollTop = 1 : t.currentTarget.scrollHeight === t.currentTarget.scrollTop + t.currentTarget.offsetHeight && (t.currentTarget.scrollTop -= 1), r = !1))
                }).off(i.touchmove + "-" + o).on(i.touchmove + "-" + o, "." + e.panels + "> ." + e.panel, function(i) {
                    n.$html.hasClass(e.opened) && t(this)[0].scrollHeight > t(this).innerHeight() && i.stopPropagation()
                }), n.$wndw.off(i.orientationchange + "-" + o).on(i.orientationchange + "-" + o, function() {
                    s.$pnls.children("." + e.opened).scrollTop(0).css({
                        "-webkit-overflow-scrolling": "auto"
                    }).css({
                        "-webkit-overflow-scrolling": "touch"
                    })
                })
            }
        }(t),
        /*
         * jQuery mmenu screenReader add-on
         * mmenu.frebsite.nl
         *
         * Copyright (c) Fred Heusschen
         */
        function(t) {
            var e, i, n = "mmenu",
                s = "screenReader";
            t[n].addons[s] = {
                setup: function() {
                    var o = this,
                        r = this.opts[s],
                        a = this.conf[s];
                    t[n].glbl, "boolean" == typeof r && (r = {
                        aria: r,
                        text: r
                    }), "object" != typeof r && (r = {}), (r = this.opts[s] = t.extend(!0, {}, t[n].defaults[s], r)).aria && (this.bind("initAddons:after", function() {
                        this.bind("initMenu:after", function() {
                            this.trigger("initMenu:after:sr-aria")
                        }), this.bind("initNavbar:after", function() {
                            this.trigger("initNavbar:after:sr-aria", arguments[0])
                        }), this.bind("openPanel:start", function() {
                            this.trigger("openPanel:start:sr-aria", arguments[0])
                        }), this.bind("close:start", function() {
                            this.trigger("close:start:sr-aria")
                        }), this.bind("close:finish", function() {
                            this.trigger("close:finish:sr-aria")
                        }), this.bind("open:start", function() {
                            this.trigger("open:start:sr-aria")
                        }), this.bind("open:finish", function() {
                            this.trigger("open:finish:sr-aria")
                        })
                    }), this.bind("updateListview", function() {
                        this.$pnls.find("." + e.listview).children().each(function() {
                            o.__sr_aria(t(this), "hidden", t(this).is("." + e.hidden))
                        })
                    }), this.bind("openPanel:start", function(t) {
                        var i = this.$menu.find("." + e.panel).not(t).not(t.parents("." + e.panel)),
                            n = t.add(t.find("." + e.vertical + "." + e.opened).children("." + e.panel));
                        this.__sr_aria(i, "hidden", !0), this.__sr_aria(n, "hidden", !1)
                    }), this.bind("closePanel", function(t) {
                        this.__sr_aria(t, "hidden", !0)
                    }), this.bind("initPanels:after", function(i) {
                        var n = i.find("." + e.prev + ", ." + e.next).each(function() {
                            o.__sr_aria(t(this), "owns", t(this).attr("href").replace("#", ""))
                        });
                        this.__sr_aria(n, "haspopup", !0)
                    }), this.bind("initNavbar:after", function(t) {
                        var i = t.children("." + e.navbar);
                        this.__sr_aria(i, "hidden", !t.hasClass(e.hasnavbar))
                    }), r.text && (this.bind("initlistview:after", function(t) {
                        var i = t.find("." + e.listview).find("." + e.fullsubopen).parent().children("span");
                        this.__sr_aria(i, "hidden", !0)
                    }), "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function(t) {
                        var i = t.children("." + e.navbar),
                            n = !!i.children("." + e.prev).length;
                        this.__sr_aria(i.children("." + e.title), "hidden", n)
                    }))), r.text && (this.bind("initAddons:after", function() {
                        this.bind("setPage:after", function() {
                            this.trigger("setPage:after:sr-text", arguments[0])
                        })
                    }), this.bind("initNavbar:after", function(i) {
                        var s = i.children("." + e.navbar),
                            o = s.children("." + e.title).text(),
                            r = t[n].i18n(a.text.closeSubmenu);
                        o && (r += " (" + o + ")"), s.children("." + e.prev).html(this.__sr_text(r))
                    }), this.bind("initListview:after", function(s) {
                        var r = s.data(i.parent);
                        if (r && r.length) {
                            var l = r.children("." + e.next),
                                c = l.nextAll("span, a").first().text(),
                                h = t[n].i18n(a.text[l.parent().is("." + e.vertical) ? "toggleSubmenu" : "openSubmenu"]);
                            c && (h += " (" + c + ")"), l.html(o.__sr_text(h))
                        }
                    }))
                },
                add: function() {
                    e = t[n]._c, i = t[n]._d, t[n]._e, e.add("sronly")
                },
                clickAnchor: function() {}
            }, t[n].defaults[s] = {
                aria: !0,
                text: !0
            }, t[n].configuration[s] = {
                text: {
                    closeMenu: "Close menu",
                    closeSubmenu: "Close submenu",
                    openSubmenu: "Open submenu",
                    toggleSubmenu: "Toggle submenu"
                }
            }, t[n].prototype.__sr_aria = function(t, e, i) {
                t.prop("aria-" + e, i)[i ? "attr" : "removeAttr"]("aria-" + e, i)
            }, t[n].prototype.__sr_text = function(t) {
                return '<span class="' + e.sronly + '">' + t + "</span>"
            }
        }(t),
        /*
         * jQuery mmenu autoHeight add-on
         * mmenu.frebsite.nl
         *
         * Copyright (c) Fred Heusschen
         */
        function(t) {
            var e, i, n = "mmenu",
                s = "autoHeight";
            t[n].addons[s] = {
                setup: function() {
                    var i = this.opts[s];
                    if (this.conf[s], t[n].glbl, "boolean" == typeof i && i && (i = {
                            height: "auto"
                        }), "string" == typeof i && (i = {
                            height: i
                        }), "object" != typeof i && (i = {}), "auto" == (i = this.opts[s] = t.extend(!0, {}, t[n].defaults[s], i)).height || "highest" == i.height) {
                        this.bind("initMenu:after", function() {
                            this.$menu.addClass(e.autoheight)
                        });
                        var o = function(n) {
                            if (!this.opts.offCanvas || this.vars.opened) {
                                var s = Math.max(parseInt(this.$pnls.css("top"), 10), 0) || 0,
                                    o = Math.max(parseInt(this.$pnls.css("bottom"), 10), 0) || 0,
                                    r = 0;
                                this.$menu.addClass(e.measureheight), "auto" == i.height ? ((n = n || this.$pnls.children("." + e.opened)).is("." + e.vertical) && (n = n.parents("." + e.panel).not("." + e.vertical)), n.length || (n = this.$pnls.children("." + e.panel)), r = n.first().outerHeight()) : "highest" == i.height && this.$pnls.children().each(function() {
                                    var i = t(this);
                                    i.is("." + e.vertical) && (i = i.parents("." + e.panel).not("." + e.vertical).first()), r = Math.max(r, i.outerHeight())
                                }), this.$menu.height(r + s + o).removeClass(e.measureheight)
                            }
                        };
                        this.opts.offCanvas && this.bind("open:start", o), "highest" == i.height && this.bind("initPanels:after", o), "auto" == i.height && (this.bind("updateListview", o), this.bind("openPanel:start", o), this.bind("closePanel", o))
                    }
                },
                add: function() {
                    e = t[n]._c, t[n]._d, i = t[n]._e, e.add("autoheight measureheight"), i.add("resize")
                },
                clickAnchor: function() {}
            }, t[n].defaults[s] = {
                height: "default"
            }
        }(t),
        /*
         * jQuery mmenu counters add-on
         * mmenu.frebsite.nl
         *
         * Copyright (c) Fred Heusschen
         */
        function(t) {
            var e, i, n = "mmenu",
                s = "counters";
            t[n].addons[s] = {
                setup: function() {
                    var o = this,
                        r = this.opts[s];
                    if (this.conf[s], t[n].glbl, "boolean" == typeof r && (r = {
                            add: r,
                            update: r
                        }), "object" != typeof r && (r = {}), r = this.opts[s] = t.extend(!0, {}, t[n].defaults[s], r), this.bind("initListview:after", function(e) {
                            this.__refactorClass(t("em", e), this.conf.classNames[s].counter, "counter")
                        }), r.add && this.bind("initListview:after", function(n) {
                            var s;
                            switch (r.addTo) {
                                case "panels":
                                    s = n;
                                    break;
                                default:
                                    s = n.filter(r.addTo)
                            }
                            s.each(function() {
                                var n = t(this).data(i.parent);
                                n && (n.children("em." + e.counter).length || n.prepend(t('<em class="' + e.counter + '" />')))
                            })
                        }), r.update) {
                        var a = function(n) {
                            (n = n || this.$pnls.children("." + e.panel)).each(function() {
                                var n = t(this),
                                    s = n.data(i.parent);
                                if (s) {
                                    var r = s.children("em." + e.counter);
                                    r.length && ((n = n.children("." + e.listview)).length && r.html(o.__filterListItems(n.children()).length))
                                }
                            })
                        };
                        this.bind("initListview:after", a), this.bind("updateListview", a)
                    }
                },
                add: function() {
                    e = t[n]._c, i = t[n]._d, t[n]._e, e.add("counter search noresultsmsg")
                },
                clickAnchor: function() {}
            }, t[n].defaults[s] = {
                add: !1,
                addTo: "panels",
                count: !1
            }, t[n].configuration.classNames[s] = {
                counter: "Counter"
            }
        }(t),
        /*

         * jQuery mmenu fixedElements add-on
         * mmenu.frebsite.nl
         *
         * Copyright (c) Fred Heusschen
         */
        function(t) {
            var e, i, n = "mmenu",
                s = "fixedElements";
            t[n].addons[s] = {
                setup: function() {
                    if (this.opts.offCanvas) {
                        var o = (this.opts[s], this.conf[s]);
                        i = t[n].glbl;
                        var r = function(n) {
                            var r = this.conf.classNames[s].fixed,
                                a = n.find("." + r);
                            this.__refactorClass(a, r, "slideout"), a[o.elemInsertMethod](o.elemInsertSelector);
                            var l = this.conf.classNames[s].sticky,
                                c = n.find("." + l);
                            this.__refactorClass(c, l, "sticky"), (c = n.find("." + e.sticky)).length && (this.bind("open:before", function() {
                                var e = i.$wndw.scrollTop() + o.sticky.offset;
                                c.each(function() {
                                    t(this).css("top", parseInt(t(this).css("top"), 10) + e)
                                })
                            }), this.bind("close:finish", function() {
                                c.css("top", "")
                            }))
                        };
                        this.bind("setPage:after", r)
                    }
                },
                add: function() {
                    e = t[n]._c, t[n]._d, t[n]._e, e.add("sticky")
                },
                clickAnchor: function() {}
            }, t[n].configuration[s] = {
                sticky: {
                    offset: 0
                },
                elemInsertMethod: "appendTo",
                elemInsertSelector: "body"
            }, t[n].configuration.classNames[s] = {
                fixed: "Fixed",
                sticky: "Sticky"
            }
        }(t),
        /*
         
         * jQuery mmenu lazySubmenus add-on
         * mmenu.frebsite.nl
         *
         * Copyright (c) Fred Heusschen
         */
        function(t) {
            var e, i, n = "mmenu",
                s = "lazySubmenus";
            t[n].addons[s] = {
                setup: function() {
                    var i = this.opts[s];
                    this.conf[s], t[n].glbl, "boolean" == typeof i && (i = {
                        load: i
                    }), "object" != typeof i && (i = {}), (i = this.opts[s] = t.extend(!0, {}, t[n].defaults[s], i)).load && (this.bind("initMenu:after", function() {
                        this.$pnls.find("li").children(this.conf.panelNodetype).not("." + e.inset).not("." + e.nolistview).not("." + e.nopanel).addClass(e.lazysubmenu + " " + e.nolistview + " " + e.nopanel)
                    }), this.bind("initPanels:before", function(t) {
                        t = t || this.$pnls.children(this.conf.panelNodetype), this.__findAddBack(t, "." + e.lazysubmenu).not("." + e.lazysubmenu + " ." + e.lazysubmenu).removeClass(e.lazysubmenu + " " + e.nolistview + " " + e.nopanel)
                    }), this.bind("initOpened:before", function() {
                        var t = this.$pnls.find("." + this.conf.classNames.selected).parents("." + e.lazysubmenu);
                        t.length && (t.removeClass(e.lazysubmenu + " " + e.nolistview + " " + e.nopanel), this.initPanels(t.last()))
                    }), this.bind("openPanel:before", function(t) {
                        var i = this.__findAddBack(t, "." + e.lazysubmenu).not("." + e.lazysubmenu + " ." + e.lazysubmenu);
                        i.length && this.initPanels(i)
                    }))
                },
                add: function() {
                    e = t[n]._c, i = t[n]._d, t[n]._e, e.add("lazysubmenu"), i.add("lazysubmenu")
                },
                clickAnchor: function() {}
            }, t[n].defaults[s] = {
                load: !1
            }, t[n].configuration[s] = {}
        }(t),
        /*
         * jQuery mmenu navbar add-on
         * mmenu.frebsite.nl
         *
         * Copyright (c) Fred Heusschen
         */
        function(t) {
            var e, i = "mmenu",
                n = "navbars";
            t[i].addons[n] = {
                setup: function() {
                    var s = this,
                        o = this.opts[n],
                        r = this.conf[n];
                    if (t[i].glbl, void 0 !== o) {
                        o instanceof Array || (o = [o]);
                        var a = {},
                            l = {};
                        o.length && (t.each(o, function(c) {
                            var h = o[c];
                            "boolean" == typeof h && h && (h = {}), "object" != typeof h && (h = {}), "undefined" == typeof h.content && (h.content = ["prev", "title"]), h.content instanceof Array || (h.content = [h.content]), h = t.extend(!0, {}, s.opts.navbar, h);
                            var d = t('<div class="' + e.navbar + '" />'),
                                u = h.height;
                            "number" != typeof u && (u = 1), u = Math.min(4, Math.max(1, u)), d.addClass(e.navbar + "-size-" + u);
                            var f = h.position;
                            "bottom" != f && (f = "top"), a[f] || (a[f] = 0), a[f] += u, l[f] || (l[f] = t('<div class="' + e.navbars + "-" + f + '" />')), l[f].append(d);
                            for (var p = 0, m = 0, g = h.content.length; m < g; m++) {
                                var v = t[i].addons[n][h.content[m]] || !1;
                                v ? p += v.call(s, d, h, r) : ((v = h.content[m]) instanceof t || (v = t(h.content[m])), d.append(v))
                            }(p += Math.ceil(d.children().not("." + e.btn).length / u)) > 1 && d.addClass(e.navbar + "-content-" + p), d.children("." + e.btn).length && d.addClass(e.hasbtns)
                        }), this.bind("initMenu:after", function() {
                            for (var t in a) this.$menu.addClass(e.hasnavbar + "-" + t + "-" + a[t]), this.$menu["bottom" == t ? "append" : "prepend"](l[t])
                        }))
                    }
                },
                add: function() {
                    e = t[i]._c, t[i]._d, t[i]._e, e.add("navbars close hasbtns")
                },
                clickAnchor: function() {}
            }, t[i].configuration[n] = {
                breadcrumbSeparator: "/"
            }, t[i].configuration.classNames[n] = {}
        }(t),
        /*

         * jQuery mmenu RTL add-on
         * mmenu.frebsite.nl
         *
         * Copyright (c) Fred Heusschen
         */
        function(t) {
            var e, i, n = "mmenu",
                s = "rtl";
            t[n].addons[s] = {
                setup: function() {
                    var o = this.opts[s];
                    this.conf[s], i = t[n].glbl, "object" != typeof o && (o = {
                        use: o
                    }), "boolean" != typeof(o = this.opts[s] = t.extend(!0, {}, t[n].defaults[s], o)).use && (o.use = "rtl" == (i.$html.attr("dir") || "").toLowerCase()), o.use && this.bind("initMenu:after", function() {
                        this.$menu.addClass(e.rtl)
                    })
                },
                add: function() {
                    e = t[n]._c, t[n]._d, t[n]._e, e.add("rtl")
                },
                clickAnchor: function() {}
            }, t[n].defaults[s] = {
                use: "detect"
            }
        }(t),
        /*

         * jQuery mmenu toggles add-on
         * mmenu.frebsite.nl
         *
         * Copyright (c) Fred Heusschen
         */
        function(t) {
            var e, i = "mmenu",
                n = "toggles";
            t[i].addons[n] = {
                setup: function() {
                    var s = this;
                    this.opts[n], this.conf[n], t[i].glbl, this.bind("initListview:after", function(i) {
                        this.__refactorClass(i.find("input"), this.conf.classNames[n].toggle, "toggle"), this.__refactorClass(i.find("input"), this.conf.classNames[n].check, "check"), i.find("input." + e.toggle + ", input." + e.check).each(function() {
                            var i = t(this),
                                n = i.closest("li"),
                                o = i.hasClass(e.toggle) ? "toggle" : "check",
                                r = i.attr("id") || s.__getUniqueId();
                            n.children('label[for="' + r + '"]').length || (i.attr("id", r), n.prepend(i), t('<label for="' + r + '" class="' + e[o] + '"></label>').insertBefore(n.children("a, span").last()))
                        })
                    })
                },
                add: function() {
                    e = t[i]._c, t[i]._d, t[i]._e, e.add("toggle check")
                },
                clickAnchor: function() {}
            }, t[i].configuration.classNames[n] = {
                toggle: "Toggle",
                check: "Check"
            }
        }(t), !0
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function(t, e) {
    function i(e, i) {
        this.element = t(e), this.wrapperElement = t(), this.toggleElement = t(), this.init(i)
    }
    var n = "plugin_hideShowPassword",
        s = ["show", "innerToggle"],
        o = 32,
        r = 13,
        a = {
            show: "infer",
            innerToggle: !1,
            enable: function() {
                var t = document.body,
                    e = document.createElement("input"),
                    i = !0;
                t || (t = document.createElement("body")), e = t.appendChild(e);
                try {
                    e.setAttribute("type", "text")
                } catch (n) {
                    i = !1
                }
                return t.removeChild(e), i
            }(),
            triggerOnToggle: !1,
            className: "hideShowPassword-field",
            initEvent: "hideShowPasswordInit",
            changeEvent: "passwordVisibilityChange",
            props: {
                autocapitalize: "off",
                autocomplete: "off",
                autocorrect: "off",
                spellcheck: "false"
            },
            toggle: {
                element: '<button type="button">',
                className: "hideShowPassword-toggle",
                touchSupport: "undefined" != typeof Modernizr && Modernizr.touchevents,
                attachToEvent: "click.hideShowPassword",
                attachToTouchEvent: "touchstart.hideShowPassword mousedown.hideShowPassword",
                attachToKeyEvent: "keyup",
                attachToKeyCodes: !0,
                styles: {
                    position: "absolute"
                },
                touchStyles: {
                    pointerEvents: "none"
                },
                position: "infer",
                verticalAlign: "middle",
                offset: 0,
                attr: {
                    role: "button",
                    "aria-label": "Show Password",
                    title: "Show Password",
                    tabIndex: 0
                }
            },
            wrapper: {
                element: "<div>",
                className: "hideShowPassword-wrapper",
                enforceWidth: !0,
                styles: {
                    position: "relative"
                },
                inheritStyles: ["display", "verticalAlign", "marginTop", "marginRight", "marginBottom", "marginLeft"],
                innerElementStyles: {
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0
                }
            },
            states: {
                shown: {
                    className: "hideShowPassword-shown",
                    changeEvent: "passwordShown",
                    props: {
                        type: "text"
                    },
                    toggle: {
                        className: "hideShowPassword-toggle-hide",
                        content: "Hide",
                        attr: {
                            "aria-pressed": "true",
                            title: "Hide Password"
                        }
                    }
                },
                hidden: {
                    className: "hideShowPassword-hidden",
                    changeEvent: "passwordHidden",
                    props: {
                        type: "password"
                    },
                    toggle: {
                        className: "hideShowPassword-toggle-show",
                        content: "Show",
                        attr: {
                            "aria-pressed": "false",
                            title: "Show Password"
                        }
                    }
                }
            }
        };
    i.prototype = {
        init: function(e) {
            this.update(e, a) && (this.element.addClass(this.options.className), this.options.innerToggle && (this.wrapElement(this.options.wrapper), this.initToggle(this.options.toggle), "string" == typeof this.options.innerToggle && (this.toggleElement.hide(), this.element.one(this.options.innerToggle, t.proxy(function() {
                this.toggleElement.show()
            }, this)))), this.element.trigger(this.options.initEvent, [this]))
        },
        update: function(t, e) {
            return this.options = this.prepareOptions(t, e), this.updateElement() && this.element.trigger(this.options.changeEvent, [this]).trigger(this.state().changeEvent, [this]), this.options.enable
        },
        toggle: function(t) {
            return t = t || "toggle", this.update({
                show: t
            })
        },
        prepareOptions: function(e, i) {
            var n, s = e || {},
                a = [];
            if (i = i || this.options, e = t.extend(!0, {}, i, e), s.hasOwnProperty("wrapper") && s.wrapper.hasOwnProperty("inheritStyles") && (e.wrapper.inheritStyles = s.wrapper.inheritStyles), e.enable && ("toggle" === e.show ? e.show = this.isType("hidden", e.states) : "infer" === e.show && (e.show = this.isType("shown", e.states)), "infer" === e.toggle.position && (e.toggle.position = "rtl" === this.element.css("text-direction") ? "left" : "right"), !t.isArray(e.toggle.attachToKeyCodes))) {
                if (!0 === e.toggle.attachToKeyCodes) switch ((n = t(e.toggle.element)).prop("tagName").toLowerCase()) {
                    case "button":
                    case "input":
                        break;
                    case "a":
                        if (n.filter("[href]").length) {
                            a.push(o);
                            break
                        }
                    default:
                        a.push(o, r)
                }
                e.toggle.attachToKeyCodes = a
            }
            return e
        },
        updateElement: function() {
            return !(!this.options.enable || this.isType()) && (this.element.prop(t.extend({}, this.options.props, this.state().props)).addClass(this.state().className).removeClass(this.otherState().className), this.options.triggerOnToggle && this.element.trigger(this.options.triggerOnToggle, [this]), this.updateToggle(), !0)
        },
        isType: function(t, i) {
            return (i = i || this.options.states)[t = t || this.state(e, e, i).props.type] && (t = i[t].props.type), this.element.prop("type") === t
        },
        state: function(t, i, n) {
            return n = n || this.options.states, t === e && (t = this.options.show), "boolean" == typeof t && (t = t ? "shown" : "hidden"), i && (t = "shown" === t ? "hidden" : "shown"), n[t]
        },
        otherState: function(t) {
            return this.state(t, !0)
        },
        wrapElement: function(e) {
            var i, n = e.enforceWidth;
            return this.wrapperElement.length || (i = this.element.outerWidth(), t.each(e.inheritStyles, t.proxy(function(t, i) {
                e.styles[i] = this.element.css(i)
            }, this)), this.element.css(e.innerElementStyles).wrap(t(e.element).addClass(e.className).css(e.styles)), this.wrapperElement = this.element.parent(), !0 === n && (n = this.wrapperElement.outerWidth() !== i && i), !1 !== n && this.wrapperElement.css("width", n)), this.wrapperElement
        },
        initToggle: function(e) {
            return this.toggleElement.length || (this.toggleElement = t(e.element).attr(e.attr).addClass(e.className).css(e.styles).appendTo(this.wrapperElement), this.updateToggle(), this.positionToggle(e.position, e.verticalAlign, e.offset), e.touchSupport ? (this.toggleElement.css(e.touchStyles), this.element.on(e.attachToTouchEvent, t.proxy(this.toggleTouchEvent, this))) : this.toggleElement.on(e.attachToEvent, t.proxy(this.toggleEvent, this)), e.attachToKeyCodes.length && this.toggleElement.on(e.attachToKeyEvent, t.proxy(this.toggleKeyEvent, this))), this.toggleElement
        },
        positionToggle: function(t, e, i) {
            var n = {};
            switch (n[t] = i, e) {
                case "top":
                case "bottom":
                    n[e] = i;
                    break;
                case "middle":
                    n.top = "50%", n.marginTop = this.toggleElement.outerHeight() / -2
            }
            return this.toggleElement.css(n)
        },
        updateToggle: function(t, e) {
            var i, n;
            return this.toggleElement.length && (i = "padding-" + this.options.toggle.position, t = t || this.state().toggle, e = e || this.otherState().toggle, this.toggleElement.attr(t.attr).addClass(t.className).removeClass(e.className).html(t.content), n = this.toggleElement.outerWidth() + 2 * this.options.toggle.offset, this.element.css(i) !== n && this.element.css(i, n)), this.toggleElement
        },
        toggleEvent: function(t) {
            t.preventDefault(), this.toggle()
        },
        toggleKeyEvent: function(e) {
            t.each(this.options.toggle.attachToKeyCodes, t.proxy(function(t, i) {
                if (e.which === i) return this.toggleEvent(e), !1
            }, this))
        },
        toggleTouchEvent: function(t) {
            var e, i, n, s = this.toggleElement.offset().left;
            s && (e = t.pageX || t.originalEvent.pageX, "left" === this.options.toggle.position ? (i = e, n = s += this.toggleElement.outerWidth()) : (i = s, n = e), n >= i && this.toggleEvent(t))
        }
    }, t.fn.hideShowPassword = function() {
        var e = {};
        return t.each(arguments, function(i, n) {
            var o = {};
            if ("object" == typeof n) o = n;
            else {
                if (!s[i]) return !1;
                o[s[i]] = n
            }
            t.extend(!0, e, o)
        }), this.each(function() {
            var s = t(this),
                o = s.data(n);
            o ? o.update(e) : s.data(n, new i(this, e))
        })
    }, t.each({
        show: !0,
        hide: !1,
        toggle: "toggle"
    }, function(e, i) {
        t.fn[e + "Password"] = function(t, e) {
            return this.hideShowPassword(i, t, e)
        }
    })
}),
function(t) {
    t.fn.niceSelect = function(e) {
        function i(e) {
            e.after(t("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var i = e.next(),
                n = e.find("option"),
                s = e.find("option:selected");
            i.find(".current").html(s.data("display") || s.text()), n.each(function() {
                var e = t(this),
                    n = e.data("display");
                i.find("ul").append(t("<li></li>").attr("data-value", e.val()).attr("data-display", n || null).addClass("option" + (e.is(":selected") ? " selected" : "") + (e.is(":disabled") ? " disabled" : "")).html(e.text()))
            })
        }
        if ("string" == typeof e) return "update" == e ? this.each(function() {
            var e = t(this),
                n = t(this).next(".nice-select"),
                s = n.hasClass("open");
            n.length && (n.remove(), i(e), s && e.next().trigger("click"))
        }) : "destroy" == e ? (this.each(function() {
            var e = t(this),
                i = t(this).next(".nice-select");
            i.length && (i.remove(), e.css("display", ""))
        }), 0 == t(".nice-select").length && t(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;
        this.hide(), this.each(function() {
            var e = t(this);
            e.next().hasClass("nice-select") || i(e)
        }), t(document).off(".nice_select"), t(document).on("click.nice_select", ".nice-select", function() {
            var e = t(this);
            t(".nice-select").not(e).removeClass("open"), e.toggleClass("open"), e.hasClass("open") ? (e.find(".option"), e.find(".focus").removeClass("focus"), e.find(".selected").addClass("focus")) : e.focus()
        }), t(document).on("click.nice_select", function(e) {
            0 === t(e.target).closest(".nice-select").length && t(".nice-select").removeClass("open").find(".option")
        }), t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function() {
            var e = t(this),
                i = e.closest(".nice-select");
            i.find(".selected").removeClass("selected"), e.addClass("selected");
            var n = e.data("display") || e.text();
            i.find(".current").text(n), i.prev("select").val(e.data("value")).trigger("change")
        }), t(document).on("keydown.nice_select", ".nice-select", function(e) {
            var i = t(this),
                n = t(i.find(".focus") || i.find(".list .option.selected"));
            if (32 == e.keyCode || 13 == e.keyCode) return i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1;
            if (40 == e.keyCode) {
                if (i.hasClass("open")) {
                    var s = n.nextAll(".option:not(.disabled)").first();
                    s.length > 0 && (i.find(".focus").removeClass("focus"), s.addClass("focus"))
                } else i.trigger("click");
                return !1
            }
            if (38 == e.keyCode) {
                if (i.hasClass("open")) {
                    var o = n.prevAll(".option:not(.disabled)").first();
                    o.length > 0 && (i.find(".focus").removeClass("focus"), o.addClass("focus"))
                } else i.trigger("click");
                return !1
            }
            if (27 == e.keyCode) i.hasClass("open") && i.trigger("click");
            else if (9 == e.keyCode && i.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && t("html").addClass("no-csspointerevents"), this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(t, e) {
        return "f" === t ? Math.round(5 / 9 * (e - 32)) : Math.round(1.8 * e + 32)
    }
    t.extend({
        simpleWeather: function(i) {
            i = t.extend({
                location: "",
                woeid: "",
                unit: "f",
                success: function() {},
                error: function() {}
            }, i);
            var n = new Date,
                s = "https://query.yahooapis.com/v1/public/yql?format=json&rnd=" + n.getFullYear() + n.getMonth() + n.getDay() + n.getHours() + "&diagnostics=true&callback=?&q=";
            if ("" !== i.location) {
                s += 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + (/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/.test(i.location) ? "(" + i.location + ")" : i.location) + '") and u="' + i.unit + '"'
            } else {
                if ("" === i.woeid) return i.error("Could not retrieve weather due to an invalid location."), !1;
                s += "select * from weather.forecast where woeid=" + i.woeid + ' and u="' + i.unit + '"'
            }
            return t.getJSON(encodeURI(s), function(t) {
                if (null !== t && null !== t.query && null !== t.query.results && "Yahoo! Weather Error" !== t.query.results.channel.description) {
                    var n, s = t.query.results.channel,
                        o = {},
                        r = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"],
                        a = "https://s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png";
                    o.title = s.item.title, o.temp = s.item.condition.temp, o.code = s.item.condition.code, o.todayCode = s.item.forecast[0].code, o.currently = s.item.condition.text, o.high = s.item.forecast[0].high, o.low = s.item.forecast[0].low, o.text = s.item.forecast[0].text, o.humidity = s.atmosphere.humidity, o.pressure = s.atmosphere.pressure, o.rising = s.atmosphere.rising, o.visibility = s.atmosphere.visibility, o.sunrise = s.astronomy.sunrise, o.sunset = s.astronomy.sunset, o.description = s.item.description, o.city = s.location.city, o.country = s.location.country, o.region = s.location.region, o.updated = s.item.pubDate, o.link = s.item.link, o.units = {
                        temp: s.units.temperature,
                        distance: s.units.distance,
                        pressure: s.units.pressure,
                        speed: s.units.speed
                    }, o.wind = {
                        chill: s.wind.chill,
                        direction: r[Math.round(s.wind.direction / 22.5)],
                        speed: s.wind.speed
                    }, s.item.condition.temp < 80 && s.atmosphere.humidity < 40 ? o.heatindex = 2.04901523 * s.item.condition.temp - 42.379 + 10.14333127 * s.atmosphere.humidity - .22475541 * s.item.condition.temp * s.atmosphere.humidity - 6.83783 * Math.pow(10, -3) * Math.pow(s.item.condition.temp, 2) - 5.481717 * Math.pow(10, -2) * Math.pow(s.atmosphere.humidity, 2) + 1.22874 * Math.pow(10, -3) * Math.pow(s.item.condition.temp, 2) * s.atmosphere.humidity + 8.5282 * Math.pow(10, -4) * s.item.condition.temp * Math.pow(s.atmosphere.humidity, 2) - 1.99 * Math.pow(10, -6) * Math.pow(s.item.condition.temp, 2) * Math.pow(s.atmosphere.humidity, 2) : o.heatindex = s.item.condition.temp, "3200" == s.item.condition.code ? (o.thumbnail = a, o.image = a) : (o.thumbnail = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + s.item.condition.code + "ds.png", o.image = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + s.item.condition.code + "d.png"), o.alt = {
                        temp: e(i.unit, s.item.condition.temp),
                        high: e(i.unit, s.item.forecast[0].high),
                        low: e(i.unit, s.item.forecast[0].low)
                    }, "f" === i.unit ? o.alt.unit = "c" : o.alt.unit = "f", o.forecast = [];
                    for (var l = 0; l < s.item.forecast.length; l++)(n = s.item.forecast[l]).alt = {
                        high: e(i.unit, s.item.forecast[l].high),
                        low: e(i.unit, s.item.forecast[l].low)
                    }, "3200" == s.item.forecast[l].code ? (n.thumbnail = a, n.image = a) : (n.thumbnail = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + s.item.forecast[l].code + "ds.png", n.image = "https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/" + s.item.forecast[l].code + "d.png"), o.forecast.push(n);
                    i.success(o)
                } else i.error("There was a problem retrieving the latest weather information.")
            }), this
        }
    })
}(jQuery),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function() {
    "use strict";

    function t() {
        return yn.apply(null, arguments)
    }

    function e(t) {
        yn = t
    }

    function i(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function n(t) {
        return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function s(t) {
        var e;
        for (e in t) return !1;
        return !0
    }

    function o(t) {
        return void 0 === t
    }

    function r(t) {
        return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
    }

    function a(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function l(t, e) {
        var i, n = [];
        for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
        return n
    }

    function c(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function h(t, e) {
        for (var i in e) c(e, i) && (t[i] = e[i]);
        return c(e, "toString") && (t.toString = e.toString), c(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function d(t, e, i, n) {
        return _e(t, e, i, n, !0).utc()
    }

    function u() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }

    function f(t) {
        return null == t._pf && (t._pf = u()), t._pf
    }

    function p(t) {
        if (null == t._isValid) {
            var e = f(t),
                i = bn.call(e.parsedDateParts, function(t) {
                    return null != t
                }),
                n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
            if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
            t._isValid = n
        }
        return t._isValid
    }

    function m(t) {
        var e = d(NaN);
        return null != t ? h(f(e), t) : f(e).userInvalidated = !0, e
    }

    function g(t, e) {
        var i, n, s;
        if (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), o(e._i) || (t._i = e._i), o(e._f) || (t._f = e._f), o(e._l) || (t._l = e._l), o(e._strict) || (t._strict = e._strict), o(e._tzm) || (t._tzm = e._tzm), o(e._isUTC) || (t._isUTC = e._isUTC), o(e._offset) || (t._offset = e._offset), o(e._pf) || (t._pf = f(e)), o(e._locale) || (t._locale = e._locale), wn.length > 0)
            for (i = 0; i < wn.length; i++) o(s = e[n = wn[i]]) || (t[n] = s);
        return t
    }

    function v(e) {
        g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === xn && (xn = !0, t.updateOffset(this), xn = !1)
    }

    function _(t) {
        return t instanceof v || null != t && null != t._isAMomentObject
    }

    function y(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function b(t) {
        var e = +t,
            i = 0;
        return 0 !== e && isFinite(e) && (i = y(e)), i
    }

    function w(t, e, i) {
        var n, s = Math.min(t.length, e.length),
            o = Math.abs(t.length - e.length),
            r = 0;
        for (n = 0; n < s; n++)(i && t[n] !== e[n] || !i && b(t[n]) !== b(e[n])) && r++;
        return r + o
    }

    function x(e) {
        !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function k(e, i) {
        var n = !0;
        return h(function() {
            if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
                for (var s, o = [], r = 0; r < arguments.length; r++) {
                    if (s = "", "object" == typeof arguments[r]) {
                        for (var a in s += "\n[" + r + "] ", arguments[0]) s += a + ": " + arguments[0][a] + ", ";
                        s = s.slice(0, -2)
                    } else s = arguments[r];
                    o.push(s)
                }
                x(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), n = !1
            }
            return i.apply(this, arguments)
        }, i)
    }

    function C(e, i) {
        null != t.deprecationHandler && t.deprecationHandler(e, i), kn[e] || (x(i), kn[e] = !0)
    }

    function S(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function T(t) {
        var e, i;
        for (i in t) S(e = t[i]) ? this[i] = e : this["_" + i] = e;
        this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function D(t, e) {
        var i, s = h({}, t);
        for (i in e) c(e, i) && (n(t[i]) && n(e[i]) ? (s[i] = {}, h(s[i], t[i]), h(s[i], e[i])) : null != e[i] ? s[i] = e[i] : delete s[i]);
        for (i in t) c(t, i) && !c(e, i) && n(t[i]) && (s[i] = h({}, s[i]));
        return s
    }

    function E(t) {
        null != t && this.set(t)
    }

    function M(t, e, i) {
        var n = this._calendar[t] || this._calendar.sameElse;
        return S(n) ? n.call(e, i) : n
    }

    function I(t) {
        var e = this._longDateFormat[t],
            i = this._longDateFormat[t.toUpperCase()];
        return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }

    function P() {
        return this._invalidDate
    }

    function A(t) {
        return this._ordinal.replace("%d", t)
    }

    function O(t, e, i, n) {
        var s = this._relativeTime[i];
        return S(s) ? s(t, e, i, n) : s.replace(/%d/i, t)
    }

    function N(t, e) {
        var i = this._relativeTime[t > 0 ? "future" : "past"];
        return S(i) ? i(e) : i.replace(/%s/i, e)
    }

    function $(t, e) {
        var i = t.toLowerCase();
        Pn[i] = Pn[i + "s"] = Pn[e] = t
    }

    function L(t) {
        return "string" == typeof t ? Pn[t] || Pn[t.toLowerCase()] : void 0
    }

    function j(t) {
        var e, i, n = {};
        for (i in t) c(t, i) && ((e = L(i)) && (n[e] = t[i]));
        return n
    }

    function Y(t, e) {
        An[t] = e
    }

    function H(t) {
        var e = [];
        for (var i in t) e.push({
            unit: i,
            priority: An[i]
        });
        return e.sort(function(t, e) {
            return t.priority - e.priority
        }), e
    }

    function F(e, i) {
        return function(n) {
            return null != n ? (R(this, e, n), t.updateOffset(this, i), this) : W(this, e)
        }
    }

    function W(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function R(t, e, i) {
        t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](i)
    }

    function z(t) {
        return S(this[t = L(t)]) ? this[t]() : this
    }

    function B(t, e) {
        if ("object" == typeof t)
            for (var i = H(t = j(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
        else if (S(this[t = L(t)])) return this[t](e);
        return this
    }

    function q(t, e, i) {
        var n = "" + Math.abs(t),
            s = e - n.length;
        return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
    }

    function U(t, e, i, n) {
        var s = n;
        "string" == typeof n && (s = function() {
            return this[n]()
        }), t && (Ln[t] = s), e && (Ln[e[0]] = function() {
            return q(s.apply(this, arguments), e[1], e[2])
        }), i && (Ln[i] = function() {
            return this.localeData().ordinal(s.apply(this, arguments), t)
        })
    }

    function V(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function G(t) {
        var e, i, n = t.match(On);
        for (e = 0, i = n.length; e < i; e++) Ln[n[e]] ? n[e] = Ln[n[e]] : n[e] = V(n[e]);
        return function(e) {
            var s, o = "";
            for (s = 0; s < i; s++) o += S(n[s]) ? n[s].call(e, t) : n[s];
            return o
        }
    }

    function K(t, e) {
        return t.isValid() ? (e = Q(e, t.localeData()), $n[e] = $n[e] || G(e), $n[e](t)) : t.localeData().invalidDate()
    }

    function Q(t, e) {
        function i(t) {
            return e.longDateFormat(t) || t
        }
        var n = 5;
        for (Nn.lastIndex = 0; n >= 0 && Nn.test(t);) t = t.replace(Nn, i), Nn.lastIndex = 0, n -= 1;
        return t
    }

    function X(t, e, i) {
        ts[t] = S(e) ? e : function(t) {
            return t && i ? i : e
        }
    }

    function Z(t, e) {
        return c(ts, t) ? ts[t](e._strict, e._locale) : new RegExp(J(t))
    }

    function J(t) {
        return tt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, s) {
            return e || i || n || s
        }))
    }

    function tt(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function et(t, e) {
        var i, n = e;
        for ("string" == typeof t && (t = [t]), r(e) && (n = function(t, i) {
                i[e] = b(t)
            }), i = 0; i < t.length; i++) es[t[i]] = n
    }

    function it(t, e) {
        et(t, function(t, i, n, s) {
            n._w = n._w || {}, e(t, n._w, n, s)
        })
    }

    function nt(t, e, i) {
        null != e && c(es, t) && es[t](e, i._a, i, t)
    }

    function st(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function ot(t, e) {
        return t ? i(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || us).test(e) ? "format" : "standalone"][t.month()] : i(this._months) ? this._months : this._months.standalone
    }

    function rt(t, e) {
        return t ? i(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[us.test(e) ? "format" : "standalone"][t.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }

    function at(t, e, i) {
        var n, s, o, r = t.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) o = d([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
        return i ? "MMM" === e ? -1 !== (s = ds.call(this._shortMonthsParse, r)) ? s : null : -1 !== (s = ds.call(this._longMonthsParse, r)) ? s : null : "MMM" === e ? -1 !== (s = ds.call(this._shortMonthsParse, r)) ? s : -1 !== (s = ds.call(this._longMonthsParse, r)) ? s : null : -1 !== (s = ds.call(this._longMonthsParse, r)) ? s : -1 !== (s = ds.call(this._shortMonthsParse, r)) ? s : null
    }

    function lt(t, e, i) {
        var n, s, o;
        if (this._monthsParseExact) return at.call(this, t, e, i);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
            if (s = d([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
            if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
            if (!i && this._monthsParse[n].test(t)) return n
        }
    }

    function ct(t, e) {
        var i;
        if (!t.isValid()) return t;
        if ("string" == typeof e)
            if (/^\d+$/.test(e)) e = b(e);
            else if (!r(e = t.localeData().monthsParse(e))) return t;
        return i = Math.min(t.date(), st(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
    }

    function ht(e) {
        return null != e ? (ct(this, e), t.updateOffset(this, !0), this) : W(this, "Month")
    }

    function dt() {
        return st(this.year(), this.month())
    }

    function ut(t) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || pt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = ms), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function ft(t) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || pt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = gs), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }

    function pt() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, i, n = [],
            s = [],
            o = [];
        for (e = 0; e < 12; e++) i = d([2e3, e]), n.push(this.monthsShort(i, "")), s.push(this.months(i, "")), o.push(this.months(i, "")), o.push(this.monthsShort(i, ""));
        for (n.sort(t), s.sort(t), o.sort(t), e = 0; e < 12; e++) n[e] = tt(n[e]), s[e] = tt(s[e]);
        for (e = 0; e < 24; e++) o[e] = tt(o[e]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
    }

    function mt(t) {
        return gt(t) ? 366 : 365
    }

    function gt(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }

    function vt() {
        return gt(this.year())
    }

    function _t(t, e, i, n, s, o, r) {
        var a = new Date(t, e, i, n, s, o, r);
        return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
    }

    function yt(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
    }

    function bt(t, e, i) {
        var n = 7 + e - i;
        return -((7 + yt(t, 0, n).getUTCDay() - e) % 7) + n - 1
    }

    function wt(t, e, i, n, s) {
        var o, r, a = 1 + 7 * (e - 1) + (7 + i - n) % 7 + bt(t, n, s);
        return a <= 0 ? r = mt(o = t - 1) + a : a > mt(t) ? (o = t + 1, r = a - mt(t)) : (o = t, r = a), {
            year: o,
            dayOfYear: r
        }
    }

    function xt(t, e, i) {
        var n, s, o = bt(t.year(), e, i),
            r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
        return r < 1 ? n = r + kt(s = t.year() - 1, e, i) : r > kt(t.year(), e, i) ? (n = r - kt(t.year(), e, i), s = t.year() + 1) : (s = t.year(), n = r), {
            week: n,
            year: s
        }
    }

    function kt(t, e, i) {
        var n = bt(t, e, i),
            s = bt(t + 1, e, i);
        return (mt(t) - n + s) / 7
    }

    function Ct(t) {
        return xt(t, this._week.dow, this._week.doy).week
    }

    function St() {
        return this._week.dow
    }

    function Tt() {
        return this._week.doy
    }

    function Dt(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function Et(t) {
        var e = xt(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function Mt(t, e) {
        return "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10)
    }

    function It(t, e) {
        return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
    }

    function Pt(t, e) {
        return t ? i(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : i(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }

    function At(t) {
        return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }

    function Ot(t) {
        return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }

    function Nt(t, e, i) {
        var n, s, o, r = t.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) o = d([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
        return i ? "dddd" === e ? -1 !== (s = ds.call(this._weekdaysParse, r)) ? s : null : "ddd" === e ? -1 !== (s = ds.call(this._shortWeekdaysParse, r)) ? s : null : -1 !== (s = ds.call(this._minWeekdaysParse, r)) ? s : null : "dddd" === e ? -1 !== (s = ds.call(this._weekdaysParse, r)) ? s : -1 !== (s = ds.call(this._shortWeekdaysParse, r)) ? s : -1 !== (s = ds.call(this._minWeekdaysParse, r)) ? s : null : "ddd" === e ? -1 !== (s = ds.call(this._shortWeekdaysParse, r)) ? s : -1 !== (s = ds.call(this._weekdaysParse, r)) ? s : -1 !== (s = ds.call(this._minWeekdaysParse, r)) ? s : null : -1 !== (s = ds.call(this._minWeekdaysParse, r)) ? s : -1 !== (s = ds.call(this._weekdaysParse, r)) ? s : -1 !== (s = ds.call(this._shortWeekdaysParse, r)) ? s : null
    }

    function $t(t, e, i) {
        var n, s, o;
        if (this._weekdaysParseExact) return Nt.call(this, t, e, i);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
            if (s = d([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (o = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
            if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
            if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
            if (!i && this._weekdaysParse[n].test(t)) return n
        }
    }

    function Lt(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (t = Mt(t, this.localeData()), this.add(t - e, "d")) : e
    }

    function jt(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }

    function Yt(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
            var e = It(t, this.localeData());
            return this.day(this.day() % 7 ? e : e - 7)
        }
        return this.day() || 7
    }

    function Ht(t) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Rt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = xs), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function Ft(t) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Rt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ks), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function Wt(t) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Rt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Cs), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function Rt() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, i, n, s, o, r = [],
            a = [],
            l = [],
            c = [];
        for (e = 0; e < 7; e++) i = d([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), s = this.weekdaysShort(i, ""), o = this.weekdays(i, ""), r.push(n), a.push(s), l.push(o), c.push(n), c.push(s), c.push(o);
        for (r.sort(t), a.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++) a[e] = tt(a[e]), l[e] = tt(l[e]), c[e] = tt(c[e]);
        this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function zt() {
        return this.hours() % 12 || 12
    }

    function Bt() {
        return this.hours() || 24
    }

    function qt(t, e) {
        U(t, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function Ut(t, e) {
        return e._meridiemParse
    }

    function Vt(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }

    function Gt(t, e, i) {
        return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
    }

    function Kt(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function Qt(t) {
        for (var e, i, n, s, o = 0; o < t.length;) {
            for (e = (s = Kt(t[o]).split("-")).length, i = (i = Kt(t[o + 1])) ? i.split("-") : null; e > 0;) {
                if (n = Xt(s.slice(0, e).join("-"))) return n;
                if (i && i.length >= e && w(s, i, !0) >= e - 1) break;
                e--
            }
            o++
        }
        return null
    }

    function Xt(t) {
        var e = null;
        if (!Ms[t] && "undefined" != typeof module && module && module.exports) try {
            e = Ss._abbr, require("./locale/" + t), Zt(e)
        } catch (t) {}
        return Ms[t]
    }

    function Zt(t, e) {
        var i;
        return t && ((i = o(e) ? ee(t) : Jt(t, e)) && (Ss = i)), Ss._abbr
    }

    function Jt(t, e) {
        if (null !== e) {
            var i = Es;
            if (e.abbr = t, null != Ms[t]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = Ms[t]._config;
            else if (null != e.parentLocale) {
                if (null == Ms[e.parentLocale]) return Is[e.parentLocale] || (Is[e.parentLocale] = []), Is[e.parentLocale].push({
                    name: t,
                    config: e
                }), null;
                i = Ms[e.parentLocale]._config
            }
            return Ms[t] = new E(D(i, e)), Is[t] && Is[t].forEach(function(t) {
                Jt(t.name, t.config)
            }), Zt(t), Ms[t]
        }
        return delete Ms[t], null
    }

    function te(t, e) {
        if (null != e) {
            var i, n = Es;
            null != Ms[t] && (n = Ms[t]._config), (i = new E(e = D(n, e))).parentLocale = Ms[t], Ms[t] = i, Zt(t)
        } else null != Ms[t] && (null != Ms[t].parentLocale ? Ms[t] = Ms[t].parentLocale : null != Ms[t] && delete Ms[t]);
        return Ms[t]
    }

    function ee(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Ss;
        if (!i(t)) {
            if (e = Xt(t)) return e;
            t = [t]
        }
        return Qt(t)
    }

    function ie() {
        return Cn(Ms)
    }

    function ne(t) {
        var e, i = t._a;
        return i && -2 === f(t).overflow && (e = i[ns] < 0 || i[ns] > 11 ? ns : i[ss] < 1 || i[ss] > st(i[is], i[ns]) ? ss : i[os] < 0 || i[os] > 24 || 24 === i[os] && (0 !== i[rs] || 0 !== i[as] || 0 !== i[ls]) ? os : i[rs] < 0 || i[rs] > 59 ? rs : i[as] < 0 || i[as] > 59 ? as : i[ls] < 0 || i[ls] > 999 ? ls : -1, f(t)._overflowDayOfYear && (e < is || e > ss) && (e = ss), f(t)._overflowWeeks && -1 === e && (e = cs), f(t)._overflowWeekday && -1 === e && (e = hs), f(t).overflow = e), t
    }

    function se(t) {
        var e, i, n, s, o, r, a = t._i,
            l = Ps.exec(a) || As.exec(a);
        if (l) {
            for (f(t).iso = !0, e = 0, i = Ns.length; e < i; e++)
                if (Ns[e][1].exec(l[1])) {
                    s = Ns[e][0], n = !1 !== Ns[e][2];
                    break
                } if (null == s) return void(t._isValid = !1);
            if (l[3]) {
                for (e = 0, i = $s.length; e < i; e++)
                    if ($s[e][1].exec(l[3])) {
                        o = (l[2] || " ") + $s[e][0];
                        break
                    } if (null == o) return void(t._isValid = !1)
            }
            if (!n && null != o) return void(t._isValid = !1);
            if (l[4]) {
                if (!Os.exec(l[4])) return void(t._isValid = !1);
                r = "Z"
            }
            t._f = s + (o || "") + (r || ""), de(t)
        } else t._isValid = !1
    }

    function oe(t) {
        var e, i, n, s, o, r, a, l, c = {
                " GMT": " +0000",
                " EDT": " -0400",
                " EST": " -0500",
                " CDT": " -0500",
                " CST": " -0600",
                " MDT": " -0600",
                " MST": " -0700",
                " PDT": " -0700",
                " PST": " -0800"
            },
            h = "YXWVUTSRQPONZABCDEFGHIKLM";
        if (e = t._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), i = js.exec(e)) {
            if (n = i[1] ? "ddd" + (5 === i[1].length ? ", " : " ") : "", s = "D MMM " + (i[2].length > 10 ? "YYYY " : "YY "), o = "HH:mm" + (i[4] ? ":ss" : ""), i[1]) {
                var d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(i[2]).getDay()];
                if (i[1].substr(0, 3) !== d) return f(t).weekdayMismatch = !0, void(t._isValid = !1)
            }
            switch (i[5].length) {
                case 2:
                    0 === l ? a = " +0000" : a = ((l = h.indexOf(i[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + l).replace(/^-?/, "0").match(/..$/)[0] + "00";
                    break;
                case 4:
                    a = c[i[5]];
                    break;
                default:
                    a = c[" GMT"]
            }
            i[5] = a, t._i = i.splice(1).join(""), r = " ZZ", t._f = n + s + o + r, de(t), f(t).rfc2822 = !0
        } else t._isValid = !1
    }

    function re(e) {
        var i = Ls.exec(e._i);
        return null !== i ? void(e._d = new Date(+i[1])) : (se(e), void(!1 === e._isValid && (delete e._isValid, oe(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))))
    }

    function ae(t, e, i) {
        return null != t ? t : null != e ? e : i
    }

    function le(e) {
        var i = new Date(t.now());
        return e._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
    }

    function ce(t) {
        var e, i, n, s, o = [];
        if (!t._d) {
            for (n = le(t), t._w && null == t._a[ss] && null == t._a[ns] && he(t), null != t._dayOfYear && (s = ae(t._a[is], n[is]), (t._dayOfYear > mt(s) || 0 === t._dayOfYear) && (f(t)._overflowDayOfYear = !0), i = yt(s, 0, t._dayOfYear), t._a[ns] = i.getUTCMonth(), t._a[ss] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = o[e] = n[e];
            for (; e < 7; e++) t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[os] && 0 === t._a[rs] && 0 === t._a[as] && 0 === t._a[ls] && (t._nextDay = !0, t._a[os] = 0), t._d = (t._useUTC ? yt : _t).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[os] = 24)
        }
    }

    function he(t) {
        var e, i, n, s, o, r, a, l;
        if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, r = 4, i = ae(e.GG, t._a[is], xt(ye(), 1, 4).year), n = ae(e.W, 1), ((s = ae(e.E, 1)) < 1 || s > 7) && (l = !0);
        else {
            o = t._locale._week.dow, r = t._locale._week.doy;
            var c = xt(ye(), o, r);
            i = ae(e.gg, t._a[is], c.year), n = ae(e.w, c.week), null != e.d ? ((s = e.d) < 0 || s > 6) && (l = !0) : null != e.e ? (s = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : s = o
        }
        n < 1 || n > kt(i, o, r) ? f(t)._overflowWeeks = !0 : null != l ? f(t)._overflowWeekday = !0 : (a = wt(i, n, s, o, r), t._a[is] = a.year, t._dayOfYear = a.dayOfYear)
    }

    function de(e) {
        if (e._f !== t.ISO_8601)
            if (e._f !== t.RFC_2822) {
                e._a = [], f(e).empty = !0;
                var i, n, s, o, r, a = "" + e._i,
                    l = a.length,
                    c = 0;
                for (s = Q(e._f, e._locale).match(On) || [], i = 0; i < s.length; i++) o = s[i], (n = (a.match(Z(o, e)) || [])[0]) && ((r = a.substr(0, a.indexOf(n))).length > 0 && f(e).unusedInput.push(r), a = a.slice(a.indexOf(n) + n.length), c += n.length), Ln[o] ? (n ? f(e).empty = !1 : f(e).unusedTokens.push(o), nt(o, n, e)) : e._strict && !n && f(e).unusedTokens.push(o);
                f(e).charsLeftOver = l - c, a.length > 0 && f(e).unusedInput.push(a), e._a[os] <= 12 && !0 === f(e).bigHour && e._a[os] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[os] = ue(e._locale, e._a[os], e._meridiem), ce(e), ne(e)
            } else oe(e);
        else se(e)
    }

    function ue(t, e, i) {
        var n;
        return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e
    }

    function fe(t) {
        var e, i, n, s, o;
        if (0 === t._f.length) return f(t).invalidFormat = !0, void(t._d = new Date(NaN));
        for (s = 0; s < t._f.length; s++) o = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], de(e), p(e) && (o += f(e).charsLeftOver, o += 10 * f(e).unusedTokens.length, f(e).score = o, (null == n || o < n) && (n = o, i = e));
        h(t, i || e)
    }

    function pe(t) {
        if (!t._d) {
            var e = j(t._i);
            t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                return t && parseInt(t, 10)
            }), ce(t)
        }
    }

    function me(t) {
        var e = new v(ne(ge(t)));
        return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
    }

    function ge(t) {
        var e = t._i,
            n = t._f;
        return t._locale = t._locale || ee(t._l), null === e || void 0 === n && "" === e ? m({
            nullInput: !0
        }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), _(e) ? new v(ne(e)) : (a(e) ? t._d = e : i(n) ? fe(t) : n ? de(t) : ve(t), p(t) || (t._d = null), t))
    }

    function ve(e) {
        var s = e._i;
        o(s) ? e._d = new Date(t.now()) : a(s) ? e._d = new Date(s.valueOf()) : "string" == typeof s ? re(e) : i(s) ? (e._a = l(s.slice(0), function(t) {
            return parseInt(t, 10)
        }), ce(e)) : n(s) ? pe(e) : r(s) ? e._d = new Date(s) : t.createFromInputFallback(e)
    }

    function _e(t, e, o, r, a) {
        var l = {};
        return !0 !== o && !1 !== o || (r = o, o = void 0), (n(t) && s(t) || i(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = o, l._i = t, l._f = e, l._strict = r, me(l)
    }

    function ye(t, e, i, n) {
        return _e(t, e, i, n, !1)
    }

    function be(t, e) {
        var n, s;
        if (1 === e.length && i(e[0]) && (e = e[0]), !e.length) return ye();
        for (n = e[0], s = 1; s < e.length; ++s) e[s].isValid() && !e[s][t](n) || (n = e[s]);
        return n
    }

    function we() {
        return be("isBefore", [].slice.call(arguments, 0))
    }

    function xe() {
        return be("isAfter", [].slice.call(arguments, 0))
    }

    function ke(t) {
        for (var e in t)
            if (-1 === Ws.indexOf(e) || null != t[e] && isNaN(t[e])) return !1;
        for (var i = !1, n = 0; n < Ws.length; ++n)
            if (t[Ws[n]]) {
                if (i) return !1;
                parseFloat(t[Ws[n]]) !== b(t[Ws[n]]) && (i = !0)
            } return !0
    }

    function Ce() {
        return this._isValid
    }

    function Se() {
        return Be(NaN)
    }

    function Te(t) {
        var e = j(t),
            i = e.year || 0,
            n = e.quarter || 0,
            s = e.month || 0,
            o = e.week || 0,
            r = e.day || 0,
            a = e.hour || 0,
            l = e.minute || 0,
            c = e.second || 0,
            h = e.millisecond || 0;
        this._isValid = ke(e), this._milliseconds = +h + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +r + 7 * o, this._months = +s + 3 * n + 12 * i, this._data = {}, this._locale = ee(), this._bubble()
    }

    function De(t) {
        return t instanceof Te
    }

    function Ee(t) {
        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function Me(t, e) {
        U(t, 0, 0, function() {
            var t = this.utcOffset(),
                i = "+";
            return t < 0 && (t = -t, i = "-"), i + q(~~(t / 60), 2) + e + q(~~t % 60, 2)
        })
    }

    function Ie(t, e) {
        var i = (e || "").match(t);
        if (null === i) return null;
        var n = ((i[i.length - 1] || []) + "").match(Rs) || ["-", 0, 0],
            s = 60 * n[1] + b(n[2]);
        return 0 === s ? 0 : "+" === n[0] ? s : -s
    }

    function Pe(e, i) {
        var n, s;
        return i._isUTC ? (n = i.clone(), s = (_(e) || a(e) ? e.valueOf() : ye(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), t.updateOffset(n, !1), n) : ye(e).local()
    }

    function Ae(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function Oe(e, i, n) {
        var s, o = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
            if ("string" == typeof e) {
                if (null === (e = Ie(Xn, e))) return this
            } else Math.abs(e) < 16 && !n && (e *= 60);
            return !this._isUTC && i && (s = Ae(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), o !== e && (!i || this._changeInProgress ? Ke(this, Be(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? o : Ae(this)
    }

    function Ne(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }

    function $e(t) {
        return this.utcOffset(0, t)
    }

    function Le(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ae(this), "m")), this
    }

    function je() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var t = Ie(Qn, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
        }
        return this
    }

    function Ye(t) {
        return !!this.isValid() && (t = t ? ye(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
    }

    function He() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Fe() {
        if (!o(this._isDSTShifted)) return this._isDSTShifted;
        var t = {};
        if (g(t, this), (t = ge(t))._a) {
            var e = t._isUTC ? d(t._a) : ye(t._a);
            this._isDSTShifted = this.isValid() && w(t._a, e.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function We() {
        return !!this.isValid() && !this._isUTC
    }

    function Re() {
        return !!this.isValid() && this._isUTC
    }

    function ze() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }

    function Be(t, e) {
        var i, n, s, o = t,
            a = null;
        return De(t) ? o = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : r(t) ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (a = zs.exec(t)) ? (i = "-" === a[1] ? -1 : 1, o = {
            y: 0,
            d: b(a[ss]) * i,
            h: b(a[os]) * i,
            m: b(a[rs]) * i,
            s: b(a[as]) * i,
            ms: b(Ee(1e3 * a[ls])) * i
        }) : (a = Bs.exec(t)) ? (i = "-" === a[1] ? -1 : 1, o = {
            y: qe(a[2], i),
            M: qe(a[3], i),
            w: qe(a[4], i),
            d: qe(a[5], i),
            h: qe(a[6], i),
            m: qe(a[7], i),
            s: qe(a[8], i)
        }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (s = Ve(ye(o.from), ye(o.to)), (o = {}).ms = s.milliseconds, o.M = s.months), n = new Te(o), De(t) && c(t, "_locale") && (n._locale = t._locale), n
    }

    function qe(t, e) {
        var i = t && parseFloat(t.replace(",", "."));
        return (isNaN(i) ? 0 : i) * e
    }

    function Ue(t, e) {
        var i = {
            milliseconds: 0,
            months: 0
        };
        return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
    }

    function Ve(t, e) {
        var i;
        return t.isValid() && e.isValid() ? (e = Pe(e, t), t.isBefore(e) ? i = Ue(t, e) : ((i = Ue(e, t)).milliseconds = -i.milliseconds, i.months = -i.months), i) : {
            milliseconds: 0,
            months: 0
        }
    }

    function Ge(t, e) {
        return function(i, n) {
            var s;
            return null === n || isNaN(+n) || (C(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = i, i = n, n = s), Ke(this, Be(i = "string" == typeof i ? +i : i, n), t), this
        }
    }

    function Ke(e, i, n, s) {
        var o = i._milliseconds,
            r = Ee(i._days),
            a = Ee(i._months);
        e.isValid() && (s = null == s || s, o && e._d.setTime(e._d.valueOf() + o * n), r && R(e, "Date", W(e, "Date") + r * n), a && ct(e, W(e, "Month") + a * n), s && t.updateOffset(e, r || a))
    }

    function Qe(t, e) {
        var i = t.diff(e, "days", !0);
        return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
    }

    function Xe(e, i) {
        var n = e || ye(),
            s = Pe(n, this).startOf("day"),
            o = t.calendarFormat(this, s) || "sameElse",
            r = i && (S(i[o]) ? i[o].call(this, n) : i[o]);
        return this.format(r || this.localeData().calendar(o, this, ye(n)))
    }

    function Ze() {
        return new v(this)
    }

    function Je(t, e) {
        var i = _(t) ? t : ye(t);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = L(o(e) ? "millisecond" : e)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
    }

    function ti(t, e) {
        var i = _(t) ? t : ye(t);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = L(o(e) ? "millisecond" : e)) ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
    }

    function ei(t, e, i, n) {
        return ("(" === (n = n || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
    }

    function ii(t, e) {
        var i, n = _(t) ? t : ye(t);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = L(e || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
    }

    function ni(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }

    function si(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }

    function oi(t, e, i) {
        var n, s, o, r;
        return this.isValid() ? (n = Pe(t, this)).isValid() ? (s = 6e4 * (n.utcOffset() - this.utcOffset()), "year" === (e = L(e)) || "month" === e || "quarter" === e ? (r = ri(this, n), "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (o = this - n, r = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - s) / 864e5 : "week" === e ? (o - s) / 6048e5 : o), i ? r : y(r)) : NaN : NaN
    }

    function ri(t, e) {
        var i, n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            s = t.clone().add(n, "months");
        return e - s < 0 ? i = (e - s) / (s - t.clone().add(n - 1, "months")) : i = (e - s) / (t.clone().add(n + 1, "months") - s), -(n + i) || 0
    }

    function ai() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function li() {
        if (!this.isValid()) return null;
        var t = this.clone().utc();
        return t.year() < 0 || t.year() > 9999 ? K(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : S(Date.prototype.toISOString) ? this.toDate().toISOString() : K(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function ci() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t = "moment",
            e = "";
        this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
        var i = "[" + t + '("]',
            n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            s = "-MM-DD[T]HH:mm:ss.SSS",
            o = e + '[")]';
        return this.format(i + n + s + o)
    }

    function hi(e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var i = K(this, e);
        return this.localeData().postformat(i)
    }

    function di(t, e) {
        return this.isValid() && (_(t) && t.isValid() || ye(t).isValid()) ? Be({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function ui(t) {
        return this.from(ye(), t)
    }

    function fi(t, e) {
        return this.isValid() && (_(t) && t.isValid() || ye(t).isValid()) ? Be({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function pi(t) {
        return this.to(ye(), t)
    }

    function mi(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (null != (e = ee(t)) && (this._locale = e), this)
    }

    function gi() {
        return this._locale
    }

    function vi(t) {
        switch (t = L(t)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function _i(t) {
        return void 0 === (t = L(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }

    function yi() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function bi() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function wi() {
        return new Date(this.valueOf())
    }

    function xi() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }

    function ki() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }

    function Ci() {
        return this.isValid() ? this.toISOString() : null
    }

    function Si() {
        return p(this)
    }

    function Ti() {
        return h({}, f(this))
    }

    function Di() {
        return f(this).overflow
    }

    function Ei() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function Mi(t, e) {
        U(0, [t, t.length], 0, e)
    }

    function Ii(t) {
        return Ni.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Pi(t) {
        return Ni.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Ai() {
        return kt(this.year(), 1, 4)
    }

    function Oi() {
        var t = this.localeData()._week;
        return kt(this.year(), t.dow, t.doy)
    }

    function Ni(t, e, i, n, s) {
        var o;
        return null == t ? xt(this, n, s).year : (e > (o = kt(t, n, s)) && (e = o), $i.call(this, t, e, i, n, s))
    }

    function $i(t, e, i, n, s) {
        var o = wt(t, e, i, n, s),
            r = yt(o.year, 0, o.dayOfYear);
        return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
    }

    function Li(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }

    function ji(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }

    function Yi(t, e) {
        e[ls] = b(1e3 * ("0." + t))
    }

    function Hi() {
        return this._isUTC ? "UTC" : ""
    }

    function Fi() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Wi(t) {
        return ye(1e3 * t)
    }

    function Ri() {
        return ye.apply(null, arguments).parseZone()
    }

    function zi(t) {
        return t
    }

    function Bi(t, e, i, n) {
        var s = ee(),
            o = d().set(n, e);
        return s[i](o, t)
    }

    function qi(t, e, i) {
        if (r(t) && (e = t, t = void 0), t = t || "", null != e) return Bi(t, e, i, "month");
        var n, s = [];
        for (n = 0; n < 12; n++) s[n] = Bi(t, n, i, "month");
        return s
    }

    function Ui(t, e, i, n) {
        "boolean" == typeof t ? (r(e) && (i = e, e = void 0), e = e || "") : (i = e = t, t = !1, r(e) && (i = e, e = void 0), e = e || "");
        var s = ee(),
            o = t ? s._week.dow : 0;
        if (null != i) return Bi(e, (i + o) % 7, n, "day");
        var a, l = [];
        for (a = 0; a < 7; a++) l[a] = Bi(e, (a + o) % 7, n, "day");
        return l
    }

    function Vi(t, e) {
        return qi(t, e, "months")
    }

    function Gi(t, e) {
        return qi(t, e, "monthsShort")
    }

    function Ki(t, e, i) {
        return Ui(t, e, i, "weekdays")
    }

    function Qi(t, e, i) {
        return Ui(t, e, i, "weekdaysShort")
    }

    function Xi(t, e, i) {
        return Ui(t, e, i, "weekdaysMin")
    }

    function Zi() {
        var t = this._data;
        return this._milliseconds = eo(this._milliseconds), this._days = eo(this._days), this._months = eo(this._months), t.milliseconds = eo(t.milliseconds), t.seconds = eo(t.seconds), t.minutes = eo(t.minutes), t.hours = eo(t.hours), t.months = eo(t.months), t.years = eo(t.years), this
    }

    function Ji(t, e, i, n) {
        var s = Be(e, i);
        return t._milliseconds += n * s._milliseconds, t._days += n * s._days, t._months += n * s._months, t._bubble()
    }

    function tn(t, e) {
        return Ji(this, t, e, 1)
    }

    function en(t, e) {
        return Ji(this, t, e, -1)
    }

    function nn(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t)
    }

    function sn() {
        var t, e, i, n, s, o = this._milliseconds,
            r = this._days,
            a = this._months,
            l = this._data;
        return o >= 0 && r >= 0 && a >= 0 || o <= 0 && r <= 0 && a <= 0 || (o += 864e5 * nn(rn(a) + r), r = 0, a = 0), l.milliseconds = o % 1e3, t = y(o / 1e3), l.seconds = t % 60, e = y(t / 60), l.minutes = e % 60, i = y(e / 60), l.hours = i % 24, a += s = y(on(r += y(i / 24))), r -= nn(rn(s)), n = y(a / 12), a %= 12, l.days = r, l.months = a, l.years = n, this
    }

    function on(t) {
        return 4800 * t / 146097
    }

    function rn(t) {
        return 146097 * t / 4800
    }

    function an(t) {
        if (!this.isValid()) return NaN;
        var e, i, n = this._milliseconds;
        if ("month" === (t = L(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + on(e), "month" === t ? i : i / 12;
        switch (e = this._days + Math.round(rn(this._months)), t) {
            case "week":
                return e / 7 + n / 6048e5;
            case "day":
                return e + n / 864e5;
            case "hour":
                return 24 * e + n / 36e5;
            case "minute":
                return 1440 * e + n / 6e4;
            case "second":
                return 86400 * e + n / 1e3;
            case "millisecond":
                return Math.floor(864e5 * e) + n;
            default:
                throw new Error("Unknown unit " + t)
        }
    }

    function ln() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12) : NaN
    }

    function cn(t) {
        return function() {
            return this.as(t)
        }
    }

    function hn(t) {
        return t = L(t), this.isValid() ? this[t + "s"]() : NaN
    }

    function dn(t) {
        return function() {
            return this.isValid() ? this._data[t] : NaN
        }
    }

    function un() {
        return y(this.days() / 7)
    }

    function fn(t, e, i, n, s) {
        return s.relativeTime(e || 1, !!i, t, n)
    }

    function pn(t, e, i) {
        var n = Be(t).abs(),
            s = _o(n.as("s")),
            o = _o(n.as("m")),
            r = _o(n.as("h")),
            a = _o(n.as("d")),
            l = _o(n.as("M")),
            c = _o(n.as("y")),
            h = s <= yo.ss && ["s", s] || s < yo.s && ["ss", s] || o <= 1 && ["m"] || o < yo.m && ["mm", o] || r <= 1 && ["h"] || r < yo.h && ["hh", r] || a <= 1 && ["d"] || a < yo.d && ["dd", a] || l <= 1 && ["M"] || l < yo.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c];
        return h[2] = e, h[3] = +t > 0, h[4] = i, fn.apply(null, h)
    }

    function mn(t) {
        return void 0 === t ? _o : "function" == typeof t && (_o = t, !0)
    }

    function gn(t, e) {
        return void 0 !== yo[t] && (void 0 === e ? yo[t] : (yo[t] = e, "s" === t && (yo.ss = e - 1), !0))
    }

    function vn(t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e = this.localeData(),
            i = pn(this, !t, e);
        return t && (i = e.pastFuture(+this, i)), e.postformat(i)
    }

    function _n() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t, e, i = bo(this._milliseconds) / 1e3,
            n = bo(this._days),
            s = bo(this._months);
        e = y((t = y(i / 60)) / 60), i %= 60, t %= 60;
        var o = y(s / 12),
            r = s %= 12,
            a = n,
            l = e,
            c = t,
            h = i,
            d = this.asSeconds();
        return d ? (d < 0 ? "-" : "") + "P" + (o ? o + "Y" : "") + (r ? r + "M" : "") + (a ? a + "D" : "") + (l || c || h ? "T" : "") + (l ? l + "H" : "") + (c ? c + "M" : "") + (h ? h + "S" : "") : "P0D"
    }
    var yn, bn = Array.prototype.some ? Array.prototype.some : function(t) {
            for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
                if (n in e && t.call(this, e[n], n, e)) return !0;
            return !1
        },
        wn = t.momentProperties = [],
        xn = !1,
        kn = {};
    t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
    var Cn = Object.keys ? Object.keys : function(t) {
            var e, i = [];
            for (e in t) c(t, e) && i.push(e);
            return i
        },
        Sn = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        Tn = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        Dn = "Invalid date",
        En = "%d",
        Mn = /\d{1,2}/,
        In = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Pn = {},
        An = {},
        On = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Nn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        $n = {},
        Ln = {},
        jn = /\d/,
        Yn = /\d\d/,
        Hn = /\d{3}/,
        Fn = /\d{4}/,
        Wn = /[+-]?\d{6}/,
        Rn = /\d\d?/,
        zn = /\d\d\d\d?/,
        Bn = /\d\d\d\d\d\d?/,
        qn = /\d{1,3}/,
        Un = /\d{1,4}/,
        Vn = /[+-]?\d{1,6}/,
        Gn = /\d+/,
        Kn = /[+-]?\d+/,
        Qn = /Z|[+-]\d\d:?\d\d/gi,
        Xn = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Zn = /[+-]?\d+(\.\d{1,3})?/,
        Jn = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        ts = {},
        es = {},
        is = 0,
        ns = 1,
        ss = 2,
        os = 3,
        rs = 4,
        as = 5,
        ls = 6,
        cs = 7,
        hs = 8,
        ds = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
            var e;
            for (e = 0; e < this.length; ++e)
                if (this[e] === t) return e;
            return -1
        };
    U("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), U("MMM", 0, 0, function(t) {
        return this.localeData().monthsShort(this, t)
    }), U("MMMM", 0, 0, function(t) {
        return this.localeData().months(this, t)
    }), $("month", "M"), Y("month", 8), X("M", Rn), X("MM", Rn, Yn), X("MMM", function(t, e) {
        return e.monthsShortRegex(t)
    }), X("MMMM", function(t, e) {
        return e.monthsRegex(t)
    }), et(["M", "MM"], function(t, e) {
        e[ns] = b(t) - 1
    }), et(["MMM", "MMMM"], function(t, e, i, n) {
        var s = i._locale.monthsParse(t, n, i._strict);
        null != s ? e[ns] = s : f(i).invalidMonth = t
    });
    var us = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        fs = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ps = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        ms = Jn,
        gs = Jn;
    U("Y", 0, 0, function() {
        var t = this.year();
        return t <= 9999 ? "" + t : "+" + t
    }), U(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), $("year", "y"), Y("year", 1), X("Y", Kn), X("YY", Rn, Yn), X("YYYY", Un, Fn), X("YYYYY", Vn, Wn), X("YYYYYY", Vn, Wn), et(["YYYYY", "YYYYYY"], is), et("YYYY", function(e, i) {
        i[is] = 2 === e.length ? t.parseTwoDigitYear(e) : b(e)
    }), et("YY", function(e, i) {
        i[is] = t.parseTwoDigitYear(e)
    }), et("Y", function(t, e) {
        e[is] = parseInt(t, 10)
    }), t.parseTwoDigitYear = function(t) {
        return b(t) + (b(t) > 68 ? 1900 : 2e3)
    };
    var vs = F("FullYear", !0);
    U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), $("week", "w"), $("isoWeek", "W"), Y("week", 5), Y("isoWeek", 5), X("w", Rn), X("ww", Rn, Yn), X("W", Rn), X("WW", Rn, Yn), it(["w", "ww", "W", "WW"], function(t, e, i, n) {
        e[n.substr(0, 1)] = b(t)
    });
    var _s = {
        dow: 0,
        doy: 6
    };
    U("d", 0, "do", "day"), U("dd", 0, 0, function(t) {
        return this.localeData().weekdaysMin(this, t)
    }), U("ddd", 0, 0, function(t) {
        return this.localeData().weekdaysShort(this, t)
    }), U("dddd", 0, 0, function(t) {
        return this.localeData().weekdays(this, t)
    }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), $("day", "d"), $("weekday", "e"), $("isoWeekday", "E"), Y("day", 11), Y("weekday", 11), Y("isoWeekday", 11), X("d", Rn), X("e", Rn), X("E", Rn), X("dd", function(t, e) {
        return e.weekdaysMinRegex(t)
    }), X("ddd", function(t, e) {
        return e.weekdaysShortRegex(t)
    }), X("dddd", function(t, e) {
        return e.weekdaysRegex(t)
    }), it(["dd", "ddd", "dddd"], function(t, e, i, n) {
        var s = i._locale.weekdaysParse(t, n, i._strict);
        null != s ? e.d = s : f(i).invalidWeekday = t
    }), it(["d", "e", "E"], function(t, e, i, n) {
        e[n] = b(t)
    });
    var ys = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        bs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        ws = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        xs = Jn,
        ks = Jn,
        Cs = Jn;
    U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, zt), U("k", ["kk", 2], 0, Bt), U("hmm", 0, 0, function() {
        return "" + zt.apply(this) + q(this.minutes(), 2)
    }), U("hmmss", 0, 0, function() {
        return "" + zt.apply(this) + q(this.minutes(), 2) + q(this.seconds(), 2)
    }), U("Hmm", 0, 0, function() {
        return "" + this.hours() + q(this.minutes(), 2)
    }), U("Hmmss", 0, 0, function() {
        return "" + this.hours() + q(this.minutes(), 2) + q(this.seconds(), 2)
    }), qt("a", !0), qt("A", !1), $("hour", "h"), Y("hour", 13), X("a", Ut), X("A", Ut), X("H", Rn), X("h", Rn), X("k", Rn), X("HH", Rn, Yn), X("hh", Rn, Yn), X("kk", Rn, Yn), X("hmm", zn), X("hmmss", Bn), X("Hmm", zn), X("Hmmss", Bn), et(["H", "HH"], os), et(["k", "kk"], function(t, e) {
        var i = b(t);
        e[os] = 24 === i ? 0 : i
    }), et(["a", "A"], function(t, e, i) {
        i._isPm = i._locale.isPM(t), i._meridiem = t
    }), et(["h", "hh"], function(t, e, i) {
        e[os] = b(t), f(i).bigHour = !0
    }), et("hmm", function(t, e, i) {
        var n = t.length - 2;
        e[os] = b(t.substr(0, n)), e[rs] = b(t.substr(n)), f(i).bigHour = !0
    }), et("hmmss", function(t, e, i) {
        var n = t.length - 4,
            s = t.length - 2;
        e[os] = b(t.substr(0, n)), e[rs] = b(t.substr(n, 2)), e[as] = b(t.substr(s)), f(i).bigHour = !0
    }), et("Hmm", function(t, e) {
        var i = t.length - 2;
        e[os] = b(t.substr(0, i)), e[rs] = b(t.substr(i))
    }), et("Hmmss", function(t, e) {
        var i = t.length - 4,
            n = t.length - 2;
        e[os] = b(t.substr(0, i)), e[rs] = b(t.substr(i, 2)), e[as] = b(t.substr(n))
    });
    var Ss, Ts = /[ap]\.?m?\.?/i,
        Ds = F("Hours", !0),
        Es = {
            calendar: Sn,
            longDateFormat: Tn,
            invalidDate: Dn,
            ordinal: En,
            dayOfMonthOrdinalParse: Mn,
            relativeTime: In,
            months: fs,
            monthsShort: ps,
            week: _s,
            weekdays: ys,
            weekdaysMin: ws,
            weekdaysShort: bs,
            meridiemParse: Ts
        },
        Ms = {},
        Is = {},
        Ps = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        As = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Os = /Z|[+-]\d\d(?::?\d\d)?/,
        Ns = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        $s = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Ls = /^\/?Date\((\-?\d+)/i,
        js = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
    t.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
    var Ys = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var t = ye.apply(null, arguments);
            return this.isValid() && t.isValid() ? t < this ? this : t : m()
        }),
        Hs = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var t = ye.apply(null, arguments);
            return this.isValid() && t.isValid() ? t > this ? this : t : m()
        }),
        Fs = function() {
            return Date.now ? Date.now() : +new Date
        },
        Ws = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Me("Z", ":"), Me("ZZ", ""), X("Z", Xn), X("ZZ", Xn), et(["Z", "ZZ"], function(t, e, i) {
        i._useUTC = !0, i._tzm = Ie(Xn, t)
    });
    var Rs = /([\+\-]|\d\d)/gi;
    t.updateOffset = function() {};
    var zs = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Bs = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Be.fn = Te.prototype, Be.invalid = Se;
    var qs = Ge(1, "add"),
        Us = Ge(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Vs = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    U(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), U(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), Mi("gggg", "weekYear"), Mi("ggggg", "weekYear"), Mi("GGGG", "isoWeekYear"), Mi("GGGGG", "isoWeekYear"), $("weekYear", "gg"), $("isoWeekYear", "GG"), Y("weekYear", 1), Y("isoWeekYear", 1), X("G", Kn), X("g", Kn), X("GG", Rn, Yn), X("gg", Rn, Yn), X("GGGG", Un, Fn), X("gggg", Un, Fn), X("GGGGG", Vn, Wn), X("ggggg", Vn, Wn), it(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) {
        e[n.substr(0, 2)] = b(t)
    }), it(["gg", "GG"], function(e, i, n, s) {
        i[s] = t.parseTwoDigitYear(e)
    }), U("Q", 0, "Qo", "quarter"), $("quarter", "Q"), Y("quarter", 7), X("Q", jn), et("Q", function(t, e) {
        e[ns] = 3 * (b(t) - 1)
    }), U("D", ["DD", 2], "Do", "date"), $("date", "D"), Y("date", 9), X("D", Rn), X("DD", Rn, Yn), X("Do", function(t, e) {
        return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
    }), et(["D", "DD"], ss), et("Do", function(t, e) {
        e[ss] = b(t.match(Rn)[0], 10)
    });
    var Gs = F("Date", !0);
    U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), $("dayOfYear", "DDD"), Y("dayOfYear", 4), X("DDD", qn), X("DDDD", Hn), et(["DDD", "DDDD"], function(t, e, i) {
        i._dayOfYear = b(t)
    }), U("m", ["mm", 2], 0, "minute"), $("minute", "m"), Y("minute", 14), X("m", Rn), X("mm", Rn, Yn), et(["m", "mm"], rs);
    var Ks = F("Minutes", !1);
    U("s", ["ss", 2], 0, "second"), $("second", "s"), Y("second", 15), X("s", Rn), X("ss", Rn, Yn), et(["s", "ss"], as);
    var Qs, Xs = F("Seconds", !1);
    for (U("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), U(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), U(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), U(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), U(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), U(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), U(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), $("millisecond", "ms"), Y("millisecond", 16), X("S", qn, jn), X("SS", qn, Yn), X("SSS", qn, Hn), Qs = "SSSS"; Qs.length <= 9; Qs += "S") X(Qs, Gn);
    for (Qs = "S"; Qs.length <= 9; Qs += "S") et(Qs, Yi);
    var Zs = F("Milliseconds", !1);
    U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
    var Js = v.prototype;
    Js.add = qs, Js.calendar = Xe, Js.clone = Ze, Js.diff = oi, Js.endOf = _i, Js.format = hi, Js.from = di, Js.fromNow = ui, Js.to = fi, Js.toNow = pi, Js.get = z, Js.invalidAt = Di, Js.isAfter = Je, Js.isBefore = ti, Js.isBetween = ei, Js.isSame = ii, Js.isSameOrAfter = ni, Js.isSameOrBefore = si, Js.isValid = Si, Js.lang = Vs, Js.locale = mi, Js.localeData = gi, Js.max = Hs, Js.min = Ys, Js.parsingFlags = Ti, Js.set = B, Js.startOf = vi, Js.subtract = Us, Js.toArray = xi, Js.toObject = ki, Js.toDate = wi, Js.toISOString = li, Js.inspect = ci, Js.toJSON = Ci, Js.toString = ai, Js.unix = bi, Js.valueOf = yi, Js.creationData = Ei, Js.year = vs, Js.isLeapYear = vt, Js.weekYear = Ii, Js.isoWeekYear = Pi, Js.quarter = Js.quarters = Li, Js.month = ht, Js.daysInMonth = dt, Js.week = Js.weeks = Dt, Js.isoWeek = Js.isoWeeks = Et, Js.weeksInYear = Oi, Js.isoWeeksInYear = Ai, Js.date = Gs, Js.day = Js.days = Lt, Js.weekday = jt, Js.isoWeekday = Yt, Js.dayOfYear = ji, Js.hour = Js.hours = Ds, Js.minute = Js.minutes = Ks, Js.second = Js.seconds = Xs, Js.millisecond = Js.milliseconds = Zs, Js.utcOffset = Oe, Js.utc = $e, Js.local = Le, Js.parseZone = je, Js.hasAlignedHourOffset = Ye, Js.isDST = He, Js.isLocal = We, Js.isUtcOffset = Re, Js.isUtc = ze, Js.isUTC = ze, Js.zoneAbbr = Hi, Js.zoneName = Fi, Js.dates = k("dates accessor is deprecated. Use date instead.", Gs), Js.months = k("months accessor is deprecated. Use month instead", ht), Js.years = k("years accessor is deprecated. Use year instead", vs), Js.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ne), Js.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Fe);
    var to = E.prototype;
    to.calendar = M, to.longDateFormat = I, to.invalidDate = P, to.ordinal = A, to.preparse = zi, to.postformat = zi, to.relativeTime = O, to.pastFuture = N, to.set = T, to.months = ot, to.monthsShort = rt, to.monthsParse = lt, to.monthsRegex = ft, to.monthsShortRegex = ut, to.week = Ct, to.firstDayOfYear = Tt, to.firstDayOfWeek = St, to.weekdays = Pt, to.weekdaysMin = Ot, to.weekdaysShort = At, to.weekdaysParse = $t, to.weekdaysRegex = Ht, to.weekdaysShortRegex = Ft, to.weekdaysMinRegex = Wt, to.isPM = Vt, to.meridiem = Gt, Zt("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(t) {
            var e = t % 10;
            return t + (1 === b(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        }
    }), t.lang = k("moment.lang is deprecated. Use moment.locale instead.", Zt), t.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ee);
    var eo = Math.abs,
        io = cn("ms"),
        no = cn("s"),
        so = cn("m"),
        oo = cn("h"),
        ro = cn("d"),
        ao = cn("w"),
        lo = cn("M"),
        co = cn("y"),
        ho = dn("milliseconds"),
        uo = dn("seconds"),
        fo = dn("minutes"),
        po = dn("hours"),
        mo = dn("days"),
        go = dn("months"),
        vo = dn("years"),
        _o = Math.round,
        yo = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        bo = Math.abs,
        wo = Te.prototype;
    return wo.isValid = Ce, wo.abs = Zi, wo.add = tn, wo.subtract = en, wo.as = an, wo.asMilliseconds = io, wo.asSeconds = no, wo.asMinutes = so, wo.asHours = oo, wo.asDays = ro, wo.asWeeks = ao, wo.asMonths = lo, wo.asYears = co, wo.valueOf = ln, wo._bubble = sn, wo.get = hn, wo.milliseconds = ho, wo.seconds = uo, wo.minutes = fo, wo.hours = po, wo.days = mo, wo.weeks = un, wo.months = go, wo.years = vo, wo.humanize = vn, wo.toISOString = _n, wo.toString = _n, wo.toJSON = _n, wo.locale = mi, wo.localeData = gi, wo.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", _n), wo.lang = Vs, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), X("x", Kn), X("X", Zn), et("X", function(t, e, i) {
        i._d = new Date(1e3 * parseFloat(t, 10))
    }), et("x", function(t, e, i) {
        i._d = new Date(b(t))
    }), t.version = "2.18.1", e(ye), t.fn = Js, t.min = we, t.max = xe, t.now = Fs, t.utc = d, t.unix = Wi, t.months = Vi, t.isDate = a, t.locale = Zt, t.invalid = m, t.duration = Be, t.isMoment = _, t.weekdays = Ki, t.parseZone = Ri, t.localeData = ee, t.isDuration = De, t.monthsShort = Gi, t.weekdaysMin = Xi, t.defineLocale = Jt, t.updateLocale = te, t.locales = ie, t.weekdaysShort = Qi, t.normalizeUnits = L, t.relativeTimeRounding = mn, t.relativeTimeThreshold = gn, t.calendarFormat = Qe, t.prototype = Js, t
}),
function(t, e) {
    if ("function" == typeof define && define.amd) define(["moment", "jquery"], function(t, i) {
        return i.fn || (i.fn = {}), e(t, i)
    });
    else if ("object" == typeof module && module.exports) {
        var i = "undefined" != typeof window ? window.jQuery : void 0;
        i || (i = require("jquery")).fn || (i.fn = {});
        var n = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment");
        module.exports = e(n, i)
    } else t.daterangepicker = e(t.moment, t.jQuery)
}(this, function(t, e) {
    var i = function(i, n, s) {
        if (this.parentEl = "body", this.element = e(i), this.startDate = t().startOf("day"), this.endDate = t().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = t().subtract(100, "year").format("YYYY"),
            this.maxYear = t().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
                direction: "ltr",
                format: t.localeData().longDateFormat("L"),
                separator: " - ",
                applyLabel: "Apply",
                cancelLabel: "Cancel",
                weekLabel: "W",
                customRangeLabel: "Custom Range",
                daysOfWeek: t.weekdaysMin(),
                monthNames: t.monthsShort(),
                firstDay: t.localeData().firstDayOfWeek()
            }, this.callback = function() {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof n && null !== n || (n = {}), "string" == typeof(n = e.extend(this.element.data(), n)).template || n.template instanceof e || (n.template = '<div class="daterangepicker"><div class="ranges"></div><div class="calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = n.parentEl && e(n.parentEl).length ? e(n.parentEl) : e(this.parentEl), this.container = e(n.template).appendTo(this.parentEl), "object" == typeof n.locale && ("string" == typeof n.locale.direction && (this.locale.direction = n.locale.direction), "string" == typeof n.locale.format && (this.locale.format = n.locale.format), "string" == typeof n.locale.separator && (this.locale.separator = n.locale.separator), "object" == typeof n.locale.daysOfWeek && (this.locale.daysOfWeek = n.locale.daysOfWeek.slice()), "object" == typeof n.locale.monthNames && (this.locale.monthNames = n.locale.monthNames.slice()), "number" == typeof n.locale.firstDay && (this.locale.firstDay = n.locale.firstDay), "string" == typeof n.locale.applyLabel && (this.locale.applyLabel = n.locale.applyLabel), "string" == typeof n.locale.cancelLabel && (this.locale.cancelLabel = n.locale.cancelLabel), "string" == typeof n.locale.weekLabel && (this.locale.weekLabel = n.locale.weekLabel), "string" == typeof n.locale.customRangeLabel)) {
            (u = document.createElement("textarea")).innerHTML = n.locale.customRangeLabel;
            var o = u.value;
            this.locale.customRangeLabel = o
        }
        if (this.container.addClass(this.locale.direction), "string" == typeof n.startDate && (this.startDate = t(n.startDate, this.locale.format)), "string" == typeof n.endDate && (this.endDate = t(n.endDate, this.locale.format)), "string" == typeof n.minDate && (this.minDate = t(n.minDate, this.locale.format)), "string" == typeof n.maxDate && (this.maxDate = t(n.maxDate, this.locale.format)), "object" == typeof n.startDate && (this.startDate = t(n.startDate)), "object" == typeof n.endDate && (this.endDate = t(n.endDate)), "object" == typeof n.minDate && (this.minDate = t(n.minDate)), "object" == typeof n.maxDate && (this.maxDate = t(n.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof n.applyButtonClasses && (this.applyButtonClasses = n.applyButtonClasses), "string" == typeof n.applyClass && (this.applyButtonClasses = n.applyClass), "string" == typeof n.cancelButtonClasses && (this.cancelButtonClasses = n.cancelButtonClasses), "string" == typeof n.cancelClass && (this.cancelButtonClasses = n.cancelClass), "object" == typeof n.maxSpan && (this.maxSpan = n.maxSpan), "object" == typeof n.dateLimit && (this.maxSpan = n.dateLimit), "string" == typeof n.opens && (this.opens = n.opens), "string" == typeof n.drops && (this.drops = n.drops), "boolean" == typeof n.showWeekNumbers && (this.showWeekNumbers = n.showWeekNumbers), "boolean" == typeof n.showISOWeekNumbers && (this.showISOWeekNumbers = n.showISOWeekNumbers), "string" == typeof n.buttonClasses && (this.buttonClasses = n.buttonClasses), "object" == typeof n.buttonClasses && (this.buttonClasses = n.buttonClasses.join(" ")), "boolean" == typeof n.showDropdowns && (this.showDropdowns = n.showDropdowns), "number" == typeof n.minYear && (this.minYear = n.minYear), "number" == typeof n.maxYear && (this.maxYear = n.maxYear), "boolean" == typeof n.showCustomRangeLabel && (this.showCustomRangeLabel = n.showCustomRangeLabel), "boolean" == typeof n.singleDatePicker && (this.singleDatePicker = n.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof n.timePicker && (this.timePicker = n.timePicker), "boolean" == typeof n.timePickerSeconds && (this.timePickerSeconds = n.timePickerSeconds), "number" == typeof n.timePickerIncrement && (this.timePickerIncrement = n.timePickerIncrement), "boolean" == typeof n.timePicker24Hour && (this.timePicker24Hour = n.timePicker24Hour), "boolean" == typeof n.autoApply && (this.autoApply = n.autoApply), "boolean" == typeof n.autoUpdateInput && (this.autoUpdateInput = n.autoUpdateInput), "boolean" == typeof n.linkedCalendars && (this.linkedCalendars = n.linkedCalendars), "function" == typeof n.isInvalidDate && (this.isInvalidDate = n.isInvalidDate), "function" == typeof n.isCustomDate && (this.isCustomDate = n.isCustomDate), "boolean" == typeof n.alwaysShowCalendars && (this.alwaysShowCalendars = n.alwaysShowCalendars), 0 != this.locale.firstDay)
            for (var r = this.locale.firstDay; 0 < r;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), r--;
        var a, l, c;
        if (void 0 === n.startDate && void 0 === n.endDate && e(this.element).is("input[type=text]")) {
            var h = e(this.element).val(),
                d = h.split(this.locale.separator);
            a = l = null, 2 == d.length ? (a = t(d[0], this.locale.format), l = t(d[1], this.locale.format)) : this.singleDatePicker && "" !== h && (a = t(h, this.locale.format), l = t(h, this.locale.format)), null !== a && null !== l && (this.setStartDate(a), this.setEndDate(l))
        }
        if ("object" == typeof n.ranges) {
            for (c in n.ranges) {
                a = "string" == typeof n.ranges[c][0] ? t(n.ranges[c][0], this.locale.format) : t(n.ranges[c][0]), l = "string" == typeof n.ranges[c][1] ? t(n.ranges[c][1], this.locale.format) : t(n.ranges[c][1]), this.minDate && a.isBefore(this.minDate) && (a = this.minDate.clone());
                var u, f = this.maxDate;
                if (this.maxSpan && f && a.clone().add(this.maxSpan).isAfter(f) && (f = a.clone().add(this.maxSpan)), f && l.isAfter(f) && (l = f.clone()), !(this.minDate && l.isBefore(this.minDate, this.timepicker ? "minute" : "day") || f && a.isAfter(f, this.timepicker ? "minute" : "day")))(u = document.createElement("textarea")).innerHTML = c, o = u.value, this.ranges[o] = [a, l]
            }
            var p = "<ul>";
            for (c in this.ranges) p += '<li data-range-key="' + c + '">' + c + "</li>";
            this.showCustomRangeLabel && (p += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), p += "</ul>", this.container.find(".ranges").prepend(p)
        }
        "function" == typeof s && (this.callback = s), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof n.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".calendar.left").addClass("single"), this.container.find(".calendar.left").show(), this.container.find(".calendar.right").hide(), this.timePicker || this.container.addClass("auto-apply")), (void 0 === n.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".calendar").on("click.daterangepicker", ".prev", e.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", e.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", e.proxy(this.clickDate, this)).on("change.daterangepicker", "select.yearselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", e.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", e.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", e.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", e.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": e.proxy(this.show, this),
            "focus.daterangepicker": e.proxy(this.show, this),
            "keyup.daterangepicker": e.proxy(this.elementChanged, this),
            "keydown.daterangepicker": e.proxy(this.keydown, this)
        }) : (this.element.on("click.daterangepicker", e.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", e.proxy(this.toggle, this))), this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
    };
    return i.prototype = {
        constructor: i,
        setStartDate: function(e) {
            "string" == typeof e && (this.startDate = t(e, this.locale.format)), "object" == typeof e && (this.startDate = t(e)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        setEndDate: function(e) {
            "string" == typeof e && (this.endDate = t(e, this.locale.format)), "object" == typeof e && (this.endDate = t(e)), this.timePicker || (this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        isInvalidDate: function() {
            return !1
        },
        isCustomDate: function() {
            return !1
        },
        updateView: function() {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        },
        updateMonthsInView: function() {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        },
        updateCalendars: function() {
            var t, e, i, n;
            this.timePicker && (this.endDate ? (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), i = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (n = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12), "AM" === n && 12 === t && (t = 0))) : (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), i = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (n = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12), "AM" === n && 12 === t && (t = 0))), this.leftCalendar.month.hour(t).minute(e).second(i), this.rightCalendar.month.hour(t).minute(e).second(i));
            this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        },
        renderCalendar: function(i) {
            var n, s = (n = "left" == i ? this.leftCalendar : this.rightCalendar).month.month(),
                o = n.month.year(),
                r = n.month.hour(),
                a = n.month.minute(),
                l = n.month.second(),
                c = t([o, s]).daysInMonth(),
                h = t([o, s, 1]),
                d = t([o, s, c]),
                u = t(h).subtract(1, "month").month(),
                f = t(h).subtract(1, "month").year(),
                p = t([f, u]).daysInMonth(),
                m = h.day();
            (n = []).firstDay = h, n.lastDay = d;
            for (var g = 0; g < 6; g++) n[g] = [];
            var v = p - m + this.locale.firstDay + 1;
            p < v && (v -= 7), m == this.locale.firstDay && (v = p - 6);
            for (var _ = t([f, u, v, 12, a, l]), y = (g = 0, 0), b = 0; g < 42; g++, y++, _ = t(_).add(24, "hour")) 0 < g && y % 7 == 0 && (y = 0, b++), n[b][y] = _.clone().hour(r).minute(a).second(l), _.hour(12), this.minDate && n[b][y].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && n[b][y].isBefore(this.minDate) && "left" == i && (n[b][y] = this.minDate.clone()), this.maxDate && n[b][y].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && n[b][y].isAfter(this.maxDate) && "right" == i && (n[b][y] = this.maxDate.clone());
            "left" == i ? this.leftCalendar.calendar = n : this.rightCalendar.calendar = n;
            var w = "left" == i ? this.minDate : this.startDate,
                x = this.maxDate,
                k = ("left" == i ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
            k += "<thead>", k += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (k += "<th></th>"), w && !w.isBefore(n.firstDay) || this.linkedCalendars && "left" != i ? k += "<th></th>" : k += '<th class="prev available"><span></span></th>';
            var C = this.locale.monthNames[n[1][1].month()] + n[1][1].format(" YYYY");
            if (this.showDropdowns) {
                for (var S = n[1][1].month(), T = n[1][1].year(), D = x && x.year() || this.maxYear, E = w && w.year() || this.minYear, M = T == E, I = T == D, P = '<select class="monthselect">', A = 0; A < 12; A++)(!M || A >= w.month()) && (!I || A <= x.month()) ? P += "<option value='" + A + "'" + (A === S ? " selected='selected'" : "") + ">" + this.locale.monthNames[A] + "</option>" : P += "<option value='" + A + "'" + (A === S ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[A] + "</option>";
                P += "</select>";
                for (var O = '<select class="yearselect">', N = E; N <= D; N++) O += '<option value="' + N + '"' + (N === T ? ' selected="selected"' : "") + ">" + N + "</option>";
                C = P + (O += "</select>")
            }
            if (k += '<th colspan="5" class="month">' + C + "</th>", x && !x.isAfter(n.lastDay) || this.linkedCalendars && "right" != i && !this.singleDatePicker ? k += "<th></th>" : k += '<th class="next available"><span></span></th>', k += "</tr>", k += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (k += '<th class="week">' + this.locale.weekLabel + "</th>"), e.each(this.locale.daysOfWeek, function(t, e) {
                    k += "<th>" + e + "</th>"
                }), k += "</tr>", k += "</thead>", k += "<tbody>", null == this.endDate && this.maxSpan) {
                var $ = this.startDate.clone().add(this.maxSpan).endOf("day");
                x && !$.isBefore(x) || (x = $)
            }
            for (b = 0; b < 6; b++) {
                for (k += "<tr>", this.showWeekNumbers ? k += '<td class="week">' + n[b][0].week() + "</td>" : this.showISOWeekNumbers && (k += '<td class="week">' + n[b][0].isoWeek() + "</td>"), y = 0; y < 7; y++) {
                    var L = [];
                    n[b][y].isSame(new Date, "day") && L.push("today"), 5 < n[b][y].isoWeekday() && L.push("weekend"), n[b][y].month() != n[1][1].month() && L.push("off"), this.minDate && n[b][y].isBefore(this.minDate, "day") && L.push("off", "disabled"), x && n[b][y].isAfter(x, "day") && L.push("off", "disabled"), this.isInvalidDate(n[b][y]) && L.push("off", "disabled"), n[b][y].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && L.push("active", "start-date"), null != this.endDate && n[b][y].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && L.push("active", "end-date"), null != this.endDate && n[b][y] > this.startDate && n[b][y] < this.endDate && L.push("in-range");
                    var j = this.isCustomDate(n[b][y]);
                    !1 !== j && ("string" == typeof j ? L.push(j) : Array.prototype.push.apply(L, j));
                    var Y = "",
                        H = !1;
                    for (g = 0; g < L.length; g++) Y += L[g] + " ", "disabled" == L[g] && (H = !0);
                    H || (Y += "available"), k += '<td class="' + Y.replace(/^\s+|\s+$/g, "") + '" data-title="r' + b + "c" + y + '">' + n[b][y].date() + "</td>"
                }
                k += "</tr>"
            }
            k += "</tbody>", k += "</table>", this.container.find(".calendar." + i + " .calendar-table").html(k)
        },
        renderTimePicker: function(t) {
            if ("right" != t || this.endDate) {
                var e, i, n, s = this.maxDate;
                if (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t) i = this.startDate.clone(), n = this.minDate;
                else if ("right" == t) {
                    i = this.endDate.clone(), n = this.startDate;
                    var o = this.container.find(".calendar.right .calendar-time");
                    if ("" != o.html() && (i.hour(i.hour() || o.find(".hourselect option:selected").val()), i.minute(i.minute() || o.find(".minuteselect option:selected").val()), i.second(i.second() || o.find(".secondselect option:selected").val()), !this.timePicker24Hour)) {
                        var r = o.find(".ampmselect option:selected").val();
                        "PM" === r && i.hour() < 12 && i.hour(i.hour() + 12), "AM" === r && 12 === i.hour() && i.hour(0)
                    }
                    i.isBefore(this.startDate) && (i = this.startDate.clone()), s && i.isAfter(s) && (i = s.clone())
                }
                e = '<select class="hourselect">';
                for (var a = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, c = a; c <= l; c++) {
                    var h = c;
                    this.timePicker24Hour || (h = 12 <= i.hour() ? 12 == c ? 12 : c + 12 : 12 == c ? 0 : c);
                    var d = i.clone().hour(h),
                        u = !1;
                    n && d.minute(59).isBefore(n) && (u = !0), s && d.minute(0).isAfter(s) && (u = !0), h != i.hour() || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + c + "</option>" : '<option value="' + c + '">' + c + "</option>" : e += '<option value="' + c + '" selected="selected">' + c + "</option>"
                }
                for (e += "</select> ", e += ': <select class="minuteselect">', c = 0; c < 60; c += this.timePickerIncrement) {
                    var f = c < 10 ? "0" + c : c;
                    d = i.clone().minute(c), u = !1, n && d.second(59).isBefore(n) && (u = !0), s && d.second(0).isAfter(s) && (u = !0), i.minute() != c || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + c + '">' + f + "</option>" : e += '<option value="' + c + '" selected="selected">' + f + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    for (e += ': <select class="secondselect">', c = 0; c < 60; c++) f = c < 10 ? "0" + c : c, d = i.clone().second(c), u = !1, n && d.isBefore(n) && (u = !0), s && d.isAfter(s) && (u = !0), i.second() != c || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + c + '">' + f + "</option>" : e += '<option value="' + c + '" selected="selected">' + f + "</option>";
                    e += "</select> "
                }
                if (!this.timePicker24Hour) {
                    e += '<select class="ampmselect">';
                    var p = "",
                        m = "";
                    n && i.clone().hour(12).minute(0).second(0).isBefore(n) && (p = ' disabled="disabled" class="disabled"'), s && i.clone().hour(0).minute(0).second(0).isAfter(s) && (m = ' disabled="disabled" class="disabled"'), 12 <= i.hour() ? e += '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + m + ">PM</option>" : e += '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + m + ">PM</option>", e += "</select>"
                }
                this.container.find(".calendar." + t + " .calendar-time").html(e)
            }
        },
        updateFormInputs: function() {
            this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")
        },
        move: function() {
            var t, i = {
                    top: 0,
                    left: 0
                },
                n = e(window).width();
            this.parentEl.is("body") || (i = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, n = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - i.top : this.element.offset().top + this.element.outerHeight() - i.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("drop-up"), "left" == this.opens ? (this.container.css({
                top: t,
                right: n - this.element.offset().left - this.element.outerWidth(),
                left: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : "center" == this.opens ? (this.container.css({
                top: t,
                left: this.element.offset().left - i.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                right: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : (this.container.css({
                top: t,
                left: this.element.offset().left - i.left,
                right: "auto"
            }), this.container.offset().left + this.container.outerWidth() > e(window).width() && this.container.css({
                left: "auto",
                right: 0
            }))
        },
        show: function() {
            this.isShowing || (this._outsideClickProxy = e.proxy(function(t) {
                this.outsideClick(t)
            }, this), e(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), e(window).on("resize.daterangepicker", e.proxy(function(t) {
                this.move(t)
            }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        },
        hide: function() {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), e(document).off(".daterangepicker"), e(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        },
        toggle: function() {
            this.isShowing ? this.hide() : this.show()
        },
        outsideClick: function(t) {
            var i = e(t.target);
            "focusin" == t.type || i.closest(this.element).length || i.closest(this.container).length || i.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        },
        showCalendars: function() {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        },
        hideCalendars: function() {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        },
        clickRange: function(t) {
            var e = t.target.getAttribute("data-range-key");
            if ((this.chosenLabel = e) == this.locale.customRangeLabel) this.showCalendars();
            else {
                var i = this.ranges[e];
                this.startDate = i[0], this.endDate = i[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
            }
        },
        clickPrev: function(t) {
            e(t.target).parents(".calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        },
        clickNext: function(t) {
            e(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        },
        hoverDate: function(t) {
            if (e(t.target).hasClass("available")) {
                var i = e(t.target).attr("data-title"),
                    n = i.substr(1, 1),
                    s = i.substr(3, 1),
                    o = e(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.calendar[n][s] : this.rightCalendar.calendar[n][s],
                    r = this.leftCalendar,
                    a = this.rightCalendar,
                    l = this.startDate;
                this.endDate || this.container.find(".calendar tbody td").each(function(t, i) {
                    if (!e(i).hasClass("week")) {
                        var n = e(i).attr("data-title"),
                            s = n.substr(1, 1),
                            c = n.substr(3, 1),
                            h = e(i).parents(".calendar").hasClass("left") ? r.calendar[s][c] : a.calendar[s][c];
                        h.isAfter(l) && h.isBefore(o) || h.isSame(o, "day") ? e(i).addClass("in-range") : e(i).removeClass("in-range")
                    }
                })
            }
        },
        clickDate: function(t) {
            if (e(t.target).hasClass("available")) {
                var i = e(t.target).attr("data-title"),
                    n = i.substr(1, 1),
                    s = i.substr(3, 1),
                    o = e(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.calendar[n][s] : this.rightCalendar.calendar[n][s];
                if (this.endDate || o.isBefore(this.startDate, "day")) {
                    if (this.timePicker) {
                        var r = parseInt(this.container.find(".left .hourselect").val(), 10);
                        this.timePicker24Hour || ("PM" === (c = this.container.find(".left .ampmselect").val()) && r < 12 && (r += 12), "AM" === c && 12 === r && (r = 0));
                        var a = parseInt(this.container.find(".left .minuteselect").val(), 10),
                            l = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                        o = o.clone().hour(r).minute(a).second(l)
                    }
                    this.endDate = null, this.setStartDate(o.clone())
                } else if (!this.endDate && o.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
                else {
                    var c;
                    if (this.timePicker) r = parseInt(this.container.find(".right .hourselect").val(), 10), this.timePicker24Hour || ("PM" === (c = this.container.find(".right .ampmselect").val()) && r < 12 && (r += 12), "AM" === c && 12 === r && (r = 0)), a = parseInt(this.container.find(".right .minuteselect").val(), 10), l = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, o = o.clone().hour(r).minute(a).second(l);
                    this.setEndDate(o.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                }
                this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), t.stopPropagation()
            }
        },
        calculateChosenLabel: function() {
            var t = !0,
                e = 0;
            for (var i in this.ranges) {
                if (this.timePicker) {
                    var n = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD hh:mm";
                    if (this.startDate.format(n) == this.ranges[i][0].format(n) && this.endDate.format(n) == this.ranges[i][1].format(n)) {
                        t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[i][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[i][1].format("YYYY-MM-DD")) {
                    t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                    break
                }
                e++
            }
            t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
        },
        clickApply: function() {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        },
        clickCancel: function() {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        },
        monthOrYearChanged: function(t) {
            var i = e(t.target).closest(".calendar").hasClass("left"),
                n = i ? "left" : "right",
                s = this.container.find(".calendar." + n),
                o = parseInt(s.find(".monthselect").val(), 10),
                r = s.find(".yearselect").val();
            i || (r < this.startDate.year() || r == this.startDate.year() && o < this.startDate.month()) && (o = this.startDate.month(), r = this.startDate.year()), this.minDate && (r < this.minDate.year() || r == this.minDate.year() && o < this.minDate.month()) && (o = this.minDate.month(), r = this.minDate.year()), this.maxDate && (r > this.maxDate.year() || r == this.maxDate.year() && o > this.maxDate.month()) && (o = this.maxDate.month(), r = this.maxDate.year()), i ? (this.leftCalendar.month.month(o).year(r), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(o).year(r), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        },
        timeChanged: function(t) {
            var i = e(t.target).closest(".calendar"),
                n = i.hasClass("left"),
                s = parseInt(i.find(".hourselect").val(), 10),
                o = parseInt(i.find(".minuteselect").val(), 10),
                r = this.timePickerSeconds ? parseInt(i.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var a = i.find(".ampmselect").val();
                "PM" === a && s < 12 && (s += 12), "AM" === a && 12 === s && (s = 0)
            }
            if (n) {
                var l = this.startDate.clone();
                l.hour(s), l.minute(o), l.second(r), this.setStartDate(l), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == l.format("YYYY-MM-DD") && this.endDate.isBefore(l) && this.setEndDate(l.clone())
            } else if (this.endDate) {
                var c = this.endDate.clone();
                c.hour(s), c.minute(o), c.second(r), this.setEndDate(c)
            }
            this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        },
        elementChanged: function() {
            if (this.element.is("input") && this.element.val().length) {
                var e = this.element.val().split(this.locale.separator),
                    i = null,
                    n = null;
                2 === e.length && (i = t(e[0], this.locale.format), n = t(e[1], this.locale.format)), (this.singleDatePicker || null === i || null === n) && (n = i = t(this.element.val(), this.locale.format)), i.isValid() && n.isValid() && (this.setStartDate(i), this.setEndDate(n), this.updateView())
            }
        },
        keydown: function(t) {
            9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide())
        },
        updateElement: function() {
            this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
        },
        remove: function() {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, e.fn.daterangepicker = function(t, n) {
        var s = e.extend(!0, {}, e.fn.daterangepicker.defaultOptions, t);
        return this.each(function() {
            var t = e(this);
            t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new i(t, s, n))
        }), this
    }, i
}),
function(t, e, i, n) {
    var s, o, r = 0,
        a = (s = n.userAgent, o = /msie\s\d+/i, 0 < s.search(o) && 9 > (s = (s = o.exec(s).toString()).split(" ")[1]) && (t("html").addClass("lt-ie9"), !0));
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        var e = this,
            i = [].slice;
        if ("function" != typeof e) throw new TypeError;
        var n = i.call(arguments, 1),
            s = function() {
                if (this instanceof s) {
                    (o = function() {}).prototype = e.prototype;
                    var o = new o,
                        r = e.apply(o, n.concat(i.call(arguments)));
                    return Object(r) === r ? r : o
                }
                return e.apply(t, n.concat(i.call(arguments)))
            };
        return s
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
        var i;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var n = Object(this),
            s = n.length >>> 0;
        if (0 === s) return -1;
        if (i = +e || 0, Infinity === Math.abs(i) && (i = 0), i >= s) return -1;
        for (i = Math.max(0 <= i ? i : s - Math.abs(i), 0); i < s;) {
            if (i in n && n[i] === t) return i;
            i++
        }
        return -1
    });
    var l = function(n, s, o) {
        this.VERSION = "2.1.2", this.input = n, this.plugin_count = o, this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0, this.raf_id = this.old_min_interval = null, this.is_update = this.is_key = this.no_diapason = this.force_redraw = this.dragging = !1, this.is_start = !0, this.is_click = this.is_resize = this.is_active = this.is_finish = !1, this.$cache = {
            win: t(i),
            body: t(e.body),
            input: t(n),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        }, this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        }, this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };
        var r, a = this.$cache.input;
        for (r in n = a.prop("value"), o = {
                type: "single",
                min: 10,
                max: 100,
                from: null,
                to: null,
                step: 1,
                min_interval: 0,
                max_interval: 0,
                drag_interval: !1,
                values: [],
                p_values: [],
                from_fixed: !1,
                from_min: null,
                from_max: null,
                from_shadow: !1,
                to_fixed: !1,
                to_min: null,
                to_max: null,
                to_shadow: !1,
                prettify_enabled: !0,
                prettify_separator: " ",
                prettify: null,
                force_edges: !1,
                keyboard: !1,
                keyboard_step: 5,
                grid: !1,
                grid_margin: !0,
                grid_num: 4,
                grid_snap: !1,
                hide_min_max: !1,
                hide_from_to: !1,
                prefix: "",
                postfix: "",
                max_postfix: "",
                decorate_both: !0,
                values_separator: " \u2014 ",
                input_values_separator: ";",
                disable: !1,
                onStart: null,
                onChange: null,
                onFinish: null,
                onUpdate: null
            }, (a = {
                type: a.data("type"),
                min: a.data("min"),
                max: a.data("max"),
                from: a.data("from"),
                to: a.data("to"),
                step: a.data("step"),
                min_interval: a.data("minInterval"),
                max_interval: a.data("maxInterval"),
                drag_interval: a.data("dragInterval"),
                values: a.data("values"),
                from_fixed: a.data("fromFixed"),
                from_min: a.data("fromMin"),
                from_max: a.data("fromMax"),
                from_shadow: a.data("fromShadow"),
                to_fixed: a.data("toFixed"),
                to_min: a.data("toMin"),
                to_max: a.data("toMax"),
                to_shadow: a.data("toShadow"),
                prettify_enabled: a.data("prettifyEnabled"),
                prettify_separator: a.data("prettifySeparator"),
                force_edges: a.data("forceEdges"),
                keyboard: a.data("keyboard"),
                keyboard_step: a.data("keyboardStep"),
                grid: a.data("grid"),
                grid_margin: a.data("gridMargin"),
                grid_num: a.data("gridNum"),
                grid_snap: a.data("gridSnap"),
                hide_min_max: a.data("hideMinMax"),
                hide_from_to: a.data("hideFromTo"),
                prefix: a.data("prefix"),
                postfix: a.data("postfix"),
                max_postfix: a.data("maxPostfix"),
                decorate_both: a.data("decorateBoth"),
                values_separator: a.data("valuesSeparator"),
                input_values_separator: a.data("inputValuesSeparator"),
                disable: a.data("disable")
            }).values = a.values && a.values.split(","), a) a.hasOwnProperty(r) && (a[r] || 0 === a[r] || delete a[r]);
        n && ((n = n.split(a.input_values_separator || s.input_values_separator || ";"))[0] && n[0] == +n[0] && (n[0] = +n[0]), n[1] && n[1] == +n[1] && (n[1] = +n[1]), s && s.values && s.values.length ? (o.from = n[0] && s.values.indexOf(n[0]), o.to = n[1] && s.values.indexOf(n[1])) : (o.from = n[0] && +n[0], o.to = n[1] && +n[1])), t.extend(o, s), t.extend(o, a), this.options = o, this.validate(), this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        }, this.init()
    };
    l.prototype = {
            init: function(t) {
                this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
            },
            append: function() {
                this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + '"></span>'), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.cont.removeClass("irs-disabled"), this.$cache.input[0].disabled = !1, this.bindEvents()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
            },
            setTopHandler: function() {
                var t = this.options.max,
                    e = this.options.to;
                this.options.from > this.options.min && e === t ? this.$cache.s_from.addClass("type_last") : e < t && this.$cache.s_to.addClass("type_last")
            },
            changeLevel: function(t) {
                switch (t) {
                    case "single":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
                        break;
                    case "from":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                        break;
                    case "to":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                        break;
                    case "both":
                        this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
                }
            },
            appendDisableMask: function() {
                this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
            },
            remove: function() {
                this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), a && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
            },
            bindEvents: function() {
                this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), a && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
            },
            pointerMove: function(t) {
                this.dragging && (this.coords.x_pointer = (t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc())
            },
            pointerUp: function(e) {
                this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, a && t("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (t.contains(this.$cache.cont[0], e.target) || this.dragging) && (this.is_finish = !0, this.callOnFinish()), this.dragging = !1)
            },
            pointerDown: function(e, i) {
                i.preventDefault();
                var n = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
                2 !== i.button && ("both" === e && this.setTempMinInterval(), e || (e = this.target), this.current_plugin = this.plugin_count, this.target = e, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = n - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(e), a && t("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
            },
            pointerClick: function(t, e) {
                e.preventDefault();
                var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
            },
            key: function(t, e) {
                if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                    switch (e.which) {
                        case 83:
                        case 65:
                        case 40:
                        case 37:
                            e.preventDefault(), this.moveByKey(!1);
                            break;
                        case 87:
                        case 68:
                        case 38:
                        case 39:
                            e.preventDefault(), this.moveByKey(!0)
                    }
                    return !0
                }
            },
            moveByKey: function(t) {
                var e = this.coords.p_pointer;
                e = t ? e + this.options.keyboard_step : e - this.options.keyboard_step;
                this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * e), this.is_key = !0, this.calc()
            },
            setMinMax: function() {
                this.options && (this.options.hide_min_max ? (this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none") : (this.options.values.length ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))) : (this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min)), this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max))), this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)))
            },
            setTempMinInterval: function() {
                var t = this.result.to - this.result.from;
                null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
            },
            restoreOriginalMinInterval: function() {
                null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
            },
            calc: function(t) {
                if (this.options && (this.calc_count++, (10 === this.calc_count || t) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                    switch (this.calcPointerPercent(), t = this.getHandleX(), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, t = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(t)), this.target) {
                        case "base":
                            var e = (this.options.max - this.options.min) / 100;
                            t = (this.result.from - this.options.min) / e, e = (this.result.to - this.options.min) / e, this.coords.p_single_real = this.toFixed(t), this.coords.p_from_real = this.toFixed(t), this.coords.p_to_real = this.toFixed(e), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                            break;
                        case "single":
                            if (this.options.from_fixed) break;
                            this.coords.p_single_real = this.convertToRealPercent(t), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            break;
                        case "from":
                            if (this.options.from_fixed) break;
                            this.coords.p_from_real = this.convertToRealPercent(t), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            break;
                        case "to":
                            if (this.options.to_fixed) break;
                            this.coords.p_to_real = this.convertToRealPercent(t), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            t = this.toFixed(t + .1 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(t) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(t) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both_one":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            var i = this.convertToRealPercent(t),
                                n = (t = this.result.to_percent - this.result.from_percent) / 2;
                            e = i - n, i = i + n;
                            0 > e && (i = (e = 0) + t), 100 < i && (e = (i = 100) - t), this.coords.p_from_real = this.calcWithStep(e), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(i), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                    }
                    "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
                }
            },
            calcPointerPercent: function() {
                this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
            },
            convertToRealPercent: function(t) {
                return t / (100 - this.coords.p_handle) * 100
            },
            convertToFakePercent: function(t) {
                return t / 100 * (100 - this.coords.p_handle)
            },
            getHandleX: function() {
                var t = 100 - this.coords.p_handle,
                    e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                return 0 > e ? e = 0 : e > t && (e = t), e
            },
            calcHandlePercent: function() {
                this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
            },
            chooseHandle: function(t) {
                return "single" === this.options.type ? "single" : t >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
            },
            calcMinMax: function() {
                this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
            },
            calcLabels: function() {
                this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
            },
            updateScene: function() {
                this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
            },
            drawHandles: function() {
                this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%"), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to)), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || this.$cache.input.trigger("change"), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_click = this.is_key = !1, this.callOnFinish()), this.is_finish = this.is_resize = this.is_update = !1), this.force_redraw = this.is_click = this.is_key = this.is_start = !1))
            },
            drawLabels: function() {
                if (this.options) {
                    var t, e = this.options.values.length,
                        i = this.options.p_values;
                    if (!this.options.hide_from_to)
                        if ("single" === this.options.type) e = e ? this.decorate(i[this.result.from]) : this.decorate(this._prettify(this.result.from), this.result.from), this.$cache.single.html(e), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible";
                        else {
                            e ? (this.options.decorate_both ? (e = this.decorate(i[this.result.from]), e += this.options.values_separator, e += this.decorate(i[this.result.to])) : e = this.decorate(i[this.result.from] + this.options.values_separator + i[this.result.to]), t = this.decorate(i[this.result.from]), i = this.decorate(i[this.result.to])) : (this.options.decorate_both ? (e = this.decorate(this._prettify(this.result.from), this.result.from), e += this.options.values_separator, e += this.decorate(this._prettify(this.result.to), this.result.to)) : e = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to), t = this.decorate(this._prettify(this.result.from), this.result.from), i = this.decorate(this._prettify(this.result.to), this.result.to)), this.$cache.single.html(e), this.$cache.from.html(t), this.$cache.to.html(i), this.calcLabels(), i = Math.min(this.labels.p_single_left, this.labels.p_from_left), e = this.labels.p_single_left + this.labels.p_single_fake, t = this.labels.p_to_left + this.labels.p_to_fake;
                            var n = Math.max(e, t);
                            this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target && (this.$cache.to[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", n = t) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", n = Math.max(e, t))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), this.$cache.min[0].style.visibility = i < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = n > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                        }
                }
            },
            drawShadow: function() {
                var t = this.options,
                    e = this.$cache,
                    i = "number" == typeof t.from_min && !isNaN(t.from_min),
                    n = "number" == typeof t.from_max && !isNaN(t.from_max),
                    s = "number" == typeof t.to_min && !isNaN(t.to_min),
                    o = "number" == typeof t.to_max && !isNaN(t.to_max);
                "single" === t.type ? t.from_shadow && (i || n) ? (i = this.convertToPercent(i ? t.from_min : t.min), n = this.convertToPercent(n ? t.from_max : t.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, e.shad_single[0].style.display = "block", e.shad_single[0].style.left = i + "%", e.shad_single[0].style.width = n + "%") : e.shad_single[0].style.display = "none" : (t.from_shadow && (i || n) ? (i = this.convertToPercent(i ? t.from_min : t.min), n = this.convertToPercent(n ? t.from_max : t.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, e.shad_from[0].style.display = "block", e.shad_from[0].style.left = i + "%", e.shad_from[0].style.width = n + "%") : e.shad_from[0].style.display = "none", t.to_shadow && (s || o) ? (s = this.convertToPercent(s ? t.to_min : t.min), t = this.convertToPercent(o ? t.to_max : t.max) - s, s = this.toFixed(s - this.coords.p_handle / 100 * s), t = this.toFixed(t - this.coords.p_handle / 100 * t), s += this.coords.p_handle / 2, e.shad_to[0].style.display = "block", e.shad_to[0].style.left = s + "%", e.shad_to[0].style.width = t + "%") : e.shad_to[0].style.display = "none")
            },
            callOnStart: function() {
                this.options.onStart && "function" == typeof this.options.onStart && this.options.onStart(this.result)
            },
            callOnChange: function() {
                this.options.onChange && "function" == typeof this.options.onChange && this.options.onChange(this.result)
            },
            callOnFinish: function() {
                this.options.onFinish && "function" == typeof this.options.onFinish && this.options.onFinish(this.result)
            },
            callOnUpdate: function() {
                this.options.onUpdate && "function" == typeof this.options.onUpdate && this.options.onUpdate(this.result)
            },
            toggleInput: function() {
                this.$cache.input.toggleClass("irs-hidden-input")
            },
            convertToPercent: function(t, e) {
                var i = this.options.max - this.options.min;
                return i ? this.toFixed((e ? t : t - this.options.min) / (i / 100)) : (this.no_diapason = !0, 0)
            },
            convertToValue: function(t) {
                var e, i, n = this.options.min,
                    s = this.options.max,
                    o = n.toString().split(".")[1],
                    r = s.toString().split(".")[1],
                    a = 0,
                    l = 0;
                return 0 === t ? this.options.min : 100 === t ? this.options.max : (o && (a = e = o.length), r && (a = i = r.length), e && i && (a = e >= i ? e : i), 0 > n && (n = +(n + (l = Math.abs(n))).toFixed(a), s = +(s + l).toFixed(a)), t = (s - n) / 100 * t + n, (n = this.options.step.toString().split(".")[1]) ? t = +t.toFixed(n.length) : (t /= this.options.step, t = +(t *= this.options.step).toFixed(0)), l && (t -= l), (l = n ? +t.toFixed(n.length) : this.toFixed(t)) < this.options.min ? l = this.options.min : l > this.options.max && (l = this.options.max), l)
            },
            calcWithStep: function(t) {
                var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
                return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e)
            },
            checkMinInterval: function(t, e, i) {
                var n = this.options;
                return n.min_interval ? (t = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - t < n.min_interval && (t = e - n.min_interval) : t - e < n.min_interval && (t = e + n.min_interval), this.convertToPercent(t)) : t
            },
            checkMaxInterval: function(t, e, i) {
                var n = this.options;
                return n.max_interval ? (t = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - t > n.max_interval && (t = e - n.max_interval) : t - e > n.max_interval && (t = e + n.max_interval), this.convertToPercent(t)) : t
            },
            checkDiapason: function(t, e, i) {
                t = this.convertToValue(t);
                var n = this.options;
                return "number" != typeof e && (e = n.min), "number" != typeof i && (i = n.max), t < e && (t = e), t > i && (t = i), this.convertToPercent(t)
            },
            toFixed: function(t) {
                return +(t = t.toFixed(9))
            },
            _prettify: function(t) {
                return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t
            },
            prettify: function(t) {
                return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
            },
            checkEdges: function(t, e) {
                return this.options.force_edges ? (0 > t ? t = 0 : t > 100 - e && (t = 100 - e), this.toFixed(t)) : this.toFixed(t)
            },
            validate: function() {
                var t, e, i = this.options,
                    n = this.result,
                    s = i.values,
                    o = s.length;
                if ("string" == typeof i.min && (i.min = +i.min), "string" == typeof i.max && (i.max = +i.max), "string" == typeof i.from && (i.from = +i.from), "string" == typeof i.to && (i.to = +i.to), "string" == typeof i.step && (i.step = +i.step), "string" == typeof i.from_min && (i.from_min = +i.from_min), "string" == typeof i.from_max && (i.from_max = +i.from_max), "string" == typeof i.to_min && (i.to_min = +i.to_min), "string" == typeof i.to_max && (i.to_max = +i.to_max), "string" == typeof i.keyboard_step && (i.keyboard_step = +i.keyboard_step), "string" == typeof i.grid_num && (i.grid_num = +i.grid_num), i.max < i.min && (i.max = i.min), o)
                    for (i.p_values = [], i.min = 0, i.max = o - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < o; e++) t = +s[e], isNaN(t) ? t = s[e] : (s[e] = t, t = this._prettify(t)), i.p_values.push(t);
                ("number" != typeof i.from || isNaN(i.from)) && (i.from = i.min), ("number" != typeof i.to || isNaN(i.from)) && (i.to = i.max), "single" === i.type ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max)) : ((i.from < i.min || i.from > i.max) && (i.from = i.min), (i.to > i.max || i.to < i.min) && (i.to = i.max), i.from > i.to && (i.from = i.to)), ("number" != typeof i.step || isNaN(i.step) || !i.step || 0 > i.step) && (i.step = 1), ("number" != typeof i.keyboard_step || isNaN(i.keyboard_step) || !i.keyboard_step || 0 > i.keyboard_step) && (i.keyboard_step = 5), "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min), "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max), "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min), "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max), n && (n.min !== i.min && (n.min = i.min), n.max !== i.max && (n.max = i.max), (n.from < n.min || n.from > n.max) && (n.from = i.from), (n.to < n.min || n.to > n.max) && (n.to = i.to)), ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || 0 > i.min_interval) && (i.min_interval = 0), ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || 0 > i.max_interval) && (i.max_interval = 0), i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min), i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min)
            },
            decorate: function(t, e) {
                var i = "",
                    n = this.options;
                return n.prefix && (i += n.prefix), i += t, n.max_postfix && (n.values.length && t === n.p_values[n.max] ? (i += n.max_postfix, n.postfix && (i += " ")) : e === n.max && (i += n.max_postfix, n.postfix && (i += " "))), n.postfix && (i += n.postfix), i
            },
            updateFrom: function() {
                this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
            },
            updateTo: function() {
                this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
            },
            updateResult: function() {
                this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
            },
            appendGrid: function() {
                if (this.options.grid) {
                    var t, e, i = this.options;
                    t = i.max - i.min;
                    var n, s, o = i.grid_num,
                        r = 0,
                        a = 0,
                        l = 4,
                        c = 0,
                        h = "";
                    for (this.calcGridMargin(), i.grid_snap ? (o = t / i.step, r = this.toFixed(i.step / (t / 100))) : r = this.toFixed(100 / o), 4 < o && (l = 3), 7 < o && (l = 2), 14 < o && (l = 1), 28 < o && (l = 0), t = 0; t < o + 1; t++) {
                        for (n = l, 100 < (a = this.toFixed(r * t)) && (a = 100, 0 > (n -= 2) && (n = 0)), this.coords.big[t] = a, s = (a - r * (t - 1)) / (n + 1), e = 1; e <= n && 0 !== a; e++) h += '<span class="irs-grid-pol small" style="left: ' + (c = this.toFixed(a - s * e)) + '%"></span>';
                        h += '<span class="irs-grid-pol" style="left: ' + a + '%"></span>', c = this.convertToValue(a), h += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + a + '%">' + (c = i.values.length ? i.p_values[c] : this._prettify(c)) + "</span>"
                    }
                    this.coords.big_num = Math.ceil(o + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(h), this.cacheGridLabels()
                }
            },
            cacheGridLabels: function() {
                var t, e, i = this.coords.big_num;
                for (e = 0; e < i; e++) t = this.$cache.grid.find(".js-grid-text-" + e), this.$cache.grid_labels.push(t);
                this.calcGridLabels()
            },
            calcGridLabels: function() {
                var t, e;
                e = [];
                var i = [],
                    n = this.coords.big_num;
                for (t = 0; t < n; t++) this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), e[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), i[t] = this.toFixed(e[t] + this.coords.big_p[t]);
                for (this.options.force_edges && (e[0] < -this.coords.grid_gap && (e[0] = -this.coords.grid_gap, i[0] = this.toFixed(e[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), i[n - 1] > 100 + this.coords.grid_gap && (i[n - 1] = 100 + this.coords.grid_gap, e[n - 1] = this.toFixed(i[n - 1] - this.coords.big_p[n - 1]), this.coords.big_x[n - 1] = this.toFixed(this.coords.big_p[n - 1] - this.coords.grid_gap))), this.calcGridCollision(2, e, i), this.calcGridCollision(4, e, i), t = 0; t < n; t++)(e = this.$cache.grid_labels[t][0]).style.marginLeft = -this.coords.big_x[t] + "%"
            },
            calcGridCollision: function(t, e, i) {
                var n, s, o = this.coords.big_num;
                for (n = 0; n < o && !((s = n + t / 2) >= o); n += t) this.$cache.grid_labels[s][0].style.visibility = i[n] <= e[s] ? "visible" : "hidden"
            },
            calcGridMargin: function() {
                this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
            },
            update: function(e) {
                this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.options = t.extend(this.options, e), this.validate(), this.updateResult(e), this.toggleInput(), this.remove(), this.init(!0))
            },
            reset: function() {
                this.input && (this.updateResult(), this.update())
            },
            destroy: function() {
                this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), t.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null)
            }
        }, t.fn.ionRangeSlider = function(e) {
            return this.each(function() {
                t.data(this, "ionRangeSlider") || t.data(this, "ionRangeSlider", new l(this, e, r++))
            })
        },
        function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !i.requestAnimationFrame; ++n) i.requestAnimationFrame = i[e[n] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[n] + "CancelAnimationFrame"] || i[e[n] + "CancelRequestAnimationFrame"];
            i.requestAnimationFrame || (i.requestAnimationFrame = function(e) {
                var n = (new Date).getTime(),
                    s = Math.max(0, 16 - (n - t)),
                    o = i.setTimeout(function() {
                        e(n + s)
                    }, s);
                return t = n + s, o
            }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        }()
}(jQuery, document, window, navigator),
function() {
    function t(e) {
        var i = t.modules[e];
        if (!i) throw new Error('failed to require "' + e + '"');
        return "exports" in i || "function" != typeof i.definition || (i.client = i.component = !0, i.definition.call(this, i.exports = {}, i), delete i.definition), i.exports
    }
    t.loader = "component", t.helper = {}, t.helper.semVerSort = function(t, e) {
        for (var i = t.version.split("."), n = e.version.split("."), s = 0; s < i.length; ++s) {
            var o = parseInt(i[s], 10),
                r = parseInt(n[s], 10);
            if (o !== r) return o > r ? 1 : -1;
            var a = i[s].substr(("" + o).length),
                l = n[s].substr(("" + r).length);
            if ("" === a && "" !== l) return 1;
            if ("" !== a && "" === l) return -1;
            if ("" !== a && "" !== l) return a > l ? 1 : -1
        }
        return 0
    }, t.latest = function(e, i) {
        function n(t) {
            throw new Error('failed to find latest module of "' + t + '"')
        }
        var s = /(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;
        /(.*)~(.*)/.test(e) || n(e);
        for (var o = Object.keys(t.modules), r = [], a = [], l = 0; l < o.length; l++) {
            var c = o[l];
            if (new RegExp(e + "@").test(c)) {
                var h = c.substr(e.length + 1);
                null != s.exec(c) ? r.push({
                    version: h,
                    name: c
                }) : a.push({
                    version: h,
                    name: c
                })
            }
        }
        if (0 === r.concat(a).length && n(e), r.length > 0) {
            var d = r.sort(t.helper.semVerSort).pop().name;
            return !0 === i ? d : t(d)
        }
        d = a.sort(function(t, e) {
            return t.name > e.name
        })[0].name;
        return !0 === i ? d : t(d)
    }, t.modules = {}, t.register = function(e, i) {
        t.modules[e] = {
            definition: i
        }
    }, t.define = function(e, i) {
        t.modules[e] = {
            exports: i
        }
    }, t.register("abpetkov~transitionize@0.0.3", function(t, e) {
        function i(t, e) {
            return this instanceof i ? (this.element = t, this.props = e || {}, void this.init()) : new i(t, e)
        }
        e.exports = i, i.prototype.isSafari = function() {
            return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
        }, i.prototype.init = function() {
            var t = [];
            for (var e in this.props) t.push(e + " " + this.props[e]);
            this.element.style.transition = t.join(", "), this.isSafari() && (this.element.style.webkitTransition = t.join(", "))
        }
    }), t.register("ftlabs~fastclick@v0.6.11", function(t, e) {
        function i(t) {
            "use strict";
            var e, n = this;
            if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = t, !t || !t.nodeType) throw new TypeError("Layer must be a document node");
            this.onClick = function() {
                return i.prototype.onClick.apply(n, arguments)
            }, this.onMouse = function() {
                return i.prototype.onMouse.apply(n, arguments)
            }, this.onTouchStart = function() {
                return i.prototype.onTouchStart.apply(n, arguments)
            }, this.onTouchMove = function() {
                return i.prototype.onTouchMove.apply(n, arguments)
            }, this.onTouchEnd = function() {
                return i.prototype.onTouchEnd.apply(n, arguments)
            }, this.onTouchCancel = function() {
                return i.prototype.onTouchCancel.apply(n, arguments)
            }, i.notNeeded(t) || (this.deviceIsAndroid && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, i, n) {
                var s = Node.prototype.removeEventListener;
                "click" === e ? s.call(t, e, i.hijacked || i, n) : s.call(t, e, i, n)
            }, t.addEventListener = function(e, i, n) {
                var s = Node.prototype.addEventListener;
                "click" === e ? s.call(t, e, i.hijacked || (i.hijacked = function(t) {
                    t.propagationStopped || i(t)
                }), n) : s.call(t, e, i, n)
            }), "function" == typeof t.onclick && (e = t.onclick, t.addEventListener("click", function(t) {
                e(t)
            }, !1), t.onclick = null))
        }
        i.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, i.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), i.prototype.deviceIsIOS4 = i.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), i.prototype.deviceIsIOSWithBadTarget = i.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), i.prototype.needsClick = function(t) {
            "use strict";
            switch (t.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (t.disabled) return !0;
                    break;
                case "input":
                    if (this.deviceIsIOS && "file" === t.type || t.disabled) return !0;
                    break;
                case "label":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }, i.prototype.needsFocus = function(t) {
            "use strict";
            switch (t.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !this.deviceIsAndroid;
                case "input":
                    switch (t.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className)
            }
        }, i.prototype.sendClick = function(t, e) {
            "use strict";
            var i, n;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
        }, i.prototype.determineEventType = function(t) {
            "use strict";
            return this.deviceIsAndroid && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }, i.prototype.focus = function(t) {
            "use strict";
            var e;
            this.deviceIsIOS && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        }, i.prototype.updateScrollParent = function(t) {
            "use strict";
            var e, i;
            if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
                i = t;
                do {
                    if (i.scrollHeight > i.offsetHeight) {
                        e = i, t.fastClickScrollParent = i;
                        break
                    }
                    i = i.parentElement
                } while (i)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }, i.prototype.getTargetElementFromEventTarget = function(t) {
            "use strict";
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, i.prototype.onTouchStart = function(t) {
            "use strict";
            var e, i, n;
            if (t.targetTouches.length > 1) return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], this.deviceIsIOS) {
                if ((n = window.getSelection()).rangeCount && !n.isCollapsed) return !0;
                if (!this.deviceIsIOS4) {
                    if (i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < 200 && t.preventDefault(), !0
        }, i.prototype.touchHasMoved = function(t) {
            "use strict";
            var e = t.changedTouches[0],
                i = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
        }, i.prototype.onTouchMove = function(t) {
            "use strict";
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
        }, i.prototype.findControl = function(t) {
            "use strict";
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, i.prototype.onTouchEnd = function(t) {
            "use strict";
            var e, i, n, s, o, r = this.targetElement;
            if (!this.trackingClick) return !0;
            if (t.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (o = t.changedTouches[0], (r = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || r).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (n = r.tagName.toLowerCase())) {
                if (e = this.findControl(r)) {
                    if (this.focus(r), this.deviceIsAndroid) return !1;
                    r = e
                }
            } else if (this.needsFocus(r)) return t.timeStamp - i > 100 || this.deviceIsIOS && window.top !== window && "input" === n ? (this.targetElement = null, !1) : (this.focus(r), this.deviceIsIOS4 && "select" === n || (this.targetElement = null, t.preventDefault()), !1);
            return !(!this.deviceIsIOS || this.deviceIsIOS4 || (s = r.fastClickScrollParent, !s || s.fastClickLastScrollTop === s.scrollTop)) || (this.needsClick(r) || (t.preventDefault(), this.sendClick(r, t)), !1)
        }, i.prototype.onTouchCancel = function() {
            "use strict";
            this.trackingClick = !1, this.targetElement = null
        }, i.prototype.onMouse = function(t) {
            "use strict";
            return !this.targetElement || (!!t.forwardedTouchEvent || (!(t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick)) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1)))
        }, i.prototype.onClick = function(t) {
            "use strict";
            var e;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), e)
        }, i.prototype.destroy = function() {
            "use strict";
            var t = this.layer;
            this.deviceIsAndroid && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, i.notNeeded = function(t) {
            "use strict";
            var e, n;
            if ("undefined" == typeof window.ontouchstart) return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!i.prototype.deviceIsAndroid) return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                    if (n > 31 && window.innerWidth <= window.screen.width) return !0
                }
            }
            return "none" === t.style.msTouchAction
        }, i.attach = function(t) {
            "use strict";
            return new i(t)
        }, "undefined" != typeof define && define.amd ? define(function() {
            "use strict";
            return i
        }) : void 0 !== e && e.exports ? (e.exports = i.attach, e.exports.FastClick = i) : window.FastClick = i
    }), t.register("component~indexof@0.0.3", function(t, e) {
        e.exports = function(t, e) {
            if (t.indexOf) return t.indexOf(e);
            for (var i = 0; i < t.length; ++i)
                if (t[i] === e) return i;
            return -1
        }
    }), t.register("component~classes@1.2.1", function(e, i) {
        function n(t) {
            if (!t) throw new Error("A DOM element reference is required");
            this.el = t, this.list = t.classList
        }
        var s = t("component~indexof@0.0.3"),
            o = /\s+/,
            r = Object.prototype.toString;
        i.exports = function(t) {
            return new n(t)
        }, n.prototype.add = function(t) {
            if (this.list) return this.list.add(t), this;
            var e = this.array();
            return ~s(e, t) || e.push(t), this.el.className = e.join(" "), this
        }, n.prototype.remove = function(t) {
            if ("[object RegExp]" == r.call(t)) return this.removeMatching(t);
            if (this.list) return this.list.remove(t), this;
            var e = this.array(),
                i = s(e, t);
            return ~i && e.splice(i, 1), this.el.className = e.join(" "), this
        }, n.prototype.removeMatching = function(t) {
            for (var e = this.array(), i = 0; i < e.length; i++) t.test(e[i]) && this.remove(e[i]);
            return this
        }, n.prototype.toggle = function(t, e) {
            return this.list ? (void 0 !== e ? e !== this.list.toggle(t, e) && this.list.toggle(t) : this.list.toggle(t), this) : (void 0 !== e ? e ? this.add(t) : this.remove(t) : this.has(t) ? this.remove(t) : this.add(t), this)
        }, n.prototype.array = function() {
            var t = this.el.className.replace(/^\s+|\s+$/g, "").split(o);
            return "" === t[0] && t.shift(), t
        }, n.prototype.has = n.prototype.contains = function(t) {
            return this.list ? this.list.contains(t) : !!~s(this.array(), t)
        }
    }), t.register("component~event@0.1.4", function(t) {
        var e = window.addEventListener ? "addEventListener" : "attachEvent",
            i = window.removeEventListener ? "removeEventListener" : "detachEvent",
            n = "addEventListener" !== e ? "on" : "";
        t.bind = function(t, i, s, o) {
            return t[e](n + i, s, o || !1), s
        }, t.unbind = function(t, e, s, o) {
            return t[i](n + e, s, o || !1), s
        }
    }), t.register("component~query@0.0.3", function(t, e) {
        function i(t, e) {
            return e.querySelector(t)
        }(t = e.exports = function(t, e) {
            return i(t, e = e || document)
        }).all = function(t, e) {
            return (e = e || document).querySelectorAll(t)
        }, t.engine = function(e) {
            if (!e.one) throw new Error(".one callback required");
            if (!e.all) throw new Error(".all callback required");
            return i = e.one, t.all = e.all, t
        }
    }), t.register("component~matches-selector@0.1.5", function(e, i) {
        function n(t, e) {
            if (!t || 1 !== t.nodeType) return !1;
            if (r) return r.call(t, e);
            for (var i = s.all(e, t.parentNode), n = 0; n < i.length; ++n)
                if (i[n] == t) return !0;
            return !1
        }
        var s = t("component~query@0.0.3"),
            o = Element.prototype,
            r = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector;
        i.exports = n
    }), t.register("component~closest@0.1.4", function(e, i) {
        var n = t("component~matches-selector@0.1.5");
        i.exports = function(t, e, i, s) {
            for (t = i ? {
                    parentNode: t
                } : t, s = s || document;
                (t = t.parentNode) && t !== document;) {
                if (n(t, e)) return t;
                if (t === s) return
            }
        }
    }), t.register("component~delegate@0.2.3", function(e) {
        var i = t("component~closest@0.1.4"),
            n = t("component~event@0.1.4");
        e.bind = function(t, e, s, o, r) {
            return n.bind(t, s, function(n) {
                var s = n.target || n.srcElement;
                n.delegateTarget = i(s, e, !0, t), n.delegateTarget && o.call(t, n)
            }, r)
        }, e.unbind = function(t, e, i, s) {
            n.unbind(t, e, i, s)
        }
    }), t.register("component~events@1.0.9", function(e, i) {
        function n(t, e) {
            if (!(this instanceof n)) return new n(t, e);
            if (!t) throw new Error("element required");
            if (!e) throw new Error("object required");
            this.el = t, this.obj = e, this._events = {}
        }

        function s(t) {
            var e = t.split(/ +/);
            return {
                name: e.shift(),
                selector: e.join(" ")
            }
        }
        var o = t("component~event@0.1.4"),
            r = t("component~delegate@0.2.3");
        i.exports = n, n.prototype.sub = function(t, e, i) {
            this._events[t] = this._events[t] || {}, this._events[t][e] = i
        }, n.prototype.bind = function(t, e) {
            function i() {
                var t = [].slice.call(arguments).concat(h);
                l[e].apply(l, t)
            }
            var n = s(t),
                a = this.el,
                l = this.obj,
                c = n.name,
                h = (e = e || "on" + c, [].slice.call(arguments, 2));
            return n.selector ? i = r.bind(a, n.selector, c, i) : o.bind(a, c, i), this.sub(c, e, i), i
        }, n.prototype.unbind = function(t, e) {
            if (0 == arguments.length) return this.unbindAll();
            if (1 == arguments.length) return this.unbindAllOf(t);
            var i = this._events[t];
            if (i) {
                var n = i[e];
                n && o.unbind(this.el, t, n)
            }
        }, n.prototype.unbindAll = function() {
            for (var t in this._events) this.unbindAllOf(t)
        }, n.prototype.unbindAllOf = function(t) {
            var e = this._events[t];
            if (e)
                for (var i in e) this.unbind(t, i)
        }
    }), t.register("switchery", function(e, i) {
        function n(t, e) {
            if (!(this instanceof n)) return new n(t, e);
            for (var i in this.element = t, this.options = e || {}, l) null == this.options[i] && (this.options[i] = l[i]);
            null != this.element && "checkbox" == this.element.type && this.init(), !0 === this.isDisabled() && this.disable()
        }
        var s = t("abpetkov~transitionize@0.0.3"),
            o = t("ftlabs~fastclick@v0.6.11"),
            r = t("component~classes@1.2.1"),
            a = t("component~events@1.0.9");
        i.exports = n;
        var l = {
            color: "#acd373",
            secondaryColor: "#dfdfdf",
            jackColor: "#fff",
            jackSecondaryColor: null,
            className: "switchery",
            disabled: !1,
            disabledOpacity: .5,
            speed: "0.4s",
            size: "default"
        };
        n.prototype.hide = function() {
            this.element.style.display = "none"
        }, n.prototype.show = function() {
            var t = this.create();
            this.insertAfter(this.element, t)
        }, n.prototype.create = function() {
            return this.switcher = document.createElement("span"), this.jack = document.createElement("small"), this.switcher.appendChild(this.jack), this.switcher.className = this.options.className, this.events = a(this.switcher, this), this.switcher
        }, n.prototype.insertAfter = function(t, e) {
            t.parentNode.insertBefore(e, t.nextSibling)
        }, n.prototype.setPosition = function(t) {
            var e = this.isChecked(),
                i = this.switcher,
                n = this.jack;
            t && e ? e = !1 : t && !e && (e = !0), !0 === e ? (this.element.checked = !0, window.getComputedStyle ? n.style.left = parseInt(window.getComputedStyle(i).width) - parseInt(window.getComputedStyle(n).width) + "px" : n.style.left = parseInt(i.currentStyle.width) - parseInt(n.currentStyle.width) + "px", this.options.color && this.colorize(), this.setSpeed()) : (n.style.left = 0, this.element.checked = !1, this.switcher.style.boxShadow = "inset 0 0 0 0 " + this.options.secondaryColor, this.switcher.style.borderColor = this.options.secondaryColor, this.switcher.style.backgroundColor = this.options.secondaryColor !== l.secondaryColor ? this.options.secondaryColor : "#fff", this.jack.style.backgroundColor = this.options.jackSecondaryColor !== this.options.jackColor ? this.options.jackSecondaryColor : this.options.jackColor, this.setSpeed())
        }, n.prototype.setSpeed = function() {
            var t = {},
                e = {
                    "background-color": this.options.speed,
                    left: this.options.speed.replace(/[a-z]/, "") / 2 + "s"
                };
            t = this.isChecked() ? {
                border: this.options.speed,
                "box-shadow": this.options.speed,
                "background-color": 3 * this.options.speed.replace(/[a-z]/, "") + "s"
            } : {
                border: this.options.speed,
                "box-shadow": this.options.speed
            }, s(this.switcher, t), s(this.jack, e)
        }, n.prototype.setSize = function() {
            var t = "switchery-small",
                e = "switchery-default",
                i = "switchery-large";
            switch (this.options.size) {
                case "small":
                    r(this.switcher).add(t);
                    break;
                case "large":
                    r(this.switcher).add(i);
                    break;
                default:
                    r(this.switcher).add(e)
            }
        }, n.prototype.colorize = function() {
            var t = this.switcher.offsetHeight / 2;
            this.switcher.style.backgroundColor = this.options.color, this.switcher.style.borderColor = this.options.color, this.switcher.style.boxShadow = "inset 0 0 0 " + t + "px " + this.options.color, this.jack.style.backgroundColor = this.options.jackColor
        }, n.prototype.handleOnchange = function() {
            if (document.dispatchEvent) {
                var t = document.createEvent("HTMLEvents");
                t.initEvent("change", !0, !0), this.element.dispatchEvent(t)
            } else this.element.fireEvent("onchange")
        }, n.prototype.handleChange = function() {
            var t = this,
                e = this.element;
            e.addEventListener ? e.addEventListener("change", function() {
                t.setPosition()
            }) : e.attachEvent("onchange", function() {
                t.setPosition()
            })
        }, n.prototype.handleClick = function() {
            var t = this.switcher;
            o(t), this.events.bind("click", "bindClick")
        }, n.prototype.bindClick = function() {
            var t = "label" !== this.element.parentNode.tagName.toLowerCase();
            this.setPosition(t), this.handleOnchange(this.element.checked)
        }, n.prototype.markAsSwitched = function() {
            this.element.setAttribute("data-switchery", !0)
        }, n.prototype.markedAsSwitched = function() {
            return this.element.getAttribute("data-switchery")
        }, n.prototype.init = function() {
            this.hide(), this.show(), this.setSize(), this.setPosition(), this.markAsSwitched(), this.handleChange(), this.handleClick()
        }, n.prototype.isChecked = function() {
            return this.element.checked
        }, n.prototype.isDisabled = function() {
            return this.options.disabled || this.element.disabled || this.element.readOnly
        }, n.prototype.destroy = function() {
            this.events.unbind()
        }, n.prototype.enable = function() {
            this.options.disabled && (this.options.disabled = !1), this.element.disabled && (this.element.disabled = !1), this.element.readOnly && (this.element.readOnly = !1), this.switcher.style.opacity = 1, this.events.bind("click", "bindClick")
        }, n.prototype.disable = function() {
            this.options.disabled || (this.options.disabled = !0), this.element.disabled || (this.element.disabled = !0), this.element.readOnly || (this.element.readOnly = !0), this.switcher.style.opacity = this.options.disabledOpacity, this.destroy()
        }
    }), "object" == typeof exports ? module.exports = t("switchery") : "function" == typeof define && define.amd ? define("Switchery", [], function() {
        return t("switchery")
    }) : (this || window).Switchery = t("switchery")
}(),
/*!
 * jquery.instagramFeed
 *
 * @version 1.0
 *
 * @author Javier Sanahuja Liebana <bannss1@gmail.com>
 *
 * https://github.com/BanNsS1/jquery.instagramFeed
 *
 */
function(t) {
    var e = {
        username: "",
        container: "",
        display_profile: !0,
        display_biography: !0,
        display_gallery: !0,
        get_raw_json: !1,
        callback: null,
        styling: !0,
        items: 8,
        items_per_row: 4,
        margin: .5
    };
    t.instagramFeed = function(i) {
        "" == (i = t.fn.extend({}, e, i)).username && "" == i.tag ? console.log("Instagram Feed: Error, no username or tag found.") : i.get_raw_json || "" != i.container ? i.get_raw_json && null == i.callback ? console.log("Instagram Feed: Error, no callback defined to get the raw json") : t.get("https://www.instagram.com/" + i.username, function(e) {
            if (e = (e = (e = (e = e.split("window._sharedData = "))[1].split("</script>"))[0]).substr(0, e.length - 1), e = (e = JSON.parse(e)).entry_data.ProfilePage[0].graphql.user, i.get_raw_json) i.callback(JSON.stringify({
                id: e.id,
                username: e.username,
                full_name: e.full_name,
                is_private: e.is_private,
                is_verified: e.is_verified,
                biography: e.biography,
                followed_by: e.edge_followed_by.count,
                following: e.edge_follow.count,
                images: e.edge_owner_to_timeline_media.edges
            }));
            else {
                var n = "",
                    s = "",
                    o = "",
                    r = "",
                    a = "";
                i.styling && (n = " style='text-align:center;'", s = " style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'", o = " style='font-size:1.2em;'", r = " style='font-size:1em;'", a = " style='margin:" + i.margin + "% " + i.margin + "%;width:" + (100 - 2 * i.margin * i.items_per_row) / i.items_per_row + "%;float:left;'");
                var l = "";
                if (i.display_profile && (l = l + "<div class='instagram_profile'" + n + ">\t<img class='instagram_profile_image' src='" + e.profile_pic_url + "' alt='" + i.username + " profile pic'" + s + " />", l += "\t<p class='instagram_username'" + o + ">@" + e.full_name + " (<a href='https://www.instagram.com/" + i.username + "'>@" + i.username + "</a>)</p>"), i.display_biography && (l += "\t<p class='instagram_biography'" + r + ">" + e.biography + "</p>"), i.display_profile && (l += "</div>"), i.display_gallery)
                    if (e.is_private) l += "<p class='instagram_private'><strong>This profile is private</strong></p>";
                    else {
                        for (e = e.edge_owner_to_timeline_media.edges, max = e.length > i.items ? i.items : e.length, l += "<div class='instagram_gallery'>", n = 0; n < max; n++) l += "<a href='https://www.instagram.com/p/" + e[n].node.shortcode + "' target='_blank'>", l += "\t<img src='" + e[n].node.thumbnail_src + "' alt='" + i.username + " instagram image " + n + "'" + a + " />", l += "</a>";
                        l += "</div>"
                    } t(i.container).html(l)
            }
        }) : console.log("Instagram Feed: Error, no container found.")
    }
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        t(e.target).prev(".card-header").find("i.indicator").toggleClass("ti-minus ti-plus")
    }

    function i() {
        t(".panel-dropdown").removeClass("active")
    }
    t(window).on("load", function() {
        t('[data-loader="circle-side"]').fadeOut(), t("#preloader").delay(350).fadeOut("slow"), t("body").delay(350), t(".hero_in h1,.hero_in form").addClass("animated"), t(".hero_single, .hero_in").addClass("start_bg_zoom"), t(window).scroll()
    }), t(window).on("scroll", function() {
        t(this).scrollTop() > 1 ? t(".header").addClass("sticky") : t(".header").removeClass("sticky")
    }), t("#sidebar").theiaStickySidebar({
        additionalMarginTop: 150
    });
    var n = t("nav#menu").mmenu({
            extensions: ["pagedim-black"],
            counters: !0,
            keyboardNavigation: {
                enable: !0,
                enhance: !0
            },
            navbar: {
                title: "MENU"
            },
            navbars: [{
                position: "bottom",
                content: ["\xa9 2019 MuslimPergi"]
            }]
        }, {
            clone: !0,
            classNames: {
                fixedElements: {
                    fixed: "menu_fixed",
                    sticky: "sticky"
                }
            }
        }),
        s = t("#hamburger"),
        o = n.data("mmenu");
    s.on("click", function() {
        o.open()
    }), o.bind("open:finish", function() {
        setTimeout(function() {
            s.addClass("is-active")
        }, 100)
    }), o.bind("close:finish", function() {
        setTimeout(function() {
            s.removeClass("is-active")
        }, 100)
    }), new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: function() {},
        scrollContainer: null
    }).init(), t('a[href^="#"].btn_explore').on("click", function(e) {
        e.preventDefault();
        var i = this.hash,
            n = t(i);
        t("html, body").stop().animate({
            scrollTop: n.offset().top
        }, 800, "swing", function() {
            window.location.hash = i
        })
    }), t(".video").magnificPopup({
        type: "iframe"
    }), t(".magnific-gallery").each(function() {
        t(this).magnificPopup({
            delegate: "a",
            type: "image",
            preloader: !0,
            gallery: {
                enabled: !0
            },
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
                }
            },
            closeOnContentClick: !0,
            midClick: !0
        })
    }), t("#sign-in").magnificPopup({
        type: "inline",
        fixedContentPos: !0,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
        mainClass: "my-mfp-zoom-in"
    }), t("#password").hidePassword("focus", {
        toggle: {
            className: "my-toggle"
        }
    }), t("#forgot").click(function() {
        t("#forgot_pw").fadeToggle("fast")
    }), t(".accordion_2").on("hidden.bs.collapse shown.bs.collapse", e), t(".custom-search-input-2 select, .custom-select-form select").niceSelect(), t("input.icheck").iCheck({
        checkboxClass: "icheckbox_square-grey",
        radioClass: "iradio_square-grey"
    }), Array.prototype.slice.call(document.querySelectorAll(".js-switch")).forEach(function(t) {
        new Switchery(t, {
            size: "small"
        })
    }), t(".wish_bt").on("click", function(e) {
        e.preventDefault(), t(this).toggleClass("liked")
    }), t(window).bind("load resize", function() {
        t(window).width();
        t(this).width() < 991 ? t(".collapse#collapseFilters").removeClass("show") : t(".collapse#collapseFilters").addClass("show")
    }), t(window).on("scroll", function() {
        0 != t(this).scrollTop() ? t("#toTop").fadeIn() : t("#toTop").fadeOut()
    }), t("#toTop").on("click", function() {
        t("body,html").animate({
            scrollTop: 0
        }, 500)
    }), t("#carousel").owlCarousel({
        center: !0,
        items: 2,
        loop: !0,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                dots: !1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    }), t("#reccomended").owlCarousel({
        center: !0,
        items: 2,
        loop: !0,
        margin: 0,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    }), t(window).bind("load resize", function() {
        t(window).width() <= 991 ? t(".sticky_horizontal").stick_in_parent({
            offset_top: 50
        }) : t(".sticky_horizontal").stick_in_parent({
            offset_top: 67
        })
    });
    var r = t(".secondary_nav");
    r.find("a").on("click", function(e) {
        e.preventDefault();
        var i = this.hash,
            n = t(i);
        t("html, body").animate({
            scrollTop: n.offset().top - 138
        }, 800, "swing")
    }), r.find("ul li a").on("click", function() {
        r.find("ul li a.active").removeClass("active"), t(this).addClass("active")
    }), t('#faq_box a[href^="#"]').on("click", function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var e = t(this.hash);
            if ((e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")).length) return t("html,body").animate({
                scrollTop: e.offset().top - 185
            }, 800), !1
        }
    }), t("ul#cat_nav li a").on("click", function() {
        t("ul#cat_nav li a.active").removeClass("active"), t(this).addClass("active")
    }), t(".btn_map, .btn_map_in").on("click", function() {
        var e = t(this);
        e.text() == e.data("text-swap") ? e.text(e.data("text-original")) : e.text(e.data("text-swap")), t("html, body").animate({
            scrollTop: t("body").offset().top + 385
        }, 600)
    }), t(".panel-dropdown a").on("click", function(e) {
        t(this).parent().is(".active") ? i() : (i(), t(this).parent().addClass("active")), e.preventDefault()
    });
    var a = !1;
    t(".panel-dropdown").hover(function() {
        a = !0
    }, function() {
        a = !1
    }), t("body").mouseup(function() {
        a || i()
    }), t(".dropdown-user").hover(function() {
        t(this).find(".dropdown-menu").stop(!0, !0).delay(50).fadeIn(300)
    }, function() {
        t(this).find(".dropdown-menu").stop(!0, !0).delay(50).fadeOut(300)
    })
}(window.jQuery), jQuery(document).ready(function() {
    $("#newsletter_form").submit(function() {
        var t = $(this).attr("action");
        return $("#message-newsletter").slideUp(750, function() {
            $("#message-newsletter").hide(), $("#submit-newsletter").after('<i class="icon-spin4 animate-spin loader"></i>').attr("disabled", "disabled"), $.post(t, {
                email_newsletter: $("#email_newsletter").val()
            }, function(t) {
                document.getElementById("message-newsletter").innerHTML = t, $("#message-newsletter").slideDown("slow"), $("#newsletter_form .loader").fadeOut("slow", function() {
                    $(this).remove()
                }), $("#submit-newsletter").removeAttr("disabled"), null != t.match("success") && $("#newsletter_form").slideUp("slow")
            })
        }), !1
    })
}), jQuery(document).on("ready", function() {
    $("#contactform").submit(function() {
        var t = $(this).attr("action");
        return $("#message-contact").slideUp(750, function() {
            $("#message-contact").hide(), $("#submit-contact").after('<i class="icon-spin4 animate-spin loader"></i>').attr("disabled", "disabled"), $.post(t, {
                name_contact: $("#name_contact").val(),
                lastname_contact: $("#lastname_contact").val(),
                email_contact: $("#email_contact").val(),
                phone_contact: $("#phone_contact").val(),
                message_contact: $("#message_contact").val(),
                verify_contact: $("#verify_contact").val()
            }, function(t) {
                document.getElementById("message-contact").innerHTML = t, $("#message-contact").slideDown("slow"), $("#contactform .loader").fadeOut("slow", function() {
                    $(this).remove()
                }), $("#submit-contact").removeAttr("disabled"), null != t.match("success") && $("#contactform").slideUp("slow")
            })
        }), !1
    })
}), $(function() {
    "use strict";
    $('input[name="dates"]').daterangepicker({
        autoUpdateInput: !1,
        locale: {
            cancelLabel: "Clear"
        }
    }), $('input[name="dates"]').on("apply.daterangepicker", function(t, e) {
        $(this).val(e.startDate.format("MM-DD-YY") + " > " + e.endDate.format("MM-DD-YY"))
    }), $('input[name="dates"]').on("cancel.daterangepicker", function() {
        $(this).val("")
    }), $("#alert").fadeTo(5e3, 500).slideUp(1e3, function() {
        $("#alert").slideUp(500)
    }), $("#notice").fadeTo(5e3, 500).slideUp(1e3, function() {
        $("#notice").slideUp(500)
    })
});