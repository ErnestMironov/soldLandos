/* eslint-disable func-names */
/**
*	jQuery Plugin for simple vertical scrolling - horizontal movement parallax effect
*	I wrote this plugin for a project we have done.
*
*	License:
*	The MIT License (MIT)
*
*   Copyright (c) 2013 pixxelfactory
*
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*   of this software and associated documentation files (the "Software"), to deal
*   in the Software without restriction, including without limitation the rights
*   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*   copies of the Software, and to permit persons to whom the Software is
*   furnished to do so, subject to the following conditions:
*
*   The above copyright notice and this permission notice shall be included in
*   all copies or substantial portions of the Software.
*
*   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*   THE SOFTWARE.
* */
(function ($) {
  $.jInvertScroll = function (sel, options) {
    const defaults = {
      width: 'auto', // The horizontal container width
      height: 'auto', // How far the user can scroll down (shorter distance = faster scrolling)
      onScroll(percent) { // Callback fired when the user scrolls down, the percentage of how far the user has scrolled down gets passed as parameter (format: 0.xxxx - 1.0000)
        // do whatever you like
      },
    };

    const config = $.extend(defaults, options);

    if (typeof sel === 'Object' && sel.length > 0) {
      return;
    }

    const elements = [];
    let longest = 0;

    // Extract all selected elements from dom and save them into an array
    $.each(sel, (i, val) => {
      $(val).each(function (e) {
        let tmp = {
          width: $(this).width(),
          height: $(this).height(),
          el: $(this),
        };

        elements.push(tmp);


        if (longest < tmp.width) {
          longest = tmp.width;
        }
      });
    });

    // Use the longest elements width + height if set to auto
    if (config.width == 'auto') {
      config.width = longest;
    }

    if (config.height == 'auto') {
      config.height = longest;
    }

    // Set the body to the selected height
    $('body').css('height', `${config.height}px`);

    // Listen for the actual scroll event
    $(window).on('scroll resize', function (e) {
      const currY = $(this).scrollTop();
      const totalHeight = $(document).height();
      const winHeight = $(this).height();
      const winWidth = $(this).width();

      // Current percentual position
      const percent = (currY / (totalHeight - winHeight)).toFixed(4);

      // Call the onScroll callback
      if (typeof config.onScroll === 'function') {
        config.onScroll.call(this, percent);
      }

      // do the position calculation for each element
      $.each(elements, (i, el) => {
        let pos = Math.floor((el.width - winWidth) * percent) * -1;
        el.el.css('left', pos);
      });
    });
  };
}(jQuery));
