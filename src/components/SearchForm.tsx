import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

type Props = {
    handleSearch: (beerName: string) => Promise<void>;
};

const SearchForm: FC<Props> = ({ handleSearch }) => {
    const [formValue, setFormValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleSearch(formValue.toLowerCase());
    };

    return (
        <form
            className="m-auto h-10 flex rounded-md mt-20 w-80"
            onSubmit={handleSubmit}
        >
            <input
                onChange={handleChange}
                value={formValue}
                type="text"
                placeholder="Search for beer..."
                className="w-full p-3 rounded-tl-md rounded-bl-md focus:outline-none focus-visible:ring border-gray-200 shadow-sm border"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white p-3 flex items-center shadow-sm"
            >
                Search
            </button>
        </form>
    );
};

export default SearchForm;
