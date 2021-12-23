let currentLauncherPanel;

const LAUNCHER_PANELS = {
    home: '#launcher-home-panel',
    beta: '#launcher-betalauncher-panel',
    login: '#login-view',
    settings: "#settings-view"
}

function switchLauncherPanel(current, next) {
    currentLauncherPanel = next;
    $(`${current}`).hide();
    $(`${next}`).fadeIn(500);
}

function initLauncherView() {
    showMainUI(VIEWS.launcher);
    currentLauncherPanel = LAUNCHER_PANELS.home;
    $(LAUNCHER_PANELS.home).fadeIn(1000);
}

// Header Functions
// #region

$("#launcher-nav-home-button").click(function() {
    var element = $(this);
    if(!element.hasClass('active')) {
        switchLauncherPanel(currentLauncherPanel, LAUNCHER_PANELS.home);
        initLauncherHomePanel();
        element.addClass("active");
    }
});

$("#launcher-nav-beta-button").click(function() {
    var element = $(this);
    if(!element.hasClass('active')) {
        switchLauncherPanel(currentLauncherPanel, LAUNCHER_PANELS.beta);
        element.addClass("active");
    }
});

$("#launcher-nav-login-button").click(function() {
    var element = $(this);
    if(!element.hasClass('active')) {
        switchLauncherPanel(currentLauncherPanel, LAUNCHER_PANELS.login);
        element.addClass("active");
    }
});

$("#launcher-nav-settings-button").click(function() {
    var element = $(this);
    if(!element.hasClass('active')) {
        switchLauncherPanel(currentLauncherPanel, LAUNCHER_PANELS.settings);
        element.addClass("active");
    }
});


$(".sidebar li > a").on("click", function() {
    var element = $(this);

    $(".sidebar .active").removeClass("active");
    $(".sidebar .active").removeClass("active");
    element.addClass("active");
});

$(".sidebar li > a").on("click", function() {
    var element = $(this);

    $(".sidebar li > a.active").removeClass("active");
    $(".sidebar li > a.active").removeClass("active");
    element.addClass("active");
});