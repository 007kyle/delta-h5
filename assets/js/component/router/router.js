! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? exports.Router = t() : e.Router = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            a = n(1),
            s = r(a),
            u = function () {
                function e(t) {
                    o(this, e), this._index = 1, this._options = s.extend({
                        container: "#container",
                        enter: "enter",
                        enterTimeout: 0,
                        leave: "leave",
                        leaveTimeout: 0
                    }, t), this._$contaienr = document.querySelector(this._options.container), this._routes = [], this._default = null
                }
                return i(e, [{
                    key: "init",
                    value: function () {
                        var e = this;
                        window.addEventListener("hashchange", function (t) {
                            var n = s.getHash(t.newURL),
                                r = history.state || {};
                            e.go(n, r._index <= e._index)
                        }, !1), history.state && history.state._index && (this._index = history.state._index), this._index--;
                        var t = s.getHash(location.href),
                            n = this._getRoute(t);
                        return this.go(n ? t : this._default), this
                    }
                }, {
                    key: "push",
                    value: function (e) {
                        return e = s.extend({
                            url: "*",
                            className: "",
                            render: s.noop,
                            bind: s.noop
                        }, e), this._routes.push(e), this
                    }
                }, {
                    key: "setDefault",
                    value: function (e) {
                        return this._default = e, this
                    }
                }, {
                    key: "go",
                    value: function (e) {
                        var t = this,
                            n = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                            r = this._getRoute(e);
                        if (!r) throw new Error("url " + e + " was not found");
                        return ! function () {
                            var o = "function" == typeof r.render ? r.render(r.params) : "",
                                i = t._$contaienr.hasChildNodes();
                            i && ! function () {
                                var e = t._$contaienr.childNodes[0];
                                n && e.classList.add(t._options.leave), t._options.leaveTimeout > 0 ? setTimeout(function () {
                                    e.parentNode.removeChild(e)
                                }, t._options.leaveTimeout) : e.parentNode.removeChild(e)
                            }();
                            var a = document.createElement("div");
                            r.className && a.classList.add('du-page-'+r.className), a.innerHTML = o, t._$contaienr.appendChild(a), !n && t._options.enter && a.classList.add(t._options.enter), t._options.enterTimeout > 0 ? setTimeout(function () {
                                a.classList.remove(t._options.enter)
                            }, t._options.enterTimeout) : a.classList.remove(t._options.enter), location.hash = "#" + e;
                            try {
                                n ? t._index-- : t._index++, history.replaceState && history.replaceState({
                                    _index: t._index
                                }, "", location.href)
                            } catch (s) {}
                            "function" != typeof r.bind || r.__isBind || (r.bind.call(a), r.__isBind = !0)
                        }(), this
                    }
                }, {
                    key: "_getRoute",
                    value: function (e) {
                        for (var t = 0, n = this._routes.length; n > t; t++) {
                            var r = this._routes[t],
                                o = s.getRegExp(r.url),
                                i = s.getParams(r.url),
                                a = o.exec(e);
                            if (a) {
                                r.params = {};
                                for (var u = 0, c = i.length; c > u; u++) {
                                    var l = i[u];
                                    r.params[l] = a[u + 1]
                                }
                                return r
                            }
                        }
                        return null
                    }
                }]), e
            }();
        t["default"] = u, e.exports = t["default"]
    }, function (e, t) {
        "use strict";

        function n(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return -1 !== e.indexOf("#") ? e.substring(e.indexOf("#") + 1) : "/"
        }

        function o() {}

        function i(e) {
            var t = /\((.*?)\)/g,
                n = /(\(\?)?:\w+/g,
                r = /\*\w+/g,
                o = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            return e = e.replace(o, "\\$&").replace(t, "(?:$1)?").replace(n, function (e, t) {
                return t ? e : "([^/?]+)"
            }).replace(r, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
        }

        function a(e) {
            for (var t = /:(\w+)/g, n = [], r = void 0; null !== (r = t.exec(e));) n.push(r[1]);
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.extend = n, t.getHash = r, t.noop = o, t.getRegExp = i, t.getParams = a
    }])
});
