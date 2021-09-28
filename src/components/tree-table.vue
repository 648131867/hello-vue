<template>
  <div class="tree-table">
    <div class="tree-head">
      <table>
        <tr>
          <td class="td1">职位名称</td>
          <td class="td2">负责人</td>
          <td class="td3" @click="isDesc=!isDesc">
            创建时间
            <div class="arrow">
              <span class="up-arrow" :class="{'sort':isDesc}"></span>
              <span class="down-arrow" :class="{'sort':!isDesc}"></span>
            </div>
          </td>
          <td class="td4">工作经验</td>
          <td class="td5">发布时间</td>
          <td class="td6">操作</td>
        </tr>
      </table>
    </div>
    <div id="scrollWrap" class="tree-wrap">
      <div class="tree-body">
        <table v-if='treeDataSource.length>0'>
          <tbody>
          <tr>
            <td>
              <tree-item
                v-for="(model,i) in treeDataSource"
                :key="'root_node_'+i"
                :root="0"
                :num="i"
                @actionFunc="actionFunc"
                @deleteFunc="deleteFunc"
                :nodes="treeDataSource.length"
                :trees.sync="treeDataSource"
                :model.sync="model">
              </tree-item>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
