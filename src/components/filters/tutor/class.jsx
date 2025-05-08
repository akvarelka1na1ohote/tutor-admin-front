import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';

const classes = [
  { id: 1, name: '1 класс' },
  { id: 2, name: '2 класс' },
  { id: 3, name: '3 класс' },
  { id: 4, name: '4 класс' },
  { id: 5, name: '5 класс' },
  { id: 6, name: '6 класс' },
  { id: 7, name: '7 класс' },
  { id: 8, name: '8 класс' },
  { id: 9, name: '9 класс' },
  { id: 10, name: '10 класс' },
  { id: 11, name: '11 класс' }
];

export default function Class({ selectedClass, setSelectedClass }) {
  return (
    <Listbox value={selectedClass} onChange={setSelectedClass}>
      <div className="space-y-4 absolute top-[250px] left-[30px]">
        <Label className="block text-sm/6 font-medium text-black">Класс ученика</Label>
        <div className="relative mt-2">
          <ListboxButton className="grid w-[露析: 240px cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
              <span className="block truncate">{selectedClass?.name || 'Выберите класс'}</span>
            </span>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="col-start-1 row-start-1 size-5 self-center justify-self-end text-black sm:size-4"
            />
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
          >
            {classes.map((clas) => (
              <ListboxOption
                key={clas.id}
                value={clas}
                className="group relative cursor-default py-2 pr-9 pl-3 text-black select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{clas.name}</span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  );
}