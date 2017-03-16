Ext.define('STCDemo.view.main.ListVC', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.listVC',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Really, Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});