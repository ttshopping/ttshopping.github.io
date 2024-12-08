import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { E as i } from "./vendor-MVq9ngnY.js";
const V = {};
function a(o, t) {
  return Vue.openBlock(), Vue.createElementBlock("div", null, "自动导入的组件");
}
const l = /* @__PURE__ */ d(V, [["render", a]]), _ = Pinia.defineStore("count", () => {
  const o = Vue.ref(0);
  function t() {
    o.value++;
  }
  return {
    count: o,
    addCount: t
  };
}), p = { class: "p-4" }, f = { class: "p-2" }, N = {
  __name: "Product",
  setup(o) {
    const t = _(), r = Vue.getCurrentInstance();
    function c(n) {
      r.proxy.$rootRouter.push(n);
    }
    return (n, e) => {
      const u = i, s = l;
      return Vue.openBlock(), Vue.createElementBlock("div", p, [
        e[3] || (e[3] = Vue.createElementVNode("h2", { class: "py-4 text-[20px]" }, "子项目-订单模块-状态与主项目同步", -1)),
        Vue.createTextVNode(" " + Vue.toDisplayString(Vue.unref(t).count) + " ", 1),
        Vue.createVNode(u, {
          onClick: Vue.unref(t).addCount
        }, {
          default: Vue.withCtx(() => e[1] || (e[1] = [
            Vue.createTextVNode("add")
          ])),
          _: 1
        }, 8, ["onClick"]),
        Vue.createVNode(u, {
          onClick: e[0] || (e[0] = (m) => c({ name: "PagePermission" }))
        }, {
          default: Vue.withCtx(() => e[2] || (e[2] = [
            Vue.createTextVNode("去查看")
          ])),
          _: 1
        }),
        Vue.createElementVNode("div", f, [
          Vue.createVNode(s)
        ])
      ]);
    };
  }
};
export {
  N as default
};
