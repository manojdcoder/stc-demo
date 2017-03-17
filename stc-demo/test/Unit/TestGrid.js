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
        loadStore:function(){
            recent_activity_store = grid.getStore();

            Ext.define('hey',{
                override:'Ext.data.proxy.Rest',
                buildUrl:function(){
                    this.url = 'http://localhost:3001/activity?&username=i1626';
                     return this.callParent(arguments);
                }
            });

//recent_activity_store.model.setProxy(proxy);
             recent_activity_store.load(function(records, operation, success) {
                 debugger;
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

it('Should Load Data',function(){
    Test.createGrid();
    Test.loadStore();
    });

    it("should load grid", function () {
        
        ST.grid('mainlist').rowAt(2).click();
        ST.wait(1000);
        Test.confirmAction('Yes').click();
        ST.wait(15000);
    });

    

    afterAll(function () {
        ST.wait(20000);
    });
});