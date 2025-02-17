export interface NavItem {
  id: number;
  path: string;
  title: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: '#home-section',
    title: 'Trang chủ',  
    active: true
  },
  {
    id: 2,
    path: '#best-seller-section',
    title: 'Bán chạy',
    active: false
  },
  {
    id: 3,
    path: '#discount-section',
    title: 'Giảm giá',
    active: false
  },
  {
    id: 4,
    path: '#nomarl-section',
    title: 'Sản Phẩm',
    active: false
  },
  {
    id: 5,
    path: '#contact-section',
    title: 'Liên hệ',
    active: false
  },
];

export default navItems;
