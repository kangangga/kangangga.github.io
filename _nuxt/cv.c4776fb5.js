import{_ as m}from"./nuxt-link.5f9f67f5.js";import{a as r,r as c,o as a,b as l,e as n,f as i,w as p,h as g}from"./entry.350a8d8b.js";const b={id:"pdf-viewer",class:"flex justify-center"},x=["src"],h={class:"fixed inset-x-50 bottom-4"},v={__name:"PDFViewer",props:{src:{type:String,required:!0}},setup(t){const s=t,o=c(null),u=c(!0);function d(){const e=document.createElement("a");e.href=s.src,e.download="cv-angga.pdf",e.dispatchEvent(new MouseEvent("click")),e.remove()}function _(e){u.value=!1}return(e,D)=>{const f=m;return a(),l("div",b,[n("iframe",{ref_key:"iframe",ref:o,class:"h-screen w-full",src:t.src,onLoad:_},null,40,x),n("div",h,[i(f,{to:"/",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"},{default:p(()=>[g(" Kembali ")]),_:1}),n("button",{type:"button",onClick:d,class:"py-2 mr-2 mb-2 text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800"}," Download ")])])}}},w=r(v,[["__scopeId","data-v-763a558c"]]),k={},y={class:"w-full h-full"};function V(t,s){const o=w;return a(),l("div",y,[i(o,{src:"/pdf/cv-angga.pdf"})])}const B=r(k,[["render",V]]);export{B as default};