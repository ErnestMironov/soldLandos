import './../styles/index.scss';
import pie from './components/pie';
import themeSwitcher from './components/themeSwitcher';

pie();

const themeManager = themeSwitcher();
themeManager.init();
