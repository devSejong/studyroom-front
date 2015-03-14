'use strict';

studyRoomApp.controller('StudyRoomController', function ($scope) {
    $scope.studyRoomList = [{
        "name": "강남 토즈점",
        "tel": "010-5343-3433",
        "주소": "서울시 영등포구"
    },
        {
            "name": "에이블 스퀘어",
            "tel": "010-5343-3433",
            "주소": "서울시 영등포구"
        },
        {
            "name": "민들레 영토",
            "tel": "010-5343-3433",
            "주소": "서울시 영등포구"
        }
    ];
});