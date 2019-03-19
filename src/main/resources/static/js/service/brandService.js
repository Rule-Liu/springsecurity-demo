//品牌服务层前端
app.service('brandService', function ($http) {

    //查询所有
    this.findAll = function () {
        return $http.get("../brand/findAll.do");
    }
    //分页查询
    this.findByPage = function (page, size) {
        return $http.get("../brand/findByPage.do?page=" + page + "&size=" + size);
    }

    //新增
    this.add = function (entity) {
        return $http.post("../brand/add.do", entity);
    }

    //修改
    this.update = function (entity) {
        return $http.post("../brand/update.do", entity);
    }

    //通过id查询
    this.findOne = function (id) {
        return $http.get("../brand/findOne.do?id=" + id);
    }

    //批量删除或单独删除
    this.dele = function (ids) {
        return $http.get("../brand/delete.do?ids=" + ids);
    }

    //条件查询
    this.search = function (page, rows, searchEntity) {
        return $http.post("../brand/search.do?page=" + page + "&rows=" + rows, searchEntity);
    }
    
    //查询品牌信息
    this.selectOptionList = function () {
        return $http.get("../brand/selectOptionList.do");
    }
    
    
})