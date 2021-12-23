let currentView;

const VIEWS = {
    launcher: '#launcher-view'
}

function switchView(current, next, onNextFade = () => {}) {
    currentView = next;
    $(`${current}`).hide();
    
    $(`${next}`).fadeIn(500, () => {
        onNextFade();
    });
}

function getCurrentView() {
    return currentView;
}

function showMainUI(view) {
    setTimeout(() => {
        $('#main').show();

        currentView = view;
        $(view).fadeIn(1000);
    }, 750);
}