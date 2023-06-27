interface Props {
  title: string
}

export const Pokedex = ({title}: Props) => {
  return (
    <div>Pokedex -  {title}</div>
  )
}
