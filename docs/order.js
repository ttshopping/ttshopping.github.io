import { _ as i } from "./plugin-vueexport-helper-CHgC5LLL.js";
const s = {};
function f(e, t) {
  const n = Vue.resolveComponent("RouterView");
  return Vue.openBlock(), Vue.createBlock(n);
}
const a = /* @__PURE__ */ i(s, [["render", f]]), p = [
  {
    path: "/order",
    component: () => import("./Order-Cs9eqnoP.js"),
    name: "Order"
  }
];
function l(e) {
  return console.info("/", `${e}`), VueRouter.createRouter({
    history: VueRouter.createWebHistory("/"),
    routes: p
  });
}
let o;
function d(e, t, n, u, r) {
  o = Vue.createApp(a), o.use(n), console.info("0", r), o.config.globalProperties.$rootRouter = u;
  const c = l(t);
  o.use(c), r && c.push(r), o.mount(e);
}
function m() {
  o && (o.unmount(), o = void 0);
}
function V() {
  console.info("onActivated");
}
function R() {
  console.info("onDeactivated");
}
function v(e) {
  o && o.config.globalProperties.$router.push(e);
}
export {
  d as install,
  V as onActivated,
  R as onDeactivated,
  v as router,
  m as uninstall
};
