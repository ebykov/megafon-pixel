var MegafonPixel=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){var n="https:"===window.location.protocol;e.exports={name:"likely",prefix:"likely__",secure:n,protocol:n?"https:":"http:",storageKey:"likelyServices",breakpoint:680}},function(e,t,n){var i=n(0),r=document.createElement("div"),a=0,o=e.exports={wrapSVG:function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M'+e+'z"/></svg>'},createNode:function(e){return r.innerHTML=e,r.children[0]},getScript:function(e){var t=document.createElement("script"),n=document.head;t.type="text/javascript",t.src=e,n.appendChild(t),n.removeChild(t)},getJSON:function(e,t){var n=encodeURIComponent("random_fun_"+ ++a);e=e.replace(/callback=(\?)/,"callback="+n),window[n]=t,o.getScript(e)},find:function(e,t){return(t||document).querySelector(e)},findAll:function(e,t){return(t||document).querySelectorAll(e)},isMobile:function(){return!window.matchMedia("(min-width: "+i.breakpoint+"px)").matches},openPopup:function(e,t,n,i){var r=Math.round(screen.width/2-n/2),a=0;screen.height>i&&(a=Math.round(screen.height/3-i/2));var o="left="+r+",top="+a+",width="+n+",height="+i+",personalbar=0,toolbar=0,scrollbars=1,resizable=1";return window.open(e,t,o)}}},function(e,t){var n={yes:!0,no:!1},i={each:function(e,t){for(var n in e)e.hasOwnProperty(n)&&t(e[n],n)},toArray:function(e){return Array.prototype.slice.call(e)},merge:function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];if(n)for(var i in n)e[i]=n[i]}return e},extend:function(e,t){for(var n in t)e[n]=t[n]},flexboxSupport:function(e,t){var n,i="flex",r="-webkit-"+i,a=document.createElement("b");try{a.style.display=r,a.style.display=i,n=a.style.display==i||a.style.display==r?i:"no-"+i}catch(a){n="no-"+i}e.className+=" "+t+"--"+n},getDataset:function(e){if("object"==typeof e.dataset)return e.dataset;var t,n,i={},r=e.attributes,a=function(e){return e.charAt(1).toUpperCase()};for(t=r.length-1;t>=0;t--)(n=r[t])&&n.name&&/^data-\w[\w\-]*$/.test(n.name)&&(i[n.name.substr(5).replace(/-./g,a)]=n.value);return i},bools:function(e){var t={},r=i.getDataset(e);for(var a in r){var o=r[a];t[a]=n[o]||o}return t},template:function(e,t){return e?e.replace(/\{([^\}]+)\}/g,function(e,n){return n in t?t[n]:e}):""},makeUrl:function(e,t){for(var n in t)t[n]=encodeURIComponent(t[n]);return i.template(e,t)},query:function(e){var t=encodeURIComponent,n=[];for(var i in e)"object"!=typeof e[i]&&n.push(t(i)+"="+t(e[i]));return n.join("&")},set:function(e,t,n){var i=t.split("."),r=null;i.forEach(function(t,n){void 0===e[t]&&(e[t]={}),n!==i.length-1&&(e=e[t]),r=t}),e[r]=n}};e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendPageView=t.sendEvent=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n(5));t.sendEvent=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Click",n=i.default.analyticsCategory+" — "+e+" — "+t;void 0!==window.dataLayer&&i.default.analyticsCategory&&window.dataLayer.push({event:"data_event",data_description:n})},t.sendPageView=function(){void 0!==window.dataLayer&&window.dataLayer.push({event:"Page — View",post_details:{},section:"special",tags:[],title:document.title,url:window.location.pathname})}},function(e,t,n){var i=n(19),r=n(2),a=n(20),o={odnoklassniki:n(21),vkontakte:n(22),facebook:n(23),twitter:n(24),gplus:n(25),pocket:n(26),telegram:n(27),whatsapp:n(28),viber:n(29),email:n(30),more:n(31)};r.each(o,function(e,t){i(e),e.svgi=a[t],e.name=t}),e.exports=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MegafonPixel",analyticsCategory:"Category Name",sendPageView:!1,listenedEvents:["click","input"]}},function(e,t){var n=function(){try{return window.localStorage.setItem("isStorageAvailable",1),window.localStorage.removeItem("isStorageAvailable"),!0}catch(e){return!1}},i={getItem:function(e){if(n()){var t=window.localStorage.getItem(e);try{JSON.parse(t)}catch(e){return t}return JSON.parse(t)}},setItem:function(e,t){t="string"==typeof t?t:JSON.stringify(t),n()&&window.localStorage.setItem(e,t)},removeItem:function(e){n()&&window.localStorage.removeItem(e)}};e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.makeElement=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e=e.toLowerCase();var r=document.createElement(e);for(var a in t&&("object"===(void 0===t?"undefined":i(t))?t.forEach(function(e){r.classList.add(e)}):"string"==typeof t&&r.classList.add(t)),n)if("data"===a){var o=n[a];for(var s in o)r.dataset[s]=o[s]}else r[a]=n[a];return r},t.cacheElements=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"view",n={},i=document.querySelectorAll("[data-"+t+"]");Array.prototype.forEach.call(i,function(e){var i=e.dataset[t];n[i]=e}),Object.assign(e,n)},t.getSiblings=function(e){for(var t=[],n=e.parentNode.firstChild;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t},t.removeChildren=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},t.removeElement=function(e){e&&e.parentNode.removeChild(e)},t.htmlStringToNode=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild},t.prepend=function(e,t){e.insertBefore(t,e.firstChild)},t.isElementInDom=function(e){return e.parentNode}},function(e,t,n){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(n(9));e.exports.Special=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();n(10);var r=d(n(12)),a=d(n(13)),o=d(n(14)),s=p(n(15)),c=(p(n(3)),n(7)),l=n(34),u=n(35);function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function d(e){return e&&e.__esModule?e:{default:e}}var h="MegafonPixel",m={},v={},f=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return Object.assign(n.params,e),n.saveParams(),a.default&&e.data&&Object.assign(a.default,e.data),n.params.css?n.loadStyles(n.params.css).then(function(){return n.init()}):n.init(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default),i(t,[{key:"createElements",value:function(){m.q=(0,c.makeElement)("div",h+"-q"),m.qHeader=(0,c.makeElement)("div",h+"-q__header"),m.qTitle=(0,c.makeElement)("div",h+"-q__title",{textContent:"Угадайте, что изображено"}),m.qPages=(0,c.makeElement)("div",h+"-q__pages",{innerHTML:o.default.img}),m.qPagesText=(0,c.makeElement)("span"),m.qFigure=(0,c.makeElement)("div",h+"-q__figure"),m.qFigureBound=(0,c.makeElement)("div",h+"-bound",{innerHTML:"<span></span><span></span><span></span><span></span>"}),m.qFigureImg=(0,c.makeElement)("img",h+"-q__figure-img"),m.qOptions=(0,c.makeElement)("div",h+"-q__options"),m.qAnswer=(0,c.makeElement)("div",h+"-q__answer"),m.qAnswerTitle=(0,c.makeElement)("div",h+"-q__answer-title"),m.qAnswerText=(0,c.makeElement)("div",h+"-q__answer-text"),m.qBtn=(0,c.makeElement)("div",h+"-q__next-btn"),m.qNextBtn=(0,c.makeElement)("button",h+"-btn",{innerHTML:'<span class="'+h+'-btn__icon">'+o.default.arrow+"</span>",data:{caption:"Продолжить",click:"continue"}}),m.qResultBtn=(0,c.makeElement)("button",h+"-btn",{innerHTML:'<span class="'+h+'-btn__icon">'+o.default.arrow+"</span>",data:{caption:"Результат",click:"showResult"}}),m.result=(0,c.makeElement)("div",h+"-result"),m.rBody=(0,c.makeElement)("div",h+"-result__body"),m.rFigure=(0,c.makeElement)("div",h+"-result__figure"),m.rBound=(0,c.makeElement)("div",h+"-bound",{innerHTML:"<span></span><span></span><span></span><span></span>"}),m.rFigureInner=(0,c.makeElement)("div",h+"-result__figure-inner"),m.rHeadline=(0,c.makeElement)("div",h+"-result__headline"),m.rTitle=(0,c.makeElement)("div",h+"-result__title"),m.rImg=(0,c.makeElement)("img",h+"-result__img"),m.rFigureBottom=(0,c.makeElement)("div",h+"-result__figure-bottom"),m.rShare=(0,c.makeElement)("div",h+"-result__share"),m.rRestartBtn=(0,c.makeElement)("div",h+"-result__restart-btn",{innerHTML:"<span>Пройти еще раз</span>"+o.default.refresh,data:{click:"restart"}}),m.rBottom=(0,c.makeElement)("div",h+"-result__bottom"),m.rText=(0,c.makeElement)("div",h+"-result__text",{innerHTML:"<p>С мобильным интернетом от «МегаФона» не придётся угадывать, что изображено на картинке — всё загрузится быстро. Доказано измерениями миллионов пользователей в Speedtest.</p>"}),m.rBtn=(0,c.makeElement)("div",h+"-result__btn",{innerHTML:'<a href="#" class="MegafonPixel-btn" data-caption="Подкючить"></a>'}),m.rFigureBottom.appendChild(m.rShare),m.rFigureBottom.appendChild(m.rRestartBtn),m.rFigureInner.appendChild(m.rHeadline),m.rFigureInner.appendChild(m.rTitle),m.rFigureInner.appendChild(m.rImg),m.rFigureInner.appendChild(m.rFigureBottom),m.rFigure.appendChild(m.rBound),m.rFigure.appendChild(m.rFigureInner),m.rBody.appendChild(m.rFigure),m.rBottom.appendChild(m.rText),m.rBottom.appendChild(m.rBtn),m.result.appendChild(m.rBody),m.result.appendChild(m.rBottom),m.qPages.appendChild(m.qPagesText),m.qHeader.appendChild(m.qTitle),m.qHeader.appendChild(m.qPages),m.qFigure.appendChild(m.qFigureBound),m.qFigure.appendChild(m.qFigureImg),m.qBtn.appendChild(m.qNextBtn),m.qAnswer.appendChild(m.qAnswerTitle),m.qAnswer.appendChild(m.qAnswerText),m.qAnswer.appendChild(m.qBtn),m.q.appendChild(m.qHeader),m.q.appendChild(m.qFigure),m.q.appendChild(m.qOptions)}},{key:"getResult",value:function(e){var t="";return a.default.results.some(function(n){if(n.range[0]<=e&&n.range[1]>=e)return t=n,!0}),t}},{key:"storeImages",value:function(e){var t=void 0;e.forEach(function(e,n){v[n]=[],e.images.forEach(function(e,i){(t=document.createElement("img")).src=e.img,t.srcset=e.img2x+" 2x",v[n][i]={img:t}})})}},{key:"setImage",value:function(e){m.qFigureImg.src=e.img,m.qFigureImg.srcset=e.img2x+" 2x"}},{key:"setPages",value:function(){m.qPagesText.textContent=this.activeIndex+1+"/"+a.default.questions.length}},{key:"makeOptions",value:function(e){(0,c.removeChildren)(m.qOptions),e=e.map(function(e,t){return e.id=t,e}),(0,l.shuffle)(e),e.forEach(function(e){var t=(0,c.makeElement)("div",h+"-q__options-item"),n=(0,c.makeElement)("button",h+"-btn",{data:{id:e.id,caption:e.text,click:"checkAnswer"}});t.appendChild(n),m.qOptions.appendChild(t)})}},{key:"makeNextQuestion",value:function(){var e=a.default.questions[this.activeIndex];this.setImage(e.images[0]),this.makeOptions(e.options),this.setPages()}},{key:"checkAnswer",value:function(e,t){if(!e.dataset.answered){var n=e.dataset.id,i=a.default.questions[this.activeIndex];this.currentAttempts++,i.options[n].isCorrect?1===this.currentAttempts?(this.correctAnswers++,this.showAnswer(!0)):this.showAnswer(void 0):(e.dataset.answered=!0,e.classList.add("is-wrong"),this.setImage(i.images[this.currentAttempts]),this.currentAttempts>2&&this.showAnswer(!1))}}},{key:"showAnswer",value:function(e){var t=a.default.questions[this.activeIndex];this.setImage(t.images[3]),m.q.removeChild(m.qOptions),m.q.appendChild(m.qAnswer),m.qAnswerTitle.textContent=void 0===e?"С первого раза не угадали.":e?"Правильно!":"Неправильно.",e?m.qAnswerTitle.classList.add(h+"-q__answer--correct"):m.qAnswerTitle.classList.remove(h+"-q__answer--correct"),m.qAnswerText.innerHTML=t.msg,this.activeIndex>=a.default.questions.length-1&&(m.qBtn.removeChild(m.qNextBtn),m.qBtn.appendChild(m.qResultBtn))}},{key:"continue",value:function(){this.currentAttempts=0,this.activeIndex++,m.q.removeChild(m.qAnswer),m.q.appendChild(m.qOptions),this.makeNextQuestion()}},{key:"showResult",value:function(){var e=this.getResult(this.correctAnswers);(0,c.removeChildren)(this.container),this.container.appendChild(m.result),m.rHeadline.innerHTML=this.correctAnswers+" из "+a.default.questions.length+" изображений с&nbsp;первого раза",m.rTitle.innerHTML=e.text,m.rImg.classList="",m.rImg.classList.add(h+"-result__img"),m.rImg.classList.add(h+"-result__img--"+e.index),m.rImg.src=e.img,m.rImg.srcset=e.img2x+" 2x",(0,c.removeChildren)(m.rShare),s.make(m.rShare,{})}},{key:"restart",value:function(){this.setInitialParamas(),(0,c.removeChildren)(this.container),this.container.appendChild(m.q),m.q.removeChild(m.qAnswer),m.q.appendChild(m.qOptions),m.qBtn.removeChild(m.qResultBtn),m.qBtn.appendChild(m.qNextBtn),this.makeNextQuestion()}},{key:"start",value:function(){(0,c.removeChildren)(this.container),this.container.appendChild(m.q),this.container.classList.add(h+"--q"),(0,u.animate)(m.qHeader,"fadeInDown","200ms","200ms"),(0,u.animate)(m.qFigure,"fadeInDown","400ms"),(0,u.animate)(m.qOptions,"fadeInUp","400ms"),this.makeNextQuestion()}},{key:"setInitialParamas",value:function(){this.activeIndex=0,this.correctAnswers=0,this.currentAttempts=0}},{key:"init",value:function(){var e=this;this.setInitialParamas(),this.createElements(),this.storeImages(a.default.questions),this.params.startBtn&&this.params.startBtn.addEventListener("click",function(){e.start()},{once:!0})}}]),t}();t.default=f},function(e,t,n){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(5)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(3));var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keyCodes={enter:13},this.params={container:document.body},r.default.sendPageView&&a.sendPageView()}return i(e,[{key:"saveParams",value:function(){Object.assign(this.params,r.default),this.container=this.params.container,this.addEventListeners()}},{key:"loadStyles",value:function(e){return new Promise(function(t,n){var i=document.createElement("link");i.rel="stylesheet",i.href=e,i.onload=function(){return t()},i.onerror=function(){return n()},document.body.appendChild(i)})}},{key:"addEventListeners",value:function(){var e=this;this.params.listenedEvents.forEach(function(t){e.container.addEventListener(t,function(n){return e.defaultEventHandler(n,t)})})}},{key:"defaultEventHandler",value:function(e,t){for(var n=e.target,i=void 0;n.parentNode&&n!==e.currentTarget&&(i=n.dataset[t],"click"===t&&"a"===n.tagName.toLowerCase()&&a.sendEvent(n.href),!i);)n=n.parentNode;(i=n.dataset[t])&&this[i]&&this[i](e.target,e)}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={title:"Картинка не загрузилась",description:"Угадайте, что изображено на пиксельном изображении",questions:[{title:"",msg:"Это зелёный лого «Мегафона»",images:[{img:"img/q/1/1.png",img2x:"img/q/1/1.png"},{img:"img/q/1/2.png",img2x:"img/q/1/2.png"},{img:"img/q/1/3.png",img2x:"img/q/1/3.png"},{img:"img/q/1/4.png",img2x:"img/q/1/4.png"}],options:[{text:"Зелёный лого «Мегафона»",isCorrect:!0},{text:"Whats App"},{text:"Деливери"},{text:"Старбакс"}]},{title:"",msg:"Это Лада",images:[{img:"img/q/2/1.png",img2x:"img/q/2/1.png"},{img:"img/q/2/2.png",img2x:"img/q/2/2.png"},{img:"img/q/2/3.png",img2x:"img/q/2/3.png"},{img:"img/q/2/4.png",img2x:"img/q/2/4.png"}],options:[{text:"Лада",isCorrect:!0},{text:"BMW"},{text:"Audi"},{text:"Jaguar"}]},{title:"",msg:"Это купюра 10 рублей",images:[{img:"img/q/3/1.png",img2x:"img/q/3/1.png"},{img:"img/q/3/2.png",img2x:"img/q/3/2.png"},{img:"img/q/3/3.png",img2x:"img/q/3/3.png"},{img:"img/q/3/4.png",img2x:"img/q/3/4.png"}],options:[{text:"100 долларов"},{text:"200 шекелей"},{text:"100 рублей"},{text:"10 рублей",isCorrect:!0}]},{title:"Кто изображен на картинке?",msg:"Это Павел Дуров с голым торсом.",images:[{img:"img/q/10/1.jpg",img2x:"img/q/10/1@2x.jpg"},{img:"img/q/10/2.jpg",img2x:"img/q/10/2@2x.jpg"},{img:"img/q/10/3.jpg",img2x:"img/q/10/3@2x.jpg"},{img:"img/q/10/4.jpg",img2x:"img/q/10/4@2x.jpg"}],options:[{text:"Лысый из Brazzers"},{text:"Лысая собака"},{text:"Дуров с голым торсом",isCorrect:!0},{text:"Коленка"}]}],results:[{index:1,range:[0,3],text:"Эти три пикселя — нос?",img:"img/result/3.jpg",img2x:"img/result/3@2x.jpg"},{index:2,range:[4,7],text:"Догружаю картинки в&nbsp;голове",img:"img/result/2.jpg",img2x:"img/result/2@2x.jpg"},{index:3,range:[8,10],text:"Статус: Растрамен",img:"img/result/3.jpg",img2x:"img/result/3@2x.jpg"}]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={logo:'<svg width="160" height="29"><path d="M16 .05v14.66a1.14 1.14 0 0 1-1.18 1.13h-1.74a.17.17 0 0 0-.16.16v12.31c.42 0 .84.11 1.32.11A14.24 14.24 0 0 0 16 .05zm-.34 21.94a1.74 1.74 0 1 1 1.74-1.74 1.66 1.66 0 0 1-1.74 1.74zm4.17 0a1.74 1.74 0 1 1 1.74-1.74 1.72 1.72 0 0 1-1.74 1.74zm6-1.74A1.74 1.74 0 1 1 24 18.51a1.75 1.75 0 0 1 1.78 1.74z"/><path d="M14.18 13.97l.05-14A14.24 14.24 0 0 0 0 14.24 14.06 14.06 0 0 0 11.23 28.1V15.29a1.29 1.29 0 0 1 1.05-1.16H14a.17.17 0 0 0 .18-.16zm-2.69-2.27a1.74 1.74 0 1 1 1.74-1.74 1.79 1.79 0 0 1-1.74 1.75zM156.76 7.75v5.38h-7.17V7.75h-3.64v14.24h3.64v-5.75h7.17v5.75h3.53V7.75h-3.53zM94.59 7.43a3.16 3.16 0 0 0-2.9 2l-5.74 12.61h3.8l1.27-3h7.38l1.27 3h3.8l-6-12.65a3.22 3.22 0 0 0-2.88-1.96zM92 16.19l2.16-5.22a.25.25 0 0 1 .27-.13c.11 0 .26 0 .26.16l2.16 5.22H92zM55.1 5.22c-1.69 0-2.74.9-3.53 2.69L47 18.61 42.34 7.84c-.74-1.74-1.85-2.69-3.53-2.69s-3.16 1.05-3.16 3.53v13.25h3.53V9.17l4.69 10.6A3.32 3.32 0 0 0 47 22.2a3.23 3.23 0 0 0 3.11-2.43l4.69-10.6v12.92h3.53V8.84c-.07-2.46-1.65-3.62-3.23-3.62zM60.69 9.75v10a2.15 2.15 0 0 0 2.11 2.09h10.54v-3h-8.8V19a.4.4 0 0 1-.37-.37v-2.55H73v-2.9h-8.83v-2.16a.4.4 0 0 1 .37-.37h8.81v-3H62.8a2.08 2.08 0 0 0-2.11 2.1zM88.48 7.75H77.93a2.08 2.08 0 0 0-2.11 2.09v12.09l3.48.05V11.13a.4.4 0 0 1 .37-.37h8.81v-3zM136.09 7.65h-1.27c-5.38 0-7.54 2.37-7.54 7.28s2.16 7.28 7.54 7.28H136c5.48-.11 7.65-2.43 7.65-7.28s-2.18-7.28-7.56-7.28zM136 19.19h-1.16c-2.9 0-4.11-1.32-4.11-4.27s1-4.27 4.11-4.27H136c3 0 4.11 1.42 4.11 4.27S139 19.19 136 19.19zM117.42 5.54h-7.07c-5.26 0-7.35 2.69-7.35 7.3 0 .74.11 1.42.16 2 .58 3.27 2.53 5.27 7.43 5.27h1.58v1.85h3.53v-1.87h1.53c5 0 6.91-2 7.43-5.27a11.44 11.44 0 0 0 .16-2c-.07-4.59-2.23-7.28-7.4-7.28zm-5.32 11.6h-1.63c-2.43 0-3.27-.9-3.8-2.37a7.72 7.72 0 0 1-.16-2c0-3 1.42-4.27 3.43-4.27h2.16v8.64zm9-2.21c-.53 1.42-1.42 2.37-3.8 2.37h-1.58V8.59h2.16c2 0 3.43 1.27 3.43 4.27a11.76 11.76 0 0 1-.2 2.06z"/></svg>',img:'<svg width="23" height="18"><path d="M21.97-.02H.35A.35.35 0 0 0 0 .36v16.9a.35.35 0 0 0 .35.35h21.62a.35.35 0 0 0 .35-.35V.36a.35.35 0 0 0-.35-.38zM20.2 14.79l-4.86-5a.14.14 0 0 0-.2 0l-3.37 3L7.5 7.41a.14.14 0 0 0-.12-.05.14.14 0 0 0-.11.06l-5.1 6.85V2.13H20.2v12.66z"/><circle cx="14.86" cy="5.5" r="1.74"/></svg>',arrow:'<svg width="28" height="16"><path d="M23.463 9l-5.645 5.269 1.364 1.462L27.466 8 19.182.269 17.818 1.73 23.463 7H.48v2h22.983z"/></svg>',refresh:'<svg width="15" height="15"><path d="M14.62.674c-.268-.11-.495-.065-.684.136l-1.27 1.26A7.58 7.58 0 0 0 10.278.542 7.357 7.357 0 0 0 7.5 0a7.298 7.298 0 0 0-2.91.596 7.565 7.565 0 0 0-2.393 1.601A7.567 7.567 0 0 0 .596 4.59 7.298 7.298 0 0 0 0 7.5c0 1.015.199 1.986.596 2.91a7.567 7.567 0 0 0 1.601 2.393 7.57 7.57 0 0 0 2.393 1.601A7.298 7.298 0 0 0 7.5 15c1.12 0 2.185-.236 3.194-.708a7.333 7.333 0 0 0 2.578-1.997.32.32 0 0 0 .073-.22.27.27 0 0 0-.093-.2l-1.338-1.348a.376.376 0 0 0-.244-.087c-.104.013-.179.052-.224.117a4.904 4.904 0 0 1-1.748 1.436A4.925 4.925 0 0 1 7.5 12.5a4.87 4.87 0 0 1-1.938-.395 5.034 5.034 0 0 1-1.597-1.07A5.038 5.038 0 0 1 2.896 9.44 4.87 4.87 0 0 1 2.5 7.5c0-.677.132-1.323.396-1.938a5.036 5.036 0 0 1 1.07-1.597c.449-.45.98-.806 1.596-1.07A4.87 4.87 0 0 1 7.5 2.5c1.309 0 2.445.446 3.409 1.338L9.56 5.186c-.202.195-.248.42-.137.674.11.26.303.39.576.39h4.375a.6.6 0 0 0 .44-.185.6.6 0 0 0 .185-.44V1.25a.584.584 0 0 0-.38-.576z"/></svg>'}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.make=t.init=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n(16)),r=n(7),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(3));var o="likely",s="likely--custom",c=t.init=function(){i.default.initate()};t.make=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r.makeElement)("div",[o,s]);["facebook","vkontakte","twitter"].forEach(function(e){var t=(0,r.makeElement)("div",e);"facebook"===e&&(t.innerHTML="Поделиться"),t.addEventListener("click",function(){a.sendEvent("Share "+e)}),n.appendChild(t)}),e.appendChild(n),t.url&&(n.dataset.url=t.url),t.twitter&&(n.dataset.twitter=t.twitter),t.title&&(n.dataset.title=t.title),c()}},function(e,t,n){var i=n(17),r=n(0),a=n(2),o=n(1),s=function(e,t){t=t||{};var n=e[r.name];return n?n.update(t):e[r.name]=new i(e,a.merge({},s.defaults,t,a.bools(e))),n};s.initiate=s.initate=function(){var e=o.findAll("."+r.name);a.toArray(e).forEach(s)},s.defaults={counters:!0,timeout:1e3,zeroes:!1,title:document.title,wait:500,url:window.location.href.replace(window.location.hash,"")},e.exports=s},function(e,t,n){var i=n(18),r=(n(4),n(0)),a=n(2),o=n(1),s=n(6);function c(e,t){this.isSmartOrder=void 0!==e.dataset.smart,this.container=e,this.options=t,this.countersLeft=0,this.buttons=[],this.number=0,this.init()}c.prototype={reorder:function(e){var t=s.getItem(r.storageKey);t&&(t.reverse(),t.forEach(function(e){var t=o.find("."+e);t&&t.parentNode.insertBefore(t,t.parentNode.firstChild)}))},init:function(){var e=a.toArray(this.container.children);o.isMobile()&&this.isSmartOrder&&this.reorder(e),e.forEach(this.addButton.bind(this)),this.options.counters?(this.timer=setTimeout(this.appear.bind(this),this.options.wait),this.timeout=setTimeout(this.ready.bind(this),this.options.timeout)):this.appear(),a.flexboxSupport(this.container,r.name)},addButton:function(e){var t=new i(e,this,this.options);this.buttons.push(t),t.options.counterUrl&&this.countersLeft++},update:function(e){(e.forceUpdate||e.url!==this.options.url)&&(this.countersLeft=this.buttons.length,this.number=0,this.buttons.forEach(function(t){t.update(e)}))},updateCounter:function(e,t){t&&(this.number+=t),this.countersLeft--,0===this.countersLeft&&(this.appear(),this.ready())},appear:function(){this.container.classList.add(r.name+"--visible")},ready:function(){this.timeout&&(clearTimeout(this.timeout),this.container.classList.add(r.name+"--ready"))}},e.exports=c},function(e,t,n){var i=n(4),r=n(0),a=n(32),o=n(2),s=n(1),c=n(6),l='<span class="{className}">{content}</span>';function u(e,t,n){this.widget=e,this.likely=t,this.options=o.merge(n),this.init()}u.prototype={init:function(){this.detectService(),this.detectParams(),this.service&&(this.initHtml(),setTimeout(this.initCounter.bind(this),0))},update:function(e){var t="."+r.prefix+"counter";counters=s.findAll(t,this.widget),o.extend(this.options,o.merge({forceUpdate:!1},e)),o.toArray(counters).forEach(function(e){e.parentNode.removeChild(e)}),this.initCounter()},detectService:function(){var e=this.widget,t=o.getDataset(e).service;if(!t){for(var n=e.className.split(" "),r=0;r<n.length&&!(n[r]in i);r++);t=n[r]}t&&(this.service=t,o.extend(this.options,i[t]))},detectParams:function(){var e=this.options,t=o.getDataset(this.widget);if(t.counter){var n=parseInt(t.counter,10);isNaN(n)?e.counterUrl=t.counter:e.counterNumber=n}e.title=t.title||e.title,e.url=t.url||e.url},initHtml:function(){var e=this.options,t=this.widget,n=t.innerHTML;t.addEventListener("click",this.click.bind(this)),t.classList.remove(this.service),t.className+=" "+this.className("widget");var i=o.template(l,{className:this.className("button"),content:n}),r=o.template(l,{className:this.className("icon"),content:s.wrapSVG(e.svgi)});t.innerHTML=r+i},initCounter:function(){var e=this.options;e.counters&&e.counterNumber?this.updateCounter(e.counterNumber):e.counterUrl&&a(this.service,e.url,e)(this.updateCounter.bind(this))},className:function(e){var t=r.prefix+e;return t+" "+t+"--"+this.service},updateCounter:function(e){e=parseInt(e,10)||0;var t=s.find("."+r.name+"__counter",this.widget);t&&t.parentNode.removeChild(t);var n={className:this.className("counter"),content:e};e||this.options.zeroes||(n.className+=" "+r.prefix+"counter--empty",n.content=""),this.widget.appendChild(s.createNode(o.template(l,n))),this.likely.updateCounter(this.service,e)},click:function(){var e=this.options;if("more"==this.service)this.widget.classList.toggle("active"),this.widget.parentElement.classList.toggle(this.options.className);else if("email"==this.service){var t=o.makeUrl(e.popupUrl,{url:e.url,title:e.title});window.location=t,this.rememberClicked(this.service)}else if(e.click.call(this)){var n=this.likely.container.dataset.twitter,i=this.likely.container.dataset.twitterUrl,a=o.makeUrl(e.popupUrl,{url:"twitter"===this.service&&""!==i&&void 0!==i?i:e.url,title:"twitter"===this.service&&""!==n&&void 0!==n?n:e.title});s.openPopup(this.addAdditionalParamsToUrl(a),r.prefix+this.service,e.popupWidth,e.popupHeight),this.rememberClicked(this.service)}return!1},addAdditionalParamsToUrl:function(e){var t=o.query(o.merge(this.widget.dataset,this.options.data)),n=-1===e.indexOf("?")?"?":"&";return""===t?e:e+n+t},rememberClicked:function(e){var t=c.getItem(r.storageKey)||[],n=t.indexOf(e);-1!==n&&t.splice(n,1),t.splice(0,0,e),c.setItem(r.storageKey,t)}},e.exports=u},function(e,t,n){var i=n(1),r=function(e,t){var n=this;i.getJSON(e,function(e){try{"function"==typeof n.convertNumber&&(e=n.convertNumber(e)),t(e)}catch(e){}})};e.exports=function(e){e.counter=e.counter||r,e.click=e.click||function(){return!0}}},function(e){e.exports={facebook:"5.9 16h3.3V8h2.2l.3-2.8H9.2V3.8c0-.7.1-1.1 1.1-1.1h1.4V0H9.5C6.9 0 5.9 1.3 5.9 3.6v1.7H4.3V8H6v8",twitter:"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353",vkontakte:"15.4 12.8h-1.8c-.7 0-.9-.5-2.1-1.7-1-1-1.5-1.1-1.7-1.1-.4 0-.5.1-.5.6v1.6c0 .4-.1.7-1.3.7-1.9 0-3.9-1.1-5.3-3.2C.6 6.5 0 4.2 0 3.7c0-.3.1-.5.6-.5h1.8c.4 0 .6.2.8.7C4 6.4 5.4 8.6 6 8.6c.2 0 .3-.1.3-.7V5.4c0-1.2-.6-1.3-.6-1.7 0-.2.2-.4.4-.4h2.8c.4 0 .5.2.5.6v3.5c0 .4.2.5.3.5.2 0 .4-.1.8-.5 1.3-1.4 2.2-3.6 2.2-3.6.1-.3.3-.5.8-.5h1.8c.5 0 .6.3.5.6-.2 1-2.4 4-2.4 4-.2.3-.3.4 0 .8.2.3.8.8 1.2 1.3.8.8 1.3 1.6 1.5 2.1 0 .4-.2.7-.7.7",gplus:"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8",odnoklassniki:"8 2.6c.9 0 1.7.7 1.7 1.7C9.7 5.2 9 6 8 6c-.9 0-1.7-.7-1.7-1.7S7.1 2.6 8 2.6zm0 5.7c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm1.6 3.2c.8-.2 1.6-.5 2.3-1 .5-.3.7-1.1.4-1.6-.3-.6-1.1-.7-1.6-.4-1.6 1-3.8 1-5.4 0-.6-.3-1.3-.1-1.6.4-.4.6-.2 1.3.3 1.7.7.5 1.5.8 2.3 1l-2.2 2.2c-.5.5-.5 1.2 0 1.7.2.2.5.3.8.3.3 0 .6-.1.8-.3L8 13.2l2.2 2.2c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-2.3-2.2",pocket:"12.533 6.864L8.77 10.4c-.213.2-.486.3-.76.3-.273 0-.547-.1-.76-.3L3.488 6.865c-.437-.41-.45-1.09-.032-1.52.42-.428 1.114-.443 1.55-.032l3.006 2.823 3.004-2.823c.438-.41 1.132-.396 1.55.032.42.43.406 1.11-.03 1.52zm3.388-4.928c-.207-.56-.755-.936-1.363-.936H1.45C.854 1 .31 1.368.096 1.917.032 2.08 0 2.25 0 2.422v4.73l.055.94c.232 2.14 1.366 4.01 3.12 5.314.03.024.063.047.094.07l.02.013c.94.673 1.992 1.13 3.128 1.353.524.104 1.06.157 1.592.157.492 0 .986-.045 1.472-.133.058-.01.116-.022.175-.034.016-.003.033-.01.05-.018 1.088-.233 2.098-.677 3.003-1.326l.02-.015c.032-.022.064-.045.096-.07 1.753-1.303 2.887-3.173 3.12-5.312l.054-.94v-4.73c0-.165-.02-.327-.08-.487",telegram:"12.4 4.2L6.6 9.6c-.2.2-.3.4-.4.7L6 11.8c0 .2-.3.2-.3 0l-.8-2.6c-.1-.4.1-.7.3-.8l7-4.3c.2-.2.4 0 .2.1zm2.9-3L.5 6.9c-.4.1-.4.7 0 .8L4.1 9l1.4 4.5c.1.3.4.4.7.2l2-1.6c.2-.2.5-.2.7 0l3.6 2.6c.3.2.6 0 .7-.3l2.6-12.8c.1-.2-.2-.5-.5-.4",whatsapp:"15.8 7.8c0 4.2-3.4 7.6-7.6 7.6-1.3 0-2.6-.3-3.7-.9L.3 15.8l1.4-4.1C1 10.6.6 9.2.6 7.8.6 3.6 4 .2 8.2.2c4.2 0 7.6 3.4 7.6 7.6M8.1 1.4c-3.5 0-6.4 2.9-6.4 6.4 0 1.4.5 2.7 1.2 3.7l-.8 2.4 2.5-.8c1 .7 2.2 1.1 3.5 1.1 3.5 0 6.4-2.9 6.4-6.4.1-3.5-2.8-6.4-6.4-6.4M12 9.5c0-.1-.2-.1-.4-.2s-1.1-.5-1.3-.6c-.2-.1-.3-.1-.4.1-.1.2-.4.6-.6.7-.1.1-.2.1-.4 0-.1 0-.8-.2-1.5-.8-.6-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.2 0-.3-.1-.4 0-.1-.4-1-.6-1.4-.1-.3-.3-.2-.4-.2h-.4c-.1 0-.3 0-.5.2-.1.2-.6.6-.6 1.5s.7 1.8.8 1.9c.1.1 1.3 2.1 3.2 2.8 1.9.7 1.9.5 2.2.5.3 0 1.1-.4 1.3-.9.1-.4.1-.8.1-.9",viber:"13.7 6.7c0 .3.1.7-.3.8-.6.1-.5-.4-.5-.8-.4-2.3-1.2-3.2-3.5-3.7-.4-.1-.9 0-.8-.5.1-.5.5-.4.9-.3 2.3.3 4.2 2.3 4.2 4.5zM8.8 1.2c3.7.6 5.5 2.4 5.9 6.1 0 .3-.1.9.4.9s.4-.5.4-.9c0-3.6-3.1-6.8-6.7-7-.2.1-.8-.1-.8.5 0 .4.4.3.8.4zm5.7 10.2c-.5-.4-1-.7-1.5-1.1-1-.7-1.9-.7-2.6.4-.4.6-1 .6-1.6.4-1.7-.8-2.9-1.9-3.7-3.6-.3-.7-.3-1.4.5-1.9.4-.3.8-.6.8-1.2 0-.8-2-3.5-2.7-3.7-.3-.1-.6-.1-1 0C.9 1.2.2 2.7.9 4.4c2.1 5.2 5.8 8.8 11 11 .3.1.6.2.8.2 1.2 0 2.5-1.1 2.9-2.2.3-1-.5-1.5-1.1-2zM9.7 4c-.2 0-.5 0-.6.3-.1.4.2.5.5.5.9.2 1.4.7 1.5 1.7 0 .3.2.5.4.4.3 0 .4-.3.4-.6 0-1.1-1.2-2.3-2.2-2.3",email:"12.7 1c1 .5 1.8 1.2 2.3 2.2.5.9.8 1.9.8 3.1 0 .9-.1 1.8-.5 2.7-.3.9-.8 1.6-1.4 2.2-.6.6-1.4.9-2.3.9-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.7-.7-1.2-.6 1.1-1.5 1.6-2.5 1.6-.8 0-1.5-.3-1.9-.8-.5-.6-.7-1.3-.7-2.2 0-.8.1-1.6.4-2.5S5.5 5 6.1 4.4c.7-.6 1.5-.8 2.6-.8.5 0 1 .1 1.4.2.5.1.9.3 1.3.6l-.7 4.9v.3c0 .2 0 .4.1.5.1.1.3.2.5.2.4 0 .8-.2 1.1-.7.3-.4.5-1 .7-1.6.1-.7.2-1.3.2-1.9 0-1.3-.4-2.3-1.1-3-.8-.7-1.9-1-3.4-1s-2.7.4-3.7 1.1c-.9.7-1.6 1.6-2 2.6S2.6 7.9 2.6 9c0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.7.6 2.7.6.5 0 1-.1 1.6-.2.6-.1 1.1-.3 1.5-.4l.4 1.9c-.6.2-1.2.4-1.8.5-.7.1-1.3.2-1.9.2-1.4 0-2.7-.3-3.8-.9s-1.9-1.4-2.5-2.4S.2 10.3.2 9c0-1.3.3-2.7 1-4 .6-1.4 1.6-2.5 3-3.4C5.5.7 7.2.2 9.2.2c1.3 0 2.5.3 3.5.8zm-4 8.4l.6-3.9c-.3-.1-.5-.2-.7-.2-.7 0-1.2.4-1.5 1.2-.3.8-.5 1.7-.5 2.6 0 .8.3 1.2.8 1.2s.9-.3 1.3-.9",more:"14.725 6.667H9.333V1.275C9.333.57 8.738 0 8 0S6.667.57 6.667 1.275v5.392H1.275C.57 6.667 0 7.262 0 8s.57 1.334 1.275 1.334h5.392v5.393C6.667 15.43 7.262 16 8 16s1.333-.57 1.333-1.273V9.334h5.392C15.43 9.334 16 8.738 16 8s-.57-1.333-1.275-1.333"}},function(e,t,n){var i=n(0),r=n(2),a=n(1),o={counterUrl:i.secure?void 0:"http://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",counter:function(e,t){this.promises.push(t),a.getScript(r.makeUrl(e,{index:this.promises.length-1}))},promises:[],popupUrl:"http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",popupWidth:640,popupHeight:400};r.set(window,"ODKL.updateCount",function(e,t){o.promises[e](t)}),e.exports=o},function(e,t,n){var i=n(0),r=n(2),a=n(1),o={counterUrl:"https://vk.com/share.php?act=count&url={url}&index={index}",counter:function(e,t){this.promises.push(t),a.getScript(r.makeUrl(e,{index:this.promises.length-1}))},promises:[],popupUrl:i.protocol+"//vk.com/share.php?url={url}&title={title}",popupWidth:550,popupHeight:330};r.set(window,"VK.Share.count",function(e,t){o.promises[e](t)}),e.exports=o},function(e,t){e.exports={counterUrl:"https://graph.facebook.com/?fields=share,og_object{likes.limit(0).summary(true),comments.limit(0).summary(true)}&id={url}&callback=?",convertNumber:function(e){return e.share.share_count},popupUrl:"https://www.facebook.com/sharer/sharer.php?u={url}",popupWidth:600,popupHeight:500}},function(e,t,n){var i={popupUrl:n(0).protocol+"//twitter.com/intent/tweet?url={url}&text={title}",popupWidth:600,popupHeight:450,click:function(){return/[\.\?:\-–—]\s*$/.test(this.options.title)||(this.options.title+=":"),!0}};e.exports=i},function(e,t,n){n(0),n(2),n(1);e.exports={gid:0,promises:{},popupUrl:"https://plus.google.com/share?url={url}",popupWidth:700,popupHeight:500}},function(e,t,n){var i={popupUrl:n(0).protocol+"//getpocket.com/save?url={url}&format=json&callback=?",popupWidth:600,popupHeight:300};e.exports=i},function(e,t){e.exports={popupUrl:"tg://msg?text={title}%0A{url}",popupWidth:600,popupHeight:450}},function(e,t){e.exports={popupUrl:"whatsapp://send?text={title}%0A{url}",popupWidth:600,popupHeight:450}},function(e,t){e.exports={popupUrl:"viber://forward?text={title}%0A{url}",popupWidth:600,popupHeight:450}},function(e,t,n){n(0);e.exports={popupUrl:"mailto:?subject={title}&body={url}",popupWidth:0,popupHeight:0}},function(e,t,n){var i=n(0);e.exports={parent:i.name,className:i.name+"--expanded"}},function(e,t,n){var i=n(4),r=n(33),a=n(2),o=(n(1),{});e.exports=function(e,t,n){o[e]||(o[e]={});var s=o[e],c=s[t];if(!n.forceUpdate&&c)return c;c=r();var l=a.makeUrl(n.counterUrl,{url:t});return i[e].counter(l,c,t),s[t]=c,s[t]}},function(e,t){e.exports=function(e){var t=[];return function(n){var i=typeof n;if("undefined"==i)return e;"function"==i?t.push(n):(e=n,t.forEach(function(e){e(n)}))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getMostFrequentValue=function(e){var t=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e));return t.sort(function(e,n){return t.filter(function(t){return t===e}).length-t.filter(function(e){return e===n}).length}).pop()},t.shuffle=function(e){var t=void 0,n=void 0,i=void 0;for(i=e.length-1;i>0;i--)t=Math.floor(Math.random()*(i+1)),n=e[i],e[i]=e[t],e[t]=n},t.toArray=function(e){return Array.prototype.slice.call(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animate=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise(function(r,a){!function(e,t,n){t=t.split(" ");for(var i=function(i){e.addEventListener(t[i],function e(i){for(var r=0;r<t.length;r++)i.currentTarget.removeEventListener(t[r],e);return n(i)},!1)},r=0;r<t.length;r++)i(r)}(e,"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n&&(e.style.animationDuration=""),i&&(e.style.animationDelay=""),e.classList.remove(t),e.classList.remove("animated"),r()}),n&&(e.style.animationDuration=n),i&&(e.style.animationDelay=i),e.classList.add(t),e.classList.add("animated")})},t.requestAnimate=function(e){var t=performance.now();requestAnimationFrame(function n(i){var r=(i-t)/e.duration;r>1&&(r=1);var a=e.timing(r);e.draw(a),r<1&&requestAnimationFrame(n)})}}]);
//# sourceMappingURL=all.js.map