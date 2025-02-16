export interface NavItem {
  id: number;
  path: string;
  title: string;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: '#home-section',
    title: 'Trang chủ',  
  },
  {
    id: 2,
    path: '#best-seller-section',
    title: 'Bán chạy',
  },
  {
    id: 3,
    path: '#discount-section',
    title: 'Giảm giá',
  },
  {
    id: 4,
    path: '#nomarl-section',
    title: 'Sản Phẩm',
  },
  {
    id: 5,
    path: '#contact-section',
    title: 'Liên hệ',
  },
];

export default navItems;
