/*
 * @Author: 张敏 
 * @Date: 2018-04-17 08:41:11 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-07-08 11:06:41
 */

/**
 * 工具类函数
 */
const Toolkit = (function () {
    return {
      /**
       * ajax请求
       * @param {ajax参数} options 
       */
      ajax(options) {
        let _default = {
          url: options.url,
          type: options.type || 'post',
          data: options.data || {},
          success: (res) => {
            // console.log(res);
            options.success && options.success(res);
          },
          error: (err) => {
            options.error && options.error(err);
          },
          complete: () => {
            options.complete && options.complete();
          }
        };
        if (window.location.href.indexOf('admin.nextdog.cc') > -1) {
          _default.url = 'http://admin.nextdog.cc/Projects/WuYe/index.php/home' + _default.url
        }
        if (window._global && window._global.userinfo) {
          _default.data.user_id = window._global.userinfo.user_id;
        }
        if (window._global && window._global.admininfo) {
          _default.data.admin_id = window._global.admininfo.admin_id;
        }
        if (window._global && window._global.workerinfo) {
          _default.data.worker_id = window._global.workerinfo.worker_id;
        }
        $.ajax(_default);
      },
      /**
       * 获取url参数
       * @param {参数名称} name 
       * @param {utl地址} path 
       */
      getUrlParameter(name, path = window.location.href) {
        const result = decodeURIComponent((new RegExp('[?|&]' + name + '=([^&;]+?)(&|#|;|$)').exec(path) || [undefined, ''])[1].replace(/\+/g, '%20')) || null;
        return result ? result.split('/')[0] : '';
      }
    }
  })();
  export default Toolkit