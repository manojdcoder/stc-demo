describe("TestGrid", function () {

    var Test = {
        confirmAction: function (action) {
            return ST.button('[text=' + action + ']').visible();
        }
    };

    it("should pass", function () {
        ST.screenshot('grid-initial');
        ST.grid('mainlist').rowAt(2).click();
        ST.wait(1000);
        ST.screenshot('confirm-box');
        Test.confirmAction('Yes').click();
        ST.wait(2000);
        ST.screenshot('grid-final');

    });
});