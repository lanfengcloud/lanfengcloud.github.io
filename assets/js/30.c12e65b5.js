(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{365:function(t,a,d){"use strict";d.r(a);var v=d(4),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",{attrs:{"data-nodeid":"528"}},[t._v("如果说基础知识的掌握是起跑线，那么让大家之间拉开差距的更多是前端项目开发经验和技能。对于一个项目来说，从框架选型和搭建，到项目维护、工程化和自动化、多人协作等各个方面，都需要我们在参与项目中不断地思考和改进，积累经验。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"529"}},[t._v("项目是会不断进行演化的，如果没有做好技术方案的设计和选型，后期很可能需要进行较大规模的重构，或是留下难缠的技术债务；如果没有约束好开发规范，则容易导致团队协作出现分歧、开发效率的下降。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"530"}},[t._v("因此我们在设计一个项目的时候，需要重点关注：")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"531"}},[a("li",{attrs:{"data-nodeid":"532"}},[a("p",{attrs:{"data-nodeid":"533"}},[t._v("技术方案的设计和选型。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"534"}},[a("p",{attrs:{"data-nodeid":"535"}},[t._v("多人协作和团队规范的制订。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"536"}},[t._v("我们先来看看第一个。")]),t._v(" "),a("h3",{attrs:{"data-nodeid":"537"}},[t._v("技术方案设计和选型")]),t._v(" "),a("p",{attrs:{"data-nodeid":"538"}},[t._v("从 0 开始搭建一个项目，常常需要考虑以下的技术选型：")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"539"}},[a("li",{attrs:{"data-nodeid":"540"}},[a("p",{attrs:{"data-nodeid":"541"}},[t._v("前端框架和脚手架。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"542"}},[a("p",{attrs:{"data-nodeid":"543"}},[t._v("状态管理工具。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"544"}},[a("p",{attrs:{"data-nodeid":"545"}},[t._v("路由管理工具。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"546"}},[a("p",{attrs:{"data-nodeid":"547"}},[t._v("代码构建和编译工具。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"548"}},[t._v("关于以上技术相关的方案，我已经在第 12、13、17、18 这几讲内容中有详细进行介绍。除此之外，如何对进行技术方案的设计和调研，我们也在上一讲中进行了介绍。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"549"}},[t._v("在项目开始之前，我们需基于项目的定位（To B 还是 To C）、用户量体系、项目复杂度等因素，进行技术方案的设计。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"550"}},[t._v("技术选型的影响因素")]),t._v(" "),a("p",{attrs:{"data-nodeid":"551"}},[t._v("一般来说，从头开始搭建前端项目，首先要思考几个问题。")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"552"}},[a("li",{attrs:{"data-nodeid":"553"}},[a("p",{attrs:{"data-nodeid":"554"}},[t._v("项目规模如何、功能交互是否复杂、面向哪些用户？")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"555"}},[a("p",{attrs:{"data-nodeid":"556"}},[t._v("是否存在多人协作？团队规模大概是怎样的？")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"557"}},[a("p",{attrs:{"data-nodeid":"558"}},[t._v("团队成员技术栈如何？对新技术的接受程度怎样？")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"559"}},[a("p",{attrs:{"data-nodeid":"560"}},[t._v("是否有现有的技术方案可以参考？是否需要进行调整？")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"561"}},[t._v("为什么要考虑这些问题呢？")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"562"}},[a("li",{attrs:{"data-nodeid":"563"}},[a("p",{attrs:{"data-nodeid":"564"}},[t._v("项目规模和功能交互会影响框架和工具的选型，比如轻量项目可能 React/Vue 框架比较灵活，大型项目还可以使用 Angular 全家桶。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"565"}},[a("p",{attrs:{"data-nodeid":"566"}},[t._v("用户体系会影响系统兼容性的倾向，比如用户受众年龄偏大，则需要考虑使用机型性能可能相对较差、需兼容的机型品牌比较多。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"567"}},[a("p",{attrs:{"data-nodeid":"568"}},[t._v("存在多人协作需要考虑完善团队规范，同时尽量使用工具来保证流程规范。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"569"}},[a("p",{attrs:{"data-nodeid":"570"}},[t._v("团队技术栈倾向同样影响技术选型，如果有现成的技术方案和项目案例，可以考虑是否符合实际需要，使用团队成员熟练的工具可以避免很多踩坑的过程。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"571"}},[t._v("在明确了这些问题的答案之后，我们需要进行框架和工具的选型。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"572"}},[t._v("前端框架和工具选型")]),t._v(" "),a("p",{attrs:{"data-nodeid":"573"}},[t._v("对于前端框架和工具的使用，项目面临两个选择：")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"574"}},[a("li",{attrs:{"data-nodeid":"575"}},[a("p",{attrs:{"data-nodeid":"576"}},[t._v("使用开源/现有框架；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"577"}},[a("p",{attrs:{"data-nodeid":"578"}},[t._v("造轮子。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"579"}},[t._v("使用开源框架的好处是，它们有着完整详细的文档、丰富的社区资源。在遇到问题的时候，也能通过 issues 和 Stack Overflow 来查找。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"580"}},[t._v("前端发展到现在，几大框架之间的差距越来越小，好的方案相互学习、不好的地方各自调整。其中，目前主流的三大框架包括 Angular、React 和 Vue，我们在第 18 讲有详细介绍过各自的特色，可以进行选型和对比：")]),t._v(" "),a("table",{attrs:{"data-nodeid":"1806"}},[a("thead",{attrs:{"data-nodeid":"1807"}},[a("tr",{attrs:{"data-nodeid":"1808"}},[a("th",{attrs:{"data-nodeid":"1810"}},[t._v("框架")]),t._v(" "),a("th",{attrs:{"data-nodeid":"1811"}},[t._v("优势")]),t._v(" "),a("th",{attrs:{"data-nodeid":"1812"}},[t._v("不足")])])]),t._v(" "),a("tbody",{attrs:{"data-nodeid":"1816"}},[a("tr",{attrs:{"data-nodeid":"1817"}},[a("td",{attrs:{"data-nodeid":"1818"}},[t._v("Angular")]),t._v(" "),a("td",{attrs:{"data-nodeid":"1819"}},[t._v("提供完整的开发规范和解决方案，解决了多人协作、大型应用的痛点")]),t._v(" "),a("td",{attrs:{"data-nodeid":"1820"}},[t._v("基于大型复杂项目设计，解决方案大而全导致相对笨重"),a("br"),t._v("设计和使用的概念很多（如依赖注入/注入器/令牌、指令、模块化、AOT 等），入门成本较大")])]),t._v(" "),a("tr",{attrs:{"data-nodeid":"1821"}},[a("td",{attrs:{"data-nodeid":"1822"}},[t._v("React")]),t._v(" "),a("td",{attrs:{"data-nodeid":"1823"}},[t._v("概念较少，对前端编码侵入较少，开发者只需要掌握 Javascript 便可实现大多数功能"),a("br"),t._v("框架（库）轻量，可灵活搭配各种状态管理工具、脚手架等进行开发")]),t._v(" "),a("td",{attrs:{"data-nodeid":"1824"}},[t._v("对于大型复杂项目，需要自行搭配其他配套工具来解决")])]),t._v(" "),a("tr",{attrs:{"data-nodeid":"1825"}},[a("td",{attrs:{"data-nodeid":"1826"}},[t._v("Vue")]),t._v(" "),a("td",{attrs:{"data-nodeid":"1827"}},[t._v("对新人友好、文档和社区较完善"),a("br"),t._v("框架（库）轻量，可灵活搭配各种工具进行开发，官方也提供完整的全家桶解决方案")]),t._v(" "),a("td",{attrs:{"data-nodeid":"1828"}},[t._v("如指令和语法糖有一定的概念门槛"),a("br"),t._v("对于大型复杂项目，需要自行搭配其他配套工具来解决")])])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"606"}},[t._v("除了三大热门框架以外，有能力的团队，也可以选择比较贴合自身项目需要、相对小众的框架和工具，甚至可以自行研发合适自己的。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"607"}},[t._v("如果想要自己做框架，尤其是想要在业务中尝试使用，需要万分谨慎。除了要贴合业务实际需要，更要具备足够的责任感。比如需要提供友好的文档和 API 给其他人，不然对项目的维护、新加入的成员来说，会带来毁灭性的开发体验。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"608"}},[t._v("技术选型其实并没有一个标准的答案，很多时候我们还需要结合项目现状，选择适合团队使用的技术栈。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"609"}},[t._v("选择适合团队的技术栈")]),t._v(" "),a("p",{attrs:{"data-nodeid":"610"}},[t._v("很多时候，我们选择使用某个工具和框架，需要考虑项目大小、定位之外，还需要考虑团队的情况，包括：")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"611"}},[a("li",{attrs:{"data-nodeid":"612"}},[a("p",{attrs:{"data-nodeid":"613"}},[t._v("团队现有的技术栈")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"614"}},[a("p",{attrs:{"data-nodeid":"615"}},[t._v("团队成员对框架/工具的熟悉程度")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"616"}},[a("p",{attrs:{"data-nodeid":"617"}},[t._v("团队成员是否有倾向的框架/工具")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"618"}},[t._v("举个例子，小明接到一个好几百个功能页面的管理端项目，老板给了十个人力说让一个月上线。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"619"}},[t._v("小明调研了一番，觉得 Angular 框架可以直接拿来开发 DEMO 模块，大家可以通过参考 DEMO 快速实现其他功能页面，而且代码规范、状态管理、脚手架等都特别完善，省去了搭建成本。")]),t._v(" "),a("p",{staticClass:"te-preview-highlight",attrs:{"data-nodeid":"2851"}},[t._v("“毫无疑问这是最合适的方式。”小明心想。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"621"}},[t._v("当他跟团队成员讨论使用 Angular 的时候，大家面面相觑。十个人里只有一个人写过一点点 Angular 代码。基本上大家对 Angular 零认知，入门和熟悉起码也得一周了，这样一个月肯定无法完成任务，小明整个人都傻了。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"622"}},[t._v("后来，小明找大家讨论了一番，大家认为管理端页面用 Vue 比较方便，尤其表单类可以直接用双向绑定。考虑到大家基本上对 Vue 也比较熟练，也有 ElementUI 这样可以直接用的组件库，于是小明决定直接一套 Vue CLI + Vue + vue-router + vuex + ElementUI 带走。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"623"}},[t._v("由于大家对 Vue 已经很熟练了，脚手架初始化完项目之后，约定了下目录结构，大家就能直接开始进入开发状态了。跑了一段时间后，小明发现虽然有三百多个页面，但管理端这样的系统各个页面间的关联性较少，vuex 也基本上能满足开发需要。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"624"}},[t._v("“看来还是得结合团队的技术栈进行技术选型呢。”小明感叹道。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"625"}},[t._v("使用一套团队成员比较熟悉的技术栈，可以减少开发过程中遇到的一些问题，同时也能提升大家的开发效率。对于新引入的技术工具，可以通过讨论和投票的方式，一致通过或者协商后的方案，才是最适合的方案。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"626"}},[t._v("选用框架、脚手架和一些工具库，我们可以快速搭建项目并进行开发。当我们的项目不断变大，代码量也会随之增加。对于很多代码的生成、校验、编译、测试等流程，也需要根据项目需要进行完善，会涉及代码构建、自动化和工程化的内容，这些内容在 15 讲和 25 讲有进行详细的介绍。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"627"}},[t._v("以上便是项目启动时，技术方案设计和选型需要考虑的一些问题。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"628"}},[t._v("除此之外，当项目涉及多人协作、工作交接的时候，多人协作和团队规范同样重要。")]),t._v(" "),a("h3",{attrs:{"data-nodeid":"629"}},[t._v("多人协作和团队规范")]),t._v(" "),a("p",{attrs:{"data-nodeid":"630"}},[t._v("相比项目的搭建和快速上线，项目的维护永远是程序员的大头。搭建一套代码和流程规范，不只是将规范写得淋漓尽致，更是需要使用流程化的工具来确保大家要遵守规范。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"631"}},[t._v("使用一致的代码开发规范")]),t._v(" "),a("p",{attrs:{"data-nodeid":"632"}},[t._v("好的编码习惯很重要，语义化的变量命名、适当的注释等，都会对代码的可读性有很大的提升。但是每个人的习惯都不一样，所以我们需要有统一的代码规范。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"633"}},[t._v("可以使用一些工具来确保代码符合规范：")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"634"}},[a("li",{attrs:{"data-nodeid":"635"}},[a("p",{attrs:{"data-nodeid":"636"}},[t._v("使用 Eslint 检测代码规范；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"637"}},[a("p",{attrs:{"data-nodeid":"638"}},[t._v("使用 Prettier 自动化格式代码；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"639"}},[a("p",{attrs:{"data-nodeid":"640"}},[t._v("使用 Git Commit Hooks 拒绝不符合规范的代码提交；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"641"}},[a("p",{attrs:{"data-nodeid":"642"}},[t._v("使用流水线检测出不规范的代码，并拒绝合入主干分支；")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"643"}},[a("p",{attrs:{"data-nodeid":"644"}},[t._v("使用流水线检测出不规范的代码，并拒绝进入发布流程。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"645"}},[t._v("通过各种流程上的工具校验，确保大家都遵循规范进行开发，才能让规范的价值发挥出来。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"646"}},[t._v("使用 Eslint 这些工具能够帮助发现代码错误的规则，但代码的可读性和可维护性远远不止这些编码规则。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"647"}},[t._v("很多时候，我们会使用一些设计模式来进行代码设计，也会对代码进行适度的抽象，比如封装成组件和公共库。每个人对代码该如何设计、要怎么抽象和封装、公共代码应该在哪维护等都有不同的理解，这些内容无法使用工具或者规则来强行约定。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"648"}},[t._v("在这样的情况下，我们需要在每次合入代码的时候进行 Code Review，大家可以针对提交的代码进行讨论，提出修改的建议。在遇到分歧的时候，可以通过投票等方式来达成一致。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"649"}},[t._v("除了编码相关的规范，开发过程中的流程规范也一样重要，比如对合入的代码进行 Code Review，对发布的代码进行自动化回归测试等。")]),t._v(" "),a("h4",{attrs:{"data-nodeid":"650"}},[t._v("制定合适的代码流程规范")]),t._v(" "),a("p",{attrs:{"data-nodeid":"651"}},[t._v("一般来说，开发流程会包括：")]),t._v(" "),a("ul",{attrs:{"data-nodeid":"652"}},[a("li",{attrs:{"data-nodeid":"653"}},[a("p",{attrs:{"data-nodeid":"654"}},[t._v("Git 创建分支过程：分支的命名，是否需要关联需求单或是 BUG 单。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"655"}},[a("p",{attrs:{"data-nodeid":"656"}},[t._v("Git 提交代码过程：检查代码是否符合规范，只允许合格的代码（Eslint 规范、单测覆盖率等）进行提交。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"657"}},[a("p",{attrs:{"data-nodeid":"658"}},[t._v("分支提交过程：需要进行交叉 Code Review，对方同意后才允许合入代码。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"659"}},[a("p",{attrs:{"data-nodeid":"660"}},[t._v("合入主干过程：对代码进行自动化构建和测试，功能正常且符合规范的代码才可合入主干。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"661"}},[a("p",{attrs:{"data-nodeid":"662"}},[t._v("代码发布过程：自动拉取主干分支，创建发布分支，对代码进行自动化构建和测试，正常后会开始进入灰度发布流程。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"663"}},[t._v("通过自动化的工具我们同样可以确保以上流程按预期进行，很多团队也会使用持续集成（continuous integration，简称 CI）和持续部署（continuous deployment，简称 CD）。CI/CD 在项目中的落地，很多时候会表现为流水线的开发模式。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"664"}},[t._v("建立完整的 CI/CD 流水线，除了可以按照规范约束每次代码提交的质量，还可以有效地提高效率。越是大规模的团队，越能体会到 CI/CD 带来的便利，这些内容我们会在第 25 讲中进行更详细的介绍。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"665"}},[t._v("一个团队的正常运作，必然需要经过很多的协作方式磨合、合作过程争执、达成一致规范的过程。如果可以通过流程和工具来确保合作方式按约定进行，就不要作为可选项提供给团队成员靠自觉来执行，这样才可以维护稳定友好的团队运作模式。")]),t._v(" "),a("h3",{attrs:{"data-nodeid":"666"}},[t._v("小结")]),t._v(" "),a("p",{attrs:{"data-nodeid":"667"}},[t._v("今天给大家介绍在前端项目设计时、维护过程中需要考虑的一些问题。")]),t._v(" "),a("ol",{attrs:{"data-nodeid":"668"}},[a("li",{attrs:{"data-nodeid":"669"}},[a("p",{attrs:{"data-nodeid":"670"}},[t._v("项目开始前需要进行技术方案设计，选择适合团队和业务的技术栈进行开发。")])]),t._v(" "),a("li",{attrs:{"data-nodeid":"671"}},[a("p",{attrs:{"data-nodeid":"672"}},[t._v("对于多人协作项目，团队需要达成一致的开发和流程规范，同时需要使用工具和流程来保证规范的约束力。")])])]),t._v(" "),a("p",{attrs:{"data-nodeid":"673"}},[t._v("在实际工作中，我们会遇到很多“糟糕”的代码，刚开始会尝试去进行优化，到后面大家都慢慢屈服。“又不是不能用”这样的想法让人生厌，而过于理想的设计往往又难以落地。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"674"}},[t._v("代码本身就是会不断演化，也需要不断进行优化，一蹴而就、动不动就推倒重来的想法往往让人望而生畏，我们可以尝试拆成多步，一步一步脚踏实地地往前走。")]),t._v(" "),a("p",{attrs:{"data-nodeid":"675"}},[t._v("一个难以维护、却依然不断有新需求开发的项目，你会选择重新设计呢，还是会尝试一步步进行优化呢？欢迎在留言区分享你的想法。")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"精选评论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#精选评论"}},[t._v("#")]),t._v(" 精选评论")]),t._v(" "),a("h5",{attrs:{id:"雨"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雨"}},[t._v("#")]),t._v(" **雨：")]),t._v(" "),a("blockquote",[a("p",[t._v("时间和成本允许，重新设计和重写。反之慢慢重构，一步一步优化")])]),t._v(" "),a("h5",{attrs:{id:"宇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宇"}},[t._v("#")]),t._v(" **宇：")]),t._v(" "),a("blockquote",[a("p",[t._v("只能说不要随便重构，可能你重构出来的后期在别人眼里也是垃圾。如果项目过于臃肿，可以用微服务这样的渐进式方法，分离一些业务出去")])]),t._v(" "),a("h6",{attrs:{id:"讲师回复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲师回复"}},[t._v("#")]),t._v("     讲师回复：")]),t._v(" "),a("blockquote",[a("p",[t._v("    是的，从业务稳定性来说，渐进式优化会比直接重构效果要好得多，直接选择重构有时候可能带来更多的历史债务")])]),t._v(" "),a("h5",{attrs:{id:"童"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#童"}},[t._v("#")]),t._v(" **童：")]),t._v(" "),a("blockquote",[a("p",[t._v("我认为只要一个项目还在不断迭代更新，就肯定有可优化的余地。一般都会选择边写新需求边逐步优化，可能是现在新增的组件或者逻辑可以复用，也可能是某些旧代码有更优的编写思路。不过要认真看优化的地方所涉及的范围，不要出现漏改的情况，否则可能出现“一个现有的功能一直好好的，突然就不行了”的尴尬情况。。")])]),t._v(" "),a("h5",{attrs:{id:"振"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#振"}},[t._v("#")]),t._v(" *振：")]),t._v(" "),a("blockquote",[a("p",[t._v("我的确遇到了这种项目，很庞大，重新设计会很困难，要花费相当长的时间，反正能用，只好一步步来了。。。可能后期能排上期，会重构一番")])])])}),[],!1,null,null,null);a.default=_.exports}}]);