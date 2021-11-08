const Quote = ({ quote, author }) => {
  return (
    <div className="flex flex-col space-y-2">
      <p className=" font-arial text-9xl font-bold w-max self-start leading-3">
        "
      </p>
      <p className="text-lg text-shark-400 leading-relaxed">{quote}</p>
      <p className="text-lg text-shark-400 leading-relaxed self-end">
        - {author}
      </p>
      <p className=" font-arial text-9xl font-bold w-max self-end">"</p>
    </div>
  );
};

export default Quote;
