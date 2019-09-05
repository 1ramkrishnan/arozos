// Generated by CoffeeScript 2.0.0-beta4
(function() {
  // ------------------------------------------------------------------------
  // 變數與常數設置
  // ------------------------------------------------------------------------

  // 模組名稱。
  var Attribute, ClassName, EVENT_NAMESPACE, Error, Event, MODULE_NAMESPACE, Metadata, NAME, Position, Selector, Settings, duration;

  NAME = 'popup';

  // 模組事件鍵名。
  EVENT_NAMESPACE = `.${NAME}`;

  // 模組命名空間。
  MODULE_NAMESPACE = `module-${NAME}`;

  // 模組設定。
  Settings = {
    // 消音所有提示，甚至是錯誤訊息。
    silent: true,
    // 顯示除錯訊息。
    debug: true,
    // 監聽 DOM 結構異動並自動重整快取。
    observeChanges: true,
    // 欲使用的彈出式訊息元素選擇器（如果已經有先建立好的話），`false` 的話則是即時產生。
    popup: false,
    // 同時是否僅能有一個彈出式訊息出現在螢幕上。
    exclusive: true,
    // 彈出式訊息的邊界元素，彈出式訊息會試圖不要超過這個元素。
    boundary: 'body',
    // 此彈出式訊息偵測畫面是否有捲動的元素選擇器，如果指定元素有捲動事件則會自動隱藏此彈出式訊息。
    scrollContext: window,
    // 當彈出式訊息無法符合邊界所會往上找的最大層數，設為 `0` 即表示當不符合邊界時直接失敗。
    maxSearchDepth: 10,
    // 偏好的彈出式訊息出現位置。
    position: 'top',
    // 欲觸發彈出式訊息的事件，如：`click`、`hover`、`focus`、`manul`。
    on: 'hover',
    // 觸發的延遲毫秒數。
    delay: {
      // 欲顯示彈出式訊息前所需的毫秒數。
      show: 50,
      // 隱藏彈出式訊息前所等待的毫秒數。
      hide: 50
    },
    // 過場動畫。
    transition: 'auto',
    // 過場動畫的演繹毫秒時間。
    duration: 'auto',
    // 游標是否能在彈出式訊息遊走，如：導覽式彈出選單。
    hoverable: false,
    // 是否能在點擊彈出式訊息以外的地方自動關閉。
    closable: true,
    // 是否要在指定捲動時自動隱藏此彈出式訊息。
    hideOnScroll: 'auto',
    // 是否帶有指標外觀。
    pointing: true,
    // 是否為反色外觀。
    inverted: false,
    // 目標元素選擇器，彈出式訊息會以這個元素為主。
    target: false,
    // 欲套用的樣式名稱，以空白分隔。
    variation: false,
    // 內容純文字。
    content: false,
    // 標題純文字。
    title: false,
    // 彈出式訊息的 HTML 內容，如果採用此屬性則會忽略 `content` 與 `title`。
    html: false,
    // 當彈出式訊息被建立時所會呼叫的回呼函式。
    onCreate: (element) => {},
    // 當彈出式訊息不再被需要且從頁面上移除時所會呼叫的回呼函式。
    onRemove: (element) => {},
    // 當彈出式訊息開始顯示時所會呼叫的回呼函式，回傳 `false` 將會停止顯示。
    onShow: (element) => {
      return true;
    },
    // 當彈出式訊息動畫結束並顯示在畫面上時所會呼叫的回呼函式。
    onVisible: (element) => {},
    // 當彈出式訊息開始消失時所會呼叫的回呼函式，回傳 `false` 將會避免消失。
    onHide: (element) => {
      return true;
    },
    // 當彈出式訊息已經完全消失時所會呼叫的回呼函式。
    onHidden: (element) => {},
    // 當彈出式訊息無法在畫面上產生或放置（不合適尺寸）時所會呼叫的回呼函式。
    onUnplaceable: (element) => {}
  };

  // 事件名稱。
  Event = {
    CREATE: `create${EVENT_NAMESPACE}`,
    REMOVE: `remove${EVENT_NAMESPACE}`,
    SHOW: `show${EVENT_NAMESPACE}`,
    VISIBLE: `visible${EVENT_NAMESPACE}`,
    HIDE: `hide${EVENT_NAMESPACE}`,
    HIDDEN: `hidden${EVENT_NAMESPACE}`,
    UNPLACEABLE: `unplaceable${EVENT_NAMESPACE}`,
    CLICK: `click${EVENT_NAMESPACE}`,
    FOCUS: `focus${EVENT_NAMESPACE}`,
    FOCUSOUT: `focusout${EVENT_NAMESPACE}`,
    BLUR: `blur${EVENT_NAMESPACE}`,
    SCROLL: `scroll${EVENT_NAMESPACE}`,
    MOUSEMOVE: `mousemove${EVENT_NAMESPACE}`,
    MOUSEENTER: `mouseenter${EVENT_NAMESPACE}`,
    MOUSELEAVE: `mouseleave${EVENT_NAMESPACE}`,
    MOUSEOUT: `mouseout${EVENT_NAMESPACE}`,
    ANIMATIONEND: 'animationend'
  };

  // 樣式名稱。
  ClassName = {
    TOP: 'top',
    LEFT: 'left',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    CENTER: 'center',
    VISIBLE: 'visible',
    ANIMATING: 'animating',
    HIDDEN: 'hidden',
    CUSTOM: 'custom',
    POPUP: 'ts popup',
    TITLE: 'title',
    CONTENT: 'content',
    LOADING: 'loading',
    ARROW: 'arrow',
    HOVERABLE: 'hoverable',
    MEDIUM: 'medium',
    INVERTED: 'inverted',
    POINTING: 'pointing',
    SIZES: 'mini tiny small medium large big huge massive'
  };

  // 位置。
  Position = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right'
  };

  // 中繼資料。
  Metadata = {
    SHOW_TIMER: 'showTimer',
    HIDE_TIMER: 'hideTimer',
    ACTIVATOR: 'activator'
  };

  // 選擇器名稱。
  Selector = {
    BODY: 'body',
    DIV: '<div>',
    ARROW: '.arrow',
    VISIBLE: '.visible',
    POPUP: '.ts.popup',
    HTML: 'html'
  };

  // 元素標籤。
  Attribute = {
    CONTENT: 'data-content',
    HTML: 'data-html',
    TITLE: 'data-title',
    VARIATION: 'data-variation',
    TRANSITION: 'data-popup-transition',
    POSITION: 'data-position',
    STYLE: 'style'
  };

  // 錯誤訊息。
  Error = {};

  // 過場動畫毫秒。
  duration = 200;

  // ------------------------------------------------------------------------
  // 模組註冊
  // ------------------------------------------------------------------------
  ts.register({NAME, MODULE_NAMESPACE, Error, Settings}, ({$allModules, $this, element, debug, settings}) => {
    var $arrow, $body, $boundary, $popup, $scrollContext, arrowBorderSize, arrowSize, boundary, boundaryRect, module, offset, padding, popupRect, rect, scrollContext;
    // ------------------------------------------------------------------------
    // 區域變數
    // ------------------------------------------------------------------------
    $body = ts(Selector.BODY);
    $popup = ts();
    $boundary = ts();
    popupRect = {};
    rect = {};
    boundaryRect = {};
    boundary = null;
    $scrollContext = ts();
    $arrow = ts();
    scrollContext = null;
    offset = 20;
    padding = 10;
    arrowBorderSize = 2;
    arrowSize = 8;
    // ------------------------------------------------------------------------
    // 模組定義
    // ------------------------------------------------------------------------
    return module = {
      show: (callback) => {
        module.remove.timers();
        //if module.is.animating()
        //    return
        if (module.is.visible()) {
          return;
        }
        module.reposition();
        if (module.trigger.show() === false) {
          return;
        }
        module.animate.show(() => {
          module.set.animating(false);
          if (callback != null) {
            callback.call();
          }
          return module.trigger.visible();
        });
        return $allModules;
      },
      hide: (callback) => {
        module.remove.timers();
        //if module.is.animating()
        //    return
        if (module.is.hidden()) {
          return;
        }
        if (module.trigger.hide() === false) {
          return;
        }
        module.animate.hide(() => {
          module.set.animating(false);
          if (callback != null) {
            callback.call();
          }
          return module.trigger.hidden();
        });
        return $allModules;
      },
      hideAll: () => {
        ts(Selector.POPUP).filter(Selector.VISIBLE).each((el) => {
          return ts(el).data(Metadata.ACTIVATOR).popup('hide');
        });
        return $allModules;
      },
      hideOthers: () => {
        ts(Selector.POPUP).filter(Selector.VISIBLE).not($popup.get()).each((el) => {
          var $activator;
          $activator = ts(el).data(Metadata.ACTIVATOR);
          if ($activator !== void 0) {
            return $activator.popup('hide');
          }
        });
        return $allModules;
      },
      animate: {
        show: (callback) => {
          return $popup.addClass(`${ClassName.VISIBLE} ${ClassName.ANIMATING}`).off(Event.ANIMATIONEND).one(Event.ANIMATIONEND, () => {
            if (callback != null) {
              return callback.call();
            }
          }).emulate(Event.ANIMATIONEND, duration);
        },
        hide: (callback) => {
          return $popup.removeClass(ClassName.VISIBLE).addClass(ClassName.ANIMATING).one(Event.ANIMATIONEND, () => {
            if (callback != null) {
              return callback.call();
            }
          }).emulate(Event.ANIMATIONEND, duration);
        }
      },
      remove: {
        timers: () => {
          module.remove.show.timer();
          return module.remove.hide.timer();
        },
        show: {
          timer: () => {
            return $this.removeTimer(Metadata.SHOW_TIMER);
          }
        },
        hide: {
          timer: () => {
            return $this.removeTimer(Metadata.HIDE_TIMER);
          }
        },
        popup: () => {
          $popup.remove();
          return $allModules;
        }
      },
      set: {
        loading: (value) => {
          if (value) {
            $popup.addClass(ClassName.LOADING);
          } else {
            $popup.removeClass(ClassName.LOADING);
          }
          return module.reposition();
        },
        position: (position, modify = false) => {
          $popup.attr(Attribute.POSITION, position);
          if (modify) {
            return settings.position = position;
          }
        },
        transition: (transition) => {
          settings.transition = transition;
          $popup.attr(Attribute.TRANSITION, transition);
          if (settings.duration === 'auto') {
            switch (settings.transition) {
              case 'fade':
                duration = 300;
            }
            return;
          }
          duration = settings.duration;
          return $popup.css('animation-duration', settings.duration);
        },
        pointing: (value) => {
          settings.pointing = value;
          if (value) {
            return $popup.addClass(ClassName.POINTING);
          } else {
            return $popup.removeClass(ClassName.POINTING);
          }
        },
        inverted: (value) => {
          settings.inverted = value;
          if (value) {
            return $popup.addClass(ClassName.INVERTED);
          } else {
            return $popup.removeClass(ClassName.INVERTED);
          }
        },
        hoverable: (value) => {
          settings.hoverable = value;
          if (value) {
            return $popup.addClass(ClassName.HOVERABLE);
          } else {
            return $popup.removeClass(ClassName.HOVERABLE);
          }
        },
        boundary: (selector) => {
          $boundary = $this.closest(selector);
          return boundary = $boundary.get();
        },
        scrollContext: (selector) => {
          $scrollContext = ts(selector);
          return scrollContext = $scrollContext.get();
        },
        coordinate: (x, y) => {
          return $popup.css({
            top: x,
            left: y
          });
        },
        width: (width) => {
          return $popup.css({
            width: width
          });
        },
        animating: (value) => {
          if (value) {
            return $popup.addClass(ClassName.ANIMATING);
          } else {
            return $popup.removeClass(ClassName.ANIMATING);
          }
        },
        variation: (value) => {
          return $popup.addClass(value);
        },
        activator: () => {
          return $popup.data(Metadata.ACTIVATOR, $this);
        },
        show: {
          timer: () => {
            return $this.setTimer({
              name: Metadata.SHOW_TIMER,
              callback: module.show,
              interval: settings.delay.show,
              looping: false,
              visible: true
            });
          }
        },
        hide: {
          timer: () => {
            return $this.setTimer({
              name: Metadata.HIDE_TIMER,
              callback: module.hide,
              interval: settings.delay.hide,
              looping: false,
              visible: true
            });
          }
        }
      },
      init: {
        popup: () => {
          var $next;
          if (settings.popup) {
            $popup = ts(settings.popup);
          }
          if ($popup.exists()) {
            module.create.arrow();
            return $popup;
          }
          $next = $this.next();
          if ($next.is(Selector.POPUP)) {
            $popup = $next;
          } else {
            module.create.popup();
          }
          module.set.activator();
          module.create.arrow();
          return $popup;
        }
      },
      get: {
        distance: () => {
          var bRect, offsetLeft, offsetTop;
          bRect = boundaryRect;
          if ($boundary.is(Selector.BODY)) {
            bRect.top = 0;
            bRect.left = 0;
            bRect.bottom = 0;
            bRect.right = 0;
            bRect.width = document.body.clientWidth;
            bRect.height = document.body.clientHeight;
          }
          offsetTop = element.offsetTop;
          offsetLeft = element.offsetLeft;
          if ($this.parents().length !== $popup.parents().length) {
            $this.parents(settings.boundary).each((el, i) => {
              offsetTop += el.offsetTop;
              return offsetLeft += el.offsetLeft;
            });
          }
          return {
            top: offsetTop,
            left: offsetLeft,
            right: boundary.clientWidth - (offsetLeft + rect.width),
            bottom: boundary.scrollHeight - (offsetTop + rect.height),
            viewport: {
              top: rect.top - bRect.top,
              left: rect.left - bRect.left,
              right: bRect.width - ((rect.left - bRect.left) + rect.width),
              bottom: bRect.height - ((rect.top - bRect.top) + rect.height)
            }
          };
        },
        position: () => {
          return $popup.attr(Attribute.POSITION);
        },
        popup: () => {
          return $popup.get();
        }
      },
      repositionArrow: () => {
        return setTimeout(() => {
          module.refresh();
          switch (module.get.position()) {
            case Position.TOP:
              return $arrow.css({
                left: (rect.left + rect.width / 2) - popupRect.left - arrowSize - arrowBorderSize,
                top: popupRect.height - arrowBorderSize
              });
            case Position.RIGHT:
              return $arrow.css({
                left: `-${arrowSize * 2}`,
                top: (rect.top + rect.height / 2) - popupRect.top - arrowSize - arrowBorderSize
              });
            case Position.BOTTOM:
              return $arrow.css({
                left: (rect.left + rect.width / 2) - popupRect.left - arrowSize - arrowBorderSize,
                top: `-${arrowSize * 2}`
              });
            case Position.LEFT:
              return $arrow.css({
                left: popupRect.width - arrowBorderSize,
                top: (rect.top + rect.height / 2) - popupRect.top - arrowSize - arrowBorderSize
              });
          }
        }, 0);
      },
      calculate: {
        direction: (viewport, level, $parent) => {
          var bottomOK, direction, isParentHTML, isReachedDepth, leftOK, noParent, parent, parentRect, rightOK, topOK;
          topOK = viewport.top > popupRect.height + arrowSize;
          rightOK = viewport.right > popupRect.width + arrowSize;
          bottomOK = viewport.bottom > popupRect.height + arrowSize;
          leftOK = viewport.left > popupRect.width + arrowSize;
          direction = null;
          switch (settings.position) {
            case Position.TOP:
              if (topOK) {
                return Position.TOP;
              }
              break;
            case Position.RIGHT:
              if (rightOK) {
                return Position.RIGHT;
              }
              break;
            case Position.BOTTOM:
              if (bottomOK) {
                return Position.BOTTOM;
              }
              break;
            case Position.LEFT:
              if (leftOK) {
                return Position.LEFT;
              }
          }
          switch (false) {
            case !topOK:
              return Position.TOP;
            case !bottomOK:
              return Position.BOTTOM;
            case !rightOK:
              return Position.RIGHT;
            case !leftOK:
              return Position.LEFT;
          }
          $parent = $parent.parent();
          parent = $parent.get();
          parentRect = $parent.rect();
          isParentHTML = $parent.is(Selector.HTML);
          noParent = !$parent.exists();
          isReachedDepth = level >= settings.maxSearchDepth;
          if (isReachedDepth || noParent || isParentHTML) {
            return null;
          }
          viewport = {
            top: rect.top - parentRect.top,
            right: parent.clientWidth - rect.left + rect.width,
            bottom: parent.clientHeight - rect.top + rect.height,
            left: rect.left - parentRect.left
          };
          if ($parent.is(Selector.BODY)) {
            viewport.top = rect.top;
            viewport.left = rect.left;
            viewport.bottom = parent.clientHeight - rect.bottom;
            viewport.right = parent.clientWidth - rect.right;
          }
          return module.calculate.direction(viewport, level + 1, $parent);
        },
        popup: {
          position: () => {
            var direction, distance, position;
            module.refresh();
            distance = module.get.distance();
            direction = module.calculate.direction(distance.viewport, 0, $boundary);
            position = '';
            console.log(distance);
            if (direction === null) {
              module.trigger.unplaceable();
              return;
            }
            switch (direction) {
              case Position.TOP:
                if (!module.is.pointing()) {
                  $popup.css({
                    top: distance.top - popupRect.height + arrowSize
                  });
                } else {
                  $popup.css({
                    top: distance.top - popupRect.height
                  });
                }
                break;
              case Position.RIGHT:
                if (!module.is.pointing()) {
                  $popup.css({
                    left: distance.left + rect.width - arrowSize
                  });
                } else {
                  $popup.css({
                    left: distance.left + rect.width
                  });
                }
                break;
              case Position.BOTTOM:
                if (!module.is.pointing()) {
                  $popup.css({
                    top: distance.top + rect.height - arrowSize
                  });
                } else {
                  $popup.css({
                    top: distance.top + rect.height
                  });
                }
                break;
              case Position.LEFT:
                if (!module.is.pointing()) {
                  $popup.css({
                    left: distance.left - popupRect.width + arrowSize
                  });
                } else {
                  $popup.css({
                    left: distance.left - popupRect.width
                  });
                }
            }
            switch (direction) {
              case Position.TOP:
              case Position.BOTTOM:
                // 如果彈出式訊息寬度剛好全滿，那麼就直接置左。
                if (popupRect.width + 2 >= boundaryRect.width) {
                  $popup.css({
                    left: 0
                  });
                // 如果左右各有空間，那麼就置中彈出式訊息。
                } else if (distance.viewport.left > popupRect.width / 2 && distance.viewport.right > popupRect.width / 2) {
                  $popup.css({
                    left: (distance.left + rect.width / 2) - popupRect.width / 2
                  });
                // 如果預計會超出邊界的話。
                } else if ((distance.left + popupRect.width) - boundaryRect.width > 0 || (distance.right + popupRect.width) - boundaryRect.width > 0) {
                  // 要是觸發元素在左半邊。
                  if (distance.left < boundaryRect.width / 2) {
                    // 就讓彈出式訊息靠齊左側。
                    $popup.css({
                      left: 0 + padding
                    });
                  } else {
                    // 就讓彈出式訊息靠右側。
                    // 不然觸發元素在右半邊的話。
                    $popup.css({
                      left: distance.left + rect.width - popupRect.width + distance.right - padding
                    });
                  }
                } else {
                  $popup.css({
                    left: (distance.left + rect.width / 2) - popupRect.width / 2
                  });
                }
                break;
              case Position.LEFT:
              case Position.RIGHT:
                if (distance.viewport.top > popupRect.height / 2 && distance.viewport.bottom > popupRect.height / 2) {
                  $popup.css({
                    top: (distance.top + rect.height / 2) - popupRect.height / 2
                  });
                } else {
                  if (distance.viewport.top > distance.viewport.bottom) {
                    $popup.css({
                      top: distance.top + rect.height - popupRect.height + distance.viewport.bottom - padding
                    });
                  } else {
                    $popup.css({
                      top: distance.top - distance.viewport.top + padding
                    });
                  }
                }
            }
            module.set.position(direction);
            return module.repositionArrow();
          }
        }
      },
      toggle: () => {
        if (module.is.hidden()) {
          module.show();
        } else {
          module.hide();
        }
        return $allModules;
      },
      change: {
        title: (title) => {
          $popup.find(Selector.TITLE).html(title);
          return $allModules;
        },
        content: (content) => {
          var $content;
          $content = $popup.find(Selector.CONTENT);
          if ($content.exists()) {
            $content.html(content);
          } else {
            $popup.html(content);
            module.create.arrow();
          }
          module.reposition();
          return $allModules;
        },
        html: (html) => {
          $popup.html(html);
          return $allModules;
        }
      },
      is: {
        visible: () => {
          return $popup.hasClass(ClassName.VISIBLE);
        },
        hidden: () => {
          return !module.is.visible();
        },
        showing: () => {
          return $this.hasTimer(Metadata.SHOW_TIMER);
        },
        hiding: () => {
          return $this.hasTimer(Metadata.HIDE_TIMER);
        },
        animating: () => {
          return $popup.hasClass(ClassName.ANIMATING);
        },
        hoverable: () => {
          return settings.hoverable === true;
        },
        pointing: () => {
          return settings.pointing === true;
        },
        arrow: {
          bounding: (x, y) => {
            switch (module.get.position()) {
              case Position.TOP:
                if (y > popupRect.bottom && y < rect.top && x < popupRect.right && x > popupRect.left) {
                  return true;
                }
                break;
              case Position.RIGHT:
                if (y < popupRect.bottom && y > popupRect.top && x < popupRect.left && x > rect.right) {
                  return true;
                }
                break;
              case Position.BOTTOM:
                if (y > rect.bottom && y < popupRect.top && x < popupRect.right && x > popupRect.left) {
                  return true;
                }
                break;
              case Position.LEFT:
                if (y < popupRect.bottom && y > popupRect.top && x < rect.left && x > popupRect.right) {
                  return true;
                }
            }
            return false;
          }
        }
      },
      create: {
        arrow: () => {
          return $arrow = ts(Selector.DIV).addClass(ClassName.ARROW).appendTo($popup);
        },
        popup: () => {
          var $content, $title, attr, content, html, title, variation;
          variation = settings.variation || '';
          content = settings.content || '';
          html = settings.html || '';
          title = settings.title || '';
          attr = {
            variation: $this.attr(Attribute.VARIATION),
            content: $this.attr(Attribute.CONTENT),
            title: $this.attr(Attribute.TITLE),
            html: $this.attr(Attribute.HTML)
          };
          if (attr.variation !== null) {
            variation = attr.variation;
          }
          if (attr.content !== null) {
            content = attr.content;
          }
          if (attr.title !== null) {
            title = attr.title;
          }
          if (attr.html !== null) {
            html = attr.html;
          }
          $popup = ts(Selector.DIV).addClass(`${ClassName.POPUP} ${variation}`);
          if (html !== '') {
            $popup.html(html);
          }
          if (content !== '') {
            $content = ts(Selector.DIV).addClass(ClassName.CONTENT).html(content);
            $title = ts(Selector.DIV).addClass(ClassName.TITLE).html(title);
            if (title !== '') {
              $popup.append($title);
            }
            $popup.append($content);
          }
          return $popup.insertAfter($this);
        }
      },
      exists: () => {
        return $popup.exists();
      },
      reposition: () => {
        module.calculate.popup.position();
        return $allModules;
      },
      event: {
        start: () => {
          if (!$popup.exists()) {
            return;
          }
          if (settings.exclusive === true) {
            module.hideOthers();
          }
          module.remove.timers();
          return module.set.show.timer();
        },
        end: () => {
          if (!$popup.exists()) {
            return;
          }
          module.remove.timers();
          return module.set.hide.timer();
        }
      },
      click: {
        handler: (event) => {
          var isPointingPopup, isPointingSelf, pointElement;
          pointElement = ts.fromPoint(event.clientX, event.clientY).get();
          isPointingSelf = $this.is(pointElement);
          isPointingPopup = $popup.contains(pointElement);
          if (isPointingSelf) {
            module.toggle();
            return;
          }
          if (!isPointingPopup && settings.closable) {
            return module.hide();
          }
        }
      },
      focus: {
        handler: (event) => {
          return module.show();
        }
      },
      blur: {
        handler: (event) => {
          return module.hide();
        }
      },
      scroll: {
        handler: () => {
          return module.hide();
        }
      },
      trigger: {
        create: () => {
          return $this.trigger(Event.CREATE);
        },
        remove: () => {
          return $this.trigger(Event.REMOVE);
        },
        show: () => {
          debug('發生 SHOW 事件', element);
          return settings.onShow.call(module.get.popup(), element);
        },
        visible: () => {
          return $this.trigger(Event.VISIBLE);
        },
        hide: () => {
          debug('發生 HIDE 事件', element);
          return settings.onHide.call(module.get.popup(), element);
        },
        hidden: () => {
          return $this.trigger(Event.HIDDEN);
        },
        unplaceable: () => {
          return $this.trigger(Event.UNPLACEABLE);
        }
      },
      bind: {
        hover: () => {
          $this.on(Event.MOUSEENTER, module.event.start);
          $this.on(Event.MOUSELEAVE, module.event.end);
          $popup.on(Event.MOUSEENTER, module.event.start);
          return $popup.on(Event.MOUSELEAVE, module.event.end);
        },
        click: () => {
          return $body.on(Event.CLICK, module.click.handler);
        },
        focus: () => {
          $this.on(Event.FOCUS, module.focus.handler);
          return $this.on(Event.FOCUSOUT, module.blur.handler);
        },
        scroll: () => {
          return $scrollContext.on(Event.SCROLL, module.scroll.handler);
        },
        events: () => {
          switch (settings.on) {
            case 'hover':
              module.bind.hover();
              break;
            case 'click':
              module.bind.click();
              break;
            case 'focus':
              module.bind.focus();
          }
          if (settings.hideOnScroll === 'auto') {
            if (settings.on === 'hover') {
              module.bind.scroll();
            }
          }
          if (settings.hideOnScroll === true) {
            module.bind.scroll();
          }
          $this.on(Event.CREATE, () => {
            debug('發生 CREATE 事件', element);
            return settings.onCreate.call(module.get.popup(), element);
          });
          $this.on(Event.REMOVE, () => {
            debug('發生 REMOVE 事件', element);
            return settings.onRemove.call(module.get.popup(), element);
          });
          $this.on(Event.VISIBLE, () => {
            debug('發生 VISIBLE 事件', element);
            return settings.onVisible.call(module.get.popup(), element);
          });
          $this.on(Event.HIDDEN, () => {
            debug('發生 HIDDEN 事件', element);
            return settings.onHidden.call(module.get.popup(), element);
          });
          return $this.on(Event.UNPLACEABLE, () => {
            debug('發生 UNPLACEABLE 事件', element);
            return settings.onUnplaceable.call(module.get.popup(), element);
          });
        }
      },
      // ------------------------------------------------------------------------
      // 基礎方法
      // ------------------------------------------------------------------------
      initialize: () => {
        var position, variation;
        debug('初始化彈出式訊息', element);
        position = $this.attr(Attribute.POSITION);
        if (position !== null) {
          module.set.position(position, true);
        }
        module.init.popup();
        module.trigger.create();
        module.set.inverted(settings.inverted);
        module.set.pointing(settings.pointing);
        variation = $this.attr(Attribute.VARIATION);
        if (variation !== null) {
          module.set.variation(variation);
        }
        module.set.hoverable(settings.hoverable);
        module.set.transition(settings.transition);
        module.set.boundary(settings.boundary);
        module.set.scrollContext(settings.scrollContext);
        return module.bind.events();
      },
      instantiate: () => {
        return debug('實例化彈出式訊息', element);
      },
      refresh: () => {
        rect = $this.rect();
        popupRect = $popup.rect();
        boundaryRect = $boundary.rect();
        return $allModules;
      },
      destroy: () => {
        debug('摧毀彈出式訊息', element);
        $this.removeData(MODULE_NAMESPACE).off(EVENT_NAMESPACE);
        return $allModules;
      }
    };
  });

}).call(this);