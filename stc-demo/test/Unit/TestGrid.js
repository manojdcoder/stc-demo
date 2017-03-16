describe("TestGrid.js", function () {
    var grid;

    var Test = {
        createGrid: function (config) {
            grid = Ext.create(Ext.apply({
                xtype: 'mainlist',
                // store: store,
                renderTo: Ext.getBody()
            }, config || {}));
        },
        confirmAction: function (action) {
            return ST.button('[text=' + action + ']').visible();
        }
    };
    beforeAll(function () {
        //here you have to mock simmanager

    });

    it("should load grid", function () {
        Test.createGrid();
        ST.grid('mainlist').rowAt(2).click();
        ST.wait(1000);
        Test.confirmAction('Yes').click();
        ST.wait(15000);
    });
});