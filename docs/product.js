import { _ as i } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const s = {};
function l(e, n) {
  const r = Vue.resolveComponent("RouterView");
  return Vue.openBlock(), Vue.createBlock(r, null, {
    default: Vue.withCtx(({ Component: u, route: t }) => [
      (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(u), {
        key: t.fullPath
      }))
    ]),
    _: 1
  });
}
const a = /* @__PURE__ */ i(s, [["render", l]]), f = [
  {
    path: "/product",
    name: "Product",
    component: () => import("./Product-CiITGIVj.js")
  }
];
function p(e) {
  return console.info("/", `${e}`), VueRouter.createRouter({
    history: VueRouter.createWebHistory("/"),
    routes: f
  });
}
let o;
function V(e, n, r, u, t) {
  o = Vue.createApp(a), o.use(r), console.info("0", t), o.config.globalProperties.$rootRouter = u;
  const c = p(n);
  o.use(c), t && c.push(t), o.mount(e);
}
function _() {
  o && (o.unmount(), o = void 0);
}
function d() {
  console.info("onActivated");
}
function v() {
  console.info("onDeactivated");
}
function R(e) {
  o && o.config.globalProperties.$router.push(e);
}
export {
  V as install,
  d as onActivated,
  v as onDeactivated,
  R as router,
  _ as uninstall
};
