export interface ICelular {
  id: string;
  favorite: boolean;
  brand: string;
  model: string;
  display: {
    size: number;
    resolution: string;
    image?: string;
  };
  storage: {
    internal: number;
    external: boolean;
  };
  cameras: {
    front: number;
    rear: number;
  };
  battery: {
    capacity: number;
    removable: boolean;
  };
  operatingSystem: string;
  price: number;
}

// Ejemplo de datos mockeados
const celular1: ICelular = {
  id: "1",
  favorite: false,
  brand: "Samsung",
  model: "Galaxy S21",
  display: {
    size: 6.2,
    resolution: "1440x3200",
    image: "/assets/images.jpeg", 
  },
  storage: {
    internal: 128,
    external: true,
  },
  cameras: {
    front: 10,
    rear: 64,
  },
  battery: {
    capacity: 4000,
    removable: false,
  },
  operatingSystem: "Android",
  price: 999,
};

const celular2: ICelular = {
  id: "2",
  favorite: true,
  brand: "Apple",
  model: "iPhone 13",
  display: {
    size: 6.1,
    resolution: "1170x2532",
    image: "/assets/images.jpeg", 
  },
  storage: {
    internal: 256,
    external: false,
  },
  cameras: {
    front: 12,
    rear: 12,
  },
  battery: {
    capacity: 3110,
    removable: false,
  },
  operatingSystem: "iOS",
  price: 1099,
};
const celular3: ICelular = {
  id: "3",
  favorite: true,
  brand: "SAMSUMG",
  model: "s j8",
  display: {
    size: 5,
    resolution: "112",
    image: "/assets/images.jpeg", 
  },
  storage: {
    internal: 2526,
    external: false,
  },
  cameras: {
    front: 19,
    rear: 1200,
  },
  battery: {
    capacity: 99999,
    removable: false,
  },
  operatingSystem: "iOS",
  price: 0,
};

//
const celular4: ICelular = {
  id: "1",
  favorite: false,
  brand: "Apple",
  model: "iPhone 12",
  display: {
    size: 6.1,
    resolution: "2532 x 1170",
    image: "/assets/images.jpeg", 
  },
  storage: {
    internal: 64,
    external: false,
  },
  cameras: {
    front: 12,
    rear: 12,
  },
  battery: {
    capacity: 2815,
    removable: false,
  },
  operatingSystem: "iOS",
  price: 999,
};

const celular5: ICelular = {
  id: "2",
  favorite: true,
  brand: "Samsung",
  model: "Galaxy S21",
  display: {
    size: 6.2,
    resolution: "2400 x 1080",
    image: "/assets/images.jpeg", 
  },
  storage: {
    internal: 128,
    external: true,
  },
  cameras: {
    front: 10,
    rear: 64,
  },
  battery: {
    capacity: 4000,
    removable: false,
  },
  operatingSystem: "Android",
  price: 899,
};

const celular6: ICelular = {
  id: "3",
  favorite: true,
  brand: "Huawei",
  model: "P40 Pro",
  display: {
    size: 6.58,
    resolution: "2640 x 1200",
    image: "/assets/images.jpeg", 
  },
  storage: {
    internal: 256,
    external: false,
  },
  cameras: {
    front: 32,
    rear: 50,
  },
  battery: {
    capacity: 4200,
    removable: false,
  },
  operatingSystem: "Android",
  price: 1099,
};



// Declaro la const para usar estos datos 
const listPhones: ICelular[] = [celular1, celular2,celular3,celular4, celular5,celular6];

// Exporto los datos mockeados 
export { listPhones, celular1, celular2,celular3,celular4, celular5,celular6};
