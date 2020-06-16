(function (Vue, axios) {
  // 用axios.create这个方法来配置一个新的axios
  // 1. 当不同url地址发送请求可以用多个axios区别处理
  // 2. 将默认的返回数据进行处理
  const Axios = axios.create({
    // 配置公共域名部分
    baseURL: "https://apimusic.linweiqin.com/",
    // 配置请求时间
    timeout: 10000,
  });

  // 添加请求拦截器，在发送请求之前做些什么(**具体查看axios文档**)--------------------------------------------
  Axios.interceptors.request.use(
    function (config) {
      // 显示loading

      // 添加传入参数(可选)
      config.params["token"] = "web031620200608";
      config.params["key"] = "web0316";
      config.params["kewwady"] = "web03wawadwda16";

      // 返回配置信息
      return config;
    },
    function (error) {
      // 请求错误时弹框提示，或做些其他事
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器(**具体查看axios文档**)----------------------------------------------------------------
  Axios.interceptors.response.use(
    function (response) {
      // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
      // 如果只需要返回体中数据，则如下，如果需要全部，则 return response 即可

      //只获取data部分
      return response.data;
    },
    function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );

  window.Axios = Axios;
})(Vue, axios);
