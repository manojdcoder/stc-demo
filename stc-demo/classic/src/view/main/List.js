/**
 * This view is an example list of people.
 */
Ext.define('STCDemo.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'STCDemo.store.Personnel',
        'STCDemo.view.main.ListVC'
    ],

    title: 'Personnel',
    controller: 'listVC',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
