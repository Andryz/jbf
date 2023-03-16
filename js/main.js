"use strict";
"use strict";

window.onmessage = (event) => {
    console.log(event.data);

    if (event.data === 'ui:confirm_signup') {
        document.location.href = 'https://justbit.io';
    }
    if (event.data === 'ui:open_login') {
        document.location.href = 'https://justbit.io/#login';
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiIl19
