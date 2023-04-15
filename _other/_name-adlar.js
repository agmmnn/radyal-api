(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [171],
  {
    9223: function (e, r, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/isim/[name]",
        function () {
          return n(2618);
        },
      ]);
    },
    8790: function (e, r, n) {
      "use strict";
      n.d(r, {
        Z: function () {
          return u;
        },
      });
      var t = n(5893),
        l = n(7297),
        a = n(7833),
        s = n(8331);
      function o() {
        let e = (0, l.Z)([
          "\n  width: 100%;\n  background: none !important;\n  border: none;\n  border-radius: 1.125rem;\n  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,\n    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,\n    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;\n",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        let e = (0, l.Z)([
          "\n  color: #f0f0f0;\n  border-top-left-radius: 1.125rem;\n  border-top-right-radius: 1.125rem;\n  padding: 0.5rem 1rem;\n  padding-bottom: 0.4rem;\n\n  & > span {\n    font-family: 'Jost', 'Tahoma', 'Helvetica Neue', 'Helvetica', sans-serif;\n    font-weight: 600;\n    font-size: 1.05rem;\n    user-select: none;\n  }\n",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function i() {
        let e = (0, l.Z)([
          "\n  margin-top: -1px;\n  border-bottom-left-radius: 1.125rem;\n  border-bottom-right-radius: 1.125rem;\n  background-color: ",
          ";\n  color: ",
          ";\n  user-select: none;\n",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      let d = (0, a.ZP)(s.Z).withConfig({
          componentId: "sc-c2c3a00d-0",
        })(o()),
        p = (0, a.ZP)(s.Z.Header).withConfig({
          componentId: "sc-c2c3a00d-1",
        })(c()),
        x = (0, a.ZP)(s.Z.Body).withConfig({
          componentId: "sc-c2c3a00d-2",
        })(
          i(),
          (e) => e.theme.primaryGray,
          (e) => e.theme.text
        ),
        h = (e) => {
          let {
            showToast: r,
            setShowToast: n,
            color: l,
            header: a,
            text: s,
            isAutoHide: o = !0,
          } = e;
          return (0, t.jsxs)(d, {
            onClose: () => n(!1),
            show: r,
            delay: 4e3,
            autohide: o,
            children: [
              (0, t.jsx)(p, {
                closeButton: !1,
                style: {
                  backgroundColor: l,
                },
                children: (0, t.jsx)("span", {
                  className: "mr-auto",
                  style:
                    "#d0d0d0" === l
                      ? {
                          color: "#333",
                        }
                      : null,
                  children: a,
                }),
              }),
              (0, t.jsx)(x, {
                children: s,
              }),
            ],
          });
        };
      var u = h;
    },
    2618: function (e, r, n) {
      "use strict";
      n.r(r);
      var t = n(5893),
        l = n(7294),
        a = n(1163),
        s = n(2),
        o = n(9008),
        c = n.n(o),
        i = n(5810),
        d = n(523),
        p = n.n(d),
        x = n(1354),
        h = n.n(x),
        u = n(4561),
        m = n(4670),
        g = n(2682),
        f = n(8081),
        j = n(4147),
        y = n(8790),
        b = n(239);
      let C = (e) => {
        let {
            theme: r,
            isThemeDefault: n,
            handleThemeDefault: o,
            manualDarkMode: d,
            handleManualDarkMode: x,
            query: C,
          } = e,
          w = (0, a.useRouter)(),
          {
            sessionId: _,
            selectedGender: k,
            searchHistory: T,
            handleSearchHistory: Z,
          } = (0, l.useContext)(m.k),
          $ = (0, s.Z)(),
          A = (0, l.useRef)(null),
          I = (0, l.useRef)(null),
          [S, v] = (0, l.useState)(!0),
          [N, R] = (0, l.useState)(null),
          [U, E] = (0, l.useState)(!1),
          [B, H] = (0, l.useState)(null),
          [D, L] = (0, l.useState)(null),
          [P, G] = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          if (T) {
            let e =
              C.replace(/[,/#!$@*%^&;:{}=\\_`~]/g, "")
                .replace(/\s{2,}/g, " ")
                .trim()
                .charAt(0)
                .toLocaleUpperCase("tr-TR") +
              C.replace(/[,/#!$@*%^&;:{}=\\_`~]/g, "")
                .replace(/\s{2,}/g, " ")
                .trim()
                .slice(1);
            Z(
              /^\d+$/.test(e.slice(-1))
                ? e.slice(0, -1) + (0, g.WB)(e.slice(-1))
                : e,
              !0
            );
          }
        }, [C]),
          (0, l.useEffect)(() => {
            if (C && _) {
              v(!0);
              let e =
                C.replace(/[,/#!$@*%^&;:{}=\\_`~]/g, "")
                  .replace(/\s{2,}/g, " ")
                  .trim()
                  .charAt(0)
                  .toLocaleUpperCase("tr-TR") +
                C.replace(/[,/#!$@*%^&;:{}=\\_`~]/g, "")
                  .replace(/\s{2,}/g, " ")
                  .trim()
                  .slice(1);
              fetch(
                "/api/names/"
                  .concat(encodeURIComponent(e), "?gender=")
                  .concat(k, "&session=")
                  .concat(encodeURIComponent(_))
              )
                .then((e) => e.json())
                .then((e) => {
                  let r = JSON.parse(
                    h()
                      .AES.decrypt(e, "fgdRT%{@259cvzzE_sd!}dfcj_vxXq")
                      .toString(h().enc.Utf8)
                  );
                  if (r.error) throw Error(r.error);
                  r.isUnsuccessful
                    ? (R(!0), H(r.names), L(r.referredNames), E(!0), v(!1))
                    : (R(!1), E(!1)),
                    H(r.names),
                    L(r.referredNames),
                    G(r.randomName),
                    v(!1);
                })
                .catch((e) => {
                  console.error(e);
                });
            }
          }, [C, w, k, _]);
        let q = (0, l.useCallback)(() => {
          p().polyfill(),
            window.scrollTo({
              top: N ? 0 : I.current.offsetTop + -10,
              behavior: "smooth",
            });
        }, [N]);
        return ((0, l.useEffect)(() => {
          !S && I.current && null !== B && null !== N && q();
        }, [S, B, I, N, q]),
        S || null === B || null === D || null === n || null === d || null === $)
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(c(), {
                  children: (0, t.jsxs)("title", {
                    children: [
                      C.replace(/[,/#!$@*%^&;:{}=\\_`~]/g, "")
                        .replace(/\s{2,}/g, " ")
                        .trim()
                        .charAt(0)
                        .toLocaleUpperCase("tr-TR") +
                        C.replace(/[,/#!$@*%^&;:{}=\\_`~]/g, "")
                          .replace(/\s{2,}/g, " ")
                          .trim()
                          .slice(1) +
                        " - ",
                      "Nişanyan Adlar",
                    ],
                  }),
                }),
                (0, t.jsxs)(b.W2, {
                  children: [
                    (0, t.jsxs)(b.xC, {
                      disabled: !0,
                      children: [
                        (0, t.jsx)(b.Zd, {}),
                        (0, t.jsx)(u.ZP, {
                          uniqueKey: "homeCardButton",
                          speed: 1,
                          height: 24,
                          viewBox: "0 0 970 160",
                          foregroundColor: r.secondaryLabelText,
                          backgroundColor: r.primaryGray,
                          children: (0, t.jsx)("rect", {
                            x: "0",
                            y: "24",
                            rx: "18",
                            ry: "18",
                            width: "970",
                            height: "100",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsx)(f.Z, {
                      theme: r,
                    }),
                  ],
                }),
              ],
            })
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(c(), {
                  children: (0, t.jsxs)("title", {
                    children: [
                      C.replace(/[,/#!$@*%^&;:{}=\\_`~]/g, "")
                        .replace(/\s{2,}/g, " ")
                        .trim()
                        .charAt(0)
                        .toLocaleUpperCase("tr-TR") +
                        C.replace(/[,/#!$@*%^&;:{}=\\_`~]/g, "")
                          .replace(/\s{2,}/g, " ")
                          .trim()
                          .slice(1),
                      " ",
                      "- Nişanyan Adlar",
                    ],
                  }),
                }),
                (0, t.jsxs)(b.W2, {
                  children: [
                    (0, t.jsxs)(b.xC, {
                      onClick: () => w.push("/tum-adlar"),
                      children: [
                        (0, t.jsx)(b.Zd, {}),
                        (0, t.jsx)("span", {
                          children: "T\xfcm adları g\xf6r\xfcnt\xfcle",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(b.X2, {
                      ref: A,
                      children: [
                        (0, t.jsx)(b.Td, {
                          ref: I,
                          children:
                            !1 === N
                              ? B.map((e, l) =>
                                  (0, t.jsxs)(
                                    "div",
                                    {
                                      children: [
                                        (0, t.jsx)(j.Z, {
                                          name: JSON.stringify(e),
                                          query: /^\d+$/.test(C.slice(-1))
                                            ? C.replace(
                                                /[,/#!$@*%^&;:{}=\\_`~]/g,
                                                ""
                                              )
                                                .replace(/\s{2,}/g, " ")
                                                .trim()
                                                .charAt(0)
                                                .toLocaleUpperCase("tr-TR") +
                                              C.replace(
                                                /[,/#!$@*%^&;:{}=\\_`~]/g,
                                                ""
                                              )
                                                .replace(/\s{2,}/g, " ")
                                                .trim()
                                                .slice(1, -1) +
                                              (0, g.WB)(
                                                C.replace(
                                                  /[,/#!$@*%^&;:{}=\\_`~]/g,
                                                  ""
                                                )
                                                  .replace(/\s{2,}/g, " ")
                                                  .trim()
                                                  .slice(-1)
                                              )
                                            : C.replace(
                                                /[,/#!$@*%^&;:{}=\\_`~]/g,
                                                ""
                                              )
                                                .replace(/\s{2,}/g, " ")
                                                .trim()
                                                .charAt(0)
                                                .toLocaleUpperCase("tr-TR") +
                                              C.replace(
                                                /[,/#!$@*%^&;:{}=\\_`~]/g,
                                                ""
                                              )
                                                .replace(/\s{2,}/g, " ")
                                                .trim()
                                                .slice(1),
                                          theme: r,
                                          isDarkMode:
                                            (n && $.value) || (!n && d),
                                        }),
                                        D.filter((r) => r.nameId === e.id)
                                          .length > 0
                                          ? (0, t.jsxs)(t.Fragment, {
                                              children: [
                                                (0, t.jsxs)(b.yW, {
                                                  children: [
                                                    (0, t.jsx)("span", {
                                                      children: "ilgili adlar",
                                                    }),
                                                    (0, t.jsx)("div", {
                                                      children: (0, t.jsx)(
                                                        b.EA,
                                                        {}
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                D.filter(
                                                  (r) => r.nameId === e.id
                                                ).map((a, s) =>
                                                  (0, t.jsxs)(
                                                    b.Td,
                                                    {
                                                      style: {
                                                        marginBottom:
                                                          s !==
                                                          D.filter(
                                                            (r) =>
                                                              r.nameId === e.id
                                                          ).length -
                                                            1
                                                            ? "1rem"
                                                            : "0rem",
                                                      },
                                                      children: [
                                                        (0, t.jsx)(j.Z, {
                                                          name: JSON.stringify(
                                                            a
                                                          ),
                                                          query: a.entry,
                                                          theme: r,
                                                          isDarkMode:
                                                            (n && $.value) ||
                                                            (!n && d),
                                                        }),
                                                        l !== B.length - 1 &&
                                                        s ===
                                                          D.filter(
                                                            (r) =>
                                                              r.nameId === e.id
                                                          ).length -
                                                            1
                                                          ? (0, t.jsx)("hr", {})
                                                          : null,
                                                      ],
                                                    },
                                                    a.id
                                                  )
                                                ),
                                              ],
                                            })
                                          : null,
                                      ],
                                    },
                                    e.id
                                  )
                                )
                              : null,
                        }),
                        (0, t.jsxs)(b.he, {
                          children: [
                            (0, t.jsxs)(b.$9, {
                              href: "/isim/".concat(encodeURIComponent(P)),
                              scroll: !1,
                              passHref: !0,
                              children: [(0, t.jsx)(b.yT, {}), "rastgele isim"],
                            }),
                            (0, t.jsxs)(b.Tg, {
                              children: [
                                (0, t.jsx)(b.bF, {
                                  children: "tema",
                                }),
                                (0, t.jsxs)(b.R$, {
                                  children: [
                                    (0, t.jsx)(b.DU, {
                                      children: "manuel",
                                    }),
                                    (0, t.jsx)(i.Z, {
                                      onChange: (e) => o(e),
                                      checked: n,
                                      onColor: r.primaryColor,
                                      offColor: "#999",
                                      onHandleColor: r.primaryGrayAlt,
                                      offHandleColor: r.primaryGrayAlt,
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
                                    (0, t.jsx)(b.DU, {
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
                                (0, t.jsxs)(b.R$, {
                                  children: [
                                    (0, t.jsx)(b.DU, {
                                      children: "a\xe7ık",
                                    }),
                                    (0, t.jsx)(i.Z, {
                                      onChange: (e) => x(e),
                                      checked: d,
                                      onColor: r.primaryColor,
                                      offColor: "#999",
                                      onHandleColor: r.primaryGrayAlt,
                                      offHandleColor: r.primaryGrayAlt,
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
                                    (0, t.jsx)(b.DU, {
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
                    (0, t.jsx)(b.Ix, {
                      showToast: U,
                      children: (0, t.jsx)(y.Z, {
                        showToast: U,
                        setShowToast: E,
                        header: "Hata",
                        color: "#652e2e",
                        text: "Aradığınız isim bulunamadı.",
                        isAutoHide: !0,
                      }),
                    }),
                  ],
                }),
              ],
            });
      };
      (C.getInitialProps = async (e) => {
        let r = e.query.name;
        return {
          query: r,
        };
      }),
        (r.default = C);
    },
  },
  function (e) {
    e.O(0, [819, 435, 846, 774, 888, 179], function () {
      return e((e.s = 9223));
    }),
      (_N_E = e.O());
  },
]);
