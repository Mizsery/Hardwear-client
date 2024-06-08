interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;

  productInWishlist: ProductInWishlist[];
  productInCart: ProductInCart[];
  order: Order[];
}

interface Product {
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
  productInCart: ProductInCart[];
  productInOrder: ProductInOrder[];
}

type ProductWithoutRelation = Omit<
  Product,
  'productInWishlist' | 'productInCart' | 'productInOrder'
>;

interface Sizes {
  id: string;
  size: string;
  product: Product[];
  productId: string;
}

interface Category {
  id: string;
  category: string;
  product: Product[];
}

interface ProductInWishlist {
  id: string;
  product: Product;
  productId: string;
  user: User;
  userId: string;
}

interface ProductInCart {
  id: string;
  size: string;
  quantity: number;
  product: Product;
  productId: string;
  user: User;
  userId: string;
}

interface ProductInOrder {
  id: string;
  size: string;
  quantity: number;
  product: Product;
  productId: string;
  order: Order;
  orderId: string;
}

interface Order {
  id: string;
  address: Address;
  netAmount: number;
  createdAt: Date;
  user: User;
  userId: string;
  productInOrder: ProductInOrder[];
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}
