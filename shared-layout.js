/* shared-layout.js – injects announcement bar, navbar, toast, and footer */
(function () {

  // ── ANNOUNCEMENT BAR ───────────────────────────────────────────
  const announcementHTML = `
  <div class="announcement-bar" id="announcementBar">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="announcement-text">
        <span class="d-none d-md-inline">🎨 Handcrafted with love by artisans across India &nbsp;|&nbsp; </span>
        🚚 <strong>Free Shipping</strong> on orders above ₹999 &nbsp;|&nbsp; 🎁 Use code <strong>WELCOME10</strong> for 10% off your first order!
      </div>
      <button class="announcement-close" onclick="document.getElementById('announcementBar').style.display='none'" title="Close">
        <i class="bi bi-x"></i>
      </button>
    </div>
  </div>`;

  // ── NAVBAR ─────────────────────────────────────────────────────
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <span class="brand-mitti">Mitti</span> <span class="brand-amp">&</span> <span class="brand-mann">Mann</span>
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto gap-1">
          <li class="nav-item"><a class="nav-link" href="index.html"><i class="bi bi-house me-1 d-lg-none"></i>Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html"><i class="bi bi-info-circle me-1 d-lg-none"></i>About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="shop.html"><i class="bi bi-grid me-1 d-lg-none"></i>Shop</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" role="button" aria-expanded="false"><i class="bi bi-layout-text-window me-1 d-lg-none"></i>Pages</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="faq.html"><i class="bi bi-question-circle me-2 text-terracotta"></i>FAQ</a></li>
              <li><a class="dropdown-item" href="contact.html"><i class="bi bi-envelope me-2 text-terracotta"></i>Contact</a></li>
            </ul>
          </li>
        </ul>
        <div class="nav-icons">
          <div class="search-wrapper">
            <input type="text" class="search-input" id="searchInput" placeholder="Search products…" aria-label="Search">
            <button class="nav-icon-btn" id="searchToggle" title="Search" aria-label="Toggle Search"><i class="bi bi-search"></i></button>
          </div>
          <a href="account.html" title="My Account">
            <button class="nav-icon-btn" aria-label="Account"><i class="bi bi-person"></i></button>
          </a>
          <a href="cart.html" title="Shopping Cart">
            <button class="nav-icon-btn" aria-label="Cart" style="position:relative">
              <i class="bi bi-bag"></i>
              <span class="cart-count" style="display:none">0</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </nav>`;

  // ── TOAST ──────────────────────────────────────────────────────
  const toastHTML = `
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="liveToast" class="toast custom-toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <span class="toast-icon me-2" style="font-size:1.1rem">🛒</span>
        <strong class="me-auto" style="font-family:'Playfair Display',serif;color:var(--brown)">Mitti &amp; Mann</strong>
        <button type="button" class="btn-close btn-close-sm" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body toast-message"></div>
    </div>
  </div>`;

  // ── FOOTER ─────────────────────────────────────────────────────
  const footerHTML = `
  <footer>
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4">
          <span class="footer-brand">Mitti <span>&</span> Mann</span>
          <p class="footer-desc">We celebrate India's rich craft heritage by connecting skilled artisans with those who appreciate authentic, handmade goods. Every purchase is a step toward a more soulful world.</p>
          <div class="social-links mt-3">
            <a href="#" class="social-link" title="Instagram" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-link" title="Facebook" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="social-link" title="Pinterest" aria-label="Pinterest"><i class="bi bi-pinterest"></i></a>
            <a href="#" class="social-link" title="YouTube" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
            <a href="#" class="social-link" title="Twitter/X" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2">
          <h6 class="footer-heading">Quick Links</h6>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="cart.html">My Cart</a></li>
            <li><a href="account.html">My Account</a></li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-2">
          <h6 class="footer-heading">Help &amp; Info</h6>
          <ul class="footer-links">
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns &amp; Refunds</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-lg-4">
          <h6 class="footer-heading">Contact Us</h6>
          <div class="footer-contact-item"><i class="bi bi-geo-alt-fill"></i><span>12, Artisan Lane, Jaipur, Rajasthan 302001</span></div>
          <div class="footer-contact-item"><i class="bi bi-telephone-fill"></i><span>+91 98765 43210</span></div>
          <div class="footer-contact-item"><i class="bi bi-envelope-fill"></i><span>hello@mittiandmann.com</span></div>
          <div class="footer-contact-item"><i class="bi bi-clock-fill"></i><span>Mon–Sat: 10am – 7pm IST</span></div>
          <div class="footer-newsletter mt-4">
            <h6 class="footer-heading mb-3">Newsletter</h6>
            <form class="newsletter-form footer-nl-form" onsubmit="return false">
              <div style="display:flex;border-radius:50px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.2)">
                <input type="email" placeholder="your@email.com" style="flex:1;border:none;padding:10px 18px;font-family:'Poppins',sans-serif;font-size:0.85rem;outline:none;background:rgba(255,255,255,0.1);color:white;" required>
                <button type="submit" style="background:var(--terracotta);color:white;border:none;padding:10px 18px;font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:600;cursor:pointer;white-space:nowrap">Go</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p style="margin:0">© 2025 Mitti &amp; Mann. Made with ♥ for India's artisans. All rights reserved.</p>
        <div style="display:flex;gap:14px">
          <a href="#" style="color:rgba(255,255,255,0.4);font-size:0.8rem;transition:color 0.2s" onmouseover="this.style.color='var(--terracotta)'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">Privacy Policy</a>
          <a href="#" style="color:rgba(255,255,255,0.4);font-size:0.8rem;transition:color 0.2s" onmouseover="this.style.color='var(--terracotta)'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">Terms of Service</a>
          <a href="faq.html" style="color:rgba(255,255,255,0.4);font-size:0.8rem;transition:color 0.2s" onmouseover="this.style.color='var(--terracotta)'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">FAQ</a>
        </div>
      </div>
    </div>
  </footer>`;

  // ── WELCOME MODAL ──────────────────────────────────────────────
  const welcomeModalHTML = `
  <div class="modal fade welcome-modal" id="welcomeModal" tabindex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close" style="z-index:10;background-color:white;border-radius:50%;padding:8px;opacity:0.8"></button>
        <div class="row g-0">
          <div class="col-md-5 welcome-img-side">
            <div class="discount-badge-big mb-2">10%</div>
            <h3 id="welcomeModalLabel">Welcome Gift!</h3>
            <p>Get 10% off your first order when you join our artisan community newsletter.</p>
            <div style="margin-top:24px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.2)">
              <p style="font-size:0.8rem;opacity:0.7">Join 12,000+ craft lovers who get exclusive deals, artisan stories, and new arrivals first.</p>
            </div>
          </div>
          <div class="col-md-7 welcome-form-side">
            <h4>Claim Your Discount</h4>
            <p>Subscribe to unlock your welcome offer</p>
            <div class="mb-3">
              <label class="form-label-custom">Your Name</label>
              <input type="text" class="form-control-custom" placeholder="e.g. Priya Sharma">
            </div>
            <div class="mb-4">
              <label class="form-label-custom">Email Address</label>
              <input type="email" class="form-control-custom" placeholder="priya@email.com">
            </div>
            <button class="btn-primary-custom w-100" data-bs-dismiss="modal" onclick="showToast('🎉 Welcome! Your 10% code: WELCOME10', 'success')">
              <i class="bi bi-gift"></i> Claim 10% Off Now
            </button>
            <p style="font-size:0.75rem;color:var(--text-light);text-align:center;margin-top:16px">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  // ── ANNOUNCEMENT BAR STYLES ────────────────────────────────────
  const announcementStyles = `
  <style>
    .announcement-bar {
      background: linear-gradient(90deg, var(--brown) 0%, var(--terracotta) 50%, var(--brown-light) 100%);
      color: white;
      font-size: 0.82rem;
      padding: 9px 0;
      text-align: center;
      position: relative;
      z-index: 1040;
      letter-spacing: 0.3px;
    }
    .announcement-text { flex: 1; text-align: center; }
    .announcement-close {
      background: none; border: none; color: rgba(255,255,255,0.75);
      font-size: 1.1rem; cursor: pointer; padding: 0 0 0 12px;
      flex-shrink: 0; line-height: 1; transition: color 0.2s;
    }
    .announcement-close:hover { color: white; }
    .navbar-brand .brand-mitti { color: var(--brown); font-family: 'Playfair Display', serif; }
    .navbar-brand .brand-amp { color: var(--terracotta); font-family: 'Playfair Display', serif; margin: 0 2px; }
    .navbar-brand .brand-mann { color: var(--brown); font-family: 'Playfair Display', serif; }
    .text-terracotta { color: var(--terracotta); }
    @media (max-width: 575px) {
      .announcement-bar { font-size: 0.75rem; padding: 7px 0; }
    }
  </style>`;

  // ── INJECT ─────────────────────────────────────────────────────
  // Insert announcement bar before navbar placeholder
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  if (navbarPlaceholder) {
    navbarPlaceholder.insertAdjacentHTML('beforebegin', announcementStyles + announcementHTML);
    navbarPlaceholder.innerHTML = navbarHTML;
  }

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML + toastHTML + welcomeModalHTML;
  }
})();
