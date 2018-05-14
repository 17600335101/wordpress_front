<template>
  <el-container>
    <el-header class='header'>
      <el-dropdown style="float:left">
        <span class="el-dropdown-link">
         <i class="el-icon-info el-icon--right" style="font-size:20px"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>关于WordPress</el-dropdown-item>
          <el-dropdown-item>WordPress.org</el-dropdown-item>
          <el-dropdown-item>文档</el-dropdown-item>
          <el-dropdown-item>支持论坛</el-dropdown-item>
          <el-dropdown-item>反馈</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown style="float:left">
        <span class="el-dropdown-link">
         <i class="el-icon--right" style="font-size:20px">网站</i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看站点</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
       <el-dropdown style="float:left">
        <span class="el-dropdown-link">
         <i class="el-icon-circle-plus el-icon--right" style="font-size:20px">新建</i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>文章</el-dropdown-item>
          <el-dropdown-item>媒体</el-dropdown-item>
          <el-dropdown-item>页面</el-dropdown-item>
          <el-dropdown-item>用户</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container class='con'>
      <el-aside width="200px">
        <el-col :span="24">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>仪表盘</span>
              </template>
              <el-menu-item index="1-1">首页</el-menu-item>
              <el-menu-item index="1-2">更新</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>文章</span>
              </template>
              <el-menu-item index="1-1">写文章</el-menu-item>
              <el-menu-item index="1-2">分类目录</el-menu-item>
              <el-menu-item index="1-3">标签</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>页面</span>
              </template>
              <el-menu-item index="1-1">所有页面</el-menu-item>
              <el-menu-item index="1-2">新建页面</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户</span>
              </template>
              <el-menu-item index="1-1">所有用户</el-menu-item>
              <el-menu-item index="1-2">添加用户</el-menu-item>
              <el-menu-item index="1-3">我的个人资料</el-menu-item>
            </el-submenu>
             <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>设置</span>
              </template>
              <el-menu-item index="1-1">常规</el-menu-item>
              <el-menu-item index="1-2">撰写</el-menu-item>
              <el-menu-item index="1-3">阅读</el-menu-item>
              <el-menu-item index="1-4">讨论</el-menu-item>
              <el-menu-item index="1-5">媒体</el-menu-item>
              <el-menu-item index="1-6">固定链接</el-menu-item>
              <el-menu-item index="1-7">隐私</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>

</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        isCollapse: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<style scoped>
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .header {
    height: 10vh;
  }
  .el-dropdown{
    padding:0 10px;
  }

  .con {
    height: 90vh;
  }

  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
    line-height: 200px;
    overflow: hidden;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>