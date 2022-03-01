/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/06/11/三分/index.html","bcbd06c9371ce1c8550b539e91780ed4"],["/2020/06/12/Bellman-Ford与SPFA/index.html","c4e0439fb470e897bd94fc29a94c6e25"],["/2020/06/12/c++学生信息管理系统/index.html","b140754e37409f9601bc0b41e67a6ca6"],["/2020/06/12/dijstra/index.html","698d9ad0e605ea174683186ef61b6fd5"],["/2020/06/12/平衡二叉树基本操作/index.html","2e9d67fdfd61685dcd0e18dc6694ce58"],["/2020/06/12/目录树/index.html","01e1471c3e721871fe9602592b6b158e"],["/2020/06/12/算概率/index.html","6458692936c240b83a2ae49a7f1643ba"],["/2020/06/25/合并回文子串/index.html","149c49e7ca4b5e42ba4e7b65a110e0e6"],["/2020/06/25/合并回文子串/合并回文子串.jpg","3ba39e16306ff92cc802abe2c92ebae9"],["/2020/07/27/Mybatis/640.png","07bb735118f354938b7f0220ff3a2a81"],["/2020/07/27/Mybatis/index.html","8790bcbd806c344ffee178b0edd52b62"],["/2020/07/28/CRUD操作及配置解析/Mybatis执行过程流程图.png","2a73e3c8fe8c0a1c2b6af755ba1a250c"],["/2020/07/28/CRUD操作及配置解析/index.html","4141aae76f461c0b9b3425e2372997b9"],["/2020/07/28/CRUD操作及配置解析/sqlSession.png","6b2fa24c4f7e7c9e4d2706b91cadfc2b"],["/2020/07/30/ResultMap及分页/PageHelper.jpg","8cb24685ba4eccd4da4ee44af7337e8e"],["/2020/07/30/ResultMap及分页/index.html","30896216d6cf19db6f9f8bf51b5e90b3"],["/2020/07/30/ResultMap及分页/数据库.jpg","9365d01e24cff5826bff70999290b2b4"],["/2020/08/03/使用注解开发Mybatis/Debug.jpg","2d5d4a4219166d7238dabc898deee64c"],["/2020/08/03/使用注解开发Mybatis/Mybatis详细执行流程.jpg","f538e6262ab3df3d8b414cf6048d22d5"],["/2020/08/03/使用注解开发Mybatis/index.html","a5eb593fb96020905205b12564491dad"],["/2020/08/03/使用注解开发Mybatis/jvm动态代理机制.jpg","89d4c8a08c4f0dbef620f46b34d9d3d3"],["/2020/08/04/一对多和多对一的处理/index.html","c1d0dd67a9d287c1bddd7d56d9137941"],["/2020/08/04/一对多和多对一的处理/数据库设计_多对一.jpg","9bec1e1fcadd5b4c70f52652e2c17f02"],["/2020/08/06/动态SQL/index.html","cd711d66be9f9cc1bf5b3cbd14526f2e"],["/2020/08/06/动态SQL/创建.png","d4960bc46bf82482605f2b34f0036369"],["/2020/08/08/缓存/EnCache.jpg","7ff090f3079e10c1394c70cbef7bc75b"],["/2020/08/08/缓存/index.html","b6e0721f292d33ce831bdc484b93e9a7"],["/2020/08/08/缓存/结果分析.jpg","e15b824ad6b3562e69e6782665e84b16"],["/2020/08/08/缓存/缓存原理图.jpg","423c10d97c698260e2e2ece5fa4607f3"],["/2020/08/11/概述及IOC理论推导/IOC本质.jpg","08f15853c50a23a848de70995787424b"],["/2020/08/11/概述及IOC理论推导/IOC本质2.jpg","27a214f40431be64616c3b55f584ed16"],["/2020/08/11/概述及IOC理论推导/Spring.jpg","7236476cf03df729159bb98a2519eac4"],["/2020/08/11/概述及IOC理论推导/index.html","efe1e63e29a5b3addddd5cb651969591"],["/2020/08/11/概述及IOC理论推导/扩展.jpg","f3a37b5eb449feeb7d50dc8e9549f907"],["/2020/08/11/概述及IOC理论推导/组成.jpg","02c3aef8b86ae4bccd455d03ea54d07e"],["/2020/08/11/概述及IOC理论推导/组成2.jpg","c2816e167aa4c3d860642908ada961a9"],["/2020/08/12/快速上手Spring/index.html","37f23744b7f8ba0e659cc69198c22022"],["/2020/08/13/斐波那契/index.html","f66c4ee215166836a4c521ada13bca58"],["/2020/08/13/斐波那契/几何.jpg","c52c31d93985182faedd49dbca4e3f4a"],["/2020/08/13/斐波那契/基本形式.jpg","27cbcd30ab139bd28abe152fd5764ed6"],["/2020/08/14/逆元/index.html","127f99f69398399b0fae50d1f1e34c7e"],["/2020/08/15/依赖注入（DI）/bean的作用域.png","86a9854b02a08e5c017c25e5ea5f07e2"],["/2020/08/15/依赖注入（DI）/index.html","120abca3412b5d96bccd40e9361774c9"],["/2020/08/15/依赖注入（DI）/结果测试.jpg","d2dad8470590a40e839d3acc4d59c23c"],["/2020/08/16/Bash游戏/Bash游戏.png","fc6cdbb16721496c96c9e5e97a151c06"],["/2020/08/16/Bash游戏/index.html","2728743ffcf4366839663152e23c454b"],["/2020/08/16/博弈论/index.html","7f284253b60c8de0b6fba213384e060a"],["/2020/08/16/自动装配/index.html","186823ad5525fa451fdc6142fe61aac1"],["/2020/08/17/使用注解开发Spring/index.html","2536eee1d53f51a58b835b30907abce6"],["/2020/08/18/Nim游戏/Nim游戏.png","a42dce15379ada984f867d7f20a5b1d8"],["/2020/08/18/Nim游戏/index.html","5d8ce13391bf16e777db998e1d9e79e1"],["/2020/08/18/静态-动态代理/Aop.png","3e6c45a1e1c220bf080914cfdcd3e90e"],["/2020/08/18/静态-动态代理/InvocationHandler.png","fb95e69d35c5b3e5d428f373f2dc75e4"],["/2020/08/18/静态-动态代理/Proxy.png","d1f5694c3189ceaeef80a5423e389e71"],["/2020/08/18/静态-动态代理/Proxy2.png","ffee8c198c39ca40b193c67318be925f"],["/2020/08/18/静态-动态代理/Proxy3.png","9242fcb288a77f136ed3991c7f1ffa66"],["/2020/08/18/静态-动态代理/index.html","feab42cb0f0e7a24fba345fb34d2b304"],["/2020/08/18/静态-动态代理/代理模式.png","f1f2dda1b5dfffa3782be612b982fa96"],["/2020/08/19/AOP/5advice.png","272fb891910427507800eea25f1521b3"],["/2020/08/19/AOP/SpringAOP.png","ce58ccba009d39828f6c5ded9540e34c"],["/2020/08/19/AOP/ans1.png","93513afe04d5caee91c3892dd5bc6866"],["/2020/08/19/AOP/ans2.png","fa713bb61d28db98ced5d256dee3d338"],["/2020/08/19/AOP/ans3.png","8606cdb9aee2e3ec8a442361aba057cf"],["/2020/08/19/AOP/index.html","a4fabf17dd6695721a9563ef04c02cf2"],["/2020/08/19/AOP/业务逻辑.png","1194157e4b4eb07fb973307d905808a1"],["/2020/08/20/B君的游戏/B君的游戏.png","7b3d0ee8017081211ccd72fb29362129"],["/2020/08/20/B君的游戏/index.html","40512897193a533156dbbbcb83062742"],["/2020/08/20/整合Mybatis/DataSource.png","be344a68609753b7200df6cec7cb825c"],["/2020/08/20/整合Mybatis/DriverManagerClassName.png","8cd5540ba6b56030b78d4b95bc7b01d0"],["/2020/08/20/整合Mybatis/DriverManagerDataSource.png","5500a317ba7547b5fabd50f8e7324d3a"],["/2020/08/20/整合Mybatis/Location.png","c819c08945b17f37c11f3d76fae6c4e2"],["/2020/08/20/整合Mybatis/SqlSessionFactoryBean.png","3ed9b0b4ed6910c625a27134ccc92d7b"],["/2020/08/20/整合Mybatis/SqlSessionTemplate.png","1a16f7b3bafa7471d8b121315bd94ab6"],["/2020/08/20/整合Mybatis/index.html","5c4d6c3d4784a58d7e82fb7f3316cf0e"],["/2020/08/20/整合Mybatis/mybatis-spring.png","4ae8eb5842764adc5ba7ee0be813356b"],["/2020/08/20/整合Mybatis/整合2.png","35d0b9465b8fd6178756bbdd6a357078"],["/2020/08/21/声明式事务/index.html","172b64aac83ac8e7a58520498e69be5b"],["/2020/08/23/什么是SpringMVC/DispatcherServlet.png","34f6ec89b3237e108c994ef15434eb8b"],["/2020/08/23/什么是SpringMVC/MVC.png","9c3e23664ddbeb7615d8d19e7fa94b59"],["/2020/08/23/什么是SpringMVC/Model1.png","0a2eec9aed3649d30bc2e95050bb9b64"],["/2020/08/23/什么是SpringMVC/Model2.png","9fedbba8dd4498ad5432e9f2efe5cd56"],["/2020/08/23/什么是SpringMVC/SpringMVC.png","137d3323c290fd213a996f1a13118a2c"],["/2020/08/23/什么是SpringMVC/SpringMVC原理.png","83c7dc99e9509885a2248bf05d145a26"],["/2020/08/23/什么是SpringMVC/SpringMVC原理2.png","31010fa6d284257848b760998baa260d"],["/2020/08/23/什么是SpringMVC/index.html","bee5c48078bc98f2a8549c1da42928a6"],["/2020/08/25/第一个MVC程序/404.png","14454b73fb9962223c989079f9271103"],["/2020/08/25/第一个MVC程序/index.html","1a25a66afa9c02a82f3ca5e9744fa2fd"],["/2020/08/25/第一个MVC程序/原理.png","fe81a93580523a4e2f1fa22c61636a07"],["/2020/08/25/第一个MVC程序/测试1.png","885c52aaf671bde9f32bbe5cd456a894"],["/2020/08/25/第一个MVC程序/测试2.png","b82c12469b1244d2294fb099a9c039de"],["/2020/08/27/RestFul和控制器/index.html","eff283b742518607ebe718af7f9b25b5"],["/2020/08/27/RestFul和控制器/测试1.png","1bd41381d9dd31f4bddd3a287e2375de"],["/2020/08/27/RestFul和控制器/测试2.png","978ddde7ee9dbe21cc8a8c2dd68651bd"],["/2020/08/27/RestFul和控制器/测试3.png","43bfa81e06509cf2900e50422a32e4ff"],["/2020/08/27/RestFul和控制器/测试4.png","1aaeb713bb6cec97756d83a43451c288"],["/2020/08/27/RestFul和控制器/测试5.png","c5996835b8cb8785d693842729ef877f"],["/2020/08/27/RestFul和控制器/测试6.png","da0777cef7f38c306856199bb84d0609"],["/2020/08/27/RestFul和控制器/测试7.png","564b52f205bce14d7a60612c0ac48a1b"],["/2020/08/28/Json交互处理/index.html","ea077c45c53bd2841abfc56e99b4c1db"],["/2020/08/28/Json交互处理/测试1.png","d0a6764acb0f8a32000cf7855b60e5f9"],["/2020/08/28/Json交互处理/测试2-1.png","3224f023f2cb51b7ca9d33297cf61f30"],["/2020/08/28/Json交互处理/测试2.png","8ff34a07aaec3eb242b9abc3d3a25e87"],["/2020/08/28/Json交互处理/测试3-1.png","5e14b5d53a7662f97658adb7c5fd6a12"],["/2020/08/28/Json交互处理/测试3.png","cc9a18a9793fbbdf8327d963cef8a693"],["/2020/08/28/Json交互处理/测试4.png","674ea9b675563f76ad722c845ba2f447"],["/2020/08/28/Json交互处理/测试5.png","1db9c776d2fa4c79f9f0e12f0051cb3a"],["/2020/08/28/数据处理及跳转/index.html","fd53ce919fa129d89aa67af7fbd075c3"],["/2020/08/28/数据处理及跳转/测试1.png","9cfefc626a4a398c7bb1a463b55e74e4"],["/2020/09/02/整合SSM框架/index.html","8f5a95a86cbfe79e90ec8241abd26cea"],["/2020/09/02/整合SSM框架/ssm.png","16b9e804efd19a888939296578b1fe11"],["/2020/09/02/整合SSM框架/文件1.png","801b466a4d3b4b3140818904eca32b1c"],["/2020/09/02/整合SSM框架/文件2.png","bf8807b30544d91f55296eb725fcc124"],["/2020/12/10/数据库总结/col.png","996aeb530d71556b1a444674b5a00693"],["/2020/12/10/数据库总结/db.png","ae6c369c968cde955862336c5c2367ab"],["/2020/12/10/数据库总结/doc.png","760e6c3c59b06458133fe0c75b95f40a"],["/2020/12/10/数据库总结/graph.png","4ab20474dff5dd264a5736c8b95629fd"],["/2020/12/10/数据库总结/index.html","5dbd9985fc374348e64a3d4aee6e72f6"],["/2020/12/10/数据库总结/key-value.png","31b58a55628982c66a0d425f13ab3ecf"],["/2021/01/17/Linux命令/index.html","45f65fec3f314442430326f8e44935ad"],["/2021/01/17/Linux命令/linux.png","df25a52916ced1efe49f719593e6a4ce"],["/2021/01/17/Linux命令/linux目录结构.png","be56be1d0ccd3cb55840ac8a727d860e"],["/2021/02/09/MyBatisPlus/MybatisPlus.png","07e9c4382fccd2a22d4c784e610e4a36"],["/2021/02/09/MyBatisPlus/MybatisPlus2.png","b256f30f8baddb29ed81432fbf0c3c89"],["/2021/02/09/MyBatisPlus/index.html","89d9c7e4ddf5d0326d49908505f4211a"],["/2021/02/09/MyBatisPlus/乐观锁.png","aa646e3b06296d7c8ce4d208601ceddd"],["/2021/02/09/MyBatisPlus/乐观锁2.png","7b1acc1e1869354330f1523c22991516"],["/2021/02/09/MyBatisPlus/快速入门.png","b37fa62fdb330ec55e7edd5e95147c17"],["/2021/02/09/MyBatisPlus/更新操作.png","54caab9ffb35e7e9a302915bba81d584"],["/2021/02/09/MyBatisPlus/条件构造器1.png","8b97ead6eeaba21bb9835e82009c16c5"],["/2021/02/09/MyBatisPlus/自动填充.png","98dace21a14f78a219ea7b89e93558f3"],["/2021/02/09/MyBatisPlus/逻辑删除.png","72efad10f3d84c3a9e5756bdb80db58d"],["/2021/02/09/MyBatisPlus/逻辑删除1.png","72efad10f3d84c3a9e5756bdb80db58d"],["/2021/02/09/MyBatisPlus/逻辑删除2.png","175249cb0195e33e8d8487c64841fc83"],["/2021/02/09/MyBatisPlus/逻辑删除3.png","482b8c703700b510b1a70b2d58f0d7e7"],["/2021/02/17/Nginx入门及配置/index.html","2676cc44bda4b9df8191d5e0da58dc69"],["/2021/02/17/Nginx入门及配置/nginx.png","24fa63c5bdb2dc34c039ef272ea57174"],["/2021/02/17/Nginx入门及配置/动静分离.png","8e097e17019b9195abdae6d062ec2351"],["/2021/02/17/Nginx入门及配置/反向代理.png","fc4991cd780b0ba3d18eae7c138e5e33"],["/2021/02/17/Nginx入门及配置/正向代理.png","e256c56f187d8a43efc8a89df3961283"],["/2021/02/17/Nginx入门及配置/状态页面.png","fcfcde511be7fb0fa4f247c19493eda6"],["/2021/02/17/Nginx入门及配置/负载均衡-Iphash.png","ccc66946440caac287ecd27124fe67ef"],["/2021/02/17/Nginx入门及配置/负载均衡-加权轮询.png","c2e63d16a571597db1e7df9f64e2ccc7"],["/2021/02/17/Nginx入门及配置/负载均衡-轮询.png","9253bc76d516ff141e06a1d7677cf13a"],["/2021/09/13/baymax/B站分区.png","093cc18e89b19364198ebf7279b49af1"],["/2021/09/13/baymax/B站分区热榜1.png","4011507585d92ab32c536379e52b655f"],["/2021/09/13/baymax/B站解析.png","2eebc7e4499134a81b5088e86e862bb0"],["/2021/09/13/baymax/bcl.png","69b54d4d9c26d30ad5d6dfff476290b1"],["/2021/09/13/baymax/bot.png","05afc149e3a960d82751a3885fa48b69"],["/2021/09/13/baymax/cmd.png","8c89cef29eb48f51529b7bdb5edf1a64"],["/2021/09/13/baymax/emotion.png","36852dcff8f6ad0f43c2cfcedff62ada"],["/2021/09/13/baymax/english.png","fb3ae46459a45333e304eada95235213"],["/2021/09/13/baymax/flashImage.png","c20be3ca08838a47771659832bf56894"],["/2021/09/13/baymax/grant.png","b5215a2acf282db8ad34f24a3014d55f"],["/2021/09/13/baymax/imgSearch.png","6015d41338f31057ce3d43b71fdc0ce7"],["/2021/09/13/baymax/index.html","4e11592a757ebca683ac6d7fd6598f05"],["/2021/09/13/baymax/ip.png","501fa81d3a56ce86b63bc9aafd1935b5"],["/2021/09/13/baymax/kmp.png","7f5b03855d75dbf87f3d63df70c0bfb3"],["/2021/09/13/baymax/lcb.png","2a46eabea82160c55705194e09460526"],["/2021/09/13/baymax/leetcodeUser.png","707086475b27510daa0ac827db8a4cd3"],["/2021/09/13/baymax/monitor.png","89a701f26ef1a2e104119fef37eda359"],["/2021/09/13/baymax/news.png","4ae447c305331251c0dcdb3b3e060c1d"],["/2021/09/13/baymax/next.png","e20ec0f11554aa2febebc189eae86799"],["/2021/09/13/baymax/report.png","87becda6e812ba06a4fa8853050fbc40"],["/2021/09/13/baymax/revoke.png","1ed3264588f87847acc4a7bf243db194"],["/2021/09/13/baymax/solve.png","9588eab81757ecfc244b1e7cd9528cd6"],["/2021/09/13/baymax/steam.png","708d3342f319ae8a702ed07a43dd81a2"],["/2021/09/13/baymax/tarot.png","554950bab50d145ed73b383fb51992ca"],["/2021/09/13/baymax/trans.png","9134037b7f66a2552c1ed8ad45180bfe"],["/2021/09/13/baymax/transhelp.png","37a513e45f124e74834ff54a05e966c2"],["/2021/09/13/baymax/voice.png","3e71f6335e710971177b52f1886f8bc3"],["/2021/09/13/baymax/wordcloud.png","8b8bfe7ec1a2e076ac74b0818ad263cd"],["/2021/09/13/baymax/xhwadd.png","2215f55e8450955c01341dd932213d7a"],["/2021/09/13/baymax/xhwremove.png","5063d4bcde56f4d005b924d88a822e58"],["/2021/09/13/baymax/搜番.png","1a4b92ee11b2eac0b1ef4cc8191b875e"],["/2021/09/13/baymax/新番1.png","2ac1af674185b6c85bb735aad6f843b6"],["/2021/09/13/baymax/新番2.png","5252ac6a88db2cbbee84d465850de675"],["/2021/09/13/baymax/盘头像.png","7b637e03caccca31fad807f70da918ca"],["/2021/09/13/baymax/缩写.png","88be8f4597431a57096a239fad29c320"],["/album/index.html","1b8337628a147f48a13ab1ed5db1e163"],["/archives/2020/06/index.html","e3b8f556e76d37cf5f757144a522b10e"],["/archives/2020/07/index.html","5fea091f78c35ee205dcc50fd8484fdc"],["/archives/2020/08/index.html","b96db63ca84fb628c89cef5560cd04f5"],["/archives/2020/08/page/2/index.html","1f7ed5a3f6f6a2fa70ce86e927cee285"],["/archives/2020/08/page/3/index.html","866450b4b8a331e48f96941235a94104"],["/archives/2020/09/index.html","7fc87d484c0ab5e46e883760ca10d37c"],["/archives/2020/12/index.html","38167db241eff43c4a044095f42f0364"],["/archives/2020/index.html","b14104be39e62e204fee4a49607b7042"],["/archives/2020/page/2/index.html","f4e62b1bfafd6cfa5eb655e5fd859100"],["/archives/2020/page/3/index.html","0847e77fb1ea2d1e2dacf15b1f6d4b4a"],["/archives/2020/page/4/index.html","3fb5216591ed852b159c7f5255f67284"],["/archives/2021/01/index.html","af5540255efb89ef8a6fa013cc6419b7"],["/archives/2021/02/index.html","ef58a681550666a63096d807360f2461"],["/archives/2021/09/index.html","8fb6d4df9987e33858e33d8b7232b6d1"],["/archives/2021/index.html","4f455ac0d591d44be155394bab47b192"],["/archives/index.html","f491c4aaddb92bc39f4f0c33e6cf6036"],["/archives/page/2/index.html","7dd4510ecd852fea2a705573b5efbca2"],["/archives/page/3/index.html","5035c73f44974a245b9be9d15f3eef99"],["/archives/page/4/index.html","c7cb52a0295782eb7faa25c89ff5d4e5"],["/archives/page/5/index.html","8b77b3e74ba48c11f96f4235230793e6"],["/baidu_verify_code-zGBzPMbWmn.html","be8de394111ac1dfbd7d74da6803c546"],["/categories/SSM框架/Mybatis/index.html","9f96b9a98aa23c937437d1981231be12"],["/categories/SSM框架/Spring/index.html","4c60e9478f0c7cda2e848d30d0bf596c"],["/categories/SSM框架/SpringMVC/index.html","c34876f0a85264604756a69ec1ccc66d"],["/categories/SSM框架/index.html","af42aa89061735a8369a46d9f294b357"],["/categories/SSM框架/page/2/index.html","06ebd0910805306d48328caf9700e6d8"],["/categories/SSM框架/page/3/index.html","d617818b54ca8b961262a4b25ccffe8c"],["/categories/index.html","c8d1365d5576f83ec42cbeb1cf5c1d79"],["/categories/开发工具/index.html","f723ff6b4eca9fc7b3188570b0bb534b"],["/categories/开发技能/index.html","4e3ff17414219dc2cc51fdf153640083"],["/categories/捣鼓捣鼓/index.html","22ed11e38862894db8e2d1efbc70da26"],["/categories/数据库/index.html","2c8e344695d148d9497150fdd39140e9"],["/categories/数据结构/index.html","879950ae4c57545e1094f8ea51c5f92a"],["/categories/数论/index.html","41015dfeed9d4539cabbf55d4974f8df"],["/categories/算法/index.html","6effe36216b6a2457cf1439008410e81"],["/categories/面向对象/index.html","4d159058c596512d6fe3ff0a8db4a410"],["/categories/题目/index.html","f17e5e619fa01e54febae2ad73c0973b"],["/css/index.css","2759a6a9a7769be36382c67ec82d20fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","9143562f16d98dc61edea59490d0bdd2"],["/gallery/marvel/index.html","ceb3ef31e82635ebfc276bdd0552993c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","e3919fde35bbce00f1177f46e28899c7"],["/img/back.jpg","c31be0bfa81eca10219c0644d4bae77a"],["/img/back2.jpg","29a333281b50e58bce7222933a151ba0"],["/img/back3.jpg","1b48d01120160528ef65aa085489bee8"],["/img/back4.jpg","d1e1a146fc24d7958915944847c53194"],["/img/back5.jpg","842acb866b00fb194c042e577eafc518"],["/img/back6.jpg","c1dd5080999eb2beb199ae5ae2771471"],["/img/favicon.png","e3919fde35bbce00f1177f46e28899c7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/pwa/16.png","5712826803f2ca4fa8d9e58a7aa84910"],["/img/pwa/32.png","4b1e43fb58faa4d22ff0105edf5481aa"],["/img/pwa/apple-touch-icon.png","450e88b00d2fc6ef91e070c615bfbad5"],["/img/pwa/safari-pinned-tab.svg","ebba4ad6d5173a4236b2c9cba7d3e8d7"],["/index.html","864738a210d337897d7bbcb2384492a3"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","d960347e790f1208bc4cfa6f31ba413a"],["/page/3/index.html","9c37493ab956d1dea60bd2677b5caa4e"],["/page/4/index.html","f72a953f29813f0213c5a2f1fb1e8892"],["/page/5/index.html","9c1f9c7b274494697a7a50a413d5126a"],["/service-worker.js","0d83d95d2caec213faf57b41f240ecdb"],["/sw-register.js","c5f4f4bb36d428b41994603ed0756b8d"],["/tags/BF与SPFA/index.html","8794af84da1f324734a00f35f9c65c5a"],["/tags/Linux/index.html","8eaa59a8e88caffc86948218caa3e1c7"],["/tags/MyBatisPlus/index.html","c26bb453e04e1508557d8dfa15159722"],["/tags/Mybatis/index.html","fd8271a57c582b22e3f4bc26f8f8a919"],["/tags/Mysql/index.html","18c21e49b204dd037f325fe611128083"],["/tags/Neo4j/index.html","86e3de52cd1ba2845efa9211e3d1004f"],["/tags/Nginx/index.html","e2ca9b010a00df073d31011079ddc2ed"],["/tags/Spring/index.html","6420b0a1d4b362e857c8bdbb49d37438"],["/tags/SpringMVC/index.html","17d543a4cc197cc5026e2ab2655742dd"],["/tags/c-面向对象/index.html","90d1e0c50ce1553aec50d9ffe60e281b"],["/tags/dijistar/index.html","594c382080e5cd44004eedbcf7392ea9"],["/tags/index.html","c94a0652c072391512b49acbcf3877d9"],["/tags/oj作业/index.html","01f049b3a19255732ee5dc47a0e30b67"],["/tags/python/index.html","f5fd160b667d41d5b2e7d91d839df3f2"],["/tags/qqbot/index.html","6cf76977d415779439637c8773587432"],["/tags/三分/index.html","8de23c63ab769745fdaf9b2140598987"],["/tags/关系数据库/index.html","160de4ceed88675cd07494c66ef537a9"],["/tags/动态规划/index.html","83f8b1f2bc4a4afea7987c7026420a8e"],["/tags/区间dp/index.html","569c1c31ffaea06ba5fa4d9d99c7de70"],["/tags/博弈论/index.html","b1fd5798697b718a6493eddd63d852c8"],["/tags/图论/index.html","f0ef5bd21cf51c6cabf778e5a3a67c1b"],["/tags/基础命令/index.html","856ad9060341cb142f5f9a8ef4e9a849"],["/tags/寒假训练/index.html","2fda7b282b50b3e3c13a0137861de1d7"],["/tags/帮助文档/index.html","41245332d6ddd698d7e2186152fef373"],["/tags/平衡二叉树/index.html","c27eedc7cc061feffcc2caf44cf1d828"],["/tags/扩展欧几里得/index.html","1a71cda968066ff68cb68054fcdd3fd9"],["/tags/文件读取/index.html","7d4d87ca92899c2d75022e20d2835a45"],["/tags/斐波那契/index.html","7bccff5bd64ce78c12fbc32c551ae76c"],["/tags/树/index.html","ebc22780913a1714a702f58383e6a54e"],["/tags/费马小定理/index.html","bd85877e98f5a4e3b505be6d3732ea9c"],["/tags/逆元/index.html","807db333242e216d39eaf4af30389266"],["/tags/链表/index.html","bc138412551bc3a00c8562899e5cefee"],["/tags/非关系数据库/index.html","1c23e003d165bb851cfc95fa8e5d85fe"],["/workbox-65969207.js","36c3fb489bb9ddbde03a7f10b6034579"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
