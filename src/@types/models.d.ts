interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;

  productInWishlist: ProductInWishlist[];
}

interface Products {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  sizes: Sizes[];
  category: Category;
  categoryId?: string;

  typeProduct: 'Wear' | 'Accessories';

  productInWishlist: ProductInWishlist[];
}

interface Sizes {
  id: string;
  size: string;
  product: Products[];
  productId: string;
}

interface Category {
  id: string;
  category: string;
  products: Products[];
}

interface ProductInWishlist {
  id: string;
  product: Products;
  productId: string;
  user: User;
  userId: string;
}

interface ProductInCart {
  id: string;
  product: Products;
  productId: string;
  size: string;
  quantity: number;
  user: User;
  userId: string;
}
