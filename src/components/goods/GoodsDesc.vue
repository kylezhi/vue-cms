<template >
    <div class="goodsdesc-container">
        <h3>{{ info.title }}</h3>

        <hr>

        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                info: {} //图文数据
            }
        },
        created() {
            this.getGoodsDesc();
        },
        methods: {
            async getGoodsDesc() {
                const {
                    data
                } = await this.axios.get("goods/getdesc/" + this.id);
                if (data.status === 0) {
                    this.info = data.message[0];
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .goodsdesc-container {
        padding: 4px;

        h3 {
            font-size: 16px;
            color: #226aff;
            text-align: center;
            margin: 15px 0;
        }

        .content {
            img {
                width: 100%;
            }
        }
    }
</style>