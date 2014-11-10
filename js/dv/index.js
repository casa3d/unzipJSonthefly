onload=function(){
  z={
    d:document,
    s:'script',
    blob:function(dt){
      var b=new Blob([dt],{type:'application/java'+z.s})
      return URL.createObjectURL(b)},
    new:function(o){var s
      z.d.head.appendChild(s=z.d.createElement(z.s))
      s.src=o.src
      o.cb&&(s.onload=o.cb)},
    callback:function(){
      b.innerHTML+="<div>ok zip.js has been embedded it Now I'll get jQuery.zip its size is: 28.7kb, uncompress it and embed it into head"
      zipFs=new zip.fs.FS()
      zip.workerScriptsPath='../../lbs/'
      zipFs.importHttpContent(
        z.file,
        0,//false because I don't need ...
        function(){z.ch=zipFs.root.children
          for(var i in z.ch){
            z.ch[i].getText(
              function(data){//callback when data finishes loading
                z.new({
                  src:z.blob(data),
                  cb:function(){
                    $(b).append("<div>instead of actual jQuery library which its size is: 82.2kb</div><div>it's saved 65.08% of transfering data it's like I'd only transfer 34.91% of actual library-size</div>")
                    setTimeout(function(){$(z.s).remove()},3e3)}})})}})},
    init:function(f){
      z.file=f
      z.new({
        src:'../../lbs/zip.js',
        cb:z.callback})}}
  console.clear()
  z.init('js/jQuery.zip')}