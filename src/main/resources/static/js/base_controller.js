//父类控制器
app.controller('baseController', function ($scope) {

    //分页控件配置CurrentPage：当前页
    //totalItem：总记录数 itemPerPage：每页记录数
    //perPageOptions：分页选项 onChange：当页码变更后，自动触发的方法
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.reloadList();//重新加载
        }
    };

    //刷新页面
    $scope.reloadList = function () {
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    };

    $scope.selectIds = [];//用户勾选的id集合
    //用户勾选复选框方法
    $scope.updateSelection = function ($event, id) {

        if ($event.target.checked) {
            $scope.selectIds.push(id);//向集合添加元素
        } else {
            var index = $scope.selectIds.indexOf(id);//查找当前id的位置
            //通过index 移除元素
            $scope.selectIds.splice(index, 1);//参数1：移除的位置，参数2：移除的个数
        }
    }


    //json格式字符串转换为根据所给的 key 值，得到value
    $scope.jsonToString = function (jsonString, key) {
        var object = JSON.parse(jsonString);
        var value = "";
        //遍历 json 格式的对象
        for (var i = 0; i < object.length; i++) {
            if (i > 0){
                value += ",";
            }
            value += object[i][key];
        }
        //返回取到的 value 字符串
        return value;
    }


});