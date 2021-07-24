////////////////////////////////////////////////////
//ヘッダー　ハンバーガー
////////////////////////////////////////////////////

$(function () {
  //ハンバーガー　クリック
  $('#nav_toggle').click(function () {
    $("#top-head").toggleClass('open');
    $("nav").slideToggle(500);
  });
  //メニューリンク　クリック
  $('nav a').click(function () {
    if (window.innerWidth <= 680) {
      $("#top-head").toggleClass('open');
      $("nav").slideToggle(500);
    }
  });
});

////////////////////////////////////////////////////
//アンカースクロール
////////////////////////////////////////////////////

$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function () {
    var adjust = 0;
    // スクロールの速度
    var sc_speed = 1000;
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var jump = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = jump.offset().top + adjust;
    // スムーススクロール
    $('html,body').animate({ scrollTop: position }, sc_speed, "swing");
    return false;
  });
});

////////////////////////////////////////////////////
//about アニメーション
////////////////////////////////////////////////////

let EasyTransition = function (class_name, time) {
  const target_class = class_name || 'easy_transition';
  const duration = time || 1500;

  const elements = document.getElementsByClassName(target_class);
  let scroll_amount = 0;
  let top_map = new Map();
  let transform_map = new Map();
  let finish_map = new Map();
  Array.prototype.forEach.call(elements, function (element) {
    top_map.set(element, element.getBoundingClientRect().top + pageYOffset);

    element.style.transition = duration + 'ms';
    let transform = '';
    let finish = '';
    if (element.classList.contains('from_bottom')) {
      transform += ' translateY(' + window.innerWidth + 'px)';
    } else if (element.classList.contains('from_top')) {
      transform += ' translateY(-' + window.innerWidth + 'px)';
    }
    element.style.transform = transform;
    transform_map.set(element, transform);

    if (element.classList.contains('fade')) {
      element.style.opacity = 0;
    }
  });
  window.addEventListener('scroll', function () {
    if (scroll_amount < pageYOffset) {
      Array.prototype.forEach.call(elements, function (element) {
        if (
          (window.innerHeight * 0.6 + pageYOffset >= top_map.get(element)) ||
          (window.innerHeight + pageYOffset >= document.body.clientHeight)
        ) {
          element.style.transform = '';
          element.style.opacity = '';
        }
      });
    } else {
      Array.prototype.forEach.call(elements, function (element) {
        if (window.innerHeight + pageYOffset < top_map.get(element)) {
          element.style.transform = transform_map.get(element);
          if (element.classList.contains('fade')) {
            element.style.opacity = 0;
          }
        }
      });
    }
    scroll_amount = pageYOffset;
  }, false);
}

////////////////////////////////////////////////////
//works カルーセル
////////////////////////////////////////////////////

$(function () {
  $("#slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    centerMode: true,
    centerPadding: "10%",
    dots: true,
    slidesToShow: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          vertical: true,
          verticalSwiping: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

////////////////////////////////////////////////////
//skillエリア　アニメーション
////////////////////////////////////////////////////

$(function () {
  $(window).on('load scroll', function () {
    $('.fi_si').each(function () {
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var height = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - height) {
        //クラスを付与
        $(this).addClass('fsActive');
      }
    });
  });
});

////////////////////////////////////////////////////
//お問い合わせボタン
////////////////////////////////////////////////////

$(function () {
  var topBtn = $('#slide_box');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
});