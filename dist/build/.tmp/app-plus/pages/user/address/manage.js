(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/manage"],{"02d0":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(a("a34a")),r=a("802d"),s=a("2b74");function u(t){return t&&t.__esModule?t:{default:t}}function d(t,e,a,n,i,r,s){try{var u=t[r](s),d=u.value}catch(c){return void a(c)}u.done?e(d):Promise.resolve(d).then(n,i)}function c(t){return function(){var e=this,a=arguments;return new Promise((function(n,i){var r=t.apply(e,a);function s(t){d(r,n,i,s,u,"next",t)}function u(t){d(r,n,i,s,u,"throw",t)}s(void 0)}))}}var l=function(){return a.e("components/rf-pick-regions/index").then(a.bind(null,"c1eb"))},o={components:{rfPickRegions:l},data:function(){return{addressData:{realname:"",mobile:"",address_details:"",address_name:"请选择地址",address:"",is_default:!1,province_id:"",city_id:"",area_id:""},multiArray:[[],[],[]],multiIndex:[0,0,0],loading:!0}},onLoad:function(t){this.initData(t)},methods:{handleGetRegions:function(t){this.addressData.province_id=t.province_id,this.addressData.city_id=t.city_id,this.addressData.area_id=t.area_id},initData:function(){var e=c(i.default.mark((function e(a){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n="新增收货地址","edit"!==a.type){e.next=5;break}return n="编辑收货地址",e.next=5,this.getAddressDetail(a.id);case 5:return this.manageType=a.type,t.setNavigationBarTitle({title:n}),e.next=9,this.getProvinceList();case 9:case"end":return e.stop()}}),e,this)})));function a(t){return e.apply(this,arguments)}return a}(),getAddressDetail:function(){var t=c(i.default.mark((function t(e){var a=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(r.addressDetail),{id:e}).then(function(){var t=c(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.addressData=e.data,a.loading=!1;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){a.loading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getProvinceList:function(){var t=c(i.default.mark((function t(){var e,a,r,u,d,l,o,h,f,p=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=0,a=0,r=0,u=null,d=null,l=null,o=null,h=null,f=null,t.next=11,this.$get("".concat(s.provinceList)).then(function(){var t=c(i.default.mark((function t(m){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return p.multiArray[0]=m.data,p.addressData.province_id?m.data.forEach((function(t,a){parseInt(t.id,10)==parseInt(p.addressData.province_id,10)&&(e=a,u=t.id,o=t.title)})):(u=p.multiArray[0][0].id,o=p.multiArray[0][0].title),t.next=4,p.$get("".concat(s.provinceList),{pid:u}).then(function(){var t=c(i.default.mark((function t(c){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return p.multiArray[1]=c.data,p.addressData.city_id?c.data.forEach((function(t,e){parseInt(t.id,10)==parseInt(p.addressData.city_id,10)&&(a=e,d=t.id,h=t.title)})):(d=p.multiArray[1][0].id,h=p.multiArray[1][0].title),t.next=4,p.$get("".concat(s.provinceList),{pid:d}).then((function(t){p.multiArray[2]=t.data,p.addressData.area_id?t.data.forEach((function(t,e){parseInt(t.id,10)==parseInt(p.addressData.area_id,10)&&(r=e,l=t.id,f=t.title)})):(l=p.multiArray[2][0].id,f=p.multiArray[2][0].title),p.multiIndex=[e,a,r],p.addressData.province_id=u,p.addressData.city_id=d,p.addressData.area_id=l,p.addressData.address_name="".concat(o,", ").concat(h,", ").concat(f),p.loading=!1})).catch((function(t){p.loading=!1,console.log(n(t," at pages/user/address/manage.vue:174"))}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(n(t," at pages/user/address/manage.vue:177"))}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(n(t," at pages/user/address/manage.vue:180"))}));case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),bindMultiPickerColumnChange:function(){var t=c(i.default.mark((function t(e){var a,r,u,d,l,o,h,f,p,m=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.multiIndex[e.detail.column]=e.detail.value,a=0,r=0,u=0,d=null,l=null,o=null,h=null,f=null,p=null,t.t0=e.detail.column,t.next=0===t.t0?13:1===t.t0?22:2===t.t0?39:60;break;case 13:t.t1=this.multiIndex[0],t.next=t.t1===this.multiIndex[0]?16:21;break;case 16:return d=this.multiArray[0][e.detail.value].id,h=this.multiArray[0][e.detail.value].title,t.next=20,this.$get("".concat(s.provinceList),{pid:this.multiArray[0][e.detail.value].id}).then(function(){var t=c(i.default.mark((function t(r){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return m.multiArray[1]=r.data,l=m.multiArray[1][0].id,f=m.multiArray[1][0].title,a=e.detail.value,m.multiIndex=[a,0,0],t.next=7,m.$get("".concat(s.provinceList),{pid:m.multiArray[1][e.detail.column].id}).then((function(t){m.multiArray[2]=t.data,o=m.multiArray[2][0].id,p=m.multiArray[2][0].title})).catch((function(t){console.log(n(t," at pages/user/address/manage.vue:217"))}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(n(t," at pages/user/address/manage.vue:220"))}));case 20:return t.abrupt("break",21);case 21:return t.abrupt("break",60);case 22:t.t2=this.multiIndex[0],t.next=t.t2===this.multiIndex[0]?25:38;break;case 25:t.t3=this.multiIndex[1],t.next=t.t3===this.multiIndex[1]?28:37;break;case 28:return d=this.multiArray[0][this.multiIndex[0]].id,h=this.multiArray[0][this.multiIndex[0]].title,l=this.multiArray[1][e.detail.value].id,f=this.multiArray[1][e.detail.value].title,r=e.detail.value,this.multiIndex=[this.multiIndex[0],r,0],t.next=36,this.$get("".concat(s.provinceList),{pid:this.multiArray[1][e.detail.value].id}).then((function(t){m.multiArray[2]=t.data})).catch((function(t){console.log(n(t," at pages/user/address/manage.vue:242"))}));case 36:return t.abrupt("break",37);case 37:return t.abrupt("break",38);case 38:return t.abrupt("break",60);case 39:t.t4=this.multiIndex[0],t.next=t.t4===this.multiIndex[0]?42:59;break;case 42:t.t5=this.multiIndex[1],t.next=t.t5===this.multiIndex[1]?45:58;break;case 45:t.t6=this.multiIndex[2],t.next=t.t6===this.multiIndex[2]?48:57;break;case 48:return d=this.multiArray[0][this.multiIndex[0]].id,h=this.multiArray[0][this.multiIndex[0]].title,l=this.multiArray[1][this.multiIndex[1]].id,f=this.multiArray[1][this.multiIndex[1]].title,o=this.multiArray[2][e.detail.value].id,p=this.multiArray[2][e.detail.value].title,u=e.detail.value,this.multiIndex=[this.multiIndex[0],this.multiIndex[1],u],t.abrupt("break",57);case 57:return t.abrupt("break",58);case 58:return t.abrupt("break",59);case 59:return t.abrupt("break",60);case 60:this.addressData.address_name="".concat(h,", ").concat(f,", ").concat(p),this.addressData.province_id=d,this.addressData.city_id=l,this.addressData.area_id=o,this.$forceUpdate();case 65:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleRealNameChange:function(t){this.addressData.realname=t.detail.value},bindAddressDetailsChange:function(t){this.addressData.address_details=t.detail.value},handleMobileChange:function(t){this.addressData.mobile=t.detail.value},switchChange:function(t){this.addressData.is_default=t.detail.value},chooseLocation:function(){var e=this;t.chooseLocation({success:function(t){e.addressData.addressName=t.name,e.addressData.address=t.name}})},confirm:function(){var t=this.addressData;t.realname?/(^1[3|4|5|7|8][0-9]{9}$)/.test(t.mobile)?"edit"===this.manageType?this.handleAddressUpdate(t):this.handleAddressCreate(t):this.$api.msg("请输入正确的手机号码"):this.$api.msg("请填写收货人姓名")},handleAddressUpdate:function(){var e=c(i.default.mark((function e(a){var s=this;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$put("".concat(r.addressUpdate,"?id=").concat(a.id),{realname:a.realname,mobile:a.mobile,address_details:a.address_details,is_default:a.is_default?1:0,province_id:a.province_id,city_id:a.city_id,area_id:a.area_id}).then((function(e){s.$api.msg("恭喜您, 收货地址修改成功！"),t.navigateBack()})).catch((function(t){console.log(n(t," at pages/user/address/manage.vue:339"))}));case 2:case"end":return e.stop()}}),e,this)})));function a(t){return e.apply(this,arguments)}return a}(),handleAddressCreate:function(){var e=c(i.default.mark((function e(a){var s=this;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$post("".concat(r.addressCreate),{realname:a.realname,mobile:a.mobile,address_details:a.address_details,is_default:a.is_default?1:0,province_id:a.province_id,city_id:a.city_id,area_id:a.area_id}).then((function(e){s.$api.msg("恭喜您, 收货地址修改成功！"),t.navigateBack()})).catch((function(t){console.log(n(t," at pages/user/address/manage.vue:355"))}));case 2:case"end":return e.stop()}}),e,this)})));function a(t){return e.apply(this,arguments)}return a}()}};e.default=o}).call(this,a("6e42")["default"],a("0de9")["default"])},"6efb":function(t,e,a){"use strict";(function(t){a("6cdc"),a("921b");n(a("66fd"));var e=n(a("7d57"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},7835:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}))},"7d57":function(t,e,a){"use strict";a.r(e);var n=a("7835"),i=a("b162");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("ab57");var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},ab57:function(t,e,a){"use strict";var n=a("c04b"),i=a.n(n);i.a},b162:function(t,e,a){"use strict";a.r(e);var n=a("02d0"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},c04b:function(t,e,a){}},[["6efb","common/runtime","common/vendor"]]]);