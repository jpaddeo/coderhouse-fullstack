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
  }

  // Eliminar producto
  eliminarProducto(id) {
    this.productos = this.productos.filter((producto) => producto.id !== id);
    this.guardarEnStorage();
    this.renderizarCarrito();
    this.actualizarContador();
  }

  // Vaciar carrito
  vaciarCarrito() {
    this.productos = [];
    this.guardarEnStorage();
    this.renderizarCarrito();
    this.actualizarContador();
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
              <span>${producto.nombre}</span>
              <span>$${producto.precio}</span>
              <button class="btn-delete" onclick="carrito.eliminarProducto(${producto.id})">
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

    const $nombre = document.getElementById('productName').value;
    const $precio = parseFloat(document.getElementById('productPrice').value);

    if ($nombre && $precio && categoriaSeleccionada) {
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
    } else if (!$nombre || !$precio || !categoriaSeleccionada) {
      alert('Por favor, completa todos los campos y selecciona una categoría');
    }
  });

  // Manejar vaciado del carrito
  $clearCartBtn.addEventListener('click', () => {
    carrito.vaciarCarrito();
  });
});
