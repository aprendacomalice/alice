import{G as m,B as g,D as f,q as b,o as i,c as n,x as d,p as o,t as y,d as c,e as z,v as u,h as l,am as w}from"./index-CIQDRCD9.js";var k=m`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,S={root:function(e){var r=e.props;return["p-avatar p-component",{"p-avatar-image":r.image!=null,"p-avatar-circle":r.shape==="circle","p-avatar-lg":r.size==="large","p-avatar-xl":r.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},$=g.extend({name:"avatar",style:k,classes:S}),P={name:"BaseAvatar",extends:b,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:$,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function s(a){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(a)}function h(a,e,r){return(e=C(e))in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function C(a){var e=I(a,"string");return s(e)=="symbol"?e:e+""}function I(a,e){if(s(a)!="object"||!a)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var p=r.call(a,e);if(s(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}var B={name:"Avatar",extends:P,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return f(h(h({},this.shape,this.shape),this.size,this.size))}}},E=["aria-labelledby","aria-label","data-p"],K=["data-p"],A=["data-p"],L=["src","alt","data-p"];function j(a,e,r,p,v,t){return i(),n("div",o({class:a.cx("root"),"aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel},a.ptmi("root"),{"data-p":t.dataP}),[d(a.$slots,"default",{},function(){return[a.label?(i(),n("span",o({key:0,class:a.cx("label")},a.ptm("label"),{"data-p":t.dataP}),y(a.label),17,K)):a.$slots.icon?(i(),c(u(a.$slots.icon),{key:1,class:z(a.cx("icon"))},null,8,["class"])):a.icon?(i(),n("span",o({key:2,class:[a.cx("icon"),a.icon]},a.ptm("icon"),{"data-p":t.dataP}),null,16,A)):a.image?(i(),n("img",o({key:3,src:a.image,alt:a.ariaLabel,onError:e[0]||(e[0]=function(){return t.onError&&t.onError.apply(t,arguments)})},a.ptm("image"),{"data-p":t.dataP}),null,16,L)):l("",!0)]})],16,E)}B.render=j;var D=m`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,N={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},T=g.extend({name:"chip",style:D,classes:N}),q={name:"BaseChip",extends:b,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:T,provide:function(){return{$pcChip:this,$parentInstance:this}}},G={name:"Chip",extends:q,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)},close:function(e){this.visible=!1,this.$emit("remove",e)}},computed:{dataP:function(){return f({removable:this.removable})}},components:{TimesCircleIcon:w}},O=["aria-label","data-p"],V=["src"];function F(a,e,r,p,v,t){return v.visible?(i(),n("div",o({key:0,class:a.cx("root"),"aria-label":a.label},a.ptmi("root"),{"data-p":t.dataP}),[d(a.$slots,"default",{},function(){return[a.image?(i(),n("img",o({key:0,src:a.image},a.ptm("image"),{class:a.cx("image")}),null,16,V)):a.$slots.icon?(i(),c(u(a.$slots.icon),o({key:1,class:a.cx("icon")},a.ptm("icon")),null,16,["class"])):a.icon?(i(),n("span",o({key:2,class:[a.cx("icon"),a.icon]},a.ptm("icon")),null,16)):l("",!0),a.label?(i(),n("div",o({key:3,class:a.cx("label")},a.ptm("label")),y(a.label),17)):l("",!0)]}),a.removable?d(a.$slots,"removeicon",{key:0,removeCallback:t.close,keydownCallback:t.onKeydown},function(){return[(i(),c(u(a.removeIcon?"span":"TimesCircleIcon"),o({class:[a.cx("removeIcon"),a.removeIcon],onClick:t.close,onKeydown:t.onKeydown},a.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):l("",!0)],16,O)):l("",!0)}G.render=F;export{G as a,B as s};
