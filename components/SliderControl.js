import {
    FormControl,
    FormLabel,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
} from '@chakra-ui/react';

const SliderControl = ({ label, name }) => {
    return (
        <FormControl>
            <FormLabel color="white">{label}</FormLabel>
            <Slider id={name} colorScheme="orange">
                <SliderTrack height="6px">
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderMark value={1} backgroundColor="white"></SliderMark>
                <SliderThumb />
            </Slider>
        </FormControl>
    );
};

export default SliderControl;
