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
								<div class="panel-body">
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
											<tr>
												<td>1</td>
												<td>Steve</td>
												<td>Jobs</td>
												<td>@steve</td>
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
  </div>
</template>

<script>
export default {
  name: "GunList",
  data() {
    return {
        gunList:[],
    };
  },
  
  methods: {
    getGunLists() {
        alert("12312");
      this.$axios.get("/gun/readGunList")
          .then((response) =>{
              console.log(response.data);
              this.gunList=response.data;
          }) 
    },
  },
   created(){
    this.getGunLists();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
