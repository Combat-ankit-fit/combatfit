import { useBreakpointValue, Box } from '@chakra-ui/react';
import DesktopDrawer from './DesktopDrawer';

const Sidebar = ({
    presentItem,
    getItemsOnFitBasis,
    getItemsOnSizeBasis,
    getItemsOnColorBasis,
}) => {
    const isMobileView = useBreakpointValue({ base: true, md: false });

    return (
        !isMobileView && (
            <DesktopDrawer
                presentItem={presentItem}
                getItemsOnFitBasis={getItemsOnFitBasis}
                getItemsOnSizeBasis={getItemsOnSizeBasis}
                getItemsOnColorBasis={getItemsOnColorBasis}
            />
        )
    );
};

export default Sidebar;
