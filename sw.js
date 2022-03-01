/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/06/11/三分/index.html","e0b5c054b7c427eae4a7bf9970979eab"],["/2020/06/12/Bellman-Ford与SPFA/index.html","997587c4c2e002660b534a593fdbf86d"],["/2020/06/12/c++学生信息管理系统/index.html","bf192d4e0168202520ad5cb2d0b49f11"],["/2020/06/12/dijstra/index.html","a574e1d6cf389863fd7090087ab2c8e5"],["/2020/06/12/平衡二叉树基本操作/index.html","a1ab1555023be79d36e52bb6d2d7d5b2"],["/2020/06/12/目录树/index.html","14e4c763698657fad634f9ba775dfafa"],["/2020/06/12/算概率/index.html","79a2840e8ae29d50beba75dc26e48c4e"],["/2020/06/25/合并回文子串/index.html","86de2a904aaeb62821e38661a622fc4c"],["/2020/06/25/合并回文子串/合并回文子串.jpg","3ba39e16306ff92cc802abe2c92ebae9"],["/2020/07/27/Mybatis/640.png","07bb735118f354938b7f0220ff3a2a81"],["/2020/07/27/Mybatis/index.html","f13be1d0a16d571c0180aa547c7171c8"],["/2020/07/28/CRUD操作及配置解析/Mybatis执行过程流程图.png","2a73e3c8fe8c0a1c2b6af755ba1a250c"],["/2020/07/28/CRUD操作及配置解析/index.html","34574a956d907c1feb5f5ac7556f51ca"],["/2020/07/28/CRUD操作及配置解析/sqlSession.png","6b2fa24c4f7e7c9e4d2706b91cadfc2b"],["/2020/07/30/ResultMap及分页/PageHelper.jpg","8cb24685ba4eccd4da4ee44af7337e8e"],["/2020/07/30/ResultMap及分页/index.html","607874faeb835cb5ac1cc70b5b1b67f3"],["/2020/07/30/ResultMap及分页/数据库.jpg","9365d01e24cff5826bff70999290b2b4"],["/2020/08/03/使用注解开发Mybatis/Debug.jpg","2d5d4a4219166d7238dabc898deee64c"],["/2020/08/03/使用注解开发Mybatis/Mybatis详细执行流程.jpg","f538e6262ab3df3d8b414cf6048d22d5"],["/2020/08/03/使用注解开发Mybatis/index.html","1f2c1024bf39929cb7de615a2be7a22a"],["/2020/08/03/使用注解开发Mybatis/jvm动态代理机制.jpg","89d4c8a08c4f0dbef620f46b34d9d3d3"],["/2020/08/04/一对多和多对一的处理/index.html","c996a14f6d9be0ca1d0fb093fd8717d0"],["/2020/08/04/一对多和多对一的处理/数据库设计_多对一.jpg","9bec1e1fcadd5b4c70f52652e2c17f02"],["/2020/08/06/动态SQL/index.html","ee44648276ebbc684c5ea546cdfbd394"],["/2020/08/06/动态SQL/创建.png","d4960bc46bf82482605f2b34f0036369"],["/2020/08/08/缓存/EnCache.jpg","7ff090f3079e10c1394c70cbef7bc75b"],["/2020/08/08/缓存/index.html","eefc0bc89302c0b7088b7b7e1a11db6d"],["/2020/08/08/缓存/结果分析.jpg","e15b824ad6b3562e69e6782665e84b16"],["/2020/08/08/缓存/缓存原理图.jpg","423c10d97c698260e2e2ece5fa4607f3"],["/2020/08/11/概述及IOC理论推导/IOC本质.jpg","08f15853c50a23a848de70995787424b"],["/2020/08/11/概述及IOC理论推导/IOC本质2.jpg","27a214f40431be64616c3b55f584ed16"],["/2020/08/11/概述及IOC理论推导/Spring.jpg","7236476cf03df729159bb98a2519eac4"],["/2020/08/11/概述及IOC理论推导/index.html","be3b558e9a23c565bc2e9fffaf49d5e3"],["/2020/08/11/概述及IOC理论推导/扩展.jpg","f3a37b5eb449feeb7d50dc8e9549f907"],["/2020/08/11/概述及IOC理论推导/组成.jpg","02c3aef8b86ae4bccd455d03ea54d07e"],["/2020/08/11/概述及IOC理论推导/组成2.jpg","c2816e167aa4c3d860642908ada961a9"],["/2020/08/12/快速上手Spring/index.html","ca2f7f6f0742c73e71d0da1e9d87e9c4"],["/2020/08/13/斐波那契/index.html","4e2589115834d8c8bc98e77fa896937c"],["/2020/08/13/斐波那契/几何.jpg","c52c31d93985182faedd49dbca4e3f4a"],["/2020/08/13/斐波那契/基本形式.jpg","27cbcd30ab139bd28abe152fd5764ed6"],["/2020/08/14/逆元/index.html","c51d3b5bda8947515699b43d8c98906c"],["/2020/08/15/依赖注入（DI）/bean的作用域.png","86a9854b02a08e5c017c25e5ea5f07e2"],["/2020/08/15/依赖注入（DI）/index.html","8f8f0e55a57f8379cfb2360743c815b8"],["/2020/08/15/依赖注入（DI）/结果测试.jpg","d2dad8470590a40e839d3acc4d59c23c"],["/2020/08/16/Bash游戏/Bash游戏.png","fc6cdbb16721496c96c9e5e97a151c06"],["/2020/08/16/Bash游戏/index.html","c22e81fba6f4fe64e7275ce840ba07c9"],["/2020/08/16/博弈论/index.html","d982bdc367171a7eaa25caf381031d21"],["/2020/08/16/自动装配/index.html","90a6d8743e77fb27f0260b49bf7309ea"],["/2020/08/17/使用注解开发Spring/index.html","66baeb2f4f98db8f90790254203c3fa9"],["/2020/08/18/Nim游戏/Nim游戏.png","a42dce15379ada984f867d7f20a5b1d8"],["/2020/08/18/Nim游戏/index.html","6af90fcc55602630f38e53aafecb4484"],["/2020/08/18/静态-动态代理/Aop.png","3e6c45a1e1c220bf080914cfdcd3e90e"],["/2020/08/18/静态-动态代理/InvocationHandler.png","fb95e69d35c5b3e5d428f373f2dc75e4"],["/2020/08/18/静态-动态代理/Proxy.png","d1f5694c3189ceaeef80a5423e389e71"],["/2020/08/18/静态-动态代理/Proxy2.png","ffee8c198c39ca40b193c67318be925f"],["/2020/08/18/静态-动态代理/Proxy3.png","9242fcb288a77f136ed3991c7f1ffa66"],["/2020/08/18/静态-动态代理/index.html","13132ff159e4fab3bde638d1bc719a96"],["/2020/08/18/静态-动态代理/代理模式.png","f1f2dda1b5dfffa3782be612b982fa96"],["/2020/08/19/AOP/5advice.png","272fb891910427507800eea25f1521b3"],["/2020/08/19/AOP/SpringAOP.png","ce58ccba009d39828f6c5ded9540e34c"],["/2020/08/19/AOP/ans1.png","93513afe04d5caee91c3892dd5bc6866"],["/2020/08/19/AOP/ans2.png","fa713bb61d28db98ced5d256dee3d338"],["/2020/08/19/AOP/ans3.png","8606cdb9aee2e3ec8a442361aba057cf"],["/2020/08/19/AOP/index.html","a456fb633912c0dbc8db13cc5598ff92"],["/2020/08/19/AOP/业务逻辑.png","1194157e4b4eb07fb973307d905808a1"],["/2020/08/20/B君的游戏/B君的游戏.png","7b3d0ee8017081211ccd72fb29362129"],["/2020/08/20/B君的游戏/index.html","ab99373fae7ff79a83756470c76ab5a4"],["/2020/08/20/整合Mybatis/DataSource.png","be344a68609753b7200df6cec7cb825c"],["/2020/08/20/整合Mybatis/DriverManagerClassName.png","8cd5540ba6b56030b78d4b95bc7b01d0"],["/2020/08/20/整合Mybatis/DriverManagerDataSource.png","5500a317ba7547b5fabd50f8e7324d3a"],["/2020/08/20/整合Mybatis/Location.png","c819c08945b17f37c11f3d76fae6c4e2"],["/2020/08/20/整合Mybatis/SqlSessionFactoryBean.png","3ed9b0b4ed6910c625a27134ccc92d7b"],["/2020/08/20/整合Mybatis/SqlSessionTemplate.png","1a16f7b3bafa7471d8b121315bd94ab6"],["/2020/08/20/整合Mybatis/index.html","b7f02c4e7e539fbcc29c8f30e51fecb1"],["/2020/08/20/整合Mybatis/mybatis-spring.png","4ae8eb5842764adc5ba7ee0be813356b"],["/2020/08/20/整合Mybatis/整合2.png","35d0b9465b8fd6178756bbdd6a357078"],["/2020/08/21/声明式事务/index.html","cfc51a06d4649e0a66a44edeb13ada88"],["/2020/08/23/什么是SpringMVC/DispatcherServlet.png","34f6ec89b3237e108c994ef15434eb8b"],["/2020/08/23/什么是SpringMVC/MVC.png","9c3e23664ddbeb7615d8d19e7fa94b59"],["/2020/08/23/什么是SpringMVC/Model1.png","0a2eec9aed3649d30bc2e95050bb9b64"],["/2020/08/23/什么是SpringMVC/Model2.png","9fedbba8dd4498ad5432e9f2efe5cd56"],["/2020/08/23/什么是SpringMVC/SpringMVC.png","137d3323c290fd213a996f1a13118a2c"],["/2020/08/23/什么是SpringMVC/SpringMVC原理.png","83c7dc99e9509885a2248bf05d145a26"],["/2020/08/23/什么是SpringMVC/SpringMVC原理2.png","31010fa6d284257848b760998baa260d"],["/2020/08/23/什么是SpringMVC/index.html","4653516581f17149da0a34b5be23b9be"],["/2020/08/25/第一个MVC程序/404.png","14454b73fb9962223c989079f9271103"],["/2020/08/25/第一个MVC程序/index.html","590458206ee977342888ea724ab42d0b"],["/2020/08/25/第一个MVC程序/原理.png","fe81a93580523a4e2f1fa22c61636a07"],["/2020/08/25/第一个MVC程序/测试1.png","885c52aaf671bde9f32bbe5cd456a894"],["/2020/08/25/第一个MVC程序/测试2.png","b82c12469b1244d2294fb099a9c039de"],["/2020/08/27/RestFul和控制器/index.html","9a249083e0531bb9d0cceebe8bc72e3a"],["/2020/08/27/RestFul和控制器/测试1.png","1bd41381d9dd31f4bddd3a287e2375de"],["/2020/08/27/RestFul和控制器/测试2.png","978ddde7ee9dbe21cc8a8c2dd68651bd"],["/2020/08/27/RestFul和控制器/测试3.png","43bfa81e06509cf2900e50422a32e4ff"],["/2020/08/27/RestFul和控制器/测试4.png","1aaeb713bb6cec97756d83a43451c288"],["/2020/08/27/RestFul和控制器/测试5.png","c5996835b8cb8785d693842729ef877f"],["/2020/08/27/RestFul和控制器/测试6.png","da0777cef7f38c306856199bb84d0609"],["/2020/08/27/RestFul和控制器/测试7.png","564b52f205bce14d7a60612c0ac48a1b"],["/2020/08/28/Json交互处理/index.html","b41f50bd80dd44d760fde9623b3f92e9"],["/2020/08/28/Json交互处理/测试1.png","d0a6764acb0f8a32000cf7855b60e5f9"],["/2020/08/28/Json交互处理/测试2-1.png","3224f023f2cb51b7ca9d33297cf61f30"],["/2020/08/28/Json交互处理/测试2.png","8ff34a07aaec3eb242b9abc3d3a25e87"],["/2020/08/28/Json交互处理/测试3-1.png","5e14b5d53a7662f97658adb7c5fd6a12"],["/2020/08/28/Json交互处理/测试3.png","cc9a18a9793fbbdf8327d963cef8a693"],["/2020/08/28/Json交互处理/测试4.png","674ea9b675563f76ad722c845ba2f447"],["/2020/08/28/Json交互处理/测试5.png","1db9c776d2fa4c79f9f0e12f0051cb3a"],["/2020/08/28/数据处理及跳转/index.html","3f34253f143eadfea0840845f269a68f"],["/2020/08/28/数据处理及跳转/测试1.png","9cfefc626a4a398c7bb1a463b55e74e4"],["/2020/09/02/整合SSM框架/index.html","59d6eaf9d69297fc626f34d8ee084ccb"],["/2020/09/02/整合SSM框架/ssm.png","16b9e804efd19a888939296578b1fe11"],["/2020/09/02/整合SSM框架/文件1.png","801b466a4d3b4b3140818904eca32b1c"],["/2020/09/02/整合SSM框架/文件2.png","bf8807b30544d91f55296eb725fcc124"],["/2020/12/10/数据库总结/col.png","996aeb530d71556b1a444674b5a00693"],["/2020/12/10/数据库总结/db.png","ae6c369c968cde955862336c5c2367ab"],["/2020/12/10/数据库总结/doc.png","760e6c3c59b06458133fe0c75b95f40a"],["/2020/12/10/数据库总结/graph.png","4ab20474dff5dd264a5736c8b95629fd"],["/2020/12/10/数据库总结/index.html","7a868b2b1f7869a2f5a5e487394c3ae9"],["/2020/12/10/数据库总结/key-value.png","31b58a55628982c66a0d425f13ab3ecf"],["/2021/01/17/Linux命令/index.html","737af850037eaa0c832e67bcb6febc8e"],["/2021/01/17/Linux命令/linux.png","df25a52916ced1efe49f719593e6a4ce"],["/2021/01/17/Linux命令/linux目录结构.png","be56be1d0ccd3cb55840ac8a727d860e"],["/2021/02/09/MyBatisPlus/MybatisPlus.png","07e9c4382fccd2a22d4c784e610e4a36"],["/2021/02/09/MyBatisPlus/MybatisPlus2.png","b256f30f8baddb29ed81432fbf0c3c89"],["/2021/02/09/MyBatisPlus/index.html","f0446bc73f50758498c7fdcdc8e838ec"],["/2021/02/09/MyBatisPlus/乐观锁.png","aa646e3b06296d7c8ce4d208601ceddd"],["/2021/02/09/MyBatisPlus/乐观锁2.png","7b1acc1e1869354330f1523c22991516"],["/2021/02/09/MyBatisPlus/快速入门.png","b37fa62fdb330ec55e7edd5e95147c17"],["/2021/02/09/MyBatisPlus/更新操作.png","54caab9ffb35e7e9a302915bba81d584"],["/2021/02/09/MyBatisPlus/条件构造器1.png","8b97ead6eeaba21bb9835e82009c16c5"],["/2021/02/09/MyBatisPlus/自动填充.png","98dace21a14f78a219ea7b89e93558f3"],["/2021/02/09/MyBatisPlus/逻辑删除.png","72efad10f3d84c3a9e5756bdb80db58d"],["/2021/02/09/MyBatisPlus/逻辑删除1.png","72efad10f3d84c3a9e5756bdb80db58d"],["/2021/02/09/MyBatisPlus/逻辑删除2.png","175249cb0195e33e8d8487c64841fc83"],["/2021/02/09/MyBatisPlus/逻辑删除3.png","482b8c703700b510b1a70b2d58f0d7e7"],["/2021/02/17/Nginx入门及配置/index.html","a80878f1351c78d392cfa0543962709f"],["/2021/02/17/Nginx入门及配置/nginx.png","24fa63c5bdb2dc34c039ef272ea57174"],["/2021/02/17/Nginx入门及配置/动静分离.png","8e097e17019b9195abdae6d062ec2351"],["/2021/02/17/Nginx入门及配置/反向代理.png","fc4991cd780b0ba3d18eae7c138e5e33"],["/2021/02/17/Nginx入门及配置/正向代理.png","e256c56f187d8a43efc8a89df3961283"],["/2021/02/17/Nginx入门及配置/状态页面.png","fcfcde511be7fb0fa4f247c19493eda6"],["/2021/02/17/Nginx入门及配置/负载均衡-Iphash.png","ccc66946440caac287ecd27124fe67ef"],["/2021/02/17/Nginx入门及配置/负载均衡-加权轮询.png","c2e63d16a571597db1e7df9f64e2ccc7"],["/2021/02/17/Nginx入门及配置/负载均衡-轮询.png","9253bc76d516ff141e06a1d7677cf13a"],["/2021/09/13/baymax/B站分区.png","093cc18e89b19364198ebf7279b49af1"],["/2021/09/13/baymax/B站分区热榜1.png","4011507585d92ab32c536379e52b655f"],["/2021/09/13/baymax/B站解析.png","2eebc7e4499134a81b5088e86e862bb0"],["/2021/09/13/baymax/bcl.png","69b54d4d9c26d30ad5d6dfff476290b1"],["/2021/09/13/baymax/bot.png","05afc149e3a960d82751a3885fa48b69"],["/2021/09/13/baymax/cmd.png","8c89cef29eb48f51529b7bdb5edf1a64"],["/2021/09/13/baymax/emotion.png","36852dcff8f6ad0f43c2cfcedff62ada"],["/2021/09/13/baymax/english.png","fb3ae46459a45333e304eada95235213"],["/2021/09/13/baymax/flashImage.png","c20be3ca08838a47771659832bf56894"],["/2021/09/13/baymax/grant.png","b5215a2acf282db8ad34f24a3014d55f"],["/2021/09/13/baymax/imgSearch.png","6015d41338f31057ce3d43b71fdc0ce7"],["/2021/09/13/baymax/index.html","ab897aeb8e91fd1ffebf653f4b25826e"],["/2021/09/13/baymax/ip.png","501fa81d3a56ce86b63bc9aafd1935b5"],["/2021/09/13/baymax/kmp.png","7f5b03855d75dbf87f3d63df70c0bfb3"],["/2021/09/13/baymax/lcb.png","2a46eabea82160c55705194e09460526"],["/2021/09/13/baymax/leetcodeUser.png","707086475b27510daa0ac827db8a4cd3"],["/2021/09/13/baymax/monitor.png","89a701f26ef1a2e104119fef37eda359"],["/2021/09/13/baymax/news.png","4ae447c305331251c0dcdb3b3e060c1d"],["/2021/09/13/baymax/next.png","e20ec0f11554aa2febebc189eae86799"],["/2021/09/13/baymax/report.png","87becda6e812ba06a4fa8853050fbc40"],["/2021/09/13/baymax/revoke.png","1ed3264588f87847acc4a7bf243db194"],["/2021/09/13/baymax/solve.png","9588eab81757ecfc244b1e7cd9528cd6"],["/2021/09/13/baymax/steam.png","708d3342f319ae8a702ed07a43dd81a2"],["/2021/09/13/baymax/tarot.png","554950bab50d145ed73b383fb51992ca"],["/2021/09/13/baymax/trans.png","9134037b7f66a2552c1ed8ad45180bfe"],["/2021/09/13/baymax/transhelp.png","37a513e45f124e74834ff54a05e966c2"],["/2021/09/13/baymax/voice.png","3e71f6335e710971177b52f1886f8bc3"],["/2021/09/13/baymax/wordcloud.png","8b8bfe7ec1a2e076ac74b0818ad263cd"],["/2021/09/13/baymax/xhwadd.png","2215f55e8450955c01341dd932213d7a"],["/2021/09/13/baymax/xhwremove.png","5063d4bcde56f4d005b924d88a822e58"],["/2021/09/13/baymax/搜番.png","1a4b92ee11b2eac0b1ef4cc8191b875e"],["/2021/09/13/baymax/新番1.png","2ac1af674185b6c85bb735aad6f843b6"],["/2021/09/13/baymax/新番2.png","5252ac6a88db2cbbee84d465850de675"],["/2021/09/13/baymax/盘头像.png","7b637e03caccca31fad807f70da918ca"],["/2021/09/13/baymax/缩写.png","88be8f4597431a57096a239fad29c320"],["/album/index.html","488b88394652a307cf9e2addab3d083d"],["/archives/2020/06/index.html","20690573fe395286c983919f5fa79eb8"],["/archives/2020/07/index.html","daeb3f073310605dd9779abf1b675a8c"],["/archives/2020/08/index.html","aa774909dfe7579935a6faf8df243d9c"],["/archives/2020/08/page/2/index.html","3846b0a77f758c25c282ec2561dfcccb"],["/archives/2020/08/page/3/index.html","05b818b72cc3e9a7242ba7bebf373b09"],["/archives/2020/09/index.html","1d32fc1cb4b5965f99e5834409af876e"],["/archives/2020/12/index.html","9426dcb2eef2c1312f2eb721b68e662e"],["/archives/2020/index.html","1abca363f24c2b727f8a6bc5e06d742a"],["/archives/2020/page/2/index.html","42b2167e1c68977ec85ed83d165f759c"],["/archives/2020/page/3/index.html","f68227aa50b86dba90e1a19cfba46f79"],["/archives/2020/page/4/index.html","61fb0c46c422119a4b562f687139728c"],["/archives/2021/01/index.html","4234c39768871ae519e5f09fa0c00b12"],["/archives/2021/02/index.html","df1301925aeeb55e30d4ae51a537a909"],["/archives/2021/09/index.html","5e2eca4a96e9b4b1b9967dcdf03f24e4"],["/archives/2021/index.html","51f06f5e7488663338da7f0d7200f5b3"],["/archives/index.html","bb0e4128d7f06d03d141c479454ef64e"],["/archives/page/2/index.html","656adfca9a6a8b17c030cf14554c4be2"],["/archives/page/3/index.html","7d3dfda927393b735733bfceacaa41b9"],["/archives/page/4/index.html","e2bdf8ae1fccbba9ecf23d2e9138c3f4"],["/archives/page/5/index.html","bb52580c6c773a58c970713c0c80c41a"],["/baidu_verify_code-zGBzPMbWmn.html","80d43aed0532f63c359f7f100f670d95"],["/categories/SSM框架/Mybatis/index.html","6fc1db7c83f2ab0f915c2baaaf2ba141"],["/categories/SSM框架/Spring/index.html","61f6e1207378905ee6d0f857ed5ad76a"],["/categories/SSM框架/SpringMVC/index.html","bdf6f0f334daa0e8cc514aca4a19eec6"],["/categories/SSM框架/index.html","83027fda8a924da77b74eac9f102d800"],["/categories/SSM框架/page/2/index.html","b03403c831fa69634caeec4d382e6a37"],["/categories/SSM框架/page/3/index.html","b1d5fd333e71017af8c70b098f129ab1"],["/categories/index.html","831fa7aca2c6a8f4084ea7c300d190a6"],["/categories/开发工具/index.html","5a8e1bab42989b510733451d150e4a27"],["/categories/开发技能/index.html","b6900934e4398e1474cdb245f88a6799"],["/categories/捣鼓捣鼓/index.html","52350f60849a58e78b0e8186dd15d756"],["/categories/数据库/index.html","6d39ff280019cc01f46c1ae4f77b4390"],["/categories/数据结构/index.html","e9284e625172e9156526c05e27904c8f"],["/categories/数论/index.html","8dcc5a2eee67ed15328ebfe8e4b1cb94"],["/categories/算法/index.html","8345a441f0616a834a60ac6105ab4d88"],["/categories/面向对象/index.html","1c1f69882c137c5cfa443ce71d5a1bcc"],["/categories/题目/index.html","0b8077fb23e8ccd48af8434701cc6635"],["/css/index.css","2759a6a9a7769be36382c67ec82d20fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","5cd3c2b041e22543cba823f01683021a"],["/gallery/marvel/index.html","3cd613d57e59afce73ad07bf4b33a909"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","e3919fde35bbce00f1177f46e28899c7"],["/img/back.jpg","c31be0bfa81eca10219c0644d4bae77a"],["/img/back2.jpg","29a333281b50e58bce7222933a151ba0"],["/img/back3.jpg","1b48d01120160528ef65aa085489bee8"],["/img/back4.jpg","d1e1a146fc24d7958915944847c53194"],["/img/back5.jpg","842acb866b00fb194c042e577eafc518"],["/img/back6.jpg","c1dd5080999eb2beb199ae5ae2771471"],["/img/favicon.png","e3919fde35bbce00f1177f46e28899c7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/pwa/16.png","e8b804270b758581d7d73293b5ba68cf"],["/img/pwa/32.png","ab4fd70f00d2e49cbdb6dc5c36c746f7"],["/img/pwa/apple-touch-icon.png","a82b68ce8526109e3a401f815aba6faf"],["/img/pwa/safari-pinned-tab.svg","57610a2189dc062fdc8c3f962d75a8be"],["/index.html","4829374c190f1a5dec2827a4c74c9c2b"],["/js/main.js","01f62452fd05335569c6341d3ac0f52b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","436f7de8aa43436736fcf9e0075ff70d"],["/page/3/index.html","4fc15f27e8c0451651f8d3e50b1fe5b9"],["/page/4/index.html","5c9c0fb2d5c64582fcdf5614bd2ef624"],["/page/5/index.html","e626e936809d0fb87ef1d8069a100869"],["/service-worker.js","020ed760088458ed09bc7d97699c36fc"],["/sw-register.js","9726666095c582a5cfa7d0efac46003a"],["/tags/BF与SPFA/index.html","00278f8afceeed78fb50eec45506dba6"],["/tags/Linux/index.html","40561b7ac2400f7d31620ec361bbd42c"],["/tags/MyBatisPlus/index.html","f844d686ad6ff223e45b89a416e23978"],["/tags/Mybatis/index.html","5ea050a52771e625ec6bb2ebd9f1020e"],["/tags/Mysql/index.html","61e869fe98b77c11c1e88f94c8cbcbcf"],["/tags/Neo4j/index.html","f811d6d29cb32adb3c05d2cd0a642b09"],["/tags/Nginx/index.html","7ad462e9fd98492c0ab883163bce55db"],["/tags/Spring/index.html","bb1792100c751c511c801baf8b909fc6"],["/tags/SpringMVC/index.html","96ee00b61a53cff6e7dcc8cae451a9e5"],["/tags/c-面向对象/index.html","fb658e4ddcc7912fe7b3cee95da562c0"],["/tags/dijistar/index.html","2656f4b41307d4d386be22bdbd0a4f1e"],["/tags/index.html","2f4a9adbed4e9cf7db3d1f77c78ac24f"],["/tags/oj作业/index.html","d2e06d019e8c2a221894469732d35e13"],["/tags/python/index.html","b3be0f41aeb00a2ba6b0b74293af7ffb"],["/tags/qqbot/index.html","e6e55bce7d614b0e4383c7655bbd7082"],["/tags/三分/index.html","136a33e87f3ceba82bb5f3548c6f54ad"],["/tags/关系数据库/index.html","46122214cf3d6a2860fea450d04f9e7d"],["/tags/动态规划/index.html","c315099c41ea97625c4538b8a0db38da"],["/tags/区间dp/index.html","c0844ae4da4e345fa220befe002cf090"],["/tags/博弈论/index.html","07d5670455db6bc270502a748d59b1e5"],["/tags/图论/index.html","bd906f112ece510c00ff53fad03d0a32"],["/tags/基础命令/index.html","f4647b349bbd5609452a99f389171788"],["/tags/寒假训练/index.html","ce0713d04d8c03f58455d67dd0955159"],["/tags/帮助文档/index.html","9d1dccab3adabb2489ad8fa2210f390a"],["/tags/平衡二叉树/index.html","2315c079f788366c6d3b47e29d821fd8"],["/tags/扩展欧几里得/index.html","f09fd4a691c72dc873b8b94b927c95e1"],["/tags/文件读取/index.html","77cbae61a867c543d4ad14bf1fe97966"],["/tags/斐波那契/index.html","f672b335e4e807d271e76615946300e5"],["/tags/树/index.html","6064eba13b2ac65679439c85faebd9e1"],["/tags/费马小定理/index.html","70c87b7d5f11946df67cee2f452910d2"],["/tags/逆元/index.html","3109663c4fb55064a77273676c25e4b7"],["/tags/链表/index.html","8269922009d447adc6fd095532588e00"],["/tags/非关系数据库/index.html","9ab7618e29ca6341cd15ee35df497f7e"],["/workbox-65969207.js","36c3fb489bb9ddbde03a7f10b6034579"]];
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
