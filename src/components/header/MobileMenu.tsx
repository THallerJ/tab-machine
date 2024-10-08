import AuthManager from './AuthManager';
import styles from './styles/header.module.scss';
import Link from 'next/link';

const MobileMenu = ({ showMenu, onNavigate }: MobileMenuProps) => {
  return (
    <div
      className={`${styles.mobileMenu} 
        ${showMenu ? styles.mobileMenuTransform : null}`}
    >
      <nav className={styles.navMobile}>
        <Link
          prefetch={false}
          href={'/'}
          className={styles.linkMobile}
          onClick={onNavigate}
        >
          View Tabs
        </Link>
        <Link
          prefetch={false}
          href={'/tab_editor'}
          className={styles.linkMobile}
          onClick={onNavigate}
        >
          Create Tab
        </Link>
        <Link
          prefetch={false}
          href={'/my_tabs'}
          className={styles.linkMobile}
          onClick={onNavigate}
        >
          My Tabs
        </Link>
      </nav>
      <AuthManager isMobile />
    </div>
  );
};

export default MobileMenu;

type MobileMenuProps = {
  showMenu: boolean;
  onNavigate: () => void;
};
