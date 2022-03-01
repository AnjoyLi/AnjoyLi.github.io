/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/06/11/三分/index.html","9068242db7c912ccd55e0f93231cee6b"],["/2020/06/12/Bellman-Ford与SPFA/index.html","7d3631c2ad621aa63b8a9e2966b17f9b"],["/2020/06/12/c++学生信息管理系统/index.html","0564bbe60edce23ce310c5f71bb0354d"],["/2020/06/12/dijstra/index.html","64191eef0fdf83f2b094d97cc4538c25"],["/2020/06/12/平衡二叉树基本操作/index.html","a90f812ee28108c4db2d4d37cdddec4e"],["/2020/06/12/目录树/index.html","00f92b231baa65ba59e6dad6347e4563"],["/2020/06/12/算概率/index.html","f4446ebfd4e3ea5b918766067cc29ed0"],["/2020/06/25/合并回文子串/index.html","ec96643ecb44eb934ba6383884b00d73"],["/2020/06/25/合并回文子串/合并回文子串.jpg","3ba39e16306ff92cc802abe2c92ebae9"],["/2020/07/27/Mybatis/640.png","07bb735118f354938b7f0220ff3a2a81"],["/2020/07/27/Mybatis/index.html","92a3733e80cf5e8905b74996a04dd14f"],["/2020/07/28/CRUD操作及配置解析/Mybatis执行过程流程图.png","2a73e3c8fe8c0a1c2b6af755ba1a250c"],["/2020/07/28/CRUD操作及配置解析/index.html","70b7f01f14785f88d030654d64ad85a1"],["/2020/07/28/CRUD操作及配置解析/sqlSession.png","6b2fa24c4f7e7c9e4d2706b91cadfc2b"],["/2020/07/30/ResultMap及分页/PageHelper.jpg","8cb24685ba4eccd4da4ee44af7337e8e"],["/2020/07/30/ResultMap及分页/index.html","78143ecfade6886de65eeda0bfd719af"],["/2020/07/30/ResultMap及分页/数据库.jpg","9365d01e24cff5826bff70999290b2b4"],["/2020/08/03/使用注解开发Mybatis/Debug.jpg","2d5d4a4219166d7238dabc898deee64c"],["/2020/08/03/使用注解开发Mybatis/Mybatis详细执行流程.jpg","f538e6262ab3df3d8b414cf6048d22d5"],["/2020/08/03/使用注解开发Mybatis/index.html","d026ae59f22f588905739959ff0823e1"],["/2020/08/03/使用注解开发Mybatis/jvm动态代理机制.jpg","89d4c8a08c4f0dbef620f46b34d9d3d3"],["/2020/08/04/一对多和多对一的处理/index.html","e3bfc41b0247c7b62db51defef661af0"],["/2020/08/04/一对多和多对一的处理/数据库设计_多对一.jpg","9bec1e1fcadd5b4c70f52652e2c17f02"],["/2020/08/06/动态SQL/index.html","228c7e87d074fa56546be06f2b8e7f07"],["/2020/08/06/动态SQL/创建.png","d4960bc46bf82482605f2b34f0036369"],["/2020/08/08/缓存/EnCache.jpg","7ff090f3079e10c1394c70cbef7bc75b"],["/2020/08/08/缓存/index.html","029ab289ab399351d80e12bfe4e6bf65"],["/2020/08/08/缓存/结果分析.jpg","e15b824ad6b3562e69e6782665e84b16"],["/2020/08/08/缓存/缓存原理图.jpg","423c10d97c698260e2e2ece5fa4607f3"],["/2020/08/11/概述及IOC理论推导/IOC本质.jpg","08f15853c50a23a848de70995787424b"],["/2020/08/11/概述及IOC理论推导/IOC本质2.jpg","27a214f40431be64616c3b55f584ed16"],["/2020/08/11/概述及IOC理论推导/Spring.jpg","7236476cf03df729159bb98a2519eac4"],["/2020/08/11/概述及IOC理论推导/index.html","874a54040e3df552fb6c9e2479e41fb5"],["/2020/08/11/概述及IOC理论推导/扩展.jpg","f3a37b5eb449feeb7d50dc8e9549f907"],["/2020/08/11/概述及IOC理论推导/组成.jpg","02c3aef8b86ae4bccd455d03ea54d07e"],["/2020/08/11/概述及IOC理论推导/组成2.jpg","c2816e167aa4c3d860642908ada961a9"],["/2020/08/12/快速上手Spring/index.html","1659e3c58e2723bd30a21217b11a6f65"],["/2020/08/13/斐波那契/index.html","d46426b2652e4a4017378c20573ad576"],["/2020/08/13/斐波那契/几何.jpg","c52c31d93985182faedd49dbca4e3f4a"],["/2020/08/13/斐波那契/基本形式.jpg","27cbcd30ab139bd28abe152fd5764ed6"],["/2020/08/14/逆元/index.html","572b153ffb1df2d114fd394e8ada2b55"],["/2020/08/15/依赖注入（DI）/bean的作用域.png","86a9854b02a08e5c017c25e5ea5f07e2"],["/2020/08/15/依赖注入（DI）/index.html","f93feabe81c9638a146aa4ff74517a0f"],["/2020/08/15/依赖注入（DI）/结果测试.jpg","d2dad8470590a40e839d3acc4d59c23c"],["/2020/08/16/Bash游戏/Bash游戏.png","fc6cdbb16721496c96c9e5e97a151c06"],["/2020/08/16/Bash游戏/index.html","0149525ca824d79ba8283b8dac8c4179"],["/2020/08/16/博弈论/index.html","4ff1b5bcfdf03b0dd122791db9d7c844"],["/2020/08/16/自动装配/index.html","9e38910a91e0e386a5cffb7453e8c94f"],["/2020/08/17/使用注解开发Spring/index.html","9719da85c755285281714bb2dfd7b8e0"],["/2020/08/18/Nim游戏/Nim游戏.png","a42dce15379ada984f867d7f20a5b1d8"],["/2020/08/18/Nim游戏/index.html","8fe2cd93613cdf02061df57b7f88b3cf"],["/2020/08/18/静态-动态代理/Aop.png","3e6c45a1e1c220bf080914cfdcd3e90e"],["/2020/08/18/静态-动态代理/InvocationHandler.png","fb95e69d35c5b3e5d428f373f2dc75e4"],["/2020/08/18/静态-动态代理/Proxy.png","d1f5694c3189ceaeef80a5423e389e71"],["/2020/08/18/静态-动态代理/Proxy2.png","ffee8c198c39ca40b193c67318be925f"],["/2020/08/18/静态-动态代理/Proxy3.png","9242fcb288a77f136ed3991c7f1ffa66"],["/2020/08/18/静态-动态代理/index.html","14d8c69b74f50c1a9e5364bdafbed412"],["/2020/08/18/静态-动态代理/代理模式.png","f1f2dda1b5dfffa3782be612b982fa96"],["/2020/08/19/AOP/5advice.png","272fb891910427507800eea25f1521b3"],["/2020/08/19/AOP/SpringAOP.png","ce58ccba009d39828f6c5ded9540e34c"],["/2020/08/19/AOP/ans1.png","93513afe04d5caee91c3892dd5bc6866"],["/2020/08/19/AOP/ans2.png","fa713bb61d28db98ced5d256dee3d338"],["/2020/08/19/AOP/ans3.png","8606cdb9aee2e3ec8a442361aba057cf"],["/2020/08/19/AOP/index.html","e3510ef94703e610bbd26f7fc9ca4a31"],["/2020/08/19/AOP/业务逻辑.png","1194157e4b4eb07fb973307d905808a1"],["/2020/08/20/B君的游戏/B君的游戏.png","7b3d0ee8017081211ccd72fb29362129"],["/2020/08/20/B君的游戏/index.html","3b9e655f20ddd5b2fba30e8ecaf62bbe"],["/2020/08/20/整合Mybatis/DataSource.png","be344a68609753b7200df6cec7cb825c"],["/2020/08/20/整合Mybatis/DriverManagerClassName.png","8cd5540ba6b56030b78d4b95bc7b01d0"],["/2020/08/20/整合Mybatis/DriverManagerDataSource.png","5500a317ba7547b5fabd50f8e7324d3a"],["/2020/08/20/整合Mybatis/Location.png","c819c08945b17f37c11f3d76fae6c4e2"],["/2020/08/20/整合Mybatis/SqlSessionFactoryBean.png","3ed9b0b4ed6910c625a27134ccc92d7b"],["/2020/08/20/整合Mybatis/SqlSessionTemplate.png","1a16f7b3bafa7471d8b121315bd94ab6"],["/2020/08/20/整合Mybatis/index.html","c6fb54ef4920717caacc72781b8732fc"],["/2020/08/20/整合Mybatis/mybatis-spring.png","4ae8eb5842764adc5ba7ee0be813356b"],["/2020/08/20/整合Mybatis/整合2.png","35d0b9465b8fd6178756bbdd6a357078"],["/2020/08/21/声明式事务/index.html","6db2a3eaace7d954dbad5a84e3d42503"],["/2020/08/23/什么是SpringMVC/DispatcherServlet.png","34f6ec89b3237e108c994ef15434eb8b"],["/2020/08/23/什么是SpringMVC/MVC.png","9c3e23664ddbeb7615d8d19e7fa94b59"],["/2020/08/23/什么是SpringMVC/Model1.png","0a2eec9aed3649d30bc2e95050bb9b64"],["/2020/08/23/什么是SpringMVC/Model2.png","9fedbba8dd4498ad5432e9f2efe5cd56"],["/2020/08/23/什么是SpringMVC/SpringMVC.png","137d3323c290fd213a996f1a13118a2c"],["/2020/08/23/什么是SpringMVC/SpringMVC原理.png","83c7dc99e9509885a2248bf05d145a26"],["/2020/08/23/什么是SpringMVC/SpringMVC原理2.png","31010fa6d284257848b760998baa260d"],["/2020/08/23/什么是SpringMVC/index.html","564f2bbfb335d8c383dc10bb565ffc66"],["/2020/08/25/第一个MVC程序/404.png","14454b73fb9962223c989079f9271103"],["/2020/08/25/第一个MVC程序/index.html","da7d148f9552c4a64d7518541d1d1cee"],["/2020/08/25/第一个MVC程序/原理.png","fe81a93580523a4e2f1fa22c61636a07"],["/2020/08/25/第一个MVC程序/测试1.png","885c52aaf671bde9f32bbe5cd456a894"],["/2020/08/25/第一个MVC程序/测试2.png","b82c12469b1244d2294fb099a9c039de"],["/2020/08/27/RestFul和控制器/index.html","0cdfec56c3c79329576fe5e9648d4a7e"],["/2020/08/27/RestFul和控制器/测试1.png","1bd41381d9dd31f4bddd3a287e2375de"],["/2020/08/27/RestFul和控制器/测试2.png","978ddde7ee9dbe21cc8a8c2dd68651bd"],["/2020/08/27/RestFul和控制器/测试3.png","43bfa81e06509cf2900e50422a32e4ff"],["/2020/08/27/RestFul和控制器/测试4.png","1aaeb713bb6cec97756d83a43451c288"],["/2020/08/27/RestFul和控制器/测试5.png","c5996835b8cb8785d693842729ef877f"],["/2020/08/27/RestFul和控制器/测试6.png","da0777cef7f38c306856199bb84d0609"],["/2020/08/27/RestFul和控制器/测试7.png","564b52f205bce14d7a60612c0ac48a1b"],["/2020/08/28/Json交互处理/index.html","0e40b2d99fc3a2c4bce4ca295177cf2c"],["/2020/08/28/Json交互处理/测试1.png","d0a6764acb0f8a32000cf7855b60e5f9"],["/2020/08/28/Json交互处理/测试2-1.png","3224f023f2cb51b7ca9d33297cf61f30"],["/2020/08/28/Json交互处理/测试2.png","8ff34a07aaec3eb242b9abc3d3a25e87"],["/2020/08/28/Json交互处理/测试3-1.png","5e14b5d53a7662f97658adb7c5fd6a12"],["/2020/08/28/Json交互处理/测试3.png","cc9a18a9793fbbdf8327d963cef8a693"],["/2020/08/28/Json交互处理/测试4.png","674ea9b675563f76ad722c845ba2f447"],["/2020/08/28/Json交互处理/测试5.png","1db9c776d2fa4c79f9f0e12f0051cb3a"],["/2020/08/28/数据处理及跳转/index.html","a2edd56c8a401fd6621c137d16d393d6"],["/2020/08/28/数据处理及跳转/测试1.png","9cfefc626a4a398c7bb1a463b55e74e4"],["/2020/09/02/整合SSM框架/index.html","1d8ad21f13efc5ad91e92f39f1c86184"],["/2020/09/02/整合SSM框架/ssm.png","16b9e804efd19a888939296578b1fe11"],["/2020/09/02/整合SSM框架/文件1.png","801b466a4d3b4b3140818904eca32b1c"],["/2020/09/02/整合SSM框架/文件2.png","bf8807b30544d91f55296eb725fcc124"],["/2020/12/10/数据库总结/col.png","996aeb530d71556b1a444674b5a00693"],["/2020/12/10/数据库总结/db.png","ae6c369c968cde955862336c5c2367ab"],["/2020/12/10/数据库总结/doc.png","760e6c3c59b06458133fe0c75b95f40a"],["/2020/12/10/数据库总结/graph.png","4ab20474dff5dd264a5736c8b95629fd"],["/2020/12/10/数据库总结/index.html","d617f20be35b30ecea4f38c582a04074"],["/2020/12/10/数据库总结/key-value.png","31b58a55628982c66a0d425f13ab3ecf"],["/2021/01/17/Linux命令/index.html","ff280f9029fde47b21e1f5349739c501"],["/2021/01/17/Linux命令/linux.png","df25a52916ced1efe49f719593e6a4ce"],["/2021/01/17/Linux命令/linux目录结构.png","be56be1d0ccd3cb55840ac8a727d860e"],["/2021/02/09/MyBatisPlus/MybatisPlus.png","07e9c4382fccd2a22d4c784e610e4a36"],["/2021/02/09/MyBatisPlus/MybatisPlus2.png","b256f30f8baddb29ed81432fbf0c3c89"],["/2021/02/09/MyBatisPlus/index.html","3089013f2df838718b3732cf16d55411"],["/2021/02/09/MyBatisPlus/乐观锁.png","aa646e3b06296d7c8ce4d208601ceddd"],["/2021/02/09/MyBatisPlus/乐观锁2.png","7b1acc1e1869354330f1523c22991516"],["/2021/02/09/MyBatisPlus/快速入门.png","b37fa62fdb330ec55e7edd5e95147c17"],["/2021/02/09/MyBatisPlus/更新操作.png","54caab9ffb35e7e9a302915bba81d584"],["/2021/02/09/MyBatisPlus/条件构造器1.png","8b97ead6eeaba21bb9835e82009c16c5"],["/2021/02/09/MyBatisPlus/自动填充.png","98dace21a14f78a219ea7b89e93558f3"],["/2021/02/09/MyBatisPlus/逻辑删除.png","72efad10f3d84c3a9e5756bdb80db58d"],["/2021/02/09/MyBatisPlus/逻辑删除1.png","72efad10f3d84c3a9e5756bdb80db58d"],["/2021/02/09/MyBatisPlus/逻辑删除2.png","175249cb0195e33e8d8487c64841fc83"],["/2021/02/09/MyBatisPlus/逻辑删除3.png","482b8c703700b510b1a70b2d58f0d7e7"],["/2021/02/17/Nginx入门及配置/index.html","c80a57f23459d6136f20f540f292fba9"],["/2021/02/17/Nginx入门及配置/nginx.png","24fa63c5bdb2dc34c039ef272ea57174"],["/2021/02/17/Nginx入门及配置/动静分离.png","8e097e17019b9195abdae6d062ec2351"],["/2021/02/17/Nginx入门及配置/反向代理.png","fc4991cd780b0ba3d18eae7c138e5e33"],["/2021/02/17/Nginx入门及配置/正向代理.png","e256c56f187d8a43efc8a89df3961283"],["/2021/02/17/Nginx入门及配置/状态页面.png","fcfcde511be7fb0fa4f247c19493eda6"],["/2021/02/17/Nginx入门及配置/负载均衡-Iphash.png","ccc66946440caac287ecd27124fe67ef"],["/2021/02/17/Nginx入门及配置/负载均衡-加权轮询.png","c2e63d16a571597db1e7df9f64e2ccc7"],["/2021/02/17/Nginx入门及配置/负载均衡-轮询.png","9253bc76d516ff141e06a1d7677cf13a"],["/2021/09/13/baymax/B站分区.png","093cc18e89b19364198ebf7279b49af1"],["/2021/09/13/baymax/B站分区热榜1.png","4011507585d92ab32c536379e52b655f"],["/2021/09/13/baymax/B站解析.png","2eebc7e4499134a81b5088e86e862bb0"],["/2021/09/13/baymax/bcl.png","69b54d4d9c26d30ad5d6dfff476290b1"],["/2021/09/13/baymax/bot.png","05afc149e3a960d82751a3885fa48b69"],["/2021/09/13/baymax/cmd.png","8c89cef29eb48f51529b7bdb5edf1a64"],["/2021/09/13/baymax/emotion.png","36852dcff8f6ad0f43c2cfcedff62ada"],["/2021/09/13/baymax/english.png","fb3ae46459a45333e304eada95235213"],["/2021/09/13/baymax/flashImage.png","c20be3ca08838a47771659832bf56894"],["/2021/09/13/baymax/grant.png","b5215a2acf282db8ad34f24a3014d55f"],["/2021/09/13/baymax/imgSearch.png","6015d41338f31057ce3d43b71fdc0ce7"],["/2021/09/13/baymax/index.html","63effa515fb7919ada4130e03f063eeb"],["/2021/09/13/baymax/ip.png","501fa81d3a56ce86b63bc9aafd1935b5"],["/2021/09/13/baymax/kmp.png","7f5b03855d75dbf87f3d63df70c0bfb3"],["/2021/09/13/baymax/lcb.png","2a46eabea82160c55705194e09460526"],["/2021/09/13/baymax/leetcodeUser.png","707086475b27510daa0ac827db8a4cd3"],["/2021/09/13/baymax/monitor.png","89a701f26ef1a2e104119fef37eda359"],["/2021/09/13/baymax/news.png","4ae447c305331251c0dcdb3b3e060c1d"],["/2021/09/13/baymax/next.png","e20ec0f11554aa2febebc189eae86799"],["/2021/09/13/baymax/report.png","87becda6e812ba06a4fa8853050fbc40"],["/2021/09/13/baymax/revoke.png","1ed3264588f87847acc4a7bf243db194"],["/2021/09/13/baymax/solve.png","9588eab81757ecfc244b1e7cd9528cd6"],["/2021/09/13/baymax/steam.png","708d3342f319ae8a702ed07a43dd81a2"],["/2021/09/13/baymax/tarot.png","554950bab50d145ed73b383fb51992ca"],["/2021/09/13/baymax/trans.png","9134037b7f66a2552c1ed8ad45180bfe"],["/2021/09/13/baymax/transhelp.png","37a513e45f124e74834ff54a05e966c2"],["/2021/09/13/baymax/voice.png","3e71f6335e710971177b52f1886f8bc3"],["/2021/09/13/baymax/wordcloud.png","8b8bfe7ec1a2e076ac74b0818ad263cd"],["/2021/09/13/baymax/xhwadd.png","2215f55e8450955c01341dd932213d7a"],["/2021/09/13/baymax/xhwremove.png","5063d4bcde56f4d005b924d88a822e58"],["/2021/09/13/baymax/搜番.png","1a4b92ee11b2eac0b1ef4cc8191b875e"],["/2021/09/13/baymax/新番1.png","2ac1af674185b6c85bb735aad6f843b6"],["/2021/09/13/baymax/新番2.png","5252ac6a88db2cbbee84d465850de675"],["/2021/09/13/baymax/盘头像.png","7b637e03caccca31fad807f70da918ca"],["/2021/09/13/baymax/缩写.png","88be8f4597431a57096a239fad29c320"],["/album/index.html","1b7762f3cc8285aa7efee2daf19e8d10"],["/archives/2020/06/index.html","547a50dcb09a7392fee6df2a1dcd596f"],["/archives/2020/07/index.html","86a28e3300a9b64a05a8769724c18441"],["/archives/2020/08/index.html","028007e796a9dee09e34029558f155d7"],["/archives/2020/08/page/2/index.html","0f3f1b7dd09f8d423657a218cd6a7a33"],["/archives/2020/08/page/3/index.html","cb2bcd6c88c23c796c24950d3316ae2f"],["/archives/2020/09/index.html","4b71e7bf1bcae4f9ea248af4cddff24e"],["/archives/2020/12/index.html","393b28af24be1ecc8a47910cf6b5e2ef"],["/archives/2020/index.html","043faf4c762720d6692caa06e1e4658d"],["/archives/2020/page/2/index.html","1580137b3bba296e30124063346908ad"],["/archives/2020/page/3/index.html","7144e9fa681faf51a54e122b7cb51ca5"],["/archives/2020/page/4/index.html","1bae535244e916cc6a4fe4cdda5568fd"],["/archives/2021/01/index.html","d0c0a0d078470ae39a55b1742e431054"],["/archives/2021/02/index.html","5f76aee00fd82fd5d1c23809af1c072f"],["/archives/2021/09/index.html","7ceccc669129f2301c30dab4407a5765"],["/archives/2021/index.html","55baf09a609a6e2fbf882e841ff6fcc5"],["/archives/index.html","557651019d24103c9049eaa84ffa4523"],["/archives/page/2/index.html","9ff4a04410a46aad673665b1025fbd05"],["/archives/page/3/index.html","20bf36d78b039ac6ed1c041717cfd83d"],["/archives/page/4/index.html","840b7cc0d30a329c450cf3d1bc7d0c0d"],["/archives/page/5/index.html","6fefde54083e82d5cf9bd2964354c07d"],["/baidu_verify_code-zGBzPMbWmn.html","4fdd10e0a7ae769ffb1a8e5ce2d50525"],["/categories/SSM框架/Mybatis/index.html","12f227cc5402ee0f72ab06ebaf125d5a"],["/categories/SSM框架/Spring/index.html","c2104c165033d174b920d6986409ba5b"],["/categories/SSM框架/SpringMVC/index.html","3dd9deac810c2bc0c3dc1691fc32af36"],["/categories/SSM框架/index.html","25fdb9ff4d1b58e38778451398d86ae9"],["/categories/SSM框架/page/2/index.html","f3b1257f839370ccbaf25bc0a6cc0a46"],["/categories/SSM框架/page/3/index.html","480f3c21701c5fac7eff2e80024c51dc"],["/categories/index.html","d10756ce4309a400ad8ef642c371602f"],["/categories/开发工具/index.html","83c0786726799ecf2129af85e39cebf0"],["/categories/开发技能/index.html","3be881c13d534b68743a637b4d86b452"],["/categories/捣鼓捣鼓/index.html","e0378a74758d7b32e0a00a5700014f44"],["/categories/数据库/index.html","16f8fbda9d0ba7c42b7d0e9eb0530d12"],["/categories/数据结构/index.html","f2bd7c6c7bf7610e271651a6876ecceb"],["/categories/数论/index.html","d5dac17bd1e7567552be6d2007652a97"],["/categories/算法/index.html","5ec8a38ffec5dc574922f02ab4df5a8a"],["/categories/面向对象/index.html","217ac463a1706ed1e574e58140c067eb"],["/categories/题目/index.html","b94e72aa3c33d8bc17a5992dbc987fba"],["/css/index.css","2759a6a9a7769be36382c67ec82d20fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","92cb0338add58a61569ce45113232d91"],["/gallery/marvel/index.html","9de0ca0528331afc8e96480266bbcb8a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","e3919fde35bbce00f1177f46e28899c7"],["/img/back.jpg","c31be0bfa81eca10219c0644d4bae77a"],["/img/back2.jpg","29a333281b50e58bce7222933a151ba0"],["/img/back3.jpg","1b48d01120160528ef65aa085489bee8"],["/img/back4.jpg","d1e1a146fc24d7958915944847c53194"],["/img/back5.jpg","842acb866b00fb194c042e577eafc518"],["/img/back6.jpg","c1dd5080999eb2beb199ae5ae2771471"],["/img/favicon.png","e3919fde35bbce00f1177f46e28899c7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/pwa/16.png","e8b804270b758581d7d73293b5ba68cf"],["/img/pwa/32.png","ab4fd70f00d2e49cbdb6dc5c36c746f7"],["/img/pwa/apple-touch-icon.png","a82b68ce8526109e3a401f815aba6faf"],["/img/pwa/safari-pinned-tab.svg","57610a2189dc062fdc8c3f962d75a8be"],["/index.html","1c4bb70f615aafa526074efbdab0b885"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0c51cb56d9022ddbf49efb049e302db9"],["/page/3/index.html","704d48506723168f0007896f7c1365d8"],["/page/4/index.html","4cc2f2b1dc023346e080cd4453946d9f"],["/page/5/index.html","f691c7f5c3c4f6046236002da7a03450"],["/service-worker.js","ae281bf8927614052b65233b8cd0b8fe"],["/sw-register.js","7f711309f0f7784478b20a0dd104a04c"],["/tags/BF与SPFA/index.html","6ea1674b101ba02690afa99111d98d81"],["/tags/Linux/index.html","352a04cb0543e69441b26db57652e174"],["/tags/MyBatisPlus/index.html","a37b75826a3bbc8bd08fea0cd6ea0185"],["/tags/Mybatis/index.html","dd226f5838f8c38376959e9e901014ce"],["/tags/Mysql/index.html","0cb03086e4c9dcfe5062c1b49e6fe930"],["/tags/Neo4j/index.html","c9062edb0ab45f3b96f23ce4c61b7229"],["/tags/Nginx/index.html","02fee4f115cebe50f140d4b3acfe2810"],["/tags/Spring/index.html","2cc0ff3c07dbc192bd35063a158c6bbb"],["/tags/SpringMVC/index.html","7c82b38e32d3b9e66a90c41258bd657a"],["/tags/c-面向对象/index.html","3aca293d8c3a5aa9290b901b53b1a6db"],["/tags/dijistar/index.html","7b32d34a3db102877b48f097853fcd35"],["/tags/index.html","8f06605e53fe5d96c7cee939f231f7f6"],["/tags/oj作业/index.html","8648bb010c5e5fea63c5be6502e23148"],["/tags/python/index.html","2749045e12fc50b1a2cff11f58e23e01"],["/tags/qqbot/index.html","7cd0f15266a3c2556820316f335e376b"],["/tags/三分/index.html","0a883e16392d5c5bfdaf3c567fe88308"],["/tags/关系数据库/index.html","6ac079ab83bee86f1e1e5f13d33ff0ef"],["/tags/动态规划/index.html","99c06ac40a40a8e1a96bd9041443efd7"],["/tags/区间dp/index.html","ae5ab3ce922ca6ce8030a53da60a6850"],["/tags/博弈论/index.html","a2b4713e5bf472aa10ad107a9ad197b9"],["/tags/图论/index.html","46ccf8faa51f5cc6041f79b121d9efbb"],["/tags/基础命令/index.html","5f985747db10d822899afb34a1e55939"],["/tags/寒假训练/index.html","4e26644c8b196c610e40786e97b4b5bf"],["/tags/帮助文档/index.html","73b05f4e87ba730b59d43161372f283f"],["/tags/平衡二叉树/index.html","e698cb2e908175f8b4485a0255485294"],["/tags/扩展欧几里得/index.html","ff0708457a06ec8cdc9700ef88d212f2"],["/tags/文件读取/index.html","cf70cc60b5c0a032b8a45fafbdd1a77c"],["/tags/斐波那契/index.html","a864341cf5d8be4478a9d69aad9145ab"],["/tags/树/index.html","160a282bd52f401dedd628ab643d57aa"],["/tags/费马小定理/index.html","87607226f5a3057f55264b67d60024ce"],["/tags/逆元/index.html","f76ea2b700434dfe9d538b835dab61b5"],["/tags/链表/index.html","80691e6ce889dc37b1a1479aa7580f68"],["/tags/非关系数据库/index.html","0f27954cf10172ade5f84bf945960e8f"],["/workbox-65969207.js","36c3fb489bb9ddbde03a7f10b6034579"]];
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
