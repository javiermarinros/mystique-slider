/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, a, c, b, d) {
        return jQuery.easing[jQuery.easing.def](e, a, c, b, d)
    },
    easeInQuad: function (e, a, c, b, d) {
        return b * (a /= d) * a + c
    },
    easeOutQuad: function (e, a, c, b, d) {
        return -b * (a /= d) * (a - 2) + c
    },
    easeInOutQuad: function (e, a, c, b, d) {
        return 1 > (a /= d / 2) ? b / 2 * a * a + c : -b / 2 * (--a * (a - 2) - 1) + c
    },
    easeInCubic: function (e, a, c, b, d) {
        return b * (a /= d) * a * a + c
    },
    easeOutCubic: function (e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + c
    },
    easeInOutCubic: function (e, a, c, b, d) {
        return 1 > (a /= d / 2) ? b / 2 * a * a * a + c : b / 2 * ((a -= 2) * a * a + 2) + c
    },
    easeInQuart: function (e, a, c, b, d) {
        return b * (a /= d) * a * a * a + c
    },
    easeOutQuart: function (e, a, c, b, d) {
        return -b * ((a = a / d - 1) * a * a * a - 1) + c
    },
    easeInOutQuart: function (e, a, c, b, d) {
        return 1 > (a /= d / 2) ? b / 2 * a * a * a * a + c : -b / 2 * ((a -= 2) * a * a * a - 2) + c
    },
    easeInQuint: function (e, a, c, b, d) {
        return b * (a /= d) * a * a * a * a + c
    },
    easeOutQuint: function (e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a * a * a + 1) + c
    },
    easeInOutQuint: function (e, a, c, b, d) {
        return 1 > (a /= d / 2) ? b / 2 * a * a * a * a * a + c : b / 2 * ((a -= 2) * a * a * a * a + 2) + c
    },
    easeInSine: function (e, a, c, b, d) {
        return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
    },
    easeOutSine: function (e, a, c, b, d) {
        return b * Math.sin(a / d * (Math.PI / 2)) + c
    },
    easeInOutSine: function (e, a, c, b, d) {
        return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
    },
    easeInExpo: function (e, a, c, b, d) {
        return 0 == a ? c : b * Math.pow(2, 10 * (a / d - 1)) + c
    },
    easeOutExpo: function (e, a, c, b, d) {
        return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c
    },
    easeInOutExpo: function (e, a, c, b, d) {
        return 0 == a ? c : a == d ? c + b : 1 > (a /= d / 2) ? b / 2 * Math.pow(2, 10 * (a - 1)) + c : b / 2 * (-Math.pow(2, -10 * --a) + 2) + c
    },
    easeInCirc: function (e, a, c, b, d) {
        return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c
    },
    easeOutCirc: function (e, a, c, b, d) {
        return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
    },
    easeInOutCirc: function (e, a, c, b, d) {
        return 1 > (a /= d / 2) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + c : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
    },
    easeInElastic: function (e, a, c, b, d) {
        var e = 1.70158,
        f = 0,
        g = b;
        if (0 == a) return c;
        if (1 == (a /= d)) return c + b;
        f || (f = 0.3 * d);
        g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
        return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f)) + c
    },
    easeOutElastic: function (e, a, c, b, d) {
        var e = 1.70158,
        f = 0,
        g = b;
        if (0 == a) return c;
        if (1 == (a /= d)) return c + b;
        f || (f = 0.3 * d);
        g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
        return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c
    },
    easeInOutElastic: function (e, a, c, b, d) {
        var e = 1.70158,
        f = 0,
        g = b;
        if (0 == a) return c;
        if (2 == (a /= d / 2)) return c + b;
        f || (f = d * 0.3 * 1.5);
        g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
        return 1 > a ? -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + c : 0.5 * g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c
    },
    easeInBack: function (e, a, c, b, d, f) {
        void 0 == f && (f = 1.70158);
        return b * (a /= d) * a * ((f + 1) * a - f) + c
    },
    easeOutBack: function (e, a, c, b, d, f) {
        void 0 == f && (f = 1.70158);
        return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c
    },
    easeInOutBack: function (e, a, c, b, d, f) {
        void 0 == f && (f = 1.70158);
        return 1 > (a /= d / 2) ? b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c : b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
    },
    easeInBounce: function (e, a, c, b, d) {
        return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c
    },
    easeOutBounce: function (e, a, c, b, d) {
        return (a /= d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
    },
    easeInOutBounce: function (e, a, c, b, d) {
        return a < d / 2 ? 0.5 * jQuery.easing.easeInBounce(e, 2 * a, 0, b, d) + c : 0.5 * jQuery.easing.easeOutBounce(e, 2 * a - d, 0, b, d) + 0.5 * b + c
    }
});


// image slider -- this is a improved version of http://webdevkit.net/ubillboard/
// @todo: make delay directly proportional with the square/stripe size
jQuery.fn.slider = function (cfg) {

    cfg = $.extend({
        width: false,
        height: false,
        squareSize: 80, // = 12 x 12 on 960x320
        stripeWidth: 80, // = 4 columns on 960x320
        showPager: true,
        showArrows: true,
        autoplay: true,
        transition: 'random',
        delay: 10 // in seconds
    }, cfg);

    return this.each(function () {

        // set w/h from css if not defined
        cfg.width = cfg.width || $(this).width();
        cfg.height = cfg.height || $(this).height();

        // minimum 47px, max 188px
        cfg.squareSize = Math.min(Math.max(cfg.squareSize, 47), 188);
        cfg.stripeWidth = Math.min(Math.max(cfg.stripeWidth, 30), 188);
        cfg.delay = (parseInt($(this).data('delay'), 10) * 1000) || (cfg.delay * 1000);

        var loader = $('<div class="loading"></div>').css({
            left: cfg.width / 2 - 80,
            top: cfg.height / 2 - 10
        }),
        controls = $('<div class="i-controls"></div>'),
        nextSlide = $('<div class="next-slide"></div>'),
        link = $('<a href="" class="link"></a>').hide().appendTo(controls),
        block = $(this).prepend(nextSlide).append(controls).prepend(loader),

        slides = [], // global slides array
        currentSlideIndex = 0, // slide currently in nextSlide
        prevSlideIndex = 0, // slide in background
        totalImages = $('.slide', block).length, // image count
        totalImagesLoaded = 0,
        timeout = null,
        playing = (typeof block.data('autoplay') !== 'undefined') ? block.data('autoplay') : cfg.autoplay, // holds current play/pause status
        playState = false,

        squareRows = Math.ceil(cfg.height / cfg.squareSize), // number of square rows
        squareCols = Math.ceil(cfg.width / cfg.squareSize), // number of square columns
        stripeCols = Math.ceil(cfg.width / cfg.stripeWidth), // number of stripe columns

        // animation functions
        animations = {

            animationFade: function (currentIndex, destinationIndex, callback) {
                nextSlide.css({
                    backgroundImage: 'url(' + slides[destinationIndex].image + ')',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, {
                    duration: 1333,
                    complete: callback,
                    easing: 'easeOutSine'
                });
            },

            animationSlideH: function (currentIndex, destinationIndex, callback, reverse) {
                nextSlide.css({
                    backgroundImage: 'url(' + slides[destinationIndex].image + ')',
                    left: reverse ? cfg.width : -cfg.width
                }).animate({
                    left: 0
                }, {
                    duration: 999,
                    complete: callback,
                    easing: 'easeOutExpo'
                });
            },

            animationSlideV: function (currentIndex, destinationIndex, callback, reverse) {
                nextSlide.css({
                    backgroundImage: 'url(' + slides[destinationIndex].image + ')',
                    top: reverse ? cfg.height : (-cfg.height)
                }).animate({
                    top: 0
                }, {
                    duration: 999,
                    complete: callback,
                    easing: 'easeOutExpo'
                });
            },

            animationRandomTiles: function (currentIndex, destinationIndex, callback) {

                // create a array containing delay values for each element
                for (var delayTable = [], i = 0; i < (squareRows * squareCols - 1); ++i) delayTable[i] = 20 * i;

                // shuffle it
                for (var j, x, i = delayTable.length; i; j = parseInt(Math.random() * i), x = delayTable[--i], delayTable[i] = delayTable[j], delayTable[j] = x) {};

                $('.square', nextSlide).css({
                    backgroundImage: 'url(' + slides[destinationIndex].image + ')',
                    opacity: 0
                }).each(function (i) {
                    $(this).stop().delay(delayTable[i]).animate({
                        opacity: 1
                    }, {
                        duration: 999,
                        easing: 'easeOutQuad',
                        complete: (Math.max.apply(Math, delayTable) !== delayTable[i]) || callback
                    });
                });

            },

            animationHorizontalTiles: function (currentIndex, destinationIndex, callback, reverse) {
                var end = reverse ? 0 : (squareRows * squareCols - 1);

                // delay: 4x10 > 30  20x8 > 5
                $('.square', nextSlide).css({
                    backgroundImage: 'url(' + slides[destinationIndex].image + ')',
                    opacity: 0
                }).each(function (i) {
                    $(this).stop().delay(30 * (reverse ? (squareRows * squareCols - i) : i)).animate({
                        opacity: 1
                    }, {
                        duration: 666,
                        easing: 'easeOutSine',
                        complete: (i !== end) || callback
                    });
                });
            },

            animationDiagonalTiles: function (currentIndex, destinationIndex, callback, reverse) {
                var n = 0,
                end = reverse ? 0 : ((squareRows * squareCols) - 1);

                $('.square', nextSlide).css({
                    backgroundImage: 'url(' + slides[reverse ? destinationIndex : currentIndex].image + ')',
                    opacity: reverse ? 0 : 1
                });

                if (reverse) _resetSquares(-20, -20);
                else nextSlide.css('background-image', 'url(' + slides[destinationIndex].image + ')');

                block.removeClass('no-overflow');

                for (var y = 0; y < squareRows; y++)
                    for (var x = 0; x < squareCols; x++) {
                        $('.square-' + n, nextSlide).stop().delay(100 * (reverse ? (squareRows - y + squareCols - x) : (x + y))).animate({
                            opacity: reverse ? 1 : 0,
                            left: reverse ? (x * cfg.squareSize) : (x * cfg.squareSize - 20),
                            top: reverse ? (y * cfg.squareSize) : (y * cfg.squareSize - 20)
                        }, {
                            duration: 333,
                            complete: (n !== end) || callback
                        });
                        ++n;
                    }

            },

            animationSpiral: function (currentIndex, destinationIndex, callback, reverse) {
                var order = [],
                rowsHalf = Math.ceil(squareRows / 2),
                x, y, z, n = 0;

                // create a spiral matrix
                for (z = 0; z < rowsHalf; z++) {
                    y = z;
                    for (x = z; x < squareCols - z - 1; x++) order[n++] = y * squareCols + x;

                    x = squareCols - z - 1;
                    for (y = z; y < squareRows - z - 1; y++) order[n++] = y * squareCols + x;

                    y = squareRows - z - 1;
                    for (x = squareCols - z - 1; x > z; x--) order[n++] = y * squareCols + x;

                    x = z;
                    for (y = squareRows - z - 1; y > z; y--) order[n++] = y * squareCols + x;
                };

                if (reverse) order.reverse();

                for (var m = 0; m < n; m++)
                    $('.square-' + order[m], nextSlide).css({
                        backgroundImage: 'url(' + slides[destinationIndex].image + ')',
                        opacity: 0
                    }).each(function (i) {
                        $(this).stop().delay(30 * m).animate({
                            opacity: 1
                        }, {
                            duration: 666,
                            easing: 'easeOutSine',
                            complete: (m != n - 1) || callback
                        });
                    });

            },

            animationRandomStripes: function (currentIndex, destinationIndex, callback) {
                // create a array containing delay values for each element
                for (var delayTable = [], i = 0; i < (stripeCols - 1); ++i) delayTable[i] = 60 * i;

                // shuffle it
                for (var j, x, i = delayTable.length; i; j = parseInt(Math.random() * i), x = delayTable[--i], delayTable[i] = delayTable[j], delayTable[j] = x) {};

                $('.stripe', nextSlide).css({
                    backgroundImage: 'url(' + slides[destinationIndex].image + ')',
                    opacity: 0,
                    top: -40
                });

                for (var i = 0; i < stripeCols; i++) {
                    $('.stripe-' + i, nextSlide).stop().delay(delayTable[i]).animate({
                        opacity: 1,
                        top: 0
                    }, {
                        duration: 999,
                        specialEasing: {
                            opacity: 'easeOutQuad',
                            top: 'easeOutElastic'
                        },
                        complete: (Math.max.apply(Math, delayTable) !== delayTable[i]) || callback
                    });
                }
            },

            animationStripeWave: function (currentIndex, destinationIndex, callback, reverse) {
                var end = reverse ? 0 : (stripeCols - 1);
                $('.stripe', nextSlide).css({
                    backgroundImage: 'url(' + slides[destinationIndex].image + ')',
                    opacity: 0,
                    top: -30
                });

                block.removeClass('no-overflow');

                for (var i = 0; i < stripeCols; i++) {
                    $('.stripe-' + i, nextSlide).stop().delay(30 * (reverse ? (stripeCols - i) : i)).animate({
                        opacity: 1,
                        top: 0
                    }, {
                        duration: 999,
                        specialEasing: {
                            opacity: 'easeOutSine',
                            top: 'easeOutElastic'
                        },
                        complete: (i !== end) || callback
                    });
                }
            },

            animationCurtain: function (currentIndex, destinationIndex, callback, reverse) {
                var end = reverse ? 0 : (stripeCols - 1);

                $('.stripe', nextSlide).css({
                    backgroundImage: 'url(' + slides[destinationIndex].image + ')',
                    opacity: 0,
                    height: 0,
                    top: -(cfg.height / 2)
                });

                block.removeClass('no-overflow');

                for (var i = 0; i < stripeCols; i++) {
                    $('.stripe-' + i, nextSlide).stop().delay(70 * (reverse ? (stripeCols - i) : i)).animate({
                        opacity: 1,
                        height: cfg.height,
                        top: 0
                    }, {
                        duration: 333,
                        specialEasing: {
                            opacity: 'easeInSine',
                            height: 'easeOutQuad',
                            top: 'easeOutQuad'
                        },
                        complete: (i !== end) || callback
                    });
                }

            },

            animationInterweave: function (currentIndex, destinationIndex, callback, reverse) {
                var end = reverse ? 0 : (stripeCols - 1);

                $('.stripe', nextSlide).css({
                    backgroundImage: 'url(' + slides[destinationIndex].image + ')',
                    opacity: 0
                });

                $('.stripe:even', nextSlide).css('top', -cfg.height);
                $('.stripe:odd', nextSlide).css('top', cfg.height);

                block.removeClass('no-overflow');

                for (var i = 0; i < stripeCols; i++) {
                    $('.stripe-' + i, nextSlide).stop().delay(50 * (reverse ? (stripeCols - i) : i)).animate({
                        opacity: 1,
                        top: 0
                    }, {
                        duration: 666,
                        specialEasing: {
                            opacity: 'easeOutSine',
                            top: 'easeOutExpo'
                        },
                        complete: (i !== end) || callback
                    });
                }

            }

        },

        // check if anything is being animated
        isAnimating = function () {
            return nextSlide.is(':animated') || $('div', nextSlide).is(':animated') || $('.caption', controls).is(':animated');
        },

        // switches the current slide with the next slide
        _showSlide = function (index, reverse) {
            clearTimeout(timeout);
            prevSlideIndex = currentSlideIndex;
            currentSlideIndex = index;
            block.css('background-image', 'url(' + slides[prevSlideIndex].image + ')');
            link.hide();

            $('.pager a', controls).removeClass('current');
            $('.pager a:eq(' + currentSlideIndex + ')', controls).addClass('current');

            _hideDescription();

            var getRandomTransition = function () {
                var count = 0,
                result;
                for (var prop in animations) if (Math.random() < 1 / ++count) result = prop;
                return result;
            },

            transition = (slides[currentSlideIndex].transition != 'random') ? animations['animation' + slides[currentSlideIndex].transition] : animations[getRandomTransition()];

            transition(prevSlideIndex, currentSlideIndex, function () {
                block.removeClass('no-overflow').addClass('no-overflow').css('background-image', 'url(' + slides[currentSlideIndex].image + ')');
                $('div', nextSlide).add(nextSlide).css('background-image', '');
                _resetSquares(0, 0);
                _resetStripes();
                _showDescription(currentSlideIndex);

                // change link's href and triggeer a custom event to let the lightbox know about this
                if (slides[currentSlideIndex].link) link.attr('href', slides[currentSlideIndex].link).show().trigger('href_updated');

                if (!playing) return;
                _setupTimeout();
            },
            reverse);
        },

        _setupTimeout = function () {
            timeout = setTimeout(function () {
                var index = typeof slides[currentSlideIndex + 1] == 'undefined' ? 0 : currentSlideIndex + 1;
                _showSlide(index);
            }, slides[currentSlideIndex].delay);
        },

        // shows description, create it if necessary
        _showDescription = function (current) {

            // normally the 2nd condition should never be checked, but I encountered a flicker on certain ocassions, so we leave it until I find the issue...
            var caption = ($('.caption', controls).length === 0) ? $(slides[current].caption).appendTo(controls) : $('.caption', controls).replaceAll($(slides[current].caption));

            if (caption.hasClass('push-left')) {
                caption.css('width', (0.3 * cfg.width)).css({
                    opacity: 0,
                    left: -(0.3 * cfg.width)
                }).stop().show().animate({
                    opacity: 1,
                    left: 0
                }, {
                    duration: 333,
                    easing: 'easeOutExpo'
                });

            } else if (caption.hasClass('push-right')) {
                caption.css('width', (0.3 * cfg.width)).css({
                    opacity: 0,
                    right: -(0.3 * cfg.width)
                }).stop().show().animate({
                    opacity: 1,
                    right: 0
                }, {
                    duration: 333,
                    easing: 'easeOutExpo'
                });

            } else {
                caption.css({
                    opacity: 0,
                    bottom: -caption.outerHeight()
                }).stop().show().animate({
                    opacity: 1,
                    bottom: 0
                }, {
                    duration: 333,
                    easing: 'easeOutExpo'
                });

            }
        },

        // hide description
        _hideDescription = function () {

            var caption = $('.caption', controls);

            if (caption.hasClass('push-left')) {
                caption.stop().animate({
                    opacity: 0,
                    left: -(0.3 * cfg.width)
                }, {
                    duration: 333,
                    easing: 'easeOutExpo',
                    complete: function () {
                        caption.remove();
                    }
                });
            } else if (caption.hasClass('push-right')) {
                caption.stop().animate({
                    right: -(0.3 * cfg.width),
                    opacity: 0
                }, {

                    duration: 333,
                    easing: 'easeOutExpo',
                    complete: function () {
                        caption.remove();
                    }
                });
            } else {
                caption.stop().animate({
                    opacity: 0,
                    bottom: -caption.outerHeight()
                }, {
                    duration: 333,
                    easing: 'easeOutExpo',
                    complete: function () {
                        caption.remove();
                    }
                });
            }
        },

        _resetSquares = function (offsetX, offsetY) {

            for (var y = 0; y < squareRows; y++)
                for (var x = 0; x < squareCols; x++)
                    $('.square-' + (squareCols * y + x), nextSlide).css({
                        backgroundPosition: -x * cfg.squareSize + 'px ' + (-y * cfg.squareSize) + 'px',
                        backgroundRepeat: 'no-repeat',
                        position: 'absolute',
                        left: x * cfg.squareSize + offsetX,
                        top: y * cfg.squareSize + offsetY,
                        opacity: 0,
                        width: cfg.squareSize,
                        height: cfg.squareSize
                    });
        },

        _resetStripes = function () {
            for (var i = 0; i < stripeCols; i++) {
                $('.stripe-' + i, nextSlide).css({
                    backgroundPosition: -i * cfg.stripeWidth + 'px 0',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    left: i * cfg.stripeWidth,
                    top: 0,
                    opacity: 0,
                    width: cfg.stripeWidth,
                    height: cfg.height
                });
            }
        };


        // process each slide
        $('.slide', block).each(function (i, el) {
            var slide = {
                delay: (parseInt($(this).data('delay')) * 1000) || cfg.delay,
                transition: $(this).data('fx') || cfg.transition,
                link: $('img:first', this).parent('a').attr('href') || '',
                image: $('img:first', this).attr('src'),
                caption: $('.caption', this).clone().wrap('<div></div>').parent().html()
            };

            slides.push(slide);

            // preloader
            $('<img>', this).load(function () {

                ++totalImagesLoaded;

                if (totalImages === totalImagesLoaded) {
                    block.css('background-image', 'url(' + slides[0].image + ')').addClass('no-overflow');

                    if (slides[0].link) link.attr('href', slides[0].link).show().trigger('href_updated');

                    $('.slide', block).remove();
                    loader.remove();

                    // button controls
                    if (block.data('controls')) { // html5 data-controls attribute overrides defaults
                        var items = block.data('controls').replace(/ /g, '').split(',');
                        cfg.showPager = !! ~$.inArray('pager', items);
                        cfg.showArrows = !! ~$.inArray('arrows', items);
                    };

                    // previous/next arrow buttons
                    if (cfg.showArrows) {

                        $('<a>', {
                            'class': 'prev',
                            'css': {
                                top: cfg.height / 2 - 48,
                                opacity: 0
                            },
                            'click': function () {
                                if (isAnimating()) return;
                                var index = currentSlideIndex - 1;
                                if (typeof slides[index] == 'undefined') index = totalImages - 1;
                                _showSlide(index, true);
                                return false;
                            }
                        }).appendTo(controls);

                        $('<a>', {
                            'class': 'next',
                            'css': {
                                top: cfg.height / 2 - 48,
                                opacity: 0
                            },
                            'click': function () {
                                if (isAnimating()) return;
                                var index = currentSlideIndex + 1;
                                if (typeof slides[index] == 'undefined') index = 0;
                                _showSlide(index);
                                return false;
                            }
                        }).appendTo(controls);

                    };

                    // pagination
                    if (cfg.showPager) {

                        var current = 0,
                        pager = $('<div>', {
                            'class': 'pager',
                            'css': {
                                opacity: 0
                            }
                        }).appendTo(controls);

                        for (var i = 0; i < totalImages; i++) {
                            $('.pager', controls).append($('<a' + (i == current ? ' class="current"' : '') +  ' title="'+$('h1,h2,h3,h4,.title',slides[i].caption).first().text()+'">&nbsp;</a>'));  
                        }  

                        $('.pager a', controls).click(function () {
                            if ($(this).index() == currentSlideIndex || isAnimating()) return false;
                            clearInterval(timeout);
                            _showSlide($(this).index(), (currentSlideIndex > $(this).index()));
                            return false;
                        });

                    };

                    controls.hover(function () {
                        $('.pager, a.next, a.prev', controls).stop().animate({
                            opacity: 1
                        }, 333);
                        // pause on mouseover / unpause on mouseout
                        clearInterval(timeout);
                        if (playing) {
                            playState = true;
                            playing = false;
                        }
                    }, function () {
                        $('.pager, a.next, a.prev', controls).stop().animate({
                            opacity: 0
                        }, 666);
                        if (playState) {
                            _setupTimeout();
                            playing = true;
                        }
                    });

                    _showDescription(0);

                    // set up squares
                    for (var i = 0; i < (squareRows * squareCols); i++) nextSlide.append($('<div />').addClass('square square-' + i));
                    _resetSquares(0, 0);

                    // set up stripes
                    for (var i = 0; i < stripeCols; i++) nextSlide.append($('<div />').addClass('stripe stripe-' + i));
                    _resetStripes();

                    controls.fadeIn(333);

                    if (totalImages < 2 || !playing) return;
                    _setupTimeout();

                }
            }).attr('src', slide.image);
        });

    });
}