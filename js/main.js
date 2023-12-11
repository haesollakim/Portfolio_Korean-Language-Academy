/**
 * 초기 1번 탭에 컬러 포인트를 부여하고 대응 텍스트를 보여줌
 */
$(".tab01").addClass("colorpoint");
$(".txt01").show();


/**
 * 함수: 탭메뉴 中 대응하는 탭 버튼의 텍스트 표시 동작
 */
$(".txt01").show();
function textShow() {
    // 선택된 탭의 데이터 속성에서 대상 텍스트 클래스 가져오기
    let targetClass = $(this).data("text");

    // 모든 텍스트 요소 숨기기
    $("[class^=txt]").hide();

    // 선택된 탭에 해당하는 텍스트 표시
    $(targetClass).show();
}


/**
 * 함수: 탭메뉴 中 해당하는 탭에 컬러포인트
 */
$(".tab01").addClass("colorpoint");
function tabColorpoint() {
    // 모든 탭에서 colorpoint 클래스 제거
    $("[class^=tab]").removeClass("colorpoint");

    // 현재 클릭한 탭에 colorpoint 클래스 추가
    $(this).addClass("colorpoint");
}


/**
 * 탭 메뉴 클릭 시 텍스트 표시 및 colorpoint 클래스 설정
 */
$("[class^=tab]").on('click', function () {
    textShow.call(this);
    tabColorpoint.call(this);
});



/**
 * Slick Slide 설정
 */
$(".slick_slide").slick({
    fade: true,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
});
