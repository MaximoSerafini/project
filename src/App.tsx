import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, X, Home, Sparkles, Menu, Heart, Info } from 'lucide-react';

interface Perfume {
  id: number;
  marca: string;
  nombre: string;
  imagen: string;
  precio: number;
  genero: 'Hombre' | 'Mujer' | 'Unisex';
  fragancia_referencia?: string;
  notas: {
    salida: string[];
    corazon: string[];
    fondo: string[];
  };
  descripcion: string;
  sinDescuento?: boolean;
}

interface CartItem extends Perfume {
  cantidad: number;
}

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentMarca, setCurrentMarca] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showHome, setShowHome] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const perfumes: Perfume[] = [
    {
      id: 1,
      marca: 'Lattafa',
      nombre: 'Badee Al Oud Sublime 100ml EDP',
      imagen: 'https://i.imgur.com/6onMEB2.png',
      precio: 60000,
      notas: {
        salida: ['Manzana', 'Lichi', 'Rosa'],
        corazon: ['ciruela', 'jazmín'],
        fondo: ['vainila', 'musgo', 'pachulí']
      },
      genero: 'Mujer',
      fragancia_referencia: "Eden Juicy Apple",
      descripcion: 'Es una fragancia de la familia olfativa Amaderada Aromática para Hombres y Mujeres. Esta fragrancia es nueva. Badee Al Oud Sublime se lanzó en 2023.'
    },
    {
      id: 4,
      marca: 'Maison Alhambra',
      nombre: 'La Vivacité 30 EDP',
      imagen: 'https://i.imgur.com/NmJ4AFA.png',
      precio: 20000,
      notas: {
        salida: ['grosellas negras','pera'],
        corazon: ['iris','flor de azahar del naranjo', 'jazmín'],
        fondo: ['pichulí', 'praliné', 'vainilla']
      },
      genero: 'Mujer',
      fragancia_referencia: "La Vie Est Belle de Lancôme",
      descripcion: 'Es una fragancia de la familia olfativa Floral Frutal para Mujeres. Esta fragrancia es nueva. La Vivacité se lanzó en 2024.'
    },
    {
      id: 6,
      marca: 'Maison Alhambra',
      nombre: 'B.A.D. HOMME 30 EDP',
      imagen: 'https://i.imgur.com/XCBnNQU.png',
      precio: 20000,
      notas: {
        salida: ['Pimienta Negra', 'Cardamomo', 'Bergamota'],
        corazon: ['Incienso', 'Cedro', 'Vetiver'],
        fondo: ['Cuero', 'Oud', 'Ámbar']
      },
      genero: 'Hombre',
      fragancia_referencia: "Bad Boy de Carolina Herrera",
      descripcion: 'Fragancia amaderada y fresca, con notas masculinas y sofisticadas, ideal para hombres de carácter fuerte.'
    },
    {
      id: 10,
      marca: 'Lattafa',
      nombre: 'Haya',
      imagen: 'https://i.imgur.com/lT4X1j2.png',
      precio: 60000,
      notas: {
        salida: ['champaña', 'fresa','naranja','rosa'],
        corazon: ['gardenia', 'orquídea de vainilla', 'jazmin'],
        fondo: ['sándalo', 'ámbar', 'castaña']
      },
      genero: 'Mujer',
      fragancia_referencia: "Prada Paradox",
      descripcion: 'Es una fragancia de la familia olfativa para Mujeres. Esta fragrancia es nueva. Haya se lanzó en 2022.'
    },
    {
      id: 15,
      marca: 'Lattafa',
      nombre: 'Chants tenderina',
      imagen: 'https://i.imgur.com/dyoXjzq.png',
      precio: 28500,
      notas: {
        salida: ['Frutas', 'Cítricos'],
        corazon: ['Rosa', 'Jazmín'],
        fondo: ['Vainilla', 'Almizcle']
      },
      genero: 'Mujer',
      fragancia_referencia: "Chanel Chance Eau Tendre",
      descripcion: 'Aroma tierno y delicado, perfecto para ocasiones especiales.',
      sinDescuento: true
    },
    {
      id: 17,
      marca: 'Perfumeros',
      nombre: 'Perfumeros',
      imagen: 'https://i.imgur.com/yMxitsz.png',
      precio: 3500,
      notas: {
        salida: [''],
        corazon: [''],
        fondo: ['']
      },
      genero: 'Unisex',
      fragancia_referencia: "",
      descripcion: 'Disfruta de llevar tus perfume favorito a todos lados',
      sinDescuento: true
    },
    {
      id: 19,
      marca: 'Maison Alhambra',
      nombre: 'My Party 100ml EDP',
      imagen: 'https://i.imgur.com/vlZWvR5.png', 
      precio: 26000,
      notas: {
        salida: ['Fresa', 'Frambuesa', 'Naranja', 'Pera', 'Mandarina', 'Bergamota'],
        corazon: ['Jazmín', 'Jazmín sambac', 'Datura', 'Flor de azahar del naranjo'],
        fondo: ['Pachulí', 'Vainilla', 'Musgo', 'Cedro']
      },
      genero: 'Mujer',
      fragancia_referencia: "Mon Paris de Yves Saint Laurent",
      descripcion: 'Dulce, juvenil y adictiva. My Party es la fragancia perfecta para quienes aman los aromas románticos con un toque atrevido. Un homenaje al amor apasionado, ideal para cualquier ocasión especial… o para hacerla especial. Ideal para las que quieren destacar con un aroma dulce, moderno y encantador.',
      sinDescuento: true
    },
    {
      id: 20,
      marca: 'Maison Alhambra',
      nombre: 'Pink Shimmer Secret 100ml EDP',
      imagen: 'https://i.imgur.com/C5X8oia.png', 
      precio: 25000,
      notas: {
        salida: ['Piña', 'Toronja', 'Fresa'],
        corazon: ['Peonía', 'Bayas rojas', 'Orquídea', 'Azucena', 'Jazmín'],
        fondo: ['Musgo de roble', 'Notas amaderadas', 'Almizcle']
      },
      genero: 'Mujer',
      fragancia_referencia: "Pink Warm & Cozy de Victoria's Secret",
      descripcion: 'Dulce, cálido y relajado. Pink Shimmer Secret captura la esencia de una tarde de sol, entre risas, frescura frutal y suavidad floral. Ideal para quienes aman los perfumes jóvenes, cómodos y "cozy".',
      sinDescuento: true
    },
    {
      id: 21,
      marca: 'Maison Alhambra',
      nombre: 'Rose Seduction Vip Pour Femme 100ml EDP',
      imagen: 'https://i.imgur.com/Or5Mvso.png', 
      precio: 25000,
      notas: {
        salida: ['Pimienta rosa', 'Champagne rosé'],
        corazon: ['Rosa', 'Flor del duraznero'],
        fondo: ['Almizcle blanco', 'Notas amaderadas']
      },
      genero: 'Mujer',
      fragancia_referencia: "212 VIP Rosé de Carolina Herrera",
      descripcion: 'Elegante, vibrante y femenina, Rose Seduction Vip combina el brillo de una copa de champagne con la suavidad floral de la rosa. Un perfume moderno y sofisticado, perfecto para robar todas las miradas. Ideal para salidas nocturnas, eventos elegantes o una cita especial. Sofisticada, pero con un toque sexy y alegre.',
      sinDescuento: true
    },
    {
      id: 22,
      marca: 'Maison Alhambra',
      nombre: 'La Voie 100ml EDP',
      imagen: 'https://i.imgur.com/bnKDRXD.png', 
      precio: 32000,
      notas: {
        salida: ['Flor de azahar del naranjo', 'Bergamota'],
        corazon: ['Nardos', 'Jazmín de la India'],
        fondo: ['Vainilla de Madagascar', 'Almizcle blanco', 'Cedro de Virginia']
      },
      genero: 'Mujer',
      fragancia_referencia: "My Way de Giorgio Armani",
      descripcion: 'Auténtica, luminosa y femenina, La Voie celebra los nuevos comienzos y la conexión con uno mismo. Un aroma elegante y radiante que transmite sensibilidad, ideal para mujeres con espíritu libre y decidido. Perfecta para el día a día, reuniones importantes o encuentros especiales donde querés transmitir confianza y frescura.',
      sinDescuento: true
    },
    {
      id: 24,
      marca: 'Maison Alhambra',
      nombre: 'Jean Lowe Fraiche 100ml EDP',
      imagen: 'https://i.imgur.com/xa8yGJW.png', 
      precio: 26000,
      notas: {
        salida: ['Pétalos de rosa', 'Caramelo'],
        corazon: ['Jazmín', 'Cacao', 'Madera de agar (oud)'],
        fondo: ['Cuero', 'Ámbar', 'Vainilla']
      },
      genero: 'Unisex',
      fragancia_referencia: "Nouveau Monde de Louis Vuitton",
      descripcion: 'Exótica, sofisticada y envolvente. Jean Lowe Fraiche captura el espíritu aventurero de Nouveau Monde, combinando dulzura, especias y una sensualidad profunda. Una fragancia unisex con carácter, perfecta para quienes quieren dejar huella con elegancia y misterio. Ideal para eventos elegantes, salidas nocturnas o momentos especiales, donde se busca destacar con un aroma sofisticado, sensual y memorable.',
      sinDescuento: true
    },
    {
      id: 25,
      marca: 'Maison Alhambra',
      nombre: 'Avant 100ml EDP',
      imagen: 'https://i.imgur.com/w6gIGwg.png',
      precio: 27000,
      notas: {
        salida: ['Notas verdes', 'Bergamota', 'Limón'],
        corazon: ['Pimienta negra', 'Jazmín', 'Lavanda'],
        fondo: ['Vetiver', 'Pachulí', 'Almizcle']
      },
      genero: 'Hombre',
      fragancia_referencia: "Creed Aventus",
      descripcion: 'Versátil. Ideal para el día, salidas o eventos. Aroma masculino, elegante y seguro. Deja huella sin exagerar.',
      sinDescuento: true
    },

    {
      id: 27,
      marca: 'Maison Alhambra',
      nombre: 'Jorge di Profondo 100ml EDP',
      imagen: 'https://i.imgur.com/CTUTLtC.jpeg',
      precio: 30000,
      notas: {
        salida: ['Aquozone', 'Notas marinas', 'Bergamota', 'Mandarina verde'],
        corazon: ['Romero', 'Lavanda', 'Ciprés', 'Lentisco'],
        fondo: ['Notas minerales', 'Almizcle', 'Ámbar', 'Pachulí']
      },
      genero: 'Hombre',
      fragancia_referencia: "Acqua di Giò Profondo – Armani",
      descripcion: 'Ideal para el día, oficina o clima cálido. Fresca, limpia y profesional. Transmite elegancia relajada.',
      sinDescuento: true
    },
    {
      id: 28,
      marca: 'Maison Alhambra',
      nombre: 'Dark Door Sport 100ml EDP',
      imagen: 'https://i.imgur.com/GsOmOMD.png',
      precio: 36000,
      notas: {
        salida: ['Pomelo', 'Limón', 'Resina de elemí', 'Bergamota'],
        corazon: ['Jengibre', 'Cedro', 'Vetiver'],
        fondo: ['Lavanda', 'Romero', 'Sándalo']
      },
      genero: 'Hombre',
      fragancia_referencia: "Dior Homme Sport",
      descripcion: 'Perfecto para el día, entrenar o climas cálidos. Energética, fresca y moderna. Transmite vitalidad con elegancia.',
      sinDescuento: true
    },
    {
      id: 29,
      marca: 'Maison Alhambra',
      nombre: 'Your Touch 100ml EDP',
      imagen: 'https://i.imgur.com/yQvpAAk.png',
      precio: 25000,
      notas: {
        salida: ['Frambuesa', 'Limón', 'Naranja'],
        corazon: ['Rosa'],
        fondo: ['Vainilla', 'Almizcle', 'Amberwood']
      },
      genero: 'Mujer',
      fragancia_referencia: "Because It's You – Armani",
      descripcion: 'Ideal para el día, citas o uso diario romántico. Dulce, femenina y envolvente. Aporta calidez y encanto.',
      sinDescuento: true
    },
  ];
  const marcas = Array.from(new Set(perfumes.map(p => p.marca)));

  const addToCart = (perfume: Perfume) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === perfume.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === perfume.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prevItems, { ...perfume, cantidad: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, cantidad: newQuantity } : item
      )
    );
  };

  const filteredPerfumes = perfumes.filter(perfume => {
    const matchesMarca = currentMarca ? perfume.marca === currentMarca : true;
    const matchesSearch = perfume.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         perfume.marca.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMarca && matchesSearch;
  });

  const total = cartItems.reduce((sum, item) => 
    sum + ((item.sinDescuento ? item.precio : item.precio * 0.85) * item.cantidad), 0
  );

  const createWhatsAppLink = () => {
    const message = cartItems.map(item => 
      `${item.cantidad}x ${item.marca} - ${item.nombre} ($${item.precio})`
    ).join('\n');
    
    const text = `¡Hola! Me gustaría comprar los siguientes perfumes:\n\n${message}\n\nTotal: $${total.toFixed(2)}`;
    return `https://wa.me/543794800282?text=${encodeURIComponent(text)}`;
  };

  const getGenderColor = (genero: string) => {
    switch (genero) {
      case 'Hombre':
        return 'bg-blue-100 text-blue-700';
      case 'Mujer':
        return 'bg-pink-100 text-pink-700';
      default:
        return 'bg-purple-100 text-purple-700';
    }
  };

  if (showHome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h1 className="text-6xl font-serif mb-6 animate-fade-in">Essenza</h1>
          <p className="text-xl mb-8 opacity-90">Descubre tu fragancia perfecta</p>
          <button
            onClick={() => setShowHome(false)}
            className="px-8 py-3 bg-white text-purple-900 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center mx-auto"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Explorar Fragancias
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg' 
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => setShowHome(true)}
                className="text-3xl font-serif font-bold text-purple-900 hover:text-purple-700 transition-colors flex items-center"
              >
                <Home className="h-8 w-8 mr-2" />
                <span className="hidden sm:inline">Essenza</span>
              </button>
              <nav className="hidden md:flex ml-8 space-x-6">
                {marcas.map((marca) => (
                  <button
                    key={marca}
                    onClick={() => setCurrentMarca(marca === currentMarca ? null : marca)}
                    className={`text-sm font-medium transition-colors ${
                      currentMarca === marca
                        ? 'text-purple-600 border-b-2 border-purple-600'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {marca}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Buscar perfumes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button 
                className="p-2 rounded-full hover:bg-purple-100 relative group"
                onClick={() => setShowCart(true)}
              >
                <ShoppingBag className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 rounded-full hover:bg-gray-100"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Buscar perfumes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                {marcas.map((marca) => (
                  <button
                    key={marca}
                    onClick={() => {
                      setCurrentMarca(marca === currentMarca ? null : marca);
                      setShowMobileMenu(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      currentMarca === marca
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {marca}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        {/* Grid de Perfumes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPerfumes.map((perfume) => (
            <div
              key={perfume.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-1 aspect-h-1 relative group">
                <img
                  src={perfume.imagen}
                  alt={perfume.nombre}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => addToCart(perfume)}
                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-600 hover:text-white flex items-center space-x-2"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span>Agregar al carrito</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-purple-600 font-medium">{perfume.marca}</p>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1">{perfume.nombre}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getGenderColor(perfume.genero)}`}>
                        {perfume.genero}
                      </span>
                      {perfume.fragancia_referencia && (
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          Inspirado en {perfume.fragancia_referencia}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPerfume(perfume)}
                    className="p-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-colors"
                  >
                    <Info className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    {perfume.sinDescuento ? (
                      <span className="text-xl font-bold text-purple-600">
                        ${perfume.precio}
                      </span>
                    ) : (
                      <>
                        <span className="text-xl font-bold text-purple-600">
                          ${(perfume.precio * 0.85).toFixed(0)}
                        </span>
                        <span className="text-sm text-gray-400 line-through ml-2">
                          ${perfume.precio}
                        </span>
                        <span className="ml-2 text-green-600 text-xs font-semibold bg-green-100 px-2 py-0.5 rounded">
                          15% OFF
                        </span>
                      </>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(perfume)}
                    className="p-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-full transition-colors"
                  >
                    <Heart className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal de Notas del Perfume */}
      {selectedPerfume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{selectedPerfume.marca}</h2>
                <h3 className="text-xl text-purple-600">{selectedPerfume.nombre}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getGenderColor(selectedPerfume.genero)}`}>
                    {selectedPerfume.genero}
                  </span>
                  {selectedPerfume.fragancia_referencia && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      Inspirado en {selectedPerfume.fragancia_referencia}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedPerfume(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="aspect-w-1 aspect-h-1 mb-6">
              <img
                src={selectedPerfume.imagen}
                alt={selectedPerfume.nombre}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-6">{selectedPerfume.descripcion}</p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Notas de Salida</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPerfume.notas.salida.map((nota, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {nota}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Notas de Corazón</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPerfume.notas.corazon.map((nota, index) => (
                    <span key={index} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                      {nota}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">Notas de Fondo</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPerfume.notas.fondo.map((nota, index) => (
                    <span key={index} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                      {nota}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  addToCart(selectedPerfume);
                  setSelectedPerfume(null);
                }}
                className="px-6 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Agregar al carrito</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Carrito */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Tu Carrito</h2>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Tu carrito está vacío</p>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center py-4 border-b">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-gray-900">{item.marca} - {item.nombre}</h3>
                      <p className="text-purple-600 font-medium">
                        {item.sinDescuento ? (
                          <>${item.precio}</>
                        ) : (
                          <>
                            ${(item.precio * 0.85).toFixed(0)}
                            <span className="text-xs text-gray-400 line-through ml-1">${item.precio}</span>
                            <span className="ml-2 text-green-600 text-xs font-semibold bg-green-100 px-2 py-0.5 rounded">
                              15% OFF
                            </span>
                          </>
                        )}
                      </p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                          className="px-2 py-1 bg-gray-100 rounded-l hover:bg-gray-200 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 bg-gray-100">{item.cantidad}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                          className="px-2 py-1 bg-gray-100 rounded-r hover:bg-gray-200 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-gray-100 rounded-full ml-4 transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                ))}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium text-gray-900">Total:</span>
                    <span className="text-2xl font-bold text-purple-600">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 text-white py-3 rounded-full font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Completar compra por WhatsApp</span>
                    <ShoppingBag className="h-5 w-5" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
