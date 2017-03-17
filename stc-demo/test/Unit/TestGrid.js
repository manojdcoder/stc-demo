describe("TestGrid.js", function () {
    var grid, store;

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
        },

        registerSimlet: function (data) {
            simManager.simlets = [];

            simManager.register({
                'data/personnel.json': {
                    type: 'json',
                    data: hardCodedData
                }
            });
        },

        loadStore: function () {
            store = grid.getStore();

            Ext.define('hey', {
                override: 'Ext.data.proxy.Rest',
                buildUrl: function () {
                    this.url = 'data/personnel.json';
                    return this.callParent(arguments);
                }
            });

             // we are overriding the call of  "autoLoad: true," from /Users/vajrakumar/Sencha/Projects/workspace/stc-demo/app/store/Personnel.js
             //We are trying to mock the data by overiding the call to laod data, so to ensure we test on our own data

            //recent_activity_store.model.setProxy(proxy);
            store.load(function (records, operation, success) {
               // debugger;
            });
        }
    };

    beforeAll(function (done) {
        Ext.require('Ext.ux.ajax.SimManager', function () {
            simManager = Ext.ux.ajax.SimManager.init({
                delay: 30
            });

            Test.registerSimlet();

            done();
        });
    });

    it('Should Load Data', function () {
        Test.createGrid();
        Test.loadStore();
    });

    it("should load grid", function () {

        ST.grid('mainlist').rowAt(2).click();
        ST.wait(1000);
        Test.confirmAction('Yes').click();
        ST.wait(2000);
    });



    afterAll(function () {
        grid.destroy();
        store.destroy();
        grid = null;
        store = null;
    });
});