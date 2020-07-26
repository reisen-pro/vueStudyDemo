import {request} from "./request";

export function getHomeMultidataBanner() {
  return request({
    url: '/home/multidata/banner'
  })
}

export function getHomeMultidataRecommend() {
  return request({
    url:'/home/multidata/recommend'
  })
}
