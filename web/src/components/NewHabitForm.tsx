import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from '../lib/axios';

const recorrWeekDays = [
  "D", "S", "T", "Q", "Q", "S", "S",
]

export function NewHabitForm() {

  const [title,setTitle] = useState('')
  const [weekDays,setWeekDays] = useState<number[]>([])

  async function createNewHabit(event:FormEvent){
    event.preventDefault()

    if(!title || weekDays.length === 0){
      return 
    }

    await api.post('habits', {
      title,
      weekDays,
    })

    setTitle("")
    setWeekDays([])

    alert('Hábito criado com sucesso!')
  }

  function handleToggleWeekDay(weekDay: number){
    if(weekDays.includes(weekDay)){
      const newWeekDays=weekDays.filter(day => day !== weekDay)
      setWeekDays(newWeekDays)
    } else{
      const newWeekDays= [...weekDays,weekDay]
      setWeekDays(newWeekDays)
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">Qual seu comprometimento ?</label>
      <input
        type="text"
        id="title"
        placeholder="Se exercitar, alimentação saudável, dormir bem, etc..."
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        onChange={event => setTitle(event.target.value)}
        value={title}
        >        
      </input>

      <label htmlFor="" className="font-semibold leading-tight mt-4">Qual a Recorrência ?</label>

      <div className="flex flex-row justify-between gap-2 mt-3">
        {recorrWeekDays.map((weekDay, index) => {
          return (
            <Checkbox.Root
              className="flex items-center gap-2 group flex-col"
              key={`${weekDay}-${index}`}
              checked={weekDays.includes(index)}
              onCheckedChange={() => handleToggleWeekDay(index)} 
            >
              <span className="font-semibold text-base text-white leading-tight group-data-[state=checked]:text-zinc-400">
                {weekDay}
              </span>

              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>
            </Checkbox.Root>
          )
        })}

      </div>

      <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 duration-100 hover:bg-green-500">
        <Check size={20} weight="bold" />
        Confirmar

      </button>



    </form>
  )
}