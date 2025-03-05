(function(){"use strict";var e={5352:function(e,t,a){var n=a(5130),o=a(6768),i=a(4232),l=a.p+"img/logo_novatool2.2b6b6112.png";const r={class:"app"},s={class:"main-header"},u={class:"header-content"},c={class:"main-content"};function d(e,t,a,n,d,v){const h=(0,o.g2)("router-link"),g=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("header",s,[(0,o.Lk)("div",u,[t[4]||(t[4]=(0,o.Lk)("img",{src:l,alt:"Novatool Logo",class:"logo"},null,-1)),(0,o.Lk)("button",{class:"hamburger-btn",onClick:t[0]||(t[0]=(...e)=>v.toggleMobileMenu&&v.toggleMobileMenu(...e)),"aria-label":"Toggle navigation menu"},t[1]||(t[1]=[(0,o.Lk)("span",{class:"hamburger-icon"},"☰",-1)])),(0,o.Lk)("nav",{class:(0,i.C4)(["main-nav",{"mobile-menu-open":d.isMobileMenuOpen}])},[(0,o.bF)(h,{to:"/",class:"nav-link",onClick:v.closeMobileMenu},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("Image Converter")]))),_:1},8,["onClick"]),(0,o.bF)(h,{to:"/binary-viewer",class:"nav-link",onClick:v.closeMobileMenu},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)("Binary Viewer")]))),_:1},8,["onClick"])],2)])]),(0,o.Lk)("main",c,[(0,o.bF)(g)])])}var v={name:"App",data(){return{isMobileMenuOpen:!1}},methods:{toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen},closeMobileMenu(){this.isMobileMenuOpen=!1}}},h=a(1241);const g=(0,h.A)(v,[["render",d],["__scopeId","data-v-d169438e"]]);var p=g,f=a(1387);const m={class:"container"},b={class:"image-converter"},k={class:"upload-section"},y={key:0,class:"preview-section"},L={class:"image-preview"},w={class:"preview-container"},C=["src"],R={class:"image-info"},x={class:"conversion-options"},B={class:"format-selection"},M={class:"option-row"},_={class:"option-control"},F={class:"select-wrapper"},G={class:"color-legend-item"},E={class:"legend-description"},D={class:"output-selection"},A={class:"option-row"},S={class:"option-control"},I={class:"select-wrapper"},O={key:1,class:"conversion-info"};function $(e,t,a,l,r,s){return(0,o.uX)(),(0,o.CE)("div",m,[(0,o.Lk)("div",b,[(0,o.Lk)("div",k,[(0,o.Lk)("input",{type:"file",accept:"image/*",onChange:t[0]||(t[0]=(...e)=>s.onFileSelected&&s.onFileSelected(...e)),ref:"fileInput"},null,544),(0,o.Lk)("button",{onClick:t[1]||(t[1]=t=>e.$refs.fileInput.click())},"Select Image")]),r.imageLoaded?((0,o.uX)(),(0,o.CE)("div",y,[t[10]||(t[10]=(0,o.Lk)("h3",null,"Preview",-1)),(0,o.Lk)("div",L,[(0,o.Lk)("div",w,[(0,o.Lk)("img",{class:"checkerboard",src:r.imagePreview,alt:"미리보기",style:{objectFit:"contain"}},null,8,C),(0,o.Lk)("div",R,(0,i.v_)(r.imageWidth)+" X "+(0,i.v_)(r.imageHeight),1)])]),(0,o.Lk)("div",x,[t[9]||(t[9]=(0,o.Lk)("h3",null,"Conversion Options",-1)),(0,o.Lk)("div",B,[(0,o.Lk)("div",M,[t[6]||(t[6]=(0,o.Lk)("div",{class:"option-label"},[(0,o.Lk)("h3",null,"Color Format")],-1)),(0,o.Lk)("div",_,[(0,o.Lk)("div",F,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.format=e)},t[5]||(t[5]=[(0,o.Fv)('<optgroup label="32-bit Format (8888)" data-v-e3f7b0a0><option value="rgba8888" data-v-e3f7b0a0>RGBA8888</option><option value="argb8888" data-v-e3f7b0a0>ARGB8888</option><option value="bgra8888" data-v-e3f7b0a0>BGRA8888</option><option value="abgr8888" data-v-e3f7b0a0>ABGR8888</option></optgroup><optgroup label="16-bit Format (4444)" data-v-e3f7b0a0><option value="rgba4444" data-v-e3f7b0a0>RGBA4444</option><option value="argb4444" data-v-e3f7b0a0>ARGB4444</option><option value="bgra4444" data-v-e3f7b0a0>BGRA4444</option><option value="abgr4444" data-v-e3f7b0a0>ABGR4444</option></optgroup><optgroup label="16-bit Format (565)" data-v-e3f7b0a0><option value="rgb565" data-v-e3f7b0a0>RGB565</option><option value="bgr565" data-v-e3f7b0a0>BGR565</option></optgroup>',3)]),512),[[n.u1,r.format]])]),(0,o.Lk)("div",G,[(0,o.Lk)("div",{class:(0,i.C4)(["color-legend",s.getLegendClass])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.getChannelOrder,(e=>((0,o.uX)(),(0,o.CE)("span",{key:e,style:(0,i.Tr)(s.getChannelStyle(e))},(0,i.v_)(e),5)))),128))],2),(0,o.Lk)("span",E,(0,i.v_)(s.getFormatDescription),1)])])])]),(0,o.Lk)("div",D,[(0,o.Lk)("div",A,[t[8]||(t[8]=(0,o.Lk)("div",{class:"option-label"},[(0,o.Lk)("h3",null,"Output Format")],-1)),(0,o.Lk)("div",S,[(0,o.Lk)("div",I,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.outputType=e)},t[7]||(t[7]=[(0,o.Lk)("option",{value:"binary"},"Binary",-1),(0,o.Lk)("option",{value:"c-array"},"C Array",-1)]),512),[[n.u1,r.outputType]])])])])])]),(0,o.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>s.convertImage&&s.convertImage(...e))},"Convert")])):(0,o.Q3)("",!0),r.convertedSize?((0,o.uX)(),(0,o.CE)("div",O,[(0,o.Lk)("p",null,"Converted File Size: "+(0,i.v_)((r.convertedSize/1024).toFixed(2))+" KB",1),(0,o.Lk)("p",null,"Compression Ratio: "+(0,i.v_)(s.getCompressionRatio())+"%",1)])):(0,o.Q3)("",!0)])])}a(6573),a(8100),a(7936),a(7467),a(4732),a(9577),a(4603),a(7566),a(8721);var K={data(){return{imageLoaded:!1,imagePreview:"",imageData:null,imageWidth:0,imageHeight:0,format:"rgba8888",outputType:"binary",convertedSize:0}},computed:{getLegendClass(){return this.format.split(/\d+/)[0]},getChannelOrder(){const e=this.format.toLowerCase();return e.includes("565")?e.startsWith("rgb")?["R","G","B"]:["B","G","R"]:e.split(/\d+/)[0].toUpperCase().split("")},getFormatDescription(){return this.format.includes("8888")?"32-bit (Each channel 8-bit)":this.format.includes("4444")?"16-bit (Each channel 4-bit)":"16-bit (R:5, G:6, B:5)"}},methods:{onFileSelected(e){const t=e.target.files[0];if(!t)return;const a=new FileReader;a.onload=e=>{this.imagePreview=e.target.result,this.loadImageData(e.target.result)},a.readAsDataURL(t)},loadImageData(e){const t=new Image;t.onload=()=>{this.imageWidth=t.width,this.imageHeight=t.height;const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const a=e.getContext("2d");a.drawImage(t,0,0),this.imageData=a.getImageData(0,0,t.width,t.height).data,this.imageLoaded=!0},t.src=e},convertImage(){if(!this.imageData)return;let e;this.format.endsWith("8888")?e=this.convertTo8888Format(this.format):this.format.endsWith("4444")?e=this.convertTo4444Format(this.format):this.format.endsWith("565")&&(e=this.convertTo565Format(this.format)),this.convertedSize=e.length,"binary"===this.outputType?this.downloadBinary(e):this.downloadCArray(e)},convertTo8888Format(e){const t=this.imageData.length/4,a=new Uint8Array(this.imageData.length);for(let n=0;n<t;n++){const t=this.imageData[4*n],o=this.imageData[4*n+1],i=this.imageData[4*n+2],l=this.imageData[4*n+3],r=4*n;switch(e){case"rgba8888":a[r]=t,a[r+1]=o,a[r+2]=i,a[r+3]=l;break;case"argb8888":a[r]=l,a[r+1]=t,a[r+2]=o,a[r+3]=i;break;case"bgra8888":a[r]=i,a[r+1]=o,a[r+2]=t,a[r+3]=l;break;case"abgr8888":a[r]=l,a[r+1]=i,a[r+2]=o,a[r+3]=t;break}}return a},convertTo4444Format(e){const t=this.imageData.length/4,a=new Uint8Array(2*t);for(let n=0;n<t;n++){const t=Math.floor(this.imageData[4*n]/16),o=Math.floor(this.imageData[4*n+1]/16),i=Math.floor(this.imageData[4*n+2]/16),l=Math.floor(this.imageData[4*n+3]/16),r=2*n;switch(e){case"rgba4444":a[r]=t<<4|o,a[r+1]=i<<4|l;break;case"argb4444":a[r]=l<<4|t,a[r+1]=o<<4|i;break;case"bgra4444":a[r]=i<<4|o,a[r+1]=t<<4|l;break;case"abgr4444":a[r]=l<<4|i,a[r+1]=o<<4|t;break}}return a},convertTo565Format(e){const t=this.imageData.length/4,a=new Uint8Array(2*t);for(let n=0;n<t;n++){const t=Math.floor(this.imageData[4*n]/255*31),o=Math.floor(this.imageData[4*n+1]/255*63),i=Math.floor(this.imageData[4*n+2]/255*31),l=2*n;let r;r="rgb565"===e?t<<11|o<<5|i:i<<11|o<<5|t,a[l]=255&r,a[l+1]=r>>8&255}return a},downloadBinary(e){const t=new Blob([e],{type:"application/octet-stream"}),a=URL.createObjectURL(t),n=`image_${this.format}_${this.imageWidth}x${this.imageHeight}.bin`;this.triggerDownload(a,n)},downloadCArray(e){let t=`// ${this.format} 이미지 데이터 - ${this.imageWidth}x${this.imageHeight}\n`;this.format.includes("rgba")?t+="// Byte order: Red, Green, Blue, Alpha\n":this.format.includes("argb")?t+="// Byte order: Alpha, Red, Green, Blue\n":this.format.includes("bgra")?t+="// Byte order: Blue, Green, Red, Alpha\n":this.format.includes("abgr")?t+="// Byte order: Alpha, Blue, Green, Red\n":"rgb565"===this.format?(t+="// RGB565 Format: 16-bit (RRRRRGGGGGGBBBBB)\n",t+="// Little-endian byte order: Lower 8-bit, Upper 8-bit\n"):"bgr565"===this.format&&(t+="// BGR565 Format: 16-bit (BBBBBGGGGGGRRRRR)\n",t+="// Little-endian byte order: Lower 8-bit, Upper 8-bit\n"),this.format.includes("4444")&&(t+="// 4-bit packing format: Each byte contains two 4-bit color values\n"),t+=`const unsigned char imageData[${e.length}] = {\n`;const a=12;for(let l=0;l<e.length;l+=a){t+="    ";for(let n=0;n<a&&l+n<e.length;n++)t+=`0x${e[l+n].toString(16).padStart(2,"0")}`,l+n<e.length-1&&(t+=", ");t+="\n"}t+="};\n\n",t+=`const int imageWidth = ${this.imageWidth};\n`,t+=`const int imageHeight = ${this.imageHeight};\n`,t+=`const char* format = "${this.format}";\n`,this.format.includes("565")&&(t+=`\n// Example function to extract 16-bit pixel values for ${this.format} format\n`,t+="uint16_t getPixel(int x, int y) {\n",t+="    if (x < 0 || x >= imageWidth || y < 0 || y >= imageHeight) return 0;\n",t+="    int offset = (y * imageWidth + x) * 2; // Each pixel is 2 bytes\n",t+="    return (uint16_t)(imageData[offset] | (imageData[offset + 1] << 8));\n",t+="}\n\n",t+=`// Extract color components from 16-bit ${this.format} pixels\n`,"rgb565"===this.format?(t+="void getRGBComponents(uint16_t pixel, uint8_t* r, uint8_t* g, uint8_t* b) {\n",t+="    *r = ((pixel >> 11) & 0x1F) * 255 / 31; // 5-bit Red component\n",t+="    *g = ((pixel >> 5) & 0x3F) * 255 / 63;  // 6-bit Green component\n",t+="    *b = (pixel & 0x1F) * 255 / 31;         // 5-bit Blue component\n",t+="}\n"):(t+="void getBGRComponents(uint16_t pixel, uint8_t* b, uint8_t* g, uint8_t* r) {\n",t+="    *b = ((pixel >> 11) & 0x1F) * 255 / 31; // 5-bit Blue component\n",t+="    *g = ((pixel >> 5) & 0x3F) * 255 / 63;  // 6-bit Green component\n",t+="    *r = (pixel & 0x1F) * 255 / 31;         // 5-bit Red component\n",t+="}\n"));const n=new Blob([t],{type:"text/plain"}),o=URL.createObjectURL(n),i=`image_${this.format}_${this.imageWidth}x${this.imageHeight}.c`;this.triggerDownload(o,i)},triggerDownload(e,t){const a=document.createElement("a");a.href=e,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(e)},getCompressionRatio(){if(!this.convertedSize||!this.imageData)return"0";const e=this.imageData.length;return(this.convertedSize/e*100).toFixed(1)},getChannelStyle(e){const t={R:{background:"#ff0000"},G:{background:"#00ff00"},B:{background:"#0000ff"},A:{background:"#ffffff",color:"#000",textShadow:"none",borderLeft:"1px solid #ddd",borderRight:"1px solid #ddd"}};return t[e]}}};const W=(0,h.A)(K,[["render",$],["__scopeId","data-v-e3f7b0a0"]]);var U=W,X=(a(4114),a(7642),a(8004),a(3853),a(5876),a(2475),a(5024),a(1698),a(144));const z={class:"binary-viewer"},T={class:"viewer-container"},H={class:"file-section"},j={key:0,class:"file-info"},P={key:0,class:"loading-section"},V={class:"progress-bar"},Q={key:1,class:"control-section"},Y={class:"left-controls"},N={class:"address"},q={class:"hex-values"},J=["onClick"],Z={key:0,class:"ascii-values"},ee=["onClick"],te=1048576,ae=16,ne=10485760;var oe={__name:"BinaryViewer",setup(e){const t=(0,X.KR)(null),a=(0,X.KR)(null),l=(0,X.KR)(null),r=(0,X.KR)(""),s=(0,X.KR)(""),u=(0,X.KR)(!1),c=(0,X.KR)(0),d=(0,X.KR)(!0),v=(0,X.KR)(16),h=(0,X.KR)(new Set),g=(0,X.KR)(0),p=(0,X.KR)(null),f=(0,X.KR)(new Map),m=(0,X.KR)([]),b=(0,X.KR)(null),k=(0,o.EW)((()=>m.value)),y=(0,o.EW)((()=>{if(!p.value)return 0;const e=Math.floor(p.value.size/v.value),t=p.value.size%v.value>0;return e+(t?1:0)})),L=(0,o.EW)((()=>y.value*ae)),w=(0,o.EW)((()=>Math.max(0,g.value)*ae)),C=e=>e.toString(16).padStart(8,"0").toUpperCase(),R=e=>void 0===e?"  ":e.toString(16).padStart(2,"0").toUpperCase(),x=e=>void 0===e?" ":e>=32&&e<=126?String.fromCharCode(e):".",B=e=>h.value.has(e),M=e=>{const t=["B","KB","MB","GB"];let a=e,n=0;while(a>=1024&&n<t.length-1)a/=1024,n++;return`${a.toFixed(1)} ${t[n]}`},_=async(e,t)=>{const a=[],n=e*v.value,o=Math.min(t*v.value,p.value.size);await G(n,o);const i=Math.floor(p.value.size/v.value),l=p.value.size%v.value>0,r=i+(l?0:-1);for(let s=e;s<=r&&s<t;s++){const e=s*v.value;if(e>=p.value.size)break;const t=p.value.size-e,n=Math.min(v.value,t),o=await A(e,n);a.push({index:s,offset:e,bytes:o})}return a},F=e=>Math.floor(e/te)*te,G=async(e,t)=>{const a=F(e),n=F(t);for(let o=a;o<=n;o+=te)f.value.has(o)||await D(o);while(E()>ne){const e=f.value.keys().next().value;f.value.delete(e)}},E=()=>{let e=0;for(const t of f.value.values())e+=t.length;return e},D=async e=>{const t=p.value.slice(e,Math.min(e+te,p.value.size)),a=await I(t);f.value.set(e,new Uint8Array(a))},A=async(e,t)=>{const a=F(e),n=f.value.get(a);if(!n)return new Array(t).fill(void 0);const o=e-a,i=n.slice(o,o+t);return e+i.length>p.value.size&&(i.length=p.value.size-e),Array.from(i)},S=async e=>{const t=e.target.files[0];if(t){r.value=t.name,s.value=M(t.size),p.value=t,f.value.clear(),g.value=0,u.value=!0,c.value=0;try{l.value=!0,await(0,o.dY)(),a.value&&(console.debug("Registering scroll event handler"),a.value.addEventListener("scroll",$)),await O()}catch(n){console.error("파일 로딩 오류:",n)}finally{u.value=!1}}},I=e=>new Promise(((t,a)=>{const n=new FileReader;n.onload=e=>t(e.target.result),n.onerror=a,n.readAsArrayBuffer(e)})),O=async()=>{if(!p.value)return;const e=a.value?.clientHeight||0,t=Math.ceil(e/ae)+10,n=Math.max(0,g.value-5),o=Math.min(y.value,g.value+t+5),i=await _(n,o);m.value=i},$=()=>{if(!a.value||!p.value)return;const e=Math.floor(a.value.scrollTop/ae);e!==g.value&&(g.value=e,O())},K=e=>{b.value=b.value===e?null:e},W=e=>b.value===e;return(0,o.wB)(v,(e=>{document.documentElement.style.setProperty("--bytes-per-line",e),O()}),{immediate:!0}),(0,o.sV)((()=>{console.debug("Component mounted")})),(0,o.hi)((()=>{a.value&&(console.debug("Removing scroll event handler"),a.value.removeEventListener("scroll",$))})),(e,h)=>((0,o.uX)(),(0,o.CE)("div",z,[h[7]||(h[7]=(0,o.Lk)("h2",null,"Binary file viewer",-1)),(0,o.Lk)("div",T,[(0,o.Lk)("div",H,[(0,o.Lk)("input",{type:"file",onChange:S,ref_key:"fileInput",ref:t,style:{display:"none"}},null,544),(0,o.Lk)("button",{onClick:h[0]||(h[0]=e=>t.value.click()),class:"primary-btn"},"Select File"),r.value?((0,o.uX)(),(0,o.CE)("span",j,(0,i.v_)(r.value)+" ("+(0,i.v_)(s.value)+")",1)):(0,o.Q3)("",!0)]),u.value?((0,o.uX)(),(0,o.CE)("div",P,[(0,o.Lk)("div",V,[(0,o.Lk)("div",{class:"progress",style:(0,i.Tr)({width:`${c.value}%`})},null,4)]),(0,o.Lk)("span",null,"File loading... "+(0,i.v_)(c.value)+"%",1)])):(0,o.Q3)("",!0),l.value?((0,o.uX)(),(0,o.CE)("div",Q,[(0,o.Lk)("div",Y,[(0,o.Lk)("label",null,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox","onUpdate:modelValue":h[1]||(h[1]=e=>d.value=e)},null,512),[[n.lH,d.value]]),h[3]||(h[3]=(0,o.eW)(" Show ASCII "))]),(0,o.Lk)("label",null,[h[5]||(h[5]=(0,o.Lk)("span",{style:{"padding-right":"10px"}},"Bytes/Line",-1)),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":h[2]||(h[2]=e=>v.value=e)},h[4]||(h[4]=[(0,o.Lk)("option",{value:8},"8",-1),(0,o.Lk)("option",{value:16},"16",-1)]),512),[[n.u1,v.value]])])]),h[6]||(h[6]=(0,o.Lk)("div",{class:"right-controls"},null,-1))])):(0,o.Q3)("",!0),l.value?((0,o.uX)(),(0,o.CE)("div",{key:2,class:"hex-view",ref_key:"hexView",ref:a},[(0,o.Lk)("div",{class:"hex-content",style:(0,i.Tr)({height:`${L.value}px`})},[(0,o.Lk)("div",{class:"viewport",style:(0,i.Tr)({transform:`translateY(${w.value}px)`})},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(k.value,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.index,class:"hex-line"},[(0,o.Lk)("div",N,(0,i.v_)(C(e.offset)),1),(0,o.Lk)("div",q,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.bytes,((t,a)=>((0,o.uX)(),(0,o.CE)("span",{key:a,class:(0,i.C4)(["hex-byte",{highlighted:B(e.offset+a),selected:W(e.offset+a)}]),onClick:t=>K(e.offset+a)},(0,i.v_)(R(t)),11,J)))),128))]),d.value?((0,o.uX)(),(0,o.CE)("div",Z,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.bytes,((t,a)=>((0,o.uX)(),(0,o.CE)("span",{key:a,class:(0,i.C4)({highlighted:B(e.offset+a),selected:W(e.offset+a)}),onClick:t=>K(e.offset+a)},(0,i.v_)(x(t)),11,ee)))),128))])):(0,o.Q3)("",!0)])))),128))],4)],4)],512)):(0,o.Q3)("",!0)])]))}};const ie=(0,h.A)(oe,[["__scopeId","data-v-53da0818"]]);var le=ie;const re=[{path:"/",name:"ImageConverter",component:U},{path:"/binary-viewer",name:"BinaryViewer",component:le}],se=(0,f.aE)({history:(0,f.LA)("/"),routes:re});var ue=se;const ce=(0,n.Ef)(p);ce.use(ue),ce.mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,i){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],i=e[c][2];for(var r=!0,s=0;s<n.length;s++)(!1&i||l>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(r=!1,i<l&&(l=i));if(r){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,l=n[0],r=n[1],s=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(s)var c=s(a)}for(t&&t(n);u<l.length;u++)i=l[u],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(c)},n=self["webpackChunknovatool_claude"]=self["webpackChunknovatool_claude"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(5352)}));n=a.O(n)})();
//# sourceMappingURL=app.6cab13fb.js.map