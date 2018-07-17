/*
 * @Author: Zhang Min 
 * @Date: 2018-07-16 21:43:51 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-07-16 23:20:56
 */

import './index.less';
import mpLogo from '../../images/mp-logo.jpeg';
export default class HeadComponent {
    constructor() {
        this.con = $('#app-header');
        this.init();
    }
    init() {
        this.con.append(this.render(this.data()));
    }
    data() {
        return {
            mpLogo: mpLogo,
        }
    }
    render(data) {
        return `<div class="app-header">
            <a class="app-header-logo" href="/index/index.html"></a>
            <div class="app-header-info">
                <a class="mp-opr" href=""></a>
                <div class="mp-info">
                    <div class="mp-logo" style="background-image:url(${data.mpLogo})"></div>
                    <div class="mp-name">司马抄手</div>
                    <div class="mp-auth">订阅后&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;未认证</div>
                    <div class="mp-link">
                        <a class="mp-link-item" href="">账号详情</a>
                        <a class="mp-link-item" href="">认证详情</a>
                        <a class="mp-link-item" href="">功能设置</a>
                        <a class="mp-link-item" href="">退出登陆</a>                 
                    </div>
                </div>
            </div>
        </div>`;
    }
}