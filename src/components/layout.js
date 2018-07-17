/*
 * @Author: Zhang Min 
 * @Date: 2018-07-16 22:01:56 
 * @Last Modified by: Zhang Min
 * @Last Modified time: 2018-07-17 08:39:12
 */

import HeadComponent from './top-header/index';
import MenuComponent from './sider-menu/index';
export default class layout {
    constructor() {
        new HeadComponent();
        new MenuComponent();
    }
}