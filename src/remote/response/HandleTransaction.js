function makeObject(from, to, type, value, date, hash)
{
  return {
    from : from,
    to : to,
    type : type,
    value : value,
    date : date,
    hash : hash,
  };
}


function handleTransaction(account, response)
{
    const sendList = [];
  for (let i = 0; i < response.data.length; i++) {
    if (
      response.data[i]?._from === account ||
      response.data[i]?._to === account
    ) {
      const d = response.data[i];
      sendList.push(makeObject(d._from, d._to, d._type, d._point, d._date, d._hash));
    }
  }

  return sendList;
}

export default handleTransaction;