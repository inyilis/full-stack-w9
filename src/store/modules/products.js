import axios from "axios";

const state = {
    products: null
}

const getters = {
    getProducts: (state) => {
        return state.products
    }
}

const actions = {
    get({commit}) {
      axios.get(process.env.VUE_APP_PRODUCT, {
        headers: {
          authtoken: localStorage.getItem('token')
        }
      })
      .then((res) => {
          commit('setProduct', res.data.result)
        // if(res.data.result.name === 'TokenExpiredError'){
        //   alert('Token Expired! Silahkan Login Lagi');
        //   router.push({ path: '/' });
        // }else
        // if(res.data.result[0].msg === 'Login dulu!'){
        //   alert('Login Dulu!');
        //   router.push({ path: '/' });
        // }else
        // if(res.data.result[0].msg === 'Not Found'){
        //   alert('404 | Not Found');
        //   router.push('404');
        // }else{
        //   this.products = res.data.result;
        // }
      })
      .catch((err) => {
        console.log(err);
      });
    }
}

const mutations = {
    setProduct(state, product){
        state.products = product
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}