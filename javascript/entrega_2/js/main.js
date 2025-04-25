const ProductoCategoria = [
  { key: 'electronica', label: 'Electrónica', icon: 'devices' },
  { key: 'ropa', label: 'Ropa', icon: 'checkroom' },
  { key: 'hogar', label: 'Hogar', icon: 'home' },
  { key: 'varios', label: 'Varios', icon: 'more_horiz' },
];

// Variable para almacenar la categoría seleccionada
let categoriaSeleccionada = null;

// Clase para manejar los productos
class Producto {
  constructor(nombre, precio, categoria) {
    this.id = Date.now();
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.fechaAgregado = new Date().toISOString();
  }
}

// Clase para manejar el carrito
class Carrito {
  constructor() {
    // Recuperar carrito del localStorage o iniciar vacío
    this.productos = JSON.parse(localStorage.getItem('carrito')) || [];
    this.total = 0;
    this.actualizarContador();
    this.renderizarCarrito();
  }

  // Agregar producto
  agregarProducto(producto) {
    this.productos.push(producto);
    this.guardarEnStorage();
    this.renderizarCarrito();
    this.actualizarContador();
    
    // Mostrar notificación de éxito
    Swal.fire({
      title: '¡Producto agregado!',
      text: `${producto.nombre} ha sido agregado al carrito`,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  }

  // Eliminar producto
  eliminarProducto(id) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productos = this.productos.filter((producto) => producto.id !== id);
        this.guardarEnStorage();
        this.renderizarCarrito();
        this.actualizarContador();
        
        Swal.fire(
          '¡Eliminado!',
          'El producto ha sido eliminado del carrito',
          'success'
        );
      }
    });
  }

  // Vaciar carrito
  vaciarCarrito() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se eliminarán todos los productos del carrito",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productos = [];
        this.guardarEnStorage();
        this.renderizarCarrito();
        this.actualizarContador();
        
        Swal.fire(
          '¡Carrito vaciado!',
          'Todos los productos han sido eliminados',
          'success'
        );
      }
    });
  }

  // Calcular total
  calcularTotal() {
    return this.productos.reduce(
      (total, producto) => total + producto.precio,
      0
    );
  }

  // Guardar en localStorage
  guardarEnStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.productos));
  }

  // Actualizar contador del carrito
  actualizarContador() {
    const contador = document.querySelector('.cart-count');
    contador.textContent = this.productos.length;
  }

  // Agrupar productos por categoría
  agruparPorCategoria() {
    return this.productos.reduce((grupos, producto) => {
      const categoria = producto.categoria;
      if (!grupos[categoria]) {
        grupos[categoria] = [];
      }
      grupos[categoria].push(producto);
      return grupos;
    }, {});
  }

  // Renderizar carrito en el DOM
  renderizarCarrito() {
    const $listaCarrito = document.getElementById('cartList');
    const $totalElement = document.getElementById('totalAmount');

    // Limpiar lista actual
    $listaCarrito.innerHTML = '';

    if (this.productos.length === 0) {
      $listaCarrito.innerHTML = `
        <li class="cart-empty">
          <span class="material-symbols-rounded">shopping_cart_off</span>
          <p>Tu carrito está vacío</p>
        </li>
      `;
      return;
    }

    // Agrupar productos por categoría
    const productosAgrupados = this.agruparPorCategoria();

    // Renderizar productos agrupados por categoría
    Object.entries(productosAgrupados).forEach(([categoria, productos]) => {
      const categoriaInfo = ProductoCategoria.find(
        (cat) => cat.key === categoria
      );
      const $categoriaSection = document.createElement('li');
      $categoriaSection.className = 'cart-category-section';
      $categoriaSection.innerHTML = `
        <div class="category-header">
          <span class="material-symbols-rounded">${categoriaInfo.icon}</span>
          <h4>${categoriaInfo.label}</h4>
        </div>
        <ul class="category-items">
          ${productos
            .map(
              (producto) => `
            <li class="cart-item">
              <div class="cart-item-info">
                <span class="cart-item-name">${producto.nombre}</span>
                <span class="cart-item-price">$${producto.precio}</span>
              </div>
              <button class="btn-delete" onclick="carrito.eliminarProducto(${producto.id})" aria-label="Eliminar ${producto.nombre}">
                <span class="material-symbols-rounded">delete</span>
              </button>
            </li>
          `
            )
            .join('')}
        </ul>
      `;
      $listaCarrito.appendChild($categoriaSection);
    });

    // Actualizar total
    $totalElement.textContent = this.calcularTotal().toFixed(2);
  }
}

// Inicializar carrito
const carrito = new Carrito();

const renderCategorias = () => {
  const $listaCategorias = document.getElementById('categoriesList');

  // Renderizar categorías en el grid
  $listaCategorias.innerHTML = '';
  ProductoCategoria.map((p) => {
    const htmlProductoCard = `<div class="category-card" data-category="${p.key}">
        <span class="material-symbols-rounded">${p.icon}</span>
        <h3>${p.label}</h3>
    </div>`;
    return htmlProductoCard;
  }).forEach((htmlP) => {
    $productCard = document.createElement('div');
    $productCard.innerHTML = htmlP;
    $listaCategorias.appendChild($productCard);
  });

  // Agregar event listeners a las tarjetas de categoría
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach((card) => {
    card.addEventListener('click', () => {
      // Remover la clase selected de todas las tarjetas
      categoryCards.forEach((c) => c.classList.remove('selected'));
      // Agregar la clase selected a la tarjeta clickeada
      card.classList.add('selected');
      // Actualizar la categoría seleccionada
      categoriaSeleccionada = card.dataset.category;
    });
  });
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  renderCategorias();
  const $productForm = document.getElementById('productForm');
  const $clearCartBtn = document.getElementById('clearCart');

  // Manejar envío del formulario
  $productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const $nombre = document.getElementById('productName').value.trim();
    const $precio = parseFloat(document.getElementById('productPrice').value);

    // Validación de campos
    if (!$nombre || !$precio || !categoriaSeleccionada) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos y selecciona una categoría',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    // Validación de precio
    if ($precio <= 0) {
      Swal.fire({
        title: 'Error',
        text: 'El precio debe ser mayor a 0',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    const nuevoProducto = new Producto(
      $nombre,
      $precio,
      categoriaSeleccionada
    );
    carrito.agregarProducto(nuevoProducto);
    $productForm.reset();
    // Limpiar la selección de categoría
    document
      .querySelectorAll('.category-card')
      .forEach((card) => card.classList.remove('selected'));
    categoriaSeleccionada = null;
  });

  // Manejar vaciado del carrito
  $clearCartBtn.addEventListener('click', () => {
    carrito.vaciarCarrito();
  });
});
