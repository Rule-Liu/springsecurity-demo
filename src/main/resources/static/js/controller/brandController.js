//品牌控制层前端
app.controller('brandController', function ($scope, $http, $controller, brandService) {
    //继承baseController
    $controller('baseController', {$scope:$scope});

    //查询品牌列表
    $scope.findAll = function () {
        brandService.findAll().success(
            function (data) {
                $scope.list = data;
            }
        );
    }


    //分页
    $scope.findByPage = function (page, size) {
        brandService.findByPage(page, size).success(
            function (data) {
                $scope.list = data.rows;//显示当前页的数据
                $scope.paginationConf.totalItems = data.total;//更新总记录数
            }
        );
    }

    //保存（新增或修改）
    $scope.add = function () {
        var object = null;//方法名
        if ($scope.entity.id != null) {
            object = brandService.update($scope.entity);
        } else {
            object = brandService.add($scope.entity);
        }
        object.success(
            function (data) {
                if (data.success) {
                    $scope.reloadList();//刷新
                } else {
                    alert(data.message)
                }
            }
        );
    }

    //通过id查询
    $scope.findOne = function (id) {
        brandService.findOne(id).success(
            function (data) {
                //angular 双向绑定
                $scope.entity = data;
            }
        );
    }

    //删除
    $scope.dele = function () {
        brandService.dele($scope.selectIds).success(
            function (data) {
                if (data.success) {
                    $scope.reloadList();//刷新页面
                } else {
                    alert(data.message);
                }
            }
        );
    }
    //初始化searchEntity ，否则为null或者undefined
    $scope.searchEntity = {};
    //条件查询
    $scope.search = function (page, rows) {
        brandService.search(page, rows, $scope.searchEntity).success(
            function (data) {
                $scope.list = data.rows;//显示当前页的数据
                $scope.paginationConf.totalItems = data.total;//更新总记录数
            }
        );
    }


});