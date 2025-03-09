(function(){"use strict";var e={1474:function(e,t,a){var i=a(5130),n=a(6768),o=a(4232),l=a.p+"img/logo_novatool2.2b6b6112.png";const s={class:"app"},r={class:"main-header"},d={class:"header-content"},c={class:"main-content"};function u(e,t,a,i,u,h){const g=(0,n.g2)("router-link"),v=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",s,[(0,n.Lk)("header",r,[(0,n.Lk)("div",d,[t[5]||(t[5]=(0,n.Lk)("img",{src:l,alt:"Novatool Logo",class:"logo"},null,-1)),(0,n.Lk)("button",{class:"hamburger-btn",onClick:t[0]||(t[0]=(...e)=>h.toggleMobileMenu&&h.toggleMobileMenu(...e)),"aria-label":"Toggle navigation menu"},t[1]||(t[1]=[(0,n.Lk)("span",{class:"hamburger-icon"},"☰",-1)])),(0,n.Lk)("nav",{class:(0,o.C4)(["main-nav",{"mobile-menu-open":u.isMobileMenuOpen}])},[(0,n.bF)(g,{to:"/",class:"nav-link",onClick:h.closeMobileMenu},{default:(0,n.k6)((()=>t[2]||(t[2]=[(0,n.eW)("Image Converter")]))),_:1},8,["onClick"]),(0,n.bF)(g,{to:"/binary-viewer",class:"nav-link",onClick:h.closeMobileMenu},{default:(0,n.k6)((()=>t[3]||(t[3]=[(0,n.eW)("Binary Viewer")]))),_:1},8,["onClick"]),(0,n.bF)(g,{to:"/change-logs",class:"nav-link",onClick:h.closeMobileMenu},{default:(0,n.k6)((()=>t[4]||(t[4]=[(0,n.eW)("Change Log")]))),_:1},8,["onClick"])],2)])]),(0,n.Lk)("main",c,[(0,n.bF)(v)])])}var h={name:"App",data(){return{isMobileMenuOpen:!1}},methods:{toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen},closeMobileMenu(){this.isMobileMenuOpen=!1}}},g=a(1241);const v=(0,g.A)(h,[["render",u],["__scopeId","data-v-01172262"]]);var p=v,m=a(1387);const f={class:"container"},b={class:"image-converter"},k={class:"upload-section"},y={key:0,class:"selected-files"},C=["onClick"],L={class:"file-info"},w={class:"file-name"},A={class:"file-size"},R={key:0,class:"preview-section"},E={class:"image-preview"},F={class:"preview-container"},I=["src"],M={class:"image-info"},$={key:1,class:"conversion-options"},B={class:"format-selection"},_={class:"option-row"},x={class:"option-control"},X={class:"select-wrapper"},U={class:"color-legend-item"},S={class:"legend-description"},G={class:"output-selection"},O={class:"option-row"},z={class:"option-control"},K={class:"select-wrapper"},D={key:0,class:"option-row"},W={class:"option-control"},T={class:"checkbox-container"},N=["disabled"],V={key:2,class:"conversion-results"},P={class:"results-list"},Q={class:"result-info"};function Y(e,t,a,l,s,r){return(0,n.uX)(),(0,n.CE)("div",f,[(0,n.Lk)("div",b,[(0,n.Lk)("div",k,[(0,n.Lk)("input",{type:"file",accept:"image/*",onChange:t[0]||(t[0]=(...e)=>r.onFilesSelected&&r.onFilesSelected(...e)),ref:"fileInput",multiple:""},null,544),(0,n.Lk)("button",{onClick:t[1]||(t[1]=t=>e.$refs.fileInput.click())},"Select Images"),s.selectedFiles.length>0?((0,n.uX)(),(0,n.CE)("div",y,[(0,n.Lk)("p",null,"Selected "+(0,o.v_)(s.selectedFiles.length)+" files:",1),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.selectedFiles,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t,onClick:t=>r.loadImagePreview(e)},[(0,n.Lk)("div",L,[(0,n.Lk)("span",w,(0,o.v_)(e.name),1),(0,n.Lk)("span",A,(0,o.v_)(r.formatFileSize(e.size)),1)])],8,C)))),128))])])):(0,n.Q3)("",!0)]),s.imagePreview?((0,n.uX)(),(0,n.CE)("div",R,[t[6]||(t[6]=(0,n.Lk)("h3",null,"Preview",-1)),(0,n.Lk)("div",E,[(0,n.Lk)("div",F,[(0,n.Lk)("img",{class:"checkerboard",src:s.imagePreview,alt:"미리보기",style:{objectFit:"contain"}},null,8,I),(0,n.Lk)("div",M,(0,o.v_)(s.imageWidth)+" X "+(0,o.v_)(s.imageHeight),1)])])])):(0,n.Q3)("",!0),s.selectedFiles.length>0?((0,n.uX)(),(0,n.CE)("div",$,[t[13]||(t[13]=(0,n.Lk)("h3",null,"Conversion Options",-1)),(0,n.Lk)("div",B,[(0,n.Lk)("div",_,[t[8]||(t[8]=(0,n.Lk)("div",{class:"option-label"},[(0,n.Lk)("h3",null,"Color Format")],-1)),(0,n.Lk)("div",x,[(0,n.Lk)("div",X,[(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.format=e)},t[7]||(t[7]=[(0,n.Fv)('<optgroup label="32-bit Format (8888)" data-v-6dd521fe><option value="rgba8888" data-v-6dd521fe>RGBA8888</option><option value="argb8888" data-v-6dd521fe>ARGB8888</option><option value="bgra8888" data-v-6dd521fe>BGRA8888</option><option value="abgr8888" data-v-6dd521fe>ABGR8888</option></optgroup><optgroup label="16-bit Format (4444)" data-v-6dd521fe><option value="rgba4444" data-v-6dd521fe>RGBA4444</option><option value="argb4444" data-v-6dd521fe>ARGB4444</option><option value="bgra4444" data-v-6dd521fe>BGRA4444</option><option value="abgr4444" data-v-6dd521fe>ABGR4444</option></optgroup><optgroup label="16-bit Format (565)" data-v-6dd521fe><option value="rgb565" data-v-6dd521fe>RGB565</option><option value="bgr565" data-v-6dd521fe>BGR565</option></optgroup>',3)]),512),[[i.u1,s.format]])]),(0,n.Lk)("div",U,[(0,n.Lk)("div",{class:(0,o.C4)(["color-legend",r.getLegendClass])},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.getChannelOrder,(e=>((0,n.uX)(),(0,n.CE)("span",{key:e,style:(0,o.Tr)(r.getChannelStyle(e))},(0,o.v_)(e),5)))),128))],2),(0,n.Lk)("span",S,(0,o.v_)(r.getFormatDescription),1)])])])]),(0,n.Lk)("div",G,[(0,n.Lk)("div",O,[t[10]||(t[10]=(0,n.Lk)("div",{class:"option-label"},[(0,n.Lk)("h3",null,"Output Format")],-1)),(0,n.Lk)("div",z,[(0,n.Lk)("div",K,[(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.outputType=e)},t[9]||(t[9]=[(0,n.Lk)("option",{value:"binary"},"Binary",-1),(0,n.Lk)("option",{value:"c-array"},"C Array",-1)]),512),[[i.u1,s.outputType]])])])])]),s.selectedFiles.length>1?((0,n.uX)(),(0,n.CE)("div",D,[t[12]||(t[12]=(0,n.Lk)("div",{class:"option-label"},[(0,n.Lk)("h3",null,"Output Options")],-1)),(0,n.Lk)("div",W,[(0,n.Lk)("label",T,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>s.zipOutput=e)},null,512),[[i.lH,s.zipOutput]]),t[11]||(t[11]=(0,n.Lk)("span",null,"Combine all outputs into a ZIP file",-1))])])])):(0,n.Q3)("",!0),(0,n.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>r.convertAllImages&&r.convertAllImages(...e)),disabled:s.isConverting},(0,o.v_)(s.isConverting?"Converting...":s.selectedFiles.length>1?"Convert All Images":"Convert Image"),9,N)])):(0,n.Q3)("",!0),s.conversions.length>0?((0,n.uX)(),(0,n.CE)("div",V,[t[14]||(t[14]=(0,n.Lk)("h3",null,"Conversion Results",-1)),(0,n.Lk)("div",P,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.conversions,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:"result-item"},[(0,n.Lk)("div",Q,[(0,n.Lk)("strong",null,(0,o.v_)(e.fileName),1),(0,n.Lk)("span",null,(0,o.v_)(e.size)+" KB",1),(0,n.Lk)("span",null,"Compression: "+(0,o.v_)(e.compressionRatio)+"%",1)])])))),128))])])):(0,n.Q3)("",!0)])])}a(4114),a(6573),a(8100),a(7936),a(7467),a(4732),a(9577),a(4603),a(7566),a(8721);var j=a(4813),H=a.n(j),Z={name:"Novatool NovaTool",created(){document.title=this.$route.name},data(){return{selectedFiles:[],imagePreview:"",imageWidth:0,imageHeight:0,format:"rgba8888",outputType:"binary",zipOutput:!0,isConverting:!1,conversions:[]}},computed:{getLegendClass(){return this.format.split(/\d+/)[0]},getChannelOrder(){const e=this.format.toLowerCase();return e.includes("565")?e.startsWith("rgb")?["R","G","B"]:["B","G","R"]:e.split(/\d+/)[0].toUpperCase().split("")},getFormatDescription(){return this.format.includes("8888")?"32-bit (Each channel 8-bit)":this.format.includes("4444")?"16-bit (Each channel 4-bit)":"16-bit (R:5, G:6, B:5)"}},methods:{onFilesSelected(e){const t=e.target.files;t&&0!==t.length&&(this.conversions.splice(0,this.conversions.length),this.selectedFiles=Array.from(t),this.selectedFiles.length>0&&this.loadImagePreview(this.selectedFiles[0]))},loadImagePreview(e){const t=new FileReader;t.onload=e=>{this.imagePreview=e.target.result,this.loadImageDimensions(e.target.result)},t.readAsDataURL(e)},loadImageDimensions(e){const t=new Image;t.onload=()=>{this.imageWidth=t.width,this.imageHeight=t.height},t.src=e},async convertAllImages(){if(0!==this.selectedFiles.length&&!this.isConverting){this.$gtag.event("button_click",{event_category:"interaction",event_label:"CovertAllImages"}),this.isConverting=!0,this.conversions=[];try{if(1==this.selectedFiles.length||0==this.zipOutput)for(const e of this.selectedFiles)await this.processFile(e);else await this.convertAndZip()}catch(e){console.error("Conversion error:",e),alert("An error occurred during conversion.")}finally{this.isConverting=!1}}},async convertAndZip(){if("undefined"===typeof H()){alert("ZIP functionality requires JSZip library. Processing files individually.");for(const e of this.selectedFiles)await this.processFile(e);return}const e=new(H()),t=e.folder("converted_images");for(const o of this.selectedFiles){const e=await this.convertFile(o);if(e){const{data:a,fileName:i,size:n,compressionRatio:l}=e;this.conversions.push({fileName:i,size:(n/1024).toFixed(2),compressionRatio:l}),"binary"===this.outputType?t.file(i+".bin",a):t.file(i+".c",this.generateCCode(a,o.name,a.length))}}const a=await e.generateAsync({type:"blob"}),i=URL.createObjectURL(a),n=document.createElement("a");n.href=i,n.download=`converted_images_${this.format}.zip`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(i)},async processFile(e){const t=await this.convertFile(e);if(t){const{data:a,fileName:i,size:n,compressionRatio:o}=t;this.conversions.push({fileName:i,size:(n/1024).toFixed(2),compressionRatio:o}),"binary"===this.outputType?this.downloadBinary(a,i):this.downloadCArray(a,i,e.name)}},async convertFile(e){return new Promise((t=>{const a=new FileReader;a.onload=a=>{const i=new Image;i.onload=()=>{const a=document.createElement("canvas");a.width=i.width,a.height=i.height;const n=a.getContext("2d");n.drawImage(i,0,0);const o=n.getImageData(0,0,i.width,i.height).data;let l;this.format.endsWith("8888")?l=this.convertTo8888Format(o,this.format):this.format.endsWith("4444")?l=this.convertTo4444Format(o,this.format):this.format.endsWith("565")&&(l=this.convertTo565Format(o,this.format));const s=o.length,r=(l.length/s*100).toFixed(1);t({data:l,fileName:this.getBaseFileName(e.name),width:i.width,height:i.height,size:l.length,compressionRatio:r})},i.src=a.target.result},a.readAsDataURL(e)}))},getBaseFileName(e){return e.split(".").slice(0,-1).join(".")},convertTo8888Format(e,t){const a=e.length/4,i=new Uint8Array(e.length);for(let n=0;n<a;n++){const a=e[4*n],o=e[4*n+1],l=e[4*n+2],s=e[4*n+3],r=4*n;switch(t){case"rgba8888":i[r]=a,i[r+1]=o,i[r+2]=l,i[r+3]=s;break;case"argb8888":i[r]=s,i[r+1]=a,i[r+2]=o,i[r+3]=l;break;case"bgra8888":i[r]=l,i[r+1]=o,i[r+2]=a,i[r+3]=s;break;case"abgr8888":i[r]=s,i[r+1]=l,i[r+2]=o,i[r+3]=a;break}}return i},convertTo4444Format(e,t){const a=e.length/4,i=new Uint8Array(2*a);for(let n=0;n<a;n++){const a=Math.floor(e[4*n]/16),o=Math.floor(e[4*n+1]/16),l=Math.floor(e[4*n+2]/16),s=Math.floor(e[4*n+3]/16),r=2*n;switch(t){case"rgba4444":i[r]=a<<4|o,i[r+1]=l<<4|s;break;case"argb4444":i[r]=s<<4|a,i[r+1]=o<<4|l;break;case"bgra4444":i[r]=l<<4|o,i[r+1]=a<<4|s;break;case"abgr4444":i[r]=s<<4|l,i[r+1]=o<<4|a;break}}return i},convertTo565Format(e,t){const a=e.length/4,i=new Uint8Array(2*a);for(let n=0;n<a;n++){const a=Math.floor(e[4*n]/255*31),o=Math.floor(e[4*n+1]/255*63),l=Math.floor(e[4*n+2]/255*31),s=2*n;let r;r="rgb565"===t?a<<11|o<<5|l:l<<11|o<<5|a,i[s]=255&r,i[s+1]=r>>8&255}return i},downloadBinary(e,t){const a=new Blob([e],{type:"application/octet-stream"}),i=URL.createObjectURL(a),n=document.createElement("a");n.href=i,n.download=`${t}_${this.format}.bin`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(i)},downloadCArray(e,t,a){const i=this.generateCCode(e,a,e.length),n=new Blob([i],{type:"text/plain"}),o=URL.createObjectURL(n),l=document.createElement("a");l.href=o,l.download=`${t}_${this.format}.c`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(o)},generateCCode(e,t,a){let i=`// ${this.format} 이미지 데이터 - ${t}\n`;this.format.includes("rgba")?i+="// Byte order: Red, Green, Blue, Alpha\n":this.format.includes("argb")?i+="// Byte order: Alpha, Red, Green, Blue\n":this.format.includes("bgra")?i+="// Byte order: Blue, Green, Red, Alpha\n":this.format.includes("abgr")?i+="// Byte order: Alpha, Blue, Green, Red\n":"rgb565"===this.format?(i+="// RGB565 Format: 16-bit (RRRRRGGGGGGBBBBB)\n",i+="// Little-endian byte order: Lower 8-bit, Upper 8-bit\n"):"bgr565"===this.format&&(i+="// BGR565 Format: 16-bit (BBBBBGGGGGGRRRRR)\n",i+="// Little-endian byte order: Lower 8-bit, Upper 8-bit\n"),this.format.includes("4444")&&(i+="// 4-bit packing format: Each byte contains two 4-bit color values\n");const n=this.getSafeVariableName(t);i+=`const unsigned char ${n}_data[${a}] = {\n`;const o=12;for(let l=0;l<a;l+=o){i+="    ";for(let t=0;t<o&&l+t<a;t++)i+=`0x${e[l+t].toString(16).padStart(2,"0")}`,l+t<a-1&&(i+=", ");i+="\n"}return i+="};\n\n",i+=`const int ${n}_width = ${this.imageWidth};\n`,i+=`const int ${n}_height = ${this.imageHeight};\n`,i+=`const char* ${n}_format = "${this.format}";\n`,i},getSafeVariableName(e){return e.split(".")[0].replace(/[^a-zA-Z0-9]/g,"_").replace(/^[0-9]/,"_$&")},formatFileSize(e){return e<1024?e+" B":e<1048576?(e/1024).toFixed(2)+" KB":(e/1048576).toFixed(2)+" MB"},getChannelStyle(e){const t={R:{background:"#ff0000"},G:{background:"#00ff00"},B:{background:"#0000ff"},A:{background:"#ffffff",color:"#000",textShadow:"none",borderLeft:"1px solid #ddd",borderRight:"1px solid #ddd"}};return t[e]}}};const J=(0,g.A)(Z,[["render",Y],["__scopeId","data-v-6dd521fe"]]);var q=J;const ee={class:"page-container"},te={class:"image-section"},ae={class:"image-selector"},ie={key:0,class:"image-display"},ne=["src"],oe={key:0,name:"workMap"},le=["shape","coords","href","alt","onMouseover"],se=["src"],re={ref:"highlightCanvas",class:"highlight-canvas"},de={key:1,class:"area-table-container"},ce={class:"modern-table"},ue={class:"area-id"},he=["onUpdate:modelValue","onInput"],ge=["onUpdate:modelValue","onInput"],ve=["onUpdate:modelValue","onInput","disabled","title"],pe=["onUpdate:modelValue","onInput","disabled","title"],me=["onChange"],fe={class:"actions-cell"},be=["onClick"];function ke(e,t,a,l,s,r){return(0,n.uX)(),(0,n.CE)("div",ee,[(0,n.Lk)("div",te,[(0,n.Lk)("div",ae,[(0,n.Lk)("input",{type:"file",accept:"image/*",onChange:t[0]||(t[0]=(...e)=>r.handleImageUpload&&r.handleImageUpload(...e)),ref:"fileInput",class:"file-input"},null,544),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.triggerFileInput&&r.triggerFileInput(...e)),class:"select-image-btn"}," 이미지 선택 "),s.selectedImage?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t[2]||(t[2]=(...e)=>r.toggleEditMode&&r.toggleEditMode(...e)),class:"edit-mode-btn"},(0,o.v_)(s.isEditing?"편집 완료":"영역 편집"),1)):(0,n.Q3)("",!0)]),s.selectedImage?((0,n.uX)(),(0,n.CE)("div",ie,[(0,n.Lk)("img",{src:s.selectedImage,useMap:"#workMap",class:"image-map",onLoad:t[3]||(t[3]=(...e)=>r.initializeCanvas&&r.initializeCanvas(...e)),onMousedown:t[4]||(t[4]=(0,i.D$)(((...e)=>r.startDrawing&&r.startDrawing(...e)),["prevent"])),onMousemove:t[5]||(t[5]=(0,i.D$)(((...e)=>r.drawing&&r.drawing(...e)),["prevent"])),onMouseup:t[6]||(t[6]=(0,i.D$)(((...e)=>r.endDrawing&&r.endDrawing(...e)),["prevent"])),draggable:"false"},null,40,ne),s.isEditing?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("map",oe,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.areas,(e=>((0,n.uX)(),(0,n.CE)("area",{key:e.id,shape:e.shape,coords:e.coords,href:e.href,alt:e.alt,onMouseover:t=>r.highlightArea(e.id),onMouseout:t[7]||(t[7]=e=>r.removeHighlight())},null,40,le)))),128))])),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.areas,(e=>((0,n.uX)(),(0,n.CE)("div",{key:"bg-"+e.id,class:"area-background",style:(0,o.Tr)(r.getAreaBackgroundStyle(e))},[e.imageUrl?((0,n.uX)(),(0,n.CE)("img",{key:0,src:e.imageUrl,alt:"Area background"},null,8,se)):(0,n.Q3)("",!0)],4)))),128)),(0,n.Lk)("canvas",re,null,512),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.areas,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,class:"area-number",style:(0,o.Tr)(r.getAreaNumberStyle(e))},(0,o.v_)(e.id),5)))),128))])):(0,n.Q3)("",!0),s.areas.length>0?((0,n.uX)(),(0,n.CE)("div",de,[t[9]||(t[9]=(0,n.Lk)("h3",null,"영역 정보",-1)),(0,n.Lk)("table",ce,[t[8]||(t[8]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"No."),(0,n.Lk)("th",null,"X"),(0,n.Lk)("th",null,"Y"),(0,n.Lk)("th",null,"Width"),(0,n.Lk)("th",null,"Height"),(0,n.Lk)("th",null,"Image"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.areas,(e=>((0,n.uX)(),(0,n.CE)("tr",{key:e.id,class:(0,o.C4)({"editing-row":r.isEditingArea(e.id)})},[(0,n.Lk)("td",ue,(0,o.v_)(e.id),1),(0,n.Lk)("td",null,[(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":t=>r.getAreaCoords(e).x=t,onInput:t=>r.updateCoord(e.id,"x",t.target.value),class:"coordinate-input"},null,40,he),[[i.Jo,r.getAreaCoords(e).x,void 0,{number:!0}]])]),(0,n.Lk)("td",null,[(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":t=>r.getAreaCoords(e).y=t,onInput:t=>r.updateCoord(e.id,"y",t.target.value),class:"coordinate-input"},null,40,ge),[[i.Jo,r.getAreaCoords(e).y,void 0,{number:!0}]])]),(0,n.Lk)("td",null,[(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":t=>r.getAreaCoords(e).width=t,onInput:t=>r.updateCoord(e.id,"width",t.target.value),class:"coordinate-input",disabled:e.imageUrl,title:e.imageUrl?"이미지가 설정된 경우 크기를 변경할 수 없습니다":""},null,40,ve),[[i.Jo,r.getAreaCoords(e).width,void 0,{number:!0}]])]),(0,n.Lk)("td",null,[(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":t=>r.getAreaCoords(e).height=t,onInput:t=>r.updateCoord(e.id,"height",t.target.value),class:"coordinate-input",disabled:e.imageUrl,title:e.imageUrl?"이미지가 설정된 경우 크기를 변경할 수 없습니다":""},null,40,pe),[[i.Jo,r.getAreaCoords(e).height,void 0,{number:!0}]])]),(0,n.Lk)("td",null,[(0,n.Lk)("input",{type:"file",accept:"image/*",onChange:t=>r.handleAreaImageUpload(t,e.id),class:"image-upload"},null,40,me)]),(0,n.Lk)("td",fe,[(0,n.Lk)("button",{onClick:t=>r.deleteArea(e.id),class:"action-btn delete"}," 삭제 ",8,be)])],2)))),128))])])])):(0,n.Q3)("",!0)])])}a(8111),a(2489),a(116),a(7588),a(1701);var ye={name:"ImageMap",data(){return{selectedImage:null,areas:[],isEditing:!1,isDrawing:!1,startX:0,startY:0,currentArea:null,editingAreaId:null}},methods:{getAreaBackgroundStyle(e){const t=this.getAreaCoords(e);return{position:"absolute",left:`${t.x}px`,top:`${t.y}px`,width:`${t.width}px`,height:`${t.height}px`,overflow:"hidden"}},triggerFileInput(){this.$refs.fileInput.click()},handleImageUpload(e){const t=e.target.files[0];if(t&&t.type.startsWith("image/")){const e=new FileReader;e.onload=e=>{this.selectedImage=e.target.result,this.$emit("image-selected",t)},e.readAsDataURL(t)}},toggleEditMode(){this.isEditing=!this.isEditing},drawSavedAreas(){const e=this.$refs.highlightCanvas,t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),this.areas.forEach((e=>{const[a,i,n,o]=e.coords.split(",").map((e=>Math.round(Number(e))));t.strokeStyle="rgba(0, 0, 0, 0.8)",t.lineWidth=.5,t.setLineDash([2,2]),t.strokeRect(a,i,n-a,o-i)}))},startDrawing(e){if(!this.isEditing)return;const t=e.target.getBoundingClientRect(),a=e.target.naturalWidth/e.target.clientWidth;this.startX=Math.round((e.clientX-t.left)*a),this.startY=Math.round((e.clientY-t.top)*a),this.isDrawing=!0,this.currentArea={startX:this.startX,startY:this.startY}},drawing(e){if(!this.isDrawing||!this.isEditing)return;const t=e.target.getBoundingClientRect(),a=e.target.naturalWidth/e.target.clientWidth,i=Math.round((e.clientX-t.left)*a),n=Math.round((e.clientY-t.top)*a),o=this.$refs.highlightCanvas,l=o.getContext("2d");l.clearRect(0,0,o.width,o.height),this.drawSavedAreas();const s=i-this.currentArea.startX,r=n-this.currentArea.startY;l.fillStyle="rgba(0, 0, 0, 0.3)",l.fillRect(this.currentArea.startX,this.currentArea.startY,s,r)},handleAreaImageUpload(e,t){const a=e.target.files[0];if(a&&a.type.startsWith("image/")){const e=new FileReader;e.onload=e=>{const a=this.areas.find((e=>e.id===t)),i=new Image;i.onload=()=>{const t=this.getAreaCoords(a);a.imageUrl=e.target.result,a.coords=`${t.x},${t.y},${t.x+i.width},${t.y+i.height}`,this.drawSavedAreas()},i.src=e.target.result},e.readAsDataURL(a)}},endDrawing(e){if(!this.isDrawing||!this.isEditing)return;const t=e.target.getBoundingClientRect(),a=e.target.naturalWidth/e.target.clientWidth,i=Math.round((e.clientX-t.left)*a),n=Math.round((e.clientY-t.top)*a);if(Math.abs(i-this.currentArea.startX)<10||Math.abs(n-this.currentArea.startY)<10)return this.isDrawing=!1,void this.drawSavedAreas();const o={id:this.areas.length+1,shape:"rect",coords:`${this.currentArea.startX},${this.currentArea.startY},${i},${n}`,href:"#",alt:`Area ${this.areas.length+1}`,imageUrl:null};this.areas.push(o),this.isDrawing=!1,this.drawSavedAreas()},highlightArea(e){const t=this.$refs.highlightCanvas,a=t.getContext("2d");this.drawSavedAreas();const i=this.areas.find((t=>t.id===e)),n=i.coords.split(",").map((e=>Math.round(Number(e))));a.fillStyle="rgba(0, 255, 0, 0.3)",a.fillRect(n[0],n[1],n[2]-n[0],n[3]-n[1])},removeHighlight(){this.drawSavedAreas()},initializeCanvas(){const e=event.target,t=this.$refs.highlightCanvas;t.width=e.width,t.height=e.height,this.drawSavedAreas()},getAreaCoords(e){const[t,a,i,n]=e.coords.split(",").map(Number);return{x:Math.min(t,i),y:Math.min(a,n),width:Math.abs(i-t),height:Math.abs(n-a)}},getAreaNumberStyle(e){const t=this.getAreaCoords(e);return{left:`${t.x}px`,top:`${t.y}px`}},deleteArea(e){this.areas=this.areas.filter((t=>t.id!==e)),this.drawSavedAreas()},toggleEdit(e){this.editingAreaId=this.editingAreaId===e?null:e},isEditingArea(e){return this.editingAreaId===e},updateCoord(e,t,a){const i=this.areas.find((t=>t.id===e)),n=this.getAreaCoords(i);switch(a=!a||isNaN(a)||a<0?0:parseInt(a),t){case"x":i.coords=`${a},${n.y},${a+n.width},${n.y+n.height}`;break;case"y":i.coords=`${n.x},${a},${n.x+n.width},${a+n.height}`;break;case"width":i.coords=`${n.x},${n.y},${n.x+a},${n.y+n.height}`;break;case"height":i.coords=`${n.x},${n.y},${n.x+n.width},${n.y+a}`;break}this.drawSavedAreas()}}};const Ce=(0,g.A)(ye,[["render",ke],["__scopeId","data-v-0d85c043"]]);var Le=Ce,we=(a(7642),a(8004),a(3853),a(5876),a(2475),a(5024),a(1698),a(144));const Ae={class:"binary-viewer"},Re={class:"viewer-container"},Ee={class:"file-section"},Fe={key:0,class:"file-info"},Ie={key:0,class:"loading-section"},Me={class:"progress-bar"},$e={key:1,class:"control-section"},Be={class:"left-controls"},_e={class:"address"},xe={class:"hex-values"},Xe=["onClick"],Ue={key:0,class:"ascii-values"},Se=["onClick"],Ge=1048576,Oe=16,ze=10485760;var Ke={__name:"BinaryViewer",setup(e){const t=(0,we.KR)(null),a=(0,we.KR)(null),l=(0,we.KR)(null),s=(0,we.KR)(""),r=(0,we.KR)(""),d=(0,we.KR)(!1),c=(0,we.KR)(0),u=(0,we.KR)(!0),h=(0,we.KR)(16),g=(0,we.KR)(new Set),v=(0,we.KR)(0),p=(0,we.KR)(null),m=(0,we.KR)(new Map),f=(0,we.KR)([]),b=(0,we.KR)(null),k=(0,n.EW)((()=>f.value)),y=(0,n.EW)((()=>{if(!p.value)return 0;const e=Math.floor(p.value.size/h.value),t=p.value.size%h.value>0;return e+(t?1:0)})),C=(0,n.EW)((()=>y.value*Oe)),L=(0,n.EW)((()=>Math.max(0,v.value)*Oe)),w=e=>e.toString(16).padStart(8,"0").toUpperCase(),A=e=>void 0===e?"  ":e.toString(16).padStart(2,"0").toUpperCase(),R=e=>void 0===e?" ":e>=32&&e<=126?String.fromCharCode(e):".",E=e=>g.value.has(e),F=e=>{const t=["B","KB","MB","GB"];let a=e,i=0;while(a>=1024&&i<t.length-1)a/=1024,i++;return`${a.toFixed(1)} ${t[i]}`},I=async(e,t)=>{const a=[],i=e*h.value,n=Math.min(t*h.value,p.value.size);await $(i,n);const o=Math.floor(p.value.size/h.value),l=p.value.size%h.value>0,s=o+(l?0:-1);for(let r=e;r<=s&&r<t;r++){const e=r*h.value;if(e>=p.value.size)break;const t=p.value.size-e,i=Math.min(h.value,t),n=await x(e,i);a.push({index:r,offset:e,bytes:n})}return a},M=e=>Math.floor(e/Ge)*Ge,$=async(e,t)=>{const a=M(e),i=M(t);for(let n=a;n<=i;n+=Ge)m.value.has(n)||await _(n);while(B()>ze){const e=m.value.keys().next().value;m.value.delete(e)}},B=()=>{let e=0;for(const t of m.value.values())e+=t.length;return e},_=async e=>{const t=p.value.slice(e,Math.min(e+Ge,p.value.size)),a=await U(t);m.value.set(e,new Uint8Array(a))},x=async(e,t)=>{const a=M(e),i=m.value.get(a);if(!i)return new Array(t).fill(void 0);const n=e-a,o=i.slice(n,n+t);return e+o.length>p.value.size&&(o.length=p.value.size-e),Array.from(o)},X=async e=>{const t=e.target.files[0];if(t){s.value=t.name,r.value=F(t.size),p.value=t,m.value.clear(),v.value=0,d.value=!0,c.value=0;try{l.value=!0,await(0,n.dY)(),a.value&&(console.debug("Registering scroll event handler"),a.value.addEventListener("scroll",G)),await S()}catch(i){console.error("파일 로딩 오류:",i)}finally{d.value=!1}}},U=e=>new Promise(((t,a)=>{const i=new FileReader;i.onload=e=>t(e.target.result),i.onerror=a,i.readAsArrayBuffer(e)})),S=async()=>{if(!p.value)return;const e=a.value?.clientHeight||0,t=Math.ceil(e/Oe)+10,i=Math.max(0,v.value-5),n=Math.min(y.value,v.value+t+5),o=await I(i,n);f.value=o},G=()=>{if(!a.value||!p.value)return;const e=Math.floor(a.value.scrollTop/Oe);e!==v.value&&(v.value=e,S())},O=e=>{b.value=b.value===e?null:e},z=e=>b.value===e;return(0,n.wB)(h,(e=>{document.documentElement.style.setProperty("--bytes-per-line",e),S()}),{immediate:!0}),(0,n.sV)((()=>{console.debug("Component mounted")})),(0,n.hi)((()=>{a.value&&(console.debug("Removing scroll event handler"),a.value.removeEventListener("scroll",G))})),(e,g)=>((0,n.uX)(),(0,n.CE)("div",Ae,[(0,n.Lk)("div",Re,[(0,n.Lk)("div",Ee,[(0,n.Lk)("input",{type:"file",onChange:X,ref_key:"fileInput",ref:t,style:{display:"none"}},null,544),(0,n.Lk)("button",{onClick:g[0]||(g[0]=e=>t.value.click()),class:"primary-btn"},"Select File"),s.value?((0,n.uX)(),(0,n.CE)("span",Fe,(0,o.v_)(s.value)+" ("+(0,o.v_)(r.value)+")",1)):(0,n.Q3)("",!0)]),d.value?((0,n.uX)(),(0,n.CE)("div",Ie,[(0,n.Lk)("div",Me,[(0,n.Lk)("div",{class:"progress",style:(0,o.Tr)({width:`${c.value}%`})},null,4)]),(0,n.Lk)("span",null,"File loading... "+(0,o.v_)(c.value)+"%",1)])):(0,n.Q3)("",!0),l.value?((0,n.uX)(),(0,n.CE)("div",$e,[(0,n.Lk)("div",Be,[(0,n.Lk)("label",null,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox","onUpdate:modelValue":g[1]||(g[1]=e=>u.value=e)},null,512),[[i.lH,u.value]]),g[3]||(g[3]=(0,n.eW)(" Show ASCII "))]),(0,n.Lk)("label",null,[g[5]||(g[5]=(0,n.Lk)("span",{style:{"padding-right":"10px"}},"Bytes/Line",-1)),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":g[2]||(g[2]=e=>h.value=e)},g[4]||(g[4]=[(0,n.Lk)("option",{value:8},"8",-1),(0,n.Lk)("option",{value:16},"16",-1)]),512),[[i.u1,h.value]])])]),g[6]||(g[6]=(0,n.Lk)("div",{class:"right-controls"},null,-1))])):(0,n.Q3)("",!0),l.value?((0,n.uX)(),(0,n.CE)("div",{key:2,class:"hex-view",ref_key:"hexView",ref:a},[(0,n.Lk)("div",{class:"hex-content",style:(0,o.Tr)({height:`${C.value}px`})},[(0,n.Lk)("div",{class:"viewport",style:(0,o.Tr)({transform:`translateY(${L.value}px)`})},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(k.value,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.index,class:"hex-line"},[(0,n.Lk)("div",_e,(0,o.v_)(w(e.offset)),1),(0,n.Lk)("div",xe,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.bytes,((t,a)=>((0,n.uX)(),(0,n.CE)("span",{key:a,class:(0,o.C4)(["hex-byte",{highlighted:E(e.offset+a),selected:z(e.offset+a)}]),onClick:t=>O(e.offset+a)},(0,o.v_)(A(t)),11,Xe)))),128))]),u.value?((0,n.uX)(),(0,n.CE)("div",Ue,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.bytes,((t,a)=>((0,n.uX)(),(0,n.CE)("span",{key:a,class:(0,o.C4)({highlighted:E(e.offset+a),selected:z(e.offset+a)}),onClick:t=>O(e.offset+a)},(0,o.v_)(R(t)),11,Se)))),128))])):(0,n.Q3)("",!0)])))),128))],4)],4)],512)):(0,n.Q3)("",!0)])]))}};const De=(0,g.A)(Ke,[["__scopeId","data-v-a7a37298"]]);var We=De;const Te={class:"changelog"},Ne={class:"version-list"},Ve={class:"version-date"};function Pe(e,t,a,i,l,s){return(0,n.uX)(),(0,n.CE)("div",Te,[t[0]||(t[0]=(0,n.Lk)("h1",null,"Change Log",-1)),(0,n.Lk)("div",Ne,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.versions,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:"version-item"},[(0,n.Lk)("h2",null,(0,o.v_)(e.version),1),(0,n.Lk)("div",Ve,(0,o.v_)(e.date),1),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.changes,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t,class:(0,o.C4)(e.type)},(0,o.v_)(e.description),3)))),128))])])))),128))])])}var Qe={name:"ChangeLog",data(){return{versions:[{version:"v0.0.2",date:"2025-03-06",changes:[{type:"feature",description:"Added mobile support and multi-file selection"},{type:"improvement",description:"Add responsive code to avoid user frustration on mobile devices "}]},{version:"v0.0.1",date:"2025-02-28",changes:[{type:"feature",description:"Initial release"},{type:"improvement",description:"Add a new feature to convert images to binary"}]}]}}};const Ye=(0,g.A)(Qe,[["render",Pe],["__scopeId","data-v-22e0f210"]]);var je=Ye;const He=[{path:"/",name:"ImageConverter",component:q},{path:"/image-map",name:"ImageMap",component:Le},{path:"/binary-viewer",name:"BinaryViewer",component:We},{path:"/change-logs",name:"ChangeLog",component:je}],Ze=(0,m.aE)({history:(0,m.LA)("/"),routes:He});var Je=Ze,qe=a(2872);const et=(0,i.Ef)(p);et.use(qe.Ay,{config:{id:"G-DGQYPE2G1E"}},Je),et.use(Je).mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,o){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],o=e[c][2];for(var s=!0,r=0;r<i.length;r++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](i[r])}))?i.splice(r--,1):(s=!1,o<l&&(l=o));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,o,l=i[0],s=i[1],r=i[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(r)var c=r(a)}for(t&&t(i);d<l.length;d++)o=l[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},i=self["webpackChunknovatool_claude"]=self["webpackChunknovatool_claude"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[504],(function(){return a(1474)}));i=a.O(i)})();
//# sourceMappingURL=app.1886a6d7.js.map