(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GKIB:function(e,t,r){"use strict";r.r(t),r.d(t,"VertragModule",function(){return C});var n=r("SVse"),b=r("iInd"),s=r("8Y7J"),c=r("z6cu"),i=r("un/a"),a=r("JIr8"),o=r("IheW");let l=(()=>{class e{constructor(e){this.schadenHttp=e,this.zustaendigAPI="http://localhost:3000"}getSingle(e){return this.schadenHttp.get(`${this.zustaendigAPI}/vertrag/${e}`).pipe(Object(i.a)(3),Object(a.a)(this.errorHandler))}getAll(){return this.schadenHttp.get(`${this.zustaendigAPI}/vertrag`).pipe(Object(i.a)(3),Object(a.a)(this.errorHandler))}errorHandler(e){return console.error("Fehler aufgetreten im SchadenStoreService"),Object(c.a)(e)}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(o.a))},e.\u0275prov=s.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["sd-vertrag-kopf"]],decls:7,vars:0,consts:[["src","./../../../assets/imgages/gev_logo.jpg"]],template:function(e,t){1&e&&(s.Nb(0,"table"),s.Nb(1,"tr"),s.Nb(2,"td"),s.Nb(3,"h1"),s.lc(4,"VERTRAGS - System der GENERALI"),s.Mb(),s.Mb(),s.Nb(5,"td"),s.Jb(6,"img",0),s.Mb(),s.Mb(),s.Mb())},styles:[""]}),e})();function h(e,t){if(1&e&&(s.Lb(0),s.Nb(1,"div",0),s.Nb(2,"h3"),s.lc(3,"Vertragsdaten allgemein"),s.Mb(),s.Mb(),s.Jb(4,"BR"),s.Nb(5,"table",4),s.Nb(6,"tr"),s.Nb(7,"TD",5),s.Nb(8,"h4"),s.lc(9,"VNR"),s.Mb(),s.Mb(),s.Nb(10,"TD",6),s.Nb(11,"h4"),s.lc(12,"Bearbeitende Gesellschaft"),s.Mb(),s.Mb(),s.Nb(13,"TD",5),s.Nb(14,"h4"),s.lc(15,"Partner-Nummer"),s.Mb(),s.Mb(),s.Nb(16,"TD",5),s.Nb(17,"h4"),s.lc(18,"Sparte / Risiko"),s.Mb(),s.Mb(),s.Mb(),s.Nb(19,"tr",7),s.Nb(20,"TD"),s.lc(21),s.Mb(),s.Nb(22,"TD"),s.lc(23),s.Mb(),s.Nb(24,"TD"),s.lc(25),s.Mb(),s.Nb(26,"TD"),s.lc(27),s.Mb(),s.Mb(),s.Mb(),s.Kb()),2&e){const e=t.ngIf;s.yb(21),s.mc(e.vnr),s.yb(2),s.mc(e.bearbGs),s.yb(2),s.mc(e.partnerNr),s.yb(2),s.mc(e.sparte)}}const g=function(){return["../../vertrag/"]},d=function(){return["/gev/create","000000000"]},v=function(e,t){return{vnr:e,sparte:t}};function f(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"table"),s.Nb(2,"tr"),s.Nb(3,"TD"),s.Nb(4,"a",8),s.Jb(5,"i",9),s.lc(6,"Zur\xfcck zur Suche "),s.Mb(),s.Mb(),s.Nb(7,"td"),s.Nb(8,"a",10),s.Jb(9,"i",11),s.lc(10,"Neuschaden anlegen "),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&e){const e=t.ngIf;s.yb(4),s.ac("routerLink",s.bc(3,g)),s.yb(4),s.ac("routerLink",s.bc(4,d))("queryParams",s.dc(5,v,e.vnr,e.sparte))}}function m(e,t){1&e&&s.Jb(0,"div",12)}let p=(()=>{class e{constructor(e,t,r){this.vs=e,this.route=t,this.router=r}ngOnInit(){this.vertrag$=this.vs.getSingle(this.route.snapshot.paramMap.get("vnr"))}}return e.\u0275fac=function(t){return new(t||e)(s.Ib(l),s.Ib(b.a),s.Ib(b.c))},e.\u0275cmp=s.Cb({type:e,selectors:[["sd-vertrag-details"]],decls:15,vars:7,consts:[[1,"content"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["loading",""],["border","2"],["width","150"],["width","250"],["align","center"],[1,"ui","tiny","yellow","labeled","icon","button",3,"routerLink"],[1,"left","arrow","icon"],["queryParamsHandling","merge","routerLinkActive","active",1,"ui","tiny","red","labeled","icon","button",3,"routerLink","queryParams"],[1,"write","icon"],[1,"ui","actice","centered","inline","loader"]],template:function(e,t){if(1&e&&(s.Jb(0,"sd-vertrag-kopf"),s.Jb(1,"BR"),s.Nb(2,"div",0),s.Nb(3,"h2"),s.Nb(4,"span"),s.lc(5,"VERTRAGS - AUSKUNFT - "),s.Mb(),s.lc(6," Was wollen Sie als n\xe4chstes tun?"),s.Mb(),s.Mb(),s.Jb(7,"BR"),s.jc(8,h,28,4,"ng-container",1),s.Xb(9,"async"),s.Jb(10,"BR"),s.jc(11,f,11,8,"div",2),s.Xb(12,"async"),s.jc(13,m,1,0,"ng-template",null,3,s.kc)),2&e){const e=s.fc(14);s.yb(8),s.ac("ngIf",s.Yb(9,3,t.vertrag$)),s.yb(3),s.ac("ngIf",s.Yb(12,5,t.vertrag$))("ngIfElse",e)}},directives:[u,n.j,b.e,b.d],pipes:[n.b],styles:["h2[_ngcontent-%COMP%]{color:#8b0000}span[_ngcontent-%COMP%]{color:#0000cd}a[_ngcontent-%COMP%]{color:#000}a[_ngcontent-%COMP%]:hover{color:#8b0000}"]}),e})();var N=r("3o6H"),M=r("s7LF");function y(e,t){if(1&e&&(s.Nb(0,"div",1),s.lc(1),s.Mb()),2&e){const e=t.$implicit;s.yb(1),s.nc(" ",e,"\n")}}let G=(()=>{class e{constructor(){this.allMessages={vnr:{vnrFormat:"Die VNR muss aus 14 Zeichen bestehen.",vnrNum:"Die VNR muss numerisch sein",required:"Die VNR muss vorhanden sein"},bearbGs:{bearbGsFormat:"Die bearbeitende Gesellschaft muss aus 3 Zeichen bestehen.",bearbGsNum:"Die bearbeitende Gesellschaft muss numerisch sein",required:"Die bearbeitende Gesellschaft muss vorhanden sein"}}}ngOnInit(){}errorsForControl(){const e=this.allMessages[this.controlName];return this.control&&this.control.errors&&e&&this.control.dirty?Object.keys(this.control.errors).map(t=>e[t]):null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["sd-vertrag-fehlermeldungen"]],inputs:{control:"control",controlName:"controlName"},decls:1,vars:1,consts:[["class","ui negative message",4,"ngFor","ngForOf"],[1,"ui","negative","message"]],template:function(e,t){1&e&&s.jc(0,y,2,1,"div",0),2&e&&s.ac("ngForOf",t.errorsForControl())},directives:[n.i],styles:[""]}),e})(),I=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["sd-vertrag-liste-item"]],inputs:{vertrag:"vertrag"},decls:28,vars:4,consts:[[1,"content"],["width","150"],["width","250"]],template:function(e,t){1&e&&(s.Nb(0,"div",0),s.Nb(1,"table"),s.Nb(2,"tr"),s.Nb(3,"TD",1),s.Nb(4,"h4"),s.lc(5,"VNR"),s.Mb(),s.Mb(),s.Nb(6,"TD",2),s.Nb(7,"h4"),s.lc(8,"Bearbeitende Gesellschaft"),s.Mb(),s.Mb(),s.Nb(9,"TD",1),s.Nb(10,"h4"),s.lc(11,"Partner-Nummer"),s.Mb(),s.Mb(),s.Nb(12,"TD",1),s.Nb(13,"h4"),s.lc(14,"Sparte / Risiko"),s.Mb(),s.Mb(),s.Mb(),s.Nb(15,"tr"),s.Nb(16,"TD"),s.Nb(17,"span"),s.lc(18),s.Mb(),s.Mb(),s.Nb(19,"TD"),s.Nb(20,"span"),s.lc(21),s.Mb(),s.Mb(),s.Nb(22,"TD"),s.Nb(23,"span"),s.lc(24),s.Mb(),s.Mb(),s.Nb(25,"TD"),s.Nb(26,"span"),s.lc(27),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&e&&(s.yb(18),s.mc(t.vertrag.vnr),s.yb(3),s.mc(t.vertrag.bearbGs),s.yb(3),s.mc(t.vertrag.partnerNr),s.yb(3),s.mc(t.vertrag.sparte))},styles:[""]}),e})();function F(e,t){1&e&&(s.Lb(0),s.Nb(1,"h3"),s.lc(2,"Bitte klicken Sie auf Ihren Vertrag"),s.Mb(),s.Kb())}function O(e,t){if(1&e&&(s.Lb(0),s.Nb(1,"h3"),s.lc(2),s.Mb(),s.Kb()),2&e){const e=s.Wb();s.yb(2),s.nc("Bitte w\xe4hlen Sie Ihren Vertrag zum BearbGs = ",e.bearbGs,"")}}const k=function(e){return["/vertrag",e]};function w(e,t){if(1&e&&(s.Lb(0),s.Nb(1,"a",9),s.Jb(2,"sd-vertrag-liste-item",10),s.Mb(),s.Kb()),2&e){const e=t.ngIf;s.yb(1),s.ac("routerLink",s.cc(2,k,e.vnr)),s.yb(1),s.ac("vertrag",e)}}function S(e,t){if(1&e&&(s.Lb(0),s.Nb(1,"a",9),s.Jb(2,"sd-vertrag-liste-item",10),s.Mb(),s.Kb()),2&e){const e=s.Wb().$implicit;s.yb(1),s.ac("routerLink",s.cc(2,k,e.vnr)),s.yb(1),s.ac("vertrag",e)}}function D(e,t){if(1&e&&(s.Lb(0),s.jc(1,S,3,4,"ng-container",7),s.Kb()),2&e){const e=t.$implicit,r=s.Wb(2);s.yb(1),s.ac("ngIf",e.bearbGs===r.bearbGs)}}function R(e,t){if(1&e&&(s.Lb(0),s.jc(1,D,2,1,"ng-container",11),s.Kb()),2&e){const e=t.ngIf;s.yb(1),s.ac("ngForOf",e)}}const j=[{path:"",component:(()=>{class e{constructor(e,t,r){this.router=e,this.fb=t,this.vs=r,this.vnrGesperrt=!1,this.bearbGsGesperrt=!1}ngOnInit(){this.initForm()}ngOnChanges(){this.initForm(),this.setFormValues(this.suche)}setFormValues(e){this.sucheForm.patchValue(e)}taste(e){const t=this.sucheForm.value,r=t.vnr;this.vnrGesperrt=t.bearbGs.length>0,this.bearbGsGesperrt=r.length>0}initForm(){this.sucheForm||this.initFormBuilder()}initFormBuilder(){this.sucheForm=this.fb.group({vnr:[{value:"",disabled:this.vnrGesperrt},[N.a.vnrFormat,N.a.vnrNum]],bearbGs:[{value:"",disabled:this.bearbGsGesperrt},[N.a.bearbGsFormat,N.a.bearbGsNum]]})}suchenObgr(){const e=this.sucheForm.value;this.vnrGesperrt=!1,this.bearbGsGesperrt=!1,this.sucheForm.reset(),this.initFormBuilder(),this.vnr=e.vnr,this.bearbGs=e.bearbGs,3===this.bearbGs.length?(this.bearbGsHolen(),this.vertrag$=null):14===this.vnr.length&&(this.vnrHolen(),this.vertraege$=null)}bearbGsHolen(){this.vertraege$=this.vs.getAll()}vnrHolen(){this.vertrag$=this.vs.getSingle(this.vnr)}}return e.\u0275fac=function(t){return new(t||e)(s.Ib(b.c),s.Ib(M.b),s.Ib(l))},e.\u0275cmp=s.Cb({type:e,selectors:[["sd-vertrag-home"]],features:[s.wb],decls:34,vars:18,consts:[[1,"ui","form",3,"formGroup"],["formControlName","vnr","type","text","placeholder","Geben Sie bitte eine VNR ein ...",3,"readOnly","keyup"],["controlName","vnr",3,"control"],["formControlName","bearbGs","type","text","placeholder","Geben Sie bitte eine betreuende Gesellschaft ein ...",3,"readOnly","keyup"],["controlName","bearbGs",3,"control"],["type","submit",1,"ui","tiny","green","labeled","icon","button",3,"disabled","click"],[1,"right","arrow","icon"],[4,"ngIf"],[1,"ui","middle","aligned","selection","divided","list"],["routerLinkActive","active",3,"routerLink"],[1,"item",3,"vertrag"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(s.Jb(0,"sd-vertrag-kopf"),s.Nb(1,"h2"),s.Nb(2,"span"),s.lc(3,"VERTRAGSSUCHE - "),s.Mb(),s.lc(4," Geben Sie bitte Ihren Suchbegriff ein"),s.Mb(),s.Jb(5,"BR"),s.Nb(6,"form",0),s.Nb(7,"label"),s.Nb(8,"h3"),s.lc(9,"VNR"),s.Mb(),s.Mb(),s.Nb(10,"input",1),s.Ub("keyup",function(e){return t.taste(e)}),s.Mb(),s.Jb(11,"sd-vertrag-fehlermeldungen",2),s.Nb(12,"label"),s.Nb(13,"h3"),s.lc(14,"Betreuende Gesellschaft"),s.Mb(),s.Mb(),s.Nb(15,"input",3),s.Ub("keyup",function(e){return t.taste(e)}),s.Mb(),s.Jb(16,"sd-vertrag-fehlermeldungen",4),s.Nb(17,"table"),s.Nb(18,"tr"),s.Nb(19,"td"),s.Nb(20,"p"),s.Nb(21,"button",5),s.Ub("click",function(){return t.suchenObgr()}),s.Jb(22,"i",6),s.lc(23,"Suchen"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.jc(24,F,3,0,"ng-container",7),s.Xb(25,"async"),s.jc(26,O,3,1,"ng-container",7),s.Xb(27,"async"),s.Nb(28,"div",8),s.jc(29,w,3,4,"ng-container",7),s.Xb(30,"async"),s.Mb(),s.Nb(31,"div",8),s.jc(32,R,2,1,"ng-container",7),s.Xb(33,"async"),s.Mb()),2&e&&(s.yb(6),s.ac("formGroup",t.sucheForm),s.yb(4),s.ac("readOnly",t.vnrGesperrt),s.yb(1),s.ac("control",t.sucheForm.get("vnr")),s.yb(4),s.ac("readOnly",t.bearbGsGesperrt),s.yb(1),s.ac("control",t.sucheForm.get("bearbGs")),s.yb(5),s.ac("disabled",t.sucheForm.invalid),s.yb(3),s.ac("ngIf",s.Yb(25,10,t.vertrag$)),s.yb(2),s.ac("ngIf",s.Yb(27,12,t.vertraege$)),s.yb(3),s.ac("ngIf",s.Yb(30,14,t.vertrag$)),s.yb(3),s.ac("ngIf",s.Yb(33,16,t.vertraege$)))},directives:[u,M.i,M.f,M.d,M.a,M.e,M.c,G,n.j,b.e,b.d,I,n.i],pipes:[n.b],styles:["h2[_ngcontent-%COMP%]{color:#8b0000}span[_ngcontent-%COMP%]{color:#0000cd}a[_ngcontent-%COMP%]{color:#000}a[_ngcontent-%COMP%]:hover{color:#8b0000}"]}),e})()},{path:":vnr",component:p}];let T=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(t){return new(t||e)},imports:[[b.f.forChild(j)],b.f]}),e})(),C=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(t){return new(t||e)},imports:[[n.c,T,M.g]]}),e})()}}]);