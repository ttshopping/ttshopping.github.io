import { E as V, a as p } from "./vendor-MVq9ngnY.js";
const a = { class: "p-4" }, d = { class: "py-2 w-[200px]" }, x = {
  __name: "Order",
  setup(m) {
    const u = Vue.getCurrentInstance();
    function l(o) {
      u.proxy.$rootRouter.push(o);
    }
    const t = Vue.ref();
    return (o, e) => {
      const s = V, r = p;
      return Vue.openBlock(), Vue.createElementBlock("div", a, [
        e[3] || (e[3] = Vue.createElementVNode("h2", { class: "py-4 text-[20px]" }, "子项目-订单模块", -1)),
        Vue.createVNode(s, {
          onClick: e[0] || (e[0] = (n) => l("/"))
        }, {
          default: Vue.withCtx(() => e[2] || (e[2] = [
            Vue.createTextVNode("返回首页")
          ])),
          _: 1
        }),
        e[4] || (e[4] = Vue.createElementVNode("h2", { class: "py-4 text-[20px]" }, "子项目-缓存测试", -1)),
        Vue.createElementVNode("div", d, [
          Vue.createVNode(r, {
            modelValue: Vue.unref(t),
            "onUpdate:modelValue": e[1] || (e[1] = (n) => Vue.isRef(t) ? t.value = n : null)
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
};
export {
  x as default
};
