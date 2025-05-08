import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

const items = [
  {
    id: 1,
    name: 'Математика'
  },
  {
    id: 2,
    name: 'Алгебра'
  },
  {
    id: 3,
    name: 'Геометрия'
  },
  {
    id: 4,
    name: 'Алгебра и начала математического анализа'
  },
  {
    id: 5,
    name: 'Информатика'
  },
  {
    id: 6,
    name: 'Черчение'
  },
  {
    id: 7,
    name: 'Окружающий мир'
  },
  {
    id: 8,
    name: 'География'
  },
  {
    id: 9,
    name: 'Биология'
  },
  {
    id: 10,
    name: 'Экология'
  },
  {
    id: 11,
    name: 'Химия'
  },
  {
    id: 12,
    name: 'Физика'
  },
  {
    id: 13,
    name: 'Астрономия'
  },
  {
    id: 14,
    name: 'Английский язык'
  },
  {
    id: 15,
    name: 'Французкий язык'
  },
  {
    id: 16,
    name: 'Немецкий язык'
  },
  {
    id: 17,
    name: 'Испанский язык'
  },
  {
    id: 18,
    name: 'Итальянский язык'
  },
  {
    id: 19,
    name: 'Китайский язык'
  },
  {
    id: 20,
    name: 'Литература'
  },
  {
    id: 21,
    name: 'Русский язык'
  },
  {
    id: 22,
    name: 'История'
  },
  {
    id: 23,
    name: 'Обществознание'
  },
  {
    id: 24,
    name: 'Право'
  },
  {
    id: 25,
    name: 'Экономика'
  }
]

export default function Items() {
  const [selected, setSelected] = useState(items[1])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="space-y-4 absolute top-[150px] left-[30px] "> 
        <Label className="block text-sm/6 font-medium text-black">Предметы</Label>
        <div>
          <ListboxButton className="grid w-[240px] cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-2 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
              <span className="block truncate">{selected.name}</span>
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
            {items.map((item) => (
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
  )
}