(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{1309:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/research/research-programs/product-research",function(){return t(1167)}])},6347:function(e,r,t){"use strict";var n=t(5893),a=t(7294),s=t(9053);r.Z=function(e){var r=e.projectName,t=e.aboutProject,o=e.fundProvider,i=e.translation,c=e.sourceProgram,l=e.industryPartner,d=e.publications,u=e.members,m=e.collaborators,p=(0,a.useState)(!1),h=p[0],f=p[1],b=function(e){e.stopPropagation(),f((function(e){return!e}))};return(0,n.jsx)(s.u,{children:(0,n.jsxs)("div",{id:"accordion",children:[(0,n.jsxs)("div",{id:"accordion-header",className:"flex justify-between items-center cursor-pointer w-full",onClick:b,children:[(0,n.jsxs)("div",{className:"w-10/12",children:[(0,n.jsx)("p",{className:"m-0 mt-4 text-xl font-bold text-[#6A6A6A] uppercase",children:"Research Project"}),(0,n.jsx)("p",{className:"m-0 mt-2 mb-4 text-4xl font-semibold ",children:r})]}),(0,n.jsx)("button",{type:"button",className:"w-1/12",onClick:b,children:(0,n.jsx)("span",{className:"transition duration-300 ease-in-out text-6xl material-icons-round ".concat(h&&"rotate-180"),children:"arrow_drop_down"})})]}),(0,n.jsx)("p",{children:t}),h&&(0,n.jsxs)("div",{id:"accordion-collapse",children:[o&&(0,n.jsxs)("p",{className:"m-0 mt-2 text-xl font-bold text-[#6A6A6A] ",children:[(0,n.jsx)("span",{className:"uppercase",children:"Funds:"})," ",o]}),i&&(0,n.jsxs)("p",{className:"m-0 mt-2 text-xl font-bold text-[#6A6A6A]",children:[(0,n.jsx)("span",{className:"uppercase",children:"Translations:"})," ",i]}),c&&(0,n.jsxs)("p",{className:"m-0 mt-2 text-xl font-bold text-[#6A6A6A]",children:[(0,n.jsx)("span",{className:"uppercase",children:"Source Program:"})," ",c]}),l&&(0,n.jsxs)("p",{className:"m-0 mt-2 text-xl font-bold text-[#6A6A6A]",children:[(0,n.jsx)("span",{className:"uppercase",children:"Industry Partner:"}),l]}),null!==d&&""!==d&&void 0!==d?"string"===typeof d?(0,n.jsxs)("p",{className:"m-0 mt-2 text-xl font-bold text-[#6A6A6A] ",children:[(0,n.jsx)("span",{className:"uppercase",children:"Publications:"})," ",d]}):(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"m-0 mt-2 text-xl font-bold text-[#6A6A6A] uppercase",children:"Publications"}),(0,n.jsx)("div",{children:d})]}):null,(0,n.jsxs)("div",{className:"flex items-start space-x-36 mt-6",children:[u&&(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"mb-2 text-xl font-bold text-[#6A6A6A] uppercase",children:"Members"}),u.map((function(e,r){return(0,n.jsx)("p",{className:"m-0",children:e},r)}))]}),m&&(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"mb-2 text-xl font-bold text-[#6A6A6A] uppercase",children:"Collaborators"}),m.map((function(e,r){return(0,n.jsx)("p",{className:"m-0",children:e},r)}))]})]})]})]})})}},9053:function(e,r,t){"use strict";t.d(r,{u:function(){return o}});var n=t(5893),a=t(1163),s=t(7294),o=function(e){var r=(0,a.useRouter)(),t=e.children,o=(0,s.useState)("border-msmf-base"),i=o[0],c=o[1];return(0,s.useEffect)((function(){switch(r.pathname.split("/")[1]){case"incubation":c("border-incubation");break;case"adrc":c("border-adrc");break;case"philanthropy":c("border-philanthropy");break;case"research":c("border-research");break;default:c("border-msmf-base")}}),[r.pathname]),(0,n.jsx)("div",{className:"msmf__content-card ".concat(i),children:t})}},8810:function(e,r,t){"use strict";t.d(r,{$0:function(){return o},NZ:function(){return i},ZG:function(){return c}});var n=t(5893);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=function(e){var r=e.children,t=s(e,["children"]);return(0,n.jsx)("section",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({className:"mt-32 w-full"},t,{children:r}))},i=function(e){var r=e.title;return(0,n.jsxs)("div",{className:"mb-16 text-[38px] font-helvetica",children:[(0,n.jsx)("div",{className:" ml-[90px] ",children:r}),(0,n.jsx)("hr",{className:" w-[223px] mt-[13px] border-black"})]})},c=function(e){var r=e.children;return(0,n.jsx)("div",{className:"w-10/12 mx-auto",children:(0,n.jsx)("div",{className:"prose max-w-full text-justify",children:r})})}},1167:function(e,r,t){"use strict";t.r(r);var n=t(5893),a=t(6347),s=t(9053),o=t(8810);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var c=[{projectName:"2SolaCept: Anti-Covid19 Cept protein",fundProvider:"Birac",sourceProgram:"MI",industryPartner:"In Progress",members:["Kunal Biswas","Pushkarni Suresh"]},{projectName:"Anti-LCN2 Mab in Colorectal Cancer",fundProvider:"Birac",sourceProgram:"MI",industryPartner:"In Progress",members:["Kunal Biswas"],collaborators:["Dr Sorab Dalal"]},{projectName:"Dual modality Imaging device for surveillance and detection of oral cancer ",fundProvider:"Birac",sourceProgram:"Integrated Head and Neck Oncology",industryPartner:"In Progress",members:["Sumsum Sunny","Pramila M","Sai Lakshmi"],collaborators:["NH","University of Arizona","KLE Institute of Dental Sciences"]},{projectName:"AI-integrated affordable molecular cytology platform for oral cancer ",fundProvider:"DBT Wellcome Trust",sourceProgram:"Integrated Head and Neck Oncology",industryPartner:"In Progress",members:["Sumsum Sunny","Pavithra"],collaborators:["NH","IISc","KLE Institute of Dental Sciences"]},{projectName:"Detection of IDH1 mutation by ddPCR",fundProvider:"DBT Wellcome Trust",sourceProgram:"Neuro Oncology",industryPartner:"Neo-Dx",members:["Dr. Sujan Dhar","Gouri","Kiruthiga"],collaborators:["Dr. Komal Prasad","Dr. Akhila"]},{projectName:"Detection of double deletion of 1p19q by FISH",fundProvider:"DBT Wellcome Trust",sourceProgram:"Neuro Oncology",industryPartner:"None",members:["Dr. Sujan Dhar","Gouri","Kiruthiga"],collaborators:["Dr. Komal Prasad","Dr. Akhila"]}];r.default=function(){return(0,n.jsx)(o.$0,{children:(0,n.jsxs)(o.ZG,{children:[(0,n.jsxs)(s.u,{children:[(0,n.jsx)("p",{className:"text-2xl font-bold text-[#6A6A6A] m-0 uppercase",children:"Research Programs"}),(0,n.jsx)("p",{className:"text-4xl font-bold uppercase my-3",children:"Product Research"}),(0,n.jsxs)("p",{children:["Product Research Program focuses on developing clinically applicable deliverables out of the work carried out in the Discovery group. In addition to knowledge, translational clinical research yields 4 types of products (i) Therapeutics (ii) diagnostics (iii) Platforms and (iv) Policies/Methods. For each type, specific deliberations are required to ascertain the 3S: stability, sustainability and scalability of the product before it can be taken to the users/patients through industry and/or approving agencies. In this newly formed group we concentrate on 'productizing' a concept which has already been proven of its application in any of the core research groups at MSMF. 'Productizing' chiefly involves validation in patient samples and checking the 3S of the products."," "]})]}),(0,n.jsxs)("div",{className:" bg-msmf-dark flex items-center justify-between px-4 w-full",children:[(0,n.jsxs)("div",{id:"content",className:"w-7/12 px-8 py-8",children:[(0,n.jsx)("p",{className:"uppercase font-bold text-research",children:"Principal Investigator"}),(0,n.jsx)("p",{className:"text-white font-semibold text-4xl",children:"Smitha P K, PhD"}),(0,n.jsx)("p",{className:"text-2xl text-white",children:"Dr. Smitha PK has been involved in translational research, developing various molecular diagnostic and immune theragnostic products for past 15 years. She has been trained extensively in molecular biology and immunology during her PhD days (Bharathiar University) and over one and half decade long stint with the biotech Industry. She is an expert in making and characterizing monoclonal hybridoma as well as recombinant antibody and proteins. Her PhD, though in plant biotechnology, revolved around molecular and immuno-assay development utilizing nano-materials. Her product research and development capabilities are displayed by her publications and 2 patents. Another patent towards a screening platform development is on the way. Industry experience in leadership roles gives her an edge in forming and running an independent Product Research Program in active collaboration with the research teams of MSMF. She has active collaborations with IISc and other academia. Currently, she is pursuing her passion of novel therapeutic development to treat cancer utilizing the immune weapons. Diagnostics, that she develops, are by-products of her research!"})]}),(0,n.jsx)("div",{id:"image",className:"w-5/12 px-4 flex justify-center",children:(0,n.jsx)("img",{src:"/assets/images/Research/Rectangle 1470-3.png",alt:"Smitha P K"})})]}),c.map((function(e,r){return(0,n.jsx)(a.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){i(e,r,t[r])}))}return e}({},e),r)}))]})})}}},function(e){e.O(0,[774,888,179],(function(){return r=1309,e(e.s=r);var r}));var r=e.O();_N_E=r}]);