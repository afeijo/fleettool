router.pages["fleets"] = {};

router.pages["fleets"].handler = function() {

    console.log("Loading fleets page...");

    var me = router.pages["fleets"];
    if (me.template === undefined) {
        $.get("templates/view_fleets.html", function(data) {
            me.template = data;
            me.handler();
        });
    } else {
        ft.page.section.body.html(me.template);
        ft.page.section.body.fadeIn();

        router.clear_buttons();
        ft.page.nav.fleets.prop('disabled', true);
    }
}