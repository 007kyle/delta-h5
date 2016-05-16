/**
 * delta.JS
 * @authors weizhongjian@baidu.com
 * @date    2016-04
 * @version 1.0
 */

require([
    '/assets/js/component/router/router.js'
], function(Router) {
    var pageNode = '#du-app';
    var delta = {
        init:function(){
            var that = this;
            that.router();
            that.task();
        },
        router:function(){
            var router = new Router({
                container: pageNode,
                enterTimeout: 250,
                leaveTimeout: 250
            }); 

            var home = {
                url: '/',
                className: 'home',
                render: function () {
                    return $('#tpl-home').html();
                }
            };

            // button
            var button = {
                url: '/button',
                className: 'button',
                render: function () {
                    return $('#tpl-button').html();
                }
            };

            // toast
            var toast = {
                url: '/toast',
                className: 'toast',
                render: function () {
                    return $('#tpl-toast').html();
                }
            };

            // dialog
            var dialog = {
                url: '/dialog',
                className: 'dialog',
                render: function () {
                    return $('#tpl-dialog').html();
                },
                bind: function () {

                    require([
                        '/assets/js/component/jDialog/jDialog.js'
                    ], function(jDialog) {

                        window.dialogCase1 = function(){
                            var dialog = jDialog.alert('百度钱包一个能返现金的钱包');
                            dialog.title('温馨提示')
                                .height('auto')
                                .addButton('重新加载',function(){
                                    alert('百度钱包');
                                    this.remove();
                                });
                        };

                        window.dialogCase2 = function(){
                            var dialog = jDialog.alert('一个能返现金的钱包');
                            dialog.addButton('我知道了')
                                .delButton(1)
                                .hideHeader()
                                .height('auto');
                        };

                        window.dialogCase3 = function(){
                            var dialog = jDialog.alert('百度钱包是由百度所创办是中国领先的在线支付应用和服务平台。');
                            dialog.addButton('我知道了')
                                .delButton(1)
                                .hideHeader()
                                .height('auto')
                                .getContainer().style.cssText = 'text-align:left';
                        };
                    });
                }
            };

            // toast
            var toast = {
                url: '/toast',
                className: 'toast',
                render: function () {
                    return $('#tpl-toast').html();
                },
                bind: function () {
                    require([
                        '/assets/js/component/jDialog/jDialog.js'
                    ], function(jDialog) {

                        window.toastCase1 = function(){
                            var toast = jDialog.toast('百度钱包一个能返现金的钱包');
                        };

                        window.toastCase2 = function(){
                            var toast = jDialog.toast('百度钱包是由百度所创办是中国领先的在线支付应用和服务平台。');
                        };     

                        window.toastCase3 = function(){
                            var toast = jDialog.loading('a');
                        };

                    });
                }
            };

            // list
            var list = {
                url: '/list',
                className: 'list',
                render: function () {
                    return $('#tpl-list').html();
                }
            };            

            // panel
            var panel = {
                url: '/panel',
                className: 'panel',
                render: function () {
                    return $('#tpl-panel').html();
                }
            };

            // animation
            var animation = {
                url: '/animation',
                render: function(){
                    return $('#tpl-animation').html();
                }
            };

            // flex
            var flex = {
                url: '/flex',
                className: 'flex',
                render: function () {
                    return $('#tpl-flex').html();
                }
            };

            router.push(home)
                .push(button)
                .push(dialog)
                .push(toast)
                .push(list)
                .push(panel)
                .push(animation)
                .push(flex)
                .setDefault('/')
                .init();
        },
        task:function(){
            var page = $(pageNode);
            page.on('click','[data-event="return"]',function(){
                window.history.go(-1);
            });
        }
    };
    delta.init();
});