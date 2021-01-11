<template>
  <div v-if="role == 'admin' || role == 'user'" class="row">
    <header
      class="col-12 sticky-top bg-white d-flex justify-content-between py-4 shadow"
    >
      <Navbar />
      <h2 class="font-weight-bold">History</h2>
      <h2></h2>
    </header>
    <main class="col-12 mt-3">
      <div v-if="role == 'admin'" class="row mt-3">
        <div class="col-12 col-md-4">
          <img src="../assets/history/Card.svg" alt="" class="card-img-top" />
        </div>
        <div class="col-12 col-md-4">
          <img src="../assets/history/Card 2.svg" alt="" class="card-img-top" />
        </div>
        <div class="col-12 col-md-4">
          <img src="../assets/history/Card 3.svg" alt="" class="card-img-top" />
        </div>
      </div>
      <div v-if="role == 'admin'" class="row mt-3">
        <div class="col-12">
          <img src="../assets/history/Chart.svg" alt="" class="card-img-top" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col table-responsive card shadow">
          <h2 class="mt-3 ml-3">Recent Order</h2>
          <table class="table text-center">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Cashier</th>
                <th scope="col">Orders</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="history in histories" :key="history.id">
                <th scope="row">{{history.id}}</th>
                <td>{{history.user}}</td>
                <td>{{history.kasir}}</td>
                <td>
                  <div v-for="n in history.nama" :key="n" >
                    {{n}}
                  </div>
                </td>
                <td>Rp.{{history.total}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import axios from "axios";
import router from '../routes';

export default {
  name: "history",
  components: {
    Navbar,
  },
  data(){
    return{
      histories:[],
      cacheKey: 'token',
      roleKey: 'role',
      role: '',
    }
  },
  methods:{
    loadHistory(){
      axios.get(process.env.VUE_APP_HISTORY, {
        headers: {
          authtoken: localStorage.getItem(this.cacheKey)
        }
      })
      .then((res) => {
        if(res.data.result.name === 'TokenExpiredError'){
          alert('Token Expired! Silahkan Login Lagi');
          router.push({ path: '/login' });
        }else
        if(res.data.result[0].msg === 'Login dulu!'){
          alert('Login Dulu!');
          router.push({ path: '/login' });
        }else
        if(res.data.result[0].msg === 'Not Found'){
          alert('404 | Not Found');
          router.push('404');
        }else{
          this.histories = res.data.result;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
  mounted(){
    this.loadHistory()
    this.role = localStorage.getItem(this.roleKey)
  }
};
</script>
