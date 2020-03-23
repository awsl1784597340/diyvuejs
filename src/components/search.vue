<template>
    <div>
        <form class="mui-input-group">
    <div class="mui-input-row">
        <label>name</label>
    <input type="text" class="mui-input-clear" placeholder="请输入ta的名字或昵称" v-model="keywordname" @keyup.enter="searchinfo">
    </div>
    <div class="mui-input-row">
        <label>class</label>
        <input type="text" class="mui-input-clear" placeholder="请输入ta的职介" v-model="keywordclass" @keyup.enter="searchinfo">
    </div>
    <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-primary" @click="searchinfo">查询信息</button>
        <button type="button" class="mui-btn mui-btn-danger" >查询图片</button>
    </div>
</form>

<ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="item in search2" :key="item.No">
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
                search1:[],
                search2:[],
                keywordname: '',
                keywordclass:'',
            }
        },
        created(){
            this.getservant()
        },
        methods:{
            getservant(){
                this.$http.get('servant').then(result=>{
                    if(result.body.status ===0){this.search2=this.servantname=result.body.message;Toast('加载信息成功')}
                    else{
                        Toast('加载轮播图失败')
                    }
                })
            },
            searchname(keywordname) { //根据关键字进行搜索
                    return this.servantname.filter(item => {
                        //在es6中为字符串提高了一个新方法叫String.prototype.includes(' ')
                        //如果包含返回true，否则返回false
                        //contain
                        if (item.name.includes(keywordname)||item.nickname.includes(keywordname)) {
                            return item
                        }
                    })
            },
            searchclass(keywordclass) { //根据关键字进行搜索
                    return this.search1.filter(item => {
                        //在es6中为字符串提高了一个新方法叫String.prototype.includes(' ')
                        //如果包含返回true，否则返回false
                        //contain
                        if (item.classname.includes(keywordclass)) {
                            return item
                        }
                    })
            },
            searchinfo(){
                this.search1=this.searchname(this.keywordname)
                this.search2=this.searchclass(this.keywordclass)

            }
        }
    }
</script>

<style lang="scss" scoped>
.app-container{
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x:hidden;
}
</style>