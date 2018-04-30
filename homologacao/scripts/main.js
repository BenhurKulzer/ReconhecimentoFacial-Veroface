(function (e) {
    e(document).on("click", "a[rel=external]", function (e) {
        e.preventDefault(), window.open(this.href)
    })
})(jQuery), jQuery.easing.easeInOutQuad = function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    },
    function (e) {
        var t = 800,
            n;
        e("html, body").each(function (t) {
            n = e(this);
            var r = parseInt(n.scrollTop(), 10);
            n.scrollTop(r + 1);
            if (e(window).scrollTop() == r + 1) return !1
        }), e(document).on("click", "a[href*=#]", function (r) {
            var i = e(this),
                s = i.attr("href"),
                o = e(s),
                u = i.data("smooth-scroll") !== !1;
            if (u && o.length) {
                r.preventDefault();
                var a = o.offset().top,
                    f = Math.abs((n.scrollTop() - a) * .3),
                    l = t + f;
                n.stop(!0).animate({
                    scrollTop: a
                }, l, "easeInOutQuad", function () {
                    document.location.hash = s
                })
            }
        })
    }(jQuery),
    function (e) {
        var t = e(window),
            n = e(document),
            r = {
                getOffsets: function () {
                    var t = [];
                    this.sections.each(function (n, r) {
                        t.push(e(r).offset().top)
                    }), this.offsets = t, this.normalizeLastOffset()
                },
                normalizeLastOffset: function () {
                    var e = n.height(),
                        r = t.height(),
                        i = e - r,
                        s = this.offsets.length - 1;
                    this.offsets[s] = Math.min(this.offsets[s], i - 10)
                },
                getActiveOffset: function () {
                    var e = t.scrollTop();
                    for (var n = 0, r = this.offsets.length; n < r; n++)
                        if (this.offsets[n] > e) break;
                    return n - 1
                },
                setItem: function () {
                    var t = this.getActiveOffset(),
                        n;
                    t !== -1 ? (n = this.itens.eq(t+1), n.addClass("active")) : n = e(), this.active && this.active[0] !== n[0] && this.active.addClass("visited").removeClass("active"), this.active = n
                }
            },
            i = e.extend({}, r);
        i.init = function () {
            this.container = e("nav"), this.itens = this.container.find("a"), this.position = null, this.setAbsoluteTop(), this.getSections(), this.getOffsets(), this.fixer()
        }, i.getSections = function () {
            var t = e();
            this.itens.each(function (n, r) {
                var i = e(r).attr("href");
                t = t.add(i)
            }), this.sections = t
        }, i.setAbsoluteTop = function () {
            this.absoluteTop = t.height(), this.position === "absolute" && this.container.css("top", this.absoluteTop)
        }, i.fixer = function () {
            var e, n;
            this.absoluteTop < t.scrollTop() ? (e = "fixed", n = 0) : (e = "absolute", n = this.absoluteTop), this.position !== e && (this.container.css("top", n), this.container.toggleClass("fixed", e === "fixed"), this.position = e)
        }, i.onResizePage = function () {
            this.getOffsets(), this.setAbsoluteTop(), this.fixer()
        }, i.onScroll = function () {
            this.setItem(), this.fixer()
        };
        var s = e.extend({}, r);
        s.init = function () {
            this.sections = e("[data-sidenav-track]"), this.active = e(), this.create(), this.getOffsets()
        }, s.create = function () {
            var t = e('<div class="sidenav" style="display:none"/>');
            this.sections.each(function (n, r) {
                var i = r.className.match(/section-(\S+)/) && RegExp.$1,
                    s = e(r).find(":header:first").text();
                t.append('<a href="#' + r.id + '" class="marker-' + i + '" title="' + s + '">' + s + "</a>")
            }), e(document.body).append(t), this.itens = t.children()
        }, s.onResizePage = function () {
            this.getOffsets()
        }, s.onScroll = function () {
            this.setItem()
        }, i.init(), s.init(), t.on({
            scroll: function () {
                i.onScroll(), s.onScroll()
            },
            resizepage: function () {
                i.onResizePage(), s.onResizePage()
            }
        })
    }(jQuery),
    function (e) {
        function n(e) {
            this.section = e, this.background = e.find(".background"), this.backgroundWidth = this.background.width(), this.backgroundHeight = this.background.height()
        }
        var t = e(window);
        n.instances = [], n.resize = function () {
            var r = t.width(),
                i = t.height();
            e.each(n.instances, function () {
                this.resize(r, i)
            }), e(document).trigger("resizepage")
        }, n.init = function () {
            e(".fullsize").each(function () {
                var t = new n(e(this));
                n.instances.push(t)
            }), t.on("resize", this.resize), this.resize()
        }, n.prototype.resize = function (e, t) {
            this.section.height(t), this.backgroundResize(e, t)
        }, n.prototype.backgroundScale = function (e, t) {
            var n = this.backgroundWidth / e,
                r = this.backgroundHeight / t;
            return Math.min(n, r)
        }, n.prototype.backgroundResize = function (e, t) {
            var n = this.backgroundScale(e, t);
            e = this.backgroundWidth / n, t = this.backgroundHeight / n, this.background.css({
                width: e,
                height: t,
                marginLeft: -e / 2,
                marginTop: -t / 2
            })
        }, n.init()
    }(jQuery),
    function (e) {
        e(".tabs").each(function () {
            var t = e(this),
                n = t.find(".tablist a"),
                r = t.find(".tabpanel"),
                i = "active";
            t.on("click", n.selector, function (t) {
                t.preventDefault();
                var s = e(this);
                n.removeClass(i), r.removeClass(i), s.addClass(i), e(s.attr("href")).addClass(i)
            })
        });
        var t = document.location.hash;
        t[0] === "#" && e(".tablist a[href=" + t + "]").click()
    }(jQuery), window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
        return window.setTimeout(e, 1e3 / 60)
    },
    function (e) {
        var t = e(window),
            n = e(document),
            r = {};
        r.init = function () {
            this.easing = !0, this.buildList(), this.updateScreen(), this.stopEasing(), this.render(), this.startAnimation(), this.addEventListener()
        }, r.addEventListener = function () {
            var e = this;
            t.on("scroll", function () {
                e.updateScreen()
            }), n.on("resizepage", function () {
                e.onResizePage()
            })
        }, r.stopEasing = function () {
            var e = this;
            this.easing = !1, setTimeout(function () {
                e.easing = !0
            }, 1e3)
        }, r.updateScreen = function () {
            this.top = t.scrollTop()
        }, r.onResizePage = function () {
            this.buildList(), this.updateScreen(), this.stopEasing()
        }, r.buildList = function () {
            var t = [];
            e("[data-parallax]").each(function () {
                var n = e(this),
                    r = n.position(),
                    i = n.data("parallax").split(" x ");
                n.css({
                    left: 0,
                    top: 0
                }), t.push({
                    element: n,
                    scrollTop: n.offset().top,
                    x: 0,
                    y: 0,
                    scale: {
                        x: parseFloat(i[0]),
                        y: parseFloat(i[1]) * 2
                    }
                })
            }), this.list = t
        }, r.startAnimation = function () {
            var e = this;
            this.animationLoop = function () {
                e.render(), requestAnimationFrame(e.animationLoop)
            }, e.animationLoop()
        }, r.render = function () {
            var t = this;
            e.each(this.list, function () {
                var e = this,
                    n = t.top - e.scrollTop,
                    r = e.scale.x * n,
                    i = e.scale.y * n;
                t.easing ? (Math.abs(e.x - r) > 1 && (e.x += (r - e.x) / 3), Math.abs(e.y - i) > 1 && (e.y += (i - e.y) / 3)) : (e.x = r, e.y = i), e.element.css({
                    left: e.x,
                    top: e.y
                })
            })
        }, r.init()
    }(jQuery),
    function (e) {
        function n(e) {
            this.field = t.find(e), this.value = null, this.create(), this.setCheked(), this.addListeners()
        }

        function r(e) {
            this.field = t.find(e), this.value = null, this.create(), this.setSelected(), this.addListeners()
        }
        var t = e(".vendors-form");
        n.prototype.create = function () {
            this.field.addClass("radio")
        }, n.prototype.setCheked = function () {
            var t = this;
            this.value = null, this.field.each(function (n, r) {
                var i = e(r).next();
                r.checked ? (i.addClass("checked"), t.value = r.value) : i.removeClass("checked")
            })
        }, n.prototype.addListeners = function () {
            var e = this;
            this.field.on("click", function () {
                e.setCheked()
            })
        }, n.prototype.on = function (e, t) {
            this.field.on(e, t)
        }, r.prototype.create = function () {
            this.field.wrap('<div class="select"/>').after('<span class="label"/>')
        }, r.prototype.setOptions = function (t) {
            var n = this.field[0];
            n.options.length = 0, t && (e.isArray(t) || (t = [t]), e.each(t, function (e, t) {
                n.options[e] = new Option(t.text || t, t.value || "")
            })), this.setSelected()
        }, r.prototype.setSelected = function () {
            var e = this.field.children(":selected");
            this.field.next().text(e.text()), this.value = e.val()
        }, r.prototype.addListeners = function () {
            var e = this;
            this.field.on("change", function () {
                e.setSelected()
            })
        }, r.prototype.on = function (e, t) {
            this.field.on(e, t)
        };
        var i = {
                product: new n("input[name=product]"),
                state: new r("select[name=state]"),
                city: new r("select[name=city]")
            },
            s = {
                selectFirst: "Selecione",
                selectLoading: "Carregando..."
            };
        s.init = function () {
            this.addListeners()
        }, s.request = function () {
            var n = t.serialize();
            e.ajax("vendors-proxy/", {
                data: n,
                success: function (e) {
                    s.parseRequest(e)
                }
            })
        }, s.parseRequest = function (e) {
            var t = i[e.type];
            e.items.unshift(this.selectFirst), t.setOptions(e.items)
        }, s.onSubmitForm = function (n) {
            i.product.value ? (t.attr({
                action: "http://www.mercur.com.br/ondeencontrar/filtro",
                method: "post",
                target: "_blank"
            }), e("#vendors-product-post").val(i.product.value), e("#vendors-state-post").val(i.state.value), e("#vendors-city-post").val(i.city.value)) : (alert("Você deve selecionar o tipo de bolsa."), n.preventDefault())
        }, s.onChangeProduct = function (e) {
            i.state.setOptions(this.selectLoading), i.city.setOptions(null), this.request()
        }, s.onChangeState = function (e) {
            i.city.setOptions(this.selectLoading), this.request()
        }, s.addListeners = function () {
            t.on("submit", function (e) {
                s.onSubmitForm(e)
            }), i.product.on("click", function (e) {
                s.onChangeProduct(e)
            }), i.state.on("change", function (e) {
                s.onChangeState(e)
            })
        }, s.init()
    }(jQuery);
	
	function resizeWindow(){
		height = $(window).scrollTop();
		if(height <= 600){
			$(".veroface").hide("slow");
		}else{
			$(".veroface").show("slow");
		}
	}
	
	$(document).ready(function() {
		$(".veroface").hide();
		$(window).on('resize scroll', resizeWindow).trigger('scroll');
	});