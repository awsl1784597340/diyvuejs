<template>
    <div>
        <form class="mui-input-group">
    <div class="mui-input-row">
        <label>No</label>
        <input type="text" class="mui-input-clear" placeholder="请输入ta的序号" v-model="keywordNo" @keyup.enter="postinfo">
    </div>
    <div class="mui-input-row">
        <label>name</label>
        <input type="text" class="mui-input-clear" placeholder="请输入ta的名字" v-model="keywordname" @keyup.enter="postinfo">
    </div>
    <div class="mui-input-row">
        <label>class</label>
        <input type="text" class="mui-input-clear" placeholder="请输入ta的职介" v-model="keywordclass" @keyup.enter="postinfo">
    </div>
    <div class="mui-input-row">
        <label>nickname</label>
        <input type="text" class="mui-input-clear" placeholder="请输入ta的昵称" v-model="keywordnickname" @keyup.enter="postinfo">
    </div>
    <div class="mui-input-row">
        <label>gender</label>
        <input type="text" class="mui-input-clear" placeholder="请输入ta的性别(male or female)" v-model="keywordgender" @keyup.enter="postinfo">
    </div>
    
    <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-primary" @click="postinfo">提交请求</button>
    </div>
</form>

<ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="item in servantname" :key="item.No">
        <a class="mui-navigate-right">{{item.name}}</a>
        <span class="mui-badge mui-badge-primary">{{item.classname}}</span>
    </li>
</ul>           

    </div>
</template>

<script>


import{Toast} from 'mint-ui'
    export default{
        data(){
            return {
                servantname:[],
                No: '',
                keywordNo: '',
                keywordname: '',
                keywordclass:'',
                keywordnickname: '',
                keywordgender:'',
            }
        },
        created(){
            this.getservant()
        },
        methods:{
            getservant(){
                this.$http.get('servant').then(result=>{
                    if(result.body.status ===0){this.servantname=result.body.message;Toast('加载信息成功')}
                    else{
                        Toast('加载轮播图失败')
                    }
                })
            },
            postinfo(){
                 this.$http.post('post',{No:this.keywordNo,name:this.keywordname,class:this.keywordclass,nickname:this.keywordnickname,gender:this.keywordgender},
                 {emulateJSON:true}).then(function(result){
                     if(result.body.status===0)
                     {setTimeout(function(){alert('发送请求成功')},4000),this.getservant()}
                     else
                     {setTimeout(function(){alert('数据格式有误')},4000)}
                     },function(result){setTimeout(function(){alert('请求失败，稍后再试')},4000)}
                 )}
    }}
</script>

<style lang="scss" scoped>
.app-container{
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x:hidden;
}
</style>