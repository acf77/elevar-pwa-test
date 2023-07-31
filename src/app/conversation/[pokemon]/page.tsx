import { ConversationCard } from "@/components/conversation-card";
import { getPokemon } from "@/services";

export default async function Conversation({ params }: { params: { pokemon: string } }) {

  const pokemon = await getPokemon({ pokemon: params.pokemon });


  return (
    <>
      <ConversationCard {...pokemon} />
    </>
  )
}
