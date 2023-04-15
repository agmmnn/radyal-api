(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [779],
  {
    9526: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/kelime/[name]",
        function () {
          return r(6827);
        },
      ]);
    },
    6827: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          default: function () {
            return F;
          },
        });
      var s = r(7568),
        a = r(9815),
        i = r(655),
        t = r(5893),
        o = r(7294),
        l = r(1163),
        c = r(6219),
        d = r(9008),
        h = r.n(d),
        x = r(1664),
        m = r.n(x),
        u = r(5810),
        p = r(523),
        f = r.n(p),
        g = r(1354),
        j = r.n(g),
        y = r(9424),
        v = r(2965),
        k = r(4044),
        b = r(1659),
        C = r(4713),
        T = r(4762),
        w = r(4746),
        S = r(8680),
        R = r.n(S),
        O = function (e) {
          var n = e.word,
            r = e.theme,
            s = (0, o.useContext)(v.k),
            a = s.languages,
            i = s.sources,
            l = (0, C.aF)().user;
          n = JSON.parse(n);
          var c = 0,
            d = 0;
          n.references && (c = n.references.length),
            n.similarWords && (d = n.similarWords.length);
          var h = (0, k.KY)(n.name, !1, !0, !1, !1, !0);
          return (0, t.jsxs)(w.zq, {
            children: [
              (0, t.jsx)(T.Z, {
                place: "top",
                effect: "solid",
                className: R().tooltip,
                backgroundColor: r.tooltip,
                textColor: r.text,
              }),
              (0, t.jsxs)(w.hz, {
                children: [
                  (0, t.jsx)(w.mN, {
                    children: h,
                  }),
                  (0, t.jsxs)(w.xr, {
                    children: [
                      (0, t.jsxs)(w.OG, {
                        href: "https://donate.stripe.com/7sI9CgeAe1WV43C288",
                        rel: "noreferrer",
                        target: "_blank",
                        children: [
                          (0, t.jsx)(w.VB, {}),
                          (0, t.jsx)("span", {
                            style: {
                              transition: "none",
                            },
                            children: "tip box",
                          }),
                        ],
                      }),
                      l &&
                        (0, t.jsx)(m(), {
                          href: "/admin/edit?w=".concat(
                            encodeURIComponent(n.name)
                          ),
                          passHref: !0,
                          children: (0, t.jsxs)(w.aT, {
                            children: [
                              (0, t.jsx)(w.RO, {}),
                              (0, t.jsx)("span", {
                                style: {
                                  transition: "none",
                                },
                                children: "d\xfczenle",
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)(w.IB, {
                children: [
                  n.etymologies &&
                    n.etymologies.length > 0 &&
                    (0, t.jsx)(w.Ev, {
                      children: n.etymologies.map(function (e, n) {
                        var s,
                          o = "",
                          l = "";
                        return (
                          e.affixes &&
                            e.affixes.suffix &&
                            (l = (0, k.KY)(e.affixes.suffix.name, !0)),
                          e.affixes &&
                            e.affixes.prefix &&
                            (o = (0, k.KY)(e.affixes.prefix.name, !0)),
                          (0, t.jsxs)(
                            "span",
                            {
                              children: [
                                e.paranthesis &&
                                  e.paranthesis.includes("(") &&
                                  (0, t.jsx)("span", {
                                    children:
                                      e.paranthesis.length > 1
                                        ? e.paranthesis.slice(0, 1)
                                        : e.paranthesis,
                                  }),
                                (0, t.jsxs)("span", {
                                  "data-tip": e.relation.name,
                                  children: [
                                    e.relation && e.relation.abbreviation,
                                    " ",
                                  ],
                                }),
                                e.languages
                                  ? e.languages.map(function (n, r) {
                                      return (0, t.jsxs)(
                                        "span",
                                        {
                                          style: {
                                            fontWeight: "700",
                                          },
                                          "data-tip": n.name,
                                          children: [
                                            n.abbreviation,
                                            r === e.languages.length - 1
                                              ? " "
                                              : "/",
                                          ],
                                        },
                                        r
                                      );
                                    })
                                  : null,
                                e.affixes &&
                                  e.affixes.prefix &&
                                  (0, t.jsx)(m(), {
                                    href: "/ek/".concat(
                                      encodeURIComponent(e.affixes.prefix.name)
                                    ),
                                    children: (0, t.jsx)("a", {
                                      children: (0, t.jsx)("span", {
                                        children: o,
                                      }),
                                    }),
                                  }),
                                " ",
                                e.romanizedText &&
                                  (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)("span", {
                                        style: {
                                          fontStyle: "italic",
                                          fontFamily: e.romanizedText.includes(
                                            "\u014b"
                                          )
                                            ? "'Tahoma', 'Helvetica Neue', 'Helvetica', 'Roboto', sans-serif"
                                            : "'Tahoma', '-apple-system', 'Helvetica Neue', 'Helvetica', 'Roboto', sans-serif",
                                        },
                                        "data-tip":
                                          "*" === e.romanizedText.slice(0, 1)
                                            ? "yaz\u0131l\u0131 \xf6rne\u011fi bulunmayan " +
                                              e.wordClass.name
                                            : "",
                                        children: (0, k.KY)(
                                          e.romanizedText,
                                          !1,
                                          !1,
                                          !0,
                                          !1,
                                          !1
                                        ),
                                      }),
                                      " ",
                                    ],
                                  }),
                                e.originalText &&
                                  "t" !== e.originalText &&
                                  "y" !== e.originalText &&
                                  "e" !== e.originalText &&
                                  (0, t.jsx)("span", {
                                    dir: "rtl",
                                    style: {
                                      fontFamily:
                                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Tahoma,', 'Helvetica', 'Open Sans', 'Helvetica Neue', sans-serif",
                                    },
                                    children: e.originalText,
                                  }),
                                " ",
                                e.grammar &&
                                  0 !== Object.keys(e.grammar).length &&
                                  e.grammar.constructor === Object &&
                                  (0, t.jsxs)(w.V1, {
                                    children: [
                                      "[",
                                      e.grammar.semiticRoot &&
                                        (0, t.jsx)("i", {
                                          "data-tip":
                                            e.languages[0].name + " k\xf6k",
                                          children: e.grammar.semiticRoot,
                                        }),
                                      e.grammar.semiticForm &&
                                        0 !==
                                          Object.keys(e.grammar.semiticForm)
                                            .length &&
                                        Object.getPrototypeOf(
                                          e.grammar.semiticForm
                                        ) === Object.prototype &&
                                        (0, t.jsxs)(t.Fragment, {
                                          children: [
                                            e.grammar.semiticRoot && " ",
                                            (0, t.jsx)(m(), {
                                              href: "/vezin/".concat(
                                                encodeURIComponent(
                                                  e.grammar.semiticForm.name
                                                )
                                              ),
                                              children: (0, t.jsx)("a", {
                                                "data-tip":
                                                  e.languages[0].name +
                                                  " vezin",
                                                children:
                                                  e.grammar.semiticForm.name,
                                              }),
                                            }),
                                          ],
                                        }),
                                      e.grammar.case &&
                                        e.grammar.case.length > 0 &&
                                        e.grammar.case.map(function (n, r) {
                                          return (0, t.jsxs)(
                                            "span",
                                            {
                                              "data-tip": n.tooltip,
                                              children: [
                                                (e.grammar.semiticRoot ||
                                                  e.grammar.semiticForm) &&
                                                  " ",
                                                r === e.grammar.case.length - 1
                                                  ? n.name
                                                  : n.name + " ",
                                              ],
                                            },
                                            r
                                          );
                                        }),
                                      "]",
                                      " ",
                                    ],
                                  }),
                                e.definition &&
                                  (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)("span", {
                                        "data-tip":
                                          "?" === e.definition
                                            ? "bilinmeyen anlam"
                                            : "a. a." === e.definition
                                            ? "ayn\u0131 anlamda"
                                            : "",
                                        children: (0, k.$F)(
                                          e.definition,
                                          !1,
                                          !1,
                                          !1,
                                          a,
                                          i,
                                          r
                                        ),
                                      }),
                                      !e.paranthesis ||
                                      (null === e ||
                                      void 0 === e ||
                                      null === (s = e.affixes) ||
                                      void 0 === s
                                        ? void 0
                                        : s.suffix)
                                        ? " "
                                        : "",
                                    ],
                                  }),
                                e.affixes &&
                                  e.affixes.suffix &&
                                  (0, t.jsx)(m(), {
                                    href: "/ek/".concat(
                                      encodeURIComponent(e.affixes.suffix.name)
                                    ),
                                    children: (0, t.jsx)("a", {
                                      children: (0, t.jsx)("span", {
                                        children: l,
                                      }),
                                    }),
                                  }),
                                e.neologism &&
                                  (0, t.jsxs)(w.V1, {
                                    children: [
                                      (0, t.jsx)("span", {
                                        "data-tip":
                                          "%r" === e.neologism.slice(0, 2)
                                            ? "Kaynak"
                                            : "\u0130lk kullan\u0131m\u0131",
                                        children: " (\u263c ",
                                      }),
                                      (0, k.$F)(
                                        e.neologism,
                                        !1,
                                        !1,
                                        !0,
                                        a,
                                        i,
                                        r
                                      ),
                                      ") ",
                                    ],
                                  }),
                                e.paranthesis &&
                                  e.paranthesis.includes(")") &&
                                  (0, t.jsx)("span", {
                                    children:
                                      e.paranthesis.length > 1
                                        ? e.paranthesis.slice(-1)
                                        : e.paranthesis,
                                  }),
                                " ",
                              ],
                            },
                            n
                          )
                        );
                      }),
                    }),
                  n.references &&
                    0 !== c &&
                    (0, t.jsxs)(w.Ev, {
                      children: [
                        (0, t.jsx)(w.h1, {
                          children: "Ayr\u0131ca bak\u0131n\u0131z: ",
                        }),
                        (0, t.jsx)("span", {
                          children: n.references.map(function (e, n) {
                            var r = (0, k.KY)(e.name);
                            return (0, t.jsxs)(
                              "span",
                              {
                                children: [
                                  (0, t.jsx)(m(), {
                                    href: "/kelime/".concat(e.name),
                                    scroll: !1,
                                    children: (0, t.jsx)("a", {
                                      children: (0, t.jsx)("span", {
                                        children: r,
                                      }),
                                    }),
                                  }),
                                  n + 1 !== c ? ", " : "",
                                ],
                              },
                              n
                            );
                          }),
                        }),
                      ],
                    }),
                  n.note &&
                    (0, t.jsxs)(w.Ev, {
                      children: [
                        (0, t.jsx)(w.h1, {
                          children: "Not: ",
                        }),
                        (0, t.jsx)("div", {
                          style: {
                            display: "inline",
                          },
                          children: (0, k.$F)(n.note, !1, !1, !1, a, i, r),
                        }),
                      ],
                    }),
                  n.similarWords &&
                    0 !== d &&
                    (0, t.jsxs)(w.Ev, {
                      children: [
                        (0, t.jsx)(w.h1, {
                          children: "Benzer s\xf6zc\xfckler: ",
                        }),
                        (0, t.jsx)("div", {
                          style: {
                            display: "inline",
                          },
                          children: n.similarWords
                            .sort(function (e, n) {
                              return e
                                .toLocaleLowerCase("tr-TR")
                                .localeCompare(n.toLocaleLowerCase("tr-TR"));
                            })
                            .map(function (e, n) {
                              var r = (0, k.KY)(e, !1, !1, !1, !0);
                              return (0, t.jsxs)(
                                "span",
                                {
                                  children: [
                                    (0, t.jsx)("span", {
                                      children: r,
                                    }),
                                    (0, t.jsx)("span", {
                                      children: n + 1 !== d ? ", " : "",
                                    }),
                                  ],
                                },
                                n
                              );
                            }),
                        }),
                      ],
                    }),
                  n.referenceOf &&
                    0 !== n.referenceOf.length &&
                    (0, t.jsxs)(w.Ev, {
                      children: [
                        (0, t.jsxs)(w.h1, {
                          children: ["Bu maddeye g\xf6nderenler:", " "],
                        }),
                        (0, t.jsx)("div", {
                          style: {
                            display: "inline",
                          },
                          children: n.referenceOf
                            .sort(function (e, n) {
                              return e.name
                                .toLocaleLowerCase("tr-TR")
                                .localeCompare(
                                  n.name.toLocaleLowerCase("tr-TR")
                                );
                            })
                            .map(function (e, r) {
                              var s = (0, k.KY)(e.name);
                              return (0, t.jsxs)(
                                "span",
                                {
                                  children: [
                                    (0, t.jsx)(m(), {
                                      href: "/kelime/".concat(e.name),
                                      scroll: !1,
                                      children: (0, t.jsx)("a", {
                                        children: (0, t.jsx)("span", {
                                          children: s,
                                        }),
                                      }),
                                    }),
                                    e.referenceOf.length > 0
                                      ? (0, t.jsxs)("span", {
                                          children: [
                                            " (",
                                            e.referenceOf.map(function (n, r) {
                                              var s = (0, k.KY)(n.name);
                                              return (0, t.jsxs)(
                                                "span",
                                                {
                                                  children: [
                                                    (0, t.jsx)(m(), {
                                                      href: "/kelime/".concat(
                                                        n.name
                                                      ),
                                                      scroll: !1,
                                                      children: (0, t.jsx)(
                                                        "a",
                                                        {
                                                          children: s,
                                                        }
                                                      ),
                                                    }),
                                                    r + 1 !==
                                                    e.referenceOf.length
                                                      ? ", "
                                                      : "",
                                                  ],
                                                },
                                                r
                                              );
                                            }),
                                            ")",
                                          ],
                                        })
                                      : null,
                                    r + 1 !== n.referenceOf.length ? ", " : "",
                                  ],
                                },
                                r
                              );
                            }),
                        }),
                      ],
                    }),
                  n.histories &&
                    (n.histories[0].source ||
                      n.histories[0].date ||
                      n.histories[0].definition ||
                      n.histories[0].excerpt ||
                      n.histories[0].quote) &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(w.Ut, {
                          style: {
                            color: r.text,
                          },
                          children: "Tarih\xe7e:",
                        }),
                        (0, t.jsx)(w.Ev, {
                          children: n.histories
                            .sort(function (e, n) {
                              return (
                                parseInt(e.date.replace(/\D/g, ""), 10) -
                                parseInt(n.date.replace(/\D/g, ""), 10)
                              );
                            })
                            .map(function (e, s) {
                              var o = "";
                              e.quote &&
                                e.quote.length > 0 &&
                                ((o = e.quote
                                  .split(/(\s+)/)
                                  .filter(function (e) {
                                    return e.trim().length > 0;
                                  })).forEach(function (e, n) {
                                  e.includes("%u") &&
                                    (o[n] =
                                      "<span style='text-decoration: underline'>" +
                                      e.replace("%u", "") +
                                      "</span>");
                                }, o),
                                (o = "<i>" + o.join(" ") + "</i>"));
                              var l = "";
                              return (
                                e.source &&
                                  (e.source.name ||
                                    e.source.book ||
                                    (l =
                                      e.source.abbreviation +
                                      (e.date ? ", " : "")),
                                  e.source.name &&
                                    (l =
                                      0 === e.source.name.localeCompare("anon.")
                                        ? "anonim"
                                        : e.source.name),
                                  e.source.book &&
                                    (l +=
                                      (e.source.name ? ", " : "") +
                                      e.source.book)),
                                e.date &&
                                  (l +=
                                    (e.source &&
                                    (e.source.name || e.source.book)
                                      ? ", "
                                      : "") + e.date),
                                (0, t.jsxs)(
                                  w.d8,
                                  {
                                    isLast: s === n.histories.length - 1,
                                    children: [
                                      (0, t.jsxs)("div", {
                                        children: [
                                          (0, t.jsx)("span", {
                                            style: {
                                              fontWeight: "600",
                                            },
                                            "data-tip": e.language
                                              ? e.language.name
                                              : "",
                                            children:
                                              e.language &&
                                              e.language.abbreviation + ": ",
                                          }),
                                          e.excerpt &&
                                            (0, t.jsxs)("span", {
                                              style: {
                                                fontStyle: "italic",
                                                fontFamily: e.excerpt.includes(
                                                  "\u014b"
                                                )
                                                  ? "'Tahoma', 'Helvetica Neue', 'Helvetica', 'Roboto', sans-serif"
                                                  : "'Tahoma', '-apple-system', 'Helvetica Neue', 'Helvetica', 'Roboto', sans-serif",
                                              },
                                              children: [e.excerpt, " "],
                                            }),
                                          e.definition &&
                                            "\u201c" + e.definition + "\u201d ",
                                          (e.source || e.date) &&
                                            (0, t.jsx)(w.Hu, {
                                              children: "[" + l + "]",
                                            }),
                                        ],
                                      }),
                                      e.quote &&
                                        (0, t.jsx)("div", {
                                          style: {
                                            fontStyle: "italic",
                                            fontFamily: e.quote.includes(
                                              "\u014b"
                                            )
                                              ? "'Tahoma', 'Helvetica Neue', 'Helvetica', 'Roboto', sans-serif"
                                              : "'Tahoma', '-apple-system', 'Helvetica Neue', 'Helvetica', 'Roboto', sans-serif",
                                            marginLeft: "1rem",
                                          },
                                          children: (0, k.$F)(
                                            e.quote,
                                            !1,
                                            !0,
                                            !1,
                                            a,
                                            i,
                                            r
                                          ),
                                        }),
                                    ],
                                  },
                                  s
                                )
                              );
                            }),
                        }),
                      ],
                    }),
                ],
              }),
              n.actualTimeUpdated &&
                (0, t.jsxs)(w.DN, {
                  children: [
                    (0, t.jsx)(w.yl, {}),
                    (0, t.jsx)(w.CJ, {
                      "data-tip":
                        "Son g\xfcncelleme: " +
                        (new Date(n.actualTimeUpdated).getFullYear() <= 1970
                          ? "1 Ocak 2011'den \xf6nce"
                          : new Date(n.actualTimeUpdated).toLocaleDateString(
                              "tr-TR",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                timeZone: "Europe/Istanbul",
                              }
                            )),
                      children:
                        new Date(n.actualTimeUpdated).getFullYear() <= 1970
                          ? "<01.01.2011"
                          : new Date(n.actualTimeUpdated).toLocaleDateString(
                              "tr-TR",
                              {
                                timeZone: "Europe/Istanbul",
                              }
                            ),
                    }),
                  ],
                }),
            ],
          });
        },
        U = function (e) {
          var n,
            r = e.word,
            s = e.theme,
            a = (0, o.useContext)(v.k),
            i = a.languages,
            l = a.sources,
            c = (0, C.aF)().user;
          r = JSON.parse(r);
          var d = 0,
            h = 0;
          r.references && (d = r.references.length),
            r.similarWords && (h = r.similarWords.length);
          var x = (0, k.KY)(r.name, !1, !0, !1, !1, !0);
          return (0, t.jsxs)(w.zq, {
            children: [
              (0, t.jsxs)(w.hz, {
                children: [
                  (0, t.jsx)(w.mN, {
                    children: x,
                  }),
                  (0, t.jsxs)(w.xr, {
                    children: [
                      (0, t.jsxs)(w.OG, {
                        href: "https://donate.stripe.com/7sI9CgeAe1WV43C288",
                        rel: "noreferrer",
                        target: "_blank",
                        children: [
                          (0, t.jsx)(w.VB, {}),
                          (0, t.jsx)("span", {
                            style: {
                              transition: "none",
                            },
                            children: "tip box",
                          }),
                        ],
                      }),
                      c &&
                        (0, t.jsx)(m(), {
                          href: "/admin/edit?w=".concat(
                            encodeURIComponent(r.name)
                          ),
                          passHref: !0,
                          children: (0, t.jsxs)(w.aT, {
                            children: [
                              (0, t.jsx)(w.RO, {}),
                              (0, t.jsx)("span", {
                                style: {
                                  transition: "none",
                                },
                                children: "d\xfczenle",
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)(w.LM, {
                children: [
                  ((r.etymologies && r.etymologies.length > 0) ||
                    (r.references && 0 !== d)) &&
                    (0, t.jsxs)(w.Ev, {
                      children: [
                        r.etymologies &&
                          r.etymologies.length > 0 &&
                          (0, t.jsx)(w.Ut, {
                            children: "K\xf6ken",
                          }),
                        (0, t.jsxs)(w.gq, {
                          children: [
                            r.etymologies &&
                              r.etymologies.length > 0 &&
                              r.etymologies.map(function (e, n) {
                                var a = 0 !== n && 1 !== r.etymologies.length,
                                  t = n !== r.etymologies.length - 1;
                                return r.etymologies && r.etymologies.length > 0
                                  ? (0, k.Pu)(
                                      0 === n,
                                      n === r.etymologies.length - 1,
                                      e,
                                      a,
                                      a ? r.etymologies[n - 1] : null,
                                      t,
                                      t ? r.etymologies[n + 1] : null,
                                      i,
                                      l,
                                      s
                                    )
                                  : null;
                              }),
                            r.references &&
                              0 !== d &&
                              (0, t.jsxs)("div", {
                                style: {
                                  lineHeight: "1.75rem",
                                  marginTop:
                                    r.etymologies && r.etymologies.length > 0
                                      ? "1rem"
                                      : "0.25rem",
                                },
                                children: [
                                  (0, t.jsx)("span", {
                                    children: "Daha fazla bilgi i\xe7in ",
                                  }),
                                  (0, t.jsx)("span", {
                                    children: r.references.map(function (e, n) {
                                      var r = (0, k.KY)(e.name);
                                      return (0, t.jsxs)(
                                        "span",
                                        {
                                          children: [
                                            (0, t.jsx)(m(), {
                                              href: "/kelime/".concat(e.name),
                                              scroll: !1,
                                              children: (0, t.jsx)("a", {
                                                children: r,
                                              }),
                                            }),
                                            n + 1 !== d ? ", " : "",
                                          ],
                                        },
                                        n
                                      );
                                    }),
                                  }),
                                  (0, t.jsxs)("span", {
                                    children: [
                                      1 === r.references.length
                                        ? " maddesine "
                                        : " maddelerine ",
                                      "bak\u0131n\u0131z.",
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                        r.note ||
                        r.similarWords ||
                        r.referenceOf ||
                        (r.histories &&
                          (r.histories[0].date ||
                            r.histories[0].definition ||
                            r.histories[0].excerpt ||
                            r.histories[0].quote))
                          ? (0, t.jsx)("hr", {})
                          : null,
                      ],
                    }),
                  r.note &&
                    (0, t.jsxs)(w.Ev, {
                      children: [
                        (0, t.jsx)(w.Ut, {
                          children: "Ek a\xe7\u0131klama",
                        }),
                        (0, t.jsx)(w.gq, {
                          children: (0, k.$F)(r.note, !0, !1, !1, i, l, s),
                        }),
                        (null === (n = r.similarWords) || void 0 === n
                          ? void 0
                          : n.length) > 0 ||
                        r.referenceOf ||
                        (r.histories &&
                          (r.histories[0].date ||
                            r.histories[0].definition ||
                            r.histories[0].excerpt ||
                            r.histories[0].quote))
                          ? (0, t.jsx)("hr", {})
                          : null,
                      ],
                    }),
                  r.similarWords &&
                    0 !== h &&
                    (0, t.jsxs)(w.Ev, {
                      children: [
                        (0, t.jsx)(w.Ut, {
                          children: "Benzer s\xf6zc\xfckler",
                        }),
                        (0, t.jsx)(w.gq, {
                          children: r.similarWords
                            .sort(function (e, n) {
                              return e
                                .toLocaleLowerCase("tr-TR")
                                .localeCompare(n.toLocaleLowerCase("tr-TR"));
                            })
                            .map(function (e, n) {
                              var r = (0, k.KY)(e, !1, !1, !1, !0);
                              return (0, t.jsxs)(
                                "span",
                                {
                                  children: [
                                    r,
                                    (0, t.jsx)("span", {
                                      children: n + 1 !== h ? ", " : "",
                                    }),
                                  ],
                                },
                                n
                              );
                            }),
                        }),
                        r.referenceOf ||
                        (r.histories &&
                          (r.histories[0].source ||
                            r.histories[0].date ||
                            r.histories[0].definition ||
                            r.histories[0].excerpt ||
                            r.histories[0].quote))
                          ? (0, t.jsx)("hr", {})
                          : null,
                      ],
                    }),
                  r.referenceOf &&
                    0 !== r.referenceOf.length &&
                    (0, t.jsxs)(w.Ev, {
                      children: [
                        (0, t.jsx)(w.Ut, {
                          children: "Bu maddeye g\xf6nderenler",
                        }),
                        (0, t.jsx)(w.gq, {
                          children: r.referenceOf
                            .sort(function (e, n) {
                              return e.name
                                .toLocaleLowerCase("tr-TR")
                                .localeCompare(
                                  n.name.toLocaleLowerCase("tr-TR")
                                );
                            })
                            .map(function (e, n) {
                              var s = (0, k.KY)(e.name);
                              return (0, t.jsxs)(
                                "span",
                                {
                                  children: [
                                    (0, t.jsx)(m(), {
                                      href: "/kelime/".concat(e.name),
                                      scroll: !1,
                                      children: (0, t.jsx)("a", {
                                        children: s,
                                      }),
                                    }),
                                    e.referenceOf.length > 0
                                      ? (0, t.jsxs)("span", {
                                          children: [
                                            " (",
                                            e.referenceOf.map(function (n, r) {
                                              var s = (0, k.KY)(n.name);
                                              return (0, t.jsxs)(
                                                "span",
                                                {
                                                  children: [
                                                    (0, t.jsx)(m(), {
                                                      href: "/kelime/".concat(
                                                        n.name
                                                      ),
                                                      scroll: !1,
                                                      children: (0, t.jsx)(
                                                        "a",
                                                        {
                                                          children: s,
                                                        }
                                                      ),
                                                    }),
                                                    r + 1 !==
                                                    e.referenceOf.length
                                                      ? ", "
                                                      : "",
                                                  ],
                                                },
                                                r
                                              );
                                            }),
                                            ")",
                                          ],
                                        })
                                      : null,
                                    n + 1 !== r.referenceOf.length ? ", " : "",
                                  ],
                                },
                                n
                              );
                            }),
                        }),
                        r.histories &&
                        (r.histories[0].date ||
                          r.histories[0].definition ||
                          r.histories[0].excerpt ||
                          r.histories[0].quote)
                          ? (0, t.jsx)("hr", {})
                          : null,
                      ],
                    }),
                  r.histories &&
                    (r.histories[0].source ||
                      r.histories[0].date ||
                      r.histories[0].definition ||
                      r.histories[0].excerpt ||
                      r.histories[0].quote) &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsxs)(w.Ut, {
                          children: [
                            "Tarih\xe7e",
                            " ",
                            (0, t.jsx)("span", {
                              children:
                                "(tespit edilen en eski T\xfcrk\xe7e kaynak ve di\u011fer \xf6rnekler)",
                            }),
                          ],
                        }),
                        (0, t.jsx)(w.Ev, {
                          style: {
                            marginLeft: "1rem",
                          },
                          children: r.histories
                            .sort(function (e, n) {
                              return (
                                parseInt(e.date.replace(/\D/g, ""), 10) -
                                parseInt(n.date.replace(/\D/g, ""), 10)
                              );
                            })
                            .map(function (e, n) {
                              var a,
                                o = "";
                              return (
                                e.quote &&
                                  e.quote.length > 0 &&
                                  (a = (0, k.$F)(e.quote, !0, !0, !1, i, l, s)),
                                e.source &&
                                  (e.source.name ||
                                    e.source.book ||
                                    (o =
                                      e.source.abbreviation +
                                      (e.date ? ", " : "")),
                                  e.source.name &&
                                    (o =
                                      0 === e.source.name.localeCompare("anon.")
                                        ? "anonim"
                                        : e.source.name),
                                  e.source.book &&
                                    (o +=
                                      (e.source.name ? ", " : "") +
                                      e.source.book)),
                                e.date &&
                                  (o +=
                                    (e.source &&
                                    (e.source.name || e.source.book)
                                      ? ", "
                                      : "") +
                                    (e.date.includes("<")
                                      ? e.date.replace("<", "") +
                                        " y\u0131l\u0131ndan \xf6nce"
                                      : e.date)),
                                (0, t.jsxs)(
                                  w.d8,
                                  {
                                    isLast: n === r.histories.length - 1,
                                    children: [
                                      (0, t.jsxs)("div", {
                                        children: [
                                          (0, t.jsx)(w.c5, {
                                            children:
                                              e.language &&
                                              e.language.name + ": ",
                                          }),
                                          e.excerpt &&
                                            (0, t.jsxs)(t.Fragment, {
                                              children: [
                                                (0, t.jsx)(w.Ht, {
                                                  children: (0, k.KY)(
                                                    e.excerpt,
                                                    !1,
                                                    !1,
                                                    !1,
                                                    !1
                                                  ),
                                                }),
                                                " ",
                                              ],
                                            }),
                                          (0, t.jsx)(w.OW, {
                                            children:
                                              e.definition &&
                                              "\u201c" +
                                                e.definition +
                                                "\u201d ",
                                          }),
                                          (e.source || e.date) &&
                                            (0, t.jsx)(w.Hu, {
                                              children: "[" + o + "]",
                                            }),
                                        ],
                                      }),
                                      e.quote &&
                                        (0, t.jsx)(w.gq, {
                                          style: {
                                            fontStyle: "italic",
                                          },
                                          children: a,
                                        }),
                                    ],
                                  },
                                  n
                                )
                              );
                            }),
                        }),
                      ],
                    }),
                ],
              }),
              r.actualTimeUpdated &&
                (0, t.jsxs)(w.DN, {
                  children: [
                    (0, t.jsx)(w.yl, {}),
                    (0, t.jsxs)("span", {
                      children: [
                        (0, t.jsx)(w.Mc, {
                          children: "Son g\xfcncelleme: ",
                        }),
                        (0, t.jsx)(w.CJ, {
                          children:
                            new Date(r.actualTimeUpdated).getFullYear() <= 1970
                              ? "1 Ocak 2011'den \xf6nce"
                              : new Date(
                                  r.actualTimeUpdated
                                ).toLocaleDateString("tr-TR", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                  timeZone: "Europe/Istanbul",
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        D = r(9413),
        H = r(7486),
        I = function (e) {
          var n = e.theme,
            r = e.isThemeDefault,
            d = e.handleThemeDefault,
            x = e.manualDarkMode,
            p = e.handleManualDarkMode,
            g = e.query,
            C = (0, l.useRouter)(),
            T = (0, o.useContext)(v.k),
            w = T.sessionId,
            S = T.isDetailedView,
            R = T.handleDetailedView,
            I = T.isSurroundingShown,
            F = T.handleSurroundingShown,
            L = T.searchHistory,
            _ = T.handleSearchHistory,
            z = T.languages,
            q = T.sources,
            E = (0, c.Z)(),
            N = (0, o.useRef)(null),
            K = (0, o.useRef)(null),
            Y = (0, o.useState)(!0),
            B = Y[0],
            W = Y[1],
            A = (0, o.useState)(null),
            Z = A[0],
            $ = A[1],
            G = (0, o.useState)(!1),
            V = G[0],
            M = G[1],
            J = (0, o.useState)(null),
            P = J[0],
            X = J[1],
            Q = (0, o.useState)(null),
            ee = Q[0],
            ne = Q[1],
            re = (0, o.useState)(null),
            se = re[0],
            ae = re[1],
            ie = (0, o.useState)(null),
            te = ie[0],
            oe = ie[1];
          (0, o.useEffect)(
            function () {
              L && _(g, !0);
            },
            [g]
          ),
            (0, o.useEffect)(
              function () {
                if (g && w) {
                  W(!0);
                  var e = g
                    .replace(/[.,/#!$@*%^&;:{}=\\_`~]/g, "")
                    .replace(/\s{2,}/g, " ")
                    .trim()
                    .toLocaleLowerCase("tr-TR");
                  y.B({
                    action: "search",
                    params: {
                      search_term: e,
                    },
                  }),
                    fetch(
                      "/api/words/"
                        .concat(encodeURIComponent(e), "?session=")
                        .concat(encodeURIComponent(w))
                    )
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        var n = JSON.parse(
                          j()
                            .AES.decrypt(e, 'fdfd_{fdgfds4@"dfg"}VbvxXSfd4Z')
                            .toString(j().enc.Utf8)
                        );
                        if (n.error) throw new Error(e.error);
                        X(n.words),
                          ne(n.fiveBefore),
                          ae(n.fiveAfter),
                          oe(n.randomWord),
                          $(!!n.isUnsuccessful),
                          W(!1),
                          n.isUnsuccessful ? M(!0) : M(!1);
                      })
                      .catch(function (e) {
                        console.error(e), C.push("/404");
                      });
                }
              },
              [g, C, w]
            );
          var le = (0, o.useCallback)(
            function () {
              f().polyfill(),
                window.scrollTo({
                  top: Z
                    ? N.current.offsetTop + -10
                    : K.current.offsetTop + -10,
                  behavior: "smooth",
                });
            },
            [Z]
          );
          (0, o.useEffect)(
            function () {
              !B && K.current && null !== P && null !== Z && le();
            },
            [B, P, K, Z, le]
          );
          var ce = (function () {
            var e = (0, s.Z)(function (e) {
              return (0, i.__generator)(this, function (n) {
                return R(e), le(), [2];
              });
            });
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
          return B ||
            null === S ||
            null === I ||
            null === r ||
            null === x ||
            null === E ||
            null === z ||
            null === q
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(h(), {
                    children: (0, t.jsxs)("title", {
                      children: [
                        g
                          .replace(/[.,/#!$@*%^&;:{}=\\_`~]/g, "")
                          .replace(/\s{2,}/g, " ")
                          .trim()
                          .toLocaleLowerCase("tr-TR") + " - ",
                        "Ni\u015fanyan S\xf6zl\xfck",
                      ],
                    }),
                  }),
                  (0, t.jsx)(H.W2, {
                    children: (0, t.jsx)(b.Z, {
                      theme: n,
                      isSurroundingShown: !0,
                    }),
                  }),
                ],
              })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(h(), {
                    children: (0, t.jsxs)("title", {
                      children: [
                        Z || P.length > 1
                          ? g
                              .replace(/[.,/#!$@*%^&;:{}=\\_`~]/g, "")
                              .replace(/\s{2,}/g, " ")
                              .trim()
                              .toLocaleLowerCase("tr-TR")
                          : P[0].name,
                        " ",
                        "- Ni\u015fanyan S\xf6zl\xfck",
                      ],
                    }),
                  }),
                  (0, t.jsxs)(H.W2, {
                    children: [
                      (0, t.jsxs)(H.dv, {
                        ref: N,
                        children: [
                          I &&
                            5 - ee.length !== 0 &&
                            (0, a.Z)(Array(5 - ee.length)).map(function (e, n) {
                              return (0, t.jsx)("div", {}, n);
                            }),
                          I &&
                            ee.map(function (e) {
                              var n = (0, k.KY)(e.name, !1, !0, !1, !1);
                              return (0, t.jsx)(
                                m(),
                                {
                                  href: "/kelime/".concat(
                                    encodeURIComponent(e.name)
                                  ),
                                  scroll: !1,
                                  passHref: !0,
                                  children: (0, t.jsx)(H.Ko, {
                                    children: n,
                                  }),
                                },
                                e._id
                              );
                            }),
                          (0, t.jsx)(H.ly, {
                            ref: K,
                            children:
                              !1 === Z
                                ? P.map(function (e) {
                                    return S
                                      ? (0, t.jsx)(
                                          U,
                                          {
                                            word: JSON.stringify(e),
                                            theme: n,
                                            isDarkMode:
                                              (r && E.value) || (!r && x),
                                          },
                                          e._id
                                        )
                                      : (0, t.jsx)(
                                          O,
                                          {
                                            word: JSON.stringify(e),
                                            theme: n,
                                            isDarkMode:
                                              (r && E.value) || (!r && x),
                                          },
                                          e._id
                                        );
                                  })
                                : (0, t.jsx)(
                                    m(),
                                    {
                                      href: "/kelime/".concat(
                                        encodeURIComponent(P[0].name)
                                      ),
                                      scroll: !1,
                                      passHref: !0,
                                      children: (0, t.jsx)(H.Ko, {
                                        style: {
                                          zIndex: 10,
                                          marginBottom: "0.1rem",
                                          paddingTop: "0.4rem",
                                          paddingBottom: "0.4rem",
                                          boxShadow:
                                            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                                        },
                                        children: (0, k.KY)(
                                          P[0].name,
                                          !1,
                                          !0,
                                          !1,
                                          !1
                                        ),
                                      }),
                                    },
                                    P[0]._id
                                  ),
                          }),
                          I &&
                            se.map(function (e, n) {
                              var r = (0, k.KY)(e.name, !1, !0, !1, !1);
                              return (0, t.jsx)(
                                m(),
                                {
                                  href: "/kelime/".concat(
                                    encodeURIComponent(e.name)
                                  ),
                                  scroll: !1,
                                  passHref: !0,
                                  children: (0, t.jsx)(H.Ko, {
                                    style: {
                                      zIndex: 4 - n,
                                    },
                                    children: r,
                                  }),
                                },
                                e._id
                              );
                            }),
                          (0, t.jsxs)(H.he, {
                            children: [
                              (0, t.jsxs)(H.Tg, {
                                children: [
                                  (0, t.jsx)(H.bF, {
                                    children: "g\xf6r\xfcn\xfcm",
                                  }),
                                  (0, t.jsxs)(H.R$, {
                                    children: [
                                      (0, t.jsx)(H.DU, {
                                        children: "kompakt",
                                      }),
                                      (0, t.jsx)(u.Z, {
                                        onChange: function (e) {
                                          ce(e), le();
                                        },
                                        checked: S,
                                        onColor: "#2e6537",
                                        offColor: "#999",
                                        onHandleColor: n.primaryGrayAlt,
                                        offHandleColor: n.primaryGrayAlt,
                                        handleDiameter: 30,
                                        uncheckedIcon: !1,
                                        checkedIcon: !1,
                                        boxShadow:
                                          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                                        activeBoxShadow:
                                          "rgba(50, 50, 93, 0.25) 0px 2px 10px -1px, rgba(0, 0, 0, 0.3) 0px 1px 10px -1px",
                                        height: 20,
                                        width: 48,
                                      }),
                                      (0, t.jsx)(H.DU, {
                                        children: "izahl\u0131",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("hr", {
                                    style: {
                                      marginTop: "0.125rem",
                                      marginBottom: "0.125rem",
                                    },
                                  }),
                                  (0, t.jsxs)(H.R$, {
                                    children: [
                                      (0, t.jsx)(H.DU, {
                                        children: "tekil kart",
                                      }),
                                      (0, t.jsx)(u.Z, {
                                        onChange: function (e) {
                                          F(e), le();
                                        },
                                        checked: I,
                                        onColor: "#2e6537",
                                        offColor: "#999",
                                        onHandleColor: n.primaryGrayAlt,
                                        offHandleColor: n.primaryGrayAlt,
                                        handleDiameter: 30,
                                        uncheckedIcon: !1,
                                        checkedIcon: !1,
                                        boxShadow:
                                          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                                        activeBoxShadow:
                                          "rgba(50, 50, 93, 0.25) 0px 2px 10px -1px, rgba(0, 0, 0, 0.3) 0px 1px 10px -1px",
                                        height: 20,
                                        width: 48,
                                      }),
                                      (0, t.jsx)(H.DU, {
                                        children: "listeli",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsx)(m(), {
                                href: "/kelime/".concat(
                                  encodeURIComponent(te.name)
                                ),
                                scroll: !1,
                                passHref: !0,
                                children: (0, t.jsxs)(H.$9, {
                                  children: [
                                    (0, t.jsx)(H.yT, {}),
                                    "rastgele kelime",
                                  ],
                                }),
                              }),
                              (0, t.jsxs)(H.Tg, {
                                children: [
                                  (0, t.jsx)(H.bF, {
                                    children: "tema",
                                  }),
                                  (0, t.jsxs)(H.R$, {
                                    children: [
                                      (0, t.jsx)(H.DU, {
                                        children: "manuel",
                                      }),
                                      (0, t.jsx)(u.Z, {
                                        onChange: function (e) {
                                          return d(e);
                                        },
                                        checked: r,
                                        onColor: "#2e6537",
                                        offColor: "#999",
                                        onHandleColor: n.primaryGrayAlt,
                                        offHandleColor: n.primaryGrayAlt,
                                        handleDiameter: 30,
                                        uncheckedIcon: !1,
                                        checkedIcon: !1,
                                        boxShadow:
                                          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                                        activeBoxShadow:
                                          "rgba(50, 50, 93, 0.25) 0px 2px 10px -1px, rgba(0, 0, 0, 0.3) 0px 1px 10px -1px",
                                        height: 20,
                                        width: 48,
                                      }),
                                      (0, t.jsx)(H.DU, {
                                        children: "otomatik",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("hr", {
                                    style: {
                                      marginTop: "0.125rem",
                                      marginBottom: "0.125rem",
                                    },
                                  }),
                                  (0, t.jsxs)(H.R$, {
                                    children: [
                                      (0, t.jsx)(H.DU, {
                                        children: "a\xe7\u0131k",
                                      }),
                                      (0, t.jsx)(u.Z, {
                                        onChange: function (e) {
                                          return p(e);
                                        },
                                        checked: x,
                                        onColor: "#2e6537",
                                        offColor: "#999",
                                        onHandleColor: n.primaryGrayAlt,
                                        offHandleColor: n.primaryGrayAlt,
                                        handleDiameter: 30,
                                        uncheckedIcon: !1,
                                        checkedIcon: !1,
                                        boxShadow:
                                          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                                        activeBoxShadow:
                                          "rgba(50, 50, 93, 0.25) 0px 2px 10px -1px, rgba(0, 0, 0, 0.3) 0px 1px 10px -1px",
                                        height: 20,
                                        width: 48,
                                      }),
                                      (0, t.jsx)(H.DU, {
                                        children: "koyu",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)(H.Ix, {
                        showToast: V,
                        children: (0, t.jsx)(D.Z, {
                          showToast: V,
                          setShowToast: M,
                          header: "Hata",
                          color: "#652e2e",
                          text: "Arad\u0131\u011f\u0131n\u0131z kelime bulunamad\u0131. Araman\u0131za en yak\u0131n kelimeler listeleniyor.",
                          isAutoHide: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              });
        };
      I.getInitialProps = (function () {
        var e = (0, s.Z)(function (e) {
          return (0, i.__generator)(this, function (n) {
            return [
              2,
              {
                query: e.query.name,
              },
            ];
          });
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })();
      var F = I;
    },
    2480: function () {},
  },
  function (e) {
    e.O(0, [5, 659, 774, 888, 179], function () {
      return (n = 9526), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
