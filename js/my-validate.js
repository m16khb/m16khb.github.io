    //validate 깡으로 구현해보기
    //submit수행시 userdb.js를 업데이트 하고 싶었지만 방법을 못찾음
    //회원가입시 userdb와 비교해서 아이디가 같으면 거절하는 것은 나중에 db에서 구현
    var feedbackNameInput = function () {
        $('.feedback-name').css('display', 'none')
        $('.input-name-group').addClass('mb-3').css('border', '1px solid green').css('border-radius', '3px')
    }

    var feedbackIdInput = function () {
        $('.feedback-id').css('display', 'none')
        $('.input-id-group').addClass('mb-3').css('border', '1px solid green').css('border-radius', '3px')
    }
    var feedbackPwInput = function () {
        $('.feedback-pw').css('display', 'none')
        $('.input-pw-group').addClass('mb-3').css('border', '1px solid green').css('border-radius', '3px')
    }
    var feedbackPwCheckInput = function () {
        $('.feedback-pwcheck').css('display', 'none')
        $('.input-pwcheck-group').addClass('mb-3').css('border', '1px solid green').css('border-radius', '3px')
    }

    var feedbackEmail1Input = function () {
        $('.feedback-email').css('display', 'none')
        $('.input-email-group').addClass('mb-3').css('border', '1px solid green').css('border-radius', '3px')
    }
    var feedbackEmail2Input = function () {
        $('.feedback-email').css('display', 'none')
        $('.input-email-group').addClass('mb-3').css('border', '1px solid green').css('border-radius', '3px')
    }
    var feedbackAddressInput = function () {
        $('.feedback-address').css('display', 'none')
        $('.input-address-group').addClass('mb-3').css('border', '1px solid green').css('border-radius', '3px')
    }

    document.getElementById('my-form').onsubmit = function (evt) {
        var name = document.getElementById('name').value;
        var id = document.getElementById('id').value;
        var pw = document.getElementById('password').value;
        var pwcheck = document.getElementById('password-check').value;
        var email1 = document.getElementById('email-1').value;
        var email2 = document.getElementById('email-2').value;
        var address = document.getElementById('address').value;
        var flag = 0; //flag를 사용해 or연산으로 option체크

        if (name === '') {
            $('.feedback-name').css('display', 'block').css('color', 'red')
            $('.input-name-group').removeClass('mb-3').css('border', '1px solid red').css('border-radius', '3px')
        } else {
            flag = flag | 1
        }
        if (id === '') {
            $('.feedback-id').css('display', 'block').css('color', 'red')
            $('.input-id-group').removeClass('mb-3').css('border', '1px solid red').css('border-radius', '3px')
        } else {
            flag = flag | 2
        }
        if (pw === '') {
            $('.feedback-pw').css('display', 'block').css('color', 'red')
            $('.input-pw-group').removeClass('mb-3').css('border', '1px solid red').css('border-radius', '3px')
        } else {
            flag = flag | 4
        }
        if (pwcheck === '') {
            $('.feedback-pwcheck').css('display', 'block').css('color', 'red')
            $('.input-pwcheck-group').removeClass('mb-3').css('border', '1px solid red').css('border-radius', '3px')
        } else {
            flag = flag | 8
        }
        if (address === '') {
            $('.feedback-address').css('display', 'block').css('color', 'red')
            $('.input-address-group').removeClass('mb-3').css('border', '1px solid red').css('border-radius', '3px')
        } else {
            flag = flag | 16
        }
        if (email1 === '' || email2 === '') {
            $('.feedback-email').css('display', 'block').css('color', 'red')
            $('.input-email-group').removeClass('mb-3').css('border', '1px solid red').css('border-radius', '3px')
        } else {
            flag = flag | 32
        }

        if (pw !== '' && pwcheck !== '') {
            if (pw !== pwcheck) {
                $('.feedback-pw').css('display', 'block').css('color', 'red').text('비밀번호가 같지 않습니다.')
                $('.input-pw-group').removeClass('mb-3').css('border', '1px solid red').css('border-radius', '3px')
                $('.feedback-pwcheck').css('display', 'block').css('color', 'red').text('비밀번호가 같지 않습니다.')
                $('.input-pwcheck-group').removeClass('mb-3').css('border', '1px solid red').css('border-radius',
                    '3px')
            } else {
                flag = flag | 64
            }
        }

        if (flag == 127) {
            evt.preventDefault();
            location.assign('./login.html')
        } else {
            return false;
        }

    }