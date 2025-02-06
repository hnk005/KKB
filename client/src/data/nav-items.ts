export interface NavItem {
  id: number;
  path: string;
  title: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: '#1',
    title: 'Sản phẩm',
    active: true,
  },
  {
    id: 2,
    path: '#2',
    title: 'Giảm giá',
    active: true,
  },
  {
    id: 3,
    path: '#3',
    title: 'Liên hệ',
    active: true,
  },
];

export default navItems;
