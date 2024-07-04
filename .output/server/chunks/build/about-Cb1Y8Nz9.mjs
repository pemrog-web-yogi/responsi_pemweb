import { _ as __nuxt_component_0 } from './NavbarSection-C7xWpk-d.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-2X8I7ISh.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavbarSection = __nuxt_component_0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_NavbarSection, null, null, _parent));
  _push(`<div class="max-w-screen-xl items-center justify-between mx-auto p-4"><div class="w-full"><figure class="relative w-full transition-all duration-300 cursor-pointer filter hover:grayscale"><a href="#"><img class="h-auto w-full" src="https://res.cloudinary.com/ddhostxdh/image/upload/v1720072989/portfolio/cxmvmbzsnql8bvmipv8x.png" alt="image description"></a></figure></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-Cb1Y8Nz9.mjs.map
