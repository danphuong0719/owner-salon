$(function () {
    //kv
    $(".kv").on("inview", function (e, isInview) {
        if (isInview) {
            $(this)
                .find(".kv__img--01, .kv__img--02")
                .each(function (index) {
                    $(this).addClass("animate__animated animate__fadeIn");
                });
            $(this)
                .find(
                    ".kv__txt .txt-01, .kv__txt .txt-02, .kv__txt img, .sec_01 .title_h2, .sec_01 .txt.tac "
                )
                .each(function (index) {
                    $(this)
                        .css("animation-delay", `${index * 0.5}s`)
                        .addClass("animate__animated animate__slideInUp");
                });
        }
    });
    //sec_01
    $(".sec_01 .container").on("inview", function (e, isInview) {
        if (isInview) {
            $(this)
                .find(".title_h2, .txt.tac, .title_h3")
                .each(function (index) {
                    $(this)
                        .css("animation-delay", `${index * 0.5}s`)
                        .addClass("animate__animated animate__slideInUp");
                });
        }
    });
    //list-items
    $(".sec_01 .container .list-items").on("inview", function (e, isInview) {
        if (isInview) {
            $(this)
                .children(".items")
                .each(function (index) {
                    $(this)
                        .css("animation-delay", `${index * 0.2}s`)
                        .addClass("animate__animated animate__fadeInLeft");
                });
        }
    });
    //list-img
    $(".list-img").on("inview", function (e, isInview) {
        if (isInview) {
            $(this)
                .children(".items")
                .each(function (index) {
                    $(this)
                        .css("animation-delay", `${index * 0.2}s`)
                        .addClass("animate__animated animate__fadeInRight");
                });
        }
    });
    //sec_02
    $(".sec_02 .container").on("inview", function (e, isInview) {
        if (isInview) {
            $(this)
                .find(".title_h2")
                .addClass("animate__animated animate__slideInUp");
            $(this)
                .find(".list-benefits")
                .children(".items")
                .each(function (index) {
                    if (index < 3) {
                        $(this)
                            .css("animation-delay", `${index * 0.2}s`)
                            .addClass("animate__animated animate__fadeInLeft");
                    } else {
                        $(this)
                            .css("animation-delay", `${index * 0.2}s`)
                            .addClass("animate__animated animate__fadeInRight");
                    }
                });
        }
    });
    //sec_03
    $(".sec_03 .container").on("inview", function (e, isInview) {
        if (isInview) {
            $(this)
                .find(".title_h2, img")
                .addClass("animate__animated animate__slideInUp");
            $(this)
                .find(".list-mess")
                .children(".items")
                .each(function (index) {
                    $(this)
                        .css("animation-delay", `${index * 0.2}s`)
                        .addClass("animate__animated animate__slideInUp");
                });
        }
    });
    //sec_04
    $(".sec_04").on("inview", function (e, isInview) {
        if (isInview) {
            $(this)
                .find(".title_h2")
                .addClass("animate__animated animate__slideInUp");
            $(this)
                .find(".block .block__img")
                .each(function (index) {
                    if (index % 2 !== 0) {
                        $(this)
                            .css("animation-delay", `${index * 0.2}s`)
                            .addClass("animate__animated animate__fadeInLeft");
                    } else {
                        $(this)
                            .css("animation-delay", `${index * 0.2}s`)
                            .addClass("animate__animated animate__fadeInRight");
                    }
                });
            $(this)
                .find(".block-group .block__txt")
                .each(function (index) {
                    if (index % 2 !== 0) {
                        $(this)
                            .css("animation-delay", `${index * 0.2}s`)
                            .addClass("animate__animated animate__fadeInRight");
                    } else {
                        $(this)
                            .css("animation-delay", `${index * 0.2}s`)
                            .addClass("animate__animated animate__fadeInLeft");
                    }
                });
        }
    });
    //sec_05
    $(".sec_05 .container").on("inview", function (e, isInview) {
        if (isInview) {
            $(this)
                .find(".title_h2, .price")
                .addClass("animate__animated animate__slideInUp");
            $(this)
                .find(".title_h2, li, txt.txt--small.tac")
                .addClass("animate__animated animate__swing");
        }
    });
    //sec_06
    $(".sec_06, .sec_07, .sec_08, .sec_09").on(
        "inview",
        function (e, isInview) {
            if (isInview) {
                $(this)
                    .find(".title_h2")
                    .addClass("animate__animated animate__slideInUp");
                $(this)
                    .find(
                        ".store .map, .store .thumb, .inquiry, .inquiry__txt, .overview .overview__txt, .overview .overview__img, .vision .vision__txt, .vision .vision__details"
                    )
                    .each(function (index) {
                        if (index % 2 === 0) {
                            $(this).addClass(
                                "animate__animated animate__fadeInLeft"
                            );
                        } else {
                            $(this)
                                .delay(index * 500)
                                .css("animation-delay", `${index * 0.5}s`)
                                .addClass(
                                    "animate__animated animate__fadeInRight"
                                );
                        }
                    });
            }
        }
    );
    //footer
    $(".header .container .header__content, .footer .footer__content").on(
        "inview",
        function (e, isInview) {
            if (isInview) {
                $(this)
                    .find(
                        ".logo, .navi, .button.js-anchor, .footer__logo, .copyright, .footer__links, .footer__social"
                    )
                    .addClass("animate__animated animate__heartBeat");
            }
        }
    );

    $(".float-social").on("inview", function (e, isInview) {
        if (isInview) {
            $(this).each(function (index) {
                $(this).addClass(
                    "animate__animated  animate__fadeInRight animate__delay-3s"
                );
            });
        }
    });
});
