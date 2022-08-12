import { useBreakpointValue, Box } from '@chakra-ui/react';
import DesktopDrawer from './DesktopDrawer';

const Sidebar = () => {
    const isMobileView = useBreakpointValue({ base: true, md: false });

    return !isMobileView && <DesktopDrawer />;
};

export default Sidebar;
