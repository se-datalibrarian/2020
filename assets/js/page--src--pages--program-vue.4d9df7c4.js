(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1Y/n":function(t,e,n){var s=n("HAuM"),r=n("ewvW"),o=n("RK3t"),a=n("UMSQ"),i=function(t){return function(e,n,i,l){s(n);var c=r(e),p=o(c),d=a(c.length),m=t?d-1:0,u=t?-1:1;if(i<2)for(;;){if(m in p){l=p[m],m+=u;break}if(m+=u,t?m<0:d<=m)throw TypeError("Reduce of empty array with no initial value")}for(;t?m>=0:d>m;m+=u)m in p&&(l=n(l,p[m],m,c));return l}};t.exports={left:i(!1),right:i(!0)}},E9XD:function(t,e,n){"use strict";var s=n("I+eb"),r=n("1Y/n").left,o=n("pkCn"),a=n("rkAj"),i=n("LQDL"),l=n("YF1G"),c=o("reduce"),p=a("reduce",{1:0});s({target:"Array",proto:!0,forced:!c||!p||!l&&i>79&&i<83},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},Rfxz:function(t,e,n){"use strict";var s=n("I+eb"),r=n("tycR").some,o=n("pkCn"),a=n("rkAj"),i=o("some"),l=a("some");s({target:"Array",proto:!0,forced:!i||!l},{some:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"g/Tq":function(t,e,n){"use strict";n.r(e);n("2B1R"),n("E9XD"),n("Rfxz"),n("rePB");var s=function(t){return t};function r(t,e,n,s){return function t(r,o){if(o>=s.length)return n(r);const a=new Map,i=s[o++];let l=-1;for(const t of r){const e=i(t,++l,r),n=a.get(e);n?n.push(t):a.set(e,[t])}for(const[e,n]of a)a.set(e,t(n,o));return e(a)}(t,0)}var o={name:"PresentationInfoBlock",props:{presentationInfo:Object},data:function(){return{showAbstract:!1,noShare:["Jacky Hart (Library of Congress / Congressional Research Service)"]}},computed:{abstractToggleLanguage:function(){return this.showAbstract?"\n          <span class='text-indigo-500'>Abstract </span>\n            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 16' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather stroke-current text-indigo-500'>\n            <polyline points='18 15 12 9 6 15'></polyline>\n          </svg>":'\n          <span class=\'text-indigo-500\'>Abstract</span>\n          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather stroke-current text-indigo-500"><polyline points="6 9 12 15 18 9"></polyline></svg>'}}},a=n("KHd+"),i={components:{PresentationInfoBlock:Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["Break"!==t.presentationInfo.type?n("h4",{staticClass:"text-md mt-6 font-light text-gray-700"},[t._v("\n    "+t._s(t.presentationInfo.startTime)+"\n  ")]):t._e(),"Break"!==t.presentationInfo.type?n("h4",{staticClass:"text-lg mt-1"},[t._v("\n    "+t._s(t.presentationInfo.title)+"\n  ")]):t._e(),""!==t.presentationInfo.presenters?n("p",{staticClass:"text-md mt-1 font-light text-gray-700"},[t._v("\n    "+t._s(t.presentationInfo.presenters)+"\n  ")]):t._e(),this.noShare.includes(t.presentationInfo.presenters)?n("p",{staticClass:"text-md mt-1 font-light italic text-gray-700"},[t._v("\n    Presenter was unable to allow recording or sharing of presentation materials\n  ")]):t._e(),["Posters","Workshops"].includes(t.presentationInfo.type)?n("p",{staticClass:"text-md mt-1 font-light italic text-gray-700"},[t._v("\n    This presentation was not recorded\n  ")]):t._e(),""!==t.presentationInfo.YouTubeLink?n("a",{staticClass:"link mt-2 block",attrs:{href:t.presentationInfo.YouTubeLink}},[t._v("View recording on YouTube")]):t._e(),["Break"].includes(t.presentationInfo.type)||""===t.presentationInfo.materialsLink?t._e():n("a",{staticClass:"link mt-2 block",attrs:{href:t.presentationInfo.materialsLink}},[t._v("View presentation materials")]),t.presentationInfo.abstract?n("button",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"abstract-toggle mt-2 flex flex-row",domProps:{innerHTML:t._s(t.abstractToggleLanguage)},on:{click:function(e){t.showAbstract=!t.showAbstract}}}):t._e(),n("p",{directives:[{name:"show",rawName:"v-show",value:t.presentationInfo.abstract&&t.showAbstract,expression:"presentationInfo.abstract && showAbstract"}],staticClass:"mt-1 text-md whitespace-pre-wrap overflow-hidden"},[t._v(t._s(t.presentationInfo.abstract))])])}),[],!1,null,null,null).exports},metaInfo:{title:"Program"},data:function(){return{program:{},showAbstract:!0}},methods:{formatProgramData:function(){var t=function(t,...e){return r(t,Array.from,s,e)}(this.$page.allProgram.edges.map((function(t){return t.node})),(function(t){return t.day}),(function(t){return t.session}),(function(t){return t.type}));this.program=t.map((function(t){return{day:t[0],sessions:t[1].map((function(t,e){var n=t[1][0];return{id:e,sessionType:n[0],sessionStartTime:n[1][0].startTimeEDT,sessionEndTime:n[1][n[1].length-1].endTimeEDT,presentations:n[1].map((function(t,e){return{id:e,title:t.title,presenters:t.presenters,abstract:t.abstract,startTime:t.startTimeEDT,presentationLength:+t.lengthMin,type:t.type,YouTubeLink:t.YouTubeLink,materialsLink:t.materialsLink}}))}}))}}))}},mounted:function(){this.formatProgramData()}},l=(n("jDHz"),null),c=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("h1",{staticClass:"text-3xl"},[t._v("Program")]),n("p",{staticClass:"mt-4"},[t._v("\n    All short talks, excepting those where presenters were unable to give permission to do so, have been recorded and captioned and are available in the "),n("a",{staticClass:"link",attrs:{href:"https://www.youtube.com/playlist?list=PLTC6jPg1N9B4a0EM4tOK06vJKlN530PT2"}},[t._v("Southeast Data Librarian Symposium 2020 playlist")]),t._v(" on the SEDLS YouTube Channel. Poster presentations and workshops were not recorded.\n  ")]),n("p",{staticClass:"mt-4"},[t._v("\n    Links to individual short talk recordings and presentation materials, poster presentation materials, and workshop materials, where provided, can be found in the program listing below.\n  ")]),n("p",{staticClass:"mt-4"},[t._v("\n    Sessions will be held online through Zoom and Discord. Information and instructions to join sessions will be sent to registered attendees via email in the week before the symposium, along with links to join workshops for workshop registrants.\n  ")]),n("p",{staticClass:"mt-4"},[t._v("\n    Attendees are expected to follow the symposium "),n("g-link",{staticClass:"link",attrs:{to:"/code-of-conduct","active-class":"null"}},[t._v("Code of Conduct")]),t._v(" and to be aware of the planning committee's "),n("g-link",{staticClass:"link",attrs:{to:"/accessibility","active-class":"null"}},[t._v("Commitment to Accessibility")]),t._v(".\n  ")],1),n("p",{staticClass:"mt-4 font-bold"},[t._v("All listed times are in Eastern Time (EDT).")]),n("div",{staticClass:"mt-4 mb-8"},[n("h2",{staticClass:"mt-4 pl-3 p-2 bg-gray-800 text-2xl text-green-400"},[t._v("Tues, Oct 6")]),n("div",{staticClass:"mt-0 py-2 bg-gray-200 border-b-2 border-solid border-gray-300 md:flex md:flex-row"},[n("div",{staticClass:"px-3 md:w-1/6 md-border-r"},[n("h3",{staticClass:"text-xl text-pink-500"},[t._v("Social")]),n("h3",{staticClass:"mb-1 text-md font-light text-gray-700 md:border-transparent sm-border-b"},[t._v("5:00 PM - 6:00 PM")])]),n("div",{staticClass:"md:-mt-5 px-3 md:w-5/6"},[n("h4",{staticClass:"text-md mt-6 font-light text-gray-700"},[t._v("5:00 PM")]),n("h4",{staticClass:"text-lg mt-1"},[t._v("Pre-Symposium Social")]),n("p",{staticClass:"mt-1 text-md"},[t._v("\n          An opportunity to virtually meet with other SEDLS 2020 attendees with open discussion and a game of team Scattergories in Zoom. \n        ")])])])]),t._l(t.program,(function(e){return n("div",{key:e.day,staticClass:"mt-4 mb-8"},[n("h2",{staticClass:"mt-4 pl-3 p-2 bg-gray-800 text-2xl text-green-400"},[t._v(t._s(e.day))]),t._l(e.sessions,(function(e){return n("div",{key:e.id,staticClass:"mt-0 py-2 alternate-background border-b-2 border-solid border-gray-300 md:flex md:flex-row"},[n("div",{staticClass:"px-3 md:w-1/6",class:{"md-border-r":"Break"!==e.sessionType}},[n("h3",{staticClass:"text-xl text-pink-500"},[t._v("\n          "+t._s(e.sessionType)+"\n        ")]),n("h3",{staticClass:"mb-1 text-md font-light text-gray-700 md:border-transparent",class:{"sm-border-b":"Break"!==e.sessionType}},[t._v("\n          "+t._s(e.sessionStartTime)+" - "+t._s(e.sessionEndTime)+"\n        ")])]),n("div",{staticClass:"md:-mt-5 px-3 md:w-5/6"},t._l(e.presentations,(function(t){return n("PresentationInfoBlock",{key:t.id,attrs:{presentationInfo:t}})})),1)])}))],2)}))],2)}),[],!1,null,null,null);"function"==typeof l&&l(c);e.default=c.exports},"j00+":function(t,e,n){},jDHz:function(t,e,n){"use strict";n("j00+")}}]);