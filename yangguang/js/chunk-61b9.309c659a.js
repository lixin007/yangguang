(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61b9"],{"2daf":function(t,e,a){},"4d64":function(t,e,a){"use strict";var s=a("2daf"),i=a.n(s);i.a},"749b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Tabs",{attrs:{value:"name1"}},[a("TabPane",{attrs:{label:"我的申请列表",name:"name1"}},[a("Card",[a("div",{staticClass:"search-con"},[a("Button",{staticClass:"search-btn",attrs:{type:"primary"}},[a("Icon",{attrs:{type:"search"}}),t._v("搜索")],1),t._l(t.permissionBtns,function(e){return 102===e.p_id?a("Button",{staticClass:"add-btn",attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v(t._s(e.p_name))]):t._e()})],2),a("Table",{ref:"tablesAsk",attrs:{data:t.tableData,columns:t.columns}}),a("Page",{staticClass:"page",attrs:{total:t.total,"page-size":t.pageSize,transfer:"","show-sizer":"","show-elevator":"","prev-text":"上一页","next-text":"下一页"},on:{"on-change":t.pageOnChange,"on-page-size-change":t.onPageSizeChange}})],1)],1),a("TabPane",{attrs:{label:"待我审批列表",name:"name2"}},[a("Card",[a("div",{staticClass:"search-con"},[a("Button",{staticClass:"search-btn",attrs:{type:"primary"}},[a("Icon",{attrs:{type:"search"}}),t._v("搜索")],1)],1),a("Table",{ref:"tablesWait",attrs:{data:t.tableData_wait,columns:t.columns_wait,stripe:!0}}),a("Page",{staticClass:"page",attrs:{total:t.total_wait,"page-size":t.pageSize_wait,transfer:"","show-sizer":"","show-elevator":"","prev-text":"上一页","next-text":"下一页"},on:{"on-change":t.pageOnChange_wait,"on-page-size-change":t.onPageSizeChange_wait}})],1)],1)],1),a("Modal",{attrs:{width:"800","mask-closable":!1},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a("p",{staticStyle:{color:"#2d8cf0"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.modalTitle))])]),a("Row",{staticClass:"form-container"},[a("Col",{staticClass:"form-container-item",attrs:{span:"12"}},[a("label",[t._v("原部门：")]),a("Select",{attrs:{disabled:t.isView,placeholder:"请填写原部门"},model:{value:t.atOrgindepart,callback:function(e){t.atOrgindepart=e},expression:"atOrgindepart"}},t._l(t.allDepart,function(e){return a("Option",{attrs:{value:e.depart_id}},[t._v(t._s(e.depart_name))])}))],1),a("Col",{staticClass:"form-container-item",attrs:{span:"12"}},[a("label",[t._v("原职务：")]),a("Select",{attrs:{disabled:t.isView,placeholder:"请填写原职务"},model:{value:t.atOrginrole,callback:function(e){t.atOrginrole=e},expression:"atOrginrole"}},t._l(t.allRole,function(e){return a("Option",{attrs:{value:e.role_id}},[t._v(t._s(e.role_name))])}))],1),a("Col",{staticClass:"form-container-item",attrs:{span:"12"}},[a("label",[t._v("现部门：")]),a("Select",{attrs:{disable:t.isView,placeholder:"请填写现部门"},model:{value:t.atNewdepart,callback:function(e){t.atNewdepart=e},expression:"atNewdepart"}},t._l(t.allDepart,function(e){return a("Option",{attrs:{value:e.depart_id}},[t._v(t._s(e.depart_name))])}))],1),a("Col",{staticClass:"form-container-item",attrs:{span:"12"}},[a("label",[t._v("现职务：")]),a("Select",{attrs:{disabled:t.isView,placeholder:"请填写现职务"},model:{value:t.atNewrole,callback:function(e){t.atNewrole=e},expression:"atNewrole"}},t._l(t.allRole,function(e){return a("Option",{attrs:{value:e.role_id}},[t._v(t._s(e.role_name))])}))],1),a("Col",{staticClass:"form-container-item",attrs:{span:"24"}},[a("label",{staticStyle:{width:"125px"}},[t._v("能力描述：")]),a("Input",{staticStyle:{width:"100%"},attrs:{readonly:t.isView,type:"textarea",placeholder:"请填写能力描述"},model:{value:t.atDescript,callback:function(e){t.atDescript=e},expression:"atDescript"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[t.isView||t.isEdit?t._e():a("Button",{attrs:{type:"info",size:"large"},on:{click:t.addEntity}},[t._v("保存")]),t.isEdit?a("Button",{attrs:{type:"info",size:"large"},on:{click:t.editEntity}},[t._v("修改")]):t._e()],1)],1),a("Modal",{attrs:{width:"400","mask-closable":!1},model:{value:t.showSubmitModal,callback:function(e){t.showSubmitModal=e},expression:"showSubmitModal"}},[a("p",{staticStyle:{color:"#2d8cf0"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v("提交提薪申请")])]),a("Row",{staticClass:"form-container"},[a("Col",{staticClass:"form-container-item",attrs:{span:"24"}},[a("label",[t._v("主任审批：")]),a("Select",{attrs:{placeholder:"请选择审批人"},model:{value:t.directorId,callback:function(e){t.directorId=e},expression:"directorId"}},t._l(t.directorList,function(e){return a("Option",{key:"search-col-"+e.id,attrs:{value:e.id}},[t._v(t._s(e.username))])}))],1),a("Col",{staticClass:"form-container-item",attrs:{span:"24"}},[a("label",[t._v("干事审批：")]),a("Select",{attrs:{placeholder:"请选择审批人"},model:{value:t.generalId,callback:function(e){t.generalId=e},expression:"generalId"}},t._l(t.generalList,function(e){return a("Option",{key:"search-col-"+e.id,attrs:{value:e.id}},[t._v(t._s(e.username))])}))],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"info",size:"large"},on:{click:t.submitEntity}},[t._v("提交")])],1)],1),a("Modal",{attrs:{width:"400","mask-closable":!1},model:{value:t.showApproveModal,callback:function(e){t.showApproveModal=e},expression:"showApproveModal"}},[a("p",{staticStyle:{color:"#2d8cf0"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v("审批")])]),a("Input",{staticStyle:{"margin-top":"10px"},attrs:{type:"textarea",placeholder:"填写通过或拒绝原因…"},model:{value:t.approveReason,callback:function(e){t.approveReason=e},expression:"approveReason"}}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"warning"},on:{click:function(e){t.approveEvent(!1)}}},[t._v("驳回")]),a("Button",{attrs:{type:"info"},on:{click:function(e){t.approveEvent(!0)}}},[t._v("通过")])],1)],1),a("Modal",{attrs:{width:"400","footer-hide":""},model:{value:t.showApproveModalDetail,callback:function(e){t.showApproveModalDetail=e},expression:"showApproveModalDetail"}},[a("p",{staticStyle:{color:"#2d8cf0"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v("详情")])]),a("div",{staticStyle:{display:"flex","justify-content":"center",margin:"5px 0"}},[a("label",[t._v("申请人：")]),a("div",[t._v("admin")])]),a("div",{staticStyle:{display:"flex","justify-content":"center"}},[a("label",[t._v("申请原因：")]),a("div",[t._v("哈哈")])])])],1)},i=[],o=(a("ac4d"),a("8a81"),a("ac6a"),a("66df")),n=a("c276"),l=a("90de"),r=a("88ec"),d={data:function(){var t=this;return{columns:[{title:"序号",align:"center",key:"us_id",sortable:!0},{title:"申请人",align:"center",key:"username"},{title:"现部门",align:"center",key:"at_orgindepart"},{title:"原部门",align:"center",key:"at_orginrole"},{title:"现职务",align:"center",key:"at_newdepart"},{title:"原职务",align:"center",key:"at_newrole"},{title:"操作",key:"handle",align:"center",minWidth:100,render:function(e,a){for(var s=[],i=function(){var i=t.handleBtns[o];82===t.handleBtns[o].p_id?s.push(e("Button",{props:{type:"primary",size:"small",disabled:5===a.row.data_level},style:{margin:"2px"},on:{click:function(){t.showOneEntity(t.showOnePath,a.row.us_id),t.showModal=!0,t.modalTitle="提薪申请修改",t.isView=!1,t.isEdit=!0,t.editId=a.row.us_id}}},"修改")):83===t.handleBtns[o].p_id?s.push(e("Button",{props:{type:"info",size:"small"},style:{margin:"2px"},on:{click:function(){t.showOneEntity(i.p_path,a.row.us_id),t.showModal=!0,t.modalTitle="提薪申请查看",t.isView=!0,t.isEdit=!1}}},"查看")):84===t.handleBtns[o].p_id?s.push(e("Button",{props:{type:"error",size:"small",disabled:5===a.row.data_level},style:{margin:"2px"},on:{click:function(){t.deleteEntity(a.row.us_id)}}},"删除")):85===t.handleBtns[o].p_id?s.push(e("Button",{props:{type:"warning",size:"small",disabled:1===a.row.data_level},style:{margin:"2px"},on:{click:function(){t.restoreEntity(i.p_path,a.row.us_id)}}},"恢复")):86===t.handleBtns[o].p_id&&s.push(e("Button",{props:{type:"success",size:"small",disabled:5===a.row.data_level},style:{margin:"2px"},on:{click:function(){t.submitEvent(a.row.us_id)}}},"提交"))},o=0;o<t.handleBtns.length;o++)i();return e("div",s)}}],columns_wait:[{title:"流水号",align:"center",key:"PROC_INST_ID_"},{title:"申请人",align:"center",key:"APP_USERNAME_"},{title:"操作",key:"handle",align:"center",minWidth:100,render:function(e,a){return e("div",[e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.showApproveModalDetail=!0}}},"详情"),e("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.processId=a.row.PROC_INST_ID_,t.taskId=a.row.ID_,t.showApproveModal=!0}}},"审批")])}}],tableData:[],tableData_wait:[],total:0,total_wait:0,pageNum:1,pageNum_wait:1,pageSize:10,pageSize_wait:10,searchKey:"",searchValue:"",modalTitle:"添加申请",showModal:!1,showSubmitModal:!1,searchKey_wait:"",searchValue_wait:"",modalTitle_wait:"",showModal_wait:!1,appUser:"",appUserList:[],appUserPageNum:1,appUserPageSize:20,permissionBtns:[],handleBtns:[],addOnePath:"",getListPath:"",showOnePath:"",deleteOnePath:"",editId:"",submitId:"",submitPath:"",isView:!1,isEdit:!1,directorId:"",directorList:[],generalId:"",generalList:[],atOrgindepart:"",atOrginrole:"",atNewdepart:"",atNewrole:"",atDescript:"",showApproveModal:!1,showApproveModalDetail:!1,processId:"",taskId:"",approveReason:"",allDepart:[],allRole:[]}},methods:{handleAdd:function(){this.showModal=!0,this.isView=!1,this.isEdit=!1,this.modalTitle="添加申请"},addEntity:function(){var t=this;o["a"].request({url:t.addOnePath,data:{appUser:Object(n["j"])(),usReason:t.usReason,usNowSalary:t.usNowSalary,usNewSalary:t.usNewSalary},method:"post"}).then(function(e){200===e.data.code?(t.getDataList(),t.showModal=!1,t.$Notice.success({title:"申请添加成功"})):t.$Notice.error({title:e.data.msg})})},editEntity:function(){var t=this;o["a"].request({url:"admin/human/askLeave/editEntity.do",data:{alId:t.editId,appUser:Object(n["j"])(),alType:t.alType,alYear:t.alYear,otherType:t.otherType,alStarttime:Object(l["b"])(new Date(t.alTime[0]),"yyyy-MM-dd hh:MM:ss"),alEndtime:Object(l["b"])(new Date(t.alTime[1]),"yyyy-MM-dd hh:MM:ss"),alDays:t.alDays,alReason:t.alReason,alTell:t.alTell},method:"post"}).then(function(e){200===e.data.code?(t.getDataList(),t.showModal=!1,t.$Notice.success({title:"申请修改成功"})):t.$Notice.error({title:e.data.msg})})},deleteEntity:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确认删除该申请？",onOk:function(){o["a"].request({url:e.deleteOnePath,data:{entityId:t},method:"post"}).then(function(t){200===t.data.code?(e.getDataList(),e.$Notice.success({title:"申请删除成功"})):e.$Notice.error({title:t.data.msg})})}})},restoreEntity:function(t,e){var a=this;a.$Modal.confirm({title:"提示",content:"确认恢复该申请？",onOk:function(){o["a"].request({url:t,data:{entityId:e},method:"post"}).then(function(t){200===t.data.code?(a.getDataList(),a.$Notice.success({title:"申请恢复成功"})):a.$Notice.error({title:t.data.msg})})}})},submitEvent:function(t){this.submitId=t,this.showSubmitModal=!0},submitEntity:function(){var t=this;t.$Modal.confirm({title:"提示",content:"确认提交申请？",onOk:function(){o["a"].request({url:t.submitPath,data:{entityId:t.submitId,directorId:t.directorId,generalId:t.generalId},method:"post"}).then(function(e){200===e.data.code?(t.getDataList(),t.$Notice.success({title:"申请提交成功"})):t.$Notice.error({title:e.data.msg})})}})},getDataList:function(t){var e=this;o["a"].request({url:e.getListPath,data:{pageNum:e.pageNum,pageSize:e.pageSize,type:e.lb_type},method:"post"}).then(function(a){200===a.status&&(e.tableData=a.data.content.list,e.total=a.data.content.total,"function"===typeof t&&t())})},getNeedApprovalList:function(){var t=this;o["a"].request({url:"m/approval/needApproval.do",data:{pageNum:t.pageNum_wait,pageSize:t.pageSize_wait,type:"AT"},method:"post"}).then(function(e){200===e.status&&(t.tableData_wait=e.data.content.list,t.total_wait=e.data.content.total)})},showOneEntity:function(t,e){o["a"].request({url:t,data:{entityId:e},method:"post"}).then(function(t){})},pageOnChange:function(t){this.pageNum=t,this.getDataList()},pageOnChange_wait:function(t){this.pageNum_wait=t,this.getNeedApprovalList()},onPageSizeChange:function(t){this.pageNum=1,this.pageSize=t,this.getDataList()},onPageSizeChange_wait:function(t){this.pageNum_wait=1,this.pageSize_wait=t,this.getNeedApprovalList()},getAppUserList:function(t){var e=this;o["a"].request({url:"",data:{pageNum:e.appUserPageNum,pageSize:e.appUserPageSize,apporType:t},method:"post"}).then(function(t){console.log(t)})},getPermissionBtns:function(){this.permissionBtns=[];var t=!0,e=!1,a=void 0;try{for(var s,i=r["a"].permission[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var o=s.value;o.p_fid===this.$route.meta.id&&(this.permissionBtns.push(o),101===o.p_id&&(this.getListPath=o.p_path),102===o.p_id&&(this.addOnePath=o.p_path),104===o.p_id&&(this.showOnePath=o.p_path),105===o.p_id&&(this.deleteOnePath=o.p_path),107===o.p_id&&(this.submitPath=o.p_path),103!==o.p_id&&104!==o.p_id&&105!==o.p_id&&106!==o.p_id&&107!==o.p_id||this.handleBtns.push(o))}}catch(t){e=!0,a=t}finally{try{t||null==i.return||i.return()}finally{if(e)throw a}}},searchKeyChange:function(){this.lb_type=""},getDirectorList:function(){var t=this;o["a"].request({url:"/m/approval/getApprovalor.do",data:{apporType:"DIRECTOR"},method:"post"}).then(function(e){t.directorList=e.data.content.list})},getGeneralList:function(){var t=this;o["a"].request({url:"/m/approval/getApprovalor.do",data:{apporType:"GENERALOR"},method:"post"}).then(function(e){t.generalList=e.data.content.list})},approveEvent:function(t){var e=this;o["a"].request({url:"/m/approval/commonApproval.do",data:{processId:e.processId,taskId:e.taskId,isPass:t,reason:e.approveReason},method:"post"}).then(function(t){200===t.status?(e.$Notice.success({title:"审批成功"}),e.showApproveModal=!1,e.processId="",e.taskId="",e.approveReason="",e.getNeedApprovalList()):e.$Notice.error({title:t.data.msg})})},getApproveDetail:function(t){o["a"].request({url:"/admin/human/updateSalary/showOneEntity.do",data:{entityId:t},method:"post"}).then(function(t){200===t.status&&console.log(t)})},getAllDepart:function(){var t=this;o["a"].request({url:"/admin/settings/depart/showEntity.do",data:{dataLevel:1},method:"post"}).then(function(e){for(var a in e.data.content.list)t.allDepart.push(e.data.content.list[a])})},getAllRole:function(){var t=this;o["a"].request({url:"/admin/settings/role/showEntity.do",data:{dataLevel:1},method:"post"}).then(function(e){for(var a in e.data.content.list)t.allRole.push(e.data.content.list[a])})}},mounted:function(){this.getPermissionBtns(),this.getDataList(),this.getNeedApprovalList(),this.getDirectorList(),this.getGeneralList(),this.getAllDepart(),this.getAllRole()},watch:{showModal:function(t){},showApproveModal:function(t){t||(this.processId="",this.taskId="",this.approeReason="")}}},p=d,c=(a("4d64"),a("2877")),u=Object(c["a"])(p,s,i,!1,null,null,null);u.options.__file="changePosition.vue";e["default"]=u.exports}}]);