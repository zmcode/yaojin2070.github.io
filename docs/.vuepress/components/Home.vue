<template>
    <div class="PageWrap">
      <div class="WrapLeft">
            <h2>遥近个人博客</h2>
      </div>
        <div class="WrapRight">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        mounted() {
            console.log(this.$page)
            console.log(this.$site)
        }
    }
</script>

<style lang="less" scoped>
    .PageWrap{
        position: relative;
        width: 100%;
        height: 100%;
        .WrapLeft{

            float: left;
            width: 50%;
            height: 100%;
            background-color: #517df0;
        }
        .WrapRight {
            float: left;
            width: 50%;
            height: 100%;
            background-color: #eee;
        }
    }

</style>
