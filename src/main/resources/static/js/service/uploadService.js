app.service('uploadService', function ($http) {
    //上传文件
    this.uploadFile = function () {
        var formData = new FormData();
        //file.files[0] file 文件上传框的name，files是取第一个
        formData.append('file', file.files[0]);
        return $http({
            url:'../upload.do',
            method:'post',
            data:formData,
            headers:{'Content-Type':undefined},//默认为json格式，undefined 则会为文件上传
            transformRequest:angular.identity//对文件进行二进制
        });
    }
});