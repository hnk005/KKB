export interface NavItem {
  id: number;
  path: string;
  title: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: '#best-seller',
    title: 'Bán chạy',
    active: true,
  },
  {
    id: 2,
    path: '#discount',
    title: 'Giảm giá',
    active: true,
  },
  {
    id: 3,
    path: '#nomarl',
    title: 'Sản Phẩm',
    active: true,
  },
  {
    id: 4,
    path: '#contact',
    title: 'Liên hệ',
    active: true,
  },
];

export default navItems;
