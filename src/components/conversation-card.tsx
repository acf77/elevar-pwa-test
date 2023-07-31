"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Pokemon } from "@/@types"
import { Input } from "@/components/ui/input"
import { capitalize } from "@/lib/utils"
import { CardComponent } from "./card"
import { Button } from "./ui/button"
import { Stack } from "./ui/stack"

const ConversationCard = (pokemon: Pokemon) => {

  const router = useRouter()

  //local state
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<string[]>([])


  const handleSendMessage = () => {
    setMessages([...messages, message])
    setMessage("")
  }

  return (
    <>
      <Stack direction="row" className="p-4 justify-between items-center ">

        <ArrowLeft size={18} className="my-4" onClick={() => router.back()} />
        <p><strong>Messages</strong></p>
      </Stack>
      <CardComponent title={capitalize(pokemon.name)}>
        <Stack gap={4} >
          <Stack direction="row" gap={2} className="items-center">
            <Image height={48} width={48} alt={pokemon.name} src={pokemon.sprites.front_default} className="p-0" />
            <p className="rounded-md bg-pink-100 p-4 h-content">
              Hey there!
            </p>
          </Stack>
          {messages.length > 0 && <Stack direction="row" gap={4} className="items-center justify-end" >
            <p className="rounded-md bg-slate-100 p-4 h-content">
              {messages}
            </p>
            <Image height={24} width={32} alt={pokemon.name} src={"https://static.wikia.nocookie.net/ideas/images/9/9f/Ash_ketchum_render_by_tzblacktd-da9k0wb.png/revision/latest?cb=20180427162023"} className="p-0" />
          </Stack>}
          <Stack direction="row" gap={4} >
            <Input value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSendMessage()} />
            <Button onClick={handleSendMessage}>Send</Button>
          </Stack>
        </Stack>
      </CardComponent>
    </>
  )
}

export { ConversationCard }
