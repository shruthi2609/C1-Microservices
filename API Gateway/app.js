const express=require("express")
const app=express()
const config=require("./config")
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use("/userService",createProxyMiddleware({
    target:config.userService_URL,
    changeOrigin:true,
    pathRewrite:{
        '^/userService':'/'
    }
}))

app.use("/adminService",createProxyMiddleware({
    target:config.adminService_URL,
    changeOrigin:true,
    pathRewrite:{
        '^/adminService':'/'
    }
}))


module.exports=app