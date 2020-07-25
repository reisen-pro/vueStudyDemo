export default {
  // aUpdateInfo(context,payload) {
  //   setTimeout(() => {
  //     context.commit('updateInfo')
  //     console.log(payload.message);
  //     payload.success();
  //   },3000)
  // }
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload);
        resolve('123456')
      }, 3000)
    })
  }
}
