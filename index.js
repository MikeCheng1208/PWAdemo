if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./ServiceWorker.js') // 註冊 Service Worker
    .then(function(reg) {
        alert('註冊成功');
        console.log('註冊成功 Registration succeeded. Scope is ' + reg.scope); // 註冊成功
    }).catch(function(error) {
        alert('註冊失敗');
        console.log('註冊失敗 Registration failed with ' + error); // 註冊失敗
    });
}