var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth,
    screenScrollTop = $(window).scrollTop(),
    lightBoxCanChange = true;

var googleMapStyling = [
    { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
    {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#bdbdbd" }],
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
    },
    {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#dadada" }],
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
    },
    {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
    },
    {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9c9c9" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
    },
];
$(document).ready(function () {
    init();
    $(window).resize();
});

$(window).resize(function () {
    screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
});
$(window).scroll(function () {
    screenScrollTop = $(window).scrollTop();
    headerFloating();
});

function init() {
    initScrollInteractive();
    initHeaderHover();
    initMobileMenuBodyOverflow();
    initCommonPopup();
    initHeaderBookingBTN();
    initHeaderBookingFormDatePicker();
    initHeaderBookingFormRoomsSelect();
    initCustomSelect();
    initPageContentAccordion();
    initPageCommonTagToggle();
    initHeaderRealtime();
    initLatestOfferHiddenArrow();
    initCommonMap();
    initPageTheme();
    initItemsHighlightSwiper()
}

function initScrollInteractive() {
    new WOW({ boxClass: "scroll-interactive", offset: 100 }).init();
}

function headerFloating() {
    
    if (screenScrollTop > 200) {        
        $("body").addClass("floating-header");
        $('body.floating-header .section_container.header').css({'top':'0px'});       
    } else {        
        $('body.floating-header .section_container.header').css({'top':''});        
        $("body").removeClass("floating-header");
    }
}

function initHeaderHover() {
    $(".header_center_btn[data-hover-active]").hover(function () {
        var target = $(this).attr("data-hover-active");
        // console.log(target)
        $(".hg_accom_header_in").removeClass("active");
        $(target).addClass("active");
        $(".header_center_btn").removeClass("active");
        $(this).addClass("active");
        $("body").addClass("header-dropdown");
    });

    $(".section_container.header")
        .mouseenter(function () {
            // console.log($(this).find(".hg_accom_header_in.active").length);
            if ($(this).find(".hg_accom_header_in.active").length > 0) {
                $("body").addClass("header-dropdown");
            }
        })
        .mouseleave(function () {
            $(".hg_accom_header_in").removeClass("active");
            $(".header_center_btn").removeClass("active");
            $("body").removeClass("header-dropdown");
        });
}

function initMobileMenuBodyOverflow() {
    // $(".menu_container").hide()
    $('[data-action="menu-open"]').click(function () {
        $("body").addClass("overflowHidden");
        $(".menu_container").fadeIn(300);
    });
    $('[data-action="menu-close"]').click(function () {
        $("body").removeClass("overflowHidden");
        $(".menu_container").fadeOut(300);
    });
}

function initTransportTagToggle() {
    $(".location_tab_link_in").click(function (e) {
        e.preventDefault();
        var target = $(this).attr("data-target");
        $(".location_tab_link_in").removeClass("w--current");
        $(this).addClass("w--current");
        $(".location_transport_block_in").removeClass("active");
        $(target).addClass("active");
    });
    $(".location_tab_link_in").eq(0).click();
}

function initCommonPopup() {
    $(".common-lightbox-btn:not(.common-lightbox-video)").click(function (e) {
        e.preventDefault();
        var imgSrc = $(this).attr("data-img-src");
        $("body").addClass("overflowHidden");
        $("#ligntBoxImageContainer").attr("src", imgSrc);
        $(".common-popup").addClass("active");
        $("#ligntBoxPopupContainer").addClass("active");
        $(".common-lightbox-btn").removeClass("current");
        $(this).addClass("current");
        if ($(this).attr("title")) {
            $("#ligntBoxImageDesciption")
                .hide()
                .fadeIn(300)
                .text($(this).attr("title"));
        } else {
            $("#ligntBoxImageDesciption").text("");
        }
    });
    $(".common-lightbox-video").click(function (e) {
        e.preventDefault();
        var imgSrc = $(this).attr("href");
        $("body").addClass("overflowHidden");
        $("#ligntBoxVideoContainer").html(
            '<video controls><source src="' +
            imgSrc +
            '" type="video/mp4"></video>'
        );
        $(".common-popup").addClass("active");
        $("#ligntBoxPopupContainer").addClass("active");
        $(".common-lightbox-btn").removeClass("current");
        $(this).addClass("current");
        if ($(this).attr("title")) {
            $("#ligntBoxImageDesciption")
                .hide()
                .fadeIn(300)
                .text($(this).attr("title"));
        } else {
            $("#ligntBoxImageDesciption").text("");
        }
    });
    
    $(".common-lightbox-iframe").click(function (e) {
        e.preventDefault();
        var imgSrc = $(this).attr("href");
        $("body").addClass("overflowHidden");
        $("#ligntBoxVideoContainer").html(
            '<div class="popup-lightbox__iframe"><iframe src="' +imgSrc +'" referrerpolicy="no-referrer"></iframe></div>'
        );
        $(".common-popup").addClass("active");
        $("#ligntBoxPopupContainer").addClass("active");
        $(".common-lightbox-btn").removeClass("current");
        $(this).addClass("current");
        if ($(this).attr("title")) {
            $("#ligntBoxImageDesciption")
                .hide()
                .fadeIn(300)
                .text($(this).attr("title"));
        } else {
            $("#ligntBoxImageDesciption").text("");
        }
    });

    $(".common-popup__close").click(function (e) {
        e.preventDefault();
        $(".common-popup").fadeOut(500);
        $("body").removeClass("overflowHidden");
        setTimeout(function () {
            $(".common-popup").removeClass("active").removeAttr("style");
            $(".common-popup__content").removeClass("active");
        }, 600);

        $("#ligntBoxVideoContainer").html("");
    });

    $(".popup-lightbox__next,.popup-lightbox__prev").click(function (e) {
        e.preventDefault();
        if (lightBoxCanChange) lightBoxCanChange = false;
        else return false;

        var currentActive, target, nextAnimate;

        $("#ligntBoxImageContainer").fadeOut(300);
        $(".common-lightbox-btn").each(function (index) {
            if ($(this).is(".current")) {
                currentActive = index;
                return false;
            }
        });

        if ($(this).is(".popup-lightbox__next")) {
            $("#ligntBoxImageContainer").addClass("animated fadeOutLeft");
            if (currentActive == $(".common-lightbox-btn").length - 1)
                target = 0;
            else target = currentActive + 1;
            nextAnimate = "fadeInRight";
        } else {
            $("#ligntBoxImageContainer").addClass("animated fadeOutRight");
            if (currentActive == 0)
                target = $(".common-lightbox-btn").length - 1;
            else target = currentActive - 1;
            nextAnimate = "fadeInLeft";
        }
        setTimeout(function () {
            $("#ligntBoxImageContainer").removeClass(
                "fadeOutLeft fadeOutRight fadeInLeft fadeInRight"
            );
            $(".common-lightbox-btn").eq(target).click();
            $("#ligntBoxImageContainer").addClass(nextAnimate).fadeIn(300);
            lightBoxCanChange = true;
        }, 300);
    });
}

function initHeaderBookingBTN() {
    $(".header_book_now_btn").click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("active");
        if (screenWidth < 480) {
            if ($(this).parent().hasClass("active")) {
                $("body").addClass("overflowHidden");
                $(".booking_block").append(
                    '<button class="booking_block_close_btn"></button>'
                );
            } else {
                $("body").removeClass("overflowHidden");
                $(".booking_block").find(".booking_block_close_btn").remove();
            }
        }else{
            if( $('.booking_block .booking_block_close').length <= 0 ){
                $('.booking_block').append('<a class="booking_block_close" href="" style="position:absolute; top:20px; right:20px; font-size:40px; color: #FFF">&times;</a>');
                $('.booking_block_close').click(function(e){
                    e.preventDefault();
                    $(".header_book_now_btn").click();        
                });
            }
        }
    });

    $("body").on("click", ".booking_block_close_btn", function (e) {
        e.preventDefault();
        $(".header_book_now_btn").click();
    });

    // $(".booking_block")
    //     .mouseenter(function (e) {
    //         if (screenWidth >= 1280) {
    //             $("body").addClass("overflowHidden");
    //         }
    //     })
    //     .mouseleave(function (e) {
    //         $("body").removeClass("overflowHidden");
    //     });
}

function initHeaderBookingFormDatePicker() {
   
    var monthNames =
        $("html").attr("lang") == "tc" || $("html").attr("lang") == "sc"
            ? [
                "一月",
                "二月",
                "三月",
                "四月",
                "五月",
                "六月",
                "七月",
                "八月",
                "九月",
                "十月",
                "十一月",
                "十二月",
            ]
            : [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
        dayNames =
            $("html").attr("lang") == "tc" || $("html").attr("lang") == "sc"
                ? ["日", "一", "二", "三", "四", "五", "六"]
                : ["S", "M", "T", "W", "T", "F", "S"];
                
    $('input.datepicker').each(function(){        
        if( $(this).hasClass('future') ){
            
            $(this).datepicker({
                monthNames: monthNames,
                dayNamesMin: dayNames,
                minDate: (new Date()),
                dateFormat: 'dd/mm/yy'
            });
        }else{
            $(this).datepicker({
                monthNames: monthNames,
                dayNamesMin: dayNames,
                dateFormat: 'dd/mm/yy'
            });
        }
    }); 

    if ($("#headerBookingCheckIn").length <= 0) {
        return false;
    }

    var bookingFrom = $("#headerBookingCheckIn")
        .datepicker({
            monthNames: monthNames,
            dayNamesMin: dayNames,
            minDate: 0,
        })
        .on("change", function () {
            var iTime  = $(this).datepicker("getDate").getTime() + 86400000;
            var iTime2 = $("#headerBookingCheckOut").datepicker("getDate").getTime();
            if( iTime2 < iTime ){
                $("#headerBookingCheckOut").datepicker("setDate",new Date(iTime) );
            }
            $(".ui-state-active").removeClass("ui-state-active");
        });

    $("#headerBookingCheckIn").datepicker("setDate", new Date());

    var iTime  = (new Date()).getTime() + 86400000;

    var bookingTo = $("#headerBookingCheckOut")
        .datepicker({
            monthNames: monthNames,
            dayNamesMin: dayNames,
            minDate: (new Date(iTime)),
        })
        .on("change", function () {
            var iTime  = $(this).datepicker("getDate").getTime() - 86400000;
            var iTime2 = $("#headerBookingCheckIn").datepicker("getDate").getTime();
            if( iTime2 > iTime ){
                $("#headerBookingCheckIn").datepicker("setDate",new Date(iTime) );
            }
            $(".ui-state-active").removeClass("ui-state-active");
        });

    $("#headerBookingCheckOut").datepicker(
        "setDate",
        new Date( $("#headerBookingCheckIn").datepicker("getDate").getTime() + 86400000 )
    );

    $("#headerBookingCheckIn").datepicker("option",'dateFormat','dd/mm/yy');
    $("#headerBookingCheckOut").datepicker("option",'dateFormat','dd/mm/yy');

    $("#ui-datepicker-div").hide();
}

function getDate(element) {
    var date;
    try {
        date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
        date = null;
    }
    console.log(date);
    return date;
}

function initHeaderBookingFormRoomsSelect() {
    if ($("#roomsBookingRowTemplate").length <= 0) {
        return false;
    }
    var bookingRoomsRender = Handlebars.compile(
        document.getElementById("roomsBookingRowTemplate").innerHTML
    ),
        totalBookingRooms;

    $("#headerBookingRooms").change(function (e) {
        e.preventDefault();
        totalBookingRooms = $(this).val();
        console.log(totalBookingRooms);

        var bookingRoomsHTML = "";
        if (totalBookingRooms > 1) {
            for (var i = 2; i <= totalBookingRooms; i++) {
                console.log(i);
                var thisID = { roomID: i };
                bookingRoomsHTML += bookingRoomsRender(thisID);
            }
            $("#headerBookingAddtionRooms").html(bookingRoomsHTML);
        } else {
            $("#headerBookingAddtionRooms").html("");
        }
    });
    // itemsHTML += listItemRender(jsonEvents[i]);
}

function initCustomSelect() {
    $("body").on("change", ".custom_select select", function (e) {
        e.preventDefault();
        var parent = $(this).parent();
        parent
            .find(".custom_select__mask")
            .html($(this).find("option:selected").text());
    });
}

function initPageContentAccordion() {
    $(".page-accordion__title").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).next(".page-accordion__content").slideToggle();
        if ($(this).is(".active")) {
            var scrollTop = $(this).offset().top - 60;
            $("html, body").animate({ scrollTop: scrollTop }, 800);
        }

        var oAcc = $(this).closest('.page-accordion');
        var sID = $(oAcc).attr('id');
        if( sID ){
            window.history.pushState('', '', '#'+sID);
        }
    });
    if( (''+window.location).indexOf('#') >= 0 ){        
        var sHash = (''+window.location).replace(/.*[#]/gi,'');
        var sYID = $('#'+sHash).closest('.common-tag__content').attr('id');
        if( sYID ){             
            $('[data-target="#'+sYID+'"]').parent().find('.active').removeClass('active');
            $('#'+sYID).parent().find('.active').removeClass('active');
            $('[data-target="#'+sYID+'"]').addClass('active');
            $('#'+sYID).addClass('active');
        }
        $('#'+sHash).find('.page-accordion__title').click();
    }    
}

function initPageCommonTagToggle() {
    $(".common-tag__btn").click(function (e) {
        e.preventDefault();
        var parent = $(this).parents(".common-tag"),
            target = $(this).attr("data-target");
        $(this).siblings(".common-tag__btn").removeClass("active");
        $(this).addClass("active");

        parent.find(".common-tag__content").removeClass("active");
        parent.find(target).addClass("active");
    });
}

function initHeaderRealtime() {
    var interval = setInterval(function () {
        $("#headerRealTime").html(formatAMPM(new Date()));
    }, 5000);
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
}

function initLatestOfferHiddenArrow() {
    if ($(".home_slider_title_row").length <= 0) {
        return false;
    }
    $(".home_slider_title_row").each(function () {
        var parent = $(this).parents(".section_container_in");
        if (parent.find(".home_slide").length == 2) {
            parent
                .find(".home_slider_arrow")
                .addClass("hide-in--dt hide-in--tl");
            parent.find(".home_slide_more_btn").hide();
        } else if (parent.find(".home_slide").length == 1) {
            parent
                .find(".home_slider_arrow")
                .addClass("hide-in--dt hide-in--tl hide-in--mb");
            parent.find(".home_slide_more_btn").hide();
            parent.find(".home_slide").addClass("only");
        }
    });
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split("&"),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=");

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined
                ? true
                : decodeURIComponent(sParameterName[1]);
        }
    }
};

function initCommonMap(){
    $("#commonSinglePinMap").css({'cursor':'pointer'}).click(initCommonSinglePinMap);
}
function initCommonSinglePinMap() {
    if ($("#commonSinglePinMap").length <= 0) {
        return false;
    }
    if ($("#commonSinglePinMap").hasClass('inited') ) {
        return false;
    }
    $("#commonSinglePinMap").addClass('inited');
    
    var thisIcon = $("#commonSinglePinMap").attr("data-icon");

    if (typeof map_type !== "undefined" && map_type == "baidu") {
        var thisLong = parseFloat(
            $("#commonSinglePinMap").attr("data-baidu-long")
        ),
            thisLat = parseFloat(
                $("#commonSinglePinMap").attr("data-baidu-lat")
            ),
            point = new BMapGL.Point(thisLong, thisLat),
            map = new BMapGL.Map("commonSinglePinMap");
        map.centerAndZoom(point, screenWidth > 767 ? 14 : 12);
        map.enableScrollWheelZoom(true);
        /*map.setMapStyleV2({
            styleId: "6b1a6af4a1eda22a6b1c64fbb8c13fff",
        });*/
        var mapIcon = new BMapGL.Icon(thisIcon, new BMapGL.Size(22, 32)),
            mapMarker = new BMapGL.Marker(point, { icon: mapIcon });
        map.addOverlay(mapMarker);
    } else {
        var thisLong = parseFloat(
            $("#commonSinglePinMap").attr("data-google-long")
        ),
            thisLat = parseFloat(
                $("#commonSinglePinMap").attr("data-google-lat")
            ),
            map = new google.maps.Map(
                document.getElementById("commonSinglePinMap"),
                {
                    center: { lat: thisLat, lng: thisLong },
                    zoom: 14,
                    disableDefaultUI: false
                    /*,styles: googleMapStyling,*/
                }
            );

        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(thisLat, thisLong),
            icon: thisIcon,
            map: map,
        });
        const info = new google.maps.InfoWindow({
            'content': $('.footer_info_title').html(),
            'pixelOffset':{width:0,height:30},
            position: new google.maps.LatLng(thisLat, thisLong),
            map: map
        });
    }
}

function initPageTheme() {
    if (getUrlParameter("theme") == "harbour-plaza") {
        $("body").addClass("theme-harbour-plaza");
    } else if (getUrlParameter("theme") == "harbour-grand") {
        $("body").addClass("theme-harbour-grand");
    } else if (getUrlParameter("theme") == "rambler") {
        $("body").addClass("theme-rambler");
    } else {
        $("body").addClass("theme-harbour-grand");
    }
}

$(document).ready(function () {
    if (('' + window.location).indexOf('#') > 0) {
        var sHash = ('' + window.location).replace(/.+\#/gi, '#');
        if ($(sHash).length > 0) {
            var iST = $(sHash).offset().top - 53;
            $('html,body').animate({ 'scrollTop': iST });
        }
    };
});


function initItemsHighlightSwiper() {
    if ($(".item-highlight__slider").length < 1) {
        return false;
    }
    $(".item-highlight__slider").each(function(){
        if( $(this).find('.swiper-slide').length > 1 ){
            $(this).addClass('morethanone');
        }else{
            $(this).find('.swiper-button-next').hide();
            $(this).find('.swiper-button-prev').hide();
        }
    });
    var itemHighlightSwiper = new Swiper(".item-highlight__slider.morethanone", {
        loop:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.item-highlight__pagination',
            type: 'bullets',
            clickable: true
        },
    })

}
/*----------------------------------------------------------------------*/
/* NEW hero banner */
/*----------------------------------------------------------------------*/
var heroBannerTimer = null;
function heroBannerGoTo(iN, bClick){
    clearTimeout(heroBannerTimer);
    var iFade = 1500;

    var iMX  = $('.hp_hero_banner').find('.hp_hero_slide').length;
    var iNX  = (iN + iMX)%iMX;
    var oCur = $('.hp_hero_banner').find('.hp_hero_slide').get(iNX);
    
    $('.hp_hero_banner').find('.hp_hero_bg').stop();
    $('.hp_hero_banner').find('.hp_hero_slide:visible').stop().fadeOut(iFade);
    $(oCur).stop().fadeIn(iFade);

    $(oCur).find('.hp_hero_bg').removeClass('zoom');
    $('.hp_hero_bg:not(:visible)').removeClass('zoom');
    $('.hp_hero_nav .active').removeClass('active');
    $($('.hp_hero_nav a').get(iNX)).addClass('active');
    $('.hp_hero_banner').attr('data-index',iNX);

    $('.hp_hero_banner').find('video').each(function(){
        this.pause();        
    });
      
    if( $(oCur).find('video').length > 0 ){
        $(oCur).find('video').get(0).currentTime = 0;
        $(oCur).find('video').get(0).play();
    }else{
        var iEffect = parseInt($('.hp_hero_banner').attr('data-effect-time'));
        var iPause  = parseInt($('.hp_hero_banner').attr('data-pause-time'));

        $(oCur).find('.hp_hero_bg').addClass('zoom');
        
        if( !bClick ){
            heroBannerTimer = setTimeout('heroBannerNext()',iEffect+iPause);
        }      
    }
} 
function heroBannerPrev(){
    var iN = parseInt($('.hp_hero_banner').attr('data-index'));
    heroBannerGoTo(iN-1);
}
function heroBannerNext(){
    var iN = parseInt($('.hp_hero_banner').attr('data-index'));
    heroBannerGoTo(iN+1);
}
function heroBannerInit(){
    var iMX = $('.hp_hero_banner').find('.hp_hero_slide').length
    for( var i=0; i<iMX; i++ ){
        $('.hp_hero_nav').append('<a href="#" data-index="'+i+'" onclick="heroBannerGoTo('+i+',true);return false"></a>');
    }
    $('.hp_hero_banner').find('video').each(function(){
        this.addEventListener('ended',heroBannerNext,false);
    });
    if( iMX > 1 ){
        $('.hp_hero_prev').click(heroBannerPrev);
        $('.hp_hero_next').click(heroBannerNext);
    }else{
        $('.hp_hero_prev').hide();
        $('.hp_hero_next').hide();
    }
    $('.hp_hero_banner').bind('mousedown',heroBannerDown);
    $('.hp_hero_banner').bind('touchstart',heroBannerDown);
    $('.hp_hero_banner').bind('mouseup',heroBannerUp);
    $('.hp_hero_banner').bind('touchend',heroBannerUp);
    $('.hp_hero_banner').bind('touchmove',heroBannerMove);
    heroBannerGoTo(0);
}
var heroTouchData = false;
var heroTouchData2 = false;
function heroBannerMove(e){
    //e.preventDefault();
    var oDate = new Date();
    var iTime = oDate.getTime();
    var iX =  e.pageX;
    var iY =  e.pageY;
    if( e.originalEvent ){
        if( e.originalEvent.touches ){
            if( e.originalEvent.touches.length > 0 ){
                iLst = e.originalEvent.touches.length-1;
                iX = e.originalEvent.touches[iLst].pageX;
                iY = e.originalEvent.touches[iLst].pageY;
            }
        }
    }
    heroTouchData2 = {'time':iTime,'x':iX,'y':iY};
}
function heroBannerDown(e){
    var oDate = new Date();
    var iTime = oDate.getTime();
    var iX =  e.pageX;
    var iY =  e.pageY;
    if( e.originalEvent ){
        if( e.originalEvent.touches ){
            if( e.originalEvent.touches.length > 0 ){
                iLst = e.originalEvent.touches.length-1;
                iX = e.originalEvent.touches[iLst].pageX;
                iY = e.originalEvent.touches[iLst].pageY;
            }
        }
    }
    heroTouchData = {'time':iTime,'x':iX,'y':iY};
}
function heroBannerUp(e){
    if( !heroTouchData ){ return; }
    
    var oDate = new Date();
    var iTime = oDate.getTime();
    var iX =  heroTouchData2['x'];
    var iY =  heroTouchData2['y'];
   
    var iElp = iTime - heroTouchData['time'];
    if( iElp < 1000 ){
        var iDis = Math.sqrt( Math.pow(iX -heroTouchData['x'],2) + Math.pow( iY -heroTouchData['y'],2) );
        var iSlp = iX==heroTouchData['x']?0:((heroTouchData['y']-iY)/(heroTouchData['x']-iX))
        //alert(iDis+' '+iSlp);
    
        if( iSlp > -0.5 && iSlp < 0.5 && iSlp != 0 ){
            if( iDis > $(window).width()*0.1 ){
                if( iX > heroTouchData['x'] ){
                    heroBannerNext();
                }else{
                    heroBannerPrev();
                }
            }
        }
    }
}
/*----------------------------------------------------------------------*/
/* Announcement */
/*----------------------------------------------------------------------*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function anncouncementClose(e){
    e.preventDefault();
    var sWID = $('html').attr('website-id');
    setCookie('announcement_closed-website-'+sWID,1,1 *1/48); 
    $('.announcement').remove();
}
function anncouncementInit(){
    $('.announcement_close').click(anncouncementClose).attr('onclick','');

    var sWID = $('html').attr('website-id');

    if( getCookie('announcement_closed-website-' + sWID) != 1 ){
        $('.announcement').addClass('show');
    }
}
/*----------------------------------------------------------------------*/
function cookieAccept(e){
    e.preventDefault();
    var sWID = $('html').attr('website-id');
    setCookie('cookie_policy-website',1,1 *1/48);
    $('.harbor_cookie').remove();
}
function cookieClose(e){
    e.preventDefault();
    $('.harbor_cookie').remove();
}
function cookieInit(){
    
    $('.harbor_cookie_accept').click(cookieAccept);
    $('.harbor_cookie_close').click(cookieClose);

    var sWID = $('html').attr('website-id');

    if( getCookie('cookie_policy-website' ) != 1 ){
        $('.harbor_cookie').addClass('show');
    }
}
/*----------------------------------------------------------------------*/
/* On Load */
/*----------------------------------------------------------------------*/
$(document).ready(function(){
    heroBannerInit();
    anncouncementInit();
    cookieInit();
});
