/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/06/11/三分/index.html","39a7166653b5dcf514f0b287b7cc75cd"],["/2020/06/12/Bellman-Ford与SPFA/index.html","88ad08d8f645a7a85e3789af792abd59"],["/2020/06/12/c++学生信息管理系统/index.html","7d344ef4b4206df1329176209680601f"],["/2020/06/12/dijstra/index.html","371184277c167dd65cf09448f419f0b6"],["/2020/06/12/平衡二叉树基本操作/index.html","5a1ecc2d1cfd3f673a7c1bd6fc45e056"],["/2020/06/12/目录树/index.html","34cf9cc51a19c5180e3187dca0870d17"],["/2020/06/12/算概率/index.html","dd32c84b7ef95d5753a215ab07fe14ae"],["/2020/06/25/合并回文子串/index.html","6028139693cce9cd9d1a71c5e6be7e6d"],["/2020/06/25/合并回文子串/合并回文子串.jpg","3ba39e16306ff92cc802abe2c92ebae9"],["/2020/07/27/Mybatis/640.png","07bb735118f354938b7f0220ff3a2a81"],["/2020/07/27/Mybatis/index.html","452fa35441c64fa07c6e6964e816f987"],["/2020/07/28/CRUD操作及配置解析/Mybatis执行过程流程图.png","2a73e3c8fe8c0a1c2b6af755ba1a250c"],["/2020/07/28/CRUD操作及配置解析/index.html","01144f3a1aeb0ab53cf837a67acab5eb"],["/2020/07/28/CRUD操作及配置解析/sqlSession.png","6b2fa24c4f7e7c9e4d2706b91cadfc2b"],["/2020/07/30/ResultMap及分页/PageHelper.jpg","8cb24685ba4eccd4da4ee44af7337e8e"],["/2020/07/30/ResultMap及分页/index.html","6838a2b6011034c4e08f29913a835806"],["/2020/07/30/ResultMap及分页/数据库.jpg","9365d01e24cff5826bff70999290b2b4"],["/2020/08/03/使用注解开发Mybatis/Debug.jpg","2d5d4a4219166d7238dabc898deee64c"],["/2020/08/03/使用注解开发Mybatis/Mybatis详细执行流程.jpg","f538e6262ab3df3d8b414cf6048d22d5"],["/2020/08/03/使用注解开发Mybatis/index.html","3584cfc8e804f6522386bb86515ce587"],["/2020/08/03/使用注解开发Mybatis/jvm动态代理机制.jpg","89d4c8a08c4f0dbef620f46b34d9d3d3"],["/2020/08/04/一对多和多对一的处理/index.html","8833d83190185c3a8dc7b89ab9830bdd"],["/2020/08/04/一对多和多对一的处理/数据库设计_多对一.jpg","9bec1e1fcadd5b4c70f52652e2c17f02"],["/2020/08/06/动态SQL/index.html","ca73ce9fb7d7bba4d0986c8ed2a2dd81"],["/2020/08/06/动态SQL/创建.png","d4960bc46bf82482605f2b34f0036369"],["/2020/08/08/缓存/EnCache.jpg","7ff090f3079e10c1394c70cbef7bc75b"],["/2020/08/08/缓存/index.html","1ba48355dd38ee72b67b6897e2092bf8"],["/2020/08/08/缓存/结果分析.jpg","e15b824ad6b3562e69e6782665e84b16"],["/2020/08/08/缓存/缓存原理图.jpg","423c10d97c698260e2e2ece5fa4607f3"],["/2020/08/11/概述及IOC理论推导/IOC本质.jpg","08f15853c50a23a848de70995787424b"],["/2020/08/11/概述及IOC理论推导/IOC本质2.jpg","27a214f40431be64616c3b55f584ed16"],["/2020/08/11/概述及IOC理论推导/Spring.jpg","7236476cf03df729159bb98a2519eac4"],["/2020/08/11/概述及IOC理论推导/index.html","ed955d0028645caba5676404c3a26d7d"],["/2020/08/11/概述及IOC理论推导/扩展.jpg","f3a37b5eb449feeb7d50dc8e9549f907"],["/2020/08/11/概述及IOC理论推导/组成.jpg","02c3aef8b86ae4bccd455d03ea54d07e"],["/2020/08/11/概述及IOC理论推导/组成2.jpg","c2816e167aa4c3d860642908ada961a9"],["/2020/08/12/快速上手Spring/index.html","780801d1eb6277e8095575d5e4bdf074"],["/2020/08/13/斐波那契/index.html","f3fd71a45e52d229b3028c86533975a0"],["/2020/08/13/斐波那契/几何.jpg","c52c31d93985182faedd49dbca4e3f4a"],["/2020/08/13/斐波那契/基本形式.jpg","27cbcd30ab139bd28abe152fd5764ed6"],["/2020/08/14/逆元/index.html","0036f1e749b66e6b44770958f508aaf0"],["/2020/08/15/依赖注入（DI）/bean的作用域.png","86a9854b02a08e5c017c25e5ea5f07e2"],["/2020/08/15/依赖注入（DI）/index.html","28d9d49653823939c9c3bcc142a97f19"],["/2020/08/15/依赖注入（DI）/结果测试.jpg","d2dad8470590a40e839d3acc4d59c23c"],["/2020/08/16/Bash游戏/Bash游戏.png","fc6cdbb16721496c96c9e5e97a151c06"],["/2020/08/16/Bash游戏/index.html","a5b2dea9097cdb350b219a1d10fb4679"],["/2020/08/16/博弈论/index.html","2b12e6ac459cea3a5b408847b9f89e71"],["/2020/08/16/自动装配/index.html","15bc0470a61751c808cb674e404ecba2"],["/2020/08/17/使用注解开发Spring/index.html","4a7d88b7e45981fe83efdf97d3962114"],["/2020/08/18/Nim游戏/Nim游戏.png","a42dce15379ada984f867d7f20a5b1d8"],["/2020/08/18/Nim游戏/index.html","bd27f5a6b2e9da0b31e96bf01ab938ad"],["/2020/08/18/静态-动态代理/Aop.png","3e6c45a1e1c220bf080914cfdcd3e90e"],["/2020/08/18/静态-动态代理/InvocationHandler.png","fb95e69d35c5b3e5d428f373f2dc75e4"],["/2020/08/18/静态-动态代理/Proxy.png","d1f5694c3189ceaeef80a5423e389e71"],["/2020/08/18/静态-动态代理/Proxy2.png","ffee8c198c39ca40b193c67318be925f"],["/2020/08/18/静态-动态代理/Proxy3.png","9242fcb288a77f136ed3991c7f1ffa66"],["/2020/08/18/静态-动态代理/index.html","dc472efabd721e35fb4b6d025298879a"],["/2020/08/18/静态-动态代理/代理模式.png","f1f2dda1b5dfffa3782be612b982fa96"],["/2020/08/19/AOP/5advice.png","272fb891910427507800eea25f1521b3"],["/2020/08/19/AOP/SpringAOP.png","ce58ccba009d39828f6c5ded9540e34c"],["/2020/08/19/AOP/ans1.png","93513afe04d5caee91c3892dd5bc6866"],["/2020/08/19/AOP/ans2.png","fa713bb61d28db98ced5d256dee3d338"],["/2020/08/19/AOP/ans3.png","8606cdb9aee2e3ec8a442361aba057cf"],["/2020/08/19/AOP/index.html","b325c99ce75e3d833691f2d2dc4e976b"],["/2020/08/19/AOP/业务逻辑.png","1194157e4b4eb07fb973307d905808a1"],["/2020/08/20/B君的游戏/B君的游戏.png","7b3d0ee8017081211ccd72fb29362129"],["/2020/08/20/B君的游戏/index.html","41931e350c60b9e6e73239afe0596023"],["/2020/08/20/整合Mybatis/DataSource.png","be344a68609753b7200df6cec7cb825c"],["/2020/08/20/整合Mybatis/DriverManagerClassName.png","8cd5540ba6b56030b78d4b95bc7b01d0"],["/2020/08/20/整合Mybatis/DriverManagerDataSource.png","5500a317ba7547b5fabd50f8e7324d3a"],["/2020/08/20/整合Mybatis/Location.png","c819c08945b17f37c11f3d76fae6c4e2"],["/2020/08/20/整合Mybatis/SqlSessionFactoryBean.png","3ed9b0b4ed6910c625a27134ccc92d7b"],["/2020/08/20/整合Mybatis/SqlSessionTemplate.png","1a16f7b3bafa7471d8b121315bd94ab6"],["/2020/08/20/整合Mybatis/index.html","6b6618c43f0f6dfcd2fb80172e9e54aa"],["/2020/08/20/整合Mybatis/mybatis-spring.png","4ae8eb5842764adc5ba7ee0be813356b"],["/2020/08/20/整合Mybatis/整合2.png","35d0b9465b8fd6178756bbdd6a357078"],["/2020/08/21/声明式事务/index.html","1232b7744ebecd0d696b8b90a67f81e6"],["/2020/08/23/什么是SpringMVC/DispatcherServlet.png","34f6ec89b3237e108c994ef15434eb8b"],["/2020/08/23/什么是SpringMVC/MVC.png","9c3e23664ddbeb7615d8d19e7fa94b59"],["/2020/08/23/什么是SpringMVC/Model1.png","0a2eec9aed3649d30bc2e95050bb9b64"],["/2020/08/23/什么是SpringMVC/Model2.png","9fedbba8dd4498ad5432e9f2efe5cd56"],["/2020/08/23/什么是SpringMVC/SpringMVC.png","137d3323c290fd213a996f1a13118a2c"],["/2020/08/23/什么是SpringMVC/SpringMVC原理.png","83c7dc99e9509885a2248bf05d145a26"],["/2020/08/23/什么是SpringMVC/SpringMVC原理2.png","31010fa6d284257848b760998baa260d"],["/2020/08/23/什么是SpringMVC/index.html","d5f6211b9d786f0d4bb736b150588eb6"],["/2020/08/25/第一个MVC程序/404.png","14454b73fb9962223c989079f9271103"],["/2020/08/25/第一个MVC程序/index.html","83ad1bcf161927e3a62f10698c3b9661"],["/2020/08/25/第一个MVC程序/原理.png","fe81a93580523a4e2f1fa22c61636a07"],["/2020/08/25/第一个MVC程序/测试1.png","885c52aaf671bde9f32bbe5cd456a894"],["/2020/08/25/第一个MVC程序/测试2.png","b82c12469b1244d2294fb099a9c039de"],["/2020/08/27/RestFul和控制器/index.html","221c7a1a2682bd7a5b316b4f721eeb83"],["/2020/08/27/RestFul和控制器/测试1.png","1bd41381d9dd31f4bddd3a287e2375de"],["/2020/08/27/RestFul和控制器/测试2.png","978ddde7ee9dbe21cc8a8c2dd68651bd"],["/2020/08/27/RestFul和控制器/测试3.png","43bfa81e06509cf2900e50422a32e4ff"],["/2020/08/27/RestFul和控制器/测试4.png","1aaeb713bb6cec97756d83a43451c288"],["/2020/08/27/RestFul和控制器/测试5.png","c5996835b8cb8785d693842729ef877f"],["/2020/08/27/RestFul和控制器/测试6.png","da0777cef7f38c306856199bb84d0609"],["/2020/08/27/RestFul和控制器/测试7.png","564b52f205bce14d7a60612c0ac48a1b"],["/2020/08/28/Json交互处理/index.html","625fe4525f967b0f48772dc669e5d0a4"],["/2020/08/28/Json交互处理/测试1.png","d0a6764acb0f8a32000cf7855b60e5f9"],["/2020/08/28/Json交互处理/测试2-1.png","3224f023f2cb51b7ca9d33297cf61f30"],["/2020/08/28/Json交互处理/测试2.png","8ff34a07aaec3eb242b9abc3d3a25e87"],["/2020/08/28/Json交互处理/测试3-1.png","5e14b5d53a7662f97658adb7c5fd6a12"],["/2020/08/28/Json交互处理/测试3.png","cc9a18a9793fbbdf8327d963cef8a693"],["/2020/08/28/Json交互处理/测试4.png","674ea9b675563f76ad722c845ba2f447"],["/2020/08/28/Json交互处理/测试5.png","1db9c776d2fa4c79f9f0e12f0051cb3a"],["/2020/08/28/数据处理及跳转/index.html","186abf6c519bef866e474afd9406a52d"],["/2020/08/28/数据处理及跳转/测试1.png","9cfefc626a4a398c7bb1a463b55e74e4"],["/2020/09/02/整合SSM框架/index.html","10c7e95e796d14675833494e306c994b"],["/2020/09/02/整合SSM框架/ssm.png","16b9e804efd19a888939296578b1fe11"],["/2020/09/02/整合SSM框架/文件1.png","801b466a4d3b4b3140818904eca32b1c"],["/2020/09/02/整合SSM框架/文件2.png","bf8807b30544d91f55296eb725fcc124"],["/2020/12/10/数据库总结/col.png","996aeb530d71556b1a444674b5a00693"],["/2020/12/10/数据库总结/db.png","ae6c369c968cde955862336c5c2367ab"],["/2020/12/10/数据库总结/doc.png","760e6c3c59b06458133fe0c75b95f40a"],["/2020/12/10/数据库总结/graph.png","4ab20474dff5dd264a5736c8b95629fd"],["/2020/12/10/数据库总结/index.html","8d59e8b87709a9aa8e746df8a6e8b88e"],["/2020/12/10/数据库总结/key-value.png","31b58a55628982c66a0d425f13ab3ecf"],["/2021/01/17/Linux命令/index.html","2aad25fe516a5d69bc49cd9932bbce1c"],["/2021/01/17/Linux命令/linux.png","df25a52916ced1efe49f719593e6a4ce"],["/2021/01/17/Linux命令/linux目录结构.png","be56be1d0ccd3cb55840ac8a727d860e"],["/2021/02/09/MyBatisPlus/MybatisPlus.png","07e9c4382fccd2a22d4c784e610e4a36"],["/2021/02/09/MyBatisPlus/MybatisPlus2.png","b256f30f8baddb29ed81432fbf0c3c89"],["/2021/02/09/MyBatisPlus/index.html","59cbd0bda1827a91ebd5e8ba3a4d27a2"],["/2021/02/09/MyBatisPlus/乐观锁.png","aa646e3b06296d7c8ce4d208601ceddd"],["/2021/02/09/MyBatisPlus/乐观锁2.png","7b1acc1e1869354330f1523c22991516"],["/2021/02/09/MyBatisPlus/快速入门.png","b37fa62fdb330ec55e7edd5e95147c17"],["/2021/02/09/MyBatisPlus/更新操作.png","54caab9ffb35e7e9a302915bba81d584"],["/2021/02/09/MyBatisPlus/条件构造器1.png","8b97ead6eeaba21bb9835e82009c16c5"],["/2021/02/09/MyBatisPlus/自动填充.png","98dace21a14f78a219ea7b89e93558f3"],["/2021/02/09/MyBatisPlus/逻辑删除.png","72efad10f3d84c3a9e5756bdb80db58d"],["/2021/02/09/MyBatisPlus/逻辑删除1.png","72efad10f3d84c3a9e5756bdb80db58d"],["/2021/02/09/MyBatisPlus/逻辑删除2.png","175249cb0195e33e8d8487c64841fc83"],["/2021/02/09/MyBatisPlus/逻辑删除3.png","482b8c703700b510b1a70b2d58f0d7e7"],["/2021/02/17/Nginx入门及配置/index.html","612f4b67cd45358508308c51ea22b018"],["/2021/02/17/Nginx入门及配置/nginx.png","24fa63c5bdb2dc34c039ef272ea57174"],["/2021/02/17/Nginx入门及配置/动静分离.png","8e097e17019b9195abdae6d062ec2351"],["/2021/02/17/Nginx入门及配置/反向代理.png","fc4991cd780b0ba3d18eae7c138e5e33"],["/2021/02/17/Nginx入门及配置/正向代理.png","e256c56f187d8a43efc8a89df3961283"],["/2021/02/17/Nginx入门及配置/状态页面.png","fcfcde511be7fb0fa4f247c19493eda6"],["/2021/02/17/Nginx入门及配置/负载均衡-Iphash.png","ccc66946440caac287ecd27124fe67ef"],["/2021/02/17/Nginx入门及配置/负载均衡-加权轮询.png","c2e63d16a571597db1e7df9f64e2ccc7"],["/2021/02/17/Nginx入门及配置/负载均衡-轮询.png","9253bc76d516ff141e06a1d7677cf13a"],["/2021/09/13/baymax/B站分区.png","093cc18e89b19364198ebf7279b49af1"],["/2021/09/13/baymax/B站分区热榜1.png","4011507585d92ab32c536379e52b655f"],["/2021/09/13/baymax/B站解析.png","2eebc7e4499134a81b5088e86e862bb0"],["/2021/09/13/baymax/bcl.png","69b54d4d9c26d30ad5d6dfff476290b1"],["/2021/09/13/baymax/bot.png","05afc149e3a960d82751a3885fa48b69"],["/2021/09/13/baymax/cmd.png","8c89cef29eb48f51529b7bdb5edf1a64"],["/2021/09/13/baymax/emotion.png","36852dcff8f6ad0f43c2cfcedff62ada"],["/2021/09/13/baymax/english.png","fb3ae46459a45333e304eada95235213"],["/2021/09/13/baymax/flashImage.png","c20be3ca08838a47771659832bf56894"],["/2021/09/13/baymax/grant.png","b5215a2acf282db8ad34f24a3014d55f"],["/2021/09/13/baymax/imgSearch.png","6015d41338f31057ce3d43b71fdc0ce7"],["/2021/09/13/baymax/index.html","a72d6222b39e776c5f417cbd48743555"],["/2021/09/13/baymax/ip.png","501fa81d3a56ce86b63bc9aafd1935b5"],["/2021/09/13/baymax/kmp.png","7f5b03855d75dbf87f3d63df70c0bfb3"],["/2021/09/13/baymax/lcb.png","2a46eabea82160c55705194e09460526"],["/2021/09/13/baymax/leetcodeUser.png","707086475b27510daa0ac827db8a4cd3"],["/2021/09/13/baymax/monitor.png","89a701f26ef1a2e104119fef37eda359"],["/2021/09/13/baymax/news.png","4ae447c305331251c0dcdb3b3e060c1d"],["/2021/09/13/baymax/next.png","e20ec0f11554aa2febebc189eae86799"],["/2021/09/13/baymax/report.png","87becda6e812ba06a4fa8853050fbc40"],["/2021/09/13/baymax/revoke.png","1ed3264588f87847acc4a7bf243db194"],["/2021/09/13/baymax/solve.png","9588eab81757ecfc244b1e7cd9528cd6"],["/2021/09/13/baymax/steam.png","708d3342f319ae8a702ed07a43dd81a2"],["/2021/09/13/baymax/tarot.png","554950bab50d145ed73b383fb51992ca"],["/2021/09/13/baymax/trans.png","9134037b7f66a2552c1ed8ad45180bfe"],["/2021/09/13/baymax/transhelp.png","37a513e45f124e74834ff54a05e966c2"],["/2021/09/13/baymax/voice.png","3e71f6335e710971177b52f1886f8bc3"],["/2021/09/13/baymax/wordcloud.png","8b8bfe7ec1a2e076ac74b0818ad263cd"],["/2021/09/13/baymax/xhwadd.png","2215f55e8450955c01341dd932213d7a"],["/2021/09/13/baymax/xhwremove.png","5063d4bcde56f4d005b924d88a822e58"],["/2021/09/13/baymax/搜番.png","1a4b92ee11b2eac0b1ef4cc8191b875e"],["/2021/09/13/baymax/新番1.png","2ac1af674185b6c85bb735aad6f843b6"],["/2021/09/13/baymax/新番2.png","5252ac6a88db2cbbee84d465850de675"],["/2021/09/13/baymax/盘头像.png","7b637e03caccca31fad807f70da918ca"],["/2021/09/13/baymax/缩写.png","88be8f4597431a57096a239fad29c320"],["/2022/05/01/初尝树莓派/hotpot.png","e16330c46cc1ad76001456e7495cbee2"],["/2022/05/01/初尝树莓派/imager.png","3556e14aa6d316b27032c292fcb92bfa"],["/2022/05/01/初尝树莓派/imager2.png","a2e6e0f9c0e798aa1e77b8a1b20eae8e"],["/2022/05/01/初尝树莓派/index.html","94826ea722873454aee1aa750ff1e6e1"],["/2022/05/01/初尝树莓派/preinstall.png","e8e5873c0cf697cbdb8b675b5e029c51"],["/2022/05/01/初尝树莓派/screen.jpg","28631dc8735f3ee900a734d56138ee32"],["/2022/05/01/初尝树莓派/xshell.png","b83e5d7d89de9ddbe71c8dff1b6564a5"],["/2022/05/01/初尝树莓派/xshell2.png","2fdd2a07940c4ae8902189ebd590c755"],["/album/index.html","7479c4b3f051940a2f4c958d376e1eb5"],["/archives/2020/06/index.html","508777976fb041fb337b75337abe66a6"],["/archives/2020/07/index.html","5025e0721a445edf61a2f87567e930ff"],["/archives/2020/08/index.html","61de57db489a8719e503bbf72b577426"],["/archives/2020/08/page/2/index.html","ed4d10c685fb7a18197b97de6ca58935"],["/archives/2020/08/page/3/index.html","f84c74288acc427eb80caed2398c4afd"],["/archives/2020/09/index.html","bdaf2d283ad1a04142548a17a2641244"],["/archives/2020/12/index.html","39a1e5b0d2a4b22d7931429e42888722"],["/archives/2020/index.html","a507003c4baf56c089dc9e67654f2d3d"],["/archives/2020/page/2/index.html","17a130aa46d6d2a3d5ca5cab3ebe55f0"],["/archives/2020/page/3/index.html","d419e46ce2864efb070c0b35438d788c"],["/archives/2020/page/4/index.html","0684161010a7dabf9c17dedaf4b61abe"],["/archives/2021/01/index.html","f15de4114cfbc10320094c0047f73b5b"],["/archives/2021/02/index.html","644b6638c040db905fd214e1e5b8ff58"],["/archives/2021/09/index.html","85120c70ca5c91139a08881f5c812e95"],["/archives/2021/index.html","3aa6dd71e411700c969624cd391faed0"],["/archives/2022/05/index.html","d3c1d3efa1a8cd7690078217720f5079"],["/archives/2022/index.html","9ff5e6d1797ed7208961d53357ed9e76"],["/archives/index.html","9e6733a14bb961b711148b873a3eb867"],["/archives/page/2/index.html","3d79456a3b5793c3dac535b9df928587"],["/archives/page/3/index.html","77b645a71422819470225cdf0dd7506b"],["/archives/page/4/index.html","c8ebdf8bf9d034dc42f4eebe29844ec5"],["/archives/page/5/index.html","566399f011921db5b574d37a0c109c92"],["/baidu_verify_code-zGBzPMbWmn.html","a1755293effd01bde6b2a762d36bf098"],["/categories/SSM框架/Mybatis/index.html","9e461e954d260060a3596c4267c332d9"],["/categories/SSM框架/Spring/index.html","b3dc7fcc59e96c9ebf6ec8ff4d87217d"],["/categories/SSM框架/SpringMVC/index.html","4f68cd5c5271701fa29d9e9de90ef067"],["/categories/SSM框架/index.html","f4a0b5f6d7337aa36bc3c25615061bd2"],["/categories/SSM框架/page/2/index.html","9d801c3f1a145f845ad02c8aaa83f684"],["/categories/SSM框架/page/3/index.html","5ef59d978da9cb81d13d09711d24159c"],["/categories/index.html","b44704c4fb49a3b93540551176d90ba7"],["/categories/开发工具/index.html","30f3f1efe3a60bcf2de8adf6b26ad238"],["/categories/开发技能/index.html","5f48180c06d091e47416e6bc71c9c78d"],["/categories/捣鼓捣鼓/index.html","8214c784febca6b55fbd358dc5c77054"],["/categories/数据库/index.html","70dc17f2505ee73afa8b39420b425ecb"],["/categories/数据结构/index.html","69c767b884f55c3366f4960bb431cf80"],["/categories/数论/index.html","19cb140fd84e993793e20b9d851acf32"],["/categories/算法/index.html","84e6e0adaddb2e4753352c86297e32ed"],["/categories/面向对象/index.html","870230bff16735cb7eed9fb640b6b6e6"],["/categories/题目/index.html","e326a0cd7312f7dd3dfa428dcabce23b"],["/css/index.css","6ca3216a0089fe8b2ea5fc299f3f57eb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","bebeb55c8a580bdb8919cf81386cd7cc"],["/gallery/marvel/index.html","bc1088ad9fa228c43e1c303e726df8bf"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","e3919fde35bbce00f1177f46e28899c7"],["/img/back.jpg","c31be0bfa81eca10219c0644d4bae77a"],["/img/back2.jpg","29a333281b50e58bce7222933a151ba0"],["/img/back3.jpg","1b48d01120160528ef65aa085489bee8"],["/img/back4.jpg","d1e1a146fc24d7958915944847c53194"],["/img/back5.jpg","842acb866b00fb194c042e577eafc518"],["/img/back6.jpg","c1dd5080999eb2beb199ae5ae2771471"],["/img/favicon.png","4b1e43fb58faa4d22ff0105edf5481aa"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/pwa/16.png","5712826803f2ca4fa8d9e58a7aa84910"],["/img/pwa/32.png","4b1e43fb58faa4d22ff0105edf5481aa"],["/img/pwa/apple-touch-icon.png","450e88b00d2fc6ef91e070c615bfbad5"],["/img/pwa/safari-pinned-tab.svg","ebba4ad6d5173a4236b2c9cba7d3e8d7"],["/index.html","fc898e04aca7cfb78b0187baa5088bba"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","189920e0070916b14549db6dab812c73"],["/page/3/index.html","621cc4eed326dcf78fddd226614729dc"],["/page/4/index.html","e8cceef9882d619db6d0863ee6b703f1"],["/page/5/index.html","1da1e1e386eb12908172b9d79317c274"],["/service-worker.js","93661107dbcfc3ac15c032a58a1d6ad3"],["/sw-register.js","313190905bd17e8f3c89bacf377b5700"],["/tags/BF与SPFA/index.html","c5a0d687e6e9d9b61d8c126a8197292f"],["/tags/Linux/index.html","4eb0031041e2c7440b67d80312e04323"],["/tags/MyBatisPlus/index.html","6122c1043d756ba714fed6466a7ab36f"],["/tags/Mybatis/index.html","8dd54e65cac82482eb978f219f4507f8"],["/tags/Mysql/index.html","bb5b1be61735440cae4675019fc0643c"],["/tags/Neo4j/index.html","4b22712033d3ae0173c9bb382df9503f"],["/tags/Nginx/index.html","813b724d3ba78606dd0f992aecbc04e7"],["/tags/Spring/index.html","776bb7b9839ea4a9db7e20d6d90f487f"],["/tags/SpringMVC/index.html","5e71a335330c670b59dbd5bd1eeddbad"],["/tags/c-面向对象/index.html","917635c89ced07ca318dcda8df2c7a39"],["/tags/dijistar/index.html","adbaf2acb3fa79d3faff4b357e643dc3"],["/tags/index.html","0573504e35fa52f000f1138174b3f1d1"],["/tags/oj作业/index.html","01ba3532d4fb592a5159fa3d34d2d3ff"],["/tags/python/index.html","6a5acd041dab03bee8b49e4798e88091"],["/tags/qqbot/index.html","f17cb76017011212126e2b5b179f1171"],["/tags/三分/index.html","3c26034e851d0036724192fb6f66fcbd"],["/tags/关系数据库/index.html","857b63f153e2c01db6e61ed83af75af8"],["/tags/动态规划/index.html","1f3e4b5eac29bedc1a23cc3cb689930e"],["/tags/区间dp/index.html","d781ae63ee07361db3e246947ef37d3a"],["/tags/博弈论/index.html","da3cf99798c6b7fa7e05dcbaefbbb300"],["/tags/图论/index.html","8a28d85a50a5af01856206aa834d4e4d"],["/tags/基础命令/index.html","eaf111396276e78b53327f2dd3758e48"],["/tags/寒假训练/index.html","bcaba4f7bdb98f161dbb285d6cdc1206"],["/tags/帮助文档/index.html","bd1bbac6d1a47acebcd7bf23532202ca"],["/tags/平衡二叉树/index.html","5e0a620bffcfc84b5dae572179ba3b65"],["/tags/扩展欧几里得/index.html","23501912db075b35a7f96ae492cc3dae"],["/tags/文件读取/index.html","537299a20f94a00c87457d49e3fced69"],["/tags/斐波那契/index.html","05f6f98585e8be7a40a46eca093ad918"],["/tags/树/index.html","86d16f019cd887b0159cd296984d7b06"],["/tags/硬件/index.html","2443f48c7d08213caa7aba0dfa3cc98e"],["/tags/装机/index.html","c0d0a0a59fad4f83d38c851e409bd7d2"],["/tags/费马小定理/index.html","445a7b1f306fe90ce444b13e7aa63d6a"],["/tags/逆元/index.html","a578e175a6286d175a239d841b3906fc"],["/tags/链表/index.html","f06268a7dee59d03813466fa25a37008"],["/tags/非关系数据库/index.html","6698fb1c11a11bd9028c04316c41c92c"],["/workbox-65969207.js","36c3fb489bb9ddbde03a7f10b6034579"]];
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
