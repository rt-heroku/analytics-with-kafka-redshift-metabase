//	HYPE.documents["kafka-diagram-v2"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="kafka-diagram-v2.hyperesources",c="kafka-diagram-v2",e="kafkadiagramv2_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/kafkadiagramv2_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"-2":{n:"blank.gif"},"18":{p:1,n:"amazon-container-mobile.svg",g:"1672",t:"image/svg+xml"},"10":{p:1,n:"data-prod-container.svg",g:"1544",t:"image/svg+xml"},"19":{p:1,n:"data-arrow-mobile.svg",g:"1674",t:"image/svg+xml"},"11":{p:1,n:"data-prod-arrow.svg",g:"1546",t:"image/svg+xml"},"0":{p:1,n:"tooltip.svg",g:"304",t:"image/svg+xml"},"12":{p:1,n:"amazon-container.svg",g:"1548",t:"image/svg+xml"},"1":{p:1,n:"Asset%2014_2x.png",g:"1387",t:"@2x"},"20":{p:1,n:"data-prod-container-mobile.svg",g:"1676",t:"image/svg+xml"},"2":{p:1,n:"Asset%2017.svg",g:"1460",t:"image/svg+xml"},"13":{p:1,n:"amazon-arrow.svg",g:"1550",t:"image/svg+xml"},"3":{p:1,n:"Asset%2018.svg",g:"1481",t:"image/svg+xml"},"21":{p:1,n:"kafka-container-mobile.svg",g:"1678",t:"image/svg+xml"},"14":{p:1,n:"data-prod-icon.svg",g:"1554",t:"image/svg+xml"},"4":{p:1,n:"Asset%2019.svg",g:"1497",t:"image/svg+xml"},"5":{p:1,n:"Asset%2013.svg",g:"1389",t:"image/svg+xml"},"15":{p:1,n:"viz-icon.svg",g:"1556",t:"image/svg+xml"},"22":{p:1,n:"viz-arrow-mobile.svg",g:"1680",t:"image/svg+xml"},"6":{p:1,n:"viz-container.svg",g:"1536",t:"image/svg+xml"},"23":{p:1,n:"viz-container-mobile.svg",g:"1682",t:"image/svg+xml"},"16":{p:1,n:"kafka-icon.svg",g:"1560",t:"image/svg+xml"},"7":{p:1,n:"viz-arrow.svg",g:"1538",t:"image/svg+xml"},"-1":{n:"PIE.htc"},"8":{p:1,n:"metabase-icon.svg",g:"1540",t:"image/svg+xml"},"17":{p:1,n:"amazon-arrow-mobile.svg",g:"1670",t:"image/svg+xml"},"9":{p:1,n:"kafka-container.svg",g:"1542",t:"image/svg+xml"}},h,[],d,[{n:"Main",o:"1",X:[0,1,2]}],[{o:"1088",p:"600px",cA:false,Y:320,Z:500,L:[],c:"#FFFFFF",bY:1,d:320,U:{"1745":{V:{"Main Timeline":"1762"},W:"1762",n:"tooltip - data producers"},"1732":{V:{"Main Timeline":"1758"},W:"1758",n:"loop - data producers - mobile"},"1736":{V:{"Main Timeline":"1759"},W:"1759",n:"loop - realtime viz  - mobile"},"1749":{V:{"Main Timeline":"1764"},W:"1764",n:"tooltip - redshift"},"1740":{V:{"Main Timeline":"1760"},W:"1760",n:"loop - amazon - mobile"},"1747":{V:{"Main Timeline":"1763"},W:"1763",n:"tooltip- visualization"},"1744":{V:{"Main Timeline":"1761"},W:"1761",n:"looping tooltips - mobile"},"1718":{V:{"*hover* - related terms":"1752","Main Timeline":"1751","*hover* - fanout":"1753","*hover* - web app":"1755","*hover* - term count":"1756","looping messages":"1757","*hover* - twitter ingest":"1754"},W:"1751",n:"_Small"}},T:{"1083":{i:"1083",n:"*hover* - fanout",z:0,b:[],a:[],f:30},"1759":{j:{"3":[[46,109,46,109,46,38,46,38]],"4":[[46,109,46,109,46,38,46,38]],"5":[[46,109,46,109,46,38,46,38]]},c:"1736",z:1.2,i:"1759",n:"Main Timeline",a:[{o:"1738",y:0,z:1,i:"b",e:33.5,a:"3",f:"c",s:104.5},{o:"1738",y:0,z:1,i:"a",e:41.5,a:"3",f:"c",s:41.5},{o:"1737",y:0.1,z:1,i:"a",e:41.5,a:"4",f:"c",s:41.5},{o:"1737",y:0.1,z:1,i:"b",e:33.5,a:"4",f:"c",s:104.5},{o:"1739",y:0.2,z:1,i:"a",e:41.5,a:"5",f:"c",s:41.5},{o:"1739",y:0.2,z:1,i:"b",e:33.5,a:"5",f:"c",s:104.5},{y:1,i:"b",s:33.5,z:0,o:"1738",f:"c"},{y:1,i:"a",s:41.5,z:0,o:"1738",f:"c"},{y:1.1,i:"a",s:41.5,z:0,o:"1737",f:"c"},{y:1.1,i:"b",s:33.5,z:0,o:"1737",f:"c"},{f:"c",p:2,y:1.2,z:0,i:"ActionHandler",s:{a:[{b:"1759",p:3,z:false,symbolOid:"1575"}]},o:"1759"},{y:1.2,i:"b",s:33.5,z:0,o:"1739",f:"c"},{y:1.2,i:"a",s:41.5,z:0,o:"1739",f:"c"}],f:30,b:[]},"1763":{c:"1747",z:4.15,i:"1763",n:"Main Timeline",a:[{y:0,i:"d",s:97,z:0,o:"1748",f:"c"},{f:"c",y:0,z:0.15,i:"cQ",e:1,s:0,o:"1748"},{f:"c",y:0,z:0.15,i:"cR",e:1,s:0,o:"1748"},{y:0,i:"c",s:231,z:0,o:"1748",f:"c"},{f:"c",y:0.15,z:3.15,i:"cQ",e:1,s:1,o:"1748"},{f:"c",y:0.15,z:3.15,i:"cR",e:1,s:1,o:"1748"},{f:"c",y:4,z:0.15,i:"cQ",e:0,s:1,o:"1748"},{f:"c",y:4,z:0.15,i:"cR",e:0,s:1,o:"1748"},{y:4.15,i:"cQ",s:0,z:0,o:"1748",f:"c"},{y:4.15,i:"cR",s:0,z:0,o:"1748",f:"c"}],f:30,b:[]},"1752":{c:"1718",z:0,i:"1752",n:"*hover* - related terms",a:[],f:30,b:[]},"1757":{c:"1718",z:0,i:"1757",n:"looping messages",a:[],f:30,b:[]},"1086":{i:"1086",n:"*hover* - web app",z:0,b:[],a:[],f:30},"1761":{c:"1744",z:18.15,i:"1761",n:"Main Timeline",a:[{f:"c",p:2,y:18.15,z:0,i:"ActionHandler",s:{a:[{b:"1761",p:3,z:false,symbolOid:"1462"}]},o:"1761"}],f:30,b:[{D:4.15,H:true,E:true,z:false,F:0,G:0,C:2,b:"1762"},{D:4.15,H:true,E:true,z:false,F:0,G:0,C:8,b:"1763"},{D:4.15,H:true,E:true,z:false,F:0,G:0,C:14,b:"1764"}]},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:18.15,b:[{D:18.15,H:true,E:true,z:false,F:0,G:0,C:0,b:"1751"}],a:[],f:30},"1755":{c:"1718",z:0,i:"1755",n:"*hover* - web app",a:[],f:30,b:[]},"1084":{i:"1084",n:"*hover* - term count",z:0,b:[],a:[],f:30},"1764":{c:"1749",z:4.15,i:"1764",n:"Main Timeline",a:[{f:"c",y:0,z:0.15,i:"cR",e:1,s:0,o:"1750"},{f:"c",y:0,z:0.15,i:"cQ",e:1,s:0,o:"1750"},{f:"c",y:0.15,z:3.15,i:"cR",e:1,s:1,o:"1750"},{f:"c",y:0.15,z:3.15,i:"cQ",e:1,s:1,o:"1750"},{f:"c",y:4,z:0.15,i:"cR",e:0,s:1,o:"1750"},{f:"c",y:4,z:0.15,i:"cQ",e:0,s:1,o:"1750"},{y:4.15,i:"cR",s:0,z:0,o:"1750",f:"c"},{y:4.15,i:"cQ",s:0,z:0,o:"1750",f:"c"}],f:30,b:[]},"1753":{c:"1718",z:0,i:"1753",n:"*hover* - fanout",a:[],f:30,b:[]},"1082":{i:"1082",n:"*hover* - twitter ingest",z:0,b:[],a:[],f:30},"1758":{j:{"0":[[46,26,46,26,46,99,46,99]],"1":[[46,26,46,26,46,99,46,99]],"2":[[46,26,46,26,46,99,46,99]]},c:"1732",z:1.2,i:"1758",n:"Main Timeline",a:[{o:"1733",y:0,z:1,i:"b",e:94.5,a:"0",f:"c",s:21.5},{o:"1733",y:0,z:1,i:"a",e:41.5,a:"0",f:"c",s:41.5},{o:"1735",y:0.1,z:1,i:"b",e:94.5,a:"1",f:"c",s:21.5},{o:"1735",y:0.1,z:1,i:"a",e:41.5,a:"1",f:"c",s:41.5},{o:"1734",y:0.2,z:1,i:"b",e:94.5,a:"2",f:"c",s:21.5},{o:"1734",y:0.2,z:1,i:"a",e:41.5,a:"2",f:"c",s:41.5},{y:1,i:"b",s:94.5,z:0,o:"1733",f:"c"},{y:1,i:"a",s:41.5,z:0,o:"1733",f:"c"},{y:1.1,i:"b",s:94.5,z:0,o:"1735",f:"c"},{y:1.1,i:"a",s:41.5,z:0,o:"1735",f:"c"},{f:"c",p:2,y:1.2,z:0,i:"ActionHandler",s:{a:[{b:"1758",p:3,z:false,symbolOid:"1564"}]},o:"1758"},{y:1.2,i:"a",s:41.5,z:0,o:"1734",f:"c"},{y:1.2,i:"b",s:94.5,z:0,o:"1734",f:"c"}],f:30,b:[]},"1087":{i:"1087",n:"*hover* - ui",z:0,b:[],a:[],f:30},"1762":{c:"1745",z:4.15,i:"1762",n:"Main Timeline",a:[{f:"c",y:0,z:0.15,i:"cR",e:1,s:0,o:"1746"},{f:"c",y:0,z:0.15,i:"cQ",e:1,s:0,o:"1746"},{f:"c",y:0.15,z:3.15,i:"cR",e:1,s:1,o:"1746"},{f:"c",y:0.15,z:3.15,i:"cQ",e:1,s:1,o:"1746"},{f:"c",y:4,z:0.15,i:"cR",e:0,s:1,o:"1746"},{f:"c",y:4,z:0.15,i:"cQ",e:0,s:1,o:"1746"},{y:4.15,i:"cR",s:0,z:0,o:"1746",f:"c"},{y:4.15,i:"cQ",s:0,z:0,o:"1746",f:"c"}],f:30,b:[]},"1751":{c:"1718",z:18.15,i:"1751",n:"Main Timeline",a:[],f:30,b:[{D:1.2,H:true,E:true,z:false,F:0,G:0,C:0,b:"1758"},{D:18.15,H:true,E:true,z:false,F:0,G:0,C:0,b:"1761"},{D:1.2,H:true,E:true,z:false,F:0,G:0,C:0.13,b:"1759"},{D:1.2,H:true,E:true,z:false,F:0,G:0,C:0.26,b:"1760"}]},"1756":{c:"1718",z:0,i:"1756",n:"*hover* - term count",a:[],f:30,b:[]},"1085":{i:"1085",n:"*hover* - related terms",z:0,b:[],a:[],f:30},"1760":{j:{"6":[[41,33,41,33,40,113,41,113],[41,113,41,113,169,114,169,114]],"7":[[41,33,41,33,40,113,41,113],[41,113,41,113,169,114,169,114]],"8":[[41,33,41,33,40,113,41,113],[41,113,41,113,169,114,169,114]]},c:"1740",z:1.2,i:"1760",n:"Main Timeline",a:[{o:"1741",y:0,z:1,i:"b",e:109.5,a:"6",f:"c",s:28.5},{o:"1741",y:0,z:1,i:"a",e:164.5,a:"6",f:"c",s:36.5},{o:"1743",y:0.1,z:1,i:"b",e:109.5,a:"7",f:"c",s:28.5},{o:"1743",y:0.1,z:1,i:"a",e:164.5,a:"7",f:"c",s:36.5},{o:"1742",y:0.2,z:1,i:"a",e:164.5,a:"8",f:"c",s:36.5},{o:"1742",y:0.2,z:1,i:"b",e:109.5,a:"8",f:"c",s:28.5},{y:1,i:"b",s:109.5,z:0,o:"1741",f:"c"},{y:1,i:"a",s:164.5,z:0,o:"1741",f:"c"},{y:1.1,i:"a",s:164.5,z:0,o:"1743",f:"c"},{y:1.1,i:"b",s:109.5,z:0,o:"1743",f:"c"},{f:"c",p:2,y:1.2,z:0,i:"ActionHandler",s:{a:[{b:"1760",p:3,z:false,symbolOid:"1585"}]},o:"1760"},{y:1.2,i:"a",s:164.5,z:0,o:"1742",f:"c"},{y:1.2,i:"b",s:109.5,z:0,o:"1742",f:"c"}],f:30,b:[]},"1754":{c:"1718",z:0,i:"1754",n:"*hover* - twitter ingest",a:[],f:30,b:[]}},bZ:180,O:["1744","1718","1746","1745","1748","1747","1722","1725","1726","1727","1736","1732","1735","1734","1721","1733","1724","1723","1738","1737","1739","1750","1749","1728","1740","1743","1742","1730","1719","1720","1741","1731","1729"],n:"iPhone","_":0,v:{"1729":{h:"1389",p:"no-repeat",x:"visible",a:50,q:"100% 100%",b:416,j:"absolute",bF:"1718",z:14,k:"div",dB:"img",d:25.780000000000001,c:54.670000000000002,r:"inline"},"1725":{h:"1682",p:"no-repeat",x:"visible",a:140,q:"100% 100%",b:64,j:"absolute",bF:"1718",z:1,k:"div",dB:"img",d:123.76000000000001,c:138,r:"inline"},"1737":{b:104.5,B:"#D8DDE4",bF:"1736",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:18,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1749":{x:"visible",cA:false,a:14,b:256,j:"absolute",bF:"1744",c:221,k:"div",bY:1,d:130,z:15,bX:false,bZ:180,cV:[]},"1721":{h:"1674",p:"no-repeat",x:"visible",a:72,q:"100% 100%",b:156,j:"absolute",bF:"1718",z:4,k:"div",dB:"img",d:57.859999999999999,c:10.06,r:"inline"},"1733":{b:21.5,B:"#D8DDE4",bF:"1732",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:19,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1745":{x:"visible",cA:false,a:-18,b:21,j:"absolute",bF:"1744",c:221,k:"div",bY:1,d:110,z:17,bX:false,bZ:180,cV:[]},"1741":{b:28.5,B:"#D8DDE4",bF:"1740",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:23,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:36.5,aL:"50%",T:0,tY:0.5},"1718":{x:"visible",a:9,cA:false,bX:false,j:"absolute",b:4,c:841,k:"div",bY:1,d:419,z:4,bZ:180,cV:[]},"1726":{w:"",h:"1554",p:"no-repeat",x:"visible",a:38,q:"100% 100%",b:87,j:"absolute",dB:"img",z:10,k:"div",bF:"1718",d:76.609999999999999,c:70.060000000000002,r:"inline"},"1738":{b:104.5,B:"#D8DDE4",bF:"1736",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:19,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1722":{h:"1676",p:"no-repeat",x:"visible",a:23,q:"100% 100%",b:64,j:"absolute",bF:"1718",z:9,k:"div",dB:"img",d:123.76000000000001,c:104,r:"inline"},"1734":{b:21.5,B:"#D8DDE4",bF:"1732",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:17,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1746":{bR:0,h:"1460",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:16,k:"div",bF:"1745",d:110,c:221,cQ:0,e:1,r:"inline",cR:0},"1730":{h:"1387",p:"no-repeat",x:"visible",a:16,q:"100% 100%",b:314,j:"absolute",dB:"img",z:15,k:"div",bF:"1718",d:135,c:123,cQ:0.40000000000000002,r:"inline",cR:0.40000000000000002},"1742":{b:28.5,B:"#D8DDE4",bF:"1740",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:21,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:36.5,aL:"50%",T:0,tY:0.5},"1750":{h:"1481",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:18,k:"div",bF:"1749",d:130,c:221,cQ:0,e:1,r:"inline",cR:0},"1719":{h:"1670",p:"no-repeat",x:"visible",a:77,q:"100% 100%",b:319,j:"absolute",bF:"1718",z:2,k:"div",dB:"img",d:73.890000000000001,c:113.45999999999999,r:"inline"},"1727":{w:"",h:"1556",p:"no-repeat",x:"visible",a:166,q:"100% 100%",b:86,j:"absolute",dB:"img",z:11,k:"div",bF:"1718",d:88.739999999999995,c:85.260000000000005,r:"inline"},"1739":{b:104.5,B:"#D8DDE4",bF:"1736",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:17,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1723":{h:"1678",p:"no-repeat",x:"visible",a:23,q:"100% 100%",b:214,j:"absolute",bF:"1718",z:12,k:"div",dB:"img",d:106.15000000000001,c:255.47999999999999,r:"inline"},"1735":{b:21.5,B:"#D8DDE4",bF:"1732",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:18,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1747":{x:"visible",cA:false,a:16,b:21,j:"absolute",bF:"1744",c:231,k:"div",bY:1,d:97,z:16,bX:false,bZ:180,cV:[]},"1731":{h:"1540",p:"no-repeat",x:"visible",a:179,q:"100% 100%",b:358,j:"absolute",bF:"1718",z:16,k:"div",dB:"img",d:85.849999999999994,c:62.740000000000002,r:"inline"},"1743":{b:28.5,B:"#D8DDE4",bF:"1740",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:22,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:36.5,aL:"50%",T:0,tY:0.5},"1728":{h:"1560",p:"no-repeat",x:"visible",a:127,q:"100% 100%",b:231,j:"absolute",bF:"1718",z:13,k:"div",dB:"img",d:75.129999999999995,c:47.920000000000002,r:"inline"},"1724":{h:"1680",p:"no-repeat",x:"visible",a:204,q:"100% 100%",b:175,j:"absolute",bF:"1718",z:5,k:"div",dB:"img",d:45.859999999999999,c:10.06,r:"inline"},"1736":{x:"visible",cA:false,a:163,b:117,j:"absolute",bF:"1718",c:6,k:"div",bY:1,d:71,z:7,bX:false,bZ:180,cV:[]},"1748":{h:"1497",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:19,k:"div",bF:"1747",d:97,c:231,cQ:0,r:"inline",cR:0},"1720":{h:"1672",p:"no-repeat",x:"visible",a:25,q:"100% 100%",b:336,j:"absolute",bF:"1718",z:3,k:"div",dB:"img",d:121.79000000000001,c:252.88,r:"inline"},"1732":{x:"visible",cA:false,a:31,b:126,j:"absolute",bF:"1718",c:9,k:"div",bY:1,d:9,z:6,bX:false,bZ:180,cV:[]},"1744":{x:"visible",cA:false,a:25,b:-19,j:"absolute",bF:"1718",c:221,k:"div",bY:1,d:110,z:17,bX:false,bZ:180,cV:[]},"1740":{x:"visible",cA:false,a:37,b:273,j:"absolute",bF:"1718",c:9,k:"div",bY:1,d:9,z:8,bX:false,bZ:180,cV:[]}}},{o:"991",p:"600px",cA:false,Y:600,Z:430,L:[],c:"#FFFFFF",bY:1,d:600,U:{"1793":{V:{"Main Timeline":"1807"},W:"1807",n:"loop - realtime viz"},"1771":{V:{"Main Timeline":"1803"},W:"1803",n:"tooltip- visualization"},"1765":{V:{"Main Timeline":"1799"},W:"1799",n:"_Medium"},"1788":{V:{"Main Timeline":"1806"},W:"1806",n:"loop - data producers"},"1769":{V:{"Main Timeline":"1802"},W:"1802",n:"tooltip - redshift"},"1782":{V:{"Main Timeline":"1805"},W:"1805",n:"loop - amazon"},"1766":{V:{"Main Timeline":"1800"},W:"1800",n:"looping tooltips - med"},"1773":{V:{"Main Timeline":"1804"},W:"1804",n:"_Chart"},"1767":{V:{"Main Timeline":"1801"},W:"1801",n:"tooltip - data producers"}},T:{"989":{i:"989",n:"*hover* - web app",z:0,b:[],a:[],f:30},"990":{i:"990",n:"*hover* - ui",z:0,b:[],a:[],f:30},"1807":{j:{"15":[[46,109,46,109,46,38,46,38]],"17":[[46,109,46,109,46,38,46,38]],"16":[[46,109,46,109,46,38,46,38]]},c:"1793",z:1.2,i:"1807",n:"Main Timeline",a:[{o:"1794",y:0,z:1,i:"b",e:33.5,a:"15",f:"c",s:104.5},{o:"1794",y:0,z:1,i:"a",e:41.5,a:"15",f:"c",s:41.5},{o:"1795",y:0.1,z:1,i:"a",e:41.5,a:"16",f:"c",s:41.5},{o:"1795",y:0.1,z:1,i:"b",e:33.5,a:"16",f:"c",s:104.5},{o:"1796",y:0.2,z:1,i:"a",e:41.5,a:"17",f:"c",s:41.5},{o:"1796",y:0.2,z:1,i:"b",e:33.5,a:"17",f:"c",s:104.5},{y:1,i:"b",s:33.5,z:0,o:"1794",f:"c"},{y:1,i:"a",s:41.5,z:0,o:"1794",f:"c"},{y:1.1,i:"a",s:41.5,z:0,o:"1795",f:"c"},{y:1.1,i:"b",s:33.5,z:0,o:"1795",f:"c"},{f:"c",p:2,y:1.2,z:0,i:"ActionHandler",s:{a:[{b:"1807",p:3,z:false,symbolOid:"1575"}]},o:"1807"},{y:1.2,i:"b",s:33.5,z:0,o:"1796",f:"c"},{y:1.2,i:"a",s:41.5,z:0,o:"1796",f:"c"}],f:30,b:[]},"1803":{c:"1771",z:4.15,i:"1803",n:"Main Timeline",a:[{y:0,i:"d",s:97,z:0,o:"1772",f:"c"},{f:"c",y:0,z:0.15,i:"cQ",e:1,s:0,o:"1772"},{f:"c",y:0,z:0.15,i:"cR",e:1,s:0,o:"1772"},{y:0,i:"c",s:231,z:0,o:"1772",f:"c"},{f:"c",y:0.15,z:3.15,i:"cQ",e:1,s:1,o:"1772"},{f:"c",y:0.15,z:3.15,i:"cR",e:1,s:1,o:"1772"},{f:"c",y:4,z:0.15,i:"cQ",e:0,s:1,o:"1772"},{f:"c",y:4,z:0.15,i:"cR",e:0,s:1,o:"1772"},{y:4.15,i:"cQ",s:0,z:0,o:"1772",f:"c"},{y:4.15,i:"cR",s:0,z:0,o:"1772",f:"c"}],f:30,b:[]},"987":{i:"987",n:"*hover* - term count",z:0,b:[],a:[],f:30},"985":{i:"985",n:"*hover* - twitter ingest",z:0,b:[],a:[],f:30},"1802":{c:"1769",z:4.15,i:"1802",n:"Main Timeline",a:[{f:"c",y:0,z:0.15,i:"cR",e:1,s:0,o:"1770"},{f:"c",y:0,z:0.15,i:"cQ",e:1,s:0,o:"1770"},{f:"c",y:0.15,z:3.15,i:"cR",e:1,s:1,o:"1770"},{f:"c",y:0.15,z:3.15,i:"cQ",e:1,s:1,o:"1770"},{f:"c",y:4,z:0.15,i:"cR",e:0,s:1,o:"1770"},{f:"c",y:4,z:0.15,i:"cQ",e:0,s:1,o:"1770"},{y:4.15,i:"cR",s:0,z:0,o:"1770",f:"c"},{y:4.15,i:"cQ",s:0,z:0,o:"1770",f:"c"}],f:30,b:[]},"1799":{c:"1765",z:18.15,i:"1799",n:"Main Timeline",a:[],f:30,b:[{D:3.1,H:true,E:true,z:false,F:0,G:0,C:0,b:"1804"},{D:18.15,H:true,E:true,z:false,F:0,G:0,C:0,b:"1800"}]},"1806":{j:{"12":[[46,25,46,25,46,107,46,107]],"14":[[46,25,46,25,46,107,46,107]],"13":[[46,25,46,25,46,107,46,107]]},c:"1788",z:1.2,i:"1806",n:"Main Timeline",a:[{o:"1790",y:0,z:1,i:"b",e:102.5,a:"12",f:"c",s:20.5},{o:"1790",y:0,z:1,i:"a",e:41.5,a:"12",f:"c",s:41.5},{o:"1791",y:0.09,z:0.3,i:"b",e:102.5,a:"13",f:"c",s:20.5},{o:"1791",y:0.09,z:0.3,i:"a",e:41.5,a:"13",f:"c",s:41.5},{o:"1789",y:0.2,z:1,i:"b",e:102.5,a:"14",f:"c",s:20.5},{o:"1789",y:0.2,z:1,i:"a",e:41.5,a:"14",f:"c",s:41.5},{y:1,i:"b",s:102.5,z:0,o:"1790",f:"c"},{y:1,i:"a",s:41.5,z:0,o:"1790",f:"c"},{y:1.09,i:"b",s:102.5,z:0,o:"1791",f:"c"},{y:1.09,i:"a",s:41.5,z:0,o:"1791",f:"c"},{f:"c",p:2,y:1.2,z:0,i:"ActionHandler",s:{a:[{b:"1806",p:3,z:false,symbolOid:"1564"}]},o:"1806"},{y:1.2,i:"a",s:41.5,z:0,o:"1789",f:"c"},{y:1.2,i:"b",s:102.5,z:0,o:"1789",f:"c"}],f:30,b:[]},"988":{i:"988",n:"*hover* - related terms",z:0,b:[],a:[],f:30},"1805":{j:{"9":[[41,37,41,37,243,37,243,37]],"11":[[41,37,41,37,243,37,243,37]],"10":[[41,37,41,37,243,37,243,37]]},c:"1782",z:1.2,i:"1805",n:"Main Timeline",a:[{o:"1783",y:0,z:1,i:"b",e:32.5,a:"9",f:"c",s:32.5},{o:"1783",y:0,z:1,i:"a",e:238.5,a:"9",f:"c",s:36.5},{o:"1784",y:0.11,z:1,i:"a",e:238.5,a:"10",f:"c",s:36.5},{o:"1784",y:0.11,z:1,i:"b",e:32.5,a:"10",f:"c",s:32.5},{o:"1785",y:0.2,z:1,i:"b",e:32.5,a:"11",f:"c",s:32.5},{o:"1785",y:0.2,z:1,i:"a",e:238.5,a:"11",f:"c",s:36.5},{y:1,i:"b",s:32.5,z:0,o:"1783",f:"c"},{y:1,i:"a",s:238.5,z:0,o:"1783",f:"c"},{y:1.11,i:"b",s:32.5,z:0,o:"1784",f:"c"},{y:1.11,i:"a",s:238.5,z:0,o:"1784",f:"c"},{f:"c",p:2,y:1.2,z:0,i:"ActionHandler",s:{a:[{b:"1805",p:3,z:false,symbolOid:"1585"}]},o:"1805"},{y:1.2,i:"b",s:32.5,z:0,o:"1785",f:"c"},{y:1.2,i:"a",s:238.5,z:0,o:"1785",f:"c"}],f:30,b:[]},"1801":{c:"1767",z:4.15,i:"1801",n:"Main Timeline",a:[{f:"c",y:0,z:0.15,i:"cR",e:1,s:0,o:"1768"},{f:"c",y:0,z:0.15,i:"cQ",e:1,s:0,o:"1768"},{f:"c",y:0.15,z:3.15,i:"cR",e:1,s:1,o:"1768"},{f:"c",y:0.15,z:3.15,i:"cQ",e:1,s:1,o:"1768"},{f:"c",y:4,z:0.15,i:"cR",e:0,s:1,o:"1768"},{f:"c",y:4,z:0.15,i:"cQ",e:0,s:1,o:"1768"},{y:4.15,i:"cR",s:0,z:0,o:"1768",f:"c"},{y:4.15,i:"cQ",s:0,z:0,o:"1768",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:18.15,b:[{D:18.15,H:true,E:true,z:false,F:0,G:0,C:0,b:"1799"}],a:[{f:"c",p:2,y:18.15,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"983",p:7}]},o:"kTimelineDefaultIdentifier"}],f:30},"986":{i:"986",n:"*hover* - fanout",z:0,b:[],a:[],f:30},"1804":{c:"1773",z:3.1,i:"1804",n:"Main Timeline",a:[{f:"c",p:2,y:3.1,z:0,i:"ActionHandler",s:{a:[{p:7,b:"1804",symbolOid:"1652"}]},o:"1804"}],f:30,b:[{D:1.2,H:true,E:true,z:false,F:0,G:0,C:0,b:"1806"},{D:1.2,H:true,E:true,z:false,F:0,G:0,C:1,b:"1807"},{D:1.2,H:true,E:true,z:false,F:0,G:0,C:1.2,b:"1805"}]},"1800":{c:"1766",z:18.15,i:"1800",n:"Main Timeline",a:[{f:"c",p:2,y:18.15,z:0,i:"ActionHandler",s:{a:[{b:"1800",p:3,z:false,symbolOid:"1462"}]},o:"1800"}],f:30,b:[{D:4.15,H:true,E:true,z:false,F:0,G:0,C:2,b:"1801"},{D:4.15,H:true,E:true,z:false,F:0,G:0,C:8,b:"1803"},{D:4.15,H:true,E:true,z:false,F:0,G:0,C:14,b:"1802"}]}},bZ:180,O:["1766","1765","1768","1767","1772","1771","1786","1773","1797","1778","1780","1788","1793","1770","1769","1790","1791","1789","1787","1777","1792","1781","1794","1795","1796","1776","1782","1779","1798","1783","1784","1785","1774","1775"],n:"Medium","_":1,v:{"1788":{x:"visible",cA:false,a:10,b:57,j:"absolute",bF:"1773",c:9,k:"div",bY:1,d:9,z:8,bX:false,bZ:180,cV:[]},"1772":{h:"1497",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:19,k:"div",bF:"1771",d:97,c:231,cQ:0,r:"inline",cR:0},"1784":{b:32.5,B:"#D8DDE4",bF:"1782",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:20,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:36.5,aL:"50%",T:0,tY:0.5},"1796":{b:104.5,B:"#D8DDE4",bF:"1793",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:17,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1780":{w:"",h:"1554",p:"no-repeat",x:"visible",a:17,q:"100% 100%",b:23,j:"absolute",dB:"img",z:15,k:"div",bF:"1773",d:76.609999999999999,c:70.060000000000002,r:"inline"},"1792":{h:"1387",p:"no-repeat",x:"visible",a:291,q:"100% 100%",b:147,j:"absolute",dB:"img",z:17,k:"div",bF:"1773",d:135,c:123,cQ:0.40000000000000002,r:"inline",cR:0.40000000000000002},"1769":{x:"visible",cA:false,a:324,b:160,j:"absolute",bF:"1766",c:221,k:"div",bY:1,d:130,z:15,bX:false,bZ:180,cV:[]},"1765":{x:"visible",a:22,cA:false,bX:false,j:"absolute",b:-9,c:548.88,k:"div",bY:1,d:410.14999999999998,z:1,bZ:180,cV:[]},"1777":{h:"1538",p:"no-repeat",x:"visible",a:181,q:"100% 100%",b:106,j:"absolute",bF:"1773",z:5,k:"div",dB:"img",d:45.859999999999999,c:10.06,r:"inline"},"1789":{b:20.5,B:"#D8DDE4",bF:"1788",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:15,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1773":{x:"visible",cA:false,a:39,b:106,j:"absolute",bF:"1765",c:509.88,k:"div",bY:1,d:304.14999999999998,z:3,bX:false,bZ:180,cV:[]},"1785":{b:32.5,B:"#D8DDE4",bF:"1782",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:19,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:36.5,aL:"50%",T:0,tY:0.5},"1797":{h:"1536",p:"no-repeat",x:"visible",a:117,q:"100% 100%",b:0,j:"absolute",bF:"1773",z:3,k:"div",dB:"img",d:123.76000000000001,c:138,r:"inline"},"1781":{h:"1542",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:148,j:"absolute",bF:"1773",z:13,k:"div",dB:"img",d:156.15000000000001,c:255.47999999999999,r:"inline"},"1793":{x:"visible",cA:false,a:140,b:53,j:"absolute",bF:"1773",c:9,k:"div",bY:1,d:9,z:10,bX:false,bZ:180,cV:[]},"1766":{x:"visible",cA:false,a:0,b:0,j:"absolute",bF:"1765",c:221,k:"div",bY:1,d:110,z:4,bX:false,bZ:180,cV:[]},"1778":{w:"",h:"1556",p:"no-repeat",x:"visible",a:143,q:"100% 100%",b:17,j:"absolute",dB:"img",z:16,k:"div",bF:"1773",d:88.739999999999995,c:85.260000000000005,r:"inline"},"1774":{h:"1550",p:"no-repeat",x:"visible",a:252,q:"100% 100%",b:212,j:"absolute",bF:"1773",z:7,k:"div",dB:"img",d:10.06,c:174.86000000000001,r:"inline"},"1786":{h:"1544",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"1773",z:4,k:"div",dB:"img",d:123.76000000000001,c:104,r:"inline"},"1798":{h:"1560",p:"no-repeat",x:"visible",a:104,q:"100% 100%",b:192,j:"absolute",bF:"1773",z:19,k:"div",dB:"img",d:75.129999999999995,c:47.920000000000002,r:"inline"},"1770":{h:"1481",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:18,k:"div",bF:"1769",d:130,c:221,cQ:0,e:1,r:"inline",cR:0},"1782":{x:"visible",cA:false,a:198,b:179,j:"absolute",bF:"1773",c:9,k:"div",bY:1,d:9,z:11,bX:false,bZ:180,cV:[]},"1794":{b:104.5,B:"#D8DDE4",bF:"1793",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:19,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1790":{b:20.5,B:"#D8DDE4",bF:"1788",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:17,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1767":{x:"visible",cA:false,a:-18,b:21,j:"absolute",bF:"1766",c:221,k:"div",bY:1,d:110,z:17,bX:false,bZ:180,cV:[]},"1779":{h:"1540",p:"no-repeat",x:"visible",a:415,q:"100% 100%",b:187,j:"absolute",bF:"1773",z:18,k:"div",dB:"img",d:85.849999999999994,c:62.740000000000002,r:"inline"},"1775":{h:"1389",p:"no-repeat",x:"visible",a:325,q:"100% 100%",b:249,j:"absolute",bF:"1773",z:14,k:"div",dB:"img",d:25.780000000000001,c:54.670000000000002,r:"inline"},"1787":{h:"1546",p:"no-repeat",x:"visible",a:51,q:"100% 100%",b:90,j:"absolute",bF:"1773",z:6,k:"div",dB:"img",d:57.859999999999999,c:10.06,r:"inline"},"1771":{x:"visible",cA:false,a:111,b:27,j:"absolute",bF:"1766",c:231,k:"div",bY:1,d:97,z:16,bX:false,bZ:180,cV:[]},"1783":{b:32.5,B:"#D8DDE4",bF:"1782",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:21,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:36.5,aL:"50%",T:0,tY:0.5},"1795":{b:104.5,B:"#D8DDE4",bF:"1793",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:18,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1791":{b:20.5,B:"#D8DDE4",bF:"1788",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:16,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1768":{bR:0,h:"1460",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:16,k:"div",bF:"1767",d:110,c:221,cQ:0,e:1,r:"inline",cR:0},"1776":{h:"1548",p:"no-repeat",x:"visible",a:282,q:"100% 100%",b:149,j:"absolute",bF:"1773",z:2,k:"div",dB:"img",d:152.78999999999999,c:227.88,r:"inline"}}},{o:"1535",p:"600px",cA:false,Y:850,Z:480,L:[],c:"#FFFFFF",bY:1,d:850,U:{"1816":{V:{"Main Timeline":"1847"},W:"1847",n:"_Chart"},"1810":{V:{"Main Timeline":"1844"},W:"1844",n:"tooltip - redshift"},"1836":{V:{"Main Timeline":"1850"},W:"1850",n:"loop - realtime viz"},"1814":{V:{"Main Timeline":"1846"},W:"1846",n:"tooltip- visualization"},"1808":{V:{"Main Timeline":"1842"},W:"1842",n:"_Desktop"},"1831":{V:{"Main Timeline":"1849"},W:"1849",n:"loop - data producers"},"1812":{V:{"Main Timeline":"1845"},W:"1845",n:"tooltip - data producers"},"1825":{V:{"Main Timeline":"1848"},W:"1848",n:"loop - amazon"},"1809":{V:{"Main Timeline":"1843"},W:"1843",n:"looping tooltips"}},T:{"1843":{c:"1809",z:18.15,i:"1843",n:"Main Timeline",a:[{f:"c",p:2,y:18.15,z:0,i:"ActionHandler",s:{a:[{b:"1843",p:3,z:false,symbolOid:"1610"}]},o:"1843"}],f:30,b:[{D:4.15,H:true,E:true,z:false,F:0,G:0,C:2,b:"1845"},{D:4.15,H:true,E:true,z:false,F:0,G:0,C:8,b:"1846"},{D:4.15,H:true,E:true,z:false,F:0,G:0,C:14,b:"1844"}]},"1529":{i:"1529",n:"*hover* - twitter ingest",z:0,b:[],a:[],f:30},"1531":{i:"1531",n:"*hover* - term count",z:0,b:[],a:[],f:30},"1846":{c:"1814",z:4.15,i:"1846",n:"Main Timeline",a:[{y:0,i:"d",s:97,z:0,o:"1815",f:"c"},{f:"c",y:0,z:0.15,i:"cQ",e:1,s:0,o:"1815"},{f:"c",y:0,z:0.15,i:"cR",e:1,s:0,o:"1815"},{y:0,i:"c",s:231,z:0,o:"1815",f:"c"},{f:"c",y:0.15,z:3.15,i:"cQ",e:1,s:1,o:"1815"},{f:"c",y:0.15,z:3.15,i:"cR",e:1,s:1,o:"1815"},{f:"c",y:4,z:0.15,i:"cQ",e:0,s:1,o:"1815"},{f:"c",y:4,z:0.15,i:"cR",e:0,s:1,o:"1815"},{y:4.15,i:"cQ",s:0,z:0,o:"1815",f:"c"},{y:4.15,i:"cR",s:0,z:0,o:"1815",f:"c"}],f:30,b:[]},"1842":{c:"1808",z:18.15,i:"1842",n:"Main Timeline",a:[],f:30,b:[{D:18.15,H:true,E:true,z:false,F:0,G:0,C:0,b:"1843"},{D:3.1,H:true,E:true,z:false,F:0,G:0,C:0,b:"1847"}]},"1534":{i:"1534",n:"*hover* - ui",z:0,b:[],a:[],f:30},"1530":{i:"1530",n:"*hover* - fanout",z:0,b:[],a:[],f:30},"1849":{j:{"12":[[46,25,46,25,46,107,46,107]],"14":[[46,25,46,25,46,107,46,107]],"13":[[46,25,46,25,46,107,46,107]]},c:"1831",z:1.2,i:"1849",n:"Main Timeline",a:[{o:"1833",y:0,z:1,i:"b",e:102.5,a:"12",f:"c",s:20.5},{o:"1833",y:0,z:1,i:"a",e:41.5,a:"12",f:"c",s:41.5},{o:"1834",y:0.09,z:0.3,i:"b",e:102.5,a:"13",f:"c",s:20.5},{o:"1834",y:0.09,z:0.3,i:"a",e:41.5,a:"13",f:"c",s:41.5},{o:"1832",y:0.2,z:1,i:"b",e:102.5,a:"14",f:"c",s:20.5},{o:"1832",y:0.2,z:1,i:"a",e:41.5,a:"14",f:"c",s:41.5},{y:1,i:"b",s:102.5,z:0,o:"1833",f:"c"},{y:1,i:"a",s:41.5,z:0,o:"1833",f:"c"},{y:1.09,i:"b",s:102.5,z:0,o:"1834",f:"c"},{y:1.09,i:"a",s:41.5,z:0,o:"1834",f:"c"},{f:"c",p:2,y:1.2,z:0,i:"ActionHandler",s:{a:[{b:"1849",p:3,z:false,symbolOid:"1564"}]},o:"1849"},{y:1.2,i:"a",s:41.5,z:0,o:"1832",f:"c"},{y:1.2,i:"b",s:102.5,z:0,o:"1832",f:"c"}],f:30,b:[]},"1845":{c:"1812",z:4.15,i:"1845",n:"Main Timeline",a:[{f:"c",y:0,z:0.15,i:"cR",e:1,s:0,o:"1813"},{f:"c",y:0,z:0.15,i:"cQ",e:1,s:0,o:"1813"},{f:"c",y:0.15,z:3.15,i:"cR",e:1,s:1,o:"1813"},{f:"c",y:0.15,z:3.15,i:"cQ",e:1,s:1,o:"1813"},{f:"c",y:4,z:0.15,i:"cR",e:0,s:1,o:"1813"},{f:"c",y:4,z:0.15,i:"cQ",e:0,s:1,o:"1813"},{y:4.15,i:"cR",s:0,z:0,o:"1813",f:"c"},{y:4.15,i:"cQ",s:0,z:0,o:"1813",f:"c"}],f:30,b:[]},"1533":{i:"1533",n:"*hover* - web app",z:0,b:[],a:[],f:30},"1848":{j:{"9":[[41,37,41,37,243,37,243,37]],"11":[[41,37,41,37,243,37,243,37]],"10":[[41,37,41,37,243,37,243,37]]},c:"1825",z:1.2,i:"1848",n:"Main Timeline",a:[{o:"1826",y:0,z:1,i:"b",e:32.5,a:"9",f:"c",s:32.5},{o:"1826",y:0,z:1,i:"a",e:238.5,a:"9",f:"c",s:36.5},{o:"1827",y:0.11,z:1,i:"a",e:238.5,a:"10",f:"c",s:36.5},{o:"1827",y:0.11,z:1,i:"b",e:32.5,a:"10",f:"c",s:32.5},{o:"1828",y:0.2,z:1,i:"b",e:32.5,a:"11",f:"c",s:32.5},{o:"1828",y:0.2,z:1,i:"a",e:238.5,a:"11",f:"c",s:36.5},{y:1,i:"b",s:32.5,z:0,o:"1826",f:"c"},{y:1,i:"a",s:238.5,z:0,o:"1826",f:"c"},{y:1.11,i:"b",s:32.5,z:0,o:"1827",f:"c"},{y:1.11,i:"a",s:238.5,z:0,o:"1827",f:"c"},{f:"c",p:2,y:1.2,z:0,i:"ActionHandler",s:{a:[{b:"1848",p:3,z:false,symbolOid:"1585"}]},o:"1848"},{y:1.2,i:"b",s:32.5,z:0,o:"1828",f:"c"},{y:1.2,i:"a",s:238.5,z:0,o:"1828",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:18.15,b:[{D:18.15,H:true,E:true,z:false,F:0,G:0,C:0,b:"1842"}],a:[{f:"c",p:2,y:18.15,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"1527",p:7}]},o:"kTimelineDefaultIdentifier"}],f:30},"1844":{c:"1810",z:4.15,i:"1844",n:"Main Timeline",a:[{f:"c",y:0,z:0.15,i:"cR",e:1,s:0,o:"1811"},{f:"c",y:0,z:0.15,i:"cQ",e:1,s:0,o:"1811"},{f:"c",y:0.15,z:3.15,i:"cR",e:1,s:1,o:"1811"},{f:"c",y:0.15,z:3.15,i:"cQ",e:1,s:1,o:"1811"},{f:"c",y:4,z:0.15,i:"cR",e:0,s:1,o:"1811"},{f:"c",y:4,z:0.15,i:"cQ",e:0,s:1,o:"1811"},{y:4.15,i:"cR",s:0,z:0,o:"1811",f:"c"},{y:4.15,i:"cQ",s:0,z:0,o:"1811",f:"c"}],f:30,b:[]},"1532":{i:"1532",n:"*hover* - related terms",z:0,b:[],a:[],f:30},"1850":{j:{"15":[[46,109,46,109,46,38,46,38]],"17":[[46,109,46,109,46,38,46,38]],"16":[[46,109,46,109,46,38,46,38]]},c:"1836",z:1.2,i:"1850",n:"Main Timeline",a:[{o:"1837",y:0,z:1,i:"b",e:33.5,a:"15",f:"c",s:104.5},{o:"1837",y:0,z:1,i:"a",e:41.5,a:"15",f:"c",s:41.5},{o:"1838",y:0.1,z:1,i:"a",e:41.5,a:"16",f:"c",s:41.5},{o:"1838",y:0.1,z:1,i:"b",e:33.5,a:"16",f:"c",s:104.5},{o:"1839",y:0.2,z:1,i:"a",e:41.5,a:"17",f:"c",s:41.5},{o:"1839",y:0.2,z:1,i:"b",e:33.5,a:"17",f:"c",s:104.5},{y:1,i:"b",s:33.5,z:0,o:"1837",f:"c"},{y:1,i:"a",s:41.5,z:0,o:"1837",f:"c"},{y:1.1,i:"a",s:41.5,z:0,o:"1838",f:"c"},{y:1.1,i:"b",s:33.5,z:0,o:"1838",f:"c"},{f:"c",p:2,y:1.2,z:0,i:"ActionHandler",s:{a:[{b:"1850",p:3,z:false,symbolOid:"1575"}]},o:"1850"},{y:1.2,i:"b",s:33.5,z:0,o:"1839",f:"c"},{y:1.2,i:"a",s:41.5,z:0,o:"1839",f:"c"}],f:30,b:[]},"1847":{c:"1816",z:3.1,i:"1847",n:"Main Timeline",a:[{f:"c",p:2,y:3.1,z:0,i:"ActionHandler",s:{a:[{p:7,b:"1847",symbolOid:"1652"}]},o:"1847"}],f:30,b:[{D:1.2,H:true,E:true,z:false,F:0,G:0,C:0,b:"1849"},{D:1.2,H:true,E:true,z:false,F:0,G:0,C:1,b:"1850"},{D:1.2,H:true,E:true,z:false,F:0,G:0,C:1.2,b:"1848"}]}},bZ:180,O:["1813","1812","1815","1814","1829","1816","1808","1840","1823","1821","1836","1811","1810","1831","1809","1833","1834","1832","1830","1820","1824","1819","1835","1837","1838","1839","1825","1841","1822","1826","1827","1828","1817","1818"],n:"Desktop","_":2,v:{"1819":{h:"1548",p:"no-repeat",x:"visible",a:282,q:"100% 100%",b:149,j:"absolute",bF:"1816",z:2,k:"div",dB:"img",d:152.78999999999999,c:227.88,r:"inline"},"1815":{h:"1497",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:19,k:"div",bF:"1814",d:97,c:231,cQ:0,r:"inline",cR:0},"1827":{b:32.5,B:"#D8DDE4",bF:"1825",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:20,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:36.5,aL:"50%",T:0,tY:0.5},"1839":{b:104.5,B:"#D8DDE4",bF:"1836",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:17,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1811":{h:"1481",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:18,k:"div",bF:"1810",d:130,c:221,cQ:0,e:1,r:"inline",cR:0},"1823":{w:"",h:"1554",p:"no-repeat",x:"visible",a:17,q:"100% 100%",b:23,j:"absolute",dB:"img",z:15,k:"div",bF:"1816",d:76.609999999999999,c:70.060000000000002,r:"inline"},"1835":{h:"1387",p:"no-repeat",x:"visible",a:291,q:"100% 100%",b:147,j:"absolute",dB:"img",z:17,k:"div",bF:"1816",d:135,c:123,cQ:0.40000000000000002,r:"inline",cR:0.40000000000000002},"1831":{x:"visible",cA:false,a:10,b:57,j:"absolute",bF:"1816",c:9,k:"div",bY:1,d:9,z:8,bX:false,bZ:180,cV:[]},"1808":{x:"visible",a:170,cA:false,bX:false,j:"absolute",b:118,c:509.88,k:"div",bY:1,d:304.14999999999998,z:1,bZ:180,cV:[]},"1816":{x:"visible",a:0,cA:false,b:0,j:"absolute",bF:"1808",c:509.88,k:"div",z:3,d:304.14999999999998,bY:1,cQ:1.2,bX:false,bZ:180,cV:[],cR:1.2},"1828":{b:32.5,B:"#D8DDE4",bF:"1825",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:19,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:36.5,aL:"50%",T:0,tY:0.5},"1812":{x:"visible",cA:false,a:-129,b:-195,j:"absolute",bF:"1809",c:221,k:"div",bY:1,d:110,z:17,bX:false,bZ:180,cV:[]},"1824":{h:"1542",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:148,j:"absolute",bF:"1816",z:13,k:"div",dB:"img",d:156.15000000000001,c:255.47999999999999,r:"inline"},"1836":{x:"visible",cA:false,a:140,b:53,j:"absolute",bF:"1816",c:9,k:"div",bY:1,d:9,z:10,bX:false,bZ:180,cV:[]},"1820":{h:"1538",p:"no-repeat",x:"visible",a:181,q:"100% 100%",b:106,j:"absolute",bF:"1816",z:5,k:"div",dB:"img",d:45.859999999999999,c:10.06,r:"inline"},"1832":{b:20.5,B:"#D8DDE4",bF:"1831",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:15,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1840":{h:"1536",p:"no-repeat",x:"visible",a:117,q:"100% 100%",b:0,j:"absolute",bF:"1816",z:3,k:"div",dB:"img",d:123.76000000000001,c:138,r:"inline"},"1809":{x:"visible",cA:false,a:30,b:79,j:"absolute",bF:"1808",c:221,k:"div",bY:1,d:110,z:23,bX:false,bZ:180,cV:[]},"1817":{h:"1550",p:"no-repeat",x:"visible",a:252,q:"100% 100%",b:212,j:"absolute",bF:"1816",z:7,k:"div",dB:"img",d:10.06,c:174.86000000000001,r:"inline"},"1829":{h:"1544",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"1816",z:4,k:"div",dB:"img",d:123.76000000000001,c:104,r:"inline"},"1813":{bR:0,h:"1460",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:16,k:"div",bF:"1812",d:110,c:221,cQ:0,e:1,r:"inline",cR:0},"1825":{x:"visible",cA:false,a:198,b:179,j:"absolute",bF:"1816",c:9,k:"div",bY:1,d:9,z:11,bX:false,bZ:180,cV:[]},"1837":{b:104.5,B:"#D8DDE4",bF:"1836",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:19,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1821":{w:"",h:"1556",p:"no-repeat",x:"visible",a:143,q:"100% 100%",b:17,j:"absolute",dB:"img",z:16,k:"div",bF:"1816",d:88.739999999999995,c:85.260000000000005,r:"inline"},"1833":{b:20.5,B:"#D8DDE4",bF:"1831",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:17,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1841":{h:"1560",p:"no-repeat",x:"visible",a:104,q:"100% 100%",b:192,j:"absolute",bF:"1816",z:19,k:"div",dB:"img",d:75.129999999999995,c:47.920000000000002,r:"inline"},"1818":{h:"1389",p:"no-repeat",x:"visible",a:325,q:"100% 100%",b:249,j:"absolute",bF:"1816",z:14,k:"div",dB:"img",d:25.780000000000001,c:54.670000000000002,r:"inline"},"1814":{x:"visible",cA:false,a:27,b:-185,j:"absolute",bF:"1809",c:231,k:"div",bY:1,d:97,z:16,bX:false,bZ:180,cV:[]},"1826":{b:32.5,B:"#D8DDE4",bF:"1825",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:21,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:36.5,aL:"50%",T:0,tY:0.5},"1838":{b:104.5,B:"#D8DDE4",bF:"1836",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:18,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1810":{x:"visible",cA:false,a:285,b:-31,j:"absolute",bF:"1809",c:221,k:"div",bY:1,d:130,z:15,bX:false,bZ:180,cV:[]},"1822":{h:"1540",p:"no-repeat",x:"visible",a:415,q:"100% 100%",b:187,j:"absolute",bF:"1816",z:18,k:"div",dB:"img",d:85.849999999999994,c:62.740000000000002,r:"inline"},"1834":{b:20.5,B:"#D8DDE4",bF:"1831",c:9,P:0,d:9,I:"None",J:"None",K:"None",g:"#C2C7CE",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",Q:5,z:16,D:"#D8DDE4",R:"#D8DDE6",aK:"50%",tX:0.5,S:0,a:41.5,aL:"50%",T:0,tY:0.5},"1830":{h:"1546",p:"no-repeat",x:"visible",a:51,q:"100% 100%",b:90,j:"absolute",bF:"1816",z:6,k:"div",dB:"img",d:57.859999999999999,c:10.06,r:"inline"}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();