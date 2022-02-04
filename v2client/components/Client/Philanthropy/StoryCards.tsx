interface StoryCardProps {
  thumbnail: string;
  title: string;
  content: string;
}

const StoryCard = (props: StoryCardProps) => {
  const { thumbnail, title, content } = props;

  return (
    <div className="m-4 px-4 pb-4 bg-white shadow rounded w-4/12">
      <img src={thumbnail} alt={title} className="m-0 w-full" />
      <p className="font-bold text-xl">{title}</p>
      <p className="text-[#535050] text-xl">{content}</p>
    </div>
  );
};

export default StoryCard;
