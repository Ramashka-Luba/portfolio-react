(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{100:function(e,t,a){e.exports={titleH2:"TitleH2_titleH2__3EdBG"}},101:function(e,t,a){e.exports={titleH3:"TitleH3_titleH3__2XQtd"}},108:function(e,t,a){},109:function(e,t,a){},12:function(e,t,a){e.exports={about:"About_about__210EY",wrapper:"About_wrapper__dldWC",leftBlog:"About_leftBlog__3k0VR",contentLeftBlog:"About_contentLeftBlog__2T3AQ",titleH3:"About_titleH3__GZFk-",line:"About_line__m80jM",text:"About_text__2PnxG",photo:"About_photo__pJ3-h",photoItem:"About_photoItem__1-oB8",rightBlog:"About_rightBlog__3F9vp",contentRightBlog:"About_contentRightBlog__ibdyH",skillsContainer:"About_skillsContainer__2Sh8_"}},15:function(e,t,a){e.exports={service:"Service_service__3CN6V",blockTop:"Service_blockTop__1K2kc",wrapper:"Service_wrapper__3xQdl",titleH2:"Service_titleH2__2SMLv",serviceContainer:"Service_serviceContainer__1_bTg",content:"Service_content__A5szr",seviceItem:"Service_seviceItem__2XUkc",blockBotton:"Service_blockBotton__2H7KZ",titleH3:"Service_titleH3__aZKUR",btn:"Service_btn__3_WfV"}},17:function(e,t,a){e.exports={portfolio:"Portfolio_portfolio__2-IBK",wrapper:"Portfolio_wrapper__zB79x",leftBlog:"Portfolio_leftBlog__ROeHK",rightBlog:"Portfolio_rightBlog__2_W6M",content:"Portfolio_content__1FcDN"}},18:function(e,t,a){e.exports={contact:"Contact_contact__19fwO",wrapper:"Contact_wrapper__36324",leftBlog:"Contact_leftBlog__2o6h8",particles:"Contact_particles__-_L1s",content:"Contact_content__I2Pd5",form:"Contact_form__2sywW",label:"Contact_label__3Khki",textarea:"Contact_textarea__mnlZ4",rightBlog:"Contact_rightBlog__1mfgu"}},24:function(e,t,a){e.exports={menu:"Menu_menu__PCjGY",menuActive:"Menu_menuActive__2taDT",blur:"Menu_blur__1qQSK",menuContent:"Menu_menuContent__3bTpa",link:"Menu_link__2PXJX"}},29:function(e,t,a){e.exports={portfolioItem:"PortfolioItem_portfolioItem__1-hcQ",link:"PortfolioItem_link__2CMIv",photo:"PortfolioItem_photo__3fJcx",title:"PortfolioItem_title__1r135",text:"PortfolioItem_text__2DwKW"}},31:function(e,t,a){e.exports={progress:"Progress_progress__1tPRa",name:"Progress_name__9o-3W",value:"Progress_value__1jA8Q",skills:"Progress_skills__3sJ8v"}},443:function(e,t,a){"use strict";a.r(t);var s=a(13),c=a.n(s),i=a(44),l=a.n(i),n=(a(108),a(109),a(103)),o=a(65),r=a.n(o),A=a(0),d=function(e){return Object(A.jsx)("button",{className:r.a.button,type:e.type,children:Object(A.jsx)("span",{className:r.a.span,children:e.value})})},j=a(100),m=a.n(j),b=function(e){return Object(A.jsx)("h2",{className:m.a.titleH2,children:e.value})},p=a(101),h=a.n(p),u=function(e){return Object(A.jsx)("h3",{className:h.a.titleH3,children:e.value})},x=a(8),g=a.n(x),v=a.p+"static/media/homePhoto.d9173262.png",O=a(24),f=a.n(O),N=a(64),I=function(e){var t=e.items,a=e.active,s=e.setActive;return Object(A.jsxs)("div",{className:a?"".concat(f.a.menu," ").concat(f.a.menuActive):f.a.menu,onClick:function(){return s(!1)},children:[Object(A.jsx)("div",{className:f.a.blur}),Object(A.jsx)("div",{className:f.a.menuContent,children:Object(A.jsx)("ul",{children:t.map((function(e){return Object(A.jsx)("li",{children:Object(A.jsx)(N.Link,{className:f.a.link,to:e.href,spy:!0,smooth:!0,offset:0,duration:500,onSetActive:function(){return s(!1)},children:e.value})})}))})})]})},k=a(28),_=a.n(k),S=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1];return Object(A.jsxs)("section",{className:g.a.home,id:"home",children:[Object(A.jsx)("nav",{children:Object(A.jsx)("div",{className:g.a.burgerBtn,onClick:function(){return c(!a)},children:Object(A.jsx)("span",{})})}),Object(A.jsx)("div",{className:g.a.wrapper,children:Object(A.jsxs)("div",{className:g.a.inner,children:[Object(A.jsxs)("div",{className:g.a.content,children:[Object(A.jsxs)("div",{className:g.a.decor,children:[Object(A.jsx)("img",{className:g.a.shape1,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABjBAMAAACfybjfAAAAIVBMVEVHcEzrg/jrg/jrg/jrg/jrg/jrg/jrg/jrg/j8jP/yh/7s78zRAAAACXRSTlMA/DnXml24H3r9dodoAAACaUlEQVRYw+3Yv2/aQBQH8JMdA+tLpFa+iUxVO2WIhJKJ1VuW/mKy1IVsRvwDUaQOdHNiUMt2QQzwV/bhH2fOvsPvdagyxANCwLsPz/b7ckKIt+O/HN+G7JKPmym3ZK4ybklvP+aWBDnS//EzIZd48eHRX/+5uGNR/RuA54RV4qcgR3ktueQeQOXIr+uvxLOGyPvDk0G6S0c8ZAEQ3jERgG3e0pCByByZbaYni84QOS8RWSBSrk/eRri2GpqIgjA+XVIgAXbyu0AAVvlbnx2Xd1YiEzxdDwZytn73aL/0+wJRLSQCuU7s7ZeIaiLVeWnf/i9OpPzKX5p3Ud/VSYUEu/Tack94uHbmQD4B7Cyje4lrj+2IXs2BiFscNhPRq82nH2zIHJ+MHMjNfmVD9ES3ET+VVzYkhfDKhZTfuI1snEhoQzA23J0cI4clM3PYuhC8VsXLeqIRgRcTuTcQvHyZY6I10jMR0duNm7FRTLQTEQM2Ijw24swmN2IJwCUP0cNGRvREe3rYuhHZmOheKkckpH97hCSkTuZ0RBKRiI0corzdyXOJqMQR5SbiV7GBiD1kfXVudJLHRoUMxckor5A6NhxIM8prJHIhzSgnICXV7sSNFMe/IK1OFgRkbCCDDsSMchJipOzrQeooJyPiezkedATDYaV/lGgIRnls7GW7ETFYNVNWdu0yvbiZslvmhpmAtKJc8hGgIcd72SUNieq9bMhEAj4y4SOKiizYSL0rJyO4k+EiVZTjRFORKsovFRkRwRMXKaOcg+hsWvIqXjGy5SMPbCTjI9x/JSI2IiZsRMzYiPBjdonX/ZG/mgcbNOYHdK8AAAAASUVORK5CYII=",alt:"shape"}),Object(A.jsx)("img",{className:g.a.shape2,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdAgMAAAC6H4JQAAAADFBMVEWD8JpHcEyD8JqD8JoNChxMAAAABHRSTlP/AB6Os9fxkwAAAEtJREFUSMdjCIWCGAYQYIRxHRhgrACwBNOoxKjEqASSRNYqCFgAlmCG8lY5MDQw4ACjEqMSFEg4YBc+MJo5RyVGJSiRCAOX3CvhEgANuKaDJ9vR3wAAAABJRU5ErkJggg==",alt:"shape"}),Object(A.jsx)("img",{className:g.a.shape1,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA0BAMAAACOQoCQAAAAIVBMVEVHcEyE8puD8JqD8JqD8JqD8JqD8JqD8JqD8JqD8JqK/aPm99EQAAAACnRSTlMA/hhz0TOVUOq07ha+QQAAAd1JREFUSMfNlr9Lw0AUx8NJmvlAFG8qVMha2iq6+aP4I1OktuCmlhbppKiRrioinayDzgel6P2VJr1L7pLmJXebt3T5vnvv+/L9JLUs4DQt4+Nb//bcmxagFvswq7BvKJ4bVdQ8SmYNk4reBJONW5OKFsHssGpSsUkx/ebzadYhL7bRm+xpNmHcBnogeKbVBk2OfL5mFs9X2uR48eNMKfkZ6M31KGxQwzWPwzW/8fn0loakDWf6rFOh2Oh4lPp6+VptZObTtBHmH9Py4EQyka9wPqyxZkWm5L+qh0lAMFkT863DFZVQJm2I+UI+CfxMR4osyX/UuA42oaqsoROcUSKLMUYlfFZ+s7LS/AdZGyv7YXBE4xe4zo1k1xkbaExIHX4bKbIk/9F8n+WYqPmH+VRkrpQVrdnJlRXlP1fG+eTB/iqwsSNlsnHNY5dpG5KmlCzFZyrQNigD+bwDZDCfdg4m+Xwm54wWyS4keNuyyWAZE4mxwmfyxT0XtEeY5GCc8Bkmdq7+9wBkBXxCMpjPqOnSbYV85t6W4TO+sQrf5ioYq4k9yKFpCeMWoyIRzhVjs0VE43wFhDEpi5/f7nu7zW9EwbDZ3LI6J6/tU97UHfb7fU6T/dTtdsW3IPsa+wM+sgF9jVs4iwAAAABJRU5ErkJggg==",alt:"shape"}),Object(A.jsx)("img",{className:g.a.shape2,src:"data:image/png;base64,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",alt:"shape"}),Object(A.jsx)("img",{className:g.a.shape1,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABSBAMAAADnUpTwAAAAIVBMVEVHcExl38dl38dl38dl38dl38dl38dl38dl38dl38dl38dRPdDrAAAACnRSTlMAHAo3WerUuHqaK8TCGAAAAaFJREFUSMe91jFLw1AQwPGXVFC3DAp1E5V2LQ6WdqodFLq5aSYpDtJJ0KmTDi6dBHHJVjSJuU9p00ouybu7d5TSW/sfXsqP984Ydo6Navzeh67rwo2quwb41XRXABAHzs7LO4CBs3tfdjB2dbNVBz/KDhLxn2x8QTEdqYuwgye+O52WOvhmu7NJuYNU2bGHPAhrHdAumlYHc2UHGdEdATGEix6Q81rvunRn4eW6mgv/guuqLnL27AwszsyMLc7OQ+6KHSRFuCOH6MKfyCHiHckh4m3JYao+ZOHCC+UQ8c7kEF0cyiFeantyiHg9x9cg3kgO0UUfNuMiLvA2HIdEvFM5vC8A9bfuAvGqXTjwzrUusjVchFoXm8KLLva37mINvG3HpaY9ZBLoLrV0aFQu0vPSld9SdgLerPoYe9whs/p7yLi4s95N2sWt/b6SeB+J/YzC+0CuSJGys128MCtX/VJ75lazmotPft8q442FrnzI+E3aCNvKDl3El45d+d9FMnRtwSNlt8JbZUpP7iLtKBb6hYtM0y3wKjvTDHSdOeF/+gOh9YQry46wmQAAAABJRU5ErkJggg==",alt:"shape"})]}),Object(A.jsxs)("div",{className:g.a.contentText,children:[Object(A.jsx)("div",{className:g.a.titleH2,children:Object(A.jsx)(b,{value:"Hello, I\u2019m"})}),Object(A.jsx)("div",{className:g.a.name,children:"LUBA RAMASHKA"}),Object(A.jsx)("div",{className:g.a.titleH3,children:Object(A.jsx)(_.a,{text:["HTML Developer"]})}),Object(A.jsxs)("div",{className:g.a.btn,children:[" ",Object(A.jsx)(d,{value:"DOWNLOAD CV"})]})]}),Object(A.jsxs)("div",{className:g.a.decor,children:[Object(A.jsx)("img",{className:g.a.shape2,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA1BAMAAADmNjXzAAAAGFBMVEVHcExl38dl38dl38dl38dl38dl38dl38cDEByCAAAAB3RSTlMATmTBf+GcIwTrBQAAAP9JREFUOMvF1L0OgjAUhuHCFVBBWGViNhidBaMzcWCVaMIMQnr78t+Wno/Vs76JPBHOYWwazhmeSMQJd+hm5aKb7ymkuiumac/J+gHWQyjz/IRq3Al9GjUGq9g6a446Bxn9dRMF4AxTLdE2miIKzLiIrIsZF5FPtFlEcKTIptos2pNxFJGcWeTRbRBZEYgV5HRTQ07/yXSiEkWxGV/kny5FrtgQQW0vMj+fv4oytiHqXxoS1Q7Doqu2muZbgaIMrJj6VZOixoGrInfQhRwgqvDSq2tfQg4pKojzRV0aG58LQqRdtxRyhlPspcqaHs2Ly2+xydF+4J2PywdONr8vnB+rdtpxyrndzAAAAABJRU5ErkJggg==",alt:"shape"}),Object(A.jsx)("img",{className:g.a.shape1,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABmCAMAAAAK9MRtAAAAP1BMVEX0bGzqj4XS0rbhrpz2ZWffq5r0bGxHcEzF+NL0amvgp5fF+dPF+dPF+dPF+dPF+dP5W1/hpJXJ/93/fnv/c3NV13jnAAAAEnRSTlP+/f39/n9/AP35f7qNRiFqfz9oAoQ2AAADKUlEQVRo3u1Za3esIAxEoC05oO7S/v/fennUNYmI2tV7+iDf2J3jyCOTDIq3/xCikRwmub+cF/c1kpf38+J1nQTOio8aiTgnGsmOJ7flaiSNpJF8HxKtC2OoAw6SaNEJ8hDd0R80sLEIAEIy9EOdRCtjjMKPkMbITq8DugRAJC4AxhqJ7ow3xqv5oTKODSCAKQDkTDLGse9rJMrHZ8i5ZJgUj6loSQGZNABuE4lNAHeARGQSv0XiOYmtL1dpNQwCeAqADKDLZarLlfdV4sIq8WqFKGy8Zxvvjds8wh3NA3yEIR3p7skjvJaMZPx0Mv4dgYRLSOAXLBf87I0Ph57mQfyhAoD4rz5GAkJJXD6CzkipgMgIBYgEQCSDtW6okwS980irgiyHQKoMpgRQM8kQqok3ww6p11TqUT1hgKmezMbU7awnhtcT9OaSAr5UT47OZALwmYwbe+LpksclRkVMLDYtAAzfE1vvVsJhUeR0hdOk2PFTwAAdOV3OjlvJqDXPE1Y/2Bgi4DtmPPzeogV7ZnfeTOByEjh7JnD5nhTSQm8BDhetThGTExpERTvGCKAdpKIk/djXSCC1urh8ZJVVpBf2uFnOjgb3wjZol6ubIC6yvKtXrKsXyTUdUuHNerLXBH2hnixNkH7GaXHPqLMlxOvpMenSM/YB4DdMUDSzCidMNLeofmTAbFiyPcanazTG9lsmSFCbrksWhg9ongw/0p/AVSTQrqKeqfAnzwRWXuZpEn2BCSrkmt7K1oPNHVON8I4qijKVFWqCuKz0dkNWskBSj8MEMpogJJD6uEDulHqzNEGHL9XWixacUrSK5Xdpgo6V30XI1CfM0SWPgwFhyRFgRyPxsYxOKTJ+V4rCVAmAv5j2DrdE99dC3G43/sMewL19j28kjeRkktGNAx73bkrgnYAhADZI7ONK7FEeJimaARYBxggYEYelFzilecxCnSMVMcQ6zuViuhSKKjwDuAoXwi1IzONzCC8XnzNNiCJg/0zYM/hbDBkwvK1VxkKkKzH04uGhjyVG95gcgDatZxedRRZnLTkso7WOACwDOAboA2BoGd9ILo5/fzi6SsOa9mYAAAAASUVORK5CYII=",alt:"shape"}),Object(A.jsx)("img",{className:g.a.shape2,src:"data:image/png;base64,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",alt:"shape"}),Object(A.jsx)("img",{className:g.a.shape1,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEVHcEzrg/jrg/jrg/jrg/jrg/jrg/jrg/jrg/jrg/jrg/jrg/j6i//xhv6ZRkV1AAAADHRSTlMA+wSMTBivay/ux93XpubhAAACR0lEQVRYw72XMWsUQRiGh1nvcqQbUMjBDQwLKaKNcKBNihQXsFA4A4GkE8QUIYVWV5giQYVrLFawCCIkjSBBCFpFTDEkRJDdYiFIMLf/xZm7263fd+B2mm3uubmbne95v08IfMnFjbe9QRf9eKu7tX18kBSj1KIbzKVpVuTKrTaMWFW4LRyY40j7088vz7uD3iMUiexV7B7MYUX22j1itwhkQZCraT+ShOQRMV98rwG5VxzWgGx2ntWAPO3cN+R72WcQd62MMO/pXcSTzksQmVT7g+3jBEaOkkkpFkqvYIj8pcZLF2kKIvGZ9tWuXA1v7WG/q/H55uGgN1xfw0+roS5duRsPoGXfUueSKHf/zR4hX2ArZxF5K/9NI5ZG5uwFj1zxyDUrvCgEWWB/WNPeIXeJcRPL8lo1M0arLrGHvdewid/4xD5VepTpE4wwu1Vi60MU8dU+1sQI1KpZVmViD/swsro2PWYBI/1pYsOa2Gn3yZdueER8uzGzR+TZP3aTmEcayWUAQjsyQKuzNrG/VwEmFriJZZnYX3PUxHcP1LR5VqCJ5VJWJfYF2j/lI68JX8MvwL+yqX/4xH7nEhs9MNc/sWfr+qeYS2zXP7Etl8Fbrgp5zCO7nRUa0TSyrPcEi6gAhHbkTgDCmlgaXKvVteJMPE5sWKutcX9+mug0/wMiUVol9l8UsaqcsVETR1aXib0KT7K314lqnyAfps0RnNjNrJ7h94RFAibZpbqGX7aV2OfH0qBJdobDb7V4EwvexCHIq4TV6n/tJeS7aSYMowAAAABJRU5ErkJggg==",alt:"shape"}),Object(A.jsx)("img",{className:g.a.shape2,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABLBAMAAADOlbfkAAAAHlBMVEVHcEyD8JqD8JqD8JqD8JqD8JqD8JqD8JqD8JqD8Jp3CAUVAAAACXRSTlMADyrlpoFJx2MCyRmiAAABhElEQVRIx42WsU7DQBBEDwvilJYogrtQpqMBQoeQkHAXUiClc0q6FAGJDiiQ6AgXY/Zvsc8xOfv2bnbqJ5DfTOxVap+MyrtTBRJRnfP3JEjF1OTyIfQHH6mNvl36oIMrsrL94P/xEXWj2SdJycnafZKMmOjek0TERz8ljAc3OeshQHU9dPLq92BlFvTQ5hp4aHIGPdT5Engg2gg8EH0LPFhUwAPRr8ADUSHwsKdCHqrZCjwQlQIP1cIS7KFKgj38UymgxthDO9YIQM1YY0TNsIcqK4GHhhoiyEw6hdRG4MHMEHowVIypH4EHM+kFpqqxHmKqHusLpEpJjaRFDZkZHoso7NWMdUKSsQ5EY1WfkrHCn9ruzbrAY1Wwph0FamrfvyMRFa5pJXln3kg+C3Pry+erSd/b31pPTbp3M7A1bXNwKRho7JwKbk0Fc3k4NU3Z86RX0zN/6Yw8LgP30Nx7W008LhV/xeg3hQ+1Mg8efQOfS7emAkF1TdNEwWQXAkidSCAP9QfNDUSutey2ZAAAAABJRU5ErkJggg==",alt:"shape"})]})]}),Object(A.jsx)("div",{className:g.a.photo,children:Object(A.jsx)("img",{className:g.a.img,src:v,alt:"photo"})})]})}),Object(A.jsx)(I,{active:a,setActive:c,items:[{value:"Home",href:"home"},{value:"About",href:"about"},{value:"Services",href:"service"},{value:"Portfolio",href:"portfolio"},{value:"Contact",href:"contact"}]})]})},y=a(31),w=a.n(y),R=function(e){return Object(A.jsxs)("div",{className:w.a.progress,children:[Object(A.jsx)("span",{className:w.a.name,children:e.name}),Object(A.jsx)("span",{className:w.a.value,children:e.value}),Object(A.jsx)("div",{className:w.a.skills,style:e.style})]})},H=a(12),B=a.n(H),J=a.p+"static/media/LinkedIn.d554dee8.svg",M=a.p+"static/media/Instagram.872d57ce.svg",C=a(20),E=a.n(C),V=function(){return Object(A.jsx)("section",{className:B.a.about,id:"about",children:Object(A.jsxs)("div",{className:B.a.wrapper,children:[Object(A.jsx)("div",{className:B.a.leftBlog,children:Object(A.jsx)(E.a,{bottom:!0,children:Object(A.jsxs)("div",{className:B.a.contentLeftBlog,children:[Object(A.jsx)(b,{value:"About Me"}),Object(A.jsx)("div",{className:B.a.titleH3,children:Object(A.jsx)(u,{value:"I\u2019m HTML Developer"})}),Object(A.jsx)("div",{className:B.a.line,children:Object(A.jsx)(b,{})}),Object(A.jsx)("p",{className:B.a.text,children:"Hi, my name is Lyuba and I am an HTML developer. I develop web and mobile applications of any complexity. I have an art education and it helps me to find a common language with a designer, and from this my projects and my code are clean. I can also make decisions on my own."}),Object(A.jsx)("p",{className:B.a.text,children:"My main skills are: layout of mobile and web applications, adaptive layout, cross-browser layout, sematic layout, working with SVG, animation, I have basic Java Script skills. I also own the graphics programs Figma, Photoshop, Corel Draw, Zeplin."}),Object(A.jsx)("p",{className:B.a.text,children:"In the past, I worked as a fashion designer and design engineer for 13 year"}),Object(A.jsx)("p",{className:B.a.text,children:"I am hardworking, well-trained, excellent teamworker and on my own I find a common language with different people. I am a motivated person, I want to gain experience and be useful. I will be glad to be part of your team."}),Object(A.jsxs)("div",{className:B.a.photo,children:[Object(A.jsx)("a",{href:"https://www.linkedin.com/in/liubou-ramashka-9b703519a/",children:Object(A.jsx)("img",{src:J,alt:"Linked In",className:B.a.photoItem})}),Object(A.jsx)("a",{href:"https://www.instagram.com/ramashka_luba/",children:Object(A.jsx)("img",{src:M,alt:"Linked In",className:B.a.photoItem})})]})]})})}),Object(A.jsx)("div",{className:B.a.rightBlog,children:Object(A.jsx)(E.a,{bottom:!0,children:Object(A.jsxs)("div",{className:B.a.contentRightBlog,children:[Object(A.jsx)(b,{value:"My Skills"}),Object(A.jsxs)("div",{className:B.a.skillsContainer,children:[Object(A.jsx)(R,{name:"HTML",value:"90%",style:{width:"90%"}}),Object(A.jsx)(R,{name:"CSS",value:"85%",style:{width:"85%"}}),Object(A.jsx)(R,{name:"React",value:"80%",style:{width:"80%"}}),Object(A.jsx)(R,{name:"Wordpress",value:"70%",style:{width:"70%"}}),Object(A.jsx)(R,{name:"Bootstrap",value:"60%",style:{width:"60%"}}),Object(A.jsx)(R,{name:"Gulp",value:"60%",style:{width:"60%"}}),Object(A.jsx)(R,{name:"Git",value:"65%",style:{width:"65%"}}),Object(A.jsx)(R,{name:"Figma",value:"90%",style:{width:"90%"}}),Object(A.jsx)(R,{name:"Java Script",value:"20%",style:{width:"20%"}})]})]})})})]})})},T=a(15),P=a.n(T),K=a.p+"static/media/reactIcon.b8818900.svg",F=a.p+"static/media/codeIcon.8e4ea8a5.svg",D=a.p+"static/media/desktopIcon.fe36c5d5.svg",G=a(45),U=a.n(G),L=function(e){return Object(A.jsxs)("div",{className:U.a.serviceItem,style:e.style,children:[Object(A.jsx)("img",{className:U.a.icon,src:e.src,alt:e.alt}),Object(A.jsx)("p",{className:U.a.text,children:e.text})]})},q=function(){return Object(A.jsxs)("section",{className:P.a.service,id:"service",children:[Object(A.jsx)("div",{className:P.a.blockTop,children:Object(A.jsxs)("div",{className:P.a.wrapper,children:[Object(A.jsx)("div",{className:P.a.titleH2,children:Object(A.jsx)(b,{value:"Services"})}),Object(A.jsx)(u,{value:"What I can do for you"}),Object(A.jsx)("div",{className:P.a.serviceContainer,children:Object(A.jsxs)("div",{className:P.a.content,children:[Object(A.jsx)(E.a,{left:!0,children:Object(A.jsx)("div",{className:P.a.seviceItem,children:Object(A.jsx)(L,{src:K,alt:"react icons",text:"I code sites and applications on React of any complexity (Node.js, NPM, Yarn, plus minimal logic in Java Script)."})})}),Object(A.jsx)(E.a,{bottom:!0,children:Object(A.jsx)("div",{className:P.a.seviceItem,children:Object(A.jsx)(L,{src:F,alt:"code icons",text:"Adaptive, cross-browser, simantic, valid layout, layout of email newsletters, Mobile first, Pixel-perfect, animation creation."})})}),Object(A.jsx)(E.a,{right:!0,children:Object(A.jsx)("div",{className:P.a.seviceItem,children:Object(A.jsx)(L,{src:D,alt:"desktop icon",text:"I own the graphic editors Figma, Photoshop, I have the practice and skill of creating websites, landing pages and mobile and web applications"})})})]})})]})}),Object(A.jsxs)("div",{className:P.a.blockBotton,children:[Object(A.jsx)("div",{className:P.a.titleH3,children:Object(A.jsx)(u,{value:"Considering options for remote work and work in the office"})}),Object(A.jsx)("a",{className:P.a.btn,href:"#contact",children:Object(A.jsx)(d,{value:"CONTACT ME"})})]})]})},Q=a(29),X=a.n(Q),z=function(e){return Object(A.jsxs)("div",{className:X.a.portfolioItem,children:[Object(A.jsx)("a",{href:e.href,className:X.a.link,children:Object(A.jsx)("img",{className:X.a.photo,src:e.src,alt:e.alt})}),Object(A.jsx)("div",{className:X.a.title,children:e.title}),Object(A.jsx)("p",{className:X.a.text,children:e.text})]})},W=a(17),Z=a.n(W),Y=a.p+"static/media/project1.51f3bea1.jpg",$=a.p+"static/media/project2.3441d8b5.jpg",ee=a.p+"static/media/project3.f92c5af2.jpg",te=a.p+"static/media/project4.a76e3063.jpg",ae=function(){return Object(A.jsx)("section",{className:Z.a.portfolio,id:"portfolio",children:Object(A.jsxs)("div",{className:Z.a.wrapper,children:[Object(A.jsx)("div",{className:Z.a.leftBlog,children:Object(A.jsx)(_.a,{text:["PORTFOLIO"]})}),Object(A.jsx)("div",{className:Z.a.rightBlog,children:Object(A.jsx)(E.a,{right:!0,cascade:!0,children:Object(A.jsxs)("div",{className:Z.a.content,children:[Object(A.jsx)("div",{className:Z.a.portfolioItem,children:Object(A.jsx)(z,{href:"https://pavelmalta.github.io/friday-project/#/login",src:Y,alt:"Photo1",title:"Development of a Web application for training. Learning web applications.",text:"This is a fully fnctional application. It was developed in a team with Front-end and Back-end developers. My task was to make a fully responsive layout. The application was developed in React using the SAAS preprocessor (SCSS). The Material UI library was also used."})}),Object(A.jsx)("div",{className:Z.a.portfolioItem,children:Object(A.jsx)(z,{src:$,alt:"Photo2",title:"Website development for the store.",text:"The site was developed in React using the Material UI library. It is versatile, fully mobile-responsive. Also, minimal logic in Java Script was connected to simplify the further work of Front-end developers."})}),Object(A.jsx)("div",{className:Z.a.portfolioItem,children:Object(A.jsx)(z,{src:ee,alt:"Photo3",title:"Landing page.",text:"The task was to initially create a layout specifically for mobile versions, and only then set up a version for Desctop. The Pixel-perfect technique was also used."})}),Object(A.jsx)("div",{className:Z.a.portfolioItem,children:Object(A.jsx)(z,{src:te,alt:"Photo4",title:"Layout of Email letters.",text:"The main task was to create a universal code that would be understandable for various email clients and would be equally beautifully displayed on all devices. In particular, instead of a block layout, a table layout was applied, universal tags and attributes were used."})})]})})})]})})},se=a(66),ce=a.n(se),ie=function(e){return Object(A.jsxs)("label",{children:[Object(A.jsx)("span",{className:ce.a.label,children:e.label}),Object(A.jsx)("input",{className:ce.a.input,type:e.type,name:e.name})]})},le=a(18),ne=a.n(le),oe=a(102),re=a.n(oe),Ae={particles:{number:{value:80,density:{enable:!0,value_area:800}}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}},modes:{repulse:{distance:200}},detect_on:"window"}},de=function(){return Object(A.jsx)("section",{className:ne.a.contact,id:"contact",children:Object(A.jsxs)("div",{className:ne.a.wrapper,children:[Object(A.jsxs)("div",{className:ne.a.leftBlog,children:[Object(A.jsx)(re.a,{className:ne.a.particles,params:Ae}),Object(A.jsxs)("div",{className:ne.a.content,children:[Object(A.jsx)(b,{value:"Get In Touch"}),Object(A.jsxs)("form",{action:"",className:ne.a.form,children:[Object(A.jsx)(ie,{label:"Name",type:"name",name:"name"}),Object(A.jsx)(ie,{label:"Email",type:"email",name:"email"}),Object(A.jsx)(ie,{label:"Phone",type:"phone",name:"phone"}),Object(A.jsxs)("label",{children:[Object(A.jsx)("span",{className:ne.a.label,children:"Message"}),Object(A.jsx)("textarea",{className:ne.a.textarea,type:"phone",name:"comment"})]}),Object(A.jsx)(d,{value:"SEND MESSAGE",type:"submit"})]})]})]}),Object(A.jsx)("div",{className:ne.a.rightBlog,children:Object(A.jsx)(_.a,{text:["CONTACT"]})})]})})},je=function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(S,{}),Object(A.jsx)(V,{}),Object(A.jsx)(q,{}),Object(A.jsx)(ae,{}),Object(A.jsx)(de,{})]})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,444)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),i(e),l(e)}))};l.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(je,{})}),document.getElementById("root")),me()},45:function(e,t,a){e.exports={serviceItem:"ServiceItem_serviceItem__3HCpx",icon:"ServiceItem_icon__2iwk4",text:"ServiceItem_text__ce60j"}},65:function(e,t,a){e.exports={button:"Button_button__aD3e1",span:"Button_span__3DnO5"}},66:function(e,t,a){e.exports={label:"Input_label__3hW2f",input:"Input_input__2FfA1"}},8:function(e,t,a){e.exports={home:"Home_home__2FwHN",burgerBtn:"Home_burgerBtn__D6asa",wrapper:"Home_wrapper__1I2TM",inner:"Home_inner__39qy0",content:"Home_content__I_FsM",decor:"Home_decor__2l4Yn",shape1:"Home_shape1__XkQy4",moveBall1:"Home_moveBall1__2WMC2",shape2:"Home_shape2__32XIV",moveBall2:"Home_moveBall2__3sdPl",contentText:"Home_contentText__1dM65",name:"Home_name__3ryNh",titleH3:"Home_titleH3__3clDU",btn:"Home_btn__rLyyc",photo:"Home_photo__3dUjy",img:"Home_img__27gg1"}}},[[443,1,2]]]);
//# sourceMappingURL=main.8d52e644.chunk.js.map