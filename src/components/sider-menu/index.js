/*
 * @Author: Zhang Min 
 * @Date: 2018-07-16 21:43:51 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-07-17 21:04:41
 */

import './index.less';
export default class MenuComponent {
    constructor() {
        this.con = $('#app-menu');
        this.init();
    }
    init() {
        this.con.append(this.render(this.data()));
    }
    data() {
        return {
            menus: [
                {
                    name: '首页',
                    icon: 'https://mp.weixin.qq.com/zh_CN/htmledition/modules/weui-desktopSkin/svg/default/menu_home_current3e4a33.svg'
                },
                {
                    name: '功能',
                    icon: 'https://mp.weixin.qq.com/mpres/htmledition/weui-desktopSkin/svg/default/menu_function3e4a19.svg',
                    child: [
                        {
                            name: '自动回复',
                            new: false,
                            href: ''
                        },
                        {
                            name: '自定义菜单',
                            new: false,
                            href: ''
                        },
                        {
                            name: '留言管理',
                            new: true,
                            href: ''
                        },
                        {
                            name: '投票管理',
                            href: ''
                        },
                        {
                            name: '页面模版',
                            new: true,
                            href: ''
                        },
                        {
                            name: '赞赏功能',
                            new: true,
                            href: ''
                        },
                        {
                            name: '原创管理',
                            new: true,
                            href: ''
                        }
                    ]
                },
                {
                    name: '小程序',
                    icon: 'https://mp.weixin.qq.com/mpres/htmledition/weui-desktopSkin/svg/default/menu_wxopen3e4a19.svg',
                    child: [
                        {
                            name: '小程序管理',
                            new: false,
                            href: ''
                        },
                        {
                            name: '展示场景',
                            new: false,
                            href: ''
                        }
                    ]
                },
                {
                    name: '管理',
                    icon: 'https://mp.weixin.qq.com/mpres/htmledition/weui-desktopSkin/svg/default/menu_management3e4a19.svg',
                    child: [
                        {
                            name: '消息管理',
                            new: false,
                            href: ''
                        },
                        {
                            name: '用户管理',
                            new: false,
                            href: ''
                        },
                        {
                            name: '素材管理',
                            new: true,
                            href: ''
                        }
                    ]
                },
                {
                    name: '推广',
                    icon: 'https://mp.weixin.qq.com/mpres/htmledition/weui-desktopSkin/svg/default/menu_ad3e4a19.svg',
                    child: [
                        {
                            name: '广告主',
                            new: false,
                            href: ''
                        },
                        {
                            name: '流量主',
                            new: false,
                            href: ''
                        }
                    ]
                },
                {
                    name: '统计',
                    icon: 'https://mp.weixin.qq.com/mpres/htmledition/weui-desktopSkin/svg/default/menu_statistics3e4a19.svg',
                    child: [
                        {
                            name: '用户分析',
                            new: false,
                            href: ''
                        },
                        {
                            name: '图文分析',
                            new: false,
                            href: ''
                        },
                        {
                            name: '菜单分析',
                            new: true,
                            href: ''
                        },
                        {
                            name: '消息分析',
                            href: ''
                        },
                        {
                            name: '接口分析',
                            new: true,
                            href: ''
                        },
                        {
                            name: '网页分析',
                            new: true,
                            href: ''
                        }
                    ]
                },
                {
                    name: '设置',
                    icon: 'https://mp.weixin.qq.com/mpres/htmledition/weui-desktopSkin/svg/default/menu_setup3e4a19.svg',
                    child: [
                        {
                            name: '公众号设置',
                            new: false,
                            href: ''
                        },
                        {
                            name: '人员设置',
                            new: false,
                            href: ''
                        },
                        {
                            name: '微信认证',
                            new: true,
                            href: ''
                        },
                        {
                            name: '安全中心',
                            href: ''
                        },
                        {
                            name: '违规记录',
                            new: true,
                            href: ''
                        }
                    ]
                },
                {
                    name: '开发',
                    icon: 'https://mp.weixin.qq.com/mpres/htmledition/weui-desktopSkin/svg/default/menu_developer3e4a19.svg',
                    child: [
                        {
                            name: '基本配置',
                            new: false,
                            href: ''
                        },
                        {
                            name: '开发者工具',
                            new: false,
                            href: ''
                        },
                        {
                            name: '运维中心',
                            new: true,
                            href: ''
                        },
                        {
                            name: '接口权限',
                            href: ''
                        }
                    ]
                }
            ]
        }
    }
    render(data) {
        const menus = data.menus;
        let htmlStr = '<div class="app-menu">';
        for (let index = 0; index < menus.length; index++) {
            const paraent = menus[index];
            if (index === 0) {
                htmlStr += `<div class="app-menu-group">
                <a class="app-menu-title active" href="${paraent.href}"><span style="background-image:url('${paraent.icon}')"></span>${paraent.name}</a>
            `;
            } else {
                htmlStr += `<div class="app-menu-group">
                <a class="app-menu-title" href="${paraent.href}"><span style="background-image:url('${paraent.icon}')"></span>${paraent.name}</a>
            `;
            }
            if (paraent.child && paraent.child.length) {
                for (let index = 0; index < paraent.child.length; index++) {
                    const child = paraent.child[index];
                    htmlStr += `<a class="app-menu-name" href="${child.href}">
                        ${child.name}`;
                    if (child.new) {
                        htmlStr += '<span class="app-icon-new"></span>';
                    }
                    htmlStr += `</a>`;
                }
            }
            htmlStr += '<div class="app-menu-line"></div></div>';
        }
        htmlStr += '</div>';
        return htmlStr;
    }
}