/* Navigasi bersama Virtual Math Lab: Beranda · Hitung Hebat · Tryout · pilih kelas */
(function(){
  try{
    var s=document.currentScript, src=(s&&s.getAttribute('src'))||'../shared/nav.js';
    var base=src.replace(/shared\/nav\.js.*$/,'');
    if(!document.querySelector('link[data-vnav]')){ var l=document.createElement('link'); l.rel='stylesheet'; l.href=base+'shared/nav.css'; l.setAttribute('data-vnav','1'); document.head.appendChild(l); }
    var path=location.pathname.replace(/\\/g,'/'), m=path.match(/\/(sd-kelas-\d|smp-kelas-\d|hitung-hebat|tryout)\//), cur=m?m[1]:'home';
    var G=[['sd-kelas-1','SD Kelas I'],['sd-kelas-2','SD Kelas II'],['sd-kelas-3','SD Kelas III'],['sd-kelas-4','SD Kelas IV'],['sd-kelas-5','SD Kelas V'],['sd-kelas-6','SD Kelas VI'],['smp-kelas-7','SMP Kelas VII'],['smp-kelas-8','SMP Kelas VIII'],['smp-kelas-9','SMP Kelas IX']];
    var n=document.createElement('nav'); n.className='vnav'; n.setAttribute('aria-label','Navigasi Virtual Math Lab');
    var h='<div class="vin"><a class="vmark'+(cur==='home'?' on':'')+'" href="'+base+'index.html"><b>VML</b><span class="vlbl">Virtual Math Lab</span></a>'+
      '<a class="'+(cur==='hitung-hebat'?'on':'')+'" href="'+base+'hitung-hebat/index.html">⚡ Hitung Hebat</a>'+
      '<a class="'+(cur==='tryout'?'on':'')+'" href="'+base+'tryout/index.html">📝 Tryout</a>'+
      '<select aria-label="Pindah ke kelas"><option value="">'+(cur.indexOf('kelas')>0?'Kelas lain…':'Pilih kelas…')+'</option>';
    for(var i=0;i<G.length;i++) h+='<option value="'+G[i][0]+'"'+(G[i][0]===cur?' selected':'')+'>'+G[i][1]+'</option>';
    h+='</select></div>'; n.innerHTML=h;
    document.body.insertBefore(n,document.body.firstChild);
    n.querySelector('select').addEventListener('change',function(){ if(this.value) location.href=base+this.value+'/index.html'; });
  }catch(e){}
})();
