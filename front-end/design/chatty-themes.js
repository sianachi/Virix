function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0,
    });
}
function t(e) {
    return e && e.__esModule ? e.default : e;
}
var n = globalThis,
    r = {},
    l = {},
    a = n.parcelRequireddea;
null == a &&
    (((a = function (e) {
        if (e in r) return r[e].exports;
        if (e in l) {
            var t = l[e];
            delete l[e];
            var n = { id: e, exports: {} };
            return (
                (r[e] = n),
                t.call(n.exports, n, n.exports),
                n.exports
            );
        }
        var a = Error("Cannot find module '" + e + "'");
        throw ((a.code = "MODULE_NOT_FOUND"), a);
    }).register = function (e, t) {
        l[e] = t;
    }),
    (n.parcelRequireddea = a));
var o = a.register;
(o("j8mK4", function (t, n) {
    (e(
        t.exports,
        "Fragment",
        () => r,
        (e) => (r = e),
    ),
        e(
            t.exports,
            "jsx",
            () => l,
            (e) => (l = e),
        ),
        e(
            t.exports,
            "jsxs",
            () => a,
            (e) => (a = e),
        ));
    var r,
        l,
        a,
        o = Symbol.for("react.transitional.element");
    function i(e, t, n) {
        var r = null;
        if (
            (void 0 !== n && (r = "" + n),
            void 0 !== t.key && (r = "" + t.key),
            "key" in t)
        )
            for (var l in ((n = {}), t))
                "key" !== l && (n[l] = t[l]);
        else n = t;
        return {
            $$typeof: o,
            type: e,
            key: r,
            ref: void 0 !== (t = n.ref) ? t : null,
            props: n,
        };
    }
    ((r = Symbol.for("react.fragment")), (l = i), (a = i));
}),
    o("5iduw", function (t, n) {
        (e(
            t.exports,
            "Activity",
            () => r,
            (e) => (r = e),
        ),
            e(
                t.exports,
                "Children",
                () => l,
                (e) => (l = e),
            ),
            e(
                t.exports,
                "Component",
                () => a,
                (e) => (a = e),
            ),
            e(
                t.exports,
                "Fragment",
                () => o,
                (e) => (o = e),
            ),
            e(
                t.exports,
                "Profiler",
                () => i,
                (e) => (i = e),
            ),
            e(
                t.exports,
                "PureComponent",
                () => s,
                (e) => (s = e),
            ),
            e(
                t.exports,
                "StrictMode",
                () => u,
                (e) => (u = e),
            ),
            e(
                t.exports,
                "Suspense",
                () => c,
                (e) => (c = e),
            ),
            e(
                t.exports,
                "__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",
                () => d,
                (e) => (d = e),
            ),
            e(
                t.exports,
                "__COMPILER_RUNTIME",
                () => f,
                (e) => (f = e),
            ),
            e(
                t.exports,
                "cache",
                () => p,
                (e) => (p = e),
            ),
            e(
                t.exports,
                "cacheSignal",
                () => m,
                (e) => (m = e),
            ),
            e(
                t.exports,
                "cloneElement",
                () => h,
                (e) => (h = e),
            ),
            e(
                t.exports,
                "createContext",
                () => g,
                (e) => (g = e),
            ),
            e(
                t.exports,
                "createElement",
                () => y,
                (e) => (y = e),
            ),
            e(
                t.exports,
                "createRef",
                () => b,
                (e) => (b = e),
            ),
            e(
                t.exports,
                "forwardRef",
                () => v,
                (e) => (v = e),
            ),
            e(
                t.exports,
                "isValidElement",
                () => x,
                (e) => (x = e),
            ),
            e(
                t.exports,
                "lazy",
                () => k,
                (e) => (k = e),
            ),
            e(
                t.exports,
                "memo",
                () => w,
                (e) => (w = e),
            ),
            e(
                t.exports,
                "startTransition",
                () => S,
                (e) => (S = e),
            ),
            e(
                t.exports,
                "unstable_useCacheRefresh",
                () => E,
                (e) => (E = e),
            ),
            e(
                t.exports,
                "use",
                () => C,
                (e) => (C = e),
            ),
            e(
                t.exports,
                "useActionState",
                () => N,
                (e) => (N = e),
            ),
            e(
                t.exports,
                "useCallback",
                () => z,
                (e) => (z = e),
            ),
            e(
                t.exports,
                "useContext",
                () => F,
                (e) => (F = e),
            ),
            e(
                t.exports,
                "useDebugValue",
                () => P,
                (e) => (P = e),
            ),
            e(
                t.exports,
                "useDeferredValue",
                () => _,
                (e) => (_ = e),
            ),
            e(
                t.exports,
                "useEffect",
                () => T,
                (e) => (T = e),
            ),
            e(
                t.exports,
                "useEffectEvent",
                () => A,
                (e) => (A = e),
            ),
            e(
                t.exports,
                "useId",
                () => j,
                (e) => (j = e),
            ),
            e(
                t.exports,
                "useImperativeHandle",
                () => L,
                (e) => (L = e),
            ),
            e(
                t.exports,
                "useInsertionEffect",
                () => O,
                (e) => (O = e),
            ),
            e(
                t.exports,
                "useLayoutEffect",
                () => D,
                (e) => (D = e),
            ),
            e(
                t.exports,
                "useMemo",
                () => M,
                (e) => (M = e),
            ),
            e(
                t.exports,
                "useOptimistic",
                () => R,
                (e) => (R = e),
            ),
            e(
                t.exports,
                "useReducer",
                () => B,
                (e) => (B = e),
            ),
            e(
                t.exports,
                "useRef",
                () => I,
                (e) => (I = e),
            ),
            e(
                t.exports,
                "useState",
                () => $,
                (e) => ($ = e),
            ),
            e(
                t.exports,
                "useSyncExternalStore",
                () => U,
                (e) => (U = e),
            ),
            e(
                t.exports,
                "useTransition",
                () => H,
                (e) => (H = e),
            ),
            e(
                t.exports,
                "version",
                () => V,
                (e) => (V = e),
            ));
        var r,
            l,
            a,
            o,
            i,
            s,
            u,
            c,
            d,
            f,
            p,
            m,
            h,
            g,
            y,
            b,
            v,
            x,
            k,
            w,
            S,
            E,
            C,
            N,
            z,
            F,
            P,
            _,
            T,
            A,
            j,
            L,
            O,
            D,
            M,
            R,
            B,
            I,
            $,
            U,
            H,
            V,
            W = Symbol.for("react.transitional.element"),
            Q = Symbol.for("react.portal"),
            q = Symbol.for("react.fragment"),
            G = Symbol.for("react.strict_mode"),
            K = Symbol.for("react.profiler"),
            Y = Symbol.for("react.consumer"),
            X = Symbol.for("react.context"),
            Z = Symbol.for("react.forward_ref"),
            J = Symbol.for("react.suspense"),
            ee = Symbol.for("react.memo"),
            et = Symbol.for("react.lazy"),
            en = Symbol.for("react.activity"),
            er = Symbol.iterator,
            el = {
                isMounted: function () {
                    return !1;
                },
                enqueueForceUpdate: function () {},
                enqueueReplaceState: function () {},
                enqueueSetState: function () {},
            },
            ea = Object.assign,
            eo = {};
        function ei(e, t, n) {
            ((this.props = e),
                (this.context = t),
                (this.refs = eo),
                (this.updater = n || el));
        }
        function es() {}
        function eu(e, t, n) {
            ((this.props = e),
                (this.context = t),
                (this.refs = eo),
                (this.updater = n || el));
        }
        ((ei.prototype.isReactComponent = {}),
            (ei.prototype.setState = function (e, t) {
                if (
                    "object" != typeof e &&
                    "function" != typeof e &&
                    null != e
                )
                    throw Error(
                        "takes an object of state variables to update or a function which returns an object of state variables.",
                    );
                this.updater.enqueueSetState(
                    this,
                    e,
                    t,
                    "setState",
                );
            }),
            (ei.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(
                    this,
                    e,
                    "forceUpdate",
                );
            }),
            (es.prototype = ei.prototype));
        var ec = (eu.prototype = new es());
        ((ec.constructor = eu),
            ea(ec, ei.prototype),
            (ec.isPureReactComponent = !0));
        var ed = Array.isArray;
        function ef() {}
        var ep = { H: null, A: null, T: null, S: null },
            em = Object.prototype.hasOwnProperty;
        function eh(e, t, n) {
            var r = n.ref;
            return {
                $$typeof: W,
                type: e,
                key: t,
                ref: void 0 !== r ? r : null,
                props: n,
            };
        }
        function eg(e) {
            return (
                "object" == typeof e &&
                null !== e &&
                e.$$typeof === W
            );
        }
        var ey = /\/+/g;
        function eb(e, t) {
            var n, r;
            return "object" == typeof e &&
                null !== e &&
                null != e.key
                ? ((n = "" + e.key),
                  (r = { "=": "=0", ":": "=2" }),
                  "$" +
                      n.replace(/[=:]/g, function (e) {
                          return r[e];
                      }))
                : t.toString(36);
        }
        function ev(e, t, n) {
            if (null == e) return e;
            var r = [],
                l = 0;
            return (
                !(function e(t, n, r, l, a) {
                    var o,
                        i,
                        s,
                        u = typeof t;
                    ("undefined" === u || "boolean" === u) &&
                        (t = null);
                    var c = !1;
                    if (null === t) c = !0;
                    else
                        switch (u) {
                            case "bigint":
                            case "string":
                            case "number":
                                c = !0;
                                break;
                            case "object":
                                switch (t.$$typeof) {
                                    case W:
                                    case Q:
                                        c = !0;
                                        break;
                                    case et:
                                        return e(
                                            (c = t._init)(
                                                t._payload,
                                            ),
                                            n,
                                            r,
                                            l,
                                            a,
                                        );
                                }
                        }
                    if (c)
                        return (
                            (a = a(t)),
                            (c = "" === l ? "." + eb(t, 0) : l),
                            ed(a)
                                ? ((r = ""),
                                  null != c &&
                                      (r =
                                          c.replace(ey, "$&/") +
                                          "/"),
                                  e(a, n, r, "", function (e) {
                                      return e;
                                  }))
                                : null != a &&
                                  (eg(a) &&
                                      ((o = a),
                                      (i =
                                          r +
                                          (null == a.key ||
                                          (t && t.key === a.key)
                                              ? ""
                                              : (
                                                    "" + a.key
                                                ).replace(
                                                    ey,
                                                    "$&/",
                                                ) + "/") +
                                          c),
                                      (a = eh(o.type, i, o.props))),
                                  n.push(a)),
                            1
                        );
                    c = 0;
                    var d = "" === l ? "." : l + ":";
                    if (ed(t))
                        for (var f = 0; f < t.length; f++)
                            ((u = d + eb((l = t[f]), f)),
                                (c += e(l, n, r, u, a)));
                    else if (
                        "function" ==
                        typeof (f =
                            null === (s = t) || "object" != typeof s
                                ? null
                                : "function" ==
                                    typeof (s =
                                        (er && s[er]) ||
                                        s["@@iterator"])
                                  ? s
                                  : null)
                    )
                        for (
                            t = f.call(t), f = 0;
                            !(l = t.next()).done;
                        )
                            ((u = d + eb((l = l.value), f++)),
                                (c += e(l, n, r, u, a)));
                    else if ("object" === u) {
                        if ("function" == typeof t.then)
                            return e(
                                (function (e) {
                                    switch (e.status) {
                                        case "fulfilled":
                                            return e.value;
                                        case "rejected":
                                            throw e.reason;
                                        default:
                                            switch (
                                                ("string" ==
                                                typeof e.status
                                                    ? e.then(ef, ef)
                                                    : ((e.status =
                                                          "pending"),
                                                      e.then(
                                                          function (
                                                              t,
                                                          ) {
                                                              "pending" ===
                                                                  e.status &&
                                                                  ((e.status =
                                                                      "fulfilled"),
                                                                  (e.value =
                                                                      t));
                                                          },
                                                          function (
                                                              t,
                                                          ) {
                                                              "pending" ===
                                                                  e.status &&
                                                                  ((e.status =
                                                                      "rejected"),
                                                                  (e.reason =
                                                                      t));
                                                          },
                                                      )),
                                                e.status)
                                            ) {
                                                case "fulfilled":
                                                    return e.value;
                                                case "rejected":
                                                    throw e.reason;
                                            }
                                    }
                                    throw e;
                                })(t),
                                n,
                                r,
                                l,
                                a,
                            );
                        throw Error(
                            "Objects are not valid as a React child (found: " +
                                ("[object Object]" ===
                                (n = String(t))
                                    ? "object with keys {" +
                                      Object.keys(t).join(", ") +
                                      "}"
                                    : n) +
                                "). If you meant to render a collection of children, use an array instead.",
                        );
                    }
                    return c;
                })(e, r, "", "", function (e) {
                    return t.call(n, e, l++);
                }),
                r
            );
        }
        function ex(e) {
            if (-1 === e._status) {
                var t = e._result;
                ((t = t()).then(
                    function (t) {
                        (0 === e._status || -1 === e._status) &&
                            ((e._status = 1), (e._result = t));
                    },
                    function (t) {
                        (0 === e._status || -1 === e._status) &&
                            ((e._status = 2), (e._result = t));
                    },
                ),
                    -1 === e._status &&
                        ((e._status = 0), (e._result = t)));
            }
            if (1 === e._status) return e._result.default;
            throw e._result;
        }
        var ek =
            "function" == typeof reportError
                ? reportError
                : function (e) {
                      if (
                          "object" == typeof window &&
                          "function" == typeof window.ErrorEvent
                      ) {
                          var t = new window.ErrorEvent("error", {
                              bubbles: !0,
                              cancelable: !0,
                              message:
                                  "object" == typeof e &&
                                  null !== e &&
                                  "string" == typeof e.message
                                      ? String(e.message)
                                      : String(e),
                              error: e,
                          });
                          if (!window.dispatchEvent(t)) return;
                      }
                      console.error(e);
                  };
        ((r = en),
            (l = {
                map: ev,
                forEach: function (e, t, n) {
                    ev(
                        e,
                        function () {
                            t.apply(this, arguments);
                        },
                        n,
                    );
                },
                count: function (e) {
                    var t = 0;
                    return (
                        ev(e, function () {
                            t++;
                        }),
                        t
                    );
                },
                toArray: function (e) {
                    return (
                        ev(e, function (e) {
                            return e;
                        }) || []
                    );
                },
                only: function (e) {
                    if (!eg(e))
                        throw Error(
                            "React.Children.only expected to receive a single React element child.",
                        );
                    return e;
                },
            }),
            (a = ei),
            (o = q),
            (i = K),
            (s = eu),
            (u = G),
            (c = J),
            (d = ep),
            (f = {
                __proto__: null,
                c: function (e) {
                    return ep.H.useMemoCache(e);
                },
            }),
            (p = function (e) {
                return function () {
                    return e.apply(null, arguments);
                };
            }),
            (m = function () {
                return null;
            }),
            (h = function (e, t, n) {
                if (null == e)
                    throw Error(
                        "The argument must be a React element, but you passed " +
                            e +
                            ".",
                    );
                var r = ea({}, e.props),
                    l = e.key;
                if (null != t)
                    for (a in (void 0 !== t.key && (l = "" + t.key),
                    t))
                        em.call(t, a) &&
                            "key" !== a &&
                            "__self" !== a &&
                            "__source" !== a &&
                            ("ref" !== a || void 0 !== t.ref) &&
                            (r[a] = t[a]);
                var a = arguments.length - 2;
                if (1 === a) r.children = n;
                else if (1 < a) {
                    for (var o = Array(a), i = 0; i < a; i++)
                        o[i] = arguments[i + 2];
                    r.children = o;
                }
                return eh(e.type, l, r);
            }),
            (g = function (e) {
                return (
                    ((e = {
                        $$typeof: X,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                    }).Provider = e),
                    (e.Consumer = { $$typeof: Y, _context: e }),
                    e
                );
            }),
            (y = function (e, t, n) {
                var r,
                    l = {},
                    a = null;
                if (null != t)
                    for (r in (void 0 !== t.key && (a = "" + t.key),
                    t))
                        em.call(t, r) &&
                            "key" !== r &&
                            "__self" !== r &&
                            "__source" !== r &&
                            (l[r] = t[r]);
                var o = arguments.length - 2;
                if (1 === o) l.children = n;
                else if (1 < o) {
                    for (var i = Array(o), s = 0; s < o; s++)
                        i[s] = arguments[s + 2];
                    l.children = i;
                }
                if (e && e.defaultProps)
                    for (r in (o = e.defaultProps))
                        void 0 === l[r] && (l[r] = o[r]);
                return eh(e, a, l);
            }),
            (b = function () {
                return { current: null };
            }),
            (v = function (e) {
                return { $$typeof: Z, render: e };
            }),
            (x = eg),
            (k = function (e) {
                return {
                    $$typeof: et,
                    _payload: { _status: -1, _result: e },
                    _init: ex,
                };
            }),
            (w = function (e, t) {
                return {
                    $$typeof: ee,
                    type: e,
                    compare: void 0 === t ? null : t,
                };
            }),
            (S = function (e) {
                var t = ep.T,
                    n = {};
                ep.T = n;
                try {
                    var r = e(),
                        l = ep.S;
                    (null !== l && l(n, r),
                        "object" == typeof r &&
                            null !== r &&
                            "function" == typeof r.then &&
                            r.then(ef, ek));
                } catch (e) {
                    ek(e);
                } finally {
                    (null !== t &&
                        null !== n.types &&
                        (t.types = n.types),
                        (ep.T = t));
                }
            }),
            (E = function () {
                return ep.H.useCacheRefresh();
            }),
            (C = function (e) {
                return ep.H.use(e);
            }),
            (N = function (e, t, n) {
                return ep.H.useActionState(e, t, n);
            }),
            (z = function (e, t) {
                return ep.H.useCallback(e, t);
            }),
            (F = function (e) {
                return ep.H.useContext(e);
            }),
            (P = function () {}),
            (_ = function (e, t) {
                return ep.H.useDeferredValue(e, t);
            }),
            (T = function (e, t) {
                return ep.H.useEffect(e, t);
            }),
            (A = function (e) {
                return ep.H.useEffectEvent(e);
            }),
            (j = function () {
                return ep.H.useId();
            }),
            (L = function (e, t, n) {
                return ep.H.useImperativeHandle(e, t, n);
            }),
            (O = function (e, t) {
                return ep.H.useInsertionEffect(e, t);
            }),
            (D = function (e, t) {
                return ep.H.useLayoutEffect(e, t);
            }),
            (M = function (e, t) {
                return ep.H.useMemo(e, t);
            }),
            (R = function (e, t) {
                return ep.H.useOptimistic(e, t);
            }),
            (B = function (e, t, n) {
                return ep.H.useReducer(e, t, n);
            }),
            (I = function (e) {
                return ep.H.useRef(e);
            }),
            ($ = function (e) {
                return ep.H.useState(e);
            }),
            (U = function (e, t, n) {
                return ep.H.useSyncExternalStore(e, t, n);
            }),
            (H = function () {
                return ep.H.useTransition();
            }),
            (V = "19.2.4"));
    }),
    o("DUEQU", function (t, n) {
        (e(
            t.exports,
            "createRoot",
            () => tR,
            (e) => (tR = e),
        ),
            e(
                t.exports,
                "hydrateRoot",
                () => tB,
                (e) => (tB = e),
            ),
            e(
                t.exports,
                "version",
                () => tI,
                (e) => (tI = e),
            ));
        var r,
            l = a("aALGe"),
            o = a("2xBnP"),
            i = a("8cavo");
        function s(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for (var n = 2; n < arguments.length; n++)
                    t +=
                        "&args[]=" +
                        encodeURIComponent(arguments[n]);
            }
            return (
                "Minified React error #" +
                e +
                "; visit " +
                t +
                " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
        }
        function u(e) {
            return !(
                !e ||
                (1 !== e.nodeType &&
                    9 !== e.nodeType &&
                    11 !== e.nodeType)
            );
        }
        function c(e) {
            var t = e,
                n = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
                e = t;
                do
                    (0 != (4098 & (t = e).flags) && (n = t.return),
                        (e = t.return));
                while (e);
            }
            return 3 === t.tag ? n : null;
        }
        function d(e) {
            if (13 === e.tag) {
                var t = e.memoizedState;
                if (
                    (null === t &&
                        null !== (e = e.alternate) &&
                        (t = e.memoizedState),
                    null !== t)
                )
                    return t.dehydrated;
            }
            return null;
        }
        function f(e) {
            if (31 === e.tag) {
                var t = e.memoizedState;
                if (
                    (null === t &&
                        null !== (e = e.alternate) &&
                        (t = e.memoizedState),
                    null !== t)
                )
                    return t.dehydrated;
            }
            return null;
        }
        function p(e) {
            if (c(e) !== e) throw Error(s(188));
        }
        var m = Object.assign,
            h = Symbol.for("react.element"),
            g = Symbol.for("react.transitional.element"),
            y = Symbol.for("react.portal"),
            b = Symbol.for("react.fragment"),
            v = Symbol.for("react.strict_mode"),
            x = Symbol.for("react.profiler"),
            k = Symbol.for("react.consumer"),
            w = Symbol.for("react.context"),
            S = Symbol.for("react.forward_ref"),
            E = Symbol.for("react.suspense"),
            C = Symbol.for("react.suspense_list"),
            N = Symbol.for("react.memo"),
            z = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        var F = Symbol.for("react.activity");
        (Symbol.for("react.legacy_hidden"),
            Symbol.for("react.tracing_marker"));
        var P = Symbol.for("react.memo_cache_sentinel");
        Symbol.for("react.view_transition");
        var _ = Symbol.iterator;
        function T(e) {
            return null === e || "object" != typeof e
                ? null
                : "function" ==
                    typeof (e = (_ && e[_]) || e["@@iterator"])
                  ? e
                  : null;
        }
        var A = Symbol.for("react.client.reference"),
            j = Array.isArray,
            L =
                o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            O =
                i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            D = {
                pending: !1,
                data: null,
                method: null,
                action: null,
            },
            M = [],
            R = -1;
        function B(e) {
            return { current: e };
        }
        function I(e) {
            0 > R || ((e.current = M[R]), (M[R] = null), R--);
        }
        function $(e, t) {
            ((M[++R] = e.current), (e.current = t));
        }
        var U = B(null),
            H = B(null),
            V = B(null),
            W = B(null);
        function Q(e, t) {
            switch (($(V, t), $(H, e), $(U, null), t.nodeType)) {
                case 9:
                case 11:
                    e =
                        (e = t.documentElement) &&
                        (e = e.namespaceURI)
                            ? uw(e)
                            : 0;
                    break;
                default:
                    if (((e = t.tagName), (t = t.namespaceURI)))
                        e = uS((t = uw(t)), e);
                    else
                        switch (e) {
                            case "svg":
                                e = 1;
                                break;
                            case "math":
                                e = 2;
                                break;
                            default:
                                e = 0;
                        }
            }
            (I(U), $(U, e));
        }
        function q() {
            (I(U), I(H), I(V));
        }
        function G(e) {
            null !== e.memoizedState && $(W, e);
            var t = U.current,
                n = uS(t, e.type);
            t !== n && ($(H, e), $(U, n));
        }
        function K(e) {
            (H.current === e && (I(U), I(H)),
                W.current === e && (I(W), (ca._currentValue = D)));
        }
        function Y(e) {
            if (void 0 === t$)
                try {
                    throw Error();
                } catch (e) {
                    var t = e.stack.trim().match(/\n( *(at )?)/);
                    ((t$ = (t && t[1]) || ""),
                        (tU =
                            -1 < e.stack.indexOf("\n    at")
                                ? " (<anonymous>)"
                                : -1 < e.stack.indexOf("@")
                                  ? "@unknown:0:0"
                                  : ""));
                }
            return "\n" + t$ + e + tU;
        }
        var X = !1;
        function Z(e, t) {
            if (!e || X) return "";
            X = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var r = {
                    DetermineComponentFrameRoot: function () {
                        try {
                            if (t) {
                                var n = function () {
                                    throw Error();
                                };
                                if (
                                    (Object.defineProperty(
                                        n.prototype,
                                        "props",
                                        {
                                            set: function () {
                                                throw Error();
                                            },
                                        },
                                    ),
                                    "object" == typeof Reflect &&
                                        Reflect.construct)
                                ) {
                                    try {
                                        Reflect.construct(n, []);
                                    } catch (e) {
                                        var r = e;
                                    }
                                    Reflect.construct(e, [], n);
                                } else {
                                    try {
                                        n.call();
                                    } catch (e) {
                                        r = e;
                                    }
                                    e.call(n.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (e) {
                                    r = e;
                                }
                                (n = e()) &&
                                    "function" == typeof n.catch &&
                                    n.catch(function () {});
                            }
                        } catch (e) {
                            if (
                                e &&
                                r &&
                                "string" == typeof e.stack
                            )
                                return [e.stack, r.stack];
                        }
                        return [null, null];
                    },
                };
                r.DetermineComponentFrameRoot.displayName =
                    "DetermineComponentFrameRoot";
                var l = Object.getOwnPropertyDescriptor(
                    r.DetermineComponentFrameRoot,
                    "name",
                );
                l &&
                    l.configurable &&
                    Object.defineProperty(
                        r.DetermineComponentFrameRoot,
                        "name",
                        { value: "DetermineComponentFrameRoot" },
                    );
                var a = r.DetermineComponentFrameRoot(),
                    o = a[0],
                    i = a[1];
                if (o && i) {
                    var s = o.split("\n"),
                        u = i.split("\n");
                    for (
                        l = r = 0;
                        r < s.length &&
                        !s[r].includes(
                            "DetermineComponentFrameRoot",
                        );
                    )
                        r++;
                    for (
                        ;
                        l < u.length &&
                        !u[l].includes(
                            "DetermineComponentFrameRoot",
                        );
                    )
                        l++;
                    if (r === s.length || l === u.length)
                        for (
                            r = s.length - 1, l = u.length - 1;
                            1 <= r && 0 <= l && s[r] !== u[l];
                        )
                            l--;
                    for (; 1 <= r && 0 <= l; r--, l--)
                        if (s[r] !== u[l]) {
                            if (1 !== r || 1 !== l)
                                do
                                    if (
                                        (r--,
                                        l--,
                                        0 > l || s[r] !== u[l])
                                    ) {
                                        var c =
                                            "\n" +
                                            s[r].replace(
                                                " at new ",
                                                " at ",
                                            );
                                        return (
                                            e.displayName &&
                                                c.includes(
                                                    "<anonymous>",
                                                ) &&
                                                (c = c.replace(
                                                    "<anonymous>",
                                                    e.displayName,
                                                )),
                                            c
                                        );
                                    }
                                while (1 <= r && 0 <= l);
                            break;
                        }
                }
            } finally {
                ((X = !1), (Error.prepareStackTrace = n));
            }
            return (n = e ? e.displayName || e.name : "")
                ? Y(n)
                : "";
        }
        function J(e) {
            try {
                var t = "",
                    n = null;
                do
                    ((t += (function (e, t) {
                        switch (e.tag) {
                            case 26:
                            case 27:
                            case 5:
                                return Y(e.type);
                            case 16:
                                return Y("Lazy");
                            case 13:
                                return e.child !== t && null !== t
                                    ? Y("Suspense Fallback")
                                    : Y("Suspense");
                            case 19:
                                return Y("SuspenseList");
                            case 0:
                            case 15:
                                return Z(e.type, !1);
                            case 11:
                                return Z(e.type.render, !1);
                            case 1:
                                return Z(e.type, !0);
                            case 31:
                                return Y("Activity");
                            default:
                                return "";
                        }
                    })(e, n)),
                        (n = e),
                        (e = e.return));
                while (e);
                return t;
            } catch (e) {
                return (
                    "\nError generating stack: " +
                    e.message +
                    "\n" +
                    e.stack
                );
            }
        }
        var ee = Object.prototype.hasOwnProperty,
            et = l.unstable_scheduleCallback,
            en = l.unstable_cancelCallback,
            er = l.unstable_shouldYield,
            el = l.unstable_requestPaint,
            ea = l.unstable_now,
            eo = l.unstable_getCurrentPriorityLevel,
            ei = l.unstable_ImmediatePriority,
            es = l.unstable_UserBlockingPriority,
            eu = l.unstable_NormalPriority,
            ec = l.unstable_LowPriority,
            ed = l.unstable_IdlePriority,
            ef = l.log,
            ep = l.unstable_setDisableYieldValue,
            em = null,
            eh = null;
        function eg(e) {
            if (
                ("function" == typeof ef && ep(e),
                eh && "function" == typeof eh.setStrictMode)
            )
                try {
                    eh.setStrictMode(em, e);
                } catch (e) {}
        }
        var ey = Math.clz32
                ? Math.clz32
                : function (e) {
                      return 0 == (e >>>= 0)
                          ? 32
                          : (31 - ((eb(e) / ev) | 0)) | 0;
                  },
            eb = Math.log,
            ev = Math.LN2,
            ex = 256,
            ek = 262144,
            ew = 4194304;
        function eS(e) {
            var t = 42 & e;
            if (0 !== t) return t;
            switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                    return 64;
                case 128:
                    return 128;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                    return 261888 & e;
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return 3932160 & e;
                case 4194304:
                case 8388608:
                case 0x1000000:
                case 0x2000000:
                    return 0x3c00000 & e;
                case 0x4000000:
                    return 0x4000000;
                case 0x8000000:
                    return 0x8000000;
                case 0x10000000:
                    return 0x10000000;
                case 0x20000000:
                    return 0x20000000;
                case 0x40000000:
                    return 0;
                default:
                    return e;
            }
        }
        function eE(e, t, n) {
            var r = e.pendingLanes;
            if (0 === r) return 0;
            var l = 0,
                a = e.suspendedLanes,
                o = e.pingedLanes;
            e = e.warmLanes;
            var i = 0x7ffffff & r;
            return (
                0 !== i
                    ? 0 != (r = i & ~a)
                        ? (l = eS(r))
                        : 0 != (o &= i)
                          ? (l = eS(o))
                          : n || (0 != (n = i & ~e) && (l = eS(n)))
                    : 0 != (i = r & ~a)
                      ? (l = eS(i))
                      : 0 !== o
                        ? (l = eS(o))
                        : n || (0 != (n = r & ~e) && (l = eS(n))),
                0 === l
                    ? 0
                    : 0 !== t &&
                        t !== l &&
                        0 == (t & a) &&
                        ((a = l & -l) >= (n = t & -t) ||
                            (32 === a && 0 != (4194048 & n)))
                      ? t
                      : l
            );
        }
        function eC(e, t) {
            return (
                0 ==
                (e.pendingLanes &
                    ~(e.suspendedLanes & ~e.pingedLanes) &
                    t)
            );
        }
        function eN() {
            var e = ew;
            return (
                0 == (0x3c00000 & (ew <<= 1)) && (ew = 4194304),
                e
            );
        }
        function ez(e) {
            for (var t = [], n = 0; 31 > n; n++) t.push(e);
            return t;
        }
        function eF(e, t) {
            ((e.pendingLanes |= t),
                0x10000000 !== t &&
                    ((e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.warmLanes = 0)));
        }
        function eP(e, t, n) {
            ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
            var r = 31 - ey(t);
            ((e.entangledLanes |= t),
                (e.entanglements[r] =
                    0x40000000 |
                    e.entanglements[r] |
                    (261930 & n)));
        }
        function e_(e, t) {
            var n = (e.entangledLanes |= t);
            for (e = e.entanglements; n; ) {
                var r = 31 - ey(n),
                    l = 1 << r;
                ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
            }
        }
        function eT(e, t) {
            var n = t & -t;
            return 0 !=
                ((n = 0 != (42 & n) ? 1 : eA(n)) &
                    (e.suspendedLanes | t))
                ? 0
                : n;
        }
        function eA(e) {
            switch (e) {
                case 2:
                    e = 1;
                    break;
                case 8:
                    e = 4;
                    break;
                case 32:
                    e = 16;
                    break;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 0x1000000:
                case 0x2000000:
                    e = 128;
                    break;
                case 0x10000000:
                    e = 0x8000000;
                    break;
                default:
                    e = 0;
            }
            return e;
        }
        function ej(e) {
            return 2 < (e &= -e)
                ? 8 < e
                    ? 0 != (0x7ffffff & e)
                        ? 32
                        : 0x10000000
                    : 8
                : 2;
        }
        function eL() {
            var e = O.p;
            return 0 !== e
                ? e
                : void 0 === (e = window.event)
                  ? 32
                  : cx(e.type);
        }
        function eO(e, t) {
            var n = O.p;
            try {
                return ((O.p = e), t());
            } finally {
                O.p = n;
            }
        }
        var eD = Math.random().toString(36).slice(2),
            eM = "__reactFiber$" + eD,
            eR = "__reactProps$" + eD,
            eB = "__reactContainer$" + eD,
            eI = "__reactEvents$" + eD,
            e$ = "__reactListeners$" + eD,
            eU = "__reactHandles$" + eD,
            eH = "__reactResources$" + eD,
            eV = "__reactMarker$" + eD;
        function eW(e) {
            (delete e[eM],
                delete e[eR],
                delete e[eI],
                delete e[e$],
                delete e[eU]);
        }
        function eQ(e) {
            var t = e[eM];
            if (t) return t;
            for (var n = e.parentNode; n; ) {
                if ((t = n[eB] || n[eM])) {
                    if (
                        ((n = t.alternate),
                        null !== t.child ||
                            (null !== n && null !== n.child))
                    )
                        for (e = u$(e); null !== e; ) {
                            if ((n = e[eM])) return n;
                            e = u$(e);
                        }
                    return t;
                }
                n = (e = n).parentNode;
            }
            return null;
        }
        function eq(e) {
            if ((e = e[eM] || e[eB])) {
                var t = e.tag;
                if (
                    5 === t ||
                    6 === t ||
                    13 === t ||
                    31 === t ||
                    26 === t ||
                    27 === t ||
                    3 === t
                )
                    return e;
            }
            return null;
        }
        function eG(e) {
            var t = e.tag;
            if (5 === t || 26 === t || 27 === t || 6 === t)
                return e.stateNode;
            throw Error(s(33));
        }
        function eK(e) {
            var t = e[eH];
            return (
                t ||
                    (t = e[eH] =
                        {
                            hoistableStyles: new Map(),
                            hoistableScripts: new Map(),
                        }),
                t
            );
        }
        function eY(e) {
            e[eV] = !0;
        }
        var eX = new Set(),
            eZ = {};
        function eJ(e, t) {
            (e0(e, t), e0(e + "Capture", t));
        }
        function e0(e, t) {
            for (eZ[e] = t, e = 0; e < t.length; e++) eX.add(t[e]);
        }
        var e1 = RegExp(
                "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
            ),
            e2 = {},
            e3 = {};
        function e4(e, t, n) {
            if (
                ee.call(e3, t) ||
                (!ee.call(e2, t) &&
                    (e1.test(t)
                        ? (e3[t] = !0)
                        : ((e2[t] = !0), !1)))
            )
                if (null === n) e.removeAttribute(t);
                else {
                    switch (typeof n) {
                        case "undefined":
                        case "function":
                        case "symbol":
                            e.removeAttribute(t);
                            return;
                        case "boolean":
                            var r = t.toLowerCase().slice(0, 5);
                            if ("data-" !== r && "aria-" !== r)
                                return void e.removeAttribute(t);
                    }
                    e.setAttribute(t, "" + n);
                }
        }
        function e5(e, t, n) {
            if (null === n) e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(t);
                        return;
                }
                e.setAttribute(t, "" + n);
            }
        }
        function e8(e, t, n, r) {
            if (null === r) e.removeAttribute(n);
            else {
                switch (typeof r) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(n);
                        return;
                }
                e.setAttributeNS(t, n, "" + r);
            }
        }
        function e6(e) {
            switch (typeof e) {
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return "";
            }
        }
        function e9(e) {
            var t = e.type;
            return (
                (e = e.nodeName) &&
                "input" === e.toLowerCase() &&
                ("checkbox" === t || "radio" === t)
            );
        }
        function e7(e) {
            if (!e._valueTracker) {
                var t = e9(e) ? "checked" : "value";
                e._valueTracker = (function (e, t, n) {
                    var r = Object.getOwnPropertyDescriptor(
                        e.constructor.prototype,
                        t,
                    );
                    if (
                        !e.hasOwnProperty(t) &&
                        void 0 !== r &&
                        "function" == typeof r.get &&
                        "function" == typeof r.set
                    ) {
                        var l = r.get,
                            a = r.set;
                        return (
                            Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function () {
                                    return l.call(this);
                                },
                                set: function (e) {
                                    ((n = "" + e), a.call(this, e));
                                },
                            }),
                            Object.defineProperty(e, t, {
                                enumerable: r.enumerable,
                            }),
                            {
                                getValue: function () {
                                    return n;
                                },
                                setValue: function (e) {
                                    n = "" + e;
                                },
                                stopTracking: function () {
                                    ((e._valueTracker = null),
                                        delete e[t]);
                                },
                            }
                        );
                    }
                })(e, t, "" + e[t]);
            }
        }
        function te(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(),
                r = "";
            return (
                e &&
                    (r = e9(e)
                        ? e.checked
                            ? "true"
                            : "false"
                        : e.value),
                (e = r) !== n && (t.setValue(e), !0)
            );
        }
        function tt(e) {
            if (
                void 0 ===
                (e =
                    e ||
                    ("u" > typeof document ? document : void 0))
            )
                return null;
            try {
                return e.activeElement || e.body;
            } catch (t) {
                return e.body;
            }
        }
        var tn = /[\n"\\]/g;
        function tr(e) {
            return e.replace(tn, function (e) {
                return "\\" + e.charCodeAt(0).toString(16) + " ";
            });
        }
        function tl(e, t, n, r, l, a, o, i) {
            ((e.name = ""),
                null != o &&
                "function" != typeof o &&
                "symbol" != typeof o &&
                "boolean" != typeof o
                    ? (e.type = o)
                    : e.removeAttribute("type"),
                null != t
                    ? "number" === o
                        ? ((0 === t && "" === e.value) ||
                              e.value != t) &&
                          (e.value = "" + e6(t))
                        : e.value !== "" + e6(t) &&
                          (e.value = "" + e6(t))
                    : ("submit" !== o && "reset" !== o) ||
                      e.removeAttribute("value"),
                null != t
                    ? to(e, o, e6(t))
                    : null != n
                      ? to(e, o, e6(n))
                      : null != r && e.removeAttribute("value"),
                null == l && null != a && (e.defaultChecked = !!a),
                null != l &&
                    (e.checked =
                        l &&
                        "function" != typeof l &&
                        "symbol" != typeof l),
                null != i &&
                "function" != typeof i &&
                "symbol" != typeof i &&
                "boolean" != typeof i
                    ? (e.name = "" + e6(i))
                    : e.removeAttribute("name"));
        }
        function ta(e, t, n, r, l, a, o, i) {
            if (
                (null != a &&
                    "function" != typeof a &&
                    "symbol" != typeof a &&
                    "boolean" != typeof a &&
                    (e.type = a),
                null != t || null != n)
            ) {
                if (("submit" === a || "reset" === a) && null == t)
                    return void e7(e);
                ((n = null != n ? "" + e6(n) : ""),
                    (t = null != t ? "" + e6(t) : n),
                    i || t === e.value || (e.value = t),
                    (e.defaultValue = t));
            }
            ((r =
                "function" != typeof (r = null != r ? r : l) &&
                "symbol" != typeof r &&
                !!r),
                (e.checked = i ? e.checked : !!r),
                (e.defaultChecked = !!r),
                null != o &&
                    "function" != typeof o &&
                    "symbol" != typeof o &&
                    "boolean" != typeof o &&
                    (e.name = o),
                e7(e));
        }
        function to(e, t, n) {
            ("number" === t && tt(e.ownerDocument) === e) ||
                e.defaultValue === "" + n ||
                (e.defaultValue = "" + n);
        }
        function ti(e, t, n, r) {
            if (((e = e.options), t)) {
                t = {};
                for (var l = 0; l < n.length; l++)
                    t["$" + n[l]] = !0;
                for (n = 0; n < e.length; n++)
                    ((l = t.hasOwnProperty("$" + e[n].value)),
                        e[n].selected !== l && (e[n].selected = l),
                        l && r && (e[n].defaultSelected = !0));
            } else {
                for (
                    l = 0, n = "" + e6(n), t = null;
                    l < e.length;
                    l++
                ) {
                    if (e[l].value === n) {
                        ((e[l].selected = !0),
                            r && (e[l].defaultSelected = !0));
                        return;
                    }
                    null !== t || e[l].disabled || (t = e[l]);
                }
                null !== t && (t.selected = !0);
            }
        }
        function ts(e, t, n) {
            if (
                null != t &&
                ((t = "" + e6(t)) !== e.value && (e.value = t),
                null == n)
            ) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = null != n ? "" + e6(n) : "";
        }
        function tu(e, t, n, r) {
            if (null == t) {
                if (null != r) {
                    if (null != n) throw Error(s(92));
                    if (j(r)) {
                        if (1 < r.length) throw Error(s(93));
                        r = r[0];
                    }
                    n = r;
                }
                (null == n && (n = ""), (t = n));
            }
            ((e.defaultValue = n = e6(t)),
                (r = e.textContent) === n &&
                    "" !== r &&
                    null !== r &&
                    (e.value = r),
                e7(e));
        }
        function tc(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType) {
                    n.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var td = new Set(
            "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
                " ",
            ),
        );
        function tf(e, t, n) {
            var r = 0 === t.indexOf("--");
            null == n || "boolean" == typeof n || "" === n
                ? r
                    ? e.setProperty(t, "")
                    : "float" === t
                      ? (e.cssFloat = "")
                      : (e[t] = "")
                : r
                  ? e.setProperty(t, n)
                  : "number" != typeof n || 0 === n || td.has(t)
                    ? "float" === t
                        ? (e.cssFloat = n)
                        : (e[t] = ("" + n).trim())
                    : (e[t] = n + "px");
        }
        function tp(e, t, n) {
            if (null != t && "object" != typeof t)
                throw Error(s(62));
            if (((e = e.style), null != n)) {
                for (var r in n)
                    !n.hasOwnProperty(r) ||
                        (null != t && t.hasOwnProperty(r)) ||
                        (0 === r.indexOf("--")
                            ? e.setProperty(r, "")
                            : "float" === r
                              ? (e.cssFloat = "")
                              : (e[r] = ""));
                for (var l in t)
                    ((r = t[l]),
                        t.hasOwnProperty(l) &&
                            n[l] !== r &&
                            tf(e, l, r));
            } else
                for (var a in t)
                    t.hasOwnProperty(a) && tf(e, a, t[a]);
        }
        function tm(e) {
            if (-1 === e.indexOf("-")) return !1;
            switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        var th = new Map([
                ["acceptCharset", "accept-charset"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"],
                ["crossOrigin", "crossorigin"],
                ["accentHeight", "accent-height"],
                ["alignmentBaseline", "alignment-baseline"],
                ["arabicForm", "arabic-form"],
                ["baselineShift", "baseline-shift"],
                ["capHeight", "cap-height"],
                ["clipPath", "clip-path"],
                ["clipRule", "clip-rule"],
                ["colorInterpolation", "color-interpolation"],
                [
                    "colorInterpolationFilters",
                    "color-interpolation-filters",
                ],
                ["colorProfile", "color-profile"],
                ["colorRendering", "color-rendering"],
                ["dominantBaseline", "dominant-baseline"],
                ["enableBackground", "enable-background"],
                ["fillOpacity", "fill-opacity"],
                ["fillRule", "fill-rule"],
                ["floodColor", "flood-color"],
                ["floodOpacity", "flood-opacity"],
                ["fontFamily", "font-family"],
                ["fontSize", "font-size"],
                ["fontSizeAdjust", "font-size-adjust"],
                ["fontStretch", "font-stretch"],
                ["fontStyle", "font-style"],
                ["fontVariant", "font-variant"],
                ["fontWeight", "font-weight"],
                ["glyphName", "glyph-name"],
                [
                    "glyphOrientationHorizontal",
                    "glyph-orientation-horizontal",
                ],
                [
                    "glyphOrientationVertical",
                    "glyph-orientation-vertical",
                ],
                ["horizAdvX", "horiz-adv-x"],
                ["horizOriginX", "horiz-origin-x"],
                ["imageRendering", "image-rendering"],
                ["letterSpacing", "letter-spacing"],
                ["lightingColor", "lighting-color"],
                ["markerEnd", "marker-end"],
                ["markerMid", "marker-mid"],
                ["markerStart", "marker-start"],
                ["overlinePosition", "overline-position"],
                ["overlineThickness", "overline-thickness"],
                ["paintOrder", "paint-order"],
                ["panose-1", "panose-1"],
                ["pointerEvents", "pointer-events"],
                ["renderingIntent", "rendering-intent"],
                ["shapeRendering", "shape-rendering"],
                ["stopColor", "stop-color"],
                ["stopOpacity", "stop-opacity"],
                ["strikethroughPosition", "strikethrough-position"],
                [
                    "strikethroughThickness",
                    "strikethrough-thickness",
                ],
                ["strokeDasharray", "stroke-dasharray"],
                ["strokeDashoffset", "stroke-dashoffset"],
                ["strokeLinecap", "stroke-linecap"],
                ["strokeLinejoin", "stroke-linejoin"],
                ["strokeMiterlimit", "stroke-miterlimit"],
                ["strokeOpacity", "stroke-opacity"],
                ["strokeWidth", "stroke-width"],
                ["textAnchor", "text-anchor"],
                ["textDecoration", "text-decoration"],
                ["textRendering", "text-rendering"],
                ["transformOrigin", "transform-origin"],
                ["underlinePosition", "underline-position"],
                ["underlineThickness", "underline-thickness"],
                ["unicodeBidi", "unicode-bidi"],
                ["unicodeRange", "unicode-range"],
                ["unitsPerEm", "units-per-em"],
                ["vAlphabetic", "v-alphabetic"],
                ["vHanging", "v-hanging"],
                ["vIdeographic", "v-ideographic"],
                ["vMathematical", "v-mathematical"],
                ["vectorEffect", "vector-effect"],
                ["vertAdvY", "vert-adv-y"],
                ["vertOriginX", "vert-origin-x"],
                ["vertOriginY", "vert-origin-y"],
                ["wordSpacing", "word-spacing"],
                ["writingMode", "writing-mode"],
                ["xmlnsXlink", "xmlns:xlink"],
                ["xHeight", "x-height"],
            ]),
            tg =
                /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function ty(e) {
            return tg.test("" + e)
                ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
                : e;
        }
        function tb() {}
        var tv = null;
        function tx(e) {
            return (
                (e = e.target || e.srcElement || window)
                    .correspondingUseElement &&
                    (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            );
        }
        var tk = null,
            tw = null;
        function tS(e) {
            var t = eq(e);
            if (t && (e = t.stateNode)) {
                var n = e[eR] || null;
                switch (((e = t.stateNode), t.type)) {
                    case "input":
                        if (
                            (tl(
                                e,
                                n.value,
                                n.defaultValue,
                                n.defaultValue,
                                n.checked,
                                n.defaultChecked,
                                n.type,
                                n.name,
                            ),
                            (t = n.name),
                            "radio" === n.type && null != t)
                        ) {
                            for (n = e; n.parentNode; )
                                n = n.parentNode;
                            for (
                                n = n.querySelectorAll(
                                    'input[name="' +
                                        tr("" + t) +
                                        '"][type="radio"]',
                                ),
                                    t = 0;
                                t < n.length;
                                t++
                            ) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var l = r[eR] || null;
                                    if (!l) throw Error(s(90));
                                    tl(
                                        r,
                                        l.value,
                                        l.defaultValue,
                                        l.defaultValue,
                                        l.checked,
                                        l.defaultChecked,
                                        l.type,
                                        l.name,
                                    );
                                }
                            }
                            for (t = 0; t < n.length; t++)
                                (r = n[t]).form === e.form && te(r);
                        }
                        break;
                    case "textarea":
                        ts(e, n.value, n.defaultValue);
                        break;
                    case "select":
                        null != (t = n.value) &&
                            ti(e, !!n.multiple, t, !1);
                }
            }
        }
        var tE = !1;
        function tC(e, t, n) {
            if (tE) return e(t, n);
            tE = !0;
            try {
                return e(t);
            } finally {
                if (
                    ((tE = !1),
                    (null !== tk || null !== tw) &&
                        (sg(),
                        tk &&
                            ((t = tk),
                            (e = tw),
                            (tw = tk = null),
                            tS(t),
                            e)))
                )
                    for (t = 0; t < e.length; t++) tS(e[t]);
            }
        }
        function tN(e, t) {
            var n = e.stateNode;
            if (null === n) return null;
            var r = n[eR] || null;
            if (null === r) return null;
            switch (((n = r[t]), t)) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    ((r = !r.disabled) ||
                        (r =
                            "button" !== (e = e.type) &&
                            "input" !== e &&
                            "select" !== e &&
                            "textarea" !== e),
                        (e = !r));
                    break;
                default:
                    e = !1;
            }
            if (e) return null;
            if (n && "function" != typeof n)
                throw Error(s(231, t, typeof n));
            return n;
        }
        var tz =
                "u" > typeof window &&
                void 0 !== window.document &&
                void 0 !== window.document.createElement,
            tF = !1;
        if (tz)
            try {
                var tP = {};
                (Object.defineProperty(tP, "passive", {
                    get: function () {
                        tF = !0;
                    },
                }),
                    window.addEventListener("test", tP, tP),
                    window.removeEventListener("test", tP, tP));
            } catch (e) {
                tF = !1;
            }
        var t_ = null,
            tT = null,
            tA = null;
        function tj() {
            if (tA) return tA;
            var e,
                t,
                n = tT,
                r = n.length,
                l = "value" in t_ ? t_.value : t_.textContent,
                a = l.length;
            for (e = 0; e < r && n[e] === l[e]; e++);
            var o = r - e;
            for (t = 1; t <= o && n[r - t] === l[a - t]; t++);
            return (tA = l.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tL(e) {
            var t = e.keyCode;
            return (
                "charCode" in e
                    ? 0 === (e = e.charCode) && 13 === t && (e = 13)
                    : (e = t),
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            );
        }
        function tO() {
            return !0;
        }
        function tD() {
            return !1;
        }
        function tM(e) {
            function t(t, n, r, l, a) {
                for (var o in ((this._reactName = t),
                (this._targetInst = r),
                (this.type = n),
                (this.nativeEvent = l),
                (this.target = a),
                (this.currentTarget = null),
                e))
                    e.hasOwnProperty(o) &&
                        ((t = e[o]), (this[o] = t ? t(l) : l[o]));
                return (
                    (this.isDefaultPrevented = (
                        null != l.defaultPrevented
                            ? l.defaultPrevented
                            : !1 === l.returnValue
                    )
                        ? tO
                        : tD),
                    (this.isPropagationStopped = tD),
                    this
                );
            }
            return (
                m(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e &&
                            (e.preventDefault
                                ? e.preventDefault()
                                : "unknown" !=
                                      typeof e.returnValue &&
                                  (e.returnValue = !1),
                            (this.isDefaultPrevented = tO));
                    },
                    stopPropagation: function () {
                        var e = this.nativeEvent;
                        e &&
                            (e.stopPropagation
                                ? e.stopPropagation()
                                : "unknown" !=
                                      typeof e.cancelBubble &&
                                  (e.cancelBubble = !0),
                            (this.isPropagationStopped = tO));
                    },
                    persist: function () {},
                    isPersistent: tO,
                }),
                t
            );
        }
        var tR,
            tB,
            tI,
            t$,
            tU,
            tH,
            tV,
            tW,
            tQ = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function (e) {
                    return e.timeStamp || Date.now();
                },
                defaultPrevented: 0,
                isTrusted: 0,
            },
            tq = tM(tQ),
            tG = m({}, tQ, { view: 0, detail: 0 }),
            tK = tM(tG),
            tY = m({}, tG, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: t6,
                button: 0,
                buttons: 0,
                relatedTarget: function (e) {
                    return void 0 === e.relatedTarget
                        ? e.fromElement === e.srcElement
                            ? e.toElement
                            : e.fromElement
                        : e.relatedTarget;
                },
                movementX: function (e) {
                    return "movementX" in e
                        ? e.movementX
                        : (e !== tW &&
                              (tW && "mousemove" === e.type
                                  ? ((tH = e.screenX - tW.screenX),
                                    (tV = e.screenY - tW.screenY))
                                  : (tV = tH = 0),
                              (tW = e)),
                          tH);
                },
                movementY: function (e) {
                    return "movementY" in e ? e.movementY : tV;
                },
            }),
            tX = tM(tY),
            tZ = tM(m({}, tY, { dataTransfer: 0 })),
            tJ = tM(m({}, tG, { relatedTarget: 0 })),
            t0 = tM(
                m({}, tQ, {
                    animationName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0,
                }),
            ),
            t1 = tM(
                m({}, tQ, {
                    clipboardData: function (e) {
                        return "clipboardData" in e
                            ? e.clipboardData
                            : window.clipboardData;
                    },
                }),
            ),
            t2 = tM(m({}, tQ, { data: 0 })),
            t3 = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified",
            },
            t4 = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta",
            },
            t5 = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey",
            };
        function t8(e) {
            var t = this.nativeEvent;
            return t.getModifierState
                ? t.getModifierState(e)
                : !!(e = t5[e]) && !!t[e];
        }
        function t6() {
            return t8;
        }
        var t9 = tM(
                m({}, tG, {
                    key: function (e) {
                        if (e.key) {
                            var t = t3[e.key] || e.key;
                            if ("Unidentified" !== t) return t;
                        }
                        return "keypress" === e.type
                            ? 13 === (e = tL(e))
                                ? "Enter"
                                : String.fromCharCode(e)
                            : "keydown" === e.type ||
                                "keyup" === e.type
                              ? t4[e.keyCode] || "Unidentified"
                              : "";
                    },
                    code: 0,
                    location: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    repeat: 0,
                    locale: 0,
                    getModifierState: t6,
                    charCode: function (e) {
                        return "keypress" === e.type ? tL(e) : 0;
                    },
                    keyCode: function (e) {
                        return "keydown" === e.type ||
                            "keyup" === e.type
                            ? e.keyCode
                            : 0;
                    },
                    which: function (e) {
                        return "keypress" === e.type
                            ? tL(e)
                            : "keydown" === e.type ||
                                "keyup" === e.type
                              ? e.keyCode
                              : 0;
                    },
                }),
            ),
            t7 = tM(
                m({}, tY, {
                    pointerId: 0,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    pointerType: 0,
                    isPrimary: 0,
                }),
            ),
            ne = tM(
                m({}, tG, {
                    touches: 0,
                    targetTouches: 0,
                    changedTouches: 0,
                    altKey: 0,
                    metaKey: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    getModifierState: t6,
                }),
            ),
            nt = tM(
                m({}, tQ, {
                    propertyName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0,
                }),
            ),
            nn = tM(
                m({}, tY, {
                    deltaX: function (e) {
                        return "deltaX" in e
                            ? e.deltaX
                            : "wheelDeltaX" in e
                              ? -e.wheelDeltaX
                              : 0;
                    },
                    deltaY: function (e) {
                        return "deltaY" in e
                            ? e.deltaY
                            : "wheelDeltaY" in e
                              ? -e.wheelDeltaY
                              : "wheelDelta" in e
                                ? -e.wheelDelta
                                : 0;
                    },
                    deltaZ: 0,
                    deltaMode: 0,
                }),
            ),
            nr = tM(m({}, tQ, { newState: 0, oldState: 0 })),
            nl = [9, 13, 27, 32],
            na = tz && "CompositionEvent" in window,
            no = null;
        tz &&
            "documentMode" in document &&
            (no = document.documentMode);
        var ni = tz && "TextEvent" in window && !no,
            ns = tz && (!na || (no && 8 < no && 11 >= no)),
            nu = !1;
        function nc(e, t) {
            switch (e) {
                case "keyup":
                    return -1 !== nl.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function nd(e) {
            return "object" == typeof (e = e.detail) && "data" in e
                ? e.data
                : null;
        }
        var nf = !1,
            np = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
            };
        function nm(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!np[e.type] : "textarea" === t;
        }
        function nh(e, t, n, r) {
            (tk ? (tw ? tw.push(r) : (tw = [r])) : (tk = r),
                0 < (t = us(t, "onChange")).length &&
                    ((n = new tq("onChange", "change", null, n, r)),
                    e.push({ event: n, listeners: t })));
        }
        var ng = null,
            ny = null;
        function nb(e) {
            ue(e, 0);
        }
        function nv(e) {
            if (te(eG(e))) return e;
        }
        function nx(e, t) {
            if ("change" === e) return t;
        }
        var nk = !1;
        if (tz) {
            if (tz) {
                var nw = "oninput" in document;
                if (!nw) {
                    var nS = document.createElement("div");
                    (nS.setAttribute("oninput", "return;"),
                        (nw = "function" == typeof nS.oninput));
                }
                r = nw;
            } else r = !1;
            nk =
                r &&
                (!document.documentMode ||
                    9 < document.documentMode);
        }
        function nE() {
            ng &&
                (ng.detachEvent("onpropertychange", nC),
                (ny = ng = null));
        }
        function nC(e) {
            if ("value" === e.propertyName && nv(ny)) {
                var t = [];
                (nh(t, ny, e, tx(e)), tC(nb, t));
            }
        }
        function nN(e, t, n) {
            "focusin" === e
                ? (nE(),
                  (ng = t),
                  (ny = n),
                  ng.attachEvent("onpropertychange", nC))
                : "focusout" === e && nE();
        }
        function nz(e) {
            if (
                "selectionchange" === e ||
                "keyup" === e ||
                "keydown" === e
            )
                return nv(ny);
        }
        function nF(e, t) {
            if ("click" === e) return nv(t);
        }
        function nP(e, t) {
            if ("input" === e || "change" === e) return nv(t);
        }
        var n_ =
            "function" == typeof Object.is
                ? Object.is
                : function (e, t) {
                      return (
                          (e === t &&
                              (0 !== e || 1 / e == 1 / t)) ||
                          (e != e && t != t)
                      );
                  };
        function nT(e, t) {
            if (n_(e, t)) return !0;
            if (
                "object" != typeof e ||
                null === e ||
                "object" != typeof t ||
                null === t
            )
                return !1;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (r = 0; r < n.length; r++) {
                var l = n[r];
                if (!ee.call(t, l) || !n_(e[l], t[l])) return !1;
            }
            return !0;
        }
        function nA(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
        }
        function nj(e, t) {
            var n,
                r = nA(e);
            for (e = 0; r; ) {
                if (3 === r.nodeType) {
                    if (
                        ((n = e + r.textContent.length),
                        e <= t && n >= t)
                    )
                        return { node: r, offset: t - e };
                    e = n;
                }
                e: {
                    for (; r; ) {
                        if (r.nextSibling) {
                            r = r.nextSibling;
                            break e;
                        }
                        r = r.parentNode;
                    }
                    r = void 0;
                }
                r = nA(r);
            }
        }
        function nL(e) {
            e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                    ? e.ownerDocument.defaultView
                    : window;
            for (
                var t = tt(e.document);
                t instanceof e.HTMLIFrameElement;
            ) {
                try {
                    var n =
                        "string" ==
                        typeof t.contentWindow.location.href;
                } catch (e) {
                    n = !1;
                }
                if (n) e = t.contentWindow;
                else break;
                t = tt(e.document);
            }
            return t;
        }
        function nO(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return (
                t &&
                (("input" === t &&
                    ("text" === e.type ||
                        "search" === e.type ||
                        "tel" === e.type ||
                        "url" === e.type ||
                        "password" === e.type)) ||
                    "textarea" === t ||
                    "true" === e.contentEditable)
            );
        }
        var nD =
                tz &&
                "documentMode" in document &&
                11 >= document.documentMode,
            nM = null,
            nR = null,
            nB = null,
            nI = !1;
        function n$(e, t, n) {
            var r =
                n.window === n
                    ? n.document
                    : 9 === n.nodeType
                      ? n
                      : n.ownerDocument;
            nI ||
                null == nM ||
                nM !== tt(r) ||
                ((r =
                    "selectionStart" in (r = nM) && nO(r)
                        ? {
                              start: r.selectionStart,
                              end: r.selectionEnd,
                          }
                        : {
                              anchorNode: (r = (
                                  (r.ownerDocument &&
                                      r.ownerDocument
                                          .defaultView) ||
                                  window
                              ).getSelection()).anchorNode,
                              anchorOffset: r.anchorOffset,
                              focusNode: r.focusNode,
                              focusOffset: r.focusOffset,
                          }),
                (nB && nT(nB, r)) ||
                    ((nB = r),
                    0 < (r = us(nR, "onSelect")).length &&
                        ((t = new tq(
                            "onSelect",
                            "select",
                            null,
                            t,
                            n,
                        )),
                        e.push({ event: t, listeners: r }),
                        (t.target = nM))));
        }
        function nU(e, t) {
            var n = {};
            return (
                (n[e.toLowerCase()] = t.toLowerCase()),
                (n["Webkit" + e] = "webkit" + t),
                (n["Moz" + e] = "moz" + t),
                n
            );
        }
        var nH = {
                animationend: nU("Animation", "AnimationEnd"),
                animationiteration: nU(
                    "Animation",
                    "AnimationIteration",
                ),
                animationstart: nU("Animation", "AnimationStart"),
                transitionrun: nU("Transition", "TransitionRun"),
                transitionstart: nU(
                    "Transition",
                    "TransitionStart",
                ),
                transitioncancel: nU(
                    "Transition",
                    "TransitionCancel",
                ),
                transitionend: nU("Transition", "TransitionEnd"),
            },
            nV = {},
            nW = {};
        function nQ(e) {
            if (nV[e]) return nV[e];
            if (!nH[e]) return e;
            var t,
                n = nH[e];
            for (t in n)
                if (n.hasOwnProperty(t) && t in nW)
                    return (nV[e] = n[t]);
            return e;
        }
        tz &&
            ((nW = document.createElement("div").style),
            "AnimationEvent" in window ||
                (delete nH.animationend.animation,
                delete nH.animationiteration.animation,
                delete nH.animationstart.animation),
            "TransitionEvent" in window ||
                delete nH.transitionend.transition);
        var nq = nQ("animationend"),
            nG = nQ("animationiteration"),
            nK = nQ("animationstart"),
            nY = nQ("transitionrun"),
            nX = nQ("transitionstart"),
            nZ = nQ("transitioncancel"),
            nJ = nQ("transitionend"),
            n0 = new Map(),
            n1 =
                "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                    " ",
                );
        function n2(e, t) {
            (n0.set(e, t), eJ(t, [e]));
        }
        n1.push("scrollEnd");
        var n3 =
                "function" == typeof reportError
                    ? reportError
                    : function (e) {
                          if (
                              "object" == typeof window &&
                              "function" == typeof window.ErrorEvent
                          ) {
                              var t = new window.ErrorEvent(
                                  "error",
                                  {
                                      bubbles: !0,
                                      cancelable: !0,
                                      message:
                                          "object" == typeof e &&
                                          null !== e &&
                                          "string" ==
                                              typeof e.message
                                              ? String(e.message)
                                              : String(e),
                                      error: e,
                                  },
                              );
                              if (!window.dispatchEvent(t)) return;
                          }
                          console.error(e);
                      },
            n4 = [],
            n5 = 0,
            n8 = 0;
        function n6() {
            for (var e = n5, t = (n8 = n5 = 0); t < e; ) {
                var n = n4[t];
                n4[t++] = null;
                var r = n4[t];
                n4[t++] = null;
                var l = n4[t];
                n4[t++] = null;
                var a = n4[t];
                if (((n4[t++] = null), null !== r && null !== l)) {
                    var o = r.pending;
                    (null === o
                        ? (l.next = l)
                        : ((l.next = o.next), (o.next = l)),
                        (r.pending = l));
                }
                0 !== a && rt(n, l, a);
            }
        }
        function n9(e, t, n, r) {
            ((n4[n5++] = e),
                (n4[n5++] = t),
                (n4[n5++] = n),
                (n4[n5++] = r),
                (n8 |= r),
                (e.lanes |= r),
                null !== (e = e.alternate) && (e.lanes |= r));
        }
        function n7(e, t, n, r) {
            return (n9(e, t, n, r), rn(e));
        }
        function re(e, t) {
            return (n9(e, null, null, t), rn(e));
        }
        function rt(e, t, n) {
            e.lanes |= n;
            var r = e.alternate;
            null !== r && (r.lanes |= n);
            for (var l = !1, a = e.return; null !== a; )
                ((a.childLanes |= n),
                    null !== (r = a.alternate) &&
                        (r.childLanes |= n),
                    22 === a.tag &&
                        (null === (e = a.stateNode) ||
                            1 & e._visibility ||
                            (l = !0)),
                    (e = a),
                    (a = a.return));
            return 3 === e.tag
                ? ((a = e.stateNode),
                  l &&
                      null !== t &&
                      ((l = 31 - ey(n)),
                      null === (r = (e = a.hiddenUpdates)[l])
                          ? (e[l] = [t])
                          : r.push(t),
                      (t.lane = 0x20000000 | n)),
                  a)
                : null;
        }
        function rn(e) {
            if (50 < ss)
                throw ((ss = 0), (su = null), Error(s(185)));
            for (var t = e.return; null !== t; ) t = (e = t).return;
            return 3 === e.tag ? e.stateNode : null;
        }
        var rr = {};
        function rl(e, t, n, r) {
            ((this.tag = e),
                (this.key = n),
                (this.sibling =
                    this.child =
                    this.return =
                    this.stateNode =
                    this.type =
                    this.elementType =
                        null),
                (this.index = 0),
                (this.refCleanup = this.ref = null),
                (this.pendingProps = t),
                (this.dependencies =
                    this.memoizedState =
                    this.updateQueue =
                    this.memoizedProps =
                        null),
                (this.mode = r),
                (this.subtreeFlags = this.flags = 0),
                (this.deletions = null),
                (this.childLanes = this.lanes = 0),
                (this.alternate = null));
        }
        function ra(e, t, n, r) {
            return new rl(e, t, n, r);
        }
        function ro(e) {
            return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function ri(e, t) {
            var n = e.alternate;
            return (
                null === n
                    ? (((n = ra(
                          e.tag,
                          t,
                          e.key,
                          e.mode,
                      )).elementType = e.elementType),
                      (n.type = e.type),
                      (n.stateNode = e.stateNode),
                      (n.alternate = e),
                      (e.alternate = n))
                    : ((n.pendingProps = t),
                      (n.type = e.type),
                      (n.flags = 0),
                      (n.subtreeFlags = 0),
                      (n.deletions = null)),
                (n.flags = 0x3e00000 & e.flags),
                (n.childLanes = e.childLanes),
                (n.lanes = e.lanes),
                (n.child = e.child),
                (n.memoizedProps = e.memoizedProps),
                (n.memoizedState = e.memoizedState),
                (n.updateQueue = e.updateQueue),
                (t = e.dependencies),
                (n.dependencies =
                    null === t
                        ? null
                        : {
                              lanes: t.lanes,
                              firstContext: t.firstContext,
                          }),
                (n.sibling = e.sibling),
                (n.index = e.index),
                (n.ref = e.ref),
                (n.refCleanup = e.refCleanup),
                n
            );
        }
        function rs(e, t) {
            e.flags &= 0x3e00002;
            var n = e.alternate;
            return (
                null === n
                    ? ((e.childLanes = 0),
                      (e.lanes = t),
                      (e.child = null),
                      (e.subtreeFlags = 0),
                      (e.memoizedProps = null),
                      (e.memoizedState = null),
                      (e.updateQueue = null),
                      (e.dependencies = null),
                      (e.stateNode = null))
                    : ((e.childLanes = n.childLanes),
                      (e.lanes = n.lanes),
                      (e.child = n.child),
                      (e.subtreeFlags = 0),
                      (e.deletions = null),
                      (e.memoizedProps = n.memoizedProps),
                      (e.memoizedState = n.memoizedState),
                      (e.updateQueue = n.updateQueue),
                      (e.type = n.type),
                      (e.dependencies =
                          null === (t = n.dependencies)
                              ? null
                              : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext,
                                })),
                e
            );
        }
        function ru(e, t, n, r, l, a) {
            var o = 0;
            if (((r = e), "function" == typeof e)) ro(e) && (o = 1);
            else if ("string" == typeof e)
                o = !(function (e, t, n) {
                    if (1 === n || null != t.itemProp) return !1;
                    switch (e) {
                        case "meta":
                        case "title":
                            return !0;
                        case "style":
                            if (
                                "string" != typeof t.precedence ||
                                "string" != typeof t.href ||
                                "" === t.href
                            )
                                break;
                            return !0;
                        case "link":
                            if (
                                "string" != typeof t.rel ||
                                "string" != typeof t.href ||
                                "" === t.href ||
                                t.onLoad ||
                                t.onError
                            )
                                break;
                            if ("stylesheet" === t.rel)
                                return (
                                    (e = t.disabled),
                                    "string" ==
                                        typeof t.precedence &&
                                        null == e
                                );
                            return !0;
                        case "script":
                            if (
                                t.async &&
                                "function" != typeof t.async &&
                                "symbol" != typeof t.async &&
                                !t.onLoad &&
                                !t.onError &&
                                t.src &&
                                "string" == typeof t.src
                            )
                                return !0;
                    }
                    return !1;
                })(e, n, U.current)
                    ? "html" === e || "head" === e || "body" === e
                        ? 27
                        : 5
                    : 26;
            else
                e: switch (e) {
                    case F:
                        return (
                            ((e = ra(31, n, t, l)).elementType = F),
                            (e.lanes = a),
                            e
                        );
                    case b:
                        return rc(n.children, l, a, t);
                    case v:
                        ((o = 8), (l |= 24));
                        break;
                    case x:
                        return (
                            ((e = ra(12, n, t, 2 | l)).elementType =
                                x),
                            (e.lanes = a),
                            e
                        );
                    case E:
                        return (
                            ((e = ra(13, n, t, l)).elementType = E),
                            (e.lanes = a),
                            e
                        );
                    case C:
                        return (
                            ((e = ra(19, n, t, l)).elementType = C),
                            (e.lanes = a),
                            e
                        );
                    default:
                        if ("object" == typeof e && null !== e)
                            switch (e.$$typeof) {
                                case w:
                                    o = 10;
                                    break e;
                                case k:
                                    o = 9;
                                    break e;
                                case S:
                                    o = 11;
                                    break e;
                                case N:
                                    o = 14;
                                    break e;
                                case z:
                                    ((o = 16), (r = null));
                                    break e;
                            }
                        ((o = 29),
                            (n = Error(
                                s(
                                    130,
                                    null === e ? "null" : typeof e,
                                    "",
                                ),
                            )),
                            (r = null));
                }
            return (
                ((t = ra(o, n, t, l)).elementType = e),
                (t.type = r),
                (t.lanes = a),
                t
            );
        }
        function rc(e, t, n, r) {
            return (((e = ra(7, e, r, t)).lanes = n), e);
        }
        function rd(e, t, n) {
            return (((e = ra(6, e, null, t)).lanes = n), e);
        }
        function rf(e) {
            var t = ra(18, null, null, 0);
            return ((t.stateNode = e), t);
        }
        function rp(e, t, n) {
            return (
                ((t = ra(
                    4,
                    null !== e.children ? e.children : [],
                    e.key,
                    t,
                )).lanes = n),
                (t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation,
                }),
                t
            );
        }
        var rm = new WeakMap();
        function rh(e, t) {
            if ("object" == typeof e && null !== e) {
                var n = rm.get(e);
                return void 0 !== n
                    ? n
                    : ((t = { value: e, source: t, stack: J(t) }),
                      rm.set(e, t),
                      t);
            }
            return { value: e, source: t, stack: J(t) };
        }
        var rg = [],
            ry = 0,
            rb = null,
            rv = 0,
            rx = [],
            rk = 0,
            rw = null,
            rS = 1,
            rE = "";
        function rC(e, t) {
            ((rg[ry++] = rv), (rg[ry++] = rb), (rb = e), (rv = t));
        }
        function rN(e, t, n) {
            ((rx[rk++] = rS),
                (rx[rk++] = rE),
                (rx[rk++] = rw),
                (rw = e));
            var r = rS;
            e = rE;
            var l = 32 - ey(r) - 1;
            ((r &= ~(1 << l)), (n += 1));
            var a = 32 - ey(t) + l;
            if (30 < a) {
                var o = l - (l % 5);
                ((a = (r & ((1 << o) - 1)).toString(32)),
                    (r >>= o),
                    (l -= o),
                    (rS = (1 << (32 - ey(t) + l)) | (n << l) | r),
                    (rE = a + e));
            } else ((rS = (1 << a) | (n << l) | r), (rE = e));
        }
        function rz(e) {
            null !== e.return && (rC(e, 1), rN(e, 1, 0));
        }
        function rF(e) {
            for (; e === rb; )
                ((rb = rg[--ry]),
                    (rg[ry] = null),
                    (rv = rg[--ry]),
                    (rg[ry] = null));
            for (; e === rw; )
                ((rw = rx[--rk]),
                    (rx[rk] = null),
                    (rE = rx[--rk]),
                    (rx[rk] = null),
                    (rS = rx[--rk]),
                    (rx[rk] = null));
        }
        function rP(e, t) {
            ((rx[rk++] = rS),
                (rx[rk++] = rE),
                (rx[rk++] = rw),
                (rS = t.id),
                (rE = t.overflow),
                (rw = e));
        }
        var r_ = null,
            rT = null,
            rA = !1,
            rj = null,
            rL = !1,
            rO = Error(s(519));
        function rD(e) {
            var t = Error(
                s(
                    418,
                    1 < arguments.length &&
                        void 0 !== arguments[1] &&
                        arguments[1]
                        ? "text"
                        : "HTML",
                    "",
                ),
            );
            throw (rU(rh(t, e)), rO);
        }
        function rM(e) {
            var t = e.stateNode,
                n = e.type,
                r = e.memoizedProps;
            switch (((t[eM] = e), (t[eR] = r), n)) {
                case "dialog":
                    (ut("cancel", t), ut("close", t));
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ut("load", t);
                    break;
                case "video":
                case "audio":
                    for (n = 0; n < s9.length; n++) ut(s9[n], t);
                    break;
                case "source":
                    ut("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    (ut("error", t), ut("load", t));
                    break;
                case "details":
                    ut("toggle", t);
                    break;
                case "input":
                    (ut("invalid", t),
                        ta(
                            t,
                            r.value,
                            r.defaultValue,
                            r.checked,
                            r.defaultChecked,
                            r.type,
                            r.name,
                            !0,
                        ));
                    break;
                case "select":
                    ut("invalid", t);
                    break;
                case "textarea":
                    (ut("invalid", t),
                        tu(t, r.value, r.defaultValue, r.children));
            }
            (("string" != typeof (n = r.children) &&
                "number" != typeof n &&
                "bigint" != typeof n) ||
            t.textContent === "" + n ||
            !0 === r.suppressHydrationWarning ||
            um(t.textContent, n)
                ? (null != r.popover &&
                      (ut("beforetoggle", t), ut("toggle", t)),
                  null != r.onScroll && ut("scroll", t),
                  null != r.onScrollEnd && ut("scrollend", t),
                  null != r.onClick && (t.onclick = tb),
                  (t = !0))
                : (t = !1),
                t || rD(e, !0));
        }
        function rR(e) {
            for (r_ = e.return; r_; )
                switch (r_.tag) {
                    case 5:
                    case 31:
                    case 13:
                        rL = !1;
                        return;
                    case 27:
                    case 3:
                        rL = !0;
                        return;
                    default:
                        r_ = r_.return;
                }
        }
        function rB(e) {
            if (e !== r_) return !1;
            if (!rA) return (rR(e), (rA = !0), !1);
            var t,
                n = e.tag;
            if (
                ((t = 3 !== n && 27 !== n) &&
                    ((t = 5 === n) &&
                        (t =
                            "form" === (t = e.type) ||
                            "button" === t ||
                            uE(e.type, e.memoizedProps)),
                    (t = !t)),
                t && rT && rD(e),
                rR(e),
                13 === n)
            ) {
                if (
                    !(e =
                        null !== (e = e.memoizedState)
                            ? e.dehydrated
                            : null)
                )
                    throw Error(s(317));
                rT = uI(e);
            } else if (31 === n) {
                if (
                    !(e =
                        null !== (e = e.memoizedState)
                            ? e.dehydrated
                            : null)
                )
                    throw Error(s(317));
                rT = uI(e);
            } else
                27 === n
                    ? ((n = rT),
                      uT(e.type)
                          ? ((e = uB), (uB = null), (rT = e))
                          : (rT = n))
                    : (rT = r_
                          ? uR(e.stateNode.nextSibling)
                          : null);
            return !0;
        }
        function rI() {
            ((rT = r_ = null), (rA = !1));
        }
        function r$() {
            var e = rj;
            return (
                null !== e &&
                    (null === i4 ? (i4 = e) : i4.push.apply(i4, e),
                    (rj = null)),
                e
            );
        }
        function rU(e) {
            null === rj ? (rj = [e]) : rj.push(e);
        }
        var rH = B(null),
            rV = null,
            rW = null;
        function rQ(e, t, n) {
            ($(rH, t._currentValue), (t._currentValue = n));
        }
        function rq(e) {
            ((e._currentValue = rH.current), I(rH));
        }
        function rG(e, t, n) {
            for (; null !== e; ) {
                var r = e.alternate;
                if (
                    ((e.childLanes & t) !== t
                        ? ((e.childLanes |= t),
                          null !== r && (r.childLanes |= t))
                        : null !== r &&
                          (r.childLanes & t) !== t &&
                          (r.childLanes |= t),
                    e === n)
                )
                    break;
                e = e.return;
            }
        }
        function rK(e, t, n, r) {
            var l = e.child;
            for (null !== l && (l.return = e); null !== l; ) {
                var a = l.dependencies;
                if (null !== a) {
                    var o = l.child;
                    a = a.firstContext;
                    e: for (; null !== a; ) {
                        var i = a;
                        a = l;
                        for (var u = 0; u < t.length; u++)
                            if (i.context === t[u]) {
                                ((a.lanes |= n),
                                    null !== (i = a.alternate) &&
                                        (i.lanes |= n),
                                    rG(a.return, n, e),
                                    r || (o = null));
                                break e;
                            }
                        a = i.next;
                    }
                } else if (18 === l.tag) {
                    if (null === (o = l.return))
                        throw Error(s(341));
                    ((o.lanes |= n),
                        null !== (a = o.alternate) &&
                            (a.lanes |= n),
                        rG(o, n, e),
                        (o = null));
                } else o = l.child;
                if (null !== o) o.return = l;
                else
                    for (o = l; null !== o; ) {
                        if (o === e) {
                            o = null;
                            break;
                        }
                        if (null !== (l = o.sibling)) {
                            ((l.return = o.return), (o = l));
                            break;
                        }
                        o = o.return;
                    }
                l = o;
            }
        }
        function rY(e, t, n, r) {
            e = null;
            for (var l = t, a = !1; null !== l; ) {
                if (!a) {
                    if (0 != (524288 & l.flags)) a = !0;
                    else if (0 != (262144 & l.flags)) break;
                }
                if (10 === l.tag) {
                    var o = l.alternate;
                    if (null === o) throw Error(s(387));
                    if (null !== (o = o.memoizedProps)) {
                        var i = l.type;
                        n_(l.pendingProps.value, o.value) ||
                            (null !== e ? e.push(i) : (e = [i]));
                    }
                } else if (l === W.current) {
                    if (null === (o = l.alternate))
                        throw Error(s(387));
                    o.memoizedState.memoizedState !==
                        l.memoizedState.memoizedState &&
                        (null !== e ? e.push(ca) : (e = [ca]));
                }
                l = l.return;
            }
            (null !== e && rK(t, e, n, r), (t.flags |= 262144));
        }
        function rX(e) {
            for (e = e.firstContext; null !== e; ) {
                if (!n_(e.context._currentValue, e.memoizedValue))
                    return !0;
                e = e.next;
            }
            return !1;
        }
        function rZ(e) {
            ((rV = e),
                (rW = null),
                null !== (e = e.dependencies) &&
                    (e.firstContext = null));
        }
        function rJ(e) {
            return r1(rV, e);
        }
        function r0(e, t) {
            return (null === rV && rZ(e), r1(e, t));
        }
        function r1(e, t) {
            var n = t._currentValue;
            if (
                ((t = { context: t, memoizedValue: n, next: null }),
                null === rW)
            ) {
                if (null === e) throw Error(s(308));
                ((rW = t),
                    (e.dependencies = {
                        lanes: 0,
                        firstContext: t,
                    }),
                    (e.flags |= 524288));
            } else rW = rW.next = t;
            return n;
        }
        var r2 =
                "u" > typeof AbortController
                    ? AbortController
                    : function () {
                          var e = [],
                              t = (this.signal = {
                                  aborted: !1,
                                  addEventListener: function (
                                      t,
                                      n,
                                  ) {
                                      e.push(n);
                                  },
                              });
                          this.abort = function () {
                              ((t.aborted = !0),
                                  e.forEach(function (e) {
                                      return e();
                                  }));
                          };
                      },
            r3 = l.unstable_scheduleCallback,
            r4 = l.unstable_NormalPriority,
            r5 = {
                $$typeof: w,
                Consumer: null,
                Provider: null,
                _currentValue: null,
                _currentValue2: null,
                _threadCount: 0,
            };
        function r8() {
            return {
                controller: new r2(),
                data: new Map(),
                refCount: 0,
            };
        }
        function r6(e) {
            (e.refCount--,
                0 === e.refCount &&
                    r3(r4, function () {
                        e.controller.abort();
                    }));
        }
        var r9 = null,
            r7 = 0,
            le = 0,
            lt = null;
        function ln() {
            if (0 == --r7 && null !== r9) {
                null !== lt && (lt.status = "fulfilled");
                var e = r9;
                ((r9 = null), (le = 0), (lt = null));
                for (var t = 0; t < e.length; t++) (0, e[t])();
            }
        }
        var lr = L.S;
        L.S = function (e, t) {
            ((i6 = ea()),
                "object" == typeof t &&
                    null !== t &&
                    "function" == typeof t.then &&
                    (function (e) {
                        if (null === r9) {
                            var t = (r9 = []);
                            ((r7 = 0),
                                (le = s3()),
                                (lt = {
                                    status: "pending",
                                    value: void 0,
                                    then: function (e) {
                                        t.push(e);
                                    },
                                }));
                        }
                        (r7++, e.then(ln, ln));
                    })(t),
                null !== lr && lr(e, t));
        };
        var ll = B(null);
        function la() {
            var e = ll.current;
            return null !== e ? e : iU.pooledCache;
        }
        function lo(e, t) {
            null === t ? $(ll, ll.current) : $(ll, t.pool);
        }
        function li() {
            var e = la();
            return null === e
                ? null
                : { parent: r5._currentValue, pool: e };
        }
        var ls = Error(s(460)),
            lu = Error(s(474)),
            lc = Error(s(542)),
            ld = { then: function () {} };
        function lf(e) {
            return (
                "fulfilled" === (e = e.status) || "rejected" === e
            );
        }
        function lp(e, t, n) {
            switch (
                (void 0 === (n = e[n])
                    ? e.push(t)
                    : n !== t && (t.then(tb, tb), (t = n)),
                t.status)
            ) {
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw (ly((e = t.reason)), e);
                default:
                    if ("string" == typeof t.status) t.then(tb, tb);
                    else {
                        if (
                            null !== (e = iU) &&
                            100 < e.shellSuspendCounter
                        )
                            throw Error(s(482));
                        (((e = t).status = "pending"),
                            e.then(
                                function (e) {
                                    if ("pending" === t.status) {
                                        var n = t;
                                        ((n.status = "fulfilled"),
                                            (n.value = e));
                                    }
                                },
                                function (e) {
                                    if ("pending" === t.status) {
                                        var n = t;
                                        ((n.status = "rejected"),
                                            (n.reason = e));
                                    }
                                },
                            ));
                    }
                    switch (t.status) {
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw (ly((e = t.reason)), e);
                    }
                    throw ((lh = t), ls);
            }
        }
        function lm(e) {
            try {
                return (0, e._init)(e._payload);
            } catch (e) {
                if (
                    null !== e &&
                    "object" == typeof e &&
                    "function" == typeof e.then
                )
                    throw ((lh = e), ls);
                throw e;
            }
        }
        var lh = null;
        function lg() {
            if (null === lh) throw Error(s(459));
            var e = lh;
            return ((lh = null), e);
        }
        function ly(e) {
            if (e === ls || e === lc) throw Error(s(483));
        }
        var lb = null,
            lv = 0;
        function lx(e) {
            var t = lv;
            return (
                (lv += 1),
                null === lb && (lb = []),
                lp(lb, e, t)
            );
        }
        function lk(e, t) {
            e.ref = void 0 !== (t = t.props.ref) ? t : null;
        }
        function lw(e, t) {
            if (t.$$typeof === h) throw Error(s(525));
            throw Error(
                s(
                    31,
                    "[object Object]" ===
                        (e = Object.prototype.toString.call(t))
                        ? "object with keys {" +
                              Object.keys(t).join(", ") +
                              "}"
                        : e,
                ),
            );
        }
        function lS(e) {
            function t(t, n) {
                if (e) {
                    var r = t.deletions;
                    null === r
                        ? ((t.deletions = [n]), (t.flags |= 16))
                        : r.push(n);
                }
            }
            function n(n, r) {
                if (!e) return null;
                for (; null !== r; ) (t(n, r), (r = r.sibling));
                return null;
            }
            function r(e) {
                for (var t = new Map(); null !== e; )
                    (null !== e.key
                        ? t.set(e.key, e)
                        : t.set(e.index, e),
                        (e = e.sibling));
                return t;
            }
            function l(e, t) {
                return (
                    ((e = ri(e, t)).index = 0),
                    (e.sibling = null),
                    e
                );
            }
            function a(t, n, r) {
                return ((t.index = r), e)
                    ? null !== (r = t.alternate)
                        ? (r = r.index) < n
                            ? ((t.flags |= 0x4000002), n)
                            : r
                        : ((t.flags |= 0x4000002), n)
                    : ((t.flags |= 1048576), n);
            }
            function o(t) {
                return (
                    e &&
                        null === t.alternate &&
                        (t.flags |= 0x4000002),
                    t
                );
            }
            function i(e, t, n, r) {
                return (
                    null === t || 6 !== t.tag
                        ? ((t = rd(n, e.mode, r)).return = e)
                        : ((t = l(t, n)).return = e),
                    t
                );
            }
            function u(e, t, n, r) {
                var a = n.type;
                return a === b
                    ? d(e, t, n.props.children, r, n.key)
                    : (null !== t &&
                      (t.elementType === a ||
                          ("object" == typeof a &&
                              null !== a &&
                              a.$$typeof === z &&
                              lm(a) === t.type))
                          ? lk((t = l(t, n.props)), n)
                          : lk(
                                (t = ru(
                                    n.type,
                                    n.key,
                                    n.props,
                                    null,
                                    e.mode,
                                    r,
                                )),
                                n,
                            ),
                      (t.return = e),
                      t);
            }
            function c(e, t, n, r) {
                return (
                    null === t ||
                    4 !== t.tag ||
                    t.stateNode.containerInfo !== n.containerInfo ||
                    t.stateNode.implementation !== n.implementation
                        ? ((t = rp(n, e.mode, r)).return = e)
                        : ((t = l(t, n.children || [])).return = e),
                    t
                );
            }
            function d(e, t, n, r, a) {
                return (
                    null === t || 7 !== t.tag
                        ? ((t = rc(n, e.mode, r, a)).return = e)
                        : ((t = l(t, n)).return = e),
                    t
                );
            }
            function f(e, t, n) {
                if (
                    ("string" == typeof t && "" !== t) ||
                    "number" == typeof t ||
                    "bigint" == typeof t
                )
                    return (
                        ((t = rd("" + t, e.mode, n)).return = e),
                        t
                    );
                if ("object" == typeof t && null !== t) {
                    switch (t.$$typeof) {
                        case g:
                            return (
                                lk(
                                    (n = ru(
                                        t.type,
                                        t.key,
                                        t.props,
                                        null,
                                        e.mode,
                                        n,
                                    )),
                                    t,
                                ),
                                (n.return = e),
                                n
                            );
                        case y:
                            return (
                                ((t = rp(t, e.mode, n)).return = e),
                                t
                            );
                        case z:
                            return f(e, (t = lm(t)), n);
                    }
                    if (j(t) || T(t))
                        return (
                            ((t = rc(t, e.mode, n, null)).return =
                                e),
                            t
                        );
                    if ("function" == typeof t.then)
                        return f(e, lx(t), n);
                    if (t.$$typeof === w) return f(e, r0(e, t), n);
                    lw(e, t);
                }
                return null;
            }
            function p(e, t, n, r) {
                var l = null !== t ? t.key : null;
                if (
                    ("string" == typeof n && "" !== n) ||
                    "number" == typeof n ||
                    "bigint" == typeof n
                )
                    return null !== l ? null : i(e, t, "" + n, r);
                if ("object" == typeof n && null !== n) {
                    switch (n.$$typeof) {
                        case g:
                            return n.key === l
                                ? u(e, t, n, r)
                                : null;
                        case y:
                            return n.key === l
                                ? c(e, t, n, r)
                                : null;
                        case z:
                            return p(e, t, (n = lm(n)), r);
                    }
                    if (j(n) || T(n))
                        return null !== l
                            ? null
                            : d(e, t, n, r, null);
                    if ("function" == typeof n.then)
                        return p(e, t, lx(n), r);
                    if (n.$$typeof === w)
                        return p(e, t, r0(e, n), r);
                    lw(e, n);
                }
                return null;
            }
            function m(e, t, n, r, l) {
                if (
                    ("string" == typeof r && "" !== r) ||
                    "number" == typeof r ||
                    "bigint" == typeof r
                )
                    return i(t, (e = e.get(n) || null), "" + r, l);
                if ("object" == typeof r && null !== r) {
                    switch (r.$$typeof) {
                        case g:
                            return u(
                                t,
                                (e =
                                    e.get(
                                        null === r.key ? n : r.key,
                                    ) || null),
                                r,
                                l,
                            );
                        case y:
                            return c(
                                t,
                                (e =
                                    e.get(
                                        null === r.key ? n : r.key,
                                    ) || null),
                                r,
                                l,
                            );
                        case z:
                            return m(e, t, n, (r = lm(r)), l);
                    }
                    if (j(r) || T(r))
                        return d(
                            t,
                            (e = e.get(n) || null),
                            r,
                            l,
                            null,
                        );
                    if ("function" == typeof r.then)
                        return m(e, t, n, lx(r), l);
                    if (r.$$typeof === w)
                        return m(e, t, n, r0(t, r), l);
                    lw(t, r);
                }
                return null;
            }
            return function (i, u, c, d) {
                try {
                    lv = 0;
                    var h = (function i(u, c, d, h) {
                        if (
                            ("object" == typeof d &&
                                null !== d &&
                                d.type === b &&
                                null === d.key &&
                                (d = d.props.children),
                            "object" == typeof d && null !== d)
                        ) {
                            switch (d.$$typeof) {
                                case g:
                                    e: {
                                        for (
                                            var v = d.key;
                                            null !== c;
                                        ) {
                                            if (c.key === v) {
                                                if (
                                                    (v = d.type) ===
                                                    b
                                                ) {
                                                    if (
                                                        7 === c.tag
                                                    ) {
                                                        (n(
                                                            u,
                                                            c.sibling,
                                                        ),
                                                            ((h = l(
                                                                c,
                                                                d
                                                                    .props
                                                                    .children,
                                                            )).return =
                                                                u),
                                                            (u =
                                                                h));
                                                        break e;
                                                    }
                                                } else if (
                                                    c.elementType ===
                                                        v ||
                                                    ("object" ==
                                                        typeof v &&
                                                        null !==
                                                            v &&
                                                        v.$$typeof ===
                                                            z &&
                                                        lm(v) ===
                                                            c.type)
                                                ) {
                                                    (n(
                                                        u,
                                                        c.sibling,
                                                    ),
                                                        lk(
                                                            (h = l(
                                                                c,
                                                                d.props,
                                                            )),
                                                            d,
                                                        ),
                                                        (h.return =
                                                            u),
                                                        (u = h));
                                                    break e;
                                                }
                                                n(u, c);
                                                break;
                                            }
                                            (t(u, c),
                                                (c = c.sibling));
                                        }
                                        (d.type === b
                                            ? ((h = rc(
                                                  d.props.children,
                                                  u.mode,
                                                  h,
                                                  d.key,
                                              )).return = u)
                                            : (lk(
                                                  (h = ru(
                                                      d.type,
                                                      d.key,
                                                      d.props,
                                                      null,
                                                      u.mode,
                                                      h,
                                                  )),
                                                  d,
                                              ),
                                              (h.return = u)),
                                            (u = h));
                                    }
                                    return o(u);
                                case y:
                                    e: {
                                        for (
                                            v = d.key;
                                            null !== c;
                                        ) {
                                            if (c.key === v)
                                                if (
                                                    4 === c.tag &&
                                                    c.stateNode
                                                        .containerInfo ===
                                                        d.containerInfo &&
                                                    c.stateNode
                                                        .implementation ===
                                                        d.implementation
                                                ) {
                                                    (n(
                                                        u,
                                                        c.sibling,
                                                    ),
                                                        ((h = l(
                                                            c,
                                                            d.children ||
                                                                [],
                                                        )).return =
                                                            u),
                                                        (u = h));
                                                    break e;
                                                } else {
                                                    n(u, c);
                                                    break;
                                                }
                                            (t(u, c),
                                                (c = c.sibling));
                                        }
                                        (((h = rp(
                                            d,
                                            u.mode,
                                            h,
                                        )).return = u),
                                            (u = h));
                                    }
                                    return o(u);
                                case z:
                                    return i(u, c, (d = lm(d)), h);
                            }
                            if (j(d))
                                return (function (l, o, i, s) {
                                    for (
                                        var u = null,
                                            c = null,
                                            d = o,
                                            h = (o = 0),
                                            g = null;
                                        null !== d && h < i.length;
                                        h++
                                    ) {
                                        d.index > h
                                            ? ((g = d), (d = null))
                                            : (g = d.sibling);
                                        var y = p(l, d, i[h], s);
                                        if (null === y) {
                                            null === d && (d = g);
                                            break;
                                        }
                                        (e &&
                                            d &&
                                            null === y.alternate &&
                                            t(l, d),
                                            (o = a(y, o, h)),
                                            null === c
                                                ? (u = y)
                                                : (c.sibling = y),
                                            (c = y),
                                            (d = g));
                                    }
                                    if (h === i.length)
                                        return (
                                            n(l, d),
                                            rA && rC(l, h),
                                            u
                                        );
                                    if (null === d) {
                                        for (; h < i.length; h++)
                                            null !==
                                                (d = f(
                                                    l,
                                                    i[h],
                                                    s,
                                                )) &&
                                                ((o = a(d, o, h)),
                                                null === c
                                                    ? (u = d)
                                                    : (c.sibling =
                                                          d),
                                                (c = d));
                                        return (rA && rC(l, h), u);
                                    }
                                    for (
                                        d = r(d);
                                        h < i.length;
                                        h++
                                    )
                                        null !==
                                            (g = m(
                                                d,
                                                l,
                                                h,
                                                i[h],
                                                s,
                                            )) &&
                                            (e &&
                                                null !==
                                                    g.alternate &&
                                                d.delete(
                                                    null === g.key
                                                        ? h
                                                        : g.key,
                                                ),
                                            (o = a(g, o, h)),
                                            null === c
                                                ? (u = g)
                                                : (c.sibling = g),
                                            (c = g));
                                    return (
                                        e &&
                                            d.forEach(function (e) {
                                                return t(l, e);
                                            }),
                                        rA && rC(l, h),
                                        u
                                    );
                                })(u, c, d, h);
                            if (T(d)) {
                                if ("function" != typeof (v = T(d)))
                                    throw Error(s(150));
                                return (function (l, o, i, u) {
                                    if (null == i)
                                        throw Error(s(151));
                                    for (
                                        var c = null,
                                            d = null,
                                            h = o,
                                            g = (o = 0),
                                            y = null,
                                            b = i.next();
                                        null !== h && !b.done;
                                        g++, b = i.next()
                                    ) {
                                        h.index > g
                                            ? ((y = h), (h = null))
                                            : (y = h.sibling);
                                        var v = p(l, h, b.value, u);
                                        if (null === v) {
                                            null === h && (h = y);
                                            break;
                                        }
                                        (e &&
                                            h &&
                                            null === v.alternate &&
                                            t(l, h),
                                            (o = a(v, o, g)),
                                            null === d
                                                ? (c = v)
                                                : (d.sibling = v),
                                            (d = v),
                                            (h = y));
                                    }
                                    if (b.done)
                                        return (
                                            n(l, h),
                                            rA && rC(l, g),
                                            c
                                        );
                                    if (null === h) {
                                        for (
                                            ;
                                            !b.done;
                                            g++, b = i.next()
                                        )
                                            null !==
                                                (b = f(
                                                    l,
                                                    b.value,
                                                    u,
                                                )) &&
                                                ((o = a(b, o, g)),
                                                null === d
                                                    ? (c = b)
                                                    : (d.sibling =
                                                          b),
                                                (d = b));
                                        return (rA && rC(l, g), c);
                                    }
                                    for (
                                        h = r(h);
                                        !b.done;
                                        g++, b = i.next()
                                    )
                                        null !==
                                            (b = m(
                                                h,
                                                l,
                                                g,
                                                b.value,
                                                u,
                                            )) &&
                                            (e &&
                                                null !==
                                                    b.alternate &&
                                                h.delete(
                                                    null === b.key
                                                        ? g
                                                        : b.key,
                                                ),
                                            (o = a(b, o, g)),
                                            null === d
                                                ? (c = b)
                                                : (d.sibling = b),
                                            (d = b));
                                    return (
                                        e &&
                                            h.forEach(function (e) {
                                                return t(l, e);
                                            }),
                                        rA && rC(l, g),
                                        c
                                    );
                                })(u, c, (d = v.call(d)), h);
                            }
                            if ("function" == typeof d.then)
                                return i(u, c, lx(d), h);
                            if (d.$$typeof === w)
                                return i(u, c, r0(u, d), h);
                            lw(u, d);
                        }
                        return ("string" == typeof d && "" !== d) ||
                            "number" == typeof d ||
                            "bigint" == typeof d
                            ? ((d = "" + d),
                              null !== c && 6 === c.tag
                                  ? (n(u, c.sibling),
                                    ((h = l(c, d)).return = u))
                                  : (n(u, c),
                                    ((h = rd(d, u.mode, h)).return =
                                        u)),
                              o((u = h)))
                            : n(u, c);
                    })(i, u, c, d);
                    return ((lb = null), h);
                } catch (e) {
                    if (e === ls || e === lc) throw e;
                    var v = ra(29, e, null, i.mode);
                    return ((v.lanes = d), (v.return = i), v);
                } finally {
                }
            };
        }
        var lE = lS(!0),
            lC = lS(!1),
            lN = !1;
        function lz(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null,
                },
                callbacks: null,
            };
        }
        function lF(e, t) {
            ((e = e.updateQueue),
                t.updateQueue === e &&
                    (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        callbacks: null,
                    }));
        }
        function lP(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null,
            };
        }
        function l_(e, t, n) {
            var r = e.updateQueue;
            if (null === r) return null;
            if (((r = r.shared), 0 != (2 & i$))) {
                var l = r.pending;
                return (
                    null === l
                        ? (t.next = t)
                        : ((t.next = l.next), (l.next = t)),
                    (r.pending = t),
                    (t = rn(e)),
                    rt(e, null, n),
                    t
                );
            }
            return (n9(e, r, t, n), rn(e));
        }
        function lT(e, t, n) {
            if (
                null !== (t = t.updateQueue) &&
                ((t = t.shared), 0 != (4194048 & n))
            ) {
                var r = t.lanes;
                ((r &= e.pendingLanes),
                    (n |= r),
                    (t.lanes = n),
                    e_(e, n));
            }
        }
        function lA(e, t) {
            var n = e.updateQueue,
                r = e.alternate;
            if (null !== r && n === (r = r.updateQueue)) {
                var l = null,
                    a = null;
                if (null !== (n = n.firstBaseUpdate)) {
                    do {
                        var o = {
                            lane: n.lane,
                            tag: n.tag,
                            payload: n.payload,
                            callback: null,
                            next: null,
                        };
                        (null === a
                            ? (l = a = o)
                            : (a = a.next = o),
                            (n = n.next));
                    } while (null !== n);
                    null === a ? (l = a = t) : (a = a.next = t);
                } else l = a = t;
                ((n = {
                    baseState: r.baseState,
                    firstBaseUpdate: l,
                    lastBaseUpdate: a,
                    shared: r.shared,
                    callbacks: r.callbacks,
                }),
                    (e.updateQueue = n));
                return;
            }
            (null === (e = n.lastBaseUpdate)
                ? (n.firstBaseUpdate = t)
                : (e.next = t),
                (n.lastBaseUpdate = t));
        }
        var lj = !1;
        function lL() {
            if (lj) {
                var e = lt;
                if (null !== e) throw e;
            }
        }
        function lO(e, t, n, r) {
            lj = !1;
            var l = e.updateQueue;
            lN = !1;
            var a = l.firstBaseUpdate,
                o = l.lastBaseUpdate,
                i = l.shared.pending;
            if (null !== i) {
                l.shared.pending = null;
                var s = i,
                    u = s.next;
                ((s.next = null),
                    null === o ? (a = u) : (o.next = u),
                    (o = s));
                var c = e.alternate;
                null !== c &&
                    (i = (c = c.updateQueue).lastBaseUpdate) !==
                        o &&
                    (null === i
                        ? (c.firstBaseUpdate = u)
                        : (i.next = u),
                    (c.lastBaseUpdate = s));
            }
            if (null !== a) {
                var d = l.baseState;
                for (o = 0, c = u = s = null, i = a; ; ) {
                    var f = -0x20000001 & i.lane,
                        p = f !== i.lane;
                    if (p ? (iV & f) === f : (r & f) === f) {
                        (0 !== f && f === le && (lj = !0),
                            null !== c &&
                                (c = c.next =
                                    {
                                        lane: 0,
                                        tag: i.tag,
                                        payload: i.payload,
                                        callback: null,
                                        next: null,
                                    }));
                        e: {
                            var h = e,
                                g = i;
                            switch (((f = t), g.tag)) {
                                case 1:
                                    if (
                                        "function" ==
                                        typeof (h = g.payload)
                                    ) {
                                        d = h.call(n, d, f);
                                        break e;
                                    }
                                    d = h;
                                    break e;
                                case 3:
                                    h.flags =
                                        (-65537 & h.flags) | 128;
                                case 0:
                                    if (
                                        null ==
                                        (f =
                                            "function" ==
                                            typeof (h = g.payload)
                                                ? h.call(n, d, f)
                                                : h)
                                    )
                                        break e;
                                    d = m({}, d, f);
                                    break e;
                                case 2:
                                    lN = !0;
                            }
                        }
                        null !== (f = i.callback) &&
                            ((e.flags |= 64),
                            p && (e.flags |= 8192),
                            null === (p = l.callbacks)
                                ? (l.callbacks = [f])
                                : p.push(f));
                    } else
                        ((p = {
                            lane: f,
                            tag: i.tag,
                            payload: i.payload,
                            callback: i.callback,
                            next: null,
                        }),
                            null === c
                                ? ((u = c = p), (s = d))
                                : (c = c.next = p),
                            (o |= f));
                    if (null === (i = i.next))
                        if (null === (i = l.shared.pending)) break;
                        else
                            ((i = (p = i).next),
                                (p.next = null),
                                (l.lastBaseUpdate = p),
                                (l.shared.pending = null));
                }
                (null === c && (s = d),
                    (l.baseState = s),
                    (l.firstBaseUpdate = u),
                    (l.lastBaseUpdate = c),
                    null === a && (l.shared.lanes = 0),
                    (iZ |= o),
                    (e.lanes = o),
                    (e.memoizedState = d));
            }
        }
        function lD(e, t) {
            if ("function" != typeof e) throw Error(s(191, e));
            e.call(t);
        }
        function lM(e, t) {
            var n = e.callbacks;
            if (null !== n)
                for (e.callbacks = null, e = 0; e < n.length; e++)
                    lD(n[e], t);
        }
        var lR = B(null),
            lB = B(0);
        function lI(e, t) {
            ($(lB, (e = iY)), $(lR, t), (iY = e | t.baseLanes));
        }
        function l$() {
            ($(lB, iY), $(lR, lR.current));
        }
        function lU() {
            ((iY = lB.current), I(lR), I(lB));
        }
        var lH = B(null),
            lV = null;
        function lW(e) {
            var t = e.alternate;
            ($(lY, 1 & lY.current),
                $(lH, e),
                null === lV &&
                    (null === t || null !== lR.current
                        ? (lV = e)
                        : null !== t.memoizedState && (lV = e)));
        }
        function lQ(e) {
            ($(lY, lY.current), $(lH, e), null === lV && (lV = e));
        }
        function lq(e) {
            22 === e.tag
                ? ($(lY, lY.current),
                  $(lH, e),
                  null === lV && (lV = e))
                : lG(e);
        }
        function lG() {
            ($(lY, lY.current), $(lH, lH.current));
        }
        function lK(e) {
            (I(lH), lV === e && (lV = null), I(lY));
        }
        var lY = B(0);
        function lX(e) {
            for (var t = e; null !== t; ) {
                if (13 === t.tag) {
                    var n = t.memoizedState;
                    if (
                        null !== n &&
                        (null === (n = n.dehydrated) ||
                            uD(n) ||
                            uM(n))
                    )
                        return t;
                } else if (
                    19 === t.tag &&
                    ("forwards" === t.memoizedProps.revealOrder ||
                        "backwards" ===
                            t.memoizedProps.revealOrder ||
                        "unstable_legacy-backwards" ===
                            t.memoizedProps.revealOrder ||
                        "together" === t.memoizedProps.revealOrder)
                ) {
                    if (0 != (128 & t.flags)) return t;
                } else if (null !== t.child) {
                    ((t.child.return = t), (t = t.child));
                    continue;
                }
                if (t === e) break;
                for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e)
                        return null;
                    t = t.return;
                }
                ((t.sibling.return = t.return), (t = t.sibling));
            }
            return null;
        }
        var lZ = 0,
            lJ = null,
            l0 = null,
            l1 = null,
            l2 = !1,
            l3 = !1,
            l4 = !1,
            l5 = 0,
            l8 = 0,
            l6 = null,
            l9 = 0;
        function l7() {
            throw Error(s(321));
        }
        function ae(e, t) {
            if (null === t) return !1;
            for (var n = 0; n < t.length && n < e.length; n++)
                if (!n_(e[n], t[n])) return !1;
            return !0;
        }
        function at(e, t, n, r, l, a) {
            return (
                (lZ = a),
                (lJ = t),
                (t.memoizedState = null),
                (t.updateQueue = null),
                (t.lanes = 0),
                (L.H =
                    null === e || null === e.memoizedState
                        ? oi
                        : os),
                (l4 = !1),
                (a = n(r, l)),
                (l4 = !1),
                l3 && (a = ar(t, n, r, l)),
                an(e),
                a
            );
        }
        function an(e) {
            L.H = oo;
            var t = null !== l0 && null !== l0.next;
            if (
                ((lZ = 0),
                (l1 = l0 = lJ = null),
                (l2 = !1),
                (l8 = 0),
                (l6 = null),
                t)
            )
                throw Error(s(300));
            null === e ||
                oE ||
                (null !== (e = e.dependencies) &&
                    rX(e) &&
                    (oE = !0));
        }
        function ar(e, t, n, r) {
            lJ = e;
            var l = 0;
            do {
                if (
                    (l3 && (l6 = null),
                    (l8 = 0),
                    (l3 = !1),
                    25 <= l)
                )
                    throw Error(s(301));
                if (
                    ((l += 1),
                    (l1 = l0 = null),
                    null != e.updateQueue)
                ) {
                    var a = e.updateQueue;
                    ((a.lastEffect = null),
                        (a.events = null),
                        (a.stores = null),
                        null != a.memoCache &&
                            (a.memoCache.index = 0));
                }
                ((L.H = ou), (a = t(n, r)));
            } while (l3);
            return a;
        }
        function al() {
            var e = L.H,
                t = e.useState()[0];
            return (
                (t = "function" == typeof t.then ? ad(t) : t),
                (e = e.useState()[0]),
                (null !== l0 ? l0.memoizedState : null) !== e &&
                    (lJ.flags |= 1024),
                t
            );
        }
        function aa() {
            var e = 0 !== l5;
            return ((l5 = 0), e);
        }
        function ao(e, t, n) {
            ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~n));
        }
        function ai(e) {
            if (l2) {
                for (e = e.memoizedState; null !== e; ) {
                    var t = e.queue;
                    (null !== t && (t.pending = null),
                        (e = e.next));
                }
                l2 = !1;
            }
            ((lZ = 0),
                (l1 = l0 = lJ = null),
                (l3 = !1),
                (l8 = l5 = 0),
                (l6 = null));
        }
        function as() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null,
            };
            return (
                null === l1
                    ? (lJ.memoizedState = l1 = e)
                    : (l1 = l1.next = e),
                l1
            );
        }
        function au() {
            if (null === l0) {
                var e = lJ.alternate;
                e = null !== e ? e.memoizedState : null;
            } else e = l0.next;
            var t = null === l1 ? lJ.memoizedState : l1.next;
            if (null !== t) ((l1 = t), (l0 = e));
            else {
                if (null === e) {
                    if (null === lJ.alternate) throw Error(s(467));
                    throw Error(s(310));
                }
                ((e = {
                    memoizedState: (l0 = e).memoizedState,
                    baseState: l0.baseState,
                    baseQueue: l0.baseQueue,
                    queue: l0.queue,
                    next: null,
                }),
                    null === l1
                        ? (lJ.memoizedState = l1 = e)
                        : (l1 = l1.next = e));
            }
            return l1;
        }
        function ac() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
            };
        }
        function ad(e) {
            var t = l8;
            return (
                (l8 += 1),
                null === l6 && (l6 = []),
                (e = lp(l6, e, t)),
                (t = lJ),
                null ===
                    (null === l1 ? t.memoizedState : l1.next) &&
                    (L.H =
                        null === (t = t.alternate) ||
                        null === t.memoizedState
                            ? oi
                            : os),
                e
            );
        }
        function af(e) {
            if (null !== e && "object" == typeof e) {
                if ("function" == typeof e.then) return ad(e);
                if (e.$$typeof === w) return rJ(e);
            }
            throw Error(s(438, String(e)));
        }
        function ap(e) {
            var t = null,
                n = lJ.updateQueue;
            if ((null !== n && (t = n.memoCache), null == t)) {
                var r = lJ.alternate;
                null !== r &&
                    null !== (r = r.updateQueue) &&
                    null != (r = r.memoCache) &&
                    (t = {
                        data: r.data.map(function (e) {
                            return e.slice();
                        }),
                        index: 0,
                    });
            }
            if (
                (null == t && (t = { data: [], index: 0 }),
                null === n && ((n = ac()), (lJ.updateQueue = n)),
                (n.memoCache = t),
                void 0 === (n = t.data[t.index]))
            )
                for (
                    n = t.data[t.index] = Array(e), r = 0;
                    r < e;
                    r++
                )
                    n[r] = P;
            return (t.index++, n);
        }
        function am(e, t) {
            return "function" == typeof t ? t(e) : t;
        }
        function ah(e) {
            return ag(au(), l0, e);
        }
        function ag(e, t, n) {
            var r = e.queue;
            if (null === r) throw Error(s(311));
            r.lastRenderedReducer = n;
            var l = e.baseQueue,
                a = r.pending;
            if (null !== a) {
                if (null !== l) {
                    var o = l.next;
                    ((l.next = a.next), (a.next = o));
                }
                ((t.baseQueue = l = a), (r.pending = null));
            }
            if (((a = e.baseState), null === l))
                e.memoizedState = a;
            else {
                t = l.next;
                var i = (o = null),
                    u = null,
                    c = t,
                    d = !1;
                do {
                    var f = -0x20000001 & c.lane;
                    if (
                        f !== c.lane
                            ? (iV & f) === f
                            : (lZ & f) === f
                    ) {
                        var p = c.revertLane;
                        if (0 === p)
                            (null !== u &&
                                (u = u.next =
                                    {
                                        lane: 0,
                                        revertLane: 0,
                                        gesture: null,
                                        action: c.action,
                                        hasEagerState:
                                            c.hasEagerState,
                                        eagerState: c.eagerState,
                                        next: null,
                                    }),
                                f === le && (d = !0));
                        else if ((lZ & p) === p) {
                            ((c = c.next), p === le && (d = !0));
                            continue;
                        } else
                            ((f = {
                                lane: 0,
                                revertLane: c.revertLane,
                                gesture: null,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null,
                            }),
                                null === u
                                    ? ((i = u = f), (o = a))
                                    : (u = u.next = f),
                                (lJ.lanes |= p),
                                (iZ |= p));
                        ((f = c.action),
                            l4 && n(a, f),
                            (a = c.hasEagerState
                                ? c.eagerState
                                : n(a, f)));
                    } else
                        ((p = {
                            lane: f,
                            revertLane: c.revertLane,
                            gesture: c.gesture,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                            null === u
                                ? ((i = u = p), (o = a))
                                : (u = u.next = p),
                            (lJ.lanes |= f),
                            (iZ |= f));
                    c = c.next;
                } while (null !== c && c !== t);
                if (
                    (null === u ? (o = a) : (u.next = i),
                    !n_(a, e.memoizedState) &&
                        ((oE = !0), d && null !== (n = lt)))
                )
                    throw n;
                ((e.memoizedState = a),
                    (e.baseState = o),
                    (e.baseQueue = u),
                    (r.lastRenderedState = a));
            }
            return (
                null === l && (r.lanes = 0),
                [e.memoizedState, r.dispatch]
            );
        }
        function ay(e) {
            var t = au(),
                n = t.queue;
            if (null === n) throw Error(s(311));
            n.lastRenderedReducer = e;
            var r = n.dispatch,
                l = n.pending,
                a = t.memoizedState;
            if (null !== l) {
                n.pending = null;
                var o = (l = l.next);
                do ((a = e(a, o.action)), (o = o.next));
                while (o !== l);
                (n_(a, t.memoizedState) || (oE = !0),
                    (t.memoizedState = a),
                    null === t.baseQueue && (t.baseState = a),
                    (n.lastRenderedState = a));
            }
            return [a, r];
        }
        function ab(e, t, n) {
            var r = lJ,
                l = au(),
                a = rA;
            if (a) {
                if (void 0 === n) throw Error(s(407));
                n = n();
            } else n = t();
            var o = !n_((l0 || l).memoizedState, n);
            if (
                (o && ((l.memoizedState = n), (oE = !0)),
                (l = l.queue),
                aH(ak.bind(null, r, l, e), [e]),
                l.getSnapshot !== t ||
                    o ||
                    (null !== l1 && 1 & l1.memoizedState.tag))
            ) {
                if (
                    ((r.flags |= 2048),
                    aR(
                        9,
                        { destroy: void 0 },
                        ax.bind(null, r, l, n, t),
                        null,
                    ),
                    null === iU)
                )
                    throw Error(s(349));
                a || 0 != (127 & lZ) || av(r, t, n);
            }
            return n;
        }
        function av(e, t, n) {
            ((e.flags |= 16384),
                (e = { getSnapshot: t, value: n }),
                null === (t = lJ.updateQueue)
                    ? ((t = ac()),
                      (lJ.updateQueue = t),
                      (t.stores = [e]))
                    : null === (n = t.stores)
                      ? (t.stores = [e])
                      : n.push(e));
        }
        function ax(e, t, n, r) {
            ((t.value = n), (t.getSnapshot = r), aw(t) && aS(e));
        }
        function ak(e, t, n) {
            return n(function () {
                aw(t) && aS(e);
            });
        }
        function aw(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !n_(e, n);
            } catch (e) {
                return !0;
            }
        }
        function aS(e) {
            var t = re(e, 2);
            null !== t && sf(t, e, 2);
        }
        function aE(e) {
            var t = as();
            if ("function" == typeof e) {
                var n = e;
                if (((e = n()), l4)) {
                    eg(!0);
                    try {
                        n();
                    } finally {
                        eg(!1);
                    }
                }
            }
            return (
                (t.memoizedState = t.baseState = e),
                (t.queue = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: am,
                    lastRenderedState: e,
                }),
                t
            );
        }
        function aC(e, t, n, r) {
            return (
                (e.baseState = n),
                ag(e, l0, "function" == typeof r ? r : am)
            );
        }
        function aN(e, t, n, r, l) {
            if (or(e)) throw Error(s(485));
            if (null !== (e = t.action)) {
                var a = {
                    payload: l,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function (e) {
                        a.listeners.push(e);
                    },
                };
                (null !== L.T ? n(!0) : (a.isTransition = !1),
                    r(a),
                    null === (n = t.pending)
                        ? ((a.next = t.pending = a), az(t, a))
                        : ((a.next = n.next),
                          (t.pending = n.next = a)));
            }
        }
        function az(e, t) {
            var n = t.action,
                r = t.payload,
                l = e.state;
            if (t.isTransition) {
                var a = L.T,
                    o = {};
                L.T = o;
                try {
                    var i = n(l, r),
                        s = L.S;
                    (null !== s && s(o, i), aF(e, t, i));
                } catch (n) {
                    a_(e, t, n);
                } finally {
                    (null !== a &&
                        null !== o.types &&
                        (a.types = o.types),
                        (L.T = a));
                }
            } else
                try {
                    ((a = n(l, r)), aF(e, t, a));
                } catch (n) {
                    a_(e, t, n);
                }
        }
        function aF(e, t, n) {
            null !== n &&
            "object" == typeof n &&
            "function" == typeof n.then
                ? n.then(
                      function (n) {
                          aP(e, t, n);
                      },
                      function (n) {
                          return a_(e, t, n);
                      },
                  )
                : aP(e, t, n);
        }
        function aP(e, t, n) {
            ((t.status = "fulfilled"),
                (t.value = n),
                aT(t),
                (e.state = n),
                null !== (t = e.pending) &&
                    ((n = t.next) === t
                        ? (e.pending = null)
                        : ((n = n.next), (t.next = n), az(e, n))));
        }
        function a_(e, t, n) {
            var r = e.pending;
            if (((e.pending = null), null !== r)) {
                r = r.next;
                do
                    ((t.status = "rejected"),
                        (t.reason = n),
                        aT(t),
                        (t = t.next));
                while (t !== r);
            }
            e.action = null;
        }
        function aT(e) {
            e = e.listeners;
            for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function aA(e, t) {
            return t;
        }
        function aj(e, t) {
            if (rA) {
                var n = iU.formState;
                if (null !== n) {
                    e: {
                        var r = lJ;
                        if (rA) {
                            if (rT) {
                                t: {
                                    for (
                                        var l = rT, a = rL;
                                        8 !== l.nodeType;
                                    )
                                        if (
                                            !a ||
                                            null ===
                                                (l = uR(
                                                    l.nextSibling,
                                                ))
                                        ) {
                                            l = null;
                                            break t;
                                        }
                                    l =
                                        "F!" === (a = l.data) ||
                                        "F" === a
                                            ? l
                                            : null;
                                }
                                if (l) {
                                    ((rT = uR(l.nextSibling)),
                                        (r = "F!" === l.data));
                                    break e;
                                }
                            }
                            rD(r);
                        }
                        r = !1;
                    }
                    r && (t = n[0]);
                }
            }
            return (
                ((n = as()).memoizedState = n.baseState = t),
                (r = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: aA,
                    lastRenderedState: t,
                }),
                (n.queue = r),
                (n = oe.bind(null, lJ, r)),
                (r.dispatch = n),
                (r = aE(!1)),
                (a = on.bind(null, lJ, !1, r.queue)),
                (r = as()),
                (l = {
                    state: t,
                    dispatch: null,
                    action: e,
                    pending: null,
                }),
                (r.queue = l),
                (n = aN.bind(null, lJ, l, a, n)),
                (l.dispatch = n),
                (r.memoizedState = e),
                [t, n, !1]
            );
        }
        function aL(e) {
            return aO(au(), l0, e);
        }
        function aO(e, t, n) {
            if (
                ((t = ag(e, t, aA)[0]),
                (e = ah(am)[0]),
                "object" == typeof t &&
                    null !== t &&
                    "function" == typeof t.then)
            )
                try {
                    var r = ad(t);
                } catch (e) {
                    if (e === ls) throw lc;
                    throw e;
                }
            else r = t;
            var l = (t = au()).queue,
                a = l.dispatch;
            return (
                n !== t.memoizedState &&
                    ((lJ.flags |= 2048),
                    aR(
                        9,
                        { destroy: void 0 },
                        aD.bind(null, l, n),
                        null,
                    )),
                [r, a, e]
            );
        }
        function aD(e, t) {
            e.action = t;
        }
        function aM(e) {
            var t = au(),
                n = l0;
            if (null !== n) return aO(t, n, e);
            (au(), (t = t.memoizedState));
            var r = (n = au()).queue.dispatch;
            return ((n.memoizedState = e), [t, r, !1]);
        }
        function aR(e, t, n, r) {
            return (
                (e = {
                    tag: e,
                    create: n,
                    deps: r,
                    inst: t,
                    next: null,
                }),
                null === (t = lJ.updateQueue) &&
                    ((t = ac()), (lJ.updateQueue = t)),
                null === (n = t.lastEffect)
                    ? (t.lastEffect = e.next = e)
                    : ((r = n.next),
                      (n.next = e),
                      (e.next = r),
                      (t.lastEffect = e)),
                e
            );
        }
        function aB() {
            return au().memoizedState;
        }
        function aI(e, t, n, r) {
            var l = as();
            ((lJ.flags |= e),
                (l.memoizedState = aR(
                    1 | t,
                    { destroy: void 0 },
                    n,
                    void 0 === r ? null : r,
                )));
        }
        function a$(e, t, n, r) {
            var l = au();
            r = void 0 === r ? null : r;
            var a = l.memoizedState.inst;
            null !== l0 &&
            null !== r &&
            ae(r, l0.memoizedState.deps)
                ? (l.memoizedState = aR(t, a, n, r))
                : ((lJ.flags |= e),
                  (l.memoizedState = aR(1 | t, a, n, r)));
        }
        function aU(e, t) {
            aI(8390656, 8, e, t);
        }
        function aH(e, t) {
            a$(2048, 8, e, t);
        }
        function aV(e) {
            var t = au().memoizedState,
                n = { ref: t, nextImpl: e };
            lJ.flags |= 4;
            var r = lJ.updateQueue;
            if (null === r)
                ((r = ac()),
                    (lJ.updateQueue = r),
                    (r.events = [n]));
            else {
                var l = r.events;
                null === l ? (r.events = [n]) : l.push(n);
            }
            return function () {
                if (0 != (2 & i$)) throw Error(s(440));
                return t.impl.apply(void 0, arguments);
            };
        }
        function aW(e, t) {
            return a$(4, 2, e, t);
        }
        function aQ(e, t) {
            return a$(4, 4, e, t);
        }
        function aq(e, t) {
            if ("function" == typeof t) {
                var n = t((e = e()));
                return function () {
                    "function" == typeof n ? n() : t(null);
                };
            }
            if (null != t)
                return (
                    (t.current = e = e()),
                    function () {
                        t.current = null;
                    }
                );
        }
        function aG(e, t, n) {
            ((n = null != n ? n.concat([e]) : null),
                a$(4, 4, aq.bind(null, t, e), n));
        }
        function aK() {}
        function aY(e, t) {
            var n = au();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== t && ae(t, r[1])
                ? r[0]
                : ((n.memoizedState = [e, t]), e);
        }
        function aX(e, t) {
            var n = au();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            if (null !== t && ae(t, r[1])) return r[0];
            if (((r = e()), l4)) {
                eg(!0);
                try {
                    e();
                } finally {
                    eg(!1);
                }
            }
            return ((n.memoizedState = [r, t]), r);
        }
        function aZ(e, t, n) {
            return void 0 === n ||
                (0 != (0x40000000 & lZ) && 0 == (261930 & iV))
                ? (e.memoizedState = t)
                : ((e.memoizedState = n),
                  (e = sd()),
                  (lJ.lanes |= e),
                  (iZ |= e),
                  n);
        }
        function aJ(e, t, n, r) {
            return n_(n, t)
                ? n
                : null !== lR.current
                  ? (n_((e = aZ(e, n, r)), t) || (oE = !0), e)
                  : 0 == (42 & lZ) ||
                      (0 != (0x40000000 & lZ) && 0 == (261930 & iV))
                    ? ((oE = !0), (e.memoizedState = n))
                    : ((e = sd()), (lJ.lanes |= e), (iZ |= e), t);
        }
        function a0(e, t, n, r, l) {
            var a = O.p;
            O.p = 0 !== a && 8 > a ? a : 8;
            var o = L.T,
                i = {};
            ((L.T = i), on(e, !1, t, n));
            try {
                var s = l(),
                    u = L.S;
                if (
                    (null !== u && u(i, s),
                    null !== s &&
                        "object" == typeof s &&
                        "function" == typeof s.then)
                ) {
                    var c,
                        d,
                        f =
                            ((c = []),
                            (d = {
                                status: "pending",
                                value: null,
                                reason: null,
                                then: function (e) {
                                    c.push(e);
                                },
                            }),
                            s.then(
                                function () {
                                    ((d.status = "fulfilled"),
                                        (d.value = r));
                                    for (
                                        var e = 0;
                                        e < c.length;
                                        e++
                                    )
                                        (0, c[e])(r);
                                },
                                function (e) {
                                    for (
                                        d.status = "rejected",
                                            d.reason = e,
                                            e = 0;
                                        e < c.length;
                                        e++
                                    )
                                        (0, c[e])(void 0);
                                },
                            ),
                            d);
                    ot(e, t, f, sc(e));
                } else ot(e, t, r, sc(e));
            } catch (n) {
                ot(
                    e,
                    t,
                    {
                        then: function () {},
                        status: "rejected",
                        reason: n,
                    },
                    sc(),
                );
            } finally {
                ((O.p = a),
                    null !== o &&
                        null !== i.types &&
                        (o.types = i.types),
                    (L.T = o));
            }
        }
        function a1() {}
        function a2(e, t, n, r) {
            if (5 !== e.tag) throw Error(s(476));
            var l = a3(e).queue;
            a0(
                e,
                l,
                t,
                D,
                null === n
                    ? a1
                    : function () {
                          return (a4(e), n(r));
                      },
            );
        }
        function a3(e) {
            var t = e.memoizedState;
            if (null !== t) return t;
            var n = {};
            return (
                ((t = {
                    memoizedState: D,
                    baseState: D,
                    baseQueue: null,
                    queue: {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: am,
                        lastRenderedState: D,
                    },
                    next: null,
                }).next = {
                    memoizedState: n,
                    baseState: n,
                    baseQueue: null,
                    queue: {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: am,
                        lastRenderedState: n,
                    },
                    next: null,
                }),
                (e.memoizedState = t),
                null !== (e = e.alternate) && (e.memoizedState = t),
                t
            );
        }
        function a4(e) {
            var t = a3(e);
            (null === t.next && (t = e.alternate.memoizedState),
                ot(e, t.next.queue, {}, sc()));
        }
        function a5() {
            return rJ(ca);
        }
        function a8() {
            return au().memoizedState;
        }
        function a6() {
            return au().memoizedState;
        }
        function a9(e) {
            for (var t = e.return; null !== t; ) {
                switch (t.tag) {
                    case 24:
                    case 3:
                        var n = sc(),
                            r = l_(t, (e = lP(n)), n);
                        (null !== r && (sf(r, t, n), lT(r, t, n)),
                            (t = { cache: r8() }),
                            (e.payload = t));
                        return;
                }
                t = t.return;
            }
        }
        function a7(e, t, n) {
            var r = sc();
            ((n = {
                lane: r,
                revertLane: 0,
                gesture: null,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
                or(e)
                    ? ol(t, n)
                    : null !== (n = n7(e, t, n, r)) &&
                      (sf(n, e, r), oa(n, t, r)));
        }
        function oe(e, t, n) {
            ot(e, t, n, sc());
        }
        function ot(e, t, n, r) {
            var l = {
                lane: r,
                revertLane: 0,
                gesture: null,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            };
            if (or(e)) ol(t, l);
            else {
                var a = e.alternate;
                if (
                    0 === e.lanes &&
                    (null === a || 0 === a.lanes) &&
                    null !== (a = t.lastRenderedReducer)
                )
                    try {
                        var o = t.lastRenderedState,
                            i = a(o, n);
                        if (
                            ((l.hasEagerState = !0),
                            (l.eagerState = i),
                            n_(i, o))
                        )
                            return (
                                n9(e, t, l, 0),
                                null === iU && n6(),
                                !1
                            );
                    } catch (e) {
                    } finally {
                    }
                if (null !== (n = n7(e, t, l, r)))
                    return (sf(n, e, r), oa(n, t, r), !0);
            }
            return !1;
        }
        function on(e, t, n, r) {
            if (
                ((r = {
                    lane: 2,
                    revertLane: s3(),
                    gesture: null,
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null,
                }),
                or(e))
            ) {
                if (t) throw Error(s(479));
            } else null !== (t = n7(e, n, r, 2)) && sf(t, e, 2);
        }
        function or(e) {
            var t = e.alternate;
            return e === lJ || (null !== t && t === lJ);
        }
        function ol(e, t) {
            l3 = l2 = !0;
            var n = e.pending;
            (null === n
                ? (t.next = t)
                : ((t.next = n.next), (n.next = t)),
                (e.pending = t));
        }
        function oa(e, t, n) {
            if (0 != (4194048 & n)) {
                var r = t.lanes;
                ((r &= e.pendingLanes),
                    (t.lanes = n |= r),
                    e_(e, n));
            }
        }
        var oo = {
            readContext: rJ,
            use: af,
            useCallback: l7,
            useContext: l7,
            useEffect: l7,
            useImperativeHandle: l7,
            useLayoutEffect: l7,
            useInsertionEffect: l7,
            useMemo: l7,
            useReducer: l7,
            useRef: l7,
            useState: l7,
            useDebugValue: l7,
            useDeferredValue: l7,
            useTransition: l7,
            useSyncExternalStore: l7,
            useId: l7,
            useHostTransitionStatus: l7,
            useFormState: l7,
            useActionState: l7,
            useOptimistic: l7,
            useMemoCache: l7,
            useCacheRefresh: l7,
        };
        oo.useEffectEvent = l7;
        var oi = {
                readContext: rJ,
                use: af,
                useCallback: function (e, t) {
                    return (
                        (as().memoizedState = [
                            e,
                            void 0 === t ? null : t,
                        ]),
                        e
                    );
                },
                useContext: rJ,
                useEffect: aU,
                useImperativeHandle: function (e, t, n) {
                    ((n = null != n ? n.concat([e]) : null),
                        aI(4194308, 4, aq.bind(null, t, e), n));
                },
                useLayoutEffect: function (e, t) {
                    return aI(4194308, 4, e, t);
                },
                useInsertionEffect: function (e, t) {
                    aI(4, 2, e, t);
                },
                useMemo: function (e, t) {
                    var n = as();
                    t = void 0 === t ? null : t;
                    var r = e();
                    if (l4) {
                        eg(!0);
                        try {
                            e();
                        } finally {
                            eg(!1);
                        }
                    }
                    return ((n.memoizedState = [r, t]), r);
                },
                useReducer: function (e, t, n) {
                    var r = as();
                    if (void 0 !== n) {
                        var l = n(t);
                        if (l4) {
                            eg(!0);
                            try {
                                n(t);
                            } finally {
                                eg(!1);
                            }
                        }
                    } else l = t;
                    return (
                        (r.memoizedState = r.baseState = l),
                        (r.queue = e =
                            {
                                pending: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: l,
                            }),
                        (e = e.dispatch = a7.bind(null, lJ, e)),
                        [r.memoizedState, e]
                    );
                },
                useRef: function (e) {
                    return (as().memoizedState = { current: e });
                },
                useState: function (e) {
                    var t = (e = aE(e)).queue,
                        n = oe.bind(null, lJ, t);
                    return ((t.dispatch = n), [e.memoizedState, n]);
                },
                useDebugValue: aK,
                useDeferredValue: function (e, t) {
                    return aZ(as(), e, t);
                },
                useTransition: function () {
                    var e = aE(!1);
                    return (
                        (e = a0.bind(null, lJ, e.queue, !0, !1)),
                        (as().memoizedState = e),
                        [!1, e]
                    );
                },
                useSyncExternalStore: function (e, t, n) {
                    var r = lJ,
                        l = as();
                    if (rA) {
                        if (void 0 === n) throw Error(s(407));
                        n = n();
                    } else {
                        if (((n = t()), null === iU))
                            throw Error(s(349));
                        0 != (127 & iV) || av(r, t, n);
                    }
                    l.memoizedState = n;
                    var a = { value: n, getSnapshot: t };
                    return (
                        (l.queue = a),
                        aU(ak.bind(null, r, a, e), [e]),
                        (r.flags |= 2048),
                        aR(
                            9,
                            { destroy: void 0 },
                            ax.bind(null, r, a, n, t),
                            null,
                        ),
                        n
                    );
                },
                useId: function () {
                    var e = as(),
                        t = iU.identifierPrefix;
                    if (rA) {
                        var n = rE,
                            r = rS;
                        ((t =
                            "_" +
                            t +
                            "R_" +
                            (n =
                                (
                                    r & ~(1 << (32 - ey(r) - 1))
                                ).toString(32) + n)),
                            0 < (n = l5++) &&
                                (t += "H" + n.toString(32)),
                            (t += "_"));
                    } else
                        t =
                            "_" +
                            t +
                            "r_" +
                            (n = l9++).toString(32) +
                            "_";
                    return (e.memoizedState = t);
                },
                useHostTransitionStatus: a5,
                useFormState: aj,
                useActionState: aj,
                useOptimistic: function (e) {
                    var t = as();
                    t.memoizedState = t.baseState = e;
                    var n = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: null,
                        lastRenderedState: null,
                    };
                    return (
                        (t.queue = n),
                        (t = on.bind(null, lJ, !0, n)),
                        (n.dispatch = t),
                        [e, t]
                    );
                },
                useMemoCache: ap,
                useCacheRefresh: function () {
                    return (as().memoizedState = a9.bind(null, lJ));
                },
                useEffectEvent: function (e) {
                    var t = as(),
                        n = { impl: e };
                    return (
                        (t.memoizedState = n),
                        function () {
                            if (0 != (2 & i$)) throw Error(s(440));
                            return n.impl.apply(void 0, arguments);
                        }
                    );
                },
            },
            os = {
                readContext: rJ,
                use: af,
                useCallback: aY,
                useContext: rJ,
                useEffect: aH,
                useImperativeHandle: aG,
                useInsertionEffect: aW,
                useLayoutEffect: aQ,
                useMemo: aX,
                useReducer: ah,
                useRef: aB,
                useState: function () {
                    return ah(am);
                },
                useDebugValue: aK,
                useDeferredValue: function (e, t) {
                    return aJ(au(), l0.memoizedState, e, t);
                },
                useTransition: function () {
                    var e = ah(am)[0],
                        t = au().memoizedState;
                    return ["boolean" == typeof e ? e : ad(e), t];
                },
                useSyncExternalStore: ab,
                useId: a8,
                useHostTransitionStatus: a5,
                useFormState: aL,
                useActionState: aL,
                useOptimistic: function (e, t) {
                    return aC(au(), l0, e, t);
                },
                useMemoCache: ap,
                useCacheRefresh: a6,
            };
        os.useEffectEvent = aV;
        var ou = {
            readContext: rJ,
            use: af,
            useCallback: aY,
            useContext: rJ,
            useEffect: aH,
            useImperativeHandle: aG,
            useInsertionEffect: aW,
            useLayoutEffect: aQ,
            useMemo: aX,
            useReducer: ay,
            useRef: aB,
            useState: function () {
                return ay(am);
            },
            useDebugValue: aK,
            useDeferredValue: function (e, t) {
                var n = au();
                return null === l0
                    ? aZ(n, e, t)
                    : aJ(n, l0.memoizedState, e, t);
            },
            useTransition: function () {
                var e = ay(am)[0],
                    t = au().memoizedState;
                return ["boolean" == typeof e ? e : ad(e), t];
            },
            useSyncExternalStore: ab,
            useId: a8,
            useHostTransitionStatus: a5,
            useFormState: aM,
            useActionState: aM,
            useOptimistic: function (e, t) {
                var n = au();
                return null !== l0
                    ? aC(n, l0, e, t)
                    : ((n.baseState = e), [e, n.queue.dispatch]);
            },
            useMemoCache: ap,
            useCacheRefresh: a6,
        };
        function oc(e, t, n, r) {
            ((n =
                null == (n = n(r, (t = e.memoizedState)))
                    ? t
                    : m({}, t, n)),
                (e.memoizedState = n),
                0 === e.lanes && (e.updateQueue.baseState = n));
        }
        ou.useEffectEvent = aV;
        var od = {
            enqueueSetState: function (e, t, n) {
                e = e._reactInternals;
                var r = sc(),
                    l = lP(r);
                ((l.payload = t),
                    null != n && (l.callback = n),
                    null !== (t = l_(e, l, r)) &&
                        (sf(t, e, r), lT(t, e, r)));
            },
            enqueueReplaceState: function (e, t, n) {
                e = e._reactInternals;
                var r = sc(),
                    l = lP(r);
                ((l.tag = 1),
                    (l.payload = t),
                    null != n && (l.callback = n),
                    null !== (t = l_(e, l, r)) &&
                        (sf(t, e, r), lT(t, e, r)));
            },
            enqueueForceUpdate: function (e, t) {
                e = e._reactInternals;
                var n = sc(),
                    r = lP(n);
                ((r.tag = 2),
                    null != t && (r.callback = t),
                    null !== (t = l_(e, r, n)) &&
                        (sf(t, e, n), lT(t, e, n)));
            },
        };
        function of(e, t, n, r, l, a, o) {
            return "function" ==
                typeof (e = e.stateNode).shouldComponentUpdate
                ? e.shouldComponentUpdate(r, a, o)
                : !t.prototype ||
                      !t.prototype.isPureReactComponent ||
                      !nT(n, r) ||
                      !nT(l, a);
        }
        function op(e, t, n, r) {
            ((e = t.state),
                "function" == typeof t.componentWillReceiveProps &&
                    t.componentWillReceiveProps(n, r),
                "function" ==
                    typeof t.UNSAFE_componentWillReceiveProps &&
                    t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e &&
                    od.enqueueReplaceState(t, t.state, null));
        }
        function om(e, t) {
            var n = t;
            if ("ref" in t)
                for (var r in ((n = {}), t))
                    "ref" !== r && (n[r] = t[r]);
            if ((e = e.defaultProps))
                for (var l in (n === t && (n = m({}, n)), e))
                    void 0 === n[l] && (n[l] = e[l]);
            return n;
        }
        function oh(e) {
            n3(e);
        }
        function og(e) {
            console.error(e);
        }
        function oy(e) {
            n3(e);
        }
        function ob(e, t) {
            try {
                (0, e.onUncaughtError)(t.value, {
                    componentStack: t.stack,
                });
            } catch (e) {
                setTimeout(function () {
                    throw e;
                });
            }
        }
        function ov(e, t, n) {
            try {
                (0, e.onCaughtError)(n.value, {
                    componentStack: n.stack,
                    errorBoundary: 1 === t.tag ? t.stateNode : null,
                });
            } catch (e) {
                setTimeout(function () {
                    throw e;
                });
            }
        }
        function ox(e, t, n) {
            return (
                ((n = lP(n)).tag = 3),
                (n.payload = { element: null }),
                (n.callback = function () {
                    ob(e, t);
                }),
                n
            );
        }
        function ok(e) {
            return (((e = lP(e)).tag = 3), e);
        }
        function ow(e, t, n, r) {
            var l = n.type.getDerivedStateFromError;
            if ("function" == typeof l) {
                var a = r.value;
                ((e.payload = function () {
                    return l(a);
                }),
                    (e.callback = function () {
                        ov(t, n, r);
                    }));
            }
            var o = n.stateNode;
            null !== o &&
                "function" == typeof o.componentDidCatch &&
                (e.callback = function () {
                    (ov(t, n, r),
                        "function" != typeof l &&
                            (null === se
                                ? (se = new Set([this]))
                                : se.add(this)));
                    var e = r.stack;
                    this.componentDidCatch(r.value, {
                        componentStack: null !== e ? e : "",
                    });
                });
        }
        var oS = Error(s(461)),
            oE = !1;
        function oC(e, t, n, r) {
            t.child =
                null === e
                    ? lC(t, null, n, r)
                    : lE(t, e.child, n, r);
        }
        function oN(e, t, n, r, l) {
            n = n.render;
            var a = t.ref;
            if ("ref" in r) {
                var o = {};
                for (var i in r) "ref" !== i && (o[i] = r[i]);
            } else o = r;
            return (rZ(t),
            (r = at(e, t, n, o, a, l)),
            (i = aa()),
            null === e || oE)
                ? (rA && i && rz(t),
                  (t.flags |= 1),
                  oC(e, t, r, l),
                  t.child)
                : (ao(e, t, l), oK(e, t, l));
        }
        function oz(e, t, n, r, l) {
            if (null === e) {
                var a = n.type;
                return "function" != typeof a ||
                    ro(a) ||
                    void 0 !== a.defaultProps ||
                    null !== n.compare
                    ? (((e = ru(
                          n.type,
                          null,
                          r,
                          t,
                          t.mode,
                          l,
                      )).ref = t.ref),
                      (e.return = t),
                      (t.child = e))
                    : ((t.tag = 15),
                      (t.type = a),
                      oF(e, t, a, r, l));
            }
            if (((a = e.child), !oY(e, l))) {
                var o = a.memoizedProps;
                if (
                    (n = null !== (n = n.compare) ? n : nT)(o, r) &&
                    e.ref === t.ref
                )
                    return oK(e, t, l);
            }
            return (
                (t.flags |= 1),
                ((e = ri(a, r)).ref = t.ref),
                (e.return = t),
                (t.child = e)
            );
        }
        function oF(e, t, n, r, l) {
            if (null !== e) {
                var a = e.memoizedProps;
                if (nT(a, r) && e.ref === t.ref)
                    if (
                        ((oE = !1),
                        (t.pendingProps = r = a),
                        !oY(e, l))
                    )
                        return ((t.lanes = e.lanes), oK(e, t, l));
                    else 0 != (131072 & e.flags) && (oE = !0);
            }
            return oO(e, t, n, r, l);
        }
        function oP(e, t, n, r) {
            var l = r.children,
                a = null !== e ? e.memoizedState : null;
            if (
                (null === e &&
                    null === t.stateNode &&
                    (t.stateNode = {
                        _visibility: 1,
                        _pendingMarkers: null,
                        _retryCache: null,
                        _transitions: null,
                    }),
                "hidden" === r.mode)
            ) {
                if (0 != (128 & t.flags)) {
                    if (
                        ((a = null !== a ? a.baseLanes | n : n),
                        null !== e)
                    ) {
                        for (
                            l = 0, r = t.child = e.child;
                            null !== r;
                        )
                            ((l = l | r.lanes | r.childLanes),
                                (r = r.sibling));
                        r = l & ~a;
                    } else ((r = 0), (t.child = null));
                    return oT(e, t, a, n, r);
                }
                if (0 == (0x20000000 & n))
                    return (
                        (r = t.lanes = 0x20000000),
                        oT(
                            e,
                            t,
                            null !== a ? a.baseLanes | n : n,
                            n,
                            r,
                        )
                    );
                ((t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                }),
                    null !== e &&
                        lo(t, null !== a ? a.cachePool : null),
                    null !== a ? lI(t, a) : l$(),
                    lq(t));
            } else
                null !== a
                    ? (lo(t, a.cachePool),
                      lI(t, a),
                      lG(t),
                      (t.memoizedState = null))
                    : (null !== e && lo(t, null), l$(), lG(t));
            return (oC(e, t, l, n), t.child);
        }
        function o_(e, t) {
            return (
                (null !== e && 22 === e.tag) ||
                    null !== t.stateNode ||
                    (t.stateNode = {
                        _visibility: 1,
                        _pendingMarkers: null,
                        _retryCache: null,
                        _transitions: null,
                    }),
                t.sibling
            );
        }
        function oT(e, t, n, r, l) {
            var a = la();
            return (
                (t.memoizedState = {
                    baseLanes: n,
                    cachePool: (a =
                        null === a
                            ? null
                            : {
                                  parent: r5._currentValue,
                                  pool: a,
                              }),
                }),
                null !== e && lo(t, null),
                l$(),
                lq(t),
                null !== e && rY(e, t, r, !0),
                (t.childLanes = l),
                null
            );
        }
        function oA(e, t) {
            return (
                ((t = oV(
                    { mode: t.mode, children: t.children },
                    e.mode,
                )).ref = e.ref),
                (e.child = t),
                (t.return = e),
                t
            );
        }
        function oj(e, t, n) {
            return (
                lE(t, e.child, null, n),
                (e = oA(t, t.pendingProps)),
                (e.flags |= 2),
                lK(t),
                (t.memoizedState = null),
                e
            );
        }
        function oL(e, t) {
            var n = t.ref;
            if (null === n)
                null !== e &&
                    null !== e.ref &&
                    (t.flags |= 4194816);
            else {
                if ("function" != typeof n && "object" != typeof n)
                    throw Error(s(284));
                (null === e || e.ref !== n) && (t.flags |= 4194816);
            }
        }
        function oO(e, t, n, r, l) {
            return (rZ(t),
            (n = at(e, t, n, r, void 0, l)),
            (r = aa()),
            null === e || oE)
                ? (rA && r && rz(t),
                  (t.flags |= 1),
                  oC(e, t, n, l),
                  t.child)
                : (ao(e, t, l), oK(e, t, l));
        }
        function oD(e, t, n, r, l, a) {
            return (rZ(t),
            (t.updateQueue = null),
            (n = ar(t, r, n, l)),
            an(e),
            (r = aa()),
            null === e || oE)
                ? (rA && r && rz(t),
                  (t.flags |= 1),
                  oC(e, t, n, a),
                  t.child)
                : (ao(e, t, a), oK(e, t, a));
        }
        function oM(e, t, n, r, l) {
            if ((rZ(t), null === t.stateNode)) {
                var a = rr,
                    o = n.contextType;
                ("object" == typeof o && null !== o && (a = rJ(o)),
                    (t.memoizedState =
                        null !== (a = new n(r, a)).state &&
                        void 0 !== a.state
                            ? a.state
                            : null),
                    (a.updater = od),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    ((a = t.stateNode).props = r),
                    (a.state = t.memoizedState),
                    (a.refs = {}),
                    lz(t),
                    (o = n.contextType),
                    (a.context =
                        "object" == typeof o && null !== o
                            ? rJ(o)
                            : rr),
                    (a.state = t.memoizedState),
                    "function" ==
                        typeof (o = n.getDerivedStateFromProps) &&
                        (oc(t, n, o, r),
                        (a.state = t.memoizedState)),
                    "function" ==
                        typeof n.getDerivedStateFromProps ||
                        "function" ==
                            typeof a.getSnapshotBeforeUpdate ||
                        ("function" !=
                            typeof a.UNSAFE_componentWillMount &&
                            "function" !=
                                typeof a.componentWillMount) ||
                        ((o = a.state),
                        "function" == typeof a.componentWillMount &&
                            a.componentWillMount(),
                        "function" ==
                            typeof a.UNSAFE_componentWillMount &&
                            a.UNSAFE_componentWillMount(),
                        o !== a.state &&
                            od.enqueueReplaceState(
                                a,
                                a.state,
                                null,
                            ),
                        lO(t, r, a, l),
                        lL(),
                        (a.state = t.memoizedState)),
                    "function" == typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                    (r = !0));
            } else if (null === e) {
                a = t.stateNode;
                var i = t.memoizedProps,
                    s = om(n, i);
                a.props = s;
                var u = a.context,
                    c = n.contextType;
                ((o = rr),
                    "object" == typeof c &&
                        null !== c &&
                        (o = rJ(c)));
                var d = n.getDerivedStateFromProps;
                ((c =
                    "function" == typeof d ||
                    "function" == typeof a.getSnapshotBeforeUpdate),
                    (i = t.pendingProps !== i),
                    c ||
                        ("function" !=
                            typeof a.UNSAFE_componentWillReceiveProps &&
                            "function" !=
                                typeof a.componentWillReceiveProps) ||
                        ((i || u !== o) && op(t, a, r, o)),
                    (lN = !1));
                var f = t.memoizedState;
                ((a.state = f),
                    lO(t, r, a, l),
                    lL(),
                    (u = t.memoizedState),
                    i || f !== u || lN
                        ? ("function" == typeof d &&
                              (oc(t, n, d, r),
                              (u = t.memoizedState)),
                          (s = lN || of(t, n, s, r, f, u, o))
                              ? (c ||
                                    ("function" !=
                                        typeof a.UNSAFE_componentWillMount &&
                                        "function" !=
                                            typeof a.componentWillMount) ||
                                    ("function" ==
                                        typeof a.componentWillMount &&
                                        a.componentWillMount(),
                                    "function" ==
                                        typeof a.UNSAFE_componentWillMount &&
                                        a.UNSAFE_componentWillMount()),
                                "function" ==
                                    typeof a.componentDidMount &&
                                    (t.flags |= 4194308))
                              : ("function" ==
                                    typeof a.componentDidMount &&
                                    (t.flags |= 4194308),
                                (t.memoizedProps = r),
                                (t.memoizedState = u)),
                          (a.props = r),
                          (a.state = u),
                          (a.context = o),
                          (r = s))
                        : ("function" ==
                              typeof a.componentDidMount &&
                              (t.flags |= 4194308),
                          (r = !1)));
            } else {
                ((a = t.stateNode),
                    lF(e, t),
                    (c = om(n, (o = t.memoizedProps))),
                    (a.props = c),
                    (d = t.pendingProps),
                    (f = a.context),
                    (u = n.contextType),
                    (s = rr),
                    "object" == typeof u &&
                        null !== u &&
                        (s = rJ(u)),
                    (u =
                        "function" ==
                            typeof (i =
                                n.getDerivedStateFromProps) ||
                        "function" ==
                            typeof a.getSnapshotBeforeUpdate) ||
                        ("function" !=
                            typeof a.UNSAFE_componentWillReceiveProps &&
                            "function" !=
                                typeof a.componentWillReceiveProps) ||
                        ((o !== d || f !== s) && op(t, a, r, s)),
                    (lN = !1),
                    (f = t.memoizedState),
                    (a.state = f),
                    lO(t, r, a, l),
                    lL());
                var p = t.memoizedState;
                o !== d ||
                f !== p ||
                lN ||
                (null !== e &&
                    null !== e.dependencies &&
                    rX(e.dependencies))
                    ? ("function" == typeof i &&
                          (oc(t, n, i, r), (p = t.memoizedState)),
                      (c =
                          lN ||
                          of(t, n, c, r, f, p, s) ||
                          (null !== e &&
                              null !== e.dependencies &&
                              rX(e.dependencies)))
                          ? (u ||
                                ("function" !=
                                    typeof a.UNSAFE_componentWillUpdate &&
                                    "function" !=
                                        typeof a.componentWillUpdate) ||
                                ("function" ==
                                    typeof a.componentWillUpdate &&
                                    a.componentWillUpdate(r, p, s),
                                "function" ==
                                    typeof a.UNSAFE_componentWillUpdate &&
                                    a.UNSAFE_componentWillUpdate(
                                        r,
                                        p,
                                        s,
                                    )),
                            "function" ==
                                typeof a.componentDidUpdate &&
                                (t.flags |= 4),
                            "function" ==
                                typeof a.getSnapshotBeforeUpdate &&
                                (t.flags |= 1024))
                          : ("function" !=
                                typeof a.componentDidUpdate ||
                                (o === e.memoizedProps &&
                                    f === e.memoizedState) ||
                                (t.flags |= 4),
                            "function" !=
                                typeof a.getSnapshotBeforeUpdate ||
                                (o === e.memoizedProps &&
                                    f === e.memoizedState) ||
                                (t.flags |= 1024),
                            (t.memoizedProps = r),
                            (t.memoizedState = p)),
                      (a.props = r),
                      (a.state = p),
                      (a.context = s),
                      (r = c))
                    : ("function" != typeof a.componentDidUpdate ||
                          (o === e.memoizedProps &&
                              f === e.memoizedState) ||
                          (t.flags |= 4),
                      "function" !=
                          typeof a.getSnapshotBeforeUpdate ||
                          (o === e.memoizedProps &&
                              f === e.memoizedState) ||
                          (t.flags |= 1024),
                      (r = !1));
            }
            return (
                (a = r),
                oL(e, t),
                (r = 0 != (128 & t.flags)),
                a || r
                    ? ((a = t.stateNode),
                      (n =
                          r &&
                          "function" !=
                              typeof n.getDerivedStateFromError
                              ? null
                              : a.render()),
                      (t.flags |= 1),
                      null !== e && r
                          ? ((t.child = lE(t, e.child, null, l)),
                            (t.child = lE(t, null, n, l)))
                          : oC(e, t, n, l),
                      (t.memoizedState = a.state),
                      (e = t.child))
                    : (e = oK(e, t, l)),
                e
            );
        }
        function oR(e, t, n, r) {
            return (
                rI(),
                (t.flags |= 256),
                oC(e, t, n, r),
                t.child
            );
        }
        var oB = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null,
        };
        function oI(e) {
            return { baseLanes: e, cachePool: li() };
        }
        function o$(e, t, n) {
            return (
                (e = null !== e ? e.childLanes & ~n : 0),
                t && (e |= i1),
                e
            );
        }
        function oU(e, t, n) {
            var r,
                l = t.pendingProps,
                a = !1,
                o = 0 != (128 & t.flags);
            if (
                ((r = o) ||
                    (r =
                        (null === e || null !== e.memoizedState) &&
                        0 != (2 & lY.current)),
                r && ((a = !0), (t.flags &= -129)),
                (r = 0 != (32 & t.flags)),
                (t.flags &= -33),
                null === e)
            ) {
                if (rA) {
                    if (
                        (a ? lW(t) : lG(t),
                        (e = rT)
                            ? null !==
                                  (e =
                                      null !== (e = uO(e, rL)) &&
                                      "&" !== e.data
                                          ? e
                                          : null) &&
                              ((t.memoizedState = {
                                  dehydrated: e,
                                  treeContext:
                                      null !== rw
                                          ? { id: rS, overflow: rE }
                                          : null,
                                  retryLane: 0x20000000,
                                  hydrationErrors: null,
                              }),
                              ((n = rf(e)).return = t),
                              (t.child = n),
                              (r_ = t),
                              (rT = null))
                            : (e = null),
                        null === e)
                    )
                        throw rD(t);
                    return (
                        uM(e)
                            ? (t.lanes = 32)
                            : (t.lanes = 0x20000000),
                        null
                    );
                }
                var i = l.children;
                return ((l = l.fallback), a)
                    ? (lG(t),
                      (i = oV(
                          { mode: "hidden", children: i },
                          (a = t.mode),
                      )),
                      (l = rc(l, a, n, null)),
                      (i.return = t),
                      (l.return = t),
                      (i.sibling = l),
                      (t.child = i),
                      ((l = t.child).memoizedState = oI(n)),
                      (l.childLanes = o$(e, r, n)),
                      (t.memoizedState = oB),
                      o_(null, l))
                    : (lW(t), oH(t, i));
            }
            var u = e.memoizedState;
            if (null !== u && null !== (i = u.dehydrated)) {
                if (o)
                    256 & t.flags
                        ? (lW(t),
                          (t.flags &= -257),
                          (t = oW(e, t, n)))
                        : null !== t.memoizedState
                          ? (lG(t),
                            (t.child = e.child),
                            (t.flags |= 128),
                            (t = null))
                          : (lG(t),
                            (i = l.fallback),
                            (a = t.mode),
                            (l = oV(
                                {
                                    mode: "visible",
                                    children: l.children,
                                },
                                a,
                            )),
                            (i = rc(i, a, n, null)),
                            (i.flags |= 2),
                            (l.return = t),
                            (i.return = t),
                            (l.sibling = i),
                            (t.child = l),
                            lE(t, e.child, null, n),
                            ((l = t.child).memoizedState = oI(n)),
                            (l.childLanes = o$(e, r, n)),
                            (t.memoizedState = oB),
                            (t = o_(null, l)));
                else if ((lW(t), uM(i))) {
                    if (
                        (r = i.nextSibling && i.nextSibling.dataset)
                    )
                        var c = r.dgst;
                    ((r = c),
                        ((l = Error(s(419))).stack = ""),
                        (l.digest = r),
                        rU({ value: l, source: null, stack: null }),
                        (t = oW(e, t, n)));
                } else if (
                    (oE || rY(e, t, n, !1),
                    (r = 0 != (n & e.childLanes)),
                    oE || r)
                ) {
                    if (
                        null !== (r = iU) &&
                        0 !== (l = eT(r, n)) &&
                        l !== u.retryLane
                    )
                        throw (
                            (u.retryLane = l),
                            re(e, l),
                            sf(r, e, l),
                            oS
                        );
                    (uD(i) || sS(), (t = oW(e, t, n)));
                } else
                    uD(i)
                        ? ((t.flags |= 192),
                          (t.child = e.child),
                          (t = null))
                        : ((e = u.treeContext),
                          (rT = uR(i.nextSibling)),
                          (r_ = t),
                          (rA = !0),
                          (rj = null),
                          (rL = !1),
                          null !== e && rP(t, e),
                          (t = oH(t, l.children)),
                          (t.flags |= 4096));
                return t;
            }
            return a
                ? (lG(t),
                  (i = l.fallback),
                  (a = t.mode),
                  (c = (u = e.child).sibling),
                  ((l = ri(u, {
                      mode: "hidden",
                      children: l.children,
                  })).subtreeFlags = 0x3e00000 & u.subtreeFlags),
                  null !== c
                      ? (i = ri(c, i))
                      : ((i = rc(i, a, n, null)), (i.flags |= 2)),
                  (i.return = t),
                  (l.return = t),
                  (l.sibling = i),
                  (t.child = l),
                  o_(null, l),
                  (l = t.child),
                  null === (i = e.child.memoizedState)
                      ? (i = oI(n))
                      : (null !== (a = i.cachePool)
                            ? ((u = r5._currentValue),
                              (a =
                                  a.parent !== u
                                      ? { parent: u, pool: u }
                                      : a))
                            : (a = li()),
                        (i = {
                            baseLanes: i.baseLanes | n,
                            cachePool: a,
                        })),
                  (l.memoizedState = i),
                  (l.childLanes = o$(e, r, n)),
                  (t.memoizedState = oB),
                  o_(e.child, l))
                : (lW(t),
                  (e = (n = e.child).sibling),
                  ((n = ri(n, {
                      mode: "visible",
                      children: l.children,
                  })).return = t),
                  (n.sibling = null),
                  null !== e &&
                      (null === (r = t.deletions)
                          ? ((t.deletions = [e]), (t.flags |= 16))
                          : r.push(e)),
                  (t.child = n),
                  (t.memoizedState = null),
                  n);
        }
        function oH(e, t) {
            return (
                ((t = oV(
                    { mode: "visible", children: t },
                    e.mode,
                )).return = e),
                (e.child = t)
            );
        }
        function oV(e, t) {
            return (((e = ra(22, e, null, t)).lanes = 0), e);
        }
        function oW(e, t, n) {
            return (
                lE(t, e.child, null, n),
                (e = oH(t, t.pendingProps.children)),
                (e.flags |= 2),
                (t.memoizedState = null),
                e
            );
        }
        function oQ(e, t, n) {
            e.lanes |= t;
            var r = e.alternate;
            (null !== r && (r.lanes |= t), rG(e.return, t, n));
        }
        function oq(e, t, n, r, l, a) {
            var o = e.memoizedState;
            null === o
                ? (e.memoizedState = {
                      isBackwards: t,
                      rendering: null,
                      renderingStartTime: 0,
                      last: r,
                      tail: n,
                      tailMode: l,
                      treeForkCount: a,
                  })
                : ((o.isBackwards = t),
                  (o.rendering = null),
                  (o.renderingStartTime = 0),
                  (o.last = r),
                  (o.tail = n),
                  (o.tailMode = l),
                  (o.treeForkCount = a));
        }
        function oG(e, t, n) {
            var r = t.pendingProps,
                l = r.revealOrder,
                a = r.tail;
            r = r.children;
            var o = lY.current,
                i = 0 != (2 & o);
            if (
                (i
                    ? ((o = (1 & o) | 2), (t.flags |= 128))
                    : (o &= 1),
                $(lY, o),
                oC(e, t, r, n),
                (r = rA ? rv : 0),
                !i && null !== e && 0 != (128 & e.flags))
            )
                e: for (e = t.child; null !== e; ) {
                    if (13 === e.tag)
                        null !== e.memoizedState && oQ(e, n, t);
                    else if (19 === e.tag) oQ(e, n, t);
                    else if (null !== e.child) {
                        ((e.child.return = e), (e = e.child));
                        continue;
                    }
                    if (e === t) break;
                    for (; null === e.sibling; ) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return;
                    }
                    ((e.sibling.return = e.return),
                        (e = e.sibling));
                }
            switch (l) {
                case "forwards":
                    for (l = null, n = t.child; null !== n; )
                        (null !== (e = n.alternate) &&
                            null === lX(e) &&
                            (l = n),
                            (n = n.sibling));
                    (null === (n = l)
                        ? ((l = t.child), (t.child = null))
                        : ((l = n.sibling), (n.sibling = null)),
                        oq(t, !1, l, n, a, r));
                    break;
                case "backwards":
                case "unstable_legacy-backwards":
                    for (
                        n = null, l = t.child, t.child = null;
                        null !== l;
                    ) {
                        if (
                            null !== (e = l.alternate) &&
                            null === lX(e)
                        ) {
                            t.child = l;
                            break;
                        }
                        ((e = l.sibling),
                            (l.sibling = n),
                            (n = l),
                            (l = e));
                    }
                    oq(t, !0, n, null, a, r);
                    break;
                case "together":
                    oq(t, !1, null, null, void 0, r);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function oK(e, t, n) {
            if (
                (null !== e && (t.dependencies = e.dependencies),
                (iZ |= t.lanes),
                0 == (n & t.childLanes))
            ) {
                if (null === e) return null;
                else if ((rY(e, t, n, !1), 0 == (n & t.childLanes)))
                    return null;
            }
            if (null !== e && t.child !== e.child)
                throw Error(s(153));
            if (null !== t.child) {
                for (
                    n = ri((e = t.child), e.pendingProps),
                        t.child = n,
                        n.return = t;
                    null !== e.sibling;
                )
                    ((e = e.sibling),
                        ((n = n.sibling =
                            ri(e, e.pendingProps)).return = t));
                n.sibling = null;
            }
            return t.child;
        }
        function oY(e, t) {
            return (
                0 != (e.lanes & t) ||
                !!(null !== (e = e.dependencies) && rX(e))
            );
        }
        function oX(e, t, n) {
            if (null !== e)
                if (e.memoizedProps !== t.pendingProps) oE = !0;
                else {
                    if (!oY(e, n) && 0 == (128 & t.flags))
                        return (
                            (oE = !1),
                            (function (e, t, n) {
                                switch (t.tag) {
                                    case 3:
                                        (Q(
                                            t,
                                            t.stateNode
                                                .containerInfo,
                                        ),
                                            rQ(
                                                t,
                                                r5,
                                                e.memoizedState
                                                    .cache,
                                            ),
                                            rI());
                                        break;
                                    case 27:
                                    case 5:
                                        G(t);
                                        break;
                                    case 4:
                                        Q(
                                            t,
                                            t.stateNode
                                                .containerInfo,
                                        );
                                        break;
                                    case 10:
                                        rQ(
                                            t,
                                            t.type,
                                            t.memoizedProps.value,
                                        );
                                        break;
                                    case 31:
                                        if (
                                            null !== t.memoizedState
                                        )
                                            return (
                                                (t.flags |= 128),
                                                lQ(t),
                                                null
                                            );
                                        break;
                                    case 13:
                                        var r = t.memoizedState;
                                        if (null !== r) {
                                            if (
                                                null !==
                                                r.dehydrated
                                            )
                                                return (
                                                    lW(t),
                                                    (t.flags |= 128),
                                                    null
                                                );
                                            if (
                                                0 !=
                                                (n &
                                                    t.child
                                                        .childLanes)
                                            )
                                                return oU(e, t, n);
                                            return (
                                                lW(t),
                                                null !==
                                                (e = oK(e, t, n))
                                                    ? e.sibling
                                                    : null
                                            );
                                        }
                                        lW(t);
                                        break;
                                    case 19:
                                        var l =
                                            0 != (128 & e.flags);
                                        if (
                                            ((r =
                                                0 !=
                                                (n &
                                                    t.childLanes)) ||
                                                (rY(e, t, n, !1),
                                                (r =
                                                    0 !=
                                                    (n &
                                                        t.childLanes))),
                                            l)
                                        ) {
                                            if (r)
                                                return oG(e, t, n);
                                            t.flags |= 128;
                                        }
                                        if (
                                            (null !==
                                                (l =
                                                    t.memoizedState) &&
                                                ((l.rendering =
                                                    null),
                                                (l.tail = null),
                                                (l.lastEffect =
                                                    null)),
                                            $(lY, lY.current),
                                            !r)
                                        )
                                            return null;
                                        break;
                                    case 22:
                                        return (
                                            (t.lanes = 0),
                                            oP(
                                                e,
                                                t,
                                                n,
                                                t.pendingProps,
                                            )
                                        );
                                    case 24:
                                        rQ(
                                            t,
                                            r5,
                                            e.memoizedState.cache,
                                        );
                                }
                                return oK(e, t, n);
                            })(e, t, n)
                        );
                    oE = 0 != (131072 & e.flags);
                }
            else
                ((oE = !1),
                    rA &&
                        0 != (1048576 & t.flags) &&
                        rN(t, rv, t.index));
            switch (((t.lanes = 0), t.tag)) {
                case 16:
                    e: {
                        var r = t.pendingProps;
                        if (
                            ((e = lm(t.elementType)),
                            (t.type = e),
                            "function" == typeof e)
                        )
                            ro(e)
                                ? ((r = om(e, r)),
                                  (t.tag = 1),
                                  (t = oM(null, t, e, r, n)))
                                : ((t.tag = 0),
                                  (t = oO(null, t, e, r, n)));
                        else {
                            if (null != e) {
                                var l = e.$$typeof;
                                if (l === S) {
                                    ((t.tag = 11),
                                        (t = oN(null, t, e, r, n)));
                                    break e;
                                }
                                if (l === N) {
                                    ((t.tag = 14),
                                        (t = oz(null, t, e, r, n)));
                                    break e;
                                }
                            }
                            throw Error(
                                s(
                                    306,
                                    (t =
                                        (function e(t) {
                                            if (null == t)
                                                return null;
                                            if (
                                                "function" ==
                                                typeof t
                                            )
                                                return t.$$typeof ===
                                                    A
                                                    ? null
                                                    : t.displayName ||
                                                          t.name ||
                                                          null;
                                            if (
                                                "string" == typeof t
                                            )
                                                return t;
                                            switch (t) {
                                                case b:
                                                    return "Fragment";
                                                case x:
                                                    return "Profiler";
                                                case v:
                                                    return "StrictMode";
                                                case E:
                                                    return "Suspense";
                                                case C:
                                                    return "SuspenseList";
                                                case F:
                                                    return "Activity";
                                            }
                                            if (
                                                "object" == typeof t
                                            )
                                                switch (
                                                    t.$$typeof
                                                ) {
                                                    case y:
                                                        return "Portal";
                                                    case w:
                                                        return (
                                                            t.displayName ||
                                                            "Context"
                                                        );
                                                    case k:
                                                        return (
                                                            (t
                                                                ._context
                                                                .displayName ||
                                                                "Context") +
                                                            ".Consumer"
                                                        );
                                                    case S:
                                                        var n =
                                                            t.render;
                                                        return (
                                                            (t =
                                                                t.displayName) ||
                                                                (t =
                                                                    "" !==
                                                                    (t =
                                                                        n.displayName ||
                                                                        n.name ||
                                                                        "")
                                                                        ? "ForwardRef(" +
                                                                          t +
                                                                          ")"
                                                                        : "ForwardRef"),
                                                            t
                                                        );
                                                    case N:
                                                        return null !==
                                                            (n =
                                                                t.displayName ||
                                                                null)
                                                            ? n
                                                            : e(
                                                                  t.type,
                                                              ) ||
                                                                  "Memo";
                                                    case z:
                                                        ((n =
                                                            t._payload),
                                                            (t =
                                                                t._init));
                                                        try {
                                                            return e(
                                                                t(
                                                                    n,
                                                                ),
                                                            );
                                                        } catch (e) {}
                                                }
                                            return null;
                                        })(e) || e),
                                    "",
                                ),
                            );
                        }
                    }
                    return t;
                case 0:
                    return oO(e, t, t.type, t.pendingProps, n);
                case 1:
                    return (
                        (l = om((r = t.type), t.pendingProps)),
                        oM(e, t, r, l, n)
                    );
                case 3:
                    e: {
                        if (
                            (Q(t, t.stateNode.containerInfo),
                            null === e)
                        )
                            throw Error(s(387));
                        r = t.pendingProps;
                        var a = t.memoizedState;
                        ((l = a.element),
                            lF(e, t),
                            lO(t, r, null, n));
                        var o = t.memoizedState;
                        if (
                            (rQ(t, r5, (r = o.cache)),
                            r !== a.cache && rK(t, [r5], n, !0),
                            lL(),
                            (r = o.element),
                            a.isDehydrated)
                        )
                            if (
                                ((a = {
                                    element: r,
                                    isDehydrated: !1,
                                    cache: o.cache,
                                }),
                                (t.updateQueue.baseState = a),
                                (t.memoizedState = a),
                                256 & t.flags)
                            ) {
                                t = oR(e, t, r, n);
                                break e;
                            } else if (r !== l) {
                                (rU((l = rh(Error(s(424)), t))),
                                    (t = oR(e, t, r, n)));
                                break e;
                            } else
                                for (
                                    rT = uR(
                                        (e =
                                            9 ===
                                            (e =
                                                t.stateNode
                                                    .containerInfo)
                                                .nodeType
                                                ? e.body
                                                : "HTML" ===
                                                    e.nodeName
                                                  ? e.ownerDocument
                                                        .body
                                                  : e).firstChild,
                                    ),
                                        r_ = t,
                                        rA = !0,
                                        rj = null,
                                        rL = !0,
                                        n = lC(t, null, r, n),
                                        t.child = n;
                                    n;
                                )
                                    ((n.flags =
                                        (-3 & n.flags) | 4096),
                                        (n = n.sibling));
                        else {
                            if ((rI(), r === l)) {
                                t = oK(e, t, n);
                                break e;
                            }
                            oC(e, t, r, n);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return (
                        oL(e, t),
                        null === e
                            ? (n = uY(
                                  t.type,
                                  null,
                                  t.pendingProps,
                                  null,
                              ))
                                ? (t.memoizedState = n)
                                : rA ||
                                  ((n = t.type),
                                  (e = t.pendingProps),
                                  ((r = uk(V.current).createElement(
                                      n,
                                  ))[eM] = t),
                                  (r[eR] = e),
                                  uy(r, n, e),
                                  eY(r),
                                  (t.stateNode = r))
                            : (t.memoizedState = uY(
                                  t.type,
                                  e.memoizedProps,
                                  t.pendingProps,
                                  e.memoizedState,
                              )),
                        null
                    );
                case 27:
                    return (
                        G(t),
                        null === e &&
                            rA &&
                            ((r = t.stateNode =
                                uU(
                                    t.type,
                                    t.pendingProps,
                                    V.current,
                                )),
                            (r_ = t),
                            (rL = !0),
                            (l = rT),
                            uT(t.type)
                                ? ((uB = l),
                                  (rT = uR(r.firstChild)))
                                : (rT = l)),
                        oC(e, t, t.pendingProps.children, n),
                        oL(e, t),
                        null === e && (t.flags |= 4194304),
                        t.child
                    );
                case 5:
                    return (
                        null === e &&
                            rA &&
                            ((l = r = rT) &&
                                (null !==
                                (r = (function (e, t, n, r) {
                                    for (; 1 === e.nodeType; ) {
                                        if (
                                            e.nodeName.toLowerCase() !==
                                            t.toLowerCase()
                                        ) {
                                            if (
                                                !r &&
                                                ("INPUT" !==
                                                    e.nodeName ||
                                                    "hidden" !==
                                                        e.type)
                                            )
                                                break;
                                        } else if (r) {
                                            if (!e[eV])
                                                switch (t) {
                                                    case "meta":
                                                        if (
                                                            !e.hasAttribute(
                                                                "itemprop",
                                                            )
                                                        )
                                                            break;
                                                        return e;
                                                    case "link":
                                                        if (
                                                            ("stylesheet" ===
                                                                (l =
                                                                    e.getAttribute(
                                                                        "rel",
                                                                    )) &&
                                                                e.hasAttribute(
                                                                    "data-precedence",
                                                                )) ||
                                                            l !==
                                                                n.rel ||
                                                            e.getAttribute(
                                                                "href",
                                                            ) !==
                                                                (null ==
                                                                    n.href ||
                                                                "" ===
                                                                    n.href
                                                                    ? null
                                                                    : n.href) ||
                                                            e.getAttribute(
                                                                "crossorigin",
                                                            ) !==
                                                                (null ==
                                                                n.crossOrigin
                                                                    ? null
                                                                    : n.crossOrigin) ||
                                                            e.getAttribute(
                                                                "title",
                                                            ) !==
                                                                (null ==
                                                                n.title
                                                                    ? null
                                                                    : n.title)
                                                        )
                                                            break;
                                                        return e;
                                                    case "style":
                                                        if (
                                                            e.hasAttribute(
                                                                "data-precedence",
                                                            )
                                                        )
                                                            break;
                                                        return e;
                                                    case "script":
                                                        if (
                                                            ((l =
                                                                e.getAttribute(
                                                                    "src",
                                                                )) !==
                                                                (null ==
                                                                n.src
                                                                    ? null
                                                                    : n.src) ||
                                                                e.getAttribute(
                                                                    "type",
                                                                ) !==
                                                                    (null ==
                                                                    n.type
                                                                        ? null
                                                                        : n.type) ||
                                                                e.getAttribute(
                                                                    "crossorigin",
                                                                ) !==
                                                                    (null ==
                                                                    n.crossOrigin
                                                                        ? null
                                                                        : n.crossOrigin)) &&
                                                            l &&
                                                            e.hasAttribute(
                                                                "async",
                                                            ) &&
                                                            !e.hasAttribute(
                                                                "itemprop",
                                                            )
                                                        )
                                                            break;
                                                        return e;
                                                    default:
                                                        return e;
                                                }
                                        } else {
                                            if (
                                                "input" !== t ||
                                                "hidden" !== e.type
                                            )
                                                return e;
                                            var l =
                                                null == n.name
                                                    ? null
                                                    : "" + n.name;
                                            if (
                                                "hidden" ===
                                                    n.type &&
                                                e.getAttribute(
                                                    "name",
                                                ) === l
                                            )
                                                return e;
                                        }
                                        if (
                                            null ===
                                            (e = uR(e.nextSibling))
                                        )
                                            break;
                                    }
                                    return null;
                                })(r, t.type, t.pendingProps, rL))
                                    ? ((t.stateNode = r),
                                      (r_ = t),
                                      (rT = uR(r.firstChild)),
                                      (rL = !1),
                                      (l = !0))
                                    : (l = !1)),
                            l || rD(t)),
                        G(t),
                        (l = t.type),
                        (a = t.pendingProps),
                        (o = null !== e ? e.memoizedProps : null),
                        (r = a.children),
                        uE(l, a)
                            ? (r = null)
                            : null !== o &&
                              uE(l, o) &&
                              (t.flags |= 32),
                        null !== t.memoizedState &&
                            (ca._currentValue = l =
                                at(e, t, al, null, null, n)),
                        oL(e, t),
                        oC(e, t, r, n),
                        t.child
                    );
                case 6:
                    return (
                        null === e &&
                            rA &&
                            ((e = n = rT) &&
                                (null !==
                                (n = (function (e, t, n) {
                                    if ("" === t) return null;
                                    for (; 3 !== e.nodeType; )
                                        if (
                                            ((1 !== e.nodeType ||
                                                "INPUT" !==
                                                    e.nodeName ||
                                                "hidden" !==
                                                    e.type) &&
                                                !n) ||
                                            null ===
                                                (e = uR(
                                                    e.nextSibling,
                                                ))
                                        )
                                            return null;
                                    return e;
                                })(n, t.pendingProps, rL))
                                    ? ((t.stateNode = n),
                                      (r_ = t),
                                      (rT = null),
                                      (e = !0))
                                    : (e = !1)),
                            e || rD(t)),
                        null
                    );
                case 13:
                    return oU(e, t, n);
                case 4:
                    return (
                        Q(t, t.stateNode.containerInfo),
                        (r = t.pendingProps),
                        null === e
                            ? (t.child = lE(t, null, r, n))
                            : oC(e, t, r, n),
                        t.child
                    );
                case 11:
                    return oN(e, t, t.type, t.pendingProps, n);
                case 7:
                    return (oC(e, t, t.pendingProps, n), t.child);
                case 8:
                case 12:
                    return (
                        oC(e, t, t.pendingProps.children, n),
                        t.child
                    );
                case 10:
                    return (
                        (r = t.pendingProps),
                        rQ(t, t.type, r.value),
                        oC(e, t, r.children, n),
                        t.child
                    );
                case 9:
                    return (
                        (l = t.type._context),
                        (r = t.pendingProps.children),
                        rZ(t),
                        (r = r((l = rJ(l)))),
                        (t.flags |= 1),
                        oC(e, t, r, n),
                        t.child
                    );
                case 14:
                    return oz(e, t, t.type, t.pendingProps, n);
                case 15:
                    return oF(e, t, t.type, t.pendingProps, n);
                case 19:
                    return oG(e, t, n);
                case 31:
                    var i = e,
                        u = t,
                        c = n,
                        d = u.pendingProps,
                        f = 0 != (128 & u.flags);
                    if (((u.flags &= -129), null === i)) {
                        if (rA) {
                            if ("hidden" === d.mode)
                                return (
                                    (i = oA(u, d)),
                                    (u.lanes = 0x20000000),
                                    o_(null, i)
                                );
                            if (
                                (lQ(u),
                                (i = rT)
                                    ? null !==
                                          (i =
                                              null !==
                                                  (i = uO(i, rL)) &&
                                              "&" === i.data
                                                  ? i
                                                  : null) &&
                                      ((u.memoizedState = {
                                          dehydrated: i,
                                          treeContext:
                                              null !== rw
                                                  ? {
                                                        id: rS,
                                                        overflow:
                                                            rE,
                                                    }
                                                  : null,
                                          retryLane: 0x20000000,
                                          hydrationErrors: null,
                                      }),
                                      ((c = rf(i)).return = u),
                                      (u.child = c),
                                      (r_ = u),
                                      (rT = null))
                                    : (i = null),
                                null === i)
                            )
                                throw rD(u);
                            return ((u.lanes = 0x20000000), null);
                        }
                        return oA(u, d);
                    }
                    var p = i.memoizedState;
                    if (null !== p) {
                        var m = p.dehydrated;
                        if ((lQ(u), f))
                            if (256 & u.flags)
                                ((u.flags &= -257),
                                    (u = oj(i, u, c)));
                            else if (null !== u.memoizedState)
                                ((u.child = i.child),
                                    (u.flags |= 128),
                                    (u = null));
                            else throw Error(s(558));
                        else if (
                            (oE || rY(i, u, c, !1),
                            (f = 0 != (c & i.childLanes)),
                            oE || f)
                        ) {
                            if (
                                null !== (d = iU) &&
                                0 !== (m = eT(d, c)) &&
                                m !== p.retryLane
                            )
                                throw (
                                    (p.retryLane = m),
                                    re(i, m),
                                    sf(d, i, m),
                                    oS
                                );
                            (sS(), (u = oj(i, u, c)));
                        } else
                            ((i = p.treeContext),
                                (rT = uR(m.nextSibling)),
                                (r_ = u),
                                (rA = !0),
                                (rj = null),
                                (rL = !1),
                                null !== i && rP(u, i),
                                (u = oA(u, d)),
                                (u.flags |= 4096));
                        return u;
                    }
                    return (
                        ((i = ri(i.child, {
                            mode: d.mode,
                            children: d.children,
                        })).ref = u.ref),
                        (u.child = i),
                        (i.return = u),
                        i
                    );
                case 22:
                    return oP(e, t, n, t.pendingProps);
                case 24:
                    return (
                        rZ(t),
                        (r = rJ(r5)),
                        null === e
                            ? (null === (l = la()) &&
                                  ((l = iU),
                                  (a = r8()),
                                  (l.pooledCache = a),
                                  a.refCount++,
                                  null !== a &&
                                      (l.pooledCacheLanes |= n),
                                  (l = a)),
                              (t.memoizedState = {
                                  parent: r,
                                  cache: l,
                              }),
                              lz(t),
                              rQ(t, r5, l))
                            : (0 != (e.lanes & n) &&
                                  (lF(e, t),
                                  lO(t, null, null, n),
                                  lL()),
                              (l = e.memoizedState),
                              (a = t.memoizedState),
                              l.parent !== r
                                  ? ((l = { parent: r, cache: r }),
                                    (t.memoizedState = l),
                                    0 === t.lanes &&
                                        (t.memoizedState =
                                            t.updateQueue.baseState =
                                                l),
                                    rQ(t, r5, r))
                                  : (rQ(t, r5, (r = a.cache)),
                                    r !== l.cache &&
                                        rK(t, [r5], n, !0))),
                        oC(e, t, t.pendingProps.children, n),
                        t.child
                    );
                case 29:
                    throw t.pendingProps;
            }
            throw Error(s(156, t.tag));
        }
        function oZ(e) {
            e.flags |= 4;
        }
        function oJ(e, t, n, r, l) {
            if (((t = 0 != (32 & e.mode)) && (t = !1), t)) {
                if (
                    ((e.flags |= 0x1000000), (0x13ffff40 & l) === l)
                )
                    if (e.stateNode.complete) e.flags |= 8192;
                    else if (sx()) e.flags |= 8192;
                    else throw ((lh = ld), lu);
            } else e.flags &= -0x1000001;
        }
        function o0(e, t) {
            if (
                "stylesheet" !== t.type ||
                0 != (4 & t.state.loading)
            )
                e.flags &= -0x1000001;
            else if (((e.flags |= 0x1000000), !u7(t)))
                if (sx()) e.flags |= 8192;
                else throw ((lh = ld), lu);
        }
        function o1(e, t) {
            (null !== t && (e.flags |= 4),
                16384 & e.flags &&
                    ((t = 22 !== e.tag ? eN() : 0x20000000),
                    (e.lanes |= t),
                    (i2 |= t)));
        }
        function o2(e, t) {
            if (!rA)
                switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            (null !== t.alternate && (n = t),
                                (t = t.sibling));
                        null === n
                            ? (e.tail = null)
                            : (n.sibling = null);
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            (null !== n.alternate && (r = n),
                                (n = n.sibling));
                        null === r
                            ? t || null === e.tail
                                ? (e.tail = null)
                                : (e.tail.sibling = null)
                            : (r.sibling = null);
                }
        }
        function o3(e) {
            var t =
                    null !== e.alternate &&
                    e.alternate.child === e.child,
                n = 0,
                r = 0;
            if (t)
                for (var l = e.child; null !== l; )
                    ((n |= l.lanes | l.childLanes),
                        (r |= 0x3e00000 & l.subtreeFlags),
                        (r |= 0x3e00000 & l.flags),
                        (l.return = e),
                        (l = l.sibling));
            else
                for (l = e.child; null !== l; )
                    ((n |= l.lanes | l.childLanes),
                        (r |= l.subtreeFlags),
                        (r |= l.flags),
                        (l.return = e),
                        (l = l.sibling));
            return ((e.subtreeFlags |= r), (e.childLanes = n), t);
        }
        function o4(e, t) {
            switch ((rF(t), t.tag)) {
                case 3:
                    (rq(r5), q());
                    break;
                case 26:
                case 27:
                case 5:
                    K(t);
                    break;
                case 4:
                    q();
                    break;
                case 31:
                    null !== t.memoizedState && lK(t);
                    break;
                case 13:
                    lK(t);
                    break;
                case 19:
                    I(lY);
                    break;
                case 10:
                    rq(t.type);
                    break;
                case 22:
                case 23:
                    (lK(t), lU(), null !== e && I(ll));
                    break;
                case 24:
                    rq(r5);
            }
        }
        function o5(e, t) {
            try {
                var n = t.updateQueue,
                    r = null !== n ? n.lastEffect : null;
                if (null !== r) {
                    var l = r.next;
                    n = l;
                    do {
                        if ((n.tag & e) === e) {
                            r = void 0;
                            var a = n.create;
                            n.inst.destroy = r = a();
                        }
                        n = n.next;
                    } while (n !== l);
                }
            } catch (e) {
                sR(t, t.return, e);
            }
        }
        function o8(e, t, n) {
            try {
                var r = t.updateQueue,
                    l = null !== r ? r.lastEffect : null;
                if (null !== l) {
                    var a = l.next;
                    r = a;
                    do {
                        if ((r.tag & e) === e) {
                            var o = r.inst,
                                i = o.destroy;
                            if (void 0 !== i) {
                                ((o.destroy = void 0), (l = t));
                                try {
                                    i();
                                } catch (e) {
                                    sR(l, n, e);
                                }
                            }
                        }
                        r = r.next;
                    } while (r !== a);
                }
            } catch (e) {
                sR(t, t.return, e);
            }
        }
        function o6(e) {
            var t = e.updateQueue;
            if (null !== t) {
                var n = e.stateNode;
                try {
                    lM(t, n);
                } catch (t) {
                    sR(e, e.return, t);
                }
            }
        }
        function o9(e, t, n) {
            ((n.props = om(e.type, e.memoizedProps)),
                (n.state = e.memoizedState));
            try {
                n.componentWillUnmount();
            } catch (n) {
                sR(e, t, n);
            }
        }
        function o7(e, t) {
            try {
                var n = e.ref;
                if (null !== n) {
                    switch (e.tag) {
                        case 26:
                        case 27:
                        case 5:
                            var r = e.stateNode;
                            break;
                        default:
                            r = e.stateNode;
                    }
                    "function" == typeof n
                        ? (e.refCleanup = n(r))
                        : (n.current = r);
                }
            } catch (n) {
                sR(e, t, n);
            }
        }
        function ie(e, t) {
            var n = e.ref,
                r = e.refCleanup;
            if (null !== n)
                if ("function" == typeof r)
                    try {
                        r();
                    } catch (n) {
                        sR(e, t, n);
                    } finally {
                        ((e.refCleanup = null),
                            null != (e = e.alternate) &&
                                (e.refCleanup = null));
                    }
                else if ("function" == typeof n)
                    try {
                        n(null);
                    } catch (n) {
                        sR(e, t, n);
                    }
                else n.current = null;
        }
        function it(e) {
            var t = e.type,
                n = e.memoizedProps,
                r = e.stateNode;
            try {
                switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n.autoFocus && r.focus();
                        break;
                    case "img":
                        n.src
                            ? (r.src = n.src)
                            : n.srcSet && (r.srcset = n.srcSet);
                }
            } catch (t) {
                sR(e, e.return, t);
            }
        }
        function ir(e, t, n) {
            try {
                var r = e.stateNode;
                ((function (e, t, n, r) {
                    switch (t) {
                        case "div":
                        case "span":
                        case "svg":
                        case "path":
                        case "a":
                        case "g":
                        case "p":
                        case "li":
                            break;
                        case "input":
                            var l = null,
                                a = null,
                                o = null,
                                i = null,
                                u = null,
                                c = null,
                                d = null;
                            for (m in n) {
                                var f = n[m];
                                if (
                                    n.hasOwnProperty(m) &&
                                    null != f
                                )
                                    switch (m) {
                                        case "checked":
                                        case "value":
                                            break;
                                        case "defaultValue":
                                            u = f;
                                        default:
                                            r.hasOwnProperty(m) ||
                                                uh(
                                                    e,
                                                    t,
                                                    m,
                                                    null,
                                                    r,
                                                    f,
                                                );
                                    }
                            }
                            for (var p in r) {
                                var m = r[p];
                                if (
                                    ((f = n[p]),
                                    r.hasOwnProperty(p) &&
                                        (null != m || null != f))
                                )
                                    switch (p) {
                                        case "type":
                                            a = m;
                                            break;
                                        case "name":
                                            l = m;
                                            break;
                                        case "checked":
                                            c = m;
                                            break;
                                        case "defaultChecked":
                                            d = m;
                                            break;
                                        case "value":
                                            o = m;
                                            break;
                                        case "defaultValue":
                                            i = m;
                                            break;
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            if (null != m)
                                                throw Error(
                                                    s(137, t),
                                                );
                                            break;
                                        default:
                                            m !== f &&
                                                uh(
                                                    e,
                                                    t,
                                                    p,
                                                    m,
                                                    r,
                                                    f,
                                                );
                                    }
                            }
                            tl(e, o, i, u, c, d, a, l);
                            return;
                        case "select":
                            for (a in ((m = o = i = p = null), n))
                                if (
                                    ((u = n[a]),
                                    n.hasOwnProperty(a) &&
                                        null != u)
                                )
                                    switch (a) {
                                        case "value":
                                            break;
                                        case "multiple":
                                            m = u;
                                        default:
                                            r.hasOwnProperty(a) ||
                                                uh(
                                                    e,
                                                    t,
                                                    a,
                                                    null,
                                                    r,
                                                    u,
                                                );
                                    }
                            for (l in r)
                                if (
                                    ((a = r[l]),
                                    (u = n[l]),
                                    r.hasOwnProperty(l) &&
                                        (null != a || null != u))
                                )
                                    switch (l) {
                                        case "value":
                                            p = a;
                                            break;
                                        case "defaultValue":
                                            i = a;
                                            break;
                                        case "multiple":
                                            o = a;
                                        default:
                                            a !== u &&
                                                uh(
                                                    e,
                                                    t,
                                                    l,
                                                    a,
                                                    r,
                                                    u,
                                                );
                                    }
                            ((t = i),
                                (n = o),
                                (r = m),
                                null != p
                                    ? ti(e, !!n, p, !1)
                                    : !!r != !!n &&
                                      (null != t
                                          ? ti(e, !!n, t, !0)
                                          : ti(
                                                e,
                                                !!n,
                                                n ? [] : "",
                                                !1,
                                            )));
                            return;
                        case "textarea":
                            for (i in ((m = p = null), n))
                                if (
                                    ((l = n[i]),
                                    n.hasOwnProperty(i) &&
                                        null != l &&
                                        !r.hasOwnProperty(i))
                                )
                                    switch (i) {
                                        case "value":
                                        case "children":
                                            break;
                                        default:
                                            uh(e, t, i, null, r, l);
                                    }
                            for (o in r)
                                if (
                                    ((l = r[o]),
                                    (a = n[o]),
                                    r.hasOwnProperty(o) &&
                                        (null != l || null != a))
                                )
                                    switch (o) {
                                        case "value":
                                            p = l;
                                            break;
                                        case "defaultValue":
                                            m = l;
                                            break;
                                        case "children":
                                            break;
                                        case "dangerouslySetInnerHTML":
                                            if (null != l)
                                                throw Error(s(91));
                                            break;
                                        default:
                                            l !== a &&
                                                uh(
                                                    e,
                                                    t,
                                                    o,
                                                    l,
                                                    r,
                                                    a,
                                                );
                                    }
                            ts(e, p, m);
                            return;
                        case "option":
                            for (var h in n)
                                ((p = n[h]),
                                    n.hasOwnProperty(h) &&
                                        null != p &&
                                        !r.hasOwnProperty(h) &&
                                        ("selected" === h
                                            ? (e.selected = !1)
                                            : uh(
                                                  e,
                                                  t,
                                                  h,
                                                  null,
                                                  r,
                                                  p,
                                              )));
                            for (u in r)
                                ((p = r[u]),
                                    (m = n[u]),
                                    r.hasOwnProperty(u) &&
                                        p !== m &&
                                        (null != p || null != m) &&
                                        ("selected" === u
                                            ? (e.selected =
                                                  p &&
                                                  "function" !=
                                                      typeof p &&
                                                  "symbol" !=
                                                      typeof p)
                                            : uh(
                                                  e,
                                                  t,
                                                  u,
                                                  p,
                                                  r,
                                                  m,
                                              )));
                            return;
                        case "img":
                        case "link":
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "embed":
                        case "hr":
                        case "keygen":
                        case "meta":
                        case "param":
                        case "source":
                        case "track":
                        case "wbr":
                        case "menuitem":
                            for (var g in n)
                                ((p = n[g]),
                                    n.hasOwnProperty(g) &&
                                        null != p &&
                                        !r.hasOwnProperty(g) &&
                                        uh(e, t, g, null, r, p));
                            for (c in r)
                                if (
                                    ((p = r[c]),
                                    (m = n[c]),
                                    r.hasOwnProperty(c) &&
                                        p !== m &&
                                        (null != p || null != m))
                                )
                                    switch (c) {
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            if (null != p)
                                                throw Error(
                                                    s(137, t),
                                                );
                                            break;
                                        default:
                                            uh(e, t, c, p, r, m);
                                    }
                            return;
                        default:
                            if (tm(t)) {
                                for (var y in n)
                                    ((p = n[y]),
                                        n.hasOwnProperty(y) &&
                                            void 0 !== p &&
                                            !r.hasOwnProperty(y) &&
                                            ug(
                                                e,
                                                t,
                                                y,
                                                void 0,
                                                r,
                                                p,
                                            ));
                                for (d in r)
                                    ((p = r[d]),
                                        (m = n[d]),
                                        r.hasOwnProperty(d) &&
                                            p !== m &&
                                            (void 0 !== p ||
                                                void 0 !== m) &&
                                            ug(e, t, d, p, r, m));
                                return;
                            }
                    }
                    for (var b in n)
                        ((p = n[b]),
                            n.hasOwnProperty(b) &&
                                null != p &&
                                !r.hasOwnProperty(b) &&
                                uh(e, t, b, null, r, p));
                    for (f in r)
                        ((p = r[f]),
                            (m = n[f]),
                            r.hasOwnProperty(f) &&
                                p !== m &&
                                (null != p || null != m) &&
                                uh(e, t, f, p, r, m));
                })(r, e.type, n, t),
                    (r[eR] = t));
            } catch (t) {
                sR(e, e.return, t);
            }
        }
        function il(e) {
            return (
                5 === e.tag ||
                3 === e.tag ||
                26 === e.tag ||
                (27 === e.tag && uT(e.type)) ||
                4 === e.tag
            );
        }
        function ia(e) {
            e: for (;;) {
                for (; null === e.sibling; ) {
                    if (null === e.return || il(e.return))
                        return null;
                    e = e.return;
                }
                for (
                    e.sibling.return = e.return, e = e.sibling;
                    5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
                ) {
                    if (
                        (27 === e.tag && uT(e.type)) ||
                        2 & e.flags ||
                        null === e.child ||
                        4 === e.tag
                    )
                        continue e;
                    ((e.child.return = e), (e = e.child));
                }
                if (!(2 & e.flags)) return e.stateNode;
            }
        }
        function io(e, t, n) {
            var r = e.tag;
            if (5 === r || 6 === r)
                ((e = e.stateNode),
                    t ? n.insertBefore(e, t) : n.appendChild(e));
            else if (
                4 !== r &&
                (27 === r && uT(e.type) && (n = e.stateNode),
                null !== (e = e.child))
            )
                for (io(e, t, n), e = e.sibling; null !== e; )
                    (io(e, t, n), (e = e.sibling));
        }
        function ii(e) {
            var t = e.stateNode,
                n = e.memoizedProps;
            try {
                for (var r = e.type, l = t.attributes; l.length; )
                    t.removeAttributeNode(l[0]);
                (uy(t, r, n), (t[eM] = e), (t[eR] = n));
            } catch (t) {
                sR(e, e.return, t);
            }
        }
        var is = !1,
            iu = !1,
            ic = !1,
            id = "function" == typeof WeakSet ? WeakSet : Set,
            ip = null;
        function im(e, t, n) {
            var r = n.flags;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    (iN(e, n), 4 & r && o5(5, n));
                    break;
                case 1:
                    if ((iN(e, n), 4 & r))
                        if (((e = n.stateNode), null === t))
                            try {
                                e.componentDidMount();
                            } catch (e) {
                                sR(n, n.return, e);
                            }
                        else {
                            var l = om(n.type, t.memoizedProps);
                            t = t.memoizedState;
                            try {
                                e.componentDidUpdate(
                                    l,
                                    t,
                                    e.__reactInternalSnapshotBeforeUpdate,
                                );
                            } catch (e) {
                                sR(n, n.return, e);
                            }
                        }
                    (64 & r && o6(n), 512 & r && o7(n, n.return));
                    break;
                case 3:
                    if (
                        (iN(e, n),
                        64 & r && null !== (e = n.updateQueue))
                    ) {
                        if (((t = null), null !== n.child))
                            switch (n.child.tag) {
                                case 27:
                                case 5:
                                case 1:
                                    t = n.child.stateNode;
                            }
                        try {
                            lM(e, t);
                        } catch (e) {
                            sR(n, n.return, e);
                        }
                    }
                    break;
                case 27:
                    null === t && 4 & r && ii(n);
                case 26:
                case 5:
                    (iN(e, n),
                        null === t && 4 & r && it(n),
                        512 & r && o7(n, n.return));
                    break;
                case 12:
                default:
                    iN(e, n);
                    break;
                case 31:
                    (iN(e, n), 4 & r && iv(e, n));
                    break;
                case 13:
                    (iN(e, n),
                        4 & r && ix(e, n),
                        64 & r &&
                            null !== (e = n.memoizedState) &&
                            null !== (e = e.dehydrated) &&
                            (function (e, t) {
                                var n = e.ownerDocument;
                                if ("$~" === e.data)
                                    e._reactRetry = t;
                                else if (
                                    "$?" !== e.data ||
                                    "loading" !== n.readyState
                                )
                                    t();
                                else {
                                    var r = function () {
                                        (t(),
                                            n.removeEventListener(
                                                "DOMContentLoaded",
                                                r,
                                            ));
                                    };
                                    (n.addEventListener(
                                        "DOMContentLoaded",
                                        r,
                                    ),
                                        (e._reactRetry = r));
                                }
                            })(e, (n = sU.bind(null, n))));
                    break;
                case 22:
                    if (!(r = null !== n.memoizedState || is)) {
                        ((t =
                            (null !== t &&
                                null !== t.memoizedState) ||
                            iu),
                            (l = is));
                        var a = iu;
                        ((is = r),
                            (iu = t) && !a
                                ? (function e(t, n, r) {
                                      for (
                                          r =
                                              r &&
                                              0 !=
                                                  (8772 &
                                                      n.subtreeFlags),
                                              n = n.child;
                                          null !== n;
                                      ) {
                                          var l = n.alternate,
                                              a = t,
                                              o = n,
                                              i = o.flags;
                                          switch (o.tag) {
                                              case 0:
                                              case 11:
                                              case 15:
                                                  (e(a, o, r),
                                                      o5(4, o));
                                                  break;
                                              case 1:
                                                  if (
                                                      (e(a, o, r),
                                                      "function" ==
                                                          typeof (a =
                                                              (l =
                                                                  o)
                                                                  .stateNode)
                                                              .componentDidMount)
                                                  )
                                                      try {
                                                          a.componentDidMount();
                                                      } catch (e) {
                                                          sR(
                                                              l,
                                                              l.return,
                                                              e,
                                                          );
                                                      }
                                                  if (
                                                      null !==
                                                      (a = (l = o)
                                                          .updateQueue)
                                                  ) {
                                                      var s =
                                                          l.stateNode;
                                                      try {
                                                          var u =
                                                              a
                                                                  .shared
                                                                  .hiddenCallbacks;
                                                          if (
                                                              null !==
                                                              u
                                                          )
                                                              for (
                                                                  a.shared.hiddenCallbacks =
                                                                      null,
                                                                      a = 0;
                                                                  a <
                                                                  u.length;
                                                                  a++
                                                              )
                                                                  lD(
                                                                      u[
                                                                          a
                                                                      ],
                                                                      s,
                                                                  );
                                                      } catch (e) {
                                                          sR(
                                                              l,
                                                              l.return,
                                                              e,
                                                          );
                                                      }
                                                  }
                                                  (r &&
                                                      64 & i &&
                                                      o6(o),
                                                      o7(
                                                          o,
                                                          o.return,
                                                      ));
                                                  break;
                                              case 27:
                                                  ii(o);
                                              case 26:
                                              case 5:
                                                  (e(a, o, r),
                                                      r &&
                                                          null ===
                                                              l &&
                                                          4 & i &&
                                                          it(o),
                                                      o7(
                                                          o,
                                                          o.return,
                                                      ));
                                                  break;
                                              case 12:
                                              default:
                                                  e(a, o, r);
                                                  break;
                                              case 31:
                                                  (e(a, o, r),
                                                      r &&
                                                          4 & i &&
                                                          iv(a, o));
                                                  break;
                                              case 13:
                                                  (e(a, o, r),
                                                      r &&
                                                          4 & i &&
                                                          ix(a, o));
                                                  break;
                                              case 22:
                                                  (null ===
                                                      o.memoizedState &&
                                                      e(a, o, r),
                                                      o7(
                                                          o,
                                                          o.return,
                                                      ));
                                              case 30:
                                          }
                                          n = n.sibling;
                                      }
                                  })(
                                      e,
                                      n,
                                      0 != (8772 & n.subtreeFlags),
                                  )
                                : iN(e, n),
                            (is = l),
                            (iu = a));
                    }
                case 30:
            }
        }
        var ih = null,
            ig = !1;
        function iy(e, t, n) {
            for (n = n.child; null !== n; )
                (ib(e, t, n), (n = n.sibling));
        }
        function ib(e, t, n) {
            if (eh && "function" == typeof eh.onCommitFiberUnmount)
                try {
                    eh.onCommitFiberUnmount(em, n);
                } catch (e) {}
            switch (n.tag) {
                case 26:
                    (iu || ie(n, t),
                        iy(e, t, n),
                        n.memoizedState
                            ? n.memoizedState.count--
                            : n.stateNode &&
                              (n =
                                  n.stateNode).parentNode.removeChild(
                                  n,
                              ));
                    break;
                case 27:
                    iu || ie(n, t);
                    var r = ih,
                        l = ig;
                    (uT(n.type) && ((ih = n.stateNode), (ig = !1)),
                        iy(e, t, n),
                        uH(n.stateNode),
                        (ih = r),
                        (ig = l));
                    break;
                case 5:
                    iu || ie(n, t);
                case 6:
                    if (
                        ((r = ih),
                        (l = ig),
                        (ih = null),
                        iy(e, t, n),
                        (ih = r),
                        (ig = l),
                        null !== ih)
                    )
                        if (ig)
                            try {
                                (9 === ih.nodeType
                                    ? ih.body
                                    : "HTML" === ih.nodeName
                                      ? ih.ownerDocument.body
                                      : ih
                                ).removeChild(n.stateNode);
                            } catch (e) {
                                sR(n, t, e);
                            }
                        else
                            try {
                                ih.removeChild(n.stateNode);
                            } catch (e) {
                                sR(n, t, e);
                            }
                    break;
                case 18:
                    null !== ih &&
                        (ig
                            ? (uA(
                                  9 === (e = ih).nodeType
                                      ? e.body
                                      : "HTML" === e.nodeName
                                        ? e.ownerDocument.body
                                        : e,
                                  n.stateNode,
                              ),
                              cR(e))
                            : uA(ih, n.stateNode));
                    break;
                case 4:
                    ((r = ih),
                        (l = ig),
                        (ih = n.stateNode.containerInfo),
                        (ig = !0),
                        iy(e, t, n),
                        (ih = r),
                        (ig = l));
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    (o8(2, n, t), iu || o8(4, n, t), iy(e, t, n));
                    break;
                case 1:
                    (iu ||
                        (ie(n, t),
                        "function" ==
                            typeof (r = n.stateNode)
                                .componentWillUnmount &&
                            o9(n, t, r)),
                        iy(e, t, n));
                    break;
                case 21:
                default:
                    iy(e, t, n);
                    break;
                case 22:
                    ((iu = (r = iu) || null !== n.memoizedState),
                        iy(e, t, n),
                        (iu = r));
            }
        }
        function iv(e, t) {
            if (
                null === t.memoizedState &&
                null !== (e = t.alternate) &&
                null !== (e = e.memoizedState)
            ) {
                e = e.dehydrated;
                try {
                    cR(e);
                } catch (e) {
                    sR(t, t.return, e);
                }
            }
        }
        function ix(e, t) {
            if (
                null === t.memoizedState &&
                null !== (e = t.alternate) &&
                null !== (e = e.memoizedState) &&
                null !== (e = e.dehydrated)
            )
                try {
                    cR(e);
                } catch (e) {
                    sR(t, t.return, e);
                }
        }
        function ik(e, t) {
            var n = (function (e) {
                switch (e.tag) {
                    case 31:
                    case 13:
                    case 19:
                        var t = e.stateNode;
                        return (
                            null === t &&
                                (t = e.stateNode = new id()),
                            t
                        );
                    case 22:
                        return (
                            null ===
                                (t = (e = e.stateNode)
                                    ._retryCache) &&
                                (t = e._retryCache = new id()),
                            t
                        );
                    default:
                        throw Error(s(435, e.tag));
                }
            })(e);
            t.forEach(function (t) {
                if (!n.has(t)) {
                    n.add(t);
                    var r = sH.bind(null, e, t);
                    t.then(r, r);
                }
            });
        }
        function iw(e, t) {
            var n = t.deletions;
            if (null !== n)
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        a = e,
                        o = t,
                        i = o;
                    e: for (; null !== i; ) {
                        switch (i.tag) {
                            case 27:
                                if (uT(i.type)) {
                                    ((ih = i.stateNode), (ig = !1));
                                    break e;
                                }
                                break;
                            case 5:
                                ((ih = i.stateNode), (ig = !1));
                                break e;
                            case 3:
                            case 4:
                                ((ih = i.stateNode.containerInfo),
                                    (ig = !0));
                                break e;
                        }
                        i = i.return;
                    }
                    if (null === ih) throw Error(s(160));
                    (ib(a, o, l),
                        (ih = null),
                        (ig = !1),
                        null !== (a = l.alternate) &&
                            (a.return = null),
                        (l.return = null));
                }
            if (13886 & t.subtreeFlags)
                for (t = t.child; null !== t; )
                    (iE(t, e), (t = t.sibling));
        }
        var iS = null;
        function iE(e, t) {
            var n = e.alternate,
                r = e.flags;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    (iw(t, e),
                        iC(e),
                        4 & r &&
                            (o8(3, e, e.return),
                            o5(3, e),
                            o8(5, e, e.return)));
                    break;
                case 1:
                    (iw(t, e),
                        iC(e),
                        512 & r &&
                            (iu || null === n || ie(n, n.return)),
                        64 & r &&
                            is &&
                            null !== (e = e.updateQueue) &&
                            null !== (r = e.callbacks) &&
                            ((n = e.shared.hiddenCallbacks),
                            (e.shared.hiddenCallbacks =
                                null === n ? r : n.concat(r))));
                    break;
                case 26:
                    var l = iS;
                    if (
                        (iw(t, e),
                        iC(e),
                        512 & r &&
                            (iu || null === n || ie(n, n.return)),
                        4 & r)
                    ) {
                        var a = null !== n ? n.memoizedState : null;
                        if (((r = e.memoizedState), null === n))
                            if (null === r)
                                if (null === e.stateNode) {
                                    e: {
                                        ((r = e.type),
                                            (n = e.memoizedProps),
                                            (l =
                                                l.ownerDocument ||
                                                l));
                                        t: switch (r) {
                                            case "title":
                                                ((!(a =
                                                    l.getElementsByTagName(
                                                        "title",
                                                    )[0]) ||
                                                    a[eV] ||
                                                    a[eM] ||
                                                    "http://www.w3.org/2000/svg" ===
                                                        a.namespaceURI ||
                                                    a.hasAttribute(
                                                        "itemprop",
                                                    )) &&
                                                    ((a =
                                                        l.createElement(
                                                            r,
                                                        )),
                                                    l.head.insertBefore(
                                                        a,
                                                        l.querySelector(
                                                            "head > title",
                                                        ),
                                                    )),
                                                    uy(a, r, n),
                                                    (a[eM] = e),
                                                    eY(a),
                                                    (r = a));
                                                break e;
                                            case "link":
                                                var o = u6(
                                                    "link",
                                                    "href",
                                                    l,
                                                ).get(
                                                    r +
                                                        (n.href ||
                                                            ""),
                                                );
                                                if (o) {
                                                    for (
                                                        var i = 0;
                                                        i <
                                                        o.length;
                                                        i++
                                                    )
                                                        if (
                                                            (a =
                                                                o[
                                                                    i
                                                                ]).getAttribute(
                                                                "href",
                                                            ) ===
                                                                (null ==
                                                                    n.href ||
                                                                "" ===
                                                                    n.href
                                                                    ? null
                                                                    : n.href) &&
                                                            a.getAttribute(
                                                                "rel",
                                                            ) ===
                                                                (null ==
                                                                n.rel
                                                                    ? null
                                                                    : n.rel) &&
                                                            a.getAttribute(
                                                                "title",
                                                            ) ===
                                                                (null ==
                                                                n.title
                                                                    ? null
                                                                    : n.title) &&
                                                            a.getAttribute(
                                                                "crossorigin",
                                                            ) ===
                                                                (null ==
                                                                n.crossOrigin
                                                                    ? null
                                                                    : n.crossOrigin)
                                                        ) {
                                                            o.splice(
                                                                i,
                                                                1,
                                                            );
                                                            break t;
                                                        }
                                                }
                                                (uy(
                                                    (a =
                                                        l.createElement(
                                                            r,
                                                        )),
                                                    r,
                                                    n,
                                                ),
                                                    l.head.appendChild(
                                                        a,
                                                    ));
                                                break;
                                            case "meta":
                                                if (
                                                    (o = u6(
                                                        "meta",
                                                        "content",
                                                        l,
                                                    ).get(
                                                        r +
                                                            (n.content ||
                                                                ""),
                                                    ))
                                                ) {
                                                    for (
                                                        i = 0;
                                                        i <
                                                        o.length;
                                                        i++
                                                    )
                                                        if (
                                                            (a =
                                                                o[
                                                                    i
                                                                ]).getAttribute(
                                                                "content",
                                                            ) ===
                                                                (null ==
                                                                n.content
                                                                    ? null
                                                                    : "" +
                                                                      n.content) &&
                                                            a.getAttribute(
                                                                "name",
                                                            ) ===
                                                                (null ==
                                                                n.name
                                                                    ? null
                                                                    : n.name) &&
                                                            a.getAttribute(
                                                                "property",
                                                            ) ===
                                                                (null ==
                                                                n.property
                                                                    ? null
                                                                    : n.property) &&
                                                            a.getAttribute(
                                                                "http-equiv",
                                                            ) ===
                                                                (null ==
                                                                n.httpEquiv
                                                                    ? null
                                                                    : n.httpEquiv) &&
                                                            a.getAttribute(
                                                                "charset",
                                                            ) ===
                                                                (null ==
                                                                n.charSet
                                                                    ? null
                                                                    : n.charSet)
                                                        ) {
                                                            o.splice(
                                                                i,
                                                                1,
                                                            );
                                                            break t;
                                                        }
                                                }
                                                (uy(
                                                    (a =
                                                        l.createElement(
                                                            r,
                                                        )),
                                                    r,
                                                    n,
                                                ),
                                                    l.head.appendChild(
                                                        a,
                                                    ));
                                                break;
                                            default:
                                                throw Error(
                                                    s(468, r),
                                                );
                                        }
                                        ((a[eM] = e),
                                            eY(a),
                                            (r = a));
                                    }
                                    e.stateNode = r;
                                } else u9(l, e.type, e.stateNode);
                            else
                                e.stateNode = u2(
                                    l,
                                    r,
                                    e.memoizedProps,
                                );
                        else
                            a !== r
                                ? (null === a
                                      ? null !== n.stateNode &&
                                        (n =
                                            n.stateNode).parentNode.removeChild(
                                            n,
                                        )
                                      : a.count--,
                                  null === r
                                      ? u9(l, e.type, e.stateNode)
                                      : u2(l, r, e.memoizedProps))
                                : null === r &&
                                  null !== e.stateNode &&
                                  ir(
                                      e,
                                      e.memoizedProps,
                                      n.memoizedProps,
                                  );
                    }
                    break;
                case 27:
                    (iw(t, e),
                        iC(e),
                        512 & r &&
                            (iu || null === n || ie(n, n.return)),
                        null !== n &&
                            4 & r &&
                            ir(
                                e,
                                e.memoizedProps,
                                n.memoizedProps,
                            ));
                    break;
                case 5:
                    if (
                        (iw(t, e),
                        iC(e),
                        512 & r &&
                            (iu || null === n || ie(n, n.return)),
                        32 & e.flags)
                    ) {
                        l = e.stateNode;
                        try {
                            tc(l, "");
                        } catch (t) {
                            sR(e, e.return, t);
                        }
                    }
                    (4 & r &&
                        null != e.stateNode &&
                        ((l = e.memoizedProps),
                        ir(e, l, null !== n ? n.memoizedProps : l)),
                        1024 & r && (ic = !0));
                    break;
                case 6:
                    if ((iw(t, e), iC(e), 4 & r)) {
                        if (null === e.stateNode)
                            throw Error(s(162));
                        ((r = e.memoizedProps), (n = e.stateNode));
                        try {
                            n.nodeValue = r;
                        } catch (t) {
                            sR(e, e.return, t);
                        }
                    }
                    break;
                case 3:
                    if (
                        ((u8 = null),
                        (l = iS),
                        (iS = uQ(t.containerInfo)),
                        iw(t, e),
                        (iS = l),
                        iC(e),
                        4 & r &&
                            null !== n &&
                            n.memoizedState.isDehydrated)
                    )
                        try {
                            cR(t.containerInfo);
                        } catch (t) {
                            sR(e, e.return, t);
                        }
                    ic &&
                        ((ic = !1),
                        (function e(t) {
                            if (1024 & t.subtreeFlags)
                                for (t = t.child; null !== t; ) {
                                    var n = t;
                                    (e(n),
                                        5 === n.tag &&
                                            1024 & n.flags &&
                                            n.stateNode.reset(),
                                        (t = t.sibling));
                                }
                        })(e));
                    break;
                case 4:
                    ((r = iS),
                        (iS = uQ(e.stateNode.containerInfo)),
                        iw(t, e),
                        iC(e),
                        (iS = r));
                    break;
                case 12:
                default:
                    (iw(t, e), iC(e));
                    break;
                case 31:
                case 19:
                    (iw(t, e),
                        iC(e),
                        4 & r &&
                            null !== (r = e.updateQueue) &&
                            ((e.updateQueue = null), ik(e, r)));
                    break;
                case 13:
                    (iw(t, e),
                        iC(e),
                        8192 & e.child.flags &&
                            (null !== e.memoizedState) !=
                                (null !== n &&
                                    null !== n.memoizedState) &&
                            (i8 = ea()),
                        4 & r &&
                            null !== (r = e.updateQueue) &&
                            ((e.updateQueue = null), ik(e, r)));
                    break;
                case 22:
                    l = null !== e.memoizedState;
                    var u = null !== n && null !== n.memoizedState,
                        c = is,
                        d = iu;
                    if (
                        ((is = c || l),
                        (iu = d || u),
                        iw(t, e),
                        (iu = d),
                        (is = c),
                        iC(e),
                        8192 & r)
                    )
                        e: for (
                            (t = e.stateNode)._visibility = l
                                ? -2 & t._visibility
                                : 1 | t._visibility,
                                l &&
                                    (null === n ||
                                        u ||
                                        is ||
                                        iu ||
                                        (function e(t) {
                                            for (
                                                t = t.child;
                                                null !== t;
                                            ) {
                                                var n = t;
                                                switch (n.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 14:
                                                    case 15:
                                                        (o8(
                                                            4,
                                                            n,
                                                            n.return,
                                                        ),
                                                            e(n));
                                                        break;
                                                    case 1:
                                                        ie(
                                                            n,
                                                            n.return,
                                                        );
                                                        var r =
                                                            n.stateNode;
                                                        ("function" ==
                                                            typeof r.componentWillUnmount &&
                                                            o9(
                                                                n,
                                                                n.return,
                                                                r,
                                                            ),
                                                            e(n));
                                                        break;
                                                    case 27:
                                                        uH(
                                                            n.stateNode,
                                                        );
                                                    case 26:
                                                    case 5:
                                                        (ie(
                                                            n,
                                                            n.return,
                                                        ),
                                                            e(n));
                                                        break;
                                                    case 22:
                                                        null ===
                                                            n.memoizedState &&
                                                            e(n);
                                                        break;
                                                    default:
                                                        e(n);
                                                }
                                                t = t.sibling;
                                            }
                                        })(e)),
                                n = null,
                                t = e;
                            ;
                        ) {
                            if (5 === t.tag || 26 === t.tag) {
                                if (null === n) {
                                    u = n = t;
                                    try {
                                        if (((a = u.stateNode), l))
                                            ((o = a.style),
                                                "function" ==
                                                typeof o.setProperty
                                                    ? o.setProperty(
                                                          "display",
                                                          "none",
                                                          "important",
                                                      )
                                                    : (o.display =
                                                          "none"));
                                        else {
                                            i = u.stateNode;
                                            var f =
                                                    u.memoizedProps
                                                        .style,
                                                p =
                                                    null != f &&
                                                    f.hasOwnProperty(
                                                        "display",
                                                    )
                                                        ? f.display
                                                        : null;
                                            i.style.display =
                                                null == p ||
                                                "boolean" ==
                                                    typeof p
                                                    ? ""
                                                    : (
                                                          "" + p
                                                      ).trim();
                                        }
                                    } catch (e) {
                                        sR(u, u.return, e);
                                    }
                                }
                            } else if (6 === t.tag) {
                                if (null === n) {
                                    u = t;
                                    try {
                                        u.stateNode.nodeValue = l
                                            ? ""
                                            : u.memoizedProps;
                                    } catch (e) {
                                        sR(u, u.return, e);
                                    }
                                }
                            } else if (18 === t.tag) {
                                if (null === n) {
                                    u = t;
                                    try {
                                        var m = u.stateNode;
                                        l
                                            ? uj(m, !0)
                                            : uj(u.stateNode, !1);
                                    } catch (e) {
                                        sR(u, u.return, e);
                                    }
                                }
                            } else if (
                                ((22 !== t.tag && 23 !== t.tag) ||
                                    null === t.memoizedState ||
                                    t === e) &&
                                null !== t.child
                            ) {
                                ((t.child.return = t),
                                    (t = t.child));
                                continue;
                            }
                            if (t === e) break;
                            for (; null === t.sibling; ) {
                                if (
                                    null === t.return ||
                                    t.return === e
                                )
                                    break e;
                                (n === t && (n = null),
                                    (t = t.return));
                            }
                            (n === t && (n = null),
                                (t.sibling.return = t.return),
                                (t = t.sibling));
                        }
                    4 & r &&
                        null !== (r = e.updateQueue) &&
                        null !== (n = r.retryQueue) &&
                        ((r.retryQueue = null), ik(e, n));
                case 30:
                case 21:
            }
        }
        function iC(e) {
            var t = e.flags;
            if (2 & t) {
                try {
                    for (var n, r = e.return; null !== r; ) {
                        if (il(r)) {
                            n = r;
                            break;
                        }
                        r = r.return;
                    }
                    if (null == n) throw Error(s(160));
                    switch (n.tag) {
                        case 27:
                            var l = n.stateNode,
                                a = ia(e);
                            io(e, a, l);
                            break;
                        case 5:
                            var o = n.stateNode;
                            32 & n.flags &&
                                (tc(o, ""), (n.flags &= -33));
                            var i = ia(e);
                            io(e, i, o);
                            break;
                        case 3:
                        case 4:
                            var u = n.stateNode.containerInfo,
                                c = ia(e);
                            !(function e(t, n, r) {
                                var l = t.tag;
                                if (5 === l || 6 === l)
                                    ((t = t.stateNode),
                                        n
                                            ? (9 === r.nodeType
                                                  ? r.body
                                                  : "HTML" ===
                                                      r.nodeName
                                                    ? r
                                                          .ownerDocument
                                                          .body
                                                    : r
                                              ).insertBefore(t, n)
                                            : ((n =
                                                  9 === r.nodeType
                                                      ? r.body
                                                      : "HTML" ===
                                                          r.nodeName
                                                        ? r
                                                              .ownerDocument
                                                              .body
                                                        : r).appendChild(
                                                  t,
                                              ),
                                              null !=
                                                  (r =
                                                      r._reactRootContainer) ||
                                                  null !==
                                                      n.onclick ||
                                                  (n.onclick =
                                                      tb)));
                                else if (
                                    4 !== l &&
                                    (27 === l &&
                                        uT(t.type) &&
                                        ((r = t.stateNode),
                                        (n = null)),
                                    null !== (t = t.child))
                                )
                                    for (
                                        e(t, n, r), t = t.sibling;
                                        null !== t;
                                    )
                                        (e(t, n, r),
                                            (t = t.sibling));
                            })(e, c, u);
                            break;
                        default:
                            throw Error(s(161));
                    }
                } catch (t) {
                    sR(e, e.return, t);
                }
                e.flags &= -3;
            }
            4096 & t && (e.flags &= -4097);
        }
        function iN(e, t) {
            if (8772 & t.subtreeFlags)
                for (t = t.child; null !== t; )
                    (im(e, t.alternate, t), (t = t.sibling));
        }
        function iz(e, t) {
            var n = null;
            (null !== e &&
                null !== e.memoizedState &&
                null !== e.memoizedState.cachePool &&
                (n = e.memoizedState.cachePool.pool),
                (e = null),
                null !== t.memoizedState &&
                    null !== t.memoizedState.cachePool &&
                    (e = t.memoizedState.cachePool.pool),
                e !== n &&
                    (null != e && e.refCount++,
                    null != n && r6(n)));
        }
        function iF(e, t) {
            ((e = null),
                null !== t.alternate &&
                    (e = t.alternate.memoizedState.cache),
                (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && r6(e)));
        }
        function iP(e, t, n, r) {
            if (10256 & t.subtreeFlags)
                for (t = t.child; null !== t; )
                    (i_(e, t, n, r), (t = t.sibling));
        }
        function i_(e, t, n, r) {
            var l = t.flags;
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    (iP(e, t, n, r), 2048 & l && o5(9, t));
                    break;
                case 1:
                case 31:
                case 13:
                default:
                    iP(e, t, n, r);
                    break;
                case 3:
                    (iP(e, t, n, r),
                        2048 & l &&
                            ((e = null),
                            null !== t.alternate &&
                                (e =
                                    t.alternate.memoizedState
                                        .cache),
                            (t = t.memoizedState.cache) !== e &&
                                (t.refCount++,
                                null != e && r6(e))));
                    break;
                case 12:
                    if (2048 & l) {
                        (iP(e, t, n, r), (e = t.stateNode));
                        try {
                            var a = t.memoizedProps,
                                o = a.id,
                                i = a.onPostCommit;
                            "function" == typeof i &&
                                i(
                                    o,
                                    null === t.alternate
                                        ? "mount"
                                        : "update",
                                    e.passiveEffectDuration,
                                    -0,
                                );
                        } catch (e) {
                            sR(t, t.return, e);
                        }
                    } else iP(e, t, n, r);
                    break;
                case 23:
                    break;
                case 22:
                    ((a = t.stateNode),
                        (o = t.alternate),
                        null !== t.memoizedState
                            ? 2 & a._visibility
                                ? iP(e, t, n, r)
                                : iT(e, t)
                            : 2 & a._visibility
                              ? iP(e, t, n, r)
                              : ((a._visibility |= 2),
                                (function e(t, n, r, l, a) {
                                    for (
                                        a =
                                            a &&
                                            0 !=
                                                (10256 &
                                                    n.subtreeFlags),
                                            n = n.child;
                                        null !== n;
                                    ) {
                                        var o = n,
                                            i = o.flags;
                                        switch (o.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                (e(t, o, r, l, a),
                                                    o5(8, o));
                                                break;
                                            case 23:
                                                break;
                                            case 22:
                                                var s = o.stateNode;
                                                (null !==
                                                o.memoizedState
                                                    ? 2 &
                                                      s._visibility
                                                        ? e(
                                                              t,
                                                              o,
                                                              r,
                                                              l,
                                                              a,
                                                          )
                                                        : iT(t, o)
                                                    : ((s._visibility |= 2),
                                                      e(
                                                          t,
                                                          o,
                                                          r,
                                                          l,
                                                          a,
                                                      )),
                                                    a &&
                                                        2048 & i &&
                                                        iz(
                                                            o.alternate,
                                                            o,
                                                        ));
                                                break;
                                            case 24:
                                                (e(t, o, r, l, a),
                                                    a &&
                                                        2048 & i &&
                                                        iF(
                                                            o.alternate,
                                                            o,
                                                        ));
                                                break;
                                            default:
                                                e(t, o, r, l, a);
                                        }
                                        n = n.sibling;
                                    }
                                })(
                                    e,
                                    t,
                                    n,
                                    r,
                                    0 != (10256 & t.subtreeFlags),
                                )),
                        2048 & l && iz(o, t));
                    break;
                case 24:
                    (iP(e, t, n, r),
                        2048 & l && iF(t.alternate, t));
            }
        }
        function iT(e, t) {
            if (10256 & t.subtreeFlags)
                for (t = t.child; null !== t; ) {
                    var n = t,
                        r = n.flags;
                    switch (n.tag) {
                        case 22:
                            (iT(e, n),
                                2048 & r && iz(n.alternate, n));
                            break;
                        case 24:
                            (iT(e, n),
                                2048 & r && iF(n.alternate, n));
                            break;
                        default:
                            iT(e, n);
                    }
                    t = t.sibling;
                }
        }
        var iA = 8192;
        function ij(e, t, n) {
            if (e.subtreeFlags & iA)
                for (e = e.child; null !== e; )
                    (iL(e, t, n), (e = e.sibling));
        }
        function iL(e, t, n) {
            switch (e.tag) {
                case 26:
                    (ij(e, t, n),
                        e.flags & iA &&
                            null !== e.memoizedState &&
                            (function (e, t, n, r) {
                                if (
                                    "stylesheet" === n.type &&
                                    ("string" != typeof r.media ||
                                        !1 !==
                                            matchMedia(r.media)
                                                .matches) &&
                                    0 == (4 & n.state.loading)
                                ) {
                                    if (null === n.instance) {
                                        var l = uX(r.href),
                                            a = t.querySelector(
                                                uZ(l),
                                            );
                                        if (a) {
                                            (null !== (t = a._p) &&
                                                "object" ==
                                                    typeof t &&
                                                "function" ==
                                                    typeof t.then &&
                                                (e.count++,
                                                (e = ct.bind(e)),
                                                t.then(e, e)),
                                                (n.state.loading |= 4),
                                                (n.instance = a),
                                                eY(a));
                                            return;
                                        }
                                        ((a = t.ownerDocument || t),
                                            (r = uJ(r)),
                                            (l = uV.get(l)) &&
                                                u4(r, l),
                                            eY(
                                                (a =
                                                    a.createElement(
                                                        "link",
                                                    )),
                                            ));
                                        var o = a;
                                        ((o._p = new Promise(
                                            function (e, t) {
                                                ((o.onload = e),
                                                    (o.onerror =
                                                        t));
                                            },
                                        )),
                                            uy(a, "link", r),
                                            (n.instance = a));
                                    }
                                    (null === e.stylesheets &&
                                        (e.stylesheets = new Map()),
                                        e.stylesheets.set(n, t),
                                        (t = n.state.preload) &&
                                            0 ==
                                                (3 &
                                                    n.state
                                                        .loading) &&
                                            (e.count++,
                                            (n = ct.bind(e)),
                                            t.addEventListener(
                                                "load",
                                                n,
                                            ),
                                            t.addEventListener(
                                                "error",
                                                n,
                                            )));
                                }
                            })(
                                n,
                                iS,
                                e.memoizedState,
                                e.memoizedProps,
                            ));
                    break;
                case 5:
                default:
                    ij(e, t, n);
                    break;
                case 3:
                case 4:
                    var r = iS;
                    ((iS = uQ(e.stateNode.containerInfo)),
                        ij(e, t, n),
                        (iS = r));
                    break;
                case 22:
                    null === e.memoizedState &&
                        (null !== (r = e.alternate) &&
                        null !== r.memoizedState
                            ? ((r = iA),
                              (iA = 0x1000000),
                              ij(e, t, n),
                              (iA = r))
                            : ij(e, t, n));
            }
        }
        function iO(e) {
            var t = e.alternate;
            if (null !== t && null !== (e = t.child)) {
                t.child = null;
                do ((t = e.sibling), (e.sibling = null), (e = t));
                while (null !== e);
            }
        }
        function iD(e) {
            var t = e.deletions;
            if (0 != (16 & e.flags)) {
                if (null !== t)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        ((ip = r), iR(r, e));
                    }
                iO(e);
            }
            if (10256 & e.subtreeFlags)
                for (e = e.child; null !== e; )
                    (iM(e), (e = e.sibling));
        }
        function iM(e) {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    (iD(e), 2048 & e.flags && o8(9, e, e.return));
                    break;
                case 3:
                case 12:
                default:
                    iD(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    null !== e.memoizedState &&
                    2 & t._visibility &&
                    (null === e.return || 13 !== e.return.tag)
                        ? ((t._visibility &= -3),
                          (function e(t) {
                              var n = t.deletions;
                              if (0 != (16 & t.flags)) {
                                  if (null !== n)
                                      for (
                                          var r = 0;
                                          r < n.length;
                                          r++
                                      ) {
                                          var l = n[r];
                                          ((ip = l), iR(l, t));
                                      }
                                  iO(t);
                              }
                              for (t = t.child; null !== t; ) {
                                  switch ((n = t).tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                          (o8(8, n, n.return),
                                              e(n));
                                          break;
                                      case 22:
                                          2 &
                                              (r = n.stateNode)
                                                  ._visibility &&
                                              ((r._visibility &=
                                                  -3),
                                              e(n));
                                          break;
                                      default:
                                          e(n);
                                  }
                                  t = t.sibling;
                              }
                          })(e))
                        : iD(e);
            }
        }
        function iR(e, t) {
            for (; null !== ip; ) {
                var n = ip;
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        o8(8, n, t);
                        break;
                    case 23:
                    case 22:
                        if (
                            null !== n.memoizedState &&
                            null !== n.memoizedState.cachePool
                        ) {
                            var r = n.memoizedState.cachePool.pool;
                            null != r && r.refCount++;
                        }
                        break;
                    case 24:
                        r6(n.memoizedState.cache);
                }
                if (null !== (r = n.child))
                    ((r.return = n), (ip = r));
                else
                    for (n = e; null !== ip; ) {
                        var l = (r = ip).sibling,
                            a = r.return;
                        if (
                            (!(function e(t) {
                                var n = t.alternate;
                                (null !== n &&
                                    ((t.alternate = null), e(n)),
                                    (t.child = null),
                                    (t.deletions = null),
                                    (t.sibling = null),
                                    5 === t.tag &&
                                        null !==
                                            (n = t.stateNode) &&
                                        eW(n),
                                    (t.stateNode = null),
                                    (t.return = null),
                                    (t.dependencies = null),
                                    (t.memoizedProps = null),
                                    (t.memoizedState = null),
                                    (t.pendingProps = null),
                                    (t.stateNode = null),
                                    (t.updateQueue = null));
                            })(r),
                            r === n)
                        ) {
                            ip = null;
                            break;
                        }
                        if (null !== l) {
                            ((l.return = a), (ip = l));
                            break;
                        }
                        ip = a;
                    }
            }
        }
        var iB = {
                getCacheForType: function (e) {
                    var t = rJ(r5),
                        n = t.data.get(e);
                    return (
                        void 0 === n &&
                            ((n = e()), t.data.set(e, n)),
                        n
                    );
                },
                cacheSignal: function () {
                    return rJ(r5).controller.signal;
                },
            },
            iI = "function" == typeof WeakMap ? WeakMap : Map,
            i$ = 0,
            iU = null,
            iH = null,
            iV = 0,
            iW = 0,
            iQ = null,
            iq = !1,
            iG = !1,
            iK = !1,
            iY = 0,
            iX = 0,
            iZ = 0,
            iJ = 0,
            i0 = 0,
            i1 = 0,
            i2 = 0,
            i3 = null,
            i4 = null,
            i5 = !1,
            i8 = 0,
            i6 = 0,
            i9 = 1 / 0,
            i7 = null,
            se = null,
            st = 0,
            sn = null,
            sr = null,
            sl = 0,
            sa = 0,
            so = null,
            si = null,
            ss = 0,
            su = null;
        function sc() {
            return 0 != (2 & i$) && 0 !== iV
                ? iV & -iV
                : null !== L.T
                  ? s3()
                  : eL();
        }
        function sd() {
            if (0 === i1)
                if (0 == (0x20000000 & iV) || rA) {
                    var e = ek;
                    (0 == (3932160 & (ek <<= 1)) && (ek = 262144),
                        (i1 = e));
                } else i1 = 0x20000000;
            return (
                null !== (e = lH.current) && (e.flags |= 32),
                i1
            );
        }
        function sf(e, t, n) {
            (((e === iU && (2 === iW || 9 === iW)) ||
                null !== e.cancelPendingCommit) &&
                (sb(e, 0), sh(e, iV, i1, !1)),
                eF(e, n),
                (0 == (2 & i$) || e !== iU) &&
                    (e === iU &&
                        (0 == (2 & i$) && (iJ |= n),
                        4 === iX && sh(e, iV, i1, !1)),
                    sY(e)));
        }
        function sp(e, t, n) {
            if (0 != (6 & i$)) throw Error(s(327));
            for (
                var r =
                        (!n &&
                            0 == (127 & t) &&
                            0 == (t & e.expiredLanes)) ||
                        eC(e, t),
                    l = r
                        ? (function (e, t) {
                              var n = i$;
                              i$ |= 2;
                              var r = sk(),
                                  l = sw();
                              iU !== e || iV !== t
                                  ? ((i7 = null),
                                    (i9 = ea() + 500),
                                    sb(e, t))
                                  : (iG = eC(e, t));
                              e: for (;;)
                                  try {
                                      if (0 !== iW && null !== iH) {
                                          t = iH;
                                          var a = iQ;
                                          t: switch (iW) {
                                              case 1:
                                                  ((iW = 0),
                                                      (iQ = null),
                                                      sz(
                                                          e,
                                                          t,
                                                          a,
                                                          1,
                                                      ));
                                                  break;
                                              case 2:
                                              case 9:
                                                  if (lf(a)) {
                                                      ((iW = 0),
                                                          (iQ =
                                                              null),
                                                          sN(t));
                                                      break;
                                                  }
                                                  ((t =
                                                      function () {
                                                          ((2 !==
                                                              iW &&
                                                              9 !==
                                                                  iW) ||
                                                              iU !==
                                                                  e ||
                                                              (iW = 7),
                                                              sY(
                                                                  e,
                                                              ));
                                                      }),
                                                      a.then(t, t));
                                                  break e;
                                              case 3:
                                                  iW = 7;
                                                  break e;
                                              case 4:
                                                  iW = 5;
                                                  break e;
                                              case 7:
                                                  lf(a)
                                                      ? ((iW = 0),
                                                        (iQ = null),
                                                        sN(t))
                                                      : ((iW = 0),
                                                        (iQ = null),
                                                        sz(
                                                            e,
                                                            t,
                                                            a,
                                                            7,
                                                        ));
                                                  break;
                                              case 5:
                                                  var o = null;
                                                  switch (iH.tag) {
                                                      case 26:
                                                          o =
                                                              iH.memoizedState;
                                                      case 5:
                                                      case 27:
                                                          var i =
                                                              iH;
                                                          if (
                                                              o
                                                                  ? u7(
                                                                        o,
                                                                    )
                                                                  : i
                                                                        .stateNode
                                                                        .complete
                                                          ) {
                                                              ((iW = 0),
                                                                  (iQ =
                                                                      null));
                                                              var u =
                                                                  i.sibling;
                                                              if (
                                                                  null !==
                                                                  u
                                                              )
                                                                  iH =
                                                                      u;
                                                              else {
                                                                  var c =
                                                                      i.return;
                                                                  null !==
                                                                  c
                                                                      ? ((iH =
                                                                            c),
                                                                        sF(
                                                                            c,
                                                                        ))
                                                                      : (iH =
                                                                            null);
                                                              }
                                                              break t;
                                                          }
                                                  }
                                                  ((iW = 0),
                                                      (iQ = null),
                                                      sz(
                                                          e,
                                                          t,
                                                          a,
                                                          5,
                                                      ));
                                                  break;
                                              case 6:
                                                  ((iW = 0),
                                                      (iQ = null),
                                                      sz(
                                                          e,
                                                          t,
                                                          a,
                                                          6,
                                                      ));
                                                  break;
                                              case 8:
                                                  (sy(), (iX = 6));
                                                  break e;
                                              default:
                                                  throw Error(
                                                      s(462),
                                                  );
                                          }
                                      }
                                      for (; null !== iH && !er(); )
                                          sC(iH);
                                      break;
                                  } catch (t) {
                                      sv(e, t);
                                  }
                              return ((rW = rV = null),
                              (L.H = r),
                              (L.A = l),
                              (i$ = n),
                              null !== iH)
                                  ? 0
                                  : ((iU = null),
                                    (iV = 0),
                                    n6(),
                                    iX);
                          })(e, t)
                        : sE(e, t, !0),
                    a = r;
                ;
            ) {
                if (0 === l) iG && !r && sh(e, t, 0, !1);
                else {
                    if (
                        ((n = e.current.alternate),
                        a &&
                            !(function (e) {
                                for (var t = e; ; ) {
                                    var n = t.tag;
                                    if (
                                        (0 === n ||
                                            11 === n ||
                                            15 === n) &&
                                        16384 & t.flags &&
                                        null !==
                                            (n = t.updateQueue) &&
                                        null !== (n = n.stores)
                                    )
                                        for (
                                            var r = 0;
                                            r < n.length;
                                            r++
                                        ) {
                                            var l = n[r],
                                                a = l.getSnapshot;
                                            l = l.value;
                                            try {
                                                if (!n_(a(), l))
                                                    return !1;
                                            } catch (e) {
                                                return !1;
                                            }
                                        }
                                    if (
                                        ((n = t.child),
                                        16384 & t.subtreeFlags &&
                                            null !== n)
                                    )
                                        ((n.return = t), (t = n));
                                    else {
                                        if (t === e) break;
                                        for (
                                            ;
                                            null === t.sibling;
                                        ) {
                                            if (
                                                null === t.return ||
                                                t.return === e
                                            )
                                                return !0;
                                            t = t.return;
                                        }
                                        ((t.sibling.return =
                                            t.return),
                                            (t = t.sibling));
                                    }
                                }
                                return !0;
                            })(n))
                    ) {
                        ((l = sE(e, t, !1)), (a = !1));
                        continue;
                    }
                    if (2 === l) {
                        if (
                            ((a = t),
                            e.errorRecoveryDisabledLanes & a)
                        )
                            var o = 0;
                        else
                            o =
                                0 !=
                                (o = -0x20000001 & e.pendingLanes)
                                    ? o
                                    : 0x20000000 & o
                                      ? 0x20000000
                                      : 0;
                        if (0 !== o) {
                            t = o;
                            e: {
                                l = i3;
                                var i =
                                    e.current.memoizedState
                                        .isDehydrated;
                                if (
                                    (i && (sb(e, o).flags |= 256),
                                    2 !== (o = sE(e, o, !1)))
                                ) {
                                    if (iK && !i) {
                                        ((e.errorRecoveryDisabledLanes |=
                                            a),
                                            (iJ |= a),
                                            (l = 4));
                                        break e;
                                    }
                                    ((a = i4),
                                        (i4 = l),
                                        null !== a &&
                                            (null === i4
                                                ? (i4 = a)
                                                : i4.push.apply(
                                                      i4,
                                                      a,
                                                  )));
                                }
                                l = o;
                            }
                            if (((a = !1), 2 !== l)) continue;
                        }
                    }
                    if (1 === l) {
                        (sb(e, 0), sh(e, t, 0, !0));
                        break;
                    }
                    e: {
                        switch (((r = e), (a = l))) {
                            case 0:
                            case 1:
                                throw Error(s(345));
                            case 4:
                                if ((4194048 & t) !== t) break;
                            case 6:
                                sh(r, t, i1, !iq);
                                break e;
                            case 2:
                                i4 = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(s(329));
                        }
                        if (
                            (0x3c00000 & t) === t &&
                            10 < (l = i8 + 300 - ea())
                        ) {
                            if (
                                (sh(r, t, i1, !iq),
                                0 !== eE(r, 0, !0))
                            )
                                break e;
                            ((sl = t),
                                (r.timeoutHandle = uN(
                                    sm.bind(
                                        null,
                                        r,
                                        n,
                                        i4,
                                        i7,
                                        i5,
                                        t,
                                        i1,
                                        iJ,
                                        i2,
                                        iq,
                                        a,
                                        "Throttled",
                                        -0,
                                        0,
                                    ),
                                    l,
                                )));
                            break e;
                        }
                        sm(
                            r,
                            n,
                            i4,
                            i7,
                            i5,
                            t,
                            i1,
                            iJ,
                            i2,
                            iq,
                            a,
                            null,
                            -0,
                            0,
                        );
                    }
                }
                break;
            }
            sY(e);
        }
        function sm(e, t, n, r, l, a, o, i, s, u, c, d, f, p) {
            if (
                ((e.timeoutHandle = -1),
                8192 & (d = t.subtreeFlags) ||
                    0x1002000 == (0x1002000 & d))
            ) {
                iL(
                    t,
                    a,
                    (d = {
                        stylesheets: null,
                        count: 0,
                        imgCount: 0,
                        imgBytes: 0,
                        suspenseyImages: [],
                        waitingForImages: !0,
                        waitingForViewTransition: !1,
                        unsuspend: tb,
                    }),
                );
                var m,
                    h,
                    g =
                        (0x3c00000 & a) === a
                            ? i8 - ea()
                            : (4194048 & a) === a
                              ? i6 - ea()
                              : 0;
                if (
                    null !==
                    ((m = d),
                    (h = g),
                    m.stylesheets &&
                        0 === m.count &&
                        cr(m, m.stylesheets),
                    (g =
                        0 < m.count || 0 < m.imgCount
                            ? function (e) {
                                  var t = setTimeout(function () {
                                      if (
                                          (m.stylesheets &&
                                              cr(m, m.stylesheets),
                                          m.unsuspend)
                                      ) {
                                          var e = m.unsuspend;
                                          ((m.unsuspend = null),
                                              e());
                                      }
                                  }, 6e4 + h);
                                  0 < m.imgBytes &&
                                      0 === ce &&
                                      (ce =
                                          62500 *
                                          (function () {
                                              if (
                                                  "function" ==
                                                  typeof performance.getEntriesByType
                                              ) {
                                                  for (
                                                      var e = 0,
                                                          t = 0,
                                                          n =
                                                              performance.getEntriesByType(
                                                                  "resource",
                                                              ),
                                                          r = 0;
                                                      r < n.length;
                                                      r++
                                                  ) {
                                                      var l = n[r],
                                                          a =
                                                              l.transferSize,
                                                          o =
                                                              l.initiatorType,
                                                          i =
                                                              l.duration;
                                                      if (
                                                          a &&
                                                          i &&
                                                          ub(o)
                                                      ) {
                                                          for (
                                                              o = 0,
                                                                  i =
                                                                      l.responseEnd,
                                                                  r += 1;
                                                              r <
                                                              n.length;
                                                              r++
                                                          ) {
                                                              var s =
                                                                      n[
                                                                          r
                                                                      ],
                                                                  u =
                                                                      s.startTime;
                                                              if (
                                                                  u >
                                                                  i
                                                              )
                                                                  break;
                                                              var c =
                                                                      s.transferSize,
                                                                  d =
                                                                      s.initiatorType;
                                                              c &&
                                                                  ub(
                                                                      d,
                                                                  ) &&
                                                                  (o +=
                                                                      c *
                                                                      ((s =
                                                                          s.responseEnd) <
                                                                      i
                                                                          ? 1
                                                                          : (i -
                                                                                u) /
                                                                            (s -
                                                                                u)));
                                                          }
                                                          if (
                                                              (--r,
                                                              (t +=
                                                                  (8 *
                                                                      (a +
                                                                          o)) /
                                                                  (l.duration /
                                                                      1e3)),
                                                              10 <
                                                                  ++e)
                                                          )
                                                              break;
                                                      }
                                                  }
                                                  if (0 < e)
                                                      return (
                                                          t /
                                                          e /
                                                          1e6
                                                      );
                                              }
                                              return navigator.connection &&
                                                  "number" ==
                                                      typeof (e =
                                                          navigator
                                                              .connection
                                                              .downlink)
                                                  ? e
                                                  : 5;
                                          })());
                                  var n = setTimeout(
                                      function () {
                                          if (
                                              ((m.waitingForImages =
                                                  !1),
                                              0 === m.count &&
                                                  (m.stylesheets &&
                                                      cr(
                                                          m,
                                                          m.stylesheets,
                                                      ),
                                                  m.unsuspend))
                                          ) {
                                              var e = m.unsuspend;
                                              ((m.unsuspend = null),
                                                  e());
                                          }
                                      },
                                      (m.imgBytes > ce ? 50 : 800) +
                                          h,
                                  );
                                  return (
                                      (m.unsuspend = e),
                                      function () {
                                          ((m.unsuspend = null),
                                              clearTimeout(t),
                                              clearTimeout(n));
                                      }
                                  );
                              }
                            : null))
                ) {
                    ((sl = a),
                        (e.cancelPendingCommit = g(
                            s_.bind(
                                null,
                                e,
                                t,
                                a,
                                n,
                                r,
                                l,
                                o,
                                i,
                                s,
                                c,
                                d,
                                null,
                                f,
                                p,
                            ),
                        )),
                        sh(e, a, o, !u));
                    return;
                }
            }
            s_(e, t, a, n, r, l, o, i, s);
        }
        function sh(e, t, n, r) {
            ((t &= ~i0),
                (t &= ~iJ),
                (e.suspendedLanes |= t),
                (e.pingedLanes &= ~t),
                r && (e.warmLanes |= t),
                (r = e.expirationTimes));
            for (var l = t; 0 < l; ) {
                var a = 31 - ey(l),
                    o = 1 << a;
                ((r[a] = -1), (l &= ~o));
            }
            0 !== n && eP(e, n, t);
        }
        function sg() {
            return 0 != (6 & i$) || (sX(0, !1), !1);
        }
        function sy() {
            if (null !== iH) {
                if (0 === iW) var e = iH.return;
                else
                    ((e = iH),
                        (rW = rV = null),
                        ai(e),
                        (lb = null),
                        (lv = 0),
                        (e = iH));
                for (; null !== e; )
                    (o4(e.alternate, e), (e = e.return));
                iH = null;
            }
        }
        function sb(e, t) {
            var n = e.timeoutHandle;
            (-1 !== n && ((e.timeoutHandle = -1), uz(n)),
                null !== (n = e.cancelPendingCommit) &&
                    ((e.cancelPendingCommit = null), n()),
                (sl = 0),
                sy(),
                (iU = e),
                (iH = n = ri(e.current, null)),
                (iV = t),
                (iW = 0),
                (iQ = null),
                (iq = !1),
                (iG = eC(e, t)),
                (iK = !1),
                (i2 = i1 = i0 = iJ = iZ = iX = 0),
                (i4 = i3 = null),
                (i5 = !1),
                0 != (8 & t) && (t |= 32 & t));
            var r = e.entangledLanes;
            if (0 !== r)
                for (e = e.entanglements, r &= t; 0 < r; ) {
                    var l = 31 - ey(r),
                        a = 1 << l;
                    ((t |= e[l]), (r &= ~a));
                }
            return ((iY = t), n6(), n);
        }
        function sv(e, t) {
            ((lJ = null),
                (L.H = oo),
                t === ls || t === lc
                    ? ((t = lg()), (iW = 3))
                    : t === lu
                      ? ((t = lg()), (iW = 4))
                      : (iW =
                            t === oS
                                ? 8
                                : null !== t &&
                                    "object" == typeof t &&
                                    "function" == typeof t.then
                                  ? 6
                                  : 1),
                (iQ = t),
                null === iH && ((iX = 1), ob(e, rh(t, e.current))));
        }
        function sx() {
            var e = lH.current;
            return (
                null === e ||
                ((4194048 & iV) === iV
                    ? null === lV
                    : ((0x3c00000 & iV) === iV ||
                          0 != (0x20000000 & iV)) &&
                      e === lV)
            );
        }
        function sk() {
            var e = L.H;
            return ((L.H = oo), null === e ? oo : e);
        }
        function sw() {
            var e = L.A;
            return ((L.A = iB), e);
        }
        function sS() {
            ((iX = 4),
                iq ||
                    ((4194048 & iV) !== iV &&
                        null !== lH.current) ||
                    (iG = !0),
                (0 == (0x7ffffff & iZ) && 0 == (0x7ffffff & iJ)) ||
                    null === iU ||
                    sh(iU, iV, i1, !1));
        }
        function sE(e, t, n) {
            var r = i$;
            i$ |= 2;
            var l = sk(),
                a = sw();
            ((iU !== e || iV !== t) && ((i7 = null), sb(e, t)),
                (t = !1));
            var o = iX;
            e: for (;;)
                try {
                    if (0 !== iW && null !== iH) {
                        var i = iH,
                            s = iQ;
                        switch (iW) {
                            case 8:
                                (sy(), (o = 6));
                                break e;
                            case 3:
                            case 2:
                            case 9:
                            case 6:
                                null === lH.current && (t = !0);
                                var u = iW;
                                if (
                                    ((iW = 0),
                                    (iQ = null),
                                    sz(e, i, s, u),
                                    n && iG)
                                ) {
                                    o = 0;
                                    break e;
                                }
                                break;
                            default:
                                ((u = iW),
                                    (iW = 0),
                                    (iQ = null),
                                    sz(e, i, s, u));
                        }
                    }
                    ((function () {
                        for (; null !== iH; ) sC(iH);
                    })(),
                        (o = iX));
                    break;
                } catch (t) {
                    sv(e, t);
                }
            return (
                t && e.shellSuspendCounter++,
                (rW = rV = null),
                (i$ = r),
                (L.H = l),
                (L.A = a),
                null === iH && ((iU = null), (iV = 0), n6()),
                o
            );
        }
        function sC(e) {
            var t = oX(e.alternate, e, iY);
            ((e.memoizedProps = e.pendingProps),
                null === t ? sF(e) : (iH = t));
        }
        function sN(e) {
            var t = e,
                n = t.alternate;
            switch (t.tag) {
                case 15:
                case 0:
                    t = oD(
                        n,
                        t,
                        t.pendingProps,
                        t.type,
                        void 0,
                        iV,
                    );
                    break;
                case 11:
                    t = oD(
                        n,
                        t,
                        t.pendingProps,
                        t.type.render,
                        t.ref,
                        iV,
                    );
                    break;
                case 5:
                    ai(t);
                default:
                    (o4(n, t),
                        (t = oX(n, (t = iH = rs(t, iY)), iY)));
            }
            ((e.memoizedProps = e.pendingProps),
                null === t ? sF(e) : (iH = t));
        }
        function sz(e, t, n, r) {
            ((rW = rV = null), ai(t), (lb = null), (lv = 0));
            var l = t.return;
            try {
                if (
                    (function (e, t, n, r, l) {
                        if (
                            ((n.flags |= 32768),
                            null !== r &&
                                "object" == typeof r &&
                                "function" == typeof r.then)
                        ) {
                            if (
                                (null !== (t = n.alternate) &&
                                    rY(t, n, l, !0),
                                null !== (n = lH.current))
                            ) {
                                switch (n.tag) {
                                    case 31:
                                    case 13:
                                        return (
                                            null === lV
                                                ? sS()
                                                : null ===
                                                      n.alternate &&
                                                  0 === iX &&
                                                  (iX = 3),
                                            (n.flags &= -257),
                                            (n.flags |= 65536),
                                            (n.lanes = l),
                                            r === ld
                                                ? (n.flags |= 16384)
                                                : (null ===
                                                  (t =
                                                      n.updateQueue)
                                                      ? (n.updateQueue =
                                                            new Set(
                                                                [r],
                                                            ))
                                                      : t.add(r),
                                                  sB(e, r, l)),
                                            !1
                                        );
                                    case 22:
                                        return (
                                            (n.flags |= 65536),
                                            r === ld
                                                ? (n.flags |= 16384)
                                                : (null ===
                                                  (t =
                                                      n.updateQueue)
                                                      ? ((t = {
                                                            transitions:
                                                                null,
                                                            markerInstances:
                                                                null,
                                                            retryQueue:
                                                                new Set(
                                                                    [
                                                                        r,
                                                                    ],
                                                                ),
                                                        }),
                                                        (n.updateQueue =
                                                            t))
                                                      : null ===
                                                          (n =
                                                              t.retryQueue)
                                                        ? (t.retryQueue =
                                                              new Set(
                                                                  [
                                                                      r,
                                                                  ],
                                                              ))
                                                        : n.add(r),
                                                  sB(e, r, l)),
                                            !1
                                        );
                                }
                                throw Error(s(435, n.tag));
                            }
                            return (sB(e, r, l), sS(), !1);
                        }
                        if (rA)
                            return (
                                null !== (t = lH.current)
                                    ? (0 == (65536 & t.flags) &&
                                          (t.flags |= 256),
                                      (t.flags |= 65536),
                                      (t.lanes = l),
                                      r !== rO &&
                                          rU(
                                              rh(
                                                  (e = Error(
                                                      s(422),
                                                      { cause: r },
                                                  )),
                                                  n,
                                              ),
                                          ))
                                    : (r !== rO &&
                                          rU(
                                              rh(
                                                  (t = Error(
                                                      s(423),
                                                      { cause: r },
                                                  )),
                                                  n,
                                              ),
                                          ),
                                      (e = e.current.alternate),
                                      (e.flags |= 65536),
                                      (l &= -l),
                                      (e.lanes |= l),
                                      (r = rh(r, n)),
                                      (l = ox(e.stateNode, r, l)),
                                      lA(e, l),
                                      4 !== iX && (iX = 2)),
                                !1
                            );
                        var a = Error(s(520), { cause: r });
                        if (
                            ((a = rh(a, n)),
                            null === i3 ? (i3 = [a]) : i3.push(a),
                            4 !== iX && (iX = 2),
                            null === t)
                        )
                            return !0;
                        ((r = rh(r, n)), (n = t));
                        do {
                            switch (n.tag) {
                                case 3:
                                    return (
                                        (n.flags |= 65536),
                                        (e = l & -l),
                                        (n.lanes |= e),
                                        (e = ox(n.stateNode, r, e)),
                                        lA(n, e),
                                        !1
                                    );
                                case 1:
                                    if (
                                        ((t = n.type),
                                        (a = n.stateNode),
                                        0 == (128 & n.flags) &&
                                            ("function" ==
                                                typeof t.getDerivedStateFromError ||
                                                (null !== a &&
                                                    "function" ==
                                                        typeof a.componentDidCatch &&
                                                    (null === se ||
                                                        !se.has(
                                                            a,
                                                        )))))
                                    )
                                        return (
                                            (n.flags |= 65536),
                                            (l &= -l),
                                            (n.lanes |= l),
                                            ow(
                                                (l = ok(l)),
                                                e,
                                                n,
                                                r,
                                            ),
                                            lA(n, l),
                                            !1
                                        );
                            }
                            n = n.return;
                        } while (null !== n);
                        return !1;
                    })(e, l, t, n, iV)
                ) {
                    ((iX = 1),
                        ob(e, rh(n, e.current)),
                        (iH = null));
                    return;
                }
            } catch (t) {
                if (null !== l) throw ((iH = l), t);
                ((iX = 1), ob(e, rh(n, e.current)), (iH = null));
                return;
            }
            32768 & t.flags
                ? (rA || 1 === r
                      ? (e = !0)
                      : iG || 0 != (0x20000000 & iV)
                        ? (e = !1)
                        : ((iq = e = !0),
                          (2 === r ||
                              9 === r ||
                              3 === r ||
                              6 === r) &&
                              null !== (r = lH.current) &&
                              13 === r.tag &&
                              (r.flags |= 16384)),
                  sP(t, e))
                : sF(t);
        }
        function sF(e) {
            var t = e;
            do {
                if (0 != (32768 & t.flags)) return void sP(t, iq);
                e = t.return;
                var n = (function (e, t, n) {
                    var r = t.pendingProps;
                    switch ((rF(t), t.tag)) {
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                        case 1:
                            return (o3(t), null);
                        case 3:
                            return (
                                (n = t.stateNode),
                                (r = null),
                                null !== e &&
                                    (r = e.memoizedState.cache),
                                t.memoizedState.cache !== r &&
                                    (t.flags |= 2048),
                                rq(r5),
                                q(),
                                n.pendingContext &&
                                    ((n.context = n.pendingContext),
                                    (n.pendingContext = null)),
                                (null === e || null === e.child) &&
                                    (rB(t)
                                        ? oZ(t)
                                        : null === e ||
                                          (e.memoizedState
                                              .isDehydrated &&
                                              0 ==
                                                  (256 &
                                                      t.flags)) ||
                                          ((t.flags |= 1024),
                                          r$())),
                                o3(t),
                                null
                            );
                        case 26:
                            var l = t.type,
                                a = t.memoizedState;
                            return (
                                null === e
                                    ? (oZ(t),
                                      null !== a
                                          ? (o3(t), o0(t, a))
                                          : (o3(t),
                                            oJ(t, l, null, r, n)))
                                    : a
                                      ? a !== e.memoizedState
                                          ? (oZ(t), o3(t), o0(t, a))
                                          : (o3(t),
                                            (t.flags &= -0x1000001))
                                      : ((e = e.memoizedProps) !==
                                            r && oZ(t),
                                        o3(t),
                                        oJ(t, l, e, r, n)),
                                null
                            );
                        case 27:
                            if (
                                (K(t),
                                (n = V.current),
                                (l = t.type),
                                null !== e && null != t.stateNode)
                            )
                                e.memoizedProps !== r && oZ(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode)
                                        throw Error(s(166));
                                    return (o3(t), null);
                                }
                                ((e = U.current),
                                    rB(t)
                                        ? rM(t, e)
                                        : ((t.stateNode = e =
                                              uU(l, r, n)),
                                          oZ(t)));
                            }
                            return (o3(t), null);
                        case 5:
                            if (
                                (K(t),
                                (l = t.type),
                                null !== e && null != t.stateNode)
                            )
                                e.memoizedProps !== r && oZ(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode)
                                        throw Error(s(166));
                                    return (o3(t), null);
                                }
                                if (((a = U.current), rB(t)))
                                    rM(t, a);
                                else {
                                    var o = uk(V.current);
                                    switch (a) {
                                        case 1:
                                            a = o.createElementNS(
                                                "http://www.w3.org/2000/svg",
                                                l,
                                            );
                                            break;
                                        case 2:
                                            a = o.createElementNS(
                                                "http://www.w3.org/1998/Math/MathML",
                                                l,
                                            );
                                            break;
                                        default:
                                            switch (l) {
                                                case "svg":
                                                    a =
                                                        o.createElementNS(
                                                            "http://www.w3.org/2000/svg",
                                                            l,
                                                        );
                                                    break;
                                                case "math":
                                                    a =
                                                        o.createElementNS(
                                                            "http://www.w3.org/1998/Math/MathML",
                                                            l,
                                                        );
                                                    break;
                                                case "script":
                                                    (((a =
                                                        o.createElement(
                                                            "div",
                                                        )).innerHTML =
                                                        "<script><\/script>"),
                                                        (a =
                                                            a.removeChild(
                                                                a.firstChild,
                                                            )));
                                                    break;
                                                case "select":
                                                    ((a =
                                                        "string" ==
                                                        typeof r.is
                                                            ? o.createElement(
                                                                  "select",
                                                                  {
                                                                      is: r.is,
                                                                  },
                                                              )
                                                            : o.createElement(
                                                                  "select",
                                                              )),
                                                        r.multiple
                                                            ? (a.multiple =
                                                                  !0)
                                                            : r.size &&
                                                              (a.size =
                                                                  r.size));
                                                    break;
                                                default:
                                                    a =
                                                        "string" ==
                                                        typeof r.is
                                                            ? o.createElement(
                                                                  l,
                                                                  {
                                                                      is: r.is,
                                                                  },
                                                              )
                                                            : o.createElement(
                                                                  l,
                                                              );
                                            }
                                    }
                                    ((a[eM] = t), (a[eR] = r));
                                    e: for (
                                        o = t.child;
                                        null !== o;
                                    ) {
                                        if (
                                            5 === o.tag ||
                                            6 === o.tag
                                        )
                                            a.appendChild(
                                                o.stateNode,
                                            );
                                        else if (
                                            4 !== o.tag &&
                                            27 !== o.tag &&
                                            null !== o.child
                                        ) {
                                            ((o.child.return = o),
                                                (o = o.child));
                                            continue;
                                        }
                                        if (o === t) break;
                                        for (
                                            ;
                                            null === o.sibling;
                                        ) {
                                            if (
                                                null === o.return ||
                                                o.return === t
                                            )
                                                break e;
                                            o = o.return;
                                        }
                                        ((o.sibling.return =
                                            o.return),
                                            (o = o.sibling));
                                    }
                                    switch (
                                        ((t.stateNode = a),
                                        uy(a, l, r),
                                        l)
                                    ) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            r = !!r.autoFocus;
                                            break;
                                        case "img":
                                            r = !0;
                                            break;
                                        default:
                                            r = !1;
                                    }
                                    r && oZ(t);
                                }
                            }
                            return (
                                o3(t),
                                oJ(
                                    t,
                                    t.type,
                                    null === e
                                        ? null
                                        : e.memoizedProps,
                                    t.pendingProps,
                                    n,
                                ),
                                null
                            );
                        case 6:
                            if (e && null != t.stateNode)
                                e.memoizedProps !== r && oZ(t);
                            else {
                                if (
                                    "string" != typeof r &&
                                    null === t.stateNode
                                )
                                    throw Error(s(166));
                                if (((e = V.current), rB(t))) {
                                    if (
                                        ((e = t.stateNode),
                                        (n = t.memoizedProps),
                                        (r = null),
                                        null !== (l = r_))
                                    )
                                        switch (l.tag) {
                                            case 27:
                                            case 5:
                                                r = l.memoizedProps;
                                        }
                                    ((e[eM] = t),
                                        (e = !!(
                                            e.nodeValue === n ||
                                            (null !== r &&
                                                !0 ===
                                                    r.suppressHydrationWarning) ||
                                            um(e.nodeValue, n)
                                        )) || rD(t, !0));
                                } else
                                    (((e = uk(e).createTextNode(r))[
                                        eM
                                    ] = t),
                                        (t.stateNode = e));
                            }
                            return (o3(t), null);
                        case 31:
                            if (
                                ((n = t.memoizedState),
                                null === e ||
                                    null !== e.memoizedState)
                            ) {
                                if (((r = rB(t)), null !== n)) {
                                    if (null === e) {
                                        if (!r) throw Error(s(318));
                                        if (
                                            !(e =
                                                null !==
                                                (e =
                                                    t.memoizedState)
                                                    ? e.dehydrated
                                                    : null)
                                        )
                                            throw Error(s(557));
                                        e[eM] = t;
                                    } else
                                        (rI(),
                                            0 == (128 & t.flags) &&
                                                (t.memoizedState =
                                                    null),
                                            (t.flags |= 4));
                                    (o3(t), (e = !1));
                                } else
                                    ((n = r$()),
                                        null !== e &&
                                            null !==
                                                e.memoizedState &&
                                            (e.memoizedState.hydrationErrors =
                                                n),
                                        (e = !0));
                                if (!e) {
                                    if (256 & t.flags)
                                        return (lK(t), t);
                                    return (lK(t), null);
                                }
                                if (0 != (128 & t.flags))
                                    throw Error(s(558));
                            }
                            return (o3(t), null);
                        case 13:
                            if (
                                ((r = t.memoizedState),
                                null === e ||
                                    (null !== e.memoizedState &&
                                        null !==
                                            e.memoizedState
                                                .dehydrated))
                            ) {
                                if (
                                    ((l = rB(t)),
                                    null !== r &&
                                        null !== r.dehydrated)
                                ) {
                                    if (null === e) {
                                        if (!l) throw Error(s(318));
                                        if (
                                            !(l =
                                                null !==
                                                (l =
                                                    t.memoizedState)
                                                    ? l.dehydrated
                                                    : null)
                                        )
                                            throw Error(s(317));
                                        l[eM] = t;
                                    } else
                                        (rI(),
                                            0 == (128 & t.flags) &&
                                                (t.memoizedState =
                                                    null),
                                            (t.flags |= 4));
                                    (o3(t), (l = !1));
                                } else
                                    ((l = r$()),
                                        null !== e &&
                                            null !==
                                                e.memoizedState &&
                                            (e.memoizedState.hydrationErrors =
                                                l),
                                        (l = !0));
                                if (!l) {
                                    if (256 & t.flags)
                                        return (lK(t), t);
                                    return (lK(t), null);
                                }
                            }
                            if ((lK(t), 0 != (128 & t.flags)))
                                return ((t.lanes = n), t);
                            return (
                                (n = null !== r),
                                (e =
                                    null !== e &&
                                    null !== e.memoizedState),
                                n &&
                                    ((r = t.child),
                                    (l = null),
                                    null !== r.alternate &&
                                        null !==
                                            r.alternate
                                                .memoizedState &&
                                        null !==
                                            r.alternate
                                                .memoizedState
                                                .cachePool &&
                                        (l =
                                            r.alternate
                                                .memoizedState
                                                .cachePool.pool),
                                    (a = null),
                                    null !== r.memoizedState &&
                                        null !==
                                            r.memoizedState
                                                .cachePool &&
                                        (a =
                                            r.memoizedState
                                                .cachePool.pool),
                                    a !== l && (r.flags |= 2048)),
                                n !== e &&
                                    n &&
                                    (t.child.flags |= 8192),
                                o1(t, t.updateQueue),
                                o3(t),
                                null
                            );
                        case 4:
                            return (
                                q(),
                                null === e &&
                                    ul(t.stateNode.containerInfo),
                                o3(t),
                                null
                            );
                        case 10:
                            return (rq(t.type), o3(t), null);
                        case 19:
                            if (
                                (I(lY),
                                null === (r = t.memoizedState))
                            )
                                return (o3(t), null);
                            if (
                                ((l = 0 != (128 & t.flags)),
                                null === (a = r.rendering))
                            )
                                if (l) o2(r, !1);
                                else {
                                    if (
                                        0 !== iX ||
                                        (null !== e &&
                                            0 != (128 & e.flags))
                                    )
                                        for (
                                            e = t.child;
                                            null !== e;
                                        ) {
                                            if (
                                                null !== (a = lX(e))
                                            ) {
                                                for (
                                                    t.flags |= 128,
                                                        o2(r, !1),
                                                        t.updateQueue =
                                                            e =
                                                                a.updateQueue,
                                                        o1(t, e),
                                                        t.subtreeFlags = 0,
                                                        e = n,
                                                        n = t.child;
                                                    null !== n;
                                                )
                                                    (rs(n, e),
                                                        (n =
                                                            n.sibling));
                                                return (
                                                    $(
                                                        lY,
                                                        (1 &
                                                            lY.current) |
                                                            2,
                                                    ),
                                                    rA &&
                                                        rC(
                                                            t,
                                                            r.treeForkCount,
                                                        ),
                                                    t.child
                                                );
                                            }
                                            e = e.sibling;
                                        }
                                    null !== r.tail &&
                                        ea() > i9 &&
                                        ((t.flags |= 128),
                                        (l = !0),
                                        o2(r, !1),
                                        (t.lanes = 4194304));
                                }
                            else {
                                if (!l)
                                    if (null !== (e = lX(a))) {
                                        if (
                                            ((t.flags |= 128),
                                            (l = !0),
                                            (t.updateQueue = e =
                                                e.updateQueue),
                                            o1(t, e),
                                            o2(r, !0),
                                            null === r.tail &&
                                                "hidden" ===
                                                    r.tailMode &&
                                                !a.alternate &&
                                                !rA)
                                        )
                                            return (o3(t), null);
                                    } else
                                        2 * ea() -
                                            r.renderingStartTime >
                                            i9 &&
                                            0x20000000 !== n &&
                                            ((t.flags |= 128),
                                            (l = !0),
                                            o2(r, !1),
                                            (t.lanes = 4194304));
                                r.isBackwards
                                    ? ((a.sibling = t.child),
                                      (t.child = a))
                                    : (null !== (e = r.last)
                                          ? (e.sibling = a)
                                          : (t.child = a),
                                      (r.last = a));
                            }
                            if (null !== r.tail)
                                return (
                                    (e = r.tail),
                                    (r.rendering = e),
                                    (r.tail = e.sibling),
                                    (r.renderingStartTime = ea()),
                                    (e.sibling = null),
                                    (n = lY.current),
                                    $(lY, l ? (1 & n) | 2 : 1 & n),
                                    rA && rC(t, r.treeForkCount),
                                    e
                                );
                            return (o3(t), null);
                        case 22:
                        case 23:
                            return (
                                lK(t),
                                lU(),
                                (r = null !== t.memoizedState),
                                null !== e
                                    ? (null !== e.memoizedState) !==
                                          r && (t.flags |= 8192)
                                    : r && (t.flags |= 8192),
                                r
                                    ? 0 != (0x20000000 & n) &&
                                      0 == (128 & t.flags) &&
                                      (o3(t),
                                      6 & t.subtreeFlags &&
                                          (t.flags |= 8192))
                                    : o3(t),
                                null !== (n = t.updateQueue) &&
                                    o1(t, n.retryQueue),
                                (n = null),
                                null !== e &&
                                    null !== e.memoizedState &&
                                    null !==
                                        e.memoizedState.cachePool &&
                                    (n =
                                        e.memoizedState.cachePool
                                            .pool),
                                (r = null),
                                null !== t.memoizedState &&
                                    null !==
                                        t.memoizedState.cachePool &&
                                    (r =
                                        t.memoizedState.cachePool
                                            .pool),
                                r !== n && (t.flags |= 2048),
                                null !== e && I(ll),
                                null
                            );
                        case 24:
                            return (
                                (n = null),
                                null !== e &&
                                    (n = e.memoizedState.cache),
                                t.memoizedState.cache !== n &&
                                    (t.flags |= 2048),
                                rq(r5),
                                o3(t),
                                null
                            );
                        case 25:
                        case 30:
                            return null;
                    }
                    throw Error(s(156, t.tag));
                })(t.alternate, t, iY);
                if (null !== n) {
                    iH = n;
                    return;
                }
                if (null !== (t = t.sibling)) {
                    iH = t;
                    return;
                }
                iH = t = e;
            } while (null !== t);
            0 === iX && (iX = 5);
        }
        function sP(e, t) {
            do {
                var n = (function (e, t) {
                    switch ((rF(t), t.tag)) {
                        case 1:
                            return 65536 & (e = t.flags)
                                ? ((t.flags = (-65537 & e) | 128),
                                  t)
                                : null;
                        case 3:
                            return (
                                rq(r5),
                                q(),
                                0 != (65536 & (e = t.flags)) &&
                                0 == (128 & e)
                                    ? ((t.flags =
                                          (-65537 & e) | 128),
                                      t)
                                    : null
                            );
                        case 26:
                        case 27:
                        case 5:
                            return (K(t), null);
                        case 31:
                            if (null !== t.memoizedState) {
                                if ((lK(t), null === t.alternate))
                                    throw Error(s(340));
                                rI();
                            }
                            return 65536 & (e = t.flags)
                                ? ((t.flags = (-65537 & e) | 128),
                                  t)
                                : null;
                        case 13:
                            if (
                                (lK(t),
                                null !== (e = t.memoizedState) &&
                                    null !== e.dehydrated)
                            ) {
                                if (null === t.alternate)
                                    throw Error(s(340));
                                rI();
                            }
                            return 65536 & (e = t.flags)
                                ? ((t.flags = (-65537 & e) | 128),
                                  t)
                                : null;
                        case 19:
                            return (I(lY), null);
                        case 4:
                            return (q(), null);
                        case 10:
                            return (rq(t.type), null);
                        case 22:
                        case 23:
                            return (
                                lK(t),
                                lU(),
                                null !== e && I(ll),
                                65536 & (e = t.flags)
                                    ? ((t.flags =
                                          (-65537 & e) | 128),
                                      t)
                                    : null
                            );
                        case 24:
                            return (rq(r5), null);
                        default:
                            return null;
                    }
                })(e.alternate, e);
                if (null !== n) {
                    ((n.flags &= 32767), (iH = n));
                    return;
                }
                if (
                    (null !== (n = e.return) &&
                        ((n.flags |= 32768),
                        (n.subtreeFlags = 0),
                        (n.deletions = null)),
                    !t && null !== (e = e.sibling))
                ) {
                    iH = e;
                    return;
                }
                iH = e = n;
            } while (null !== e);
            ((iX = 6), (iH = null));
        }
        function s_(e, t, n, r, l, a, o, i, u) {
            e.cancelPendingCommit = null;
            do sO();
            while (0 !== st);
            if (0 != (6 & i$)) throw Error(s(327));
            if (null !== t) {
                if (t === e.current) throw Error(s(177));
                if (
                    (!(function (e, t, n, r, l, a) {
                        var o = e.pendingLanes;
                        ((e.pendingLanes = n),
                            (e.suspendedLanes = 0),
                            (e.pingedLanes = 0),
                            (e.warmLanes = 0),
                            (e.expiredLanes &= n),
                            (e.entangledLanes &= n),
                            (e.errorRecoveryDisabledLanes &= n),
                            (e.shellSuspendCounter = 0));
                        var i = e.entanglements,
                            s = e.expirationTimes,
                            u = e.hiddenUpdates;
                        for (n = o & ~n; 0 < n; ) {
                            var c = 31 - ey(n),
                                d = 1 << c;
                            ((i[c] = 0), (s[c] = -1));
                            var f = u[c];
                            if (null !== f)
                                for (
                                    u[c] = null, c = 0;
                                    c < f.length;
                                    c++
                                ) {
                                    var p = f[c];
                                    null !== p &&
                                        (p.lane &= -0x20000001);
                                }
                            n &= ~d;
                        }
                        (0 !== r && eP(e, r, 0),
                            0 !== a &&
                                0 === l &&
                                0 !== e.tag &&
                                (e.suspendedLanes |=
                                    a & ~(o & ~t)));
                    })(
                        e,
                        n,
                        (a = t.lanes | t.childLanes | n8),
                        o,
                        i,
                        u,
                    ),
                    e === iU && ((iH = iU = null), (iV = 0)),
                    (sr = t),
                    (sn = e),
                    (sl = n),
                    (sa = a),
                    (so = l),
                    (si = r),
                    0 != (10256 & t.subtreeFlags) ||
                    0 != (10256 & t.flags)
                        ? ((e.callbackNode = null),
                          (e.callbackPriority = 0),
                          et(eu, function () {
                              return (sD(), null);
                          }))
                        : ((e.callbackNode = null),
                          (e.callbackPriority = 0)),
                    (r = 0 != (13878 & t.flags)),
                    0 != (13878 & t.subtreeFlags) || r)
                ) {
                    ((r = L.T),
                        (L.T = null),
                        (l = O.p),
                        (O.p = 2),
                        (o = i$),
                        (i$ |= 4));
                    try {
                        !(function (e, t) {
                            if (
                                ((e = e.containerInfo),
                                (uv = cp),
                                nO((e = nL(e))))
                            ) {
                                if ("selectionStart" in e)
                                    var n = {
                                        start: e.selectionStart,
                                        end: e.selectionEnd,
                                    };
                                else
                                    e: {
                                        var r =
                                            (n =
                                                ((n =
                                                    e.ownerDocument) &&
                                                    n.defaultView) ||
                                                window)
                                                .getSelection &&
                                            n.getSelection();
                                        if (
                                            r &&
                                            0 !== r.rangeCount
                                        ) {
                                            n = r.anchorNode;
                                            var l,
                                                a = r.anchorOffset,
                                                o = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                (n.nodeType,
                                                    o.nodeType);
                                            } catch (e) {
                                                n = null;
                                                break e;
                                            }
                                            var i = 0,
                                                u = -1,
                                                c = -1,
                                                d = 0,
                                                f = 0,
                                                p = e,
                                                m = null;
                                            t: for (;;) {
                                                for (
                                                    ;
                                                    p !== n ||
                                                        (0 !== a &&
                                                            3 !==
                                                                p.nodeType) ||
                                                        (u = i + a),
                                                        p !== o ||
                                                            (0 !==
                                                                r &&
                                                                3 !==
                                                                    p.nodeType) ||
                                                            (c =
                                                                i +
                                                                r),
                                                        3 ===
                                                            p.nodeType &&
                                                            (i +=
                                                                p
                                                                    .nodeValue
                                                                    .length),
                                                        null !==
                                                            (l =
                                                                p.firstChild);
                                                )
                                                    ((m = p),
                                                        (p = l));
                                                for (;;) {
                                                    if (p === e)
                                                        break t;
                                                    if (
                                                        (m === n &&
                                                            ++d ===
                                                                a &&
                                                            (u = i),
                                                        m === o &&
                                                            ++f ===
                                                                r &&
                                                            (c = i),
                                                        null !==
                                                            (l =
                                                                p.nextSibling))
                                                    )
                                                        break;
                                                    m = (p = m)
                                                        .parentNode;
                                                }
                                                p = l;
                                            }
                                            n =
                                                -1 === u || -1 === c
                                                    ? null
                                                    : {
                                                          start: u,
                                                          end: c,
                                                      };
                                        } else n = null;
                                    }
                                n = n || { start: 0, end: 0 };
                            } else n = null;
                            for (
                                ux = {
                                    focusedElem: e,
                                    selectionRange: n,
                                },
                                    cp = !1,
                                    ip = t;
                                null !== ip;
                            )
                                if (
                                    ((e = (t = ip).child),
                                    0 != (1028 & t.subtreeFlags) &&
                                        null !== e)
                                )
                                    ((e.return = t), (ip = e));
                                else
                                    for (; null !== ip; ) {
                                        switch (
                                            ((o = (t = ip)
                                                .alternate),
                                            (e = t.flags),
                                            t.tag)
                                        ) {
                                            case 0:
                                                if (
                                                    0 != (4 & e) &&
                                                    null !==
                                                        (e =
                                                            null !==
                                                            (e =
                                                                t.updateQueue)
                                                                ? e.events
                                                                : null)
                                                )
                                                    for (
                                                        n = 0;
                                                        n <
                                                        e.length;
                                                        n++
                                                    )
                                                        (a =
                                                            e[
                                                                n
                                                            ]).ref.impl =
                                                            a.nextImpl;
                                                break;
                                            case 11:
                                            case 15:
                                            case 5:
                                            case 26:
                                            case 27:
                                            case 6:
                                            case 4:
                                            case 17:
                                                break;
                                            case 1:
                                                if (
                                                    0 !=
                                                        (1024 &
                                                            e) &&
                                                    null !== o
                                                ) {
                                                    ((e = void 0),
                                                        (n = t),
                                                        (a =
                                                            o.memoizedProps),
                                                        (o =
                                                            o.memoizedState),
                                                        (r =
                                                            n.stateNode));
                                                    try {
                                                        var h = om(
                                                            n.type,
                                                            a,
                                                        );
                                                        ((e =
                                                            r.getSnapshotBeforeUpdate(
                                                                h,
                                                                o,
                                                            )),
                                                            (r.__reactInternalSnapshotBeforeUpdate =
                                                                e));
                                                    } catch (e) {
                                                        sR(
                                                            n,
                                                            n.return,
                                                            e,
                                                        );
                                                    }
                                                }
                                                break;
                                            case 3:
                                                if (
                                                    0 !=
                                                    (1024 & e)
                                                ) {
                                                    if (
                                                        9 ===
                                                        (n = (e =
                                                            t
                                                                .stateNode
                                                                .containerInfo)
                                                            .nodeType)
                                                    )
                                                        uL(e);
                                                    else if (
                                                        1 === n
                                                    )
                                                        switch (
                                                            e.nodeName
                                                        ) {
                                                            case "HEAD":
                                                            case "HTML":
                                                            case "BODY":
                                                                uL(
                                                                    e,
                                                                );
                                                                break;
                                                            default:
                                                                e.textContent =
                                                                    "";
                                                        }
                                                }
                                                break;
                                            default:
                                                if (0 != (1024 & e))
                                                    throw Error(
                                                        s(163),
                                                    );
                                        }
                                        if (
                                            null !== (e = t.sibling)
                                        ) {
                                            ((e.return = t.return),
                                                (ip = e));
                                            break;
                                        }
                                        ip = t.return;
                                    }
                        })(e, t);
                    } finally {
                        ((i$ = o), (O.p = l), (L.T = r));
                    }
                }
                ((st = 1), sT(), sA(), sj());
            }
        }
        function sT() {
            if (1 === st) {
                st = 0;
                var e = sn,
                    t = sr,
                    n = 0 != (13878 & t.flags);
                if (0 != (13878 & t.subtreeFlags) || n) {
                    ((n = L.T), (L.T = null));
                    var r = O.p;
                    O.p = 2;
                    var l = i$;
                    i$ |= 4;
                    try {
                        iE(t, e);
                        var a = ux,
                            o = nL(e.containerInfo),
                            i = a.focusedElem,
                            s = a.selectionRange;
                        if (
                            o !== i &&
                            i &&
                            i.ownerDocument &&
                            (function e(t, n) {
                                return (
                                    !!t &&
                                    !!n &&
                                    (t === n ||
                                        ((!t || 3 !== t.nodeType) &&
                                            (n && 3 === n.nodeType
                                                ? e(t, n.parentNode)
                                                : "contains" in t
                                                  ? t.contains(n)
                                                  : !!t.compareDocumentPosition &&
                                                    !!(
                                                        16 &
                                                        t.compareDocumentPosition(
                                                            n,
                                                        )
                                                    ))))
                                );
                            })(i.ownerDocument.documentElement, i)
                        ) {
                            if (null !== s && nO(i)) {
                                var u = s.start,
                                    c = s.end;
                                if (
                                    (void 0 === c && (c = u),
                                    "selectionStart" in i)
                                )
                                    ((i.selectionStart = u),
                                        (i.selectionEnd = Math.min(
                                            c,
                                            i.value.length,
                                        )));
                                else {
                                    var d =
                                            i.ownerDocument ||
                                            document,
                                        f =
                                            (d && d.defaultView) ||
                                            window;
                                    if (f.getSelection) {
                                        var p = f.getSelection(),
                                            m =
                                                i.textContent
                                                    .length,
                                            h = Math.min(
                                                s.start,
                                                m,
                                            ),
                                            g =
                                                void 0 === s.end
                                                    ? h
                                                    : Math.min(
                                                          s.end,
                                                          m,
                                                      );
                                        !p.extend &&
                                            h > g &&
                                            ((o = g),
                                            (g = h),
                                            (h = o));
                                        var y = nj(i, h),
                                            b = nj(i, g);
                                        if (
                                            y &&
                                            b &&
                                            (1 !== p.rangeCount ||
                                                p.anchorNode !==
                                                    y.node ||
                                                p.anchorOffset !==
                                                    y.offset ||
                                                p.focusNode !==
                                                    b.node ||
                                                p.focusOffset !==
                                                    b.offset)
                                        ) {
                                            var v = d.createRange();
                                            (v.setStart(
                                                y.node,
                                                y.offset,
                                            ),
                                                p.removeAllRanges(),
                                                h > g
                                                    ? (p.addRange(
                                                          v,
                                                      ),
                                                      p.extend(
                                                          b.node,
                                                          b.offset,
                                                      ))
                                                    : (v.setEnd(
                                                          b.node,
                                                          b.offset,
                                                      ),
                                                      p.addRange(
                                                          v,
                                                      )));
                                        }
                                    }
                                }
                            }
                            for (
                                d = [], p = i;
                                (p = p.parentNode);
                            )
                                1 === p.nodeType &&
                                    d.push({
                                        element: p,
                                        left: p.scrollLeft,
                                        top: p.scrollTop,
                                    });
                            for (
                                "function" == typeof i.focus &&
                                    i.focus(),
                                    i = 0;
                                i < d.length;
                                i++
                            ) {
                                var x = d[i];
                                ((x.element.scrollLeft = x.left),
                                    (x.element.scrollTop = x.top));
                            }
                        }
                        ((cp = !!uv), (ux = uv = null));
                    } finally {
                        ((i$ = l), (O.p = r), (L.T = n));
                    }
                }
                ((e.current = t), (st = 2));
            }
        }
        function sA() {
            if (2 === st) {
                st = 0;
                var e = sn,
                    t = sr,
                    n = 0 != (8772 & t.flags);
                if (0 != (8772 & t.subtreeFlags) || n) {
                    ((n = L.T), (L.T = null));
                    var r = O.p;
                    O.p = 2;
                    var l = i$;
                    i$ |= 4;
                    try {
                        im(e, t.alternate, t);
                    } finally {
                        ((i$ = l), (O.p = r), (L.T = n));
                    }
                }
                st = 3;
            }
        }
        function sj() {
            if (4 === st || 3 === st) {
                ((st = 0), el());
                var e = sn,
                    t = sr,
                    n = sl,
                    r = si;
                0 != (10256 & t.subtreeFlags) ||
                0 != (10256 & t.flags)
                    ? (st = 5)
                    : ((st = 0),
                      (sr = sn = null),
                      sL(e, e.pendingLanes));
                var l = e.pendingLanes;
                if (
                    (0 === l && (se = null),
                    ej(n),
                    (t = t.stateNode),
                    eh && "function" == typeof eh.onCommitFiberRoot)
                )
                    try {
                        eh.onCommitFiberRoot(
                            em,
                            t,
                            void 0,
                            128 == (128 & t.current.flags),
                        );
                    } catch (e) {}
                if (null !== r) {
                    ((t = L.T), (l = O.p), (O.p = 2), (L.T = null));
                    try {
                        for (
                            var a = e.onRecoverableError, o = 0;
                            o < r.length;
                            o++
                        ) {
                            var i = r[o];
                            a(i.value, { componentStack: i.stack });
                        }
                    } finally {
                        ((L.T = t), (O.p = l));
                    }
                }
                (0 != (3 & sl) && sO(),
                    sY(e),
                    (l = e.pendingLanes),
                    0 != (261930 & n) && 0 != (42 & l)
                        ? e === su
                            ? ss++
                            : ((ss = 0), (su = e))
                        : (ss = 0),
                    sX(0, !1));
            }
        }
        function sL(e, t) {
            0 == (e.pooledCacheLanes &= t) &&
                null != (t = e.pooledCache) &&
                ((e.pooledCache = null), r6(t));
        }
        function sO() {
            return (sT(), sA(), sj(), sD());
        }
        function sD() {
            if (5 !== st) return !1;
            var e = sn,
                t = sa;
            sa = 0;
            var n = ej(sl),
                r = L.T,
                l = O.p;
            try {
                ((O.p = 32 > n ? 32 : n),
                    (L.T = null),
                    (n = so),
                    (so = null));
                var a = sn,
                    o = sl;
                if (
                    ((st = 0),
                    (sr = sn = null),
                    (sl = 0),
                    0 != (6 & i$))
                )
                    throw Error(s(331));
                var i = i$;
                if (
                    ((i$ |= 4),
                    iM(a.current),
                    i_(a, a.current, o, n),
                    (i$ = i),
                    sX(0, !1),
                    eh &&
                        "function" ==
                            typeof eh.onPostCommitFiberRoot)
                )
                    try {
                        eh.onPostCommitFiberRoot(em, a);
                    } catch (e) {}
                return !0;
            } finally {
                ((O.p = l), (L.T = r), sL(e, t));
            }
        }
        function sM(e, t, n) {
            ((t = rh(n, t)),
                (t = ox(e.stateNode, t, 2)),
                null !== (e = l_(e, t, 2)) && (eF(e, 2), sY(e)));
        }
        function sR(e, t, n) {
            if (3 === e.tag) sM(e, e, n);
            else
                for (; null !== t; ) {
                    if (3 === t.tag) {
                        sM(t, e, n);
                        break;
                    }
                    if (1 === t.tag) {
                        var r = t.stateNode;
                        if (
                            "function" ==
                                typeof t.type
                                    .getDerivedStateFromError ||
                            ("function" ==
                                typeof r.componentDidCatch &&
                                (null === se || !se.has(r)))
                        ) {
                            ((e = rh(n, e)),
                                null !==
                                    (r = l_(t, (n = ok(2)), 2)) &&
                                    (ow(n, r, t, e),
                                    eF(r, 2),
                                    sY(r)));
                            break;
                        }
                    }
                    t = t.return;
                }
        }
        function sB(e, t, n) {
            var r = e.pingCache;
            if (null === r) {
                r = e.pingCache = new iI();
                var l = new Set();
                r.set(t, l);
            } else
                void 0 === (l = r.get(t)) &&
                    ((l = new Set()), r.set(t, l));
            l.has(n) ||
                ((iK = !0),
                l.add(n),
                (e = sI.bind(null, e, t, n)),
                t.then(e, e));
        }
        function sI(e, t, n) {
            var r = e.pingCache;
            (null !== r && r.delete(t),
                (e.pingedLanes |= e.suspendedLanes & n),
                (e.warmLanes &= ~n),
                iU === e &&
                    (iV & n) === n &&
                    (4 === iX ||
                    (3 === iX &&
                        (0x3c00000 & iV) === iV &&
                        300 > ea() - i8)
                        ? 0 == (2 & i$) && sb(e, 0)
                        : (i0 |= n),
                    i2 === iV && (i2 = 0)),
                sY(e));
        }
        function s$(e, t) {
            (0 === t && (t = eN()),
                null !== (e = re(e, t)) && (eF(e, t), sY(e)));
        }
        function sU(e) {
            var t = e.memoizedState,
                n = 0;
            (null !== t && (n = t.retryLane), s$(e, n));
        }
        function sH(e, t) {
            var n = 0;
            switch (e.tag) {
                case 31:
                case 13:
                    var r = e.stateNode,
                        l = e.memoizedState;
                    null !== l && (n = l.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                case 22:
                    r = e.stateNode._retryCache;
                    break;
                default:
                    throw Error(s(314));
            }
            (null !== r && r.delete(t), s$(e, n));
        }
        var sV = null,
            sW = null,
            sQ = !1,
            sq = !1,
            sG = !1,
            sK = 0;
        function sY(e) {
            (e !== sW &&
                null === e.next &&
                (null === sW ? (sV = sW = e) : (sW = sW.next = e)),
                (sq = !0),
                sQ ||
                    ((sQ = !0),
                    uP(function () {
                        0 != (6 & i$) ? et(ei, sZ) : sJ();
                    })));
        }
        function sX(e, t) {
            if (!sG && sq) {
                sG = !0;
                do
                    for (var n = !1, r = sV; null !== r; ) {
                        if (!t)
                            if (0 !== e) {
                                var l = r.pendingLanes;
                                if (0 === l) var a = 0;
                                else {
                                    var o = r.suspendedLanes,
                                        i = r.pingedLanes;
                                    a =
                                        0xc000095 &
                                        (a =
                                            ((1 <<
                                                (31 -
                                                    ey(42 | e) +
                                                    1)) -
                                                1) &
                                            (l & ~(o & ~i)))
                                            ? (0xc000095 & a) | 1
                                            : a
                                              ? 2 | a
                                              : 0;
                                }
                                0 !== a && ((n = !0), s2(r, a));
                            } else
                                ((a = iV),
                                    0 ==
                                        (3 &
                                            (a = eE(
                                                r,
                                                r === iU ? a : 0,
                                                null !==
                                                    r.cancelPendingCommit ||
                                                    -1 !==
                                                        r.timeoutHandle,
                                            ))) ||
                                        eC(r, a) ||
                                        ((n = !0), s2(r, a)));
                        r = r.next;
                    }
                while (n);
                sG = !1;
            }
        }
        function sZ() {
            sJ();
        }
        function sJ() {
            sq = sQ = !1;
            var e,
                t = 0;
            0 === sK ||
                ((e = window.event) && "popstate" === e.type
                    ? e === uC || ((uC = e), 0)
                    : ((uC = null), 1)) ||
                (t = sK);
            for (var n = ea(), r = null, l = sV; null !== l; ) {
                var a = l.next,
                    o = s0(l, n);
                (0 === o
                    ? ((l.next = null),
                      null === r ? (sV = a) : (r.next = a),
                      null === a && (sW = r))
                    : ((r = l),
                      (0 !== t || 0 != (3 & o)) && (sq = !0)),
                    (l = a));
            }
            ((0 !== st && 5 !== st) || sX(t, !1),
                0 !== sK && (sK = 0));
        }
        function s0(e, t) {
            for (
                var n = e.suspendedLanes,
                    r = e.pingedLanes,
                    l = e.expirationTimes,
                    a = -0x3c00001 & e.pendingLanes;
                0 < a;
            ) {
                var o = 31 - ey(a),
                    i = 1 << o,
                    s = l[o];
                (-1 === s
                    ? (0 == (i & n) || 0 != (i & r)) &&
                      (l[o] = (function (e, t) {
                          switch (e) {
                              case 1:
                              case 2:
                              case 4:
                              case 8:
                              case 64:
                                  return t + 250;
                              case 16:
                              case 32:
                              case 128:
                              case 256:
                              case 512:
                              case 1024:
                              case 2048:
                              case 4096:
                              case 8192:
                              case 16384:
                              case 32768:
                              case 65536:
                              case 131072:
                              case 262144:
                              case 524288:
                              case 1048576:
                              case 2097152:
                                  return t + 5e3;
                              default:
                                  return -1;
                          }
                      })(i, t))
                    : s <= t && (e.expiredLanes |= i),
                    (a &= ~i));
            }
            if (
                ((t = iU),
                (n = iV),
                (n = eE(
                    e,
                    e === t ? n : 0,
                    null !== e.cancelPendingCommit ||
                        -1 !== e.timeoutHandle,
                )),
                (r = e.callbackNode),
                0 === n ||
                    (e === t && (2 === iW || 9 === iW)) ||
                    null !== e.cancelPendingCommit)
            )
                return (
                    null !== r && null !== r && en(r),
                    (e.callbackNode = null),
                    (e.callbackPriority = 0)
                );
            if (0 == (3 & n) || eC(e, n)) {
                if ((t = n & -n) === e.callbackPriority) return t;
                switch ((null !== r && en(r), ej(n))) {
                    case 2:
                    case 8:
                        n = es;
                        break;
                    case 32:
                    default:
                        n = eu;
                        break;
                    case 0x10000000:
                        n = ed;
                }
                return (
                    (n = et(n, (r = s1.bind(null, e)))),
                    (e.callbackPriority = t),
                    (e.callbackNode = n),
                    t
                );
            }
            return (
                null !== r && null !== r && en(r),
                (e.callbackPriority = 2),
                (e.callbackNode = null),
                2
            );
        }
        function s1(e, t) {
            if (0 !== st && 5 !== st)
                return (
                    (e.callbackNode = null),
                    (e.callbackPriority = 0),
                    null
                );
            var n = e.callbackNode;
            if (sO() && e.callbackNode !== n) return null;
            var r = iV;
            return 0 ===
                (r = eE(
                    e,
                    e === iU ? r : 0,
                    null !== e.cancelPendingCommit ||
                        -1 !== e.timeoutHandle,
                ))
                ? null
                : (sp(e, r, t),
                  s0(e, ea()),
                  null != e.callbackNode && e.callbackNode === n
                      ? s1.bind(null, e)
                      : null);
        }
        function s2(e, t) {
            if (sO()) return null;
            sp(e, t, !0);
        }
        function s3() {
            if (0 === sK) {
                var e = le;
                (0 === e &&
                    ((e = ex),
                    0 == (261888 & (ex <<= 1)) && (ex = 256)),
                    (sK = e));
            }
            return sK;
        }
        function s4(e) {
            return null == e ||
                "symbol" == typeof e ||
                "boolean" == typeof e
                ? null
                : "function" == typeof e
                  ? e
                  : ty("" + e);
        }
        function s5(e, t) {
            var n = t.ownerDocument.createElement("input");
            return (
                (n.name = t.name),
                (n.value = t.value),
                e.id && n.setAttribute("form", e.id),
                t.parentNode.insertBefore(n, t),
                (e = new FormData(e)),
                n.parentNode.removeChild(n),
                e
            );
        }
        for (var s8 = 0; s8 < n1.length; s8++) {
            var s6 = n1[s8];
            n2(
                s6.toLowerCase(),
                "on" + (s6[0].toUpperCase() + s6.slice(1)),
            );
        }
        (n2(nq, "onAnimationEnd"),
            n2(nG, "onAnimationIteration"),
            n2(nK, "onAnimationStart"),
            n2("dblclick", "onDoubleClick"),
            n2("focusin", "onFocus"),
            n2("focusout", "onBlur"),
            n2(nY, "onTransitionRun"),
            n2(nX, "onTransitionStart"),
            n2(nZ, "onTransitionCancel"),
            n2(nJ, "onTransitionEnd"),
            e0("onMouseEnter", ["mouseout", "mouseover"]),
            e0("onMouseLeave", ["mouseout", "mouseover"]),
            e0("onPointerEnter", ["pointerout", "pointerover"]),
            e0("onPointerLeave", ["pointerout", "pointerover"]),
            eJ(
                "onChange",
                "change click focusin focusout input keydown keyup selectionchange".split(
                    " ",
                ),
            ),
            eJ(
                "onSelect",
                "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                    " ",
                ),
            ),
            eJ("onBeforeInput", [
                "compositionend",
                "keypress",
                "textInput",
                "paste",
            ]),
            eJ(
                "onCompositionEnd",
                "compositionend focusout keydown keypress keyup mousedown".split(
                    " ",
                ),
            ),
            eJ(
                "onCompositionStart",
                "compositionstart focusout keydown keypress keyup mousedown".split(
                    " ",
                ),
            ),
            eJ(
                "onCompositionUpdate",
                "compositionupdate focusout keydown keypress keyup mousedown".split(
                    " ",
                ),
            ));
        var s9 =
                "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                    " ",
                ),
            s7 = new Set(
                "beforetoggle cancel close invalid load scroll scrollend toggle"
                    .split(" ")
                    .concat(s9),
            );
        function ue(e, t) {
            t = 0 != (4 & t);
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    l = r.event;
                r = r.listeners;
                e: {
                    var a = void 0;
                    if (t)
                        for (var o = r.length - 1; 0 <= o; o--) {
                            var i = r[o],
                                s = i.instance,
                                u = i.currentTarget;
                            if (
                                ((i = i.listener),
                                s !== a && l.isPropagationStopped())
                            )
                                break e;
                            ((a = i), (l.currentTarget = u));
                            try {
                                a(l);
                            } catch (e) {
                                n3(e);
                            }
                            ((l.currentTarget = null), (a = s));
                        }
                    else
                        for (o = 0; o < r.length; o++) {
                            if (
                                ((s = (i = r[o]).instance),
                                (u = i.currentTarget),
                                (i = i.listener),
                                s !== a && l.isPropagationStopped())
                            )
                                break e;
                            ((a = i), (l.currentTarget = u));
                            try {
                                a(l);
                            } catch (e) {
                                n3(e);
                            }
                            ((l.currentTarget = null), (a = s));
                        }
                }
            }
        }
        function ut(e, t) {
            var n = t[eI];
            void 0 === n && (n = t[eI] = new Set());
            var r = e + "__bubble";
            n.has(r) || (ua(t, e, 2, !1), n.add(r));
        }
        function un(e, t, n) {
            var r = 0;
            (t && (r |= 4), ua(n, e, r, t));
        }
        var ur =
            "_reactListening" + Math.random().toString(36).slice(2);
        function ul(e) {
            if (!e[ur]) {
                ((e[ur] = !0),
                    eX.forEach(function (t) {
                        "selectionchange" !== t &&
                            (s7.has(t) || un(t, !1, e),
                            un(t, !0, e));
                    }));
                var t = 9 === e.nodeType ? e : e.ownerDocument;
                null === t ||
                    t[ur] ||
                    ((t[ur] = !0), un("selectionchange", !1, t));
            }
        }
        function ua(e, t, n, r) {
            switch (cx(t)) {
                case 2:
                    var l = cm;
                    break;
                case 8:
                    l = ch;
                    break;
                default:
                    l = cg;
            }
            ((n = l.bind(null, t, n, e)),
                (l = void 0),
                tF &&
                    ("touchstart" === t ||
                        "touchmove" === t ||
                        "wheel" === t) &&
                    (l = !0),
                r
                    ? void 0 !== l
                        ? e.addEventListener(t, n, {
                              capture: !0,
                              passive: l,
                          })
                        : e.addEventListener(t, n, !0)
                    : void 0 !== l
                      ? e.addEventListener(t, n, { passive: l })
                      : e.addEventListener(t, n, !1));
        }
        function uo(e, t, n, r, l) {
            var a = r;
            if (0 == (1 & t) && 0 == (2 & t) && null !== r)
                e: for (;;) {
                    if (null === r) return;
                    var o = r.tag;
                    if (3 === o || 4 === o) {
                        var i = r.stateNode.containerInfo;
                        if (i === l) break;
                        if (4 === o)
                            for (o = r.return; null !== o; ) {
                                var s = o.tag;
                                if (
                                    (3 === s || 4 === s) &&
                                    o.stateNode.containerInfo === l
                                )
                                    return;
                                o = o.return;
                            }
                        for (; null !== i; ) {
                            if (null === (o = eQ(i))) return;
                            if (
                                5 === (s = o.tag) ||
                                6 === s ||
                                26 === s ||
                                27 === s
                            ) {
                                r = a = o;
                                continue e;
                            }
                            i = i.parentNode;
                        }
                    }
                    r = r.return;
                }
            tC(function () {
                var r = a,
                    l = tx(n),
                    o = [];
                e: {
                    var i = n0.get(e);
                    if (void 0 !== i) {
                        var s = tq,
                            u = e;
                        switch (e) {
                            case "keypress":
                                if (0 === tL(n)) break e;
                            case "keydown":
                            case "keyup":
                                s = t9;
                                break;
                            case "focusin":
                                ((u = "focus"), (s = tJ));
                                break;
                            case "focusout":
                                ((u = "blur"), (s = tJ));
                                break;
                            case "beforeblur":
                            case "afterblur":
                                s = tJ;
                                break;
                            case "click":
                                if (2 === n.button) break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                s = tX;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                s = tZ;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                s = ne;
                                break;
                            case nq:
                            case nG:
                            case nK:
                                s = t0;
                                break;
                            case nJ:
                                s = nt;
                                break;
                            case "scroll":
                            case "scrollend":
                                s = tK;
                                break;
                            case "wheel":
                                s = nn;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                s = t1;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                s = t7;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                s = nr;
                        }
                        var d = 0 != (4 & t),
                            f =
                                !d &&
                                ("scroll" === e ||
                                    "scrollend" === e),
                            p = d
                                ? null !== i
                                    ? i + "Capture"
                                    : null
                                : i;
                        d = [];
                        for (var m, h = r; null !== h; ) {
                            var g = h;
                            if (
                                ((m = g.stateNode),
                                (5 !== (g = g.tag) &&
                                    26 !== g &&
                                    27 !== g) ||
                                    null === m ||
                                    null === p ||
                                    (null != (g = tN(h, p)) &&
                                        d.push(ui(h, g, m))),
                                f)
                            )
                                break;
                            h = h.return;
                        }
                        0 < d.length &&
                            ((i = new s(i, u, null, n, l)),
                            o.push({ event: i, listeners: d }));
                    }
                }
                if (0 == (7 & t)) {
                    if (
                        ((i =
                            "mouseover" === e ||
                            "pointerover" === e),
                        (s =
                            "mouseout" === e || "pointerout" === e),
                        !(
                            i &&
                            n !== tv &&
                            (u =
                                n.relatedTarget || n.fromElement) &&
                            (eQ(u) || u[eB])
                        )) &&
                        (s || i) &&
                        ((i =
                            l.window === l
                                ? l
                                : (i = l.ownerDocument)
                                  ? i.defaultView || i.parentWindow
                                  : window),
                        s
                            ? ((u = n.relatedTarget || n.toElement),
                              (s = r),
                              null !== (u = u ? eQ(u) : null) &&
                                  ((f = c(u)),
                                  (d = u.tag),
                                  u !== f ||
                                      (5 !== d &&
                                          27 !== d &&
                                          6 !== d)) &&
                                  (u = null))
                            : ((s = null), (u = r)),
                        s !== u)
                    ) {
                        if (
                            ((d = tX),
                            (g = "onMouseLeave"),
                            (p = "onMouseEnter"),
                            (h = "mouse"),
                            ("pointerout" === e ||
                                "pointerover" === e) &&
                                ((d = t7),
                                (g = "onPointerLeave"),
                                (p = "onPointerEnter"),
                                (h = "pointer")),
                            (f = null == s ? i : eG(s)),
                            (m = null == u ? i : eG(u)),
                            ((i = new d(
                                g,
                                h + "leave",
                                s,
                                n,
                                l,
                            )).target = f),
                            (i.relatedTarget = m),
                            (g = null),
                            eQ(l) === r &&
                                (((d = new d(
                                    p,
                                    h + "enter",
                                    u,
                                    n,
                                    l,
                                )).target = m),
                                (d.relatedTarget = f),
                                (g = d)),
                            (f = g),
                            s && u)
                        )
                            t: {
                                for (
                                    d = uu,
                                        p = s,
                                        h = u,
                                        m = 0,
                                        g = p;
                                    g;
                                    g = d(g)
                                )
                                    m++;
                                g = 0;
                                for (var y, b = h; b; b = d(b)) g++;
                                for (; 0 < m - g; )
                                    ((p = d(p)), m--);
                                for (; 0 < g - m; )
                                    ((h = d(h)), g--);
                                for (; m--; ) {
                                    if (
                                        p === h ||
                                        (null !== h &&
                                            p === h.alternate)
                                    ) {
                                        d = p;
                                        break t;
                                    }
                                    ((p = d(p)), (h = d(h)));
                                }
                                d = null;
                            }
                        else d = null;
                        (null !== s && uc(o, i, s, d, !1),
                            null !== u &&
                                null !== f &&
                                uc(o, f, u, d, !0));
                    }
                    e: {
                        if (
                            "select" ===
                                (s =
                                    (i = r ? eG(r) : window)
                                        .nodeName &&
                                    i.nodeName.toLowerCase()) ||
                            ("input" === s && "file" === i.type)
                        )
                            var v = nx;
                        else if (nm(i))
                            if (nk) v = nP;
                            else {
                                v = nz;
                                var x = nN;
                            }
                        else
                            (s = i.nodeName) &&
                            "input" === s.toLowerCase() &&
                            ("checkbox" === i.type ||
                                "radio" === i.type)
                                ? (v = nF)
                                : r &&
                                  tm(r.elementType) &&
                                  (v = nx);
                        if (v && (v = v(e, r))) {
                            nh(o, v, n, l);
                            break e;
                        }
                        (x && x(e, i, r),
                            "focusout" === e &&
                                r &&
                                "number" === i.type &&
                                null != r.memoizedProps.value &&
                                to(i, "number", i.value));
                    }
                    switch (((x = r ? eG(r) : window), e)) {
                        case "focusin":
                            (nm(x) ||
                                "true" === x.contentEditable) &&
                                ((nM = x), (nR = r), (nB = null));
                            break;
                        case "focusout":
                            nB = nR = nM = null;
                            break;
                        case "mousedown":
                            nI = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            ((nI = !1), n$(o, n, l));
                            break;
                        case "selectionchange":
                            if (nD) break;
                        case "keydown":
                        case "keyup":
                            n$(o, n, l);
                    }
                    if (na)
                        t: {
                            switch (e) {
                                case "compositionstart":
                                    var k = "onCompositionStart";
                                    break t;
                                case "compositionend":
                                    k = "onCompositionEnd";
                                    break t;
                                case "compositionupdate":
                                    k = "onCompositionUpdate";
                                    break t;
                            }
                            k = void 0;
                        }
                    else
                        nf
                            ? nc(e, n) && (k = "onCompositionEnd")
                            : "keydown" === e &&
                              229 === n.keyCode &&
                              (k = "onCompositionStart");
                    (k &&
                        (ns &&
                            "ko" !== n.locale &&
                            (nf || "onCompositionStart" !== k
                                ? "onCompositionEnd" === k &&
                                  nf &&
                                  (y = tj())
                                : ((tT =
                                      "value" in (t_ = l)
                                          ? t_.value
                                          : t_.textContent),
                                  (nf = !0))),
                        0 < (x = us(r, k)).length &&
                            ((k = new t2(k, e, null, n, l)),
                            o.push({ event: k, listeners: x }),
                            y
                                ? (k.data = y)
                                : null !== (y = nd(n)) &&
                                  (k.data = y))),
                        (y = ni
                            ? (function (e, t) {
                                  switch (e) {
                                      case "compositionend":
                                          return nd(t);
                                      case "keypress":
                                          if (32 !== t.which)
                                              return null;
                                          return ((nu = !0), " ");
                                      case "textInput":
                                          return " " ===
                                              (e = t.data) && nu
                                              ? null
                                              : e;
                                      default:
                                          return null;
                                  }
                              })(e, n)
                            : (function (e, t) {
                                  if (nf)
                                      return "compositionend" ===
                                          e ||
                                          (!na && nc(e, t))
                                          ? ((e = tj()),
                                            (tA = tT = t_ = null),
                                            (nf = !1),
                                            e)
                                          : null;
                                  switch (e) {
                                      case "paste":
                                      default:
                                          return null;
                                      case "keypress":
                                          if (
                                              !(
                                                  t.ctrlKey ||
                                                  t.altKey ||
                                                  t.metaKey
                                              ) ||
                                              (t.ctrlKey &&
                                                  t.altKey)
                                          ) {
                                              if (
                                                  t.char &&
                                                  1 < t.char.length
                                              )
                                                  return t.char;
                                              if (t.which)
                                                  return String.fromCharCode(
                                                      t.which,
                                                  );
                                          }
                                          return null;
                                      case "compositionend":
                                          return ns &&
                                              "ko" !== t.locale
                                              ? null
                                              : t.data;
                                  }
                              })(e, n)) &&
                            0 <
                                (k = us(r, "onBeforeInput"))
                                    .length &&
                            ((x = new t2(
                                "onBeforeInput",
                                "beforeinput",
                                null,
                                n,
                                l,
                            )),
                            o.push({ event: x, listeners: k }),
                            (x.data = y)));
                    var w = e;
                    if ("submit" === w && r && r.stateNode === l) {
                        var S = s4((l[eR] || null).action),
                            E = n.submitter;
                        E &&
                            null !==
                                (w = (w = E[eR] || null)
                                    ? s4(w.formAction)
                                    : E.getAttribute(
                                          "formAction",
                                      )) &&
                            ((S = w), (E = null));
                        var C = new tq(
                            "action",
                            "action",
                            null,
                            n,
                            l,
                        );
                        o.push({
                            event: C,
                            listeners: [
                                {
                                    instance: null,
                                    listener: function () {
                                        if (n.defaultPrevented) {
                                            if (0 !== sK) {
                                                var e = E
                                                    ? s5(l, E)
                                                    : new FormData(
                                                          l,
                                                      );
                                                a2(
                                                    r,
                                                    {
                                                        pending: !0,
                                                        data: e,
                                                        method: l.method,
                                                        action: S,
                                                    },
                                                    null,
                                                    e,
                                                );
                                            }
                                        } else
                                            "function" ==
                                                typeof S &&
                                                (C.preventDefault(),
                                                a2(
                                                    r,
                                                    {
                                                        pending: !0,
                                                        data: (e = E
                                                            ? s5(
                                                                  l,
                                                                  E,
                                                              )
                                                            : new FormData(
                                                                  l,
                                                              )),
                                                        method: l.method,
                                                        action: S,
                                                    },
                                                    S,
                                                    e,
                                                ));
                                    },
                                    currentTarget: l,
                                },
                            ],
                        });
                    }
                }
                ue(o, t);
            });
        }
        function ui(e, t, n) {
            return { instance: e, listener: t, currentTarget: n };
        }
        function us(e, t) {
            for (var n = t + "Capture", r = []; null !== e; ) {
                var l = e,
                    a = l.stateNode;
                if (
                    ((5 !== (l = l.tag) && 26 !== l && 27 !== l) ||
                        null === a ||
                        (null != (l = tN(e, n)) &&
                            r.unshift(ui(e, l, a)),
                        null != (l = tN(e, t)) &&
                            r.push(ui(e, l, a))),
                    3 === e.tag)
                )
                    return r;
                e = e.return;
            }
            return [];
        }
        function uu(e) {
            if (null === e) return null;
            do e = e.return;
            while (e && 5 !== e.tag && 27 !== e.tag);
            return e || null;
        }
        function uc(e, t, n, r, l) {
            for (
                var a = t._reactName, o = [];
                null !== n && n !== r;
            ) {
                var i = n,
                    s = i.alternate,
                    u = i.stateNode;
                if (((i = i.tag), null !== s && s === r)) break;
                ((5 !== i && 26 !== i && 27 !== i) ||
                    null === u ||
                    ((s = u),
                    l
                        ? null != (u = tN(n, a)) &&
                          o.unshift(ui(n, u, s))
                        : l ||
                          (null != (u = tN(n, a)) &&
                              o.push(ui(n, u, s)))),
                    (n = n.return));
            }
            0 !== o.length && e.push({ event: t, listeners: o });
        }
        var ud = /\r\n?/g,
            uf = /\u0000|\uFFFD/g;
        function up(e) {
            return ("string" == typeof e ? e : "" + e)
                .replace(ud, "\n")
                .replace(uf, "");
        }
        function um(e, t) {
            return ((t = up(t)), up(e) === t);
        }
        function uh(e, t, n, r, l, a) {
            switch (n) {
                case "children":
                    "string" == typeof r
                        ? "body" === t ||
                          ("textarea" === t && "" === r) ||
                          tc(e, r)
                        : ("number" == typeof r ||
                              "bigint" == typeof r) &&
                          "body" !== t &&
                          tc(e, "" + r);
                    break;
                case "className":
                    e5(e, "class", r);
                    break;
                case "tabIndex":
                    e5(e, "tabindex", r);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    e5(e, n, r);
                    break;
                case "style":
                    tp(e, r, a);
                    break;
                case "data":
                    if ("object" !== t) {
                        e5(e, "data", r);
                        break;
                    }
                case "src":
                case "href":
                    if (
                        ("" === r && ("a" !== t || "href" !== n)) ||
                        null == r ||
                        "function" == typeof r ||
                        "symbol" == typeof r ||
                        "boolean" == typeof r
                    ) {
                        e.removeAttribute(n);
                        break;
                    }
                    ((r = ty("" + r)), e.setAttribute(n, r));
                    break;
                case "action":
                case "formAction":
                    if ("function" == typeof r) {
                        e.setAttribute(
                            n,
                            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                        );
                        break;
                    }
                    if (
                        ("function" == typeof a &&
                            ("formAction" === n
                                ? ("input" !== t &&
                                      uh(
                                          e,
                                          t,
                                          "name",
                                          l.name,
                                          l,
                                          null,
                                      ),
                                  uh(
                                      e,
                                      t,
                                      "formEncType",
                                      l.formEncType,
                                      l,
                                      null,
                                  ),
                                  uh(
                                      e,
                                      t,
                                      "formMethod",
                                      l.formMethod,
                                      l,
                                      null,
                                  ),
                                  uh(
                                      e,
                                      t,
                                      "formTarget",
                                      l.formTarget,
                                      l,
                                      null,
                                  ))
                                : (uh(
                                      e,
                                      t,
                                      "encType",
                                      l.encType,
                                      l,
                                      null,
                                  ),
                                  uh(
                                      e,
                                      t,
                                      "method",
                                      l.method,
                                      l,
                                      null,
                                  ),
                                  uh(
                                      e,
                                      t,
                                      "target",
                                      l.target,
                                      l,
                                      null,
                                  ))),
                        null == r ||
                            "symbol" == typeof r ||
                            "boolean" == typeof r)
                    ) {
                        e.removeAttribute(n);
                        break;
                    }
                    ((r = ty("" + r)), e.setAttribute(n, r));
                    break;
                case "onClick":
                    null != r && (e.onclick = tb);
                    break;
                case "onScroll":
                    null != r && ut("scroll", e);
                    break;
                case "onScrollEnd":
                    null != r && ut("scrollend", e);
                    break;
                case "dangerouslySetInnerHTML":
                    if (null != r) {
                        if (
                            "object" != typeof r ||
                            !("__html" in r)
                        )
                            throw Error(s(61));
                        if (null != (n = r.__html)) {
                            if (null != l.children)
                                throw Error(s(60));
                            e.innerHTML = n;
                        }
                    }
                    break;
                case "multiple":
                    e.multiple =
                        r &&
                        "function" != typeof r &&
                        "symbol" != typeof r;
                    break;
                case "muted":
                    e.muted =
                        r &&
                        "function" != typeof r &&
                        "symbol" != typeof r;
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                case "autoFocus":
                case "innerText":
                case "textContent":
                    break;
                case "xlinkHref":
                    if (
                        null == r ||
                        "function" == typeof r ||
                        "boolean" == typeof r ||
                        "symbol" == typeof r
                    ) {
                        e.removeAttribute("xlink:href");
                        break;
                    }
                    ((n = ty("" + r)),
                        e.setAttributeNS(
                            "http://www.w3.org/1999/xlink",
                            "xlink:href",
                            n,
                        ));
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    null != r &&
                    "function" != typeof r &&
                    "symbol" != typeof r
                        ? e.setAttribute(n, "" + r)
                        : e.removeAttribute(n);
                    break;
                case "inert":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                    r &&
                    "function" != typeof r &&
                    "symbol" != typeof r
                        ? e.setAttribute(n, "")
                        : e.removeAttribute(n);
                    break;
                case "capture":
                case "download":
                    !0 === r
                        ? e.setAttribute(n, "")
                        : !1 !== r &&
                            null != r &&
                            "function" != typeof r &&
                            "symbol" != typeof r
                          ? e.setAttribute(n, r)
                          : e.removeAttribute(n);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    null != r &&
                    "function" != typeof r &&
                    "symbol" != typeof r &&
                    !isNaN(r) &&
                    1 <= r
                        ? e.setAttribute(n, r)
                        : e.removeAttribute(n);
                    break;
                case "rowSpan":
                case "start":
                    null == r ||
                    "function" == typeof r ||
                    "symbol" == typeof r ||
                    isNaN(r)
                        ? e.removeAttribute(n)
                        : e.setAttribute(n, r);
                    break;
                case "popover":
                    (ut("beforetoggle", e),
                        ut("toggle", e),
                        e4(e, "popover", r));
                    break;
                case "xlinkActuate":
                    e8(
                        e,
                        "http://www.w3.org/1999/xlink",
                        "xlink:actuate",
                        r,
                    );
                    break;
                case "xlinkArcrole":
                    e8(
                        e,
                        "http://www.w3.org/1999/xlink",
                        "xlink:arcrole",
                        r,
                    );
                    break;
                case "xlinkRole":
                    e8(
                        e,
                        "http://www.w3.org/1999/xlink",
                        "xlink:role",
                        r,
                    );
                    break;
                case "xlinkShow":
                    e8(
                        e,
                        "http://www.w3.org/1999/xlink",
                        "xlink:show",
                        r,
                    );
                    break;
                case "xlinkTitle":
                    e8(
                        e,
                        "http://www.w3.org/1999/xlink",
                        "xlink:title",
                        r,
                    );
                    break;
                case "xlinkType":
                    e8(
                        e,
                        "http://www.w3.org/1999/xlink",
                        "xlink:type",
                        r,
                    );
                    break;
                case "xmlBase":
                    e8(
                        e,
                        "http://www.w3.org/XML/1998/namespace",
                        "xml:base",
                        r,
                    );
                    break;
                case "xmlLang":
                    e8(
                        e,
                        "http://www.w3.org/XML/1998/namespace",
                        "xml:lang",
                        r,
                    );
                    break;
                case "xmlSpace":
                    e8(
                        e,
                        "http://www.w3.org/XML/1998/namespace",
                        "xml:space",
                        r,
                    );
                    break;
                case "is":
                    e4(e, "is", r);
                    break;
                default:
                    (2 < n.length &&
                        ("o" === n[0] || "O" === n[0]) &&
                        ("n" === n[1] || "N" === n[1])) ||
                        e4(e, (n = th.get(n) || n), r);
            }
        }
        function ug(e, t, n, r, l, a) {
            switch (n) {
                case "style":
                    tp(e, r, a);
                    break;
                case "dangerouslySetInnerHTML":
                    if (null != r) {
                        if (
                            "object" != typeof r ||
                            !("__html" in r)
                        )
                            throw Error(s(61));
                        if (null != (n = r.__html)) {
                            if (null != l.children)
                                throw Error(s(60));
                            e.innerHTML = n;
                        }
                    }
                    break;
                case "children":
                    "string" == typeof r
                        ? tc(e, r)
                        : ("number" == typeof r ||
                              "bigint" == typeof r) &&
                          tc(e, "" + r);
                    break;
                case "onScroll":
                    null != r && ut("scroll", e);
                    break;
                case "onScrollEnd":
                    null != r && ut("scrollend", e);
                    break;
                case "onClick":
                    null != r && (e.onclick = tb);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                case "innerText":
                case "textContent":
                    break;
                default:
                    if (!eZ.hasOwnProperty(n))
                        e: {
                            if (
                                "o" === n[0] &&
                                "n" === n[1] &&
                                ((l = n.endsWith("Capture")),
                                (t = n.slice(
                                    2,
                                    l ? n.length - 7 : void 0,
                                )),
                                "function" ==
                                    typeof (a =
                                        null != (a = e[eR] || null)
                                            ? a[n]
                                            : null) &&
                                    e.removeEventListener(t, a, l),
                                "function" == typeof r)
                            ) {
                                ("function" != typeof a &&
                                    null !== a &&
                                    (n in e
                                        ? (e[n] = null)
                                        : e.hasAttribute(n) &&
                                          e.removeAttribute(n)),
                                    e.addEventListener(t, r, l));
                                break e;
                            }
                            n in e
                                ? (e[n] = r)
                                : !0 === r
                                  ? e.setAttribute(n, "")
                                  : e4(e, n, r);
                        }
            }
        }
        function uy(e, t, n) {
            switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "img":
                    (ut("error", e), ut("load", e));
                    var r,
                        l = !1,
                        a = !1;
                    for (r in n)
                        if (n.hasOwnProperty(r)) {
                            var o = n[r];
                            if (null != o)
                                switch (r) {
                                    case "src":
                                        l = !0;
                                        break;
                                    case "srcSet":
                                        a = !0;
                                        break;
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        throw Error(s(137, t));
                                    default:
                                        uh(e, t, r, o, n, null);
                                }
                        }
                    (a && uh(e, t, "srcSet", n.srcSet, n, null),
                        l && uh(e, t, "src", n.src, n, null));
                    return;
                case "input":
                    ut("invalid", e);
                    var i = (r = o = a = null),
                        u = null,
                        c = null;
                    for (l in n)
                        if (n.hasOwnProperty(l)) {
                            var d = n[l];
                            if (null != d)
                                switch (l) {
                                    case "name":
                                        a = d;
                                        break;
                                    case "type":
                                        o = d;
                                        break;
                                    case "checked":
                                        u = d;
                                        break;
                                    case "defaultChecked":
                                        c = d;
                                        break;
                                    case "value":
                                        r = d;
                                        break;
                                    case "defaultValue":
                                        i = d;
                                        break;
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        if (null != d)
                                            throw Error(s(137, t));
                                        break;
                                    default:
                                        uh(e, t, l, d, n, null);
                                }
                        }
                    ta(e, r, i, u, c, o, a, !1);
                    return;
                case "select":
                    for (a in (ut("invalid", e),
                    (l = o = r = null),
                    n))
                        if (
                            n.hasOwnProperty(a) &&
                            null != (i = n[a])
                        )
                            switch (a) {
                                case "value":
                                    r = i;
                                    break;
                                case "defaultValue":
                                    o = i;
                                    break;
                                case "multiple":
                                    l = i;
                                default:
                                    uh(e, t, a, i, n, null);
                            }
                    ((t = r),
                        (n = o),
                        (e.multiple = !!l),
                        null != t
                            ? ti(e, !!l, t, !1)
                            : null != n && ti(e, !!l, n, !0));
                    return;
                case "textarea":
                    for (o in (ut("invalid", e),
                    (r = a = l = null),
                    n))
                        if (
                            n.hasOwnProperty(o) &&
                            null != (i = n[o])
                        )
                            switch (o) {
                                case "value":
                                    l = i;
                                    break;
                                case "defaultValue":
                                    a = i;
                                    break;
                                case "children":
                                    r = i;
                                    break;
                                case "dangerouslySetInnerHTML":
                                    if (null != i)
                                        throw Error(s(91));
                                    break;
                                default:
                                    uh(e, t, o, i, n, null);
                            }
                    tu(e, l, a, r);
                    return;
                case "option":
                    for (u in n)
                        n.hasOwnProperty(u) &&
                            null != (l = n[u]) &&
                            ("selected" === u
                                ? (e.selected =
                                      l &&
                                      "function" != typeof l &&
                                      "symbol" != typeof l)
                                : uh(e, t, u, l, n, null));
                    return;
                case "dialog":
                    (ut("beforetoggle", e),
                        ut("toggle", e),
                        ut("cancel", e),
                        ut("close", e));
                    break;
                case "iframe":
                case "object":
                    ut("load", e);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < s9.length; l++) ut(s9[l], e);
                    break;
                case "image":
                    (ut("error", e), ut("load", e));
                    break;
                case "details":
                    ut("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    (ut("error", e), ut("load", e));
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "track":
                case "wbr":
                case "menuitem":
                    for (c in n)
                        if (
                            n.hasOwnProperty(c) &&
                            null != (l = n[c])
                        )
                            switch (c) {
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(s(137, t));
                                default:
                                    uh(e, t, c, l, n, null);
                            }
                    return;
                default:
                    if (tm(t)) {
                        for (d in n)
                            n.hasOwnProperty(d) &&
                                void 0 !== (l = n[d]) &&
                                ug(e, t, d, l, n, void 0);
                        return;
                    }
            }
            for (i in n)
                n.hasOwnProperty(i) &&
                    null != (l = n[i]) &&
                    uh(e, t, i, l, n, null);
        }
        function ub(e) {
            switch (e) {
                case "css":
                case "script":
                case "font":
                case "img":
                case "image":
                case "input":
                case "link":
                    return !0;
                default:
                    return !1;
            }
        }
        var uv = null,
            ux = null;
        function uk(e) {
            return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function uw(e) {
            switch (e) {
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function uS(e, t) {
            if (0 === e)
                switch (t) {
                    case "svg":
                        return 1;
                    case "math":
                        return 2;
                    default:
                        return 0;
                }
            return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function uE(e, t) {
            return (
                "textarea" === e ||
                "noscript" === e ||
                "string" == typeof t.children ||
                "number" == typeof t.children ||
                "bigint" == typeof t.children ||
                ("object" == typeof t.dangerouslySetInnerHTML &&
                    null !== t.dangerouslySetInnerHTML &&
                    null != t.dangerouslySetInnerHTML.__html)
            );
        }
        var uC = null,
            uN =
                "function" == typeof setTimeout
                    ? setTimeout
                    : void 0,
            uz =
                "function" == typeof clearTimeout
                    ? clearTimeout
                    : void 0,
            uF = "function" == typeof Promise ? Promise : void 0,
            uP =
                "function" == typeof queueMicrotask
                    ? queueMicrotask
                    : void 0 !== uF
                      ? function (e) {
                            return uF
                                .resolve(null)
                                .then(e)
                                .catch(u_);
                        }
                      : uN;
        function u_(e) {
            setTimeout(function () {
                throw e;
            });
        }
        function uT(e) {
            return "head" === e;
        }
        function uA(e, t) {
            var n = t,
                r = 0;
            do {
                var l = n.nextSibling;
                if ((e.removeChild(n), l && 8 === l.nodeType))
                    if ("/$" === (n = l.data) || "/&" === n) {
                        if (0 === r) {
                            (e.removeChild(l), cR(t));
                            return;
                        }
                        r--;
                    } else if (
                        "$" === n ||
                        "$?" === n ||
                        "$~" === n ||
                        "$!" === n ||
                        "&" === n
                    )
                        r++;
                    else if ("html" === n)
                        uH(e.ownerDocument.documentElement);
                    else if ("head" === n) {
                        uH((n = e.ownerDocument.head));
                        for (var a = n.firstChild; a; ) {
                            var o = a.nextSibling,
                                i = a.nodeName;
                            (a[eV] ||
                                "SCRIPT" === i ||
                                "STYLE" === i ||
                                ("LINK" === i &&
                                    "stylesheet" ===
                                        a.rel.toLowerCase()) ||
                                n.removeChild(a),
                                (a = o));
                        }
                    } else "body" === n && uH(e.ownerDocument.body);
                n = l;
            } while (n);
            cR(t);
        }
        function uj(e, t) {
            var n = e;
            e = 0;
            do {
                var r = n.nextSibling;
                if (
                    (1 === n.nodeType
                        ? t
                            ? ((n._stashedDisplay =
                                  n.style.display),
                              (n.style.display = "none"))
                            : ((n.style.display =
                                  n._stashedDisplay || ""),
                              "" === n.getAttribute("style") &&
                                  n.removeAttribute("style"))
                        : 3 === n.nodeType &&
                          (t
                              ? ((n._stashedText = n.nodeValue),
                                (n.nodeValue = ""))
                              : (n.nodeValue =
                                    n._stashedText || "")),
                    r && 8 === r.nodeType)
                )
                    if ("/$" === (n = r.data))
                        if (0 === e) break;
                        else e--;
                    else
                        ("$" !== n &&
                            "$?" !== n &&
                            "$~" !== n &&
                            "$!" !== n) ||
                            e++;
                n = r;
            } while (n);
        }
        function uL(e) {
            var t = e.firstChild;
            for (
                t && 10 === t.nodeType && (t = t.nextSibling);
                t;
            ) {
                var n = t;
                switch (((t = t.nextSibling), n.nodeName)) {
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        (uL(n), eW(n));
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if ("stylesheet" === n.rel.toLowerCase())
                            continue;
                }
                e.removeChild(n);
            }
        }
        function uO(e, t) {
            for (; 8 !== e.nodeType; )
                if (
                    ((1 !== e.nodeType ||
                        "INPUT" !== e.nodeName ||
                        "hidden" !== e.type) &&
                        !t) ||
                    null === (e = uR(e.nextSibling))
                )
                    return null;
            return e;
        }
        function uD(e) {
            return "$?" === e.data || "$~" === e.data;
        }
        function uM(e) {
            return (
                "$!" === e.data ||
                ("$?" === e.data &&
                    "loading" !== e.ownerDocument.readyState)
            );
        }
        function uR(e) {
            for (; null != e; e = e.nextSibling) {
                var t = e.nodeType;
                if (1 === t || 3 === t) break;
                if (8 === t) {
                    if (
                        "$" === (t = e.data) ||
                        "$!" === t ||
                        "$?" === t ||
                        "$~" === t ||
                        "&" === t ||
                        "F!" === t ||
                        "F" === t
                    )
                        break;
                    if ("/$" === t || "/&" === t) return null;
                }
            }
            return e;
        }
        var uB = null;
        function uI(e) {
            e = e.nextSibling;
            for (var t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ("/$" === n || "/&" === n) {
                        if (0 === t) return uR(e.nextSibling);
                        t--;
                    } else
                        ("$" !== n &&
                            "$!" !== n &&
                            "$?" !== n &&
                            "$~" !== n &&
                            "&" !== n) ||
                            t++;
                }
                e = e.nextSibling;
            }
            return null;
        }
        function u$(e) {
            e = e.previousSibling;
            for (var t = 0; e; ) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if (
                        "$" === n ||
                        "$!" === n ||
                        "$?" === n ||
                        "$~" === n ||
                        "&" === n
                    ) {
                        if (0 === t) return e;
                        t--;
                    } else ("/$" !== n && "/&" !== n) || t++;
                }
                e = e.previousSibling;
            }
            return null;
        }
        function uU(e, t, n) {
            switch (((t = uk(n)), e)) {
                case "html":
                    if (!(e = t.documentElement))
                        throw Error(s(452));
                    return e;
                case "head":
                    if (!(e = t.head)) throw Error(s(453));
                    return e;
                case "body":
                    if (!(e = t.body)) throw Error(s(454));
                    return e;
                default:
                    throw Error(s(451));
            }
        }
        function uH(e) {
            for (var t = e.attributes; t.length; )
                e.removeAttributeNode(t[0]);
            eW(e);
        }
        var uV = new Map(),
            uW = new Set();
        function uQ(e) {
            return "function" == typeof e.getRootNode
                ? e.getRootNode()
                : 9 === e.nodeType
                  ? e
                  : e.ownerDocument;
        }
        var uq = O.d;
        O.d = {
            f: function () {
                var e = uq.f(),
                    t = sg();
                return e || t;
            },
            r: function (e) {
                var t = eq(e);
                null !== t && 5 === t.tag && "form" === t.type
                    ? a4(t)
                    : uq.r(e);
            },
            D: function (e) {
                (uq.D(e), uK("dns-prefetch", e, null));
            },
            C: function (e, t) {
                (uq.C(e, t), uK("preconnect", e, t));
            },
            L: function (e, t, n) {
                if ((uq.L(e, t, n), uG && e && t)) {
                    var r =
                        'link[rel="preload"][as="' + tr(t) + '"]';
                    "image" === t && n && n.imageSrcSet
                        ? ((r +=
                              '[imagesrcset="' +
                              tr(n.imageSrcSet) +
                              '"]'),
                          "string" == typeof n.imageSizes &&
                              (r +=
                                  '[imagesizes="' +
                                  tr(n.imageSizes) +
                                  '"]'))
                        : (r += '[href="' + tr(e) + '"]');
                    var l = r;
                    switch (t) {
                        case "style":
                            l = uX(e);
                            break;
                        case "script":
                            l = u0(e);
                    }
                    uV.has(l) ||
                        ((e = m(
                            {
                                rel: "preload",
                                href:
                                    "image" === t &&
                                    n &&
                                    n.imageSrcSet
                                        ? void 0
                                        : e,
                                as: t,
                            },
                            n,
                        )),
                        uV.set(l, e),
                        null !== uG.querySelector(r) ||
                            ("style" === t &&
                                uG.querySelector(uZ(l))) ||
                            ("script" === t &&
                                uG.querySelector(u1(l))) ||
                            (uy(
                                (t = uG.createElement("link")),
                                "link",
                                e,
                            ),
                            eY(t),
                            uG.head.appendChild(t)));
                }
            },
            m: function (e, t) {
                if ((uq.m(e, t), uG && e)) {
                    var n =
                            t && "string" == typeof t.as
                                ? t.as
                                : "script",
                        r =
                            'link[rel="modulepreload"][as="' +
                            tr(n) +
                            '"][href="' +
                            tr(e) +
                            '"]',
                        l = r;
                    switch (n) {
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            l = u0(e);
                    }
                    if (
                        !uV.has(l) &&
                        ((e = m(
                            { rel: "modulepreload", href: e },
                            t,
                        )),
                        uV.set(l, e),
                        null === uG.querySelector(r))
                    ) {
                        switch (n) {
                            case "audioworklet":
                            case "paintworklet":
                            case "serviceworker":
                            case "sharedworker":
                            case "worker":
                            case "script":
                                if (uG.querySelector(u1(l))) return;
                        }
                        (uy(
                            (n = uG.createElement("link")),
                            "link",
                            e,
                        ),
                            eY(n),
                            uG.head.appendChild(n));
                    }
                }
            },
            X: function (e, t) {
                if ((uq.X(e, t), uG && e)) {
                    var n = eK(uG).hoistableScripts,
                        r = u0(e),
                        l = n.get(r);
                    l ||
                        ((l = uG.querySelector(u1(r))) ||
                            ((e = m({ src: e, async: !0 }, t)),
                            (t = uV.get(r)) && u5(e, t),
                            eY((l = uG.createElement("script"))),
                            uy(l, "link", e),
                            uG.head.appendChild(l)),
                        (l = {
                            type: "script",
                            instance: l,
                            count: 1,
                            state: null,
                        }),
                        n.set(r, l));
                }
            },
            S: function (e, t, n) {
                if ((uq.S(e, t, n), uG && e)) {
                    var r = eK(uG).hoistableStyles,
                        l = uX(e);
                    t = t || "default";
                    var a = r.get(l);
                    if (!a) {
                        var o = { loading: 0, preload: null };
                        if ((a = uG.querySelector(uZ(l))))
                            o.loading = 5;
                        else {
                            ((e = m(
                                {
                                    rel: "stylesheet",
                                    href: e,
                                    "data-precedence": t,
                                },
                                n,
                            )),
                                (n = uV.get(l)) && u4(e, n));
                            var i = (a = uG.createElement("link"));
                            (eY(i),
                                uy(i, "link", e),
                                (i._p = new Promise(function (
                                    e,
                                    t,
                                ) {
                                    ((i.onload = e),
                                        (i.onerror = t));
                                })),
                                i.addEventListener(
                                    "load",
                                    function () {
                                        o.loading |= 1;
                                    },
                                ),
                                i.addEventListener(
                                    "error",
                                    function () {
                                        o.loading |= 2;
                                    },
                                ),
                                (o.loading |= 4),
                                u3(a, t, uG));
                        }
                        ((a = {
                            type: "stylesheet",
                            instance: a,
                            count: 1,
                            state: o,
                        }),
                            r.set(l, a));
                    }
                }
            },
            M: function (e, t) {
                if ((uq.M(e, t), uG && e)) {
                    var n = eK(uG).hoistableScripts,
                        r = u0(e),
                        l = n.get(r);
                    l ||
                        ((l = uG.querySelector(u1(r))) ||
                            ((e = m(
                                {
                                    src: e,
                                    async: !0,
                                    type: "module",
                                },
                                t,
                            )),
                            (t = uV.get(r)) && u5(e, t),
                            eY((l = uG.createElement("script"))),
                            uy(l, "link", e),
                            uG.head.appendChild(l)),
                        (l = {
                            type: "script",
                            instance: l,
                            count: 1,
                            state: null,
                        }),
                        n.set(r, l));
                }
            },
        };
        var uG = "u" < typeof document ? null : document;
        function uK(e, t, n) {
            if (uG && "string" == typeof t && t) {
                var r = tr(t);
                ((r = 'link[rel="' + e + '"][href="' + r + '"]'),
                    "string" == typeof n &&
                        (r += '[crossorigin="' + n + '"]'),
                    uW.has(r) ||
                        (uW.add(r),
                        (e = { rel: e, crossOrigin: n, href: t }),
                        null === uG.querySelector(r) &&
                            (uy(
                                (t = uG.createElement("link")),
                                "link",
                                e,
                            ),
                            eY(t),
                            uG.head.appendChild(t))));
            }
        }
        function uY(e, t, n, r) {
            var l = (l = V.current) ? uQ(l) : null;
            if (!l) throw Error(s(446));
            switch (e) {
                case "meta":
                case "title":
                    return null;
                case "style":
                    return "string" == typeof n.precedence &&
                        "string" == typeof n.href
                        ? ((t = uX(n.href)),
                          (r = (n = eK(l).hoistableStyles).get(
                              t,
                          )) ||
                              ((r = {
                                  type: "style",
                                  instance: null,
                                  count: 0,
                                  state: null,
                              }),
                              n.set(t, r)),
                          r)
                        : {
                              type: "void",
                              instance: null,
                              count: 0,
                              state: null,
                          };
                case "link":
                    if (
                        "stylesheet" === n.rel &&
                        "string" == typeof n.href &&
                        "string" == typeof n.precedence
                    ) {
                        e = uX(n.href);
                        var a,
                            o,
                            i,
                            u,
                            c = eK(l).hoistableStyles,
                            d = c.get(e);
                        if (
                            (d ||
                                ((l = l.ownerDocument || l),
                                (d = {
                                    type: "stylesheet",
                                    instance: null,
                                    count: 0,
                                    state: {
                                        loading: 0,
                                        preload: null,
                                    },
                                }),
                                c.set(e, d),
                                (c = l.querySelector(uZ(e))) &&
                                    !c._p &&
                                    ((d.instance = c),
                                    (d.state.loading = 5)),
                                uV.has(e) ||
                                    ((n = {
                                        rel: "preload",
                                        as: "style",
                                        href: n.href,
                                        crossOrigin: n.crossOrigin,
                                        integrity: n.integrity,
                                        media: n.media,
                                        hrefLang: n.hrefLang,
                                        referrerPolicy:
                                            n.referrerPolicy,
                                    }),
                                    uV.set(e, n),
                                    c ||
                                        ((a = l),
                                        (o = e),
                                        (i = n),
                                        (u = d.state),
                                        a.querySelector(
                                            'link[rel="preload"][as="style"][' +
                                                o +
                                                "]",
                                        )
                                            ? (u.loading = 1)
                                            : ((u.preload = o =
                                                  a.createElement(
                                                      "link",
                                                  )),
                                              o.addEventListener(
                                                  "load",
                                                  function () {
                                                      return (u.loading |= 1);
                                                  },
                                              ),
                                              o.addEventListener(
                                                  "error",
                                                  function () {
                                                      return (u.loading |= 2);
                                                  },
                                              ),
                                              uy(o, "link", i),
                                              eY(o),
                                              a.head.appendChild(
                                                  o,
                                              ))))),
                            t && null === r)
                        )
                            throw Error(s(528, ""));
                        return d;
                    }
                    if (t && null !== r) throw Error(s(529, ""));
                    return null;
                case "script":
                    return (
                        (t = n.async),
                        "string" == typeof (n = n.src) &&
                        t &&
                        "function" != typeof t &&
                        "symbol" != typeof t
                            ? ((t = u0(n)),
                              (r = (n = eK(l).hoistableScripts).get(
                                  t,
                              )) ||
                                  ((r = {
                                      type: "script",
                                      instance: null,
                                      count: 0,
                                      state: null,
                                  }),
                                  n.set(t, r)),
                              r)
                            : {
                                  type: "void",
                                  instance: null,
                                  count: 0,
                                  state: null,
                              }
                    );
                default:
                    throw Error(s(444, e));
            }
        }
        function uX(e) {
            return 'href="' + tr(e) + '"';
        }
        function uZ(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function uJ(e) {
            return m({}, e, {
                "data-precedence": e.precedence,
                precedence: null,
            });
        }
        function u0(e) {
            return '[src="' + tr(e) + '"]';
        }
        function u1(e) {
            return "script[async]" + e;
        }
        function u2(e, t, n) {
            if ((t.count++, null === t.instance))
                switch (t.type) {
                    case "style":
                        var r = e.querySelector(
                            'style[data-href~="' +
                                tr(n.href) +
                                '"]',
                        );
                        if (r) return ((t.instance = r), eY(r), r);
                        var l = m({}, n, {
                            "data-href": n.href,
                            "data-precedence": n.precedence,
                            href: null,
                            precedence: null,
                        });
                        return (
                            eY(
                                (r = (
                                    e.ownerDocument || e
                                ).createElement("style")),
                            ),
                            uy(r, "style", l),
                            u3(r, n.precedence, e),
                            (t.instance = r)
                        );
                    case "stylesheet":
                        l = uX(n.href);
                        var a = e.querySelector(uZ(l));
                        if (a)
                            return (
                                (t.state.loading |= 4),
                                (t.instance = a),
                                eY(a),
                                a
                            );
                        ((r = uJ(n)),
                            (l = uV.get(l)) && u4(r, l),
                            eY(
                                (a = (
                                    e.ownerDocument || e
                                ).createElement("link")),
                            ));
                        var o = a;
                        return (
                            (o._p = new Promise(function (e, t) {
                                ((o.onload = e), (o.onerror = t));
                            })),
                            uy(a, "link", r),
                            (t.state.loading |= 4),
                            u3(a, n.precedence, e),
                            (t.instance = a)
                        );
                    case "script":
                        if (
                            ((a = u0(n.src)),
                            (l = e.querySelector(u1(a))))
                        )
                            return ((t.instance = l), eY(l), l);
                        return (
                            (r = n),
                            (l = uV.get(a)) &&
                                u5((r = m({}, n)), l),
                            eY(
                                (l = (e =
                                    e.ownerDocument ||
                                    e).createElement("script")),
                            ),
                            uy(l, "link", r),
                            e.head.appendChild(l),
                            (t.instance = l)
                        );
                    case "void":
                        return null;
                    default:
                        throw Error(s(443, t.type));
                }
            return (
                "stylesheet" === t.type &&
                    0 == (4 & t.state.loading) &&
                    ((r = t.instance),
                    (t.state.loading |= 4),
                    u3(r, n.precedence, e)),
                t.instance
            );
        }
        function u3(e, t, n) {
            for (
                var r = n.querySelectorAll(
                        'link[rel="stylesheet"][data-precedence],style[data-precedence]',
                    ),
                    l = r.length ? r[r.length - 1] : null,
                    a = l,
                    o = 0;
                o < r.length;
                o++
            ) {
                var i = r[o];
                if (i.dataset.precedence === t) a = i;
                else if (a !== l) break;
            }
            a
                ? a.parentNode.insertBefore(e, a.nextSibling)
                : (t = 9 === n.nodeType ? n.head : n).insertBefore(
                      e,
                      t.firstChild,
                  );
        }
        function u4(e, t) {
            (null == e.crossOrigin &&
                (e.crossOrigin = t.crossOrigin),
                null == e.referrerPolicy &&
                    (e.referrerPolicy = t.referrerPolicy),
                null == e.title && (e.title = t.title));
        }
        function u5(e, t) {
            (null == e.crossOrigin &&
                (e.crossOrigin = t.crossOrigin),
                null == e.referrerPolicy &&
                    (e.referrerPolicy = t.referrerPolicy),
                null == e.integrity && (e.integrity = t.integrity));
        }
        var u8 = null;
        function u6(e, t, n) {
            if (null === u8) {
                var r = new Map(),
                    l = (u8 = new Map());
                l.set(n, r);
            } else
                (r = (l = u8).get(n)) ||
                    ((r = new Map()), l.set(n, r));
            if (r.has(e)) return r;
            for (
                r.set(e, null),
                    n = n.getElementsByTagName(e),
                    l = 0;
                l < n.length;
                l++
            ) {
                var a = n[l];
                if (
                    !(
                        a[eV] ||
                        a[eM] ||
                        ("link" === e &&
                            "stylesheet" === a.getAttribute("rel"))
                    ) &&
                    "http://www.w3.org/2000/svg" !== a.namespaceURI
                ) {
                    var o = a.getAttribute(t) || "";
                    o = e + o;
                    var i = r.get(o);
                    i ? i.push(a) : r.set(o, [a]);
                }
            }
            return r;
        }
        function u9(e, t, n) {
            (e = e.ownerDocument || e).head.insertBefore(
                n,
                "title" === t
                    ? e.querySelector("head > title")
                    : null,
            );
        }
        function u7(e) {
            return (
                "stylesheet" !== e.type ||
                0 != (3 & e.state.loading)
            );
        }
        var ce = 0;
        function ct() {
            if (
                (this.count--,
                0 === this.count &&
                    (0 === this.imgCount || !this.waitingForImages))
            ) {
                if (this.stylesheets) cr(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    ((this.unsuspend = null), e());
                }
            }
        }
        var cn = null;
        function cr(e, t) {
            ((e.stylesheets = null),
                null !== e.unsuspend &&
                    (e.count++,
                    (cn = new Map()),
                    t.forEach(cl, e),
                    (cn = null),
                    ct.call(e)));
        }
        function cl(e, t) {
            if (!(4 & t.state.loading)) {
                var n = cn.get(e);
                if (n) var r = n.get(null);
                else {
                    ((n = new Map()), cn.set(e, n));
                    for (
                        var l = e.querySelectorAll(
                                "link[data-precedence],style[data-precedence]",
                            ),
                            a = 0;
                        a < l.length;
                        a++
                    ) {
                        var o = l[a];
                        ("LINK" === o.nodeName ||
                            "not all" !==
                                o.getAttribute("media")) &&
                            (n.set(o.dataset.precedence, o),
                            (r = o));
                    }
                    r && n.set(null, r);
                }
                ((o = (l = t.instance).getAttribute(
                    "data-precedence",
                )),
                    (a = n.get(o) || r) === r && n.set(null, l),
                    n.set(o, l),
                    this.count++,
                    (r = ct.bind(this)),
                    l.addEventListener("load", r),
                    l.addEventListener("error", r),
                    a
                        ? a.parentNode.insertBefore(
                              l,
                              a.nextSibling,
                          )
                        : (e =
                              9 === e.nodeType
                                  ? e.head
                                  : e).insertBefore(
                              l,
                              e.firstChild,
                          ),
                    (t.state.loading |= 4));
            }
        }
        var ca = {
            $$typeof: w,
            Provider: null,
            Consumer: null,
            _currentValue: D,
            _currentValue2: D,
            _threadCount: 0,
        };
        function co(e, t, n, r, l, a, o, i, s) {
            ((this.tag = 1),
                (this.containerInfo = e),
                (this.pingCache =
                    this.current =
                    this.pendingChildren =
                        null),
                (this.timeoutHandle = -1),
                (this.callbackNode =
                    this.next =
                    this.pendingContext =
                    this.context =
                    this.cancelPendingCommit =
                        null),
                (this.callbackPriority = 0),
                (this.expirationTimes = ez(-1)),
                (this.entangledLanes =
                    this.shellSuspendCounter =
                    this.errorRecoveryDisabledLanes =
                    this.expiredLanes =
                    this.warmLanes =
                    this.pingedLanes =
                    this.suspendedLanes =
                    this.pendingLanes =
                        0),
                (this.entanglements = ez(0)),
                (this.hiddenUpdates = ez(null)),
                (this.identifierPrefix = r),
                (this.onUncaughtError = l),
                (this.onCaughtError = a),
                (this.onRecoverableError = o),
                (this.pooledCache = null),
                (this.pooledCacheLanes = 0),
                (this.formState = s),
                (this.incompleteTransitions = new Map()));
        }
        function ci(e, t, n, r, l, a, o, i, s, u, c, d) {
            return (
                (e = new co(e, t, n, o, s, u, c, d, i)),
                (t = 1),
                !0 === a && (t |= 24),
                (a = ra(3, null, null, t)),
                (e.current = a),
                (a.stateNode = e),
                (t = r8()),
                t.refCount++,
                (e.pooledCache = t),
                t.refCount++,
                (a.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: t,
                }),
                lz(a),
                e
            );
        }
        function cs(e, t, n, r, l, a) {
            ((l = l ? rr : rr),
                null === r.context
                    ? (r.context = l)
                    : (r.pendingContext = l),
                ((r = lP(t)).payload = { element: n }),
                null !== (a = void 0 === a ? null : a) &&
                    (r.callback = a),
                null !== (n = l_(e, r, t)) &&
                    (sf(n, e, t), lT(n, e, t)));
        }
        function cu(e, t) {
            if (
                null !== (e = e.memoizedState) &&
                null !== e.dehydrated
            ) {
                var n = e.retryLane;
                e.retryLane = 0 !== n && n < t ? n : t;
            }
        }
        function cc(e, t) {
            (cu(e, t), (e = e.alternate) && cu(e, t));
        }
        function cd(e) {
            if (13 === e.tag || 31 === e.tag) {
                var t = re(e, 0x4000000);
                (null !== t && sf(t, e, 0x4000000),
                    cc(e, 0x4000000));
            }
        }
        function cf(e) {
            if (13 === e.tag || 31 === e.tag) {
                var t = sc(),
                    n = re(e, (t = eA(t)));
                (null !== n && sf(n, e, t), cc(e, t));
            }
        }
        var cp = !0;
        function cm(e, t, n, r) {
            var l = L.T;
            L.T = null;
            var a = O.p;
            try {
                ((O.p = 2), cg(e, t, n, r));
            } finally {
                ((O.p = a), (L.T = l));
            }
        }
        function ch(e, t, n, r) {
            var l = L.T;
            L.T = null;
            var a = O.p;
            try {
                ((O.p = 8), cg(e, t, n, r));
            } finally {
                ((O.p = a), (L.T = l));
            }
        }
        function cg(e, t, n, r) {
            if (cp) {
                var l = cy(r);
                if (null === l) (uo(e, t, r, cb, n), cP(e, r));
                else if (
                    (function (e, t, n, r, l) {
                        switch (t) {
                            case "focusin":
                                return (
                                    (cw = c_(cw, e, t, n, r, l)),
                                    !0
                                );
                            case "dragenter":
                                return (
                                    (cS = c_(cS, e, t, n, r, l)),
                                    !0
                                );
                            case "mouseover":
                                return (
                                    (cE = c_(cE, e, t, n, r, l)),
                                    !0
                                );
                            case "pointerover":
                                var a = l.pointerId;
                                return (
                                    cC.set(
                                        a,
                                        c_(
                                            cC.get(a) || null,
                                            e,
                                            t,
                                            n,
                                            r,
                                            l,
                                        ),
                                    ),
                                    !0
                                );
                            case "gotpointercapture":
                                return (
                                    (a = l.pointerId),
                                    cN.set(
                                        a,
                                        c_(
                                            cN.get(a) || null,
                                            e,
                                            t,
                                            n,
                                            r,
                                            l,
                                        ),
                                    ),
                                    !0
                                );
                        }
                        return !1;
                    })(l, e, t, n, r)
                )
                    r.stopPropagation();
                else if ((cP(e, r), 4 & t && -1 < cF.indexOf(e))) {
                    for (; null !== l; ) {
                        var a = eq(l);
                        if (null !== a)
                            switch (a.tag) {
                                case 3:
                                    if (
                                        (a = a.stateNode).current
                                            .memoizedState
                                            .isDehydrated
                                    ) {
                                        var o = eS(a.pendingLanes);
                                        if (0 !== o) {
                                            var i = a;
                                            for (
                                                i.pendingLanes |= 2,
                                                    i.entangledLanes |= 2;
                                                o;
                                            ) {
                                                var s =
                                                    1 <<
                                                    (31 - ey(o));
                                                ((i.entanglements[1] |=
                                                    s),
                                                    (o &= ~s));
                                            }
                                            (sY(a),
                                                0 == (6 & i$) &&
                                                    ((i9 =
                                                        ea() + 500),
                                                    sX(0, !1)));
                                        }
                                    }
                                    break;
                                case 31:
                                case 13:
                                    (null !== (i = re(a, 2)) &&
                                        sf(i, a, 2),
                                        sg(),
                                        cc(a, 2));
                            }
                        if (
                            (null === (a = cy(r)) &&
                                uo(e, t, r, cb, n),
                            a === l)
                        )
                            break;
                        l = a;
                    }
                    null !== l && r.stopPropagation();
                } else uo(e, t, r, null, n);
            }
        }
        function cy(e) {
            return cv((e = tx(e)));
        }
        var cb = null;
        function cv(e) {
            if (((cb = null), null !== (e = eQ(e)))) {
                var t = c(e);
                if (null === t) e = null;
                else {
                    var n = t.tag;
                    if (13 === n) {
                        if (null !== (e = d(t))) return e;
                        e = null;
                    } else if (31 === n) {
                        if (null !== (e = f(t))) return e;
                        e = null;
                    } else if (3 === n) {
                        if (
                            t.stateNode.current.memoizedState
                                .isDehydrated
                        )
                            return 3 === t.tag
                                ? t.stateNode.containerInfo
                                : null;
                        e = null;
                    } else t !== e && (e = null);
                }
            }
            return ((cb = e), null);
        }
        function cx(e) {
            switch (e) {
                case "beforetoggle":
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "toggle":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 2;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 8;
                case "message":
                    switch (eo()) {
                        case ei:
                            return 2;
                        case es:
                            return 8;
                        case eu:
                        case ec:
                            return 32;
                        case ed:
                            return 0x10000000;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var ck = !1,
            cw = null,
            cS = null,
            cE = null,
            cC = new Map(),
            cN = new Map(),
            cz = [],
            cF =
                "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
                    " ",
                );
        function cP(e, t) {
            switch (e) {
                case "focusin":
                case "focusout":
                    cw = null;
                    break;
                case "dragenter":
                case "dragleave":
                    cS = null;
                    break;
                case "mouseover":
                case "mouseout":
                    cE = null;
                    break;
                case "pointerover":
                case "pointerout":
                    cC.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    cN.delete(t.pointerId);
            }
        }
        function c_(e, t, n, r, l, a) {
            return (
                null === e || e.nativeEvent !== a
                    ? ((e = {
                          blockedOn: t,
                          domEventName: n,
                          eventSystemFlags: r,
                          nativeEvent: a,
                          targetContainers: [l],
                      }),
                      null !== t && null !== (t = eq(t)) && cd(t))
                    : ((e.eventSystemFlags |= r),
                      (t = e.targetContainers),
                      null !== l &&
                          -1 === t.indexOf(l) &&
                          t.push(l)),
                e
            );
        }
        function cT(e) {
            var t = eQ(e.target);
            if (null !== t) {
                var n = c(t);
                if (null !== n) {
                    if (13 === (t = n.tag)) {
                        if (null !== (t = d(n))) {
                            ((e.blockedOn = t),
                                eO(e.priority, function () {
                                    cf(n);
                                }));
                            return;
                        }
                    } else if (31 === t) {
                        if (null !== (t = f(n))) {
                            ((e.blockedOn = t),
                                eO(e.priority, function () {
                                    cf(n);
                                }));
                            return;
                        }
                    } else if (
                        3 === t &&
                        n.stateNode.current.memoizedState
                            .isDehydrated
                    ) {
                        e.blockedOn =
                            3 === n.tag
                                ? n.stateNode.containerInfo
                                : null;
                        return;
                    }
                }
            }
            e.blockedOn = null;
        }
        function cA(e) {
            if (null !== e.blockedOn) return !1;
            for (var t = e.targetContainers; 0 < t.length; ) {
                var n = cy(e.nativeEvent);
                if (null !== n)
                    return (
                        null !== (t = eq(n)) && cd(t),
                        (e.blockedOn = n),
                        !1
                    );
                var r = new (n = e.nativeEvent).constructor(
                    n.type,
                    n,
                );
                ((tv = r),
                    n.target.dispatchEvent(r),
                    (tv = null),
                    t.shift());
            }
            return !0;
        }
        function cj(e, t, n) {
            cA(e) && n.delete(t);
        }
        function cL() {
            ((ck = !1),
                null !== cw && cA(cw) && (cw = null),
                null !== cS && cA(cS) && (cS = null),
                null !== cE && cA(cE) && (cE = null),
                cC.forEach(cj),
                cN.forEach(cj));
        }
        function cO(e, t) {
            e.blockedOn === t &&
                ((e.blockedOn = null),
                ck ||
                    ((ck = !0),
                    l.unstable_scheduleCallback(
                        l.unstable_NormalPriority,
                        cL,
                    )));
        }
        var cD = null;
        function cM(e) {
            cD !== e &&
                ((cD = e),
                l.unstable_scheduleCallback(
                    l.unstable_NormalPriority,
                    function () {
                        cD === e && (cD = null);
                        for (var t = 0; t < e.length; t += 3) {
                            var n = e[t],
                                r = e[t + 1],
                                l = e[t + 2];
                            if ("function" != typeof r)
                                if (null === cv(r || n)) continue;
                                else break;
                            var a = eq(n);
                            null !== a &&
                                (e.splice(t, 3),
                                (t -= 3),
                                a2(
                                    a,
                                    {
                                        pending: !0,
                                        data: l,
                                        method: n.method,
                                        action: r,
                                    },
                                    r,
                                    l,
                                ));
                        }
                    },
                ));
        }
        function cR(e) {
            function t(t) {
                return cO(t, e);
            }
            (null !== cw && cO(cw, e),
                null !== cS && cO(cS, e),
                null !== cE && cO(cE, e),
                cC.forEach(t),
                cN.forEach(t));
            for (var n = 0; n < cz.length; n++) {
                var r = cz[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
            for (
                ;
                0 < cz.length && null === (n = cz[0]).blockedOn;
            )
                (cT(n), null === n.blockedOn && cz.shift());
            if (
                null !=
                (n = (e.ownerDocument || e).$$reactFormReplay)
            )
                for (r = 0; r < n.length; r += 3) {
                    var l = n[r],
                        a = n[r + 1],
                        o = l[eR] || null;
                    if ("function" == typeof a) o || cM(n);
                    else if (o) {
                        var i = null;
                        if (a && a.hasAttribute("formAction")) {
                            if (((l = a), (o = a[eR] || null)))
                                i = o.formAction;
                            else if (null !== cv(l)) continue;
                        } else i = o.action;
                        ("function" == typeof i
                            ? (n[r + 1] = i)
                            : (n.splice(r, 3), (r -= 3)),
                            cM(n));
                    }
                }
        }
        function cB() {
            function e(e) {
                e.canIntercept &&
                    "react-transition" === e.info &&
                    e.intercept({
                        handler: function () {
                            return new Promise(function (e) {
                                return (l = e);
                            });
                        },
                        focusReset: "manual",
                        scroll: "manual",
                    });
            }
            function t() {
                (null !== l && (l(), (l = null)),
                    r || setTimeout(n, 20));
            }
            function n() {
                if (!r && !navigation.transition) {
                    var e = navigation.currentEntry;
                    e &&
                        null != e.url &&
                        navigation.navigate(e.url, {
                            state: e.getState(),
                            info: "react-transition",
                            history: "replace",
                        });
                }
            }
            if ("object" == typeof navigation) {
                var r = !1,
                    l = null;
                return (
                    navigation.addEventListener("navigate", e),
                    navigation.addEventListener(
                        "navigatesuccess",
                        t,
                    ),
                    navigation.addEventListener("navigateerror", t),
                    setTimeout(n, 100),
                    function () {
                        ((r = !0),
                            navigation.removeEventListener(
                                "navigate",
                                e,
                            ),
                            navigation.removeEventListener(
                                "navigatesuccess",
                                t,
                            ),
                            navigation.removeEventListener(
                                "navigateerror",
                                t,
                            ),
                            null !== l && (l(), (l = null)));
                    }
                );
            }
        }
        function cI(e) {
            this._internalRoot = e;
        }
        function c$(e) {
            this._internalRoot = e;
        }
        ((c$.prototype.render = cI.prototype.render =
            function (e) {
                var t = this._internalRoot;
                if (null === t) throw Error(s(409));
                cs(t.current, sc(), e, t, null, null);
            }),
            (c$.prototype.unmount = cI.prototype.unmount =
                function () {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        (cs(e.current, 2, null, e, null, null),
                            sg(),
                            (t[eB] = null));
                    }
                }),
            (c$.prototype.unstable_scheduleHydration = function (
                e,
            ) {
                if (e) {
                    var t = eL();
                    e = { blockedOn: null, target: e, priority: t };
                    for (
                        var n = 0;
                        n < cz.length &&
                        0 !== t &&
                        t < cz[n].priority;
                        n++
                    );
                    (cz.splice(n, 0, e), 0 === n && cT(e));
                }
            }));
        var cU = o.version;
        if ("19.2.4" !== cU) throw Error(s(527, cU, "19.2.4"));
        if (
            ((O.findDOMNode = function (e) {
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" == typeof e.render)
                        throw Error(s(188));
                    throw Error(
                        s(268, (e = Object.keys(e).join(","))),
                    );
                }
                return null ===
                    (e =
                        null !==
                        (e = (function (e) {
                            var t = e.alternate;
                            if (!t) {
                                if (null === (t = c(e)))
                                    throw Error(s(188));
                                return t !== e ? null : e;
                            }
                            for (var n = e, r = t; ; ) {
                                var l = n.return;
                                if (null === l) break;
                                var a = l.alternate;
                                if (null === a) {
                                    if (null !== (r = l.return)) {
                                        n = r;
                                        continue;
                                    }
                                    break;
                                }
                                if (l.child === a.child) {
                                    for (a = l.child; a; ) {
                                        if (a === n)
                                            return (p(l), e);
                                        if (a === r)
                                            return (p(l), t);
                                        a = a.sibling;
                                    }
                                    throw Error(s(188));
                                }
                                if (n.return !== r.return)
                                    ((n = l), (r = a));
                                else {
                                    for (
                                        var o = !1, i = l.child;
                                        i;
                                    ) {
                                        if (i === n) {
                                            ((o = !0),
                                                (n = l),
                                                (r = a));
                                            break;
                                        }
                                        if (i === r) {
                                            ((o = !0),
                                                (r = l),
                                                (n = a));
                                            break;
                                        }
                                        i = i.sibling;
                                    }
                                    if (!o) {
                                        for (i = a.child; i; ) {
                                            if (i === n) {
                                                ((o = !0),
                                                    (n = a),
                                                    (r = l));
                                                break;
                                            }
                                            if (i === r) {
                                                ((o = !0),
                                                    (r = a),
                                                    (n = l));
                                                break;
                                            }
                                            i = i.sibling;
                                        }
                                        if (!o) throw Error(s(189));
                                    }
                                }
                                if (n.alternate !== r)
                                    throw Error(s(190));
                            }
                            if (3 !== n.tag) throw Error(s(188));
                            return n.stateNode.current === n
                                ? e
                                : t;
                        })(t))
                            ? (function e(t) {
                                  var n = t.tag;
                                  if (
                                      5 === n ||
                                      26 === n ||
                                      27 === n ||
                                      6 === n
                                  )
                                      return t;
                                  for (t = t.child; null !== t; ) {
                                      if (null !== (n = e(t)))
                                          return n;
                                      t = t.sibling;
                                  }
                                  return null;
                              })(e)
                            : null)
                    ? null
                    : e.stateNode;
            }),
            "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
        ) {
            var cH = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!cH.isDisabled && cH.supportsFiber)
                try {
                    ((em = cH.inject({
                        bundleType: 0,
                        version: "19.2.4",
                        rendererPackageName: "react-dom",
                        currentDispatcherRef: L,
                        reconcilerVersion: "19.2.4",
                    })),
                        (eh = cH));
                } catch (e) {}
        }
        ((tR = function (e, t) {
            if (!u(e)) throw Error(s(299));
            var n = !1,
                r = "",
                l = oh,
                a = og,
                o = oy;
            return (
                null != t &&
                    (!0 === t.unstable_strictMode && (n = !0),
                    void 0 !== t.identifierPrefix &&
                        (r = t.identifierPrefix),
                    void 0 !== t.onUncaughtError &&
                        (l = t.onUncaughtError),
                    void 0 !== t.onCaughtError &&
                        (a = t.onCaughtError),
                    void 0 !== t.onRecoverableError &&
                        (o = t.onRecoverableError)),
                (t = ci(
                    e,
                    1,
                    !1,
                    null,
                    null,
                    n,
                    r,
                    null,
                    l,
                    a,
                    o,
                    cB,
                )),
                (e[eB] = t.current),
                ul(e),
                new cI(t)
            );
        }),
            (tB = function (e, t, n) {
                if (!u(e)) throw Error(s(299));
                var r = !1,
                    l = "",
                    a = oh,
                    o = og,
                    i = oy,
                    c = null;
                return (
                    null != n &&
                        (!0 === n.unstable_strictMode && (r = !0),
                        void 0 !== n.identifierPrefix &&
                            (l = n.identifierPrefix),
                        void 0 !== n.onUncaughtError &&
                            (a = n.onUncaughtError),
                        void 0 !== n.onCaughtError &&
                            (o = n.onCaughtError),
                        void 0 !== n.onRecoverableError &&
                            (i = n.onRecoverableError),
                        void 0 !== n.formState &&
                            (c = n.formState)),
                    ((t = ci(
                        e,
                        1,
                        !0,
                        t,
                        null != n ? n : null,
                        r,
                        l,
                        c,
                        a,
                        o,
                        i,
                        cB,
                    )).context = rr),
                    (n = t.current),
                    ((l = lP((r = eA((r = sc()))))).callback =
                        null),
                    l_(n, l, r),
                    (n = r),
                    (t.current.lanes = n),
                    eF(t, n),
                    sY(t),
                    (e[eB] = t.current),
                    ul(e),
                    new c$(t)
                );
            }),
            (tI = "19.2.4"));
    }),
    o("aALGe", function (e, t) {
        e.exports = a("hurnZ");
    }),
    o("hurnZ", function (t, n) {
        function r(e, t) {
            var n = e.length;
            for (e.push(t); 0 < n; ) {
                var r = (n - 1) >>> 1,
                    l = e[r];
                if (0 < o(l, t)) ((e[r] = t), (e[n] = l), (n = r));
                else break;
            }
        }
        function l(e) {
            return 0 === e.length ? null : e[0];
        }
        function a(e) {
            if (0 === e.length) return null;
            var t = e[0],
                n = e.pop();
            if (n !== t) {
                e[0] = n;
                for (
                    var r = 0, l = e.length, a = l >>> 1;
                    r < a;
                ) {
                    var i = 2 * (r + 1) - 1,
                        s = e[i],
                        u = i + 1,
                        c = e[u];
                    if (0 > o(s, n))
                        u < l && 0 > o(c, s)
                            ? ((e[r] = c), (e[u] = n), (r = u))
                            : ((e[r] = s), (e[i] = n), (r = i));
                    else if (u < l && 0 > o(c, n))
                        ((e[r] = c), (e[u] = n), (r = u));
                    else break;
                }
            }
            return t;
        }
        function o(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return 0 !== n ? n : e.id - t.id;
        }
        if (
            (e(
                t.exports,
                "unstable_now",
                () => i,
                (e) => (i = e),
            ),
            e(
                t.exports,
                "unstable_IdlePriority",
                () => s,
                (e) => (s = e),
            ),
            e(
                t.exports,
                "unstable_ImmediatePriority",
                () => u,
                (e) => (u = e),
            ),
            e(
                t.exports,
                "unstable_LowPriority",
                () => c,
                (e) => (c = e),
            ),
            e(
                t.exports,
                "unstable_NormalPriority",
                () => d,
                (e) => (d = e),
            ),
            e(
                t.exports,
                "unstable_Profiling",
                () => f,
                (e) => (f = e),
            ),
            e(
                t.exports,
                "unstable_UserBlockingPriority",
                () => p,
                (e) => (p = e),
            ),
            e(
                t.exports,
                "unstable_cancelCallback",
                () => m,
                (e) => (m = e),
            ),
            e(
                t.exports,
                "unstable_forceFrameRate",
                () => h,
                (e) => (h = e),
            ),
            e(
                t.exports,
                "unstable_getCurrentPriorityLevel",
                () => g,
                (e) => (g = e),
            ),
            e(
                t.exports,
                "unstable_next",
                () => y,
                (e) => (y = e),
            ),
            e(
                t.exports,
                "unstable_requestPaint",
                () => b,
                (e) => (b = e),
            ),
            e(
                t.exports,
                "unstable_runWithPriority",
                () => v,
                (e) => (v = e),
            ),
            e(
                t.exports,
                "unstable_scheduleCallback",
                () => x,
                (e) => (x = e),
            ),
            e(
                t.exports,
                "unstable_shouldYield",
                () => k,
                (e) => (k = e),
            ),
            e(
                t.exports,
                "unstable_wrapCallback",
                () => w,
                (e) => (w = e),
            ),
            (i = void 0),
            "object" == typeof performance &&
                "function" == typeof performance.now)
        ) {
            var i,
                s,
                u,
                c,
                d,
                f,
                p,
                m,
                h,
                g,
                y,
                b,
                v,
                x,
                k,
                w,
                S,
                E = performance;
            i = function () {
                return E.now();
            };
        } else {
            var C = Date,
                N = C.now();
            i = function () {
                return C.now() - N;
            };
        }
        var z = [],
            F = [],
            P = 1,
            _ = null,
            T = 3,
            A = !1,
            j = !1,
            L = !1,
            O = !1,
            D = "function" == typeof setTimeout ? setTimeout : null,
            M =
                "function" == typeof clearTimeout
                    ? clearTimeout
                    : null,
            R = "u" > typeof setImmediate ? setImmediate : null;
        function B(e) {
            for (var t = l(F); null !== t; ) {
                if (null === t.callback) a(F);
                else if (t.startTime <= e)
                    (a(F),
                        (t.sortIndex = t.expirationTime),
                        r(z, t));
                else break;
                t = l(F);
            }
        }
        function I(e) {
            if (((L = !1), B(e), !j))
                if (null !== l(z)) ((j = !0), $ || (($ = !0), S()));
                else {
                    var t = l(F);
                    null !== t && K(I, t.startTime - e);
                }
        }
        var $ = !1,
            U = -1,
            H = 5,
            V = -1;
        function W() {
            return !!O || !(i() - V < H);
        }
        function Q() {
            if (((O = !1), $)) {
                var e = i();
                V = e;
                var t = !0;
                try {
                    e: {
                        ((j = !1),
                            L && ((L = !1), M(U), (U = -1)),
                            (A = !0));
                        var n = T;
                        try {
                            t: {
                                for (
                                    B(e), _ = l(z);
                                    null !== _ &&
                                    !(_.expirationTime > e && W());
                                ) {
                                    var r = _.callback;
                                    if ("function" == typeof r) {
                                        ((_.callback = null),
                                            (T = _.priorityLevel));
                                        var o = r(
                                            _.expirationTime <= e,
                                        );
                                        if (
                                            ((e = i()),
                                            "function" == typeof o)
                                        ) {
                                            ((_.callback = o),
                                                B(e),
                                                (t = !0));
                                            break t;
                                        }
                                        (_ === l(z) && a(z), B(e));
                                    } else a(z);
                                    _ = l(z);
                                }
                                if (null !== _) t = !0;
                                else {
                                    var s = l(F);
                                    (null !== s &&
                                        K(I, s.startTime - e),
                                        (t = !1));
                                }
                            }
                            break e;
                        } finally {
                            ((_ = null), (T = n), (A = !1));
                        }
                    }
                } finally {
                    t ? S() : ($ = !1);
                }
            }
        }
        if ("function" == typeof R)
            S = function () {
                R(Q);
            };
        else if ("u" > typeof MessageChannel) {
            var q = new MessageChannel(),
                G = q.port2;
            ((q.port1.onmessage = Q),
                (S = function () {
                    G.postMessage(null);
                }));
        } else
            S = function () {
                D(Q, 0);
            };
        function K(e, t) {
            U = D(function () {
                e(i());
            }, t);
        }
        ((s = 5),
            (u = 1),
            (c = 4),
            (d = 3),
            (f = null),
            (p = 2),
            (m = function (e) {
                e.callback = null;
            }),
            (h = function (e) {
                0 > e || 125 < e
                    ? console.error(
                          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                      )
                    : (H = 0 < e ? Math.floor(1e3 / e) : 5);
            }),
            (g = function () {
                return T;
            }),
            (y = function (e) {
                switch (T) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = T;
                }
                var n = T;
                T = t;
                try {
                    return e();
                } finally {
                    T = n;
                }
            }),
            (b = function () {
                O = !0;
            }),
            (v = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3;
                }
                var n = T;
                T = e;
                try {
                    return t();
                } finally {
                    T = n;
                }
            }),
            (x = function (e, t, n) {
                var a = i();
                switch (
                    ((n =
                        "object" == typeof n &&
                        null !== n &&
                        "number" == typeof (n = n.delay) &&
                        0 < n
                            ? a + n
                            : a),
                    e)
                ) {
                    case 1:
                        var o = -1;
                        break;
                    case 2:
                        o = 250;
                        break;
                    case 5:
                        o = 0x3fffffff;
                        break;
                    case 4:
                        o = 1e4;
                        break;
                    default:
                        o = 5e3;
                }
                return (
                    (o = n + o),
                    (e = {
                        id: P++,
                        callback: t,
                        priorityLevel: e,
                        startTime: n,
                        expirationTime: o,
                        sortIndex: -1,
                    }),
                    n > a
                        ? ((e.sortIndex = n),
                          r(F, e),
                          null === l(z) &&
                              e === l(F) &&
                              (L ? (M(U), (U = -1)) : (L = !0),
                              K(I, n - a)))
                        : ((e.sortIndex = o),
                          r(z, e),
                          j ||
                              A ||
                              ((j = !0), $ || (($ = !0), S()))),
                    e
                );
            }),
            (k = W),
            (w = function (e) {
                var t = T;
                return function () {
                    var n = T;
                    T = t;
                    try {
                        return e.apply(this, arguments);
                    } finally {
                        T = n;
                    }
                };
            }));
    }),
    o("2xBnP", function (e, t) {
        e.exports = a("5iduw");
    }),
    o("8cavo", function (e, t) {
        (!(function e() {
            if (
                "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
                "function" ==
                    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
            )
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                } catch (e) {
                    console.error(e);
                }
        })(),
            (e.exports = a("jFiWs")));
    }),
    o("jFiWs", function (t, n) {
        (e(
            t.exports,
            "__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",
            () => r,
            (e) => (r = e),
        ),
            e(
                t.exports,
                "createPortal",
                () => l,
                (e) => (l = e),
            ),
            e(
                t.exports,
                "flushSync",
                () => o,
                (e) => (o = e),
            ),
            e(
                t.exports,
                "preconnect",
                () => i,
                (e) => (i = e),
            ),
            e(
                t.exports,
                "prefetchDNS",
                () => s,
                (e) => (s = e),
            ),
            e(
                t.exports,
                "preinit",
                () => u,
                (e) => (u = e),
            ),
            e(
                t.exports,
                "preinitModule",
                () => c,
                (e) => (c = e),
            ),
            e(
                t.exports,
                "preload",
                () => d,
                (e) => (d = e),
            ),
            e(
                t.exports,
                "preloadModule",
                () => f,
                (e) => (f = e),
            ),
            e(
                t.exports,
                "requestFormReset",
                () => p,
                (e) => (p = e),
            ),
            e(
                t.exports,
                "unstable_batchedUpdates",
                () => m,
                (e) => (m = e),
            ),
            e(
                t.exports,
                "useFormState",
                () => h,
                (e) => (h = e),
            ),
            e(
                t.exports,
                "useFormStatus",
                () => g,
                (e) => (g = e),
            ),
            e(
                t.exports,
                "version",
                () => y,
                (e) => (y = e),
            ));
        var r,
            l,
            o,
            i,
            s,
            u,
            c,
            d,
            f,
            p,
            m,
            h,
            g,
            y,
            b = a("2xBnP");
        function v(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for (var n = 2; n < arguments.length; n++)
                    t +=
                        "&args[]=" +
                        encodeURIComponent(arguments[n]);
            }
            return (
                "Minified React error #" +
                e +
                "; visit " +
                t +
                " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
        }
        function x() {}
        var k = {
                d: {
                    f: x,
                    r: function () {
                        throw Error(v(522));
                    },
                    D: x,
                    C: x,
                    L: x,
                    m: x,
                    X: x,
                    S: x,
                    M: x,
                },
                p: 0,
                findDOMNode: null,
            },
            w = Symbol.for("react.portal"),
            S =
                b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function E(e, t) {
            return "font" === e
                ? ""
                : "string" == typeof t
                  ? "use-credentials" === t
                      ? t
                      : ""
                  : void 0;
        }
        ((r = k),
            (l = function (e, t) {
                var n =
                    2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : null;
                if (
                    !t ||
                    (1 !== t.nodeType &&
                        9 !== t.nodeType &&
                        11 !== t.nodeType)
                )
                    throw Error(v(299));
                return (function (e, t, n) {
                    var r =
                        3 < arguments.length &&
                        void 0 !== arguments[3]
                            ? arguments[3]
                            : null;
                    return {
                        $$typeof: w,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n,
                    };
                })(e, t, null, n);
            }),
            (o = function (e) {
                var t = S.T,
                    n = k.p;
                try {
                    if (((S.T = null), (k.p = 2), e)) return e();
                } finally {
                    ((S.T = t), (k.p = n), k.d.f());
                }
            }),
            (i = function (e, t) {
                "string" == typeof e &&
                    ((t = t
                        ? "string" == typeof (t = t.crossOrigin)
                            ? "use-credentials" === t
                                ? t
                                : ""
                            : void 0
                        : null),
                    k.d.C(e, t));
            }),
            (s = function (e) {
                "string" == typeof e && k.d.D(e);
            }),
            (u = function (e, t) {
                if (
                    "string" == typeof e &&
                    t &&
                    "string" == typeof t.as
                ) {
                    var n = t.as,
                        r = E(n, t.crossOrigin),
                        l =
                            "string" == typeof t.integrity
                                ? t.integrity
                                : void 0,
                        a =
                            "string" == typeof t.fetchPriority
                                ? t.fetchPriority
                                : void 0;
                    "style" === n
                        ? k.d.S(
                              e,
                              "string" == typeof t.precedence
                                  ? t.precedence
                                  : void 0,
                              {
                                  crossOrigin: r,
                                  integrity: l,
                                  fetchPriority: a,
                              },
                          )
                        : "script" === n &&
                          k.d.X(e, {
                              crossOrigin: r,
                              integrity: l,
                              fetchPriority: a,
                              nonce:
                                  "string" == typeof t.nonce
                                      ? t.nonce
                                      : void 0,
                          });
                }
            }),
            (c = function (e, t) {
                if ("string" == typeof e)
                    if ("object" == typeof t && null !== t) {
                        if (null == t.as || "script" === t.as) {
                            var n = E(t.as, t.crossOrigin);
                            k.d.M(e, {
                                crossOrigin: n,
                                integrity:
                                    "string" == typeof t.integrity
                                        ? t.integrity
                                        : void 0,
                                nonce:
                                    "string" == typeof t.nonce
                                        ? t.nonce
                                        : void 0,
                            });
                        }
                    } else null == t && k.d.M(e);
            }),
            (d = function (e, t) {
                if (
                    "string" == typeof e &&
                    "object" == typeof t &&
                    null !== t &&
                    "string" == typeof t.as
                ) {
                    var n = t.as,
                        r = E(n, t.crossOrigin);
                    k.d.L(e, n, {
                        crossOrigin: r,
                        integrity:
                            "string" == typeof t.integrity
                                ? t.integrity
                                : void 0,
                        nonce:
                            "string" == typeof t.nonce
                                ? t.nonce
                                : void 0,
                        type:
                            "string" == typeof t.type
                                ? t.type
                                : void 0,
                        fetchPriority:
                            "string" == typeof t.fetchPriority
                                ? t.fetchPriority
                                : void 0,
                        referrerPolicy:
                            "string" == typeof t.referrerPolicy
                                ? t.referrerPolicy
                                : void 0,
                        imageSrcSet:
                            "string" == typeof t.imageSrcSet
                                ? t.imageSrcSet
                                : void 0,
                        imageSizes:
                            "string" == typeof t.imageSizes
                                ? t.imageSizes
                                : void 0,
                        media:
                            "string" == typeof t.media
                                ? t.media
                                : void 0,
                    });
                }
            }),
            (f = function (e, t) {
                if ("string" == typeof e)
                    if (t) {
                        var n = E(t.as, t.crossOrigin);
                        k.d.m(e, {
                            as:
                                "string" == typeof t.as &&
                                "script" !== t.as
                                    ? t.as
                                    : void 0,
                            crossOrigin: n,
                            integrity:
                                "string" == typeof t.integrity
                                    ? t.integrity
                                    : void 0,
                        });
                    } else k.d.m(e);
            }),
            (p = function (e) {
                k.d.r(e);
            }),
            (m = function (e, t) {
                return e(t);
            }),
            (h = function (e, t, n) {
                return S.H.useFormState(e, t, n);
            }),
            (g = function () {
                return S.H.useHostTransitionStatus();
            }),
            (y = "19.2.4"));
    }));
var i = {};
i = a("j8mK4");
var s = a("2xBnP"),
    u = {};
(!(function e() {
    if (
        "u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
            console.error(e);
        }
})(),
    (u = a("DUEQU")));
var s = (a("2xBnP"), a("2xBnP"), a("2xBnP"), a("2xBnP"));
a("8cavo");
var s = (a("2xBnP"), a("2xBnP"));
function c(e, t) {
    if ("function" == typeof e) return e(t);
    null != e && (e.current = t);
}
function d(...e) {
    return (t) => {
        let n = !1,
            r = e.map((e) => {
                let r = c(e, t);
                return (n || "function" != typeof r || (n = !0), r);
            });
        if (n)
            return () => {
                for (let t = 0; t < r.length; t++) {
                    let n = r[t];
                    "function" == typeof n ? n() : c(e[t], null);
                }
            };
    };
}
function f(...e) {
    return s.useCallback(d(...e), e);
}
var p = Symbol.for("react.lazy"),
    m = s[" use ".trim().toString()];
function h(e) {
    var t;
    return (
        null != e &&
        "object" == typeof e &&
        "$$typeof" in e &&
        e.$$typeof === p &&
        "_payload" in e &&
        "object" == typeof (t = e._payload) &&
        null !== t &&
        "then" in t
    );
}
var g = Symbol("radix.slottable");
function y(e) {
    return (
        s.isValidElement(e) &&
        "function" == typeof e.type &&
        "__radixId" in e.type &&
        e.type.__radixId === g
    );
}
var b = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
    ].reduce((e, t) => {
        var n, r;
        let l,
            a,
            o,
            u =
                ((r = n = `Primitive.${t}`),
                ((l = s.forwardRef((e, t) => {
                    let { children: n, ...r } = e;
                    if (
                        (h(n) &&
                            "function" == typeof m &&
                            (n = m(n._payload)),
                        s.isValidElement(n))
                    ) {
                        var l;
                        let e,
                            a,
                            o =
                                ((l = n),
                                (a =
                                    (e =
                                        Object.getOwnPropertyDescriptor(
                                            l.props,
                                            "ref",
                                        )?.get) &&
                                    "isReactWarning" in e &&
                                    e.isReactWarning)
                                    ? l.ref
                                    : (a =
                                            (e =
                                                Object.getOwnPropertyDescriptor(
                                                    l,
                                                    "ref",
                                                )?.get) &&
                                            "isReactWarning" in e &&
                                            e.isReactWarning)
                                      ? l.props.ref
                                      : l.props.ref || l.ref),
                            i = (function (e, t) {
                                let n = { ...t };
                                for (let r in t) {
                                    let l = e[r],
                                        a = t[r];
                                    /^on[A-Z]/.test(r)
                                        ? l && a
                                            ? (n[r] = (...e) => {
                                                  let t = a(...e);
                                                  return (
                                                      l(...e),
                                                      t
                                                  );
                                              })
                                            : l && (n[r] = l)
                                        : "style" === r
                                          ? (n[r] = { ...l, ...a })
                                          : "className" === r &&
                                            (n[r] = [l, a]
                                                .filter(Boolean)
                                                .join(" "));
                                }
                                return { ...e, ...n };
                            })(r, n.props);
                        return (
                            n.type !== s.Fragment &&
                                (i.ref = t ? d(t, o) : o),
                            s.cloneElement(n, i)
                        );
                    }
                    return s.Children.count(n) > 1
                        ? s.Children.only(null)
                        : null;
                })).displayName = `${r}.SlotClone`),
                (a = l),
                ((o = s.forwardRef((e, t) => {
                    let { children: n, ...r } = e;
                    h(n) &&
                        "function" == typeof m &&
                        (n = m(n._payload));
                    let l = s.Children.toArray(n),
                        o = l.find(y);
                    if (o) {
                        let e = o.props.children,
                            n = l.map((t) =>
                                t !== o
                                    ? t
                                    : s.Children.count(e) > 1
                                      ? s.Children.only(null)
                                      : s.isValidElement(e)
                                        ? e.props.children
                                        : null,
                            );
                        return (0, i.jsx)(a, {
                            ...r,
                            ref: t,
                            children: s.isValidElement(e)
                                ? s.cloneElement(e, void 0, n)
                                : null,
                        });
                    }
                    return (0, i.jsx)(a, {
                        ...r,
                        ref: t,
                        children: n,
                    });
                })).displayName = `${n}.Slot`),
                o),
            c = s.forwardRef((e, n) => {
                let { asChild: r, ...l } = e;
                return (
                    "u" > typeof window &&
                        (window[Symbol.for("radix-ui")] = !0),
                    (0, i.jsx)(r ? u : t, { ...l, ref: n })
                );
            });
        return (
            (c.displayName = `Primitive.${t}`),
            { ...e, [t]: c }
        );
    }, {}),
    v = "horizontal",
    x = ["horizontal", "vertical"],
    k = s.forwardRef((e, t) => {
        var n;
        let { decorative: r, orientation: l = v, ...a } = e,
            o = ((n = l), x.includes(n)) ? l : v;
        return (0, i.jsx)(b.div, {
            "data-orientation": o,
            ...(r
                ? { role: "none" }
                : {
                      "aria-orientation":
                          "vertical" === o ? o : void 0,
                      role: "separator",
                  }),
            ...a,
            ref: t,
        });
    });
k.displayName = "Separator";
var w = {};
Object.defineProperty(w, Symbol.toStringTag, { value: "Module" });
let S = (e = new Map(), t = null, n) => ({
        nextPart: e,
        validators: t,
        classGroupId: n,
    }),
    E = [],
    C = (e, t, n) => {
        if (0 == e.length - t) return n.classGroupId;
        let r = e[t],
            l = n.nextPart.get(r);
        if (l) {
            let n = C(e, t + 1, l);
            if (n) return n;
        }
        let a = n.validators;
        if (null === a) return;
        let o = 0 === t ? e.join("-") : e.slice(t).join("-"),
            i = a.length;
        for (let e = 0; e < i; e++) {
            let t = a[e];
            if (t.validator(o)) return t.classGroupId;
        }
    },
    N = (e, t) => {
        let n = S();
        for (let r in e) z(e[r], n, r, t);
        return n;
    },
    z = (e, t, n, r) => {
        let l = e.length;
        for (let a = 0; a < l; a++) F(e[a], t, n, r);
    },
    F = (e, t, n, r) => {
        "string" == typeof e
            ? P(e, t, n)
            : "function" == typeof e
              ? _(e, t, n, r)
              : T(e, t, n, r);
    },
    P = (e, t, n) => {
        ("" === e ? t : A(t, e)).classGroupId = n;
    },
    _ = (e, t, n, r) => {
        j(e)
            ? z(e(r), t, n, r)
            : (null === t.validators && (t.validators = []),
              t.validators.push({ classGroupId: n, validator: e }));
    },
    T = (e, t, n, r) => {
        let l = Object.entries(e),
            a = l.length;
        for (let e = 0; e < a; e++) {
            let [a, o] = l[e];
            z(o, A(t, a), n, r);
        }
    },
    A = (e, t) => {
        let n = e,
            r = t.split("-"),
            l = r.length;
        for (let e = 0; e < l; e++) {
            let t = r[e],
                l = n.nextPart.get(t);
            (l || ((l = S()), n.nextPart.set(t, l)), (n = l));
        }
        return n;
    },
    j = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
    L = [],
    O = (e, t, n, r, l) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: n,
        maybePostfixModifierPosition: r,
        isExternal: l,
    }),
    D = /\s+/,
    M = (...e) => {
        let t,
            n,
            r = 0,
            l = "";
        for (; r < e.length; )
            (t = e[r++]) &&
                (n = R(t)) &&
                (l && (l += " "), (l += n));
        return l;
    },
    R = (e) => {
        let t;
        if ("string" == typeof e) return e;
        let n = "";
        for (let r = 0; r < e.length; r++)
            e[r] && (t = R(e[r])) && (n && (n += " "), (n += t));
        return n;
    },
    B = (e, ...t) => {
        let n,
            r,
            l,
            a,
            o = (e) => {
                let t = r(e);
                if (t) return t;
                let a = ((e, t) => {
                    let {
                            parseClassName: n,
                            getClassGroupId: r,
                            getConflictingClassGroupIds: l,
                            sortModifiers: a,
                        } = t,
                        o = [],
                        i = e.trim().split(D),
                        s = "";
                    for (let e = i.length - 1; e >= 0; e -= 1) {
                        let t = i[e],
                            {
                                isExternal: u,
                                modifiers: c,
                                hasImportantModifier: d,
                                baseClassName: f,
                                maybePostfixModifierPosition: p,
                            } = n(t);
                        if (u) {
                            s = t + (s.length > 0 ? " " + s : s);
                            continue;
                        }
                        let m = !!p,
                            h = r(m ? f.substring(0, p) : f);
                        if (!h) {
                            if (!m || !(h = r(f))) {
                                s =
                                    t +
                                    (s.length > 0 ? " " + s : s);
                                continue;
                            }
                            m = !1;
                        }
                        let g =
                                0 === c.length
                                    ? ""
                                    : 1 === c.length
                                      ? c[0]
                                      : a(c).join(":"),
                            y = d ? g + "!" : g,
                            b = y + h;
                        if (o.indexOf(b) > -1) continue;
                        o.push(b);
                        let v = l(h, m);
                        for (let e = 0; e < v.length; ++e) {
                            let t = v[e];
                            o.push(y + t);
                        }
                        s = t + (s.length > 0 ? " " + s : s);
                    }
                    return s;
                })(e, n);
                return (l(e, a), a);
            };
        return (
            (a = (i) => {
                var s;
                let u;
                return (
                    (r = (n = {
                        cache: ((e) => {
                            if (e < 1)
                                return {
                                    get: () => void 0,
                                    set: () => {},
                                };
                            let t = 0,
                                n = Object.create(null),
                                r = Object.create(null),
                                l = (l, a) => {
                                    ((n[l] = a),
                                        ++t > e &&
                                            ((t = 0),
                                            (r = n),
                                            (n =
                                                Object.create(
                                                    null,
                                                ))));
                                };
                            return {
                                get(e) {
                                    let t = n[e];
                                    return void 0 !== t
                                        ? t
                                        : void 0 !== (t = r[e])
                                          ? (l(e, t), t)
                                          : void 0;
                                },
                                set(e, t) {
                                    e in n ? (n[e] = t) : l(e, t);
                                },
                            };
                        })(
                            (s = t.reduce((e, t) => t(e), e()))
                                .cacheSize,
                        ),
                        parseClassName: ((e) => {
                            let {
                                    prefix: t,
                                    experimentalParseClassName: n,
                                } = e,
                                r = (e) => {
                                    let t,
                                        n = [],
                                        r = 0,
                                        l = 0,
                                        a = 0,
                                        o = e.length;
                                    for (let i = 0; i < o; i++) {
                                        let o = e[i];
                                        if (0 === r && 0 === l) {
                                            if (":" === o) {
                                                (n.push(
                                                    e.slice(a, i),
                                                ),
                                                    (a = i + 1));
                                                continue;
                                            }
                                            if ("/" === o) {
                                                t = i;
                                                continue;
                                            }
                                        }
                                        "[" === o
                                            ? r++
                                            : "]" === o
                                              ? r--
                                              : "(" === o
                                                ? l++
                                                : ")" === o && l--;
                                    }
                                    let i =
                                            0 === n.length
                                                ? e
                                                : e.slice(a),
                                        s = i,
                                        u = !1;
                                    return (
                                        i.endsWith("!")
                                            ? ((s = i.slice(0, -1)),
                                              (u = !0))
                                            : i.startsWith("!") &&
                                              ((s = i.slice(1)),
                                              (u = !0)),
                                        O(
                                            n,
                                            u,
                                            s,
                                            t && t > a
                                                ? t - a
                                                : void 0,
                                        )
                                    );
                                };
                            if (t) {
                                let e = t + ":",
                                    n = r;
                                r = (t) =>
                                    t.startsWith(e)
                                        ? n(t.slice(e.length))
                                        : O(L, !1, t, void 0, !0);
                            }
                            if (n) {
                                let e = r;
                                r = (t) =>
                                    n({
                                        className: t,
                                        parseClassName: e,
                                    });
                            }
                            return r;
                        })(s),
                        sortModifiers:
                            ((u = new Map()),
                            s.orderSensitiveModifiers.forEach(
                                (e, t) => {
                                    u.set(e, 1e6 + t);
                                },
                            ),
                            (e) => {
                                let t = [],
                                    n = [];
                                for (let r = 0; r < e.length; r++) {
                                    let l = e[r],
                                        a = "[" === l[0],
                                        o = u.has(l);
                                    a || o
                                        ? (n.length > 0 &&
                                              (n.sort(),
                                              t.push(...n),
                                              (n = [])),
                                          t.push(l))
                                        : n.push(l);
                                }
                                return (
                                    n.length > 0 &&
                                        (n.sort(), t.push(...n)),
                                    t
                                );
                            }),
                        ...((e) => {
                            let t = ((e) => {
                                    let {
                                        theme: t,
                                        classGroups: n,
                                    } = e;
                                    return N(n, t);
                                })(e),
                                {
                                    conflictingClassGroups: n,
                                    conflictingClassGroupModifiers:
                                        r,
                                } = e;
                            return {
                                getClassGroupId: (e) => {
                                    if (
                                        e.startsWith("[") &&
                                        e.endsWith("]")
                                    ) {
                                        var n;
                                        let t, r, l;
                                        return -1 ===
                                            (n = e)
                                                .slice(1, -1)
                                                .indexOf(":")
                                            ? void 0
                                            : ((r = (t = n.slice(
                                                  1,
                                                  -1,
                                              )).indexOf(":")),
                                              (l = t.slice(0, r))
                                                  ? "arbitrary.." +
                                                    l
                                                  : void 0);
                                    }
                                    let r = e.split("-"),
                                        l = +(
                                            "" === r[0] &&
                                            r.length > 1
                                        );
                                    return C(r, l, t);
                                },
                                getConflictingClassGroupIds: (
                                    e,
                                    t,
                                ) => {
                                    if (t) {
                                        let t = r[e],
                                            l = n[e];
                                        if (t) {
                                            if (l) {
                                                let e = Array(
                                                    l.length +
                                                        t.length,
                                                );
                                                for (
                                                    let t = 0;
                                                    t < l.length;
                                                    t++
                                                )
                                                    e[t] = l[t];
                                                for (
                                                    let n = 0;
                                                    n < t.length;
                                                    n++
                                                )
                                                    e[
                                                        l.length + n
                                                    ] = t[n];
                                                return e;
                                            }
                                            return t;
                                        }
                                        return l || E;
                                    }
                                    return n[e] || E;
                                },
                            };
                        })(s),
                    }).cache.get),
                    (l = n.cache.set),
                    (a = o),
                    o(i)
                );
            }),
            (...e) => a(M(...e))
        );
    },
    I = [],
    $ = (e) => {
        let t = (t) => t[e] || I;
        return ((t.isThemeGetter = !0), t);
    },
    U = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    H = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    V = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    W = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Q =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    q = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    G =
        /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    K =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Y = (e) => V.test(e),
    X = (e) => !!e && !Number.isNaN(Number(e)),
    Z = (e) => !!e && Number.isInteger(Number(e)),
    J = (e) => e.endsWith("%") && X(e.slice(0, -1)),
    ee = (e) => W.test(e),
    et = () => !0,
    en = (e) => Q.test(e) && !q.test(e),
    er = () => !1,
    el = (e) => G.test(e),
    ea = (e) => K.test(e),
    eo = (e) => !es(e) && !eg(e),
    ei = (e) => eE(e, eF, er),
    es = (e) => U.test(e),
    eu = (e) => eE(e, eP, en),
    ec = (e) => eE(e, e_, X),
    ed = (e) => eE(e, eA, et),
    ef = (e) => eE(e, eT, er),
    ep = (e) => eE(e, eN, er),
    em = (e) => eE(e, ez, ea),
    eh = (e) => eE(e, ej, el),
    eg = (e) => H.test(e),
    ey = (e) => eC(e, eP),
    eb = (e) => eC(e, eT),
    ev = (e) => eC(e, eN),
    ex = (e) => eC(e, eF),
    ek = (e) => eC(e, ez),
    ew = (e) => eC(e, ej, !0),
    eS = (e) => eC(e, eA, !0),
    eE = (e, t, n) => {
        let r = U.exec(e);
        return !!r && (r[1] ? t(r[1]) : n(r[2]));
    },
    eC = (e, t, n = !1) => {
        let r = H.exec(e);
        return !!r && (r[1] ? t(r[1]) : n);
    },
    eN = (e) => "position" === e || "percentage" === e,
    ez = (e) => "image" === e || "url" === e,
    eF = (e) => "length" === e || "size" === e || "bg-size" === e,
    eP = (e) => "length" === e,
    e_ = (e) => "number" === e,
    eT = (e) => "family-name" === e,
    eA = (e) => "number" === e || "weight" === e,
    ej = (e) => "shadow" === e,
    eL = Object.defineProperty(
        {
            __proto__: null,
            isAny: et,
            isAnyNonArbitrary: eo,
            isArbitraryFamilyName: ef,
            isArbitraryImage: em,
            isArbitraryLength: eu,
            isArbitraryNumber: ec,
            isArbitraryPosition: ep,
            isArbitraryShadow: eh,
            isArbitrarySize: ei,
            isArbitraryValue: es,
            isArbitraryVariable: eg,
            isArbitraryVariableFamilyName: eb,
            isArbitraryVariableImage: ek,
            isArbitraryVariableLength: ey,
            isArbitraryVariablePosition: ev,
            isArbitraryVariableShadow: ew,
            isArbitraryVariableSize: ex,
            isArbitraryVariableWeight: eS,
            isArbitraryWeight: ed,
            isFraction: Y,
            isInteger: Z,
            isNumber: X,
            isPercent: J,
            isTshirtSize: ee,
        },
        Symbol.toStringTag,
        { value: "Module" },
    ),
    eO = () => {
        let e = $("color"),
            t = $("font"),
            n = $("text"),
            r = $("font-weight"),
            l = $("tracking"),
            a = $("leading"),
            o = $("breakpoint"),
            i = $("container"),
            s = $("spacing"),
            u = $("radius"),
            c = $("shadow"),
            d = $("inset-shadow"),
            f = $("text-shadow"),
            p = $("drop-shadow"),
            m = $("blur"),
            h = $("perspective"),
            g = $("aspect"),
            y = $("ease"),
            b = $("animate"),
            v = () => [
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column",
            ],
            x = () => [
                "center",
                "top",
                "bottom",
                "left",
                "right",
                "top-left",
                "left-top",
                "top-right",
                "right-top",
                "bottom-right",
                "right-bottom",
                "bottom-left",
                "left-bottom",
            ],
            k = () => [...x(), eg, es],
            w = () => [
                "auto",
                "hidden",
                "clip",
                "visible",
                "scroll",
            ],
            S = () => ["auto", "contain", "none"],
            E = () => [eg, es, s],
            C = () => [Y, "full", "auto", ...E()],
            N = () => [Z, "none", "subgrid", eg, es],
            z = () => [
                "auto",
                { span: ["full", Z, eg, es] },
                Z,
                eg,
                es,
            ],
            F = () => [Z, "auto", eg, es],
            P = () => ["auto", "min", "max", "fr", eg, es],
            _ = () => [
                "start",
                "end",
                "center",
                "between",
                "around",
                "evenly",
                "stretch",
                "baseline",
                "center-safe",
                "end-safe",
            ],
            T = () => [
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe",
            ],
            A = () => ["auto", ...E()],
            j = () => [
                Y,
                "auto",
                "full",
                "dvw",
                "dvh",
                "lvw",
                "lvh",
                "svw",
                "svh",
                "min",
                "max",
                "fit",
                ...E(),
            ],
            L = () => [
                Y,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ...E(),
            ],
            O = () => [
                Y,
                "screen",
                "full",
                "lh",
                "dvh",
                "lvh",
                "svh",
                "min",
                "max",
                "fit",
                ...E(),
            ],
            D = () => [e, eg, es],
            M = () => [...x(), ev, ep, { position: [eg, es] }],
            R = () => [
                "no-repeat",
                { repeat: ["", "x", "y", "space", "round"] },
            ],
            B = () => [
                "auto",
                "cover",
                "contain",
                ex,
                ei,
                { size: [eg, es] },
            ],
            I = () => [J, ey, eu],
            U = () => ["", "none", "full", u, eg, es],
            H = () => ["", X, ey, eu],
            V = () => ["solid", "dashed", "dotted", "double"],
            W = () => [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
            ],
            Q = () => [X, J, ev, ep],
            q = () => ["", "none", m, eg, es],
            G = () => ["none", X, eg, es],
            K = () => ["none", X, eg, es],
            en = () => [X, eg, es],
            er = () => [Y, "full", ...E()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [ee],
                breakpoint: [ee],
                color: [et],
                container: [ee],
                "drop-shadow": [ee],
                ease: ["in", "out", "in-out"],
                font: [eo],
                "font-weight": [
                    "thin",
                    "extralight",
                    "light",
                    "normal",
                    "medium",
                    "semibold",
                    "bold",
                    "extrabold",
                    "black",
                ],
                "inset-shadow": [ee],
                leading: [
                    "none",
                    "tight",
                    "snug",
                    "normal",
                    "relaxed",
                    "loose",
                ],
                perspective: [
                    "dramatic",
                    "near",
                    "normal",
                    "midrange",
                    "distant",
                    "none",
                ],
                radius: [ee],
                shadow: [ee],
                spacing: ["px", X],
                text: [ee],
                "text-shadow": [ee],
                tracking: [
                    "tighter",
                    "tight",
                    "normal",
                    "wide",
                    "wider",
                    "widest",
                ],
            },
            classGroups: {
                aspect: [
                    { aspect: ["auto", "square", Y, es, eg, g] },
                ],
                container: ["container"],
                columns: [{ columns: [X, es, eg, i] }],
                "break-after": [{ "break-after": v() }],
                "break-before": [{ "break-before": v() }],
                "break-inside": [
                    {
                        "break-inside": [
                            "auto",
                            "avoid",
                            "avoid-page",
                            "avoid-column",
                        ],
                    },
                ],
                "box-decoration": [
                    { "box-decoration": ["slice", "clone"] },
                ],
                box: [{ box: ["border", "content"] }],
                display: [
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "table",
                    "inline-table",
                    "table-caption",
                    "table-cell",
                    "table-column",
                    "table-column-group",
                    "table-footer-group",
                    "table-header-group",
                    "table-row-group",
                    "table-row",
                    "flow-root",
                    "grid",
                    "inline-grid",
                    "contents",
                    "list-item",
                    "hidden",
                ],
                sr: ["sr-only", "not-sr-only"],
                float: [
                    {
                        float: [
                            "right",
                            "left",
                            "none",
                            "start",
                            "end",
                        ],
                    },
                ],
                clear: [
                    {
                        clear: [
                            "left",
                            "right",
                            "both",
                            "none",
                            "start",
                            "end",
                        ],
                    },
                ],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [
                    {
                        object: [
                            "contain",
                            "cover",
                            "fill",
                            "none",
                            "scale-down",
                        ],
                    },
                ],
                "object-position": [{ object: k() }],
                overflow: [{ overflow: w() }],
                "overflow-x": [{ "overflow-x": w() }],
                "overflow-y": [{ "overflow-y": w() }],
                overscroll: [{ overscroll: S() }],
                "overscroll-x": [{ "overscroll-x": S() }],
                "overscroll-y": [{ "overscroll-y": S() }],
                position: [
                    "static",
                    "fixed",
                    "absolute",
                    "relative",
                    "sticky",
                ],
                inset: [{ inset: C() }],
                "inset-x": [{ "inset-x": C() }],
                "inset-y": [{ "inset-y": C() }],
                start: [{ "inset-s": C(), start: C() }],
                end: [{ "inset-e": C(), end: C() }],
                "inset-bs": [{ "inset-bs": C() }],
                "inset-be": [{ "inset-be": C() }],
                top: [{ top: C() }],
                right: [{ right: C() }],
                bottom: [{ bottom: C() }],
                left: [{ left: C() }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: [Z, "auto", eg, es] }],
                basis: [{ basis: [Y, "full", "auto", i, ...E()] }],
                "flex-direction": [
                    {
                        flex: [
                            "row",
                            "row-reverse",
                            "col",
                            "col-reverse",
                        ],
                    },
                ],
                "flex-wrap": [
                    { flex: ["nowrap", "wrap", "wrap-reverse"] },
                ],
                flex: [
                    { flex: [X, Y, "auto", "initial", "none", es] },
                ],
                grow: [{ grow: ["", X, eg, es] }],
                shrink: [{ shrink: ["", X, eg, es] }],
                order: [
                    { order: [Z, "first", "last", "none", eg, es] },
                ],
                "grid-cols": [{ "grid-cols": N() }],
                "col-start-end": [{ col: z() }],
                "col-start": [{ "col-start": F() }],
                "col-end": [{ "col-end": F() }],
                "grid-rows": [{ "grid-rows": N() }],
                "row-start-end": [{ row: z() }],
                "row-start": [{ "row-start": F() }],
                "row-end": [{ "row-end": F() }],
                "grid-flow": [
                    {
                        "grid-flow": [
                            "row",
                            "col",
                            "dense",
                            "row-dense",
                            "col-dense",
                        ],
                    },
                ],
                "auto-cols": [{ "auto-cols": P() }],
                "auto-rows": [{ "auto-rows": P() }],
                gap: [{ gap: E() }],
                "gap-x": [{ "gap-x": E() }],
                "gap-y": [{ "gap-y": E() }],
                "justify-content": [
                    { justify: [..._(), "normal"] },
                ],
                "justify-items": [
                    { "justify-items": [...T(), "normal"] },
                ],
                "justify-self": [
                    { "justify-self": ["auto", ...T()] },
                ],
                "align-content": [{ content: ["normal", ..._()] }],
                "align-items": [
                    { items: [...T(), { baseline: ["", "last"] }] },
                ],
                "align-self": [
                    {
                        self: [
                            "auto",
                            ...T(),
                            { baseline: ["", "last"] },
                        ],
                    },
                ],
                "place-content": [{ "place-content": _() }],
                "place-items": [
                    { "place-items": [...T(), "baseline"] },
                ],
                "place-self": [{ "place-self": ["auto", ...T()] }],
                p: [{ p: E() }],
                px: [{ px: E() }],
                py: [{ py: E() }],
                ps: [{ ps: E() }],
                pe: [{ pe: E() }],
                pbs: [{ pbs: E() }],
                pbe: [{ pbe: E() }],
                pt: [{ pt: E() }],
                pr: [{ pr: E() }],
                pb: [{ pb: E() }],
                pl: [{ pl: E() }],
                m: [{ m: A() }],
                mx: [{ mx: A() }],
                my: [{ my: A() }],
                ms: [{ ms: A() }],
                me: [{ me: A() }],
                mbs: [{ mbs: A() }],
                mbe: [{ mbe: A() }],
                mt: [{ mt: A() }],
                mr: [{ mr: A() }],
                mb: [{ mb: A() }],
                ml: [{ ml: A() }],
                "space-x": [{ "space-x": E() }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": E() }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{ size: j() }],
                "inline-size": [{ inline: ["auto", ...L()] }],
                "min-inline-size": [
                    { "min-inline": ["auto", ...L()] },
                ],
                "max-inline-size": [
                    { "max-inline": ["none", ...L()] },
                ],
                "block-size": [{ block: ["auto", ...O()] }],
                "min-block-size": [
                    { "min-block": ["auto", ...O()] },
                ],
                "max-block-size": [
                    { "max-block": ["none", ...O()] },
                ],
                w: [{ w: [i, "screen", ...j()] }],
                "min-w": [
                    { "min-w": [i, "screen", "none", ...j()] },
                ],
                "max-w": [
                    {
                        "max-w": [
                            i,
                            "screen",
                            "none",
                            "prose",
                            { screen: [o] },
                            ...j(),
                        ],
                    },
                ],
                h: [{ h: ["screen", "lh", ...j()] }],
                "min-h": [
                    { "min-h": ["screen", "lh", "none", ...j()] },
                ],
                "max-h": [{ "max-h": ["screen", "lh", ...j()] }],
                "font-size": [{ text: ["base", n, ey, eu] }],
                "font-smoothing": [
                    "antialiased",
                    "subpixel-antialiased",
                ],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{ font: [r, eS, ed] }],
                "font-stretch": [
                    {
                        "font-stretch": [
                            "ultra-condensed",
                            "extra-condensed",
                            "condensed",
                            "semi-condensed",
                            "normal",
                            "semi-expanded",
                            "expanded",
                            "extra-expanded",
                            "ultra-expanded",
                            J,
                            es,
                        ],
                    },
                ],
                "font-family": [{ font: [eb, ef, t] }],
                "font-features": [{ "font-features": [es] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": [
                    "proportional-nums",
                    "tabular-nums",
                ],
                "fvn-fraction": [
                    "diagonal-fractions",
                    "stacked-fractions",
                ],
                tracking: [{ tracking: [l, eg, es] }],
                "line-clamp": [
                    { "line-clamp": [X, "none", eg, ec] },
                ],
                leading: [{ leading: [a, ...E()] }],
                "list-image": [{ "list-image": ["none", eg, es] }],
                "list-style-position": [
                    { list: ["inside", "outside"] },
                ],
                "list-style-type": [
                    { list: ["disc", "decimal", "none", eg, es] },
                ],
                "text-alignment": [
                    {
                        text: [
                            "left",
                            "center",
                            "right",
                            "justify",
                            "start",
                            "end",
                        ],
                    },
                ],
                "placeholder-color": [{ placeholder: D() }],
                "text-color": [{ text: D() }],
                "text-decoration": [
                    "underline",
                    "overline",
                    "line-through",
                    "no-underline",
                ],
                "text-decoration-style": [
                    { decoration: [...V(), "wavy"] },
                ],
                "text-decoration-thickness": [
                    {
                        decoration: [
                            X,
                            "from-font",
                            "auto",
                            eg,
                            eu,
                        ],
                    },
                ],
                "text-decoration-color": [{ decoration: D() }],
                "underline-offset": [
                    { "underline-offset": [X, "auto", eg, es] },
                ],
                "text-transform": [
                    "uppercase",
                    "lowercase",
                    "capitalize",
                    "normal-case",
                ],
                "text-overflow": [
                    "truncate",
                    "text-ellipsis",
                    "text-clip",
                ],
                "text-wrap": [
                    {
                        text: [
                            "wrap",
                            "nowrap",
                            "balance",
                            "pretty",
                        ],
                    },
                ],
                indent: [{ indent: E() }],
                "vertical-align": [
                    {
                        align: [
                            "baseline",
                            "top",
                            "middle",
                            "bottom",
                            "text-top",
                            "text-bottom",
                            "sub",
                            "super",
                            eg,
                            es,
                        ],
                    },
                ],
                whitespace: [
                    {
                        whitespace: [
                            "normal",
                            "nowrap",
                            "pre",
                            "pre-line",
                            "pre-wrap",
                            "break-spaces",
                        ],
                    },
                ],
                break: [
                    { break: ["normal", "words", "all", "keep"] },
                ],
                wrap: [
                    { wrap: ["break-word", "anywhere", "normal"] },
                ],
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", eg, es] }],
                "bg-attachment": [
                    { bg: ["fixed", "local", "scroll"] },
                ],
                "bg-clip": [
                    {
                        "bg-clip": [
                            "border",
                            "padding",
                            "content",
                            "text",
                        ],
                    },
                ],
                "bg-origin": [
                    {
                        "bg-origin": [
                            "border",
                            "padding",
                            "content",
                        ],
                    },
                ],
                "bg-position": [{ bg: M() }],
                "bg-repeat": [{ bg: R() }],
                "bg-size": [{ bg: B() }],
                "bg-image": [
                    {
                        bg: [
                            "none",
                            {
                                linear: [
                                    {
                                        to: [
                                            "t",
                                            "tr",
                                            "r",
                                            "br",
                                            "b",
                                            "bl",
                                            "l",
                                            "tl",
                                        ],
                                    },
                                    Z,
                                    eg,
                                    es,
                                ],
                                radial: ["", eg, es],
                                conic: [Z, eg, es],
                            },
                            ek,
                            em,
                        ],
                    },
                ],
                "bg-color": [{ bg: D() }],
                "gradient-from-pos": [{ from: I() }],
                "gradient-via-pos": [{ via: I() }],
                "gradient-to-pos": [{ to: I() }],
                "gradient-from": [{ from: D() }],
                "gradient-via": [{ via: D() }],
                "gradient-to": [{ to: D() }],
                rounded: [{ rounded: U() }],
                "rounded-s": [{ "rounded-s": U() }],
                "rounded-e": [{ "rounded-e": U() }],
                "rounded-t": [{ "rounded-t": U() }],
                "rounded-r": [{ "rounded-r": U() }],
                "rounded-b": [{ "rounded-b": U() }],
                "rounded-l": [{ "rounded-l": U() }],
                "rounded-ss": [{ "rounded-ss": U() }],
                "rounded-se": [{ "rounded-se": U() }],
                "rounded-ee": [{ "rounded-ee": U() }],
                "rounded-es": [{ "rounded-es": U() }],
                "rounded-tl": [{ "rounded-tl": U() }],
                "rounded-tr": [{ "rounded-tr": U() }],
                "rounded-br": [{ "rounded-br": U() }],
                "rounded-bl": [{ "rounded-bl": U() }],
                "border-w": [{ border: H() }],
                "border-w-x": [{ "border-x": H() }],
                "border-w-y": [{ "border-y": H() }],
                "border-w-s": [{ "border-s": H() }],
                "border-w-e": [{ "border-e": H() }],
                "border-w-bs": [{ "border-bs": H() }],
                "border-w-be": [{ "border-be": H() }],
                "border-w-t": [{ "border-t": H() }],
                "border-w-r": [{ "border-r": H() }],
                "border-w-b": [{ "border-b": H() }],
                "border-w-l": [{ "border-l": H() }],
                "divide-x": [{ "divide-x": H() }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": H() }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [
                    { border: [...V(), "hidden", "none"] },
                ],
                "divide-style": [
                    { divide: [...V(), "hidden", "none"] },
                ],
                "border-color": [{ border: D() }],
                "border-color-x": [{ "border-x": D() }],
                "border-color-y": [{ "border-y": D() }],
                "border-color-s": [{ "border-s": D() }],
                "border-color-e": [{ "border-e": D() }],
                "border-color-bs": [{ "border-bs": D() }],
                "border-color-be": [{ "border-be": D() }],
                "border-color-t": [{ "border-t": D() }],
                "border-color-r": [{ "border-r": D() }],
                "border-color-b": [{ "border-b": D() }],
                "border-color-l": [{ "border-l": D() }],
                "divide-color": [{ divide: D() }],
                "outline-style": [
                    { outline: [...V(), "none", "hidden"] },
                ],
                "outline-offset": [
                    { "outline-offset": [X, eg, es] },
                ],
                "outline-w": [{ outline: ["", X, ey, eu] }],
                "outline-color": [{ outline: D() }],
                shadow: [{ shadow: ["", "none", c, ew, eh] }],
                "shadow-color": [{ shadow: D() }],
                "inset-shadow": [
                    { "inset-shadow": ["none", d, ew, eh] },
                ],
                "inset-shadow-color": [{ "inset-shadow": D() }],
                "ring-w": [{ ring: H() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: D() }],
                "ring-offset-w": [{ "ring-offset": [X, eu] }],
                "ring-offset-color": [{ "ring-offset": D() }],
                "inset-ring-w": [{ "inset-ring": H() }],
                "inset-ring-color": [{ "inset-ring": D() }],
                "text-shadow": [
                    { "text-shadow": ["none", f, ew, eh] },
                ],
                "text-shadow-color": [{ "text-shadow": D() }],
                opacity: [{ opacity: [X, eg, es] }],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...W(),
                            "plus-darker",
                            "plus-lighter",
                        ],
                    },
                ],
                "bg-blend": [{ "bg-blend": W() }],
                "mask-clip": [
                    {
                        "mask-clip": [
                            "border",
                            "padding",
                            "content",
                            "fill",
                            "stroke",
                            "view",
                        ],
                    },
                    "mask-no-clip",
                ],
                "mask-composite": [
                    {
                        mask: [
                            "add",
                            "subtract",
                            "intersect",
                            "exclude",
                        ],
                    },
                ],
                "mask-image-linear-pos": [{ "mask-linear": [X] }],
                "mask-image-linear-from-pos": [
                    { "mask-linear-from": Q() },
                ],
                "mask-image-linear-to-pos": [
                    { "mask-linear-to": Q() },
                ],
                "mask-image-linear-from-color": [
                    { "mask-linear-from": D() },
                ],
                "mask-image-linear-to-color": [
                    { "mask-linear-to": D() },
                ],
                "mask-image-t-from-pos": [{ "mask-t-from": Q() }],
                "mask-image-t-to-pos": [{ "mask-t-to": Q() }],
                "mask-image-t-from-color": [{ "mask-t-from": D() }],
                "mask-image-t-to-color": [{ "mask-t-to": D() }],
                "mask-image-r-from-pos": [{ "mask-r-from": Q() }],
                "mask-image-r-to-pos": [{ "mask-r-to": Q() }],
                "mask-image-r-from-color": [{ "mask-r-from": D() }],
                "mask-image-r-to-color": [{ "mask-r-to": D() }],
                "mask-image-b-from-pos": [{ "mask-b-from": Q() }],
                "mask-image-b-to-pos": [{ "mask-b-to": Q() }],
                "mask-image-b-from-color": [{ "mask-b-from": D() }],
                "mask-image-b-to-color": [{ "mask-b-to": D() }],
                "mask-image-l-from-pos": [{ "mask-l-from": Q() }],
                "mask-image-l-to-pos": [{ "mask-l-to": Q() }],
                "mask-image-l-from-color": [{ "mask-l-from": D() }],
                "mask-image-l-to-color": [{ "mask-l-to": D() }],
                "mask-image-x-from-pos": [{ "mask-x-from": Q() }],
                "mask-image-x-to-pos": [{ "mask-x-to": Q() }],
                "mask-image-x-from-color": [{ "mask-x-from": D() }],
                "mask-image-x-to-color": [{ "mask-x-to": D() }],
                "mask-image-y-from-pos": [{ "mask-y-from": Q() }],
                "mask-image-y-to-pos": [{ "mask-y-to": Q() }],
                "mask-image-y-from-color": [{ "mask-y-from": D() }],
                "mask-image-y-to-color": [{ "mask-y-to": D() }],
                "mask-image-radial": [{ "mask-radial": [eg, es] }],
                "mask-image-radial-from-pos": [
                    { "mask-radial-from": Q() },
                ],
                "mask-image-radial-to-pos": [
                    { "mask-radial-to": Q() },
                ],
                "mask-image-radial-from-color": [
                    { "mask-radial-from": D() },
                ],
                "mask-image-radial-to-color": [
                    { "mask-radial-to": D() },
                ],
                "mask-image-radial-shape": [
                    { "mask-radial": ["circle", "ellipse"] },
                ],
                "mask-image-radial-size": [
                    {
                        "mask-radial": [
                            {
                                closest: ["side", "corner"],
                                farthest: ["side", "corner"],
                            },
                        ],
                    },
                ],
                "mask-image-radial-pos": [
                    { "mask-radial-at": x() },
                ],
                "mask-image-conic-pos": [{ "mask-conic": [X] }],
                "mask-image-conic-from-pos": [
                    { "mask-conic-from": Q() },
                ],
                "mask-image-conic-to-pos": [
                    { "mask-conic-to": Q() },
                ],
                "mask-image-conic-from-color": [
                    { "mask-conic-from": D() },
                ],
                "mask-image-conic-to-color": [
                    { "mask-conic-to": D() },
                ],
                "mask-mode": [
                    { mask: ["alpha", "luminance", "match"] },
                ],
                "mask-origin": [
                    {
                        "mask-origin": [
                            "border",
                            "padding",
                            "content",
                            "fill",
                            "stroke",
                            "view",
                        ],
                    },
                ],
                "mask-position": [{ mask: M() }],
                "mask-repeat": [{ mask: R() }],
                "mask-size": [{ mask: B() }],
                "mask-type": [
                    { "mask-type": ["alpha", "luminance"] },
                ],
                "mask-image": [{ mask: ["none", eg, es] }],
                filter: [{ filter: ["", "none", eg, es] }],
                blur: [{ blur: q() }],
                brightness: [{ brightness: [X, eg, es] }],
                contrast: [{ contrast: [X, eg, es] }],
                "drop-shadow": [
                    { "drop-shadow": ["", "none", p, ew, eh] },
                ],
                "drop-shadow-color": [{ "drop-shadow": D() }],
                grayscale: [{ grayscale: ["", X, eg, es] }],
                "hue-rotate": [{ "hue-rotate": [X, eg, es] }],
                invert: [{ invert: ["", X, eg, es] }],
                saturate: [{ saturate: [X, eg, es] }],
                sepia: [{ sepia: ["", X, eg, es] }],
                "backdrop-filter": [
                    { "backdrop-filter": ["", "none", eg, es] },
                ],
                "backdrop-blur": [{ "backdrop-blur": q() }],
                "backdrop-brightness": [
                    { "backdrop-brightness": [X, eg, es] },
                ],
                "backdrop-contrast": [
                    { "backdrop-contrast": [X, eg, es] },
                ],
                "backdrop-grayscale": [
                    { "backdrop-grayscale": ["", X, eg, es] },
                ],
                "backdrop-hue-rotate": [
                    { "backdrop-hue-rotate": [X, eg, es] },
                ],
                "backdrop-invert": [
                    { "backdrop-invert": ["", X, eg, es] },
                ],
                "backdrop-opacity": [
                    { "backdrop-opacity": [X, eg, es] },
                ],
                "backdrop-saturate": [
                    { "backdrop-saturate": [X, eg, es] },
                ],
                "backdrop-sepia": [
                    { "backdrop-sepia": ["", X, eg, es] },
                ],
                "border-collapse": [
                    { border: ["collapse", "separate"] },
                ],
                "border-spacing": [{ "border-spacing": E() }],
                "border-spacing-x": [{ "border-spacing-x": E() }],
                "border-spacing-y": [{ "border-spacing-y": E() }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [
                    {
                        transition: [
                            "",
                            "all",
                            "colors",
                            "opacity",
                            "shadow",
                            "transform",
                            "none",
                            eg,
                            es,
                        ],
                    },
                ],
                "transition-behavior": [
                    { transition: ["normal", "discrete"] },
                ],
                duration: [{ duration: [X, "initial", eg, es] }],
                ease: [{ ease: ["linear", "initial", y, eg, es] }],
                delay: [{ delay: [X, eg, es] }],
                animate: [{ animate: ["none", b, eg, es] }],
                backface: [{ backface: ["hidden", "visible"] }],
                perspective: [{ perspective: [h, eg, es] }],
                "perspective-origin": [
                    { "perspective-origin": k() },
                ],
                rotate: [{ rotate: G() }],
                "rotate-x": [{ "rotate-x": G() }],
                "rotate-y": [{ "rotate-y": G() }],
                "rotate-z": [{ "rotate-z": G() }],
                scale: [{ scale: K() }],
                "scale-x": [{ "scale-x": K() }],
                "scale-y": [{ "scale-y": K() }],
                "scale-z": [{ "scale-z": K() }],
                "scale-3d": ["scale-3d"],
                skew: [{ skew: en() }],
                "skew-x": [{ "skew-x": en() }],
                "skew-y": [{ "skew-y": en() }],
                transform: [
                    {
                        transform: [
                            eg,
                            es,
                            "",
                            "none",
                            "gpu",
                            "cpu",
                        ],
                    },
                ],
                "transform-origin": [{ origin: k() }],
                "transform-style": [{ transform: ["3d", "flat"] }],
                translate: [{ translate: er() }],
                "translate-x": [{ "translate-x": er() }],
                "translate-y": [{ "translate-y": er() }],
                "translate-z": [{ "translate-z": er() }],
                "translate-none": ["translate-none"],
                accent: [{ accent: D() }],
                appearance: [{ appearance: ["none", "auto"] }],
                "caret-color": [{ caret: D() }],
                "color-scheme": [
                    {
                        scheme: [
                            "normal",
                            "dark",
                            "light",
                            "light-dark",
                            "only-dark",
                            "only-light",
                        ],
                    },
                ],
                cursor: [
                    {
                        cursor: [
                            "auto",
                            "default",
                            "pointer",
                            "wait",
                            "text",
                            "move",
                            "help",
                            "not-allowed",
                            "none",
                            "context-menu",
                            "progress",
                            "cell",
                            "crosshair",
                            "vertical-text",
                            "alias",
                            "copy",
                            "no-drop",
                            "grab",
                            "grabbing",
                            "all-scroll",
                            "col-resize",
                            "row-resize",
                            "n-resize",
                            "e-resize",
                            "s-resize",
                            "w-resize",
                            "ne-resize",
                            "nw-resize",
                            "se-resize",
                            "sw-resize",
                            "ew-resize",
                            "ns-resize",
                            "nesw-resize",
                            "nwse-resize",
                            "zoom-in",
                            "zoom-out",
                            eg,
                            es,
                        ],
                    },
                ],
                "field-sizing": [
                    { "field-sizing": ["fixed", "content"] },
                ],
                "pointer-events": [
                    { "pointer-events": ["auto", "none"] },
                ],
                resize: [{ resize: ["none", "", "y", "x"] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": E() }],
                "scroll-mx": [{ "scroll-mx": E() }],
                "scroll-my": [{ "scroll-my": E() }],
                "scroll-ms": [{ "scroll-ms": E() }],
                "scroll-me": [{ "scroll-me": E() }],
                "scroll-mbs": [{ "scroll-mbs": E() }],
                "scroll-mbe": [{ "scroll-mbe": E() }],
                "scroll-mt": [{ "scroll-mt": E() }],
                "scroll-mr": [{ "scroll-mr": E() }],
                "scroll-mb": [{ "scroll-mb": E() }],
                "scroll-ml": [{ "scroll-ml": E() }],
                "scroll-p": [{ "scroll-p": E() }],
                "scroll-px": [{ "scroll-px": E() }],
                "scroll-py": [{ "scroll-py": E() }],
                "scroll-ps": [{ "scroll-ps": E() }],
                "scroll-pe": [{ "scroll-pe": E() }],
                "scroll-pbs": [{ "scroll-pbs": E() }],
                "scroll-pbe": [{ "scroll-pbe": E() }],
                "scroll-pt": [{ "scroll-pt": E() }],
                "scroll-pr": [{ "scroll-pr": E() }],
                "scroll-pb": [{ "scroll-pb": E() }],
                "scroll-pl": [{ "scroll-pl": E() }],
                "snap-align": [
                    {
                        snap: [
                            "start",
                            "end",
                            "center",
                            "align-none",
                        ],
                    },
                ],
                "snap-stop": [{ snap: ["normal", "always"] }],
                "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                "snap-strictness": [
                    { snap: ["mandatory", "proximity"] },
                ],
                touch: [
                    { touch: ["auto", "none", "manipulation"] },
                ],
                "touch-x": [
                    { "touch-pan": ["x", "left", "right"] },
                ],
                "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [
                    { select: ["none", "text", "all", "auto"] },
                ],
                "will-change": [
                    {
                        "will-change": [
                            "auto",
                            "scroll",
                            "contents",
                            "transform",
                            eg,
                            es,
                        ],
                    },
                ],
                fill: [{ fill: ["none", ...D()] }],
                "stroke-w": [{ stroke: [X, ey, eu, ec] }],
                stroke: [{ stroke: ["none", ...D()] }],
                "forced-color-adjust": [
                    { "forced-color-adjust": ["auto", "none"] },
                ],
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: [
                    "inset-x",
                    "inset-y",
                    "inset-bs",
                    "inset-be",
                    "start",
                    "end",
                    "top",
                    "right",
                    "bottom",
                    "left",
                ],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: [
                    "px",
                    "py",
                    "ps",
                    "pe",
                    "pbs",
                    "pbe",
                    "pt",
                    "pr",
                    "pb",
                    "pl",
                ],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: [
                    "mx",
                    "my",
                    "ms",
                    "me",
                    "mbs",
                    "mbe",
                    "mt",
                    "mr",
                    "mb",
                    "ml",
                ],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": [
                    "fvn-ordinal",
                    "fvn-slashed-zero",
                    "fvn-figure",
                    "fvn-spacing",
                    "fvn-fraction",
                ],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: [
                    "rounded-s",
                    "rounded-e",
                    "rounded-t",
                    "rounded-r",
                    "rounded-b",
                    "rounded-l",
                    "rounded-ss",
                    "rounded-se",
                    "rounded-ee",
                    "rounded-es",
                    "rounded-tl",
                    "rounded-tr",
                    "rounded-br",
                    "rounded-bl",
                ],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": [
                    "border-spacing-x",
                    "border-spacing-y",
                ],
                "border-w": [
                    "border-w-x",
                    "border-w-y",
                    "border-w-s",
                    "border-w-e",
                    "border-w-bs",
                    "border-w-be",
                    "border-w-t",
                    "border-w-r",
                    "border-w-b",
                    "border-w-l",
                ],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": [
                    "border-color-x",
                    "border-color-y",
                    "border-color-s",
                    "border-color-e",
                    "border-color-bs",
                    "border-color-be",
                    "border-color-t",
                    "border-color-r",
                    "border-color-b",
                    "border-color-l",
                ],
                "border-color-x": [
                    "border-color-r",
                    "border-color-l",
                ],
                "border-color-y": [
                    "border-color-t",
                    "border-color-b",
                ],
                translate: [
                    "translate-x",
                    "translate-y",
                    "translate-none",
                ],
                "translate-none": [
                    "translate",
                    "translate-x",
                    "translate-y",
                    "translate-z",
                ],
                "scroll-m": [
                    "scroll-mx",
                    "scroll-my",
                    "scroll-ms",
                    "scroll-me",
                    "scroll-mbs",
                    "scroll-mbe",
                    "scroll-mt",
                    "scroll-mr",
                    "scroll-mb",
                    "scroll-ml",
                ],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": [
                    "scroll-px",
                    "scroll-py",
                    "scroll-ps",
                    "scroll-pe",
                    "scroll-pbs",
                    "scroll-pbe",
                    "scroll-pt",
                    "scroll-pr",
                    "scroll-pb",
                    "scroll-pl",
                ],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"],
            },
            orderSensitiveModifiers: [
                "*",
                "**",
                "after",
                "backdrop",
                "before",
                "details-content",
                "file",
                "first-letter",
                "first-line",
                "marker",
                "placeholder",
                "selection",
            ],
        };
    },
    eD = (
        e,
        {
            cacheSize: t,
            prefix: n,
            experimentalParseClassName: r,
            extend: l = {},
            override: a = {},
        },
    ) => (
        eM(e, "cacheSize", t),
        eM(e, "prefix", n),
        eM(e, "experimentalParseClassName", r),
        eR(e.theme, a.theme),
        eR(e.classGroups, a.classGroups),
        eR(e.conflictingClassGroups, a.conflictingClassGroups),
        eR(
            e.conflictingClassGroupModifiers,
            a.conflictingClassGroupModifiers,
        ),
        eM(e, "orderSensitiveModifiers", a.orderSensitiveModifiers),
        eB(e.theme, l.theme),
        eB(e.classGroups, l.classGroups),
        eB(e.conflictingClassGroups, l.conflictingClassGroups),
        eB(
            e.conflictingClassGroupModifiers,
            l.conflictingClassGroupModifiers,
        ),
        eI(e, l, "orderSensitiveModifiers"),
        e
    ),
    eM = (e, t, n) => {
        void 0 !== n && (e[t] = n);
    },
    eR = (e, t) => {
        if (t) for (let n in t) eM(e, n, t[n]);
    },
    eB = (e, t) => {
        if (t) for (let n in t) eI(e, t, n);
    },
    eI = (e, t, n) => {
        let r = t[n];
        void 0 !== r && (e[n] = e[n] ? e[n].concat(r) : r);
    },
    e$ = B(eO);
function eU(...e) {
    return (0, w.twMerge)(
        (function () {
            for (
                var e, t, n = 0, r = "", l = arguments.length;
                n < l;
                n++
            )
                (e = arguments[n]) &&
                    (t = (function e(t) {
                        var n,
                            r,
                            l = "";
                        if (
                            "string" == typeof t ||
                            "number" == typeof t
                        )
                            l += t;
                        else if ("object" == typeof t)
                            if (Array.isArray(t)) {
                                var a = t.length;
                                for (n = 0; n < a; n++)
                                    t[n] &&
                                        (r = e(t[n])) &&
                                        (l && (l += " "), (l += r));
                            } else
                                for (r in t)
                                    t[r] &&
                                        (l && (l += " "), (l += r));
                        return l;
                    })(e)) &&
                    (r && (r += " "), (r += t));
            return r;
        })(e),
    );
}
((w.createTailwindMerge = B),
    (w.extendTailwindMerge = (e, ...t) =>
        "function" == typeof e
            ? B(eO, e, ...t)
            : B(() => eD(eO(), e), ...t)),
    (w.fromTheme = $),
    (w.getDefaultConfig = eO),
    (w.mergeConfigs = eD),
    (w.twJoin = M),
    (w.twMerge = e$),
    (w.validators = eL));
let eH = s.forwardRef(
    (
        {
            className: e,
            orientation: t = "horizontal",
            decorative: n = !0,
            ...r
        },
        l,
    ) =>
        (0, i.jsx)(k, {
            ref: l,
            decorative: n,
            orientation: t,
            className: eU(
                "shrink-0 bg-border",
                "horizontal" === t
                    ? "h-[1px] w-full"
                    : "h-full w-[1px]",
                e,
            ),
            ...r,
        }),
);
eH.displayName = k.displayName;
var s = (a("2xBnP"), a("2xBnP"));
function eV(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (r) {
        if ((e?.(r), !1 === n || !r.defaultPrevented))
            return t?.(r);
    };
}
function eW(e, t = []) {
    let n = [],
        r = () => {
            let t = n.map((e) => s.createContext(e));
            return function (n) {
                let r = n?.[e] || t;
                return s.useMemo(
                    () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                    [n, r],
                );
            };
        };
    return (
        (r.scopeName = e),
        [
            function (t, r) {
                let l = s.createContext(r),
                    a = n.length;
                n = [...n, r];
                let o = (t) => {
                    let { scope: n, children: r, ...o } = t,
                        u = n?.[e]?.[a] || l,
                        c = s.useMemo(() => o, Object.values(o));
                    return (0, i.jsx)(u.Provider, {
                        value: c,
                        children: r,
                    });
                };
                return (
                    (o.displayName = t + "Provider"),
                    [
                        o,
                        function (n, o) {
                            let i = o?.[e]?.[a] || l,
                                u = s.useContext(i);
                            if (u) return u;
                            if (void 0 !== r) return r;
                            throw Error(
                                `\`${n}\` must be used within \`${t}\``,
                            );
                        },
                    ]
                );
            },
            (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                    let n = e.map((e) => ({
                        useScope: e(),
                        scopeName: e.scopeName,
                    }));
                    return function (e) {
                        let r = n.reduce(
                            (t, { useScope: n, scopeName: r }) => {
                                let l = n(e)[`__scope${r}`];
                                return { ...t, ...l };
                            },
                            {},
                        );
                        return s.useMemo(
                            () => ({
                                [`__scope${t.scopeName}`]: r,
                            }),
                            [r],
                        );
                    };
                };
                return ((n.scopeName = t.scopeName), n);
            })(r, ...t),
        ]
    );
}
"u" > typeof window &&
    window.document &&
    window.document.createElement;
var s = (a("2xBnP"), a("2xBnP"), a("2xBnP"), a("2xBnP"));
function eQ(e) {
    var t;
    let n,
        r =
            ((t = e),
            ((n = s.forwardRef((e, t) => {
                let { children: n, ...r } = e;
                if (s.isValidElement(n)) {
                    var l;
                    let e,
                        a,
                        o =
                            ((l = n),
                            (a =
                                (e =
                                    Object.getOwnPropertyDescriptor(
                                        l.props,
                                        "ref",
                                    )?.get) &&
                                "isReactWarning" in e &&
                                e.isReactWarning)
                                ? l.ref
                                : (a =
                                        (e =
                                            Object.getOwnPropertyDescriptor(
                                                l,
                                                "ref",
                                            )?.get) &&
                                        "isReactWarning" in e &&
                                        e.isReactWarning)
                                  ? l.props.ref
                                  : l.props.ref || l.ref),
                        i = (function (e, t) {
                            let n = { ...t };
                            for (let r in t) {
                                let l = e[r],
                                    a = t[r];
                                /^on[A-Z]/.test(r)
                                    ? l && a
                                        ? (n[r] = (...e) => {
                                              let t = a(...e);
                                              return (l(...e), t);
                                          })
                                        : l && (n[r] = l)
                                    : "style" === r
                                      ? (n[r] = { ...l, ...a })
                                      : "className" === r &&
                                        (n[r] = [l, a]
                                            .filter(Boolean)
                                            .join(" "));
                            }
                            return { ...e, ...n };
                        })(r, n.props);
                    return (
                        n.type !== s.Fragment &&
                            (i.ref = t ? d(t, o) : o),
                        s.cloneElement(n, i)
                    );
                }
                return s.Children.count(n) > 1
                    ? s.Children.only(null)
                    : null;
            })).displayName = `${t}.SlotClone`),
            n),
        l = s.forwardRef((e, t) => {
            let { children: n, ...l } = e,
                a = s.Children.toArray(n),
                o = a.find(eG);
            if (o) {
                let e = o.props.children,
                    n = a.map((t) =>
                        t !== o
                            ? t
                            : s.Children.count(e) > 1
                              ? s.Children.only(null)
                              : s.isValidElement(e)
                                ? e.props.children
                                : null,
                    );
                return (0, i.jsx)(r, {
                    ...l,
                    ref: t,
                    children: s.isValidElement(e)
                        ? s.cloneElement(e, void 0, n)
                        : null,
                });
            }
            return (0, i.jsx)(r, { ...l, ref: t, children: n });
        });
    return ((l.displayName = `${e}.Slot`), l);
}
var eq = Symbol("radix.slottable");
function eG(e) {
    return (
        s.isValidElement(e) &&
        "function" == typeof e.type &&
        "__radixId" in e.type &&
        e.type.__radixId === eq
    );
}
var eK = new WeakMap();
function eY(e, t) {
    var n, r;
    let l, a, o;
    if ("at" in Array.prototype)
        return Array.prototype.at.call(e, t);
    let i =
        ((n = e),
        (r = t),
        (l = n.length),
        (o = (a = eX(r)) >= 0 ? a : l + a) < 0 || o >= l ? -1 : o);
    return -1 === i ? void 0 : e[i];
}
function eX(e) {
    return e != e || 0 === e ? 0 : Math.trunc(e);
}
(class e extends Map {
    #e;
    constructor(e) {
        (super(e), (this.#e = [...super.keys()]), eK.set(this, !0));
    }
    set(e, t) {
        return (
            eK.get(this) &&
                (this.has(e)
                    ? (this.#e[this.#e.indexOf(e)] = e)
                    : this.#e.push(e)),
            super.set(e, t),
            this
        );
    }
    insert(e, t, n) {
        let r,
            l = this.has(t),
            a = this.#e.length,
            o = eX(e),
            i = o >= 0 ? o : a + o,
            s = i < 0 || i >= a ? -1 : i;
        if (
            s === this.size ||
            (l && s === this.size - 1) ||
            -1 === s
        )
            return (this.set(t, n), this);
        let u = this.size + +!l;
        o < 0 && i++;
        let c = [...this.#e],
            d = !1;
        for (let e = i; e < u; e++)
            if (i === e) {
                let a = c[e];
                (c[e] === t && (a = c[e + 1]),
                    l && this.delete(t),
                    (r = this.get(a)),
                    this.set(t, n));
            } else {
                d || c[e - 1] !== t || (d = !0);
                let n = c[d ? e : e - 1],
                    l = r;
                ((r = this.get(n)), this.delete(n), this.set(n, l));
            }
        return this;
    }
    with(t, n, r) {
        let l = new e(this);
        return (l.insert(t, n, r), l);
    }
    before(e) {
        let t = this.#e.indexOf(e) - 1;
        if (!(t < 0)) return this.entryAt(t);
    }
    setBefore(e, t, n) {
        let r = this.#e.indexOf(e);
        return -1 === r ? this : this.insert(r, t, n);
    }
    after(e) {
        let t = this.#e.indexOf(e);
        if (
            -1 !==
            (t = -1 === t || t === this.size - 1 ? -1 : t + 1)
        )
            return this.entryAt(t);
    }
    setAfter(e, t, n) {
        let r = this.#e.indexOf(e);
        return -1 === r ? this : this.insert(r + 1, t, n);
    }
    first() {
        return this.entryAt(0);
    }
    last() {
        return this.entryAt(-1);
    }
    clear() {
        return ((this.#e = []), super.clear());
    }
    delete(e) {
        let t = super.delete(e);
        return (t && this.#e.splice(this.#e.indexOf(e), 1), t);
    }
    deleteAt(e) {
        let t = this.keyAt(e);
        return void 0 !== t && this.delete(t);
    }
    at(e) {
        let t = eY(this.#e, e);
        if (void 0 !== t) return this.get(t);
    }
    entryAt(e) {
        let t = eY(this.#e, e);
        if (void 0 !== t) return [t, this.get(t)];
    }
    indexOf(e) {
        return this.#e.indexOf(e);
    }
    keyAt(e) {
        return eY(this.#e, e);
    }
    from(e, t) {
        let n = this.indexOf(e);
        if (-1 === n) return;
        let r = n + t;
        return (
            r < 0 && (r = 0),
            r >= this.size && (r = this.size - 1),
            this.at(r)
        );
    }
    keyFrom(e, t) {
        let n = this.indexOf(e);
        if (-1 === n) return;
        let r = n + t;
        return (
            r < 0 && (r = 0),
            r >= this.size && (r = this.size - 1),
            this.keyAt(r)
        );
    }
    find(e, t) {
        let n = 0;
        for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this])) return r;
            n++;
        }
    }
    findIndex(e, t) {
        let n = 0;
        for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this])) return n;
            n++;
        }
        return -1;
    }
    filter(t, n) {
        let r = [],
            l = 0;
        for (let e of this)
            (Reflect.apply(t, n, [e, l, this]) && r.push(e), l++);
        return new e(r);
    }
    map(t, n) {
        let r = [],
            l = 0;
        for (let e of this)
            (r.push([e[0], Reflect.apply(t, n, [e, l, this])]),
                l++);
        return new e(r);
    }
    reduce(...e) {
        let [t, n] = e,
            r = 0,
            l = n ?? this.at(0);
        for (let n of this)
            ((l =
                0 === r && 1 === e.length
                    ? n
                    : Reflect.apply(t, this, [l, n, r, this])),
                r++);
        return l;
    }
    reduceRight(...e) {
        let [t, n] = e,
            r = n ?? this.at(-1);
        for (let n = this.size - 1; n >= 0; n--) {
            let l = this.at(n);
            r =
                n === this.size - 1 && 1 === e.length
                    ? l
                    : Reflect.apply(t, this, [r, l, n, this]);
        }
        return r;
    }
    toSorted(t) {
        return new e([...this.entries()].sort(t));
    }
    toReversed() {
        let t = new e();
        for (let e = this.size - 1; e >= 0; e--) {
            let n = this.keyAt(e),
                r = this.get(n);
            t.set(n, r);
        }
        return t;
    }
    toSpliced(...t) {
        let n = [...this.entries()];
        return (n.splice(...t), new e(n));
    }
    slice(t, n) {
        let r = new e(),
            l = this.size - 1;
        if (void 0 === t) return r;
        (t < 0 && (t += this.size),
            void 0 !== n && n > 0 && (l = n - 1));
        for (let e = t; e <= l; e++) {
            let t = this.keyAt(e),
                n = this.get(t);
            r.set(t, n);
        }
        return r;
    }
    every(e, t) {
        let n = 0;
        for (let r of this) {
            if (!Reflect.apply(e, t, [r, n, this])) return !1;
            n++;
        }
        return !0;
    }
    some(e, t) {
        let n = 0;
        for (let r of this) {
            if (Reflect.apply(e, t, [r, n, this])) return !0;
            n++;
        }
        return !1;
    }
});
var s = (a("2xBnP"), a("2xBnP")),
    eZ = globalThis?.document ? s.useLayoutEffect : () => {},
    eJ = s[" useId ".trim().toString()] || (() => void 0),
    e0 = 0;
function e1(e) {
    let [t, n] = s.useState(eJ());
    return (
        eZ(() => {
            e || n((e) => e ?? String(e0++));
        }, [e]),
        e || (t ? `radix-${t}` : "")
    );
}
var s = a("2xBnP");
a("8cavo");
var e2 = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
    ].reduce((e, t) => {
        let n = eQ(`Primitive.${t}`),
            r = s.forwardRef((e, r) => {
                let { asChild: l, ...a } = e;
                return (
                    "u" > typeof window &&
                        (window[Symbol.for("radix-ui")] = !0),
                    (0, i.jsx)(l ? n : t, { ...a, ref: r })
                );
            });
        return (
            (r.displayName = `Primitive.${t}`),
            { ...e, [t]: r }
        );
    }, {}),
    s = (a("2xBnP"), a("2xBnP"), a("2xBnP"));
(s[" useEffectEvent ".trim().toString()],
    s[" useInsertionEffect ".trim().toString()]);
var e3 = s[" useInsertionEffect ".trim().toString()] || eZ;
function e4({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r,
}) {
    let [l, a, o] = (function ({ defaultProp: e, onChange: t }) {
            let [n, r] = s.useState(e),
                l = s.useRef(n),
                a = s.useRef(t);
            return (
                e3(() => {
                    a.current = t;
                }, [t]),
                s.useEffect(() => {
                    l.current !== n &&
                        (a.current?.(n), (l.current = n));
                }, [n, l]),
                [n, r, a]
            );
        })({ defaultProp: t, onChange: n }),
        i = void 0 !== e,
        u = i ? e : l;
    {
        let t = s.useRef(void 0 !== e);
        s.useEffect(() => {
            let e = t.current;
            if (e !== i) {
                let t = i ? "controlled" : "uncontrolled";
                console.warn(
                    `${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
                );
            }
            t.current = i;
        }, [i, r]);
    }
    return [
        u,
        s.useCallback(
            (t) => {
                if (i) {
                    let n = "function" == typeof t ? t(e) : t;
                    n !== e && o.current?.(n);
                } else a(t);
            },
            [i, e, a, o],
        ),
    ];
}
Symbol("RADIX:SYNC_STATE");
var s = a("2xBnP"),
    e5 = s.createContext(void 0);
function e8(e) {
    let t = s.useContext(e5);
    return e || t || "ltr";
}
var e6 = "rovingFocusGroup.onEntryFocus",
    e9 = { bubbles: !1, cancelable: !0 },
    e7 = "RovingFocusGroup",
    [te, tt, tn] = (function (e) {
        let n = e + "CollectionProvider",
            [r, l] = eW(n),
            [a, o] = r(n, {
                collectionRef: { current: null },
                itemMap: new Map(),
            }),
            u = (e) => {
                let { scope: n, children: r } = e,
                    l = t(s).useRef(null),
                    o = t(s).useRef(new Map()).current;
                return (0, i.jsx)(a, {
                    scope: n,
                    itemMap: o,
                    collectionRef: l,
                    children: r,
                });
            };
        u.displayName = n;
        let c = e + "CollectionSlot",
            d = eQ(c),
            p = t(s).forwardRef((e, t) => {
                let { scope: n, children: r } = e,
                    l = f(t, o(c, n).collectionRef);
                return (0, i.jsx)(d, { ref: l, children: r });
            });
        p.displayName = c;
        let m = e + "CollectionItemSlot",
            h = "data-radix-collection-item",
            g = eQ(m),
            y = t(s).forwardRef((e, n) => {
                let { scope: r, children: l, ...a } = e,
                    u = t(s).useRef(null),
                    c = f(n, u),
                    d = o(m, r);
                return (
                    t(s).useEffect(
                        () => (
                            d.itemMap.set(u, { ref: u, ...a }),
                            () => void d.itemMap.delete(u)
                        ),
                    ),
                    (0, i.jsx)(g, { [h]: "", ref: c, children: l })
                );
            });
        return (
            (y.displayName = m),
            [
                { Provider: u, Slot: p, ItemSlot: y },
                function (n) {
                    let r = o(e + "CollectionConsumer", n);
                    return t(s).useCallback(() => {
                        let e = r.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(
                            e.querySelectorAll(`[${h}]`),
                        );
                        return Array.from(r.itemMap.values()).sort(
                            (e, n) =>
                                t.indexOf(e.ref.current) -
                                t.indexOf(n.ref.current),
                        );
                    }, [r.collectionRef, r.itemMap]);
                },
                l,
            ]
        );
    })(e7),
    [tr, tl] = eW(e7, [tn]),
    [ta, to] = tr(e7),
    ti = s.forwardRef((e, t) =>
        (0, i.jsx)(te.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, i.jsx)(te.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: (0, i.jsx)(ts, { ...e, ref: t }),
            }),
        }),
    );
ti.displayName = e7;
var ts = s.forwardRef((e, t) => {
        let n,
            {
                __scopeRovingFocusGroup: r,
                orientation: l,
                loop: a = !1,
                dir: o,
                currentTabStopId: u,
                defaultCurrentTabStopId: c,
                onCurrentTabStopIdChange: d,
                onEntryFocus: p,
                preventScrollOnEntryFocus: m = !1,
                ...h
            } = e,
            g = s.useRef(null),
            y = f(t, g),
            b = e8(o),
            [v, x] = e4({
                prop: u,
                defaultProp: c ?? null,
                onChange: d,
                caller: e7,
            }),
            [k, w] = s.useState(!1),
            S =
                ((n = s.useRef(p)),
                s.useEffect(() => {
                    n.current = p;
                }),
                s.useMemo(
                    () =>
                        (...e) =>
                            n.current?.(...e),
                    [],
                )),
            E = tt(r),
            C = s.useRef(!1),
            [N, z] = s.useState(0);
        return (
            s.useEffect(() => {
                let e = g.current;
                if (e)
                    return (
                        e.addEventListener(e6, S),
                        () => e.removeEventListener(e6, S)
                    );
            }, [S]),
            (0, i.jsx)(ta, {
                scope: r,
                orientation: l,
                dir: b,
                loop: a,
                currentTabStopId: v,
                onItemFocus: s.useCallback((e) => x(e), [x]),
                onItemShiftTab: s.useCallback(() => w(!0), []),
                onFocusableItemAdd: s.useCallback(
                    () => z((e) => e + 1),
                    [],
                ),
                onFocusableItemRemove: s.useCallback(
                    () => z((e) => e - 1),
                    [],
                ),
                children: (0, i.jsx)(e2.div, {
                    tabIndex: k || 0 === N ? -1 : 0,
                    "data-orientation": l,
                    ...h,
                    ref: y,
                    style: { outline: "none", ...e.style },
                    onMouseDown: eV(e.onMouseDown, () => {
                        C.current = !0;
                    }),
                    onFocus: eV(e.onFocus, (e) => {
                        let t = !C.current;
                        if (
                            e.target === e.currentTarget &&
                            t &&
                            !k
                        ) {
                            let t = new CustomEvent(e6, e9);
                            if (
                                (e.currentTarget.dispatchEvent(t),
                                !t.defaultPrevented)
                            ) {
                                let e = E().filter(
                                    (e) => e.focusable,
                                );
                                tf(
                                    [
                                        e.find((e) => e.active),
                                        e.find((e) => e.id === v),
                                        ...e,
                                    ]
                                        .filter(Boolean)
                                        .map((e) => e.ref.current),
                                    m,
                                );
                            }
                        }
                        C.current = !1;
                    }),
                    onBlur: eV(e.onBlur, () => w(!1)),
                }),
            })
        );
    }),
    tu = "RovingFocusGroupItem",
    tc = s.forwardRef((e, t) => {
        let {
                __scopeRovingFocusGroup: n,
                focusable: r = !0,
                active: l = !1,
                tabStopId: a,
                children: o,
                ...u
            } = e,
            c = e1(),
            d = a || c,
            f = to(tu, n),
            p = f.currentTabStopId === d,
            m = tt(n),
            {
                onFocusableItemAdd: h,
                onFocusableItemRemove: g,
                currentTabStopId: y,
            } = f;
        return (
            s.useEffect(() => {
                if (r) return (h(), () => g());
            }, [r, h, g]),
            (0, i.jsx)(te.ItemSlot, {
                scope: n,
                id: d,
                focusable: r,
                active: l,
                children: (0, i.jsx)(e2.span, {
                    tabIndex: p ? 0 : -1,
                    "data-orientation": f.orientation,
                    ...u,
                    ref: t,
                    onMouseDown: eV(e.onMouseDown, (e) => {
                        r ? f.onItemFocus(d) : e.preventDefault();
                    }),
                    onFocus: eV(e.onFocus, () => f.onItemFocus(d)),
                    onKeyDown: eV(e.onKeyDown, (e) => {
                        if ("Tab" === e.key && e.shiftKey)
                            return void f.onItemShiftTab();
                        if (e.target !== e.currentTarget) return;
                        let t = (function (e, t, n) {
                            var r;
                            let l =
                                ((r = e.key),
                                "rtl" !== n
                                    ? r
                                    : "ArrowLeft" === r
                                      ? "ArrowRight"
                                      : "ArrowRight" === r
                                        ? "ArrowLeft"
                                        : r);
                            if (
                                !(
                                    "vertical" === t &&
                                    [
                                        "ArrowLeft",
                                        "ArrowRight",
                                    ].includes(l)
                                ) &&
                                !(
                                    "horizontal" === t &&
                                    [
                                        "ArrowUp",
                                        "ArrowDown",
                                    ].includes(l)
                                )
                            )
                                return td[l];
                        })(e, f.orientation, f.dir);
                        if (void 0 !== t) {
                            if (
                                e.metaKey ||
                                e.ctrlKey ||
                                e.altKey ||
                                e.shiftKey
                            )
                                return;
                            e.preventDefault();
                            let l = m()
                                .filter((e) => e.focusable)
                                .map((e) => e.ref.current);
                            if ("last" === t) l.reverse();
                            else if ("prev" === t || "next" === t) {
                                var n, r;
                                "prev" === t && l.reverse();
                                let a = l.indexOf(e.currentTarget);
                                l = f.loop
                                    ? ((n = l),
                                      (r = a + 1),
                                      n.map(
                                          (e, t) =>
                                              n[(r + t) % n.length],
                                      ))
                                    : l.slice(a + 1);
                            }
                            setTimeout(() => tf(l));
                        }
                    }),
                    children:
                        "function" == typeof o
                            ? o({
                                  isCurrentTabStop: p,
                                  hasTabStop: null != y,
                              })
                            : o,
                }),
            })
        );
    });
tc.displayName = tu;
var td = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
};
function tf(e, t = !1) {
    let n = document.activeElement;
    for (let r of e)
        if (
            r === n ||
            (r.focus({ preventScroll: t }),
            document.activeElement !== n)
        )
            return;
}
var s = a("2xBnP"),
    tp = (e) => {
        var t;
        let n,
            r,
            { present: l, children: a } = e,
            o = (function (e) {
                var t, n;
                let [r, l] = s.useState(),
                    a = s.useRef(null),
                    o = s.useRef(e),
                    i = s.useRef("none"),
                    [u, c] =
                        ((t = e ? "mounted" : "unmounted"),
                        (n = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended",
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted",
                            },
                            unmounted: { MOUNT: "mounted" },
                        }),
                        s.useReducer((e, t) => n[e][t] ?? e, t));
                return (
                    s.useEffect(() => {
                        let e = tm(a.current);
                        i.current = "mounted" === u ? e : "none";
                    }, [u]),
                    eZ(() => {
                        let t = a.current,
                            n = o.current;
                        if (n !== e) {
                            let r = i.current,
                                l = tm(t);
                            (e
                                ? c("MOUNT")
                                : "none" === l ||
                                    t?.display === "none"
                                  ? c("UNMOUNT")
                                  : n && r !== l
                                    ? c("ANIMATION_OUT")
                                    : c("UNMOUNT"),
                                (o.current = e));
                        }
                    }, [e, c]),
                    eZ(() => {
                        if (r) {
                            let e,
                                t =
                                    r.ownerDocument.defaultView ??
                                    window,
                                n = (n) => {
                                    let l = tm(a.current).includes(
                                        CSS.escape(n.animationName),
                                    );
                                    if (
                                        n.target === r &&
                                        l &&
                                        (c("ANIMATION_END"),
                                        !o.current)
                                    ) {
                                        let n =
                                            r.style
                                                .animationFillMode;
                                        ((r.style.animationFillMode =
                                            "forwards"),
                                            (e = t.setTimeout(
                                                () => {
                                                    "forwards" ===
                                                        r.style
                                                            .animationFillMode &&
                                                        (r.style.animationFillMode =
                                                            n);
                                                },
                                            )));
                                    }
                                },
                                l = (e) => {
                                    e.target === r &&
                                        (i.current = tm(a.current));
                                };
                            return (
                                r.addEventListener(
                                    "animationstart",
                                    l,
                                ),
                                r.addEventListener(
                                    "animationcancel",
                                    n,
                                ),
                                r.addEventListener(
                                    "animationend",
                                    n,
                                ),
                                () => {
                                    (t.clearTimeout(e),
                                        r.removeEventListener(
                                            "animationstart",
                                            l,
                                        ),
                                        r.removeEventListener(
                                            "animationcancel",
                                            n,
                                        ),
                                        r.removeEventListener(
                                            "animationend",
                                            n,
                                        ));
                                }
                            );
                        }
                        c("ANIMATION_END");
                    }, [r, c]),
                    {
                        isPresent: [
                            "mounted",
                            "unmountSuspended",
                        ].includes(u),
                        ref: s.useCallback((e) => {
                            ((a.current = e
                                ? getComputedStyle(e)
                                : null),
                                l(e));
                        }, []),
                    }
                );
            })(l),
            i =
                "function" == typeof a
                    ? a({ present: o.isPresent })
                    : s.Children.only(a),
            u = f(
                o.ref,
                ((t = i),
                (r =
                    (n = Object.getOwnPropertyDescriptor(
                        t.props,
                        "ref",
                    )?.get) &&
                    "isReactWarning" in n &&
                    n.isReactWarning)
                    ? t.ref
                    : (r =
                            (n = Object.getOwnPropertyDescriptor(
                                t,
                                "ref",
                            )?.get) &&
                            "isReactWarning" in n &&
                            n.isReactWarning)
                      ? t.props.ref
                      : t.props.ref || t.ref),
            );
        return "function" == typeof a || o.isPresent
            ? s.cloneElement(i, { ref: u })
            : null;
    };
function tm(e) {
    return e?.animationName || "none";
}
tp.displayName = "Presence";
var th = "Tabs",
    [tg, ty] = eW(th, [tl]),
    tb = tl(),
    [tv, tx] = tg(th),
    tk = s.forwardRef((e, t) => {
        let {
                __scopeTabs: n,
                value: r,
                onValueChange: l,
                defaultValue: a,
                orientation: o = "horizontal",
                dir: s,
                activationMode: u = "automatic",
                ...c
            } = e,
            d = e8(s),
            [f, p] = e4({
                prop: r,
                onChange: l,
                defaultProp: a ?? "",
                caller: th,
            });
        return (0, i.jsx)(tv, {
            scope: n,
            baseId: e1(),
            value: f,
            onValueChange: p,
            orientation: o,
            dir: d,
            activationMode: u,
            children: (0, i.jsx)(e2.div, {
                dir: d,
                "data-orientation": o,
                ...c,
                ref: t,
            }),
        });
    });
tk.displayName = th;
var tw = "TabsList",
    tS = s.forwardRef((e, t) => {
        let { __scopeTabs: n, loop: r = !0, ...l } = e,
            a = tx(tw, n),
            o = tb(n);
        return (0, i.jsx)(ti, {
            asChild: !0,
            ...o,
            orientation: a.orientation,
            dir: a.dir,
            loop: r,
            children: (0, i.jsx)(e2.div, {
                role: "tablist",
                "aria-orientation": a.orientation,
                ...l,
                ref: t,
            }),
        });
    });
tS.displayName = tw;
var tE = "TabsTrigger",
    tC = s.forwardRef((e, t) => {
        let {
                __scopeTabs: n,
                value: r,
                disabled: l = !1,
                ...a
            } = e,
            o = tx(tE, n),
            s = tb(n),
            u = tF(o.baseId, r),
            c = tP(o.baseId, r),
            d = r === o.value;
        return (0, i.jsx)(tc, {
            asChild: !0,
            ...s,
            focusable: !l,
            active: d,
            children: (0, i.jsx)(e2.button, {
                type: "button",
                role: "tab",
                "aria-selected": d,
                "aria-controls": c,
                "data-state": d ? "active" : "inactive",
                "data-disabled": l ? "" : void 0,
                disabled: l,
                id: u,
                ...a,
                ref: t,
                onMouseDown: eV(e.onMouseDown, (e) => {
                    l || 0 !== e.button || !1 !== e.ctrlKey
                        ? e.preventDefault()
                        : o.onValueChange(r);
                }),
                onKeyDown: eV(e.onKeyDown, (e) => {
                    [" ", "Enter"].includes(e.key) &&
                        o.onValueChange(r);
                }),
                onFocus: eV(e.onFocus, () => {
                    let e = "manual" !== o.activationMode;
                    d || l || !e || o.onValueChange(r);
                }),
            }),
        });
    });
tC.displayName = tE;
var tN = "TabsContent",
    tz = s.forwardRef((e, t) => {
        let {
                __scopeTabs: n,
                value: r,
                forceMount: l,
                children: a,
                ...o
            } = e,
            u = tx(tN, n),
            c = tF(u.baseId, r),
            d = tP(u.baseId, r),
            f = r === u.value,
            p = s.useRef(f);
        return (
            s.useEffect(() => {
                let e = requestAnimationFrame(
                    () => (p.current = !1),
                );
                return () => cancelAnimationFrame(e);
            }, []),
            (0, i.jsx)(tp, {
                present: l || f,
                children: ({ present: n }) =>
                    (0, i.jsx)(e2.div, {
                        "data-state": f ? "active" : "inactive",
                        "data-orientation": u.orientation,
                        role: "tabpanel",
                        "aria-labelledby": c,
                        hidden: !n,
                        id: d,
                        tabIndex: 0,
                        ...o,
                        ref: t,
                        style: {
                            ...e.style,
                            animationDuration: p.current
                                ? "0s"
                                : void 0,
                        },
                        children: n && a,
                    }),
            })
        );
    });
function tF(e, t) {
    return `${e}-trigger-${t}`;
}
function tP(e, t) {
    return `${e}-content-${t}`;
}
tz.displayName = tN;
let t_ = s.forwardRef(({ className: e, ...t }, n) =>
    (0, i.jsx)(tS, {
        ref: n,
        className: eU(
            "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
            e,
        ),
        ...t,
    }),
);
t_.displayName = tS.displayName;
let tT = s.forwardRef(({ className: e, ...t }, n) =>
    (0, i.jsx)(tC, {
        ref: n,
        className: eU(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
            e,
        ),
        ...t,
    }),
);
tT.displayName = tC.displayName;
let tA = s.forwardRef(({ className: e, ...t }, n) =>
    (0, i.jsx)(tz, {
        ref: n,
        className: eU(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            e,
        ),
        ...t,
    }),
);
tA.displayName = tz.displayName;
let tj = [
        {
            name: "Lavender",
            description:
                "The signature Chatty theme — warm violet with purple-tinted neutrals.",
            mode: "light",
            colors: {
                pageBg: "#FAF8FF",
                sidebarBg: "#F7F5FB",
                chatBg: "#FFFFFF",
                cardBg: "#FFFFFF",
                primary: "#7C3AED",
                primaryHover: "#6D28D9",
                primarySoft: "rgba(124,58,237,0.08)",
                text: "#1C1435",
                textSecondary: "#5B5277",
                textMuted: "#9590A8",
                border: "#EBE6F2",
                inputBg: "#F7F5FB",
                inputBorder: "#DDD6FE",
                badge: "#7C3AED",
                online: "#22C55E",
                messageHover: "#F9F7FD",
            },
        },
        {
            name: "Cloud",
            description:
                "Soft blue-grey — minimal and calm, like an overcast morning.",
            mode: "light",
            colors: {
                pageBg: "#F8FAFB",
                sidebarBg: "#F1F4F6",
                chatBg: "#FFFFFF",
                cardBg: "#FFFFFF",
                primary: "#3B82F6",
                primaryHover: "#2563EB",
                primarySoft: "rgba(59,130,246,0.08)",
                text: "#111827",
                textSecondary: "#4B5563",
                textMuted: "#9CA3AF",
                border: "#E5E7EB",
                inputBg: "#F3F4F6",
                inputBorder: "#D1D5DB",
                badge: "#3B82F6",
                online: "#22C55E",
                messageHover: "#F9FAFB",
            },
        },
        {
            name: "Peach",
            description:
                "Warm and inviting — coral accents on a creamy base.",
            mode: "light",
            colors: {
                pageBg: "#FFFAF8",
                sidebarBg: "#FFF5F0",
                chatBg: "#FFFFFF",
                cardBg: "#FFFFFF",
                primary: "#F97316",
                primaryHover: "#EA580C",
                primarySoft: "rgba(249,115,22,0.08)",
                text: "#1C1210",
                textSecondary: "#78584B",
                textMuted: "#B09888",
                border: "#F5E6DD",
                inputBg: "#FFF8F5",
                inputBorder: "#FDDCC8",
                badge: "#F97316",
                online: "#22C55E",
                messageHover: "#FFFCFA",
            },
        },
        {
            name: "Mint",
            description:
                "Fresh and clean — nature-inspired green tones.",
            mode: "light",
            colors: {
                pageBg: "#F6FBF9",
                sidebarBg: "#EEF7F3",
                chatBg: "#FFFFFF",
                cardBg: "#FFFFFF",
                primary: "#059669",
                primaryHover: "#047857",
                primarySoft: "rgba(5,150,105,0.08)",
                text: "#0F1F1A",
                textSecondary: "#3D6B5C",
                textMuted: "#86AE9E",
                border: "#D5EBE2",
                inputBg: "#F0F8F4",
                inputBorder: "#B4DBC8",
                badge: "#059669",
                online: "#22C55E",
                messageHover: "#F7FCF9",
            },
        },
        {
            name: "Rose",
            description:
                "Elegant and soft — blush pink with refined contrast.",
            mode: "light",
            colors: {
                pageBg: "#FFF8FA",
                sidebarBg: "#FDF2F5",
                chatBg: "#FFFFFF",
                cardBg: "#FFFFFF",
                primary: "#E11D48",
                primaryHover: "#BE123C",
                primarySoft: "rgba(225,29,72,0.07)",
                text: "#1A0A10",
                textSecondary: "#7A3E55",
                textMuted: "#C08EA0",
                border: "#F5DCE4",
                inputBg: "#FFF5F8",
                inputBorder: "#F9D0DC",
                badge: "#E11D48",
                online: "#22C55E",
                messageHover: "#FFFAFC",
            },
        },
        {
            name: "Midnight",
            description:
                "The classic dark Chatty — deep indigo with violet accents.",
            mode: "dark",
            colors: {
                pageBg: "#0F0D1A",
                sidebarBg: "#151222",
                chatBg: "#1A1728",
                cardBg: "#1E1B2E",
                primary: "#8B5CF6",
                primaryHover: "#A78BFA",
                primarySoft: "rgba(139,92,246,0.12)",
                text: "#E8E5F0",
                textSecondary: "#A09CB5",
                textMuted: "#6B6680",
                border: "#2A2740",
                inputBg: "#151222",
                inputBorder: "#3A3555",
                badge: "#8B5CF6",
                online: "#4ADE80",
                messageHover: "#1E1B30",
            },
        },
        {
            name: "Obsidian",
            description:
                "Pure dark — neutral charcoal with icy blue highlights.",
            mode: "dark",
            colors: {
                pageBg: "#0A0A0C",
                sidebarBg: "#111114",
                chatBg: "#161619",
                cardBg: "#1C1C20",
                primary: "#60A5FA",
                primaryHover: "#93C5FD",
                primarySoft: "rgba(96,165,250,0.10)",
                text: "#E4E4E7",
                textSecondary: "#A1A1AA",
                textMuted: "#71717A",
                border: "#27272A",
                inputBg: "#111114",
                inputBorder: "#3F3F46",
                badge: "#60A5FA",
                online: "#4ADE80",
                messageHover: "#1A1A1E",
            },
        },
        {
            name: "Forest",
            description:
                "Deep woodland — rich dark greens for late-night focus.",
            mode: "dark",
            colors: {
                pageBg: "#0B1210",
                sidebarBg: "#101B17",
                chatBg: "#14201B",
                cardBg: "#1A2822",
                primary: "#34D399",
                primaryHover: "#6EE7B7",
                primarySoft: "rgba(52,211,153,0.10)",
                text: "#D9F0E6",
                textSecondary: "#8BB5A2",
                textMuted: "#5C8473",
                border: "#1E3A2F",
                inputBg: "#101B17",
                inputBorder: "#2A5040",
                badge: "#34D399",
                online: "#4ADE80",
                messageHover: "#172620",
            },
        },
        {
            name: "Ember",
            description:
                "Warm and cozy — deep brown-black with amber glow.",
            mode: "dark",
            colors: {
                pageBg: "#12100C",
                sidebarBg: "#1A1610",
                chatBg: "#1E1A14",
                cardBg: "#252018",
                primary: "#F59E0B",
                primaryHover: "#FBBF24",
                primarySoft: "rgba(245,158,11,0.10)",
                text: "#F0E8D8",
                textSecondary: "#B8A88C",
                textMuted: "#857560",
                border: "#3A3020",
                inputBg: "#1A1610",
                inputBorder: "#4A3D28",
                badge: "#F59E0B",
                online: "#4ADE80",
                messageHover: "#22200F",
            },
        },
        {
            name: "Abyss",
            description:
                "Ultra-dark OLED — true black with electric pink sparks.",
            mode: "dark",
            colors: {
                pageBg: "#000000",
                sidebarBg: "#0A0A0A",
                chatBg: "#0E0E0E",
                cardBg: "#141414",
                primary: "#EC4899",
                primaryHover: "#F472B6",
                primarySoft: "rgba(236,72,153,0.10)",
                text: "#F0F0F0",
                textSecondary: "#A0A0A0",
                textMuted: "#606060",
                border: "#1F1F1F",
                inputBg: "#0A0A0A",
                inputBorder: "#2D2D2D",
                badge: "#EC4899",
                online: "#4ADE80",
                messageHover: "#111111",
            },
        },
    ],
    tL = tj.filter((e) => "light" === e.mode),
    tO = tj.filter((e) => "dark" === e.mode);
function tD({ theme: e }) {
    let t = e.colors;
    return (0, i.jsx)("div", {
        className: "rounded-2xl overflow-hidden border shadow-sm",
        style: { borderColor: t.border, background: t.pageBg },
        children: (0, i.jsxs)("div", {
            className: "flex h-[340px]",
            children: [
                (0, i.jsxs)("div", {
                    className:
                        "w-[42px] flex flex-col items-center py-2 gap-1.5 flex-shrink-0",
                    style: { background: t.sidebarBg },
                    children: [
                        (0, i.jsx)("div", {
                            className:
                                "w-7 h-7 rounded-xl flex items-center justify-center",
                            style: { background: t.primary },
                            children: (0, i.jsx)("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 80 80",
                                fill: "none",
                                children: (0, i.jsx)("path", {
                                    d: "M18 24C18 20.7 20.7 18 24 18L52 18C55.3 18 58 20.7 58 24L58 42C58 45.3 55.3 48 52 48L36 48L26 56L26 48L24 48C20.7 48 18 45.3 18 42Z",
                                    fill: "white",
                                    fillOpacity: "0.9",
                                }),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: "w-5 h-px rounded-full",
                            style: { background: t.border },
                        }),
                        ["🎨", "📚", "🎵"].map((e, n) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    className:
                                        "w-7 h-7 rounded-full flex items-center justify-center text-[10px] border",
                                    style: {
                                        borderColor: t.border,
                                        background: t.cardBg,
                                    },
                                    children: e,
                                },
                                n,
                            ),
                        ),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className:
                        "w-[110px] flex flex-col flex-shrink-0 border-r",
                    style: {
                        background: t.sidebarBg,
                        borderColor: t.border,
                    },
                    children: [
                        (0, i.jsx)("div", {
                            className:
                                "h-7 px-2 flex items-center border-b",
                            style: { borderColor: t.border },
                            children: (0, i.jsx)("span", {
                                className:
                                    "text-[9px] font-semibold truncate",
                                style: { color: t.text },
                                children: "Design Team",
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: "px-1 pt-2 space-y-px",
                            children: [
                                (0, i.jsx)("p", {
                                    className:
                                        "text-[7px] font-bold uppercase tracking-wider px-1 mb-1",
                                    style: { color: t.textMuted },
                                    children: "Channels",
                                }),
                                ["general", "design", "random"].map(
                                    (e, n) =>
                                        (0, i.jsxs)(
                                            "div",
                                            {
                                                className:
                                                    "flex items-center gap-1 px-1.5 h-[20px] rounded-md text-[9px]",
                                                style: {
                                                    background:
                                                        0 === n
                                                            ? t.primarySoft
                                                            : "transparent",
                                                    color:
                                                        0 === n
                                                            ? t.primary
                                                            : 1 ===
                                                                n
                                                              ? t.text
                                                              : t.textMuted,
                                                    fontWeight:
                                                        n <= 1
                                                            ? 600
                                                            : 400,
                                                },
                                                children: [
                                                    (0, i.jsx)(
                                                        "span",
                                                        {
                                                            style: {
                                                                color:
                                                                    0 ===
                                                                    n
                                                                        ? t.primary +
                                                                          "80"
                                                                        : t.textMuted,
                                                                fontSize: 10,
                                                            },
                                                            children:
                                                                "#",
                                                        },
                                                    ),
                                                    e,
                                                    0 === n &&
                                                        (0, i.jsx)(
                                                            "span",
                                                            {
                                                                className:
                                                                    "ml-auto min-w-[12px] h-[12px] rounded-full flex items-center justify-center text-[7px] font-bold text-white",
                                                                style: {
                                                                    background:
                                                                        t.badge,
                                                                },
                                                                children:
                                                                    "3",
                                                            },
                                                        ),
                                                ],
                                            },
                                            e,
                                        ),
                                ),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className:
                                "mt-auto h-7 flex items-center gap-1.5 px-1.5 border-t",
                            style: { borderColor: t.border },
                            children: [
                                (0, i.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className:
                                                "w-5 h-5 rounded-full text-[8px] flex items-center justify-center",
                                            style: {
                                                background:
                                                    t.primary +
                                                    "20",
                                            },
                                            children: "🧙",
                                        }),
                                        (0, i.jsx)("span", {
                                            className:
                                                "absolute -bottom-px -right-px w-2 h-2 rounded-full border",
                                            style: {
                                                background:
                                                    t.online,
                                                borderColor:
                                                    t.sidebarBg,
                                                borderWidth: 1.5,
                                            },
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("span", {
                                    className:
                                        "text-[8px] font-semibold truncate",
                                    style: { color: t.text },
                                    children: "WizardDev",
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: "flex-1 flex flex-col min-w-0",
                    style: { background: t.chatBg },
                    children: [
                        (0, i.jsxs)("div", {
                            className:
                                "h-7 px-3 flex items-center gap-1.5 border-b flex-shrink-0",
                            style: { borderColor: t.border },
                            children: [
                                (0, i.jsx)("span", {
                                    className:
                                        "text-[10px] font-semibold",
                                    style: {
                                        color: t.primary + "70",
                                    },
                                    children: "#",
                                }),
                                (0, i.jsx)("span", {
                                    className:
                                        "text-[10px] font-semibold",
                                    style: { color: t.text },
                                    children: "general",
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className:
                                "flex-1 px-3 pt-2 space-y-2.5 overflow-hidden",
                            children: [
                                (0, i.jsx)(tM, {
                                    name: "Kai",
                                    emoji: "🐉",
                                    nameColor: "#DC2626",
                                    text: "hey everyone, the new guidelines look great",
                                    time: "10:21",
                                    colors: t,
                                }),
                                (0, i.jsx)(tM, {
                                    name: "Zara",
                                    emoji: "🦊",
                                    nameColor: t.primary,
                                    text: "agreed! started the landing page already",
                                    time: "10:24",
                                    colors: t,
                                    reactions: [
                                        {
                                            e: "🔥",
                                            n: 4,
                                            active: !0,
                                        },
                                        { e: "👀", n: 2 },
                                    ],
                                }),
                                (0, i.jsx)(tM, {
                                    name: "Marcus",
                                    emoji: "🐺",
                                    nameColor: "#16A34A",
                                    text: "the typography is so clean",
                                    time: "10:25",
                                    colors: t,
                                }),
                                (0, i.jsx)(tM, {
                                    name: "Yuki",
                                    emoji: "🌸",
                                    nameColor: "#EC4899",
                                    text: "syncing the component library now",
                                    time: "10:28",
                                    colors: t,
                                    reactions: [{ e: "💜", n: 3 }],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: "px-2 pb-2 pt-1",
                            children: (0, i.jsxs)("div", {
                                className:
                                    "flex items-center rounded-lg px-2 h-7 text-[9px]",
                                style: {
                                    background: t.inputBg,
                                    border: `1px solid ${t.inputBorder}`,
                                },
                                children: [
                                    (0, i.jsx)("span", {
                                        style: {
                                            color: t.textMuted,
                                        },
                                        children: "⊕",
                                    }),
                                    (0, i.jsx)("span", {
                                        className: "ml-2",
                                        style: {
                                            color: t.textMuted,
                                        },
                                        children:
                                            "Message #general",
                                    }),
                                    (0, i.jsx)("div", {
                                        className:
                                            "ml-auto flex gap-0.5",
                                        children: ["📎", "😊"].map(
                                            (e) =>
                                                (0, i.jsx)(
                                                    "span",
                                                    {
                                                        className:
                                                            "text-[8px]",
                                                        style: {
                                                            color: t.textMuted,
                                                        },
                                                        children: e,
                                                    },
                                                    e,
                                                ),
                                        ),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className:
                        "w-[90px] flex-shrink-0 border-l px-1.5 pt-2",
                    style: {
                        background: t.sidebarBg,
                        borderColor: t.border,
                    },
                    children: [
                        (0, i.jsx)("p", {
                            className:
                                "text-[7px] font-bold uppercase tracking-wider px-1 mb-1",
                            style: { color: t.textMuted },
                            children: "Online — 4",
                        }),
                        [
                            { n: "Kai", e: "🐉" },
                            { n: "Zara", e: "🦊" },
                            { n: "Marcus", e: "🐺" },
                            { n: "Yuki", e: "🌸" },
                        ].map((e) =>
                            (0, i.jsxs)(
                                "div",
                                {
                                    className:
                                        "flex items-center gap-1.5 px-1 py-[3px] rounded-md",
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className:
                                                        "w-4 h-4 rounded-full text-[7px] flex items-center justify-center",
                                                    style: {
                                                        background:
                                                            t.primarySoft,
                                                    },
                                                    children: e.e,
                                                }),
                                                (0, i.jsx)("span", {
                                                    className:
                                                        "absolute -bottom-px -right-px w-[5px] h-[5px] rounded-full",
                                                    style: {
                                                        background:
                                                            t.online,
                                                        border: `1px solid ${t.sidebarBg}`,
                                                    },
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("span", {
                                            className:
                                                "text-[8px] truncate",
                                            style: {
                                                color: t.textSecondary,
                                            },
                                            children: e.n,
                                        }),
                                    ],
                                },
                                e.n,
                            ),
                        ),
                    ],
                }),
            ],
        }),
    });
}
function tM({
    name: e,
    emoji: t,
    nameColor: n,
    text: r,
    time: l,
    colors: a,
    reactions: o,
}) {
    return (0, i.jsxs)("div", {
        className: "flex gap-1.5",
        children: [
            (0, i.jsx)("div", {
                className:
                    "w-5 h-5 rounded-full flex items-center justify-center text-[8px] flex-shrink-0 mt-0.5",
                style: { background: n + "15" },
                children: t,
            }),
            (0, i.jsxs)("div", {
                className: "flex-1 min-w-0",
                children: [
                    (0, i.jsxs)("div", {
                        className: "flex items-baseline gap-1",
                        children: [
                            (0, i.jsx)("span", {
                                className:
                                    "text-[9px] font-semibold",
                                style: { color: n },
                                children: e,
                            }),
                            (0, i.jsx)("span", {
                                className: "text-[7px]",
                                style: { color: a.textMuted },
                                children: l,
                            }),
                        ],
                    }),
                    (0, i.jsx)("p", {
                        className: "text-[9px] leading-[1.5]",
                        style: { color: a.text, opacity: 0.85 },
                        children: r,
                    }),
                    o &&
                        (0, i.jsx)("div", {
                            className: "flex gap-0.5 mt-0.5",
                            children: o.map((e, t) =>
                                (0, i.jsxs)(
                                    "span",
                                    {
                                        className:
                                            "flex items-center gap-0.5 px-1 h-[14px] rounded-full text-[7px]",
                                        style: {
                                            background: e.active
                                                ? a.primarySoft
                                                : a.inputBg,
                                            border: e.active
                                                ? `1px solid ${a.primary}40`
                                                : "1px solid transparent",
                                            color: e.active
                                                ? a.primary
                                                : a.textMuted,
                                        },
                                        children: [e.e, " ", e.n],
                                    },
                                    t,
                                ),
                            ),
                        }),
                ],
            }),
        ],
    });
}
function tR({ theme: e }) {
    let t = e.colors,
        n = [
            { label: "Primary", color: t.primary },
            { label: "Hover", color: t.primaryHover },
            { label: "Text", color: t.text },
            { label: "Secondary", color: t.textSecondary },
            { label: "Sidebar", color: t.sidebarBg },
            { label: "Chat BG", color: t.chatBg },
            { label: "Border", color: t.border },
            { label: "Online", color: t.online },
        ];
    return (0, i.jsx)("div", {
        className: "flex gap-1 flex-wrap mt-3",
        children: n.map((e) =>
            (0, i.jsxs)(
                "div",
                {
                    className: "flex flex-col items-center gap-0.5",
                    children: [
                        (0, i.jsx)("div", {
                            className:
                                "w-6 h-6 rounded-md border border-black/10 shadow-sm",
                            style: { background: e.color },
                        }),
                        (0, i.jsx)("span", {
                            className: "text-[8px] text-[#9590A8]",
                            children: e.label,
                        }),
                    ],
                },
                e.label,
            ),
        ),
    });
}
function tB({ theme: e }) {
    let t = e.colors,
        n = [
            `--chatty-primary: ${t.primary};`,
            `--chatty-primary-hover: ${t.primaryHover};`,
            `--chatty-text: ${t.text};`,
            `--chatty-text-secondary: ${t.textSecondary};`,
            `--chatty-text-muted: ${t.textMuted};`,
            `--chatty-bg-page: ${t.pageBg};`,
            `--chatty-bg-sidebar: ${t.sidebarBg};`,
            `--chatty-bg-chat: ${t.chatBg};`,
            `--chatty-bg-card: ${t.cardBg};`,
            `--chatty-border: ${t.border};`,
            `--chatty-input-bg: ${t.inputBg};`,
            `--chatty-input-border: ${t.inputBorder};`,
        ];
    return (0, i.jsx)("div", {
        className:
            "mt-3 bg-[#1C1435] rounded-lg p-3 overflow-x-auto",
        children: (0, i.jsxs)("pre", {
            className: "font-mono text-[10px] leading-[1.7]",
            children: [
                (0, i.jsx)("span", {
                    className: "text-[#9590A8]",
                    children: `/* ${e.name} Theme */`,
                }),
                "\n",
                (0, i.jsx)("span", {
                    className: "text-[#EC4899]",
                    children: ":root",
                }),
                (0, i.jsx)("span", {
                    className: "text-[#E8E5F0]",
                    children: " {",
                }),
                "\n",
                n.map((e, t) =>
                    (0, i.jsxs)(
                        "span",
                        {
                            children: [
                                (0, i.jsx)("span", {
                                    className: "text-[#E8E5F0]",
                                    children: "  ",
                                }),
                                (0, i.jsx)("span", {
                                    className: "text-[#8B5CF6]",
                                    children: e.split(":")[0],
                                }),
                                (0, i.jsx)("span", {
                                    className: "text-[#E8E5F0]",
                                    children: ": ",
                                }),
                                (0, i.jsx)("span", {
                                    className: "text-[#34D399]",
                                    children: e.split(": ")[1],
                                }),
                                "\n",
                            ],
                        },
                        t,
                    ),
                ),
                (0, i.jsx)("span", {
                    className: "text-[#E8E5F0]",
                    children: "}",
                }),
            ],
        }),
    });
}
function tI({ theme: e, index: t }) {
    let [n, r] = (0, s.useState)(!1);
    return (0, i.jsxs)("div", {
        className: "space-y-4",
        style: {
            animation: `fade-in-up 0.4s ease-out ${0.08 * t}s backwards`,
        },
        children: [
            (0, i.jsx)(tD, { theme: e }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        className: "flex items-center gap-2 mb-1",
                        children: [
                            (0, i.jsx)("div", {
                                className:
                                    "w-4 h-4 rounded-full border border-black/10 shadow-sm",
                                style: {
                                    background: e.colors.primary,
                                },
                            }),
                            (0, i.jsx)("h3", {
                                className:
                                    "text-[16px] font-bold text-[#1C1435]",
                                children: e.name,
                            }),
                            (0, i.jsx)("span", {
                                className:
                                    "text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded",
                                style: {
                                    background:
                                        "light" === e.mode
                                            ? "#F7F5FB"
                                            : "#1C1435",
                                    color:
                                        "light" === e.mode
                                            ? "#7C7494"
                                            : "#9590A8",
                                },
                                children: e.mode,
                            }),
                        ],
                    }),
                    (0, i.jsx)("p", {
                        className:
                            "text-[13px] text-[#7C7494] leading-relaxed",
                        children: e.description,
                    }),
                ],
            }),
            (0, i.jsx)(tR, { theme: e }),
            (0, i.jsx)("button", {
                onClick: () => r(!n),
                className:
                    "text-[12px] font-semibold text-[#7C3AED] hover:underline",
                children: n
                    ? "Hide CSS variables ↑"
                    : "Show CSS variables ↓",
            }),
            n && (0, i.jsx)(tB, { theme: e }),
        ],
    });
}
(0, u.createRoot)(document.getElementById("root")).render(
    (0, i.jsx)(s.StrictMode, {
        children: (0, i.jsx)(function () {
            return (0, i.jsxs)("div", {
                className: "min-h-screen bg-[#FAF8FF]",
                children: [
                    (0, i.jsx)("header", {
                        className:
                            "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[hsl(260,20%,93%)]",
                        children: (0, i.jsxs)("div", {
                            className:
                                "max-w-[1200px] mx-auto px-6 h-16 flex items-center gap-3",
                            children: [
                                (0, i.jsxs)("svg", {
                                    width: "28",
                                    height: "28",
                                    viewBox: "0 0 80 80",
                                    fill: "none",
                                    children: [
                                        (0, i.jsx)("defs", {
                                            children: (0, i.jsxs)(
                                                "linearGradient",
                                                {
                                                    id: "lg",
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: "80",
                                                    y2: "80",
                                                    gradientUnits:
                                                        "userSpaceOnUse",
                                                    children: [
                                                        (0, i.jsx)(
                                                            "stop",
                                                            {
                                                                stopColor:
                                                                    "#8B5CF6",
                                                            },
                                                        ),
                                                        (0, i.jsx)(
                                                            "stop",
                                                            {
                                                                offset: "1",
                                                                stopColor:
                                                                    "#6D28D9",
                                                            },
                                                        ),
                                                    ],
                                                },
                                            ),
                                        }),
                                        (0, i.jsx)("rect", {
                                            width: "80",
                                            height: "80",
                                            rx: "20",
                                            fill: "url(#lg)",
                                        }),
                                        (0, i.jsx)("path", {
                                            d: "M18 24C18 20.7 20.7 18 24 18L52 18C55.3 18 58 20.7 58 24L58 42C58 45.3 55.3 48 52 48L36 48L26 56L26 48L24 48C20.7 48 18 45.3 18 42Z",
                                            fill: "white",
                                            fillOpacity: "0.9",
                                        }),
                                        (0, i.jsx)("circle", {
                                            cx: "30",
                                            cy: "33",
                                            r: "3.2",
                                            fill: "#7C3AED",
                                            opacity: "0.85",
                                        }),
                                        (0, i.jsx)("circle", {
                                            cx: "40",
                                            cy: "33",
                                            r: "3.2",
                                            fill: "#7C3AED",
                                            opacity: "0.65",
                                        }),
                                        (0, i.jsx)("circle", {
                                            cx: "50",
                                            cy: "33",
                                            r: "3.2",
                                            fill: "#7C3AED",
                                            opacity: "0.45",
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("span", {
                                    className:
                                        "font-display text-lg font-bold text-[#1c1435]",
                                    children: "chatty",
                                }),
                                (0, i.jsx)(eH, {
                                    orientation: "vertical",
                                    className:
                                        "h-5 bg-[hsl(260,20%,90%)] mx-1",
                                }),
                                (0, i.jsx)("span", {
                                    className:
                                        "text-sm text-[#7C7494]",
                                    children: "Theme Gallery",
                                }),
                                (0, i.jsx)("span", {
                                    className:
                                        "ml-auto text-[12px] text-[#9590A8]",
                                    children:
                                        "10 themes — 5 light, 5 dark",
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("main", {
                        className:
                            "max-w-[1200px] mx-auto px-6 py-10",
                        children: [
                            (0, i.jsxs)("div", {
                                className: "mb-10",
                                children: [
                                    (0, i.jsx)("h1", {
                                        className:
                                            "font-display text-[36px] font-bold text-[#1C1435] mb-2 tracking-tight",
                                        children: "Theme Gallery",
                                    }),
                                    (0, i.jsx)("p", {
                                        className:
                                            "text-[16px] text-[#7C7494] max-w-2xl",
                                        children:
                                            'Every theme defines the full Chatty surface palette — backgrounds, text, borders, inputs, and the primary accent. Click "Show CSS variables" on any theme to grab the tokens.',
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(tk, {
                                defaultValue: "light",
                                children: [
                                    (0, i.jsxs)(t_, {
                                        className:
                                            "bg-[#F7F5FB] rounded-xl p-1 h-auto mb-8",
                                        children: [
                                            (0, i.jsx)(tT, {
                                                value: "light",
                                                className:
                                                    "rounded-lg text-[14px] font-semibold px-5 py-2 data-[state=active]:bg-white data-[state=active]:text-[#7C3AED] data-[state=active]:shadow-sm data-[state=inactive]:text-[#7C7494]",
                                                children:
                                                    "☀️ Light Themes",
                                            }),
                                            (0, i.jsx)(tT, {
                                                value: "dark",
                                                className:
                                                    "rounded-lg text-[14px] font-semibold px-5 py-2 data-[state=active]:bg-white data-[state=active]:text-[#7C3AED] data-[state=active]:shadow-sm data-[state=inactive]:text-[#7C7494]",
                                                children:
                                                    "🌙 Dark Themes",
                                            }),
                                            (0, i.jsx)(tT, {
                                                value: "all",
                                                className:
                                                    "rounded-lg text-[14px] font-semibold px-5 py-2 data-[state=active]:bg-white data-[state=active]:text-[#7C3AED] data-[state=active]:shadow-sm data-[state=inactive]:text-[#7C7494]",
                                                children: "All",
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(tA, {
                                        value: "light",
                                        children: (0, i.jsx)(
                                            "div",
                                            {
                                                className:
                                                    "grid grid-cols-2 gap-10",
                                                children: tL.map(
                                                    (e, t) =>
                                                        (0, i.jsx)(
                                                            tI,
                                                            {
                                                                theme: e,
                                                                index: t,
                                                            },
                                                            e.name,
                                                        ),
                                                ),
                                            },
                                        ),
                                    }),
                                    (0, i.jsx)(tA, {
                                        value: "dark",
                                        children: (0, i.jsx)(
                                            "div",
                                            {
                                                className:
                                                    "grid grid-cols-2 gap-10",
                                                children: tO.map(
                                                    (e, t) =>
                                                        (0, i.jsx)(
                                                            tI,
                                                            {
                                                                theme: e,
                                                                index: t,
                                                            },
                                                            e.name,
                                                        ),
                                                ),
                                            },
                                        ),
                                    }),
                                    (0, i.jsxs)(tA, {
                                        value: "all",
                                        children: [
                                            (0, i.jsx)("h2", {
                                                className:
                                                    "font-display text-[22px] font-bold text-[#1C1435] mb-6",
                                                children:
                                                    "☀️ Light",
                                            }),
                                            (0, i.jsx)("div", {
                                                className:
                                                    "grid grid-cols-2 gap-10 mb-14",
                                                children: tL.map(
                                                    (e, t) =>
                                                        (0, i.jsx)(
                                                            tI,
                                                            {
                                                                theme: e,
                                                                index: t,
                                                            },
                                                            e.name,
                                                        ),
                                                ),
                                            }),
                                            (0, i.jsx)(eH, {
                                                className:
                                                    "bg-[hsl(260,20%,91%)] mb-10",
                                            }),
                                            (0, i.jsx)("h2", {
                                                className:
                                                    "font-display text-[22px] font-bold text-[#1C1435] mb-6",
                                                children: "🌙 Dark",
                                            }),
                                            (0, i.jsx)("div", {
                                                className:
                                                    "grid grid-cols-2 gap-10",
                                                children: tO.map(
                                                    (e, t) =>
                                                        (0, i.jsx)(
                                                            tI,
                                                            {
                                                                theme: e,
                                                                index: t,
                                                            },
                                                            e.name,
                                                        ),
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)("footer", {
                        className:
                            "border-t border-[hsl(260,20%,93%)] py-8 text-center",
                        children: (0, i.jsx)("p", {
                            className: "text-[12px] text-[#9590A8]",
                            children:
                                "chatty Theme Gallery v1.0 — March 2026",
                        }),
                    }),
                ],
            });
        }, {}),
    }),
);
