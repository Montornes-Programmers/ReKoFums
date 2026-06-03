
// =============================================
// ReKoFum — Base de datos de contenido
// =============================================

const perfumesDB = [
  {
    id: 1, nombre: "N°5", marca: "Chanel", marcaId: 1, año: 1921,
    genero: "femenino", rating: 4.7, votos: 48200,
    familia: ["floral", "aldehido"],
    estacion: ["primavera", "verano"],
    duracion: 78, proyeccion: 72, dia: 62,
    bottleColor: "linear-gradient(160deg,#F9F4EC,#E8D5A3)",
    notas: {
      salida: ["Aldehídos", "Neroli", "Ylang-ylang"],
      corazon: ["Rosa", "Jazmín", "Lirio del valle"],
      fondo: ["Sándalo", "Vainilla", "Vetiver"]
    },
    descripcion: "El perfume más icónico de la historia. Creado por Ernest Beaux en 1921, N°5 revolucionó la perfumería moderna con su uso pionero de aldehídos artificiales que envuelven un corazón floral eterno.",
    reviews: [
      { user: "parfumista_mx", rating: 5, fecha: "hace 2 días", likes: 34, texto: "Clásico atemporal. El aroma de la mujer moderna. Una obra maestra que jamás pasa de moda. La sillage es increíble.", tags: ["Clásico", "Elegante", "Femenino"] },
      { user: "scentlover_es", rating: 4, fecha: "hace 1 semana", likes: 19, texto: "Magnífico pero puede resultar intenso para uso diario. Ideal para ocasiones especiales. La duración es excepcional.", tags: ["Intenso", "Especial"] }
    ]
  },
  {
    id: 2, nombre: "Replica Jazz Club", marca: "Maison Margiela", marcaId: 2, año: 2013,
    genero: "masculino", rating: 4.5, votos: 23180,
    familia: ["amaderado", "especiado", "oriental"],
    estacion: ["otono", "invierno"],
    duracion: 72, proyeccion: 58, dia: 28,
    bottleColor: "linear-gradient(160deg,#E8E0D5,#C5B49A)",
    notas: {
      salida: ["Ron", "Café", "Vetiver"],
      corazon: ["Clavo", "Tabaco", "Iris"],
      fondo: ["Vainilla", "Madera", "Ámbar gris"]
    },
    descripcion: "Una noche en un jazz bar de los años 50. La combinación de ron, café y tabaco crea una fragancia sofisticada y envolvente que evoca conversaciones íntimas al calor de una copa.",
    reviews: [
      { user: "marc_olfato", rating: 5, fecha: "hace 3 días", likes: 47, texto: "Jazz Club te transporta a una noche en un bar de los años 50. La combinación de ron, café y tabaco es magistral: sofisticado sin ser pesado, seductor sin ser vulgar.", tags: ["Seductor", "Amaderado", "Noche"] },
      { user: "scentvisionary", rating: 4, fecha: "hace 1 semana", likes: 23, texto: "El fondo de vainilla y madera lo hace perfectamente wearable. No tan exclusivo como otros de la colección Replica, pero definitivamente uno de los más acertados para el día a día otoñal.", tags: ["Wearable", "Otoño"] }
    ]
  },
  {
    id: 3, nombre: "Sauvage", marca: "Dior", marcaId: 3, año: 2015,
    genero: "masculino", rating: 4.3, votos: 61400,
    familia: ["amaderado", "especiado", "citrico"],
    estacion: ["primavera", "verano", "otono"],
    duracion: 85, proyeccion: 88, dia: 68,
    bottleColor: "linear-gradient(160deg,#1A2744,#0D1B3E)",
    notas: {
      salida: ["Bergamota", "Pimienta", "Lavanda"],
      corazon: ["Pimienta de Sichuan", "Lavanda", "Geranio rosa"],
      fondo: ["Ambroxan", "Cedro", "Vetiver"]
    },
    descripcion: "Salvaje y refinado a la vez. Sauvage evoca la libertad y los paisajes áridos del sur de Francia con su explosión de bergamota y la calidez duradera del ambroxan.",
    reviews: [
      { user: "dior_fan_barca", rating: 5, fecha: "hace 1 día", likes: 82, texto: "El perfume más vendido del mundo tiene razón de serlo. Versátil, fresco, poderoso. Sillage bestial. Todo el mundo lo huele.", tags: ["Versátil", "Bestia", "Verano"] },
      { user: "noseknows", rating: 3, fecha: "hace 5 días", likes: 12, texto: "Muy bueno pero demasiado común. Lo lleva todo el mundo. Técnicamente impecable pero sin personalidad propia para mí.", tags: ["Común", "Fresco"] }
    ]
  },
  {
    id: 4, nombre: "Black Orchid", marca: "Tom Ford", marcaId: 4, año: 2006,
    genero: "unisex", rating: 4.6, votos: 31200,
    familia: ["oriental", "floral", "especiado"],
    estacion: ["otono", "invierno"],
    duracion: 90, proyeccion: 82, dia: 22,
    bottleColor: "linear-gradient(160deg,#2C1A2E,#1A0D1C)",
    notas: {
      salida: ["Trufa negra", "Ylang-ylang", "Bergamota"],
      corazon: ["Orquídea negra", "Flor de loto", "Frutas"],
      fondo: ["Pachulí", "Vainilla", "Vetiver", "Sándalo"]
    },
    descripcion: "Oscuro, sensual, misterioso. Black Orchid es una declaración de sofisticación con su mezcla única de trufa negra, orquídeas y especias orientales. Una fragancia para la noche más especial.",
    reviews: [
      { user: "luxe_scentist", rating: 5, fecha: "hace 4 horas", likes: 56, texto: "Absolutamente magnífico. La trufa negra en la salida es una experiencia única. Deja una estela impresionante que perdura horas. Para ocasiones muy especiales.", tags: ["Lujoso", "Noche", "Especial"] }
    ]
  },
  {
    id: 5, nombre: "Light Blue", marca: "Dolce & Gabbana", marcaId: 5, año: 2001,
    genero: "femenino", rating: 4.2, votos: 52000,
    familia: ["citrico", "acuatico", "floral"],
    estacion: ["primavera", "verano"],
    duracion: 55, proyeccion: 50, dia: 85,
    bottleColor: "linear-gradient(160deg,#D4E8F0,#9CC5D8)",
    notas: {
      salida: ["Manzana siciliana", "Cedro", "Campanilla"],
      corazon: ["Bambú", "Jazmín", "Rosa blanca"],
      fondo: ["Cedro", "Almizcle", "Ámbar"]
    },
    descripcion: "El verano en una botella. Light Blue captura la esencia del Mediterráneo: frescura cítrica, brisa marina y calidez del sol sobre la piel. Un clásico de temporada incontestable.",
    reviews: [
      { user: "verano_eterno", rating: 5, fecha: "hace 2 semanas", likes: 38, texto: "Mi perfume de verano de siempre. Fresco, ligero, limpio. Perfecto para el calor y para la playa. Las notas cítricas son maravillosas.", tags: ["Verano", "Playa", "Fresco"] }
    ]
  },
  {
    id: 6, nombre: "Oud Wood", marca: "Tom Ford", marcaId: 4, año: 2007,
    genero: "unisex", rating: 4.7, votos: 28900,
    familia: ["amaderado", "oriental"],
    estacion: ["otono", "invierno"],
    duracion: 88, proyeccion: 75, dia: 35,
    bottleColor: "linear-gradient(160deg,#3D2A1A,#231507)",
    notas: {
      salida: ["Oud", "Rosa", "Cardamomo"],
      corazon: ["Sandalo", "Vetiver", "Cedro"],
      fondo: ["Ámbar", "Vainilla", "Tonka"]
    },
    descripcion: "El oud más accesible y refinado de la perfumería occidental. Tom Ford toma el ingrediente más preciado de Oriente y lo envuelve en una capa de sándalo y cedro que lo hace irresistible.",
    reviews: [
      { user: "oud_lover_mad", rating: 5, fecha: "hace 6 días", likes: 67, texto: "El mejor oud occidental sin duda. No tan intenso como los orientales puros pero con toda la magia de ese palo precioso. Adictivo.", tags: ["Oud", "Adictivo", "Lujo"] }
    ]
  },
  {
    id: 7, nombre: "La Vie est Belle", marca: "Lancôme", marcaId: 6, año: 2012,
    genero: "femenino", rating: 4.3, votos: 45600,
    familia: ["oriental", "floral", "gourmand"],
    estacion: ["otono", "invierno", "primavera"],
    duracion: 80, proyeccion: 70, dia: 55,
    bottleColor: "linear-gradient(160deg,#F5E6F0,#D4A8C4)",
    notas: {
      salida: ["Grosella negra", "Pera"],
      corazon: ["Iris", "Jazmín", "Neroli"],
      fondo: ["Pralinado", "Vainilla", "Pachulí", "Sándalo"]
    },
    descripcion: "Un manifiesto de felicidad en formato olfativo. La iris y el pralinado crean una dualidad única entre elegancia floral y gourmand dulce que ha conquistado millones de corazones.",
    reviews: []
  },
  {
    id: 8, nombre: "Aventus", marca: "Creed", marcaId: 7, año: 2010,
    genero: "masculino", rating: 4.8, votos: 37800,
    familia: ["citrico", "amaderado", "floral"],
    estacion: ["primavera", "verano", "otono"],
    duracion: 82, proyeccion: 76, dia: 70,
    bottleColor: "linear-gradient(160deg,#2A3A2A,#162416)",
    notas: {
      salida: ["Piña", "Bergamota", "Manzana", "Grosella negra"],
      corazon: ["Abedul", "Pachulí", "Rosa", "Jazmín"],
      fondo: ["Almizcle", "Roble", "Ámbar gris", "Vetiver"]
    },
    descripcion: "El santo grial de la perfumería masculina de nicho. Inspirado en la vida de Napoleón Bonaparte, Aventus es una oda al éxito, la fuerza y la elegancia. Referencia absoluta del sector.",
    reviews: [
      { user: "aventus_obsessed", rating: 5, fecha: "hace 3 días", likes: 94, texto: "El mejor perfume masculino creado jamás. La combinación de piña y abedul crea algo completamente único. Sillage extraordinario, longevidad bestial. Vale cada euro.", tags: ["Santo grial", "Masculino", "Nicho"] }
    ]
  },
  {
    id: 9, nombre: "Coco Mademoiselle", marca: "Chanel", marcaId: 1, año: 2001,
    genero: "femenino", rating: 4.5, votos: 55400,
    familia: ["oriental", "floral", "citrico"],
    estacion: ["primavera", "otono"],
    duracion: 75, proyeccion: 68, dia: 65,
    bottleColor: "linear-gradient(160deg,#1A1A1A,#333333)",
    notas: {
      salida: ["Naranja", "Bergamota", "Mandarina"],
      corazon: ["Rosa", "Ylang-ylang", "Mimosa"],
      fondo: ["Pachulí", "Vetiver", "Almizcle", "Sándalo"]
    },
    descripcion: "La alternativa joven y audaz al clásico N°5. Coco Mademoiselle combina la frescura cítrica de la salida con un corazón floral y una base oriental ahumada de gran personalidad.",
    reviews: []
  },
  {
    id: 10, nombre: "Flowerbomb", marca: "Viktor & Rolf", marcaId: 8, año: 2005,
    genero: "femenino", rating: 4.4, votos: 42000,
    familia: ["floral", "oriental", "gourmand"],
    estacion: ["primavera", "otono", "invierno"],
    duracion: 85, proyeccion: 78, dia: 50,
    bottleColor: "linear-gradient(160deg,#F0C8D8,#D48AAC)",
    notas: {
      salida: ["Bergamota", "Té"],
      corazon: ["Jazmín", "Catleya", "Rosa", "Freesia"],
      fondo: ["Pachulí", "Almizcle", "Vainilla"]
    },
    descripcion: "Una explosión floral de feminidad irresistible. Flowerbomb redefine el concepto de perfume femenino con su bouquet exuberante y su base oriental cálida y envolvente.",
    reviews: []
  },
  {
    id: 11, nombre: "Y", marca: "Yves Saint Laurent", marcaId: 9, año: 2017,
    genero: "masculino", rating: 4.4, votos: 28500,
    familia: ["amaderado", "especiado", "citrico"],
    estacion: ["primavera", "verano", "otono"],
    duracion: 76, proyeccion: 72, dia: 72,
    bottleColor: "linear-gradient(160deg,#1E3A5F,#0A1E35)",
    notas: {
      salida: ["Manzana", "Bergamota", "Jengibre"],
      corazon: ["Salvia", "Geranio", "Violeta"],
      fondo: ["Cedro", "Ámbar", "Almizcle"]
    },
    descripcion: "Y representa al hombre moderno: activo, apasionado, libre. La salida de manzana y jengibre evoluciona hacia un corazón especiado y una base de cedro cálida y duradera.",
    reviews: []
  },
  {
    id: 12, nombre: "Miss Dior", marca: "Dior", marcaId: 3, año: 1947,
    genero: "femenino", rating: 4.6, votos: 38900,
    familia: ["floral", "citrico"],
    estacion: ["primavera", "verano"],
    duracion: 70, proyeccion: 62, dia: 75,
    bottleColor: "linear-gradient(160deg,#F5E8E8,#E8C4C4)",
    notas: {
      salida: ["Bergamota", "Albahaca"],
      corazon: ["Rosa de mayo", "Jazmín", "Iris"],
      fondo: ["Almizcle", "Pachulí", "Ámbar"]
    },
    descripcion: "Un clásico inmortal de la alta perfumería francesa. Miss Dior representa la feminidad elegante en su expresión más pura: flores de mayo, jazmín exquisito y una base ligeramente terrosa.",
    reviews: []
  }
];

const marcasDB = [
  { id: 1, nombre: "Chanel", pais: "Francia", perfumes: 142, descripcion: "La casa de moda más icónica del mundo, fundada por Gabrielle Chanel en 1910." },
  { id: 2, nombre: "Maison Margiela", pais: "Francia", perfumes: 48, descripcion: "La colección Replica reimagina momentos de la vida cotidiana en formato olfativo." },
  { id: 3, nombre: "Dior", pais: "Francia", perfumes: 187, descripcion: "Christian Dior fundó su casa de modas en 1946 y lanzó Miss Dior al año siguiente." },
  { id: 4, nombre: "Tom Ford", pais: "Estados Unidos", perfumes: 93, descripcion: "El diseñador texano creó una de las líneas de nicho más deseadas del mundo." },
  { id: 5, nombre: "Dolce & Gabbana", pais: "Italia", perfumes: 76, descripcion: "La firma italiana combina sensualidad mediterránea con elegancia a la italiana." },
  { id: 6, nombre: "Lancôme", pais: "Francia", perfumes: 65, descripcion: "Maison de beauté fundada en 1935 conocida por sus fragancias femeninas sofisticadas." },
  { id: 7, nombre: "Creed", pais: "Reino Unido", perfumes: 38, descripcion: "Casa de perfumería fundada en 1760. Proveedores de la realeza europea." },
  { id: 8, nombre: "Viktor & Rolf", pais: "Países Bajos", perfumes: 29, descripcion: "El dúo de diseñadores holandeses revolucionó la perfumería con Flowerbomb." },
  { id: 9, nombre: "Yves Saint Laurent", pais: "Francia", perfumes: 88, descripcion: "YSL es sinónimo de lujo accesible y fragancias de gran proyección." },
  { id: 10, nombre: "Jo Malone", pais: "Reino Unido", perfumes: 54, descripcion: "Fragancias sofisticadas para combinar y crear tu propia expresión olfativa." },
  { id: 11, nombre: "Hermès", pais: "Francia", perfumes: 67, descripcion: "La maison del Faubourg Saint-Honoré lleva su elegancia al universo de los perfumes." },
  { id: 12, nombre: "Byredo", pais: "Suecia", perfumes: 31, descripcion: "La firma escandinava ha conquistado el mercado de nicho con su estética minimalista." },
  { id: 13, nombre: "Acqua di Parma", pais: "Italia", perfumes: 45, descripcion: "La fragancia italiana más antigua del siglo XX, nacida en Parma en 1916." },
  { id: 14, nombre: "Guerlain", pais: "Francia", perfumes: 120, descripcion: "La maison de perfumería más antigua de París, fundada en 1828." },
  { id: 15, nombre: "Givenchy", pais: "Francia", perfumes: 72, descripcion: "La elegancia parisina de Hubert de Givenchy trasladada al mundo de la perfumería." },
  { id: 16, nombre: "Giorgio Armani", pais: "Italia", perfumes: 85, descripcion: "El maestro italiano del minimalismo traslada su visión a fragancias atemporales." }
];

const articulosDB = [
  {
    id: 1, titulo: "Los 10 mejores perfumes para el otoño 2025",
    categoria: "Top listas", fecha: "15 nov 2025",
    resumen: "Con la llegada del frío, los amaderados y orientales toman protagonismo. Hemos seleccionado las fragancias más destacadas para esta temporada.",
    imagen: "otoño"
  },
  {
    id: 2, titulo: "Guía completa para entender la pirámide olfativa",
    categoria: "Guías", fecha: "8 nov 2025",
    resumen: "¿Qué son las notas de salida, corazón y fondo? Todo lo que necesitas saber para interpretar la evolución de cualquier fragancia sobre tu piel.",
    imagen: "guia"
  },
  {
    id: 3, titulo: "Novedades: Los lanzamientos más esperados de 2025",
    categoria: "Novedades", fecha: "1 nov 2025",
    resumen: "Las grandes maisons y las firmas de nicho han presentado sus colecciones más ambiciosas. Analizamos los lanzamientos que han sacudido el sector.",
    imagen: "novedades"
  },
  {
    id: 4, titulo: "La historia detrás de Chanel N°5",
    categoria: "Historia", fecha: "22 oct 2025",
    resumen: "El perfume más vendido del mundo cumple más de 100 años. Repasamos la historia de la creación que cambió la perfumería para siempre.",
    imagen: "historia"
  },
  {
    id: 5, titulo: "Cómo aplicar el perfume para que dure más",
    categoria: "Guías", fecha: "14 oct 2025",
    resumen: "La técnica de aplicación marca la diferencia. Te enseñamos los puntos de pulso, cómo preparar la piel y los errores más comunes que debes evitar.",
    imagen: "tips"
  },
  {
    id: 6, titulo: "Perfumes unisex: La nueva era sin género",
    categoria: "Tendencias", fecha: "5 oct 2025",
    resumen: "Las fronteras de género en la perfumería han desaparecido. Exploramos el auge de las fragancias que trascienden cualquier clasificación.",
    imagen: "unisex"
  }
];

