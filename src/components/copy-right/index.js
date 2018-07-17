/*
 * @Author: Zhang Min 
 * @Date: 2018-07-16 21:43:51 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-07-16 23:14:03
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
            mpLogo: mpLogo
        }
    }
    render(data) {
        return `<div class="app-header">
            <a class="app-header-logo" href="/index/index.html"></a>
            <div class="app-header-info">
                <a class="mp-opr" href=""></a>
                <div class="mp-info">
                    <div class="mp-logo"></div>
                    <div class="mp-name">司马抄手</div>
                    <div class="mp-auth">订阅后&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;未认证</div>
                </div>
            </div>
        </div>`;
    }
}