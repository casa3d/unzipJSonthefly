!function(t){function e(){var t=-1,e=this;e.append=function(n){var i,r=e.table;for(i=0;i<n.length;i++)t=t>>>8^r[255&(t^n[i])]},e.get=function(){return~t}}function n(t,e,n){return t.slice?t.slice(e,e+n):t.webkitSlice?t.webkitSlice(e,e+n):t.mozSlice?t.mozSlice(e,e+n):t.msSlice?t.msSlice(e,e+n):void 0}function i(t,e){var n,i;return n=new ArrayBuffer(t),i=new Uint8Array(n),e&&i.set(e,0),{buffer:n,array:i,view:new DataView(n)}}function r(){}function o(t){function e(e,n){var o=new Blob([t],{type:Z});i=new c(o),i.init(function(){r.size=i.size,e()},n)}function n(t,e,n,r){i.readUint8Array(t,e,n,r)}var i,r=this;r.size=0,r.init=e,r.readUint8Array=n}function a(e){function n(t){for(var n=e.length;"="==e.charAt(n-1);)n--;o=e.indexOf(",")+1,a.size=Math.floor(.75*(n-o)),t()}function r(n,r,a){var c,f=i(r),u=4*Math.floor(n/3),s=4*Math.ceil((n+r)/3),p=t.atob(e.substring(u+o,s+o)),d=n-3*Math.floor(u/4);for(c=d;d+r>c;c++)f.array[c-d]=p.charCodeAt(c);a(f.array)}var o,a=this;a.size=0,a.init=n,a.readUint8Array=r}function c(t){function e(e){this.size=t.size,e()}function i(e,i,r,o){var a=new FileReader;a.onload=function(t){r(new Uint8Array(t.target.result))},a.onerror=o,a.readAsArrayBuffer(n(t,e,i))}var r=this;r.size=0,r.init=e,r.readUint8Array=i}function f(){}function u(t){function e(t){r=new Blob([],{type:Z}),t()}function n(t,e){r=new Blob([r,x?t:t.buffer],{type:Z}),e()}function i(e,n){var i=new FileReader;i.onload=function(t){e(t.target.result)},i.onerror=n,i.readAsText(r,t)}var r,o=this;o.init=e,o.writeUint8Array=n,o.getData=i}function s(e){function n(t){a+="data:"+(e||"")+";base64,",t()}function i(e,n){var i,r=c.length,o=c;for(c="",i=0;i<3*Math.floor((r+e.length)/3)-r;i++)o+=String.fromCharCode(e[i]);for(;i<e.length;i++)c+=String.fromCharCode(e[i]);o.length>2?a+=t.btoa(o):c=o,n()}function r(e){e(a+t.btoa(c))}var o=this,a="",c="";o.init=n,o.writeUint8Array=i,o.getData=r}function p(t){function e(e){r=new Blob([],{type:t}),e()}function n(e,n){r=new Blob([r,x?e:e.buffer],{type:t}),n()}function i(t){t(r)}var r,o=this;o.init=e,o.writeUint8Array=n,o.getData=i}function d(t,e,n,i,r,o,a,c,f,u){function s(){t.removeEventListener(k,p,!1),c(h)}function p(t){var e=t.data,i=e.data;e.onappend&&(h+=i.length,n.writeUint8Array(i,function(){o(!1,i),d()},u)),e.onflush&&(i?(h+=i.length,n.writeUint8Array(i,function(){o(!1,i),s()},u)):s()),e.progress&&a&&a(l+e.current,r)}function d(){l=y*T,r>l?e.readUint8Array(i+l,Math.min(T,r-l),function(e){t.postMessage({append:!0,data:e}),y++,a&&a(l,r),o(!0,e)},f):t.postMessage({flush:!0})}var l,h,y=0;h=0,t.addEventListener(k,p,!1),d()}function l(t,e,n,i,r,o,a,c,f,u){function s(){var h;p=d*T,r>p?e.readUint8Array(i+p,Math.min(T,r-p),function(e){var c=t.append(e,function(){a&&a(i+p,r)});l+=c.length,o(!0,e),n.writeUint8Array(c,function(){o(!1,c),d++,setTimeout(s,1)},u),a&&a(p,r)},f):(h=t.flush(),h?(l+=h.length,n.writeUint8Array(h,function(){o(!1,h),c(l)},u)):c(l))}var p,d=0,l=0;s()}function h(n,i,r,o,a,c,f,u,s){function p(t,e){a&&!t&&v.append(e)}function h(t){c(t,v.get())}var y,v=new e;return t.zip.useWebWorkers?(y=new Worker(t.zip.workerScriptsPath+H),d(y,n,i,r,o,p,f,h,u,s)):l(new t.zip.Inflater,n,i,r,o,p,f,h,u,s),y}function y(n,i,r,o,a,c,f){function u(t,e){t&&y.append(e)}function s(t){o(t,y.get())}function p(){h.removeEventListener(k,p,!1),d(h,n,i,0,n.size,u,a,s,c,f)}var h,y=new e;return t.zip.useWebWorkers?(h=new Worker(t.zip.workerScriptsPath+I),h.addEventListener(k,p,!1),h.postMessage({init:!0,level:r})):l(new t.zip.Deflater,n,i,0,n.size,u,a,s,c,f),h}function v(t,n,i,r,o,a,c,f,u){function s(){var e=p*T;r>e?t.readUint8Array(i+e,Math.min(T,r-e),function(t){o&&d.append(t),c&&c(e,r,t),n.writeUint8Array(t,function(){p++,s()},u)},f):a(r,d.get())}var p=0,d=new e;s()}function w(t){var e,n,i="",r=["Ç","ü","é","â","ä","à","å","ç","ê","ë","è","ï","î","ì","Ä","Å","É","æ","Æ","ô","ö","ò","û","ù","ÿ","Ö","Ü","ø","£","Ø","×","ƒ","á","í","ó","ú","ñ","Ñ","ª","º","¿","®","¬","½","¼","¡","«","»","_","_","_","¦","¦","Á","Â","À","©","¦","¦","+","+","¢","¥","+","+","-","-","+","-","+","ã","Ã","+","+","-","-","¦","-","+","¤","ð","Ð","Ê","Ë","È","i","Í","Î","Ï","+","+","_","_","¦","Ì","_","Ó","ß","Ô","Ò","õ","Õ","µ","þ","Þ","Ú","Û","Ù","ý","Ý","¯","´","­","±","_","¾","¶","§","÷","¸","°","¨","·","¹","³","²","_"," "];for(e=0;e<t.length;e++)n=255&t.charCodeAt(e),i+=n>127?r[n-128]:String.fromCharCode(n);return i}function g(t){return decodeURIComponent(escape(t))}function m(t){var e,n="";for(e=0;e<t.length;e++)n+=String.fromCharCode(t[e]);return n}function U(t){var e=(4294901760&t)>>16,n=65535&t;try{return new Date(1980+((65024&e)>>9),((480&e)>>5)-1,31&e,(63488&n)>>11,(2016&n)>>5,2*(31&n),0)}catch(i){}}function z(t,e,n,i,r){return t.version=e.view.getUint16(n,!0),t.bitFlag=e.view.getUint16(n+2,!0),t.compressionMethod=e.view.getUint16(n+4,!0),t.lastModDateRaw=e.view.getUint32(n+6,!0),t.lastModDate=U(t.lastModDateRaw),1===(1&t.bitFlag)?(r(F),void 0):((i||8!=(8&t.bitFlag))&&(t.crc32=e.view.getUint32(n+10,!0),t.compressedSize=e.view.getUint32(n+14,!0),t.uncompressedSize=e.view.getUint32(n+18,!0)),4294967295===t.compressedSize||4294967295===t.uncompressedSize?(r(B),void 0):(t.filenameLength=e.view.getUint16(n+22,!0),t.extraFieldLength=e.view.getUint16(n+24,!0),void 0))}function A(t,e){function n(){}function r(n,o){t.readUint8Array(t.size-n,n,function(t){var e=i(t.length,t).view;1347093766!=e.getUint32(0)?r(n+1,o):o(e)},function(){e(L)})}return n.prototype.getData=function(n,r,o,a){function c(t,e){d&&d.terminate(),d=null,t&&t(e)}function f(t){var e=i(4);return e.view.setUint32(0,t),l.crc32==e.view.getUint32(0)}function u(t,e){a&&!f(e)?s():n.getData(function(t){c(r,t)})}function s(){c(e,C)}function p(){c(e,S)}var d,l=this;t.readUint8Array(l.offset,30,function(r){var c,f=i(r.length,r);return 1347093252!=f.view.getUint32(0)?(e(E),void 0):(z(l,f,4,!1,e),c=l.offset+30+l.filenameLength+l.extraFieldLength,n.init(function(){0===l.compressionMethod?v(t,n,c,l.compressedSize,a,u,o,s,p):d=h(t,n,c,l.compressedSize,a,u,o,s,p)},p),void 0)},s)},{getEntries:function(o){return t.size<22?(e(E),void 0):(r(22,function(r){var a,c;a=r.getUint32(16,!0),c=r.getUint16(8,!0),t.readUint8Array(a,t.size-a,function(t){var r,a,f,u,s=0,p=[],d=i(t.length,t);for(r=0;c>r;r++){if(a=new n,1347092738!=d.view.getUint32(s))return e(E),void 0;z(a,d,s+6,!0,e),a.commentLength=d.view.getUint16(s+32,!0),a.directory=16==(16&d.view.getUint8(s+38)),a.offset=d.view.getUint32(s+42,!0),f=m(d.array.subarray(s+46,s+46+a.filenameLength)),a.filename=2048===(2048&a.bitFlag)?g(f):w(f),a.directory||"/"!=a.filename.charAt(a.filename.length-1)||(a.directory=!0),u=m(d.array.subarray(s+46+a.filenameLength+a.extraFieldLength,s+46+a.filenameLength+a.extraFieldLength+a.commentLength)),a.comment=2048===(2048&a.bitFlag)?g(u):w(u),p.push(a),s+=46+a.filenameLength+a.extraFieldLength+a.commentLength}o(p)},function(){e(L)})}),void 0)},close:function(t){t&&t()}}}function b(t){return unescape(encodeURIComponent(t))}function R(t){var e,n=[];for(e=0;e<t.length;e++)n.push(t.charCodeAt(e));return n}function D(t,e,n){function r(t,e){c&&c.terminate(),c=null,t&&t(e)}function o(){r(e,W)}function a(){r(e,C)}var c,f={},u=[],s=0;return{add:function(p,d,l,h,w){function g(e){var r;D=w.lastModDate||new Date,z=i(26),f[p]={headerArray:z.array,directory:w.directory,filename:A,offset:s,comment:R(b(w.comment||""))},z.view.setUint32(0,335546376),w.version&&z.view.setUint8(0,w.version),n||0===w.level||w.directory||z.view.setUint16(4,2048),z.view.setUint16(6,(D.getHours()<<6|D.getMinutes())<<5|D.getSeconds()/2,!0),z.view.setUint16(8,(D.getFullYear()-1980<<4|D.getMonth()+1)<<5|D.getDate(),!0),z.view.setUint16(22,A.length,!0),r=i(30+A.length),r.view.setUint32(0,1347093252),r.array.set(z.array,4),r.array.set(A,30),s+=r.array.length,t.writeUint8Array(r.array,e,o)}function m(e,n){var a=i(16);s+=e||0,a.view.setUint32(0,1347094280),"undefined"!=typeof n&&(z.view.setUint32(10,n,!0),a.view.setUint32(4,n,!0)),d&&(a.view.setUint32(8,e,!0),z.view.setUint32(14,e,!0),a.view.setUint32(12,d.size,!0),z.view.setUint32(18,d.size,!0)),t.writeUint8Array(a.array,function(){s+=16,r(l)},o)}function U(){return w=w||{},p=p.trim(),w.directory&&"/"!=p.charAt(p.length-1)&&(p+="/"),f.hasOwnProperty(p)?(e(M),void 0):(A=R(b(p)),u.push(p),g(function(){d?n||0===w.level?v(d,t,0,d.size,!0,m,h,a,o):c=y(d,t,w.level,m,h,a,o):m()},o),void 0)}var z,A,D;d?d.init(U,a):U()},close:function(e){var n,a,c,p=0,d=0;for(a=0;a<u.length;a++)c=f[u[a]],p+=46+c.filename.length+c.comment.length;for(n=i(p+22),a=0;a<u.length;a++)c=f[u[a]],n.view.setUint32(d,1347092738),n.view.setUint16(d+4,5120),n.array.set(c.headerArray,d+6),n.view.setUint16(d+32,c.comment.length,!0),c.directory&&n.view.setUint8(d+38,16),n.view.setUint32(d+42,c.offset,!0),n.array.set(c.filename,d+46),n.array.set(c.comment,d+46+c.filename.length),d+=46+c.filename.length+c.comment.length;n.view.setUint32(d,1347093766),n.view.setUint16(d+8,u.length,!0),n.view.setUint16(d+10,u.length,!0),n.view.setUint32(d+12,p,!0),n.view.setUint32(d+16,s,!0),t.writeUint8Array(n.array,function(){r(function(){t.getData(e)})},o)}}}var x,E="File format is not recognized.",F="File contains encrypted entry.",B="File is using Zip64 (4gb+ file size).",L="Error while reading zip file.",W="Error while writing zip file.",S="Error while writing file data.",C="Error while reading file data.",M="File already exists.",T=524288,H="inflate.js",I="deflate.js",Z="text/plain",k="message";try{x=0===new Blob([new DataView(new ArrayBuffer(0))]).size}catch(N){}e.prototype.table=function(){var t,e,n,i=[];for(t=0;256>t;t++){for(n=t,e=0;8>e;e++)1&n?n=3988292384^n>>>1:n>>>=1;i[t]=n}return i}(),o.prototype=new r,o.prototype.constructor=o,a.prototype=new r,a.prototype.constructor=a,c.prototype=new r,c.prototype.constructor=c,f.prototype.getData=function(t){t(this.data)},u.prototype=new f,u.prototype.constructor=u,s.prototype=new f,s.prototype.constructor=s,p.prototype=new f,p.prototype.constructor=p,t.zip={Reader:r,Writer:f,BlobReader:c,Data64URIReader:a,TextReader:o,BlobWriter:p,Data64URIWriter:s,TextWriter:u,createReader:function(t,e,n){t.init(function(){e(A(t,n))},n)},createWriter:function(t,e,n,i){t.init(function(){e(D(t,n,i))},n)},workerScriptsPath:"",useWebWorkers:!0}}(this),function(){function t(t){function e(e){this.size=t.uncompressedSize,e()}function n(e){o.data?e():t.getData(new w,function(t){o.data=t,r=new z(t),e()},null,o.checkCrc32)}function i(t,e,i,o){n(function(){r.readUint8Array(t,e,i,o)},o)}var r,o=this;o.size=0,o.init=e,o.readUint8Array=i}function e(t){function e(t){n+=t.uncompressedSize||0,t.children.forEach(e)}var n=0;return e(t),n}function n(t,e,i){function r(){a++,a<t.children.length?o(t.children[a]):e()}function o(t){t.directory?n(t,r,i):(t.reader=new t.Reader(t.data,i),t.reader.init(function(){t.uncompressedSize=t.reader.size,r()}))}var a=0;t.children.length?o(t.children[a]):e()}function i(t){var e=t.parent.children;e.forEach(function(n,i){n.id==t.id&&e.splice(i,1)})}function r(t,e,n,i,r){function o(t,e,n,i,r){function c(){var u=e.children[f];u?t.add(u.getFullname(),u.reader,function(){a+=u.uncompressedSize||0,o(t,u,function(){f++,c()},i,r)},function(t){i&&i(a+t,r)},{directory:u.directory,version:u.zipVersion}):n()}var f=0;c()}var a=0;o(t,e,n,i,r)}function o(t,e,n,i){function r(t,e){t.isDirectory&&t.createReader().readEntries(e),t.isFile&&e([])}function o(t,e,n){r(e,function(e){function r(e){function n(t){o(t,e,function(){c++,a()})}e.isDirectory&&n(t.addDirectory(e.name)),e.isFile&&e.file(function(i){var r=t.addBlob(e.name,i);r.uncompressedSize=i.size,n(r)},i)}function a(){var t=e[c];t?r(t):n()}var c=0;a()})}e.isDirectory?o(t,e,n):e.file(function(i){t.addBlob(e.name,i),n()},i)}function a(t,e,n,i,r,o,a){function c(t,e,n,i,r,o){function u(e){function n(t){f+=e.uncompressedSize||0,c(t,e,function(){p++,s()},i,r,o)}e.directory?t.getDirectory(e.name,{create:!0},n,r):t.getFile(e.name,{create:!0},function(t){e.getData(new zip.FileWriter(t,zip.getMimeType(e.name)),n,function(t){i&&i(f+t,o)},a)},r)}function s(){var t=e.children[p];t?u(t):n()}var p=0;s()}var f=0;e.directory?c(t,e,n,i,r,o):e.getData(new zip.FileWriter(t,zip.getMimeType(e.name)),n,i,a)}function c(t){t.entries=[],t.root=new l(t)}function f(t,e,n,i,r){function o(){var c=a*y;i&&i(c,t.size),c<t.size?t.readUint8Array(c,Math.min(y,t.size-c),function(t){e.writeUint8Array(new Uint8Array(t),function(){a++,o()})},r):e.getData(n)}var a=0;o()}function u(t,e,n,i){var r=this;!t||t.constructor==r.Writer&&r.data?e(r.data):(r.reader||(r.reader=new r.Reader(r.data,i)),r.reader.init(function(){t.init(function(){f(r.reader,t,e,n,i)},i)}))}function s(t,e,n,i){if(t.directory)return i?new l(t.fs,e,n,t):new d(t.fs,e,n,t);throw"Parent entry is not a directory."}function p(){}function d(t,e,n,i){var r=this;p.prototype.init.call(r,t,e,n,i),r.Reader=n.Reader,r.Writer=n.Writer,r.data=n.data,r.getData=n.getData||u}function l(t,e,n,i){var r=this;p.prototype.init.call(r,t,e,n,i),r.directory=!0}function h(){c(this)}var y=524288,v=zip.TextWriter,w=zip.BlobWriter,g=zip.Data64URIWriter,m=zip.Reader,U=zip.TextReader,z=zip.BlobReader,A=zip.Data64URIReader,b=zip.createReader,R=zip.createWriter;t.prototype=new m,t.prototype.constructor=t,t.prototype.checkCrc32=!1,p.prototype={init:function(t,e,n,i){var r=this;if(t.root&&i&&i.getChildByName(e))throw"Entry filename already exists.";n||(n={}),r.fs=t,r.name=e,r.id=t.entries.length,r.parent=i,r.children=[],r.zipVersion=n.zipVersion||20,r.uncompressedSize=0,t.entries.push(r),i&&r.parent.children.push(r)},getFileEntry:function(t,i,r,o,c){var f=this;n(f,function(){a(t,f,i,r,o,e(f),c)},o)},moveTo:function(t){var e=this;if(!t.directory)throw"Target entry is not a directory.";if(t.isDescendantOf(e))throw"Entry is a ancestor of target entry.";if(e!=t){if(t.getChildByName(e.name))throw"Entry filename already exists.";i(e),e.parent=t,t.children.push(e)}},getFullname:function(){for(var t=this,e=t.name,n=t.parent;n;)e=(n.name?n.name+"/":"")+e,n=n.parent;return e},isDescendantOf:function(t){for(var e=this.parent;e&&e.id!=t.id;)e=e.parent;return!!e}},p.prototype.constructor=p;var D;d.prototype=D=new p,D.constructor=d,D.getText=function(t,e,n,i){this.getData(new v(i),t,e,n)},D.getBlob=function(t,e,n,i){this.getData(new w(t),e,n,i)},D.getData64URI=function(t,e,n,i){this.getData(new g(t),e,n,i)};var x;l.prototype=x=new p,x.constructor=l,x.addDirectory=function(t){return s(this,t,null,!0)},x.addText=function(t,e){return s(this,t,{data:e,Reader:U,Writer:v})},x.addBlob=function(t,e){return s(this,t,{data:e,Reader:z,Writer:w})},x.addData64URI=function(t,e){return s(this,t,{data:e,Reader:A,Writer:g})},x.addFileEntry=function(t,e,n){o(this,t,e,n)},x.addData=function(t,e){return s(this,t,e)},x.importBlob=function(t,e,n){this.importZip(new z(t),e,n)},x.importText=function(t,e,n){this.importZip(new U(t),e,n)},x.importData64URI=function(t,e,n){this.importZip(new A(t),e,n)},x.exportBlob=function(t,e,n){this.exportZip(new w("application/zip"),t,e,n)},x.exportText=function(t,e,n){this.exportZip(new v,t,e,n)},x.exportFileEntry=function(t,e,n,i){this.exportZip(new zip.FileWriter(t,"application/zip"),e,n,i)},x.exportData64URI=function(t,e,n){this.exportZip(new g("application/zip"),t,e,n)},x.importZip=function(e,n,i){var r=this;b(e,function(e){e.getEntries(function(e){e.forEach(function(e){var n=r,i=e.filename.split("/"),o=i.pop();i.forEach(function(t){n=n.getChildByName(t)||new l(r.fs,t,null,n)}),e.directory||s(n,o,{data:e,Reader:t})}),n()})},i)},x.exportZip=function(t,i,o,a){var c=this;n(c,function(){R(t,function(t){r(t,c,function(){t.close(i)},o,e(c))},a)},a)},x.getChildByName=function(t){var e,n,i=this;for(e=0;e<i.children.length;e++)if(n=i.children[e],n.name==t)return n},h.prototype={remove:function(t){i(t),this.entries[t.id]=null},find:function(t){var e,n=t.split("/"),i=this.root;for(e=0;i&&e<n.length;e++)i=i.getChildByName(n[e]);return i},getById:function(t){return this.entries[t]},importBlob:function(t,e,n){c(this),this.root.importBlob(t,e,n)},importText:function(t,e,n){c(this),this.root.importText(t,e,n)},importData64URI:function(t,e,n){c(this),this.root.importData64URI(t,e,n)},exportBlob:function(t,e,n){this.root.exportBlob(t,e,n)},exportText:function(t,e,n){this.root.exportText(t,e,n)},exportFileEntry:function(t,e,n,i){this.root.exportFileEntry(t,e,n,i)},exportData64URI:function(t,e,n){this.root.exportData64URI(t,e,n)}},zip.fs={FS:h,ZipDirectoryEntry:l,ZipFileEntry:d},zip.getMimeType=function(){return"application/octet-stream"}}(),function(){function t(t){function e(e,n){var i;r.data?e():(i=new XMLHttpRequest,i.addEventListener("load",function(){r.size||(r.size=Number(i.getResponseHeader("Content-Length"))),r.data=new Uint8Array(i.response),e()},!1),i.addEventListener("error",n,!1),i.open("GET",t),i.responseType="arraybuffer",i.send())}function n(e,n){var i=new XMLHttpRequest;i.addEventListener("load",function(){r.size=Number(i.getResponseHeader("Content-Length")),e()},!1),i.addEventListener("error",n,!1),i.open("HEAD",t),i.send()}function i(t,n,i,o){e(function(){i(new Uint8Array(r.data.subarray(t,t+n)))},o)}var r=this;r.size=0,r.init=n,r.readUint8Array=i}function e(t){function e(e,n){var i=new XMLHttpRequest;i.addEventListener("load",function(){r.size=Number(i.getResponseHeader("Content-Length")),"bytes"==i.getResponseHeader("Accept-Ranges")?e():n(c)},!1),i.addEventListener("error",n,!1),i.open("HEAD",t),i.send()}function n(e,n,i,r){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="arraybuffer",o.setRequestHeader("Range","bytes="+e+"-"+(e+n-1)),o.addEventListener("load",function(){i(o.response)},!1),o.addEventListener("error",r,!1),o.send()}function i(t,e,i,r){n(t,e,function(t){i(new Uint8Array(t))},r)}var r=this;r.size=0,r.init=e,r.readUint8Array=i}function n(t){function e(e){i.size=t.byteLength,e()}function n(e,n,i){i(new Uint8Array(t.slice(e,e+n)))}var i=this;i.size=0,i.init=e,i.readUint8Array=n}function i(){function t(t){i=new Uint8Array,t()}function e(t,e){var n=new Uint8Array(i.length+t.length);n.set(i),n.set(t,i.length),i=n,e()}function n(t){t(i.buffer)}var i,r=this;r.init=t,r.writeUint8Array=e,r.getData=n}function r(t,e){function n(e,n){t.createWriter(function(t){o=t,e()},n)}function i(t,n,i){var r=new Blob([a?t:t.buffer],{type:e});o.onwrite=function(){o.onwrite=null,n()},o.onerror=i,o.write(r)}function r(e){t.file(e)}var o,c=this;c.init=n,c.writeUint8Array=i,c.getData=r}var o,a,c="HTTP Range not supported.",f=zip.Reader,u=zip.Writer;try{a=0===new Blob([new DataView(new ArrayBuffer(0))]).size}catch(s){}t.prototype=new f,t.prototype.constructor=t,e.prototype=new f,e.prototype.constructor=e,n.prototype=new f,n.prototype.constructor=n,i.prototype=new u,i.prototype.constructor=i,r.prototype=new u,r.prototype.constructor=r,zip.FileWriter=r,zip.HttpReader=t,zip.HttpRangeReader=e,zip.ArrayBufferReader=n,zip.ArrayBufferWriter=i,zip.fs&&(o=zip.fs.ZipDirectoryEntry,o.prototype.addHttpContent=function(n,i,r){function a(t,e,n,i){if(t.directory)return i?new o(t.fs,e,n,t):new zip.fs.ZipFileEntry(t.fs,e,n,t);throw"Parent entry is not a directory."}return a(this,n,{data:i,Reader:r?e:t})},o.prototype.importHttpContent=function(n,i,r,o){this.importZip(i?new e(n):new t(n),r,o)},zip.fs.FS.prototype.importHttpContent=function(t,e,n,i){this.entries=[],this.root=new o(this),this.root.importHttpContent(t,e,n,i)})}();