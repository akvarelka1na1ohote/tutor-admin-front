import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';

export default function Items({ subjects, selectedSubject, setSelectedSubject }) {
  return (
    <Listbox value={selectedSubject} onChange={setSelectedSubject}>
      <div className="space-y-4 absolute top-[150px] left-[30px]">
        <Label className="block text-sm/6 font-medium text-black">Предметы</Label>
        <div>
          <ListboxButton className="grid w-[240px] cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-2 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
              <span className="block truncate">{selectedSubject?.name || 'Выберите предмет'}</span>
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
            {subjects.map((item) => (
              <ListboxOption
                key={item.id}
                value={item}
                className="group relative cursor-default py-2 pr-9 pl-3 text-black select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{item.name}</span>
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