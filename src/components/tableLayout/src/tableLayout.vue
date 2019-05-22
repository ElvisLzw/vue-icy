<template>
  <div class="table-layout">
    <header class="layout-search-area">
      <slot name="searchArea">
        <!-- 搜索部分 -->
      </slot>
    </header>
    <main :class="[isMobile ? '' : 'layout-table-area']">
      <slot name="tableArea">
        <!-- 翻页及table部分 -->
      </slot>
    </main>
    <slot></slot>
  </div>
</template>

<script>
/*
<table-layout>
  <template slot="searchArea">
    <!-- 搜索部分 -->
    </template>
  <template slot="tableArea">
    <!-- 主体部分  -->
  </template>
</table-layout>
*/
  export default {
    name: 'TableLayout',
    props: {
      isMobile: {
        default: false
      },
    },
  }
</script>


<style lang="less" scoped>
// 基础表格配置样式
.table-layout{
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  .layout-search-area{
    display: inline-block;
    /deep/ .el-card{
      overflow: visible;
    }
    /deep/ .el-form-item{
      margin-bottom: 0;
    }
  }
  .layout-table-area{
    flex: 1;
    display: flex;
    flex-direction: column;
    /deep/ .el-table{
      height: 100%; // 需要加上一个高度，不然无法正确显示滚动条
      display: flex;
      flex-direction: column;
      .el-table__header-wrapper{
        .gutter{ 
          // 若出现横向滚动条 需要在table的title上增加15px的竖直滚动条的占位
          width: 15px !important;
          display: block !important;
        }
      }
      .el-table__body-wrapper{
        overflow: auto;
        flex: 1;
      }
    }
  }
}
</style>
<style lang="less" scoped>
// 页面input搜索部分配置样式
.table-layout{
  /deep/ .el-form-item--mini.el-form-item, /deep/ .el-form-item--small.el-form-item {
    margin-bottom: 0px;
  }
  /deep/ .el-form-item__label{
    font-size: 10px;
  }
  /deep/ .el-input--mini .el-input__inner{
    height: 22px !important;
    line-height: 22px !important;
  }
  /deep/ .el-button--mini{
    padding: 4px 15px;
  }
  /deep/ .el-button--text {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
