import Item from "./item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1985} />   {/* ✅ */}
        <Item ano_lancamento={2000} />                   {/* ⚠️ "marca" ausente */}
        <Item marca="BMW" ano_lancamento="2000" />       {/* ⚠️ string no lugar de number */}
        <Item />                                         {/* ⚠️ tudo ausente */}
      </ul>
    </>
  );
}

export default List;
