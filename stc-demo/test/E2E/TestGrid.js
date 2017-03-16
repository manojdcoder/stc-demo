describe("TestGrid", function() {

var Test = {
confirmAction: function (action) {
                return ST.button('[text=' + action + ']').visible();
            }
};

    it("should pass", function() {
        ST.grid('mainlist').rowAt(2).click();
        ST.wait(1000);
        Test.confirmAction('Yes').click();
        ST.wait(2000);
    });
});