const init = () => {
    console.log('Window Loaded')
    view.setActiveScreen('registerScreen')
}
window.onload = init;

document.addEventListener('click', function goToRegister() {
        view.setAtiveScreen('registerScreen');
    },
    document.addEventListener('click', function goToLogIn() {
        view.setAtiveScreen('loginScreen');
    }))