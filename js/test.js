const test = new Vue({
    el: '#test',
    data: {
        intro: 'Hello world!',
        title: '당신과 어울리는 프로그래밍 언어는?',
        currentIndex: 0,
        qna: [],
        result: '',
        resultImage: '',
        resultLang: '',
        resultMbti: '',
        resultContent: '',
    },
    beforeMount: function() { //문제 물어보기
        this.insertQna('Q1. 풀리지 않는 문제가 있을 때?', ['혼자 푼다','주변 사람들과 의논한다'], null);
        this.insertQna('Q2. 내가 좋아하는 글은?', ['소설 또는 시','신문이나 다큐'], null);
        this.insertQna('Q3. 내 책상 주위는?', ['정돈되어 있다','더럽다'], null);
        this.insertQna('Q4. 계획을 세우는 편인가?', ['예','아니오'], null);
        
    },
    mounted: function() {
        $('#intro').show();
        $('#main').hide();
        $('#result').hide();
    },
    methods: {
        insertQna: function(q, a, t) { //문제 답 입력 배열
            var item = {
                q: q,
                a: a,
                r: '',
                t: t
            };
            //qna배열에 삽입
            this.qna.push(item);
        },
        start: function() {
            $('#intro').hide();
            $('#main').show();
            $('#result').hide();

            var self = this;
            setTimeout(function() {
                if(typeof self.qna[0].t != 'undefined' && self.qna[0].t != null) {
                    $('#q0a0').attr('type', self.qna[0].t);
                    $('#q0a0').focus();
                }
            }, 200);
        },
        next: function () { //다음 넘어가는 코드
            var self = this;
            if(this.currentIndex < this.qna.length-1) {
                this.currentIndex++;
                if(typeof this.qna[this.currentIndex].t != 'undefined' && this.qna[this.currentIndex].t != null) {
                    setTimeout(function() {
                        $('#q'+self.currentIndex+'a0').attr('type', self.qna[self.currentIndex].t);
                        $('#q'+self.currentIndex+'a0').focus();
                    }, 200);                    
                }
            } else {
                var check = true;
                for(var i=0; i < this.qna.length; i++) {
                    if(this.qna[i].r === '') {
                        check = false;
                    }
                }
                if(check) {
                    this.showResult();
                } else {
                    alert("아직 완료되지 않았습니다.");
                }
            }
        },
        prev: function () {
            var self = this;
            if(this.currentIndex > 0) {
                this.currentIndex--;
                if(typeof this.qna[this.currentIndex].t != 'undefined' && this.qna[this.currentIndex].t != null) {
                    setTimeout(function() {
                        $('#q'+self.currentIndex+'a0').attr('type', self.qna[self.currentIndex].t);
                        $('#q'+self.currentIndex+'a0').focus();
                    }, 200);                    
                }
            } else {
                alert('첫 질문입니다.');
            }
        },
        
        showResult: function() { //결과 조건별로 보여주기
            if(this.qna[0].r=='혼자 푼다'){
                if(this.qna[3].r=='예'){
                    this.resultImage = 'java.png';
                    this.resultLang = 'java';
                    this.resultMbti = '#집콕 #미래 #계획 #책임감 #목표';
                    this.resultContent = '요새 개발자라면 자바 안 배우는 분들 없죠. 쉬운 편은 아니지만 늘 인기가 많은 언어입니다. 자바가 츤데레인 이유! 눈앞에 보이는 화면 말고, 무심한 듯 시크하게 뒤에서 지원해주는 프로그램을 만드는 데 유용하기 때문이에요'
                }
                else{
                    this.resultImage = 'c++.png';
                    this.resultLang = 'c++';
                    this.resultMbti = '#집콕 #미래 #계획 #책임감 #목표';
                    this.resultContent ='C++은 C언어의 단점을 보완한 언어입니다. 이름 그대로 C를 ++ 했다고 볼 수 있죠. 큼직큼직한 응용프로그램을 만들 수 있어 대형 게임들을 만들 때도 사용해요. 구글, 크롬, 파이어폭스, 마이크로소프트 워드 등은 모두 C++로 개발했습니다. C++이 행동 대장일만 하죠?'
                }
            }else{
                if(this.qna[3].r=='예'){
                    this.resultImage = 'pythonn.png';
                    this.resultLang = 'python';
                    this.resultMbti = '#에너제틱 #아이디어 #계획 #적응 #데이터';
                    this.resultContent ='가장 기초적인 언어이고 최근 들어 많은 사람들이 사용해요사람에 가까운 언어라 배우기 쉬워요 이것은 웹 사이트, 서비스 개발, 데이터 분석 등 다양하게 사용돼요'

                }
                else{
                    this.resultImage = 'htmlll.png';
                    this.resultLang = 'html';
                    this.resultMbti = '#에너제틱 #아이디어 #계획 #적응 #데이터';
                    this.resultContent ='당신은 말로 사람을 설득하는 능력이 좋고,  일은 잘 벌리지만 지속하는 능력이 약해요.  html은 웹문서를 만들기 위해 필요한 언어이고,  하이퍼텍스트를 작성하기 위해 만들어졌어요.'
                }
            }
            
            $('#main').hide();
            $('#result').show();
        }
    }
});