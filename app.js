const $ = id => document.getElementById(id);
const num = id => parseFloat((($(id)?.value || '0') + '').replace(',', '.')) || 0;
const satu = x => (Number.isFinite(x) ? x : 0).toLocaleString('id-ID', {minimumFractionDigits:1, maximumFractionDigits:1});
const AF = [['1.0','1,0 - Bed rest'],['1.2','1,2 - Light'],['1.3','1,3 - Moderate'],['1.5','1,5 - Heavy']];
const SF = [['1.0','1,0 - Normal'],['1.1','1,1 - Mild'],['1.2','1,2 - Moderate'],['1.3','1,3 - Severe'],['1.4','1,4'],['1.5','1,5']];
const ORAL = [
['DND 30',1294,29.7,39.6,206.4],['DND 35',1538,34.4,47.5,206.4],['DND 40',1722,41.1,54.8,247.3],['DND 45',1895,45.7,62.6,270],['DND 50',2093,51.4,64.1,290.6],
['DIET RP 30 GR',1523,31.1,47.7,241.7],['DIET RP 35 GR',1731,35,60.3,261],['DIET RP 40 GR',1920,41.3,62.7,294.3],['DIET RKH 1300 KKAL',1312.5,64.2,52.2,150],['DIET RKH 1500 KKAL',1494.3,74.9,59.2,169.4],
['DH I (TIM SARING)',1224,70,29.2,175.8],['DH II (BB KASAR)',1538.1,75.8,35.4,234.2],['DH III (NASI)',1938.5,82.1,51.6,292],['DJ I (CAIR)',842.8,26.8,8.4,162.6],['DJ II (BUBUR)',1538.1,75.8,35.4,234.2],['DJ III (NL/NASI)',1938.5,82.1,51.6,292],
['DIET KANKER I',2047,92.3,64.9,279.2],['DIET KANKER II',2314.7,98.6,66.4,337.3],['BS STANDAR',1233.8,33.9,24.5,221],['BS DM',703.1,33.7,7.5,124.6],['TS STANDAR',1521.6,63,54,113.5],['TS ENCER',848.1,32.9,28.3,22.5],['TS ENCER+PT',693,39,27,67.5],['EKS JUS',108.3,0.7,0.1,27.7],['CPT BIASA',160,5.8,1.9,30.1],['CPT DM',73.3,7.3,0.2,10.1],
['ANAK A (1-3 TH)',1122.4,36.5,36.9,165],['ANAK B (4-6 TH)',1504.5,60.6,49.8,207.3],['ANAK C (7-9 TH)',1714.3,69.5,59.5,229],['ANAK D (10-12 TH)',2084.9,74.2,70.2,295.6],
['TETP S',2011.2,84.3,70.3,264.8],['TETP M',2281.2,88.8,70.9,324.5],['TETP L',2461.2,91.8,71.1,364.3],['TETP S NON SUSU',1895.2,79.5,64.7,252.1],['TETP M NON SUSU',2165.2,84,65.3,311.8],['TETP L NON SUSU',2345.2,87,65.5,351.6],['TETP S VIP',2310.2,98.5,86.6,287.5],['TETP M VIP',2580.2,103,87.2,347.2],['TETP L VIP',2760.2,106,87.4,387],
['NB 1',1529.2,67.5,57.6,191],['NB 2',1799.2,72,57.9,250.1],['DL I (TIM SARING)',1230,76.5,30.1,167.3],['DL II (BB KASAR)',1598.1,81.9,42.8,225.7],['DL III (NASI)',1865.9,88.2,44,283.5],
['DIET DM A 1100kkal',1100,50,30,160],['DIET DM A 1300kkal',1300,55,35,195],['DIET DM A 1500kkal',1500,60,40,225],['DIET DM A 1700kkal',1700,65,45,260],['DIET DM A 1900kkal',1900,70,50,300],['DIET DM A 2100kkal',2100,80,55,325],['DIET DM A 2300kkal',2300,85,65,350],['DIET DM A 2500kkal',2500,90,65,390],
['DIET DM B 1100kkal',1100,36.5,22.8,179.4],['DIET DM B 1300kkal',1300,41.7,28.6,217.9],['DIET DM B 1500kkal',1500,47.3,34.3,253.5],['DIET DM B 1700kkal',1700,49.8,36.3,300.6],['DIET DM B 1900kkal',1900,54,38.9,328.4],['DIET DM B 2100kkal',2100,65.5,45.9,377.5],['DIET DM B 2300kkal',2300,67.9,50.9,395.7],['DIET DM B 2500kkal',2500,75.1,57.3,425],['DIET DM B 2700kkal',2700,82.3,62.5,479.4],['DIET DM B 2900kkal',2900,92.3,67.7,511.3],
['DIET DM B1 1100kkal',1100,59.4,25.1,171.2],['DIET DM B1 1300kkal',1300,69.2,31.2,190.3],['DIET DM B1 1500kkal',1500,76.1,31.8,224.1],['DIET DM B1 1700kkal',1700,87.3,36,255.6],['DIET DM B1 1900kkal',1900,95.9,41,284.4],['DIET DM B1 2100kkal',2100,105.4,84.7,317.1],['DIET DM B1 2300kkal',2300,115.4,51.2,348],['DIET DM B1 2500kkal',2500,126.9,51.8,395.9],['DIET DM B1 2700kkal',2700,135.1,60.4,413.1],['DIET DM B1 2900kkal',2900,144.8,68.2,443.2],
['DIET HD 60',2002,62,67,290],['DIET HD 65',2039,67,68,293],['DIET HD 70',2127,72,72,301]
];
const ENTERAL_DEWASA=[
['Sonde A',103,4.2,3.3,15.2],['Sonde B',154,6.6,4.4,23.4],['Sonde C',206,8.4,6.6,30.4],['Sonde RL',95,5.4,1.1,15.7],['Sonde RP',94,1.8,5.2,5.2],['Sonde DM A',95,6.9,1.1,11.1],['Sonde DM B',154,10.8,2.2,22.2],['Sonde DND',94,1.8,5.2,5.2],['Soya Blendera',100.1,4,3.3,13.7],['Soya Proten',88.8,4,2.4,13.7],['Soya Mililea',110,5.5,3,15.5],['Peptamen',100,3,4,13],['Nutrican',99.4,5.6,2.5,13.6],['Diabetasol',95.8,3.8,2.6,14.9],['CPT BIASA',160,5.8,1.9,30.1],['CPT DM',73.3,7.3,0.2,10.1],['EKS JUS',108.3,0.7,0.1,27.7],['TS ENCER',282.7,10.97,9.43,7.5],['TS ENCER+PT',231,13,9,22.5],['Lactona skim',55,4.5,0,8.5],['Hepatosol',105.6,3.08,4.18,13.4],['Peptibren',109.2,5.72,2.86,14.82],['Nephrisol',130.5,2.6,4.6,19.4],['Nephrisol D',161.5,5.9,5.25,21.7],['Entramix',103.5,3.5,3.2,14.6],['Entrasol Platinum',96.5,4.6,2.7,10.3]
];
const ENTERAL_ANAK=[
['Lactogen 1',66.9,1.4,3.4,7.5],['Lactogen prematur & LBW',83,2.8,4.1,8.7],['Lactogen Lactose Free',67,1.4,3.4,7.8],['S26 Promil Gold tahap 1',65,1.3,3.6,7.4],['SGM BBLR',80,2.6,4.1,8.5],['SGM Gain',100,2.6,5.8,10],['Infatrini',100,2.7,5.5,10.1],['Nutribaby Pepti (Ekstensif Hidrolisat)',65,1.7,3.6,6.5],['Morinaga BMT PHP (Partial Hidrolisat)',64,1.6,3.1,7.6],['Neocate LCP',67,1.8,3.5,7.1],['Puramino',75,2.1,4,8],['Lactogen 2',73.9,1.85,3.3,9.2],['Nestle Lactogrow 3',86.5,2.7,3.2,11.3],['SGM LLM+ 0-12',66,1.4,3.2,8],['Neocate Junior',98.8,2.7,4.6,11.6],['SGM Ananda Isoprosoy',66,1.5,3.1,8],['Nutrinidrink',150,3.4,6.9,18.6],['SGM Optigrow',100,2.4,3.9,14],['Dancow',70.6,2.9,2.9,7.6],['ASI PERAH >14hr',65,1.2,3.7,7],['CPT BIASA',160,5.8,1.9,30.1],['CPT DM',73.3,7.3,0.2,10.1],['EKS JUS',108.3,0.7,0.1,27.7],['TS ENCER',848.1,32.9,28.28,22.5],['TS ENCER+PT',693,39,27,67.5]
];
const PN=[
['10% Dextran 40 in RL',0,0,0,0,306,0.13,0.004,'BM 40.000 = 100'],['6% Dextran 70 in NS',0,0,0,0,349,0.154,0,'BM 60.000 = 60'],['Aminofluid (500 ml & 1L)',0.4,0,0,0.1,930,0,0,''],['Aminofusin Hepar inf 500 ml',0.4,0.1,0,0.1,800,0,0,''],['Aminofusin L 600 (500 ml)',0.6,0.1,0,0.1,1100,0,0,''],['Aminofusin Ped inf 250 ml',0.2,0.1,0,0,600,0,0,''],['Aminoleban inf 500 ml',0.3,0.1,0,0,768,0,0,''],['Aminosteril 10%',0.4,0.1,0,0,1000,0,0,''],['Aminosteril 6%',0.2,0.1,0,0,600,0,0,''],['Amiparen 10% inf 500 ml',0.4,0.1,0,0,900,0,0,''],['Aminovel 600',0.4,0.1,0,0,1320,0,0,'500 ml'],['Amiparen',0,0.1,0,0,888,0,0,'500 ml'],['Asering',0,0,0,0,273,0.1,0,'500 ml'],['Asering⁵',0.2,0,0,0,550,0.1,0,'500 ml'],['B Fluid inf 500 ml & 1000 ml',0.4,0,0,0.1,0,0,0,''],['Clinimix N9G15E inf 1 L',0.4,0,0,0.1,845,0,0,''],['Clinimix N9G20E inf 1 L',0.5,0,0,0.1,980,0,0,''],['Clinoleic inf 20% 250 ml',2,0,0.2,0,270,0,0,''],['Comafusin Hepar inf 500 ml',0.4,0.1,0,0.1,800,0,0,''],['Clinimix 17G35',1.4,0.1,0,0,1479,0.1,0.1,''],['Clinimix N17G35E',1.4,0.1,0,0,1625,0.1,0.1,''],['Dextrose 10% 500 ml',0.4,0,0,0.1,505,0,0,''],['Dextrose 40% 25 ml',1.6,0,0,0.4,2020,0,0,''],['Dextrose 5% 500 ml',0.2,0,0,0.1,252,0,0,''],['D10',0.4,0,0,0.1,555,0,0,'500 ml'],['D10 1/5 NS',0.4,0,0,0.1,615,0,0,'500 ml'],['D10NS',0.4,0,0,0.1,855,0.2,0,'500 ml'],['D2.5 1/2 NS',0.1,0,0,0,289,0.1,0,'500 ml'],['D4 1/5 NS',0.2,0,0,0,282,0,0,'500 ml'],['D40',1.6,0,0,0.4,2018,0,0,'25 ml'],['D5',0.2,0,0,0.1,253,0,0,'500 ml'],['D5 1/2 NS',0.2,0,0,0.1,428,0.1,0,'500 ml'],['D5 1/4 NS',0.2,0,0,0.1,353,0,0,'500 ml'],['D5NS',0.2,0,0,0.1,578,0.2,0,'500 ml'],['EAS PFRimmer',0.1,0,0,0,700,0,0,'Ginjal'],['Intrafusin 10%',0,0.1,0,0,810,0,0,''],['Intrafusin 3.5% SXE',0.2,0,0,0,790,0.1,0,''],['Intralyt',0.1,0,0,0,305,0.1,0,''],['KAEN 1B',0.2,0,0,0,285,0.4,0,''],['KAEN 3A',0.1,0,0,0,290,0.1,0,''],['KAEN 3B',0.1,0,0,0,290,0.1,0,''],['KAEN 4A Ped',0.2,0,0,0,284,0,0,''],['KAEN 4B Ped',0.2,0,0,0,284,0,0,''],['KAEN Mg3',0.4,0,0,0,728,0.1,0,'500/1000 ml'],['KCL',0,0,0,0,2000,0,1,'25 ml'],['Kabiven inf 1440 ml',0.7,0,0,0.1,850,0,0,''],['Kalbamin inf 10% 500 ml',0.4,0.1,0,0,800,0,0,''],['Kidmin',0.6,0.072,0,0,0,0,0,'500 ml'],['Renxamin inf 9% 200 ml',0.4,0.1,0,0,860,0,0,''],['Smofkabiven Peri inf 1206 ml',0.7,0,0,0.1,850,0,0,''],['Triofusin 1000',1,0,0,0,1400,0,0,''],['Triofusin 1600',1.6,0,0,0,2500,0,0,''],['Triofusin 500',0.5,0,0,0,700,0,0,''],['Triofusin E1000',1,0,0,0,1600,0.1,0,''],['Triparen 1',0.9,0,0,0,1660,0,0,'500–1000 ml'],['Triparen 2',1.2,0,0,0,1946,0.1,0,''],['Tutofusin CH Forte',0.2,0.1,0,0,600,0,0,''],['Tutofusin LC',0.2,0,0,0,420,0,0,'Vit'],['Tutofusin Ops',0.2,0.1,0,0,500,0,0,'']
];
const RECALL=[
['Makanan Pokok',175,4,0,40],
['Lemak Rendah',50,7,2,0],
['Lemak Sedang',75,7,5,0],
['Lemak Tinggi',150,7,13,0],
['Sayur golongan B',25,1,0,5],
['Sayur golongan C',50,3,0,10],
['Lauk Nabati',75,5,3,7],
['Buah',50,0,0,12],
['Gula',50,0,0,12],
['Minyak',50,0,5,0],
['Susu Non fat',75,7,0,10],
['Susu Low Fat',125,7,6,10],
['Susu High Fat',150,7,10,10],
['Bubur Kacang Ijo',139.4,3.5,2.1,27.6],
['Snack',140,3.5,2.1,28]
];
let need={e:0,p:0,l:0,k:0,source:'Belum dipilih'};
let total={oral:{e:0,p:0,l:0,k:0},recall:{e:0,p:0,l:0,k:0},entD:{e:0,p:0,l:0,k:0},entA:{e:0,p:0,l:0,k:0},pn:{e:0,p:0,l:0,k:0}};
let ndStore={}, dkStore={}, dmStore={};
function opts(data){return data.map((r,i)=>`<option value="${i}">${r[0]}</option>`).join('')}
function fill(){document.querySelectorAll('.af').forEach(s=>s.innerHTML=AF.map(x=>`<option value="${x[0]}">${x[1]}</option>`).join(''));document.querySelectorAll('.sf').forEach(s=>s.innerHTML=SF.map(x=>`<option value="${x[0]}">${x[1]}</option>`).join(''));$('oralSelect').innerHTML=opts(ORAL);$('entDSelect').innerHTML=opts(ENTERAL_DEWASA);$('entASelect').innerHTML=opts(ENTERAL_ANAK);$('pnSelect').innerHTML=opts(PN);$('recallRows').innerHTML=[0,1,2,3].map(i=>`<tr><td><select id="recallSelect${i}">${opts(RECALL)}</select></td><td><input id="recallJumlah${i}" type="number" step="0.1" value="0"></td><td id="recallE${i}">0,0</td><td id="recallP${i}">0,0</td><td id="recallL${i}">0,0</td><td id="recallK${i}">0,0</td></tr>`).join('');$('insulinRows').innerHTML=['Pagi','Snack Pagi','Siang','Snack Sore','Malam'].map((w,i)=>`<tr><td>${w}</td><td><input id="insKh${i}" type="number" step="0.1" value="0"></td><td><input id="insRasio${i}" type="number" step="0.1" value="15"></td><td id="insUnit${i}">0,0</td></tr>`).join('');}
function dateParse(s){if(!s)return null;const [d,m,y]=s.split(/[\/\-]/).map(Number);return d&&m&&y?new Date(y,m-1,d):null}
function diff(a,b=new Date()){if(!a||isNaN(a))return null;let y=b.getFullYear()-a.getFullYear(),m=b.getMonth()-a.getMonth(),d=b.getDate()-a.getDate();if(d<0){m--;d+=new Date(b.getFullYear(),b.getMonth(),0).getDate()}if(m<0){y--;m+=12}return{y,m,d,months:y*12+m,days:Math.max(0,Math.floor((b-a)/86400000))}}
function usiaText(x){return x?`${x.y} th ${x.m} bln ${x.d} hr`:'-'}
function brocca(jk,tb){if(!tb)return 0;const base=tb-100;return base*0.9}
function mifflin(jk,bb,tb,u){return jk==='Laki-laki'?10*bb+6.25*tb-5*u+5:10*bb+6.25*tb-5*u-161}
function harris(jk,bb,tb,u){return jk==='Laki-laki'?66.5+13.75*bb+5.003*tb-6.755*u:655.1+9.563*bb+1.85*tb-4.676*u}
function macro(tee,pGram,lPct){const l=tee*lPct/100/9,k=(tee-pGram*4-l*9)/4;return{e:tee,p:pGram,l,k}}

const LILA_DEWASA_STANDAR=[
  [15,15.9,26.4,25.4],[16,16.9,27.8,25.8],[17,17.9,28.5,26.4],
  [18,18.9,29.7,25.8],[19,24.9,30.8,26.5],[25,34.9,31.9,27.7],
  [35,44.9,32.6,29.0],[45,54.9,32.2,29.9],[55,64.9,31.7,30.3],
  [65,74.9,30.7,29.9]
];
function interpretImtDewasa(imt){
  if(!imt)return '-';
  if(imt<18.5)return 'Kurus (Kekurangan berat badan)';
  if(imt<=25.0)return 'Normal (Ideal)';
  if(imt<=27.0)return 'Kelebihan berat badan (Overweight)';
  return 'Gemuk (Obesitas)';
}
function medianLilaDewasa(jk,usia){
  const r=LILA_DEWASA_STANDAR.find(x=>usia>=x[0]&&usia<=x[1]);
  if(!r)return 0;
  return jk==='Laki-laki'?r[2]:r[3];
}
function interpretLilaPct(pct){
  if(!pct)return '-';
  if(pct>=90)return 'Baik / normal';
  if(pct>=85)return 'Gizi kurang ringan';
  if(pct>=80)return 'Gizi kurang sedang';
  return 'Gizi kurang berat';
}
function row(a,b,c=''){return `<tr><td>${a}</td><td><b>${b}</b></td><td>${c}</td></tr>`}
function hitungAntro(){const jk=$('jk').value,u=num('usia'),l=num('lila'),ul=num('ulna'),bb=num('bb'),tb=num('tb'),bbs=num('bbSebelum'),bet=num('betis'),tl=num('tl'),imtT=num('imtTarget');const imt=tb?bb/((tb/100)**2):0,bbi=brocca(jk,tb),adj=imt>=25?bbi+0.25*(bb-bbi):bb,pct=bbs?((bbs-bb)/bbs*100):0,medLila=medianLilaDewasa(jk,u),pctLila=medLila&&l?l/medLila*100:0; $('antroRows').innerHTML=[row('IMT',satu(imt),'kg/m²'),row('Status gizi berdasarkan IMT',interpretImtDewasa(imt),''),row('% LILA/U',pctLila?satu(pctLila):'0,0','%'),row('BBI Brocca Modifikasi Asia',satu(bbi),'kg'),row('BBI dari IMT',satu(imtT*((tb/100)**2)),'kg'),row('BB Adjusted',satu(adj),'kg'),row('% perubahan BB',satu(pct),'%'),row('BB estimasi dari LILA Paravista',satu(l?l*2.5-5:0),'kg'),row('BB estimasi dari LILA Cerra',satu(l?l*2.2+7:0),'kg'),row('TB estimasi dari Ulna Ilayperuma',satu(ul?(jk==='Laki-laki'?97.252+2.645*ul:68.777+3.536*ul):0),'cm'),row('TB estimasi dari Ulna BAPEN',satu(ul?(jk==='Laki-laki'?79.2+3.7*ul:60.6+3.7*ul):0),'cm'),row('BB estimasi dari lingkar betis',satu(bet?bet*1.5+20:0),'kg'),row('TB estimasi dari TL Chumlea',satu(tl?(jk==='Laki-laki'?2.02*tl-0.04*u+64.19:1.83*tl-0.24*u+84.88):0),'cm')].join('')}
function hitungAnak(){const a=diff(dateParse($('anakTgl').value));$('anakUsia').value=usiaText(a);const months=a?a.months:0,years=a?a.y:0;function r(n,rg,v){return `<tr><td>${n}</td><td>${rg}</td><td>${v?satu(v):'di luar rentang'}</td></tr>`}$('anakRuleRows').innerHTML=[r('Berat Badan','0–12 bulan',months<=12?months/2+4:0),r('Berat Badan','1–6 tahun',years>=1&&years<=6?years*2+8:0),r('Berat Badan','7–12 tahun',years>=7&&years<=12?years*3+7:0),r('Tinggi Badan','0–2 tahun',months<=24?months*2.5+50:0),r('Tinggi Badan','2–12 tahun',years>=2&&years<=12?years*6+77:0),r('Lingkar Kepala','0–12 bulan',months<=12?35+months:0),r('Lingkar Kepala','>1 tahun',years>=1?46+years*0.5:0)].join('');const ml=num('muacLila'),med=num('muacBulan')?14.5+(num('muacBulan')-6)*.035:num('muacTahun')?15.5+(num('muacTahun')-5)*.35:0,pct=med&&ml?ml/med*100:0;$('muacHasil').value=pct?`${satu(pct)}%`:'';const pma=diff(dateParse($('pmaTgl').value));$('pmaKrono').value=usiaText(pma);if(pma){const start=new Date(dateParse($('pmaTgl').value).getTime()+Math.max(0,40-num('pmaGa'))*7*86400000),c=diff(start);$('pmaKoreksi').value=usiaText(c);$('pmaSimpulan').textContent=`Simpulan: Gunakan grafik usia ${Math.max(0,Math.round(c.days/30))} bulan untuk penilaian pertumbuhan`;}}
function hitungNeed(){const dkE=num('dkBb')*num('dkEnergi')*num('dkAf')*num('dkSf')*num('dkKor'),dkP=num('dkBb')*num('dkProteinKg');dkStore=macro(dkE,dkP,num('dkLemakPct'));$('dkE').textContent=satu(dkStore.e);$('dkP').textContent=satu(dkStore.p);$('dkL').textContent=satu(dkStore.l);$('dkK').textContent=satu(dkStore.k);const jk=$('ndJk').value,u=num('ndUsia'),bb=num('ndBb'),tb=num('ndTb'),bbi=brocca(jk,tb);$('ndBbi').value=satu(bbi);const methods=[['mif','Mifflin-St Jeor',mifflin(jk,bb,tb,u)],['hb','Harris-Benedict',harris(jk,bb,tb,u)],['fast','Rumus Cepat',bbi*num('fastKkal')]];$('ndRows').innerHTML=methods.map(([id,name,bmr])=>{const tee=bmr*num('ndAf')*num('ndSf'),p=tee*num('ndProtPct')/100/4,l=tee*num('ndLemakPct')/100/9,k=(tee-p*4-l*9)/4;ndStore[id]={e:tee,p,l,k};return `<tr><td>${name}</td><td>${satu(bmr)}</td><td>${satu(tee)}</td><td>${satu(p)}</td><td>${satu(l)}</td><td>${satu(k)}</td><td><button onclick="useNeed('nd:${id}')">Gunakan</button></td></tr>`}).join('');hitungAnakNeeds();hitungDm();}
function hitungAnakNeeds(){const bb=num('schBb'),tbm=num('schTb'),jk=$('schJk').value,kat=$('schKat').value;let e=0;if(tbm){if(jk==='Laki-laki')e=kat==='lt3'?0.167*bb+1517.4*tbm-617.6:kat==='3to10'?19.59*bb+130.3*tbm+414.9:16.25*bb+137.2*tbm+515.5;else e=kat==='lt3'?16.252*bb+1023.2*tbm-413.5:kat==='3to10'?16.969*bb+161.8*tbm+371.2:8.365*bb+465*tbm+200;}else{if(jk==='Laki-laki')e=kat==='lt3'?59.512*bb-30.4:kat==='3to10'?22.706*bb+504.3:17.686*bb+658.2;else e=kat==='lt3'?58.317*bb-31.1:kat==='3to10'?20.315*bb+485.9:13.384*bb+692.6;}$('schRows').innerHTML=`<tr><td>${satu(e)}</td><td>${satu(bb*num('schProtKg'))}</td></tr>`;$('rdaRows').innerHTML=`<tr><td>${satu(num('rdaBb')*num('rdaUsia'))}</td><td>${satu(num('rdaBb')*num('rdaProtKg'))}</td></tr>`;const [lo,hi]=$('ventKat').value.split(',').map(Number);$('ventRows').innerHTML=`<tr><td>${satu(num('ventBb')*lo)}–${satu(num('ventBb')*hi)}</td><td>${satu(num('ventBb')*num('ventProtKg'))}</td></tr>`}
function hitungDm(){const base=num('dmBb')*($('dmJk').value==='Laki-laki'?30:25),pct=num('dmUsia')+num('dmAkt')+num('dmDemam')+num('dmBbKor'),e=base*(1+pct/100),p=num('dmBb')*num('dmProtKg');dmStore=macro(e,p,num('dmLemakPct'));$('dmE').textContent=satu(dmStore.e);$('dmP').textContent=satu(dmStore.p);$('dmL').textContent=satu(dmStore.l);$('dmK').textContent=satu(dmStore.k);let tkh=0,tu=0;for(let i=0;i<5;i++){const kh=num('insKh'+i),ras=num('insRasio'+i),u=ras?kh/ras:0;tkh+=kh;tu+=u;$('insUnit'+i).textContent=satu(u)}$('insKhTotal').textContent=satu(tkh);$('insUnitTotal').textContent=satu(tu)}
window.useNeed=function(src){if(src==='dk')need={...dkStore,source:'Dewasa Diet Khusus'};else if(src==='dm')need={...dmStore,source:'Diabetes PERKENI'};else{const id=src.split(':')[1];need={...ndStore[id],source:id==='mif'?'Mifflin-St Jeor':id==='hb'?'Harris-Benedict':'Rumus Cepat'}};hitungMonitoring()}
function calcPick(list,selId,qId,outIds,per100=false){const r=list[parseInt($(selId).value||0)],q=num(qId),f=per100?q/100:q;const o={e:f*r[1],p:f*r[2],l:f*r[3],k:f*r[4]};$(outIds[0]).textContent=satu(o.e);$(outIds[1]).textContent=satu(o.p);$(outIds[2]).textContent=satu(o.l);$(outIds[3]).textContent=satu(o.k);return o}
function hitungAsupan(){total.entD=calcPick(ENTERAL_DEWASA,'entDSelect','entDVol',['entDE','entDP','entDL','entDK'],true);total.entA=calcPick(ENTERAL_ANAK,'entASelect','entAVol',['entAE','entAP','entAL','entAK'],true);total.oral=calcPick(ORAL,'oralSelect','oralJumlah',['oralE','oralP','oralL','oralK']);let rt={e:0,p:0,l:0,k:0,porsi:0};for(let i=0;i<4;i++){const r=RECALL[parseInt($(`recallSelect${i}`).value||0)],q=num(`recallJumlah${i}`),o={e:q*r[1],p:q*r[2],l:q*r[3],k:q*r[4]};rt.e+=o.e;rt.p+=o.p;rt.l+=o.l;rt.k+=o.k;rt.porsi+=q;$(`recallE${i}`).textContent=satu(o.e);$(`recallP${i}`).textContent=satu(o.p);$(`recallL${i}`).textContent=satu(o.l);$(`recallK${i}`).textContent=satu(o.k);}total.recall={e:rt.e,p:rt.p,l:rt.l,k:rt.k};$('recallPorsi').textContent=satu(rt.porsi);$('recallE').textContent=satu(rt.e);$('recallP').textContent=satu(rt.p);$('recallL').textContent=satu(rt.l);$('recallK').textContent=satu(rt.k);const pn=PN[parseInt($('pnSelect').value||0)],v=num('pnVol');total.pn={e:v*pn[1],p:v*pn[2],l:v*pn[3],k:v*pn[4]};$('pnE').textContent=satu(total.pn.e);$('pnP').textContent=satu(total.pn.p);$('pnL').textContent=satu(total.pn.l);$('pnK').textContent=satu(total.pn.k);$('pnOsm').textContent=satu(pn[5]);$('pnNa').textContent=satu(v*pn[6]);$('pnKalium').textContent=satu(v*pn[7]);$('pnSed').textContent=pn[8]||'-';}
function holiday(bb){if(!bb)return 0;if(bb<=10)return bb*100;if(bb<=20)return 1000+(bb-10)*50;return 1500+(bb-20)*20}
function hitungCairan(){$('holTotal').value=satu(holiday(num('holBb')));$('khTotal').value=satu(num('khBb')*num('khMl')+num('khTambah'));$('ckdTotal').value=satu(num('ckdUrine')+500);$('iwlTotal').value=satu(num('iwlBb')*12*(1+Math.max(0,num('iwlSuhu')-37)*0.1));$('bsaTotal').value=satu(Math.sqrt(num('bsaBb')*num('bsaTb')/3600)*800*(1+Math.max(0,num('bsaSuhu')-37)*0.1));$('tpmTotal').value=satu(num('tpm')*1440/num('tetes'));$('girHasil').value=satu(num('girBb')?num('girDex')*10*num('girLaju')/(num('girBb')*60):0)}
function hitungMonitoring(){const enteral={e:total.entD.e+total.entA.e,p:total.entD.p+total.entA.p,l:total.entD.l+total.entA.l,k:total.entD.k+total.entA.k},oral={e:total.oral.e+total.recall.e,p:total.oral.p+total.recall.p,l:total.oral.l+total.recall.l,k:total.oral.k+total.recall.k},all={e:enteral.e+oral.e+total.pn.e,p:enteral.p+oral.p+total.pn.p,l:enteral.l+oral.l+total.pn.l,k:enteral.k+oral.k+total.pn.k},pct={e:need.e?all.e/need.e*100:0,p:need.p?all.p/need.p*100:0,l:need.l?all.l/need.l*100:0,k:need.k?all.k/need.k*100:0};const tr=(nm,o)=>`<tr><td>${nm}</td><td>${satu(o.e)}</td><td>${satu(o.p)}</td><td>${satu(o.l)}</td><td>${satu(o.k)}</td></tr>`;$('monitorRows').innerHTML=[tr('Pemenuhan Diet Parenteral',total.pn),tr('Pemenuhan Diet Oral',oral),tr('Pemenuhan Diet Enteral',enteral),tr('<b>Total Pemenuhan</b>',all),tr(`<b>Total Kebutuhan Pasien</b><br><small>${need.source}</small>`,need),tr('<b>% Pemenuhan</b>',pct)].join('')}
function hitung(){hitungAntro();hitungAnak();hitungNeed();hitungAsupan();hitungCairan();hitungMonitoring()}
fill();document.querySelectorAll('input,select').forEach(el=>el.addEventListener('input',hitung));hitung();


// Tab navigation
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    const panel=document.getElementById('tab-'+btn.dataset.tab);
    if(panel) panel.classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  });
});
