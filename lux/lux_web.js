// Nothing to see here, just the minified glue for WASM
let e, n = 0, t = null; function r() { return null !== t && t.buffer === e.memory.buffer || (t = new Uint8Array(e.memory.buffer)), t } let a = new TextEncoder("utf-8"); const o = "function" == typeof a.encodeInto ? function(e, n) { return a.encodeInto(e, n) } : function(e, n) { const t = a.encode(e); return n.set(t), { read: e.length, written: t.length } }; let i = null; function s() { return null !== i && i.buffer === e.memory.buffer || (i = new Int32Array(e.memory.buffer)), i } let c = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 }); c.decode(); export function run(t) { try { const y = e.__wbindgen_add_to_stack_pointer(-16); var i = function(e, t, i) { if (void 0 === i) { const o = a.encode(e), i = t(o.length); return r().subarray(i, i + o.length).set(o), n = o.length, i } let s = e.length, c = t(s); const f = r(); let u = 0; for (; u < s; u++) { const n = e.charCodeAt(u); if (n > 127) break; f[c + u] = n } if (u !== s) { 0 !== u && (e = e.slice(u)), c = i(c, s, s = u + 3 * e.length); const n = r().subarray(c + u, c + s); u += o(e, n).written } return n = u, c }(t, e.__wbindgen_malloc, e.__wbindgen_realloc), f = n; e.run(y, i, f); var u = s()[y / 4 + 0], l = s()[y / 4 + 1]; return b = u, d = l, c.decode(r().subarray(b, b + d)) } finally { e.__wbindgen_add_to_stack_pointer(16), e.__wbindgen_free(u, l) } var b, d } async function f(n) { void 0 === n && (n = new URL("lux_web_bg.wasm", import.meta.url)); ("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n)); const { instance: t, module: r } = await async function(e, n) { if ("function" == typeof Response && e instanceof Response) { if ("function" == typeof WebAssembly.instantiateStreaming) try { return await WebAssembly.instantiateStreaming(e, n) } catch (n) { if ("application/wasm" == e.headers.get("Content-Type")) throw n; console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n) } const t = await e.arrayBuffer(); return await WebAssembly.instantiate(t, n) } { const t = await WebAssembly.instantiate(e, n); return t instanceof WebAssembly.Instance ? { instance: t, module: e } : t } }(await n, {}); return e = t.exports, f.__wbindgen_wasm_module = r, e } export default f;