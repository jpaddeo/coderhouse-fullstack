// Clase para manejar el checkout
class Checkout {
  constructor() {
    this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    this.renderizarResumen();
    this.setupEventListeners();
  }

  // Renderizar resumen del pedido
  renderizarResumen() {
    const $resumen = document.getElementById('orderSummary');
    const $total = document.getElementById('checkoutTotal');

    if (this.carrito.length === 0) {
      $resumen.innerHTML = `
        <div class="empty-cart">
          <span class="material-symbols-rounded">shopping_cart_off</span>
          <p>Tu carrito está vacío</p>
          <a href="index.html" class="btn btn-secondary">Volver a la tienda</a>
        </div>
      `;
      return;
    }

    // Agrupar productos por categoría
    const productosAgrupados = this.agruparPorCategoria();

    // Renderizar productos agrupados
    $resumen.innerHTML = Object.entries(productosAgrupados)
      .map(([categoria, productos]) => {
        const subtotal = productos.reduce((sum, p) => sum + p.precio, 0);
        return `
          <div class="order-category">
            <h3>${this.getCategoriaLabel(categoria)}</h3>
            <ul class="order-items">
              ${productos
                .map(
                  (producto) => `
                <li class="order-item">
                  <span class="item-name">${producto.nombre}</span>
                  <span class="item-price">$${producto.precio}</span>
                </li>
              `
                )
                .join('')}
            </ul>
            <div class="category-subtotal">
              Subtotal: $${subtotal}
            </div>
          </div>
        `;
      })
      .join('');

    // Actualizar total
    const total = this.calcularTotal();
    $total.textContent = total.toFixed(2);
  }

  // Agrupar productos por categoría
  agruparPorCategoria() {
    return this.carrito.reduce((grupos, producto) => {
      const categoria = producto.categoria;
      if (!grupos[categoria]) {
        grupos[categoria] = [];
      }
      grupos[categoria].push(producto);
      return grupos;
    }, {});
  }

  // Obtener etiqueta de categoría
  getCategoriaLabel(categoria) {
    const categorias = {
      electronica: 'Electrónica',
      ropa: 'Ropa',
      hogar: 'Hogar',
      varios: 'Varios',
    };
    return categorias[categoria] || categoria;
  }

  // Calcular total
  calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }

  // Configurar event listeners
  setupEventListeners() {
    const $form = document.getElementById('paymentForm');

    $form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simular procesamiento de pago
      Swal.fire({
        title: 'Procesando pago...',
        text: 'Por favor espere',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // Simular delay de procesamiento
      setTimeout(() => {
        Swal.fire({
          title: '¡Pago exitoso!',
          text: 'Tu pedido ha sido procesado correctamente',
          icon: 'success',
          confirmButtonText: 'Volver a la tienda',
        }).then(() => {
          // Limpiar carrito y redirigir
          localStorage.removeItem('carrito');
          window.location.href = 'index.html';
        });
      }, 2000);
    });

    // Formatear número de tarjeta
    const $cardNumber = document.getElementById('cardNumber');
    $cardNumber.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });

    // Formatear fecha de vencimiento
    const $expiryDate = document.getElementById('expiryDate');
    $expiryDate.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
      e.target.value = value;
    });

    // Formatear CVV
    const $cvv = document.getElementById('cvv');
    $cvv.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
  }
}

// Inicializar checkout
document.addEventListener('DOMContentLoaded', () => {
  new Checkout();
}); 