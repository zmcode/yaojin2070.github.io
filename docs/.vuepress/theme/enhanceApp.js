import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import feather from 'vue-icon'
export default ({
    Vue,
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    Vue.use(BootstrapVue);
    Vue.use(feather, 'v-icon');
    Vue.prototype.$siteData = siteData
    Vue.prototype.$themeConfig = siteData.themeConfig.valineConfig
}
