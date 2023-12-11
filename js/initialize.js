// AOS(Animate On Scroll) 라이브러리 초기화
AOS.init({
    // 애니메이션을 한 번만 실행하도록 설정
    once: true
});

// 페이지 로드 후 AOS 갱신
$(window).on("load", function () {
    AOS.refresh();
});


/**
 * 임시 링크 클릭 시 이벤트 핸들러
 * @param {Event} event - 클릭 이벤트 객체
 */
$('a[href="#"]').on("click", function (event) {
    // 기본 링크 동작을 막음
    event.preventDefault();
});
