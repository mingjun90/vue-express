<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button @click.native="showDialog" >Button Event</el-button>
    <el-button @click.native="requestApi" >HTTP Request</el-button>
    <div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="Date"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="Name"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Address">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World !',
      tableData: [{
        date: '2016-05-03',
        name: 'Tiger Wang',
        address: '1516 Jingshajiang Road, Shanghai'
      }]
    }
  },
    methods: {
        showDialog: function() {
            this.msg = 'try button';
        },
        requestApi() {
          this.$http.get('/test').then(response => {

            // get body data
            this.tableData = response.body.tabledata;

          }, response => {
            // error callback
          });
        }
    }
}
</script>
