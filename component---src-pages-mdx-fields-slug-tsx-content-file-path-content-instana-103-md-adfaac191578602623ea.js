"use strict";(self.webpackChunkvad_var=self.webpackChunkvad_var||[]).push([[466],{9185:function(e,a,t){t.r(a),t.d(a,{Head:function(){return g},default:function(){return m}});var n=t(1151),s=t(7294);function o(e){const a=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",span:"span",ol:"ol",li:"li",code:"code",strong:"strong"},(0,n.ah)(),e.components),{SubHeader:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),s.createElement(s.Fragment,null,s.createElement(a.h1,{id:"103-load-testing-and-chaos"},"103: Load Testing and Chaos"),"\n",s.createElement(t),"\n",s.createElement(a.h2,{id:"analyzing-a-load-test-using-instana"},s.createElement(a.a,{href:"#analyzing-a-load-test-using-instana"},"Analyzing A Load Test Using Instana")),"\n",s.createElement(a.p,null,"The application perspective provides you with an overview dashboard that gives you a useful first impression of the load test scenario."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 590px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 54.05405405405405%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACZUlEQVR42j2T24oVRxSG+2lyZQLR5E5ykyERITOECWRuxBcQvMkbSK4kIuYukATyABMQdHKhzmQUHTUBJQyOzMye005m7927D9XdVV2H7v7CKg8Fi1UU1av+b/2rk08uLpNlJZNJyuk0JZ1nTGYp86yg63v6foCujxF8h/UB5wOtdTjnmaVz6qbBOkfdaJKPv1jin9mIZ9MdNv9+yd0HW6ytb3Hv0V/8+eQF97de8OvogJv7+7xSFfQDPnSoqiYvFKWq4r4oK7RpSc5/c5mpKijahjQvmecq5qxQzOZ53B+XiuOqIm80TpRogzFtVCRKJZvW0vc9yaeLK8yrGiMIPhAErevw3uPehrcWQkcIAet8VPIOOeK7N/cEOzl74WtOJzNGB0d01kDvgT72T17dGx1GLPnQWhfPpejx+D8KVTEEuT8gS1qRfLSwSFlVNKbl6anhzkHDbmEJwUfVVd1EJAlRIeolS98679gtHOtj80ax9yRnFr4iS0tU3bAxbrm9V/BqXDA4T6sNJ0fHnIz/je6/Wz70HE1S6ipne6JY3SlptMZaS/L5xWW2Tl/z/fbv/LS7xm+jP7i+vcrPow1829Jp/b7QMLwtKEqdmBDe48rq+oHk3MIS93eesLL+A5c2b3Fp80e+3bjB1We/4I2hUwofAsE5ghQSk5yjyedoVWG0JUhvraUTUz4U5Dxjkk+ZlWmMaTEjVRlaa8p5hjMGK0jaYGVUWhtHqpJZVDW7s4qdieIwa0g++OxLtHZ4A7YZsHrA6UGMjmMgvRWH+2GISPLjiGI577xnXAe+e1xw5WHOtecF/wMXzyjndMYLbQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="application perspective"\n        title=""\n        src="/VAD-VAR-Workshop/static/4c455e3ec1f36b64b8a84e95d1c18fd9/6d370/application-perspective.png"\n        srcset="/VAD-VAR-Workshop/static/4c455e3ec1f36b64b8a84e95d1c18fd9/c5084/application-perspective.png 148w,\n/VAD-VAR-Workshop/static/4c455e3ec1f36b64b8a84e95d1c18fd9/60cc9/application-perspective.png 295w,\n/VAD-VAR-Workshop/static/4c455e3ec1f36b64b8a84e95d1c18fd9/6d370/application-perspective.png 590w,\n/VAD-VAR-Workshop/static/4c455e3ec1f36b64b8a84e95d1c18fd9/540ae/application-perspective.png 885w,\n/VAD-VAR-Workshop/static/4c455e3ec1f36b64b8a84e95d1c18fd9/2561a/application-perspective.png 1180w,\n/VAD-VAR-Workshop/static/4c455e3ec1f36b64b8a84e95d1c18fd9/b3a4e/application-perspective.png 2542w"\n        sizes="(max-width: 590px) 100vw, 590px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(a.p,null,"Instana will get you live insights about your entire platform allowing you to instantly understand the consequences of your load test."),"\n",s.createElement(a.p,null,"We will be conducting a small test on the robot shop platform provided by (",s.createElement(a.a,{href:"https://github.com/instana/robot-shop/tree/master/load-gen"},"Instana"),").:"),"\n",s.createElement(a.ol,null,"\n",s.createElement(a.li,null,"\n",s.createElement(a.p,null,"Run the load generation script provided by Instana"),"\n",s.createElement(a.p,null,"In a terminal run this command ",s.createElement(a.code,null,"./load-gen.sh")," under your version of robot-shop in the ",s.createElement(a.code,null,"load-gen")," folder."),"\n",s.createElement(a.p,null,"The script output should look like the following image:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 590px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 62.83783783783784%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABQElEQVR42oWTUXeDIAyFk4BWQNRu3dZtL/v/fzI7JKDB024POdSCX27uRRh+HPsPYtqQaUamBZkSMkZkQDgK/q+UIoO/E/tvYveCWq/IlJFpRW2y6LO7IuMFtEJtOoHso1dgjJGhHGyA8tttBpjN3hvJBDgC4wC6TiCToDPA9lLZkJHLS6EeDif4rCrBK1DWCRjIArd6yJ3K61rUlLH8J+mIudpQLXHvxDiiAa6qSLoNWtBWr56VMyU4UTzjAV2Q3e0MTKhqAPpUW7IOJIASljSsVohFSVV2ocgf4VBlq1N4pz1dq1IbWYWLxr/75k8ejuqheFVT3aGzXrUeuD4JxRnghuy/DHA+PgLxsAO2kekBkOrIDRjUzz3ltU85xHBS+MfI4qEdOZkvqCrMOWvK++V8UHIPU/XqAh1U1iLIH8Bf4ScPH4JWvoEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="load gen script"\n        title=""\n        src="/VAD-VAR-Workshop/static/312d5720be5e2e62014970ef3e406358/6d370/load-gen-script.png"\n        srcset="/VAD-VAR-Workshop/static/312d5720be5e2e62014970ef3e406358/c5084/load-gen-script.png 148w,\n/VAD-VAR-Workshop/static/312d5720be5e2e62014970ef3e406358/60cc9/load-gen-script.png 295w,\n/VAD-VAR-Workshop/static/312d5720be5e2e62014970ef3e406358/6d370/load-gen-script.png 590w,\n/VAD-VAR-Workshop/static/312d5720be5e2e62014970ef3e406358/540ae/load-gen-script.png 885w,\n/VAD-VAR-Workshop/static/312d5720be5e2e62014970ef3e406358/2561a/load-gen-script.png 1180w,\n/VAD-VAR-Workshop/static/312d5720be5e2e62014970ef3e406358/10cd9/load-gen-script.png 2556w"\n        sizes="(max-width: 590px) 100vw, 590px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n"),"\n",s.createElement(a.li,null,"\n",s.createElement(a.p,null,"In your application perspective for robot shop, you should see the number of call have increased and the errorneous calls have also increased."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 590px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 54.05405405405405%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACTElEQVR42j2SyWoVQRSG+1VcGRE3LhxAMBAQjC7cuPIhRPA5BH0AQXHhRhAXuomKQTSK4ggOxJjcIUnfvtVVPVXX1P1JV248UFTVqVN/1f//Jzl1+Sp5rpilgnQ2R+SSWSbIZUHPIro+juADxnms87TGYqwlzeY0jcYYS91okuPLq3ybbfE+/cn6xy88fbHBs5cbrL3+wKu3n1nb+Mzdv9vc/vOH32UVga0PqLKKj6qipCgrpCrRrSE5feUa+ypHtjVZLsmEOhi5Is1yZkKxowq2i5K8brDGUjUarVuquok/PZy7riM5eekqWVGhjcN7H5M+hEjLOodzjmAthEDwB7lGt5HusI707UGdsY7kxMplMpEznuzSaB2TB9FHTX5tbpHNxUI3E0G0MYwm00ib4GJt3/c470mOLV9ElWV8cQBz1vBz3vJyotHGRn3Kqo60bDx3EXQA65zjh7CsT/X/+8nS8irjdE4lJbmU1FXJjjK82zfUVc1kNGY83UUIceg5NnTs7KU0Vc6nacGT34pW66hjcmZlFdOaBcsuTutzeDgK/zU9jH5zE54/xymF76Ab2mnRXCGADx3J0XMXkFVDWhr2i5a0sjy4v8a9O4/wg0GDMbplUMo/foy/cQO7vY3KK+SeIE8VZTpHS40ffrh0/iL7QjGal0xEzUhUhPEIpjvRlCKXuLbFDM5KiUlTdN2QCUFdl7FDvqcFX3cLtkRDcuTsCnVt8LrHNAHbBBoDFqImqqyxA/W+JywIDvsh33vPpvLcfCO5/lpy65PiH6NlLgzMy25PAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="erroneous calls"\n        title=""\n        src="/VAD-VAR-Workshop/static/d977af50ff3d915a8c67639e41d02225/6d370/erroneous-calls.png"\n        srcset="/VAD-VAR-Workshop/static/d977af50ff3d915a8c67639e41d02225/c5084/erroneous-calls.png 148w,\n/VAD-VAR-Workshop/static/d977af50ff3d915a8c67639e41d02225/60cc9/erroneous-calls.png 295w,\n/VAD-VAR-Workshop/static/d977af50ff3d915a8c67639e41d02225/6d370/erroneous-calls.png 590w,\n/VAD-VAR-Workshop/static/d977af50ff3d915a8c67639e41d02225/540ae/erroneous-calls.png 885w,\n/VAD-VAR-Workshop/static/d977af50ff3d915a8c67639e41d02225/2561a/erroneous-calls.png 1180w,\n/VAD-VAR-Workshop/static/d977af50ff3d915a8c67639e41d02225/78929/erroneous-calls.png 2546w"\n        sizes="(max-width: 590px) 100vw, 590px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n"),"\n",s.createElement(a.li,null,"\n",s.createElement(a.p,null,"CPU Utilization and Context Switches during the load test"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 590px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 54.05405405405405%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACNElEQVR42k2T3WvUQBTF88/4pCIK+mQfpFCLFmzBF8E/U0FQsSAoWqS2ai2l1nY3m002XzOTzEeSzf5kploMHE5yBk7uvedOdGdzB9m0uG6g0RbVmsCtcQH+3diOflgGdP+4HwIPy/HqzCO6+/gpaV4SpxkXccJ0ljKJE+IkI05SknTBPMuDcX56QHn4DisKbNeTFyVFVaONwXUd2lii+9vP+JKc8Dk7ZndvnxdvPvDy7Udev9/j1e6nwJVQWNdjdItpJMZYjPMGLrA/98ZCNUS3H+5wNo3JhSAtSrKiIi0q8rKmrEX4az8MtMZSSxUq9e12fY9qNUIqXNfjXIexjujeznPOLmKyvCTJFpRCIlt91cq4WgUDb+g1bzQsL2dYqyZo/d9vX210a2ObHyenJIs8zDKvaiqpqGRDPE+RUrIal2jXsSgrZsmcbFGwHEeUNqSLglZr/ONNo5vrW3w9OmY6zyhqEVrNK0HdaKpGoltF7zSNdeS1RAgRWvOVy7AVGsYxGIaU1zafsP/tiN+TmGmSBvhklXOoYaDqOubGoKzFDivUAKpfkesB7YNaQtuPyG6k7Qai6w8ecXB0zOn55NJwnoZ5ZkIyqyWZakmEQrSGQrbkjaXWjrKxoeVSNkjjLqvVlujG+haHP09Chb/OJ4F90qpp6fuecRwZl2NI+1Lrgv4v5abVDMMQYH0o19Y22Dv4ztkkZjKbcz6dhXD8PP9fbL86Poj/b4VP22ve1N82vx1/AIjDLvgt9CXNAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="cpu usage"\n        title=""\n        src="/VAD-VAR-Workshop/static/accd13ad41c3f18baa68d19f57e1f285/6d370/cpu-usage.png"\n        srcset="/VAD-VAR-Workshop/static/accd13ad41c3f18baa68d19f57e1f285/c5084/cpu-usage.png 148w,\n/VAD-VAR-Workshop/static/accd13ad41c3f18baa68d19f57e1f285/60cc9/cpu-usage.png 295w,\n/VAD-VAR-Workshop/static/accd13ad41c3f18baa68d19f57e1f285/6d370/cpu-usage.png 590w,\n/VAD-VAR-Workshop/static/accd13ad41c3f18baa68d19f57e1f285/540ae/cpu-usage.png 885w,\n/VAD-VAR-Workshop/static/accd13ad41c3f18baa68d19f57e1f285/2561a/cpu-usage.png 1180w,\n/VAD-VAR-Workshop/static/accd13ad41c3f18baa68d19f57e1f285/49d14/cpu-usage.png 2554w"\n        sizes="(max-width: 590px) 100vw, 590px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(a.p,null,"When the memory is completely consumed, the system starts trying to deal with the situation."),"\n",s.createElement(a.p,null,"The CPU consumption rises and the ",s.createElement(a.strong,null,"context switching")," becomes more and more of an issue, until it completely gets out of control. At this point it is pretty clear what the root cause for the behavior of the Application is – there are not sufficient hardware resources to handle the load. This makes sense keeping in mind that our huge technology stack is running on a small machine."),"\n"),"\n",s.createElement(a.li,null,"\n",s.createElement(a.p,null,"View all api traces"),"\n",s.createElement(a.p,null,"Let’s explore an api trace by selecting it from the “Top Traces” list to see details about those requests.\nWith a single click on the link, we slice through the tracing data to get only the relevant traces. We can derive from the overview, which service is involved and the latency for each of the erroneous calls."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 590px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 54.05405405405405%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACJElEQVR42lWTy4oVMRCG+2lc6SAq7gTFG4M6ioi+hE8juPARBDf6Cq5FRDfi6AzOnFuf07d051ZJ+tNkRDFQhFSlKn/9f6Xau33A6aqm6QaGUdMNinrX0aup+Npe4UNEQiTEVMw5j/Oetuupdw3jpIsv79XFOw/5ebpEG1uc1jqGfsBOiiSeWVzZezWyazuarsfYXFBompambUtxYx1aG6qr95+wbVryEgkwz7RGOOw8h0PgSyMcDVISRuvRPmBDQjJaEeaUSm7OC2mmunT3EatNjfce6wVm4d2x5cqbDTfe1uy9XvP8fcf/ay4FXAQlCRMSoyS0JKrL+49Z19sC14tAinyuNS8+bHn1qeXlx4a3h6rEJ22wzuG9EGOkVZqtMnTa0Uy2cF3t3bzPyWJVEkSkcOPNBMn/QwOklEi5rRCotzsGNWKNYRwntDEopf6Icu9ZQTjPMxJC4aVWlqPllm8/V6yageWu5/vJipP1rsSO1w3rpuekt/xY1OXOulU0w0h14+Api8WytJvVKoo5YcoiTKbwmm0yFjVqnAS8xHLedkOJaeMwzuMlUJ2/vs/X0wVqmorKIUaSCDEILkSMxL9SZIWznU2ElHbzmGVOCyUpUV249YDFpmYcx+LIHIaM0hgG4+m1K0OdX8/kd5Mr5Ocxyp8gz2dGm/PyverctbusNzVaa1KazxSUs6IZzeik8JtjykqxfM4UqVzszy+JMRF/I/wFaj83GC5FcKMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="trace calls"\n        title=""\n        src="/VAD-VAR-Workshop/static/bbaf5cdaa53ddba266f6b06cf2d4e0d0/6d370/trace-calls.png"\n        srcset="/VAD-VAR-Workshop/static/bbaf5cdaa53ddba266f6b06cf2d4e0d0/c5084/trace-calls.png 148w,\n/VAD-VAR-Workshop/static/bbaf5cdaa53ddba266f6b06cf2d4e0d0/60cc9/trace-calls.png 295w,\n/VAD-VAR-Workshop/static/bbaf5cdaa53ddba266f6b06cf2d4e0d0/6d370/trace-calls.png 590w,\n/VAD-VAR-Workshop/static/bbaf5cdaa53ddba266f6b06cf2d4e0d0/540ae/trace-calls.png 885w,\n/VAD-VAR-Workshop/static/bbaf5cdaa53ddba266f6b06cf2d4e0d0/2561a/trace-calls.png 1180w,\n/VAD-VAR-Workshop/static/bbaf5cdaa53ddba266f6b06cf2d4e0d0/c7a69/trace-calls.png 2560w"\n        sizes="(max-width: 590px) 100vw, 590px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",s.createElement(a.p,null,"A load test, as realistic as it might be, is only worth as much as you can get out of its analysis. Since Instana makes this process even easier, it is a perfect match for load testing"),"\n"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?s.createElement(a,e,s.createElement(o,e)):o(e)};var l=t(7315),c=t(2125),r=t(7752),p=t(4690);const d={table:r.y6,a:r.IW,blockquote:r.R4},A=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:t=!0,timeToComplete:o,updated:i}}},children:p}=e,A=(0,s.useRef)(null),{0:g,1:m}=(0,s.useState)("");return(0,s.useEffect)((()=>{if(!A.current)return;const e=A.current.querySelectorAll("h2,h3,h4,h5"),a=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&m(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{a.observe(e)})),()=>a.disconnect()}),[]),s.createElement(s.Fragment,null,s.createElement("article",{className:l.Y,ref:A},s.createElement(n.Zo,{components:{...d,SubHeader:()=>s.createElement(r.bU,{timeToComplete:o,updated:i})}},p)),(null===t||t)&&a&&s.createElement(c.Z,{itemsList:a,maxDepth:1,currSection:g}))},g=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:t},tableOfContents:{items:n}}}}=e;return s.createElement(p.Z,{pathname:a,title:t||n[0].title||void 0})};function m(e){return s.createElement(A,e,s.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-103-md-adfaac191578602623ea.js.map