// 탭 이동 로직 (오류 완벽 수정 완료)
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// 1. 회원가입 및 이메일 인증 가상 로직
function sendAuthCode() {
    const email = document.getElementById('emailInput').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.ac\.kr$/;
    
    if(!emailRegex.test(email)) {
        alert("대학 도메인(.ac.kr) 이메일을 입력해주세요!");
        return;
    }
    
    alert("인증 메일이 발송되었습니다. (가상 코드: 123456)");
    document.getElementById('codeArea').classList.remove('hidden');
}

function verifyCode() {
    const code = document.getElementById('codeInput').value;
    if(code === "123456") {
        alert("학교 인증 및 회원가입이 완료되었습니다!");
        showTab('timetable'); // 성공 시 시간표 탭으로 바로 이동
    } else {
        alert("인증코드가 일치하지 않습니다.");
    }
}

// 2. 공강 분석 가상 로직
function analyzeTimetable() {
    document.getElementById('timetableResult').classList.remove('hidden');
}

// 3. 장소 추천 가상 로직
function recommendPlace() {
    const theme = document.getElementById('theme').value;
    const placeList = document.getElementById('placeList');
    
    let resultHTML = "";
    if(theme === "카공") {
        resultHTML = `
            <div class="card">
                <div>
                    <h3>☕ 교내 도서관 노트북석</h3>
                    <p>도보 5분 | 평균 체류시간: 2시간 | 콘센트 많음</p>
                </div>
                <button disabled>도착</button>
            </div>`;
    } else if (theme === "휴식") {
        resultHTML = `
            <div class="card">
                <div>
                    <h3>🛋️ 학생회관 수면실 / 휴게실</h3>
                    <p>도보 3분 | 빈 자리 3개 남음 | 조용함</p>
                </div>
                <button disabled>도착</button>
            </div>`;
    } else {
        resultHTML = `
            <div class="card">
                <div>
                    <h3>🍜 정문 앞 가성비 덮밥집</h3>
                    <p>도보 8분 | 혼밥 난이도: 하 | 대기열 없음</p>
                </div>
                <button disabled>도착</button>
            </div>`;
    }
    placeList.innerHTML = resultHTML;
}

// 4. 밥약 방 만들기 및 참여 로직
function createRoom() {
    const title = document.getElementById('roomTitle').value;
    if(!title) {
        alert("모임 목적을 입력해주세요!");
        return;
    }

    const roomList = document.getElementById('roomList');
    const newRoom = document.createElement('div');
    newRoom.className = 'card';
    newRoom.innerHTML = `
        <div>
            <h3>${title}</h3>
            <p>현재 인원: 1/4 | 방장: 나</p>
        </div>
        <button disabled style="background-color: #ccc;">내 모임</button>
    `;
    roomList.prepend(newRoom);
    document.getElementById('roomTitle').value = "";
}

function joinRoom(btn) {
    alert("방장에게 참여 요청 알림을 보냈습니다! 수락 시 간이 채팅방이 열립니다.");
    btn.innerText = "요청됨";
    btn.disabled = true;
    btn.style.backgroundColor = "#ccc";
}
