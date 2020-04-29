// pages/demo/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        var wx_poster = this.selectComponent('#wx_poster')
        wx_poster.inits(function (){ // 初始化完成
            console.log('初始化完成')
            wx_poster.setWH({
                width: 120,
                height: 444
            })
            wx_poster.addImg('https://image11.m1905.cn/uploadfile/2020/0426/20200426085242829107.jpg')
            wx_poster.addImg('https://www.baidu.com/img/baidu_jgylogo2.gif',{
                width: 120,
                height: 220,
                y: '44',
                x: 44,
            })
            wx_poster.setFont('标题：感谢关注',{
                // color: '#000',
                y: 222,
                x: 66
            })
            wx_poster.draw(function () {
                // 单独绘制小程序码
                wx_poster.wxCode('https://res.wx.qq.com/wxdoc/dist/assets/img/mydev-qrcode-new.669a7d88.jpg', {
                    width: 120,
                    height: 120,
                })
                // 
            })
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    img_err(msg) {
        console.log(msg.detail); // 获取第几张错误。
    }
})