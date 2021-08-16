(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{43:function(e,t,a){e.exports=a(76)},49:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(36),c=a.n(r),l=a(7),i=a(9),u=a(10),s=a(13),m=a(12),d=a(14),h=a(16),g=(a(48),a(49),a(1)),v=a(37),b=a.n(v).a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json"}}),p=new(function(){function e(){Object(i.a)(this,e)}return Object(u.a)(e,[{key:"getAll",value:function(){return b.get("dao/findAll")}},{key:"get",value:function(e){return b.get("dao/findById?id=".concat(e))}},{key:"getSocial",value:function(e){return b.get("/findById?id=".concat(e))}},{key:"create",value:function(e){return b.post("dao/create",e)}},{key:"addSocialMedia",value:function(e,t){return b.post("dao/addSocialMedia?id=".concat(e),t)}},{key:"update",value:function(e,t){return b.put("dao/update?id=".concat(e),t)}},{key:"delete",value:function(e){return b.delete("/dao/delete?id=".concat(e))}}]),e}()),f=a(80),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChangeTitle=a.onChangeTitle.bind(Object(g.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(g.a)(a)),a.onChangeFullName=a.onChangeFullName.bind(Object(g.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(g.a)(a)),a.onChangeDateFounded=a.onChangeDateFounded.bind(Object(g.a)(a)),a.onChangeDateCreated=a.onChangeDateCreated.bind(Object(g.a)(a)),a.onChangeLogoLink=a.onChangeLogoLink.bind(Object(g.a)(a)),a.onChangeCategory=a.onChangeCategory.bind(Object(g.a)(a)),a.onChangeGovTokenName=a.onChangeGovTokenName.bind(Object(g.a)(a)),a.onChangeGovTokenSymbol=a.onChangeGovTokenSymbol.bind(Object(g.a)(a)),a.onChangeDaoStructure=a.onChangeDaoStructure.bind(Object(g.a)(a)),a.onChangeVotingProcess=a.onChangeVotingProcess.bind(Object(g.a)(a)),a.onChangeTVL=a.onChangeTVL.bind(Object(g.a)(a)),a.onChangeAUM=a.onChangeAUM.bind(Object(g.a)(a)),a.onChangeTechStack=a.onChangeTechStack.bind(Object(g.a)(a)),a.onChangeNotes=a.onChangeNotes.bind(Object(g.a)(a)),a.onChangeBlockchain=a.onChangeBlockchain.bind(Object(g.a)(a)),a.onChangeHQ=a.onChangeHQ.bind(Object(g.a)(a)),a.saveDao=a.saveDao.bind(Object(g.a)(a)),a.newDao=a.newDao.bind(Object(g.a)(a)),a.state={id:null,full_name:"",description:"",date_founded:"",date_created:"",logo_link:"",category:"Protocol",governance_token_name:"",governance_token_symbol:"",dao_structure:"shares",voting_process:"",AUM:0,TVL:0,tech_stack:"",notes:"",blockchain:"Ethereum",headquarters:"",submitted:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeFullName",value:function(e){this.setState({full_name:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDateFounded",value:function(e){this.setState({date_founded:e.target.value})}},{key:"onChangeDateCreated",value:function(e){this.setState({date_created:e.target.value})}},{key:"onChangeLogoLink",value:function(e){this.setState({logo_link:e.target.value})}},{key:"onChangeCategory",value:function(e){this.setState({category:e.target.value})}},{key:"onChangeGovTokenName",value:function(e){this.setState({governance_token_name:e.target.value})}},{key:"onChangeGovTokenSymbol",value:function(e){this.setState({governance_token_symbol:e.target.value})}},{key:"onChangeDaoStructure",value:function(e){this.setState({dao_structure:e.target.value})}},{key:"onChangeVotingProcess",value:function(e){this.setState({voting_process:e.target.value})}},{key:"onChangeTVL",value:function(e){this.setState({TVL:e.target.value})}},{key:"onChangeAUM",value:function(e){this.setState({TVL:e.target.value})}},{key:"onChangeTechStack",value:function(e){this.setState({tech_stack:e.target.value})}},{key:"onChangeNotes",value:function(e){this.setState({notes:e.target.value})}},{key:"onChangeBlockchain",value:function(e){this.setState({blockchain:e.target.value})}},{key:"onChangeHQ",value:function(e){this.setState({headquarters:e.target.value})}},{key:"saveDao",value:function(){var e=this,t={full_name:this.state.full_name,description:this.state.description,date_founded:this.state.date_founded,date_created:this.state.date_created,logo_link:this.state.logo_link,category:this.state.category,governance_token_name:this.state.governance_token_name,governance_token_symbol:this.state.governance_token_symbol,dao_structure:this.state.dao_structure,voting_process:this.state.voting_process,AUM:this.state.AUM,TVL:this.state.TVL,tech_stack:this.state.tech_stack,notes:this.state.notes,blockchain:this.state.blockchain,headquarters:this.state.headquarters};console.log(t),p.create(t).then((function(t){e.setState({id:t.data.id,full_name:t.data.full_name,description:t.data.description,date_founded:t.data.date_founded,date_created:t.data.date_created,logo_link:t.data.logo_link,category:t.data.category,governance_token_name:t.data.governance_token_name,governance_token_symbol:t.data.governance_token_symbol,dao_structure:t.data.dao_structure,voting_process:t.data.voting_process,AUM:t.data.AUM,TVL:t.data.TVL,tech_stack:t.data.tech_stack,notes:t.data.notes,blockchain:t.data.blockchain,headquarters:t.data.headquarters,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"newDao",value:function(){this.setState({id:null,full_name:"",description:"",date_founded:"2012-12-19",date_created:"2012-12-19",logo_link:"",category:"",governance_token_name:"",governance_token_symbol:"",dao_structure:"",voting_process:"",TVL:0,tech_stack:"",notes:"",blockchain:"",headquarters:"",submitted:!1})}},{key:"render",value:function(){var e=new Date(1970,1,1);return o.a.createElement("div",{className:"submit-form"},this.state.submitted?o.a.createElement("div",null,o.a.createElement("h4",null,"You submitted successfully!"),o.a.createElement("button",{className:"btn btn-success",onClick:this.newDao},"Add")):o.a.createElement("div",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"full_name"},"Full Name"),o.a.createElement("input",{type:"text",className:"form-control",id:"full_name",required:!0,value:this.state.full_name,onChange:this.onChangeFullName,name:"full_name"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"description"},"Description"),o.a.createElement("textarea",{type:"text",className:"form-control",id:"description",required:!0,value:this.state.description,onChange:this.onChangeDescription,name:"description",rows:"5"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"date_founded"},"Date Founded"),o.a.createElement(f.a,{placeholder:"Enter Date",className:"form-control",id:"date_founded",required:"true",value:this.state.date_founded,onChange:this.onChangeDateFounded,name:"date_founded",min:e,format:"yyyy-MM-dd"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"date_created"},"Date Created"),o.a.createElement(f.a,{placeholder:"Enter Date",className:"form-control",id:"date_created",required:!0,value:this.state.date_created,onChange:this.onChangeDateCreated,name:"date_founded",min:e,format:"yyyy-MM-dd"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"logo_link"},"Logo Link"),o.a.createElement("input",{type:"text",className:"form-control",id:"logo_link",required:!0,value:this.state.logo_link,onChange:this.onChangeLogoLink,name:"logo_link"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"category"},"Category"),o.a.createElement("select",{type:"text",className:"form-control",id:"category",required:!0,value:this.state.category,onChange:this.onChangeCategory,name:"category"},o.a.createElement("option",{value:"Protocol"},"Protocol"),o.a.createElement("option",{value:"Service"},"Service"),o.a.createElement("option",{value:"Grant"},"Grant"),o.a.createElement("option",{value:"Media"},"Media"),o.a.createElement("option",{value:"Social"},"Social"),o.a.createElement("option",{value:"Investment"},"Investment"),o.a.createElement("option",{value:"Platform"},"Platform"),o.a.createElement("option",{value:"Collector"},"Collector"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"governance_token_name"},"Governance Token Name"),o.a.createElement("input",{type:"text",className:"form-control",id:"governance_token_name",required:!0,value:this.state.governance_token_name,onChange:this.onChangeGovTokenName,name:"governance_token_name"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"governance_token_symbol"},"Governance Token Symbol"),o.a.createElement("input",{type:"text",className:"form-control",id:"governance_token_symbol",required:!0,value:this.state.governance_token_symbol,onChange:this.onChangeGovTokenSymbol,name:"governance_token_symbol"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"dao_structure"},"DAO Structure"),o.a.createElement("select",{type:"text",className:"form-control",id:"dao_structure",required:!0,value:this.state.dao_structure,onChange:this.onChangeDaoStructure,name:"dao_structure"},o.a.createElement("option",{value:"shares"},"Shares"),o.a.createElement("option",{value:"gov_token"},"Gov token"),o.a.createElement("option",{value:"tbd"},"Tbd"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"voting_process"},"Voting Process"),o.a.createElement("input",{type:"text",className:"form-control",id:"voting_process",required:!0,value:this.state.voting_process,onChange:this.onChangeVotingProcess,name:"voting_process"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"AUM"},"AUM"),o.a.createElement("input",{type:"text",className:"form-control",id:"AUM",required:!0,value:this.state.AUM,onChange:this.onChangeAUM,name:"AUM"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"TVL"},"TVL"),o.a.createElement("input",{type:"text",className:"form-control",id:"TVL",required:!0,value:this.state.TVL,onChange:this.onChangeTVL,name:"TVL"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"tech_stack"},"Tech Stack"),o.a.createElement("input",{type:"text",className:"form-control",id:"tech_stack",required:!0,value:this.state.tech_stack,onChange:this.onChangeTechStack,name:"tech_stack"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"notes"},"Notes"),o.a.createElement("input",{type:"text",className:"form-control",id:"notes",required:!0,value:this.state.notes,onChange:this.onChangeNotes,name:"notes"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"blockchain"},"Blockchain"),o.a.createElement("select",{type:"text",className:"form-control",id:"blockchain",required:!0,value:this.state.blockchain,onChange:this.onChangeBlockchain,name:"blockchain"},o.a.createElement("option",{value:"Ethereum"},"Ethereum"),o.a.createElement("option",{value:"Polygon"},"Polygon"),o.a.createElement("option",{value:"Binance_Smart_Chain"},"Binance Smart Chain"),o.a.createElement("option",{value:"Harmony"},"Harmony"),o.a.createElement("option",{value:"Solana"},"Solana"),o.a.createElement("option",{value:"Algorand"},"Algorand"),o.a.createElement("option",{value:"NEAR"},"NEAR"),o.a.createElement("option",{value:"IBM_Blockchain"},"IBM Blockchain"),o.a.createElement("option",{value:"Hyperledger_Fabric"},"Hyperledger Fabric"),o.a.createElement("option",{value:"Tezos"},"Tezos"),o.a.createElement("option",{value:"EOSIO"},"EOSIO"),o.a.createElement("option",{value:"Waves"},"Waves"),o.a.createElement("option",{value:"Ripple"},"Ripple"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"headquarters"},"Head Quarters"),o.a.createElement("input",{type:"text",className:"form-control",id:"headquarters",required:!0,value:this.state.headquarters,onChange:this.onChangeHQ,name:"headquarters"})),o.a.createElement("button",{onClick:this.saveDao,className:"btn btn-success"},"Submit")))}}]),t}(n.Component),C=a(3),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChangeFullName=a.onChangeFullName.bind(Object(g.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(g.a)(a)),a.onChangeDateFounded=a.onChangeDateFounded.bind(Object(g.a)(a)),a.onChangeDateCreated=a.onChangeDateCreated.bind(Object(g.a)(a)),a.onChangeLogoLink=a.onChangeLogoLink.bind(Object(g.a)(a)),a.onChangeCategory=a.onChangeCategory.bind(Object(g.a)(a)),a.onChangeGovTokenName=a.onChangeGovTokenName.bind(Object(g.a)(a)),a.onChangeGovTokenSymbol=a.onChangeGovTokenSymbol.bind(Object(g.a)(a)),a.onChangeDaoStructure=a.onChangeDaoStructure.bind(Object(g.a)(a)),a.onChangeVotingProcess=a.onChangeVotingProcess.bind(Object(g.a)(a)),a.onChangeTVL=a.onChangeTVL.bind(Object(g.a)(a)),a.onChangeAUM=a.onChangeAUM.bind(Object(g.a)(a)),a.onChangeTechStack=a.onChangeTechStack.bind(Object(g.a)(a)),a.onChangeNotes=a.onChangeNotes.bind(Object(g.a)(a)),a.onChangeBlockchain=a.onChangeBlockchain.bind(Object(g.a)(a)),a.onChangeHQ=a.onChangeHQ.bind(Object(g.a)(a)),a.getDao=a.getDao.bind(Object(g.a)(a)),a.updateDao=a.updateDao.bind(Object(g.a)(a)),a.deleteDao=a.deleteDao.bind(Object(g.a)(a)),a.state={currentDao:{id:null,full_name:"",description:"",date_founded:"2012-12-19",date_created:"2012-12-19",logo_link:"",category:"",governance_token_name:"",governance_token_symbol:"",dao_structure:"",voting_process:"",AUM:0,TVL:0,tech_stack:"",notes:"",blockchain:"",headquarters:""},message:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getDao(this.props.match.params.id),console.log(this.props.match.params.id)}},{key:"onChangeFullName",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{full_name:t})}}))}},{key:"onChangeDescription",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{description:t})}}))}},{key:"onChangeDateFounded",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{date_founded:t})}}))}},{key:"onChangeDateCreated",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{date_created:t})}}))}},{key:"onChangeLogoLink",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{logo_link:t})}}))}},{key:"onChangeCategory",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{category:t})}}))}},{key:"onChangeGovTokenName",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{governance_token_name:t})}}))}},{key:"onChangeGovTokenSymbol",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{governance_token_symbol:t})}}))}},{key:"onChangeDaoStructure",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{dao_structure:t})}}))}},{key:"onChangeVotingProcess",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{voting_process:t})}}))}},{key:"onChangeAUM",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{AUM:t})}}))}},{key:"onChangeTVL",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{TVL:t})}}))}},{key:"onChangeTechStack",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{tech_stack:t})}}))}},{key:"onChangeNotes",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{notes:t})}}))}},{key:"onChangeBlockchain",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{blockchain:t})}}))}},{key:"onChangeHQ",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{headquarters:t})}}))}},{key:"getDao",value:function(e){var t=this;p.get(e).then((function(e){t.setState({currentDao:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updateDao",value:function(){var e=this;p.update(this.state.currentDao._id,this.state.currentDao).then((function(t){console.log(t.data),e.setState({message:"The dao was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deleteDao",value:function(){var e=this;p.delete(this.state.currentDao._id).then((function(t){console.log(t.data),e.setState({message:"The dao was deleted successfully!"})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.currentDao,t=new Date(1970,1,1);return o.a.createElement("div",null,o.a.createElement("div",{className:"edit-form"},o.a.createElement("h4",null,"Dao"),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"full_name"},"FullName"),o.a.createElement("input",{type:"text",className:"form-control",id:"full_name",value:e.full_name,onChange:this.onChangeFullName})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"description"},"Description"),o.a.createElement("textarea",{type:"text",className:"form-control",id:"description",value:e.description,onChange:this.onChangeDescription,name:"description",rows:"5"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"date_founded"},"Date Founded"),o.a.createElement(f.a,{placeholder:"Enter Date",className:"form-control",id:"date_founded",required:"true",value:e.date_founded,onChange:this.onChangeDateFounded,name:"date_founded",min:t,format:"yyyy-MM-dd"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"date_created"},"Date Created"),o.a.createElement(f.a,{placeholder:"Enter Date",className:"form-control",id:"date_created",required:!0,value:e.date_created,onChange:this.onChangeDateCreated,name:"date_founded",min:t,format:"yyyy-MM-dd"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"logo_link"},"Logo Link"),o.a.createElement("input",{type:"text",className:"form-control",id:"logo_link",required:!0,value:e.logo_link,onChange:this.onChangeLogoLink})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"category"},"Category"),o.a.createElement("select",{type:"text",className:"form-control",id:"category",required:!0,value:e.category,onChange:this.onChangeCategory,name:"category"},o.a.createElement("option",{value:"Protocol"},"Protocol"),o.a.createElement("option",{value:"Service"},"Service"),o.a.createElement("option",{value:"Grant"},"Grant"),o.a.createElement("option",{value:"Media"},"Media"),o.a.createElement("option",{value:"Social"},"Social"),o.a.createElement("option",{value:"Investment"},"Investment"),o.a.createElement("option",{value:"Platform"},"Platform"),o.a.createElement("option",{value:"Collector"},"Collector"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"governance_token_name"},"Governance Token Name"),o.a.createElement("input",{type:"text",className:"form-control",id:"governance_token_name",required:!0,value:e.governance_token_name,onChange:this.onChangeGovTokenName})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"governance_token_symbol"},"Governance Token Symbol"),o.a.createElement("input",{type:"text",className:"form-control",id:"governance_token_symbol",required:!0,value:e.governance_token_symbol,onChange:this.onChangeGovTokenSymbol})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"dao_structure"},"DAO Structure"),o.a.createElement("select",{type:"text",className:"form-control",id:"dao_structure",required:!0,value:e.dao_structure,onChange:this.onChangeDaoStructure,name:"dao_structure"},o.a.createElement("option",{value:"shares"},"Shares"),o.a.createElement("option",{value:"gov_token"},"Gov token"),o.a.createElement("option",{value:"tbd"},"Tbd"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"voting_process"},"Voting Process"),o.a.createElement("input",{type:"text",className:"form-control",id:"voting_process",required:!0,value:e.voting_process,onChange:this.onChangeVotingProcess})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"AUM"},"AUM"),o.a.createElement("input",{type:"text",className:"form-control",id:"AUM",required:!0,value:e.AUM,onChange:this.onChangeAUM,name:"AUM"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"TVL"},"TVL"),o.a.createElement("input",{type:"text",className:"form-control",id:"TVL",required:!0,value:e.TVL,onChange:this.onChangeTVL})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"tech_stack"},"Tech Stack"),o.a.createElement("input",{type:"text",className:"form-control",id:"tech_stack",required:!0,value:e.tech_stack,onChange:this.onChangeTechStack})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"notes"},"Notes"),o.a.createElement("input",{type:"text",className:"form-control",id:"notes",required:!0,value:e.notes,onChange:this.onChangeNotes})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"blockchain"},"Blockchain"),o.a.createElement("select",{type:"text",className:"form-control",id:"blockchain",required:!0,value:e.blockchain,onChange:this.onChangeBlockchain,name:"blockchain"},o.a.createElement("option",{value:"Ethereum"},"Ethereum"),o.a.createElement("option",{value:"Polygon"},"Polygon"),o.a.createElement("option",{value:"Binance_Smart_Chain"},"Binance Smart Chain"),o.a.createElement("option",{value:"Harmony"},"Harmony"),o.a.createElement("option",{value:"Solana"},"Solana"),o.a.createElement("option",{value:"Algorand"},"Algorand"),o.a.createElement("option",{value:"NEAR"},"NEAR"),o.a.createElement("option",{value:"IBM_Blockchain"},"IBM Blockchain"),o.a.createElement("option",{value:"Hyperledger_Fabric"},"Hyperledger Fabric"),o.a.createElement("option",{value:"Tezos"},"Tezos"),o.a.createElement("option",{value:"EOSIO"},"EOSIO"),o.a.createElement("option",{value:"Waves"},"Waves"),o.a.createElement("option",{value:"Ripple"},"Ripple"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"headquarters"},"Head Quarters"),o.a.createElement("input",{type:"text",className:"form-control",id:"headquarters",required:!0,value:e.headquarters,onChange:this.onChangeHQ}))),o.a.createElement(l.b,{to:"/allDao/",className:" "},o.a.createElement("button",{className:"badge badge-danger mr-2",onClick:this.deleteDao},"Delete")),o.a.createElement(l.b,{to:"/daos_display/"+e._id,className:" badge-warning"},o.a.createElement("button",{type:"submit",className:"badge badge-success",onClick:this.updateDao},"Update"))))}}]),t}(n.Component),_=a(25),y=a(41),D=a(40),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChangeSearchTitle=a.onChangeSearchTitle.bind(Object(g.a)(a)),a.retrieveDaos=a.retrieveDaos.bind(Object(g.a)(a)),a.refreshList=a.refreshList.bind(Object(g.a)(a)),a.categoryFilter=a.categoryFilter.bind(Object(g.a)(a)),a.searchFilter=a.searchFilter.bind(Object(g.a)(a)),a.state={daos:[],daoProtocols:[],currentDao:null,currentIndex:-1,searchFilter:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.retrieveDaos()}},{key:"onChangeSearchTitle",value:function(e){var t=e.target.value;this.setState({searchFilter:t})}},{key:"retrieveDaos",value:function(){var e=this;p.getAll().then((function(t){e.setState({daos:t.data,daoProtocols:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveDaos(),this.setState({currentDao:null,currentIndex:-1})}},{key:"categoryFilter",value:function(e){this.setState({daos:this.state.daoProtocols.filter((function(t){var a=t.category;return e===a||"All"===e}))})}},{key:"searchFilter",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchFilter,n=t.daos,r=t.daoProtocols,c=t.currentIndex,i=r.map((function(e){return e.category})).filter((function(e,t,a){return a.indexOf(e)===t}));i.push("All"),i.sort();for(var u=0,s=0;s<n.length;s++)Number.isNaN(n[s].AUM)||(u+=n[s].AUM);return o.a.createElement("div",{className:"list row"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",null,"Number of DAOs ",o.a.createElement("br",null),n.length," ",o.a.createElement("br",null),"from 84"),o.a.createElement("div",null,"Total AUM (USD) ",o.a.createElement("br",null),u," ",o.a.createElement("br",null),"from $3,152M"),o.a.createElement("div",null,i.map((function(t,a){return o.a.createElement("button",{className:"badge badge-success",key:a,onClick:function(){return e.categoryFilter(t)}},t.toUpperCase())}))),o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search",value:a,onChange:this.onChangeSearchTitle}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.searchFilter},"Search")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("h4",null,"Daos List"),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,["name","category","AUM (USD)","twitter followers","founded date"].map((function(e,t){return o.a.createElement("th",{key:t},e.toUpperCase())})))),o.a.createElement("tbody",null,n&&n.map((function(e,t){return o.a.createElement("tr",{className:t===c?"active":"",key:t},o.a.createElement(l.b,{to:"/daos_display/"+e._id,className:"badge badge-warning"},o.a.createElement("td",null,o.a.createElement("img",{src:e.logo_link,alt:"dao logo"}),e.full_name)),o.a.createElement("td",null,e.category),o.a.createElement("td",null,"$",e.AUM),o.a.createElement("td",null,e.numTwitterFollowers),o.a.createElement("td",null,e.date_founded),o.a.createElement("td",null,o.a.createElement("a",{href:e.website_link},o.a.createElement(_.a,{icon:D.a}))),o.a.createElement("td",null,o.a.createElement("a",{href:e.social_media},o.a.createElement(_.a,{icon:y.a}))))}))))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChangeFullName=a.onChangeFullName.bind(Object(g.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(g.a)(a)),a.onChangeDateFounded=a.onChangeDateFounded.bind(Object(g.a)(a)),a.onChangeDateCreated=a.onChangeDateCreated.bind(Object(g.a)(a)),a.onChangeLogoLink=a.onChangeLogoLink.bind(Object(g.a)(a)),a.onChangeCategory=a.onChangeCategory.bind(Object(g.a)(a)),a.onChangeGovTokenName=a.onChangeGovTokenName.bind(Object(g.a)(a)),a.onChangeGovTokenSymbol=a.onChangeGovTokenSymbol.bind(Object(g.a)(a)),a.onChangeDaoStructure=a.onChangeDaoStructure.bind(Object(g.a)(a)),a.onChangeVotingProcess=a.onChangeVotingProcess.bind(Object(g.a)(a)),a.onChangeTVL=a.onChangeTVL.bind(Object(g.a)(a)),a.onChangeTechStack=a.onChangeTechStack.bind(Object(g.a)(a)),a.onChangeNotes=a.onChangeNotes.bind(Object(g.a)(a)),a.onChangeBlockchain=a.onChangeBlockchain.bind(Object(g.a)(a)),a.onChangeHQ=a.onChangeHQ.bind(Object(g.a)(a)),a.getDao=a.getDao.bind(Object(g.a)(a)),a.updateDao=a.updateDao.bind(Object(g.a)(a)),a.deleteDao=a.deleteDao.bind(Object(g.a)(a)),a.state={currentDao:{id:null,full_name:"",description:"",date_founded:"2012-12-19",date_created:"2012-12-19",logo_link:"",category:"",governance_token_name:"",governance_token_symbol:"",dao_structure:"",voting_process:"",TVL:0,tech_stack:"",notes:"",blockchain:"",headquarters:""},message:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getDao(this.props.match.params.id)}},{key:"onChangeFullName",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{full_name:t})}}))}},{key:"onChangeDescription",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{description:t})}}))}},{key:"onChangeDateFounded",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{date_founded:t})}}))}},{key:"onChangeDateCreated",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{date_created:t})}}))}},{key:"onChangeLogoLink",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{logo_link:t})}}))}},{key:"onChangeCategory",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{category:t})}}))}},{key:"onChangeGovTokenName",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{governance_token_name:t})}}))}},{key:"onChangeGovTokenSymbol",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{governance_token_symbol:t})}}))}},{key:"onChangeDaoStructure",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{dao_structure:t})}}))}},{key:"onChangeVotingProcess",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{voting_process:t})}}))}},{key:"onChangeTVL",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{TVL:t})}}))}},{key:"onChangeTechStack",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{tech_stack:t})}}))}},{key:"onChangeNotes",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{notes:t})}}))}},{key:"onChangeBlockchain",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{blockchain:t})}}))}},{key:"onChangeHQ",value:function(e){var t=e.target.value;this.setState((function(e){return{currentDao:Object(C.a)({},e.currentDao,{headquarters:t})}}))}},{key:"getDao",value:function(e){var t=this;p.get(e).then((function(e){t.setState({currentDao:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updateDao",value:function(){var e=this;p.update(this.state.currentDao.id,this.state.currentDao).then((function(t){console.log(t.data),e.setState({message:"The dao was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deleteDao",value:function(){var e=this;p.delete(this.state.currentDao.id).then((function(t){console.log(t.data),e.props.history.push("/daos")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.currentDao;return o.a.createElement("div",null,o.a.createElement("div",{className:"edit-form"},o.a.createElement("h4",null,"Dao"),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("p",null," ",o.a.createElement("strong",null,"Full Name:")," ",e.full_name),o.a.createElement("p",null," ",o.a.createElement("strong",null,"Description:")," ",e.description),o.a.createElement("p",null," ",o.a.createElement("strong",null,"Date Founded:")," ",e.date_founded),o.a.createElement("p",null," ",o.a.createElement("strong",null,"Date Created:")," ",e.date_created),o.a.createElement("p",null," ",o.a.createElement("strong",null,"Category:")," ",e.category),o.a.createElement("p",null," ",o.a.createElement("strong",null,"Governance Token Name:")," ",e.governance_token_name),o.a.createElement("p",null," ",o.a.createElement("strong",null,"Governance Token Symbol:")," ",e.governance_token_symbol),o.a.createElement("p",null," ",o.a.createElement("strong",null,"DAO Structure:")," ",e.dao_structure),o.a.createElement("p",null," ",o.a.createElement("strong",null,"Voting Process:")," ",e.voting_process),o.a.createElement("p",null," ",o.a.createElement("strong",null,"AUM:")," $",e.AUM),o.a.createElement("p",null," ",o.a.createElement("strong",null,"TVL:")," ",e.TVL),o.a.createElement("p",null," ",o.a.createElement("strong",null,"Tech Stack:")," ",e.tech_stack),o.a.createElement("p",null," ",o.a.createElement("strong",null,"Notes:")," ",e.notes),o.a.createElement("p",null," ",o.a.createElement("strong",null,"Blockchain:")," ",e.blockchain),o.a.createElement("p",null," ",o.a.createElement("strong",null,"Head Quarters:")," ",e.headquarters)),o.a.createElement(l.b,{to:"/daos_edit/"+e._id,className:"badge badge-warning"},"Edit"))))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},o.a.createElement(l.b,{to:"/home",className:"navbar-brand"},"DAOggregator"),o.a.createElement("div",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(l.b,{to:"/allDao",className:"nav-link"},"Daos")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(l.b,{to:"/addDao",className:"nav-link"},"Add")))),o.a.createElement("div",{className:"container mt-3"},o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:["/","/allDao"],component:N}),o.a.createElement(h.a,{exact:!0,path:"/addDao",component:k}),o.a.createElement(h.a,{path:"/daos_display/:id",component:S}),o.a.createElement(h.a,{path:"/daos_edit/:id",component:E}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(l.a,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.dfa7ebbf.chunk.js.map