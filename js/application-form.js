$(document).ready(function () {
    // 제출 버튼 클릭 시 이벤트 처리
    $("#submitBtn").click(function () {
        // Input Value 상수 정의
        const NAME = $("#name").val();
        const EMAIL = $("#email").val();
        const LANGUAGE_SELECT = $('input[name="language"]:checked').val();
        const OTHER_LANGUAGE = $("#otherLanguage").val();

        // 이메일 형식 유효성 검사 함수
        function validEmail(email) {
            const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return EMAIL_REGEX.test(email);
        }

        // 누락된 Input Value 항목 체크
        const MISSING_INPUT = [];
        if (NAME === "") {
            MISSING_INPUT.push("name");
        }
        if (EMAIL === "") {
            MISSING_INPUT.push("e-mail");
        }
        if (!LANGUAGE_SELECT) {
            MISSING_INPUT.push("first language");
        }
        if (LANGUAGE_SELECT === "other" && OTHER_LANGUAGE === "") {
            MISSING_INPUT.push("first language");
        }

        // 누락된 Input Value가 있을 경우 경고 표시
        if (MISSING_INPUT.length > 0) {
            alert("Please input your " + MISSING_INPUT.join(", ") + ".");
        } else if (!validEmail(EMAIL)) {
            alert("Please enter a valid e-mail address.");
        } else {
            // "other" 선택 시 textarea 배경색을 흰색으로 변경
            if (LANGUAGE_SELECT === "other") {
                $("#otherLanguage").css("background-color", "#ffffff");
            } else {
                // 다른 언어가 선택되었을 때 배경색 초기화(회색)
                $("#otherLanguage").css("background-color", "#7e8890");
            }

            // 제출 완료 메시지 표시
            alert("Submitted!");
            // 폼 제출
            $("#applyForm").submit();
        }
    });

    // 모국어 Input 라디오버튼 변경 시 이벤트 처리
    $('input[name="language"]').change(function () {
        if ($(this).val() === "other") {
            // "other" 선택 시 input text 배경색을 흰색으로 변경
            $("#otherLanguage").css("background-color", "#ffffff");
        } else {
            // 다른 언어가 선택되었을 때 배경색 초기화(회색) 및 내용 초기화
            $("#otherLanguage").val("").css("background-color", "#7e8890");
        }
    });
});