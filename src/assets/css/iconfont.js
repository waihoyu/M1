!(function(l) {
    var e,
        c =
            '<svg><symbol id="iconjiantou" viewBox="0 0 1024 1024"><path d="M957.463608 326.608639 541.393447 753.98224l0 0-29.720905 30.527271-29.718859-30.527271 0 0L65.883523 326.608639l29.718859-30.525224 416.07016 427.370531 416.07016-427.370531L957.463608 326.608639z"  ></path></symbol><symbol id="iconjiantou-copy-copy" viewBox="0 0 1000 1000"><path d="M362.57 764.226h364.149c28.44 0 51.491-23.051 51.491-51.491v-364.149c0-28.44-23.051-51.491-51.491-51.491s-51.491 23.051-51.491 51.491v239.829l-349.073-349.073c-20.119-20.119-52.711-20.119-72.831 0s-20.119 52.711 0 72.831l349.073 349.073h-239.829c-14.202-0.001-27.093 5.754-36.415 15.076s-15.094 22.195-15.076 36.415c0 28.44 23.051 51.491 51.491 51.491z"  ></path></symbol><symbol id="iconjiantouxia" viewBox="0 0 1024 1024"><path d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z"  ></path></symbol><symbol id="iconHomehomepagemenu" viewBox="0 0 1024 1024"><path d="M874.666667 896H618.666667a21.333333 21.333333 0 0 1-21.333334-21.333333V640h-170.666666v234.666667a21.333333 21.333333 0 0 1-21.333334 21.333333H149.333333a21.333333 21.333333 0 0 1-21.333333-21.333333V405.333333a21.376 21.376 0 0 1 9.024-17.429333l362.666667-256a21.354667 21.354667 0 0 1 24.618666 0l362.666667 256A21.376 21.376 0 0 1 896 405.333333v469.333334a21.333333 21.333333 0 0 1-21.333333 21.333333z m-234.666667-42.666667h213.333333V416.405333L512 175.445333 170.666667 416.405333V853.333333h213.333333V618.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h213.333334a21.333333 21.333333 0 0 1 21.333333 21.333334z" fill="#646464" ></path></symbol></svg>',
        t = (e = document.getElementsByTagName('script'))[
            e.length - 1
        ].getAttribute('data-injectcss')
    if (t && !l.__iconfont__svg__cssinject__) {
        l.__iconfont__svg__cssinject__ = !0
        try {
            document.write(
                '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
            )
        } catch (e) {
            console && console.log(e)
        }
    }
    !(function(e) {
        if (document.addEventListener)
            if (
                ~['complete', 'loaded', 'interactive'].indexOf(
                    document.readyState,
                )
            )
                setTimeout(e, 0)
            else {
                var t = function() {
                    document.removeEventListener('DOMContentLoaded', t, !1), e()
                }
                document.addEventListener('DOMContentLoaded', t, !1)
            }
        else
            document.attachEvent &&
                ((o = e),
                (i = l.document),
                (a = !1),
                (c = function() {
                    try {
                        i.documentElement.doScroll('left')
                    } catch (e) {
                        return void setTimeout(c, 50)
                    }
                    n()
                })(),
                (i.onreadystatechange = function() {
                    'complete' == i.readyState &&
                        ((i.onreadystatechange = null), n())
                }))
        function n() {
            a || ((a = !0), o())
        }
        var o, i, a, c
    })(function() {
        var e, t, n, o, i, a
        ;((e = document.createElement('div')).innerHTML = c),
            (c = null),
            (t = e.getElementsByTagName('svg')[0]) &&
                (t.setAttribute('aria-hidden', 'true'),
                (t.style.position = 'absolute'),
                (t.style.width = 0),
                (t.style.height = 0),
                (t.style.overflow = 'hidden'),
                (n = t),
                (o = document.body).firstChild
                    ? ((i = n),
                      (a = o.firstChild).parentNode.insertBefore(i, a))
                    : o.appendChild(n))
    })
})(window)
