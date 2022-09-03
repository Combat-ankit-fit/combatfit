import { useBreakpointValue, Box } from '@chakra-ui/react';
import DesktopDrawer from './DesktopDrawer';

const Sidebar = ({ presentItem }) => {
    const isMobileView = useBreakpointValue({ base: true, md: false });

    return !isMobileView && <DesktopDrawer presentItem={presentItem} />;
};

export default Sidebar;
