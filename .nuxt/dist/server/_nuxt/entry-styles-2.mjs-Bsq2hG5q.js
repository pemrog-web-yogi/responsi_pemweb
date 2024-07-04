const main = `body{box-sizing:border-box;font-family:Raleway,sans-serif;font-optical-sizing:auto;padding:0}
/*! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}.tooltip-arrow,.tooltip-arrow:before{background:inherit;height:8px;position:absolute;width:8px}.tooltip-arrow{visibility:hidden}.tooltip-arrow:before{content:"";transform:rotate(45deg);visibility:visible}[data-tooltip-style^=light]+.tooltip>.tooltip-arrow:before{border-color:#e5e7eb;border-style:solid}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=top]>.tooltip-arrow:before{border-bottom-width:1px;border-right-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=right]>.tooltip-arrow:before{border-bottom-width:1px;border-left-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=bottom]>.tooltip-arrow:before{border-left-width:1px;border-top-width:1px}[data-tooltip-style^=light]+.tooltip[data-popper-placement^=left]>.tooltip-arrow:before{border-right-width:1px;border-top-width:1px}.tooltip[data-popper-placement^=top]>.tooltip-arrow{bottom:-4px}.tooltip[data-popper-placement^=bottom]>.tooltip-arrow{top:-4px}.tooltip[data-popper-placement^=left]>.tooltip-arrow{right:-4px}.tooltip[data-popper-placement^=right]>.tooltip-arrow{left:-4px}.tooltip.invisible>.tooltip-arrow:before{visibility:hidden}[data-popper-arrow],[data-popper-arrow]:before{background:inherit;height:8px;position:absolute;width:8px}[data-popper-arrow]{visibility:hidden}[data-popper-arrow]:after,[data-popper-arrow]:before{content:"";transform:rotate(45deg);visibility:visible}[data-popper-arrow]:after{background:inherit;height:9px;position:absolute;width:9px}[role=tooltip]>[data-popper-arrow]:before{border-color:#e5e7eb;border-style:solid}.dark [role=tooltip]>[data-popper-arrow]:before{border-color:#4b5563;border-style:solid}[role=tooltip]>[data-popper-arrow]:after{border-color:#e5e7eb;border-style:solid}.dark [role=tooltip]>[data-popper-arrow]:after{border-color:#4b5563;border-style:solid}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:after,[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]:before{border-bottom-width:1px;border-right-width:1px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:after,[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]:before{border-bottom-width:1px;border-left-width:1px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:after,[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]:before{border-left-width:1px;border-top-width:1px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:after,[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]:before{border-right-width:1px;border-top-width:1px}[data-popover][role=tooltip][data-popper-placement^=top]>[data-popper-arrow]{bottom:-5px}[data-popover][role=tooltip][data-popper-placement^=bottom]>[data-popper-arrow]{top:-5px}[data-popover][role=tooltip][data-popper-placement^=left]>[data-popper-arrow]{right:-5px}[data-popover][role=tooltip][data-popper-placement^=right]>[data-popper-arrow]{left:-5px}[role=tooltip].invisible>[data-popper-arrow]:after,[role=tooltip].invisible>[data-popper-arrow]:before{visibility:hidden}[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem;--tw-shadow:0 0 #0000}[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,select:focus,textarea:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#1c64f2;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#1c64f2;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}input[type=time]::-webkit-calendar-picker-indicator{background:none}select:not([size]){background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' aria-hidden='true' viewBox='0 0 10 6'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3E%3C/svg%3E");background-position:right .75rem center;background-repeat:no-repeat;background-size:.75em .75em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}:is([dir=rtl]) select:not([size]){background-position:left .75rem center;padding-left:0;padding-right:.75rem}[multiple]{background-image:none;background-position:0 0;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#1c64f2;display:inline-block;flex-shrink:0;height:1rem;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1rem;--tw-shadow:0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#1c64f2;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.dark [type=checkbox]:checked,.dark [type=radio]:checked,[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:.55em .55em;border-color:transparent}[type=checkbox]:checked{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' aria-hidden='true' viewBox='0 0 16 12'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-size:.55em .55em;-webkit-print-color-adjust:exact;print-color-adjust:exact}.dark [type=radio]:checked,[type=radio]:checked{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E");background-size:1em 1em}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' aria-hidden='true' viewBox='0 0 16 12'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M.5 6h14'/%3E%3C/svg%3E");background-position:50%;background-repeat:no-repeat;background-size:.55em .55em;border-color:transparent;-webkit-print-color-adjust:exact;print-color-adjust:exact}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:unset;border-color:inherit;border-radius:0;border-width:0;font-size:unset;line-height:inherit;padding:0}[type=file]:focus{outline:1px auto inherit}input[type=file]::file-selector-button{background:#1f2937;border:0;color:#fff;cursor:pointer;font-size:.875rem;font-weight:500;margin-inline-end:1rem;margin-inline-start:-1rem;padding:.625rem 1rem .625rem 2rem}input[type=file]::file-selector-button:hover{background:#374151}:is([dir=rtl]) input[type=file]::file-selector-button{padding-left:1rem;padding-right:2rem}.dark input[type=file]::file-selector-button{background:#4b5563;color:#fff}.dark input[type=file]::file-selector-button:hover{background:#6b7280}input[type=range]::-webkit-slider-thumb{appearance:none;-moz-appearance:none;-webkit-appearance:none;background:#1c64f2;border:0;border-radius:9999px;cursor:pointer;height:1.25rem;width:1.25rem}input[type=range]:disabled::-webkit-slider-thumb{background:#9ca3af}.dark input[type=range]:disabled::-webkit-slider-thumb{background:#6b7280}input[type=range]:focus::-webkit-slider-thumb{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);--tw-ring-opacity:1px;--tw-ring-color:rgb(164 202 254/var(--tw-ring-opacity))}input[type=range]::-moz-range-thumb{appearance:none;-moz-appearance:none;-webkit-appearance:none;background:#1c64f2;border:0;border-radius:9999px;cursor:pointer;height:1.25rem;width:1.25rem}input[type=range]:disabled::-moz-range-thumb{background:#9ca3af}.dark input[type=range]:disabled::-moz-range-thumb{background:#6b7280}input[type=range]::-moz-range-progress{background:#3f83f8}input[type=range]::-ms-fill-lower{background:#3f83f8}.toggle-bg:after{background:#fff;border-color:#d1d5db;border-radius:9999px;border-width:1px;box-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);content:"";height:1.25rem;left:.125rem;position:absolute;top:.125rem;transition-duration:.15s;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;width:1.25rem}input:checked+.toggle-bg:after{border-color:#fff;transform:translateX(100%);}input:checked+.toggle-bg{background:#1c64f2;border-color:#1c64f2}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(63,131,248,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(63,131,248,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.sr-only{height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;clip:rect(0,0,0,0);border-width:0;white-space:nowrap}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.bottom-0{bottom:0}.bottom-\\[60px\\]{bottom:60px}.left-0{left:0}.right-0{right:0}.top-0{top:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.my-4{margin-bottom:1rem;margin-top:1rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-8{margin-bottom:2rem}.me-2{margin-inline-end:.5rem}.me-3{margin-inline-end:.75rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-12{height:3rem}.h-3{height:.75rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-48{height:12rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-auto{height:auto}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-3{width:.75rem}.w-3\\.5{width:.875rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-64{width:16rem}.w-8{width:2rem}.w-full{width:100%}.max-w-7xl{max-width:80rem}.max-w-screen-xl{max-width:1280px}.flex-1{flex:1 1 0%}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.origin-left{transform-origin:left}.-translate-x-full{--tw-translate-x:-100%}.-translate-x-full,.-translate-y-full{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y:-100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-full{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x:100%}.translate-y-full{--tw-translate-y:100%}.rotate-180,.translate-y-full{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg}.scale-x-0{--tw-scale-x:0}.scale-x-0,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-none{transform:none}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-none{list-style-type:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-8{gap:2rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.25rem*var(--tw-space-x-reverse))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.75rem*var(--tw-space-x-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.divide-gray-100>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(243 244 246/var(--tw-divide-opacity))}.self-center{align-self:center}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-e-lg{border-end-end-radius:.5rem;border-start-end-radius:.5rem}.rounded-l-lg{border-bottom-left-radius:.5rem;border-top-left-radius:.5rem}.rounded-r-lg{border-bottom-right-radius:.5rem;border-top-right-radius:.5rem}.rounded-s-lg{border-end-start-radius:.5rem;border-start-start-radius:.5rem}.border{border-width:1px}.border-0{border-width:0}.border-l-2{border-left-width:2px}.border-blue-600{--tw-border-opacity:1;border-color:rgb(28 100 242/var(--tw-border-opacity))}.border-blue-700{--tw-border-opacity:1;border-color:rgb(26 86 219/var(--tw-border-opacity))}.border-gray-100{--tw-border-opacity:1;border-color:rgb(243 244 246/var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-gray-600{--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity))}.bg-blue-700{--tw-bg-opacity:1;background-color:rgb(26 86 219/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.bg-gray-900\\/50{background-color:rgba(17,24,39,.5)}.bg-sky-700{background-color:rgb(3 105 161/var(--tw-bg-opacity))}.bg-sky-700,.bg-white{--tw-bg-opacity:1}.bg-white{background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-white\\/50{background-color:hsla(0,0%,100%,.5)}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-gray-800{--tw-gradient-from:#1f2937 var(--tw-gradient-from-position);--tw-gradient-to:rgba(31,41,55,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.to-black{--tw-gradient-to:#000 var(--tw-gradient-to-position)}.fill-neutral-50{fill:#fafafa}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-7{padding-left:1.75rem;padding-right:1.75rem}.py-12{padding-bottom:3rem;padding-top:3rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.pr-6{padding-right:1.5rem}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-6{line-height:1.5rem}.leading-9{line-height:2.25rem}.text-blue-500{--tw-text-opacity:1;color:rgb(63 131 248/var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity:1;color:rgb(28 100 242/var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.text-neutral-50{--tw-text-opacity:1;color:rgb(250 250 250/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.opacity-0{opacity:0}.opacity-100{opacity:1}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-100{transition-duration:.1s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-700{transition-duration:.7s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.continue-application{--color:#fff;--background:#404660;--background-hover:#3a4059;--background-left:#2b3044;--folder:#f3e9cb;--folder-inner:#beb393;--paper:#fff;--paper-lines:#bbc1e1;--paper-behind:#e1e6f9;--pencil-cap:#fff;--pencil-top:#275efe;--pencil-middle:#fff;--pencil-bottom:#5c86ff;--shadow:rgba(13,15,25,.2);-webkit-appearance:none;border:none;border-radius:5px;cursor:pointer;font-size:14px;font-weight:500;line-height:19px;outline:none;position:relative;-webkit-tap-highlight-color:transparent;background:var(--bg,var(--background));color:var(--color);padding:17px 29px 17px 69px;transition:background .3s}.continue-application>div{background:var(--background-left);border-radius:5px 0 0 5px;bottom:0;left:0;overflow:hidden;position:absolute;top:0;width:53px}.continue-application>div .folder{height:27px;left:15px;position:absolute;top:13px;width:23px}.continue-application>div .folder .top{left:0;position:absolute;top:0;transform:translateX(var(--fx,0));transition:transform .4s ease var(--fd,.3s);z-index:2}.continue-application>div .folder .top svg{display:block;height:27px;width:24px;fill:var(--folder);transform:perspective(120px) rotateY(var(--fr,0deg));transform-origin:0 50%;transition:transform .3s ease var(--fds,.45s)}.continue-application>div .folder .paper,.continue-application>div .folder:after,.continue-application>div .folder:before{background:var(--b,var(--folder-inner));border-radius:1px;content:"";height:var(--h,100%);left:var(--l,0);position:absolute;top:var(--t,0);width:var(--w,100%)}.continue-application>div .folder:before{box-shadow:0 1.5px 3px var(--shadow),0 2.5px 5px var(--shadow),0 3.5px 7px var(--shadow);transform:translateX(var(--fx,0));transition:transform .4s ease var(--fd,.3s)}.continue-application>div .folder .paper,.continue-application>div .folder:after{--l:1px;--t:1px;--w:21px;--h:25px;--b:var(--paper-behind)}.continue-application>div .folder:after{transform:translate(var(--pbx,0),var(--pby,0));transition:transform .4s ease var(--pbd,0s)}.continue-application>div .folder .paper{z-index:1;--b:var(--paper)}.continue-application>div .folder .paper:after,.continue-application>div .folder .paper:before{background:var(--paper-lines);border-radius:1px;box-shadow:0 12px 0 0 var(--paper-lines),0 24px 0 0 var(--paper-lines);content:"";height:2px;left:3px;position:absolute;top:var(--tp,3px);transform:scaleY(.5);width:var(--wp,14px)}.continue-application>div .folder .paper:after{--tp:6px;--wp:10px}.continue-application>div .pencil{background:var(--pencil-cap);border-radius:1px 1px 0 0;height:2px;left:105%;position:absolute;top:8px;transform:translateX(var(--pex,0)) rotate(35deg);transform-origin:50% 19px;transition:transform .4s ease var(--pbd,0s);width:3px;z-index:3}.continue-application>div .pencil:after,.continue-application>div .pencil:before{background:var(--b,linear-gradient(var(--pencil-top) 55%,var(--pencil-middle) 55.1%,var(--pencil-middle) 60%,var(--pencil-bottom) 60.1%));border-radius:var(--br,2px 2px 0 0);content:"";display:block;height:var(--h,20px);left:var(--l,-1px);position:absolute;top:var(--t,2px);width:var(--w,5px)}.continue-application>div .pencil:before{clip-path:polygon(0 5%,5px 5%,5px 17px,50% 20px,0 17px)}.continue-application>div .pencil:after{--b:none;--w:3px;--h:6px;--br:0 2px 1px 0;--t:3px;--l:3px;border-right:1px solid var(--pencil-top);border-top:1px solid var(--pencil-top)}.continue-application:after,.continue-application:before{background:var(--color);border-radius:1px;content:"";height:2px;position:absolute;right:16px;top:26px;transform:translateX(var(--cx,0)) scale(.5) rotate(var(--r,-45deg));transform-origin:9px 1px;transition:transform .3s;width:10px}.continue-application:after{--r:45deg}.continue-application:hover{--cx:2px;--bg:var(--background-hover);--fx:-40px;--fr:-60deg;--fd:.15s;--fds:0s;--pbx:3px;--pby:-3px;--pbd:.15s;--pex:-24px}.svg{background-color:#0e4166;background-image:linear-gradient(180deg,rgba(14,65,102,.86),#0e4166);box-sizing:border-box;display:block;height:100%;left:0;position:absolute;top:0;width:100%}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:left-8:before{content:var(--tw-content);left:2rem}.before\\:-z-10:before{content:var(--tw-content);z-index:-10}.before\\:h-6:before{content:var(--tw-content);height:1.5rem}.before\\:w-6:before{content:var(--tw-content);width:1.5rem}.before\\:rotate-45:before{content:var(--tw-content);--tw-rotate:45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.before\\:bg-sky-700:before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(3 105 161/var(--tw-bg-opacity))}.before\\:duration-700:before{content:var(--tw-content);transition-duration:.7s}.hover\\:w-44:hover{width:11rem}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:border-gray-300:hover{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.hover\\:border-gray-800:hover{--tw-border-opacity:1;border-color:rgb(31 41 55/var(--tw-border-opacity))}.hover\\:bg-blue-800:hover{--tw-bg-opacity:1;background-color:rgb(30 66 159/var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hover\\:bg-sky-600:hover{--tw-bg-opacity:1;background-color:rgb(2 132 199/var(--tw-bg-opacity))}.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.hover\\:from-black:hover{--tw-gradient-from:#000 var(--tw-gradient-from-position);--tw-gradient-to:transparent var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.hover\\:to-gray-900:hover{--tw-gradient-to:#111827 var(--tw-gradient-to-position)}.hover\\:text-blue-600:hover{--tw-text-opacity:1;color:rgb(28 100 242/var(--tw-text-opacity))}.hover\\:text-blue-700:hover{--tw-text-opacity:1;color:rgb(26 86 219/var(--tw-text-opacity))}.hover\\:text-gray-500:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.hover\\:text-gray-600:hover{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.hover\\:grayscale:hover{--tw-grayscale:grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.before\\:hover\\:left-40:hover:before{content:var(--tw-content);left:10rem}.before\\:hover\\:bg-sky-600:hover:before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(2 132 199/var(--tw-bg-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-2:focus,.focus\\:ring-4:focus{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-blue-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(164 202 254/var(--tw-ring-opacity))}.focus\\:ring-gray-200:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(229 231 235/var(--tw-ring-opacity))}.group:hover .group-hover\\:scale-x-100{--tw-scale-x:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\\:opacity-100{opacity:1}.group:hover .group-hover\\:delay-500{transition-delay:.5s}.group:hover .group-hover\\:duration-300{transition-duration:.3s}.dark\\:border-blue-500:is(.dark *){--tw-border-opacity:1;border-color:rgb(63 131 248/var(--tw-border-opacity))}.dark\\:border-gray-600:is(.dark *){--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity))}.dark\\:border-gray-700:is(.dark *){--tw-border-opacity:1;border-color:rgb(55 65 81/var(--tw-border-opacity))}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:bg-blue-600:is(.dark *){--tw-bg-opacity:1;background-color:rgb(28 100 242/var(--tw-bg-opacity))}.dark\\:bg-gray-600:is(.dark *){--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity))}.dark\\:bg-gray-700:is(.dark *){--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.dark\\:bg-gray-800:is(.dark *){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.dark\\:bg-gray-800\\/50:is(.dark *){background-color:rgba(31,41,55,.5)}.dark\\:bg-gray-900:is(.dark *){--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity))}.dark\\:bg-gray-900\\/80:is(.dark *){background-color:rgba(17,24,39,.8)}.dark\\:text-blue-500:is(.dark *){--tw-text-opacity:1;color:rgb(63 131 248/var(--tw-text-opacity))}.dark\\:text-gray-400:is(.dark *){--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.dark\\:text-gray-500:is(.dark *){--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.dark\\:text-white:is(.dark *){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.dark\\:hover\\:bg-blue-700:hover:is(.dark *){--tw-bg-opacity:1;background-color:rgb(26 86 219/var(--tw-bg-opacity))}.dark\\:hover\\:bg-gray-600:hover:is(.dark *){--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity))}.dark\\:hover\\:bg-gray-700:hover:is(.dark *){--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.dark\\:hover\\:bg-gray-800:hover:is(.dark *){--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity:1;color:rgb(63 131 248/var(--tw-text-opacity))}.dark\\:hover\\:text-gray-300:hover:is(.dark *){--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.dark\\:hover\\:text-white:hover:is(.dark *){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.dark\\:focus\\:ring-gray-600:focus:is(.dark *){--tw-ring-opacity:1;--tw-ring-color:rgb(75 85 99/var(--tw-ring-opacity))}@media (min-width:640px){.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}@media (min-width:768px){.md\\:order-1{order:1}.md\\:order-2{order:2}.md\\:mx-0{margin-left:0;margin-right:0}.md\\:ml-6{margin-left:1.5rem}.md\\:mt-0{margin-top:0}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-auto{width:auto}.md\\:flex-shrink-0{flex-shrink:0}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-start{justify-content:flex-start}.md\\:space-x-0>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(0px*(1 - var(--tw-space-x-reverse)));margin-right:calc(0px*var(--tw-space-x-reverse))}.md\\:space-x-8>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(2rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(2rem*var(--tw-space-x-reverse))}.md\\:border-0{border-width:0}.md\\:bg-transparent{background-color:transparent}.md\\:bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.md\\:p-0{padding:0}.md\\:text-left{text-align:left}.md\\:text-blue-700{--tw-text-opacity:1;color:rgb(26 86 219/var(--tw-text-opacity))}.md\\:hover\\:bg-transparent:hover{background-color:transparent}.md\\:hover\\:text-blue-700:hover{--tw-text-opacity:1;color:rgb(26 86 219/var(--tw-text-opacity))}.md\\:dark\\:bg-gray-900:is(.dark *){--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity))}.md\\:dark\\:text-blue-500:is(.dark *){--tw-text-opacity:1;color:rgb(63 131 248/var(--tw-text-opacity))}.md\\:dark\\:hover\\:bg-transparent:hover:is(.dark *){background-color:transparent}.md\\:dark\\:hover\\:text-blue-500:hover:is(.dark *){--tw-text-opacity:1;color:rgb(63 131 248/var(--tw-text-opacity))}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:px-8{padding-left:2rem;padding-right:2rem}}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:space-x-reverse:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}`;
export {
  main as default
};
//# sourceMappingURL=entry-styles-2.mjs-Bsq2hG5q.js.map
