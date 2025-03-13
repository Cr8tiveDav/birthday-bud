const Person = ({ image, name, age }) => {
  return (
    <>
      <img src={image} className="img" alt={name} />
      <div className="content">
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </>
  );
};
export default Person;
