import{ah as v,ai as E,aj as y,ak as x,al as g,am as b,an as w,ao as k,ap as B,aq as N,ar as $,B as C,y as p,H as z}from"./vendor-qUgIT3Ts.js";import{_ as S}from"./index-R-T2bYqz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const R={__name:"BaseEcharts",props:{width:{type:String},height:{type:String},options:{type:Object,default:()=>({})}},setup(r,{expose:a}){echarts.use([v,E,y,x,g,b,w,k,B,N,$]);const e=r;Vue.watch(()=>e.options,()=>{l()},{deep:!0});const n=Vue.ref();let t=Vue.shallowRef();const s=()=>{t.value=echarts.init(n.value),l(),window.onresize=function(){t.value.resize()}},l=()=>{t.value.setOption({...e.options})};return Vue.onMounted(()=>{s()}),Vue.onUnmounted(()=>{echarts.dispose()}),a({resize:()=>{t.value.resize()}}),(u,i)=>(Vue.openBlock(),Vue.createElementBlock("div",{ref_key:"echartsRef",ref:n,style:{"min-height":"300px","min-width":"300px",width:"100%",height:"100%"}},null,512))}},j={class:"flex w-full h-full"},L={class:"pl-2 flex flex-col gap-4"},O={class:"w-[100px]"},U={class:"w-full h-full"},A={__name:"CommonEcharts",props:{type:{type:String},data:{type:Array}},setup(r){const a=r,e=Vue.ref(),n=Vue.computed(()=>e.value?a.data.filter(o=>o.name.includes(e.value)):a.data);function t(){return{tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},series:[{type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:n.value}]}}function s(){return{tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},xAxis:{type:"category",data:n.value.map(o=>o.name)},yAxis:{type:"value"},series:[{data:n.value.map(o=>o.value),type:"bar"}]}}const l=Vue.ref(),u=Vue.ref();function i(){C.toggle(u.value),Vue.nextTick(()=>{l.value.resize()})}const c=Vue.computed(()=>{switch(a.type){case"pie":return t();case"bar":return s()}});return(o,d)=>{const m=S,V=p,f=z,h=R;return Vue.openBlock(),Vue.createElementBlock("div",j,[Vue.createElementVNode("div",L,[Vue.createElementVNode("div",null,[Vue.createVNode(V,{onClick:i},{default:Vue.withCtx(()=>[Vue.createVNode(m,{name:"fullscreen"})]),_:1})]),Vue.createElementVNode("div",O,[Vue.createVNode(f,{modelValue:Vue.unref(e),"onUpdate:modelValue":d[0]||(d[0]=_=>Vue.isRef(e)?e.value=_:null),placeholder:"搜索"},null,8,["modelValue"])])]),Vue.createElementVNode("div",{ref_key:"baseEchartBox",ref:u,class:"bg-[#f2f3f5] h-full w-full flex items-center justify-center"},[Vue.createElementVNode("div",U,[c.value?(Vue.openBlock(),Vue.createBlock(h,{key:0,ref_key:"baseEchart",ref:l,options:c.value},null,8,["options"])):Vue.createCommentVNode("",!0)])],512)])}}},I={class:"p-4"},T={class:"flex h-[calc(100%-94px)]"},P={class:"flex-1 w-full"},F=Object.assign({name:"EchartsPermission"},{__name:"echarts",setup(r){const a=Vue.ref([{value:1048,name:"Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union"},{value:300,name:"Video"},{value:300,name:"Video1"},{value:300,name:"Video2"},{value:300,name:"Video3"},{value:300,name:"Video4"},{value:300,name:"Video5"},{value:300,name:"Video6"},{value:300,name:"Video7"}]),e=Vue.ref("pie");return(n,t)=>{const s=p,l=A;return Vue.openBlock(),Vue.createElementBlock("div",I,[t[2]||(t[2]=Vue.createElementVNode("h2",{class:"py-4 text-[20px]"},"Echarts",-1)),Vue.createElementVNode("div",T,[Vue.createVNode(s,{onClick:t[0]||(t[0]=u=>Vue.unref(e)==="bar"?e.value="pie":e.value="bar")},{default:Vue.withCtx(()=>t[1]||(t[1]=[Vue.createTextVNode("切换")])),_:1}),Vue.createElementVNode("div",P,[Vue.createVNode(l,{type:Vue.unref(e),data:Vue.unref(a)},null,8,["type","data"])])])])}}});export{F as default};
