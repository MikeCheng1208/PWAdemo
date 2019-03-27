var text = document.getElementById("text");
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./ServiceWorker.js') // 註冊 Service Worker
    .then(function(reg) {
        text.innerHTML = "註冊成功";
        installOk();
        console.log('註冊成功 Registration succeeded. Scope is ' + reg.scope); // 註冊成功
    }).catch(function(error) {
        text.innerHTML = "註冊失敗";
        console.log('註冊失敗 Registration failed with ' + error); // 註冊失敗
    });
}

function installOk(){
    var deferredPrompt = null;
    var BodyInstall = document.getElementsByTagName("body")[0];

    window.addEventListener('beforeinstallprompt', function (e) {
        deferredPrompt = e;
    });

    BodyInstall.addEventListener('click', function () {
        if (deferredPrompt != null) {
            // 异步触发横幅显示
            deferredPrompt.prompt();

            deferredPrompt.userChoice.then(function (choiceResult) {
                if (choiceResult.outcome === 'dismissed') {
                    text.innerHTML = "用户取消安装应用";
                } else {
                    text.innerHTML = "用户安装了应用";
                }
            });
            
            deferredPrompt = null;
        }
    });



}