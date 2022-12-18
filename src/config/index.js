/**
 * 环境配置封装
 */

const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/e4fa4dc7d738fa08450958ef95b3ba4c/api'
    },
    test:{
        baseApi:'test.futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/e4fa4dc7d738fa08450958ef95b3ba4c/api'
    },
    prod:{
        baseApi:'futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/e4fa4dc7d738fa08450958ef95b3ba4c/api'
    }
}
export default {
    env,
    mock:false,
    namespace:'manager',
    ...EnvConfig[env]
}