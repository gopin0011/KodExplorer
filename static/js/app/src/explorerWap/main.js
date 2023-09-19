/*! power by kodcloud ver4.51(2023-04-11) [build 1681216129260] */

const urlToFile = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const mimeType = blob.type;
    const file = new File([blob], url.split('/').pop(), { type: mimeType });
    
    return file;
};

async function customshare(url) {
    if (window.navigator.share) {
        urlToFile(url)
            .then((file) => {
                const files = [file];
                if (!navigator.canShare || !navigator.canShare({ files: files })) {
                    alert("Unsupported share feature");
                    return;
                }
        
                navigator
                    .share({
                        files: files,
                        title: "Sweet Shiba Inu"
                    })
                    .then(() => console.log("Share was successful."))
                    .catch((error) => console.log("Sharing failed", error));
            })
            .catch((error) => console.log("Failed to convert URL to File", error));
    } else {
        alert(`Your browser or operating system doesn't support sharing files.`);
    }
}

define("app/src/explorerWap/main", ["lib/jquery-lib", "lib/util", "lib/contextMenu/jquery-contextMenu", "lib/artDialog/jquery-artDialog", "../../common/core", "../../common/tpl/upload.html", "../../common/tpl/formMake.html", "../../common/core.tools", "../../common/core.upload", "../../common/core.api", "../../common/core.playSound", "../../common/core.formMake", "../../common/rightMenuExtence", "../../app/appBase", "../../app/editor", "../../app/openWith", "../../app/html", "../../common/tpl/copyright.html", "../../common/tpl/themeDIY.html", "./ui", "./tpl/list.html", "./path", "../../path/pathOperate", "../../path/tpl/share.html", "../../path/tpl/fileinfo/fileInfo.html", "../../path/tpl/fileinfo/pathInfo.html", "../../path/tpl/fileinfo/pathInfoMore.html", "../../path/tpl/appEdit.html", "../../path/clipboard", "../../path/search", "../../path/tpl/search.html", "../../path/tpl/searchList.html"], function(a, b, c) {
    Config = {
        BodyContent: ".bodymain",
        FileBoxSelector: ".file-continer",
        FileBoxClass: ".file-continer .file",
        FileBoxClassName: "file",
        FileBoxTittleClass: ".file-continer .title",
        SelectClass: ".file-continer .select",
        SelectClassName: "select",
        TypeFolderClass: "folder-box",
        TypeFileClass: "file-box",
        HoverClassName: "hover",
        FileOrderAttr: "number",
        TreeId: "folder-list-tree",
        pageApp: "explorerWap",
        treeAjaxURL: "explorer/treeList&app=explorer",
        AnimateTime: 200
    }, a("lib/jquery-lib"), a("lib/util"), a("lib/contextMenu/jquery-contextMenu"), a("lib/artDialog/jquery-artDialog"), core = a("../../common/core"), ui = a("./ui"), ui.path = a("./path");
    $(document).ready(function() {
        G.user && (Config.treeAjaxURL = "share/treeList&app=folder&user=" + G.user + "&sid=" + G.sid, $(".tool-menu-right-btn").addClass("hidden"), $(".tool-menu-right [data-action]").addClass("hidden"), G.shareInfo.canUpload && ($(".tool-menu-right-btn").removeClass("hidden"), $(".tool-menu-right [data-action=upload]").removeClass("hidden"))), core.init(), ui.init(), ui.path.init(), $(".init-loading").fadeOut(450).addClass("pop_fadeout"), a.async("lib/webuploader/webuploader-min", function() {
            core.uploadInit()
        }), $(".common-footer").appendTo(".panel-menu")
    })
});;;;;;
! function($) {
    ! function($, n, t, i, r, o, e, c, a, f, u, d, v, s, h, E, C, l, A, p, G, g, m, b, S, O, I, L, J, M, y, B, Q, k, F, P, Z, N, H, R, w, X, V, D, _, x, T, Y, z, K, W, U, j, q, $n, nn, tn, rn, on, en, cn, an, fn, un, dn, vn, sn, hn, En, Cn, ln, An, pn, Gn, gn, mn, bn, Sn, On, In, Ln, Jn, Mn, yn, Bn, Qn, kn, Fn, Pn, Zn, Nn, Hn, Rn, wn, Xn, Vn, Dn, _n, xn, Tn, Yn, zn, Kn, Wn, Un, jn, qn, $t, nt, tt, it, rt, ot, et, ct, at, ft, ut, dt, vt, st, ht, Et, Ct, lt, At, pt, Gt, gt, mt, bt, St, Ot, It, Lt, Jt, Mt, yt, Bt, Qt, kt, Ft, Pt, Zt, Nt, Ht, Rt, wt, Xt, Vt, Dt, _t, xt, Tt, Yt, zt, Kt, Wt, Ut, jt, qt, $i, ni, ti, ii, ri, oi, ei, ci, ai, fi, ui, di, vi, si, hi, Ei, Ci, li, Ai, pi, Gi, gi, mi, bi, Si, Oi, Ii, Li, Ji, Mi, yi, Bi, Qi, ki, Fi, Pi, Zi, Ni, Hi, Ri, wi, Xi, Vi, Di, _i, xi, Ti, Yi, zi, Ki, Wi, Ui, ji, qi, $r, nr, tr, ir, rr, or, er, cr, ar, fr, ur, dr, vr, sr, hr, Er, Cr, lr, Ar, pr, Gr, gr, mr, br, Sr, Or, Ir, Lr, Jr, Mr, yr, Br, Qr, kr, Fr, Pr, Zr, Nr, Hr, Rr, wr, Xr, Vr, Dr, _r, xr, Tr, Yr, zr, Kr, Wr, Ur, jr, qr, $o, no, to, io, ro, oo, eo, co, ao, fo, uo, vo, so, ho, Eo, Co, lo, Ao, po, Go, go, mo, bo, So, Oo, Io, Lo, Jo, Mo, yo, Bo, Qo, ko, Fo, Po, Zo, No, Ho, Ro, wo, Xo, Vo, Do, _o, xo, To, Yo, zo, Ko, Wo, Uo, jo, qo, $e, ne, te, ie, re, oe, ee, ce, ae, fe, ue, de, ve, se, he, Ee, Ce, le, Ae, pe, Ge, ge, me, be, Se, Oe, Ie, Le, Je, Me, ye, Be, Qe, ke, Fe, Pe, Ze, Ne, He, Re, we, Xe, Ve, De, _e, xe, Te, Ye, ze, Ke, We, Ue, je, qe, $c, nc, tc, ic, rc, oc, ec, cc, ac, fc, uc, dc, vc, sc, hc, Ec, Cc, lc, Ac, pc, Gc, gc, mc, bc, Sc, Oc, Ic, Lc, Jc, Mc, yc, Bc, Qc, kc, Fc, Pc, Zc, Nc, Hc, Rc, wc, Xc, Vc, Dc, _c, xc, Tc, Yc, zc, Kc, Wc, Uc, jc, qc, $a, na, ta, ia, ra, oa, ea, ca, aa, fa, ua, da, va, sa, ha, Ea, Ca, la, Aa, pa, Ga, ga, ma, ba, Sa, Oa, Ia, La, Ja, Ma, ya, Ba, Qa, ka, Fa, Pa, Za, Na, Ha, Ra, wa, Xa, Va, Da, _a, xa, Ta, Ya, za, Ka, Wa, Ua, ja, qa, $f, nf, tf, rf, of, ef, cf, af, ff, uf, df, vf, sf, hf, Ef, Cf, lf, Af, pf, Gf) {
        $[t](i, [r, o, e, c, a, f, u, d, v, s, h, E, C, l], function(n) {
            $[A] = n(r), $[p] = n(o);
            var t = n(e),
                i = n(c),
                gf = n(a),
                mf = n(f),
                bf = n(u);
            n(d), $[G] = n(v), n(s), n(h), n(E), $[g] = function(n) {
                return $[m](n)
            }, $[b] = function(n) {
                return $[S](n)
            };
            var Sf = function() {
                    $[I][O] = n, $[J][L] || ($[J][L] = function(n, t) {
                        $[J][M][n] = t
                    }, $[J][y] = function(n, t) {
                        $[J][M][B][n] = t
                    }), $[J][L](Q, !k), $[J][L](F, !P), $[J][y](Z, {
                        $: $[N],
                        window: $[I],
                        log: $[R][H],
                        core: $[w],
                        pathTools: $[I][X],
                        inArray: $[V]
                    }), $[J][M][B][X] = $[I][X], $[J][M][Q] = !k, D == $[x][_] ? ($[J][M][T] = !k, $[J][M][Y] = !k, $[J][M][z] = !P) : ($[J][M][T] = !P, $[J][M][Y] = !P, $[J][M][z] = !k)
                },
                Of = function() {
                    Sf(), K != typeof $[x] && (k != $[x][W] && $[N](j)[U](), $[x][W] || $[w][q]($n) || k == $[w][q](nn) || $[N](tn)[U](), $[x][rn] && on == $[x][rn][en] && ($[N][an][M][cn] = !k), If()), $[fn]() && ($[N](dn)[un](vn), n[sn](hn, function() {
                        $[N](function() {
                            $[Cn][En]($[ln][dn])
                        })
                    }), $[N](pn)[An](Gn, function() {
                        var n = $[N](this);
                        $[N](this)[gn](mn) || (n = $[N](this)[bn](Sn)), n[On](In), $[N][Jn][Ln]()
                    }), $[N](Mn)[An](yn, function() {
                        var n = $[N](this)[Bn](Qn);
                        n[kn](Fn, Pn), $[Zn](function() {
                            n[kn](Fn, Nn)
                        }, Hn)
                    })), $[N](wn)[Rn](Xn, function(n) {
                        if (P == $[N](n[Dn])[bn](Qn)[Vn]) try {
                            $[N][Jn][Ln]()
                        } catch (n) {}
                    }), $[N](dn)[Xn](function() {
                        $[xn][_n](Tn, function(n) {
                            $[Yn] != n && n[N](dn)[On](Xn)
                        })
                    }), $[N][an][M][cn] && $[zn]([Kn, Wn, Un, Sn, jn, qn, $t, nt], [tt, it, rt, ot]), $[N](ct)[et](at, ft), $[N][ut]({
                        headers: {
                            "X-CSRF-TOKEN": $[vt][dt](st)
                        }
                    }), $[N](ht)[Xn](function() {
                        var n = $[N](this)[et](Et);
                        $[vt][Ct](Et, n), $[I][At][lt]()
                    }), $[N](ht)[kn]({
                        padding: pt
                    }), $[N](Gt + $[vt][dt](Et) + gt)[kn]({
                        background: mt,
                        color: bt
                    }), $[w][St](), $[w][It][Ot]();
                    for (var t = P; t < $[I][Lt][Vn]; t++) try {
                        $[I][Lt][t]()
                    } catch (i) {
                        $[R][Jt](Mt, i)
                    }
                    $[yt][On](Bt), Lf()
                },
                If = function() {
                    var n = $[I][At],
                        t = n[Qt] ? kt + n[Qt] : Tn;
                    $[x][Ft] = n[Pt] + Zt + n[Nt] + t + Ht, $[x][Rt] = $[wt]($[x][Ft], Ht) + n[Vt][Xt](Dt, Tn);
                    var i = $[x][_t][Xt](Dt, Tn);
                    $[x][Ft] + $[xt](i, Ht) != $[x][Rt] && ($[x][Ft] = $[wt]($[x][Rt], i) + Ht), $[x][Tt] = $[x][Rt] + Yt, zt == $[x][Wt][Kt] && ($[x][Tt] = $[x][Tt][Xt](Yt, Ut)), $[vt][Ct](jt, $[x][Ft]), $[vt][Ct](qt, $[x][Rt]), $[vt][Ct]($i, $[x][ni], ti)
                },
                Lf = function() {
                    $[fn]() || n[sn]([ii, ri], function() {
                        var n = $[N](oi);
                        n[ei]({
                            className: ci,
                            liveEvents: !P,
                            slide: !k,
                            alignTo: ai,
                            alignX: fi,
                            alignY: ui,
                            showAniDuration: di,
                            hideAniDuration: vi,
                            offsetY: si,
                            offsetX: hi,
                            showTimeout: function() {
                                var n = Ei;
                                return $[N](this)[et](Ci) && (n = $[li]($[N](this)[et](Ci))), n
                            },
                            content: function() {
                                var n = $[N](this)[Ai](pi);
                                if ($[N](this)[et](Gi)) {
                                    var t = $[N]($[N](this)[et](Gi));
                                    n = t[gi](mi) || t[gi](bi) ? t[Si]() : t[wn]()
                                }
                                return n = n ? n : Tn, n[Xt](Oi, Ii)
                            }
                        }), $[N](dn)[Rn](yn, function() {
                            $[N](Li)[U](), $[N][Ji](Mi, yi)
                        })[Rn](In, function() {
                            $[N][Ji](Tn, yi)
                        }), $[N](Bi)[An](Qi, function() {
                            $[N](n)[ei](ki), $[N](Li)[U]()
                        })
                    })
                };
            return {
                init: Of,
                serverDwonload: i[Fi],
                upload: i[Pi],
                uploadInit: i[Ot],
                playSound: mf[Zi],
                playSoundFile: mf[Ni],
                tools: t,
                api: gf,
                formMake: bf,
                getPathIcon: function(n, t) {
                    if (t = void P == t ? Tn : t, Hi == $[N][Ri](n)) {
                        var i = $[wi]($[wi](n), Ht);
                        if (n = {}, Xi != i[Vi](P, k) || i[Di](Ht)[Vn] > k) return {
                            icon: Tn,
                            name: Tn
                        };
                        n[_i] = i[xi](Ti), n[Yi] = i[Di](kt)[k]
                    }
                    var r = {};
                    r[$[x][zi]] = {
                        icon: Ki,
                        name: $[Ui][Wi]
                    }, r[$[x][ji]] = {
                        icon: qi
                    }, r[$[x][$r]] = {
                        icon: nr
                    }, r[$[x][tr]] = {
                        icon: Ki
                    }, r[$[x][ir]] = {
                        icon: rr,
                        name: $[Ui][rr]
                    }, r[$[x][or]] = {
                        icon: er,
                        name: $[Ui][cr]
                    }, r[$[x][ar]] = {
                        icon: fr,
                        name: $[Ui][ur]
                    }, r[$[x][dr]] = {
                        icon: vr,
                        name: $[Ui][sr]
                    };
                    var o = r[n[_i]];
                    return n[_i] == $[x][zi] && $[x][hr] != n[Yi] ? o = {
                        icon: Er,
                        name: t
                    } : n[_i] == $[x][ji] && Cr == n[lr] && (o = {
                        icon: qi
                    }), void P == o && (o = {
                        icon: Tn,
                        name: Tn
                    }), void P == o[Ar] && (o[Ar] = t), o
                },
                isFileView: function() {
                    var n = $[x][pr] + Gr + $[x][gr];
                    return mr == n || br == n ? !P : !k
                },
                isSystemPath: function(n) {
                    var n = $[wi]($[wi](n), Ht);
                    if (void P == n || Xi != n[Vi](P, k) || n[Di](Ht)[Vn] > k) return !k;
                    var t = n[xi](Sr),
                        i = [$[x][zi], $[x][$r], $[x][ir], $[x][or], $[x][ar], $[x][dr]];
                    return -k !== $[N][V](t[P], i) ? !P : !k
                },
                pathPre: function(n) {
                    if (n = $[wi]($[wi](n), Ht), void P == n || Xi != n[Vi](P, k)) return Tn;
                    var t = n[xi](Or);
                    return t[P]
                },
                contextmenu: function(n) {
                    try {
                        $[N][Jn][Ln]()
                    } catch (t) {}
                    var t = n || $[I][Ir];
                    return t ? t && $[N](t[Dn])[gi](bi) || $[N](t[Dn])[gi](mi) || $[N](t[Dn])[gi](Lr) || $[N](t[Dn])[gi](Jr) || P != $[N](t[Dn])[bn](Mr)[Vn] || P != $[N](t[Dn])[bn](yr)[Vn] || P != $[N](t[Dn])[bn](Br)[Vn] || P != $[N](t[Dn])[bn](Qr)[Vn] ? !P : !k : !P
                },
                pathThis: function(n) {
                    if (!n || Ht == n) return Tn;
                    var t = $[wt](this[kr](n), Ht),
                        i = t[Fr](Ht),
                        r = t[Pr](i + k);
                    if (P == r[Zr](Nr)) {
                        r = $[Hr](r[Pr](r[Zr](Rr)));
                        var o = r[Di](Ht);
                        r = o[o[Vn] - k], Tn == r && (r = o[o[Vn] - wr])
                    }
                    return r
                },
                pathClear: function($) {
                    if (!$) return Tn;
                    var n = $[Xt](Xr, Ht);
                    return n = n[Xt](Vr, Ht), n = n[Xt](Dr, Ht)
                },
                pathFather: function(n) {
                    var t = $[wt](this[kr](n), Ht),
                        i = t[Fr](Ht);
                    return t[Pr](P, i + k)
                },
                pathExt: function(n) {
                    var t = $[wi](n, Ht);
                    return -k != t[Fr](Ht) && (t = t[Pr](t[Fr](Ht) + k)), -k != t[Fr](Gr) ? t[Pr](t[Fr](Gr) + k)[_r]() : t[_r]()
                },
                pathUrlEncode: function(n) {
                    if (!n) return Tn;
                    var t = $[xr](n);
                    return t = t[Xt](Tr, Ht)
                },
                path2url: function(n, t) {
                    if (Yr == n[Pr](P, zr)) return n;
                    void P == t && (t = !P);
                    var i, r = this[kr](n);
                    return $[x][W] && t && r[Vi](P, $[x][Kr][Vn]) == $[x][Kr] ? i = r[Vi](P, $[x][Wr][Vn]) == $[x][Wr] ? $[x][Rt] + this[Ur](r[Xt]($[x][Wr], Tn)) : $[x][Ft] + this[Ur](r[Xt]($[x][Kr], Tn)) : (i = $[x][Tt] + jr + $[x][qr] + Rr + $[xr](r), K != typeof $[x][$o] && (i = $[x][Tt] + no + $[x][Er] + to + $[x][io] + Rr + $[xr](r))), i
                },
                pathCommon: function(n) {
                    if (Yr == n[Pr](P, zr)) return $[xr](n);
                    if (n[Pr](P, $[x][zi][Vn]) == $[x][zi]) return $[xr](n);
                    if ($[x][ro] && $[x][ro][oo]) return n;
                    var t = this[kr](n),
                        i = $[xr](t);
                    return K != typeof $[x][$o] && (i = $[xr]($[x][zi] + kt + $[x][Er] + Ht + $[x][ro][Ar] + t)), i
                },
                isApp: function(n) {
                    if (K == typeof $[eo]) return !k;
                    var t = $[eo][co];
                    return Hi == typeof n ? t == n : $[N][ao](n) && -k !== $[N][V](t, n) ? !P : !k
                },
                pathReadable: function(n) {
                    if (fo != typeof $[x][uo]) return !P;
                    for (var t = $[x][uo][vo], i = P; i < t[Vn]; i++)
                        if (t[i][so] == n) return void P == t[i][ho] || k == t[i][ho] ? !P : !k;
                    t = $[x][uo][Eo];
                    for (var i = P; i < t[Vn]; i++)
                        if (t[i][so] == n) return void P == t[i][ho] || k == t[i][ho] ? !P : !k;
                    return !P
                },
                pathCurrentWriteable: function() {
                    return $[w][Co](lo) ? !k : $[x][uo][Ao] ? $[x][uo][Ao][po] : !k
                },
                authCheck: function(n, t) {
                    return $[x][W] ? !P : $[go][Go](n) && k == $[go][n] ? !P : (t && (t = t === !P ? $[Ui][mo] : t, $[So][bo](t, !k)), !k)
                },
                authCheckGroup: function(n, t) {
                    if (t = t || $[x][Oo], k == $[x][W] || !$[x][Io]) return !P;
                    var i = t[xi]($[Lo](Ht + $[x][ji] + Jo));
                    if (i && wr == i[Vn] && $[x][Io][i[k]]) {
                        var r = $[x][Io][i[k]];
                        if (!r[Go](n) || k != r[n]) return !k
                    }
                    return !P
                },
                ajaxError: function(n) {
                    var t = n[Mo],
                        i = $[N][an][Bo][yo];
                    return $[So][Qo]($[Ui][ko], !k), Fo == t[Pr](P, Po) ? void $[Zn](function() {
                        var n = $[xn][_n]();
                        n[At][lt]()
                    }, Zo) : (P == n[No] && Tn == t && (t = Ho), t = Ro + t + wo, i || $[N][an]({
                        id: yo,
                        padding: P,
                        width: Xo,
                        height: Vo,
                        fixed: !P,
                        resize: !P,
                        ico: $[w][Do](Jt),
                        title: _o,
                        content: Tn
                    }), void $[N][xo]($[N](To), t))
                },
                fileGet: function(n, t, i) {
                    var r = Yo;
                    Yr == n[Pr](P, zr) && (r = zo);
                    var o = $[x][Tt] + Ko + r + Wo + $[xr](n);
                    K != typeof $[x][$o] && (o = $[x][Tt] + Uo + $[x][Er] + to + $[x][io] + jo + r + Wo + $[xr](n)), (n[qo](Ko) >= P || n[qo]($e) >= P) && (o = n), $[N][ne]({
                        url: o,
                        dataType: te,
                        error: function(n, t, r) {
                            $[w][ie](n, t, r), re == typeof i && i()
                        },
                        success: function(n) {
                            n[oe] && re == typeof t && (k == n[Ai][ee] && (n[Ai][ce] = $[ae](n[Ai][ce])), t(n[Ai][ce], n, o)), n[oe] || re == typeof i && i(n[Ai])
                        }
                    })
                },
                fileInfo: function(n, t) {
                    var i = $[x][Tt] + fe;
                    K != typeof $[x][$o] && (i = $[x][Tt] + ue + $[x][Er] + to + $[x][io]), $[N][ne]({
                        url: i,
                        type: de,
                        dataType: te,
                        data: n,
                        error: $[w][ie],
                        success: function($) {
                            re == typeof t && t($, n)
                        }
                    })
                },
                fileLink: function(n, t) {
                    if (n = this[kr](n), $[x][W] && n[Vi](P, $[x][Kr][Vn]) == $[x][Kr]) {
                        var i = $[x][Ft] + this[Ur](n[Xt]($[x][Kr], Tn));
                        return void(re == typeof t && t(i, n))
                    }
                    var r = ve + $[xr](n) + se;
                    this[he](r, function(i) {
                        var r = i[oe] ? i[Ai][Ee] : !k;
                        return r ? void(re == typeof t && t(r, n)) : void $[So][bo]($[Ui][Ce] + le + $[Ui][Ae], !k)
                    })
                },
                setting: function(n) {
                    void P == n && (n = $[x][W] ? pe : Er);
                    var t = Ge,
                        i = Ge;
                    $[fn]() && (t = ge, i = ge), $[xn][_n](me) ? $[xn][_n](me, function(t) {
                        t[Se][be](n), $[N][an][Bo][Ie][Oe](!P)
                    }) : $[N][an][Le]($[x][Tt] + Je + n, {
                        id: Ie,
                        fixed: !P,
                        ico: $[w][Do](Me),
                        resize: !P,
                        title: $[Ui][Me],
                        width: t,
                        height: t
                    })
                },
                copyright: function() {
                    var t = n(C),
                        i = $[J][ye](t),
                        r = $[xn][_n]();
                    r[Be][an]({
                        id: Qe,
                        bottom: P,
                        right: P,
                        simple: !P,
                        resize: !k,
                        disableTab: !P,
                        title: $[Ui][ke],
                        width: Fe,
                        padding: on,
                        fixed: !P,
                        content: i({
                            LNG: $[Ui],
                            G: $[x]
                        })
                    }), r[N](Pe)[un](Ze)
                },
                qrcode: function(n, t) {
                    Ne == n[Pr](P, wr) && (n = $[x][Tt] + n[Pr](wr));
                    var i = $[x][Tt] + He + $[Re]($[xr](n)),
                        r = we + $[Re](n) + Xe + n + Ve + i + De;
                    $[N][an]({
                        follow: t,
                        fixed: !P,
                        resize: !k,
                        title: $[Ui][_e],
                        padding: xe,
                        content: r
                    })
                },
                appStore: function() {
                    var n = $[xn][_n]();
                    n[N][an][Le]($[x][Tt] + Te, {
                        id: Ye,
                        fixed: !P,
                        ico: $[w][Do](ze),
                        resize: !P,
                        title: $[Ui][Ye],
                        width: Ke,
                        height: Ke
                    })
                },
                openWindow: function(n, t, i, r) {
                    t = t ? t : $[Ui][bo], i = i ? i : Ke, r = r ? r : We, $[fn]() && (i = ge, r = ge);
                    var o = $[xn][_n](),
                        e = o[N][an][Le](n, {
                            ico: Tn,
                            title: t,
                            fixed: !P,
                            resize: !P,
                            width: i,
                            height: r
                        });
                    return e
                },
                openWindowFull: function(n, t) {
                    return $[w][Ue](n, t, ge, ge)
                },
                openWindowBig: function(n, t) {
                    return $[w][Ue](n, t, je, je)
                },
                openDialog: function(n, t, i, r, o) {
                    if (n) {
                        void P == r && (r = qe + $[$c]());
                        var e = nc + r + tc + $[ic](n) + rc,
                            c = $[xn][_n](),
                            a = {
                                id: r,
                                fixed: !P,
                                title: i,
                                ico: t,
                                width: Ke,
                                height: oc,
                                padding: P,
                                content: e,
                                resize: !P
                            };
                        a = $[N][ec]({}, a, o);
                        var f = c[N][an](a);
                        return f
                    }
                },
                openApp: function(n) {
                    if (cc == n[Ri]) {
                        var t = n[Do]; - k == n[Do][Zr]($[x][ac]) && Yr != n[Do][Vi](P, zr) && (t = $[x][ac] + fc + n[Do]), uc != typeof n[dc] && -k === n[dc][Zr](vc) && (n[dc] = $[li](n[dc])), uc != typeof n[sc] && -k === n[sc][Zr](vc) && (n[sc] = $[li](n[sc])), n[dc] || (n[dc] = je), n[sc] || (n[sc] = We);
                        var i = {
                                resize: n[hc],
                                fixed: !P,
                                ico: $[w][Ec](t),
                                title: n[Ar][Xt](Cc, Tn),
                                width: n[dc],
                                height: n[sc],
                                simple: n[lc],
                                padding: P
                            },
                            r = n[ce];
                        if (Ac == $[N][pc]()[Pt] && Yr == $[N][pc](r)[Pt]) return void $[I][Le](r);
                        var o = $[xn][_n]();
                        Gc == $[w][gc](r) ? (i[ce] = $[w][mc](r), o[N][an](i)) : o[N][an][Le](r, i)
                    } else {
                        var e = n[ce];
                        $[Lo](Xi + e + bc)
                    }
                },
                update: function() {
                    $[Zn](function() {
                        var t = $[ae](Sc) + Oc + $[$c]();
                        n[sn](t, function($) {
                            try {
                                $[Ic](Lc)
                            } catch (n) {}
                        })
                    }, vi)
                },
                openPath: function(n) {
                    $[w][Co](Jc) ? $[Mc][so][Bo](n, bo) : $[w][Jc](n)
                },
                explorer: function(n, t) {
                    void P == n && (n = Tn), void P == t && (t = $[w][yc](n)), n = $[xr](n);
                    var i = $[x][Tt] + Bc + n;
                    K != typeof $[x][$o] && (i = $[x][Tt] + Qc + $[x][Er] + to + $[x][io] + Rr + n);
                    var r = $[xn][_n](),
                        o = r[N][an][Le](i, {
                            className: kc,
                            resize: !P,
                            fixed: !P,
                            ico: $[w][Do](Fc),
                            title: t,
                            width: Ke,
                            height: oc
                        }),
                        e = hi * r[N](Pc)[Vn];
                    o[Nc][Zc][kn]({
                        left: Hc + e + Rc,
                        top: Hc + e + Rc
                    })
                },
                explorerCode: function(n) {
                    void P == n && (n = Tn);
                    var t = $[x][Tt] + wc + n;
                    K != typeof $[x][$o] && (t = $[x][Tt] + Xc + $[x][Er] + to + $[x][io] + Vc + n), $[I][Le](t)
                },
                setSkinFinished: function() {
                    var n = $[N](Dc)[et](_c);
                    n && ($[N](xc)[et](Tc, n), $[N](Dc)[U]())
                },
                setSkin: function(n) {
                    $[Yc][Ct](zc, n), $[x][rn][zc] = n;
                    var t = $[x][ac] + Kc + n + Wc + $[x][Uc];
                    t != $[N](xc)[et](Tc) && $[N](dn)[jc](qc + t + $a), this[St]()
                },
                setSkinDiy: function() {
                    if ($[x][rn]) {
                        var t = $[Yc][dt](zc),
                            i = na,
                            r = $[Yc][ta](i);
                        fo != typeof r && fo == typeof $[x][rn][ia] && (r = $[x][rn][ia]), fo != typeof r && (r = {
                            bgBlur: k,
                            bgImage: $[x][ac] + ra,
                            bgType: oa,
                            startColor: ea,
                            endColor: ca,
                            colorRotate: aa
                        }, $[Yc][fa](i, r)), $[x][rn][ia] = r;
                        var o = Tn;
                        if (ua == t && r) {
                            var e = n(l),
                                c = $[J][ye](e);
                            o = c(r)
                        }
                        $[N][Ji](o, i)
                    }
                },
                editorFull: function() {
                    var n = $[N](da);
                    n[va](sa)
                },
                language: function(n) {
                    $[vt][Ct]($i, n, ti), $[I][At][lt]()
                },
                fullScreen: function() {
                    ha == $[N](dn)[et](Ea) && $[w][Ca](), $[N](dn)[et](Ea, ha);
                    var n = $[xn][_n](),
                        t = n[ln][la];
                    t[Aa] ? t[Aa]() : t[pa] ? t[pa]() : t[Ga] && t[Ga]()
                },
                exitfullScreen: function() {
                    $[N](dn)[et](Ea, ft), $[ln][ga] ? $[ln][ga]() : $[ln][ma] ? $[ln][ma]() : $[ln][ba] && $[ln][ba]()
                },
                createFlash: function(n, t, i) {
                    var r = $[$c]();
                    (K == typeof i || Tn == i) && (i = r);
                    var o = Tn;
                    $[N][Oa][Sa] && $[li]($[N][Oa][Uc]) < Ia && (o = La);
                    var e = Ja + r + Ma + o + ya + i + Ba + i + Qa + n + ka + n + Fa + t + Pa + r + Za;
                    return $[Zn](function() {
                        var n = $[N](Gr + r);
                        if (k != n[Vn]) {
                            var t = $[xn][_n]();
                            n = t[N](Gr + r)
                        }
                        if (k == n[Vn]) var i = P,
                            o = n[P],
                            e = $[Na](function() {
                                try {
                                    i++, Ha == $[wa][Ra](o[Xa]()) ? (n[Va](Da)[U](), $[_a](e), e = xa) : i > Ha && (n[Va](Da)[U](), $[_a](e), e = xa)
                                } catch (t) {}
                            }, Ha)
                    }, Ta), e
                },
                userSpaceHtml: function(n) {
                    var t = n[Di](Ht),
                        i = $[Ya](t[P]),
                        r = za * $[Ya](t[k]),
                        o = $[X][Ka]($[Ya](t[P])),
                        e = $[X][Ka](r),
                        c = o + Ht,
                        a = Ha * i / r;
                    a >= Ha && (a = Ha);
                    var f = Tn;
                    return a >= Wa && (f = Ua), P == r || $[ja](r) ? (c += $[Ui][qa], a = $f) : (c += e, a += vc), c = nf + f + tf + a + rf + c + of
                },
                dateTime: function(n) {
                    return $[ef]($[Ui][cf], n)
                },
                uploadCheckSize: function(n) {
                    if (af == $[w][ff]) return !P;
                    var t = $[x][uo][uf] || $[x][uo][df];
                    return t && P != t[vf] && sf * t[vf] * sf * sf - t[hf] < n ? !k : !P
                },
                uploadCheck: function(n, t) {
                    return t = void P == t ? !P : t, Ef == $[x][$o] ? zt == $[x][ro][po] : (void P == n && (n = Cf), !$[x][W] && $[go][Go](n) && k != $[go][n] ? (t && $[So][bo]($[Ui][mo], !k), !k) : $[w][lf](n) ? $[x][uo] && !$[x][uo][Ao][po] ? (t && ($[w][Af]($[x][Oo]) ? $[So][bo]($[Ui][pf], !k) : $[So][bo]($[Ui][Gf], !k)), !k) : !P : ($[So][bo]($[Ui][Ce], !k), !k))
                }
            }
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$"), $("/*0)1*2)1,(#/30-1"), $("/*0)1*%,.-4(5$/30-1"), $("/*+,.$/0,,16"), $("/*+,.$/2)1,(#"), $("/*+,.$/()&"), $("/*+,.$/)1(78,2'#"), $("/*+,.$/%,.-4(5$"), $("/*.&9304$'2:;0$'+$"), $("//*())*())<(6$"), $("//*())*$#&0,."), $("//*())*,)$'=&03"), $("//*())*30-1"), $("/*0)1*+,)7.&930/30-1"), $("/*0)1*03$-$>?@/30-1"), $("0)1A)1,(#"), $("0)1B,.-4(5$"), $("5,#C))"), $(")(03D(63:'+,#$"), $("3(63:'+,#$"), $(")(03D(63>$+,#$"), $("3(63>$+,#$"), $(".$E2&.$"), $("F&'#,F"), $("+,'%&9"), $("0$-)1(0$"), $("#$%(2106"), $("3$1)$."), $("&-),.06"), $("$6+()$"), 1, $("+,-).$66"), 0, $("5,#"), $("G"), $("1,9"), $("+,'6,1$"), $("+,.$"), $(")(03H,,16"), $("&'C..(7"), $("I#$J"), $("$'J&.,'-$'0"), $("K"), $("+(+3$"), $("-&'&-&L$"), $("+,-)&1$>$M29"), $("2'#$%&'$#"), $("&6N,,0"), $(".$-,J$"), $("/-$'2O6760$-O6$00&'9"), $("(203P3$+5"), $("6760$-4$-M$./9$0"), $("6760$-K.,2)/9$0"), $("/-$'2O6760$-O9.,2)"), $("26$.P,'%&9"), $("Q"), $("('&-(0$R)$'"), $("('&-(0$"), $("#&(1,9"), $("&6=()"), $("(##P1(66"), $("M,#7"), $("F()O)(9$"), $("(67'+"), $("1&M*,03$.6*%(60P1&+5"), $("(00(+3"), $("B(60P1&+5"), $("#,+2-$'0"), $("1&J$"), $("/+,'0$;0O-$'2O&0$-/+,'0$;0O-$'2O62M-$'2S/+,'0$;0O-$'2O&0$-"), $("0,2+360(.0"), $("3(6P1(66"), $("+,'0$;0O-$'2O&0$-"), $(")(.$'06"), $("/+,'0$;0O-$'2O&0$-"), $("0.&99$."), $("-,26$2)"), $("3&##$'"), $("+,'0$;04$'2"), $("/+,'0$;0O-$'2O&0$-/+,'0$;0O-$'2O62M-$'2"), $("-,26$#,F'"), $("+3&1#.$'"), $("/+,'0$;0O-$'2O1&60"), $("+66"), $("),&'0$.O$J$'06"), $("','$"), $("6$0H&-$,20"), $("(20,"), 400, $("M&'#"), $("30-1"), $("+1&+5"), $("1$'903"), $("0(.9$0"), $("%.(-$H,)"), $("83(.$>(0("), "", $("6$1%"), $("1,(#N&))1$"), $("("), $("M200,'"), $("/.&))1$O&0$-"), $("T)&+5$."), $("/-$'283(.$<200,'"), $("/-$'2O.$+7+1$OM200,'"), $("/6$+0&,'S/1&60"), $("/#&6(M1$#"), $("/#&6(M1$"), $("/L0.$$"), $("/#&6(M1$O.&))1$"), $("(00."), $("(U&-9"), $("#.(99(M1$"), $("%(16$"), $("(V(;8$02)"), $("9$0"), $("P,,5&$"), $("WOP8NBOHRX:Y"), $("/+,--,'O%,,0$.SZ%,.+$=()["), $("%,.+$=()"), $("6$0"), $(".$1,(#"), $("1,+(0&,'"), $("Q/\\$-SQ/]$-"), $("/+,--,'O%,,0$.SZ%,.+$=()^"), $("["), $("T_\\`M+("), $("T%%%"), $("6$085&'>&7"), $("&'&0"), $("0,,16"), $("5,#N$(#7"), $("$..,."), $("5,#N$(#7S$..,.a"), $("D,,5"), $("5,#N$(#7/$'#"), $("),.0"), $("a"), $("F$MD,60"), $(").,0,+,1"), $("**"), $("3,60'(-$"), $("*"), $("())N,,0"), $(".0.&-"), $(".$)1(+$"), $(")(03'(-$"), $("&'#$;/)3)"), $("())?'#$;"), $("10.&-"), $("())D,60"), $("&'#$;/)3)b"), $("c"), $(")(.(-N$F.&0$"), $("6$00&'96"), $("&'#$;/)3)*"), $("DR8H"), $("CddIDR8H"), $("5,#A6$.e('92(9$"), $("1('9"), 8760, $("1&M*),6370&)*VE2$.7/),6370&)/V6"), $("1&M*),6370&)*65&'/+66"), $("Z0&01$["), $("),6370&)"), $(")0&)6O65&'"), $("+2.6,."), $(".&930"), $("M,00,-"), 150, 200, 10, 20, 1500, $("0&01$O0&-$,20"), $(")(.6$?'0"), $("#(0("), $("0&01$/),6370&)"), $("0&01$O#(0("), $("&6"), $("&')20"), $("0$;0(.$("), $("J(1"), /\n/g, $("fM.*g"), $("/)0&)6O65&'"), $("6$08071$"), $("M,#7S/)0&)6O65&'h#&6)1(7a','$Si&-),.0('0jk"), $(")0&)6O0&01$"), $("&')20U0$;0(.$("), $("%,+26"), $("3&#$"), $("6$.J$.>F,'1,(#"), $("2)1,(#"), $(")1(78,2'#"), $(")1(78,2'#B&1$"), $("60.&'9"), $("07)$"), $("0.&-"), $("h"), $("62M60.&'9"), $("6)1&0"), $(")(03H7)$"), $("-(0+3"), /\{.*\}/, $("&#"), $("XR>IA8:NI8DCN:"), $("26$.O6$1%"), $("-7I63(.$"), $("eYK"), $("XR>IKNRAdIdCHD"), $("9.,2)O6$1%O,F'$."), $("XR>IKNRAdI8DCN:"), $("9.,2)O92$60"), $("XR>IA8:NI8:eB"), $("XR>IA8:NIN:P@Pe:"), $(".$+7+1$"), $("XR>IA8:NIBCl"), $("0.$$O%(J"), $("%(J"), $("XR>IKNRAdINRRHI8:eB"), $("9.,2)O6$1%O.,,0"), $("-7I5,#I9.,2)"), $("XR>IKNRAdINRRHICee"), $("9.,2)O.,,0"), $("5,#I9.,2)"), $("26$.?>"), $("26$."), $(",F'$."), $(".,1$"), $("'(-$"), $("8H"), $("/"), $("CPH"), $("63(.$/%&1$"), $("()&/J&$F"), /\{.*\}/, /\{.*\}/, $("$J$'0"), $(")"), $(").$"), $("/+('O.&930O-$'2"), $("/0,)M(."), $("/$#&0OM,#7"), $("/(2&O60(0$O%,+26"), $(")(03P1$(."), $("1(60?'#$;R%"), $("62M60."), $("6$(.+3"), $("%&1$d.,;7"), $("2.1>$+,#$"), $("m)(03^"), 2, /\\/g, /\/+/g, /\.+\//g, $("0,e,F$.P(6$"), $("2.1:'+,#$"), /%2F/g, $("300)"), 4, $("F$MN,,0"), $("M(6&+d(03"), $(")(03A.1:'+,#$"), $("$;)1,.$.*%&1$d.,;7m(++$66H,5$'^"), $("(++$66H,5$'"), $("63(.$d(9$"), $("63(.$*%&1$d.,;7m26$.^"), $("m6&#^"), $("6&#"), $("63(.$?'%,"), $("J&$F"), $("P,'%&9"), $(")(9$C))"), $("&6C..(7"), $(",MV$+0"), $("V6,'>(0("), $("%&1$e&60"), $(")(03"), $("&6N$(#(M1$"), $("%,1#$.e&60"), $("&6C))"), $("$#&0,."), $("&'%,"), $("+('A)1,(#"), $("3(6RF'd.,)$.07"), $("CAHD"), $("',I)$.-&66&,'"), $("0&)6"), $("H&)6"), $("03&6d(03"), $("(203K.,2)N,1$"), $("$J(1"), $("ano#pq*"), $(".$6),'6$H$;0"), $("(V(;:..,.>&(1,9"), $("1&60"), $("+1,6$"), $("6760$-I$..,."), $("fiOO26$.S1,9&'OOg"), 17, 500, $("60(026"), $("rstuvwSn'$0aa:NNIPRYY:PH?RYIN:8:Hqxtuyz{fM.*g|", 90, 91, 92, 93, 94, 95, "r", 96, "x", 97, 98, 99, 100, 101, 102, "{", 103, ""), $("f#&JS+1(66^", 104, "(V(;:..,.", 104, "S6071$^", 104, "%,'0O6&L$ac_);j)(##&'9a_Q);j+,1,.aTBB", 105, "`QQj", 104, "g"), $("f*#&Jg"), $(106, "Q", 107, ""), $(106, 108, 107, ""), $("&+,'"), $("CV(;S:..,."), $("&%.(-$D0-1"), $("/(V(;:..,.>&(1,9S/(2&O+,'0$'0"), $("%&1$'(-$"), $("%&1$A.1"), $("$#&0,.*%&1$K$0m"), $("^"), $("63(.$*%&1$K$0m26$.^"), $("m"), $("&'#$;R%"), $("63(.$*%&1$K$0m"), $("(V(;"), $("V6,'"), $("(V(;:..,."), $("%2'+0&,'"), $("+,#$"), $("M(6$", 106, "_"), $("+,'0$'0"), $("M(6$", 106, "_>$+,#$"), $("$;)1,.$.*)(03?'%,"), $("63(.$*)(03?'%,m26$.^"), $("dR8H"), $("#(0(C..^Zh", 104, "07)$", 104, "a", 104, "%&1$", 104, "U", 104, ")(03", 104, "a", 104, ""), $(104, "k[mJ&$Fd(9$^c"), $("%&1$?'%,"), $("#,F'1,(#d(03"), $("',I)$.-&66&,'I(+0&,'"), $("^^g"), $("9.,2)I.,1$I)(03&'%,"), $("6760$-"), $("`", 108, 107, ""), $("cQQ", 107, ""), $("R)$'6$00&'9I-,#$"), $("6$0K,0,"), $("8$00&'9"), $("#&6)1(7"), $("6$00&'9I-,#$"), $(",)$'"), $("6$00&'9T"), $("6$00&'9"), $("+,-)&1$"), $("(.0"), $("#&(1,9O+,)7.&930"), $("(M,20"), 425, $("/#&(1,9O+,)7.&930"), $("('&-(0$#O", 109, "QQSL,,-?'"), $("/*"), $("26$.*E.+,#$m2.1^"), $("E2,0$D0-1"), $("f(S3.$%^", 110, ""), $(110, "S6^", 110, ""), $(110, "S0(.9$0^", 110, "IM1('5", 110, "gf&-9S6.+^", 110, ""), $(110, "S6071$^", 110, "M,.#$.ac);S6,1&#ST$$$j", 110, "*gf*(g"), $("E.+,#$"), 30, $("())"), $("())I60,.$"), $("())O60,.$"), $("`Q", 107, ""), $(109, "Q", 107, ""), $(",)$'=&'#,F"), $(105, "Q", 107, ""), $(",)$'>&(1,9"), $("AA?>"), $("f&%.(-$S%.(-$M,.#$.^", 110, "Q", 110, "S'(-$^", 110, "R)$'"), $(110, "S6.+^", 110, ""), $("30-1:'+,#$"), $(110, "S6071$^", 110, "F&#03acQQ", 107, "j3$&930acQQ", 107, "jM,.#$.aQj", 110, "gf*&%.(-$g"), $(109, 108, 107, ""), $("$;0$'#"), $("2.1"), $("60(0&+d(03"), $("&-(9$6*%&1$I&+,'*&+,'I())*"), $("'2-M$."), $("F&#03"), $(107, ""), $("3$&930"), $(".$6&L$"), $("&+,'8.+"), $("/,$;$"), $("6&-)1$"), $("300)6"), $(")(.6$A.1"), $("6F%"), $(")(03:;0"), $("+.$(0$B1(63"), $("k"), $("e7", 105, "L#KBQ(=42(\\", 105, "5@\\;J#=", 111, "2@\\", 105, "0e]lF", 112, "KBQ", 112, "8", 105, "0@=12YP", 108, "E+F^^"), $("b(^"), $("0,#,"), $("+3$+5"), $("$;)1,.$."), $("2&"), $(")(03H3&6"), $("$;)1,.$.m07)$^&%.(-$m)(03^"), $("63(.$*%,1#$.m07)$^&%.(-$m26$.^"), $("#&(1,9:;)1,.$."), $("%,1#$."), $("/#&(1,9:;)1,.$."), $("F.()"), $(">R4"), $("p^"), $(");"), $("$#&0,.m).,V$+0^"), $("63(.$*+,#$N$(#m26$.^"), $("m).,V$+0^"), $("/1&'5O03$-$O1,(#$#"), $("6.+"), $("T1&'5O03$-$O6071$"), $("3.$%"), $("e,+(1>(0("), $("03$-$"), $("6071$*65&'*"), $("/+66bJ$.^"), $("J$.6&,'"), $("())$'#"), $("f&-9S6.+^", 104, ""), $(104, "S,'1,(#^", 104, "+,.$/6$085&'B&'&63$#nqj", 104, "S,'$..,.^", 104, "+,.$/6$085&'B&'&63$#nqj", 104, "S+1(66^", 104, "3&##$'S1&'5O03$-$O1,(#$#", 104, "g"), $("5,#8071$>&7"), $("9$0P,'%&9"), $("03$-$>?@"), $("&-(9$6*F(11I)(9$*", 105, "/V)9"), $("+,1,."), $("T_", 108, 106, ""), $("TQQQ"), $("\\QQ"), $("6$0P,'%&9"), $("#&7"), $("&%.(-$Z'(-$^R)$',)$':#&0,.["), $("0,991$P1(66"), $("%.(-$O%2116+.$$'"), $("0.2$"), $("%2118+.$$'"), $("$;&0%2118+.$$'"), $("#,+2-$'0:1$-$'0"), $(".$E2$60B2116+.$$'"), $("-,LN$E2$60B2118+.$$'"), $("F$M5&0N$E2$60B2118+.$$'"), $("$;&0B2116+.$$'"), $("-,LP('+$1B2118+.$$'"), $("F$M5&0P('+$1B2118+.$$'"), $("-6&$"), $("M.,F6$."), 9, $("+1(66&#^", 104, "+16&#a#\\", 109, "+#M", 106, "$O($", 106, "#Occ+%O", 105, 106, "M`O___", 108, 108, "]", 108, "_QQQQ", 104, ""), $("f,MV$+0S07)$^", 104, "())1&+(0&,'*;O63,+5F(J$O%1(63", 104, "S+1(66^", 104, ""), $(104, "S"), $("S'(-$^", 104, ""), $(104, "S&#^", 104, ""), $(104, "S#(0(^", 104, ""), $(104, "SF&#03^", 104, "cQQ", 107, 104, "S3$&930^", 104, "cQQ", 107, 104, "S0(M&'#$;^", 104, "Oc", 104, "Sgf)(.(-S'(-$^", 104, "-,J&$", 104, "SJ(12$^", 104, ""), $(104, "*gf)(.(-S'(-$^", 104, "(11,F%2116+.$$'", 104, "SJ(12$^", 104, "0.2$", 104, "S*gf)(.(-S'(-$^", 104, "(11,F6+.&)0(++$66", 104, "SJ(12$^", 104, "(1F(76", 104, "S*gf)(.(-S'(-$^", 104, "(11,F8+.&)0C++$66", 104, "SJ(12$^", 104, "(1F(76", 104, "S*gf)(.(-S'(-$^", 104, "%1(63J(.6", 104, "SJ(12$^", 104, ""), $(104, "S*gf)(.(-S'(-$^", 104, "F-,#$", 104, "SJ(12$^", 104, "0.('6)(.$'0", 104, "S*gf*,MV$+0gf#&JS+1(66^", 104, "(2&O1,(#&'9", 104, "S&#^", 104, ""), $("I1,(#&'9", 104, "gf6)('g1,(#&'9//f*6)('gf*#&Jg"), $("6$0?'0$.J(1"), 100, $("%1,,."), $("4(03"), $("d$.+$'0e,(#$#"), $("'$;0"), $("/(2&O1,(#&'9"), $("+1$(.?'0$.J(1"), null, 50, $(")(.6$B1,(0"), 1073741824, $("%&1$8&L$"), 80, $("F(.'&'9"), $("&6Y(Y"), $("6)(+$I0&)6I%211"), $("Q", 107, ""), $("f#&JS+1(66^", 110, "6)(+$O&'%,OM(.", 110, "gf#&JS+1(66^", 110, "6)(+$O).,+$66", 110, "gf#&JS+1(66^", 110, "6)(+$O).,+$66O26$S"), $(110, "S6071$^", 110, "F&#03a"), $(110, "gf*#&Jgf*#&Jgf#&JS+1(66^", 110, "6)(+$O&'%,", 110, "g"), $("f*#&Jgf*#&Jg"), $("#(0$"), $("0&-$I07)$"), $("C"), $("J$.6&,'H7)$"), $("9.,2)8)(+$A6$"), $("26$.8)(+$"), $("6&L$4(;"), 1024, $("6&L$A6$"), $("63(.$"), $("$;)1,.$./%&1$A)1,(#"), $("(203P3$+5K.,2)"), $("&68760$-d(03"), $(")(03I+('I',0I(+0&,'"), $("',I)$.-&66&,'IF.&0$"))
}(function($) {
    var n = function($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function() {
        for (var t = arguments, i = "", r = 0, o = t.length; o > r; r++)
            if ("number" == typeof t[r]) i += n($[0].charAt(t[r]));
            else
                for (var e = 0, c = t[r].length; c > e; e++) i += n($[0].charAt(t[r][e].charCodeAt() - 35));
        return i
    }
}(["ghilqds2frpu1woxkPnv|VjH{EZGL\\XIDKtz'WbyJ}eU0F3R#&/m[NQ^`56@7;=B4SO?A~$>Y)+_.,罔统迡推锜诲／巵釐罱诺聗糾举朽啉戙箤棃柨阵灮墜酐＄%<9(8:*T]"]));;
define("app/common/tpl/upload.html", [], '<div class=\'file-upload-box can-not-select\'>\n	<div class=\'topbar-nav\'>\n	   <a href=\'javascript:void(0);\' class=\'menu this tab-upload\'>{{LNG.upload_local}}</a>\n	   <a href=\'javascript:void(0);\' class=\'menu tab-download\'>{{LNG.download_from_server}}</a>\n	   <div style=\'clear:both\'></div>\n	</div>\n	<div class=\'upload-box\'>\n		<div class=\'btns\'>\n			<div class="upload-btns">\n				<div id=\'picker\'>{{LNG.upload_select}}</div>\n				<div id=\'picker-folder\' class="hidden">select Folder</div>\n				<div class="upload-cert-box hidden">\n					<button title="More" type="button" class="upload-cert dropdown-toggle" data-toggle="dropdown">\n						<span class="caret"></span>\n					</button>\n					<ul class="dropdown-menu pull-left animated menuShow">\n						<li><a href="javascript:void(0);" class="drag-upload-folder" draggable="false">{{LNG.folder}} {{LNG.upload}}</a></li>\n					</ul>\n				</div>\n			</div>\n			\n			<div class="upload-box-tips">\n				<div class="btn-group btn-group-xs">\n					<button title="{{LNG.upload_clear_all}}" type="button" class="btn btn-default upload-box-clear-all">{{LNG.upload_clear_all}}</button>\n					<button title="{{LNG.upload_clear}}" type="button" class="btn btn-default upload-box-clear">{{LNG.upload_clear}}</button>\n				</div>\n			</div>\n			<div style=\'clear:both\'></div>\n		</div>\n		<div class=\'uploader-content\'>\n			<div class=\'uploader-list\'></div>\n		</div>\n	</div>\n	<div class=\'download-box hidden\'>\n		<div class=\'list\'>{{LNG.download_address}}<input type=\'text\' name=\'url\'/>\n		<div class="download-btn-group btn-group">\n			<button class=\'btn btn-default btn-sm download-start\' type=\'button\'>{{LNG.download}}</button>\n			<button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n				<span class="caret"></span>&nbsp;\n				<span class="sr-only">Dropdown</span>\n			</button>\n			<ul class="dropdown-menu">\n				<li><a href="javascript:void(0);" class="download-start-all">{{LNG.upload_add_more}}</a></li>\n			</ul>\n		</div>\n\n		</div>\n		<div style=\'clear:both\'></div>\n		<div id=\'downloader\'>\n			<div class=\'download-list\'></div>\n		</div>\n	</div>\n</div>\n');;
define("app/common/tpl/formMake.html", [], '<div id="{{wrapID}}" class=\'config-box form-box can-not-select\n	{{if items.formStyle && items.formStyle.className}}{{items.formStyle.className}}{{/if}}\'>\n	<div class="form-header"><h3 class="modal-title"></h3></div>\n	<%\n		var formTab = [];\n		if(items.formStyle && kod.window.$.isArray(items.formStyle.tabs)){\n			formTab = items.formStyle.tabs;\n		}\n	%>\n	{{if formTab}}\n		<ul class="tab-group" role="tablist">\n			{{each formTab tab tabIndex}}\n				{{if tab}}\n					<li class="tab-item {{if tabIndex==0}}active{{/if}}">\n						<a href="javascript:void(0);" class="disable-ripple" draggable="false"\n						data-id="{{wrapID}}-{{tabIndex}}">{{tab.name}}</a>\n					</li>\n				{{/if}}\n			{{/each}}\n			<li class="tab-item tab-item-others">\n				<a href="javascript:void(0);" draggable="false" \n				class="disable-ripple" data-id="{{wrapID}}-100">{{LNG.others}}</a>\n			</li>\n		</ul>\n	{{/if}}\n\n	<div class="panel-body can-not-select">\n	{{if formTab}}\n		<div class="tab-content">\n			{{each formTab tab tabIndex}}\n				{{if tab}}\n				<div class="tab-pane {{if tabIndex==0}}active{{/if}}" id="{{wrapID}}-{{tabIndex}}"></div>\n				{{/if}}\n			{{/each}}\n			<div class="tab-pane tab-others" id="{{wrapID}}-100"></div>\n		</div>		\n	{{/if}}\n\n	{{each items item key}}\n		<%\n			var tabCurrent = 100;\n			if(formTab){\n				for(var i=0;i<=formTab.length;i++){\n					if( formTab[i] && kod.window.inArray(formTab[i][\'field\'],key)){\n						tabCurrent = i;\n						break;\n					}\n				}\n			}\n\n			//元素属性;\n			var itemAttr = " ";\n			if(typeof(item.itemAttr) == \'object\'){\n				for(var prop in item.itemAttr){\n					itemAttr += prop+"=\'"+item.itemAttr[prop]+"\' ";\n				}\n				if(item.itemStyle){\n					itemAttr += "style=\'"+item.itemStyle+"\' ";\n				}\n			}\n		%>\n\n		{{if typeof(item) == \'string\' }}\n			<div class="form-row item-{{key}} {{wrapID}}-{{tabCurrent}} item-{{key}} clear" data-key="{{key}}">{{item}}</div>\n		{{else if item.type == "html" || !item.type}}\n			{{if key != \'formStyle\'}}\n				<div class="form-row item-{{key}} form-{{item.type}} {{wrapID}}-{{tabCurrent}} {{item.className||\'\'}} clear" \n					data-type="{{item.type}}" data-key="{{key}}" {{itemAttr}}>\n					\n					{{if typeof(item.display) !=\'undefined\' }}\n					<div class="setting-title">\n						{{@item.display}} {{if item.require}}<span class="require">*</span>{{/if}}\n					</div>\n					{{/if}}\n\n					{{if item.value}}{{@item.value}}{{/if}}\n					{{if item.display}}{{@item.display}}{{/if}}\n					{{if item.desc}}\n					<div class="setting-content">{{@item.desc}}</div>\n					{{/if}}\n				</div>\n			{{/if}}\n		{{else}}\n			{{if item.value == undefined }}\n				{{if item.value = \'\'}}{{/if}}\n			{{/if}}\n			<div class="form-row item-{{key}} form-{{item.type}} {{wrapID}}-{{tabCurrent}} {{item.className||\'\'}}"\n				data-type="{{item.type}}" data-key="{{key}}">\n\n				{{if typeof(item.display) !=\'undefined\' }}\n				<div class="setting-title">\n					{{@item.display}} {{if item.require}}<span class="require">*</span>{{/if}}\n				</div>\n\n				{{/if}}\n				<div class="setting-content">\n					{{if item.type == \'input\'}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="text" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "textarea"}}\n						<textarea name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>{{@item.value}}</textarea>\n					{{else if item.type == "codeEditor"}}\n						<input type=\'hidden\' name="{{key}}" type=\'hidden\' class="{{item.itemClass||\'\'}}" {{itemAttr}} />\n						<textarea name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>{{@item.value}}</textarea>\n					{{else if item.type == "password"}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="password" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "switch"}}\n						<label>\n							<input type="checkbox" class="{{item.itemClass||\'\'}} kui-checkbox-ios size-big" name="{{key}}" \n								{{if item.value==1 }}checked="checked"{{/if}} {{itemAttr}}/><em></em>\n								<i class="desc">&nbsp;{{if item.desc}}{{@item.desc}}{{/if}}</i>\n						</label>\n					{{else if item.type == "radio"}}\n						{{each item.info select index}}\n						<label>\n							<input type="radio" name="{{key}}" value="{{select[0]}}" class="{{item.itemClass||\'\'}} kui-radio"\n							{{if item.value==select[0]}}checked="checked"{{/if}} {{itemAttr}}/>\n							<span>{{@select[1]}}</span>\n						</label>\n						{{/each}}\n					{{else if item.type == "checkbox"}}\n						<%\n							var valArrCheckbox = [];\n							if(typeof(item.value) == \'string\'){\n								valArrCheckbox = item.value.split(\',\');\n							}\n						%>\n						{{each item.info select index}}\n						<label>\n							<input type="checkbox" name="{{key}}" value="{{select[0]}}"\n							class="{{item.itemClass||\'\'}} kui-checkbox" {{itemAttr}} \n							{{if kod.window.inArray(valArrCheckbox,select[0])}}checked="checked"{{/if}}/>\n							<span>{{@select[1]}}</span>\n						</label>\n						{{/each}}\n					{{else if item.type == "select"}}\n						<select name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>\n							{{each item.info select index}}\n							<option value="{{select[0]}}"\n							 {{if item.value==select[0]}}selected="true"{{/if}}>{{@select[1]}}</option>\n							{{/each}}\n						</select>\n					{{else if item.type == "segment"}}\n						<input type="input" class="hidden" name="{{key}}" value="{{item.value}}"/>\n						<div class="{{item.itemClass||\'\'}} btn-group btn-group-sm" {{itemAttr}} \n							data-json=\'{{kod.window.jsonEncode(valueArr)}}\'>\n							{{each item.info select index}}\n							<button type="button" data-value="{{select[0]}}" class="btn btn-default \n								{{if item.value==select[0]}}btn-active{{/if}}">{{@select[1]}}</button>\n							{{/each}}\n						</div>\n					{{else if item.type == "button"}}\n						{{each item.info select index}}\n						<% var className = select.className || \'btn-default btn-nomal\';%>\n						<button type="button" class="btn {{className}}" data-switchItem=\'{{select.switchItem || ""}}\'>\n							{{select.display}}\n						</button>\n						{{/each}}						\n					{{else if (item.type == "selectMutil" || item.type == "tags")}}\n						<%\n							var valArrSelect = [];\n							if(typeof(item.value) == \'string\'){\n								valArrSelect = item.value.split(\',\');\n							}\n							if(item.type == \'tags\'){\n								item.info = [];\n								for(var i=0;i<valArrSelect.length;i++)\n								item.info.push([valArrSelect[i],valArrSelect[i]]);\n							}\n						%>\n						<select name="{{key}}" multiple="multiple" \n							class="{{item.itemClass||\'\'}}" {{itemAttr}}>\n							{{each item.info select index}}\n								<option value="{{select[0]}}"\n									{{if kod.window.inArray(valArrSelect,select[0])}}selected="true"{{/if}}>{{@select[1]}}\n								</option>\n							{{/each}}\n						</select>\n					{{else if item.type == "number"}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						{{if !item.info && (item.info = {from:\'\',to:\'\',step:1}) }}{{/if}}\n						<input type="number" name="{{key}}" value="{{item.value}}" \n							autocomplete="off" spellcheck="false" {{itemAttr}}\n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} "\n							step="{{item.info.step}}" min="{{item.info.from}}" max="{{item.info.to}}"/>\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "slider"}}\n						{{if !item.info && (item.info = {from:0,to:100,step:1}) }}{{/if}}\n						<input type="text" name="{{key}}" class="{{item.itemClass||\'\'}} control-slider"\n							{{itemAttr}}\n							data-slider-min="{{item.info.from}}"\n							data-slider-max="{{item.info.to}}"\n							data-slider-step="{{item.info.step}}"\n							data-slider-value="{{item.value}}"/>\n					{{else if item.type == "color"}}\n						<input type="text" name="{{key}}" value="{{item.value}}"\n							class="{{item.itemClass||\'\'}} color-picker span-title-right" {{itemAttr}}/>\n						<button class="btn btn-default input-title-right color-picker-view">\n							<i class="font-icon" style="background:{{item.value}}"></i>\n						</button>\n					{{else if item.type == "dateTime"}}\n						<input type="text" name="{{key}}" \n							class="{{item.itemClass||\'\'}} span-title-right" \n							{{itemAttr}}\n							value="{{item.value}}" \n							data-format="{{item.info && item.info.format || \'Y/m/d\'}}" \n							data-fromTime="{{item.info && item.info.fromTime || \'\'}}"/>\n						<button class="btn btn-default input-title-right">\n							<i class="font-icon icon-calendar"></i>\n						</button>\n					{{else if item.type == "fileSelect"}}\n						<input type="text" name="{{key}}" value="{{item.value}}" \n							data-info=\'{{item.info?kod.window.jsonEncode(item.info):""}}\' \n							{{itemAttr}}\n							class="{{item.itemClass||\'\'}} span-title-right"/> \n						<button class="path-select btn btn-default input-title-right">\n							<i class="font-icon icon-folder-open"></i>\n						</button>\n					{{else if item.type == "userSelect"}}\n						<% \n							var valueArr = {"all":"0","user":"","group":"","role":""};\n							if(typeof(item.value) == \'string\'){\n								userTypeArr = item.value.split(\';\');\n								for(var i = 0;i<userTypeArr.length;i++){\n									var splitArr = userTypeArr[i].split(\':\');\n									if(splitArr.length == 2){\n										valueArr[splitArr[0]] = splitArr[1];\n									}\n								}\n								if(!valueArr.user && !valueArr.group && !valueArr.role){\n									valueArr.all = \'1\';\n								}\n							}\n						%>\n						<input type="hidden" name="{{key}}" value="{{item.value}}"/>\n						<div class="btn-group btn-group-sm" data-json=\'{{kod.window.jsonEncode(valueArr)}}\'\n							{{if !item.info || item.info.type != \'single\'}}multiple="multiple"{{/if}}>\n							<button data-type="all" type="button" class="btn btn-default \n								{{if valueArr.all == "1"}}btn-active{{/if}}">{{LNG[\'Plugin.config.authAll\']}}</button>\n							<button data-type="user" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.user}}btn-active{{/if}}">{{LNG[\'Plugin.config.authUser\']}}</button>\n							<button data-type="group" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.group}}btn-active{{/if}}">{{LNG[\'Plugin.config.authGroup\']}}</button>\n							<button data-type="role" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.role}}btn-active{{/if}}">{{LNG[\'Plugin.config.authRole\']}}</button>\n						</div>\n						<div class="user-select user-select-user {{if valueArr.all == "1" || !valueArr.user}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.user}}</div>\n							<select data-value="{{valueArr.user}}" data-server="user"\n								{{if !item.info || item.info.user != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n						<div class="user-select user-select-group {{if valueArr.all == "1" || !valueArr.group}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.group}}</div>\n							<select data-value="{{valueArr.group}}" data-server="group"\n								{{if !item.info || item.info.group != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n						<div class="user-select user-select-role {{if valueArr.all == "1" || !valueArr.role}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.system_member_role}}</div>\n							<select data-value="{{valueArr.role}}" data-server="role"\n								{{if !item.info || item.info.role != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n					{{else if item.type == "group"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="group"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else if item.type == "role"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="role"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else if item.type == "user"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="user"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="text" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{/if}}\n\n					{{if item.type == "switch"}}\n					{{else if !item.desc}}\n						<i class="desc hidden">&nbsp;</i>\n					{{else if kod.inArray([\'userSelect\'],item.type)}}\n						<div class="desc">{{@item.desc}}</div>\n					{{else}}\n						<i class="desc">{{@item.desc}}</i>\n					{{/if}}\n				</div>\n\n				{{if item.switchItem && kod.inArray(\'switch/radio/checkbox/select/segment\'.split(\'/\'),item.type) }}\n				<div class="hidden switch-info" data-value=\'{{kod.window.jsonEncode(item.switchItem)}}\'></div>\n				{{/if}}\n\n				<div class="clear"></div>\n			</div>\n		{{/if}}\n	{{/each}}\n	</div>\n</div>');;
! function($) {
    ! function($, n, r, t, a, o, e, i, f, u, c, A, J, Q, v, G, Z, h, m, C, N, O, b, s, d, l, V, Y, g, R, y, D, F, M, S, k, T, p, B, H, L, P, W, E, I, U, j, q, w, K, X, _, x, z, $n, nn, rn, tn, an, on, en, fn, un, cn, An, Jn, Qn, vn, Gn, Zn, hn, mn, Cn, Nn, On, bn, sn, dn, ln, Vn, Yn, gn, Rn, yn, Dn, Fn, Mn, Sn, kn, Tn, pn, Bn, Hn, Ln, Pn, Wn, En, In, Un, jn, qn, wn, Kn, Xn, _n, xn, zn, $r, nr, rr, tr, ar, or, er, ir, fr, ur, cr, Ar, Jr, Qr, vr, Gr, Zr, hr, mr, Cr, Nr, Or, br, sr, dr, lr, Vr, Yr, gr, Rr, yr, Dr, Fr, Mr) {
        $[r](t, [], function(n) {
            var r = a,
                t = function() {
                    var n = $[o](e);
                    $[i](n), $[u][f](n, !c), $[J](Q)[A](), $[v](function() {
                        $[u][G](n, !c), $[m][h][Z] = r
                    }, C * $[N](O, b))
                },
                Sr = function() {
                    var r = s;
                    $[v](function() {
                        if (!$[m][d] || l == typeof $[V]) {
                            var r = Y + $[g]();
                            n[R](r, function(n) {
                                $[m][d] = !y;
                                try {
                                    n[D]()
                                } catch (r) {}
                            })
                        }
                    }, C * $[N](F, O)), $[m][M] = {
                        A: S,
                        O: O,
                        O1: k,
                        P: T,
                        Q: p,
                        Q1: O,
                        Q2: T,
                        Q3: k,
                        Q4: p,
                        Q5: B,
                        Q6: H,
                        Q7: L,
                        Q8: P,
                        Q9: W,
                        R: H,
                        S: C,
                        T: C
                    }, $[m][E] = {
                        A: c,
                        O: I,
                        O1: O,
                        P: U,
                        Q: j,
                        Q1: C,
                        Q2: C,
                        Q3: C,
                        Q4: C,
                        Q5: C,
                        Q6: C,
                        Q7: C,
                        Q8: C,
                        Q9: C,
                        R: k,
                        S: C,
                        T: C
                    }, $[m][q] = $[K][w]($[m][E]), $[_][X] = $[x]($[_][X][nn](rn)[$n]()[z](rn));
                    var t = $[an][tn]($[_][X], on),
                        a = t[en] - fn;
                    r = t[un](F, a), t || (r = s);
                    var o = $[x]($[_][cn]);
                    o = o[nn](rn)[$n]()[z](rn), o = $[an][tn](o, An);
                    var e = o[un](Jn, a);
                    return $[_][cn] = $[an][tn](o[un](Jn + a), o[un](y, Jn)), e == r && $[_][cn] || (r = s), -c === $[J][Qn](r, $[m][q]) && (r = s), r
                },
                kr = s;
            try {
                kr = Sr()
            } catch (Tr) {}
            var pr = vn,
                Br = Gn,
                Hr = function() {
                    if ($[hn][Zn](mn) && s == kr)
                        for (var n = [$[Nn][Cn], $[Nn][On], $[Nn][bn], $[Nn][sn], $[Nn][dn], $[J](Vn)[ln]()], r = y; r < n[en]; r++) {
                            n[r] || (n[r] = rn);
                            var a = n[r][Yn]();
                            if (-c == a[gn](pr) && -c == a[gn](Br)) {
                                $[v](function() {
                                    t()
                                }, $[N](Rn, yn));
                                break
                            }
                        }
                },
                Lr = function() {
                    var n = Dn;
                    if (s == kr) {
                        var t = Fn + n + Mn + $[Nn][n] + Sn;
                        $[J](t)[kn](Tn)
                    }
                    $[J](Hn)[Bn](Ln)[pn](Ln, function() {
                        if ($[J](this)[Pn](Wn) == n) {
                            var t = $[hn][En]($[hn][In]),
                                a = Un + r + jn;
                            t[Xn][Kn][wn](_n)[qn](a)
                        } else $[u][G]($[J](this)[xn]())
                    }), $[J](Hn)[zn](function() {
                        $[m][$r][h][Z] = r
                    })
                },
                Pr = function() {
                    return s == kr ? void $[J](rr)[nr](tr) : void(-c !== $[J][Qn](kr, $[m][q]) && ($[J](or)[ar](), $[J](er)[ar]()))
                },
                Wr = function() {
                    $[hn][ir] = function(n, r) {
                        return fr == n[un](y, ur) ? $[hn][cr](n) : Ar + n + (r ? Jr : rn) + Qr
                    }, $[hn][cr] = $[cr] = function($) {
                        return vr + $ + Gr
                    }, $[m][Zr] = Ir, $[m][hr] = kr, $[hn][mr] = $[m][Zr], $[hn][Cr] = $[m][hr], $[hn][In] = Nr + $[_][Or], $[hn][br] = function(n) {
                        return $[hn][ir](n, !y)
                    };
                    var r = function(n) {
                        var r = $[dr][sr](lr)[y],
                            t = $[dr][Vr](Yr);
                        t[gr] = Rr, t[yr] = n, r[Dr](t)
                    };
                    $[v](function() {
                        var t = Y + $[g]();
                        r(t), n[R](t, function(n) {
                            $[m][d] = !y;
                            try {
                                n[D]()
                            } catch (r) {}
                        })
                    }, W), Hr(), Lr(), Pr()
                },
                Er = function($) {
                    return s == kr && -c == $[Yn]()[gn](pr) ? (t(), !c) : !y
                },
                Ir = function(n, r) {
                    var t, a, o = $[m][E],
                        e = $[m][M],
                        i = {},
                        f = c;
                    if (Fr == r ? (t = n[Mr], a = o[kr]) : (t = n[Mr], a = e[kr]), C == a) i = t;
                    else
                        for (var u in t) {
                            if (f > a) break;
                            i[u] = t[u], f++
                        }
                    return i
                },
                Ur = {
                    init: Wr,
                    about: Er
                };
            return Ur
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$/0,,12"), $("/*342$.*5$.2&,'6'20(11"), $("7(278$+,#$"), $("9:;-<=>:?@&50A(B?5A((C7$&DE4FAG.4(H4$$I&@(#JK51),?-'6')'68,),D,.L%,J=C'2L5,0:MN4G8556O1GBO)G8).G;PQG>RS=TUV+F<QG;WA+"), $("(1$.0"), $("1,(#&'J"), $("C&)2"), 1, $("7&#$"), $("X"), $("Y-$22(J$C&)2Z/0&)2A+1,2$[Y-$22(J$C&)2Z&-J"), $("2$0C&-$,40"), $("0&)2"), $("7.$%"), $("1,+(0&,'"), $("\\&'#,\\"), 1e3, $(".,4'#O.,-C,"), 30, 60, $("]"), $("(<#^_M+LMW_^%#RS9GMG9"), $("4'#$%&'$#"), $("0)18&(1,JD0-1"), $("**20(0&+/N,#+1,4#/+,-*4)#(0$*-(&'^/Q235`"), $("0&-$O1,(0"), $("(2a'+"), 0, $("0,#,"), 10, $("+,.$A0,,12A-$-G$.?&-&0"), 15, 100, 50, 150, 250, 500, 1001, 1500, 2e3, $("+,.$A0,,12AJ.,4)?&-&0"), 5, 20, 40, $("+,.$A0,,12A1&+$'2$?&20"), $("N$a2"), $("@GQ$+0"), $("5$.2&,'D(27"), $(">"), $("G(2$9^8$+,#$"), $("Q,&'"), $(".$5$.2$"), $("2)1&0"), "", $("#$+,#$"), $("(407b.a)0"), $("c#%EdefghihjkARW"), $("1$'J07"), 26, $("24G20."), $("5$.2&,'D(27H2$."), $("%M^;ighk:IOF8R%#Q5"), 16, $("&']..(a"), $("N,#$V)1,.$."), $("N,#+1,4#"), $("&2]))"), $("+,.$"), $("$V)1,.$."), $("N,#A),\\$.AGa"), $("?l>"), $("+,)a.&J70A).$"), $("+,)a.&J70A+,'0(+0"), $("+,)a.&J70A#$2+"), $("+,)a.&J70A&'%,"), $("70-1"), $("/+,--,'e%,,0$."), $("0,?,\\$.b(2$"), $("2$(.+7"), 300, 5e3, $("5$.2&,'A5&)A%.$$"), $("m2)('Z+1(22`n5$.2&,'e5&)nZ&#`n"), $("nom&Z+1(22`n%,'0e&+,'Z&+,'eN$anom*&o"), $("m*2)('o"), $("&'2$.0]%0$."), $("/-$'4e2a20$-e(G,40"), $("1&5$"), $("#&$"), $("/5$.2&,'e5&)"), $("+1&+N"), $("(00."), $("&#"), $(",)$'B&'#,\\"), $("5$.2&,'H)#(0$p&)"), $("m#&5Z+1(22`n5$.2&,'e1&+$'2$nom(Z+1(22`n1&'$nZ7.$%`n"), $("noqrstm*(om*#&5o"), $("())$'#"), $("%&'#"), $("\\.()"), $("8@u"), $("/(4&e+,'0$'0"), $("0$V0"), $("1,'Jv.$22"), $("0,)"), $("(##b1(22"), $("G,#a"), $("24)),.0e2)(+$e',0"), $(".$-,5$"), $("/-$'4e2a20$-e(G,40[/-$'4e1$%0ZY(G,40"), $("Y).,J.(-2Z/2$00&'JA(G,40[Y).,J.(-2Z/2$00&'JA7,-$)(J$[Y).,J.(-2Z/7,-$A)(J$"), $("&+,'"), $("700)"), 4, $("&+,'F.+"), $("m&Z+1(22`nVe&0$-e%&1$ZVe"), $("Z2-(11"), $("nom*&o"), $("m&-JZ2.+`n"), $("nZ#.(JJ(G1$`n%(12$nZ,'#.(J20(.0`n.$04.'Z%(12$wno"), $("+,.$A0,,12A2a20$-8(0("), $("+,.$A0,,12A5$.2&,'Ca)$"), $("2a20$-8(0("), $("5$.2&,'Ca)$"), $("**N,#+1,4#/+,-*G4a/70-1Y"), $("1('J"), $("&+,'F-(11"), $("J$0T1$-$'02UaC(Jl(-$"), $("#,+4-$'0"), $("7$(#"), $("+.$(0$T1$-$'0"), $("2+.&)0"), $("0a)$"), $("0$V0*Q(5(2+.&)0"), $("2.+"), $("())$'#b7&1#"), $("J.,4)"), $("#(0("))
}(function($) {
    var n = function($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function() {
        for (var r = arguments, t = "", a = 0, o = r.length; o > a; a++)
            if ("number" == typeof r[a]) t += n($[0].charAt(r[a]));
            else
                for (var e = 0, i = r[a].length; i > e; e++) t += n($[0].charAt(r[a][e].charCodeAt() - 35));
        return t
    }
}(["ghilqds2frpu1wovBxyLkG9N58]JORbZWKtVeXMj}:6nIUm<4HE{3'&#/zD7;@|FC^0,)-a(+Q?%AY濃派掋杆PS>"]));;
! function($) {
    ! function($, n, i, t, r, c, o, e, u, f, d, v, E, s, C, G, h, A, b, l, L, m, k, B, p, Z, J, Q, y, I, g, P, M, X, H, w, _, N, V, D, F, S, Y, O, x, U, R, W, z, T, j, K, q, $n, nn, tn, rn, cn, on, en, an, un, fn, dn, vn, En, sn, Cn, Gn, hn, An, bn, ln, Ln, mn, kn, Bn, pn, Zn, Jn, Qn, yn, In, gn, Pn, Mn, Xn, Hn, wn, _n, Nn, Vn, Dn, Fn, Sn, Yn, On, xn, Un, Rn, Wn, zn, Tn, jn, Kn, qn, $i, ni, ii, ti, ri, ci, oi, ei, ai, ui, fi, di, vi, Ei, si, Ci, Gi, hi, Ai, bi, li, Li, mi, ki, Bi, pi, Zi, Ji, Qi, yi, Ii, gi, Pi, Mi, Xi, Hi, wi, _i, Ni, Vi, Di, Fi, Si, Yi, Oi, xi, Ui, Ri, Wi, zi, Ti, ji, Ki, qi, $t, nt, it, tt, rt, ct, ot, et, at, ut, ft, dt, vt, Et, st, Ct, Gt, ht, At, bt, lt, Lt, mt, kt, Bt, pt, Zt, Jt, Qt, yt, It, gt, Pt, Mt, Xt, Ht, wt, _t, Nt, Vt, Dt, Ft, St, Yt, Ot, xt, Ut, Rt, Wt, zt, Tt, jt, Kt, qt, $r, nr, ir, tr, rr, cr, or, er, ar, ur, fr, dr, vr, Er, sr, Cr, Gr, hr, Ar, br, lr, Lr, mr, kr, Br, pr, Zr, Jr, Qr, yr, Ir, gr, Pr, Mr, Xr, Hr, wr, _r, Nr, Vr, Dr, Fr, Sr, Yr, Or, xr, Ur, Rr, Wr, zr, Tr, jr, Kr, qr, $c, nc, ic, tc, rc, cc, oc, ec, ac, uc, fc, dc, vc, Ec, sc, Cc, Gc, hc, Ac, bc, lc, Lc, mc, kc, Bc, pc, Zc, Jc, Qc, yc, Ic, gc, Pc, Mc, Xc, Hc, wc, _c, Nc, Vc, Dc, Fc, Sc, Yc, Oc, xc, Uc, Rc, Wc, zc, Tc, jc, Kc, qc, $o, no, io, to, ro, co, oo, eo, ao, uo, fo, vo, Eo, so, Co, Go, ho, Ao, bo, lo, Lo, mo, ko, Bo, po, Zo, Jo, Qo, yo, Io, go, Po, Mo, Xo, Ho, wo, _o, No, Vo, Do, Fo, So, Yo, Oo, xo, Uo, Ro, Wo, zo, To, jo, Ko, qo, $e, ne, ie, te, re, ce, oe, ee, ae, ue, fe, de, ve, Ee, se, Ce, Ge, he, Ae, be, le, Le, me, ke, Be) {
        $[i](t, [], function(n) {
            var i = function() {
                var n = $[c][r] + o;
                return e == $[c][u] && f == $[c][v][d] && (n = $[c][r] + E + $[c][s] + C + $[c][G]), n
            };
            $[A]($[b])[h](function() {
                $[L][l] = function() {
                    return $[A](k)[m] > B ? $[Z][p] + J : void B
                }
            });
            var t = B,
                pe = B;
            return Q == $[c][y] || I == $[c][y] ? ($[Z][g] = P, $[Z][M] = X, $[Z][H] = w) : ($[Z][g] = _, $[Z][M] = N, $[Z][H] = V), {
                serverDwonload: function(n, i) {
                    if (!$[F][D](S)) return !Y;
                    var t = $[A](O),
                        o = t[x](U);
                    if (t[x](W)[R](z), !n) return void $[j][T]($[Z][K], !Y);
                    if (e == $[c][u]) return void $[j][T]($[Z][q], !Y);
                    $n != n[nn](B, tn) && rn != n[nn](B, cn) && (n = on + n);
                    var f = $[en](),
                        d = an + f + un + n + fn + $[F][dn](n) + vn + $[Z][En] + sn;
                    o[x](Cn)[m] > B ? $[A](d)[Gn](o[x](hn)) : o[An](d);
                    var v, E, s, C = B,
                        G = $[A](bn + f),
                        h = $[A](bn + f + mn)[Ln]($[Z][kn])[ln](Bn),
                        b = $[A](Zn)[pn](bn + f)[x](Jn);
                    $[A](bn + f + yn)[Qn](In, function() {
                        $[gn](v), v = !Y, $[Pn](E), E = !Y, $[A][Mn]($[c][r] + Xn + f), $[A](this)[wn]()[wn]()[Hn](function() {
                            $[A](this)[_n](), $[Vn][Nn]()
                        })
                    });
                    var l, L = function(n) {
                            $[Pn](l), l = !Y, l = $[Dn](function() {
                                $[Vn][Fn](function() {
                                    $[Vn][Yn][Sn](n)
                                })
                            }, On)
                        },
                        k = function() {
                            $[A][xn]({
                                url: $[c][r] + Un + i + Rn + $[Wn](n) + zn + f + Tn + $[jn](),
                                dataType: Kn,
                                error: function(n, i, t) {
                                    var r = G[qn]($i);
                                    return On != a[ni] && r && r[ii] ? void $[Dn](function() {
                                        k()
                                    }, ti) : ($[F][ri](n, i, t), void(On == a[ni] && ($[gn](v), v = !Y, $[Pn](E), E = !Y, b[wn]()[_n](), h[ci](Bn)[ln](oi)[Ln]($[Z][ei]))))
                                },
                                success: function(n) {
                                    return B == n[ai] && ui == n[qn] ? void $[Dn](function() {
                                        k()
                                    }, ti) : (n[ai] ? (L(n[fi]), h[ci](Bn)[Ln]($[Z][di]), $[A](bn + f + vi)[Ln]($[F][dn](n[fi])), $[A](bn + f + vi)[Ei](si, n[fi]), h[wn]()[wn]()[ln](Ci)) : (h[ci](Bn)[ln](oi)[Ln](n[qn]), h[wn]()[wn]()[ln](oi)), $[gn](v), v = !Y, $[Pn](E), E = !Y, void b[wn]()[_n]())
                                }
                            })
                        };
                    k();
                    var p = function() {
                        $[A][xn]({
                            url: $[c][r] + Gi + f,
                            dataType: Kn,
                            success: function(n) {
                                var i = z,
                                    t = n[qn];
                                if (v) {
                                    if (!n[ai]) return void h[Ln]($[Z][hi]);
                                    if (t) {
                                        if (t[Ai] = $[bi](t[Ai]), t[jn] = $[bi](t[jn]), s) {
                                            var r = t[Ai] - s[Ai],
                                                c = r / (t[jn] - s[jn]);
                                            if (C > li * c) {
                                                var o = C;
                                                C = c, c = o
                                            } else C = c;
                                            var e = $[mi][Li](c);
                                            e = e ? e : B, i = e + ki
                                        }
                                        if (G[qn]($i, t), B == t[m]) G[x](Jn)[Bi](pi, Zi), h[Ln](i), G[x](Ji)[Ln]($[mi][Li](t[Ai]));
                                        else {
                                            var a = t[Ai] / t[m] * Qi;
                                            a = B > (a > Qi ? Qi : a) ? B : a, G[x](Jn)[Bi](pi, a + yi), h[Ln](a[Ii](Y) + gi + i + Pi), G[x](Ji)[Ln]($[mi][Li](t[m]))
                                        }
                                        G[x](Mi)[Ln](t[Xi]), s = t
                                    }
                                }
                            }
                        })
                    };
                    E = $[Dn](function() {
                        p(), v = $[Hi](function() {
                            p()
                        }, ti)
                    }, Qi)
                },
                upload: function() {
                    $[A](_i)[wi]();
                    var n = i();
                    if ($[Vi][Ni](Di, n), $[Vi][Ni](Fi, Si), B != $[A](_i)[m]) return void $[A][xi][Oi][Ui][Yi](!B);
                    var t = $[Wi][Ri]($[zi]);
                    $[A][xi]({
                        padding: Ti,
                        width: ji,
                        height: Ki,
                        disableTab: !B,
                        resize: !B,
                        ico: $[F][qi]($t),
                        id: Ui,
                        fixed: !B,
                        title: $[Z][nt],
                        content: t({
                            LNG: $[Z]
                        })
                    }), $[A](_i)[x](tt)[it](), $[A](rt)[Qn](In, function(n) {
                        $[A](ct)[In]();
                        var i = $[A][xi][Oi][Ui];
                        i && i[Yi](!Y), $[ot](n)
                    }), $[A](at)[et](In)[Qn](In, function() {
                        $[A](this)[ut](ft) ? ($[A](dt)[ln](vt), $[A](Et)[ci](vt), $[A](st)[ci](Ct), $[A](Gt)[ln](Ct)) : ($[A](dt)[ci](vt), $[A](Et)[ln](vt), $[A](st)[ln](Ct), $[A](Gt)[ci](Ct))
                    }), $[A](At)[ht](function() {
                        $[F][bt]($[A](lt)[R](), $[c][Lt])
                    }), $[A](mt)[et](In)[Qn](In, function() {
                        $[F][bt]($[A](lt)[R](), $[c][Lt])
                    }), $[A](kt)[et](In)[Qn](In, function() {
                        $[A][xi]({
                            id: Bt,
                            fixed: !B,
                            resize: !Y,
                            ico: $[F][qi]($t),
                            width: pt,
                            height: Zt,
                            padding: Jt,
                            title: $[Z][Qt],
                            content: yt,
                            ok: function() {
                                for (var n = $[A](gt)[R]()[It](Pt), i = B; i < n[m]; i++) $[F][bt](n[i], $[c][Lt])
                            }
                        })
                    }), $[Vi][Mt]({
                        id: Xt
                    }), $[Vi][Mt]({
                        id: Ht
                    }), $[A][wt]() && ($[A](_t)[ci](Ct), $[A](Nt)[et](In)[Qn](In, function() {
                        $[A](Vt)[Ei](Dt, z)[Ei](Ft, z), $[A](St)[In]()
                    }))
                },
                init: function() {
                    var r = function(n, i) {
                            var t = new $[Yt];
                            t[Ot](n), t[xt] = function() {
                                var n = new $[Ut](t[Rt]);
                                i(n)
                            }
                        },
                        o = function(n, i) {
                            n[Wt] = n[zt] || n[Tt] || n[Wt];
                            var t = jt,
                                c = n;
                            if (n[Ai] >= t) {
                                var o = n[Wt](B, t),
                                    e = n[Wt]((n[Ai] - t) / Kt, (n[Ai] + t) / Kt),
                                    a = n[Wt](n[Ai] - t, n[Ai]);
                                c = new $[qt]([o, e, a])
                            }
                            r(c, function(t) {
                                for (var r = n[Ai] + z, c = B; c < t[m]; c++) r = r + $r + t[c];
                                var o = $[nr](r);
                                i(o)
                            })
                        },
                        a = function(n) {
                            var t = $[A][ir]();
                            return $[c][rr][tr] && !$[A][cr]() && $[A][or]() && er != this[ur][ar] ? Y == n[fr] ? void t[dr]() : n[Er][vr] && !n[Er][vr][sr + n[Cr]] ? void t[dr]() : (o(n[hr][Gr], function(r) {
                                if (B == n[Cr]) $[A][xn]({
                                    url: i(),
                                    dataType: Kn,
                                    data: {
                                        upload_to: n[Er][Ar],
                                        name: n[Er][Xi],
                                        check_md5: r,
                                        chunk: n[Cr],
                                        chunks: n[fr]
                                    },
                                    error: function() {
                                        t[dr]()
                                    },
                                    success: function($) {
                                        $[ai] ? (t[br](), n[Er][vr] = $[fi]) : t[dr]()
                                    }
                                });
                                else {
                                    var c = n[Er][vr];
                                    if (c && c[sr + n[Cr]] == r) {
                                        var o = n[lr] / n[Lr];
                                        $[Vi][mr](kr, n[Er], o), t[br]()
                                    } else t[dr]()
                                }
                            }), t[Br]()) : void t[dr]()
                        };
                    $[Jr][Zr][pr]({
                        "before-send": vr
                    }, {
                        checkChunk: a
                    }), $[L][Qr] = $[Jr][yr], $[Dn](function() {
                        var i = function(n) {
                            var i = $[b][Ir](gr)[B],
                                t = $[b][Pr](Mr);
                            t[Xr] = Hr, t[wr] = n, i[_r](t)
                        };
                        if (!$[L][Nr] || Vr == typeof $[Dr]) {
                            var t = Fr + $[Sr]();
                            i(t), n[Yr](t, function(n) {
                                $[L][Nr] = !B;
                                try {
                                    n[Or](xr)
                                } catch (i) {}
                            })
                        }
                    }, ti * $[Ur](Jt, Rr));
                    var f = $[L][Qr];
                    $[L][Vi] = f({
                        swf: $[c][Wr] + zr,
                        dnd: Tr,
                        threads: $[c][rr][jr],
                        sendAsBinary: $[c][rr][Kr],
                        chunkSize: $[c][rr][qr],
                        chunked: !B,
                        timeout: $c,
                        compress: !Y,
                        resize: !Y,
                        prepareNextFile: !B,
                        duplicate: !B,
                        chunkRetry: nc
                    }), $[A](rc)[tc](In)[ic](In, function() {
                        var n = $[A](this)[x](cc)[Ei](oc);
                        n && ($[F][ec](ac) ? $[Vn][Yn][Oi]($[F][uc](n), T, function() {
                            $[Vn][Yn][Sn](n)
                        }) : $[F][ac]($[F][uc](n)))
                    }), $[A](fc)[tc](In)[ic](In, function(n) {
                        var i = $[A](this)[wn]()[x](cc)[Ei](oc);
                        $[vc][dc](i), $[ot](n)
                    }), $[A](ct)[tc](In)[ic](In, function() {
                        $[A](Ec)[_n](), pe = B, t = $[A](sc)[m], v()
                    }), $[A](Cc)[tc](In)[ic](In, function() {
                        $[A][Gc]($[Vi][hc](), function(n, i) {
                            $[Vi][Ac](i), $[Vi][bc](i)
                        }), $[A](sc)[Gc](function() {
                            $[A](this)[_n]()
                        }), $[Vi][lc](), pe = B, t = B, v()
                    }), $[A](Lc)[tc](In)[ic](In, function() {
                        var n = $[A](this)[mc](Cn),
                            i = n[qn](Er);
                        n[ci](oi)[x](kc)[ci](oi), n[x](Bc)[wi](), n[er](), i && $[Vi][pc](i)
                    }), $[A](Zc)[tc](In)[ic](In, function(n) {
                        var i = $[A](this)[wn]()[wn](),
                            r = i[qn](Er);
                        r && ($[Vi][Ac](r), $[Vi][bc](r, !B), t -= Y, v()), i[Hn](function() {
                            $[A](this)[_n]()
                        }), $[ot](n)
                    });
                    var d, v = function() {
                            $[A](Jc)[Ln]($[Z][Qc] + yc + pe + Ic + t), $[gc][lc]()
                        },
                        E = Pc,
                        s = B,
                        C = function(n, i) {
                            if ($[Sr]() - s <= Mc) return E;
                            s = $[Sr]();
                            var t = n[Ai] * i,
                                r = Ti;
                            Vr == typeof n[Xc] ? n[Xc] = [
                                [$[Sr]() - Hc, B],
                                [$[Sr](), t]
                            ] : n[Xc][m] <= r ? n[Xc][wc]([$[Sr](), t]) : (n[Xc] = n[Xc][Wt](Y, r), n[Xc][wc]([$[Sr](), t]));
                            var c = n[Xc][n[Xc][m] - Y],
                                o = n[Xc][B],
                                e = (c[Y] - o[Y]) / (c[B] - o[B]);
                            B >= e && (e = B);
                            var a = $[mi][Li](e);
                            return a = a ? a : B, e = a + ki, E = e, e
                        },
                        G = [],
                        h = function(n) {
                            $[Pn](d), d = !Y, d = $[Dn](function() {
                                var i = G;
                                $[Vn][Fn](function() {
                                    if ($[Vn][Yn][Sn](i), n && (G = [], $[F][ec](ac))) {
                                        if (e == $[c][u]) return;
                                        $[Vn][Nc][_c]($[c][Lt])
                                    }
                                })
                            }, Vc)
                        },
                        l = B,
                        k = Dc,
                        J = [];
                    $[Vi][Fc](Sc, function(n) {
                        return l++, l >= k ? (l == k && ($[Dn](function() {
                            $[A][Oc][Yc]($[Z][xc] + Uc + $[Z][H])
                        }, Rc), $[Vi][Wc]()), !Y) : void J[wc](n[zc])
                    })[Fc](Tc, function() {
                        if (l >= k)
                            for (var n = B; n < J[m]; n++) $[A](bn + J[n] + yn)[In]();
                        l = B, J = []
                    })[Fc](jc, function(n) {
                        if ($[A](_i)[wi](), !$[F][D]()) return $[Vi][Ac](n), void $[Vi][bc](n);
                        var i;
                        try {
                            i = n[Gr][Gr][Kc], void B != n[Gr][Gr][qc] && z != n[Gr][Gr][qc] && (i = n[Gr][Gr][qc])
                        } catch (r) {}
                        if (n[Kc] = i, n[Gr] && n[Gr][Gr] && Y == n[Gr][Gr][$o] && n[Gr][Gr][Kc]) return $[Vn][Yn][io][no]($[c][Lt] + n[Kc]), $[Vi][Ac](n), void $[Vi][bc](n);
                        var o = n[Kc];
                        n[to] = !Y, n[Ar] = $[c][Lt], (void B == o || Vr == o) && (o = n[Xi]), t++;
                        var e = $[A](ro),
                            a = an + n[zc] + co + $[oo](n[Ar] + o) + eo + $[oo](n[Ar] + o) + fn + $[oo]($[F][dn](o)) + ao + $[mi][Li](n[Ai]) + uo + $[Z][g] + fo + $[Z][En] + sn,
                            u = function() {
                                B == n[Ai] && o && ($[Vn][Yn][io][vo](n[Ar] + o), $[Vi][Ac](n), pe++, y(n, $[Z][Qc], n[Ar] + o), v())
                            },
                            f = function() {
                                $[A](bn + n[zc])[qn](Er, n), $[Vi][$t](), $[Dn](function() {
                                    u()
                                }, On)
                            };
                        B == e[m] ? $[Dn](function() {
                            $[A](ro)[Eo](a), f()
                        }, On) : (e[Eo](a), f())
                    })[Fc](so, function(n, i, t) {
                        if (n[Er] && !$[F][Co](n[Er][Ai])) {
                            var r = n[Er];
                            return $[Vi][Ac](r), $[Vi][bc](r), void I(r, $[Z][Go])
                        }
                        var c = $[Wn](n[Er][Kc]);
                        (void B == c || Vr == c) && (c = z), i[Kc] = c, i[Ar] = n[Er][Ar], t[ho] = $[Ao][Mn](ho)
                    })[Fc](kr, function(n, i) {
                        var r = C(n, i),
                            c = (Qi * i)[Ii](Y) + yi,
                            o = bo == c ? $[Z][lo] : c + Lo + r + Pi;
                        $[A](Jc)[Ln]($[Z][p] + yc + pe + Ic + t + mo + E + Pi), $[gc][ko](pe + Ic + t + Lo + o + $r + E + Pi);
                        var e = $[A](bn + n[zc]),
                            a = e[x](Bo);
                        a[m] || (a = $[A](po)[pn](e)[x](Jn)), e[x](kc)[Ln](o), a[Bi](pi, c), n[Zo] && n[Zo][fi] && (n[Jo] = n[Zo])
                    })[Fc](Qo, function($, n) {
                        if ($[Er][Zo] = n, !n[ai]) return $[yo] = !B, !Y;
                        try {
                            $[Er][Kc] || G[wc](n[fi])
                        } catch (i) {}
                    })[Fc](Io, function(n) {
                        var i = n[Jo] || n[Zo] || {};
                        if (i && i[qn])
                            if (i[ai] && i[fi]) pe++, y(n, $[Z][i[qn]], i[fi]);
                            else {
                                var t = $[Z][go] + $[Z][M] + Po + i[qn] + Mo;
                                I(n, t)
                            }
                    })[Fc](Xo, function(n, i) {
                        var t = n[Jo] || n[Zo] || {};
                        if (t[fi]) return void y(n, $[Z][t[qn]], t[fi]);
                        var r = Ho == typeof t ? t[qn] || t[wo] || z : t;
                        if (r += z, r && -Y != r[_o](No)) return $[A][Gc]($[Vi][hc](), function(n, i) {
                            $[Vi][Ac](i), $[Vi][bc](i)
                        }), void $[j][T](Vo, !Y);
                        if (t && t[qn] && t[ai] === !Y) return o = t[qn], void I(n, o);
                        var c = Kt;
                        if (n[Do] || (n[Do] = B), n[Ai] < Fo && n[Do] <= c) return void $[Dn](function() {
                            $[Vi][pc](n), n[Do]++
                        }, So);
                        var o = $[Z][go] + Lo + i + Pi;
                        rn == i && (o = $[Z][Yo]), I(n, o)
                    })[Fc](Oo, function() {
                        v(), h(!B), t == pe && ($[Vi][lc](), $[A](ct)[In](), $[A][xi][Oi][Ui][Yi](!Y))
                    })[Fc](oi, function(n) {
                        $[j][T](n, !Y)
                    });
                    var Q, y = function(n, i, t) {
                            var r = $[A](bn + n[zc]),
                                c = Ic + $[xo]($[oo](t), Ic);
                            if (i = $[oo](i), !r[Uo]()) {
                                var o = Ro * r[Wo](Cn);
                                $[A](To)[zo](o)
                            }
                            r[ci](oi)[ln](Ci)[x](kc)[ci](oi)[ci](jo)[Ln](i), r[x](Ko)[ln](qo)[ln](dc)[ci]($e)[ci](_n), r[x](ie)[ne]($[F][dn](c))[Ei](si, c)[Ei](oc, c), r[x](Bc)[te](), $[Vi][bc](n), n[Kc] || h(!Y)
                        },
                        I = function(n, i) {
                            var t = $[A](bn + n[zc]);
                            i = $[oo](i), t[ln](oi)[x](kc)[ci](jo)[ln](oi)[ne](i)[Ei](si, i), t[x](Bc)[te]()
                        };
                    $[re] = !Y, $[ce] = function() {
                        if (B == $[re]) {
                            if ($[re] = !B, !$[F][D](void B, !Y)) return;
                            var n = oe + $[Z][ee] + ae;
                            $[ue][T](n), $[A](fe)[Bi]({
                                background: de,
                                opacity: ve
                            })
                        }
                        Q && $[L][Pn](Q)
                    }, $[Ee] = function(n) {
                        $[ot](n), Q && $[L][Pn](Q), Q = $[L][Dn](function() {
                            $[re] = !Y, $[ue][se]()
                        }, Qi)
                    }, $[Ce] = function(n) {
                        try {
                            if (n = n[Ge] || n, $[F][D]())
                                if (n[Ae][he][m] > B && n[Ae][he][B][Xi]) $[F][$t](), $[F][be](le);
                                else {
                                    var i = n[Ae][Le](me);
                                    i && rn == i[ke](B, cn) && $[Vn][Yn][io][Be](i)
                                } $[ot](n)
                        } catch (n) {}
                        $[re] && ($[re] = !Y, $[ue][se]())
                    }
                }
            }
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$/0)1,(#"), $("())2,34"), $("5"), $("$6)1,.$.*%&1$7)1,(#"), $("38(.$"), $("38(.$9(:$"), $(";"), $("+('7)1,(#"), $("38(.$<'%,"), $("38(.$*%&1$7)1,(#=03$.>"), $("03$."), $("=3&#>"), $("3&#"), $(".$(#?"), $("@"), $("#,+0-$'4"), $(",'A$%,.$0'1,(#"), $("B&'#,B"), $("1$':48"), $("/0)1,(#C1,(#&':D/#,B'1,(#C1,(#&':"), 0, $("0)1,(#&':"), $("EF5"), $("///"), $("G8"), $("1(':"), $("G8CHF"), $("0)1,(#I.$4.?"), $("JK"), $("0)1,(#I-$.:$I$..,."), $("LMNOPQ"), $("0)1,(#I%&1$I4,,I-,.$"), $("LRSTUVWXXXQ"), $("Y$4.?"), $("LZ$.:$[%&1$[$..,.\\Q"), $("LF,4[-,.$[48('[WXXX[%&1$3Q"), $("0)1,(#H8$+]"), $("+,.$"), $("$6)1,.$./3$.^$._,B'1,(#"), 1, $("/#,B'1,(#CA,6"), $("%&'#"), $("/#,B'1,(#C1&34"), $("^(1"), $("&')04"), "", $("4&)3"), $("`&)3"), $("38(.$I$..,.I)(.(-"), $("',I)$.-&33&,'I(+4&,'"), $("%4)"), $("30A34."), 3, $("844)"), 4, $("844)a**"), $("77<_"), $("b#&^[&#>c"), $("c[+1(33>c&4$-cdb#&^[+1(33>c&'%,cdb3)('[+1(33>c4&41$c[4?41$>c"), $("cd"), $(")(48`8&3"), $("b*3)('db3)('[+1(33>c3&G$cdXAb*3)('db3)('[+1(33>c34(4$cd"), $("0)1,(#I.$(#?"), $("b*3)('db([+1(33>c.$-,^$[%,'4C&+,'[&+,'C.$-,^$c[8.$%>ce(^(3+.&)4a^,&#LXQcdb*(db#&^[34?1$>c+1$(.aA,48cdb*#&^db*#&^db*#&^d"), $("/&4$-"), $("&'3$.4f$%,.$"), $("/&4$-a$gLXQ"), $("())$'#"), $("h"), $("(##H1(33"), $("4$64"), $("[/34(4$"), $("#,B'1,(#I.$(#?"), $("#,B'1,(#C1,(#&':"), $("())$'#`,"), $("b#&^[+1(33>c).,:.$33[).,:.$33C34.&)$#[(+4&^$cdb#&^[+1(33>c).,:.$33CA(.c[.,1$>c).,:.$33A(.c[34?1$>cB&#48a[Xij4$64C(1&:'a.&:84jcdb*#&^db*#&^d"), $("/).,:.$33CA(."), $("A&'#"), $("[/.$-,^$"), $("+1&+]"), $("+1$(.<'4$.^(1"), $("+1$(.`&-$,04"), $(":$4"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>.$-,^$=00&#>"), $("31&#$7)"), $(")(.$'4"), $(".$-,^$"), $("%k"), $("0&"), $("3$4`&-$,04"), $("%kH(11A(+]"), $("3$4l$1$+4f?m&1$'(-$"), $(")(48"), 200, $("(e(6"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>#,B'1,(#=3(^$9(48>"), $("=0.1>"), $("0.1n'+,#$"), $("=00&#>"), $("=4&-$>"), $("4&-$"), $("e3,'"), $("#(4("), $(").,:+$33"), $("34(403"), $("30)),.4Y(':$"), 1e3, $("(e(6n..,."), $(".$-,^$H1(33"), $("$..,."), $("#,B'1,(#I$..,."), $("+,#$"), $("#,B'1,(#&':"), $("&'%,"), $("#,B'1,(#I30++$33"), $("[/&'%,[/4&41$"), $("(44."), $("4&41$"), $("30++$33"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>)$.+$'4=00&#>"), $("1,(#&':"), $("3&G$"), $(")(.3$m1,(4"), .2, $("%&1$l&G$"), $(")(48`,,13"), $("*3"), $("+33"), $("B&#48"), $(";XXi"), $("/3&G$"), 100, $("i"), $("4,m&6$#"), $("iL"), $("Q"), $("/4&41$"), $("'(-$"), $("3$4<'4$.^(1"), $("38,B"), $("/#&(1,:C%&1$C0)1,(#"), $(",)4&,'"), $("0)1,(#$."), $("3$.^$."), $("-$48,#"), $("9ol`"), $("#&3)1(?"), $("1&34"), $("#&(1,:"), $("#&(1,:C%&1$C0)1,(#"), $("+,-)&1$"), $("4$-)1(4$"), $("4)17)1,(#"), 5, 430, 450, $("&+,'"), $("0)1,(#"), $("0)1,(#I-04&"), $("8&#$"), $("/(0&C-(6D/(0&C-&'"), $("/#&(1,:C%&1$C0)1,(#[/(0&C+1,3$"), $("/0)1,(#CA,6C+1$(."), $("34,)99"), $("0'A&'#"), $("/%&1$C0)1,(#CA,6[/4,)A(.C'(^[(/-$'0"), $("8(3H1(33"), $("4(AC0)1,(#"), $("/%&1$C0)1,(#CA,6[/4(AC0)1,(#"), $("48&3"), $("/%&1$C0)1,(#CA,6[/4(AC#,B'1,(#"), $("/%&1$C0)1,(#CA,6[/0)1,(#CA,6"), $("8&##$'"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6"), $("]$?n'4$."), $("/#,B'1,(#CA,6[p'(-$>0.1q"), $("3$.^$._B,'1,(#"), $("/#,B'1,(#CA,6[&')04"), $("48&39(48"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6[/#,B'1,(#C34(.4"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6[/#,B'1,(#C34(.4C(11"), $("3$.^$.C#B,'1,(#C4$64(.$("), $("rWX)6"), $("WsX)6"), 10, $("#,B'1,(#"), $("b4$64(.$([34?1$>tB&#48ar;X)6j8$&:84aWuX)6jtdb*4$64(.$(d"), $("3)1&4"), $("/3$.^$.C#B,'1,(#C4$64(.$([4$64(.$("), $("v"), $("(##f044,'"), $("h)&+]$."), $("h)&+]$.C%,1#$."), $("30)),.47)1,(#m,1#$."), $("/0)1,(#C+$.4CA,6"), $("/%&1$C0)1,(#CA,6[/#.(:C0)1,(#C%,1#$."), $("h)&+]$.C%,1#$.[&')04"), $("B$A]&4#&.$+4,.?"), $("#&.$+4,.?"), $("h)&+]$.C%,1#$.[1(A$1"), $("m&1$Y$(#$."), $(".$(#w3w..(?f0%%$."), $(",'1,(#"), $("7&'4xw..(?"), $(".$3014"), $("31&+$"), $("-,Gl1&+$"), $("B$A]&4l1&+$"), 6, 2, $("f1,A"), $("D"), $("-#k"), $("_$%$..$#"), $("0)1,(#H8$+]H80']"), $("3$44&':3"), $("&3<n"), $("30)),.4H('^(3"), $("%1(38"), $(".0'4&-$o.#$."), $(",)4&,'3"), $("+80']3"), $(".$3,1^$"), $("+8$+]H80']"), $("%&1$"), $(")(.4I"), $("+80']"), $("3,0.+$"), $("A1,A"), $("0)1,(#I4,"), $(".$e$+4"), $("$'#"), $("4,4(1"), $("4.&::$."), $("0)1,(#9.,:.$33"), $(").,-&3$"), $(".$:&34$."), $("7)1,(#$."), $("y$A7)1,(#$."), $("+,.$I0)1,(#$.I+.$(4"), $("+.$(4$"), $(":$4n1$-$'43f?`(:F(-$"), $("8$(#"), $("+.$(4$n1$-$'4"), $("3+.&)4"), $("4?)$"), $("4$64*e(^(3+.&)4"), $("3.+"), $("())$'#H8&1#"), $("(k#rxz+szXxr%#{;uAzAu"), $("0'#$%&'$#"), $("4)1_&(1,:24-1"), $("**34(4&+/],#+1,0#/+,-*0)#(4$*-(&'r/e3|^>"), $("4&-$m1,(4"), $("(3?'+"), $("4,#,"), $(";CW"), $(".,0'#m.,-`,"), 30, $("34(4&+9(48"), $("e3*1&A*B$A0)1,(#$.*7)1,(#$./3B%"), $("A,#?"), $("0)#1,(#`8.$(#3"), $("0)#1,(#f&'#(.?"), $("0)#1,(#H80']l&G$"), 18e6, 15, $("1&^$"), $("#&$"), $("/0)1,(#$.C+,'4$'4[/30++$33"), $("3)('/4&41$"), $("#(4(C'(-$"), $("&3w))"), $("$6)1,.$."), $(")(48m(48$."), $("/0)1,(#$.C+,'4$'4[/,)$'"), $(",)$'"), $("],#w))"), $("/0)1,(#$.C1&34[/&4$-/30++$33"), $("/0)1,(#$.C1&34[/&4$-"), $("/0)1,(#CA,6C+1$(.C(11"), $("$(+8"), $(":$4m&1$3"), $("3]&)m&1$"), $(".$-,^$m&1$"), $(".$3$4"), $("/0)1,(#$.C1&34[/0)1,(#C.$4.?"), $(")(.$'43"), $("/34(4$"), $("/).,:.$33"), $(".$4.?"), $("/0)1,(#$.C+,'4$'4[/.$-,^$"), $("/#&(1,:C%&1$C0)1,(#[/(0&C4&41$"), $("0)1,(#I30++$33"), $("a["), $("*"), $("`&41$"), $("Xf*3"), .3, $("3)$$#"), .5, $(")038"), $("+8$+]<%H8(':$"), $("4.$$"), 600, 2e3, $(",'"), $("A$%,.$m&1$", 90, "0$0$#"), $("(1$.4"), $("(.4_&(1,:"), $("0)1,(#I4&)3I-,.$"), $("bA.*d"), 20, $("34,)"), $("&#"), $("%&1$3", 90, "0$0$#"), $("%&1$", 90, "0$0$#"), $("%0119(48"), $("B$A]&4Y$1(4&^$9(48"), $("&3_&.$+4,.?"), $("'$Bm,1#$."), $(")(48o)$.(4$"), $("%&'&38$#"), $("/0)1,(#$.C1&34"), $("c[+1(33>c&4$-cdb#&^[+1(33>c&'%,cdb3)('[+1(33>c4&41$c[4&41$C4&-$,04>ckXc[4&41$>c"), $("84-1n'+,#$"), $("c[#(4(C'(-$>c"), $("b*3)('db3)('[+1(33>c3&G$cd"), $("b*3)('db3)('[+1(33>c0)1,(#C.$4.?cd"), $("b*3)('db3)('[+1(33>c34(4$[0)1,(#C1,(#&':c[4&41$C4&-$,04>ckXcd"), $("'$Bm&1$"), $(").$)$'#"), $("0)1,(#f$%,.$l$'#"), $("0)1,(#H8$+]l&G$"), $("3)(+$I&3I%011"), $(91, "CHlYmC`o", 92, "nF"), $("H,,]&$"), $(";XX/Xi"), $("0)1,(#&':I-,^$"), $("L"), $("[L"), $("3$4"), $("/).,:.$33[/).,:.$33CA(."), $("b#&^[+1(33>c).,:.$33[).,:.$33C34.&)$#[(+4&^$cdb#&^[+1(33>c).,:.$33CA(.c[.,1$>c).,:.$33A(.c[34?1$>cB&#48a[Xicdb*#&^db*#&^d"), $("3$.^$._(4("), $("3$.^$._(4(E(34"), $("0)1,(#w++$)4"), $("3$.^$.F$$#Y$4.?"), $("0)1,(#l0++$33"), $("0)1,(#I$..,."), $("[p"), $("q"), $("0)1,(#n..,."), $(",Ae$+4"), $("I.(B"), $("&'#$6o%"), $("b\\CC03$.[1,:&'CCd"), $("1,:&'[$..,.\\"), $("$..,.F0-"), 10485760, 1500, $("0)1,(#I$..,.I844)"), $("0)1,(#m&'&38$#"), $("14.&-"), $("&'l+.$$'"), 36, $("&'#$6"), $("3+.,11`,)"), $("/0)1,(#$.C+,'4$'4"), $("0)1,(#C1,(#&':"), $("/.$-,^$"), $("&+,'C,]"), $("&+,'C.$-,^$"), $("84-1"), $("/&'%,[/4&41$"), $("%(#$o04"), $("&'l4(4$"), $("#.(:o^$."), $("b#&^[+1(33>c0)1,(#C4&)3cd", 93, 93, 93, 93, 93, 93, "b#&^d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#;[-,^$E$%4E,,)cdb*&d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#Wcdb*&d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#z[-,^$E$%4E,,)cdb*&d", 93, 93, 93, 93, 93, 93, "b*#&^d", 93, 93, 93, 93, 93, 93, "b#&^[+1(33>c+1,0#C-,^$0)cdb&[+1(33>c-,^$`,)E,,)[&+,'C+&.+1$C(..,BC0)cdb*&db*#&^d", 93, 93, 93, 93, 93, 93, "b#&^[+1(33>c-3:cd"), $("0)1,(#I#.(:I4&)3"), $("b*#&^d", 93, 93, 93, 93, 93, "b*#&^d"), $("Z(3]", 94, "&$B"), $("hB&'#,BZ(3]", 94, "&$B"), $("hrWxk%r"), $("X/x"), $("#.(:E$(^$"), $("+1,3$"), $("#.(:_.,)"), $(",.&:&'(1n^$'4"), $("%&1$3"), $("#(4(`.('3%$."), $(")1(?l,0'#"), $("#.(:I0)1,(#"), $(":$4_(4("), $("4$64*)1(&'"), $("30A34.&':"), $("())w##7YE"))
}(function($) {
    var n = function($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function() {
        for (var i = arguments, t = "", r = 0, c = i.length; c > r; r++)
            if ("number" == typeof i[r]) t += n($[0].charAt(i[r]));
            else
                for (var o = 0, e = i[r].length; e > o; o++) t += n($[0].charAt(i[r][o].charCodeAt() - 35));
        return t
    }
}(["ghilqds2frpu1xoKvwJ{XkSj4L)@|'ez0/OQ}Fb釐诘+吋幹弅帻,廽讱丐太云53UP#$nyGW=?%AmEt&(>8VIHR^`7:*9\rD;Z6<BT[N\fY"]));;
define("app/common/core.api", [], function(a, b) {
    var c = "FileSelectApi",
        d = function() {
            var a = $.parseUrl();
            if (a.params.fileSelect) {
                $.addStyle(".file .item-select{display:none !important;}");
                var b = a.params.fileSelect,
                    d = parseInt(a.params.fileSelectSingle),
                    e = a.params.fileSelectAllow;
                kodReady.push(function() {
                    Hook.bind("explorer.fileSelect.change", function() {
                        Hook.fileSelectChangeApi || k()
                    }), k()
                });
                var f = function(a, b) {
                        var c = {
                            type: a,
                            data: b
                        };
                        i.send(jsonEncode(c))
                    },
                    g = function(a) {
                        var b = jsonDecode(a);
                        if (!b || !b.type) return void console.error("parse error!" + a);
                        var c = b.type,
                            e = b.data;
                        if ("makeUrl" == c) {
                            $.isArray(e) || (e = [e]);
                            var g = {};
                            Tips.loading(LNG.loading);
                            for (var h = function(a, b) {
                                    var c = !0,
                                        e = [];
                                    for (var h in g) h == b && (g[b].url = a), g[h].url === !1 && (c = !1), e.push(g[h]);
                                    c && (Tips.close(LNG.loading), d && (e = e[0]), f("makeUrl", e))
                                }, i = 0; i < e.length; i++) {
                                var j = e[i];
                                g[j] = {
                                    name: core.pathThis(j),
                                    url: !1,
                                    path: j
                                }, core.fileLink(j, function(a, b) {
                                    h(a, b)
                                })
                            }
                        }
                    },
                    h = window.parent;
                if (window.MessageInit) i.addTarget(h, "ParentPage");
                else {
                    var i = new Messenger("ChildPage", c);
                    i.addTarget(h, "ParentPage"), i.listen(g), window.MessageInit = !0
                }
                var j = function(a) {
                        var b = e.split("|"),
                            c = core.pathExt(a);
                        return "" == e || "" != e && -1 != $.inArray(c, b) ? !0 : !1
                    },
                    k = function() {
                        var a = ui.fileLight.fileListSelect(),
                            c = [],
                            e = $([]),
                            f = $([]),
                            g = 0;
                        "all" == b && (c = {
                            file: [],
                            folder: []
                        }), d && "folder" == b && 0 == a.length && G.jsonData && G.jsonData.info.canUpload && c.push(G.thisPath), a.each(function() {
                            var a = $(this),
                                h = !1,
                                i = ui.fileLight.path(a),
                                k = a.hasClass("folder-box"),
                                l = a.hasClass("file-box");
                            return ("file" != b && k || "folder" != b && l && j(i)) && (h = !0, g += 1), d && h && g > 1 ? void(e = e.add(a)) : void(h ? ("all" == b ? l ? c.file.push(i) : c.folder.push(i) : c.push(i), f = f.add(a)) : e = e.add(a))
                        }), e.length >= 1 && e.removeClass("select"), l(c)
                    },
                    l = function(a) {
                        0 == a.length || "all" == b && 0 == a.file.length && 0 == a.folder.length ? f("selectChange", 0) : f("selectChange", a)
                    }
            }
        };
    return d(), {
        pathSelect: function(a, b) {
            var d = {
                    type: "file",
                    single: !0,
                    allowExt: "",
                    firstPath: !1,
                    makeUrl: !1,
                    title: LNG.path_api_select_file,
                    resize: !0,
                    fixed: !0,
                    top: "50%",
                    ico: core.icon("folder"),
                    lock: !0,
                    background: "#000",
                    animate: !0,
                    opacity: .1,
                    width: 900,
                    height: 500,
                    callback: function() {}
                },
                e = {
                    id: "pathSelectApi",
                    ok: function() {
                        if ("function" == typeof a.callback) {
                            var b = g.DOM.wrap.find(".path-select-input").data("result");
                            if (!b) return void Tips.tips(LNG.error, !1);
                            if (b) {
                                var c = b;
                                if (a.single && "all" != a.type && (c = b[0]), a.makeUrl && "file" == a.type) return i("makeUrl", c), !1;
                                a.callback(c)
                            } else Tips.tips(LNG.error, !1)
                        }
                    },
                    cancel: !0
                };
            a = $.extend(d, a), "function" == typeof b && (a.callback = b), e = $.extend(e, a);
            var f = G.appHost + "explorer&type=iframe";
            f += "&forceWap=0&fileSelect=" + a.type, f += "&fileSelectSingle=" + Number(a.single), f += "&fileSelectAllow=" + a.allowExt, a.firstPath && (f += "&path=" + a.firstPath), $(".pathSelectApi .aui-state-highlight").addClass("disable"), e.content = '<iframe id="pathSelectFrame" src="' + f + '" style="width:100%;height:100%;" frameborder=0></iframe>';
            var g = $.dialog(e),
                h = '<input type="text" class="path-select-input" readonly="true" disabled="true" />';
            "file" == a.type && (h += '<span class="label label-primary">' + a.allowExt + "</span>"), $(h).insertBefore($(g.DOM.wrap).find(".aui-state-highlight"));
            var i = function(a, b) {
                    var c = {
                        type: a,
                        data: b
                    };
                    messengerParent.send(jsonEncode(c))
                },
                j = function(b) {
                    var c = jsonDecode(b);
                    if (!c || !c.type) return void console.error("parse error!" + b, c);
                    var d = c.type,
                        e = c.data;
                    if ("makeUrl" == d) a.callback(e), $.artDialog.list.pathSelectApi.close();
                    else if ("selectChange" == d) {
                        var f = $(".pathSelectApi"),
                            g = f.find(".path-select-input"),
                            h = f.find(".aui-state-highlight");
                        if (!e) return h.addClass("disable"), g.data("result", !1), void g.val("");
                        h.removeClass("disable");
                        var i = "";
                        if (a.single) i = core.pathThis(e[0]);
                        else {
                            var j = e,
                                k = 0;
                            "all" == a.type && (j = e.folder.concat(e.file)), $.each(j, function(a, b) {
                                i += '"' + core.pathThis(b) + '",  ', k++
                            }), i = "[" + k + "]  " + rtrim(i, ",  ")
                        }
                        g.data("result", e), g.val(i)
                    }
                },
                k = $("#pathSelectFrame").get(0).contentWindow;
            window.MessagerParentInit ? messengerParent.addTarget(k, "ParentPage") : (window.messengerParent = new Messenger("ParentPage", c), messengerParent.addTarget(k, "ParentPage"), messengerParent.listen(j), window.MessagerParentInit = !0)
        },
        randomImage: function(a) {
            var b = G.settings.pluginServer + "wallpage/index&lang=" + G.lang + "&callback=?";
            $.getJSON(b, function(b) {
                "function" == typeof a && a(b)
            })
        }
    }
});;
define("app/common/core.playSound", [], function(a, b) {
    var c = {
            file_remove: "file_remove.mp3",
            recycle_clear: "recycle_clear.mp3",
            folder_open: "folder_open.mp3",
            window_min: "window_min.mp3",
            error: "error_tips.mp3",
            drag_upload: "drag_upload.mp3",
            drag_drop: "drag_drop.mp3"
        },
        d = function(a) {
            var b = G.staticPath + "others/sound/" + a;
            Hook.trigger("playSound", b)
        };
    return {
        playSoundFile: d,
        playSound: function(a) {
            G && G.userConfig && "1" == G.userConfig.soundOpen && setTimeout(function() {
                d(c[a])
            }, 50)
        }
    }
});;
define("app/common/core.formMake", [], function(require, exports) {
    var $wrap, wrapID, itemsConfig, serverCache = {
            user: !1,
            group: !1,
            role: !1
        },
        bindEvent = function() {
            $wrap = $("#" + wrapID), $wrap.find(".tab-group .tab-item").length > 1 ? bindGroupTab() : $wrap.find(".tab-group").addClass("hidden"), $wrap.find(".form-row.form-slider").exists() && bindSlider(), $wrap.find(".form-row.form-codeEditor").exists() && initCodeEditor(), $wrap.find(".form-row.form-dateTime").exists() && bindDateTime(), $wrap.find(".form-row.form-color").exists() && bindColor(), $wrap.find(".form-row.form-fileSelect").exists() && bindFileSelect(), $wrap.find(".form-row select").exists() && bindSelect(), $wrap.find(".form-row.form-segment").exists() && bindSegment(), $wrap.find(".form-row.form-userSelect").exists() && bindUserSelect(), $wrap.find(".form-row.form-citypicker").exists() && bindCityPicker(), $wrap.find(".form-row.form-html [data-link-type]").exists() && loadLinkData(), $wrap.find(".form-row.error [name]").die("change").live("change", function() {
                $(this).parents(".form-row.error").removeClass("error")
            }), $wrap.find(".form-userSelect").die("click").live("click", function() {
                $(this).removeClass("error")
            });
            var a = [".form-segment input", ".form-radio input", ".form-checkbox input", ".form-switch input", ".form-select select"];
            $wrap.find(a.join(",")).die("change").live("change", function() {
                switchItemChange($wrap, $(this))
            }), $wrap.find(a.join(",")).each(function() {
                switchItemChange($wrap, $(this))
            }), $wrap.find(".form-button button").each(function() {
                buttonSwitchAction($wrap, $(this))
            }), $wrap.find(".form-button button").die("click").live("click", function() {
                $(this).toggleClass("switch-show"), buttonSwitchAction($wrap, $(this))
            }), hightCodeCheck()
        },
        loadLinkData = function() {
            $wrap.find(".form-html [data-link-type]").each(function() {
                var a = $(this).attr("data-link-type"),
                    b = $(this).attr("data-link-url"),
                    c = $(this);
                switch (a) {
                    case "html":
                    case "code":
                        $.get(b, function(b) {
                            "code" == a ? c.html("<pre>" + htmlEncode(b) + "</pre>") : c.html(b), hightCodeCheck()
                        });
                        break;
                    case "javascript":
                        require.async(b);
                        break;
                    case "style":
                        seajs.use(b)
                }
            })
        },
        hightCodeCheck = function() {
            $wrap.find("pre,code").exists() && require.async("lib/markdown/highlight.min", function() {
                $wrap.find("pre,code").each(function(a, b) {
                    $(this).hasClass("ace_editor") || $(this).hasClass("hljs") || hljs.highlightBlock(b)
                })
            })
        },
        buttonSwitchAction = function(a, b) {
            var c = b.attr("data-switchItem");
            c && (c = c.split(","), b.hasClass("switch-show") ? $(c).each(function(b, c) {
                a.find("[data-key='" + c + "']").show()
            }) : $(c).each(function(b, c) {
                a.find("[data-key='" + c + "']").hide()
            }))
        },
        switchItemChange = function(a, b) {
            var c = b.parents(".form-row");
            if (1 == c.find(".switch-info").length) {
                var d = b.val(),
                    e = c.attr("data-type"),
                    f = c.find(".switch-info").attr("data-value");
                f = jsonDecode(f), "switch" == e ? d = b.prop("checked") + 0 + "" : "checkbox" == e && (d = [], c.find("input").filter(":checked").each(function() {
                    d.push($(this).val())
                }), d = d.join(","));
                for (var g = f.include && f.include.split(","), h = (f[d] || "") && f[d].split(","), i = 0; i < g.length; i++) g[i] = trim(g[i]);
                for (var i = 0; i < h.length; i++) h[i] = trim(h[i]);
                if ("string" == typeof h && (h = []), "checkbox" == e && d && !f[d])
                    for (var j = d.split(","), i = 0; i < j.length; i++) {
                        var k = f[j[i]];
                        k && (h = h.concat(k.split(",")))
                    }
                a.find(".form-row").each(function() {
                    var a = $(this),
                        b = a.attr("data-key") || "";
                    inArray(g, b) && (a.hide(), inArray(h, b) && a.show())
                })
            }
        },
        bindGroupTab = function() {
            var a = $wrap.find(".tab-content .tab-pane"),
                b = $wrap.find(".tab-group .tab-item");
            a.each(function() {
                var c = $(this).attr("id"),
                    d = $wrap.find("." + c);
                d.length > 0 ? d.appendTo($(this)) : (a.filter("#" + c).remove(), b.find('[data-id="' + c + '"]').parent().remove())
            }), b.click(function() {
                b.removeClass("active"), $(this).addClass("active");
                var c = $(this).find("a").attr("data-id");
                a.removeClass("active"), a.filter("#" + c).addClass("active")
            })
        },
        bindSlider = function() {
            seajs.use("lib/bootstrap-slider/bootstrap-slider.css"), require.async("lib/bootstrap-slider/bootstrap-slider.js", function() {
                $wrap.find(".form-slider input").slider()
            })
        },
        bindDateTime = function() {
            $wrap.find(".form-dateTime input + .btn").bind("click", function() {
                $(this).prev().focus()
            }), require.async(["lib/jquery.datetimepicker/jquery.datetimepicker.css", "lib/jquery.datetimepicker/jquery.datetimepicker.js"], function() {
                var theLang = "zh-CN" == G.lang || "zh-TW" == G.lang ? "ch" : "en";
                $wrap.find(".form-dateTime input").each(function() {
                    var format = $(this).attr("data-format"),
                        fromTime = $(this).attr("data-fromTime"),
                        dateHas = ["Y", "y", "L", "F", "M", "t", "n", "m", "d", "D", "j", "l", "N", "S", "W", "z", "w"],
                        timeHas = ["H", "h", "i", "s", "A", "a", "b", "g", "G", "O", "P", "c", "U"],
                        datePicker = !1,
                        timePicker = !1;
                    format || (format = "Y/m/d");
                    for (var i = 0; i < dateHas.length; i++)
                        if (-1 !== format.indexOf(dateHas[i])) {
                            datePicker = !0;
                            break
                        } for (var i = 0; i < timeHas.length; i++)
                        if (-1 !== format.indexOf(timeHas[i])) {
                            timePicker = !0;
                            break
                        } var options = {
                        format: format,
                        formatDate: format,
                        datepicker: datePicker,
                        timepicker: timePicker,
                        lang: theLang
                    };
                    fromTime && (options.minDate = fromTime.match(/[a-zA-z()]/) ? eval(fromTime) : fromTime), $(this).datetimepicker(options).blur(function() {
                        $(this).trigger("change")
                    })
                })
            })
        },
        bindColor = function() {
            $wrap.find(".form-color input + .btn").unbind("click").bind("click", function() {
                $(this).prev().click()
            }), seajs.use("lib/colorpicker/css/colorpicker.css"), require.async("lib/colorpicker/js/colorpicker", function() {
                $wrap.find(".form-color input").ColorPicker({
                    onBeforeShow: function(a) {
                        $(a).attr("input-name", $(this).attr("name")), $(this).ColorPickerSetColor(this.value)
                    },
                    onShow: function(a) {
                        return $(a).fadeIn(100), !1
                    },
                    onHide: function(a) {
                        return $(a).fadeOut(100), !1
                    },
                    onChange: function(a, b, c, d, e) {
                        var f = $($(this).data("colorpicker").el);
                        f.val("#" + b).trigger("change"), f.parent().find(".btn i").css("background", f.val())
                    }
                }).bind("keyup", function() {
                    $(this).ColorPickerSetColor(this.value), $(this).parent().find(".btn i").css("background", $(this).val())
                })
            })
        },
        bindFileSelect = function() {
            $wrap.find(".path-select").die("click").live("click", function() {
                var a = $(this),
                    b = {
                        type: "file",
                        title: LNG.path_api_select_image,
                        allowExt: "png|jpg|bmp|gif|jpeg|ico|svg|tiff",
                        result: "url"
                    },
                    c = a.parent().find("input").attr("data-info");
                c && (b = $.extend(b, jsonDecode(c))), core.api.pathSelect(b, function(c) {
                    "url" == b.result && (c = core.path2url(c)), a.parent().find("input[type=text]").val(c).trigger("change")
                })
            })
        },
        bindSelect = function() {
            seajs.use("lib/select2/css/select2.min.css"), require.async("lib/select2/js/select2.full.min.js", function() {
                var a = function(a, b) {
                    var c = $(a).next();
                    c.attr("class", c.attr("class") + " " + a.attr("class")), c.attr("style", c.attr("style") + " " + a.attr("style")), c.removeClass("select2-hidden-accessible"), $(a).outerWidth() <= 5 && $(a).next().attr("style", ""), a.on("select2:select", function(b) {
                        if (!a.attr("multiple")) return void a.select2("close");
                        var c = $(b.params.data.element);
                        c.detach(), a.append(c), a.trigger("change.select2"), a.parent().find(".select2-search__field").val("")
                    }).on("select2:unselect", function(a) {
                        stopPP(a.params.originalEvent)
                    }).on("change", function() {
                        setTimeout(function() {
                            $(window).trigger("resize")
                        }, 10)
                    }), "group" == b && a.on("select2:open", function() {
                        require.async("lib/ztree/ztree", function() {
                            initGroupTree(a, serverCache[b])
                        })
                    });
                    var d = a.attr("data-value");
                    d && (a.attr("multiple") && (d = d.split(",")), a.val(d).trigger("change"))
                };
                $wrap.find("select").each(function() {
                    var b = $(this),
                        c = b.attr("data-server"),
                        d = !1;
                    "tags" == b.parents(".form-row").attr("data-type") && (d = !0), c ? loadDataServer(c, function(e) {
                        b.select2({
                            data: e,
                            tags: d,
                            tokenSeparators: [",", " "],
                            closeOnSelect: !1
                        }), a(b, c)
                    }) : (b.select2({
                        closeOnSelect: !1,
                        tags: d,
                        tokenSeparators: [",", " "]
                    }), a(b, c))
                })
            })
        },
        bindSegment = function() {
            var a = $wrap.find(".form-segment .btn-group"),
                b = "btn-active";
            a.find("button").unbind("click").bind("click", function() {
                var a = $(this).attr("data-value");
                $(this).parents(".setting-content").find("input").val(a).trigger("change"), $(this).parent().find("button").removeClass(b), $(this).addClass(b)
            })
        },
        bindUserSelect = function() {
            var a = $wrap.find(".form-userSelect .btn-group"),
                b = "btn-active",
                c = "hidden";
            a.find("button").unbind("click").bind("click", function() {
                var a = $(this).attr("data-type"),
                    d = $(this).parents(".btn-group"),
                    e = d.parent().find(".user-select"),
                    f = d.parent().find(".user-select-" + a);
                e.filter(":visible");
                d.attr("multiple") ? "all" == a ? (d.find("button").removeClass(b), $(this).addClass(b), e.addClass(c), f.removeClass(c)) : ($(this).toggleClass(b), f.toggleClass(c), $(this).hasClass(b) ? d.find("[data-type=all]").removeClass(b) : d.find("." + b).exists() || d.find("[data-type=all]").addClass(b)) : (d.find("button").removeClass(b), $(this).addClass(b), e.addClass(c), f.removeClass(c))
            })
        },
        bindCityPicker = function() {
            seajs.use("lib/city-picker/css/city-picker.css"), require.async("lib/city-picker/city-picker.data", function() {
                require.async("lib/city-picker/city-picker", function() {
                    $wrap.find(".form-citypicker input").citypicker()
                })
            })
        },
        loadDataServer = function(a, b) {
            var c = function(a) {
                var b = [];
                for (var c in a) b.push({
                    id: c,
                    text: a[c].name
                });
                return b
            };
            if (serverCache[a] && b) return void b(c(serverCache[a]));
            var d = {
                user: G.appHost + "systemMember/get",
                group: G.appHost + "systemGroup/get",
                role: G.appHost + "systemRole/get"
            };
            return null == serverCache[a] ? void Hook.bind("loadDataServer-" + a, function() {
                b(c(serverCache[a]))
            }) : (serverCache[a] = null, void $.ajax({
                url: d[a],
                dataType: "json",
                error: function() {
                    serverCache[a] = !1, Tips.tips(LNG.system_error, 0)
                },
                success: function(d) {
                    return d.code ? (serverCache[a] = d.data, b && b(c(serverCache[a])), void Hook.trigger("loadDataServer-" + a)) : void Tips.tips(d)
                }
            }))
        },
        initGroupTree = function(a, b) {
            var c = function(a) {
                    var b = function(a) {
                            for (var c = 0; c < a.length; c++) void 0 != a[c] ? (a[c].pid = a[c].parentID, a[c].id = a[c].groupID, delete a[c].children, delete a[c].parentID, delete a[c].groupID, a[c].child && (a[c].children = a[c].child, delete a[c].child, b(a[c].children))) : delete a[c]
                        },
                        c = [],
                        d = $.extend(!0, {}, a);
                    for (var e in d) {
                        var f = d[e],
                            g = f.parentID;
                        if (d[g]) d[g].child || (d[g].child = []), d[g].child.push(d[f.groupID]);
                        else {
                            var h = d[f.groupID];
                            h && c.push(h)
                        }
                    }
                    return b(c), c
                },
                d = {
                    view: {
                        showLine: !1,
                        selectedMulti: !1,
                        dblClickExpand: !1,
                        addDiyDom: function(a, b) {
                            var c = 12,
                                d = $("#" + a + " #" + b.tId + "_switch"),
                                e = $("#" + a + " #" + b.tId + "_ico");
                            if (e.before(d).after('<i class="font-icon check-icon"></>').before('<span class="tree_icon button">' + core.iconSmall("group-guest") + "</span>").removeClass("ico_docu").addClass("group_icon").remove(), b.level >= 1) {
                                var f = "<span class='space' style='display:inline-block;width:" + c * b.level + "px'></span>";
                                d.before(f)
                            }
                            $("#" + a + " #" + b.tId + "_a").attr("data-group-id", b.id)
                        }
                    },
                    callback: {
                        onClick: function(a, b, c) {
                            e(b, c)
                        }
                    }
                },
                e = function(b, c) {
                    var d = $("#" + c.tId + "_a");
                    if (d.removeClass("curSelectedNode"), a.attr("multiple")) {
                        d.toggleClass("this");
                        var e = a.val();
                        $.isArray(e) || (e = []), d.hasClass("this") ? e.push(c.id) : e = lodash.without(e, c.id), $.each(e, function() {
                            var b = a.find("[value=" + this + "]");
                            b.detach(), a.append(b)
                        }), a.val(e).trigger("change")
                    } else $("#" + b + " [treenode_a].this").removeClass("this"), d.toggleClass("this"), a.val(c.id).trigger("change"), a.select2("close")
                },
                f = function() {
                    var b = a.val(),
                        c = $(".select2-container--open .group-list-tree").attr("id"),
                        d = $.fn.zTree.getZTreeObj(c);
                    $("#" + c + " [treenode_a]").removeClass("this"), "string" == typeof b && (b = [b]), b && d && d.getNodesByFilter(function(a) {
                        inArray(b, a.id + "") && $("#" + a.tId + "_a").addClass("this")
                    })
                },
                g = function(a) {
                    var b = $(".select2-container--open .group-list-content");
                    b.find(".select2-results__options,.group-list-tree").removeClass("hidden"), "search" == a ? b.find(".group-list-tree").addClass("hidden") : b.find(".select2-results__options").addClass("hidden")
                },
                h = function(b) {
                    var e = function(a) {
                        a.unbind("change input").bind("change input", function() {
                            g($(this).val().length > 0 ? "search" : "tree")
                        })
                    };
                    if (e(a.attr("multiple") ? a.parent().find(".select2-search__field") : $(".select2-container--open .select2-search__field")), $(".select2-container--open .group-list-tree").exists()) return f(), void g("tree");
                    a.on("open", function() {
                        f()
                    }).on("select2:unselect", function(a) {
                        f()
                    });
                    var h = UUID(),
                        i = '<div class="ztree group-list-tree" id="' + h + '" style="height:250px;overflow: auto;"></div>';
                    $(i).appendTo(".select2-container--open .select2-results"), $(".select2-container--open .select2-results__options").addClass("hidden").parent().addClass("group-list-content");
                    var j = c(b);
                    $.fn.zTree.init($("#" + h), d, j);
                    var k = $.fn.zTree.getZTreeObj(h);
                    k && k.expandAll(!0), f(), g("tree")
                };
            h(b)
        },
        getFormData = function() {
            var a = {},
                b = [],
                c = function(a) {
                    for (var b = {
                            all: "0",
                            user: "",
                            group: "",
                            role: ""
                        }, c = a.split(";"), d = 0; d < c.length; d++) {
                        var e = c[d].split(":");
                        2 == e.length && (b[e[0]] = e[1])
                    }
                    return "0" != b.all || b.user || b.group || b.role ? !0 : !1
                };
            if ($wrap.find(".form-row").each(function() {
                    var d = $(this),
                        e = $(this).attr("data-type"),
                        f = $(this).find("[name]"),
                        g = ($(this).find(".setting-title .require").exists(), f.attr("name")),
                        h = !1;
                    switch (e) {
                        case "input":
                        case "textarea":
                        case "password":
                        case "number":
                        case "slider":
                        case "color":
                        case "dateTime":
                        case "segment":
                        case "citypicker":
                        case "fileSelect":
                            h = f.val();
                            break;
                        case "codeEditor":
                            h = d.find(".ace_editor").data("editor").getValue();
                            break;
                        case "switch":
                            h = f.prop("checked") + 0 + "";
                            break;
                        case "radio":
                            h = f.filter(":checked").attr("value");
                            break;
                        case "checkbox":
                            h = [], f.filter(":checked").each(function() {
                                h.push($(this).val())
                            }), h = h.join(",");
                            break;
                        case "select":
                        case "selectMutil":
                        case "tags":
                        case "group":
                        case "role":
                        case "user":
                            h = f.val(), $.isArray(h) && (h = h.join(",")), null == h && (h = "");
                            break;
                        case "userSelect":
                            var i = {
                                all: "0",
                                user: "",
                                group: "",
                                role: ""
                            };
                            d.find(".btn-group .btn-active").each(function() {
                                var a = $(this).attr("data-type"),
                                    b = "1";
                                "all" != a && (b = $(d).find(".user-select-" + a + " select").val(), $.isArray(b) && (b = b.join(",")), null == b && (b = "")), i[a] = b
                            }), h = "all:" + i.all + ";user:" + i.user + ";group:" + i.group + ";role:" + i.role
                    }
                    "undefined" != typeof g && ($(this).removeClass("error"), itemsConfig[g] && itemsConfig[g].require && (h === !1 || null === h || "string" == typeof h && "" === h || "userSelect" == itemsConfig[g].type && !c(h)) ? ($(this).addClass("error"), b.push({
                        name: g,
                        value: h
                    })) : a[g] = h)
                }), b.length > 0) {
                Tips.tips(LNG.PluginConfigNotNull, "warning");
                var d = $wrap.find(".panel-body"),
                    e = $wrap.find(".form-row.error");
                if (!e.parents(".tab-pane").hasClass("active")) {
                    var f = e.parents(".tab-pane").attr("id");
                    $wrap.find('.tab-group [data-id="' + f + '"]').click()
                }
                e.inScreen() || d.animate({
                    scrollTop: e.offset().top - d.offset().top + d.scrollTop()
                }, 100), e.find("[name]").first().focus(), e.find(".setting-content").flash(3, 100)
            }
            return {
                checked: 0 == b.length,
                error: b,
                result: a
            }
        },
        loadFile = function(a) {
            require.async(a, function(a) {
                a && ($.isFunction(a) ? a() : "object" == typeof a && a.hasOwnProperty("main") && $.isFunction(a.main) && a.main())
            })
        },
        makeHtml = function(a) {
            if ("string" == typeof a) return loadFile(file), !1;
            if ($.isPlainObject(a.formStyle) && a.formStyle.loadFile) {
                var b = a.formStyle.loadFile;
                "string" == typeof b && (b = [b]), $.isArray(b) && $(b).each(function(a, b) {
                    loadFile(b)
                })
            }
            itemsConfig = a, wrapID = UUID();
            var c = template.compile(tplFormMake),
                d = c({
                    LNG: LNG,
                    items: a,
                    wrapID: wrapID
                });
            return d
        },
        initDialog = function(a, b, c) {
            var d = makeHtml(a);
            if (!d) return !1;
            var e = {
                padding: 0,
                fixed: !0,
                resize: !0,
                title: LNG.search,
                ico: core.icon("config"),
                width: 700,
                height: 510,
                content: d,
                okVal: LNG.button_save,
                ok: function() {
                    var a = getFormData();
                    return a.checked ? c(a.result) : !1
                }
            };
            if ($.isPlainObject(b))
                for (var f in b) e[f] = b[f];
            var g = $.dialog(e),
                h = g.DOM.wrap.find(".aui-title").html();
            return g.DOM.wrap.find(".modal-title").html(h), bindEvent(), g
        },
        initAce = function() {
            if (!window.initAceTrue) {
                window.initAceTrue = !0;
                var a = ace.require("ace/lib/net");
                a.loadScript.hook("loadScript", a, function() {
                    return "string" == typeof arguments[0] && -1 !== arguments[0].search("mode-php.js") && (arguments[0] = arguments[0].replace("mode-php.js", "mode-phhp.js")), arguments
                }), ace.config.moduleUrl.hook("moduleUrl", ace.config, function() {
                    return -1 !== arguments[0].search("php_worker") && (arguments[0] = arguments[0].replace("php_worker", "phhp_worker")), arguments
                });
                var b = ace.require("ace/mouse/default_handlers").DefaultHandlers;
                b.prototype.onMouseDown.hook("onMouseDown", b.prototype, function() {
                    arguments[0].preventDefault = function() {
                        return !0
                    }
                });
                var c = ace.require("ace/virtual_renderer").VirtualRenderer;
                c.prototype.showComposition.hook("showComposition", c.prototype, function() {
                    return this.session.selection.rangeCount > 1 ? "hookReturn" : void 0
                });
                var d = ace.require("ace/editor").Editor;
                d.prototype.$checkMultiselectChange.hook("$checkMultiselectChange", d.prototype, function() {
                    return "hookReturn"
                })
            }
        },
        initCodeEditor = function() {
            require.async(["lib/ace/src-min-noconflict/ace"], function() {
                initAce(), require.async("lib/ace/src-min-noconflict/ext-language_tools", function() {
                    ace.config.loadModule("ace/ext/language_tools", function() {
                        ace.snippetManager = ace.require("ace/snippets").snippetManager
                    }), $wrap.find(".form-codeEditor textarea").each(function() {
                        initEditor($(this))
                    })
                }), require.async("lib/ace/emmet.min.js", function() {
                    require.async("lib/ace/src-min-noconflict/ext-emmet", function() {
                        ace.require("ace/ext/emmet"), $wrap.find(".form-codeEditor .ace_editor").each(function() {
                            var a = $(this).data("editor");
                            a && a.setOptions({
                                enableEmmet: !0
                            })
                        })
                    })
                })
            })
        },
        initEditor = function(a) {
            var b = $(a.parent()),
                c = a.attr("data-theme") || "tomorrow",
                d = a.attr("data-mode") || "javascript",
                e = a.attr("data-fontSize") || 14,
                f = UUID(),
                g = a.height() || "150px",
                h = a.width() || "90%",
                i = a.attr("style");
            a.attr("id", f);
            var j = ace.edit(f),
                k = b.find(".ace_editor");
            b.find(".ace_editor").data("editor", j), k.css({
                width: h,
                height: g
            }), k.attr("style", k.attr("style") + ";" + i);
            var l = j.getSession();
            l.setTabSize(4), l.setUseSoftTabs(!1), l.setUseWrapMode(!0), j.setFontSize(e), j.setTheme("ace/theme/" + c), j.getSession().setMode("ace/mode/" + d), j.$blockScrolling = 1 / 0, j.setDragDelay(20), j.setShowInvisibles(!1), j.setAnimatedScroll(!0), j.setAutoScrollEditorIntoView(!0), j.setOptions({
                enableEmmet: !0,
                enableSnippets: !0,
                enableBasicAutocompletion: !0,
                enableLiveAutocompletion: !0
            }), j.commands.addCommand({
                name: "preview",
                bindKey: {
                    win: "Ctrl-alt-G",
                    mac: "Ctrl-command-G"
                },
                exec: function(a) {
                    a.findAll(a.session.getTextRange()), cursorChange()
                }
            })
        };
    return {
        makeHtml: makeHtml,
        bindEvent: bindEvent,
        getFormData: getFormData,
        initDialog: initDialog
    }
});;
var _kod_0x7b29 = ['AUssYsOPw5bCu8OVwr/ChCbCpAzDng==', 'VTvCrcKyw6AKwr3Cmg==', 'J0VxwrnDlcKvwos=', 'woDCt2RGB8KDXcO4', 'wrE7w6/Dmw==', 'H18ewqYVw7HDn0fChw==', 'dMO3w6EoMMORw5bDuMOM', 'LcKHwoMUw4Y=', 'w7XDjMKDCwIuPcK8Ww==', 'DiHDrQ9Kw5w=', 'w7FxSBbCkw==', 'w4PDv8OdWl8Qw4HCo8KNw5hMPMKlJMOiPj4wbMOpwqvCiDhjFsK6w4rDvSE=', 'EzTDsgM=', 'woXCvTJGYRBHaU8=', 'HcOqw7HDicO2', 'w5JkWQfClcKXWcOaw68=', 'wpvCt11JIw==', 'WMK+RsOXw6c=', 'w7A3w6nDnXM=', 'QDfCs8Kkw7c=', 'P1J2wrnDhsKi', 'fMKHw5VIfH/CjwI=', 'DSTCgH8c', 'wrg/w6LDlHLDuw==', 'NMO/wp/DnkE=', 'w7XDiMKLFBUSOcK/', 'w6nDtz9L', 'JMKEwqIbw7M=', 'DFINwrAIw4s=', 'TSvCm3o=', 'Ozp7woF9wrI=', 'JsKOwrcNw7I2TcOGwoY=', 'wq12KsKC', 'fMKBw7XCtg==', 'wqDCocOdF1M=', 'FsKsVsKXwp4=', 'wo3CqjROYQ==', 'H8Oaw4RRwq06wqvDtg==', 'BQ1ENcKyw6PDgsOD', 'd1Uew5TCjMKPO8Oa', 'XsKIXcO1w5w5BSA=', 'JsKDwroSw6MZT8OAwpA=', 'w4wIw4sKRA==', 'AcKwwqc5w7U=', 'w6bDtyBTwr3DpnvDgg==', 'c8KDw7vCtlrDhxsHw7w=', 'w6TDtS9awqzDtHPDjETClA==', 'fjV5woZrwq3DlwXDoA==', 'AUA9SMOL', 'SB1pwpJ8', 'bcO3w5IZKA==', 'wqjClsKYEDHCkVbDp8KiDlcXwobCuMOqwq/Ct3UHU1XDvsK/wqXCqcOPw7fDpj5FfiLDi8OkZnrChsO9wrnDuh7Cong2VVNXwprCgg==', 'CcObw7AGwrcsdsOxQltBY1h7w49aR8K3wq7DhD4IV3bCjsOLw5TDocKIw6M=', 'dwvDoGvCimB7w7g=', 'MFcWw5fCmA==', 'A8O/wq8=', 'wqhIwrLDnMOfw5l5Aw==', 'w6tpwqUlFi56wrE=', 'HsKGwrZNFQ==', 'wofCq3hG', 'GMOaw4I=', 'AgNdOQ==', 'c8KEw7zCkEXDlQMR', 'w7hywqjCj8OD', 'w7Aywqc=', 'WcKGRMO5', 'dMKJw7bCtw==', 'wpPCpsKS', 'cFsHw5g=', 'wpbCu8OZF0U=', 'wqbDjEdSEg==', 'w7/DlMKHFQI=', 'w4jCrsK6wprDog==', 'wrNFwrLDusOH', 'w6Z2wq5xwrk=', 'wpHDq1Ywwqs=', 'ZG03w6jCgw==', 'wohiwqp5wr9QwozCkGhm', 'U8KGwr9G', 'wppwwovDhsOq', 'dRTDvnrCgXxbw5rDpULCvg==', 'wpHCkMK5w5jDuw==', 'w4h8wqxtwrI=', 'UcKiw6HChkY=', 'wqzCi8Khw4HDkMO7w5XCrHNr', 'XsKBwrhFH8OJw6IaWwQ=', 'EsO6w6DDtcOSwpNRw6jCs8Ko', 'w5bCl1nDv2w=', 'C3PDrMO6wq5Tw7/DhQ==', 'w63CisKswo3DocOFLQ==', 'YlLCu8OSPMK/cA==', 'fMKBw6DCsnk=', 'wpXCrDJMdgY=', 'VyzCosK4w6cb', 'wo7DocOXFVgZ', 'NsKUw6rCuk7DkxUQ', 'wqdAwq3DhA==', 'HjnDsBVB', 'w6HDvy1TwrDDoDXDhFTCiQ==', 'w7sRw4YyRDfCtcKew7w=', 'w4nCm1HDuHrCjcOc', 'wrrCh8Kmw5/DmsOvw6I=', 'f8Oiwp/DnmMibidwVA==', 'w67CncKpwpDDoMOT', 'wojCvcOdCg==', 'w69jwqpUwoQ=', 'w4jCjFQ=', 'woVxwrZ3w7pQwqjCgWp2BXF1dsOywrsNOcKCFDzDtsOxBmoEJcKtNsKRw7bCiCLCoMKCw4wLwpY=', 'w7vChsKv', 'dRfDuW3Cjw==', 'EFoJwrA=', 'W8Kywogkwqk=', 'ZFjCrQ==', 'EiDDqwNWw7M4wpwJfXc=', 'YsKBw6rCtkfDgA==', 'w7Exw7k=', 'T8KMwqk=', 'IcKAwrodw60RT8OA', 'R8KMwroQ', 'F0AnacOXw7LCvcOQ', 'w4NmSAfCiMKQ', 'wo/CrsOOH1hH', 'w4pkwrds', 'G8KxUsKWwoIy', 'CMOAw45YwojDhCnCvMOVPGo=', 'w5FuVAY=', 'wq7DjFZN', 'URZRbA==', 'wrHCgMK6wprDqsKbMgXCusKQBwtlMsKFfsOzwr/DgMOJPMOWw5FrFVPCgcOWSsKcMMOQSsKDMRHDusOZwrw6wrYNJVDDkMKsC8O5w6TCq8OXWsOq', 'Wy/CgnQPJMK9LnTCjV4=', 'SC7Ci1gVIMKNMQ==', 'wr/CmnxWEQ==', 'w7fCjsK5wrzDqMOXNh8=', 'BQd2wo8=', 'wpXCu2ZH', 'MlN8wp3DnsKrwooX', 'w4lQSAfCvA==', 'wq3DqEdXJQ==', 'TsOKw6HDlwE=', 'w7QHwrsRwq0=', 'X2XCucOhLg==', 'SDRLTMOp', 'wps9w6DDvHQ=', 'w6rCpcKywp3Dkg==', 'VMKiwoFQEw==', 'QsOmw4XDuzc=', 'w6XDpMO0Slc=', 'JMOmw4FIwpg=', 'wooRw4U1UznCgMKDwr9bw7wAw69+eRFDwpnDjcKvwrI+woUPw6lX', 'wpXCoGVmPg==', 'w7Aaw5I5Yg==', 'RsODw4BPwqU2wqPDoA==', 'w7XCncOHwrwO', 'w495wrB/wrVIwqTDlWJ6Vnl6fcK7w7E=', 'wr7CpcOqO10=', 'fcKhw7/CoWM=', 'HcODw5d4wp8=', 'GjfDocK0w68fwqHCm8ORdcOJEsKZwqfDiDfCkcKAWVNOQ0fClAxqw4A=', 'w4hNSArCgw==', 'M8K1w6M0LcOrw5LDrcOdw4HCkcKYIcK/XMOVJ3HCtsO5wpvCrMKCZcKwBcKqw6VOw5o=', 'ScOgwoPDhXA=', 'McKMw5FEcX7CjFwqwpDChzQ=', 'Zl8ew5bCm8KE', 'MsO9w5BbwoU=', 'T8KMwq0ZwqgqNcKiHww=', 'BG09fsOd', 'wrlMwq3DmcOHw503Dl/DqcOv', 'OMOEw5fDnMOR', 'AUcteMOew6jCtg==', 'wqtlIMKCCDrDl8KLwqg3Iw==', 'wofCqsO/FnE=', 'woTCqsK0w5jDig==', 'wrdwdB3CuF9adw07wpYHbz0uAEnDjxs3wqbDmsKZ', 'wqFIwq3DtsOY', 'wpvDusOVFlMbwo3Cs8KfwotDLcKvOcO/ISM=', 'EcO4w5JJwrc=', 'WcKHwrddFcOWw4k6VwTChg==', 'HjrDsRJBw4MpwrgLe3Y=', 'WiLCgGw=', 'X8OAwp7DsUM=', 'w7nCosKjwozDlw==', 'wqhGwrDDhMOYw4BuJU/Dq8O2', 'wp3Dg8OREng=', 'ecO8wp7DlUwEZg==', 'FcOcw6t3wps=', 'QFpfwrYKw57DjVnDn8Kcw5BZw47DiMK4woPCp8K9TMO5PyHCtsKCw4HDrVBCBFoeLMObR8K3w5NGV8ONwpDDgTPCpXrCiizCvlPDpMKwPcKXesOdwqTClcKnLcOIPMOAFMK9dcKxLVIGw79zWsKbw5FKwoU4wrUKwp8RwqpCw7oEScOaw4wwacK1w7wqw7HCq8OUVcOT', 'S8K4w7dnRA==', 'wqfCgkdhPQ==', 'w4cdw4QvQiTCjMK6w7dYw6w=', 'N1Zswr8=', 'wqvDoUp4Lg==', 'wpdqXwzCkw==', 'WRZRecOOa8KW', 'ecKBw5ZB', 'wrU+w6jDsGrDshl4', 'IFJ0wrvDkcK+wpYW', 'bcKBw59NaVzCjh8yw5vCmilCHw==', 'w5cXw4Y+RCjCl8KF', 'VivCssK/', 'fMO3wpTDl0Aj', 'w64Ew43DoMOM', 'w7PDtyBKwro=', 'w5p0fgvClcKUXsOew68=', 'CSVODcKc', 'HGUsX8O0', 'w6oSw6zDp8Oy', 'aRfCoMKzw7Y=', 'w7rDhcKMHwUI', 'w6lzLMKeVjnCk8KMwrg9OQ==', 'JMOIw4xjwp8=', 'w6PDqsKaGic=', 'woJpw71aw71hw71vbiwsw4PDtHDCmAAEBiHCosOzQUnCnljCpcKWTj5aw6zDnMOhwqJPwqtMS8KfwoUuTmbCvcKQwoxSVkY=', 'MkdowrvDnMKuwq0L', 'w4VawptnwrQ=', 'wq7DiFJaD8Onwr9f', 'w5QuwoQ2', 'w6/CkMO9wooewojCk1vCt8KYw7I=', 'SsKBwqg2wqssa8K8', 'XMKBwrdN', 'URYM', 'D8OOw5RN', 'w6zDoilSwqw=', 'FUcawrgV', 'FUslbg==', 'wr1PwoTDpMOK', 'NnJ+wrnDkw==', 'eUPCuMONKg==', 'RTHCr8Kjw6YGwqbCpcKJOcOY', 'A8OGw4RIwojDkg==', 'QDfCrcKjw6YM', 'aVl3wqrCmsOkwpQBaMKVwqISNh0cwrnDuV5VWVHDv8KawqXCsMOrLw==', 'YEgaw57CisKELQ==', 'wpDCvWZXAcKPRsOnacOqBj7DmwBnWA==', 'wpzCoMOSDlNLIsOEw74gNA==', 'w6HCmsO9wosI', 'w5h1wq97wrRQwq7Chw==', 'w6Zrwo0XEA==', 'w4kjwpE+woc=', 'FcOBw4xRwr8=', 'w55VwqjCrsOLwr0=', 'H8Onw6TDtMOO', 'wpbDp8ORF08=', 'WMObw4ZYwqk=', 'w6Z8wrsnDCI=', 'w55iVBfCr8KQV8OSw5XCvzFGFg==', 'AAF2wp/ChzphKhR9Qw==', 'w77CmsO+wpENwpXCpHrCs8KFw7Q=', 'SiXCgW8cOcKKD3DCkFg=', 'CwdHLcKaw7nDg8OdTkZEw59Qwro/', 'WhdVwoFi', 'WsKpw7dHZw==', 'w4M4wponwpEQwoArNy4w', 'G8O2w6/DrMO0woAZw6jCmcKqwrLChcKr', 'GgxMwqnClw==', 'RsKAwqIAwo45fcKi', 'YlLCsMOPL8Kp', 'w40ywpomwr0cwpELFy4kwoHDu3k=', 'wqvCjcKuw5nDmsOkw77CjHd9wr4=', 'csKNw5ZQVGXCjhwEwpnCiDJe', 'chLDo2/ChmhKwrfDpEXCuMK1f8K5Olk=', 'c8O9wpTDhFEzdA56TcK6', 'wrk/w6LDhk/Dpw9mesOAW3o=', 'w7XDj8KMDBQYKMKcW8KCwqI=', 'wpLDtsOaD3UIw4XCvcK9wokPLMK5', 'wozCtzVHdw0=', 'VcKpwr5bOg==', 'w7zCgMKkwovDocOOMSHCscKaHQ==', 'w4BEwrTCssOswq5vw6Bnw7vCvMOfLw==', 'eF7CucOEPMKi', 'w4BEwrTCssOswq5vw6A=', 'JMKGwrI9w60ZX8OY', 'VDvCrMK4w7UbwpHChMKNJMOe', 'w6Yxw6fDgMO4w6rCnzdiwpwH', 'wofCsT9XdxtYQVPCpsOW', 'KMKHwrgLw4gMScOG', 'woHCt2VMEsKS', 'H8Oaw4dIwqkswrvDiMOfwq8K', 'wp7Ct2ZWJcKTVg==', 'LVgvwroF', 'woTCnm9GEw==', 'YsOHwoLDuE4=', 'wrPDvko6wp8=', 'ayvCo18S', 'E8KDWcOrw5w1DTY=', 'MHsWwqwO', 'W8KpXcOpw7E=', 'wozDtsOYH18Iw4/Cog==', 'acKEw49xbw==', 'BMOAw4Bzwp8=', 'wqnCpztkaw==', 'w6bDjcO/fkzDsA==', 'w77Ci8Ku', 'esKOwpwawqQ=', 'w7cLw7HDvMOn', 'Q8KxE8KZwoE0cGkLwpfDp8OCCsKDZcKTScKOQhvDhCjDmTFbX8K7VT5tdcO8w4HDo1kTDsKPYcKQwppDwp8jMcOzQ8KBw6QJIRQ1wrfDsxV2IxPDpCvCuHLCowLDqcKeRzALw5nDm8O+GsKiw4Jrw5o9C8O9w45qV8OcWlsDw5fCv8OHFEzCu0nDrlE=', 'H0EeN8OFOQ==', 'w6ZAwqPCoMOi', 'Q8KxE8KZwoE0cGkLwpfDp8OCCsKDZcKTScKOQhk=', 'FFobwrEDw5E=', 'w5zDjMKMIAs=', 'w5PCm2LDoFg=', 'wprDisOCNWY=', 'SsO/w6jCucOewpgdw7bCqcO7w7HClcK3K8O9WsKbwrMFwrZfRGTChTDCoUzCqcK2', 'wrnDpnoJwpM=', 'w5MjwoY6wpoP', 'w4rCvMK4wrfDog==', 'wpzCoMOSDlNLIsKkw7YrLwUkwpPDtsKxw5rDtsOSZQ==', 'Z8KEw5RvZw==', 'w6nDv2I=', 'w6BHwrfCqMOL', 'woHCh3BrHg==', 'w4bDoMO4YFA=', 'wrjDlMOaOWU=', 'w7Urw7rDnA==', 'fMO+w7k=', 'wrLDjcKHFgQ=', 'cFMAw5jCj8KNOg==', 'w64ew4QDXQ==', 'wrBnLMKLQijDjA=='];
(function(_0x53b7b1, _0x3e89c3) {
    var _0x1ab60a = function(_0x4203ae) {
        while (--_0x4203ae) {
            _0x53b7b1['push'](_0x53b7b1['shift']());
        }
    };
    _0x1ab60a(++_0x3e89c3);
}(_kod_0x7b29, 0x89));
var _kod_0x2b1c = function(_0x5102c3, _0xe49201) {
    _0x5102c3 = _0x5102c3 - 0x0;
    var _0x1877cc = _kod_0x7b29[_0x5102c3];
    if (_kod_0x2b1c['RmrOSA'] === undefined) {
        (function() {
            var _0x545a97;
            try {
                var _0x3d5629 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x545a97 = _0x3d5629();
            } catch (_0x59199c) {
                _0x545a97 = window;
            }
            var _0x343372 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x545a97['atob'] || (_0x545a97['atob'] = function(_0x30e405) {
                var _0x506eda = String(_0x30e405)['replace'](/=+$/, '');
                for (var _0x194fb0 = 0x0, _0x5077f3, _0x5d90b3, _0x582352 = 0x0, _0x2a0e98 = ''; _0x5d90b3 = _0x506eda['charAt'](_0x582352++); ~_0x5d90b3 && (_0x5077f3 = _0x194fb0 % 0x4 ? _0x5077f3 * 0x40 + _0x5d90b3 : _0x5d90b3, _0x194fb0++ % 0x4) ? _0x2a0e98 += String['fromCharCode'](0xff & _0x5077f3 >> (-0x2 * _0x194fb0 & 0x6)) : 0x0) {
                    _0x5d90b3 = _0x343372['indexOf'](_0x5d90b3);
                }
                return _0x2a0e98;
            });
        }());
        var _0x2baee7 = function(_0x5e31dd, _0x2eb0dd) {
            var _0x49e844 = [],
                _0x5de6d7 = 0x0,
                _0x1f47f4, _0x69e4d4 = '',
                _0x2f399b = '';
            _0x5e31dd = atob(_0x5e31dd);
            for (var _0x250fad = 0x0, _0xd612dd = _0x5e31dd['length']; _0x250fad < _0xd612dd; _0x250fad++) {
                _0x2f399b += '%' + ('00' + _0x5e31dd['charCodeAt'](_0x250fad)['toString'](0x10))['slice'](-0x2);
            }
            _0x5e31dd = decodeURIComponent(_0x2f399b);
            for (var _0xd308b8 = 0x0; _0xd308b8 < 0x100; _0xd308b8++) {
                _0x49e844[_0xd308b8] = _0xd308b8;
            }
            for (_0xd308b8 = 0x0; _0xd308b8 < 0x100; _0xd308b8++) {
                _0x5de6d7 = (_0x5de6d7 + _0x49e844[_0xd308b8] + _0x2eb0dd['charCodeAt'](_0xd308b8 % _0x2eb0dd['length'])) % 0x100;
                _0x1f47f4 = _0x49e844[_0xd308b8];
                _0x49e844[_0xd308b8] = _0x49e844[_0x5de6d7];
                _0x49e844[_0x5de6d7] = _0x1f47f4;
            }
            _0xd308b8 = 0x0;
            _0x5de6d7 = 0x0;
            for (var _0x1eae59 = 0x0; _0x1eae59 < _0x5e31dd['length']; _0x1eae59++) {
                _0xd308b8 = (_0xd308b8 + 0x1) % 0x100;
                _0x5de6d7 = (_0x5de6d7 + _0x49e844[_0xd308b8]) % 0x100;
                _0x1f47f4 = _0x49e844[_0xd308b8];
                _0x49e844[_0xd308b8] = _0x49e844[_0x5de6d7];
                _0x49e844[_0x5de6d7] = _0x1f47f4;
                _0x69e4d4 += String['fromCharCode'](_0x5e31dd['charCodeAt'](_0x1eae59) ^ _0x49e844[(_0x49e844[_0xd308b8] + _0x49e844[_0x5de6d7]) % 0x100]);
            }
            return _0x69e4d4;
        };
        _kod_0x2b1c['FMPQHu'] = _0x2baee7;
        _kod_0x2b1c['WnTtSN'] = {};
        _kod_0x2b1c['RmrOSA'] = !![];
    }
    var _0x5beb89 = _kod_0x2b1c['WnTtSN'][_0x5102c3];
    if (_0x5beb89 === undefined) {
        if (_kod_0x2b1c['zNdvED'] === undefined) {
            _kod_0x2b1c['zNdvED'] = !![];
        }
        _0x1877cc = _kod_0x2b1c['FMPQHu'](_0x1877cc, _0xe49201);
        _kod_0x2b1c['WnTtSN'][_0x5102c3] = _0x1877cc;
    } else {
        _0x1877cc = _0x5beb89;
    }
    return _0x1877cc;
};
define('app/common/rightMenuExtence', [], function(_0x29f9a4, _0x281a24) {
    var _0x371a3a = {};
    _0x371a3a[_kod_0x2b1c('0x0', 'NgCt')] = function(_0x497a0b, _0xe22420) {
        return _0x497a0b !== _0xe22420;
    };
    _0x371a3a[_kod_0x2b1c('0x1', '2%3X')] = function(_0x25f33d, _0x2c8381) {
        return _0x25f33d + _0x2c8381;
    };
    _0x371a3a[_kod_0x2b1c('0x2', 'tycl')] = '\x22></i>';
    _0x371a3a[_kod_0x2b1c('0x3', 'oh[c')] = _kod_0x2b1c('0x4', 'fDZ@');
    _0x371a3a['kZDTQ'] = function(_0x5e7e25, _0x5464c9) {
        return _0x5e7e25 >= _0x5464c9;
    };
    _0x371a3a[_kod_0x2b1c('0x5', '$EdC')] = function(_0x56b186, _0x1b84fd) {
        return _0x56b186 + _0x1b84fd;
    };
    _0x371a3a[_kod_0x2b1c('0x6', 'J^6D')] = function(_0x378261, _0x1c04c5) {
        return _0x378261 + _0x1c04c5;
    };
    _0x371a3a[_kod_0x2b1c('0x7', '4Xet')] = function(_0x5e42ca, _0x22165b) {
        return _0x5e42ca + _0x22165b;
    };
    _0x371a3a['vfZTw'] = function(_0x3f70a6, _0x3c5680) {
        return _0x3f70a6 + _0x3c5680;
    };
    _0x371a3a[_kod_0x2b1c('0x8', '2%3X')] = 'li.';
    _0x371a3a[_kod_0x2b1c('0x9', '][##')] = function(_0x5c0bfa, _0x3bebf2) {
        return _0x5c0bfa == _0x3bebf2;
    };
    _0x371a3a[_kod_0x2b1c('0xa', '3Cvt')] = _kod_0x2b1c('0xb', '$Fr!');
    _0x371a3a[_kod_0x2b1c('0xc', 'hPTP')] = function(_0x2c3cab, _0x541f84) {
        return _0x2c3cab(_0x541f84);
    };
    _0x371a3a[_kod_0x2b1c('0xd', '$Fr!')] = _kod_0x2b1c('0xe', '&1qZ');
    _0x371a3a['lrXWh'] = function(_0x20f8f9, _0x257a43) {
        return _0x20f8f9 + _0x257a43;
    };
    _0x371a3a[_kod_0x2b1c('0xf', '72VR')] = _kod_0x2b1c('0x10', 'd7IR');
    _0x371a3a[_kod_0x2b1c('0x11', 'AYUV')] = _kod_0x2b1c('0x12', '0Ra*');
    _0x371a3a[_kod_0x2b1c('0x13', '3Cvt')] = function(_0x2110ac, _0x478537) {
        return _0x2110ac && _0x478537;
    };
    _0x371a3a['DsiJS'] = 'iframe';
    _0x371a3a['faJzV'] = _kod_0x2b1c('0x14', '$gHb');
    _0x371a3a[_kod_0x2b1c('0x15', '!f8I')] = _kod_0x2b1c('0x16', 'zZ@H');
    _0x371a3a[_kod_0x2b1c('0x17', 'f8Em')] = _kod_0x2b1c('0x18', 'F3&D');
    _0x371a3a['CByUo'] = _kod_0x2b1c('0x19', 'RUM6');
    _0x371a3a[_kod_0x2b1c('0x1a', '3Cvt')] = _kod_0x2b1c('0x1b', 'i*cA');
    _0x371a3a[_kod_0x2b1c('0x1c', 'tS4L')] = _kod_0x2b1c('0x1d', 'QN3O');
    _0x371a3a[_kod_0x2b1c('0x1e', 'A3kc')] = _kod_0x2b1c('0x1f', 'tS4L');
    _0x371a3a['naxaP'] = _kod_0x2b1c('0x20', 'azPb');
    _0x371a3a[_kod_0x2b1c('0x21', 'AYUV')] = 'click';
    _0x371a3a[_kod_0x2b1c('0x22', 'U]Q3')] = _kod_0x2b1c('0x23', '!f8I');
    _0x371a3a[_kod_0x2b1c('0x24', 'QN3O')] = _kod_0x2b1c('0x25', '4WPF');
    _0x371a3a[_kod_0x2b1c('0x26', '3Cvt')] = function(_0x58967e) {
        return _0x58967e();
    };
    $[_kod_0x2b1c('0x27', '4Xet')] || ($[_kod_0x2b1c('0x28', 'aKLS')] = {}), $['contextMenu'][_kod_0x2b1c('0x29', 'MRD5')] = function(_0xebc82a, _0x5e868d, _0x3e01d5) {
        if (_0x371a3a[_kod_0x2b1c('0x2a', 'f8Em')] !== _kod_0x2b1c('0x2b', 'J^6D')) {
            _0xebc82a && ($['contextMenu']['hidden'](), $(_0xebc82a)[_kod_0x2b1c('0x2c', 'QN3O')]({
                'x': _0x5e868d,
                'y': _0x3e01d5
            }));
        } else {
            return _0xebc82a ? _0x371a3a[_kod_0x2b1c('0x2d', '4WPF')](-0x1, _0xebc82a[_kod_0x2b1c('0x2e', 'f8Em')]('/')) ? _0x371a3a[_kod_0x2b1c('0x2f', '&1qZ')](_kod_0x2b1c('0x30', 'Grj&'), _0xebc82a) + _0x371a3a[_kod_0x2b1c('0x31', 'F3&D')] : '<i\x20class=\x22font-icon\x20' + _0xebc82a + _0x371a3a[_kod_0x2b1c('0x32', 'hPTP')] : '';
        }
    }, $[_kod_0x2b1c('0x33', '$Fr!')]['menuShow'] = function() {
        var _0x29f9a4 = $('.context-menu-active'),
            _0x281a24 = _0x29f9a4[_kod_0x2b1c('0x34', '@Tjn')]('contextMenu');
        if (_0x29f9a4 && _0x281a24) {
            if (_kod_0x2b1c('0x35', 'NgCt') === 'dYhGO') {
                var _0x585fc3 = _0x281a24[_kod_0x2b1c('0x36', 'OW$X')],
                    _0x23beda = _kod_0x2b1c('0x37', 'fDZ@');
                _0x585fc3[_kod_0x2b1c('0x38', 'F3&D')]('.disable')[_kod_0x2b1c('0x39', '$EdC')](_0x23beda), Hook['trigger']('rightMenu.show', _0x281a24[_kod_0x2b1c('0x3a', '@Tjn')], _0x29f9a4, _0x585fc3), Hook['trigger'](_kod_0x2b1c('0x3b', 'F3&D') + _0x281a24[_kod_0x2b1c('0x3c', '$Fr!')], _0x29f9a4, _0x585fc3);
            } else {
                for (var _0x244690 in _0x281a24) f[_kod_0x2b1c('0x3d', '$gHb')]({
                    'key': _0x244690,
                    'value': _0x281a24[_0x244690]
                });
                for (var _0x2d457e = f[_kod_0x2b1c('0x3e', 'f8Em')] - 0x1; _0x371a3a[_kod_0x2b1c('0x3f', '8Rov')](_0x2d457e, 0x0); _0x2d457e--) g[f[_0x2d457e]['key']] = f[_0x2d457e][_kod_0x2b1c('0x40', 'OY54')];
            }
        }
    }, $['contextMenu'][_kod_0x2b1c('0x41', 'OW$X')] = function() {
        if (_kod_0x2b1c('0x42', 'W!0v') === _kod_0x2b1c('0x43', 'tS4L')) {
            return _0x371a3a[_kod_0x2b1c('0x44', '8Rov')](0x0, $(_0x371a3a[_kod_0x2b1c('0x45', '$gHb')])[_kod_0x2b1c('0x46', 'ws5x')]) ? !0x1 : !0x0;
        } else {
            var _0x27fc62 = _0x281a24 + _kod_0x2b1c('0x47', 'azPb'),
                _0x35c883 = _0x371a3a[_kod_0x2b1c('0x48', '3Cvt')](_0x371a3a[_kod_0x2b1c('0x49', 'ws5x')]('<ul\x20class=\x22context-menu-list\x20' + _0x281a24, _kod_0x2b1c('0x4a', 'tycl')) + _0x27fc62, '\x22><span></span></li>\x09\x09\x09\x09\x09</ul>');
            $(_0x35c883)[_kod_0x2b1c('0x4b', '@Tjn')](l), p['$menu'] = l['find'](_0x371a3a[_kod_0x2b1c('0x4c', 'd7IR')]('ul.', _0x281a24)), p['callback'] = null, p[_kod_0x2b1c('0x4d', 'NgCt')] = p['$node'], p[_kod_0x2b1c('0x4e', 'tycl')] = 'sub', l['data'](_kod_0x2b1c('0x4f', '72VR'), p)[_kod_0x2b1c('0x50', 'i*cA')]('context-menu-submenu'), l[_kod_0x2b1c('0x51', '4Xet')]('ul.' + _0x281a24)['data']({
                'contextMenuRoot': e,
                'contextMenu': p
            }), l['find'](_kod_0x2b1c('0x52', 'fDZ@') + _0x27fc62)[_kod_0x2b1c('0x53', '3Cvt')]({
                'contextMenuRoot': e,
                'contextMenuKey': _0x27fc62,
                'contextMenu': p
            }), p[_kod_0x2b1c('0x54', 'OY54')] || (p['items'] = {}), p[_kod_0x2b1c('0x55', 'Grj&')][_0x27fc62] = {
                '$input': null,
                '$label': null,
                'icon': '',
                'name': '',
                '_name': '',
                '$node': l[_kod_0x2b1c('0x56', 'tS4L')](_0x371a3a[_kod_0x2b1c('0x57', 'QN3O')](_0x371a3a[_kod_0x2b1c('0x58', '@Tjn')], _0x27fc62))
            }, i(p, f[_kod_0x2b1c('0x59', 'oh[c')], '.' + _0x27fc62);
        }
    }, $[_kod_0x2b1c('0x5a', '$gHb')][_kod_0x2b1c('0x5b', '3Cvt')] = function() {
        _0x371a3a['frmEZ']($, '.context-menu-list')[_kod_0x2b1c('0x5c', '$gHb')](_0x371a3a['ThxbE'])[_kod_0x2b1c('0x5c', '$gHb')](_kod_0x2b1c('0x5d', '@Tjn'))[_kod_0x2b1c('0x5e', 'RUM6')](_kod_0x2b1c('0x5f', 'hPTP'));
    }, $['contextMenu']['menuItem'] = function(_0xdd64af, _0x1983ae) {
        var _0x3a0bd7, _0x248683 = $[_kod_0x2b1c('0x60', 'AYUV')][_kod_0x2b1c('0x61', '72VR')];
        for (var _0x27939f in _0x248683)
            if (_0x248683[_0x27939f][_kod_0x2b1c('0x62', 'd7IR')] == _0xdd64af || _0x371a3a['oLeSo'](_0x248683[_0x27939f]['selector'], '.' + _0xdd64af) || _0x248683[_0x27939f]['selector'] == _0x371a3a[_kod_0x2b1c('0x63', 'v)E9')]('#', _0xdd64af)) {
                _0xdd64af = _0x248683[_0x27939f]['selector'], _0x3a0bd7 = _0x248683[_0x27939f];
                break;
            } if (void 0x0 === _0x1983ae) return _0x3a0bd7[_kod_0x2b1c('0x64', 'tycl')];
        if (!_0x3a0bd7 || !_0x3a0bd7[_kod_0x2b1c('0x65', '&1qZ')]) return !0x1;
        _kod_0x2b1c('0x66', 'APOP') == typeof _0x1983ae && (_0x1983ae = [_0x1983ae]);
        for (var _0x5f46d5 = !0x1, _0xbda860 = 0x0; _0xbda860 < _0x1983ae[_kod_0x2b1c('0x3e', 'f8Em')]; _0xbda860++) {
            var _0x5d358e = _0x3a0bd7[_kod_0x2b1c('0x67', 'A3kc')][_0x1983ae[_0xbda860]] && _0x3a0bd7[_kod_0x2b1c('0x68', '4WPF')][_0x1983ae[_0xbda860]][_kod_0x2b1c('0x69', '&1qZ')];
            _0x5d358e && 0x0 != _0x5d358e[_kod_0x2b1c('0x6a', 'v)E9')] && (_0x5f46d5 = _0x5f46d5 ? _0x5f46d5['add'](_0x5d358e) : _0x5d358e);
        }
        return _0x5f46d5;
    }, $[_kod_0x2b1c('0x60', 'AYUV')][_kod_0x2b1c('0x6b', 'OW$X')] = function(_0x54b932, _0x842ea7, _0x205db4, _0x5b3d77) {
        var _0x4f47f7 = $[_kod_0x2b1c('0x6c', 'D[h3')]['menuItem'](_0x54b932, _0x842ea7);
        _0x4f47f7 && (_0x5b3d77 ? _0x4f47f7['addClass'](_0x205db4) : _0x4f47f7[_kod_0x2b1c('0x6d', '72VR')](_0x205db4));
    }, $[_kod_0x2b1c('0x6e', 'MRD5')][_kod_0x2b1c('0x6f', 'W!0v')] = function(_0x496f16, _0x3b9b67) {
        if (_kod_0x2b1c('0x70', 'Z##e') === _kod_0x2b1c('0x71', 'F3&D')) {
            $[_kod_0x2b1c('0x72', 'tycl')][_kod_0x2b1c('0x73', 'A3kc')](_0x496f16, _0x3b9b67, _0x371a3a[_kod_0x2b1c('0x74', 'D[h3')], !0x0);
        } else {
            var _0x245bff = $['contextMenu'][_kod_0x2b1c('0x75', 'i*cA')](_0x496f16, _0x3b9b67);
            _0x245bff && _0x245bff[_kod_0x2b1c('0x76', 'oh[c')]();
        }
    }, $['contextMenu'][_kod_0x2b1c('0x77', 'tycl')] = function(_0xd1adfd, _0x3c0d8e) {
        $[_kod_0x2b1c('0x78', 'U]Q3')][_kod_0x2b1c('0x79', 'F3&D')](_0xd1adfd, _0x3c0d8e, _kod_0x2b1c('0x7a', 'YS[w'), !0x1);
    }, $[_kod_0x2b1c('0x7b', 'f8Em')][_kod_0x2b1c('0x7c', '$EdC')] = function(_0x543d8a, _0x591a3f) {
        $[_kod_0x2b1c('0x7d', 'ws5x')][_kod_0x2b1c('0x7e', '4WPF')](_0x543d8a, _0x591a3f, _kod_0x2b1c('0x7f', 'a1Fl'), !0x0);
    }, $[_kod_0x2b1c('0x60', 'AYUV')]['menuItemShow'] = function(_0x45032d, _0x187d1f) {
        if (_0x371a3a['AjVAk'] === _kod_0x2b1c('0x80', '4Xet')) {
            $[_kod_0x2b1c('0x81', 'J^6D')][_kod_0x2b1c('0x82', 'APOP')](_0x45032d, _0x187d1f, _kod_0x2b1c('0x83', 'oh[c'), !0x1);
        } else {
            var _0x33290e = $['contextMenu'][_kod_0x2b1c('0x84', 'APOP')](_0x45032d, _0x187d1f);
            _0x33290e && (d ? _0x33290e[_kod_0x2b1c('0x85', 'P&BO')](_0x1e24be) : _0x33290e[_kod_0x2b1c('0x86', '$gHb')](_0x1e24be));
        }
    }, $[_kod_0x2b1c('0x87', '8Rov')]['menuItemRemove'] = function(_0x5df640, _0x5e9038) {
        var _0x4f660f = $[_kod_0x2b1c('0x88', 'a1Fl')][_kod_0x2b1c('0x89', 'P&BO')](_0x5df640, _0x5e9038);
        _0x4f660f && _0x4f660f[_kod_0x2b1c('0x8a', 'hPTP')]();
    }, $[_kod_0x2b1c('0x8b', '&1qZ')][_kod_0x2b1c('0x8c', 'hPTP')] = function(_0x194da4, _0x43b483, _0x525408, _0x556dc2) {
        var _0x29a1a7 = {};
        _0x29a1a7[_kod_0x2b1c('0x8d', 'Grj&')] = _kod_0x2b1c('0x8e', 'hPTP');
        _0x29a1a7[_kod_0x2b1c('0x8f', 'f8Em')] = function(_0x447a13, _0x7894d) {
            return _0x447a13 !== _0x7894d;
        };
        _0x29a1a7[_kod_0x2b1c('0x90', 'k%]l')] = function(_0x5f421a, _0x3f935f) {
            return _0x5f421a + _0x3f935f;
        };
        _0x29a1a7[_kod_0x2b1c('0x91', 'MRD5')] = _kod_0x2b1c('0x92', 'PKK1');
        _0x29a1a7['JPBeH'] = '-first-item';
        _0x29a1a7[_kod_0x2b1c('0x93', 'Grj&')] = _kod_0x2b1c('0x94', 'PKK1');
        var _0x31a001 = !0x1,
            _0x257dec = $[_kod_0x2b1c('0x8b', '&1qZ')]['menus'];
        for (var _0x597ac6 in _0x257dec)
            if (_0x371a3a['oLeSo'](_0x257dec[_0x597ac6][_kod_0x2b1c('0x95', '4WPF')], _0x43b483)) {
                _0x31a001 = _0x257dec[_0x597ac6];
                break;
            } if (_0x371a3a[_kod_0x2b1c('0x96', 'F3&D')](_0x31a001, _0x194da4)) {
            if (_kod_0x2b1c('0x97', '&1qZ') === _kod_0x2b1c('0x98', 'a1Fl')) {
                var _0x29b597 = _0x525408['items'][_0x43b483[_0x597ac6]] && _0x525408['items'][_0x43b483[_0x597ac6]]['$node'];
                _0x29b597 && 0x0 != _0x29b597[_kod_0x2b1c('0x99', '][##')] && (_0x257dec = _0x257dec ? _0x257dec[_kod_0x2b1c('0x9a', 'J^6D')](_0x29b597) : _0x29b597);
            } else {
                var _0x33bed4 = function(_0xf366bb) {
                        if ('xxgpM' !== _0x29a1a7[_kod_0x2b1c('0x9b', 'i*cA')]) {
                            return _0xf366bb ? _0x29a1a7[_kod_0x2b1c('0x9c', '8Rov')](-0x1, _0xf366bb['indexOf']('/')) ? _0x29a1a7['KaygG'](_kod_0x2b1c('0x9d', 'FVOF'), _0xf366bb) + _kod_0x2b1c('0x9e', 'fDZ@') : _0x29a1a7[_kod_0x2b1c('0x9f', 'APOP')](_kod_0x2b1c('0xa0', 'FVOF') + _0xf366bb, '\x22></i>') : '';
                        } else {
                            _0xf366bb && ($[_kod_0x2b1c('0x81', 'J^6D')][_kod_0x2b1c('0xa1', 'Grj&')](), $(_0xf366bb)[_kod_0x2b1c('0x27', '4Xet')]({
                                'x': _0x43b483,
                                'y': _0x525408
                            }));
                        }
                    },
                    _0x3fa791 = function(_0x3c3f8e, _0x92bee2, _0x1d20ea, _0x54dd7b) {
                        var _0x178ca8 = {};
                        _0x178ca8[_kod_0x2b1c('0xa2', 'ws5x')] = _0x29a1a7.BaLDk;
                        _0x178ca8[_kod_0x2b1c('0xa3', '3CRJ')] = function(_0x1243ba, _0x4c9d75) {
                            return _0x1243ba + _0x4c9d75;
                        };
                        _0x178ca8['kypPK'] = '(<span\x20class=\x22context-menu-accesskey\x22>';
                        _0x178ca8[_kod_0x2b1c('0xa4', '4WPF')] = _kod_0x2b1c('0xa5', 'A3kc');
                        _0x178ca8[_kod_0x2b1c('0xa6', 'k%]l')] = function(_0x18dd6b, _0x228552) {
                            return _0x18dd6b == _0x228552;
                        };
                        _0x178ca8['FHELU'] = _kod_0x2b1c('0xa7', 'tycl');
                        _0x178ca8['rbvBp'] = function(_0x31f56d, _0x351dee) {
                            return _0x31f56d + _0x351dee;
                        };
                        _0x178ca8['WKsqd'] = _0x29a1a7.JPBeH;
                        _0x178ca8['zlRBk'] = '<ul\x20class=\x22context-menu-list\x20';
                        _0x178ca8[_kod_0x2b1c('0xa8', 'J^6D')] = _kod_0x2b1c('0xa9', 'AYUV');
                        _0x178ca8['WApef'] = function(_0x13a033, _0x41e61c) {
                            return _0x13a033 + _0x41e61c;
                        };
                        _0x178ca8[_kod_0x2b1c('0xaa', 'F3&D')] = _kod_0x2b1c('0xab', 'OY54');
                        _0x178ca8[_kod_0x2b1c('0xac', 'APOP')] = function(_0x49c55a, _0x18248a, _0x3a9a8c, _0x1a85ae) {
                            return _0x49c55a(_0x18248a, _0x3a9a8c, _0x1a85ae);
                        };
                        var _0x257dec = [],
                            _0x597ac6 = {};
                        if (_0x1d20ea) {
                            if (_0x29a1a7[_kod_0x2b1c('0xad', 'hPTP')](_0x29a1a7[_kod_0x2b1c('0xae', '][##')], _kod_0x2b1c('0xaf', '4WPF'))) {
                                for (var _0x3d8d72 in _0x92bee2) _0x257dec[_kod_0x2b1c('0xb0', '8Rov')]({
                                    'key': _0x3d8d72,
                                    'value': _0x92bee2[_0x3d8d72]
                                });
                                for (var _0x56563d = _0x257dec['length'] - 0x1; _0x56563d >= 0x0; _0x56563d--) _0x597ac6[_0x257dec[_0x56563d][_kod_0x2b1c('0xb1', 'zZ@H')]] = _0x257dec[_0x56563d]['value'];
                            } else {
                                var _0xaada97 = _0x92bee2[_kod_0x2b1c('0xb2', 'ws5x')],
                                    _0x4d12b4 = _kod_0x2b1c('0xb3', 'RUM6');
                                _0xaada97['find'](_0x178ca8[_kod_0x2b1c('0xb4', '$Fr!')])['addClass'](_0x4d12b4), Hook[_kod_0x2b1c('0xb5', 'azPb')](_kod_0x2b1c('0xb6', 'tS4L'), _0x92bee2[_kod_0x2b1c('0xb7', '$gHb')], _0x3c3f8e, _0xaada97), Hook[_kod_0x2b1c('0xb8', '@Tjn')]('rightMenu.show' + _0x92bee2[_kod_0x2b1c('0xb9', 'hPTP')], _0x3c3f8e, _0xaada97);
                            }
                        } else _0x597ac6 = _0x92bee2;
                        $[_kod_0x2b1c('0xba', '$EdC')](_0x597ac6, function(_0x26b0ca, _0xe05977) {
                            _0xe05977[_kod_0x2b1c('0xbb', 'Grj&')] = _0xe05977[_kod_0x2b1c('0xbc', 'zZ@H')] || '';
                            var _0x597ac6 = _0x178ca8[_kod_0x2b1c('0xbd', 'P&BO')](_0x26b0ca + '\x20', _0xe05977[_kod_0x2b1c('0xbe', 'ws5x')]);
                            if (_kod_0x2b1c('0xbf', 'aKLS') == typeof _0xe05977) var _0x3d8d72 = _0x178ca8[_kod_0x2b1c('0xc0', '!f8I')](_kod_0x2b1c('0xc1', '4WPF'), _0x597ac6) + '\x20context-menu-separator\x20not-selectable\x22></li>';
                            else {
                                var _0x56563d = _0xe05977[_kod_0x2b1c('0xc2', 'aKLS')];
                                _0xe05977[_kod_0x2b1c('0xc3', 'a1Fl')] && (_0x56563d += _0x178ca8[_kod_0x2b1c('0xc4', 'A3kc')] + _0xe05977[_kod_0x2b1c('0xc5', 'OW$X')] + '</span>)');
                                var _0x3d8d72 = _0x178ca8[_kod_0x2b1c('0xc6', 'hPTP')](_0x178ca8[_kod_0x2b1c('0xc7', 'PKK1')] + _0x597ac6 + '\x22>' + _0x33bed4(_0xe05977['icon']) + '<span>' + _0x56563d, '</span></li>');
                            }
                            var _0x490993 = $(_0x3d8d72)['clone'](),
                                _0x33b26f = _0x1d20ea || _0x54dd7b,
                                _0x566b41 = _0x3c3f8e[_kod_0x2b1c('0xc8', '$EdC')]['find'](_0x33b26f)[_kod_0x2b1c('0xc9', '$gHb')]();
                            _0x178ca8['AyITK'](0x0, _0x566b41[_kod_0x2b1c('0xca', '@Tjn')]) && _0x3c3f8e[_kod_0x2b1c('0xcb', 'F3&D')][_0x33b26f] && (_0x566b41 = _0x3c3f8e['commands'][_0x33b26f][_kod_0x2b1c('0xcc', 'MRD5')]), 0x0 == _0x566b41[_kod_0x2b1c('0xcd', '$EdC')] && (_0x566b41 = _0x3c3f8e[_kod_0x2b1c('0xce', 'f8Em')][_kod_0x2b1c('0xcf', 'ws5x')]()[_kod_0x2b1c('0xd0', 'OY54')]()), _0x1d20ea ? _0x566b41[_kod_0x2b1c('0xd1', 'P&BO')](_0x490993) : _0x54dd7b && _0x566b41['before'](_0x490993);
                            var _0x4801db = _0x490993[_kod_0x2b1c('0xd2', 'Grj&')]('.context-menu-list')[_kod_0x2b1c('0xd3', 'MRD5')](_kod_0x2b1c('0x4f', '72VR'));
                            _0x490993['data']({
                                'contextMenu': _0x4801db,
                                'contextMenuKey': _0x26b0ca,
                                'contextMenuRoot': _0x31a001
                            });
                            var _0x3e99e3 = {};
                            _0x3e99e3['$input'] = null;
                            _0x3e99e3[_kod_0x2b1c('0xd4', 'Z##e')] = null;
                            _0x3e99e3['accesskey'] = _0xe05977.accesskey;
                            _0x3e99e3[_kod_0x2b1c('0xd5', 'P&BO')] = _0xe05977.className;
                            _0x3e99e3[_kod_0x2b1c('0xd6', 'azPb')] = _0xe05977.icon;
                            _0x3e99e3[_kod_0x2b1c('0xd7', '0Ra*')] = _0xe05977.name;
                            _0x3e99e3[_kod_0x2b1c('0xd8', 'AYUV')] = _0x56563d;
                            _0x3e99e3['$node'] = _0x490993;
                            if (_0x4801db && (_0x4801db[_kod_0x2b1c('0xd9', 'FVOF')] || (_0x4801db['items'] = {}), _0x4801db[_kod_0x2b1c('0xda', 'a1Fl')][_0x26b0ca] = _0x3e99e3), _0x178ca8['FHELU'] != typeof _0xe05977 && (_0x3c3f8e[_kod_0x2b1c('0xdb', '&1qZ')] || (_0x3c3f8e[_kod_0x2b1c('0xdc', 'W!0v')] = {}), _0x3c3f8e[_kod_0x2b1c('0xdd', 'RUM6')][_0x26b0ca] = _0x3e99e3, _0x31a001[_kod_0x2b1c('0xde', 'PKK1')][_0x26b0ca] = _0x3e99e3, _0x31a001[_kod_0x2b1c('0xdf', 'P&BO')][_0x26b0ca] = function(_0x414410, _0x2db84f) {
                                    if (_kod_0x2b1c('0xe0', '$Fr!') === _kod_0x2b1c('0xe1', 'P&BO')) {
                                        _0xe05977[_kod_0x2b1c('0xe2', 'OY54')](_0x414410, _0x2db84f);
                                    } else {
                                        _0xe05977['callback'](_0x414410, _0x2db84f);
                                    }
                                }, _0xe05977[_kod_0x2b1c('0xe3', '0Ra*')] && (_0x31a001[_kod_0x2b1c('0xe4', 'OY54')][_0xe05977[_kod_0x2b1c('0xe5', 'Z##e')]] = _0x3e99e3), _0xe05977['items'])) {
                                var _0x568565 = _0x178ca8[_kod_0x2b1c('0xe6', 'tS4L')](_0x26b0ca, _0x178ca8[_kod_0x2b1c('0xe7', 'Z##e')]),
                                    _0x3d8d72 = _0x178ca8[_kod_0x2b1c('0xe8', 'zZ@H')] + _0x26b0ca + _kod_0x2b1c('0xe9', '][##') + _0x568565 + _kod_0x2b1c('0xea', 'i*cA');
                                $(_0x3d8d72)[_kod_0x2b1c('0xeb', 'YS[w')](_0x490993), _0x3e99e3[_kod_0x2b1c('0xec', 'RUM6')] = _0x490993['find'](_kod_0x2b1c('0xed', 'A3kc') + _0x26b0ca), _0x3e99e3[_kod_0x2b1c('0xee', 'QN3O')] = null, _0x3e99e3[_kod_0x2b1c('0xef', 'v)E9')] = _0x3e99e3[_kod_0x2b1c('0xf0', '4Xet')], _0x3e99e3[_kod_0x2b1c('0xf1', 'hPTP')] = _kod_0x2b1c('0xf2', '3Cvt'), _0x490993[_kod_0x2b1c('0xf3', 'W!0v')](_kod_0x2b1c('0x7b', 'f8Em'), _0x3e99e3)[_kod_0x2b1c('0xf4', '0Ra*')](_0x178ca8[_kod_0x2b1c('0xf5', 'APOP')]), _0x490993['find'](_kod_0x2b1c('0xf6', '8Rov') + _0x26b0ca)[_kod_0x2b1c('0xf7', 'PKK1')]({
                                    'contextMenuRoot': _0x31a001,
                                    'contextMenu': _0x3e99e3
                                }), _0x490993[_kod_0x2b1c('0xf8', '0Ra*')](_kod_0x2b1c('0xf9', 'AYUV') + _0x568565)[_kod_0x2b1c('0xfa', 'RUM6')]({
                                    'contextMenuRoot': _0x31a001,
                                    'contextMenuKey': _0x568565,
                                    'contextMenu': _0x3e99e3
                                }), _0x3e99e3[_kod_0x2b1c('0xfb', 'AYUV')] || (_0x3e99e3[_kod_0x2b1c('0xfc', 'NgCt')] = {}), _0x3e99e3[_kod_0x2b1c('0xfd', 'ws5x')][_0x568565] = {
                                    '$input': null,
                                    '$label': null,
                                    'icon': '',
                                    'name': '',
                                    '_name': '',
                                    '$node': _0x490993['find'](_0x178ca8[_kod_0x2b1c('0xfe', 'J^6D')](_0x178ca8[_kod_0x2b1c('0xff', 'QN3O')], _0x568565))
                                }, _0x178ca8[_kod_0x2b1c('0x100', 'd7IR')](_0x3fa791, _0x3e99e3, _0xe05977[_kod_0x2b1c('0x101', 'k%]l')], '.' + _0x568565);
                            }
                        });
                    };
                _0x3fa791(_0x31a001, _0x194da4, _0x525408, _0x556dc2);
            }
        }
    };
    var _0x1e24be = function() {
        var _0x44be98 = {};
        _0x44be98[_kod_0x2b1c('0x102', 'RUM6')] = function(_0x49a8de, _0x54437f) {
            return _0x49a8de(_0x54437f);
        };
        return $(_0x371a3a['faJzV'])['appendTo'](_kod_0x2b1c('0x103', 'd7IR')), 'function' != typeof $[_kod_0x2b1c('0x78', 'U]Q3')] ? console[_kod_0x2b1c('0x104', '4Xet')](_0x371a3a[_kod_0x2b1c('0x105', 'QN3O')]) : ($[_kod_0x2b1c('0x106', 'YS[w')]({
            'zIndex': 0x270f,
            'selector': _0x371a3a[_kod_0x2b1c('0x107', 'U]Q3')],
            'items': {
                'dialog-quit': {
                    'name': LNG[_kod_0x2b1c('0x108', 'd7IR')],
                    'className': 'dialog-quit',
                    'icon': _0x371a3a[_kod_0x2b1c('0x109', '0Ra*')],
                    'accesskey': 'q'
                },
                'dialog-max': {
                    'name': LNG[_kod_0x2b1c('0x10a', 'U]Q3')],
                    'className': _0x371a3a['YRpwh'],
                    'icon': _0x371a3a['wOvtf'],
                    'accesskey': 'a'
                },
                'dialog-min': {
                    'name': LNG[_kod_0x2b1c('0x10b', '4Xet')],
                    'className': _kod_0x2b1c('0x10c', 'A3kc'),
                    'icon': _kod_0x2b1c('0x10d', '3CRJ'),
                    'accesskey': 'i'
                },
                'sep1': _kod_0x2b1c('0x10e', '$gHb'),
                'refresh': {
                    'name': LNG[_kod_0x2b1c('0x10f', 'J^6D')],
                    'className': _kod_0x2b1c('0x110', 'oh[c'),
                    'icon': _0x371a3a['NWVEl'],
                    'accesskey': 'r'
                },
                'open-window': {
                    'name': LNG['open_ie'],
                    'className': _0x371a3a[_kod_0x2b1c('0x111', '0Ra*')],
                    'icon': 'globe',
                    'accesskey': 'b'
                },
                'qrcode': {
                    'name': LNG[_kod_0x2b1c('0x112', 'a1Fl')],
                    'className': _kod_0x2b1c('0x113', '$gHb'),
                    'icon': _kod_0x2b1c('0x114', '4WPF'),
                    'accesskey': 'c'
                }
            },
            'callback': function(_0x11dcbc, _0x37cf3b) {
                var _0x1e24be = _0x37cf3b[_kod_0x2b1c('0x115', '0Ra*')]['attr']('id'),
                    _0x5d98c9 = $['dialog'][_kod_0x2b1c('0x116', 'QN3O')][_0x1e24be];
                switch (_0x11dcbc) {
                    case 'dialog-quit':
                        _0x5d98c9[_kod_0x2b1c('0x117', 'aKLS')]();
                        break;
                    case _kod_0x2b1c('0x118', 'OY54'):
                        _0x5d98c9[_kod_0x2b1c('0x119', '$Fr!')](!0x1);
                        break;
                    case 'dialog-max':
                        _0x5d98c9['_clickMax']();
                        break;
                    case _kod_0x2b1c('0x11a', '3CRJ'):
                        _0x5d98c9[_kod_0x2b1c('0x11b', 'U]Q3')]();
                        break;
                    case 'open-window':
                        _0x5d98c9[_kod_0x2b1c('0x11c', 'f8Em')]();
                        break;
                    case _kod_0x2b1c('0x11d', 'J^6D'):
                        core[_kod_0x2b1c('0x112', 'a1Fl')](_0x5d98c9['DOM'][_kod_0x2b1c('0x11e', 'AYUV')]['find'](_0x371a3a[_kod_0x2b1c('0x11f', 'd7IR')])['attr'](_kod_0x2b1c('0x120', '3CRJ')));
                }
            }
        }), void $(_kod_0x2b1c('0x121', 'd7IR'))[_kod_0x2b1c('0x122', 'J^6D')](_kod_0x2b1c('0x123', 'YS[w'))[_kod_0x2b1c('0x124', 'Grj&')](_0x371a3a['xeClG'], function(_0x34ec6f) {
            var _0x281a24 = _0x44be98[_kod_0x2b1c('0x125', 'i*cA')]($, this)['offset']();
            _0x281a24[_kod_0x2b1c('0x126', 'oh[c')] += $(this)[_kod_0x2b1c('0x127', 'aKLS')](), $(this)[_kod_0x2b1c('0x128', '0Ra*')]()['parent']()['contextMenu']({
                'x': _0x34ec6f['pageX'],
                'y': _0x281a24[_kod_0x2b1c('0x129', '8Rov')]
            });
        })[_kod_0x2b1c('0x12a', 'i*cA')](_kod_0x2b1c('0x12b', 'P&BO'))[_kod_0x2b1c('0x12c', 'i*cA')](_kod_0x2b1c('0x12d', 'tS4L'), function(_0x529f9e) {
            var _0x281a24 = $(this)[_kod_0x2b1c('0x12e', 'OW$X')]()[_kod_0x2b1c('0x12f', 'AYUV')]()[_kod_0x2b1c('0x130', 'd7IR')]('id'),
                _0x1e24be = $[_kod_0x2b1c('0x131', 'FVOF')]['list'][_0x281a24];
            _0x1e24be['close'](), $[_kod_0x2b1c('0x132', '3Cvt')]['hidden']();
        }));
    };
    Hook[_kod_0x2b1c('0x133', 'OW$X')]('rightMenu.show.dialog-menu', function(_0x2d39ad, _0x2b75c5) {
        var _0x1e24be = _0x2d39ad[_kod_0x2b1c('0x134', 'NgCt')]('id'),
            _0x91cf38 = $['dialog'][_kod_0x2b1c('0x135', 'fDZ@')][_0x1e24be],
            _0x48e441 = 'hidden',
            _0x32bc6a = _kod_0x2b1c('0x136', 'J^6D');
        _0x91cf38['hasFrame']() ? _0x2b75c5['find'](_0x32bc6a)[_kod_0x2b1c('0x137', 'MRD5')](_0x48e441) : _0x2b75c5['find'](_0x32bc6a)[_kod_0x2b1c('0x138', 'MRD5')](_0x48e441);
        var _0x202619 = _0x371a3a[_kod_0x2b1c('0x139', 'hPTP')];
        $('.' + _0x1e24be)[_kod_0x2b1c('0x13a', 'J^6D')](_0x371a3a['jasFe']) ? _0x2b75c5[_kod_0x2b1c('0x13b', 'D[h3')](_0x202619)['removeClass'](_0x48e441) : _0x2b75c5[_kod_0x2b1c('0x13c', 'hPTP')](_0x202619)[_kod_0x2b1c('0x13d', '@Tjn')](_0x48e441);
    }), _0x371a3a[_kod_0x2b1c('0x13e', 'OW$X')](_0x1e24be);
});;
define("app/app/appBase", [], function(a, b) {
    var c = {},
        d = {},
        e = {},
        f = !1,
        g = function(a) {
            a.title = void 0 == a.title ? a.name : a.title, void 0 == a.name && (a.name = UUID(), a.hidden = !0), c[a.name] = a, a.ext || (a.ext = "");
            var b = a.ext.split(",");
            c[a.name].extArr = b, "undefined" != typeof a.sort ? a.sort = parseInt(a.sort) : a.sort = 0;
            for (var e = 0; e < b.length; e++) {
                var f = trim(b[e]);
                c[a.name].extArr[e] = f, d[f] || (d[f] = []);
                for (var g = !1, h = 0; h < d[f].length; h++)
                    if (d[f][h].name == a.name) {
                        g = !0;
                        break
                    } g || (d[f].push({
                    name: a.name,
                    sort: a.sort
                }), d[f].length > 1 && d[f].sort(function(a, b) {
                    return a.sort < b.sort
                }))
            }
            Hook.trigger("kodApp.add.finished")
        },
        h = function() {
            return d
        },
        i = function(a) {
            if (!a || !c[a]) return !1;
            delete c[a];
            for (var b in e)
                if (e[b] == a) {
                    delete e[b];
                    break
                } for (var b in d) {
                for (var f = d[b], g = [], h = 0; h < f.length; h++) f[h].name != a && g.push(f[h]);
                0 == g.length ? delete d[b] : d[b] = g
            }
        },
        j = function(a) {
            if ("undefined" == typeof a) {
                var b = [];
                for (var f in c) c[f].hidden || b.push(c[f]);
                return b
            }
            var g = e[a],
                b = [];
            if (!g && !d[a]) return !1;
            if (g && (c[g] ? b.push(c[g]) : delete e[a]), !d[a]) return b;
            for (var h = 0; h < d[a].length; h++) {
                var i = d[a][h].name;
                c[i] && i != g && b.push(c[i])
            }
            return b
        },
        k = function(a) {
            f = a
        },
        l = function() {
            return f
        },
        m = function(a, b, d) {
            if ("" != a) {
                b && "file" != b || (b = core.pathExt(a)), d = d ? d : "";
                var e = {
                    path: a,
                    ext: b,
                    appName: d
                };
                if (!Hook.trigger("kodApp.open.before", e)) {
                    if (a = e.path, b = e.ext, d = e.appName) var f = c[d];
                    else {
                        var g = j(b);
                        if (!g || 0 == g.length) return void kodApp.openUnknow(a, "");
                        var f = g[0]
                    }
                    if (!f) return Tips.tips("[" + d + "] not exists", !1);
                    try {
                        n(f, a, b)
                    } catch (h) {
                        console.error("kodApp.open error:", h)
                    }
                }
            }
        },
        n = function(a, b, c) {
            Hook.trigger("kodApp.callback.before", a, b, c) || (a.callback(b, c), Hook.trigger("kodApp.callback.after", b, c, a))
        },
        o = function(a) {
            var b = j(a),
                d = j("");
            "" == a && (b = !1), b ? b.push({
                name: ""
            }) : b = [], b = b.concat(d);
            for (var e = {}, f = 0; f < b.length; f++) {
                var g = b[f];
                "" == g.name || g.hidden ? e["step-line"] = "-------" : e[g.name] = {
                    app: g.name,
                    name: g.title,
                    className: g.className,
                    icon: g.icon,
                    callback: function(a, b) {
                        var d = c[a];
                        if (d && d.callback) {
                            $(".context-menu-active");
                            if ($(".context-menu-active").hasClass("menu-tree-file")) var e = ui.tree.makeParam();
                            else var e = ui.path.makeParam();
                            n(d, e.path, e.type)
                        }
                    }
                }
            }
            return e
        },
        p = function(a, b) {
            q(a, b), G.userConfig.kodAppDefault = htmlEncode(jsonEncode(e)), G.shareInfo || $.get(G.appHost + "setting/set&k=kodAppDefault&v=" + jsonEncode(e))
        },
        q = function(a, b) {
            if (!c[b]) return !1;
            if ("string" == typeof a) e[a] = b;
            else if ($.isArray(a))
                for (var d = 0; d < a.length; d++) e[a[d]] = b;
            else if ($.isArray(c[b].extArr))
                for (var f = c[b].extArr, d = 0; d < f.length; d++) e[f[d]] = b
        },
        r = function() {
            G.userConfig.kodAppDefault = "[]", e = {}
        },
        s = function(a, b) {
            var a = c[a];
            return a ? b ? inArray(a.extArr, b) : a.ext : !1
        },
        t = function(a, b, e) {
            var a = c[a];
            if (!a) return !1;
            var f = "undefined" == e ? 0 : parseInt(e);
            0 == f && "undefined" != typeof a.sort && (f = parseInt(a.sort)), "string" == $.type(b) && (b = b.split(","));
            for (var g = 0; g < b.length; g++) {
                var h = b[g];
                if (h) {
                    inArray(a.extArr, h) || a.extArr.push(h), d[h] || (d[h] = []);
                    for (var i = !1, j = 0; j < d[h].length; j++) d[h][j].name != a.name || (d[h][j].sort = f, i = !0);
                    i || d[h].push({
                        name: a.name,
                        sort: f
                    })
                }
            }
        },
        u = function() {
            if (G.userConfig && G.userConfig.kodAppDefault) try {
                var a = G.userConfig.kodAppDefault;
                a = jsonDecode(htmlDecode(a)), $.isPlainObject(a) && (e = a)
            } catch (b) {}
            Hook.bind("rightMenu.show.menu-file,rightMenu.show.menu-tree-file", function(a, b) {
                if (a.hasClass("menu-tree-file")) var c = ui.tree.makeParam();
                else var c = ui.path.makeParam();
                var d = core.pathExt(c.path),
                    e = "hidden";
                if (kodApp.getApp(d)) {
                    var f = kodApp.getAppMenu(d);
                    b.find("li.open-with.context-menu-submenu").removeClass(e), b.find("ul.context-menu-list.open-with .context-menu-item").not(".open-with-first").remove(), $.contextMenu.menuAdd(f, ".menu-file", ".open-with-first"), $.contextMenu.menuAdd(f, ".menu-tree-file", ".open-with-first")
                } else b.find("li.open-with.context-menu-submenu").addClass(e)
            }), Hook.trigger("kodApp.ready"), Hook.bind("kodApp.callback.before", function(a, b, c) {
                return core.authCheckGroup("explorer.fileProxy", b) ? void 0 : (Tips.tips(LNG.no_permission_action, !1), "deny!")
            })
        };
    return u(), {
        debug: function() {
            return {
                appList: c,
                openDefault: d,
                openUser: e
            }
        },
        add: g,
        remove: i,
        appSupportCheck: s,
        appSupportSet: t,
        getApp: j,
        getAppBind: h,
        getAppMenu: o,
        setLastOpenTarget: k,
        getLastOpenTarget: l,
        setOpenUser: p,
        setOpenUserLocal: q,
        clearOpenUser: r,
        open: m
    }
});;
define("app/app/editor", [], function(a, b) {
    kodApp.add({
        name: "aceEditor",
        title: LNG["Plugin.default.aceEditor"],
        sort: 0,
        ext: "txt,textile,oexe,inc,csv,log,asc,tsv,lnk,url,webloc,meta,localized,xib,xsd,storyboard,plist,csproj,pch,pbxproj,local,xcscheme,manifest,vbproj,strings,jshintrc,sublime-project,readme,changes,changelog,version,license,changelog,abap,abc,as,asp,aspx,ada,adb,htaccess,htgroups,htgroups,htpasswd,asciidoc,adoc,asm,a,ahk,bat,cmd,cpp,c,cc,cxx,h,hh,hpp,ino,c9search_results,cirru,cr,clj,cljs,cbl,cob,coffee,cf,cson,cakefile,cfm,cs,css,curly,d,di,dart,diff,patch,dockerfile,dot,dummy,dummy,e,ge,ejs,ex,exs,elm,erl,hrl,frt,fs,ldr,ftl,gcode,feature,.gitignore,glsl,frag,vert,gbs,go,groovy,haml,hbs,handlebars,tpl,mustache,hs,hx,html,hta,htm,xhtml,eex,html.eex,erb,rhtml,html.erb,ini,inf,conf,cfg,prefs,io,jack,jade,java,ji,jl,jq,js,jsm,json,jsp,jsx,latex,ltx,bib,lean,hlean,less,liquid,lisp,ls,logic,lql,lsl,lua,lp,lucene,Makefile,makemakefile,gnumakefile,makefile,ocamlmakefile,make,md,markdown,mask,matlab,mz,mel,mc,mush,mysql,nc,nix,nsi,nsh,m,mm,ml,mli,pas,p,pl,pm,pgsql,php,phtml,shtml,php3,php4,php5,phps,phpt,aw,ctp,module,ps1,praat,praatscript,psc,proc,plg,prolog,properties,proto,py,r,cshtml,rd,rhtml,rst,rb,ru,gemspec,rake,guardfile,rakefile,gemfile,rs,sass,scad,scala,scm,sm,rkt,oak,scheme,scss,sh,bash,bashrc,sjs,smarty,tpl,snippets,soy,space,sql,sqlserver,styl,stylus,svg,swift,tcl,tex,toml,twig,swig,ts,typescript,str,vala,vbs,vb,vm,v,vh,sv,svh,vhd,vhdl,wlk,wpgm,wtest,xml,rdf,rss,wsdl,xslt,atom,mathml,mml,xul,xbl,xaml,xq,yaml,yml,vcproj,vcxproj,vtt,filters,cer,reg,config,pem,srt,ass,lrc,opf,ncx",
        icon: G.staticPath + "images/file_icon/icon_app/ace.png",
        callback: function(a, b) {
            var c = ShareData.frameTop();
            if ("undefined" != typeof c.Editor) return void c.Editor.add(urlEncode(a));
            if (core.isApp("editor")) return void ShareData.frameChild("OpenopenEditor", function(b) {
                b.Editor.add(urlEncode(a))
            });
            if (ShareData.frameTop("OpenopenEditor")) {
                var d = c.$.dialog.list.openEditor,
                    e = 0;
                d && "hidden" == $(d.DOM.wrap).css("visibility") && (e = 200, d.display(!0).zIndex().focus()), setTimeout(function() {
                    ShareData.frameTop("OpenopenEditor", function(b) {
                        b.Editor.add(urlEncode(a))
                    })
                }, e)
            } else {
                var f = G.appHost + "editor/edit#filename=" + urlEncode(a);
                "undefined" != typeof G.sharePage && (f = G.appHost + "share/edit&user=" + G.user + "&sid=" + G.sid + "#filename=" + urlEncode(a));
                var g = htmlEncode(urlDecode(core.pathThis(a))),
                    h = {
                        closeBefore: function() {
                            var a = ShareData.frameTop("OpenopenEditor"),
                                b = this;
                            return a && a.Editor && a.Editor.hasFileSave() ? ($.dialog.confirm(LNG.if_save_file_tips, function() {
                                b.config.closeBefore = !1, b.close()
                            }, function() {}), !1) : void 0
                        }
                    };
                core.openDialog(f, core.icon("edit"), g, "openEditor", h)
            }
        }
    });
    var c = ShareData.frameTop();
    c.Config && "editor" == c.Config.pageApp && kodApp.setOpenUserLocal(!1, "aceEditor")
});;
define("app/app/openWith", [], function(a, b) {
    kodApp.add({
        name: "appOpenSetting",
        title: LNG["Explorer.UI.appSetDefault"],
        ext: "",
        icon: G.staticPath + "images/file_icon/icon_others/setting.png",
        callback: function(a, b) {
            var c = "<ul class='tab-group {{if !apps}}hidden{{/if}}' role='tablist'>				<li class='tab-item {{if apps}}active{{/if}}'>					<a href='#app-list-support'aria-controls='app-list-support' role='tab' data-toggle='tab'>						{{LNG['Explorer.UI.appTypeSupport']}}</a>				</li>				<li class='tab-item {{if !apps}}active{{/if}}' >					<a href='#app-list_all' aria-controls='app-list_all' role='tab' data-toggle='tab'>						{{LNG['Explorer.UI.appTypeAll']}}</a>				</li>			</ul>			<div class='tab-content'>				<div class='app-list tab-pane {{if apps}}active{{/if}}' id='app-list-support'>					{{each apps app i}}					<a data-app='{{app.name}}' href='javascript:void(0);'					draggable='false' ondragstart='return false;'					class='app-item {{if app.name==defaultApp}}select{{/if}} disable-ripple'>						{{if app.icon.indexOf('/') == -1}}							<span class='ico'><i class='font-icon {{app.icon}}'></i></span>						{{else}}							<span class='ico'><img draggable='false' ondragstart='return false;' src='{{app.icon}}'></span>						{{/if}}						<span class='name'>{{app.title}}</span>					</a>					{{/each}}					<div class='clear'></div>				</div>				<div class='app-list tab-pane {{if !apps}}active{{/if}}' id='app-list_all'>					{{each appAll app i}}					<a data-app='{{app.name}}' href='javascript:void(0);'					draggable='false' ondragstart='return false;'					class='app-item {{if app.name==defaultApp}}select{{/if}} disable-ripple'>						{{if app.icon.indexOf('/') == -1}}							<span class='ico'><i class='font-icon {{app.icon}}'></i></span>						{{else}}							<span class='ico'><img draggable='false' ondragstart='return false;' src='{{app.icon}}'></span>						{{/if}}						<span class='name'>{{app.title}}</span>					</a>					{{/each}}				</div>			</div>			<div class='bottom mt-10'>				<input class='kui-checkbox size-small' type='checkbox' id='app-default-checkbox' {{if apps}}checked='true'{{/if}}/>				<label for='app-default-checkbox'>{{LNG['Explorer.UI.appAwaysOpen']}}</label>			</div>",
                d = kodApp.getApp(b),
                e = !1;
            lodash.isArray(d) && (e = d[0].name);
            var f = template.compile(c),
                g = f({
                    LNG: LNG,
                    apps: d,
                    defaultApp: e,
                    appAll: kodApp.getApp()
                }),
                h = $.dialog({
                    id: "dialog-app-select",
                    className: "menu-empty",
                    padding: 0,
                    fixed: !0,
                    ico: core.icon("search"),
                    resize: !0,
                    title: LNG["Explorer.UI.selectAppDesc"],
                    width: 480,
                    height: 360,
                    padding: "20px",
                    content: g,
                    ok: function() {
                        return i()
                    }
                }),
                i = function() {
                    var c = $("#app-default-checkbox").prop("checked"),
                        d = $(".app-list.active .app-item.select").attr("data-app");
                    return d ? (h.close(), kodApp.open(a, b, d), c && kodApp.setOpenUser(b, d), !0) : (Tips.tips(LNG["Explorer.UI.selectAppWarning"], "warning"), !1)
                };
            $(".tab-group .tab-item").die("click").live("click", function() {
                var a = $(this).find("[aria-controls]").attr("aria-controls");
                "app-list-support" == a ? $("#app-default-checkbox").prop("checked", !0) : $("#app-default-checkbox").prop("checked", !1)
            }), $(".app-item").die("click").live("click", function() {
                $(this).parent().find(".select").removeClass("select"), $(this).addClass("select")
            }).die("dblclick").live("dblclick", function() {
                i()
            })
        }
    })
});;
define("app/app/html", [], function(a, b) {
    var c = function(a) {
        return void 0 == a ? !1 : 0 === a.indexOf("http") ? !0 : G.shareInfo || core.pathReadable(a) ? !0 : (Tips.tips(LNG.no_permission_read_all, !1), core.playSound("error"), !1)
    };
    Hook.bind("kodApp.open.before", function(a) {
        return "folder" == a.ext ? (core.isApp("explorer") || isWap() ? ui.path.list(a.path + "/") : core.explorer(a.path), !0) : c(a.path) ? void("file" == a.ext && (a.ext = "")) : !0
    }), kodApp.openUnknow = function(a, b) {
        void 0 == b && (b = "");
        var c = G.appHost + "pluginApp/index&search=" + core.pathExt(a),
            d = "kodApp.open(pathHashDecode('" + pathHashEncode(a) + "'),false,'appOpenSetting');",
            e = "kodApp.open(pathHashDecode('" + pathHashEncode(a) + "'),false,'aceEditor');",
            f = "kodApp.download(pathHashDecode('" + pathHashEncode(a) + "'));",
            g = "core.openWindow('" + c + "');",
            h = LNG.unknow_file_try + '<a class="pl-5 pr-5" href="javascript:void(0);" onclick="',
            i = '<div class="unknow-file can-select" style="word-break:break-all;">				<div class="grey-8 bold mb-20">' + LNG.unknow_file_tips + "<br/>" + b + '</div>			    <div class="mt-5">1.' + h + d + '">' + LNG["Explorer.UI.openWith"] + '</a></div>			    <div class="mt-5">2.' + h + e + '">' + LNG["Explorer.UI.openWithText"] + '</a></div>			    <div class="mt-5">3.' + h + f + '">' + LNG.unknow_file_download + '</a></div>				<div class="mt-20">' + h + g + '">' + LNG.PluginCenter + "</a>" + LNG.unknow_plugin_search + "</div>			</div>";
        $.dialog({
            fixed: !0,
            icon: "warning",
            title: LNG.unknow_file_title,
            padding: "20px 50px",
            content: i,
            cancel: !0
        }), $(".unknow-file a").unbind("click").bind("click", function(a) {
            return $(this).parents(".artDialog").data("artDialog").close(), stopPP(a)
        })
    }, kodApp.add({
        name: "download",
        title: LNG.download,
        hidden: !0,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            if (c(a)) {
                var d = a;
                "http" != a.substr(0, 4) && (d = G.appHost + "explorer/fileDownload&accessToken=" + G.accessToken + "&path=" + urlEncode(a), "undefined" != typeof G.sharePage && (d = G.appHost + "share/fileDownload&user=" + G.user + "&sid=" + G.sid + "&path=" + urlEncode(a))), $.dialog({
                    icon: "succeed",
                    title: !1,
                    time: 1.5,
                    content: LNG.download_ready + "..."
                }), isWap() ? window.open(d) : $('<iframe src="' + d + '" style="display:none;width:0px;height:0px;"></iframe>').appendTo("body")
            }
        }
    }), kodApp.download = function(a) {
        kodApp.open(a, "", "download")
    }, kodApp.openWindow = function(a) {
        kodApp.open(a, "", "browserOpen")
    }, kodApp.add({
        name: "browserOpen",
        title: LNG.open_ie,
        sort: -100,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            var d = core.path2url(a);
            return "/" == a.substr(-1) && -1 != d.search("explorer/fileProxy&") ? Tips.tips(LNG.path_can_not_action, !1) : void(c(a) && (isWap() ? window.location.href = d : window.open(d)))
        }
    }), kodApp.add({
        name: "swfPlayer",
        title: "Flash Player",
        ext: "swf",
        icon: "x-item-file x-swf",
        callback: function(a, b) {
            $.dialog({
                resize: !0,
                fixed: !0,
                ico: core.icon(b),
                title: core.pathThis(a),
                width: "75%",
                height: "65%",
                padding: 0,
                content: core.createFlash(core.path2url(a))
            })
        }
    }), kodApp.add({
        name: "webLink",
        title: "webLink",
        ext: "url,webloc",
        sort: 10,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            core.fileGet(a, function(c) {
                if ("url" == b) {
                    var d = c.match(/URL=(.*)/);
                    if (d.length >= 2) return window.open(d[1])
                } else if ("webloc" == b) try {
                    var e = $($.parseXML(c)),
                        f = e.find("string").text();
                    return void window.open(f)
                } catch (g) {}
                kodApp.open(a, b, "editor")
            })
        }
    }), kodApp.add({
        name: "htmlView",
        title: LNG["Plugin.default.htmlView"],
        ext: "htm,html,shtml",
        sort: 10,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            var c = core.path2url(a);
            core.openDialog(c, core.icon("html"), core.pathThis(a))
        }
    }), kodApp.add({
        name: "pdfView",
        title: "PDF Simple",
        ext: "pdf",
        sort: 0,
        icon: "x-item-file x-pdf",
        callback: function(a, b) {
            var c = core.path2url(a),
                d = "pdf" + UUID(),
                e = '<div id="' + d + '" style="height:100%;">			<a href="' + c + '" target="_blank" style="display:block;margin:0 auto;margin-top:80px;font-size:16px;text-align:center;">' + LNG.error + " " + LNG.download + " PDF</a></div>";
            $.dialog({
                resize: !0,
                fixed: !0,
                ico: core.icon(b),
                title: core.pathThis(a),
                width: "80%",
                height: "75%",
                padding: 0,
                content: e
            }), PDFObject.embed(c, "#" + d)
        }
    }), kodApp.add({
        name: "oexeOpen",
        title: LNG["kodApp.oexe.open"],
        ext: "oexe",
        sort: 100,
        icon: " x-item-file x-oexe",
        callback: function(a, b) {
            core.fileGet(a, function(b) {
                var c = jsonDecode(b);
                c.name = core.pathThis(a), core.openApp(c)
            })
        }
    }), kodApp.add({
        name: "oexeEdit",
        title: LNG["kodApp.oexe.edit"],
        ext: "oexe",
        sort: 50,
        icon: "icon-edit ",
        callback: function(a, b) {
            core.fileGet(a, function(b) {
                var c = jsonDecode(b);
                c.name = core.pathThis(a), c.path = a, ui.path.pathOperate.appEdit(c)
            })
        }
    });
    var d = {
        createApp: {
            name: LNG.app_create,
            className: "createApp newfile",
            icon: "icon-puzzle-piece x-item-file x-oexe",
            callback: function(a, b) {
                ui.path.pathOperate.appEdit(0, 0, "userAdd")
            }
        }
    };
    $.contextMenu.menuAdd(d, ".menu-body-main", ".app-install"), $.contextMenu.menuAdd(d, ".toolbar-path-more", ".app-install"), $.contextMenu.menuAdd(d, ".bodymain", ".app-install"), Hook.bind("rightMenu.show", function(a, b, c) {
        var d = [".menu-folder", ".menu-file", ".menu-tree-folder", ".menu-tree-file", ".menu-tree-folder-fav"];
        if (c.find(".context-menu-submenu").fadeOut(0).delay(0).fadeIn(0), c.removeClass("menu-auto-fit"), h(b), c.inScreen() || c.addClass("menu-auto-fit"), ".menu-body-main" == a) {
            var e = c.find(".set-file-icon-size.context-menu-submenu");
            "icon" == G.userConfig.listType ? e.removeClass("hidden") : e.addClass("hidden")
        }
        if (lodash.include(d, a)) {
            var f = "disabled",
                g = ".cute,.rname,.remove",
                i = ".open,.open-text,.down,.share,.copy,.cute,.rname,.remove,.open-browser,.search,.more-action";
            b.hasClass("file-not-readable") ? c.find(i).addClass(f) : c.find(i).removeClass(f), b.hasClass("file-not-writeable") ? c.find(g).addClass(f) : c.find(g).removeClass(f)
        }
    }), Hook.bind("rightMenu.show.menu-body-main", function(a, b) {
        var c = ".upload,.past,.newfolder,.newfile",
            d = "disabled";
        lodash.get(G, "jsonData.info.canUpload") ? b.find(c).removeClass(d) : b.find(c).addClass(d)
    }), Hook.bind("rightMenu.show.menu-file", function(a, b) {
        if ($(".context-menu-active").hasClass("menu-tree-file")) var c = ui.tree.makeParam();
        else var c = ui.path.makeParam();
        var d = core.pathExt(c.path),
            e = "hidden";
        inArray(["jpg", "jpeg", "png"], d) ? b.find(".set-background").removeClass(e) : b.find(".set-background").addClass(e)
    });
    var e = function() {
            var a = ".close-item,.refresh,.newfile,.past,.info",
                b = ".open-browser",
                c = ".explorer,.create-project,.open-project",
                d = ".close-item,.newfile,.refresh,.past,.down,.copy,.cute,.remove,.more-action,.clone,.info,.zip,.zip-zip,.zip-tar,.zip-tgz",
                e = ".newfile,.cute,.past,.rname,.zip,.remove,.clone,.create-link-home,.create-link,.create-project",
                f = $(".menu-tool-path"),
                g = "hidden",
                h = ui.fileLight.fileListSelect();
            f.find(".context-menu-item").addClass(g), 0 == h.length ? f.find(a).removeClass(g) : 1 == h.length ? (f.find(".context-menu-item").removeClass(g), "folder" == ui.fileLight.type(h) ? f.find(b).addClass(g) : f.find(c).addClass(g)) : h.length > 1 && f.find(d).removeClass(g), G.jsonData && G.jsonData.info && G.jsonData.info.canUpload === !1 && f.find(e).filter(":not(." + g + ")").addClass(g)
        },
        f = function() {
            var a = ui.fileLight.fileListSelect(),
                b = $(".kod-toolbar-path .select-button-show"),
                c = "hidden";
            G.jsonData && G.jsonData.info && (0 == a.length || G.jsonData.info.pathType == G.KOD_USER_SHARE && G.jsonData.info.id != G.userID ? b.addClass("hidden") : (b.removeClass("hidden"), b.find("[data-action=share]").removeClass(c), b.find("[data-action=rname]").removeClass(c), a.length > 1 && (b.find("[data-action=share]").addClass(c), b.find("[data-action=rname]").addClass(c))))
        },
        g = function() {
            var a = lodash.get(G, "jsonData.info.pathType"),
                b = $(".kod-toolbar-share .select-button-show-share"),
                c = ui.fileLight.fileListSelect(),
                d = "hidden";
            a != G.KOD_USER_SHARE || 0 == c.length ? b.addClass("hidden") : (b.removeClass("hidden"), b.find("[data-action=shareEdit]").removeClass(d), b.find("[data-action=shareOpenWindow]").removeClass(d), c.length > 1 && (b.find("[data-action=shareEdit]").addClass(d), b.find("[data-action=shareOpenWindow]").addClass(d)))
        };
    Hook.bind("explorer.fileSelect.init", function() {
        ui.fileLight.listNumberSet()
    }), Hook.bind("explorer.fileSelect.change", function() {
        e(), f(), g(), ui.fileLight.selectNumSet()
    }), Hook.bind("rightMenu.show.toolbar-path-more", function() {
        e()
    }), Hook.bind("rightMenu.initFinished", function() {
        if (1 != G.isRoot) {
            var a = "hidden",
                b = {
                    "explorer.fileDownload": "@.down,@.download,@.share,@.open-text,[data-action=download]",
                    "explorer.search": "@.search",
                    "explorer.mkfile": "@.newfile,[data-action=newfile],@.past,@.clone",
                    "explorer.mkdir": "@.newfolder,[data-action=newfolder]",
                    "explorer.pathRname": "@.rname,[data-action=rname]",
                    "explorer.pathDelete": "@.remove,@.remove + .context-menu-separator,[data-action=remove]",
                    "explorer.pathCopy": "@.cute,@.copy,[data-action=cute],[data-action=copy]",
                    "explorer.fileUpload": "@.upload,@.upload-more,[data-action=upload],[data-action=upload-more]",
                    "explorer.unzip": "@.unzip",
                    "explorer.zip": "@.zip",
                    "userShare.set": "@.share,[data-action=share]"
                };
            setTimeout(function() {
                for (var c in b) {
                    var d = replaceAll(b[c], "@", ".context-menu-list ");
                    core.authCheck(c) || $(d).addClass(a)
                }
            }, 100), core.authCheck("explorer.fileDownload") || (kodApp.remove("browserOpen"), kodApp.remove("htmlView"))
        }
    }), Hook.bind("kodApp.callback.before", function(a, b, c) {
        return -1 == $.inArray(a.name, ["browserOpen", "htmlView", "zipView"]) || core.authCheckGroup("explorer.fileDownload", b) ? void 0 : (Tips.tips(LNG.no_permission_action, "error"), !0)
    });
    var h = function(a) {
            return
        },
        i = function() {
            if (G.authGroupRole || (G.authGroupRole = {}), lodash.get(G, "jsonData.info.pathType") == G.KOD_GROUP_PATH) {
                var a = lodash.get(G, "jsonData.info.id");
                G.authGroupRole[a] = lodash.get(G, "jsonData.info.groupRole.authArr")
            }
            h()
        };
    Hook.bind("explorer.path.ajaxLive", i)
});;
define("app/common/tpl/copyright.html", [], '<div class="dialog-copyright-content">\n	<div class="title">\n		<div class="logo">\n			<i class="icon-cloud"></i>\n			{{if kod.window.core.versionType==\'A\' && kod.window.core.versionOem !=\'ok\' }}\n			KodExplorer \n			{{else}} \n			{{LNG.kod_name}}\n			{{/if}}\n		</div>\n		<div class=\'info\'>——{{LNG.kod_name_copyright}}</div>\n	</div>\n	<div class="content">\n		<p>{{@LNG.copyright_desc}}</p>\n		<div>{{@LNG.copyright_contact}}</div>\n		<div>{{@LNG.copyright_info}}</div> \n	</div>\n</div>\n');;
define("app/common/tpl/themeDIY.html", [], "@media screen and (max-width:100000px) {\n	body .full-background{\n		position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;\n		background-color: #020202;background-size: 100% 100%;\n	}\n\n	{{if blurSize= (bgBlur==0?0:10) }}{{/if}}\n	body .full-background:before{\n		-webkit-filter: blur({{blurSize}}px);\n		-moz-filter: blur({{blurSize}}px);\n		-ms-filter: blur({{blurSize}}px);\n		filter: blur({{blurSize}}px);\n	}\n	{{if bgType == 'image'}}\n		body .full-background,\n		body .full-background:before,\n		body #body .menu-left,\n		body #body .app-menu-left,\n		body .aui-buttons,\n		body .aui-state-focus .aui-title,body .aui-title{\n			background-image:url({{bgImage}});\n		}\n		body .aui-state-focus .aui-title,body .aui-title{\n			background-size:100%;\n		}\n	{{else}}\n		body .full-background,\n		body .full-background:before,\n		body #body .menu-left, \n		body #body .app-menu-left,\n		body .aui-buttons,\n		body .aui-state-focus .aui-title,body .aui-title{\n			background:{{endColor}};\n			filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='{{startColor}}', endColorstr='{{endColor}}');\n			background-image: -webkit-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -moz-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -o-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -ms-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n		}\n	{{/if}}\n}\n");;
define("app/src/explorerWap/ui", ["./tpl/list.html"], function(a, b) {
    var c = a("./tpl/list.html"),
        d = function() {
            e(), f(), Hook.trigger("explorer.path.ajaxLive")
        },
        e = function() {
            var a = $(".bodymain");
            a.find(".lazyload-ready").lazyload({
                effect: "fadeIn",
                placeholder: G.staticPath + "images/common/loading_tree.gif",
                container: window,
                load: function(a, b) {
                    $(this).removeClass("lazyload-ready")
                }
            }).on("error", function() {
                var a = $(this).data("errorReload");
                if (a) {
                    if ("1" == a) {
                        $(this).parent().attr("filetype");
                        $(this).attr("src", G.staticPath + "images/file_icon/icon_file/picture_error.png"), $(this).data("errorReload", "2")
                    }
                } else $(this).attr("src", $(this).attr("src") + "#" + UUID()), $(this).data("errorReload", "1")
            })
        },
        f = function() {
            $(".file-continer .flex-empty").remove();
            for (var a = "", b = 0; 10 > b; b++) a += '<div class="flex-empty"></div>';
            $(a).appendTo(".file-continer")
        },
        g = function(a) {
            template.helper("fileIconMake", h);
            for (var b = template.compile(c), e = "", f = G.jsonData.folderList.concat(G.jsonData.fileList), g = 0; g < f.length; g++) {
                var i = "folder" == f[g].type ? "list-folder" : "list-file",
                    j = {
                        LNG: LNG,
                        G: G,
                        list: f[g],
                        index: g,
                        type: i
                    };
                e += b(j)
            }
            "" == e && (e = '<div class="path-is-null">' + LNG.path_null + "</div>"), e += "<div style='clear:both'></div>", a ? $(Config.FileBoxSelector).hide().html(e).fadeIn(Config.AnimateTime) : $(Config.FileBoxSelector).html(e);
            var k = $(Config.FileBoxClass).not(".systemBox");
            $('<div class="file-action icon-font icon-ellipsis-horizontal"></div>').appendTo(k), $(Config.FileBoxSelector + " .file:nth-child(2n)").addClass("file2"), d()
        },
        h = function(a, b, c) {
            var d = "icon" != b,
                e = htmlEncode(urlEncode(c.ext));
            if ("folder" == a) {
                var f = Hook.trigger("explorer.list.folderThumb", c.path, e);
                return "string" == $.type(f) ? f : (a = c.ext || a, core.icon(a, d))
            }
            var f = Hook.trigger("explorer.list.fileThumb", c.path, e, c);
            if ("string" == $.type(f)) return f;
            if (inArray(["jpg", "jpeg", "png", "bmp", "gif", "ico", "svg", "cur", "webp"], e)) {
                var g = G.appHost + "explorer/image";
                return G.sid && (g = G.appHost + "share/image&user=" + G.user + "&sid=" + G.sid), g += "&time=" + strtotime(c.mtime) + "&path=", "<div class='picture ico' filetype='" + e + "'><img class='lazyload-ready' data-original='" + g + htmlEncode(urlEncode(c.path)) + "' draggable='false' ondragstart='return false;'/></div>"
            }
            if ("app_link" == c.type) {
                var h = core.icon("folder");
                0 == c.content.search("ui.path.open") ? h = core.icon(core.pathExt(c.name.replace(".oexe", ""))) : 0 == c.content.search("ui.path.list") && (h = core.icon(c.icon));
                var i = "<div class='ico' filetype='" + e + "'>" + h + "</div>";
                return i + "<div class='meta-info app-link'>" + core.icon("app-link") + "</div>"
            }
            if (c.icon && "oexe" == e) {
                var j = c.icon;
                return "string" == $.type(c.icon) && -1 == c.icon.search(G.staticPath) && "http" != c.icon.substring(0, 4) && (j = G.staticPath + "images/file_icon/icon_app/" + c.icon), "<div class='ico' filetype='" + e + "'>" + core.iconSrc(j) + "</div>"
            }
            return "<div class='ico' filetype='" + e + "'>" + core.icon(e, d) + "</div>"
        },
        i = function(a, b, c) {
            var d = G.appHost + "explorer/pathList&path=" + urlEncode(G.thisPath);
            G.user && (d = G.appHost + "share/pathList&user=" + G.user + "&sid=" + G.sid + "&path=" + urlEncode(G.thisPath)), void 0 == a && (a = !0), void 0 == b && (b = !1), a ? $.ajax({
                url: d,
                dataType: "json",
                beforeSend: function() {
                    $(".tools-left .msg").stop(!0, !0).fadeIn(100)
                },
                success: function(a) {
                    return $(".tools-left .msg").fadeOut(100), a.code ? (G.jsonData = m(a.data), g(b), u(), void ui.header.addressSet()) : (Tips.tips(a), $(Config.FileBoxSelector).html(""), !1)
                },
                error: function(a, b, c) {
                    $(".tools-left .msg").fadeOut(100), $(Config.FileBoxSelector).html(""), core.ajaxError(a, b, c)
                }
            }) : (g(b), u())
        },
        j = function(a) {
            i(!0, !1, a)
        },
        k = function(a, b, c) {
            var b = "down" == b ? -1 : 1;
            return function(d, e) {
                var f = pathTools.strSort(d[a], e[a]);
                return 0 == f && "function" == typeof c ? c(d, e) : f * b
            }
        },
        l = function(a, b, c) {
            var b = "down" == b ? -1 : 1;
            return function(d, e) {
                var f = d[a] > e[a] ? 1 : d[a] == e[a] ? 0 : -1;
                return 0 == f && "function" == typeof c ? c(d, e) : f * b
            }
        },
        m = function(a) {
            a = p(a);
            var b, c = 600,
                d = G.userConfig.listSortField,
                e = G.userConfig.listSortOrder;
            return d = "name", e = "up", b = a.folderList.length > c ? l : k, a.folderList = a.folderList.sort(b(d, e, b("name", e))), b = a.fileList.length > c ? l : k, a.fileList = a.fileList.sort(b(d, e, b("name", e))), a
        },
        n = function(a) {
            for (var b in G.selfShare)
                if (core.pathClear(G.selfShare[b].path) == core.pathClear(a)) return !0;
            return !1
        },
        o = function(a) {
            var b = G.fav_list;
            for (var c in b)
                if (core.pathClear(c) == core.pathClear(a)) return !0;
            return !1
        },
        p = function(a) {
            if (!a) return a;
            if (void 0 != a.shareList && (selfShare = a.shareList), a.filterSuccess === !0) return a;
            for (var b in a)
                if ("fileList" == b || "folderList" == b)
                    for (var c = 0; c < a[b].length; c++) {
                        var d = a[b][c];
                        if (d.name = htmlEncode(d.name), d.mtime && d.mtime.toString().length <= 11)
                            if (d.atime = date(LNG.time_type, d.atime), d.ctime = date(LNG.time_type, d.ctime), a.info && a.info.pathType == G.KOD_USER_SHARE && -1 == trim(a.thisPath, "/").indexOf("/")) {
                                var e = parseInt(d.numView);
                                e = isNaN(e) ? 0 : e;
                                var f = parseInt(d.numDownload);
                                f = isNaN(f) ? 0 : f;
                                var g = date("Y/m/d ", d.mtime) + "  ";
                                g += LNG.share_view_num + e + "  " + LNG.share_download_num + f, d.mtime = g
                            } else d.mtime = date(LNG.time_type, d.mtime);
                        n(d.path) ? d.metaInfo = "path-self-share" : o(d.path) && (d.metaInfo = "tree-fav"), "number" == typeof d.isReadable && 0 == d.isReadable ? d.mode = "[" + LNG.not_read + "] " + d.mode : "number" == typeof d.isWriteable && 1 == d.isWriteable ? d.mode = "[" + LNG.system_role_write + "] " + d.mode : "number" == typeof d.isReadable && 1 == d.isReadable && (d.mode = "[" + LNG.only_read + "] " + d.mode)
                    }
            return a.filterSuccess = !0, a
        },
        q = function(a, b) {
            var c = pathHashDecode(a.attr("data-path")),
                d = a.find(".ico").attr("filetype");
            switch (b) {
                case "action-copy":
                    ui.path.copy(c, d);
                    break;
                case "action-cute":
                    ui.path.cute(c, d);
                    break;
                case "action-rname":
                    ui.path.rname(c);
                    break;
                case "action-info":
                    ui.path.info(c, d);
                    break;
                case "action-download":
                    ui.path.download(c, d);
                    break;
                case "action-customshare":
                    ui.path.customshare(c, d);
                    break;    
                case "action-remove":
                    ui.path.remove(c, d);
                    break;
                case "action-share":
                    ui.path.share(c, d);
                    break;
                case "action-share-open":
                    var e = G.appHost + "share/file&sid=" + G.sid + "&user=" + G.user + "&path=" + urlEncode(c);
                    window.open(e);
                    break;
                case "action-share-link":
                    var f = "folder" == d ? "folder" : "file";
                    G.appHost + "share/" + f + "&sid=" + G.sid + "&user=" + G.user + "&path=" + urlEncode(c);
                    return
            }
        },
        r = function() {
            1 == LocalData.get("wrap-file-list") && ($(".btn-list-icon").addClass("active"), $(".file-list-list").addClass("icon")), $(".btn-list-icon").click(function() {
                $(this).toggleClass("active"), $(".file-list-list").toggleClass("icon"), $(this).hasClass("active") ? LocalData.set("wrap-file-list", 1) : LocalData.set("wrap-file-list", 0)
            })
        },
        s = function(a) {
            var b = $(".file-continer .file .file-action-menu"),
                c = $(".file-continer").hasClass("icon");
            if (c = !0, a) b.removeClass("hidden"), c ? b.css({
                bottom: "-" + b.height() + "px"
            }).animate({
                bottom: "0px"
            }, 100, 0, function() {}) : b.css({
                opacity: "0"
            }).animate({
                opacity: "1"
            }, 100, 0, function() {});
            else {
                var d = {
                    opacity: "0"
                };
                c && (d = {
                    bottom: "-" + b.height() + "px"
                }), b.animate(d, 100, 0, function() {
                    $(this).remove()
                })
            }
        },
        t = function() {
            $(window).bind("hashchange", function() {
                var a = window.location.href,
                    b = a.split("#");
                b[1] && "undefined%2F" != b[1] && "" != b[1] && b[1] != G.thisPath && b[1] != urlEncode(G.thisPath) && ui.path.list(urlDecode(b[1]))
            }), $(window).bind("resize", function() {
                x()
            }), r(), $(".file-continer .file").die("click").live("click", function(a) {
                if (s(!1), $(this).find(".file-action-menu").exists()) {
                    var b = $(a.target);
                    return $(a.target).hasClass("action-menu") || (b = $(a.target).parents(".action-menu")), void q($(this), b.attr("data-action"))
                }
                if ($(a.target).hasClass("file-action")) {
                    var b = $(".file-menu .file-action-menu").clone(),
                        c = !0;
                    return $(a.target).parent().hasClass("file-not-writeable") ? c = !1 : G.jsonData.info && G.jsonData.info.canUpload || (c = !1), c || (b.find("[data-action=action-cute]").remove(), b.find("[data-action=action-remove]").remove(), b.find("[data-action=action-rname]").remove()), b.appendTo($(this)), void s(!0)
                }
                var d = $(this).find(".ico").attr("filetype"),
                    e = pathHashDecode($(this).attr("data-path"));
                ui.path.open(e, d, $(this)), stopPP(a)
            }), $(".address li").die("click").live("click", function(a) {
                var b = $(this).find("a").attr("data-path");
                ui.path.list(b), stopPP(a)
            }), $("body").bind("click", function(a) {
                $(a.target).parents(".file-continer").exists() || s(!1)
            })
        },
        u = function(a) {
            if (G.jsonData.info) {
                var b = G.jsonData.info,
                    c = b.pathType,
                    d = G.jsonData.pathReadWrite;
                void 0 != d && "writeable" != d || c == G.KOD_USER_RECYCLE || c == G.KOD_USER_SHARE || c == G.KOD_GROUP_SHARE ? G.jsonData.info.canUpload = !1 : (G.jsonData.info.canUpload = !0, 1 != G.isRoot && c == G.KOD_GROUP_PATH && "guest" == b.role && (G.jsonData.info.canUpload = !1)), core.isSystemPath(G.thisPath) ? $(".toolbar-menu").addClass("hidden") : $(".toolbar-menu").removeClass("hidden"), G.jsonData.info.canUpload ? $("[data-action=upload],[data-action=newfolder],[data-action=newfile],[data-action=past]").removeClass("hidden") : $("[data-action=upload],[data-action=newfolder],[data-action=newfile],[data-action=past]").addClass("hidden")
            }
        },
        v = function(a) {
            a ? ($(".panel-menu").show().animate({
                left: "0px"
            }, 200, function() {
                $("body").addClass("menu-open")
            }), $(".panel-mask").hide().fadeIn(200)) : ($(".panel-menu").animate({
                left: "-210px"
            }, 200, function() {
                $(".panel-menu").hide(), $("body").removeClass("menu-open")
            }), $(".panel-mask").show().fadeOut(200))
        },
        w = function() {
            $.ajax({
                url: G.appHost + Config.treeAjaxURL + "&type=init",
                dataType: "json",
                success: function(a) {
                    a.code || Tips.tips(a);
                    for (var b = "", c = 0; c < a.data.length; c++) {
                        var d = a.data[c];
                        b += '<li data-action="open-path" data-path="' + d.path + '"><i class="x-item-file x-' + d.ext + '"></i><span>' + d.name + "</span></li>"
                    }
                    b += '<li data-action="exit"><i class="x-item-file x-logout"></i><span>' + LNG.ui_logout + "</span></li>", $(".left-menu-path").html(b), $(".panel-menu li").bind("click", function() {
                        v(!1);
                        var a = $(this).attr("data-action"),
                            b = $(this).attr("data-path");
                        setTimeout(function() {
                            switch (a) {
                                case "open-path":
                                    ui.path.list(b);
                                    break;
                                case "exit":
                                    window.location.href = G.appHost + "user/logout"
                            }
                        }, 20)
                    })
                }
            })
        },
        x = function() {
            var a = $(".address"),
                b = $(window).width(),
                c = 0;
            a.stop(!0, !0), a.find(".yarnlet").each(function(a) {
                c += $(this).outerWidth() + 8
            });
            var d = b - c;
            d >= 0 && (d = 0), a.css("width", "100%").animate({
                left: d + "px"
            }, 150)
        };
    return {
        f5: i,
        f5Callback: j,
        init: function() {
            if ("" == G.thisPath) {
                var a = window.location.href.split("#");
                if (2 == a.length && "" != trim(urlDecode(a[1]))) {
                    var b = a[1].split("&");
                    G.thisPath = urlDecode(b[0])
                } else {
                    var c = G.userID || G.sid,
                        d = LocalData.get("thisPath:" + c);
                    d ? G.thisPath = d : G.thisPath = G.myhome
                }
            }
            j(function() {
                i(!1, !0)
            }), w(), t(), ui.header.bindEvent()
        },
        header: {
            bindEvent: function() {
                $(".tool-menu-left").on("click", function() {
                    v(!0)
                }), $(".panel-mask").on("click", function() {
                    v(!1)
                }), $(".tool-menu-right li").on("click", function(a) {
                    $(".toolbar-menu").removeClass("open");
                    var b = $(this).attr("data-action");
                    switch (b) {
                        case "upload":
                            core.upload(), setTimeout(function() {
                                $("#picker .webuploader-element-invisible").click()
                            }, 100);
                            break;
                        case "newfolder":
                            ui.path.newFolder();
                            break;
                        case "newfile":
                            ui.path.newFile("txt");
                            break;
                        case "search":
                            ui.path.search("", G.thisPath);
                            break;
                        case "past":
                            ui.path.past()
                    }
                    return !1
                }), G.shareInfo && G.shareInfo.canUpload && $("[data-action=upload]").removeClass("hidden")
            },
            addressSet: function() {
                var a = G.thisPath,
                    b = function(a) {
                        var b = '<li class="yarnlet first"><a title="@1@" data-path="@1@" style="z-index:{$2};"><span class="left-yarn"></span>{$3}</a></li>',
                            c = '<li class="yarnlet "><a title="@1@" data-path="@1@" style="z-index:{$2};">{$3}</a></li>';
                        a = a.replace(/\/+/g, "/");
                        var d = a.split("/");
                        "" == d[d.length - 1] && d.pop();
                        var e = d[0] + "/",
                            f = b.replace(/@1@/g, e),
                            g = d[0],
                            h = "";
                        if (G.jsonData.info && G.jsonData.info.pathType && "" != d[0]) {
                            var i = core.getPathIcon(G.jsonData.info, G.jsonData.info.name);
                            h = '<span class="address-ico">' + core.iconSmall(i.icon) + "</span>", g = i.name
                        }
                        f = f.replace("{$2}", d.length), f = f.replace("{$3}", h + '<span class="title-name">' + htmlEncode(g) + "</span>");
                        for (var j = f, k = 1, l = d.length - 1; k < d.length; k++, l--) {
                            e += htmlEncode(d[k]) + "/";
                            var f = c.replace(/@1@/g, e);
                            f = f.replace("{$2}", l), f = f.replace("{$3}", '<span class="title-name">' + htmlEncode(urlDecode(d[k])) + "</span>"), j += f
                        }
                        return j
                    };
                $(".frame-main .address ul").html(b(a)), "" == $(".yarnlet.first .title-name").html() && $(".yarnlet.first .title-name").html("/"), x();
                var c = $(".yarnball .yarnlet").last().find(".title-name").text();
                $("title").html(c + LNG.kod_power_by)
            },
            gotoPath: function() {
                var a = $("input.path").val();
                a = a.replace(/\\/g, "/"), $("input.path").val(a), "/" != a.substr(a.length - 1, 1) && (a += "/"), ui.path.list(a), ui.header.addressSet()
            }
        }
    }
});;
define("app/src/explorerWap/tpl/list.html", [], "<!-- 列表模式文件夹 -->\n{{if type=='list-folder'}}\n<div data-path='{{list.path |kod.window.pathHashEncode}}'\nclass='file\n{{if index%2==0}}file2{{/if}} {{list.menuType}}\n{{if list.menuType}}systemBox{{else}}folder-box menu-folder{{/if}}\n{{if typeof(list.exists)==\"number\" && list.exists==0}}file-not-exists{{/if}}\n{{if !list.sid && typeof(list.isReadable)!=\"undefined\"}}\n{{if !list.isWriteable}} file-not-writeable{{/if}}\n{{if !list.isReadable}} file-not-readable{{/if}}{{/if}}'\ntitle='{{LNG.permission}}:{{list.mode}}&#10;{{LNG.modify_time}}:{{list.mtime}}'\ndata-size=\"0\">\n	<div class='ico' filetype='folder'>\n		{{fileIconMake('folder','list',list)}}\n	</div>\n	{{if list.metaInfo}}  \n		<div class='meta-info {{list.metaInfo}}'>{{list.metaInfo |kod.core.icon}}</div>\n	{{/if}}\n	<div class='filename'>\n		<span class='title'>{{list.name}}</span>\n	</div>\n	<!-- <div class='filetype'>{{LNG.folder}}</div> -->\n	<div class='filesize'></div>\n	<div class='filetime'>{{list.mtime?list.mtime:''}}</div>\n	<div style='clear:both'></div>\n</div>\n\n<!-- 列表模式文件 -->\n{{else if type=='list-file'}}\n<div data-path='{{list.path |kod.window.pathHashEncode}}'\nclass='file {{if index%2==0}}file2{{/if}} {{list.menuType}}\n{{if list.menuType}}systemBox{{else}}file-box menu-file{{/if}}\n{{if typeof(list.exists)==\"number\" && list.exists==0}}file-not-exists{{/if}}\n{{if !list.sid && typeof(list.isReadable)!=\"undefined\"}}\n{{if !list.isWriteable}} file-not-writeable{{/if}}\n{{if !list.isReadable}} file-not-readable{{/if}}{{/if}}'\n{{if list.ext=='oexe'}} data-app='{{kod.window.base64Encode(kod.window.jsonEncode(list))}}'{{/if}}\ntitle='{{LNG.size}}:{{list.size |pathTools.fileSize}}&#10;{{LNG.modify_time}}:{{list.mtime}}'\ndata-size=\"{{list.size}}\">\n	{{fileIconMake('file','list',list)}}\n	{{if list.metaInfo}}\n		<div class='meta-info {{list.metaInfo}}'>{{list.metaInfo |kod.core.icon}}</div>\n	{{/if}}\n\n	<div class='filename'>\n		<span class='title'>\n			{{if list.ext=='oexe'}}{{list.name.replace('.oexe','')}}{{else}}{{list.name}}{{/if}}\n		</span>\n	</div>\n	<!-- <div class='filetype'>{{list.ext |kod.window.htmlEncode}} {{LNG.file}}</div> -->\n	<div class='filesize'>{{list.size |pathTools.fileSize}}</div>\n	<div class='filetime'>{{list.mtime}}</div>\n	<div style='clear:both'></div>\n</div>\n{{/if}}\n");;
define("app/src/explorerWap/path", ["../../path/pathOperate", "../../path/tpl/share.html", "../../path/tpl/fileinfo/fileInfo.html", "../../path/tpl/fileinfo/pathInfo.html", "../../path/tpl/fileinfo/pathInfoMore.html", "../../path/tpl/appEdit.html", "../../path/clipboard", "../../path/search", "../../path/tpl/search.html", "../../path/tpl/searchList.html"], function(a, b) {
    var c = a("../../path/pathOperate"),
        d = a("../../path/clipboard"),
        e = a("../../path/search"),
        f = function(a, b, c) {
            if (void 0 != a) {
                if (a == G.thisPath) return void(void 0 != b && "" != b && Tips.tips(LNG.path_is_current, "info"));
                "undefined/" == a && (a = G.myhome), G.thisPath = a.replace(/\\/g, "/"), G.thisPath = a.replace(/\/+/g, "/"), "/" != G.thisPath.substr(G.thisPath.length - 1) && (G.thisPath += "/");
                var d = window.location.origin + window.location.pathname + window.location.search;
                window.location.href = d + "#" + urlEncode(G.thisPath), ui.f5Callback(function() {
                    "function" == typeof c && c()
                })
            }
        },
        g = function(a, b, c) {
            void 0 != a && ("folder" == b ? ui.path.list(a + "/") : (kodApp.setLastOpenTarget(c), kodApp.open(a, b), j()))
        },
        h = function() {
            kodApp.setOpenUserLocal(!1, "photoSwipe"), kodApp.setOpenUserLocal(["html", "htm"], "browserOpen"), kodApp.openUnknow = function(a, b) {
                void 0 == b && (b = "");
                var c = "kodApp.open(pathHashDecode('" + pathHashEncode(a) + "'),false,'browserOpen');",
                    d = "kodApp.download(pathHashDecode('" + pathHashEncode(a) + "'));",
                    e = LNG.unknow_file_try + '<a class="pl-5 pr-5" href="javascript:void(0);" onclick="',
                    f = '<div class="unknow-file can-select" style="word-break:break-all;">					<div class="grey-8 bold mb-20">' + LNG.unknow_file_tips + "<br/>" + b + '</div>				    <div class="mt-5">1.' + e + c + '">' + LNG.open_ie + '</a></div>				    <div class="mt-5">2.' + e + d + '">' + LNG.unknow_file_download + "</a></div>				</div>";
                $.dialog({
                    fixed: !0,
                    icon: "warning",
                    title: LNG.unknow_file_title,
                    padding: "20px 50px",
                    content: f,
                    cancel: !0
                }), $(".unknow-file a").unbind("click").bind("click", function(a) {
                    return $(this).parents(".artDialog").data("artDialog").close(), stopPP(a)
                })
            }
        },
        j = function() {
            if ($(".artDialog").exists()) {
                var a = $(".artDialog").data().artDialog;
                if (a.hasFrame()) {
                    $(".artDialog").addClass("hidden");
                    var b = a.DOM.wrap.find("iframe").attr("src");
                    a.close(), window.location.href = b
                }
            }
        },
        k = function(a, b, c) {
            var d = a.length;
            for (i = 0; i < d; i++)
                if (a[i][b] == c) return a[i]
        },
        l = function(a) {
            var b = "",
                c = 0;
            return null != G.jsonData.fileList && (b = k(G.jsonData.fileList, "name", a), null != b && (c = 1)), null != G.jsonData.folderList && (b = k(G.jsonData.folderList, "name", a), null != b && (c = 1)), c
        },
        m = function(a, b) {
            var c, d = 0;
            if (void 0 == b) {
                if (!l(a)) return a;
                for (c = a + "(0)"; l(c);) d++, c = a + "(" + d + ")";
                return c
            }
            if (!l(a + "." + b)) return a + "." + b;
            for (c = a + "(0)." + b; l(c);) d++, c = a + "(" + d + ")." + b;
            return c
        },
        n = function() {
            $.dialog.prompt("", function(a) {
                return "" == trim(a) ? Tips.tips(LNG.error, !1) : void c.newFolder(G.thisPath + a, function() {
                    ui.f5()
                })
            }, m(LNG.newfolder))
        },
        o = function() {
            $.dialog.prompt("", function(a) {
                return "" == trim(a) ? Tips.tips(LNG.error, !1) : void c.newFile(G.thisPath + a, function() {
                    ui.f5()
                })
            }, m(LNG.newfile, "txt"));
            q($(".prompt-input input"))
        },
        p = function(a) {
            $.dialog.prompt("", function(b) {
                var d = core.pathFather(a) + b;
                c.rname(a, d, function() {
                    ui.f5()
                })
            }, core.pathThis(a));
            q($(".prompt-input input"))
        },
        q = function(a) {
            setTimeout(function() {
                var b = a.val();
                a.blur(), -1 == b.lastIndexOf(".") ? a.textSelect(0, b.length) : a.textSelect(0, b.lastIndexOf("."))
            }, 100)
        },
        r = function(a, b, c) {
            return "folder" != c && (c = "file"), a ? [{
                path: b,
                type: c
            }] : {
                path: b,
                type: c
            }
        };
    return {
        init: h,
        search: e,
        pathOperate: c,
        download: function(a, b) {
            "folder" == b ? c.zipDownload([{
                path: a,
                type: "folder"
            }]) : kodApp.download(a)
        },
        customshare: function(a, b) {
            let url = G.appRoot + core.pathUrlEncode(a.replace(G.basicPath,''));
            // console.log(url, a, G.basicPath); //G.thisPath
            "folder" == b ? c.zipDownload([{
                path: a,
                type: "folder"
            }]) : customshare(url)
        },
        remove: function(a, b) {
            c.remove(r(!0, a, b), ui.f5)
        },
        info: function(a, b) {
            c.info(r(!0, a, b))
        },
        copy: function(a, b) {
            d.copy(r(!0, a, b))
        },
        cute: function(a, b) {
            d.cute(r(!0, a, b), ui.f5)
        },
        past: function() {
            d.past(G.thisPath, ui.f5)
        },
        share: function(a, b) {
            c.share(r(!1, a, b))
        },
        open: g,
        list: f,
        newFolder: n,
        newFile: o,
        rname: p
    }
});;
define("app/path/pathOperate", ["./tpl/share.html", "./tpl/fileinfo/fileInfo.html", "./tpl/fileinfo/pathInfo.html", "./tpl/fileinfo/pathInfoMore.html", "./tpl/appEdit.html"], function(a, b) {
    var c = ["/", "\\", ":", "*", "?", '"', "<", ">", "|"],
        d = ["/", "\\"],
        e = function(a) {
            var b = function(a, b) {
                    for (var c = b.length, d = 0; c > d; d++)
                        if (a.indexOf(b[d]) > 0) return !0;
                    return !1
                },
                e = d;
            return G.systemOS && "windows" == G.systemOS && (e = c), b(a, e) ? (Tips.tips(LNG.path_not_allow + ":    " + e.join(", "), !1), !1) : !0
        },
        f = function(a) {
            for (var b = [], c = function(a) {
                    return a ? a.replace(/"/g, '\\\\"') : a
                }, d = 0; d < a.length; d++) b.push({
                type: c(a[d].type),
                path: urlEncode(c(a[d].path))
            });
            return "dataArr=" + jsonEncode(b)
        },
        g = function(a, b) {
            if (a) {
                var c = core.pathThis(a);
                return e(c) ? void $.ajax({
                    dataType: "json",
                    url: G.appHost + "explorer/mkfile&path=" + urlEncode(a),
                    beforeSend: function() {
                        "function" == typeof b && Tips.loading()
                    },
                    error: core.ajaxError,
                    success: function(a) {
                        "function" == typeof b && (Tips.close(a), b(a && a.info ? a.info : !1))
                    }
                }) : void("function" == typeof b && b())
            }
        },
        h = function(a, b) {
            if (a) {
                var c = core.pathThis(a);
                return e(c) ? void $.ajax({
                    dataType: "json",
                    url: G.appHost + "explorer/mkdir&path=" + urlEncode(a),
                    beforeSend: function() {
                        "function" == typeof b && Tips.loading()
                    },
                    error: core.ajaxError,
                    success: function(a) {
                        "function" == typeof b && (Tips.close(a), b(a && a.info ? a.info : !1))
                    }
                }) : void("function" == typeof b && b())
            }
        },
        i = function(a, b, c) {
            return a && b && a != b ? e(core.pathThis(b)) ? void $.ajax({
                type: "POST",
                dataType: "json",
                url: G.appHost + "explorer/pathRname",
                data: "path=" + urlEncode(a) + "&rnameTo=" + urlEncode(b),
                beforeSend: function() {
                    Tips.loading()
                },
                error: core.ajaxError,
                success: function(a) {
                    Tips.close(a), "function" == typeof c && c(a && a.info ? a.info : !1)
                }
            }) : void("function" == typeof c && c()) : void 0
        },
        j = function(a, b, c, d) {
            if (c = void 0 == c ? !1 : c, d = void 0 == d ? !1 : d, window.event && window.event.shiftKey && (d = !0), !(a.length < 1)) {
                var e = LNG.remove_title,
                    g = LNG.remove_info,
                    h = G.appHost + "explorer/pathDelete",
                    i = f(a);
                if ("share" == a[0].type && (e = LNG.share_remove, g = LNG.share_remove_tips, h = G.appHost + "userShare/del"), d && (g = LNG.remove_info_force, e = LNG.remove_title_force, h += "&shiftDelete=1"), ("recycle-clear" == a[0].type || G.USER_RECYCLE && G.thisPath == G.USER_RECYCLE || G.thisPath == core.pathFather(G.myhome) + "recycle_kod/") && (g = LNG.recycle_clear_info, h = G.appHost + "explorer/pathDeleteRecycle", e = LNG.recycle_clear, "recycle-clear" == a[0].type && (i = "postEmpty=1")), a[0] && a[0].path) {
                    var j = "<b>" + htmlEncode(core.pathThis(a[0].path)) + "</b>";
                    "share" == a[0].type && G.selfShare[a[0].path] && (j = "<b>" + htmlEncode(G.selfShare[a[0].path].name) + "</b>"), g = a.length > 1 ? j + ' ... <span class="label label-warning">' + a.length + LNG.remove_item + "</span><br/>" + g : j + "<br/>" + g
                }
                var k = function() {
                    $.ajax({
                        url: h,
                        type: "POST",
                        dataType: "json",
                        data: i,
                        beforeSend: function() {
                            Tips.loading()
                        },
                        error: core.ajaxError,
                        success: function(c) {
                            if (Tips.close(c), ShareData.frameTop("", function(a) {
                                    a.ui.f5()
                                }), "share" == a[0].type) {
                                G.selfShare = c.info;
                                var d = $.dialog.list["share-dialog"];
                                d && d.close()
                            }
                            e == LNG.recycle_clear ? core.playSound("recycle_clear") : core.playSound("file_remove"), "function" == typeof b && b(c)
                        }
                    })
                };
                c ? k() : $.dialog({
                    id: "dialog-path-remove",
                    fixed: !0,
                    icon: "question",
                    title: e,
                    padding: "40px 40px",
                    lock: !0,
                    background: "#000",
                    opacity: .1,
                    content: "<div style='width:200px'>" + g + "</div>",
                    ok: k,
                    cancel: !0
                })
            }
        },
        k = function(a) {
            if (core.authCheck("explorer.fileDownload", !0) && !(a.length < 1)) {
                var b = G.appHost + "explorer/zipDownload";
                "undefined" != typeof G.sharePage && (b = G.appHost + "share/zipDownload&user=" + G.user + "&sid=" + G.sid), $.ajax({
                    url: b,
                    type: "POST",
                    dataType: "json",
                    data: f(a),
                    beforeSend: function() {
                        Tips.loading(LNG.zip_download_ready)
                    },
                    error: core.ajaxError,
                    success: function(a) {
                        Tips.close(a), Tips.tips(a);
                        var b = G.appHost + "explorer/fileDownloadRemove&path=" + urlEncode(a.info);
                        b += "&accessToken=" + G.accessToken, "undefined" != typeof G.sharePage && (b = G.appHost + "share/fileDownloadRemove&user=" + G.user + "&sid=" + G.sid + "&path=" + urlEncode(a.info)), $.dialog({
                            icon: "succeed",
                            title: !1,
                            time: 2,
                            content: LNG.download_ready + "..."
                        }), $('<iframe src="' + b + '" style="display:none;width:0px;height:0px;"></iframe>').appendTo("body")
                    }
                })
            }
        },
        l = function(a, b, c) {
            a.length < 1 || (c || (c = "zip"), $.ajax({
                url: G.appHost + "explorer/zip&fileType=" + c,
                type: "POST",
                dataType: "json",
                data: f(a),
                beforeSend: function() {
                    Tips.loading(LNG.ziping)
                },
                error: core.ajaxError,
                success: function(a) {
                    Tips.close(a), a.code && core.playSound("drag_drop"), "function" == typeof b && b(a.info)
                }
            }))
        },
        m = function(a, b, c) {
            if (a) {
                var d = function(a) {
                        $.ajax({
                            url: a,
                            beforeSend: function() {
                                Tips.loading(LNG.unziping)
                            },
                            error: core.ajaxError,
                            success: function(a) {
                                Tips.close(a), "function" == typeof b && b(a)
                            }
                        })
                    },
                    e = G.appHost + "explorer/unzip&path=" + urlEncode(a);
                "toThis" == c && (e += "&toThis=1"), "toFolder" == c ? core.api.pathSelect({
                    type: "folder",
                    title: LNG.unzip_to
                }, function(a) {
                    e += "&pathTo=" + a, d(e)
                }) : d(e)
            }
        },
        n = function(a) {
            var b = a.path,
                c = core.pathPre(b);
            if (c == G.KOD_GROUP_PATH || c == G.KOD_GROUP_SHARE || c == G.KOD_USER_SHARE) return void Tips.tips(LNG.path_can_not_share, "warning");
            var d = "folder" == a.type ? "folder" : "file";
            b.length < 1 || core.authCheck("userShare.set", !0) && $.ajax({
                url: G.appHost + "userShare/checkByPath&path=" + urlEncode(b),
                dataType: "json",
                error: core.ajaxError,
                success: function(a) {
                    if (a.code) o(a.data);
                    else {
                        G.selfShare = a.info;
                        var c = {
                            path: b,
                            type: d,
                            name: core.pathThis(b)
                        };
                        p(c, function(a) {
                            a.code ? (G.selfShare = a.info, ui.f5(), o(a.data)) : (Tips.tips(a), o(void 0, function() {
                                $(".content-info input[name=type]").val(d), $(".content-info input[name=path]").val(b), $(".content-info input[name=name]").val(core.pathThis(b) + "(1)"), "file" == d && ($(".label-code-read").addClass("hidden"), $(".label-can-upload").addClass("hidden"))
                            }))
                        })
                    }
                }
            })
        },
        o = function(b, c) {
            0 != $(".share-dialog").length && $(".share-dialog").shake(3, 30, 100), a.async(["lib/jquery.datetimepicker/jquery.datetimepicker.css", "lib/jquery.datetimepicker/jquery.datetimepicker.js"], function() {
                q(b), void 0 != c && c()
            })
        },
        p = function(a, b) {
            $.ajax({
                url: G.appHost + "userShare/set",
                data: a,
                type: "POST",
                dataType: "json",
                beforeSend: function(a) {
                    $(".share-create-button").addClass("disabled")
                },
                error: function() {
                    Tips.tips(LNG.error, !1)
                },
                success: function(a) {
                    $(".share-create-button").removeClass("disabled"), void 0 != b && b(a)
                }
            })
        },
        q = function(b) {
            var c = a("./tpl/share.html"),
                d = template.compile(c),
                e = d({
                    LNG: LNG
                });
            $.dialog({
                id: "share-dialog",
                simple: !0,
                resize: !1,
                width: "425px",
                title: LNG.share,
                padding: "0",
                fixed: !0,
                content: e
            });
            var f = "zh-CN" == G.lang ? "ch" : "en";
            $("#share-time").datetimepicker({
                format: "Y/m/d H:i",
                formatDate: "Y/m/d H:i",
                minDate: date("Y/m/d H:i", time() - 86400),
                timepicker: !0,
                lang: f
            }), $("#share-time").unbind("blur").bind("blur", function(a) {
                stopPP(a)
            });
            var g = function(a) {
                    if (Hook.trigger("explorer.path.share.uiInitStart"), $(".share-setting-more").addClass("hidden"), void 0 == a) $(".share-has-url").addClass("hidden"), $(".share-bottom-action .share-remove-button").addClass("hidden"), $(".content-info input[name=sid]").val(""), $(".content-info input[name=type]").val(""), $(".content-info input[name=name]").val(""), $(".content-info input[name=showName]").val(""), $(".content-info input[name=path]").val(""), $(".content-info input[name=timeTo]").val(""), $(".content-info input[name=sharePassword]").val(""), $(".share-view-info").addClass("hidden");
                    else {
                        a.options && (a.codeRead = a.options.codeRead, a.canUpload = a.options.canUpload, a.notDownload = a.options.notDownload), "undefined" == typeof a.canUpload && (a.canUpload = ""), b = a, a.showName || (a.showName = a.name), $(".content-info input[name=sid]").val(a.sid), $(".content-info input[name=type]").val(a.type), $(".content-info input[name=name]").val(a.name), $(".content-info input[name=showName]").val(a.showName), $(".content-info input[name=path]").val(a.path), $(".content-info input[name=timeTo]").val(a.timeTo), $(".content-info input[name=sharePassword]").val(a.sharePassword), $(".share-view-info").removeClass("hidden"), "undefined" == typeof a.numDownload && (a.numDownload = 0), "undefined" == typeof a.numView && (a.numView = 0);
                        var c = LNG.share_view_num + a.numView + "  " + LNG.share_download_num + a.numDownload;
                        $(".share-view-info").html(c), "1" == a.codeRead ? $(".content-info input[name=codeRead]").attr("checked", "checked") : $(".content-info input[name=codeRead]").removeAttr("checked"), "1" == a.notDownload ? $(".content-info input[name=notDownload]").attr("checked", "checked") : $(".content-info input[name=notDownload]").removeAttr("checked"), "1" == a.canUpload ? $(".content-info input[name=canUpload]").attr("checked", "checked") : $(".content-info input[name=canUpload]").removeAttr("checked"), $(".share-has-url").removeClass("hidden"), "file" == a.type ? ($(".label-code-read").addClass("hidden"), $(".label-can-upload").addClass("hidden")) : ($(".label-code-read").removeClass("hidden"), $(".label-can-upload").removeClass("hidden"));
                        var d = a.type;
                        "folder" == a.type && (d = 1 == a.codeRead ? "codeRead" : "folder");
                        var e = G.appHost + "share/" + d + "&user=" + G.userID + "&sid=" + a.sid;
                        $(".content-info .share-url").val(e), (a.timeTo || a.canUpload || a.codeRead || a.notDownload) && $(".share-setting-more").removeClass("hidden"), $(".share-remove-button").removeClass("hidden"), $(".share-create-button").text(LNG.share_save), Hook.trigger("explorer.path.share.uiInit")
                    }
                },
                h = function() {
                    var a = "";
                    $(".share-dialog .content-info input[name]").each(function() {
                        var b = urlEncode($(this).val());
                        "checkbox" == $(this).attr("type") && (b = $(this).attr("checked") ? "1" : ""), a += "&" + $(this).attr("name") + "=" + b
                    }), p(a, function(a) {
                        a.code ? (Tips.tips(LNG.success, !0), G.selfShare = a.info, ui.f5()) : Tips.tips(a)
                    })
                },
                i = function() {
                    $(".share-bottom-action .share-remove-button").unbind("click").click(function() {
                        j([{
                            type: "share",
                            path: b.sid
                        }], function() {
                            ui.f5()
                        })
                    }), $(".content-info .share-more-button").unbind("click").click(function() {
                        $(".share-setting-more").toggleClass("hidden")
                    }), $("[name=sharePassword]").unbind("click").click(function() {
                        trim($(this).val()) || $(this).val(roundString(5)), $(this).blur().textSelect()
                    });
                    var a = $(".share-dialog .btn.copy"),
                        c = new ClipboardJS(a.get(0), {
                            text: function(a) {
                                h();
                                var b = trim($("[name=sharePassword]").val()),
                                    c = $(".share-url").val();
                                return b.length > 0 && (c = LNG.share_url + ":" + c + "  " + LNG.share_password + ":" + b), c
                            }
                        });
                    c.on("success", function(a) {
                        $("input.share-url").textSelect()
                    }), $(".share-bottom-action .share-create-button").unbind("click").click(function() {
                        h();
                        var a = $.dialog.list["share-dialog"];
                        a && a.close()
                    }), $(".content-info .open-window").unbind("click").bind("click", function() {
                        h(), window.open($("input.share-url").val())
                    }), $(".share-bottom-action .share-qrcode-button").unbind("click").bind("click", function() {
                        core.qrcode($("input.share-url").val())
                    });
                    var d = $("input.share-url");
                    d.get(0);
                    d.unbind("hover click").bind("hover click", function(a) {
                        d.textSelect()
                    })
                };
            g(b), i()
        },
        r = function(a) {
            $.ajax({
                url: G.appHost + "setting/set&k=wall&v=" + urlEncode(a),
                dataType: "json",
                success: function(a) {
                    Tips.tips(a)
                }
            })
        },
        s = function(a, b, c, d, e) {
            if (!(a.length < 1)) {
                var f, g = G.myDesktop;
                d && (g = core.pathFather(a)), f = "folder" == c ? "ui.path.list(hashDecode('" + hashEncode(a) + "'));" : "ui.path.open(hashDecode('" + hashEncode(a) + "'));";
                var h = urlEncode(g + b + ".oexe"),
                    i = core.getPathIcon(a);
                "" == i.icon && (i.icon = c), $.ajax({
                    url: G.appHost + "explorer/mkfile&path=" + h,
                    type: "POST",
                    dataType: "json",
                    data: {
                        content: jsonEncode({
                            type: "app_link",
                            content: f,
                            icon: i.icon
                        })
                    },
                    success: function(a) {
                        Tips.tips(a), a.code && (ShareData.frameTop("", function(a) {
                            a.ui.f5()
                        }), "function" == typeof e && e(a.info))
                    }
                })
            }
        },
        t = function(a, b) {
            if (!(a.length < 1)) {
                var c = core.pathThis(a),
                    d = core.pathFather(a);
                jsrun = "core.explorerCode('" + urlEncode(a) + "');";
                var e = urlEncode(d + c + "_project.oexe");
                $.ajax({
                    url: G.appHost + "explorer/mkfile&path=" + e,
                    type: "POST",
                    dataType: "json",
                    data: 'content={"type":"app_link","content":"' + jsrun + '","icon":"folder.png"}',
                    success: function(a) {
                        a.code && "function" == typeof b && b(a.info)
                    }
                })
            }
        },
        u = function(a, b, c) {
            if (a) {
                var d = G.appHost + "explorer/imageRotate&rotate=" + b + "&path=" + urlEncode(a);
                $.ajax({
                    url: d,
                    beforeSend: function() {
                        Tips.loading(LNG.loading)
                    },
                    error: core.ajaxError,
                    success: function(a) {
                        return a ? (Tips.close(a), void(a.code && "function" == typeof c && c(a))) : void Tips.close(LNG.php_env_error_gd, !1)
                    }
                })
            }
        },
        v = function(b) {
            var c = {};
            c.fileInfo = a("./tpl/fileinfo/fileInfo.html"), c.pathInfo = a("./tpl/fileinfo/pathInfo.html"), c.pathInfoMore = a("./tpl/fileinfo/pathInfoMore.html"), b.length < 1 && (b = [{
                path: G.thisPath,
                type: "folder"
            }]);
            var d = "info";
            1 == b.length && (d = "file" == b[0].type ? core.pathExt(b[0].path) : "folder"), Tips.loading(LNG.getting), core.fileInfo(f(b), function(a) {
                if (!a.code) return void Tips.close(a);
                Tips.close(LNG.get_success, !0);
                var e = "pathInfoMore",
                    f = LNG.info;
                1 == b.length && (e = "folder" == b[0].type ? "pathInfo" : "fileInfo", f = core.pathThis(b[0].path), f.length > 15 && (f = f.substr(0, 15) + "...  " + LNG.info));
                var g = template.compile(c[e]),
                    h = UUID();
                a.data.is_root = G.isRoot, a.data.LNG = LNG, a.data.atime = date(LNG.time_type_info, a.data.atime), a.data.ctime = date(LNG.time_type_info, a.data.ctime), a.data.mtime = date(LNG.time_type_info, a.data.mtime), a.data.sizeFriendly = pathTools.fileSize(a.data.size);
                var i = $.dialog({
                        id: h,
                        className: "pathInfo-dialog",
                        padding: 5,
                        ico: core.iconSmall(d),
                        fixed: !0,
                        title: f,
                        content: g(a.data),
                        ok: !0
                    }),
                    j = 15 * $(".aui-outer .pathinfo").length;
                i.DOM.wrap.css({
                    left: "+=" + j + "px",
                    top: "+=" + j + "px"
                }), w(h, b)
            })
        },
        w = function(a, b) {
            var c = $("." + a);
            c.find(".open-window").bind("click", function() {
                window.open(c.find("input.download-url").val())
            }), c.find(".qrcode").unbind("click").bind("click", function() {
                core.qrcode(c.find("input.download-url").val(), c.find(".qrcode").get(0))
            });
            var d = c.find(".file-md5-loading");
            if (1 == d.length) {
                var e = f(b);
                e += "&getMd5=1", core.fileInfo(e, function(a) {
                    d.removeClass("file-md5-loading"), a.code ? d.html(a.data.fileMd5) : d.html(LNG.error)
                })
            }
            var g = c.find("input.download-url"),
                h = g.get(0);
            g.unbind("hover click").bind("hover click", function(a) {
                $(this).focus();
                var b = g.val().length;
                if ($.browser.msie) {
                    var c = h.createTextRange();
                    c.moveEnd("character", -h.value.length), c.moveEnd("character", b), c.moveStart("character", 0), c.select()
                } else h.setSelectionRange(0, b)
            }), c.find(".edit-chmod").click(function() {
                var a = $(this).parent().find("input"),
                    c = $(this);
                $.ajax({
                    url: G.appHost + "explorer/pathChmod&mod=" + a.val(),
                    type: "POST",
                    data: f(b),
                    beforeSend: function() {
                        c.text(LNG.loading)
                    },
                    error: function(a) {
                        c.text(LNG.button_save)
                    },
                    success: function(a) {
                        c.text(a.data).animate({
                            opacity: .6
                        }, 400, 0).delay(1e3).animate({
                            opacity: 1
                        }, 200, 0, function() {
                            c.text(LNG.button_save)
                        }), a.code && ui.f5()
                    }
                })
            })
        },
        x = function(a, b, c) {
            var d = function() {
                $.ajax({
                    url: G.appHost + "fav/del&name=" + urlEncode(a),
                    dataType: "json",
                    async: !1,
                    success: function(a) {
                        "function" == typeof b && b(a)
                    }
                })
            };
            return c ? void d() : void $.dialog({
                id: "dialog-fav-remove",
                fixed: !0,
                icon: "question",
                title: LNG.fav_remove,
                width: 200,
                padding: "40px 20px",
                content: LNG.fav_remove + "?",
                ok: d,
                cancel: !0
            })
        },
        y = function(a) {
            if (a) {
                if (-1 == trim(core.pathClear(a.path), "/").indexOf("/")) {
                    var b = core.getPathIcon(a.path, a.name);
                    "" != b.icon && (a.ext = b.icon, a.name = b.name)
                }
                "/" == a.path && (a.name = "Home"), $.ajax({
                    url: G.appHost + "fav/add",
                    dataType: "json",
                    data: a,
                    success: function(a) {
                        Tips.tips(a), a.code && !core.isApp("desktop") && ui.tree.refreshFav()
                    }
                })
            }
        },
        z = function(a) {
            var b = {};
            return b.type = a.find("input[type=radio]:checked").val(), b.content = a.find("textarea").val(), b.group = a.find("[name=group]").val(), a.find("input[type=text]").each(function() {
                var a = $(this).attr("name");
                b[a] = $(this).val()
            }), a.find("input[type=checkbox]").each(function() {
                var a = $(this).attr("name");
                b[a] = "checked" == $(this).attr("checked") ? 1 : 0
            }), b
        },
        A = function(a) {
            a.find(".type input").change(function() {
                var b = $(this).attr("apptype");
                a.find("[data-type]").addClass("hidden"), a.find("[data-type=" + b + "]").removeClass("hidden")
            }), a.find(".app-edit-select-icon").unbind("click").bind("click", function() {
                var b = G.basicPath + "static/images/file_icon/icon_app/";
                G.isRoot || (b = ""), core.api.pathSelect({
                    type: "file",
                    title: LNG.path_api_select_file,
                    firstPath: b
                }, function(b) {
                    var b = core.path2url(b);
                    a.find(".app-edit-select-icon-input").val(b)
                })
            }), a.find(".size-full").unbind("click").bind("click", function() {
                var b = $(this).prop("checked");
                b ? (a.find("[name=width]").val("100%"), a.find("[name=height]").val("100%")) : (a.find("[name=width]").val("800"), a.find("[name=height]").val("600"))
            })
        },
        B = function(b, c, d) {
            var e, f, g, h = LNG.app_create,
                i = UUID(),
                j = a("./tpl/appEdit.html"),
                k = template.compile(j);
            switch (void 0 == d && (d = "userEdit"), "rootEdit" == d && (b = b), "userEdit" == d || "rootEdit" == d ? (h = LNG.app_edit, g = k({
                    LNG: LNG,
                    uuid: i,
                    data: b,
                    appType: G.settings.appType
                })) : g = k({
                    LNG: LNG,
                    uuid: i,
                    data: {},
                    appType: G.settings.appType
                }), $.dialog({
                    fixed: !0,
                    width: 450,
                    id: i,
                    padding: 15,
                    title: h,
                    content: g,
                    button: [{
                        name: LNG.preview,
                        callback: function() {
                            return core.openApp(z(e)), !1
                        }
                    }, {
                        name: LNG.button_save,
                        focus: !0,
                        callback: function() {
                            var a = z(e);
                            switch (d) {
                                case "userAdd":
                                    var g = urlEncode(G.thisPath + a.name);
                                    f = G.appHost + "app/userApp&action=add&path=" + g;
                                    break;
                                case "userEdit":
                                    f = G.appHost + "app/userApp&path=" + urlEncode(b.path);
                                    break;
                                case "rootAdd":
                                    f = G.appHost + "app/add&name=" + urlEncode(a.name);
                                    break;
                                case "rootEdit":
                                    f = G.appHost + "app/edit&name=" + urlEncode(a.name) + "&old_name=" + urlEncode(b.name)
                            }
                            $.ajax({
                                url: f,
                                type: "POST",
                                dataType: "json",
                                data: {
                                    data: urlEncode(jsonEncode(a))
                                },
                                beforeSend: function() {
                                    Tips.loading()
                                },
                                error: core.ajaxError,
                                success: function(a) {
                                    if (Tips.close(a), a.code)
                                        if ("rootEdit" == d || "rootAdd" == d) {
                                            if (!a.code) return;
                                            ShareData.frameTop("Openapp_store", function(a) {
                                                a.App.reload()
                                            })
                                        } else "function" == typeof c ? c() : ui.f5()
                                }
                            })
                        }
                    }]
                }), e = $("." + i), G.isRoot || $(".appbox .appline .right a.open").remove(), b.group && e.find("option").eq(b.group).attr("selected", 1), e.find(".aui-content").css("overflow", "inherit"), d) {
                case "userEdit":
                    e.find(".name").addClass("hidden"), e.find(".desc").addClass("hidden"), e.find(".group").addClass("hidden"), e.find("option[value=" + b.group + "]").attr("checked", !0), "url" != b.type && e.find(".appline[data-type=url]").addClass("hidden");
                    break;
                case "userAdd":
                    e.find(".desc").addClass("hidden"), e.find(".group").addClass("hidden"), e.find("[apptype=url]").attr("checked", !0), e.find("[data-type=url] input[name=resize]").attr("checked", !0), e.find("input[name=width]").attr("value", "800"), e.find("input[name=height]").attr("value", "600"), e.find("input[name=icon]").attr("value", "oexe.png");
                    break;
                case "rootAdd":
                    e.find("[apptype=url]").attr("checked", !0), e.find("[data-type=url] input[name=resize]").attr("checked", !0), e.find("input[name=width]").attr("value", "800"), e.find("input[name=height]").attr("value", "600"), e.find("input[name=icon]").attr("value", "oexe.png");
                    break;
                case "rootEdit":
                    e.find("option[value=" + b.group + "]").attr("selected", !0), "url" != b.type && e.find(".appline[data-type=url]").addClass("hidden")
            }
            A(e)
        },
        C = function() {
            core.appStore()
        },
        D = function(a) {
            a && a.length < 4 && "http" != a.substring(0, 4) || $.ajax({
                url: G.appHost + "app/getUrlTitle&url=" + a,
                dataType: "json",
                beforeSend: function() {
                    Tips.loading()
                },
                success: function(b) {
                    var c = b.data;
                    c = c.replace(/[\/\\]/g, "_"), Tips.close(b);
                    var d = {
                            content: a,
                            type: "url",
                            desc: "",
                            group: "others",
                            icon: "internet.png",
                            name: c,
                            resize: 1,
                            simple: 0,
                            height: "70%",
                            width: "90%"
                        },
                        e = urlEncode(G.thisPath + c);
                    a = G.appHost + "app/userApp&action=add&path=" + e, $.ajax({
                        url: a,
                        type: "POST",
                        dataType: "json",
                        data: {
                            data: urlEncode(jsonEncode(d))
                        },
                        success: function(a) {
                            Tips.close(a), a.code && ui.f5()
                        }
                    })
                }
            })
        };
    return {
        makeJson: f,
        appEdit: B,
        appList: C,
        appAddURL: D,
        share: n,
        shareBox: o,
        setBackground: r,
        createLink: s,
        createProject: t,
        imageRotate: u,
        newFile: g,
        newFolder: h,
        rname: i,
        zipDownload: k,
        zip: l,
        unZip: m,
        info: v,
        remove: j,
        fav: y,
        favRemove: x
    }
});;
define("app/path/tpl/share.html", [], '<div class=\'content-box can-not-select\'>\n	<div class=\'title\'>\n		<div class="titleinfo">{{LNG.share_title}}</div>\n		<div class="share-view-info"></div>\n	</div>\n	<div class=\'content-info\'>\n		<div class="input-line share-has-url clear">\n			<span class="input-title">{{LNG.share_url}}:</span>\n			<div class="input-group">\n			  <input type="text" class="share-url" aria-label="Text input with segmented button dropdown">\n			  <div class="input-group-btn">\n				<button type="button" class="btn btn-default copy"><i class="icon-copy"></i>  &nbsp;{{LNG.copy}}</button>\n				<button type="button" class="btn btn-default open-window">{{LNG.open}}</button>\n				<!-- <button type="button" class="btn btn-default qrcode"><i class="icon-qrcode"></i></button> -->\n			  </div>\n			</div>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.share_password}}:</span>\n			<input type="text" placeholder="{{LNG.share_password}}" name="sharePassword"/>\n			<i class="desc">{{LNG.share_password_desc}}</i>\n			<div style="clear:both"></div>\n		</div>\n		<div class="share-more-line"></div>\n		<button class="share-more-button btn btn-default btn-sm">{{LNG.more}}<b class="caret"></b></button>\n		<div class="share-setting-more">\n			<div class="input-line share-others">\n				<span class="input-title">{{LNG.others}}:</span>\n				<label class="label-code-read">\n					<input type="checkbox" name="codeRead" class="kui-checkbox size-small" value="">\n					<span>{{LNG.share_code_read}}</span>\n				</label>\n				<label>\n					<input type="checkbox" name="notDownload" class="kui-checkbox size-small" value="">\n					<span>{{LNG.share_not_download}}</span>\n				</label>\n				<label class="label-can-upload">\n					<input type="checkbox" name="canUpload" class="kui-checkbox size-small" value="">\n					<span>{{LNG.share_can_upload}}</span>\n				</label>\n\n				<div style="clear:both"></div>\n			</div>\n			<div class="input-line">\n				<span class="input-title">{{LNG.share_name}}:</span>\n				<input type="hidden" name="sid"/>\n				<input type="hidden" name="type"/>\n				<input type="hidden" name="name"/>\n				<input class="share-name" type="text" placeholder="{{LNG.share_name}}" name="showName"/>\n				<div style="clear:both"></div>\n			</div>\n			<div class="input-line">\n				<span class="input-title">{{LNG.share_path}}:</span>\n				<input class="share-name" type="text" name="path" value="" />\n				<div style="clear:both"></div>\n			</div>\n			<div class="input-line">\n				<span class="input-title">{{LNG.share_time}}:</span>\n				<input id="share-time" type="text" placeholder="{{LNG.share_time}}" name="timeTo"/>\n				<i class="desc">{{LNG.share_time_desc}}</i>\n				<div style="clear:both"></div>\n			</div>\n		</div>		\n	</div>\n	<div class="share-bottom-action">\n		<a href="javascript:void(0);" class="share-qrcode-button" title="{{LNG.qrcode}}"><i class="font-icon icon-qrcode"></i></a>\n		<button type="button" class="btn btn-primary share-create-button">{{LNG.share_create}}</button>\n		<a type="button" href="javascript:void(0);" class="share-remove-button">{{LNG.share_cancle}}</a>\n	</div>\n</div>');;
define("app/path/tpl/fileinfo/fileInfo.html", [], "<div class='pathinfo'>\n	{{if downloadPath}}\n	<div class='p info-item-link'>\n		<div class='title' style=\"line-height: 30px;\">{{LNG.download_address}}:</div>\n		<div class=\"content input-group\">\n			<input type=\"text\" class=\"download-url\" value='{{downloadPath}}'>\n			<div class=\"input-group-btn\">\n				<button type=\"button\" class=\"btn btn-default open-window\">{{LNG.open}}</button>\n				<button type=\"button\" class=\"btn btn-default qrcode\"><i class=\"icon-qrcode\"></i></button>\n			</div>\n		</div>\n		<div style='clear:both'></div>\n	</div>\n	<div class='line'></div>\n	{{/if}}\n\n	<div class='p info-item-address'>\n		<div class='title'>{{LNG.address}}:</div>\n		<div class='content' id='id_fileinfo_path'>{{path |kod.window.htmlEncode}}</div>\n		<div style='clear:both'></div>\n	</div>\n	<div class='p info-item-size'>\n		<div class='title'>{{LNG.size}}:</div>\n		<div class='content'>{{sizeFriendly}} {{if size>1024}}<span>({{size.toLocaleString()}} Byte)</span>{{/if}}</div>\n		<div style='clear:both'></div>\n	</div>\n\n	{{if fileMd5}}\n	<div class='p info-item-md5'>\n		<div class='title'>MD5:</div>\n		<div class='content {{if fileMd5 == \"...\"}}file-md5-loading{{/if}}'>{{fileMd5}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n\n	{{if imageSize}}\n	<div class='p info-item-image-size'>\n		<div class='title'>{{LNG.image_size}}:</div>\n		<div class='content'>{{imageSize.width}} × {{imageSize.height}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n\n	<div class='line'></div>\n\n	{{if ctime}}\n	<div class='p info-item-create-time'>\n		<div class='title'>{{LNG.create_time}}</div>\n		<div class='content'>{{ctime}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n\n	{{if mtime}}\n	<div class='p info-item-modify-time'>\n		<div class='title'>{{LNG.modify_time}}</div>\n		<div class='content'>{{mtime}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n\n	{{if atime}}\n	<div class='p info-item-last-time'>\n		<div class='title'>{{LNG.last_time}}</div>\n		<div class='content'>{{atime}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n\n	{{if owner}}\n	<div class='p info-item-owner'>\n		<div class='title'>{{LNG.file_info_owner}}</div>\n		<div class='content'>{{owner}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n\n	{{if group}}\n	<div class='p info-item-group'>\n		<div class='title'>{{LNG.file_info_group}}</div>\n		<div class='content'>{{group}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n	\n	{{if mode && is_root==\"1\"}}\n	<div class='line'></div>\n	<div class='p info-item-mode change_permission'>\n		<div class='title'>{{LNG.permission}}:</div>\n		<div class='content'>{{mode}}</div>\n		<div style='clear:both'></div>\n	</div>\n	<div class='p info-item-chmod'>\n		<div class='title'>{{LNG.permission_edit}}:</div>\n		<div class='content'><input type='text' class='info-chmod' value='755'/>\n		<button class='btn btn-default btn-sm edit-chmod' type='button'>{{LNG.button_save}}</button></div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n</div>\n");;
define("app/path/tpl/fileinfo/pathInfo.html", [], "<div class='pathinfo'>\n	<div class='p info-item-address'>\n		<div class='title'>{{LNG.address}}:</div>\n		<div class='content'>{{path |kod.window.htmlEncode}}</div>\n		<div style='clear:both'></div>\n	</div>\n	<div class='p info-item-size'>\n		<div class='title'>{{LNG.size}}:</div>\n		<div class='content'>{{sizeFriendly}}{{if size>1024}}<span>({{size.toLocaleString()}} Byte)</span>{{/if}}</div>\n		<div style='clear:both'></div>\n	</div>\n	<div class='p info-item-count'>\n		<div class='title'>{{LNG.contain}}:</div> \n		<div class='content'>{{fileCount}}  {{LNG.file}},{{folderCount}}  {{LNG.folder}}</div>\n		<div style='clear:both'></div>\n	</div>\n	\n	<div class='line'></div>\n	{{if ctime}}\n	<div class='p info-item-create-time'>\n		<div class='title'>{{LNG.create_time}}</div>\n		<div class='content'>{{ctime}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n\n	{{if mtime}}\n	<div class='p info-item-modify-time'>\n		<div class='title'>{{LNG.modify_time}}</div>\n		<div class='content'>{{mtime}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n\n	{{if atime}}\n	<div class='p info-item-last-time'>\n		<div class='title'>{{LNG.last_time}}</div>\n		<div class='content'>{{atime}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n\n	{{if owner}}\n	<div class='p info-item-owner'>\n		<div class='title'>{{LNG.file_info_owner}}</div>\n		<div class='content'>{{owner}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n\n	{{if group}}\n	<div class='p info-item-group'>\n		<div class='title'>{{LNG.file_info_group}}</div>\n		<div class='content'>{{group}}</div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n\n\n	{{if mode && is_root==\"1\"}}\n	<div class='line'></div>\n	<div class='p info-item-mode'>\n		<div class='title'>{{LNG.permission}}:</div>\n		<div class='content'>{{mode}}</div>\n		<div style='clear:both'></div>\n	</div>\n	<div class='p info-item-chmod'>\n		<div class='title'>{{LNG.permission_edit}}:</div>\n		<div class='content'><input type='text' class='info-chmod' value='755'/>\n		<button class='btn btn-default btn-sm edit-chmod' type='button'>{{LNG.button_save}}</button></div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n</div>\n");;
define("app/path/tpl/fileinfo/pathInfoMore.html", [], "<div class='pathinfo'>\n	<div class='p info-item-count' style='line-height:40px;'>\n		<div class='title'>{{LNG.info}}:</div>\n		<div class='content'>\n			{{fileCount}}  {{LNG.file}},{{folderCount}}  {{LNG.folder}}</div>\n		<div style='clear:both'></div>\n	</div>\n	<div class='line info-item-size'></div>\n	<div class='p'>\n		<div class='title'>{{LNG.size}}:</div>\n		<div class='content'>{{sizeFriendly}} {{if size>1024}}<span>({{size.toLocaleString()}} Byte)</span>{{/if}}</div>\n		<div style='clear:both'></div>\n	</div>\n	\n	{{if mode && is_root==\"1\"}}\n	<div class='line'></div>\n	<div class='p info-item-mode'>\n		<div class='title'>{{LNG.permission}}:</div>\n		<div class='content'>{{mode}}</div>\n		<div style='clear:both'></div>\n	</div>\n	<div class='p info-item-chmod'>\n		<div class='title'>{{LNG.permission_edit}}:</div>\n		<div class='content'><input type='text' class='info-chmod' value='755'/>\n		<button class='btn btn-default btn-sm edit-chmod' type='button'>{{LNG.button_save}}</button></div>\n		<div style='clear:both'></div>\n	</div>\n	{{/if}}\n</div>\n");;
define("app/path/tpl/appEdit.html", [], "<div class='appbox'>\n	<div class='appline name'>\n		<div class='left'>{{LNG.name}}</div>\n		<div class='right'><input type='text' name='name' value='{{if data.name}}{{data.name}}{{/if}}'/></div>\n		<div style='clear:both;'></div>\n	</div>\n	<div class='appline desc'>\n		<div class='left'>{{LNG.app_desc}}</div>\n		<div class='right'><input type='text' name='desc' value='{{if data.desc}}{{data.desc}}{{/if}}'/></div>\n		<div style='clear:both;'></div>\n	</div>\n	<div class='appline icon'>\n		<div class='left'>{{LNG.app_icon}}</div>\n		<div class='right'><input type='text' name='icon' class=\"app-edit-select-icon-input\" value='{{if data.icon}}{{data.icon}}{{/if}}'/>\n			<button class='btn btn-default btn-sm open app-edit-select-icon btn-right'>\n				<i class=\"font-icon icon-folder-open\"></i>\n			</button>\n		</div>\n		<div style='clear:both;'></div>\n	</div>\n	<div class='appline group'>\n		<div class='left'>{{LNG.app_group}}</div>\n		<div class='right'>\n		<select name='group'>\n			{{each appType as val index}}\n			<option value ='{{val.type}}'>{{LNG[val.name] || val.name}}</option>\n			{{/each}}\n		<select>\n		</div>\n		<div style='clear:both;'></div>\n	</div>\n	<div class='appline type'>\n		<div class='left'>{{LNG.app_type}}</div>\n		<div class='right'>\n			<input class='w20 kui-radio size-small' type='radio' id='url{{uuid}}' apptype='url' value='url' name='{{uuid}}type' {{if data.type=='url'}}checked='checked'{{/if}}/>\n			<label for='url{{uuid}}'>{{LNG.app_type_url}}</label>\n			<input class='w20 kui-radio size-small' type='radio' id='app{{uuid}}' apptype='app' value='app' name='{{uuid}}type' {{if data.type=='app'}}checked='checked'{{/if}}/>\n			<label for='app{{uuid}}'>{{LNG.app_type_code}}</label>\n			<input class='w20 kui-radio size-small' type='radio' id='app_link{{uuid}}' apptype='app_link' value='app_link' name='{{uuid}}type' {{if data.type=='app_link'}}checked='checked'{{/if}}/>\n			<label for='app_link{{uuid}}'>{{LNG.app_type_link}}</label>\n		</div>\n		<div style='clear:both;'></div>\n	</div>\n\n	<div class='appline' data-type='url'>\n		<div class='left'>{{LNG.app_display}}</div>\n		<div class='right'>\n			<input class='w20 kui-checkbox size-small' type='checkbox' id='simple{{uuid}}' name='simple' {{if data.simple}}checked='true'{{/if}} />\n			<label for='simple{{uuid}}'>{{LNG.app_display_border}}</label>\n			<input class='w20 kui-checkbox size-small' type='checkbox' id='resize{{uuid}}' name='resize' {{if data.resize}}checked='true'{{/if}} />\n			<label for='resize{{uuid}}'>{{LNG.app_display_size}}</label>\n		</div>\n		<div style='clear:both;'></div>\n	</div>\n	<div class='appline' data-type='url'>\n		<div class='left'>{{LNG.app_size}}</div>\n		<div class='right'>\n			<input class='w30' type='text' name='width'  value='{{if data.width}}{{data.width}}{{/if}}'/>({{LNG.width}})&nbsp;&nbsp;\n			<input class='w30' type='text' name='height' value='{{if data.height}}{{data.height}}{{/if}}'/>({{LNG.height}})\n\n			<input class='w20 kui-checkbox size-small size-full' type='checkbox' id='size-full{{uuid}}' \n				{{if data.width=='100%' && data.height=='100%'}}checked='true'{{/if}} />\n			<label for='size-full{{uuid}}'>{{LNG.full_screen}}</label>\n		</div>\n		<div style='clear:both;'></div>\n	</div>\n	<div class='appline content'>\n		<div class='left hidden' data-type='app'>{{LNG.app_code}}</div>\n		<div class='left hidden' data-type='app_link'>{{LNG.app_code}}</div>\n		<div class='left' data-type='url'>{{LNG.app_url}}</div>\n		<div class='right'><textarea name='content'>{{if data.content}}{{data.content}}{{/if}}</textarea></div>\n		<div style='clear:both;'></div>\n	</div>\n</div>\n");;
define("app/path/clipboard", [], function(a, b) {
    var c = function(a) {
            return ui.path.pathOperate.makeJson(a)
        },
        d = function(a) {
            a.length < 1 || $.ajax({
                url: G.appHost + "explorer/pathCopy",
                type: "POST",
                dataType: "json",
                data: c(a),
                error: core.ajaxError,
                success: function(a) {
                    Tips.tips(a)
                }
            })
        },
        e = function(a) {
            a.length < 1 || $.ajax({
                url: G.appHost + "explorer/pathCute",
                type: "POST",
                dataType: "json",
                data: c(a),
                error: core.ajaxError,
                success: function(a) {
                    Tips.tips(a)
                }
            })
        },
        f = function(a, b) {
            a && (Tips.loading(LNG.moving), setTimeout(function() {
                var c = G.appHost + "explorer/pathPast&path=" + urlEncode(a);
                $.ajax({
                    url: c,
                    dataType: "json",
                    error: core.ajaxError,
                    success: function(a) {
                        Tips.close(a.data, a.code), "function" == typeof b && b(a.info), g()
                    }
                })
            }, 50))
        },
        g = function() {
            var a = ShareData.frameTop(""),
                b = a.$.find(".dialogExplorer iframe");
            0 != b.length && (a.ui && a.ui.f5(), $.each(b, function(a, b) {
                var c = b.contentWindow;
                c != window && c.ui && c.ui.f5()
            }))
        },
        h = function(a, b, d) {
            b && $.ajax({
                url: G.appHost + "explorer/pathCuteDrag",
                type: "POST",
                dataType: "json",
                data: c(a) + "&path=" + urlEncode(b + "/"),
                beforeSend: function() {
                    Tips.loading(LNG.moving)
                },
                error: core.ajaxError,
                success: function(a) {
                    Tips.close(a), a.code && core.playSound("drag_drop"), "function" == typeof d && d(a.info)
                }
            })
        },
        i = function(a, b, d, e) {
            b && (void 0 == e && (e = 0), $.ajax({
                url: G.appHost + "explorer/pathCopyDrag",
                type: "POST",
                dataType: "json",
                data: c(a) + "&path=" + urlEncode(b + "/") + "&filename_auto=" + Number(e),
                beforeSend: function() {
                    Tips.loading(LNG.moving)
                },
                error: core.ajaxError,
                success: function(a) {
                    Tips.close(a), a.code && core.playSound("drag_drop"), "function" == typeof d && d(a.info)
                }
            }))
        },
        j = function(a, b) {
            var c = "style='height:150px;border-left: 3px solid #def;overflow:auto;margin:20px;background: #f0f8ff;padding:20px;width:300px'",
                d = "<div " + c + ">" + LNG.clipboard_null + "</div>";
            if (0 != a.length) {
                d = "<div " + c + "><b>" + LNG.clipboard_state + LNG[b] + "</b><br/>";
                for (var e = 40, f = 0; f < a.length; f++) {
                    var g = a[f],
                        h = g.path;
                    h = h.length < e ? h : "..." + h.substr(-e), d += "<br/>" + g.type + ": <a href='javascript:kodApp.open(\"" + htmlEncode(g.path) + '","' + g.type + "\");'>" + h + "</a>"
                }
                d += '<br/><button class="btn btn-sm btn-default mt-10 clipboard-clear" onclick="">' + LNG.clipboard_clear + "</button></div>"
            }
            return d
        },
        k = function() {
            $.ajax({
                url: G.appHost + "explorer/clipboard",
                dataType: "json",
                error: core.ajaxError,
                success: function(a) {
                    a.code && ($.dialog({
                        id: "dialog-clipboard",
                        title: LNG.clipboard,
                        width: 400,
                        content: j(a.data, a.info)
                    }), $(".clipboard-clear").one("click", function() {
                        Tips.tips(LNG.success), $.get(G.appHost + "explorer/clipboard&clear=ok"), $.dialog.list["dialog-clipboard"].close()
                    }))
                }
            })
        };
    return {
        copy: d,
        cute: e,
        past: f,
        cuteDrag: h,
        copyDrag: i,
        clipboard: k
    }
});;
define("app/path/search", ["./tpl/search.html", "./tpl/searchList.html"], function(a, b) {
    var c = a("./tpl/search.html"),
        d = a("./tpl/searchList.html");
    return function(a, b) {
        b || (b = G.thisPath);
        var e, f, g = function() {
                var d = trim(core.pathClear(b), "/");
                if (0 == d.indexOf(G.KOD_USER_SHARE) && -1 == d.indexOf("/") || d == G.KOD_USER_FAV || d == G.KOD_GROUP_ROOT_ALL) return void Tips.tips(LNG.path_cannot_search, !1);
                template.helper("searchResultPrase", j);
                var g = template.compile(c);
                0 == $(".dialog-do-search").length ? (e = $.dialog({
                    id: "dialog-do-search",
                    padding: 0,
                    fixed: !0,
                    ico: core.icon("search"),
                    resize: !0,
                    title: LNG.search,
                    width: 460,
                    height: 480,
                    content: g({
                        LNG: LNG
                    })
                }), f = l(), f.path = b, "" != a && (f.search = a), $("#search-path").val(f.path), $("#search-value").val(f.search), k()) : ($.dialog.list["dialog-do-search"].display(!0), a && $("#search-value").val(a), $("#search-path").val(b), i())
            },
            h = function() {
                return f = {
                    search: $("#search-value").val(),
                    path: $("#search-path").val(),
                    is_content: Number($("#search-is-content").is(":checked")),
                    is_case: Number($("#search-is-case").is(":checked")),
                    ext: $("#search-ext").val()
                }
            },
            i = function() {
                h(), n(f)
            },
            j = function(a) {
                var b = htmlEncode($("#search-value").val());
                if (a = htmlEncode(a), f.is_case) a = a.replace(b, '<span class="keyword">' + b + "</span>");
                else {
                    var c = a.toLowerCase().indexOf(b.toLowerCase());
                    a = a.substr(0, c) + '<span class="keyword">' + a.substr(c, b.length) + "</span>" + a.substr(c + b.length)
                }
                return a
            },
            k = function() {
                $("#search-value").die("keyup").live("keyup", function(a) {
                    core.isApp("editor") || ui.path.setSearchByStr($(this).val())
                }), $("#search-value,#search-ext,#search-path").keyEnter(i), $(".search-header .btn").die("click").live("click", i), $(".search-result .file-item .file-info").die("click").live("click", function(a) {
                    var b = $(this).parent();
                    return b.toggleClass("open"), b.find(".result-item").slideToggle(200), stopPP(a), !1
                }), $(".search-result .file-item .file-info .goto").die("click").live("click", function(a) {
                    var b = $(this).parent().parent(),
                        c = pathHashDecode(b.attr("data-path")),
                        d = core.pathFather(c);
                    return core.openPath(d), setTimeout(function() {
                        core.isApp("explorer") && ui.path.setSelectByFilename(c)
                    }, 200), stopPP(a), !1
                }), $(".search-result .file-item .file-info .title").die("click").live("click", function(a) {
                    var b = $(this).parent().parent(),
                        c = pathHashDecode(b.attr("data-path"));
                    return kodApp.setLastOpenTarget(b), kodApp.open(c, b.attr("data-ext")), stopPP(a), !1
                }), $(".search-result .file-item .result-info").die("click").live("click", function(a) {
                    var b = $(this).parent().parent(),
                        c = pathHashDecode(b.attr("data-path"));
                    $(".search-result .file-item .result-info.this").removeClass("this"), $(this).addClass("this");
                    var d = parseInt($(this).find(".line").attr("data-line"));
                    return ShareData.data("FILE_SEARCH_AT", {
                        search: $("#search-value").val(),
                        line: d,
                        lineIndex: $(this).parent().find("[data-line=" + d + "]").index($(this).find(".line"))
                    }), kodApp.open(c, b.attr("data-ext"), "aceEditor"), stopPP(a), !1
                }), $(".search-header input[type=checkbox]").on("click", function() {
                    h(), l(f)
                })
            },
            l = function(a) {
                var b = "box_search_config";
                if (void 0 == a) {
                    var a = LocalData.getConfig(b);
                    return a || (a = {
                        search: "",
                        is_content: 0,
                        is_case: 0,
                        ext: ""
                    }), $("#search-value").val(a.search).textSelect(), a.is_content ? $("#search-is-content").attr("checked", "checked") : $("#search-is-content").removeAttr("checked"), a.is_case ? $("#search-is-case").attr("checked", "checked") : $("#search-is-case").removeAttr("checked"), $("#search-ext").val(a.ext), a
                }
                return LocalData.setConfig(b, a)
            },
            m = function(a) {
                var b = $(".file-items"),
                    c = $(".search-desc");
                if (!a.code) return c.html(a.data), void b.html("");
                if (0 == a.data.fileList.length && 0 == a.data.folderList.length) return c.html(LNG.search_null), void b.html("");
                var e = template.compile(d);
                if (b.html(e({
                        code: a.code,
                        data: a.data,
                        LNG: LNG
                    })), f.is_content) {
                    for (var g = a.data.fileList, h = 0, i = 0; i < g.length; i++) g[i].searchInfo && (h += g[i].searchInfo.length);
                    c.html(LNG.search_result + ": <b>" + h + "(in " + g.length + " files)</b>"), a.data.error_info && c.html("<span>" + LNG.seach_result_too_more + "</span>")
                } else c.html(a.data.fileList.length + " " + LNG.file + ", " + a.data.folderList.length + LNG.folder + ".")
            },
            n = function(a) {
                l(a), $("#search-value").textFocus();
                var b = $(".file-items"),
                    c = $(".search-desc");
                if (!a.search || !a.path) return c.html(LNG.search_info), void b.html("");
                var d = G.appHost + "explorer/search";
                "undefined" != typeof G.sharePage && (d = G.appHost + "share/search&user=" + G.user + "&sid=" + G.sid), $.ajax({
                    url: d,
                    dataType: "json",
                    type: "POST",
                    data: a,
                    beforeSend: function() {
                        c.hide().html(LNG.searching + '<img src="' + G.staticPath + 'images/common/loading.gif">').fadeIn(100)
                    },
                    error: function(a, b, d) {
                        core.ajaxError(a, b, d), c.html(LNG.error)
                    },
                    success: function(a) {
                        m(a)
                    }
                })
            };
        g()
    }
});;
define("app/path/tpl/search.html", [], "<div class='do-search-box'>\n	<div class='search-header'>\n		<div class='s_br'>\n			<input type='text' id='search-value'/><button class=\"btn btn-default btn-sm btn-right\"><i class=\"font-icon icon-search\"></i></button>\n			<div style='float:right'>{{LNG.path}}:<input type='text' id='search-path' title=\"\" title-data=\"#search-path\" title-timeout=\"100\"/></div>\n		</div>\n		<div class='s_br'>\n			<input type='checkbox' id='search-is-content' class=\"kui-checkbox size-small\"/>\n			<label for='search-is-content'>{{LNG.search_content}}</label>\n			<input type='checkbox' id='search-is-case' class=\"kui-checkbox size-small\"/>\n			<label for='search-is-case'>{{LNG.search_uplow}}</label>\n			<div style='float:right'>\n				{{LNG.file_type}}:<input type='text' id='search-ext' title='{{LNG.search_ext_tips}}' title-timeout=\"100\"/>\n			</div>\n		</div>\n	</div>\n	<div class=\"search-desc\"></div>\n	<div class='search-result'>\n		<ul class=\"file-items\"></ul>\n	</div>\n</div>\n\n");;
define("app/path/tpl/searchList.html", [], '<!-- 文件夹列表 -->\n{{each data.folderList v i}}\n	 <li class="file-item open" data-path="{{v.path | kod.window.pathHashEncode}}" data-type="folder" data-ext="folder">\n		<div class="file-info">\n			<span class="switch"><i class="font-icon icon-file-text-alt"></i></span>\n			<span class="file-icon">{{\'folder\' |kod.core.icon}}</span>\n			<span class="title" title="{{LNG.goto}} {{v.path | kod.window.htmlEncode}}">{{v.name | searchResultPrase}}</span>\n			<span class="goto" title="{{LNG.open_the_path}}"><i class="icon-folder-open-alt"></i></span>\n		</div>\n	</li>\n{{/each}}\n\n<!-- 文件列表 -->\n{{each data.fileList v i}}\n	{{if v.searchInfo}}\n	<li class="file-item open" data-path="{{v.path | kod.window.pathHashEncode}}" data-type="file" data-ext="{{v.ext}}">\n		<div class="file-info file-result">\n			<span class="switch"><i class="font-icon icon-caret-right"></i></span>\n			<span class="file-icon">{{v.ext |kod.core.icon}}</span>\n			<span class="title" title="{{LNG.goto}} {{v.path | kod.window.htmlEncode}}">\n				{{v.name | kod.window.htmlEncode}}\n			</span>\n			<span class="result-num">{{v.searchInfo.length}}</span>\n			<span class="goto" title="{{LNG.open_the_path}}"><i class="icon-folder-open-alt"></i></span>\n		</div>\n		<ul class="result-item">\n			{{each v.searchInfo value index}}\n			<li class="result-info">\n				<span class="line" data-line="{{value.line}}">{{value.line}}:</span>\n				<span class="search-info">{{@value.str | searchResultPrase}}</span>\n			</li>\n			{{/each}}\n		</ul>\n	</li>\n	{{else}}\n	<li class="file-item open" data-path="{{v.path | kod.window.pathHashEncode}}" data-type="file-name" data-ext="{{v.ext}}">\n		<div class="file-info">\n			<span class="switch"><i class="font-icon icon-file-text-alt"></i></span>\n			<span class="file-icon">{{v.ext |kod.core.icon}}</span>\n			<span class="title" title="{{LNG.goto}} {{v.path | kod.window.htmlEncode}}">{{v.name | searchResultPrase}}</span>\n			<span class="goto" title="{{LNG.open_the_path}}"><i class="icon-folder-open-alt"></i></span>\n		</div>\n	</li>\n	{{/if}}\n{{/each}}\n\n');