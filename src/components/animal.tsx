type AnimalProps = {
  name: string;
  imageUrl: string;
}

export function Animal({ imageUrl, name }: AnimalProps) {
  return (
    <div className="relative">
      <img src={imageUrl} alt={name} className="rounded-lg" />
      <span className="text-center absolute left-1/2 transform -translate-x-1/2 bottom-20 text-white text-3xl p-5 backdrop-blur-sm rounded-lg border-white border-2">{name}</span>
    </div>
  )
}