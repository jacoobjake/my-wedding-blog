import type { CustomFlowbiteTheme } from 'flowbite-react';

export const customTextInputTheme: CustomFlowbiteTheme['textInput'] = {
    field: {
        input: {
            base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 text-center placeholder:text-center focus:ring-pink-300 focus:border-pink-300",
            colors: {
                pink: "bg-pink border-pink-200 text-gray-900 focus:border-pink-300 focus:ring-pink-300",
                mine: "bg-white border-tea-green text-gray-900 focus:border-apple-green focus:ring-moss-green"
            }
        }
    },
};