if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./ServiceWorker.js') // 註冊 Service Worker
    .then(function(reg) {
        console.log('註冊成功 Registration succeeded. Scope is ' + reg.scope); // 註冊成功
    }).catch(function(error) {
        console.log('註冊失敗 Registration failed with ' + error); // 註冊失敗
    });
}