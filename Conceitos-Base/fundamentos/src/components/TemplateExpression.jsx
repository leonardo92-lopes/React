const TemplateExpression = () => {
  const name = " Leonardo";
  const date = {
    age: 32,
    job:'Programador '
  }
  return (
    <div>
      <h3>Bem vindo {name}</h3>
      <p> A soma é {2 + 2}</p>
      <p>Sua idade é {date.age} anos é você é um  {date.job}</p>
    </div>
  );
};

export default TemplateExpression;
