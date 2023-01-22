import { Plus, X } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';
import logoImage from "../assets/logo.svg";
import { useState } from "react";
import { NewHabitForm } from "./NewHabitForm";

export function Header() {
  /*
  // imperativa vs declarativa
  // document.create ... 
  // no react é declarativa: cria condição e reage a condição!

  const [isModalOpen, setIsModalOpen] = useState(false)

  function newHabit() {
    //abrir um modal de criação
    setIsModalOpen(true)

    // radix ui para componentes de acessibilidade
  }
  { isModalOpen ? <div>
            

          </div> : null
          }

          botao?: onClick={functionName}
  */

  // o dialog.portal joga o modal para toda a tela!!
  
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} alt="Habits" />

      <Dialog.Root>
        <Dialog.Trigger
          type='button'
          className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300'
        > <Plus size={20} className='text-violet-500'></Plus> Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>

          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6">
              <X size={24} aria-label="Fechar"/>
            </Dialog.Close>
            <Dialog.Title className="text-3xl leading-tight font-bold">Criar Hábito</Dialog.Title>
            
            <NewHabitForm/>
          </Dialog.Content>

        </Dialog.Portal>
      </Dialog.Root>


    </div>
  )
}