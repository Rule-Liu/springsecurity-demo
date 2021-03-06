 //控制层 
app.controller('itemCatController' ,function($scope,$controller, itemCatService, typeTemplateService){
	
	$controller('baseController',{$scope:$scope});//继承
	
    //读取列表数据绑定到表单中  
	$scope.findAll=function(){
		itemCatService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}    
	
	//分页
	$scope.findPage=function(page,rows){			
		itemCatService.findPage(page,rows).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	
	//查询实体 
	$scope.findOne=function(id){				
		itemCatService.findOne(id).success(
			function(response){
				$scope.entity= response;					
			}
		);				
	}
	
	//保存 
	$scope.save=function(){
		var serviceObject;//服务层对象  				
		if($scope.entity.id!=null){//如果有ID
			serviceObject=itemCatService.update( $scope.entity ); //修改  
		}else{
			$scope.entity.parentId = $scope.parentId;
			alert($scope.entity.parentId);
			serviceObject=itemCatService.add( $scope.entity);//增加
		}				
		serviceObject.success(
			function(response){
				if(response.success){
					//重新查询 
		        	$scope.reloadList();//重新加载
				}else{
					alert(response.message);
				}
			}		
		);				
	}
	
	 
	//批量删除 
	$scope.dele=function(){
		alert("selectIds = " + $scope.selectIds);
		//获取选中的复选框			
		itemCatService.dele( $scope.selectIds ).success(
			function(response){
				if(response.success){
					$scope.reloadList();//刷新列表
					$scope.selectIds=[];
				}else {
					alert("删除失败！！");
				}
			}		
		);				
	}
	
	$scope.searchEntity={};//定义搜索对象 
	
	//搜索
	$scope.search=function(page,rows){			
		itemCatService.search(page,rows,$scope.searchEntity).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}

    //根据上级分类parentId查询商品分类列表
    $scope.findByParentId = function (parentId) {
        itemCatService.findByParentId(parentId).success(
            function (response) {
            	$scope.list = response;

            }
        );
    };

	//设置grade变量当前级别为1
	$scope.grade =1;

	//设置级别
	$scope.setGrade = function (value) {
        $scope.grade = value;
    }

    //根据分类的级别进行查询
    $scope.selectList = function (p_entity) {
		if ($scope.grade == 1){
			$scope.entity_1 = null;
			$scope.entity_2 = null;
		}
		else if ($scope.grade == 2){
            $scope.entity_1 = p_entity;
            $scope.entity_2 = null;
		}
		else if ($scope.grade == 3){
            $scope.entity_2 = p_entity;
		}

		$scope.findByParentId(p_entity.id);
    }

    //设置当前的上级别为0
    $scope.parentId = 1;
	//设置当前的parentId
	$scope.setParentId = function (value) {
		$scope.parentId = value;
    }

    //查询所有的类型模板
	$scope.typeList = {data:[]};
    $scope.selectTypeList = function () {
        typeTemplateService.selectTypeList().success(
        	function (response) {
				$scope.typeList = {data:response};
            }
		);
    }



});	
