'use strict';

module.exports = {

    'GET /api/example': function(req, res) {
        setTimeout(function() {
            res.json({
                success: true,
                data: ['foo', 'bar'],
            });
        }, 500);
    },
    'GET /api/users': function(req, res) {
        setTimeout(function() {
            res.json({
                success: true,
                data: [{
                    name: '张三',
                    age: 23,
                    address: '成都',  
                }, {
                    name: '李四',
                    age: 24,
                    address: '杭州',
                }, {
                    name: '王五',
                    age: 25,
                    address: '上海',
                }]
            });
        }, 500);
    },

};
