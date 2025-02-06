

interface UserMenuItem {
  id: number;
  title: string;
  icon: string;
  color?: string;
  path: string;
}

const userMenuItems: UserMenuItem[] = [
  {
    id: 1,
    title: 'Hồ sơ',
    icon: 'mingcute:user-2-fill',
    color: 'primary.dark',
    path: '#!',
  },
  {
    id: 2,
    title: 'Đăng xuất',
    icon: 'material-symbols:logout',
    color: 'error.main',
    path: "",
  },
];

export default userMenuItems;
