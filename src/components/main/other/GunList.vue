<!--枪支列表-->

<template>
  <div class="gunList">
      <!-- MAIN CONTENT -->
			<div class="main-content">
				<div class="container-fluid">
					<h3 class="page-title">Tables</h3>
					
					<div class="row">
						<div class="col-md-12">
							<!-- BORDERED TABLE -->
							<div class="panel">
								<div class="panel-heading">
									<h3 class="panel-title">Bordered Table</h3>
									
								</div>
								<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" v-on:click="createGun()">
											新增
								</button>
								<div class="panel-body">
									<input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
									<table class="table table-bordered">
										<thead>
											<tr>
												<th>#</th>
												<th class="text-center">枪支编号</th>
												<th class="text-center">枪支型号</th>
												<th class="text-center">枪支类型</th>
												<th class="text-center">蓝牙编号</th>
												<th class="text-center">库房</th>
												<th class="text-center">创建时间</th>
												<th class="text-center">操作</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="guns in filterBy(gunList,filterInput)" :key="">
												<td class="text-center"></td>
												<td class="text-center">{{guns.gunId}}</td>
												<td class="text-center">{{guns.gunModel}}</td>
												<td class="text-center">{{guns.gunType}}</td>
												<td class="text-center">{{guns.bluetoothMac}}</td>
												<td class="text-center">{{guns.warehouseName}}</td>
												<td class="text-center">{{guns.createTime | formatDate}}</td>
												<td class="text-center">
														<!-- Button trigger modal -->
														<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" v-on:click="detailsGun(guns.id)">
															详情
														</button>
														<button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#exampleModal" v-on:click="updateGunS(guns.id)">
															修改
														</button>
														<button type="button" class="btn btn-danger btn-sm"  v-on:click="deleteGun(guns.id)">
															删除
														</button>
														<!-- Button trigger modal -->
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- END BORDERED TABLE -->
						</div>
					</div>
				</div>
			</div>
				<!-- END MAIN CONTENT -->
				<!-- Modal -->
				<div  id="gunAddModal">
				 <form >
							<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div class="modal-dialog" role="document">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLabel">{{headlineGun}}</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
										
											<form class="form-horizontal">
												<div class="form-group form-group-sm">
													<label class="col-sm-2 control-label" for="formGroupInputSmall">枪支编号</label>
													<div class="col-sm-6">
														<input class="form-control" type="hidden" id="formGroupInputSmall"  placeholder="" v-model="gun.id">
														<input class="form-control" type="hidden" id="formGroupInputSmall"  placeholder="" v-model="gun.version">
														<input class="form-control" type="text" id="formGroupInputSmall"  placeholder="枪支编号" v-model="gun.gunId">
														<input class="form-control" type="hidden" id="formGroupInputSmall"  placeholder="枪支编号" v-model="gun.uid">
														<input class="form-control" type="hidden" id="formGroupInputSmall"  placeholder="枪支编号" v-model="gun.isDel">
													</div>
												</div>
												<div class="form-group form-group-sm">
													<label class="col-sm-2 control-label" for="formGroupInputSmall">枪支型号</label>
													<div class="col-sm-6">
														<input class="form-control" type="text" id="formGroupInputSmall" placeholder="枪支型号"  v-model="gun.gunModel">
													</div>
												</div>
												<div class="form-group form-group-sm">
													<label class="col-sm-2 control-label" for="formGroupInputSmall">枪支类型</label>
													<div class="col-sm-6">
														<input class="form-control" type="text" id="formGroupInputSmall" placeholder="枪支类型"  v-model="gun.gunType">
													</div>
												</div>
												<div class="form-group form-group-sm">
													<label class="col-sm-2 control-label" for="formGroupInputSmall">蓝牙编号</label>
													<div class="col-sm-6">
														<input class="form-control" type="text" id="formGroupInputSmall" placeholder="蓝牙编号" v-model="gun.bluetoothMac">
													</div>
												</div>
												<div class="form-group form-group-sm">
													<label class="col-sm-2 control-label" for="formGroupInputSmall">库室</label>
													<div class="col-sm-6">
														<input class="form-control" type="text" id="formGroupInputSmall" placeholder="库室"  v-model="gun.warehouseId">
													</div>
												</div>
												<div class="form-group form-group-sm">
													<label class="col-sm-2 control-label" for="formGroupInputSmall">库房名称</label>
													<div class="col-sm-6">
														<input class="form-control" type="text" id="formGroupInputSmall" placeholder="库房名称" v-model="gun.warehouseName">
													</div>
												</div>
												<div v-show="!isShow" class="form-group form-group-sm">
													<label class="col-sm-2 control-label" for="formGroupInputSmall">创建时间</label>
													<div class="col-sm-6">
														<input class="form-control" type="text" id="formGroupInputSmall" placeholder="创建时间" v-model="gun.createTime">
													</div>
												</div>
												<div v-show="!isShow" class="form-group form-group-sm">
													<label class="col-sm-2 control-label" for="formGroupInputSmall">更新时间</label>
													<div class="col-sm-6">
														<input class="form-control" type="text" id="formGroupInputSmall" placeholder="更新时间"  v-model="gun.updateTime">
													</div>
												</div>
											</form>

										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
											<button v-show="isShow" type="button" class="btn btn-primary" @click="updateGun">确认</button>
										</div>
									</div>
								</div>
							</div>
						</form>	
						</div>
				<!-- Modal -->
  </div>
</template>

<script>
import { formatDate } from "../../common/js/formatDate.js";
import qs from 'qs';
export default {
  name: "GunList",
  data() {
    return {
      gunList: [],
      filterInput: "",
      gun: "",
			headlineGun: "",
			isShow:false	
    };
  },

  methods: {
    //查询枪支列表
    getGunLists() {
      this.$axios.get("/gun/readGunList").then(response => {
        //console.log(response.data);
        this.gunList = response.data.extend.pageInfo.list;
      });
    },
    //进行模糊查询
    filterBy(gunList, value) {
      return gunList.filter(function(guns) {
        return guns.gunId.match(value);
      });
    },
    //查看枪支详情
    detailsGun(id) {
			this.isShow=false;
      this.$axios.get("/gun/readGun?gunId=" + id).then(response => {
        //console.log(response.data.extend.getGun);
        this.gun = response.data.extend.getGun;
        this.headlineGun = "枪支详细信息";
      });
    },
    //查看枪支详情,进行修改
    updateGunS(id) {
			this.isShow=true;
      this.$axios.get("/gun/readGun?gunId=" + id).then(response => {
        //console.log(response.data.extend.getGun);
        this.gun = response.data.extend.getGun;
        this.headlineGun = "修改枪支信息";
      });
    },
    //修改枪支信息
    updateGun(e) {
      if (!this.gun.gunId || !this.gun.gunModel || !this.gun.gunType) {
				 alert("请添加对应的信息!");
        // console.log("请添加对应的信息!");
      } else {
				var qs=require('qs');
				let params = new URLSearchParams();
					params.append('id',this.gun.id),
					params.append('uid',this.gun.uid),
					params.append('isDel',this.gun.isDel),
          params.append('gunId', this.gun.gunId),
          params.append('gunModel', this.gun.gunModel),
          params.append('gunType', this.gun.gunType),
          params.append('bluetoothMac', this.gun.bluetoothMac),
          params.append('warehouseId', this.gun.warehouseId),
          params.append('warehouseName', this.gun.warehouseName),
					params.append('version', this.gun.version)

				 this.$axios.put("/gun/updateGun",params).then(response => {
					 if(response.data.status=="1000"){
							$("#exampleModal").modal("hide");
							this.getGunLists();
						 	alert(response.data.errorMessage);
					 }
				}).catch((error) => {
            console.log('error', error);
            return error;
        });
      	e.preventDefault();
      }
      e.preventDefault(); 
		},
		//删除枪支信息
		deleteGun(id){
			this.$axios.delete("/gun/deleteGun?gunId="+id+"&type="+1)
					.then(response=>{
						 console.log(response.data);
						 this.getGunLists();
					})
		},
		createGun(){

		}
  },
  //进入页面就进行显示
  created() {
    this.getGunLists();
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
