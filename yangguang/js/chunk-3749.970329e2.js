(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3749"],{3155:function(e,t,i){},b171:function(e,t,i){"use strict";var n=i("b654"),a=i.n(n);a.a},b654:function(e,t,i){},ebad:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"quill-editor"},[e._t("toolbar"),i("div",{ref:"editor"})],2)},a=[],s=i("9339"),l=i.n(s),o={theme:"snow",boundary:document.body,modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},placeholder:"Insert text here ...",readOnly:!1};const r=window.Quill||l.a;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");const i=Object(e);for(let n=1;n<arguments.length;n++){const e=arguments[n];if(null!=e)for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}return i},writable:!0,configurable:!0});var c={name:"quill-editor",data(){return{_options:{},_content:"",defaultOptions:o}},props:{content:String,value:String,disabled:{type:Boolean,default:!1},options:{type:Object,required:!1,default:()=>({})},globalOptions:{type:Object,required:!1,default:()=>({})}},mounted(){this.initialize()},beforeDestroy(){this.quill=null,delete this.quill},methods:{initialize(){this.$el&&(this._options=Object.assign({},this.defaultOptions,this.globalOptions,this.options),this.quill=new r(this.$refs.editor,this._options),this.quill.enable(!1),(this.value||this.content)&&this.quill.pasteHTML(this.value||this.content),this.disabled||this.quill.enable(!0),this.quill.on("selection-change",e=>{e?this.$emit("focus",this.quill):this.$emit("blur",this.quill)}),this.quill.on("text-change",(e,t,i)=>{let n=this.$refs.editor.children[0].innerHTML;const a=this.quill,s=this.quill.getText();"<p><br></p>"===n&&(n=""),this._content=n,this.$emit("input",this._content),this.$emit("change",{html:n,text:s,quill:a})}),this.$emit("ready",this.quill))}},watch:{content(e,t){this.quill&&(e&&e!==this._content?(this._content=e,this.quill.pasteHTML(e)):e||this.quill.setText(""))},value(e,t){this.quill&&(e&&e!==this._content?(this._content=e,this.quill.pasteHTML(e)):e||this.quill.setText(""))},disabled(e,t){this.quill&&this.quill.enable(!e)}}},d=c,u=i("2877"),m=Object(u["a"])(d,n,a,!1,null,null,null);m.options.__file="editor.vue";t["a"]=m.exports},ffa2:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Card",[i("div",{staticClass:"search-con search-con-top"},[i("Select",{staticClass:"search-col",attrs:{placeholder:"请选择搜索字段",clearable:""},on:{"on-clear":e.searchKeyChange,"on-change":e.searchKeyChange},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},e._l([{key:"me_title",title:"主题"},{key:"me_name",title:"名称"}],function(t){return i("Option",{key:"search-col-"+t.key,attrs:{value:t.key}},[e._v(e._s(t.title))])})),"me_title"===e.searchKey?i("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入主题关键字搜索"},model:{value:e.me_title,callback:function(t){e.me_title=t},expression:"me_title"}}):e._e(),"me_name"===e.searchKey?i("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入名称关键字搜索"},model:{value:e.me_name,callback:function(t){e.me_name=t},expression:"me_name"}}):e._e(),i("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.getMeetingList}},[i("Icon",{attrs:{type:"search"}}),e._v("搜索")],1),e._l(e.permissionBtns,function(t){return 39===t.p_id?i("Button",{staticClass:"add-btn",attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v(e._s(t.p_name))]):e._e()})],2),i("Table",{ref:"tablesMain",attrs:{data:e.tableData,columns:e.columns}}),i("Page",{staticClass:"page",attrs:{total:e.total,"page-size":e.pageSize,"show-sizer":"","show-elevator":"","prev-text":"上一页","next-text":"下一页"},on:{"on-change":e.pageOnChange,"on-page-size-change":e.onPageSizeChange}}),i("Upload",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{action:"http://47.106.109.254:8090/m/uploadImage.do",headers:e.header,name:"image","on-success":e.handleSuccess,"before-upload":e.handleBeforeUpload,"on-format-error":e.handleFormatError}},[i("Button",{attrs:{id:"upLoadImg",icon:"ios-cloud-upload-outline"}},[e._v("Upload files")])],1)],1),i("Modal",{attrs:{width:"800","mask-closable":!1},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[i("p",{staticStyle:{color:"#2d8cf0"},attrs:{slot:"header"},slot:"header"},[i("span",[e._v(e._s(e.modalTitle))])]),i("Form",[i("FormItem",[i("label",[e._v("会议主题：")]),i("Input",{attrs:{placeholder:"请输入会议标题"},model:{value:e.meTitle,callback:function(t){e.meTitle=t},expression:"meTitle"}})],1),i("FormItem",[i("label",[e._v("会议名称：")]),i("Input",{attrs:{placeholder:"请输入会议标题"},model:{value:e.meName,callback:function(t){e.meName=t},expression:"meName"}})],1),i("FormItem",[i("label",[e._v("会议时间：")]),i("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm",editable:!1,placeholder:"选择会议日期和时间"},model:{value:e.meDate,callback:function(t){e.meDate=t},expression:"meDate"}})],1),i("FormItem",[i("label",[e._v("与会人员：")]),i("Select",{attrs:{filterable:"",multiple:""},model:{value:e.meUsers,callback:function(t){e.meUsers=t},expression:"meUsers"}},e._l(e.subDepartUsers,function(t){return i("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1),i("FormItem",[i("label",[e._v("内容：")]),i("quill-editor",{ref:"myQuillEditor",attrs:{options:e.editorOptions},model:{value:e.meContent,callback:function(t){e.meContent=t},expression:"meContent"}})],1)],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[e.isView||e.isEdit?e._e():i("Button",{attrs:{type:"info",size:"large"},on:{click:e.addMeeting}},[e._v("保存")]),e.isEdit?i("Button",{attrs:{type:"info",size:"large"},on:{click:e.editMeeting}},[e._v("修改")]):e._e()],1)],1)],1)},a=[],s=(i("ac4d"),i("8a81"),i("ac6a"),i("c5f6"),i("28a5"),i("ebad")),l=i("66df"),o=i("c276"),r=(i("3155"),i("88ec")),c={name:"meeting_page",components:{QuillEditor:s["a"]},data:function(){var e=this;return{me_title:"",me_name:"",columns:[{title:"会议主题",align:"center",key:"me_title",sortable:!0},{title:"会议名称",align:"center",key:"me_name"},{title:"创建时间",align:"center",key:"create_time"},{title:"操作",key:"handle",align:"center",render:function(t,i){for(var n=[],a=function(){var a=e.handleBtns[s];40===e.handleBtns[s].p_id?n.push(t("Button",{props:{type:"primary",size:"small",disabled:5===i.row.data_level},style:{margin:"2px"},on:{click:function(){e.showOneMeeting(e.showOneMeetingPath,i.row.me_id),e.showModal=!0,e.modalTitle="会议纪要修改",e.isView=!1,e.isEdit=!0,e.editId=i.row.me_id}}},"修改")):41===e.handleBtns[s].p_id?n.push(t("Button",{props:{type:"info",size:"small"},style:{margin:"2px"},on:{click:function(){e.showOneMeeting(e.showOneMeetingPath,i.row.me_id),e.showModal=!0,e.modalTitle="会议纪要查看",e.isView=!0,e.isEdit=!1}}},"查看")):42===e.handleBtns[s].p_id?n.push(t("Button",{props:{type:"error",size:"small",disabled:5===i.row.data_level},style:{margin:"2px"},on:{click:function(){e.deleteMeeting(a.p_path,i.row.me_id)}}},"删除")):43===e.handleBtns[s].p_id&&n.push(t("Button",{props:{type:"warning",size:"small",disabled:1===i.row.data_level},style:{margin:"2px"},on:{click:function(){e.restoreMeeting(a.p_path,i.row.me_id)}}},"恢复"))},s=0;s<e.handleBtns.length;s++)a();return t("div",n)}}],tableData:[],searchValue:"",searchKey:"",showModal:!1,modalTitle:"添加会议纪要",meTitle:"",meName:"",meDate:new Date,meContent:"",header:{},quill:null,editorOptions:{placeholder:"请输入公告内容…",modules:{toolbar:{container:[["bold","italic","underline","strike","image","clean"],[{header:1},{header:2}],[{color:[]},{background:[]}],[{align:[]}]],handlers:{image:function(e){e?(console.log(e),document.querySelector("#upLoadImg").click()):this.quill.format("image",!1)}}}}},meUsers:[],subDepartUsers:[],permissionBtns:[],handleBtns:[],isView:!1,isEdit:!1,total:0,pageNum:1,pageSize:20,getListPath:"",showOneMeetingPath:"",editId:""}},methods:{handleAdd:function(){this.showModal=!0,this.isView=!1,this.isEdit=!1,this.modalTitle="添加会议纪要"},getMeetingList:function(){var e=this;l["a"].request({url:"admin/adm/meeting/showEntity.do",data:{pageNum:this.pageNum,pageSize:this.pageSize,isSelf:!0,title:this.me_title,name:this.me_name},method:"post"}).then(function(t){if(200===t.status){e.tableData=[];for(var i=0;i<t.data.content.list.length;i++)e.tableData.push(t.data.content.list[i])}else e.$Notice.error({title:t.data.msg})})},addMeeting:function(){var e=this,t=e.meDate.getFullYear()+"-"+(e.meDate.getMonth()+1)+"-"+e.meDate.getDate()+" "+e.meDate.getHours()+":"+e.meDate.getMinutes();l["a"].request({url:"admin/adm/meeting/addEntity.do",data:{meTitle:e.meTitle,meName:e.meName,meDate:t,meUsers:e.meUsers.join(","),meFollow:"无",meContent:e.meContent},method:"post"}).then(function(t){200===t.data.code?(e.getMeetingList(),e.showModal=!1,e.$Notice.success({title:"会议纪要添加成功"})):e.$Notice.error({title:t.data.msg})})},editMeeting:function(){var e=this,t=e.meDate.getFullYear()+"-"+(e.meDate.getMonth()+1)+"-"+e.meDate.getDate()+" "+e.meDate.getHours()+":"+e.meDate.getMinutes();l["a"].request({url:"admin/adm/meeting/editEntity.do",data:{meId:e.editId,meTitle:e.meTitle,meName:e.meName,meDate:t,meUsers:e.meUsers.join(","),meFollow:"无",meContent:e.meContent},method:"post"}).then(function(t){200===t.data.code?(e.getMeetingList(),e.showModal=!1,e.$Notice.success({title:"会议纪要修改成功"})):e.$Notice.error({title:t.data.msg})})},showOneMeeting:function(e,t){var i=this;l["a"].request({url:e,data:{entityId:t},method:"post"}).then(function(e){i.meTitle=e.data.content.me_title,i.meName=e.data.content.me_name,i.meDate=e.data.content.me_date,i.meContent=e.data.content.me_content,i.meUsers=e.data.content.me_users.split(",").map(Number)})},deleteMeeting:function(e,t){var i=this;this.$Modal.confirm({title:"提示",content:"确认删除该会议纪要？",onOk:function(){l["a"].request({url:e,data:{entityId:t},method:"post"}).then(function(e){200===e.data.code?(i.getMeetingList(),i.$Notice.success({title:"删除成功"})):i.$Notice.error({title:e.data.msg})})}})},restoreMeeting:function(e,t){var i=this;i.$Modal.confirm({title:"提示",content:"确认恢复该会议纪要？",onOk:function(){l["a"].request({url:e,data:{entityId:t},method:"post"}).then(function(e){200===e.data.code?(i.getMeetingList(),i.$Notice.success({title:"恢复成功"})):i.$Notice.error({title:e.data.msg})})}})},handleSuccess:function(e,t){var i=this;if(i.$Spin.hide(),200===e.code&&null!==e.content){var n=i.quill.getSelection().index;i.quill.insertEmbed(n,"image","http://47.106.109.254:8090/"+e.content),i.quill.setSelection(n+1)}else i.$Notice.error({title:e.msg})},handleFormatError:function(){},handleBeforeUpload:function(){this.$Spin.show({render:function(e){return e("div",[e("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),e("div","upLoading")])}})},getSubDepartUsers:function(){var e=this;l["a"].request({url:"m/getSubDepartUsers.do",method:"post"}).then(function(t){for(var i in t.data.content)e.subDepartUsers.push({label:t.data.content[i].username,value:t.data.content[i].id})})},getPermissionBtns:function(){this.permissionBtns=[];var e=!0,t=!1,i=void 0;try{for(var n,a=r["a"].permission[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var s=n.value;s.p_fid===this.$route.meta.id&&(this.permissionBtns.push(s),38===s.p_id&&(this.getListPath=s.p_path),41===s.p_id&&(this.showOneMeetingPath=s.p_path),40!==s.p_id&&41!==s.p_id&&42!==s.p_id&&43!==s.p_id||this.handleBtns.push(s))}}catch(e){t=!0,i=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw i}}},pageOnChange:function(e){this.pageNum=e,this.getMeetingList()},onPageSizeChange:function(e){this.pageNum=1,this.pageSize=e,this.getMeetingList()},searchKeyChange:function(){this.me_title="",this.me_name=""}},mounted:function(){this.getPermissionBtns(),this.getMeetingList(),this.header={authorization:Object(o["i"])()},this.quill=this.$refs.myQuillEditor.quill,this.getSubDepartUsers()},watch:{showModal:function(e){e||(this.meTitle="",this.meName="",this.meDate=new Date,this.meUsers=[],this.meContent="")}}},d=c,u=(i("b171"),i("2877")),m=Object(u["a"])(d,n,a,!1,null,null,null);m.options.__file="meeting.vue";t["default"]=m.exports}}]);