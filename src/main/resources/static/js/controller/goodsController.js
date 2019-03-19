 //控制层 
app.controller('goodsController' ,function($scope, $controller, goodsService, itemCatService){
	
	$controller('baseController',{$scope:$scope});//继承
	
    //读取列表数据绑定到表单中  
	$scope.findAll=function(){
		goodsService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}    
	
	//分页
	$scope.findPage=function(page,rows){			
		goodsService.findPage(page,rows).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}

    //保存
    $scope.save=function(){
        //添加富文本编辑器的内容到$scope.entity中
        $scope.entity.goodsDesc.introduction = editor.html();
       var serviceObject;//服务层对象
		if ($scope.entity.goods.id != null){
			//如果存在id
            serviceObject = goodsService.update( $scope.entity)
		}else {
            serviceObject = goodsService.add( $scope.entity)
		}
       serviceObject.success(
            function(response){
                if(response.success){
                    alert("保存成功");
                    location.href="goods.html";
                }else{
                    alert(response.message);
                }
            }
        );
    }

	//批量删除 
	$scope.dele=function(){			
		//获取选中的复选框			
		goodsService.dele( $scope.selectIds ).success(
			function(response){
				if(response.success){
					alert(response.message);
					$scope.reloadList();//刷新列表
					$scope.selectIds=[];
				}else {
					alert(response.message);
				}
			}		
		);				
	}
	
	$scope.searchEntity={};//定义搜索对象 
	
	//搜索
	$scope.search=function(page,rows){			
		goodsService.search(page,rows,$scope.searchEntity).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}

    //设置商品状态初始值，通过下标进行访问
	$scope.status = ['未审核','审核通过','审核未通过','审核关闭'];
	
	//查询商品分类列表,将查询得到的数据，封装到数组中，然后前端通过的分类id作为下标从数组中进行获取
	$scope.itemCatList = [];//商品分类列表
	$scope.findItemCatList = function () {
		itemCatService.findAll().success(
			function (response) {
                for (var i = 0; i < response.length; i++) {
                	$scope.itemCatList[response[i].id] = response[i].name;
                }
            }
		);
    }

    //更新商品状态(批量)
    $scope.updateStatus = function (status) {
		goodsService.updateStatus($scope.selectIds, status).success(
			function (response) {
				if (response.success) {
					alert(response.message);
					$scope.reloadList();//刷新页面
					$scope.selectIds = [];//清空复选框
				}else {
					alert(response.message);
				}
            }
		);
    }

});	
