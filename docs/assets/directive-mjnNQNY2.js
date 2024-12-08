import{ae as v,af as f}from"./vendor-qUgIT3Ts.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _=["charmap letterspacing importword indent2em advlist anchor autolink autosave code codesample directionality emoticons hr image insertdatetime link lists media nonbreaking noneditable upfile paste preview print save searchreplace tabfocus table template textpattern visualblocks visualchars wordcount fullscreen"],b=["indent2em undo redo bold styleselect formatselect fontselect fontsizeselect italic underline strikethrough letterspacing lineheight alignleft aligncenter alignright outdent indent searchreplace  blockquote alignjustify removeformat subscript superscript code codesample hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table forecolor backcolor importword fullscreen upfile print"];let d=[];function V(){return window.tinymce}const k=(o,a)=>{const n=document.getElementById(o);d=d===null?[]:d;const i=a||function(){return!1};if(!n){const e=document.createElement("script");e.src=o,e.id=o,document.body.appendChild(e),d.push(i),("onload"in e?l:r)(e)}n&&i&&(V()?i(null,n):d.push(i));function l(e){e.onload=function(){this.onerror=this.onload=null;for(const s of d)s(null,e);d=null},e.onerror=function(){this.onerror=this.onload=null,i&&i(new Error("Failed to load "+o),e)}}function r(e){e.onreadystatechange=function(){if(!(this.readyState!=="complete"&&this.readyState!=="loaded")&&(this.onreadystatechange=null,d)){for(const s of d)s(null,e);d=null}}}};function x(){return v()}const B=["id"],E=Object.assign({name:"TinymceBase"},{__name:"TinymceBase",props:{value:{type:String,default:""},width:{type:[Number,String],required:!1,default:"100%"},height:{type:[Number,String],required:!1,default:"460px"},menubar:{type:String,default:"file edit insert view format table"}},emits:["input","update:value"],setup(o,{emit:a}){let n=x();const i=Vue.ref(!1),l=Vue.ref(!1),r=Vue.ref(!1),e=Vue.ref(!1);let s="";const u=o,c=a,p=()=>{i.value=!0,k("/tinymce/tinymce.min.js",t=>{if(t){ElementPlus.ElMessage.error(t.message);return}y()})},y=()=>{window.tinymce.init({selector:`#${n}`,branding:!1,fontsize_formats:"12px 14px 16px 18px 24px 36px 48px 56px 72px",font_formats:"微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",language:"zh_CN",height:u.height,body_class:"panel-body ",object_resizing:!0,toolbar:b,menubar:u.menubar,plugins:_,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:t=>{u.value&&t.setContent(u.value),e.value=!0,t.on("NodeChange Change KeyUp SetContent",()=>{r.value=!0,s=t.getContent(),c("input",s),c("update:value",s)}),i.value=!1},setup(t){t.on("FullscreenStateChanged",m=>{l.value=m.state})},convert_urls:!1})},h=()=>{if(window.tinymce){const t=window.tinymce.get(n);l.value&&t.execCommand("mceFullScreen"),t&&t.destroy()}};return Vue.watch(()=>u.value,t=>{r.value&&e.value&&s!==t&&Vue.nextTick(()=>window.tinymce.get(n).setContent(t||""))}),Vue.onMounted(()=>p()),Vue.onUnmounted(()=>h()),(t,m)=>{const g=f;return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.withDirectives((Vue.openBlock(),Vue.createElementBlock("div",{class:"tinymce-container",style:Vue.normalizeStyle({width:u.width})},[Vue.createElementVNode("textarea",{id:Vue.unref(n),class:"tinymce-textarea"},null,8,B)],4)),[[g,i.value]])])}}}),S=w(E,[["__scopeId","data-v-8247b823"]]),C=Object.assign({name:"Tinymce"},{__name:"index",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(o){const a=Vue.useModel(o,"modelValue"),n=Vue.ref(1);return Vue.onActivated(()=>{n.value++}),(i,l)=>(Vue.openBlock(),Vue.createBlock(S,{key:Vue.unref(n),value:a.value,"onUpdate:value":l[0]||(l[0]=r=>a.value=r)},null,8,["value"]))}}),T={class:"p-4"},N=`
<h2 style="text-align: center;">这是一个富文本</h2>
<p style="text-align: left; text-indent: 2em;">Tinymce@5.6.0， 该安装包置根节点的 <span style="text-decoration: underline;">public </span>下， 插件可配置，自行放置于&nbsp; /tinymce/plugins 文件下</p>
<p style="text-align: left; text-indent: 2em;">建议把该文件夹放到服务器上，然后修改访问地址即可</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 10.4128%;">1</td>
<td style="width: 10.4128%;">2</td>
<td style="width: 10.4128%;">3</td>
<td style="width: 10.4128%;">4</td>
<td style="width: 10.4128%;">5</td>
<td style="width: 10.4128%;">6</td>
<td style="width: 10.4128%;">7</td>
<td style="width: 10.4128%;">8</td>
</tr>
<tr>
<td style="width: 10.4128%;">A</td>
<td style="width: 10.4128%;">B</td>
<td style="width: 10.4128%;">C</td>
<td style="width: 10.4128%;">D</td>
<td style="width: 10.4128%;">E</td>
<td style="width: 10.4128%;">F</td>
<td style="width: 10.4128%;">G</td>
<td style="width: 10.4128%;">H</td>
</tr>
<tr>
<td style="width: 10.4128%;">a</td>
<td style="width: 10.4128%;">b</td>
<td style="width: 10.4128%;">c</td>
<td style="width: 10.4128%;">d</td>
<td style="width: 10.4128%;">e</td>
<td style="width: 10.4128%;">f</td>
<td style="width: 10.4128%;">g</td>
<td style="width: 10.4128%;">h</td>
</tr>
<tr>
<td style="width: 10.4128%;">i</td>
<td style="width: 10.4128%;">ii</td>
<td style="width: 10.4128%;">iii</td>
<td style="width: 10.4128%;">iv</td>
<td style="width: 10.4128%;">v</td>
<td style="width: 10.4128%;">vi</td>
<td style="width: 10.4128%;">vii</td>
<td style="width: 10.4128%;">viii</td>
</tr>
</tbody>
</table>
`,j=Object.assign({name:"DirectivePermission"},{__name:"directive",setup(o){const a=Vue.ref(""),n=Vue.ref(!1);return Vue.onMounted(()=>{n.value=!0,setTimeout(()=>{a.value=N,n.value=!1},1e3)}),(i,l)=>{const r=C,e=f;return Vue.openBlock(),Vue.createElementBlock("div",T,[l[1]||(l[1]=Vue.createElementVNode("h2",{class:"py-4 text-[20px]"},"富文本示例",-1)),Vue.withDirectives((Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(r,{value:Vue.unref(a),"onUpdate:value":l[0]||(l[0]=s=>Vue.isRef(a)?a.value=s:null)},null,8,["value"])])),[[e,Vue.unref(n)]])])}}});export{j as default};
