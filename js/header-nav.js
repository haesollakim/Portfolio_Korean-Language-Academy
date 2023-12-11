/**
 * 함수: 페이지 새로고침
 */
function reloadPage() {
    location.reload();
}


/**
 * 함수: 드롭다운 메뉴의 선택된 옵션에 따라 새 창에서 링크 열기
 */
function dropdown() {
    // 현재 선택된 옵션 가져오기
    let selectedOption = $(this).find("option:selected");
    
    // 선택된 옵션에 연결된 링크 가져오기
    let link = selectedOption.data("link");
    
    // 링크가 정의되어 있고 빈 문자열이 아닌 경우 새 창에서 링크 열기
    if (link !== undefined && link !== "") {
        window.open(link, "_blank");
    }
}


/**
 * 함수: 스크롤에 따라 gnb에 그림자 효과 적용 및 헤더 숨김/표시
 */
function hideAndShadow() {
    // 현재 스크롤 위치 가져오기
    let scrollValue = $(document).scrollTop();
    
    // 스크롤 위치가 500 이상일 때 gnb에 그림자 효과 적용 및 헤더 숨김
    if (scrollValue >= 500) {
        $(".gnb").addClass("bottomShadow");
        $(".gnb").css("top", "0px");
        $("header").hide();
    } else {
        // 500 이하일 떄 그림자 효과 제거 및 헤더 표시
        $(".gnb").removeClass("bottomShadow");
        $(".gnb").css("top", "50px");
        $("header").show();
    }
}


/**
 * 함수: 서브메뉴를 페이드 인으로 표시
 */
function submenuShow() {
    $(this).find(".submenu").stop().fadeIn(750);
}


/**
 * 함수: 서브메뉴를 페이드 아웃으로 숨김
 */
function submenuHide() {
    $(this).find(".submenu").stop().fadeOut(750);
}


/**
 * 함수: 반응형 메뉴를 슬라이드 토글
 */
function r_menuToggle() {
    $(".responsive_nav").slideToggle();
}


/**
 * 함수: 반응형 서브메뉴를 슬라이드 토글
 */
function r_subToggle() {
    $(this).closest(".r_includeSub").find(".r_submenu").slideToggle();
}



/**
 * 이하 이벤트 핸들러 등록 
 */
// 로고 이미지 클릭 시 페이지를 새로고침
$(".logo img").on("click", reloadPage);

// 드롭다운 메뉴 변경 시 새 창에서 사이트 열림
$("#familySites").on('change', dropdown);

// 스크롤 시 gnb에 그림자 설정
$(window).on('scroll', hideAndShadow);

// 메뉴 카테고리에 마우스 호버 시 서브메뉴 동작
$(".menuCategory").on({
    mouseenter: submenuShow,
    mouseleave: submenuHide
});

// 햄버거 메뉴 아이콘 클릭 시 반응형 메뉴 토글
$("#menuShowBtn").on('click', r_menuToggle);

// 플러스 아이콘 클릭 시 반응형 서브메뉴 토글
$(".r_subBtn").on('click', r_subToggle);
