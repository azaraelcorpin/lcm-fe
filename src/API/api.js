import Vue from 'vue';
import {globalStore} from '@/main.js'

export default{

  async getLeaveTypes(parameters) {
    var url = `${process.env.VUE_APP_LCM_API_URL}/leaveType/search`
    const config = {
      headers: {
        Authorization: globalStore.userEmail,
      }
    }
    const body = {
      code: parameters.code,
      description: parameters.description,
      pageNo:parameters.pageNo??0,
      pageSize:parameters.pageSize??0
    }
    try {
      const response = await Vue.axios.post(url, body, config);
      console.log(response);
      if (response && response.data && response.status == 200) {
        return response.data;
      } else if (response && response.data && response.data.message) {
        return { error: response.data.message };
      } else {
        return { error: "Sorry. Error query leave type." };
      }
    } catch (error) {
      console.log(error);
      return { error: error.message }
    }
  },
  async createLeaveType(parameters) {
    var url = `${process.env.VUE_APP_LCM_API_URL}/leaveType/create`
    const config = {
      headers: {
        Authorization: globalStore.userEmail,
      }
    }
    const body = {
      code: parameters.code,
      description: parameters.description,
      numberOfDays:parameters.numberOfDays??0
    }
    try {
      const response = await Vue.axios.post(url, body, config);
      console.log(response);
      if (response && response.data && response.status == 201) {
        return response.data;
      } else if (response && response.data && response.data.message) {
        return { error: response.data.message };
      } else {
        return { error: "Sorry. Error query leave type." };
      }
    } catch (error) {
      console.log(error.response);
      return { error: error.response.data.message }
    }
  },

  async updateLeaveType(parameters) {
    var url = `${process.env.VUE_APP_LCM_API_URL}/leaveType/update`
    const config = {
      headers: {
        Authorization: globalStore.userEmail,
      }
    }
    const body = {
      id:parameters.id,
      code: parameters.code,
      description: parameters.description,
      numberOfDays:parameters.numberOfDays??0
    }
    try {
      const response = await Vue.axios.post(url, body, config);
      console.log(response);
      if (response && response.data && response.status == 200) {
        return response.data;
      } else if (response && response.data && response.data.message) {
        return { error: response.data.message };
      } else {
        return { error: "Sorry. Error query leave type." };
      }
    } catch (error) {
      console.log(error.response);
      return { error: error.response.data.message }
    }
  },
  async deleteLeaveType(parameters) {
    var url = `${process.env.VUE_APP_LCM_API_URL}/leaveType/delete`
    const config = {
      headers: {
        Authorization: globalStore.userEmail,
      }
    }
    const body = {
      id:parameters.id,
    }
    try {
      const response = await Vue.axios.post(url, body, config);
      console.log(response);
      if (response && response.data && response.status == 200) {
        return response.data;
      } else if (response && response.data && response.data.message) {
        return { error: response.data.message };
      } else {
        return { error: "Sorry. Error query leave type." };
      }
    } catch (error) {
      console.log(error.response);
      return { error: error.response.data.message }
    }
  },
}