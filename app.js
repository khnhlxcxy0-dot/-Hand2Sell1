const products = [
  {id:1,name:'กระเป๋าสะพาย Coach รุ่น Tabby',category:'กระเป๋า',price:2850,condition:'สภาพดีมาก',tag:'ชิ้นยอดนิยม',seller:'Sunday Finds',image:'photo-1584917865442-de89df76afd3',description:'กระเป๋า Coach รุ่น Tabby สีครีม สภาพสวย ดูแลดี ซับในสะอาด มาพร้อมสายสะพายและถุงผ้า เหมาะกับทุกวันและทุกโอกาส'},
  {id:2,name:'กล้องฟิล์ม Olympus mju II',category:'อิเล็กทรอนิกส์',price:4200,condition:'สภาพดี',tag:'หายาก',seller:'Film Days',image:'photo-1516035069371-29a1b244cc32',description:'กล้องฟิล์มคอมแพกต์เลนส์คม ทดลองใช้งานแล้ว แฟลชทำงานปกติ ภาพสวยโทนอุ่น พร้อมสายคล้องกล้อง'},
  {id:3,name:'โคมไฟตั้งโต๊ะ Mid-century',category:'ของแต่งบ้าน',price:1650,condition:'สภาพดีมาก',tag:'คัดพิเศษ',seller:'บ้านวินเทจ',image:'photo-1507473885765-e6ed057f782c',description:'โคมไฟตั้งโต๊ะดีไซน์วินเทจ แสงอบอุ่นเข้ากับห้องได้หลายสไตล์ โครงสร้างแข็งแรง ใช้งานได้ปกติ'},
  {id:4,name:'เสื้อเชิ้ตลินิน Uniqlo สีธรรมชาติ',category:'เสื้อผ้า',price:390,condition:'สภาพดี',tag:'ใส่สบาย',seller:'closet.day',image:'photo-1598033129183-c4f50c736f10',description:'เสื้อเชิ้ตลินินแท้ สีธรรมชาติ ไซซ์ M ทรงสวยใส่สบาย ผ่านการซักและรีดเรียบร้อย'},
  {id:5,name:'เก้าอี้ไม้สักดีไซน์ญี่ปุ่น',category:'ของแต่งบ้าน',price:3200,condition:'สภาพดี',tag:'วินเทจ',seller:'บ้านวินเทจ',image:'photo-1503602642458-232111445657',description:'เก้าอี้ไม้สักแท้ทรงเรียบสไตล์ญี่ปุ่น โครงสร้างแน่น มีร่องรอยการใช้งานเล็กน้อยตามอายุงาน'},
  {id:6,name:'หูฟัง Sony WH-1000XM4',category:'อิเล็กทรอนิกส์',price:5900,condition:'สภาพดีมาก',tag:'ลดราคา',seller:'tech.again',image:'photo-1505740420928-5e560c06d30e',description:'หูฟังตัดเสียงรบกวน Sony ใช้งานได้เต็มระบบ แบตเตอรี่ยังอึดมาก มีสายและเคสเก็บหูฟังให้ครบ'},
  {id:7,name:'กระเป๋าหนังสะพายข้างวินเทจ',category:'กระเป๋า',price:1250,condition:'สภาพดี',tag:'วินเทจ',seller:'Sunday Finds',image:'photo-1548036328-c9fa89d128fa',description:'กระเป๋าหนังวินเทจสีแทน ขนาดกะทัดรัด ใส่ของจำเป็นได้ครบ สายปรับระดับได้ หนังมีความนุ่มสวย'},
  {id:8,name:'รองเท้าผ้าใบ New Balance 327',category:'เสื้อผ้า',price:1890,condition:'สภาพดีมาก',tag:'ใส่น้อย',seller:'closet.day',image:'photo-1542291026-7eec264c27ff',description:'รองเท้า New Balance รุ่น 327 ไซซ์ 38 ใส่ไม่กี่ครั้ง พื้นยังเต็ม ไม่มีตำหนิหนัก ทำความสะอาดพร้อมส่ง'},
  {id:9,name:'แจกันเซรามิกทำมือ',category:'ของแต่งบ้าน',price:680,condition:'สภาพดี',tag:'แฮนด์เมด',seller:'บ้านวินเทจ',image:'photo-1578500494198-246f612d3b3d',description:'แจกันเซรามิกทำมือผิวสัมผัสสวย เป็นงานชิ้นเดียว ไม่มีรอยร้าว ใช้ตกแต่งบ้านหรือใส่ดอกไม้ได้'},
  {id:10,name:'กล้อง Instax Mini 90',category:'อิเล็กทรอนิกส์',price:2350,condition:'สภาพดี',tag:'ชิ้นยอดนิยม',seller:'Film Days',image:'photo-1452780212940-6f5c0d14d848',description:'กล้อง Instax Mini 90 ฟังก์ชันครบ ทดลองถ่ายแล้ว แบตเตอรี่พร้อมใช้งาน มาพร้อมสายคล้องและกระเป๋า'},
  {id:11,name:'เสื้อแจ็กเก็ตยีนส์ Levi’s',category:'เสื้อผ้า',price:1450,condition:'สภาพดีมาก',tag:'วินเทจ',seller:'closet.day',image:'photo-1543076447-215ad9ba6923',description:'แจ็กเก็ตยีนส์ Levi’s ทรงคลาสสิก ไซซ์ S สีเฟดสวยตามธรรมชาติ เนื้อผ้าหนาแต่ใส่สบาย'},
  {id:12,name:'โคมไฟแก้วทรงเห็ด',category:'ของแต่งบ้าน',price:990,condition:'สภาพดี',tag:'ดีไซน์สวย',seller:'บ้านวินเทจ',image:'photo-1507473885765-e6ed057f782c',description:'โคมไฟแก้วทรงเห็ดสไตล์มินิมอล เปิดแล้วให้แสงนุ่มสบายตา ใช้งานปกติ เหมาะกับโต๊ะข้างเตียง'}
];
const categoryData = [
  {name:'เสื้อผ้า',english:'CLOTHING',image:'photo-1483985988355-763728e1935b'},
  {name:'กระเป๋า',english:'BAGS & ACCESSORIES',image:'photo-1548036328-c9fa89d128fa'},
  {name:'อิเล็กทรอนิกส์',english:'ELECTRONICS',image:'photo-1516035069371-29a1b244cc32'},
  {name:'ของแต่งบ้าน',english:'HOME & LIVING',image:'photo-1616486338812-3dadae4b4ace'},
  {name:'อื่น ๆ',english:'MORE TO EXPLORE',image:'photo-1490312278390-ab64016e0aa9'}
];
const photo = (id, width=640) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
const money = value => `฿${value.toLocaleString('th-TH')}`;
let activeCategory = 'ทั้งหมด';
let searchTerm = '';
let showingAll = false;
let favorites = new Set();
const grid = document.getElementById('productGrid');
const chips = document.getElementById('filterChips');
const categoryList = document.getElementById('categoryList');
const toast = document.getElementById('toast');
const categories = ['ทั้งหมด', ...categoryData.slice(0,4).map(item=>item.name)];

function renderCategories(){
  categoryList.innerHTML = categoryData.map(item=>`<button class="category-card" data-category="${item.name}" aria-label="ดูหมวดหมู่${item.name}"><img src="${photo(item.image,420)}" alt="" loading="lazy"><span>${item.name}<small>${item.english}</small></span></button>`).join('');
  categoryList.querySelectorAll('.category-card').forEach(button=>button.addEventListener('click',()=>setCategory(button.dataset.category==='อื่น ๆ'?'ทั้งหมด':button.dataset.category)));
  chips.innerHTML = categories.map(name=>`<button class="filter-chip${name===activeCategory?' active':''}" data-category="${name}">${name}</button>`).join('');
  chips.querySelectorAll('.filter-chip').forEach(button=>button.addEventListener('click',()=>setCategory(button.dataset.category)));
}
function setCategory(name){activeCategory=name;showingAll=false;renderCategories();renderProducts();document.getElementById('products').scrollIntoView({behavior:'smooth',block:'start'});}
function filteredProducts(){return products.filter(product=>(activeCategory==='ทั้งหมด'||product.category===activeCategory)&&(!searchTerm||`${product.name} ${product.category} ${product.tag} ${product.seller}`.toLowerCase().includes(searchTerm.toLowerCase())));}
function renderProducts(){
  const found=filteredProducts();
  document.getElementById('resultCount').textContent=`${found.length} รายการ`;
  document.getElementById('emptyState').hidden=found.length!==0;
  document.getElementById('loadMore').parentElement.hidden=found.length===0||showingAll||found.length<=8;
  grid.innerHTML=found.slice(0,showingAll?found.length:8).map((product,index)=>`<article class="product-card" style="animation-delay:${Math.min(index,7)*55}ms"><div class="product-image"><img src="${photo(product.image)}" alt="${product.name}" loading="lazy"><span class="product-badge">${product.tag}</span><button class="favorite-button${favorites.has(product.id)?' is-favorite':''}" data-favorite="${product.id}" aria-label="${favorites.has(product.id)?'นำออกจาก':'เพิ่มใน'}รายการโปรด">${favorites.has(product.id)?'♥':'♡'}</button><button class="quick-view" data-details="${product.id}">ดูรายละเอียดสินค้า　↗</button></div><div class="product-info"><div class="product-meta"><span>${product.category.toUpperCase()}</span><span>${product.seller}</span></div><h3 class="product-name">${product.name}</h3><div class="price-row"><span class="price">${money(product.price)}</span><span class="condition">${product.condition}</span></div></div></article>`).join('');
  grid.querySelectorAll('[data-details]').forEach(button=>button.addEventListener('click',()=>openDetails(Number(button.dataset.details))));
  grid.querySelectorAll('[data-favorite]').forEach(button=>button.addEventListener('click',()=>toggleFavorite(Number(button.dataset.favorite))));
}
function openDetails(id){
  const product=products.find(item=>item.id===id);if(!product)return;
  document.getElementById('dialogContent').innerHTML=`<div class="dialog-layout"><img src="${photo(product.image,900)}" alt="${product.name}"><div class="dialog-copy"><p class="eyebrow">${product.category.toUpperCase()}　·　${product.seller}</p><h2>${product.name}</h2><p class="dialog-price">${money(product.price)}</p><p>${product.description}</p><span class="condition">${product.condition}</span><button class="dialog-contact" id="contactSeller">สนใจสินค้านี้　↗</button></div></div>`;
  document.getElementById('contactSeller').addEventListener('click',()=>{document.getElementById('productDialog').close();showToast('ฟีเจอร์ติดต่อผู้ขายจะเปิดให้ใช้งานเร็ว ๆ นี้')});
  document.getElementById('productDialog').showModal();
}
function toggleFavorite(id){if(favorites.has(id)){favorites.delete(id);showToast('นำสินค้าออกจากรายการโปรดแล้ว')}else{favorites.add(id);showToast('เพิ่มสินค้าในรายการโปรดแล้ว')}renderProducts();}
let toastTimer;function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2300)}
document.getElementById('searchInput').addEventListener('input',event=>{searchTerm=event.target.value.trim();showingAll=false;renderProducts()});
document.getElementById('loadMore').addEventListener('click',()=>{showingAll=true;renderProducts()});
document.getElementById('clearFilters').addEventListener('click',()=>{searchTerm='';activeCategory='ทั้งหมด';document.getElementById('searchInput').value='';showingAll=false;renderCategories();renderProducts()});
document.getElementById('dialogClose').addEventListener('click',()=>document.getElementById('productDialog').close());
document.getElementById('productDialog').addEventListener('click',event=>{if(event.target===event.currentTarget)event.currentTarget.close()});
document.getElementById('sellButton').addEventListener('click',()=>showToast('ฟีเจอร์ลงขายสินค้าจะเปิดให้ใช้งานเร็ว ๆ นี้'));
document.querySelector('.favorite-top').addEventListener('click',()=>{const saved=[...favorites];if(!saved.length){showToast('ยังไม่มีสินค้าในรายการโปรด');return}activeCategory='ทั้งหมด';searchTerm='';document.getElementById('searchInput').value='';renderCategories();grid.innerHTML='';document.getElementById('resultCount').textContent=`${saved.length} รายการโปรด`;document.getElementById('emptyState').hidden=true;document.getElementById('loadMore').parentElement.hidden=true;grid.innerHTML=saved.map(id=>products.find(p=>p.id===id)).filter(Boolean).map(product=>`<article class="product-card"><div class="product-image"><img src="${photo(product.image)}" alt="${product.name}" loading="lazy"><span class="product-badge">${product.tag}</span><button class="favorite-button is-favorite" data-favorite="${product.id}" aria-label="นำออกจากรายการโปรด">♥</button><button class="quick-view" data-details="${product.id}">ดูรายละเอียดสินค้า　↗</button></div><div class="product-info"><div class="product-meta"><span>${product.category.toUpperCase()}</span><span>${product.seller}</span></div><h3 class="product-name">${product.name}</h3><div class="price-row"><span class="price">${money(product.price)}</span><span class="condition">${product.condition}</span></div></div></article>`).join('');grid.querySelectorAll('[data-details]').forEach(b=>b.addEventListener('click',()=>openDetails(Number(b.dataset.details))));grid.querySelectorAll('[data-favorite]').forEach(b=>b.addEventListener('click',()=>toggleFavorite(Number(b.dataset.favorite))));document.getElementById('products').scrollIntoView({behavior:'smooth'})});
document.addEventListener('keydown',event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();document.getElementById('searchInput').focus()}});
renderCategories();renderProducts();
