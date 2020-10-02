// import { param } from '@/utils'
import request from '@/utils/request'
import axios from 'axios'

export function postLogin(data) {
  const { password, username } = data
  return axios({
    url: 'auth/login',
    method: 'POST',
    data: {
      username, password
    }
  })
}

export function getInfoByToken(token) {
  return axios({
    url: 'services/trafficiuaa/api/user',
    headers: {
      'Authorization': token
    }
  })
}

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
