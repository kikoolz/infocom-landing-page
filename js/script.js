$(document).ready(function () {
  wow = new WOW({
    mobile: false,
  });
  wow.init();

  $("#top-nav").onePageNav({
    currentClass: "current",
    changeHash: true,
    scrollSpeed: 1200,
  });

  //animated nav
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".navbar-default").addClass("animated");
    } else {
      $(".navbar-default").removeClass("animated");
    }
  });

  $("#countdown_dashboard").countDown({
    targetDate: {
      day: 11,
      month: 3,
      year: 2023,
      hour: 00,
      min: 00,
      sec: 01,
    },
    omitWeeks: true,
  });

  $(document).ready(function () {
    $("#top-nav").onePageNav({
      currentClass: "active",
      changeHash: !0,
      scrollSpeed: 1200,
    }),
      $("#navigation").sticky({ topSpacing: 0 }),
      $(window).scroll(function () {
        $(window).scrollTop() > 100
          ? $("#navigation").css("background", "#2f3238", "margin", "-20px")
          : $("#navigation").css("background", "none");
      }),
      $("#countdown_dashboard").countDown({
        targetDate: {
          day: 11,
          month: 3,
          year: 2023,
          hour: 23,
          min: 59,
          sec: 59,
        },
        omitWeeks: !0,
      });
  });

  $("input, textarea").data("holder", $("input, textarea").attr("placeholder"));

  $("input, textarea").focusin(function () {
    $(this).attr("placeholder", "");
  });
  $("input, textarea").focusout(function () {
    $(this).attr("placeholder", $(this).data("holder"));
  });
});
