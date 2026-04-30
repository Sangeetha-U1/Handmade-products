/* =========================================
   MITTI & MANN - Main JavaScript
   ========================================= */

// ─── PRODUCT DATA ────────────────────────────────────────────────
const products = [
  { id: 1, name: "Handcrafted Clay Pot", category: "Pottery", price: 1200, oldPrice: 1500, rating: 4.8, reviews: 124, image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&q=80", description: "Each pot is lovingly shaped by hand on a spinning wheel, fired in a traditional kiln using age-old techniques passed down through generations.", badge: "Bestseller", badgeColor: "" },
  { id: 2, name: "Boho Macrame Wall Hanging", category: "Home Decor", price: 2800, oldPrice: 3500, rating: 4.9, reviews: 89, image: "https://plus.unsplash.com/premium_photo-1661414428094-706fa73724b4?auto=format&fit=crop&w=800&q=80", description: "Hand-knotted with 100% natural cotton rope, this bohemian wall hanging brings warmth and texture to any living space.", badge: "New", badgeColor: "green" },
  { id: 3, name: "Wooden Carved Jewelry Box", category: "Wooden Crafts", price: 3200, oldPrice: null, rating: 4.7, reviews: 56, image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&q=80", description: "Intricately hand-carved from premium sheesham wood, featuring traditional floral motifs and a velvet-lined interior.", badge: null },
  { id: 4, name: "Handwoven Cotton Scarf", category: "Textiles", price: 950, oldPrice: 1200, rating: 4.6, reviews: 203, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&q=80", description: "Woven on traditional handlooms in Rajasthan, this lightweight cotton scarf features beautiful block-print patterns.", badge: "Sale", badgeColor: "" },
  { id: 5, name: "Terracotta Candle Holder", category: "Pottery", price: 680, oldPrice: null, rating: 4.5, reviews: 178, image: "https://images.unsplash.com/photo-1559662780-67ca3ad9a755?w=500&q=80", description: "Hand-molded terracotta holder with carved cutout patterns that cast beautiful shadows when lit.", badge: null },
  { id: 6, name: "Silver Filigree Earrings", category: "Handmade Jewelry", price: 1850, oldPrice: 2200, rating: 4.9, reviews: 312, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80", description: "Delicate sterling silver filigree earrings handcrafted by skilled artisans using ancient wirework traditions.", badge: "Popular" },
  { id: 7, name: "Indigo Block Print Cushion", category: "Textiles", price: 1100, oldPrice: null, rating: 4.4, reviews: 67, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80", description: "Hand block-printed with natural indigo dye on organic cotton, each cushion cover is a unique piece of wearable art.", badge: null },
  { id: 8, name: "Bamboo Wind Chimes", category: "Home Decor", price: 750, oldPrice: 950, rating: 4.3, reviews: 91, image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&q=80", description: "Hand-crafted from sustainably harvested bamboo, these wind chimes produce a gentle, melodic sound.", badge: "Eco" , badgeColor: "green" },
  { id: 9, name: "Painted Madhubani Coasters", category: "Home Decor", price: 580, oldPrice: null, rating: 4.7, reviews: 145, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80", description: "Set of 6 hand-painted coasters featuring traditional Madhubani art motifs in vibrant natural colors.", badge: null },
  { id: 10, name: "Leather Macrame Bracelet", category: "Handmade Jewelry", price: 420, oldPrice: 550, rating: 4.5, reviews: 234, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80", description: "Handwoven with genuine leather and natural cotton thread, adjustable to fit any wrist size.", badge: "Sale" },
  { id: 11, name: "Cane Woven Basket Tray", category: "Home Decor", price: 1650, oldPrice: null, rating: 4.6, reviews: 78, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80", description: "Hand-woven from natural cane by tribal artisans in Assam, functional and beautiful home organizer.", badge: null },
  { id: 12, name: "Dhokra Brass Elephant", category: "Home Decor", price: 2400, oldPrice: 2800, rating: 4.8, reviews: 53, image: "https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?w=500&q=80", description: "Cast using the ancient lost-wax method, this tribal brass figurine is a timeless decorative collectible.", badge: "Handmade" },
  { id: 13, name: "Kalamkari Silk Dupatta", category: "Textiles", price: 4200, oldPrice: 5000, rating: 4.9, reviews: 167, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80", description: "Hand-painted with traditional Kalamkari motifs on pure silk, each dupatta takes 3 days to complete.", badge: "Premium" },
  { id: 14, name: "Wooden Salad Bowl Set", category: "Wooden Crafts", price: 1900, oldPrice: null, rating: 4.5, reviews: 89, image: "https://images.unsplash.com/photo-1646256633686-c77f8e5c982c?auto=format&fit=crop&w=800&q=80", description: "Turned on a lathe from a single block of acacia wood, naturally food-safe with a beeswax finish.", badge: null },
  { id: 15, name: "Gemstone Beaded Necklace", category: "Handmade Jewelry", price: 3500, oldPrice: 4200, rating: 4.7, reviews: 201, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80", description: "Hand-strung with genuine semi-precious stones — amethyst, turquoise, and rose quartz — on silk thread.", badge: "Luxury" },
  { id: 16, name: "Handmade Soy Wax Candles", category: "Home Decor", price: 560, oldPrice: 700, rating: 4.4, reviews: 312, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80", description: "Hand-poured soy wax candles with cotton wicks, scented with pure essential oils of lavender and sandalwood.", badge: "Eco", badgeColor: "green" },
  { id: 17, name: "Rattan Wall Mirror", category: "Home Decor", price: 3800, oldPrice: null, rating: 4.6, reviews: 44, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=80", description: "Hand-wrapped with natural rattan cane, this round mirror adds bohemian charm to any room.", badge: "New", badgeColor: "green" },
  { id: 18, name: "Hand-stitched Kantha Quilt", category: "Textiles", price: 4800, oldPrice: 5500, rating: 4.9, reviews: 73, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80", description: "Made by rural women artisans using the ancient kantha running stitch on layers of recycled cotton saris.", badge: "Artisan" },
  { id: 19, name: "Blue Pottery Planter", category: "Pottery", price: 1400, oldPrice: 1800, rating: 4.5, reviews: 118, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&q=80", description: "Traditional Jaipur blue pottery with cobalt blue glaze and hand-painted floral patterns.", badge: "Sale" },
  { id: 20, name: "Carved Mango Wood Frame", category: "Wooden Crafts", price: 2100, oldPrice: null, rating: 4.3, reviews: 62, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80", description: "Intricately carved from sustainable mango wood with traditional Rajasthani patterns, hand-finished with natural wax.", badge: null }
];

// ─── CART MANAGEMENT ─────────────────────────────────────────────
function getCart() {
  return JSON.parse(localStorage.getItem('mm_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('mm_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === productId);
  if (idx >= 0) {
    cart[idx].qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  saveCart(cart);
  showToast(`<strong>${product.name}</strong> added to cart!`, 'success');
  return true;
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
}

function updateQty(productId, qty) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === productId);
  if (idx >= 0) {
    if (qty <= 0) { removeFromCart(productId); }
    else { cart[idx].qty = qty; saveCart(cart); }
  }
}

// ─── TOAST NOTIFICATIONS ─────────────────────────────────────────
function showToast(message, type = 'info') {
  const icons = { success: '🛒', info: 'ℹ️', warning: '⚠️' };
  const toastEl = document.getElementById('liveToast');
  if (!toastEl) return;
  toastEl.querySelector('.toast-icon').textContent = icons[type] || icons.info;
  toastEl.querySelector('.toast-message').innerHTML = message;
  const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
  toast.show();
}

// ─── NAVBAR SCROLL EFFECT ─────────────────────────────────────────
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
  updateCartCount();
}

// ─── SEARCH BAR TOGGLE ────────────────────────────────────────────
function initSearch() {
  const searchBtn = document.getElementById('searchToggle');
  const searchInput = document.getElementById('searchInput');
  if (!searchBtn || !searchInput) return;
  searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('open');
    if (searchInput.classList.contains('open')) searchInput.focus();
  });
}

// ─── WELCOME MODAL ────────────────────────────────────────────────
function initWelcomeModal() {
  const modalEl = document.getElementById('welcomeModal');
  if (!modalEl) return;
  if (!sessionStorage.getItem('mm_welcomed')) {
    setTimeout(() => {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
      sessionStorage.setItem('mm_welcomed', '1');
    }, 1200);
  }
}

// ─── COUNTDOWN TIMER ──────────────────────────────────────────────
function initCountdown() {
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 11, endTime.getMinutes() + 45, endTime.getSeconds() + 30);

  function tick() {
    const now = new Date();
    const diff = endTime - now;
    if (diff <= 0) return;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const el = (id) => document.getElementById(id);
    if (el('cd-hours')) el('cd-hours').textContent = String(h).padStart(2, '0');
    if (el('cd-mins')) el('cd-mins').textContent = String(m).padStart(2, '0');
    if (el('cd-secs')) el('cd-secs').textContent = String(s).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
}

// ─── RENDER PRODUCT CARD ──────────────────────────────────────────
function renderProductCard(p, linkToDetail = true) {
  const stars = renderStars(p.rating);
  const badge = p.badge ? `<span class="product-badge ${p.badgeColor || ''}">${p.badge}</span>` : '';
  const oldPrice = p.oldPrice ? `<span class="old-price">₹${p.oldPrice.toLocaleString()}</span>` : '';
  const link = linkToDetail ? `product.html?id=${p.id}` : '#';
  return `
    <div class="product-card h-100">
      <div class="product-img-wrap">
        ${badge}
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="product-overlay">
          <button class="overlay-btn" title="Quick View" onclick="window.location='${link}'"><i class="bi bi-eye"></i></button>
          <button class="overlay-btn" title="Wishlist"><i class="bi bi-heart"></i></button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-category">${p.category}</div>
        <a href="${link}"><div class="product-name">${p.name}</div></a>
        <div class="product-stars">${stars} <span>(${p.reviews})</span></div>
        <div class="product-price">₹${p.price.toLocaleString()} ${oldPrice}</div>
      </div>
      <div class="product-footer">
        <button class="add-to-cart-btn" onclick="handleAddToCart(${p.id}, this)">
          <i class="bi bi-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>`;
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) html += '<i class="bi bi-star-fill"></i>';
    else if (rating >= i - 0.5) html += '<i class="bi bi-star-half"></i>';
    else html += '<i class="bi bi-star"></i>';
  }
  return html;
}

function handleAddToCart(id, btn) {
  const ok = addToCart(id);
  if (ok && btn) {
    btn.classList.add('added');
    btn.innerHTML = '<i class="bi bi-check-lg"></i> Added!';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<i class="bi bi-cart-plus"></i> Add to Cart';
    }, 2000);
  }
}

// ─── HOME PAGE: FEATURED PRODUCTS ────────────────────────────────
function renderFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;
  const featured = products.slice(0, 8);
  container.innerHTML = featured.map(p => `
    <div class="col-sm-6 col-lg-3 mb-4">
      ${renderProductCard(p)}
    </div>`).join('');
}

// ─── SHOP PAGE: PRODUCT GRID + FILTERING ─────────────────────────
function renderShopProducts(filtered = null) {
  const container = document.getElementById('shopGrid');
  if (!container) return;
  const list = filtered || products;
  document.getElementById('resultsCount').textContent = `Showing ${list.length} products`;
  container.innerHTML = list.length === 0
    ? '<div class="col-12 text-center py-5"><p class="text-muted">No products match your filters.</p></div>'
    : list.map(p => `<div class="col-sm-6 col-xl-4 mb-4">${renderProductCard(p)}</div>`).join('');
}

function initShopFilters() {
  if (!document.getElementById('shopGrid')) return;
  renderShopProducts();

  function applyFilters() {
    const checkedCats = [...document.querySelectorAll('.cat-filter:checked')].map(el => el.value);
    const maxPrice = parseInt(document.getElementById('priceRange')?.value || 5000);
    const sortVal = document.getElementById('sortSelect')?.value || 'default';

    let filtered = products.filter(p => {
      const catOk = checkedCats.length === 0 || checkedCats.includes(p.category);
      const priceOk = p.price <= maxPrice;
      return catOk && priceOk;
    });

    if (sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sortVal === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (sortVal === 'popular') filtered.sort((a, b) => b.reviews - a.reviews);

    renderShopProducts(filtered);
  }

  document.querySelectorAll('.cat-filter').forEach(el => el.addEventListener('change', applyFilters));
  document.getElementById('priceRange')?.addEventListener('input', function () {
    document.getElementById('priceDisplay').textContent = `₹0 – ₹${parseInt(this.value).toLocaleString()}`;
    applyFilters();
  });
  document.getElementById('sortSelect')?.addEventListener('change', applyFilters);
  document.getElementById('applyFilters')?.addEventListener('click', applyFilters);
  document.getElementById('clearFilters')?.addEventListener('click', () => {
    document.querySelectorAll('.cat-filter').forEach(el => el.checked = false);
    const pr = document.getElementById('priceRange');
    if (pr) { pr.value = pr.max; document.getElementById('priceDisplay').textContent = `₹0 – ₹${parseInt(pr.max).toLocaleString()}`; }
    renderShopProducts();
  });
}

// ─── PRODUCT DETAIL PAGE ──────────────────────────────────────────
function initProductDetail() {
  const main = document.getElementById('productDetailMain');
  if (!main) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const p = products.find(pr => pr.id === id) || products[0];

  // Update page title
  document.title = `${p.name} – Mitti & Mann`;

  // Images for gallery (use same image with slight variation for demo)
  const imgs = [p.image, products[(id) % products.length].image, products[(id + 1) % products.length].image, products[(id + 2) % products.length].image];

  main.innerHTML = `
    <div class="col-lg-6">
      <div class="product-gallery">
        <div class="main-img-wrap">
          <img id="mainProductImg" src="${p.image}" alt="${p.name}">
        </div>
        <div class="thumb-gallery">
          ${imgs.map((img, i) => `
            <div class="thumb-item ${i === 0 ? 'active' : ''}" onclick="switchImg(this, '${img}')">
              <img src="${img}" alt="thumb ${i + 1}">
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="ps-lg-4">
        <div class="product-category mb-2">${p.category}</div>
        <h1 class="product-detail-name">${p.name}</h1>
        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="product-stars" style="font-size:1rem">${renderStars(p.rating)}</div>
          <span style="font-size:0.88rem;color:var(--text-light)">${p.rating} (${p.reviews} reviews)</span>
        </div>
        <div class="product-detail-price">₹${p.price.toLocaleString()} ${p.oldPrice ? `<span style="font-size:1rem;font-weight:400;color:var(--text-light);text-decoration:line-through;">₹${p.oldPrice.toLocaleString()}</span>` : ''}</div>
        ${p.oldPrice ? `<div style="margin-bottom:16px"><span style="background:#fff3e0;color:var(--terracotta);padding:4px 12px;border-radius:20px;font-size:0.8rem;font-weight:600;">Save ₹${(p.oldPrice - p.price).toLocaleString()} (${Math.round((p.oldPrice - p.price) / p.oldPrice * 100)}% off)</span></div>` : '<div style="height:16px"></div>'}
        <p class="product-detail-desc">${p.description} Every purchase directly supports the artisan community and helps preserve these time-honored crafts for future generations.</p>
        <hr style="border-color:var(--beige-dark)">
        <div class="d-flex align-items-center gap-16 mb-4" style="gap:16px">
          <div>
            <div class="form-label-custom">Quantity</div>
            <div class="qty-selector">
              <button class="qty-btn" onclick="changeQty(-1)"><i class="bi bi-dash"></i></button>
              <input class="qty-input" type="number" id="qtyInput" value="1" min="1" max="10">
              <button class="qty-btn" onclick="changeQty(1)"><i class="bi bi-plus"></i></button>
            </div>
          </div>
          <div style="margin-top:22px;">
            <span style="font-size:0.82rem;color:var(--green)"><i class="bi bi-check-circle-fill"></i> In Stock</span>
          </div>
        </div>
        <div class="d-flex gap-3 flex-wrap mb-4">
          <button class="btn-primary-custom" onclick="handleDetailAddToCart(${p.id})"><i class="bi bi-cart-plus"></i> Add to Cart</button>
          <button class="btn-outline-custom" onclick="window.location='cart.html'"><i class="bi bi-bag"></i> Buy Now</button>
        </div>
        <div class="product-meta">
          <div class="meta-item"><span class="meta-label">SKU:</span><span class="meta-value">MM-${String(p.id).padStart(4,'0')}</span></div>
          <div class="meta-item"><span class="meta-label">Category:</span><span class="meta-value">${p.category}</span></div>
          <div class="meta-item"><span class="meta-label">Material:</span><span class="meta-value">Natural, Handcrafted</span></div>
          <div class="meta-item"><span class="meta-label">Ships In:</span><span class="meta-value">3–5 business days</span></div>
        </div>
      </div>
    </div>`;

  // Related products
  const related = products.filter(pr => pr.category === p.category && pr.id !== p.id).slice(0, 4);
  const relatedContainer = document.getElementById('relatedProducts');
  if (relatedContainer) {
    relatedContainer.innerHTML = related.map(rp => `<div class="col-sm-6 col-lg-3 mb-4">${renderProductCard(rp)}</div>`).join('');
  }
}

function switchImg(el, src) {
  document.getElementById('mainProductImg').src = src;
  document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function changeQty(delta) {
  const input = document.getElementById('qtyInput');
  if (!input) return;
  input.value = Math.max(1, Math.min(10, parseInt(input.value) + delta));
}

function handleDetailAddToCart(id) {
  const qty = parseInt(document.getElementById('qtyInput')?.value || 1);
  const product = products.find(p => p.id === id);
  if (!product) return;
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx >= 0) cart[idx].qty += qty;
  else cart.push({ ...product, qty });
  saveCart(cart);
  showToast(`<strong>${product.name}</strong> (×${qty}) added to cart!`, 'success');
}

// ─── CART PAGE ────────────────────────────────────────────────────
function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  if (!container) return;
  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-wrap">
        <div class="empty-cart-icon"><i class="bi bi-cart-x"></i></div>
        <h3 style="color:var(--brown)">Your cart is empty</h3>
        <p style="color:var(--text-light);margin:12px 0 28px">Looks like you haven't added any handmade treasures yet.</p>
        <a href="shop.html" class="btn-primary-custom">Start Shopping <i class="bi bi-arrow-right"></i></a>
      </div>`;
    updateSummary(0, 0);
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item-row" id="cart-row-${item.id}">
      <div class="d-flex align-items-start gap-3">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <div class="cart-item-cat">${item.category}</div>
              <div class="cart-item-name">${item.name}</div>
              <div style="font-size:0.9rem;color:var(--terracotta);font-weight:600;margin-top:4px">₹${item.price.toLocaleString()}</div>
            </div>
            <button class="remove-item-btn" onclick="handleRemove(${item.id})" title="Remove"><i class="bi bi-trash3"></i></button>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="qty-selector">
              <button class="qty-btn" onclick="handleQtyChange(${item.id}, ${item.qty - 1})"><i class="bi bi-dash"></i></button>
              <input class="qty-input" type="number" value="${item.qty}" min="1" max="10" onchange="handleQtyChange(${item.id}, this.value)">
              <button class="qty-btn" onclick="handleQtyChange(${item.id}, ${item.qty + 1})"><i class="bi bi-plus"></i></button>
            </div>
            <div style="font-weight:700;color:var(--brown);font-size:1.1rem">₹${(item.price * item.qty).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>`).join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  updateSummary(subtotal, shipping);
}

function updateSummary(subtotal, shipping) {
  const el = id => document.getElementById(id);
  if (el('summarySubtotal')) el('summarySubtotal').textContent = `₹${subtotal.toLocaleString()}`;
  if (el('summaryShipping')) el('summaryShipping').textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
  if (el('summaryTotal')) el('summaryTotal').textContent = `₹${(subtotal + shipping).toLocaleString()}`;
  if (el('cartItemsCount')) el('cartItemsCount').textContent = `${getCart().reduce((s,i)=>s+i.qty,0)} items`;
}

function handleRemove(id) {
  removeFromCart(id);
  renderCart();
}

function handleQtyChange(id, qty) {
  updateQty(id, parseInt(qty));
  renderCart();
}

// ─── NEWSLETTER ───────────────────────────────────────────────────
function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input?.value) {
        showToast('🎉 You\'re subscribed! Check your email for a 10% welcome discount.', 'success');
        input.value = '';
      }
    });
  });
}

// ─── CONTACT FORM ─────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✅ Message sent! We\'ll reply within 24 hours.', 'success');
    form.reset();
  });
}

// ─── ACCOUNT TABS ─────────────────────────────────────────────────
function initAccountTabs() {
  document.querySelectorAll('.tab-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.tab-toggle-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const target = this.dataset.target;
      document.querySelectorAll('.account-form-pane').forEach(pane => {
        pane.style.display = pane.id === target ? 'block' : 'none';
      });
    });
  });
}

// ─── SCROLL ANIMATIONS ────────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

// ─── INIT ALL ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSearch();
  initWelcomeModal();
  initCountdown();
  initNewsletter();
  initContactForm();
  initAccountTabs();
  initScrollAnimations();
  renderFeaturedProducts();
  initShopFilters();
  initProductDetail();
  renderCart();

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === path) link.classList.add('active');
  });
});
