// SearchBar.tsx
import React, { useState } from "react";
import { Group, Overlap, SearchBarContainer, TextWrapper, Div, Img, DivWrapper, OverlapGroup2, TextWrapper2, TextWrapper3, Group2, Group3, OverlapGroup3, Vector, Group4, Group5, OverlapGroup4, Vector2, Rectangle, Rectangle2 } from "./Searchbar.styles";
import Select from 'react-select';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { styled } from '@mui/system';

interface SearchBarProps {
    destinations: any[]; // Change the type accordingly
    accommodations: any[]; // Change the type accordingly
    onDestinationChange: (selectedOption: any) => void;
    onAccommodationChange: (selectedOption: any) => void;
    onDateChange: (ranges: any) => void;
    onToggleDatePicker: () => void;
}

const CustomDateRangePicker = styled(DateRangePicker)({
    width: '100%',
    '.rdrDefinedRangesWrapper': {
        display: 'none'
    }
});

const SearchBar = ({
    destinations,
    accommodations,
    onDestinationChange,
    onAccommodationChange,
    onDateChange,
    onToggleDatePicker,
}: SearchBarProps): JSX.Element => {
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    return (
        <SearchBarContainer>
            <Group>
                <Overlap>

                    <Div>
                        <Img src="../book_images/group-176.png" alt="Group" />
                        <DivWrapper>
                            <OverlapGroup2>
                                <TextWrapper2>Pick a date</TextWrapper2>
                                <TextWrapper3>Date</TextWrapper3>
                                <CustomDateRangePicker
                                    ranges={dateRange}
                                    onChange={onDateChange}
                                />
                            </OverlapGroup2>
                        </DivWrapper>
                    </Div>

                    <Group2>

                        <Group3>
                            <OverlapGroup3>
                                <TextWrapper2>How many Guests?</TextWrapper2>
                                <TextWrapper3>Guests</TextWrapper3>
                            </OverlapGroup3>
                        </Group3>

                        <Vector src="../book_images/vector.png" alt="Vector" />
                    </Group2>

                    <Group4>

                        <Group5>
                            <OverlapGroup4>
                                <TextWrapper3>Location</TextWrapper3>
                                <TextWrapper2>Search For A Destination</TextWrapper2>
                            </OverlapGroup4>
                        </Group5>

                        <Vector2 src="../book_images/image.png" alt="Vector" />
                    </Group4>

                    <Rectangle />
                    <Rectangle2 />

                </Overlap>
            </Group>
        </SearchBarContainer>
    );
};

export default SearchBar;
